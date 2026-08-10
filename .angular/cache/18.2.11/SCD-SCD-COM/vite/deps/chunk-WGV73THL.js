import {
  ProgressBarComponent
} from "./chunk-FZUVKZDE.js";
import {
  DatePipe
} from "./chunk-5OMBUL2F.js";
import {
  ButtonComponent
} from "./chunk-GUER2DF3.js";
import {
  caretAltDownIcon,
  caretAltLeftIcon,
  caretAltRightIcon,
  caretAltUpIcon,
  checkCircleIcon,
  chevronDownIcon,
  chevronRightIcon,
  chevronUpIcon,
  exclamationCircleIcon,
  xIcon
} from "./chunk-KXMGKHT2.js";
import {
  IconWrapperComponent
} from "./chunk-3ZH7CTYC.js";
import {
  Draggable,
  DraggableDirective,
  Keys,
  PreventableEvent,
  ResizeSensorComponent,
  WatermarkOverlayComponent,
  anyChanged,
  focusableSelector,
  getLicenseMessage,
  guid,
  hasObservers,
  isChanged,
  isDocumentAvailable,
  isObjectPresent,
  isPresent,
  normalizeKeys,
  parseAttributes,
  removeHTMLAttributes,
  setHTMLAttributes,
  shouldShowValidationUI
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
  AUTO_STYLE,
  AnimationBuilder,
  animate,
  state,
  style,
  transition,
  trigger
} from "./chunk-OBI53R7Q.js";
import {
  NgClass,
  NgStyle,
  NgTemplateOutlet
} from "./chunk-YS5E6LKP.js";
import {
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  Host,
  HostBinding,
  HostListener,
  Inject,
  Injectable,
  Input,
  NgModule,
  NgZone,
  Optional,
  Output,
  QueryList,
  Renderer2,
  SkipSelf,
  TemplateRef,
  ViewChild,
  ViewChildren,
  ViewEncapsulation$1,
  forwardRef,
  isDevMode,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassMapInterpolate1,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefer,
  ɵɵdeferPrefetchOnIdle,
  ɵɵdeferWhen,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵhostProperty,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵpureFunction4,
  ɵɵpureFunction6,
  ɵɵpureFunctionV,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-R7LRY632.js";
import {
  BehaviorSubject,
  Subject,
  Subscription,
  delay,
  filter,
  map,
  of,
  switchMap,
  take,
  takeUntil,
  tap
} from "./chunk-WISTXZPE.js";
import {
  __spreadValues
} from "./chunk-N6ESDQJH.js";

// node_modules/@progress/kendo-angular-layout/fesm2022/progress-kendo-angular-layout.mjs
var _c0 = ["header"];
var _c1 = ["contentWrapper"];
var _c2 = [[["kendo-panelbar-item"]]];
var _c3 = ["kendo-panelbar-item"];
var PanelBarItemComponent_Conditional_7_Defer_1_DepsFn = () => [PanelBarItemComponent, NgTemplateOutlet];
var _c4 = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) => ({
  title: a0,
  id: a1,
  icon: a2,
  iconClass: a3,
  svgIcon: a4,
  imageUrl: a5,
  selected: a6,
  expanded: a7,
  disabled: a8,
  focused: a9,
  content: a10
});
var _c5 = (a0) => ({
  item: a0
});
var _c6 = (a0, a1, a2, a3, a4, a5) => ({
  title: a0,
  id: a1,
  icon: a2,
  imageUrl: a3,
  disabled: a4,
  content: a5
});
var _c7 = (a0) => ({
  $implicit: a0
});
function PanelBarItemComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 3);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("name", ctx_r1.iconClasses)("customFontClass", ctx_r1.customIconClasses)("svgIcon", ctx_r1.svgIcon);
  }
}
function PanelBarItemComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "img", 4);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("src", ctx_r1.imageUrl, ɵɵsanitizeUrl);
  }
}
function PanelBarItemComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 5);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.title);
  }
}
function PanelBarItemComponent_Conditional_5_ng_template_0_Template(rf, ctx) {
}
function PanelBarItemComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, PanelBarItemComponent_Conditional_5_ng_template_0_Template, 0, 0, "ng-template", 6);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.titleTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(14, _c5, ɵɵpureFunctionV(2, _c4, [ctx_r1.title, ctx_r1.id, ctx_r1.icon, ctx_r1.iconClass, ctx_r1.svgIcon, ctx_r1.imageUrl, ctx_r1.selected, ctx_r1.expanded, ctx_r1.disabled, ctx_r1.focused, ctx_r1.content])));
  }
}
function PanelBarItemComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 7);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("name", ctx_r1.expanded ? "chevron-up" : "chevron-down")("svgIcon", ctx_r1.expanderSVGIcon)("innerCssClass", ctx_r1.dirInnerCssClasses);
  }
}
function PanelBarItemComponent_Conditional_7_Defer_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 10);
    ɵɵprojection(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵstyleProp("overflow", ctx_r1.contentOverflow)("height", ctx_r1.contentHeight);
  }
}
function PanelBarItemComponent_Conditional_7_Defer_0_Conditional_3_ng_template_1_Template(rf, ctx) {
}
function PanelBarItemComponent_Conditional_7_Defer_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 11);
    ɵɵtemplate(1, PanelBarItemComponent_Conditional_7_Defer_0_Conditional_3_ng_template_1_Template, 0, 0, "ng-template", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵstyleProp("overflow", ctx_r1.contentOverflow)("height", ctx_r1.contentHeight);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.contentTemplate.first.templateRef)("ngTemplateOutletContext", ɵɵpureFunction1(13, _c7, ɵɵpureFunction6(6, _c6, ctx_r1.title, ctx_r1.id, ctx_r1.icon, ctx_r1.imageUrl, ctx_r1.disabled, ctx_r1.content)));
  }
}
function PanelBarItemComponent_Conditional_7_Defer_0_Conditional_4_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-panelbar-item", 12);
  }
  if (rf & 2) {
    const item_r3 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵproperty("title", item_r3.title)("id", item_r3.id)("icon", item_r3.icon)("iconClass", item_r3.iconClass)("svgIcon", item_r3.svgIcon)("imageUrl", item_r3.imageUrl)("selected", !!item_r3.selected)("expanded", !!item_r3.expanded)("disabled", !!item_r3.disabled)("template", ctx_r1.template)("items", item_r3.children)("content", item_r3.content);
  }
}
function PanelBarItemComponent_Conditional_7_Defer_0_Conditional_4_For_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, PanelBarItemComponent_Conditional_7_Defer_0_Conditional_4_For_2_Conditional_0_Template, 1, 12, "kendo-panelbar-item", 12);
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    ɵɵconditional(!item_r3.hidden ? 0 : -1);
  }
}
function PanelBarItemComponent_Conditional_7_Defer_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 10);
    ɵɵrepeaterCreate(1, PanelBarItemComponent_Conditional_7_Defer_0_Conditional_4_For_2_Template, 1, 1, null, null, ɵɵrepeaterTrackByIdentity);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵstyleProp("overflow", ctx_r1.contentOverflow)("height", ctx_r1.contentHeight);
    ɵɵadvance();
    ɵɵrepeater(ctx_r1.items);
  }
}
function PanelBarItemComponent_Conditional_7_Defer_0_Conditional_5_ng_template_1_Template(rf, ctx) {
}
function PanelBarItemComponent_Conditional_7_Defer_0_Conditional_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵtextInterpolate1(" ", ctx_r1.content, " ");
  }
}
function PanelBarItemComponent_Conditional_7_Defer_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 11);
    ɵɵtemplate(1, PanelBarItemComponent_Conditional_7_Defer_0_Conditional_5_ng_template_1_Template, 0, 0, "ng-template", 6)(2, PanelBarItemComponent_Conditional_7_Defer_0_Conditional_5_Conditional_2_Template, 1, 1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵstyleProp("overflow", ctx_r1.contentOverflow)("height", ctx_r1.contentHeight);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.template)("ngTemplateOutletContext", ɵɵpureFunction1(14, _c7, ɵɵpureFunction6(7, _c6, ctx_r1.title, ctx_r1.id, ctx_r1.icon, ctx_r1.imageUrl, ctx_r1.disabled, ctx_r1.content)));
    ɵɵadvance();
    ɵɵconditional(!ctx_r1.template ? 2 : -1);
  }
}
function PanelBarItemComponent_Conditional_7_Defer_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", null, 1);
    ɵɵtemplate(2, PanelBarItemComponent_Conditional_7_Defer_0_Conditional_2_Template, 2, 4, "div", 8)(3, PanelBarItemComponent_Conditional_7_Defer_0_Conditional_3_Template, 2, 15, "div", 9)(4, PanelBarItemComponent_Conditional_7_Defer_0_Conditional_4_Template, 3, 4, "div", 8)(5, PanelBarItemComponent_Conditional_7_Defer_0_Conditional_5_Template, 3, 16, "div", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("@toggle", ctx_r1.state);
    ɵɵattribute("role", "group")("aria-hidden", !ctx_r1.disabled && !ctx_r1.expanded);
    ɵɵadvance(2);
    ɵɵconditional(ctx_r1.hasChildItems && !(ctx_r1.items == null ? null : ctx_r1.items.length) ? 2 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.hasContent && !ctx_r1.content ? 3 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.hasItems ? 4 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.content ? 5 : -1);
  }
}
function PanelBarItemComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, PanelBarItemComponent_Conditional_7_Defer_0_Template, 6, 7);
    ɵɵdefer(1, 0, PanelBarItemComponent_Conditional_7_Defer_1_DepsFn);
    ɵɵdeferPrefetchOnIdle();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵdeferWhen(!ctx_r1.disabled && ctx_r1.expanded && ctx_r1.keepContent !== true || ctx_r1.keepContent === true);
  }
}
function PanelBarComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0);
  }
}
function PanelBarComponent_Conditional_1_For_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-panelbar-item", 1);
  }
  if (rf & 2) {
    const item_r1 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("title", item_r1.title)("id", item_r1.id)("icon", item_r1.icon)("iconClass", item_r1.iconClass)("svgIcon", item_r1.svgIcon)("imageUrl", item_r1.imageUrl)("selected", !!item_r1.selected)("expanded", !!item_r1.expanded)("disabled", !!item_r1.disabled)("template", ctx_r1.templateRef)("items", item_r1.children)("content", item_r1.content);
  }
}
function PanelBarComponent_Conditional_1_For_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, PanelBarComponent_Conditional_1_For_1_Conditional_0_Template, 1, 12, "kendo-panelbar-item", 1);
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    ɵɵconditional(!item_r1.hidden ? 0 : -1);
  }
}
function PanelBarComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵrepeaterCreate(0, PanelBarComponent_Conditional_1_For_1_Template, 1, 1, null, null, ɵɵrepeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵrepeater(ctx_r1.items);
  }
}
function PanelBarComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 0);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("licenseMessage", ctx_r1.licenseMessage);
  }
}
var _c8 = ["*"];
function SplitterPaneComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0);
  }
}
function SplitterPaneComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 0);
  }
}
function SplitterBarComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 3);
    ɵɵlistener("click", function SplitterBarComponent_Conditional_0_Template_div_click_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.togglePrevious());
    });
    ɵɵelement(1, "kendo-icon-wrapper", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("name", ctx_r1.previousArrowClass())("svgIcon", ctx_r1.previousSVGArrowClass());
  }
}
function SplitterBarComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 5);
    ɵɵlistener("click", function SplitterBarComponent_Conditional_2_Template_div_click_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.toggleNext());
    });
    ɵɵelement(1, "kendo-icon-wrapper", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("name", ctx_r1.nextArrowClass())("svgIcon", ctx_r1.nextSVGArrowClass());
  }
}
var _c9 = [[["kendo-splitter-pane"]]];
var _c10 = ["kendo-splitter-pane"];
var _c11 = (a0, a1) => ({
  width: a0,
  height: a1
});
function SplitterComponent_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-splitter-bar", 0);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    const pane_r2 = ctx_r0.$implicit;
    const ɵ$index_2_r3 = ctx_r0.$index;
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("index", ɵ$index_2_r3)("orientation", ctx_r3.orientation)("ngClass", pane_r2.splitterBarClass || ctx_r3.splitterBarClass)("ngStyle", ɵɵpureFunction2(4, _c11, ctx_r3.orientation === "horizontal" ? ctx_r3.splitbarWidth + "px" : void 0, ctx_r3.orientation === "vertical" ? ctx_r3.splitbarWidth + "px" : void 0));
  }
}
function SplitterComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, SplitterComponent_For_2_Conditional_0_Template, 1, 7, "kendo-splitter-bar", 0);
  }
  if (rf & 2) {
    const ɵ$index_2_r3 = ctx.$index;
    const ɵ$count_2_r5 = ctx.$count;
    ɵɵconditional(!(ɵ$index_2_r3 === ɵ$count_2_r5 - 1) ? 0 : -1);
  }
}
var _c12 = ["kendoTabStripScrollableButton", ""];
var _c13 = ["kendoTabStripTab", ""];
function TabComponent_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 3)(1, "span", 4);
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r0.tab.title);
  }
}
function TabComponent_Conditional_0_Conditional_1_ng_template_1_Template(rf, ctx) {
}
function TabComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 3);
    ɵɵtemplate(1, TabComponent_Conditional_0_Conditional_1_ng_template_1_Template, 0, 0, "ng-template", 1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.tab.tabTitle.templateRef);
  }
}
function TabComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TabComponent_Conditional_0_Conditional_0_Template, 3, 1, "span", 3)(1, TabComponent_Conditional_0_Conditional_1_Template, 2, 1, "span", 3);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵconditional(!ctx_r0.tab.tabTitle ? 0 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r0.tab.tabTitle ? 1 : -1);
  }
}
function TabComponent_Conditional_1_ng_template_0_Template(rf, ctx) {
}
function TabComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TabComponent_Conditional_1_ng_template_0_Template, 0, 0, "ng-template", 1, 0, ɵɵtemplateRefExtractor);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.tab.tabTemplate == null ? null : ctx_r0.tab.tabTemplate.templateRef);
  }
}
function TabComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 5);
    ɵɵlistener("click", function TabComponent_Conditional_2_Template_span_click_0_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.closeTab(ctx_r0.index));
    });
    ɵɵelement(1, "kendo-icon-wrapper", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("title", ctx_r0.closeButtonTitle);
    ɵɵadvance();
    ɵɵproperty("svgIcon", ctx_r0.closeSVGIconClass)("name", ctx_r0.closeIconClasses)("customFontClass", ctx_r0.customCloseIconClasses);
  }
}
var _c14 = ["tablist"];
var _c15 = ["prevScrollButton"];
var _c16 = ["nextScrollButton"];
var _c17 = ["tabHeaderContainer"];
var TabStripComponent_ng_template_5_For_1_Conditional_0_Defer_1_DepsFn = () => [NgTemplateOutlet, NgClass];
var _c18 = (a0, a1, a2, a3, a4, a5) => ({
  "k-tabstrip-items-start": a0,
  "k-tabstrip-items-center": a1,
  "k-tabstrip-items-end": a2,
  "k-tabstrip-items-stretched": a3,
  "k-tabstrip-items-justify": a4,
  "k-tabstrip-items-scroll": a5
});
var _c19 = (a0, a1, a2) => ({
  "k-button-sm": a0,
  "k-button-md": a1,
  "k-button-lg": a2
});
function TabStripComponent_Conditional_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TabStripComponent_Conditional_1_Conditional_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TabStripComponent_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TabStripComponent_Conditional_1_Conditional_1_ng_container_0_Template, 1, 0, "ng-container", 8);
  }
  if (rf & 2) {
    ɵɵnextContext(2);
    const content_r1 = ɵɵreference(6);
    ɵɵproperty("ngTemplateOutlet", content_r1);
  }
}
function TabStripComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TabStripComponent_Conditional_1_ng_container_0_Template, 1, 0, "ng-container", 8)(1, TabStripComponent_Conditional_1_Conditional_1_Template, 1, 1, "ng-container");
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    const heading_r3 = ɵɵreference(4);
    ɵɵproperty("ngTemplateOutlet", heading_r3);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.showContentArea ? 1 : -1);
  }
}
function TabStripComponent_Conditional_2_Conditional_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TabStripComponent_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TabStripComponent_Conditional_2_Conditional_0_ng_container_0_Template, 1, 0, "ng-container", 8);
  }
  if (rf & 2) {
    ɵɵnextContext(2);
    const content_r1 = ɵɵreference(6);
    ɵɵproperty("ngTemplateOutlet", content_r1);
  }
}
function TabStripComponent_Conditional_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TabStripComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TabStripComponent_Conditional_2_Conditional_0_Template, 1, 1, "ng-container")(1, TabStripComponent_Conditional_2_ng_container_1_Template, 1, 0, "ng-container", 8);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    const heading_r3 = ɵɵreference(4);
    ɵɵconditional(ctx_r1.showContentArea ? 0 : -1);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", heading_r3);
  }
}
function TabStripComponent_ng_template_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 13, 3);
    ɵɵlistener("tabScroll", function TabStripComponent_ng_template_3_Conditional_1_Template_span_tabScroll_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.tabScroll.emit($event));
    })("onClick", function TabStripComponent_ng_template_3_Conditional_1_Template_span_onClick_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onScrollButtonClick($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("scrollable", ctx_r1.scrollable)("tabPosition", ctx_r1.tabPosition)("prev", true)("title", ctx_r1.localization.get("previousTabButton"))("ngClass", ɵɵpureFunction3(5, _c19, ctx_r1.size === "small", ctx_r1.size === "medium" || !ctx_r1.size, ctx_r1.size === "large"));
  }
}
function TabStripComponent_ng_template_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 13, 4);
    ɵɵlistener("tabScroll", function TabStripComponent_ng_template_3_Conditional_2_Template_span_tabScroll_0_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.tabScroll.emit($event));
    })("onClick", function TabStripComponent_ng_template_3_Conditional_2_Template_span_onClick_0_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onScrollButtonClick($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("scrollable", ctx_r1.scrollable)("tabPosition", ctx_r1.tabPosition)("prev", false)("title", ctx_r1.localization.get("nextTabButton"))("ngClass", ɵɵpureFunction3(5, _c19, ctx_r1.size === "small", ctx_r1.size === "medium" || !ctx_r1.size, ctx_r1.size === "large"));
  }
}
function TabStripComponent_ng_template_3_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 14, 5);
    ɵɵlistener("tabClose", function TabStripComponent_ng_template_3_For_6_Template_li_tabClose_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.tabClose.emit($event));
    })("click", function TabStripComponent_ng_template_3_For_6_Template_li_click_0_listener($event) {
      const ɵ$index_35_r7 = ɵɵrestoreView(_r6).$index;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onTabClick($event, ɵ$index_35_r7));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const tab_r8 = ctx.$implicit;
    const ɵ$index_35_r7 = ctx.$index;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵclassProp("k-first", ɵ$index_35_r7 === 0)("k-last", ɵ$index_35_r7 === ctx_r1.tabs.length - 1);
    ɵɵproperty("ngClass", tab_r8.cssClass)("ngStyle", tab_r8.cssStyle)("tab", tab_r8)("index", ɵ$index_35_r7)("tabStripClosable", ctx_r1.closable)("tabStripCloseIcon", ctx_r1.closeIcon)("customTabstripCloseIcon", ctx_r1.closeIconClass)("closeSVGIcon", ctx_r1.closeSVGIcon)("id", ctx_r1.getTabId(ɵ$index_35_r7));
    ɵɵattribute("aria-controls", ctx_r1.showContentArea && tab_r8.selected ? ctx_r1.getTabPanelId(ɵ$index_35_r7) : void 0);
  }
}
function TabStripComponent_ng_template_3_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 13, 3);
    ɵɵlistener("tabScroll", function TabStripComponent_ng_template_3_Conditional_7_Template_span_tabScroll_0_listener($event) {
      ɵɵrestoreView(_r9);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.tabScroll.emit($event));
    })("onClick", function TabStripComponent_ng_template_3_Conditional_7_Template_span_onClick_0_listener($event) {
      ɵɵrestoreView(_r9);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onScrollButtonClick($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("scrollable", ctx_r1.scrollable)("tabPosition", ctx_r1.tabPosition)("prev", true)("title", ctx_r1.localization.get("previousTabButton"))("ngClass", ɵɵpureFunction3(5, _c19, ctx_r1.size === "small", ctx_r1.size === "medium" || !ctx_r1.size, ctx_r1.size === "large"));
  }
}
function TabStripComponent_ng_template_3_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 13, 4);
    ɵɵlistener("tabScroll", function TabStripComponent_ng_template_3_Conditional_8_Template_span_tabScroll_0_listener($event) {
      ɵɵrestoreView(_r10);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.tabScroll.emit($event));
    })("onClick", function TabStripComponent_ng_template_3_Conditional_8_Template_span_onClick_0_listener($event) {
      ɵɵrestoreView(_r10);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onScrollButtonClick($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("scrollable", ctx_r1.scrollable)("tabPosition", ctx_r1.tabPosition)("prev", false)("title", ctx_r1.localization.get("nextTabButton"))("ngClass", ɵɵpureFunction3(5, _c19, ctx_r1.size === "small", ctx_r1.size === "medium" || !ctx_r1.size, ctx_r1.size === "large"));
  }
}
function TabStripComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 9);
    ɵɵtemplate(1, TabStripComponent_ng_template_3_Conditional_1_Template, 2, 9, "span", 10)(2, TabStripComponent_ng_template_3_Conditional_2_Template, 2, 9, "span", 10);
    ɵɵelementStart(3, "ul", 11, 2);
    ɵɵrepeaterCreate(5, TabStripComponent_ng_template_3_For_6_Template, 2, 14, "li", 12, ɵɵrepeaterTrackByIdentity);
    ɵɵelementEnd();
    ɵɵtemplate(7, TabStripComponent_ng_template_3_Conditional_7_Template, 2, 9, "span", 10)(8, TabStripComponent_ng_template_3_Conditional_8_Template, 2, 9, "span", 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassProp("k-tabstrip-items-wrapper-scroll", ctx_r1.mouseScrollEnabled);
    ɵɵproperty("ngClass", ctx_r1.itemsWrapperClass);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.hasScrollButtons.visible && ctx_r1.hasScrollButtons.position !== "end" ? 1 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.hasScrollButtons.visible && ctx_r1.hasScrollButtons.position === "start" ? 2 : -1);
    ɵɵadvance();
    ɵɵproperty("ngClass", ɵɵpureFunction6(9, _c18, ctx_r1.tabAlignment === "start", ctx_r1.tabAlignment === "center", ctx_r1.tabAlignment === "end", ctx_r1.tabAlignment === "stretched", ctx_r1.tabAlignment === "justify", ctx_r1.mouseScrollEnabled));
    ɵɵattribute("aria-orientation", ctx_r1.tabPosition === "left" || ctx_r1.tabPosition === "right" ? "vertical" : "horizontal");
    ɵɵadvance(2);
    ɵɵrepeater(ctx_r1.tabs);
    ɵɵadvance(2);
    ɵɵconditional(ctx_r1.hasScrollButtons.visible && ctx_r1.hasScrollButtons.position === "end" ? 7 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.hasScrollButtons.visible && ctx_r1.hasScrollButtons.position !== "start" ? 8 : -1);
  }
}
function TabStripComponent_ng_template_5_For_1_Conditional_0_Defer_0_ng_template_1_Template(rf, ctx) {
}
function TabStripComponent_ng_template_5_For_1_Conditional_0_Defer_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 15);
    ɵɵtemplate(1, TabStripComponent_ng_template_5_For_1_Conditional_0_Defer_0_ng_template_1_Template, 0, 0, "ng-template", 16);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r10 = ɵɵnextContext(2);
    const tab_r12 = ctx_r10.$implicit;
    const ɵ$index_46_r13 = ctx_r10.$index;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("@state", tab_r12.selected && ctx_r1.animate ? "active" : "inactive")("ngClass", !ctx_r1.keepTabContent || tab_r12.selected ? "k-tabstrip-content k-active" : "k-tabstrip-content")("tabIndex", 0)("id", ctx_r1.getTabPanelId(ɵ$index_46_r13));
    ɵɵattribute("aria-hidden", !tab_r12.selected)("aria-labelledby", ctx_r1.getTabId(ɵ$index_46_r13))("aria-disabled", tab_r12.disabled);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", tab_r12.tabContent == null ? null : tab_r12.tabContent.templateRef);
  }
}
function TabStripComponent_ng_template_5_For_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TabStripComponent_ng_template_5_For_1_Conditional_0_Defer_0_Template, 2, 8);
    ɵɵdefer(1, 0, TabStripComponent_ng_template_5_For_1_Conditional_0_Defer_1_DepsFn);
    ɵɵdeferPrefetchOnIdle();
  }
  if (rf & 2) {
    const tab_r12 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵdeferWhen(tab_r12.selected || ctx_r1.keepTabContent === true);
  }
}
function TabStripComponent_ng_template_5_For_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TabStripComponent_ng_template_5_For_1_Conditional_0_Template, 3, 1);
  }
  if (rf & 2) {
    const tab_r12 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵconditional(tab_r12.selected || ctx_r1.keepTabContent !== false ? 0 : -1);
  }
}
function TabStripComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵrepeaterCreate(0, TabStripComponent_ng_template_5_For_1_Template, 1, 1, null, null, ɵɵrepeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵrepeater(ctx_r1.tabs);
  }
}
function TabStripComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "kendo-resize-sensor", 17);
    ɵɵlistener("resize", function TabStripComponent_Conditional_7_Template_kendo_resize_sensor_resize_0_listener() {
      ɵɵrestoreView(_r14);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onResize());
    });
    ɵɵelementEnd();
  }
}
function TabStripComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 7);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("licenseMessage", ctx_r1.licenseMessage);
  }
}
var _c20 = ["kendoDrawerItem", ""];
var _c21 = (a0, a1, a2, a3) => ({
  $implicit: a0,
  isItemExpanded: a1,
  hasChildren: a2,
  level: a3
});
function DrawerItemComponent_Conditional_0_ng_template_0_Template(rf, ctx) {
}
function DrawerItemComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, DrawerItemComponent_Conditional_0_ng_template_0_Template, 0, 0, "ng-template", 0);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.itemTemplate)("ngTemplateOutletContext", ɵɵpureFunction4(2, _c21, ctx_r0.item, ctx_r0.viewItem.isExpanded, ctx_r0.viewItem.hasChildren, ctx_r0.viewItem.level));
  }
}
function DrawerItemComponent_Conditional_1_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("name", ctx_r0.iconClasses)("customFontClass", ctx_r0.customIconClasses)("svgIcon", ctx_r0.item.svgIcon)("innerCssClass", ctx_r0.innerCssClasses);
  }
}
function DrawerItemComponent_Conditional_1_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 3);
  }
}
function DrawerItemComponent_Conditional_1_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 4);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("name", ctx_r0.viewItem.isExpanded ? "arrow-chevron-up" : "arrow-chevron-down")("svgIcon", ctx_r0.viewItem.isExpanded ? ctx_r0.arrowUpIcon : ctx_r0.arrowDownIcon);
  }
}
function DrawerItemComponent_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, DrawerItemComponent_Conditional_1_Conditional_0_Conditional_0_Template, 1, 4, "kendo-icon-wrapper", 1);
    ɵɵelementStart(1, "span", 2);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵtemplate(3, DrawerItemComponent_Conditional_1_Conditional_0_Conditional_3_Template, 1, 0, "span", 3)(4, DrawerItemComponent_Conditional_1_Conditional_0_Conditional_4_Template, 1, 2, "kendo-icon-wrapper", 4);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵconditional(ctx_r0.item.icon || ctx_r0.item.iconClass || ctx_r0.item.svgIcon ? 0 : -1);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r0.item.text);
    ɵɵadvance();
    ɵɵconditional(ctx_r0.viewItem.hasChildren ? 3 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r0.viewItem.hasChildren ? 4 : -1);
  }
}
function DrawerItemComponent_Conditional_1_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("name", ctx_r0.iconClasses)("customFontClass", ctx_r0.customIconClasses)("svgIcon", ctx_r0.item.svgIcon)("innerCssClass", ctx_r0.innerCssClasses);
  }
}
function DrawerItemComponent_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, DrawerItemComponent_Conditional_1_Conditional_1_Conditional_0_Template, 1, 4, "kendo-icon-wrapper", 1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵconditional(ctx_r0.item.icon || ctx_r0.item.iconClass || ctx_r0.item.svgIcon ? 0 : -1);
  }
}
function DrawerItemComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, DrawerItemComponent_Conditional_1_Conditional_0_Template, 5, 4)(1, DrawerItemComponent_Conditional_1_Conditional_1_Template, 1, 1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵconditional(ctx_r0.expanded ? 0 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r0.mini && !ctx_r0.expanded ? 1 : -1);
  }
}
var _c22 = ["kendoDrawerList", ""];
function DrawerListComponent_For_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "li", 2);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    const v_r2 = ctx_r0.$implicit;
    const ɵ$index_1_r3 = ctx_r0.$index;
    const ctx_r3 = ɵɵnextContext();
    ɵɵclassMapInterpolate1("k-drawer-item ", ctx_r3.expanded ? " k-level-" + v_r2.level : "", "");
    ɵɵproperty("viewItem", v_r2)("index", ɵ$index_1_r3)("mini", ctx_r3.mini)("expanded", ctx_r3.expanded)("itemTemplate", ctx_r3.itemTemplate)("ngClass", v_r2.item.cssClass)("ngStyle", v_r2.item.cssStyle)("tabindex", v_r2.index === 0 ? "0" : "-1");
    ɵɵattribute("data-kendo-drawer-index", v_r2.index);
  }
}
function DrawerListComponent_For_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 1);
    ɵɵtext(1, "   ");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const v_r2 = ɵɵnextContext().$implicit;
    ɵɵproperty("ngClass", v_r2.item.cssClass)("ngStyle", v_r2.item.cssStyle);
  }
}
function DrawerListComponent_For_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, DrawerListComponent_For_1_Conditional_0_Template, 1, 12, "li", 0)(1, DrawerListComponent_For_1_Conditional_1_Template, 2, 2, "li", 1);
  }
  if (rf & 2) {
    const v_r2 = ctx.$implicit;
    ɵɵconditional(!v_r2.item.separator ? 0 : -1);
    ɵɵadvance();
    ɵɵconditional(v_r2.item.separator ? 1 : -1);
  }
}
function DrawerComponent_Conditional_0_Conditional_1_Conditional_0_ng_template_0_Template(rf, ctx) {
}
function DrawerComponent_Conditional_0_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, DrawerComponent_Conditional_0_Conditional_1_Conditional_0_ng_template_0_Template, 0, 0, "ng-template", 3);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.headerTemplate == null ? null : ctx_r1.headerTemplate.templateRef);
  }
}
function DrawerComponent_Conditional_0_Conditional_1_Conditional_2_ng_template_0_Template(rf, ctx) {
}
function DrawerComponent_Conditional_0_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, DrawerComponent_Conditional_0_Conditional_1_Conditional_2_ng_template_0_Template, 0, 0, "ng-template", 3);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.footerTemplate == null ? null : ctx_r1.footerTemplate.templateRef);
  }
}
function DrawerComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵtemplate(0, DrawerComponent_Conditional_0_Conditional_1_Conditional_0_Template, 1, 1, null, 3);
    ɵɵelementStart(1, "ul", 4);
    ɵɵlistener("select", function DrawerComponent_Conditional_0_Conditional_1_Template_ul_select_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onSelect($event));
    });
    ɵɵelementEnd();
    ɵɵtemplate(2, DrawerComponent_Conditional_0_Conditional_1_Conditional_2_Template, 1, 1, null, 3);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵconditional(ctx_r1.headerTemplate ? 0 : -1);
    ɵɵadvance();
    ɵɵproperty("mini", ctx_r1.mini)("expanded", ctx_r1.expanded)("view", ctx_r1.viewItems)("itemTemplate", ctx_r1.itemTemplate == null ? null : ctx_r1.itemTemplate.templateRef);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.footerTemplate ? 2 : -1);
  }
}
function DrawerComponent_Conditional_0_Conditional_2_ng_template_0_Template(rf, ctx) {
}
function DrawerComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, DrawerComponent_Conditional_0_Conditional_2_ng_template_0_Template, 0, 0, "ng-template", 3);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.drawerTemplate == null ? null : ctx_r1.drawerTemplate.templateRef);
  }
}
function DrawerComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵtemplate(1, DrawerComponent_Conditional_0_Conditional_1_Template, 3, 6)(2, DrawerComponent_Conditional_0_Conditional_2_Template, 1, 1, null, 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵstyleProp("width", ctx_r1.drawerWidth, "px");
    ɵɵadvance();
    ɵɵconditional(!ctx_r1.drawerTemplate ? 1 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.drawerTemplate ? 2 : -1);
  }
}
function DrawerComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 1);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("licenseMessage", ctx_r1.licenseMessage);
  }
}
function DrawerContainerComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 1);
    ɵɵlistener("click", function DrawerContainerComponent_Conditional_0_Template_div_click_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.closeDrawer());
    });
    ɵɵelementEnd();
  }
}
var _c23 = ["stepLink"];
var _c24 = ["kendoStepperStep", ""];
var _c25 = (a0, a1) => ({
  $implicit: a0,
  index: a1
});
function StepperStepComponent_Conditional_2_ng_template_0_Template(rf, ctx) {
}
function StepperStepComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, StepperStepComponent_Conditional_2_ng_template_0_Template, 0, 0, "ng-template", 2);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.stepTemplate)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c25, ctx_r1.step, ctx_r1.index));
  }
}
function StepperStepComponent_Conditional_3_Conditional_0_Conditional_1_ng_template_0_Template(rf, ctx) {
}
function StepperStepComponent_Conditional_3_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, StepperStepComponent_Conditional_3_Conditional_0_Conditional_1_ng_template_0_Template, 0, 0, "ng-template", 2);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.indicatorTemplate)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c25, ctx_r1.step, ctx_r1.index));
  }
}
function StepperStepComponent_Conditional_3_Conditional_0_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 6);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵproperty("name", ctx_r1.indicatorIconClass)("customFontClass", ctx_r1.customIndicatorIconClass)("svgIcon", ctx_r1.SVGIndicatorIcon);
  }
}
function StepperStepComponent_Conditional_3_Conditional_0_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 7);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.indicatorText);
  }
}
function StepperStepComponent_Conditional_3_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, StepperStepComponent_Conditional_3_Conditional_0_Conditional_2_Conditional_0_Template, 1, 3, "kendo-icon-wrapper", 6)(1, StepperStepComponent_Conditional_3_Conditional_0_Conditional_2_Conditional_1_Template, 2, 1, "span", 7);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵconditional(ctx_r1.showIndicatorIcon ? 0 : -1);
    ɵɵadvance();
    ɵɵconditional(!ctx_r1.showIndicatorIcon ? 1 : -1);
  }
}
function StepperStepComponent_Conditional_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 5);
    ɵɵtemplate(1, StepperStepComponent_Conditional_3_Conditional_0_Conditional_1_Template, 1, 5, null, 2)(2, StepperStepComponent_Conditional_3_Conditional_0_Conditional_2_Template, 2, 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵstyleProp("transition-duration", ctx_r1.transitionDuration, "ms");
    ɵɵadvance();
    ɵɵconditional(ctx_r1.indicatorTemplate ? 1 : -1);
    ɵɵadvance();
    ɵɵconditional(!ctx_r1.indicatorTemplate ? 2 : -1);
  }
}
function StepperStepComponent_Conditional_3_Conditional_1_Conditional_1_ng_template_0_Template(rf, ctx) {
}
function StepperStepComponent_Conditional_3_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, StepperStepComponent_Conditional_3_Conditional_1_Conditional_1_ng_template_0_Template, 0, 0, "ng-template", 2);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.labelTemplate)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c25, ctx_r1.step, ctx_r1.index));
  }
}
function StepperStepComponent_Conditional_3_Conditional_1_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 8);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.step.label);
  }
}
function StepperStepComponent_Conditional_3_Conditional_1_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 9);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵproperty("name", ctx_r1.validationIconClasses)("customFontClass", ctx_r1.customValidationIconClasses)("svgIcon", ctx_r1.validationSVGIcon);
  }
}
function StepperStepComponent_Conditional_3_Conditional_1_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 10);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵtextInterpolate1("(", ctx_r1.optionalText, ")");
  }
}
function StepperStepComponent_Conditional_3_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, StepperStepComponent_Conditional_3_Conditional_1_Conditional_2_Conditional_0_Template, 2, 1, "span", 8)(1, StepperStepComponent_Conditional_3_Conditional_1_Conditional_2_Conditional_1_Template, 1, 3, "kendo-icon-wrapper", 9)(2, StepperStepComponent_Conditional_3_Conditional_1_Conditional_2_Conditional_2_Template, 2, 1, "span", 10);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵconditional(ctx_r1.showLabelText ? 0 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.showLabelIcon ? 1 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.step.optional ? 2 : -1);
  }
}
function StepperStepComponent_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 4);
    ɵɵtemplate(1, StepperStepComponent_Conditional_3_Conditional_1_Conditional_1_Template, 1, 5, null, 2)(2, StepperStepComponent_Conditional_3_Conditional_1_Conditional_2_Template, 3, 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.labelTemplate ? 1 : -1);
    ɵɵadvance();
    ɵɵconditional(!ctx_r1.labelTemplate ? 2 : -1);
  }
}
function StepperStepComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, StepperStepComponent_Conditional_3_Conditional_0_Template, 3, 4, "span", 3)(1, StepperStepComponent_Conditional_3_Conditional_1_Template, 3, 2, "span", 4);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵconditional(ctx_r1.showIndicator ? 0 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.showLabel ? 1 : -1);
  }
}
var _c26 = ["kendoStepperList", ""];
function StepperListComponent_For_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "li", 1);
  }
  if (rf & 2) {
    const step_r1 = ctx.$implicit;
    const ɵ$index_1_r2 = ctx.$index;
    const ctx_r2 = ɵɵnextContext();
    ɵɵstyleProp("max-width", ctx_r2.maxStepWidth, "%")("max-height", ctx_r2.maxStepHeight, "%");
    ɵɵclassProp("k-step-first", ɵ$index_1_r2 === 0)("k-step-last", ɵ$index_1_r2 === ctx_r2.steps.length - 1)("k-step-done", ɵ$index_1_r2 < ctx_r2.currentStep)("k-step-current", ɵ$index_1_r2 === ctx_r2.currentStep)("k-step-optional", step_r1.optional)("k-disabled", step_r1.disabled)("k-focus", ɵ$index_1_r2 === ctx_r2.focusedStep || !ctx_r2.isPresent(ctx_r2.focusedStep) && ɵ$index_1_r2 === ctx_r2.currentStep);
    ɵɵproperty("type", ctx_r2.stepType)("step", step_r1)("index", ɵ$index_1_r2)("current", ctx_r2.currentStep)("successIcon", ctx_r2.successIcon)("successSVGIcon", ctx_r2.successSVGIcon)("errorIcon", ctx_r2.errorIcon)("errorSVGIcon", ctx_r2.errorSVGIcon)("svgIcon", ctx_r2.svgIcon)("indicatorTemplate", ctx_r2.indicatorTemplate)("labelTemplate", ctx_r2.labelTemplate)("stepTemplate", ctx_r2.stepTemplate)("ngClass", step_r1.cssClass)("ngStyle", step_r1.cssStyle);
    ɵɵattribute("data-kendo-stepper-index", ɵ$index_1_r2);
  }
}
var _c27 = () => ({
  position: "start",
  visible: false
});
function StepperComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-progressbar", 2);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("animation", ctx_r0.progressAnimation)("max", ctx_r0.steps.length - 1)("label", ɵɵpureFunction0(8, _c27))("orientation", ctx_r0.orientation)("reverse", !ctx_r0.isHorizontal)("value", ctx_r0.currentStep)("ngStyle", ctx_r0.progressBarStyling);
    ɵɵattribute("aria-hidden", true);
  }
}
function AvatarComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0);
  }
}
function AvatarComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 1);
    ɵɵelement(1, "img", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵpropertyInterpolate("src", ctx_r0.imageSrc, ɵɵsanitizeUrl);
    ɵɵproperty("alt", ctx_r0.textFor("avatarAlt"))("ngStyle", ctx_r0.cssStyle);
  }
}
function AvatarComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 2);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngStyle", ctx_r0.cssStyle);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.initials.substring(0, 2));
  }
}
function AvatarComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 3);
    ɵɵelement(1, "kendo-icon-wrapper", 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngStyle", ctx_r0.cssStyle)("name", ctx_r0.icon)("customFontClass", ctx_r0.iconClass)("svgIcon", ctx_r0.svgIcon);
  }
}
function CardActionsComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0);
  }
}
function CardActionsComponent_Conditional_1_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 2);
    ɵɵlistener("click", function CardActionsComponent_Conditional_1_For_1_Template_button_click_0_listener() {
      const action_r2 = ɵɵrestoreView(_r1).$implicit;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.onClick(action_r2));
    });
    ɵɵelementStart(1, "span", 3);
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const action_r2 = ctx.$implicit;
    ɵɵclassProp("k-button-solid", !action_r2.flat)("k-button-flat", action_r2.flat)("k-button-solid-base", !action_r2.primary && !action_r2.flat)("k-button-solid-primary", action_r2.primary && !action_r2.flat)("k-button-flat-base", !action_r2.primary && action_r2.flat)("k-button-flat-primary", action_r2.primary && action_r2.flat);
    ɵɵadvance(2);
    ɵɵtextInterpolate(action_r2.text);
  }
}
function CardActionsComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵrepeaterCreate(0, CardActionsComponent_Conditional_1_For_1_Template, 3, 13, "button", 1, ɵɵrepeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵrepeater(ctx_r2.actionsArray);
  }
}
function CardActionsComponent_Conditional_2_ng_template_0_Template(rf, ctx) {
}
function CardActionsComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, CardActionsComponent_Conditional_2_ng_template_0_Template, 0, 0, "ng-template", 0);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.actionsTemplate);
  }
}
var _c28 = ["content"];
function ExpansionPanelComponent_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 8);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.title);
  }
}
function ExpansionPanelComponent_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 10);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r1.subtitle, " ");
  }
}
function ExpansionPanelComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ExpansionPanelComponent_Conditional_2_Conditional_0_Template, 2, 1, "div", 8);
    ɵɵelement(1, "span", 9);
    ɵɵtemplate(2, ExpansionPanelComponent_Conditional_2_Conditional_2_Template, 2, 1, "div", 10);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵconditional(ctx_r1.title ? 0 : -1);
    ɵɵadvance(2);
    ɵɵconditional(ctx_r1.subtitle ? 2 : -1);
  }
}
function ExpansionPanelComponent_Conditional_3_ng_template_0_Template(rf, ctx) {
}
function ExpansionPanelComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ExpansionPanelComponent_Conditional_3_ng_template_0_Template, 0, 0, "ng-template", 3);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.titleTemplate == null ? null : ctx_r1.titleTemplate.templateRef);
  }
}
function TileLayoutItemComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "kendo-tilelayout-item-header")(1, "h5", 0);
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("id", ctx_r0.titleId);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.title);
  }
}
function TileLayoutItemComponent_Conditional_2_For_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 2);
  }
  if (rf & 2) {
    const dir_r2 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵclassMapInterpolate1("k-resize-handle k-cursor-", dir_r2, "-resize");
    ɵɵproperty("rtl", ctx_r0.rtl)("resizeDirection", dir_r2);
  }
}
function TileLayoutItemComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵrepeaterCreate(0, TileLayoutItemComponent_Conditional_2_For_1_Template, 1, 5, "div", 1, ɵɵrepeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵrepeater(ctx_r0.resizeDirections);
  }
}
var _c29 = ["hint"];
function TileLayoutComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 2);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("licenseMessage", ctx_r0.licenseMessage);
  }
}
var _c30 = ["callout"];
var _c31 = (a0) => ({
  "height": a0
});
var _c32 = (a0, a1, a2) => ({
  "k-callout-n": a0,
  "k-callout-w": a1,
  "k-callout-e": a2
});
var _c33 = (a0) => ({
  animationDuration: a0
});
var _c34 = (a0, a1) => ({
  value: a0,
  params: a1
});
function TimelineCardComponent_Conditional_3_Conditional_2_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0, " > ");
  }
}
function TimelineCardComponent_Conditional_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TimelineCardComponent_Conditional_3_Conditional_2_ng_template_0_Template, 1, 0, "ng-template", 4);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.headerTemplate == null ? null : ctx_r1.headerTemplate.templateRef)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c25, ctx_r1.event, ctx_r1.index));
  }
}
function TimelineCardComponent_Conditional_3_Conditional_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "button", 8);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("icon", ctx_r1.calloutFontIcon)("svgIcon", ctx_r1.calloutSvgIcon);
    ɵɵattribute("aria-hidden", true);
  }
}
function TimelineCardComponent_Conditional_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5)(1, "span", 7);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵtemplate(3, TimelineCardComponent_Conditional_3_Conditional_3_Conditional_3_Template, 1, 3, "button", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r1.event.title);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.collapsible && ctx_r1.orientation === "vertical" ? 3 : -1);
  }
}
function TimelineCardComponent_Conditional_3_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 6);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.event.subtitle);
  }
}
function TimelineCardComponent_Conditional_3_Conditional_5_Conditional_1_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0, " > ");
  }
}
function TimelineCardComponent_Conditional_3_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TimelineCardComponent_Conditional_3_Conditional_5_Conditional_1_ng_template_0_Template, 1, 0, "ng-template", 4);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.bodyTemplate == null ? null : ctx_r1.bodyTemplate.templateRef)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c25, ctx_r1.event, ctx_r1.index));
  }
}
function TimelineCardComponent_Conditional_3_Conditional_5_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "p");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.event.description);
  }
}
function TimelineCardComponent_Conditional_3_Conditional_5_Conditional_2_For_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "img", 10);
  }
  if (rf & 2) {
    const image_r4 = ɵɵnextContext().$implicit;
    ɵɵproperty("src", image_r4.src, ɵɵsanitizeUrl)("alt", image_r4.alt);
  }
}
function TimelineCardComponent_Conditional_3_Conditional_5_Conditional_2_For_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "img", 11);
  }
  if (rf & 2) {
    const image_r4 = ɵɵnextContext().$implicit;
    ɵɵproperty("src", image_r4.src, ɵɵsanitizeUrl);
  }
}
function TimelineCardComponent_Conditional_3_Conditional_5_Conditional_2_For_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TimelineCardComponent_Conditional_3_Conditional_5_Conditional_2_For_3_Conditional_0_Template, 1, 2, "img", 10)(1, TimelineCardComponent_Conditional_3_Conditional_5_Conditional_2_For_3_Conditional_1_Template, 1, 1, "img", 11);
  }
  if (rf & 2) {
    const image_r4 = ctx.$implicit;
    ɵɵconditional(image_r4.alt ? 0 : -1);
    ɵɵadvance();
    ɵɵconditional(!image_r4.alt ? 1 : -1);
  }
}
function TimelineCardComponent_Conditional_3_Conditional_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 9);
    ɵɵtemplate(1, TimelineCardComponent_Conditional_3_Conditional_5_Conditional_2_Conditional_1_Template, 2, 1, "p");
    ɵɵrepeaterCreate(2, TimelineCardComponent_Conditional_3_Conditional_5_Conditional_2_For_3_Template, 2, 2, null, null, ɵɵrepeaterTrackByIdentity);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.event.description ? 1 : -1);
    ɵɵadvance();
    ɵɵrepeater(ctx_r1.event.images);
  }
}
function TimelineCardComponent_Conditional_3_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "kendo-card-body");
    ɵɵlistener("@toggle.start", function TimelineCardComponent_Conditional_3_Conditional_5_Template_kendo_card_body_animation_toggle_start_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.animationStart());
    })("@toggle.done", function TimelineCardComponent_Conditional_3_Conditional_5_Template_kendo_card_body_animation_toggle_done_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.animationDone($event));
    });
    ɵɵtemplate(1, TimelineCardComponent_Conditional_3_Conditional_5_Conditional_1_Template, 1, 5, null, 4)(2, TimelineCardComponent_Conditional_3_Conditional_5_Conditional_2_Template, 4, 1, "div", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("@toggle", ɵɵpureFunction2(5, _c34, ctx_r1.expanded ? "expanded" : "collapsed", ɵɵpureFunction1(3, _c33, ctx_r1.animationDuration || 0)));
    ɵɵadvance();
    ɵɵconditional(ctx_r1.bodyTemplate ? 1 : -1);
    ɵɵadvance();
    ɵɵconditional(!ctx_r1.bodyTemplate ? 2 : -1);
  }
}
function TimelineCardComponent_Conditional_3_Conditional_6_Conditional_1_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0, " > ");
  }
}
function TimelineCardComponent_Conditional_3_Conditional_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TimelineCardComponent_Conditional_3_Conditional_6_Conditional_1_ng_template_0_Template, 1, 0, "ng-template", 4);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.actionsTemplate == null ? null : ctx_r1.actionsTemplate.templateRef)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c25, ctx_r1.event, ctx_r1.index));
  }
}
function TimelineCardComponent_Conditional_3_Conditional_6_Conditional_2_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 13);
    ɵɵlistener("click", function TimelineCardComponent_Conditional_3_Conditional_6_Conditional_2_For_1_Template_a_click_0_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r1.onActionClick($event));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const action_r6 = ctx.$implicit;
    ɵɵproperty("href", action_r6.url, ɵɵsanitizeUrl)("target", action_r6.target === "blank" ? "_blank" : "_self");
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", action_r6.text, " ");
  }
}
function TimelineCardComponent_Conditional_3_Conditional_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵrepeaterCreate(0, TimelineCardComponent_Conditional_3_Conditional_6_Conditional_2_For_1_Template, 2, 3, "a", 12, ɵɵrepeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵrepeater(ctx_r1.event.actions);
  }
}
function TimelineCardComponent_Conditional_3_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "kendo-card-actions");
    ɵɵtemplate(1, TimelineCardComponent_Conditional_3_Conditional_6_Conditional_1_Template, 1, 5, null, 4)(2, TimelineCardComponent_Conditional_3_Conditional_6_Conditional_2_Template, 2, 0);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("@toggle", ɵɵpureFunction2(5, _c34, ctx_r1.expanded ? "expanded" : "collapsed", ɵɵpureFunction1(3, _c33, ctx_r1.animationDuration || 0)));
    ɵɵadvance();
    ɵɵconditional(ctx_r1.actionsTemplate ? 1 : -1);
    ɵɵadvance();
    ɵɵconditional(!ctx_r1.actionsTemplate ? 2 : -1);
  }
}
function TimelineCardComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 3)(1, "kendo-card-header");
    ɵɵtemplate(2, TimelineCardComponent_Conditional_3_Conditional_2_Template, 1, 5, null, 4)(3, TimelineCardComponent_Conditional_3_Conditional_3_Template, 4, 2, "div", 5)(4, TimelineCardComponent_Conditional_3_Conditional_4_Template, 2, 1, "div", 6);
    ɵɵelementEnd();
    ɵɵtemplate(5, TimelineCardComponent_Conditional_3_Conditional_5_Template, 3, 8, "kendo-card-body")(6, TimelineCardComponent_Conditional_3_Conditional_6_Template, 3, 8, "kendo-card-actions");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵconditional(ctx_r1.headerTemplate ? 2 : -1);
    ɵɵadvance();
    ɵɵconditional(!ctx_r1.headerTemplate ? 3 : -1);
    ɵɵadvance();
    ɵɵconditional(!ctx_r1.headerTemplate ? 4 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.event.description || ctx_r1.event.images ? 5 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.event.actions ? 6 : -1);
  }
}
var _c35 = ["track"];
var _c36 = ["scrollableTrack"];
var _c37 = ["card"];
var _c38 = ["trackCircle"];
var _c39 = ["trackFlag"];
var _c40 = (a0) => ({
  transformValue: a0
});
var _c41 = () => ({
  "transform-origin": "left top"
});
var _c42 = () => ({});
var _c43 = (a0) => ({
  visibility: a0
});
function TimelineHorizontalComponent_For_8_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 13, 2)(2, "span", 15);
    ɵɵtext(3);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const event_r2 = ɵɵnextContext().$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngStyle", ctx_r2.tabStyle());
    ɵɵattribute("role", "none")("aria-hidden", true);
    ɵɵadvance(3);
    ɵɵtextInterpolate(event_r2.isFlag);
  }
}
function TimelineHorizontalComponent_For_8_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 18);
    ɵɵtext(1);
    ɵɵpipe(2, "kendoDate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const event_r2 = ɵɵnextContext(2).$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(2, 1, event_r2.date, ctx_r2.dateFormat), " ");
  }
}
function TimelineHorizontalComponent_For_8_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 16, 3);
    ɵɵlistener("click", function TimelineHorizontalComponent_For_8_Conditional_1_Template_li_click_0_listener() {
      ɵɵrestoreView(_r4);
      const ɵ$index_11_r5 = ɵɵnextContext().$index;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.navigateToEvent(ɵ$index_11_r5));
    });
    ɵɵelementStart(2, "div", 17);
    ɵɵtemplate(3, TimelineHorizontalComponent_For_8_Conditional_1_Conditional_3_Template, 3, 4, "span", 18);
    ɵɵelementEnd();
    ɵɵelement(4, "span", 19);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("ngStyle", ctx_r2.tabStyle());
    ɵɵattribute("role", "tab");
    ɵɵadvance(3);
    ɵɵconditional(ctx_r2.showDateLabels ? 3 : -1);
  }
}
function TimelineHorizontalComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TimelineHorizontalComponent_For_8_Conditional_0_Template, 4, 4, "li", 13)(1, TimelineHorizontalComponent_For_8_Conditional_1_Template, 5, 3, "li", 14);
  }
  if (rf & 2) {
    const event_r2 = ctx.$implicit;
    ɵɵconditional(event_r2.isFlag ? 0 : -1);
    ɵɵadvance();
    ɵɵconditional(!event_r2.isFlag ? 1 : -1);
  }
}
function TimelineHorizontalComponent_Conditional_10_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 21, 4);
    ɵɵlistener("transitionend", function TimelineHorizontalComponent_Conditional_10_For_2_Template_li_transitionend_0_listener() {
      ɵɵrestoreView(_r7);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.onTransitionEnd());
    });
    ɵɵelement(2, "kendo-timeline-card", 22);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ɵ$index_35_r8 = ctx.$index;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵproperty("event", ctx_r2.selectedCardIndex === ɵ$index_35_r8 ? ctx_r2.selectedEvent : null)("expanded", true)("collapsible", ctx_r2.collapsibleEvents)("calloutStyle", ctx_r2.selectedCardIndex === ɵ$index_35_r8 ? ctx_r2.calloutStyle : ɵɵpureFunction0(12, _c42))("ngStyle", ɵɵpureFunction1(13, _c43, ctx_r2.selectedCardIndex === ɵ$index_35_r8 ? "visible" : "hidden"))("tabIndex", ctx_r2.selectedCardIndex === ɵ$index_35_r8 ? "0" : "-1")("navigable", ctx_r2.navigable)("index", ctx_r2.selectedEventIndex)("headerTemplate", ctx_r2.headerTemplate)("bodyTemplate", ctx_r2.bodyTemplate)("actionsTemplate", ctx_r2.actionsTemplate)("eventHeight", ctx_r2.eventHeight);
  }
}
function TimelineHorizontalComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ul", 11);
    ɵɵlistener("@eventsSlide.done", function TimelineHorizontalComponent_Conditional_10_Template_ul_animation_eventsSlide_done_0_listener() {
      ɵɵrestoreView(_r6);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onSlideDone());
    });
    ɵɵrepeaterCreate(1, TimelineHorizontalComponent_Conditional_10_For_2_Template, 3, 15, "li", 20, ɵɵrepeaterTrackByIdentity);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("@eventsSlide", ɵɵpureFunction2(4, _c34, ctx_r2.animationState, ɵɵpureFunction1(2, _c33, ctx_r2.animationDuration || 0)))("ngStyle", ɵɵpureFunction0(7, _c41));
    ɵɵadvance();
    ɵɵrepeater(ctx_r2.eventsInInterval);
  }
}
var _c44 = ["dateWrap"];
var _c45 = ["innerDate"];
var _c46 = (a0) => ({
  "k-reverse": a0
});
function TimelineVerticalComponent_Conditional_0_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 4)(1, "span", 9);
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const event_r1 = ɵɵnextContext().$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate(event_r1.flag);
  }
}
function TimelineVerticalComponent_Conditional_0_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 6, 2);
    ɵɵtext(2);
    ɵɵpipe(3, "kendoDate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const event_r1 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(3, 1, event_r1.date, ctx_r1.dateFormat), " ");
  }
}
function TimelineVerticalComponent_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TimelineVerticalComponent_Conditional_0_For_2_Conditional_0_Template, 3, 1, "li", 4);
    ɵɵelementStart(1, "li", 3)(2, "div", 5, 0);
    ɵɵtemplate(4, TimelineVerticalComponent_Conditional_0_For_2_Conditional_4_Template, 4, 4, "span", 6);
    ɵɵelementEnd();
    ɵɵelement(5, "span", 7)(6, "kendo-timeline-card", 8, 1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const event_r1 = ctx.$implicit;
    const ɵ$index_4_r3 = ctx.$index;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵconditional(event_r1.flag ? 0 : -1);
    ɵɵadvance();
    ɵɵproperty("ngClass", ɵɵpureFunction1(15, _c46, ctx_r1.alterMode && ɵ$index_4_r3 % 2 === 0));
    ɵɵadvance(3);
    ɵɵconditional(ctx_r1.showDateLabels ? 4 : -1);
    ɵɵadvance(2);
    ɵɵproperty("event", event_r1)("expanded", event_r1.expanded || !ctx_r1.collapsibleEvents)("collapsible", ctx_r1.collapsibleEvents)("reversed", ctx_r1.alterMode && ɵ$index_4_r3 % 2 === 0)("tabIndex", "0")("navigable", ctx_r1.navigable)("animationDuration", ctx_r1.animationDuration)("headerTemplate", ctx_r1.headerTemplate)("bodyTemplate", ctx_r1.bodyTemplate)("actionsTemplate", ctx_r1.actionsTemplate)("index", ɵ$index_4_r3)("eventWidth", ctx_r1.eventWidth);
  }
}
function TimelineVerticalComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "ul");
    ɵɵrepeaterCreate(1, TimelineVerticalComponent_Conditional_0_For_2_Template, 8, 17, "li", 3, ɵɵrepeaterTrackByIdentity);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵrepeater(ctx_r1.events);
  }
}
function TimelineComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-timeline-vertical", 2);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("events", ctx_r0.events)("alterMode", ctx_r0.alterMode)("collapsibleEvents", ctx_r0.collapsibleEvents)("navigable", ctx_r0.navigable)("showDateLabels", ctx_r0.showDateLabels)("animationDuration", ctx_r0.animationDuration)("eventWidth", ctx_r0.eventWidth)("dateFormat", ctx_r0.dateFormat)("headerTemplate", ctx_r0.headerTemplate)("bodyTemplate", ctx_r0.bodyTemplate)("actionsTemplate", ctx_r0.actionsTemplate);
  }
}
function TimelineComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-timeline-horizontal", 3);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("events", ctx_r0.events)("collapsibleEvents", false)("navigable", ctx_r0.navigable)("showDateLabels", ctx_r0.showDateLabels)("animationDuration", ctx_r0.animationDuration)("eventHeight", ctx_r0.eventHeight)("dateFormat", ctx_r0.dateFormat)("headerTemplate", ctx_r0.headerTemplate)("bodyTemplate", ctx_r0.bodyTemplate)("actionsTemplate", ctx_r0.actionsTemplate);
  }
}
var packageMetadata = {
  name: "@progress/kendo-angular-layout",
  productName: "Kendo UI for Angular",
  productCode: "KENDOUIANGULAR",
  productCodes: ["KENDOUIANGULAR"],
  publishDate: 1768393091,
  version: "21.4.1",
  licensingDocsUrl: "https://www.telerik.com/kendo-angular-ui/my-license/?utm_medium=product&utm_source=kendoangular&utm_campaign=kendo-ui-angular-purchase-license-keys-warning"
};
var PanelBarExpandMode;
(function(PanelBarExpandMode2) {
  PanelBarExpandMode2[PanelBarExpandMode2["Single"] = 0] = "Single";
  PanelBarExpandMode2[PanelBarExpandMode2["Full"] = 1] = "Full";
  PanelBarExpandMode2[PanelBarExpandMode2["Multiple"] = 2] = "Multiple";
  PanelBarExpandMode2[PanelBarExpandMode2["Default"] = 2] = "Default";
})(PanelBarExpandMode || (PanelBarExpandMode = {}));
var nextPanelbarId = 0;
var PanelBarService = class _PanelBarService {
  children$;
  keepContent$;
  parent$;
  pbId;
  animate;
  expandMode;
  itemClick;
  childSource;
  keepContentSource;
  parentSource;
  onKeepContent(keepContent) {
    this.keepContentSource.next(keepContent);
  }
  onSelect(event) {
    this.childSource.next(event);
  }
  onFocus() {
    this.parentSource.next(true);
  }
  onBlur() {
    this.parentSource.next(false);
  }
  constructor() {
    this.parentSource = new Subject();
    this.keepContentSource = new BehaviorSubject(false);
    this.childSource = new Subject();
    this.itemClick = new Subject();
    this.parent$ = this.parentSource.asObservable();
    this.children$ = this.childSource.asObservable();
    this.keepContent$ = this.keepContentSource.asObservable();
    this.pbId = nextPanelbarId++;
  }
  static ɵfac = function PanelBarService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PanelBarService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _PanelBarService,
    factory: _PanelBarService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PanelBarService, [{
    type: Injectable
  }], () => [], null);
})();
var PanelBarContentDirective = class _PanelBarContentDirective {
  templateRef;
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static ɵfac = function PanelBarContentDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PanelBarContentDirective)(ɵɵdirectiveInject(TemplateRef));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _PanelBarContentDirective,
    selectors: [["", "kendoPanelBarContent", ""]],
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PanelBarContentDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoPanelBarContent]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var PanelBarItemTitleDirective = class _PanelBarItemTitleDirective {
  templateRef;
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static ɵfac = function PanelBarItemTitleDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PanelBarItemTitleDirective)(ɵɵdirectiveInject(TemplateRef, 8));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _PanelBarItemTitleDirective,
    selectors: [["", "kendoPanelBarItemTitle", ""]],
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PanelBarItemTitleDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoPanelBarItemTitle]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
var nextId$1 = 0;
var SIZES = {
  small: "sm",
  medium: "md",
  large: "lg"
};
var ROUNDNESS = {
  small: "sm",
  medium: "md",
  large: "lg",
  full: "full"
};
var SHAPE_TO_ROUNDED = {
  rounded: "large",
  circle: "full"
};
var parsePanelBarItems = (data) => {
  return data.map((item) => {
    if (!isPresent2(item.id)) {
      item.id = `default-${nextId$1++}`;
    }
    if (item.children) {
      item.children = parsePanelBarItems(item.children);
    }
    return item;
  });
};
var isPresent2 = (value) => value !== null && value !== void 0;
var isHorizontalArrowKey = (keyCode) => keyCode === Keys.ArrowLeft || keyCode === Keys.ArrowRight;
var isVerticalArrowKey = (keyCode) => keyCode === Keys.ArrowUp || keyCode === Keys.ArrowDown;
var isArrowKey = (keyCode) => isHorizontalArrowKey(keyCode) || isVerticalArrowKey(keyCode);
var isNavigationKey = (keyCode) => keyCode === Keys.PageUp || keyCode === Keys.PageDown || keyCode === Keys.Home || keyCode === Keys.End;
var getStylingClasses = (componentType, stylingOption, previousValue, newValue) => {
  switch (stylingOption) {
    case "size":
      return {
        toRemove: `k-${componentType}-${SIZES[previousValue]}`,
        toAdd: newValue !== "none" ? `k-${componentType}-${SIZES[newValue]}` : ""
      };
    case "rounded":
      return {
        toRemove: `k-rounded-${ROUNDNESS[previousValue]}`,
        toAdd: newValue !== "none" ? `k-rounded-${ROUNDNESS[newValue]}` : ""
      };
    default:
      break;
  }
};
var mapShapeToRounded = (shape) => SHAPE_TO_ROUNDED[shape] || "none";
var isNumber = (value) => typeof value === "number" && isFinite(value);
var focusableRegex = /^(?:a|input|select|option|textarea|button|object)$/i;
var toClassList = (classNames) => String(classNames).trim().split(" ");
var isFocusable = (element) => {
  if (element.tagName) {
    const tagName = element.tagName.toLowerCase();
    const tabIndex = element.getAttribute("tabindex");
    const skipTab = tabIndex === "-1";
    let focusable = tabIndex !== null && !skipTab;
    if (focusableRegex.test(tagName)) {
      focusable = !element.disabled && !skipTab;
    }
    return focusable;
  }
  return false;
};
var hasClass = (element, className) => Boolean(toClassList(element.className).find((name) => name === className));
var closestInScope = (target, predicate, scope, targetAttr) => {
  while (target && target !== scope && !predicate(target, targetAttr)) {
    target = target.parentNode;
  }
  if (target !== scope) {
    return target;
  }
};
var itemIndex = (item, indexAttr) => +item.getAttribute(indexAttr);
var hasItemIndex = (item, indexAttr) => isPresent2(item.getAttribute(indexAttr));
var closestItem = (target, targetAttr, scope) => closestInScope(target, hasItemIndex, scope, targetAttr);
var nextId = 0;
var PanelBarItemComponent = class _PanelBarItemComponent {
  parent;
  eventService;
  element;
  renderer;
  /**
   * Sets the title of the PanelBar item ([see example]({% slug items_panelbar %}#toc-titles)).
   */
  title;
  /**
   * Allows the component to set the `"id"` property to each item.
   * Used to set the `id` attributes of the nested elements and to enable the WAI-ARIA support.
   */
  id = `default-${nextId++}`;
  /**
   * Defines the icon that renders next to the title ([see example]({% slug items_panelbar %}#toc-title-icons)).
   *
   * @default ''
   */
  icon = "";
  /**
   * Defines the icon that renders next to the title by using a custom CSS class
   * ([see example]({% slug items_panelbar %}#toc-title-icons)).
   *
   * @default ''
   */
  iconClass = "";
  /**
   * Defines an SVG icon to render.
   * You can use either an [existing Kendo SVG icon](slug:svgicon_list) or a custom one.
   */
  set svgIcon(icon) {
    if (isDevMode() && icon && this.icon && this.iconClass) {
      throw new Error("Setting both icon/svgIcon and iconClass options at the same time is not supported.");
    }
    this._svgIcon = icon;
  }
  get svgIcon() {
    return this._svgIcon;
  }
  /**
   * Defines the location of the image that displays next to the title
   * ([see example]({% slug items_panelbar %}#toc-title-images)).
   *
   * @default ''
   */
  imageUrl = "";
  /**
   * When set to `true`, disables a PanelBar item ([see example]({% slug items_panelbar %}#toc-disabled-state)).
   *
   * @default false
   */
  disabled = false;
  /**
   * When set to `true`, expands the PanelBar item ([see example]({% slug items_panelbar %}#toc-expanded-state)).
   */
  set expanded(value) {
    const activeState = this.animate ? "active" : "activeWithoutAnimation";
    this.state = value ? activeState : "inactive";
    if (!this.keepContent) {
      this.toggleExpandedChildAnimations(value);
    }
    this._expanded = value;
  }
  get expanded() {
    return this._expanded;
  }
  /**
   * Sets the selected state of a PanelBar item ([see example]({% slug items_panelbar %}#toc-selected-state)).
   *
   * @default false
   */
  selected = false;
  /**
   * Sets the content of the PanelBar item.
   * It is used when the [`items`]({% slug api_layout_panelbarcomponent %}#toc-items) property of the PanelBar is set.
   */
  content;
  /**
   * @hidden
   */
  items;
  /**
   * @hidden
   */
  template;
  header;
  contentWrapper;
  contentHeight;
  contentOverflow;
  keepContent = false;
  childrenItems;
  hasChildItems = false;
  hasItems = false;
  hasContent = false;
  state = "inactive";
  get animate() {
    return this.eventService.animate;
  }
  role = "treeitem";
  titleAttribute = null;
  // eslint-disable-line
  kItemClass = true;
  get kStateExpandedClass() {
    return !this.disabled && this.expanded && (this.hasChildItems || this.hasContent);
  }
  get itemId() {
    return "k-panelbar-" + this.eventService.pbId + "-item-" + this.id;
  }
  get ariaExpanded() {
    return this.hasChildItems || this.hasContent ? !this.disabled && this.expanded : null;
  }
  get ariaSelected() {
    return !this.disabled && this.selected;
  }
  get ariaDisabled() {
    return this.disabled ? true : null;
  }
  get headerClass() {
    return this.parent ? null : true;
  }
  /**
   * @hidden
   */
  get titleTemplate() {
    return this.titleTemplates.length > 0 ? this.titleTemplates.toArray()[0].templateRef : void 0;
  }
  viewChildItems;
  contentItems;
  //ContentChild does not support descendants property, so we use ContentChildren for contentTemplate instead
  contentTemplate;
  titleTemplates;
  focused = false;
  wrapperFocused = false;
  subscriptions = new Subscription(() => {
  });
  _expanded = false;
  level;
  _svgIcon;
  constructor(parent, eventService, element, renderer) {
    this.parent = parent;
    this.eventService = eventService;
    this.element = element;
    this.renderer = renderer;
    this.subscriptions.add(eventService.parent$.subscribe((focused) => this.onWrapperFocusChange(focused)));
    this.subscriptions.add(eventService.keepContent$.subscribe((keepContent) => this.keepContent = keepContent));
    this.wrapperFocused = parent ? parent.focused : false;
    this.level = this.parent ? this.parent.level + 1 : 0;
  }
  /**
   * @hidden
   */
  headerHeight() {
    return this.element.nativeElement.offsetHeight - (this.contentWrapper ? this.contentWrapper.nativeElement.offsetHeight : 0);
  }
  ngOnInit() {
    this.addLevelClass();
  }
  ngAfterContentChecked() {
    this.hasItems = this.items && this.items.filter((item) => !item.hidden).length > 0;
    this.hasChildItems = this.contentItems.filter((item) => item !== this).length > 0 || this.hasItems;
    this.hasContent = this.contentTemplate !== void 0 && this.contentTemplate.length > 0 || this.content !== void 0;
    this.validateConfiguration();
  }
  ngAfterViewChecked() {
    if (this.items) {
      this.childrenItems = this.viewChildItems.toArray();
    } else {
      this.childrenItems = this.contentItems.filter((item) => item !== this);
    }
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  /**
   * @hidden
   */
  onItemAction() {
    if (!this.disabled) {
      this.eventService.onSelect(this);
    }
  }
  /**
   * @hidden
   */
  onItemClick(e) {
    if (!isFocusable(e.target)) {
      this.eventService.itemClick.next({
        item: this.serialize(),
        originalEvent: e
      });
      this.onItemAction();
    }
  }
  /**
   * @hidden
   */
  get iconClasses() {
    if (this.icon) {
      return `${this.icon}`;
    }
  }
  /**
   * @hidden
   */
  get customIconClasses() {
    if (this.iconClass) {
      return `${this.iconClass}`;
    }
  }
  /**
   * @hidden
   */
  get dirInnerCssClasses() {
    const dirClass = this.expanded ? "k-panelbar-collapse" : "k-panelbar-expand";
    return `k-panelbar-toggle ${dirClass}`;
  }
  /**
   * @hidden
   */
  get expanderSVGIcon() {
    return this.expanded ? chevronUpIcon : chevronDownIcon;
  }
  /**
   * @hidden
   */
  serialize() {
    return {
      content: this.content,
      disabled: this.disabled,
      expanded: this.expanded,
      focused: this.focused,
      icon: this.icon,
      iconClass: this.iconClass,
      svgIcon: this.svgIcon,
      id: this.id,
      imageUrl: this.imageUrl,
      selected: this.selected,
      title: this.title,
      children: this.items
    };
  }
  /**
   * @hidden
   */
  subTreeViewItems() {
    let subTree = [];
    this.viewChildItems.forEach((item) => {
      subTree = subTree.concat(item.subTreeViewItems());
      subTree.push(item);
    });
    return subTree;
  }
  /**
   * @hidden
   */
  validateConfiguration() {
    if (isDevMode()) {
      if (this.content && this.contentTemplate !== void 0 && this.contentTemplate.length > 0) {
        throw new Error("Invalid configuration: mixed template components and component property.");
      }
    }
  }
  /**
   * @hidden
   */
  toggleAnimationState(value) {
    if (!this.animate) {
      return;
    }
    this.state = value && this.eventService.expandMode !== PanelBarExpandMode.Single ? "active" : "activeWithoutAnimation";
  }
  /**
   * @hidden
   */
  toggleExpandedChildAnimations(value) {
    if (this.childrenItems) {
      this.childrenItems.forEach((child) => {
        if (child.expanded) {
          child.toggleAnimationState(value);
          child.toggleExpandedChildAnimations(value);
        }
      });
    }
  }
  /**
   * @hidden
   */
  addLevelClass() {
    if (this.level >= 0) {
      this.renderer.addClass(this.element.nativeElement, `k-level-${this.level}`);
    }
  }
  onWrapperFocusChange(focused) {
    this.wrapperFocused = focused;
  }
  static ɵfac = function PanelBarItemComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PanelBarItemComponent)(ɵɵdirectiveInject(_PanelBarItemComponent, 13), ɵɵdirectiveInject(PanelBarService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _PanelBarItemComponent,
    selectors: [["kendo-panelbar-item"]],
    contentQueries: function PanelBarItemComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, _PanelBarItemComponent, 4);
        ɵɵcontentQuery(dirIndex, PanelBarContentDirective, 4);
        ɵɵcontentQuery(dirIndex, PanelBarItemTitleDirective, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentItems = _t);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentTemplate = _t);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.titleTemplates = _t);
      }
    },
    viewQuery: function PanelBarItemComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 5);
        ɵɵviewQuery(_c1, 5);
        ɵɵviewQuery(_PanelBarItemComponent, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.header = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentWrapper = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.viewChildItems = _t);
      }
    },
    hostVars: 12,
    hostBindings: function PanelBarItemComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵhostProperty("id", ctx.itemId);
        ɵɵattribute("role", ctx.role)("title", ctx.titleAttribute)("aria-expanded", ctx.ariaExpanded)("aria-selected", ctx.ariaSelected)("aria-disabled", ctx.ariaDisabled);
        ɵɵclassProp("k-panelbar-item", ctx.kItemClass)("k-expanded", ctx.kStateExpandedClass)("k-panelbar-header", ctx.headerClass);
      }
    },
    inputs: {
      title: "title",
      id: "id",
      icon: "icon",
      iconClass: "iconClass",
      svgIcon: "svgIcon",
      imageUrl: "imageUrl",
      disabled: "disabled",
      expanded: "expanded",
      selected: "selected",
      content: "content",
      items: "items",
      template: "template"
    },
    exportAs: ["kendoPanelbarItem"],
    standalone: true,
    features: [ɵɵStandaloneFeature],
    ngContentSelectors: _c3,
    decls: 8,
    vars: 14,
    consts: [["header", ""], ["contentWrapper", ""], [3, "click"], ["innerCssClass", "k-panelbar-item-icon", 3, "name", "customFontClass", "svgIcon"], ["alt", "", 1, "k-image", "k-panelbar-item-icon", 3, "src"], [1, "k-panelbar-item-text"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "name", "svgIcon", "innerCssClass"], [1, "k-panelbar-group", 3, "overflow", "height"], [1, "k-panelbar-content", 3, "overflow", "height"], [1, "k-panelbar-group"], [1, "k-panelbar-content"], [3, "title", "id", "icon", "iconClass", "svgIcon", "imageUrl", "selected", "expanded", "disabled", "template", "items", "content"]],
    template: function PanelBarItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵprojectionDef(_c2);
        ɵɵelementStart(0, "span", 2, 0);
        ɵɵlistener("click", function PanelBarItemComponent_Template_span_click_0_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onItemClick($event));
        });
        ɵɵtemplate(2, PanelBarItemComponent_Conditional_2_Template, 1, 3, "kendo-icon-wrapper", 3)(3, PanelBarItemComponent_Conditional_3_Template, 1, 1, "img", 4)(4, PanelBarItemComponent_Conditional_4_Template, 2, 1, "span", 5)(5, PanelBarItemComponent_Conditional_5_Template, 1, 16, null, 6)(6, PanelBarItemComponent_Conditional_6_Template, 1, 3, "kendo-icon-wrapper", 7);
        ɵɵelementEnd();
        ɵɵtemplate(7, PanelBarItemComponent_Conditional_7_Template, 3, 1);
      }
      if (rf & 2) {
        ɵɵclassProp("k-link", true)("k-selected", !ctx.disabled && ctx.selected)("k-focus", ctx.focused && ctx.wrapperFocused)("k-disabled", ctx.disabled);
        ɵɵadvance(2);
        ɵɵconditional(ctx.icon || ctx.iconClass || ctx.svgIcon ? 2 : -1);
        ɵɵadvance();
        ɵɵconditional(ctx.imageUrl ? 3 : -1);
        ɵɵadvance();
        ɵɵconditional(!ctx.titleTemplate ? 4 : -1);
        ɵɵadvance();
        ɵɵconditional(ctx.titleTemplate ? 5 : -1);
        ɵɵadvance();
        ɵɵconditional(ctx.hasChildItems || ctx.hasContent ? 6 : -1);
        ɵɵadvance();
        ɵɵconditional(!ctx.disabled && ctx.expanded || ctx.keepContent !== false ? 7 : -1);
      }
    },
    dependencies: [IconWrapperComponent, NgTemplateOutlet],
    encapsulation: 2,
    data: {
      animation: [trigger("toggle", [state("inactive", style({
        display: "none"
      })), transition("* => active", [style({
        overflow: "hidden",
        display: "block",
        height: 0
      }), animate(200, style({
        height: AUTO_STYLE
      }))]), transition("active => *", [style({
        overflow: "hidden",
        height: AUTO_STYLE
      }), animate(200, style({
        height: 0,
        display: "none"
      }))])])]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PanelBarItemComponent, [{
    type: Component,
    args: [{
      animations: [trigger("toggle", [state("inactive", style({
        display: "none"
      })), transition("* => active", [style({
        overflow: "hidden",
        display: "block",
        height: 0
      }), animate(200, style({
        height: AUTO_STYLE
      }))]), transition("active => *", [style({
        overflow: "hidden",
        height: AUTO_STYLE
      }), animate(200, style({
        height: 0,
        display: "none"
      }))])])],
      exportAs: "kendoPanelbarItem",
      selector: "kendo-panelbar-item",
      template: `
            <span
              #header
              [class.k-link]="true"
              [class.k-selected]="!disabled && selected"
              [class.k-focus]="focused && wrapperFocused"
              [class.k-disabled]="disabled"
              (click)="onItemClick($event)">
              @if (icon || iconClass || svgIcon) {
                <kendo-icon-wrapper
                  [name]="iconClasses"
                  [customFontClass]="customIconClasses"
                  [svgIcon]="svgIcon"
                  innerCssClass="k-panelbar-item-icon"
                  >
                </kendo-icon-wrapper>
              }
              @if (imageUrl) {
                <img
                  class="k-image k-panelbar-item-icon"
                  [src]="imageUrl"
                  alt="">
              }
              @if (!titleTemplate) {
                <span class="k-panelbar-item-text">{{title}}</span>
              }
              @if (titleTemplate) {
                <ng-template
                  [ngTemplateOutlet]="titleTemplate"
                [ngTemplateOutletContext]="{
                    item: {
                        title: title,
                        id: id,
                        icon: icon,
                        iconClass: iconClass,
                        svgIcon: svgIcon,
                        imageUrl: imageUrl,
                        selected: selected,
                        expanded: expanded,
                        disabled: disabled,
                        focused: focused,
                        content: content
                    }
                }"></ng-template>
            }
            @if (hasChildItems || hasContent) {
              <kendo-icon-wrapper
                [name]="expanded ? 'chevron-up' : 'chevron-down'"
                [svgIcon]="expanderSVGIcon"
                [innerCssClass]="dirInnerCssClasses"
                >
              </kendo-icon-wrapper>
            }
            </span>
            @if ((!disabled && expanded) || keepContent !== false) {
              @defer (when ((!disabled && expanded && keepContent !== true) || keepContent === true); prefetch on idle) {
                <div
                  #contentWrapper
                  [@toggle]="state"
                  [attr.role]="'group'"
                  [attr.aria-hidden]="!disabled && !expanded"
                  >
                @if (hasChildItems && !items?.length) {
                  <div
                    [style.overflow]="contentOverflow"
                    [style.height]="contentHeight"
                    class="k-panelbar-group"
                    >
                    <ng-content select="kendo-panelbar-item"></ng-content>
                  </div>
                }
                @if (hasContent && !content) {
                  <div
                    [style.overflow]="contentOverflow"
                    [style.height]="contentHeight"
                    class="k-panelbar-content">
                    <ng-template
                      [ngTemplateOutlet]="contentTemplate.first.templateRef"
                        [ngTemplateOutletContext]="{
                            $implicit: {
                                title: title,
                                id: id,
                                icon: icon,
                                imageUrl: imageUrl,
                                disabled: disabled,
                                content: content
                            }
                        }">
                  </ng-template>
                </div>
              }
              @if (hasItems) {
                <div
                  [style.overflow]="contentOverflow"
                  [style.height]="contentHeight"
                  class="k-panelbar-group">
                  @for (item of items; track item) {
                    @if (!item.hidden) {
                      <kendo-panelbar-item
                        [title]="item.title"
                        [id]="item.id"
                        [icon]="item.icon"
                        [iconClass]="item.iconClass"
                        [svgIcon]="item.svgIcon"
                        [imageUrl]="item.imageUrl"
                        [selected]="!!item.selected"
                        [expanded]="!!item.expanded"
                        [disabled]="!!item.disabled"
                        [template]="template"
                        [items]="item.children"
                        [content]="item.content">
                      </kendo-panelbar-item>
                    }
                  }
                </div>
              }
              @if (content) {
                <div
                  [style.overflow]="contentOverflow"
                  [style.height]="contentHeight"
                  class="k-panelbar-content">
                  <ng-template
                    [ngTemplateOutlet]="template"
                        [ngTemplateOutletContext]="{
                            $implicit: {
                                title: title,
                                id: id,
                                icon: icon,
                                imageUrl: imageUrl,
                                disabled: disabled,
                                content: content
                            }
                        }">
                </ng-template>
                @if (!template) {
                  {{content}}
                }
              </div>
            }
            </div>
              }
            }
    `,
      standalone: true,
      imports: [IconWrapperComponent, NgTemplateOutlet]
    }]
  }], () => [{
    type: PanelBarItemComponent,
    decorators: [{
      type: SkipSelf
    }, {
      type: Host
    }, {
      type: Optional
    }]
  }, {
    type: PanelBarService
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }], {
    title: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    iconClass: [{
      type: Input
    }],
    svgIcon: [{
      type: Input
    }],
    imageUrl: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    expanded: [{
      type: Input
    }],
    selected: [{
      type: Input
    }],
    content: [{
      type: Input
    }],
    items: [{
      type: Input
    }],
    template: [{
      type: Input
    }],
    header: [{
      type: ViewChild,
      args: ["header", {
        static: false
      }]
    }],
    contentWrapper: [{
      type: ViewChild,
      args: ["contentWrapper", {
        static: false
      }]
    }],
    role: [{
      type: HostBinding,
      args: ["attr.role"]
    }],
    titleAttribute: [{
      type: HostBinding,
      args: ["attr.title"]
    }],
    kItemClass: [{
      type: HostBinding,
      args: ["class.k-panelbar-item"]
    }],
    kStateExpandedClass: [{
      type: HostBinding,
      args: ["class.k-expanded"]
    }],
    itemId: [{
      type: HostBinding,
      args: ["id"]
    }],
    ariaExpanded: [{
      type: HostBinding,
      args: ["attr.aria-expanded"]
    }],
    ariaSelected: [{
      type: HostBinding,
      args: ["attr.aria-selected"]
    }],
    ariaDisabled: [{
      type: HostBinding,
      args: ["attr.aria-disabled"]
    }],
    headerClass: [{
      type: HostBinding,
      args: ["class.k-panelbar-header"]
    }],
    viewChildItems: [{
      type: ViewChildren,
      args: [PanelBarItemComponent]
    }],
    contentItems: [{
      type: ContentChildren,
      args: [PanelBarItemComponent]
    }],
    contentTemplate: [{
      type: ContentChildren,
      args: [PanelBarContentDirective, {
        descendants: false
      }]
    }],
    titleTemplates: [{
      type: ContentChildren,
      args: [PanelBarItemTitleDirective, {
        descendants: false
      }]
    }]
  });
})();
var PanelBarItemTemplateDirective = class _PanelBarItemTemplateDirective {
  templateRef;
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static ɵfac = function PanelBarItemTemplateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PanelBarItemTemplateDirective)(ɵɵdirectiveInject(TemplateRef, 8));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _PanelBarItemTemplateDirective,
    selectors: [["", "kendoPanelBarItemTemplate", ""]],
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PanelBarItemTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoPanelBarItemTemplate]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
var PreventableEvent2 = class {
  prevented = false;
  /**
   * Prevents the default action for a specified event.
   * The source component suppresses the built-in behavior that follows the event.
   */
  preventDefault() {
    this.prevented = true;
  }
  /**
   * Returns `true` if the event was prevented by any of its subscribers.
   *
   * @returns `true` if the default action was prevented. Otherwise, returns `false`.
   */
  isDefaultPrevented() {
    return this.prevented;
  }
  /**
   * @hidden
   */
  constructor(args) {
    Object.assign(this, args);
  }
};
var PanelBarCollapseEvent = class extends PreventableEvent2 {
  /**
   * Defines the item that will be collapsed.
   */
  item;
};
var PanelBarExpandEvent = class extends PreventableEvent2 {
  /**
   * Defines the item that will be expanded.
   */
  item;
};
var PanelBarSelectEvent = class extends PreventableEvent2 {
  /**
   * Defines the item that will be selected.
   */
  item;
};
var PanelBarStateChangeEvent = class {
  /**
   * Defines a collection of all modified items.
   */
  items;
};
var PanelBarItemClickEvent = class {
  /**
   * Defines the clicked item.
   */
  item;
  /**
   * Defines the DOM event that triggered the `itemClick` event.
   */
  originalEvent;
};
var PanelBarComponent = class _PanelBarComponent {
  localization;
  /**
   * Sets the expand mode of the PanelBar through the `PanelBarExpandMode` enum ([see example]({% slug expandmodes_panelbar %})).
   *
   * @default 'multiple
   */
  expandMode = PanelBarExpandMode.Default;
  /**
   * Allows the PanelBar to modify the selected state of the items.
   *
   * @default true
   */
  selectable = true;
  /**
   * Sets the animate state of the PanelBar ([see example]({% slug animations_panelbar %})).
   *
   * @default true
   */
  animate = true;
  /**
   * Sets the height of the component when the `"full"` expand mode is used.
   * This option is ignored when the `"multiple"` or `"single"` expand modes are used.
   *
   * @default '400px'
   */
  height = "400px";
  /**
  * Controls how the PanelBar renders item content.
  *
  * The available options are:
  *
  * * `true`&mdash;Renders all items' content and persists them in the DOM.
  * * `false`&mdash;Removes collapsed items' content from the DOM.
  * * `"loadOnDemand"`&mdash;Loads items' content only when expanded for the first time. Collapsed items' content is not rendered until the item is expanded.
  *
  * For more information, refer to the [Rendering Modes](slug:rendering_panelbar) article.
  *
  * @default false
  */
  get keepItemContent() {
    return this._keepItemContent;
  }
  set keepItemContent(keepItemContent) {
    this._keepItemContent = keepItemContent;
    this.eventService.onKeepContent(keepItemContent);
  }
  /**
   * Sets the items of the PanelBar as an array of `PanelBarItemModel` instances
   * ([see example]({% slug items_panelbar %})).
   */
  set items(data) {
    if (data) {
      this._items = parsePanelBarItems(data);
    }
  }
  get items() {
    return this._items;
  }
  /**
   * Fires when the state of the PanelBar changes.
   * This event is triggered when an item is selected, expanded, or collapsed.
   * ([see example](slug:routing_panelbar#using-router-service)).
   * The event data contains a collection of all items that are modified.
   */
  stateChange = new EventEmitter();
  /**
   * Fires when an item is about to be selected.
   * This event is preventable. If you cancel it, the item will not be selected
   * ([see example]({% slug events_panelbar %})).
   */
  select = new EventEmitter();
  /**
   * Fires when an item is about to be expanded.
   * This event is preventable. If you cancel it, the item will remain collapsed
   * ([see example]({% slug events_panelbar %})).
   */
  expand = new EventEmitter();
  /**
   * Fires when an item is about to be collapsed.
   * This event is preventable. If you cancel it, the item will remain expanded
   * ([see example]({% slug events_panelbar %})).
   */
  collapse = new EventEmitter();
  /**
   * Fires when an item is clicked ([see example]({% slug events_panelbar %})).
   */
  itemClick = new EventEmitter();
  hostClasses = true;
  tabIndex = 0;
  role = "tree";
  activeDescendant = "";
  get hostHeight() {
    return this.expandMode === PanelBarExpandMode.Full ? this.height : "auto";
  }
  get overflow() {
    return this.expandMode === PanelBarExpandMode.Full ? "hidden" : "visible";
  }
  get dir() {
    return this.localization.rtl ? "rtl" : "ltr";
  }
  template;
  contentItems;
  contentChildItems;
  viewChildItems;
  /**
   * @hidden
   */
  showLicenseWatermark = false;
  /**
   * @hidden
   */
  licenseMessage;
  allItems;
  childrenItems;
  isViewInit = true;
  focused = false;
  _items;
  _keepItemContent = false;
  elementRef;
  eventService;
  keyBindings;
  subs = new Subscription();
  constructor(elementRef, eventService, localization) {
    this.localization = localization;
    const isValid = A(packageMetadata);
    this.licenseMessage = getLicenseMessage(packageMetadata);
    this.showLicenseWatermark = shouldShowValidationUI(isValid);
    this.keyBindings = this.computedKeys;
    this.elementRef = elementRef;
    this.eventService = eventService;
    this.subs.add(this.eventService.children$.subscribe((event) => this.onItemAction(event)));
    this.subs.add(this.eventService.itemClick.subscribe((ev) => this.itemClick.emit(ev)));
  }
  /**
   * @hidden
   */
  invertKeys(original, inverted) {
    return this.localization.rtl ? inverted : original;
  }
  get computedKeys() {
    return {
      [Keys.Space]: () => this.selectFocusedItem(),
      [Keys.Enter]: () => this.selectFocusedItem(),
      [Keys.NumpadEnter]: () => this.selectFocusedItem(),
      [Keys.ArrowUp]: () => this.focusPreviousItem(),
      [this.invertKeys(Keys.ArrowLeft, Keys.ArrowRight)]: () => this.collapseItem(),
      [Keys.ArrowDown]: () => this.focusNextItem(),
      [this.invertKeys(Keys.ArrowRight, Keys.ArrowLeft)]: () => this.expandItem(),
      [Keys.End]: () => this.focusLastItem(),
      [Keys.Home]: () => this.focusFirstItem()
    };
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
  ngOnInit() {
    this.subs.add(this.localization.changes.subscribe(() => this.keyBindings = this.computedKeys));
    this.eventService.animate = this.animate;
    this.eventService.expandMode = this.expandMode;
  }
  ngAfterViewChecked() {
    if (this.items) {
      this.childrenItems = this.viewChildItems.toArray();
      this.allItems = this.viewItems;
    } else {
      this.childrenItems = this.contentChildItems.toArray();
      this.allItems = this.contentItems.toArray();
    }
    if (this.isViewInit && this.childrenItems.length) {
      this.isViewInit = false;
      setTimeout(() => this.updateChildrenHeight());
    }
    this.validateConfiguration();
  }
  ngOnChanges(changes) {
    if (changes["height"] || changes["expandMode"] || changes["items"]) {
      if (this.childrenItems) {
        setTimeout(this.updateChildrenHeight);
      }
    }
    if (changes["animate"]) {
      this.eventService.animate = this.animate;
    }
    if (changes["expandMode"]) {
      this.eventService.expandMode = this.expandMode;
    }
  }
  get templateRef() {
    return this.template ? this.template.templateRef : void 0;
  }
  /**
   * @hidden
   */
  onComponentClick(event) {
    const itemClicked = this.visibleItems().some((item) => {
      return item.header.nativeElement.contains(event.target);
    });
    if (!isFocusable(event.target) && !this.focused && itemClicked) {
      this.elementRef.nativeElement.focus();
    }
  }
  /**
   * @hidden
   */
  onComponentFocus() {
    this.eventService.onFocus();
    this.focused = true;
    if (this.allItems.length > 0) {
      const visibleItems = this.visibleItems();
      const focusedItems = visibleItems.filter((item) => item.focused);
      if (!focusedItems.length && visibleItems.length > 0) {
        visibleItems[0].focused = true;
        this.activeDescendant = visibleItems[0].itemId;
      }
    }
  }
  /**
   * @hidden
   */
  onComponentBlur() {
    this.eventService.onBlur();
    this.focused = false;
    this.activeDescendant = "";
  }
  /**
   * @hidden
   */
  onComponentKeyDown(event) {
    if (event.target === this.elementRef.nativeElement) {
      const code = normalizeKeys(event);
      if (code === Keys.Space || code === Keys.ArrowUp || code === Keys.ArrowDown || code === Keys.ArrowLeft || code === Keys.ArrowRight || code === Keys.Home || code === Keys.End || code === Keys.PageUp || code === Keys.PageDown) {
        event.preventDefault();
      }
      const handler = this.keyBindings[code];
      if (handler) {
        handler();
      }
    }
  }
  /**
   * @hidden
   */
  emitEvent(event, item) {
    let eventArgs;
    switch (event) {
      case "select":
        eventArgs = new PanelBarSelectEvent();
        break;
      case "collapse":
        eventArgs = new PanelBarCollapseEvent();
        break;
      default:
        eventArgs = new PanelBarExpandEvent();
        break;
    }
    eventArgs.item = item.serialize();
    this[event].emit(eventArgs);
    return eventArgs;
  }
  get viewItems() {
    let treeItems = [];
    this.viewChildItems.toArray().forEach((item) => {
      treeItems.push(item);
      treeItems = treeItems.concat(item.subTreeViewItems());
    });
    return treeItems;
  }
  validateConfiguration() {
    if (isDevMode()) {
      if (this.items && this.contentItems && this.contentItems.length > 0) {
        throw new Error("Invalid configuration: mixed template components and items property.");
      }
    }
  }
  updateChildrenHeight = () => {
    let childrenHeight = 0;
    const panelbarHeight = this.elementRef.nativeElement.offsetHeight;
    const contentOverflow = this.expandMode === PanelBarExpandMode.Full ? "auto" : "visible";
    this.childrenItems.forEach((item) => {
      childrenHeight += item.headerHeight();
    });
    this.childrenItems.forEach((item) => {
      item.contentHeight = PanelBarExpandMode.Full === this.expandMode ? panelbarHeight - childrenHeight + "px" : "auto";
      item.contentOverflow = contentOverflow;
    });
  };
  onItemAction(item) {
    if (!item) {
      return;
    }
    const modifiedItems = new Array();
    const selectPreventedItems = [];
    let isSelectPrevented = false;
    if (this.selectable && !item.selected) {
      isSelectPrevented = this.emitEvent("select", item).isDefaultPrevented();
    }
    if (!isSelectPrevented) {
      this.allItems.forEach((currentItem) => {
        let selectedState = currentItem === item;
        const focusedState = selectedState;
        selectedState = this.selectable ? selectedState : currentItem.selected;
        if (currentItem.selected !== selectedState || currentItem.focused !== focusedState) {
          currentItem.selected = selectedState;
          currentItem.focused = focusedState;
          this.activeDescendant = focusedState ? currentItem.itemId : "";
          modifiedItems.push(currentItem);
        }
      });
    } else {
      selectPreventedItems.push(item);
      this.allItems.forEach((currentItem) => {
        const focusedState = currentItem === item;
        if (currentItem.focused !== focusedState) {
          currentItem.focused = focusedState;
          this.activeDescendant = focusedState ? currentItem.itemId : "";
          modifiedItems.push(currentItem);
        }
      });
    }
    if (this.expandMode === PanelBarExpandMode.Multiple) {
      if ((item.hasChildItems || item.hasContent) && !selectPreventedItems.includes(item)) {
        const isEventPrevented = item.expanded ? this.emitEvent("collapse", item).isDefaultPrevented() : this.emitEvent("expand", item).isDefaultPrevented();
        if (!isEventPrevented) {
          item.expanded = !item.expanded;
          if (modifiedItems.indexOf(item) < 0) {
            modifiedItems.push(item);
          }
        }
      }
    } else {
      const siblings = item.parent ? item.parent.childrenItems : this.childrenItems;
      let preventedCollapseItem;
      const expandedItems = [];
      if ((item.hasChildItems || item.hasContent) && !selectPreventedItems.includes(item)) {
        siblings.forEach((currentItem) => {
          const expandedState = currentItem === item;
          if (currentItem.expanded !== expandedState) {
            const isEventPrevented = currentItem.expanded ? this.emitEvent("collapse", currentItem).isDefaultPrevented() : this.emitEvent("expand", currentItem).isDefaultPrevented();
            if (!isEventPrevented) {
              currentItem.expanded = expandedState;
              if (currentItem.expanded) {
                expandedItems.push(currentItem);
              }
              if (modifiedItems.indexOf(currentItem) < 0) {
                modifiedItems.push(currentItem);
              }
            } else if (isEventPrevented && currentItem.expanded) {
              preventedCollapseItem = currentItem;
            }
          } else if (currentItem.expanded === expandedState && expandedState) {
            const isCollapsePrevented = this.emitEvent("collapse", currentItem).isDefaultPrevented();
            if (!isCollapsePrevented) {
              currentItem.expanded = !currentItem.expanded;
              if (modifiedItems.indexOf(currentItem) < 0) {
                modifiedItems.push(currentItem);
              }
            }
          }
        });
        expandedItems.forEach((item2) => {
          if (preventedCollapseItem && item2.id !== preventedCollapseItem.id) {
            item2.expanded = false;
            if (isDevMode()) {
              const expandMode = PanelBarExpandMode[this.expandMode].toLowerCase();
              console.warn(`
                            The ${expandMode} expandMode allows the expansion of only one item at a time.
                            See https://www.telerik.com/kendo-angular-ui/components/layout/panelbar/expand-modes/`);
            }
          }
        });
      }
    }
    if (modifiedItems.length > 0) {
      const eventArgs = new PanelBarStateChangeEvent();
      eventArgs.items = modifiedItems.map((currentItem) => currentItem.serialize());
      this.stateChange.emit(eventArgs);
    }
  }
  isVisible(item) {
    const visibleItems = this.visibleItems();
    return visibleItems.some((i) => i === item);
  }
  getVisibleParent(item) {
    const visibleItems = this.visibleItems();
    if (!item.parent) {
      return item;
    }
    return visibleItems.some((i) => i === item.parent) ? item.parent : this.getVisibleParent(item.parent);
  }
  focusItem(action) {
    const visibleItems = this.visibleItems();
    let currentIndex = visibleItems.findIndex((item) => item.focused);
    let currentItem = visibleItems[currentIndex];
    let nextItem;
    if (currentIndex === -1) {
      const focusedItem = this.allItems.find((item) => item.focused);
      focusedItem.focused = false;
      currentItem = this.getVisibleParent(focusedItem);
      currentIndex = visibleItems.findIndex((item) => item === currentItem);
    }
    switch (action) {
      case "lastItem":
        nextItem = visibleItems[visibleItems.length - 1];
        break;
      case "firstItem":
        nextItem = visibleItems[0];
        break;
      case "nextItem":
        nextItem = visibleItems[currentIndex < visibleItems.length - 1 ? currentIndex + 1 : 0];
        break;
      case "previousItem":
        nextItem = visibleItems[currentIndex > 0 ? currentIndex - 1 : visibleItems.length - 1];
        break;
      default:
    }
    if (currentItem && nextItem && currentItem !== nextItem) {
      this.moveFocus(currentItem, nextItem);
    }
  }
  moveFocus(from, to) {
    if (!from || !to) {
      return;
    }
    from.focused = false;
    to.focused = true;
    this.activeDescendant = to.itemId;
    const modifiedItems = new Array(from.serialize(), to.serialize());
    const eventArgs = new PanelBarStateChangeEvent();
    eventArgs.items = modifiedItems;
    this.stateChange.emit(eventArgs);
  }
  focusLastItem() {
    this.focusItem("lastItem");
  }
  focusFirstItem() {
    this.focusItem("firstItem");
  }
  focusNextItem() {
    this.focusItem("nextItem");
  }
  focusPreviousItem() {
    this.focusItem("previousItem");
  }
  expandItem() {
    let currentItem = this.allItems.filter((item) => item.focused)[0];
    if (!this.isVisible(currentItem)) {
      currentItem.focused = false;
      currentItem = this.getVisibleParent(currentItem);
    }
    if (currentItem.hasChildItems || currentItem.hasContent) {
      if (!currentItem.expanded) {
        this.onItemAction(currentItem);
      } else if (currentItem.hasChildItems) {
        const firstChildIndex = currentItem.childrenItems.findIndex((item) => !item.disabled);
        if (firstChildIndex > -1) {
          this.moveFocus(currentItem, currentItem.childrenItems[firstChildIndex]);
        }
      }
    }
  }
  collapseItem() {
    const currentItem = this.allItems.filter((item) => item.focused)[0];
    if (currentItem.expanded) {
      this.onItemAction(currentItem);
    } else if (currentItem.parent) {
      this.moveFocus(currentItem, currentItem.parent);
    }
  }
  selectFocusedItem() {
    let focusedItem = this.allItems.filter((item) => item.focused)[0];
    if (!this.isVisible(focusedItem)) {
      focusedItem.focused = false;
      focusedItem = this.getVisibleParent(focusedItem);
    }
    if (focusedItem) {
      focusedItem.onItemAction();
    }
  }
  visibleItems() {
    return this.flatVisibleItems(this.childrenItems);
  }
  flatVisibleItems(listOfItems = new Array(), flattedItems = new Array()) {
    listOfItems.forEach((item) => {
      flattedItems.push(item);
      if (item.expanded && item.hasChildItems) {
        this.flatVisibleItems(item.childrenItems, flattedItems);
      }
    });
    return flattedItems;
  }
  static ɵfac = function PanelBarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PanelBarComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(PanelBarService), ɵɵdirectiveInject(LocalizationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _PanelBarComponent,
    selectors: [["kendo-panelbar"]],
    contentQueries: function PanelBarComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, PanelBarItemTemplateDirective, 5);
        ɵɵcontentQuery(dirIndex, PanelBarItemComponent, 5);
        ɵɵcontentQuery(dirIndex, PanelBarItemComponent, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.template = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentItems = _t);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentChildItems = _t);
      }
    },
    viewQuery: function PanelBarComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(PanelBarItemComponent, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.viewChildItems = _t);
      }
    },
    hostVars: 10,
    hostBindings: function PanelBarComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("click", function PanelBarComponent_click_HostBindingHandler($event) {
          return ctx.onComponentClick($event);
        })("focus", function PanelBarComponent_focus_HostBindingHandler() {
          return ctx.onComponentFocus();
        })("blur", function PanelBarComponent_blur_HostBindingHandler() {
          return ctx.onComponentBlur();
        })("keydown", function PanelBarComponent_keydown_HostBindingHandler($event) {
          return ctx.onComponentKeyDown($event);
        });
      }
      if (rf & 2) {
        ɵɵattribute("tabIndex", ctx.tabIndex)("role", ctx.role)("aria-activedescendant", ctx.activeDescendant)("dir", ctx.dir);
        ɵɵstyleProp("height", ctx.hostHeight)("overflow", ctx.overflow);
        ɵɵclassProp("k-panelbar", ctx.hostClasses);
      }
    },
    inputs: {
      expandMode: "expandMode",
      selectable: "selectable",
      animate: "animate",
      height: "height",
      keepItemContent: "keepItemContent",
      items: "items"
    },
    outputs: {
      stateChange: "stateChange",
      select: "select",
      expand: "expand",
      collapse: "collapse",
      itemClick: "itemClick"
    },
    exportAs: ["kendoPanelbar"],
    standalone: true,
    features: [ɵɵProvidersFeature([PanelBarService, LocalizationService, {
      provide: L10N_PREFIX,
      useValue: "kendo.panelbar"
    }]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    ngContentSelectors: _c3,
    decls: 3,
    vars: 3,
    consts: [["kendoWatermarkOverlay", "", 3, "licenseMessage"], [3, "title", "id", "icon", "iconClass", "svgIcon", "imageUrl", "selected", "expanded", "disabled", "template", "items", "content"]],
    template: function PanelBarComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef(_c2);
        ɵɵtemplate(0, PanelBarComponent_Conditional_0_Template, 1, 0)(1, PanelBarComponent_Conditional_1_Template, 2, 0)(2, PanelBarComponent_Conditional_2_Template, 1, 1, "div", 0);
      }
      if (rf & 2) {
        ɵɵconditional(ctx.contentChildItems && !ctx.items ? 0 : -1);
        ɵɵadvance();
        ɵɵconditional((ctx.items == null ? null : ctx.items.length) ? 1 : -1);
        ɵɵadvance();
        ɵɵconditional(ctx.showLicenseWatermark ? 2 : -1);
      }
    },
    dependencies: [PanelBarItemComponent, WatermarkOverlayComponent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PanelBarComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoPanelbar",
      providers: [PanelBarService, LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.panelbar"
      }],
      selector: "kendo-panelbar",
      template: `
        @if (contentChildItems && !items) {
          <ng-content select="kendo-panelbar-item"></ng-content>
        }
        @if (items?.length) {
          @for (item of items; track item) {
            @if (!item.hidden) {
              <kendo-panelbar-item
                [title]="item.title"
                [id]="item.id"
                [icon]="item.icon"
                [iconClass]="item.iconClass"
                [svgIcon]="item.svgIcon"
                [imageUrl]="item.imageUrl"
                [selected]="!!item.selected"
                [expanded]="!!item.expanded"
                [disabled]="!!item.disabled"
                [template]="templateRef"
                [items]="item.children"
                [content]="item.content"
                >
              </kendo-panelbar-item>
            }
          }
        }

        @if (showLicenseWatermark) {
          <div kendoWatermarkOverlay [licenseMessage]="licenseMessage"></div>
        }
        `,
      standalone: true,
      imports: [PanelBarItemComponent, WatermarkOverlayComponent]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: PanelBarService
  }, {
    type: LocalizationService
  }], {
    expandMode: [{
      type: Input
    }],
    selectable: [{
      type: Input
    }],
    animate: [{
      type: Input
    }],
    height: [{
      type: Input
    }],
    keepItemContent: [{
      type: Input
    }],
    items: [{
      type: Input
    }],
    stateChange: [{
      type: Output
    }],
    select: [{
      type: Output
    }],
    expand: [{
      type: Output
    }],
    collapse: [{
      type: Output
    }],
    itemClick: [{
      type: Output
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class.k-panelbar"]
    }],
    tabIndex: [{
      type: HostBinding,
      args: ["attr.tabIndex"]
    }],
    role: [{
      type: HostBinding,
      args: ["attr.role"]
    }],
    activeDescendant: [{
      type: HostBinding,
      args: ["attr.aria-activedescendant"]
    }],
    hostHeight: [{
      type: HostBinding,
      args: ["style.height"]
    }],
    overflow: [{
      type: HostBinding,
      args: ["style.overflow"]
    }],
    dir: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    template: [{
      type: ContentChild,
      args: [PanelBarItemTemplateDirective, {
        static: false
      }]
    }],
    contentItems: [{
      type: ContentChildren,
      args: [PanelBarItemComponent, {
        descendants: true
      }]
    }],
    contentChildItems: [{
      type: ContentChildren,
      args: [PanelBarItemComponent]
    }],
    viewChildItems: [{
      type: ViewChildren,
      args: [PanelBarItemComponent]
    }],
    onComponentClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }],
    onComponentFocus: [{
      type: HostListener,
      args: ["focus"]
    }],
    onComponentBlur: [{
      type: HostListener,
      args: ["blur"]
    }],
    onComponentKeyDown: [{
      type: HostListener,
      args: ["keydown", ["$event"]]
    }]
  });
})();
var shouldTogglePrev = (keyCode, prev, next) => {
  const leftArrow = keyCode === Keys.ArrowLeft;
  const upArrow = keyCode === Keys.ArrowUp;
  const collapsePrev = !prev.collapsed && !next.collapsed && (leftArrow || upArrow);
  const expandPrev = prev.collapsed && !(leftArrow || upArrow);
  return collapsePrev || expandPrev;
};
var shouldToggleNext = (keyCode, prev, next) => {
  const leftArrow = keyCode === Keys.ArrowLeft;
  const upArrow = keyCode === Keys.ArrowUp;
  const collapseNext = !next.collapsed && !prev.collapsed && !(leftArrow || upArrow);
  const expandNext = next.collapsed && (leftArrow || upArrow);
  return collapseNext || expandNext;
};
var shouldToggleOrResize = (keyCode, orientation) => {
  const isHorizontal = orientation === "horizontal";
  const isHorizontalChange = isHorizontal && (keyCode === Keys.ArrowLeft || keyCode === Keys.ArrowRight);
  const isVerticalChange = !isHorizontal && (keyCode === Keys.ArrowUp || keyCode === Keys.ArrowDown);
  return isHorizontalChange || isVerticalChange;
};
var MAX_PANE_HEIGHT = 33554400;
var SplitterService = class _SplitterService {
  zone;
  panes;
  splitterBars;
  layoutChange = new EventEmitter();
  resizeStep = 10;
  fixedHeight;
  constructor(zone) {
    this.zone = zone;
  }
  tryToggle(paneIndex) {
    const pane = this.pane(paneIndex);
    if (pane.collapsible) {
      pane.collapsed = !pane.collapsed;
      pane.collapsedChange.emit(pane.collapsed);
      this.emit(this.layoutChange, {});
      if (pane.collapsed) {
        pane.detectChanges();
      }
    }
    const notCollapsed = this.panes.filter((p) => !p.collapsed);
    const allHaveFixedSize = notCollapsed.every((p) => p.fixedSize);
    notCollapsed.filter((p) => p.fixedSize).forEach((pane2) => {
      pane2.forceExpand = allHaveFixedSize ? true : false;
    });
    return pane.collapsible;
  }
  togglePane(keyCode, index) {
    const prev = this.pane(index);
    const next = this.pane(index + 1);
    if (shouldTogglePrev(keyCode, prev, next)) {
      this.tryToggle(index);
    } else if (shouldToggleNext(keyCode, prev, next)) {
      this.tryToggle(index + 1);
    }
  }
  resizePane(keyCode, index) {
    const state2 = this.dragState(index);
    const direction = keyCode === Keys.ArrowLeft || keyCode === (this.rtl ? Keys.ArrowDown : Keys.ArrowUp);
    let step = direction ? -this.resizeStep : this.resizeStep;
    if (this.rtl) {
      step = -step;
    }
    this.setSize(state2, step);
  }
  toggleContentOverlay(index, show) {
    this.pane(index).toggleOverlay(show);
    this.pane(index + 1).toggleOverlay(show);
  }
  dragState(splitbarIndex) {
    const prev = this.pane(splitbarIndex);
    const next = this.pane(splitbarIndex + 1);
    const total = prev.computedSize + next.computedSize;
    const px = (s) => this.toPixels(s);
    return {
      prev: {
        index: splitbarIndex,
        initialSize: prev.computedSize,
        min: px(prev.min) || total - px(next.max) || 0,
        max: px(prev.max) || total - px(next.min) || total
      },
      next: {
        index: splitbarIndex + 1,
        initialSize: next.computedSize,
        min: px(next.min) || total - px(prev.max) || 0,
        max: px(next.max) || total - px(prev.min) || total
      }
    };
  }
  setSize(state2, delta) {
    const clamp = (min, max, v) => Math.min(max, Math.max(min, v));
    const resize = (paneState, change, modifyMax = false) => {
      const pane = this.pane(paneState.index);
      const splitterSize = this.containerSize();
      const newSize = clamp(paneState.min, modifyMax ? MAX_PANE_HEIGHT : paneState.max, paneState.initialSize + change);
      let size = "";
      if (this.isPercent(pane.size)) {
        size = 100 * newSize / splitterSize + "%";
      } else {
        size = newSize + "px";
      }
      pane.size = size;
      pane.isResized = true;
      this.emit(pane.sizeChange, size);
    };
    const prevPane = this.pane(state2.prev.index);
    const nextPane = this.pane(state2.next.index);
    const canResizeBothPanes = this.panes.length > 2;
    const modifyPrevMax = prevPane.orientation === "vertical" && !this.fixedHeight && !prevPane.max;
    const modifyNextMax = prevPane.orientation === "vertical" && !this.fixedHeight && !nextPane.max;
    if (prevPane.fixedSize && nextPane.fixedSize || canResizeBothPanes) {
      const bothVertical = prevPane.orientation === "vertical" && nextPane.orientation === "vertical";
      if (bothVertical) {
        if (modifyNextMax) {
          resize(state2.prev, delta, modifyPrevMax);
        } else if (modifyPrevMax) {
          resize(state2.next, -delta, modifyNextMax);
        } else {
          resize(state2.prev, delta, modifyNextMax);
          resize(state2.next, -delta, modifyPrevMax);
        }
      } else {
        resize(state2.prev, delta);
        resize(state2.next, -delta);
      }
    } else if (nextPane.fixedSize || nextPane.collapsible) {
      resize(state2.next, -delta, modifyNextMax);
    } else {
      resize(state2.prev, delta, modifyPrevMax);
    }
    this.emit(this.layoutChange, {});
  }
  isDraggable(splitBarIndex) {
    const prev = this.pane(splitBarIndex);
    const next = this.pane(splitBarIndex + 1);
    const betweenResizablePanes = prev?.resizable && next?.resizable;
    const nearCollapsedPane = prev?.collapsed || next?.collapsed;
    return betweenResizablePanes && !nearCollapsedPane;
  }
  isStatic(splitBarIndex) {
    const prev = this.pane(splitBarIndex);
    const next = this.pane(splitBarIndex + 1);
    const betweenResizablePanes = prev?.resizable && next?.resizable;
    const nearCollapsiblePane = prev?.collapsible || next?.collapsible;
    return !betweenResizablePanes && !nearCollapsiblePane;
  }
  pane(index) {
    if (!isDocumentAvailable()) {
      return;
    }
    if (!this.panes) {
      throw new Error("Panes not initialized");
    }
    if (index < 0 || index >= this.panes.length) {
      throw new Error("Index out of range");
    }
    return this.panes[index];
  }
  paneByIndex(pane) {
    if (!this.panes) {
      return -1;
    }
    return this.panes.findIndex((splitterPane) => splitterPane === pane);
  }
  getPaneSplitterBar(pane) {
    if (!this.splitterBars) {
      return;
    }
    const paneIndex = this.paneByIndex(pane);
    if (paneIndex < 0 || paneIndex >= this.splitterBars.length) {
      return null;
    }
    return this.splitterBars[paneIndex];
  }
  configure({
    panes,
    orientation,
    containerSize,
    direction
  }) {
    this.panes = panes;
    this.panes.forEach((pane, index) => {
      pane.order = index * 2;
      pane.orientation = orientation;
    });
    this.containerSize = containerSize;
    this.rtl = direction === "rtl";
  }
  containerSize = () => {
  };
  rtl;
  isPercent(size) {
    return /%$/.test(size);
  }
  toPixels(size) {
    let result = parseFloat(size);
    if (this.isPercent(size)) {
      result = this.containerSize() * result / 100;
    }
    return result;
  }
  emit(emitter, args) {
    if (emitter.observers.length) {
      this.zone.run(() => emitter.emit(args));
    }
  }
  static ɵfac = function SplitterService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SplitterService)(ɵɵinject(NgZone));
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _SplitterService,
    factory: _SplitterService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SplitterService, [{
    type: Injectable
  }], () => [{
    type: NgZone
  }], null);
})();
var SplitterPaneComponent = class _SplitterPaneComponent {
  element;
  renderer;
  cdr;
  splitterService;
  /**
   * @hidden
   */
  set order(paneOrder) {
    this._order = paneOrder;
    this.setOrderStyles();
  }
  get order() {
    return this._order;
  }
  /**
   * Defines the initial size of the pane.
   * Accepts values in pixels and percentages.
   * The value must be between the `min` and `max` properties.
   */
  set size(newSize) {
    this._size = newSize;
    if (!this._collapsed) {
      this.renderer.setStyle(this.nativeElement, "-ms-flex-preferred-size", newSize);
      this.renderer.setStyle(this.nativeElement, "flex-basis", newSize);
    }
    this.setStaticPaneClass();
  }
  get size() {
    return this._size;
  }
  /**
   * Defines the HTML attributes of the splitter bar.
   * Accepts string key-value pairs.
   * You cannot change attributes that are essential for certain functionalities.
   */
  set splitterBarAttributes(attributes) {
    this._splitterBarAttributes = attributes;
    const splitterBar = this.splitterService.getPaneSplitterBar(this);
    if (splitterBar) {
      splitterBar.htmlAttributes = attributes;
    }
  }
  get splitterBarAttributes() {
    return this._splitterBarAttributes;
  }
  /**
   * Defines the CSS classes that are rendered on the splitter bar.
   * Supports the same values as [`ngClass`](link:site.data.urls.angular['ngclassapi']).
   */
  splitterBarClass;
  /**
   * Defines the minimum possible size of the pane.
   * Accepts values in pixels and percentages.
   */
  min;
  /**
   * Defines the maximum possible size of the pane.
   * Accepts values in pixels and percentages.
   */
  max;
  /**
   * Determines if you can resize the pane and provide space for other panes.
   *
   * @default true
   */
  resizable = true;
  /**
   * Determines if you can hide the pane and provide space for other panes.
   *
   * @default false
   */
  collapsible = false;
  /**
   * Determines if overflowing content is scrollable or hidden.
   *
   * @default true
   */
  scrollable = true;
  /**
   * Determines if the pane is initially collapsed.
   *
   * @default false
   */
  set collapsed(value) {
    const hasChanged = this._collapsed !== value;
    this._collapsed = value;
    if (hasChanged && this.nativeElement) {
      if (this._collapsed) {
        this.renderer.setStyle(this.nativeElement, "-ms-flex-preferred-size", "0");
        this.renderer.setStyle(this.nativeElement, "flex-basis", "0");
      } else if (this._size) {
        this.renderer.setStyle(this.nativeElement, "-ms-flex-preferred-size", this._size);
        this.renderer.setStyle(this.nativeElement, "flex-basis", this._size);
      }
      if (this.splitterService?.panes) {
        const notCollapsed = this.splitterService.panes.filter((p) => !p.collapsed);
        const allHaveFixedSize = notCollapsed.every((p) => p.fixedSize);
        notCollapsed.filter((p) => p.fixedSize).forEach((pane) => {
          pane.forceExpand = allHaveFixedSize;
        });
      }
    }
  }
  get collapsed() {
    return this._collapsed;
  }
  /**
   * @hidden
   */
  orientation = "horizontal";
  /**
   * @hidden
   */
  set containsSplitter(value) {
    if (value) {
      this.renderer.addClass(this.nativeElement, "k-pane-flex");
    } else {
      this.renderer.removeClass(this.nativeElement, "k-pane-flex");
    }
  }
  /**
   * @hidden
   */
  overlayContent = false;
  /**
   * Fires when the Splitter pane size changes.
   * The event data contains the new pane size.
   * Enables two-way binding of the pane `size` property.
   */
  sizeChange = new EventEmitter();
  /**
   * Fires when the Splitter pane collapses or expands.
   * The event data contains the new property state.
   * Enables two-way binding of the `collapsed` pane property.
   */
  collapsedChange = new EventEmitter();
  get isHidden() {
    return this.collapsed;
  }
  ariaRole = "group";
  hostClass = true;
  get scrollablePaneClass() {
    return this.scrollable;
  }
  get fixedSize() {
    return this.size && this.size.length > 0;
  }
  /**
   * @hidden
   */
  forceExpand = false;
  /**
   * @hidden
   */
  isResized = false;
  _size;
  _order;
  _splitterBarAttributes;
  _collapsed = false;
  constructor(element, renderer, cdr, splitterService) {
    this.element = element;
    this.renderer = renderer;
    this.cdr = cdr;
    this.splitterService = splitterService;
  }
  ngAfterViewChecked() {
    if (this.isHidden) {
      this.renderer.addClass(this.nativeElement, "k-hidden");
      this.renderer.addClass(this.nativeElement, "hidden");
    } else {
      this.renderer.removeClass(this.nativeElement, "k-hidden");
      this.renderer.removeClass(this.nativeElement, "hidden");
    }
    this.setStaticPaneClass();
  }
  ngOnChanges(changes) {
    if (anyChanged(["resizable", "collapsible"], changes)) {
      this.setStaticPaneClass();
    }
  }
  /**
   * @hidden
   */
  get computedSize() {
    if (this.orientation === "vertical") {
      return this.nativeElement.offsetHeight;
    } else {
      return this.nativeElement.offsetWidth;
    }
  }
  /**
   * @hidden
   */
  get nativeElement() {
    return this.element.nativeElement;
  }
  /**
   * @hidden
   */
  toggleOverlay(show) {
    this.overlayContent = show;
    this.cdr.detectChanges();
  }
  /**
   * @hidden
   */
  detectChanges() {
    this.cdr.detectChanges();
  }
  setOrderStyles() {
    this.renderer.setStyle(this.nativeElement, "-ms-flex-order", this.order);
    this.renderer.setStyle(this.nativeElement, "order", this.order);
  }
  setStaticPaneClass() {
    if (this.forceExpand) {
      this.renderer.removeClass(this.nativeElement, "k-pane-static");
      return;
    }
    if (!this.resizable && !this.collapsible || this.fixedSize) {
      this.renderer.addClass(this.nativeElement, "k-pane-static");
    } else {
      this.renderer.removeClass(this.nativeElement, "k-pane-static");
    }
  }
  static ɵfac = function SplitterPaneComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SplitterPaneComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(SplitterService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _SplitterPaneComponent,
    selectors: [["kendo-splitter-pane"]],
    hostVars: 5,
    hostBindings: function SplitterPaneComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("role", ctx.ariaRole);
        ɵɵclassProp("k-pane", ctx.hostClass)("k-scrollable", ctx.scrollablePaneClass);
      }
    },
    inputs: {
      order: "order",
      size: "size",
      splitterBarAttributes: "splitterBarAttributes",
      splitterBarClass: "splitterBarClass",
      min: "min",
      max: "max",
      resizable: "resizable",
      collapsible: "collapsible",
      scrollable: "scrollable",
      collapsed: "collapsed",
      orientation: "orientation",
      containsSplitter: "containsSplitter",
      overlayContent: "overlayContent"
    },
    outputs: {
      sizeChange: "sizeChange",
      collapsedChange: "collapsedChange"
    },
    exportAs: ["kendoSplitterPane"],
    standalone: true,
    features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    ngContentSelectors: _c8,
    decls: 2,
    vars: 2,
    consts: [[1, "k-splitter-overlay", "k-overlay"]],
    template: function SplitterPaneComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵtemplate(0, SplitterPaneComponent_Conditional_0_Template, 1, 0)(1, SplitterPaneComponent_Conditional_1_Template, 1, 0, "div", 0);
      }
      if (rf & 2) {
        ɵɵconditional(!ctx.collapsed ? 0 : -1);
        ɵɵadvance();
        ɵɵconditional(ctx.overlayContent ? 1 : -1);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SplitterPaneComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoSplitterPane",
      selector: "kendo-splitter-pane",
      template: `
        @if (!collapsed) {
          <ng-content></ng-content>
        }
        @if (overlayContent) {
          <div class="k-splitter-overlay k-overlay"></div>
        }
        `,
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: ChangeDetectorRef
  }, {
    type: SplitterService
  }], {
    order: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    splitterBarAttributes: [{
      type: Input
    }],
    splitterBarClass: [{
      type: Input
    }],
    min: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    resizable: [{
      type: Input
    }],
    collapsible: [{
      type: Input
    }],
    scrollable: [{
      type: Input
    }],
    collapsed: [{
      type: Input
    }],
    orientation: [{
      type: Input
    }],
    containsSplitter: [{
      type: Input
    }],
    overlayContent: [{
      type: Input
    }],
    sizeChange: [{
      type: Output
    }],
    collapsedChange: [{
      type: Output
    }],
    ariaRole: [{
      type: HostBinding,
      args: ["attr.role"]
    }],
    hostClass: [{
      type: HostBinding,
      args: ["class.k-pane"]
    }],
    scrollablePaneClass: [{
      type: HostBinding,
      args: ["class.k-scrollable"]
    }]
  });
})();
var stopPropagation = ({
  originalEvent: event
}) => {
  event.stopPropagation();
  event.preventDefault();
};
var preventOnDblClick = (release) => (mouseDown) => of(mouseDown).pipe(delay(150), takeUntil(release));
var classFromObject = (classes) => Object.keys(classes).filter((c) => classes[c]).join(" ");
var createMoveStream = (draggable) => (mouseDown) => draggable.kendoDrag.pipe(takeUntil(draggable.kendoRelease), map(({
  pageX,
  pageY
}) => ({
  originalX: mouseDown.pageX,
  originalY: mouseDown.pageY,
  pageX,
  pageY
})));
var SplitterBarComponent = class _SplitterBarComponent {
  draggable;
  localization;
  splitterService;
  element;
  renderer;
  cdr;
  ariaRole = "separator";
  ariaLabel = "Splitter pane";
  focused = false;
  get hostOrientation() {
    return this.orientation === "horizontal" ? "vertical" : "horizontal";
  }
  get tabIndex() {
    return this.splitterService.isStatic(this.index) ? -1 : 0;
  }
  get hostClasses() {
    const isHorizontal = this.orientation === "horizontal";
    const isDraggable = this.splitterService.isDraggable(this.index);
    const isStatic = this.splitterService.isStatic(this.index);
    return classFromObject({
      "k-focus": this.focused,
      "k-splitbar": true,
      "k-splitbar-horizontal": isHorizontal,
      "k-splitbar-vertical": !isHorizontal,
      "k-splitbar-draggable-horizontal": isHorizontal && isDraggable,
      "k-splitbar-draggable-vertical": !isHorizontal && isDraggable,
      "k-splitbar-static-horizontal": isHorizontal && isStatic,
      "k-splitbar-static-vertical": !isHorizontal && isStatic,
      "k-touch-action-none": isDraggable
    });
  }
  get order() {
    return 2 * this.index + 1;
  }
  orientation = "horizontal";
  index = 0;
  set htmlAttributes(attributes) {
    if (isObjectPresent(this.parsedAttributes)) {
      removeHTMLAttributes(this.parsedAttributes, this.renderer, this.element.nativeElement);
    }
    this._htmlAttributes = attributes;
    this.parsedAttributes = this.htmlAttributes ? parseAttributes(this.htmlAttributes, this.defaultAttributes) : this.htmlAttributes;
    this.setHtmlAttributes();
  }
  get htmlAttributes() {
    return this._htmlAttributes;
  }
  subscriptions = new Subscription();
  _htmlAttributes;
  parsedAttributes = {};
  get defaultAttributes() {
    return {
      "aria-orientation": this.hostOrientation,
      role: this.ariaRole
    };
  }
  get mutableAttributes() {
    return {
      "tabindex": this.tabIndex
    };
  }
  constructor(draggable, localization, splitterService, element, renderer, cdr) {
    this.draggable = draggable;
    this.localization = localization;
    this.splitterService = splitterService;
    this.element = element;
    this.renderer = renderer;
    this.cdr = cdr;
  }
  ngOnInit() {
    let state2;
    const listener = this.draggable.kendoPress.pipe(tap(stopPropagation), filter(() => this.splitterService.isDraggable(this.index)), tap(() => state2 = this.splitterService.dragState(this.index)), tap(() => this.splitterService.toggleContentOverlay(this.index, true)), switchMap(preventOnDblClick(this.draggable.kendoRelease)), switchMap(createMoveStream(this.draggable))).subscribe(({
      pageX,
      pageY,
      originalX,
      originalY
    }) => {
      let delta;
      if (this.orientation === "vertical") {
        delta = pageY - originalY;
      } else if (this.direction === "rtl") {
        delta = originalX - pageX;
      } else {
        delta = pageX - originalX;
      }
      this.splitterService.setSize(state2, delta);
    });
    this.subscriptions.add(listener);
    this.subscriptions.add(this.draggable.kendoRelease.subscribe(() => this.splitterService.toggleContentOverlay(this.index, false)));
    const element = this.element.nativeElement;
    this.subscriptions.add(this.renderer.listen(element, "keydown", (event) => this.onKeyDown(event)));
    this.subscriptions.add(this.renderer.listen(element, "focusin", () => this.focused = true));
    this.subscriptions.add(this.renderer.listen(element, "focusout", () => this.focused = false));
    this.subscriptions.add(this.renderer.listen(element, "dblclick", () => this.togglePane()));
  }
  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }
  togglePrevious() {
    this.splitterService.tryToggle(this.index);
  }
  toggleNext() {
    this.splitterService.tryToggle(this.index + 1);
  }
  get direction() {
    return this.localization.rtl ? "rtl" : "ltr";
  }
  shouldShowIcon(iconName) {
    const paneIndex = iconName === "prev" ? this.index : this.index + 1;
    const relatedPaneIndex = iconName === "prev" ? this.index + 1 : this.index;
    const pane = this.splitterService.pane(paneIndex);
    const relatedPane = this.splitterService.pane(relatedPaneIndex);
    const isCollapsible = pane?.collapsible;
    return isCollapsible && !relatedPane?.isHidden;
  }
  previousArrowClass() {
    const pane = this.splitterService.pane(this.index);
    const isCollapsible = pane?.collapsible;
    const isCollapsed = pane?.collapsed;
    const isHorizontal = this.orientation === "horizontal";
    const isRTL = this.direction === "rtl";
    return classFromObject({
      "caret-alt-left": isCollapsible && isHorizontal && (!isCollapsed && !isRTL || isCollapsed && isRTL),
      "caret-alt-right": isCollapsible && isHorizontal && (isCollapsed && !isRTL || !isCollapsed && isRTL),
      "caret-alt-up": isCollapsible && !isHorizontal && !isCollapsed,
      "caret-alt-down": isCollapsible && !isHorizontal && isCollapsed
    });
  }
  previousSVGArrowClass() {
    const pane = this.splitterService.pane(this.index);
    const isCollapsible = pane?.collapsible;
    const isCollapsed = pane?.collapsed;
    const isHorizontal = this.orientation === "horizontal";
    const isRTL = this.direction === "rtl";
    if (isCollapsible && isHorizontal && (!isCollapsed && !isRTL || isCollapsed && isRTL)) {
      return caretAltLeftIcon;
    }
    if (isCollapsible && isHorizontal && (isCollapsed && !isRTL || !isCollapsed && isRTL)) {
      return caretAltRightIcon;
    }
    if (isCollapsible && !isHorizontal && !isCollapsed) {
      return caretAltUpIcon;
    }
    if (isCollapsible && !isHorizontal && isCollapsed) {
      return caretAltDownIcon;
    }
  }
  nextArrowClass() {
    const pane = this.splitterService.pane(this.index + 1);
    const isCollapsible = pane?.collapsible;
    const isCollapsed = pane?.collapsed;
    const isHorizontal = this.orientation === "horizontal";
    const isRTL = this.direction === "rtl";
    return classFromObject({
      "caret-alt-right": isCollapsible && isHorizontal && (!isCollapsed && !isRTL || isCollapsed && isRTL),
      "caret-alt-left": isCollapsible && isHorizontal && (isCollapsed && !isRTL || !isCollapsed && isRTL),
      "caret-alt-down": isCollapsible && !isHorizontal && !isCollapsed,
      "caret-alt-up": isCollapsible && !isHorizontal && isCollapsed
    });
  }
  nextSVGArrowClass() {
    const pane = this.splitterService.pane(this.index + 1);
    const isCollapsible = pane?.collapsible;
    const isCollapsed = pane?.collapsed;
    const isHorizontal = this.orientation === "horizontal";
    const isRTL = this.direction === "rtl";
    if (isCollapsible && isHorizontal && (!isCollapsed && !isRTL || isCollapsed && isRTL)) {
      return caretAltRightIcon;
    }
    if (isCollapsible && isHorizontal && (isCollapsed && !isRTL || !isCollapsed && isRTL)) {
      return caretAltLeftIcon;
    }
    if (isCollapsible && !isHorizontal && !isCollapsed) {
      return caretAltDownIcon;
    }
    if (isCollapsible && !isHorizontal && isCollapsed) {
      return caretAltUpIcon;
    }
  }
  togglePane() {
    if (this.expandLast) {
      this.toggleNext();
    } else {
      this.tryToggleNearest();
    }
    this.cdr.markForCheck();
  }
  get expandLast() {
    const panes = this.splitterService.panes;
    return panes.length === 2 && panes[1].collapsed;
  }
  onKeyDown(event) {
    const keyCode = normalizeKeys(event);
    const shouldToggle = event.ctrlKey || event.metaKey;
    if (keyCode === Keys.Enter || keyCode === Keys.NumpadEnter) {
      event.preventDefault();
      this.togglePane();
    } else if (shouldToggleOrResize(keyCode, this.orientation)) {
      event.preventDefault();
      if (shouldToggle) {
        this.splitterService.togglePane(keyCode, this.index);
      } else {
        this.splitterService.resizePane(keyCode, this.index);
      }
    }
  }
  tryToggleNearest() {
    const prev = this.index;
    const next = this.index + 1;
    if (!this.splitterService.tryToggle(prev)) {
      this.splitterService.tryToggle(next);
    }
  }
  setHtmlAttributes() {
    const attributesToRender = __spreadValues(__spreadValues({}, this.mutableAttributes), this.parsedAttributes);
    setHTMLAttributes(attributesToRender, this.renderer, this.element.nativeElement);
  }
  static ɵfac = function SplitterBarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SplitterBarComponent)(ɵɵdirectiveInject(DraggableDirective, 1), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(SplitterService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ChangeDetectorRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _SplitterBarComponent,
    selectors: [["kendo-splitter-bar"]],
    hostVars: 12,
    hostBindings: function SplitterBarComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("role", ctx.ariaRole)("aria-label", ctx.ariaLabel)("aria-orientation", ctx.hostOrientation)("tabindex", ctx.tabIndex);
        ɵɵclassMap(ctx.hostClasses);
        ɵɵstyleProp("-ms-flex-order", ctx.order)("order", ctx.order);
        ɵɵclassProp("k-focus", ctx.focused);
      }
    },
    inputs: {
      orientation: "orientation",
      index: "index",
      htmlAttributes: "htmlAttributes"
    },
    standalone: true,
    features: [ɵɵStandaloneFeature],
    decls: 3,
    vars: 2,
    consts: [[1, "k-collapse-prev"], [1, "k-resize-handle"], [1, "k-collapse-next"], [1, "k-collapse-prev", 3, "click"], ["size", "xsmall", 3, "name", "svgIcon"], [1, "k-collapse-next", 3, "click"]],
    template: function SplitterBarComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, SplitterBarComponent_Conditional_0_Template, 2, 2, "div", 0);
        ɵɵelement(1, "div", 1);
        ɵɵtemplate(2, SplitterBarComponent_Conditional_2_Template, 2, 2, "div", 2);
      }
      if (rf & 2) {
        ɵɵconditional(ctx.shouldShowIcon("prev") ? 0 : -1);
        ɵɵadvance(2);
        ɵɵconditional(ctx.shouldShowIcon("next") ? 2 : -1);
      }
    },
    dependencies: [IconWrapperComponent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SplitterBarComponent, [{
    type: Component,
    args: [{
      selector: "kendo-splitter-bar",
      template: `
        @if (shouldShowIcon('prev')) {
          <div class="k-collapse-prev" (click)="togglePrevious()">
            <kendo-icon-wrapper
              size="xsmall"
              [name]="previousArrowClass()"
              [svgIcon]="previousSVGArrowClass()"
            ></kendo-icon-wrapper>
          </div>
        }
        <div class="k-resize-handle"></div>
        @if (shouldShowIcon('next')) {
          <div class="k-collapse-next" (click)="toggleNext()">
            <kendo-icon-wrapper
              size="xsmall"
              [name]="nextArrowClass()"
              [svgIcon]="nextSVGArrowClass()"
            ></kendo-icon-wrapper>
          </div>
        }
        `,
      standalone: true,
      imports: [IconWrapperComponent]
    }]
  }], () => [{
    type: DraggableDirective,
    decorators: [{
      type: Host
    }]
  }, {
    type: LocalizationService
  }, {
    type: SplitterService
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: ChangeDetectorRef
  }], {
    ariaRole: [{
      type: HostBinding,
      args: ["attr.role"]
    }],
    ariaLabel: [{
      type: HostBinding,
      args: ["attr.aria-label"]
    }],
    focused: [{
      type: HostBinding,
      args: ["class.k-focus"]
    }],
    hostOrientation: [{
      type: HostBinding,
      args: ["attr.aria-orientation"]
    }],
    tabIndex: [{
      type: HostBinding,
      args: ["attr.tabindex"]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }],
    order: [{
      type: HostBinding,
      args: ["style.-ms-flex-order"]
    }, {
      type: HostBinding,
      args: ["style.order"]
    }],
    orientation: [{
      type: Input
    }],
    index: [{
      type: Input
    }],
    htmlAttributes: [{
      type: Input
    }]
  });
})();
var SIZING_DOC_LINK = "https://www.telerik.com/kendo-angular-ui/components/layout/splitter/panes/#specifying-the-dimensions";
var SplitterComponent = class _SplitterComponent {
  element;
  splitterService;
  localization;
  renderer;
  ngZone;
  enclosingPane;
  /**
   * Defines the orientation of the panes within the Splitter.
   * Use `horizontal` to place panes horizontally or `vertical` to place them vertically.
   *
   * @default 'horizontal'
   */
  orientation = "horizontal";
  /**
   * Defines the width or height of the Splitter splitbars in pixels.
   * The dimension depends on the orientation of the Splitter.
   */
  splitbarWidth;
  /**
   * Defines the distance in pixels that you move the separator during keyboard navigation.
   *
   * @default 10
   */
  set resizeStep(value) {
    this.splitterService.resizeStep = value;
  }
  get resizeStep() {
    return this.splitterService.resizeStep;
  }
  /**
   * Defines the CSS classes that are rendered on the splitter bars.
   * Supports the same values as [`ngClass`](link:site.data.urls.angular['ngclassapi']).
   */
  splitterBarClass;
  /**
   * Fires when the layout of the Splitter changes.
   * Use this event to trigger layout calculations on components that are positioned inside the panes.
   */
  layoutChange;
  get hostClasses() {
    return true;
  }
  get horizontalHostClasses() {
    return this.orientation === "horizontal";
  }
  get verticalHostClasses() {
    return this.orientation === "vertical";
  }
  get dir() {
    return this.direction;
  }
  set splitbars(splitbars) {
    this.splitterService.splitterBars = splitbars ? splitbars.toArray() : [];
    if (!isPresent2(splitbars) || !isPresent2(this.panes)) {
      return;
    }
    if (!isDocumentAvailable()) {
      return;
    }
    const panesArray = this.panes.toArray();
    const splitBarsArray = splitbars.toArray();
    const components = [...panesArray, ...splitBarsArray].sort((a, b) => a.order - b.order);
    const elements = components.map((component) => component.element.nativeElement);
    panesArray.forEach((pane, i) => {
      const splitbar = splitBarsArray[i];
      if (splitbar && pane.splitterBarAttributes) {
        splitbar.htmlAttributes = pane.splitterBarAttributes;
      }
    });
    elements.forEach((element) => this.renderer.appendChild(this.element.nativeElement, element));
  }
  /**
   * @hidden
   */
  panes;
  paneChangesSubscription;
  _styleObserver;
  constructor(element, splitterService, localization, renderer, ngZone, enclosingPane) {
    this.element = element;
    this.splitterService = splitterService;
    this.localization = localization;
    this.renderer = renderer;
    this.ngZone = ngZone;
    this.enclosingPane = enclosingPane;
    A(packageMetadata);
    if (enclosingPane) {
      enclosingPane.containsSplitter = true;
    }
    this.layoutChange = this.splitterService.layoutChange;
    this.configure = this.configure.bind(this);
  }
  ngAfterContentInit() {
    if (!isDocumentAvailable()) {
      return;
    }
    this.reconfigure();
    this.setFixedHeight();
    const allHaveFixedSize = this.panes.length && Array.from(this.panes).every((p) => p.fixedSize);
    if (allHaveFixedSize && isDevMode()) {
      throw new Error(`
                The Splitter should have at least one pane without a set size.
                See ${SIZING_DOC_LINK} for more information.
            `);
    }
    this._styleObserver = new MutationObserver(() => {
      this.ngZone.runOutsideAngular(() => {
        this.setFixedHeight();
      });
    });
    this._styleObserver.observe(this.element.nativeElement, {
      attributeFilter: ["style"]
    });
  }
  ngOnChanges(changes) {
    if (changes.orientation && !changes.orientation.isFirstChange()) {
      this.reconfigure();
    }
  }
  ngOnDestroy() {
    if (this.enclosingPane) {
      this.enclosingPane.containsSplitter = false;
    }
    if (this._styleObserver) {
      this._styleObserver.disconnect();
      this._styleObserver = null;
    }
    this.unsubscribeChanges();
  }
  reconfigure() {
    this.unsubscribeChanges();
    this.configure();
    this.paneChangesSubscription = this.panes.changes.subscribe(this.configure);
  }
  unsubscribeChanges() {
    if (this.paneChangesSubscription) {
      this.paneChangesSubscription.unsubscribe();
      this.paneChangesSubscription = null;
    }
  }
  configure() {
    this.splitterService.configure({
      panes: this.panes.toArray(),
      orientation: this.orientation,
      containerSize: () => {
        if (this.orientation === "vertical") {
          return this.element.nativeElement.clientHeight;
        } else {
          return this.element.nativeElement.clientWidth;
        }
      },
      direction: this.direction
    });
  }
  get direction() {
    return this.localization.rtl ? "rtl" : "ltr";
  }
  setFixedHeight() {
    this.splitterService.fixedHeight = getComputedStyle(this.element.nativeElement).getPropertyValue("height") !== "auto";
  }
  static ɵfac = function SplitterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SplitterComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(SplitterService), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(SplitterPaneComponent, 9));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _SplitterComponent,
    selectors: [["kendo-splitter"]],
    contentQueries: function SplitterComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, SplitterPaneComponent, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.panes = _t);
      }
    },
    viewQuery: function SplitterComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(SplitterBarComponent, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.splitbars = _t);
      }
    },
    hostVars: 9,
    hostBindings: function SplitterComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("dir", ctx.dir);
        ɵɵclassProp("k-splitter", ctx.hostClasses)("k-splitter-flex", ctx.hostClasses)("k-splitter-horizontal", ctx.horizontalHostClasses)("k-splitter-vertical", ctx.verticalHostClasses);
      }
    },
    inputs: {
      orientation: "orientation",
      splitbarWidth: "splitbarWidth",
      resizeStep: "resizeStep",
      splitterBarClass: "splitterBarClass"
    },
    outputs: {
      layoutChange: "layoutChange"
    },
    exportAs: ["kendoSplitter"],
    standalone: true,
    features: [ɵɵProvidersFeature([SplitterService, LocalizationService, {
      provide: L10N_PREFIX,
      useValue: "kendo.spliter"
    }]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    ngContentSelectors: _c10,
    decls: 3,
    vars: 0,
    consts: [["kendoDraggable", "", 3, "index", "orientation", "ngClass", "ngStyle"]],
    template: function SplitterComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef(_c9);
        ɵɵprojection(0);
        ɵɵrepeaterCreate(1, SplitterComponent_For_2_Template, 1, 1, null, null, ɵɵrepeaterTrackByIdentity);
      }
      if (rf & 2) {
        ɵɵadvance();
        ɵɵrepeater(ctx.panes);
      }
    },
    dependencies: [SplitterBarComponent, DraggableDirective, NgStyle, NgClass],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SplitterComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoSplitter",
      selector: "kendo-splitter",
      providers: [SplitterService, LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.spliter"
      }],
      template: `
      <ng-content select="kendo-splitter-pane"></ng-content>
      @for (
        pane of panes; track
        pane; let index = $index; let last = $last) {
        @if (!last) {
          <kendo-splitter-bar
            kendoDraggable
            [index]="index"
            [orientation]="orientation"
            [ngClass]="pane.splitterBarClass || splitterBarClass"
          [ngStyle]="{
            width: orientation === 'horizontal' ? splitbarWidth + 'px' : undefined,
            height: orientation === 'vertical' ? splitbarWidth + 'px' : undefined
          }">
          </kendo-splitter-bar>
        }
      }
      `,
      standalone: true,
      imports: [SplitterBarComponent, DraggableDirective, NgStyle, NgClass]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: SplitterService
  }, {
    type: LocalizationService
  }, {
    type: Renderer2
  }, {
    type: NgZone
  }, {
    type: SplitterPaneComponent,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: Inject,
      args: [SplitterPaneComponent]
    }]
  }], {
    orientation: [{
      type: Input
    }],
    splitbarWidth: [{
      type: Input
    }],
    resizeStep: [{
      type: Input
    }],
    splitterBarClass: [{
      type: Input
    }],
    layoutChange: [{
      type: Output
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class.k-splitter"]
    }, {
      type: HostBinding,
      args: ["class.k-splitter-flex"]
    }],
    horizontalHostClasses: [{
      type: HostBinding,
      args: ["class.k-splitter-horizontal"]
    }],
    verticalHostClasses: [{
      type: HostBinding,
      args: ["class.k-splitter-vertical"]
    }],
    dir: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    splitbars: [{
      type: ViewChildren,
      args: [SplitterBarComponent]
    }],
    panes: [{
      type: ContentChildren,
      args: [SplitterPaneComponent]
    }]
  });
})();
var TabContentDirective = class _TabContentDirective {
  templateRef;
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static ɵfac = function TabContentDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TabContentDirective)(ɵɵdirectiveInject(TemplateRef));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _TabContentDirective,
    selectors: [["", "kendoTabContent", ""]],
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabContentDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoTabContent]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var TabTitleDirective = class _TabTitleDirective {
  templateRef;
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static ɵfac = function TabTitleDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TabTitleDirective)(ɵɵdirectiveInject(TemplateRef));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _TabTitleDirective,
    selectors: [["", "kendoTabTitle", ""]],
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabTitleDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoTabTitle]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var TabTemplateDirective = class _TabTemplateDirective {
  templateRef;
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static ɵfac = function TabTemplateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TabTemplateDirective)(ɵɵdirectiveInject(TemplateRef));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _TabTemplateDirective,
    selectors: [["", "kendoTabTemplate", ""]],
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoTabTemplate]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var TabStripTabComponent = class _TabStripTabComponent {
  /**
   * Sets the title text for the tab ([see example](slug:tabs_tabstrip#toc-tab-titles)).
   */
  title;
  /**
   * Disables the tab and prevents user interaction ([see example]({% slug tabs_tabstrip %}#toc-disabled-tabs)).
   *
   * @default false
   */
  disabled = false;
  /**
   * Specifies the CSS classes to apply to the `tab` element.
   * Accepts the same values as [`ngClass`](link:site.data.urls.angular['ngclassapi']).
   */
  cssClass;
  /**
   * Specifies the CSS styles to apply to the `tab` element.
   * Accepts the same values as [`ngStyle`](link:site.data.urls.angular['ngstyleapi']).
   */
  cssStyle;
  /**
   * Selects the tab when the TabStrip loads
   * ([see example](slug:tabs_tabstrip#toc-selected-tab)).
   */
  selected;
  /**
   * Shows a close button inside the tab when set to `true`.
   * This setting overrides the TabStrip `closable` option.
   */
  closable;
  /**
   * Sets the name of an existing font icon in the Kendo UI theme for the close button.
   * This setting overrides the TabStrip `closeIcon` option.
   */
  closeIcon;
  /**
   * Sets custom CSS classes for the close button icon.
   * You can define a single class or multiple classes separated by spaces.
   * This setting overrides the TabStrip `closeIcon` option.
   */
  closeIconClass;
  /**
   * Sets an SVG icon for the close button.
   * You can use an [existing Kendo SVG icon](slug:svgicon_list) or provide a custom one.
   */
  closeSVGIcon;
  get tabContent() {
    return this._tabContent.first;
  }
  get tabTitle() {
    return this._tabTitleDirective.first;
  }
  get tabTemplate() {
    return this._tabDirective.first;
  }
  _tabDirective = new QueryList();
  _tabContent = new QueryList();
  // guards against nested tabstrip components; `descendants` is not defined by default;
  _tabTitleDirective;
  /**
   * @hidden
   *
   * Currently only disabled tabs can be focused. Otherwise they will be
   * immediately selected
   */
  focused = false;
  static ɵfac = function TabStripTabComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TabStripTabComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _TabStripTabComponent,
    selectors: [["kendo-tabstrip-tab"]],
    contentQueries: function TabStripTabComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, TabTemplateDirective, 4);
        ɵɵcontentQuery(dirIndex, TabContentDirective, 4);
        ɵɵcontentQuery(dirIndex, TabTitleDirective, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._tabDirective = _t);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._tabContent = _t);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._tabTitleDirective = _t);
      }
    },
    inputs: {
      title: "title",
      disabled: "disabled",
      cssClass: "cssClass",
      cssStyle: "cssStyle",
      selected: "selected",
      closable: "closable",
      closeIcon: "closeIcon",
      closeIconClass: "closeIconClass",
      closeSVGIcon: "closeSVGIcon"
    },
    exportAs: ["kendoTabStripTab"],
    standalone: true,
    features: [ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function TabStripTabComponent_Template(rf, ctx) {
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabStripTabComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoTabStripTab",
      selector: "kendo-tabstrip-tab",
      template: ``,
      standalone: true
    }]
  }], null, {
    title: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    cssClass: [{
      type: Input
    }],
    cssStyle: [{
      type: Input
    }],
    selected: [{
      type: Input
    }],
    closable: [{
      type: Input
    }],
    closeIcon: [{
      type: Input
    }],
    closeIconClass: [{
      type: Input
    }],
    closeSVGIcon: [{
      type: Input
    }],
    _tabDirective: [{
      type: ContentChildren,
      args: [TabTemplateDirective]
    }],
    _tabContent: [{
      type: ContentChildren,
      args: [TabContentDirective]
    }],
    _tabTitleDirective: [{
      type: ContentChildren,
      args: [TabTitleDirective]
    }]
  });
})();
var TabCloseEvent = class {
  index;
  tab;
  /**
   * Constructs the event arguments for the `tabClose` event.
   * @param index - The index of the closed tab.
   * @param tab - The closed tab instance
   * @hidden
   */
  constructor(index, tab) {
    this.index = index;
    this.tab = tab;
  }
};
var TabScrollEvent = class extends PreventableEvent {
  /**
   * The original DOM event that caused the tab scroll.
   */
  originalEvent;
  /**
   * @hidden
   */
  constructor(args) {
    super();
    Object.assign(this, args);
  }
};
var SelectEvent = class extends PreventableEvent {
  index;
  title;
  /**
   * Constructs the event arguments for the `select` event.
   * @param index - The index of the selected tab.
   * @param title - The title of the selected tab.
   *
   * @hidden
   */
  constructor(index, title) {
    super();
    this.index = index;
    this.title = title;
  }
};
var isTabElement = (target) => {
  const targetId = target.getAttribute("id");
  if (isPresent2(targetId) || targetId?.indexOf("k-tabstrip-tab-") >= 0) {
    return true;
  }
  return false;
};
var isTabClosable = (tab, tabStripClosable) => {
  if (tab.closable !== void 0) {
    return tab.closable;
  }
  return tabStripClosable;
};
var tabStripHasScrollButtons = (scrollableSettings) => {
  const visible = scrollableSettings.enabled && scrollableSettings.scrollButtons !== "hidden";
  const position = scrollableSettings.scrollButtonsPosition;
  return {
    visible,
    position
  };
};
var mouseScrollEnabled = (scrollableSettings) => {
  return scrollableSettings.enabled && scrollableSettings.mouseScroll;
};
var getActiveTab = (tabs) => {
  let focusedTab;
  let selectedTab;
  let focusedIndex = -1;
  let selectedIndex = -1;
  tabs.forEach((tab, index) => {
    if (tab.selected) {
      selectedTab = tab;
      selectedIndex = index;
    } else if (tab.focused) {
      focusedTab = tab;
      focusedIndex = index;
    }
  });
  return focusedIndex >= 0 ? {
    tab: focusedTab,
    index: focusedIndex
  } : {
    tab: selectedTab,
    index: selectedIndex
  };
};
var getTabByIndex = (tabs, index) => {
  const filtered = tabs.filter((_tab, i) => i === index);
  if (filtered.length > 0) {
    return filtered[0];
  }
  return null;
};
var getTabHeaderByIndex = (tabHeaderContainers, index) => {
  const filtered = tabHeaderContainers.filter((_tabHeader, i) => i === index);
  if (filtered.length > 0) {
    return filtered[0];
  }
  return null;
};
var resetTabFocus = (tabs) => {
  tabs.forEach((tab) => {
    tab.focused = false;
  });
};
var resetTabSelection = (tabs) => {
  tabs.forEach((tab) => {
    tab.selected = false;
  });
};
var isTablistHorizontal = (tabPosition) => tabPosition === "top" || tabPosition === "bottom";
var getId$1 = (prefix, tabStripId, tabIndex) => {
  return `${prefix}-${tabStripId}-${tabIndex}`;
};
var TabStripService = class _TabStripService {
  localization;
  ngZone;
  owner;
  constructor(localization, ngZone) {
    this.localization = localization;
    this.ngZone = ngZone;
  }
  onKeyDown(event) {
    if (!isTabElement(event.target)) {
      return;
    }
    const code = normalizeKeys(event);
    if (this.shouldHandleKey(code)) {
      event.preventDefault();
    } else {
      return;
    }
    if (isNavigationKey(code) || isArrowKey(code)) {
      this.onNavigate(code);
    } else if (code === Keys.Delete || code === Keys.Backspace) {
      this.onDelete();
    }
  }
  onTabSelect(tab, index) {
    const selectArgs = new SelectEvent(index, tab.title);
    this.owner.tabSelect.emit(selectArgs);
    if (!selectArgs.isDefaultPrevented()) {
      if (tab.selected) {
        this.focusTabHeader(index);
        return;
      }
      this.selectTab(tab, index);
    }
  }
  selectTab(tab, index) {
    resetTabSelection(this.owner.tabs);
    this.focusTabHeader(index);
    tab.selected = true;
    if (this.owner.isScrollable) {
      this.owner.scrollToSelectedTab();
    }
  }
  onNavigate(keyCode) {
    const {
      tab: activeTab,
      index: activeIndex
    } = getActiveTab(this.owner.tabs);
    if (!NgZone.isInAngularZone()) {
      this.ngZone.run(() => {
        if (activeIndex < 0) {
          this.owner.selectTab(this.firstNavigableIndex());
          return;
        }
        activeTab.focused = false;
        const nextIndex = this.computeNextIndex(activeIndex, keyCode);
        this.activateTab(nextIndex);
      });
    }
  }
  onDelete() {
    const {
      tab: activeTab,
      index: activeTabIndex
    } = getActiveTab(this.owner.tabs);
    if (isTabClosable(activeTab, this.owner.closable) && !activeTab.disabled) {
      this.ngZone.run(() => {
        this.owner.tabClose.emit({
          tab: activeTab,
          index: activeTabIndex
        });
      });
    }
  }
  activateTab(index) {
    const tab = getTabByIndex(this.owner.tabs, index);
    if (tab.disabled) {
      this.focusTabHeader(index);
      tab.focused = true;
    } else {
      this.onTabSelect(tab, index);
    }
  }
  focusTabHeader(index) {
    const tabHeader = getTabHeaderByIndex(this.owner.tabHeaderContainers, index);
    tabHeader.nativeElement.focus();
  }
  shouldHandleKey(keyCode) {
    if (isNavigationKey(keyCode)) {
      return true;
    }
    if (isTablistHorizontal(this.owner.tabPosition) && isHorizontalArrowKey(keyCode)) {
      return true;
    }
    if (!isTablistHorizontal(this.owner.tabPosition) && isVerticalArrowKey(keyCode)) {
      return true;
    }
    if (keyCode === Keys.Delete || keyCode === Keys.Backspace) {
      return true;
    }
    return false;
  }
  computeNextIndex(activeIndex, keyCode) {
    switch (keyCode) {
      case this.invertKeys(Keys.ArrowLeft, Keys.ArrowRight):
      case this.invertKeys(Keys.ArrowUp, Keys.ArrowDown):
        return this.prevNavigableIndex(activeIndex);
      case this.invertKeys(Keys.ArrowRight, Keys.ArrowLeft):
      case this.invertKeys(Keys.ArrowDown, Keys.ArrowUp):
        return this.nextNavigableIndex(activeIndex);
      case Keys.Home:
        return this.firstNavigableIndex();
      case Keys.End:
        return this.lastNavigableIndex();
      default:
        return;
    }
  }
  invertKeys(original, inverted) {
    return this.localization.rtl ? inverted : original;
  }
  firstNavigableIndex() {
    return 0;
  }
  lastNavigableIndex() {
    return this.owner.tabs.length - 1;
  }
  prevNavigableIndex(selectedIndex) {
    if (selectedIndex - 1 < 0) {
      return this.lastNavigableIndex();
    }
    return selectedIndex - 1;
  }
  nextNavigableIndex(selectedIndex) {
    if (selectedIndex + 1 >= this.owner.tabs.length) {
      return this.firstNavigableIndex();
    }
    return selectedIndex + 1;
  }
  static ɵfac = function TabStripService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TabStripService)(ɵɵinject(LocalizationService), ɵɵinject(NgZone));
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _TabStripService,
    factory: _TabStripService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabStripService, [{
    type: Injectable
  }], () => [{
    type: LocalizationService
  }, {
    type: NgZone
  }], null);
})();
var BUTTON_SCROLL_SPEED = 100;
var HIDDEN_CLASS = "k-hidden";
var DIRECTION_CLASSES = {
  left: "caret-alt-left",
  right: "caret-alt-right",
  up: "caret-alt-up",
  down: "caret-alt-down"
};
var DEFAULT_SCROLL_BEHAVIOR = "smooth";
var ScrollService = class _ScrollService {
  ngZone;
  localization;
  owner;
  position = 0;
  scrollButtonActiveStateChange = new Subject();
  get tablistElement() {
    return this.owner.tablist.nativeElement;
  }
  get tabstripSize() {
    const hostElement = this.owner.wrapper.nativeElement;
    const wrapperWidth = parseFloat(getComputedStyle(hostElement).width);
    const wrapperHeight = parseFloat(getComputedStyle(hostElement).height);
    return isTablistHorizontal(this.owner.tabPosition) ? wrapperWidth : wrapperHeight;
  }
  get tablistOverflowSize() {
    if (!isDocumentAvailable()) {
      return 0;
    }
    const isHorizontal = isTablistHorizontal(this.owner.tabPosition);
    const overflowSize = Math.floor(this.tablistElement[isHorizontal ? "scrollWidth" : "scrollHeight"] - this.tablistElement.getBoundingClientRect()[isHorizontal ? "width" : "height"]);
    return overflowSize < 0 ? 0 : overflowSize;
  }
  get tabsOverflow() {
    return this.tablistOverflowSize > 0;
  }
  constructor(ngZone, localization) {
    this.ngZone = ngZone;
    this.localization = localization;
  }
  toggleScrollButtonsState() {
    const tabStrip = this.owner;
    if (!tabStrip.hasScrollButtons) {
      return;
    }
    const currentPrevButtonActive = !this.isDisabled("prev");
    const currentNextButtonActive = !this.isDisabled("next");
    const isHorizontal = isTablistHorizontal(this.owner.tabPosition);
    const rtlDelta = this.localization.rtl && isHorizontal ? -1 : 1;
    const calculatedPrevButtonActive = this.position * rtlDelta > 0 && this.tablistOverflowSize > 0;
    const calculatedNextButtonActive = this.position * rtlDelta < this.tablistOverflowSize && this.tablistOverflowSize > 0;
    if (calculatedPrevButtonActive !== currentPrevButtonActive) {
      this.ngZone.run(() => this.toggleButtonActiveState("prev", calculatedPrevButtonActive));
    }
    if (calculatedNextButtonActive !== currentNextButtonActive) {
      this.ngZone.run(() => this.toggleButtonActiveState("next", calculatedNextButtonActive));
    }
  }
  scrollToSelectedTab() {
    if (!this.tabsOverflow) {
      return;
    }
    const {
      index: activeIndex
    } = getActiveTab(this.owner.tabs);
    if (activeIndex === -1) {
      return;
    }
    this.position += this.getScrollOffset(activeIndex);
    if (isTablistHorizontal(this.owner.tabPosition)) {
      this.tablistElement.scrollLeft = this.position;
    } else {
      this.tablistElement.scrollTop = this.position;
    }
    this.toggleScrollButtonsState();
    const tabStrip = this.owner;
    if (!tabStrip.hasScrollButtons) {
      return;
    }
    const isFirstTabActive = activeIndex === 0;
    const isLastTabActive = activeIndex === this.owner.tabs.length - 1;
    if (isFirstTabActive && !this.isDisabled("prev")) {
      this.ngZone.run(() => this.toggleButtonActiveState("prev", false));
    }
    if (isLastTabActive && !this.isDisabled("next")) {
      this.ngZone.run(() => this.toggleButtonActiveState("next", false));
    }
  }
  getScrollOffset(activeIndex) {
    if (!isDocumentAvailable()) {
      return 0;
    }
    const isHorizontal = isTablistHorizontal(this.owner.tabPosition);
    this.tablistElement[`scroll${isHorizontal ? "Left" : "Top"}`] = this.position;
    const activeTabRect = this.tablistElement.children[activeIndex].getBoundingClientRect();
    const tablistRect = this.tablistElement.getBoundingClientRect();
    const end = isHorizontal ? "right" : "bottom";
    const start = isHorizontal ? "left" : "top";
    const activeTabStart = activeTabRect[start];
    const activeTabEnd = activeTabRect[end];
    const tablistStart = tablistRect[start];
    const tablistEnd = tablistRect[end];
    const tabEndIsInVisibleRange = activeTabEnd <= tablistEnd;
    const tabStartIsInVisibleRange = activeTabStart >= tablistStart;
    const isWholeTabVisible = tabEndIsInVisibleRange && tabStartIsInVisibleRange;
    if (isWholeTabVisible) {
      return 0;
    }
    if (!tabEndIsInVisibleRange) {
      return activeTabEnd - tablistEnd;
    }
    if (!tabStartIsInVisibleRange) {
      return activeTabStart - tablistStart;
    }
  }
  onScroll(e) {
    this.position = isTablistHorizontal(this.owner.tabPosition) ? e.target.scrollLeft : e.target.scrollTop;
    this.toggleScrollButtonsState();
  }
  scrollTabs(direction) {
    this.calculateListPosition(direction, this.owner.scrollable.buttonScrollSpeed);
    if (isTablistHorizontal(this.owner.tabPosition) && this.tablistElement) {
      this.tablistElement.scrollTo({
        left: this.position,
        behavior: DEFAULT_SCROLL_BEHAVIOR
      });
    } else {
      this.tablistElement.scrollTo({
        top: this.position,
        behavior: DEFAULT_SCROLL_BEHAVIOR
      });
    }
    this.toggleScrollButtonsState();
  }
  calculateListPosition(direction, scrollSpeed) {
    const isHorizontal = isTablistHorizontal(this.owner.tabPosition);
    if (direction === "prev") {
      if (this.localization.rtl && isHorizontal) {
        this.position = this.position + scrollSpeed >= 0 ? 0 : this.position + scrollSpeed;
      } else {
        this.position = this.position - scrollSpeed <= 0 ? 0 : this.position - scrollSpeed;
      }
    } else if (direction === "next" && this.position < this.tablistOverflowSize) {
      if (this.position + scrollSpeed > this.tablistOverflowSize) {
        this.position = this.tablistOverflowSize;
        return;
      }
      if (this.localization.rtl && isHorizontal) {
        this.position -= scrollSpeed;
      } else {
        this.position += scrollSpeed;
      }
    }
  }
  restoreScrollPosition() {
    if (isTablistHorizontal(this.owner.tabPosition)) {
      this.tablistElement.scrollLeft = this.position;
    } else {
      this.tablistElement.scrollTop = this.position;
    }
    this.toggleScrollButtonsState();
  }
  toggleButtonActiveState(buttonType, active) {
    this.scrollButtonActiveStateChange.next({
      buttonType,
      active
    });
  }
  isDisabled = (buttonType) => this.owner[`${buttonType}ScrollButton`]?.host.nativeElement.classList.contains("k-disabled");
  static ɵfac = function ScrollService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ScrollService)(ɵɵinject(NgZone), ɵɵinject(LocalizationService));
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _ScrollService,
    factory: _ScrollService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollService, [{
    type: Injectable
  }], () => [{
    type: NgZone
  }, {
    type: LocalizationService
  }], null);
})();
var normalizeSettings = ({
  enabled = true,
  scrollButtons = "auto",
  mouseScroll = true,
  buttonScrollSpeed = BUTTON_SCROLL_SPEED,
  scrollButtonsPosition = "split",
  prevButtonIcon,
  nextButtonIcon,
  prevSVGButtonIcon,
  nextSVGButtonIcon
}) => ({
  enabled,
  scrollButtons,
  mouseScroll,
  buttonScrollSpeed,
  scrollButtonsPosition,
  prevButtonIcon,
  nextButtonIcon,
  prevSVGButtonIcon,
  nextSVGButtonIcon
});
var normalizeScrollableSettings = (settings) => normalizeSettings(settings === false ? {
  enabled: false
} : settings);
var TabStripScrollableButtonComponent = class _TabStripScrollableButtonComponent {
  host;
  renderer;
  ngZone;
  localization;
  get prevClass() {
    return this.prev;
  }
  get nextClass() {
    return !this.prev;
  }
  prev = false;
  tabPosition;
  scrollable;
  tabScroll = new EventEmitter();
  onClick = new EventEmitter();
  get hostBoundingClientRect() {
    return this.host.nativeElement.getBoundingClientRect();
  }
  get iconClass() {
    return this.scrollButtonIconClass;
  }
  get customIconClass() {
    return this.customScrollButtonIconClass;
  }
  get svgIcon() {
    return this.scrollButtonSVGIcon;
  }
  caretAltLeftIcon = caretAltLeftIcon;
  caretAltRightIcon = caretAltRightIcon;
  caretAltUpIcon = caretAltUpIcon;
  caretAltDownIcon = caretAltDownIcon;
  subs = new Subscription();
  constructor(host, renderer, ngZone, localization) {
    this.host = host;
    this.renderer = renderer;
    this.ngZone = ngZone;
    this.localization = localization;
  }
  ngAfterViewInit() {
    this.ngZone.runOutsideAngular(() => {
      this.subs.add(this.renderer.listen(this.host.nativeElement, "click", this.clickHandler));
    });
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
  toggle(show) {
    this.renderer[show ? "removeClass" : "addClass"](this.host.nativeElement, HIDDEN_CLASS);
  }
  clickHandler = (scrollEvent) => {
    const tabStripScrollEvent = this.emitScrollEvent(scrollEvent);
    const isTabStripScrollEventPrevented = tabStripScrollEvent.isDefaultPrevented();
    if (isTabStripScrollEventPrevented) {
      return;
    }
    const buttonType = this.prev ? "prev" : "next";
    this.onClick.emit(buttonType);
  };
  get scrollButtonIconClass() {
    const defaultPrevIcon = isTablistHorizontal(this.tabPosition) ? !this.localization.rtl ? DIRECTION_CLASSES.left : DIRECTION_CLASSES.right : DIRECTION_CLASSES.up;
    const defaultNextIcon = isTablistHorizontal(this.tabPosition) ? !this.localization.rtl ? DIRECTION_CLASSES.right : DIRECTION_CLASSES.left : DIRECTION_CLASSES.down;
    if (typeof this.scrollable === "object") {
      const prevIcon = typeof this.scrollable.prevButtonIcon === "undefined" ? defaultPrevIcon : "";
      const nextIcon = typeof this.scrollable.nextButtonIcon === "undefined" ? defaultNextIcon : "";
      if (prevIcon && this.prev) {
        return prevIcon;
      } else if (nextIcon && !this.prev) {
        return nextIcon;
      }
    }
  }
  get customScrollButtonIconClass() {
    if (typeof this.scrollable === "object") {
      const prevIcon = this.scrollable.prevButtonIcon;
      const nextIcon = this.scrollable.nextButtonIcon;
      if (prevIcon && this.prev) {
        return `k-icon ${prevIcon}`;
      }
      if (nextIcon && !this.prev) {
        return `k-icon ${nextIcon}`;
      }
    }
  }
  get scrollButtonSVGIcon() {
    const defaultPrevSVGIcon = isTablistHorizontal(this.tabPosition) ? !this.localization.rtl ? this.caretAltLeftIcon : this.caretAltRightIcon : this.caretAltUpIcon;
    const defaultNextSVGIcon = isTablistHorizontal(this.tabPosition) ? !this.localization.rtl ? this.caretAltRightIcon : this.caretAltLeftIcon : this.caretAltDownIcon;
    if (typeof this.scrollable === "object") {
      const prevIcon = this.scrollable.prevSVGButtonIcon !== void 0 ? this.scrollable.prevSVGButtonIcon : defaultPrevSVGIcon;
      const nextIcon = this.scrollable.nextSVGButtonIcon !== void 0 ? this.scrollable.nextSVGButtonIcon : defaultNextSVGIcon;
      if (prevIcon || nextIcon) {
        return this.prev ? prevIcon : nextIcon;
      }
    }
  }
  emitScrollEvent(event) {
    const scrollEvent = new TabScrollEvent({
      originalEvent: event
    });
    this.tabScroll.emit(scrollEvent);
    return scrollEvent;
  }
  static ɵfac = function TabStripScrollableButtonComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TabStripScrollableButtonComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(LocalizationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _TabStripScrollableButtonComponent,
    selectors: [["", "kendoTabStripScrollableButton", ""]],
    hostVars: 4,
    hostBindings: function TabStripScrollableButtonComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("k-tabstrip-prev", ctx.prevClass)("k-tabstrip-next", ctx.nextClass);
      }
    },
    inputs: {
      prev: "prev",
      tabPosition: "tabPosition",
      scrollable: "scrollable"
    },
    outputs: {
      tabScroll: "tabScroll",
      onClick: "onClick"
    },
    standalone: true,
    features: [ɵɵStandaloneFeature],
    attrs: _c12,
    decls: 1,
    vars: 3,
    consts: [["innerCssClass", "k-button-icon", 3, "name", "customFontClass", "svgIcon"]],
    template: function TabStripScrollableButtonComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelement(0, "kendo-icon-wrapper", 0);
      }
      if (rf & 2) {
        ɵɵproperty("name", ctx.iconClass)("customFontClass", ctx.customIconClass)("svgIcon", ctx.svgIcon);
      }
    },
    dependencies: [IconWrapperComponent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabStripScrollableButtonComponent, [{
    type: Component,
    args: [{
      template: `
        <kendo-icon-wrapper
            [name]="iconClass"
            [customFontClass]="customIconClass"
            [svgIcon]="svgIcon"
            innerCssClass="k-button-icon"
        >
        </kendo-icon-wrapper>
    `,
      // eslint-disable-next-line @angular-eslint/component-selector
      selector: "[kendoTabStripScrollableButton]",
      standalone: true,
      imports: [IconWrapperComponent]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: NgZone
  }, {
    type: LocalizationService
  }], {
    prevClass: [{
      type: HostBinding,
      args: ["class.k-tabstrip-prev"]
    }],
    nextClass: [{
      type: HostBinding,
      args: ["class.k-tabstrip-next"]
    }],
    prev: [{
      type: Input
    }],
    tabPosition: [{
      type: Input
    }],
    scrollable: [{
      type: Input
    }],
    tabScroll: [{
      type: Output
    }],
    onClick: [{
      type: Output
    }]
  });
})();
var TabComponent = class _TabComponent {
  localization;
  tab;
  index;
  tabStripClosable;
  tabStripCloseIcon;
  customTabstripCloseIcon;
  closeSVGIcon;
  tabClose = new EventEmitter();
  hostClasses = true;
  get activeClass() {
    return this.tab.selected;
  }
  get disabledClass() {
    return this.tab.disabled;
  }
  get focusedClass() {
    return this.tab.focused;
  }
  get tabIndex() {
    return this.tab.selected || this.tab.focused ? 0 : -1;
  }
  constructor(localization) {
    this.localization = localization;
  }
  get tabClosable() {
    if (this.tab.closable !== void 0) {
      return this.tab.closable;
    }
    return this.tabStripClosable;
  }
  get closeSVGIconClass() {
    if (this.customCloseIconClasses) {
      return;
    }
    if (this.tab.closeSVGIcon) {
      return this.tab.closeSVGIcon;
    }
    if (this.closeSVGIcon) {
      return this.closeSVGIcon;
    }
    return xIcon;
  }
  get closeIconClasses() {
    if (!this.customTabstripCloseIcon && this.tabStripCloseIcon && !this.tab.closeIconClass) {
      if (this.tab.closeIcon) {
        return this.tab.closeIcon;
      }
      return this.tabStripCloseIcon;
    }
  }
  get customCloseIconClasses() {
    if (this.customTabstripCloseIcon || this.tab.closeIconClass) {
      if (this.tab.closeIconClass) {
        return this.tab.closeIconClass;
      }
      return this.customTabstripCloseIcon;
    }
  }
  get closeButtonTitle() {
    return this.localization.get("closeTitle");
  }
  closeTab(index) {
    const closeArgs = new TabCloseEvent(index, this.tab);
    this.tabClose.emit(closeArgs);
  }
  static ɵfac = function TabComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TabComponent)(ɵɵdirectiveInject(LocalizationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _TabComponent,
    selectors: [["", "kendoTabStripTab", ""]],
    hostVars: 11,
    hostBindings: function TabComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("aria-selected", ctx.activeClass)("aria-disabled", ctx.disabledClass)("tabindex", ctx.tabIndex);
        ɵɵclassProp("k-tabstrip-item", ctx.hostClasses)("k-active", ctx.activeClass)("k-disabled", ctx.disabledClass)("k-focus", ctx.focusedClass);
      }
    },
    inputs: {
      tab: "tab",
      index: "index",
      tabStripClosable: "tabStripClosable",
      tabStripCloseIcon: "tabStripCloseIcon",
      customTabstripCloseIcon: "customTabstripCloseIcon",
      closeSVGIcon: "closeSVGIcon"
    },
    outputs: {
      tabClose: "tabClose"
    },
    standalone: true,
    features: [ɵɵStandaloneFeature],
    attrs: _c13,
    decls: 3,
    vars: 2,
    consts: [["tabTemplate", ""], [3, "ngTemplateOutlet"], [1, "k-remove-tab", "k-icon-button", "k-button", "k-button-md", "k-rounded-md", "k-button-flat-base", "k-button-flat", 3, "title"], [1, "k-link"], [1, "k-link-text"], [1, "k-remove-tab", "k-icon-button", "k-button", "k-button-md", "k-rounded-md", "k-button-flat-base", "k-button-flat", 3, "click", "title"], ["innerCssClass", "k-button-icon", 3, "svgIcon", "name", "customFontClass"]],
    template: function TabComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, TabComponent_Conditional_0_Template, 2, 2)(1, TabComponent_Conditional_1_Template, 2, 1, null, 1)(2, TabComponent_Conditional_2_Template, 2, 4, "span", 2);
      }
      if (rf & 2) {
        ɵɵconditional(!ctx.tab.tabTemplate ? 0 : 1);
        ɵɵadvance(2);
        ɵɵconditional(ctx.tabClosable ? 2 : -1);
      }
    },
    dependencies: [NgTemplateOutlet, IconWrapperComponent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabComponent, [{
    type: Component,
    args: [{
      // eslint-disable-next-line @angular-eslint/component-selector
      selector: "[kendoTabStripTab]",
      template: `
        @if (!tab.tabTemplate) {
          @if (!tab.tabTitle) {
            <span class="k-link">
              <span class="k-link-text">{{ tab.title }}</span>
            </span>
          }
          @if (tab.tabTitle) {
            <span class="k-link">
              <ng-template [ngTemplateOutlet]="tab.tabTitle.templateRef">
              </ng-template>
            </span>
          }
        } @else {
          <ng-template #tabTemplate [ngTemplateOutlet]="tab.tabTemplate?.templateRef">
          </ng-template>
        }

        @if (tabClosable) {
          <span class="k-remove-tab k-icon-button k-button k-button-md k-rounded-md k-button-flat-base k-button-flat"
            (click)="closeTab(index)" [title]="closeButtonTitle">
            <kendo-icon-wrapper
              [svgIcon]="closeSVGIconClass" [name]="closeIconClasses"
            innerCssClass="k-button-icon" [customFontClass]="customCloseIconClasses"></kendo-icon-wrapper>
          </span>
        }
        `,
      standalone: true,
      imports: [NgTemplateOutlet, IconWrapperComponent]
    }]
  }], () => [{
    type: LocalizationService
  }], {
    tab: [{
      type: Input
    }],
    index: [{
      type: Input
    }],
    tabStripClosable: [{
      type: Input
    }],
    tabStripCloseIcon: [{
      type: Input
    }],
    customTabstripCloseIcon: [{
      type: Input
    }],
    closeSVGIcon: [{
      type: Input
    }],
    tabClose: [{
      type: Output
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class.k-tabstrip-item"]
    }],
    activeClass: [{
      type: HostBinding,
      args: ["attr.aria-selected"]
    }, {
      type: HostBinding,
      args: ["class.k-active"]
    }],
    disabledClass: [{
      type: HostBinding,
      args: ["attr.aria-disabled"]
    }, {
      type: HostBinding,
      args: ["class.k-disabled"]
    }],
    focusedClass: [{
      type: HostBinding,
      args: ["class.k-focus"]
    }],
    tabIndex: [{
      type: HostBinding,
      args: ["attr.tabindex"]
    }]
  });
})();
var TabStripMessages = class _TabStripMessages extends ComponentMessages {
  /**
   * Sets the title for the **Close** button in the TabStrip tab.
   */
  closeTitle;
  /**
   * Sets the title for the **Previous Tab** button when the TabStrip is scrollable.
   */
  previousTabButton;
  /**
   * Sets the title for the **Next Tab** button when the TabStrip is scrollable.
   */
  nextTabButton;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵTabStripMessages_BaseFactory;
    return function TabStripMessages_Factory(__ngFactoryType__) {
      return (ɵTabStripMessages_BaseFactory || (ɵTabStripMessages_BaseFactory = ɵɵgetInheritedFactory(_TabStripMessages)))(__ngFactoryType__ || _TabStripMessages);
    };
  })();
  static ɵdir = ɵɵdefineDirective({
    type: _TabStripMessages,
    selectors: [["kendo-tabstrip-messages-base"]],
    inputs: {
      closeTitle: "closeTitle",
      previousTabButton: "previousTabButton",
      nextTabButton: "nextTabButton"
    },
    features: [ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabStripMessages, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "kendo-tabstrip-messages-base"
    }]
  }], null, {
    closeTitle: [{
      type: Input
    }],
    previousTabButton: [{
      type: Input
    }],
    nextTabButton: [{
      type: Input
    }]
  });
})();
var LocalizedTabStripMessagesDirective = class _LocalizedTabStripMessagesDirective extends TabStripMessages {
  service;
  constructor(service) {
    super();
    this.service = service;
  }
  static ɵfac = function LocalizedTabStripMessagesDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LocalizedTabStripMessagesDirective)(ɵɵdirectiveInject(LocalizationService));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _LocalizedTabStripMessagesDirective,
    selectors: [["", "kendoTabStripLocalizedMessages", ""]],
    standalone: true,
    features: [ɵɵProvidersFeature([{
      provide: TabStripMessages,
      useExisting: forwardRef(() => _LocalizedTabStripMessagesDirective)
    }]), ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LocalizedTabStripMessagesDirective, [{
    type: Directive,
    args: [{
      providers: [{
        provide: TabStripMessages,
        useExisting: forwardRef(() => LocalizedTabStripMessagesDirective)
      }],
      selector: `[kendoTabStripLocalizedMessages]`,
      standalone: true
    }]
  }], () => [{
    type: LocalizationService
  }], null);
})();
var TabStripComponent = class _TabStripComponent {
  localization;
  renderer;
  wrapper;
  tabstripService;
  scrollService;
  ngZone;
  /**
   * Sets the height of the TabStrip.
   * Accepts a CSS size value, such as `100px`, `50%`, or `auto`.
   */
  set height(value) {
    this._height = value;
    this.renderer.setStyle(this.wrapper.nativeElement, "height", value);
  }
  get height() {
    return this._height;
  }
  /**
   * Sets whether the TabStrip should animate when switching tabs.
   *
   * @default true
   */
  animate = true;
  /**
   * Sets the alignment of the tabs.
   *
   * @default 'start'
   */
  tabAlignment = "start";
  /**
   * Sets the position of the tabs.
   *
   * @default 'top'
   */
  tabPosition = "top";
  /**
  * Controls how the TabStrip renders tab content.
  *
  * The available options are:
  *
  * * `true`&mdash;Renders all tabs' content and persists them in the DOM.
  * * `false`&mdash;Removes inactive tabs' content from the DOM.
  * * `"loadOnDemand"`&mdash;Loads tabs' content only when activated for the first time. Inactive tabs' content is not rendered until the tab is activated.
  *
  * For more information, refer to the [Rendering Modes](slug:rendering_tabstrip) article.
  *
  * @default false
  */
  keepTabContent = false;
  /**
   * When set to `true`, renders a close button inside each tab.
   *
   * @default false
   */
  closable = false;
  /**
   * Enables scrolling of the tab list.
   * When set to `true` and the total size of all tabs exceeds the size of the TabStrip container, scroll buttons appear on each end of the tab list.
   *
   * @default false
   */
  set scrollable(value) {
    this._scrollableSettings = normalizeScrollableSettings(value);
    if (this.tablist) {
      this.toggleScrollButtons(this.scrollService.tabsOverflow);
      if (this.isScrollable && this.mouseScrollEnabled) {
        this.attachTablistScrollHandler(this.tablist.nativeElement);
      }
    }
  }
  get scrollable() {
    return this._scrollableSettings;
  }
  /**
   * Sets the size of the TabStrip.
   * [See example](slug:api_layout_tabstripcomponent#toc-size).
   * @default 'medium'
   */
  set size(value) {
    switch (value) {
      case "small":
        this.renderer.removeClass(this.wrapper.nativeElement, "k-tabstrip-md");
        this.renderer.removeClass(this.wrapper.nativeElement, "k-tabstrip-lg");
        this.renderer.addClass(this.wrapper.nativeElement, "k-tabstrip-sm");
        break;
      case "medium":
        this.renderer.removeClass(this.wrapper.nativeElement, "k-tabstrip-sm");
        this.renderer.removeClass(this.wrapper.nativeElement, "k-tabstrip-lg");
        this.renderer.addClass(this.wrapper.nativeElement, "k-tabstrip-md");
        break;
      case "large":
        this.renderer.removeClass(this.wrapper.nativeElement, "k-tabstrip-md");
        this.renderer.removeClass(this.wrapper.nativeElement, "k-tabstrip-sm");
        this.renderer.addClass(this.wrapper.nativeElement, "k-tabstrip-lg");
        break;
      case "none":
        this.renderer.removeClass(this.wrapper.nativeElement, "k-tabstrip-md");
        this.renderer.removeClass(this.wrapper.nativeElement, "k-tabstrip-lg");
        this.renderer.removeClass(this.wrapper.nativeElement, "k-tabstrip-sm");
    }
    this._size = value;
    this.ngZone.onStable.pipe(take(1)).subscribe(() => this.onResize());
  }
  get size() {
    return this._size;
  }
  /**
   * Defines the name of an existing font icon in the Kendo UI theme for the close icon.
   * @default 'x'
   */
  closeIcon = "x";
  /**
   * Defines a custom CSS class, or multiple classes separated by spaces, applied to the close button.
   */
  closeIconClass;
  /**
   * Defines an SVGIcon to render for the close icon.
   * The input accepts either an [existing Kendo SVG icon](slug:svgicon_list) or a custom one.
   */
  set closeSVGIcon(icon) {
    if (isDevMode() && icon && this.closeIcon && this.closeIcon !== "x") {
      throw new Error("Setting both closeIcon and svgIcon options at the same time is not supported.");
    }
    this._closeSVGIcon = icon;
  }
  get closeSVGIcon() {
    return this._closeSVGIcon;
  }
  /**
   * If set to `false`, the content area is hidden, but the tab headers are still visible.
   *
   * @default true
   */
  showContentArea = true;
  /**
   * Fires each time a tab is selected.
   * The event data contains the index of the selected tab and its title.
   */
  tabSelect = new EventEmitter();
  /**
   * Fires each time a tab is closed.
   * The event data contains the index of the closed tab and its instance.
   */
  tabClose = new EventEmitter();
  /**
   * Fires when the tab list is scrolled.
   * The event is preventable.
   */
  tabScroll = new EventEmitter();
  hostClasses = true;
  get tabsAtTop() {
    return this.tabPosition === "top";
  }
  get tabsAtRight() {
    return this.tabPosition === "right";
  }
  get tabsAtBottom() {
    return this.tabPosition === "bottom";
  }
  get tabsAtLeft() {
    return this.tabPosition === "left";
  }
  get dir() {
    return this.localization.rtl ? "rtl" : "ltr";
  }
  get tabStripScrollable() {
    return this._scrollableSettings.enabled;
  }
  get tabStripScrollableOverlay() {
    return this._scrollableSettings.enabled && !this.hasScrollButtons.visible;
  }
  /**
   * A query list of all declared tabs.
   */
  tabs = new QueryList();
  /**
   * @hidden
   */
  tablist;
  /**
   * @hidden
   */
  tabHeaderContainers;
  /**
   * @hidden
   */
  prevScrollButton;
  /**
   * @hidden
   */
  nextScrollButton;
  /**
   * @hidden
   */
  localizationChangeSubscription;
  /**
   * @hidden
   */
  showLicenseWatermark = false;
  /**
   * @hidden
   */
  licenseMessage;
  _height;
  _scrollableSettings = normalizeScrollableSettings(false);
  subscriptions = new Subscription();
  subscriptionsArePresent = false;
  _closeSVGIcon;
  tabStripId = guid();
  tabsChangesSub;
  activeStateChangeSub;
  _size = "medium";
  constructor(localization, renderer, wrapper, tabstripService, scrollService, ngZone) {
    this.localization = localization;
    this.renderer = renderer;
    this.wrapper = wrapper;
    this.tabstripService = tabstripService;
    this.scrollService = scrollService;
    this.ngZone = ngZone;
    const isValid = A(packageMetadata);
    this.licenseMessage = getLicenseMessage(packageMetadata);
    this.showLicenseWatermark = shouldShowValidationUI(isValid);
    this.tabstripService.owner = this;
    this.scrollService.owner = this;
    this.subscriptions.add(this.scrollService.scrollButtonActiveStateChange.subscribe((activeButtonSettings) => {
      if (this.hasScrollButtons.visible) {
        const action = activeButtonSettings.active ? "remove" : "add";
        this.renderer[`${action}Class`](this[`${activeButtonSettings.buttonType}ScrollButton`].host.nativeElement, "k-disabled");
      }
    }));
  }
  ngAfterViewInit() {
    if (!isDocumentAvailable()) {
      return;
    }
    this.ngZone.runOutsideAngular(() => {
      if (this.scrollService.tabsOverflow) {
        this.toggleScrollButtons(true);
      } else {
        this.toggleScrollButtons(false);
      }
      setTimeout(() => {
        this.scrollToSelectedTab();
      });
    });
    this.initDomEvents();
    this.tabsChangesSub = this.tabs.changes.subscribe(() => {
      this.ngZone.onStable.pipe(take(1)).subscribe(() => {
        this.toggleScrollButtons(this.scrollService.tabsOverflow);
        this.scrollService.toggleScrollButtonsState();
      });
    });
    this.isScrollable && !this.hasScrollButtons.visible && this.setScrollableOverlayClasses();
  }
  ngOnChanges(changes) {
    if (!isDocumentAvailable()) {
      return;
    }
    const positionChange = changes["tabPosition"];
    if (positionChange) {
      const tabsAtBottomChanged = positionChange.previousValue === "bottom" || positionChange.currentValue === "bottom";
      this.ngZone.onStable.pipe(take(1)).subscribe(() => {
        if (tabsAtBottomChanged) {
          if (this.subscriptionsArePresent) {
            this.subscriptions.unsubscribe();
            this.subscriptions = new Subscription();
            this.subscriptionsArePresent = false;
            this.activeStateChangeSub = this.scrollService.scrollButtonActiveStateChange.subscribe((activeButtonSettings) => {
              if (this.hasScrollButtons.visible) {
                const action = activeButtonSettings.active ? "remove" : "add";
                this.renderer[`${action}Class`](this[`${activeButtonSettings.buttonType}ScrollButton`].host.nativeElement, "k-disabled");
              }
            });
          }
          this.initDomEvents();
        }
        this.scrollService.restoreScrollPosition();
      });
    }
  }
  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
    if (this.tabsChangesSub) {
      this.tabsChangesSub.unsubscribe();
    }
    if (this.activeStateChangeSub) {
      this.activeStateChangeSub.unsubscribe();
    }
  }
  /**
   * @hidden
   */
  get isScrollable() {
    return this._scrollableSettings.enabled;
  }
  /**
   * @hidden
   */
  get hasScrollButtons() {
    return tabStripHasScrollButtons(this._scrollableSettings);
  }
  /**
   * @hidden
   */
  get mouseScrollEnabled() {
    return mouseScrollEnabled(this._scrollableSettings);
  }
  /**
   * @hidden
   */
  get itemsWrapperClass() {
    return isTablistHorizontal(this.tabPosition) ? "k-hstack" : "k-vstack";
  }
  /**
   * Allows you to programmatically select a tab by its index.
   * If the tab is disabled, it will not be selected. The `tabSelect` event will not be fired.
   * @param {number} index The index of the tab that will be selected.
   */
  selectTab(index) {
    const tab = getTabByIndex(this.tabs, index);
    if (!tab || tab.disabled) {
      return;
    }
    this.tabstripService.selectTab(tab, index);
    this.scrollToSelectedTab();
  }
  /**
   * @hidden
   */
  getTabId(idx2) {
    return getId$1("k-tabstrip-tab", this.tabStripId, idx2);
  }
  /**
   * @hidden
   */
  getTabPanelId(idx2) {
    return getId$1("k-tabstrip-tabpanel", this.tabStripId, idx2);
  }
  /**
   * @hidden
   */
  onTabClick(originalEvent, tabIndex) {
    if (isFocusable(originalEvent.target)) {
      return;
    }
    const targetElement = originalEvent.target;
    const isTargetCloseButton = hasClass(targetElement, "k-remove-tab") || hasClass(targetElement.parentElement, "k-remove-tab");
    if (isTargetCloseButton) {
      return;
    }
    const tab = getTabByIndex(this.tabs, tabIndex);
    this.tabstripService.onTabSelect(tab, tabIndex);
    this.scrollToSelectedTab();
  }
  /**
   * @hidden
   */
  onResize() {
    if (this.scrollService.tabsOverflow) {
      this.toggleScrollButtons(true);
    } else {
      this.toggleScrollButtons(false);
    }
    this.ngZone.runOutsideAngular(() => {
      this.scrollService.toggleScrollButtonsState();
    });
  }
  /**
   * @hidden
   */
  scrollToSelectedTab() {
    if (this._scrollableSettings.enabled) {
      this.scrollService.scrollToSelectedTab();
    }
  }
  /**
   * @hidden
   */
  onScrollButtonClick(buttonType) {
    this.scrollService.scrollTabs(buttonType);
  }
  initDomEvents() {
    if (!this.wrapper || this.subscriptionsArePresent) {
      return;
    }
    const tablist = this.tablist.nativeElement;
    this.ngZone.runOutsideAngular(() => {
      this.subscriptions.add(this.renderer.listen(tablist, "keydown", (ev) => {
        this.tabstripService.onKeyDown(ev);
      }));
    });
    this.subscriptions.add(this.renderer.listen(tablist, "focusout", () => {
      resetTabFocus(this.tabs);
    }));
    if (this.isScrollable && this.mouseScrollEnabled) {
      this.attachTablistScrollHandler(tablist);
    }
    this.subscriptionsArePresent = true;
  }
  toggleScrollButtons(tabsOverflow) {
    this.ngZone.onStable.pipe(take(1)).subscribe(() => {
      const scrollButtonsSetting = this._scrollableSettings.scrollButtons;
      const scrollButtonsArePresent = this.prevScrollButton && this.nextScrollButton;
      const shouldShowButtons = scrollButtonsArePresent && tabsOverflow;
      const shouldHideButtons = scrollButtonsArePresent && !tabsOverflow && scrollButtonsSetting !== "visible";
      const alwaysVisible = scrollButtonsSetting === "visible";
      if (shouldHideButtons) {
        this.prevScrollButton.toggle(false);
        this.nextScrollButton.toggle(false);
      } else if (shouldShowButtons || alwaysVisible) {
        this.prevScrollButton.toggle(true);
        this.nextScrollButton.toggle(true);
      }
      if (scrollButtonsArePresent) {
        this.ngZone.runOutsideAngular(() => {
          this.scrollService.toggleScrollButtonsState();
        });
      }
    });
  }
  attachTablistScrollHandler(tablist) {
    this.ngZone.runOutsideAngular(() => {
      this.subscriptions.add(this.renderer.listen(tablist, "scroll", (e) => {
        const scrollEvent = new TabScrollEvent({
          originalEvent: e
        });
        this.tabScroll.emit(scrollEvent);
        const isTabStripScrollEventPrevented = scrollEvent.isDefaultPrevented();
        if (isTabStripScrollEventPrevented || !this.scrollService.tabsOverflow) {
          return;
        }
        if (!this.hasScrollButtons.visible) {
          this.setScrollableOverlayClasses();
        }
        this.scrollService.onScroll(e);
      }));
    });
  }
  setScrollableOverlayClasses() {
    const wrapper = this.wrapper.nativeElement;
    const container = this.tablist?.nativeElement;
    if (!container) {
      return;
    }
    const scrollOffset = isTablistHorizontal(this.tabPosition) ? container.scrollLeft : container.scrollTop;
    if (scrollOffset === 0) {
      this.renderer.removeClass(wrapper, "k-tabstrip-scrollable-end");
      this.renderer.addClass(wrapper, "k-tabstrip-scrollable-start");
    } else if (scrollOffset > 0 && scrollOffset < this.scrollService.tablistOverflowSize) {
      this.renderer.removeClass(wrapper, "k-tabstrip-scrollable-end");
      this.renderer.removeClass(wrapper, "k-tabstrip-scrollable-start");
    } else {
      this.renderer.removeClass(wrapper, "k-tabstrip-scrollable-start");
      this.renderer.addClass(wrapper, "k-tabstrip-scrollable-end");
    }
  }
  static ɵfac = function TabStripComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TabStripComponent)(ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(TabStripService), ɵɵdirectiveInject(ScrollService), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _TabStripComponent,
    selectors: [["kendo-tabstrip"]],
    contentQueries: function TabStripComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, TabStripTabComponent, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tabs = _t);
      }
    },
    viewQuery: function TabStripComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c14, 5);
        ɵɵviewQuery(_c15, 5);
        ɵɵviewQuery(_c16, 5);
        ɵɵviewQuery(_c17, 5, ElementRef);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tablist = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.prevScrollButton = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nextScrollButton = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tabHeaderContainers = _t);
      }
    },
    hostVars: 17,
    hostBindings: function TabStripComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("dir", ctx.dir);
        ɵɵclassProp("k-tabstrip", ctx.hostClasses)("k-tabstrip-md", ctx.hostClasses)("k-tabstrip-top", ctx.tabsAtTop)("k-tabstrip-right", ctx.tabsAtRight)("k-tabstrip-bottom", ctx.tabsAtBottom)("k-tabstrip-left", ctx.tabsAtLeft)("k-tabstrip-scrollable", ctx.tabStripScrollable)("k-tabstrip-scrollable-overlay", ctx.tabStripScrollableOverlay);
      }
    },
    inputs: {
      height: "height",
      animate: "animate",
      tabAlignment: "tabAlignment",
      tabPosition: "tabPosition",
      keepTabContent: "keepTabContent",
      closable: "closable",
      scrollable: "scrollable",
      size: "size",
      closeIcon: "closeIcon",
      closeIconClass: "closeIconClass",
      closeSVGIcon: "closeSVGIcon",
      showContentArea: "showContentArea"
    },
    outputs: {
      tabSelect: "tabSelect",
      tabClose: "tabClose",
      tabScroll: "tabScroll"
    },
    exportAs: ["kendoTabStrip"],
    standalone: true,
    features: [ɵɵProvidersFeature([TabStripService, ScrollService, LocalizationService, {
      provide: L10N_PREFIX,
      useValue: "kendo.tabstrip"
    }]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    decls: 9,
    vars: 4,
    consts: () => {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_LAYOUT_FESM2022_PROGRESS_KENDO_ANGULAR_LAYOUT_MJS_0 = goog.getMsg("Close");
        i18n_0 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_LAYOUT_FESM2022_PROGRESS_KENDO_ANGULAR_LAYOUT_MJS_0;
      } else {
        i18n_0 = $localize`:kendo.tabstrip.closeTitle|The title for the **Close** button in the TabStrip tab.:Close`;
      }
      let i18n_1;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_LAYOUT_FESM2022_PROGRESS_KENDO_ANGULAR_LAYOUT_MJS_1 = goog.getMsg("Previous Tab");
        i18n_1 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_LAYOUT_FESM2022_PROGRESS_KENDO_ANGULAR_LAYOUT_MJS_1;
      } else {
        i18n_1 = $localize`:kendo.tabstrip.previousTabButton|The title for the **Previous Tab** button when the Tabstrip is scrollable.:Previous Tab`;
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_LAYOUT_FESM2022_PROGRESS_KENDO_ANGULAR_LAYOUT_MJS_2 = goog.getMsg("Next Tab");
        i18n_2 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_LAYOUT_FESM2022_PROGRESS_KENDO_ANGULAR_LAYOUT_MJS_2;
      } else {
        i18n_2 = $localize`:kendo.tabstrip.nextTabButton|The title for the **Next Tab** button when the Tabstrip is scrollable.:Next Tab`;
      }
      return [["heading", ""], ["content", ""], ["tablist", ""], ["prevScrollButton", ""], ["nextScrollButton", ""], ["tabHeaderContainer", ""], ["kendoTabStripLocalizedMessages", "", "closeTitle", i18n_0, "previousTabButton", i18n_1, "nextTabButton", i18n_2], ["kendoWatermarkOverlay", "", 3, "licenseMessage"], [4, "ngTemplateOutlet"], [1, "k-tabstrip-items-wrapper", 3, "ngClass"], ["role", "button", "kendoTabStripScrollableButton", "", 1, "k-icon-button", "k-button", "k-button-flat", "k-button-flat-base", 3, "scrollable", "tabPosition", "prev", "title", "ngClass"], ["role", "tablist", 1, "k-reset", "k-tabstrip-items", 3, "ngClass"], ["kendoTabStripTab", "", "role", "tab", 3, "k-first", "k-last", "ngClass", "ngStyle", "tab", "index", "tabStripClosable", "tabStripCloseIcon", "customTabstripCloseIcon", "closeSVGIcon", "id"], ["role", "button", "kendoTabStripScrollableButton", "", 1, "k-icon-button", "k-button", "k-button-flat", "k-button-flat-base", 3, "tabScroll", "onClick", "scrollable", "tabPosition", "prev", "title", "ngClass"], ["kendoTabStripTab", "", "role", "tab", 3, "tabClose", "click", "ngClass", "ngStyle", "tab", "index", "tabStripClosable", "tabStripCloseIcon", "customTabstripCloseIcon", "closeSVGIcon", "id"], ["role", "tabpanel", 3, "ngClass", "tabIndex", "id"], [3, "ngTemplateOutlet"], [3, "resize"]];
    },
    template: function TabStripComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementContainer(0, 6);
        ɵɵtemplate(1, TabStripComponent_Conditional_1_Template, 2, 2)(2, TabStripComponent_Conditional_2_Template, 2, 2, "ng-container")(3, TabStripComponent_ng_template_3_Template, 9, 16, "ng-template", null, 0, ɵɵtemplateRefExtractor)(5, TabStripComponent_ng_template_5_Template, 2, 0, "ng-template", null, 1, ɵɵtemplateRefExtractor)(7, TabStripComponent_Conditional_7_Template, 1, 0, "kendo-resize-sensor")(8, TabStripComponent_Conditional_8_Template, 1, 1, "div", 7);
      }
      if (rf & 2) {
        ɵɵadvance();
        ɵɵconditional(!ctx.tabsAtBottom ? 1 : -1);
        ɵɵadvance();
        ɵɵconditional(ctx.tabsAtBottom ? 2 : -1);
        ɵɵadvance(5);
        ɵɵconditional(ctx.isScrollable ? 7 : -1);
        ɵɵadvance();
        ɵɵconditional(ctx.showLicenseWatermark ? 8 : -1);
      }
    },
    dependencies: [LocalizedTabStripMessagesDirective, NgTemplateOutlet, NgClass, TabStripScrollableButtonComponent, TabComponent, NgStyle, ResizeSensorComponent, WatermarkOverlayComponent],
    encapsulation: 2,
    data: {
      animation: [trigger("state", [state("active", style({
        opacity: 1
      })), transition("* => active", [style({
        opacity: 0
      }), animate("400ms ease-in")])])]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabStripComponent, [{
    type: Component,
    args: [{
      animations: [trigger("state", [state("active", style({
        opacity: 1
      })), transition("* => active", [style({
        opacity: 0
      }), animate("400ms ease-in")])])],
      providers: [TabStripService, ScrollService, LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.tabstrip"
      }],
      exportAs: "kendoTabStrip",
      selector: "kendo-tabstrip",
      template: `
        <ng-container kendoTabStripLocalizedMessages
          i18n-closeTitle="kendo.tabstrip.closeTitle|The title for the **Close** button in the TabStrip tab."
          closeTitle="Close"

          i18n-previousTabButton="kendo.tabstrip.previousTabButton|The title for the **Previous Tab** button when the Tabstrip is scrollable."
          previousTabButton="Previous Tab"

          i18n-nextTabButton="kendo.tabstrip.nextTabButton|The title for the **Next Tab** button when the Tabstrip is scrollable."
          nextTabButton="Next Tab"
          >
        </ng-container>
        @if (!tabsAtBottom) {
          <ng-container *ngTemplateOutlet="heading"></ng-container>
          @if (showContentArea) {
            <ng-container *ngTemplateOutlet="content"></ng-container>
          }
        }

        @if (tabsAtBottom) {
          @if (showContentArea) {
            <ng-container *ngTemplateOutlet="content"></ng-container>
          }
          <ng-container *ngTemplateOutlet="heading"></ng-container>
        }
        <ng-template #heading>
          <div class="k-tabstrip-items-wrapper" [class.k-tabstrip-items-wrapper-scroll]="mouseScrollEnabled" [ngClass]="itemsWrapperClass">
            @if (hasScrollButtons.visible && hasScrollButtons.position !== 'end') {
              <span
                role="button"
                #prevScrollButton
                kendoTabStripScrollableButton
                [scrollable]="scrollable"
                [tabPosition]="tabPosition"
                [prev]="true"
                [title]="localization.get('previousTabButton')"
                (tabScroll)="tabScroll.emit($event)"
                class="k-icon-button k-button k-button-flat k-button-flat-base"
                    [ngClass]="{
                        'k-button-sm': size === 'small',
                        'k-button-md': size === 'medium' || !size,
                        'k-button-lg': size === 'large'
                    }"
              (onClick)="onScrollButtonClick($event)"></span>
            }
            @if (hasScrollButtons.visible && hasScrollButtons.position === 'start') {
              <span
                role="button"
                #nextScrollButton
                kendoTabStripScrollableButton
                [scrollable]="scrollable"
                [tabPosition]="tabPosition"
                [prev]="false"
                [title]="localization.get('nextTabButton')"
                (tabScroll)="tabScroll.emit($event)"
                class="k-icon-button k-button k-button-flat k-button-flat-base"
                    [ngClass]="{
                        'k-button-sm': size === 'small',
                        'k-button-md': size === 'medium' || !size,
                        'k-button-lg': size === 'large'
                    }"
              (onClick)="onScrollButtonClick($event)"></span>
            }
            <ul role="tablist" #tablist
              class="k-reset k-tabstrip-items"
                    [ngClass]="{
                        'k-tabstrip-items-start': tabAlignment === 'start',
                        'k-tabstrip-items-center': tabAlignment === 'center',
                        'k-tabstrip-items-end': tabAlignment === 'end',
                        'k-tabstrip-items-stretched': tabAlignment === 'stretched',
                        'k-tabstrip-items-justify': tabAlignment === 'justify',
                        'k-tabstrip-items-scroll': mouseScrollEnabled
                    }"
              [attr.aria-orientation]="tabPosition === 'left' || tabPosition === 'right' ? 'vertical' : 'horizontal'"
              >
              @for (tab of tabs; track tab; let i = $index) {
                <li
                    #tabHeaderContainer
                    kendoTabStripTab
                    [class.k-first]="i === 0"
                    [class.k-last]="i === tabs.length - 1"
                    [ngClass]="tab.cssClass"
                    [ngStyle]="tab.cssStyle"
                    [tab]="tab"
                    [index]="i"
                    role="tab"
                    [tabStripClosable]="closable"
                    [tabStripCloseIcon]="closeIcon"
                    [customTabstripCloseIcon]="closeIconClass"
                    [closeSVGIcon]="closeSVGIcon"
                    (tabClose)="tabClose.emit($event)"
                    (click)="onTabClick($event, i)"
                    [id]="getTabId(i)"
                    [attr.aria-controls]="(showContentArea && tab.selected) ? getTabPanelId(i) : undefined"></li>
              }
            </ul>
            @if (hasScrollButtons.visible && hasScrollButtons.position === 'end') {
              <span
                role="button"
                #prevScrollButton
                kendoTabStripScrollableButton
                [scrollable]="scrollable"
                [tabPosition]="tabPosition"
                [prev]="true"
                [title]="localization.get('previousTabButton')"
                (tabScroll)="tabScroll.emit($event)"
                class="k-icon-button k-button k-button-flat k-button-flat-base"
                    [ngClass]="{
                        'k-button-sm': size === 'small',
                        'k-button-md': size === 'medium' || !size,
                        'k-button-lg': size === 'large'
                    }"
              (onClick)="onScrollButtonClick($event)"></span>
            }
            @if (hasScrollButtons.visible && hasScrollButtons.position !== 'start') {
              <span
                role="button"
                #nextScrollButton
                kendoTabStripScrollableButton
                [scrollable]="scrollable"
                [tabPosition]="tabPosition"
                [prev]="false"
                [title]="localization.get('nextTabButton')"
                (tabScroll)="tabScroll.emit($event)"
                class="k-icon-button k-button k-button-flat k-button-flat-base"
                    [ngClass]="{
                        'k-button-sm': size === 'small',
                        'k-button-md': size === 'medium' || !size,
                        'k-button-lg': size === 'large'
                    }"
              (onClick)="onScrollButtonClick($event)"></span>
            }
          </div>
        </ng-template>
        <ng-template #content>
            @for (tab of tabs; track tab; let i = $index) {
                @if (tab.selected || keepTabContent !== false) {
                    @defer (when tab.selected || keepTabContent === true; prefetch on idle) {
                        <div
                            [@state]="tab.selected && animate ? 'active' : 'inactive'"
                            [ngClass]="!this.keepTabContent || tab.selected ? 'k-tabstrip-content k-active' : 'k-tabstrip-content'"
                            [tabIndex]="0"
                            role="tabpanel"
                            [id]="getTabPanelId(i)"
                            [attr.aria-hidden]="!tab.selected"
                            [attr.aria-labelledby]="getTabId(i)"
                            [attr.aria-disabled]="tab.disabled"
                        >
                            <ng-template [ngTemplateOutlet]="tab.tabContent?.templateRef"></ng-template>
                        </div>
                    }
                }
            }
        </ng-template>
        @if (isScrollable) {
          <kendo-resize-sensor (resize)="onResize()"></kendo-resize-sensor>
        }
        @if (showLicenseWatermark) {
          <div kendoWatermarkOverlay [licenseMessage]="licenseMessage"></div>
        }
        `,
      standalone: true,
      imports: [LocalizedTabStripMessagesDirective, NgTemplateOutlet, NgClass, TabStripScrollableButtonComponent, TabComponent, NgStyle, ResizeSensorComponent, WatermarkOverlayComponent]
    }]
  }], () => [{
    type: LocalizationService
  }, {
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: TabStripService
  }, {
    type: ScrollService
  }, {
    type: NgZone
  }], {
    height: [{
      type: Input
    }],
    animate: [{
      type: Input
    }],
    tabAlignment: [{
      type: Input
    }],
    tabPosition: [{
      type: Input
    }],
    keepTabContent: [{
      type: Input
    }],
    closable: [{
      type: Input
    }],
    scrollable: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    closeIcon: [{
      type: Input
    }],
    closeIconClass: [{
      type: Input
    }],
    closeSVGIcon: [{
      type: Input
    }],
    showContentArea: [{
      type: Input
    }],
    tabSelect: [{
      type: Output
    }],
    tabClose: [{
      type: Output
    }],
    tabScroll: [{
      type: Output
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class.k-tabstrip"]
    }, {
      type: HostBinding,
      args: ["class.k-tabstrip-md"]
    }],
    tabsAtTop: [{
      type: HostBinding,
      args: ["class.k-tabstrip-top"]
    }],
    tabsAtRight: [{
      type: HostBinding,
      args: ["class.k-tabstrip-right"]
    }],
    tabsAtBottom: [{
      type: HostBinding,
      args: ["class.k-tabstrip-bottom"]
    }],
    tabsAtLeft: [{
      type: HostBinding,
      args: ["class.k-tabstrip-left"]
    }],
    dir: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    tabStripScrollable: [{
      type: HostBinding,
      args: ["class.k-tabstrip-scrollable"]
    }],
    tabStripScrollableOverlay: [{
      type: HostBinding,
      args: ["class.k-tabstrip-scrollable-overlay"]
    }],
    tabs: [{
      type: ContentChildren,
      args: [TabStripTabComponent]
    }],
    tablist: [{
      type: ViewChild,
      args: ["tablist"]
    }],
    tabHeaderContainers: [{
      type: ViewChildren,
      args: ["tabHeaderContainer", {
        read: ElementRef
      }]
    }],
    prevScrollButton: [{
      type: ViewChild,
      args: ["prevScrollButton"]
    }],
    nextScrollButton: [{
      type: ViewChild,
      args: ["nextScrollButton"]
    }]
  });
})();
var TabStripCustomMessagesComponent = class _TabStripCustomMessagesComponent extends TabStripMessages {
  service;
  constructor(service) {
    super();
    this.service = service;
  }
  get override() {
    return true;
  }
  static ɵfac = function TabStripCustomMessagesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TabStripCustomMessagesComponent)(ɵɵdirectiveInject(LocalizationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _TabStripCustomMessagesComponent,
    selectors: [["kendo-tabstrip-messages"]],
    standalone: true,
    features: [ɵɵProvidersFeature([{
      provide: TabStripMessages,
      useExisting: forwardRef(() => _TabStripCustomMessagesComponent)
    }]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function TabStripCustomMessagesComponent_Template(rf, ctx) {
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabStripCustomMessagesComponent, [{
    type: Component,
    args: [{
      providers: [{
        provide: TabStripMessages,
        useExisting: forwardRef(() => TabStripCustomMessagesComponent)
      }],
      selector: "kendo-tabstrip-messages",
      template: ``,
      standalone: true
    }]
  }], () => [{
    type: LocalizationService
  }], null);
})();
var DrawerTemplateDirective = class _DrawerTemplateDirective {
  templateRef;
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static ɵfac = function DrawerTemplateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DrawerTemplateDirective)(ɵɵdirectiveInject(TemplateRef, 8));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _DrawerTemplateDirective,
    selectors: [["", "kendoDrawerTemplate", ""]],
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DrawerTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoDrawerTemplate]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
var DrawerItemTemplateDirective = class _DrawerItemTemplateDirective {
  templateRef;
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static ɵfac = function DrawerItemTemplateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DrawerItemTemplateDirective)(ɵɵdirectiveInject(TemplateRef, 8));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _DrawerItemTemplateDirective,
    selectors: [["", "kendoDrawerItemTemplate", ""]],
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DrawerItemTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoDrawerItemTemplate]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
var DrawerHeaderTemplateDirective = class _DrawerHeaderTemplateDirective {
  templateRef;
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static ɵfac = function DrawerHeaderTemplateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DrawerHeaderTemplateDirective)(ɵɵdirectiveInject(TemplateRef, 8));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _DrawerHeaderTemplateDirective,
    selectors: [["", "kendoDrawerHeaderTemplate", ""]],
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DrawerHeaderTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoDrawerHeaderTemplate]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
var DrawerFooterTemplateDirective = class _DrawerFooterTemplateDirective {
  templateRef;
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static ɵfac = function DrawerFooterTemplateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DrawerFooterTemplateDirective)(ɵɵdirectiveInject(TemplateRef, 8));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _DrawerFooterTemplateDirective,
    selectors: [["", "kendoDrawerFooterTemplate", ""]],
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DrawerFooterTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoDrawerFooterTemplate]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
var defaultIsItemExpanded = (_item) => false;
var DrawerService = class _DrawerService {
  owner;
  selectedIndices = [];
  viewData;
  focusIndex = 0;
  originalItems = [];
  idxCounter = 0;
  init() {
    this.resetViewData();
    this.originalItems = this.owner.items || [];
    const rootItems = this.originalItems.filter((item) => !isPresent2(item.parentId));
    this.populateViewData(rootItems);
  }
  get view() {
    return Array.from(this.viewData);
  }
  changeFocusedItem(items, keyName, renderer) {
    const currentItem = items.get(this.focusIndex);
    let nextItem;
    if (keyName === "arrowUp") {
      if (this.focusIndex === 0) {
        nextItem = items.get(items.length - 1);
        this.focusIndex = items.length - 1;
      } else {
        nextItem = items.get(this.focusIndex - 1);
        this.focusIndex = this.focusIndex - 1;
      }
    } else if (keyName === "arrowDown") {
      if (this.focusIndex === items.length - 1) {
        nextItem = items.get(0);
        this.focusIndex = 0;
      } else {
        nextItem = items.get(this.focusIndex + 1);
        this.focusIndex = this.focusIndex + 1;
      }
    }
    renderer.setAttribute(currentItem.nativeElement, "tabindex", "-1");
    renderer.setAttribute(nextItem.nativeElement, "tabindex", "0");
    nextItem.nativeElement.focus();
  }
  populateViewData(items, level = 0) {
    items.forEach((item) => {
      this.setSelection(item);
      const children = this.loadChildren(item);
      const isExpanded = this.isItemExpanded(item);
      this.viewData.add({
        item,
        index: this.idxCounter++,
        level,
        hasChildren: children.length > 0,
        isExpanded
      });
      if (children.length > 0 && isExpanded) {
        this.populateViewData(children, level + 1);
      }
    });
  }
  resetViewData() {
    this.idxCounter = 0;
    this.viewData = /* @__PURE__ */ new Set();
  }
  loadChildren(item) {
    return this.originalItems.filter((i) => {
      return isPresent2(i.parentId) && i.parentId === item.id;
    });
  }
  isItemExpanded = defaultIsItemExpanded;
  onSelect(selectedIdx) {
    this.selectedIndices = [selectedIdx];
    const drawer = this.owner;
    if (drawer.autoCollapse && !drawer.minimized) {
      drawer.toggle(false);
    }
  }
  setSelection(item) {
    if (this.selectedIndices.length === 0 && item.selected) {
      this.selectedIndices.push(this.idxCounter);
    }
  }
  resetSelection() {
    this.selectedIndices = [];
  }
  static ɵfac = function DrawerService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DrawerService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _DrawerService,
    factory: _DrawerService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DrawerService, [{
    type: Injectable
  }], null, null);
})();
function miniExpandPush(duration, width, miniWidth) {
  return [style({
    overflow: "hidden",
    flexBasis: `${miniWidth}px`
  }), animate(`${duration}ms ease-in`, style({
    flexBasis: `${width}px`
  }))];
}
function miniCollapsePush(duration, width, miniWidth) {
  return [style({
    overflow: "hidden",
    flexBasis: `${width}px`
  }), animate(`${duration}ms ease-in`, style({
    flexBasis: `${miniWidth}px`
  }))];
}
function miniExpandOverlay(duration, width, miniWidth) {
  return [style({
    width: `${miniWidth}px`
  }), animate(`${duration}ms ease-in`, style({
    overflow: "hidden",
    width: `${width}px`
  }))];
}
function expandPush(duration, width) {
  return [style({
    overflow: "hidden",
    flexBasis: "0px"
  }), animate(`${duration}ms ease-in`, style({
    flexBasis: `${width}px`
  }))];
}
function collapsePush(duration, width) {
  return [style({
    flexBasis: `${width}px`
  }), animate(`${duration}ms ease-in`, style({
    overflow: "hidden",
    flexBasis: `0px`
  }))];
}
function expandRTLOverlay(duration) {
  return [style({
    transform: `translateX(100%)`
  }), animate(`${duration}ms ease-in`, style({
    overflow: "hidden",
    transform: `translateX(0)`
  }))];
}
function expandOverlay(duration, position) {
  const translateDir = position !== "end" ? `-100%` : `100%`;
  return [style({
    transform: `translateX(${translateDir})`
  }), animate(`${duration}ms ease-in`, style({
    overflow: "hidden",
    transform: `translateX(0)`
  }))];
}
function miniCollapseOverlay(duration, width, miniWidth) {
  return [style({
    width: `${width}px`
  }), animate(`${duration}ms ease-in`, style({
    overflow: "hidden",
    width: `${miniWidth}px`
  }))];
}
function collapseOverlay(duration, position) {
  const translateDir = position !== "end" ? "-100%" : "100%";
  return [style({
    transform: `translateX(0)`
  }), animate(`${duration}ms ease-in`, style({
    overflow: "hidden",
    transform: `translateX(${translateDir})`
  }))];
}
function collapseRTLOverlay(duration) {
  return [style({
    transform: `translateX(0)`
  }), animate(`${duration}ms ease-in`, style({
    overflow: "hidden",
    transform: `translateX(100%)`
  }))];
}
function expandAnimation(settings) {
  const duration = settings.animation.duration;
  const width = settings.width;
  const miniWidth = settings.miniWidth;
  const mode = settings.mode;
  const mini = settings.mini;
  const rtl = settings.rtl;
  const position = settings.position;
  if (mini && mode === "push") {
    return miniExpandPush(duration, width, miniWidth);
  }
  if (!mini && mode === "push") {
    return expandPush(duration, width);
  }
  if (!mini && mode === "overlay") {
    return rtl ? expandRTLOverlay(duration) : expandOverlay(duration, position);
  }
  if (mini && mode === "overlay") {
    return miniExpandOverlay(duration, width, miniWidth);
  }
}
function collapseAnimation(settings) {
  const duration = settings.animation.duration;
  const width = settings.width;
  const miniWidth = settings.miniWidth;
  const mode = settings.mode;
  const mini = settings.mini;
  const rtl = settings.rtl;
  const position = settings.position;
  if (mini && mode === "push") {
    return miniCollapsePush(duration, width, miniWidth);
  }
  if (!mini && mode === "push") {
    return collapsePush(duration, width);
  }
  if (!mini && mode === "overlay") {
    return rtl ? collapseRTLOverlay(duration) : collapseOverlay(duration, position);
  }
  if (mini && mode === "overlay") {
    return miniCollapseOverlay(duration, width, miniWidth);
  }
}
var DRAWER_ITEM_INDEX = "data-kendo-drawer-index";
var DRAWER_LINK_SELECTOR = ".k-drawer-link";
var ACTIVE_NESTED_LINK_SELECTOR = ":focus:not(.k-disabled) .k-drawer-link";
var nestedLink = (element, selector) => element.querySelector(selector);
var DrawerListSelectEvent = class extends PreventableEvent {
  /**
   * The index of the selected item in the `items` collection.
   */
  index;
  /**
   * The selected Drawer item.
   */
  item;
  /**
   * The DOM event that triggered the selection.
   */
  originalEvent;
  /**
   * @hidden
   */
  constructor(args) {
    super();
    Object.assign(this, args);
  }
};
var DrawerItemComponent = class _DrawerItemComponent {
  drawerService;
  element;
  renderer;
  viewItem;
  index;
  itemTemplate;
  mini;
  expanded;
  disabled;
  cssClass;
  cssStyle;
  get disabledClass() {
    return this.item.disabled;
  }
  get selectedClass() {
    return this.drawerService.selectedIndices.indexOf(this.index) >= 0;
  }
  get label() {
    return this.item.text ? this.item.text : null;
  }
  arrowUpIcon = chevronUpIcon;
  arrowDownIcon = chevronDownIcon;
  constructor(drawerService, element, renderer) {
    this.drawerService = drawerService;
    this.element = element;
    this.renderer = renderer;
  }
  ngAfterViewInit() {
    const elem = this.element.nativeElement;
    const link = nestedLink(elem, DRAWER_LINK_SELECTOR);
    if (link) {
      this.renderer.removeAttribute(link, "tabindex");
    }
  }
  get iconClasses() {
    if (this.item.icon) {
      const stripIcon = this.item.icon.replace("k-i-", "");
      return `${stripIcon}`;
    }
  }
  get innerCssClasses() {
    if (this.item.iconClass && this.item.icon) {
      return `${this.item.iconClass}`;
    }
  }
  get customIconClasses() {
    if (!this.item.icon && this.item.iconClass) {
      return this.item.iconClass;
    }
  }
  get item() {
    return this.viewItem.item;
  }
  static ɵfac = function DrawerItemComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DrawerItemComponent)(ɵɵdirectiveInject(DrawerService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _DrawerItemComponent,
    selectors: [["", "kendoDrawerItem", ""]],
    hostVars: 7,
    hostBindings: function DrawerItemComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("aria-disabled", ctx.disabledClass)("aria-current", ctx.selectedClass)("aria-label", ctx.label);
        ɵɵclassProp("k-disabled", ctx.disabledClass)("k-selected", ctx.selectedClass);
      }
    },
    inputs: {
      viewItem: "viewItem",
      index: "index",
      itemTemplate: "itemTemplate",
      mini: "mini",
      expanded: "expanded",
      disabled: "disabled",
      cssClass: "cssClass",
      cssStyle: "cssStyle"
    },
    standalone: true,
    features: [ɵɵStandaloneFeature],
    attrs: _c20,
    decls: 2,
    vars: 1,
    consts: [[3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "name", "customFontClass", "svgIcon", "innerCssClass"], [1, "k-item-text"], [1, "k-spacer"], ["innerCssClass", "k-drawer-toggle", 3, "name", "svgIcon"]],
    template: function DrawerItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, DrawerItemComponent_Conditional_0_Template, 1, 7, null, 0)(1, DrawerItemComponent_Conditional_1_Template, 2, 2);
      }
      if (rf & 2) {
        ɵɵconditional(ctx.itemTemplate ? 0 : 1);
      }
    },
    dependencies: [NgTemplateOutlet, IconWrapperComponent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DrawerItemComponent, [{
    type: Component,
    args: [{
      // eslint-disable-next-line @angular-eslint/component-selector
      selector: "[kendoDrawerItem]",
      template: `
        @if (itemTemplate) {
          <ng-template
            [ngTemplateOutlet]="itemTemplate"
            [ngTemplateOutletContext]="{
                $implicit: item,
                isItemExpanded: viewItem.isExpanded,
                hasChildren: viewItem.hasChildren,
                level: viewItem.level
            }">
          </ng-template>
        } @else {
          @if (expanded) {
            @if (item.icon || item.iconClass || item.svgIcon) {
              <kendo-icon-wrapper
                [name]="iconClasses"
                [customFontClass]="customIconClasses"
                [svgIcon]="item.svgIcon"
                [innerCssClass]="innerCssClasses"
                >
              </kendo-icon-wrapper>
            }
            <span class="k-item-text">{{ item.text }}</span>
            @if (viewItem.hasChildren) {
              <span class="k-spacer"></span>
            }
            @if (viewItem.hasChildren) {
              <kendo-icon-wrapper
                [name]="viewItem.isExpanded ? 'arrow-chevron-up' : 'arrow-chevron-down'"
                innerCssClass="k-drawer-toggle"
                [svgIcon]="viewItem.isExpanded ? arrowUpIcon : arrowDownIcon"
                >
              </kendo-icon-wrapper>
            }
          }
          @if (mini && !expanded) {
            @if (item.icon || item.iconClass || item.svgIcon) {
              <kendo-icon-wrapper
                [name]="iconClasses"
                [customFontClass]="customIconClasses"
                [svgIcon]="item.svgIcon"
                [innerCssClass]="innerCssClasses"
                >
              </kendo-icon-wrapper>
            }
          }
        }
        
        `,
      standalone: true,
      imports: [NgTemplateOutlet, IconWrapperComponent]
    }]
  }], () => [{
    type: DrawerService
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }], {
    viewItem: [{
      type: Input
    }],
    index: [{
      type: Input
    }],
    itemTemplate: [{
      type: Input
    }],
    mini: [{
      type: Input
    }],
    expanded: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    cssClass: [{
      type: Input
    }],
    cssStyle: [{
      type: Input
    }],
    disabledClass: [{
      type: HostBinding,
      args: ["attr.aria-disabled"]
    }, {
      type: HostBinding,
      args: ["class.k-disabled"]
    }],
    selectedClass: [{
      type: HostBinding,
      args: ["attr.aria-current"]
    }, {
      type: HostBinding,
      args: ["class.k-selected"]
    }],
    label: [{
      type: HostBinding,
      args: ["attr.aria-label"]
    }]
  });
})();
var DrawerListComponent = class _DrawerListComponent {
  drawerService;
  renderer;
  ngZone;
  element;
  itemTemplate;
  mini;
  expanded;
  view = [];
  select = new EventEmitter();
  items;
  subscriptions = new Subscription();
  constructor(drawerService, renderer, ngZone, element) {
    this.drawerService = drawerService;
    this.renderer = renderer;
    this.ngZone = ngZone;
    this.element = element;
  }
  ngOnInit() {
    this.initDomEvents();
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  identifyItem(_index, viewItem) {
    return viewItem.item.id ?? viewItem.index;
  }
  initDomEvents() {
    if (!this.element) {
      return;
    }
    this.ngZone.runOutsideAngular(() => {
      const nativeElement = this.element.nativeElement;
      this.subscriptions.add(this.renderer.listen(nativeElement, "click", this.clickHandler.bind(this)));
      this.subscriptions.add(this.renderer.listen(nativeElement, "keydown", (e) => {
        const code = normalizeKeys(e);
        const isEnterOrSpace = code === Keys.Enter || code === Keys.Space;
        const isArrowUpOrDown = code === Keys.ArrowUp || code === Keys.ArrowDown;
        if (isEnterOrSpace) {
          this.onEnterOrSpaceKeyDown(e);
        } else if (isArrowUpOrDown) {
          if (e.target.classList.contains("k-drawer-item")) {
            e.preventDefault();
            const keyName = code === Keys.ArrowUp ? "arrowUp" : "arrowDown";
            this.drawerService.changeFocusedItem(this.items, keyName, this.renderer);
          }
        }
      }));
    });
  }
  clickHandler(e) {
    const viewItemIdx = this.getDrawerItemIndex(e.target);
    const viewItem = this.view[viewItemIdx];
    const filterItems = this.view.filter((items) => !items.item.separator);
    const selectedItemIndex = filterItems.findIndex((item) => item.index === viewItemIdx);
    if (!viewItem) {
      return;
    }
    if (viewItem.item.disabled) {
      e.preventDefault();
      return;
    }
    const args = {
      index: viewItem.index,
      item: viewItem.item,
      originalEvent: e
    };
    this.ngZone.run(() => {
      const event = new DrawerListSelectEvent(args);
      this.select.emit(event);
      if (!event.isDefaultPrevented()) {
        this.drawerService.focusIndex = selectedItemIndex;
        this.drawerService.onSelect(viewItemIdx);
        this.drawerService.init();
        this.view = this.drawerService.view;
      }
    });
  }
  onEnterOrSpaceKeyDown(e) {
    this.clickHandler(e);
    const link = nestedLink(this.element.nativeElement, ACTIVE_NESTED_LINK_SELECTOR);
    if (link) {
      link.click();
    }
    return false;
  }
  getDrawerItemIndex(target) {
    const item = closestItem(target, DRAWER_ITEM_INDEX, this.element.nativeElement);
    if (item) {
      return itemIndex(item, DRAWER_ITEM_INDEX);
    }
  }
  static ɵfac = function DrawerListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DrawerListComponent)(ɵɵdirectiveInject(DrawerService), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ElementRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _DrawerListComponent,
    selectors: [["", "kendoDrawerList", ""]],
    viewQuery: function DrawerListComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(DrawerItemComponent, 5, ElementRef);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.items = _t);
      }
    },
    inputs: {
      itemTemplate: "itemTemplate",
      mini: "mini",
      expanded: "expanded",
      view: "view"
    },
    outputs: {
      select: "select"
    },
    standalone: true,
    features: [ɵɵStandaloneFeature],
    attrs: _c22,
    decls: 2,
    vars: 0,
    consts: [["kendoDrawerItem", "", "role", "menuitem", 3, "class", "viewItem", "index", "mini", "expanded", "itemTemplate", "ngClass", "ngStyle", "tabindex"], ["role", "separator", 1, "k-drawer-item", "k-drawer-separator", 3, "ngClass", "ngStyle"], ["kendoDrawerItem", "", "role", "menuitem", 3, "viewItem", "index", "mini", "expanded", "itemTemplate", "ngClass", "ngStyle", "tabindex"]],
    template: function DrawerListComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵrepeaterCreate(0, DrawerListComponent_For_1_Template, 2, 2, null, null, ctx.identifyItem, true);
      }
      if (rf & 2) {
        ɵɵrepeater(ctx.view);
      }
    },
    dependencies: [DrawerItemComponent, NgClass, NgStyle],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DrawerListComponent, [{
    type: Component,
    args: [{
      // eslint-disable-next-line @angular-eslint/component-selector
      selector: "[kendoDrawerList]",
      template: `
        @for (v of view; track identifyItem(idx, v); let idx = $index) {
          @if (!v.item.separator) {
            <li kendoDrawerItem
              class="k-drawer-item {{expanded ? ' k-level-' + v.level : ''}}"
              role="menuitem"
              [viewItem]="v"
              [index]="idx"
              [mini]="mini"
              [expanded]="expanded"
              [itemTemplate]="itemTemplate"
              [attr.${DRAWER_ITEM_INDEX}]="v.index"
              [ngClass]="v.item.cssClass"
              [ngStyle]="v.item.cssStyle"
              [tabindex]="v.index === 0 ? '0' : '-1'">
            </li>
          }
          @if (v.item.separator) {
            <li
              role="separator"
              class="k-drawer-item k-drawer-separator"
              [ngClass]="v.item.cssClass"
              [ngStyle]="v.item.cssStyle">
              &nbsp;
            </li>
          }
        }
        `,
      standalone: true,
      imports: [DrawerItemComponent, NgClass, NgStyle]
    }]
  }], () => [{
    type: DrawerService
  }, {
    type: Renderer2
  }, {
    type: NgZone
  }, {
    type: ElementRef
  }], {
    itemTemplate: [{
      type: Input
    }],
    mini: [{
      type: Input
    }],
    expanded: [{
      type: Input
    }],
    view: [{
      type: Input
    }],
    select: [{
      type: Output
    }],
    items: [{
      type: ViewChildren,
      args: [DrawerItemComponent, {
        read: ElementRef
      }]
    }]
  });
})();
var DEFAULT_ANIMATION = {
  type: "slide",
  duration: 200
};
var DrawerComponent = class _DrawerComponent {
  element;
  builder;
  localizationService;
  drawerService;
  hostClasses = true;
  get startPositionClass() {
    return this.position === "start";
  }
  get endPositionClass() {
    return this.position === "end";
  }
  get overlayTransofrmStyles() {
    if (this.mode === "push") {
      return;
    }
    if (this.expanded || this.minimized) {
      return `translateX(0px)`;
    }
    return `translateX(-100%)`;
  }
  get flexStyles() {
    if (this.mode === "overlay") {
      return;
    }
    if (!this.expanded && !this.minimized) {
      return 0;
    }
    return this.drawerWidth;
  }
  /**
   * Specifies the mode in which the Drawer displays.
   *
   * @default 'overlay'
   */
  mode = "overlay";
  /**
   * Specifies the position of the Drawer
   * ([see example]({% slug positioning_drawer %})).
   *
   * @default 'start'
   */
  position = "start";
  /**
   * Enables the mini (compact) view of the Drawer which displays when the component is collapsed
   * ([see example]({% slug expandmodespositions_drawer %}#toc-mini-view)).
   *
   * @default false
   */
  mini = false;
  /**
   * Specifies the state of the Drawer.
   *
   * @default false
   */
  expanded = false;
  /**
   * Defines the width of the Drawer when it is expanded.
   *
   * @default 240
   */
  width = 240;
  /**
   * Defines the width of the Drawer when the mini view is enabled and the component is collapsed.
   *
   * @default 50
   */
  miniWidth = 50;
  /**
   * Specifies if the Drawer automatically collapses when an item or the overlay is clicked.
   *
   * @default true
   */
  autoCollapse = true;
  /**
   * Defines the collection of items that render in the Drawer.
   *
   * @default []
   */
  items = [];
  /**
   * Defines a callback function which determines if an item should be expanded.
   * This is useful for hierarchical data structures where the expansion state of an item depends on its parent or other items.
   */
  set isItemExpanded(fn) {
    if (isDevMode && isPresent2(fn) && typeof fn !== "function") {
      throw new Error(`isItemExpanded must be a function, but received ${JSON.stringify(fn)}.`);
    }
    this.drawerService.isItemExpanded = fn;
  }
  get isItemExpanded() {
    return this.drawerService.isItemExpanded;
  }
  /**
   * @hidden
   */
  direction;
  /**
   * Specifies the animation settings of the Drawer
   * ([see example]({% slug interaction_drawer %}#toc-toggling-between-states)).
   *
   * @default { type: 'slide', duration: 200 }
   */
  animation = DEFAULT_ANIMATION;
  /**
   * Fires when the Drawer is expanded and its animation is complete.
   */
  expand = new EventEmitter();
  /**
   * Fires when the Drawer is collapsed and its animation is complete.
   */
  collapse = new EventEmitter();
  /**
   * Fires when an item in the Drawer is selected.
   * This event is preventable.
   */
  select = new EventEmitter();
  /**
   * Fires when the `expanded` property of the component is updated.
   * Used to provide a two-way binding for the `expanded` property.
   */
  expandedChange = new EventEmitter();
  /**
   * @hidden
   */
  drawerTemplate;
  /**
   * @hidden
   */
  footerTemplate;
  /**
   * @hidden
   */
  headerTemplate;
  /**
   * @hidden
   */
  itemTemplate;
  /**
   * @hidden
   */
  showLicenseWatermark = false;
  /**
   * @hidden
   */
  licenseMessage;
  viewItems;
  animationEnd = new EventEmitter();
  dynamicRTLSubscription;
  rtl = false;
  constructor(element, builder, localizationService, drawerService) {
    this.element = element;
    this.builder = builder;
    this.localizationService = localizationService;
    this.drawerService = drawerService;
    const isValid = A(packageMetadata);
    this.licenseMessage = getLicenseMessage(packageMetadata);
    this.showLicenseWatermark = shouldShowValidationUI(isValid);
    this.dynamicRTLSubscription = this.localizationService.changes.subscribe(({
      rtl
    }) => {
      this.rtl = rtl;
      this.direction = this.rtl ? "rtl" : "ltr";
    });
    this.drawerService.owner = this;
  }
  ngOnChanges(changes) {
    if (changes && changes["items"]) {
      this.drawerService.resetSelection();
      this.drawerService.init();
      this.viewItems = this.drawerService.view;
    }
  }
  ngOnDestroy() {
    if (this.dynamicRTLSubscription) {
      this.dynamicRTLSubscription.unsubscribe();
    }
  }
  /**
   * @hidden
   */
  get minimized() {
    return this.mini && !this.expanded;
  }
  /**
   * @hidden
   */
  get drawerWidth() {
    return this.minimized ? this.miniWidth : this.width;
  }
  /**
   * Toggles the visibility of the Drawer.
   * If the `expanded` parameter is not provided, the Drawer will toggle between expanded and collapsed states.
   *
   * @param expanded Specifies if the Drawer will be expanded or collapsed.
   */
  toggle(expanded) {
    const previous = this.expanded;
    const current = isPresent2(expanded) ? expanded : !previous;
    if (current === previous) {
      return;
    }
    if (current === true) {
      this.setExpanded(true);
    } else if (current === false && !this.animation) {
      this.setExpanded(false);
    }
    if (this.animation) {
      this.animationEnd.pipe(take(1)).subscribe(() => {
        this.onAnimationEnd(current);
      });
      this.animate(current);
    } else {
      this[current ? "expand" : "collapse"].emit();
    }
  }
  /**
   * @hidden
   */
  onSelect(e) {
    this.select.emit(Object.assign(e, {
      sender: this
    }));
  }
  onAnimationEnd(currentExpanded) {
    if (currentExpanded) {
      this.expand.emit();
    } else {
      this.setExpanded(false);
      this.collapse.emit();
    }
  }
  setExpanded(value) {
    this.expanded = value;
    this.expandedChange.emit(value);
  }
  animate(expanded) {
    const settings = {
      mode: this.mode,
      mini: this.mini,
      miniWidth: this.miniWidth,
      width: this.width,
      rtl: this.rtl,
      position: this.position,
      animation: typeof this.animation !== "boolean" ? this.animation : DEFAULT_ANIMATION
    };
    const animation = expanded ? expandAnimation(settings) : collapseAnimation(settings);
    const player = this.createPlayer(animation, this.element.nativeElement);
    player.play();
  }
  createPlayer(animation, animatedElement) {
    const factory = this.builder.build(animation);
    let player = factory.create(animatedElement);
    player.onDone(() => {
      if (player) {
        this.animationEnd.emit();
        player.destroy();
        player = null;
      }
    });
    return player;
  }
  static ɵfac = function DrawerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DrawerComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(AnimationBuilder), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(DrawerService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _DrawerComponent,
    selectors: [["kendo-drawer"]],
    contentQueries: function DrawerComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, DrawerTemplateDirective, 5);
        ɵɵcontentQuery(dirIndex, DrawerFooterTemplateDirective, 5);
        ɵɵcontentQuery(dirIndex, DrawerHeaderTemplateDirective, 5);
        ɵɵcontentQuery(dirIndex, DrawerItemTemplateDirective, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.drawerTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.footerTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.headerTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.itemTemplate = _t.first);
      }
    },
    hostVars: 11,
    hostBindings: function DrawerComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("dir", ctx.direction);
        ɵɵstyleProp("transform", ctx.overlayTransofrmStyles)("flex-basis", ctx.flexStyles, "px");
        ɵɵclassProp("k-drawer", ctx.hostClasses)("k-drawer-start", ctx.startPositionClass)("k-drawer-end", ctx.endPositionClass);
      }
    },
    inputs: {
      mode: "mode",
      position: "position",
      mini: "mini",
      expanded: "expanded",
      width: "width",
      miniWidth: "miniWidth",
      autoCollapse: "autoCollapse",
      items: "items",
      isItemExpanded: "isItemExpanded",
      animation: "animation"
    },
    outputs: {
      expand: "expand",
      collapse: "collapse",
      select: "select",
      expandedChange: "expandedChange"
    },
    exportAs: ["kendoDrawer"],
    standalone: true,
    features: [ɵɵProvidersFeature([LocalizationService, DrawerService, {
      provide: L10N_PREFIX,
      useValue: "kendo.drawer"
    }]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    decls: 2,
    vars: 2,
    consts: [[1, "k-drawer-wrapper", 3, "width"], ["kendoWatermarkOverlay", "", 3, "licenseMessage"], [1, "k-drawer-wrapper"], [3, "ngTemplateOutlet"], ["kendoDrawerList", "", "role", "menubar", "aria-orientation", "vertical", 1, "k-drawer-items", 3, "select", "mini", "expanded", "view", "itemTemplate"]],
    template: function DrawerComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, DrawerComponent_Conditional_0_Template, 3, 4, "div", 0)(1, DrawerComponent_Conditional_1_Template, 1, 1, "div", 1);
      }
      if (rf & 2) {
        ɵɵconditional(ctx.expanded || ctx.mini ? 0 : -1);
        ɵɵadvance();
        ɵɵconditional(ctx.showLicenseWatermark ? 1 : -1);
      }
    },
    dependencies: [NgTemplateOutlet, DrawerListComponent, WatermarkOverlayComponent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DrawerComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoDrawer",
      providers: [LocalizationService, DrawerService, {
        provide: L10N_PREFIX,
        useValue: "kendo.drawer"
      }],
      selector: "kendo-drawer",
      template: `
        @if (expanded || mini) {
          <div class="k-drawer-wrapper" [style.width.px]="drawerWidth">
            @if (!drawerTemplate) {
              @if (headerTemplate) {
                <ng-template
                  [ngTemplateOutlet]="headerTemplate?.templateRef">
                </ng-template>
              }
              <ul kendoDrawerList
                role="menubar"
                aria-orientation="vertical"
                (select)="onSelect($event)"
                [mini]="mini"
                [expanded]="expanded"
                [view]="viewItems"
                [itemTemplate]="itemTemplate?.templateRef"
                class="k-drawer-items">
              </ul>
              @if (footerTemplate) {
                <ng-template
                  [ngTemplateOutlet]="footerTemplate?.templateRef">
                </ng-template>
              }
            }
            @if (drawerTemplate) {
              <ng-template
                [ngTemplateOutlet]="drawerTemplate?.templateRef">
              </ng-template>
            }
          </div>
        }
        
        @if (showLicenseWatermark) {
          <div kendoWatermarkOverlay [licenseMessage]="licenseMessage"></div>
        }
        `,
      standalone: true,
      imports: [NgTemplateOutlet, DrawerListComponent, WatermarkOverlayComponent]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: AnimationBuilder
  }, {
    type: LocalizationService
  }, {
    type: DrawerService
  }], {
    hostClasses: [{
      type: HostBinding,
      args: ["class.k-drawer"]
    }],
    startPositionClass: [{
      type: HostBinding,
      args: ["class.k-drawer-start"]
    }],
    endPositionClass: [{
      type: HostBinding,
      args: ["class.k-drawer-end"]
    }],
    overlayTransofrmStyles: [{
      type: HostBinding,
      args: ["style.transform"]
    }],
    flexStyles: [{
      type: HostBinding,
      args: ["style.flexBasis.px"]
    }],
    mode: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    mini: [{
      type: Input
    }],
    expanded: [{
      type: Input
    }],
    width: [{
      type: Input
    }],
    miniWidth: [{
      type: Input
    }],
    autoCollapse: [{
      type: Input
    }],
    items: [{
      type: Input
    }],
    isItemExpanded: [{
      type: Input
    }],
    direction: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    animation: [{
      type: Input
    }],
    expand: [{
      type: Output
    }],
    collapse: [{
      type: Output
    }],
    select: [{
      type: Output
    }],
    expandedChange: [{
      type: Output
    }],
    drawerTemplate: [{
      type: ContentChild,
      args: [DrawerTemplateDirective]
    }],
    footerTemplate: [{
      type: ContentChild,
      args: [DrawerFooterTemplateDirective]
    }],
    headerTemplate: [{
      type: ContentChild,
      args: [DrawerHeaderTemplateDirective]
    }],
    itemTemplate: [{
      type: ContentChild,
      args: [DrawerItemTemplateDirective]
    }]
  });
})();
var DrawerContainerComponent = class _DrawerContainerComponent {
  localizationService;
  get hostClass() {
    return true;
  }
  get overlayClass() {
    return this.drawer.mode === "overlay";
  }
  get miniClass() {
    return this.drawer.mini && !this.drawer.expanded;
  }
  get pushClass() {
    return this.drawer.mode === "push";
  }
  get isExpandedClass() {
    return this.drawer.expanded;
  }
  /**
   * @hidden
   */
  direction;
  /**
   * @hidden
   */
  drawer;
  dynamicRTLSubscription;
  rtl = false;
  constructor(localizationService) {
    this.localizationService = localizationService;
    this.dynamicRTLSubscription = this.localizationService.changes.subscribe(({
      rtl
    }) => {
      this.rtl = rtl;
      this.direction = this.rtl ? "rtl" : "ltr";
    });
  }
  ngOnDestroy() {
    if (this.dynamicRTLSubscription) {
      this.dynamicRTLSubscription.unsubscribe();
    }
  }
  /**
   * @hidden
   */
  get overlay() {
    return isPresent2(this.drawer) && this.drawer.expanded && this.drawer.mode === "overlay";
  }
  /**
   * @hidden
   */
  closeDrawer() {
    if (this.overlay && this.drawer.autoCollapse) {
      this.drawer.toggle(false);
    }
  }
  static ɵfac = function DrawerContainerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DrawerContainerComponent)(ɵɵdirectiveInject(LocalizationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _DrawerContainerComponent,
    selectors: [["kendo-drawer-container"]],
    contentQueries: function DrawerContainerComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, DrawerComponent, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.drawer = _t.first);
      }
    },
    hostVars: 11,
    hostBindings: function DrawerContainerComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("dir", ctx.direction);
        ɵɵclassProp("k-drawer-container", ctx.hostClass)("k-drawer-overlay", ctx.overlayClass)("k-drawer-mini", ctx.miniClass)("k-drawer-push", ctx.pushClass)("k-drawer-expanded", ctx.isExpandedClass);
      }
    },
    standalone: true,
    features: [ɵɵProvidersFeature([LocalizationService, {
      provide: L10N_PREFIX,
      useValue: "kendo.drawer.container"
    }]), ɵɵStandaloneFeature],
    ngContentSelectors: _c8,
    decls: 2,
    vars: 1,
    consts: [[1, "k-overlay"], [1, "k-overlay", 3, "click"]],
    template: function DrawerContainerComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵtemplate(0, DrawerContainerComponent_Conditional_0_Template, 1, 0, "div", 0);
        ɵɵprojection(1);
      }
      if (rf & 2) {
        ɵɵconditional(ctx.overlay ? 0 : -1);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DrawerContainerComponent, [{
    type: Component,
    args: [{
      selector: "kendo-drawer-container",
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.drawer.container"
      }],
      template: `
        @if (overlay) {
          <div class="k-overlay" (click)="closeDrawer()"></div>
        }
        <ng-content></ng-content>
        `,
      standalone: true
    }]
  }], () => [{
    type: LocalizationService
  }], {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-drawer-container"]
    }],
    overlayClass: [{
      type: HostBinding,
      args: ["class.k-drawer-overlay"]
    }],
    miniClass: [{
      type: HostBinding,
      args: ["class.k-drawer-mini"]
    }],
    pushClass: [{
      type: HostBinding,
      args: ["class.k-drawer-push"]
    }],
    isExpandedClass: [{
      type: HostBinding,
      args: ["class.k-drawer-expanded"]
    }],
    direction: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    drawer: [{
      type: ContentChild,
      args: [DrawerComponent]
    }]
  });
})();
var DrawerContentComponent = class _DrawerContentComponent {
  hostClasses = true;
  constructor() {
  }
  static ɵfac = function DrawerContentComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DrawerContentComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _DrawerContentComponent,
    selectors: [["kendo-drawer-content"]],
    hostVars: 2,
    hostBindings: function DrawerContentComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("k-drawer-content", ctx.hostClasses);
      }
    },
    standalone: true,
    features: [ɵɵStandaloneFeature],
    ngContentSelectors: _c8,
    decls: 1,
    vars: 0,
    template: function DrawerContentComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DrawerContentComponent, [{
    type: Component,
    args: [{
      selector: "kendo-drawer-content",
      template: `
        <ng-content></ng-content>
    `,
      encapsulation: ViewEncapsulation$1.None,
      standalone: true
    }]
  }], () => [], {
    hostClasses: [{
      type: HostBinding,
      args: ["class.k-drawer-content"]
    }]
  });
})();
var DrawerSelectEvent = class extends PreventableEvent {
  /**
   * Defines the index of the selected item in the `items` collection.
   */
  index;
  /**
   * Defines the selected Drawer item.
   */
  item;
  /**
   * Defines the DOM event that triggered the selection.
   */
  originalEvent;
  /**
   * Defines the Drawer that triggered the event.
   */
  sender;
  /**
   * @hidden
   */
  constructor(args) {
    super();
    Object.assign(this, args);
  }
};
var StepperStepTemplateDirective = class _StepperStepTemplateDirective {
  templateRef;
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static ɵfac = function StepperStepTemplateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StepperStepTemplateDirective)(ɵɵdirectiveInject(TemplateRef, 8));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _StepperStepTemplateDirective,
    selectors: [["", "kendoStepperStepTemplate", ""]],
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepperStepTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoStepperStepTemplate]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
var StepperLabelTemplateDirective = class _StepperLabelTemplateDirective {
  templateRef;
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static ɵfac = function StepperLabelTemplateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StepperLabelTemplateDirective)(ɵɵdirectiveInject(TemplateRef, 8));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _StepperLabelTemplateDirective,
    selectors: [["", "kendoStepperLabelTemplate", ""]],
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepperLabelTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoStepperLabelTemplate]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
var StepperIndicatorTemplateDirective = class _StepperIndicatorTemplateDirective {
  templateRef;
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static ɵfac = function StepperIndicatorTemplateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StepperIndicatorTemplateDirective)(ɵɵdirectiveInject(TemplateRef, 8));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _StepperIndicatorTemplateDirective,
    selectors: [["", "kendoStepperIndicatorTemplate", ""]],
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepperIndicatorTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoStepperIndicatorTemplate]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
var DEFAULT_CURRENT_STEP = 0;
var handlers = {};
handlers[Keys.ArrowLeft] = "left";
handlers[Keys.ArrowRight] = "right";
handlers[Keys.ArrowUp] = "up";
handlers[Keys.ArrowDown] = "down";
handlers[Keys.Home] = "home";
handlers[Keys.End] = "end";
handlers[Keys.Enter] = "enter";
handlers[Keys.NumpadEnter] = "enter";
handlers[Keys.Space] = "enter";
var handlersRTL = Object.assign({}, handlers);
handlersRTL[Keys.ArrowLeft] = "right";
handlersRTL[Keys.ArrowRight] = "left";
var StepperActivateEvent$1 = class StepperActivateEvent extends PreventableEvent {
  /**
   * Specifies the index of the activated step in the `steps` collection.
   */
  index;
  /**
   * Specifies the activated step.
   */
  step;
  /**
   * Specifies the DOM event that triggered the step activation.
   */
  originalEvent;
  /**
   * Specifies the Stepper that triggered the event.
   */
  sender;
  /**
   * @hidden
   */
  constructor(args) {
    super();
    Object.assign(this, args);
  }
};
var StepperService = class _StepperService {
  localization;
  ngZone;
  changeDetector;
  owner;
  currentStep = DEFAULT_CURRENT_STEP;
  focusedStep;
  triggerValidation = new EventEmitter();
  focusedStepChange = new EventEmitter();
  get handlers() {
    return this.localization.rtl ? handlersRTL : handlers;
  }
  constructor(localization, ngZone, changeDetector) {
    this.localization = localization;
    this.ngZone = ngZone;
    this.changeDetector = changeDetector;
  }
  emit(event, eventArgs) {
    const stepper = this.owner;
    if (hasObservers(stepper[event])) {
      stepper[event].emit(eventArgs);
    }
    return eventArgs.isDefaultPrevented();
  }
  onActivate(currentIdx, originalEvent) {
    const eventArgs = new StepperActivateEvent$1({
      index: currentIdx,
      step: this.owner.steps[currentIdx],
      originalEvent,
      sender: this.owner
    });
    this.ngZone.run(() => {
      if (!this.emit("activate", eventArgs)) {
        this.currentStep = currentIdx;
        this.owner["currentStepChange"].emit(currentIdx);
        this.changeDetector.detectChanges();
      }
    });
  }
  validateSteps() {
    this.triggerValidation.emit();
  }
  keydown(e) {
    const current = this.focusedStep || this.currentStep;
    const code = normalizeKeys(e);
    const handler = this.handlers[code];
    if (!isPresent2(current)) {
      return;
    }
    if (handler) {
      e.preventDefault();
      this[handler](e);
    }
  }
  left() {
    if (!this.isHorizontal) {
      return;
    }
    this.focusPrevStep();
  }
  right() {
    if (!this.isHorizontal) {
      return;
    }
    this.focusNextStep();
  }
  up() {
    if (this.isHorizontal) {
      return;
    }
    this.focusPrevStep();
  }
  down() {
    if (this.isHorizontal) {
      return;
    }
    this.focusNextStep();
  }
  home() {
    this.focusedStep = 0;
    this.focusedStepChange.emit();
  }
  end() {
    this.focusedStep = this.owner.steps.length - 1;
    this.focusedStepChange.emit();
  }
  enter(event) {
    if (this.focusedStep === this.currentStep) {
      return;
    }
    if (this.isStepDisabled(this.focusedStep)) {
      return;
    }
    if (this.owner.linear && this.isPrevOrNextStep(this.focusedStep) === false) {
      return;
    }
    this.onActivate(this.focusedStep, event);
  }
  focus(focusedIdx) {
    this.focusedStep = focusedIdx;
  }
  focusNextStep() {
    if (this.focusedStep < this.owner.steps.length) {
      this.focusedStep += 1;
      this.focusedStepChange.emit();
    }
  }
  focusPrevStep() {
    if (this.focusedStep > 0) {
      this.focusedStep -= 1;
      this.focusedStepChange.emit();
    }
  }
  isStepDisabled(index) {
    return this.owner.steps[index].disabled;
  }
  isPrevOrNextStep(index) {
    return index === this.currentStep + 1 || index === this.currentStep - 1;
  }
  get isHorizontal() {
    return this.owner.orientation === "horizontal";
  }
  static ɵfac = function StepperService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StepperService)(ɵɵinject(LocalizationService), ɵɵinject(NgZone), ɵɵinject(ChangeDetectorRef));
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _StepperService,
    factory: _StepperService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepperService, [{
    type: Injectable
  }], () => [{
    type: LocalizationService
  }, {
    type: NgZone
  }, {
    type: ChangeDetectorRef
  }], null);
})();
var STEPPER_STEP_INDEX = "data-kendo-stepper-index";
var StepperStepComponent = class _StepperStepComponent {
  service;
  localization;
  ngZone;
  step;
  index;
  current;
  type;
  successIcon;
  successSVGIcon;
  errorIcon;
  errorSVGIcon;
  svgIcon;
  indicatorTemplate;
  labelTemplate;
  stepTemplate;
  stepLink;
  isStepValid = void 0;
  shouldCheckValidity = void 0;
  checkCircleIcon = checkCircleIcon;
  exclamationCircleIcon = exclamationCircleIcon;
  subs;
  constructor(service, localization, ngZone) {
    this.service = service;
    this.localization = localization;
    this.ngZone = ngZone;
    A(packageMetadata);
    this.subs = this.service.focusedStepChange.subscribe(() => {
      this.onFocusedStepChange();
    });
    this.subs.add(this.service.triggerValidation.subscribe(() => {
      this.handleValidityChecks();
    }));
  }
  get errorStepClass() {
    if (isPresent2(this.isStepValid)) {
      return !this.isStepValid;
    }
    return false;
  }
  get successStepClass() {
    if (isPresent2(this.isStepValid)) {
      return this.isStepValid;
    }
    return false;
  }
  ngOnInit() {
    this.handleValidityChecks();
  }
  ngOnChanges(changes) {
    if (changes["current"] && !changes["current"].firstChange) {
      this.handleValidityChecks();
    }
  }
  ngOnDestroy() {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }
  onFocusedStepChange() {
    this.ngZone.runOutsideAngular(() => {
      if (this.index === this.service.focusedStep) {
        this.stepLink.nativeElement.focus();
      }
    });
  }
  onFocus() {
    this.service.focus(this.index);
  }
  get tabIndexAttr() {
    const active = this.service.focusedStep || this.service.currentStep;
    return this.index === active ? 0 : -1;
  }
  get indicatorIconClass() {
    if (this.step.icon && !this.step.iconClass) {
      return `${this.step.icon}`;
    }
    if (!this.step.icon && !this.step.iconClass && this.shouldCheckValidity) {
      return this.validationIconClasses;
    }
  }
  get customIndicatorIconClass() {
    if (this.step.iconClass) {
      return `${this.step.iconClass}`;
    }
    const renderCustomValidationIcon = !this.step.icon && !this.step.iconClass && this.shouldCheckValidity;
    if (renderCustomValidationIcon) {
      return this.customValidationIconClasses;
    }
  }
  get SVGIndicatorIcon() {
    if (this.step.svgIcon) {
      return this.step.svgIcon;
    }
    if (!this.step.svgIcon && this.shouldCheckValidity) {
      return this.validationSVGIcon;
    }
  }
  get validationIconClasses() {
    if (this.isStepValid) {
      return !this.successIcon ? "check-circle" : "";
    }
    return !this.errorIcon ? "exclamation-circle" : "";
  }
  get customValidationIconClasses() {
    if (this.isStepValid) {
      return this.successIcon ? this.successIcon : "";
    }
    return this.errorIcon ? this.errorIcon : "";
  }
  get validationSVGIcon() {
    if (this.isStepValid) {
      return this.successSVGIcon ? this.successSVGIcon : this.checkCircleIcon;
    }
    return this.errorSVGIcon ? this.errorSVGIcon : this.exclamationCircleIcon;
  }
  get showIndicatorIcon() {
    if (this.shouldCheckValidity) {
      return true;
    }
    if (this.step.icon || this.step.iconClass || this.step.svgIcon) {
      return true;
    }
    return false;
  }
  get showLabelIcon() {
    if (this.shouldCheckValidity) {
      if (this.type === "label") {
        return true;
      }
      if (this.step.icon || this.step.iconClass) {
        return true;
      }
    }
    return false;
  }
  get showLabelText() {
    return this.type === "label" || this.type === "full";
  }
  get indicatorText() {
    const text = this.step.text;
    return text ? text : (this.index + 1).toString();
  }
  updateStepValidity() {
    if (typeof this.step.isValid === "boolean") {
      return this.step.isValid;
    }
    if (typeof this.step.isValid === "function") {
      return this.step.isValid(this.index);
    }
    return void 0;
  }
  get showIndicator() {
    return this.type === "indicator" || this.type === "full";
  }
  get showLabel() {
    if (this.type === "label" || this.type === "full") {
      return true;
    }
    return this.step.optional;
  }
  get optionalText() {
    return this.localization.get("optional");
  }
  get transitionDuration() {
    return this.service.owner.animationDuration;
  }
  _shouldCheckValidity() {
    if (isPresent2(this.step.validate)) {
      if (typeof this.step.validate === "boolean") {
        return this.step.validate;
      }
      if (typeof this.step.validate === "function") {
        return this.step.validate(this.index);
      }
    }
    return isPresent2(this.step.isValid) && this.index < this.current;
  }
  handleValidityChecks() {
    this.isStepValid = void 0;
    this.shouldCheckValidity = this._shouldCheckValidity();
    if (this.shouldCheckValidity) {
      this.isStepValid = this.updateStepValidity();
    }
  }
  static ɵfac = function StepperStepComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StepperStepComponent)(ɵɵdirectiveInject(StepperService), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _StepperStepComponent,
    selectors: [["", "kendoStepperStep", ""]],
    viewQuery: function StepperStepComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c23, 7);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.stepLink = _t.first);
      }
    },
    hostVars: 4,
    hostBindings: function StepperStepComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("k-step-error", ctx.errorStepClass)("k-step-success", ctx.successStepClass);
      }
    },
    inputs: {
      step: "step",
      index: "index",
      current: "current",
      type: "type",
      successIcon: "successIcon",
      successSVGIcon: "successSVGIcon",
      errorIcon: "errorIcon",
      errorSVGIcon: "errorSVGIcon",
      svgIcon: "svgIcon",
      indicatorTemplate: "indicatorTemplate",
      labelTemplate: "labelTemplate",
      stepTemplate: "stepTemplate"
    },
    standalone: true,
    features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    attrs: _c24,
    decls: 4,
    vars: 6,
    consts: [["stepLink", ""], ["href", "#", 1, "k-step-link", 3, "focus"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["aria-hidden", "true", 1, "k-step-indicator", 3, "transition-duration"], [1, "k-step-label"], ["aria-hidden", "true", 1, "k-step-indicator"], ["innerCssClass", "k-step-indicator-icon", 3, "name", "customFontClass", "svgIcon"], [1, "k-step-indicator-text"], [1, "k-step-text"], ["aria-hidden", "true", 3, "name", "customFontClass", "svgIcon"], [1, "k-step-label-optional"]],
    template: function StepperStepComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "a", 1, 0);
        ɵɵlistener("focus", function StepperStepComponent_Template_a_focus_0_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onFocus());
        });
        ɵɵtemplate(2, StepperStepComponent_Conditional_2_Template, 1, 5, null, 2)(3, StepperStepComponent_Conditional_3_Template, 2, 2);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵattribute("tabindex", ctx.tabIndexAttr)("title", ctx.step.label)("aria-disabled", ctx.step.disabled)("aria-current", ctx.index === ctx.current ? "step" : null);
        ɵɵadvance(2);
        ɵɵconditional(ctx.stepTemplate ? 2 : -1);
        ɵɵadvance();
        ɵɵconditional(!ctx.stepTemplate ? 3 : -1);
      }
    },
    dependencies: [NgTemplateOutlet, IconWrapperComponent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepperStepComponent, [{
    type: Component,
    args: [{
      // eslint-disable-next-line @angular-eslint/component-selector
      selector: "[kendoStepperStep]",
      template: `
        <a href='#' class='k-step-link' #stepLink
          [attr.tabindex]='tabIndexAttr'
          [attr.title]='step.label'
          [attr.aria-disabled]='step.disabled'
          [attr.aria-current]='index === current ? "step" : null'
          (focus)='onFocus()'
          >
          @if (stepTemplate) {
            <ng-template
              [ngTemplateOutlet]='stepTemplate'
              [ngTemplateOutletContext]='{ $implicit: step, index: index }'>
            </ng-template>
          }

          @if (!stepTemplate) {
            @if (showIndicator) {
              <span
                class='k-step-indicator'
                aria-hidden='true'
                [style.transition-duration.ms]='transitionDuration'
                >
                @if (indicatorTemplate) {
                  <ng-template
                    [ngTemplateOutlet]='indicatorTemplate'
                    [ngTemplateOutletContext]='{ $implicit: step, index: index }'>
                  </ng-template>
                }
                @if (!indicatorTemplate) {
                  @if (showIndicatorIcon) {
                    <kendo-icon-wrapper
                      [name]='indicatorIconClass'
                      [customFontClass]='customIndicatorIconClass'
                      [svgIcon]='SVGIndicatorIcon'
                      innerCssClass='k-step-indicator-icon'
                      >
                    </kendo-icon-wrapper>
                  }
                  @if (!showIndicatorIcon) {
                    <span class='k-step-indicator-text'>{{ indicatorText }}</span>
                  }
                }
              </span>
            }
            @if (showLabel) {
              <span class='k-step-label'>
                @if (labelTemplate) {
                  <ng-template
                    [ngTemplateOutlet]='labelTemplate'
                    [ngTemplateOutletContext]='{ $implicit: step, index: index }'>
                  </ng-template>
                }
                @if (!labelTemplate) {
                  @if (showLabelText) {
                    <span class='k-step-text'>{{ step.label }}</span>
                  }
                  @if (showLabelIcon) {
                    <kendo-icon-wrapper
                      aria-hidden='true'
                      [name]='validationIconClasses'
                      [customFontClass]='customValidationIconClasses'
                      [svgIcon]='validationSVGIcon'
                      >
                    </kendo-icon-wrapper>
                  }
                  @if (step.optional) {
                    <span class='k-step-label-optional'>({{optionalText}})</span>
                  }
                }
              </span>
            }
          }
        </a>
        `,
      standalone: true,
      imports: [NgTemplateOutlet, IconWrapperComponent]
    }]
  }], () => [{
    type: StepperService
  }, {
    type: LocalizationService
  }, {
    type: NgZone
  }], {
    step: [{
      type: Input
    }],
    index: [{
      type: Input
    }],
    current: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    successIcon: [{
      type: Input
    }],
    successSVGIcon: [{
      type: Input
    }],
    errorIcon: [{
      type: Input
    }],
    errorSVGIcon: [{
      type: Input
    }],
    svgIcon: [{
      type: Input
    }],
    indicatorTemplate: [{
      type: Input
    }],
    labelTemplate: [{
      type: Input
    }],
    stepTemplate: [{
      type: Input
    }],
    stepLink: [{
      type: ViewChild,
      args: ["stepLink", {
        static: true
      }]
    }],
    errorStepClass: [{
      type: HostBinding,
      args: ["class.k-step-error"]
    }],
    successStepClass: [{
      type: HostBinding,
      args: ["class.k-step-success"]
    }]
  });
})();
var StepperListComponent = class _StepperListComponent {
  renderer;
  ngZone;
  service;
  element;
  linear;
  stepType;
  orientation;
  currentStep;
  steps;
  successIcon;
  successSVGIcon;
  errorIcon;
  errorSVGIcon;
  svgIcon;
  indicatorTemplate;
  labelTemplate;
  stepTemplate;
  listKeydown = new EventEmitter();
  listClick = new EventEmitter();
  domSubs;
  constructor(renderer, ngZone, service, element) {
    this.renderer = renderer;
    this.ngZone = ngZone;
    this.service = service;
    this.element = element;
  }
  ngOnInit() {
    this.initDomEvents();
  }
  ngOnDestroy() {
    if (this.domSubs) {
      this.domSubs();
    }
  }
  get maxStepWidth() {
    return this.maxStepDimension("width");
  }
  get maxStepHeight() {
    return this.maxStepDimension("height");
  }
  get focusedStep() {
    return this.service.focusedStep;
  }
  isPresent(arg) {
    return isPresent(arg);
  }
  maxStepDimension(dimension) {
    if (dimension === "width" && this.orientation === "vertical") {
      return null;
    }
    if (dimension === "height" && this.orientation === "horizontal") {
      return null;
    }
    return 100 / this.steps.length;
  }
  initDomEvents() {
    if (!this.element) {
      return;
    }
    this.ngZone.runOutsideAngular(() => {
      const nativeElement = this.element.nativeElement;
      const clickSubscription = this.renderer.listen(nativeElement, "click", this.clickHandler.bind(this));
      const keydownSubscription = this.renderer.listen(nativeElement, "keydown", (e) => {
        if (hasClass(e.target, "k-step-link")) {
          this.listKeydown.emit(e);
        }
      });
      this.domSubs = () => {
        clickSubscription();
        keydownSubscription();
      };
    });
  }
  clickHandler(e) {
    e.preventDefault();
    const stepIdx = this.getStepIndex(e.target);
    const step = this.steps[stepIdx];
    if (!step || step.disabled) {
      return;
    }
    const eventArgs = {
      stepIdx,
      currentStep: this.currentStep,
      linear: this.linear,
      originalEvent: e
    };
    this.listClick.emit(eventArgs);
  }
  getStepIndex(target) {
    const step = closestItem(target, STEPPER_STEP_INDEX, this.element.nativeElement);
    if (step) {
      return itemIndex(step, STEPPER_STEP_INDEX);
    }
  }
  static ɵfac = function StepperListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StepperListComponent)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(StepperService), ɵɵdirectiveInject(ElementRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _StepperListComponent,
    selectors: [["", "kendoStepperList", ""]],
    inputs: {
      linear: "linear",
      stepType: "stepType",
      orientation: "orientation",
      currentStep: "currentStep",
      steps: "steps",
      successIcon: "successIcon",
      successSVGIcon: "successSVGIcon",
      errorIcon: "errorIcon",
      errorSVGIcon: "errorSVGIcon",
      svgIcon: "svgIcon",
      indicatorTemplate: "indicatorTemplate",
      labelTemplate: "labelTemplate",
      stepTemplate: "stepTemplate"
    },
    outputs: {
      listKeydown: "listKeydown",
      listClick: "listClick"
    },
    standalone: true,
    features: [ɵɵStandaloneFeature],
    attrs: _c26,
    decls: 2,
    vars: 0,
    consts: [["kendoStepperStep", "", 1, "k-step", 3, "type", "step", "index", "current", "successIcon", "successSVGIcon", "errorIcon", "errorSVGIcon", "svgIcon", "indicatorTemplate", "labelTemplate", "stepTemplate", "k-step-first", "k-step-last", "k-step-done", "k-step-current", "k-step-optional", "k-disabled", "k-focus", "ngClass", "ngStyle", "max-width", "max-height"], ["kendoStepperStep", "", 1, "k-step", 3, "type", "step", "index", "current", "successIcon", "successSVGIcon", "errorIcon", "errorSVGIcon", "svgIcon", "indicatorTemplate", "labelTemplate", "stepTemplate", "ngClass", "ngStyle"]],
    template: function StepperListComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵrepeaterCreate(0, StepperListComponent_For_1_Template, 1, 33, "li", 0, ɵɵrepeaterTrackByIdentity);
      }
      if (rf & 2) {
        ɵɵrepeater(ctx.steps);
      }
    },
    dependencies: [StepperStepComponent, NgClass, NgStyle],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepperListComponent, [{
    type: Component,
    args: [{
      // eslint-disable-next-line @angular-eslint/component-selector
      selector: "[kendoStepperList]",
      template: `
        @for (step of steps; track step; let idx = $index) {
          <li kendoStepperStep
            [attr.${STEPPER_STEP_INDEX}]='idx'
            [type]='stepType'
            [step]='step'
            [index]='idx'
            [current]='currentStep'
            [successIcon]='successIcon'
            [successSVGIcon]='successSVGIcon'
            [errorIcon]='errorIcon'
            [errorSVGIcon]='errorSVGIcon'
            [svgIcon]='svgIcon'
            [indicatorTemplate]='indicatorTemplate'
            [labelTemplate]='labelTemplate'
            [stepTemplate]='stepTemplate'
            class='k-step'
            [class.k-step-first]='idx === 0'
            [class.k-step-last]='idx === steps.length - 1'
            [class.k-step-done]='idx < currentStep'
            [class.k-step-current]='idx === currentStep'
            [class.k-step-optional]='step.optional'
            [class.k-disabled]='step.disabled'
            [class.k-focus]='idx === focusedStep || (!isPresent(focusedStep) && idx === currentStep)'
            [ngClass]='step.cssClass'
            [ngStyle]='step.cssStyle'
            [style.max-width.%] = 'maxStepWidth'
            [style.max-height.%] = 'maxStepHeight'
            >
          </li>
        }
        `,
      standalone: true,
      imports: [StepperStepComponent, NgClass, NgStyle]
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: NgZone
  }, {
    type: StepperService
  }, {
    type: ElementRef
  }], {
    linear: [{
      type: Input
    }],
    stepType: [{
      type: Input
    }],
    orientation: [{
      type: Input
    }],
    currentStep: [{
      type: Input
    }],
    steps: [{
      type: Input
    }],
    successIcon: [{
      type: Input
    }],
    successSVGIcon: [{
      type: Input
    }],
    errorIcon: [{
      type: Input
    }],
    errorSVGIcon: [{
      type: Input
    }],
    svgIcon: [{
      type: Input
    }],
    indicatorTemplate: [{
      type: Input
    }],
    labelTemplate: [{
      type: Input
    }],
    stepTemplate: [{
      type: Input
    }],
    listKeydown: [{
      type: Output
    }],
    listClick: [{
      type: Output
    }]
  });
})();
var StepperMessages = class _StepperMessages extends ComponentMessages {
  /**
   * Specifies the optional text.
   */
  optional;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵStepperMessages_BaseFactory;
    return function StepperMessages_Factory(__ngFactoryType__) {
      return (ɵStepperMessages_BaseFactory || (ɵStepperMessages_BaseFactory = ɵɵgetInheritedFactory(_StepperMessages)))(__ngFactoryType__ || _StepperMessages);
    };
  })();
  static ɵdir = ɵɵdefineDirective({
    type: _StepperMessages,
    selectors: [["kendo-stepper-messages-base"]],
    inputs: {
      optional: "optional"
    },
    features: [ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepperMessages, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "kendo-stepper-messages-base"
    }]
  }], null, {
    optional: [{
      type: Input
    }]
  });
})();
var LocalizedStepperMessagesDirective = class _LocalizedStepperMessagesDirective extends StepperMessages {
  service;
  constructor(service) {
    super();
    this.service = service;
  }
  static ɵfac = function LocalizedStepperMessagesDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LocalizedStepperMessagesDirective)(ɵɵdirectiveInject(LocalizationService));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _LocalizedStepperMessagesDirective,
    selectors: [["", "kendoStepperLocalizedMessages", ""]],
    standalone: true,
    features: [ɵɵProvidersFeature([{
      provide: StepperMessages,
      useExisting: forwardRef(() => _LocalizedStepperMessagesDirective)
    }]), ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LocalizedStepperMessagesDirective, [{
    type: Directive,
    args: [{
      providers: [{
        provide: StepperMessages,
        useExisting: forwardRef(() => LocalizedStepperMessagesDirective)
      }],
      selector: `
      [kendoStepperLocalizedMessages]
    `,
      standalone: true
    }]
  }], () => [{
    type: LocalizationService
  }], null);
})();
var DEFAULT_ANIMATION_DURATION = 400;
var StepperComponent = class _StepperComponent {
  renderer;
  elem;
  localization;
  stepperService;
  hostClasses = true;
  get linearClass() {
    return this.linear;
  }
  ariaRole = "navigation";
  direction;
  displayStyle = "grid";
  /**
   * Specifies the type of the steps in the Stepper.
   *
   * @default 'indicator'
   */
  stepType = "indicator";
  /**
   * Specifies the linear flow of the Stepper.
   *
   * @default true
   */
  linear = true;
  /**
   * Specifies the orientation of the Stepper
   * ([see example]({% slug orientation_stepper %})).
   *
   * @default 'horizontal'
   */
  orientation = "horizontal";
  /**
   * Specifies the index of the current step.
   */
  set currentStep(value) {
    this.stepperService.currentStep = value;
  }
  get currentStep() {
    return this.stepperService.currentStep;
  }
  /**
   * Specifies the collection of steps that will be rendered in the Stepper
   * ([see example]({% slug step_appearance_stepper %})).
   */
  set steps(steps) {
    if (isPresent2(steps) && steps.length > 0) {
      this._steps = steps;
    }
  }
  get steps() {
    return this._steps;
  }
  /**
   * Specifies an SVG icon to be rendered inside the step indicator instead of the default numeric or text content.
   * You can use either an [existing Kendo SVG icon](slug:svgicon_list) or a custom one.
   */
  set svgIcon(icon) {
    this._svgIcon = icon;
  }
  get svgIcon() {
    return this._svgIcon;
  }
  /**
   * Specifies an SVG icon to be rendered for the success icon.
   * You can use either an [existing Kendo SVG icon](slug:svgicon_list) or a custom one.
   */
  successSVGIcon;
  /**
   * Specifies an SVG icon to be rendered for the error icon.
   * You can use either an [existing Kendo SVG icon](slug:svgicon_list) or a custom one.
   */
  errorSVGIcon;
  /**
   * Specifies an SVG icon that will be rendered inside the step for valid previous steps.
   * You can use either an [existing Kendo SVG icon](slug:svgicon_list) or a custom one.
   */
  successIcon;
  /**
  * Specifies an SVG icon that will be rendered inside the step for invalid previous steps.
  * You can use either an [existing Kendo SVG icon](slug:svgicon_list) or a custom one.
  */
  errorIcon;
  /**
   * Specifies the duration of the progress indicator animation in milliseconds.
   *
   * @default true
   */
  animation = true;
  /**
   * Fires when a step is about to be activated. You can prevent this event.
   */
  activate = new EventEmitter();
  /**
   * Fires when the `currentStep` property of the component was updated.
   * Use this event to provide a two-way binding for the `currentStep` property.
   */
  currentStepChange = new EventEmitter();
  /**
   * @hidden
   */
  stepTemplate;
  /**
   * @hidden
   */
  labelTemplate;
  /**
   * @hidden
   */
  indicatorTemplate;
  dynamicRTLSubscription;
  _steps = [];
  _successSVGIcon;
  _errorSVGIcon;
  _svgIcon;
  constructor(renderer, elem, localization, stepperService) {
    this.renderer = renderer;
    this.elem = elem;
    this.localization = localization;
    this.stepperService = stepperService;
    this.dynamicRTLSubscription = this.localization.changes.subscribe(({
      rtl
    }) => {
      this.direction = rtl ? "rtl" : "ltr";
    });
    this.stepperService.owner = this;
  }
  ngOnInit() {
    this.applyHostStyling();
  }
  ngOnChanges(changes) {
    if (changes["steps"] && !changes["steps"].firstChange) {
      this.applyHostStyling();
    }
    if (changes["orientation"]) {
      this.resetHostStyling();
      this.applyHostStyling();
    }
  }
  ngOnDestroy() {
    if (this.dynamicRTLSubscription) {
      this.dynamicRTLSubscription.unsubscribe();
    }
  }
  /**
   * Manually triggers the validity check configured by the [isValid]({% slug api_layout_stepperstep %}#toc-isvalid) property of the steps ([see example]({% slug step_validation_stepper %}#toc-triggering-the-validation)).
   *
   * Steps that have their [validate]({% slug api_layout_stepperstep %}#toc-validate) property set to `false`, will not be validated.
   */
  validateSteps() {
    this.stepperService.validateSteps();
  }
  applyHostStyling() {
    const stepFramesStyle = this.orientation === "horizontal" ? "grid-template-columns" : "grid-template-rows";
    const stepFramesValue = `repeat(${this.steps.length * 2}, 1fr)`;
    this.renderer.setStyle(this.elem.nativeElement, stepFramesStyle, stepFramesValue);
  }
  resetHostStyling() {
    this.renderer.removeStyle(this.elem.nativeElement, "grid-template-columns");
    this.renderer.removeStyle(this.elem.nativeElement, "grid-template-rows");
  }
  /**
   * @hidden
   */
  get progressAnimation() {
    return {
      duration: this.animationDuration
    };
  }
  /**
   * @hidden
   */
  get animationDuration() {
    if (typeof this.animation === "number") {
      return this.animation;
    }
    if (typeof this.animation === "boolean" && this.animation) {
      return DEFAULT_ANIMATION_DURATION;
    }
    return 0;
  }
  /**
   * @hidden
   */
  get stepsListStyling() {
    if (this.orientation === "horizontal") {
      return {
        "grid-column-start": 1,
        "grid-column-end": -1
      };
    }
    return {
      "grid-row-start": 1,
      "grid-row-end": -1
    };
  }
  /**
   * @hidden
   */
  get progressBarStyling() {
    if (this.orientation === "horizontal") {
      return {
        "grid-column-start": 2,
        "grid-column-end": this.steps.length * 2
      };
    }
    return {
      "grid-row-start": 2,
      "grid-row-end": this.steps.length * 2
    };
  }
  /**
   * @hidden
   */
  onListKeydown(e) {
    this.stepperService.keydown(e);
  }
  /**
   * @hidden
   */
  onListClick(e) {
    if (e.stepIdx === e.currentStep) {
      this.stepperService.focus(e.stepIdx);
      return;
    }
    if (e.linear && this.stepperService.isPrevOrNextStep(e.stepIdx) === false) {
      return;
    }
    this.stepperService.onActivate(e.stepIdx, e.originalEvent);
  }
  /**
   * @hidden
   */
  get isHorizontal() {
    return this.orientation === "horizontal";
  }
  static ɵfac = function StepperComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StepperComponent)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(StepperService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _StepperComponent,
    selectors: [["kendo-stepper"]],
    contentQueries: function StepperComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, StepperStepTemplateDirective, 5);
        ɵɵcontentQuery(dirIndex, StepperLabelTemplateDirective, 5);
        ɵɵcontentQuery(dirIndex, StepperIndicatorTemplateDirective, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.stepTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.labelTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.indicatorTemplate = _t.first);
      }
    },
    hostVars: 8,
    hostBindings: function StepperComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("role", ctx.ariaRole)("dir", ctx.direction);
        ɵɵstyleProp("display", ctx.displayStyle);
        ɵɵclassProp("k-stepper", ctx.hostClasses)("k-stepper-linear", ctx.linearClass);
      }
    },
    inputs: {
      stepType: "stepType",
      linear: "linear",
      orientation: "orientation",
      currentStep: "currentStep",
      steps: "steps",
      svgIcon: "svgIcon",
      successSVGIcon: "successSVGIcon",
      errorSVGIcon: "errorSVGIcon",
      successIcon: "successIcon",
      errorIcon: "errorIcon",
      animation: "animation"
    },
    outputs: {
      activate: "activate",
      currentStepChange: "currentStepChange"
    },
    exportAs: ["kendoStepper"],
    standalone: true,
    features: [ɵɵProvidersFeature([LocalizationService, StepperService, {
      provide: L10N_PREFIX,
      useValue: "kendo.stepper"
    }]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    decls: 3,
    vars: 19,
    consts: () => {
      let i18n_3;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_LAYOUT_FESM2022_PROGRESS_KENDO_ANGULAR_LAYOUT_MJS_3 = goog.getMsg("Optional");
        i18n_3 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_LAYOUT_FESM2022_PROGRESS_KENDO_ANGULAR_LAYOUT_MJS_3;
      } else {
        i18n_3 = $localize`:kendo.stepper.optional|The text for the optional segment of the step label:Optional`;
      }
      return [["kendoStepperLocalizedMessages", "", "optional", i18n_3], ["kendoStepperList", "", 1, "k-step-list", 3, "listKeydown", "listClick", "stepType", "linear", "orientation", "steps", "currentStep", "successIcon", "successSVGIcon", "errorIcon", "errorSVGIcon", "svgIcon", "indicatorTemplate", "labelTemplate", "stepTemplate", "ngStyle"], [3, "animation", "max", "label", "orientation", "reverse", "value", "ngStyle"]];
    },
    template: function StepperComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementContainer(0, 0);
        ɵɵelementStart(1, "ol", 1);
        ɵɵlistener("listKeydown", function StepperComponent_Template_ol_listKeydown_1_listener($event) {
          return ctx.onListKeydown($event);
        })("listClick", function StepperComponent_Template_ol_listClick_1_listener($event) {
          return ctx.onListClick($event);
        });
        ɵɵelementEnd();
        ɵɵtemplate(2, StepperComponent_Conditional_2_Template, 1, 9, "kendo-progressbar", 2);
      }
      if (rf & 2) {
        ɵɵadvance();
        ɵɵclassProp("k-step-list-horizontal", ctx.isHorizontal)("k-step-list-vertical", !ctx.isHorizontal);
        ɵɵproperty("stepType", ctx.stepType)("linear", ctx.linear)("orientation", ctx.orientation)("steps", ctx.steps)("currentStep", ctx.currentStep)("successIcon", ctx.successIcon)("successSVGIcon", ctx.successSVGIcon)("errorIcon", ctx.errorIcon)("errorSVGIcon", ctx.errorSVGIcon)("svgIcon", ctx.svgIcon)("indicatorTemplate", ctx.indicatorTemplate == null ? null : ctx.indicatorTemplate.templateRef)("labelTemplate", ctx.labelTemplate == null ? null : ctx.labelTemplate.templateRef)("stepTemplate", ctx.stepTemplate == null ? null : ctx.stepTemplate.templateRef)("ngStyle", ctx.stepsListStyling);
        ɵɵadvance();
        ɵɵconditional(ctx.steps.length > 0 ? 2 : -1);
      }
    },
    dependencies: [LocalizedStepperMessagesDirective, StepperListComponent, NgStyle, ProgressBarComponent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepperComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoStepper",
      providers: [LocalizationService, StepperService, {
        provide: L10N_PREFIX,
        useValue: "kendo.stepper"
      }],
      selector: "kendo-stepper",
      template: `
        <ng-container kendoStepperLocalizedMessages
          i18n-optional="kendo.stepper.optional|The text for the optional segment of the step label"
          optional="Optional"
          >
        </ng-container>
        <ol kendoStepperList
          [stepType]='stepType'
          [linear]='linear'
          [orientation]='orientation'
          [steps]='steps'
          [currentStep]='currentStep'
          [successIcon]='successIcon'
          [successSVGIcon]='successSVGIcon'
          [errorIcon]='errorIcon'
          [errorSVGIcon]='errorSVGIcon'
          [svgIcon]="svgIcon"
          [indicatorTemplate]='indicatorTemplate?.templateRef'
          [labelTemplate]='labelTemplate?.templateRef'
          [stepTemplate]='stepTemplate?.templateRef'
          class='k-step-list'
          [class.k-step-list-horizontal]='isHorizontal'
          [class.k-step-list-vertical]='!isHorizontal'
          [ngStyle]='stepsListStyling'
          (listKeydown)="onListKeydown($event)"
          (listClick)="onListClick($event)">
        </ol>
        
        @if (steps.length > 0) {
          <kendo-progressbar
            [attr.aria-hidden]='true'
            [animation]='progressAnimation'
            [max]='steps.length - 1'
            [label]='{position: "start", visible: false}'
            [orientation]='orientation'
            [reverse]='!isHorizontal'
            [value]='currentStep'
            [ngStyle]='progressBarStyling'>
          </kendo-progressbar>
        }
        `,
      standalone: true,
      imports: [LocalizedStepperMessagesDirective, StepperListComponent, NgStyle, ProgressBarComponent]
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: LocalizationService
  }, {
    type: StepperService
  }], {
    hostClasses: [{
      type: HostBinding,
      args: ["class.k-stepper"]
    }],
    linearClass: [{
      type: HostBinding,
      args: ["class.k-stepper-linear"]
    }],
    ariaRole: [{
      type: HostBinding,
      args: ["attr.role"]
    }],
    direction: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    displayStyle: [{
      type: HostBinding,
      args: ["style.display"]
    }],
    stepType: [{
      type: Input
    }],
    linear: [{
      type: Input
    }],
    orientation: [{
      type: Input
    }],
    currentStep: [{
      type: Input
    }],
    steps: [{
      type: Input
    }],
    svgIcon: [{
      type: Input
    }],
    successSVGIcon: [{
      type: Input
    }],
    errorSVGIcon: [{
      type: Input
    }],
    successIcon: [{
      type: Input
    }],
    errorIcon: [{
      type: Input
    }],
    animation: [{
      type: Input
    }],
    activate: [{
      type: Output
    }],
    currentStepChange: [{
      type: Output
    }],
    stepTemplate: [{
      type: ContentChild,
      args: [StepperStepTemplateDirective, {
        static: false
      }]
    }],
    labelTemplate: [{
      type: ContentChild,
      args: [StepperLabelTemplateDirective, {
        static: false
      }]
    }],
    indicatorTemplate: [{
      type: ContentChild,
      args: [StepperIndicatorTemplateDirective, {
        static: false
      }]
    }]
  });
})();
var StepperActivateEvent2 = class extends PreventableEvent {
  /**
   * Specifies the index of the activated step in the `steps` collection.
   */
  index;
  /**
   * Specifies the activated step.
   */
  step;
  /**
   * Specifies the DOM event that triggered the step activation.
   */
  originalEvent;
  /**
   * Specifies the Stepper that triggered the event.
   */
  sender;
  /**
   * @hidden
   */
  constructor(args) {
    super();
    Object.assign(this, args);
  }
};
var StepperCustomMessagesComponent = class _StepperCustomMessagesComponent extends StepperMessages {
  service;
  constructor(service) {
    super();
    this.service = service;
  }
  get override() {
    return true;
  }
  static ɵfac = function StepperCustomMessagesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StepperCustomMessagesComponent)(ɵɵdirectiveInject(LocalizationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _StepperCustomMessagesComponent,
    selectors: [["kendo-stepper-messages"]],
    standalone: true,
    features: [ɵɵProvidersFeature([{
      provide: StepperMessages,
      useExisting: forwardRef(() => _StepperCustomMessagesComponent)
    }]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function StepperCustomMessagesComponent_Template(rf, ctx) {
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepperCustomMessagesComponent, [{
    type: Component,
    args: [{
      providers: [{
        provide: StepperMessages,
        useExisting: forwardRef(() => StepperCustomMessagesComponent)
      }],
      selector: "kendo-stepper-messages",
      template: ``,
      standalone: true
    }]
  }], () => [{
    type: LocalizationService
  }], null);
})();
var Messages = class _Messages extends ComponentMessages {
  /**
   * Defines the alt attribute text of the image in the Avatar.
   */
  avatarAlt;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵMessages_BaseFactory;
    return function Messages_Factory(__ngFactoryType__) {
      return (ɵMessages_BaseFactory || (ɵMessages_BaseFactory = ɵɵgetInheritedFactory(_Messages)))(__ngFactoryType__ || _Messages);
    };
  })();
  static ɵdir = ɵɵdefineDirective({
    type: _Messages,
    selectors: [["kendoAvatarMessages"]],
    inputs: {
      avatarAlt: "avatarAlt"
    },
    features: [ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Messages, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "kendoAvatarMessages"
    }]
  }], null, {
    avatarAlt: [{
      type: Input
    }]
  });
})();
var LocalizedAvatarMessagesDirective = class _LocalizedAvatarMessagesDirective extends Messages {
  service;
  constructor(service) {
    super();
    this.service = service;
  }
  static ɵfac = function LocalizedAvatarMessagesDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LocalizedAvatarMessagesDirective)(ɵɵdirectiveInject(LocalizationService));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _LocalizedAvatarMessagesDirective,
    selectors: [["", "kendoAvatarLocalizedMessages", ""]],
    standalone: true,
    features: [ɵɵProvidersFeature([{
      provide: Messages,
      useExisting: forwardRef(() => _LocalizedAvatarMessagesDirective)
    }]), ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LocalizedAvatarMessagesDirective, [{
    type: Directive,
    args: [{
      providers: [{
        provide: Messages,
        useExisting: forwardRef(() => LocalizedAvatarMessagesDirective)
      }],
      selector: "[kendoAvatarLocalizedMessages]",
      standalone: true
    }]
  }], () => [{
    type: LocalizationService
  }], null);
})();
var DEFAULT_ROUNDED = "full";
var DEFAULT_SIZE = "medium";
var DEFAULT_THEME_COLOR = "primary";
var DEFAULT_FILL_MODE = "solid";
var AvatarComponent = class _AvatarComponent {
  localization;
  renderer;
  element;
  hostClass = true;
  /**
   * @hidden
   */
  get borderClass() {
    return this.border;
  }
  /**
   * @hidden
   */
  get flexBasis() {
    return this.width;
  }
  /**
   * Sets the shape for the avatar.
   * @hidden
   */
  set shape(shape) {
    this.rounded = mapShapeToRounded(shape);
  }
  /**
   * Specifies the size of the Avatar
   * ([see example]({% slug appearance_avatar %}#toc-size)).
   *
   * @default 'medium'
   */
  set size(size) {
    if (size !== this._size) {
      const newSize = size ? size : DEFAULT_SIZE;
      this.handleClasses("size", newSize);
      this._size = newSize;
    }
  }
  get size() {
    return this._size;
  }
  /**
   * Specifies the rounded styling of the Avatar
   * ([see example](slug:appearance_avatar#toc-roundness)).
   *
   * @default 'full'
   */
  set rounded(rounded) {
    if (rounded !== this._rounded) {
      const newRounded = rounded ? rounded : DEFAULT_ROUNDED;
      this.handleClasses("rounded", newRounded);
      this._rounded = newRounded;
    }
  }
  get rounded() {
    return this._rounded;
  }
  /**
   * Specifies the theme color of the Avatar.
   * The theme color applies as background and border color while adjusting the text color accordingly.
   *
   * @default 'primary'
   */
  set themeColor(themeColor) {
    if (themeColor !== this._themeColor) {
      const newThemeColor = themeColor ? themeColor : DEFAULT_THEME_COLOR;
      this._themeColor = newThemeColor;
      this.handleFillModeAndThemeColorClasses(this.fillMode, this.themeColor);
    }
  }
  get themeColor() {
    return this._themeColor;
  }
  /**
   * Specifies the fill style of the Avatar.
   *
   * @default 'solid'
   */
  set fillMode(fillMode) {
    if (fillMode !== this.fillMode) {
      const newFillMode = fillMode ? fillMode : DEFAULT_FILL_MODE;
      this._fillMode = newFillMode;
      this.handleFillModeAndThemeColorClasses(this.fillMode, this.themeColor);
    }
  }
  get fillMode() {
    return this._fillMode;
  }
  /**
   * Specifies the appearance fill style of the avatar.
   * Deprecated, left for backward compatibility.
   *
   * @hidden
   */
  set fill(fillMode) {
    this.fillMode = fillMode;
  }
  /**
   * Adds a border to the Avatar.
   *
   * @default false
   */
  border = false;
  /**
   * Defines a CSS class or multiple classes separated by spaces.
   * You can apply these classes to a `span` element inside the Avatar and also use custom icons.
   */
  iconClass;
  /**
   * Sets the width of the Avatar.
   */
  width;
  /**
   * @hidden
   */
  get avatarWidth() {
    return this.width;
  }
  /**
   * Sets the height of the Avatar.
   */
  height;
  /**
   * @hidden
   */
  get avatarHeight() {
    return this.height;
  }
  /**
   * Defines the CSS styles that render on the content element of the Avatar.
   * Supports the type of values that [`ngStyle`](link:site.data.urls.angular['ngstyleapi']) supports.
   */
  cssStyle;
  /**
   * Sets the initials for the Avatar.
   */
  initials;
  /**
   * Sets the icon for the Avatar.
   * All [Kendo UI Icons](slug:icons#icons-list) are supported.
   */
  icon;
  /**
   * Sets the image source of the Avatar.
   */
  imageSrc;
  /**
   * Defines an SVG icon to render.
   * You can use either an [existing Kendo SVG icon](slug:svgicon_list) or a custom one.
   */
  set svgIcon(icon) {
    if (isDevMode() && icon && this.icon && this.iconClass) {
      throw new Error("Setting both icon/svgIcon and iconClass options at the same time is not supported.");
    }
    this._svgIcon = icon;
  }
  get svgIcon() {
    return this._svgIcon;
  }
  _themeColor = DEFAULT_THEME_COLOR;
  _size = DEFAULT_SIZE;
  _fillMode = DEFAULT_FILL_MODE;
  _rounded = DEFAULT_ROUNDED;
  _svgIcon;
  constructor(localization, renderer, element) {
    this.localization = localization;
    this.renderer = renderer;
    this.element = element;
    A(packageMetadata);
  }
  ngOnInit() {
    this.verifyProperties();
  }
  ngAfterViewInit() {
    const stylingInputs = ["size", "rounded"];
    stylingInputs.forEach((input) => {
      this.handleClasses(input, this[input]);
    });
    this.handleFillModeAndThemeColorClasses(this.fillMode, this.themeColor);
  }
  /**
   * @hidden
   */
  get customAvatar() {
    return !(this.imageSrc || this.initials || this.icon || this.iconClass);
  }
  verifyProperties() {
    if (!isDevMode()) {
      return;
    }
    const inputs = [this.icon || this.iconClass, this.imageSrc, this.initials];
    const inputsLength = inputs.filter((value) => value).length;
    if (inputsLength > 1) {
      throw new Error(`
                Invalid property configuration given.
                The kendo-avatar component can accept only one of:
                icon, imageSrc or initials properties.
            `);
    }
  }
  handleClasses(styleType, value) {
    const elem = this.element.nativeElement;
    const classes = getStylingClasses("avatar", styleType, this[styleType], value);
    if (classes.toRemove) {
      this.renderer.removeClass(elem, classes.toRemove);
    }
    if (classes.toAdd) {
      this.renderer.addClass(elem, classes.toAdd);
    }
  }
  handleFillModeAndThemeColorClasses(fill, themeColor) {
    const wrapperElement = this.element.nativeElement;
    const currentClasses = Array.from(wrapperElement.classList);
    const classesToRemove = currentClasses.filter((cl) => {
      return cl.startsWith("k-avatar-solid") || cl.startsWith("k-avatar-outline");
    });
    classesToRemove.forEach((cl) => this.renderer.removeClass(wrapperElement, cl));
    if (fill !== "none") {
      this.renderer.addClass(wrapperElement, `k-avatar-${fill}`);
    }
    if (fill !== "none" && themeColor !== "none") {
      this.renderer.addClass(wrapperElement, `k-avatar-${fill}-${themeColor}`);
    }
  }
  /**
   * @hidden
   */
  textFor(key) {
    return this.localization.get(key);
  }
  static ɵfac = function AvatarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AvatarComponent)(ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _AvatarComponent,
    selectors: [["kendo-avatar"]],
    hostVars: 10,
    hostBindings: function AvatarComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵstyleProp("flex-basis", ctx.flexBasis)("width", ctx.avatarWidth)("height", ctx.avatarHeight);
        ɵɵclassProp("k-avatar", ctx.hostClass)("k-avatar-bordered", ctx.borderClass);
      }
    },
    inputs: {
      shape: "shape",
      size: "size",
      rounded: "rounded",
      themeColor: "themeColor",
      fillMode: "fillMode",
      fill: "fill",
      border: "border",
      iconClass: "iconClass",
      width: "width",
      height: "height",
      cssStyle: "cssStyle",
      initials: "initials",
      icon: "icon",
      imageSrc: "imageSrc",
      svgIcon: "svgIcon"
    },
    standalone: true,
    features: [ɵɵProvidersFeature([LocalizationService, {
      provide: L10N_PREFIX,
      useValue: "kendo.avatar"
    }]), ɵɵStandaloneFeature],
    ngContentSelectors: _c8,
    decls: 5,
    vars: 4,
    consts: () => {
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_LAYOUT_FESM2022_PROGRESS_KENDO_ANGULAR_LAYOUT_MJS_4 = goog.getMsg("Avatar");
        i18n_4 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_LAYOUT_FESM2022_PROGRESS_KENDO_ANGULAR_LAYOUT_MJS_4;
      } else {
        i18n_4 = $localize`:kendo.avatar.avatarAlt|The alt attribute text of the image in the avatar.:Avatar`;
      }
      return [["kendoAvatarLocalizedMessages", "", "avatarAlt", i18n_4], [1, "k-avatar-image"], [1, "k-avatar-text", 3, "ngStyle"], [1, "k-avatar-icon"], [3, "src", "alt", "ngStyle"], [3, "ngStyle", "name", "customFontClass", "svgIcon"]];
    },
    template: function AvatarComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementContainer(0, 0);
        ɵɵtemplate(1, AvatarComponent_Conditional_1_Template, 1, 0)(2, AvatarComponent_Conditional_2_Template, 2, 3, "span", 1)(3, AvatarComponent_Conditional_3_Template, 2, 2, "span", 2)(4, AvatarComponent_Conditional_4_Template, 2, 4, "span", 3);
      }
      if (rf & 2) {
        ɵɵadvance();
        ɵɵconditional(ctx.customAvatar ? 1 : -1);
        ɵɵadvance();
        ɵɵconditional(ctx.imageSrc ? 2 : -1);
        ɵɵadvance();
        ɵɵconditional(ctx.initials ? 3 : -1);
        ɵɵadvance();
        ɵɵconditional(ctx.icon || ctx.iconClass || ctx.svgIcon ? 4 : -1);
      }
    },
    dependencies: [NgStyle, IconWrapperComponent, LocalizedAvatarMessagesDirective],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AvatarComponent, [{
    type: Component,
    args: [{
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.avatar"
      }],
      selector: "kendo-avatar",
      template: `
        <ng-container kendoAvatarLocalizedMessages
          i18n-avatarAlt="kendo.avatar.avatarAlt|The alt attribute text of the image in the avatar."
          avatarAlt="Avatar"
          >
        </ng-container>
        
        @if (customAvatar) {
          <ng-content></ng-content>
        }
        
        @if (imageSrc) {
          <span class="k-avatar-image">
            <img src="{{ imageSrc }}" [alt]="textFor('avatarAlt')" [ngStyle]="cssStyle" />
          </span>
        }
        
        @if (initials) {
          <span class="k-avatar-text" [ngStyle]="cssStyle">{{ initials.substring(0, 2) }}</span>
        }
        
        @if (icon || iconClass || svgIcon) {
          <span class="k-avatar-icon">
            <kendo-icon-wrapper
              [ngStyle]="cssStyle"
              [name]="icon"
              [customFontClass]="iconClass"
              [svgIcon]="svgIcon"
              >
            </kendo-icon-wrapper>
          </span>
        }
        `,
      standalone: true,
      imports: [NgStyle, IconWrapperComponent, LocalizedAvatarMessagesDirective]
    }]
  }], () => [{
    type: LocalizationService
  }, {
    type: Renderer2
  }, {
    type: ElementRef
  }], {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-avatar"]
    }],
    borderClass: [{
      type: HostBinding,
      args: ["class.k-avatar-bordered"]
    }],
    flexBasis: [{
      type: HostBinding,
      args: ["style.flexBasis"]
    }],
    shape: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    rounded: [{
      type: Input
    }],
    themeColor: [{
      type: Input
    }],
    fillMode: [{
      type: Input
    }],
    fill: [{
      type: Input
    }],
    border: [{
      type: Input
    }],
    iconClass: [{
      type: Input
    }],
    width: [{
      type: Input
    }],
    avatarWidth: [{
      type: HostBinding,
      args: ["style.width"]
    }],
    height: [{
      type: Input
    }],
    avatarHeight: [{
      type: HostBinding,
      args: ["style.height"]
    }],
    cssStyle: [{
      type: Input
    }],
    initials: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    imageSrc: [{
      type: Input
    }],
    svgIcon: [{
      type: Input
    }]
  });
})();
var AvatarCustomMessagesComponent = class _AvatarCustomMessagesComponent extends Messages {
  service;
  constructor(service) {
    super();
    this.service = service;
  }
  get override() {
    return true;
  }
  static ɵfac = function AvatarCustomMessagesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AvatarCustomMessagesComponent)(ɵɵdirectiveInject(LocalizationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _AvatarCustomMessagesComponent,
    selectors: [["kendo-avatar-messages"]],
    standalone: true,
    features: [ɵɵProvidersFeature([{
      provide: Messages,
      useExisting: forwardRef(() => _AvatarCustomMessagesComponent)
    }]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function AvatarCustomMessagesComponent_Template(rf, ctx) {
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AvatarCustomMessagesComponent, [{
    type: Component,
    args: [{
      providers: [{
        provide: Messages,
        useExisting: forwardRef(() => AvatarCustomMessagesComponent)
      }],
      selector: "kendo-avatar-messages",
      template: ``,
      standalone: true
    }]
  }], () => [{
    type: LocalizationService
  }], null);
})();
var CardComponent = class _CardComponent {
  localizationService;
  hostClass = true;
  get widthStyle() {
    return this.width;
  }
  get vertical() {
    return this.orientation === "vertical";
  }
  get horizontal() {
    return this.orientation === "horizontal";
  }
  /**
   * @hidden
   */
  direction;
  /**
   * Specifies the layout of the Card content.
   *
   * @default 'vertical'
   */
  orientation = "vertical";
  /**
   * Defines the width of the Card.
   *
   * @default '285px'
   */
  width = "285px";
  dynamicRTLSubscription;
  rtl = false;
  constructor(localizationService) {
    this.localizationService = localizationService;
    A(packageMetadata);
    this.dynamicRTLSubscription = this.localizationService.changes.subscribe(({
      rtl
    }) => {
      this.rtl = rtl;
      this.direction = this.rtl ? "rtl" : "ltr";
    });
  }
  ngOnDestroy() {
    if (this.dynamicRTLSubscription) {
      this.dynamicRTLSubscription.unsubscribe();
    }
  }
  static ɵfac = function CardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CardComponent)(ɵɵdirectiveInject(LocalizationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _CardComponent,
    selectors: [["kendo-card"]],
    hostVars: 9,
    hostBindings: function CardComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("dir", ctx.direction);
        ɵɵstyleProp("width", ctx.widthStyle);
        ɵɵclassProp("k-card", ctx.hostClass)("k-card-vertical", ctx.vertical)("k-card-horizontal", ctx.horizontal);
      }
    },
    inputs: {
      orientation: "orientation",
      width: "width"
    },
    standalone: true,
    features: [ɵɵProvidersFeature([LocalizationService, {
      provide: L10N_PREFIX,
      useValue: "kendo.card.component"
    }]), ɵɵStandaloneFeature],
    ngContentSelectors: _c8,
    decls: 1,
    vars: 0,
    template: function CardComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardComponent, [{
    type: Component,
    args: [{
      selector: "kendo-card",
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.card.component"
      }],
      template: `
        <ng-content></ng-content>
    `,
      standalone: true
    }]
  }], () => [{
    type: LocalizationService
  }], {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-card"]
    }],
    widthStyle: [{
      type: HostBinding,
      args: ["style.width"]
    }],
    vertical: [{
      type: HostBinding,
      args: ["class.k-card-vertical"]
    }],
    horizontal: [{
      type: HostBinding,
      args: ["class.k-card-horizontal"]
    }],
    direction: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    orientation: [{
      type: Input
    }],
    width: [{
      type: Input
    }]
  });
})();
var CardHeaderComponent = class _CardHeaderComponent {
  hostClass = true;
  static ɵfac = function CardHeaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CardHeaderComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _CardHeaderComponent,
    selectors: [["kendo-card-header"]],
    hostVars: 2,
    hostBindings: function CardHeaderComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("k-card-header", ctx.hostClass);
      }
    },
    standalone: true,
    features: [ɵɵStandaloneFeature],
    ngContentSelectors: _c8,
    decls: 1,
    vars: 0,
    template: function CardHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardHeaderComponent, [{
    type: Component,
    args: [{
      selector: "kendo-card-header",
      template: `
        <ng-content></ng-content>
    `,
      standalone: true
    }]
  }], null, {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-card-header"]
    }]
  });
})();
var CardBodyComponent = class _CardBodyComponent {
  hostClass = true;
  static ɵfac = function CardBodyComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CardBodyComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _CardBodyComponent,
    selectors: [["kendo-card-body"]],
    hostVars: 2,
    hostBindings: function CardBodyComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("k-card-body", ctx.hostClass);
      }
    },
    standalone: true,
    features: [ɵɵStandaloneFeature],
    ngContentSelectors: _c8,
    decls: 1,
    vars: 0,
    template: function CardBodyComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardBodyComponent, [{
    type: Component,
    args: [{
      selector: "kendo-card-body",
      template: `
        <ng-content></ng-content>
    `,
      standalone: true
    }]
  }], null, {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-card-body"]
    }]
  });
})();
var CardFooterComponent = class _CardFooterComponent {
  hostClass = true;
  static ɵfac = function CardFooterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CardFooterComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _CardFooterComponent,
    selectors: [["kendo-card-footer"]],
    hostVars: 2,
    hostBindings: function CardFooterComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("k-card-footer", ctx.hostClass);
      }
    },
    standalone: true,
    features: [ɵɵStandaloneFeature],
    ngContentSelectors: _c8,
    decls: 1,
    vars: 0,
    template: function CardFooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardFooterComponent, [{
    type: Component,
    args: [{
      selector: "kendo-card-footer",
      template: `
        <ng-content></ng-content>
    `,
      standalone: true
    }]
  }], null, {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-card-footer"]
    }]
  });
})();
var CardActionsComponent = class _CardActionsComponent {
  hostClass = true;
  get stretchedClass() {
    return this.layout === "stretched";
  }
  get startClass() {
    return this.layout === "start";
  }
  get endClass() {
    return this.layout === "end";
  }
  get centerClass() {
    return this.layout === "center";
  }
  get verticalClass() {
    return this.orientation === "vertical";
  }
  get horizontalClass() {
    return this.orientation === "horizontal";
  }
  /**
   * Specifies the orientation of the Card action buttons.
   *
   * @default 'horizontal'
   */
  orientation = "horizontal";
  /**
   * Specifies the layout of the Card action buttons.
   *
   * @default 'start'
   */
  layout = "start";
  /**
   * Defines the Card actions declaratively.
   * You can pass an array of `CardAction` objects or a `TemplateRef`.
   */
  set actions(value) {
    if (Array.isArray(value)) {
      this.actionsArray = value;
    } else if (value instanceof TemplateRef) {
      this.actionsTemplate = value;
    }
  }
  /**
   * Fires when you click an action button.
   */
  action = new EventEmitter();
  /**
   * @hidden
   */
  actionsArray;
  /**
   * @hidden
   */
  actionsTemplate;
  /**
   * @hidden
   */
  onClick(action) {
    this.action.emit(action);
  }
  static ɵfac = function CardActionsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CardActionsComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _CardActionsComponent,
    selectors: [["kendo-card-actions"]],
    hostVars: 16,
    hostBindings: function CardActionsComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("k-actions", ctx.hostClass)("k-card-actions", ctx.hostClass)("k-actions-stretched", ctx.stretchedClass)("k-actions-start", ctx.startClass)("k-actions-end", ctx.endClass)("k-actions-center", ctx.centerClass)("k-actions-vertical", ctx.verticalClass)("k-actions-horizontal", ctx.horizontalClass);
      }
    },
    inputs: {
      orientation: "orientation",
      layout: "layout",
      actions: "actions"
    },
    outputs: {
      action: "action"
    },
    standalone: true,
    features: [ɵɵStandaloneFeature],
    ngContentSelectors: _c8,
    decls: 3,
    vars: 3,
    consts: [[3, "ngTemplateOutlet"], ["type", "button", 1, "k-button", "k-button-md", "k-rounded-md", 3, "k-button-solid", "k-button-flat", "k-button-solid-base", "k-button-solid-primary", "k-button-flat-base", "k-button-flat-primary"], ["type", "button", 1, "k-button", "k-button-md", "k-rounded-md", 3, "click"], [1, "k-button-text"]],
    template: function CardActionsComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵtemplate(0, CardActionsComponent_Conditional_0_Template, 1, 0)(1, CardActionsComponent_Conditional_1_Template, 2, 0)(2, CardActionsComponent_Conditional_2_Template, 1, 1, null, 0);
      }
      if (rf & 2) {
        ɵɵconditional(!ctx.actionsArray && !ctx.actionsTemplate ? 0 : -1);
        ɵɵadvance();
        ɵɵconditional(ctx.actionsArray ? 1 : -1);
        ɵɵadvance();
        ɵɵconditional(ctx.actionsTemplate ? 2 : -1);
      }
    },
    dependencies: [NgTemplateOutlet],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardActionsComponent, [{
    type: Component,
    args: [{
      selector: "kendo-card-actions",
      template: `
        @if (!actionsArray && !actionsTemplate) {
          <ng-content></ng-content>
        }
        
        @if (actionsArray) {
          @for (action of actionsArray; track action) {
            <button
              type="button"
              class="k-button k-button-md k-rounded-md"
              [class.k-button-solid]="!action.flat"
              [class.k-button-flat]="action.flat"
              [class.k-button-solid-base]="!action.primary && !action.flat"
              [class.k-button-solid-primary]="action.primary && !action.flat"
              [class.k-button-flat-base]="!action.primary && action.flat"
              [class.k-button-flat-primary]="action.primary && action.flat"
              (click)="onClick(action)"
              >
              <span class="k-button-text">{{ action.text }}</span>
            </button>
          }
        }
        
        @if (actionsTemplate) {
          <ng-template [ngTemplateOutlet]="actionsTemplate"></ng-template>
        }
        `,
      standalone: true,
      imports: [NgTemplateOutlet]
    }]
  }], null, {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-actions"]
    }, {
      type: HostBinding,
      args: ["class.k-card-actions"]
    }],
    stretchedClass: [{
      type: HostBinding,
      args: ["class.k-actions-stretched"]
    }],
    startClass: [{
      type: HostBinding,
      args: ["class.k-actions-start"]
    }],
    endClass: [{
      type: HostBinding,
      args: ["class.k-actions-end"]
    }],
    centerClass: [{
      type: HostBinding,
      args: ["class.k-actions-center"]
    }],
    verticalClass: [{
      type: HostBinding,
      args: ["class.k-actions-vertical"]
    }],
    horizontalClass: [{
      type: HostBinding,
      args: ["class.k-actions-horizontal"]
    }],
    orientation: [{
      type: Input
    }],
    layout: [{
      type: Input
    }],
    actions: [{
      type: Input
    }],
    action: [{
      type: Output
    }]
  });
})();
var CardSeparatorDirective = class _CardSeparatorDirective {
  hostClass = true;
  get verticalClass() {
    return this.orientation === "vertical";
  }
  get horizontalClass() {
    return this.orientation === "horizontal";
  }
  /**
   * Sets the color of the Card separator.
   */
  color;
  /**
   * Specifies the orientation of the Card separator.
   *
   * @default 'horizontal'
   */
  orientation = "horizontal";
  static ɵfac = function CardSeparatorDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CardSeparatorDirective)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _CardSeparatorDirective,
    selectors: [["", "kendoCardSeparator", ""]],
    hostVars: 8,
    hostBindings: function CardSeparatorDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵstyleProp("color", ctx.color);
        ɵɵclassProp("k-card-separator", ctx.hostClass)("k-separator-vertical", ctx.verticalClass)("k-separator-horizontal", ctx.horizontalClass);
      }
    },
    inputs: {
      color: "color",
      orientation: "orientation"
    },
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardSeparatorDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoCardSeparator]",
      standalone: true
    }]
  }], null, {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-card-separator"]
    }],
    verticalClass: [{
      type: HostBinding,
      args: ["class.k-separator-vertical"]
    }],
    horizontalClass: [{
      type: HostBinding,
      args: ["class.k-separator-horizontal"]
    }],
    color: [{
      type: HostBinding,
      args: ["style.color"]
    }, {
      type: Input
    }],
    orientation: [{
      type: Input
    }]
  });
})();
var CardTitleDirective = class _CardTitleDirective {
  hostClass = true;
  static ɵfac = function CardTitleDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CardTitleDirective)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _CardTitleDirective,
    selectors: [["", "kendoCardTitle", ""]],
    hostVars: 2,
    hostBindings: function CardTitleDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("k-card-title", ctx.hostClass);
      }
    },
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardTitleDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoCardTitle]",
      standalone: true
    }]
  }], null, {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-card-title"]
    }]
  });
})();
var CardSubtitleDirective = class _CardSubtitleDirective {
  hostClass = true;
  static ɵfac = function CardSubtitleDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CardSubtitleDirective)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _CardSubtitleDirective,
    selectors: [["", "kendoCardSubtitle", ""]],
    hostVars: 2,
    hostBindings: function CardSubtitleDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("k-card-subtitle", ctx.hostClass);
      }
    },
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardSubtitleDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoCardSubtitle]",
      standalone: true
    }]
  }], null, {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-card-subtitle"]
    }]
  });
})();
var CardMediaDirective = class _CardMediaDirective {
  hostClass = true;
  static ɵfac = function CardMediaDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CardMediaDirective)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _CardMediaDirective,
    selectors: [["", "kendoCardMedia", ""]],
    hostVars: 2,
    hostBindings: function CardMediaDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("k-card-media", ctx.hostClass);
      }
    },
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardMediaDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoCardMedia]",
      standalone: true
    }]
  }], null, {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-card-media"]
    }]
  });
})();
var CardAction = class {
  /**
   * Specifies whether the action button uses primary styling.
   */
  primary;
  /**
   * Specifies whether the action button uses flat styling.
   */
  flat;
  /**
   * Defines the text of the action button.
   */
  text;
};
var ExpansionPanelTitleDirective = class _ExpansionPanelTitleDirective {
  templateRef;
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static ɵfac = function ExpansionPanelTitleDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExpansionPanelTitleDirective)(ɵɵdirectiveInject(TemplateRef, 8));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _ExpansionPanelTitleDirective,
    selectors: [["", "kendoExpansionPanelTitleDirective", ""]],
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExpansionPanelTitleDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoExpansionPanelTitleDirective]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
function expand(duration, height) {
  return [style({
    overflow: "hidden",
    display: "block",
    height: 0
  }), animate(`${duration}ms ease-in`, style({
    height: `${height}`
  }))];
}
function collapse(duration, height) {
  return [style({
    overflow: "hidden",
    height: `${height}`
  }), animate(`${duration}ms ease-in`, style({
    overflow: "hidden",
    height: 0
  }))];
}
var ExpansionPanelActionEvent = class extends PreventableEvent {
  /**
   * Defines the action that takes place upon interaction with the ExpansionPanel.
   */
  action;
  /**
   * @hidden
   */
  constructor(args) {
    super();
    Object.assign(this, args);
  }
};
var DEFAULT_DURATION = 200;
var CONTENT_HIDDEN_CLASS = "k-hidden";
var incrementingId = 0;
var ExpansionPanelComponent = class _ExpansionPanelComponent {
  renderer;
  hostElement;
  ngZone;
  localizationService;
  builder;
  /**
   * Specifies the primary text in the header of the ExpansionPanel
   * ([see example](slug:title_expansionpanel#toc-titles-and-subtitles)).
   */
  title = "";
  /**
   * Specifies the secondary text in the header of the ExpansionPanel, which renders next to the collapse/expand icon
   * ([see example](slug:title_expansionpanel#toc-titles-and-subtitles)).
   */
  subtitle = "";
  /**
   * Specifies whether the ExpansionPanel is disabled. If disabled, the ExpansionPanel can be neither expanded nor collapsed
   * ([see example]({% slug disabled_expansionpanel %})).
   *
   * @default false
   */
  disabled = false;
  /**
   * Specifies whether the ExpansionPanel is expanded. The property supports two-way binding
   * ([see example]({% slug interaction_expansionpanel %}#toc-setting-the-initial-state)).
   *
   * @default false
   */
  set expanded(value) {
    if (value === this.expanded) {
      return;
    }
    this._expanded = value;
    if (this.expanded) {
      this.removeContentHiddenClass();
    } else {
      this.addContentHiddenClass();
    }
  }
  get expanded() {
    return this._expanded;
  }
  /**
   * Defines an SVG icon for the expanded state of the component.
   * You can use either an [existing Kendo SVG icon](slug:svgicon_list) or a custom one.
   */
  set svgExpandIcon(icon) {
    if (isDevMode() && icon && this.expandIcon) {
      throw new Error("Setting both expandIcon/svgExpandIcon options at the same time is not supported.");
    }
    this._svgExpandIcon = icon;
  }
  get svgExpandIcon() {
    return this._svgExpandIcon;
  }
  /**
   * Defines an SVG icon for the collapsed state of the component.
   * You can use either an [existing Kendo SVG icon](slug:svgicon_list) or a custom one.
   */
  set svgCollapseIcon(icon) {
    if (isDevMode() && icon && this.collapseIcon) {
      throw new Error("Setting both collapseIcon/svgCollapseIcon options at the same time is not supported.");
    }
    this._svgCollapseIcon = icon;
  }
  get svgCollapseIcon() {
    return this._svgCollapseIcon;
  }
  /**
   * Sets a custom icon via CSS class(es) for the collapsed state of the component
   * ([see example]({% slug icons_expansionpanel %}#toc-icons)).
   */
  expandIcon;
  /**
   * Sets a custom icon via CSS class(es) for the expanded state of the component
   * ([see example]({% slug icons_expansionpanel %}#toc-icons)).
   */
  collapseIcon;
  /**
   * Specifies the animation settings of the ExpansionPanel
   * ([see example]({% slug animations_expansionpanel %})).
   *
   * @default true
   */
  animation = true;
  /**
   * Fires when the `expanded` property of the component is updated.
   * Used to provide a two-way binding for the `expanded` property
   * ([see example](slug:events_expansionpanel)).
   */
  expandedChange = new EventEmitter();
  /**
   * Fires when the expanded state of the ExpansionPanel is about to change. This event is preventable
   * ([see example](slug:events_expansionpanel)).
   */
  action = new EventEmitter();
  /**
   * Fires when the ExpansionPanel is expanded. If there is animation it fires when the animation is complete
   * ([see example](slug:events_expansionpanel)).
   */
  expand = new EventEmitter();
  /**
   * Fires when the ExpansionPanel is collapsed. If there is animation it fires when the animation is complete
   * ([see example](slug:events_expansionpanel)).
   */
  collapse = new EventEmitter();
  /**
   * @hidden
   */
  titleTemplate;
  content;
  header;
  hostClass = true;
  get expandedClass() {
    return this.expanded && !this.disabled;
  }
  direction;
  /**
   * @hidden
   */
  focused = false;
  animationEnd = new EventEmitter();
  subscriptions = new Subscription();
  _expanded = false;
  _svgExpandIcon = chevronDownIcon;
  _svgCollapseIcon = chevronUpIcon;
  nextId = incrementingId++;
  constructor(renderer, hostElement, ngZone, localizationService, builder) {
    this.renderer = renderer;
    this.hostElement = hostElement;
    this.ngZone = ngZone;
    this.localizationService = localizationService;
    this.builder = builder;
    A(packageMetadata);
    this.direction = localizationService.rtl ? "rtl" : "ltr";
  }
  ngOnInit() {
    this.renderer.removeAttribute(this.hostElement.nativeElement, "title");
    this.subscriptions = this.localizationService.changes.subscribe(({
      rtl
    }) => {
      this.direction = rtl ? "rtl" : "ltr";
    });
    const elem = this.hostElement.nativeElement;
    const header = this.header.nativeElement;
    this.subscriptions.add(this.renderer.listen(header, "focus", () => this.focusExpansionPanel(elem)));
    this.subscriptions.add(this.renderer.listen(header, "blur", () => this.blurExpansionPanel(elem)));
  }
  ngAfterViewInit() {
    this.initDomEvents();
    if (!this.expanded) {
      this.renderer.addClass(this.content.nativeElement, CONTENT_HIDDEN_CLASS);
    }
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  /**
   * @hidden
   */
  initDomEvents() {
    if (!this.hostElement) {
      return;
    }
    this.ngZone.runOutsideAngular(() => {
      const elem = this.hostElement.nativeElement;
      this.subscriptions.add(this.renderer.listen(elem, "keydown", this.keyDownHandler.bind(this)));
    });
  }
  /**
   * @hidden
   */
  keyDownHandler(ev) {
    const isEnterOrSpace = ev.code === Keys.Enter || ev.code === Keys.NumpadEnter || ev.code === Keys.Space;
    if (this.disabled || !isEnterOrSpace) {
      return;
    }
    if (hasClass(ev.target, "k-expander-header")) {
      ev.preventDefault();
      this.ngZone.run(() => {
        this.onHeaderAction();
      });
    }
  }
  /**
   * @hidden
   */
  onHeaderClick(ev) {
    const header = this.header.nativeElement;
    if (!isFocusable(ev.target) || ev.target === header && !this.disabled) {
      this.onHeaderAction();
    }
  }
  /**
   * @hidden
   */
  onHeaderAction() {
    const eventArgs = new ExpansionPanelActionEvent();
    eventArgs.action = this.expanded ? "collapse" : "expand";
    this.action.emit(eventArgs);
    if (!eventArgs.isDefaultPrevented()) {
      this.setExpanded(!this.expanded);
      if (this.expanded) {
        this.removeContentHiddenClass();
      }
      if (this.animation) {
        this.animateContent();
        return;
      }
      if (!this.expanded) {
        this.addContentHiddenClass();
      }
      this.emitExpandCollapseEvent();
    }
  }
  /**
   * @hidden
   */
  get contentWrapperId() {
    return `k-expansion-panel-content-wrapper-${this.nextId}`;
  }
  /**
   * @hidden
   */
  get expanderIndicatorClasses() {
    if (this.expanded) {
      return !this.collapseIcon ? `chevron-up` : "";
    } else {
      return !this.expandIcon ? `chevron-down` : "";
    }
  }
  /**
   * @hidden
   */
  get customExpanderIndicatorClasses() {
    if (this.expanded) {
      return this.collapseIcon ? this.collapseIcon : "";
    } else {
      return this.expandIcon ? this.expandIcon : "";
    }
  }
  /**
   * @hidden
   */
  get expanderSvgIcon() {
    return this.expanded ? this.svgCollapseIcon : this.svgExpandIcon;
  }
  /**
   * Toggles the visibility of the ExpansionPanel
   * ([see example](slug:interaction_expansionpanel#toggling-between-states)).
   *
   * @param expanded Specifies whether the ExpansionPanel will be expanded or collapsed.
   */
  toggle(expanded) {
    const previous = this.expanded;
    const current = isPresent2(expanded) ? expanded : !previous;
    if (current === previous) {
      return;
    }
    this.setExpanded(current);
    if (this.expanded) {
      this.removeContentHiddenClass();
    }
    if (this.animation) {
      this.animateContent();
      return;
    }
    if (!this.expanded) {
      this.addContentHiddenClass();
    }
    this.emitExpandCollapseEvent();
  }
  focusExpansionPanel(el) {
    if (!this.focused) {
      this.focused = true;
      this.renderer.addClass(el, "k-focus");
    }
  }
  blurExpansionPanel(el) {
    if (this.focused) {
      this.focused = false;
      this.renderer.removeClass(el, "k-focus");
    }
  }
  setExpanded(value) {
    this._expanded = value;
    this.expandedChange.emit(value);
  }
  animateContent() {
    const duration = typeof this.animation === "boolean" ? DEFAULT_DURATION : this.animation;
    const contentHeight = getComputedStyle(this.content.nativeElement).height;
    const animation = this.expanded ? expand(duration, contentHeight) : collapse(duration, contentHeight);
    const player = this.createPlayer(animation, this.content.nativeElement);
    this.animationEnd.pipe(take(1)).subscribe(() => {
      if (!this.expanded) {
        this.addContentHiddenClass();
      }
      this.emitExpandCollapseEvent();
    });
    player.play();
  }
  createPlayer(animation, animatedElement) {
    const factory = this.builder.build(animation);
    let player = factory.create(animatedElement);
    player.onDone(() => {
      if (player) {
        this.animationEnd.emit();
        player.destroy();
        player = null;
      }
    });
    return player;
  }
  emitExpandCollapseEvent() {
    this[this.expanded ? "expand" : "collapse"].emit();
  }
  addContentHiddenClass() {
    this.renderer.addClass(this.content.nativeElement, CONTENT_HIDDEN_CLASS);
  }
  removeContentHiddenClass() {
    this.renderer.removeClass(this.content.nativeElement, CONTENT_HIDDEN_CLASS);
  }
  static ɵfac = function ExpansionPanelComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExpansionPanelComponent)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(AnimationBuilder));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _ExpansionPanelComponent,
    selectors: [["kendo-expansionpanel"]],
    contentQueries: function ExpansionPanelComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, ExpansionPanelTitleDirective, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.titleTemplate = _t.first);
      }
    },
    viewQuery: function ExpansionPanelComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c28, 7);
        ɵɵviewQuery(_c0, 7);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.content = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.header = _t.first);
      }
    },
    hostVars: 5,
    hostBindings: function ExpansionPanelComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("dir", ctx.direction);
        ɵɵclassProp("k-expander", ctx.hostClass)("k-expanded", ctx.expandedClass);
      }
    },
    inputs: {
      title: "title",
      subtitle: "subtitle",
      disabled: "disabled",
      expanded: "expanded",
      svgExpandIcon: "svgExpandIcon",
      svgCollapseIcon: "svgCollapseIcon",
      expandIcon: "expandIcon",
      collapseIcon: "collapseIcon",
      animation: "animation"
    },
    outputs: {
      expandedChange: "expandedChange",
      action: "action",
      expand: "expand",
      collapse: "collapse"
    },
    exportAs: ["kendoExpansionPanel"],
    standalone: true,
    features: [ɵɵProvidersFeature([LocalizationService, {
      provide: L10N_PREFIX,
      useValue: "kendo.expansionpanel"
    }]), ɵɵStandaloneFeature],
    ngContentSelectors: _c8,
    decls: 10,
    vars: 14,
    consts: [["header", ""], ["content", ""], ["role", "button", "tabindex", "0", 3, "click"], [3, "ngTemplateOutlet"], [1, "k-expander-indicator"], [3, "name", "customFontClass", "svgIcon"], [1, "k-expander-content-wrapper", 3, "id"], [1, "k-expander-content"], [1, "k-expander-title"], [1, "k-spacer"], [1, "k-expander-sub-title"]],
    template: function ExpansionPanelComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵprojectionDef();
        ɵɵelementStart(0, "div", 2, 0);
        ɵɵlistener("click", function ExpansionPanelComponent_Template_div_click_0_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onHeaderClick($event));
        });
        ɵɵtemplate(2, ExpansionPanelComponent_Conditional_2_Template, 3, 2)(3, ExpansionPanelComponent_Conditional_3_Template, 1, 1, null, 3);
        ɵɵelementStart(4, "span", 4);
        ɵɵelement(5, "kendo-icon-wrapper", 5);
        ɵɵelementEnd()();
        ɵɵelementStart(6, "div", 6, 1)(8, "div", 7);
        ɵɵprojection(9);
        ɵɵelementEnd()();
      }
      if (rf & 2) {
        ɵɵclassProp("k-expander-header", true)("k-disabled", ctx.disabled);
        ɵɵattribute("aria-disabled", ctx.disabled)("aria-expanded", ctx.expanded && !ctx.disabled)("aria-controls", ctx.contentWrapperId);
        ɵɵadvance(2);
        ɵɵconditional(!ctx.titleTemplate ? 2 : -1);
        ɵɵadvance();
        ɵɵconditional(ctx.titleTemplate ? 3 : -1);
        ɵɵadvance(2);
        ɵɵproperty("name", ctx.expanderIndicatorClasses)("customFontClass", ctx.customExpanderIndicatorClasses)("svgIcon", ctx.expanderSvgIcon);
        ɵɵadvance();
        ɵɵproperty("id", ctx.contentWrapperId);
        ɵɵadvance(2);
        ɵɵattribute("aria-hidden", !ctx.expanded);
      }
    },
    dependencies: [NgTemplateOutlet, IconWrapperComponent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExpansionPanelComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoExpansionPanel",
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.expansionpanel"
      }],
      selector: "kendo-expansionpanel",
      template: `
        <div
          #header
          [class.k-expander-header]="true"
          [class.k-disabled]="disabled"
          [attr.aria-disabled]="disabled"
          [attr.aria-expanded]="expanded && !disabled"
          role="button"
          tabindex="0"
          [attr.aria-controls]="contentWrapperId"
          (click)="onHeaderClick($event)"
          >
          @if (!titleTemplate) {
            @if (title) {
              <div class="k-expander-title">{{ title }}</div>
            }
            <span class="k-spacer"></span>
            @if (subtitle) {
              <div class="k-expander-sub-title">
                {{ subtitle }}
              </div>
            }
          }
          @if (titleTemplate) {
            <ng-template
              [ngTemplateOutlet]="titleTemplate?.templateRef">
            </ng-template>
          }
          <span class="k-expander-indicator">
            <kendo-icon-wrapper
              [name]="expanderIndicatorClasses"
              [customFontClass]="customExpanderIndicatorClasses"
              [svgIcon]="expanderSvgIcon"
              >
            </kendo-icon-wrapper>
          </span>
        </div>
        <div #content [id]="contentWrapperId" class="k-expander-content-wrapper">
          <div class="k-expander-content" [attr.aria-hidden]="!expanded">
            <ng-content></ng-content>
          </div>
        </div>
        `,
      standalone: true,
      imports: [NgTemplateOutlet, IconWrapperComponent]
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }, {
    type: LocalizationService
  }, {
    type: AnimationBuilder
  }], {
    title: [{
      type: Input
    }],
    subtitle: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    expanded: [{
      type: Input
    }],
    svgExpandIcon: [{
      type: Input
    }],
    svgCollapseIcon: [{
      type: Input
    }],
    expandIcon: [{
      type: Input
    }],
    collapseIcon: [{
      type: Input
    }],
    animation: [{
      type: Input
    }],
    expandedChange: [{
      type: Output
    }],
    action: [{
      type: Output
    }],
    expand: [{
      type: Output
    }],
    collapse: [{
      type: Output
    }],
    titleTemplate: [{
      type: ContentChild,
      args: [ExpansionPanelTitleDirective, {
        static: false
      }]
    }],
    content: [{
      type: ViewChild,
      args: ["content", {
        static: true
      }]
    }],
    header: [{
      type: ViewChild,
      args: ["header", {
        static: true
      }]
    }],
    hostClass: [{
      type: HostBinding,
      args: ["class.k-expander"]
    }],
    expandedClass: [{
      type: HostBinding,
      args: ["class.k-expanded"]
    }],
    direction: [{
      type: HostBinding,
      args: ["attr.dir"]
    }]
  });
})();
var idx = 0;
var getId = (prefix) => {
  return `${prefix}-${++idx}`;
};
var normalizeValue = (value, max = Infinity) => {
  const normalizedValue = isPresent2(value) ? Math.min(Math.max(+value, 1), max) : value;
  return normalizedValue;
};
var isRowItemPresent = (items) => {
  return items.some((item) => isPresent2(item.row));
};
var propsChanged = (initialProps, newProps) => {
  for (let i = 0; i < initialProps.length; i++) {
    if (initialProps[i] !== newProps[i]) {
      return true;
    }
  }
  return false;
};
var getDropTarget = (event) => {
  if (!(isDocumentAvailable() && isPresent2(document.elementsFromPoint))) {
    return [event.target];
  }
  return document.elementsFromPoint(event.clientX, event.clientY).filter((item) => item.classList && (item.classList.contains("k-tilelayout-item") || item.classList.contains("k-layout-item-hint")));
};
var setElementStyles = (renderer, elem, styles) => {
  const props = Object.keys(styles);
  props.forEach((p) => {
    renderer.setStyle(elem, p, styles[p]);
  });
};
var calculateCellFromPosition = (coordinates, tileLayoutElement, gap, cellSize, columns, rtl = false) => {
  const tileLayoutRect = tileLayoutElement.getBoundingClientRect();
  const totalRows = (tileLayoutRect.height - gap.rows) / (cellSize.height + gap.rows);
  const distanceFromTop = coordinates.y - tileLayoutRect.y;
  const distanceFromLeft = coordinates.x - tileLayoutRect.x;
  const distanceFromRight = tileLayoutRect.right - coordinates.x;
  const distanceToCellWidthRatio = Math.floor((rtl ? distanceFromRight : distanceFromLeft) / (gap.columns + cellSize.width));
  const cappedColumnPosition = Math.min(distanceToCellWidthRatio + 1, columns);
  const distanceToCellHeightRatio = Math.floor(distanceFromTop / (gap.rows + cellSize.height));
  const cappedRowPosition = Math.min(distanceToCellHeightRatio + 1, totalRows);
  const col = Math.max(cappedColumnPosition, 0);
  const row = Math.max(cappedRowPosition, 0);
  return {
    row,
    col
  };
};
var shouldResize = (keyCode, col, selectedTile, settings) => {
  const resizeRight = keyCode === Keys.ArrowRight && col + selectedTile.colSpan <= settings.columns;
  const resizeLeft = keyCode === Keys.ArrowLeft && selectedTile.colSpan > 1;
  const resizeDown = keyCode === Keys.ArrowDown;
  const resizeUp = keyCode === Keys.ArrowUp && selectedTile.rowSpan > 1;
  return {
    resizeRight,
    resizeLeft,
    resizeDown,
    resizeUp
  };
};
var shouldReorder = (keyCode, col, selectedTile, settings) => {
  let reorderRight;
  let reorderLeft;
  if (selectedTile.col) {
    reorderRight = keyCode === Keys.ArrowRight && selectedTile.colSpan + col <= settings.columns;
    reorderLeft = keyCode === Keys.ArrowLeft && col > 1;
  } else {
    reorderRight = keyCode === Keys.ArrowRight && selectedTile.colSpan + selectedTile.order < settings.items.length;
    reorderLeft = keyCode === Keys.ArrowLeft && selectedTile.order > 0;
  }
  return {
    reorderLeft,
    reorderRight
  };
};
var getCurrentCol = (selectedTile, settings, rtl) => {
  const rects = selectedTile.elem.nativeElement.getBoundingClientRect();
  const targetSize = {
    rowSpan: selectedTile.rowSpan,
    colSpan: selectedTile.colSpan
  };
  const width = (rects.width - (targetSize.colSpan - 1) * settings.gap.columns) / targetSize.colSpan;
  const height = (rects.height - (targetSize.rowSpan - 1) * settings.gap.rows) / targetSize.rowSpan;
  const {
    col
  } = calculateCellFromPosition({
    x: rects.x,
    y: rects.y
  }, settings.tileLayoutElement, settings.gap, {
    width,
    height
  }, settings.columns, rtl);
  return col;
};
var RESIZE_HANDLE_UNIDIRECTIONAL_SIZE = 9;
var RESIZE_HANDLE_BIDIRECTIONAL_SIZE = 25;
var RESIZE_HANDLE_UNIDIRECTIONAL_OVERLAP = 5;
var RESIZE_HANDLE_BIDIRECTIONAL_OVERLAP = 18;
var DRAGGED_ZINDEX = 10;
var RESIZE_DIRECTIONS = ["ew", "ns", "nwse"];
var RTL_RESIZE_DIRECTIONS = ["ew", "ns", "nesw"];
var RESIZE_HANDLE_DIMENSIONS = {
  // numeric values represent pixels
  ew: {
    width: RESIZE_HANDLE_UNIDIRECTIONAL_SIZE,
    overlapX: RESIZE_HANDLE_UNIDIRECTIONAL_OVERLAP
  },
  ns: {
    height: RESIZE_HANDLE_UNIDIRECTIONAL_SIZE,
    overlapY: RESIZE_HANDLE_UNIDIRECTIONAL_OVERLAP
  },
  nwse: {
    width: RESIZE_HANDLE_BIDIRECTIONAL_SIZE,
    height: RESIZE_HANDLE_BIDIRECTIONAL_SIZE,
    overlapX: RESIZE_HANDLE_BIDIRECTIONAL_OVERLAP,
    overlapY: RESIZE_HANDLE_BIDIRECTIONAL_OVERLAP
  },
  nesw: {
    width: RESIZE_HANDLE_BIDIRECTIONAL_SIZE,
    height: RESIZE_HANDLE_BIDIRECTIONAL_SIZE,
    overlapX: RESIZE_HANDLE_BIDIRECTIONAL_OVERLAP,
    overlapY: RESIZE_HANDLE_BIDIRECTIONAL_OVERLAP
  }
};
var OVERLAP_THRESHOLD = 0.3;
var REVERSE_OVERLAP_THRESHOLD = -0.7;
var HINT_BORDERS_HEIGHT = 2;
var TileLayoutReorderEvent = class extends PreventableEvent {
  item;
  items;
  newIndex;
  oldIndex;
  newCol;
  oldCol;
  newRow;
  oldRow;
  /**
   * Constructs the event arguments for the `reorder` event.
   * @param item - The TileLayoutItem being reordered.
   * @param items - The TileLayoutItem collection that holds the currently rendered items and their internal state.
   * @param newIndex - The new order index of the reordered item used to determine its positioning relative to the other items.
   * @param oldIndex - The initial order index of the reordered item used to determine its positioning relative to the other items.
   * @param newCol - The new start column of the reordered item.
   * @param oldCol - The initial start column of the reordered item.
   * @param newRow - The new start row of the reordered item.
   * @param oldRow - The initial start row of the reordered item.
   * @hidden
   */
  constructor(item, items, newIndex, oldIndex, newCol, oldCol, newRow, oldRow) {
    super();
    this.item = item;
    this.items = items;
    this.newIndex = newIndex;
    this.oldIndex = oldIndex;
    this.newCol = newCol;
    this.oldCol = oldCol;
    this.newRow = newRow;
    this.oldRow = oldRow;
  }
};
var TileLayoutResizeEvent = class extends PreventableEvent {
  item;
  items;
  newRowSpan;
  oldRowSpan;
  newColSpan;
  oldColSpan;
  /**
   * Constructs the event arguments for the `resize` event.
   * @param item - The TileLayoutItem being resized
   * @param items - The TileLayoutItem collection
   * @param newRowSpan - The new rowSpan of the resized item
   * @param oldRowSpan - The initial rowSpan of the resized item
   * @param newColSpan - The new colSpan of the resized item
   * @param oldColSpan - The initial colSpan of the resized item
   * @hidden
   */
  constructor(item, items, newRowSpan, oldRowSpan, newColSpan, oldColSpan) {
    super();
    this.item = item;
    this.items = items;
    this.newRowSpan = newRowSpan;
    this.oldRowSpan = oldRowSpan;
    this.newColSpan = newColSpan;
    this.oldColSpan = oldColSpan;
  }
};
var TileLayoutDraggingService = class _TileLayoutDraggingService {
  zone;
  renderer;
  cdr;
  localization;
  reorderable = new BehaviorSubject(null);
  resizable = new BehaviorSubject(null);
  reorder = new Subject();
  resize = new Subject();
  tileLayoutSettings;
  get colStart() {
    return this.currentColStart;
  }
  get rowStart() {
    return this.currentRowStart;
  }
  get itemWrapper() {
    return this.draggedItemWrapper;
  }
  get order() {
    return this.targetOrder;
  }
  draggedItem;
  draggedItemWrapper;
  reordering;
  resizing;
  offset;
  targetSize;
  cellSize;
  targetOrder;
  currentColStart;
  currentRowStart;
  startingPoint;
  currentResizingColSpan;
  currentResizingRowSpan;
  direction;
  lastDragCursorOffset = {
    x: 0,
    y: 0
  };
  localizationSubscription;
  rtl;
  constructor(zone, renderer, cdr, localization) {
    this.zone = zone;
    this.renderer = renderer;
    this.cdr = cdr;
    this.localization = localization;
    this.localizationSubscription = this.localization.changes.subscribe(({
      rtl
    }) => this.rtl = rtl);
  }
  ngOnDestroy() {
    this.localizationSubscription.unsubscribe();
  }
  handlePress(originalEvent) {
    const resizing = !!originalEvent.target.classList.contains("k-resize-handle");
    const closestTile = closestInScope(originalEvent.target, (el) => el.classList.contains("k-tilelayout-item"), this.tileLayoutSettings.tileLayoutElement);
    const closestHeader = closestInScope(originalEvent.target, (el) => el.classList.contains("k-tilelayout-item-header"), this.tileLayoutSettings.tileLayoutElement);
    if (!closestTile) {
      return;
    }
    this.zone.run(() => {
      this.draggedItemWrapper = closestTile;
      this.draggedItem = this.tileLayoutSettings.items.find((item) => item.order === +closestTile.style.order);
    });
    const reordering = !resizing && this.reorderable.getValue() && this.draggedItem.reorderable && closestHeader;
    const focusableTarget = isFocusable(originalEvent.target);
    if (!(reordering || resizing) || focusableTarget) {
      return;
    } else {
      originalEvent.preventDefault();
    }
    this.zone.run(() => {
      this.reordering = reordering;
      this.resizing = resizing;
    });
    const tileRect = this.draggedItemWrapper.getBoundingClientRect();
    this.zone.run(() => {
      this.offset = {
        top: originalEvent.clientY - tileRect.top,
        left: originalEvent.clientX - tileRect.left,
        x: tileRect.x,
        y: tileRect.y,
        width: tileRect.width,
        height: tileRect.height
      };
      this.targetSize = {
        rowSpan: this.draggedItem.rowSpan,
        colSpan: this.draggedItem.colSpan
      };
      this.cellSize = {
        width: (tileRect.width - (this.targetSize.colSpan - 1) * this.tileLayoutSettings.gap.columns) / this.targetSize.colSpan,
        height: (tileRect.height - (this.targetSize.rowSpan - 1) * this.tileLayoutSettings.gap.rows) / this.targetSize.rowSpan
      };
      this.lastDragCursorOffset = {
        x: originalEvent.clientX,
        y: originalEvent.clientY
      };
    });
    setElementStyles(this.renderer, this.draggedItemWrapper, {
      left: tileRect.left + window.pageXOffset - window.scrollX + "px",
      top: tileRect.top + window.pageYOffset - window.scrollY + "px",
      width: tileRect.width + "px",
      height: tileRect.height + "px",
      zIndex: DRAGGED_ZINDEX
    });
    setElementStyles(this.renderer, this.tileLayoutSettings.hintElement, {
      display: "flex",
      height: tileRect.height - HINT_BORDERS_HEIGHT + "px"
    });
    this.zone.run(() => this.targetOrder = this.draggedItem.order);
    this.cdr.markForCheck();
    setElementStyles(this.renderer, this.draggedItemWrapper, {
      position: "fixed"
    });
    if (this.reorderable.getValue() && !resizing) {
      this.zone.run(() => {
        this.currentColStart = this.draggedItem.colStart;
        this.currentRowStart = this.draggedItem.rowStart;
      });
      this.cdr.markForCheck();
    } else if (this.resizable && resizing) {
      this.zone.run(() => {
        this.startingPoint = {
          top: originalEvent.clientY,
          left: originalEvent.clientX
        };
        this.currentResizingColSpan = this.draggedItem.colSpan;
        this.currentResizingRowSpan = this.draggedItem.rowSpan;
        if (this.draggedItem.col) {
          this.currentColStart = this.draggedItem.col.toString();
        }
        if (this.draggedItem.row) {
          this.currentRowStart = this.draggedItem.row.toString();
        }
        this.direction = originalEvent.target.classList[1];
      });
    }
  }
  handleDrag(originalEvent) {
    if (this.draggedItemWrapper) {
      if (this.reordering) {
        this.reorderItems(originalEvent);
      } else if (this.resizing) {
        this.resizeItem(originalEvent);
      }
      this.lastDragCursorOffset = {
        x: originalEvent.clientX,
        y: originalEvent.clientY
      };
    }
  }
  handleRelease(originalEvent) {
    originalEvent.preventDefault();
    if (this.reordering) {
      const initialOrder = this.draggedItem.order;
      const initialCol = this.draggedItem.col;
      const initialRow = this.draggedItem.row;
      const targetCol = normalizeValue(this.currentColStart);
      const targetRow = normalizeValue(this.currentRowStart);
      if (propsChanged([this.targetOrder, targetCol, targetRow], [initialOrder, initialCol, initialRow])) {
        const reorderEvent = new TileLayoutReorderEvent(this.draggedItem, this.tileLayoutSettings.items, this.targetOrder, initialOrder, targetCol, initialCol, targetRow, initialRow);
        this.reorder.next(reorderEvent);
        if (!reorderEvent.isDefaultPrevented()) {
          if (this.targetOrder > initialOrder) {
            this.zone.run(() => {
              for (let i = initialOrder + 1; i <= this.targetOrder; i++) {
                const item = this.tileLayoutSettings.items.find((item2) => item2.order === i);
                item && (item.order = i - 1);
              }
            });
          } else {
            this.zone.run(() => {
              for (let i = initialOrder - 1; i >= this.targetOrder; i--) {
                const item = this.tileLayoutSettings.items.find((item2) => item2.order === i);
                item && (item.order = i + 1);
              }
            });
          }
          this.draggedItem.order = this.targetOrder;
          if (this.draggedItem.col) {
            this.draggedItem.col = +this.currentColStart;
          }
          if (this.draggedItem.row) {
            this.draggedItem.row = +this.currentRowStart;
          }
        }
      }
      this.tileLayoutSettings.tileLayoutElement.appendChild(this.tileLayoutSettings.hintElement);
      this.cdr.markForCheck();
      this.zone.run(() => this.cleanUp());
    } else if (!this.reordering && this.resizing) {
      const initialRowSpan = this.draggedItem.rowSpan;
      const initialColSpan = this.draggedItem.colSpan;
      const {
        targetColSpan,
        targetRowSpan
      } = isRowItemPresent(this.tileLayoutSettings.items) ? this.targetSpan() : {
        targetColSpan: this.currentResizingColSpan,
        targetRowSpan: this.currentResizingRowSpan
      };
      if (propsChanged([initialRowSpan, initialColSpan], [targetRowSpan, targetColSpan])) {
        const resizeEvent = new TileLayoutResizeEvent(this.draggedItem, this.tileLayoutSettings.items, targetRowSpan, initialRowSpan, targetColSpan, initialColSpan);
        this.resize.next(resizeEvent);
        if (!resizeEvent.isDefaultPrevented()) {
          this.draggedItem.colSpan = this.currentResizingColSpan;
          this.draggedItem.rowSpan = this.currentResizingRowSpan;
        }
      }
      this.zone.run(() => this.cleanUp());
    }
  }
  reorderItems(event) {
    const targets = getDropTarget(event);
    const closestTile = targets.find((t) => t !== this.draggedItemWrapper);
    const tileOrder = closestTile ? +closestTile.style.order : +this.draggedItemWrapper.style.order;
    if (this.tileLayoutSettings.autoFlow !== "none") {
      const deltaX = event.clientX - this.lastDragCursorOffset.x;
      const deltaY = event.clientY - this.lastDragCursorOffset.y;
      const directionX = deltaX > 0 ? "right" : deltaX < 0 ? "left" : void 0;
      const directionY = deltaY > 0 ? "down" : deltaX < 0 ? "up" : void 0;
      const rect = this.draggedItemWrapper.getBoundingClientRect();
      const horizontalGap = this.tileLayoutSettings.gap.columns;
      const verticalGap = this.tileLayoutSettings.gap.rows;
      if (directionX && this.draggedItem.col) {
        const {
          col
        } = calculateCellFromPosition({
          x: directionX === "right" ? rect.right - horizontalGap : rect.left + horizontalGap,
          y: event.clientY
        }, this.tileLayoutSettings.tileLayoutElement, this.tileLayoutSettings.gap, this.cellSize, this.tileLayoutSettings.columns, this.rtl);
        const targetStartCol = this.getTargetCol(col, directionX);
        this.currentColStart = targetStartCol.toString();
      }
      if (directionY && this.draggedItem.row) {
        const {
          row
        } = calculateCellFromPosition({
          x: event.clientX,
          y: directionY === "down" ? rect.bottom - verticalGap : rect.top + verticalGap
        }, this.tileLayoutSettings.tileLayoutElement, this.tileLayoutSettings.gap, this.cellSize, this.tileLayoutSettings.columns, this.rtl);
        const targetStartRow = this.getTargetRow(row, directionY);
        this.currentRowStart = targetStartRow.toString();
      }
    }
    const hintBefore = tileOrder < this.targetOrder;
    const hintAfter = tileOrder > this.targetOrder;
    this.zone.run(() => this.targetOrder = tileOrder);
    if (hintBefore) {
      this.tileLayoutSettings.tileLayoutElement.insertBefore(this.tileLayoutSettings.hintElement, this.tileLayoutSettings.tileLayoutElement.firstChild);
    } else if (hintAfter) {
      this.tileLayoutSettings.tileLayoutElement.appendChild(this.tileLayoutSettings.hintElement);
    }
    setElementStyles(this.renderer, this.draggedItemWrapper, {
      top: event.pageY - this.offset.top - window.scrollY + "px",
      left: event.pageX - this.offset.left - window.scrollX + "px"
    });
    this.cdr.markForCheck();
  }
  resizeItem(event) {
    setElementStyles(this.renderer, this.tileLayoutSettings.tileLayoutElement, {
      cursor: this.direction.split("k-cursor-")[1]
    });
    const currentWidth = this.rtl ? this.offset.width + (this.offset.x - event.clientX) : this.offset.width + (event.clientX - this.startingPoint.left);
    const currentHeight = this.offset.height + (event.clientY - this.startingPoint.top);
    const hintRect = this.tileLayoutSettings.hintElement.getBoundingClientRect();
    const hintWidth = hintRect.width;
    const hintHeight = hintRect.height;
    const horizontalDragDirection = event.clientX - this.lastDragCursorOffset.x;
    const verticalDragDirection = event.clientY - this.lastDragCursorOffset.y;
    const startCol = this.draggedItem.col ? this.draggedItem.col : calculateCellFromPosition({
      x: this.rtl ? hintRect.right : hintRect.x,
      y: hintRect.y
    }, this.tileLayoutSettings.tileLayoutElement, this.tileLayoutSettings.gap, this.cellSize, this.tileLayoutSettings.columns, this.rtl).col;
    const maxWidth = (this.tileLayoutSettings.columns - startCol) * (this.cellSize.width + this.tileLayoutSettings.gap.columns) + this.cellSize.width;
    const resizeHorizontally = () => {
      setElementStyles(this.renderer, this.draggedItemWrapper, {
        width: Math.min(Math.max(currentWidth, this.cellSize.width), maxWidth) + "px"
      });
      if (this.rtl && currentWidth > this.cellSize.width) {
        const totalWidth = this.tileLayoutSettings.columns * (this.cellSize.width + this.tileLayoutSettings.gap.columns);
        const leftBoundary = this.tileLayoutSettings.tileLayoutElement.getBoundingClientRect().right - totalWidth;
        setElementStyles(this.renderer, this.draggedItemWrapper, {
          left: Math.max(event.clientX, leftBoundary) + "px"
        });
      }
      const deltaX = currentWidth - hintWidth;
      const {
        x,
        y,
        right
      } = this.draggedItem.elem.nativeElement.getBoundingClientRect();
      const {
        col
      } = calculateCellFromPosition({
        x: this.rtl ? right : x,
        y
      }, this.tileLayoutSettings.tileLayoutElement, this.tileLayoutSettings.gap, this.cellSize, this.tileLayoutSettings.columns, this.rtl);
      const resizedColSpan = col + this.currentResizingColSpan;
      const expandingCondition = this.rtl ? horizontalDragDirection < 0 : horizontalDragDirection > 0;
      const shrinkingCondition = this.rtl ? horizontalDragDirection > 0 : horizontalDragDirection < 0;
      if (deltaX > OVERLAP_THRESHOLD * this.cellSize.width && expandingCondition && resizedColSpan <= this.tileLayoutSettings.columns) {
        this.currentResizingColSpan++;
      } else if (this.currentResizingColSpan > 1 && shrinkingCondition && deltaX < REVERSE_OVERLAP_THRESHOLD * this.cellSize.width) {
        this.currentResizingColSpan--;
      }
      setElementStyles(this.renderer, this.tileLayoutSettings.hintElement, {
        gridColumnEnd: `span ${this.currentResizingColSpan}`
      });
    };
    const resizeVertically = () => {
      setElementStyles(this.renderer, this.draggedItemWrapper, {
        height: Math.max(currentHeight, this.cellSize.height) + "px"
      });
      const deltaY = currentHeight - hintHeight;
      if (deltaY > OVERLAP_THRESHOLD * this.cellSize.height && verticalDragDirection > 0) {
        this.currentResizingRowSpan++;
      } else if (this.currentResizingRowSpan > 1 && verticalDragDirection < 0 && deltaY < REVERSE_OVERLAP_THRESHOLD * this.cellSize.height) {
        this.currentResizingRowSpan--;
      }
      setElementStyles(this.renderer, this.tileLayoutSettings.hintElement, {
        gridRowEnd: `span ${this.currentResizingRowSpan}`
      });
      setElementStyles(this.renderer, this.tileLayoutSettings.hintElement, {
        height: `${this.calculateHintHeight()}px`
      });
    };
    if (this.direction.indexOf("ew") > -1) {
      resizeHorizontally();
    } else if (this.direction.indexOf("ns") > -1) {
      resizeVertically();
    } else {
      resizeHorizontally();
      resizeVertically();
    }
  }
  cleanUp() {
    this.targetOrder = this.currentResizingColSpan = this.currentColStart = this.currentResizingRowSpan = this.currentRowStart = void 0;
    this.resizing = this.reordering = false;
    this.direction = null;
    if (this.draggedItemWrapper) {
      setElementStyles(this.renderer, this.draggedItemWrapper, {
        top: "",
        left: "",
        display: "",
        width: "",
        height: "",
        zIndex: "",
        position: ""
      });
      setElementStyles(this.renderer, this.tileLayoutSettings.hintElement, {
        display: "none",
        height: "auto"
      });
      setElementStyles(this.renderer, this.tileLayoutSettings.tileLayoutElement, {
        cursor: "default"
      });
      this.draggedItemWrapper = this.offset = this.draggedItem = this.resizing = this.reordering = this.currentResizingColSpan = this.currentResizingRowSpan = this.startingPoint = void 0;
      this.lastDragCursorOffset = {
        x: 0,
        y: 0
      };
    }
  }
  targetSpan() {
    const itemRect = this.draggedItem.elem.nativeElement.getBoundingClientRect();
    const startingCell = calculateCellFromPosition({
      x: this.rtl ? itemRect.right : itemRect.x,
      y: itemRect.y
    }, this.tileLayoutSettings.tileLayoutElement, this.tileLayoutSettings.gap, this.cellSize, this.tileLayoutSettings.columns, this.rtl);
    const targetEndCell = calculateCellFromPosition({
      x: this.rtl ? itemRect.x + OVERLAP_THRESHOLD * this.cellSize.width : itemRect.right - OVERLAP_THRESHOLD * this.cellSize.width,
      y: itemRect.bottom - OVERLAP_THRESHOLD * this.cellSize.height
    }, this.tileLayoutSettings.tileLayoutElement, this.tileLayoutSettings.gap, this.cellSize, this.tileLayoutSettings.columns, this.rtl);
    return {
      targetColSpan: targetEndCell.col - startingCell.col + 1,
      targetRowSpan: targetEndCell.row - startingCell.row + 1
    };
  }
  getTargetCol(col, direction) {
    if (this.rtl) {
      return normalizeValue(direction === "left" ? col - this.draggedItem.colSpan + 1 : col, this.tileLayoutSettings.columns);
    }
    return normalizeValue(direction === "right" ? col - this.draggedItem.colSpan + 1 : col);
  }
  getTargetRow(row, direction) {
    return direction === "down" ? row - this.draggedItem.rowSpan + 1 : row;
  }
  calculateHintHeight() {
    const totalHintCellsHeight = this.currentResizingRowSpan * this.cellSize.height;
    const totalHintGapsHeight = (this.currentResizingRowSpan - 1) * this.tileLayoutSettings.gap.rows;
    const hintHeight = totalHintCellsHeight + totalHintGapsHeight - HINT_BORDERS_HEIGHT;
    return hintHeight;
  }
  static ɵfac = function TileLayoutDraggingService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TileLayoutDraggingService)(ɵɵinject(NgZone), ɵɵinject(Renderer2), ɵɵinject(ChangeDetectorRef), ɵɵinject(LocalizationService));
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _TileLayoutDraggingService,
    factory: _TileLayoutDraggingService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TileLayoutDraggingService, [{
    type: Injectable
  }], () => [{
    type: NgZone
  }, {
    type: Renderer2
  }, {
    type: ChangeDetectorRef
  }, {
    type: LocalizationService
  }], null);
})();
var TileLayoutKeyboardNavigationService = class _TileLayoutKeyboardNavigationService {
  zone;
  renderer;
  localization;
  navigable = new BehaviorSubject(true);
  owner;
  mousedown;
  localizationSubscription;
  rtl;
  lastFocused;
  constructor(zone, renderer, localization) {
    this.zone = zone;
    this.renderer = renderer;
    this.localization = localization;
    this.localizationSubscription = this.localization.changes.subscribe(({
      rtl
    }) => this.rtl = rtl);
  }
  ngOnDestroy() {
    this.localizationSubscription.unsubscribe();
  }
  onKeyDown(event, elem, focusableItems, settings) {
    const keyCode = normalizeKeys(event);
    const isTileFocused = document.activeElement === elem;
    const focusedTile = settings.items.find((item) => item.elem.nativeElement === elem);
    const col = getCurrentCol(focusedTile, settings, this.rtl);
    const isArrow = [Keys.ArrowLeft, Keys.ArrowRight, Keys.ArrowDown, Keys.ArrowUp].some((key) => key === keyCode);
    this.lastFocused = focusedTile;
    if (keyCode === Keys.Enter && isTileFocused && focusableItems.length > 0) {
      this.changeTabIndex("0", elem, focusableItems);
      focusableItems[0].focus();
    } else if (keyCode === Keys.Escape) {
      this.changeTabIndex("-1", elem, focusableItems);
      elem.focus();
    } else if (isArrow && (event.ctrlKey || event.metaKey) && isTileFocused && focusedTile.isResizable) {
      event.preventDefault();
      this.zone.run(() => {
        this.resizeItem(keyCode, focusedTile, settings, col);
      });
    } else if (isArrow && event.shiftKey && isTileFocused && focusedTile.isReorderable) {
      this.zone.run(() => {
        this.reorderItem(keyCode, focusedTile, settings, col);
      });
    } else if (keyCode === Keys.Tab) {
      if (!isTileFocused) {
        this.keepFocusWithinComponent(event, elem);
      } else {
        const dir = event.shiftKey ? -1 : 1;
        const nextFocusableTileOrder = focusedTile.order + dir;
        if (nextFocusableTileOrder < 0 || nextFocusableTileOrder >= settings.items.length) {
          const first = settings.items[0];
          const last = settings.items[settings.items.length - 1];
          if (dir > 0) {
            last.focus();
          } else {
            first.focus();
          }
          return;
        }
        event.preventDefault();
        this.lastFocused = settings.items.find((item) => item.order === nextFocusableTileOrder);
        this.lastFocused?.focus();
      }
    }
  }
  onFocusOut(event, elem, focusableItems) {
    const isTargetFocusable = focusableItems.includes(event.target);
    const isRelatedTargetFocusable = focusableItems.includes(event.relatedTarget);
    if (isTargetFocusable && !isRelatedTargetFocusable) {
      this.changeTabIndex("-1", elem, focusableItems);
      event.relatedTarget?.focus();
    }
  }
  onMousedown(event, elem, focusableItems, tile) {
    this.mousedown = true;
    const isTargetFocusable = focusableItems.includes(event.target);
    this.lastFocused = tile;
    if (isTargetFocusable) {
      this.changeTabIndex("0", elem, focusableItems);
      event.target.focus();
    }
  }
  changeTabIndex(tabIndex, elem, focusableItems) {
    this.renderer.setAttribute(elem, "tabindex", tabIndex === "0" ? "-1" : "0");
    focusableItems.forEach((focusItem) => {
      this.renderer.setAttribute(focusItem, "tabindex", tabIndex);
    });
  }
  getAllFocusableChildren(parent) {
    return Array.from(parent.querySelectorAll(focusableSelector)).filter((element) => element.offsetParent !== null);
  }
  returnFocus() {
    this.lastFocused ? this.lastFocused.focus() : this.owner.items.find((item) => item.order === 0).focus();
  }
  resizeItem(keyCode, focusedTile, settings, col) {
    const {
      resizeRight,
      resizeLeft,
      resizeDown,
      resizeUp
    } = shouldResize(keyCode, col, focusedTile, settings);
    const resizeHorizontal = resizeLeft || resizeRight;
    const resizeVertical = resizeDown || resizeUp;
    const resizeDir = resizeLeft || resizeUp ? -1 : 1;
    if (!(resizeHorizontal || resizeVertical)) {
      return;
    }
    const resizeEvent = new TileLayoutResizeEvent(focusedTile, this.owner.items ? this.owner.items.toArray() : [], focusedTile.rowSpan + resizeDir, focusedTile.rowSpan, focusedTile.colSpan + resizeDir, focusedTile.colSpan);
    this.owner.resize.emit(resizeEvent);
    if (!resizeEvent.isDefaultPrevented()) {
      if (resizeHorizontal) {
        focusedTile.colSpan += resizeDir;
      } else if (resizeVertical) {
        focusedTile.rowSpan += resizeDir;
      }
    }
  }
  reorderItem(keyCode, focusedTile, settings, col) {
    const {
      reorderLeft,
      reorderRight
    } = shouldReorder(keyCode, col, focusedTile, settings);
    if (!(reorderLeft || reorderRight)) {
      return;
    }
    const reorder = (dir) => {
      const relatedTile = this.targetTile(focusedTile, settings.items, dir);
      if (relatedTile) {
        relatedTile.order -= dir;
        if (relatedTile.col) {
          relatedTile.col -= dir;
        }
        focusedTile.order += dir;
        if (focusedTile.col) {
          focusedTile.col += dir;
        }
      }
    };
    const reorderDir = reorderRight ? 1 : -1;
    const reorderEvent = new TileLayoutReorderEvent(focusedTile, this.owner.items ? this.owner.items.toArray() : [], focusedTile.order + reorderDir, focusedTile.order, focusedTile.col ? focusedTile.col + reorderDir : void 0, focusedTile.col, focusedTile.row, focusedTile.row);
    this.owner.reorder.next(reorderEvent);
    if (!reorderEvent.isDefaultPrevented()) {
      reorder(reorderDir);
    }
  }
  keepFocusWithinComponent(event, wrapper) {
    const [firstFocusable, lastFocusable] = this.getFirstAndLastFocusable(wrapper);
    const tabAfterLastFocusable = !event.shiftKey && event.target === lastFocusable;
    const shiftTabAfterFirstFocusable = event.shiftKey && event.target === firstFocusable;
    if (tabAfterLastFocusable) {
      event.preventDefault();
      firstFocusable.focus();
      wrapper.blur();
    }
    if (shiftTabAfterFirstFocusable) {
      event.preventDefault();
      lastFocusable.focus();
    }
  }
  getFirstAndLastFocusable(parent) {
    const all = this.getAllFocusableChildren(parent);
    const firstFocusable = all.length > 0 ? all[0] : parent;
    const lastFocusable = all.length > 0 ? all[all.length - 1] : parent;
    return [firstFocusable, lastFocusable];
  }
  targetTile(focusedTile, items, offset) {
    return items.find((item) => item.order === focusedTile.order + offset);
  }
  static ɵfac = function TileLayoutKeyboardNavigationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TileLayoutKeyboardNavigationService)(ɵɵinject(NgZone), ɵɵinject(Renderer2), ɵɵinject(LocalizationService));
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _TileLayoutKeyboardNavigationService,
    factory: _TileLayoutKeyboardNavigationService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TileLayoutKeyboardNavigationService, [{
    type: Injectable
  }], () => [{
    type: NgZone
  }, {
    type: Renderer2
  }, {
    type: LocalizationService
  }], null);
})();
var TileLayoutItemHeaderComponent = class _TileLayoutItemHeaderComponent {
  hostClass = true;
  static ɵfac = function TileLayoutItemHeaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TileLayoutItemHeaderComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _TileLayoutItemHeaderComponent,
    selectors: [["kendo-tilelayout-item-header"]],
    hostVars: 4,
    hostBindings: function TileLayoutItemHeaderComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("k-tilelayout-item-header", ctx.hostClass)("k-card-header", ctx.hostClass);
      }
    },
    standalone: true,
    features: [ɵɵStandaloneFeature],
    ngContentSelectors: _c8,
    decls: 1,
    vars: 0,
    template: function TileLayoutItemHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TileLayoutItemHeaderComponent, [{
    type: Component,
    args: [{
      selector: "kendo-tilelayout-item-header",
      template: `
        <ng-content></ng-content>
    `,
      standalone: true
    }]
  }], null, {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-tilelayout-item-header"]
    }, {
      type: HostBinding,
      args: ["class.k-card-header"]
    }]
  });
})();
var TileLayoutResizeHandleDirective = class _TileLayoutResizeHandleDirective {
  el;
  renderer;
  resizeDirection;
  rtl;
  constructor(el, renderer) {
    this.el = el;
    this.renderer = renderer;
  }
  ngOnInit() {
    this.sizeHandle();
  }
  setHorizontalPosition(element) {
    this.renderer.setStyle(element, this.rtl ? "left" : "right", -RESIZE_HANDLE_DIMENSIONS[this.resizeDirection].overlapX + "px");
  }
  setBottom(element) {
    this.renderer.setStyle(element, "bottom", -RESIZE_HANDLE_DIMENSIONS[this.resizeDirection].overlapY + "px");
  }
  sizeHandle() {
    const element = this.el.nativeElement;
    const handleWidth = RESIZE_HANDLE_DIMENSIONS[this.resizeDirection].width ? `${RESIZE_HANDLE_DIMENSIONS[this.resizeDirection].width}px` : "100%";
    const handleHeight = RESIZE_HANDLE_DIMENSIONS[this.resizeDirection].height ? `${RESIZE_HANDLE_DIMENSIONS[this.resizeDirection].height}px` : "100%";
    this.renderer.setStyle(element, "width", handleWidth);
    this.renderer.setStyle(element, "height", handleHeight);
    if (this.resizeDirection === "ew") {
      this.setHorizontalPosition(element);
    } else if (this.resizeDirection === "ns") {
      this.setBottom(element);
    } else {
      this.setHorizontalPosition(element);
      this.setBottom(element);
    }
  }
  static ɵfac = function TileLayoutResizeHandleDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TileLayoutResizeHandleDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _TileLayoutResizeHandleDirective,
    selectors: [["", "kendoTileLayoutResizeHandle", ""]],
    inputs: {
      resizeDirection: "resizeDirection",
      rtl: "rtl"
    },
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TileLayoutResizeHandleDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoTileLayoutResizeHandle]",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }], {
    resizeDirection: [{
      type: Input
    }],
    rtl: [{
      type: Input
    }]
  });
})();
var TileLayoutItemComponent = class _TileLayoutItemComponent {
  elem;
  zone;
  renderer;
  localization;
  draggingService;
  keyboardNavigationService;
  /**
   * Sets the title text that appears in the item header ([see example]({% slug tiles_tilelayout %}#toc-tiles-configuration)).
   */
  title;
  /**
   * Sets how many rows the tile item spans ([see example](slug:resizing_tilelayout#programmatic-resizing)).
   * @default 1
   */
  rowSpan = 1;
  /**
   *  Sets how many columns the tile item spans ([see example](slug:resizing_tilelayout#programmatic-resizing)).
   * @default 1
   */
  colSpan = 1;
  /**
   * Sets the order of the tile item within the TileLayout.
   * When not set, items receive increasing order values based on their DOM position.
   */
  set order(value) {
    this._order = value;
    this.renderer.setStyle(this.elem.nativeElement, "order", `${this._order}`);
  }
  get order() {
    return this._order;
  }
  /**
   * Sets the starting column position of the item ([see example](slug:tiles_tilelayout#size-and-position)).
   */
  col;
  /**
   * Sets the starting row position of the item ([see example](slug:tiles_tilelayout#size-and-position)).
   */
  row;
  /**
   * Enables or disables individual item reordering.
   *
   * @default true
   */
  reorderable = true;
  /**
   * Enables or disables individual item resizing.
   * @default true
   */
  resizable = true;
  itemClass = true;
  hostRole = "listitem";
  get hostDropEffect() {
    return this.isResizable || this.isReorderable ? "execute" : void 0;
  }
  get hostTabindex() {
    return this.isNavigable ? "0" : void 0;
  }
  get ariaKeyShortcuts() {
    return this.isNavigable ? "Enter" : void 0;
  }
  get hostGrabbed() {
    return this.isResizable || this.isReorderable;
  }
  get hostLabelledBy() {
    return this.title ? this.titleId : void 0;
  }
  get colEnd() {
    return `span ${this.colSpan}`;
  }
  get rowEnd() {
    return `span ${this.rowSpan}`;
  }
  get colStart() {
    return isPresent2(this.col) ? this.col.toString() : void 0;
  }
  get rowStart() {
    return isPresent2(this.row) ? this.row.toString() : void 0;
  }
  /**
   * @hidden
   */
  get isReorderable() {
    return this.reorderable && this.draggingService.reorderable.getValue();
  }
  /**
   * @hidden
   */
  get isNavigable() {
    return this.keyboardNavigationService.navigable.getValue();
  }
  /**
   * @hidden
   */
  get isResizable() {
    return this.resizable && this.draggingService.resizable.getValue();
  }
  /**
   * @hidden
   */
  resizeDirections;
  /**
   * @hidden
   */
  rtl;
  headers;
  /**
   * @hidden
   */
  titleId = "";
  subs = new Subscription();
  keyboardNavigationSubs;
  focusableItems;
  _order;
  constructor(elem, zone, renderer, localization, draggingService, keyboardNavigationService) {
    this.elem = elem;
    this.zone = zone;
    this.renderer = renderer;
    this.localization = localization;
    this.draggingService = draggingService;
    this.keyboardNavigationService = keyboardNavigationService;
    this.subs.add(this.localization.changes.subscribe(({
      rtl
    }) => {
      this.rtl = rtl;
    }));
    this.subs.add(this.draggingService.resizable.subscribe((resizable) => {
      this.resizeDirections = resizable && this.resizable ? this.rtl ? RTL_RESIZE_DIRECTIONS : RESIZE_DIRECTIONS : void 0;
    }));
    this.titleId = getId("k-tilelayout-title");
  }
  ngAfterViewInit() {
    const elem = this.elem.nativeElement;
    const keyboardNavigation = this.keyboardNavigationService;
    this.subs.add(this.draggingService.reorderable.subscribe((reorderable) => {
      this.toggleCursorClass(reorderable && this.reorderable);
    }));
    this.subs.add(keyboardNavigation.navigable.subscribe((isNavigable) => {
      if (isNavigable) {
        this.keyboardNavigationSubs = new Subscription();
        this.focusableItems = keyboardNavigation.getAllFocusableChildren(elem);
        this.zone.runOutsideAngular(() => {
          keyboardNavigation.changeTabIndex("-1", elem, this.focusableItems);
          this.keyboardNavigationSubs.add(this.renderer.listen(elem, "keydown", (event) => keyboardNavigation.onKeyDown(event, elem, this.focusableItems, this.draggingService.tileLayoutSettings)));
          this.keyboardNavigationSubs.add(this.renderer.listen(elem, "mousedown", (event) => keyboardNavigation.onMousedown(event, elem, this.focusableItems, this)));
          this.keyboardNavigationSubs.add(this.renderer.listen(elem, "focusout", (event) => keyboardNavigation.onFocusOut(event, elem, this.focusableItems)));
        });
      } else if (this.focusableItems) {
        this.focusableItems.forEach((focusItem) => {
          this.renderer.setAttribute(focusItem, "tabindex", "0");
        });
        this.keyboardNavigationSubs.unsubscribe();
      }
    }));
  }
  ngOnChanges(changes) {
    if (changes["reorderable"] && !changes["reorderable"].firstChange) {
      this.toggleCursorClass(changes["reorderable"].currentValue && this.draggingService.reorderable.getValue());
    }
    if (changes["resizable"]) {
      this.resizeDirections = this.resizable && this.draggingService.resizable.getValue() ? this.rtl ? RTL_RESIZE_DIRECTIONS : RESIZE_DIRECTIONS : void 0;
    }
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
    if (this.keyboardNavigationSubs) {
      this.keyboardNavigationSubs.unsubscribe();
    }
  }
  /**
   * @hidden
   */
  focus() {
    this.elem.nativeElement.focus();
  }
  toggleCursorClass(isReorderable) {
    const headerEl = this.elem.nativeElement.querySelector(".k-tilelayout-item-header");
    if (!headerEl) {
      return;
    }
    if (isReorderable) {
      this.renderer.addClass(headerEl, "k-cursor-move");
    } else {
      this.renderer.removeClass(headerEl, "k-cursor-move");
    }
  }
  static ɵfac = function TileLayoutItemComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TileLayoutItemComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(TileLayoutDraggingService), ɵɵdirectiveInject(TileLayoutKeyboardNavigationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _TileLayoutItemComponent,
    selectors: [["kendo-tilelayout-item"]],
    contentQueries: function TileLayoutItemComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, TileLayoutItemHeaderComponent, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.headers = _t);
      }
    },
    hostVars: 18,
    hostBindings: function TileLayoutItemComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("role", ctx.hostRole)("aria-dropeffect", ctx.hostDropEffect)("tabindex", ctx.hostTabindex)("aria-keyshortcuts", ctx.ariaKeyShortcuts)("aria-grabbed", ctx.hostGrabbed)("aria-labelledby", ctx.hostLabelledBy);
        ɵɵstyleProp("grid-column-end", ctx.colEnd)("grid-row-end", ctx.rowEnd)("grid-column-start", ctx.colStart)("grid-row-start", ctx.rowStart);
        ɵɵclassProp("k-tilelayout-item", ctx.itemClass)("k-card", ctx.itemClass);
      }
    },
    inputs: {
      title: "title",
      rowSpan: "rowSpan",
      colSpan: "colSpan",
      order: "order",
      col: "col",
      row: "row",
      reorderable: "reorderable",
      resizable: "resizable"
    },
    standalone: true,
    features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    ngContentSelectors: _c8,
    decls: 3,
    vars: 2,
    consts: [[1, "k-card-title", 3, "id"], ["kendoTileLayoutResizeHandle", "", 3, "class", "rtl", "resizeDirection"], ["kendoTileLayoutResizeHandle", "", 3, "rtl", "resizeDirection"]],
    template: function TileLayoutItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵtemplate(0, TileLayoutItemComponent_Conditional_0_Template, 3, 2, "kendo-tilelayout-item-header");
        ɵɵprojection(1);
        ɵɵtemplate(2, TileLayoutItemComponent_Conditional_2_Template, 2, 0);
      }
      if (rf & 2) {
        ɵɵconditional(ctx.title ? 0 : -1);
        ɵɵadvance(2);
        ɵɵconditional(ctx.resizable ? 2 : -1);
      }
    },
    dependencies: [TileLayoutItemHeaderComponent, TileLayoutResizeHandleDirective],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TileLayoutItemComponent, [{
    type: Component,
    args: [{
      selector: "kendo-tilelayout-item",
      template: `
        @if (title) {
          <kendo-tilelayout-item-header>
            <h5 [id]="titleId" class="k-card-title">{{ title }}</h5>
          </kendo-tilelayout-item-header>
        }
        <ng-content></ng-content>
        @if (resizable) {
          @for (dir of resizeDirections; track dir) {
            <div
              class="k-resize-handle k-cursor-{{dir}}-resize"
              kendoTileLayoutResizeHandle
              [rtl]="rtl"
              [resizeDirection]="dir">
            </div>
          }
        }
        `,
      standalone: true,
      imports: [TileLayoutItemHeaderComponent, TileLayoutResizeHandleDirective]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: NgZone
  }, {
    type: Renderer2
  }, {
    type: LocalizationService
  }, {
    type: TileLayoutDraggingService
  }, {
    type: TileLayoutKeyboardNavigationService
  }], {
    title: [{
      type: Input
    }],
    rowSpan: [{
      type: Input
    }],
    colSpan: [{
      type: Input
    }],
    order: [{
      type: Input
    }],
    col: [{
      type: Input
    }],
    row: [{
      type: Input
    }],
    reorderable: [{
      type: Input
    }],
    resizable: [{
      type: Input
    }],
    itemClass: [{
      type: HostBinding,
      args: ["class.k-tilelayout-item"]
    }, {
      type: HostBinding,
      args: ["class.k-card"]
    }],
    hostRole: [{
      type: HostBinding,
      args: ["attr.role"]
    }],
    hostDropEffect: [{
      type: HostBinding,
      args: ["attr.aria-dropeffect"]
    }],
    hostTabindex: [{
      type: HostBinding,
      args: ["attr.tabindex"]
    }],
    ariaKeyShortcuts: [{
      type: HostBinding,
      args: ["attr.aria-keyshortcuts"]
    }],
    hostGrabbed: [{
      type: HostBinding,
      args: ["attr.aria-grabbed"]
    }],
    hostLabelledBy: [{
      type: HostBinding,
      args: ["attr.aria-labelledby"]
    }],
    colEnd: [{
      type: HostBinding,
      args: ["style.grid-column-end"]
    }],
    rowEnd: [{
      type: HostBinding,
      args: ["style.grid-row-end"]
    }],
    colStart: [{
      type: HostBinding,
      args: ["style.grid-column-start"]
    }],
    rowStart: [{
      type: HostBinding,
      args: ["style.grid-row-start"]
    }],
    headers: [{
      type: ContentChildren,
      args: [TileLayoutItemHeaderComponent]
    }]
  });
})();
var autoFlowClasses = {
  column: "k-grid-flow-col",
  row: "k-grid-flow-row",
  "column-dense": "k-grid-flow-col-dense",
  "row-dense": "k-grid-flow-row-dense"
};
var TileLayoutComponent = class _TileLayoutComponent {
  zone;
  elem;
  renderer;
  localization;
  draggingService;
  navigationService;
  /**
   * Specifies the number of columns ([see example](slug:tiles_tilelayout#size-and-position)).
   * @default 1
   */
  columns = 1;
  /**
   * Sets the width of the columns.
   * Use numeric values for pixels or string values for other CSS units ([see example](slug:tiles_tilelayout#size-and-position)).
   * @default '1fr'
   */
  columnWidth = "1fr";
  /**
   * Sets the spacing between layout items in pixels.
   * Use an object with `rows` and `columns` properties to set different horizontal and vertical spacing.
   * Use a single number to apply the same spacing to both directions.
   *
   * @default { rows: 16, columns: 16 }
   */
  set gap(value) {
    this._gap = typeof value === "number" ? {
      rows: value,
      columns: value
    } : Object.assign(this._gap, value);
  }
  get gap() {
    return this._gap;
  }
  /**
   * Enables or disables item reordering ([see example]({% slug reordering_tilelayout %})).
   * @default false
   */
  reorderable = false;
  /**
   * Enables or disables item resizing ([see example]({% slug resizing_tilelayout %})).
   * @default false
   */
  resizable = false;
  /**
   * Sets the height of the rows.
   * Use numeric values for pixels or string values for other CSS units ([see example](slug:tiles_tilelayout#size-and-position)).
   * @default '1fr'
   */
  rowHeight = "1fr";
  /**
   *
   * Controls how the auto-placement algorithm works, specifying exactly how auto-placed items are flowed in the TileLayout ([see example]({% slug tiles_autoflow_tilelayout %})).
   *
   * For further reference, check the [grid-auto-flow CSS article](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow).
   * @default 'column'
   */
  autoFlow = "column";
  /**
   * Enables or disables [keyboard navigation](slug:keyboard_navigation_tilelayout).
   * @default true
   */
  navigable = true;
  /**
   * Fires when item reordering is completed ([see example]({% slug reordering_tilelayout %})).
   * You can prevent this event to cancel the reorder operation.
   */
  reorder = new EventEmitter();
  /**
   * Fires when item resizing is completed ([see example]({% slug resizing_tilelayout %})).
   * You can prevent this event to cancel the resize operation.
   */
  resize = new EventEmitter();
  hostClass = true;
  hostRole = "list";
  get gapStyle() {
    return `${this.gap.rows}px ${this.gap.columns}px`;
  }
  direction;
  get currentColStart() {
    return this.draggingService.colStart;
  }
  get currentRowStart() {
    return this.draggingService.rowStart;
  }
  get draggedItemWrapper() {
    return this.draggingService.itemWrapper;
  }
  get targetOrder() {
    return this.draggingService.order;
  }
  /**
   * Contains a query list of the `TileLayoutItemComponent` instances that are used in the TileLayout.
   * This allows you to access the items programmatically and manipulate their properties or listen to their events.
   */
  items;
  hint;
  /**
   * @hidden
   */
  showLicenseWatermark = false;
  /**
   * @hidden
   */
  licenseMessage;
  draggable;
  subs = new Subscription();
  _gap = {
    rows: 16,
    columns: 16
  };
  constructor(zone, elem, renderer, localization, draggingService, navigationService) {
    this.zone = zone;
    this.elem = elem;
    this.renderer = renderer;
    this.localization = localization;
    this.draggingService = draggingService;
    this.navigationService = navigationService;
    const isValid = A(packageMetadata);
    this.licenseMessage = getLicenseMessage(packageMetadata);
    this.showLicenseWatermark = shouldShowValidationUI(isValid);
  }
  ngOnInit() {
    this.applyColStyling();
    this.applyRowStyling();
    this.draggingService.reorderable.next(this.reorderable);
    this.draggingService.resizable.next(this.resizable);
    this.navigationService.owner = this;
    this.navigationService.navigable.next(this.navigable);
    if (hasObservers(this.reorder)) {
      this.subs.add(this.draggingService.reorder.subscribe((e) => this.reorder.emit(e)));
    }
    if (hasObservers(this.resize)) {
      this.subs.add(this.draggingService.resize.subscribe((e) => this.resize.emit(e)));
    }
    this.subs.add(this.draggingService.reorderable.subscribe((reorderable) => {
      if (reorderable && !this.draggable) {
        this.initializeDraggable();
      }
    }));
    this.subs.add(this.draggingService.resizable.subscribe((resizable) => {
      if (resizable && !this.draggable) {
        this.initializeDraggable();
      }
    }));
    this.subs.add(this.localization.changes.subscribe(({
      rtl
    }) => {
      this.direction = rtl ? "rtl" : "ltr";
    }));
  }
  ngAfterViewInit() {
    this.draggingService.tileLayoutSettings = this.draggingServiceConfig();
    this.applyAutoFlow(null, autoFlowClasses[this.autoFlow]);
    this.items.changes.subscribe(() => {
      this.setItemsOrder();
      this.draggingService.tileLayoutSettings.items = this.items.toArray();
    });
    this.zone.runOutsideAngular(() => {
      this.elem.nativeElement.addEventListener("focusin", this.onFocusIn);
    });
  }
  ngAfterContentInit() {
    this.setItemsOrder();
  }
  ngOnChanges(changes) {
    if (changes["columns"] || changes["columnWidth"]) {
      this.applyColStyling();
    }
    if (changes["rowHeight"]) {
      this.applyRowStyling();
    }
    if (isChanged("reorderable", changes)) {
      this.draggingService.reorderable.next(changes["reorderable"].currentValue);
    }
    if (isChanged("resizable", changes)) {
      this.draggingService.resizable.next(changes["resizable"].currentValue);
    }
    if (changes["gap"] || changes["autoFlow"] || changes["columns"]) {
      this.draggingService.tileLayoutSettings = this.draggingServiceConfig();
      if (changes["autoFlow"]) {
        this.applyAutoFlow(autoFlowClasses[changes["autoFlow"].previousValue] || "", autoFlowClasses[changes["autoFlow"].currentValue]);
      }
    }
    if (isChanged("navigable", changes)) {
      this.navigationService.navigable.next(changes["navigable"].currentValue);
    }
  }
  ngOnDestroy() {
    if (this.draggable) {
      this.draggable.destroy();
    }
    this.subs.unsubscribe();
    this.elem.nativeElement.removeEventListener("focusin", this.onFocusIn);
  }
  handlePress({
    originalEvent
  }) {
    this.draggingService.handlePress(originalEvent);
  }
  handleDrag({
    originalEvent
  }) {
    this.draggingService.handleDrag(originalEvent);
  }
  handleRelease({
    originalEvent
  }) {
    this.draggingService.handleRelease(originalEvent);
  }
  applyColStyling() {
    const colWidth = typeof this.columnWidth === "number" ? `${this.columnWidth}px` : this.columnWidth;
    const gridTemplateColumnsStyle = `repeat(${this.columns}, ${colWidth})`;
    this.renderer.setStyle(this.elem.nativeElement, "grid-template-columns", gridTemplateColumnsStyle);
  }
  applyRowStyling() {
    const rowHeight = typeof this.rowHeight === "number" ? `${this.rowHeight}px` : this.rowHeight;
    const gridAutoRowsStyle = `${rowHeight}`;
    this.renderer.setStyle(this.elem.nativeElement, "grid-auto-rows", gridAutoRowsStyle);
  }
  draggingServiceConfig() {
    return {
      tileLayoutElement: this.elem ? this.elem.nativeElement : void 0,
      hintElement: this.hint ? this.hint.nativeElement : void 0,
      gap: this.gap,
      columns: this.columns,
      autoFlow: this.autoFlow,
      items: this.items ? this.items.toArray() : []
    };
  }
  initializeDraggable() {
    this.draggable = new Draggable({
      press: this.handlePress.bind(this),
      drag: this.handleDrag.bind(this),
      release: this.handleRelease.bind(this)
    });
    this.zone.runOutsideAngular(() => this.draggable.bindTo(this.elem.nativeElement));
  }
  applyAutoFlow(classToRemove, classToAdd) {
    const element = this.elem.nativeElement;
    if (classToRemove) {
      this.renderer.removeClass(element, classToRemove);
    }
    if (this.autoFlow !== "none" && isPresent2(classToAdd)) {
      this.renderer.addClass(element, classToAdd);
    }
  }
  setItemsOrder() {
    this.items.forEach((item, index) => {
      if (!isPresent2(item.order)) {
        item.order = index;
      }
    });
  }
  onFocusIn = (e) => {
    if (!this.navigable || this.navigationService.mousedown || !e.relatedTarget) {
      this.navigationService.mousedown = false;
      return;
    }
    if (!(this.elem.nativeElement.compareDocumentPosition(e.relatedTarget) & Node.DOCUMENT_POSITION_CONTAINED_BY)) {
      this.navigationService.returnFocus();
    }
  };
  static ɵfac = function TileLayoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TileLayoutComponent)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(TileLayoutDraggingService), ɵɵdirectiveInject(TileLayoutKeyboardNavigationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _TileLayoutComponent,
    selectors: [["kendo-tilelayout"]],
    contentQueries: function TileLayoutComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, TileLayoutItemComponent, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.items = _t);
      }
    },
    viewQuery: function TileLayoutComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c29, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.hint = _t.first);
      }
    },
    hostVars: 8,
    hostBindings: function TileLayoutComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("role", ctx.hostRole)("dir", ctx.direction);
        ɵɵstyleProp("gap", ctx.gapStyle)("padding", ctx.gapStyle);
        ɵɵclassProp("k-tilelayout", ctx.hostClass);
      }
    },
    inputs: {
      columns: "columns",
      columnWidth: "columnWidth",
      gap: "gap",
      reorderable: "reorderable",
      resizable: "resizable",
      rowHeight: "rowHeight",
      autoFlow: "autoFlow",
      navigable: "navigable"
    },
    outputs: {
      reorder: "reorder",
      resize: "resize"
    },
    standalone: true,
    features: [ɵɵProvidersFeature([LocalizationService, TileLayoutDraggingService, TileLayoutKeyboardNavigationService, {
      provide: L10N_PREFIX,
      useValue: "kendo.tilelayout.component"
    }]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    ngContentSelectors: _c8,
    decls: 4,
    vars: 15,
    consts: [["hint", ""], [1, "k-layout-item-hint"], ["kendoWatermarkOverlay", "", 3, "licenseMessage"]],
    template: function TileLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
        ɵɵelement(1, "div", 1, 0);
        ɵɵtemplate(3, TileLayoutComponent_Conditional_3_Template, 1, 1, "div", 2);
      }
      if (rf & 2) {
        ɵɵadvance();
        ɵɵstyleProp("display", "none")("order", ctx.targetOrder)("grid-column-end", ctx.draggedItemWrapper == null ? null : ctx.draggedItemWrapper.style.gridColumnEnd)("grid-row-end", ctx.draggedItemWrapper == null ? null : ctx.draggedItemWrapper.style.gridRowEnd)("grid-column-start", ctx.currentColStart)("grid-row-start", ctx.currentRowStart)("z-index", "1");
        ɵɵadvance(2);
        ɵɵconditional(ctx.showLicenseWatermark ? 3 : -1);
      }
    },
    dependencies: [WatermarkOverlayComponent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TileLayoutComponent, [{
    type: Component,
    args: [{
      selector: "kendo-tilelayout",
      providers: [LocalizationService, TileLayoutDraggingService, TileLayoutKeyboardNavigationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.tilelayout.component"
      }],
      template: `
        <ng-content></ng-content>
        <div #hint class="k-layout-item-hint"
          [style.display]="'none'"
          [style.order]="targetOrder"
          [style.gridColumnEnd]="draggedItemWrapper?.style.gridColumnEnd"
          [style.gridRowEnd]="draggedItemWrapper?.style.gridRowEnd"
          [style.gridColumnStart]="currentColStart"
          [style.gridRowStart]="currentRowStart"
          [style.zIndex]="'1'">
        </div>
        @if (showLicenseWatermark) {
          <div kendoWatermarkOverlay [licenseMessage]="licenseMessage"></div>
        }
        `,
      standalone: true,
      imports: [WatermarkOverlayComponent]
    }]
  }], () => [{
    type: NgZone
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: LocalizationService
  }, {
    type: TileLayoutDraggingService
  }, {
    type: TileLayoutKeyboardNavigationService
  }], {
    columns: [{
      type: Input
    }],
    columnWidth: [{
      type: Input
    }],
    gap: [{
      type: Input
    }],
    reorderable: [{
      type: Input
    }],
    resizable: [{
      type: Input
    }],
    rowHeight: [{
      type: Input
    }],
    autoFlow: [{
      type: Input
    }],
    navigable: [{
      type: Input
    }],
    reorder: [{
      type: Output
    }],
    resize: [{
      type: Output
    }],
    hostClass: [{
      type: HostBinding,
      args: ["class.k-tilelayout"]
    }],
    hostRole: [{
      type: HostBinding,
      args: ["attr.role"]
    }],
    gapStyle: [{
      type: HostBinding,
      args: ["style.gap"]
    }, {
      type: HostBinding,
      args: ["style.padding"]
    }],
    direction: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    items: [{
      type: ContentChildren,
      args: [TileLayoutItemComponent]
    }],
    hint: [{
      type: ViewChild,
      args: ["hint", {
        static: false
      }]
    }]
  });
})();
var TileLayoutItemBodyComponent = class _TileLayoutItemBodyComponent {
  hostClass = true;
  minHeight = 0;
  static ɵfac = function TileLayoutItemBodyComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TileLayoutItemBodyComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _TileLayoutItemBodyComponent,
    selectors: [["kendo-tilelayout-item-body"]],
    hostVars: 6,
    hostBindings: function TileLayoutItemBodyComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵstyleProp("min-height", ctx.minHeight);
        ɵɵclassProp("k-tilelayout-item-body", ctx.hostClass)("k-card-body", ctx.hostClass);
      }
    },
    standalone: true,
    features: [ɵɵStandaloneFeature],
    ngContentSelectors: _c8,
    decls: 1,
    vars: 0,
    template: function TileLayoutItemBodyComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TileLayoutItemBodyComponent, [{
    type: Component,
    args: [{
      selector: "kendo-tilelayout-item-body",
      template: `
        <ng-content></ng-content>
    `,
      standalone: true
    }]
  }], null, {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-tilelayout-item-body"]
    }, {
      type: HostBinding,
      args: ["class.k-card-body"]
    }],
    minHeight: [{
      type: HostBinding,
      args: ["style.min-height"]
    }]
  });
})();
var VERTICAL_SUFFIX = {
  top: "start",
  middle: "center",
  bottom: "end",
  stretch: "stretch"
};
var JUSTIFY_PREFIX = `k-justify-content`;
var GRID_JUSTIFY_PREFIX = `k-justify-items`;
var ALIGN_PREFIX = `k-align-items`;
var normalizeGap = (gap) => {
  if (typeof gap === "number" || typeof gap === "string") {
    return {
      cols: gap,
      rows: gap
    };
  } else {
    const parsedGap = {};
    parsedGap.rows = gap.rows ? gap.rows : 0;
    parsedGap.cols = gap.cols ? gap.cols : 0;
    return parsedGap;
  }
};
var generateGapStyle = (gap) => {
  if (gap.rows === gap.cols) {
    return typeof gap.rows === "number" ? `${gap.rows}px` : gap.rows;
  } else {
    const rowStyle = `${typeof gap.rows === "number" ? gap.rows + "px" : gap.rows}`;
    const colStyle = `${typeof gap.cols === "number" ? gap.cols + "px" : gap.cols}`;
    return `${rowStyle} ${colStyle}`;
  }
};
var generateGridStyle = (items, itemType) => {
  const styling = [];
  items.forEach((item) => {
    if (typeof item === "number") {
      styling.push(`${item}px`);
    } else if (typeof item === "string") {
      styling.push(item);
    } else {
      if (itemType === "rows") {
        const rowHeight = item.height;
        if (rowHeight) {
          styling.push(typeof rowHeight === "number" ? `${rowHeight}px` : rowHeight);
        } else {
          styling.push("0px");
        }
      } else {
        const colWidth = item.width;
        if (colWidth) {
          styling.push(typeof colWidth === "number" ? `${colWidth}px` : colWidth);
        } else {
          styling.push("0px");
        }
      }
    }
  });
  return styling;
};
var validateGridLayoutRowsCols = (arr) => {
  for (const el of arr) {
    const isNum = typeof el === "number";
    const isStr = typeof el === "string";
    const isObject = typeof el === "object" && el !== null;
    if (!isNum && !isStr && !isObject) {
      return false;
    }
  }
  return true;
};
var GridLayoutComponent = class _GridLayoutComponent {
  renderer;
  element;
  localization;
  hostClass = true;
  get dir() {
    return this.direction;
  }
  /**
   * Specifies the number of rows and their height
   * ([More details](slug:layout_gridlayout#toc-rows-and-columns)).
   *
   * You can define rows by passing an array where the number of elements determines the number of rows or each element defines the size of the corresponding row.
   * For example, you can use CSS units like `px`, `%`, `fr`, or `auto` to define the row sizes.
   */
  rows;
  /**
   * Specifies the number of columns and their widths
   * ([More details](slug:layout_gridlayout#toc-rows-and-columns)).
   *
   * You can define columns by passing an array where the number of elements determines the number of columns or each element defines the size of the corresponding column.
   * For example, you can use CSS units like `px`, `%`, `fr`, or `auto` to define the column sizes.
   */
  cols;
  /**
   * Specifies the gaps between the elements ([see example](slug:layout_gridlayout#toc-gap)).
   *
   * @default 0
   */
  gap = 0;
  /**
   * Specifies the horizontal and vertical alignment of the inner GridLayout elements
   * ([see example]({% slug layout_gridlayout %}#toc-alignment)).
   */
  set align(align) {
    this._align = Object.assign({}, this._align, align);
    this.handleAlignClasses();
  }
  get align() {
    return this._align;
  }
  _align = {
    horizontal: "stretch",
    vertical: "stretch"
  };
  justifyClass;
  alignClass;
  constructor(renderer, element, localization) {
    this.renderer = renderer;
    this.element = element;
    this.localization = localization;
    A(packageMetadata);
  }
  ngAfterViewInit() {
    this.handleAlignClasses();
    this.handleGridTemplateStyling("rows");
    this.handleGridTemplateStyling("cols");
    this.setGap();
  }
  ngOnChanges(changes) {
    if (isChanged("gap", changes)) {
      this.setGap();
    }
    if (isChanged("rows", changes)) {
      this.handleGridTemplateStyling("rows");
    }
    if (isChanged("cols", changes)) {
      this.handleGridTemplateStyling("cols");
    }
  }
  handleAlignClasses() {
    const elem = this.element.nativeElement;
    if (isPresent2(this.justifyClass)) {
      this.renderer.removeClass(elem, this.justifyClass);
    }
    if (isPresent2(this.alignClass)) {
      this.renderer.removeClass(elem, this.alignClass);
    }
    this.justifyClass = `${GRID_JUSTIFY_PREFIX}-${this.align.horizontal}`;
    this.alignClass = `${ALIGN_PREFIX}-${VERTICAL_SUFFIX[this.align.vertical]}`;
    this.renderer.addClass(elem, this.justifyClass);
    this.renderer.addClass(elem, this.alignClass);
  }
  setGap() {
    const parsedGap = normalizeGap(this.gap);
    const gapStyle = generateGapStyle(parsedGap);
    this.renderer.setStyle(this.element.nativeElement, "gap", gapStyle);
  }
  handleGridTemplateStyling(type) {
    if (!isPresent2(this[type])) {
      return;
    }
    const isValid = validateGridLayoutRowsCols(this[type]);
    if (!isValid && isDevMode()) {
      const valueType = type === "rows" ? "GridLayoutRowSize" : "GridLayoutColSize";
      throw new Error(`The provided ${type} value contains invalid elements. The array supports values of type number, string or ${valueType}.`);
    }
    const gridTemplateStyle = type === "rows" ? "grid-template-rows" : "grid-template-columns";
    const gridStyle = generateGridStyle(this[type], type);
    this.renderer.setStyle(this.element.nativeElement, gridTemplateStyle, gridStyle.join(" "));
  }
  get direction() {
    return this.localization.rtl ? "rtl" : "ltr";
  }
  static ɵfac = function GridLayoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GridLayoutComponent)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(LocalizationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _GridLayoutComponent,
    selectors: [["kendo-gridlayout"]],
    hostVars: 3,
    hostBindings: function GridLayoutComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("dir", ctx.dir);
        ɵɵclassProp("k-grid-layout", ctx.hostClass);
      }
    },
    inputs: {
      rows: "rows",
      cols: "cols",
      gap: "gap",
      align: "align"
    },
    exportAs: ["kendoGridLayout"],
    standalone: true,
    features: [ɵɵProvidersFeature([LocalizationService, {
      provide: L10N_PREFIX,
      useValue: "kendo.gridlayout"
    }]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    ngContentSelectors: _c8,
    decls: 1,
    vars: 0,
    template: function GridLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GridLayoutComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoGridLayout",
      selector: "kendo-gridlayout",
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.gridlayout"
      }],
      template: `
        <ng-content></ng-content>
    `,
      standalone: true
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: LocalizationService
  }], {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-grid-layout"]
    }],
    dir: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    rows: [{
      type: Input
    }],
    cols: [{
      type: Input
    }],
    gap: [{
      type: Input
    }],
    align: [{
      type: Input
    }]
  });
})();
var GridLayoutItemComponent = class _GridLayoutItemComponent {
  renderer;
  element;
  /**
   * Sets the row of the item in the GridLayout
   * ([see example]({% slug items_gridlayout %}#toc-size-and-position)).
   */
  row;
  /**
   * Sets the column of the item in the GridLayout
   * ([see example]({% slug items_gridlayout %}#toc-size-and-position)).
   */
  col;
  /**
   * Specifies how many rows the item spans ([see example]({% slug items_gridlayout %}#toc-size-and-position)).
   *
   * @default 1
   */
  rowSpan;
  /**
   * Specifies how many columns the item spans ([see example]({% slug items_gridlayout %}#toc-size-and-position)).
   *
   * @default 1
   */
  colSpan;
  constructor(renderer, element) {
    this.renderer = renderer;
    this.element = element;
  }
  ngOnInit() {
    this.setItemStyle();
  }
  ngOnChanges() {
    this.setItemStyle();
  }
  setItemStyle() {
    const row = this.row || "auto";
    const col = this.col || "auto";
    const rowSpan = this.rowSpan ? `span ${this.rowSpan}` : "auto";
    const colSpan = this.colSpan ? `span ${this.colSpan}` : "auto";
    const gridAreaStyle = `${row} / ${col} / ${rowSpan} / ${colSpan}`;
    this.renderer.setStyle(this.element.nativeElement, "grid-area", gridAreaStyle);
  }
  static ɵfac = function GridLayoutItemComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GridLayoutItemComponent)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _GridLayoutItemComponent,
    selectors: [["kendo-gridlayout-item"]],
    inputs: {
      row: "row",
      col: "col",
      rowSpan: "rowSpan",
      colSpan: "colSpan"
    },
    standalone: true,
    features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    ngContentSelectors: _c8,
    decls: 1,
    vars: 0,
    template: function GridLayoutItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GridLayoutItemComponent, [{
    type: Component,
    args: [{
      selector: "kendo-gridlayout-item",
      template: `
        <ng-content></ng-content>
    `,
      standalone: true
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }], {
    row: [{
      type: Input
    }],
    col: [{
      type: Input
    }],
    rowSpan: [{
      type: Input
    }],
    colSpan: [{
      type: Input
    }]
  });
})();
var StackLayoutComponent = class _StackLayoutComponent {
  renderer;
  element;
  localization;
  hostClass = true;
  get horizontalClass() {
    return this.orientation === "horizontal";
  }
  get verticalClass() {
    return this.orientation === "vertical";
  }
  get dir() {
    return this.direction;
  }
  /**
   * Specifies the horizontal and vertical alignment of the inner StackLayout elements
   * ([see example]({% slug layout_stacklayout %}#toc-alignment)).
   */
  set align(align) {
    this._align = Object.assign({}, this._align, align);
    this.handleAlignClasses();
  }
  get align() {
    return this._align;
  }
  /**
   * Specifies the gap between the inner StackLayout elements ([see example](slug:layout_stacklayout#toc-gap)).
   *
   * @default 0
   */
  gap = 0;
  /**
   * Specifies the orientation of the StackLayout
   * ([see example]({% slug layout_stacklayout %}#toc-orientation)).
   *
   * @default 'horizontal'
   */
  orientation = "horizontal";
  _align = {
    horizontal: "stretch",
    vertical: "stretch"
  };
  justifyClass;
  alignClass;
  constructor(renderer, element, localization) {
    this.renderer = renderer;
    this.element = element;
    this.localization = localization;
    A(packageMetadata);
  }
  ngAfterViewInit() {
    this.handleAlignClasses();
    this.setGap();
  }
  ngOnChanges(changes) {
    if (isChanged("gap", changes)) {
      this.setGap();
    }
    if (isChanged("orientation", changes)) {
      this.handleAlignClasses();
    }
  }
  handleAlignClasses() {
    const elem = this.element.nativeElement;
    if (isPresent2(this.justifyClass)) {
      this.renderer.removeClass(elem, this.justifyClass);
    }
    if (isPresent2(this.alignClass)) {
      this.renderer.removeClass(elem, this.alignClass);
    }
    if (this.orientation === "horizontal") {
      this.justifyClass = `${JUSTIFY_PREFIX}-${this.align.horizontal}`;
      this.alignClass = `${ALIGN_PREFIX}-${VERTICAL_SUFFIX[this.align.vertical]}`;
    } else {
      this.justifyClass = `${JUSTIFY_PREFIX}-${VERTICAL_SUFFIX[this.align.vertical]}`;
      this.alignClass = `${ALIGN_PREFIX}-${this.align.horizontal}`;
    }
    this.renderer.addClass(elem, this.justifyClass);
    this.renderer.addClass(elem, this.alignClass);
  }
  setGap() {
    const parsedGap = isNumber(this.gap) ? `${this.gap}px` : this.gap;
    this.renderer.setStyle(this.element.nativeElement, "gap", parsedGap);
  }
  get direction() {
    return this.localization.rtl ? "rtl" : "ltr";
  }
  static ɵfac = function StackLayoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StackLayoutComponent)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(LocalizationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _StackLayoutComponent,
    selectors: [["kendo-stacklayout"]],
    hostVars: 7,
    hostBindings: function StackLayoutComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("dir", ctx.dir);
        ɵɵclassProp("k-stack-layout", ctx.hostClass)("k-hstack", ctx.horizontalClass)("k-vstack", ctx.verticalClass);
      }
    },
    inputs: {
      align: "align",
      gap: "gap",
      orientation: "orientation"
    },
    exportAs: ["kendoStackLayout"],
    standalone: true,
    features: [ɵɵProvidersFeature([LocalizationService, {
      provide: L10N_PREFIX,
      useValue: "kendo.stacklayout"
    }]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    ngContentSelectors: _c8,
    decls: 1,
    vars: 0,
    template: function StackLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StackLayoutComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoStackLayout",
      selector: "kendo-stacklayout",
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.stacklayout"
      }],
      template: `
        <ng-content></ng-content>
    `,
      standalone: true
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: LocalizationService
  }], {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-stack-layout"]
    }],
    horizontalClass: [{
      type: HostBinding,
      args: ["class.k-hstack"]
    }],
    verticalClass: [{
      type: HostBinding,
      args: ["class.k-vstack"]
    }],
    dir: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    align: [{
      type: Input
    }],
    gap: [{
      type: Input
    }],
    orientation: [{
      type: Input
    }]
  });
})();
var TimelineMessages = class _TimelineMessages extends ComponentMessages {
  /**
   * The title of the previous button in horizontal orientation.
   */
  previous;
  /**
   * The title of the next button in horizontal orientation.
   */
  next;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵTimelineMessages_BaseFactory;
    return function TimelineMessages_Factory(__ngFactoryType__) {
      return (ɵTimelineMessages_BaseFactory || (ɵTimelineMessages_BaseFactory = ɵɵgetInheritedFactory(_TimelineMessages)))(__ngFactoryType__ || _TimelineMessages);
    };
  })();
  static ɵdir = ɵɵdefineDirective({
    type: _TimelineMessages,
    selectors: [["kendo-timeline-messages-base"]],
    inputs: {
      previous: "previous",
      next: "next"
    },
    features: [ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimelineMessages, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "kendo-timeline-messages-base"
    }]
  }], null, {
    previous: [{
      type: Input
    }],
    next: [{
      type: Input
    }]
  });
})();
var TimelineCustomMessagesComponent = class _TimelineCustomMessagesComponent extends TimelineMessages {
  service;
  constructor(service) {
    super();
    this.service = service;
  }
  get override() {
    return true;
  }
  static ɵfac = function TimelineCustomMessagesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TimelineCustomMessagesComponent)(ɵɵdirectiveInject(LocalizationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _TimelineCustomMessagesComponent,
    selectors: [["kendo-timeline-messages"]],
    standalone: true,
    features: [ɵɵProvidersFeature([{
      provide: TimelineMessages,
      useExisting: forwardRef(() => _TimelineCustomMessagesComponent)
    }]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function TimelineCustomMessagesComponent_Template(rf, ctx) {
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimelineCustomMessagesComponent, [{
    type: Component,
    args: [{
      providers: [{
        provide: TimelineMessages,
        useExisting: forwardRef(() => TimelineCustomMessagesComponent)
      }],
      selector: "kendo-timeline-messages",
      template: ``,
      standalone: true
    }]
  }], () => [{
    type: LocalizationService
  }], null);
})();
var TimelineCardActionsTemplateDirective = class _TimelineCardActionsTemplateDirective {
  templateRef;
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static ɵfac = function TimelineCardActionsTemplateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TimelineCardActionsTemplateDirective)(ɵɵdirectiveInject(TemplateRef, 8));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _TimelineCardActionsTemplateDirective,
    selectors: [["", "kendoTimelineCardActionsTemplate", ""]],
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimelineCardActionsTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoTimelineCardActionsTemplate]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
var TimelineCardBodyTemplateDirective = class _TimelineCardBodyTemplateDirective {
  templateRef;
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static ɵfac = function TimelineCardBodyTemplateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TimelineCardBodyTemplateDirective)(ɵɵdirectiveInject(TemplateRef, 8));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _TimelineCardBodyTemplateDirective,
    selectors: [["", "kendoTimelineCardBodyTemplate", ""]],
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimelineCardBodyTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoTimelineCardBodyTemplate]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
var TimelineCardHeaderTemplateDirective = class _TimelineCardHeaderTemplateDirective {
  templateRef;
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static ɵfac = function TimelineCardHeaderTemplateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TimelineCardHeaderTemplateDirective)(ɵɵdirectiveInject(TemplateRef, 8));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _TimelineCardHeaderTemplateDirective,
    selectors: [["", "kendoTimelineCardHeaderTemplate", ""]],
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimelineCardHeaderTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoTimelineCardHeaderTemplate]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
var defaultModelFields = {
  title: "title",
  subtitle: "subtitle",
  description: "description",
  date: "date",
  expanded: "expanded",
  images: "images",
  actions: "actions"
};
var processItems = (items, fields) => {
  return items.map((item) => parseItem(item, fields));
};
var parseItem = (item, fields) => ({
  title: item[fields.title] || item.title,
  date: item[fields.date] || item.date,
  subtitle: item[fields.subtitle] || item.subtitle,
  description: item[fields.description] || item.description,
  expanded: item[fields.expanded] || item.expanded,
  images: item[fields.images] || item.images,
  actions: item[fields.actions] || item.actions
});
var TimelineService = class _TimelineService {
  timeline;
  onToggle(event) {
    if (this.timeline) {
      this.timeline["onToggle"]?.emit(event);
    }
  }
  onActionClick(event) {
    if (this.timeline) {
      this.timeline["onActionClick"]?.emit(event);
    }
  }
  onNavigate(event) {
    if (this.timeline) {
      this.timeline["onNavigate"]?.emit(event);
    }
  }
  static ɵfac = function TimelineService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TimelineService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _TimelineService,
    factory: _TimelineService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimelineService, [{
    type: Injectable
  }], null, null);
})();
var TimelineCardComponent = class _TimelineCardComponent {
  element;
  timelineService;
  renderer;
  event;
  expanded = false;
  collapsible = true;
  reversed = false;
  orientation;
  navigable;
  tabIndex;
  animationDuration;
  index;
  eventWidth;
  eventHeight;
  headerTemplate;
  bodyTemplate;
  actionsTemplate;
  set calloutStyle(value) {
    if (!this.calloutElementRef || !this.calloutElementRef.nativeElement.classList.contains("k-callout-n")) {
      return;
    }
    this.calloutElementRef.nativeElement.style.left = value?.left;
  }
  calloutElementRef;
  hostClass = true;
  get collapsedClass() {
    return !this.expanded && !this.animationInProgress && this.animationState === "collapsed";
  }
  onComponentKeyDown(event) {
    if (!this.navigable) {
      return;
    }
    if (event.code === Keys.Space || event.code === Keys.Enter || event.code === Keys.NumpadEnter) {
      event.preventDefault();
      if (this.collapsible && this.orientation === "vertical") {
        this.expanded = !this.expanded;
      }
    }
  }
  get role() {
    return this.orientation === "vertical" ? "button" : "tabpanel";
  }
  get ariaLive() {
    return this.orientation === "vertical" ? "polite" : null;
  }
  get ariaExpanded() {
    return this.orientation === "vertical" ? this.expanded : null;
  }
  calloutSvgIcon = chevronRightIcon;
  calloutFontIcon = "arrow-chevron-right";
  animationState = this.expanded ? "expanded" : "collapsed";
  animationInProgress = false;
  constructor(element, timelineService, renderer) {
    this.element = element;
    this.timelineService = timelineService;
    this.renderer = renderer;
  }
  ngAfterViewInit() {
    this.makeOverflowVisible();
  }
  ngOnChanges(changes) {
    if (isChanged("collapsible", changes, false)) {
      if (!this.collapsible) {
        this.expanded = true;
      }
    }
  }
  toggle() {
    if (this.orientation === "vertical") {
      this.expanded = this.collapsible ? !this.expanded : true;
      this.timelineService.onToggle(this.index);
    }
  }
  expand() {
    if (!this.expanded) {
      this.expanded = true;
      this.timelineService.onToggle(this.index);
    }
  }
  collapse() {
    if (!this.collapsible || !this.expanded) {
      return;
    }
    this.expanded = false;
    this.timelineService.onToggle(this.index);
  }
  onActionClick(event) {
    event.stopPropagation();
    this.timelineService.onActionClick(this.index);
  }
  animationStart() {
    this.animationInProgress = true;
  }
  animationDone(event) {
    this.animationInProgress = false;
    if (event.toState === "expanded" && event.fromState !== "expanded") {
      this.animationState = "expanded";
      this.makeOverflowVisible();
    } else if (event.toState === "collapsed" && event.fromState !== "collapsed") {
      this.animationState = "collapsed";
    }
  }
  makeOverflowVisible() {
    if (this.orientation === "vertical") {
      return;
    }
    const cardBody = this.element?.nativeElement.querySelector(".k-card-body");
    if (cardBody) {
      this.renderer.setStyle(cardBody, "overflow", "auto");
    }
  }
  static ɵfac = function TimelineCardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TimelineCardComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(TimelineService), ɵɵdirectiveInject(Renderer2));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _TimelineCardComponent,
    selectors: [["kendo-timeline-card"]],
    viewQuery: function TimelineCardComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c30, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.calloutElementRef = _t.first);
      }
    },
    hostVars: 4,
    hostBindings: function TimelineCardComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("keydown", function TimelineCardComponent_keydown_HostBindingHandler($event) {
          return ctx.onComponentKeyDown($event);
        });
      }
      if (rf & 2) {
        ɵɵclassProp("k-timeline-card", ctx.hostClass)("k-collapsed", ctx.collapsedClass);
      }
    },
    inputs: {
      event: "event",
      expanded: "expanded",
      collapsible: "collapsible",
      reversed: "reversed",
      orientation: "orientation",
      navigable: "navigable",
      tabIndex: "tabIndex",
      animationDuration: "animationDuration",
      index: "index",
      eventWidth: "eventWidth",
      eventHeight: "eventHeight",
      headerTemplate: "headerTemplate",
      bodyTemplate: "bodyTemplate",
      actionsTemplate: "actionsTemplate",
      calloutStyle: "calloutStyle"
    },
    exportAs: ["kendoTimelineCard"],
    standalone: true,
    features: [ɵɵProvidersFeature([]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    decls: 4,
    vars: 14,
    consts: [["callout", ""], [1, "k-card-with-callout", "k-card-vertical", 3, "click", "ngStyle", "width"], [1, "k-timeline-card-callout", "k-card-callout", 3, "ngClass"], [1, "k-card-inner"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["kendoCardTitle", ""], ["kendoCardSubtitle", ""], [1, "k-event-title"], ["kendoButton", "", "fillMode", "flat", "tabindex", "-1", "type", "button", 1, "k-event-collapse", 3, "icon", "svgIcon"], [1, "k-card-description"], ["kendoCardMedia", "", 3, "src", "alt"], ["kendoCardMedia", "", 3, "src"], ["role", "button", 1, "k-button", "k-button-md", "k-rounded-md", "k-button-flat", "k-button-flat-primary", 3, "href", "target"], ["role", "button", 1, "k-button", "k-button-md", "k-rounded-md", "k-button-flat", "k-button-flat-primary", 3, "click", "href", "target"]],
    template: function TimelineCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "kendo-card", 1);
        ɵɵlistener("click", function TimelineCardComponent_Template_kendo_card_click_0_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.toggle());
        });
        ɵɵelement(1, "span", 2, 0);
        ɵɵtemplate(3, TimelineCardComponent_Conditional_3_Template, 7, 5, "div", 3);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵproperty("ngStyle", ɵɵpureFunction1(8, _c31, ctx.orientation === "horizontal" ? ctx.eventHeight + "px" : null))("width", ctx.orientation === "horizontal" ? "auto" : ctx.eventWidth + "px");
        ɵɵattribute("role", ctx.role)("aria-live", ctx.ariaLive)("aria-expanded", ctx.ariaExpanded)("tabindex", ctx.tabIndex);
        ɵɵadvance();
        ɵɵproperty("ngClass", ɵɵpureFunction3(10, _c32, ctx.orientation === "horizontal", ctx.orientation === "vertical" && !ctx.reversed, ctx.orientation === "vertical" && ctx.reversed));
        ɵɵadvance(2);
        ɵɵconditional(ctx.event ? 3 : -1);
      }
    },
    dependencies: [CardComponent, NgStyle, NgClass, CardHeaderComponent, NgTemplateOutlet, CardTitleDirective, ButtonComponent, CardSubtitleDirective, CardBodyComponent, CardMediaDirective, CardActionsComponent],
    encapsulation: 2,
    data: {
      animation: [trigger("toggle", [state("collapsed", style({
        height: "0",
        "overflow-y": "hidden",
        display: "none"
      })), state("expanded", style({
        height: "*",
        "overflow-y": "hidden",
        display: "block"
      })), transition("collapsed <=> expanded", [animate("{{animationDuration}}ms")], {
        params: {
          animationDuration: "400"
        }
      })])]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimelineCardComponent, [{
    type: Component,
    args: [{
      animations: [trigger("toggle", [state("collapsed", style({
        height: "0",
        "overflow-y": "hidden",
        display: "none"
      })), state("expanded", style({
        height: "*",
        "overflow-y": "hidden",
        display: "block"
      })), transition("collapsed <=> expanded", [animate("{{animationDuration}}ms")], {
        params: {
          animationDuration: "400"
        }
      })])],
      providers: [],
      exportAs: "kendoTimelineCard",
      selector: "kendo-timeline-card",
      template: `
        <kendo-card
          [ngStyle]="{ 'height': orientation === 'horizontal' ? eventHeight + 'px' : null }"
          [width]="orientation === 'horizontal' ? 'auto' : eventWidth + 'px'"
          class="k-card-with-callout k-card-vertical"
          (click)="toggle()"
          [attr.role]="role"
          [attr.aria-live]="ariaLive"
          [attr.aria-expanded]="ariaExpanded"
          [attr.tabindex]="tabIndex"
          >
          <span
            #callout
            class="k-timeline-card-callout k-card-callout"
                [ngClass]="{
                    'k-callout-n': orientation === 'horizontal',
                    'k-callout-w': orientation === 'vertical' && !this.reversed,
                    'k-callout-e': orientation === 'vertical' && this.reversed
                }"
            >
          </span>
          @if (event) {
            <div class="k-card-inner">
              <kendo-card-header>
                @if (headerTemplate) {
                  <ng-template
                    [ngTemplateOutlet]="headerTemplate?.templateRef"
                    [ngTemplateOutletContext]="{ $implicit: event, index: index}">
                    >
                  </ng-template>
                }
                @if (!headerTemplate) {
                  <div kendoCardTitle>
                    <span class="k-event-title">{{ event.title }}</span>
                    @if (collapsible && orientation === 'vertical') {
                      <button
                        kendoButton
                        [icon]="calloutFontIcon"
                        [svgIcon]="calloutSvgIcon"
                        class="k-event-collapse"
                        fillMode="flat"
                        [attr.aria-hidden]="true"
                        tabindex="-1"
                        type="button"
                      ></button>
                    }
                  </div>
                }
                @if (!headerTemplate) {
                  <div kendoCardSubtitle >{{ event.subtitle }}</div>
                }
              </kendo-card-header>
              @if (event.description || event.images) {
                <kendo-card-body
                  [@toggle]="{value: expanded ? 'expanded' : 'collapsed', params: {animationDuration: this.animationDuration || 0}}"
                  (@toggle.start)="animationStart()"
                  (@toggle.done)="animationDone($event)"
                  >
                  @if (bodyTemplate) {
                    <ng-template
                      [ngTemplateOutlet]="bodyTemplate?.templateRef"
                      [ngTemplateOutletContext]="{ $implicit: event, index: index}">
                      >
                    </ng-template>
                  }
                  @if (!bodyTemplate) {
                    <div class="k-card-description">
                      @if (event.description) {
                        <p>{{ event.description }}</p>
                      }
                      @for (image of event.images; track image) {
                        @if (image.alt) {
                          <img kendoCardMedia [src]="image.src" [alt]="image.alt" />
                        }
                        @if (!image.alt) {
                          <img kendoCardMedia [src]="image.src" />
                        }
                      }
                    </div>
                  }
                </kendo-card-body>
              }
              @if (event.actions) {
                <kendo-card-actions
                  [@toggle]="{value: expanded ? 'expanded' : 'collapsed', params: {animationDuration: this.animationDuration || 0}}"
                  >
                  @if (actionsTemplate) {
                    <ng-template
                      [ngTemplateOutlet]="actionsTemplate?.templateRef"
                      [ngTemplateOutletContext]="{ $implicit: event, index: index}">
                      >
                    </ng-template>
                  }
                  @if (!actionsTemplate) {
                    @for (action of event.actions; track action) {
                      <a
                        [href]="action.url"
                        [target]="action.target === 'blank' ? '_blank' : '_self'"
                        (click)="onActionClick($event)"
                        class="k-button k-button-md k-rounded-md k-button-flat k-button-flat-primary"
                        role="button"
                        >
                        {{ action.text }}
                      </a>
                    }
                  }
                </kendo-card-actions>
              }
            </div>
          }
        </kendo-card>
        `,
      standalone: true,
      imports: [CardComponent, NgStyle, NgClass, CardHeaderComponent, NgTemplateOutlet, CardTitleDirective, ButtonComponent, CardSubtitleDirective, CardBodyComponent, CardMediaDirective, CardActionsComponent]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: TimelineService
  }, {
    type: Renderer2
  }], {
    event: [{
      type: Input
    }],
    expanded: [{
      type: Input
    }],
    collapsible: [{
      type: Input
    }],
    reversed: [{
      type: Input
    }],
    orientation: [{
      type: Input
    }],
    navigable: [{
      type: Input
    }],
    tabIndex: [{
      type: Input
    }],
    animationDuration: [{
      type: Input
    }],
    index: [{
      type: Input
    }],
    eventWidth: [{
      type: Input
    }],
    eventHeight: [{
      type: Input
    }],
    headerTemplate: [{
      type: Input
    }],
    bodyTemplate: [{
      type: Input
    }],
    actionsTemplate: [{
      type: Input
    }],
    calloutStyle: [{
      type: Input
    }],
    calloutElementRef: [{
      type: ViewChild,
      args: ["callout"]
    }],
    hostClass: [{
      type: HostBinding,
      args: ["class.k-timeline-card"]
    }],
    collapsedClass: [{
      type: HostBinding,
      args: ["class.k-collapsed"]
    }],
    onComponentKeyDown: [{
      type: HostListener,
      args: ["keydown", ["$event"]]
    }]
  });
})();
var DEFAULT_TAB_WIDTH = 200;
var SPACE_BETWEEN_TABS = 25;
var TRANSITION_EVENTS_COUNT = 3;
var TimelineHorizontalComponent = class _TimelineHorizontalComponent {
  cdr;
  _zone;
  renderer;
  timelineService;
  localization;
  events = [];
  alterMode;
  collapsibleEvents;
  navigable;
  showDateLabels;
  animationDuration;
  eventHeight;
  dateFormat;
  headerTemplate;
  bodyTemplate;
  actionsTemplate;
  cardElementRefs;
  circleElementRefs;
  flagElementRefs;
  trackElementRef;
  scrollableTrackElementRef;
  cardComponents;
  get selectedEvent() {
    return this._selectedEvent;
  }
  set selectedEvent(value) {
    if (this._selectedEvent === value) {
      return;
    }
    const newSelectedIndex = this.events.findIndex((event) => event === value);
    if (newSelectedIndex === -1 && value !== null) {
      return;
    }
    this._selectedEvent = value;
    this.selectedEventIndex = newSelectedIndex;
    this.calloutStyle = this.calloutOffset;
  }
  trackWrapWidth;
  scrollableTrackWidth;
  cardWidth;
  svgLeftIcon = caretAltLeftIcon;
  svgRightIcon = caretAltRightIcon;
  calloutStyle;
  animationState = "center";
  translateValue = 0;
  eventsInInterval = [0, 1, 2];
  selectedCardIndex = 0;
  selectedEventIndex;
  tabFlex;
  tabWidth = DEFAULT_TAB_WIDTH;
  visibleTabsCount;
  firstCircleInView = 0;
  visibleEvents = [];
  trackItems = [];
  previousTitle = "previous";
  nextTitle = "next";
  _selectedEvent;
  subscriptions = new Subscription();
  constructor(cdr, _zone, renderer, timelineService, localization) {
    this.cdr = cdr;
    this._zone = _zone;
    this.renderer = renderer;
    this.timelineService = timelineService;
    this.localization = localization;
  }
  ngOnInit() {
    this.l10nChange();
    this.subscriptions.add(this.localization.changes.subscribe(this.l10nChange.bind(this)));
    if (this.events.length > 0) {
      this.selectedEvent = this.events[0];
    }
    this.events.forEach((event) => {
      if (event.flag) {
        this.trackItems.push({
          isFlag: event.flag
        });
      }
      this.trackItems.push(event);
    });
  }
  ngAfterViewInit() {
    if (!isDocumentAvailable()) {
      return;
    }
    this.subscriptions.add(this.renderer.listen(this.trackElementRef.nativeElement, "keydown", this.onKeyDown.bind(this)));
    this.trackWrapWidth = this.trackElementRef.nativeElement.getBoundingClientRect().width;
    this.scrollableTrackWidth = this.scrollableTrackElementRef.nativeElement.getBoundingClientRect().width;
    this._zone.runOutsideAngular(() => {
      this.onCirclesChange();
      this.subscriptions.add(this.circleElementRefs.changes.subscribe(this.onCirclesChange.bind(this)));
      this.subscriptions.add(this.cardElementRefs.changes.subscribe(this.onCardsChange.bind(this)));
    });
    if (this.events.length === 0) {
      return;
    }
    this.onCardsChange();
    if (this.cardComponents.get(this.selectedCardIndex)) {
      this.cardComponents.get(this.selectedCardIndex).calloutStyle = this.calloutOffset;
      this.focusTrackItem(0);
    }
  }
  ngOnChanges(changes) {
    if (isChanged("events", changes)) {
      if (!this.events || this.events.length === 0) {
        this.selectedEvent = null;
        this.trackItems = [];
        this.visibleEvents = [];
      } else {
        this.trackItems = [];
        this.events.forEach((event) => {
          if (event.flag) {
            this.trackItems.push({
              isFlag: event.flag
            });
          }
          this.trackItems.push(event);
        });
        this.navigateToFirstInterval();
      }
    }
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  onResize() {
    if (!isDocumentAvailable()) {
      return;
    }
    if (this.trackWrapWidth === this.trackElementRef.nativeElement.getBoundingClientRect().width) {
      return;
    }
    this.cardWidth = this.cardComponents.get(this.selectedCardIndex).element.nativeElement.offsetWidth;
    this.transformCards();
    this.trackWrapWidth = this.trackElementRef.nativeElement.getBoundingClientRect().width;
    this.scrollableTrackWidth = this.scrollableTrackElementRef.nativeElement.getBoundingClientRect().width;
    this.changeTabsCount();
    this._zone.run(() => {
      this.cardComponents.get(this.selectedCardIndex).calloutStyle = this.calloutOffset;
    });
  }
  onTransitionEnd() {
    this.cardElementRefs?.forEach((card) => this.renderer.removeStyle(card.nativeElement, "transition-duration"));
    this.cardComponents.get(this.selectedCardIndex).event = this.selectedEvent;
    this.calloutStyle = this.calloutOffset;
  }
  onTrackTransitionEnd() {
    this.calloutStyle = this.calloutOffset;
  }
  onSlideDone() {
    this.calloutStyle = this.calloutOffset;
  }
  previous() {
    if (this.firstCircleInView === 0) {
      return;
    }
    this.updateInterval(false);
  }
  previousClick() {
    this.previous();
    this.timelineService.onNavigate("previous");
  }
  next() {
    if (!this.visibleTabsCount || this.firstCircleInView + this.visibleTabsCount > this.trackItems.length) {
      return;
    }
    this.updateInterval(true);
  }
  nextClick() {
    this.next();
    this.timelineService.onNavigate("next");
  }
  open(index) {
    if (index < 0 || index >= this.events.length) {
      return;
    }
    if (this.visibleEvents.findIndex((event) => event === this.events[index]) === -1) {
      const trackItemIndex = this.trackItems.findIndex((event) => event === this.events[index]);
      const start = Math.floor(trackItemIndex / this.visibleTabsCount) * this.visibleTabsCount;
      this.navigateToInterval(start, index);
    }
    this.selectedEvent = this.events[index];
    this.selectedCardIndex = this.getOtherSelectedCardIndex(index > this.selectedEventIndex);
    this.calloutStyle = this.calloutOffset;
    this.focusTrackItem(this.selectedEventIndex);
    this.animateCards();
  }
  navigateToEvent(index) {
    const eventIndex = this.events.findIndex((event) => event === this.trackItems[index]);
    if (this.selectedEventIndex === eventIndex) {
      return;
    }
    this.selectedEvent = this.events[eventIndex];
    this.selectedCardIndex = this.getOtherSelectedCardIndex(index > eventIndex);
    this.calloutStyle = this.calloutOffset;
    this.animateCards();
  }
  getOtherSelectedCardIndex(forward) {
    if (forward) {
      return this.selectedCardIndex === 0 ? TRANSITION_EVENTS_COUNT - 1 : this.selectedCardIndex - 1;
    }
    return this.selectedCardIndex === TRANSITION_EVENTS_COUNT - 1 ? 0 : this.selectedCardIndex + 1;
  }
  tabStyle() {
    if (!this.tabFlex) {
      return {};
    }
    return {
      "flex": `1 0 ${this.tabFlex}%`
    };
  }
  getTransformation(width, position) {
    if (position === this.selectedCardIndex - 1 || position === this.selectedCardIndex + 2) {
      return `translate3d(${-width}px, 0, 0)`;
    }
    if (position === this.selectedCardIndex + 1 || position === this.selectedCardIndex - 2) {
      return `translate3d(${width}px, 0, 0)`;
    }
    return `translate3d(0, 0, 0)`;
  }
  getState(position) {
    if (position === this.selectedCardIndex) {
      return "center";
    }
    if (position === this.selectedCardIndex - 1 || position === this.selectedCardIndex + 2) {
      return "left";
    }
    return "right";
  }
  get calloutOffset() {
    if (!isDocumentAvailable() || !this.circleElementRefs?.first || !this.trackElementRef || !isPresent(this.selectedEventIndex)) {
      return {};
    }
    const circleCenter = this.circleElementRefs.get(this.selectedEventIndex).nativeElement.getBoundingClientRect().left + this.circleElementRefs.get(this.selectedEventIndex).nativeElement.offsetWidth / 2;
    const trackOffset = this.trackElementRef.nativeElement.getBoundingClientRect().left;
    return {
      left: `${circleCenter - trackOffset}px`
    };
  }
  get isFirstRange() {
    return this.firstCircleInView === 0;
  }
  get isLastRange() {
    if (!this.circleElementRefs?.first && !this.flagElementRefs?.first) {
      return false;
    }
    return this.trackItems.length === 0 || this.firstCircleInView + this.visibleTabsCount >= this.trackItems.length;
  }
  onCardsChange() {
    if (this.cardElementRefs?.get(this.selectedCardIndex)) {
      this.cardWidth = this.cardElementRefs.get(this.selectedCardIndex).nativeElement.offsetWidth;
      this.transformCards();
    }
  }
  onCirclesChange() {
    if (!this.circleElementRefs?.first) {
      return;
    }
    this.circleElementRefs.map((element) => element.nativeElement).forEach((element, index) => {
      this.subscriptions.add(this.renderer.listen(element, "click", () => {
        this.focusTrackItem(index);
      }));
    });
    const width = this.circleElementRefs.first.nativeElement.getBoundingClientRect().width;
    if (width > DEFAULT_TAB_WIDTH) {
      this.tabWidth = this.circleElementRefs.first.nativeElement.getBoundingClientRect().width + SPACE_BETWEEN_TABS;
    }
    this.changeTabsCount();
    this.visibleEvents = this.trackItems.slice(this.firstCircleInView, this.firstCircleInView + this.visibleTabsCount).filter((event) => !event.isFlag);
  }
  onKeyDown(event) {
    if (!this.navigable) {
      return;
    }
    const code = normalizeKeys(event);
    event.preventDefault();
    if (code === Keys.Home) {
      this.onHomeKey();
    } else if (code === Keys.End) {
      this.onEndKey();
    } else if (code === Keys.ArrowRight) {
      this.onArrowRightKey();
    } else if (code === Keys.ArrowLeft) {
      this.onArrowLeftKey();
    }
  }
  focusTrackItem(index) {
    if (!isDocumentAvailable()) {
      return;
    }
    if (!this.circleElementRefs || index < 0 || index >= this.circleElementRefs.length) {
      return;
    }
    const selectedTrackItem = this.circleElementRefs.find((element) => element.nativeElement.hasAttribute("aria-selected"));
    if (selectedTrackItem) {
      this.removeTrackItemAttributes(selectedTrackItem);
      this.removeCardsAttributes();
    }
    const newTrackItem = this.circleElementRefs.get(index).nativeElement;
    this.setTrackItemAttributes(newTrackItem, index);
  }
  setTrackItemAttributes(element, index) {
    if (!isDocumentAvailable()) {
      return;
    }
    const innerCard = this.cardComponents.get(this.selectedCardIndex).element.nativeElement.querySelector(".k-card");
    const selectedCircle = this.circleElementRefs.get(index).nativeElement;
    this.renderer.addClass(element, "k-focus");
    this.renderer.setAttribute(element, "aria-selected", "true");
    this.assignAriaLabel(innerCard, selectedCircle);
    this.assignAriaDescribedBy(innerCard, selectedCircle);
  }
  removeTrackItemAttributes(element) {
    this.renderer.removeClass(element.nativeElement, "k-focus");
    this.renderer.removeAttribute(element.nativeElement, "aria-selected");
    this.renderer.removeAttribute(element.nativeElement, "id");
    this.renderer.removeAttribute(element.nativeElement, "aria-describedby");
  }
  removeCardsAttributes() {
    this.cardElementRefs.forEach((card) => {
      this.renderer.removeAttribute(card.nativeElement.querySelector(".k-card"), "id");
      this.renderer.removeAttribute(card.nativeElement.querySelector(".k-card"), "aria-label");
    });
  }
  assignAriaLabel(cardElement, dateElement) {
    const dateLabelId = `k-${guid()}`;
    this.renderer.setAttribute(dateElement, "id", dateLabelId);
    this.renderer.setAttribute(cardElement, "aria-label", dateLabelId);
  }
  assignAriaDescribedBy(cardElement, dateElement) {
    const cardId = `k-${guid()}`;
    this.renderer.setAttribute(cardElement, "id", cardId);
    this.renderer.setAttribute(dateElement, "aria-describedby", cardId);
  }
  updateInterval(forward) {
    let start = forward ? this.firstCircleInView + this.visibleTabsCount : this.firstCircleInView - this.visibleTabsCount;
    if (start < 0 || start >= this.trackItems.length) {
      start = 0;
    }
    this.navigateToInterval(start, 0, forward, !forward);
  }
  onHomeKey() {
    if (this.selectedEvent === this.events[0]) {
      return;
    }
    this.navigateToFirstInterval();
  }
  onEndKey() {
    if (this.selectedEvent === this.events[this.events.length - 1]) {
      return;
    }
    this.navigateToLastInterval();
  }
  onArrowRightKey() {
    this.navigateToOtherEvent(true);
  }
  onArrowLeftKey() {
    this.navigateToOtherEvent(false);
  }
  navigateToFirstInterval() {
    this.navigateToInterval(0);
  }
  navigateToLastInterval() {
    const start = Math.floor((this.trackItems.length - 1) / this.visibleTabsCount) * this.visibleTabsCount;
    this.navigateToInterval(start, this.events.length - 1);
  }
  navigateToOtherEvent(direction) {
    const offset = direction ? 1 : -1;
    const newIndex = this.selectedEventIndex + offset;
    if (newIndex < 0 || newIndex >= this.events.length) {
      return;
    }
    if (this.visibleEvents.findIndex((event) => event === this.events[newIndex]) === -1) {
      this.updateInterval(direction);
    } else {
      this.selectedEvent = this.events[newIndex];
      this.selectedCardIndex = this.getOtherSelectedCardIndex(direction);
      this.focusTrackItem(this.selectedEventIndex);
      this.animateCards();
      this.cdr.markForCheck();
    }
  }
  navigateToInterval(start, selectedIndex = 0, selectFirst = false, selectLast = false) {
    const end = start + this.visibleTabsCount < this.trackItems.length ? start + this.visibleTabsCount : void 0;
    const forward = this.firstCircleInView < start;
    this.firstCircleInView = start;
    const interval = Math.floor(start / this.visibleTabsCount);
    this.translateValue = interval * -100;
    this.animationState = forward ? "right" : "left";
    this.visibleEvents = this.trackItems.slice(this.firstCircleInView, end).filter((event) => !event.isFlag);
    if (selectFirst) {
      this.selectedEvent = this.visibleEvents[0];
    } else if (selectLast) {
      this.selectedEvent = this.visibleEvents[this.visibleEvents.length - 1];
    } else {
      this.selectedEvent = this.events[selectedIndex];
    }
    this.selectedCardIndex = this.getOtherSelectedCardIndex(forward);
    this.cdr.detectChanges();
    this.focusTrackItem(this.selectedEventIndex);
    this.animateCards();
    this.calloutStyle = this.calloutOffset;
    this.cdr.markForCheck();
  }
  animateCards() {
    if (this.animationDuration) {
      this.cardComponents.get(this.selectedCardIndex).event = null;
    }
    this.cardElementRefs.forEach((card, index) => {
      this.renderer.setStyle(card.nativeElement, "transform", this.getTransformation(this.cardWidth, index));
      this.renderer.setStyle(card.nativeElement, "transition-duration", `${this.animationDuration || 0}ms`);
    });
  }
  transformCards() {
    this.cardElementRefs.forEach((card, index) => this.renderer.setStyle(card.nativeElement, "transform", this.getTransformation(this.cardWidth, index)));
  }
  changeTabsCount() {
    this.visibleTabsCount = Math.round(this.scrollableTrackWidth / this.tabWidth);
    if (this.tabFlex !== 100 / this.visibleTabsCount) {
      this.tabFlex = 100 / this.visibleTabsCount;
      this.circleElementRefs.forEach((item) => this.renderer.setStyle(item.nativeElement, "flex", `1 0 ${this.tabFlex}%`));
      this.flagElementRefs.forEach((item) => this.renderer.setStyle(item.nativeElement, "flex", `1 0 ${this.tabFlex}%`));
      this.cdr.detectChanges();
      this.visibleEvents = this.trackItems.slice(this.firstCircleInView, this.firstCircleInView + this.visibleTabsCount).filter((event) => !event.isFlag);
      if (!this.visibleEvents.find((event) => event === this.selectedEvent)) {
        const trackItemIndex = this.trackItems.findIndex((event) => event === this.selectedEvent);
        this.navigateToInterval(trackItemIndex, this.selectedEventIndex);
      }
    }
  }
  l10nChange() {
    if (this.localization.get("previous")) {
      this.previousTitle = this.localization.get("previous");
    }
    if (this.localization.get("next")) {
      this.nextTitle = this.localization.get("next");
    }
    this.cdr.markForCheck();
  }
  static ɵfac = function TimelineHorizontalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TimelineHorizontalComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(TimelineService), ɵɵdirectiveInject(LocalizationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _TimelineHorizontalComponent,
    selectors: [["kendo-timeline-horizontal"]],
    viewQuery: function TimelineHorizontalComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c35, 5);
        ɵɵviewQuery(_c36, 5);
        ɵɵviewQuery(_c37, 5, ElementRef);
        ɵɵviewQuery(_c38, 5);
        ɵɵviewQuery(_c39, 5);
        ɵɵviewQuery(TimelineCardComponent, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.trackElementRef = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.scrollableTrackElementRef = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.cardElementRefs = _t);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.circleElementRefs = _t);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.flagElementRefs = _t);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.cardComponents = _t);
      }
    },
    inputs: {
      events: "events",
      alterMode: "alterMode",
      collapsibleEvents: "collapsibleEvents",
      navigable: "navigable",
      showDateLabels: "showDateLabels",
      animationDuration: "animationDuration",
      eventHeight: "eventHeight",
      dateFormat: "dateFormat",
      headerTemplate: "headerTemplate",
      bodyTemplate: "bodyTemplate",
      actionsTemplate: "actionsTemplate"
    },
    exportAs: ["kendoTimelineHorizontal"],
    standalone: true,
    features: [ɵɵProvidersFeature([]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    decls: 12,
    vars: 16,
    consts: [["track", ""], ["scrollableTrack", ""], ["trackFlag", ""], ["trackCircle", ""], ["card", ""], [1, "k-timeline-track-wrap"], ["kendoButton", "", "icon", "caret-alt-left", "rounded", "full", "tabindex", "-1", "type", "button", 1, "k-timeline-arrow", "k-timeline-arrow-left", 3, "click", "svgIcon", "title", "disabled"], ["kendoButton", "", "icon", "caret-alt-right", "rounded", "full", "tabindex", "-1", "type", "button", 1, "k-timeline-arrow", "k-timeline-arrow-right", 3, "click", "svgIcon", "title", "disabled"], [1, "k-timeline-track"], [1, "k-timeline-scrollable-wrap", 3, "transitionend"], [1, "k-timeline-events-list"], [1, "k-timeline-scrollable-wrap", 3, "ngStyle"], [3, "resize", "rateLimit"], [1, "k-timeline-flag-wrap", "k-timeline-track-item", 3, "ngStyle"], [1, "k-timeline-track-item", 3, "ngStyle"], [1, "k-timeline-flag"], [1, "k-timeline-track-item", 3, "click", "ngStyle"], [1, "k-timeline-date-wrap"], [1, "k-timeline-date"], [1, "k-timeline-circle"], [1, "k-timeline-event"], [1, "k-timeline-event", 3, "transitionend"], ["orientation", "horizontal", 3, "event", "expanded", "collapsible", "calloutStyle", "ngStyle", "tabIndex", "navigable", "index", "headerTemplate", "bodyTemplate", "actionsTemplate", "eventHeight"]],
    template: function TimelineHorizontalComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "div", 5, 0)(2, "button", 6);
        ɵɵlistener("click", function TimelineHorizontalComponent_Template_button_click_2_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.previousClick());
        });
        ɵɵelementEnd();
        ɵɵelementStart(3, "button", 7);
        ɵɵlistener("click", function TimelineHorizontalComponent_Template_button_click_3_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.nextClick());
        });
        ɵɵelementEnd();
        ɵɵelementStart(4, "div", 8)(5, "ul", 9, 1);
        ɵɵlistener("@trackSlide.done", function TimelineHorizontalComponent_Template_ul_animation_trackSlide_done_5_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onSlideDone());
        })("transitionend", function TimelineHorizontalComponent_Template_ul_transitionend_5_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onTrackTransitionEnd());
        });
        ɵɵrepeaterCreate(7, TimelineHorizontalComponent_For_8_Template, 2, 2, null, null, ɵɵrepeaterTrackByIdentity);
        ɵɵelementEnd()()();
        ɵɵelementStart(9, "div", 10);
        ɵɵtemplate(10, TimelineHorizontalComponent_Conditional_10_Template, 3, 8, "ul", 11);
        ɵɵelementStart(11, "kendo-resize-sensor", 12);
        ɵɵlistener("resize", function TimelineHorizontalComponent_Template_kendo_resize_sensor_resize_11_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onResize());
        });
        ɵɵelementEnd()();
      }
      if (rf & 2) {
        ɵɵadvance(2);
        ɵɵproperty("svgIcon", ctx.svgLeftIcon)("title", ctx.previousTitle)("disabled", ctx.isFirstRange);
        ɵɵadvance();
        ɵɵproperty("svgIcon", ctx.svgRightIcon)("title", ctx.nextTitle)("disabled", ctx.isLastRange);
        ɵɵadvance(2);
        ɵɵproperty("@trackSlide", ɵɵpureFunction2(13, _c34, ctx.animationState, ɵɵpureFunction1(11, _c40, ctx.translateValue)));
        ɵɵattribute("role", "tablist")("tabindex", "0");
        ɵɵadvance(2);
        ɵɵrepeater(ctx.trackItems);
        ɵɵadvance(3);
        ɵɵconditional(ctx.selectedEvent ? 10 : -1);
        ɵɵadvance();
        ɵɵproperty("rateLimit", 10);
      }
    },
    dependencies: [ButtonComponent, NgStyle, TimelineCardComponent, DatePipe, ResizeSensorComponent],
    encapsulation: 2,
    data: {
      animation: [trigger("trackSlide", [state("left", style({
        transform: `translateX({{transformValue}}%)`
      }), {
        params: {
          transformValue: "0"
        }
      }), state("right", style({
        transform: `translateX({{transformValue}}%)`
      }), {
        params: {
          transformValue: "0"
        }
      }), state("center", style({
        transform: `translateX(0)`
      }))]), trigger("eventsSlide", [transition("* => right", [animate("{{animationDuration}}ms", style({
        transform: `translateX(-100%)`
      }))], {
        params: {
          animationDuration: "400"
        }
      }), transition("* => left", [animate("{{animationDuration}}ms", style({
        transform: `translateX(100%)`
      }))], {
        params: {
          animationDuration: "400"
        }
      })])]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimelineHorizontalComponent, [{
    type: Component,
    args: [{
      animations: [trigger("trackSlide", [state("left", style({
        transform: `translateX({{transformValue}}%)`
      }), {
        params: {
          transformValue: "0"
        }
      }), state("right", style({
        transform: `translateX({{transformValue}}%)`
      }), {
        params: {
          transformValue: "0"
        }
      }), state("center", style({
        transform: `translateX(0)`
      }))]), trigger("eventsSlide", [transition("* => right", [animate("{{animationDuration}}ms", style({
        transform: `translateX(-100%)`
      }))], {
        params: {
          animationDuration: "400"
        }
      }), transition("* => left", [animate("{{animationDuration}}ms", style({
        transform: `translateX(100%)`
      }))], {
        params: {
          animationDuration: "400"
        }
      })])],
      providers: [],
      exportAs: "kendoTimelineHorizontal",
      selector: "kendo-timeline-horizontal",
      template: `
        <div class="k-timeline-track-wrap" #track>
          <button
            kendoButton
            [svgIcon]="svgLeftIcon"
            icon="caret-alt-left"
            class="k-timeline-arrow k-timeline-arrow-left"
            rounded="full"
            [title]="previousTitle"
            (click)="previousClick()"
            [disabled]="isFirstRange"
            tabindex="-1"
            type="button"
          ></button>
          <button
            kendoButton
            [svgIcon]="svgRightIcon"
            icon="caret-alt-right"
            class="k-timeline-arrow k-timeline-arrow-right"
            rounded="full"
            [title]="nextTitle"
            (click)="nextClick()"
            [disabled]="isLastRange"
            tabindex="-1"
            type="button"
          ></button>
          <div class="k-timeline-track">
            <ul class="k-timeline-scrollable-wrap"
              #scrollableTrack
              [attr.role]="'tablist'"
              [attr.tabindex]="'0'"
              [@trackSlide]="{value: animationState, params: {transformValue: this.translateValue}}"
              (@trackSlide.done)="onSlideDone()"
              (transitionend)="onTrackTransitionEnd()"
              >
              @for (event of trackItems; track event; let index = $index) {
                @if (event.isFlag) {
                  <li
                    #trackFlag
                    class="k-timeline-flag-wrap k-timeline-track-item"
                    [attr.role]="'none'"
                    [attr.aria-hidden]="true"
                    [ngStyle]="tabStyle()"
                    >
                    <span class="k-timeline-flag">{{ event.isFlag }}</span>
                  </li>
                }
                @if (!event.isFlag) {
                  <li
                    #trackCircle
                    class="k-timeline-track-item"
                    [attr.role]="'tab'"
                    (click)="navigateToEvent(index)"
                    [ngStyle]="tabStyle()"
                    >
                    <div class="k-timeline-date-wrap">
                      @if (showDateLabels) {
                        <span class="k-timeline-date">
                          {{ event.date | kendoDate: dateFormat }}
                        </span>
                      }
                    </div>
                    <span class="k-timeline-circle"></span>
                  </li>
                }
              }
            </ul>
          </div>
        </div>
        <div class="k-timeline-events-list">
          @if (selectedEvent) {
            <ul
              class="k-timeline-scrollable-wrap"
              [@eventsSlide]="{value: animationState, params: {animationDuration: this.animationDuration || 0}}"
              (@eventsSlide.done)="onSlideDone()"
              [ngStyle]="{'transform-origin': 'left top'}"
              >
              @for (event of eventsInInterval; track event; let index = $index) {
                <li
                  #card
                  class="k-timeline-event"
                  (transitionend)="onTransitionEnd()"
                  >
                  <kendo-timeline-card
                    [event]="selectedCardIndex === index ? selectedEvent : null"
                    [expanded]="true"
                    [collapsible]="collapsibleEvents"
                    [calloutStyle]="selectedCardIndex === index ? calloutStyle : {}"
                    [ngStyle]="{visibility: selectedCardIndex === index ? 'visible' : 'hidden' }"
                    [tabIndex]="selectedCardIndex === index ? '0' : '-1'"
                    [navigable]="navigable"
                    [index]="selectedEventIndex"
                    [headerTemplate]="headerTemplate"
                    [bodyTemplate]="bodyTemplate"
                    [actionsTemplate]="actionsTemplate"
                    [eventHeight]="eventHeight"
                    orientation="horizontal"
                    >
                  </kendo-timeline-card>
                </li>
              }
            </ul>
          }
          <kendo-resize-sensor (resize)="onResize()" [rateLimit]="10"></kendo-resize-sensor>
        </div>
        `,
      standalone: true,
      imports: [ButtonComponent, NgStyle, TimelineCardComponent, DatePipe, ResizeSensorComponent]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: NgZone
  }, {
    type: Renderer2
  }, {
    type: TimelineService
  }, {
    type: LocalizationService
  }], {
    events: [{
      type: Input
    }],
    alterMode: [{
      type: Input
    }],
    collapsibleEvents: [{
      type: Input
    }],
    navigable: [{
      type: Input
    }],
    showDateLabels: [{
      type: Input
    }],
    animationDuration: [{
      type: Input
    }],
    eventHeight: [{
      type: Input
    }],
    dateFormat: [{
      type: Input
    }],
    headerTemplate: [{
      type: Input
    }],
    bodyTemplate: [{
      type: Input
    }],
    actionsTemplate: [{
      type: Input
    }],
    cardElementRefs: [{
      type: ViewChildren,
      args: ["card", {
        read: ElementRef
      }]
    }],
    circleElementRefs: [{
      type: ViewChildren,
      args: ["trackCircle"]
    }],
    flagElementRefs: [{
      type: ViewChildren,
      args: ["trackFlag"]
    }],
    trackElementRef: [{
      type: ViewChild,
      args: ["track"]
    }],
    scrollableTrackElementRef: [{
      type: ViewChild,
      args: ["scrollableTrack"]
    }],
    cardComponents: [{
      type: ViewChildren,
      args: [TimelineCardComponent]
    }]
  });
})();
var TimelineVerticalComponent = class _TimelineVerticalComponent {
  renderer;
  events = [];
  alterMode;
  collapsibleEvents;
  navigable;
  showDateLabels;
  animationDuration;
  eventWidth;
  dateFormat;
  headerTemplate;
  bodyTemplate;
  actionsTemplate;
  cards;
  dateElementRefs;
  innerDateElementRefs;
  subscriptions = new Subscription();
  constructor(renderer) {
    this.renderer = renderer;
  }
  ngAfterViewInit() {
    this.ariaDescribedByAllEvents();
    this.subscriptions.add(this.innerDateElementRefs.changes.subscribe(() => {
      if (this.innerDateElementRefs?.length > 0) {
        this.ariaDescribedByAllEvents();
      } else {
        this.removeAriaDescribedBy();
      }
    }));
  }
  expand(index) {
    if (index < 0 || index >= this.cards.length) {
      return;
    }
    this.cards.get(index).expand();
  }
  collapse(index) {
    if (index < 0 || index >= this.cards.length) {
      return;
    }
    this.cards.get(index).collapse();
  }
  ariaDescribedByAllEvents() {
    this.cards?.forEach((card, index) => {
      const innerCard = card.element.nativeElement.querySelector(".k-card");
      const innerDate = this.dateElementRefs.get(index).nativeElement.querySelector(".k-timeline-date");
      if (innerDate) {
        this.assignAriaDescribedBy(innerCard, innerDate);
      }
    });
  }
  removeAriaDescribedBy() {
    this.cards?.forEach((card) => {
      const innerCard = card.element.nativeElement.querySelector(".k-card");
      this.renderer.removeAttribute(innerCard, "aria-describedby");
    });
  }
  assignAriaDescribedBy(cardElement, dateElement) {
    const dateLabelId = `k-${guid()}`;
    this.renderer.setAttribute(dateElement, "id", dateLabelId);
    this.renderer.setAttribute(cardElement, "aria-describedby", dateLabelId);
  }
  static ɵfac = function TimelineVerticalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TimelineVerticalComponent)(ɵɵdirectiveInject(Renderer2));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _TimelineVerticalComponent,
    selectors: [["kendo-timeline-vertical"]],
    viewQuery: function TimelineVerticalComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c37, 5);
        ɵɵviewQuery(_c44, 5);
        ɵɵviewQuery(_c45, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.cards = _t);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.dateElementRefs = _t);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.innerDateElementRefs = _t);
      }
    },
    inputs: {
      events: "events",
      alterMode: "alterMode",
      collapsibleEvents: "collapsibleEvents",
      navigable: "navigable",
      showDateLabels: "showDateLabels",
      animationDuration: "animationDuration",
      eventWidth: "eventWidth",
      dateFormat: "dateFormat",
      headerTemplate: "headerTemplate",
      bodyTemplate: "bodyTemplate",
      actionsTemplate: "actionsTemplate"
    },
    exportAs: ["kendoTimelineVertical"],
    standalone: true,
    features: [ɵɵProvidersFeature([]), ɵɵStandaloneFeature],
    decls: 1,
    vars: 1,
    consts: [["dateWrap", ""], ["card", ""], ["innerDate", ""], [1, "k-timeline-event", 3, "ngClass"], [1, "k-timeline-flag-wrap"], [1, "k-timeline-date-wrap"], [1, "k-timeline-date"], [1, "k-timeline-circle"], ["orientation", "vertical", 3, "event", "expanded", "collapsible", "reversed", "tabIndex", "navigable", "animationDuration", "headerTemplate", "bodyTemplate", "actionsTemplate", "index", "eventWidth"], [1, "k-timeline-flag"]],
    template: function TimelineVerticalComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, TimelineVerticalComponent_Conditional_0_Template, 3, 0, "ul");
      }
      if (rf & 2) {
        ɵɵconditional(ctx.events && ctx.events.length > 0 ? 0 : -1);
      }
    },
    dependencies: [NgClass, TimelineCardComponent, DatePipe],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimelineVerticalComponent, [{
    type: Component,
    args: [{
      providers: [],
      exportAs: "kendoTimelineVertical",
      selector: "kendo-timeline-vertical",
      template: `
        @if (events && events.length > 0) {
          <ul>
            @for (event of events; track event; let i = $index) {
              @if (event.flag) {
                <li class="k-timeline-flag-wrap">
                  <span class="k-timeline-flag">{{ event.flag }}</span>
                </li>
              }
              <li class="k-timeline-event" [ngClass]="{ 'k-reverse': alterMode && i % 2 === 0 }">
                <div class="k-timeline-date-wrap" #dateWrap>
                  @if (showDateLabels) {
                    <span class="k-timeline-date" #innerDate>
                      {{ event.date | kendoDate: dateFormat }}
                    </span>
                  }
                </div>
                <span class="k-timeline-circle"></span>
                <kendo-timeline-card
                  #card
                  [event]="event"
                  [expanded]="event.expanded || !collapsibleEvents"
                  [collapsible]="collapsibleEvents"
                  [reversed]="alterMode && i % 2 === 0"
                  [tabIndex]="'0'"
                  [navigable]="navigable"
                  [animationDuration]="animationDuration"
                  [headerTemplate]="headerTemplate"
                  [bodyTemplate]="bodyTemplate"
                  [actionsTemplate]="actionsTemplate"
                  [index]="i"
                  [eventWidth]="eventWidth"
                  orientation="vertical"
                  >
                </kendo-timeline-card>
              </li>
            }
          </ul>
        }
        `,
      standalone: true,
      imports: [NgClass, TimelineCardComponent, DatePipe]
    }]
  }], () => [{
    type: Renderer2
  }], {
    events: [{
      type: Input
    }],
    alterMode: [{
      type: Input
    }],
    collapsibleEvents: [{
      type: Input
    }],
    navigable: [{
      type: Input
    }],
    showDateLabels: [{
      type: Input
    }],
    animationDuration: [{
      type: Input
    }],
    eventWidth: [{
      type: Input
    }],
    dateFormat: [{
      type: Input
    }],
    headerTemplate: [{
      type: Input
    }],
    bodyTemplate: [{
      type: Input
    }],
    actionsTemplate: [{
      type: Input
    }],
    cards: [{
      type: ViewChildren,
      args: ["card"]
    }],
    dateElementRefs: [{
      type: ViewChildren,
      args: ["dateWrap"]
    }],
    innerDateElementRefs: [{
      type: ViewChildren,
      args: ["innerDate"]
    }]
  });
})();
var LocalizedTimelineMessagesDirective = class _LocalizedTimelineMessagesDirective extends TimelineMessages {
  service;
  constructor(service) {
    super();
    this.service = service;
  }
  static ɵfac = function LocalizedTimelineMessagesDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LocalizedTimelineMessagesDirective)(ɵɵdirectiveInject(LocalizationService));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _LocalizedTimelineMessagesDirective,
    selectors: [["", "kendoTimelineLocalizedMessages", ""]],
    standalone: true,
    features: [ɵɵProvidersFeature([{
      provide: TimelineMessages,
      useExisting: forwardRef(() => _LocalizedTimelineMessagesDirective)
    }]), ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LocalizedTimelineMessagesDirective, [{
    type: Directive,
    args: [{
      providers: [{
        provide: TimelineMessages,
        useExisting: forwardRef(() => LocalizedTimelineMessagesDirective)
      }],
      selector: `[kendoTimelineLocalizedMessages]`,
      standalone: true
    }]
  }], () => [{
    type: LocalizationService
  }], null);
})();
var DEFAULT_HORIZONTAL_ANIMATION_DURATION = 400;
var DEFAULT_VERTICAL_ANIMATION_DURATION = 300;
var DEFAULT_EVENT_WIDTH = 400;
var DEFAULT_EVENT_HEIGHT = 600;
var DEFAULT_DATE_FORMAT = "MMMM dd, yyyy";
var TimelineComponent = class _TimelineComponent {
  timelineService;
  /**
   * An array of event instances which will be shown by the Timeline.
   */
  set events(events) {
    if (!isPresent(events)) {
      return;
    }
    this.originalData = events;
    this._events = processItems(this.originalData, this.modelFields);
    this.updateEvents();
  }
  get events() {
    return this._events;
  }
  /**
   * The names of the model fields from which the Timeline will read its data.
   */
  set modelFields(value) {
    this._modelFields = __spreadValues(__spreadValues({}, defaultModelFields), value);
    if (this.originalData) {
      this.events = this.originalData;
    }
  }
  get modelFields() {
    return this._modelFields;
  }
  /**
   * Specifies the orientation of the axis.
   *
   * @default 'vertical'
   */
  orientation = "vertical";
  /**
   * Specifies whether to render events alternatingly on both sides of the axis.
   * Applicable when `orientation` is set to `vertical`.
   *
   * @default false
   */
  alterMode = false;
  /**
   * Specifies whether the event cards can be collapsed.
   *
   * @default true
   */
  collapsibleEvents = true;
  /**
   * Specifies whether the user can use dedicated shortcuts to interact with the Timeline.
   *
   * @default true
   */
  navigable = true;
  /**
   * Specifies whether an event's date label will be visible.
   *
   * @default true
   */
  showDateLabels = true;
  /**
   * Specifies the time for sliding to the next event in `horizontal` mode and the time for collapsing the event in `vertical` mode.
   * The default animation duration values are `300ms` for `horizontal` mode and `400ms` for `vertical` mode.
   *
   * @default true
   */
  animation;
  /**
   * Specifies the order of the Timeline events.
   * `asc` - chronological order
   * `desc` - reverse-chronological order
   *
   * @default 'asc'
   */
  set eventsOrder(order) {
    if (order === this._eventsOrder) {
      return;
    }
    this._eventsOrder = order;
    this.updateEvents();
  }
  get eventsOrder() {
    return this._eventsOrder;
  }
  /**
   * Sets a specific width for the event.
   * This setting is supported only in `vertical` mode.
   *
   * @default 400
   */
  get eventWidth() {
    return this._eventWidth;
  }
  set eventWidth(value) {
    if (value) {
      this._eventWidth = value;
    } else {
      this._eventWidth = DEFAULT_EVENT_WIDTH;
    }
  }
  /**
   * Sets a specific height for the event.
   * This setting is supported only in `horizontal` mode.
   *
   * @default 600
   */
  get eventHeight() {
    return this._eventHeight;
  }
  set eventHeight(value) {
    if (value) {
      this._eventHeight = value;
    } else {
      this._eventHeight = DEFAULT_EVENT_HEIGHT;
    }
  }
  /**
   * @hidden
   */
  get animationDuration() {
    if (typeof this.animation === "number") {
      return this.animation;
    }
    if (typeof this.animation === "boolean" && this.animation || !isPresent(this.animation)) {
      return this.orientation === "horizontal" ? DEFAULT_HORIZONTAL_ANIMATION_DURATION : DEFAULT_VERTICAL_ANIMATION_DURATION;
    }
    return 0;
  }
  /**
   * Specifies the date format for displaying the event date.
   *
   * @default 'MMMM dd, yyyy'
   */
  set dateFormat(value) {
    if (isPresent(value) && value !== "") {
      this._dateFormat = value;
    } else {
      this._dateFormat = DEFAULT_DATE_FORMAT;
    }
  }
  get dateFormat() {
    return this._dateFormat;
  }
  hostClass = true;
  get verticalClass() {
    return this.orientation === "vertical";
  }
  get horizontalClass() {
    return this.orientation === "horizontal";
  }
  get alternatingClass() {
    return this.alterMode === true && this.orientation === "vertical";
  }
  get collapsibleClass() {
    return this.collapsibleEvents === true && this.orientation === "vertical";
  }
  /**
   * @hidden
   */
  timelineHorizontal;
  /**
   * @hidden
   */
  timelineVertical;
  /**
   * @hidden
   */
  cardHeaderTemplate;
  /**
   * @hidden
   */
  cardBodyTemplate;
  /**
   * @hidden
   */
  cardActionsTemplate;
  /**
   * Fires when a card is toggled.
   * This event is supported only in `vertical` mode.
   */
  onToggle = new EventEmitter();
  /**
   * Fires when a card's action is clicked.
   */
  onActionClick = new EventEmitter();
  /**
   * Fires when the left or right arrow is clicked.
   * This event is supported only in `horizontal` mode.
   */
  onNavigate = new EventEmitter();
  /**
   * @hidden
   */
  headerTemplate;
  /**
   * @hidden
   */
  bodyTemplate;
  /**
   * @hidden
   */
  actionsTemplate;
  _events = [];
  _modelFields = defaultModelFields;
  _eventWidth = DEFAULT_EVENT_WIDTH;
  _eventHeight = DEFAULT_EVENT_HEIGHT;
  _dateFormat = DEFAULT_DATE_FORMAT;
  originalData = [];
  _eventsOrder = "asc";
  subscriptions = new Subscription();
  constructor(timelineService) {
    this.timelineService = timelineService;
    this.timelineService.timeline = this;
  }
  ngAfterContentInit() {
    this.initTemplates();
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  /**
   * Switches to the previous portion of events.
   * This method is supported only in `horizontal` mode.
   */
  previous() {
    this.timelineHorizontal?.previous();
  }
  /**
   * Switches to the next portion of events.
   * This method is supported only in `horizontal` mode.
   */
  next() {
    this.timelineHorizontal?.next();
  }
  /**
   * Open event details.
   * This method is supported only in `horizontal` mode.
   */
  open(index) {
    this.timelineHorizontal?.open(index);
  }
  /**
   * Expands an event.
   * This method is supported only in `vertical` mode.
   */
  expand(index) {
    this.timelineVertical?.expand(index);
  }
  /**
   * Collapses an event.
   * This method is supported only in `vertical` mode.
   */
  collapse(index) {
    this.timelineVertical?.collapse(index);
  }
  updateEvents() {
    const sortOrder = this._eventsOrder === "asc" ? 1 : -1;
    this._events = [...this._events].sort((a, b) => {
      return sortOrder * (a.date.getTime() - b.date.getTime());
    });
    if (this._events.length > 0) {
      let flag = this._events[0].date.getFullYear() - sortOrder;
      this._events.forEach((event) => {
        if (event.date.getFullYear() === flag) {
          event.flag = null;
        } else {
          flag = event.date.getFullYear();
          event.flag = flag;
        }
      });
    }
  }
  initTemplates() {
    this.headerTemplate = this.cardHeaderTemplate?.first;
    this.bodyTemplate = this.cardBodyTemplate?.first;
    this.actionsTemplate = this.cardActionsTemplate?.first;
    this.subscriptions.add(this.cardHeaderTemplate?.changes.subscribe(() => {
      this.headerTemplate = this.cardHeaderTemplate?.first || null;
    }));
    this.subscriptions.add(this.cardBodyTemplate?.changes.subscribe(() => {
      this.bodyTemplate = this.cardBodyTemplate?.first || null;
    }));
    this.subscriptions.add(this.cardActionsTemplate?.changes.subscribe(() => {
      this.actionsTemplate = this.cardActionsTemplate?.first || null;
    }));
  }
  static ɵfac = function TimelineComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TimelineComponent)(ɵɵdirectiveInject(TimelineService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _TimelineComponent,
    selectors: [["kendo-timeline"]],
    contentQueries: function TimelineComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, TimelineCardHeaderTemplateDirective, 4);
        ɵɵcontentQuery(dirIndex, TimelineCardBodyTemplateDirective, 4);
        ɵɵcontentQuery(dirIndex, TimelineCardActionsTemplateDirective, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.cardHeaderTemplate = _t);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.cardBodyTemplate = _t);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.cardActionsTemplate = _t);
      }
    },
    viewQuery: function TimelineComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(TimelineHorizontalComponent, 5);
        ɵɵviewQuery(TimelineVerticalComponent, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.timelineHorizontal = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.timelineVertical = _t.first);
      }
    },
    hostVars: 10,
    hostBindings: function TimelineComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("k-timeline", ctx.hostClass)("k-timeline-vertical", ctx.verticalClass)("k-timeline-horizontal", ctx.horizontalClass)("k-timeline-alternating", ctx.alternatingClass)("k-timeline-collapsible", ctx.collapsibleClass);
      }
    },
    inputs: {
      events: "events",
      modelFields: "modelFields",
      orientation: "orientation",
      alterMode: "alterMode",
      collapsibleEvents: "collapsibleEvents",
      navigable: "navigable",
      showDateLabels: "showDateLabels",
      animation: "animation",
      eventsOrder: "eventsOrder",
      eventWidth: "eventWidth",
      eventHeight: "eventHeight",
      dateFormat: "dateFormat"
    },
    outputs: {
      onToggle: "onToggle",
      onActionClick: "onActionClick",
      onNavigate: "onNavigate"
    },
    exportAs: ["kendoTimeline"],
    standalone: true,
    features: [ɵɵProvidersFeature([TimelineService, LocalizationService, {
      provide: L10N_PREFIX,
      useValue: "kendo.timeline"
    }]), ɵɵStandaloneFeature],
    decls: 4,
    vars: 2,
    consts: () => {
      let i18n_5;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_LAYOUT_FESM2022_PROGRESS_KENDO_ANGULAR_LAYOUT_MJS_5 = goog.getMsg("previous");
        i18n_5 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_LAYOUT_FESM2022_PROGRESS_KENDO_ANGULAR_LAYOUT_MJS_5;
      } else {
        i18n_5 = $localize`:kendo.timeline.previous|The title of the previous button in horizontal orientation.:previous`;
      }
      let i18n_6;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_LAYOUT_FESM2022_PROGRESS_KENDO_ANGULAR_LAYOUT_MJS_6 = goog.getMsg("next");
        i18n_6 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_LAYOUT_FESM2022_PROGRESS_KENDO_ANGULAR_LAYOUT_MJS_6;
      } else {
        i18n_6 = $localize`:kendo.timeline.next|The title of the next button in horizontal orientation.:next`;
      }
      return [["kendoTimelineLocalizedMessages", "", "previous", i18n_5], ["kendoTimelineLocalizedMessages", "", "next", i18n_6], [3, "events", "alterMode", "collapsibleEvents", "navigable", "showDateLabels", "animationDuration", "eventWidth", "dateFormat", "headerTemplate", "bodyTemplate", "actionsTemplate"], [3, "events", "collapsibleEvents", "navigable", "showDateLabels", "animationDuration", "eventHeight", "dateFormat", "headerTemplate", "bodyTemplate", "actionsTemplate"]];
    },
    template: function TimelineComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementContainer(0, 0)(1, 1);
        ɵɵtemplate(2, TimelineComponent_Conditional_2_Template, 1, 11, "kendo-timeline-vertical", 2)(3, TimelineComponent_Conditional_3_Template, 1, 10, "kendo-timeline-horizontal", 3);
      }
      if (rf & 2) {
        ɵɵadvance(2);
        ɵɵconditional(ctx.orientation === "vertical" ? 2 : -1);
        ɵɵadvance();
        ɵɵconditional(ctx.orientation === "horizontal" ? 3 : -1);
      }
    },
    dependencies: [LocalizedTimelineMessagesDirective, TimelineVerticalComponent, TimelineHorizontalComponent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimelineComponent, [{
    type: Component,
    args: [{
      providers: [TimelineService, LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.timeline"
      }],
      exportAs: "kendoTimeline",
      selector: "kendo-timeline",
      template: `
        <ng-container kendoTimelineLocalizedMessages
          i18n-previous="kendo.timeline.previous|The title of the previous button in horizontal orientation."
          previous="previous"
          >
        </ng-container>
        <ng-container kendoTimelineLocalizedMessages
          i18n-next="kendo.timeline.next|The title of the next button in horizontal orientation."
          next="next"
          >
        </ng-container>
        @if (orientation === 'vertical') {
          <kendo-timeline-vertical
            [events]="events"
            [alterMode]="alterMode"
            [collapsibleEvents]="collapsibleEvents"
            [navigable]="navigable"
            [showDateLabels]="showDateLabels"
            [animationDuration]="animationDuration"
            [eventWidth]="eventWidth"
            [dateFormat]="dateFormat"
            [headerTemplate]="headerTemplate"
            [bodyTemplate]="bodyTemplate"
            [actionsTemplate]="actionsTemplate"
            >
          </kendo-timeline-vertical>
        }
        @if (orientation === 'horizontal') {
          <kendo-timeline-horizontal
            [events]="events"
            [collapsibleEvents]="false"
            [navigable]="navigable"
            [showDateLabels]="showDateLabels"
            [animationDuration]="animationDuration"
            [eventHeight]="eventHeight"
            [dateFormat]="dateFormat"
            [headerTemplate]="headerTemplate"
            [bodyTemplate]="bodyTemplate"
            [actionsTemplate]="actionsTemplate"
            >
          </kendo-timeline-horizontal>
        }
        `,
      standalone: true,
      imports: [LocalizedTimelineMessagesDirective, TimelineVerticalComponent, TimelineHorizontalComponent]
    }]
  }], () => [{
    type: TimelineService
  }], {
    events: [{
      type: Input
    }],
    modelFields: [{
      type: Input
    }],
    orientation: [{
      type: Input
    }],
    alterMode: [{
      type: Input
    }],
    collapsibleEvents: [{
      type: Input
    }],
    navigable: [{
      type: Input
    }],
    showDateLabels: [{
      type: Input
    }],
    animation: [{
      type: Input
    }],
    eventsOrder: [{
      type: Input
    }],
    eventWidth: [{
      type: Input
    }],
    eventHeight: [{
      type: Input
    }],
    dateFormat: [{
      type: Input
    }],
    hostClass: [{
      type: HostBinding,
      args: ["class.k-timeline"]
    }],
    verticalClass: [{
      type: HostBinding,
      args: ["class.k-timeline-vertical"]
    }],
    horizontalClass: [{
      type: HostBinding,
      args: ["class.k-timeline-horizontal"]
    }],
    alternatingClass: [{
      type: HostBinding,
      args: ["class.k-timeline-alternating"]
    }],
    collapsibleClass: [{
      type: HostBinding,
      args: ["class.k-timeline-collapsible"]
    }],
    timelineHorizontal: [{
      type: ViewChild,
      args: [TimelineHorizontalComponent]
    }],
    timelineVertical: [{
      type: ViewChild,
      args: [TimelineVerticalComponent]
    }],
    cardHeaderTemplate: [{
      type: ContentChildren,
      args: [TimelineCardHeaderTemplateDirective, {
        descendants: false
      }]
    }],
    cardBodyTemplate: [{
      type: ContentChildren,
      args: [TimelineCardBodyTemplateDirective, {
        descendants: false
      }]
    }],
    cardActionsTemplate: [{
      type: ContentChildren,
      args: [TimelineCardActionsTemplateDirective, {
        descendants: false
      }]
    }],
    onToggle: [{
      type: Output
    }],
    onActionClick: [{
      type: Output
    }],
    onNavigate: [{
      type: Output
    }]
  });
})();
var KENDO_AVATAR = [AvatarComponent, AvatarCustomMessagesComponent];
var KENDO_CARD = [CardComponent, CardActionsComponent, CardBodyComponent, CardFooterComponent, CardHeaderComponent, CardMediaDirective, CardSeparatorDirective, CardSubtitleDirective, CardTitleDirective];
var KENDO_DRAWER = [DrawerComponent, DrawerContainerComponent, DrawerContentComponent, DrawerTemplateDirective, DrawerFooterTemplateDirective, DrawerHeaderTemplateDirective, DrawerItemTemplateDirective];
var KENDO_EXPANSIONPANEL = [ExpansionPanelComponent, ExpansionPanelTitleDirective];
var KENDO_GRIDLAYOUT = [GridLayoutComponent, GridLayoutItemComponent];
var KENDO_PANELBAR = [PanelBarComponent, PanelBarItemComponent, PanelBarContentDirective, PanelBarItemTemplateDirective, PanelBarItemTitleDirective];
var KENDO_SPLITTER = [SplitterComponent, SplitterPaneComponent];
var KENDO_STACKLAYOUT = [StackLayoutComponent];
var KENDO_STEPPER = [StepperComponent, StepperCustomMessagesComponent, StepperIndicatorTemplateDirective, StepperLabelTemplateDirective, StepperStepTemplateDirective];
var KENDO_TABSTRIP = [TabStripComponent, TabStripTabComponent, TabContentDirective, TabTitleDirective, TabStripCustomMessagesComponent];
var KENDO_TILELAYOUT = [TileLayoutComponent, TileLayoutItemBodyComponent, TileLayoutItemComponent, TileLayoutItemHeaderComponent];
var KENDO_TIMELINE = [TimelineComponent, TimelineCustomMessagesComponent, TimelineCardActionsTemplateDirective, TimelineCardBodyTemplateDirective, TimelineCardHeaderTemplateDirective];
var KENDO_LAYOUT = [...KENDO_AVATAR, ...KENDO_CARD, ...KENDO_DRAWER, ...KENDO_EXPANSIONPANEL, ...KENDO_GRIDLAYOUT, ...KENDO_PANELBAR, ...KENDO_SPLITTER, ...KENDO_STACKLAYOUT, ...KENDO_STEPPER, ...KENDO_TABSTRIP, ...KENDO_TILELAYOUT, ...KENDO_TIMELINE];
var AvatarModule = class _AvatarModule {
  static ɵfac = function AvatarModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AvatarModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _AvatarModule,
    imports: [AvatarComponent, AvatarCustomMessagesComponent],
    exports: [AvatarComponent, AvatarCustomMessagesComponent]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [AvatarComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AvatarModule, [{
    type: NgModule,
    args: [{
      exports: [...KENDO_AVATAR],
      imports: [...KENDO_AVATAR]
    }]
  }], null, null);
})();
var CardModule = class _CardModule {
  static ɵfac = function CardModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CardModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _CardModule,
    imports: [CardComponent, CardActionsComponent, CardBodyComponent, CardFooterComponent, CardHeaderComponent, CardMediaDirective, CardSeparatorDirective, CardSubtitleDirective, CardTitleDirective],
    exports: [CardComponent, CardActionsComponent, CardBodyComponent, CardFooterComponent, CardHeaderComponent, CardMediaDirective, CardSeparatorDirective, CardSubtitleDirective, CardTitleDirective]
  });
  static ɵinj = ɵɵdefineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardModule, [{
    type: NgModule,
    args: [{
      exports: [...KENDO_CARD],
      imports: [...KENDO_CARD]
    }]
  }], null, null);
})();
var DrawerModule = class _DrawerModule {
  static ɵfac = function DrawerModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DrawerModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _DrawerModule,
    imports: [DrawerComponent, DrawerContainerComponent, DrawerContentComponent, DrawerTemplateDirective, DrawerFooterTemplateDirective, DrawerHeaderTemplateDirective, DrawerItemTemplateDirective],
    exports: [DrawerComponent, DrawerContainerComponent, DrawerContentComponent, DrawerTemplateDirective, DrawerFooterTemplateDirective, DrawerHeaderTemplateDirective, DrawerItemTemplateDirective]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [DrawerComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DrawerModule, [{
    type: NgModule,
    args: [{
      exports: [...KENDO_DRAWER],
      imports: [...KENDO_DRAWER]
    }]
  }], null, null);
})();
var LayoutModule = class _LayoutModule {
  static ɵfac = function LayoutModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LayoutModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _LayoutModule,
    imports: [AvatarComponent, AvatarCustomMessagesComponent, CardComponent, CardActionsComponent, CardBodyComponent, CardFooterComponent, CardHeaderComponent, CardMediaDirective, CardSeparatorDirective, CardSubtitleDirective, CardTitleDirective, DrawerComponent, DrawerContainerComponent, DrawerContentComponent, DrawerTemplateDirective, DrawerFooterTemplateDirective, DrawerHeaderTemplateDirective, DrawerItemTemplateDirective, ExpansionPanelComponent, ExpansionPanelTitleDirective, GridLayoutComponent, GridLayoutItemComponent, PanelBarComponent, PanelBarItemComponent, PanelBarContentDirective, PanelBarItemTemplateDirective, PanelBarItemTitleDirective, SplitterComponent, SplitterPaneComponent, StackLayoutComponent, StepperComponent, StepperCustomMessagesComponent, StepperIndicatorTemplateDirective, StepperLabelTemplateDirective, StepperStepTemplateDirective, TabStripComponent, TabStripTabComponent, TabContentDirective, TabTitleDirective, TabStripCustomMessagesComponent, TileLayoutComponent, TileLayoutItemBodyComponent, TileLayoutItemComponent, TileLayoutItemHeaderComponent, TimelineComponent, TimelineCustomMessagesComponent, TimelineCardActionsTemplateDirective, TimelineCardBodyTemplateDirective, TimelineCardHeaderTemplateDirective],
    exports: [AvatarComponent, AvatarCustomMessagesComponent, CardComponent, CardActionsComponent, CardBodyComponent, CardFooterComponent, CardHeaderComponent, CardMediaDirective, CardSeparatorDirective, CardSubtitleDirective, CardTitleDirective, DrawerComponent, DrawerContainerComponent, DrawerContentComponent, DrawerTemplateDirective, DrawerFooterTemplateDirective, DrawerHeaderTemplateDirective, DrawerItemTemplateDirective, ExpansionPanelComponent, ExpansionPanelTitleDirective, GridLayoutComponent, GridLayoutItemComponent, PanelBarComponent, PanelBarItemComponent, PanelBarContentDirective, PanelBarItemTemplateDirective, PanelBarItemTitleDirective, SplitterComponent, SplitterPaneComponent, StackLayoutComponent, StepperComponent, StepperCustomMessagesComponent, StepperIndicatorTemplateDirective, StepperLabelTemplateDirective, StepperStepTemplateDirective, TabStripComponent, TabStripTabComponent, TabContentDirective, TabTitleDirective, TabStripCustomMessagesComponent, TileLayoutComponent, TileLayoutItemBodyComponent, TileLayoutItemComponent, TileLayoutItemHeaderComponent, TimelineComponent, TimelineCustomMessagesComponent, TimelineCardActionsTemplateDirective, TimelineCardBodyTemplateDirective, TimelineCardHeaderTemplateDirective]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [AvatarComponent, DrawerComponent, ExpansionPanelComponent, PanelBarComponent, PanelBarItemComponent, SplitterComponent, StepperComponent, TabStripComponent, TileLayoutComponent, TimelineComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LayoutModule, [{
    type: NgModule,
    args: [{
      exports: [...KENDO_LAYOUT],
      imports: [...KENDO_LAYOUT]
    }]
  }], null, null);
})();
var PanelBarModule = class _PanelBarModule {
  static ɵfac = function PanelBarModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PanelBarModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _PanelBarModule,
    imports: [PanelBarComponent, PanelBarItemComponent, PanelBarContentDirective, PanelBarItemTemplateDirective, PanelBarItemTitleDirective],
    exports: [PanelBarComponent, PanelBarItemComponent, PanelBarContentDirective, PanelBarItemTemplateDirective, PanelBarItemTitleDirective]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [PanelBarComponent, PanelBarItemComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PanelBarModule, [{
    type: NgModule,
    args: [{
      exports: [...KENDO_PANELBAR],
      imports: [...KENDO_PANELBAR]
    }]
  }], null, null);
})();
var SplitterModule = class _SplitterModule {
  static ɵfac = function SplitterModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SplitterModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _SplitterModule,
    imports: [SplitterComponent, SplitterPaneComponent],
    exports: [SplitterComponent, SplitterPaneComponent]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [SplitterComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SplitterModule, [{
    type: NgModule,
    args: [{
      exports: [...KENDO_SPLITTER],
      imports: [...KENDO_SPLITTER]
    }]
  }], null, null);
})();
var StepperModule = class _StepperModule {
  static ɵfac = function StepperModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StepperModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _StepperModule,
    imports: [StepperComponent, StepperCustomMessagesComponent, StepperIndicatorTemplateDirective, StepperLabelTemplateDirective, StepperStepTemplateDirective],
    exports: [StepperComponent, StepperCustomMessagesComponent, StepperIndicatorTemplateDirective, StepperLabelTemplateDirective, StepperStepTemplateDirective]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [StepperComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepperModule, [{
    type: NgModule,
    args: [{
      exports: [...KENDO_STEPPER],
      imports: [...KENDO_STEPPER]
    }]
  }], null, null);
})();
var TabStripModule = class _TabStripModule {
  static ɵfac = function TabStripModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TabStripModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _TabStripModule,
    imports: [TabStripComponent, TabStripTabComponent, TabContentDirective, TabTitleDirective, TabStripCustomMessagesComponent],
    exports: [TabStripComponent, TabStripTabComponent, TabContentDirective, TabTitleDirective, TabStripCustomMessagesComponent]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [TabStripComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabStripModule, [{
    type: NgModule,
    args: [{
      exports: [...KENDO_TABSTRIP],
      imports: [...KENDO_TABSTRIP]
    }]
  }], null, null);
})();
var ExpansionPanelModule = class _ExpansionPanelModule {
  static ɵfac = function ExpansionPanelModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExpansionPanelModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _ExpansionPanelModule,
    imports: [ExpansionPanelComponent, ExpansionPanelTitleDirective],
    exports: [ExpansionPanelComponent, ExpansionPanelTitleDirective]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [ExpansionPanelComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExpansionPanelModule, [{
    type: NgModule,
    args: [{
      exports: [...KENDO_EXPANSIONPANEL],
      imports: [...KENDO_EXPANSIONPANEL]
    }]
  }], null, null);
})();
var TileLayoutModule = class _TileLayoutModule {
  static ɵfac = function TileLayoutModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TileLayoutModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _TileLayoutModule,
    imports: [TileLayoutComponent, TileLayoutItemBodyComponent, TileLayoutItemComponent, TileLayoutItemHeaderComponent],
    exports: [TileLayoutComponent, TileLayoutItemBodyComponent, TileLayoutItemComponent, TileLayoutItemHeaderComponent]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [TileLayoutComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TileLayoutModule, [{
    type: NgModule,
    args: [{
      exports: [...KENDO_TILELAYOUT],
      imports: [...KENDO_TILELAYOUT]
    }]
  }], null, null);
})();
var StackLayoutModule = class _StackLayoutModule {
  static ɵfac = function StackLayoutModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StackLayoutModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _StackLayoutModule,
    imports: [StackLayoutComponent],
    exports: [StackLayoutComponent]
  });
  static ɵinj = ɵɵdefineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StackLayoutModule, [{
    type: NgModule,
    args: [{
      exports: [...KENDO_STACKLAYOUT],
      imports: [...KENDO_STACKLAYOUT]
    }]
  }], null, null);
})();
var GridLayoutModule = class _GridLayoutModule {
  static ɵfac = function GridLayoutModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GridLayoutModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _GridLayoutModule,
    imports: [GridLayoutComponent, GridLayoutItemComponent],
    exports: [GridLayoutComponent, GridLayoutItemComponent]
  });
  static ɵinj = ɵɵdefineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GridLayoutModule, [{
    type: NgModule,
    args: [{
      exports: [...KENDO_GRIDLAYOUT],
      imports: [...KENDO_GRIDLAYOUT]
    }]
  }], null, null);
})();
var TimelineModule = class _TimelineModule {
  static ɵfac = function TimelineModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TimelineModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _TimelineModule,
    imports: [TimelineComponent, TimelineCustomMessagesComponent, TimelineCardActionsTemplateDirective, TimelineCardBodyTemplateDirective, TimelineCardHeaderTemplateDirective],
    exports: [TimelineComponent, TimelineCustomMessagesComponent, TimelineCardActionsTemplateDirective, TimelineCardBodyTemplateDirective, TimelineCardHeaderTemplateDirective]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [TimelineComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimelineModule, [{
    type: NgModule,
    args: [{
      exports: [...KENDO_TIMELINE],
      imports: [...KENDO_TIMELINE]
    }]
  }], null, null);
})();

export {
  PanelBarExpandMode,
  PanelBarContentDirective,
  PanelBarItemTitleDirective,
  PanelBarItemComponent,
  PanelBarItemTemplateDirective,
  PanelBarCollapseEvent,
  PanelBarExpandEvent,
  PanelBarSelectEvent,
  PanelBarStateChangeEvent,
  PanelBarItemClickEvent,
  PanelBarComponent,
  SplitterPaneComponent,
  SplitterComponent,
  TabContentDirective,
  TabTitleDirective,
  TabTemplateDirective,
  TabStripTabComponent,
  TabCloseEvent,
  TabScrollEvent,
  SelectEvent,
  TabComponent,
  LocalizedTabStripMessagesDirective,
  TabStripComponent,
  TabStripCustomMessagesComponent,
  DrawerTemplateDirective,
  DrawerItemTemplateDirective,
  DrawerHeaderTemplateDirective,
  DrawerFooterTemplateDirective,
  DrawerComponent,
  DrawerContainerComponent,
  DrawerContentComponent,
  DrawerSelectEvent,
  StepperStepTemplateDirective,
  StepperLabelTemplateDirective,
  StepperIndicatorTemplateDirective,
  LocalizedStepperMessagesDirective,
  StepperComponent,
  StepperActivateEvent2 as StepperActivateEvent,
  StepperCustomMessagesComponent,
  LocalizedAvatarMessagesDirective,
  AvatarComponent,
  AvatarCustomMessagesComponent,
  CardComponent,
  CardHeaderComponent,
  CardBodyComponent,
  CardFooterComponent,
  CardActionsComponent,
  CardSeparatorDirective,
  CardTitleDirective,
  CardSubtitleDirective,
  CardMediaDirective,
  CardAction,
  ExpansionPanelTitleDirective,
  ExpansionPanelActionEvent,
  ExpansionPanelComponent,
  TileLayoutReorderEvent,
  TileLayoutResizeEvent,
  TileLayoutItemHeaderComponent,
  TileLayoutResizeHandleDirective,
  TileLayoutItemComponent,
  TileLayoutComponent,
  TileLayoutItemBodyComponent,
  GridLayoutComponent,
  GridLayoutItemComponent,
  StackLayoutComponent,
  TimelineCustomMessagesComponent,
  TimelineCardActionsTemplateDirective,
  TimelineCardBodyTemplateDirective,
  TimelineCardHeaderTemplateDirective,
  TimelineComponent,
  KENDO_AVATAR,
  KENDO_CARD,
  KENDO_DRAWER,
  KENDO_EXPANSIONPANEL,
  KENDO_GRIDLAYOUT,
  KENDO_PANELBAR,
  KENDO_SPLITTER,
  KENDO_STACKLAYOUT,
  KENDO_STEPPER,
  KENDO_TABSTRIP,
  KENDO_TILELAYOUT,
  KENDO_TIMELINE,
  KENDO_LAYOUT,
  AvatarModule,
  CardModule,
  DrawerModule,
  LayoutModule,
  PanelBarModule,
  SplitterModule,
  StepperModule,
  TabStripModule,
  ExpansionPanelModule,
  TileLayoutModule,
  StackLayoutModule,
  GridLayoutModule,
  TimelineModule
};
//# sourceMappingURL=chunk-WGV73THL.js.map
