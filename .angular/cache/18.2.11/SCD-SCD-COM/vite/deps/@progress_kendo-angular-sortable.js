import {
  Draggable,
  EventsOutsideAngularDirective,
  Keys,
  focusableSelector,
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
import {
  NgClass,
  NgStyle,
  NgTemplateOutlet
} from "./chunk-YS5E6LKP.js";
import {
  ChangeDetectorRef,
  Component,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  Injectable,
  Input,
  NgModule,
  NgZone,
  Output,
  QueryList,
  Renderer2,
  TemplateRef,
  ViewChild,
  ViewChildren,
  forwardRef,
  setClassMetadata,
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
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-R7LRY632.js";
import {
  merge
} from "./chunk-UG3XN6F5.js";
import "./chunk-K3IIKLCY.js";
import {
  Subject,
  filter,
  switchMap,
  take,
  tap
} from "./chunk-WISTXZPE.js";
import "./chunk-N6ESDQJH.js";

// node_modules/@progress/kendo-angular-sortable/fesm2022/progress-kendo-angular-sortable.mjs
var _c0 = ["noDataRef"];
var _c1 = ["hint"];
var _c2 = ["itemWrapper"];
var _c3 = (a0) => ({
  keydown: a0
});
var _c4 = (a0) => ({
  item: a0
});
function SortableComponent_For_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 5);
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    const item_r5 = ctx_r3.$implicit;
    const ɵ$index_1_r2 = ctx_r3.$index;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.itemTemplate(ɵ$index_1_r2))("ngTemplateOutletContext", item_r5);
  }
}
function SortableComponent_For_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const item_r5 = ɵɵnextContext().$implicit;
    ɵɵtextInterpolate1(" ", item_r5.item, " ");
  }
}
function SortableComponent_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 4, 0);
    ɵɵlistener("focus", function SortableComponent_For_1_Template_div_focus_0_listener() {
      const ɵ$index_1_r2 = ɵɵrestoreView(_r1).$index;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.focusHandler(ɵ$index_1_r2));
    })("blur", function SortableComponent_For_1_Template_div_blur_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.blurHandler());
    });
    ɵɵtemplate(2, SortableComponent_For_1_Conditional_2_Template, 1, 2, "ng-container", 5)(3, SortableComponent_For_1_Conditional_3_Template, 1, 1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ɵ$index_1_r2 = ctx.$index;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("index", ɵ$index_1_r2)("hidden", item_r5.hidden)("disabled", !ctx_r2.itemEnabled(ɵ$index_1_r2))("ngClass", ctx_r2.currentItemClass(ɵ$index_1_r2))("ngStyle", ctx_r2.currentItemStyle(ɵ$index_1_r2))("kendoEventsOutsideAngular", ɵɵpureFunction1(15, _c3, ctx_r2.keydownHandler));
    ɵɵattribute("aria-grabbed", ɵ$index_1_r2 === ctx_r2.dragIndex)("aria-disabled", !ctx_r2.itemEnabled(ɵ$index_1_r2))("aria-keyshortcuts", ctx_r2.navigable ? ctx_r2.ariaKeyShortcuts : "")("aria-dropeffect", ctx_r2.ariaDropEffect(ɵ$index_1_r2))("data-sortable-item", true)("data-sortable-index", ɵ$index_1_r2)("data-sortable-id", ctx_r2.id);
    ɵɵadvance(2);
    ɵɵconditional(ctx_r2.itemTemplateRef ? 2 : -1);
    ɵɵadvance();
    ɵɵconditional(!ctx_r2.itemTemplateRef ? 3 : -1);
  }
}
function SortableComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0, null, 1);
    ɵɵelementStart(2, "div", 6);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("index", 0)("disabled", true)("ngStyle", ctx_r2.currentItemStyle(-1))("ngClass", ctx_r2.currentItemClass(-1));
    ɵɵattribute("data-sortable-id", ctx_r2.id)("data-sortable-index", 0);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r2.emptyText);
  }
}
function SortableComponent_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 5);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r2.itemTemplateRef)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c4, ctx_r2._localData[ctx_r2.dragIndex].item));
  }
}
function SortableComponent_Conditional_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵtextInterpolate1(" ", ctx_r2._localData[ctx_r2.dragIndex].item, " ");
  }
}
function SortableComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 3);
    ɵɵtemplate(1, SortableComponent_Conditional_3_Conditional_1_Template, 1, 4, "ng-container", 5)(2, SortableComponent_Conditional_3_Conditional_2_Template, 1, 1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngStyle", ctx_r2.hintStyle())("ngClass", ctx_r2.currentItemClass(ctx_r2.dragIndex));
    ɵɵadvance();
    ɵɵconditional(ctx_r2.itemTemplateRef ? 1 : -1);
    ɵɵadvance();
    ɵɵconditional(!ctx_r2.itemTemplateRef ? 2 : -1);
  }
}
var NODE_NAME_PREDICATES = {};
var NODE_ATTR_PREDICATES = {};
var focusableRegex = /^(?:a|input|select|option|textarea|button|object)$/i;
var MINIMAL_DRAG_DISTANCE = 5;
var matchesNodeName = (nodeName) => {
  if (!NODE_NAME_PREDICATES[nodeName]) {
    NODE_NAME_PREDICATES[nodeName] = (element) => String(element.nodeName).toLowerCase() === nodeName.toLowerCase();
  }
  return NODE_NAME_PREDICATES[nodeName];
};
var matchesNodeAttr = (nodeAttr) => {
  if (!NODE_ATTR_PREDICATES[nodeAttr]) {
    NODE_ATTR_PREDICATES[nodeAttr] = (element) => element.hasAttribute ? element.hasAttribute(nodeAttr) : false;
  }
  return NODE_ATTR_PREDICATES[nodeAttr];
};
var closest = (node, predicate) => {
  while (node && !predicate(node)) {
    node = node.parentNode;
  }
  return node;
};
var draggableFromPoint = (x, y) => {
  if (!isDocumentAvailable()) {
    return;
  }
  const el = document.elementFromPoint(x, y);
  if (!el) {
    return;
  }
  const isDraggable = el.hasAttribute("kendoDraggable");
  const isChild = closest(el, matchesNodeAttr("kendoDraggable")) !== null;
  const parentDraggable = closest(el, matchesNodeAttr("data-sortable-index"));
  const index = parentDraggable ? parseInt(parentDraggable.getAttribute("data-sortable-index"), 10) : -1;
  return {
    element: el,
    index,
    isDraggable,
    isDraggableChild: isChild,
    parentDraggable,
    rect: el.getBoundingClientRect()
  };
};
var draggableFromEvent = (event, sortable) => {
  let target;
  if (event.changedTouches) {
    const touch = event.changedTouches[0];
    target = draggableFromPoint(touch.clientX, touch.clientY);
  } else {
    target = draggableFromPoint(event.clientX, event.clientY);
  }
  return sortable.draggables.toArray()[target ? target.index : -1];
};
var getAllFocusableChildren = (parent) => {
  return Array.from(parent.querySelectorAll(focusableSelector)).filter((element) => element.offsetParent !== null);
};
var getFirstAndLastFocusable = (parent) => {
  const all = getAllFocusableChildren(parent);
  const firstFocusable = all.length > 0 ? all[0] : parent;
  const lastFocusable = all.length > 0 ? all[all.length - 1] : parent;
  return [firstFocusable, lastFocusable];
};
var keepFocusWithinComponent = (event, wrapper) => {
  const [firstFocusable, lastFocusable] = getFirstAndLastFocusable(wrapper);
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
};
var isFocusable = (element) => {
  if (element.tagName) {
    const tagName = element.tagName.toLowerCase();
    const tabIndex = element.getAttribute("tabIndex");
    const skipTab = tabIndex === "-1";
    let focusable = tabIndex !== null && !skipTab;
    if (focusableRegex.test(tagName)) {
      focusable = !element.disabled && !skipTab;
    }
    return focusable;
  }
  return false;
};
var toClassList = (classNames) => String(classNames).trim().split(" ");
var hasClasses = (element, classNames) => {
  const namesList = toClassList(classNames);
  return Boolean(toClassList(element.className).find((className) => namesList.indexOf(className) >= 0));
};
var isSortable = matchesNodeName("kendo-sortable");
var widgetTarget = (target) => {
  const element = closest(target, (node) => hasClasses(node, "k-widget") || isSortable(node));
  return element && !isSortable(element);
};
var hasRelativeStackingContext = () => {
  if (!isDocumentAvailable()) {
    return false;
  }
  const top = 10;
  const parent = document.createElement("div");
  parent.style.transform = "matrix(10, 0, 0, 10, 0, 0)";
  const innerDiv = document.createElement("div");
  innerDiv.style.position = "fixed";
  innerDiv.style.top = `${top}px;`;
  parent.appendChild(innerDiv);
  document.body.appendChild(parent);
  const isDifferent = parent.children[0].getBoundingClientRect().top !== top;
  document.body.removeChild(parent);
  return isDifferent;
};
var HAS_RELATIVE_STACKING_CONTEXT = hasRelativeStackingContext();
var relativeContextElement = (element) => {
  if (!element || !HAS_RELATIVE_STACKING_CONTEXT || !isDocumentAvailable()) {
    return null;
  }
  let node = element.parentElement;
  while (node) {
    if (window.getComputedStyle(node).transform !== "none") {
      return node;
    }
    node = node.parentElement;
  }
};
var packageMetadata = {
  name: "@progress/kendo-angular-sortable",
  productName: "Kendo UI for Angular",
  productCode: "KENDOUIANGULAR",
  productCodes: ["KENDOUIANGULAR"],
  publishDate: 1768393321,
  version: "21.4.1",
  licensingDocsUrl: "https://www.telerik.com/kendo-angular-ui/my-license/"
};
var allowDrag = (e) => {
  const target = e.originalEvent.target;
  return target.hasAttribute("data-sortable-item") || !(isFocusable(target) || widgetTarget(target));
};
var SortableService = class _SortableService {
  ngZone;
  /**
   * Specifies the Draggable item that is currently being moved.
   */
  activeDraggable = null;
  /**
   * Specifies the Draggable item from which the dragging started.
   */
  originDraggable = null;
  /**
   * @hidden
   */
  originIndex;
  /**
   * @hidden
   */
  targetSortable = null;
  /**
   * Specifies the Draggable item that last emitted an event.
   */
  lastDraggable = null;
  /**
   * @hidden
   */
  onPressSubject = new Subject();
  /**
   * @hidden
   */
  onDragSubject = new Subject();
  /**
   * @hidden
   */
  onReleaseSubject = new Subject();
  subscriptions;
  source = null;
  _target = null;
  sortableCounter = 0;
  sortableRegister = {};
  pressArgs;
  /**
   * Specifies the `SortableComponent` instance under the currently dragged item.
   */
  set target(target) {
    this._target = target;
  }
  get target() {
    return this._target;
  }
  /**
   * @hidden
   */
  constructor(ngZone) {
    this.ngZone = ngZone;
    if (!isDocumentAvailable()) {
      return;
    }
    this.subscriptions = this.onPressSubject.pipe(filter(allowDrag), tap((press) => {
      this.targetSortable = this.getSortableComponentFromTouch(press);
    }), filter((_) => Boolean(this.targetSortable)), tap((press) => {
      this.onReleaseSubject.pipe(take(1)).subscribe((event) => this.release(event));
      this.pressArgs = press;
      if (press.isTouch) {
        press.originalEvent.preventDefault();
      }
    }), switchMap((_drag) => this.onDragSubject.pipe(
      filter((_) => Boolean(this.targetSortable)),
      //stop further events if dragStart is prevented
      tap((e) => this.drag(e))
    ))).subscribe();
  }
  /**
   * @hidden
   */
  onPress(e) {
    this.onPressSubject.next(e);
  }
  /**
   * @hidden
   */
  onDrag(e) {
    this.onDragSubject.next(e);
  }
  /**
   * @hidden
   */
  onRelease(e) {
    this.onReleaseSubject.next(e);
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
   * Registers a `SortableComponent` with the `SortableService` so that it can be managed by the service.
   *
   * @param sortableComponent - The `SortableComponent`.
   * @return - The unique key that the current `SortableComponent` gets when registered.
   */
  registerComponent(sortableComponent) {
    const id = this.sortableCounter.toString();
    this.sortableRegister[id] = sortableComponent;
    this.sortableCounter++;
    return id;
  }
  /**
   * Removes a `SortableComponent` from the registered `SortableComponents` with which the service operates.
   *
   * @param key - The key of the `SortableComponent` which will be removed from the register.
   * Obtained when `registerComponent` is called.
   */
  unregisterComponent(key) {
    this.sortableRegister[key] = null;
  }
  /**
   * Sets the `SortableComponent` as a source component. When dragging an item from one Sortable to another,
   * the source component is the one from which the item originates.
   *
   * @param sortable - The `SortableComponent`.
   */
  setSource(sortable) {
    this.source = sortable;
  }
  /**
   * Returns the source `SortableComponent` from which
   * an item is dragged to other Sortable components.
   *
   * @return - The `SourceComponent`.
   */
  getSource() {
    return this.source;
  }
  /**
   * The method that finds the `SortableComponent` which is registered to
   * the `SortableService` by using the arguments of the `touch` event.
   *
   * @param touch - A Touch-Object of the `Touch` type interface.
   * Represents a single contact point (finger or stylus)
   * on a touch-sensitive device (touchscreen or trackpad).
   *
   * @return { component: SortableComponent, index: number } - An object where the component is the `SortableComponent` that owns the item and the index is the index of the touched item.
   */
  getSortableComponentFromTouch(touch) {
    if (!isDocumentAvailable()) {
      return {
        component: void 0,
        index: void 0
      };
    }
    let realTarget = document.elementFromPoint(touch.clientX, touch.clientY);
    while (realTarget) {
      const id = realTarget.getAttribute("data-sortable-id");
      const index = realTarget.getAttribute("data-sortable-index");
      if (id) {
        const targetSortable = this.sortableRegister[id];
        if (targetSortable) {
          return {
            component: targetSortable,
            index: parseInt(index, 10)
          };
        }
      }
      realTarget = realTarget.parentElement;
    }
  }
  start() {
    const pressArgs = this.pressArgs;
    if (pressArgs) {
      this.pressArgs = null;
      const startTarget = draggableFromEvent(pressArgs, this.targetSortable.component);
      if (this.targetSortable.component.startDrag({
        target: startTarget,
        originalEvent: pressArgs
      })) {
        this.targetSortable = null;
        return true;
      }
    }
  }
  release(event) {
    if (this.source) {
      this.ngZone.run(() => {
        if (this.targetSortable) {
          const dropTarget = draggableFromEvent(event, this.targetSortable.component);
          this.source.endDrag({
            target: dropTarget,
            originalEvent: event
          });
        }
        this.source.positionHintFromEvent(null);
        this.source.markForCheck();
      });
    }
    this.targetSortable = null;
    this.pressArgs = null;
  }
  drag(event) {
    const distance = this.pressArgs && Math.sqrt((event.pageX - this.pressArgs.pageX) ** 2 + (event.pageY - this.pressArgs.pageY) ** 2);
    if (distance && distance < MINIMAL_DRAG_DISTANCE) {
      return;
    }
    this.ngZone.run(() => {
      if (this.start()) {
        return;
      }
      this.source.positionHintFromEvent(event);
      const sortable = this.getSortableComponentFromTouch(event);
      if (!sortable || sortable && sortable.component !== this.target) {
        if (this.target) {
          this.target.leave({
            target: void 0,
            originalEvent: event
          });
        } else if (this.source !== this.target) {
          this.source.leave({
            target: void 0,
            originalEvent: event
          });
        }
      }
      if (sortable && sortable.component) {
        const draggable = draggableFromEvent(event, sortable.component);
        sortable.component.drag({
          target: draggable,
          originalEvent: event
        });
      }
      this.source.markForCheck();
    });
  }
  static ɵfac = function SortableService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SortableService)(ɵɵinject(NgZone));
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _SortableService,
    factory: _SortableService.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SortableService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: NgZone
  }], null);
})();
var SortableContainer = class _SortableContainer {
  static ɵfac = function SortableContainer_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SortableContainer)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _SortableContainer,
    factory: _SortableContainer.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SortableContainer, [{
    type: Injectable
  }], null, null);
})();
var DraggableDirective = class _DraggableDirective {
  parent;
  el;
  renderer;
  index;
  disabled;
  set hidden(value) {
    this._hidden = value;
    this.updateDisplayStyle();
  }
  get hidden() {
    return this._hidden;
  }
  _hidden;
  get _focused() {
    return this.disabled ? false : this.index === this.parent.activeIndex;
  }
  get _disabled() {
    return this.disabled;
  }
  get display() {
    return this.hidden ? "none" : this._display;
  }
  set display(display) {
    this._display = display;
    this.updateDisplayStyle();
  }
  _display;
  constructor(parent, el, renderer) {
    this.parent = parent;
    this.el = el;
    this.renderer = renderer;
  }
  ngOnInit() {
    const nativeElement = this.el.nativeElement;
    this.display = nativeElement.style.display;
    if (nativeElement) {
      this.renderer.setStyle(nativeElement, "user-select", "none");
      this.renderer.setStyle(nativeElement, "-ms-user-select", "none");
      this.renderer.setStyle(nativeElement, "-moz-user-select", "none");
      this.renderer.setStyle(nativeElement, "-webkit-user-select", "none");
    }
  }
  updateDisplayStyle() {
    this.renderer.setStyle(this.el.nativeElement, "display", this.display);
  }
  static ɵfac = function DraggableDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DraggableDirective)(ɵɵdirectiveInject(SortableContainer), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _DraggableDirective,
    selectors: [["", "kendoDraggable", ""]],
    hostVars: 3,
    hostBindings: function DraggableDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("aria-disabled", ctx._disabled);
        ɵɵclassProp("k-focus", ctx._focused);
      }
    },
    inputs: {
      index: "index",
      disabled: "disabled",
      hidden: "hidden"
    },
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DraggableDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoDraggable]",
      standalone: true
    }]
  }], () => [{
    type: SortableContainer
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }], {
    index: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    hidden: [{
      type: Input
    }],
    _focused: [{
      type: HostBinding,
      args: ["class.k-focus"]
    }],
    _disabled: [{
      type: HostBinding,
      args: ["attr.aria-disabled"]
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
    selectors: [["", "kendoSortableItemTemplate", ""]],
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ItemTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoSortableItemTemplate]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var PlaceholderTemplateDirective = class _PlaceholderTemplateDirective {
  templateRef;
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static ɵfac = function PlaceholderTemplateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PlaceholderTemplateDirective)(ɵɵdirectiveInject(TemplateRef));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _PlaceholderTemplateDirective,
    selectors: [["", "kendoSortablePlaceholderTemplate", ""]],
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlaceholderTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoSortablePlaceholderTemplate]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }], null);
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
   * If the event was prevented
   * by any of its subscribers, returns `true`.
   *
   * @returns `true` if the default action was prevented. Otherwise, returns `false`.
   */
  isDefaultPrevented() {
    return this.prevented;
  }
};
var NavigateEvent = class extends PreventableEvent {
  /**
   * Specifies the index of the draggable item.
   */
  index;
  /**
   * Specifies the old index of the draggable item.
   */
  oldIndex;
  /**
   * Indicates whether the `Ctrl` or meta keys are pressed.
   */
  ctrlKey;
  /**
   * @hidden
   */
  constructor(options) {
    super();
    Object.assign(this, options);
  }
};
var DraggableEvent = class extends PreventableEvent {
  /**
   * Specifies the target `DraggableDirective` instance.
   */
  target;
  /**
   * Specifies the browser event emitted by the target's native element.
   */
  originalEvent;
  //DragEvent | TouchEvent;
  /**
   * @hidden
   */
  constructor(options) {
    super();
    Object.assign(this, options);
  }
};
var DragStartEvent = class extends PreventableEvent {
  /**
   * Specifies the index of the draggable item.
   */
  index;
  /**
   * Specifies the previous index of the draggable item.
   * This property is used for the `dragEnd and `dragOver` events to determine the original position of the item before dragging.
   * It doesn't apply to the `dragStart` event as there is no previous position at that point.
   */
  oldIndex;
  /**
   * @hidden
   */
  constructor(options) {
    super();
    Object.assign(this, options);
  }
};
var DragOverEvent = class extends DragStartEvent {
};
var DragEndEvent = class extends DragOverEvent {
};
var KEY_SHORTCUTS = "Control+ArrowLeft Control+ArrowRight Meta+ArrowLeft Meta+ArrowRight";
var SortableComponent = class _SortableComponent {
  ngZone;
  renderer;
  changeDetector;
  localization;
  cdr;
  /**
   * Specifies the tab index of the Sortable component.
   */
  tabIndex = null;
  /**
   * Configures how the Sortable component tracks changes in its items collection.
   */
  trackBy = (_, idx) => idx;
  /**
   * Sets an array of any data that is used as a data source for the Sortable.
   */
  set data(data) {
    this._data = data;
    this.cacheData();
  }
  get data() {
    return this._data;
  }
  /**
   * Sets a boolean value that determines whether the Sortable items are navigable using the keyboard. [See example]({% slug keyboard_navigation_sortable %}).
   * @default true
   */
  navigable = true;
  /**
   * Enables or disables built-in animations.
   * @default false
   */
  animation = false;
  /**
   * Sets an array of integers that represent the indexes of the disabled items from the data array. [See example](slug:items_sortable#toc-disabling-items).
   */
  disabledIndexes = [];
  /**
   * Sets a string that represents the name of the zone to which the Sortable belongs
   * ([see example](slug:items_sortable#toc-transferring-of-items)). Items can be transferred
   * between Sortables in the same zone.
   */
  zone = void 0;
  /**
   * Defines the zones from which items can be transferred onto the current Sortable component
   * ([see example](slug:items_sortable#toc-transferring-of-items)). If the `acceptZones` property
   * of the target Sortable is set, you can transfer items between Sortables in different zones.
   */
  acceptZones = void 0;
  /**
   * Represents the CSS styles applied to each Sortable item.
   */
  itemStyle = {};
  /**
   * Defines the CSS styles applied to an empty item ([see example]({% slug templates_sortable %})).
   */
  emptyItemStyle = void 0;
  /**
   * Defines the CSS styles which are applied to the currently dragged item ([see example]({% slug templates_sortable %})).
   */
  activeItemStyle = void 0;
  /**
   * Defines the CSS styles which are applied to all disabled items.
   */
  disabledItemStyle = void 0;
  /**
   * Defines the class which is applied to each Sortable item.
   */
  itemClass = "";
  /**
   * Defines the class which is applied to the active Sortable item.
   */
  activeItemClass = null;
  /**
   * Defines the class which is applied to the empty item when the Sortable has empty data.
   */
  emptyItemClass = null;
  /**
   * Defines the class which is applied to each disabled Sortable item.
   */
  disabledItemClass = null;
  /**
   * Sets the text message that will be displayed when the Sortable has no items.
   */
  emptyText = "Empty";
  /**
   * @hidden
   */
  defaultTemplateRef = null;
  /**
   * Defines the template that will be used for rendering the items.
   * @hidden
   */
  itemTemplateDirectiveRef = null;
  /**
   * Defines the template that will be used for rendering the placeholder.
   * @hidden
   */
  placeholderTemplateDirectiveRef = null;
  itemWrappers = new QueryList();
  draggables;
  noDataContainer;
  hint;
  /**
   * Fires when the dragging of an item is started.
   */
  dragStart = new EventEmitter();
  /**
   * Fires when the dragging of an item is completed.
   */
  dragEnd = new EventEmitter();
  /**
   * Fires while the dragging of an item is in progress.
   */
  dragOver = new EventEmitter();
  /**
   * Fires when dragging an item outside of the component.
   */
  dragLeave = new EventEmitter();
  /**
   * Fires while the moving an item from one position to another.
   */
  dataMove = new EventEmitter();
  /**
   * Fires when a new item is added to the Sortable.
   */
  dataAdd = new EventEmitter();
  /**
   * Fires when an item is removed from the Sortable.
   */
  dataRemove = new EventEmitter();
  /**
   * Fires when navigating using the keyboard.
   */
  navigate = new EventEmitter();
  /**
   * The index of the currently focused item.
   * If no item is focused, set to `-1`.
   */
  activeIndex = -1;
  get touchAction() {
    return "none";
  }
  get dir() {
    return this.direction;
  }
  hostRole = "list";
  /**
   * Flag indicating if the component is currently playing animations.
   * @hidden
   */
  animating = false;
  /**
   * The index of the currently dragged item.
   */
  dragIndex = -1;
  /**
   * The index of the item above which the dragged item is.
   */
  dragOverIndex = -1;
  onDragStartSubject = new Subject();
  onDragOverSubject = new Subject();
  onDragLeaveSubject = new Subject();
  onDragEndSubject = new Subject();
  /**
   * The SortableComponent's HTMLElement.
   */
  wrapper;
  /**
   * The location of the hint indicator when dragging on mobile devices.
   */
  hintLocation = null;
  id;
  itemTemplateRef;
  placeholderTemplateRef;
  _data;
  _localData = [];
  /**
   * @hidden
   */
  ariaKeyShortcuts = KEY_SHORTCUTS;
  localizationChangeSubscription;
  dragStartSubscription;
  dragOverSubscription;
  dragLeaveSubscription;
  dragEndSubscription;
  childrenTabindexSubscription;
  focusableItems = [];
  animationDuration = 300;
  afterKeyPress = false;
  sortableService = null;
  _hideActiveItem = false;
  prevActiveIndex = 0;
  direction;
  _animating;
  draggable;
  offsetParent;
  setItemData(data, i) {
    this._localData[i].item = data.item;
    this._localData[i].index = data.index;
    this._localData[i].hidden = data.hidden;
  }
  /**
   * @hidden
   */
  itemTemplate(index) {
    let template = this.itemTemplateRef;
    if (index === this.dragOverIndex) {
      template = this.placeholderTemplateRef;
    } else if (index === this.dragIndex) {
      template = this.itemTemplateRef;
    }
    return template;
  }
  constructor(ngZone, renderer, changeDetector, localization, wrapper, sortableService, cdr) {
    this.ngZone = ngZone;
    this.renderer = renderer;
    this.changeDetector = changeDetector;
    this.localization = localization;
    this.cdr = cdr;
    A(packageMetadata);
    this.wrapper = wrapper.nativeElement;
    this.direction = localization.rtl ? "rtl" : "ltr";
    this.sortableService = sortableService;
    this.subscribeEvents();
  }
  ngOnInit() {
    if (!this.data) {
      this.data = [];
    }
    this.id = this.sortableService.registerComponent(this);
    this.dragIndex = -1;
    const display = "display";
    if (this.activeItemStyle && !this.activeItemStyle[display]) {
      this.activeItemStyle[display] = "";
    }
    if (!this.itemStyle[display]) {
      this.itemStyle[display] = "";
    }
    if (this.wrapper) {
      this.draggable = new Draggable({
        press: (e) => this.sortableService.onPress(e),
        drag: (e) => this.sortableService.onDrag(e),
        release: (e) => this.sortableService.onRelease(e)
      });
      this.ngZone.runOutsideAngular(() => {
        this.draggable.bindTo(this.wrapper);
      });
    }
  }
  ngAfterViewInit() {
    if (this.navigable) {
      this.setInitialItemTabindex();
      this.setFocusableChildren();
    }
    this.childrenTabindexSubscription = this.itemWrappers.changes.subscribe(() => {
      if (this.navigable) {
        this.setInitialItemTabindex();
        this.setFocusableChildren();
      }
    });
  }
  ngOnChanges(changes) {
    if (this.data && isChanged("disabledIndexes", changes, false)) {
      this.cacheData();
    }
  }
  ngOnDestroy() {
    this.unsubscribeEvents();
    this.sortableService.unregisterComponent(this.id);
    if (this.draggable) {
      this.draggable.destroy();
    }
  }
  ngAfterContentInit() {
    this.itemTemplateRef = this.itemTemplateDirectiveRef.first || this.defaultTemplateRef.first;
    this.placeholderTemplateRef = this.placeholderTemplateDirectiveRef.first || this.defaultTemplateRef.first;
  }
  ngAfterViewChecked() {
    if (this.navigable) {
      if (this.afterKeyPress) {
        const elems = this.itemWrappers.toArray();
        if (elems && elems.length > 0 && this.activeIndex > -1) {
          const currentItem = elems[this.activeIndex].nativeElement;
          const prevItem = elems[this.prevActiveIndex].nativeElement;
          this.renderer.setAttribute(prevItem, "tabindex", "-1");
          this.renderer.setAttribute(currentItem, "tabindex", "0");
          currentItem.focus();
        }
      }
      this.afterKeyPress = false;
    }
  }
  /**
   * @hidden
   */
  setFocusableChildren() {
    this.itemWrappers.toArray().forEach((item) => {
      const itemEl = item.nativeElement;
      const focusableChildren = getAllFocusableChildren(itemEl);
      if (focusableChildren.length > 0) {
        this.focusableItems.push(focusableChildren);
        focusableChildren.forEach((focusableChild) => {
          this.renderer.setAttribute(focusableChild, "tabindex", "-1");
        });
      }
    });
  }
  /**
   * @hidden
   */
  updateCacheIndices() {
    this._localData.forEach((item, index) => {
      item.index = index;
    });
  }
  /**
   * @hidden
   */
  cacheData() {
    this._localData = [];
    this._data.forEach((item, index) => {
      this._localData.push({
        item,
        active: false,
        disabled: !this.itemEnabled(index),
        index,
        hidden: false
      });
    });
  }
  /**
   * @hidden
   */
  startDrag(event) {
    const startEvent = new DraggableEvent(event);
    this.onDragStartSubject.next(startEvent);
    const prevented = startEvent.isDefaultPrevented();
    if (!prevented) {
      this.offsetParent = relativeContextElement(this.wrapper);
    }
    return prevented;
  }
  /**
   * @hidden
   */
  setInitialItemTabindex() {
    this.itemWrappers.toArray().forEach((item, index) => {
      if (this.itemEnabled(index)) {
        const isFirstItem = index === 0 ? 0 : -1;
        const tabIndexValue = `${this.navigable ? this.tabIndex || isFirstItem : this.tabIndex}`;
        const hasItemTabindex = item.nativeElement.getAttribute("tabindex");
        if (!hasItemTabindex) {
          this.renderer.setAttribute(item.nativeElement, "tabindex", tabIndexValue);
        }
      }
    });
  }
  /**
   * @hidden
   */
  drag(event) {
    const dragEvent = new DraggableEvent(event);
    this.onDragOverSubject.next(dragEvent);
    return dragEvent.isDefaultPrevented();
  }
  /**
   * @hidden
   */
  leave(event) {
    const leaveEvent = new DraggableEvent(event);
    this.onDragLeaveSubject.next(leaveEvent);
    return leaveEvent.isDefaultPrevented();
  }
  /**
   * @hidden
   */
  endDrag(event) {
    const endEvent = new DraggableEvent(event);
    this.onDragEndSubject.next(endEvent);
    return endEvent.isDefaultPrevented();
  }
  /**
   * @hidden
   */
  hintVisible() {
    return this.dragIndex >= 0 && this.hintLocation && this === this.sortableService.getSource();
  }
  /**
   * @hidden
   */
  currentItemStyle(index) {
    if (index === -1) {
      return this.emptyItemStyle ? this.emptyItemStyle : this.itemStyle;
    }
    if (!this.itemEnabled(index) && this.disabledItemStyle) {
      return this.disabledItemStyle;
    }
    if (index === this.dragIndex || this.dragIndex === -1 && index === this.activeIndex) {
      if (this.hideActiveItem) {
        return {
          "display": "none"
        };
      }
      if (this.activeItemStyle) {
        return this.activeItemStyle;
      }
    }
    return this.itemStyle;
  }
  /**
   * @hidden
   */
  currentItemClass(index) {
    if (index === -1) {
      return this.emptyItemClass ? this.emptyItemClass : this.itemClass;
    }
    if (!this.itemEnabled(index) && this.disabledItemClass) {
      return this.disabledItemClass;
    }
    if ((index === this.dragIndex || this.dragIndex === -1 && index === this.activeIndex) && this.activeItemClass) {
      return this.activeItemClass;
    }
    return this.itemClass;
  }
  /**
   * @hidden
   */
  hintStyle() {
    const position = {
      "left": this.hintLocation.x + 10 + "px",
      "position": "fixed",
      "top": this.hintLocation.y + 10 + "px"
    };
    const style = {};
    Object.assign(style, this.currentItemStyle(this.dragIndex), position);
    return style;
  }
  /**
   * @hidden
   */
  itemEnabled(index) {
    return this.disabledIndexes.indexOf(index) === -1;
  }
  /**
   * @hidden
   */
  acceptDragFrom(sortableComponent) {
    if (this.acceptZones === void 0) {
      return this.zone === sortableComponent.zone;
    } else if (sortableComponent.zone !== void 0) {
      return this.acceptZones.indexOf(sortableComponent.zone) !== -1;
    }
    return false;
  }
  /**
   * @hidden
   */
  ariaDropEffect(index) {
    return this.itemEnabled(index) ? "move" : "none";
  }
  /**
   * @hidden
   */
  focusHandler(index) {
    if (this.navigable) {
      this.activeIndex = index;
    }
  }
  /**
   * @hidden
   */
  blurHandler() {
    if (this.navigable && !this.afterKeyPress) {
      this.prevActiveIndex = this.activeIndex;
      this.activeIndex = -1;
    }
  }
  /**
   * @hidden
   */
  onArrowHandler(event, keyCode) {
    const leftKey = this.direction === "rtl" ? Keys.ArrowRight : Keys.ArrowLeft;
    const dir = keyCode === Keys.ArrowUp || keyCode === leftKey ? -1 : 1;
    const limit = this.data.length - 1;
    let targetIndex = this.activeIndex + dir;
    while (!this.itemEnabled(targetIndex) && targetIndex <= limit) {
      targetIndex += dir;
    }
    targetIndex = Math.min(Math.max(targetIndex, 0), limit);
    this.prevActiveIndex = this.activeIndex;
    if (!this.itemEnabled(targetIndex)) {
      return;
    }
    const ctrl = event.ctrlKey || event.metaKey;
    const navigateEvent = new NavigateEvent({
      index: targetIndex,
      oldIndex: this.activeIndex,
      ctrlKey: ctrl
    });
    this.navigate.emit(navigateEvent);
    if (!navigateEvent.isDefaultPrevented()) {
      this.activeIndex = targetIndex;
    }
    this.dragIndex = -1;
    this.dragOverIndex = -1;
    event.stopPropagation();
    event.preventDefault();
    this.afterKeyPress = true;
  }
  /**
   * @hidden
   */
  onEnterHandler(item) {
    const focusableItems = this.focusableItems[this.activeIndex];
    focusableItems.forEach((focusableItem) => {
      this.renderer.setAttribute(focusableItem, "tabindex", "0");
    });
    this.renderer.setAttribute(item, "tabindex", "-1");
    focusableItems[0].focus();
  }
  /**
   * @hidden
   */
  onEscapeHandler(event) {
    const focusableItems = this.focusableItems[this.prevActiveIndex];
    const item = (event?.target).closest("[data-sortable-item]");
    focusableItems.forEach((focusableItem) => {
      this.renderer.setAttribute(focusableItem, "tabindex", "-1");
    });
    this.renderer.setAttribute(item, "tabindex", "0");
    item.focus();
  }
  /**
   * @hidden
   */
  keydownHandler = (event) => {
    if (!this.navigable) {
      return;
    }
    this.cdr.markForCheck();
    const targetIsWrapper = this.itemWrappers.toArray().some((item2) => item2.nativeElement === event.target);
    const index = this.activeIndex === -1 ? this.prevActiveIndex : this.activeIndex;
    const item = this.itemWrappers.toArray()[index]?.nativeElement;
    const isItemFocused = document.activeElement === item;
    const hasFocus = this.activeIndex !== -1;
    const keyCode = normalizeKeys(event);
    if (keyCode === Keys.Tab && !isItemFocused) {
      keepFocusWithinComponent(event, item);
      return;
    }
    if (keyCode === Keys.Escape && this.focusableItems.length > 0 && this.activeIndex === -1) {
      this.onEscapeHandler(event);
      return;
    }
    if (!targetIsWrapper) {
      return;
    }
    if (this.navigable && hasFocus) {
      const isArrowKey = [Keys.ArrowUp, Keys.ArrowDown, Keys.ArrowLeft, Keys.ArrowRight].includes(keyCode);
      if (isArrowKey) {
        this.ngZone.run(() => this.onArrowHandler(event, keyCode));
      } else if (keyCode === Keys.Enter && isItemFocused && this.focusableItems.length > 0) {
        this.onEnterHandler(item);
      }
    }
  };
  /**
   * Removes the currently active item from the Data collection that the Sortable uses.
   */
  removeDataItem(index) {
    this.dragIndex = -1;
    this.dragOverIndex = -1;
    this._localData.splice(index, 1);
    this.data.splice(index, 1);
    this.updateCacheIndices();
  }
  /**
   * Sets a boolean value that indicates whether the item will be hidden or not.
   * @hidden
   */
  hideItem(index, hidden = true) {
    this._localData[index].hidden = hidden;
  }
  /**
   * Gets or sets a boolean value that indicates whether the currently dragged item will be hidden.
   *
   * If the currently dragged item is hidden, returns `true`.
   * If the currently dragged item is visible, returns `false`.
   */
  get hideActiveItem() {
    return this._hideActiveItem;
  }
  set hideActiveItem(value) {
    this.activeIndex = -1;
    this._hideActiveItem = value;
  }
  /**
   * Clears the active item.
   * An active item is the one that is currently focused when the user navigates with the keyboard.
   */
  clearActiveItem() {
    if (this.navigable) {
      this.fixFocus();
    } else {
      this.activeIndex = -1;
    }
    this.dragIndex = -1;
  }
  /**
   * Returns the currently active item when the user navigates with the keyboard.
   * @return - The data item which is currently active.
   */
  getActiveItem() {
    if (this.data && this.dragIndex >= 0 && this.dragIndex < this.data.length) {
      return this.data[this.dragIndex];
    }
  }
  /**
   * Inserts a new data item at a particular index in the Sortable component.
   * @param dataItem - The data item.
   * @param index - The index at which the data item is inserted.
   */
  addDataItem(dataItem, index) {
    const originDraggable = this.sortableService.originDraggable;
    if (originDraggable && originDraggable.parent === this) {
      const animation = this.animation;
      this.hideItem(originDraggable.index, false);
      this.animation = false;
      this.moveItem(originDraggable.index, index);
      this.animation = animation;
    } else {
      this.data.splice(index, 0, dataItem);
      this._localData.splice(index, 0, {
        item: dataItem,
        active: false,
        disabled: !this.itemEnabled(index),
        index,
        hidden: false
      });
      this.updateCacheIndices();
    }
    this.dragIndex = index;
    this.dragOverIndex = index;
    this.ngZone.onStable.pipe(take(1)).subscribe(() => {
      this.sortableService.target = this;
      this.sortableService.setSource(this);
      this.sortableService.activeDraggable = this.draggables.toArray()[index];
      this.sortableService.lastDraggable = null;
    });
  }
  /**
   * Moves a data item from one index to another in the Sortable component.
   * @param fromIndex - The data item's index.
   * @param toIndex - The index which the data item should be moved to. Item currently sitting at that index is pushed back one position.
   */
  moveItem(fromIndex, toIndex) {
    if (toIndex === fromIndex) {
      return;
    }
    let dragIndex = fromIndex;
    const d = toIndex > dragIndex ? 1 : -1;
    const originalIndexAnimate = dragIndex;
    const toAnimate = [];
    let prevIndex = dragIndex;
    let tmp;
    while (dragIndex !== toIndex) {
      dragIndex += d;
      if (this.itemEnabled(dragIndex) || dragIndex === toIndex) {
        if (this.animation) {
          toAnimate.push({
            next: dragIndex,
            prev: prevIndex
          });
        }
        tmp = this._localData[prevIndex].index;
        this._localData[prevIndex].index = this._localData[dragIndex].index;
        this._localData[dragIndex].index = tmp;
        tmp = this._localData[prevIndex];
        this._localData[prevIndex] = this._localData[dragIndex];
        this._localData[dragIndex] = tmp;
        tmp = this.data[prevIndex];
        this.data[prevIndex] = this.data[dragIndex];
        this.data[dragIndex] = tmp;
        prevIndex = dragIndex;
      }
    }
    this.dragIndex = dragIndex;
    this.dragOverIndex = dragIndex;
    this.activeIndex = dragIndex;
    if (this.focusableItems.length > 0) {
      this.swapFocusableChildren(fromIndex, toIndex);
    }
    if (this.animation) {
      setTimeout(() => {
        toAnimate.push({
          next: originalIndexAnimate,
          prev: dragIndex
        });
        this.animating = true;
        this.animate(toAnimate);
      });
    }
    this.ngZone.onStable.pipe(take(1)).subscribe(() => {
      this.sortableService.activeDraggable = this.draggables.toArray()[dragIndex];
      this.sortableService.lastDraggable = null;
    });
  }
  /**
   * @hidden
   */
  animate(draggables) {
    const itemArray = this.itemWrappers.toArray();
    const prevClientRect = [];
    const nextClientRect = [];
    clearTimeout(this._animating);
    for (let i = 0; i < draggables.length; i++) {
      prevClientRect.push(itemArray[draggables[i].prev].nativeElement.getBoundingClientRect());
      nextClientRect.push(itemArray[draggables[i].next].nativeElement.getBoundingClientRect());
    }
    for (let i = 0; i < draggables.length; i++) {
      const nextIndex = draggables[i].prev;
      const targetRect = nextClientRect[i];
      const currentRect = prevClientRect[i];
      const target = itemArray[nextIndex].nativeElement;
      this.applyAnimationStyle(target, "transition", "none");
      this.applyAnimationStyle(target, "transform", "translate3d(" + (targetRect.left - currentRect.left).toString() + "px," + (targetRect.top - currentRect.top).toString() + "px,0)");
      this.reflow(target);
    }
    for (let i = 0; i < draggables.length; i++) {
      const nextIndex = draggables[i].prev;
      const target = itemArray[nextIndex].nativeElement;
      this.applyAnimationStyle(target, "transition", "all " + this.animationDuration + "ms");
      this.applyAnimationStyle(target, "transform", "translate3d(0,0,0)");
      clearTimeout(target.animated);
      target.animated = setTimeout(() => {
        this.applyAnimationStyle(target, "transition", "");
        this.applyAnimationStyle(target, "transform", "");
        target.animated = false;
      }, this.animationDuration);
    }
    this._animating = setTimeout(() => {
      this.animating = false;
    }, this.animationDuration);
  }
  /**
   * @hidden
   */
  positionHintFromEvent(event) {
    const offset = this.parentOffset();
    this.hintLocation = event ? {
      x: event.clientX - offset.left,
      y: event.clientY - offset.top
    } : null;
  }
  /**
   * @hidden
   */
  parentOffset() {
    const offsetParent = this.offsetParent;
    if (offsetParent) {
      const rect = offsetParent.getBoundingClientRect();
      return {
        left: rect.left - offsetParent.scrollLeft,
        top: rect.top - offsetParent.scrollTop
      };
    }
    return {
      left: 0,
      top: 0
    };
  }
  /**
   * @hidden
   */
  markForCheck() {
    this.changeDetector.markForCheck();
  }
  /**
   * @hidden
   */
  reflow(element) {
    return element.offsetWidth;
  }
  /**
   * @hidden
   */
  swapFocusableChildren(firstItemIndex, secondItemIndex) {
    [this.focusableItems[firstItemIndex], this.focusableItems[secondItemIndex]] = [this.focusableItems[secondItemIndex], this.focusableItems[firstItemIndex]];
  }
  /**
   * @hidden
   */
  applyAnimationStyle(el, prop, val) {
    const style = el && el.style;
    if (style) {
      if (!(prop in style)) {
        prop = "-webkit-" + prop;
      }
      style[prop] = val;
    }
  }
  subscribeEvents() {
    this.localizationChangeSubscription = this.localization.changes.subscribe(({
      rtl
    }) => this.direction = rtl ? "rtl" : "ltr");
    this.dragStartSubscription = this.onDragStartSubject.subscribe((event) => {
      if (!event.target) {
        return;
      }
      this.sortableService.originDraggable = event.target;
      this.sortableService.originIndex = event.target.index;
      this.sortableService.activeDraggable = event.target;
      this.sortableService.lastDraggable = event.target;
      this.sortableService.target = this;
      this.sortableService.setSource(this);
      const dragStartEvent = new DragStartEvent({
        index: event.target.index
      });
      this.dragStart.emit(dragStartEvent);
      if (dragStartEvent.isDefaultPrevented()) {
        event.preventDefault();
      } else {
        if (!event.target.disabled) {
          if (this.sortableService.target) {
            this.sortableService.target.dragOverIndex = -1;
            this.sortableService.target.dragIndex = -1;
          }
          this.dragOverIndex = event.target.index;
          this.dragIndex = event.target.index;
        }
      }
    });
    this.dragOverSubscription = this.onDragOverSubject.pipe(filter((event) => event.target && event.target.el.nativeElement.style.transition.length === 0), filter(() => {
      return this.sortableService.originDraggable && !this.sortableService.originDraggable.disabled;
    }), filter(() => {
      return this.sortableService && this.acceptDragFrom(this.sortableService.getSource());
    }), filter((event) => {
      return event.target !== this.sortableService.lastDraggable;
    })).subscribe((event) => {
      this.sortableService.lastDraggable = event.target;
      const originDraggable = this.sortableService.originDraggable;
      let targetIndex = event.target.index;
      if (originDraggable.hidden && originDraggable.parent === this) {
        if (originDraggable.index < event.target.index) {
          targetIndex = event.target.index - 1;
        }
      }
      this.sortableService.target = this;
      const oldIndex = this.sortableService.activeDraggable ? this.sortableService.activeDraggable.index : 0;
      const dragOverEvent = new DragOverEvent({
        index: targetIndex,
        oldIndex
      });
      this.dragOver.emit(dragOverEvent);
      if (!dragOverEvent.isDefaultPrevented() && event.target && event.target.index >= 0) {
        this.dragOverIndex = event.target.index;
        this.placeHolderItemData(event.target);
      }
    });
    this.dragEndSubscription = this.onDragEndSubject.subscribe((event) => {
      const source = this.sortableService.getSource();
      if (!source) {
        return;
      }
      const target = this.sortableService.target;
      const index = event.target ? event.target.index : -1;
      const oldIndex = this.sortableService.originDraggable ? this.sortableService.originIndex : -1;
      this.hintLocation = null;
      const dragEndEvent = new DragEndEvent({
        index,
        oldIndex
      });
      this.dragEnd.emit(dragEndEvent);
      if (!dragEndEvent.isDefaultPrevented()) {
        source.dragIndex = -1;
        source.dragOverIndex = -1;
        source.activeIndex = -1;
        if (target && target !== source) {
          target.dragIndex = -1;
          target.dragOverIndex = -1;
        }
        setTimeout(() => {
          this.sortableService.activeDraggable = null;
          this.sortableService.lastDraggable = null;
          this.sortableService.originDraggable = null;
          this.sortableService.target = null;
          this.sortableService.setSource(null);
        });
      }
    });
    this.dragLeaveSubscription = this.onDragLeaveSubject.pipe(filter((e) => {
      if (!isDocumentAvailable()) {
        return false;
      }
      return this.wrapper !== document.elementFromPoint(e.originalEvent.pageX, e.originalEvent.pageY);
    }), filter((_e) => {
      return !this.animating;
    }), filter((_) => this.sortableService.target && this.sortableService.target.dragOverIndex > -1)).subscribe(() => {
      this.dragLeave.emit({
        index: this.sortableService.originDraggable.index
      });
      this.sortableService.lastDraggable = null;
      this.dragOverIndex = -1;
      this.sortableService.target = null;
    });
  }
  unsubscribeEvents() {
    if (this.localizationChangeSubscription) {
      this.localizationChangeSubscription.unsubscribe();
    }
    if (this.childrenTabindexSubscription) {
      this.childrenTabindexSubscription.unsubscribe();
    }
    this.dragStartSubscription.unsubscribe();
    this.dragOverSubscription.unsubscribe();
    this.dragEndSubscription.unsubscribe();
    this.dragLeaveSubscription.unsubscribe();
  }
  placeHolderItemData(draggable) {
    if (draggable.disabled) {
      return;
    }
    const target = this.sortableService.target;
    const source = this.sortableService.getSource();
    const originalData = Object.assign({}, this._localData[draggable.index]);
    const newData = source._localData[source.dragIndex];
    this.setItemData(newData, draggable.index);
    const endSub = source.onDragEndSubject.pipe(take(1)).subscribe(() => {
      this.setItemData(originalData, draggable.index);
    });
    const leaveSub = target.onDragLeaveSubject.pipe(take(1)).subscribe(() => {
      this.setItemData(originalData, draggable.index);
    });
    const overSub = merge(this.onDragOverSubject.pipe(filter(() => {
      return draggable.index !== this.dragOverIndex;
    })), this.onDragLeaveSubject).subscribe(() => {
      this.setItemData(originalData, draggable.index);
      endSub.unsubscribe();
      overSub.unsubscribe();
      leaveSub.unsubscribe();
    });
  }
  fixFocus() {
    if (this.itemWrappers) {
      const itemArray = this.itemWrappers.toArray();
      if (this.dragIndex > -1 && itemArray && itemArray.length > 0) {
        itemArray[this.dragIndex].nativeElement.focus();
        this.activeIndex = this.dragIndex;
      }
    }
  }
  static ɵfac = function SortableComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SortableComponent)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(SortableService), ɵɵdirectiveInject(ChangeDetectorRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _SortableComponent,
    selectors: [["kendo-sortable"]],
    contentQueries: function SortableComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, TemplateRef, 4);
        ɵɵcontentQuery(dirIndex, ItemTemplateDirective, 4, TemplateRef);
        ɵɵcontentQuery(dirIndex, PlaceholderTemplateDirective, 4, TemplateRef);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.defaultTemplateRef = _t);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.itemTemplateDirectiveRef = _t);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.placeholderTemplateDirectiveRef = _t);
      }
    },
    viewQuery: function SortableComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 5);
        ɵɵviewQuery(_c1, 5);
        ɵɵviewQuery(_c2, 5);
        ɵɵviewQuery(DraggableDirective, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.noDataContainer = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.hint = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.itemWrappers = _t);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.draggables = _t);
      }
    },
    hostVars: 4,
    hostBindings: function SortableComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("dir", ctx.dir)("role", ctx.hostRole);
        ɵɵstyleProp("touch-action", ctx.touchAction);
      }
    },
    inputs: {
      tabIndex: "tabIndex",
      trackBy: "trackBy",
      data: "data",
      navigable: "navigable",
      animation: "animation",
      disabledIndexes: "disabledIndexes",
      zone: "zone",
      acceptZones: "acceptZones",
      itemStyle: "itemStyle",
      emptyItemStyle: "emptyItemStyle",
      activeItemStyle: "activeItemStyle",
      disabledItemStyle: "disabledItemStyle",
      itemClass: "itemClass",
      activeItemClass: "activeItemClass",
      emptyItemClass: "emptyItemClass",
      disabledItemClass: "disabledItemClass",
      emptyText: "emptyText",
      activeIndex: "activeIndex"
    },
    outputs: {
      dragStart: "dragStart",
      dragEnd: "dragEnd",
      dragOver: "dragOver",
      dragLeave: "dragLeave",
      dataMove: "dataMove",
      dataAdd: "dataAdd",
      dataRemove: "dataRemove",
      navigate: "navigate"
    },
    exportAs: ["kendoSortable"],
    standalone: true,
    features: [ɵɵProvidersFeature([LocalizationService, {
      provide: L10N_PREFIX,
      useValue: "kendo.sortable"
    }, {
      provide: SortableContainer,
      useExisting: forwardRef(() => _SortableComponent)
    }]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    decls: 4,
    vars: 2,
    consts: [["itemWrapper", ""], ["noDataRef", ""], ["kendoDraggable", "", "role", "listitem", 3, "index", "hidden", "disabled", "ngClass", "ngStyle", "kendoEventsOutsideAngular"], [3, "ngStyle", "ngClass"], ["kendoDraggable", "", "role", "listitem", 3, "focus", "blur", "index", "hidden", "disabled", "ngClass", "ngStyle", "kendoEventsOutsideAngular"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["kendoDraggable", "", 3, "index", "disabled", "ngStyle", "ngClass"]],
    template: function SortableComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵrepeaterCreate(0, SortableComponent_For_1_Template, 4, 17, "div", 2, ctx.trackBy, true);
        ɵɵtemplate(2, SortableComponent_Conditional_2_Template, 4, 7, "ng-container")(3, SortableComponent_Conditional_3_Template, 3, 4, "div", 3);
      }
      if (rf & 2) {
        ɵɵrepeater(ctx._localData);
        ɵɵadvance(2);
        ɵɵconditional(!ctx._data.length || ctx._localData.length === 1 && ctx._localData[0].hidden ? 2 : -1);
        ɵɵadvance();
        ɵɵconditional(ctx.hintVisible() ? 3 : -1);
      }
    },
    dependencies: [DraggableDirective, NgClass, NgStyle, NgTemplateOutlet, EventsOutsideAngularDirective],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SortableComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoSortable",
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.sortable"
      }, {
        provide: SortableContainer,
        useExisting: forwardRef(() => SortableComponent)
      }],
      selector: "kendo-sortable",
      template: `
    @for (item of _localData; track trackBy(i, item); let i = $index) {
      <div #itemWrapper
        kendoDraggable
        role="listitem"
        [attr.aria-grabbed]="i===dragIndex"
        [attr.aria-disabled]="!itemEnabled(i)"
        [attr.aria-keyshortcuts]="navigable ? ariaKeyShortcuts : ''"
        [attr.aria-dropeffect]="ariaDropEffect(i)"
        [attr.data-sortable-item] = "true"
        [attr.data-sortable-index]="i"
        [attr.data-sortable-id]="id"
        [index]="i"
        [hidden]="item.hidden"
        [disabled]="!itemEnabled(i)"
        [ngClass]="currentItemClass(i)"
        [ngStyle]="currentItemStyle(i)"
        (focus)="focusHandler(i)"
        (blur)="blurHandler()"
        [kendoEventsOutsideAngular]="{
            keydown: keydownHandler
        }"
        >
        @if (itemTemplateRef) {
          <ng-container
            [ngTemplateOutlet]="itemTemplate(i)"
            [ngTemplateOutletContext]="item">
          </ng-container>
        }
        @if (!itemTemplateRef) {
          {{item.item}}
        }
      </div>
    }
    
    @if (!_data.length || _localData.length === 1 && _localData[0].hidden) {
      <ng-container #noDataRef>
        <div
          kendoDraggable
          [index]="0"
          [disabled]="true"
          [attr.data-sortable-id]="id"
          [attr.data-sortable-index]="0"
          [ngStyle]="currentItemStyle(-1)"
          [ngClass]="currentItemClass(-1)"
        >{{emptyText}}</div>
      </ng-container>
    }
    @if (hintVisible()) {
      <div [ngStyle]="hintStyle()" [ngClass]="currentItemClass(dragIndex)">
        @if (itemTemplateRef) {
          <ng-container
            [ngTemplateOutlet]="itemTemplateRef"
            [ngTemplateOutletContext]="{item: _localData[dragIndex].item}">
          </ng-container>
        }
        @if (!itemTemplateRef) {
          {{_localData[dragIndex].item}}
        }
      </div>
    }
    `,
      standalone: true,
      imports: [DraggableDirective, NgClass, NgStyle, NgTemplateOutlet, EventsOutsideAngularDirective]
    }]
  }], () => [{
    type: NgZone
  }, {
    type: Renderer2
  }, {
    type: ChangeDetectorRef
  }, {
    type: LocalizationService
  }, {
    type: ElementRef
  }, {
    type: SortableService
  }, {
    type: ChangeDetectorRef
  }], {
    tabIndex: [{
      type: Input
    }],
    trackBy: [{
      type: Input
    }],
    data: [{
      type: Input
    }],
    navigable: [{
      type: Input
    }],
    animation: [{
      type: Input
    }],
    disabledIndexes: [{
      type: Input
    }],
    zone: [{
      type: Input
    }],
    acceptZones: [{
      type: Input
    }],
    itemStyle: [{
      type: Input
    }],
    emptyItemStyle: [{
      type: Input
    }],
    activeItemStyle: [{
      type: Input
    }],
    disabledItemStyle: [{
      type: Input
    }],
    itemClass: [{
      type: Input
    }],
    activeItemClass: [{
      type: Input
    }],
    emptyItemClass: [{
      type: Input
    }],
    disabledItemClass: [{
      type: Input
    }],
    emptyText: [{
      type: Input
    }],
    defaultTemplateRef: [{
      type: ContentChildren,
      args: [TemplateRef, {
        descendants: false
      }]
    }],
    itemTemplateDirectiveRef: [{
      type: ContentChildren,
      args: [ItemTemplateDirective, {
        read: TemplateRef,
        descendants: false
      }]
    }],
    placeholderTemplateDirectiveRef: [{
      type: ContentChildren,
      args: [PlaceholderTemplateDirective, {
        read: TemplateRef,
        descendants: false
      }]
    }],
    itemWrappers: [{
      type: ViewChildren,
      args: ["itemWrapper"]
    }],
    draggables: [{
      type: ViewChildren,
      args: [DraggableDirective]
    }],
    noDataContainer: [{
      type: ViewChild,
      args: ["noDataRef"]
    }],
    hint: [{
      type: ViewChild,
      args: ["hint"]
    }],
    dragStart: [{
      type: Output
    }],
    dragEnd: [{
      type: Output
    }],
    dragOver: [{
      type: Output
    }],
    dragLeave: [{
      type: Output
    }],
    dataMove: [{
      type: Output
    }],
    dataAdd: [{
      type: Output
    }],
    dataRemove: [{
      type: Output
    }],
    navigate: [{
      type: Output
    }],
    activeIndex: [{
      type: Input
    }],
    touchAction: [{
      type: HostBinding,
      args: ["style.touch-action"]
    }],
    dir: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    hostRole: [{
      type: HostBinding,
      args: ["attr.role"]
    }]
  });
})();
var DataAddEvent = class extends PreventableEvent {
  /**
   * Specifies the index of the data item.
   */
  index;
  /**
   * Specifies the data item to add.
   */
  dataItem;
  /**
   * @hidden
   */
  constructor(options) {
    super();
    Object.assign(this, options);
  }
};
var DataRemoveEvent = class extends PreventableEvent {
  /**
   * Specifies the index of the data item.
   */
  index;
  /**
   * Specifies the data item to remove.
   */
  dataItem;
  /**
   * @hidden
   */
  constructor(options) {
    super();
    Object.assign(this, options);
  }
};
var DataMoveEvent = class extends PreventableEvent {
  /**
   * Specifies the index of the data item.
   */
  index;
  /**
   * Specifies the old index of the data item.
   */
  oldIndex;
  /**
   * Specifies the data item to move.
   */
  dataItem;
  /**
   * @hidden
   */
  constructor(options) {
    super();
    Object.assign(this, options);
  }
};
var SortableBindingDirective = class _SortableBindingDirective {
  sortable;
  sortableService;
  removeHiddenSubscription;
  dragOverSubscription;
  navigateSubscription;
  lastTarget;
  /**
   * Sets a data-bound array that is used as a data source for the Sortable ([see example](slug:overview_sortable)).
   */
  set data(data) {
    this.sortable.data = data;
  }
  constructor(sortable, sortableService) {
    this.sortable = sortable;
    this.sortableService = sortableService;
    this.sortableService = sortableService;
  }
  nextEnabledIndex(index, sortable) {
    for (let i = index; i <= sortable.data.length; i++) {
      if (sortable.itemEnabled(i)) {
        return i;
      }
    }
  }
  addItem(event, sortable) {
    let index = event.index;
    const dataItem = this.sortableService.getSource().data[event.oldIndex];
    const addEvent = new DataAddEvent({
      index,
      dataItem
    });
    sortable.dataAdd.emit(addEvent);
    if (!addEvent.isDefaultPrevented()) {
      if (index === sortable.itemWrappers.length - 1 && !sortable.noDataContainer) {
        index++;
      }
      sortable.addDataItem(dataItem, index);
    }
    return !addEvent.isDefaultPrevented();
  }
  removeItem(event, sortable) {
    const originDraggable = this.sortableService.originDraggable;
    const removeEvent = new DataRemoveEvent({
      index: event.oldIndex,
      dataItem: sortable.data[event.oldIndex]
    });
    sortable.dataRemove.emit(removeEvent);
    if (!removeEvent.isDefaultPrevented()) {
      if (originDraggable && originDraggable.parent === sortable) {
        sortable.hideItem(event.oldIndex, true);
      } else {
        sortable.removeDataItem(event.oldIndex);
      }
    }
    return !removeEvent.isDefaultPrevented();
  }
  moveItem(event, sortable) {
    if (event.index === event.oldIndex) {
      return false;
    }
    const moveEvent = new DataMoveEvent({
      dataItem: sortable.data[event.oldIndex],
      index: event.index,
      oldIndex: event.oldIndex
    });
    sortable.dataMove.emit(moveEvent);
    if (!moveEvent.isDefaultPrevented()) {
      sortable.moveItem(event.oldIndex, event.index);
    }
    return !moveEvent.isDefaultPrevented();
  }
  /**
   * Removes the Draggable item from which the drag started.
   * @hidden
   */
  removeOriginDraggable() {
    if (this.removeHiddenSubscription) {
      this.removeHiddenSubscription.unsubscribe();
    }
    this.removeHiddenSubscription = this.sortableService.onReleaseSubject.pipe(take(1), filter((_) => this.sortableService.originDraggable !== null && this.sortableService.originDraggable.hidden)).subscribe((e) => {
      const originDraggable = this.sortableService.originDraggable;
      const newSource = this.sortableService.getSource();
      if (originDraggable.parent !== this.sortableService.target) {
        const isTargetDraggable = e.target ? e.target.isDraggable || e.target.isDraggableChild : false;
        if (isTargetDraggable || originDraggable.parent !== newSource) {
          if (originDraggable.parent !== this.sortableService.target) {
            originDraggable.parent.removeDataItem(originDraggable.index);
          }
        }
        this.sortableService.originDraggable = null;
      }
    });
  }
  onDragOver(event) {
    const source = this.sortableService.getSource();
    const target = this.sortableService.target;
    const targetDraggables = target.draggables.toArray();
    if (event.isDefaultPrevented()) {
      return;
    }
    event.preventDefault();
    if (target === source) {
      if (targetDraggables[event.index] !== this.lastTarget) {
        this.moveItem(event, target);
      }
      this.lastTarget = void 0;
    } else {
      if (!target.itemEnabled(event.index)) {
        event.index = this.nextEnabledIndex(event.index, target);
      }
      if (this.addItem(event, target) && this.removeItem(event, source)) {
        this.lastTarget = target.draggables.toArray()[event.index];
        this.removeOriginDraggable();
        target.activeIndex = event.index;
        source.activeIndex = -1;
      }
    }
  }
  onNavigate(event) {
    if (event.ctrlKey) {
      const moveEvent = new DataMoveEvent({
        dataItem: this.sortable.data[event.oldIndex],
        index: event.index,
        oldIndex: event.oldIndex
      });
      this.sortable.dataMove.emit(moveEvent);
      if (!moveEvent.isDefaultPrevented()) {
        this.sortable.moveItem(event.oldIndex, event.index);
      }
    } else {
      this.sortable.activeIndex = event.index;
    }
  }
  ngOnInit() {
    this.dragOverSubscription = this.sortable.dragOver.subscribe(this.onDragOver.bind(this));
    this.navigateSubscription = this.sortable.navigate.subscribe(this.onNavigate.bind(this));
  }
  ngOnDestroy() {
    this.dragOverSubscription.unsubscribe();
    this.navigateSubscription.unsubscribe();
    if (this.removeHiddenSubscription) {
      this.removeHiddenSubscription.unsubscribe();
    }
  }
  static ɵfac = function SortableBindingDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SortableBindingDirective)(ɵɵdirectiveInject(SortableComponent), ɵɵdirectiveInject(SortableService));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _SortableBindingDirective,
    selectors: [["", "kendoSortableBinding", ""]],
    inputs: {
      data: [0, "kendoSortableBinding", "data"]
    },
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SortableBindingDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoSortableBinding]",
      standalone: true
    }]
  }], () => [{
    type: SortableComponent
  }, {
    type: SortableService
  }], {
    data: [{
      type: Input,
      args: ["kendoSortableBinding"]
    }]
  });
})();
var KENDO_SORTABLE = [SortableComponent, DraggableDirective, PlaceholderTemplateDirective, ItemTemplateDirective, SortableBindingDirective];
var SortableModule = class _SortableModule {
  static ɵfac = function SortableModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SortableModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _SortableModule,
    imports: [SortableComponent, DraggableDirective, PlaceholderTemplateDirective, ItemTemplateDirective, SortableBindingDirective],
    exports: [SortableComponent, DraggableDirective, PlaceholderTemplateDirective, ItemTemplateDirective, SortableBindingDirective]
  });
  static ɵinj = ɵɵdefineInjector({
    providers: [SortableService]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SortableModule, [{
    type: NgModule,
    args: [{
      imports: [...KENDO_SORTABLE],
      exports: [...KENDO_SORTABLE],
      providers: [SortableService]
    }]
  }], null, null);
})();
export {
  DataAddEvent,
  DataMoveEvent,
  DataRemoveEvent,
  DragEndEvent,
  DragOverEvent,
  DragStartEvent,
  DraggableDirective,
  DraggableEvent,
  ItemTemplateDirective,
  KENDO_SORTABLE,
  NavigateEvent,
  PlaceholderTemplateDirective,
  PreventableEvent,
  SortableBindingDirective,
  SortableComponent,
  SortableContainer,
  SortableModule,
  SortableService
};
//# sourceMappingURL=@progress_kendo-angular-sortable.js.map
