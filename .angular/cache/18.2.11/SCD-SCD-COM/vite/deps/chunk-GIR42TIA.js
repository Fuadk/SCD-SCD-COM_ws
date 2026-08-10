import {
  ButtonComponent
} from "./chunk-GUER2DF3.js";
import {
  chevronLeftIcon,
  chevronRightIcon
} from "./chunk-KXMGKHT2.js";
import {
  IconWrapperComponent,
  IconsService
} from "./chunk-3ZH7CTYC.js";
import {
  Keys,
  ResizeBatchService,
  ResizeSensorComponent,
  closestInScope,
  focusableSelector,
  isDocumentAvailable,
  isPresent
} from "./chunk-5AZCHGRK.js";
import {
  L10N_PREFIX,
  LocalizationService
} from "./chunk-YGURSKD5.js";
import {
  A
} from "./chunk-RWPIEFVW.js";
import {
  AnimationBuilder,
  animate,
  style
} from "./chunk-OBI53R7Q.js";
import {
  AsyncPipe,
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
  Input,
  NgModule,
  NgZone,
  Optional,
  Output,
  Renderer2,
  TemplateRef,
  ViewChild,
  ViewChildren,
  forwardRef,
  isDevMode,
  setClassMetadata,
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
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction5,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-R7LRY632.js";
import {
  fromEvent,
  merge
} from "./chunk-UG3XN6F5.js";
import {
  ReplaySubject,
  Subject,
  Subscription,
  filter,
  map,
  share,
  startWith,
  take
} from "./chunk-WISTXZPE.js";
import {
  __spreadValues
} from "./chunk-N6ESDQJH.js";

// node_modules/@progress/kendo-angular-navigation/fesm2022/progress-kendo-angular-navigation.mjs
var _c0 = ["*"];
var _c1 = ["kendoActionSheetItem", ""];
var _c2 = (a0) => ({
  $implicit: a0
});
function ActionSheetItemComponent_Conditional_0_ng_template_0_Template(rf, ctx) {
}
function ActionSheetItemComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ActionSheetItemComponent_Conditional_0_ng_template_0_Template, 0, 0, "ng-template", 0);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.itemTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c2, ctx_r0.item));
  }
}
function ActionSheetItemComponent_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 2);
    ɵɵelement(1, "kendo-icon-wrapper", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵstyleMap(ctx_r0.manageIconStyles(ctx_r0.item));
    ɵɵclassMap(ctx_r0.manageIconClasses(ctx_r0.item));
    ɵɵproperty("name", ctx_r0.item.icon)("customFontClass", ctx_r0.item.iconClass)("svgIcon", ctx_r0.item.svgIcon);
  }
}
function ActionSheetItemComponent_Conditional_1_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 5);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.item.title);
  }
}
function ActionSheetItemComponent_Conditional_1_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 6);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.item.description);
  }
}
function ActionSheetItemComponent_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 3);
    ɵɵtemplate(1, ActionSheetItemComponent_Conditional_1_Conditional_2_Conditional_1_Template, 2, 1, "span", 5)(2, ActionSheetItemComponent_Conditional_1_Conditional_2_Conditional_2_Template, 2, 1, "span", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵconditional(ctx_r0.item.title ? 1 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r0.item.description ? 2 : -1);
  }
}
function ActionSheetItemComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 1);
    ɵɵtemplate(1, ActionSheetItemComponent_Conditional_1_Conditional_1_Template, 2, 7, "span", 2)(2, ActionSheetItemComponent_Conditional_1_Conditional_2_Template, 3, 2, "span", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵconditional(ctx_r0.item.icon || ctx_r0.item.iconClass || ctx_r0.item.svgIcon ? 1 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r0.item.title || ctx_r0.item.description ? 2 : -1);
  }
}
var _c3 = ["kendoActionSheetList", ""];
function ActionSheetListComponent_For_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 1);
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassProp("k-actionsheet-item", true)("k-disabled", item_r1.disabled);
    ɵɵproperty("ngClass", item_r1.cssClass)("ngStyle", item_r1.cssStyle)("itemTemplate", ctx_r1.itemTemplate)("item", item_r1);
    ɵɵattribute("aria-disabled", item_r1.disabled)("kendo-actionsheet-item-index", ctx_r1.setAttrIndex(item_r1));
  }
}
var _c4 = ["childContainer"];
var _c5 = [[["kendo-actionsheet-view"]]];
var _c6 = ["kendo-actionsheet-view"];
var _c7 = (a0, a1) => [a0, a1, "k-actions", "k-actionsheet-footer"];
function ActionSheetComponent_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0);
  }
}
function ActionSheetComponent_Conditional_0_Conditional_6_Conditional_1_ng_template_0_Template(rf, ctx) {
}
function ActionSheetComponent_Conditional_0_Conditional_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ActionSheetComponent_Conditional_0_Conditional_6_Conditional_1_ng_template_0_Template, 0, 0, "ng-template", 6);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.actionSheetTemplate == null ? null : ctx_r1.actionSheetTemplate.templateRef);
  }
}
function ActionSheetComponent_Conditional_0_Conditional_6_Conditional_2_Conditional_0_Conditional_1_ng_template_0_Template(rf, ctx) {
}
function ActionSheetComponent_Conditional_0_Conditional_6_Conditional_2_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ActionSheetComponent_Conditional_0_Conditional_6_Conditional_2_Conditional_0_Conditional_1_ng_template_0_Template, 0, 0, "ng-template", 6);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(5);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.headerTemplate == null ? null : ctx_r1.headerTemplate.templateRef);
  }
}
function ActionSheetComponent_Conditional_0_Conditional_6_Conditional_2_Conditional_0_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 12);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(6);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.title);
  }
}
function ActionSheetComponent_Conditional_0_Conditional_6_Conditional_2_Conditional_0_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 13);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(6);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.subtitle);
  }
}
function ActionSheetComponent_Conditional_0_Conditional_6_Conditional_2_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 10)(1, "div", 11);
    ɵɵtemplate(2, ActionSheetComponent_Conditional_0_Conditional_6_Conditional_2_Conditional_0_Conditional_2_Conditional_2_Template, 2, 1, "div", 12)(3, ActionSheetComponent_Conditional_0_Conditional_6_Conditional_2_Conditional_0_Conditional_2_Conditional_3_Template, 2, 1, "div", 13);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(5);
    ɵɵadvance();
    ɵɵproperty("id", ctx_r1.titleId);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.title ? 2 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.subtitle ? 3 : -1);
  }
}
function ActionSheetComponent_Conditional_0_Conditional_6_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 7);
    ɵɵtemplate(1, ActionSheetComponent_Conditional_0_Conditional_6_Conditional_2_Conditional_0_Conditional_1_Template, 1, 1, null, 6)(2, ActionSheetComponent_Conditional_0_Conditional_6_Conditional_2_Conditional_0_Conditional_2_Template, 4, 3, "div", 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.headerTemplate ? 1 : 2);
  }
}
function ActionSheetComponent_Conditional_0_Conditional_6_Conditional_2_Conditional_1_Conditional_1_ng_template_0_Template(rf, ctx) {
}
function ActionSheetComponent_Conditional_0_Conditional_6_Conditional_2_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ActionSheetComponent_Conditional_0_Conditional_6_Conditional_2_Conditional_1_Conditional_1_ng_template_0_Template, 0, 0, "ng-template", 6);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(5);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.contentTemplate == null ? null : ctx_r1.contentTemplate.templateRef);
  }
}
function ActionSheetComponent_Conditional_0_Conditional_6_Conditional_2_Conditional_1_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 16);
    ɵɵlistener("itemClick", function ActionSheetComponent_Conditional_0_Conditional_6_Conditional_2_Conditional_1_Conditional_2_Conditional_0_Template_div_itemClick_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(6);
      return ɵɵresetView(ctx_r1.onItemClick($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(6);
    ɵɵproperty("groupItems", ctx_r1.topGroupItems)("allItems", ctx_r1.items)("itemTemplate", ctx_r1.itemTemplate == null ? null : ctx_r1.itemTemplate.templateRef);
  }
}
function ActionSheetComponent_Conditional_0_Conditional_6_Conditional_2_Conditional_1_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "hr", 15);
  }
}
function ActionSheetComponent_Conditional_0_Conditional_6_Conditional_2_Conditional_1_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 16);
    ɵɵlistener("itemClick", function ActionSheetComponent_Conditional_0_Conditional_6_Conditional_2_Conditional_1_Conditional_2_Conditional_2_Template_div_itemClick_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext(6);
      return ɵɵresetView(ctx_r1.onItemClick($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(6);
    ɵɵproperty("groupItems", ctx_r1.bottomGroupItems)("allItems", ctx_r1.items)("itemTemplate", ctx_r1.itemTemplate == null ? null : ctx_r1.itemTemplate.templateRef);
  }
}
function ActionSheetComponent_Conditional_0_Conditional_6_Conditional_2_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ActionSheetComponent_Conditional_0_Conditional_6_Conditional_2_Conditional_1_Conditional_2_Conditional_0_Template, 1, 3, "div", 14)(1, ActionSheetComponent_Conditional_0_Conditional_6_Conditional_2_Conditional_1_Conditional_2_Conditional_1_Template, 1, 0, "hr", 15)(2, ActionSheetComponent_Conditional_0_Conditional_6_Conditional_2_Conditional_1_Conditional_2_Conditional_2_Template, 1, 3, "div", 14);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(5);
    ɵɵconditional(ctx_r1.topGroupItems ? 0 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.shouldRenderSeparator ? 1 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.bottomGroupItems ? 2 : -1);
  }
}
function ActionSheetComponent_Conditional_0_Conditional_6_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 8);
    ɵɵtemplate(1, ActionSheetComponent_Conditional_0_Conditional_6_Conditional_2_Conditional_1_Conditional_1_Template, 1, 1, null, 6)(2, ActionSheetComponent_Conditional_0_Conditional_6_Conditional_2_Conditional_1_Conditional_2_Template, 3, 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.contentTemplate ? 1 : 2);
  }
}
function ActionSheetComponent_Conditional_0_Conditional_6_Conditional_2_Conditional_2_Conditional_1_ng_template_0_Template(rf, ctx) {
}
function ActionSheetComponent_Conditional_0_Conditional_6_Conditional_2_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ActionSheetComponent_Conditional_0_Conditional_6_Conditional_2_Conditional_2_Conditional_1_ng_template_0_Template, 0, 0, "ng-template", 6);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(5);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.footerTemplate == null ? null : ctx_r1.footerTemplate.templateRef);
  }
}
function ActionSheetComponent_Conditional_0_Conditional_6_Conditional_2_Conditional_2_Conditional_2_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 18);
    ɵɵlistener("click", function ActionSheetComponent_Conditional_0_Conditional_6_Conditional_2_Conditional_2_Conditional_2_For_1_Template_button_click_0_listener() {
      const actionButton_r6 = ɵɵrestoreView(_r5).$implicit;
      const ctx_r1 = ɵɵnextContext(6);
      return ɵɵresetView(ctx_r1.action.emit(actionButton_r6));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const actionButton_r6 = ctx.$implicit;
    ɵɵproperty("icon", actionButton_r6.icon)("title", actionButton_r6.title)("svgIcon", actionButton_r6.svgIcon)("themeColor", actionButton_r6.themeColor)("fillMode", actionButton_r6.fillMode)("size", actionButton_r6.size);
    ɵɵattribute("aria-label", actionButton_r6.text);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", actionButton_r6.text, " ");
  }
}
function ActionSheetComponent_Conditional_0_Conditional_6_Conditional_2_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵrepeaterCreate(0, ActionSheetComponent_Conditional_0_Conditional_6_Conditional_2_Conditional_2_Conditional_2_For_1_Template, 2, 8, "button", 17, ɵɵrepeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(5);
    ɵɵrepeater(ctx_r1.actions);
  }
}
function ActionSheetComponent_Conditional_0_Conditional_6_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 9);
    ɵɵtemplate(1, ActionSheetComponent_Conditional_0_Conditional_6_Conditional_2_Conditional_2_Conditional_1_Template, 1, 1, null, 6)(2, ActionSheetComponent_Conditional_0_Conditional_6_Conditional_2_Conditional_2_Conditional_2_Template, 2, 0);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵproperty("ngClass", ɵɵpureFunction2(3, _c7, ctx_r1.orientationClass, ctx_r1.alignmentClass));
    ɵɵadvance();
    ɵɵconditional(ctx_r1.footerTemplate ? 1 : -1);
    ɵɵadvance();
    ɵɵconditional(!ctx_r1.footerTemplate && ctx_r1.actions ? 2 : -1);
  }
}
function ActionSheetComponent_Conditional_0_Conditional_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ActionSheetComponent_Conditional_0_Conditional_6_Conditional_2_Conditional_0_Template, 3, 1, "div", 7)(1, ActionSheetComponent_Conditional_0_Conditional_6_Conditional_2_Conditional_1_Template, 3, 1, "div", 8)(2, ActionSheetComponent_Conditional_0_Conditional_6_Conditional_2_Conditional_2_Template, 3, 6, "div", 9);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵconditional(ctx_r1.title || ctx_r1.subtitle || ctx_r1.headerTemplate ? 0 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.items || ctx_r1.contentTemplate ? 1 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.footerTemplate || ctx_r1.actions ? 2 : -1);
  }
}
function ActionSheetComponent_Conditional_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5);
    ɵɵtemplate(1, ActionSheetComponent_Conditional_0_Conditional_6_Conditional_1_Template, 1, 1, null, 6)(2, ActionSheetComponent_Conditional_0_Conditional_6_Conditional_2_Template, 3, 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.actionSheetTemplate ? 1 : 2);
  }
}
function ActionSheetComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 1);
    ɵɵlistener("click", function ActionSheetComponent_Conditional_0_Template_div_click_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onOverlayClick());
    });
    ɵɵelementEnd();
    ɵɵelementStart(1, "div", 2)(2, "div", 3, 0)(4, "div", 4);
    ɵɵtemplate(5, ActionSheetComponent_Conditional_0_Conditional_5_Template, 1, 0)(6, ActionSheetComponent_Conditional_0_Conditional_6_Template, 3, 1, "div", 5);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵstyleMap("bottom: 0px; width: 100%;");
    ɵɵadvance(2);
    ɵɵstyleProp("--kendo-actionsheet-view-current", (ctx_r1.actionSheetViews == null ? null : ctx_r1.actionSheetViews.length) > 0 ? ctx_r1.currentView : null);
    ɵɵproperty("ngClass", ctx_r1.cssClass)("ngStyle", ctx_r1.cssStyle);
    ɵɵattribute("aria-labelledby", ctx_r1.titleId);
    ɵɵadvance();
    ɵɵconditional((ctx_r1.actionSheetViews == null ? null : ctx_r1.actionSheetViews.length) > 0 ? 5 : -1);
    ɵɵadvance();
    ɵɵconditional((ctx_r1.actionSheetViews == null ? null : ctx_r1.actionSheetViews.length) === 0 ? 6 : -1);
  }
}
function ActionSheetViewComponent_Conditional_0_ng_template_0_Template(rf, ctx) {
}
function ActionSheetViewComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ActionSheetViewComponent_Conditional_0_ng_template_0_Template, 0, 0, "ng-template", 0);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.actionSheetTemplate == null ? null : ctx_r0.actionSheetTemplate.templateRef);
  }
}
function ActionSheetViewComponent_Conditional_1_Conditional_0_Conditional_1_ng_template_0_Template(rf, ctx) {
}
function ActionSheetViewComponent_Conditional_1_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ActionSheetViewComponent_Conditional_1_Conditional_0_Conditional_1_ng_template_0_Template, 0, 0, "ng-template", 0);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.headerTemplate.templateRef);
  }
}
function ActionSheetViewComponent_Conditional_1_Conditional_0_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 6);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.title);
  }
}
function ActionSheetViewComponent_Conditional_1_Conditional_0_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 7);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.subtitle);
  }
}
function ActionSheetViewComponent_Conditional_1_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 4)(1, "div", 5);
    ɵɵtemplate(2, ActionSheetViewComponent_Conditional_1_Conditional_0_Conditional_2_Conditional_2_Template, 2, 1, "div", 6)(3, ActionSheetViewComponent_Conditional_1_Conditional_0_Conditional_2_Conditional_3_Template, 2, 1, "div", 7);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("id", ctx_r0.titleId);
    ɵɵadvance();
    ɵɵconditional(ctx_r0.title ? 2 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r0.subtitle ? 3 : -1);
  }
}
function ActionSheetViewComponent_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵtemplate(1, ActionSheetViewComponent_Conditional_1_Conditional_0_Conditional_1_Template, 1, 1, null, 0)(2, ActionSheetViewComponent_Conditional_1_Conditional_0_Conditional_2_Template, 4, 3, "div", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵconditional(ctx_r0.headerTemplate ? 1 : 2);
  }
}
function ActionSheetViewComponent_Conditional_1_Conditional_1_ng_template_1_Template(rf, ctx) {
}
function ActionSheetViewComponent_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵtemplate(1, ActionSheetViewComponent_Conditional_1_Conditional_1_ng_template_1_Template, 0, 0, "ng-template", 0);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.contentTemplate.templateRef);
  }
}
function ActionSheetViewComponent_Conditional_1_Conditional_2_ng_template_1_Template(rf, ctx) {
}
function ActionSheetViewComponent_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 3);
    ɵɵtemplate(1, ActionSheetViewComponent_Conditional_1_Conditional_2_ng_template_1_Template, 0, 0, "ng-template", 0);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ɵɵpureFunction2(2, _c7, ctx_r0.orientationClass, ctx_r0.alignmentClass));
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.footerTemplate.templateRef);
  }
}
function ActionSheetViewComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ActionSheetViewComponent_Conditional_1_Conditional_0_Template, 3, 1, "div", 1)(1, ActionSheetViewComponent_Conditional_1_Conditional_1_Template, 2, 1, "div", 2)(2, ActionSheetViewComponent_Conditional_1_Conditional_2_Template, 2, 5, "div", 3);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵconditional(ctx_r0.title || ctx_r0.subtitle || ctx_r0.headerTemplate ? 0 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r0.contentTemplate ? 1 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r0.footerTemplate ? 2 : -1);
  }
}
var _c8 = ["kendoBottomNavigationItem", ""];
function BottomNavigationItemComponent_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("name", ctx_r0.item.icon)("customFontClass", ctx_r0.item.iconClass)("svgIcon", ctx_r0.item.svgIcon);
  }
}
function BottomNavigationItemComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 2);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.item.text);
  }
}
function BottomNavigationItemComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, BottomNavigationItemComponent_Conditional_0_Conditional_0_Template, 1, 3, "kendo-icon-wrapper", 1)(1, BottomNavigationItemComponent_Conditional_0_Conditional_1_Template, 2, 1, "span", 2);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵconditional(ctx_r0.itemIcon ? 0 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r0.item.text ? 1 : -1);
  }
}
function BottomNavigationItemComponent_Conditional_1_ng_template_0_Template(rf, ctx) {
}
function BottomNavigationItemComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, BottomNavigationItemComponent_Conditional_1_ng_template_0_Template, 0, 0, "ng-template", 0);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.itemTemplate == null ? null : ctx_r0.itemTemplate.templateRef)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c2, ctx_r0.item));
  }
}
function BottomNavigationComponent_Conditional_0_For_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 0);
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ɵ$index_2_r2 = ctx.$index;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("disabledComponent", ctx_r2.disabled)("item", item_r1)("index", ɵ$index_2_r2)("selectedIdx", ctx_r2.selectedIdx)("itemTemplate", ctx_r2.itemTemplate)("ngClass", item_r1.cssClass)("ngStyle", item_r1.cssStyle)("orientation", ctx_r2.itemFlow);
    ɵɵattribute("data-kendo-bottomnavigation-index", ɵ$index_2_r2);
  }
}
function BottomNavigationComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵrepeaterCreate(0, BottomNavigationComponent_Conditional_0_For_1_Template, 1, 9, "span", 0, ɵɵrepeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵrepeater(ctx_r2.items);
  }
}
var _c9 = ["kendoBreadCrumbItem", ""];
var _c10 = [[["", "kendoBreadCrumbSeparator", ""]]];
var _c11 = ["[kendoBreadCrumbSeparator]"];
var _c12 = (a0, a1, a2, a3, a4) => ({
  "k-breadcrumb-root-link": a0,
  "k-breadcrumb-link": a1,
  "k-breadcrumb-icontext-link": a2,
  "k-breadcrumb-icon-link": a3,
  "k-disabled": a4
});
var _c13 = (a0, a1) => ({
  $implicit: a0,
  index: a1
});
function BreadCrumbItemComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0);
  }
}
function BreadCrumbItemComponent_Conditional_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function BreadCrumbItemComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, BreadCrumbItemComponent_Conditional_2_ng_container_0_Template, 1, 0, "ng-container", 1);
  }
  if (rf & 2) {
    ɵɵnextContext();
    const separator_r1 = ɵɵreference(1);
    ɵɵproperty("ngTemplateOutlet", separator_r1);
  }
}
function BreadCrumbItemComponent_Conditional_3_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "img", 7);
    ɵɵlistener("load", function BreadCrumbItemComponent_Conditional_3_Conditional_0_Conditional_1_Template_img_load_0_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r2.onImageLoad());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵproperty("src", ctx_r2.item.data.imageUrl, ɵɵsanitizeUrl);
  }
}
function BreadCrumbItemComponent_Conditional_3_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 5);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵproperty("name", ctx_r2.item.data.icon)("customFontClass", ctx_r2.item.data.iconClass)("svgIcon", ctx_r2.item.data.svgIcon);
  }
}
function BreadCrumbItemComponent_Conditional_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 2);
    ɵɵtemplate(1, BreadCrumbItemComponent_Conditional_3_Conditional_0_Conditional_1_Template, 1, 1, "img", 4)(2, BreadCrumbItemComponent_Conditional_3_Conditional_0_Conditional_2_Template, 1, 3, "kendo-icon-wrapper", 5);
    ɵɵelementStart(3, "span", 6);
    ɵɵtext(4);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ɵɵpureFunction5(8, _c12, ctx_r2.item.context.isFirst, ctx_r2.index !== 0, (!!ctx_r2.item.data.icon || !!ctx_r2.item.data.svgIcon) && !!ctx_r2.item.data.text, (!!ctx_r2.item.data.icon || !!ctx_r2.item.data.svgIcon) && !ctx_r2.item.data.text, ctx_r2.disabled))("title", ctx_r2.item.data.title || "")("tabindex", ctx_r2.disabled ? -1 : 0);
    ɵɵattribute("aria-disabled", ctx_r2.disabled)("aria-current", ctx_r2.item.context.isLast ? "page" : null);
    ɵɵadvance();
    ɵɵconditional(ctx_r2.item.data.imageUrl ? 1 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r2.item.data.icon || ctx_r2.item.data.iconClass || ctx_r2.item.data.svgIcon ? 2 : -1);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r2.item.data.text);
  }
}
function BreadCrumbItemComponent_Conditional_3_Conditional_1_ng_template_0_Template(rf, ctx) {
}
function BreadCrumbItemComponent_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, BreadCrumbItemComponent_Conditional_3_Conditional_1_ng_template_0_Template, 0, 0, "ng-template", 3);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r2.itemTemplate)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c13, ctx_r2.item.data, ctx_r2.index));
  }
}
function BreadCrumbItemComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, BreadCrumbItemComponent_Conditional_3_Conditional_0_Template, 5, 14, "span", 2)(1, BreadCrumbItemComponent_Conditional_3_Conditional_1_Template, 1, 5, null, 3);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵconditional(!ctx_r2.itemTemplate ? 0 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r2.itemTemplate ? 1 : -1);
  }
}
function BreadCrumbItemComponent_Conditional_4_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function BreadCrumbItemComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, BreadCrumbItemComponent_Conditional_4_ng_container_0_Template, 1, 0, "ng-container", 1);
  }
  if (rf & 2) {
    ɵɵnextContext();
    const separator_r1 = ɵɵreference(1);
    ɵɵproperty("ngTemplateOutlet", separator_r1);
  }
}
var _c14 = ["kendoBreadCrumbSeparator", ""];
var _c15 = ["kendoBreadCrumbList", ""];
function BreadCrumbListComponent_For_1_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 2);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("icon", ctx_r0.separatorIcon)("svgIcon", ctx_r0.separatorSVGIcon);
  }
}
function BreadCrumbListComponent_For_1_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 2);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("icon", ctx_r0.separatorIcon)("svgIcon", ctx_r0.separatorSVGIcon);
  }
}
function BreadCrumbListComponent_For_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 1, 0);
    ɵɵtemplate(2, BreadCrumbListComponent_For_1_Conditional_0_Conditional_2_Template, 1, 2, "span", 2)(3, BreadCrumbListComponent_For_1_Conditional_0_Conditional_3_Template, 1, 2, "span", 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    const item_r3 = ctx_r1.$implicit;
    const ɵ$index_1_r4 = ctx_r1.$index;
    const ɵ$count_1_r5 = ctx_r1.$count;
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("item", item_r3)("index", ɵ$index_1_r4)("collapseMode", ctx_r0.collapseMode)("itemTemplate", ctx_r0.itemTemplate);
    ɵɵattribute("data-kendo-breadcrumb-index", ɵ$index_1_r4);
    ɵɵadvance(2);
    ɵɵconditional(ctx_r0.collapseMode === "wrap" && !(ɵ$index_1_r4 === 0) ? 2 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r0.collapseMode !== "wrap" && !(ɵ$index_1_r4 === ɵ$count_1_r5 - 1) && !((item_r3 == null ? null : item_r3.context.collapsed) && (ctx_r0.items[ɵ$index_1_r4 + 1] == null ? null : ctx_r0.items[ɵ$index_1_r4 + 1].context.collapsed)) ? 3 : -1);
  }
}
function BreadCrumbListComponent_For_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, BreadCrumbListComponent_For_1_Conditional_0_Template, 4, 7, "li", 1);
  }
  if (rf & 2) {
    const ɵ$index_1_r4 = ctx.$index;
    const ctx_r0 = ɵɵnextContext();
    ɵɵconditional(!(ctx_r0.collapseMode === "wrap" && ɵ$index_1_r4 === 0) || ctx_r0.isRootItemContainer ? 0 : -1);
  }
}
var _c16 = ["resizeSensor"];
var _c17 = ["itemsContainer"];
var _c18 = (a0, a1) => ({
  "!k-flex-wrap": a0,
  "k-flex-none": a1
});
function BreadCrumbComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ol", 5, 0);
    ɵɵpipe(2, "async");
    ɵɵlistener("itemClick", function BreadCrumbComponent_Conditional_0_Template_ol_itemClick_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.itemClick.emit($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("items", ɵɵpipeBind1(2, 5, ctx_r2.firstItem$))("itemTemplate", ctx_r2.itemTemplate == null ? null : ctx_r2.itemTemplate.templateRef)("collapseMode", ctx_r2.collapseMode)("separatorIcon", ctx_r2.separatorIcon)("separatorSVGIcon", ctx_r2.separatorSVGIcon);
  }
}
var packageMetadata = {
  name: "@progress/kendo-angular-navigation",
  productName: "Kendo UI for Angular",
  productCode: "KENDOUIANGULAR",
  productCodes: ["KENDOUIANGULAR"],
  publishDate: 1768393056,
  version: "21.4.1",
  licensingDocsUrl: "https://www.telerik.com/kendo-angular-ui/my-license/"
};
var DEFAULT_THEME_COLOR = "light";
var DEFAULT_POSITION = "top";
var DEFAULT_POSITION_MODE = "static";
var AppBarComponent = class _AppBarComponent {
  localizationService;
  host;
  renderer;
  hostClass = true;
  /**
   * @hidden
   */
  direction;
  /**
   * Specifies the position of the AppBar
   * ([see example]({% slug positioning_appbar %}#toc-position)).
   *
   * @default 'top'
   */
  set position(position) {
    const newPosition = position ? position : DEFAULT_POSITION;
    this.handleHostClasses(newPosition, this.position);
    this._position = newPosition;
  }
  get position() {
    return this._position;
  }
  /**
   * Sets the position mode of the AppBar ([see example](slug:positioning_appbar#toc-position-mode)).
   *
   * @default 'static'
   */
  set positionMode(positionMode) {
    const newPositionMode = positionMode ? positionMode : DEFAULT_POSITION_MODE;
    this.handleHostClasses(newPositionMode, this.positionMode);
    this._positionMode = newPositionMode;
  }
  get positionMode() {
    return this._positionMode;
  }
  /**
   * Sets the theme color of the AppBar. The theme color is applied as the background color of the component.
   *
   * @default 'light'
   */
  set themeColor(themeColor) {
    const newThemeColor = themeColor ? themeColor : DEFAULT_THEME_COLOR;
    this.handleHostClasses(newThemeColor, this.themeColor);
    this._themeColor = newThemeColor;
  }
  get themeColor() {
    return this._themeColor;
  }
  dynamicRTLSubscription;
  rtl = false;
  _themeColor = DEFAULT_THEME_COLOR;
  _position = DEFAULT_POSITION;
  _positionMode = DEFAULT_POSITION_MODE;
  constructor(localizationService, host, renderer) {
    this.localizationService = localizationService;
    this.host = host;
    this.renderer = renderer;
    A(packageMetadata);
    this.dynamicRTLSubscription = this.localizationService.changes.subscribe(({
      rtl
    }) => {
      this.rtl = rtl;
      this.direction = this.rtl ? "rtl" : "ltr";
    });
  }
  ngAfterViewInit() {
    const stylingOptions = ["position", "positionMode", "themeColor"];
    stylingOptions.forEach((input) => {
      this.handleHostClasses(this[input]);
    });
  }
  ngOnDestroy() {
    if (this.dynamicRTLSubscription) {
      this.dynamicRTLSubscription.unsubscribe();
    }
  }
  handleHostClasses(newValue, previousValue) {
    const elem = this.host.nativeElement;
    if (previousValue && newValue === previousValue) {
      return;
    }
    if (previousValue) {
      this.renderer.removeClass(elem, `k-appbar-${previousValue}`);
    }
    if (newValue) {
      this.renderer.addClass(elem, `k-appbar-${newValue}`);
    }
  }
  static ɵfac = function AppBarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppBarComponent)(ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _AppBarComponent,
    selectors: [["kendo-appbar"]],
    hostVars: 3,
    hostBindings: function AppBarComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("dir", ctx.direction);
        ɵɵclassProp("k-appbar", ctx.hostClass);
      }
    },
    inputs: {
      position: "position",
      positionMode: "positionMode",
      themeColor: "themeColor"
    },
    exportAs: ["kendoAppBar"],
    standalone: true,
    features: [ɵɵProvidersFeature([LocalizationService, {
      provide: L10N_PREFIX,
      useValue: "kendo.appbar.component"
    }]), ɵɵStandaloneFeature],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function AppBarComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppBarComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoAppBar",
      selector: "kendo-appbar",
      template: `
        <ng-content></ng-content>
    `,
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.appbar.component"
      }],
      standalone: true
    }]
  }], () => [{
    type: LocalizationService
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }], {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-appbar"]
    }],
    direction: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    position: [{
      type: Input
    }],
    positionMode: [{
      type: Input
    }],
    themeColor: [{
      type: Input
    }]
  });
})();
var AppBarSectionComponent = class _AppBarSectionComponent {
  hostClass = true;
  static ɵfac = function AppBarSectionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppBarSectionComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _AppBarSectionComponent,
    selectors: [["kendo-appbar-section"]],
    hostVars: 2,
    hostBindings: function AppBarSectionComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("k-appbar-section", ctx.hostClass);
      }
    },
    standalone: true,
    features: [ɵɵStandaloneFeature],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function AppBarSectionComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppBarSectionComponent, [{
    type: Component,
    args: [{
      selector: "kendo-appbar-section",
      template: `
        <ng-content></ng-content>
    `,
      standalone: true
    }]
  }], null, {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-appbar-section"]
    }]
  });
})();
var isPresent2 = (value) => value !== null && value !== void 0;
var outerWidth = (element) => {
  const style2 = getComputedStyle(element);
  let width = parseFloat(style2.width);
  width += (parseFloat(style2.marginLeft) || 0) + (parseFloat(style2.marginRight) || 0);
  return width;
};
var getFirstAndLastFocusable = (parent) => {
  const all = getAllFocusableChildren(parent);
  const firstFocusable = all.length > 0 ? all[0] : parent;
  const lastFocusable = all.length > 0 ? all[all.length - 1] : parent;
  return [firstFocusable, lastFocusable];
};
var getAllFocusableChildren = (parent) => {
  return parent.querySelectorAll(focusableSelector);
};
var idx = 0;
var hexColorRegex = /^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;
var getId = (prefix) => {
  return `${prefix}${++idx}`;
};
var ACTIONSHEET_ITEM_INDEX_ATTRIBUTE = "kendo-actionsheet-item-index";
var getActionSheetItemIndex = (target, targetAttr, scope) => {
  const item = closestItem$1(target, targetAttr, scope);
  if (item) {
    return itemIndex$1(item, targetAttr);
  }
};
var itemIndex$1 = (item, indexAttr) => +item.getAttribute(indexAttr);
var hasItemIndex$1 = (item, indexAttr) => isPresent2(item.getAttribute(indexAttr));
var closestItem$1 = (target, targetAttr, scope) => closestInScope(target, (el) => hasItemIndex$1(el, targetAttr), scope);
var AppBarSpacerComponent = class _AppBarSpacerComponent {
  renderer;
  element;
  hostClass = true;
  get sizedClass() {
    return isPresent2(this.width);
  }
  /**
   * Specifies the width of the AppBarSpacer.
   *
   * If not set, the AppBarSpacer will take all of the available space.
   */
  width;
  constructor(renderer, element) {
    this.renderer = renderer;
    this.element = element;
  }
  ngAfterViewInit() {
    if (isPresent2(this.width)) {
      const element = this.element.nativeElement;
      this.renderer.setStyle(element, "flexBasis", this.width);
    }
  }
  static ɵfac = function AppBarSpacerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppBarSpacerComponent)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _AppBarSpacerComponent,
    selectors: [["kendo-appbar-spacer"]],
    hostVars: 4,
    hostBindings: function AppBarSpacerComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
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
    template: function AppBarSpacerComponent_Template(rf, ctx) {
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppBarSpacerComponent, [{
    type: Component,
    args: [{
      selector: "kendo-appbar-spacer",
      template: ``,
      standalone: true
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }], {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-spacer"]
    }],
    sizedClass: [{
      type: HostBinding,
      args: ["class.k-spacer-sized"]
    }],
    width: [{
      type: Input
    }]
  });
})();
var ActionSheetHeaderTemplateDirective = class _ActionSheetHeaderTemplateDirective {
  templateRef;
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static ɵfac = function ActionSheetHeaderTemplateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ActionSheetHeaderTemplateDirective)(ɵɵdirectiveInject(TemplateRef, 8));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _ActionSheetHeaderTemplateDirective,
    selectors: [["", "kendoActionSheetHeaderTemplate", ""]],
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActionSheetHeaderTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoActionSheetHeaderTemplate]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
var ActionSheetItemTemplateDirective = class _ActionSheetItemTemplateDirective {
  templateRef;
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static ɵfac = function ActionSheetItemTemplateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ActionSheetItemTemplateDirective)(ɵɵdirectiveInject(TemplateRef, 8));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _ActionSheetItemTemplateDirective,
    selectors: [["", "kendoActionSheetItemTemplate", ""]],
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActionSheetItemTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoActionSheetItemTemplate]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
var ActionSheetContentTemplateDirective = class _ActionSheetContentTemplateDirective {
  templateRef;
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static ɵfac = function ActionSheetContentTemplateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ActionSheetContentTemplateDirective)(ɵɵdirectiveInject(TemplateRef, 8));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _ActionSheetContentTemplateDirective,
    selectors: [["", "kendoActionSheetContentTemplate", ""]],
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActionSheetContentTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoActionSheetContentTemplate]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
var ActionSheetFooterTemplateDirective = class _ActionSheetFooterTemplateDirective {
  templateRef;
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static ɵfac = function ActionSheetFooterTemplateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ActionSheetFooterTemplateDirective)(ɵɵdirectiveInject(TemplateRef, 8));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _ActionSheetFooterTemplateDirective,
    selectors: [["", "kendoActionSheetFooterTemplate", ""]],
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActionSheetFooterTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoActionSheetFooterTemplate]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
var ActionSheetTemplateDirective = class _ActionSheetTemplateDirective {
  templateRef;
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static ɵfac = function ActionSheetTemplateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ActionSheetTemplateDirective)(ɵɵdirectiveInject(TemplateRef, 8));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _ActionSheetTemplateDirective,
    selectors: [["", "kendoActionSheetTemplate", ""]],
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActionSheetTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoActionSheetTemplate]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
function slideUp(duration, height) {
  return [style({
    overflow: "hidden",
    display: "block",
    height: 0
  }), animate(`${duration}ms ease-in`, style({
    height: `${height}`
  }))];
}
function slideDown(duration, height) {
  return [style({
    overflow: "hidden",
    height: `${height}`
  }), animate(`${duration}ms ease-in`, style({
    overflow: "hidden",
    height: 0
  }))];
}
var ActionSheetItemComponent = class _ActionSheetItemComponent {
  itemTemplate;
  item;
  pointerClass = true;
  manageIconClasses(item) {
    const classes = ["k-actionsheet-item-icon"];
    const isHexColor = isPresent2(item.iconColor) && hexColorRegex.test(item.iconColor);
    const isThemeColor = isPresent2(item.iconColor) && item.iconColor !== "" && !isHexColor;
    if (isThemeColor) {
      classes.push(`k-text-${item.iconColor}`);
    }
    return classes.join(" ");
  }
  manageIconStyles(item) {
    const isHexColor = isPresent2(item.iconColor) && hexColorRegex.test(item.iconColor);
    const isSizeSet = isPresent2(item.iconSize) && item.iconSize !== "";
    const styles = {};
    if (isHexColor) {
      styles.color = item.iconColor;
    }
    if (isSizeSet) {
      styles.fontSize = item.iconSize;
    }
    return styles;
  }
  static ɵfac = function ActionSheetItemComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ActionSheetItemComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _ActionSheetItemComponent,
    selectors: [["", "kendoActionSheetItem", ""]],
    hostVars: 2,
    hostBindings: function ActionSheetItemComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("k-cursor-pointer", ctx.pointerClass);
      }
    },
    inputs: {
      itemTemplate: "itemTemplate",
      item: "item"
    },
    standalone: true,
    features: [ɵɵStandaloneFeature],
    attrs: _c1,
    decls: 2,
    vars: 1,
    consts: [[3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "k-actionsheet-action"], [1, "k-icon-wrap"], [1, "k-actionsheet-item-text"], [3, "name", "customFontClass", "svgIcon"], [1, "k-actionsheet-item-title"], [1, "k-actionsheet-item-description"]],
    template: function ActionSheetItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, ActionSheetItemComponent_Conditional_0_Template, 1, 4, null, 0)(1, ActionSheetItemComponent_Conditional_1_Template, 3, 2, "span", 1);
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActionSheetItemComponent, [{
    type: Component,
    args: [{
      // eslint-disable-next-line @angular-eslint/component-selector
      selector: "[kendoActionSheetItem]",
      template: `
        @if (itemTemplate) {
          <ng-template
            [ngTemplateOutlet]="itemTemplate"
            [ngTemplateOutletContext]="{
                $implicit: item
            }">
          </ng-template>
        } @else {
          <span class="k-actionsheet-action">
            @if (item.icon || item.iconClass || item.svgIcon) {
              <span class="k-icon-wrap">
                <kendo-icon-wrapper
                  [name]="item.icon"
                  [customFontClass]="item.iconClass"
                  [class]="manageIconClasses(item)"
                  [svgIcon]="item.svgIcon"
                  [style]="manageIconStyles(item)"
                  >
                </kendo-icon-wrapper>
              </span>
            }
            @if (item.title || item.description) {
              <span class="k-actionsheet-item-text">
                @if (item.title) {
                  <span class="k-actionsheet-item-title">{{item.title}}</span>
                }
                @if (item.description) {
                  <span class="k-actionsheet-item-description">{{item.description}}</span>
                }
              </span>
            }
          </span>
        }
        `,
      standalone: true,
      imports: [NgTemplateOutlet, IconWrapperComponent]
    }]
  }], null, {
    itemTemplate: [{
      type: Input
    }],
    item: [{
      type: Input
    }],
    pointerClass: [{
      type: HostBinding,
      args: ["class.k-cursor-pointer"]
    }]
  });
})();
var ActionSheetListComponent = class _ActionSheetListComponent {
  renderer;
  ngZone;
  element;
  groupItems = [];
  allItems = [];
  itemTemplate;
  itemClick = new EventEmitter();
  subscriptions = new Subscription();
  constructor(renderer, ngZone, element) {
    this.renderer = renderer;
    this.ngZone = ngZone;
    this.element = element;
  }
  ngAfterViewInit() {
    this.initDomEvents();
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  initDomEvents() {
    if (!this.element) {
      return;
    }
    this.ngZone.runOutsideAngular(() => {
      const nativeElement = this.element.nativeElement;
      this.subscriptions.add(this.renderer.listen(nativeElement, "click", this.clickHandler.bind(this)));
    });
  }
  clickHandler(e) {
    const itemIndex2 = getActionSheetItemIndex(e.target, ACTIONSHEET_ITEM_INDEX_ATTRIBUTE, this.element.nativeElement);
    const item = this.allItems[itemIndex2];
    if (!item) {
      return;
    }
    if (item.disabled) {
      e.preventDefault();
      return;
    }
    this.ngZone.run(() => {
      this.itemClick.emit({
        item,
        originalEvent: e
      });
    });
  }
  setAttrIndex(item) {
    return this.allItems.indexOf(item);
  }
  static ɵfac = function ActionSheetListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ActionSheetListComponent)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ElementRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _ActionSheetListComponent,
    selectors: [["", "kendoActionSheetList", ""]],
    inputs: {
      groupItems: "groupItems",
      allItems: "allItems",
      itemTemplate: "itemTemplate"
    },
    outputs: {
      itemClick: "itemClick"
    },
    standalone: true,
    features: [ɵɵStandaloneFeature],
    attrs: _c3,
    decls: 2,
    vars: 0,
    consts: [["kendoActionSheetItem", "", "tabindex", "0", "role", "button", 3, "k-actionsheet-item", "k-disabled", "ngClass", "ngStyle", "itemTemplate", "item"], ["kendoActionSheetItem", "", "tabindex", "0", "role", "button", 3, "ngClass", "ngStyle", "itemTemplate", "item"]],
    template: function ActionSheetListComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵrepeaterCreate(0, ActionSheetListComponent_For_1_Template, 1, 10, "span", 0, ɵɵrepeaterTrackByIdentity);
      }
      if (rf & 2) {
        ɵɵrepeater(ctx.groupItems);
      }
    },
    dependencies: [ActionSheetItemComponent, NgClass, NgStyle],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActionSheetListComponent, [{
    type: Component,
    args: [{
      // eslint-disable-next-line @angular-eslint/component-selector
      selector: "[kendoActionSheetList]",
      template: `
            @for (item of groupItems; track item) {
              <span kendoActionSheetItem
                tabindex="0"
                role="button"
                [attr.aria-disabled]="item.disabled"
                [class.k-actionsheet-item]="true"
                [attr.${ACTIONSHEET_ITEM_INDEX_ATTRIBUTE}]="setAttrIndex(item)"
                [class.k-disabled]="item.disabled"
                [ngClass]="item.cssClass"
                [ngStyle]="item.cssStyle"
                [itemTemplate]="itemTemplate"
                [item]="item">
              </span>
            }
            `,
      standalone: true,
      imports: [ActionSheetItemComponent, NgClass, NgStyle]
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: NgZone
  }, {
    type: ElementRef
  }], {
    groupItems: [{
      type: Input
    }],
    allItems: [{
      type: Input
    }],
    itemTemplate: [{
      type: Input
    }],
    itemClick: [{
      type: Output
    }]
  });
})();
var DEFAULT_ANIMATION_CONFIG = {
  duration: 300
};
var ActionSheetComponent = class _ActionSheetComponent {
  element;
  ngZone;
  renderer;
  localizationService;
  builder;
  cdr;
  /**
   * @hidden
   */
  currentView = 1;
  /**
   * @hidden
   */
  get hostClass() {
    return this.expanded;
  }
  /**
   * @hidden
   */
  direction;
  /**
   * Specifies the action buttons displayed in the ActionSheet footer.
   */
  actions;
  /**
   * Configures the layout of the action buttons in the footer. By default, actions are arranged horizontally and stretched to fill the container.
   */
  actionsLayout = {
    orientation: "horizontal",
    alignment: "stretched"
  };
  /**
   * Determines whether the ActionSheet closes when the overlay is clicked.
   *
   * @default false
   */
  overlayClickClose = false;
  /**
   * Sets the title text displayed in the ActionSheet header.
   */
  title;
  /**
   * Sets the subtitle text displayed below the title in the header.
   */
  subtitle;
  /**
   * Provides the collection of items rendered in the ActionSheet content area.
   */
  items;
  /**
   * Applies CSS classes to the inner ActionSheet element. Accepts any value supported by [`ngClass`](link:site.data.urls.angular['ngclassapi']).
   */
  cssClass;
  /**
   * Applies inline styles to the inner ActionSheet element. Accepts any value supported by [`ngStyle`](link:site.data.urls.angular['ngstyleapi']).
   */
  cssStyle;
  /**
   * Configures the opening and closing animations for the ActionSheet ([see example](slug:animations_actionsheet)).
   *
   * @default true
   */
  animation = true;
  /**
   * Controls whether the ActionSheet is expanded or collapsed.
   *
   * @default false
   */
  expanded = false;
  /**
   * Sets the `aria-labelledby` attribute of the ActionSheet wrapper element.
   * Use this option when the built-in header element is replaced through the [`ActionSheetHeaderTemplate`](slug:api_navigation_actionsheetheadertemplatedirective)
   * or [`ActionSheetContentTemplate`](slug:api_navigation_actionsheetcontenttemplatedirective).
   */
  titleId = getId("k-actionsheet-title");
  /**
   * @hidden
   *
   * Determines if the ActionSheet should focus the first focusable element when opened.
   */
  initialFocus = true;
  /**
   * Fires when the `expanded` property of the component is updated.
   * You can use this event to provide two-way binding for the `expanded` property.
   */
  expandedChange = new EventEmitter();
  /**
   * Fires when any of the ActionSheet action buttons is clicked.
   */
  action = new EventEmitter();
  /**
   * Fires when the ActionSheet is expanded and its animation is complete.
   */
  expand = new EventEmitter();
  /**
   * Fires when the ActionSheet is collapsed and its animation is complete.
   */
  collapse = new EventEmitter();
  /**
   * Fires when an ActionSheet item is clicked.
   */
  itemClick = new EventEmitter();
  /**
   * Fires when the modal overlay is clicked.
   */
  overlayClick = new EventEmitter();
  /**
   * @hidden
   */
  childContainer;
  /**
   * @hidden
   */
  actionSheetViews;
  /**
   * @hidden
   */
  actionSheetTemplate;
  /**
   * @hidden
   */
  headerTemplate;
  /**
   * @hidden
   */
  contentTemplate;
  /**
   * @hidden
   */
  itemTemplate;
  /**
   * @hidden
   */
  footerTemplate;
  dynamicRTLSubscription;
  rtl = false;
  domSubs = new Subscription();
  player;
  animationEnd = new EventEmitter();
  constructor(element, ngZone, renderer, localizationService, builder, cdr) {
    this.element = element;
    this.ngZone = ngZone;
    this.renderer = renderer;
    this.localizationService = localizationService;
    this.builder = builder;
    this.cdr = cdr;
    A(packageMetadata);
    this.dynamicRTLSubscription = this.localizationService.changes.subscribe(({
      rtl
    }) => {
      this.rtl = rtl;
      this.direction = this.rtl ? "rtl" : "ltr";
    });
  }
  ngAfterViewInit() {
    this.initDomEvents();
    this.setCssVariables();
  }
  ngOnChanges(changes) {
    if (changes["expanded"] && this.expanded) {
      this.setExpanded(true);
    }
  }
  ngOnDestroy() {
    this.domSubs.unsubscribe();
    if (this.dynamicRTLSubscription) {
      this.dynamicRTLSubscription.unsubscribe();
    }
    if (this.player) {
      this.player.destroy();
    }
  }
  /**
   * @hidden
   * Navigates to the next view.
   */
  nextView() {
    if (this.currentView < this.actionSheetViews.length) {
      this.currentView += 1;
    }
  }
  /**
   * @hidden
   * Navigates to the previous view.
   */
  prevView() {
    if (this.currentView > 1) {
      this.currentView -= 1;
    }
  }
  /**
   * Toggles the visibility of the ActionSheet.
   *
   * @param expanded? - Boolean. Specifies if the ActionSheet will be expanded or collapsed.
   */
  toggle(expanded2) {
    const previous = this.expanded;
    const current = isPresent(expanded2) ? expanded2 : !previous;
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
      this.playAnimation(current);
    } else {
      this[current ? "expand" : "collapse"].emit();
    }
  }
  /**
   * @hidden
   */
  get orientationClass() {
    return this.actionsLayout.orientation ? `k-actions-${this.actionsLayout.orientation}` : "";
  }
  /**
   * @hidden
   */
  get alignmentClass() {
    return this.actionsLayout.alignment ? `k-actions-${this.actionsLayout.alignment}` : "";
  }
  /**
   * @hidden
   */
  get topGroupItems() {
    return this.items?.filter((item) => !item.group || item.group === "top");
  }
  /**
   * @hidden
   */
  get bottomGroupItems() {
    return this.items?.filter((item) => item.group === "bottom");
  }
  /**
   * @hidden
   */
  onItemClick(ev) {
    this.itemClick.emit(ev);
  }
  /**
   * @hidden
   */
  onOverlayClick() {
    this.overlayClick.emit();
    if (this.overlayClickClose) {
      this.toggle(false);
    }
  }
  /**
   * @hidden
   */
  get shouldRenderSeparator() {
    return this.topGroupItems?.length > 0 && this.bottomGroupItems?.length > 0;
  }
  initDomEvents() {
    if (!this.element) {
      return;
    }
    this.ngZone.runOutsideAngular(() => {
      this.domSubs.add(this.renderer.listen(this.element.nativeElement, "keydown", (ev) => {
        this.onKeyDown(ev);
      }));
    });
  }
  setCssVariables() {
    if (!this.element || !isDocumentAvailable()) {
      return;
    }
    this.element.nativeElement.style.setProperty("--kendo-actionsheet-height", "auto");
    this.element.nativeElement.style.setProperty("--kendo-actionsheet-max-height", "none");
  }
  onKeyDown(event) {
    const target = event.target;
    if (event.code === Keys.Tab) {
      this.ngZone.run(() => {
        this.keepFocusWithinComponent(target, event);
      });
    }
    if (event.code === Keys.Escape) {
      this.ngZone.run(() => {
        this.overlayClick.emit();
      });
    }
    if (event.code === Keys.Enter || event.code === Keys.NumpadEnter) {
      this.ngZone.run(() => {
        this.triggerItemClick(target, event);
      });
    }
  }
  handleInitialFocus() {
    const [firstFocusable] = getFirstAndLastFocusable(this.element.nativeElement);
    if (firstFocusable && this.initialFocus) {
      firstFocusable.focus();
    }
  }
  keepFocusWithinComponent(target, event) {
    const wrapper = this.element.nativeElement;
    const [firstFocusable, lastFocusable] = getFirstAndLastFocusable(wrapper);
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
  triggerItemClick(target, event) {
    const itemIndex2 = getActionSheetItemIndex(target, ACTIONSHEET_ITEM_INDEX_ATTRIBUTE, this.element.nativeElement);
    const item = isPresent(itemIndex2) ? this.items[itemIndex2] : null;
    if (!item || item.disabled) {
      return;
    }
    this.itemClick.emit({
      item,
      originalEvent: event
    });
  }
  setExpanded(value) {
    this.expanded = value;
    this.expandedChange.emit(value);
    if (this.expanded) {
      this.cdr.detectChanges();
      this.handleInitialFocus();
    }
  }
  onAnimationEnd(currentExpanded) {
    if (currentExpanded) {
      this.expand.emit();
    } else {
      this.setExpanded(false);
      this.collapse.emit();
    }
  }
  playAnimation(expanded2) {
    const duration = typeof this.animation !== "boolean" && this.animation.duration ? this.animation.duration : DEFAULT_ANIMATION_CONFIG.duration;
    const contentHeight = getComputedStyle(this.childContainer.nativeElement).height;
    const animation = expanded2 ? slideUp(duration, contentHeight) : slideDown(duration, contentHeight);
    const factory = this.builder.build(animation);
    this.player = factory.create(this.childContainer.nativeElement);
    this.player.onDone(() => {
      if (this.player) {
        this.animationEnd.emit();
        this.player.destroy();
        this.player = null;
      }
    });
    this.player.play();
  }
  static ɵfac = function ActionSheetComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ActionSheetComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(AnimationBuilder), ɵɵdirectiveInject(ChangeDetectorRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _ActionSheetComponent,
    selectors: [["kendo-actionsheet"]],
    contentQueries: function ActionSheetComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, ActionSheetTemplateDirective, 5);
        ɵɵcontentQuery(dirIndex, ActionSheetHeaderTemplateDirective, 5);
        ɵɵcontentQuery(dirIndex, ActionSheetContentTemplateDirective, 5);
        ɵɵcontentQuery(dirIndex, ActionSheetItemTemplateDirective, 5);
        ɵɵcontentQuery(dirIndex, ActionSheetFooterTemplateDirective, 5);
        ɵɵcontentQuery(dirIndex, ActionSheetViewComponent, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.actionSheetTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.headerTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.itemTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.footerTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.actionSheetViews = _t);
      }
    },
    viewQuery: function ActionSheetComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c4, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.childContainer = _t.first);
      }
    },
    hostVars: 3,
    hostBindings: function ActionSheetComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("dir", ctx.direction);
        ɵɵclassProp("k-actionsheet-container", ctx.hostClass);
      }
    },
    inputs: {
      actions: "actions",
      actionsLayout: "actionsLayout",
      overlayClickClose: "overlayClickClose",
      title: "title",
      subtitle: "subtitle",
      items: "items",
      cssClass: "cssClass",
      cssStyle: "cssStyle",
      animation: "animation",
      expanded: "expanded",
      titleId: "titleId",
      initialFocus: "initialFocus"
    },
    outputs: {
      expandedChange: "expandedChange",
      action: "action",
      expand: "expand",
      collapse: "collapse",
      itemClick: "itemClick",
      overlayClick: "overlayClick"
    },
    exportAs: ["kendoActionSheet"],
    standalone: true,
    features: [ɵɵProvidersFeature([LocalizationService, {
      provide: L10N_PREFIX,
      useValue: "kendo.actionsheet.component"
    }]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    ngContentSelectors: _c6,
    decls: 1,
    vars: 1,
    consts: [["childContainer", ""], [1, "k-overlay", 3, "click"], [1, "k-animation-container", "k-animation-container-shown"], [1, "k-child-animation-container"], ["role", "dialog", "aria-modal", "true", 1, "k-actionsheet", "k-actionsheet-bottom", 3, "ngClass", "ngStyle"], [1, "k-actionsheet-view"], [3, "ngTemplateOutlet"], [1, "k-actionsheet-titlebar"], [1, "k-actionsheet-content"], [3, "ngClass"], [1, "k-actionsheet-titlebar-group", "k-hbox"], [1, "k-actionsheet-title", 3, "id"], [1, "k-text-center"], [1, "k-actionsheet-subtitle", "k-text-center"], ["kendoActionSheetList", "", "role", "group", 1, "k-list-ul", 3, "groupItems", "allItems", "itemTemplate"], [1, "k-hr"], ["kendoActionSheetList", "", "role", "group", 1, "k-list-ul", 3, "itemClick", "groupItems", "allItems", "itemTemplate"], ["kendoButton", "", "type", "button", 3, "icon", "title", "svgIcon", "themeColor", "fillMode", "size"], ["kendoButton", "", "type", "button", 3, "click", "icon", "title", "svgIcon", "themeColor", "fillMode", "size"]],
    template: function ActionSheetComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef(_c5);
        ɵɵtemplate(0, ActionSheetComponent_Conditional_0_Template, 7, 9);
      }
      if (rf & 2) {
        ɵɵconditional(ctx.expanded ? 0 : -1);
      }
    },
    dependencies: [NgStyle, NgClass, NgTemplateOutlet, ActionSheetListComponent, ButtonComponent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActionSheetComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoActionSheet",
      selector: "kendo-actionsheet",
      template: `
        @if (expanded) {
          <div class="k-overlay" (click)="onOverlayClick()"></div>
          <div class="k-animation-container k-animation-container-shown">
            <div #childContainer class="k-child-animation-container" [style]="'bottom: 0px; width: 100%;'">
              <div
                class="k-actionsheet k-actionsheet-bottom"
                [ngClass]="cssClass"
                [ngStyle]="cssStyle"
                role="dialog"
                aria-modal="true"
                [attr.aria-labelledby]="titleId"
                [style.--kendo-actionsheet-view-current]="actionSheetViews?.length > 0 ? currentView : null"
                >
                @if (actionSheetViews?.length > 0) {
                  <ng-content select="kendo-actionsheet-view"></ng-content>
                }
                @if (actionSheetViews?.length === 0) {
                  <div class="k-actionsheet-view">
                    @if (actionSheetTemplate) {
                      <ng-template
                        [ngTemplateOutlet]="actionSheetTemplate?.templateRef">
                      </ng-template>
                    } @else {
                      @if (title || subtitle || headerTemplate) {
                        <div class="k-actionsheet-titlebar">
                          @if (headerTemplate) {
                            <ng-template
                              [ngTemplateOutlet]="headerTemplate?.templateRef">
                            </ng-template>
                          } @else {
                            <div class="k-actionsheet-titlebar-group k-hbox">
                              <div class="k-actionsheet-title" [id]="titleId">
                                @if (title) {
                                  <div class="k-text-center">{{title}}</div>
                                }
                                @if (subtitle) {
                                  <div class="k-actionsheet-subtitle k-text-center">{{subtitle}}</div>
                                }
                              </div>
                            </div>
                          }
                        </div>
                      }
                      @if (items || contentTemplate) {
                        <div class="k-actionsheet-content">
                          @if (contentTemplate) {
                            <ng-template
                              [ngTemplateOutlet]="contentTemplate?.templateRef">
                            </ng-template>
                          } @else {
                            @if (topGroupItems) {
                              <div kendoActionSheetList
                                class="k-list-ul"
                                role="group"
                                [groupItems]="topGroupItems"
                                [allItems]="items"
                                [itemTemplate]="itemTemplate?.templateRef"
                                (itemClick)="onItemClick($event)">
                              </div>
                            }
                            @if (shouldRenderSeparator) {
                              <hr class="k-hr"/>
                            }
                            @if (bottomGroupItems) {
                              <div kendoActionSheetList
                                class="k-list-ul"
                                role="group"
                                [groupItems]="bottomGroupItems"
                                [allItems]="items"
                                [itemTemplate]="itemTemplate?.templateRef"
                                (itemClick)="onItemClick($event)">
                              </div>
                            }
                          }
                        </div>
                      }
                      @if (footerTemplate || actions) {
                        <div [ngClass]="[orientationClass, alignmentClass, 'k-actions', 'k-actionsheet-footer']">
                          @if (footerTemplate) {
                            <ng-template
                              [ngTemplateOutlet]="footerTemplate?.templateRef">
                            </ng-template>
                          }
                          @if (!footerTemplate && actions) {
                            @for (actionButton of actions; track actionButton) {
                              <button
                                kendoButton
                                type="button"
                                [icon]="actionButton.icon"
                                [title]="actionButton.title"
                                [svgIcon]="actionButton.svgIcon"
                                [themeColor]="actionButton.themeColor"
                                [fillMode]="actionButton.fillMode"
                                [size]="actionButton.size"
                                [attr.aria-label]="actionButton.text"
                                (click)="action.emit(actionButton)"
                                >
                                {{ actionButton.text }}
                              </button>
                            }
                          }
                        </div>
                      }
                    }
                  </div>
                }
              </div>
            </div>
          </div>
        }
        `,
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.actionsheet.component"
      }],
      standalone: true,
      imports: [NgStyle, NgClass, NgTemplateOutlet, ActionSheetListComponent, ButtonComponent]
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
    type: AnimationBuilder
  }, {
    type: ChangeDetectorRef
  }], {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-actionsheet-container"]
    }],
    direction: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    actions: [{
      type: Input
    }],
    actionsLayout: [{
      type: Input
    }],
    overlayClickClose: [{
      type: Input
    }],
    title: [{
      type: Input
    }],
    subtitle: [{
      type: Input
    }],
    items: [{
      type: Input
    }],
    cssClass: [{
      type: Input
    }],
    cssStyle: [{
      type: Input
    }],
    animation: [{
      type: Input
    }],
    expanded: [{
      type: Input
    }],
    titleId: [{
      type: Input
    }],
    initialFocus: [{
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
    itemClick: [{
      type: Output
    }],
    overlayClick: [{
      type: Output
    }],
    childContainer: [{
      type: ViewChild,
      args: ["childContainer"]
    }],
    actionSheetViews: [{
      type: ContentChildren,
      args: [forwardRef(() => ActionSheetViewComponent)]
    }],
    actionSheetTemplate: [{
      type: ContentChild,
      args: [ActionSheetTemplateDirective]
    }],
    headerTemplate: [{
      type: ContentChild,
      args: [ActionSheetHeaderTemplateDirective]
    }],
    contentTemplate: [{
      type: ContentChild,
      args: [ActionSheetContentTemplateDirective]
    }],
    itemTemplate: [{
      type: ContentChild,
      args: [ActionSheetItemTemplateDirective]
    }],
    footerTemplate: [{
      type: ContentChild,
      args: [ActionSheetFooterTemplateDirective]
    }]
  });
})();
var ActionSheetViewComponent = class _ActionSheetViewComponent {
  actionSheet;
  renderer;
  host;
  zone;
  title;
  subtitle;
  titleId = getId("k-actionsheet-title");
  hostClass = true;
  transitionDuration = "500ms";
  transitionProperty = "transform";
  headerTemplate;
  contentTemplate;
  footerTemplate;
  actionSheetTemplate;
  ngAfterViewInit() {
    this.zone.onStable.pipe(take(1)).subscribe(() => {
      if (this.actionSheet?.actionSheetViews?.length > 1) {
        this.renderer.addClass(this.host.nativeElement, "k-actionsheet-view-animated");
      }
    });
  }
  constructor(actionSheet, renderer, host, zone) {
    this.actionSheet = actionSheet;
    this.renderer = renderer;
    this.host = host;
    this.zone = zone;
  }
  get orientationClass() {
    return this.actionSheet?.orientationClass;
  }
  get alignmentClass() {
    return this.actionSheet?.alignmentClass;
  }
  static ɵfac = function ActionSheetViewComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ActionSheetViewComponent)(ɵɵdirectiveInject(ActionSheetComponent, 9), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _ActionSheetViewComponent,
    selectors: [["kendo-actionsheet-view"]],
    contentQueries: function ActionSheetViewComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, ActionSheetHeaderTemplateDirective, 5);
        ɵɵcontentQuery(dirIndex, ActionSheetContentTemplateDirective, 5);
        ɵɵcontentQuery(dirIndex, ActionSheetFooterTemplateDirective, 5);
        ɵɵcontentQuery(dirIndex, ActionSheetTemplateDirective, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.headerTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.footerTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.actionSheetTemplate = _t.first);
      }
    },
    hostVars: 6,
    hostBindings: function ActionSheetViewComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵstyleProp("transition-duration", ctx.transitionDuration)("transition-property", ctx.transitionProperty);
        ɵɵclassProp("k-actionsheet-view", ctx.hostClass);
      }
    },
    inputs: {
      title: "title",
      subtitle: "subtitle",
      titleId: "titleId"
    },
    standalone: true,
    features: [ɵɵStandaloneFeature],
    decls: 2,
    vars: 1,
    consts: [[3, "ngTemplateOutlet"], [1, "k-actionsheet-titlebar"], [1, "k-actionsheet-content"], [3, "ngClass"], [1, "k-actionsheet-titlebar-group", "k-hbox"], [1, "k-actionsheet-title", 3, "id"], [1, "k-text-center"], [1, "k-actionsheet-subtitle", "k-text-center"]],
    template: function ActionSheetViewComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, ActionSheetViewComponent_Conditional_0_Template, 1, 1, null, 0)(1, ActionSheetViewComponent_Conditional_1_Template, 3, 3);
      }
      if (rf & 2) {
        ɵɵconditional(ctx.actionSheetTemplate ? 0 : 1);
      }
    },
    dependencies: [NgClass, NgTemplateOutlet],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActionSheetViewComponent, [{
    type: Component,
    args: [{
      selector: "kendo-actionsheet-view",
      template: `
        @if (actionSheetTemplate) {
          <ng-template
            [ngTemplateOutlet]="actionSheetTemplate?.templateRef">
          </ng-template>
        } @else {
          @if (title || subtitle || headerTemplate) {
            <div class="k-actionsheet-titlebar">
              @if (headerTemplate) {
                <ng-template [ngTemplateOutlet]="headerTemplate.templateRef">
                </ng-template>
              } @else {
                <div class="k-actionsheet-titlebar-group k-hbox">
                  <div class="k-actionsheet-title" [id]="titleId">
                    @if (title) {
                      <div class="k-text-center">{{title}}</div>
                    }
                    @if (subtitle) {
                      <div class="k-actionsheet-subtitle k-text-center">{{subtitle}}</div>
                    }
                  </div>
                </div>
              }
            </div>
          }
          @if (contentTemplate) {
            <div class="k-actionsheet-content">
              <ng-template [ngTemplateOutlet]="contentTemplate.templateRef">
              </ng-template>
            </div>
          }
          @if (footerTemplate) {
            <div [ngClass]="[orientationClass, alignmentClass, 'k-actions', 'k-actionsheet-footer']">
              <ng-template [ngTemplateOutlet]="footerTemplate.templateRef">
              </ng-template>
            </div>
          }
        }
        
        `,
      standalone: true,
      imports: [NgClass, NgTemplateOutlet]
    }]
  }], () => [{
    type: ActionSheetComponent,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }]
  }, {
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    title: [{
      type: Input
    }],
    subtitle: [{
      type: Input
    }],
    titleId: [{
      type: Input
    }],
    hostClass: [{
      type: HostBinding,
      args: ["class.k-actionsheet-view"]
    }],
    transitionDuration: [{
      type: HostBinding,
      args: ["style.transition-duration"]
    }],
    transitionProperty: [{
      type: HostBinding,
      args: ["style.transition-property"]
    }],
    headerTemplate: [{
      type: ContentChild,
      args: [ActionSheetHeaderTemplateDirective]
    }],
    contentTemplate: [{
      type: ContentChild,
      args: [ActionSheetContentTemplateDirective]
    }],
    footerTemplate: [{
      type: ContentChild,
      args: [ActionSheetFooterTemplateDirective]
    }],
    actionSheetTemplate: [{
      type: ContentChild,
      args: [ActionSheetTemplateDirective]
    }]
  });
})();
var PreventableEvent = class {
  prevented = false;
  /**
   * Prevents the default action for a specified event.
   * In this way, the source component suppresses
   * the built-in behavior that follows the event.
   */
  preventDefault() {
    this.prevented = true;
  }
  /**
   * Returns `true` if the event was prevented
   * by any of its subscribers.
   *
   * @returns `true` if the default action was prevented.
   * Otherwise, returns `false`.
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
var BottomNavigationSelectEvent = class extends PreventableEvent {
  /**
   * Represents the index of the selected item in the `items` collection.
   */
  index;
  /**
   * Represents the selected BottomNavigation item.
   */
  item;
  /**
   * Provides the DOM event that triggered the selection.
   */
  originalEvent;
  /**
   * Provides a reference to the BottomNavigation instance that triggered the event.
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
var BottomNavigationItemTemplateDirective = class _BottomNavigationItemTemplateDirective {
  templateRef;
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static ɵfac = function BottomNavigationItemTemplateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BottomNavigationItemTemplateDirective)(ɵɵdirectiveInject(TemplateRef, 8));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _BottomNavigationItemTemplateDirective,
    selectors: [["", "kendoBottomNavigationItemTemplate", ""]],
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BottomNavigationItemTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoBottomNavigationItemTemplate]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
var closestInScope2 = (target, targetAttr, predicate, scope) => {
  while (target && target !== scope && !predicate(target, targetAttr)) {
    target = target.parentNode;
  }
  if (target !== scope) {
    return target;
  }
};
var hasItemIndex = (item, indexAttr) => isPresent2(item.getAttribute(indexAttr));
var itemIndex = (item, indexAttr) => +item.getAttribute(indexAttr);
var closestItem = (target, targetAttr, scope) => closestInScope2(target, targetAttr, hasItemIndex, scope);
var BOTTOMNAVIGATION_ITEM_INDEX = "data-kendo-bottomnavigation-index";
var colors = ["primary", "secondary", "tertiary", "info", "success", "warning", "error", "dark", "light", "inverse"];
var BottomNavigationItemComponent = class _BottomNavigationItemComponent {
  itemTemplate;
  item;
  index;
  disabledComponent;
  selectedIdx;
  orientation;
  get disabledClass() {
    return this.item.disabled;
  }
  get label() {
    return this.item.text ? this.item.text : null;
  }
  get tabindex() {
    return this.item.tabIndex ? this.item.tabIndex : 0;
  }
  get selectedClass() {
    return this.selectedIdx ? this.selectedIdx === this.index : this.item.selected;
  }
  get itemIcon() {
    return Boolean(this.item.icon || this.item.iconClass || this.item.svgIcon);
  }
  get iconClasses() {
    const kendoIcon = this.item.icon ? `k-icon k-i-${this.item.icon}` : "";
    const customIcon = this.item.iconClass ? this.item.iconClass : "";
    return `${kendoIcon} ${customIcon}`;
  }
  static ɵfac = function BottomNavigationItemComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BottomNavigationItemComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _BottomNavigationItemComponent,
    selectors: [["", "kendoBottomNavigationItem", ""]],
    hostVars: 8,
    hostBindings: function BottomNavigationItemComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("aria-disabled", ctx.disabledClass)("aria-label", ctx.label)("tabindex", ctx.tabindex)("aria-current", ctx.selectedClass);
        ɵɵclassProp("k-disabled", ctx.disabledClass)("k-selected", ctx.selectedClass);
      }
    },
    inputs: {
      itemTemplate: "itemTemplate",
      item: "item",
      index: "index",
      disabledComponent: "disabledComponent",
      selectedIdx: "selectedIdx",
      orientation: "orientation"
    },
    standalone: true,
    features: [ɵɵStandaloneFeature],
    attrs: _c8,
    decls: 2,
    vars: 2,
    consts: [[3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["innerCssClass", "k-bottom-nav-item-icon", "size", "xlarge", 3, "name", "customFontClass", "svgIcon"], [1, "k-bottom-nav-item-text"]],
    template: function BottomNavigationItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, BottomNavigationItemComponent_Conditional_0_Template, 2, 2)(1, BottomNavigationItemComponent_Conditional_1_Template, 1, 4, null, 0);
      }
      if (rf & 2) {
        ɵɵconditional(!ctx.itemTemplate ? 0 : -1);
        ɵɵadvance();
        ɵɵconditional(ctx.itemTemplate ? 1 : -1);
      }
    },
    dependencies: [IconWrapperComponent, NgTemplateOutlet],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BottomNavigationItemComponent, [{
    type: Component,
    args: [{
      // eslint-disable-next-line @angular-eslint/component-selector
      selector: "[kendoBottomNavigationItem]",
      template: `
        @if (!itemTemplate) {
          @if (itemIcon) {
            <kendo-icon-wrapper
              innerCssClass="k-bottom-nav-item-icon"
              size="xlarge"
              [name]="item.icon"
              [customFontClass]="item.iconClass"
            [svgIcon]="item.svgIcon"></kendo-icon-wrapper>
          }
          @if (item.text) {
            <span class="k-bottom-nav-item-text">{{item.text}}</span>
          }
        }
        @if (itemTemplate) {
          <ng-template
            [ngTemplateOutlet]="itemTemplate?.templateRef"
            [ngTemplateOutletContext]="{ $implicit: item }">
          </ng-template>
        }
        `,
      standalone: true,
      imports: [IconWrapperComponent, NgTemplateOutlet]
    }]
  }], null, {
    itemTemplate: [{
      type: Input
    }],
    item: [{
      type: Input
    }],
    index: [{
      type: Input
    }],
    disabledComponent: [{
      type: Input
    }],
    selectedIdx: [{
      type: Input
    }],
    orientation: [{
      type: Input
    }],
    disabledClass: [{
      type: HostBinding,
      args: ["attr.aria-disabled"]
    }, {
      type: HostBinding,
      args: ["class.k-disabled"]
    }],
    label: [{
      type: HostBinding,
      args: ["attr.aria-label"]
    }],
    tabindex: [{
      type: HostBinding,
      args: ["attr.tabindex"]
    }],
    selectedClass: [{
      type: HostBinding,
      args: ["attr.aria-current"]
    }, {
      type: HostBinding,
      args: ["class.k-selected"]
    }]
  });
})();
var BottomNavigationComponent = class _BottomNavigationComponent {
  localization;
  hostElement;
  ngZone;
  changeDetector;
  renderer;
  /**
   * Provides the collection of items rendered in the BottomNavigation ([see example]({% slug items_bottomnavigation %})).
   */
  items;
  /**
   * Shows a top border on the BottomNavigation ([see example]({% slug appearance_bottomnavigation %})).
   *
   * @default false
   */
  border = false;
  /**
   * Disables the entire BottomNavigation.
   *
   * @default false
   */
  disabled = false;
  /**
   * Sets the fill style of the BottomNavigation ([see example]({% slug appearance_bottomnavigation %})).
   *
   * @default 'flat'
   */
  set fill(fill) {
    this.renderer.removeClass(this._nativeHostElement, `k-bottom-nav-${this.fill}`);
    this.renderer.removeClass(this._nativeHostElement, `k-bottom-nav-${this.fill}-${this.themeColor}`);
    this._fill = fill === "solid" ? "solid" : "flat";
    this.renderer.addClass(this._nativeHostElement, `k-bottom-nav-${this._fill}`);
    this.renderer.addClass(this._nativeHostElement, `k-bottom-nav-${this._fill}-${this.themeColor}`);
  }
  get fill() {
    return this._fill;
  }
  /**
   * Controls how the icon and text label are positioned in the BottomNavigation items.
   *
   * @default 'vertical'
   */
  set itemFlow(itemFlow) {
    this.renderer.removeClass(this._nativeHostElement, `k-bottom-nav-item-flow-${this.itemFlow}`);
    this._itemFlow = itemFlow === "horizontal" ? "horizontal" : "vertical";
    this.renderer.addClass(this._nativeHostElement, `k-bottom-nav-item-flow-${this._itemFlow}`);
  }
  get itemFlow() {
    return this._itemFlow;
  }
  /**
   * Sets the position and behavior of the BottomNavigation when the page is scrollable ([see example]({% slug positioning_bottomnavigation %})).
   *
   * @default 'fixed'
   */
  set positionMode(positionMode) {
    this.renderer.removeClass(this._nativeHostElement, `k-pos-${this.positionMode}`);
    this._positionMode = positionMode === "sticky" ? "sticky" : "fixed";
    this.renderer.addClass(this._nativeHostElement, `k-pos-${this._positionMode}`);
  }
  get positionMode() {
    return this._positionMode;
  }
  /**
   * Sets the theme color of the BottomNavigation ([see example]({% slug appearance_bottomnavigation %})).
   *
   * @default 'primary'
   */
  set themeColor(themeColor) {
    const newColor = colors.find((color) => color === themeColor);
    if (newColor) {
      this.renderer.removeClass(this._nativeHostElement, `k-bottom-nav-${this.fill}-${this._themeColor}`);
      this._themeColor = themeColor;
      this.renderer.addClass(this._nativeHostElement, `k-bottom-nav-${this.fill}-${this._themeColor}`);
    }
  }
  get themeColor() {
    return this._themeColor;
  }
  /**
   * Fires when a user selects an item. This event is preventable.
   */
  select = new EventEmitter();
  /**
   * @hidden
   */
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
  get disabledClass() {
    return this.disabled;
  }
  /**
   * @hidden
   */
  role = "navigation";
  /**
   * @hidden
   */
  direction;
  /**
   * @hidden
   */
  itemTemplate;
  /**
   * @hidden
   */
  selectedIdx;
  _fill = "flat";
  _itemFlow = "vertical";
  _positionMode = "fixed";
  _themeColor = "primary";
  _nativeHostElement;
  dynamicRTLSubscription;
  subscriptions = new Subscription();
  rtl = false;
  constructor(localization, hostElement, ngZone, changeDetector, renderer) {
    this.localization = localization;
    this.hostElement = hostElement;
    this.ngZone = ngZone;
    this.changeDetector = changeDetector;
    this.renderer = renderer;
    A(packageMetadata);
    this._nativeHostElement = this.hostElement.nativeElement;
    this.dynamicRTLSubscription = this.localization.changes.subscribe(({
      rtl
    }) => {
      this.rtl = rtl;
      this.direction = this.rtl ? "rtl" : "ltr";
    });
  }
  /**
   * @hidden
   */
  ngOnInit() {
    this.initDomEvents();
  }
  /**
   * @hidden
   */
  ngAfterViewInit() {
    this.applyClasses();
  }
  /**
   * @hidden
   */
  ngOnDestroy() {
    if (this.dynamicRTLSubscription) {
      this.dynamicRTLSubscription.unsubscribe();
    }
    this.subscriptions.unsubscribe();
  }
  /**
   * @hidden
   */
  selectItem(idx2, args) {
    const eventArgs = new BottomNavigationSelectEvent(__spreadValues({}, args));
    this.select.emit(eventArgs);
    if (!eventArgs.isDefaultPrevented()) {
      this.selectedIdx = idx2;
    }
  }
  applyClasses() {
    this.renderer.addClass(this._nativeHostElement, `k-bottom-nav-${this.fill}`);
    this.renderer.addClass(this._nativeHostElement, `k-bottom-nav-item-flow-${this.itemFlow}`);
    this.renderer.addClass(this._nativeHostElement, `k-pos-${this.positionMode}`);
    this.renderer.addClass(this._nativeHostElement, `k-bottom-nav-${this.fill}-${this.themeColor}`);
  }
  initDomEvents() {
    if (!this.hostElement) {
      return;
    }
    this.ngZone.runOutsideAngular(() => {
      this.subscriptions.add(this.renderer.listen(this._nativeHostElement, "click", this.clickHandler.bind(this)));
      this.subscriptions.add(this.renderer.listen(this._nativeHostElement, "keydown", this.keyDownHandler.bind(this)));
    });
  }
  clickHandler(e) {
    const itemIdx = this.getBottomNavigationItemIndex(e.target);
    const item = this.items[itemIdx];
    if (!item) {
      return;
    }
    if (item.disabled) {
      e.preventDefault();
      return;
    }
    const args = {
      index: itemIdx,
      item,
      originalEvent: e,
      sender: this
    };
    this.ngZone.run(() => {
      this.selectItem(itemIdx, args);
      this.changeDetector.markForCheck();
    });
  }
  keyDownHandler(e) {
    const isEnterOrSpace = e.code === Keys.Enter || e.code === Keys.NumpadEnter || e.code === Keys.Space;
    if (!isEnterOrSpace) {
      return;
    }
    this.clickHandler(e);
  }
  getBottomNavigationItemIndex(target) {
    const item = closestItem(target, BOTTOMNAVIGATION_ITEM_INDEX, this._nativeHostElement);
    if (item) {
      return itemIndex(item, BOTTOMNAVIGATION_ITEM_INDEX);
    }
  }
  static ɵfac = function BottomNavigationComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BottomNavigationComponent)(ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Renderer2));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _BottomNavigationComponent,
    selectors: [["kendo-bottomnavigation"]],
    contentQueries: function BottomNavigationComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, BottomNavigationItemTemplateDirective, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.itemTemplate = _t.first);
      }
    },
    hostVars: 8,
    hostBindings: function BottomNavigationComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("role", ctx.role)("dir", ctx.direction);
        ɵɵclassProp("k-bottom-nav", ctx.hostClass)("k-bottom-nav-border", ctx.borderClass)("k-disabled", ctx.disabledClass);
      }
    },
    inputs: {
      items: "items",
      border: "border",
      disabled: "disabled",
      fill: "fill",
      itemFlow: "itemFlow",
      positionMode: "positionMode",
      themeColor: "themeColor"
    },
    outputs: {
      select: "select"
    },
    exportAs: ["kendoBottomNavigation"],
    standalone: true,
    features: [ɵɵProvidersFeature([LocalizationService, {
      provide: L10N_PREFIX,
      useValue: "kendo.bottomnavigation"
    }]), ɵɵStandaloneFeature],
    decls: 1,
    vars: 1,
    consts: [["kendoBottomNavigationItem", "", "role", "link", 1, "k-bottom-nav-item", 3, "disabledComponent", "item", "index", "selectedIdx", "itemTemplate", "ngClass", "ngStyle", "orientation"]],
    template: function BottomNavigationComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, BottomNavigationComponent_Conditional_0_Template, 2, 0);
      }
      if (rf & 2) {
        ɵɵconditional(ctx.items ? 0 : -1);
      }
    },
    dependencies: [BottomNavigationItemComponent, NgClass, NgStyle],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BottomNavigationComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoBottomNavigation",
      selector: "kendo-bottomnavigation",
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.bottomnavigation"
      }],
      template: `
        @if (items) {
          @for (item of items; track item; let idx = $index) {
            <span kendoBottomNavigationItem
              role="link"
              class="k-bottom-nav-item"
              [disabledComponent]="disabled"
              [item]="item"
              [index]="idx"
              [selectedIdx]="selectedIdx"
              [itemTemplate]="itemTemplate"
              [attr.${BOTTOMNAVIGATION_ITEM_INDEX}]="idx"
              [ngClass]="item.cssClass"
              [ngStyle]="item.cssStyle"
              [orientation]="itemFlow">
            </span>
          }
        }
        `,
      standalone: true,
      imports: [BottomNavigationItemComponent, NgClass, NgStyle]
    }]
  }], () => [{
    type: LocalizationService
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }, {
    type: ChangeDetectorRef
  }, {
    type: Renderer2
  }], {
    items: [{
      type: Input
    }],
    border: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    fill: [{
      type: Input
    }],
    itemFlow: [{
      type: Input
    }],
    positionMode: [{
      type: Input
    }],
    themeColor: [{
      type: Input
    }],
    select: [{
      type: Output
    }],
    hostClass: [{
      type: HostBinding,
      args: ["class.k-bottom-nav"]
    }],
    borderClass: [{
      type: HostBinding,
      args: ["class.k-bottom-nav-border"]
    }],
    disabledClass: [{
      type: HostBinding,
      args: ["class.k-disabled"]
    }],
    role: [{
      type: HostBinding,
      args: ["attr.role"]
    }],
    direction: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    itemTemplate: [{
      type: ContentChild,
      args: [BottomNavigationItemTemplateDirective, {
        static: false
      }]
    }]
  });
})();
var BreadCrumbItemTemplateDirective = class _BreadCrumbItemTemplateDirective {
  templateRef;
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static ɵfac = function BreadCrumbItemTemplateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BreadCrumbItemTemplateDirective)(ɵɵdirectiveInject(TemplateRef, 8));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _BreadCrumbItemTemplateDirective,
    selectors: [["", "kendoBreadCrumbItemTemplate", ""]],
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BreadCrumbItemTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoBreadCrumbItemTemplate]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
var BREADCRUMB_ITEM_INDEX = "data-kendo-breadcrumb-index";
var DEFAULT_SIZE = "medium";
var SIZES = {
  small: "sm",
  medium: "md",
  large: "lg"
};
var getStylingClasses = (stylingOption, previousValue, newValue) => {
  switch (stylingOption) {
    case "size":
      return {
        toRemove: `k-breadcrumb-${SIZES[previousValue]}`,
        toAdd: newValue !== "none" ? `k-breadcrumb-${SIZES[newValue]}` : ""
      };
    default:
      break;
  }
};
var BreadCrumbItemComponent = class _BreadCrumbItemComponent {
  el;
  item;
  collapseMode;
  index = -1;
  itemTemplate;
  hostClasses = true;
  get isRootItem() {
    return this.item.context.isFirst;
  }
  get isDisabled() {
    return this.disabled || null;
  }
  get isLastItem() {
    return this.item.context.isLast;
  }
  width;
  disabled = false;
  constructor(el) {
    this.el = el;
  }
  ngOnInit() {
    this.disabled = this.item.data && (this.item.data.disabled || this.item.context.isLast);
  }
  ngAfterViewInit() {
    if (isDocumentAvailable()) {
      this.width = outerWidth(this.el.nativeElement);
    }
  }
  onImageLoad() {
    if (isDocumentAvailable()) {
      this.width = outerWidth(this.el.nativeElement);
    }
  }
  static ɵfac = function BreadCrumbItemComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BreadCrumbItemComponent)(ɵɵdirectiveInject(ElementRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _BreadCrumbItemComponent,
    selectors: [["", "kendoBreadCrumbItem", ""]],
    hostVars: 7,
    hostBindings: function BreadCrumbItemComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("aria-disabled", ctx.isDisabled);
        ɵɵclassProp("k-breadcrumb-item", ctx.hostClasses)("k-breadcrumb-root-item", ctx.isRootItem)("k-breadcrumb-last-item", ctx.isLastItem);
      }
    },
    inputs: {
      item: "item",
      collapseMode: "collapseMode",
      index: "index",
      itemTemplate: "itemTemplate"
    },
    standalone: true,
    features: [ɵɵStandaloneFeature],
    attrs: _c9,
    ngContentSelectors: _c11,
    decls: 5,
    vars: 3,
    consts: [["separator", ""], [4, "ngTemplateOutlet"], ["role", "link", 3, "ngClass", "title", "tabindex"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["role", "presentation", 1, "k-image", 3, "src"], [3, "name", "customFontClass", "svgIcon"], [1, "k-breadcrumb-item-text"], ["role", "presentation", 1, "k-image", 3, "load", "src"]],
    template: function BreadCrumbItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef(_c10);
        ɵɵtemplate(0, BreadCrumbItemComponent_ng_template_0_Template, 1, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor)(2, BreadCrumbItemComponent_Conditional_2_Template, 1, 1, "ng-container")(3, BreadCrumbItemComponent_Conditional_3_Template, 2, 2)(4, BreadCrumbItemComponent_Conditional_4_Template, 1, 1, "ng-container");
      }
      if (rf & 2) {
        ɵɵadvance(2);
        ɵɵconditional(ctx.collapseMode === "wrap" ? 2 : -1);
        ɵɵadvance();
        ɵɵconditional(!ctx.item.context.collapsed ? 3 : -1);
        ɵɵadvance();
        ɵɵconditional(ctx.collapseMode !== "wrap" ? 4 : -1);
      }
    },
    dependencies: [NgTemplateOutlet, NgClass, IconWrapperComponent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BreadCrumbItemComponent, [{
    type: Component,
    args: [{
      // eslint-disable-next-line @angular-eslint/component-selector
      selector: "[kendoBreadCrumbItem]",
      template: `
        <ng-template #separator>
          <ng-content select="[kendoBreadCrumbSeparator]"></ng-content>
        </ng-template>
        
        @if (collapseMode === 'wrap') {
          <ng-container *ngTemplateOutlet="separator"></ng-container>
        }
        
        @if (!item.context.collapsed) {
          @if (!itemTemplate) {
            <span
                [ngClass]="{
                    'k-breadcrumb-root-link': item.context.isFirst,
                    'k-breadcrumb-link': index !== 0,
                    'k-breadcrumb-icontext-link': (!!item.data.icon || !!item.data.svgIcon) && !!item.data.text,
                    'k-breadcrumb-icon-link': (!!item.data.icon || !!item.data.svgIcon) && !item.data.text,
                    'k-disabled': disabled
                }"
              [title]="item.data.title || ''"
              [tabindex]="disabled ? -1 : 0"
              [attr.aria-disabled]="disabled"
              [attr.aria-current]="item.context.isLast ? 'page' : null"
              role="link"
              >
              @if (item.data.imageUrl) {
                <img (load)="onImageLoad()" [src]="item.data.imageUrl" class="k-image" role="presentation" />
              }
              @if (item.data.icon || item.data.iconClass || item.data.svgIcon) {
                <kendo-icon-wrapper
                  [name]="item.data.icon"
                  [customFontClass]="item.data.iconClass"
                  [svgIcon]="item.data.svgIcon"
                  >
                </kendo-icon-wrapper>
              }
              <span class="k-breadcrumb-item-text">{{ item.data.text }}</span>
            </span>
          }
          @if (itemTemplate) {
            <ng-template
              [ngTemplateOutlet]="itemTemplate"
                [ngTemplateOutletContext]="{
                    $implicit: item.data,
                    index: index
                }"
            ></ng-template>
          }
        }
        
        @if (collapseMode !== 'wrap') {
          <ng-container *ngTemplateOutlet="separator"></ng-container>
        }
        `,
      standalone: true,
      imports: [NgTemplateOutlet, NgClass, IconWrapperComponent]
    }]
  }], () => [{
    type: ElementRef
  }], {
    item: [{
      type: Input
    }],
    collapseMode: [{
      type: Input
    }],
    index: [{
      type: Input
    }],
    itemTemplate: [{
      type: Input
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class.k-breadcrumb-item"]
    }],
    isRootItem: [{
      type: HostBinding,
      args: ["class.k-breadcrumb-root-item"]
    }],
    isDisabled: [{
      type: HostBinding,
      args: ["attr.aria-disabled"]
    }],
    isLastItem: [{
      type: HostBinding,
      args: ["class.k-breadcrumb-last-item"]
    }]
  });
})();
var DEFAULT_ICON = "chevron-right";
var DEFAULT_RTL_ICON = "chevron-left";
var DEFAULT_SVG_ICON = chevronRightIcon;
var DEFAULT_RTL_SVG_ICON = chevronLeftIcon;
var BreadCrumbSeparatorDirective = class _BreadCrumbSeparatorDirective {
  el;
  localization;
  set icon(icon) {
    if (isPresent2(icon)) {
      this._icon = icon;
      this.hasDefaultIcon = false;
    } else {
      this._icon = this.direction === "ltr" ? DEFAULT_ICON : DEFAULT_RTL_ICON;
      this.hasDefaultIcon = true;
    }
  }
  get icon() {
    return this._icon;
  }
  set svgIcon(svgIcon) {
    if (isPresent2(svgIcon)) {
      this._svgIcon = svgIcon;
      this.hasDefaultSvgIcon = false;
    } else {
      this._svgIcon = this.direction === "ltr" ? DEFAULT_SVG_ICON : DEFAULT_RTL_SVG_ICON;
      this.hasDefaultSvgIcon = true;
    }
  }
  get svgIcon() {
    return this._svgIcon;
  }
  ariaHidden = true;
  _icon;
  _svgIcon;
  hasDefaultIcon;
  hasDefaultSvgIcon;
  direction = "ltr";
  localizationChangesSubscription;
  constructor(el, localization) {
    this.el = el;
    this.localization = localization;
    this.direction = this.localization.rtl ? "rtl" : "ltr";
  }
  ngOnInit() {
    this.localizationChangesSubscription = this.localization.changes.subscribe(({
      rtl
    }) => {
      this.direction = rtl ? "rtl" : "ltr";
      if (this.hasDefaultIcon) {
        this.icon = void 0;
      }
      if (this.hasDefaultSvgIcon) {
        this.svgIcon = void 0;
      }
    });
  }
  ngOnDestroy() {
    this.localizationChangesSubscription.unsubscribe();
  }
  static ɵfac = function BreadCrumbSeparatorDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BreadCrumbSeparatorDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(LocalizationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _BreadCrumbSeparatorDirective,
    selectors: [["", "kendoBreadCrumbSeparator", ""]],
    hostVars: 1,
    hostBindings: function BreadCrumbSeparatorDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("aria-hidden", ctx.ariaHidden);
      }
    },
    inputs: {
      icon: "icon",
      svgIcon: "svgIcon"
    },
    standalone: true,
    features: [ɵɵStandaloneFeature],
    attrs: _c14,
    decls: 1,
    vars: 2,
    consts: [["size", "xsmall", "innerCssClass", "k-breadcrumb-delimiter-icon", 3, "name", "svgIcon"]],
    template: function BreadCrumbSeparatorDirective_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelement(0, "kendo-icon-wrapper", 0);
      }
      if (rf & 2) {
        ɵɵproperty("name", ctx.icon)("svgIcon", ctx.svgIcon);
      }
    },
    dependencies: [IconWrapperComponent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BreadCrumbSeparatorDirective, [{
    type: Component,
    args: [{
      selector: "[kendoBreadCrumbSeparator]",
      template: `
        <kendo-icon-wrapper
            size='xsmall'
            [name]="icon"
            [svgIcon]="svgIcon"
            innerCssClass="k-breadcrumb-delimiter-icon"
        >
        </kendo-icon-wrapper>
    `,
      standalone: true,
      imports: [IconWrapperComponent]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: LocalizationService
  }], {
    icon: [{
      type: Input
    }],
    svgIcon: [{
      type: Input
    }],
    ariaHidden: [{
      type: HostBinding,
      args: ["attr.aria-hidden"]
    }]
  });
})();
var BreadCrumbListComponent = class _BreadCrumbListComponent {
  el;
  zone;
  items = [];
  itemTemplate;
  collapseMode = "auto";
  separatorIcon;
  separatorSVGIcon;
  itemClick = new EventEmitter();
  renderedItems;
  isRootItemContainer;
  domEventsSubscription;
  constructor(el, zone) {
    this.el = el;
    this.zone = zone;
    const element = this.el.nativeElement;
    this.isRootItemContainer = element.classList.contains("k-breadcrumb-root-item-container");
    this.zone.runOutsideAngular(() => {
      const click$ = fromEvent(element, "click");
      const enterKey$ = fromEvent(element, "keydown").pipe(filter((ev) => ev.code === Keys.Enter || ev.code === Keys.NumpadEnter));
      this.domEventsSubscription = merge(click$, enterKey$).pipe(
        map((ev) => ev.target),
        filter((e) => !e.classList.contains("k-breadcrumb-delimiter-icon")),
        // do not trigger handler when a separator is clicked
        map((e) => this.getItemIndex(e)),
        filter(isPresent2),
        map((i) => parseInt(i, 10)),
        map((i) => this.items[i]),
        filter((item) => !item.data.disabled && !item.context.isLast),
        map((item) => item.data)
      ).subscribe((el2) => {
        this.zone.run(() => this.itemClick.emit(el2));
      });
    });
  }
  ngOnDestroy() {
    this.domEventsSubscription.unsubscribe();
  }
  getItemIndex(target) {
    const item = closestItem(target, BREADCRUMB_ITEM_INDEX, this.el.nativeElement);
    if (item) {
      return itemIndex(item, BREADCRUMB_ITEM_INDEX);
    }
  }
  static ɵfac = function BreadCrumbListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BreadCrumbListComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _BreadCrumbListComponent,
    selectors: [["", "kendoBreadCrumbList", ""]],
    viewQuery: function BreadCrumbListComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(BreadCrumbItemComponent, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.renderedItems = _t);
      }
    },
    inputs: {
      items: "items",
      itemTemplate: "itemTemplate",
      collapseMode: "collapseMode",
      separatorIcon: "separatorIcon",
      separatorSVGIcon: "separatorSVGIcon"
    },
    outputs: {
      itemClick: "itemClick"
    },
    standalone: true,
    features: [ɵɵStandaloneFeature],
    attrs: _c15,
    decls: 2,
    vars: 0,
    consts: [["renderedItem", ""], ["kendoBreadCrumbItem", "", 3, "item", "index", "collapseMode", "itemTemplate"], ["kendoBreadCrumbSeparator", "", 3, "icon", "svgIcon"]],
    template: function BreadCrumbListComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵrepeaterCreate(0, BreadCrumbListComponent_For_1_Template, 1, 1, null, null, ɵɵrepeaterTrackByIdentity);
      }
      if (rf & 2) {
        ɵɵrepeater(ctx.items);
      }
    },
    dependencies: [BreadCrumbItemComponent, BreadCrumbSeparatorDirective],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BreadCrumbListComponent, [{
    type: Component,
    args: [{
      // eslint-disable-next-line @angular-eslint/component-selector
      selector: "[kendoBreadCrumbList]",
      template: `
        @for (item of items; track item; let i = $index; let isFirst = $first; let isLast = $last) {
          @if (!(collapseMode === 'wrap' && isFirst) || isRootItemContainer) {
            <li
              #renderedItem
              kendoBreadCrumbItem
              [attr.${BREADCRUMB_ITEM_INDEX}]="i"
              [item]="item"
              [index]="i"
              [collapseMode]="collapseMode"
              [itemTemplate]="itemTemplate"
              >
              @if (collapseMode === 'wrap' && !isFirst) {
                <span kendoBreadCrumbSeparator [icon]="separatorIcon" [svgIcon]="separatorSVGIcon"></span>
              }
              @if (collapseMode !== 'wrap' && !isLast && !(item?.context.collapsed && items[i + 1]?.context.collapsed)) {
                <span
                  kendoBreadCrumbSeparator
                  [icon]="separatorIcon"
                  [svgIcon]="separatorSVGIcon"
                ></span>
              }
            </li>
          }
        }
        `,
      standalone: true,
      imports: [BreadCrumbItemComponent, BreadCrumbSeparatorDirective]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: NgZone
  }], {
    items: [{
      type: Input
    }],
    itemTemplate: [{
      type: Input
    }],
    collapseMode: [{
      type: Input
    }],
    separatorIcon: [{
      type: Input
    }],
    separatorSVGIcon: [{
      type: Input
    }],
    itemClick: [{
      type: Output
    }],
    renderedItems: [{
      type: ViewChildren,
      args: [BreadCrumbItemComponent]
    }]
  });
})();
var getCollapsed = (itemComponent) => itemComponent.item.context.collapsed;
var collapsed = (itemComponent) => getCollapsed(itemComponent) === true;
var expanded = (itemComponent) => getCollapsed(itemComponent) === false;
var toggleFirst = (collapsed2) => (itemComponents) => itemComponents.find((ic) => getCollapsed(ic) === collapsed2).item.context.collapsed = !collapsed2;
var collapseFirst = toggleFirst(false);
var expandFirst = toggleFirst(true);
var BreadCrumbComponent = class _BreadCrumbComponent {
  localization;
  el;
  cdr;
  zone;
  renderer;
  /**
   * Configures the collection of items that will be rendered in the Breadcrumb.
   */
  set items(items) {
    this._items = items || [];
    this.updateItems.next(this._items);
  }
  get items() {
    return this._items;
  }
  /**
   * Specifies the name of a [built-in font icon](slug:icon_list) in a Kendo UI theme to be rendered as a separator.
   */
  separatorIcon;
  /**
   * Defines an [`SVGIcon`](slug:api_icons_svgicon) to be rendered as a separator.
   */
  separatorSVGIcon;
  /**
   * Controls the collapse mode of the Breadcrumb.
   * For more information and example, refer to the [Collapse Modes]({% slug collapse_modes_breadcrumb %}) article.
   *
   * @default `auto`
   */
  set collapseMode(mode) {
    if (isDevMode() && ["auto", "wrap", "none"].indexOf(mode) < 0) {
      throw new Error('Invalid collapse mode. Allowed values are "auto", "wrap" or "none". \nFor more details see https://www.telerik.com/kendo-angular-ui/components/navigation/api/BreadCrumbCollapseMode/');
    }
    this._collapseMode = mode || "auto";
    this.updateItems.next(this.items);
  }
  get collapseMode() {
    return this._collapseMode;
  }
  /**
   * Determines the padding of all Breadcrumb elements.
   *
   * @default `medium`
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
   * Fires when you click a Breadcrumb item. The event will not be fired by disabled items and the last item.
   */
  itemClick = new EventEmitter();
  /**
   * @hidden
   */
  resizeSensor;
  /**
   * @hidden
   */
  itemsContainers;
  /**
   * @hidden
   */
  listComponent;
  /**
   * @hidden
   */
  itemTemplate;
  hostClasses = true;
  get wrapMode() {
    return this.collapseMode === "wrap";
  }
  hostAriaLabel = "Breadcrumb";
  get getDir() {
    return this.direction;
  }
  itemsData$;
  firstItem$;
  _items = [];
  _collapseMode = "auto";
  _size = DEFAULT_SIZE;
  updateItems = new ReplaySubject();
  afterViewInit = new Subject();
  subscriptions = new Subscription();
  direction = "ltr";
  constructor(localization, el, cdr, zone, renderer) {
    this.localization = localization;
    this.el = el;
    this.cdr = cdr;
    this.zone = zone;
    this.renderer = renderer;
    A(packageMetadata);
    const updateItems$ = this.updateItems.asObservable().pipe(startWith([]));
    this.direction = localization.rtl ? "rtl" : "ltr";
    this.itemsData$ = updateItems$.pipe(map((items) => items.filter(Boolean)), map((items) => items.map((item, index, collection) => ({
      context: {
        collapsed: false,
        isLast: index === collection.length - 1,
        isFirst: index === 0
      },
      data: item
    }))), share());
    this.firstItem$ = updateItems$.pipe(map((items) => {
      if (items.length > 0) {
        return [{
          context: {
            collapsed: false,
            isLast: items.length === 1,
            isFirst: true
          },
          data: items[0]
        }];
      }
      return [];
    }), share());
  }
  ngOnInit() {
    this.subscriptions.add(this.localization.changes.subscribe(({
      rtl
    }) => this.direction = rtl ? "rtl" : "ltr"));
    this.handleClasses(this.size, "size");
  }
  ngAfterViewInit() {
    this.attachResizeHandler();
    this.afterViewInit.next(void 0);
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  handleResize() {
    const autoCollapseCandidates = [...this.listComponent.renderedItems.toArray().filter((ri) => !ri.item.context.isFirst && !ri.item.context.isLast)];
    const componentWidth = Math.floor(outerWidth(this.el.nativeElement));
    const itemsContainerWidth = Math.round(this.itemsContainers.toArray().map((el) => outerWidth(el.nativeElement)).reduce((acc, curr) => acc + curr, 0));
    const nextExpandWidth = Math.ceil(([...autoCollapseCandidates].reverse().find(collapsed) || {
      width: 0
    }).width);
    if (componentWidth <= itemsContainerWidth && autoCollapseCandidates.find(expanded)) {
      collapseFirst(autoCollapseCandidates);
      this.cdr.detectChanges();
      return this.handleResize();
    }
    if (componentWidth > itemsContainerWidth + nextExpandWidth && autoCollapseCandidates.find(collapsed)) {
      expandFirst([...autoCollapseCandidates].reverse());
      this.cdr.detectChanges();
      return this.handleResize();
    }
  }
  shouldResize() {
    return isDocumentAvailable() && this.collapseMode === "auto";
  }
  attachResizeHandler() {
    this.subscriptions.add(merge(this.resizeSensor.resize, this.itemsData$, this.afterViewInit.asObservable()).pipe(filter(() => this.shouldResize())).subscribe(() => {
      this.resizeHandler();
    }));
  }
  handleClasses(value, input) {
    const elem = this.el.nativeElement;
    const classes = getStylingClasses(input, this[input], value);
    if (classes.toRemove) {
      this.renderer.removeClass(elem, classes.toRemove);
    }
    if (classes.toAdd) {
      this.renderer.addClass(elem, classes.toAdd);
    }
  }
  resizeHandler = () => {
    this.zone.runOutsideAngular(() => setTimeout(() => {
      this.zone.run(() => {
        if (this.listComponent) {
          this.handleResize();
          this.resizeSensor.acceptSize();
        }
      });
    }));
  };
  static ɵfac = function BreadCrumbComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BreadCrumbComponent)(ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Renderer2));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _BreadCrumbComponent,
    selectors: [["kendo-breadcrumb"]],
    contentQueries: function BreadCrumbComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, BreadCrumbItemTemplateDirective, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.itemTemplate = _t.first);
      }
    },
    viewQuery: function BreadCrumbComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c16, 7);
        ɵɵviewQuery(BreadCrumbListComponent, 7);
        ɵɵviewQuery(_c17, 5, ElementRef);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.resizeSensor = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.listComponent = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.itemsContainers = _t);
      }
    },
    hostVars: 6,
    hostBindings: function BreadCrumbComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("aria-label", ctx.hostAriaLabel)("dir", ctx.getDir);
        ɵɵclassProp("k-breadcrumb", ctx.hostClasses)("k-breadcrumb-wrap", ctx.wrapMode);
      }
    },
    inputs: {
      items: "items",
      separatorIcon: "separatorIcon",
      separatorSVGIcon: "separatorSVGIcon",
      collapseMode: "collapseMode",
      size: "size"
    },
    outputs: {
      itemClick: "itemClick"
    },
    exportAs: ["kendoBreadCrumb"],
    standalone: true,
    features: [ɵɵProvidersFeature([LocalizationService, {
      provide: L10N_PREFIX,
      useValue: "kendo.breadcrumb"
    }]), ɵɵStandaloneFeature],
    decls: 6,
    vars: 13,
    consts: [["itemsContainer", ""], ["resizeSensor", ""], ["kendoBreadCrumbList", "", 1, "k-breadcrumb-root-item-container", 3, "items", "itemTemplate", "collapseMode", "separatorIcon", "separatorSVGIcon"], ["kendoBreadCrumbList", "", 1, "k-breadcrumb-container", 3, "itemClick", "items", "itemTemplate", "collapseMode", "separatorIcon", "separatorSVGIcon", "ngClass"], [3, "rateLimit"], ["kendoBreadCrumbList", "", 1, "k-breadcrumb-root-item-container", 3, "itemClick", "items", "itemTemplate", "collapseMode", "separatorIcon", "separatorSVGIcon"]],
    template: function BreadCrumbComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵtemplate(0, BreadCrumbComponent_Conditional_0_Template, 3, 7, "ol", 2);
        ɵɵelementStart(1, "ol", 3, 0);
        ɵɵpipe(3, "async");
        ɵɵlistener("itemClick", function BreadCrumbComponent_Template_ol_itemClick_1_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.itemClick.emit($event));
        });
        ɵɵelementEnd();
        ɵɵelement(4, "kendo-resize-sensor", 4, 1);
      }
      if (rf & 2) {
        ɵɵconditional(ctx.collapseMode === "wrap" ? 0 : -1);
        ɵɵadvance();
        ɵɵproperty("items", ɵɵpipeBind1(3, 8, ctx.itemsData$))("itemTemplate", ctx.itemTemplate == null ? null : ctx.itemTemplate.templateRef)("collapseMode", ctx.collapseMode)("separatorIcon", ctx.separatorIcon)("separatorSVGIcon", ctx.separatorSVGIcon)("ngClass", ɵɵpureFunction2(10, _c18, ctx.collapseMode === "wrap", ctx.collapseMode === "none"));
        ɵɵadvance(3);
        ɵɵproperty("rateLimit", 1e3);
      }
    },
    dependencies: [BreadCrumbListComponent, NgClass, ResizeSensorComponent, AsyncPipe],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BreadCrumbComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoBreadCrumb",
      selector: "kendo-breadcrumb",
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.breadcrumb"
      }],
      template: `
        @if (collapseMode === 'wrap') {
          <ol
            #itemsContainer
            kendoBreadCrumbList
            class="k-breadcrumb-root-item-container"
            [items]="firstItem$ | async"
            [itemTemplate]="itemTemplate?.templateRef"
            [collapseMode]="collapseMode"
            [separatorIcon]="separatorIcon"
            [separatorSVGIcon]="separatorSVGIcon"
            (itemClick)="itemClick.emit($event)"
          ></ol>
        }
        <ol
          #itemsContainer
          kendoBreadCrumbList
          class="k-breadcrumb-container"
          [items]="itemsData$ | async"
          [itemTemplate]="itemTemplate?.templateRef"
          [collapseMode]="collapseMode"
          [separatorIcon]="separatorIcon"
          [separatorSVGIcon]="separatorSVGIcon"
          (itemClick)="itemClick.emit($event)"
          [ngClass]="{ '!k-flex-wrap': collapseMode === 'wrap', 'k-flex-none': collapseMode === 'none' }"
        ></ol>
        <kendo-resize-sensor [rateLimit]="1000" #resizeSensor></kendo-resize-sensor>
        `,
      standalone: true,
      imports: [BreadCrumbListComponent, NgClass, ResizeSensorComponent, AsyncPipe]
    }]
  }], () => [{
    type: LocalizationService
  }, {
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }, {
    type: NgZone
  }, {
    type: Renderer2
  }], {
    items: [{
      type: Input
    }],
    separatorIcon: [{
      type: Input
    }],
    separatorSVGIcon: [{
      type: Input
    }],
    collapseMode: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    itemClick: [{
      type: Output
    }],
    resizeSensor: [{
      type: ViewChild,
      args: ["resizeSensor", {
        static: true
      }]
    }],
    itemsContainers: [{
      type: ViewChildren,
      args: ["itemsContainer", {
        read: ElementRef
      }]
    }],
    listComponent: [{
      type: ViewChild,
      args: [BreadCrumbListComponent, {
        static: true
      }]
    }],
    itemTemplate: [{
      type: ContentChild,
      args: [BreadCrumbItemTemplateDirective]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class.k-breadcrumb"]
    }],
    wrapMode: [{
      type: HostBinding,
      args: ["class.k-breadcrumb-wrap"]
    }],
    hostAriaLabel: [{
      type: HostBinding,
      args: ["attr.aria-label"]
    }],
    getDir: [{
      type: HostBinding,
      args: ["attr.dir"]
    }]
  });
})();
var KENDO_ACTIONSHEET = [ActionSheetComponent, ActionSheetViewComponent, ActionSheetHeaderTemplateDirective, ActionSheetItemTemplateDirective, ActionSheetContentTemplateDirective, ActionSheetFooterTemplateDirective, ActionSheetTemplateDirective];
var KENDO_APPBAR = [AppBarComponent, AppBarSectionComponent, AppBarSpacerComponent];
var KENDO_BOTTOMNAVIGATION = [BottomNavigationComponent, BottomNavigationItemTemplateDirective];
var KENDO_BREADCRUMB = [BreadCrumbComponent, BreadCrumbItemTemplateDirective];
var KENDO_NAVIGATION = [...KENDO_ACTIONSHEET, ...KENDO_APPBAR, ...KENDO_BOTTOMNAVIGATION, ...KENDO_BREADCRUMB];
var AppBarModule = class _AppBarModule {
  static ɵfac = function AppBarModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppBarModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _AppBarModule,
    imports: [AppBarComponent, AppBarSectionComponent, AppBarSpacerComponent],
    exports: [AppBarComponent, AppBarSectionComponent, AppBarSpacerComponent]
  });
  static ɵinj = ɵɵdefineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppBarModule, [{
    type: NgModule,
    args: [{
      exports: [...KENDO_APPBAR],
      imports: [...KENDO_APPBAR]
    }]
  }], null, null);
})();
var NavigationModule = class _NavigationModule {
  static ɵfac = function NavigationModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NavigationModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _NavigationModule,
    imports: [ActionSheetComponent, ActionSheetViewComponent, ActionSheetHeaderTemplateDirective, ActionSheetItemTemplateDirective, ActionSheetContentTemplateDirective, ActionSheetFooterTemplateDirective, ActionSheetTemplateDirective, AppBarComponent, AppBarSectionComponent, AppBarSpacerComponent, BottomNavigationComponent, BottomNavigationItemTemplateDirective, BreadCrumbComponent, BreadCrumbItemTemplateDirective],
    exports: [ActionSheetComponent, ActionSheetViewComponent, ActionSheetHeaderTemplateDirective, ActionSheetItemTemplateDirective, ActionSheetContentTemplateDirective, ActionSheetFooterTemplateDirective, ActionSheetTemplateDirective, AppBarComponent, AppBarSectionComponent, AppBarSpacerComponent, BottomNavigationComponent, BottomNavigationItemTemplateDirective, BreadCrumbComponent, BreadCrumbItemTemplateDirective]
  });
  static ɵinj = ɵɵdefineInjector({
    providers: [IconsService, ResizeBatchService],
    imports: [ActionSheetComponent, BottomNavigationComponent, BreadCrumbComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavigationModule, [{
    type: NgModule,
    args: [{
      imports: [...KENDO_NAVIGATION],
      exports: [...KENDO_NAVIGATION],
      providers: [IconsService, ResizeBatchService]
    }]
  }], null, null);
})();
var BreadCrumbModule = class _BreadCrumbModule {
  static ɵfac = function BreadCrumbModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BreadCrumbModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _BreadCrumbModule,
    imports: [BreadCrumbComponent, BreadCrumbItemTemplateDirective],
    exports: [BreadCrumbComponent, BreadCrumbItemTemplateDirective]
  });
  static ɵinj = ɵɵdefineInjector({
    providers: [IconsService, ResizeBatchService],
    imports: [BreadCrumbComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BreadCrumbModule, [{
    type: NgModule,
    args: [{
      exports: [...KENDO_BREADCRUMB],
      imports: [...KENDO_BREADCRUMB],
      providers: [IconsService, ResizeBatchService]
    }]
  }], null, null);
})();
var BottomNavigationModule = class _BottomNavigationModule {
  static ɵfac = function BottomNavigationModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BottomNavigationModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _BottomNavigationModule,
    imports: [BottomNavigationComponent, BottomNavigationItemTemplateDirective],
    exports: [BottomNavigationComponent, BottomNavigationItemTemplateDirective]
  });
  static ɵinj = ɵɵdefineInjector({
    providers: [IconsService],
    imports: [BottomNavigationComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BottomNavigationModule, [{
    type: NgModule,
    args: [{
      exports: [...KENDO_BOTTOMNAVIGATION],
      imports: [...KENDO_BOTTOMNAVIGATION],
      providers: [IconsService]
    }]
  }], null, null);
})();
var ActionSheetModule = class _ActionSheetModule {
  static ɵfac = function ActionSheetModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ActionSheetModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _ActionSheetModule,
    imports: [ActionSheetComponent, ActionSheetViewComponent, ActionSheetHeaderTemplateDirective, ActionSheetItemTemplateDirective, ActionSheetContentTemplateDirective, ActionSheetFooterTemplateDirective, ActionSheetTemplateDirective],
    exports: [ActionSheetComponent, ActionSheetViewComponent, ActionSheetHeaderTemplateDirective, ActionSheetItemTemplateDirective, ActionSheetContentTemplateDirective, ActionSheetFooterTemplateDirective, ActionSheetTemplateDirective]
  });
  static ɵinj = ɵɵdefineInjector({
    providers: [IconsService],
    imports: [ActionSheetComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActionSheetModule, [{
    type: NgModule,
    args: [{
      exports: [...KENDO_ACTIONSHEET],
      imports: [...KENDO_ACTIONSHEET],
      providers: [IconsService]
    }]
  }], null, null);
})();

export {
  AppBarComponent,
  ActionSheetHeaderTemplateDirective,
  ActionSheetContentTemplateDirective,
  ActionSheetFooterTemplateDirective,
  ActionSheetTemplateDirective,
  ActionSheetComponent,
  ActionSheetViewComponent,
  BreadCrumbComponent
};
//# sourceMappingURL=chunk-GIR42TIA.js.map
