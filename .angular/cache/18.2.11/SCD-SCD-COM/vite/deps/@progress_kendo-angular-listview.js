import {
  PageSizeChangeEvent,
  PagerComponent
} from "./chunk-2CFMYLIQ.js";
import "./chunk-F6N2E3LM.js";
import "./chunk-FIOEUXNE.js";
import "./chunk-LVRV6KK7.js";
import "./chunk-GIR42TIA.js";
import "./chunk-2WJ6WOSR.js";
import "./chunk-5OMBUL2F.js";
import "./chunk-ZIJEPVJY.js";
import "./chunk-GETIBMYG.js";
import {
  ButtonComponent
} from "./chunk-GUER2DF3.js";
import "./chunk-KXMGKHT2.js";
import {
  PopupService
} from "./chunk-NKWNDTJB.js";
import {
  IconWrapperComponent,
  IconsService
} from "./chunk-3ZH7CTYC.js";
import {
  EventsOutsideAngularDirective,
  Keys,
  ResizeBatchService,
  hasObservers,
  isChanged,
  isDocumentAvailable,
  normalizeKeys
} from "./chunk-5AZCHGRK.js";
import "./chunk-7JCLSR37.js";
import {
  L10N_PREFIX,
  LocalizationService
} from "./chunk-YGURSKD5.js";
import {
  A
} from "./chunk-RWPIEFVW.js";
import "./chunk-OBI53R7Q.js";
import {
  FormControl,
  FormGroup
} from "./chunk-CW7PMWWW.js";
import "./chunk-74QYUCA6.js";
import "./chunk-F2IMJFZ7.js";
import {
  NgClass,
  NgStyle,
  NgTemplateOutlet
} from "./chunk-YS5E6LKP.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Injectable,
  Input,
  NgModule,
  NgZone,
  Optional,
  Output,
  Renderer2,
  TemplateRef,
  ViewChild,
  ViewChildren,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵviewQuery
} from "./chunk-R7LRY632.js";
import "./chunk-UG3XN6F5.js";
import "./chunk-K3IIKLCY.js";
import {
  Subject,
  Subscription,
  switchMap,
  take
} from "./chunk-WISTXZPE.js";
import "./chunk-N6ESDQJH.js";

// node_modules/@progress/kendo-angular-listview/fesm2022/progress-kendo-angular-listview.mjs
var _c0 = ["contentContainer"];
var _c1 = (a0) => ({
  scroll: a0
});
var _c2 = () => ({
  pagerClass: "k-listview-pager k-listview-pager-top"
});
var _c3 = () => ({
  pagerClass: "k-listview-pager"
});
function ListViewComponent_Conditional_0_ng_template_0_Template(rf, ctx) {
}
function ListViewComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ListViewComponent_Conditional_0_ng_template_0_Template, 0, 0, "ng-template", 2);
  }
  if (rf & 2) {
    ɵɵnextContext();
    const pagerTemplate_r1 = ɵɵreference(12);
    ɵɵproperty("ngTemplateOutlet", pagerTemplate_r1)("ngTemplateOutletContext", ɵɵpureFunction0(2, _c2));
  }
}
function ListViewComponent_Conditional_1_ng_template_1_Template(rf, ctx) {
}
function ListViewComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 3);
    ɵɵtemplate(1, ListViewComponent_Conditional_1_ng_template_1_Template, 0, 0, "ng-template", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.headerTemplate == null ? null : ctx_r1.headerTemplate.templateRef);
  }
}
function ListViewComponent_Conditional_4_Conditional_1_ng_template_0_Template(rf, ctx) {
}
function ListViewComponent_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ListViewComponent_Conditional_4_Conditional_1_ng_template_0_Template, 0, 0, "ng-template", 2);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.editTemplate == null ? null : ctx_r1.editTemplate.templateRef)("ngTemplateOutletContext", ctx_r1.editTemplateContext(-1));
  }
}
function ListViewComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5);
    ɵɵtemplate(1, ListViewComponent_Conditional_4_Conditional_1_Template, 1, 2, null, 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("index", -1)("ngClass", ctx_r1.itemClass)("ngStyle", ctx_r1.itemStyle);
    ɵɵattribute("role", ctx_r1.listItemRole)("data-kendo-listview-item-index", -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.editTemplate ? 1 : -1);
  }
}
function ListViewComponent_For_6_ng_template_1_Template(rf, ctx) {
}
function ListViewComponent_For_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5);
    ɵɵtemplate(1, ListViewComponent_For_6_ng_template_1_Template, 0, 0, "ng-template", 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ɵ$index_17_r3 = ctx.$index;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("index", ɵ$index_17_r3)("ngClass", ctx_r1.itemClass)("ngStyle", ctx_r1.itemStyle);
    ɵɵattribute("role", ctx_r1.listItemRole)("aria-posinset", ctx_r1.itemPosInSet(ɵ$index_17_r3))("aria-setsize", ctx_r1.total)("data-kendo-listview-item-index", ɵ$index_17_r3);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.isEdited(ɵ$index_17_r3) ? ctx_r1.editTemplate == null ? null : ctx_r1.editTemplate.templateRef : ctx_r1.itemTemplate == null ? null : ctx_r1.itemTemplate.templateRef)("ngTemplateOutletContext", ctx_r1.isEdited(ɵ$index_17_r3) ? ctx_r1.editTemplateContext(ɵ$index_17_r3) : ctx_r1.templateContext(ɵ$index_17_r3));
  }
}
function ListViewComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 6)(1, "span", 9);
    ɵɵtext(2, "Loading");
    ɵɵelementEnd();
    ɵɵelement(3, "div", 10)(4, "div", 11);
    ɵɵelementEnd();
  }
}
function ListViewComponent_Conditional_8_ng_template_0_Template(rf, ctx) {
}
function ListViewComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ListViewComponent_Conditional_8_ng_template_0_Template, 0, 0, "ng-template", 7);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.loaderTemplate.templateRef);
  }
}
function ListViewComponent_Conditional_9_ng_template_1_Template(rf, ctx) {
}
function ListViewComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 8);
    ɵɵtemplate(1, ListViewComponent_Conditional_9_ng_template_1_Template, 0, 0, "ng-template", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.footerTemplate == null ? null : ctx_r1.footerTemplate.templateRef);
  }
}
function ListViewComponent_Conditional_10_ng_template_0_Template(rf, ctx) {
}
function ListViewComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ListViewComponent_Conditional_10_ng_template_0_Template, 0, 0, "ng-template", 2);
  }
  if (rf & 2) {
    ɵɵnextContext();
    const pagerTemplate_r1 = ɵɵreference(12);
    ɵɵproperty("ngTemplateOutlet", pagerTemplate_r1)("ngTemplateOutletContext", ɵɵpureFunction0(2, _c3));
  }
}
function ListViewComponent_ng_template_11_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "kendo-datapager", 13);
    ɵɵlistener("pageChange", function ListViewComponent_ng_template_11_Conditional_0_Template_kendo_datapager_pageChange_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.handlePageChange($event));
    })("pageSizeChange", function ListViewComponent_ng_template_11_Conditional_0_Template_kendo_datapager_pageSizeChange_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.pageSizeChange.emit($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const pagerClass_r5 = ɵɵnextContext().pagerClass;
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap(pagerClass_r5);
    ɵɵproperty("total", ctx_r1.total)("pageSize", ctx_r1.pageSize)("skip", ctx_r1.skip)("buttonCount", ctx_r1.pagerSettings.buttonCount)("info", ctx_r1.pagerSettings.info)("previousNext", ctx_r1.pagerSettings.previousNext)("type", ctx_r1.pagerSettings.type)("pageSizeValues", ctx_r1.pagerSettings.pageSizeValues);
  }
}
function ListViewComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ListViewComponent_ng_template_11_Conditional_0_Template, 1, 10, "kendo-datapager", 12);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵconditional(ctx_r1.pageable ? 0 : -1);
  }
}
var _c4 = ["kendoListViewEditCommand", ""];
var _c5 = ["*"];
function EditCommandDirective_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 0);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("name", ctx_r0.icon)("svgIcon", ctx_r0.svgIcon);
  }
}
function EditCommandDirective_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 1);
    ɵɵelement(1, "img", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("src", ctx_r0.imageUrl, ɵɵsanitizeUrl);
  }
}
function EditCommandDirective_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 2);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r0.iconClass);
  }
}
var _c6 = ["kendoListViewAddCommand", ""];
function AddCommandDirective_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 0);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("name", ctx_r0.icon)("svgIcon", ctx_r0.svgIcon);
  }
}
function AddCommandDirective_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 1);
    ɵɵelement(1, "img", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("src", ctx_r0.imageUrl, ɵɵsanitizeUrl);
  }
}
function AddCommandDirective_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 2);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r0.iconClass);
  }
}
var _c7 = ["kendoListViewSaveCommand", ""];
function SaveCommandDirective_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 0);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("name", ctx_r0.icon)("svgIcon", ctx_r0.svgIcon);
  }
}
function SaveCommandDirective_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 1);
    ɵɵelement(1, "img", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("src", ctx_r0.imageUrl, ɵɵsanitizeUrl);
  }
}
function SaveCommandDirective_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 2);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r0.iconClass);
  }
}
var _c8 = ["kendoListViewCancelCommand", ""];
function CancelCommandDirective_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 0);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("name", ctx_r0.icon)("svgIcon", ctx_r0.svgIcon);
  }
}
function CancelCommandDirective_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 1);
    ɵɵelement(1, "img", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("src", ctx_r0.imageUrl, ɵɵsanitizeUrl);
  }
}
function CancelCommandDirective_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 2);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r0.iconClass);
  }
}
var _c9 = ["kendoListViewRemoveCommand", ""];
function RemoveCommandDirective_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 0);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("name", ctx_r0.icon)("svgIcon", ctx_r0.svgIcon);
  }
}
function RemoveCommandDirective_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 1);
    ɵɵelement(1, "img", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("src", ctx_r0.imageUrl, ɵɵsanitizeUrl);
  }
}
function RemoveCommandDirective_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 2);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r0.iconClass);
  }
}
var packageMetadata = {
  name: "@progress/kendo-angular-listview",
  productName: "Kendo UI for Angular",
  productCode: "KENDOUIANGULAR",
  productCodes: ["KENDOUIANGULAR"],
  publishDate: 1768393336,
  version: "21.4.1",
  licensingDocsUrl: "https://www.telerik.com/kendo-angular-ui/my-license/"
};
var LISTVIEW_ITEM_SELECTOR = ".k-listview-item";
var isPresent = (item) => item !== null && item !== void 0;
var match = (element, selector) => {
  const matcher = element.matches || element.msMatchesSelector || element.webkitMatchesSelector;
  if (!isPresent(matcher)) {
    return false;
  }
  return matcher.call(element, selector);
};
var isListViewItem = (element) => {
  if (!isPresent(element)) {
    return false;
  }
  return match(element, LISTVIEW_ITEM_SELECTOR);
};
var getListItemIndex = (item) => {
  if (!isPresent(item)) {
    return null;
  }
  return Number(item.getAttribute("data-kendo-listview-item-index"));
};
var relatedTarget = (event) => {
  if (!isPresent(event.relatedTarget) || !isDocumentAvailable()) {
    return null;
  }
  return event.relatedTarget || document.activeElement;
};
var fitIntoRange = (contender, min, max) => {
  if (!isPresent(contender) || contender <= min) {
    return min;
  } else if (contender >= max) {
    return max;
  } else {
    return contender;
  }
};
var closestWithMatch = (element, selector) => {
  let parent = element;
  while (parent !== null && parent.nodeType === 1) {
    if (match(parent, selector)) {
      return parent;
    }
    parent = parent.parentElement || parent.parentNode;
  }
  return null;
};
var getClosestListItemIndex = (element) => {
  if (!isPresent(element)) {
    return null;
  }
  const closestListViewItem = closestWithMatch(element, LISTVIEW_ITEM_SELECTOR);
  return getListItemIndex(closestListViewItem);
};
var NavigationService = class _NavigationService {
  /**
   * Emits every time a change in active index/focus/blur/navigation availability occurs.
   */
  changes = new Subject();
  /**
   * Sets or gets if the navigation is enabled.
   * When no activeIndex is present, the navigation is inferred as disabled.
   * Toggling the service availability clears the current active index or activates the first one.
   */
  get isEnabled() {
    return isPresent(this.activeIndex);
  }
  set isEnabled(enabled) {
    if (enabled) {
      this.activeIndex = 0;
    } else {
      this.activeIndex = null;
    }
    this.changes.next(void 0);
  }
  /**
   * Specifies if a ListView item currently holds focus.
   */
  isFocused = false;
  /**
   * Keeps track of the index of the items that should be the current focus target (tabindex="0").
   * When set to `null`/`undefined`, the navigation is disabled and the items should not render a tabindex.
   */
  activeIndex = null;
  /**
   * Shows if the checked index should be the current available focus target (tabindex="0").
   */
  isActive(index) {
    return index === this.activeIndex;
  }
  handleKeyDown(event, totalItemsCount) {
    const code = normalizeKeys(event);
    switch (code) {
      case Keys.ArrowLeft:
      case Keys.ArrowUp:
        this.navigateToPrevious();
        break;
      case Keys.ArrowRight:
      case Keys.ArrowDown:
        this.navigateToNext(totalItemsCount);
        break;
      case Keys.Home: {
        const firstIndex = 0;
        this.navigateTo(firstIndex);
        break;
      }
      case Keys.End: {
        const lastIndex = totalItemsCount - 1;
        this.navigateTo(lastIndex);
        break;
      }
      default:
        return;
    }
    event.preventDefault();
  }
  handleFocusIn(event) {
    const target = event.target;
    if (!isListViewItem(target)) {
      const listViewItemSelector = ".k-listview-item";
      const closestListViewItem = closestWithMatch(target, listViewItemSelector);
      const isListViewItemChild = isPresent(closestListViewItem);
      if (isListViewItemChild) {
        const itemIndex = getListItemIndex(closestListViewItem);
        this.setActiveIndex(itemIndex);
      }
      return;
    }
    const targetIndex = getListItemIndex(target);
    if (this.isFocused && targetIndex === this.activeIndex) {
      return;
    }
    this.activeIndex = targetIndex;
    this.isFocused = true;
    this.changes.next(void 0);
  }
  handleFocusOut(event) {
    if (!isListViewItem(event.target) || isListViewItem(relatedTarget(event))) {
      return;
    }
    this.isFocused = false;
    this.changes.next(void 0);
  }
  /**
   * Sets the `activeIndex` and triggers changes without focusing the corresponding ListView item.
   */
  setActiveIndex(index) {
    if (!this.isEnabled) {
      return;
    }
    if (index === this.activeIndex) {
      return;
    }
    this.activeIndex = index;
    this.changes.next(void 0);
  }
  /**
   * Focuses item at the targeted index. If no index is passed, the current `activeIndex` is used.
   * The passed target index is normalized to fit the min/max available indices bounds.
   */
  focusIndex(index, totalItemsCount) {
    if (!this.isEnabled) {
      return;
    }
    const parsed = parseInt(index, 10);
    const firstIndex = 0;
    const lastIndex = totalItemsCount - 1;
    const targetIndex = isNaN(parsed) ? this.activeIndex : fitIntoRange(parsed, firstIndex, lastIndex);
    this.navigateTo(targetIndex);
  }
  navigateTo(index) {
    if (this.isFocused && this.activeIndex === index) {
      return;
    }
    this.isFocused = true;
    this.activeIndex = index;
    this.changes.next(void 0);
  }
  navigateToPrevious() {
    const previousIndex = Math.max(this.activeIndex - 1, 0);
    this.navigateTo(previousIndex);
  }
  navigateToNext(totalItemsCount) {
    const lastAvailableIndex = totalItemsCount - 1;
    const nextIndex = Math.min(this.activeIndex + 1, lastAvailableIndex);
    this.navigateTo(nextIndex);
  }
  static ɵfac = function NavigationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NavigationService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _NavigationService,
    factory: _NavigationService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavigationService, [{
    type: Injectable
  }], null, null);
})();
var ListViewNavigableItemDirective = class _ListViewNavigableItemDirective {
  hostElement;
  renderer;
  navigationService;
  /**
   * The current item index. Used to track which navigation changes apply to this item.
   */
  index;
  navigationSubscription;
  constructor(hostElement, renderer, navigationService) {
    this.hostElement = hostElement;
    this.renderer = renderer;
    this.navigationService = navigationService;
  }
  ngOnChanges() {
    this.updateNavigationState();
  }
  ngOnInit() {
    this.navigationSubscription = this.navigationService.changes.subscribe(this.updateNavigationState.bind(this));
  }
  ngOnDestroy() {
    if (isPresent(this.navigationSubscription)) {
      this.navigationSubscription.unsubscribe();
    }
  }
  updateNavigationState() {
    this.updateTabIndex();
    this.updateFocusedState();
  }
  updateFocusedState() {
    const shouldFocus = this.navigationService.isActive(this.index) && this.navigationService.isFocused;
    const focusedCssClass = "k-focus";
    if (shouldFocus) {
      this.renderer.addClass(this.hostElement.nativeElement, focusedCssClass);
      this.hostElement.nativeElement.focus();
    } else {
      this.renderer.removeClass(this.hostElement.nativeElement, focusedCssClass);
    }
  }
  updateTabIndex() {
    if (!this.navigationService.isEnabled) {
      this.renderer.removeAttribute(this.hostElement.nativeElement, "tabindex");
    } else if (this.navigationService.isActive(this.index)) {
      this.renderer.setAttribute(this.hostElement.nativeElement, "tabindex", "0");
    } else {
      this.renderer.setAttribute(this.hostElement.nativeElement, "tabindex", "-1");
    }
  }
  static ɵfac = function ListViewNavigableItemDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ListViewNavigableItemDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NavigationService));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _ListViewNavigableItemDirective,
    selectors: [["", "kendoListViewNavigableItem", ""]],
    inputs: {
      index: "index"
    },
    standalone: true,
    features: [ɵɵNgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListViewNavigableItemDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoListViewNavigableItem]",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: NavigationService
  }], {
    index: [{
      type: Input
    }]
  });
})();
var ItemTemplateDirective = class _ItemTemplateDirective {
  templateRef;
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static ɵfac = function ItemTemplateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ItemTemplateDirective)(ɵɵdirectiveInject(TemplateRef));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _ItemTemplateDirective,
    selectors: [["", "kendoListViewItemTemplate", ""]],
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ItemTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoListViewItemTemplate]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var HeaderTemplateDirective = class _HeaderTemplateDirective {
  templateRef;
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static ɵfac = function HeaderTemplateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HeaderTemplateDirective)(ɵɵdirectiveInject(TemplateRef));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _HeaderTemplateDirective,
    selectors: [["", "kendoListViewHeaderTemplate", ""]],
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeaderTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoListViewHeaderTemplate]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var FooterTemplateDirective = class _FooterTemplateDirective {
  templateRef;
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static ɵfac = function FooterTemplateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FooterTemplateDirective)(ɵɵdirectiveInject(TemplateRef));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _FooterTemplateDirective,
    selectors: [["", "kendoListViewFooterTemplate", ""]],
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FooterTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoListViewFooterTemplate]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var LoaderTemplateDirective = class _LoaderTemplateDirective {
  templateRef;
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static ɵfac = function LoaderTemplateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoaderTemplateDirective)(ɵɵdirectiveInject(TemplateRef));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _LoaderTemplateDirective,
    selectors: [["", "kendoListViewLoaderTemplate", ""]],
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoaderTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoListViewLoaderTemplate]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var EditTemplateDirective = class _EditTemplateDirective {
  templateRef;
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static ɵfac = function EditTemplateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EditTemplateDirective)(ɵɵdirectiveInject(TemplateRef, 8));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _EditTemplateDirective,
    selectors: [["", "kendoListViewEditTemplate", ""]],
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoListViewEditTemplate]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
var isEqual = (index) => (item) => item.index === index;
var isNotEqual = (index) => (item) => item.index !== index;
var isNewItem = (index) => index === -1 || index === void 0;
var EditService = class _EditService {
  ngZone;
  changes = new EventEmitter();
  changed;
  editedIndices = [];
  newItem;
  changedSource = new Subject();
  constructor(ngZone) {
    this.ngZone = ngZone;
    this.changed = this.changedSource.asObservable().pipe(switchMap(() => this.ngZone.onStable.asObservable().pipe(take(1))));
  }
  editItem(index, group = void 0) {
    this.editedIndices.push({
      index,
      group
    });
    this.onChanged();
  }
  addItem(group) {
    this.newItem = {
      group
    };
    this.onChanged();
  }
  isEditing() {
    return this.editedIndices.length > 0;
  }
  get hasNewItem() {
    return isPresent(this.newItem);
  }
  get newDataItem() {
    if (this.hasNewItem) {
      return this.newItem.group.value;
    }
    return {};
  }
  get newItemGroup() {
    if (this.hasNewItem) {
      return this.newItem.group;
    }
    return new FormGroup({});
  }
  editGroup(index) {
    return this.context(index).group;
  }
  close(index) {
    if (isNewItem(index)) {
      this.newItem = void 0;
      return;
    }
    this.editedIndices = this.editedIndices.filter(isNotEqual(index));
    this.onChanged();
  }
  context(index) {
    if (isNewItem(index)) {
      return this.newItem;
    }
    return this.findByIndex(index);
  }
  isEdited(index) {
    if (isNewItem(index) && isPresent(this.newItem)) {
      return true;
    }
    return isPresent(this.findByIndex(index));
  }
  hasEdited(index) {
    return isPresent(this.context(index));
  }
  beginEdit(itemIndex) {
    this.changes.emit({
      action: "edit",
      itemIndex
    });
  }
  beginAdd() {
    this.changes.emit({
      action: "add"
    });
  }
  endEdit(itemIndex) {
    const {
      group: formGroup
    } = this.context(itemIndex);
    this.changes.emit({
      action: "cancel",
      itemIndex,
      formGroup,
      isNew: isNewItem(itemIndex)
    });
  }
  save(itemIndex) {
    const {
      group: formGroup
    } = this.context(itemIndex);
    this.changes.emit({
      action: "save",
      itemIndex,
      formGroup,
      isNew: isNewItem(itemIndex)
    });
  }
  remove(itemIndex) {
    this.changes.emit({
      action: "remove",
      itemIndex
    });
  }
  findByIndex(index) {
    return this.editedIndices.find(isEqual(index));
  }
  onChanged() {
    this.ngZone.runOutsideAngular(() => {
      this.changedSource.next(void 0);
    });
  }
  static ɵfac = function EditService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EditService)(ɵɵinject(NgZone));
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _EditService,
    factory: _EditService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditService, [{
    type: Injectable
  }], () => [{
    type: NgZone
  }], null);
})();
var DEFAULT_PAGER_SETTINGS = {
  position: "bottom",
  buttonCount: 5,
  info: true,
  previousNext: true,
  type: "numeric",
  pageSizeValues: [5, 10, 20]
};
var createControl = (source) => (acc, key) => {
  acc[key] = new FormControl(source[key]);
  return acc;
};
var ListViewComponent = class _ListViewComponent {
  ngZone;
  element;
  renderer;
  changeDetectorRef;
  editService;
  navigationService;
  /**
   * @hidden
   */
  className = true;
  /**
   * @hidden
   */
  itemTemplate;
  /**
   * @hidden
   */
  headerTemplate;
  /**
   * @hidden
   */
  footerTemplate;
  /**
   * @hidden
   */
  loaderTemplate;
  /**
   * @hidden
   */
  contentContainer;
  /**
   * @hidden
   */
  editTemplate;
  /**
   * @hidden
   */
  listViewItems;
  /**
   * Specifies if a border should be rendered around the listview element.
   *
   * @default false
   */
  bordered = false;
  /**
   * Specifies the data collection that populates the ListView
   * ([see data binding examples]({% slug paging_listview %})).
   */
  set data(value) {
    this.lastScrollTop = this.contentContainer?.nativeElement.scrollTop ?? 0;
    this._data = value;
  }
  get data() {
    return this._data;
  }
  /**
   * Specifies whether the loading indicator of the ListView displays
   * ([see example]({% slug paging_listview %}#toc-remote-binding)).
   *
   * @default false
   */
  loading = false;
  /**
   * Specifies the CSS styles that render on the content container element of the ListView.
   * Supports the type of values that [`ngStyle`](link:site.data.urls.angular['ngstyleapi']) supports.
   */
  containerStyle;
  /**
   * Specifies the CSS styles that render on each item element wrapper of the ListView.
   * Supports the type of values that [`ngStyle`](link:site.data.urls.angular['ngstyleapi']) supports.
   */
  itemStyle;
  /**
   * Specifies the CSS class that renders on the content container element of the ListView.
   * Supports the type of values that [`ngClass`](link:site.data.urls.angular['ngclassapi']) supports.
   */
  containerClass;
  /**
   * Specifies the CSS class that renders on each item element wrapper of the ListView.
   * Supports the type of values that [`ngClass`](link:site.data.urls.angular['ngclassapi']) supports.
   */
  itemClass;
  /**
   * Specifies the content container `aria-label` attribute
   * ([see example]({% slug accessibility_listview %}#toc-accessible-names)).
   */
  containerLabel;
  /**
   * Specifies the content container `role` attribute
   * ([more details]({% slug accessibility_listview %}#toc-wai-aria-support)).
   *
   * @default 'list'
   */
  containerRole = "list";
  /**
   * Specifies the list item `role` attribute
   * ([more details]({% slug accessibility_listview %}#toc-wai-aria-support)).
   *
   * @default 'listitem'
   */
  listItemRole = "listitem";
  /**
   * Specifies whether keyboard navigation is enabled
   * ([see example]({% slug keyboard_navigation_listview %})).
   *
   * @default true
   */
  set navigable(navigable) {
    if (!navigable && isPresent(this.removeNavigationListeners)) {
      this.removeNavigationListeners();
      this.removeNavigationListeners = null;
      this.navigationService.isEnabled = false;
    } else if (navigable && !isPresent(this.removeNavigationListeners)) {
      this.addNavigationListeners();
      this.navigationService.isEnabled = true;
    }
    this._navigable = navigable;
  }
  get navigable() {
    return this._navigable;
  }
  /**
   * Specifies the page size used by the ListView pager
   * ([more details]({% slug paging_listview %})).
   */
  pageSize;
  /**
   * Defines the number of records to be skipped by the pager
   * ([more details]({% slug paging_listview %})).
   */
  set skip(skip) {
    const parsed = parseInt(skip, 10);
    const defaultSkipValue = 0;
    this._skip = !isNaN(parsed) ? parsed : defaultSkipValue;
  }
  get skip() {
    return this._skip;
  }
  /**
   * Configures whether the ListView renders a pager
   * ([more details]({% slug paging_listview %})).
   * When you provide a boolean value, it renders a pager with the default settings.
   */
  set pageable(pageable) {
    this._pageable = pageable;
    this.pagerSettings = pageable ? Object.assign({}, DEFAULT_PAGER_SETTINGS, pageable) : null;
  }
  get pageable() {
    return this._pageable;
  }
  /**
   * Specifies the height (in pixels) of the ListView component.
   * When the content height exceeds the component height, a vertical scrollbar renders.
   *
   * To set the height of the ListView, you can also use `style.height`. The `style.height`
   * option supports units such as `px`, `%`, `em`, `rem`, and others.
   */
  height;
  /**
   * Fires when you scroll to the last record on the page
   * ([see endless scrolling example]({% slug scrollmodes_listview %}#toc-endless-scrolling)).
   */
  scrollBottom = new EventEmitter();
  /**
   * Fires when you change the page or the page size of the ListView
   * ([see example]({% slug paging_listview %}#toc-remote-binding)).
   * You have to handle the event yourself and page the data.
   */
  pageChange = new EventEmitter();
  /**
   * Fires when you change the page size of the ListView. You can prevent this event (`$event.preventDefault()`).
   * When not prevented, the `pageChange` event fires subsequently.
   */
  pageSizeChange = new EventEmitter();
  /**
   * Fires when you click the **Edit** command button to edit an item
   * ([see example]({% slug editing_template_forms_listview %}#toc-editing-records)).
   */
  edit = new EventEmitter();
  /**
   * Fires when you click the **Cancel** command button to close an item
   * ([see example]({% slug editing_template_forms_listview %}#toc-cancelling-editing)).
   */
  cancel = new EventEmitter();
  /**
   * Fires when you click the **Save** command button to save changes in an item
   * ([see example]({% slug editing_template_forms_listview %}#toc-saving-records)).
   */
  save = new EventEmitter();
  /**
   * Fires when you click the **Remove** command button to remove an item
   * ([see example]({% slug editing_template_forms_listview %}#toc-removing-records)).
   */
  remove = new EventEmitter();
  /**
   * Fires when you click the **Add** command button to add a new item
   * ([see example]({% slug editing_template_forms_listview %}#toc-adding-records)).
   */
  add = new EventEmitter();
  /**
   * @hidden
   */
  pagerSettings;
  /**
   * @hidden
   *
   * Gets the data items passed to the ListView.
   * If a `ListViewDataResult` is passed, the data value is used. If an array is passed - it's directly used.
   */
  get items() {
    if (!isPresent(this.data)) {
      return [];
    }
    return Array.isArray(this.data) ? this.data : this.data.data;
  }
  /**
   * @hidden
   *
   * Gets the total number of records passed to the ListView.
   * If a `ListViewDataResult` is passed, the total value is used. If an array is passed - its length is used.
   */
  get total() {
    if (!this.pageable) {
      return;
    }
    if (!isPresent(this.data)) {
      return 0;
    }
    return Array.isArray(this.data) ? this.data.length : this.data.total;
  }
  /**
   * @hidden
   */
  get containerTabindex() {
    return this.navigable ? -1 : null;
  }
  /**
   * Gets the current active item index
   * ([see example]({% slug keyboard_navigation_listview %}#toc-controlling-the-focus)).
   * Returns `null` when keyboard navigation is disabled.
   */
  get activeIndex() {
    return this.navigationService.activeIndex;
  }
  removeNavigationListeners;
  _skip = 0;
  _navigable = true;
  _pageable;
  lastScrollTop;
  _data;
  editServiceSubscription;
  constructor(ngZone, element, renderer, changeDetectorRef, editService, navigationService) {
    this.ngZone = ngZone;
    this.element = element;
    this.renderer = renderer;
    this.changeDetectorRef = changeDetectorRef;
    this.editService = editService;
    this.navigationService = navigationService;
    A(packageMetadata);
    this.attachEditHandlers();
  }
  ngAfterViewInit() {
    this.lastScrollTop = this.contentContainer?.nativeElement.scrollTop;
  }
  ngOnChanges(changes) {
    if (isChanged("height", changes, false)) {
      this.renderer.setStyle(this.element.nativeElement, "height", `${this.height}px`);
    }
  }
  ngOnDestroy() {
    if (isPresent(this.editServiceSubscription)) {
      this.editServiceSubscription.unsubscribe();
    }
  }
  /**
   * @hidden
   */
  templateContext(index) {
    return {
      "$implicit": this.items[index],
      "isLast": index === this.items.length - 1,
      "isFirst": index === 0,
      "dataItem": this.items[index],
      "index": index
    };
  }
  /**
   * @hidden
   */
  editTemplateContext(index) {
    const isNew = index === -1;
    const group = isNew ? this.editService.newItemGroup : this.editService.editGroup(index);
    return {
      "$implicit": group,
      "formGroup": group,
      "dataItem": isNew ? this.editService.newDataItem : this.items[index],
      "isNew": isNew,
      "index": index
    };
  }
  /**
   * Focuses the item at the specified index ([see example]({% slug keyboard_navigation_listview %}#toc-controlling-the-focus)):
   * - When you specify no index, the current active index receives focus.
   * - When the passed value is below `0`, the first item receives focus.
   * - When the passed value is above the last available index, the last item receives focus.
   *
   * > The `index` parameter is based on the logical structure of the ListView and does not correspond to the data item index&mdash
   * > the index `0` corresponds to the first rendered list item. Paging is not taken into account.
   * > Also, the `navigable` property must first be set to `true` for the method to work as expected.
   */
  focus(index) {
    const totalRenderedItems = this.listViewItems.length;
    this.navigationService.focusIndex(index, totalRenderedItems);
  }
  /**
   * Creates a new item editor ([see example]({% slug editing_template_forms_listview %}#toc-adding-records)).
   *
   * @param {FormGroup} group - The [`FormGroup`](link:site.data.urls.angular['formgroupapi']) that describes
   * the edit form. When called with a data item, it builds the `FormGroup` from the data item fields.
   */
  addItem(group) {
    const isFormGroup = group instanceof FormGroup;
    if (!isFormGroup) {
      const fields = Object.keys(group).reduce(createControl(group), {});
      group = new FormGroup(fields);
    }
    this.editService.addItem(group);
  }
  /**
   * Switches the specified item to edit mode ([see example]({% slug editing_template_forms_listview %}#toc-editing-records)).
   *
   * @param index - The item index that switches to edit mode.
   * @param group - The [`FormGroup`](link:site.data.urls.angular['formgroupapi'])
   * that describes the edit form.
   */
  editItem(index, group) {
    this.editService.editItem(index, group);
    this.changeDetectorRef.markForCheck();
  }
  /**
   * Closes the editor for a given item ([see example]({% slug editing_template_forms_listview %}#toc-cancelling-editing)).
   *
   * @param {number} index - The item index that switches out of the edit mode. When you provide no index, the editor of the new item will close.
   */
  closeItem(index) {
    this.editService.close(index);
    this.changeDetectorRef.markForCheck();
  }
  /**
   * @hidden
   */
  isEdited(index) {
    return this.editService.isEdited(index);
  }
  /**
   * @hidden
   */
  handlePageChange(event) {
    this.scrollToContainerTop();
    const firstIndex = 0;
    this.navigationService.setActiveIndex(firstIndex);
    this.pageChange.emit(event);
  }
  /**
   * @hidden
   */
  handleContentScroll = () => {
    if (!hasObservers(this.scrollBottom)) {
      return;
    }
    const THRESHOLD = 2;
    const {
      scrollHeight,
      scrollTop,
      clientHeight
    } = this.contentContainer.nativeElement;
    const isScrollUp = this.lastScrollTop > scrollTop;
    this.lastScrollTop = scrollTop;
    if (isScrollUp) {
      return;
    }
    const atBottom = scrollHeight - clientHeight - scrollTop <= THRESHOLD;
    if (atBottom) {
      this.ngZone.run(() => {
        const event = {
          sender: this
        };
        this.scrollBottom.emit(event);
      });
    }
  };
  /**
   * @hidden
   */
  itemPosInSet(index) {
    if (!this.pageable) {
      return;
    }
    return this.skip + index + 1;
  }
  scrollToContainerTop() {
    const container = this.contentContainer.nativeElement;
    container.scrollTop = 0;
    container.scrollLeft = 0;
  }
  addNavigationListeners() {
    this.ngZone.runOutsideAngular(() => {
      const removeKeydownListener = this.renderer.listen(this.contentContainer.nativeElement, "keydown", (event) => this.navigationService.handleKeyDown(event, this.listViewItems.length));
      const removeFocusInListener = this.renderer.listen(this.contentContainer.nativeElement, "focusin", (event) => this.navigationService.handleFocusIn(event));
      const removeFocusOutListener = this.renderer.listen(this.contentContainer.nativeElement, "focusout", (event) => this.navigationService.handleFocusOut(event));
      this.removeNavigationListeners = () => {
        removeKeydownListener();
        removeFocusInListener();
        removeFocusOutListener();
      };
    });
  }
  attachEditHandlers() {
    if (!isPresent(this.editService)) {
      return;
    }
    this.editServiceSubscription = this.editService.changes.subscribe(this.emitCRUDEvent.bind(this));
  }
  emitCRUDEvent(args) {
    const {
      action,
      itemIndex,
      formGroup
    } = args;
    let dataItem = this.items[itemIndex];
    if (action !== "add" && formGroup) {
      dataItem = formGroup.value;
    }
    Object.assign(args, {
      dataItem,
      sender: this
    });
    this[action].emit(args);
  }
  static ɵfac = function ListViewComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ListViewComponent)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(EditService), ɵɵdirectiveInject(NavigationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _ListViewComponent,
    selectors: [["kendo-listview"]],
    contentQueries: function ListViewComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, ItemTemplateDirective, 5);
        ɵɵcontentQuery(dirIndex, HeaderTemplateDirective, 5);
        ɵɵcontentQuery(dirIndex, FooterTemplateDirective, 5);
        ɵɵcontentQuery(dirIndex, LoaderTemplateDirective, 5);
        ɵɵcontentQuery(dirIndex, EditTemplateDirective, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.itemTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.headerTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.footerTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.loaderTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.editTemplate = _t.first);
      }
    },
    viewQuery: function ListViewComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 7);
        ɵɵviewQuery(ListViewNavigableItemDirective, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentContainer = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.listViewItems = _t);
      }
    },
    hostVars: 4,
    hostBindings: function ListViewComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("k-listview", ctx.className)("k-listview-bordered", ctx.bordered);
      }
    },
    inputs: {
      bordered: "bordered",
      data: "data",
      loading: "loading",
      containerStyle: "containerStyle",
      itemStyle: "itemStyle",
      containerClass: "containerClass",
      itemClass: "itemClass",
      containerLabel: "containerLabel",
      containerRole: "containerRole",
      listItemRole: "listItemRole",
      navigable: "navigable",
      pageSize: "pageSize",
      skip: "skip",
      pageable: "pageable",
      height: "height"
    },
    outputs: {
      scrollBottom: "scrollBottom",
      pageChange: "pageChange",
      pageSizeChange: "pageSizeChange",
      edit: "edit",
      cancel: "cancel",
      save: "save",
      remove: "remove",
      add: "add"
    },
    exportAs: ["kendoListView"],
    standalone: true,
    features: [ɵɵProvidersFeature([EditService, NavigationService, LocalizationService, {
      provide: L10N_PREFIX,
      useValue: "kendo.listview"
    }]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    decls: 13,
    vars: 16,
    consts: [["contentContainer", ""], ["pagerTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "k-listview-header"], [1, "k-listview-content", 3, "ngClass", "ngStyle", "kendoEventsOutsideAngular", "scope"], ["kendoListViewNavigableItem", "", 1, "k-listview-item", 3, "index", "ngClass", "ngStyle"], [1, "k-loading-mask"], [3, "ngTemplateOutlet"], [1, "k-listview-footer"], [1, "k-loading-text"], [1, "k-loading-image"], [1, "k-loading-color"], [3, "class", "total", "pageSize", "skip", "buttonCount", "info", "previousNext", "type", "pageSizeValues"], [3, "pageChange", "pageSizeChange", "total", "pageSize", "skip", "buttonCount", "info", "previousNext", "type", "pageSizeValues"]],
    template: function ListViewComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, ListViewComponent_Conditional_0_Template, 1, 3, null, 2)(1, ListViewComponent_Conditional_1_Template, 2, 1, "div", 3);
        ɵɵelementStart(2, "div", 4, 0);
        ɵɵtemplate(4, ListViewComponent_Conditional_4_Template, 2, 6, "div", 5);
        ɵɵrepeaterCreate(5, ListViewComponent_For_6_Template, 2, 9, "div", 5, ɵɵrepeaterTrackByIdentity);
        ɵɵelementEnd();
        ɵɵtemplate(7, ListViewComponent_Conditional_7_Template, 5, 0, "div", 6)(8, ListViewComponent_Conditional_8_Template, 1, 1, null, 7)(9, ListViewComponent_Conditional_9_Template, 2, 1, "div", 8)(10, ListViewComponent_Conditional_10_Template, 1, 3, null, 2)(11, ListViewComponent_ng_template_11_Template, 1, 1, "ng-template", null, 1, ɵɵtemplateRefExtractor);
      }
      if (rf & 2) {
        ɵɵconditional((ctx.pagerSettings == null ? null : ctx.pagerSettings.position) !== "bottom" ? 0 : -1);
        ɵɵadvance();
        ɵɵconditional(ctx.headerTemplate ? 1 : -1);
        ɵɵadvance();
        ɵɵproperty("ngClass", ctx.containerClass)("ngStyle", ctx.containerStyle)("kendoEventsOutsideAngular", ɵɵpureFunction1(14, _c1, ctx.handleContentScroll))("scope", ctx);
        ɵɵattribute("tabindex", ctx.containerTabindex)("role", ctx.containerRole)("aria-label", ctx.containerLabel);
        ɵɵadvance(2);
        ɵɵconditional(ctx.editService.hasNewItem ? 4 : -1);
        ɵɵadvance();
        ɵɵrepeater(ctx.items);
        ɵɵadvance(2);
        ɵɵconditional(ctx.loading && !ctx.loaderTemplate ? 7 : -1);
        ɵɵadvance();
        ɵɵconditional(ctx.loading && ctx.loaderTemplate ? 8 : -1);
        ɵɵadvance();
        ɵɵconditional(ctx.footerTemplate ? 9 : -1);
        ɵɵadvance();
        ɵɵconditional((ctx.pagerSettings == null ? null : ctx.pagerSettings.position) !== "top" ? 10 : -1);
      }
    },
    dependencies: [NgTemplateOutlet, NgClass, NgStyle, EventsOutsideAngularDirective, ListViewNavigableItemDirective, PagerComponent],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListViewComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      exportAs: "kendoListView",
      selector: "kendo-listview",
      providers: [EditService, NavigationService, LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.listview"
      }],
      template: `
        <!-- top pager -->
        @if (pagerSettings?.position !== 'bottom') {
          <ng-template
            [ngTemplateOutlet]="pagerTemplate"
            [ngTemplateOutletContext]="{ pagerClass: 'k-listview-pager k-listview-pager-top' }"
            >
          </ng-template>
        }
        
        <!-- header -->
        @if (headerTemplate) {
          <div
            class="k-listview-header"
            >
            <ng-template
              [ngTemplateOutlet]="headerTemplate?.templateRef"
              >
            </ng-template>
          </div>
        }
        
        <!-- content -->
        <div
          #contentContainer
          [attr.tabindex]="containerTabindex"
          class="k-listview-content"
          [ngClass]="containerClass"
          [ngStyle]="containerStyle"
            [kendoEventsOutsideAngular]="{
                scroll: handleContentScroll
            }"
          [scope]="this"
          [attr.role]="containerRole"
          [attr.aria-label]="containerLabel"
          >
          <!-- new item edit template -->
          @if (editService.hasNewItem) {
            <div
              class="k-listview-item"
              [attr.role]="listItemRole"
              kendoListViewNavigableItem
              [index]="-1"
              [attr.data-kendo-listview-item-index]="-1"
              [ngClass]="itemClass"
              [ngStyle]="itemStyle"
              >
              @if (editTemplate) {
                <ng-template
                  [ngTemplateOutlet]="editTemplate?.templateRef"
                  [ngTemplateOutletContext]="editTemplateContext(-1)"
                  >
                </ng-template>
              }
            </div>
          }
        
          <!-- items -->
          @for (dataItem of items; track dataItem; let index = $index; let first = $first; let last = $last) {
            <div
              class="k-listview-item"
              [attr.role]="listItemRole"
              [attr.aria-posinset]="itemPosInSet(index)"
              [attr.aria-setsize]="total"
              kendoListViewNavigableItem
              [index]="index"
              [attr.data-kendo-listview-item-index]="index"
              [ngClass]="itemClass"
              [ngStyle]="itemStyle"
              >
              <ng-template
                [ngTemplateOutlet]="isEdited(index) ? editTemplate?.templateRef : itemTemplate?.templateRef"
                [ngTemplateOutletContext]="isEdited(index) ? editTemplateContext(index) : templateContext(index)"
                >
              </ng-template>
            </div>
          }
        </div>
        
        <!-- loading indicator -->
        @if (loading && !loaderTemplate) {
          <div
            class="k-loading-mask"
            >
            <!-- TODO: the k-loading-text is hidden with css but read by readers - review when implementing accessibility + possible localization case -->
            <span class="k-loading-text">Loading</span>
            <div class="k-loading-image"></div>
            <div class="k-loading-color"></div>
          </div>
        }
        @if (loading && loaderTemplate) {
          <ng-template
            [ngTemplateOutlet]="loaderTemplate.templateRef"
            >
          </ng-template>
        }
        
        <!-- footer -->
        @if (footerTemplate) {
          <div
            class="k-listview-footer"
            >
            <ng-template
              [ngTemplateOutlet]="footerTemplate?.templateRef"
              >
            </ng-template>
          </div>
        }
        
        <!-- bottom pager -->
        @if (pagerSettings?.position !== 'top') {
          <ng-template
            [ngTemplateOutlet]="pagerTemplate"
            [ngTemplateOutletContext]="{ pagerClass: 'k-listview-pager' }"
            >
          </ng-template>
        }
        
        <!-- pager template -->
        <ng-template #pagerTemplate let-pagerClass="pagerClass">
          @if (pageable) {
            <kendo-datapager
              [class]="pagerClass"
              [total]="total"
              [pageSize]="pageSize"
              [skip]="skip"
              [buttonCount]="pagerSettings.buttonCount"
              [info]="pagerSettings.info"
              [previousNext]="pagerSettings.previousNext"
              [type]="pagerSettings.type"
              [pageSizeValues]="pagerSettings.pageSizeValues"
              (pageChange)="handlePageChange($event)"
              (pageSizeChange)="pageSizeChange.emit($event)"
              >
            </kendo-datapager>
          }
        </ng-template>
        `,
      standalone: true,
      imports: [NgTemplateOutlet, NgClass, NgStyle, EventsOutsideAngularDirective, ListViewNavigableItemDirective, PagerComponent]
    }]
  }], () => [{
    type: NgZone
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: ChangeDetectorRef
  }, {
    type: EditService
  }, {
    type: NavigationService
  }], {
    className: [{
      type: HostBinding,
      args: ["class.k-listview"]
    }],
    itemTemplate: [{
      type: ContentChild,
      args: [ItemTemplateDirective, {
        static: false
      }]
    }],
    headerTemplate: [{
      type: ContentChild,
      args: [HeaderTemplateDirective, {
        static: false
      }]
    }],
    footerTemplate: [{
      type: ContentChild,
      args: [FooterTemplateDirective, {
        static: false
      }]
    }],
    loaderTemplate: [{
      type: ContentChild,
      args: [LoaderTemplateDirective, {
        static: false
      }]
    }],
    contentContainer: [{
      type: ViewChild,
      args: ["contentContainer", {
        static: true
      }]
    }],
    editTemplate: [{
      type: ContentChild,
      args: [EditTemplateDirective, {
        static: false
      }]
    }],
    listViewItems: [{
      type: ViewChildren,
      args: [ListViewNavigableItemDirective]
    }],
    bordered: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["class.k-listview-bordered"]
    }],
    data: [{
      type: Input
    }],
    loading: [{
      type: Input
    }],
    containerStyle: [{
      type: Input
    }],
    itemStyle: [{
      type: Input
    }],
    containerClass: [{
      type: Input
    }],
    itemClass: [{
      type: Input
    }],
    containerLabel: [{
      type: Input
    }],
    containerRole: [{
      type: Input
    }],
    listItemRole: [{
      type: Input
    }],
    navigable: [{
      type: Input
    }],
    pageSize: [{
      type: Input
    }],
    skip: [{
      type: Input
    }],
    pageable: [{
      type: Input
    }],
    height: [{
      type: Input
    }],
    scrollBottom: [{
      type: Output
    }],
    pageChange: [{
      type: Output
    }],
    pageSizeChange: [{
      type: Output
    }],
    edit: [{
      type: Output
    }],
    cancel: [{
      type: Output
    }],
    save: [{
      type: Output
    }],
    remove: [{
      type: Output
    }],
    add: [{
      type: Output
    }]
  });
})();
var DataBindingDirective = class _DataBindingDirective {
  listView;
  /**
   * Specifies the array of data that populates the ListView.
   */
  set data(data) {
    this._data = data || [];
    this.updateListViewData();
  }
  get data() {
    return this._data;
  }
  _data;
  subscriptions = new Subscription();
  constructor(listView) {
    this.listView = listView;
  }
  ngOnInit() {
    this.subscriptions.add(this.listView.pageChange.subscribe(this.handlePageChange.bind(this)));
    this.subscriptions.add(this.listView.pageSizeChange.subscribe(this.handlePageSizeChange.bind(this)));
    this.updateListViewData();
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  handlePageChange(event) {
    this.listView.skip = event.skip;
    this.listView.pageSize = event.take;
    this.updateListViewData();
  }
  handlePageSizeChange(event) {
    this.listView.pageSize = Number(event.newPageSize);
  }
  updateListViewData() {
    const from = this.listView.skip || 0;
    const to = from + (this.listView.pageSize || this.data.length);
    this.listView.data = {
      data: this.data.slice(from, to),
      total: this.data.length
    };
  }
  static ɵfac = function DataBindingDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DataBindingDirective)(ɵɵdirectiveInject(ListViewComponent));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _DataBindingDirective,
    selectors: [["", "kendoListViewBinding", ""]],
    inputs: {
      data: [0, "kendoListViewBinding", "data"]
    },
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DataBindingDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoListViewBinding]",
      standalone: true
    }]
  }], () => [{
    type: ListViewComponent
  }], {
    data: [{
      type: Input,
      args: ["kendoListViewBinding"]
    }]
  });
})();
var PageSizeChangeEvent2 = class extends PageSizeChangeEvent {
};
var EditCommandDirective = class _EditCommandDirective extends ButtonComponent {
  editService;
  elementRef;
  /**
   * @hidden
   */
  clickHandler(e) {
    e.preventDefault();
    const index = getClosestListItemIndex(this.elementRef.nativeElement);
    this.editService.beginEdit(index);
  }
  constructor(editService, element, renderer, localization, ngZone) {
    super(element, renderer, null, localization, ngZone);
    this.editService = editService;
    this.elementRef = element;
  }
  static ɵfac = function EditCommandDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EditCommandDirective)(ɵɵdirectiveInject(EditService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _EditCommandDirective,
    selectors: [["", "kendoListViewEditCommand", ""]],
    hostBindings: function EditCommandDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("click", function EditCommandDirective_click_HostBindingHandler($event) {
          return ctx.clickHandler($event);
        });
      }
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    attrs: _c4,
    ngContentSelectors: _c5,
    decls: 5,
    vars: 3,
    consts: [["innerCssClass", "k-button-icon", 3, "name", "svgIcon"], [1, "k-button-icon", "k-icon"], [1, "k-button-icon", 3, "ngClass"], [1, "k-button-text"], ["role", "presentation", 1, "k-image", 3, "src"]],
    template: function EditCommandDirective_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵtemplate(0, EditCommandDirective_Conditional_0_Template, 1, 2, "kendo-icon-wrapper", 0)(1, EditCommandDirective_Conditional_1_Template, 2, 1, "span", 1)(2, EditCommandDirective_Conditional_2_Template, 1, 1, "span", 2);
        ɵɵelementStart(3, "span", 3);
        ɵɵprojection(4);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵconditional(ctx.icon || ctx.svgIcon ? 0 : -1);
        ɵɵadvance();
        ɵɵconditional(ctx.imageUrl ? 1 : -1);
        ɵɵadvance();
        ɵɵconditional(ctx.iconClass ? 2 : -1);
      }
    },
    dependencies: [IconWrapperComponent, NgClass],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditCommandDirective, [{
    type: Component,
    args: [{
      selector: "[kendoListViewEditCommand]",
      template: `
        @if (icon || svgIcon) {
          <kendo-icon-wrapper
            innerCssClass="k-button-icon"
            [name]="icon"
          [svgIcon]="svgIcon"></kendo-icon-wrapper>
        }
        @if (imageUrl) {
          <span class="k-button-icon k-icon">
            <img [src]="imageUrl" class="k-image" role="presentation" />
          </span>
        }
        @if (iconClass) {
          <span class="k-button-icon" [ngClass]="iconClass"></span>
        }
        <span class="k-button-text"><ng-content></ng-content></span>
        `,
      standalone: true,
      imports: [IconWrapperComponent, NgClass]
    }]
  }], () => [{
    type: EditService
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: LocalizationService
  }, {
    type: NgZone
  }], {
    clickHandler: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var AddCommandDirective = class _AddCommandDirective extends ButtonComponent {
  editService;
  /**
   * @hidden
   */
  clickHandler(e) {
    e.preventDefault();
    this.editService.beginAdd();
  }
  constructor(editService, element, renderer, localization, ngZone) {
    super(element, renderer, null, localization, ngZone);
    this.editService = editService;
  }
  static ɵfac = function AddCommandDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AddCommandDirective)(ɵɵdirectiveInject(EditService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _AddCommandDirective,
    selectors: [["", "kendoListViewAddCommand", ""]],
    hostBindings: function AddCommandDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("click", function AddCommandDirective_click_HostBindingHandler($event) {
          return ctx.clickHandler($event);
        });
      }
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    attrs: _c6,
    ngContentSelectors: _c5,
    decls: 5,
    vars: 3,
    consts: [["innerCssClass", "k-button-icon", 3, "name", "svgIcon"], [1, "k-button-icon", "k-icon"], [1, "k-button-icon", 3, "ngClass"], [1, "k-button-text"], ["role", "presentation", 1, "k-image", 3, "src"]],
    template: function AddCommandDirective_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵtemplate(0, AddCommandDirective_Conditional_0_Template, 1, 2, "kendo-icon-wrapper", 0)(1, AddCommandDirective_Conditional_1_Template, 2, 1, "span", 1)(2, AddCommandDirective_Conditional_2_Template, 1, 1, "span", 2);
        ɵɵelementStart(3, "span", 3);
        ɵɵprojection(4);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵconditional(ctx.icon || ctx.svgIcon ? 0 : -1);
        ɵɵadvance();
        ɵɵconditional(ctx.imageUrl ? 1 : -1);
        ɵɵadvance();
        ɵɵconditional(ctx.iconClass ? 2 : -1);
      }
    },
    dependencies: [IconWrapperComponent, NgClass],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddCommandDirective, [{
    type: Component,
    args: [{
      selector: "[kendoListViewAddCommand]",
      template: `
        @if (icon || svgIcon) {
          <kendo-icon-wrapper
            innerCssClass="k-button-icon"
            [name]="icon"
          [svgIcon]="svgIcon"></kendo-icon-wrapper>
        }
        @if (imageUrl) {
          <span class="k-button-icon k-icon">
            <img [src]="imageUrl" class="k-image" role="presentation" />
          </span>
        }
        @if (iconClass) {
          <span class="k-button-icon" [ngClass]="iconClass"></span>
        }
        <span class="k-button-text"><ng-content></ng-content></span>
        `,
      standalone: true,
      imports: [IconWrapperComponent, NgClass]
    }]
  }], () => [{
    type: EditService
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: LocalizationService
  }, {
    type: NgZone
  }], {
    clickHandler: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var SaveCommandDirective = class _SaveCommandDirective extends ButtonComponent {
  editService;
  elementRef;
  /**
   * @hidden
   */
  clickHandler(e) {
    e.preventDefault();
    const index = getClosestListItemIndex(this.elementRef.nativeElement);
    if (this.editService.isEdited(index)) {
      this.editService.save(index);
    }
  }
  constructor(editService, element, renderer, localization, ngZone) {
    super(element, renderer, null, localization, ngZone);
    this.editService = editService;
    this.elementRef = element;
  }
  static ɵfac = function SaveCommandDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SaveCommandDirective)(ɵɵdirectiveInject(EditService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _SaveCommandDirective,
    selectors: [["", "kendoListViewSaveCommand", ""]],
    hostBindings: function SaveCommandDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("click", function SaveCommandDirective_click_HostBindingHandler($event) {
          return ctx.clickHandler($event);
        });
      }
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    attrs: _c7,
    ngContentSelectors: _c5,
    decls: 5,
    vars: 3,
    consts: [["innerCssClass", "k-button-icon", 3, "name", "svgIcon"], [1, "k-button-icon", "k-icon"], [1, "k-button-icon", 3, "ngClass"], [1, "k-button-text"], ["role", "presentation", 1, "k-image", 3, "src"]],
    template: function SaveCommandDirective_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵtemplate(0, SaveCommandDirective_Conditional_0_Template, 1, 2, "kendo-icon-wrapper", 0)(1, SaveCommandDirective_Conditional_1_Template, 2, 1, "span", 1)(2, SaveCommandDirective_Conditional_2_Template, 1, 1, "span", 2);
        ɵɵelementStart(3, "span", 3);
        ɵɵprojection(4);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵconditional(ctx.icon || ctx.svgIcon ? 0 : -1);
        ɵɵadvance();
        ɵɵconditional(ctx.imageUrl ? 1 : -1);
        ɵɵadvance();
        ɵɵconditional(ctx.iconClass ? 2 : -1);
      }
    },
    dependencies: [IconWrapperComponent, NgClass],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SaveCommandDirective, [{
    type: Component,
    args: [{
      selector: "[kendoListViewSaveCommand]",
      template: `
        @if (icon || svgIcon) {
          <kendo-icon-wrapper
            innerCssClass="k-button-icon"
            [name]="icon"
          [svgIcon]="svgIcon"></kendo-icon-wrapper>
        }
        @if (imageUrl) {
          <span class="k-button-icon k-icon">
            <img [src]="imageUrl" class="k-image" role="presentation" />
          </span>
        }
        @if (iconClass) {
          <span class="k-button-icon" [ngClass]="iconClass"></span>
        }
        <span class="k-button-text"><ng-content></ng-content></span>
        `,
      standalone: true,
      imports: [IconWrapperComponent, NgClass]
    }]
  }], () => [{
    type: EditService
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: LocalizationService
  }, {
    type: NgZone
  }], {
    clickHandler: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var CancelCommandDirective = class _CancelCommandDirective extends ButtonComponent {
  editService;
  elementRef;
  /**
   * @hidden
   */
  clickHandler(e) {
    e.preventDefault();
    const index = getClosestListItemIndex(this.elementRef.nativeElement);
    if (this.editService.isEdited(index)) {
      this.editService.endEdit(index);
    }
  }
  constructor(editService, element, renderer, localization, ngZone) {
    super(element, renderer, null, localization, ngZone);
    this.editService = editService;
    this.elementRef = element;
  }
  static ɵfac = function CancelCommandDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CancelCommandDirective)(ɵɵdirectiveInject(EditService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _CancelCommandDirective,
    selectors: [["", "kendoListViewCancelCommand", ""]],
    hostBindings: function CancelCommandDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("click", function CancelCommandDirective_click_HostBindingHandler($event) {
          return ctx.clickHandler($event);
        });
      }
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    attrs: _c8,
    ngContentSelectors: _c5,
    decls: 5,
    vars: 3,
    consts: [["innerCssClass", "k-button-icon", 3, "name", "svgIcon"], [1, "k-button-icon", "k-icon"], [1, "k-button-icon", 3, "ngClass"], [1, "k-button-text"], ["role", "presentation", 1, "k-image", 3, "src"]],
    template: function CancelCommandDirective_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵtemplate(0, CancelCommandDirective_Conditional_0_Template, 1, 2, "kendo-icon-wrapper", 0)(1, CancelCommandDirective_Conditional_1_Template, 2, 1, "span", 1)(2, CancelCommandDirective_Conditional_2_Template, 1, 1, "span", 2);
        ɵɵelementStart(3, "span", 3);
        ɵɵprojection(4);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵconditional(ctx.icon || ctx.svgIcon ? 0 : -1);
        ɵɵadvance();
        ɵɵconditional(ctx.imageUrl ? 1 : -1);
        ɵɵadvance();
        ɵɵconditional(ctx.iconClass ? 2 : -1);
      }
    },
    dependencies: [IconWrapperComponent, NgClass],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CancelCommandDirective, [{
    type: Component,
    args: [{
      selector: "[kendoListViewCancelCommand]",
      template: `
        @if (icon || svgIcon) {
          <kendo-icon-wrapper
            innerCssClass="k-button-icon"
            [name]="icon"
          [svgIcon]="svgIcon"></kendo-icon-wrapper>
        }
        @if (imageUrl) {
          <span class="k-button-icon k-icon">
            <img [src]="imageUrl" class="k-image" role="presentation" />
          </span>
        }
        @if (iconClass) {
          <span class="k-button-icon" [ngClass]="iconClass"></span>
        }
        <span class="k-button-text"><ng-content></ng-content></span>
        `,
      standalone: true,
      imports: [IconWrapperComponent, NgClass]
    }]
  }], () => [{
    type: EditService
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: LocalizationService
  }, {
    type: NgZone
  }], {
    clickHandler: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var RemoveCommandDirective = class _RemoveCommandDirective extends ButtonComponent {
  editService;
  elementRef;
  /**
   * @hidden
   */
  clickHandler(e) {
    e.preventDefault();
    const index = getClosestListItemIndex(this.elementRef.nativeElement);
    this.editService.remove(index);
  }
  constructor(editService, element, renderer, localization, ngZone) {
    super(element, renderer, null, localization, ngZone);
    this.editService = editService;
    this.elementRef = element;
  }
  static ɵfac = function RemoveCommandDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RemoveCommandDirective)(ɵɵdirectiveInject(EditService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _RemoveCommandDirective,
    selectors: [["", "kendoListViewRemoveCommand", ""]],
    hostBindings: function RemoveCommandDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("click", function RemoveCommandDirective_click_HostBindingHandler($event) {
          return ctx.clickHandler($event);
        });
      }
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    attrs: _c9,
    ngContentSelectors: _c5,
    decls: 5,
    vars: 3,
    consts: [["innerCssClass", "k-button-icon", 3, "name", "svgIcon"], [1, "k-button-icon", "k-icon"], [1, "k-button-icon", 3, "ngClass"], [1, "k-button-text"], ["role", "presentation", 1, "k-image", 3, "src"]],
    template: function RemoveCommandDirective_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵtemplate(0, RemoveCommandDirective_Conditional_0_Template, 1, 2, "kendo-icon-wrapper", 0)(1, RemoveCommandDirective_Conditional_1_Template, 2, 1, "span", 1)(2, RemoveCommandDirective_Conditional_2_Template, 1, 1, "span", 2);
        ɵɵelementStart(3, "span", 3);
        ɵɵprojection(4);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵconditional(ctx.icon || ctx.svgIcon ? 0 : -1);
        ɵɵadvance();
        ɵɵconditional(ctx.imageUrl ? 1 : -1);
        ɵɵadvance();
        ɵɵconditional(ctx.iconClass ? 2 : -1);
      }
    },
    dependencies: [IconWrapperComponent, NgClass],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RemoveCommandDirective, [{
    type: Component,
    args: [{
      selector: "[kendoListViewRemoveCommand]",
      template: `
        @if (icon || svgIcon) {
          <kendo-icon-wrapper
            innerCssClass="k-button-icon"
            [name]="icon"
          [svgIcon]="svgIcon"></kendo-icon-wrapper>
        }
        @if (imageUrl) {
          <span class="k-button-icon k-icon">
            <img [src]="imageUrl" class="k-image" role="presentation" />
          </span>
        }
        @if (iconClass) {
          <span class="k-button-icon" [ngClass]="iconClass"></span>
        }
        <span class="k-button-text"><ng-content></ng-content></span>
        `,
      standalone: true,
      imports: [IconWrapperComponent, NgClass]
    }]
  }], () => [{
    type: EditService
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: LocalizationService
  }, {
    type: NgZone
  }], {
    clickHandler: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var KENDO_LISTVIEW = [ListViewComponent, ItemTemplateDirective, HeaderTemplateDirective, FooterTemplateDirective, LoaderTemplateDirective, DataBindingDirective, EditTemplateDirective, EditCommandDirective, CancelCommandDirective, SaveCommandDirective, RemoveCommandDirective, AddCommandDirective];
var ListViewModule = class _ListViewModule {
  static ɵfac = function ListViewModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ListViewModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _ListViewModule,
    imports: [ListViewComponent, ItemTemplateDirective, HeaderTemplateDirective, FooterTemplateDirective, LoaderTemplateDirective, DataBindingDirective, EditTemplateDirective, EditCommandDirective, CancelCommandDirective, SaveCommandDirective, RemoveCommandDirective, AddCommandDirective],
    exports: [ListViewComponent, ItemTemplateDirective, HeaderTemplateDirective, FooterTemplateDirective, LoaderTemplateDirective, DataBindingDirective, EditTemplateDirective, EditCommandDirective, CancelCommandDirective, SaveCommandDirective, RemoveCommandDirective, AddCommandDirective]
  });
  static ɵinj = ɵɵdefineInjector({
    providers: [IconsService, PopupService, ResizeBatchService],
    imports: [ListViewComponent, EditCommandDirective, CancelCommandDirective, SaveCommandDirective, RemoveCommandDirective, AddCommandDirective]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListViewModule, [{
    type: NgModule,
    args: [{
      imports: [...KENDO_LISTVIEW],
      exports: [...KENDO_LISTVIEW],
      providers: [IconsService, PopupService, ResizeBatchService]
    }]
  }], null, null);
})();
export {
  AddCommandDirective,
  CancelCommandDirective,
  DataBindingDirective,
  EditCommandDirective,
  EditTemplateDirective,
  FooterTemplateDirective,
  HeaderTemplateDirective,
  ItemTemplateDirective,
  KENDO_LISTVIEW,
  ListViewComponent,
  ListViewModule,
  LoaderTemplateDirective,
  PageSizeChangeEvent2 as PageSizeChangeEvent,
  RemoveCommandDirective,
  SaveCommandDirective
};
//# sourceMappingURL=@progress_kendo-angular-listview.js.map
