import { Injectable } from '@angular/core';

/* ============================================================================
 *  Public types (unchanged from your engine.ts)
 * ========================================================================== */

export type Value = number | string;



export type ValueType = 'number' | 'integer' | 'string' | 'unknown';

export interface ValidationOptions {
    writeExpression?: boolean;
    tagTypes?: Record<string, Exclude<ValueType, 'unknown'>>;
}

export interface Diagnostic {
    severity: 'error' | 'warning';
    stage: 'syntax' | 'semantic';
    code: string;
    message: string;
    position: number;
    line: number;
    column: number;
}

export interface ValidationResult {
    valid: boolean;
    diagnostics: Diagnostic[];
    ast?: AstNode;
    javascript?: string;
}

export type AstNode =
    | { type: 'literal'; value: Value }
    | { type: 'tag'; name: string }
    | { type: 'placeholder' }
    | { type: 'unary'; operator: string; operand: AstNode }
    | { type: 'binary'; operator: string; left: AstNode; right: AstNode }
    | { type: 'call'; name: string; argument?: AstNode | string; args?: AstNode[] }
    | { type: 'conditional'; condition: AstNode; whenTrue: AstNode; whenFalse: AstNode };

export interface LoadedRule {
    source: string;
    ast: AstNode;
    javascript: string;
    execute(context: RuntimeContext): Value;
}

type TokenKind =
    | 'number' | 'string' | 'identifier' | 'tag' | 'placeholder'
    | 'operator' | 'keyword' | 'lparen' | 'rparen' | 'comma' | 'eof';

interface Token {
    kind: TokenKind;
    text: string;
    value?: Value;
    start: number;
    end: number;
}

/* ============================================================================
 *  Rule-language reference (unchanged)
 * ========================================================================== */

export const RULE_LANGUAGE_REFERENCE = `/* ... copy verbatim from engine.ts ... */`.trim();

/* ============================================================================
 *  Errors
 * ========================================================================== */

export class ExpressionError extends Error {
    constructor(message: string, public readonly position: number) {
        super(`${message} at character ${position + 1}`);
    }
}

export class ExpressionValidationError extends Error {
    constructor(public readonly diagnostics: Diagnostic[]) {
        super(diagnostics.map(d => `${d.code}: ${d.message}`).join('; '));
    }
}

/* ============================================================================
 *  Tokenizer / Parser / Evaluator (identical to your engine.ts)
 *  Kept module-level (pure functions) so they are shared, not per-instance.
 * ========================================================================== */

const KEYWORDS = new Set(['IF', 'THEN', 'ELSE', 'AND', 'OR', 'NOT', 'MOD', 'EQ', 'NE', 'LT', 'GT', 'LE', 'GE']);
const TWO_CHAR_OPERATORS = new Set(['==', '<>', '<=', '>=', '&&', '||', '>>', '<<', '**']);
const ONE_CHAR_OPERATORS = new Set(['+', '-', '*', '/', '%', '&', '|', '^', '~', '<', '>']);

function tokenize(source: string): Token[] {
    // ... exact same code as your engine.ts ...
    const tokens: Token[] = [];
    let i = 0;
    while (i < source.length) {
        const start = i;
        const ch = source[i]!;
        if (/\s/.test(ch)) { i++; continue; }
        if (ch === '(') { tokens.push({ kind: 'lparen', text: ch, start, end: ++i }); continue; }
        if (ch === ')') { tokens.push({ kind: 'rparen', text: ch, start, end: ++i }); continue; }
        if (ch === ',') { tokens.push({ kind: 'comma', text: ch, start, end: ++i }); continue; }
        if (ch === '?') { tokens.push({ kind: 'placeholder', text: ch, start, end: ++i }); continue; }
        if (ch === '{') {
            const close = source.indexOf('}', i + 1);
            if (close < 0) throw new ExpressionError('Unclosed braced tag', start);
            const raw = source.slice(i + 1, close);           // e.g. "Local]Tag_1001.VAL"  (no leading '[')
            const m = raw.match(/^\[([^\]]+)\]([A-Za-z_][A-Za-z0-9_]*)\.([A-Za-z_][A-Za-z0-9_]*)$/);
            if (!m) {
                throw new ExpressionError(
                    `Invalid tag format '${raw}'. Expected {[ServerName]TagName.FIELD}`,
                    start
                );
            }
            const [, serverName, tagName, fieldName] = m;
            if (!serverName.trim()) {
                throw new ExpressionError('Server name cannot be empty', start);
            }
            i = close + 1;
            tokens.push({
                kind: 'tag',
                text: source.slice(start, i),
                value: raw,          // full inner text, e.g. "[Local]Tag_1001.VAL"
                start,
                end: i,
            });
            continue;
        }
        if (ch === '"') {
            i++;
            let value = '';
            while (i < source.length && source[i] !== '"') {
                if (source[i] === '\\' && i + 1 < source.length) {
                    const escaped = source[i + 1]!;
                    value += escaped === 'n' ? '\n' : escaped === 't' ? '\t' : escaped;
                    i += 2;
                } else value += source[i++]!;
            }
            if (source[i] !== '"') throw new ExpressionError('Unclosed string', start);
            i++;
            tokens.push({ kind: 'string', text: source.slice(start, i), value, start, end: i });
            continue;
        }
        const number = source.slice(i).match(/^(?:\d+(?:\.\d+)?|\.\d+)/)?.[0];
        if (number) {
            i += number.length;
            tokens.push({ kind: 'number', text: number, value: Number(number), start, end: i });
            continue;
        }
        const word = source.slice(i).match(/^[A-Za-z_][A-Za-z0-9_]*/)?.[0];
        if (word) {
            i += word.length;
            const upper = word.toUpperCase();
            tokens.push({ kind: KEYWORDS.has(upper) ? 'keyword' : 'identifier', text: upper, value: word, start, end: i });
            continue;
        }
        const two = source.slice(i, i + 2);
        if (TWO_CHAR_OPERATORS.has(two)) { i += 2; tokens.push({ kind: 'operator', text: two, start, end: i }); continue; }
        if (ONE_CHAR_OPERATORS.has(ch)) { i++; tokens.push({ kind: 'operator', text: ch, start, end: i }); continue; }
        throw new ExpressionError(`Unexpected character '${ch}'`, start);
    }
    tokens.push({ kind: 'eof', text: '', start: source.length, end: source.length });
    return tokens;
}

const RELATIONAL = new Set(['EQ', '==', 'NE', '<>', 'LT', '<', 'GT', '>', 'LE', '<=', 'GE', '>=']);
const ADDITIVE = new Set(['+', '-', 'OR', '||', '|', '^']);
const MULTIPLICATIVE = new Set(['*', '/', 'MOD', '%', '**', 'AND', '&&', '&', '>>', '<<']);
const UNARY = new Set(['NOT', '~', '+', '-']);

class Parser {
    private index = 0;
    constructor(private readonly tokens: Token[]) { }

    parse(): AstNode {
        const ast = this.expression();
        if (this.peek().kind !== 'eof') throw new ExpressionError(`Unexpected token '${this.peek().text}'`, this.peek().start);
        return ast;
    }

    private expression(): AstNode {
        if (this.match('IF')) {
            if (this.match('(')) {
                const condition = this.expression();
                if (this.peek().kind === 'rparen') {
                    this.advance();
                    this.consume('THEN', 'Expected THEN after IF condition');
                    const whenTrue = this.expression();
                    this.consume('ELSE', 'Expected ELSE');
                    const whenFalse = this.expression();
                    return { type: 'conditional', condition, whenTrue, whenFalse };
                }
                this.consume(',', "Expected ',' after IF condition");
                const whenTrue = this.expression();
                this.consume(',', "Expected ',' after IF true value");
                const whenFalse = this.expression();
                this.consume(')', "Expected ')' after IF arguments");
                return { type: 'conditional', condition, whenTrue, whenFalse };
            }
            const condition = this.expression();
            this.consume('THEN', 'Expected THEN');
            const whenTrue = this.expression();
            this.consume('ELSE', 'Expected ELSE');
            const whenFalse = this.expression();
            return { type: 'conditional', condition, whenTrue, whenFalse };
        }
        return this.relational();
    }

    private relational(): AstNode { return this.leftAssociative(() => this.additive(), RELATIONAL); }
    private additive(): AstNode { return this.leftAssociative(() => this.multiplicative(), ADDITIVE); }
    private multiplicative(): AstNode { return this.leftAssociative(() => this.unary(), MULTIPLICATIVE); }

    private leftAssociative(next: () => AstNode, operators: Set<string>): AstNode {
        let left = next();
        while (operators.has(this.peek().text)) {
            const operator = this.advance().text;
            left = { type: 'binary', operator, left, right: next() };
        }
        return left;
    }

    private unary(): AstNode {
        if (UNARY.has(this.peek().text)) return { type: 'unary', operator: this.advance().text, operand: this.unary() };
        return this.primary();
    }

    private primary(): AstNode {
        const token = this.advance();
        if (token.kind === 'number' || token.kind === 'string') return { type: 'literal', value: token.value! };
        if (token.kind === 'placeholder') return { type: 'placeholder' };
        if (token.kind === 'tag') return { type: 'tag', name: String(token.value) };
        if (token.kind === 'identifier') {
            const original = String(token.value);
            if (this.peek().kind !== 'lparen') {
                throw new ExpressionError(
                    `Unknown identifier '${original}'. Tags must use the form {[ServerName]TagName.FIELD}`,
                    token.start
                );
            }
            this.advance();                   // consume '('
            const name = token.text;

            // Zero-arg intrinsics
            if (name === 'CURRENTUSERNAME' || name === 'CURRENTLANGUAGE') {
                this.consume(')', "Expected ')'");
                return { type: 'call', name };
            }
            // One-string-arg intrinsic
            if (name === 'CURRENTUSERHASCODE') {
                const code = this.advance();
                if (code.kind !== 'identifier') throw new ExpressionError('Expected security code letters', code.start);
                this.consume(')', "Expected ')'");
                return { type: 'call', name, argument: String(code.value) };
            }

            // Generic: parse comma-separated argument list
            const args: AstNode[] = [];
            if (this.peek().kind !== 'rparen') {
                args.push(this.expression());
                while (this.peek().kind === 'comma') {
                    this.advance();
                    args.push(this.expression());
                }
            }
            this.consume(')', "Expected ')'");

            // Keep `argument` populated when there's exactly one arg, for backward compat
            return { type: 'call', name, args, ...(args.length === 1 ? { argument: args[0] } : {}) };
        }
        if (token.kind === 'lparen') {
            const value = this.expression();
            this.consume(')', "Expected ')'");
            return value;
        }
        throw new ExpressionError("Expected a value, tag, function, or '('", token.start);
    }

    private peek(): Token { return this.tokens[this.index]!; }
    private advance(): Token { return this.tokens[this.index++]!; }
    private match(text: string): boolean { if (this.peek().text === text) { this.index++; return true; } return false; }
    private consume(text: string, message: string): Token {
        const token = this.peek();
        const matches =
            text === ')' ? token.kind === 'rparen' :
                text === ',' ? token.kind === 'comma' :
                    token.text === text;
        if (!matches) throw new ExpressionError(message, token.start);
        return this.advance();
    }
}
/* ============================================================================
 *  Library functions catalogue
 *
 *  Two kinds:
 *   - "math"      : pure numeric, one argument, already implemented.
 *   - "library"   : domain-specific (file_bytes, alarm counts, time, etc.).
 *                   These have signatures the engine can't guess, so they are
 *                   declared here for the syntax checker and their bodies are
 *                   filled in by the caller via RuntimeContext.functions.
 * ========================================================================== */

export type FunctionCategory = 'math' | 'library';

/** Signature shape — used by the semantic checker only (not evaluation). */
export interface FunctionSignature {
    name: string;
    category: FunctionCategory;
    /** Minimum number of arguments. */
    minArgs: number;
    /** Maximum number of arguments. */
    maxArgs: number;
    /** Return type for the semantic checker. */
    returns: Exclude<ValueType, 'unknown'>;
}

/** Built-in math functions (already implemented in MATH_FUNCTIONS below). */
const MATH_FUNCTION_NAMES = new Set([
    'ARCCOS', 'ARCCOSD', 'ARCSIN', 'ARCSIND', 'ARCTAN', 'ARCTAND',
    'COS', 'COSD', 'LOG', 'LOG10', 'SIN', 'SIND', 'SQRT', 'TAN', 'TAND',
]);

/**
 * Library functions. Declared so the syntax checker accepts them; they are
 * executed via `RuntimeContext.functions[name](...)` at evaluation time.
 *
 * Adjust minArgs/maxArgs/returns to match your real implementations.
 */
// Functions: delcarations
export const LIBRARY_FUNCTIONS: Record<string, FunctionSignature> = {
    // ── File / disk ─────────────────────────────────────────────────────────
    FILE_EXISTS: { name: 'FILE_EXISTS', category: 'library', minArgs: 1, maxArgs: 1, returns: 'integer' },
    FREE_BYTES: { name: 'FREE_BYTES', category: 'library', minArgs: 0, maxArgs: 1, returns: 'number' },

    // ── Time ────────────────────────────────────────────────────────────────
    AFTER_TIME: { name: 'AFTER_TIME', category: 'library', minArgs: 1, maxArgs: 1, returns: 'integer' },
    BEFORE_TIME: { name: 'BEFORE_TIME', category: 'library', minArgs: 1, maxArgs: 1, returns: 'integer' },
    INTERVAL: { name: 'INTERVAL', category: 'library', minArgs: 2, maxArgs: 2, returns: 'integer' },
    TIME: { name: 'TIME', category: 'library', minArgs: 0, maxArgs: 0, returns: 'string' },

    // ── Comms ───────────────────────────────────────────────────────────────
    COMM_ERR: { name: 'COMM_ERR', category: 'library', minArgs: 0, maxArgs: 1, returns: 'integer' },

    // ── Alarm & Event (AE_*) ────────────────────────────────────────────────
    AE_ACTIVEEVENT: { name: 'AE_ACTIVEEVENT', category: 'library', minArgs: 0, maxArgs: 1, returns: 'integer' },
    AE_DISABLEDCOUNT: { name: 'AE_DISABLEDCOUNT', category: 'library', minArgs: 0, maxArgs: 1, returns: 'integer' },
    AE_FAULTEDALARMSEXIT: { name: 'AE_FAULTEDALARMSEXIT', category: 'library', minArgs: 0, maxArgs: 1, returns: 'integer' },
    AE_HIGHPRIORITYACTIVE: { name: 'AE_HIGHPRIORITYACTIVE', category: 'library', minArgs: 0, maxArgs: 1, returns: 'integer' },
    AE_HIGHSEVERITYACKED: { name: 'AE_HIGHSEVERITYACKED', category: 'library', minArgs: 0, maxArgs: 1, returns: 'integer' },
    AE_HIGHSEVERITY_UNACKED: { name: 'AE_HIGHSEVERITY_UNACKED', category: 'library', minArgs: 0, maxArgs: 1, returns: 'integer' },
    AE_INALMACKEDCOUNT: { name: 'AE_INALMACKEDCOUNT', category: 'library', minArgs: 0, maxArgs: 1, returns: 'integer' },
    AE_ALMSHELVEDCOUNT: { name: 'AE_ALMSHELVEDCOUNT', category: 'library', minArgs: 0, maxArgs: 1, returns: 'integer' },
    AE_INALMSUPPRESSCOUNT: { name: 'AE_INALMSUPPRESSCOUNT', category: 'library', minArgs: 0, maxArgs: 1, returns: 'integer' },
    AE_INALMUNACKEDCOUNT: { name: 'AE_INALMUNACKEDCOUNT', category: 'library', minArgs: 0, maxArgs: 1, returns: 'integer' },
    AE_NORMALSHELVEDCOUNT: { name: 'AE_NORMALSHELVEDCOUNT', category: 'library', minArgs: 0, maxArgs: 1, returns: 'integer' },
    AE_NORMALSUPRESSEDCOUNT: { name: 'AE_NORMALSUPRESSEDCOUNT', category: 'library', minArgs: 0, maxArgs: 1, returns: 'integer' },
    AE_NORMALUNACKEDCOUNT: { name: 'AE_NORMALUNACKEDCOUNT', category: 'library', minArgs: 0, maxArgs: 1, returns: 'integer' },
    AE_SHELEVEDALARMSEXIST: { name: 'AE_SHELEVEDALARMSEXIST', category: 'library', minArgs: 0, maxArgs: 1, returns: 'integer' },
    AE_UNACKEDALARMSEXIST: { name: 'AE_UNACKEDALARMSEXIST', category: 'library', minArgs: 0, maxArgs: 1, returns: 'integer' },
};
const MATH_FUNCTIONS: Record<string, (value: number) => number> = {
    SQRT: Math.sqrt, LOG: Math.log, LOG10: Math.log10, SIN: Math.sin, COS: Math.cos, TAN: Math.tan,
    ARCSIN: Math.asin, ARCCOS: Math.acos, ARCTAN: Math.atan,
    SIND: v => Math.sin(v * Math.PI / 180), COSD: v => Math.cos(v * Math.PI / 180), TAND: v => Math.tan(v * Math.PI / 180),
    ARCSIND: v => Math.asin(v) * 180 / Math.PI, ARCCOSD: v => Math.acos(v) * 180 / Math.PI, ARCTAND: v => Math.atan(v) * 180 / Math.PI
};

function truthy(value: Value): boolean { return typeof value === 'number' ? value !== 0 : value.length > 0; }
function numeric(value: Value, op: string): number {
    if (typeof value !== 'number') throw new Error(`${op} requires numeric operands`);
    return value;
}
function integer(value: Value, op: string): number {
    const result = numeric(value, op);
    if (!Number.isInteger(result)) throw new Error(`${op} requires integer operands`);
    return result;
}

function evaluate(node: AstNode, context: RuntimeContext): Value {
    switch (node.type) {
        case 'literal': return node.value;
        case 'tag': {
            if (!(node.name in context.tags)) throw new Error(`Unknown tag '${node.name}'`);
            return context.tags[node.name]!;
        }
        case 'placeholder': {
            if (context.input === undefined) throw new Error("The '?' placeholder requires an input value");
            return context.input;
        }
        case 'conditional':
            return evaluate(truthy(evaluate(node.condition, context)) ? node.whenTrue : node.whenFalse, context);
        case 'unary': {
            const value = evaluate(node.operand, context);
            if (node.operator === 'NOT') return truthy(value) ? 0 : 1;
            if (node.operator === '~') return ~integer(value, 'Bitwise complement');
            if (node.operator === '+') return numeric(value, 'Unary plus');
            return -numeric(value, 'Unary minus');
        }
        case 'call': {
            if (node.name === 'CURRENTUSERNAME') return context.currentUserName ?? '';
            if (node.name === 'CURRENTLANGUAGE') return context.currentLanguage ?? 'en-US';
            if (node.name === 'CURRENTUSERHASCODE') {
                const requested = String(node.argument).split('');
                return requested.some(c => context.securityCodes?.includes(c)) ? 1 : 0;
            }

            // Multi-arg path — taken for any parser-produced call node,
            // including zero-argument library calls like AE_HighSeverity_Unacked().
            if (node.args !== undefined) {
                const evaluatedArgs = node.args.map(a => evaluate(a, context));

                // Math function? Must be exactly 1 arg.
                const mathFn = MATH_FUNCTIONS[node.name];
                if (mathFn) {
                    if (evaluatedArgs.length !== 1) {
                        throw new Error(`${node.name} requires 1 argument`);
                    }
                    const r = mathFn(numeric(evaluatedArgs[0], node.name));
                    if (!Number.isFinite(r)) {
                        throw new Error(`${node.name} produced an invalid numeric result`);
                    }
                    return r;
                }

                // Library function? Look up the implementation.
                const libFn = context.functions?.[node.name];
                if (!libFn) throw new Error(`Unknown function:3 '${node.name}'`);
                return libFn(...evaluatedArgs);
            }

            // Legacy single-arg path — only for hand-built ASTs.
            const fn = MATH_FUNCTIONS[node.name];
            if (!fn || typeof node.argument === 'string' || node.argument === undefined)
                throw new Error(`Unknown function:4 '${node.name}'`);
            const result = fn(numeric(evaluate(node.argument, context), node.name));
            if (!Number.isFinite(result)) throw new Error(`${node.name} produced an invalid numeric result`);
            return result;
        }
        case 'binary': {
            const left = evaluate(node.left, context);
            if ((node.operator === 'AND' || node.operator === '&&') && !truthy(left)) return 0;
            if ((node.operator === 'OR' || node.operator === '||') && truthy(left)) return 1;
            const right = evaluate(node.right, context);
            switch (node.operator) {
                case '+':
                    if (typeof left === 'string' && typeof right === 'string') return left + right;
                    return numeric(left, 'Addition') + numeric(right, 'Addition');
                case '-': return numeric(left, 'Subtraction') - numeric(right, 'Subtraction');
                case '*': return numeric(left, 'Multiplication') * numeric(right, 'Multiplication');
                case '/': { const d = numeric(right, 'Division'); if (d === 0) throw new Error('Division by zero'); return numeric(left, 'Division') / d; }
                case '%': case 'MOD': { const d = integer(right, 'MOD'); if (d === 0) throw new Error('Division by zero'); return integer(left, 'MOD') % d; }
                case '**': return numeric(left, 'Exponent') ** numeric(right, 'Exponent');
                case 'AND': case '&&': return truthy(right) ? 1 : 0;
                case 'OR': case '||': return truthy(right) ? 1 : 0;
                case '&': return integer(left, 'Bitwise AND') & integer(right, 'Bitwise AND');
                case '|': return integer(left, 'Bitwise OR') | integer(right, 'Bitwise OR');
                case '^': return integer(left, 'Bitwise XOR') ^ integer(right, 'Bitwise XOR');
                case '>>': return integer(left, 'Right shift') >> integer(right, 'Right shift');
                case '<<': return integer(left, 'Left shift') << integer(right, 'Left shift');
                case 'EQ': case '==': return left === right ? 1 : 0;
                case 'NE': case '<>': return left !== right ? 1 : 0;
                case 'LT': case '<': return left < right ? 1 : 0;
                case 'GT': case '>': return left > right ? 1 : 0;
                case 'LE': case '<=': return left <= right ? 1 : 0;
                case 'GE': case '>=': return left >= right ? 1 : 0;
                default: throw new Error(`Unsupported operator '${node.operator}'`);
            }
        }
    }
}

function countPlaceholders(node: AstNode): number {
    if (node.type === 'placeholder') return 1;
    if (node.type === 'unary') return countPlaceholders(node.operand);
    if (node.type === 'binary') return countPlaceholders(node.left) + countPlaceholders(node.right);
    if (node.type === 'conditional')
        return countPlaceholders(node.condition) + countPlaceholders(node.whenTrue) + countPlaceholders(node.whenFalse);
    if (node.type === 'call' && typeof node.argument !== 'string' && node.argument)
        return countPlaceholders(node.argument);
    return 0;
}

function sourcePosition(source: string, position: number): Pick<Diagnostic, 'position' | 'line' | 'column'> {
    const before = source.slice(0, position);
    const lines = before.split('\n');
    return { position, line: lines.length, column: lines.at(-1)!.length + 1 };
}

function semanticDiagnostic(
    source: string,
    severity: Diagnostic['severity'],
    code: string,
    message: string,
    searchText?: string
): Diagnostic {
    const found = searchText ? source.toLowerCase().indexOf(searchText.toLowerCase()) : 0;
    return { severity, stage: 'semantic', code, message, ...sourcePosition(source, Math.max(0, found)) };
}

function validateSemantics(source: string, ast: AstNode, options: ValidationOptions): Diagnostic[] {
    const diagnostics: Diagnostic[] = [];
    const reportedUnknownTags = new Set<string>();

    const requireNumeric = (type: ValueType, operation: string, searchText: string): void => {
        if (type === 'string')
            diagnostics.push(semanticDiagnostic(source, 'error', 'TYPE_NUMERIC_REQUIRED', `${operation} requires a numeric value`, searchText));
    };
    const requireInteger = (type: ValueType, operation: string, searchText: string): void => {
        if (type === 'string' || type === 'number')
            diagnostics.push(semanticDiagnostic(source, 'error', 'TYPE_INTEGER_REQUIRED', `${operation} requires integer values`, searchText));
    };

    const infer = (node: AstNode): ValueType => {
        switch (node.type) {
            case 'literal': return typeof node.value === 'string' ? 'string' : Number.isInteger(node.value) ? 'integer' : 'number';
            case 'placeholder': return 'number';
            case 'tag': {
                if (!options.tagTypes) return 'unknown';
                const type = options.tagTypes[node.name];
                if (!type && !reportedUnknownTags.has(node.name)) {
                    reportedUnknownTags.add(node.name);
                    diagnostics.push(semanticDiagnostic(source, 'warning', 'TAG_NOT_REGISTERED',
                        `Tag '${node.name}' is not registered in the supplied tag catalogue`, node.name));
                }
                return type ?? 'unknown';
            }
            case 'unary': {
                const operand = infer(node.operand);
                if (node.operator === 'NOT') {
                    if (operand === 'string')
                        diagnostics.push(semanticDiagnostic(source, 'error', 'TYPE_LOGICAL_REQUIRED', 'NOT cannot be applied to a string', node.operator));
                    return 'integer';
                }
                if (node.operator === '~') requireInteger(operand, 'Bitwise complement', node.operator);
                else requireNumeric(operand, `Unary ${node.operator}`, node.operator);
                return node.operator === '~' ? 'integer' : operand === 'integer' ? 'integer' : 'number';
            }
            case 'call': {
                if (node.name === 'CURRENTUSERNAME' || node.name === 'CURRENTLANGUAGE') return 'string';
                if (node.name === 'CURRENTUSERHASCODE') return 'integer';

                const sig = getFunctionSignature(node.name);
                if (!sig) {
                    diagnostics.push(semanticDiagnostic(source, 'error', 'UNKNOWN_FUNCTION',
                        `Unknown function:3 '${node.name}'`, node.name));
                    // Still recurse into args so their own errors surface
                    if (typeof node.argument !== 'string' && node.argument) infer(node.argument);
                    if (node.args) node.args.forEach(infer);
                    return 'unknown';
                }

                // Collect args (support both old single and new list)
                const argNodes: AstNode[] =
                    node.args ? node.args :
                        (typeof node.argument === 'string' || node.argument === undefined) ? [] :
                            [node.argument];

                if (argNodes.length < sig.minArgs || argNodes.length > sig.maxArgs) {
                    diagnostics.push(semanticDiagnostic(source, 'error', 'FUNCTION_ARG_COUNT',
                        `${node.name} expects ${sig.minArgs === sig.maxArgs ? sig.minArgs : `${sig.minArgs}-${sig.maxArgs}`} argument(s), got ${argNodes.length}`,
                        node.name));
                }

                // For math functions, enforce numeric arguments
                if (sig.category === 'math') {
                    for (const a of argNodes) requireNumeric(infer(a), node.name, node.name);
                } else {
                    // Library functions: infer to catch nested errors, but don't type-check args
                    for (const a of argNodes) infer(a);
                }

                return sig.returns;
            }
            case 'conditional': {
                const condition = infer(node.condition);
                if (condition === 'string')
                    diagnostics.push(semanticDiagnostic(source, 'error', 'TYPE_CONDITION_REQUIRED',
                        'An IF condition must evaluate to a numeric/logical value', 'if'));
                const whenTrue = infer(node.whenTrue);
                const whenFalse = infer(node.whenFalse);
                if (whenTrue !== 'unknown' && whenFalse !== 'unknown' && whenTrue !== whenFalse &&
                    !(whenTrue !== 'string' && whenFalse !== 'string')) {
                    diagnostics.push(semanticDiagnostic(source, 'warning', 'BRANCH_TYPE_MISMATCH',
                        `THEN returns ${whenTrue}, but ELSE returns ${whenFalse}`, 'then'));
                }
                return whenTrue === whenFalse ? whenTrue : 'unknown';
            }
            case 'binary': {
                const left = infer(node.left);
                const right = infer(node.right);
                const operator = node.operator;
                if (operator === '+') {
                    if (left !== 'unknown' && right !== 'unknown' && ((left === 'string') !== (right === 'string'))) {
                        diagnostics.push(semanticDiagnostic(source, 'error', 'TYPE_OPERAND_MISMATCH',
                            'The + operator requires two numbers or two strings', operator));
                    }
                    return left === 'string' && right === 'string' ? 'string' : left === 'integer' && right === 'integer' ? 'integer' : 'number';
                }
                if (['-', '*', '/', '**'].includes(operator)) {
                    requireNumeric(left, operator, operator);
                    requireNumeric(right, operator, operator);
                    return operator !== '/' && left === 'integer' && right === 'integer' ? 'integer' : 'number';
                }
                if (['MOD', '%', '&', '|', '^', '>>', '<<'].includes(operator)) {
                    requireInteger(left, operator, operator);
                    requireInteger(right, operator, operator);
                    return 'integer';
                }
                if (['AND', '&&', 'OR', '||'].includes(operator)) {
                    if (left === 'string' || right === 'string')
                        diagnostics.push(semanticDiagnostic(source, 'error', 'TYPE_LOGICAL_REQUIRED',
                            `${operator} requires numeric/logical operands`, operator));
                    return 'integer';
                }
                if (left !== 'unknown' && right !== 'unknown' && ((left === 'string') !== (right === 'string'))) {
                    diagnostics.push(semanticDiagnostic(source, 'error', 'TYPE_COMPARISON_MISMATCH',
                        'Relational operators must compare two numbers or two strings', operator));
                }
                return 'integer';
            }
        }
    };

    infer(ast);
    const placeholders = countPlaceholders(ast);
    if (options.writeExpression && placeholders === 0)
        diagnostics.push(semanticDiagnostic(source, 'error', 'WRITE_PLACEHOLDER_REQUIRED',
            "A write expression must contain '?' at least once", '?'));
    if (!options.writeExpression && placeholders > 0)
        diagnostics.push(semanticDiagnostic(source, 'error', 'PLACEHOLDER_NOT_ALLOWED',
            "'?' is only allowed in write expressions", '?'));
    return diagnostics;
}
function getFunctionSignature(name: string): FunctionSignature | null {
    if (MATH_FUNCTION_NAMES.has(name)) {
        return {
            name,
            category: 'math',
            minArgs: 1,
            maxArgs: 1,
            returns: 'number',
        };
    }
    return LIBRARY_FUNCTIONS[name] ?? null;
}
function precedenceForBinary(operator: string): number {
    if (RELATIONAL.has(operator)) return 1;
    if (ADDITIVE.has(operator)) return 2;
    if (MULTIPLICATIVE.has(operator)) return 3;
    return 0;
}

function formatAstNode(node: AstNode, parentPrecedence = 0): string {
    switch (node.type) {
        case 'literal': return JSON.stringify(node.value);
        case 'tag': return /^[A-Za-z_][A-Za-z0-9_]*$/.test(node.name) ? node.name : `{${node.name}}`;
        case 'placeholder': return '?';
        case 'call':
            if (typeof node.argument === 'string') return `${node.name}(${node.argument})`;
            return `${node.name}(${node.argument ? formatAstNode(node.argument) : ''})`;
        case 'unary': {
            const precedence = 4;
            const operand = formatAstNode(node.operand, precedence);
            const text = node.operator === 'NOT' ? `NOT ${operand}` : `${node.operator}${operand}`;
            return precedence < parentPrecedence ? `(${text})` : text;
        }
        case 'binary': {
            const precedence = precedenceForBinary(node.operator);
            const left = formatAstNode(node.left, precedence);
            const right = formatAstNode(node.right, precedence + 1);
            const text = `${left} ${node.operator} ${right}`;
            return precedence < parentPrecedence ? `(${text})` : text;
        }
        case 'conditional': {
            const text = `IF (${formatAstNode(node.condition)}) THEN ${formatAstNode(node.whenTrue)} ELSE ${formatAstNode(node.whenFalse)}`;
            return parentPrecedence > 0 ? `(${text})` : text;
        }
    }
}

export function formatRuleExpression(ast: AstNode): string {
    return formatAstNode(ast);
}

/**
 * Compile the AST to JavaScript **source text**. We no longer generate an
 * ESM `export default (env) => ...` string, because that would require a
 * bundler + dynamic import to run in a browser. Instead we render the
 * expression as a readable JS arrow function body and let the browser
 * evaluate it directly through `Function(...)` — see `ExpressionEngineService.execute`.
 */
function compileNode(node: AstNode): string {
    switch (node.type) {
        case 'literal': return JSON.stringify(node.value);
        case 'tag': return `env.tag(${JSON.stringify(node.name)})`;
        case 'placeholder': return 'env.input';
        case 'conditional':
            return `(env.truthy(${compileNode(node.condition)}) ? ${compileNode(node.whenTrue)} : ${compileNode(node.whenFalse)})`;
        case 'unary':
            return `env.unary(${JSON.stringify(node.operator)}, ${compileNode(node.operand)})`;
        case 'binary':
            return `env.binary(${JSON.stringify(node.operator)}, ${compileNode(node.left)}, () => ${compileNode(node.right)})`;
        case 'call': {
            if (typeof node.argument === 'string') {
                return `env.call(${JSON.stringify(node.name)}, ${JSON.stringify(node.argument)})`;
            }
            if (node.args && node.args.length > 0) {
                const compiled = node.args.map(compileNode).join(', ');
                return `env.call(${JSON.stringify(node.name)}, [${compiled}])`;
            }
            return `env.call(${JSON.stringify(node.name)})`;
        }
    }
}

/* ============================================================================
 *  Runtime env — the object referenced by every compiled arrow function.
 *  Kept as a factory so each call to execute() uses a fresh env bound to the
 *  caller-supplied RuntimeContext.
 * ========================================================================== */

function buildRuntimeEnv(context: RuntimeContext) {
    return {
        input: context.input,
        tag: (name: string): Value => {
            if (!(name in context.tags)) throw new Error(`Unknown tag '${name}'`);
            return context.tags[name]!;
        },
        truthy,
        numeric,
        integer,
        unary: (operator: string, value: Value): Value => {
            if (operator === 'NOT') return truthy(value) ? 0 : 1;
            if (operator === '~') return ~integer(value, 'Bitwise complement');
            if (operator === '+') return numeric(value, 'Unary plus');
            return -numeric(value, 'Unary minus');
        },
        binary: (operator: string, left: Value, rightThunk: () => Value): Value => {
            if ((operator === 'AND' || operator === '&&') && !truthy(left)) return 0;
            if ((operator === 'OR' || operator === '||') && truthy(left)) return 1;
            const right = rightThunk();
            switch (operator) {
                case '+':
                    if (typeof left === 'string' && typeof right === 'string') return left + right;
                    return numeric(left, 'Addition') + numeric(right, 'Addition');
                case '-': return numeric(left, 'Subtraction') - numeric(right, 'Subtraction');
                case '*': return numeric(left, 'Multiplication') * numeric(right, 'Multiplication');
                case '/': { const d = numeric(right, 'Division'); if (d === 0) throw new Error('Division by zero'); return numeric(left, 'Division') / d; }
                case '%': case 'MOD': { const d = integer(right, 'MOD'); if (d === 0) throw new Error('Division by zero'); return integer(left, 'MOD') % d; }
                case '**': return numeric(left, 'Exponent') ** numeric(right, 'Exponent');
                case 'AND': case '&&': return truthy(right) ? 1 : 0;
                case 'OR': case '||': return truthy(right) ? 1 : 0;
                case '&': return integer(left, 'Bitwise AND') & integer(right, 'Bitwise AND');
                case '|': return integer(left, 'Bitwise OR') | integer(right, 'Bitwise OR');
                case '^': return integer(left, 'Bitwise XOR') ^ integer(right, 'Bitwise XOR');
                case '>>': return integer(left, 'Right shift') >> integer(right, 'Right shift');
                case '<<': return integer(left, 'Left shift') << integer(right, 'Left shift');
                case 'EQ': case '==': return left === right ? 1 : 0;
                case 'NE': case '<>': return left !== right ? 1 : 0;
                case 'LT': case '<': return left < right ? 1 : 0;
                case 'GT': case '>': return left > right ? 1 : 0;
                case 'LE': case '<=': return left <= right ? 1 : 0;
                case 'GE': case '>=': return left >= right ? 1 : 0;
                default: throw new Error(`Unsupported operator '${operator}'`);
            }
        },
        call: (name: string, argumentOrArgs?: Value | string | Value[]): Value => {
            // ── Special intrinsics ───────────────────────────────────────────────
            if (name === 'CURRENTUSERNAME') return context.currentUserName ?? '';
            if (name === 'CURRENTLANGUAGE') return context.currentLanguage ?? 'en-US';
            if (name === 'CURRENTUSERHASCODE') {
                const requested = String(argumentOrArgs).split('');
                return requested.some(c => context.securityCodes?.includes(c)) ? 1 : 0;
            }

            // ── Math ─────────────────────────────────────────────────────────────
            const mathFn = MATH_FUNCTIONS[name];
            if (mathFn) {
                const v = Array.isArray(argumentOrArgs) ? argumentOrArgs[0] : argumentOrArgs;
                if (typeof v !== 'number') throw new Error(`${name} requires one numeric expression`);
                return mathFn(v);
            }

            // ── Library ──────────────────────────────────────────────────────────
            const libFn = context.functions?.[name];
            if (!libFn) throw new Error(`Unknown function:4 '${name}'`);
            const args = Array.isArray(argumentOrArgs) ? argumentOrArgs : [argumentOrArgs as Value];
            return libFn(...args);
        },
    };
}

/* ============================================================================
 *  Angular service
 * ========================================================================== */

@Injectable({ providedIn: 'root' })
export class ExpressionEngineService {

    private alarmSource: AlarmEventDataSource = NULL_ALARM_SOURCE;
    private commsSource: CommsDataSource = NULL_COMMS_SOURCE;
    private fsSource: FileSystemDataSource = NULL_FS_SOURCE;

    // ── NEW: inline overrides that don't require a full data source ──
    private inlineOverrides: Record<string, (...args: Value[]) => Value> = {};

      /**
   * Register or replace a single library function at runtime.
   * Useful when you don't want to build a full data-source object.
   */
  registerFunction(name: string, fn: (...args: Value[]) => Value): void {
    this.inlineOverrides[name.toUpperCase()] = fn;
  }
    /** Remove a previously-registered override. */
  unregisterFunction(name: string): void {
    delete this.inlineOverrides[name.toUpperCase()];
  }
    /** Wire in the real alarm subsystem at app bootstrap. */
    setAlarmEventDataSource(src: AlarmEventDataSource): void {
        this.alarmSource = src;
    }

    /** Wire in the real comms subsystem at app bootstrap. */
    setCommsDataSource(src: CommsDataSource): void {
        this.commsSource = src;
    }

    /** Wire in the real filesystem adapter at app bootstrap. */
    setFileSystemDataSource(src: FileSystemDataSource): void {
        this.fsSource = src;
    }

    /**
     * The complete library-function implementation map.
     * Built once per call so it reflects any late setXxxDataSource() calls.
     */
// Functions: implementation
buildLibraryFunctions(): Record<string, (...args: Value[]) => Value> {
    const alarm = this.alarmSource;
    const comms = this.commsSource;
    const fs = this.fsSource;

    const scope = (v: unknown): string | undefined =>
        v === undefined || v === null || v === '' ? undefined : String(v);

    const base: Record<string, (...args: Value[]) => Value> = {
        // ── File / disk ────────────────────────────────────────────────
        FILE_EXISTS: (p) => fs.fileExists(String(p)) ? 1 : 0,
        FREE_BYTES: (d) => fs.freeBytes(d === undefined ? undefined : String(d)),

        // ── Time ───────────────────────────────────────────────────────
        AFTER_TIME: (t) => new Date() > new Date(String(t)) ? 1 : 0,
        BEFORE_TIME: (t) => new Date() < new Date(String(t)) ? 1 : 0,
        INTERVAL: (a, b) => Number(b) - Number(a),
        TIME: () => new Date().toISOString(),

        // ── Comms ──────────────────────────────────────────────────────
        COMM_ERR: (s) => comms.errorCount(scope(s)),

        // ── Alarm & Event ──────────────────────────────────────────────
        
        AE_ACTIVEEVENT: (s) => alarm.activeEventCount(scope(s)),
        AE_DISABLEDCOUNT: (s) => alarm.disabledCount(scope(s)),
        AE_FAULTEDALARMSEXIT: () => alarm.faultedAlarmsExit(),
        AE_HIGHPRIORITYACTIVE: () => alarm.highPriorityActive(),
        AE_HIGHSEVERITYACKED: () => alarm.highSeverityAcked(),
        AE_HIGHSEVERITY_UNACKED: () => alarm.highSeverityUnacked(),
        AE_INALMACKEDCOUNT: () => alarm.inAlmAckedCount(),
        AE_ALMSHELVEDCOUNT: () => alarm.almsShelvedCount(),
        AE_INALMSUPPRESSCOUNT: () => alarm.inAlmSuppressCount(),
        AE_INALMUNACKEDCOUNT: () => alarm.inAlmUnackedCount(),
        AE_NORMALSHELVEDCOUNT: () => alarm.normalShelvedCount(),
        AE_NORMALSUPRESSEDCOUNT: () => alarm.normalSuppressedCount(),
        AE_NORMALUNACKEDCOUNT: () => alarm.normalUnackedCount(),
        AE_SHELEVEDALARMSEXIST: () => alarm.shelvedAlarmsExist(),
        AE_UNACKEDALARMSEXIST: () => alarm.unackedAlarmsExist(),
    };

    // Inline overrides win over the defaults.
    return { ...base, ...this.inlineOverrides };
}

    /** Raw rule-language reference for the AI prompt layer. */
    readonly ruleLanguageReference = RULE_LANGUAGE_REFERENCE;

    /**
     * Validate a rule. Does not compile or execute — pure syntax + semantics.
     */
    validate(source: string, options: ValidationOptions = {}): ValidationResult {
        try {
            const ast = new Parser(tokenize(source)).parse();
            const diagnostics = validateSemantics(source, ast, options);
            return {
                valid: !diagnostics.some(d => d.severity === 'error'),
                diagnostics,
                ast,
                javascript: `(env) => ${compileNode(ast)}`,
            };
        } catch (error) {
            if (!(error instanceof ExpressionError)) throw error;
            const message = error.message.replace(/ at character \d+$/, '');
            return {
                valid: false,
                diagnostics: [{ severity: 'error', stage: 'syntax', code: 'SYNTAX_ERROR', message, ...sourcePosition(source, error.position) }],
            };
        }
    }

    /**
     * Parse + validate and return a callable rule. Throws
     * ExpressionValidationError when the source is invalid.
     */
    load(source: string, options: ValidationOptions = {}): LoadedRule {
    const validation = this.validate(source, options);
    if (!validation.valid || !validation.ast || !validation.javascript) {
        throw new ExpressionValidationError(validation.diagnostics);
    }
    const ast = validation.ast;

    return {
        source,
        ast,
        javascript: validation.javascript,
        execute: (context: RuntimeContext): Value => this.executeAst(ast, context),
    };
    }

    /**
     * Execute an already-parsed rule against a runtime context.
     * This is the browser-side replacement for `rule.execute(...)`.
     */
    executeAst(ast: AstNode, context: RuntimeContext): Value {
        const merged: RuntimeContext = {
            ...context,
            functions: {
                ...this.buildLibraryFunctions(),      // defaults from the service
                ...(context.functions ?? {}),          // caller overrides
            },
        };
        return evaluate(ast, merged);
    }

    /**
     * Parse, validate and execute in one call. Convenience for component code.
     */
    execute(source: string, context: RuntimeContext, options: ValidationOptions = {}): Value {
        return this.load(source, options).execute(context);
    }

    /**
     * Produce a plain JavaScript source string that can be displayed in the
     * editor (e.g. for the AI panel), but is NOT needed to run the rule.
     */
    toJavaScript(source: string, options: ValidationOptions = {}): string {
        const validation = this.validate(source, options);
        return validation.javascript ?? '';
    }

    /**
     * Format an AST back to canonical rule-language syntax.
     */
    format(ast: AstNode): string {
        return formatRuleExpression(ast);
    }

    /**
     * Return the tags / functions / placeholder usage for a rule, WITHOUT
     * executing it. Returns null if the source is syntactically invalid
     * (i.e. no AST could be produced).
     */
    inspect(source: string, options: ValidationOptions = {}): ExpressionVariables | null {
        const result = this.validate(source, options);
        if (!result.ast) return null;
        return collectVariables(result.ast);
    }

    /**
     * Same as load(), but also returns the discovered variables so the caller
     * can build a matching RuntimeContext.
     */
    loadWithVariables(
        source: string,
        options: ValidationOptions = {}
    ): { rule: LoadedRule; variables: ExpressionVariables } | { error: ValidationResult } {
        const validation = this.validate(source, options);
        if (!validation.valid || !validation.ast || !validation.javascript) {
            return { error: validation };
        }
        const ast = validation.ast;
        const rule: LoadedRule = {
            source,
            ast,
            javascript: validation.javascript,
            execute: (context: RuntimeContext): Value => this.executeAst(ast, context),
        };
        return { rule, variables: collectVariables(ast) };
    }

}
///////////////
/* ============================================================================
 *  Tag / placeholder discovery
 * ========================================================================== */

export interface ExpressionVariables {
    /** Tag names referenced by the rule, in first-seen order, no duplicates. */
    tags: string[];
    /** True if the rule contains the '?' placeholder (write expressions). */
    usesPlaceholder: boolean;
    /** Function names called (CURRENTUSERNAME, SQRT, ...) — informational. */
    functions: string[];
}

/**
 * Walk an AST and collect every tag name, function name, and whether a
 * placeholder ('?') is present. Used to build a RuntimeContext dynamically.
 */
export function collectVariables(ast: AstNode): ExpressionVariables {
    const tags: string[] = [];
    const functions: string[] = [];
    const seenTags = new Set<string>();
    const seenFns = new Set<string>();
    let usesPlaceholder = false;

    const visit = (node: AstNode): void => {
        switch (node.type) {
            case 'literal':
                return;
            case 'placeholder':
                usesPlaceholder = true;
                return;
            case 'tag':
                if (!seenTags.has(node.name)) {
                    seenTags.add(node.name);
                    tags.push(node.name);
                }
                return;
            case 'unary':
                visit(node.operand);
                return;
            case 'binary':
                visit(node.left);
                visit(node.right);
                return;
            case 'conditional':
                visit(node.condition);
                visit(node.whenTrue);
                visit(node.whenFalse);
                return;
            case 'call':
                if (!seenFns.has(node.name)) {
                    seenFns.add(node.name);
                    functions.push(node.name);
                }
                if (typeof node.argument !== 'string' && node.argument) {
                    visit(node.argument);
                }
                if (node.args) {
                    for (const a of node.args) visit(a);
                }
                return;
        }
    };

    visit(ast);
    return { tags, usesPlaceholder, functions };
}

export interface RuntimeContext {
    tags: Record<string, Value>;
    input?: number;
    currentUserName?: string;
    currentLanguage?: string;
    securityCodes?: string[];

    /**
     * Library function implementations.
     * Keyed by UPPERCASE function name. Receives evaluated arguments.
     * Missing entries throw at runtime — but they still *pass* the syntax check.
     */
    functions?: Record<string, (...args: Value[]) => Value>;
}

/* ============================================================================
 *  Domain services — providers of runtime data for library functions
 * ========================================================================== */

/**
 * The alarm & event subsystem exposes counts and states to rule evaluation.
 * Any class that satisfies this interface can be wired in.
 */
// Functions: Contract the default implementation calls
export interface AlarmEventDataSource {
    /** Number of currently-active events (optionally scoped by a tag/server). */
    activeEventCount(scope?: string): number;

    /** Number of disabled alarms (optionally scoped). */
    disabledCount(scope?: string): number;

    /** Number of high-priority active alarms. */
    highPriorityActive(): number;

    /** Count of acked high-severity alarms. */
    highSeverityAcked(): number;

    /** Count of unacked high-severity alarms. */
    highSeverityUnacked(): number;

    /** Count of acked in-alarm states. */
    inAlmAckedCount(): number;

    /** Count of shelved alarms. */
    almsShelvedCount(): number;

    /** Count of suppressed in-alarm states. */
    inAlmSuppressCount(): number;

    /** Count of unacked in-alarm states. */
    inAlmUnackedCount(): number;

    /** Count of shelved normal states. */
    normalShelvedCount(): number;

    /** Count of suppressed normal states. */
    normalSuppressedCount(): number;

    /** Count of unacked normal states. */
    normalUnackedCount(): number;

    /** 1 if any shelved alarms exist, else 0. */
    shelvedAlarmsExist(): number;

    /** 1 if any unacked alarms exist, else 0. */
    unackedAlarmsExist(): number;

    /** 1 if any faulted alarms exited. */
    faultedAlarmsExit(): number;
}

/**
 * The comms subsystem exposes error counts.
 */
export interface CommsDataSource {
    /** Number of comms errors (optionally scoped by server). */
    errorCount(server?: string): number;
}

/**
 * The file subsystem exposes file/disk info.
 */
export interface FileSystemDataSource {
    fileExists(path: string): boolean;
    freeBytes(drive?: string): number;
}

/* ============================================================================
 *  Null-object defaults — safe, no-op implementations
 * ========================================================================== */
 // Functions: Fallback if no source wired in
const NULL_ALARM_SOURCE: AlarmEventDataSource = {
    activeEventCount: () => 0,
    disabledCount: () => 0,
    highPriorityActive: () => 0,
    highSeverityAcked: () => 0,
    highSeverityUnacked: () => 0,
    inAlmAckedCount: () => 0,
    almsShelvedCount: () => 0,
    inAlmSuppressCount: () => 0,
    inAlmUnackedCount: () => 0,
    normalShelvedCount: () => 0,
    normalSuppressedCount: () => 0,
    normalUnackedCount: () => 0,
    shelvedAlarmsExist: () => 0,
    unackedAlarmsExist: () => 0,
    faultedAlarmsExit: () => 0,
};

const NULL_COMMS_SOURCE: CommsDataSource = {
    errorCount: () => 0,
};

const NULL_FS_SOURCE: FileSystemDataSource = {
    fileExists: () => false,
    freeBytes: () => 0,
};
