import {
  Component,
  Input,
  Output,
  EventEmitter,
  forwardRef,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  OnInit
} from '@angular/core';

import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-code-editor',
  template: `
  
    <div class="code-editor-wrapper" [ngClass]="{'error': hasError}">
      <ngs-code-editor
        [theme]="theme"
        [style.height]="height"
        [style.width]="width"
        [codeModel]="codeModel"
        [options]="options"
        (valueChanged)="onValueChanged($event)"
        (loaded)="onEditorLoaded($event)">
      </ngs-code-editor>
      <div *ngIf="hasError" class="error-message">{{ errorMessage }}</div>
      <div style="text-align: right; font-size: 12px; padding: 3px 8px;">
  Ln {{ currentLine }}, Col {{ currentColumn }}
</div>
    </div>
  `,
  styles: [`
    .code-editor-wrapper {
      border: 1px solid #ccc;
      border-radius: 4px;
      overflow: hidden;
      transition: border-color 0.3s ease;
    }
    .code-editor-wrapper.error {
      border-color: #f44336;
    }
    .code-editor-wrapper.error .error-message {
      color: #f44336;
      font-size: 12px;
      padding: 4px 8px;
      background-color: #ffebee;
    }
    .code-editor-wrapper:focus-within {
      border-color: #007bff;
      box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
    }
  `],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CodeEditorComponent),
      multi: true
    }
  ]
})
export class CodeEditorComponent
  implements ControlValueAccessor, OnChanges, OnInit {
  @Input() theme: string = 'vs-dark';
  @Input() language: string = 'typescript';
  @Input() height: string = '100px';
  @Input() width: string = '100px';
  @Input() readOnly: boolean = false;
  @Input() placeholder: string = '';
  @Input() label: string = '';
  @Input() hasError: boolean = false;
  @Input() errorMessage: string = '';
  @Input() value: string = '';
  @Input() modelId: string = crypto.randomUUID();

  @Output() valueChange = new EventEmitter<string>();
  @Output() editorLoaded = new EventEmitter<any>();

  private internalValue: string = '';
  private onChange: any = () => { };
  private onTouched: any = () => { };
  private editorInstance: any;

  public codeModel: any;

  public options: any;
ngOnInit(): void {
  this.buildEditorConfig();
}
// In your component class


  ngOnChanges(changes: SimpleChanges): void {
    this.buildEditorConfig();

    if (changes['value'] && !changes['value'].firstChange) {
      const newValue = changes['value'].currentValue;
      if (this.editorInstance && newValue !== this.internalValue) {
        this.editorInstance.setValue(newValue || '');
      }
    }
  }

private buildEditorConfig(): void {

  this.codeModel = {
    language: this.language,
    uri: `${this.language}-${this.modelId}`,
    value: this.internalValue ?? ''
  };

  this.options = {
    readOnly: this.readOnly,
    minimap: {
      enabled: false
    },
    fontSize: 14,
    lineNumbers: 'on',
    automaticLayout: true,
    scrollBeyondLastLine: false,
    wordWrap: 'on'
  };
}

  // ControlValueAccessor methods
writeValue(value: any): void {

  const newValue = value ?? '';

  console.log('CVA writeValue:', newValue);

  this.internalValue = newValue;
  this.value = newValue;

  if (this.codeModel) {

    if (this.codeModel.value !== newValue) {

      this.codeModel = {
        ...this.codeModel,
        value: newValue
      };

    }

  }
}
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    // Handle disabled state if needed
  }

  onValueChanged(event: any): void {

    const newValue = event || '';

    if (newValue === this.internalValue) {
      return;
    }

    console.log(
      'REAL VALUE CHANGE:',
      this.internalValue,
      '→',
      newValue
    );

    this.internalValue = newValue;
    this.value = newValue;

    this.onChange(newValue);
    this.onTouched();

    this.valueChange.emit(newValue);
  }
currentLine = 1;
currentColumn = 1;
onEditorLoaded(ngsEditor: any): void {

  console.log('NGS Editor loaded:', ngsEditor);

  const editor = ngsEditor._editor;

  console.log('Actual Monaco editor:', editor);

  if (!editor) {
    return;
  }

  this.editorInstance = editor;

  // Initial cursor position
  const position = editor.getPosition();

  if (position) {
    this.currentLine = position.lineNumber;
    this.currentColumn = position.column;
  }

  // Cursor changes
  editor.onDidChangeCursorPosition((event: any) => {

    console.log(
      'Cursor position changed:',
      event.position
    );

    this.currentLine = event.position.lineNumber;
    this.currentColumn = event.position.column;
  });

  this.editorLoaded.emit(editor);

  if (this.internalValue) {
    setTimeout(() => {
      this.editorInstance.setValue(this.internalValue);
    }, 0);
  }
}
  // Public methods for parent component
  public getValue(): string {
    return this.editorInstance ? this.editorInstance.getValue() : this.internalValue;
  }

  public setValue(value: string): void {
    this.internalValue = value;
    this.value = value;
    if (this.editorInstance) {
      this.editorInstance.setValue(value || '');
    }
    this.onChange(value);
    this.valueChange.emit(value);
  }

  public focus(): void {
    if (this.editorInstance) {
      this.editorInstance.focus();
    }
  }
}