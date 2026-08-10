import {
  KendoInput,
  guid,
  hasObservers,
  isDocumentAvailable
} from "./chunk-5AZCHGRK.js";
import {
  ComponentMessages,
  L10N_PREFIX,
  LocalizationService
} from "./chunk-YGURSKD5.js";
import {
  A
} from "./chunk-RWPIEFVW.js";
import {
  NgControl
} from "./chunk-CW7PMWWW.js";
import {
  NgClass,
  NgStyle
} from "./chunk-YS5E6LKP.js";
import {
  ChangeDetectorRef,
  Component,
  ContentChild,
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  NgModule,
  NgZone,
  Output,
  Renderer2,
  ViewChild,
  forwardRef,
  isDevMode,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-R7LRY632.js";
import {
  Observable,
  Subscription
} from "./chunk-WISTXZPE.js";

// node_modules/@progress/kendo-angular-label/fesm2022/progress-kendo-angular-label.mjs
var _c0 = ["*"];
function FloatingLabelComponent_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 2);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate1("(", ctx_r0.textFor("optional"), ")");
  }
}
function FloatingLabelComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "label", 1);
    ɵɵtext(1);
    ɵɵtemplate(2, FloatingLabelComponent_Conditional_2_Conditional_2_Template, 2, 1, "span", 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r0.labelCssClass)("ngStyle", ctx_r0.labelCssStyle)("for", ctx_r0.id);
    ɵɵattribute("id", ctx_r0.labelId);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.text, "");
    ɵɵadvance();
    ɵɵconditional(ctx_r0.optional ? 2 : -1);
  }
}
function LabelComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 2);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1("(", ctx_r0.textFor("optional"), ")");
  }
}
var isInputElement = (component) => component instanceof HTMLElement;
var inputElementHasAttr = (element, attribute) => element.hasAttribute(attribute);
var getWrappedNativeInput = (element) => element.querySelector("kendo-label > input, kendo-label > textarea, kendo-label > select");
var getRootElement = (element) => {
  if (!element) {
    return null;
  }
  let rootElement = element;
  while (rootElement.parentElement) {
    rootElement = rootElement.parentElement;
  }
  return rootElement;
};
var nativeLabelForTargets = ["BUTTON", "INPUT", "METER", "OUTPUT", "PROGRESS", "SELECT", "TEXTAREA"];
var LabelDirective = class _LabelDirective {
  label;
  renderer;
  zone;
  /**
   * Sets the focusable target for the label.
   * Accepts a [template reference variable](link:site.data.urls.angular['templatesyntax']#template-reference-variables--var-) or an `id` HTML string value.
   */
  for;
  get labelFor() {
    if (typeof this.for === "string") {
      return this.for;
    }
    if (!isDocumentAvailable()) {
      return null;
    }
    const component = this.getFocusableComponent() || {};
    if (isInputElement(component) && !inputElementHasAttr(component, "id")) {
      this.renderer.setAttribute(component, "id", `k-${guid()}`);
    }
    return component.focusableId || component.id || null;
  }
  /**
   * @hidden
   * Allows the user to specify if the label CSS class should be rendered or not.
   */
  labelClass = true;
  clickListener;
  constructor(label, renderer, zone) {
    this.label = label;
    this.renderer = renderer;
    this.zone = zone;
  }
  /**
   * @hidden
   */
  ngAfterViewInit() {
    this.setAriaLabelledby();
    this.zone.runOutsideAngular(() => this.clickListener = this.renderer.listen(this.label.nativeElement, "click", this.handleClick));
  }
  /**
   * @hidden
   */
  ngOnDestroy() {
    if (this.clickListener) {
      this.clickListener();
    }
  }
  /**
   * @hidden
   */
  setAriaLabelledby() {
    if (!isDocumentAvailable()) {
      return;
    }
    const component = this.getFocusableComponent();
    if (component && component.focusableId) {
      const rootElement = getRootElement(this.label.nativeElement);
      const labelTarget = rootElement.querySelector(`#${component.focusableId}`);
      const labelElement = this.label.nativeElement;
      const id = labelElement.id || `k-${guid()}`;
      if (!labelElement.getAttribute("id")) {
        this.renderer.setAttribute(labelElement, "id", id);
      }
      if (component.focusableId.startsWith("k-editor") && component.iframe) {
        component.contentAreaLoaded.subscribe(() => {
          this.zone.runOutsideAngular(() => {
            setTimeout(() => {
              const editableElement = component.container.element.nativeElement.contentDocument.body.firstElementChild;
              this.renderer.setAttribute(editableElement, "aria-label", labelElement.textContent);
            });
          });
        });
      }
      if (!labelTarget) {
        return;
      }
      const existingAriaLabelledBy = labelTarget.hasAttribute("aria-labelledby") && labelTarget.getAttribute("aria-labelledby");
      this.renderer.setAttribute(labelTarget, nativeLabelForTargets.includes(labelTarget.tagName) ? "data-kendo-label-id" : "aria-labelledby", existingAriaLabelledBy && existingAriaLabelledBy !== id ? `${existingAriaLabelledBy} ${id}` : id);
    }
  }
  getFocusableComponent() {
    const target = this.for;
    return target && target.focus !== void 0 ? target : null;
  }
  handleClick = () => {
    const component = this.getFocusableComponent();
    if (!component) {
      return;
    }
    if (component.focus) {
      component.focus();
    }
  };
  static ɵfac = function LabelDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LabelDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NgZone));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _LabelDirective,
    selectors: [["label", "for", ""]],
    hostVars: 3,
    hostBindings: function LabelDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("for", ctx.labelFor);
        ɵɵclassProp("k-label", ctx.labelClass);
      }
    },
    inputs: {
      for: "for",
      labelClass: "labelClass"
    },
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LabelDirective, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "label[for]",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: NgZone
  }], {
    for: [{
      type: Input
    }],
    labelFor: [{
      type: HostBinding,
      args: ["attr.for"]
    }],
    labelClass: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["class.k-label"]
    }]
  });
})();
var packageMetadata = {
  name: "@progress/kendo-angular-label",
  productName: "Kendo UI for Angular",
  productCode: "KENDOUIANGULAR",
  productCodes: ["KENDOUIANGULAR"],
  publishDate: 1768393140,
  version: "21.4.1",
  licensingDocsUrl: "https://www.telerik.com/kendo-angular-ui/my-license/"
};
var FloatingLabelInputAdapter = class {
  component;
  onFocus;
  onBlur;
  autoFillStart;
  autoFillEnd;
  onValueChange;
  get focusableId() {
    const component = this.component;
    if ("focusableId" in component) {
      return component.focusableId;
    } else if ("id" in component) {
      return component.id;
    }
    return "";
  }
  set focusableId(value) {
    const component = this.component;
    if ("focusableId" in component) {
      component.focusableId = value;
    } else if ("id" in component) {
      component.id = value;
    }
  }
  constructor(component, formControl) {
    this.component = component;
    const isObservableOrEventEmitter = (event) => event instanceof Observable || event instanceof EventEmitter;
    if (isObservableOrEventEmitter(component.onFocus)) {
      this.onFocus = component.onFocus;
    }
    if (isObservableOrEventEmitter(component.autoFillStart)) {
      this.autoFillStart = component.autoFillStart;
    }
    if (isObservableOrEventEmitter(component.autoFillEnd)) {
      this.autoFillEnd = component.autoFillEnd;
    }
    if (isObservableOrEventEmitter(component.onBlur)) {
      this.onBlur = component.onBlur;
    }
    if (formControl) {
      this.onValueChange = formControl.valueChanges;
    } else if (component.valueChange) {
      this.onValueChange = component.valueChange;
    }
  }
};
var Messages = class _Messages extends ComponentMessages {
  /**
   * The optional text.
   */
  optional;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵMessages_BaseFactory;
    return function Messages_Factory(__ngFactoryType__) {
      return (ɵMessages_BaseFactory || (ɵMessages_BaseFactory = ɵɵgetInheritedFactory(_Messages)))(__ngFactoryType__ || _Messages);
    };
  })();
  static ɵdir = ɵɵdefineDirective({
    type: _Messages,
    selectors: [["kendo-label-messages-base"]],
    inputs: {
      optional: "optional"
    },
    features: [ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Messages, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "kendo-label-messages-base"
    }]
  }], null, {
    optional: [{
      type: Input
    }]
  });
})();
var LocalizedMessagesDirective = class _LocalizedMessagesDirective extends Messages {
  service;
  constructor(service) {
    super();
    this.service = service;
  }
  static ɵfac = function LocalizedMessagesDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LocalizedMessagesDirective)(ɵɵdirectiveInject(LocalizationService));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _LocalizedMessagesDirective,
    selectors: [["", "kendoLabelLocalizedMessages", ""], ["", "kendoFloatingLabelLocalizedMessages", ""]],
    standalone: true,
    features: [ɵɵProvidersFeature([{
      provide: Messages,
      useExisting: forwardRef(() => _LocalizedMessagesDirective)
    }]), ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LocalizedMessagesDirective, [{
    type: Directive,
    args: [{
      providers: [{
        provide: Messages,
        useExisting: forwardRef(() => LocalizedMessagesDirective)
      }],
      selector: `
      [kendoLabelLocalizedMessages],
      [kendoFloatingLabelLocalizedMessages]
    `,
      standalone: true
    }]
  }], () => [{
    type: LocalizationService
  }], null);
})();
var isFunction = (x) => Object.prototype.toString.call(x) === "[object Function]";
var FloatingLabelComponent = class _FloatingLabelComponent {
  elementRef;
  renderer;
  changeDetectorRef;
  localization;
  /**
   * Gets the current floating label position.
   */
  get labelPosition() {
    if (!this.empty) {
      return "Out";
    }
    return this.focused ? "Out" : "In";
  }
  hostClasses = true;
  get focusedClass() {
    return this.focused;
  }
  get invalidClass() {
    return this.invalid;
  }
  /**
   * @hidden
   */
  direction;
  /**
   * Sets the CSS styles for the internal label element.
   * Accepts values supported by the [`ngStyle`](link:site.data.urls.angular['ngstyleapi']) directive.
   */
  labelCssStyle;
  /**
   * Sets the CSS classes for the label element.
   * Accepts values supported by the [`ngClass`](link:site.data.urls.angular['ngclassapi']) directive.
   */
  labelCssClass;
  /**
   * Sets the `id` attribute of the input inside the floating label.
   */
  id;
  /**
   * Sets the text content of the floating label that describes the input.
   */
  text;
  /**
   * Marks a form field as optional. When enabled, renders the `Optional` text by default.
   * You can customize the text by providing a custom message ([see example]({% slug label_globalization %}#toc-custom-messages)).
   *
   * @default false
   */
  optional;
  /**
   * Fires after the FloatingLabel position changes.
   */
  positionChange = new EventEmitter();
  kendoInput;
  formControl;
  /**
   * @hidden
   */
  focused = false;
  /**
   * @hidden
   */
  empty = true;
  /**
   * @hidden
   */
  invalid = false;
  /**
   * @hidden
   */
  labelId = `k-${guid()}`;
  subscription;
  autoFillStarted = false;
  constructor(elementRef, renderer, changeDetectorRef, localization) {
    this.elementRef = elementRef;
    this.renderer = renderer;
    this.changeDetectorRef = changeDetectorRef;
    this.localization = localization;
    A(packageMetadata);
    this.direction = localization.rtl ? "rtl" : "ltr";
    this.renderer.removeAttribute(this.elementRef.nativeElement, "id");
  }
  /**
   * @hidden
   */
  ngAfterContentInit() {
    if (!isDocumentAvailable()) {
      return;
    }
    this.validateSetup();
    const control = new FloatingLabelInputAdapter(this.kendoInput || this.formControl.valueAccessor, this.formControl);
    this.addHandlers(control);
    this.setLabelFor(control);
  }
  ngAfterViewInit() {
    if (this.kendoInput) {
      this.setAriaLabelledby(this.kendoInput);
    }
  }
  /**
   * @hidden
   */
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  /**
   * @hidden
   */
  textFor(key) {
    return this.localization.get(key);
  }
  subscribe(control, eventName, handler) {
    if (control[eventName] instanceof EventEmitter) {
      const subscription = control[eventName].subscribe(handler);
      if (!this.subscription) {
        this.subscription = subscription;
      } else {
        this.subscription.add(subscription);
      }
    }
  }
  updateState() {
    const empty = (value) => {
      if (value === 0 || value === false) {
        return false;
      }
      if (Array.isArray(value) && !value.length) {
        return true;
      }
      return !value;
    };
    const formControl = this.formControl;
    if (formControl) {
      const valueAccessor = formControl.valueAccessor;
      if (isFunction(valueAccessor.isEmpty)) {
        this.empty = valueAccessor.isEmpty();
      } else {
        this.empty = empty(formControl.value);
      }
      this.invalid = formControl.invalid && (formControl.touched || formControl.dirty);
    } else {
      this.empty = isFunction(this.kendoInput.isEmpty) ? this.kendoInput.isEmpty() : empty(this.kendoInput.value);
    }
    if (this.empty) {
      this.renderer.addClass(this.elementRef.nativeElement, "k-empty");
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement, "k-empty");
    }
    this.changeDetectorRef.markForCheck();
  }
  setAriaLabelledby(component) {
    const componentId = component.focusableId || component.id;
    if (componentId) {
      const focusableElement = this.elementRef.nativeElement.querySelector(`#${componentId}`);
      if (!focusableElement) {
        return;
      }
      const existingAriaLabelledBy = focusableElement.hasAttribute("aria-labelledby") && focusableElement.getAttribute("aria-labelledby");
      this.renderer.setAttribute(focusableElement, nativeLabelForTargets.includes(focusableElement.tagName) ? "data-kendo-label-id" : "aria-labelledby", existingAriaLabelledBy && existingAriaLabelledBy !== this.labelId ? `${existingAriaLabelledBy} ${this.labelId}` : this.labelId);
    }
  }
  setLabelFor(control) {
    const controlId = control.focusableId || control.id;
    if (this.id && controlId) {
      this.id = controlId;
    } else if (this.id) {
      control.focusableId = this.id;
    } else if (controlId) {
      this.id = controlId;
    } else {
      const id = `k-${guid()}`;
      control.focusableId = id;
      this.id = id;
    }
  }
  handleAutofill(control) {
    this.subscribe(control, "autoFillStart", () => {
      this.autoFillStarted = true;
      this.renderer.removeClass(this.elementRef.nativeElement, "k-empty");
    });
    this.subscribe(control, "autoFillEnd", () => {
      if (this.autoFillStarted) {
        this.autoFillStarted = false;
        if (this.empty) {
          this.renderer.addClass(this.elementRef.nativeElement, "k-empty");
        }
      }
    });
  }
  addHandlers(control) {
    const setFocus = (isFocused) => () => {
      this.focused = isFocused;
      this.updateState();
      if (!this.empty) {
        return;
      }
      if (hasObservers(this.positionChange)) {
        this.positionChange.emit(isFocused ? "Out" : "In");
      }
    };
    this.subscribe(control, "onFocus", setFocus(true));
    this.subscribe(control, "onBlur", setFocus(false));
    this.handleAutofill(control);
    const updateState = () => this.updateState();
    updateState();
    this.subscribe(control, "onValueChange", updateState);
  }
  validateSetup() {
    if (!this.formControl && !this.kendoInput) {
      if (isDevMode()) {
        throw new Error("The FloatingLabelComponent requires a Kendo Input component or a forms-bound component to function properly.");
      }
      return;
    }
  }
  static ɵfac = function FloatingLabelComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FloatingLabelComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(LocalizationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _FloatingLabelComponent,
    selectors: [["kendo-floatinglabel"]],
    contentQueries: function FloatingLabelComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, KendoInput, 5);
        ɵɵcontentQuery(dirIndex, NgControl, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.kendoInput = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.formControl = _t.first);
      }
    },
    hostVars: 7,
    hostBindings: function FloatingLabelComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("dir", ctx.direction);
        ɵɵclassProp("k-floating-label-container", ctx.hostClasses)("k-focus", ctx.focusedClass)("k-invalid", ctx.invalidClass);
      }
    },
    inputs: {
      labelCssStyle: "labelCssStyle",
      labelCssClass: "labelCssClass",
      id: "id",
      text: "text",
      optional: "optional"
    },
    outputs: {
      positionChange: "positionChange"
    },
    exportAs: ["kendoFloatingLabel"],
    standalone: true,
    features: [ɵɵProvidersFeature([LocalizationService, {
      provide: L10N_PREFIX,
      useValue: "kendo.floatinglabel"
    }]), ɵɵStandaloneFeature],
    ngContentSelectors: _c0,
    decls: 3,
    vars: 1,
    consts: () => {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_LABEL_FESM2022_PROGRESS_KENDO_ANGULAR_LABEL_MJS_0 = goog.getMsg("Optional");
        i18n_0 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_LABEL_FESM2022_PROGRESS_KENDO_ANGULAR_LABEL_MJS_0;
      } else {
        i18n_0 = $localize`:kendo.floatinglabel.optional|The text for the optional segment of a FloatingLabel component:Optional`;
      }
      return [["kendoFloatingLabelLocalizedMessages", "", "optional", i18n_0], [1, "k-floating-label", 3, "ngClass", "ngStyle", "for"], [1, "k-label-optional"]];
    },
    template: function FloatingLabelComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementContainer(0, 0);
        ɵɵprojection(1);
        ɵɵtemplate(2, FloatingLabelComponent_Conditional_2_Template, 3, 6, "label", 1);
      }
      if (rf & 2) {
        ɵɵadvance(2);
        ɵɵconditional(ctx.text ? 2 : -1);
      }
    },
    dependencies: [LocalizedMessagesDirective, NgClass, NgStyle],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FloatingLabelComponent, [{
    type: Component,
    args: [{
      selector: "kendo-floatinglabel",
      exportAs: "kendoFloatingLabel",
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.floatinglabel"
      }],
      template: `
        <ng-container kendoFloatingLabelLocalizedMessages
          i18n-optional="kendo.floatinglabel.optional|The text for the optional segment of a FloatingLabel component"
          optional="Optional"
          >
        </ng-container>
        <ng-content></ng-content>
        @if (text) {
          <label [ngClass]="labelCssClass" [ngStyle]="labelCssStyle" [for]="id" [attr.id]="labelId" class="k-floating-label">
            {{ text }}@if (optional) {
            <span class="k-label-optional">({{textFor('optional')}})</span>
          }
        </label>
        }
        `,
      standalone: true,
      imports: [LocalizedMessagesDirective, NgClass, NgStyle]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: ChangeDetectorRef
  }, {
    type: LocalizationService
  }], {
    hostClasses: [{
      type: HostBinding,
      args: ["class.k-floating-label-container"]
    }],
    focusedClass: [{
      type: HostBinding,
      args: ["class.k-focus"]
    }],
    invalidClass: [{
      type: HostBinding,
      args: ["class.k-invalid"]
    }],
    direction: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    labelCssStyle: [{
      type: Input
    }],
    labelCssClass: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    text: [{
      type: Input
    }],
    optional: [{
      type: Input
    }],
    positionChange: [{
      type: Output
    }],
    kendoInput: [{
      type: ContentChild,
      args: [KendoInput, {
        static: false
      }]
    }],
    formControl: [{
      type: ContentChild,
      args: [NgControl, {
        static: false
      }]
    }]
  });
})();
var LabelComponent = class _LabelComponent {
  elementRef;
  renderer;
  localization;
  /**
   * Specifies the `dir` attribute value for the component.
   * @hidden
   */
  direction;
  /**
   * Sets the text content of the Label. Use this property to describe the input.
   *
   * @example
   * ```html
   * <kendo-label text="Email"></kendo-label>
   * ```
   */
  text;
  /**
   * Associates the label with a component by a template reference or with an HTML element by `id`.
   *
   * @example
   * ```html
   * <input #myInput />
   * <kendo-label [for]="myInput" text="Username"></kendo-label>
   * ```
   */
  set for(forValue) {
    if (forValue !== this._for) {
      this._for = forValue;
      this.control = forValue;
    }
  }
  get for() {
    return this._for;
  }
  /**
   * Marks a form field as optional. When enabled, the label displays the `Optional` text by default.
   * You can customize the text by providing a custom message. ([See example]({% slug label_globalization %}#toc-custom-messages)).
   *
   * @default false
   * @example
   * ```html
   * <kendo-label text="Phone" [optional]="true"></kendo-label>
   * ```
   */
  optional;
  /**
   * Sets the CSS styles for the label element.
   * Accepts values supported by the [`ngStyle`](link:site.data.urls.angular['ngstyleapi']) directive.
   *
   * @example
   * ```html
   * <kendo-label text="Name" [labelCssStyle]="{ color: 'red' }"></kendo-label>
   * ```
   */
  labelCssStyle;
  /**
   * Sets the CSS classes for the label element.
   * Accepts values supported by the [`ngClass`](link:site.data.urls.angular['ngclassapi']) directive.
   *
   * @example
   * ```html
   * <kendo-label text="Address" [labelCssClass]="'custom-label'"></kendo-label>
   * ```
   */
  labelCssClass;
  labelDirective;
  kendoInput;
  /**
   * @hidden
   */
  control;
  subscriptions = new Subscription();
  _for;
  constructor(elementRef, renderer, localization) {
    this.elementRef = elementRef;
    this.renderer = renderer;
    this.localization = localization;
    A(packageMetadata);
    this.direction = localization.rtl ? "rtl" : "ltr";
    this.renderer.removeAttribute(this.elementRef.nativeElement, "id");
  }
  /**
   * @hidden
   */
  ngAfterContentInit() {
    if (this.for) {
      return;
    }
    const wrappedNativeInput = getWrappedNativeInput(this.elementRef.nativeElement);
    if (wrappedNativeInput) {
      if (!wrappedNativeInput.hasAttribute("id")) {
        this.renderer.setAttribute(wrappedNativeInput, "id", `k-${guid()}`);
      }
      this.control = wrappedNativeInput;
      return;
    }
    this.control = this.kendoInput;
  }
  /**
   * @hidden
   */
  ngOnInit() {
    this.subscriptions.add(this.localization.changes.subscribe(({
      rtl
    }) => {
      this.direction = rtl ? "rtl" : "ltr";
    }));
  }
  /**
   * @hidden
   */
  ngAfterViewInit() {
    this.labelDirective.setAriaLabelledby();
  }
  /**
   * @hidden
   */
  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }
  /**
   * @hidden
   */
  textFor(key) {
    return this.localization.get(key);
  }
  static ɵfac = function LabelComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LabelComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(LocalizationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _LabelComponent,
    selectors: [["kendo-label"]],
    contentQueries: function LabelComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, KendoInput, 7);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.kendoInput = _t.first);
      }
    },
    viewQuery: function LabelComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(LabelDirective, 7);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.labelDirective = _t.first);
      }
    },
    hostVars: 1,
    hostBindings: function LabelComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("dir", ctx.direction);
      }
    },
    inputs: {
      text: "text",
      for: "for",
      optional: "optional",
      labelCssStyle: "labelCssStyle",
      labelCssClass: "labelCssClass"
    },
    exportAs: ["kendoLabel"],
    standalone: true,
    features: [ɵɵProvidersFeature([LocalizationService, {
      provide: L10N_PREFIX,
      useValue: "kendo.label"
    }]), ɵɵStandaloneFeature],
    ngContentSelectors: _c0,
    decls: 5,
    vars: 7,
    consts: () => {
      let i18n_1;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_LABEL_FESM2022_PROGRESS_KENDO_ANGULAR_LABEL_MJS_1 = goog.getMsg("Optional");
        i18n_1 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_LABEL_FESM2022_PROGRESS_KENDO_ANGULAR_LABEL_MJS_1;
      } else {
        i18n_1 = $localize`:kendo.label.optional|The text for the optional segment of a Label component:Optional`;
      }
      return [["kendoLabelLocalizedMessages", "", "optional", i18n_1], [3, "for", "ngClass", "ngStyle"], [1, "k-label-optional"]];
    },
    template: function LabelComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementContainer(0, 0);
        ɵɵelementStart(1, "label", 1);
        ɵɵtext(2);
        ɵɵtemplate(3, LabelComponent_Conditional_3_Template, 2, 1, "span", 2);
        ɵɵelementEnd();
        ɵɵprojection(4);
      }
      if (rf & 2) {
        ɵɵadvance();
        ɵɵclassProp("k-label-empty", !ctx.text);
        ɵɵproperty("for", ctx.control)("ngClass", ctx.labelCssClass)("ngStyle", ctx.labelCssStyle);
        ɵɵadvance();
        ɵɵtextInterpolate1(" ", ctx.text, "");
        ɵɵadvance();
        ɵɵconditional(ctx.optional ? 3 : -1);
      }
    },
    dependencies: [LocalizedMessagesDirective, LabelDirective, NgClass, NgStyle],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LabelComponent, [{
    type: Component,
    args: [{
      selector: "kendo-label",
      exportAs: "kendoLabel",
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.label"
      }],
      template: `
        <ng-container kendoLabelLocalizedMessages
          i18n-optional="kendo.label.optional|The text for the optional segment of a Label component"
          optional="Optional"
          >
        </ng-container>
        <label
          [for]="control"
          [class.k-label-empty]="!text"
          [ngClass]="labelCssClass"
          [ngStyle]="labelCssStyle"
          >
          {{ text }}@if (optional) {
          <span class="k-label-optional">({{textFor('optional')}})</span>
        }
        </label>
        <ng-content></ng-content>
        `,
      standalone: true,
      imports: [LocalizedMessagesDirective, LabelDirective, NgClass, NgStyle]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: LocalizationService
  }], {
    direction: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    text: [{
      type: Input
    }],
    for: [{
      type: Input
    }],
    optional: [{
      type: Input
    }],
    labelCssStyle: [{
      type: Input
    }],
    labelCssClass: [{
      type: Input
    }],
    labelDirective: [{
      type: ViewChild,
      args: [LabelDirective, {
        static: true
      }]
    }],
    kendoInput: [{
      type: ContentChild,
      args: [KendoInput, {
        static: true
      }]
    }]
  });
})();
var CustomMessagesComponent = class _CustomMessagesComponent extends Messages {
  service;
  constructor(service) {
    super();
    this.service = service;
  }
  get override() {
    return true;
  }
  static ɵfac = function CustomMessagesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CustomMessagesComponent)(ɵɵdirectiveInject(LocalizationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _CustomMessagesComponent,
    selectors: [["kendo-label-messages"], ["kendo-floatinglabel-messages"]],
    standalone: true,
    features: [ɵɵProvidersFeature([{
      provide: Messages,
      useExisting: forwardRef(() => _CustomMessagesComponent)
    }]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function CustomMessagesComponent_Template(rf, ctx) {
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomMessagesComponent, [{
    type: Component,
    args: [{
      providers: [{
        provide: Messages,
        useExisting: forwardRef(() => CustomMessagesComponent)
      }],
      selector: "kendo-label-messages, kendo-floatinglabel-messages",
      template: ``,
      standalone: true
    }]
  }], () => [{
    type: LocalizationService
  }], null);
})();
var KENDO_LABEL = [LabelDirective, LabelComponent, CustomMessagesComponent];
var KENDO_FLOATINGLABEL = [FloatingLabelComponent, CustomMessagesComponent];
var KENDO_LABELS = [...KENDO_LABEL, ...KENDO_FLOATINGLABEL];
var LabelModule = class _LabelModule {
  static ɵfac = function LabelModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LabelModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _LabelModule,
    imports: [LabelDirective, LabelComponent, CustomMessagesComponent, FloatingLabelComponent, CustomMessagesComponent],
    exports: [LabelDirective, LabelComponent, CustomMessagesComponent, FloatingLabelComponent, CustomMessagesComponent]
  });
  static ɵinj = ɵɵdefineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LabelModule, [{
    type: NgModule,
    args: [{
      imports: [...KENDO_LABELS],
      exports: [...KENDO_LABELS]
    }]
  }], null, null);
})();
var FloatingLabelModule = class _FloatingLabelModule {
  static ɵfac = function FloatingLabelModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FloatingLabelModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _FloatingLabelModule,
    imports: [FloatingLabelComponent, CustomMessagesComponent],
    exports: [FloatingLabelComponent, CustomMessagesComponent]
  });
  static ɵinj = ɵɵdefineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FloatingLabelModule, [{
    type: NgModule,
    args: [{
      exports: [...KENDO_FLOATINGLABEL],
      imports: [...KENDO_FLOATINGLABEL]
    }]
  }], null, null);
})();

export {
  LabelDirective,
  LocalizedMessagesDirective,
  FloatingLabelComponent,
  LabelComponent,
  CustomMessagesComponent,
  KENDO_LABEL,
  KENDO_FLOATINGLABEL,
  KENDO_LABELS,
  LabelModule,
  FloatingLabelModule
};
//# sourceMappingURL=chunk-BPZ6ADJD.js.map
