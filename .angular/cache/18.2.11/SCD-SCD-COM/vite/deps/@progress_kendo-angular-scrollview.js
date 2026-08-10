import {
  chevronLeftIcon,
  chevronRightIcon
} from "./chunk-KXMGKHT2.js";
import {
  IconWrapperComponent,
  IconsService
} from "./chunk-3ZH7CTYC.js";
import {
  DraggableDirective,
  Keys,
  normalizeKeys,
  replaceMessagePlaceholder
} from "./chunk-5AZCHGRK.js";
import "./chunk-7JCLSR37.js";
import {
  ComponentMessages,
  L10N_PREFIX,
  LocalizationService
} from "./chunk-YGURSKD5.js";
import {
  A
} from "./chunk-RWPIEFVW.js";
import {
  animate,
  state,
  style,
  transition,
  trigger
} from "./chunk-OBI53R7Q.js";
import "./chunk-74QYUCA6.js";
import "./chunk-F2IMJFZ7.js";
import {
  NgClass,
  NgStyle,
  NgTemplateOutlet
} from "./chunk-YS5E6LKP.js";
import {
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
  TemplateRef,
  ViewChild,
  forwardRef,
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
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵviewQuery
} from "./chunk-R7LRY632.js";
import "./chunk-UG3XN6F5.js";
import "./chunk-K3IIKLCY.js";
import {
  Subscription
} from "./chunk-WISTXZPE.js";
import "./chunk-N6ESDQJH.js";

// node_modules/@progress/kendo-angular-scrollview/fesm2022/progress-kendo-angular-scrollview.mjs
function ScrollViewPagerComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 2);
    ɵɵlistener("click", function ScrollViewPagerComponent_For_2_Template_span_click_0_listener() {
      const ɵ$index_3_r2 = ɵɵrestoreView(_r1).$index;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.indexChange(ɵ$index_3_r2));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ɵ$index_3_r2 = ctx.$index;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r2.itemClass(ɵ$index_3_r2));
    ɵɵattribute("aria-label", ctx_r2.pagerButtonLabel(ɵ$index_3_r2 + 1));
  }
}
var _c0 = ["itemWrapper"];
var _c1 = ["prevButton"];
var _c2 = ["nextButton"];
var _c3 = (a0) => ({
  item: a0
});
var _c4 = (a0) => ({
  "height": a0
});
function ScrollViewComponent_For_6_ng_template_1_Template(rf, ctx) {
}
function ScrollViewComponent_For_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 6);
    ɵɵtemplate(1, ScrollViewComponent_For_6_ng_template_1_Template, 0, 0, "ng-template", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ɵ$index_7_r3 = ctx.$index;
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("ngStyle", ctx_r3.inlineListItemStyles(ɵ$index_7_r3));
    ɵɵattribute("aria-hidden", ɵ$index_7_r3 !== 1);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r3.itemTemplateRef)("ngTemplateOutletContext", ɵɵpureFunction1(4, _c3, item_r2));
  }
}
function ScrollViewComponent_Conditional_7_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 13, 1);
    ɵɵlistener("click", function ScrollViewComponent_Conditional_7_Conditional_1_Template_span_click_0_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r3 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r3.leftArrowClick());
    });
    ɵɵelement(2, "kendo-icon-wrapper", 14);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵattribute("aria-controls", ctx_r3.scrollviewId);
    ɵɵadvance(2);
    ɵɵproperty("name", ctx_r3.prevButtonArrowIcon)("svgIcon", ctx_r3.prevButtonArrowSVGIcon);
  }
}
function ScrollViewComponent_Conditional_7_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 15, 2);
    ɵɵlistener("click", function ScrollViewComponent_Conditional_7_Conditional_2_Template_span_click_0_listener() {
      ɵɵrestoreView(_r6);
      const ctx_r3 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r3.rightArrowClick());
    });
    ɵɵelement(2, "kendo-icon-wrapper", 14);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵattribute("aria-controls", ctx_r3.scrollviewId);
    ɵɵadvance(2);
    ɵɵproperty("name", ctx_r3.nextButtonArrowIcon)("svgIcon", ctx_r3.nextButtonArrowSVGIcon);
  }
}
function ScrollViewComponent_Conditional_7_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "kendo-scrollview-pager", 16);
    ɵɵlistener("pagerIndexChange", function ScrollViewComponent_Conditional_7_Conditional_3_Template_kendo_scrollview_pager_pagerIndexChange_0_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r3 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r3.pageChange($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵproperty("data", ctx_r3.data)("activeIndex", ctx_r3.activeIndex);
  }
}
function ScrollViewComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 7);
    ɵɵtemplate(1, ScrollViewComponent_Conditional_7_Conditional_1_Template, 3, 3, "span", 10)(2, ScrollViewComponent_Conditional_7_Conditional_2_Template, 3, 3, "span", 11)(3, ScrollViewComponent_Conditional_7_Conditional_3_Template, 1, 2, "kendo-scrollview-pager", 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("ngStyle", ɵɵpureFunction1(4, _c4, ctx_r3.height));
    ɵɵadvance();
    ɵɵconditional(ctx_r3.arrows && ctx_r3.displayLeftArrow() ? 1 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r3.arrows && ctx_r3.displayRightArrow() ? 2 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r3.pageable ? 3 : -1);
  }
}
var Dir;
(function(Dir2) {
  Dir2[Dir2["Next"] = 1] = "Next";
  Dir2[Dir2["Prev"] = -1] = "Prev";
})(Dir || (Dir = {}));
var packageMetadata = {
  name: "@progress/kendo-angular-scrollview",
  productName: "Kendo UI for Angular",
  productCode: "KENDOUIANGULAR",
  productCodes: ["KENDOUIANGULAR"],
  publishDate: 1768393308,
  version: "21.4.1",
  licensingDocsUrl: "https://www.telerik.com/kendo-angular-ui/my-license/"
};
var iterator = getIterator();
function getIterator() {
  if (typeof Symbol === "function" && Symbol.iterator) {
    return Symbol.iterator;
  }
  const keys = Object.getOwnPropertyNames(Map.prototype);
  const proto = Map.prototype;
  for (let i = 0; i < keys.length; ++i) {
    const key = keys[i];
    if (key !== "entries" && key !== "size" && proto[key] === proto.entries) {
      return key;
    }
  }
}
var EMPTY_OBJ = {};
var DataResultIterator = class {
  source;
  index;
  endless;
  pageIndex;
  rtl = false;
  constructor(source, index, endless, pageIndex, rtl) {
    this.source = source ? source : [];
    this.index = index ? index : 0;
    this.endless = endless;
    this.pageIndex = pageIndex;
    this.rtl = rtl;
  }
  get data() {
    const itemCount = this.total;
    let result;
    if (this.endless) {
      result = [this.source[(this.index - 1 + itemCount) % itemCount], this.source[this.index % itemCount], this.source[(this.index + 1 + itemCount) % itemCount]];
    } else {
      const data = [EMPTY_OBJ, ...this.source, EMPTY_OBJ];
      result = data.slice(this.index, this.index + 3);
    }
    if (this.pageIndex !== null) {
      const isForward = this.pageIndex > this.index;
      result[isForward ? 2 : 0] = this.source[this.pageIndex];
    }
    return this.rtl ? result.reverse() : result;
  }
  get total() {
    return this.source.length;
  }
  canMoveNext() {
    return this.endless || this.index < this.total - 1;
  }
  canMovePrev() {
    return this.endless || this.index > 0;
  }
  [iterator]() {
    return this.data[iterator]();
  }
};
var DataCollection = class {
  accessor;
  constructor(accessor) {
    this.accessor = accessor;
  }
  get length() {
    return this.accessor().data.length;
  }
  get total() {
    return this.accessor().total;
  }
  item(index) {
    return this.accessor().data[index];
  }
  canMoveNext() {
    return this.accessor().canMoveNext();
  }
  canMovePrev() {
    return this.accessor().canMovePrev();
  }
  [Symbol.iterator]() {
    return this.accessor()[Symbol.iterator]();
  }
};
var ScrollViewPagerComponent = class _ScrollViewPagerComponent {
  localization;
  activeIndex;
  data;
  pagerIndexChange = new EventEmitter();
  constructor(localization) {
    this.localization = localization;
  }
  itemClass(idx2) {
    return {
      "k-primary": idx2 === this.activeIndex
    };
  }
  indexChange(selectedIndex) {
    this.pagerIndexChange.emit(selectedIndex);
  }
  pagerButtonLabel(itemIndex) {
    const localizationMsg = this.localization.get("pagerButtonLabel") || "";
    return replaceMessagePlaceholder(localizationMsg, "itemIndex", itemIndex.toString());
  }
  static ɵfac = function ScrollViewPagerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ScrollViewPagerComponent)(ɵɵdirectiveInject(LocalizationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _ScrollViewPagerComponent,
    selectors: [["kendo-scrollview-pager"]],
    inputs: {
      activeIndex: "activeIndex",
      data: "data"
    },
    outputs: {
      pagerIndexChange: "pagerIndexChange"
    },
    standalone: true,
    features: [ɵɵStandaloneFeature],
    decls: 3,
    vars: 0,
    consts: [[1, "k-scrollview-nav"], ["role", "button", 1, "k-link", 3, "ngClass"], ["role", "button", 1, "k-link", 3, "click", "ngClass"]],
    template: function ScrollViewPagerComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵrepeaterCreate(1, ScrollViewPagerComponent_For_2_Template, 1, 2, "span", 1, ɵɵrepeaterTrackByIndex);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵadvance();
        ɵɵrepeater(ctx.data);
      }
    },
    dependencies: [NgClass],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollViewPagerComponent, [{
    type: Component,
    args: [{
      selector: "kendo-scrollview-pager",
      template: `
      <div class="k-scrollview-nav">
        @for (item of data; track $index; let i = $index) {
          <span [attr.aria-label]="pagerButtonLabel(i + 1)" role="button" class="k-link"
            [ngClass]="itemClass(i)"
            (click)="indexChange(i)">
          </span>
        }
      </div>
      `,
      standalone: true,
      imports: [NgClass]
    }]
  }], () => [{
    type: LocalizationService
  }], {
    activeIndex: [{
      type: Input
    }],
    data: [{
      type: Input
    }],
    pagerIndexChange: [{
      type: Output
    }]
  });
})();
var ScrollViewMessages = class _ScrollViewMessages extends ComponentMessages {
  /**
   * Sets the label for the buttons in the ScrollView pager. The default label pattern is `'Item {itemIndex}'`.
   * When the current item is 1, the default label is `'Item 1'`.
   */
  pagerButtonLabel;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵScrollViewMessages_BaseFactory;
    return function ScrollViewMessages_Factory(__ngFactoryType__) {
      return (ɵScrollViewMessages_BaseFactory || (ɵScrollViewMessages_BaseFactory = ɵɵgetInheritedFactory(_ScrollViewMessages)))(__ngFactoryType__ || _ScrollViewMessages);
    };
  })();
  static ɵdir = ɵɵdefineDirective({
    type: _ScrollViewMessages,
    selectors: [["kendo-scrollview-messages-base"]],
    inputs: {
      pagerButtonLabel: "pagerButtonLabel"
    },
    features: [ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollViewMessages, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "kendo-scrollview-messages-base"
    }]
  }], null, {
    pagerButtonLabel: [{
      type: Input
    }]
  });
})();
var LocalizedMessagesDirective = class _LocalizedMessagesDirective extends ScrollViewMessages {
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
    selectors: [["", "kendoScrollViewLocalizedMessages", ""]],
    standalone: true,
    features: [ɵɵProvidersFeature([{
      provide: ScrollViewMessages,
      useExisting: forwardRef(() => _LocalizedMessagesDirective)
    }]), ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LocalizedMessagesDirective, [{
    type: Directive,
    args: [{
      providers: [{
        provide: ScrollViewMessages,
        useExisting: forwardRef(() => LocalizedMessagesDirective)
      }],
      selector: "[kendoScrollViewLocalizedMessages]",
      standalone: true
    }]
  }], () => [{
    type: LocalizationService
  }], null);
})();
var idx = 0;
var ScrollViewComponent = class _ScrollViewComponent {
  element;
  localization;
  ngZone;
  renderer;
  /**
   * @hidden
   */
  chevronLeftIcon = chevronLeftIcon;
  /**
   * @hidden
   */
  chevronRightIcon = chevronRightIcon;
  /**
   * Provides the data source for the ScrollView ([see example](slug:datasources_scrollview)).
   * @default []
   */
  data = [];
  /**
   * Sets the current item index ([see example](slug:activeitems_scrollview)).
   * @default 0
   */
  set activeIndex(value) {
    this.index = this._activeIndex = value;
  }
  get activeIndex() {
    return this._activeIndex;
  }
  /**
   * Sets the width of the ScrollView ([see example](slug:dimensions_scrollview)).
   * By default, the width is not set and must be explicitly defined.
   */
  width;
  /**
   * Sets the height of the ScrollView ([see example](slug:dimensions_scrollview)).
   * By default, the height is not set and must be explicitly defined.
   */
  height;
  /**
   * Enables or disables endless scrolling mode, where items loop endlessly ([see example](slug:endlessscrolling_scrollview)).
   * @default false
   */
  endless = false;
  /**
   * Sets the pager overlay style to `dark`, `light`, or `none`.
   * @default 'none'
   */
  pagerOverlay = "none";
  /**
   * Enables or disables built-in animations ([see example](slug:animations_scrollview)).
   * @default true
   */
  animate = true;
  /**
   * Enables or disables the built-in pager ([see example](slug:paging_scrollview)).
   * @default false
   */
  pageable = false;
  /**
   * Enables or disables the built-in navigation arrows ([see example](slug:arrows_scrollview)).
   * @default false
   */
  arrows = false;
  /**
   * Fires after the current item is changed.
   */
  itemChanged = new EventEmitter();
  /**
   * Fires after the `activeIndex` has changed. Allows for two-way binding of the `activeIndex` property.
   */
  activeIndexChange = new EventEmitter();
  itemTemplateRef;
  itemWrapper;
  prevButton;
  nextButton;
  scrollViewClass = true;
  scrollViewRole = "application";
  scrollViewRoleDescription = "carousel";
  get scrollViewLightOverlayClass() {
    return this.pagerOverlay === "light";
  }
  get scrollViewDarkOverlayClass() {
    return this.pagerOverlay === "dark";
  }
  get hostWidth() {
    return this.width;
  }
  get hostHeight() {
    return this.height;
  }
  tabIndex = 0;
  ariaLive = "assertive";
  get dir() {
    return this.direction;
  }
  touchAction = "pan-y pinch-zoom";
  animationState = null;
  view = new DataCollection(() => new DataResultIterator(this.data, this.activeIndex, this.endless, this.pageIndex, this.isRTL));
  /**
   * @hidden
   */
  scrollviewId;
  isDataSourceEmpty = false;
  subs = new Subscription();
  _activeIndex = 0;
  index = 0;
  initialTouchCoordinate;
  pageIndex = null;
  transforms = ["translateX(-100%)", "translateX(0%)", "translateX(100%)"];
  get direction() {
    return this.localization.rtl ? "rtl" : "ltr";
  }
  constructor(element, localization, ngZone, renderer) {
    this.element = element;
    this.localization = localization;
    this.ngZone = ngZone;
    this.renderer = renderer;
    A(packageMetadata);
  }
  ngOnInit() {
    this.subs.add(this.renderer.listen(this.element.nativeElement, "keydown", (event) => this.keyDown(event)));
    if (this.arrows) {
      this.scrollviewId = `k-scrollview-wrap-${++idx}`;
    }
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
  ngOnChanges(_) {
    if (this.data && this.data.length === 0) {
      this.activeIndex = Math.max(Math.min(this.activeIndex, this.view.total - 1), 0);
    }
  }
  /**
   * Navigates the ScrollView to the previous item.
   */
  prev() {
    this.navigate(Dir.Prev);
  }
  /**
   * Navigates the ScrollView to the next item.
   */
  next() {
    this.navigate(Dir.Next);
  }
  /**
   * @hidden
   */
  transitionEndHandler(e) {
    this.animationState = null;
    if (e.toState === "left" || e.toState === "right") {
      if (this.pageIndex !== null) {
        this.activeIndex = this.pageIndex;
        this.pageIndex = null;
      }
      this.activeIndex = this.index;
      this.activeIndexChange.emit(this.activeIndex);
      this.itemChanged.emit({
        index: this.activeIndex,
        item: this.view.item(1)
      });
    }
  }
  /**
   * @hidden
   */
  handlePress(e) {
    this.initialTouchCoordinate = e.pageX;
  }
  /**
   * @hidden
   */
  handleDrag(e) {
    const deltaX = e.pageX - this.initialTouchCoordinate;
    if (!this.animationState && !this.isDragForbidden(deltaX) && this.draggedInsideBounds(deltaX)) {
      this.renderer.setStyle(this.itemWrapper.nativeElement, "transform", `translateX(${deltaX}px)`);
    }
  }
  /**
   * @hidden
   */
  handleRelease(e) {
    const deltaX = e.pageX - this.initialTouchCoordinate;
    if (this.isDragForbidden(deltaX)) {
      return;
    }
    this.ngZone.run(() => {
      if (this.draggedEnoughToNavigate(deltaX)) {
        if (this.isRTL) {
          this.changeIndex(deltaX < 0 ? Dir.Prev : Dir.Next);
        } else {
          this.changeIndex(deltaX > 0 ? Dir.Prev : Dir.Next);
        }
        if (!this.animate) {
          this.renderer.removeStyle(this.itemWrapper.nativeElement, "transform");
          this.activeIndexChange.emit(this.activeIndex);
          this.itemChanged.emit({
            index: this.activeIndex,
            item: this.view.item(1)
          });
        }
      } else {
        if (this.animate && deltaX) {
          this.animationState = "center";
        } else {
          this.renderer.removeStyle(this.itemWrapper.nativeElement, "transform");
        }
      }
    });
  }
  /**
   * @hidden
   */
  pageChange(idx2) {
    if (!this.animationState && this.activeIndex !== idx2) {
      if (this.animate) {
        this.pageIndex = idx2;
        if (this.isRTL) {
          this.animationState = this.pageIndex > this.index ? "right" : "left";
        } else {
          this.animationState = this.pageIndex > this.index ? "left" : "right";
        }
      } else {
        this.activeIndex = idx2;
      }
    }
  }
  /**
   * @hidden
   */
  inlineListItemStyles(idx2) {
    return {
      "height": this.height,
      "transform": this.transforms[idx2],
      "width": "100%",
      "position": "absolute",
      "top": "0",
      "left": "0"
    };
  }
  /**
   * @hidden
   */
  displayLeftArrow() {
    let isNotBorderItem;
    if (this.isRTL) {
      isNotBorderItem = this.activeIndex + 1 < this.view.total;
    } else {
      isNotBorderItem = this.activeIndex > 0;
    }
    return (this.endless || isNotBorderItem) && this.view.total > 0;
  }
  /**
   * @hidden
   */
  leftArrowClick() {
    if (this.isRTL) {
      this.next();
    } else {
      this.prev();
    }
  }
  /**
   * @hidden
   */
  displayRightArrow() {
    let isNotBorderItem;
    if (this.isRTL) {
      isNotBorderItem = this.activeIndex > 0;
    } else {
      isNotBorderItem = this.activeIndex + 1 < this.view.total;
    }
    return (this.endless || isNotBorderItem) && this.view.total > 0;
  }
  /**
   * @hidden
   */
  rightArrowClick() {
    if (this.isRTL) {
      this.prev();
    } else {
      this.next();
    }
  }
  draggedInsideBounds(deltaX) {
    return Math.abs(deltaX) <= this.element.nativeElement.offsetWidth;
  }
  draggedEnoughToNavigate(deltaX) {
    return Math.abs(deltaX) > this.element.nativeElement.offsetWidth / 2;
  }
  isDragForbidden(deltaX) {
    let pastEnd;
    if (this.isRTL) {
      pastEnd = deltaX < 0 && deltaX !== 0;
    } else {
      pastEnd = deltaX > 0 && deltaX !== 0;
    }
    const isEndReached = this.activeIndex === 0 && pastEnd || this.activeIndex === this.view.total - 1 && !pastEnd;
    return !this.endless && isEndReached;
  }
  keyDown(e) {
    const keyCode = normalizeKeys(e);
    if (keyCode === Keys.ArrowLeft) {
      if (this.isRTL) {
        this.next();
        return;
      }
      this.prev();
    } else if (keyCode === Keys.ArrowRight) {
      if (this.isRTL) {
        this.prev();
        return;
      }
      this.next();
    }
    if (this.arrows && (keyCode === Keys.Space || keyCode === Keys.Enter)) {
      const prevButton = this.prevButton?.nativeElement;
      const nextButton = this.nextButton?.nativeElement;
      const activeElement = document.activeElement;
      const isPrevButtonFocused = activeElement === prevButton;
      const isNextButtonFocused = activeElement === nextButton;
      if (isPrevButtonFocused) {
        if (this.isRTL) {
          this.next();
          return;
        }
        this.prev();
      } else if (isNextButtonFocused) {
        if (this.isRTL) {
          this.prev();
          return;
        }
        this.next();
      }
    }
  }
  navigate(direction) {
    if (this.isDataSourceEmpty || this.animationState) {
      return;
    }
    this.changeIndex(direction);
    if (!this.animate) {
      this.activeIndexChange.emit(this.activeIndex);
      this.itemChanged.emit({
        index: this.activeIndex,
        item: this.view.item(1)
      });
    }
  }
  changeIndex(direction) {
    if (direction === Dir.Next && this.view.canMoveNext()) {
      this.index = (this.index + 1) % this.view.total;
      if (this.animate) {
        this.animationState = this.isRTL ? "right" : "left";
      } else {
        this.activeIndex = this.index;
      }
    } else if (direction === Dir.Prev && this.view.canMovePrev()) {
      this.index = this.index === 0 ? this.view.total - 1 : this.index - 1;
      if (this.animate) {
        this.animationState = this.isRTL ? "left" : "right";
      } else {
        this.activeIndex = this.index;
      }
    }
  }
  get isRTL() {
    return this.direction === "rtl";
  }
  get prevButtonArrowIcon() {
    return this.direction === "ltr" ? "chevron-left" : "chevron-right";
  }
  get nextButtonArrowIcon() {
    return this.direction === "ltr" ? "chevron-right" : "chevron-left";
  }
  get prevButtonArrowSVGIcon() {
    return this.direction === "ltr" ? this.chevronLeftIcon : this.chevronRightIcon;
  }
  get nextButtonArrowSVGIcon() {
    return this.direction === "ltr" ? this.chevronRightIcon : this.chevronLeftIcon;
  }
  static ɵfac = function ScrollViewComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ScrollViewComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Renderer2));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _ScrollViewComponent,
    selectors: [["kendo-scrollview"]],
    contentQueries: function ScrollViewComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, TemplateRef, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.itemTemplateRef = _t.first);
      }
    },
    viewQuery: function ScrollViewComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 5);
        ɵɵviewQuery(_c1, 5);
        ɵɵviewQuery(_c2, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.itemWrapper = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.prevButton = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nextButton = _t.first);
      }
    },
    hostVars: 17,
    hostBindings: function ScrollViewComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("role", ctx.scrollViewRole)("aria-roledescription", ctx.scrollViewRoleDescription)("tabindex", ctx.tabIndex)("aria-live", ctx.ariaLive)("dir", ctx.dir);
        ɵɵstyleProp("width", ctx.hostWidth)("height", ctx.hostHeight)("touch-action", ctx.touchAction);
        ɵɵclassProp("k-scrollview", ctx.scrollViewClass)("k-scrollview-light", ctx.scrollViewLightOverlayClass)("k-scrollview-dark", ctx.scrollViewDarkOverlayClass);
      }
    },
    inputs: {
      data: "data",
      activeIndex: "activeIndex",
      width: "width",
      height: "height",
      endless: "endless",
      pagerOverlay: "pagerOverlay",
      animate: "animate",
      pageable: "pageable",
      arrows: "arrows"
    },
    outputs: {
      itemChanged: "itemChanged",
      activeIndexChange: "activeIndexChange"
    },
    exportAs: ["kendoScrollView"],
    standalone: true,
    features: [ɵɵProvidersFeature([LocalizationService, {
      provide: L10N_PREFIX,
      useValue: "kendo.scrollview"
    }]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    decls: 9,
    vars: 4,
    consts: () => {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_SCROLLVIEW_FESM2022_PROGRESS_KENDO_ANGULAR_SCROLLVIEW_MJS_0 = goog.getMsg("{$interpolation}", {
          "interpolation": "�0�"
        }, {
          original_code: {
            "interpolation": "{{ 'Item {itemIndex}' }}"
          }
        });
        i18n_0 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_SCROLLVIEW_FESM2022_PROGRESS_KENDO_ANGULAR_SCROLLVIEW_MJS_0;
      } else {
        i18n_0 = $localize`:kendo.scrollview.pagerButtonLabel|The label for the buttons inside the ScrollView Pager:${"�0�"}:INTERPOLATION:`;
      }
      return [["itemWrapper", ""], ["prevButton", ""], ["nextButton", ""], ["pagerButtonLabel", i18n_0], ["kendoScrollViewLocalizedMessages", "", 6, "pagerButtonLabel"], ["role", "list", "kendoDraggable", "", 1, "k-scrollview-wrap", "k-scrollview-animate", 3, "kendoDrag", "kendoPress", "kendoRelease", "id"], ["role", "listitem", "aria-roledescription", "slide", 1, "k-scrollview-view", 3, "ngStyle"], [1, "k-scrollview-elements", 3, "ngStyle"], ["aria-live", "polite", 1, "k-sr-only"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["role", "button", "aria-label", "previous", 1, "k-scrollview-prev"], ["role", "button", "aria-label", "next", 1, "k-scrollview-next"], [1, "k-scrollview-nav-wrap", 3, "data", "activeIndex"], ["role", "button", "aria-label", "previous", 1, "k-scrollview-prev", 3, "click"], ["size", "xxxlarge", 3, "name", "svgIcon"], ["role", "button", "aria-label", "next", 1, "k-scrollview-next", 3, "click"], [1, "k-scrollview-nav-wrap", 3, "pagerIndexChange", "data", "activeIndex"]];
    },
    template: function ScrollViewComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵelementContainerStart(0, 4);
        ɵɵi18nAttributes(1, 3);
        ɵɵelementContainerStart(2);
        ɵɵelementStart(3, "div", 5, 0);
        ɵɵlistener("@animateTo.done", function ScrollViewComponent_Template_div_animation_animateTo_done_3_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.transitionEndHandler($event));
        })("kendoDrag", function ScrollViewComponent_Template_div_kendoDrag_3_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.handleDrag($event));
        })("kendoPress", function ScrollViewComponent_Template_div_kendoPress_3_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.handlePress($event));
        })("kendoRelease", function ScrollViewComponent_Template_div_kendoRelease_3_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.handleRelease($event));
        });
        ɵɵrepeaterCreate(5, ScrollViewComponent_For_6_Template, 2, 6, "div", 6, ɵɵrepeaterTrackByIndex);
        ɵɵelementEnd();
        ɵɵtemplate(7, ScrollViewComponent_Conditional_7_Template, 4, 6, "div", 7);
        ɵɵelement(8, "div", 8);
        ɵɵelementContainerEnd()();
      }
      if (rf & 2) {
        ɵɵi18nExp("Item {itemIndex}");
        ɵɵi18nApply(1);
        ɵɵadvance(3);
        ɵɵproperty("id", ctx.scrollviewId)("@animateTo", ctx.animationState);
        ɵɵadvance(2);
        ɵɵrepeater(ctx.view);
        ɵɵadvance(2);
        ɵɵconditional(!ctx.isDataSourceEmpty && (ctx.pageable || ctx.arrows) ? 7 : -1);
      }
    },
    dependencies: [LocalizedMessagesDirective, DraggableDirective, NgStyle, NgTemplateOutlet, IconWrapperComponent, ScrollViewPagerComponent],
    encapsulation: 2,
    data: {
      animation: [trigger("animateTo", [state("center, left, right", style({
        transform: "translateX(0)"
      })), transition("* => right", [animate("300ms ease-out", style({
        transform: "translateX(100%)"
      }))]), transition("* => left", [animate("300ms ease-out", style({
        transform: "translateX(-100%)"
      }))]), transition("* => center", [animate("300ms ease-out")])])]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollViewComponent, [{
    type: Component,
    args: [{
      animations: [trigger("animateTo", [state("center, left, right", style({
        transform: "translateX(0)"
      })), transition("* => right", [animate("300ms ease-out", style({
        transform: "translateX(100%)"
      }))]), transition("* => left", [animate("300ms ease-out", style({
        transform: "translateX(-100%)"
      }))]), transition("* => center", [animate("300ms ease-out")])])],
      exportAs: "kendoScrollView",
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.scrollview"
      }],
      selector: "kendo-scrollview",
      template: `

    <ng-container kendoScrollViewLocalizedMessages
    i18n-pagerButtonLabel="kendo.scrollview.pagerButtonLabel|The label for the buttons inside the ScrollView Pager"
    pagerButtonLabel="{{ 'Item {itemIndex}' }}">
    <ng-container>

    <div class="k-scrollview-wrap k-scrollview-animate"
      #itemWrapper
      role="list"
      [id]="scrollviewId"
      [@animateTo]="animationState"
      (@animateTo.done)="transitionEndHandler($event)"
      kendoDraggable
      (kendoDrag)="handleDrag($event)"
      (kendoPress)="handlePress($event)"
      (kendoRelease)="handleRelease($event)"
      >
      @for (item of view; track $index; let i = $index) {
        <div class="k-scrollview-view"
          role="listitem"
          aria-roledescription="slide"
          [ngStyle]="inlineListItemStyles(i)"
          [attr.aria-hidden]="i !== 1"
          >
          <ng-template
            [ngTemplateOutlet]="itemTemplateRef"
            [ngTemplateOutletContext]="{ item: item }">
          </ng-template>
        </div>
      }
    </div>
    @if (!isDataSourceEmpty && (pageable || arrows)) {
      <div class='k-scrollview-elements'
        [ngStyle]="{'height': height}"
        >
        @if (arrows && displayLeftArrow()) {
          <span
            #prevButton
            class="k-scrollview-prev"
            role="button"
            [attr.aria-controls]="scrollviewId"
            aria-label="previous"
            (click)="leftArrowClick()">
            <kendo-icon-wrapper
              size="xxxlarge"
              [name]="prevButtonArrowIcon"
              [svgIcon]="prevButtonArrowSVGIcon"
              >
            </kendo-icon-wrapper>
          </span>
        }
        @if (arrows && displayRightArrow()) {
          <span
            #nextButton
            class="k-scrollview-next"
            role="button"
            [attr.aria-controls]="scrollviewId"
            aria-label="next"
            (click)="rightArrowClick()">
            <kendo-icon-wrapper
              size="xxxlarge"
              [name]="nextButtonArrowIcon"
              [svgIcon]="nextButtonArrowSVGIcon"
              >
            </kendo-icon-wrapper>
          </span>
        }
        @if (pageable) {
          <kendo-scrollview-pager
            class='k-scrollview-nav-wrap'
            (pagerIndexChange)="pageChange($event)"
            [data]="data"
            [activeIndex]="activeIndex">
          </kendo-scrollview-pager>
        }
      </div>
    }
    <div class="k-sr-only" aria-live="polite"></div>
`,
      standalone: true,
      imports: [LocalizedMessagesDirective, DraggableDirective, NgStyle, NgTemplateOutlet, IconWrapperComponent, ScrollViewPagerComponent]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: LocalizationService
  }, {
    type: NgZone
  }, {
    type: Renderer2
  }], {
    data: [{
      type: Input
    }],
    activeIndex: [{
      type: Input
    }],
    width: [{
      type: Input
    }],
    height: [{
      type: Input
    }],
    endless: [{
      type: Input
    }],
    pagerOverlay: [{
      type: Input
    }],
    animate: [{
      type: Input
    }],
    pageable: [{
      type: Input
    }],
    arrows: [{
      type: Input
    }],
    itemChanged: [{
      type: Output
    }],
    activeIndexChange: [{
      type: Output
    }],
    itemTemplateRef: [{
      type: ContentChild,
      args: [TemplateRef]
    }],
    itemWrapper: [{
      type: ViewChild,
      args: ["itemWrapper"]
    }],
    prevButton: [{
      type: ViewChild,
      args: ["prevButton"]
    }],
    nextButton: [{
      type: ViewChild,
      args: ["nextButton"]
    }],
    scrollViewClass: [{
      type: HostBinding,
      args: ["class.k-scrollview"]
    }],
    scrollViewRole: [{
      type: HostBinding,
      args: ["attr.role"]
    }],
    scrollViewRoleDescription: [{
      type: HostBinding,
      args: ["attr.aria-roledescription"]
    }],
    scrollViewLightOverlayClass: [{
      type: HostBinding,
      args: ["class.k-scrollview-light"]
    }],
    scrollViewDarkOverlayClass: [{
      type: HostBinding,
      args: ["class.k-scrollview-dark"]
    }],
    hostWidth: [{
      type: HostBinding,
      args: ["style.width"]
    }],
    hostHeight: [{
      type: HostBinding,
      args: ["style.height"]
    }],
    tabIndex: [{
      type: HostBinding,
      args: ["attr.tabindex"]
    }],
    ariaLive: [{
      type: HostBinding,
      args: ["attr.aria-live"]
    }],
    dir: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    touchAction: [{
      type: HostBinding,
      args: ["style.touch-action"]
    }]
  });
})();
var CustomMessagesComponent = class _CustomMessagesComponent extends ScrollViewMessages {
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
    selectors: [["kendo-scrollview-messages"]],
    standalone: true,
    features: [ɵɵProvidersFeature([{
      provide: ScrollViewMessages,
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
        provide: ScrollViewMessages,
        useExisting: forwardRef(() => CustomMessagesComponent)
      }],
      selector: "kendo-scrollview-messages",
      template: ``,
      standalone: true
    }]
  }], () => [{
    type: LocalizationService
  }], null);
})();
var KENDO_SCROLLVIEW = [ScrollViewComponent, CustomMessagesComponent];
var ScrollViewModule = class _ScrollViewModule {
  static ɵfac = function ScrollViewModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ScrollViewModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _ScrollViewModule,
    imports: [ScrollViewComponent, CustomMessagesComponent],
    exports: [ScrollViewComponent, CustomMessagesComponent]
  });
  static ɵinj = ɵɵdefineInjector({
    providers: [IconsService],
    imports: [ScrollViewComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollViewModule, [{
    type: NgModule,
    args: [{
      imports: [...KENDO_SCROLLVIEW],
      exports: [...KENDO_SCROLLVIEW],
      providers: [IconsService]
    }]
  }], null, null);
})();
export {
  CustomMessagesComponent,
  KENDO_SCROLLVIEW,
  ScrollViewComponent,
  ScrollViewModule,
  ScrollViewPagerComponent
};
//# sourceMappingURL=@progress_kendo-angular-scrollview.js.map
