import {
  __spreadProps,
  __spreadValues
} from "./chunk-N6ESDQJH.js";

// node_modules/@angular-package/type/fesm2020/angular-package-type.mjs
var resultCallback = (result) => result;
var typeOf = (value) => Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
var isArray = (value, callback = resultCallback, payload) => callback((typeOf(value) === "array" || typeof value === "object") && Array.isArray(value), value, payload);
var isFunction = (value, callback = resultCallback, payload) => callback(typeof value === "function" || typeOf(value) === "function" && value instanceof Function ? /class/.test(Function.prototype.toString.call(value).slice(0, 5)) === false : false, value, payload);
var areDeterminer = (checkFn, ...values) => {
  return {
    every: (callback = resultCallback, payload) => callback(values.every((value) => checkFn(value)), values, payload),
    forEach: (forEachCallback, payload) => {
      isArray(values) && isFunction(forEachCallback) && values.forEach((value, index) => forEachCallback(checkFn(value), value, index, values, payload));
    },
    some: (callback = resultCallback, payload) => callback(isArray(values) ? values.some((value) => checkFn(value)) : false, values, payload)
  };
};
var isBigInt = (value, callback = resultCallback, payload) => callback(typeof value === "bigint", value, payload);
var areBigInt = (...values) => areDeterminer(isBigInt, ...values);
var isBoolean = (value, callback = resultCallback, payload) => callback((typeof value === "boolean" || typeOf(value) === "boolean" || typeof value === "object" && value instanceof Boolean) && (value.valueOf() === true || value.valueOf() === false), value, payload);
var areBoolean = (...values) => areDeterminer(isBoolean, ...values);
var isDate = (value, callback = resultCallback, payload) => callback((typeOf(value) === "date" || typeof value === "object") && value instanceof Date === true && !isNaN(value), value, payload);
var areDate = (...values) => areDeterminer(isDate, ...values);
var isDefined = (value, callback = resultCallback, payload) => callback(typeof value !== "undefined" && value !== void 0, value, payload);
var areDefined = (...values) => areDeterminer(isDefined, ...values);
var isFalse = (value, callback = resultCallback, payload) => callback(isBoolean(value) ? value.valueOf() === false : false, value, payload);
var areFalse = (...values) => areDeterminer(isFalse, ...values);
var isNull = (value, callback = resultCallback, payload) => callback((typeOf(value) === "null" || typeof value === "object") && value === null, value, payload);
var areNull = (...values) => areDeterminer(isNull, ...values);
var isNumber = (value, callback = resultCallback, payload) => callback((typeof value === "number" || (typeOf(value) === "number" || typeof value === "object") && value instanceof Number) && !Number.isNaN(value.valueOf()) && Number.isFinite(value.valueOf()), value, payload);
var areNumber = (...values) => areDeterminer(isNumber, ...values);
var isRegExp = (value, callback = resultCallback, payload) => callback((typeOf(value) === "regexp" || typeof value === "object") && value instanceof RegExp, value, payload);
var areRegExp = (...values) => areDeterminer(isRegExp, ...values);
var isStringObject = (value, callback = resultCallback, payload) => callback((typeOf(value) === "string" || typeof value === "object") && value instanceof String, value, payload);
var isStringType = (value, callback = resultCallback, payload) => callback(typeof value === "string", value, payload);
var isString = (value, callback = resultCallback, payload) => callback(isStringType(value) || isStringObject(value), value, payload);
var areString = (...values) => areDeterminer(isString, ...values);
var isSymbol = (value, callback = resultCallback, payload) => callback(typeof value === "symbol", value, payload);
var areSymbol = (...values) => areDeterminer(isSymbol, ...values);
var isTrue = (value, callback = resultCallback, payload) => callback(isBoolean(value) ? value.valueOf() === true : false, value, payload);
var areTrue = (...values) => areDeterminer(isTrue, ...values);
var isUndefined = (value, callback = resultCallback, payload) => callback(typeof value === "undefined", value, payload);
var areUndefined = (...values) => areDeterminer(isUndefined, ...values);
var are = Object.freeze({
  bigint: areBigInt,
  boolean: areBoolean,
  date: areDate,
  defined: areDefined,
  false: areFalse,
  null: areNull,
  number: areNumber,
  regexp: areRegExp,
  string: areString,
  symbol: areSymbol,
  true: areTrue,
  undefined: areUndefined
});
var guardArray = (value, callback, payload) => isArray(value, callback, payload);
var guardBigInt = (value, callback, payload) => isBigInt(value, callback, payload);
var guardBoolean = (value, callback, payload) => isBoolean(value, callback, payload);
var isClass = (value, callback = resultCallback, payload) => callback(typeof value === "function" || typeOf(value) === "function" && value instanceof Function ? /class/.test(Function.prototype.toString.call(value).slice(0, 5)) : false, value, payload);
var guardClass = (value, callback, payload) => isClass(value, callback, payload);
var guardDate = (value, callback, payload) => isDate(value, callback, payload);
var guardDefined = (value, callback, payload) => isDefined(value, callback, payload);
var guardFalse = (value, callback, payload) => isFalse(value, callback, payload);
var guardFunction = (value, callback, payload) => isFunction(value, callback, payload);
var isObject = (value, callback = resultCallback, payload) => callback((typeof value === "object" || typeOf(value) === "object") && value instanceof Object, value, payload);
var isInstance = (value, constructor, callback = resultCallback, payload) => callback(isObject(value) && typeof constructor === "function" && constructor instanceof Function ? value instanceof constructor : false, value, __spreadProps(__spreadValues({}, payload), {
  ctor: constructor
}));
var guardInstance = (value, constructor, callback, payload) => isInstance(value, constructor, callback, payload);
var isNumberType = (value, callback = resultCallback, payload) => callback(typeof value === "number" && Number.isFinite(value) && !Number.isNaN(value), value, payload);
var isKey = (value, callback = resultCallback, payload) => callback(isStringType(value) || isNumberType(value) || isSymbol(value), value, payload);
var guardKey = (value, callback, payload) => isKey(value, callback, payload);
var guardNull = (value, callback, payload) => isNull(value, callback, payload);
var guardNumber = (value, callback, payload) => isNumber(value, callback, payload);
var isNumberBetween = (value, min, max, callback = resultCallback, payload) => callback(isNumber(value) ? (isNumberType(min) ? value.valueOf() >= min : false) && (isNumberType(max) ? value.valueOf() <= max : false) : false, value, __spreadProps(__spreadValues({}, payload), {
  min,
  max
}));
var guardNumberBetween = (value, min, max, callback, payload) => isNumberBetween(value, min, max, callback, payload);
var guardObject = (value, callback, payload) => isObject(value, callback, payload);
var isObjectKey = (value, key, callback = resultCallback, payload) => callback(isObject(value) ? {}.hasOwnProperty.call(value, key) : false, value, __spreadProps(__spreadValues({}, payload), {
  key
}));
var guardObjectKey = (value, key, callback, payload) => isObjectKey(value, key, callback, payload);
var isObjectKeyIn = (value, key, callback = resultCallback, payload) => callback(isObject(value) ? key in value : false, value, __spreadProps(__spreadValues({}, payload), {
  key
}));
var guardObjectKeyIn = (value, key, callback, payload) => isObjectKeyIn(value, key, callback, payload);
var isObjectKeys = (value, keys, callback = resultCallback, payload) => callback(isObject(value) && isArray(keys) ? keys.every((key) => ({}).hasOwnProperty.call(value, key)) : false, value, __spreadProps(__spreadValues({}, payload), {
  keys
}));
var guardObjectKeys = (value, keys, callback, payload) => isObjectKeys(value, keys, callback, payload);
var isObjectKeysIn = (value, keys, callback = resultCallback, payload) => callback(isObject(value) && isArray(keys) ? keys.every((k) => k in value) : false, value, __spreadProps(__spreadValues({}, payload), {
  keys
}));
var guardObjectKeysIn = (value, keys, callback, payload) => isObjectKeysIn(value, keys, callback, payload);
var isObjectSomeKeys = (value, keys, callback = resultCallback, payload) => callback(isObject(value) && isArray(keys) ? keys.some((someKey) => isArray(someKey) ? someKey.every((everyKey) => ({}).hasOwnProperty.call(value, everyKey)) : {}.hasOwnProperty.call(value, someKey) === true) : false, value, __spreadProps(__spreadValues({}, payload), {
  keys
}));
var guardObjectSomeKeys = (value, keys, callback, payload) => isObjectSomeKeys(value, keys, callback, payload);
var isBooleanType = (value, callback = resultCallback, payload) => callback(typeof value === "boolean" && (value === true || value === false), value, payload);
var isPrimitive = (value, type2, callback = resultCallback, payload) => isStringType(type2) ? {
  bigint: isBigInt,
  boolean: isBooleanType,
  number: isNumberType,
  null: isNull,
  string: isStringType,
  symbol: isSymbol,
  undefined: isUndefined
}[type2](value, callback, payload) : callback(isNull(value) || typeof value !== "object" && typeof value !== "function", value, payload);
var guardPrimitive = (value, type2, callback, payload) => isPrimitive(value, type2, callback, payload);
var guardRegExp = (value, callback, payload) => isRegExp(value, callback, payload);
var guardString = (value, callback, payload) => isString(value, callback, payload);
var isStringIncludes = (value, includes, callback = resultCallback, payload) => callback(isString(value) ? isArray(includes) ? includes.every((include) => value.valueOf().includes(include)) : false : false, value, __spreadProps(__spreadValues({}, payload), {
  includes
}));
var guardStringIncludes = (value, includes, callback = resultCallback, payload) => isStringIncludes(value, includes, callback, payload);
var isStringIncludesSome = (value, includes, callback = resultCallback, payload) => callback(isString(value) ? isArray(includes) ? includes.some((include) => value.valueOf().includes(include)) : false : false, value, __spreadProps(__spreadValues({}, payload), {
  includes
}));
var guardStringIncludesSome = (value, includes, callback = resultCallback, payload) => isStringIncludesSome(value, includes, callback, payload);
var isBooleanObject = (value, callback = resultCallback, payload) => callback((typeOf(value) === "boolean" || typeof value === "object") && value instanceof Boolean && (value.valueOf() === true || value.valueOf() === false), value, payload);
var isNumberObject = (value, callback = resultCallback, payload) => callback((typeOf(value) === "number" || typeof value === "object") && value instanceof Number && !Number.isNaN(value.valueOf()) && Number.isFinite(value.valueOf()), value, payload);
var isStringLength = (value, length, callback = resultCallback, payload) => callback(isString(value) && isNumberType(length) && length > 0 ? value.valueOf().length === length : false, value, __spreadProps(__spreadValues({}, payload), {
  length
}));
var isStringLengthBetween = (value, min, max, callback = resultCallback, payload) => callback(isString(value) ? (isNumberType(min) && min >= 0 ? value.valueOf().length >= min : false) && (isNumberType(max) && max >= 0 ? value.valueOf().length <= max : false) : false, value, __spreadProps(__spreadValues({}, payload), {
  min,
  max
}));
var isNotNull = (value, callback = resultCallback, payload) => callback(typeOf(value) !== "null" && value !== null, value, payload);
var isType = (value, type2, callback = resultCallback, payload) => isStringType(type2) ? {
  bigint: isBigInt,
  boolean: isBooleanType,
  function: isFunction,
  number: isNumberType,
  object: isObject,
  null: isNull,
  string: isStringType,
  symbol: isSymbol,
  undefined: isUndefined
}[type2](value, callback, payload) : isNotNull(type2) ? isInstance(value, type2, callback, payload) : false;
var isNotBoolean = (value, callback = resultCallback, payload) => callback(typeOf(value) !== "boolean" && typeof value !== "boolean" && value instanceof Boolean === false, value, payload);
var isNotDefined = (value, callback = resultCallback, payload) => callback(typeOf(value) === "undefined" && typeof value === "undefined" && value === void 0, value, payload);
var isNotFunction = (value, callback = resultCallback, payload) => callback(typeOf(value) !== "function" && typeof value !== "function" && value instanceof Function === false, value, payload);
var isNotNumber = (value, callback = resultCallback, payload) => callback(typeOf(value) !== "number" && typeof value !== "number" && value instanceof Number === false, value, payload);
var isNotString = (value, callback = resultCallback, payload) => callback(typeOf(value) !== "string" && typeof value !== "string" && value instanceof String === false, value, payload);
var isNotUndefined = (value, callback = resultCallback, payload) => callback(typeOf(value) !== "undefined" && typeof value !== "undefined" && value !== void 0, value, payload);
var isNot = Object.freeze({
  boolean: isNotBoolean,
  defined: isNotDefined,
  function: isNotFunction,
  null: isNotNull,
  number: isNotNumber,
  string: isNotString,
  undefined: isNotUndefined
});
var is = Object.freeze({
  array: isArray,
  bigint: isBigInt,
  boolean: isBoolean,
  booleanObject: isBooleanObject,
  booleanType: isBooleanType,
  class: isClass,
  date: isDate,
  defined: isDefined,
  false: isFalse,
  function: isFunction,
  instance: isInstance,
  key: isKey,
  not: isNot,
  null: isNull,
  number: isNumber,
  numberBetween: isNumberBetween,
  numberObject: isNumberObject,
  numberType: isNumberType,
  object: isObject,
  objectKey: isObjectKey,
  objectKeyIn: isObjectKeyIn,
  objectKeys: isObjectKeys,
  objectKeysIn: isObjectKeysIn,
  objectSomeKeys: isObjectSomeKeys,
  primitive: isPrimitive,
  regexp: isRegExp,
  string: isString,
  stringIncludes: isStringIncludes,
  stringIncludesSome: isStringIncludesSome,
  stringLength: isStringLength,
  stringLengthBetween: isStringLengthBetween,
  stringObject: isStringObject,
  stringType: isStringType,
  symbol: isSymbol,
  true: isTrue,
  type: isType,
  undefined: isUndefined
});
function isParam(...param) {
  return (target, key, descriptor) => {
    const originalMethod = descriptor.value;
    descriptor.value = function() {
      if (is.array(param) && is.defined(arguments)) {
        param.forEach((name, index) => {
          if (is.number(index) && index < arguments.length) {
            if (is.defined(arguments[index])) {
              switch (name) {
                case "number":
                  if (is.number(arguments[index]) === false) {
                    arguments[index] = void 0;
                  }
                  break;
                case "object":
                  if (is.object(arguments[index]) === false) {
                    arguments[index] = void 0;
                  }
                  break;
                case "string":
                  if (is.string(arguments[index]) === false) {
                    arguments[index] = void 0;
                  }
                  break;
              }
            }
          }
        });
      }
      const result = originalMethod.apply(this, arguments);
      return result;
    };
    return descriptor;
  };
}
var guardStringLength = (value, length, callback, payload) => isStringLength(value, length, callback, payload);
var guardStringLengthBetween = (value, min, max, callback, payload) => isStringLengthBetween(value, min, max, callback, payload);
var guardSymbol = (value, callback, payload) => isSymbol(value, callback, payload);
var guardTrue = (value, callback, payload) => isTrue(value, callback, payload);
var guardType = (value, type2, callback, payload) => isType(value, type2, callback, payload);
var guardUndefined = (value, callback, payload) => isUndefined(value, callback, payload);
var guardIs = Object.freeze({
  array: guardArray,
  bigint: guardBigInt,
  boolean: guardBoolean,
  class: guardClass,
  date: guardDate,
  defined: guardDefined,
  false: guardFalse,
  function: guardFunction,
  instance: guardInstance,
  key: guardKey,
  null: guardNull,
  number: guardNumber,
  numberBetween: guardNumberBetween,
  object: guardObject,
  objectKey: guardObjectKey,
  objectKeyIn: guardObjectKeyIn,
  objectKeys: guardObjectKeys,
  objectKeysIn: guardObjectKeysIn,
  objectSomeKeys: guardObjectSomeKeys,
  primitive: guardPrimitive,
  regexp: guardRegExp,
  string: guardString,
  stringIncludes: guardStringIncludes,
  stringIncludesSome: guardStringIncludesSome,
  stringLength: guardStringLength,
  stringLengthBetween: guardStringLengthBetween,
  symbol: guardSymbol,
  true: guardTrue,
  type: guardType,
  undefined: guardUndefined
});
var guard = Object.freeze(__spreadValues({}, guardIs));
var type = Object.freeze({
  are,
  is,
  guard
});
var RECOGNIZE_INSTANCES = [Array, ArrayBuffer, Boolean, DataView, Date, Error, EvalError, Float32Array, Float64Array, Function, Int16Array, Int32Array, Int8Array, Map, Number, Object, Promise, RangeError, ReferenceError, RegExp, Set, Storage, String, SyntaxError, TypeError, URIError, Uint16Array, Uint32Array, Uint8Array, Uint8ClampedArray, WeakMap, WeakSet];
var recognizeValue = (value, onlyTrue = true, instances = []) => {
  const ofRecognized = {
    "Array.isArray": Array.isArray(value),
    isClass: is.class(value),
    isFunction: is.function(value),
    "Number.isInteger": Number.isInteger(value),
    "Number.isFinite": Number.isFinite(value),
    "Number.isNaN": Number.isNaN(value),
    "Number.isSafeInteger": Number.isSafeInteger(value),
    typeOf: typeOf(value),
    typeof: typeof value
  };
  try {
    Object.assign(ofRecognized, {
      isFinite: isFinite(value)
    });
  } catch (e) {
  }
  try {
    Object.assign(ofRecognized, {
      isNaN: isNaN(value)
    });
  } catch (e) {
  }
  RECOGNIZE_INSTANCES.concat(instances).forEach((instance) => Object.assign(ofRecognized, {
    [instance.name]: value instanceof instance
  }));
  if (is.true(onlyTrue)) {
    Object.keys(ofRecognized).filter((type2) => is.false(ofRecognized[type2]) ? delete ofRecognized[type2] : true);
  }
  return ofRecognized;
};
export {
  are,
  areBigInt,
  areBoolean,
  areDate,
  areDefined,
  areFalse,
  areNull,
  areNumber,
  areRegExp,
  areString,
  areSymbol,
  areTrue,
  areUndefined,
  guard,
  guardArray,
  guardBigInt,
  guardBoolean,
  guardClass,
  guardDate,
  guardDefined,
  guardFalse,
  guardFunction,
  guardInstance,
  guardKey,
  guardNull,
  guardNumber,
  guardNumberBetween,
  guardObject,
  guardObjectKey,
  guardObjectKeyIn,
  guardObjectKeys,
  guardObjectKeysIn,
  guardObjectSomeKeys,
  guardPrimitive,
  guardRegExp,
  guardString,
  guardStringIncludes,
  guardStringIncludesSome,
  guardStringLength,
  guardStringLengthBetween,
  guardSymbol,
  guardTrue,
  guardType,
  guardUndefined,
  is,
  isArray,
  isBigInt,
  isBoolean,
  isBooleanObject,
  isBooleanType,
  isClass,
  isDate,
  isDefined,
  isFalse,
  isFunction,
  isInstance,
  isKey,
  isNot,
  isNotBoolean,
  isNotDefined,
  isNotFunction,
  isNotNull,
  isNotNumber,
  isNotString,
  isNotUndefined,
  isNull,
  isNumber,
  isNumberBetween,
  isNumberObject,
  isNumberType,
  isObject,
  isObjectKey,
  isObjectKeyIn,
  isObjectKeys,
  isObjectKeysIn,
  isObjectSomeKeys,
  isParam,
  isPrimitive,
  isRegExp,
  isString,
  isStringIncludes,
  isStringIncludesSome,
  isStringLength,
  isStringLengthBetween,
  isStringObject,
  isStringType,
  isSymbol,
  isTrue,
  isType,
  isUndefined,
  recognizeValue,
  type,
  typeOf
};
//# sourceMappingURL=@angular-package_type.js.map
