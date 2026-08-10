import {
  areObjectsEqual,
  isDocumentAvailable
} from "./chunk-5AZCHGRK.js";
import {
  A
} from "./chunk-RWPIEFVW.js";
import {
  DomSanitizer
} from "./chunk-74QYUCA6.js";
import {
  NgClass
} from "./chunk-YS5E6LKP.js";
import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  ElementRef,
  HostBinding,
  Inject,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  Optional,
  Renderer2,
  isDevMode,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵStandaloneFeature,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵinject,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵsanitizeHtml,
  ɵɵstyleProp,
  ɵɵtemplate
} from "./chunk-R7LRY632.js";
import {
  BehaviorSubject,
  Subject,
  Subscription,
  map,
  tap
} from "./chunk-WISTXZPE.js";

// node_modules/@progress/kendo-angular-icons/fesm2022/progress-kendo-angular-icons.mjs
function SVGIconComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵstyleProp("pointer-events", "none");
    ɵɵproperty("innerHTML", ctx_r0.content, ɵɵsanitizeHtml);
    ɵɵattribute("viewBox", ctx_r0.icon.viewBox);
  }
}
function IconWrapperComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-svgicon", 0);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r0.innerCssClass)("icon", ctx_r0.svgIcon)("size", ctx_r0.size || (ctx_r0.iconSettings == null ? null : ctx_r0.iconSettings.size))("themeColor", ctx_r0.iconSettings == null ? null : ctx_r0.iconSettings.themeColor)("flip", ctx_r0.iconSettings == null ? null : ctx_r0.iconSettings.flip);
  }
}
function IconWrapperComponent_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon", 1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ctx_r0.innerCssClass)("name", ctx_r0.name)("size", ctx_r0.size || (ctx_r0.iconSettings == null ? null : ctx_r0.iconSettings.size))("themeColor", ctx_r0.iconSettings == null ? null : ctx_r0.iconSettings.themeColor)("flip", ctx_r0.iconSettings == null ? null : ctx_r0.iconSettings.flip);
  }
}
function IconWrapperComponent_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 2);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ctx_r0.customClasses);
  }
}
function IconWrapperComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, IconWrapperComponent_Conditional_1_Conditional_0_Template, 1, 5, "kendo-icon", 1)(1, IconWrapperComponent_Conditional_1_Conditional_1_Template, 1, 1, "span", 2);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵconditional(!ctx_r0.customFontIconClass ? 0 : 1);
  }
}
var packageMetadata = {
  name: "@progress/kendo-angular-icons",
  productName: "Kendo UI for Angular",
  productCode: "KENDOUIANGULAR",
  productCodes: ["KENDOUIANGULAR"],
  publishDate: 1768392988,
  version: "21.4.1",
  licensingDocsUrl: "https://www.telerik.com/kendo-angular-ui/my-license/"
};
var sizeClasses = {
  "default": "k-icon",
  "xsmall": "k-icon-xs",
  "small": "k-icon-sm",
  "medium": "k-icon-md",
  "large": "k-icon-lg",
  "xlarge": "k-icon-xl",
  "xxlarge": "k-icon-xxl",
  "xxxlarge": "k-icon-xxxl"
};
var IconBaseDirective = class _IconBaseDirective {
  element;
  renderer;
  get horizontalFlip() {
    return this.flip === "horizontal" || this.flip === "both";
  }
  get verticalFlip() {
    return this.flip === "vertical" || this.flip === "both";
  }
  /**
   * Flips the icon horizontally, vertically, or in both directions.
   */
  flip;
  /**
   * Sets the `IconThemeColor` for the icon. Use this property to apply a theme color.
   */
  set themeColor(themeColor) {
    const element = this.element.nativeElement;
    if (this._themeColor) {
      this.renderer.removeClass(element, `!k-color-${this._themeColor}`);
    }
    this._themeColor = themeColor;
    if (themeColor) {
      this.renderer.addClass(element, `!k-color-${themeColor}`);
    }
  }
  get themeColor() {
    return this._themeColor;
  }
  /**
   * Sets the `IconSize` for the icon. Use this property to change the icon size.
   */
  set size(size) {
    const currentClass = sizeClasses[this.size];
    const newClass = sizeClasses[size];
    const element = this.element.nativeElement;
    this.renderer.removeClass(element, currentClass);
    if (size && size !== "default") {
      this.renderer.addClass(element, newClass);
    }
    this._size = size;
  }
  get size() {
    return this._size;
  }
  _themeColor;
  _size;
  constructor(element, renderer) {
    this.element = element;
    this.renderer = renderer;
    A(packageMetadata);
  }
  static ɵfac = function IconBaseDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IconBaseDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _IconBaseDirective,
    selectors: [["", "kendoIconBase", ""]],
    hostVars: 4,
    hostBindings: function IconBaseDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("k-flip-h", ctx.horizontalFlip)("k-flip-v", ctx.verticalFlip);
      }
    },
    inputs: {
      flip: "flip",
      themeColor: "themeColor",
      size: "size"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconBaseDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoIconBase]"
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }], {
    horizontalFlip: [{
      type: HostBinding,
      args: ["class.k-flip-h"]
    }],
    verticalFlip: [{
      type: HostBinding,
      args: ["class.k-flip-v"]
    }],
    flip: [{
      type: Input
    }],
    themeColor: [{
      type: Input
    }],
    size: [{
      type: Input
    }]
  });
})();
var IconComponent = class _IconComponent extends IconBaseDirective {
  element;
  renderer;
  hostClass = true;
  hostAriaHidden = true;
  /**
   * Sets the `Icon` to render. Supports all [Kendo UI Icons](slug:icon_list).
   */
  set name(name) {
    if (isDocumentAvailable()) {
      const newName = name !== this._name;
      if (newName) {
        const element = this.element.nativeElement;
        this.renderer.removeClass(element, `k-i-${this.name}`);
        this.renderer.addClass(element, `k-i-${name}`);
      }
    }
    this._name = name;
  }
  get name() {
    return this._name;
  }
  _name;
  constructor(element, renderer) {
    super(element, renderer);
    this.element = element;
    this.renderer = renderer;
  }
  static ɵfac = function IconComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IconComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _IconComponent,
    selectors: [["kendo-icon"]],
    hostVars: 5,
    hostBindings: function IconComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("aria-hidden", ctx.hostAriaHidden);
        ɵɵclassProp("k-icon", ctx.hostClass)("k-font-icon", ctx.hostClass);
      }
    },
    inputs: {
      name: "name"
    },
    exportAs: ["kendoIcon"],
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function IconComponent_Template(rf, ctx) {
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoIcon",
      selector: "kendo-icon",
      template: "",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }], {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-icon"]
    }, {
      type: HostBinding,
      args: ["class.k-font-icon"]
    }],
    hostAriaHidden: [{
      type: HostBinding,
      args: ["attr.aria-hidden"]
    }],
    name: [{
      type: Input
    }]
  });
})();
var areSame = (i1, i2) => i1?.name === i2?.name && i1.content === i2.content && i1.viewBox === i2.viewBox;
var SVGIconComponent = class _SVGIconComponent extends IconBaseDirective {
  domSanitizer;
  element;
  renderer;
  hostClass = true;
  hostAriaHidden = true;
  /**
   * Sets the `SVGIcon` to render. Supports all [Kendo UI SVG Icons](slug:svgicon_list).
   */
  set icon(icon) {
    const element = this.element.nativeElement;
    const hasDocument = isDocumentAvailable();
    const newName = icon?.name && icon.name !== this._icon?.name;
    if (this._icon && this._icon.name && newName && hasDocument) {
      this.renderer.removeClass(element, `k-svg-i-${this._icon.name}`);
    }
    if (!areSame(icon, this._icon)) {
      this._icon = icon;
    }
    if (hasDocument && newName) {
      this.renderer.addClass(element, `k-svg-i-${this._icon.name}`);
    }
  }
  get icon() {
    return this._icon;
  }
  get content() {
    return this.domSanitizer.bypassSecurityTrustHtml(this.icon.content);
  }
  get visible() {
    return this.icon && isDocumentAvailable();
  }
  _icon;
  constructor(domSanitizer, element, renderer) {
    super(element, renderer);
    this.domSanitizer = domSanitizer;
    this.element = element;
    this.renderer = renderer;
  }
  ngOnInit() {
    this.verifyIconProperty();
  }
  verifyIconProperty() {
    if (!isDevMode()) {
      return;
    }
    if (!this._icon) {
      throw new Error(`
                Invalid configuration.
                The input [icon] is required for the Kendo UI SVG Icon component for Angular.
                See https://www.telerik.com/kendo-angular-ui/components/icons/svg-icon
            `);
    }
  }
  static ɵfac = function SVGIconComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SVGIconComponent)(ɵɵdirectiveInject(DomSanitizer), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _SVGIconComponent,
    selectors: [["kendo-svg-icon"], ["kendo-svgicon"]],
    hostVars: 5,
    hostBindings: function SVGIconComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("aria-hidden", ctx.hostAriaHidden);
        ɵɵclassProp("k-svg-icon", ctx.hostClass)("k-icon", ctx.hostClass);
      }
    },
    inputs: {
      icon: "icon"
    },
    exportAs: ["kendoSVGIcon"],
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 1,
    vars: 1,
    consts: [["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 3, "pointerEvents", "innerHTML"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 3, "innerHTML"]],
    template: function SVGIconComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, SVGIconComponent_Conditional_0_Template, 1, 4, ":svg:svg", 0);
      }
      if (rf & 2) {
        ɵɵconditional(ctx.visible ? 0 : -1);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SVGIconComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoSVGIcon",
      selector: "kendo-svg-icon, kendo-svgicon",
      template: `
        @if (visible) {
          <svg [style.pointerEvents]="'none'" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
            [attr.viewBox]="icon.viewBox" [innerHTML]="content">
          </svg>
        }`,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      imports: []
    }]
  }], () => [{
    type: DomSanitizer
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }], {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-svg-icon"]
    }, {
      type: HostBinding,
      args: ["class.k-icon"]
    }],
    hostAriaHidden: [{
      type: HostBinding,
      args: ["attr.aria-hidden"]
    }],
    icon: [{
      type: Input
    }]
  });
})();
var isPresent = (value) => value !== null && value !== void 0;
var IconSettingsService = class _IconSettingsService {
  /**
   * @hidden
   */
  changes = new Subject();
  /**
   * Notifies subscribers about changes in the icon settings.
   *
   * @param iconSettings - (Optional) Sets a new value for the [icon settings token]({% slug api_icons_icon_settings %}).
   * @example
   * ```typescript
   * iconSettingsService.notify({ size: 'large' });
   * ```
   */
  notify(iconSettings) {
    this.changes.next(iconSettings);
  }
  /**
   * Returns the [`SVGIcon`](slug:api_icons_svgicon) object for the provided key.
   * Override in a custom service to provide custom SVG icons.
   *
   * @hidden
   */
  getSvgIcon(_name) {
    return null;
  }
  /**
   * Returns the list of classes to be rendered on the host `SPAN` element of custom font icons.
   * Override in a custom service to provide classes for custom font icons.
   *
   * @hidden
   */
  getCustomFontIconClass(_key) {
    return null;
  }
  static ɵfac = function IconSettingsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IconSettingsService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _IconSettingsService,
    factory: _IconSettingsService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconSettingsService, [{
    type: Injectable
  }], null, null);
})();
var ICON_SETTINGS = new InjectionToken("Kendo UI Icon-Settings token");
var DEFAULT_ICON_SETTINGS = {
  type: "svg"
};
var IconsService = class _IconsService {
  _iconSettings;
  iconSettingsService;
  /**
   * Notifies subscribers of the initial icon settings and on each call to `notify`.
   * @hidden
   */
  changes = new BehaviorSubject(this.iconSettings || DEFAULT_ICON_SETTINGS);
  subs = new Subscription();
  constructor(_iconSettings, iconSettingsService) {
    this._iconSettings = _iconSettings;
    this.iconSettingsService = iconSettingsService;
    if (iconSettingsService) {
      this.subs.add(iconSettingsService.changes.pipe(map((iconSettings) => isPresent(iconSettings) ? iconSettings : this._iconSettings), tap((iconSettings) => this._iconSettings = iconSettings)).subscribe((iconSettings) => this.changes.next(iconSettings)));
    }
    if (isPresent(this.iconSettings) && !areObjectsEqual(this.iconSettings, DEFAULT_ICON_SETTINGS)) {
      this.changes.next(this.iconSettings);
    }
  }
  /**
   * @hidden
   */
  get iconSettings() {
    return this._iconSettings;
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
  /**
   * Returns the [`SVGIcon`](slug:api_icons_svgicon) object for the provided key.
   * Override in a custom service to provide custom SVG icons.
   * @hidden
   */
  getSvgIcon(name) {
    const customIcon = this.iconSettingsService && this.iconSettingsService.getSvgIcon(name);
    return customIcon;
  }
  /**
   * Returns the list of classes to be rendered on the host `SPAN` element of custom font icons.
   * Override in a custom service to provide classes for custom font icons.
   * @hidden
   */
  getCustomFontIconClass(key) {
    const customClass = this.iconSettingsService && this.iconSettingsService.getCustomFontIconClass(key);
    return customClass;
  }
  static ɵfac = function IconsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IconsService)(ɵɵinject(ICON_SETTINGS, 8), ɵɵinject(IconSettingsService, 8));
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _IconsService,
    factory: _IconsService.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ICON_SETTINGS]
    }]
  }, {
    type: IconSettingsService,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
var IconWrapperComponent = class _IconWrapperComponent {
  iconsService;
  element;
  hostClass = true;
  /**
   * Sets the name for an existing font icon in a Kendo UI theme to render.
   * Supports all [Kendo UI Icons](slug:icons#icons-list).
   */
  name;
  /**
   * Sets the [SVGIcon](slug:api_icons_svgicon) to render.
   */
  svgIcon;
  /**
   * Sets an additional class on the internal Icon component.
   */
  innerCssClass = "";
  /**
   * Sets a custom font icon class using the API of the consuming component.
   */
  customFontClass = "";
  /**
   * Sets the `IconSize` for the icon.
   */
  size;
  get customClasses() {
    const classes = [this.customFontClass, this.innerCssClass, this.customFontIconClass].filter((cl) => !!cl).join(" ");
    return classes;
  }
  iconSettings;
  get hasSvgIcon() {
    this.svgIcon = this.iconsService.getSvgIcon(this.name) || this.svgIcon;
    if (this.svgIcon) {
      return true;
    }
    if (isDevMode()) {
      console.groupCollapsed(`Kendo UI for Angular: Icon type is set to 'svg', but only font icon name is provided. The "${this.name}" font icon will be rendered instead.`);
      console.warn(`
Starting from v7.0.0 (October, 2023) of the Kendo Themes, the font icons will be removed from the theme.
* To render an SVG icon, update the component configuration by setting the "svgIcon" input to the respective icon definition.
* To continue to use font icons, install the "@progress/kendo-font-icons" package and import "@progress/kendo-font-icons/dist/index.css".

Please note, that font icons are not compatible with a strict Content Security Policy and require the use of the "unsafe-inline" override.

For further details, check the following documentation articles:
https://www.telerik.com/kendo-angular-ui/components/icons/icon-settings
https://www.telerik.com/kendo-angular-ui/components/styling/icons/
https://www.telerik.com/kendo-angular-ui/components/styling/svg-icons/
https://www.telerik.com/design-system/docs/foundation/iconography/font-icons/
https://www.telerik.com/design-system/docs/foundation/iconography/icon-list/
            `);
      console.groupEnd();
    }
    return false;
  }
  get customFontIconClass() {
    return this.iconsService.getCustomFontIconClass(this.name) || this.customFontClass;
  }
  subs = new Subscription();
  constructor(iconsService, element) {
    this.iconsService = iconsService;
    this.element = element;
    this.subs = iconsService.changes.subscribe((iconSettings) => {
      this.iconSettings = iconSettings;
    });
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
  static ɵfac = function IconWrapperComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IconWrapperComponent)(ɵɵdirectiveInject(IconsService), ɵɵdirectiveInject(ElementRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _IconWrapperComponent,
    selectors: [["kendo-icon-wrapper"]],
    hostVars: 2,
    hostBindings: function IconWrapperComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("k-icon-wrapper-host", ctx.hostClass);
      }
    },
    inputs: {
      name: "name",
      svgIcon: "svgIcon",
      innerCssClass: "innerCssClass",
      customFontClass: "customFontClass",
      size: "size"
    },
    exportAs: ["kendoIconWrapper"],
    standalone: true,
    features: [ɵɵStandaloneFeature],
    decls: 2,
    vars: 1,
    consts: [[3, "ngClass", "icon", "size", "themeColor", "flip"], [3, "ngClass", "name", "size", "themeColor", "flip"], [3, "ngClass"]],
    template: function IconWrapperComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, IconWrapperComponent_Conditional_0_Template, 1, 5, "kendo-svgicon", 0)(1, IconWrapperComponent_Conditional_1_Template, 2, 1);
      }
      if (rf & 2) {
        ɵɵconditional((ctx.iconSettings == null ? null : ctx.iconSettings.type) === "svg" && ctx.hasSvgIcon ? 0 : 1);
      }
    },
    dependencies: [NgClass, IconComponent, SVGIconComponent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconWrapperComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoIconWrapper",
      selector: "kendo-icon-wrapper",
      template: `
        @if (iconSettings?.type === 'svg' && hasSvgIcon) {
          <kendo-svgicon
            [ngClass]="innerCssClass"
            [icon]="svgIcon"
            [size]="size || iconSettings?.size"
            [themeColor]="iconSettings?.themeColor"
          [flip]="iconSettings?.flip"></kendo-svgicon>
        } @else {
          @if (!customFontIconClass) {
            <kendo-icon
              [ngClass]="innerCssClass"
              [name]="name"
              [size]="size || iconSettings?.size"
              [themeColor]="iconSettings?.themeColor"
            [flip]="iconSettings?.flip"></kendo-icon>
          } @else {
            <span [ngClass]="customClasses"></span>
          }
        }
        `,
      standalone: true,
      imports: [NgClass, IconComponent, SVGIconComponent]
    }]
  }], () => [{
    type: IconsService
  }, {
    type: ElementRef
  }], {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-icon-wrapper-host"]
    }],
    name: [{
      type: Input
    }],
    svgIcon: [{
      type: Input
    }],
    innerCssClass: [{
      type: Input
    }],
    customFontClass: [{
      type: Input
    }],
    size: [{
      type: Input
    }]
  });
})();
var IconModule = class _IconModule {
  static ɵfac = function IconModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IconModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _IconModule,
    imports: [IconComponent],
    exports: [IconComponent]
  });
  static ɵinj = ɵɵdefineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconModule, [{
    type: NgModule,
    args: [{
      exports: [IconComponent],
      imports: [IconComponent]
    }]
  }], null, null);
})();
var SVGIconModule = class _SVGIconModule {
  static ɵfac = function SVGIconModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SVGIconModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _SVGIconModule,
    imports: [SVGIconComponent],
    exports: [SVGIconComponent]
  });
  static ɵinj = ɵɵdefineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SVGIconModule, [{
    type: NgModule,
    args: [{
      exports: [SVGIconComponent],
      imports: [SVGIconComponent]
    }]
  }], null, null);
})();
var KENDO_ICON = [IconComponent];
var KENDO_SVGICON = [SVGIconComponent];
var KENDO_ICONS = [...KENDO_ICON, ...KENDO_SVGICON];
var IconsModule = class _IconsModule {
  static ɵfac = function IconsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IconsModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _IconsModule,
    imports: [IconComponent, SVGIconComponent],
    exports: [IconComponent, SVGIconComponent]
  });
  static ɵinj = ɵɵdefineInjector({
    providers: [IconsService]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconsModule, [{
    type: NgModule,
    args: [{
      imports: [...KENDO_ICONS],
      exports: [...KENDO_ICONS],
      providers: [IconsService]
    }]
  }], null, null);
})();

export {
  IconComponent,
  SVGIconComponent,
  IconSettingsService,
  ICON_SETTINGS,
  IconsService,
  IconWrapperComponent,
  IconModule,
  SVGIconModule,
  KENDO_ICON,
  KENDO_SVGICON,
  KENDO_ICONS,
  IconsModule
};
//# sourceMappingURL=chunk-3ZH7CTYC.js.map
