import {
  Extent,
  Location,
  instance_observer_default,
  map_default
} from "./chunk-MYHIGSFG.js";
import "./chunk-ZIJEPVJY.js";
import {
  caretAltDownIcon,
  caretAltLeftIcon,
  caretAltRightIcon,
  caretAltUpIcon,
  mapMarkerIcon,
  mapMarkerTargetIcon,
  minusIcon,
  plusIcon
} from "./chunk-KXMGKHT2.js";
import {
  IconsService
} from "./chunk-3ZH7CTYC.js";
import {
  POPUP_CONTAINER,
  PopupService
} from "./chunk-NKWNDTJB.js";
import {
  ResizeBatchService,
  ResizeSensorComponent,
  hasObservers,
  isDocumentAvailable
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
  DomSanitizer
} from "./chunk-74QYUCA6.js";
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
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  Injectable,
  Input,
  NgModule,
  NgZone,
  Optional,
  Output,
  Renderer2,
  SecurityContext,
  SimpleChange,
  TemplateRef,
  ViewChild,
  forwardRef,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵinvalidFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵviewQuery
} from "./chunk-R7LRY632.js";
import "./chunk-UG3XN6F5.js";
import "./chunk-K3IIKLCY.js";
import {
  BehaviorSubject,
  Subject,
  combineLatest,
  tap
} from "./chunk-WISTXZPE.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-N6ESDQJH.js";

// node_modules/@progress/kendo-angular-map/fesm2022/progress-kendo-angular-map.mjs
var _c0 = ["content"];
function TooltipPopupComponent_ng_template_0_ng_template_2_Template(rf, ctx) {
}
function TooltipPopupComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1)(1, "div", 2);
    ɵɵtemplate(2, TooltipPopupComponent_ng_template_0_ng_template_2_Template, 0, 0, "ng-template", 3);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r0.popupClasses)("ngStyle", ctx_r0.style);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.tooltipTemplateRef)("ngTemplateOutletContext", ctx_r0.tooltipContext);
  }
}
var ItemChange = class {
  sender;
  options;
  constructor(sender, options) {
    this.sender = sender;
    this.options = options;
  }
};
var CollectionService = class _CollectionService {
  itemChanges;
  source;
  constructor() {
    this.source = new Subject();
    this.itemChanges = this.source.asObservable();
  }
  notify(change) {
    this.source.next(change);
  }
  static ɵfac = function CollectionService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CollectionService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _CollectionService,
    factory: _CollectionService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CollectionService, [{
    type: Injectable
  }], () => [], null);
})();
var Change = class {
  key;
  value;
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
};
var ConfigurationService = class _ConfigurationService {
  ngZone;
  changes;
  store = {};
  source = new BehaviorSubject({});
  constructor(ngZone) {
    this.ngZone = ngZone;
    this.initSource();
  }
  initSource() {
    this.changes = this.source.asObservable();
  }
  push(store) {
    this.store = store;
    this.next();
  }
  notify(change) {
    this.set(change.key, change.value);
    this.next();
  }
  set(field, value) {
    let store = this.store;
    const parts = field.split(".");
    let key = parts.shift();
    while (parts.length > 0) {
      store = store[key] = store[key] || {};
      key = parts.shift();
    }
    store[key] = value;
  }
  next() {
    this.ngZone.runOutsideAngular(() => {
      this.source.next(this.store);
    });
  }
  static ɵfac = function ConfigurationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConfigurationService)(ɵɵinject(NgZone));
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _ConfigurationService,
    factory: _ConfigurationService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfigurationService, [{
    type: Injectable
  }], () => [{
    type: NgZone
  }], null);
})();
function copyChanges(changes, options) {
  for (const propertyName in changes) {
    if (!changes.hasOwnProperty(propertyName)) {
      continue;
    }
    const value = changes[propertyName].currentValue;
    if (value === void 0) {
      delete options[propertyName];
    } else {
      options[propertyName] = value;
    }
  }
}
function toSimpleChanges(changes) {
  const result = {};
  for (const propertyName in changes) {
    if (!changes.hasOwnProperty(propertyName)) {
      continue;
    }
    result[propertyName] = new SimpleChange(null, changes[propertyName], false);
  }
  return result;
}
var CollectionItemComponent = class _CollectionItemComponent {
  configurationService;
  collectionService;
  subscription;
  index = -1;
  options = {};
  constructor(configurationService, collectionService) {
    this.configurationService = configurationService;
    this.collectionService = collectionService;
    this.subscription = configurationService.changes.subscribe((store) => {
      this.options = store;
      this.notify();
    });
  }
  ngOnChanges(changes) {
    const store = this.configurationService.store;
    copyChanges(changes, store);
    this.configurationService.push(store);
  }
  /**
   * Updates the component fields with the specified values and refreshes the Chart.
   *
   * Use this method when the configuration values cannot be set through the template.
   *
   * @example
   * ```ts-no-run
   * item.notifyChanges({ visible: true });
   * ```
   *
   * @param changes An object containing the updated input fields.
   */
  notifyChanges(changes) {
    this.ngOnChanges(toSimpleChanges(changes));
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  notify() {
    if (!this.collectionService) {
      return;
    }
    this.collectionService.notify(new ItemChange(this, this.options));
  }
  static ɵfac = function CollectionItemComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CollectionItemComponent)(ɵɵdirectiveInject(ConfigurationService), ɵɵdirectiveInject(CollectionService));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _CollectionItemComponent,
    features: [ɵɵNgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CollectionItemComponent, [{
    type: Directive
  }], () => [{
    type: ConfigurationService
  }, {
    type: CollectionService
  }], null);
})();
var SettingsComponent = class _SettingsComponent {
  configKey;
  configurationService;
  store = {};
  constructor(configKey, configurationService) {
    this.configKey = configKey;
    this.configurationService = configurationService;
    if (configKey === void 0) {
      throw new Error("Configuration key not set");
    }
  }
  ngOnDestroy() {
    this.store = void 0;
    this.notify();
  }
  ngOnChanges(changes) {
    copyChanges(changes, this.store);
    this.notify();
  }
  /**
   * Updates the component fields with the specified values and refreshes the component.
   *
   * Use this method when the configuration values cannot be set through the template.
   *
   * @example
   * ```ts-no-run
   * item.notifyChanges({ visible: true });
   * ```
   *
   * @param changes An object containing the updated input fields.
   */
  notifyChanges(changes) {
    this.ngOnChanges(toSimpleChanges(changes));
  }
  markAsVisible() {
    this.store.visible = true;
    this.notify();
  }
  notify() {
    this.configurationService.notify(new Change(this.configKey, this.store));
  }
  static ɵfac = function SettingsComponent_Factory(__ngFactoryType__) {
    ɵɵinvalidFactory();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _SettingsComponent,
    features: [ɵɵNgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettingsComponent, [{
    type: Directive
  }], () => [{
    type: void 0
  }, {
    type: ConfigurationService
  }], null);
})();
var LayerTooltipComponent = class _LayerTooltipComponent extends SettingsComponent {
  configurationService;
  layerTooltipTemplate;
  constructor(configurationService) {
    super("tooltip", configurationService);
    this.configurationService = configurationService;
  }
  get layerTooltipTemplateRef() {
    return this.layerTooltipTemplate;
  }
  static ɵfac = function LayerTooltipComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LayerTooltipComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _LayerTooltipComponent,
    selectors: [["kendo-map-layer-tooltip"]],
    contentQueries: function LayerTooltipComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, TemplateRef, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.layerTooltipTemplate = _t.first);
      }
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function LayerTooltipComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LayerTooltipComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-map-layer-tooltip",
      template: "",
      standalone: true
    }]
  }], () => [{
    type: ConfigurationService
  }], {
    layerTooltipTemplate: [{
      type: ContentChild,
      args: [TemplateRef, {
        static: false
      }]
    }]
  });
})();
var LayerComponent = class _LayerComponent extends CollectionItemComponent {
  type;
  configurationService;
  collectionService;
  sanitizer;
  /**
   * @hidden
   */
  attribution;
  /**
   * @hidden
   */
  extent;
  /**
   * @hidden
   */
  maxZoom;
  /**
   * @hidden
   */
  minZoom;
  /**
   * @hidden
   */
  opacity;
  /**
   * @hidden
   */
  zIndex;
  layerTooltip;
  constructor(type, configurationService, collectionService, sanitizer) {
    super(configurationService, collectionService);
    this.type = type;
    this.configurationService = configurationService;
    this.collectionService = collectionService;
    this.sanitizer = sanitizer;
  }
  ngOnChanges(changes) {
    const store = this.configurationService.store;
    store.type = this.type;
    const attrChange = changes["attribution"];
    if (attrChange && this.sanitizer) {
      attrChange.currentValue = this.sanitizer.sanitize(SecurityContext.HTML, attrChange.currentValue);
    }
    super.ngOnChanges(changes);
  }
  get layerTooltipTemplateRef() {
    if (this.layerTooltip) {
      return this.layerTooltip.layerTooltipTemplateRef;
    }
  }
  static ɵfac = function LayerComponent_Factory(__ngFactoryType__) {
    ɵɵinvalidFactory();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _LayerComponent,
    contentQueries: function LayerComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, LayerTooltipComponent, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.layerTooltip = _t.first);
      }
    },
    inputs: {
      attribution: "attribution",
      extent: "extent",
      maxZoom: "maxZoom",
      minZoom: "minZoom",
      opacity: "opacity",
      zIndex: "zIndex"
    },
    features: [ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LayerComponent, [{
    type: Directive
  }], () => [{
    type: void 0
  }, {
    type: ConfigurationService
  }, {
    type: CollectionService
  }, {
    type: DomSanitizer
  }], {
    attribution: [{
      type: Input
    }],
    extent: [{
      type: Input
    }],
    maxZoom: [{
      type: Input
    }],
    minZoom: [{
      type: Input
    }],
    opacity: [{
      type: Input
    }],
    zIndex: [{
      type: Input
    }],
    layerTooltip: [{
      type: ContentChild,
      args: [LayerTooltipComponent, {
        static: false
      }]
    }]
  });
})();
var BubbleLayerComponent = class _BubbleLayerComponent extends LayerComponent {
  configurationService;
  collectionService;
  sanitizer;
  /**
   * Sets the array of data items for this layer.
   */
  data;
  /**
   * Sets the data item field which contains the symbol location.
   * The field should be an array with two numbers &mdash; latitude and longitude in decimal degrees.
   */
  locationField;
  /**
   * Sets the value field for the symbols used to determine their relative size.
   * The data item field should be a number.
   */
  valueField;
  /**
   * Sets the symbol to use for bubble layers.
   */
  symbol;
  /**
   * Sets the default style for symbols.
   */
  style;
  /**
   * Sets the maximum symbol size for bubble layer symbols.
   *
   * @default 100
   */
  maxSize;
  /**
   * Sets the minimum symbol size for bubble layer symbols.
   * Setting a non-zero value will distort the symbol area to value ratio.
   *
   * @default 0
   */
  minSize;
  constructor(configurationService, collectionService, sanitizer) {
    super("bubble", configurationService, collectionService, sanitizer);
    this.configurationService = configurationService;
    this.collectionService = collectionService;
    this.sanitizer = sanitizer;
  }
  static ɵfac = function BubbleLayerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BubbleLayerComponent)(ɵɵdirectiveInject(ConfigurationService), ɵɵdirectiveInject(CollectionService), ɵɵdirectiveInject(DomSanitizer));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _BubbleLayerComponent,
    selectors: [["kendo-map-bubble-layer"]],
    inputs: {
      data: "data",
      locationField: "locationField",
      valueField: "valueField",
      symbol: "symbol",
      style: "style",
      maxSize: "maxSize",
      minSize: "minSize"
    },
    standalone: true,
    features: [ɵɵProvidersFeature([ConfigurationService, {
      provide: LayerComponent,
      useExisting: forwardRef(() => _BubbleLayerComponent)
    }]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function BubbleLayerComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BubbleLayerComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [ConfigurationService, {
        provide: LayerComponent,
        useExisting: forwardRef(() => BubbleLayerComponent)
      }],
      selector: "kendo-map-bubble-layer",
      template: "",
      standalone: true
    }]
  }], () => [{
    type: ConfigurationService
  }, {
    type: CollectionService
  }, {
    type: DomSanitizer
  }], {
    data: [{
      type: Input
    }],
    locationField: [{
      type: Input
    }],
    valueField: [{
      type: Input
    }],
    symbol: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    maxSize: [{
      type: Input
    }],
    minSize: [{
      type: Input
    }]
  });
})();
function hasParent(element, parent) {
  let current = element;
  while (current && current !== parent) {
    current = current.parentNode;
  }
  return current ? true : false;
}
var MapInstanceObserver = class extends instance_observer_default {
  handlerMap = {
    hideTooltip: "onHideTooltip",
    init: "onInit",
    render: "onRender",
    showTooltip: "onShowTooltip",
    centerChange: "onCenterChange",
    zoomChange: "onZoomChange"
  };
  constructor(instance) {
    super(instance);
  }
};
var BaseEvent = class _BaseEvent {
  /**
   * The `MapComponent` that triggered the event.
   */
  sender;
  /**
   * @hidden
   */
  constructor(sender) {
    this.sender = sender;
  }
  static ɵfac = function BaseEvent_Factory(__ngFactoryType__) {
    ɵɵinvalidFactory();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _BaseEvent
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseEvent, [{
    type: Directive
  }], () => [{
    type: void 0
  }], null);
})();
var BeforeResetEvent = class extends BaseEvent {
  /**
   * @hidden
   */
  constructor(_, sender) {
    super(sender);
  }
};
var MapClickEvent = class extends BaseEvent {
  /**
   * The location of the clicked point.
   */
  location;
  /**
   * The source DOM event instance.
   */
  originalEvent;
  /**
   * @hidden
   */
  constructor(e, sender) {
    super(sender);
    this.location = e.location;
    this.originalEvent = e.originalEvent;
  }
};
var MarkerActivateEvent = class extends BaseEvent {
  /**
   * The marker instance.
   */
  marker;
  /**
   * The marker layer instance.
   */
  layer;
  /**
   * @hidden
   */
  constructor(e, sender) {
    super(sender);
    this.marker = e.marker;
    this.layer = e.layer;
  }
};
var MarkerClickEvent = class extends BaseEvent {
  /**
   * The marker instance.
   */
  marker;
  /**
   * The marker layer instance.
   */
  layer;
  /**
   * @hidden
   */
  constructor(e, sender) {
    super(sender);
    this.marker = e.marker;
    this.layer = e.layer;
  }
};
var PreventableEvent = class _PreventableEvent extends BaseEvent {
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
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵPreventableEvent_BaseFactory;
    return function PreventableEvent_Factory(__ngFactoryType__) {
      return (ɵPreventableEvent_BaseFactory || (ɵPreventableEvent_BaseFactory = ɵɵgetInheritedFactory(_PreventableEvent)))(__ngFactoryType__ || _PreventableEvent);
    };
  })();
  static ɵdir = ɵɵdefineDirective({
    type: _PreventableEvent,
    features: [ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PreventableEvent, [{
    type: Directive
  }], null, null);
})();
var MarkerCreatedEvent = class extends PreventableEvent {
  /**
   * The marker instance.
   */
  marker;
  /**
   * The marker layer instance.
   */
  layer;
  /**
   * @hidden
   */
  constructor(e, sender) {
    super(sender);
    this.marker = e.marker;
    this.layer = e.layer;
  }
};
var PanEndEvent = class extends BaseEvent {
  /**
   * The map origin (top left or NW corner).
   */
  origin;
  /**
   * The current map center.
   */
  center;
  /**
   * The source DOM event instance.
   */
  originalEvent;
  /**
   * @hidden
   */
  constructor(e, sender) {
    super(sender);
    this.origin = e.origin;
    this.center = e.center;
    this.originalEvent = e.originalEvent;
  }
};
var PanEvent = class extends BaseEvent {
  /**
   * The map origin (top left or NW corner).
   */
  origin;
  /**
   * The current map center.
   */
  center;
  /**
   * The source DOM event instance.
   */
  originalEvent;
  /**
   * @hidden
   */
  constructor(e, sender) {
    super(sender);
    this.origin = e.origin;
    this.center = e.center;
    this.originalEvent = e.originalEvent;
  }
};
var ResetEvent = class extends BaseEvent {
  /**
   * @hidden
   */
  constructor(_, sender) {
    super(sender);
  }
};
var ShapeClickEvent = class extends BaseEvent {
  /**
   * The shape layer instance.
   */
  layer;
  /**
   * The shape instance.
   */
  shape;
  /**
   * The source DOM event instance.
   */
  originalEvent;
  /**
   * @hidden
   */
  constructor(e, sender) {
    super(sender);
    this.layer = e.layer;
    this.shape = e.shape;
    this.originalEvent = e.originalEvent;
  }
};
var ShapeCreatedEvent = class extends BaseEvent {
  /**
   * The shape layer instance.
   */
  layer;
  /**
   * The shape instance.
   */
  shape;
  /**
   * The original data item for this Shape.
   */
  dataItem;
  /**
   * The shape location.
   */
  location;
  /**
   * @hidden
   */
  constructor(e, sender) {
    super(sender);
    this.layer = e.layer;
    this.shape = e.shape;
    this.dataItem = e.shape.dataItem;
    this.location = e.shape.location;
  }
};
var ShapeFeatureCreatedEvent = class extends BaseEvent {
  /**
   * The original data item for this Feature. Includes `geometries` and `properties` members.
   */
  dataItem;
  /**
   * The shape layer instance.
   */
  layer;
  /**
   * The group that contains feature shape instances.
   */
  group;
  /**
   * A reference to the `dataItem.properties` object.
   */
  properties;
  /**
   * @hidden
   */
  constructor(e, sender) {
    super(sender);
    this.dataItem = e.dataItem;
    this.layer = e.layer;
    this.group = e.group;
    this.properties = e.properties;
  }
};
var ShapeMouseEnterEvent = class extends BaseEvent {
  /**
   * The shape layer instance.
   */
  layer;
  /**
   * The shape instance.
   */
  shape;
  /**
   * The source DOM event instance.
   */
  originalEvent;
  /**
   * @hidden
   */
  constructor(e, sender) {
    super(sender);
    this.layer = e.layer;
    this.shape = e.shape;
    this.originalEvent = e.originalEvent;
  }
};
var ShapeMouseLeaveEvent = class extends BaseEvent {
  /**
   * The shape layer instance.
   */
  layer;
  /**
   * The shape instance.
   */
  shape;
  /**
   * The source DOM event instance.
   */
  originalEvent;
  /**
   * @hidden
   */
  constructor(e, sender) {
    super(sender);
    this.layer = e.layer;
    this.shape = e.shape;
    this.originalEvent = e.originalEvent;
  }
};
var ZoomEndEvent = class extends BaseEvent {
  /**
   * The source DOM event instance.
   */
  originalEvent;
  /**
   * @hidden
   */
  constructor(e, sender) {
    super(sender);
    this.originalEvent = e.originalEvent;
  }
};
var ZoomStartEvent = class extends PreventableEvent {
  /**
   * The source DOM event instance.
   */
  originalEvent;
  /**
   * @hidden
   */
  constructor(e, sender) {
    super(sender);
    this.originalEvent = e.originalEvent;
  }
};
var EVENT_MAP = {
  beforeReset: BeforeResetEvent,
  click: MapClickEvent,
  markerActivate: MarkerActivateEvent,
  markerClick: MarkerClickEvent,
  markerCreated: MarkerCreatedEvent,
  panEnd: PanEndEvent,
  pan: PanEvent,
  reset: ResetEvent,
  shapeClick: ShapeClickEvent,
  shapeCreated: ShapeCreatedEvent,
  shapeFeatureCreated: ShapeFeatureCreatedEvent,
  shapeMouseEnter: ShapeMouseEnterEvent,
  shapeMouseLeave: ShapeMouseLeaveEvent,
  zoomEnd: ZoomEndEvent,
  zoomStart: ZoomStartEvent
};
var InstanceEventService = class {
  create(name, args, sender) {
    if (EVENT_MAP[name]) {
      return new EVENT_MAP[name](args, sender);
    }
  }
};
var packageMetadata = {
  name: "@progress/kendo-angular-map",
  productName: "Kendo UI for Angular",
  productCode: "KENDOUIANGULAR",
  productCodes: ["KENDOUIANGULAR"],
  publishDate: 1768393330,
  version: "21.4.1",
  licensingDocsUrl: "https://www.telerik.com/kendo-angular-ui/my-license/"
};
var POSITION_MODE = "absolute";
var COLLISION = {
  horizontal: "fit",
  vertical: "fit"
};
var BaseTooltip = class _BaseTooltip {
  popupService;
  localizationService;
  animate = true;
  style = {
    position: "relative"
  };
  templateRef;
  popupRef = null;
  popupSettings;
  constructor(popupService, localizationService) {
    this.popupService = popupService;
    this.localizationService = localizationService;
  }
  get active() {
    return this.popupRef !== null;
  }
  show(e) {
    const offset = this.position(e.anchor);
    if (!this.popupRef) {
      this.popupRef = this.popupService.open(Object.assign({
        offset,
        popupAlign: {
          vertical: "bottom",
          horizontal: "center"
        },
        animate: this.animate,
        content: this.templateRef,
        collision: COLLISION,
        positionMode: POSITION_MODE
      }, this.popupSettings));
      if (this.localizationService.rtl) {
        this.popupRef.popupElement.setAttribute("dir", "rtl");
      }
      this.onInit();
    } else {
      const popup = this.popupRef.popup.instance;
      popup.offset = offset;
    }
  }
  hide() {
    if (this.popupRef) {
      this.popupRef.close();
      this.popupRef = null;
    }
  }
  onInit() {
  }
  ngOnDestroy() {
    this.hide();
  }
  position(offset) {
    if (!this.popupSettings || !this.popupSettings.appendTo) {
      return offset;
    }
    const appendTo = this.popupSettings.appendTo.element.nativeElement;
    const bbox = appendTo.getBoundingClientRect();
    const {
      scrollLeft,
      scrollTop
    } = this.scrollOffset(appendTo);
    return {
      left: offset.left - bbox.left - scrollLeft,
      top: offset.top - bbox.top - scrollTop
    };
  }
  scrollOffset(element) {
    if (!element) {
      return null;
    }
    let scrollLeft = element.scrollLeft;
    let scrollTop = element.scrollTop;
    let parent = element.parentElement;
    while (parent) {
      scrollLeft += parent.scrollLeft;
      scrollTop += parent.scrollTop;
      parent = parent.parentElement;
    }
    return {
      scrollLeft,
      scrollTop
    };
  }
  static ɵfac = function BaseTooltip_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BaseTooltip)(ɵɵdirectiveInject(PopupService), ɵɵdirectiveInject(LocalizationService));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _BaseTooltip,
    viewQuery: function BaseTooltip_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 7);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templateRef = _t.first);
      }
    },
    inputs: {
      popupSettings: "popupSettings"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseTooltip, [{
    type: Directive
  }], () => [{
    type: PopupService
  }, {
    type: LocalizationService
  }], {
    templateRef: [{
      type: ViewChild,
      args: ["content", {
        static: true
      }]
    }],
    popupSettings: [{
      type: Input
    }]
  });
})();
var TooltipTemplateService = class _TooltipTemplateService {
  templates = [];
  registerTemplate(layerIndex, template) {
    if (layerIndex > -1) {
      this.templates[layerIndex] = template;
    }
  }
  getTemplate(layerIndex) {
    if (layerIndex > -1) {
      return this.templates[layerIndex];
    }
  }
  static ɵfac = function TooltipTemplateService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TooltipTemplateService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _TooltipTemplateService,
    factory: _TooltipTemplateService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TooltipTemplateService, [{
    type: Injectable
  }], null, null);
})();
function bodyFactory() {
  if (isDocumentAvailable()) {
    return new ElementRef(document.body);
  }
}
var TooltipPopupComponent = class _TooltipPopupComponent extends BaseTooltip {
  popupService;
  templateService;
  localizationService;
  ngZone;
  tooltipTemplateRef;
  tooltipContext = {};
  animate = true;
  classNames;
  wrapperClass = "k-tooltip-wrapper";
  leave = new EventEmitter();
  popupClasses = {};
  mouseleaveSubscription;
  constructor(popupService, templateService, localizationService, ngZone) {
    super(popupService, localizationService);
    this.popupService = popupService;
    this.templateService = templateService;
    this.localizationService = localizationService;
    this.ngZone = ngZone;
  }
  show(e) {
    this.tooltipTemplateRef = this.templateService.getTemplate(e.layerIndex);
    if (!this.tooltipTemplateRef) {
      return;
    }
    this.popupClasses = Object.assign({
      "k-tooltip": true,
      "k-map-tooltip": true,
      [e.className]: Boolean(e.className)
    }, this.classNames);
    this.tooltipContext = e;
    super.show(e);
  }
  containsElement(element) {
    if (this.popupRef) {
      return hasParent(element, this.popupRef.popupElement);
    }
  }
  onInit() {
    this.ngZone.runOutsideAngular(() => {
      this.mouseleaveSubscription = this.popupRef.popupElement.addEventListener("mouseleave", (args) => {
        this.leave.emit(args);
      });
    });
    this.popupRef.popupElement.classList.add(this.wrapperClass);
  }
  hide() {
    if (this.mouseleaveSubscription) {
      this.mouseleaveSubscription();
      this.mouseleaveSubscription = null;
    }
    this.tooltipTemplateRef = null;
    super.hide();
  }
  static ɵfac = function TooltipPopupComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TooltipPopupComponent)(ɵɵdirectiveInject(PopupService), ɵɵdirectiveInject(TooltipTemplateService), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _TooltipPopupComponent,
    selectors: [["kendo-map-tooltip-popup"]],
    inputs: {
      animate: "animate",
      classNames: "classNames",
      wrapperClass: "wrapperClass"
    },
    outputs: {
      leave: "leave"
    },
    standalone: true,
    features: [ɵɵProvidersFeature([PopupService, {
      provide: POPUP_CONTAINER,
      useFactory: bodyFactory
    }]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 2,
    vars: 0,
    consts: [["content", ""], [3, "ngClass", "ngStyle"], [1, "k-tooltip-content"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function TooltipPopupComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, TooltipPopupComponent_ng_template_0_Template, 3, 4, "ng-template", null, 0, ɵɵtemplateRefExtractor);
      }
    },
    dependencies: [NgClass, NgStyle, NgTemplateOutlet],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TooltipPopupComponent, [{
    type: Component,
    args: [{
      providers: [PopupService, {
        provide: POPUP_CONTAINER,
        useFactory: bodyFactory
      }],
      selector: "kendo-map-tooltip-popup",
      template: `
    <ng-template #content>
        <div [ngClass]="popupClasses" [ngStyle]="style">
            <div class="k-tooltip-content">
                <ng-template [ngTemplateOutlet]="tooltipTemplateRef"
                            [ngTemplateOutletContext]="tooltipContext">
                </ng-template>
            </div>
        </div>
    </ng-template>
    `,
      standalone: true,
      imports: [NgClass, NgStyle, NgTemplateOutlet]
    }]
  }], () => [{
    type: PopupService
  }, {
    type: TooltipTemplateService
  }, {
    type: LocalizationService
  }, {
    type: NgZone
  }], {
    animate: [{
      type: Input
    }],
    classNames: [{
      type: Input
    }],
    wrapperClass: [{
      type: Input
    }],
    leave: [{
      type: Output
    }]
  });
})();
var svgIcons = {
  mapMarkerTargetIcon,
  mapMarkerIcon,
  plusIcon,
  minusIcon,
  caretAltUpIcon,
  caretAltDownIcon,
  caretAltLeftIcon,
  caretAltRightIcon
};
var MapComponent = class _MapComponent {
  configurationService;
  instanceEventService;
  element;
  localizationService;
  changeDetector;
  ngZone;
  renderer;
  iconsService;
  /**
   * Limits the automatic resizing of the Map. Sets the maximum number of times per second
   * that the component redraws its content when the size of its container changes.
   * To disable the automatic resizing, set it to `0`.
   *
   * @default 10
   *
   * @example
   * ```ts
   * @Component({
   *     selector: 'my-app',
   *     template: `
   *         <kendo-map [resizeRateLimit]="2">
   *       </kendo-map>
   *   `
   * })
   * export class AppComponent {
   * }
   * ```
   */
  resizeRateLimit = 10;
  /**
   * Specifies the map center coordinates.
   * Provide coordinates as `[Latitude, Longitude]`.
   */
  center;
  /**
   * Specifies the configuration for built-in map controls.
   */
  controls;
  /**
   * The minimum zoom level. Typical web maps use zoom levels from 0 (whole world) to 19 (sub-meter features).
   *
   * @default 1
   */
  minZoom;
  /**
   * The maximum zoom level. Typical web maps use zoom levels from 0 (whole world) to 19 (sub-meter features).
   *
   * @default 19
   */
  maxZoom;
  /**
   * The size of the map in pixels at zoom level 0.
   *
   * @default 256
   */
  minSize;
  /**
   * Controls whether the user can pan the map.
   *
   * @default true
   */
  pannable;
  /**
   * The settings for the tooltip popup.
   */
  popupSettings;
  /**
   * Specifies whether the map should wrap around the east-west edges.
   *
   * @default true
   */
  wraparound;
  /**
   * Specifies the initial zoom level.
   * Use values from 0 (whole world) to 19 (sub-meter features).
   * The map size derives from the zoom level and `minScale` options: `size = (2 ^ zoom) * minSize`.
   * Map zoom rounds floating point numbers to use whole [`zoom levels`](https://wiki.openstreetmap.org/wiki/Zoom_levels) 0 through 19.
   *
   * @default 3
   */
  zoom = 3;
  /**
   * Determines whether users can change the map zoom level.
   *
   * @default true
   */
  zoomable;
  /**
   * Fires immediately before the map resets. This event is typically used for cleanup by layer implementers.
   */
  beforeReset = new EventEmitter();
  /**
   * Fires when the user clicks on the map.
   */
  mapClick = new EventEmitter();
  /**
   * Fires when a marker appears on the map and its DOM element becomes available.
   */
  markerActivate = new EventEmitter();
  /**
   * Fires when the user clicks or taps a marker.
   */
  markerClick = new EventEmitter();
  /**
   * Fires once the map has created a marker, and just before the map displays it.
   *
   * Cancelling the event prevents displaying the marker.
   */
  markerCreated = new EventEmitter();
  /**
   * Fires after the map viewport completes panning.
   */
  panEnd = new EventEmitter();
  /**
   * Fires while the map viewport is being moved.
   */
  pan = new EventEmitter();
  /**
   * Fires when the map resets.
   *
   * This typically occurs on initial load and after a zoom/center change.
   */
  reset = new EventEmitter();
  /**
   * Fires when a shape is clicked or tapped.
   */
  shapeClick = new EventEmitter();
  /**
   * Fires when a shape is created, but is not rendered yet.
   */
  shapeCreated = new EventEmitter();
  /**
   * Fires when a [GeoJSON Feature](https://geojson.org/geojson-spec.html#feature-objects) is created on a shape layer.
   */
  shapeFeatureCreated = new EventEmitter();
  /**
   * Fires when the mouse enters a shape.
   *
   * > This event will fire reliably only for shapes that have set fill color.
   * > The opacity can still be set to 0 so the shapes appear to have no fill.
   */
  shapeMouseEnter = new EventEmitter();
  /**
   * Fires when the mouse leaves a shape.
   *
   * > This event will fire reliably only for shapes that have set fill color.
   * > The opacity can still be set to 0 so the shapes appear to have no fill.
   */
  shapeMouseLeave = new EventEmitter();
  /**
   * Fires when the map zoom level is about to change.
   *
   * Cancelling the event will prevent the user action.
   */
  zoomStart = new EventEmitter();
  /**
   * Fires when the map zoom level changes.
   */
  zoomEnd = new EventEmitter();
  /**
   * Fires when the map center has been changed.
   */
  centerChange = new EventEmitter();
  /**
   * Fires when the map zoom level has been changed.
   */
  zoomChange = new EventEmitter();
  tooltipInstance;
  instance;
  initResizeSensor = false;
  options;
  theme = null;
  resizeTimeout;
  redrawTimeout;
  destroyed;
  rtl = false;
  subscriptions;
  optionsChange;
  domSubscriptions;
  iconSettings;
  constructor(configurationService, instanceEventService, element, localizationService, changeDetector, ngZone, renderer, iconsService) {
    this.configurationService = configurationService;
    this.instanceEventService = instanceEventService;
    this.element = element;
    this.localizationService = localizationService;
    this.changeDetector = changeDetector;
    this.ngZone = ngZone;
    this.renderer = renderer;
    this.iconsService = iconsService;
    A(packageMetadata);
  }
  ngAfterViewInit() {
    if (this.canRender) {
      this.ngZone.runOutsideAngular(() => {
        const mapMouseleave = this.renderer.listen(this.element.nativeElement, "mouseleave", this.mapMouseleave.bind(this));
        this.domSubscriptions = () => {
          mapMouseleave();
        };
      });
    }
    this.setDirection();
    this.initConfig();
    this.subscriptions = this.localizationService.changes.subscribe(() => this.setDirection());
  }
  ngAfterViewChecked() {
    if (this.instance && this.autoResize) {
      this.ngZone.runOutsideAngular(() => {
        clearTimeout(this.resizeTimeout);
        this.resizeTimeout = setTimeout(() => {
          this.resize();
        }, 0);
      });
    }
  }
  ngOnChanges(changes) {
    if (this.instance) {
      if (changes["zoom"]) {
        this.instance.zoom(changes["zoom"].currentValue);
        delete changes["zoom"];
      }
      if (changes["center"]) {
        this.instance.center(changes["center"].currentValue);
        delete changes["center"];
      }
      if (Object.keys(changes).length === 0) {
        return;
      }
    }
    const store = this.configurationService.store;
    copyChanges(changes, store);
    store.popupSettings = null;
    this.configurationService.push(store);
  }
  ngOnDestroy() {
    this.destroyed = true;
    if (this.optionsChange) {
      this.optionsChange.unsubscribe();
    }
    if (this.domSubscriptions) {
      this.domSubscriptions();
      this.domSubscriptions = null;
    }
    if (this.instance) {
      this.instance.destroy();
      this.instance = null;
    }
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }
  /**
   * Gets the marker layers instances.
   */
  get layers() {
    return this.instance?.layers;
  }
  /**
   * Gets the extent (visible area) of the map.
   */
  get extent() {
    return this.instance?.extent();
  }
  /**
   * Sets the extent (visible area) of the map.
   */
  set extent(extent) {
    this.instance?.extent(extent);
  }
  /**
   * Detects the container size and redraws the Map.
   * Resizing happens automatically unless you set `resizeRateLimit` to `0`.
   */
  resize() {
  }
  /**
   * Gets the size of the visible map area.
   *
   * @returns {Object} The width and height of the visible map area.
   */
  viewSize() {
    return this.instance?.viewSize();
  }
  /**
   * Gets event coordinates relative to the map element.
   * Offset coordinates do not sync to a specific map location.
   *
   * @param {any} e The mouse event.
   * @returns {geometry.Point} The event coordinates relative to the map element.
   */
  eventOffset(e) {
    return this.instance?.eventOffset(e);
  }
  /**
   * Gets projected layer coordinates for this mouse event.
   * Layer coordinates are absolute and change only when zoom level changes.
   *
   * @param {any} e The mouse event.
   * @returns {geometry.Point} The projected layer coordinates for this event.
   */
  eventToLayer(e) {
    return this.instance?.eventToLayer(e);
  }
  /**
   * Gets the geographic location for this mouse event.
   *
   * @param {any} e The mouse event.
   * @returns {geometry.Point} The geographic location for this mouse event.
   */
  eventToLocation(e) {
    return this.instance?.eventToLocation(e);
  }
  /**
   * Gets relative view coordinates for this mouse event.
   * Layer elements positioned on these coordinates appear under the mouse cursor.
   * View coordinates become invalid after a map reset.
   *
   * @param {any} e The mouse event.
   * @returns {geometry.Point} The relative view coordinates for this mouse event.
   */
  eventToView(e) {
    return this.instance?.eventToView(e);
  }
  /**
   * Converts layer coordinates to geographic location.
   *
   * @param {geometry.Point | number[]} point The layer coordinates. Arrays use x, y order.
   * @param {number} zoom Optional. Zoom level to use. Defaults to current zoom level.
   * @returns {Location} The geographic location for the layer coordinates.
   */
  layerToLocation(point, zoom) {
    return this.instance?.layerToLocation(point, zoom);
  }
  /**
   * Gets layer coordinates for a geographic location.
   *
   * @param {Location | number[]} location The geographic location. Arrays use [Latitude, Longitude] order.
   * @param {number} zoom Optional. Zoom level to use. Defaults to current zoom level.
   * @returns {geometry.Point} The layer coordinates.
   */
  locationToLayer(location, zoom) {
    return this.instance?.locationToLayer(location, zoom);
  }
  /**
   * Gets view coordinates for a geographic location.
   *
   * @param {Location | number[]} location The geographic location. Arrays use [Latitude, Longitude] order.
   * @returns {geometry.Point} The view coordinates for the geographic location.
   */
  locationToView(location) {
    return this.instance?.locationToView(location);
  }
  /**
   * Gets the geographic location for view coordinates.
   *
   * @param {geometry.Point | number[]} point The view coordinates. Arrays use x, y order.
   * @param {number} zoom Optional. Zoom level to use. Defaults to current zoom level.
   * @returns {Location} The geographic location for the view coordinates.
   */
  viewToLocation(point, zoom) {
    return this.instance?.viewToLocation(point, zoom);
  }
  /**
   * @hidden
   */
  onResize() {
    if (this.autoResize) {
      this.resize();
    }
  }
  /**
   * @hidden
   */
  get canRender() {
    return isDocumentAvailable() && Boolean(this.element);
  }
  get autoResize() {
    return this.resizeRateLimit > 0;
  }
  init() {
    if (!this.canRender) {
      return;
    }
    const element = this.element.nativeElement;
    this.renderer.setStyle(element, "display", "block");
    const instanceObserver = new MapInstanceObserver(this);
    this.createInstance(element, instanceObserver);
  }
  initConfig() {
    if (!isDocumentAvailable()) {
      return;
    }
    this.ngZone.runOutsideAngular(() => {
      this.optionsChange = combineLatest([this.configurationService.changes, this.iconsService.changes]).pipe(tap(([options, iconSettings]) => {
        this.options = __spreadProps(__spreadValues({}, options), {
          icons: __spreadProps(__spreadValues({}, iconSettings), {
            svgIcons
          })
        });
      })).subscribe(() => {
        if (!this.instance) {
          this.init();
          return;
        }
        this.instance.setOptions(this.options);
      });
    });
  }
  createInstance(element, observer) {
    this.instance = new map_default(element, this.options, this.theme, {
      observer,
      rtl: this.rtl,
      sender: this
    });
  }
  activeEmitter(name) {
    const alias = name === "click" ? "mapClick" : name;
    const emitter = this[alias];
    if (emitter && emitter.emit && hasObservers(emitter)) {
      return emitter;
    }
  }
  trigger(name, e) {
    const emitter = this.activeEmitter(name);
    if (emitter) {
      const args = this.instanceEventService.create(name, e, this);
      if (!this.instance && e.sender) {
        this.instance = e.sender;
      }
      this.run(() => {
        emitter.emit(args);
      });
      return args.isDefaultPrevented && args.isDefaultPrevented();
    }
  }
  run(callback, inZone = true, detectChanges) {
    if (inZone) {
      if (detectChanges) {
        this.changeDetector.markForCheck();
      }
      this.ngZone.run(callback);
    } else {
      callback();
      if (detectChanges) {
        this.detectChanges();
      }
    }
  }
  detectChanges() {
    if (!this.destroyed) {
      this.changeDetector.detectChanges();
    }
  }
  setDirection() {
    this.rtl = this.isRTL;
    if (this.element) {
      this.renderer.setAttribute(this.element.nativeElement, "dir", this.rtl ? "rtl" : "ltr");
    }
  }
  get isRTL() {
    return Boolean(this.localizationService.rtl);
  }
  onInit(e) {
    this.instance = e.sender;
  }
  onShowTooltip(e) {
    this.run(() => {
      this.tooltipInstance.show(e);
    }, true, true);
  }
  onHideTooltip() {
    this.run(() => {
      this.tooltipInstance.hide();
    }, true, true);
  }
  onCenterChange(e) {
    this.centerChange.next(e.center);
  }
  onZoomChange(e) {
    this.zoomChange.next(e.zoom);
  }
  /**
   * @hidden
   */
  tooltipMouseleave(e) {
    const relatedTarget = e.relatedTarget;
    const chartElement = this.element.nativeElement;
    if (this.instance && (!relatedTarget || !hasParent(relatedTarget, chartElement))) {
      this.tooltipInstance.hide();
    }
  }
  /**
   * @hidden
   */
  mapMouseleave(e) {
    const relatedTarget = e.relatedTarget;
    const chartElement = this.element.nativeElement;
    if (this.instance && (!relatedTarget || !(this.tooltipInstance.containsElement(relatedTarget) || hasParent(relatedTarget, chartElement)))) {
      this.tooltipInstance.hide();
    }
  }
  static ɵfac = function MapComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MapComponent)(ɵɵdirectiveInject(ConfigurationService), ɵɵdirectiveInject(InstanceEventService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(IconsService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _MapComponent,
    selectors: [["kendo-map"]],
    viewQuery: function MapComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(TooltipPopupComponent, 7);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tooltipInstance = _t.first);
      }
    },
    inputs: {
      resizeRateLimit: "resizeRateLimit",
      center: "center",
      controls: "controls",
      minZoom: "minZoom",
      maxZoom: "maxZoom",
      minSize: "minSize",
      pannable: "pannable",
      popupSettings: "popupSettings",
      wraparound: "wraparound",
      zoom: "zoom",
      zoomable: "zoomable"
    },
    outputs: {
      beforeReset: "beforeReset",
      mapClick: "mapClick",
      markerActivate: "markerActivate",
      markerClick: "markerClick",
      markerCreated: "markerCreated",
      panEnd: "panEnd",
      pan: "pan",
      reset: "reset",
      shapeClick: "shapeClick",
      shapeCreated: "shapeCreated",
      shapeFeatureCreated: "shapeFeatureCreated",
      shapeMouseEnter: "shapeMouseEnter",
      shapeMouseLeave: "shapeMouseLeave",
      zoomStart: "zoomStart",
      zoomEnd: "zoomEnd",
      centerChange: "centerChange",
      zoomChange: "zoomChange"
    },
    exportAs: ["kendoMap"],
    standalone: true,
    features: [ɵɵProvidersFeature([ConfigurationService, InstanceEventService, LocalizationService, TooltipTemplateService, {
      provide: L10N_PREFIX,
      useValue: "kendo.map"
    }]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    decls: 3,
    vars: 6,
    consts: [[3, "leave", "popupSettings"], [3, "resize", "rateLimit"]],
    template: function MapComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "kendo-map-tooltip-popup", 0);
        ɵɵlistener("leave", function MapComponent_Template_kendo_map_tooltip_popup_leave_0_listener($event) {
          return ctx.tooltipMouseleave($event);
        });
        ɵɵelementEnd();
        ɵɵelementStart(1, "div")(2, "kendo-resize-sensor", 1);
        ɵɵlistener("resize", function MapComponent_Template_kendo_resize_sensor_resize_2_listener() {
          return ctx.onResize();
        });
        ɵɵelementEnd()();
      }
      if (rf & 2) {
        ɵɵproperty("popupSettings", ctx.popupSettings);
        ɵɵadvance();
        ɵɵstyleProp("width", 100, "%")("height", 100, "%");
        ɵɵadvance();
        ɵɵproperty("rateLimit", ctx.resizeRateLimit);
      }
    },
    dependencies: [TooltipPopupComponent, ResizeSensorComponent],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MapComponent, [{
    type: Component,
    args: [{
      selector: "kendo-map",
      changeDetection: ChangeDetectionStrategy.OnPush,
      exportAs: "kendoMap",
      providers: [ConfigurationService, InstanceEventService, LocalizationService, TooltipTemplateService, {
        provide: L10N_PREFIX,
        useValue: "kendo.map"
      }],
      template: `
        <kendo-map-tooltip-popup (leave)="tooltipMouseleave($event)" [popupSettings]="popupSettings">
        </kendo-map-tooltip-popup>
        <div [style.width.%]="100" [style.height.%]="100"><!-- required for resize sensor to initialize properly -->
            <kendo-resize-sensor (resize)="onResize()" [rateLimit]="resizeRateLimit"></kendo-resize-sensor>
        </div>
    `,
      standalone: true,
      imports: [TooltipPopupComponent, ResizeSensorComponent]
    }]
  }], () => [{
    type: ConfigurationService
  }, {
    type: InstanceEventService
  }, {
    type: ElementRef
  }, {
    type: LocalizationService
  }, {
    type: ChangeDetectorRef
  }, {
    type: NgZone
  }, {
    type: Renderer2
  }, {
    type: IconsService
  }], {
    resizeRateLimit: [{
      type: Input
    }],
    center: [{
      type: Input
    }],
    controls: [{
      type: Input
    }],
    minZoom: [{
      type: Input
    }],
    maxZoom: [{
      type: Input
    }],
    minSize: [{
      type: Input
    }],
    pannable: [{
      type: Input
    }],
    popupSettings: [{
      type: Input
    }],
    wraparound: [{
      type: Input
    }],
    zoom: [{
      type: Input
    }],
    zoomable: [{
      type: Input
    }],
    beforeReset: [{
      type: Output
    }],
    mapClick: [{
      type: Output
    }],
    markerActivate: [{
      type: Output
    }],
    markerClick: [{
      type: Output
    }],
    markerCreated: [{
      type: Output
    }],
    panEnd: [{
      type: Output
    }],
    pan: [{
      type: Output
    }],
    reset: [{
      type: Output
    }],
    shapeClick: [{
      type: Output
    }],
    shapeCreated: [{
      type: Output
    }],
    shapeFeatureCreated: [{
      type: Output
    }],
    shapeMouseEnter: [{
      type: Output
    }],
    shapeMouseLeave: [{
      type: Output
    }],
    zoomStart: [{
      type: Output
    }],
    zoomEnd: [{
      type: Output
    }],
    centerChange: [{
      type: Output
    }],
    zoomChange: [{
      type: Output
    }],
    tooltipInstance: [{
      type: ViewChild,
      args: [TooltipPopupComponent, {
        static: true
      }]
    }]
  });
})();
var CollectionComponent = class _CollectionComponent {
  configKey;
  configurationService;
  collectionService;
  children;
  subscription;
  items = [];
  constructor(configKey, configurationService, collectionService) {
    this.configKey = configKey;
    this.configurationService = configurationService;
    this.collectionService = collectionService;
    this.subscription = collectionService.itemChanges.subscribe((changes) => this.processChanges(changes));
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  ngAfterContentInit() {
    this.readItems();
    this.children.changes.subscribe(() => this.readItems());
  }
  processChanges(changes) {
    if (!this.children) {
      return;
    }
    const index = this.children.toArray().indexOf(changes.sender);
    if (index < 0) {
      return;
    }
    this.items[index] = changes.options;
    changes.sender.index = index;
    this.change();
  }
  readItems() {
    this.items = this.children.map((item, index) => {
      item.index = index;
      return item.options;
    });
    this.change();
  }
  change() {
    this.configurationService.notify(new Change(this.configKey, this.items.length === 0 ? void 0 : this.items));
  }
  static ɵfac = function CollectionComponent_Factory(__ngFactoryType__) {
    ɵɵinvalidFactory();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _CollectionComponent,
    contentQueries: function CollectionComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, LayerComponent, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.children = _t);
      }
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CollectionComponent, [{
    type: Directive
  }], () => [{
    type: void 0
  }, {
    type: ConfigurationService
  }, {
    type: CollectionService
  }], {
    children: [{
      type: ContentChildren,
      args: [LayerComponent]
    }]
  });
})();
var LayersComponent = class _LayersComponent extends CollectionComponent {
  configurationService;
  collectionService;
  constructor(configurationService, collectionService) {
    super("layers", configurationService, collectionService);
    this.configurationService = configurationService;
    this.collectionService = collectionService;
  }
  static ɵfac = function LayersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LayersComponent)(ɵɵdirectiveInject(ConfigurationService), ɵɵdirectiveInject(CollectionService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _LayersComponent,
    selectors: [["kendo-map-layers"]],
    standalone: true,
    features: [ɵɵProvidersFeature([CollectionService]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function LayersComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LayersComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [CollectionService],
      selector: "kendo-map-layers",
      template: "",
      standalone: true
    }]
  }], () => [{
    type: ConfigurationService
  }, {
    type: CollectionService
  }], null);
})();
var MarkerLayerComponent = class _MarkerLayerComponent extends LayerComponent {
  configurationService;
  collectionService;
  sanitizer;
  /**
   * Sets the array of data items for this layer.
   */
  data;
  /**
   * Sets the data item field which contains the marker location.
   * The field should be an array with two numbers &mdash; latitude and longitude in decimal degrees.
   */
  locationField;
  /**
   * Sets the data item field which contains the marker title.
   */
  titleField;
  /**
   * Sets the default marker shape for data-bound markers. Supported marker shapes are `pinTarget` and `pin`.
   * Marker shapes are implemented as CSS classes on the marker element (`span.k-marker`). For example `pinTarget` is rendered as `k-marker-pin-target`.
   */
  shape;
  constructor(configurationService, collectionService, sanitizer) {
    super("marker", configurationService, collectionService, sanitizer);
    this.configurationService = configurationService;
    this.collectionService = collectionService;
    this.sanitizer = sanitizer;
  }
  static ɵfac = function MarkerLayerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MarkerLayerComponent)(ɵɵdirectiveInject(ConfigurationService), ɵɵdirectiveInject(CollectionService), ɵɵdirectiveInject(DomSanitizer));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _MarkerLayerComponent,
    selectors: [["kendo-map-marker-layer"]],
    inputs: {
      data: "data",
      locationField: "locationField",
      titleField: "titleField",
      shape: "shape"
    },
    standalone: true,
    features: [ɵɵProvidersFeature([ConfigurationService, {
      provide: LayerComponent,
      useExisting: forwardRef(() => _MarkerLayerComponent)
    }]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function MarkerLayerComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MarkerLayerComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [ConfigurationService, {
        provide: LayerComponent,
        useExisting: forwardRef(() => MarkerLayerComponent)
      }],
      selector: "kendo-map-marker-layer",
      template: "",
      standalone: true
    }]
  }], () => [{
    type: ConfigurationService
  }, {
    type: CollectionService
  }, {
    type: DomSanitizer
  }], {
    data: [{
      type: Input
    }],
    locationField: [{
      type: Input
    }],
    titleField: [{
      type: Input
    }],
    shape: [{
      type: Input
    }]
  });
})();
var ShapeLayerComponent = class _ShapeLayerComponent extends LayerComponent {
  configurationService;
  collectionService;
  sanitizer;
  /**
   * Sets the array of data items for this layer.
   */
  data;
  /**
   * Sets the default style for shapes.
   */
  style;
  constructor(configurationService, collectionService, sanitizer) {
    super("shape", configurationService, collectionService, sanitizer);
    this.configurationService = configurationService;
    this.collectionService = collectionService;
    this.sanitizer = sanitizer;
  }
  static ɵfac = function ShapeLayerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ShapeLayerComponent)(ɵɵdirectiveInject(ConfigurationService), ɵɵdirectiveInject(CollectionService), ɵɵdirectiveInject(DomSanitizer));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _ShapeLayerComponent,
    selectors: [["kendo-map-shape-layer"]],
    inputs: {
      data: "data",
      style: "style"
    },
    standalone: true,
    features: [ɵɵProvidersFeature([ConfigurationService, {
      provide: LayerComponent,
      useExisting: forwardRef(() => _ShapeLayerComponent)
    }]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function ShapeLayerComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShapeLayerComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [ConfigurationService, {
        provide: LayerComponent,
        useExisting: forwardRef(() => ShapeLayerComponent)
      }],
      selector: "kendo-map-shape-layer",
      template: "",
      standalone: true
    }]
  }], () => [{
    type: ConfigurationService
  }, {
    type: CollectionService
  }, {
    type: DomSanitizer
  }], {
    data: [{
      type: Input
    }],
    style: [{
      type: Input
    }]
  });
})();
var TileLayerComponent = class _TileLayerComponent extends LayerComponent {
  configurationService;
  collectionService;
  sanitizer;
  /**
   * Sets the size of the image tile in pixels.
   *
   * @default 256
   */
  tileSize;
  /**
   * Sets a list of subdomains to use for loading tiles.
   * Alternating between different subdomains allows more requests to execute in parallel.
   */
  subdomains;
  /**
   * Sets a function that returns an image URL for each tile position.
   */
  urlTemplate;
  constructor(configurationService, collectionService, sanitizer) {
    super("tile", configurationService, collectionService, sanitizer);
    this.configurationService = configurationService;
    this.collectionService = collectionService;
    this.sanitizer = sanitizer;
  }
  static ɵfac = function TileLayerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TileLayerComponent)(ɵɵdirectiveInject(ConfigurationService), ɵɵdirectiveInject(CollectionService), ɵɵdirectiveInject(DomSanitizer));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _TileLayerComponent,
    selectors: [["kendo-map-tile-layer"]],
    inputs: {
      tileSize: "tileSize",
      subdomains: "subdomains",
      urlTemplate: "urlTemplate"
    },
    standalone: true,
    features: [ɵɵProvidersFeature([ConfigurationService, {
      provide: LayerComponent,
      useExisting: forwardRef(() => _TileLayerComponent)
    }]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function TileLayerComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TileLayerComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [ConfigurationService, {
        provide: LayerComponent,
        useExisting: forwardRef(() => TileLayerComponent)
      }],
      selector: "kendo-map-tile-layer",
      template: "",
      standalone: true
    }]
  }], () => [{
    type: ConfigurationService
  }, {
    type: CollectionService
  }, {
    type: DomSanitizer
  }], {
    tileSize: [{
      type: Input
    }],
    subdomains: [{
      type: Input
    }],
    urlTemplate: [{
      type: Input
    }]
  });
})();
var BubbleTooltipTemplateDirective = class _BubbleTooltipTemplateDirective {
  templateRef;
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static ɵfac = function BubbleTooltipTemplateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BubbleTooltipTemplateDirective)(ɵɵdirectiveInject(TemplateRef, 8));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _BubbleTooltipTemplateDirective,
    selectors: [["", "kendoMapBubbleTooltipTemplate", ""]],
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BubbleTooltipTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoMapBubbleTooltipTemplate]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
var MarkerTooltipTemplateDirective = class _MarkerTooltipTemplateDirective {
  templateRef;
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static ɵfac = function MarkerTooltipTemplateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MarkerTooltipTemplateDirective)(ɵɵdirectiveInject(TemplateRef, 8));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _MarkerTooltipTemplateDirective,
    selectors: [["", "kendoMapMarkerTooltipTemplate", ""]],
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MarkerTooltipTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoMapMarkerTooltipTemplate]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
var ShapeTooltipTemplateDirective = class _ShapeTooltipTemplateDirective {
  templateRef;
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static ɵfac = function ShapeTooltipTemplateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ShapeTooltipTemplateDirective)(ɵɵdirectiveInject(TemplateRef, 8));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _ShapeTooltipTemplateDirective,
    selectors: [["", "kendoMapShapeTooltipTemplate", ""]],
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShapeTooltipTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoMapShapeTooltipTemplate]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
var BubbleTooltipComponent = class _BubbleTooltipComponent extends SettingsComponent {
  configurationService;
  templateService;
  layer;
  bubbleTooltipTemplate;
  constructor(configurationService, templateService, layer) {
    super("tooltip", configurationService);
    this.configurationService = configurationService;
    this.templateService = templateService;
    this.layer = layer;
  }
  ngAfterContentChecked() {
    this.templateService.registerTemplate(this.layer.index, this.bubbleTooltipTemplate?.templateRef);
  }
  static ɵfac = function BubbleTooltipComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BubbleTooltipComponent)(ɵɵdirectiveInject(ConfigurationService), ɵɵdirectiveInject(TooltipTemplateService), ɵɵdirectiveInject(LayerComponent));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _BubbleTooltipComponent,
    selectors: [["kendo-map-bubble-layer-tooltip"]],
    contentQueries: function BubbleTooltipComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, BubbleTooltipTemplateDirective, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.bubbleTooltipTemplate = _t.first);
      }
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function BubbleTooltipComponent_Template(rf, ctx) {
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BubbleTooltipComponent, [{
    type: Component,
    args: [{
      selector: "kendo-map-bubble-layer-tooltip",
      template: "",
      standalone: true
    }]
  }], () => [{
    type: ConfigurationService
  }, {
    type: TooltipTemplateService
  }, {
    type: LayerComponent
  }], {
    bubbleTooltipTemplate: [{
      type: ContentChild,
      args: [BubbleTooltipTemplateDirective, {
        static: false
      }]
    }]
  });
})();
var MarkerTooltipComponent = class _MarkerTooltipComponent extends SettingsComponent {
  configurationService;
  templateService;
  layer;
  markerTooltipTemplate;
  constructor(configurationService, templateService, layer) {
    super("tooltip", configurationService);
    this.configurationService = configurationService;
    this.templateService = templateService;
    this.layer = layer;
  }
  ngAfterContentChecked() {
    this.templateService.registerTemplate(this.layer.index, this.markerTooltipTemplate?.templateRef);
  }
  static ɵfac = function MarkerTooltipComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MarkerTooltipComponent)(ɵɵdirectiveInject(ConfigurationService), ɵɵdirectiveInject(TooltipTemplateService), ɵɵdirectiveInject(LayerComponent));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _MarkerTooltipComponent,
    selectors: [["kendo-map-marker-layer-tooltip"]],
    contentQueries: function MarkerTooltipComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, MarkerTooltipTemplateDirective, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.markerTooltipTemplate = _t.first);
      }
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function MarkerTooltipComponent_Template(rf, ctx) {
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MarkerTooltipComponent, [{
    type: Component,
    args: [{
      selector: "kendo-map-marker-layer-tooltip",
      template: "",
      standalone: true
    }]
  }], () => [{
    type: ConfigurationService
  }, {
    type: TooltipTemplateService
  }, {
    type: LayerComponent
  }], {
    markerTooltipTemplate: [{
      type: ContentChild,
      args: [MarkerTooltipTemplateDirective, {
        static: false
      }]
    }]
  });
})();
var ShapeTooltipComponent = class _ShapeTooltipComponent extends SettingsComponent {
  configurationService;
  templateService;
  layer;
  shapeTooltipTemplate;
  constructor(configurationService, templateService, layer) {
    super("tooltip", configurationService);
    this.configurationService = configurationService;
    this.templateService = templateService;
    this.layer = layer;
  }
  ngAfterContentChecked() {
    this.templateService.registerTemplate(this.layer.index, this.shapeTooltipTemplate?.templateRef);
  }
  static ɵfac = function ShapeTooltipComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ShapeTooltipComponent)(ɵɵdirectiveInject(ConfigurationService), ɵɵdirectiveInject(TooltipTemplateService), ɵɵdirectiveInject(LayerComponent));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _ShapeTooltipComponent,
    selectors: [["kendo-map-shape-layer-tooltip"]],
    contentQueries: function ShapeTooltipComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, ShapeTooltipTemplateDirective, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.shapeTooltipTemplate = _t.first);
      }
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function ShapeTooltipComponent_Template(rf, ctx) {
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShapeTooltipComponent, [{
    type: Component,
    args: [{
      selector: "kendo-map-shape-layer-tooltip",
      template: "",
      standalone: true
    }]
  }], () => [{
    type: ConfigurationService
  }, {
    type: TooltipTemplateService
  }, {
    type: LayerComponent
  }], {
    shapeTooltipTemplate: [{
      type: ContentChild,
      args: [ShapeTooltipTemplateDirective, {
        static: false
      }]
    }]
  });
})();
var KENDO_MAP = [BubbleLayerComponent, BubbleTooltipComponent, BubbleTooltipTemplateDirective, LayersComponent, MapComponent, MarkerLayerComponent, MarkerTooltipComponent, MarkerTooltipTemplateDirective, ShapeLayerComponent, ShapeTooltipComponent, ShapeTooltipTemplateDirective, TileLayerComponent];
var MapModule = class _MapModule {
  static ɵfac = function MapModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MapModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _MapModule,
    imports: [BubbleLayerComponent, BubbleTooltipComponent, BubbleTooltipTemplateDirective, LayersComponent, MapComponent, MarkerLayerComponent, MarkerTooltipComponent, MarkerTooltipTemplateDirective, ShapeLayerComponent, ShapeTooltipComponent, ShapeTooltipTemplateDirective, TileLayerComponent],
    exports: [BubbleLayerComponent, BubbleTooltipComponent, BubbleTooltipTemplateDirective, LayersComponent, MapComponent, MarkerLayerComponent, MarkerTooltipComponent, MarkerTooltipTemplateDirective, ShapeLayerComponent, ShapeTooltipComponent, ShapeTooltipTemplateDirective, TileLayerComponent]
  });
  static ɵinj = ɵɵdefineInjector({
    providers: [IconsService, ResizeBatchService],
    imports: [MapComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MapModule, [{
    type: NgModule,
    args: [{
      imports: [...KENDO_MAP],
      exports: [...KENDO_MAP],
      providers: [IconsService, ResizeBatchService]
    }]
  }], null, null);
})();
export {
  BeforeResetEvent,
  BubbleLayerComponent,
  BubbleTooltipComponent,
  BubbleTooltipTemplateDirective,
  Extent,
  KENDO_MAP,
  LayerTooltipComponent,
  LayersComponent,
  Location,
  MapClickEvent,
  MapComponent,
  MapModule,
  MarkerActivateEvent,
  MarkerClickEvent,
  MarkerCreatedEvent,
  MarkerLayerComponent,
  MarkerTooltipComponent,
  MarkerTooltipTemplateDirective,
  PanEndEvent,
  PanEvent,
  ResetEvent,
  ShapeClickEvent,
  ShapeCreatedEvent,
  ShapeFeatureCreatedEvent,
  ShapeLayerComponent,
  ShapeMouseEnterEvent,
  ShapeMouseLeaveEvent,
  ShapeTooltipComponent,
  ShapeTooltipTemplateDirective,
  TileLayerComponent,
  TooltipPopupComponent,
  ZoomEndEvent,
  ZoomStartEvent,
  bodyFactory
};
//# sourceMappingURL=@progress_kendo-angular-map.js.map
