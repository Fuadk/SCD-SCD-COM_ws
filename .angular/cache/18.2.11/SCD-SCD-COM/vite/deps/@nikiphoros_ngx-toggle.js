import {
  NG_VALUE_ACCESSOR
} from "./chunk-CW7PMWWW.js";
import "./chunk-YS5E6LKP.js";
import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  NgModule,
  Renderer2,
  forwardRef,
  setClassMetadata,
  ɵɵProvidersFeature,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵlistener
} from "./chunk-R7LRY632.js";
import "./chunk-UG3XN6F5.js";
import "./chunk-K3IIKLCY.js";
import "./chunk-WISTXZPE.js";
import "./chunk-N6ESDQJH.js";

// node_modules/@nikiphoros/ngx-toggle/fesm2020/nikiphoros-ngx-toggle.mjs
var NgxToggleDirective = class {
  constructor(elementRef, renderer) {
    this.elementRef = elementRef;
    this.renderer = renderer;
    this.true = true;
    this.false = false;
    this.propagateChange = (_) => {
    };
  }
  onHostChange(ev) {
    this.propagateChange(ev.target.checked ? this.true : this.false);
  }
  writeValue(obj) {
    if (obj === this.true) {
      this.renderer.setProperty(this.elementRef.nativeElement, "checked", true);
    } else {
      this.renderer.setProperty(this.elementRef.nativeElement, "checked", false);
    }
  }
  registerOnChange(fn) {
    this.propagateChange = fn;
  }
  registerOnTouched(fn) {
  }
  setDisabledState(isDisabled) {
  }
};
NgxToggleDirective.ɵfac = function NgxToggleDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgxToggleDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2));
};
NgxToggleDirective.ɵdir = ɵɵdefineDirective({
  type: NgxToggleDirective,
  selectors: [["", "ToggleValue", ""]],
  hostBindings: function NgxToggleDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("change", function NgxToggleDirective_change_HostBindingHandler($event) {
        return ctx.onHostChange($event);
      });
    }
  },
  inputs: {
    true: "true",
    false: "false"
  },
  features: [ɵɵProvidersFeature([{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NgxToggleDirective),
    multi: true
  }])]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxToggleDirective, [{
    type: Directive,
    args: [{
      selector: "[ToggleValue]",
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => NgxToggleDirective),
        multi: true
      }]
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: Renderer2
    }];
  }, {
    true: [{
      type: Input
    }],
    false: [{
      type: Input
    }],
    onHostChange: [{
      type: HostListener,
      args: ["change", ["$event"]]
    }]
  });
})();
var NgxToggleModule = class {
};
NgxToggleModule.ɵfac = function NgxToggleModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgxToggleModule)();
};
NgxToggleModule.ɵmod = ɵɵdefineNgModule({
  type: NgxToggleModule,
  declarations: [NgxToggleDirective],
  exports: [NgxToggleDirective]
});
NgxToggleModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxToggleModule, [{
    type: NgModule,
    args: [{
      declarations: [NgxToggleDirective],
      imports: [],
      exports: [NgxToggleDirective]
    }]
  }], null, null);
})();
export {
  NgxToggleDirective,
  NgxToggleModule
};
//# sourceMappingURL=@nikiphoros_ngx-toggle.js.map
