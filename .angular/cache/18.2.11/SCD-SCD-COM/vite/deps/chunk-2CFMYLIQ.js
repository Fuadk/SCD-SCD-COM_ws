import {
  DropDownListComponent
} from "./chunk-F6N2E3LM.js";
import {
  NumericTextBoxComponent
} from "./chunk-LVRV6KK7.js";
import {
  ButtonComponent
} from "./chunk-GUER2DF3.js";
import {
  caretAltLeftIcon,
  caretAltRightIcon,
  caretAltToLeftIcon,
  caretAltToRightIcon
} from "./chunk-KXMGKHT2.js";
import {
  PopupService
} from "./chunk-NKWNDTJB.js";
import {
  IconsService
} from "./chunk-3ZH7CTYC.js";
import {
  EventsOutsideAngularDirective,
  Keys,
  ResizeBatchService,
  ResizeSensorComponent,
  anyChanged,
  isChanged,
  isDocumentAvailable,
  isFocusable,
  isPresent,
  isVisible,
  normalizeKeys,
  replaceMessagePlaceholder
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
  NgStyle,
  NgTemplateOutlet
} from "./chunk-YS5E6LKP.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  NgModule,
  NgZone,
  Optional,
  Output,
  Renderer2,
  SkipSelf,
  TemplateRef,
  ViewChild,
  forwardRef,
  inject,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
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
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵi18nApply,
  ɵɵi18nAttributes,
  ɵɵi18nExp,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate5,
  ɵɵviewQuery
} from "./chunk-R7LRY632.js";
import {
  Subject,
  Subscription,
  take
} from "./chunk-WISTXZPE.js";

// node_modules/@progress/kendo-angular-pager/fesm2022/progress-kendo-angular-pager.mjs
var _c0 = ["dropdownlist"];
function PagerPageSizesComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵtextInterpolate1(" ", ctx_r2.textFor("itemsPerPage"), " ");
  }
}
var _c1 = ["select"];
var _c2 = ["numbers"];
function PagerNumericButtonsComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 4);
    ɵɵlistener("click", function PagerNumericButtonsComponent_Conditional_2_Template_button_click_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.changePage(ctx_r1.start - 2));
    });
    ɵɵtext(1, "...");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("size", ctx_r1.size);
    ɵɵattribute("aria-label", ctx_r1.pageLabel(ctx_r1.start - 1))("title", ctx_r1.pageLabel(ctx_r1.start - 1));
  }
}
function PagerNumericButtonsComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 5);
    ɵɵlistener("click", function PagerNumericButtonsComponent_For_4_Template_button_click_0_listener() {
      const num_r4 = ɵɵrestoreView(_r3).$implicit;
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.currentPage === num_r4 ? false : ctx_r1.changePage(num_r4 - 1));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const num_r4 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("size", ctx_r1.size)("selected", ctx_r1.currentPage === num_r4);
    ɵɵattribute("aria-label", ctx_r1.pageLabel(num_r4))("title", ctx_r1.pageLabel(num_r4))("aria-current", ctx_r1.currentPage === num_r4 ? "page" : void 0);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", num_r4, " ");
  }
}
function PagerNumericButtonsComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 4);
    ɵɵlistener("click", function PagerNumericButtonsComponent_Conditional_5_Template_button_click_0_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.changePage(ctx_r1.end));
    });
    ɵɵtext(1, "...");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("size", ctx_r1.size);
    ɵɵattribute("aria-label", ctx_r1.pageLabel(ctx_r1.end + 1))("title", ctx_r1.pageLabel(ctx_r1.end + 1));
  }
}
var _c3 = (a0) => ({
  "aria-label": a0
});
var _c4 = (a0, a1) => ({
  keydown: a0,
  focusout: a1
});
function PagerInputComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵtextInterpolate1(" ", ctx_r0.textFor("page"), " ");
  }
}
var _c5 = (a0) => ({
  opacity: a0
});
function PagerComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 2);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.template.first == null ? null : ctx_r0.template.first.templateRef)("ngTemplateOutletContext", ctx_r0.templateContext);
  }
}
function PagerComponent_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-pager-prev-buttons", 4);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("size", ctx_r0.size);
  }
}
function PagerComponent_Conditional_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-pager-numeric-buttons", 5);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("size", ctx_r0.size)("buttonCount", ctx_r0.buttonCount);
  }
}
function PagerComponent_Conditional_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-pager-input", 4);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("size", ctx_r0.size);
  }
}
function PagerComponent_Conditional_3_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-pager-next-buttons", 4);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("size", ctx_r0.size);
  }
}
function PagerComponent_Conditional_3_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-pager-page-sizes", 6);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("ngStyle", ɵɵpureFunction1(4, _c5, ctx_r0.initialized ? null : "0"))("size", ctx_r0.size)("pageSizes", ctx_r0._pageSizeValues)("adaptiveMode", ctx_r0.adaptiveMode);
  }
}
function PagerComponent_Conditional_3_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-pager-info", 7);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("ngStyle", ɵɵpureFunction1(1, _c5, ctx_r0.initialized ? null : "0"));
  }
}
function PagerComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 3);
    ɵɵtemplate(1, PagerComponent_Conditional_3_Conditional_1_Template, 1, 1, "kendo-pager-prev-buttons", 4)(2, PagerComponent_Conditional_3_Conditional_2_Template, 1, 2, "kendo-pager-numeric-buttons", 5)(3, PagerComponent_Conditional_3_Conditional_3_Template, 1, 1, "kendo-pager-input", 4)(4, PagerComponent_Conditional_3_Conditional_4_Template, 1, 1, "kendo-pager-next-buttons", 4);
    ɵɵelementEnd();
    ɵɵtemplate(5, PagerComponent_Conditional_3_Conditional_5_Template, 1, 6, "kendo-pager-page-sizes", 6)(6, PagerComponent_Conditional_3_Conditional_6_Template, 1, 3, "kendo-pager-info", 7);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngStyle", ɵɵpureFunction1(7, _c5, ctx_r0.initialized ? null : "0"));
    ɵɵadvance();
    ɵɵconditional(ctx_r0.previousNext ? 1 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r0.type === "numeric" && ctx_r0.buttonCount > 0 ? 2 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r0.showInput ? 3 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r0.previousNext ? 4 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r0._pageSizeValues.length ? 5 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r0.info ? 6 : -1);
  }
}
function PagerComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "kendo-resize-sensor", 8);
    ɵɵlistener("resize", function PagerComponent_Conditional_4_Template_kendo_resize_sensor_resize_0_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.resizeHandler());
    });
    ɵɵelementEnd();
  }
}
var PreventableEvent = class {
  prevented = false;
  /**
   * Prevents the default action for a specified event.
   * In this way, the source component suppresses the built-in behavior that follows the event.
   */
  preventDefault() {
    this.prevented = true;
  }
  /**
   * If the event is prevented by any of its subscribers, returns `true`.
   *
   * @returns `true` if the default action was prevented. Otherwise, returns `false`.
   */
  isDefaultPrevented() {
    return this.prevented;
  }
};
var PageSizeChangeEvent = class extends PreventableEvent {
  /**
   * Gets the newly selected page size.
   */
  newPageSize;
  /**
   * Constructs the event arguments for the `pageSizeChange` event.
   * @param newPageSize - The newly selected page size.
   * @hidden
   */
  constructor(newPageSize) {
    super();
    this.newPageSize = newPageSize;
  }
};
var Messages = class _Messages extends ComponentMessages {
  /**
   * The label of the pager. Follows the pattern **Page navigation, page {currentPage} of {totalPages}** by default.
   * Тhe default label text when the current page is 1, and the total number of pages is 10 will be
   * **Page navigation, page 1 of 10**.
   *
   * The message consists of several parts - the current page number, the total number of pages, and a localizable string.
   * To allow for reordering its parts, the `ariaLabel` input accepts a string with placeholders for the current page
   * and total number of pages. The `{currentPage}` and `{totalPages}` placeholders will be replaced
   * internally with the respective actual values.
   */
  ariaLabel;
  /**
   * The label for the **First page** button.
   */
  firstPage;
  /**
   * The label for the **Last page** button.
   */
  lastPage;
  /**
   * The label for the **Previous page** button.
   */
  previousPage;
  /**
   * The label for the **Next page** button.
   */
  nextPage;
  /**
   * The label displayed before the pager input.
   */
  page;
  /**
   * The title attribute of the page number input element.
   */
  pageNumberInputTitle;
  /**
   * The label displayed after the page-size selector.
   */
  itemsPerPage;
  /**
   * The label before the total-page number.
   */
  of;
  /**
   * The label after the total-page number.
   */
  items;
  /**
   * The text of the title and aria-label attributes applied to the page chooser.
   */
  selectPage;
  /**
   * The text of the aria-label attribute applied to the input element for entering the page number."
   */
  inputLabel;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵMessages_BaseFactory;
    return function Messages_Factory(__ngFactoryType__) {
      return (ɵMessages_BaseFactory || (ɵMessages_BaseFactory = ɵɵgetInheritedFactory(_Messages)))(__ngFactoryType__ || _Messages);
    };
  })();
  static ɵdir = ɵɵdefineDirective({
    type: _Messages,
    selectors: [["kendoPagerMessages"]],
    inputs: {
      ariaLabel: "ariaLabel",
      firstPage: "firstPage",
      lastPage: "lastPage",
      previousPage: "previousPage",
      nextPage: "nextPage",
      page: "page",
      pageNumberInputTitle: "pageNumberInputTitle",
      itemsPerPage: "itemsPerPage",
      of: "of",
      items: "items",
      selectPage: "selectPage",
      inputLabel: "inputLabel"
    },
    features: [ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Messages, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "kendoPagerMessages"
    }]
  }], null, {
    ariaLabel: [{
      type: Input
    }],
    firstPage: [{
      type: Input
    }],
    lastPage: [{
      type: Input
    }],
    previousPage: [{
      type: Input
    }],
    nextPage: [{
      type: Input
    }],
    page: [{
      type: Input
    }],
    pageNumberInputTitle: [{
      type: Input
    }],
    itemsPerPage: [{
      type: Input
    }],
    of: [{
      type: Input
    }],
    items: [{
      type: Input
    }],
    selectPage: [{
      type: Input
    }],
    inputLabel: [{
      type: Input
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
    selectors: [["kendo-datapager-messages"], ["kendo-pager-messages"]],
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
      selector: "kendo-datapager-messages, kendo-pager-messages",
      template: ``,
      standalone: true
    }]
  }], () => [{
    type: LocalizationService
  }], null);
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
    selectors: [["", "kendoPagerLocalizedMessages", ""]],
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
      selector: "[kendoPagerLocalizedMessages]",
      standalone: true
    }]
  }], () => [{
    type: LocalizationService
  }], null);
})();
var PagerContextService = class {
  total;
  skip;
  pageSize;
  isAllSelected = false;
  localization;
  changes = new Subject();
  pageChange = new Subject();
  pageSizeChange = new Subject();
  get currentPage() {
    return this.skip / this.pageSize;
  }
  notifyChanges(changes) {
    this.total = changes.total;
    this.skip = changes.skip;
    this.pageSize = changes.pageSize;
    this.isAllSelected = changes.isAllSelected || false;
    this.changes.next(changes);
  }
  changePage(page) {
    this.pageChange.next({
      skip: page * this.pageSize,
      take: this.pageSize
    });
  }
  changePageSize(event) {
    this.pageSizeChange.next(event);
  }
  nextPage() {
    const nextPage = this.currentPage + 1;
    if (nextPage * this.pageSize < this.total) {
      this.changePage(nextPage);
    }
  }
  prevPage() {
    const prevPage = this.currentPage - 1;
    if (prevPage * this.pageSize >= 0) {
      this.changePage(prevPage);
    }
  }
};
var PagerElementComponent = class _PagerElementComponent {
  localization;
  pagerContext;
  cd;
  total;
  skip;
  pageSize;
  caretAltLeftIcon = caretAltLeftIcon;
  caretAltToLeftIcon = caretAltToLeftIcon;
  caretAltRightIcon = caretAltRightIcon;
  caretAltToRightIcon = caretAltToRightIcon;
  /**
   * @hidden
   *
   * @readonly
   * @type {number}
   * @memberOf PagerElementComponent
   */
  get currentPage() {
    return Math.floor((this.skip || 0) / this.pageSize) + 1;
  }
  /**
   * @hidden
   *
   * @readonly
   * @type {number}
   * @memberOf PagerElementComponent
   */
  get totalPages() {
    return Math.ceil((this.total || 0) / this.pageSize);
  }
  subscriptions;
  constructor(localization, pagerContext, cd) {
    this.localization = localization;
    this.pagerContext = pagerContext;
    this.cd = cd;
    this.total = pagerContext.total;
    this.skip = pagerContext.skip;
    this.pageSize = pagerContext.pageSize;
  }
  /**
   * @hidden
   *
   * @param {string} key
   * @returns {string}
   *
   * @memberOf PagerElementComponent
   */
  textFor(key) {
    const isPagerLocalization = this.localization.prefix === "kendo.pager";
    return this.localization.get(isPagerLocalization ? key : `pager${key[0].toLocaleUpperCase()}${key.slice(1)}`);
  }
  /**
   * @hidden
   *
   * @param {number} page
   *
   * @memberOf PagerElementComponent
   */
  changePage(page) {
    this.pagerContext.changePage(page);
    return false;
  }
  /**
   * @hidden
   *
   * @memberOf PagerElementComponent
   */
  ngOnInit() {
    this.subscriptions = this.pagerContext.changes.subscribe(this.onChanges.bind(this));
    this.subscriptions.add(this.localization.changes.subscribe(() => this.cd.markForCheck()));
  }
  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }
  get prevArrowIcons() {
    return !this.localization.rtl ? ["caret-alt-to-left", "caret-alt-left"] : ["caret-alt-to-right", "caret-alt-right"];
  }
  get prevArrowSVGIcons() {
    return !this.localization.rtl ? [this.caretAltToLeftIcon, this.caretAltLeftIcon] : [this.caretAltToRightIcon, this.caretAltRightIcon];
  }
  get nextArrowIcons() {
    return !this.localization.rtl ? ["caret-alt-right", "caret-alt-to-right"] : ["caret-alt-left", "caret-alt-to-left"];
  }
  get nextArrowSVGIcons() {
    return !this.localization.rtl ? [this.caretAltRightIcon, this.caretAltToRightIcon] : [this.caretAltLeftIcon, this.caretAltToLeftIcon];
  }
  static ɵfac = function PagerElementComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PagerElementComponent)(ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(PagerContextService), ɵɵdirectiveInject(ChangeDetectorRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _PagerElementComponent,
    selectors: [["kendo-pager-element"]],
    decls: 0,
    vars: 0,
    template: function PagerElementComponent_Template(rf, ctx) {
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PagerElementComponent, [{
    type: Component,
    args: [{
      selector: "kendo-pager-element",
      template: ``
    }]
  }], () => [{
    type: LocalizationService
  }, {
    type: PagerContextService
  }, {
    type: ChangeDetectorRef
  }], null);
})();
var DEFAULT_PAGE_SIZE_VALUES = [5, 10, 20].map((n) => ({
  text: String(n),
  value: n
}));
var focusableDirectiveSelector = "[kendoPagerFocusable]";
var getAllFocusableChildren = (parent) => {
  return Array.from(parent.querySelectorAll(focusableDirectiveSelector))?.filter(isVisible);
};
var focusableSelector = ['a[href]:not([disabled]):not([aria-hidden="true"])', 'area[href]:not([disabled]):not([aria-hidden="true"])', 'input:not([disabled]):not([aria-hidden="true"])', 'select:not([disabled]):not([aria-hidden="true"])', 'textarea:not([disabled]):not([aria-hidden="true"])', 'button:not([aria-hidden="true"])', "iframe:not([disabled])", "object:not([disabled])", "embed:not([disabled])", '*[tabindex]:not([disabled]):not([aria-hidden="true"])', '*[contenteditable]:not([disabled]):not([contenteditable="false"])'].join(",");
var DEFAULT_SIZE = "medium";
var SIZES = {
  small: "sm",
  medium: "md",
  large: "lg"
};
var getStylingClasses = (componentType, stylingOption, previousValue, newValue) => {
  switch (stylingOption) {
    case "size":
      return {
        toRemove: `k-${componentType}-${SIZES[previousValue]}`,
        toAdd: newValue !== "none" ? `k-${componentType}-${SIZES[newValue]}` : ""
      };
    default:
      break;
  }
};
var calculatePadding = (element) => {
  if (!element || !isDocumentAvailable()) {
    return {
      padding: 0,
      gapNumbersSizes: 0,
      gapSizesInfo: 0
    };
  }
  const computedStyle = window.getComputedStyle(element);
  const paddingLeft = parseInt(computedStyle.paddingLeft, 10) || 0;
  const paddingRight = parseInt(computedStyle.paddingRight, 10) || 0;
  const padding = (paddingLeft + paddingRight) * 1.2;
  const style = getComputedStyle(document.documentElement);
  const gapNumbersSizes = 2 * (parseFloat(style.getPropertyValue("--kendo-spacing-3\\.5") || "0.875rem") * (parseFloat(getComputedStyle(document.documentElement).fontSize) || 16));
  const gapSizesInfo = gapNumbersSizes;
  return {
    padding,
    gapNumbersSizes,
    gapSizesInfo
  };
};
var calculateGap = (element) => {
  if (!element || !isDocumentAvailable()) {
    return 0;
  }
  const computedStyle = window.getComputedStyle(element);
  return parseFloat(computedStyle.gap) || 0;
};
var createMeasurementSpan = (renderer, container, className) => {
  const span = renderer.createElement("span");
  renderer.appendChild(container, span);
  renderer.addClass(span, className);
  return span;
};
var copyComputedStyles = (renderer, source, destination) => {
  const computedStyle = getComputedStyle(source);
  const importantStyles = ["font-family", "font-size", "font-weight", "font-style", "letter-spacing", "text-transform", "white-space", "word-spacing", "padding-left", "padding-right", "margin-left", "margin-right", "border-left-width", "border-right-width", "box-sizing"];
  importantStyles.forEach((style) => {
    renderer.setStyle(destination, style, computedStyle.getPropertyValue(style));
  });
};
var positionOffScreen = (renderer, element) => {
  renderer.setStyle(element, "position", "absolute");
  renderer.setStyle(element, "visibility", "hidden");
  renderer.setStyle(element, "left", "-9999px");
  renderer.setStyle(element, "top", "-9999px");
  renderer.setStyle(element, "display", "flex");
};
var PagerNavigationService = class {
  isNavigable = true;
  innerNavigationChange = new Subject();
  toggleInnerNavigation(value) {
    this.innerNavigationChange.next(value);
  }
  keepFocusWithinComponent(wrapper, target, event) {
    const [firstFocusable, lastFocusable] = this.getFirstAndLastFocusable(wrapper);
    const tabAfterLastFocusable = !event.shiftKey && target === lastFocusable;
    const shiftTabAfterFirstFocusable = event.shiftKey && target === firstFocusable;
    if (tabAfterLastFocusable) {
      event.preventDefault();
      firstFocusable.focus();
    }
    if (shiftTabAfterFirstFocusable) {
      event.preventDefault();
      lastFocusable.focus();
    }
  }
  getFirstAndLastFocusable(wrapper) {
    const all = getAllFocusableChildren(wrapper);
    const firstFocusable = all.length > 0 ? all[0] : wrapper;
    const lastFocusable = all.length > 0 ? all[all.length - 1] : wrapper;
    return [isFocusable(firstFocusable) ? firstFocusable : firstFocusable.querySelector(focusableSelector), isFocusable(lastFocusable) ? lastFocusable : lastFocusable.querySelector(focusableSelector)];
  }
};
var PagerFocusableDirective = class _PagerFocusableDirective {
  navigationService;
  element;
  renderer;
  subscriptions = new Subscription();
  constructor(navigationService, element, renderer) {
    this.navigationService = navigationService;
    this.element = element;
    this.renderer = renderer;
  }
  ngOnInit() {
    if (!(this.nativeElement instanceof HTMLElement)) {
      return;
    }
    this.subscriptions.add(this.navigationService.innerNavigationChange.subscribe(this.innerNavigationChange.bind(this)));
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  get nativeElement() {
    return this.element.nativeElement;
  }
  innerNavigationChange(value) {
    if (!this.navigationService.isNavigable) {
      return;
    }
    const index = value ? "0" : "-1";
    if (this.nativeElement.matches(focusableSelector)) {
      this.renderer.setAttribute(this.nativeElement, "tabindex", index);
    }
    const focusableElements = this.nativeElement.querySelectorAll(focusableSelector);
    focusableElements.forEach((el) => {
      this.renderer.setAttribute(el, "tabindex", index);
    });
  }
  static ɵfac = function PagerFocusableDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PagerFocusableDirective)(ɵɵdirectiveInject(PagerNavigationService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _PagerFocusableDirective,
    selectors: [["", "kendoPagerFocusable", ""]],
    exportAs: ["kendoPagerFocusable"],
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PagerFocusableDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoPagerFocusable]",
      exportAs: "kendoPagerFocusable",
      standalone: true
    }]
  }], () => [{
    type: PagerNavigationService
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }], null);
})();
var PagerPrevButtonsComponent = class _PagerPrevButtonsComponent extends PagerElementComponent {
  constructor(localization, pagerContext, cd) {
    super(localization, pagerContext, cd);
  }
  /**
   * Specifies the padding of the navigation buttons.
   *
   * @default 'medium'
   */
  size = DEFAULT_SIZE;
  /**
   * @hidden
   *
   * @readonly
   * @type {boolean}
   * @memberOf PagerPrevButtonsComponent
   */
  get disabled() {
    return this.currentPage === 1 || !this.total;
  }
  /**
   * @hidden
   */
  onClick(isFirst = false) {
    if (this.disabled) {
      return false;
    }
    const targetPage = isFirst ? 0 : this.currentPage - 2;
    return this.currentPage !== 1 ? this.changePage(targetPage) : false;
  }
  onChanges({
    total,
    skip,
    pageSize
  }) {
    this.total = total;
    this.skip = skip;
    this.pageSize = pageSize;
    this.cd.markForCheck();
  }
  static ɵfac = function PagerPrevButtonsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PagerPrevButtonsComponent)(ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(PagerContextService), ɵɵdirectiveInject(ChangeDetectorRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _PagerPrevButtonsComponent,
    selectors: [["kendo-datapager-prev-buttons"], ["kendo-pager-prev-buttons"]],
    inputs: {
      size: "size"
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 2,
    vars: 16,
    consts: [["type", "button", "kendoButton", "", "kendoPagerFocusable", "", "fillMode", "flat", "rounded", "none", 1, "k-pager-nav", "k-pager-first", 3, "click", "icon", "svgIcon", "size", "title"], ["type", "button", "kendoButton", "", "kendoPagerFocusable", "", "fillMode", "flat", "rounded", "none", 1, "k-pager-nav", 3, "click", "icon", "svgIcon", "size", "title"]],
    template: function PagerPrevButtonsComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "button", 0);
        ɵɵlistener("click", function PagerPrevButtonsComponent_Template_button_click_0_listener() {
          return ctx.onClick(true);
        });
        ɵɵelementEnd();
        ɵɵelementStart(1, "button", 1);
        ɵɵlistener("click", function PagerPrevButtonsComponent_Template_button_click_1_listener() {
          return ctx.onClick();
        });
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵclassProp("k-disabled", ctx.disabled);
        ɵɵproperty("icon", ctx.prevArrowIcons[0])("svgIcon", ctx.prevArrowSVGIcons[0])("size", ctx.size)("title", ctx.textFor("firstPage"));
        ɵɵattribute("aria-disabled", ctx.disabled)("aria-label", ctx.textFor("firstPage"));
        ɵɵadvance();
        ɵɵclassProp("k-disabled", ctx.disabled);
        ɵɵproperty("icon", ctx.prevArrowIcons[1])("svgIcon", ctx.prevArrowSVGIcons[1])("size", ctx.size)("title", ctx.textFor("previousPage"));
        ɵɵattribute("aria-disabled", ctx.disabled)("aria-label", ctx.textFor("previousPage"));
      }
    },
    dependencies: [ButtonComponent, PagerFocusableDirective],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PagerPrevButtonsComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-datapager-prev-buttons, kendo-pager-prev-buttons",
      template: `
        <button
            type="button" kendoButton
            kendoPagerFocusable
            class="k-pager-nav k-pager-first"
            [attr.aria-disabled]="disabled"
            [class.k-disabled]="disabled"
            [icon]="prevArrowIcons[0]"
            [svgIcon]="prevArrowSVGIcons[0]"
            fillMode="flat"
            rounded="none"
            [size]="size"
            [title]="textFor('firstPage')"
            [attr.aria-label]="textFor('firstPage')"
            (click)="onClick(true)">
        </button>
        <button
            type="button" kendoButton
            kendoPagerFocusable
            class="k-pager-nav"
            [attr.aria-disabled]="disabled"
            [class.k-disabled]="disabled"
            [icon]="prevArrowIcons[1]"
            [svgIcon]="prevArrowSVGIcons[1]"
            fillMode="flat"
            rounded="none"
            [size]="size"
            [title]="textFor('previousPage')"
            [attr.aria-label]="textFor('previousPage')"
            (click)="onClick()">
        </button>
    `,
      standalone: true,
      imports: [ButtonComponent, PagerFocusableDirective]
    }]
  }], () => [{
    type: LocalizationService
  }, {
    type: PagerContextService
  }, {
    type: ChangeDetectorRef
  }], {
    size: [{
      type: Input
    }]
  });
})();
var PagerPageSizesComponent = class _PagerPageSizesComponent extends PagerElementComponent {
  pagerContext;
  element;
  ngZone;
  dropDownList;
  _showItemsText = true;
  /**
   * Controls the visibility of the page text label.
   * @hidden
   */
  get showItemsText() {
    return this._showItemsText;
  }
  set showItemsText(value) {
    this._showItemsText = value;
    this.cd.markForCheck();
  }
  /**
   * Specifies the page sizes collection. You can include numbers and [`PageSizeItem`]({% slug api_pager_pagesizeitem %}) objects.
   *
   * @example
   * ```html
   * <kendo-pager [skip]="0" [pageSize]="10" [total]="100">
   *   <ng-template kendoPagerTemplate>
   *     <kendo-pager-page-sizes [pageSizes]="[5, 10, 20, { text: 'All', value: 'all' }]"></kendo-pager-page-sizes>
   *   </ng-template>
   * </kendo-pager>
   * ```
   */
  set pageSizes(pageSizes) {
    let normalizedItems = [];
    if (Array.isArray(pageSizes)) {
      pageSizes.forEach((item) => {
        if (typeof item === "number") {
          normalizedItems.push({
            text: item.toString(),
            value: item
          });
        } else {
          normalizedItems.push(item);
        }
      });
    } else {
      normalizedItems = DEFAULT_PAGE_SIZE_VALUES;
    }
    if (this.pageSize && !normalizedItems.some((item) => item.value === this.pageSize)) {
      normalizedItems = [{
        text: this.pageSize.toString(),
        value: this.pageSize
      }, ...normalizedItems];
    }
    this._pageSizes = normalizedItems;
  }
  /**
   * Specifies the padding of the DropDownList component.
   *
   * @default 'medium'
   */
  size = DEFAULT_SIZE;
  /**
   * Specifies the adaptive mode of the internal `DropDownList` component.
   *
   * @default 'auto'
   */
  adaptiveMode = "auto";
  /**
   * @hidden
   *
   * @readonly
   */
  get classes() {
    return true;
  }
  _pageSizes = [];
  constructor(localization, cd, pagerContext, element, ngZone) {
    super(localization, pagerContext, cd);
    this.pagerContext = pagerContext;
    this.element = element;
    this.ngZone = ngZone;
  }
  ngAfterViewInit() {
    this.ngZone.runOutsideAngular(() => {
      this.element.nativeElement.addEventListener("keydown", this.keyDownHandler.bind(this), true);
    });
  }
  ngOnDestroy() {
    this.element.nativeElement.removeEventListener("keydown", this.keyDownHandler);
  }
  /**
   * @hidden
   */
  pageSizeChange(value, dropdownlist) {
    const event = new PageSizeChangeEvent(value);
    this.pagerContext.changePageSize(event);
    if (event.isDefaultPrevented()) {
      dropdownlist.writeValue(this.pageSize);
    }
  }
  onChanges({
    total,
    skip,
    pageSize,
    isAllSelected
  }) {
    this.total = total;
    this.skip = skip;
    const normalizedPageSize = typeof pageSize === "number" ? pageSize : this.total;
    this.pageSize = isAllSelected ? "all" : normalizedPageSize;
    this.cd.markForCheck();
  }
  keyDownHandler(ev) {
    if (ev.code === Keys.Escape && this.dropDownList.isOpen) {
      ev.stopPropagation();
      this.dropDownList.toggle(false);
    }
  }
  static ɵfac = function PagerPageSizesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PagerPageSizesComponent)(ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(PagerContextService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _PagerPageSizesComponent,
    selectors: [["kendo-datapager-page-sizes"], ["kendo-pager-page-sizes"]],
    viewQuery: function PagerPageSizesComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 7);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.dropDownList = _t.first);
      }
    },
    hostVars: 2,
    hostBindings: function PagerPageSizesComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("k-pager-sizes", ctx.classes);
      }
    },
    inputs: {
      showItemsText: "showItemsText",
      pageSizes: "pageSizes",
      size: "size",
      adaptiveMode: "adaptiveMode"
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 3,
    vars: 7,
    consts: [["dropdownlist", ""], ["kendoPagerFocusable", "", "textField", "text", "valueField", "value", 3, "valueChange", "size", "data", "valuePrimitive", "value", "adaptiveMode"]],
    template: function PagerPageSizesComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "kendo-dropdownlist", 1, 0);
        ɵɵlistener("valueChange", function PagerPageSizesComponent_Template_kendo_dropdownlist_valueChange_0_listener($event) {
          ɵɵrestoreView(_r1);
          const dropdownlist_r2 = ɵɵreference(1);
          return ɵɵresetView(ctx.pageSizeChange($event, dropdownlist_r2));
        });
        ɵɵelementEnd();
        ɵɵtemplate(2, PagerPageSizesComponent_Conditional_2_Template, 1, 1);
      }
      if (rf & 2) {
        ɵɵproperty("size", ctx.size)("data", ctx._pageSizes)("valuePrimitive", true)("value", ctx.pageSize)("adaptiveMode", ctx.adaptiveMode);
        ɵɵattribute("aria-label", ctx.textFor("itemsPerPage"));
        ɵɵadvance(2);
        ɵɵconditional(ctx.showItemsText ? 2 : -1);
      }
    },
    dependencies: [DropDownListComponent, PagerFocusableDirective],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PagerPageSizesComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-datapager-page-sizes, kendo-pager-page-sizes",
      template: `
        <kendo-dropdownlist kendoPagerFocusable
          #dropdownlist
          [size]="size"
          [data]="_pageSizes"
          textField="text"
          valueField="value"
          [valuePrimitive]="true"
          [value]="pageSize"
          (valueChange)="pageSizeChange($event, dropdownlist)"
          [adaptiveMode]="adaptiveMode"
          [attr.aria-label]="textFor('itemsPerPage')">
        </kendo-dropdownlist>
        @if (showItemsText) {
          {{ textFor('itemsPerPage') }}
        }
        `,
      standalone: true,
      imports: [DropDownListComponent, PagerFocusableDirective]
    }]
  }], () => [{
    type: LocalizationService
  }, {
    type: ChangeDetectorRef
  }, {
    type: PagerContextService
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    dropDownList: [{
      type: ViewChild,
      args: ["dropdownlist", {
        static: true
      }]
    }],
    showItemsText: [{
      type: Input
    }],
    pageSizes: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    adaptiveMode: [{
      type: Input
    }],
    classes: [{
      type: HostBinding,
      args: ["class.k-pager-sizes"]
    }]
  });
})();
var PagerTemplateDirective = class _PagerTemplateDirective {
  templateRef;
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static ɵfac = function PagerTemplateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PagerTemplateDirective)(ɵɵdirectiveInject(TemplateRef, 8));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _PagerTemplateDirective,
    selectors: [["", "kendoDataPagerTemplate", ""], ["", "kendoPagerTemplate", ""]],
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PagerTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoDataPagerTemplate], [kendoPagerTemplate]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
var PagerNumericButtonsComponent = class _PagerNumericButtonsComponent extends PagerElementComponent {
  pagerContext;
  renderer;
  selectElement;
  numbersElement;
  /**
   * Specifies the count of the displayed buttons.
   *
   * @type {number}
   * @memberOf PagerNumericButtonsComponent
   */
  buttonCount;
  /**
   * Specifies the padding of the numeric buttons.
   *
   * @default 'medium'
   */
  set size(size) {
    const newSize = size ? size : DEFAULT_SIZE;
    this.handleClasses(newSize, "size");
    this._size = newSize;
  }
  get size() {
    return this._size;
  }
  /**
   * @hidden
   *
   * @readonly
   * @type {number[]}
   * @memberOf PagerNumericButtonsComponent
   */
  get buttons() {
    const result = [];
    for (let idx = this.start; idx <= this.end; idx++) {
      result.push(idx);
    }
    return result;
  }
  /**
   * @hidden
   */
  get end() {
    return Math.min(this.start + this.buttonCount - 1, this.totalPages);
  }
  /**
   * @hidden
   */
  get start() {
    const page = this.currentPage;
    const buttonCount = this.buttonCount;
    if (page > buttonCount) {
      const reminder = page % buttonCount;
      return reminder === 0 ? page - buttonCount + 1 : page - reminder + 1;
    }
    return 1;
  }
  constructor(localization, cd, pagerContext, renderer) {
    super(localization, pagerContext, cd);
    this.pagerContext = pagerContext;
    this.renderer = renderer;
  }
  _size = DEFAULT_SIZE;
  ngAfterViewInit() {
    this.handleClasses(this.size, "size");
  }
  /**
   * @hidden
   */
  pageLabel(num) {
    const pageText = this.textFor("page");
    if (pageText) {
      return pageText + " " + num;
    }
    return num.toString();
  }
  /**
   * @hidden
   */
  onSelectChange(e) {
    const target = e.target;
    const valueAsNumber = Number(target.value);
    if (!Number.isNaN(valueAsNumber)) {
      this.changePage(valueAsNumber - 1);
    } else {
      if (target.value === "previousButtons") {
        this.changePage(this.start - 2);
      } else {
        this.changePage(this.end);
      }
    }
  }
  onChanges({
    total,
    skip,
    pageSize
  }) {
    this.total = total;
    this.skip = skip;
    this.pageSize = pageSize;
    this.cd.markForCheck();
  }
  get pageChooserLabel() {
    return this.textFor("selectPage");
  }
  handleClasses(value, input) {
    const elem = this.selectElement?.nativeElement;
    const classes = getStylingClasses("picker", input, this[input], value);
    if (!elem) {
      return;
    }
    if (classes.toRemove) {
      this.renderer.removeClass(elem, classes.toRemove);
    }
    if (classes.toAdd) {
      this.renderer.addClass(elem, classes.toAdd);
    }
  }
  static ɵfac = function PagerNumericButtonsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PagerNumericButtonsComponent)(ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(PagerContextService), ɵɵdirectiveInject(Renderer2));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _PagerNumericButtonsComponent,
    selectors: [["kendo-datapager-numeric-buttons"], ["kendo-pager-numeric-buttons"]],
    viewQuery: function PagerNumericButtonsComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c1, 5, ElementRef);
        ɵɵviewQuery(_c2, 5, ElementRef);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.selectElement = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.numbersElement = _t.first);
      }
    },
    inputs: {
      buttonCount: "buttonCount",
      size: "size"
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 6,
    vars: 2,
    consts: [["numbers", ""], [1, "k-pager-numbers"], ["type", "button", "kendoPagerFocusable", "", "kendoButton", "", "fillMode", "flat", "themeColor", "primary", "rounded", "none", 3, "size"], ["type", "button", "kendoPagerFocusable", "", "kendoButton", "", "fillMode", "flat", "themeColor", "primary", "rounded", "none", 3, "size", "selected"], ["type", "button", "kendoPagerFocusable", "", "kendoButton", "", "fillMode", "flat", "themeColor", "primary", "rounded", "none", 3, "click", "size"], ["type", "button", "kendoPagerFocusable", "", "kendoButton", "", "fillMode", "flat", "themeColor", "primary", "rounded", "none", 3, "click", "size", "selected"]],
    template: function PagerNumericButtonsComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div", 1, 0);
        ɵɵtemplate(2, PagerNumericButtonsComponent_Conditional_2_Template, 2, 3, "button", 2);
        ɵɵrepeaterCreate(3, PagerNumericButtonsComponent_For_4_Template, 2, 6, "button", 3, ɵɵrepeaterTrackByIdentity);
        ɵɵtemplate(5, PagerNumericButtonsComponent_Conditional_5_Template, 2, 3, "button", 2);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵadvance(2);
        ɵɵconditional(ctx.start > 1 ? 2 : -1);
        ɵɵadvance();
        ɵɵrepeater(ctx.buttons);
        ɵɵadvance(2);
        ɵɵconditional(ctx.end < ctx.totalPages ? 5 : -1);
      }
    },
    dependencies: [PagerFocusableDirective, ButtonComponent],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PagerNumericButtonsComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-datapager-numeric-buttons, kendo-pager-numeric-buttons",
      template: `
        <div class="k-pager-numbers" #numbers>
          @if (start > 1) {
            <button
              type="button"
              kendoPagerFocusable
              kendoButton
              [size]="size"
              fillMode="flat"
              themeColor="primary"
              rounded="none"
              [attr.aria-label]="pageLabel(start - 1)"
              [attr.title]="pageLabel(start - 1)"
            (click)="changePage(start - 2)">...</button>
          }
          @for (num of buttons; track num) {
            <button
              type="button"
              kendoPagerFocusable
              kendoButton
              [size]="size"
              fillMode="flat"
              themeColor="primary"
              rounded="none"
              [attr.aria-label]="pageLabel(num)"
              [attr.title]="pageLabel(num)"
              [attr.aria-current]="currentPage === num ? 'page' : undefined"
              [selected]="currentPage === num"
              (click)="currentPage === num ? false : changePage(num - 1)">
              {{num}}
            </button>
          }
          @if (end < totalPages) {
            <button
              type="button"
              kendoPagerFocusable
              kendoButton
              [size]="size"
              fillMode="flat"
              themeColor="primary"
              rounded="none"
              [attr.aria-label]="pageLabel(end + 1)"
              [attr.title]="pageLabel(end + 1)"
            (click)="changePage(end)">...</button>
          }
        </div>
        `,
      standalone: true,
      imports: [PagerFocusableDirective, ButtonComponent]
    }]
  }], () => [{
    type: LocalizationService
  }, {
    type: ChangeDetectorRef
  }, {
    type: PagerContextService
  }, {
    type: Renderer2
  }], {
    selectElement: [{
      type: ViewChild,
      args: ["select", {
        read: ElementRef
      }]
    }],
    numbersElement: [{
      type: ViewChild,
      args: ["numbers", {
        read: ElementRef
      }]
    }],
    buttonCount: [{
      type: Input
    }],
    size: [{
      type: Input
    }]
  });
})();
var PagerNextButtonsComponent = class _PagerNextButtonsComponent extends PagerElementComponent {
  /**
   * @hidden
   *
   * @readonly
   * @type {boolean}
   * @memberOf PagerNextButtonsComponent
   */
  get disabled() {
    return this.currentPage === this.totalPages || !this.total;
  }
  /**
   * Specifies the padding of the navigation buttons.
   *
   * @default 'medium'
   */
  size = DEFAULT_SIZE;
  constructor(localization, pagerContext, cd) {
    super(localization, pagerContext, cd);
  }
  /**
   * @hidden
   */
  onClick(isLast = false) {
    if (this.disabled) {
      return false;
    }
    const targetPage = isLast ? this.totalPages - 1 : this.currentPage;
    return this.currentPage !== this.totalPages ? this.changePage(targetPage) : false;
  }
  onChanges({
    total,
    skip,
    pageSize
  }) {
    this.total = total;
    this.skip = skip;
    this.pageSize = pageSize;
    this.cd.markForCheck();
  }
  static ɵfac = function PagerNextButtonsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PagerNextButtonsComponent)(ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(PagerContextService), ɵɵdirectiveInject(ChangeDetectorRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _PagerNextButtonsComponent,
    selectors: [["kendo-datapager-next-buttons"], ["kendo-pager-next-buttons"]],
    inputs: {
      size: "size"
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 2,
    vars: 16,
    consts: [["kendoButton", "", "kendoPagerFocusable", "", "type", "button", "fillMode", "flat", "rounded", "none", 1, "k-pager-nav", 3, "click", "size", "icon", "svgIcon", "title"], ["kendoButton", "", "kendoPagerFocusable", "", "type", "button", "fillMode", "flat", "rounded", "none", 1, "k-pager-nav", "k-pager-last", 3, "click", "size", "icon", "svgIcon", "title"]],
    template: function PagerNextButtonsComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "button", 0);
        ɵɵlistener("click", function PagerNextButtonsComponent_Template_button_click_0_listener() {
          return ctx.onClick();
        });
        ɵɵelementEnd();
        ɵɵelementStart(1, "button", 1);
        ɵɵlistener("click", function PagerNextButtonsComponent_Template_button_click_1_listener() {
          return ctx.onClick(true);
        });
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵclassProp("k-disabled", ctx.disabled);
        ɵɵproperty("size", ctx.size)("icon", ctx.nextArrowIcons[0])("svgIcon", ctx.nextArrowSVGIcons[0])("title", ctx.textFor("nextPage"));
        ɵɵattribute("aria-disabled", ctx.disabled)("aria-label", ctx.textFor("nextPage"));
        ɵɵadvance();
        ɵɵclassProp("k-disabled", ctx.disabled);
        ɵɵproperty("size", ctx.size)("icon", ctx.nextArrowIcons[1])("svgIcon", ctx.nextArrowSVGIcons[1])("title", ctx.textFor("lastPage"));
        ɵɵattribute("aria-disabled", ctx.disabled)("aria-label", ctx.textFor("lastPage"));
      }
    },
    dependencies: [ButtonComponent, PagerFocusableDirective],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PagerNextButtonsComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-datapager-next-buttons, kendo-pager-next-buttons",
      template: `
        <button kendoButton kendoPagerFocusable
            type="button"
            [size]="size"
            [icon]="nextArrowIcons[0]"
            [svgIcon]="nextArrowSVGIcons[0]"
            fillMode="flat"
            rounded="none"
            class="k-pager-nav"
            [attr.aria-disabled]="disabled"
            [class.k-disabled]="disabled"
            [title]="textFor('nextPage')"
            [attr.aria-label]="textFor('nextPage')"
            (click)="onClick()">
        </button>
        <button kendoButton kendoPagerFocusable
            type="button"
            [size]="size"
            [icon]="nextArrowIcons[1]"
            [svgIcon]="nextArrowSVGIcons[1]"
            fillMode="flat"
            rounded="none"
            class="k-pager-nav k-pager-last"
            [attr.aria-disabled]="disabled"
            [class.k-disabled]="disabled"
            [title]="textFor('lastPage')"
            [attr.aria-label]="textFor('lastPage')"
            (click)="onClick(true)">
        </button>
    `,
      standalone: true,
      imports: [ButtonComponent, PagerFocusableDirective]
    }]
  }], () => [{
    type: LocalizationService
  }, {
    type: PagerContextService
  }, {
    type: ChangeDetectorRef
  }], {
    size: [{
      type: Input
    }]
  });
})();
var PagerInputComponent = class _PagerInputComponent extends PagerElementComponent {
  pagerContext;
  zone;
  renderer;
  numericInput;
  /**
   * Controls the visibility of the page text label.
   * @hidden
   */
  showPageText = true;
  /**
   * Specifies the padding of the internal `NumericTextBox` component.
   *
   * @default 'medium'
   */
  size = DEFAULT_SIZE;
  constructor(localization, pagerContext, zone, cd, renderer) {
    super(localization, pagerContext, cd);
    this.pagerContext = pagerContext;
    this.zone = zone;
    this.renderer = renderer;
  }
  onChanges({
    total,
    skip,
    pageSize
  }) {
    this.total = total;
    this.skip = skip;
    this.pageSize = pageSize;
    this.cd.markForCheck();
  }
  /**
   * @hidden
   *
   * @param {string} value
   *
   * @memberOf PagerInputComponent
   */
  handleKeyDown = (event) => {
    const incomingValue = this.numericInput.value || this.current;
    if (event.code === Keys.Enter || event.code === Keys.NumpadEnter) {
      event.preventDefault();
      if (incomingValue !== this.current) {
        this.zone.run(() => {
          this.changePage(incomingValue - 1);
        });
      }
    }
  };
  /**
   * @hidden
   *
   * @param {string} value
   *
   * @memberOf PagerInputComponent
   */
  handleBlur = () => {
    const inputValue = this.numericInput.value;
    if (!inputValue) {
      this.numericInput.writeValue(this.current);
      return;
    }
    if (inputValue !== this.current) {
      this.zone.run(() => {
        this.changePage(inputValue - 1);
      });
    }
  };
  /**
   * @hidden
   */
  get current() {
    return this.hasPages ? this.currentPage : 0;
  }
  /**
   * @hidden
   */
  get hasPages() {
    return this.totalPages !== 0;
  }
  static ɵfac = function PagerInputComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PagerInputComponent)(ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(PagerContextService), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Renderer2));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _PagerInputComponent,
    selectors: [["kendo-datapager-input"], ["kendo-pager-input"]],
    viewQuery: function PagerInputComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(NumericTextBoxComponent, 7);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.numericInput = _t.first);
      }
    },
    inputs: {
      showPageText: "showPageText",
      size: "size"
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 4,
    vars: 19,
    consts: [[1, "k-pager-input"], ["kendoPagerFocusable", "", "format", "n0", 3, "spinners", "decimals", "size", "disabled", "value", "min", "max", "autoCorrect", "inputAttributes", "title", "kendoEventsOutsideAngular"]],
    template: function PagerInputComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "span", 0);
        ɵɵtemplate(1, PagerInputComponent_Conditional_1_Template, 1, 1);
        ɵɵelement(2, "kendo-numerictextbox", 1);
        ɵɵtext(3);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵadvance();
        ɵɵconditional(ctx.showPageText ? 1 : -1);
        ɵɵadvance();
        ɵɵproperty("spinners", false)("decimals", 0)("size", ctx.size)("disabled", !ctx.hasPages)("value", ctx.current)("min", ctx.hasPages ? 1 : 0)("max", ctx.totalPages)("autoCorrect", true)("inputAttributes", ɵɵpureFunction1(14, _c3, ctx.textFor("inputLabel")))("title", ctx.textFor("pageNumberInputTitle"))("kendoEventsOutsideAngular", ɵɵpureFunction2(16, _c4, ctx.handleKeyDown, ctx.handleBlur));
        ɵɵadvance();
        ɵɵtextInterpolate2(" ", ctx.textFor("of"), " ", ctx.totalPages, " ");
      }
    },
    dependencies: [NumericTextBoxComponent, PagerFocusableDirective, EventsOutsideAngularDirective],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PagerInputComponent, [{
    type: Component,
    args: [{
      selector: "kendo-datapager-input, kendo-pager-input",
      template: `
     <span class="k-pager-input">
       @if (showPageText) {
         {{textFor('page')}}
       }
       <kendo-numerictextbox kendoPagerFocusable
         [spinners]="false"
         [decimals]="0"
         format="n0"
         [size]="size"
         [disabled]="!hasPages"
         [value]="current"
         [min]="hasPages ? 1 : 0"
         [max]="totalPages"
         [autoCorrect]="true"
            [inputAttributes]="{
                'aria-label': textFor('inputLabel')
            }"
         [title]="textFor('pageNumberInputTitle')"
            [kendoEventsOutsideAngular]="{
                keydown: handleKeyDown,
                focusout: handleBlur
            }">
       </kendo-numerictextbox>
       {{textFor('of')}} {{totalPages}}
     </span>
     `,
      standalone: true,
      imports: [NumericTextBoxComponent, PagerFocusableDirective, EventsOutsideAngularDirective]
    }]
  }], () => [{
    type: LocalizationService
  }, {
    type: PagerContextService
  }, {
    type: NgZone
  }, {
    type: ChangeDetectorRef
  }, {
    type: Renderer2
  }], {
    numericInput: [{
      type: ViewChild,
      args: [NumericTextBoxComponent, {
        static: true
      }]
    }],
    showPageText: [{
      type: Input
    }],
    size: [{
      type: Input
    }]
  });
})();
var PagerInfoComponent = class _PagerInfoComponent extends PagerElementComponent {
  /**
   * @hidden
   *
   * @readonly
   * @type {number}
   * @memberOf PagerInfoComponent
   */
  get maxItems() {
    return Math.min(this.currentPage * this.pageSize, this.total);
  }
  /**
   * @hidden
   *
   * @readonly
   * @type {number}
   * @memberOf PagerInfoComponent
   */
  get currentPageText() {
    return this.total ? (this.currentPage - 1) * this.pageSize + 1 : 0;
  }
  /**
   * @hidden
   *
   * @readonly
   * @type {boolean}
   * @memberOf PagerInfoComponent
   */
  hostClass = true;
  constructor(localization, cd, pagerContext) {
    super(localization, pagerContext, cd);
  }
  onChanges({
    total,
    skip,
    pageSize
  }) {
    this.total = total;
    this.skip = skip;
    this.pageSize = pageSize;
    this.cd.markForCheck();
  }
  static ɵfac = function PagerInfoComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PagerInfoComponent)(ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(PagerContextService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _PagerInfoComponent,
    selectors: [["kendo-datapager-info"], ["kendo-pager-info"]],
    hostVars: 2,
    hostBindings: function PagerInfoComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("k-pager-info", ctx.hostClass);
      }
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 1,
    vars: 5,
    template: function PagerInfoComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtext(0);
      }
      if (rf & 2) {
        ɵɵtextInterpolate5("", ctx.currentPageText, " - ", ctx.maxItems, " ", ctx.textFor("of"), " ", ctx.total, " ", ctx.textFor("items"), "");
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PagerInfoComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-datapager-info, kendo-pager-info",
      template: `{{currentPageText}} - {{maxItems}} {{textFor('of')}} {{total}} {{textFor('items')}}`,
      standalone: true
    }]
  }], () => [{
    type: LocalizationService
  }, {
    type: ChangeDetectorRef
  }, {
    type: PagerContextService
  }], {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-pager-info"]
    }]
  });
})();
var packageMetadata = {
  name: "@progress/kendo-angular-pager",
  productName: "Kendo UI for Angular",
  productCode: "KENDOUIANGULAR",
  productCodes: ["KENDOUIANGULAR"],
  publishDate: 1768393206,
  version: "21.4.1",
  licensingDocsUrl: "https://www.telerik.com/kendo-angular-ui/my-license/"
};
var PagerComponent = class _PagerComponent {
  pagerContext;
  element;
  localization;
  renderer;
  ngZone;
  cdr;
  navigationService;
  /**
   * Represents the collection of pager template directives.
   */
  template;
  set numericButtons(buttons) {
    const newWidth = buttons ? buttons.nativeElement?.offsetWidth : 0;
    if (buttons && newWidth !== this.pagerDimensions.numericButtonsWidth) {
      this.pagerDimensions.numericButtonsWidth = newWidth;
    }
  }
  set pagerInput(input) {
    const newWidth = input ? input.nativeElement?.offsetWidth : 0;
    if (input && newWidth !== this.pagerDimensions.inputWidth) {
      this.pagerDimensions.inputWidth = newWidth;
    }
    if (input?.nativeElement && !this.pagerDimensions.gapPageText) {
      const innerStyledElement = input.nativeElement.querySelector(".k-pager-input");
      this.pagerDimensions.gapPageText = calculateGap(innerStyledElement);
    }
  }
  pagerInputComponent;
  set pageSizes(sizes) {
    const newWidth = sizes ? sizes.nativeElement?.offsetWidth : 0;
    if (sizes && newWidth !== this.pagerDimensions.pageSizesWidth) {
      this.pagerDimensions.pageSizesWidth = newWidth;
    }
  }
  pageSizesComponent;
  /**
   * @hidden
   */
  externalTemplate;
  /**
   * Specifies the total number of data items in the collection.
   *
   * @default 0
   */
  total = 0;
  /**
   * Specifies the number of data items to skip.
   *
   * @default 0
   */
  skip = 0;
  /**
   * Specifies the number of data items per page.
   */
  pageSize;
  /**
   * Specifies the maximum number of numeric buttons before the buttons are collapsed.
   *
   * @default 10
   */
  buttonCount = 10;
  /**
   * Determines whether to display information about the current page and the total number of records.
   *
   * @default true
   */
  info = true;
  /**
   * Specifies the type of the Pager.
   *
   * @default 'numeric'
   */
  type = "numeric";
  /**
   * Displays a dropdown for selecting the page size.
   * When set to `true`, the dropdown contains the default list of options - 5, 10, 20.
   * To customize the list of options, set `pageSizeValues` to an array of the desired values.
   * The array can contain numbers and [PageSizeItem]({% slug api_pager_pagesizeitem %}) objects.
   */
  set pageSizeValues(value) {
    if (typeof value === "boolean") {
      this._pageSizeValues = value ? DEFAULT_PAGE_SIZE_VALUES : [];
    } else {
      this._pageSizeValues = value;
    }
  }
  get pageSizeValues() {
    return this._pageSizeValues;
  }
  /**
   * Determines whether to display the **Previous** and **Next** buttons.
   *
   * @default true
   */
  previousNext = true;
  /**
   * Determines whether users can use dedicated shortcuts to interact with the Pager ([see example]({% slug keyboard_navigation_pager %})).
   * By default, navigation is enabled. To disable it and make the Pager content accessible in the normal tab sequence, set the property to `false`.
   * @default true
   */
  set navigable(value) {
    this._navigable = value;
    this.navigationService.isNavigable = value;
  }
  get navigable() {
    return this._navigable;
  }
  /**
   * Specifies the padding of all Pager elements.
   *
   * @default 'medium'
   */
  set size(size) {
    const newSize = size ? size : DEFAULT_SIZE;
    this.handleClasses(newSize, "size");
    this._size = newSize;
  }
  get size() {
    return this._size;
  }
  /**
   * Determines whether the Pager responsive functionality is enabled ([see example](slug:responsive_pager)).
   *
   * @default true
   */
  responsive = true;
  /**
   * Determines whether the Pager adaptiveness functionality is enabled ([see example](slug:adaptive_mode_pager)).
   *
   * @default 'none'
   */
  adaptiveMode = "none";
  /**
   * Fires when the current page of the Pager changes ([see example](slug:overview_pager)).
   * You have to handle the event and page the data.
   */
  pageChange = new EventEmitter();
  /**
   * Fires when the page size of the Pager changes.
   * You have to handle the event and page the data.
   * If the event is prevented, the page size remains unchanged ([see example]({% slug pager_events %})).
   */
  pageSizeChange = new EventEmitter();
  /**
   * @hidden
   */
  pagerInputVisibilityChange = new EventEmitter();
  /**
   * @hidden
   */
  pageTextVisibilityChange = new EventEmitter();
  /**
   * @hidden
   */
  itemsTextVisibilityChange = new EventEmitter();
  pagerClass = true;
  get responsiveClass() {
    return this.responsive;
  }
  widgetRole = "application";
  roleDescription = "pager";
  keyShortcuts = "Enter ArrowRight ArrowLeft";
  get hostTabindex() {
    return this.navigable ? "0" : "-1";
  }
  get dir() {
    return this.direction;
  }
  /**
   * @hidden
   */
  focusHandler(ev) {
    const isInnerNavigationEnabled = ev.target !== this.element.nativeElement;
    this.navigationService.toggleInnerNavigation(isInnerNavigationEnabled);
  }
  get totalPages() {
    return Math.ceil((this.total || 0) / this.pageSize);
  }
  get currentPage() {
    return Math.floor((this.skip || 0) / this.pageSize) + 1;
  }
  get templateContext() {
    const context = this._templateContext;
    context.totalPages = this.totalPages;
    context.total = this.total;
    context.skip = this.skip;
    context.pageSize = this.pageSize;
    context.currentPage = this.currentPage;
    return context;
  }
  /**
   * @hidden
   */
  get showPageText() {
    return this._showPageText;
  }
  set showPageText(value) {
    this._showPageText = value;
    if (this.pagerInputComponent) {
      this.pagerInputComponent.showPageText = value;
    }
    this.pageTextVisibilityChange.emit(value);
  }
  /**
   * @hidden
   */
  get showItemsText() {
    return this._showItemsText;
  }
  set showItemsText(value) {
    this._showItemsText = value;
    if (this.pageSizesComponent) {
      this.pageSizesComponent.showItemsText = value;
    }
    this.itemsTextVisibilityChange.emit(value);
  }
  /**
   * @hidden
   */
  get showInput() {
    return this._showInput;
  }
  set showInput(value) {
    this._showInput = value;
    this.pagerInputVisibilityChange.emit(value);
  }
  /**
   * @hidden
   */
  initialized = false;
  subscriptions = new Subscription();
  _templateContext = {};
  _pageSizeValues = DEFAULT_PAGE_SIZE_VALUES;
  direction;
  isInnerNavigationEnabled = false;
  _navigable = true;
  _size = DEFAULT_SIZE;
  _showInput = true;
  _showPageText = true;
  _showItemsText = true;
  _isAllSelected = false;
  /**
   * Stores the measurements of various Pager elements.
   * These dimensions are used for responsive layout calculations.
   * @hidden
   */
  pagerDimensions = {
    padding: 0,
    numericButtonsWidth: 0,
    inputWidth: 0,
    pageSizesWidth: 0,
    sizesTextWidth: 0,
    pageTextWidth: 0,
    infoTextWidth: 0,
    gapNumbersSizes: 0,
    gapSizesInfo: 0,
    gapPageText: 0,
    width: 0
  };
  constructor(pagerContext, element, localization, renderer, ngZone, cdr, navigationService) {
    this.pagerContext = pagerContext;
    this.element = element;
    this.localization = localization;
    this.renderer = renderer;
    this.ngZone = ngZone;
    this.cdr = cdr;
    this.navigationService = navigationService;
    A(packageMetadata);
    this.direction = localization.rtl ? "rtl" : "ltr";
    if (!navigationService) {
      this.navigationService = inject(PagerNavigationService);
    }
    if (!pagerContext) {
      this.pagerContext = inject(PagerContextService);
    }
    this.pagerContext.localization = localization;
  }
  ngOnInit() {
    this.subscriptions.add(this.pagerContext.pageChange.subscribe(this.changePage.bind(this)));
    this.subscriptions.add(this.pagerContext.pageSizeChange.subscribe(this.changePageSize.bind(this)));
    this.subscriptions.add(this.localization.changes.subscribe(({
      rtl
    }) => {
      this.direction = rtl ? "rtl" : "ltr";
      this.measureAllTextWidths();
      if (this.responsive) {
        this.resizeHandler();
      }
    }));
    this.subscriptions.add(this.navigationService.innerNavigationChange.subscribe(this.innerNavigationChange.bind(this)));
    if (this.navigable) {
      const wrapper = this.element.nativeElement;
      this.ngZone.runOutsideAngular(() => {
        this.subscriptions.add(this.renderer.listen(wrapper, "keydown", this.keyDownHandler.bind(this)));
      });
    }
  }
  /**
   * Gets the maximum number of items displayed on the current page.
   */
  get maxItems() {
    return Math.min(this.currentPage * this.pageSize, this.total);
  }
  ngAfterViewInit() {
    this.renderer.setAttribute(this.element.nativeElement, "aria-label", this.ariaLabel);
    this.subscriptions.add(this.template.changes.subscribe(() => {
      this.measureAllTextWidths();
      if (this.responsive) {
        this.resizeHandler(false);
      }
    }));
    this.handleClasses(this.size, "size");
    this.setPagerDimensions();
    this.ngZone.onStable.pipe(take(1)).subscribe(() => {
      if (this.type !== "input") {
        this.showInput = false;
      }
      this.responsive && this.resizeHandler();
    });
    if (!isDocumentAvailable()) {
      this.initialized = true;
      return;
    }
    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => {
        this.initialized = true;
        this.cdr.markForCheck();
      }, 0);
    });
  }
  ngOnChanges(changes) {
    if (anyChanged(["pageSize", "skip", "total"], changes, false)) {
      const previousTotal = changes["total"]?.previousValue;
      const currentTotal = this.total;
      let pageSizeAdjusted = false;
      if (this._isAllSelected && previousTotal && currentTotal !== previousTotal && this.pageSize === previousTotal) {
        this.pageSize = currentTotal;
        pageSizeAdjusted = true;
      }
      const previousButtonCount = Math.min(this.buttonCount, (changes["total"]?.previousValue || this.total) / (changes["pageSize"]?.previousValue || this.pageSize));
      this.pagerContext.notifyChanges({
        pageSize: this.pageSize,
        skip: this.skip,
        total: this.total,
        isAllSelected: this._isAllSelected
      });
      this.pagerDimensions.numericButtonsWidth = this.pagerDimensions.numericButtonsWidth * Math.min(this.buttonCount, this.total / this.pageSize) / previousButtonCount;
      this.renderer.setAttribute(this.element.nativeElement, "aria-label", this.ariaLabel);
      if (this.responsive) {
        this.resizeHandler(false);
      }
      if (pageSizeAdjusted) {
        Promise.resolve().then(() => {
          this.pageChange.emit({
            skip: this.skip,
            take: currentTotal
          });
          this.cdr.detectChanges();
        });
      }
    }
    if (anyChanged(["pageSizeValues", "previousNext", "buttonCount"], changes, true)) {
      if (this.responsive) {
        this.resizeHandler(false);
      }
    }
    if (isChanged("responsive", changes, true)) {
      if (changes["responsive"].currentValue && !changes["responsive"].previousValue) {
        this.measureAllTextWidths();
        this.resizeHandler(false);
      }
      if (!this.responsive) {
        this.showInput = this.type === "input";
        this.showElements(this.element.nativeElement.offsetWidth, this.pagerDimensions.width);
      }
    }
    if (isChanged("type", changes, true)) {
      this.showNumericButtonsResponsive();
      if (this.responsive) {
        this.resizeHandler(false);
      }
    }
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  /**
   * @hidden
   */
  changePage(event) {
    this.pageChange.emit(event);
  }
  /**
   * @hidden
   */
  changePageSize(event) {
    this.pageSizeChange.emit(event);
    if (!event.isDefaultPrevented()) {
      if (event.newPageSize === "all") {
        this._isAllSelected = true;
        this.pageChange.emit({
          skip: 0,
          take: this.total
        });
      } else {
        this._isAllSelected = false;
        this.pageChange.emit({
          skip: 0,
          take: event.newPageSize
        });
      }
    }
  }
  /**
   * @hidden
   */
  onPageSizeChange(event) {
    this.pageSizeChange.emit(event);
    if (!event.isDefaultPrevented()) {
      this.pageChange.emit({
        skip: this.skip,
        take: event.newPageSize
      });
    }
  }
  /**
   * @hidden
   */
  resizeHandler = (compareWidth = true) => {
    if (this.template?.first && !this.responsive) {
      return;
    }
    if (!isDocumentAvailable() || !this.element?.nativeElement) {
      this.initialized = true;
      return;
    }
    let pagerWidth = this.element.nativeElement.offsetWidth;
    if (pagerWidth <= 0) {
      return;
    }
    if (compareWidth && pagerWidth === this.pagerDimensions.width) {
      return;
    } else {
      this.pagerDimensions.width = pagerWidth;
    }
    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => {
        if (this.template?.first && !this.responsive) {
          return;
        }
        const numericButtonsWrapperElement = this.element.nativeElement.querySelector(".k-pager-numbers-wrap");
        const pagerInfoElement = this.pagerInfoElement();
        const pagerPageSizes = this.sizesDropDownElement();
        let elementsWidths = numericButtonsWrapperElement?.offsetWidth + (pagerPageSizes?.offsetWidth || 0) + (pagerInfoElement?.offsetWidth > 0 ? Math.min(this.pagerDimensions.infoTextWidth) : 0);
        if (this.isElementVisible(pagerInfoElement)) {
          elementsWidths += this.pagerDimensions.gapSizesInfo;
        }
        pagerWidth -= this.pagerDimensions.padding;
        if (this.isElementVisible(pagerPageSizes)) {
          pagerWidth -= this.pagerDimensions.gapNumbersSizes;
        }
        if (pagerWidth < 0) {
          return;
        }
        this.showElements(pagerWidth, elementsWidths);
        if (!this.initialized) {
          this.ngZone.onStable.pipe(take(1)).subscribe(() => this.initialized = true);
        }
      });
    });
  };
  // use selectors to get the element even when used in a template
  sizesDropDownElement = () => this.element.nativeElement.querySelector(".k-pager-sizes");
  pagerInputElement = () => this.element.nativeElement.querySelector(".k-pager-input");
  pagerInfoElement = () => this.element.nativeElement.querySelector(".k-pager-info");
  numericButtonsElement = () => this.element.nativeElement.querySelector("kendo-datapager-numeric-buttons, kendo-pager-numeric-buttons");
  responsiveDropDownElement = {
    name: "sizeDropDown",
    isEnabled: () => this.showPageSizes,
    isVisible: () => this.isElementVisible(this.sizesDropDownElement()),
    width: () => this.pagerDimensions.pageSizesWidth + this.pagerDimensions.gapNumbersSizes - this.pagerDimensions.sizesTextWidth,
    show: () => {
      this.ngZone.run(() => this.showItemsText = false);
      this.showElement(this.sizesDropDownElement());
    },
    hide: () => {
      this.hideElement(this.sizesDropDownElement());
    }
  };
  responsiveDropDownTextElement = {
    name: "itemsDropDownText",
    isEnabled: () => this.showPageSizes,
    isVisible: () => this.isElementVisible(this.sizesDropDownElement()) && this.showItemsText,
    width: () => this.pagerDimensions.sizesTextWidth + this.pagerDimensions.gapPageText,
    show: () => this.ngZone.run(() => this.showItemsText = true),
    hide: () => this.ngZone.run(() => this.showItemsText = false)
  };
  responsivePageTextElement = {
    name: "pageText",
    isEnabled: () => this.isElementVisible(this.pagerInputElement()),
    isVisible: () => this.showPageText,
    width: () => this.pagerDimensions.pageTextWidth + this.pagerDimensions.gapPageText,
    show: () => this.ngZone.run(() => this.showPageText = true),
    hide: () => this.ngZone.run(() => this.showPageText = false)
  };
  responsiveInfoTextElement = {
    name: "infoText",
    isEnabled: () => this.info,
    isVisible: () => this.isElementVisible(this.pagerInfoElement()),
    width: () => this.pagerDimensions.infoTextWidth + this.pagerDimensions.gapSizesInfo,
    show: () => {
      this.ngZone.run(() => {
        this.showElement(this.pagerInfoElement());
      });
    },
    hide: () => {
      this.ngZone.run(() => {
        this.hideElement(this.pagerInfoElement());
      });
    }
  };
  responsiveNumericButtonsElement = {
    name: "numericButtons",
    isEnabled: () => this.type === "numeric",
    isVisible: () => this.isElementVisible(this.numericButtonsElement()),
    width: () => this.pagerDimensions.numericButtonsWidth - this.pagerDimensions.inputWidth,
    show: () => {
      this.showElement(this.numericButtonsElement());
      this.ngZone.run(() => {
        this.showInput = false;
        this.cdr.markForCheck();
      });
    },
    hide: () => {
      this.hideElement(this.numericButtonsElement());
      this.ngZone.run(() => {
        this.showInput = true;
        this.showPageText = true;
        this.cdr.markForCheck();
      });
    }
  };
  /**
   * Contains all elements that are subject to responsive toggling.
   * These elements will be shown or hidden based on the available space.
   * The order of elements in the array defines the priority of visibility.
   * This array allows us to work with the elements without performing element-specific logic in other methods.
   */
  responsiveElements = [this.responsiveDropDownElement, this.responsiveDropDownTextElement, this.responsivePageTextElement, this.responsiveInfoTextElement, this.responsiveNumericButtonsElement];
  get ariaLabel() {
    const localizationMsg = this.localization.get("ariaLabel") || "";
    return replaceMessagePlaceholder(replaceMessagePlaceholder(localizationMsg, "currentPage", this.currentPage.toString()), "totalPages", this.totalPages.toString());
  }
  keyDownHandler(e) {
    const target = e.target;
    const wrapper = this.element.nativeElement;
    const code = normalizeKeys(e);
    const isArrowLeftOrPageUp = code === Keys.ArrowLeft || code === Keys.PageUp;
    const isArrowRightOrPageDown = code === Keys.ArrowRight || code === Keys.PageDown;
    const isEnter = code === Keys.Enter || code === Keys.NumpadEnter;
    const isHome = code === Keys.Home;
    const isEnd = code === Keys.End;
    const isEsc = code === Keys.Escape;
    const isTab = code === Keys.Tab;
    const isFirstPage = this.currentPage === 1;
    const isLastPage = this.currentPage === this.totalPages;
    this.ngZone.run(() => {
      if (isHome) {
        if (e.target !== wrapper) {
          return;
        }
        e.preventDefault();
        if (!isFirstPage) {
          this.pagerContext.changePage(0);
        }
      } else if (isEnd) {
        e.preventDefault();
        if (e.target !== wrapper) {
          return;
        }
        if (!isLastPage) {
          this.pagerContext.changePage(this.totalPages - 1);
        }
      } else if (this.isInnerNavigationEnabled) {
        if (isEsc) {
          this.navigationService.toggleInnerNavigation(false);
          wrapper.focus();
        } else if (isTab) {
          this.navigationService.keepFocusWithinComponent(wrapper, target, e);
        }
      } else {
        if (e.target !== wrapper) {
          return;
        }
        if (isArrowLeftOrPageUp) {
          e.preventDefault();
          if (!isFirstPage) {
            this.pagerContext.prevPage();
          }
        } else if (isArrowRightOrPageDown) {
          e.preventDefault();
          if (!isLastPage) {
            this.pagerContext.nextPage();
          }
        } else if (isEnter) {
          e.preventDefault();
          let [firstFocusable] = this.navigationService.getFirstAndLastFocusable(wrapper);
          if (firstFocusable.getAttribute("aria-disabled") === "true") {
            firstFocusable = Array.from(getAllFocusableChildren(wrapper)).find((el) => !el.getAttribute("aria-disabled"));
            const input = firstFocusable.querySelector("input");
            if (input) {
              firstFocusable = input;
            }
          }
          this.navigationService.toggleInnerNavigation(true);
          firstFocusable?.focus();
        }
      }
    });
  }
  innerNavigationChange(value) {
    this.isInnerNavigationEnabled = value;
  }
  handleClasses(value, input) {
    const elem = this.element.nativeElement;
    const classes = getStylingClasses("pager", input, this[input], value);
    if (classes.toRemove) {
      this.renderer.removeClass(elem, classes.toRemove);
    }
    if (classes.toAdd) {
      this.renderer.addClass(elem, classes.toAdd);
    }
  }
  showElements(availableWidth, currentWidth) {
    let index = 0;
    while (index < this.responsiveElements.length) {
      const element = this.responsiveElements[index];
      if (!element.isEnabled() || element.isVisible()) {
        index++;
        continue;
      }
      const elementWidth = element.width();
      if (this.responsive && currentWidth + elementWidth > availableWidth) {
        index++;
        break;
      }
      element.show();
      currentWidth += elementWidth;
      index++;
    }
    if (!this.responsive || currentWidth <= availableWidth) {
      return;
    }
    let hideIndex = Math.min(index - 1, this.responsiveElements.length - 1);
    while (hideIndex >= 0 && currentWidth > availableWidth) {
      const element = this.responsiveElements[hideIndex];
      if (!element.isEnabled() || !element.isVisible()) {
        hideIndex--;
        continue;
      }
      const elementWidth = element.width();
      element.hide();
      currentWidth -= elementWidth;
      hideIndex--;
    }
  }
  isElementVisible(element) {
    return element && !element?.classList.contains("k-hidden");
  }
  hideElement(element) {
    if (element) {
      this.renderer.addClass(element, "k-hidden");
    }
  }
  showElement(element) {
    if (element) {
      this.renderer.removeClass(element, "k-hidden");
    }
  }
  measureAllTextWidths() {
    if (!isDocumentAvailable()) {
      return;
    }
    const existingInfo = this.pagerInfoElement();
    const existingInput = this.pagerInputElement();
    const existingSizes = this.sizesDropDownElement();
    const measureContainer = this.renderer.createElement("div");
    positionOffScreen(this.renderer, measureContainer);
    this.renderer.appendChild(this.element.nativeElement, measureContainer);
    const infoSpan = createMeasurementSpan(this.renderer, measureContainer, "k-pager-info");
    const pageSpan = createMeasurementSpan(this.renderer, measureContainer, "k-pager-input");
    const sizesSpan = createMeasurementSpan(this.renderer, measureContainer, "k-pager-sizes");
    const infoText = `${this.currentPage} - ${this.maxItems} ${this.localization.get("of")} ${this.total} ${this.localization.get("items")}`;
    this.renderer.setProperty(infoSpan, "textContent", infoText);
    this.renderer.setProperty(pageSpan, "textContent", this.localization.get("page"));
    this.renderer.setProperty(sizesSpan, "textContent", this.localization.get("itemsPerPage"));
    if (existingInfo) copyComputedStyles(this.renderer, existingInfo, infoSpan);
    if (existingInput) copyComputedStyles(this.renderer, existingInput, pageSpan);
    if (existingSizes) copyComputedStyles(this.renderer, existingSizes, sizesSpan);
    measureContainer.getBoundingClientRect();
    this.pagerDimensions.infoTextWidth = infoSpan?.offsetWidth;
    if (this.pagerDimensions.inputWidth && this.pagerDimensions.pageTextWidth) {
      this.pagerDimensions.inputWidth = this.pagerDimensions.inputWidth - this.pagerDimensions.pageTextWidth + pageSpan.offsetWidth;
    }
    this.pagerDimensions.pageTextWidth = pageSpan?.offsetWidth;
    if (this.pagerDimensions.pageSizesWidth && this.pagerDimensions.sizesTextWidth) {
      this.pagerDimensions.pageSizesWidth = this.pagerDimensions.pageSizesWidth - this.pagerDimensions.sizesTextWidth + sizesSpan.offsetWidth;
    }
    this.pagerDimensions.sizesTextWidth = sizesSpan?.offsetWidth;
    this.renderer.removeChild(this.element.nativeElement, measureContainer);
  }
  showNumericButtonsResponsive() {
    if (!isDocumentAvailable() || !this.element?.nativeElement) {
      return;
    }
    const numericButtonsElement = this.numericButtonsElement();
    const hasNumericButtons = this.numericButtons || numericButtonsElement;
    const hasInput = this.pagerInput || this.pagerInputElement();
    if (!this.responsive || !hasNumericButtons && !hasInput) {
      this.showInput = this.type === "input";
      return;
    }
    const pagerInfoElement = this.pagerInfoElement();
    if (this.type === "input" || !this.isElementVisible(pagerInfoElement)) {
      this.showInput = true;
      return;
    }
    if (this.isElementVisible(numericButtonsElement)) {
      this.showInput = false;
      return;
    }
    const pagerWidth = this.element.nativeElement?.offsetWidth;
    const numericButtonsWrapperElement = this.element.nativeElement.querySelector(".k-pager-numbers-wrap");
    const elementsWidths = numericButtonsWrapperElement?.offsetWidth + this.pagerDimensions.pageSizesWidth + this.pagerDimensions.infoTextWidth + this.pagerDimensions.gapSizesInfo;
    const hasAvailableWidth = pagerWidth > elementsWidths - this.pagerDimensions.inputWidth + this.pagerDimensions.numericButtonsWidth;
    this.showInput = !hasAvailableWidth;
  }
  get showPageSizes() {
    if (typeof this.pageSizeValues === "boolean") {
      return this.pageSizeValues;
    }
    return this.pageSizeValues?.length > 0;
  }
  setPagerDimensions() {
    this.measureAllTextWidths();
    !this.numericButtons && (this.pagerDimensions.numericButtonsWidth = this.element.nativeElement.querySelector(".k-pager-numbers")?.offsetWidth ?? 0);
    !this.pagerInput && (this.pagerDimensions.inputWidth = this.element.nativeElement.querySelector("kendo-pager-input")?.offsetWidth ?? 0);
    !this.pageSizes && (this.pagerDimensions.pageSizesWidth = this.sizesDropDownElement()?.offsetWidth ?? 0);
    const padding = calculatePadding(this.element.nativeElement);
    this.pagerDimensions.padding = padding.padding;
    this.pagerDimensions.gapNumbersSizes = padding.gapNumbersSizes;
    this.pagerDimensions.gapSizesInfo = padding.gapSizesInfo;
    const innerStyledElement = this.pagerInputElement();
    !this.pagerDimensions.gapPageText && (this.pagerDimensions.gapPageText = calculateGap(innerStyledElement));
  }
  static ɵfac = function PagerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PagerComponent)(ɵɵdirectiveInject(PagerContextService, 12), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(PagerNavigationService, 12));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _PagerComponent,
    selectors: [["kendo-datapager"], ["kendo-pager"]],
    contentQueries: function PagerComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, PagerTemplateDirective, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.template = _t);
      }
    },
    viewQuery: function PagerComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(PagerNumericButtonsComponent, 5, ElementRef);
        ɵɵviewQuery(PagerInputComponent, 5, ElementRef);
        ɵɵviewQuery(PagerInputComponent, 5);
        ɵɵviewQuery(PagerPageSizesComponent, 5, ElementRef);
        ɵɵviewQuery(PagerPageSizesComponent, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.numericButtons = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.pagerInput = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.pagerInputComponent = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.pageSizes = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.pageSizesComponent = _t.first);
      }
    },
    hostVars: 9,
    hostBindings: function PagerComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("focusin", function PagerComponent_focusin_HostBindingHandler($event) {
          return ctx.focusHandler($event);
        });
      }
      if (rf & 2) {
        ɵɵattribute("role", ctx.widgetRole)("aria-roledescription", ctx.roleDescription)("aria-keyshortcuts", ctx.keyShortcuts)("tabindex", ctx.hostTabindex)("dir", ctx.dir);
        ɵɵclassProp("k-pager", ctx.pagerClass)("k-pager-responsive", ctx.responsiveClass);
      }
    },
    inputs: {
      externalTemplate: "externalTemplate",
      total: "total",
      skip: "skip",
      pageSize: "pageSize",
      buttonCount: "buttonCount",
      info: "info",
      type: "type",
      pageSizeValues: "pageSizeValues",
      previousNext: "previousNext",
      navigable: "navigable",
      size: "size",
      responsive: "responsive",
      adaptiveMode: "adaptiveMode"
    },
    outputs: {
      pageChange: "pageChange",
      pageSizeChange: "pageSizeChange",
      pagerInputVisibilityChange: "pagerInputVisibilityChange",
      pageTextVisibilityChange: "pageTextVisibilityChange",
      itemsTextVisibilityChange: "itemsTextVisibilityChange"
    },
    exportAs: ["kendoDataPager", "kendoPager"],
    standalone: true,
    features: [ɵɵProvidersFeature([LocalizationService, PagerContextService, PagerNavigationService, {
      provide: L10N_PREFIX,
      useValue: "kendo.pager"
    }]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    decls: 5,
    vars: 3,
    consts: () => {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_PAGER_FESM2022_PROGRESS_KENDO_ANGULAR_PAGER_MJS_0 = goog.getMsg("Go to the first page");
        i18n_0 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_PAGER_FESM2022_PROGRESS_KENDO_ANGULAR_PAGER_MJS_0;
      } else {
        i18n_0 = $localize`:kendo.pager.firstPage|The label for the first page button in the Pager:Go to the first page`;
      }
      let i18n_1;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_PAGER_FESM2022_PROGRESS_KENDO_ANGULAR_PAGER_MJS_1 = goog.getMsg("Go to the previous page");
        i18n_1 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_PAGER_FESM2022_PROGRESS_KENDO_ANGULAR_PAGER_MJS_1;
      } else {
        i18n_1 = $localize`:kendo.pager.previousPage|The label for the previous page button in the Pager:Go to the previous page`;
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_PAGER_FESM2022_PROGRESS_KENDO_ANGULAR_PAGER_MJS_2 = goog.getMsg("Go to the next page");
        i18n_2 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_PAGER_FESM2022_PROGRESS_KENDO_ANGULAR_PAGER_MJS_2;
      } else {
        i18n_2 = $localize`:kendo.pager.nextPage|The label for the next page button in the Pager:Go to the next page`;
      }
      let i18n_3;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_PAGER_FESM2022_PROGRESS_KENDO_ANGULAR_PAGER_MJS_3 = goog.getMsg("Go to the last page");
        i18n_3 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_PAGER_FESM2022_PROGRESS_KENDO_ANGULAR_PAGER_MJS_3;
      } else {
        i18n_3 = $localize`:kendo.pager.lastPage|The label for the last page button in the Pager:Go to the last page`;
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_PAGER_FESM2022_PROGRESS_KENDO_ANGULAR_PAGER_MJS_4 = goog.getMsg("Page");
        i18n_4 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_PAGER_FESM2022_PROGRESS_KENDO_ANGULAR_PAGER_MJS_4;
      } else {
        i18n_4 = $localize`:kendo.pager.page|The label before the current page number in the Pager:Page`;
      }
      let i18n_5;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_PAGER_FESM2022_PROGRESS_KENDO_ANGULAR_PAGER_MJS_5 = goog.getMsg("of");
        i18n_5 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_PAGER_FESM2022_PROGRESS_KENDO_ANGULAR_PAGER_MJS_5;
      } else {
        i18n_5 = $localize`:kendo.pager.of|The label before the total pages number in the Pager:of`;
      }
      let i18n_6;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_PAGER_FESM2022_PROGRESS_KENDO_ANGULAR_PAGER_MJS_6 = goog.getMsg("Page Number");
        i18n_6 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_PAGER_FESM2022_PROGRESS_KENDO_ANGULAR_PAGER_MJS_6;
      } else {
        i18n_6 = $localize`:kendo.pager.pageNumberInputTitle|The label for the pager input in the Pager:Page Number`;
      }
      let i18n_7;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_PAGER_FESM2022_PROGRESS_KENDO_ANGULAR_PAGER_MJS_7 = goog.getMsg("items");
        i18n_7 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_PAGER_FESM2022_PROGRESS_KENDO_ANGULAR_PAGER_MJS_7;
      } else {
        i18n_7 = $localize`:kendo.pager.items|The label after the total pages number in the Pager:items`;
      }
      let i18n_8;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_PAGER_FESM2022_PROGRESS_KENDO_ANGULAR_PAGER_MJS_8 = goog.getMsg("items per page");
        i18n_8 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_PAGER_FESM2022_PROGRESS_KENDO_ANGULAR_PAGER_MJS_8;
      } else {
        i18n_8 = $localize`:kendo.pager.itemsPerPage|The label for the page size chooser in the Pager:items per page`;
      }
      let i18n_9;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_PAGER_FESM2022_PROGRESS_KENDO_ANGULAR_PAGER_MJS_9 = goog.getMsg("Select page");
        i18n_9 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_PAGER_FESM2022_PROGRESS_KENDO_ANGULAR_PAGER_MJS_9;
      } else {
        i18n_9 = $localize`:kendo.pager.selectPage|The text of the title and aria-label attributes applied to the page chooser in the Pager:Select page`;
      }
      let i18n_10;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_PAGER_FESM2022_PROGRESS_KENDO_ANGULAR_PAGER_MJS_10 = goog.getMsg("Type a page number");
        i18n_10 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_PAGER_FESM2022_PROGRESS_KENDO_ANGULAR_PAGER_MJS_10;
      } else {
        i18n_10 = $localize`:kendo.pager.inputLabel|The text of the aria-label attribute applied to the input element for entering the page number.:Type a page number`;
      }
      let i18n_11;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_PAGER_FESM2022_PROGRESS_KENDO_ANGULAR_PAGER_MJS_11 = goog.getMsg("{$interpolation}", {
          "interpolation": "�0�"
        }, {
          original_code: {
            "interpolation": "{{ 'Page navigation, page {currentPage} of {totalPages}' }}"
          }
        });
        i18n_11 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_PAGER_FESM2022_PROGRESS_KENDO_ANGULAR_PAGER_MJS_11;
      } else {
        i18n_11 = $localize`:kendo.pager.ariaLabel|The value of the aria-label attribute of the Pager:${"�0�"}:INTERPOLATION:`;
      }
      return [["ariaLabel", i18n_11], ["kendoPagerLocalizedMessages", "", "firstPage", i18n_0, "previousPage", i18n_1, "nextPage", i18n_2, "lastPage", i18n_3, "page", i18n_4, "of", i18n_5, "pageNumberInputTitle", i18n_6, "items", i18n_7, "itemsPerPage", i18n_8, "selectPage", i18n_9, "inputLabel", i18n_10, 6, "ariaLabel"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "k-pager-numbers-wrap", 3, "ngStyle"], [3, "size"], [3, "size", "buttonCount"], [3, "ngStyle", "size", "pageSizes", "adaptiveMode"], [3, "ngStyle"], [3, "resize"]];
    },
    template: function PagerComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementContainerStart(0, 1);
        ɵɵi18nAttributes(1, 0);
        ɵɵelementContainerEnd();
        ɵɵtemplate(2, PagerComponent_Conditional_2_Template, 1, 2, "ng-container", 2)(3, PagerComponent_Conditional_3_Template, 7, 9)(4, PagerComponent_Conditional_4_Template, 1, 0, "kendo-resize-sensor");
      }
      if (rf & 2) {
        ɵɵi18nExp("Page navigation, page {currentPage} of {totalPages}");
        ɵɵi18nApply(1);
        ɵɵadvance(2);
        ɵɵconditional((ctx.template.first == null ? null : ctx.template.first.templateRef) ? 2 : 3);
        ɵɵadvance(2);
        ɵɵconditional(ctx.responsive ? 4 : -1);
      }
    },
    dependencies: [LocalizedMessagesDirective, NgTemplateOutlet, PagerPrevButtonsComponent, PagerNumericButtonsComponent, PagerInputComponent, PagerNextButtonsComponent, PagerPageSizesComponent, PagerInfoComponent, ResizeSensorComponent, NgStyle],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PagerComponent, [{
    type: Component,
    args: [{
      selector: "kendo-datapager, kendo-pager",
      exportAs: "kendoDataPager, kendoPager",
      providers: [LocalizationService, PagerContextService, PagerNavigationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.pager"
      }],
      template: `
        <ng-container kendoPagerLocalizedMessages
          i18n-ariaLabel="kendo.pager.ariaLabel|The value of the aria-label attribute of the Pager"
          ariaLabel="{{ 'Page navigation, page {currentPage} of {totalPages}' }}"
        
          i18n-firstPage="kendo.pager.firstPage|The label for the first page button in the Pager"
          firstPage="Go to the first page"
        
          i18n-previousPage="kendo.pager.previousPage|The label for the previous page button in the Pager"
          previousPage="Go to the previous page"
        
          i18n-nextPage="kendo.pager.nextPage|The label for the next page button in the Pager"
          nextPage="Go to the next page"
        
          i18n-lastPage="kendo.pager.lastPage|The label for the last page button in the Pager"
          lastPage="Go to the last page"
        
          i18n-page="kendo.pager.page|The label before the current page number in the Pager"
          page="Page"
        
          i18n-of="kendo.pager.of|The label before the total pages number in the Pager"
          of="of"
        
          i18n-pageNumberInputTitle="kendo.pager.pageNumberInputTitle|The label for the pager input in the Pager"
          pageNumberInputTitle="Page Number"
        
          i18n-items="kendo.pager.items|The label after the total pages number in the Pager"
          items="items"
        
          i18n-itemsPerPage="kendo.pager.itemsPerPage|The label for the page size chooser in the Pager"
          itemsPerPage="items per page"
        
          i18n-selectPage="kendo.pager.selectPage|The text of the title and aria-label attributes applied to the page chooser in the Pager"
          selectPage="Select page"
        
          i18n-inputLabel="kendo.pager.inputLabel|The text of the aria-label attribute applied to the input element for entering the page number."
          inputLabel="Type a page number"
          >
        </ng-container>
        @if (template.first?.templateRef) {
          <ng-container
            [ngTemplateOutlet]="template.first?.templateRef"
            [ngTemplateOutletContext]="templateContext">
          </ng-container>
        } @else {
          <div class="k-pager-numbers-wrap" [ngStyle]="{opacity: initialized ? null : '0'}">
            @if (previousNext) {
              <kendo-pager-prev-buttons [size]="size"></kendo-pager-prev-buttons>
            }
            @if (type === 'numeric' && buttonCount > 0) {
              <kendo-pager-numeric-buttons
                [size]="size"
                [buttonCount]="buttonCount">
              </kendo-pager-numeric-buttons>
            }
            @if (showInput) {
              <kendo-pager-input [size]="size"></kendo-pager-input>
            }
            @if (previousNext) {
              <kendo-pager-next-buttons [size]="size"></kendo-pager-next-buttons>
            }
          </div>
          @if (_pageSizeValues.length) {
            <kendo-pager-page-sizes
              [ngStyle]="{opacity: initialized ? null : '0'}"
              [size]="size"
              [pageSizes]="_pageSizeValues"
              [adaptiveMode]="adaptiveMode">
            </kendo-pager-page-sizes>
          }
          @if (info) {
            <kendo-pager-info [ngStyle]="{opacity: initialized ? null : '0'}">
            </kendo-pager-info>
          }
        }
        @if (responsive) {
          <kendo-resize-sensor (resize)="resizeHandler()"></kendo-resize-sensor>
        }
        `,
      standalone: true,
      imports: [LocalizedMessagesDirective, NgTemplateOutlet, PagerPrevButtonsComponent, PagerNumericButtonsComponent, PagerInputComponent, PagerNextButtonsComponent, PagerPageSizesComponent, PagerInfoComponent, ResizeSensorComponent, NgStyle]
    }]
  }], () => [{
    type: PagerContextService,
    decorators: [{
      type: Optional
    }, {
      type: SkipSelf
    }]
  }, {
    type: ElementRef
  }, {
    type: LocalizationService
  }, {
    type: Renderer2
  }, {
    type: NgZone
  }, {
    type: ChangeDetectorRef
  }, {
    type: PagerNavigationService,
    decorators: [{
      type: Optional
    }, {
      type: SkipSelf
    }]
  }], {
    template: [{
      type: ContentChildren,
      args: [PagerTemplateDirective]
    }],
    numericButtons: [{
      type: ViewChild,
      args: [PagerNumericButtonsComponent, {
        read: ElementRef
      }]
    }],
    pagerInput: [{
      type: ViewChild,
      args: [PagerInputComponent, {
        read: ElementRef
      }]
    }],
    pagerInputComponent: [{
      type: ViewChild,
      args: [PagerInputComponent]
    }],
    pageSizes: [{
      type: ViewChild,
      args: [PagerPageSizesComponent, {
        read: ElementRef
      }]
    }],
    pageSizesComponent: [{
      type: ViewChild,
      args: [PagerPageSizesComponent]
    }],
    externalTemplate: [{
      type: Input
    }],
    total: [{
      type: Input
    }],
    skip: [{
      type: Input
    }],
    pageSize: [{
      type: Input
    }],
    buttonCount: [{
      type: Input
    }],
    info: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    pageSizeValues: [{
      type: Input
    }],
    previousNext: [{
      type: Input
    }],
    navigable: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    responsive: [{
      type: Input
    }],
    adaptiveMode: [{
      type: Input
    }],
    pageChange: [{
      type: Output
    }],
    pageSizeChange: [{
      type: Output
    }],
    pagerInputVisibilityChange: [{
      type: Output
    }],
    pageTextVisibilityChange: [{
      type: Output
    }],
    itemsTextVisibilityChange: [{
      type: Output
    }],
    pagerClass: [{
      type: HostBinding,
      args: ["class.k-pager"]
    }],
    responsiveClass: [{
      type: HostBinding,
      args: ["class.k-pager-responsive"]
    }],
    widgetRole: [{
      type: HostBinding,
      args: ["attr.role"]
    }],
    roleDescription: [{
      type: HostBinding,
      args: ["attr.aria-roledescription"]
    }],
    keyShortcuts: [{
      type: HostBinding,
      args: ["attr.aria-keyshortcuts"]
    }],
    hostTabindex: [{
      type: HostBinding,
      args: ["attr.tabindex"]
    }],
    dir: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    focusHandler: [{
      type: HostListener,
      args: ["focusin", ["$event"]]
    }]
  });
})();
var PagerSpacerComponent = class _PagerSpacerComponent {
  /**
   * Gets the CSS class for the spacer.
   */
  hostClass = true;
  /**
   * Gets the CSS class for sized spacers.
   */
  get sizedClass() {
    return isPresent(this.width);
  }
  /**
   * Gets the flex-basis style for the spacer width.
   */
  get flexBasisStyle() {
    return this.width;
  }
  /**
   * Specifies the width of the `PagerSpacer` component.
   * Accepts the [string values of the CSS `flex-basis` property](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis).
   *
   * If you do not set this property, the `PagerSpacer` takes all the available space.
   */
  width;
  static ɵfac = function PagerSpacerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PagerSpacerComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _PagerSpacerComponent,
    selectors: [["kendo-pager-spacer"]],
    hostVars: 6,
    hostBindings: function PagerSpacerComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵstyleProp("flex-basis", ctx.flexBasisStyle);
        ɵɵclassProp("k-spacer", ctx.hostClass)("k-spacer-sized", ctx.sizedClass);
      }
    },
    inputs: {
      width: "width"
    },
    standalone: true,
    features: [ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function PagerSpacerComponent_Template(rf, ctx) {
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PagerSpacerComponent, [{
    type: Component,
    args: [{
      selector: "kendo-pager-spacer",
      template: ``,
      standalone: true
    }]
  }], null, {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-spacer"]
    }],
    sizedClass: [{
      type: HostBinding,
      args: ["class.k-spacer-sized"]
    }],
    flexBasisStyle: [{
      type: HostBinding,
      args: ["style.flexBasis"]
    }],
    width: [{
      type: Input
    }]
  });
})();
var KENDO_PAGER = [CustomMessagesComponent, PagerFocusableDirective, PagerInfoComponent, PagerInputComponent, PagerNextButtonsComponent, PagerNumericButtonsComponent, PagerPageSizesComponent, PagerPrevButtonsComponent, PagerTemplateDirective, PagerComponent, PagerSpacerComponent];
var PagerModule = class _PagerModule {
  static ɵfac = function PagerModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PagerModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _PagerModule,
    imports: [CustomMessagesComponent, PagerFocusableDirective, PagerInfoComponent, PagerInputComponent, PagerNextButtonsComponent, PagerNumericButtonsComponent, PagerPageSizesComponent, PagerPrevButtonsComponent, PagerTemplateDirective, PagerComponent, PagerSpacerComponent],
    exports: [CustomMessagesComponent, PagerFocusableDirective, PagerInfoComponent, PagerInputComponent, PagerNextButtonsComponent, PagerNumericButtonsComponent, PagerPageSizesComponent, PagerPrevButtonsComponent, PagerTemplateDirective, PagerComponent, PagerSpacerComponent]
  });
  static ɵinj = ɵɵdefineInjector({
    providers: [IconsService, PopupService, ResizeBatchService],
    imports: [PagerInputComponent, PagerNextButtonsComponent, PagerNumericButtonsComponent, PagerPageSizesComponent, PagerPrevButtonsComponent, PagerComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PagerModule, [{
    type: NgModule,
    args: [{
      exports: [...KENDO_PAGER],
      imports: [...KENDO_PAGER],
      providers: [IconsService, PopupService, ResizeBatchService]
    }]
  }], null, null);
})();

export {
  PageSizeChangeEvent,
  CustomMessagesComponent,
  PagerContextService,
  PagerNavigationService,
  PagerFocusableDirective,
  PagerPrevButtonsComponent,
  PagerPageSizesComponent,
  PagerTemplateDirective,
  PagerNumericButtonsComponent,
  PagerNextButtonsComponent,
  PagerInputComponent,
  PagerInfoComponent,
  PagerComponent,
  PagerSpacerComponent,
  KENDO_PAGER
};
//# sourceMappingURL=chunk-2CFMYLIQ.js.map
