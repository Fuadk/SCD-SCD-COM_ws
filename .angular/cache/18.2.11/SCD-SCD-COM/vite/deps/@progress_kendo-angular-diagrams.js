import {
  color_default,
  drawing_exports,
  geometry_exports,
  resolveElementColor
} from "./chunk-ZIJEPVJY.js";
import {
  PopupService
} from "./chunk-NKWNDTJB.js";
import {
  WatermarkOverlayComponent,
  getLicenseMessage,
  hasObservers,
  isDocumentAvailable,
  isPresent,
  shouldShowValidationUI
} from "./chunk-5AZCHGRK.js";
import {
  mobileOS
} from "./chunk-7JCLSR37.js";
import {
  A
} from "./chunk-RWPIEFVW.js";
import "./chunk-OBI53R7Q.js";
import {
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
  ViewContainerRef,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
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
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-R7LRY632.js";
import "./chunk-UG3XN6F5.js";
import "./chunk-K3IIKLCY.js";
import "./chunk-WISTXZPE.js";
import {
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-N6ESDQJH.js";

// node_modules/@progress/kendo-diagram-common/dist/es/constants.js
var WIDTH = "width";
var HEIGHT = "height";
var X = "x";
var Y = "y";
var FULL_CIRCLE_ANGLE = 360;
var TRANSPARENT = "transparent";
var START = "start";
var END = "end";
var CENTER = "center";
var NEW_LINE_CHAR = "\n";
var SPACE = " ";
var EMPTY = "";
var PX = "px";
var WRAP = "wrap";
var NO_WRAP = "no-wrap";
var OBJECT = "object";
var MarkerType;
(function(MarkerType2) {
  MarkerType2["None"] = "none";
  MarkerType2["ArrowStart"] = "ArrowStart";
  MarkerType2["FilledCircle"] = "FilledCircle";
  MarkerType2["ArrowEnd"] = "ArrowEnd";
})(MarkerType || (MarkerType = {}));
var DEG_TO_RAD = Math.PI / 180;
var EPSILON = 1e-6;
var CHANGE = "change";
var Cursors = {
  arrow: "default",
  grip: "pointer",
  cross: "pointer",
  add: "pointer",
  move: "move",
  select: "pointer",
  south: "s-resize",
  east: "e-resize",
  west: "w-resize",
  north: "n-resize",
  rowresize: "row-resize",
  colresize: "col-resize",
  grabbing: "grabbing"
};
var HIT_TEST_DISTANCE = 10;
var AUTO = "Auto";
var TOP = "Top";
var RIGHT = "Right";
var LEFT = "Left";
var BOTTOM = "Bottom";
var DEFAULT_SNAP_SIZE = 10;
var DEFAULT_SNAP_ANGLE = 10;
var DRAG_START = "dragStart";
var DRAG = "drag";
var DRAG_END = "dragEnd";
var ITEMROTATE = "itemRotate";
var ITEMBOUNDSCHANGE = "itemBoundsChange";
var MIN_SNAP_SIZE = 5;
var MIN_SNAP_ANGLE = 5;
var MOUSE_ENTER = "mouseEnter";
var MOUSE_LEAVE = "mouseLeave";
var ZOOM_START = "zoomStart";
var ZOOM_END = "zoomEnd";
var TOOLTIP_SHOW = "tooltipShow";
var TOOLTIP_HIDE = "tooltipHide";
var FRICTION = 0.9;
var FRICTION_MOBILE = 0.93;
var VELOCITY_MULTIPLIER = 5;
var PAN = "pan";
var ROTATED = "rotated";
var SOURCE = "source";
var TARGET = "target";
var HANDLE_NAMES = {
  "-1": SOURCE,
  "1": TARGET
};
var ConnectionEditing = "Connection Editing";
var ConnectionDragging = "Connection Dragging";
var INLINE = "inline";
var INLINE_PADDING = {
  left: 4,
  right: 4,
  top: 2,
  bottom: 2
};
var NS = ".kendoDiagram";
var CASCADING = "cascading";
var POLYLINE = "polyline";
var CLICK = "click";
var MAXINT = 9007199254740992;
var SELECT = "select";
var NONE = "none";
var DEFAULT_CANVAS_WIDTH = 600;
var DEFAULT_CANVAS_HEIGHT = 600;
var DEFAULT_SHAPE_TYPE = "rectangle";
var DEFAULT_SHAPE_WIDTH = 100;
var DEFAULT_SHAPE_HEIGHT = 100;
var DEFAULT_SHAPE_MINWIDTH = 20;
var DEFAULT_SHAPE_MINHEIGHT = 20;
var DEFAULT_SHAPE_POSITION = 0;
var DEFAULT_CONNECTION_BACKGROUND = "Yellow";
var MAX_VALUE = Number.MAX_VALUE;
var MIN_VALUE = -Number.MAX_VALUE;
var ABSOLUTE = "absolute";
var TRANSFORMED = "transformed";
var MOUSEWHEEL_NS = "DOMMouseScroll" + NS + " mousewheel" + NS;
var MOBILE_ZOOM_RATE = 0.05;
var MOBILE_PAN_DISTANCE = 5;
var CONNECTION_POINTS_EDITING_SNAP = 6;
var CONNECTION_CONTENT_OFFSET = 5;
var FOCUS_CLASS = "k-focus";
var ARIA_ACTIVEDESCENDANT = "aria-activedescendant";
var TABINDEX = "tabindex";
var KEYDOWN = "keydown";
var MOUSEDOWN = "mousedown";
var TOUCHSTART = "touchstart";
var POINTERDOWN = "pointerdown";
var FOCUS = "focus";
var BLUR = "blur";
var ARROW_RIGHT = "ArrowRight";
var ARROW_LEFT = "ArrowLeft";
var ARROW_UP = "ArrowUp";
var ARROW_DOWN = "ArrowDown";
var KEY_HOME = "Home";
var KEY_END = "End";
var SHAPE = "Shape";
var CONNECTION = "Connection";
var CLASS_NAME = "className";

// node_modules/@progress/kendo-diagram-common/dist/es/utils/functions.js
var isNearZero = (value) => Math.abs(value) < EPSILON;
var isDefined = (obj) => typeof obj !== "undefined";
var defined = isDefined;
var isFunction = (obj) => typeof obj === "function";
var isUndefined = (obj) => typeof obj === "undefined" || obj === null;
var isObject = (obj) => obj === Object(obj);
var has = (obj, key) => Object.hasOwnProperty.call(obj, key);
var isString = (obj) => {
  return Object.prototype.toString.call(obj) === "[object String]";
};
var isNumber = (obj) => !isNaN(parseFloat(obj)) && isFinite(obj);
var isEmpty = (obj) => {
  if (obj === null) {
    return true;
  }
  if (Array.isArray(obj) || isString(obj)) {
    return obj.length === 0;
  }
  for (const key in obj) {
    if (has(obj, key)) {
      return false;
    }
  }
  return true;
};
var simpleExtend = (destination, source) => {
  if (!isObject(source)) {
    return;
  }
  for (const name in source) {
    if (name) {
      destination[name] = source[name];
    }
  }
};
var initArray = (size, value) => {
  const array = [];
  for (let i = 0; i < size; ++i) {
    array[i] = value;
  }
  return array;
};
var randomInteger = (lower, upper) => {
  const random = Math.floor(Math.random() * upper) + lower;
  return parseInt(random.toString(), 10);
};
var findRadian = (start, end) => {
  if (start === end) {
    return 0;
  }
  const sngXComp = end.x - start.x;
  const sngYComp = start.y - end.y;
  const atan = Math.atan(sngXComp / sngYComp);
  if (sngYComp >= 0) {
    return sngXComp < 0 ? atan + 2 * Math.PI : atan;
  }
  return atan + Math.PI;
};
var sign = (num) => {
  return num ? num < 0 ? -1 : 1 : 0;
};
var findAngle = (center, end) => {
  return findRadian(center, end) * 180 / Math.PI;
};
var forEach = (arr, iterator, thisRef) => {
  for (let i = 0; i < arr.length; i++) {
    iterator.call(thisRef, arr[i], i, arr);
  }
};
var getAny = (arr, predicate) => {
  for (let i = 0; i < arr.length; ++i) {
    if (predicate(arr[i])) {
      return arr[i];
    }
  }
  return null;
};
var remove = (arr, what) => {
  let ax = arr.indexOf(what);
  while (ax !== -1) {
    arr.splice(ax, 1);
    ax = arr.indexOf(what);
  }
  return arr;
};
var contains = (arr, obj) => {
  return (arr || []).includes(obj);
};
var indexOf = (arr, what) => {
  return arr.indexOf(what);
};
var inArray = (what, arr) => {
  return arr.indexOf(what);
};
var grep = (arr, predicate) => arr.filter(predicate);
var fold = (list, iterator, acc, context) => {
  let initial = acc !== void 0;
  for (let i = 0; i < list.length; i++) {
    const value = list[i];
    if (!initial) {
      acc = value;
      initial = true;
    } else {
      acc = iterator.call(context, acc, value, i, list);
    }
  }
  if (!initial) {
    throw new Error("Reduce of empty array with no initial value");
  }
  return acc;
};
var find = (arr, iterator, context) => {
  return arr.find(iterator.bind(context)) || void 0;
};
var first = (arr, constraint, context) => {
  if (arr.length === 0) {
    return null;
  }
  if (isUndefined(constraint)) {
    return arr[0];
  }
  return find(arr, constraint, context);
};
var insert = (arr, element, position) => {
  arr.splice(position, 0, element);
  return arr;
};
var all = (arr, iterator, context) => {
  let result = true;
  let value;
  for (let i = 0; i < arr.length; i++) {
    value = arr[i];
    result = result && iterator.call(context, value, i, arr);
    if (!result) {
      break;
    }
  }
  return result;
};
var clear = (arr) => {
  arr.splice(0, arr.length);
};
var bisort = (a, b, sortfunc) => {
  if (isUndefined(a)) {
    throw new Error("First array is not specified.");
  }
  if (isUndefined(b)) {
    throw new Error("Second array is not specified.");
  }
  if (a.length !== b.length) {
    throw new Error("The two arrays should have equal length");
  }
  const points = [];
  for (let i = 0; i < a.length; i++) {
    points.push({
      x: a[i],
      y: b[i]
    });
  }
  if (isUndefined(sortfunc)) {
    points.sort((m, n) => m.x - n.x);
  } else {
    points.sort((m, n) => sortfunc(m.x, n.x));
  }
  clear(a);
  clear(b);
  for (let i = 0; i < points.length; i++) {
    a.push(points[i].x);
    b.push(points[i].y);
  }
};
var addRange = (arr, range) => {
  arr.push(...range);
};
var noop = () => {
};

// node_modules/@progress/kendo-diagram-common/dist/es/utils/Observable.js
var STRING = "string";
var FUNCTION = "function";
var preventDefault = function() {
  this._defaultPrevented = true;
};
var isDefaultPrevented = function() {
  return this._defaultPrevented === true;
};
var Observable = class {
  /**
   * Creates a new Observable instance.
   * Initializes the options, events array, and internal event handlers storage.
   */
  constructor() {
    this.options = {};
    this.events = [];
    this._events = {};
  }
  /**
   * Destroys the observable instance and removes all event handlers.
   * This method should be called when the observable is no longer needed to prevent memory leaks.
   */
  destroy() {
    this.unbind();
  }
  /**
   * Binds event handlers to one or more events.
   * @param event The event name(s) to bind to, or an object mapping event names to handlers
   * @param handlers The event handler(s) to bind. Can be a function or an object mapping event names to handlers
   * @param one If true, the handler will be executed only once and then automatically unbound
   * @returns The Observable instance for method chaining
   */
  bind(event, handlers, one) {
    if (!handlers && isObject(event) && !Array.isArray(event)) {
      for (const name in event) {
        if (event[name]) {
          this.bind(name, event[name]);
        }
      }
      return this;
    }
    const eventNames = typeof event === STRING ? [event] : event, handlersIsFunction = typeof handlers === FUNCTION;
    let original, handler;
    for (let idx = 0, length = eventNames.length; idx < length; idx++) {
      const eventName = eventNames[idx];
      handler = handlersIsFunction ? handlers : handlers[eventName];
      if (handler) {
        if (one) {
          original = handler;
          handler = (...args) => {
            this.unbind(eventName, handler);
            original.apply(this, args);
          };
          handler.original = original;
        }
        this._events[eventName] = this._events[eventName] || [];
        this._events[eventName].push(handler);
      }
    }
    return this;
  }
  /**
   * Binds event handlers that will be executed only once.
   * After execution, the handlers are automatically unbound.
   * @param eventNames The event name(s) to bind to
   * @param handlers The event handler(s) to bind
   * @returns The Observable instance for method chaining
   */
  one(eventNames, handlers) {
    return this.bind(eventNames, handlers, true);
  }
  /**
   * Binds event handlers to be executed first (prepends to the handlers list).
   * These handlers will be called before any previously bound handlers for the same event.
   * @param eventName The event name(s) to bind to
   * @param handlers The event handler(s) to bind
   * @returns The Observable instance for method chaining
   */
  first(eventName, handlers) {
    const eventNames = typeof eventName === STRING ? [String(eventName)] : Array.from(eventName), handlersIsFunction = typeof handlers === FUNCTION;
    let handler;
    for (let idx = 0, length = eventNames.length; idx < length; idx++) {
      const curName = eventNames[idx];
      handler = handlersIsFunction ? handlers : handlers[curName];
      if (handler) {
        this._events[curName] = this._events[curName] || [];
        this._events[curName].unshift(handler);
      }
    }
    return this;
  }
  /**
   * Triggers an event, calling all bound handlers for that event.
   * @param eventName The name of the event to trigger
   * @param eventArgs Optional event arguments to pass to the handlers
   * @returns True if any handler called preventDefault(), false otherwise
   */
  trigger(eventName, eventArgs) {
    let events2 = this._events[eventName];
    if (events2) {
      const e = eventArgs || {};
      e.sender = this;
      e._defaultPrevented = false;
      e.preventDefault = preventDefault;
      e.isDefaultPrevented = isDefaultPrevented;
      events2 = events2.slice();
      for (let idx = 0, length = events2.length; idx < length; idx++) {
        events2[idx].call(this, e);
      }
      return e._defaultPrevented === true;
    }
    return false;
  }
  /**
   * Removes event handlers from events.
   * @param eventName The event name to unbind from. If undefined, all events are unbound
   * @param handler The specific handler to remove. If undefined, all handlers for the event are removed
   * @returns The Observable instance for method chaining
   */
  unbind(eventName, handler) {
    const events2 = this._events[eventName];
    if (eventName === void 0) {
      this._events = {};
    } else if (events2) {
      if (handler) {
        for (let idx = events2.length - 1; idx >= 0; idx--) {
          if (events2[idx] === handler || events2[idx].original === handler) {
            events2.splice(idx, 1);
          }
        }
      } else {
        this._events[eventName] = [];
      }
    }
    return this;
  }
  /** @hidden */
  _setEvents(options) {
    const length = (this.events || []).length;
    for (let idx = 0; idx < length; idx++) {
      const name = this.events[idx];
      if (this.options[name] && options[name]) {
        this.unbind(name, this.options[name]);
        if (this._events && this._events[name]) {
          delete this._events[name];
        }
      }
    }
    this.bind(this.events, options);
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/utils/ticker.js
var Easing = {
  easeInOut(pos) {
    return -Math.cos(pos * Math.PI) / 2 + 0.5;
  }
};
var Ticker = class {
  constructor() {
    this.adapters = [];
    this.target = 0;
    this.tick = 0;
    this.interval = 20;
    this.duration = 800;
    this.lastTime = null;
    this.handlers = [];
    this.timerDelegate = () => {
    };
    this.intervalId = null;
    this.caller = null;
    this.timerDelegate = () => {
      this.onTimerEvent();
    };
  }
  addAdapter(a) {
    this.adapters.push(a);
  }
  onComplete(handler) {
    this.handlers.push(handler);
  }
  removeHandler(handler) {
    this.handlers = this.handlers.filter((h) => {
      return h !== handler;
    });
  }
  trigger() {
    if (this.handlers) {
      forEach(this.handlers, (h) => {
        return h.call(this.caller !== null ? this.caller : this);
      });
    }
  }
  onStep() {
  }
  seekTo(to) {
    this.seekFromTo(this.tick, to);
  }
  seekFromTo(from, to) {
    this.target = Math.max(0, Math.min(1, to));
    this.tick = Math.max(0, Math.min(1, from));
    this.lastTime = (/* @__PURE__ */ new Date()).getTime();
    if (!this.intervalId) {
      this.intervalId = window.setInterval(this.timerDelegate, this.interval);
    }
  }
  stop() {
    if (this.intervalId) {
      window.clearInterval(this.intervalId);
      this.intervalId = null;
      this.trigger();
    }
  }
  play(origin) {
    if (this.adapters.length === 0) {
      return;
    }
    if (origin !== null) {
      this.caller = origin;
    }
    this.initState();
    this.seekFromTo(0, 1);
  }
  reverse() {
    this.seekFromTo(1, 0);
  }
  initState() {
    if (this.adapters.length === 0) {
      return;
    }
    for (let i = 0; i < this.adapters.length; i++) {
      this.adapters[i].initState();
    }
  }
  propagate() {
    const value = Easing.easeInOut(this.tick);
    for (let i = 0; i < this.adapters.length; i++) {
      this.adapters[i].update(value);
    }
  }
  onTimerEvent() {
    const now2 = (/* @__PURE__ */ new Date()).getTime();
    const timePassed = now2 - this.lastTime;
    this.lastTime = now2;
    const movement = timePassed / this.duration * (this.tick < this.target ? 1 : -1);
    if (Math.abs(movement) >= Math.abs(this.tick - this.target)) {
      this.tick = this.target;
    } else {
      this.tick += movement;
    }
    try {
      this.propagate();
    } finally {
      this.onStep.call(this);
      if (this.target === this.tick) {
        this.stop();
      }
    }
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/math/randomId.js
function randomId(length) {
  if (isUndefined(length)) {
    length = 10;
  }
  let result = "";
  const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = length; i > 0; --i) {
    result += chars.charAt(Math.round(Math.random() * (chars.length - 1)));
  }
  return result;
}

// node_modules/@progress/kendo-diagram-common/dist/es/math/HashTable.js
var HashTable = class _HashTable {
  constructor() {
    this._buckets = {};
    this.length = 0;
    this._stringsMap = /* @__PURE__ */ new Map();
    this._stringsCounter = 0;
  }
  /**
   * Adds the literal object with the given key (of the form {key: key,....}).
   */
  add(key, value) {
    const obj = this._createGetBucket(key);
    if (isDefined(value)) {
      obj.value = value;
    }
    return obj;
  }
  /**
   * Gets the literal object with the given key.
   */
  get(key) {
    if (this._bucketExists(key)) {
      return this._createGetBucket(key);
    }
    return null;
  }
  /**
   * Set the key-value pair.
   *
   * @param key The key of the entry.
   * @param value The value to set. If the key already exists the value will be overwritten.
   */
  set(key, value) {
    this.add(key, value);
  }
  /**
   * Determines whether the HashTable contains a specific key.
   */
  containsKey(key) {
    return this._bucketExists(key);
  }
  /**
   * Removes the element with the specified key from the hashtable.
   * Returns the removed bucket.
   */
  remove(key) {
    if (this._bucketExists(key)) {
      const hashId = this._hash(key);
      delete this._buckets[hashId];
      this.length--;
      return key;
    }
  }
  /**
   * Foreach with an iterator working on the key-value pairs.
   *
   * @param func
   */
  forEach(func) {
    const hashes = this._hashes();
    for (let i = 0, len = hashes.length; i < len; i++) {
      const hash = hashes[i];
      const bucket = this._buckets[hash];
      if (isUndefined(bucket)) {
        continue;
      }
      func(bucket);
    }
  }
  /**
   * Returns a (shallow) clone of the current HashTable.
   *
   * @returns {HashTable}
   */
  clone() {
    const ht = new _HashTable();
    const hashes = this._hashes();
    for (let i = 0, len = hashes.length; i < len; i++) {
      const hash = hashes[i];
      const bucket = this._buckets[hash];
      if (isUndefined(bucket)) {
        continue;
      }
      ht.add(bucket.key, bucket.value);
    }
    return ht;
  }
  /**
   * Returns the hashes of the buckets.
   *
   * @returns {Array}
   * @private
   */
  _hashes() {
    const hashes = [];
    for (const hash in this._buckets) {
      if (Object.prototype.hasOwnProperty.call(this._buckets, hash)) {
        hashes.push(hash);
      }
    }
    return hashes;
  }
  _bucketExists(key) {
    const hashId = this._hash(key);
    return isDefined(this._buckets[hashId]);
  }
  /**
   * Returns-adds the createGetBucket with the given key. If not present it will
   * be created and returned.
   * A createGetBucket is a literal object of the form {key: key, ...}.
   */
  _createGetBucket(key) {
    const hashId = this._hash(key);
    let bucket = this._buckets[hashId];
    if (isUndefined(bucket)) {
      bucket = {
        key
      };
      this._buckets[hashId] = bucket;
      this.length++;
    }
    return bucket;
  }
  /**
   * Hashing of the given key.
   */
  _hash(key) {
    if (isString(key) || isNumber(key)) {
      return this._hashString(String(key));
    }
    if (isObject(key)) {
      return this._objectHashId(key);
    }
    throw new Error("Unsupported key type.");
  }
  /**
   * Hashing of a string.
   */
  _hashString(s) {
    let result = 0;
    if (s.length === 0) {
      return result;
    }
    if (this._stringsMap.has(s)) {
      return this._stringsMap.get(s);
    }
    this._stringsCounter++;
    this._stringsMap.set(s, this._stringsCounter);
    result = this._stringsCounter;
    return result;
  }
  /**
   * Returns the unique identifier for an object. This is automatically assigned and add on the object.
   */
  _objectHashId(key) {
    let id = key._hashId;
    if (isUndefined(id)) {
      id = randomId();
      key._hashId = id;
    }
    return id;
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/math/Dictionary.js
var Dictionary = class extends Observable {
  /**
   * Initializes a new instance of the Dictionary class.
   *
   * @param dictionary Loads the content of the given dictionary into this new one.
   */
  constructor(dictionary) {
    super();
    this._hashTable = new HashTable();
    this.length = 0;
    if (isDefined(dictionary)) {
      if (Array.isArray(dictionary)) {
        for (let i = 0; i < dictionary.length; i++) {
          this.add(dictionary[i]);
        }
      } else {
        dictionary.forEach(function(k, v) {
          this.add(k, v);
        }, this);
      }
    }
  }
  /**
   * Adds a key-value to the dictionary.
   * If the key already exists this will assign the given value to the existing entry.
   */
  add(key, value) {
    let entry = this._hashTable.get(key);
    if (!entry) {
      entry = this._hashTable.add(key);
      this.length++;
      this.trigger("changed");
    }
    entry.value = value;
  }
  /**
   * Set the key-value pair.
   *
   * @param key The key of the entry.
   * @param value The value to set. If the key already exists the value will be overwritten.
   */
  set(key, value) {
    this.add(key, value);
  }
  /**
   * Gets the value associated with the given key in the dictionary.
   */
  get(key) {
    const entry = this._hashTable.get(key);
    if (entry) {
      return entry.value;
    }
    throw new Error("Cannot find key " + key);
  }
  /**
   * Returns whether the dictionary contains the given key.
   */
  containsKey(key) {
    return this._hashTable.containsKey(key);
  }
  /**
   * Removes the element with the specified key from the dictionary.
   */
  remove(key) {
    if (this.containsKey(key)) {
      this.trigger("changed");
      this.length--;
      return this._hashTable.remove(key);
    }
  }
  /**
   * The functional gets the key and value as parameters.
   */
  forEach(func, thisRef) {
    this._hashTable.forEach(function(entry) {
      func.call(thisRef, entry.key, entry.value);
    });
  }
  /**
   * Same as forEach except that only the value is passed to the functional.
   */
  forEachValue(func, thisRef) {
    this._hashTable.forEach(function(entry) {
      func.call(thisRef, entry.value);
    });
  }
  /**
   * Calls a defined callback function for each key in the dictionary.
   */
  forEachKey(func, thisRef) {
    this._hashTable.forEach(function(entry) {
      func.call(thisRef, entry.key);
    });
  }
  /**
   * Gets an array with all keys in the dictionary.
   */
  keys() {
    const keys = [];
    this.forEachKey(function(key) {
      keys.push(key);
    });
    return keys;
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/math/Geometry.js
var Geometry = {
  /**
   * Returns the squared distance to the line defined by the two given Points.
   *
   * @param p An arbitrary Point.
   * @param a An endpoint of the line or segment.
   * @param b The complementary endpoint of the line or segment.
   */
  _distanceToLineSquared: function(p, a, b) {
    function d2(pt1, pt2) {
      return (pt1.x - pt2.x) * (pt1.x - pt2.x) + (pt1.y - pt2.y) * (pt1.y - pt2.y);
    }
    if (a === b) {
      return d2(p, a);
    }
    const vx = b.x - a.x, vy = b.y - a.y;
    let dot = (p.x - a.x) * vx + (p.y - a.y) * vy;
    if (dot < 0) {
      return d2(a, p);
    }
    dot = (b.x - p.x) * vx + (b.y - p.y) * vy;
    if (dot < 0) {
      return d2(b, p);
    }
    dot = (b.x - p.x) * vy - (b.y - p.y) * vx;
    return dot * dot / (vx * vx + vy * vy);
  },
  /**
   * Returns the distance to the line defined by the two given Points.
   *
   * @param p An arbitrary Point.
   * @param a An endpoint of the line or segment.
   * @param b The complementary endpoint of the line or segment.
   */
  distanceToLine: function(p, a, b) {
    return Math.sqrt(this._distanceToLineSquared(p, a, b));
  },
  /**
   * Returns the distance of the given points to the polyline defined by the points.
   *
   * @param p An arbitrary point.
   * @param points The points defining the polyline.
   * @returns {Number}
   */
  distanceToPolyline: function(p, points) {
    let minimum = Number.MAX_VALUE;
    if (isUndefined(points) || points.length === 0) {
      return Number.MAX_VALUE;
    }
    for (let s = 0; s < points.length - 1; s++) {
      const p1 = points[s];
      const p2 = points[s + 1];
      const d = this._distanceToLineSquared(p, p1, p2);
      if (d < minimum) {
        minimum = d;
      }
    }
    return Math.sqrt(minimum);
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/math/Polar.js
var Polar = class {
  constructor(r, a) {
    this.r = r;
    this.angle = a;
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/math/Shapes.js
var HITTESTAREA = 3;
var Point = class _Point extends geometry_exports.Point {
  /**
   * Creates a new Point instance.
   * @param x The x-coordinate of the point (defaults to 0)
   * @param y The y-coordinate of the point (defaults to 0)
   */
  constructor(x, y) {
    super(x, y);
  }
  /**
   * Creates a copy of this point.
   * @returns A new Point instance with the same coordinates
   */
  clone() {
    return new _Point(this.x, this.y);
  }
  /**
   * Adds another point to this point.
   * @param p The point to add
   * @returns A new Point representing the sum of the two points
   */
  plus(p) {
    return new _Point(this.x + p.x, this.y + p.y);
  }
  /**
   * Subtracts another point from this point.
   * @param p The point to subtract
   * @returns A new Point representing the difference
   */
  minus(p) {
    return new _Point(this.x - p.x, this.y - p.y);
  }
  /**
   * Creates a new point offset by the specified value in both x and y directions.
   * @param value The offset value to subtract from both coordinates
   * @returns A new Point offset by the specified amount
   */
  offset(value) {
    return new _Point(this.x - value, this.y - value);
  }
  /**
   * Multiplies this point by a scalar value.
   * @param s The scalar multiplier
   * @returns A new Point with coordinates multiplied by the scalar
   */
  times(s) {
    return new _Point(this.x * s, this.y * s);
  }
  /**
   * Returns a normalized version of this point (unit vector).
   * @returns A new Point with length 1 in the same direction, or origin if length is 0
   */
  normalize() {
    if (this.length() === 0) {
      return new _Point();
    }
    return this.times(1 / this.length());
  }
  /**
   * Calculates the length (magnitude) of this point vector.
   * @returns The distance from origin to this point
   */
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  /**
   * Returns a string representation of this point.
   * @returns A string in the format "(x,y)"
   */
  toString() {
    return "(" + this.x + "," + this.y + ")";
  }
  /**
   * Calculates the squared length of this point vector.
   * More efficient than length() when only comparing distances.
   * @returns The squared distance from origin to this point
   */
  lengthSquared() {
    return this.x * this.x + this.y * this.y;
  }
  /**
   * Calculates the midpoint between two points.
   * @param p The first point
   * @param q The second point
   * @returns A new Point representing the midpoint between p and q
   */
  middleOf(p, q) {
    return new _Point(q.x - p.x, q.y - p.y).times(0.5).plus(p);
  }
  /**
   * Converts this point to polar coordinates.
   * @param useDegrees Whether to return angle in degrees (true) or radians (false)
   * @returns A Polar object with radius and angle
   */
  toPolar(useDegrees) {
    let factor = 1;
    if (useDegrees) {
      factor = 180 / Math.PI;
    }
    const a = Math.atan2(Math.abs(this.y), Math.abs(this.x));
    const halfpi = Math.PI / 2;
    const len = this.length();
    if (this.x === 0) {
      if (this.y === 0) {
        return new Polar(0, 0);
      }
      if (this.y > 0) {
        return new Polar(len, factor * halfpi);
      }
      if (this.y < 0) {
        return new Polar(len, factor * 3 * halfpi);
      }
    } else if (this.x > 0) {
      if (this.y === 0) {
        return new Polar(len, 0);
      }
      if (this.y > 0) {
        return new Polar(len, factor * a);
      }
      if (this.y < 0) {
        return new Polar(len, factor * (4 * halfpi - a));
      }
    } else {
      if (this.y === 0) {
        return new Polar(len, 2 * halfpi);
      }
      if (this.y > 0) {
        return new Polar(len, factor * (2 * halfpi - a));
      }
      if (this.y < 0) {
        return new Polar(len, factor * (2 * halfpi + a));
      }
    }
  }
  /**
   * Determines if this point lies on the line segment between two other points.
   * @param from The starting point of the line segment
   * @param to The ending point of the line segment
   * @returns True if this point is on the line segment, false otherwise
   */
  isOnLine(from, to) {
    if (from.x > to.x) {
      const temp = to;
      to = from;
      from = temp;
    }
    const r1 = new Rect(from.x, from.y).inflate(HITTESTAREA, HITTESTAREA), r2 = new Rect(to.x, to.y).inflate(HITTESTAREA, HITTESTAREA);
    let o1, u1;
    if (r1.union(r2).contains(this)) {
      if (from.x === to.x || from.y === to.y) {
        return true;
      } else if (from.y < to.y) {
        o1 = r1.x + (r2.x - r1.x) * (this.y - (r1.y + r1.height)) / (r2.y + r2.height - (r1.y + r1.height));
        u1 = r1.x + r1.width + (r2.x + r2.width - (r1.x + r1.width)) * (this.y - r1.y) / (r2.y - r1.y);
      } else {
        o1 = r1.x + (r2.x - r1.x) * (this.y - r1.y) / (r2.y - r1.y);
        u1 = r1.x + r1.width + (r2.x + r2.width - (r1.x + r1.width)) * (this.y - (r1.y + r1.height)) / (r2.y + r2.height - (r1.y + r1.height));
      }
      return this.x > o1 && this.x < u1;
    }
    return false;
  }
  /**
   * Parses a point from a string representation.
   * @param str The string to parse, expected format: "(x,y)"
   * @returns A new Point if parsing succeeds, undefined otherwise
   */
  parse(str) {
    const tempStr = str.slice(1, str.length - 1), xy = tempStr.split(","), x = parseInt(xy[0], 10), y = parseInt(xy[1], 10);
    if (!isNaN(x) && !isNaN(y)) {
      return new _Point(x, y);
    }
  }
};
var Rect = class _Rect {
  /**
   * Creates a new Rect instance.
   * @param x The x-coordinate of the top-left corner (defaults to 0)
   * @param y The y-coordinate of the top-left corner (defaults to 0)
   * @param width The width of the rectangle (defaults to 0)
   * @param height The height of the rectangle (defaults to 0)
   */
  constructor(x, y, width, height) {
    this.x = x || 0;
    this.y = y || 0;
    this.width = width || 0;
    this.height = height || 0;
  }
  /**
   * Determines if a point is contained within this rectangle.
   * @param point The point to test
   * @returns True if the point is inside the rectangle, false otherwise
   */
  contains(point) {
    return point.x >= this.x && point.x <= this.x + this.width && point.y >= this.y && point.y <= this.y + this.height;
  }
  /**
   * Inflates the rectangle by the specified amounts.
   * @param dx The amount to inflate horizontally
   * @param dy The amount to inflate vertically (defaults to dx if not provided)
   * @returns This rectangle instance for chaining
   */
  inflate(dx, dy) {
    if (dy === void 0) {
      dy = dx;
    }
    this.x -= dx;
    this.y -= dy;
    this.width += 2 * dx + 1;
    this.height += 2 * dy + 1;
    return this;
  }
  /**
   * Moves the rectangle by the specified offset.
   * @param dx The horizontal offset (or a Point object)
   * @param dy The vertical offset (ignored if dx is a Point)
   * @returns This rectangle instance for chaining
   */
  offset(dx, dy) {
    let x = dx, y = dy;
    if (dx instanceof Point) {
      x = dx.x;
      y = dx.y;
    }
    this.x += x;
    this.y += y;
    return this;
  }
  /**
   * Creates a new rectangle that is the union of this rectangle and another.
   * @param r The rectangle to union with
   * @returns A new Rect representing the union of both rectangles
   */
  union(r) {
    const x1 = Math.min(this.x, r.x);
    const y1 = Math.min(this.y, r.y);
    const x2 = Math.max(this.x + this.width, r.x + r.width);
    const y2 = Math.max(this.y + this.height, r.y + r.height);
    return new _Rect(x1, y1, x2 - x1, y2 - y1);
  }
  /**
   * Gets the center point of the rectangle.
   * @returns A Point representing the center of the rectangle
   */
  center() {
    return new Point(this.x + this.width / 2, this.y + this.height / 2);
  }
  /**
   * Gets the top center point of the rectangle.
   * @returns A Point at the top center edge
   */
  top() {
    return new Point(this.x + this.width / 2, this.y);
  }
  /**
   * Gets the right center point of the rectangle.
   * @returns A Point at the right center edge
   */
  right() {
    return new Point(this.x + this.width, this.y + this.height / 2);
  }
  /**
   * Gets the bottom center point of the rectangle.
   * @returns A Point at the bottom center edge
   */
  bottom() {
    return new Point(this.x + this.width / 2, this.y + this.height);
  }
  /**
   * Gets the left center point of the rectangle.
   * @returns A Point at the left center edge
   */
  left() {
    return new Point(this.x, this.y + this.height / 2);
  }
  /**
   * Gets the top-left corner point of the rectangle.
   * @returns A Point at the top-left corner
   */
  topLeft() {
    return new Point(this.x, this.y);
  }
  /**
   * Gets the top-right corner point of the rectangle.
   * @returns A Point at the top-right corner
   */
  topRight() {
    return new Point(this.x + this.width, this.y);
  }
  /**
   * Gets the bottom-left corner point of the rectangle.
   * @returns A Point at the bottom-left corner
   */
  bottomLeft() {
    return new Point(this.x, this.y + this.height);
  }
  /**
   * Gets the bottom-right corner point of the rectangle.
   * @returns A Point at the bottom-right corner
   */
  bottomRight() {
    return new Point(this.x + this.width, this.y + this.height);
  }
  /**
   * Creates a copy of this rectangle.
   * @returns A new Rect with the same position and dimensions
   */
  clone() {
    return new _Rect(this.x, this.y, this.width, this.height);
  }
  /**
   * Determines if this rectangle is empty (zero width and height).
   * @returns True if the rectangle has no area, false otherwise
   */
  isEmpty() {
    return !this.width && !this.height;
  }
  /**
   * Determines if this rectangle is equal to another rectangle.
   * @param rect The rectangle to compare with
   * @returns True if both rectangles have the same position and dimensions
   */
  equals(rect) {
    return this.x === rect.x && this.y === rect.y && this.width === rect.width && this.height === rect.height;
  }
  /**
   * Calculates the bounding rectangle after rotating this rectangle by a given angle.
   * @param angle The rotation angle in radians
   * @returns A new Rect representing the axis-aligned bounding box of the rotated rectangle
   */
  rotatedBounds(angle) {
    const rect = this.clone(), points = this.rotatedPoints(angle), tl = points[0], tr = points[1], br = points[2], bl = points[3];
    rect.x = Math.min(br.x, tl.x, tr.x, bl.x);
    rect.y = Math.min(br.y, tl.y, tr.y, bl.y);
    rect.width = Math.max(br.x, tl.x, tr.x, bl.x) - rect.x;
    rect.height = Math.max(br.y, tl.y, tr.y, bl.y) - rect.y;
    return rect;
  }
  /**
   * Gets the four corner points of this rectangle after rotation.
   * @param angle The rotation angle in radians
   * @returns An array of four Points representing the rotated corners [topLeft, topRight, bottomRight, bottomLeft]
   */
  rotatedPoints(angle) {
    const c = this.center(), br = this.bottomRight().rotate(angle, c), tl = this.topLeft().rotate(angle, c), tr = this.topRight().rotate(angle, c), bl = this.bottomLeft().rotate(angle, c);
    return [tl, tr, br, bl];
  }
  /**
   * Returns a string representation of this rectangle.
   * @param delimiter The delimiter to use between values (defaults to space)
   * @returns A string in the format "x y width height" (or with custom delimiter)
   */
  toString(delimiter) {
    delimiter = delimiter || " ";
    return this.x + delimiter + this.y + delimiter + this.width + delimiter + this.height;
  }
  /**
   * Scales this rectangle while maintaining a static reference point.
   * @param scaleX The horizontal scale factor
   * @param scaleY The vertical scale factor
   * @param staicPoint The static point that should remain fixed during scaling
   * @param adornerCenter The center point of the adorner
   * @param angle The rotation angle to apply during scaling
   */
  scale(scaleX, scaleY, staicPoint, adornerCenter, angle) {
    let tl = this.topLeft();
    const thisCenter = this.center();
    tl.rotate(angle, thisCenter).rotate(angle, adornerCenter);
    const delta = staicPoint.minus(tl);
    const scaled = new Point(delta.x * scaleX, delta.y * scaleY);
    const position = delta.minus(scaled);
    tl = tl.plus(position);
    tl.rotate(angle, adornerCenter).rotate(angle, thisCenter);
    this.x = tl.x;
    this.y = tl.y;
    this.width *= scaleX;
    this.height *= scaleY;
  }
  /**
   * Scales this rectangle by a zoom factor.
   * @param zoom The zoom factor to apply
   * @returns This rectangle instance for chaining
   */
  zoom(zoom) {
    this.x *= zoom;
    this.y *= zoom;
    this.width *= zoom;
    this.height *= zoom;
    return this;
  }
  /**
   * Determines if this rectangle overlaps with another rectangle.
   * @param rect The rectangle to check for overlap
   * @returns True if the rectangles overlap, false otherwise
   */
  overlaps(rect) {
    const bottomRight2 = this.bottomRight();
    const rectBottomRight = rect.bottomRight();
    const overlaps = !(bottomRight2.x < rect.x || bottomRight2.y < rect.y || rectBottomRight.x < this.x || rectBottomRight.y < this.y);
    return overlaps;
  }
  /**
   * Converts an object to a Rect instance.
   * @param rect The object to convert (if not already a Rect)
   * @returns A Rect instance
   */
  static toRect(rect) {
    if (!(rect instanceof _Rect)) {
      rect = new _Rect(rect.x, rect.y, rect.width, rect.height);
    }
    return rect;
  }
  /**
   * Creates an empty rectangle (zero position and dimensions).
   * @returns A new empty Rect instance
   */
  static empty() {
    return new _Rect(0, 0, 0, 0);
  }
  /**
   * Creates a rectangle from two points.
   * @param p The first point
   * @param q The second point
   * @returns A new Rect with the two points as opposite corners
   * @throws Error if any coordinate values are NaN
   */
  static fromPoints(p, q) {
    if (isNaN(p.x) || isNaN(p.y) || isNaN(q.x) || isNaN(q.y)) {
      throw new Error("Some values are NaN.");
    }
    return new _Rect(Math.min(p.x, q.x), Math.min(p.y, q.y), Math.abs(p.x - q.x), Math.abs(p.y - q.y));
  }
};
var RectAlign = class {
  constructor(container) {
    this.container = Rect.toRect(container);
  }
  align(content, alignment) {
    const alignValues = alignment.toLowerCase().split(" ");
    for (let i = 0; i < alignValues.length; i++) {
      content = this._singleAlign(content, alignValues[i]);
    }
    return content;
  }
  _singleAlign(content, alignment) {
    if (isFunction(this[alignment])) {
      return this[alignment](content);
    } else {
      return content;
    }
  }
  left(content) {
    return this._align(content, this._left);
  }
  center(content) {
    return this._align(content, this._center);
  }
  right(content) {
    return this._align(content, this._right);
  }
  stretch(content) {
    return this._align(content, this._stretch);
  }
  top(content) {
    return this._align(content, this._top);
  }
  middle(content) {
    return this._align(content, this._middle);
  }
  bottom(content) {
    return this._align(content, this._bottom);
  }
  _left(container, content) {
    content.x = container.x;
  }
  _center(container, content) {
    content.x = (container.width - content.width) / 2 || 0;
  }
  _right(container, content) {
    content.x = container.width - content.width;
  }
  _top(container, content) {
    content.y = container.y;
  }
  _middle(container, content) {
    content.y = (container.height - content.height) / 2 || 0;
  }
  _bottom(container, content) {
    content.y = container.height - content.height;
  }
  _stretch(container, content) {
    content.x = 0;
    content.y = 0;
    content.height = container.height;
    content.width = container.width;
  }
  _align(content, alignCalc) {
    content = Rect.toRect(content);
    alignCalc(this.container, content);
    return content;
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/math/Queue.js
var Queue = class {
  constructor() {
    this._tail = null;
    this._head = null;
    this.length = 0;
  }
  /**
   * Enqueues an object to the end of the queue.
   */
  enqueue(value) {
    const entry = {
      value,
      next: null
    };
    if (!this._head) {
      this._head = entry;
      this._tail = this._head;
    } else {
      this._tail.next = entry;
      this._tail = this._tail.next;
    }
    this.length++;
  }
  /**
   * Removes and returns the object at top of the queue.
   */
  dequeue() {
    if (this.length < 1) {
      throw new Error("The queue is empty.");
    }
    const value = this._head.value;
    this._head = this._head.next;
    this.length--;
    return value;
  }
  contains(item) {
    let current2 = this._head;
    while (current2) {
      if (current2.value === item) {
        return true;
      }
      current2 = current2.next;
    }
    return false;
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/utils/deep-extend.js
var UNDEFINED = "undefined";
var isFunction2 = (obj) => typeof obj === "function";
function deepExtendOne(destination, source) {
  for (const property in source) {
    if (property === "__proto__" || property === "constructor") {
      continue;
    }
    const propValue = source[property];
    const propType = typeof propValue;
    let propInit;
    if (propType === OBJECT && propValue !== null) {
      propInit = propValue.constructor;
    } else {
      propInit = null;
    }
    if (propInit && propInit !== Array) {
      if (propValue instanceof Date) {
        destination[property] = new Date(propValue.getTime());
      } else if (isFunction2(propValue.clone)) {
        destination[property] = propValue.clone();
      } else {
        const destProp = destination[property];
        if (typeof destProp === OBJECT) {
          destination[property] = destProp || {};
        } else {
          destination[property] = {};
        }
        deepExtendOne(destination[property], propValue);
      }
    } else if (propType !== UNDEFINED) {
      destination[property] = propValue;
    }
  }
  return destination;
}
function deepExtend(destination, ...sources) {
  const length = sources.length;
  for (let i = 0; i < length; i++) {
    deepExtendOne(destination, sources[i]);
  }
  return destination;
}

// node_modules/@progress/kendo-diagram-common/dist/es/layout/LayoutBase.js
var LayoutDefaultOptions = {
  type: "Tree",
  subtype: "Down",
  roots: null,
  animate: false,
  // -------------------------------------------------------------------
  /**
   * Force-directed option: whether the motion of the nodes should be limited by the boundaries of the diagram surface.
   */
  limitToView: false,
  /**
   * Force-directed option: the amount of friction applied to the motion of the nodes.
   */
  friction: 0.9,
  /**
   * Force-directed option: the optimal distance between nodes (minimum energy).
   */
  nodeDistance: 50,
  /**
   * Force-directed option: the number of time things are being calculated.
   */
  iterations: 300,
  // -------------------------------------------------------------------
  /**
   * Tree option: the separation in one direction (depends on the subtype what direction this is).
   */
  horizontalSeparation: 90,
  /**
   * Tree option: the separation in the complementary direction (depends on the subtype what direction this is).
   */
  verticalSeparation: 50,
  // -------------------------------------------------------------------
  /**
   * Tip-over tree option: children-to-parent vertical distance.
   */
  underneathVerticalTopOffset: 15,
  /**
   * Tip-over tree option: children-to-parent horizontal distance.
   */
  underneathHorizontalOffset: 15,
  /**
   * Tip-over tree option: leaf-to-next-branch vertical distance.
   */
  underneathVerticalSeparation: 15,
  // -------------------------------------------------------------------
  /**
   * Settings object to organize the different components of the diagram in a grid layout structure
   */
  grid: {
    /**
     * The width of the grid in which components are arranged. Beyond this width a component will be on the next row.
     */
    width: 1500,
    /**
     * The left offset of the grid.
     */
    offsetX: 50,
    /**
     * The top offset of the grid.
     */
    offsetY: 50,
    /**
     * The horizontal padding within a cell of the grid where a single component resides.
     */
    componentSpacingX: 20,
    /**
     * The vertical padding within a cell of the grid where a single component resides.
     */
    componentSpacingY: 20
  },
  // -------------------------------------------------------------------
  /**
   * Layered option: the separation height/width between the layers.
   */
  layerSeparation: 50,
  /**
   * Layered option: how many rounds of shifting and fine-tuning.
   */
  layeredIterations: 2,
  /**
   * Tree-radial option: the angle at which the layout starts.
   */
  startRadialAngle: 0,
  /**
   * Tree-radial option: the angle at which the layout starts.
   */
  endRadialAngle: 360,
  /**
   * Tree-radial option: the separation between levels.
   */
  radialSeparation: 150,
  /**
   * Tree-radial option: the separation between the root and the first level.
   */
  radialFirstLevelSeparation: 200,
  /**
   * Tree-radial option: whether a virtual roots bing the components in one radial layout.
   */
  keepComponentsInOneRadialLayout: false,
  // -------------------------------------------------------------------
  // TODO: ensure to change this to false when containers are around
  ignoreContainers: true,
  layoutContainerChildren: false,
  ignoreInvisible: true,
  animateTransitions: false
};
var LayoutBase = class {
  constructor() {
    this.defaultOptions = __spreadProps(__spreadValues({}, LayoutDefaultOptions), {
      grid: __spreadValues({}, LayoutDefaultOptions.grid)
    });
  }
  /**
   * Organizes the components in a grid.
   * Returns the final set of nodes (not the Graph).
   *
   * @param components
   */
  gridLayoutComponents(components) {
    if (!components) {
      throw new Error("No components supplied.");
    }
    forEach(components, function(c) {
      c.calcBounds();
    });
    components.sort(function(a, b) {
      return b.bounds.width - a.bounds.width;
    });
    const maxWidth = this.options.grid.width, offsetX = this.options.grid.componentSpacingX, offsetY = this.options.grid.componentSpacingY, startX = this.options.grid.offsetX, startY = this.options.grid.offsetY, resultLinkSet = [], resultNodeSet = [];
    let height = 0, x = startX, y = startY;
    while (components.length > 0) {
      if (x >= maxWidth) {
        x = startX;
        y += height + offsetY;
        height = 0;
      }
      const component = components.pop();
      this.moveToOffset(component, new Point(x, y));
      for (let i = 0; i < component.nodes.length; i++) {
        resultNodeSet.push(component.nodes[i]);
      }
      for (let i = 0; i < component.links.length; i++) {
        resultLinkSet.push(component.links[i]);
      }
      const boundingRect = component.bounds;
      let currentHeight = boundingRect.height;
      if (currentHeight <= 0 || isNaN(currentHeight)) {
        currentHeight = 0;
      }
      let currentWidth = boundingRect.width;
      if (currentWidth <= 0 || isNaN(currentWidth)) {
        currentWidth = 0;
      }
      if (currentHeight >= height) {
        height = currentHeight;
      }
      x += currentWidth + offsetX;
    }
    return {
      nodes: resultNodeSet,
      links: resultLinkSet
    };
  }
  moveToOffset(component, p) {
    let i, j;
    const bounds = component.bounds, deltaX = p.x - bounds.x, deltaY = p.y - bounds.y;
    for (i = 0; i < component.nodes.length; i++) {
      const node = component.nodes[i];
      let nodeBounds = node.bounds();
      if (nodeBounds.width === 0 && nodeBounds.height === 0 && nodeBounds.x === 0 && nodeBounds.y === 0) {
        nodeBounds = new Rect(0, 0, 0, 0);
      }
      nodeBounds.x += deltaX;
      nodeBounds.y += deltaY;
      node.bounds(nodeBounds);
    }
    for (i = 0; i < component.links.length; i++) {
      const link = component.links[i];
      if (link.points) {
        const newPoints = [];
        const points = link.points;
        for (j = 0; j < points.length; j++) {
          const pt = points[j];
          pt.x += deltaX;
          pt.y += deltaY;
          newPoints.push(pt);
        }
        link.points = newPoints;
      }
    }
    this.currentHorizontalOffset += bounds.width + this.options.grid.offsetX;
    return new Point(deltaX, deltaY);
  }
  transferOptions(options) {
    this.options = deepExtend({}, this.defaultOptions);
    if (isUndefined(options)) {
      return;
    }
    this.options = deepExtend(this.options, options || {});
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/layout/LayoutState.js
var LayoutState = class {
  constructor(diagram, graphOrNodes) {
    if (isUndefined(diagram)) {
      throw new Error("No diagram given");
    }
    this.diagram = diagram;
    this.nodeMap = new Dictionary();
    this.linkMap = new Dictionary();
    this.capture(graphOrNodes ? graphOrNodes : diagram);
  }
  /**
   * Will capture either
   * - the state of the shapes and the intermediate points of the connections in the diagram
   * - the bounds of the nodes contained in the Graph together with the intermediate points of the links in the Graph
   * - the bounds of the nodes in the Array<Node>
   * - the links points and node bounds in the literal object
   *
   * @param diagramOrGraphOrNodes
   */
  capture(diagramOrGraphOrNodes) {
    let node, nodes, shape, i, conn, link, links;
    if (diagramOrGraphOrNodes && diagramOrGraphOrNodes.type === "Graph") {
      for (i = 0; i < diagramOrGraphOrNodes.nodes.length; i++) {
        node = diagramOrGraphOrNodes.nodes[i];
        shape = node.associatedShape;
        this.nodeMap.set(shape.visual.id, new Rect(node.x, node.y, node.width, node.height));
      }
      for (i = 0; i < diagramOrGraphOrNodes.links.length; i++) {
        link = diagramOrGraphOrNodes.links[i];
        conn = link.associatedConnection;
        this.linkMap.set(conn.visual.id, link.points());
      }
    } else if (diagramOrGraphOrNodes instanceof Array) {
      nodes = diagramOrGraphOrNodes;
      for (i = 0; i < nodes.length; i++) {
        node = nodes[i];
        shape = node.associatedShape;
        if (shape) {
          this.nodeMap.set(shape.visual.id, new Rect(node.x, node.y, node.width, node.height));
        }
      }
    } else if (Object.prototype.hasOwnProperty.call(diagramOrGraphOrNodes, "links") && Object.prototype.hasOwnProperty.call(diagramOrGraphOrNodes, "nodes")) {
      nodes = diagramOrGraphOrNodes.nodes;
      links = diagramOrGraphOrNodes.links;
      for (i = 0; i < nodes.length; i++) {
        node = nodes[i];
        shape = node.associatedShape;
        if (shape) {
          this.nodeMap.set(shape.visual.id, new Rect(node.x, node.y, node.width, node.height));
        }
      }
      for (i = 0; i < links.length; i++) {
        link = links[i];
        conn = link.associatedConnection;
        if (conn) {
          this.linkMap.set(conn.visual.id, link.points);
        }
      }
    } else {
      const shapes2 = this.diagram.shapes;
      const connections = this.diagram.connections;
      for (i = 0; i < shapes2.length; i++) {
        shape = shapes2[i];
        this.nodeMap.set(shape.visual.id, shape.bounds());
      }
      for (i = 0; i < connections.length; i++) {
        conn = connections[i];
        this.linkMap.set(conn.visual.id, conn.points());
      }
    }
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/math/Graph.js
var Node = class _Node {
  constructor(id, shape) {
    this.links = [];
    this.outgoing = [];
    this.incoming = [];
    this.weight = 1;
    this.data = null;
    this.type = "Node";
    this.isVirtual = false;
    if (isDefined(id)) {
      this.id = id;
    } else {
      this.id = randomId();
    }
    if (isDefined(shape)) {
      this.associatedShape = shape;
      const b = shape.bounds();
      this.width = b.width;
      this.height = b.height;
      this.x = b.x;
      this.y = b.y;
    } else {
      this.associatedShape = null;
    }
    this.shortForm = "Node '" + this.id + "'";
  }
  /**
   * Returns whether this node has no links attached.
   */
  isIsolated() {
    return isEmpty(this.links);
  }
  /**
   * Gets or sets the bounding rectangle of this node.
   * This should be considered as runtime data, the property is not hotlinked to a SVG item.
   */
  bounds(r) {
    if (!isDefined(r)) {
      return new Rect(this.x, this.y, this.width, this.height);
    }
    this.x = r.x;
    this.y = r.y;
    this.width = r.width;
    this.height = r.height;
  }
  /**
   * Returns whether there is at least one link with the given (complementary) node. This can be either an
   * incoming or outgoing link.
   */
  isLinkedTo(node) {
    return getAny(this.links, (link) => {
      return link.getComplement(this) === node;
    });
  }
  /**
   * Gets the children of this node, defined as the adjacent nodes with a link from this node to the adjacent one.
   *
   * @returns {Array}
   */
  getChildren() {
    if (this.outgoing.length === 0) {
      return [];
    }
    const children = [];
    for (let i = 0, len = this.outgoing.length; i < len; i++) {
      const link = this.outgoing[i];
      children.push(link.getComplement(this));
    }
    return children;
  }
  /**
   * Gets the parents of this node, defined as the adjacent nodes with a link from the adjacent node to this one.
   *
   * @returns {Array}
   */
  getParents() {
    if (this.incoming.length === 0) {
      return [];
    }
    const parents = [];
    for (let i = 0, len = this.incoming.length; i < len; i++) {
      const link = this.incoming[i];
      parents.push(link.getComplement(this));
    }
    return parents;
  }
  /**
   * Returns a clone of the Node. Note that the identifier is not cloned since it's a different Node instance.
   *
   * @returns {Node}
   */
  clone() {
    const copy = new _Node();
    if (isDefined(this.weight)) {
      copy.weight = this.weight;
    }
    if (isDefined(this.balance)) {
      copy.balance = this.balance;
    }
    if (isDefined(this.owner)) {
      copy.owner = this.owner;
    }
    copy.associatedShape = this.associatedShape;
    copy.x = this.x;
    copy.y = this.y;
    copy.width = this.width;
    copy.height = this.height;
    return copy;
  }
  /**
   * Returns whether there is a link from the current node to the given node.
   */
  adjacentTo(node) {
    return this.isLinkedTo(node) !== null;
  }
  /**
   * Removes the given link from the link collection this node owns.
   *
   * @param link
   */
  removeLink(link) {
    if (link.source === this) {
      remove(this.links, link);
      remove(this.outgoing, link);
      link.source = null;
    }
    if (link.target === this) {
      remove(this.links, link);
      remove(this.incoming, link);
      link.target = null;
    }
  }
  /**
   * Returns whether there is a (outgoing) link from the current node to the given one.
   */
  hasLinkTo(node) {
    return getAny(this.outgoing, function(link) {
      return link.target === node;
    });
  }
  /**
   * Returns the degree of this node, i.e. the sum of incoming and outgoing links.
   */
  degree() {
    return this.links.length;
  }
  /**
   * Returns whether this node is either the source or the target of the given link.
   */
  incidentWith(link) {
    return contains(this.links, link);
  }
  /**
   * Returns the links between this node and the given one.
   */
  getLinksWith(node) {
    return all(this.links, function(link) {
      return link.getComplement(this) === node;
    }, this);
  }
  /**
   * Returns the nodes (either parent or child) which are linked to the current one.
   */
  getNeighbors() {
    const neighbors = [];
    forEach(this.incoming, function(e) {
      neighbors.push(e.getComplement(this));
    }, this);
    forEach(this.outgoing, function(e) {
      neighbors.push(e.getComplement(this));
    }, this);
    return neighbors;
  }
};
var Link = class _Link {
  constructor(source, target, id, connection) {
    if (isUndefined(source)) {
      throw new Error("The source of the new link is not set.");
    }
    if (isUndefined(target)) {
      throw new Error("The target of the new link is not set.");
    }
    let sourceFound, targetFound;
    if (isString(source)) {
      sourceFound = new Node(source);
    } else {
      sourceFound = source;
    }
    if (isString(target)) {
      targetFound = new Node(target);
    } else {
      targetFound = target;
    }
    this.source = sourceFound;
    this.target = targetFound;
    this.source.links.push(this);
    this.target.links.push(this);
    this.source.outgoing.push(this);
    this.target.incoming.push(this);
    if (isDefined(id)) {
      this.id = id;
    } else {
      this.id = randomId();
    }
    if (isDefined(connection)) {
      this.associatedConnection = connection;
    } else {
      this.associatedConnection = null;
    }
    this.type = "Link";
    this.shortForm = "Link '" + this.source.id + "->" + this.target.id + "'";
  }
  /**
   * Returns the complementary node of the given one, if any.
   */
  getComplement(node) {
    if (this.source !== node && this.target !== node) {
      throw new Error("The given node is not incident with this link.");
    }
    return this.source === node ? this.target : this.source;
  }
  /**
   * Returns the overlap of the current link with the given one, if any.
   */
  getCommonNode(link) {
    if (this.source === link.source || this.source === link.target) {
      return this.source;
    }
    if (this.target === link.source || this.target === link.target) {
      return this.target;
    }
    return null;
  }
  /**
   * Returns whether the current link is bridging the given nodes.
   */
  isBridging(v1, v2) {
    return this.source === v1 && this.target === v2 || this.source === v2 && this.target === v1;
  }
  /**
   * Returns the source and target of this link as a tuple.
   */
  getNodes() {
    return [this.source, this.target];
  }
  /**
   * Returns whether the given node is either the source or the target of the current link.
   */
  incidentWith(node) {
    return this.source === node || this.target === node;
  }
  /**
   * Returns whether the given link is a continuation of the current one. This can be both
   * via an incoming or outgoing link.
   */
  adjacentTo(link) {
    return contains(this.source.links, link) || contains(this.target.links, link);
  }
  /**
   * Changes the source-node of this link.
   */
  changeSource(node) {
    remove(this.source.links, this);
    remove(this.source.outgoing, this);
    node.links.push(this);
    node.outgoing.push(this);
    this.source = node;
  }
  /**
   * Changes the target-node of this link.
   *
   * @param node
   */
  changeTarget(node) {
    remove(this.target.links, this);
    remove(this.target.incoming, this);
    node.links.push(this);
    node.incoming.push(this);
    this.target = node;
  }
  /**
   * Changes both the source and the target nodes of this link.
   */
  changesNodes(v, w) {
    if (this.source === v) {
      this.changeSource(w);
    } else if (this.target === v) {
      this.changeTarget(w);
    }
  }
  /**
   * Reverses the direction of this link.
   */
  reverse() {
    const oldSource = this.source;
    const oldTarget = this.target;
    this.source = oldTarget;
    remove(oldSource.outgoing, this);
    this.source.outgoing.push(this);
    this.target = oldSource;
    remove(oldTarget.incoming, this);
    this.target.incoming.push(this);
    return this;
  }
  /**
   * Ensures that the given target defines the endpoint of this link.
   */
  directTo(target) {
    if (this.source !== target && this.target !== target) {
      throw new Error("The given node is not incident with this link.");
    }
    if (this.target !== target) {
      this.reverse();
    }
  }
  /**
   * Returns a reversed clone of this link.
   */
  createReverseEdge() {
    const r = this.clone();
    r.reverse();
    r.reversed = true;
    return r;
  }
  /**
   * Returns a clone of this link.
   */
  clone() {
    const clone = new _Link(this.source, this.target);
    return clone;
  }
};
var Graph = class _Graph {
  constructor(idOrDiagram) {
    this.links = [];
    this.nodes = [];
    this._nodeMap = new Dictionary();
    this.diagram = null;
    this._root = null;
    this.bounds = new Rect();
    this._hasCachedRelationships = false;
    this.type = "Graph";
    this.componentIndex = 0;
    if (isDefined(idOrDiagram)) {
      if (isString(idOrDiagram)) {
        this.id = idOrDiagram;
      } else {
        this.diagram = idOrDiagram;
        this.id = idOrDiagram.id;
      }
    } else {
      this.id = randomId();
    }
  }
  /**
   * Caches the relational information of parents and children in the 'parents' and 'children'
   * properties.
   *
   * @param forceRebuild If set to true the relational info will be rebuild even if already present.
   */
  cacheRelationships(forceRebuild) {
    if (isUndefined(forceRebuild)) {
      forceRebuild = false;
    }
    if (this._hasCachedRelationships && !forceRebuild) {
      return;
    }
    for (let i = 0, len = this.nodes.length; i < len; i++) {
      const node = this.nodes[i];
      node.children = this.getChildren(node);
      node.parents = this.getParents(node);
    }
    this._hasCachedRelationships = true;
  }
  /**
   * Assigns tree-levels to the nodes assuming this is a tree graph.
   * If not connected or not a tree the process will succeed but
   * will have little meaning.
   *
   * @param startNode The node from where the level numbering starts, usually the root of the tree.
   * @param visited The collection of visited nodes.
   * @param offset The offset or starting counter of the level info.
   */
  assignLevels(startNode, offset, visited) {
    if (!startNode) {
      throw new Error("Start node not specified.");
    }
    if (isUndefined(offset)) {
      offset = 0;
    }
    this.cacheRelationships();
    if (isUndefined(visited)) {
      visited = new Dictionary();
      forEach(this.nodes, function(n) {
        visited.add(n, false);
      });
    }
    visited.set(startNode, true);
    startNode.level = offset;
    const children = startNode.children;
    for (let i = 0, len = children.length; i < len; i++) {
      const child = children[i];
      if (!child || visited.get(child)) {
        continue;
      }
      this.assignLevels(child, offset + 1, visited);
    }
  }
  /**
   * Gets or set the root of this graph.
   * If not set explicitly the first Node with zero incoming links will be taken.
   *
   * @param value
   * @returns {*}
   */
  root(value) {
    if (isUndefined(value)) {
      if (!this._root) {
        const found = first(this.nodes, function(n) {
          return n.incoming.length === 0;
        });
        if (found) {
          return found;
        }
        return first(this.nodes);
      } else {
        return this._root;
      }
    } else {
      this._root = value;
    }
  }
  /**
   * Returns the connected components of this graph.
   * Note that the returned graphs are made up of the nodes and links of this graph, i.e. a pointer to the items of this graph.
   * If you alter the items of the components you'll alter the original graph and vice versa.
   *
   * @returns {Array}
   */
  getConnectedComponents() {
    this.componentIndex = 0;
    this.setItemIndices();
    const componentId = initArray(this.nodes.length, -1);
    for (let v = 0; v < this.nodes.length; v++) {
      if (componentId[v] === -1) {
        this._collectConnectedNodes(componentId, v);
        this.componentIndex++;
      }
    }
    const components = [];
    let i;
    for (i = 0; i < this.componentIndex; ++i) {
      components[i] = new _Graph();
    }
    for (i = 0; i < componentId.length; ++i) {
      const graph = components[componentId[i]];
      graph.addNodeAndOutgoings(this.nodes[i]);
    }
    components.sort(function(a, b) {
      return b.nodes.length - a.nodes.length;
    });
    return components;
  }
  _collectConnectedNodes(setIds, nodeIndex) {
    setIds[nodeIndex] = this.componentIndex;
    const node = this.nodes[nodeIndex];
    forEach(node.links, function(link) {
      const next = link.getComplement(node);
      const nextId = next.index;
      if (setIds[nextId] === -1) {
        this._collectConnectedNodes(setIds, nextId);
      }
    }, this);
  }
  /**
   * Calculates the bounds of this Graph if the Nodes have spatial dimensions defined.
   *
   * @returns {Rect}
   */
  calcBounds() {
    if (this.isEmpty()) {
      this.bounds = new Rect();
      return this.bounds;
    }
    let b = null;
    for (let i = 0, len = this.nodes.length; i < len; i++) {
      const node = this.nodes[i];
      if (!b) {
        b = node.bounds();
      } else {
        b = b.union(node.bounds());
      }
    }
    this.bounds = b;
    return this.bounds;
  }
  /**
   * Creates a spanning tree for the current graph.
   * Important: this will not return a spanning forest if the graph is disconnected.
   * Prim's algorithm  finds a minimum-cost spanning tree of an edge-weighted, connected, undirected graph;
   * see http://en.wikipedia.org/wiki/Prim%27s_algorithm .
   *
   * @param root The root of the spanning tree.
   * @returns {Graph}
   */
  getSpanningTree(root) {
    const tree = new _Graph();
    const map2 = new Dictionary();
    let source, target;
    const rootClone = root.clone();
    tree.root(rootClone);
    rootClone.level = 0;
    rootClone.id = root.id;
    map2.add(root, tree.root());
    root.level = 0;
    const visited = [];
    const remaining = [];
    tree._addNode(tree.root());
    visited.push(root);
    remaining.push(root);
    let levelCount = 1;
    while (remaining.length > 0) {
      const next = remaining.pop();
      for (let ni = 0; ni < next.links.length; ni++) {
        const link = next.links[ni];
        const cn = link.getComplement(next);
        if (contains(visited, cn)) {
          continue;
        }
        cn.level = next.level + 1;
        if (levelCount < cn.level + 1) {
          levelCount = cn.level + 1;
        }
        if (!contains(remaining, cn)) {
          remaining.push(cn);
        }
        if (!contains(visited, cn)) {
          visited.push(cn);
        }
        if (map2.containsKey(next)) {
          source = map2.get(next);
        } else {
          source = next.clone();
          source.level = next.level;
          source.id = next.id;
          map2.add(next, source);
        }
        if (map2.containsKey(cn)) {
          target = map2.get(cn);
        } else {
          target = cn.clone();
          target.level = cn.level;
          target.id = cn.id;
          map2.add(cn, target);
        }
        const newLink = new Link(source, target);
        tree.addLink(newLink);
      }
    }
    const treeLevels = [];
    for (let i = 0; i < levelCount; i++) {
      treeLevels.push([]);
    }
    forEach(tree.nodes, function(node) {
      treeLevels[node.level].push(node);
    });
    tree.treeLevels = treeLevels;
    tree.cacheRelationships();
    return tree;
  }
  /**
   * Returns a random node in this graph.
   *
   * @param excludedNodes The collection of nodes which should not be considered.
   * @param incidenceLessThan The maximum degree or incidence the random node should have.
   * @returns {*}
   */
  takeRandomNode(excludedNodes, incidenceLessThan) {
    if (isUndefined(excludedNodes)) {
      excludedNodes = [];
    }
    if (isUndefined(incidenceLessThan)) {
      incidenceLessThan = 4;
    }
    if (this.nodes.length === 0) {
      return null;
    }
    if (this.nodes.length === 1) {
      return contains(excludedNodes, this.nodes[0]) ? null : this.nodes[0];
    }
    const pool = this.nodes.filter(function(node) {
      return !contains(excludedNodes, node) && node.degree() <= incidenceLessThan;
    });
    if (isEmpty(pool)) {
      return null;
    }
    return pool[randomInteger(0, pool.length)];
  }
  /**
   * Returns whether this is an empty graph.
   */
  isEmpty() {
    return isEmpty(this.nodes);
  }
  /**
   * Checks whether the endpoints of the links are all in the nodes collection.
   */
  isHealthy() {
    return all(this.links, function(link) {
      return contains(this.nodes, link.source) && contains(this.nodes, link.target);
    }, this);
  }
  /**
   * Gets the parents of this node, defined as the adjacent nodes with a link from the adjacent node to this one.
   *
   * @returns {Array}
   */
  getParents(n) {
    if (!this.hasNode(n)) {
      throw new Error("The given node is not part of this graph.");
    }
    return n.getParents();
  }
  /**
   * Gets the children of this node, defined as the adjacent nodes with a link from this node to the adjacent one.
   *
   * @returns {Array}
   */
  getChildren(n) {
    if (!this.hasNode(n)) {
      throw new Error("The given node is not part of this graph.");
    }
    return n.getChildren();
  }
  /**
   * Adds a new link to the graph between the given nodes.
   */
  addLink(sourceOrLink, target, owner) {
    if (isUndefined(sourceOrLink)) {
      throw new Error("The source of the link is not defined.");
    }
    if (isUndefined(target)) {
      if (isDefined(sourceOrLink.type) && sourceOrLink.type === "Link") {
        this.addExistingLink(sourceOrLink);
        return;
      } else {
        throw new Error("The target of the link is not defined.");
      }
    }
    let foundSource = this.getNode(sourceOrLink);
    if (isUndefined(foundSource)) {
      foundSource = this.addNode(sourceOrLink);
    }
    let foundTarget = this.getNode(target);
    if (isUndefined(foundTarget)) {
      foundTarget = this.addNode(target);
    }
    const newLink = new Link(foundSource, foundTarget);
    if (isDefined(owner)) {
      newLink.owner = owner;
    }
    this.links.push(newLink);
    return newLink;
  }
  /**
   * Removes all the links in this graph.
   */
  removeAllLinks() {
    while (this.links.length > 0) {
      const link = this.links[0];
      this.removeLink(link);
    }
  }
  /**
   * Adds the given link to the current graph.
   */
  addExistingLink(link) {
    if (this.hasLink(link)) {
      return;
    }
    this.links.push(link);
    if (this.hasNode(link.source.id)) {
      const s = this.getNode(link.source.id);
      link.changeSource(s);
    } else {
      this.addNode(link.source);
    }
    if (this.hasNode(link.target.id)) {
      const t = this.getNode(link.target.id);
      link.changeTarget(t);
    } else {
      this.addNode(link.target);
    }
  }
  /**
   * Returns whether the given identifier or Link is part of this graph.
   *
   * @param linkOrId An identifier or a Link object.
   * @returns {*}
   */
  hasLink(linkOrId) {
    if (isString(linkOrId)) {
      return getAny(this.links, function(link) {
        return link.id === linkOrId;
      });
    }
    if (linkOrId.type === "Link") {
      return contains(this.links, linkOrId);
    }
    throw new Error("The given object is neither an identifier nor a Link.");
  }
  /**
   * Gets the node with the specified Id or null if not part of this graph.
   */
  getNode(nodeOrId) {
    const id = nodeOrId.id || nodeOrId;
    if (this._nodeMap.containsKey(id)) {
      return this._nodeMap.get(id);
    }
  }
  /**
   * Returns whether the given node or node Id is part of this graph.
   */
  hasNode(nodeOrId) {
    const id = nodeOrId.id || nodeOrId;
    return this._nodeMap.containsKey(id);
  }
  _addNode(node) {
    this.nodes.push(node);
    this._nodeMap.add(node.id, node);
  }
  _removeNode(node) {
    remove(this.nodes, node);
    this._nodeMap.remove(node.id);
  }
  /**
   * Removes the given node from this graph.
   * The node can be specified as an object or as an identifier (string).
   */
  removeNode(nodeOrId) {
    let n = nodeOrId;
    if (isString(nodeOrId)) {
      n = this.getNode(nodeOrId);
    }
    if (isDefined(n)) {
      const links = n.links;
      n.links = [];
      for (let i = 0, len = links.length; i < len; i++) {
        const link = links[i];
        this.removeLink(link);
      }
      this._removeNode(n);
    } else {
      throw new Error("The identifier should be a Node or the Id (string) of a node.");
    }
  }
  /**
   * Returns whether the given nodes are connected with a least one link independently of the direction.
   */
  areConnected(n1, n2) {
    return getAny(this.links, function(link) {
      return link.source === n1 && link.target === n2 || link.source === n2 && link.target === n1;
    });
  }
  /**
   * Removes the given link from this graph.
   */
  removeLink(link) {
    remove(this.links, link);
    remove(link.source.outgoing, link);
    remove(link.source.links, link);
    remove(link.target.incoming, link);
    remove(link.target.links, link);
  }
  /**
   * Adds a new node to this graph, if not already present.
   * The node can be an existing Node or the identifier of a new node.
   * No error is thrown if the node is already there and the existing one is returned.
   */
  addNode(nodeOrId, layoutRect, owner) {
    let newNode = null;
    if (!isDefined(nodeOrId)) {
      throw new Error("No Node or identifier for a new Node is given.");
    }
    if (isString(nodeOrId)) {
      if (this.hasNode(nodeOrId)) {
        return this.getNode(nodeOrId);
      }
      newNode = new Node(nodeOrId);
    } else {
      if (this.hasNode(nodeOrId)) {
        return this.getNode(nodeOrId);
      }
      newNode = nodeOrId;
    }
    if (isDefined(layoutRect)) {
      newNode.bounds(layoutRect);
    }
    if (isDefined(owner)) {
      newNode.owner = owner;
    }
    this._addNode(newNode);
    return newNode;
  }
  /**
   * Adds the given Node and its outgoing links.
   */
  addNodeAndOutgoings(node) {
    if (!this.hasNode(node)) {
      this._addNode(node);
    }
    const newLinks = node.outgoing;
    node.outgoing = [];
    forEach(newLinks, function(link) {
      this.addExistingLink(link);
    }, this);
  }
  /**
   * Sets the 'index' property on the links and nodes of this graph.
   */
  setItemIndices() {
    let i;
    for (i = 0; i < this.nodes.length; ++i) {
      this.nodes[i].index = i;
    }
    for (i = 0; i < this.links.length; ++i) {
      this.links[i].index = i;
    }
  }
  /**
   * Returns a clone of this graph.
   */
  clone(saveMapping) {
    const copy = new _Graph();
    const save = isDefined(saveMapping) && saveMapping === true;
    if (save) {
      copy.nodeMap = new Dictionary();
      copy.linkMap = new Dictionary();
    }
    const map2 = new Dictionary();
    forEach(this.nodes, function(nOriginal) {
      const nCopy = nOriginal.clone();
      map2.set(nOriginal, nCopy);
      copy._addNode(nCopy);
      if (save) {
        copy.nodeMap.set(nCopy, nOriginal);
      }
    });
    forEach(this.links, function(linkOriginal) {
      if (map2.containsKey(linkOriginal.source) && map2.containsKey(linkOriginal.target)) {
        const linkCopy = copy.addLink(map2.get(linkOriginal.source), map2.get(linkOriginal.target));
        if (save) {
          copy.linkMap.set(linkCopy, linkOriginal);
        }
      }
    });
    return copy;
  }
  /**
   * The parsing allows a quick way to create graphs.
   *  - ["n1->n2", "n2->n3"]: creates the three nodes and adds the links
   *  - ["n1->n2", {id: "QSDF"}, "n2->n3"]: same as previous but also performs a deep extend of the link between n1 and n2 with the given object.
   */
  linearize(addIds) {
    return _Graph.Utils.linearize(this, addIds);
  }
  /**
   * Performs a depth-first traversal starting at the given node.
   *
   * @param startNode a node or id of a node in this graph
   * @param action
   */
  depthFirstTraversal(startNode, action) {
    if (isUndefined(startNode)) {
      throw new Error("You need to supply a starting node.");
    }
    if (isUndefined(action)) {
      throw new Error("You need to supply an action.");
    }
    if (!this.hasNode(startNode)) {
      throw new Error("The given start-node is not part of this graph");
    }
    const foundNode = this.getNode(startNode);
    const visited = [];
    this._dftIterator(foundNode, action, visited);
  }
  _dftIterator(node, action, visited) {
    action(node);
    visited.push(node);
    const children = node.getChildren();
    for (let i = 0, len = children.length; i < len; i++) {
      const child = children[i];
      if (contains(visited, child)) {
        continue;
      }
      this._dftIterator(child, action, visited);
    }
  }
  /**
   * Performs a breadth-first traversal starting at the given node.
   *
   * @param startNode a node or id of a node in this graph
   * @param action
   */
  breadthFirstTraversal(startNode, action) {
    if (isUndefined(startNode)) {
      throw new Error("You need to supply a starting node.");
    }
    if (isUndefined(action)) {
      throw new Error("You need to supply an action.");
    }
    if (!this.hasNode(startNode)) {
      throw new Error("The given start-node is not part of this graph");
    }
    const foundNode = this.getNode(startNode);
    const queue = new Queue();
    const visited = [];
    queue.enqueue(foundNode);
    while (queue.length > 0) {
      const node = queue.dequeue();
      action(node);
      visited.push(node);
      const children = node.getChildren();
      for (let i = 0, len = children.length; i < len; i++) {
        const child = children[i];
        if (contains(visited, child) || queue.contains(child)) {
          continue;
        }
        queue.enqueue(child);
      }
    }
  }
  /**
   * This is the classic Tarjan algorithm for strongly connected components.
   * See e.g. http://en.wikipedia.org/wiki/Tarjan's_strongly_connected_components_algorithm
   *
   * @param excludeSingleItems Whether isolated nodes should be excluded from the analysis.
   * @param node The start node from which the analysis starts.
   * @param indices  Numbers the nodes consecutively in the order in which they are discovered.
   * @param lowLinks The smallest index of any node known to be reachable from the node, including the node itself
   * @param connected The current component.
   * @param stack The bookkeeping stack of things to visit.
   * @param index The counter of visited nodes used to assign the indices.
   * @private
   */
  _stronglyConnectedComponents(excludeSingleItems, node, indices, lowLinks, connected, stack, index) {
    indices.add(node, index);
    lowLinks.add(node, index);
    index++;
    stack.push(node);
    const children = node.getChildren();
    let next;
    for (let i = 0, len = children.length; i < len; i++) {
      next = children[i];
      if (!indices.containsKey(next)) {
        this._stronglyConnectedComponents(excludeSingleItems, next, indices, lowLinks, connected, stack, index);
        lowLinks.add(node, Math.min(lowLinks.get(node), lowLinks.get(next)));
      } else if (contains(stack, next)) {
        lowLinks.add(node, Math.min(lowLinks.get(node), indices.get(next)));
      }
    }
    if (lowLinks.get(node) === indices.get(node)) {
      const component = [];
      do {
        next = stack.pop();
        component.push(next);
      } while (next !== node);
      if (!excludeSingleItems || component.length > 1) {
        connected.push(component);
      }
    }
  }
  /**
   * Returns the cycles found in this graph.
   * The returned arrays consist of the nodes which are strongly coupled.
   *
   * @param excludeSingleItems Whether isolated nodes should be excluded.
   * @returns {Array} The array of cycles found.
   */
  findCycles(excludeSingleItems) {
    if (isUndefined(excludeSingleItems)) {
      excludeSingleItems = true;
    }
    const indices = new Dictionary();
    const lowLinks = new Dictionary();
    const connected = [];
    const stack = [];
    for (let i = 0, len = this.nodes.length; i < len; i++) {
      const node = this.nodes[i];
      if (indices.containsKey(node)) {
        continue;
      }
      this._stronglyConnectedComponents(excludeSingleItems, node, indices, lowLinks, connected, stack, 0);
    }
    return connected;
  }
  /**
   * Returns whether this graph is acyclic.
   *
   * @returns {*}
   */
  isAcyclic() {
    return isEmpty(this.findCycles());
  }
  /**
   * Returns whether the given graph is a subgraph of this one.
   *
   * @param other Another graph instance.
   */
  isSubGraph(other) {
    const otherArray = other.linearize();
    const thisArray = this.linearize();
    return all(otherArray, function(s) {
      return contains(thisArray, s);
    });
  }
  /**
   *  Makes an acyclic graph from the current (connected) one.
   * * @returns {Array} The reversed links.
   */
  makeAcyclic() {
    if (this.isEmpty() || this.nodes.length <= 1 || this.links.length <= 1) {
      return [];
    }
    if (this.nodes.length === 2) {
      const result = [];
      if (this.links.length > 1) {
        const oneLink = this.links[0];
        const oneNode = oneLink.source;
        for (let i = 0, len = this.links.length; i < len; i++) {
          const link = this.links[i];
          if (link.source === oneNode) {
            continue;
          }
          const rev = link.reverse();
          result.push(rev);
        }
      }
      return result;
    }
    const copy = this.clone(true);
    const N = this.nodes.length;
    const intensityCatalog = new Dictionary();
    const flowIntensity = function(node) {
      if (node.outgoing.length === 0) {
        return 2 - N;
      } else if (node.incoming.length === 0) {
        return N - 2;
      } else {
        return node.outgoing.length - node.incoming.length;
      }
    };
    const catalogEqualIntensity = function(node) {
      const intensity = flowIntensity(node);
      if (!intensityCatalog.containsKey(intensity)) {
        intensityCatalog.set(intensity, []);
      }
      intensityCatalog.get(intensity).push(node);
    };
    forEach(copy.nodes, function(v) {
      catalogEqualIntensity(v);
    });
    let sourceStack = [];
    const targetStack = [];
    while (copy.nodes.length > 0) {
      let source, target, intensity;
      if (intensityCatalog.containsKey(2 - N)) {
        const targets = intensityCatalog.get(2 - N);
        while (targets.length > 0) {
          target = targets.pop();
          for (let li = 0; li < target.links.length; li++) {
            const targetLink = target.links[li];
            source = targetLink.getComplement(target);
            intensity = flowIntensity(source);
            remove(intensityCatalog.get(intensity), source);
            source.removeLink(targetLink);
            catalogEqualIntensity(source);
          }
          copy._removeNode(target);
          targetStack.unshift(target);
        }
      }
      if (intensityCatalog.containsKey(N - 2)) {
        const sources = intensityCatalog.get(N - 2);
        while (sources.length > 0) {
          source = sources.pop();
          for (let si = 0; si < source.links.length; si++) {
            const sourceLink = source.links[si];
            target = sourceLink.getComplement(source);
            intensity = flowIntensity(target);
            remove(intensityCatalog.get(intensity), target);
            target.removeLink(sourceLink);
            catalogEqualIntensity(target);
          }
          sourceStack.push(source);
          copy._removeNode(source);
        }
      }
      if (copy.nodes.length > 0) {
        for (let k = N - 3; k > 2 - N; k--) {
          if (intensityCatalog.containsKey(k) && intensityCatalog.get(k).length > 0) {
            const maxdiff = intensityCatalog.get(k);
            const v = maxdiff.pop();
            for (let ri = 0; ri < v.links.length; ri++) {
              const ril = v.links[ri];
              const u = ril.getComplement(v);
              intensity = flowIntensity(u);
              remove(intensityCatalog.get(intensity), u);
              u.removeLink(ril);
              catalogEqualIntensity(u);
            }
            sourceStack.push(v);
            copy._removeNode(v);
            break;
          }
        }
      }
    }
    sourceStack = sourceStack.concat(targetStack);
    const vertexOrder = new Dictionary();
    for (let kk = 0; kk < this.nodes.length; kk++) {
      vertexOrder.set(copy.nodeMap.get(sourceStack[kk]), kk);
    }
    const reversedEdges = [];
    forEach(this.links, function(link) {
      if (vertexOrder.get(link.source) > vertexOrder.get(link.target)) {
        link.reverse();
        reversedEdges.push(link);
      }
    });
    return reversedEdges;
  }
};
Graph.Predefined = {
  /**
   * Eight-shapes graph all connected in a cycle.
   *
   * @returns {*}
   * @constructor
   */
  EightGraph() {
    return Graph.Utils.parse(["1->2", "2->3", "3->4", "4->1", "3->5", "5->6", "6->7", "7->3"]);
  },
  /**
   * Creates a typical mindmap diagram.
   *
   * @returns {*}
   * @constructor
   */
  Mindmap() {
    return Graph.Utils.parse(["0->1", "0->2", "0->3", "0->4", "0->5", "1->6", "1->7", "7->8", "2->9", "9->10", "9->11", "3->12", "12->13", "13->14", "4->15", "4->16", "15->17", "15->18", "18->19", "18->20", "14->21", "14->22", "5->23", "23->24", "23->25", "6->26"]);
  },
  /**
   * Three nodes connected in a cycle.
   *
   * @returns {*}
   * @constructor
   */
  ThreeGraph() {
    return Graph.Utils.parse(["1->2", "2->3", "3->1"]);
  },
  /**
   * A tree with each node having two children.
   *
   * @param levels How many levels the binary tree should have.
   * @returns {diagram.Graph}
   * @constructor
   */
  BinaryTree(levels) {
    if (isUndefined(levels)) {
      levels = 5;
    }
    return Graph.Utils.createBalancedTree(levels, 2);
  },
  /**
   * A linear graph (discrete line segment).
   *
   * @param length How many segments (the node count is hence (length+1)).
   * @returns {diagram.Graph}
   * @constructor
   */
  Linear(length) {
    if (isUndefined(length)) {
      length = 10;
    }
    return Graph.Utils.createBalancedTree(length, 1);
  },
  /**
   * A standard tree-graph with the specified levels and children (siblings) count.
   * Note that for a balanced tree of level N and sibling count s, counting the root as level zero:
   * - NodeCount = (1-s^(N+1))/(1-s)]
   * - LinkCount = s.(1-s^N)/(1-s)
   *
   * @param levels How many levels the tree should have.
   * @param siblingsCount How many siblings each level should have.
   * @returns {diagram.Graph}
   * @constructor
   */
  Tree(levels, siblingsCount) {
    return Graph.Utils.createBalancedTree(levels, siblingsCount);
  },
  /**
   * Creates a forest.
   * Note that for a balanced forest of level N, sibling count s and tree count t, counting the root as level zero:
   * - NodeCount = t.(1-s^(N+1))/(1-s)]
   * - LinkCount = t.s.(1-s^N)/(1-s)
   *
   * @param levels How many levels the tree should have.
   * @param siblingsCount How many siblings each level should have.
   * @param trees The amount of trees the forest should have.
   * @returns {diagram.Graph}
   * @constructor
   */
  Forest(levels, siblingsCount, trees) {
    return Graph.Utils.createBalancedForest(levels, siblingsCount, trees);
  },
  /**
   * A workflow-like graph with cycles.
   *
   * @returns {*}
   * @constructor
   */
  Workflow() {
    return Graph.Utils.parse(["0->1", "1->2", "2->3", "1->4", "4->3", "3->5", "5->6", "6->3", "6->7", "5->4"]);
  },
  /**
   * A grid graph with the direction of the links avoiding cycles.
   * Node count: (n+1).(m+1)
   * Link count: n.(m+1) + m.(n+1)
   *
   * @param n Horizontal count of grid cells. If zero this will result in a linear graph.
   * @param m Vertical count of grid cells. If zero this will result in a linear graph.
   * @constructor
   */
  Grid(n, m) {
    const g = new Graph();
    if (n <= 0 && m <= 0) {
      return g;
    }
    for (let i = 0; i < n + 1; i++) {
      let previous = null;
      for (let j = 0; j < m + 1; j++) {
        const node = new Node(i.toString() + "." + j.toString());
        g.addNode(node);
        if (previous) {
          g.addLink(previous, node);
        }
        if (i > 0) {
          const left = g.getNode((i - 1).toString() + "." + j.toString());
          g.addLink(left, node);
        }
        previous = node;
      }
    }
    return g;
  }
};
Graph.Utils = {
  /**
   * The parsing allows a quick way to create graphs.
   *  - ["n1->n2", "n2->n3"]: creates the three nodes and adds the links
   *  - ["n1->n2", {id: "id177"}, "n2->n3"]: same as previous but also performs a deep extend of the link between n1 and n2 with the given object.
   */
  parse(graphString) {
    let previousLink;
    const graph = new Graph(), parts = graphString.slice();
    for (let i = 0, len = parts.length; i < len; i++) {
      const part = parts[i];
      if (isString(part)) {
        if (part.indexOf("->") < 0) {
          throw new Error("The link should be specified as 'a->b'.");
        }
        const p = part.split("->");
        if (p.length !== 2) {
          throw new Error("The link should be specified as 'a->b'.");
        }
        previousLink = new Link(p[0], p[1]);
        graph.addLink(previousLink);
      }
      if (isObject(part)) {
        if (!previousLink) {
          throw new Error("Specification found before Link definition.");
        }
        deepExtend(previousLink, part);
      }
    }
    return graph;
  },
  /**
   * Returns a linearized representation of the given Graph.
   * See also the Graph.Utils.parse method for the inverse operation.
   */
  linearize(graph, addIds) {
    if (isUndefined(graph)) {
      throw new Error("Expected an instance of a Graph object in slot one.");
    }
    if (isUndefined(addIds)) {
      addIds = false;
    }
    const lin = [];
    for (let i = 0, len = graph.links.length; i < len; i++) {
      const link = graph.links[i];
      lin.push(link.source.id + "->" + link.target.id);
      if (addIds) {
        lin.push({
          id: link.id
        });
      }
    }
    return lin;
  },
  /**
   * The method used by the diagram creation to instantiate a shape.
   *
   * @param kendoDiagram The Kendo diagram where the diagram will be created.
   * @param p The position at which to place the shape.
   * @param shapeDefaults Optional Shape options.
   * @param id Optional identifier of the shape.
   * @returns {*}
   * @private
   */
  _addShape(kendoDiagram, p, id, shapeDefaults2) {
    if (isUndefined(p)) {
      p = new Point(0, 0);
    }
    if (isUndefined(id)) {
      id = randomId();
    }
    shapeDefaults2 = deepExtend({
      width: 20,
      height: 20,
      id,
      radius: 10,
      fill: "#778899",
      data: "circle",
      undoable: false,
      x: p.x,
      y: p.y
    }, shapeDefaults2);
    return kendoDiagram.addShape(shapeDefaults2);
  },
  /**
   * The method used by the diagram creation to instantiate a connection.
   *
   * @param diagram he Kendo diagram where the diagram will be created.
   * @param from The source shape.
   * @param to The target shape.
   * @param options Optional Connection options.
   * @returns {*}
   * @private
   */
  _addConnection(diagram, from, to, options) {
    return diagram.connect(from, to, options);
  },
  /**
   * Creates a diagram from the given Graph.
   *
   * @param diagram The Kendo diagram where the diagram will be created.
   * @param graph The graph structure defining the diagram.
   */
  createDiagramFromGraph(diagram, graph, doLayout, randomSize) {
    if (isUndefined(diagram)) {
      throw new Error("The diagram surface is undefined.");
    }
    if (isUndefined(graph)) {
      throw new Error("No graph specification defined.");
    }
    if (isUndefined(doLayout)) {
      doLayout = true;
    }
    if (isUndefined(randomSize)) {
      randomSize = false;
    }
    const width = diagram.element.clientWidth || 200;
    const height = diagram.element.clientHeight || 200;
    const map2 = [];
    let node, shape;
    for (let i = 0, len = graph.nodes.length; i < len; i++) {
      node = graph.nodes[i];
      let p = node.position;
      if (isUndefined(p)) {
        if (isDefined(node.x) && isDefined(node.y)) {
          p = new Point(node.x, node.y);
        } else {
          p = new Point(randomInteger(10, width - 20), randomInteger(10, height - 20));
        }
      }
      const opt = {};
      if (node.id === "0") {
      } else if (randomSize) {
        deepExtend(opt, {
          width: Math.random() * 150 + 20,
          height: Math.random() * 80 + 50,
          data: "rectangle",
          fill: {
            color: "#778899"
          }
        });
      }
      shape = this._addShape(diagram, p, node.id, opt);
      const bounds = shape.bounds();
      if (isDefined(bounds)) {
        node.x = bounds.x;
        node.y = bounds.y;
        node.width = bounds.width;
        node.height = bounds.height;
      }
      map2[node.id] = shape;
    }
    for (let gli = 0; gli < graph.links.length; gli++) {
      const link = graph.links[gli];
      const sourceShape = map2[link.source.id];
      if (isUndefined(sourceShape)) {
        continue;
      }
      const targetShape = map2[link.target.id];
      if (isUndefined(targetShape)) {
        continue;
      }
      this._addConnection(diagram, sourceShape, targetShape, {
        id: link.id
      });
    }
    if (doLayout) {
      const l = new SpringLayout(diagram);
      l.layoutGraph(graph, {
        limitToView: false
      });
      for (let shi = 0; shi < graph.nodes.length; shi++) {
        node = graph.nodes[shi];
        shape = map2[node.id];
        shape.bounds(new Rect(node.x, node.y, node.width, node.height));
      }
    }
  },
  /**
   * Creates a balanced tree with the specified number of levels and siblings count.
   * Note that for a balanced tree of level N and sibling count s, counting the root as level zero:
   * - NodeCount = (1-s^(N+1))/(1-s)]
   * - LinkCount = s.(1-s^N)/(1-s)
   *
   * @param levels How many levels the tree should have.
   * @param siblingsCount How many siblings each level should have.
   * @returns {diagram.Graph}
   */
  createBalancedTree(levels, siblingsCount) {
    if (isUndefined(levels)) {
      levels = 3;
    }
    if (isUndefined(siblingsCount)) {
      siblingsCount = 3;
    }
    const g = new Graph();
    let news, counter = -1, lastAdded = [];
    if (levels <= 0 || siblingsCount <= 0) {
      return g;
    }
    const root = new Node((++counter).toString());
    g.addNode(root);
    g.root(root);
    lastAdded.push(root);
    for (let i = 0; i < levels; i++) {
      news = [];
      for (let j = 0; j < lastAdded.length; j++) {
        const parent = lastAdded[j];
        for (let k = 0; k < siblingsCount; k++) {
          const item = new Node((++counter).toString());
          g.addLink(parent, item);
          news.push(item);
        }
      }
      lastAdded = news;
    }
    return g;
  },
  /**
   * Creates a balanced tree with the specified number of levels and siblings count.
   * Note that for a balanced forest of level N, sibling count s and tree count t, counting the root as level zero:
   * - NodeCount = t.(1-s^(N+1))/(1-s)]
   * - LinkCount = t.s.(1-s^N)/(1-s)
   *
   * @param levels How many levels the tree should have.
   * @param siblingsCount How many siblings each level should have.
   * @returns {diagram.Graph}
   * @param treeCount The number of trees the forest should have.
   */
  createBalancedForest(levels, siblingsCount, treeCount) {
    if (isUndefined(levels)) {
      levels = 3;
    }
    if (isUndefined(siblingsCount)) {
      siblingsCount = 3;
    }
    if (isUndefined(treeCount)) {
      treeCount = 5;
    }
    const g = new Graph();
    let counter = -1, lastAdded = [], news;
    if (levels <= 0 || siblingsCount <= 0 || treeCount <= 0) {
      return g;
    }
    for (let t = 0; t < treeCount; t++) {
      const root = new Node((++counter).toString());
      g.addNode(root);
      lastAdded = [root];
      for (let i = 0; i < levels; i++) {
        news = [];
        for (let j = 0; j < lastAdded.length; j++) {
          const parent = lastAdded[j];
          for (let k = 0; k < siblingsCount; k++) {
            const item = new Node((++counter).toString());
            g.addLink(parent, item);
            news.push(item);
          }
        }
        lastAdded = news;
      }
    }
    return g;
  },
  /**
   * Creates a random graph (uniform distribution) with the specified amount of nodes.
   *
   * @param nodeCount The amount of nodes the random graph should have.
   * @param maxIncidence The maximum allowed degree of the nodes.
   * @param isTree Whether the return graph should be a tree (default: false).
   * @returns {diagram.Graph}
   */
  createRandomConnectedGraph(nodeCount, maxIncidence, isTree) {
    if (isUndefined(nodeCount)) {
      nodeCount = 40;
    }
    if (isUndefined(maxIncidence)) {
      maxIncidence = 4;
    }
    if (isUndefined(isTree)) {
      isTree = false;
    }
    const g = new Graph();
    let counter = -1;
    if (nodeCount <= 0) {
      return g;
    }
    const root = new Node((++counter).toString());
    g.addNode(root);
    if (nodeCount === 1) {
      return g;
    }
    if (nodeCount > 1) {
      for (let i = 1; i < nodeCount; i++) {
        const poolNode = g.takeRandomNode([], maxIncidence);
        if (!poolNode) {
          break;
        }
        const newNode = g.addNode(i.toString());
        g.addLink(poolNode, newNode);
      }
      if (!isTree && nodeCount > 1) {
        const randomAdditions = randomInteger(1, nodeCount);
        for (let ri = 0; ri < randomAdditions; ri++) {
          const n1 = g.takeRandomNode([], maxIncidence);
          const n2 = g.takeRandomNode([], maxIncidence);
          if (n1 && n2 && !g.areConnected(n1, n2)) {
            g.addLink(n1, n2);
          }
        }
      }
      return g;
    }
  },
  /**
   * Generates a random diagram.
   *
   * @param diagram The host diagram.
   * @param shapeCount The number of shapes the random diagram should contain.
   * @param maxIncidence The maximum degree the shapes can have.
   * @param isTree Whether the generated diagram should be a tree
   * @param layoutType The optional layout type to apply after the diagram is generated.
   */
  randomDiagram(diagram, shapeCount, maxIncidence, isTree, randomSize) {
    const g = Graph.Utils.createRandomConnectedGraph(shapeCount, maxIncidence, isTree);
    Graph.Utils.createDiagramFromGraph(diagram, g, false, randomSize);
  }
};
var SpringLayout = class extends LayoutBase {
  constructor(diagram) {
    super();
    if (isUndefined(diagram)) {
      throw new Error("Diagram is not specified.");
    }
    this.diagram = diagram;
  }
  layout(options) {
    this.transferOptions(options);
    const adapter = new DiagramToHyperTreeAdapter(this.diagram);
    const graph = adapter.convert(options);
    if (graph.isEmpty()) {
      return;
    }
    const components = graph.getConnectedComponents();
    if (isEmpty(components)) {
      return;
    }
    for (let i = 0; i < components.length; i++) {
      const component = components[i];
      this.layoutGraph(component, options);
    }
    const finalNodeSet = this.gridLayoutComponents(components);
    return new LayoutState(this.diagram, finalNodeSet);
  }
  layoutGraph(graph, options) {
    if (isDefined(options)) {
      this.transferOptions(options);
    }
    this.graph = graph;
    const initialTemperature = this.options.nodeDistance * 9;
    this.temperature = initialTemperature;
    const guessBounds = this._expectedBounds();
    this.width = guessBounds.width;
    this.height = guessBounds.height;
    for (let step = 0; step < this.options.iterations; step++) {
      this.refineStage = step >= this.options.iterations * 5 / 6;
      this.tick();
      this.temperature = this.refineStage ? initialTemperature / 30 : initialTemperature * (1 - step / (2 * this.options.iterations));
    }
  }
  /**
   * Single iteration of the simulation.
   */
  tick() {
    let i;
    for (i = 0; i < this.graph.nodes.length; i++) {
      this._repulsion(this.graph.nodes[i]);
    }
    for (i = 0; i < this.graph.links.length; i++) {
      this._attraction(this.graph.links[i]);
    }
    for (i = 0; i < this.graph.nodes.length; i++) {
      const node = this.graph.nodes[i];
      const offset = Math.sqrt(node.dx * node.dx + node.dy * node.dy);
      if (offset === 0) {
        return;
      }
      node.x += Math.min(offset, this.temperature) * node.dx / offset;
      node.y += Math.min(offset, this.temperature) * node.dy / offset;
      if (this.options.limitToView) {
        node.x = Math.min(this.width, Math.max(node.width / 2, node.x));
        node.y = Math.min(this.height, Math.max(node.height / 2, node.y));
      }
    }
  }
  /**
   * Shakes the node away from its current position to escape the deadlock.
   *
   * @param node A Node.
   * @private
   */
  _shake(node) {
    const rho = Math.random() * this.options.nodeDistance / 4;
    const alpha = Math.random() * 2 * Math.PI;
    node.x += rho * Math.cos(alpha);
    node.y -= rho * Math.sin(alpha);
  }
  /**
   * The typical Coulomb-Newton force law F=k/r^2
   *
   * @remark This only works in dimensions less than three.
   * @param d
   * @param n A Node.
   * @param m Another Node.
   * @returns {number}
   * @private
   */
  _InverseSquareForce(d, n, m) {
    let force;
    if (!this.refineStage) {
      force = Math.pow(d, 2) / Math.pow(this.options.nodeDistance, 2);
    } else {
      const deltax = n.x - m.x;
      const deltay = n.y - m.y;
      const wn = n.width / 2;
      const hn = n.height / 2;
      const wm = m.width / 2;
      const hm = m.height / 2;
      force = Math.pow(deltax, 2) / Math.pow(wn + wm + this.options.nodeDistance, 2) + Math.pow(deltay, 2) / Math.pow(hn + hm + this.options.nodeDistance, 2);
    }
    return force * 4 / 3;
  }
  /**
   * The typical Hooke force law F=kr^2
   *
   * @param d
   * @param n
   * @param m
   * @returns {number}
   * @private
   */
  _SquareForce(d, n, m) {
    return 1 / this._InverseSquareForce(d, n, m);
  }
  _repulsion(n) {
    n.dx = 0;
    n.dy = 0;
    forEach(this.graph.nodes, function(m) {
      if (m === n) {
        return;
      }
      while (n.x === m.x && n.y === m.y) {
        this._shake(m);
      }
      const vx = n.x - m.x;
      const vy = n.y - m.y;
      const distance = Math.sqrt(vx * vx + vy * vy);
      const r = this._SquareForce(distance, n, m) * 2;
      n.dx += vx / distance * r;
      n.dy += vy / distance * r;
    }, this);
  }
  _attraction(link) {
    const t = link.target;
    const s = link.source;
    if (s === t) {
      return;
    }
    while (s.x === t.x && s.y === t.y) {
      this._shake(t);
    }
    const vx = s.x - t.x;
    const vy = s.y - t.y;
    const distance = Math.sqrt(vx * vx + vy * vy);
    const a = this._InverseSquareForce(distance, s, t) * 5;
    const dx = vx / distance * a;
    const dy = vy / distance * a;
    t.dx += dx;
    t.dy += dy;
    s.dx -= dx;
    s.dy -= dy;
  }
  /**
   * Calculates the expected bounds after layout.
   *
   * @returns {*}
   * @private
   */
  _expectedBounds() {
    const N = this.graph.nodes.length, ratio = 1.5, multiplier = 4;
    if (N === 0) {
      return;
    }
    const size = fold(this.graph.nodes, function(s, node) {
      const area = node.width * node.height;
      if (area > 0) {
        s += Math.sqrt(area);
        return s;
      }
      return 0;
    }, 0, this);
    const av = size / N;
    const squareSize = av * Math.ceil(Math.sqrt(N));
    const width = squareSize * Math.sqrt(ratio);
    const height = squareSize / Math.sqrt(ratio);
    return {
      width: width * multiplier,
      height: height * multiplier
    };
  }
};
var DiagramToHyperTreeAdapter = class {
  constructor(diagram) {
    this.nodeMap = new Dictionary();
    this.shapeMap = new Dictionary();
    this.nodes = [];
    this.edges = [];
    this.edgeMap = new Dictionary();
    this.finalNodes = [];
    this.finalLinks = [];
    this.ignoredConnections = [];
    this.ignoredShapes = [];
    this.hyperMap = new Dictionary();
    this.hyperTree = new Graph();
    this.finalGraph = null;
    this.diagram = diagram;
  }
  /**
   * The hyperTree is used when the 'options.layoutContainerChildren' is true. It contains the hierarchy of containers whereby each node is a ContainerGraph.
   * This type of node has a Container reference to the container which holds the Graph items. There are three possible situations during the conversion process:
   * - Ignore the containers: the container are non-existent and only normal shapes are mapped. If a shape has a connection to a container it will be ignored as well
   * since there is no node mapped for the container.
   * - Do not ignore the containers and leave the content of the containers untouched: the top-level elements are being mapped and the children within a container are not altered.
   * - Do not ignore the containers and organize the content of the containers as well: the hypertree is constructed and there is a partitioning of all nodes and connections into the hypertree.
   * The only reason a connection or node is not being mapped might be due to the visibility, which includes the visibility change through a collapsed parent container.
   *
   * @param options
   */
  convert(options) {
    if (isUndefined(this.diagram)) {
      throw new Error("No diagram to convert.");
    }
    this.options = deepExtend({
      ignoreInvisible: true,
      ignoreContainers: true,
      layoutContainerChildren: false
    }, options || {});
    this.clear();
    this._renormalizeShapes();
    this._renormalizeConnections();
    this.finalNodes = new Dictionary(this.nodes);
    this.finalLinks = new Dictionary(this.edges);
    this.finalGraph = new Graph();
    this.finalNodes.forEach(function(n) {
      this.finalGraph.addNode(n);
    }, this);
    this.finalLinks.forEach(function(l) {
      this.finalGraph.addExistingLink(l);
    }, this);
    return this.finalGraph;
  }
  /**
   * Maps the specified connection to an edge of the graph deduced from the given diagram.
   *
   * @param connection
   * @returns {*}
   */
  mapConnection(connection) {
    return this.edgeMap.get(connection.id);
  }
  /**
   * Maps the specified shape to a node of the graph deduced from the given diagram.
   *
   * @param shape
   * @returns {*}
   */
  mapShape(shape) {
    return this.nodeMap.get(shape.id);
  }
  /**
   * Gets the edge, if any, between the given nodes.
   *
   * @param a
   * @param b
   */
  getEdge(a, b) {
    return first(a.links, function(link) {
      return link.getComplement(a) === b;
    });
  }
  /**
   * Clears all the collections used by the conversion process.
   */
  clear() {
    this.finalGraph = null;
    this.hyperTree = !this.options.ignoreContainers && this.options.layoutContainerChildren ? new Graph() : null;
    this.hyperMap = !this.options.ignoreContainers && this.options.layoutContainerChildren ? new Dictionary() : null;
    this.nodeMap = new Dictionary();
    this.shapeMap = new Dictionary();
    this.nodes = [];
    this.edges = [];
    this.edgeMap = new Dictionary();
    this.ignoredConnections = [];
    this.ignoredShapes = [];
    this.finalNodes = [];
    this.finalLinks = [];
  }
  /**
   * The path from a given ContainerGraph to the root (container).
   *
   * @param containerGraph
   * @returns {Array}
   */
  listToRoot(containerGraph) {
    const list = [];
    let s = containerGraph.container;
    if (!s) {
      return list;
    }
    list.push(s);
    while (s.parentContainer) {
      s = s.parentContainer;
      list.push(s);
    }
    list.reverse();
    return list;
  }
  firstNonIgnorableContainer(shape) {
    if (shape.isContainer && !this.isIgnorableItem(shape)) {
      return shape;
    }
    return !shape.parentContainer ? null : this.firstNonIgnorableContainer(shape.parentContainer);
  }
  isContainerConnection(a, b) {
    if (a.isContainer && this.isDescendantOf(a, b)) {
      return true;
    }
    return b.isContainer && this.isDescendantOf(b, a);
  }
  /**
   * Returns true if the given shape is a direct child or a nested container child of the given container.
   * If the given container and shape are the same this will return false since a shape cannot be its own child.
   *
   * @param scope
   * @param a
   * @returns {boolean}
   */
  isDescendantOf(scope, a) {
    if (!scope.isContainer) {
      throw new Error("Expecting a container.");
    }
    if (scope === a) {
      return false;
    }
    if (contains(scope.children, a)) {
      return true;
    }
    const containers = [];
    for (let i = 0, len = scope.children.length; i < len; i++) {
      const c = scope.children[i];
      if (c.isContainer && this.isDescendantOf(c, a)) {
        containers.push(c);
      }
    }
    return containers.length > 0;
  }
  isIgnorableItem(shape) {
    if (this.options.ignoreInvisible) {
      if (shape.isCollapsed && this._isVisible(shape)) {
        return false;
      }
      if (!shape.isCollapsed && this._isVisible(shape)) {
        return false;
      }
      return true;
    } else {
      return shape.isCollapsed && !this._isTop(shape);
    }
  }
  /**
   *  Determines whether the shape is or needs to be mapped to another shape. This occurs essentially when the shape sits in
   *  a collapsed container hierarchy and an external connection needs a node endpoint. This node then corresponds to the mapped shape and is
   *  necessarily a container in the parent hierarchy of the shape.
   *
   * @param shape
   */
  isShapeMapped(shape) {
    return shape.isCollapsed && !this._isVisible(shape) && !this._isTop(shape);
  }
  leastCommonAncestor(a, b) {
    if (!a) {
      throw new Error("Parameter should not be null.");
    }
    if (!b) {
      throw new Error("Parameter should not be null.");
    }
    if (!this.hyperTree) {
      throw new Error("No hypertree available.");
    }
    const al = this.listToRoot(a);
    const bl = this.listToRoot(b);
    let found = null;
    if (isEmpty(al) || isEmpty(bl)) {
      return this.hyperTree.root().data;
    }
    let xa = al[0];
    let xb = bl[0];
    let i = 0;
    while (xa === xb) {
      found = al[i];
      i++;
      if (i >= al.length || i >= bl.length) {
        break;
      }
      xa = al[i];
      xb = bl[i];
    }
    if (!found) {
      return this.hyperTree.root().data;
    } else {
      return this.hyperTree.nodes.filter(function(n) {
        return n.data.container === found;
      });
    }
  }
  /**
   * Determines whether the specified item is a top-level shape or container.
   *
   * @param item
   * @returns {boolean}
   * @private
   */
  _isTop(item) {
    return !item.parentContainer;
  }
  /**
   * Determines iteratively (by walking up the container stack) whether the specified shape is visible.
   * This does NOT tell whether the item is not visible due to an explicit Visibility change or due to a collapse state.
   *
   * @param shape
   * @returns {*}
   * @private
   */
  _isVisible(shape) {
    if (!shape.visible()) {
      return false;
    }
    return !shape.parentContainer ? shape.visible() : this._isVisible(shape.parentContainer);
  }
  _isCollapsed(shape) {
    if (shape.isContainer && shape.isCollapsed) {
      return true;
    }
    return shape.parentContainer && this._isCollapsed(shape.parentContainer);
  }
  /**
   * First part of the graph creation; analyzing the shapes and containers and deciding whether they should be mapped to a Node.
   *
   * @private
   */
  _renormalizeShapes() {
    if (this.options.ignoreContainers) {
      for (let i = 0, len = this.diagram.shapes.length; i < len; i++) {
        const shape = this.diagram.shapes[i];
        if (this.options.ignoreInvisible && !this._isVisible(shape) || shape.isContainer) {
          this.ignoredShapes.push(shape);
          continue;
        }
        const node = new Node(shape.id, shape);
        node.isVirtual = false;
        this.nodeMap.add(shape.id, node);
        this.nodes.push(node);
      }
    } else {
      throw new Error("Containers are not supported yet, but stay tuned.");
    }
  }
  /**
   * Second part of the graph creation; analyzing the connections and deciding whether they should be mapped to an edge.
   *
   * @private
   */
  _renormalizeConnections() {
    if (this.diagram.connections.length === 0) {
      return;
    }
    for (let i = 0, len = this.diagram.connections.length; i < len; i++) {
      const conn = this.diagram.connections[i];
      if (this.isIgnorableItem(conn)) {
        this.ignoredConnections.push(conn);
        continue;
      }
      let source = !conn.sourceConnector ? null : conn.sourceConnector.shape;
      let sink = !conn.targetConnector ? null : conn.targetConnector.shape;
      if (!source || !sink) {
        this.ignoredConnections.push(conn);
        continue;
      }
      if (contains(this.ignoredShapes, source) && !this.shapeMap.containsKey(source)) {
        this.ignoredConnections.push(conn);
        continue;
      }
      if (contains(this.ignoredShapes, sink) && !this.shapeMap.containsKey(sink)) {
        this.ignoredConnections.push(conn);
        continue;
      }
      if (this.shapeMap.containsKey(source)) {
        source = this.shapeMap[source];
      }
      if (this.shapeMap.containsKey(sink)) {
        sink = this.shapeMap[sink];
      }
      const sourceNode = this.mapShape(source);
      const sinkNode = this.mapShape(sink);
      if (sourceNode === sinkNode || this.areConnectedAlready(sourceNode, sinkNode)) {
        this.ignoredConnections.push(conn);
        continue;
      }
      if (sourceNode === null || sinkNode === null) {
        throw new Error("A shape was not mapped to a node.");
      }
      if (this.options.ignoreContainers) {
        if (sourceNode.isVirtual || sinkNode.isVirtual) {
          this.ignoredConnections.push(conn);
          continue;
        }
        const newEdge = new Link(sourceNode, sinkNode, conn.id, conn);
        this.edgeMap.add(conn.id, newEdge);
        this.edges.push(newEdge);
      } else {
        throw new Error("Containers are not supported yet, but stay tuned.");
      }
    }
  }
  areConnectedAlready(n, m) {
    return getAny(this.edges, function(l) {
      return l.source === n && l.target === m || l.source === m && l.target === n;
    });
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/math/Intersect.js
function intersectLine(start1, end1, start2, end2, isSegment) {
  const tangensdiff = (end1.x - start1.x) * (end2.y - start2.y) - (end1.y - start1.y) * (end2.x - start2.x);
  if (isNearZero(tangensdiff)) {
    return;
  }
  const num1 = (start1.y - start2.y) * (end2.x - start2.x) - (start1.x - start2.x) * (end2.y - start2.y);
  const num2 = (start1.y - start2.y) * (end1.x - start1.x) - (start1.x - start2.x) * (end1.y - start1.y);
  const r = num1 / tangensdiff;
  const s = num2 / tangensdiff;
  if (isSegment && (r < 0 || r > 1 || s < 0 || s > 1)) {
    return;
  }
  return new Point(start1.x + r * (end1.x - start1.x), start1.y + r * (end1.y - start1.y));
}
var Intersect = {
  lines(start1, end1, start2, end2) {
    return intersectLine(start1, end1, start2, end2);
  },
  segments(start1, end1, start2, end2) {
    return intersectLine(start1, end1, start2, end2, true);
  },
  rectWithLine(rect, start, end) {
    return Intersect.segments(start, end, rect.topLeft(), rect.topRight()) || Intersect.segments(start, end, rect.topRight(), rect.bottomRight()) || Intersect.segments(start, end, rect.bottomLeft(), rect.bottomRight()) || Intersect.segments(start, end, rect.topLeft(), rect.bottomLeft());
  },
  rects(rect1, rect2, angle) {
    let tl = rect2.topLeft(), tr = rect2.topRight(), bl = rect2.bottomLeft(), br = rect2.bottomRight();
    const center = rect2.center();
    if (angle) {
      tl = tl.rotate(angle, center);
      tr = tr.rotate(angle, center);
      bl = bl.rotate(angle, center);
      br = br.rotate(angle, center);
    }
    let intersect = rect1.contains(tl) || rect1.contains(tr) || rect1.contains(bl) || rect1.contains(br) || Intersect.rectWithLine(rect1, tl, tr) || Intersect.rectWithLine(rect1, tl, bl) || Intersect.rectWithLine(rect1, tr, br) || Intersect.rectWithLine(rect1, bl, br);
    if (!intersect) {
      tl = rect1.topLeft();
      tr = rect1.topRight();
      bl = rect1.bottomLeft();
      br = rect1.bottomRight();
      if (angle) {
        const reverseAngle = 360 - angle;
        tl = tl.rotate(reverseAngle, center);
        tr = tr.rotate(reverseAngle, center);
        bl = bl.rotate(reverseAngle, center);
        br = br.rotate(reverseAngle, center);
      }
      intersect = rect2.contains(tl) || rect2.contains(tr) || rect2.contains(bl) || rect2.contains(br);
    }
    return intersect;
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/math/Matrix.js
var map = (arr, func) => arr.map(func);
var MatrixVector = class _MatrixVector {
  constructor(a, b, c, d, e, f) {
    this.a = a || 0;
    this.b = b || 0;
    this.c = c || 0;
    this.d = d || 0;
    this.e = e || 0;
    this.f = f || 0;
  }
  fromMatrix(m) {
    const v = new _MatrixVector();
    v.a = m.a;
    v.b = m.b;
    v.c = m.c;
    v.d = m.d;
    v.e = m.e;
    v.f = m.f;
    return v;
  }
};
var Matrix = class _Matrix {
  constructor(a, b, c, d, e, f) {
    this.a = a || 0;
    this.b = b || 0;
    this.c = c || 0;
    this.d = d || 0;
    this.e = e || 0;
    this.f = f || 0;
  }
  plus(m) {
    this.a += m.a;
    this.b += m.b;
    this.c += m.c;
    this.d += m.d;
    this.e += m.e;
    this.f += m.f;
  }
  minus(m) {
    this.a -= m.a;
    this.b -= m.b;
    this.c -= m.c;
    this.d -= m.d;
    this.e -= m.e;
    this.f -= m.f;
  }
  times(m) {
    return new _Matrix(this.a * m.a + this.c * m.b, this.b * m.a + this.d * m.b, this.a * m.c + this.c * m.d, this.b * m.c + this.d * m.d, this.a * m.e + this.c * m.f + this.e, this.b * m.e + this.d * m.f + this.f);
  }
  apply(p) {
    return new Point(this.a * p.x + this.c * p.y + this.e, this.b * p.x + this.d * p.y + this.f);
  }
  applyRect(r) {
    return Rect.fromPoints(this.apply(r.topLeft()), this.apply(r.bottomRight()));
  }
  toString() {
    return "matrix(" + this.a + " " + this.b + " " + this.c + " " + this.d + " " + this.e + " " + this.f + ")";
  }
  static fromSVGMatrix(vm) {
    const m = new _Matrix();
    m.a = vm.a;
    m.b = vm.b;
    m.c = vm.c;
    m.d = vm.d;
    m.e = vm.e;
    m.f = vm.f;
    return m;
  }
  static fromMatrixVector(v) {
    const m = new _Matrix();
    m.a = v.a;
    m.b = v.b;
    m.c = v.c;
    m.d = v.d;
    m.e = v.e;
    m.f = v.f;
    return m;
  }
  static fromList(v) {
    if (v.length !== 6) {
      throw new Error("The given list should consist of six elements.");
    }
    const m = new _Matrix();
    m.a = v[0];
    m.b = v[1];
    m.c = v[2];
    m.d = v[3];
    m.e = v[4];
    m.f = v[5];
    return m;
  }
  static translation(x, y) {
    const m = new _Matrix();
    m.a = 1;
    m.b = 0;
    m.c = 0;
    m.d = 1;
    m.e = x;
    m.f = y;
    return m;
  }
  static unit() {
    return new _Matrix(1, 0, 0, 1, 0, 0);
  }
  static rotation(angle, x, y) {
    const m = new _Matrix();
    m.a = Math.cos(angle * Math.PI / 180);
    m.b = Math.sin(angle * Math.PI / 180);
    m.c = -m.b;
    m.d = m.a;
    m.e = x - x * m.a + y * m.b || 0;
    m.f = y - y * m.a - x * m.b || 0;
    return m;
  }
  static scaling(scaleX, scaleY) {
    const m = new _Matrix();
    m.a = scaleX;
    m.b = 0;
    m.c = 0;
    m.d = scaleY;
    m.e = 0;
    m.f = 0;
    return m;
  }
  static parse(v) {
    let parts, nums;
    if (v) {
      v = v.trim();
      if (v.slice(0, 6).toLowerCase() === "matrix") {
        nums = v.slice(7, v.length - 1).trim();
        parts = nums.split(",");
        if (parts.length === 6) {
          return _Matrix.fromList(map(parts, function(p) {
            return parseFloat(p);
          }));
        }
        parts = nums.split(" ");
        if (parts.length === 6) {
          return _Matrix.fromList(map(parts, function(p) {
            return parseFloat(p);
          }));
        }
      }
      if (v.slice(0, 1) === "(" && v.slice(v.length - 1) === ")") {
        v = v.substr(1, v.length - 1);
      }
      if (v.indexOf(",") > 0) {
        parts = v.split(",");
        if (parts.length === 6) {
          return _Matrix.fromList(map(parts, function(p) {
            return parseFloat(p);
          }));
        }
      }
      if (v.indexOf(" ") > 0) {
        parts = v.split(" ");
        if (parts.length === 6) {
          return _Matrix.fromList(map(parts, function(p) {
            return parseFloat(p);
          }));
        }
      }
    }
    return parts;
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/math/PathDefiner.js
var PathDefiner = class {
  constructor(p, left, right) {
    this.point = p;
    this.left = left;
    this.right = right;
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/math/Set.js
var Set2 = class extends Observable {
  constructor(resource) {
    super();
    this._hashTable = new HashTable();
    this.length = 0;
    if (isDefined(resource)) {
      if (resource instanceof HashTable) {
        resource.forEach(function(d) {
          this.add(d);
        });
      } else if (resource instanceof Dictionary) {
        resource.forEach(function(k, v) {
          this.add({
            key: k,
            value: v
          });
        }, this);
      }
    }
  }
  contains(item) {
    return this._hashTable.containsKey(item);
  }
  add(item) {
    const entry = this._hashTable.get(item);
    if (!entry) {
      this._hashTable.add(item, item);
      this.length++;
      this.trigger("changed");
    }
  }
  get(item) {
    if (this.contains(item)) {
      return this._hashTable.get(item).value;
    } else {
      return null;
    }
  }
  /**
   * Returns the hash of the item.
   *
   * @param item
   * @returns {*}
   */
  hash(item) {
    return this._hashTable._hash(item);
  }
  /**
   * Removes the given item from the set. No exception is thrown if the item is not in the Set.
   *
   * @param item
   */
  remove(item) {
    if (this.contains(item)) {
      this._hashTable.remove(item);
      this.length--;
      this.trigger("changed");
    }
  }
  /**
   * Foreach with an iterator working on the key-value pairs.
   *
   * @param func
   */
  forEach(func, context) {
    const call = context ? func.bind(context) : func;
    this._hashTable.forEach(function(kv) {
      call(kv.value);
    });
  }
  toArray() {
    const r = [];
    this.forEach(function(d) {
      r.push(d);
    });
    return r;
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/math/Size.js
var Size = class _Size {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  static Empty() {
    return new _Size(0, 0);
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/svg/Rotation.js
var Rotation = class _Rotation {
  /**
   * Creates a new Rotation transformation.
   * @param angle The rotation angle in radians
   * @param x The x coordinate of the rotation center (optional)
   * @param y The y coordinate of the rotation center (optional)
   */
  constructor(angle, x, y) {
    this.x = x || 0;
    this.y = y || 0;
    this.angle = angle;
  }
  /**
   * Returns a string representation of the rotation transformation.
   * @returns String representation in CSS transform format
   */
  toString() {
    if (this.x && this.y) {
      return `rotate(${this.angle},${this.x},${this.y})`;
    } else {
      return `rotate(${this.angle})`;
    }
  }
  /**
   * Converts the rotation transformation to a matrix representation.
   * @returns A matrix representing the rotation transformation
   */
  toMatrix() {
    return Matrix.rotation(this.angle, this.x, this.y);
  }
  /**
   * Gets the center point of the rotation.
   * @returns A Point representing the rotation center
   */
  center() {
    return new Point(this.x, this.y);
  }
  /**
   * Creates an inverted version of this rotation transformation.
   * @returns A new Rotation with inverted angle
   */
  invert() {
    return new _Rotation(FULL_CIRCLE_ANGLE - this.angle, this.x, this.y);
  }
  /**
   * Creates a new Rotation instance from an existing rotation.
   * @param rotation The rotation to copy
   * @returns A new Rotation instance
   */
  static create(rotation) {
    return new _Rotation(rotation.angle, rotation.x, rotation.y);
  }
  /**
   * Parses a rotation from a string representation.
   * @param str The string to parse
   * @returns A new Rotation instance
   */
  static parse(str) {
    const values = str.slice(1, str.length - 1).split(",");
    const angle = parseFloat(values[0]);
    const x = parseFloat(values[1]);
    const y = parseFloat(values[2]);
    return new _Rotation(angle, x, y);
  }
};
Rotation.ZERO = new Rotation(0);

// node_modules/@progress/kendo-diagram-common/dist/es/svg/Scale.js
var Scale = class _Scale {
  /**
   * Creates a new Scale transformation.
   * @param x The scaling factor for the x-axis
   * @param y The scaling factor for the y-axis
   */
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  /**
   * Converts the scaling transformation to a matrix representation.
   * @returns A matrix representing the scaling transformation
   */
  toMatrix() {
    return Matrix.scaling(this.x, this.y);
  }
  /**
   * Returns a string representation of the scaling transformation.
   * @returns String representation in CSS transform format
   */
  toString() {
    return `scale(${this.x},${this.y})`;
  }
  /**
   * Creates an inverted version of this scaling transformation.
   * @returns A new Scale with inverted scaling factors
   */
  invert() {
    return new _Scale(1 / this.x, 1 / this.y);
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/svg/Translation.js
var Translation = class _Translation {
  /**
   * Creates a new Translation transformation.
   * @param x The x offset
   * @param y The y offset
   */
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  /**
   * Converts the translation to a matrix vector representation.
   * @returns A MatrixVector representing the translation
   */
  toMatrixVector() {
    return new MatrixVector(0, 0, 0, 0, this.x, this.y);
  }
  /**
   * Converts the translation transformation to a matrix representation.
   * @returns A matrix representing the translation transformation
   */
  toMatrix() {
    return Matrix.translation(this.x, this.y);
  }
  /**
   * Returns a string representation of the translation transformation.
   * @returns String representation in CSS transform format
   */
  toString() {
    return `translate(${this.x},${this.y})`;
  }
  /**
   * Adds another translation to this one.
   * @param delta The translation to add
   */
  plus(delta) {
    this.x += delta.x;
    this.y += delta.y;
  }
  /**
   * Multiplies the translation by a scaling factor.
   * @param factor The scaling factor to apply
   */
  times(factor) {
    this.x *= factor;
    this.y *= factor;
  }
  /**
   * Calculates the length (magnitude) of the translation vector.
   * @returns The length of the translation vector
   */
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  /**
   * Normalizes the translation vector to unit length.
   */
  normalize() {
    if (this.Length === 0) {
      return;
    }
    this.times(1 / this.length());
  }
  /**
   * Creates an inverted version of this translation transformation.
   * @returns A new Translation with inverted offsets
   */
  invert() {
    return new _Translation(-this.x, -this.y);
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/svg/CompositeTransform.js
var CompositeTransform = class _CompositeTransform {
  /**
   * Creates a new CompositeTransform instance.
   * @param x The x translation offset
   * @param y The y translation offset
   * @param scaleX The x scaling factor
   * @param scaleY The y scaling factor
   * @param angle The rotation angle in radians
   * @param center The center point for rotation
   */
  constructor(x, y, scaleX, scaleY, angle, center) {
    this.translate = new Translation(x, y);
    if (scaleX !== void 0 && scaleY !== void 0) {
      this.scale = new Scale(scaleX, scaleY);
    }
    if (angle !== void 0) {
      this.rotate = center ? new Rotation(angle, center.x, center.y) : new Rotation(angle);
    }
  }
  /**
   * Returns a string representation of the composite transformation.
   * @returns String representation of all transformations
   */
  toString() {
    const toString = function(transform) {
      return transform ? transform.toString() : "";
    };
    return toString(this.translate) + toString(this.rotate) + toString(this.scale);
  }
  /**
   * Renders the transformation by applying it to a visual element.
   * @param visual The visual element to apply the transformation to
   */
  render(visual) {
    visual._transform = this;
    visual._renderTransform();
  }
  /**
   * Converts the composite transformation to a matrix representation.
   * @returns A matrix representing the combined transformations
   */
  toMatrix() {
    let m = Matrix.unit();
    if (this.translate) {
      m = m.times(this.translate.toMatrix());
    }
    if (this.rotate) {
      m = m.times(this.rotate.toMatrix());
    }
    if (this.scale) {
      m = m.times(this.scale.toMatrix());
    }
    return m;
  }
  /**
   * Creates an inverted version of this composite transformation.
   * @returns A new CompositeTransform that represents the inverse transformation
   */
  invert() {
    const rotate = this.rotate ? this.rotate.invert() : void 0, rotateMatrix = rotate ? rotate.toMatrix() : Matrix.unit(), scale = this.scale ? this.scale.invert() : void 0, scaleMatrix = scale ? scale.toMatrix() : Matrix.unit();
    let translatePoint = new Point(-this.translate.x, -this.translate.y);
    translatePoint = rotateMatrix.times(scaleMatrix).apply(translatePoint);
    const translate2 = new Translation(translatePoint.x, translatePoint.y);
    const transform = new _CompositeTransform();
    transform.translate = translate2;
    transform.rotate = rotate;
    transform.scale = scale;
    return transform;
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/svg/diffNumericOptions.js
function diffNumericOptions(options, fields) {
  const elementOptions = this.options;
  let hasChanges = false;
  let value, field;
  for (let i = 0; i < fields.length; i++) {
    field = fields[i];
    value = options[field];
    if (isNumber(value) && elementOptions[field] !== value) {
      elementOptions[field] = value;
      hasChanges = true;
    }
  }
  return hasChanges;
}

// node_modules/@progress/kendo-diagram-common/dist/es/svg/Element.js
var Element = class {
  /**
   * Creates a new Element instance.
   * @param options Configuration options for the element
   */
  constructor(options) {
    this.options = deepExtend({}, this.options, options);
    this.id = this.options.id;
    this._originSize = Rect.empty();
    this._transform = new CompositeTransform();
  }
  /**
   * Gets or sets the visibility of the element.
   * @param value The visibility value to set, or undefined to get current visibility
   * @returns The current visibility state when called as getter
   */
  visible(value) {
    return this.drawingContainer().visible(value);
  }
  /**
   * Redraws the element with updated options.
   * @param options New options to apply to the element
   */
  redraw(options) {
    if (options && options.id) {
      this.id = options.id;
    }
  }
  /**
   * Gets or sets the position of the element.
   * @param x The x coordinate or Point object, or undefined to get current position
   * @param y The y coordinate when x is a number
   * @returns The current position as a Point when called as getter
   */
  position(x, y) {
    const options = this.options;
    if (!defined(x)) {
      return new Point(options.x, options.y);
    }
    if (defined(y)) {
      options.x = x;
      options.y = y;
    } else if (x instanceof Point) {
      options.x = x.x;
      options.y = x.y;
    }
    this._transform.translate = new Translation(options.x, options.y);
    this._renderTransform();
  }
  /**
   * Gets or sets the rotation of the element.
   * @param angle The rotation angle in radians, or undefined to get current rotation
   * @param center The center point for rotation
   * @returns The current rotation when called as getter
   */
  rotate(angle, center) {
    if (defined(angle)) {
      this._transform.rotate = new Rotation(angle, center.x, center.y);
      this._renderTransform();
    }
    return this._transform.rotate || Rotation.ZERO;
  }
  /**
   * Gets the drawing container for this element.
   * @returns The drawing element container
   */
  drawingContainer() {
    return this.drawingElement;
  }
  /** @hidden */
  _renderTransform() {
    const matrix = this._transform.toMatrix();
    this.drawingContainer().transform(new geometry_exports.Matrix(matrix.a, matrix.b, matrix.c, matrix.d, matrix.e, matrix.f));
  }
  /** @hidden */
  _hover() {
  }
  /** @hidden */
  _diffNumericOptions(options, fields) {
    return diffNumericOptions.call(this, options, fields);
  }
  /** @hidden */
  _measure(force) {
    let rect;
    if (!this._measured || force) {
      const box = this._boundingBox() || new geometry_exports.Rect([0, 0], [0, 0]);
      const startPoint = box.topLeft();
      rect = new Rect(startPoint.x, startPoint.y, box.width(), box.height());
      this._originSize = rect;
      this._originWidth = rect.width;
      this._originHeight = rect.height;
      this._measured = true;
    } else {
      rect = this._originSize;
    }
    return rect;
  }
  /** @hidden */
  _boundingBox() {
    return this.drawingElement.rawBBox();
  }
  /** @hidden */
  _initAccessibility() {
    const accessibility = this.options.accessibility;
    if (accessibility) {
      this.drawingElement.options.set("role", accessibility.role);
      this.drawingElement.options.set("ariaRoleDescription", accessibility.ariaRoleDescription);
      this.drawingElement.options.set("ariaLabel", accessibility.ariaLabel);
      this.drawingElement.options.set("id", this.options.id);
    }
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/svg/utils.js
function sizeOptionsOrDefault(options) {
  return {
    x: options.x || 0,
    y: options.y || 0,
    width: options.width || 0,
    height: options.height || 0
  };
}
function normalizeDrawingOptions(options) {
  if (options) {
    let drawingOptions = options;
    if (isString(drawingOptions)) {
      drawingOptions = {
        color: drawingOptions
      };
    }
    if (drawingOptions.color) {
      drawingOptions.color = getColor(drawingOptions.color);
    }
    return drawingOptions;
  }
}
function getColor(value) {
  let color;
  if (value !== TRANSPARENT) {
    color = new color_default(value).toHex();
  } else {
    color = value;
  }
  return color;
}
function lineAngle(p1, p2) {
  const xDiff = p2.x - p1.x;
  const yDiff = p2.y - p1.y;
  const angle = drawing_exports.util.deg(Math.atan2(yDiff, xDiff));
  return angle;
}
function createSegment(x, y) {
  return new geometry_exports.Segment(new geometry_exports.Point(x, y));
}
function toDrawingRect(rect) {
  if (rect) {
    return new geometry_exports.Rect([rect.x, rect.y], [rect.width, rect.height]);
  }
}
function removeChildren(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}
function getSpacing(value, defaultSpacing = 0) {
  const spacing = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
  if (typeof value === "number") {
    spacing.top = spacing.right = spacing.bottom = spacing.left = value;
  } else {
    spacing.top = value.top || defaultSpacing;
    spacing.right = value.right || defaultSpacing;
    spacing.bottom = value.bottom || defaultSpacing;
    spacing.left = value.left || defaultSpacing;
  }
  return spacing;
}
var drawRoundedPolygon = (path, points, r) => {
  const n = points.length;
  for (let i = 0; i < n; i++) {
    const prev = points[(i + n - 1) % n];
    const curr = points[i];
    const next = points[(i + 1) % n];
    const cornerRadius = Array.isArray(r) ? r[i] : r;
    const v1 = {
      x: prev.x - curr.x,
      y: prev.y - curr.y
    };
    const v2 = {
      x: next.x - curr.x,
      y: next.y - curr.y
    };
    const len1 = Math.hypot(v1.x, v1.y);
    const len2 = Math.hypot(v2.x, v2.y);
    const cosPhi = (v1.x * v2.x + v1.y * v2.y) / (len1 * len2);
    const phi = Math.acos(Math.max(-1, Math.min(1, cosPhi)));
    const ds = cornerRadius / Math.tan(phi / 2);
    const dsClamped = Math.min(ds, len1 - 1e-3, len2 - 1e-3);
    const start = {
      x: curr.x + v1.x / len1 * dsClamped,
      y: curr.y + v1.y / len1 * dsClamped
    };
    const end = {
      x: curr.x + v2.x / len2 * dsClamped,
      y: curr.y + v2.y / len2 * dsClamped
    };
    if (i === 0) {
      path.moveTo(start.x, start.y);
    } else {
      path.lineTo(start.x, start.y);
    }
    const cross = v1.x * v2.y - v1.y * v2.x;
    const sweep = cross < 0;
    path.arcTo(
      [end.x, end.y],
      cornerRadius,
      cornerRadius,
      /*largeArc*/
      false,
      sweep
    );
  }
  path.close();
};
var drawPolygon = (path, points) => {
  const n = points.length;
  for (let i = 0; i < n; i++) {
    const point = points[i];
    if (i === 0) {
      path.moveTo(point.x, point.y);
    } else {
      path.lineTo(point.x, point.y);
    }
  }
  path.close();
};
var fitToSize = (drawingElement, width, height, strokeWidth) => {
  const bb = drawingElement.bbox();
  if (!bb.size.width || !bb.size.height) {
    return;
  }
  const targetW = width + strokeWidth;
  const targetH = height + strokeWidth;
  const sx = targetW / bb.size.width;
  const sy = targetH / bb.size.height;
  drawingElement.transform(new geometry_exports.Transformation(new geometry_exports.Matrix(sx, 0, 0, sy, -bb.origin.x * sx, -bb.origin.y * sy)));
};
function inflatePolygon(points, r) {
  const n = points.length;
  const out = [];
  for (let i = 0; i < n; i++) {
    const prev = points[(i + n - 1) % n];
    const curr = points[i];
    const next = points[(i + 1) % n];
    const radius = Array.isArray(r) ? r[i] : r;
    const v1 = {
      x: prev.x - curr.x,
      y: prev.y - curr.y
    };
    const v2 = {
      x: next.x - curr.x,
      y: next.y - curr.y
    };
    const len1 = Math.hypot(v1.x, v1.y);
    const len2 = Math.hypot(v2.x, v2.y);
    const n1 = {
      x: v1.x / len1,
      y: v1.y / len1
    };
    const n2 = {
      x: v2.x / len2,
      y: v2.y / len2
    };
    const phi = Math.acos(Math.max(-1, Math.min(1, n1.x * n2.x + n1.y * n2.y)));
    const delta = radius / Math.sin(phi / 2) - radius;
    let b = {
      x: n1.x + n2.x,
      y: n1.y + n2.y
    };
    const bLen = Math.hypot(b.x, b.y);
    b = {
      x: b.x / bLen,
      y: b.y / bLen
    };
    const outDir = {
      x: -b.x,
      y: -b.y
    };
    out.push({
      x: curr.x + outDir.x * delta,
      y: curr.y + outDir.y * delta
    });
  }
  return out;
}

// node_modules/@progress/kendo-diagram-common/dist/es/svg/VisualBase.js
var defaultOptions = {
  stroke: {
    color: "gray",
    width: 1
  },
  fill: {
    color: TRANSPARENT
  }
};
var VisualBase = class extends Element {
  /**
   * Creates a new VisualBase instance.
   * @param options Configuration options for the visual element
   */
  constructor(options) {
    options = deepExtend({}, defaultOptions, options);
    super(options);
    options = this.options;
    options.fill = normalizeDrawingOptions(options.fill);
    options.stroke = normalizeDrawingOptions(options.stroke);
  }
  /**
   * Sets the fill color and opacity of the visual element.
   * @param color The fill color
   * @param opacity The fill opacity (optional)
   */
  fill(color, opacity) {
    this._fill({
      color: getColor(color),
      opacity
    });
  }
  /**
   * Sets the stroke color, width, and opacity of the visual element.
   * @param color The stroke color
   * @param width The stroke width
   * @param opacity The stroke opacity
   */
  stroke(color, width, opacity) {
    this._stroke({
      color: getColor(color),
      width,
      opacity
    });
  }
  /**
   * Redraws the visual element with updated options.
   * @param options New options to apply to the visual element
   */
  redraw(options) {
    if (options) {
      const stroke = options.stroke;
      const fill = options.fill;
      if (stroke) {
        this._stroke(normalizeDrawingOptions(stroke));
      }
      if (fill) {
        this._fill(normalizeDrawingOptions(fill));
      }
      super.redraw(options);
    }
  }
  /** @hidden */
  _hover(show) {
    const options = this.options;
    const hover = options.hover;
    if (hover && hover.fill) {
      const fill = show ? normalizeDrawingOptions(hover.fill) : options.fill;
      this._setFill(fill);
    }
  }
  /** @hidden */
  _setFill(fill) {
    this.drawingElement.fill(fill.color, fill.opacity);
  }
  /** @hidden */
  _evalStrokeOptions(strokeOptions) {
    const options = this.options;
    deepExtend(options, {
      stroke: strokeOptions
    });
    strokeOptions = options.stroke;
    let stroke = null;
    if (strokeOptions.width > 0) {
      stroke = {
        color: strokeOptions.color,
        width: strokeOptions.width,
        opacity: strokeOptions.opacity,
        dashType: strokeOptions.dashType
      };
    }
    return stroke;
  }
  /** @hidden */
  _evalFillOptions(fillOptions) {
    const options = this.options;
    deepExtend(options, {
      fill: fillOptions || {}
    });
    return options.fill;
  }
  /** @hidden */
  _stroke(strokeOptions) {
    const stroke = this._evalStrokeOptions(strokeOptions);
    this.drawingElement.options.set("stroke", stroke);
  }
  /** @hidden */
  _fill(fillOptions) {
    const fill = this._evalFillOptions(fillOptions);
    if (fill.gradient) {
      const gradient = fill.gradient;
      const GradientClass = gradient.type === "radial" ? drawing_exports.RadialGradient : drawing_exports.LinearGradient;
      this.drawingElement.fill(new GradientClass(gradient));
    } else {
      this.drawingElement.fill(fill.color, fill.opacity);
    }
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/svg/MarkerBase.js
var defaultOptions2 = {
  stroke: {
    color: TRANSPARENT,
    width: 0
  },
  fill: {
    color: "black"
  }
};
var MarkerBase = class extends VisualBase {
  /**
   * Creates a new MarkerBase instance.
   * @param options Configuration options for the marker
   */
  constructor(options) {
    options = deepExtend({}, defaultOptions2, options);
    super(options);
    const anchor = this.options.anchor || {};
    this.anchor = new geometry_exports.Point(anchor.x, anchor.y);
    this.createElement();
  }
  /**
   * Creates the drawing element for the marker. Should be overridden by subclasses.
   */
  createElement() {
  }
  /** @hidden */
  _transformToPath(point, path) {
    const transform = path.transform();
    if (point && transform) {
      point = point.transformCopy(transform);
    }
    return point;
  }
  /**
   * Redraws the marker with updated options.
   * @param options New options to apply to the marker
   */
  redraw(options) {
    if (options) {
      if (options.position) {
        this.options.position = options.position;
      }
      super.redraw(options);
    }
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/svg/ArrowMarker.js
var defaultArrowOptions = {
  path: "M 0 0 L 10 5 L 0 10 L 3 5 z",
  anchor: {
    x: 10,
    y: 5
  }
};
var ArrowMarker = class extends MarkerBase {
  /**
   * Creates a new ArrowMarker instance.
   * @param options Configuration options for the arrow marker
   */
  constructor(options) {
    options = deepExtend({}, defaultArrowOptions, options);
    super(options);
  }
  /**
   * Creates the drawing element for the arrow marker.
   */
  createElement() {
    const options = this.options;
    this.drawingElement = drawing_exports.Path.parse(options.path, {
      fill: options.fill,
      stroke: options.stroke
    });
  }
  /**
   * Positions the arrow marker on the specified path.
   * @param path The path on which to position the arrow marker
   */
  positionMarker(path) {
    const points = this._linePoints(path);
    const start = points.start;
    const end = points.end;
    const transform = geometry_exports.transform();
    if (start) {
      transform.rotate(lineAngle(start, end), end);
    }
    if (end) {
      const anchor = this.anchor;
      const translate2 = end.clone().translate(-anchor.x, -anchor.y);
      transform.translate(translate2.x, translate2.y);
    }
    this.drawingElement.transform(transform);
  }
  /** @hidden */
  _linePoints(path) {
    const options = this.options;
    const segments = path.segments;
    let startPoint, endPoint, targetSegment;
    if (options.position === START) {
      targetSegment = segments[0];
      if (targetSegment) {
        endPoint = targetSegment.anchor();
        startPoint = targetSegment.controlOut();
        const nextSegment = segments[1];
        if (!startPoint && nextSegment) {
          startPoint = nextSegment.anchor();
        }
      }
    } else {
      targetSegment = segments[segments.length - 1];
      if (targetSegment) {
        endPoint = targetSegment.anchor();
        startPoint = targetSegment.controlIn();
        const prevSegment = segments[segments.length - 2];
        if (!startPoint && prevSegment) {
          startPoint = prevSegment.anchor();
        }
      }
    }
    if (endPoint) {
      return {
        start: this._transformToPath(startPoint, path),
        end: this._transformToPath(endPoint, path)
      };
    }
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/svg/Canvas.js
var Canvas = class {
  /**
   * Creates a new Canvas instance.
   * @param element The HTML element to attach the canvas to
   * @param options Configuration options for the canvas
   */
  constructor(element, options) {
    this._translate = (x, y) => {
      const viewBox = this._viewBox;
      if (defined(x) && defined(y)) {
        viewBox.x = x;
        viewBox.y = y;
        this.surface.translate({
          x,
          y
        });
      }
      return {
        x: viewBox.x,
        y: viewBox.y
      };
    };
    this.element = element;
    this.surface = drawing_exports.Surface.create(element, options);
    if (isFunction(this.surface.translate)) {
      this.translate = this._translate;
    }
    this.drawingElement = new drawing_exports.Group();
    this._viewBox = new Rect(0, 0, options.width, options.height);
    this.size(this._viewBox);
  }
  /**
   * Gets the bounding box of all drawing elements on the canvas.
   * @returns A rectangle representing the bounds of the canvas content
   */
  bounds() {
    const box = this.drawingElement.clippedBBox();
    return new Rect(0, 0, box.width(), box.height());
  }
  /**
   * Gets or sets the size of the canvas.
   * @param size The size to set, or undefined to get current size
   * @returns The current size when called as getter
   */
  size(size) {
    const viewBox = this._viewBox;
    if (defined(size)) {
      viewBox.width = size.width;
      viewBox.height = size.height;
      this.surface.setSize(size);
    }
    return {
      width: viewBox.width,
      height: viewBox.height
    };
  }
  /**
   * Draws all visual elements to the canvas surface.
   */
  draw() {
    this.surface.draw(this.drawingElement);
  }
  /**
   * Appends a visual element to the canvas.
   * @param visual The visual element to append
   * @returns The canvas instance for method chaining
   */
  append(visual) {
    this.drawingElement.append(visual.drawingContainer());
    return this;
  }
  /**
   * Removes a visual element from the canvas.
   * @param visual The visual element to remove
   */
  remove(visual) {
    this.drawingElement.remove(visual.drawingContainer());
  }
  /**
   * Inserts a visual element before another element (currently not implemented).
   */
  insertBefore() {
  }
  /**
   * Clears all visual elements from the canvas.
   */
  clear() {
    this.drawingElement.clear();
  }
  /**
   * Destroys the canvas and optionally removes the HTML element.
   * @param clearHtml Whether to remove the HTML element from the DOM
   */
  destroy(clearHtml) {
    this.surface.destroy();
    if (clearHtml) {
      removeChildren(this.element);
      this.element.remove();
    }
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/svg/AutoSizeableMixin.js
var AutoSizeableMixin = {
  /**
   * @hidden
   * Sets the scale transformation based on the difference between original and target dimensions.
   */
  _setScale: function() {
    const options = this.options;
    const originWidth = this._originWidth;
    const originHeight = this._originHeight;
    let scaleX = options.width / originWidth;
    let scaleY = options.height / originHeight;
    if (!isNumber(scaleX)) {
      scaleX = 1;
    }
    if (!isNumber(scaleY)) {
      scaleY = 1;
    }
    this._transform.scale = new Scale(scaleX, scaleY);
  },
  /**
   * @hidden
   * Sets the translation transformation based on x and y position options.
   */
  _setTranslate: function() {
    const options = this.options;
    const x = options.x || 0;
    const y = options.y || 0;
    this._transform.translate = new Translation(x, y);
  },
  /**
   * @hidden
   * Initializes the element size by setting up scaling and translation transforms.
   */
  _initSize: function() {
    const options = this.options;
    let transform = false;
    if (options.autoSize !== false && (isDefined(options.width) || isDefined(options.height))) {
      this._measure(true);
      this._setScale();
      transform = true;
    }
    if (isDefined(options.x) || isDefined(options.y)) {
      this._setTranslate();
      transform = true;
    }
    if (transform) {
      this._renderTransform();
    }
  },
  /**
   * @hidden
   * Updates the element size and position based on new options.
   * @param options - The new options to apply
   * @returns True if the element was updated, false otherwise
   */
  _updateSize: function(options) {
    let update = false;
    if (this.options.autoSize !== false && this._diffNumericOptions(options, [WIDTH, HEIGHT])) {
      update = true;
      this._measure(true);
      this._setScale();
    }
    if (this._diffNumericOptions(options, [X, Y])) {
      update = true;
      this._setTranslate();
    }
    if (update) {
      this._renderTransform();
    }
    return update;
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/svg/Circle.js
var Circle = class extends VisualBase {
  /**
   * Creates a new Circle instance.
   * @param options Configuration options for the circle
   */
  constructor(options) {
    super(options);
    this._setScale = AutoSizeableMixin._setScale.bind(this);
    this._setTranslate = AutoSizeableMixin._setTranslate.bind(this);
    this._initSize = AutoSizeableMixin._initSize.bind(this);
    this._updateSize = AutoSizeableMixin._updateSize.bind(this);
    this._initCircle();
    this._initSize();
    this._initAccessibility();
  }
  /**
   * Redraws the circle with updated options.
   * @param options New options to apply to the circle
   */
  redraw(options) {
    if (options) {
      const circleOptions = this.options;
      if (options.center) {
        deepExtend(circleOptions, {
          center: options.center
        });
        this._center.move(circleOptions.center.x, circleOptions.center.y);
      }
      if (this._diffNumericOptions(options, ["radius"])) {
        this._circle.setRadius(circleOptions.radius);
      }
      this._updateSize(options);
      super.redraw.call(this, options);
    }
  }
  /** @hidden */
  _initCircle() {
    const options = this.options;
    let width = options.width;
    let height = options.height;
    let radius = options.radius;
    if (!defined(radius)) {
      if (!defined(width)) {
        width = height;
      }
      if (!defined(height)) {
        height = width;
      }
      options.radius = radius = Math.min(width, height) / 2;
    }
    const center = options.center || {
      x: radius,
      y: radius
    };
    this._center = new geometry_exports.Point(center.x, center.y);
    this._circle = new geometry_exports.Circle(this._center, radius);
    this.drawingElement = new drawing_exports.Circle(this._circle, {
      stroke: options.stroke,
      id: options.id
    });
    this._fill();
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/svg/CircleMarker.js
var defaultOptions3 = {
  radius: 4,
  anchor: {
    x: 0,
    y: 0
  }
};
var CircleMarker = class extends MarkerBase {
  /**
   * Creates a new CircleMarker instance.
   * @param options Configuration options for the circle marker
   */
  constructor(options) {
    options = deepExtend({}, defaultOptions3, options);
    super(options);
  }
  /**
   * Creates the drawing element for the circle marker.
   */
  createElement() {
    const options = this.options;
    this.drawingElement = new drawing_exports.Circle(new geometry_exports.Circle(this.anchor, options.radius), {
      fill: options.fill,
      stroke: options.stroke
    });
  }
  /**
   * Positions the circle marker on the specified path.
   * @param path The path on which to position the circle marker
   */
  positionMarker(path) {
    const options = this.options;
    const position = options.position;
    const segments = path.segments;
    let targetSegment;
    let point;
    if (position === START) {
      targetSegment = segments[0];
    } else {
      targetSegment = segments[segments.length - 1];
    }
    if (targetSegment) {
      point = this._transformToPath(targetSegment.anchor(), path);
      this.drawingElement.transform(geometry_exports.transform().translate(point.x, point.y));
    }
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/svg/Rectangle.js
var Rectangle = class extends VisualBase {
  /**
   * Creates a new Rectangle instance.
   * @param options Configuration options for the rectangle
   */
  constructor(options) {
    super(options);
    this._initPath();
    this._setPosition();
    this._initAccessibility();
  }
  /** @hidden */
  _setPosition() {
    const options = this.options;
    const x = options.x;
    const y = options.y;
    if (defined(x) || defined(y)) {
      this.position(x || 0, y || 0);
    }
  }
  /**
   * Redraws the rectangle with updated options.
   * @param options New options to apply to the rectangle
   */
  redraw(options) {
    if (options) {
      super.redraw(options);
      if (this._diffNumericOptions(options, [WIDTH, HEIGHT])) {
        this._drawPath();
      }
      if (this._diffNumericOptions(options, [X, Y])) {
        this._setPosition();
      }
    }
  }
  /** @hidden */
  _initPath() {
    const options = this.options;
    this.drawingElement = new drawing_exports.Path({
      stroke: options.stroke,
      id: options.id
    });
    this._fill();
    this._drawPath();
  }
  /** @hidden */
  _drawPath() {
    const {
      width,
      height
    } = sizeOptionsOrDefault(this.options);
    const drawingElement = this.drawingElement;
    const points = [{
      x: 0,
      y: 0
    }, {
      x: width,
      y: 0
    }, {
      x: width,
      y: height
    }, {
      x: 0,
      y: height
    }];
    if (this.options.cornerRadius > 0) {
      drawRoundedPolygon(drawingElement, points, this.options.cornerRadius);
    } else {
      drawPolygon(drawingElement, points);
    }
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/svg/MultiPathShape.js
var MultiPathShape = class extends Rectangle {
  /** @hidden */
  _initPath() {
    const options = this.options;
    this.drawingElement = new drawing_exports.MultiPath({
      stroke: options.stroke,
      id: options.id
    });
    this._fill();
    this._drawPath();
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/svg/Collate.js
var defaultOptions4 = {
  shapesOffsetRatio: 0.025
};
var Collate = class extends MultiPathShape {
  /**
   * Creates a new Collate instance.
   * @param options - Configuration options for the collate shape
   */
  constructor(options) {
    super(__spreadValues(__spreadValues({}, defaultOptions4), options));
  }
  /**
   * @hidden
   * Draws the collate shape path as two triangular shapes forming an hourglass.
   */
  _drawPath() {
    const drawingElement = this.drawingElement;
    const {
      width,
      height
    } = sizeOptionsOrDefault(this.options);
    const cornerRadius = this.options.cornerRadius;
    const strokeWidth = this.options.stroke.width || 0;
    const shapesOffset = height * this.options.shapesOffsetRatio - cornerRadius / 2;
    const halfWidth = width / 2;
    const halfHeight = height / 2;
    const firstShape = [{
      x: halfWidth,
      y: halfHeight - shapesOffset
    }, {
      x: 0,
      y: 0
    }, {
      x: width,
      y: 0
    }];
    drawRoundedPolygon(drawingElement, firstShape, [cornerRadius / 3, cornerRadius, cornerRadius]);
    const secondShape = [{
      x: halfWidth,
      y: halfHeight + shapesOffset
    }, {
      x: width,
      y: height
    }, {
      x: 0,
      y: height
    }];
    drawRoundedPolygon(drawingElement, secondShape, [cornerRadius / 3, cornerRadius, cornerRadius]);
    fitToSize(drawingElement, width, height, strokeWidth);
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/svg/OnPageConnector.js
var OnPageConnector = class extends Rectangle {
  /**
   * @hidden
   * Draws the on-page connector shape path as a circle with arcs.
   */
  _drawPath() {
    const drawingElement = this.drawingElement;
    const {
      width,
      height
    } = sizeOptionsOrDefault(this.options);
    const centerX = width / 2;
    const radius = Math.min(width, height) / 2;
    drawingElement.moveTo([centerX, 0]).arcTo([centerX, height], radius, radius, false, true).arcTo([centerX, 0], radius, radius, false, true);
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/svg/DataInputOutput.js
var defaultOptions5 = {
  slantRatio: 0.15
};
var DataInputOutput = class extends Rectangle {
  /**
   * Creates a new DataInputOutput instance.
   * @param options - Configuration options for the data input/output shape
   */
  constructor(options) {
    super(__spreadValues(__spreadValues({}, defaultOptions5), options));
  }
  /**
   * @hidden
   * Draws the data input/output shape path as a parallelogram.
   */
  _drawPath() {
    const drawingElement = this.drawingElement;
    const {
      width,
      height
    } = sizeOptionsOrDefault(this.options);
    const strokeWidth = this.options.stroke.width || 0;
    const {
      slantRatio,
      cornerRadius
    } = this.options;
    const slant = width * slantRatio;
    const points = [{
      x: slant,
      y: 0
    }, {
      x: width,
      y: 0
    }, {
      x: width - slant,
      y: height
    }, {
      x: 0,
      y: height
    }];
    drawRoundedPolygon(drawingElement, points, cornerRadius);
    fitToSize(drawingElement, width, height, strokeWidth);
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/svg/Database.js
var defaultOptions6 = {
  ellipseRxRatio: 0.5,
  ellipseRyRatio: 0.2
};
var Database = class extends Rectangle {
  /**
   * Creates a new Database instance.
   * @param options Configuration options for the database shape
   */
  constructor(options) {
    super(__spreadValues(__spreadValues({}, defaultOptions6), options));
  }
  /** @hidden */
  _drawPath() {
    const drawingElement = this.drawingElement;
    const {
      width,
      height
    } = sizeOptionsOrDefault(this.options);
    const strokeWidth = this.options.stroke.width || 0;
    const rx = width * this.options.ellipseRxRatio;
    const ellipseRY = height * this.options.ellipseRyRatio;
    const cy = ellipseRY;
    const ry = ellipseRY;
    drawingElement.moveTo([width, cy]).arcTo([0, cy], rx, ry, false, true).arcTo([width, cy], rx, ry, false, true).lineTo([width, height]).arcTo([0, height], rx, ry, false, true).lineTo([0, cy]);
    fitToSize(this.drawingElement, width, height, strokeWidth);
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/svg/DataStorage.js
var defaultOptions7 = {
  ellipseRadiusXRatio: 0.165,
  ellipseRadiusYRatio: 0.5
};
var DataStorage = class extends MultiPathShape {
  /**
   * Creates a new DataStorage instance.
   * @param options Configuration options for the data storage shape
   */
  constructor(options) {
    super(__spreadValues(__spreadValues({}, defaultOptions7), options));
  }
  /** @hidden */
  _drawPath() {
    const drawingElement = this.drawingElement;
    const {
      width,
      height
    } = sizeOptionsOrDefault(this.options);
    const ellipseRX = width * this.options.ellipseRadiusXRatio;
    const rx = ellipseRX;
    const ry = height * this.options.ellipseRadiusYRatio;
    const leftCx = ellipseRX;
    drawingElement.moveTo(leftCx, 0).lineTo(width, 0).arc(270, 90, rx, ry, true).lineTo(leftCx, height).arcTo([leftCx, 0], rx, ry, false, true).close();
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/svg/Decision.js
var Decision = class extends Rectangle {
  /** @hidden */
  _drawPath() {
    const drawingElement = this.drawingElement;
    const {
      width,
      height
    } = sizeOptionsOrDefault(this.options);
    const strokeWidth = this.options.stroke.width || 0;
    const points = [{
      x: 0,
      y: height / 2
    }, {
      x: width / 2,
      y: 0
    }, {
      x: width,
      y: height / 2
    }, {
      x: width / 2,
      y: height
    }];
    const inflated = inflatePolygon(points, this.options.cornerRadius);
    drawRoundedPolygon(drawingElement, inflated, this.options.cornerRadius);
    fitToSize(drawingElement, width, height, strokeWidth);
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/svg/Delay.js
var defaultOptions8 = {
  arcRadiusXRatio: 0.17,
  arcRadiusYRatio: 0.3
};
var Delay = class extends Rectangle {
  /**
   * Creates a new Delay instance.
   * @param options Configuration options for the delay shape
   */
  constructor(options) {
    super(__spreadValues(__spreadValues({}, defaultOptions8), options));
  }
  /** @hidden */
  _drawPath() {
    const drawingElement = this.drawingElement;
    const {
      width,
      height
    } = sizeOptionsOrDefault(this.options);
    const strokeWidth = this.options.stroke.width || 0;
    const {
      arcRadiusXRatio,
      arcRadiusYRatio,
      cornerRadius
    } = this.options;
    const arcRadiusX = width * arcRadiusXRatio;
    const arcRadiusY = height * arcRadiusYRatio;
    drawingElement.moveTo([0, cornerRadius]).arcTo([cornerRadius, 0], cornerRadius, cornerRadius, true, false).lineTo([width - arcRadiusX, 0]).arcTo([width - arcRadiusX, height], arcRadiusX, arcRadiusY, false, false).lineTo([cornerRadius, height]).arcTo([0, height - cornerRadius], cornerRadius, cornerRadius, true, false).close();
    fitToSize(this.drawingElement, width, height, strokeWidth);
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/svg/DirectAccessStorage.js
var defaultOptions9 = {
  ellipseRatio: 0.1407
};
var DirectAccessStorage = class extends Rectangle {
  /**
   * Creates a new DirectAccessStorage instance.
   * @param options - Configuration options for the direct access storage shape
   */
  constructor(options) {
    super(__spreadValues(__spreadValues({}, defaultOptions9), options));
  }
  /**
   * @hidden
   * Draws the direct access storage shape path as a rounded rectangle with elliptical ends.
   */
  _drawPath() {
    const drawingElement = this.drawingElement;
    const {
      width,
      height
    } = sizeOptionsOrDefault(this.options);
    const ellipseRX = width * this.options.ellipseRatio;
    const cx = ellipseRX;
    const rx = ellipseRX;
    const ry = height / 2;
    drawingElement.moveTo([width - cx, height]).arcTo([width - cx, 0], rx, ry, false, true).arcTo([width - cx, height], rx, ry, false, true).lineTo([cx, height]).arcTo([cx, 0], rx, ry, false, true).lineTo([width - cx, 0]);
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/svg/Display.js
var defaultOptions10 = {
  sideCutRatio: 0.35,
  arcRadiusYRatio: 0.3,
  arcRadiusXRatio: 0.08
};
var Display = class extends Rectangle {
  /**
   * Creates a new Display instance.
   * @param options Configuration options for the display shape
   */
  constructor(options) {
    super(__spreadValues(__spreadValues({}, defaultOptions10), options));
  }
  /** @hidden */
  _drawPath() {
    const drawingElement = this.drawingElement;
    const {
      width,
      height
    } = sizeOptionsOrDefault(this.options);
    const strokeWidth = this.options.stroke.width || 0;
    const arcRadiusY = height * this.options.arcRadiusYRatio;
    const arcRadiusX = width * this.options.arcRadiusXRatio;
    const arcStartX = width - arcRadiusX;
    const cut = width * this.options.sideCutRatio;
    drawingElement.moveTo([cut, 0]).lineTo([arcStartX, 0]).arcTo([arcStartX, height], arcRadiusX, arcRadiusY, false, true).lineTo([arcStartX, height]).lineTo([cut, height]).lineTo([0, height / 2]).close();
    fitToSize(this.drawingElement, width, height, strokeWidth);
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/svg/Documents.js
var cp1XRatio = 5 / 6;
var cp2XRatio = 1 / 6;
var docDefaultOptions = {
  waveRatio: 0.37
};
var multyDocsDefaultOptions = __spreadProps(__spreadValues({}, docDefaultOptions), {
  docsXRatio: 0.14,
  docsYRatio: 0.2
});
var drawDocument = (drawingElement, origin, width, height, waveRatio, cornerRadius) => {
  const amplitude = height * waveRatio;
  drawingElement.moveTo(origin[0] + width, origin[1] + height).curveTo([origin[0] + width, origin[1] + height], [origin[0] + width * cp1XRatio, origin[1] + height - amplitude], [origin[0] + width / 2, origin[1] + height]).curveTo([origin[0] + width * cp2XRatio, origin[1] + height + amplitude], [origin[0], origin[1] + height], [origin[0], origin[1] + height]).lineTo(origin[0], origin[1] + cornerRadius).arcTo([origin[0] + cornerRadius, origin[1]], cornerRadius, cornerRadius, true, false).lineTo(origin[0] + width - cornerRadius, origin[1]).arcTo([origin[0] + width, origin[1] + cornerRadius], cornerRadius, cornerRadius, true, false).lineTo(origin[0] + width, origin[1] + height).close();
};
var Document = class extends Rectangle {
  /**
   * Creates a new Document instance.
   * @param options - Configuration options for the document shape
   */
  constructor(options) {
    super(__spreadValues(__spreadValues({}, docDefaultOptions), options));
  }
  /**
   * @hidden
   * Draws the document shape path with a wavy bottom edge.
   */
  _drawPath() {
    const {
      width,
      height
    } = sizeOptionsOrDefault(this.options);
    const strokeWidth = this.options.stroke.width || 0;
    const {
      waveRatio,
      cornerRadius
    } = this.options;
    const halfAmplitude = height * waveRatio * 0.5;
    drawDocument(this.drawingElement, [0, 0], width, height - halfAmplitude, waveRatio, cornerRadius);
    fitToSize(this.drawingElement, width, height, strokeWidth);
  }
};
var MultipleDocuments = class extends Document {
  /**
   * Creates a new MultipleDocuments instance.
   * @param options - Configuration options for the multiple documents shape
   */
  constructor(options) {
    super(__spreadValues(__spreadValues({}, multyDocsDefaultOptions), options));
  }
  /**
   * @hidden
   * Initializes the path using a group for multiple document shapes.
   */
  _initPath() {
    this.drawingElement = new drawing_exports.Group({
      id: this.options.id
    });
    this._fill();
    this._drawPath();
  }
  /**
   * @hidden
   * Fills the multiple document shapes with the specified fill options.
   * @param fillOptions - Fill options to apply
   */
  _fill(fillOptions) {
    const fill = this._evalFillOptions(fillOptions);
    if (fill.gradient) {
      const gradient = fill.gradient;
      const GradientClass = gradient.type === "radial" ? drawing_exports.RadialGradient : drawing_exports.LinearGradient;
      this.drawingElement.children.forEach((child) => {
        child.fill(new GradientClass(gradient));
      });
    } else {
      this.drawingElement.children.forEach((child) => {
        child.fill(fill.color, fill.opacity);
      });
    }
  }
  /**
   * @hidden
   * Draws multiple overlapping document shapes.
   */
  _drawPath() {
    const {
      width,
      height
    } = sizeOptionsOrDefault(this.options);
    const strokeWidth = this.options.stroke.width || 0;
    const {
      waveRatio,
      docsXRatio,
      docsYRatio,
      stroke,
      fill,
      cornerRadius
    } = this.options;
    const docOffsetX = width * docsXRatio;
    const docOffsetY = height * docsYRatio;
    const drawingElement = this.drawingElement;
    const path1 = new drawing_exports.MultiPath({
      stroke,
      fill
    });
    const path2 = new drawing_exports.MultiPath({
      stroke,
      fill
    });
    const halfAmplitude = height * waveRatio * 0.5;
    drawDocument(path1, [docOffsetX, 0], width - docOffsetX, height - docOffsetY - halfAmplitude, waveRatio, cornerRadius);
    drawDocument(path2, [0, docOffsetY], width - docOffsetX, height - docOffsetY - halfAmplitude, waveRatio, cornerRadius);
    drawingElement.append(path1);
    drawingElement.append(path2);
    fitToSize(this.drawingElement, width, height, strokeWidth);
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/svg/Terminator.js
var Terminator = class extends Rectangle {
  /** @hidden */
  _drawPath() {
    const {
      width,
      height
    } = sizeOptionsOrDefault(this.options);
    const drawingElement = this.drawingElement;
    const r = height / 2;
    drawingElement.moveTo(r, 0).lineTo(width - 2 * r, 0).arcTo([width - 2 * r, height], r, r, false, false).lineTo(r, height).arcTo([r, 0], r, r, false, false).close();
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/svg/Extract.js
var Extract = class extends Rectangle {
  /**
   * @hidden
   * Draws the extract shape path as a triangle.
   */
  _drawPath() {
    const drawingElement = this.drawingElement;
    const {
      width,
      height
    } = sizeOptionsOrDefault(this.options);
    const strokeWidth = this.options.stroke.width || 0;
    const r = this.options.cornerRadius || 0;
    const points = [{
      x: width / 2,
      y: 0
    }, {
      x: width,
      y: height
    }, {
      x: 0,
      y: height
    }];
    const inflated = inflatePolygon(points, r);
    drawRoundedPolygon(drawingElement, inflated, r);
    fitToSize(drawingElement, width, height, strokeWidth);
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/svg/Group.js
var Group = class extends Element {
  /**
   * Creates a new Group instance.
   * @param options Configuration options for the group
   */
  constructor(options) {
    options = deepExtend({
      autoSize: false
    }, options);
    super(options);
    this.children = [];
    this._childrenChange = false;
    this._setScale = AutoSizeableMixin._setScale.bind(this);
    this._setTranslate = AutoSizeableMixin._setTranslate.bind(this);
    this._initSize = AutoSizeableMixin._initSize.bind(this);
    this._updateSize = AutoSizeableMixin._updateSize.bind(this);
    this.drawingElement = new drawing_exports.Group();
    this._initSize();
  }
  /**
   * Appends a visual element to this group.
   * @param visual The visual element to append to the group
   */
  append(visual) {
    this.drawingElement.append(visual.drawingContainer());
    this.children.push(visual);
    this._childrenChange = true;
  }
  /**
   * Removes a visual element from this group.
   * @param visual The visual element to remove from the group
   */
  remove(visual) {
    if (this._remove(visual)) {
      this._childrenChange = true;
    }
  }
  /** @hidden */
  _remove(visual) {
    const index = this.children.indexOf(visual);
    if (index >= 0) {
      this.drawingElement.removeAt(index);
      this.children.splice(index, 1);
      return true;
    }
  }
  /**
   * Removes all child visual elements from this group.
   */
  clear() {
    this.drawingElement.clear();
    this.children = [];
    this._childrenChange = true;
  }
  /**
   * Moves the specified visual elements to the front of the display order.
   * @param visuals Array of visual elements to move to front
   */
  toFront(visuals) {
    let visual;
    for (let i = 0; i < visuals.length; i++) {
      visual = visuals[i];
      if (this._remove(visual)) {
        this.append(visual);
      }
    }
  }
  // TO DO: add drawing group support for moving and inserting children
  /**
   * Moves the specified visual elements to the back of the display order.
   * @param visuals Array of visual elements to move to back
   */
  toBack(visuals) {
    this._reorderChildren(visuals, 0);
  }
  /**
   * Moves the specified visual elements to specific indices in the display order.
   * @param visuals Array of visual elements to reorder
   * @param indices Target indices for the visual elements
   */
  toIndex(visuals, indices) {
    this._reorderChildren(visuals, indices);
  }
  /** @hidden */
  _reorderChildren(visuals, indices) {
    const group = this.drawingElement;
    const drawingChildren = group.children.slice(0);
    const children = this.children;
    const fixedPosition = isNumber(indices);
    let i, index, toIndex, drawingElement, visual;
    for (i = 0; i < visuals.length; i++) {
      visual = visuals[i];
      drawingElement = visual.drawingContainer();
      index = children.indexOf(visual);
      if (index >= 0) {
        drawingChildren.splice(index, 1);
        children.splice(index, 1);
        toIndex = fixedPosition ? indices : indices[i];
        drawingChildren.splice(toIndex, 0, drawingElement);
        children.splice(toIndex, 0, visual);
      }
    }
    group.clear();
    group.append(...drawingChildren);
  }
  /**
   * Redraws the group with updated options.
   * @param options New options to apply to the group
   */
  redraw(options) {
    if (options) {
      if (this._childrenChange) {
        this._childrenChange = false;
        if (!this._updateSize(options)) {
          this._initSize();
        }
      } else {
        this._updateSize(options);
      }
      super.redraw(options);
    }
  }
  /** @hidden */
  _boundingBox() {
    const children = this.children;
    let boundingBox;
    let visual, childBoundingBox;
    for (let i = 0; i < children.length; i++) {
      visual = children[i];
      if (visual.visible() && visual._includeInBBox !== false) {
        childBoundingBox = visual.drawingContainer().clippedBBox(null);
        if (childBoundingBox) {
          if (boundingBox) {
            boundingBox = geometry_exports.Rect.union(boundingBox, childBoundingBox);
          } else {
            boundingBox = childBoundingBox;
          }
        }
      }
    }
    return boundingBox;
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/svg/Image.js
var Image = class extends Element {
  /**
   * Creates a new Image instance.
   * @param options - Configuration options for the image including source, position, and size
   */
  constructor(options) {
    super(options);
    this._initImage();
    this._initAccessibility();
  }
  /**
   * Redraws the image with updated options.
   * @param options - Updated configuration options
   */
  redraw(options) {
    if (options) {
      if (options.source) {
        this.drawingElement.src(options.source);
      }
      if (this._diffNumericOptions(options, [WIDTH, HEIGHT, X, Y])) {
        this.drawingElement.rect(this._rect());
      }
      super.redraw(options);
    }
  }
  /**
   * @hidden
   * Initializes the image drawing element.
   */
  _initImage() {
    const options = this.options;
    const rect = this._rect();
    this.drawingElement = new drawing_exports.Image(options.source, rect);
    this.drawingElement.options.set("id", options.id);
  }
  /** @hidden */
  _rect() {
    const sizeOptions = sizeOptionsOrDefault(this.options);
    const origin = new geometry_exports.Point(sizeOptions.x, sizeOptions.y);
    const size = new geometry_exports.Size(sizeOptions.width, sizeOptions.height);
    return new geometry_exports.Rect(origin, size);
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/svg/InternalStorage.js
var defaultOptions11 = {
  leftLineOffsetRatio: 0.13,
  topLineOffsetRatio: 0.23
};
var InternalStorage = class extends MultiPathShape {
  /**
   * Creates a new InternalStorage instance.
   * @param options - Configuration options for the internal storage shape
   */
  constructor(options) {
    super(__spreadValues(__spreadValues({}, defaultOptions11), options));
  }
  /**
   * @hidden
   * Draws the internal storage shape path as a rectangle with internal lines.
   */
  _drawPath() {
    const drawingElement = this.drawingElement;
    const {
      width,
      height
    } = sizeOptionsOrDefault(this.options);
    const {
      leftLineOffsetRatio,
      topLineOffsetRatio
    } = this.options;
    const leftLineX = width * leftLineOffsetRatio;
    const topLineOffset = height * topLineOffsetRatio;
    const points = [{
      x: 0,
      y: 0
    }, {
      x: width,
      y: 0
    }, {
      x: width,
      y: height
    }, {
      x: 0,
      y: height
    }];
    drawRoundedPolygon(drawingElement, points, this.options.cornerRadius);
    drawingElement.moveTo(leftLineX, 0).lineTo(leftLineX, height).moveTo(0, topLineOffset).lineTo(width, topLineOffset);
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/svg/Layout.js
var Layout = class extends Group {
  /**
   * Creates a new Layout instance.
   * @param rect The rectangle bounds for the layout
   * @param options Configuration options for the layout
   */
  constructor(rect, options) {
    super(options);
    this.drawingElement = new drawing_exports.Layout(toDrawingRect(rect), options);
    this._initSize();
  }
  /**
   * Gets or sets the rectangle bounds of the layout.
   * @param rect The rectangle bounds to set, or undefined to get current bounds
   * @returns The current rectangle bounds when called as getter
   */
  rect(rect) {
    if (rect) {
      this.drawingElement.rect(toDrawingRect(rect));
    } else {
      const drawingRect = this.drawingElement.rect();
      if (drawingRect) {
        return new Rect(drawingRect.origin.x, drawingRect.origin.y, drawingRect.size.width, drawingRect.size.height);
      }
    }
  }
  /**
   * Triggers a reflow of the layout, recalculating positions and sizes.
   */
  reflow() {
    this.drawingElement.reflow();
  }
  /**
   * Redraws the layout with updated options.
   * @param options New options to apply to the layout
   */
  redraw(options) {
    deepExtend(this.drawingElement.options, options);
    super.redraw.call(this, options);
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/svg/MarkerPathMixin.js
var MarkerPathMixin = {
  /**
   * @hidden
   * Gets the path element for marker positioning.
   * @param position - The marker position (start or end)
   * @returns The path element or undefined
   */
  _getPath: function(position) {
    let path = this.drawingElement;
    if (path instanceof drawing_exports.MultiPath) {
      if (position === START) {
        path = path.paths[0];
      } else {
        path = path.paths[path.paths.length - 1];
      }
    }
    if (path && path.segments.length) {
      return path;
    }
  },
  /**
   * @hidden
   * Normalizes marker options by converting string values to objects.
   * @param options - The options to normalize
   */
  _normalizeMarkerOptions: function(options) {
    const startCap = options.startCap;
    const endCap = options.endCap;
    if (isString(startCap)) {
      options.startCap = {
        type: startCap
      };
    }
    if (isString(endCap)) {
      options.endCap = {
        type: endCap
      };
    }
  },
  /**
   * @hidden
   * Removes a marker from the specified position.
   * @param position - The marker position (start or end)
   */
  _removeMarker: function(position) {
    const marker = this._markers[position];
    if (marker) {
      this.drawingContainer().remove(marker.drawingElement);
      delete this._markers[position];
    }
  },
  /**
   * @hidden
   * Creates markers for both start and end positions.
   */
  _createMarkers: function() {
    const options = this.options;
    this._normalizeMarkerOptions(options);
    this._markers = {};
    this._markers[START] = this._createMarker(options.startCap, START);
    this._markers[END] = this._createMarker(options.endCap, END);
  },
  /**
   * @hidden
   * Creates a marker for the specified position.
   * @param options - Marker configuration options
   * @param position - The marker position (start or end)
   * @returns The created marker instance
   */
  _createMarker: function(options, position) {
    const type = (options || {}).type;
    const path = this._getPath(position);
    let markerType, marker;
    if (!path) {
      this._removeMarker(position);
      return;
    }
    if (type === MarkerType.FilledCircle) {
      markerType = CircleMarker;
    } else if (type === MarkerType.ArrowStart || type === MarkerType.ArrowEnd) {
      markerType = ArrowMarker;
    } else {
      this._removeMarker(position);
    }
    if (markerType) {
      marker = new markerType(deepExtend({}, options, {
        position
      }));
      marker.positionMarker(path);
      this.drawingContainer().append(marker.drawingElement);
      return marker;
    }
  },
  /**
   * @hidden
   * Positions a marker at the specified position along the path.
   * @param position - The marker position (start or end)
   */
  _positionMarker: function(position) {
    const marker = this._markers[position];
    if (marker) {
      const path = this._getPath(position);
      if (path) {
        marker.positionMarker(path);
      } else {
        this._removeMarker(position);
      }
    }
  },
  /**
   * @hidden
   * Mapping of position names to cap option names.
   */
  _capMap: {
    start: "startCap",
    end: "endCap"
  },
  /**
   * @hidden
   * Redraws a marker at the specified position with updated options.
   * @param pathChange - Whether the path has changed
   * @param position - The marker position (start or end)
   * @param options - Updated marker options
   * @returns True if a new marker was created, false otherwise
   */
  _redrawMarker: function(pathChange, position, options) {
    this._normalizeMarkerOptions(options);
    const pathOptions = this.options;
    const cap = this._capMap[position];
    const pathCapType = (pathOptions[cap] || {}).type;
    const optionsCap = options[cap];
    let created = false;
    if (optionsCap) {
      pathOptions[cap] = deepExtend({}, pathOptions[cap], optionsCap);
      if (optionsCap.type && pathCapType !== optionsCap.type) {
        this._removeMarker(position);
        this._markers[position] = this._createMarker(pathOptions[cap], position);
        created = true;
      } else if (this._markers[position]) {
        this._markers[position].redraw(optionsCap);
      }
    } else if (pathChange && !this._markers[position] && pathOptions[cap]) {
      this._markers[position] = this._createMarker(pathOptions[cap], position);
      created = true;
    }
    return created;
  },
  /**
   * @hidden
   * Redraws all markers with updated options.
   * @param pathChange - Whether the path has changed
   * @param options - Updated marker options
   */
  _redrawMarkers: function(pathChange, options) {
    if (!this._redrawMarker(pathChange, START, options) && pathChange) {
      this._positionMarker(START);
    }
    if (!this._redrawMarker(pathChange, END, options) && pathChange) {
      this._positionMarker(END);
    }
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/svg/Line.js
var Line = class extends VisualBase {
  /**
   * Creates a new Line instance.
   * @param options - Configuration options for the line including endpoints and styling
   */
  constructor(options) {
    super(options);
    this._capMap = MarkerPathMixin._capMap;
    this.container = new drawing_exports.Group();
    this._getPath = MarkerPathMixin._getPath.bind(this);
    this._normalizeMarkerOptions = MarkerPathMixin._normalizeMarkerOptions.bind(this);
    this._removeMarker = MarkerPathMixin._removeMarker.bind(this);
    this._createMarkers = MarkerPathMixin._createMarkers.bind(this);
    this._createMarker = MarkerPathMixin._createMarker.bind(this);
    this._positionMarker = MarkerPathMixin._positionMarker.bind(this);
    this._redrawMarker = MarkerPathMixin._redrawMarker.bind(this);
    this._redrawMarkers = MarkerPathMixin._redrawMarkers.bind(this);
    this._initPath();
    this._createMarkers();
    this._initAccessibility();
  }
  /**
   * Returns the drawing container for this line.
   * @returns The drawing container
   */
  drawingContainer() {
    return this.container;
  }
  /**
   * Redraws the line with updated options.
   * @param options - Updated configuration options
   */
  redraw(options) {
    if (options) {
      options = options || {};
      const from = options.from;
      const to = options.to;
      if (from) {
        this.options.from = from;
      }
      if (to) {
        this.options.to = to;
      }
      if (from || to) {
        this._drawPath();
        this._redrawMarkers(true, options);
      } else {
        this._redrawMarkers(false, options);
      }
      super.redraw(options);
    }
  }
  /**
   * @hidden
   * Initializes the path drawing element.
   */
  _initPath() {
    const options = this.options;
    const drawingElement = this.drawingElement = new drawing_exports.Path({
      stroke: options.stroke
    });
    this._fill();
    this._drawPath();
    this.container.append(drawingElement);
  }
  /**
   * @hidden
   * Draws the line path between from and to points.
   */
  _drawPath() {
    const options = this.options;
    const drawingElement = this.drawingElement;
    const from = options.from || new Point();
    const to = options.to || new Point();
    drawingElement.segments.elements([createSegment(from.x, from.y), createSegment(to.x, to.y)]);
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/svg/ManualInputOutput.js
var defaultOptions12 = {
  topSlantRatio: 0.2
};
var ManualInputOutput = class extends Rectangle {
  /**
   * Creates a new ManualInputOutput instance.
   * @param options - Configuration options for the manual input/output shape
   */
  constructor(options) {
    super(__spreadValues(__spreadValues({}, defaultOptions12), options));
  }
  /**
   * @hidden
   * Draws the manual input/output shape path as a quadrilateral with slanted top.
   */
  _drawPath() {
    const drawingElement = this.drawingElement;
    const {
      width,
      height
    } = sizeOptionsOrDefault(this.options);
    const strokeWidth = this.options.stroke.width || 0;
    const {
      topSlantRatio,
      cornerRadius
    } = this.options;
    const topSlant = height * topSlantRatio;
    const points = [{
      x: 0,
      y: topSlant
    }, {
      x: width,
      y: 0
    }, {
      x: width,
      y: height
    }, {
      x: 0,
      y: height
    }];
    drawRoundedPolygon(drawingElement, points, cornerRadius);
    fitToSize(drawingElement, width, height, strokeWidth);
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/svg/ManualOperation.js
var defaultOptions13 = {
  baseShrinkRatio: 0.5
};
var ManualOperation = class extends Rectangle {
  /**
   * Creates a new ManualOperation instance.
   * @param options - Configuration options for the manual operation shape
   */
  constructor(options) {
    super(__spreadValues(__spreadValues({}, defaultOptions13), options));
  }
  /**
   * @hidden
   * Draws the manual operation shape path as a trapezoid.
   */
  _drawPath() {
    const drawingElement = this.drawingElement;
    const {
      width,
      height
    } = sizeOptionsOrDefault(this.options);
    const strokeWidth = this.options.stroke.width || 0;
    const baseShrink = width * this.options.baseShrinkRatio;
    const points = [{
      x: 0,
      y: 0
    }, {
      x: width,
      y: 0
    }, {
      x: width - baseShrink / 2,
      y: height
    }, {
      x: baseShrink / 2,
      y: height
    }];
    drawRoundedPolygon(drawingElement, points, this.options.cornerRadius);
    fitToSize(drawingElement, width, height, strokeWidth);
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/svg/Merge.js
var Merge = class extends Rectangle {
  /**
   * @hidden
   * Draws the merge shape path as an inverted triangle.
   */
  _drawPath() {
    const drawingElement = this.drawingElement;
    const {
      width,
      height
    } = sizeOptionsOrDefault(this.options);
    const strokeWidth = this.options.stroke.width || 0;
    const points = [{
      x: 0,
      y: 0
    }, {
      x: width,
      y: 0
    }, {
      x: width / 2,
      y: height
    }];
    const inflated = inflatePolygon(points, this.options.cornerRadius);
    drawRoundedPolygon(drawingElement, inflated, this.options.cornerRadius);
    fitToSize(drawingElement, width, height, strokeWidth);
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/svg/LogicalOr.js
var LogicalOr = class extends MultiPathShape {
  /**
   * @hidden
   * Draws the logical OR shape path as a circle with horizontal and vertical lines.
   */
  _drawPath() {
    const drawingElement = this.drawingElement;
    const {
      width,
      height
    } = sizeOptionsOrDefault(this.options);
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) / 2 - this.options.stroke.width;
    drawingElement.moveTo(centerX, 0).arcTo([centerX, height], radius, radius, false, true).arcTo([centerX, 0], radius, radius, false, true).moveTo(0, centerY).lineTo(width, centerY).moveTo(centerX, 0).lineTo(centerX, height);
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/svg/OffPageConnector.js
var defaultOptions14 = {
  ellipseRxRatio: 0.5,
  ellipseRyRatio: 0.13,
  bottomEdgeYRatio: 0.76
};
var OffPageConnector = class extends Rectangle {
  /**
   * Creates a new OffPageConnector instance.
   * @param options - Configuration options for the off-page connector shape
   */
  constructor(options) {
    super(__spreadValues(__spreadValues({}, defaultOptions14), options));
  }
  /**
   * @hidden
   * Draws the off-page connector shape path as a pentagon with rounded top.
   */
  _drawPath() {
    const drawingElement = this.drawingElement;
    const {
      width,
      height
    } = sizeOptionsOrDefault(this.options);
    const strokeWidth = this.options.stroke.width || 0;
    const ellipseRX = width * this.options.ellipseRxRatio;
    const ellipseRY = height * this.options.ellipseRyRatio;
    const topY = ellipseRY;
    const leftY = topY;
    const rightY = topY;
    const bottomY = height * this.options.bottomEdgeYRatio;
    const bottomMiddleX = width / 2;
    const bottomMiddleY = height;
    drawingElement.moveTo([0, topY]).arcTo([width, rightY], ellipseRX, ellipseRY, false, false).lineTo([width, bottomY]).lineTo([bottomMiddleX, bottomMiddleY]).lineTo([0, bottomY]).lineTo([0, leftY]).close();
    fitToSize(this.drawingElement, width, height, strokeWidth);
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/svg/Path.js
var Path = class extends VisualBase {
  /**
   * Creates a new Path instance.
   * @param options - Configuration options for the path
   */
  constructor(options) {
    options = deepExtend({
      autoSize: true
    }, options);
    super(options);
    this._capMap = MarkerPathMixin._capMap;
    this.container = new drawing_exports.Group();
    this._setScale = AutoSizeableMixin._setScale.bind(this);
    this._setTranslate = AutoSizeableMixin._setTranslate.bind(this);
    this._initSize = AutoSizeableMixin._initSize.bind(this);
    this._updateSize = AutoSizeableMixin._updateSize.bind(this);
    this._getPath = MarkerPathMixin._getPath.bind(this);
    this._normalizeMarkerOptions = MarkerPathMixin._normalizeMarkerOptions.bind(this);
    this._removeMarker = MarkerPathMixin._removeMarker.bind(this);
    this._createMarkers = MarkerPathMixin._createMarkers.bind(this);
    this._createMarker = MarkerPathMixin._createMarker.bind(this);
    this._positionMarker = MarkerPathMixin._positionMarker.bind(this);
    this._redrawMarker = MarkerPathMixin._redrawMarker.bind(this);
    this._redrawMarkers = MarkerPathMixin._redrawMarkers.bind(this);
    this._createElements();
    this._initSize();
  }
  /**
   * Gets the drawing container that holds the path and its markers.
   * @returns The drawing group container
   */
  drawingContainer() {
    return this.container;
  }
  /**
   * Gets or sets the path data string for the SVG path.
   * @param value The SVG path data string to set, or undefined to get current data
   * @returns The current path data string when called as getter
   */
  data(value) {
    const options = this.options;
    if (value) {
      if (options.data !== value) {
        options.data = value;
        this._setData(value);
        this._initSize();
        this._redrawMarkers(true, {});
      }
    } else {
      return options.data;
    }
  }
  /**
   * Redraws the path with updated options.
   * @param options - Updated configuration options
   */
  redraw(options) {
    if (options) {
      super.redraw(options);
      const pathOptions = this.options;
      const data = options.data;
      if (defined(data) && pathOptions.data !== data) {
        pathOptions.data = data;
        this._setData(data);
        if (!this._updateSize(options)) {
          this._initSize();
        }
        this._redrawMarkers(true, options);
      } else {
        this._updateSize(options);
        this._redrawMarkers(false, options);
      }
    }
  }
  /**
   * @hidden
   * Creates the drawing elements for the path.
   */
  _createElements() {
    const options = this.options;
    this.drawingElement = drawing_exports.Path.parse(options.data || "", {
      stroke: options.stroke
    });
    this._fill();
    this.container.append(this.drawingElement);
    this._createMarkers();
  }
  /**
   * @hidden
   * Sets the path data for the drawing element.
   * @param data - The SVG path data string
   */
  _setData(data) {
    const drawingElement = this.drawingElement;
    const multipath = drawing_exports.Path.parse(data || "");
    const paths = multipath.paths.slice(0);
    multipath.paths.elements([]);
    drawingElement.paths.elements(paths);
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/svg/Polyline.js
var Polyline = class extends VisualBase {
  /**
   * Creates a new Polyline instance.
   * @param options - Configuration options for the polyline including points and styling
   */
  constructor(options) {
    options = deepExtend({
      points: []
    }, options);
    super(options);
    this._capMap = MarkerPathMixin._capMap;
    this.container = new drawing_exports.Group();
    this._getPath = MarkerPathMixin._getPath.bind(this);
    this._normalizeMarkerOptions = MarkerPathMixin._normalizeMarkerOptions.bind(this);
    this._removeMarker = MarkerPathMixin._removeMarker.bind(this);
    this._createMarkers = MarkerPathMixin._createMarkers.bind(this);
    this._createMarker = MarkerPathMixin._createMarker.bind(this);
    this._positionMarker = MarkerPathMixin._positionMarker.bind(this);
    this._redrawMarker = MarkerPathMixin._redrawMarker.bind(this);
    this._redrawMarkers = MarkerPathMixin._redrawMarkers.bind(this);
    this._initPath();
    this._createMarkers();
    this._initAccessibility();
  }
  /**
   * Gets the drawing container that holds the polyline and its markers.
   * @returns The drawing group container
   */
  drawingContainer() {
    return this.container;
  }
  /**
   * Gets or sets the points that define the polyline path.
   * @param points Array of points to set for the polyline, or undefined to get current points
   * @returns The current points array when called as getter
   */
  points(points) {
    const options = this.options;
    if (points) {
      options.points = points;
      this._updatePath();
    } else {
      return options.points;
    }
  }
  /**
   * Redraws the polyline with updated options.
   * @param options - Updated configuration options
   */
  redraw(options) {
    if (options) {
      const points = options.points;
      super.redraw.call(this, options);
      if (points && this._pointsDiffer(points)) {
        this.points(points);
        this._redrawMarkers(true, options);
      } else {
        this._redrawMarkers(false, options);
      }
    }
  }
  /**
   * @hidden
   * Initializes the path drawing element.
   */
  _initPath() {
    const options = this.options;
    this.drawingElement = new drawing_exports.Path({
      stroke: options.stroke,
      id: options.id
    });
    this._fill();
    this.container.append(this.drawingElement);
    if (options.points) {
      this._updatePath();
    }
  }
  /** @hidden */
  _pointsDiffer(points) {
    const currentPoints = this.options.points;
    let differ = currentPoints.length !== points.length;
    if (!differ) {
      for (let i = 0; i < points.length; i++) {
        if (currentPoints[i].x !== points[i].x || currentPoints[i].y !== points[i].y) {
          differ = true;
          break;
        }
      }
    }
    return differ;
  }
  /**
   * @hidden
   * Updates the path with current points.
   */
  _updatePath() {
    const drawingElement = this.drawingElement;
    const options = this.options;
    const points = options.points;
    if (options.cornerRadius > 0) {
      createRoundedPolyline(drawingElement, points, options.cornerRadius);
    } else {
      const segments = [];
      let point;
      for (let i = 0; i < points.length; i++) {
        point = points[i];
        segments.push(createSegment(point.x, point.y));
      }
      drawingElement.segments.elements(segments);
    }
  }
};
var EPS = 1e-6;
var KAPPA = 0.5522847498307936;
var rightAngleTolerance = 0.05;
function dist(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}
function dedupe(points, eps = EPS) {
  if (points.length === 0) return points;
  const out = [points[0]];
  for (let i = 1; i < points.length; i++) {
    if (dist(points[i], out[out.length - 1]) > eps) {
      out.push(points[i]);
    }
  }
  return out;
}
function createRoundedPolyline(path, points, cornerRadius) {
  const pts = dedupe(points);
  if (pts.length < 2) {
    return path;
  }
  path.moveTo(pts[0].x, pts[0].y);
  if (pts.length === 2) {
    path.lineTo(pts[1].x, pts[1].y);
    return path;
  }
  for (let i = 1; i < pts.length - 1; i++) {
    const prev = pts[i - 1];
    const curr = pts[i];
    const next = pts[i + 1];
    const v1 = {
      x: curr.x - prev.x,
      y: curr.y - prev.y
    };
    const v2 = {
      x: next.x - curr.x,
      y: next.y - curr.y
    };
    const len1 = Math.hypot(v1.x, v1.y);
    const len2 = Math.hypot(v2.x, v2.y);
    if (len1 < EPS || len2 < EPS) {
      path.lineTo(curr.x, curr.y);
      continue;
    }
    const cross = v1.x * v2.y - v1.y * v2.x;
    const dot = (v1.x * v2.x + v1.y * v2.y) / (len1 * len2);
    const isColinearSameDir = Math.abs(cross) < EPS && dot > 0.999;
    if (isColinearSameDir) {
      continue;
    }
    const r = Math.min(cornerRadius, len1 / 2, len2 / 2);
    if (r <= EPS) {
      path.lineTo(curr.x, curr.y);
      continue;
    }
    const u1 = {
      x: v1.x / len1,
      y: v1.y / len1
    };
    const u2 = {
      x: v2.x / len2,
      y: v2.y / len2
    };
    const p1 = {
      x: curr.x - u1.x * r,
      y: curr.y - u1.y * r
    };
    const p2 = {
      x: curr.x + u2.x * r,
      y: curr.y + u2.y * r
    };
    const isRightAngle = Math.abs(dot) <= rightAngleTolerance;
    path.lineTo(p1.x, p1.y);
    if (isRightAngle) {
      const k = KAPPA * r;
      const c1 = {
        x: p1.x + u1.x * k,
        y: p1.y + u1.y * k
      };
      const c2 = {
        x: p2.x - u2.x * k,
        y: p2.y - u2.y * k
      };
      path.curveTo(new geometry_exports.Point(c1.x, c1.y), new geometry_exports.Point(c2.x, c2.y), new geometry_exports.Point(p2.x, p2.y));
    } else {
      path.curveTo(new geometry_exports.Point(curr.x, curr.y), new geometry_exports.Point(curr.x, curr.y), new geometry_exports.Point(p2.x, p2.y));
    }
  }
  const last = pts[pts.length - 1];
  path.lineTo(last.x, last.y);
  return path;
}

// node_modules/@progress/kendo-diagram-common/dist/es/svg/PredefinedProcess.js
var defaultOptions15 = {
  sideLineOffsetRatio: 0.1
};
var PredefinedProcess = class extends MultiPathShape {
  /**
   * Creates a new PredefinedProcess instance.
   * @param options - Configuration options for the predefined process shape
   */
  constructor(options) {
    super(__spreadValues(__spreadValues({}, defaultOptions15), options));
  }
  /**
   * @hidden
   * Draws the predefined process shape path as a rectangle with vertical lines.
   */
  _drawPath() {
    const drawingElement = this.drawingElement;
    const {
      width,
      height
    } = sizeOptionsOrDefault(this.options);
    const sideLineOffsetRatio = this.options.sideLineOffsetRatio;
    const sideLineOffset = width * sideLineOffsetRatio;
    const leftLineX = sideLineOffset;
    const rightLineX = width - sideLineOffset;
    const points = [{
      x: 0,
      y: 0
    }, {
      x: width,
      y: 0
    }, {
      x: width,
      y: height
    }, {
      x: 0,
      y: height
    }];
    drawRoundedPolygon(drawingElement, points, this.options.cornerRadius);
    drawingElement.moveTo(leftLineX, 0).lineTo(leftLineX, height).moveTo(rightLineX, 0).lineTo(rightLineX, height);
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/svg/Preparation.js
var defaultOptions16 = {
  horizontalInsetRatio: 1 / 6
};
var Preparation = class extends Rectangle {
  /**
   * Creates a new Preparation instance.
   * @param options Configuration options for the preparation shape
   */
  constructor(options) {
    super(__spreadValues(__spreadValues({}, defaultOptions16), options));
  }
  /** @hidden */
  _drawPath() {
    const drawingElement = this.drawingElement;
    const {
      width,
      height
    } = sizeOptionsOrDefault(this.options);
    const strokeWidth = this.options.stroke.width || 0;
    const xOffset = width * this.options.horizontalInsetRatio;
    const points = [{
      x: xOffset,
      y: 0
    }, {
      x: width - xOffset,
      y: 0
    }, {
      x: width,
      y: height / 2
    }, {
      x: width - xOffset,
      y: height
    }, {
      x: xOffset,
      y: height
    }, {
      x: 0,
      y: height / 2
    }];
    drawRoundedPolygon(drawingElement, points, this.options.cornerRadius);
    fitToSize(drawingElement, width, height, strokeWidth);
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/svg/Process.js
var Process = class extends Rectangle {
};

// node_modules/@progress/kendo-diagram-common/dist/es/svg/Sort.js
var defaultOptions17 = {
  shapesOffsetRatio: 0.015
};
var Sort = class extends MultiPathShape {
  /**
   * Creates a new Sort instance.
   * @param options - Configuration options for the sort shape
   */
  constructor(options) {
    super(__spreadValues(__spreadValues({}, defaultOptions17), options));
  }
  /**
   * @hidden
   * Draws the sort shape path as two triangular shapes.
   */
  _drawPath() {
    const drawingElement = this.drawingElement;
    const {
      width,
      height
    } = sizeOptionsOrDefault(this.options);
    const strokeWidth = this.options.stroke.width || 0;
    const cornerRadius = this.options.cornerRadius;
    const shapesOffset = this.options.shapesOffsetRatio * height;
    const halfHeight = height / 2;
    const firstShape = [{
      x: width / 2,
      y: 0
    }, {
      x: width,
      y: halfHeight - shapesOffset
    }, {
      x: 0,
      y: halfHeight - shapesOffset
    }];
    drawRoundedPolygon(drawingElement, firstShape, [cornerRadius / 3, cornerRadius, cornerRadius]);
    const secondShape = [{
      x: width / 2,
      y: height
    }, {
      x: 0,
      y: halfHeight + shapesOffset
    }, {
      x: width,
      y: halfHeight + shapesOffset
    }];
    drawRoundedPolygon(drawingElement, secondShape, [cornerRadius / 3, cornerRadius, cornerRadius]);
    fitToSize(drawingElement, width, height, strokeWidth);
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/svg/SummingJunction.js
var SummingJunction = class extends MultiPathShape {
  /**
   * @hidden
   * Draws the summing junction shape path as a circle with intersecting lines.
   */
  _drawPath() {
    const drawingElement = this.drawingElement;
    const {
      width,
      height
    } = sizeOptionsOrDefault(this.options);
    const cx = width / 2;
    const cy = height / 2;
    const radius = Math.min(width, height) * 0.5;
    const topY = cy - radius;
    const bottomY = cy + radius;
    const x1 = cx - radius / Math.SQRT2;
    const y1 = cy - radius / Math.SQRT2;
    const x2 = cx + radius / Math.SQRT2;
    const y2 = cy + radius / Math.SQRT2;
    drawingElement.moveTo(cx, topY).arcTo([cx, bottomY], radius, radius, false, true).arcTo([cx, topY], radius, radius, false, true).moveTo(x1, y1).lineTo(x2, y2).moveTo(x2, y1).lineTo(x1, y2);
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/svg/TextBlock.js
var parseAlign = (align = "") => {
  const result = {
    justifyContent: CENTER,
    alignContent: CENTER
  };
  if (align.includes("left")) {
    result.justifyContent = START;
  }
  if (align.includes("right")) {
    result.justifyContent = END;
  }
  if (align.includes("top")) {
    result.alignContent = START;
  }
  if (align.includes("bottom")) {
    result.alignContent = END;
  }
  return result;
};
function getContentSpacing(shape, relativePadding) {
  const spacing = getSpacing(relativePadding || 0, 0);
  const left = shape.width * spacing.left;
  const top = shape.height * spacing.top;
  const right = shape.width * spacing.right;
  const bottom = shape.height * spacing.bottom;
  return {
    left,
    top,
    right,
    bottom
  };
}
function calculatePadding(options) {
  const shapeSize = options.shapeSize;
  const {
    padding,
    relativePadding
  } = options;
  const curPadding = getSpacing(padding !== void 0 ? padding : defaultTextOptions.padding, 0);
  const curRelativePadding = getContentSpacing(shapeSize, relativePadding !== void 0 ? relativePadding : defaultTextOptions.relativePadding);
  return {
    left: curPadding.left + curRelativePadding.left,
    top: curPadding.top + curRelativePadding.top,
    right: curPadding.right + curRelativePadding.right,
    bottom: curPadding.bottom + curRelativePadding.bottom
  };
}
var textColor = (options) => {
  if (options && options.color) {
    options = deepExtend({}, options, {
      fill: {
        color: options.color
      }
    });
  }
  return options;
};
var defaultTextOptions = {
  fontSize: 15,
  fontFamily: "sans-serif",
  lineSpacing: 0,
  textWrap: "nowrap",
  padding: getSpacing(0),
  relativePadding: getSpacing(0),
  stroke: {
    width: 0
  },
  fill: {
    color: "black"
  },
  autoSize: true
};
var TextBlock = class extends VisualBase {
  /**
   * Creates a new TextBlock instance.
   * @param options Configuration options for the text block
   */
  constructor(options) {
    options = deepExtend({}, defaultTextOptions, options);
    options = textColor(options);
    super(options);
    this.textElements = [];
    this.alignable = true;
    this.name = "TextBlock";
    this._setScale = AutoSizeableMixin._setScale.bind(this);
    this._setTranslate = AutoSizeableMixin._setTranslate.bind(this);
    this._initSize = AutoSizeableMixin._initSize.bind(this);
    this._updateSize = AutoSizeableMixin._updateSize.bind(this);
    this._font();
    this._initText();
    this._initSize();
  }
  /** @hidden */
  _initText() {
    const options = this.options;
    this.textElements.length = 0;
    this.drawingElement = new drawing_exports.Text(defined(options.text) ? options.text : EMPTY, new geometry_exports.Point(), {
      font: options.font
    });
    this.textElements.push(this.drawingElement);
    this._fill();
    this._stroke();
  }
  /** @hidden */
  _fill(fillOptions) {
    const fill = this._evalFillOptions(fillOptions);
    if (fill.gradient) {
      const gradient = fill.gradient;
      const GradientClass = gradient.type === "radial" ? drawing_exports.RadialGradient : drawing_exports.LinearGradient;
      this.textElements.forEach((el) => {
        el.fill(new GradientClass(gradient));
      });
    } else {
      this._setFill(fill);
    }
  }
  /** @hidden */
  _setFill(fill) {
    this.textElements.forEach((el) => {
      el.fill(fill.color, fill.opacity);
    });
  }
  /** @hidden */
  _stroke(strokeOptions) {
    const stroke = this._evalStrokeOptions(strokeOptions);
    this.textElements.forEach((el) => el.options.set("stroke", stroke));
  }
  /** @hidden */
  _font() {
    const options = this.options;
    if (options.fontFamily && defined(options.fontSize)) {
      const fontOptions = [];
      if (options.fontStyle) {
        fontOptions.push(options.fontStyle);
      }
      if (options.fontWeight) {
        fontOptions.push(options.fontWeight);
      }
      fontOptions.push(options.fontSize + (isNumber(options.fontSize) ? PX : EMPTY));
      fontOptions.push(options.fontFamily);
      options.font = fontOptions.join(SPACE);
    } else {
      delete options.font;
    }
  }
  /** @hidden */
  padding() {
    return calculatePadding(this.options);
  }
  /**
   * Gets or sets the text content of the text block.
   * @param text The text content to set, or undefined to get current content
   * @returns The current text content when called as getter
   */
  content(text) {
    return this.drawingElement.content(text);
  }
  /**
   * Redraws the text block with updated options.
   * @param options New options to apply to the text block
   */
  redraw(options) {
    if (options) {
      let sizeChanged = false;
      const textOptions = this.options;
      options = textColor(options);
      super.redraw(options);
      if (options.fontFamily || defined(options.fontSize) || options.fontStyle || options.fontWeight) {
        deepExtend(textOptions, {
          fontFamily: options.fontFamily,
          fontSize: options.fontSize,
          fontStyle: options.fontStyle,
          fontWeight: options.fontWeight
        });
        this._font();
        this.drawingElement.options.set("font", textOptions.font);
        sizeChanged = true;
      }
      if (options.text) {
        this.content(options.text);
        sizeChanged = true;
      }
      if (!this._updateSize(options) && sizeChanged) {
        this._initSize();
      }
    }
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/svg/TextLayout.js
var TextLayout = class extends drawing_exports.Layout {
  measure() {
    if (!this._rect || this.children.length === 0) {
      return new geometry_exports.Size(0, 0);
    }
    this._initMap();
    const {
      groups,
      groupsSize
    } = this._initGroups();
    if (groups.length === 0) {
      return new geometry_exports.Size(0, 0);
    }
    const {
      sizeField,
      groupsSizeField
    } = this._fieldMap;
    let maxSize = 0;
    for (let i = 0; i < groups.length; i++) {
      maxSize = Math.max(maxSize, groups[i].size);
    }
    const size = new geometry_exports.Size();
    size[sizeField] = maxSize;
    size[groupsSizeField] = groupsSize;
    return size;
  }
  rawBBox() {
    if (!this._rect || this.children.length === 0) {
      return new geometry_exports.Rect(this._rect.origin, new geometry_exports.Size());
    }
    const size = this.measure();
    return new geometry_exports.Rect(this._rect.origin, size);
  }
  bbox(transformation) {
    if (!this._rect || this.children.length === 0) {
      const emptyRect = new geometry_exports.Rect(this._rect.origin, new geometry_exports.Size());
      const transform2 = this.currentTransform(transformation);
      return transform2 ? emptyRect.bbox(transform2.matrix()) : emptyRect;
    }
    const rawBox = this.rawBBox();
    const transform = this.currentTransform(transformation);
    return transform ? rawBox.bbox(transform.matrix()) : rawBox;
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/dom/Box.js
var Box = class {
  constructor(x1, y1, x2, y2) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }
  width() {
    return this.x2 - this.x1;
  }
  height() {
    return this.y2 - this.y1;
  }
  pad(padding) {
    const spacing = __spreadValues({}, padding);
    this.x1 -= spacing.left;
    this.x2 += spacing.right;
    this.y1 -= spacing.top;
    this.y2 += spacing.bottom;
    return this;
  }
  unpad(padding) {
    const spacing = __spreadValues({}, padding);
    spacing.left = -spacing.left || 0;
    spacing.top = -spacing.top || 0;
    spacing.right = -spacing.right || 0;
    spacing.bottom = -spacing.bottom || 0;
    return this.pad(spacing);
  }
  toRect() {
    return new geometry_exports.Rect([this.x1, this.y1], [this.width(), this.height()]);
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/svg/MultiLineTextBlock.js
var textRect = (options) => {
  let shapeSize = options.shapeSize;
  if (!shapeSize) {
    const lines = (options.text || EMPTY).split(NEW_LINE_CHAR);
    const style = getFont(options);
    const measures = lines.map((line) => drawing_exports.util.measureText(line, style));
    const maxWidth = measures.reduce((max, measured) => {
      return Math.max(max, measured.width);
    }, 0);
    const totalHeight = measures.reduce((sum, measured) => {
      return sum + measured.height;
    }, 0) + (lines.length - 1) * (options.lineSpacing || 0);
    shapeSize = {
      width: maxWidth,
      height: totalHeight
    };
  }
  const {
    padding,
    relativePadding
  } = options;
  const totalPadding = calculatePadding({
    padding,
    relativePadding,
    shapeSize
  });
  const box = new Box(0, 0, shapeSize.width, shapeSize.height);
  box.unpad(totalPadding);
  return box.toRect();
};
var getFont = (options) => {
  const font = {
    fontSize: defined(options.fontSize) ? options.fontSize : defaultTextOptions.fontSize,
    fontFamily: options.fontFamily || defaultTextOptions.fontFamily
  };
  if (options.fontWeight || defaultTextOptions.fontWeight) {
    font.fontWeight = options.fontWeight || defaultTextOptions.fontWeight;
  }
  if (options.fontStyle || defaultTextOptions.fontStyle) {
    font.fontStyle = options.fontStyle || defaultTextOptions.fontStyle;
  }
  return font;
};
var MultiLineTextBlock = class extends TextBlock {
  constructor() {
    super(...arguments);
    this.alignable = false;
    this.name = "MultiLineTextBlock";
  }
  /**
   * Gets or sets the text content of the multi-line text block.
   * @param text The text content to set, or undefined to get current content
   * @returns The current text content when called as getter
   */
  content(text) {
    if (text !== void 0) {
      this.options.text = text;
      this._initText();
    }
    return this.options.text;
  }
  /** @hidden */
  _initText() {
    this.textElements.length = 0;
    this.alignable = false;
    const drawingElement = this.drawingElement = this.drawingElement || new drawing_exports.Group();
    if (drawingElement.children.length) {
      drawingElement.clear();
    }
    const options = this.options;
    const rect = textRect(options);
    const layout = new TextLayout(rect, __spreadProps(__spreadValues({}, parseAlign(options.align)), {
      lineSpacing: options.lineSpacing
    }));
    this._textLines(rect ? rect.size.width : void 0).forEach((line) => {
      const textElement = new drawing_exports.Text(line, new geometry_exports.Point(0, 0), {
        font: options.font
      });
      this.textElements.push(textElement);
      layout.append(textElement);
      layout.appendBreak();
    });
    layout.reflow();
    const hasBackground = options.background !== void 0;
    const hasBorder = options.border !== void 0;
    if (hasBackground || hasBorder) {
      const textBbox = layout.clippedBBox();
      if (textBbox) {
        this._textOnlyRect = textBbox.clone();
        let padding = options.textPadding !== void 0 ? options.textPadding : INLINE_PADDING;
        if (typeof padding === "number") {
          padding = getSpacing(padding, 0);
        } else {
          padding = __spreadValues(__spreadValues({}, INLINE_PADDING), padding);
        }
        const bgRect = new drawing_exports.Rect(new geometry_exports.Rect([textBbox.origin.x - padding.left, textBbox.origin.y - padding.top], [textBbox.size.width + padding.left + padding.right, textBbox.size.height + padding.top + padding.bottom]), {
          stroke: __spreadValues({
            color: TRANSPARENT
          }, options.border),
          fill: {
            color: options.background
          }
        });
        drawingElement.insert(0, bgRect);
      }
    }
    drawingElement.append(layout);
    if (options.color) {
      this.textElements.forEach((el) => {
        el.fill(options.color);
      });
    } else if (!hasBackground && !hasBorder) {
      this._fill();
      this._stroke();
    }
  }
  /** @hidden */
  _textLines(maxWidth) {
    const {
      text = EMPTY
    } = this.options;
    if (maxWidth === void 0) {
      return text.split(NEW_LINE_CHAR);
    }
    const style = getFont(this.options);
    const measureText = drawing_exports.util.measureText;
    const lines = [];
    const textLines = text.split(NEW_LINE_CHAR);
    textLines.forEach((line) => {
      const words = line.split(SPACE);
      let currentLine = EMPTY;
      words.forEach((word) => {
        while (measureText(word, style).width > maxWidth) {
          let part = EMPTY;
          for (let i = 1; i <= word.length; i++) {
            const testPart = word.substring(0, i);
            const width2 = measureText(testPart, style).width;
            if (width2 > maxWidth) {
              break;
            }
            part = testPart;
          }
          if (!part) {
            break;
          }
          if (currentLine) {
            lines.push(currentLine);
            currentLine = EMPTY;
          }
          lines.push(part);
          word = word.substring(part.length);
        }
        const testLine = currentLine ? `${currentLine} ${word}` : word;
        const width = measureText(testLine, style).width;
        if (width > maxWidth && currentLine) {
          lines.push(currentLine);
          currentLine = word;
        } else {
          currentLine = testLine;
        }
      });
      lines.push(currentLine || SPACE);
    });
    return lines;
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/svg/RichTextBlock.js
var reSpace = /[\r\n\t]/g;
var reMultipleSpace = /[ ]{2,}/g;
var normalizeSpaces = (text) => (text || EMPTY).replace(reSpace, SPACE).replace(reMultipleSpace, SPACE);
var minImageSize = 16;
var getMaxParagraphFontSize = (paragraph, baseFontSize) => {
  let maxFontSize = 0;
  (paragraph.children || []).forEach((child) => {
    if (child.type !== "break" && child.type !== "image") {
      maxFontSize = Math.max(maxFontSize, defined(child.fontSize) ? child.fontSize : baseFontSize);
    }
  });
  return maxFontSize || baseFontSize;
};
function getParagraphs(options) {
  if (options.blocks && options.blocks.length > 0) {
    const baseFontSize = options.fontSize || defaultTextOptions.fontSize;
    let explicitMargin;
    if (options.margin !== void 0) {
      if (typeof options.margin === "number") {
        const spacing = getSpacing(options.margin, 0);
        explicitMargin = {
          top: spacing.top,
          bottom: spacing.bottom
        };
      } else {
        explicitMargin = {
          top: options.margin.top !== void 0 ? options.margin.top : baseFontSize,
          bottom: options.margin.bottom !== void 0 ? options.margin.bottom : baseFontSize
        };
      }
    }
    const paragraphs = options.blocks.map((p) => {
      let margin;
      if (explicitMargin) {
        margin = __spreadValues({}, explicitMargin);
      } else {
        const pFontSize = getMaxParagraphFontSize(p, baseFontSize);
        margin = {
          top: pFontSize,
          bottom: pFontSize
        };
      }
      return __spreadProps(__spreadValues({}, p), {
        margin
      });
    });
    return paragraphs;
  }
  return [];
}
var getRunFont = (run, baseOptions) => {
  const fontSize = defined(run.fontSize) ? run.fontSize : baseOptions.fontSize || defaultTextOptions.fontSize;
  const fontFamily = run.fontFamily || baseOptions.fontFamily || defaultTextOptions.fontFamily;
  const fontOptions = [];
  const fontStyle = run.italic ? "italic" : baseOptions.fontStyle || defaultTextOptions.fontStyle;
  if (fontStyle) {
    fontOptions.push(fontStyle);
  }
  const fontWeight = run.bold ? "bold" : baseOptions.fontWeight || defaultTextOptions.fontWeight;
  if (fontWeight) {
    fontOptions.push(fontWeight);
  }
  fontOptions.push(fontSize + (isNumber(fontSize) ? PX : EMPTY));
  fontOptions.push(fontFamily);
  return fontOptions.join(SPACE);
};
var richTextRect = (options) => {
  let shapeSize = options.shapeSize;
  if (!shapeSize) {
    let maxWidth = 0;
    let totalHeight = 0;
    const paragraphs = getParagraphs(options);
    let previousMarginBottom = 0;
    paragraphs.forEach((p, idx) => {
      const pMargin = p.margin;
      const pFontSize = p.fontSize || options.fontSize || defaultTextOptions.fontSize;
      const pFont = getRunFont({
        fontSize: pFontSize
      }, options);
      const pStrutMetric = drawing_exports.util.measureText("M", {
        font: pFont,
        lineHeight: options && options.lineHeight ? String(options.lineHeight) : "normal"
      });
      const pStrutHeight = pStrutMetric.height || pFontSize;
      const getEmptyLineHeight = () => pStrutHeight;
      let pWidth = 0;
      let currentLineWidth = 0;
      let currentLineMaxHeight = 0;
      let pTotalHeight = 0;
      (p.children || []).forEach((child) => {
        if (child.type === "break") {
          pWidth = Math.max(pWidth, currentLineWidth);
          pTotalHeight += Math.max(currentLineMaxHeight, getEmptyLineHeight()) + (options.lineSpacing || 0);
          currentLineWidth = 0;
          currentLineMaxHeight = 0;
        } else if (child.type === "image") {
          const img = child;
          currentLineWidth += img.width || pFontSize || minImageSize;
          currentLineMaxHeight = Math.max(currentLineMaxHeight, img.height || pFontSize || minImageSize);
        } else {
          const run = child;
          const font = getRunFont(run, options);
          const style = {
            font,
            lineHeight: options && options.lineHeight ? String(options.lineHeight) : "normal"
          };
          const parts = [normalizeSpaces(run.text)];
          parts.forEach((part, index) => {
            if (index > 0) {
              pWidth = Math.max(pWidth, currentLineWidth);
              pTotalHeight += Math.max(currentLineMaxHeight, getEmptyLineHeight()) + (options.lineSpacing || 0);
              currentLineWidth = 0;
              currentLineMaxHeight = 0;
            }
            if (part) {
              const metric = drawing_exports.util.measureText(part, style);
              currentLineWidth += metric.width;
              currentLineMaxHeight = Math.max(currentLineMaxHeight, metric.height || 0);
            }
          });
        }
      });
      pWidth = Math.max(pWidth, currentLineWidth);
      pTotalHeight += Math.max(currentLineMaxHeight, getEmptyLineHeight());
      maxWidth = Math.max(maxWidth, pWidth);
      const collapsedTop = Math.max(previousMarginBottom, pMargin.top);
      totalHeight += collapsedTop + pTotalHeight + (idx > 0 ? options.lineSpacing || 0 : 0);
      previousMarginBottom = pMargin.bottom;
    });
    if (paragraphs.length > 0) {
      totalHeight += previousMarginBottom;
    }
    shapeSize = {
      width: maxWidth,
      height: totalHeight
    };
  }
  const {
    padding,
    relativePadding
  } = options;
  const totalPadding = calculatePadding({
    padding,
    relativePadding,
    shapeSize
  });
  const box = new Box(0, 0, shapeSize.width, shapeSize.height);
  box.unpad(totalPadding);
  return box.toRect();
};
var RichTextBlock = class extends TextBlock {
  constructor() {
    super(...arguments);
    this.alignable = false;
    this.name = "RichTextBlock";
  }
  content(contentOptions) {
    if (contentOptions !== void 0) {
      if (contentOptions.blocks || contentOptions.margin !== void 0) {
        this.options = __spreadValues(__spreadValues({}, this.options), contentOptions);
      }
      this._initText();
    }
    return this.options.blocks;
  }
  redraw(options) {
    if (options) {
      Element.prototype.redraw.call(this, options);
      let sizeChanged = false;
      const textOptions = this.options;
      if (options.fontFamily || defined(options.fontSize) || options.fontStyle || options.fontWeight) {
        deepExtend(textOptions, {
          fontFamily: options.fontFamily,
          fontSize: options.fontSize,
          fontStyle: options.fontStyle,
          fontWeight: options.fontWeight
        });
        this._font();
        this.drawingElement.options.set("font", textOptions.font);
        sizeChanged = true;
      }
      if (options.blocks) {
        this.content(options);
        sizeChanged = true;
      }
      if (!this._updateSize(options) && sizeChanged) {
        this._initSize();
      }
    }
  }
  _initText() {
    this.textElements.length = 0;
    this.alignable = false;
    const drawingElement = this.drawingElement = this.drawingElement || new drawing_exports.Group();
    if (drawingElement.children.length) {
      drawingElement.clear();
    }
    drawingElement.transform(null);
    const options = this.options;
    const paragraphs = getParagraphs(options);
    const rect = richTextRect(options);
    const masterAlign = parseAlign(options.align);
    const masterLayout = new drawing_exports.Layout(rect, __spreadProps(__spreadValues({
      orientation: "horizontal"
    }, masterAlign), {
      lineSpacing: options.lineSpacing
    }));
    const paragraphsLines = this._wrapParagraphs(paragraphs, rect ? rect.size.width : void 0);
    let previousRenderedMarginBottom = 0;
    paragraphsLines.forEach((pLines, pIdx) => {
      const pMargin = paragraphs[pIdx].margin;
      const p = paragraphs[pIdx];
      const pFontSize = p.fontSize || options.fontSize || defaultTextOptions.fontSize;
      const pFont = getRunFont({
        fontSize: pFontSize
      }, options);
      const pStrutMetric = drawing_exports.util.measureText("M", {
        font: pFont,
        lineHeight: options && options.lineHeight ? String(options.lineHeight) : "normal"
      });
      const pStrutHeight = pStrutMetric.height || pFontSize;
      const pStrutBaseline = pStrutMetric.baseline || pFontSize * 0.8;
      const getEmptyLineHeight = () => pStrutHeight;
      const topSpace = Math.max(previousRenderedMarginBottom, pMargin.top);
      if (topSpace > 0) {
        const spaceLayout = new drawing_exports.Layout(new geometry_exports.Rect([0, 0], [1, topSpace]));
        const dummy = new drawing_exports.Rect(new geometry_exports.Rect([0, 0], [1, topSpace]), {
          stroke: {
            width: 0,
            color: "none"
          },
          fill: {
            opacity: 0,
            color: "none"
          }
        });
        spaceLayout.append(dummy);
        masterLayout.append(spaceLayout);
        masterLayout.appendBreak();
      }
      pLines.forEach((line) => {
        if (line.length === 0) {
          const emptyLineHeight = getEmptyLineHeight();
          const dummy = new drawing_exports.Rect(new geometry_exports.Rect([0, 0], [1, emptyLineHeight]), {
            stroke: {
              width: 0,
              color: "none"
            },
            fill: {
              opacity: 0,
              color: "none"
            }
          });
          const lineLayout = new drawing_exports.Layout(new geometry_exports.Rect([0, 0], [1, emptyLineHeight]));
          const lineGroup2 = new drawing_exports.Group();
          lineGroup2.append(dummy);
          lineLayout.append(lineGroup2);
          masterLayout.append(lineLayout);
          masterLayout.appendBreak();
          return;
        }
        const lineGroup = new drawing_exports.Group();
        let currentX = 0;
        let maxBaseline = pStrutBaseline;
        let maxHeight = pStrutHeight;
        line.forEach((node) => {
          maxBaseline = Math.max(maxBaseline, node.baseline);
          maxHeight = Math.max(maxHeight, node.height);
        });
        line.forEach((node) => {
          var _a;
          const yOffset = maxBaseline - node.baseline;
          if (node.type === "image") {
            const imgRun = node.run;
            const imgEl = new drawing_exports.Image(imgRun.src, new geometry_exports.Rect([currentX, Math.round(yOffset)], [node.width, node.height]));
            lineGroup.append(imgEl);
            currentX += node.width;
          } else if (node.type === "text") {
            const textRun = node.run;
            const textElement = new drawing_exports.Text(node.text, new geometry_exports.Point(currentX, yOffset), {
              font: node.font
            });
            const textColor2 = textRun.color || options.color || ((_a = this.options.fill) === null || _a === void 0 ? void 0 : _a.color) || "black";
            if (textRun.color || options.color) {
              textElement.fill(textColor2);
            }
            if (textRun.underline) {
              const fontSize = defined(textRun.fontSize) ? textRun.fontSize : pFontSize;
              const thickness = Math.max(1, Math.round(fontSize / 15));
              const underlineY = Math.round(yOffset + node.baseline + thickness);
              const path = new drawing_exports.Path({
                stroke: {
                  color: textColor2,
                  width: thickness
                }
              });
              path.moveTo(currentX, underlineY).lineTo(currentX + node.width, underlineY);
              lineGroup.append(path);
            }
            this.textElements.push(textElement);
            lineGroup.append(textElement);
            currentX += node.width;
          }
        });
        if (currentX > 0 || maxHeight > 0) {
          const dummyLineBox = new drawing_exports.Rect(new geometry_exports.Rect([0, 0], [currentX || 1, maxHeight || 1]), {
            stroke: {
              width: 0,
              color: "none"
            },
            fill: {
              opacity: 0,
              color: "none"
            }
          });
          lineGroup.append(dummyLineBox);
          const lineLayout = new drawing_exports.Layout(new geometry_exports.Rect([0, 0], [currentX || 1, maxHeight || 1]));
          lineLayout.append(lineGroup);
          masterLayout.append(lineLayout);
          masterLayout.appendBreak();
        }
      });
      previousRenderedMarginBottom = pMargin.bottom;
    });
    if (paragraphs.length > 0 && previousRenderedMarginBottom > 0) {
      const spaceLayout = new drawing_exports.Layout(new geometry_exports.Rect([0, 0], [1, previousRenderedMarginBottom]));
      const dummy = new drawing_exports.Rect(new geometry_exports.Rect([0, 0], [1, previousRenderedMarginBottom]), {
        stroke: {
          width: 0,
          color: "none"
        },
        fill: {
          opacity: 0,
          color: "none"
        }
      });
      spaceLayout.append(dummy);
      masterLayout.append(spaceLayout);
      masterLayout.appendBreak();
    }
    masterLayout.reflow();
    drawingElement.append(masterLayout);
    let computedBbox = masterLayout.clippedBBox() || this.drawingElement.clippedBBox();
    if (!computedBbox || computedBbox.size.width <= 1 && computedBbox.size.height <= 0) {
      let totalHeight = 0;
      let maxWidth = 0;
      masterLayout.children.forEach((child) => {
        if (child && child.rect && typeof child.rect === "function") {
          const r = child.rect();
          if (r && r.size) {
            maxWidth = Math.max(maxWidth, r.size.width);
            totalHeight += r.size.height + (options.lineSpacing || 0);
          }
        }
      });
      if (totalHeight > 0) {
        totalHeight -= options.lineSpacing || 0;
      }
      computedBbox = new geometry_exports.Rect([0, 0], [maxWidth || 1, totalHeight || 1]);
    }
    let bgColor = options.background;
    if (bgColor === void 0 && options.bgColor !== void 0) {
      bgColor = options.bgColor;
    }
    const hasBackground = bgColor !== void 0;
    const hasBorder = options.border !== void 0;
    if (hasBackground || hasBorder) {
      const textBbox = computedBbox;
      if (textBbox) {
        this._textOnlyRect = textBbox.clone();
        let padding = options.textPadding !== void 0 ? options.textPadding : INLINE_PADDING;
        if (typeof padding === "number") {
          padding = getSpacing(padding, 0);
        } else {
          padding = __spreadValues(__spreadValues({}, INLINE_PADDING), padding);
        }
        const bgRect = new drawing_exports.Rect(new geometry_exports.Rect([textBbox.origin.x - padding.left, textBbox.origin.y - padding.top], [textBbox.size.width + padding.left + padding.right, textBbox.size.height + padding.top + padding.bottom]), {
          stroke: __spreadValues({
            color: TRANSPARENT
          }, options.border),
          fill: {
            color: bgColor
          }
        });
        drawingElement.insert(0, bgRect);
      }
    } else {
      if (computedBbox) {
        this._textOnlyRect = computedBbox.clone();
      }
    }
    if (!options.color) {
      this._fill();
      this._stroke();
    }
  }
  _wrapParagraphs(paragraphs, maxWidth) {
    const result = [];
    const measureText = (text, style) => drawing_exports.util.measureText(text || EMPTY, style);
    paragraphs.forEach((p) => {
      const pMaxWidth = maxWidth;
      const pLines = [];
      let currentLine = [];
      let currentLineWidth = 0;
      (p.children || []).forEach((child) => {
        if (child.type === "break") {
          pLines.push(currentLine);
          currentLine = [];
          currentLineWidth = 0;
        } else if (child.type === "image") {
          const img = child;
          const width = img.width || this.options.fontSize || minImageSize;
          const height = img.height || this.options.fontSize || minImageSize;
          if (pMaxWidth !== void 0 && pMaxWidth > 0 && currentLineWidth + width > pMaxWidth && currentLine.length > 0) {
            pLines.push(currentLine);
            currentLine = [];
            currentLineWidth = 0;
          }
          currentLine.push({
            type: "image",
            run: img,
            width,
            height,
            baseline: height
          });
          currentLineWidth += width;
        } else {
          const run = child;
          const font = getRunFont(run, this.options);
          const style = {
            font,
            lineHeight: this.options && this.options.lineHeight ? String(this.options.lineHeight) : "normal"
          };
          const parts = [normalizeSpaces(run.text)];
          parts.forEach((part, index) => {
            if (index > 0) {
              pLines.push(currentLine);
              currentLine = [];
              currentLineWidth = 0;
            }
            if (!part) return;
            if (pMaxWidth === void 0 || pMaxWidth <= 0) {
              const metric = measureText(part, style);
              currentLine.push({
                type: "text",
                text: part,
                run,
                width: metric.width,
                height: metric.height || 0,
                baseline: metric.baseline || 0,
                font
              });
              currentLineWidth += metric.width;
            } else {
              const words = part.split(SPACE);
              let currentRunText = EMPTY;
              let isFirstToken = true;
              words.forEach((word) => {
                while (word.length > 0 && measureText(word, style).width > pMaxWidth) {
                  let subPart = EMPTY;
                  for (let i = 1; i <= word.length; i++) {
                    const testPart = word.substring(0, i);
                    if (measureText(testPart, style).width > pMaxWidth && i > 1) {
                      break;
                    }
                    subPart = testPart;
                  }
                  if (!subPart) break;
                  if (currentRunText) {
                    const m = measureText(currentRunText, style);
                    currentLine.push({
                      type: "text",
                      text: currentRunText,
                      run,
                      width: m.width,
                      height: m.height || 0,
                      baseline: m.baseline || 0,
                      font
                    });
                    currentLineWidth += m.width;
                    currentRunText = EMPTY;
                  }
                  if (currentLine.length > 0) {
                    pLines.push(currentLine);
                    currentLine = [];
                    currentLineWidth = 0;
                  }
                  const mSub = measureText(subPart, style);
                  currentLine.push({
                    type: "text",
                    text: subPart,
                    run,
                    width: mSub.width,
                    height: mSub.height || 0,
                    baseline: mSub.baseline || 0,
                    font
                  });
                  pLines.push(currentLine);
                  currentLine = [];
                  currentLineWidth = 0;
                  word = word.substring(subPart.length);
                  isFirstToken = true;
                }
                const separator = isFirstToken ? EMPTY : SPACE;
                const testLine = currentRunText + separator + word;
                const testWidth = measureText(testLine, style).width;
                if (currentLineWidth + testWidth > pMaxWidth && (currentLine.length > 0 || currentRunText)) {
                  if (currentRunText) {
                    const m = measureText(currentRunText, style);
                    currentLine.push({
                      type: "text",
                      text: currentRunText,
                      run,
                      width: m.width,
                      height: m.height || 0,
                      baseline: m.baseline || 0,
                      font
                    });
                  }
                  pLines.push(currentLine);
                  currentLine = [];
                  currentLineWidth = 0;
                  currentRunText = word;
                  isFirstToken = false;
                } else {
                  currentRunText = testLine;
                  isFirstToken = false;
                }
              });
              if (currentRunText) {
                const m = measureText(currentRunText, style);
                currentLine.push({
                  type: "text",
                  text: currentRunText,
                  run,
                  width: m.width,
                  height: m.height || 0,
                  baseline: m.baseline || 0,
                  font
                });
                currentLineWidth += m.width;
              }
            }
          });
        }
      });
      if (currentLine.length > 0 || !p.children || p.children.length === 0 || p.children[p.children.length - 1].type === "break") {
        pLines.push(currentLine);
      }
      result.push(pLines);
    });
    return result;
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/layout/LayeredLayout.js
var LayeredLayout = class extends LayoutBase {
  constructor(diagram) {
    super();
    if (isUndefined(diagram)) {
      throw new Error("Diagram is not specified.");
    }
    this.diagram = diagram;
  }
  layout(options) {
    this.transferOptions(options);
    const adapter = new DiagramToHyperTreeAdapter(this.diagram);
    const graph = adapter.convert(options);
    if (graph.isEmpty()) {
      return;
    }
    const components = graph.getConnectedComponents();
    if (isEmpty(components)) {
      return;
    }
    for (let i = 0; i < components.length; i++) {
      const component = components[i];
      this.layoutGraph(component, options);
    }
    const finalNodeSet = this.gridLayoutComponents(components);
    return new LayoutState(this.diagram, finalNodeSet);
  }
  /**
   * Initializes the runtime data properties of the layout.
   *
   * @private
   */
  _initRuntimeProperties() {
    for (let k = 0; k < this.graph.nodes.length; k++) {
      const node = this.graph.nodes[k];
      node.layer = -1;
      node.downstreamLinkCount = 0;
      node.upstreamLinkCount = 0;
      node.isVirtual = false;
      node.uBaryCenter = 0;
      node.dBaryCenter = 0;
      node.upstreamPriority = 0;
      node.downstreamPriority = 0;
      node.gridPosition = 0;
    }
  }
  _prepare(graph) {
    const current2 = [];
    let i, l, link;
    const layerMap = new Dictionary();
    let layerCount = 0;
    let targetLayer, next, target;
    forEach(graph.nodes, function(node) {
      if (node.incoming.length === 0) {
        layerMap.set(node, 0);
        current2.push(node);
      }
    });
    while (current2.length > 0) {
      next = current2.shift();
      for (i = 0; i < next.outgoing.length; i++) {
        link = next.outgoing[i];
        target = link.target;
        if (layerMap.containsKey(target)) {
          targetLayer = Math.max(layerMap.get(next) + 1, layerMap.get(target));
        } else {
          targetLayer = layerMap.get(next) + 1;
        }
        layerMap.set(target, targetLayer);
        if (targetLayer > layerCount) {
          layerCount = targetLayer;
        }
        if (!contains(current2, target)) {
          current2.push(target);
        }
      }
    }
    const sortedNodes = layerMap.keys();
    sortedNodes.sort(function(o1, o2) {
      const o1layer = layerMap.get(o1);
      const o2layer = layerMap.get(o2);
      return sign(o2layer - o1layer);
    });
    for (let n = 0; n < sortedNodes.length; ++n) {
      const node = sortedNodes[n];
      let minLayer = Number.MAX_VALUE;
      if (node.outgoing.length === 0) {
        continue;
      }
      for (l = 0; l < node.outgoing.length; ++l) {
        link = node.outgoing[l];
        minLayer = Math.min(minLayer, layerMap.get(link.target));
      }
      if (minLayer > 1) {
        layerMap.set(node, minLayer - 1);
      }
    }
    this.layers = [];
    let layer;
    for (i = 0; i < layerCount + 1; i++) {
      layer = [];
      layer.linksTo = {};
      this.layers.push(layer);
    }
    layerMap.forEach(function(node, layerVal) {
      node.layer = layerVal;
      this.layers[layerVal].push(node);
    }, this);
    for (l = 0; l < this.layers.length; l++) {
      layer = this.layers[l];
      for (i = 0; i < layer.length; i++) {
        layer[i].gridPosition = i;
      }
    }
  }
  /**
   * Performs the layout of a single component.
   */
  layoutGraph(graph, options) {
    if (isUndefined(graph)) {
      throw new Error("No graph given or graph analysis of the diagram failed.");
    }
    if (isDefined(options)) {
      this.transferOptions(options);
    }
    this.graph = graph;
    graph.setItemIndices();
    const reversedEdges = graph.makeAcyclic();
    this._initRuntimeProperties();
    this._prepare(graph);
    this._dummify();
    this._optimizeCrossings();
    this._swapPairs();
    this.arrangeNodes();
    this._moveThingsAround();
    this._dedummify();
    forEach(reversedEdges, function(e) {
      if (e.points) {
        e.points.reverse();
      }
    });
  }
  setMinDist(m, _n, minDist) {
    const l = m.layer;
    const i = m.layerIndex;
    if (!Number.isInteger(l) || !Number.isInteger(i) || l < 0 || i < 0) {
      throw new Error("Invalid layer or index value.");
    }
    this.minDistances[l][i] = minDist;
  }
  getMinDist(m, n) {
    let dist2 = 0;
    const i1 = m.layerIndex, i2 = n.layerIndex, l = m.layer, min = Math.min(i1, i2), max = Math.max(i1, i2);
    for (let k = min; k < max; ++k) {
      dist2 += this.minDistances[l][k];
    }
    return dist2;
  }
  placeLeftToRight(leftClasses) {
    const leftPos = new Dictionary();
    let n, node;
    for (let c = 0; c < this.layers.length; ++c) {
      const classNodes = leftClasses[c];
      if (!classNodes) {
        continue;
      }
      for (n = 0; n < classNodes.length; n++) {
        node = classNodes[n];
        if (!leftPos.containsKey(node)) {
          this.placeLeft(node, leftPos, c);
        }
      }
      let d = Number.POSITIVE_INFINITY;
      for (n = 0; n < classNodes.length; n++) {
        node = classNodes[n];
        const rightSibling = this.rightSibling(node);
        if (rightSibling && this.nodeLeftClass.get(rightSibling) !== c) {
          d = Math.min(d, leftPos.get(rightSibling) - leftPos.get(node) - this.getMinDist(node, rightSibling));
        }
      }
      if (d === Number.POSITIVE_INFINITY) {
        const D = [];
        for (n = 0; n < classNodes.length; n++) {
          node = classNodes[n];
          const neighbors = [];
          addRange(neighbors, this.upNodes.get(node));
          addRange(neighbors, this.downNodes.get(node));
          for (let e = 0; e < neighbors.length; e++) {
            const neighbor = neighbors[e];
            if (this.nodeLeftClass.get(neighbor) < c) {
              D.push(leftPos.get(neighbor) - leftPos.get(node));
            }
          }
        }
        D.sort();
        if (D.length === 0) {
          d = 0;
        } else if (D.length % 2 === 1) {
          d = D[this.intDiv(D.length, 2)];
        } else {
          d = (D[this.intDiv(D.length, 2) - 1] + D[this.intDiv(D.length, 2)]) / 2;
        }
      }
      for (n = 0; n < classNodes.length; n++) {
        node = classNodes[n];
        leftPos.set(node, leftPos.get(node) + d);
      }
    }
    return leftPos;
  }
  placeRightToLeft(rightClasses) {
    const rightPos = new Dictionary();
    let n, node;
    for (let c = 0; c < this.layers.length; ++c) {
      const classNodes = rightClasses[c];
      if (!classNodes) {
        continue;
      }
      for (n = 0; n < classNodes.length; n++) {
        node = classNodes[n];
        if (!rightPos.containsKey(node)) {
          this.placeRight(node, rightPos, c);
        }
      }
      let d = Number.NEGATIVE_INFINITY;
      for (n = 0; n < classNodes.length; n++) {
        node = classNodes[n];
        const leftSibling = this.leftSibling(node);
        if (leftSibling && this.nodeRightClass.get(leftSibling) !== c) {
          d = Math.max(d, rightPos.get(leftSibling) - rightPos.get(node) + this.getMinDist(leftSibling, node));
        }
      }
      if (d === Number.NEGATIVE_INFINITY) {
        const D = [];
        for (n = 0; n < classNodes.length; n++) {
          node = classNodes[n];
          const neighbors = [];
          addRange(neighbors, this.upNodes.get(node));
          addRange(neighbors, this.downNodes.get(node));
          for (let e = 0; e < neighbors.length; e++) {
            const neighbor = neighbors[e];
            if (this.nodeRightClass.get(neighbor) < c) {
              D.push(rightPos.get(node) - rightPos.get(neighbor));
            }
          }
        }
        D.sort();
        if (D.length === 0) {
          d = 0;
        } else if (D.length % 2 === 1) {
          d = D[this.intDiv(D.length, 2)];
        } else {
          d = (D[this.intDiv(D.length, 2) - 1] + D[this.intDiv(D.length, 2)]) / 2;
        }
      }
      for (n = 0; n < classNodes.length; n++) {
        node = classNodes[n];
        rightPos.set(node, rightPos.get(node) + d);
      }
    }
    return rightPos;
  }
  _getLeftWing() {
    const leftWing = {
      value: null
    };
    const result = this.computeClasses(leftWing, 1);
    this.nodeLeftClass = leftWing.value;
    return result;
  }
  _getRightWing() {
    const rightWing = {
      value: null
    };
    const result = this.computeClasses(rightWing, -1);
    this.nodeRightClass = rightWing.value;
    return result;
  }
  computeClasses(wingPair, d) {
    let currentWing = 0;
    const wing = wingPair.value = new Dictionary();
    for (let l = 0; l < this.layers.length; ++l) {
      currentWing = l;
      const layer = this.layers[l];
      for (let n = d === 1 ? 0 : layer.length - 1; n >= 0 && n < layer.length; n += d) {
        const node = layer[n];
        if (!wing.containsKey(node)) {
          wing.set(node, currentWing);
          if (node.isVirtual) {
            const ndsinl = this._nodesInLink(node);
            for (let kk = 0; kk < ndsinl.length; kk++) {
              const vnode = ndsinl[kk];
              wing.set(vnode, currentWing);
            }
          }
        } else {
          currentWing = wing.get(node);
        }
      }
    }
    const wings = [];
    for (let i = 0; i < this.layers.length; i++) {
      wings.push(null);
    }
    wing.forEach(function(node, classIndex) {
      if (wings[classIndex] === null) {
        wings[classIndex] = [];
      }
      wings[classIndex].push(node);
    });
    return wings;
  }
  _isVerticalLayout() {
    return this.options.subtype.toLowerCase() === "up" || this.options.subtype.toLowerCase() === "down" || this.options.subtype.toLowerCase() === "vertical";
  }
  _isHorizontalLayout() {
    return this.options.subtype.toLowerCase() === "right" || this.options.subtype.toLowerCase() === "left" || this.options.subtype.toLowerCase() === "horizontal";
  }
  _isIncreasingLayout() {
    return this.options.subtype.toLowerCase() === "right" || this.options.subtype.toLowerCase() === "down";
  }
  _moveThingsAround() {
    let i, l, node, layer, n, w;
    for (l = 0; l < this.layers.length; ++l) {
      layer = this.layers[l];
      layer.sort(this._gridPositionComparer.bind(this));
    }
    this.minDistances = [];
    for (l = 0; l < this.layers.length; ++l) {
      layer = this.layers[l];
      this.minDistances[l] = [];
      for (n = 0; n < layer.length; ++n) {
        node = layer[n];
        node.layerIndex = n;
        this.minDistances[l][n] = this.options.nodeDistance;
        if (n < layer.length - 1) {
          if (this._isVerticalLayout()) {
            this.minDistances[l][n] += (node.width + layer[n + 1].width) / 2;
          } else {
            this.minDistances[l][n] += (node.height + layer[n + 1].height) / 2;
          }
        }
      }
    }
    this.downNodes = new Dictionary();
    this.upNodes = new Dictionary();
    forEach(this.graph.nodes, function(gNode) {
      this.downNodes.set(gNode, []);
      this.upNodes.set(gNode, []);
    }, this);
    forEach(this.graph.links, function(link) {
      const origin = link.source;
      const dest = link.target;
      let down = null, up = null;
      if (origin.layer > dest.layer) {
        down = link.source;
        up = link.target;
      } else {
        up = link.source;
        down = link.target;
      }
      this.downNodes.get(up).push(down);
      this.upNodes.get(down).push(up);
    }, this);
    this.downNodes.forEachValue(function(list) {
      list.sort(this._gridPositionComparer);
    }, this);
    this.upNodes.forEachValue(function(list) {
      list.sort(this._gridPositionComparer);
    }, this);
    for (l = 0; l < this.layers.length - 1; ++l) {
      layer = this.layers[l];
      for (w = 0; w < layer.length - 1; w++) {
        const currentNode = layer[w];
        if (!currentNode.isVirtual) {
          continue;
        }
        const currDown = this.downNodes.get(currentNode)[0];
        if (!currDown.isVirtual) {
          continue;
        }
        for (n = w + 1; n < layer.length; ++n) {
          node = layer[n];
          if (!node.isVirtual) {
            continue;
          }
          const downNode = this.downNodes.get(node)[0];
          if (!downNode.isVirtual) {
            continue;
          }
          if (currDown.gridPosition > downNode.gridPosition) {
            const pos = currDown.gridPosition;
            currDown.gridPosition = downNode.gridPosition;
            downNode.gridPosition = pos;
            const i1 = currDown.layerIndex;
            const i2 = downNode.layerIndex;
            this.layers[l + 1][i1] = downNode;
            this.layers[l + 1][i2] = currDown;
            currDown.layerIndex = i2;
            downNode.layerIndex = i1;
          }
        }
      }
    }
    const leftClasses = this._getLeftWing();
    const rightClasses = this._getRightWing();
    const leftPos = this.placeLeftToRight(leftClasses);
    const rightPos = this.placeRightToLeft(rightClasses);
    const x = new Dictionary();
    forEach(this.graph.nodes, function(gNode) {
      x.set(gNode, (leftPos.get(gNode) + rightPos.get(gNode)) / 2);
    });
    const order = new Dictionary();
    const placed = new Dictionary();
    for (l = 0; l < this.layers.length; ++l) {
      layer = this.layers[l];
      let sequenceStart = -1;
      for (n = 0; n < layer.length; ++n) {
        node = layer[n];
        order.set(node, 0);
        placed.set(node, false);
        if (node.isVirtual) {
          if (sequenceStart === -1) {
            sequenceStart = n;
          } else if (sequenceStart === n - 1) {
            sequenceStart = n;
          } else {
            order.set(layer[sequenceStart], 0);
            if (x.get(node) - x.get(layer[sequenceStart]) === this.getMinDist(layer[sequenceStart], node)) {
              placed.set(layer[sequenceStart], true);
            } else {
              placed.set(layer[sequenceStart], false);
            }
            sequenceStart = n;
          }
        }
      }
    }
    const directions = [1, -1];
    forEach(directions, function(d) {
      const start = d === 1 ? 0 : this.layers.length - 1;
      for (let ll = start; ll >= 0 && ll < this.layers.length; ll += d) {
        const layer2 = this.layers[ll];
        let virtualStartIndex = this._firstVirtualNode(layer2);
        let virtualStart = null;
        let sequence = null;
        if (virtualStartIndex !== -1) {
          virtualStart = layer2[virtualStartIndex];
          sequence = [];
          for (i = 0; i < virtualStartIndex; i++) {
            sequence.push(layer2[i]);
          }
        } else {
          virtualStart = null;
          sequence = layer2;
        }
        if (sequence.length > 0) {
          this._sequencer(x, null, virtualStart, d, sequence);
          for (i = 0; i < sequence.length - 1; ++i) {
            this.setMinDist(sequence[i], sequence[i + 1], x.get(sequence[i + 1]) - x.get(sequence[i]));
          }
          if (virtualStart) {
            this.setMinDist(sequence[sequence.length - 1], virtualStart, x.get(virtualStart) - x.get(sequence[sequence.length - 1]));
          }
        }
        while (virtualStart) {
          const virtualEnd = this.nextVirtualNode(layer2, virtualStart);
          if (!virtualEnd) {
            virtualStartIndex = virtualStart.layerIndex;
            sequence = [];
            for (i = virtualStartIndex + 1; i < layer2.length; i++) {
              sequence.push(layer2[i]);
            }
            if (sequence.length > 0) {
              this._sequencer(x, virtualStart, null, d, sequence);
              for (i = 0; i < sequence.length - 1; ++i) {
                this.setMinDist(sequence[i], sequence[i + 1], x.get(sequence[i + 1]) - x.get(sequence[i]));
              }
              this.setMinDist(virtualStart, sequence[0], x.get(sequence[0]) - x.get(virtualStart));
            }
          } else if (order.get(virtualStart) === d) {
            virtualStartIndex = virtualStart.layerIndex;
            const virtualEndIndex = virtualEnd.layerIndex;
            sequence = [];
            for (i = virtualStartIndex + 1; i < virtualEndIndex; i++) {
              sequence.push(layer2[i]);
            }
            if (sequence.length > 0) {
              this._sequencer(x, virtualStart, virtualEnd, d, sequence);
            }
            placed.set(virtualStart, true);
          }
          virtualStart = virtualEnd;
        }
        this.adjustDirections(ll, d, order, placed);
      }
    }, this);
    const fromLayerIndex = this._isIncreasingLayout() ? 0 : this.layers.length - 1;
    const reachedFinalLayerIndex = function(k, ctx) {
      if (ctx._isIncreasingLayout()) {
        return k < ctx.layers.length;
      } else {
        return k >= 0;
      }
    };
    const layerIncrement = this._isIncreasingLayout() ? 1 : -1;
    let offset = 0;
    function maximumHeight(layer2, ctx) {
      let height = Number.MIN_VALUE;
      for (let nn = 0; nn < layer2.length; ++nn) {
        const node2 = layer2[nn];
        if (ctx._isVerticalLayout()) {
          height = Math.max(height, node2.height);
        } else {
          height = Math.max(height, node2.width);
        }
      }
      return height;
    }
    for (i = fromLayerIndex; reachedFinalLayerIndex(i, this); i += layerIncrement) {
      layer = this.layers[i];
      const height = maximumHeight(layer, this);
      for (n = 0; n < layer.length; ++n) {
        node = layer[n];
        if (this._isVerticalLayout()) {
          node.x = x.get(node);
          node.y = offset + height / 2;
        } else {
          node.x = offset + height / 2;
          node.y = x.get(node);
        }
      }
      offset += this.options.layerSeparation + height;
    }
  }
  adjustDirections(l, d, order, placed) {
    if (l + d < 0 || l + d >= this.layers.length) {
      return;
    }
    let prevBridge = null, prevBridgeTarget = null;
    const layer = this.layers[l + d];
    for (let n = 0; n < layer.length; ++n) {
      const nextBridge = layer[n];
      if (nextBridge.isVirtual) {
        const nextBridgeTarget = this.getNeighborOnLayer(nextBridge, l);
        if (nextBridgeTarget.isVirtual) {
          if (prevBridge) {
            let p = placed.get(prevBridgeTarget);
            const clayer = this.layers[l];
            const i1 = prevBridgeTarget.layerIndex;
            const i2 = nextBridgeTarget.layerIndex;
            for (let i = i1 + 1; i < i2; ++i) {
              if (clayer[i].isVirtual) {
                p = p && placed.get(clayer[i]);
              }
            }
            if (p) {
              order.set(prevBridge, d);
              const j1 = prevBridge.layerIndex;
              const j2 = nextBridge.layerIndex;
              for (let j = j1 + 1; j < j2; ++j) {
                if (layer[j].isVirtual) {
                  order.set(layer[j], d);
                }
              }
            }
          }
          prevBridge = nextBridge;
          prevBridgeTarget = nextBridgeTarget;
        }
      }
    }
  }
  getNeighborOnLayer(node, l) {
    let neighbor = this.upNodes.get(node)[0];
    if (neighbor.layer === l) {
      return neighbor;
    }
    neighbor = this.downNodes.get(node)[0];
    if (neighbor.layer === l) {
      return neighbor;
    }
    return null;
  }
  _sequencer(x, virtualStart, virtualEnd, dir, sequence) {
    if (sequence.length === 1) {
      this._sequenceSingle(x, virtualStart, virtualEnd, dir, sequence[0]);
    }
    if (sequence.length > 1) {
      const r = sequence.length, t = this.intDiv(r, 2);
      this._sequencer(x, virtualStart, virtualEnd, dir, sequence.slice(0, t));
      this._sequencer(x, virtualStart, virtualEnd, dir, sequence.slice(t));
      this.combineSequences(x, virtualStart, virtualEnd, dir, sequence);
    }
  }
  _sequenceSingle(x, virtualStart, virtualEnd, dir, node) {
    const neighbors = dir === -1 ? this.downNodes.get(node) : this.upNodes.get(node);
    const n = neighbors.length;
    if (n !== 0) {
      if (n % 2 === 1) {
        x.set(node, x.get(neighbors[this.intDiv(n, 2)]));
      } else {
        x.set(node, (x.get(neighbors[this.intDiv(n, 2) - 1]) + x.get(neighbors[this.intDiv(n, 2)])) / 2);
      }
      if (virtualStart) {
        x.set(node, Math.max(x.get(node), x.get(virtualStart) + this.getMinDist(virtualStart, node)));
      }
      if (virtualEnd) {
        x.set(node, Math.min(x.get(node), x.get(virtualEnd) - this.getMinDist(node, virtualEnd)));
      }
    }
  }
  combineSequences(x, virtualStart, virtualEnd, dir, sequence) {
    const r = sequence.length, t = this.intDiv(r, 2);
    const leftHeap = [];
    let i, c, n, neighbors, neighbor, pair;
    for (i = 0; i < t; ++i) {
      c = 0;
      neighbors = dir === -1 ? this.downNodes.get(sequence[i]) : this.upNodes.get(sequence[i]);
      for (n = 0; n < neighbors.length; ++n) {
        neighbor = neighbors[n];
        if (x.get(neighbor) >= x.get(sequence[i])) {
          c++;
        } else {
          c--;
          leftHeap.push({
            k: x.get(neighbor) + this.getMinDist(sequence[i], sequence[t - 1]),
            v: 2
          });
        }
      }
      leftHeap.push({
        k: x.get(sequence[i]) + this.getMinDist(sequence[i], sequence[t - 1]),
        v: c
      });
    }
    if (virtualStart) {
      leftHeap.push({
        k: x.get(virtualStart) + this.getMinDist(virtualStart, sequence[t - 1]),
        v: Number.MAX_VALUE
      });
    }
    leftHeap.sort(this._positionDescendingComparer.bind(this));
    const rightHeap = [];
    for (i = t; i < r; ++i) {
      c = 0;
      neighbors = dir === -1 ? this.downNodes.get(sequence[i]) : this.upNodes.get(sequence[i]);
      for (n = 0; n < neighbors.length; ++n) {
        neighbor = neighbors[n];
        if (x.get(neighbor) <= x.get(sequence[i])) {
          c++;
        } else {
          c--;
          rightHeap.push({
            k: x.get(neighbor) - this.getMinDist(sequence[i], sequence[t]),
            v: 2
          });
        }
      }
      rightHeap.push({
        k: x.get(sequence[i]) - this.getMinDist(sequence[i], sequence[t]),
        v: c
      });
    }
    if (virtualEnd) {
      rightHeap.push({
        k: x.get(virtualEnd) - this.getMinDist(virtualEnd, sequence[t]),
        v: Number.MAX_VALUE
      });
    }
    rightHeap.sort(this._positionAscendingComparer.bind(this));
    let leftRes = 0, rightRes = 0;
    const m = this.getMinDist(sequence[t - 1], sequence[t]);
    while (x.get(sequence[t]) - x.get(sequence[t - 1]) < m) {
      if (leftRes < rightRes) {
        if (leftHeap.length === 0) {
          x.set(sequence[t - 1], x.get(sequence[t]) - m);
          break;
        } else {
          pair = leftHeap.shift();
          leftRes = leftRes + pair.v;
          x.set(sequence[t - 1], pair.k);
          x.set(sequence[t - 1], Math.max(x.get(sequence[t - 1]), x.get(sequence[t]) - m));
        }
      } else {
        if (rightHeap.length === 0) {
          x.set(sequence[t], x.get(sequence[t - 1]) + m);
          break;
        } else {
          pair = rightHeap.shift();
          rightRes = rightRes + pair.v;
          x.set(sequence[t], pair.k);
          x.set(sequence[t], Math.min(x.get(sequence[t]), x.get(sequence[t - 1]) + m));
        }
      }
    }
    for (i = t - 2; i >= 0; i--) {
      x.set(sequence[i], Math.min(x.get(sequence[i]), x.get(sequence[t - 1]) - this.getMinDist(sequence[i], sequence[t - 1])));
    }
    for (i = t + 1; i < r; i++) {
      x.set(sequence[i], Math.max(x.get(sequence[i]), x.get(sequence[t]) + this.getMinDist(sequence[i], sequence[t])));
    }
  }
  placeLeft(node, leftPos, leftClass) {
    let pos = Number.NEGATIVE_INFINITY;
    forEach(this._getComposite(node), function(v) {
      const leftSibling = this.leftSibling(v);
      if (leftSibling && this.nodeLeftClass.get(leftSibling) === this.nodeLeftClass.get(v)) {
        if (!leftPos.containsKey(leftSibling)) {
          this.placeLeft(leftSibling, leftPos, leftClass);
        }
        pos = Math.max(pos, leftPos.get(leftSibling) + this.getMinDist(leftSibling, v));
      }
    }, this);
    if (pos === Number.NEGATIVE_INFINITY) {
      pos = 0;
    }
    forEach(this._getComposite(node), function(v) {
      leftPos.set(v, pos);
    });
  }
  placeRight(node, rightPos, rightClass) {
    let pos = Number.POSITIVE_INFINITY;
    forEach(this._getComposite(node), function(v) {
      const rightSibling = this.rightSibling(v);
      if (rightSibling && this.nodeRightClass.get(rightSibling) === this.nodeRightClass.get(v)) {
        if (!rightPos.containsKey(rightSibling)) {
          this.placeRight(rightSibling, rightPos, rightClass);
        }
        pos = Math.min(pos, rightPos.get(rightSibling) - this.getMinDist(v, rightSibling));
      }
    }, this);
    if (pos === Number.POSITIVE_INFINITY) {
      pos = 0;
    }
    forEach(this._getComposite(node), function(v) {
      rightPos.set(v, pos);
    });
  }
  leftSibling(node) {
    const layer = this.layers[node.layer], layerIndex = node.layerIndex;
    return layerIndex === 0 ? null : layer[layerIndex - 1];
  }
  rightSibling(node) {
    const layer = this.layers[node.layer];
    const layerIndex = node.layerIndex;
    return layerIndex === layer.length - 1 ? null : layer[layerIndex + 1];
  }
  _getComposite(node) {
    return node.isVirtual ? this._nodesInLink(node) : [node];
  }
  arrangeNodes() {
    let i, l, ni, layer, node;
    for (l = 0; l < this.layers.length; l++) {
      layer = this.layers[l];
      for (ni = 0; ni < layer.length; ni++) {
        node = layer[ni];
        node.upstreamPriority = node.upstreamLinkCount;
        node.downstreamPriority = node.downstreamLinkCount;
      }
    }
    const maxLayoutIterations = 2;
    for (let it = 0; it < maxLayoutIterations; it++) {
      for (i = this.layers.length - 1; i >= 1; i--) {
        this.layoutLayer(false, i);
      }
      for (i = 0; i < this.layers.length - 1; i++) {
        this.layoutLayer(true, i);
      }
    }
    let gridPos = Number.MAX_VALUE;
    for (l = 0; l < this.layers.length; l++) {
      layer = this.layers[l];
      for (ni = 0; ni < layer.length; ni++) {
        node = layer[ni];
        gridPos = Math.min(gridPos, node.gridPosition);
      }
    }
    if (gridPos < 0) {
      for (l = 0; l < this.layers.length; l++) {
        layer = this.layers[l];
        for (ni = 0; ni < layer.length; ni++) {
          node = layer[ni];
          node.gridPosition = node.gridPosition - gridPos;
        }
      }
    }
  }
  /// <summary>
  /// Layout of a single layer.
  /// </summary>
  /// <param name="layerIndex">The layer to organize.</param>
  /// <param name="movingDownwards">If set to <c>true</c> we move down in the layer stack.</param>
  /// <seealso cref="OptimizeCrossings()"/>
  layoutLayer(down, layer) {
    let iconsidered;
    let considered;
    if (down) {
      considered = this.layers[iconsidered = layer + 1];
    } else {
      considered = this.layers[iconsidered = layer - 1];
    }
    const sorted = [];
    for (let n = 0; n < considered.length; n++) {
      sorted.push(considered[n]);
    }
    sorted.sort(function(n1, n2) {
      const n1Priority = (n1.upstreamPriority + n1.downstreamPriority) / 2;
      const n2Priority = (n2.upstreamPriority + n2.downstreamPriority) / 2;
      if (Math.abs(n1Priority - n2Priority) < 1e-4) {
        return 0;
      }
      if (n1Priority < n2Priority) {
        return 1;
      }
      return -1;
    });
    forEach(sorted, function(node) {
      let nodeGridPos = node.gridPosition;
      const nodeBaryCenter = this.calcBaryCenter(node);
      const nodePriority = (node.upstreamPriority + node.downstreamPriority) / 2;
      if (Math.abs(nodeGridPos - nodeBaryCenter) < 1e-4) {
        return;
      }
      if (Math.abs(nodeGridPos - nodeBaryCenter) < 0.25 + 1e-4) {
        return;
      }
      if (nodeGridPos < nodeBaryCenter) {
        while (nodeGridPos < nodeBaryCenter) {
          if (!this.moveRight(node, considered, nodePriority)) {
            break;
          }
          nodeGridPos = node.gridPosition;
        }
      } else {
        while (nodeGridPos > nodeBaryCenter) {
          if (!this.moveLeft(node, considered, nodePriority)) {
            break;
          }
          nodeGridPos = node.gridPosition;
        }
      }
    }, this);
    if (iconsidered > 0) {
      this.calcDownData(iconsidered - 1);
    }
    if (iconsidered < this.layers.length - 1) {
      this.calcUpData(iconsidered + 1);
    }
  }
  /// <summary>
  /// Moves the node to the right and returns <c>true</c> if this was possible.
  /// </summary>
  /// <param name="node">The node.</param>
  /// <param name="layer">The layer.</param>
  /// <returns>Returns <c>true</c> if the shift was possible, otherwise <c>false</c>.</returns>
  moveRight(node, layer, priority) {
    const index = indexOf(layer, node);
    if (index === layer.length - 1) {
      node.gridPosition = node.gridPosition + 0.5;
      return true;
    }
    const rightNode = layer[index + 1];
    const rightNodePriority = (rightNode.upstreamPriority + rightNode.downstreamPriority) / 2;
    if (rightNode.gridPosition > node.gridPosition + 1) {
      node.gridPosition = node.gridPosition + 0.5;
      return true;
    }
    if (rightNodePriority > priority || Math.abs(rightNodePriority - priority) < 1e-4) {
      return false;
    }
    if (this.moveRight(rightNode, layer, priority)) {
      node.gridPosition = node.gridPosition + 0.5;
      return true;
    }
    return false;
  }
  /// <summary>
  /// Moves the node to the left and returns <c>true</c> if this was possible.
  /// </summary>
  /// <param name="node">The node.</param>
  /// <param name="layer">The layer.</param>
  /// <returns>Returns <c>true</c> if the shift was possible, otherwise <c>false</c>.</returns>
  moveLeft(node, layer, priority) {
    const index = indexOf(layer, node);
    if (index === 0) {
      node.gridPosition = node.gridPosition - 0.5;
      return true;
    }
    const leftNode = layer[index - 1];
    const leftNodePriority = (leftNode.upstreamPriority + leftNode.downstreamPriority) / 2;
    if (leftNode.gridPosition < node.gridPosition - 1) {
      node.gridPosition = node.gridPosition - 0.5;
      return true;
    }
    if (leftNodePriority > priority || Math.abs(leftNodePriority - priority) < 1e-4) {
      return false;
    }
    if (this.moveLeft(leftNode, layer, priority)) {
      node.gridPosition = node.gridPosition - 0.5;
      return true;
    }
    return false;
  }
  mapVirtualNode(node, link) {
    this.nodeToLinkMap.set(node, link);
    if (!this.linkToNodeMap.containsKey(link)) {
      this.linkToNodeMap.set(link, []);
    }
    this.linkToNodeMap.get(link).push(node);
  }
  _nodesInLink(node) {
    return this.linkToNodeMap.get(this.nodeToLinkMap.get(node));
  }
  /// <summary>
  /// Inserts dummy nodes to break long links.
  /// </summary>
  _dummify() {
    this.linkToNodeMap = new Dictionary();
    this.nodeToLinkMap = new Dictionary();
    const links = this.graph.links.slice(0);
    const layers = this.layers;
    let layer, pos, newNode, node, r, newLink, i, l;
    const addLinkBetweenLayers = function(upLayer, downLayer, link) {
      layers[upLayer].linksTo[downLayer] = layers[upLayer].linksTo[downLayer] || [];
      layers[upLayer].linksTo[downLayer].push(link);
    };
    for (l = 0; l < links.length; l++) {
      const link = links[l];
      const o = link.source;
      const d = link.target;
      const oLayer = o.layer;
      const dLayer = d.layer;
      const oPos = o.gridPosition;
      const dPos = d.gridPosition;
      const step = (dPos - oPos) / Math.abs(dLayer - oLayer);
      let p = o;
      if (oLayer - dLayer > 1) {
        for (i = oLayer - 1; i > dLayer; i--) {
          newNode = new Node();
          newNode.x = o.x;
          newNode.y = o.y;
          newNode.width = o.width / 100;
          newNode.height = o.height / 100;
          layer = layers[i];
          pos = (i - dLayer) * step + oPos;
          if (pos > layer.length) {
            pos = layer.length;
          }
          if (oPos >= layers[oLayer].length - 1 && dPos >= layers[dLayer].length - 1) {
            pos = layer.length;
          } else if (oPos === 0 && dPos === 0) {
            pos = 0;
          }
          newNode.layer = i;
          newNode.uBaryCenter = 0;
          newNode.dBaryCenter = 0;
          newNode.upstreamLinkCount = 0;
          newNode.downstreamLinkCount = 0;
          newNode.gridPosition = pos;
          newNode.isVirtual = true;
          insert(layer, newNode, pos);
          for (r = pos + 1; r < layer.length; r++) {
            node = layer[r];
            node.gridPosition = node.gridPosition + 1;
          }
          newLink = new Link(p, newNode);
          newLink.depthOfDumminess = 0;
          addLinkBetweenLayers(i - 1, i, newLink);
          p = newNode;
          this.graph._addNode(newNode);
          this.graph.addLink(newLink);
          newNode.index = this.graph.nodes.length - 1;
          this.mapVirtualNode(newNode, link);
        }
        addLinkBetweenLayers(dLayer - 1, dLayer, newLink);
        link.changeSource(p);
        link.depthOfDumminess = oLayer - dLayer - 1;
      } else if (oLayer - dLayer < -1) {
        for (i = oLayer + 1; i < dLayer; i++) {
          newNode = new Node();
          newNode.x = o.x;
          newNode.y = o.y;
          newNode.width = o.width / 100;
          newNode.height = o.height / 100;
          layer = layers[i];
          pos = (i - oLayer) * step + oPos;
          if (pos > layer.length) {
            pos = layer.length;
          }
          if (oPos >= layers[oLayer].length - 1 && dPos >= layers[dLayer].length - 1) {
            pos = layer.length;
          } else if (oPos === 0 && dPos === 0) {
            pos = 0;
          }
          newNode.layer = i;
          newNode.uBaryCenter = 0;
          newNode.dBaryCenter = 0;
          newNode.upstreamLinkCount = 0;
          newNode.downstreamLinkCount = 0;
          newNode.gridPosition = pos;
          newNode.isVirtual = true;
          pos = Math.floor(pos);
          insert(layer, newNode, pos);
          for (r = pos + 1; r < layer.length; r++) {
            node = layer[r];
            node.gridPosition = node.gridPosition + 1;
          }
          newLink = new Link(p, newNode);
          newLink.depthOfDumminess = 0;
          addLinkBetweenLayers(i - 1, i, newLink);
          p = newNode;
          this.graph._addNode(newNode);
          this.graph.addLink(newLink);
          newNode.index = this.graph.nodes.length - 1;
          this.mapVirtualNode(newNode, link);
        }
        addLinkBetweenLayers(dLayer - 1, dLayer, link);
        link.changeSource(p);
        link.depthOfDumminess = dLayer - oLayer - 1;
      } else {
        addLinkBetweenLayers(oLayer, dLayer, link);
      }
    }
  }
  /// <summary>
  /// Removes the dummy nodes inserted earlier to break long links.
  /// </summary>
  /// <remarks>The virtual nodes are effectively turned into intermediate connection points.</remarks>
  _dedummify() {
    let dedum = true;
    while (dedum) {
      dedum = false;
      for (let l = 0; l < this.graph.links.length; l++) {
        const link = this.graph.links[l];
        if (!link.depthOfDumminess) {
          continue;
        }
        const points = [];
        points.unshift({
          x: link.target.x,
          y: link.target.y
        });
        points.unshift({
          x: link.source.x,
          y: link.source.y
        });
        let temp = link;
        const depthOfDumminess = link.depthOfDumminess;
        for (let d = 0; d < depthOfDumminess; d++) {
          const node = temp.source;
          const prevLink = node.incoming[0];
          points.unshift({
            x: prevLink.source.x,
            y: prevLink.source.y
          });
          temp = prevLink;
        }
        link.changeSource(temp.source);
        link.depthOfDumminess = 0;
        if (points.length > 2) {
          points.splice(0, 1);
          points.splice(points.length - 1);
          link.points = points;
        } else {
          link.points = [];
        }
        dedum = true;
        break;
      }
    }
  }
  /// <summary>
  /// Optimizes/reduces the crossings between the layers by turning the crossing problem into a (combinatorial) number ordering problem.
  /// </summary>
  _optimizeCrossings() {
    let moves = -1, i;
    const maxIterations = 3;
    let iter = 0;
    while (moves !== 0) {
      if (iter++ > maxIterations) {
        break;
      }
      moves = 0;
      for (i = this.layers.length - 1; i >= 1; i--) {
        moves += this.optimizeLayerCrossings(false, i);
      }
      for (i = 0; i < this.layers.length - 1; i++) {
        moves += this.optimizeLayerCrossings(true, i);
      }
    }
  }
  calcUpData(layer) {
    if (layer === 0) {
      return;
    }
    const considered = this.layers[layer];
    let i, l, link;
    const upLayer = new Set2();
    const temp = this.layers[layer - 1];
    for (i = 0; i < temp.length; i++) {
      upLayer.add(temp[i]);
    }
    for (i = 0; i < considered.length; i++) {
      const node = considered[i];
      let sum = 0;
      let total = 0;
      for (l = 0; l < node.incoming.length; l++) {
        link = node.incoming[l];
        if (upLayer.contains(link.source)) {
          total++;
          sum += link.source.gridPosition;
        }
      }
      for (l = 0; l < node.outgoing.length; l++) {
        link = node.outgoing[l];
        if (upLayer.contains(link.target)) {
          total++;
          sum += link.target.gridPosition;
        }
      }
      if (total > 0) {
        node.uBaryCenter = sum / total;
        node.upstreamLinkCount = total;
      } else {
        node.uBaryCenter = i;
        node.upstreamLinkCount = 0;
      }
    }
  }
  calcDownData(layer) {
    if (layer === this.layers.length - 1) {
      return;
    }
    const considered = this.layers[layer];
    let i, l, link;
    const downLayer = new Set2();
    const temp = this.layers[layer + 1];
    for (i = 0; i < temp.length; i++) {
      downLayer.add(temp[i]);
    }
    for (i = 0; i < considered.length; i++) {
      const node = considered[i];
      let sum = 0;
      let total = 0;
      for (l = 0; l < node.incoming.length; l++) {
        link = node.incoming[l];
        if (downLayer.contains(link.source)) {
          total++;
          sum += link.source.gridPosition;
        }
      }
      for (l = 0; l < node.outgoing.length; l++) {
        link = node.outgoing[l];
        if (downLayer.contains(link.target)) {
          total++;
          sum += link.target.gridPosition;
        }
      }
      if (total > 0) {
        node.dBaryCenter = sum / total;
        node.downstreamLinkCount = total;
      } else {
        node.dBaryCenter = i;
        node.downstreamLinkCount = 0;
      }
    }
  }
  /// <summary>
  /// Optimizes the crossings.
  /// </summary>
  /// <remarks>The big trick here is the usage of weights or values attached to connected nodes which turn a problem of crossing links
  /// to an a problem of ordering numbers.</remarks>
  /// <param name="layerIndex">The layer index.</param>
  /// <param name="movingDownwards">If set to <c>true</c> we move down in the layer stack.</param>
  /// <returns>The number of nodes having moved, i.e. the number of crossings reduced.</returns>
  optimizeLayerCrossings(down, layer) {
    let iconsidered;
    let considered;
    if (down) {
      considered = this.layers[iconsidered = layer + 1];
    } else {
      considered = this.layers[iconsidered = layer - 1];
    }
    const presorted = considered.slice(0);
    if (down) {
      this.calcUpData(iconsidered);
    } else {
      this.calcDownData(iconsidered);
    }
    considered.sort((n1, n2) => {
      const n1BaryCenter = this.calcBaryCenter(n1), n2BaryCenter = this.calcBaryCenter(n2);
      if (Math.abs(n1BaryCenter - n2BaryCenter) < 1e-4) {
        if (n1.degree() === n2.degree()) {
          return this.compareByIndex(n1, n2);
        } else if (n1.degree() < n2.degree()) {
          return 1;
        }
        return -1;
      }
      const compareValue = (n2BaryCenter - n1BaryCenter) * 1e3;
      if (compareValue > 0) {
        return -1;
      } else if (compareValue < 0) {
        return 1;
      }
      return this.compareByIndex(n1, n2);
    });
    let i, moves = 0;
    for (i = 0; i < considered.length; i++) {
      if (considered[i] !== presorted[i]) {
        moves++;
      }
    }
    if (moves > 0) {
      let inode = 0;
      for (i = 0; i < considered.length; i++) {
        const node = considered[i];
        node.gridPosition = inode++;
      }
    }
    return moves;
  }
  /// <summary>
  /// Swaps a pair of nodes in a layer.
  /// </summary>
  /// <param name="layerIndex">Index of the layer.</param>
  /// <param name="n">The Nth node in the layer.</param>
  _swapPairs() {
    const maxIterations = this.options.layeredIterations;
    let iter = 0;
    while (true) {
      if (iter++ > maxIterations) {
        break;
      }
      const downwards = iter % 4 <= 1;
      const secondPass = iter % 4 === 1;
      for (let l = downwards ? 0 : this.layers.length - 1; downwards ? l <= this.layers.length - 1 : l >= 0; l += downwards ? 1 : -1) {
        const layer = this.layers[l];
        let hasSwapped = false;
        let calcCrossings = true;
        let memCrossings = 0;
        for (let n = 0; n < layer.length - 1; n++) {
          let up = 0;
          let down = 0;
          let crossBefore = 0;
          if (calcCrossings) {
            if (l !== 0) {
              up = this.countLinksCrossingBetweenTwoLayers(l - 1, l);
            }
            if (l !== this.layers.length - 1) {
              down = this.countLinksCrossingBetweenTwoLayers(l, l + 1);
            }
            if (downwards) {
              up *= 2;
            } else {
              down *= 2;
            }
            crossBefore = up + down;
          } else {
            crossBefore = memCrossings;
          }
          if (crossBefore === 0) {
            continue;
          }
          let node1 = layer[n];
          let node2 = layer[n + 1];
          let node1GridPos = node1.gridPosition;
          let node2GridPos = node2.gridPosition;
          layer[n] = node2;
          layer[n + 1] = node1;
          node1.gridPosition = node2GridPos;
          node2.gridPosition = node1GridPos;
          up = 0;
          if (l !== 0) {
            up = this.countLinksCrossingBetweenTwoLayers(l - 1, l);
          }
          down = 0;
          if (l !== this.layers.length - 1) {
            down = this.countLinksCrossingBetweenTwoLayers(l, l + 1);
          }
          if (downwards) {
            up *= 2;
          } else {
            down *= 2;
          }
          const crossAfter = up + down;
          let revert = false;
          if (secondPass) {
            revert = crossAfter >= crossBefore;
          } else {
            revert = crossAfter > crossBefore;
          }
          if (revert) {
            node1 = layer[n];
            node2 = layer[n + 1];
            node1GridPos = node1.gridPosition;
            node2GridPos = node2.gridPosition;
            layer[n] = node2;
            layer[n + 1] = node1;
            node1.gridPosition = node2GridPos;
            node2.gridPosition = node1GridPos;
            memCrossings = crossBefore;
            calcCrossings = false;
          } else {
            hasSwapped = true;
            calcCrossings = true;
          }
        }
        if (hasSwapped) {
          if (l !== this.layers.length - 1) {
            this.calcUpData(l + 1);
          }
          if (l !== 0) {
            this.calcDownData(l - 1);
          }
        }
      }
    }
  }
  /// <summary>
  /// Counts the number of links crossing between two layers.
  /// </summary>
  /// <param name="layerIndex1">The layer index.</param>
  /// <param name="layerIndex2">Another layer index.</param>
  /// <returns></returns>
  countLinksCrossingBetweenTwoLayers(ulayer, dlayer) {
    const links = this.layers[ulayer].linksTo[dlayer];
    let link1, link2, n11, n12, n21, n22, l1, l2;
    let crossings = 0;
    const length = links.length;
    for (l1 = 0; l1 < length; l1++) {
      link1 = links[l1];
      for (l2 = l1 + 1; l2 < length; l2++) {
        link2 = links[l2];
        if (link1.target.layer === dlayer) {
          n11 = link1.source;
          n12 = link1.target;
        } else {
          n11 = link1.target;
          n12 = link1.source;
        }
        if (link2.target.layer === dlayer) {
          n21 = link2.source;
          n22 = link2.target;
        } else {
          n21 = link2.target;
          n22 = link2.source;
        }
        const n11gp = n11.gridPosition;
        const n12gp = n12.gridPosition;
        const n21gp = n21.gridPosition;
        const n22gp = n22.gridPosition;
        if ((n11gp - n21gp) * (n12gp - n22gp) < 0) {
          crossings++;
        }
      }
    }
    return crossings;
  }
  calcBaryCenter(node) {
    const upstreamLinkCount = node.upstreamLinkCount;
    const downstreamLinkCount = node.downstreamLinkCount;
    const uBaryCenter = node.uBaryCenter;
    const dBaryCenter = node.dBaryCenter;
    if (upstreamLinkCount > 0 && downstreamLinkCount > 0) {
      return (uBaryCenter + dBaryCenter) / 2;
    }
    if (upstreamLinkCount > 0) {
      return uBaryCenter;
    }
    if (downstreamLinkCount > 0) {
      return dBaryCenter;
    }
    return 0;
  }
  _gridPositionComparer(x, y) {
    if (x.gridPosition < y.gridPosition) {
      return -1;
    }
    if (x.gridPosition > y.gridPosition) {
      return 1;
    }
    return 0;
  }
  _positionAscendingComparer(x, y) {
    return x.k < y.k ? -1 : x.k > y.k ? 1 : 0;
  }
  _positionDescendingComparer(x, y) {
    return x.k < y.k ? 1 : x.k > y.k ? -1 : 0;
  }
  _firstVirtualNode(layer) {
    for (let c = 0; c < layer.length; c++) {
      if (layer[c].isVirtual) {
        return c;
      }
    }
    return -1;
  }
  compareByIndex(o1, o2) {
    const i1 = o1.index;
    const i2 = o2.index;
    if (i1 < i2) {
      return 1;
    }
    if (i1 > i2) {
      return -1;
    }
    return 0;
  }
  intDiv(numerator, denominator) {
    return (numerator - numerator % denominator) / denominator;
  }
  nextVirtualNode(layer, node) {
    const nodeIndex = node.layerIndex;
    for (let i = nodeIndex + 1; i < layer.length; ++i) {
      if (layer[i].isVirtual) {
        return layer[i];
      }
    }
    return null;
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/layout/TreeLayoutProcessor.js
var TreeLayoutProcessor = class {
  constructor(options) {
    this.center = null;
    this.options = options;
  }
  layout(treeGraph, root) {
    this.graph = treeGraph;
    if (!this.graph.nodes || this.graph.nodes.length === 0) {
      return;
    }
    if (!contains(this.graph.nodes, root)) {
      throw new Error("The given root is not in the graph.");
    }
    this.center = root;
    this.graph.cacheRelationships();
    this.layoutSwitch();
  }
  layoutLeft(left) {
    this.setChildrenDirection(this.center, "Left", false);
    this.setChildrenLayout(this.center, "Default", false);
    let h = 0, w = 0, y, i, node;
    for (i = 0; i < left.length; i++) {
      node = left[i];
      node.TreeDirection = "Left";
      const s = this.measure(node, Size.Empty.bind(this));
      w = Math.max(w, s.width);
      h += s.height + this.options.verticalSeparation;
    }
    h -= this.options.verticalSeparation;
    const x = this.center.x - this.options.horizontalSeparation;
    y = this.center.y + (this.center.height - h) / 2;
    for (i = 0; i < left.length; i++) {
      node = left[i];
      const p = new Point(x - node.Size.width, y);
      this.arrange(node, p);
      y += node.Size.height + this.options.verticalSeparation;
    }
  }
  layoutRight(right) {
    this.setChildrenDirection(this.center, "Right", false);
    this.setChildrenLayout(this.center, "Default", false);
    let h = 0, w = 0, y, i, node;
    for (i = 0; i < right.length; i++) {
      node = right[i];
      node.TreeDirection = "Right";
      const s = this.measure(node, Size.Empty.bind(this));
      w = Math.max(w, s.width);
      h += s.height + this.options.verticalSeparation;
    }
    h -= this.options.verticalSeparation;
    const x = this.center.x + this.options.horizontalSeparation + this.center.width;
    y = this.center.y + (this.center.height - h) / 2;
    for (i = 0; i < right.length; i++) {
      node = right[i];
      const p = new Point(x, y);
      this.arrange(node, p);
      y += node.Size.height + this.options.verticalSeparation;
    }
  }
  layoutUp(up) {
    this.setChildrenDirection(this.center, "Up", false);
    this.setChildrenLayout(this.center, "Default", false);
    let w = 0, y, node, i;
    for (i = 0; i < up.length; i++) {
      node = up[i];
      node.TreeDirection = "Up";
      const s = this.measure(node, Size.Empty.bind(this));
      w += s.width + this.options.horizontalSeparation;
    }
    w -= this.options.horizontalSeparation;
    let x = this.center.x + this.center.width / 2 - w / 2;
    for (i = 0; i < up.length; i++) {
      node = up[i];
      y = this.center.y - this.options.verticalSeparation - node.Size.height;
      const p = new Point(x, y);
      this.arrange(node, p);
      x += node.Size.width + this.options.horizontalSeparation;
    }
  }
  layoutDown(down) {
    let node, i;
    this.setChildrenDirection(this.center, "Down", false);
    this.setChildrenLayout(this.center, "Default", false);
    let w = 0;
    for (i = 0; i < down.length; i++) {
      node = down[i];
      node.treeDirection = "Down";
      const s = this.measure(node, Size.Empty.bind(this));
      w += s.width + this.options.horizontalSeparation;
    }
    w -= this.options.horizontalSeparation;
    let x = this.center.x + this.center.width / 2 - w / 2;
    const y = this.center.y + this.options.verticalSeparation + this.center.height;
    for (i = 0; i < down.length; i++) {
      node = down[i];
      const p = new Point(x, y);
      this.arrange(node, p);
      x += node.Size.width + this.options.horizontalSeparation;
    }
  }
  layoutRadialTree() {
    this.setChildrenDirection(this.center, "Radial", false);
    this.setChildrenLayout(this.center, "Default", false);
    this.previousRoot = null;
    const startAngle = this.options.startRadialAngle * DEG_TO_RAD;
    const endAngle = this.options.endRadialAngle * DEG_TO_RAD;
    if (endAngle <= startAngle) {
      throw new Error("Final angle should not be less than the start angle.");
    }
    this.maxDepth = 0;
    this.origin = new Point(this.center.x, this.center.y);
    this.calculateAngularWidth(this.center, 0);
    if (this.maxDepth > 0) {
      this.radialLayout(this.center, this.options.radialFirstLevelSeparation, startAngle, endAngle);
    }
    this.center.Angle = endAngle - startAngle;
  }
  tipOverTree(down, startFromLevel) {
    if (isUndefined(startFromLevel)) {
      startFromLevel = 0;
    }
    this.setChildrenDirection(this.center, "Down", false);
    this.setChildrenLayout(this.center, "Default", false);
    this.setChildrenLayout(this.center, "Underneath", false, startFromLevel);
    let w = 0, node, i;
    for (i = 0; i < down.length; i++) {
      node = down[i];
      node.TreeDirection = "Down";
      const s = this.measure(node, Size.Empty.bind(this));
      w += s.width + this.options.horizontalSeparation;
    }
    w -= this.options.horizontalSeparation;
    w -= down[down.length - 1].width;
    w += down[down.length - 1].associatedShape.bounds().width;
    let x = this.center.x + this.center.width / 2 - w / 2;
    const y = this.center.y + this.options.verticalSeparation + this.center.height;
    for (i = 0; i < down.length; i++) {
      node = down[i];
      const p = new Point(x, y);
      this.arrange(node, p);
      x += node.Size.width + this.options.horizontalSeparation;
    }
  }
  calculateAngularWidth(n, d) {
    if (d > this.maxDepth) {
      this.maxDepth = d;
    }
    const w = 1e3, h = 1e3, diameter = d === 0 ? 0 : Math.sqrt(w * w + h * h) / d;
    let aw = 0;
    if (n.children.length > 0) {
      for (let i = 0, len = n.children.length; i < len; i++) {
        const child = n.children[i];
        aw += this.calculateAngularWidth(child, d + 1);
      }
      aw = Math.max(diameter, aw);
    } else {
      aw = diameter;
    }
    n.sectorAngle = aw;
    return aw;
  }
  sortChildren(n) {
    let basevalue = 0, i;
    if (n.parents.length > 1) {
      throw new Error("Node is not part of a tree.");
    }
    const p = n.parents[0];
    if (p) {
      const pl = new Point(p.x, p.y);
      const nl = new Point(n.x, n.y);
      basevalue = this.normalizeAngle(Math.atan2(pl.y - nl.y, pl.x - nl.x));
    }
    const count = n.children.length;
    if (count === 0) {
      return null;
    }
    const angle = [];
    const idx = [];
    for (i = 0; i < count; ++i) {
      const c = n.children[i];
      const l = new Point(c.x, c.y);
      idx[i] = i;
      angle[i] = this.normalizeAngle(-basevalue + Math.atan2(l.y - l.y, l.x - l.x));
    }
    bisort(angle, idx);
    const col = [];
    const children = n.children;
    for (i = 0; i < count; ++i) {
      col.push(children[idx[i]]);
    }
    return col;
  }
  normalizeAngle(angle) {
    while (angle > Math.PI * 2) {
      angle -= 2 * Math.PI;
    }
    while (angle < 0) {
      angle += Math.PI * 2;
    }
    return angle;
  }
  radialLayout(node, radius, startAngle, endAngle) {
    const deltaTheta = endAngle - startAngle;
    const deltaThetaHalf = deltaTheta / 2;
    const parentSector = node.sectorAngle;
    let fraction = 0;
    const sorted = this.sortChildren(node);
    for (let i = 0, len = sorted.length; i < len; i++) {
      const childNode = sorted[i];
      const cp = childNode;
      const childAngleFraction = cp.sectorAngle / parentSector;
      if (childNode.children.length > 0) {
        this.radialLayout(childNode, radius + this.options.radialSeparation, startAngle + fraction * deltaTheta, startAngle + (fraction + childAngleFraction) * deltaTheta);
      }
      this.setPolarLocation(childNode, radius, startAngle + fraction * deltaTheta + childAngleFraction * deltaThetaHalf);
      cp.angle = childAngleFraction * deltaTheta;
      fraction += childAngleFraction;
    }
  }
  setPolarLocation(node, radius, angle) {
    node.x = this.origin.x + radius * Math.cos(angle);
    node.y = this.origin.y + radius * Math.sin(angle);
    node.BoundingRectangle = new Rect(node.x, node.y, node.width, node.height);
  }
  /**
   * Sets the children direction recursively.
   *
   * @param node
   * @param direction
   * @param includeStart
   */
  setChildrenDirection(node, direction, includeStart) {
    const rootDirection = node.treeDirection;
    this.graph.depthFirstTraversal(node, (n) => {
      n.treeDirection = direction;
    });
    if (!includeStart) {
      node.treeDirection = rootDirection;
    }
  }
  /**
   * Sets the children layout recursively.
   *
   * @param node
   * @param layout
   * @param includeStart
   * @param startFromLevel
   */
  setChildrenLayout(node, layout, includeStart, startFromLevel) {
    if (isUndefined(startFromLevel)) {
      startFromLevel = 0;
    }
    const rootLayout = node.childrenLayout;
    if (startFromLevel > 0) {
      this.graph.assignLevels(node);
      this.graph.depthFirstTraversal(node, (s) => {
        if (s.level >= startFromLevel + 1) {
          s.childrenLayout = layout;
        }
      });
    } else {
      this.graph.depthFirstTraversal(node, (s) => {
        s.childrenLayout = layout;
      });
      if (!includeStart) {
        node.childrenLayout = rootLayout;
      }
    }
  }
  /**
   * Returns the actual size of the node. The given size is the allowed space wherein the node can lay out itself.
   *
   * @param node
   * @param givenSize
   * @returns {Size}
   */
  measure(node, givenSize) {
    let w = 0, h = 0, s;
    let result = new Size(0, 0);
    if (!node) {
      throw new Error("Node is not defined.");
    }
    const b = node.associatedShape.bounds();
    const shapeWidth = b.width;
    const shapeHeight = b.height;
    if (node.parents.length !== 1) {
      throw new Error("Node not in a spanning tree.");
    }
    const parent = node.parents[0];
    if (node.treeDirection === "Undefined") {
      node.treeDirection = parent.treeDirection;
    }
    if (isEmpty(node.children)) {
      result = new Size(Math.abs(shapeWidth) < EPSILON ? 50 : shapeWidth, Math.abs(shapeHeight) < EPSILON ? 25 : shapeHeight);
    } else if (node.children.length === 1) {
      switch (node.treeDirection) {
        case "Radial":
          s = this.measure(node.children[0], givenSize);
          w = shapeWidth + this.options.radialSeparation * Math.cos(node.AngleToParent) + s.width;
          h = shapeHeight + Math.abs(this.options.radialSeparation * Math.sin(node.AngleToParent)) + s.height;
          break;
        case "Left":
        case "Right":
          switch (node.childrenLayout) {
            case "TopAlignedWithParent":
              break;
            case "BottomAlignedWithParent":
              break;
            case "Underneath":
              s = this.measure(node.children[0], givenSize);
              w = shapeWidth + s.width + this.options.underneathHorizontalOffset;
              h = shapeHeight + this.options.underneathVerticalTopOffset + s.height;
              break;
            case "Default":
              s = this.measure(node.children[0], givenSize);
              w = shapeWidth + this.options.horizontalSeparation + s.width;
              h = Math.max(shapeHeight, s.height);
              break;
            default:
              throw new Error("Unhandled TreeDirection in the Radial layout measuring.");
          }
          break;
        case "Up":
        case "Down":
          switch (node.childrenLayout) {
            case "TopAlignedWithParent":
            case "BottomAlignedWithParent":
              break;
            case "Underneath":
              s = this.measure(node.children[0], givenSize);
              w = Math.max(shapeWidth, s.width + this.options.underneathHorizontalOffset);
              h = shapeHeight + this.options.underneathVerticalTopOffset + s.height;
              break;
            case "Default":
              s = this.measure(node.children[0], givenSize);
              h = shapeHeight + this.options.verticalSeparation + s.height;
              w = Math.max(shapeWidth, s.width);
              break;
            default:
              throw new Error("Unhandled TreeDirection in the Down layout measuring.");
          }
          break;
        default:
          throw new Error("Unhandled TreeDirection in the layout measuring.");
      }
      result = new Size(w, h);
    } else {
      let i, childNode;
      switch (node.treeDirection) {
        case "Left":
        case "Right":
          switch (node.childrenLayout) {
            case "TopAlignedWithParent":
            case "BottomAlignedWithParent":
              break;
            case "Underneath":
              w = shapeWidth;
              h = shapeHeight + this.options.underneathVerticalTopOffset;
              for (i = 0; i < node.children.length; i++) {
                childNode = node.children[i];
                s = this.measure(childNode, givenSize);
                w = Math.max(w, s.width + this.options.underneathHorizontalOffset);
                h += s.height + this.options.underneathVerticalSeparation;
              }
              h -= this.options.underneathVerticalSeparation;
              break;
            case "Default":
              w = shapeWidth;
              h = 0;
              for (i = 0; i < node.children.length; i++) {
                childNode = node.children[i];
                s = this.measure(childNode, givenSize);
                w = Math.max(w, shapeWidth + this.options.horizontalSeparation + s.width);
                h += s.height + this.options.verticalSeparation;
              }
              h -= this.options.verticalSeparation;
              break;
            default:
              throw new Error("Unhandled TreeDirection in the Right layout measuring.");
          }
          break;
        case "Up":
        case "Down":
          switch (node.childrenLayout) {
            case "TopAlignedWithParent":
            case "BottomAlignedWithParent":
              break;
            case "Underneath":
              w = shapeWidth;
              h = shapeHeight + this.options.underneathVerticalTopOffset;
              for (i = 0; i < node.children.length; i++) {
                childNode = node.children[i];
                s = this.measure(childNode, givenSize);
                w = Math.max(w, s.width + this.options.underneathHorizontalOffset);
                h += s.height + this.options.underneathVerticalSeparation;
              }
              h -= this.options.underneathVerticalSeparation;
              break;
            case "Default":
              w = 0;
              h = 0;
              for (i = 0; i < node.children.length; i++) {
                childNode = node.children[i];
                s = this.measure(childNode, givenSize);
                w += s.width + this.options.horizontalSeparation;
                h = Math.max(h, s.height + this.options.verticalSeparation + shapeHeight);
              }
              w -= this.options.horizontalSeparation;
              break;
            default:
              throw new Error("Unhandled TreeDirection in the Down layout measuring.");
          }
          break;
        default:
          throw new Error("Unhandled TreeDirection in the layout measuring.");
      }
      result = new Size(w, h);
    }
    node.SectorAngle = Math.sqrt(w * w / 4 + h * h / 4);
    node.Size = result;
    return result;
  }
  arrange(n, p) {
    const b = n.associatedShape.bounds();
    let i, pp, child, node, childrenwidth;
    const shapeWidth = b.width;
    const shapeHeight = b.height;
    if (isEmpty(n.children)) {
      n.x = p.x;
      n.y = p.y;
      n.BoundingRectangle = new Rect(p.x, p.y, shapeWidth, shapeHeight);
    } else {
      let x, y;
      let selfLocation;
      switch (n.treeDirection) {
        case "Left":
          switch (n.childrenLayout) {
            case "TopAlignedWithParent":
            case "BottomAlignedWithParent":
              break;
            case "Underneath":
              selfLocation = p;
              n.x = selfLocation.x;
              n.y = selfLocation.y;
              n.BoundingRectangle = new Rect(n.x, n.y, n.width, n.height);
              y = p.y + shapeHeight + this.options.underneathVerticalTopOffset;
              for (i = 0; i < node.children.length; i++) {
                node = node.children[i];
                x = selfLocation.x - node.associatedShape.width - this.options.underneathHorizontalOffset;
                pp = new Point(x, y);
                this.arrange(node, pp);
                y += node.Size.height + this.options.underneathVerticalSeparation;
              }
              break;
            case "Default":
              selfLocation = new Point(p.x + n.Size.width - shapeWidth, p.y + (n.Size.height - shapeHeight) / 2);
              n.x = selfLocation.x;
              n.y = selfLocation.y;
              n.BoundingRectangle = new Rect(n.x, n.y, n.width, n.height);
              x = selfLocation.x - this.options.horizontalSeparation;
              y = p.y;
              for (i = 0; i < n.children.length; i++) {
                node = n.children[i];
                pp = new Point(x - node.Size.width, y);
                this.arrange(node, pp);
                y += node.Size.height + this.options.verticalSeparation;
              }
              break;
            default:
              throw new Error("Unsupported TreeDirection");
          }
          break;
        case "Right":
          switch (n.childrenLayout) {
            case "TopAlignedWithParent":
            case "BottomAlignedWithParent":
              break;
            case "Underneath":
              selfLocation = p;
              n.x = selfLocation.x;
              n.y = selfLocation.y;
              n.BoundingRectangle = new Rect(n.x, n.y, n.width, n.height);
              x = p.x + shapeWidth + this.options.underneathHorizontalOffset;
              y = p.y + shapeHeight + this.options.underneathVerticalTopOffset;
              for (i = 0; i < n.children.length; i++) {
                node = n.children[i];
                pp = new Point(x, y);
                this.arrange(node, pp);
                y += node.Size.height + this.options.underneathVerticalSeparation;
              }
              break;
            case "Default":
              selfLocation = new Point(p.x, p.y + (n.Size.height - shapeHeight) / 2);
              n.x = selfLocation.x;
              n.y = selfLocation.y;
              n.BoundingRectangle = new Rect(n.x, n.y, n.width, n.height);
              x = p.x + shapeWidth + this.options.horizontalSeparation;
              y = p.y;
              for (i = 0; i < n.children.length; i++) {
                node = n.children[i];
                pp = new Point(x, y);
                this.arrange(node, pp);
                y += node.Size.height + this.options.verticalSeparation;
              }
              break;
            default:
              throw new Error("Unsupported TreeDirection");
          }
          break;
        case "Up":
          selfLocation = new Point(p.x + (n.Size.width - shapeWidth) / 2, p.y + n.Size.height - shapeHeight);
          n.x = selfLocation.x;
          n.y = selfLocation.y;
          n.BoundingRectangle = new Rect(n.x, n.y, n.width, n.height);
          if (Math.abs(selfLocation.x - p.x) < EPSILON) {
            childrenwidth = 0;
            for (i = 0; i < n.children.length; i++) {
              child = n.children[i];
              childrenwidth += child.Size.width + this.options.horizontalSeparation;
            }
            childrenwidth -= this.options.horizontalSeparation;
            x = p.x + (shapeWidth - childrenwidth) / 2;
          } else {
            x = p.x;
          }
          for (i = 0; i < n.children.length; i++) {
            node = n.children[i];
            y = selfLocation.y - this.options.verticalSeparation - node.Size.height;
            pp = new Point(x, y);
            this.arrange(node, pp);
            x += node.Size.width + this.options.horizontalSeparation;
          }
          break;
        case "Down":
          switch (n.childrenLayout) {
            case "TopAlignedWithParent":
            case "BottomAlignedWithParent":
              break;
            case "Underneath":
              selfLocation = p;
              n.x = selfLocation.x;
              n.y = selfLocation.y;
              n.BoundingRectangle = new Rect(n.x, n.y, n.width, n.height);
              x = p.x + this.options.underneathHorizontalOffset;
              y = p.y + shapeHeight + this.options.underneathVerticalTopOffset;
              for (i = 0; i < n.children.length; i++) {
                node = n.children[i];
                pp = new Point(x, y);
                this.arrange(node, pp);
                y += node.Size.height + this.options.underneathVerticalSeparation;
              }
              break;
            case "Default":
              selfLocation = new Point(p.x + (n.Size.width - shapeWidth) / 2, p.y);
              n.x = selfLocation.x;
              n.y = selfLocation.y;
              n.BoundingRectangle = new Rect(n.x, n.y, n.width, n.height);
              if (Math.abs(selfLocation.x - p.x) < EPSILON) {
                childrenwidth = 0;
                for (i = 0; i < n.children.length; i++) {
                  child = n.children[i];
                  childrenwidth += child.Size.width + this.options.horizontalSeparation;
                }
                childrenwidth -= this.options.horizontalSeparation;
                x = p.x + (shapeWidth - childrenwidth) / 2;
              } else {
                x = p.x;
              }
              for (i = 0; i < n.children.length; i++) {
                node = n.children[i];
                y = selfLocation.y + this.options.verticalSeparation + shapeHeight;
                pp = new Point(x, y);
                this.arrange(node, pp);
                x += node.Size.width + this.options.horizontalSeparation;
              }
              break;
            default:
              throw new Error("Unsupported TreeDirection");
          }
          break;
        case "None":
          break;
        default:
          throw new Error("Unsupported TreeDirection");
      }
    }
  }
  layoutSwitch() {
    if (!this.center) {
      return;
    }
    if (isEmpty(this.center.children)) {
      return;
    }
    let type = this.options.subtype;
    if (isUndefined(type)) {
      type = "Down";
    }
    let single, male, female, leftcount;
    const children = this.center.children;
    switch (type.toLowerCase()) {
      case "radial":
      case "radialtree":
        this.layoutRadialTree();
        break;
      case "mindmaphorizontal":
      case "mindmap":
        single = this.center.children;
        if (this.center.children.length === 1) {
          this.layoutRight(single);
        } else {
          leftcount = children.length / 2;
          male = grep(this.center.children, function(n) {
            return indexOf(children, n) < leftcount;
          });
          female = grep(this.center.children, function(n) {
            return indexOf(children, n) >= leftcount;
          });
          this.layoutLeft(male);
          this.layoutRight(female);
        }
        break;
      case "mindmapvertical":
        single = this.center.children;
        if (this.center.children.length === 1) {
          this.layoutDown(single);
        } else {
          leftcount = children.length / 2;
          male = grep(this.center.children, function(n) {
            return indexOf(children, n) < leftcount;
          });
          female = grep(this.center.children, function(n) {
            return indexOf(children, n) >= leftcount;
          });
          this.layoutUp(male);
          this.layoutDown(female);
        }
        break;
      case "right":
        this.layoutRight(this.center.children);
        break;
      case "left":
        this.layoutLeft(this.center.children);
        break;
      case "up":
      case "bottom":
        this.layoutUp(this.center.children);
        break;
      case "down":
      case "top":
        this.layoutDown(this.center.children);
        break;
      case "tipover":
      case "tipovertree":
        if (this.options.tipOverTreeStartLevel < 0) {
          throw new Error("The tip-over level should be a positive integer.");
        }
        this.tipOverTree(this.center.children, this.options.tipOverTreeStartLevel);
        break;
      case "undefined":
      case "none":
        break;
      default:
        break;
    }
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/layout/TreeLayout.js
var TreeLayout = class extends LayoutBase {
  constructor(diagram) {
    super();
    if (isUndefined(diagram)) {
      throw new Error("No diagram specified.");
    }
    this.diagram = diagram;
  }
  /**
   * Arranges the diagram in a tree-layout with the specified options and tree subtype.
   */
  layout(options) {
    this.transferOptions(options);
    const adapter = new DiagramToHyperTreeAdapter(this.diagram);
    this.graph = adapter.convert();
    const finalNodeSet = this.layoutComponents();
    return new LayoutState(this.diagram, finalNodeSet);
  }
  layoutComponents() {
    if (this.graph.isEmpty()) {
      return;
    }
    const components = this.graph.getConnectedComponents();
    if (isEmpty(components)) {
      return;
    }
    const layout = new TreeLayoutProcessor(this.options);
    const trees = [];
    for (let i = 0; i < components.length; i++) {
      const component = components[i];
      const treeGraph = this.getTree(component);
      if (!treeGraph) {
        throw new Error("Failed to find a spanning tree for the component.");
      }
      const root = treeGraph.root;
      const tree = treeGraph.tree;
      layout.layout(tree, root);
      trees.push(tree);
    }
    return this.gridLayoutComponents(trees);
  }
  /**
   * Gets a spanning tree (and root) for the given graph.
   * Ensure that the given graph is connected!
   *
   * @param graph
   * @returns {*} A literal object consisting of the found root and the spanning tree.
   */
  getTree(graph) {
    let root = null;
    if (this.options.roots && this.options.roots.length > 0) {
      for (let i = 0, len = graph.nodes.length; i < len; i++) {
        const node = graph.nodes[i];
        for (let j = 0; j < this.options.roots.length; j++) {
          const givenRootShape = this.options.roots[j];
          if (givenRootShape === node.associatedShape) {
            root = node;
            break;
          }
        }
      }
    }
    if (!root) {
      root = graph.root();
      if (!root) {
        throw new Error("Unable to find a root for the tree.");
      }
    }
    return this.getTreeForRoot(graph, root);
  }
  getTreeForRoot(graph, root) {
    const tree = graph.getSpanningTree(root);
    if (isUndefined(tree) || tree.isEmpty()) {
      return null;
    }
    return {
      tree,
      root: tree.root()
    };
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/services/adorners/AdornerBase.js
var AdornerBase = class {
  constructor(diagram, options) {
    this.diagram = diagram;
    this.options = deepExtend({}, this.options, options);
    this.visual = new Group();
    this.diagram._adorners.push(this);
  }
  refresh() {
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/services/ConnectionEditUndoUnit.js
var ConnectionEditUndoUnit = class {
  constructor(item, undoSource, undoTarget) {
    this.item = item;
    this._undoSource = undoSource;
    this._undoTarget = undoTarget;
    this._redoSource = item.source();
    this._redoTarget = item.target();
    this.title = ConnectionEditing;
  }
  undo() {
    this.item._updateConnector(this._undoSource, SOURCE);
    this.item._updateConnector(this._undoTarget, TARGET);
    this.item.updateModel();
  }
  redo() {
    this.item._updateConnector(this._redoSource, SOURCE);
    this.item._updateConnector(this._redoTarget, TARGET);
    this.item.updateModel();
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/services/routing/CascadingRouting.js
var dirBySide = {
  Left: {
    x: -1,
    y: 0
  },
  Right: {
    x: 1,
    y: 0
  },
  Top: {
    x: 0,
    y: -1
  },
  Bottom: {
    x: 0,
    y: 1
  }
};
function axisFromSide(side) {
  return side === "Left" || side === "Right" ? "H" : "V";
}
function add(p, d, k) {
  return new Point(p.x + d.x * k, p.y + d.y * k);
}
function samePoint(a, b) {
  return a.x === b.x && a.y === b.y;
}
function segmentOrientation(a, b) {
  return a.y === b.y ? "H" : "V";
}
function applyLock(last, lock) {
  return lock.axis === "x" ? new Point(lock.value, last.y) : new Point(last.x, lock.value);
}
function legacyNoLockBetweenAnchors(start, end, sourceSide, targetSide, sameSideDistance, source, target) {
  if (!sourceSide || !targetSide) {
    return [];
  }
  const deltaX = end.x - start.x;
  const deltaY = end.y - start.y;
  const sourceVert = sourceSide === "Top" || sourceSide === "Bottom";
  const targetVert = targetSide === "Top" || targetSide === "Bottom";
  const ssd = sameSideDistance !== null && sameSideDistance !== void 0 ? sameSideDistance : 30;
  if (sourceVert) {
    if (targetVert) {
      if (sourceSide === targetSide) {
        const srcY = source ? source.y : start.y;
        const tgtY = target ? target.y : end.y;
        const pointY = sourceSide === "Top" ? Math.min(srcY, tgtY) - ssd : Math.max(srcY, tgtY) + ssd;
        return [new Point(start.x, pointY), new Point(end.x, pointY)];
      }
      const midY = start.y + deltaY / 2;
      return [new Point(start.x, midY), new Point(end.x, midY)];
    }
    return [new Point(start.x, end.y)];
  }
  if (!targetVert) {
    if (sourceSide === targetSide) {
      const srcX = source ? source.x : start.x;
      const tgtX = target ? target.x : end.x;
      const pointX = sourceSide === "Left" ? Math.min(srcX, tgtX) - ssd : Math.max(srcX, tgtX) + ssd;
      return [new Point(pointX, start.y), new Point(pointX, end.y)];
    }
    const midX = start.x + deltaX / 2;
    return [new Point(midX, start.y), new Point(midX, end.y)];
  }
  return [new Point(end.x, start.y)];
}
function chooseElbowL(start, end, preferFirst, preferLast) {
  const optA = {
    mid: new Point(end.x, start.y),
    first: "H",
    last: "V"
  };
  const optB = {
    mid: new Point(start.x, end.y),
    first: "V",
    last: "H"
  };
  let candidates = [optA, optB];
  if (preferFirst) {
    const byFirst = candidates.filter((o) => o.first === preferFirst);
    if (byFirst.length) candidates = byFirst;
  }
  if (preferLast && candidates.length > 1) {
    const byLast = candidates.filter((o) => o.last === preferLast);
    if (byLast.length) candidates = byLast;
  }
  return candidates[0].mid;
}
function expandVirtualPointsToRoute(vps, locks, sourceSide, targetSide) {
  const fullPoints = [vps[0].p];
  const segmentsMeta = [];
  const preferFirstFor = (vp) => {
    if (vp.kind === "connectionStart") return axisFromSide(sourceSide);
    if (vp.kind === "lock" && vp.createdByLockIndex != null) {
      return locks[vp.createdByLockIndex].axis === "y" ? "H" : "V";
    }
    return null;
  };
  const preferLastFor = (vp) => {
    if (vp.kind === "connectionEnd") return axisFromSide(targetSide);
    return null;
  };
  for (let i = 0; i < vps.length - 1; i++) {
    const startVP = vps[i];
    const endVP = vps[i + 1];
    const start = startVP.p;
    const end = endVP.p;
    const startLockIndex = startVP.createdByLockIndex;
    const startLock = startLockIndex != null ? locks[startLockIndex] : null;
    const nextLockIndex = endVP.createdByLockIndex != null ? endVP.createdByLockIndex : locks.length;
    const pushSegment = (a2, b, isFirstOutOfStart) => {
      if (samePoint(a2, b)) return;
      const orient = segmentOrientation(a2, b);
      let owner = null;
      if (isFirstOutOfStart && startLockIndex != null && startLock && (startLock.axis === "y" && orient === "H" || startLock.axis === "x" && orient === "V")) {
        owner = startLockIndex;
      }
      segmentsMeta.push({
        a: a2,
        b,
        orientation: orient,
        ownerLockIndex: owner,
        insertIndex: nextLockIndex
      });
    };
    const last = fullPoints[fullPoints.length - 1];
    const a = samePoint(last, start) ? start : last;
    if (a.x === end.x || a.y === end.y) {
      pushSegment(a, end, true);
      fullPoints.push(end);
    } else {
      const mid = chooseElbowL(a, end, preferFirstFor(startVP), preferLastFor(endVP));
      pushSegment(a, mid, true);
      fullPoints.push(mid);
      pushSegment(mid, end, false);
      fullPoints.push(end);
    }
  }
  const dedup = [];
  for (const p of fullPoints) {
    if (dedup.length === 0 || !samePoint(dedup[dedup.length - 1], p)) dedup.push(p);
  }
  return {
    points: dedup.slice(1, -1),
    segmentsMeta
  };
}
function buildLegacyConnection(opts) {
  const {
    source,
    target,
    sourceSide,
    targetSide,
    anchorOffset = 10,
    sameSideDistance
  } = opts;
  const connectionStart = sourceSide ? add(source, dirBySide[sourceSide], anchorOffset) : source;
  const connectionEnd = targetSide ? add(target, dirBySide[targetSide], anchorOffset) : target;
  const mids = legacyNoLockBetweenAnchors(connectionStart, connectionEnd, sourceSide, targetSide, sameSideDistance, source, target);
  const vps = [{
    p: source,
    kind: "source",
    createdByLockIndex: null
  }];
  for (const m of mids) vps.push({
    p: m,
    kind: "lock",
    createdByLockIndex: null
  });
  if (!samePoint(vps[vps.length - 1].p, target)) {
    vps.push({
      p: target,
      kind: "target",
      createdByLockIndex: null
    });
  }
  const {
    points,
    segmentsMeta
  } = expandVirtualPointsToRoute(vps, [], sourceSide, targetSide);
  return {
    points,
    segmentsMeta,
    connectionStart,
    connectionEnd
  };
}
function buildEditableConnection(opts) {
  const {
    source,
    target,
    sourceSide,
    targetSide,
    locks,
    anchorOffset = 10,
    sameSideDistance
  } = opts;
  const connectionStart = sourceSide ? add(source, dirBySide[sourceSide], anchorOffset) : source;
  const connectionEnd = targetSide ? add(target, dirBySide[targetSide], anchorOffset) : target;
  const vps = [{
    p: source,
    kind: "source",
    createdByLockIndex: null
  }, {
    p: connectionStart,
    kind: "connectionStart",
    createdByLockIndex: null
  }];
  if (locks.length === 0) {
    const mids = editableNoLocksMids(connectionStart, connectionEnd, sourceSide, targetSide, sameSideDistance, source, target);
    for (const m of mids) vps.push({
      p: m,
      kind: "lock",
      createdByLockIndex: null
    });
  } else {
    for (let i = 0; i < locks.length; i++) {
      const last = vps[vps.length - 1].p;
      const next = applyLock(last, locks[i]);
      vps.push({
        p: next,
        kind: "lock",
        createdByLockIndex: i
      });
    }
  }
  if (!samePoint(vps[vps.length - 1].p, connectionEnd)) {
    vps.push({
      p: connectionEnd,
      kind: "connectionEnd",
      createdByLockIndex: null
    });
  }
  if (!samePoint(vps[vps.length - 1].p, target)) {
    vps.push({
      p: target,
      kind: "target",
      createdByLockIndex: null
    });
  }
  const {
    points,
    segmentsMeta
  } = expandVirtualPointsToRoute(vps, locks, sourceSide, targetSide);
  return {
    points,
    segmentsMeta,
    connectionStart,
    connectionEnd
  };
}
function buildConnection(opts, editingEnabled = true) {
  if (!editingEnabled) {
    const _a = opts, {
      locks
    } = _a, legacyOpts = __objRest(_a, [
      "locks"
    ]);
    return buildLegacyConnection(legacyOpts);
  }
  return buildEditableConnection(opts);
}
function dirSign(n) {
  return n === 0 ? 0 : n > 0 ? 1 : -1;
}
function simplifyOrthogonalPoints(points) {
  if (!points || points.length <= 2) return points ? points.slice() : [];
  const dedup = [];
  for (const p of points) {
    const last = dedup[dedup.length - 1];
    if (!last || last.x !== p.x || last.y !== p.y) {
      dedup.push(new Point(p.x, p.y));
    }
  }
  if (dedup.length <= 2) return dedup;
  const col = [];
  col.push(dedup[0]);
  for (let i = 1; i < dedup.length - 1; i++) {
    const a = col[col.length - 1];
    const b = dedup[i];
    const c = dedup[i + 1];
    const collinear = a.x === b.x && b.x === c.x || // vertical
    a.y === b.y && b.y === c.y;
    if (!collinear) col.push(b);
  }
  col.push(dedup[dedup.length - 1]);
  if (col.length <= 2) return col;
  const out = [col[0]];
  for (let i = 1; i < col.length; i++) {
    out.push(col[i]);
    while (out.length >= 3) {
      const A2 = out[out.length - 3];
      const B = out[out.length - 2];
      const C = out[out.length - 1];
      if (A2.y === B.y && B.y === C.y) {
        const s1 = dirSign(B.x - A2.x);
        const s2 = dirSign(C.x - B.x);
        if (s1 !== 0 && s2 !== 0 && s1 !== s2) {
          out.splice(out.length - 2, 1);
          continue;
        }
      }
      if (A2.x === B.x && B.x === C.x) {
        const s1 = dirSign(B.y - A2.y);
        const s2 = dirSign(C.y - B.y);
        if (s1 !== 0 && s2 !== 0 && s1 !== s2) {
          out.splice(out.length - 2, 1);
          continue;
        }
      }
      break;
    }
  }
  const final = [];
  for (const p of out) {
    const last = final[final.length - 1];
    if (!last || !samePoint(last, p)) final.push(p);
  }
  if (final.length >= 2) return final;
  return [col[0], col[col.length - 1]];
}
function editableNoLocksMids(start, end, sourceSide, targetSide, sameSideDistance = 30, source, target) {
  if (!sourceSide || !targetSide) {
    return [];
  }
  const sAxis = axisFromSide(sourceSide);
  const tAxis = axisFromSide(targetSide);
  if (sAxis === tAxis) {
    if (sourceSide === targetSide) {
      const src = source || start;
      const tgt = target || end;
      if (sAxis === "H") {
        const x = sourceSide === "Left" ? Math.min(src.x, tgt.x) - sameSideDistance : Math.max(src.x, tgt.x) + sameSideDistance;
        return [new Point(x, start.y), new Point(x, end.y)];
      } else {
        const y = sourceSide === "Top" ? Math.min(src.y, tgt.y) - sameSideDistance : Math.max(src.y, tgt.y) + sameSideDistance;
        return [new Point(start.x, y), new Point(end.x, y)];
      }
    }
    if (sAxis === "H") {
      const midX = (start.x + end.x) / 2;
      return [new Point(midX, start.y), new Point(midX, end.y)];
    } else {
      const midY = (start.y + end.y) / 2;
      return [new Point(start.x, midY), new Point(end.x, midY)];
    }
  }
  const aligned = start.x === end.x || start.y === end.y;
  if (aligned) return [];
  return sAxis === "H" ? [new Point(end.x, start.y)] : [new Point(start.x, end.y)];
}
function resolvePreviewTargetSide(source, target, state, opts = {}) {
  var _a;
  const h = (_a = opts.hysteresis) !== null && _a !== void 0 ? _a : 8;
  const dx = target.x - source.x;
  const dy = target.y - source.y;
  const ax = Math.abs(dx);
  const ay = Math.abs(dy);
  const nextAxis = state.lastSide == null ? ax >= ay ? "H" : "V" : state.lastSide === "Left" || state.lastSide === "Right" ? ay > ax + h ? "V" : "H" : ax > ay + h ? "H" : "V";
  const side = nextAxis === "H" ? dx >= 0 ? "Left" : "Right" : dy >= 0 ? "Top" : "Bottom";
  state.lastSide = side;
  return side;
}

// node_modules/@progress/kendo-diagram-common/dist/es/services/ConnectionDragUnit.js
var ConnectionDragUnit = class {
  constructor(options) {
    var _a, _b;
    this._undoSourceSide = null;
    this._undoTargetSide = null;
    this._redoSourceSide = null;
    this._redoTargetSide = null;
    this.item = options.item;
    this._undoLocks = options.undoLocks ? options.undoLocks.map((l) => __spreadValues({}, l)) : [];
    this._redoLocks = options.redoLocks ? options.redoLocks.map((l) => __spreadValues({}, l)) : [];
    this._undoPoints = options.undoPoints ? options.undoPoints.map((p) => p.clone()) : [];
    this._redoPoints = options.redoPoints ? options.redoPoints.map((p) => p.clone()) : [];
    this._undoRoutingMode = options.routingMode;
    this._undoSourceSide = options.sourceSide;
    this._undoTargetSide = options.targetSide;
    this._redoRoutingMode = this.item.routingMode;
    this._redoSourceSide = ((_a = this.item.buildOptions) === null || _a === void 0 ? void 0 : _a.sourceSide) || null;
    this._redoTargetSide = ((_b = this.item.buildOptions) === null || _b === void 0 ? void 0 : _b.targetSide) || null;
    this.title = ConnectionDragging;
  }
  undo() {
    this.item.locks = this._undoLocks.map((l) => __spreadValues({}, l));
    this.item.points(this._undoPoints.map((p) => p.clone()));
    this.item.updateModel();
    if (this.item.type().toLowerCase() === CASCADING) {
      this.item.routingMode = this._undoRoutingMode;
      this._applyConnectionLocks({
        sourceSide: this._undoSourceSide,
        targetSide: this._undoTargetSide
      });
    } else {
      this._updateConnection(this._undoPoints);
    }
  }
  redo() {
    this.item.locks = this._redoLocks.map((l) => __spreadValues({}, l));
    this.item.points(this._redoPoints.map((p) => p.clone()));
    this.item.updateModel();
    if (this.item.type().toLowerCase() === CASCADING) {
      this.item.routingMode = this._redoRoutingMode;
      this._applyConnectionLocks({
        sourceSide: this._redoSourceSide,
        targetSide: this._redoTargetSide
      });
    } else {
      this._updateConnection(this._redoPoints);
    }
  }
  _applyConnectionLocks(options = {}) {
    this.item._resolveConnectors();
    this.item.buildOptions = __spreadProps(__spreadValues(__spreadValues({}, this.item.buildOptions), options), {
      source: this.item.sourcePoint(),
      target: this.item.targetPoint()
    });
    const route = buildConnection(__spreadProps(__spreadValues({}, this.item.buildOptions), {
      locks: this.item.locks
    }));
    this.item.route = route;
    const simplified = simplifyOrthogonalPoints([this.item.sourcePoint(), ...route.points, this.item.targetPoint()]);
    this._updateConnection(simplified.slice(1, -1));
  }
  _updateConnection(points) {
    this.item.points(points);
    this.item.refresh();
    if (this.item.resizeAdorner) {
      this.item.resizeAdorner.refresh();
    }
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/dom/utils.js
function mwDelta(e) {
  let delta = 0;
  if (e.wheelDelta) {
    delta = -e.wheelDelta / 40;
    delta = delta > 0 ? Math.ceil(delta) : Math.floor(delta);
  } else if (e.detail) {
    delta = e.detail;
  }
  return delta;
}
function isAutoConnector(connector) {
  return connector.options.name.toLowerCase() === AUTO.toLowerCase();
}
function closestConnector(point, connectors2) {
  let minimumDistance = MAXINT, resCtr, connector;
  for (let i = 0; i < connectors2.length; i++) {
    connector = connectors2[i];
    if (!isAutoConnector(connector)) {
      const dist2 = point.distanceTo(connector.position());
      if (dist2 < minimumDistance) {
        minimumDistance = dist2;
        resCtr = connector;
      }
    }
  }
  return resCtr;
}
function indicesOfItems(group, visuals) {
  const indices = [];
  let i, visual;
  const children = group.drawingContainer().children;
  const length = children.length;
  for (i = 0; i < visuals.length; i++) {
    visual = visuals[i];
    for (let j = 0; j < length; j++) {
      if (children[j] === visual.drawingContainer()) {
        indices.push(j);
        break;
      }
    }
  }
  return indices;
}
function translateToOrigin(visual) {
  const bbox = visual.drawingContainer().clippedBBox(null);
  if (bbox.origin.x !== 0 || bbox.origin.y !== 0) {
    visual.position(-bbox.origin.x, -bbox.origin.y);
  }
}
function filterShapeDataItem(dataItem) {
  const result = {};
  dataItem = dataItem || {};
  if (defined(dataItem.text) && dataItem.text !== null) {
    result.text = dataItem.text;
  }
  if (defined(dataItem.x) && dataItem.x !== null) {
    result.x = dataItem.x;
  }
  if (defined(dataItem.y) && dataItem.y !== null) {
    result.y = dataItem.y;
  }
  if (defined(dataItem.width) && dataItem.width !== null) {
    result.width = dataItem.width;
  }
  if (defined(dataItem.height) && dataItem.height !== null) {
    result.height = dataItem.height;
  }
  if (defined(dataItem.type) && dataItem.type !== null) {
    result.type = dataItem.type;
  }
  return result;
}
function filterConnectionDataItem(dataItem) {
  const result = {};
  dataItem = dataItem || {};
  if (defined(dataItem.text) && dataItem.text !== null) {
    result.content = dataItem.text;
  }
  if (defined(dataItem.type) && dataItem.type !== null) {
    result.type = dataItem.type;
  }
  if (defined(dataItem.from) && dataItem.from !== null) {
    result.from = dataItem.from;
  }
  if (defined(dataItem.fromConnector) && dataItem.fromConnector !== null) {
    result.fromConnector = dataItem.fromConnector;
  }
  if (defined(dataItem.fromX) && dataItem.fromX !== null) {
    result.fromX = dataItem.fromX;
  }
  if (defined(dataItem.fromY) && dataItem.fromY !== null) {
    result.fromY = dataItem.fromY;
  }
  if (defined(dataItem.to) && dataItem.to !== null) {
    result.to = dataItem.to;
  }
  if (defined(dataItem.toConnector) && dataItem.toConnector !== null) {
    result.toConnector = dataItem.toConnector;
  }
  if (defined(dataItem.toX) && dataItem.toX !== null) {
    result.toX = dataItem.toX;
  }
  if (defined(dataItem.toY) && dataItem.toY !== null) {
    result.toY = dataItem.toY;
  }
  return result;
}
var FlowchartShapeType;
(function(FlowchartShapeType2) {
  FlowchartShapeType2["Terminator"] = "Terminator";
  FlowchartShapeType2["Process"] = "Process";
  FlowchartShapeType2["Decision"] = "Decision";
  FlowchartShapeType2["PredefinedProcess"] = "PredefinedProcess";
  FlowchartShapeType2["Document"] = "Document";
  FlowchartShapeType2["MultipleDocuments"] = "MultipleDocuments";
  FlowchartShapeType2["ManualInputOutput"] = "ManualInputOutput";
  FlowchartShapeType2["Preparation"] = "Preparation";
  FlowchartShapeType2["ManualOperation"] = "ManualOperation";
  FlowchartShapeType2["InternalStorage"] = "InternalStorage";
  FlowchartShapeType2["Display"] = "Display";
  FlowchartShapeType2["DirectAccessStorage"] = "DirectAccessStorage";
  FlowchartShapeType2["Database"] = "Database";
  FlowchartShapeType2["OnPageConnector"] = "OnPageConnector";
  FlowchartShapeType2["OffPageConnector"] = "OffPageConnector";
  FlowchartShapeType2["DataInputOutput"] = "DataInputOutput";
  FlowchartShapeType2["SummingJunction"] = "SummingJunction";
  FlowchartShapeType2["LogicalOr"] = "LogicalOr";
  FlowchartShapeType2["Merge"] = "Merge";
  FlowchartShapeType2["Extract"] = "Extract";
  FlowchartShapeType2["DataStorage"] = "DataStorage";
  FlowchartShapeType2["Delay"] = "Delay";
  FlowchartShapeType2["Sort"] = "Sort";
  FlowchartShapeType2["Collate"] = "Collate";
})(FlowchartShapeType || (FlowchartShapeType = {}));
var documentConnectors = [{
  name: "top"
}, {
  name: "bottom",
  position: function(shape) {
    const height = shape.bounds().height;
    const amplitude = height * shape.shapeVisual.options.waveRatio;
    const position = shape.getPosition("top");
    position.y += height - amplitude * 0.4;
    return position;
  }
}, {
  name: "left"
}, {
  name: "right"
}, {
  name: "auto"
}];
var triangleConnectors = [{
  name: "top"
}, {
  name: "bottom"
}, {
  name: "left",
  position: function(shape) {
    const position = shape.getPosition("left");
    const bounds = shape.bounds();
    position.x += bounds.width / 4 - shape.shapeVisual.options.cornerRadius * 0.6 * (bounds.width / bounds.height);
    return position;
  }
}, {
  name: "right",
  position: function(shape) {
    const position = shape.getPosition("right");
    const bounds = shape.bounds();
    position.x -= bounds.width / 4 - shape.shapeVisual.options.cornerRadius * 0.6 * (bounds.width / bounds.height);
    return position;
  }
}, {
  name: "auto"
}];
var connectors = {
  [FlowchartShapeType.Extract]: triangleConnectors,
  [FlowchartShapeType.Merge]: triangleConnectors,
  [FlowchartShapeType.Document]: documentConnectors,
  [FlowchartShapeType.MultipleDocuments]: documentConnectors,
  [FlowchartShapeType.DataInputOutput]: [{
    name: "top"
  }, {
    name: "bottom"
  }, {
    name: "left",
    position: function(shape) {
      const position = shape.getPosition("left");
      position.x += shape.bounds().width * shape.shapeVisual.options.slantRatio / 2 - shape.shapeVisual.options.cornerRadius / 5;
      return position;
    }
  }, {
    name: "right",
    position: function(shape) {
      const position = shape.getPosition("right");
      position.x -= shape.bounds().width * shape.shapeVisual.options.slantRatio / 2 - shape.shapeVisual.options.cornerRadius / 5;
      return position;
    }
  }, {
    name: "auto"
  }],
  [FlowchartShapeType.ManualOperation]: [{
    name: "top"
  }, {
    name: "bottom"
  }, {
    name: "left",
    position: function(shape) {
      const position = shape.getPosition("left");
      position.x += shape.bounds().width * shape.shapeVisual.options.baseShrinkRatio / (4 + shape.shapeVisual.options.cornerRadius / 10);
      return position;
    }
  }, {
    name: "right",
    position: function(shape) {
      const position = shape.getPosition("right");
      position.x -= shape.bounds().width * shape.shapeVisual.options.baseShrinkRatio / (4 + shape.shapeVisual.options.cornerRadius / 10);
      return position;
    }
  }, {
    name: "auto"
  }],
  [FlowchartShapeType.ManualInputOutput]: [{
    name: "top",
    position: function(shape) {
      const position = shape.getPosition("top");
      position.y += shape.bounds().height * shape.shapeVisual.options.topSlantRatio / 2;
      return position;
    }
  }, {
    name: "bottom"
  }, {
    name: "left"
  }, {
    name: "right"
  }, {
    name: "auto"
  }],
  [FlowchartShapeType.DataStorage]: [{
    name: "top"
  }, {
    name: "bottom"
  }, {
    name: "left"
  }, {
    name: "right",
    position: function(shape) {
      const width = shape.bounds().width;
      const position = shape.getPosition("right");
      position.x -= width * shape.shapeVisual.options.ellipseRadiusXRatio;
      return position;
    }
  }, {
    name: "auto"
  }]
};

// node_modules/@progress/kendo-diagram-common/dist/es/services/RotateUnit.js
var RotateUnit = class {
  constructor(adorner, shapes2, undoRotates) {
    this.shapes = shapes2;
    this.undoRotates = undoRotates;
    this.title = "Rotation";
    this.redoRotates = [];
    this.redoAngle = adorner._angle;
    this.adorner = adorner;
    this.center = adorner._innerBounds.center();
    for (let i = 0; i < this.shapes.length; i++) {
      this.redoRotates.push(this.redoAngle);
    }
  }
  undo() {
    let i, shape;
    for (i = 0; i < this.shapes.length; i++) {
      shape = this.shapes[i];
      shape.rotate(this.undoRotates[i], this.center, false);
      if ("layout" in shape) {
        shape.layout(shape);
      }
      shape.updateModel();
    }
    if (this.adorner) {
      this.adorner._initialize();
      this.adorner.refresh();
    }
  }
  redo() {
    let i, shape;
    for (i = 0; i < this.shapes.length; i++) {
      shape = this.shapes[i];
      shape.rotate(this.redoRotates[i], this.center, false);
      if ("layout" in shape) {
        shape.layout(shape);
      }
      shape.updateModel();
    }
    if (this.adorner) {
      this.adorner._initialize();
      this.adorner.refresh();
    }
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/dom/Connector.js
var defaultOptions18 = {
  width: 10,
  height: 10,
  fill: {
    color: DEFAULT_CONNECTION_BACKGROUND
  },
  hover: {
    stroke: {
      width: 1
    }
  },
  offset: 10
};
var Connector = class {
  /**
   * Creates a new Connector instance.
   * @param shape The shape that owns this connector
   * @param options Configuration options for the connector
   */
  constructor(shape, options) {
    this.options = deepExtend({}, defaultOptions18, options);
    this.connections = [];
    this.shape = shape;
  }
  /**
   * Gets the position of this connector.
   * Uses either a custom position function from options or the shape's getPosition method.
   * Applies offset if configured.
   * @returns The Point representing the connector's position
   */
  position() {
    let pos;
    if (this.options.position) {
      pos = this.options.position(this.shape);
    } else {
      pos = this.shape.getPosition(this.options.name);
    }
    if (this.options.offset) {
      const offset = this._calculateOffset();
      pos = pos.plus(offset);
    }
    return pos;
  }
  /**
   * @hidden
   *
   * Gets the position of this connector without applying offset.
   * Used for connection rendering to draw the connection from the shape edge.
   * @returns The Point representing the connector's position without offset
   */
  positionWithoutOffset() {
    if (this.options.position) {
      return this.options.position(this.shape);
    } else {
      return this.shape.getPosition(this.options.name);
    }
  }
  /**
   * @hidden
   * Calculates the offset vector based on connector name and configured offset value.
   * @returns Point representing the offset direction and magnitude
   */
  _calculateOffset() {
    const offset = this.options.offset || 0;
    const name = (this.options.name || "").toLowerCase();
    switch (name) {
      case "top":
        return new Point(0, -offset);
      case "bottom":
        return new Point(0, offset);
      case "left":
        return new Point(-offset, 0);
      case "right":
        return new Point(offset, 0);
      default:
        return new Point(0, 0);
    }
  }
  /**
   * Converts the connector to a JSON representation for serialization.
   * @returns Object containing the shape ID and connector name
   */
  toJSON() {
    return {
      shapeId: this.shape.toString(),
      connector: this.options.name
    };
  }
  /**
   * @hidden
   * Parses a string representation to find and return a connector from the diagram.
   * @param diagram The diagram to search for the connector
   * @param str String representation in format "shapeId:connectorName"
   * @returns The matching Connector or undefined if not found
   */
  static parse(diagram, str) {
    const tempStr = str.split(":"), id = tempStr[0], name = tempStr[1] || AUTO;
    for (let i = 0; i < diagram.shapes.length; i++) {
      const shape = diagram.shapes[i];
      if (shape.options.id === id) {
        return shape.getConnector(name.trim());
      }
    }
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/dom/shapeDefaults.js
var DefaultConnectors = [{
  name: TOP
}, {
  name: BOTTOM
}, {
  name: LEFT
}, {
  name: RIGHT
}, {
  name: AUTO,
  position: function(shape) {
    return shape.getPosition("center");
  }
}];
var shapeDefaults = function(extra) {
  const defaults = {
    type: DEFAULT_SHAPE_TYPE,
    path: "",
    autoSize: true,
    visual: null,
    x: DEFAULT_SHAPE_POSITION,
    y: DEFAULT_SHAPE_POSITION,
    minWidth: DEFAULT_SHAPE_MINWIDTH,
    minHeight: DEFAULT_SHAPE_MINHEIGHT,
    width: DEFAULT_SHAPE_WIDTH,
    height: DEFAULT_SHAPE_HEIGHT,
    cornerRadius: 0,
    tooltip: {
      visible: true
    },
    hover: {},
    accessibility: {
      role: "graphics-symbol",
      ariaRoleDescription: SHAPE
    },
    editable: {
      connect: true,
      tools: []
    },
    connectors: DefaultConnectors,
    rotation: {
      angle: 0
    }
  };
  simpleExtend(defaults, extra);
  return defaults;
};

// node_modules/@progress/kendo-diagram-common/dist/es/services/template/template-service.js
var current = {
  compile: function(template, _options) {
    return template;
  }
};
var TemplateService = class {
  static register(userImplementation) {
    current = userImplementation;
  }
  static compile(template, options = {}) {
    return current.compile(template, options);
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/services/template/get-template.js
function getTemplate(options = {}) {
  let template;
  if (options.visual) {
    options.visual = template = TemplateService.compile(options.visual, options);
  } else if (options.template) {
    options.template = template = TemplateService.compile(options.template, options);
  } else if (isFunction(options.content)) {
    template = options.content;
  }
  return template;
}

// node_modules/@progress/kendo-diagram-common/dist/es/utils/get-supported-features.js
function getSupportedFeatures() {
  const os = detectOS(navigator.userAgent);
  const support = {};
  support.mobileOS = os;
  return support;
}
function detectOS(ua) {
  let os = false;
  const agentRxs = {
    wp: /(Windows Phone(?: OS)?)\s(\d+)\.(\d+(\.\d+)?)/,
    fire: /(Silk)\/(\d+)\.(\d+(\.\d+)?)/,
    android: /(Android|Android.*(?:Opera|Firefox).*?\/)\s*(\d+)\.?(\d+(\.\d+)?)?/,
    iphone: /(iPhone|iPod).*OS\s+(\d+)[._]([\d._]+)/,
    ipad: /(iPad).*OS\s+(\d+)[._]([\d_]+)/,
    playbook: /(PlayBook).*?Tablet\s*OS\s*(\d+)\.(\d+(\.\d+)?)/,
    windows: /(MSIE)\s+(\d+)\.(\d+(\.\d+)?)/,
    tizen: /(tizen).*?Version\/(\d+)\.(\d+(\.\d+)?)/i,
    sailfish: /(sailfish).*rv:(\d+)\.(\d+(\.\d+)?).*firefox/i
  }, osRxs = {
    ios: /^i(phone|pad|pod)$/i,
    android: /^android|fire$/i,
    windows: /windows/,
    wp: /wp/,
    flat: /sailfish|ffos|tizen/i
  };
  for (const agent in agentRxs) {
    if (!Object.prototype.hasOwnProperty.call(agentRxs, agent)) {
      continue;
    }
    const match = ua.match(agentRxs[agent]);
    if (match) {
      if (agent === "windows" && "plugins" in navigator) {
        return false;
      }
      os = {};
      os.device = agent;
      os.name = testRegex(agent, osRxs);
      os[os.name] = true;
      break;
    }
  }
  return os;
}
function testRegex(agent, regexes, dflt) {
  for (const regex in regexes) {
    if (regexes[regex].test(agent)) {
      return regex;
    }
  }
  return dflt !== void 0 ? dflt : agent;
}

// node_modules/@progress/kendo-diagram-common/dist/es/utils/scroller/utils.js
var extend = Object.assign;
var now = () => {
  return (/* @__PURE__ */ new Date()).getTime();
};
var addClass = (element, className) => {
  element.classList.add(className);
};
var convertToHtml = (html) => {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.firstChild;
};
var prepend = (element, originElement) => {
  originElement.insertBefore(element, originElement.firstChild);
};
var wrapInner = (parent, wrapper) => {
  parent.appendChild(wrapper);
  while (parent.firstChild !== wrapper) {
    wrapper.appendChild(parent.firstChild);
  }
};
var hasNativeScrolling = () => {
  const {
    mobileOS: mobileOS2
  } = getSupportedFeatures();
  return mobileOS2.ios || mobileOS2.android;
};
var wheelDeltaY = (e) => {
  const deltaY = e.wheelDeltaY;
  let delta;
  if (e.wheelDelta) {
    if (deltaY === void 0 || deltaY) {
      delta = e.wheelDelta;
    }
  } else if (e.detail && e.axis === e.VERTICAL_AXIS) {
    delta = -e.detail * 10;
  }
  return delta;
};

// node_modules/@progress/kendo-diagram-common/dist/es/dom/DiagramElement.js
var getTextElementType = (options) => {
  if (options.blocks) {
    return RichTextBlock;
  }
  let textWrap = options.textWrap;
  if (textWrap === void 0 && (options.text.includes(NEW_LINE_CHAR) || !linesFit(options, textRect(options).size.width))) {
    textWrap = WRAP;
  }
  if (options.border || options.position === INLINE) {
    textWrap = WRAP;
  }
  return textWrap !== WRAP ? TextBlock : MultiLineTextBlock;
};
var linesFit = (options, maxWidth) => {
  const text = options.text || "";
  const styles = getFont(options);
  return !text.split(NEW_LINE_CHAR).find((line) => drawing_exports.util.measureText(line, styles).width > maxWidth);
};
var defaultOptions19 = {
  hover: {},
  cursor: Cursors.grip,
  content: {
    align: "center middle"
  },
  selectable: true,
  serializable: true,
  enable: true
};
var DiagramElement = class extends Observable {
  /**
   * Creates a new DiagramElement instance.
   * @param options Configuration options for the diagram element
   */
  constructor(options) {
    super();
    this.dataItem = (options || {}).dataItem;
    this.options = deepExtend({
      id: randomId()
    }, defaultOptions19, options);
    this.isSelected = false;
    this.visual = new Group({
      id: this.options.id,
      autoSize: this.options.autoSize
    });
    this.id = this.options.id;
    this._template();
  }
  /** @hidden */
  _getCursor(point) {
    if (this.adorner) {
      return this.adorner._getCursor(point);
    }
    return this.options.cursor;
  }
  /**
   * Gets or sets the visibility of the diagram element.
   * @param value If provided, sets the visibility. If undefined, returns the current visibility.
   * @returns The current visibility when used as a getter
   */
  visible(value) {
    if (isUndefined(value)) {
      return this.visual.visible();
    } else {
      this.visual.visible(value);
    }
  }
  /**
   * Gets or sets the bounds of the diagram element.
   * Base implementation returns null - should be overridden by subclasses.
   * @param value The bounds to set. If not provided, returns the current bounds.
   * @returns The bounds of the element or null
   */
  bounds(value) {
    if (isUndefined(value)) {
      return null;
    }
    return null;
  }
  /**
   * Refreshes the visual representation of the diagram element.
   * Triggers a redraw of the visual component.
   */
  refresh() {
    this.visual.redraw();
  }
  /**
   * Sets the position of the diagram element.
   * @param point The new position point with x and y coordinates
   */
  position(point) {
    this.options.x = point.x;
    this.options.y = point.y;
    this.visual.position(point);
  }
  /**
   * Returns a string representation of the diagram element.
   * @returns The ID of the element as a string
   */
  toString() {
    return this.options.id;
  }
  /**
   * Serializes the diagram element to a JSON object.
   * @returns An object containing the element's options and data item information
   */
  serialize() {
    const json = deepExtend({}, {
      options: this.options
    });
    if (this.dataItem) {
      json.dataItem = this.dataItem.toString();
    }
    return json;
  }
  /** @hidden */
  _content(content) {
    if (content !== void 0) {
      const options = this.options;
      if (isString(content)) {
        options.content.text = content;
      } else if (content.blocks) {
        options.content.blocks = content.blocks;
        const _a = content, {
          blocks
        } = _a, remainingContent = __objRest(_a, [
          "blocks"
        ]);
        deepExtend(options.content, remainingContent);
      } else {
        deepExtend(options.content, content);
      }
      const contentOptions = options.content;
      let contentVisual = this._contentVisual;
      if (contentVisual && getTextElementType(contentOptions).name !== contentVisual.name) {
        const drawingElement = contentVisual.drawingContainer();
        drawingElement.parent.remove(drawingElement);
        this._contentVisual = contentVisual = null;
      }
      if (!contentVisual) {
        this._createContentVisual(contentOptions);
      } else {
        this._updateContentVisual(contentOptions);
      }
    }
    return this.options.content.blocks || this.options.content.text;
  }
  /** @hidden */
  _createContentVisual(options) {
    if (options.text || options.blocks) {
      options.shapeSize = this.bounds();
      const Type = getTextElementType(options);
      this._contentVisual = new Type(options);
      this._contentVisual._includeInBBox = false;
      this.visual.append(this._contentVisual);
    }
  }
  /** @hidden */
  _updateContentVisual(options) {
    this._contentVisual.redraw(options);
  }
  /** @hidden */
  _hitTest(point) {
    const bounds = this.bounds();
    return this.visible() && bounds.contains(point) && this.options.enable;
  }
  /** @hidden */
  _template() {
    if (this.options.content.template) {
      const data = this.dataItem || {};
      const templateOptions = extend({}, this.options.content, {
        dataItem: this.dataItem || this.options.dataItem
      });
      const elementTemplate = getTemplate(templateOptions);
      if (isFunction(elementTemplate)) {
        this.options.content.text = elementTemplate(data);
      } else if (isString(elementTemplate)) {
        this.options.content.text = elementTemplate;
      }
    }
  }
  /** @hidden */
  _canSelect() {
    return this.options.selectable !== false;
  }
  /**
   * Converts the diagram element to a JSON representation.
   * @returns Object containing the element's ID
   */
  toJSON() {
    return {
      id: this.options.id
    };
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/dom/Shape.js
var shapes = {
  Terminator,
  Process,
  Decision,
  PredefinedProcess,
  Document,
  MultipleDocuments,
  ManualInputOutput,
  Preparation,
  ManualOperation,
  InternalStorage,
  Display,
  DirectAccessStorage,
  Database,
  OnPageConnector,
  OffPageConnector,
  DataInputOutput,
  SummingJunction,
  LogicalOr,
  Merge,
  Extract,
  DataStorage,
  Delay,
  Sort,
  Collate
};
function alignRichTextContent(contentVisual, containerRect, configuredAlign) {
  const curAlign = contentVisual.options.align;
  if (contentVisual.options.align !== configuredAlign) {
    contentVisual.options.align = configuredAlign;
    if (typeof contentVisual._initText === "function") {
      contentVisual._initText();
    }
  }
  const basePosition = containerRect.topLeft();
  contentVisual.position(basePosition);
  let contentBounds = contentVisual.drawingElement.bbox(null);
  if (!contentBounds) {
    contentVisual.options.align = curAlign;
    return null;
  }
  contentVisual.options.align = configuredAlign;
  const pad = typeof contentVisual.padding === "function" ? contentVisual.padding() : {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0
  };
  let overflowX = contentBounds.width() > containerRect.width - (pad.left + pad.right);
  let overflowY = contentBounds.height() > containerRect.height - (pad.top + pad.bottom);
  if (overflowX || overflowY) {
    const runtimeAlign = alignForOverflow(configuredAlign, overflowX, overflowY);
    if (contentVisual.options.align !== runtimeAlign) {
      contentVisual.options.align = runtimeAlign;
      if (typeof contentVisual._initText === "function") {
        contentVisual._initText();
      }
      contentVisual.position(basePosition);
      contentBounds = contentVisual.drawingElement.bbox(null) || contentBounds;
      overflowX = contentBounds.width() > containerRect.width - (pad.left + pad.right);
      overflowY = contentBounds.height() > containerRect.height - (pad.top + pad.bottom);
    }
    let shiftX = 0;
    let shiftY = 0;
    if (overflowX) {
      shiftX = containerRect.x - contentBounds.origin.x + pad.left;
    }
    if (overflowY) {
      shiftY = containerRect.y - contentBounds.origin.y + pad.top;
    }
    if (shiftX !== 0 || shiftY !== 0) {
      contentVisual.position(basePosition.x + shiftX, basePosition.y + shiftY);
      contentBounds = contentVisual.drawingElement.bbox(null) || contentBounds;
    }
  }
  contentVisual.options.align = curAlign;
  return contentBounds;
}
function alignForOverflow(align, overflowX, overflowY) {
  const tokens = (align || "center middle").toLowerCase().split(/\s+/);
  let horizontal = "center";
  let vertical = "middle";
  tokens.forEach((token) => {
    if (token === "left" || token === "center" || token === "right") {
      horizontal = token;
    }
    if (token === "top" || token === "middle" || token === "bottom") {
      vertical = token;
    }
  });
  if (overflowX) {
    horizontal = "left";
  }
  if (overflowY) {
    vertical = "top";
  }
  return `${vertical} ${horizontal}`;
}
function setDrawingClip(drawingElement, clipPath) {
  if (drawingElement && typeof drawingElement.clip === "function") {
    drawingElement.clip(clipPath);
    return;
  }
  if (drawingElement && drawingElement.options && typeof drawingElement.options.set === "function") {
    drawingElement.options.set("clip", clipPath);
  }
}
var Shape = class _Shape extends DiagramElement {
  /**
   * Creates a new Shape instance.
   * @param options Configuration options for the shape
   * @param diagram The diagram that will contain this shape
   */
  constructor(options, diagram) {
    super(options);
    this.name = SHAPE;
    this._originalWidth = options === null || options === void 0 ? void 0 : options.width;
    this._originalHeight = options === null || options === void 0 ? void 0 : options.height;
    this.options = deepExtend({}, this.options, shapeDefaults({
      connectors: void 0
    }), options);
    if (this.options.type === "text") {
      this.options.content.textWrap = NO_WRAP;
    }
    this.diagram = diagram;
    this.updateOptionsFromModel();
    this.connectors = [];
    this.type = this.options.type;
    this.createShapeVisual();
    this.updateBounds();
    this.content(this.content());
    this._createConnectors();
  }
  /** @hidden */
  _setOptionsFromModel(model) {
    const modelOptions = filterShapeDataItem(model || this.dataItem);
    this.options = deepExtend({}, this.options, modelOptions);
    this.redrawVisual();
  }
  /**
   * Updates the shape options from the model data.
   * @param model The model data to extract options from
   * @param field Specific field to update, if any
   */
  updateOptionsFromModel(model, field) {
    if (this.diagram && this.diagram._isEditable) {
      const modelOptions = filterShapeDataItem(model || this.dataItem);
      if (model && field) {
        if (!contains(["x", "y", "width", "height"], field)) {
          if (this.options.visual) {
            this._redrawVisual();
          } else if (modelOptions.type) {
            this.options = deepExtend({}, this.options, modelOptions);
            this._redrawVisual();
          }
          if (this.options.content) {
            this._template();
            this.content(this.options.content);
          }
        } else {
          const bounds = this.bounds();
          bounds[field] = model[field];
          this.bounds(bounds);
        }
      } else {
        this.options = deepExtend({}, this.options, modelOptions);
      }
    }
  }
  /** @hidden */
  _redrawVisual() {
    this.visual.clear();
    this._contentVisual = null;
    this.options.dataItem = this.dataItem;
    this.createShapeVisual();
    this.updateBounds();
  }
  /**
   * Redraws the shape's visual representation.
   * Updates both the visual and content if present.
   */
  redrawVisual() {
    this._redrawVisual();
    if (this.options.content) {
      this._template();
      this.content(this.options.content);
    }
  }
  /**
   * Updates the shape's model data and optionally synchronizes changes.
   * @param syncChanges Whether to synchronize changes immediately
   */
  updateModel(syncChanges) {
    const diagram = this.diagram;
    if (diagram && diagram._isEditable) {
      diagram.updateShapeModel(this, syncChanges);
    }
  }
  /**
   * Updates the shape's bounds based on its visual representation and handles rotation and content alignment.
   */
  updateBounds() {
    const bounds = this.visual._measure(true);
    const options = this.options;
    this.bounds(new Rect(options.x, options.y, bounds.width, bounds.height));
    this._rotate();
    this._alignContent();
  }
  /**
   * Gets or sets the content of the shape.
   * @param content The content to set. If not provided, returns the current content.
   * @returns The current content when used as a getter
   */
  content(content) {
    const result = this._content(content);
    this._alignContent();
    return result;
  }
  /** @hidden */
  _alignContent() {
    const contentOptions = this.options.content || {};
    const contentVisual = this._contentVisual;
    if (!contentVisual) {
      setDrawingClip(this.visual.drawingContainer(), null);
      return;
    }
    setDrawingClip(this.visual.drawingContainer(), null);
    const containerRect = this.visual._measure();
    let basePosition = contentVisual.position();
    const pad = typeof contentVisual.padding === "function" ? contentVisual.padding() : {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    };
    const paddedClipRect = new geometry_exports.Rect([containerRect.x + pad.left, containerRect.y + pad.top], [Math.max(0, containerRect.width - pad.left - pad.right), Math.max(0, containerRect.height - pad.top - pad.bottom)]);
    if (contentVisual.alignable === false) {
      const richBounds = alignRichTextContent(contentVisual, containerRect, contentOptions.align || "center middle");
      if (!richBounds) {
        setDrawingClip(contentVisual.drawingContainer(), drawing_exports.Path.fromRect(paddedClipRect));
        return;
      }
      setDrawingClip(contentVisual.drawingContainer(), drawing_exports.Path.fromRect(paddedClipRect));
      return;
    }
    if (contentOptions.align && contentVisual.alignable !== false) {
      let alignContainer = containerRect;
      if (typeof contentVisual.padding === "function") {
        alignContainer = new Rect(containerRect.x + pad.left, containerRect.y + pad.top, Math.max(0, containerRect.width - pad.left - pad.right), Math.max(0, containerRect.height - pad.top - pad.bottom));
      }
      const aligner = new RectAlign(alignContainer);
      const contentBounds2 = contentVisual.drawingElement.bbox(null);
      if (!contentBounds2) {
        setDrawingClip(contentVisual.drawingContainer(), drawing_exports.Path.fromRect(paddedClipRect));
        return;
      }
      const contentRect = new Rect(0, 0, contentBounds2.width(), contentBounds2.height());
      const alignedBounds = aligner.align(contentRect, contentOptions.align);
      basePosition = alignedBounds.topLeft();
      contentVisual.position(basePosition);
    }
    const contentBounds = contentVisual.drawingElement.bbox(null);
    if (!contentBounds) {
      setDrawingClip(contentVisual.drawingContainer(), drawing_exports.Path.fromRect(paddedClipRect));
      return;
    }
    let shiftX = 0;
    let shiftY = 0;
    if (contentBounds.width() > containerRect.width - (pad.left + pad.right)) {
      shiftX = containerRect.x - contentBounds.origin.x + pad.left;
    }
    if (contentBounds.height() > containerRect.height - (pad.top + pad.bottom)) {
      shiftY = containerRect.y - contentBounds.origin.y + pad.top;
    }
    if (shiftX !== 0 || shiftY !== 0) {
      contentVisual.position(basePosition.x + shiftX, basePosition.y + shiftY);
    }
    setDrawingClip(contentVisual.drawingContainer(), drawing_exports.Path.fromRect(paddedClipRect));
  }
  /** @hidden */
  _createConnectors() {
    const options = this.options, currentConnectors = options.connectors || connectors[options.type] || DefaultConnectors, length = currentConnectors.length, connectorDefaults = options.connectorDefaults;
    let connector, i;
    for (i = 0; i < length; i++) {
      connector = new Connector(this, deepExtend({}, connectorDefaults, currentConnectors[i]));
      this.connectors.push(connector);
    }
  }
  /**
   * Gets or sets the bounds of the shape.
   * @param value The bounds to set, or a string constant for different bound types ('TRANSFORMED', 'ABSOLUTE', 'ROTATED'). If not provided, returns the current bounds.
   * @returns The bounds of the shape
   */
  bounds(value) {
    let bounds;
    if (value) {
      if (isString(value)) {
        switch (value) {
          case TRANSFORMED: {
            bounds = this._transformedBounds();
            break;
          }
          case ABSOLUTE: {
            bounds = this._transformedBounds();
            const pan = this.diagram._pan;
            bounds.x += pan.x;
            bounds.y += pan.y;
            break;
          }
          case ROTATED: {
            bounds = this._rotatedBounds();
            break;
          }
          default: {
            bounds = this._bounds;
            break;
          }
        }
      } else {
        this._setBounds(value);
        this._triggerBoundsChange();
        if (!(this.diagram && this.diagram._layouting)) {
          this.refreshConnections();
        }
      }
    } else {
      bounds = this._bounds;
    }
    return bounds;
  }
  /** @hidden */
  _setBounds(rect) {
    const options = this.options;
    const topLeft2 = rect.topLeft();
    const x = options.x = topLeft2.x;
    const y = options.y = topLeft2.y;
    const width = options.width = Math.max(rect.width, options.minWidth);
    const height = options.height = Math.max(rect.height, options.minHeight);
    this._bounds = new Rect(x, y, width, height);
    this.visual.redraw({
      x,
      y,
      width,
      height
    });
  }
  /**
   * Gets or sets the position of the shape.
   * @param point The position to set. If not provided, returns the current position.
   * @returns The current position when used as a getter
   */
  position(point) {
    if (point) {
      this.bounds(new Rect(point.x, point.y, this._bounds.width, this._bounds.height));
    } else {
      return this._bounds.topLeft();
    }
  }
  /**
   * Returns a clone of this shape.
   * @returns {Shape} A new Shape instance that is a copy of this shape
   */
  clone() {
    const json = this.serialize();
    json.options.id = randomId();
    if (this.diagram && this.diagram._isEditable && defined(this.dataItem)) {
      json.options.dataItem = this.diagram.options.cloneDataItem(this.dataItem);
    }
    return new _Shape(json.options, void 0);
  }
  /**
   * Selects or deselects the shape.
   * @param value Whether to select (true) or deselect (false) the shape. If not provided, defaults to true.
   * @returns True if the selection state changed, false otherwise
   */
  select(value) {
    const diagram = this.diagram;
    let selected, deselected;
    if (isUndefined(value)) {
      value = true;
    }
    if (this._canSelect()) {
      if (this.isSelected !== value) {
        selected = [];
        deselected = [];
        this.isSelected = value;
        if (this.isSelected) {
          diagram._selectedItems.push(this);
          selected.push(this);
        } else {
          remove(diagram._selectedItems, this);
          deselected.push(this);
        }
        if (!diagram._internalSelection) {
          diagram._selectionChanged(selected, deselected);
        }
        return true;
      }
    }
  }
  /**
   * Rotates the shape by the specified angle.
   * @param angle The rotation angle in degrees. If not provided, returns the current rotation.
   * @param center The center point for rotation. If not provided, uses the shape's center.
   * @param undoable Whether the rotation should be undoable. Defaults to true.
   * @returns The current rotation when used as a getter
   */
  rotate(angle, center, undoable) {
    const rotate = this.visual.rotate();
    if (angle !== void 0) {
      if (undoable !== false && this.diagram && this.diagram.undoRedoService && angle !== rotate.angle) {
        this.diagram.undoRedoService.add(new RotateUnit(this.diagram._resizingAdorner, [this], [rotate.angle]), false);
      }
      const b = this.bounds(), sc = new Point(b.width / 2, b.height / 2);
      let deltaAngle, newPosition;
      if (center) {
        deltaAngle = angle - rotate.angle;
        newPosition = b.center().rotate(deltaAngle, center).minus(sc);
        this._rotationOffset = this._rotationOffset.plus(newPosition.minus(b.topLeft()));
        this.position(newPosition);
      }
      this.visual.rotate(angle, sc);
      this.options.rotation.angle = angle;
      if (this.diagram && this.diagram._connectorsAdorner) {
        this.diagram._connectorsAdorner.refresh();
      }
      this.refreshConnections();
      if (this.diagram) {
        this.diagram.trigger(ITEMROTATE, {
          item: this
        });
      }
    }
    return rotate;
  }
  /**
   * Gets connections of this shape based on type.
   * @param type The type of connections to retrieve: 'in' for incoming, 'out' for outgoing, or undefined for all connections.
   * @returns Array of connections
   */
  connections(type) {
    const result = [];
    let i, j, con, cons, ctr;
    for (i = 0; i < this.connectors.length; i++) {
      ctr = this.connectors[i];
      cons = ctr.connections;
      for (j = 0, cons; j < cons.length; j++) {
        con = cons[j];
        if (type === "out") {
          const source = con.source();
          if (source.shape && source.shape === this) {
            result.push(con);
          }
        } else if (type === "in") {
          const target = con.target();
          if (target.shape && target.shape === this) {
            result.push(con);
          }
        } else {
          result.push(con);
        }
      }
    }
    return result;
  }
  /**
   * Refreshes all connections attached to this shape.
   * Updates the visual representation of all connected connections.
   */
  refreshConnections() {
    this.connections().forEach(function(connection) {
      connection.refresh();
    });
  }
  /**
   * Gets a connector of this shape either by the connector's supposed name or
   * via a Point in which case the closest connector will be returned.
   *
   * @param nameOrPoint The name of a Connector or a Point.
   * @returns {Connector} The connector matching the name or closest to the point
   */
  getConnector(nameOrPoint) {
    let i, ctr;
    if (isString(nameOrPoint)) {
      nameOrPoint = nameOrPoint.toLocaleLowerCase();
      for (i = 0; i < this.connectors.length; i++) {
        ctr = this.connectors[i];
        if (ctr.options.name.toLocaleLowerCase() === nameOrPoint) {
          return ctr;
        }
      }
    } else if (nameOrPoint instanceof Point) {
      return closestConnector(nameOrPoint, this.connectors);
    } else {
      return this.connectors.length ? this.connectors[0] : null;
    }
  }
  /**
   * Gets the position of the shape at a specific side.
   * @param side The side to get position for (e.g., 'top', 'bottom', 'left', 'right', 'center')
   * @returns The position point at the specified side
   */
  getPosition(side) {
    const b = this.bounds(), fnName = side.charAt(0).toLowerCase() + side.slice(1);
    if (isFunction(b[fnName])) {
      return this._transformPoint(b[fnName]());
    }
    return b.center();
  }
  /**
   * Redraws the shape with new options.
   * @param options The options to apply when redrawing the shape
   */
  redraw(options) {
    if (options) {
      let shapeOptions = this.options;
      let boundsChange;
      this.shapeVisual.redraw(this._visualOptions(options));
      if (this._diffNumericOptions(options, [WIDTH, HEIGHT, X, Y])) {
        this.bounds(new Rect(shapeOptions.x, shapeOptions.y, shapeOptions.width, shapeOptions.height));
        boundsChange = true;
      }
      if (options.connectors) {
        shapeOptions.connectors = options.connectors;
        this._updateConnectors();
      }
      shapeOptions = deepExtend(shapeOptions, options);
      if (options.rotation || boundsChange) {
        this._rotate();
      }
      if (shapeOptions.content) {
        this.content(shapeOptions.content);
      }
    }
  }
  /** @hidden */
  _updateConnectors() {
    const connections = this.connections();
    this.connectors = [];
    this._createConnectors();
    let connection;
    let source;
    let target;
    for (let idx = 0; idx < connections.length; idx++) {
      connection = connections[idx];
      source = connection.source();
      target = connection.target();
      if (source.shape && source.shape === this) {
        connection.source(this.getConnector(source.options.name) || null);
      } else if (target.shape && target.shape === this) {
        connection.target(this.getConnector(target.options.name) || null);
      }
      connection.updateModel();
    }
  }
  /** @hidden */
  _diffNumericOptions(options, fields) {
    return diffNumericOptions.call(this, options, fields);
  }
  /** @hidden */
  _visualOptions(options) {
    return {
      accessibility: options.accessibility,
      cornerRadius: options.cornerRadius,
      data: options.path,
      source: options.source,
      hover: options.hover,
      fill: options.fill,
      stroke: options.stroke,
      dataItem: this.dataItem || (options === null || options === void 0 ? void 0 : options.dataItem),
      autoSize: options.autoSize,
      id: options.id
    };
  }
  /** @hidden */
  _triggerBoundsChange() {
    if (this.diagram) {
      this.diagram.trigger(ITEMBOUNDSCHANGE, {
        item: this,
        bounds: this._bounds.clone()
      });
    }
  }
  /** @hidden */
  _transformPoint(point) {
    const rotate = this.rotate(), bounds = this.bounds(), tl = bounds.topLeft();
    if (rotate.angle) {
      point.rotate(rotate.angle, rotate.center().plus(tl));
    }
    return point;
  }
  /** @hidden */
  _transformedBounds() {
    const bounds = this.bounds(), tl = bounds.topLeft(), br = bounds.bottomRight();
    return Rect.fromPoints(this.diagram.modelToView(tl), this.diagram.modelToView(br));
  }
  /** @hidden */
  _rotatedBounds() {
    const bounds = this.bounds().rotatedBounds(this.rotate().angle), tl = bounds.topLeft(), br = bounds.bottomRight();
    return Rect.fromPoints(tl, br);
  }
  /** @hidden */
  _rotate() {
    const rotation = this.options.rotation;
    if (rotation && rotation.angle) {
      this.rotate(rotation.angle);
    }
    this._rotationOffset = new Point();
  }
  /** @hidden */
  _hover(value) {
    const options = this.options, hover = options.hover;
    let stroke = options.stroke, fill = options.fill;
    if (value && isDefined(hover.stroke)) {
      stroke = deepExtend({}, stroke, hover.stroke);
    }
    if (value && isDefined(hover.fill)) {
      fill = hover.fill;
    }
    this.shapeVisual.redraw({
      stroke,
      fill
    });
    if (options.editable && options.editable.connect) {
      this.diagram._showConnectors(this, value);
    }
  }
  /** @hidden */
  _getMaxConnectorOffset() {
    var _a, _b, _c;
    let maxOffset = 0;
    for (let i = 0; i < this.connectors.length; i++) {
      const connector = this.connectors[i];
      const offset = connector.options.offset || 0;
      const connectorSize = Math.max(connector.options.width || 0, connector.options.height || 0);
      const strokeWidth = ((_a = connector.options.stroke) === null || _a === void 0 ? void 0 : _a.width) || 0;
      const hoverStrokeWidth = ((_c = (_b = connector.options.hover) === null || _b === void 0 ? void 0 : _b.stroke) === null || _c === void 0 ? void 0 : _c.width) || strokeWidth;
      const totalOffset = offset + connectorSize / 2 + Math.max(strokeWidth, hoverStrokeWidth);
      if (totalOffset > maxOffset) {
        maxOffset = totalOffset;
      }
    }
    return maxOffset;
  }
  /** @hidden */
  _hitTest(value) {
    if (this.visible()) {
      let bounds = this.bounds();
      const angle = this.rotate().angle;
      const maxOffset = this._getMaxConnectorOffset();
      let rotatedPoint;
      if (maxOffset > 0) {
        bounds = bounds.clone();
        bounds.inflate(maxOffset, maxOffset);
      }
      if (value.isEmpty && !value.isEmpty()) {
        return Intersect.rects(value, bounds, angle ? angle : 0);
      } else {
        rotatedPoint = value.clone().rotate(angle, bounds.center());
        if (bounds.contains(rotatedPoint)) {
          return this;
        }
      }
    }
  }
  /**
   * Converts the shape to a JSON representation for serialization.
   * @returns Object containing the shape's ID
   */
  toJSON() {
    return {
      shapeId: this.options.id
    };
  }
  /**
   * Creates the visual representation of the shape based on its type and options.
   * Supports custom templates, predefined shapes (rectangle, circle, text, image), and custom paths.
   */
  createShapeVisual() {
    const options = this.options;
    const visualOptions = this._visualOptions(options);
    const visualTemplate = options.visual ? TemplateService.compile(options.visual, options) : options.visual;
    const type = (options.type + "").toLocaleLowerCase();
    let shapeVisual;
    visualOptions.width = options.width;
    visualOptions.height = options.height;
    if (isFunction(visualTemplate)) {
      shapeVisual = visualTemplate.call(this, options);
    } else if (visualOptions.data) {
      shapeVisual = new Path(visualOptions);
      translateToOrigin(shapeVisual);
    } else if (type === "rectangle") {
      shapeVisual = new Rectangle(visualOptions);
    } else if (type === "circle") {
      shapeVisual = new Circle(visualOptions);
    } else if (type === "text") {
      shapeVisual = new TextBlock(visualOptions);
    } else if (type === "image") {
      shapeVisual = new Image(visualOptions);
    } else if (shapes[options.type]) {
      shapeVisual = new shapes[options.type](visualOptions);
    } else {
      shapeVisual = new Path(visualOptions);
    }
    this.shapeVisual = shapeVisual;
    this.visual.append(this.shapeVisual);
  }
  /** @hidden */
  focus() {
    this.shapeVisual.drawingElement.options.set(CLASS_NAME, FOCUS_CLASS);
  }
  /** @hidden */
  blur() {
    this.shapeVisual.drawingElement.options.set(CLASS_NAME, EMPTY);
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/services/adorners/ConnectionEditAdorner.js
var ConnectionEditAdorner = class extends AdornerBase {
  constructor(connection, options) {
    options = deepExtend({
      handles: {}
    }, options);
    super(connection.diagram, options);
    this.connection = connection;
    const diagram = this.connection.diagram;
    this._ts = diagram.toolService;
    const sp = this.connection.sourcePoint();
    const tp = this.connection.targetPoint();
    this.spVisual = new Circle(deepExtend(this.options.handles, {
      center: sp
    }));
    this.epVisual = new Circle(deepExtend(this.options.handles, {
      center: tp
    }));
    this.visual.append(this.spVisual);
    this.visual.append(this.epVisual);
  }
  _getCursor() {
    return Cursors.move;
  }
  start(p) {
    this.handle = this._hitTest(p);
    this.startPoint = p;
    this._initialSource = this.connection.source();
    this._initialTarget = this.connection.target();
    this._initialLocks = (this.connection.locks || []).map((l) => __spreadValues({}, l));
    this._initialPoints = (this.connection.points() || []).map((pt) => pt.clone());
    switch (this.handle) {
      case -1:
        if (this.connection.targetConnector) {
          this._ts._connectionManipulation(this.connection, this.connection.targetConnector.shape);
        }
        break;
      case 1:
        if (this.connection.sourceConnector) {
          this._ts._connectionManipulation(this.connection, this.connection.sourceConnector.shape);
        }
        break;
      default:
        break;
    }
  }
  move(handle, p) {
    const ts = this.diagram.toolService;
    let targetPoint = p;
    const connector = ts._hoveredConnector;
    if (connector) {
      const isSourceHandle = handle === -1;
      const isTargetHandle = handle === 1;
      if (isSourceHandle && connector._c !== this.connection.targetConnector) {
        targetPoint = connector._c.position();
      } else if (isTargetHandle && connector._c !== this.connection.sourceConnector) {
        targetPoint = connector._c.position();
      }
    }
    switch (handle) {
      case -1:
        this.connection.source(targetPoint);
        break;
      case 1:
        this.connection.target(targetPoint);
        break;
      default: {
        const delta = p.minus(this.startPoint);
        this.startPoint = p;
        const type = this.connection.type();
        if (type && type.toLowerCase() === CASCADING) {
          if (this.connection.locks && this.connection.locks.length > 0) {
            this.connection.locks.forEach((l) => {
              if (l.axis === "x") {
                l.value += delta.x;
              } else {
                l.value += delta.y;
              }
            });
          }
        }
        if (this.connection.points().length > 0) {
          const points = this.connection.points().map((pt) => pt.plus(delta));
          this.connection.points(points);
        }
        if (!this.connection.sourceConnector) {
          this.connection.source(this.connection.sourcePoint().plus(delta));
        }
        if (!this.connection.targetConnector) {
          this.connection.target(this.connection.targetPoint().plus(delta));
        }
        break;
      }
    }
    this.connection.refresh();
    this.refresh();
    return true;
  }
  stop(p) {
    var _a, _b;
    const ts = this.diagram.toolService, item = ts.hoveredItem;
    let target;
    if (ts._hoveredConnector) {
      target = ts._hoveredConnector._c;
    } else if (item && item instanceof Shape) {
      target = item.getConnector(AUTO) || item.getConnector(p);
    } else {
      target = p;
    }
    if (this.handle === -1) {
      this.connection.source(target);
    } else if (this.handle === 1) {
      this.connection.target(target);
    }
    const handle = this.handle;
    this.handle = void 0;
    this._ts._connectionManipulation();
    if (handle === -1 || handle === 1) {
      return new ConnectionEditUndoUnit(this.connection, this._initialSource, this._initialTarget);
    }
    return new ConnectionDragUnit({
      item: this.connection,
      undoLocks: this._initialLocks,
      redoLocks: this.connection.locks || [],
      undoPoints: this._initialPoints,
      redoPoints: (this.connection.points() || []).map((pt) => pt.clone()),
      routingMode: this.connection.routingMode,
      sourceSide: ((_a = this.connection.buildOptions) === null || _a === void 0 ? void 0 : _a.sourceSide) || null,
      targetSide: ((_b = this.connection.buildOptions) === null || _b === void 0 ? void 0 : _b.targetSide) || null
    });
  }
  _hitTest(point) {
    const sourcePoint = this.connection.sourcePoint();
    const targetPoint = this.connection.targetPoint();
    const radiusX = this.options.handles.width / 2 + HIT_TEST_DISTANCE;
    const radiusY = this.options.handles.height / 2 + HIT_TEST_DISTANCE;
    const sourcePointDistance = sourcePoint.distanceTo(point);
    const targetPointDistance = targetPoint.distanceTo(point);
    const sourceHandle = new Rect(sourcePoint.x, sourcePoint.y).inflate(radiusX, radiusY).contains(point);
    const targetHandle = new Rect(targetPoint.x, targetPoint.y).inflate(radiusX, radiusY).contains(point);
    let handle = 0;
    if (sourceHandle && (!targetHandle || sourcePointDistance < targetPointDistance)) {
      handle = -1;
    } else if (targetHandle && (!sourceHandle || targetPointDistance < sourcePointDistance)) {
      handle = 1;
    }
    return handle;
  }
  refresh() {
    this.spVisual.redraw({
      center: this.diagram.modelToLayer(this.connection.sourcePoint())
    });
    this.epVisual.redraw({
      center: this.diagram.modelToLayer(this.connection.targetPoint())
    });
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/services/adorners/ConnectionResizeAdorner/normalizeLocks.js
function normalizeLocks(locks, connectionStart) {
  if (!locks.length) return [];
  const hadX = locks.some((l) => l.axis === "x");
  const hadY = locks.some((l) => l.axis === "y");
  const out = [];
  let last = new Point(connectionStart.x, connectionStart.y);
  for (let i = 0; i < locks.length; i++) {
    const l = locks[i];
    const next = l.axis === "x" ? new Point(l.value, last.y) : new Point(last.x, l.value);
    const isNoop = next.x === last.x && next.y === last.y;
    if (!isNoop) {
      out.push(l);
      last = next;
      continue;
    }
    const hasSameAxisLater = locks.slice(i + 1).some((x) => x.axis === l.axis);
    const hasSameAxisAlready = out.some((x) => x.axis === l.axis);
    const shouldKeepNoop = !hasSameAxisAlready && !hasSameAxisLater || // this is the only lock of this axis
    false;
    if (shouldKeepNoop) {
      out.push(l);
    }
  }
  if (hadX && !out.some((l) => l.axis === "x")) {
    const firstX = locks.find((l) => l.axis === "x");
    if (firstX) out.push(firstX);
  }
  if (hadY && !out.some((l) => l.axis === "y")) {
    const firstY = locks.find((l) => l.axis === "y");
    if (firstY) out.unshift(firstY);
  }
  return out;
}

// node_modules/@progress/kendo-diagram-common/dist/es/services/adorners/ConnectionResizeAdorner/segmentIndex.js
function findSegmentIndexFromHandlePoint(handle, segmentsMeta, opts = {}) {
  var _a;
  const tol = (_a = opts.tolerance) !== null && _a !== void 0 ? _a : 6;
  const tol2 = tol * tol;
  let bestIdx = -1;
  let bestD2 = Number.POSITIVE_INFINITY;
  for (let i = 0; i < segmentsMeta.length; i++) {
    const seg = segmentsMeta[i];
    const d2 = distPointToOrthoSegmentSquared(handle, seg.a, seg.b);
    if (d2 < bestD2) {
      bestD2 = d2;
      bestIdx = i;
    }
  }
  if (bestIdx === -1 || bestD2 > tol2) return -1;
  const eps = 1e-9;
  const candidates = [];
  for (let i = 0; i < segmentsMeta.length; i++) {
    const d2 = distPointToOrthoSegmentSquared(handle, segmentsMeta[i].a, segmentsMeta[i].b);
    if (Math.abs(d2 - bestD2) < eps) candidates.push(i);
  }
  if (candidates.length > 1) {
    let chosen = candidates[0];
    let bestLen2 = segLen2(segmentsMeta[chosen].a, segmentsMeta[chosen].b);
    for (let k = 1; k < candidates.length; k++) {
      const idx = candidates[k];
      const len2 = segLen2(segmentsMeta[idx].a, segmentsMeta[idx].b);
      if (len2 > bestLen2) {
        bestLen2 = len2;
        chosen = idx;
      }
    }
    return chosen;
  }
  return bestIdx;
}
function segLen2(a, b) {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  return dx * dx + dy * dy;
}
function distPointToOrthoSegmentSquared(p, a, b) {
  if (a.y === b.y) {
    const y = a.y;
    const minX = Math.min(a.x, b.x);
    const maxX = Math.max(a.x, b.x);
    if (p.x >= minX && p.x <= maxX) {
      const dy3 = p.y - y;
      return dy3 * dy3;
    }
    const ex = p.x < minX ? minX : maxX;
    const dx2 = p.x - ex;
    const dy2 = p.y - y;
    return dx2 * dx2 + dy2 * dy2;
  }
  const x = a.x;
  const minY = Math.min(a.y, b.y);
  const maxY = Math.max(a.y, b.y);
  if (p.y >= minY && p.y <= maxY) {
    const dx2 = p.x - x;
    return dx2 * dx2;
  }
  const ey = p.y < minY ? minY : maxY;
  const dx = p.x - x;
  const dy = p.y - ey;
  return dx * dx + dy * dy;
}

// node_modules/@progress/kendo-diagram-common/dist/es/services/adorners/ConnectionResizeAdorner/pruneRedundantLocks.js
function pointsSignature(points, tolerance) {
  const r = (v) => Math.round(v / tolerance) * tolerance;
  return points.map((p) => `${r(p.x)},${r(p.y)}`).join(";");
}
function buildRenderPoints(buildOpts, locks) {
  const route = buildConnection(__spreadProps(__spreadValues({}, buildOpts), {
    locks
  }));
  const full = [buildOpts.source, ...route.points, buildOpts.target];
  return simplifyOrthogonalPoints(full);
}
function pruneRedundantLocks(locks, buildOpts, pruneOpts = {}) {
  var _a;
  const tolerance = (_a = pruneOpts.tolerance) !== null && _a !== void 0 ? _a : 0.5;
  if (!locks.length) return locks;
  const baseSig = pointsSignature(buildRenderPoints(buildOpts, locks), tolerance);
  let current2 = locks.slice();
  let changed = true;
  while (changed && current2.length) {
    changed = false;
    for (let i = 0; i < current2.length; i++) {
      const candidate = current2.slice(0, i).concat(current2.slice(i + 1));
      const sig = pointsSignature(buildRenderPoints(buildOpts, candidate), tolerance);
      if (sig === baseSig) {
        current2 = candidate;
        changed = true;
        break;
      }
    }
  }
  return current2;
}

// node_modules/@progress/kendo-diagram-common/dist/es/services/adorners/ConnectionResizeAdorner/CascadingConnection.js
function getAxisFromSegment(seg) {
  return seg.orientation === "H" ? "y" : "x";
}
function pointOnOrthoSegment(p, a, b, tol) {
  if (a.y === b.y) {
    const minX = Math.min(a.x, b.x), maxX = Math.max(a.x, b.x);
    return Math.abs(p.y - a.y) <= tol && p.x >= minX - tol && p.x <= maxX + tol;
  }
  const minY = Math.min(a.y, b.y), maxY = Math.max(a.y, b.y);
  return Math.abs(p.x - a.x) <= tol && p.y >= minY - tol && p.y <= maxY + tol;
}
var CascadingConnectionResizeAdorner = class extends AdornerBase {
  constructor(connection, options) {
    super(connection.diagram, deepExtend({}, options));
    this._sourceSide = null;
    this._targetSide = null;
    this.connection = connection;
    this.handles = [];
    this.activeHandle = null;
    this._firstMove = false;
    if (options) {
      this._createHandles();
    }
    this.diagram.bind("dblclick", this.onDblClick.bind(this));
  }
  onDblClick(e) {
    const handle = e.item && e.item.name === CONNECTION && this._hitTest(e.point);
    if (!handle || !handle.vertex) {
      return;
    }
    const segmentsMeta = this.connection.route.segmentsMeta;
    const segmentIndex = findSegmentIndexFromHandlePoint(handle.point, segmentsMeta, {
      tolerance: 8
    });
    const seg = segmentsMeta[segmentIndex];
    if (seg && seg.ownerLockIndex != null) {
      this.connection.locks.splice(seg.ownerLockIndex, 1);
      this.connection.routingMode = this.connection.locks.length ? "manual" : "auto";
      const route = buildConnection(__spreadProps(__spreadValues({}, this.connection.buildOptions), {
        locks: this.connection.locks
      }));
      const source = this.connection.sourcePoint();
      const target = this.connection.targetPoint();
      const renderPoints = simplifyOrthogonalPoints([source, ...route.points, target]);
      this.connection.points(renderPoints.slice(1, -1));
      this.connection.route = route;
      this.connection.refresh();
      this.refresh();
    }
  }
  createMiddlePoints() {
    var _a;
    const route = this.connection.route;
    const result = [];
    if (!route) {
      return result;
    }
    const points = route.points;
    const all2 = this.connection.allPoints();
    const source = all2[0];
    const target = all2[all2.length - 1];
    const firstAfterSource = all2.length > 2 ? all2[1] : null;
    const lastBeforeTarget = all2.length > 2 ? all2[all2.length - 2] : null;
    const hasSourceArm = route.connectionStart.x !== source.x || route.connectionStart.y !== source.y;
    const hasTargetArm = route.connectionEnd.x !== target.x || route.connectionEnd.y !== target.y;
    const innerPoints = this._axisAligned(points) && points.length >= 2 ? [points[0], points[points.length - 1]] : points;
    const pointsForHandles = [...!hasSourceArm ? [source] : [], ...innerPoints, ...!hasTargetArm ? [target] : []];
    if (pointsForHandles.length < 2) return result;
    const anchorOffset = (_a = this.connection.options.anchorOffset) !== null && _a !== void 0 ? _a : 0;
    const eps = 0.5;
    for (let i = 0; i < pointsForHandles.length - 1; ) {
      let j = i + 1;
      while (j < pointsForHandles.length - 1 && this._axisAligned(pointsForHandles.slice(i, j + 2))) {
        j++;
      }
      const pStart = pointsForHandles[i];
      const pEnd = pointsForHandles[j];
      if (pStart.x === pEnd.x && pStart.y === pEnd.y) {
        i = j;
        continue;
      }
      let midPoint = new Point((pStart.x + pEnd.x) / 2, (pStart.y + pEnd.y) / 2);
      const isFirstSegment = i === 0;
      const isLastSegment = j === pointsForHandles.length - 1;
      const startAligned = isFirstSegment && firstAfterSource && this._axisAligned([source, midPoint, firstAfterSource]);
      const endAligned = isLastSegment && lastBeforeTarget && this._axisAligned([target, midPoint, lastBeforeTarget]);
      const skipStart = startAligned && firstAfterSource && source.distanceTo(firstAfterSource) <= anchorOffset + eps;
      const skipEnd = endAligned && lastBeforeTarget && target.distanceTo(lastBeforeTarget) <= anchorOffset + eps;
      if (skipStart || skipEnd) {
        i = j;
        continue;
      }
      const fixStart = isFirstSegment && startAligned && !skipStart;
      const fixEnd = isLastSegment && endAligned && !skipEnd;
      if (fixStart && firstAfterSource) {
        midPoint = new Point((source.x + firstAfterSource.x) / 2, (source.y + firstAfterSource.y) / 2);
      } else if (fixEnd && lastBeforeTarget) {
        midPoint = new Point((target.x + lastBeforeTarget.x) / 2, (target.y + lastBeforeTarget.y) / 2);
      }
      result.push(midPoint);
      i = j;
    }
    return result;
  }
  _createHandles() {
    this.handles.forEach((h) => this.visual.remove(h.visual));
    this.handles = [];
    if ((this.connection.options.type || "").toLowerCase() !== CASCADING || this.connection.pointsEditable() === false) {
      return;
    }
    const midPoints = this.createMiddlePoints();
    const handles = this.options;
    const lockedSegments = this.connection.route.segmentsMeta.filter((s) => s.ownerLockIndex !== null);
    midPoints.forEach((pt) => {
      const vertex = lockedSegments.some((s) => pointOnOrthoSegment(pt, s.a, s.b, 0.5));
      const handleVisual = new Circle({
        center: this.diagram.modelToLayer(pt),
        radius: vertex ? handles.vertex.radius : handles.midpoint.radius,
        fill: vertex ? handles.vertex.fill : handles.midpoint.fill,
        stroke: vertex ? handles.vertex.stroke : handles.midpoint.stroke
      });
      this.visual.append(handleVisual);
      this.handles.push({
        visual: handleVisual,
        point: pt,
        vertex
      });
    });
  }
  _axisAligned(points) {
    if (points.length <= 1) {
      return true;
    }
    const {
      x,
      y
    } = points[0];
    return points.every((p) => p.x === x) || points.every((p) => p.y === y);
  }
  _getCursor(point) {
    if (this._activeDrag) {
      return this._activeDrag.cursor;
    }
    const handle = point && this._hitTest(point);
    if (handle) {
      const segmentsMeta = this.connection.route.segmentsMeta;
      const segmentIndex = findSegmentIndexFromHandlePoint(handle.point, segmentsMeta, {
        tolerance: 8
      });
      const seg = segmentsMeta[segmentIndex];
      return !seg || seg.orientation === "H" ? Cursors.rowresize : Cursors.colresize;
    }
  }
  _hitTest(point) {
    var _a;
    const handleOptions = this.options;
    if (!handleOptions.midpoint || !handleOptions.vertex) {
      return null;
    }
    const hitDistance = handleOptions.vertex.radius + (((_a = handleOptions.vertex.stroke) === null || _a === void 0 ? void 0 : _a.width) || 1);
    const zoom = this.diagram.zoom();
    const scaledHitDistance = hitDistance / zoom;
    return this.handles.find((h) => h.point.distanceTo(point) <= scaledHitDistance) || null;
  }
  start(p) {
    this.activeHandle = this._hitTest(p);
    if (this.activeHandle) {
      this._initialLocks = this.connection.locks.map((lock) => __spreadValues({}, lock));
      this._routingMode = this.connection.routingMode;
      this._sourceSide = this.connection.buildOptions.sourceSide;
      this._targetSide = this.connection.buildOptions.targetSide;
      const segmentsMeta = this.connection.route.segmentsMeta;
      const segmentIndex = findSegmentIndexFromHandlePoint(p, segmentsMeta, {
        tolerance: 8
      });
      const seg = segmentsMeta[segmentIndex];
      if (!seg) {
        this._activeDrag = {
          axis: "y",
          lockIndex: null,
          insertIndex: this.connection.locks.length,
          inserted: false,
          cursor: Cursors.arrow,
          segmentIndex
        };
      } else {
        this._activeDrag = {
          axis: getAxisFromSegment(seg),
          lockIndex: seg.ownerLockIndex,
          insertIndex: seg.insertIndex,
          inserted: false,
          cursor: !seg || seg.orientation === "H" ? Cursors.rowresize : Cursors.colresize,
          segmentIndex
        };
      }
      this._firstMove = true;
    }
  }
  move(_handle, p) {
    if (!this.activeHandle) {
      return false;
    }
    const pointer = new Point(Math.round(p.x), Math.round(p.y));
    const connection = this.connection;
    const active = this._activeDrag;
    let value = active.axis === "x" ? pointer.x : pointer.y;
    const snapValue = this._findSnapValue(active.axis, value);
    if (snapValue !== null) {
      value = snapValue;
    }
    if (active.lockIndex == null && !active.inserted) {
      connection.locks.splice(active.insertIndex, 0, {
        axis: active.axis,
        value
      });
      active.lockIndex = active.insertIndex;
      active.inserted = true;
    }
    if (active.lockIndex != null) {
      connection.locks[active.lockIndex].value = value;
    }
    const route = buildConnection(__spreadProps(__spreadValues({}, this.connection.buildOptions), {
      locks: connection.locks
    }));
    this.updateConnection(route);
    return true;
  }
  updateConnection(route) {
    this.connection.routingMode = "manual";
    const source = this.connection.sourcePoint();
    const target = this.connection.targetPoint();
    const renderPoints = simplifyOrthogonalPoints([source, ...route.points, target]);
    this.connection.points(renderPoints.slice(1, -1));
    this.connection.route = route;
    this.connection.refresh();
    if (this._firstMove && this.handles) {
      this.handles.forEach((handle) => {
        if (handle.visual) {
          handle.visual.visible(false);
        }
      });
    }
    this._firstMove = false;
  }
  /**
   * Find a snap value by checking adjacent parallel segments in the same connection
   * @param axis - The axis we're dragging on ('x' or 'y')
   * @param currentValue - The current value on that axis
   * @returns The snap value if found, or null if no snap
   */
  _findSnapValue(axis, currentValue) {
    var _a;
    const segments = (_a = this.connection.route) === null || _a === void 0 ? void 0 : _a.segmentsMeta;
    if (!segments || !this._activeDrag) {
      return null;
    }
    const activeLockIndex = this._activeDrag.lockIndex;
    let closestValue = null;
    let closestDistance = this.options.snap !== void 0 ? this.options.snap : CONNECTION_POINTS_EDITING_SNAP;
    for (const segment of segments) {
      if (activeLockIndex !== null && segment.ownerLockIndex === activeLockIndex) {
        continue;
      }
      const isParallel = axis === "y" && segment.orientation === "H" || axis === "x" && segment.orientation === "V";
      if (!isParallel) {
        continue;
      }
      const segmentValue = segment.orientation === "H" ? (segment.a.y + segment.b.y) / 2 : (segment.a.x + segment.b.x) / 2;
      const distance = Math.abs(segmentValue - currentValue);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestValue = segmentValue;
      }
    }
    return closestValue;
  }
  stop(_p) {
    var _a, _b;
    if (!this.activeHandle) {
      return void 0;
    }
    const previousLocks = this.connection.locks.map((l) => __spreadValues({}, l));
    this.connection.locks = normalizeLocks(this.connection.locks, this.connection.route.connectionStart);
    const source = this.connection.sourcePoint();
    const target = this.connection.targetPoint();
    this.connection.locks = pruneRedundantLocks(this.connection.locks, this.connection.buildOptions, {
      tolerance: 0.5
    });
    const buildOptions = __spreadValues({}, this.connection.buildOptions);
    const connectors2 = {};
    this.connection._resolveConnectors(connectors2);
    if (!((_a = connectors2._resolvedTargetConnector) === null || _a === void 0 ? void 0 : _a.positionWithoutOffset().equals(target)) || !((_b = connectors2._resolvedSourceConnector) === null || _b === void 0 ? void 0 : _b.positionWithoutOffset().equals(source))) {
      this.connection.locks = previousLocks;
      this.connection.buildOptions = buildOptions;
    }
    const route = buildConnection(__spreadProps(__spreadValues({}, this.connection.buildOptions), {
      locks: this.connection.locks
    }));
    this.updateConnection(route);
    const unit = new ConnectionDragUnit({
      item: this.connection,
      undoLocks: this._initialLocks || [],
      redoLocks: this.connection.locks,
      undoPoints: [],
      redoPoints: [],
      routingMode: this._routingMode,
      sourceSide: this._sourceSide,
      targetSide: this._targetSide
    });
    this._resetFlags();
    this.refresh();
    return unit;
  }
  refresh() {
    this._createHandles();
  }
  cancel() {
    if (this.activeHandle && this._initialLocks) {
      if (this._initialLocks) {
        this.connection.locks = this._initialLocks.map((lock) => __spreadValues({}, lock));
        this.updateConnection(buildConnection(__spreadProps(__spreadValues({}, this.connection.buildOptions), {
          locks: this.connection.locks
        })));
      }
      this.refresh();
      this._resetFlags();
    }
  }
  _resetFlags() {
    this.activeHandle = null;
    this._activeDrag = null;
    this._firstMove = false;
    if (this._initialLocks) {
      this._initialLocks = void 0;
    }
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/services/adorners/ConnectionResizeAdorner/PolylineConnection.js
var PolylineConnectionResizeAdorner = class extends AdornerBase {
  constructor(connection, options) {
    super(connection.diagram, deepExtend({}, options));
    this._handlePoints = [];
    this.connection = connection;
    this.handles = [];
    this.activeHandle = null;
    this._firstMove = false;
    if (options) {
      this._createHandles();
    }
    this.diagram.bind("dblclick", this.onDblClick.bind(this));
  }
  onDblClick(e) {
    const handle = e.item && e.item.name === CONNECTION && this._hitTest(e.point);
    const handlePoint = handle && this._handlePoints.find((hp) => hp.point.equals(handle.point));
    if (handlePoint && handlePoint.vertex) {
      const intermediate = this.connection.allPoints().slice(1, -1);
      const pointIndex = intermediate.findIndex((pt) => pt.equals(handlePoint.point));
      if (pointIndex < 0) {
        return;
      }
      intermediate.splice(pointIndex, 1);
      this.connection.points(intermediate.map((pt) => pt.clone()));
      this.connection.refresh();
      this.refresh();
    }
  }
  createHandlePoints() {
    const allPoints = this.connection.allPoints();
    const result = [];
    const source = allPoints[0];
    const target = allPoints[allPoints.length - 1];
    const intermediate = allPoints.slice(1, -1);
    const points = !intermediate.length ? [source, target] : [source, ...intermediate, target];
    for (let i = 0; i < points.length - 1; ) {
      const j = i + 1;
      const pStart = points[i];
      const pEnd = points[j];
      if (pStart.x !== pEnd.x || pStart.y !== pEnd.y) {
        result.push({
          vertex: true,
          point: pStart
        });
        result.push({
          vertex: false,
          point: new Point((pStart.x + pEnd.x) / 2, (pStart.y + pEnd.y) / 2)
        });
        result.push({
          vertex: true,
          point: pEnd
        });
      }
      i = j;
    }
    return result.slice(1, -1);
  }
  _createHandles() {
    this.handles.forEach((h) => this.visual.remove(h.visual));
    this.handles = [];
    if ((this.connection.options.type || "").toLowerCase() !== POLYLINE || this.connection.pointsEditable() === false) {
      return;
    }
    this._handlePoints = this.createHandlePoints();
    const handles = this.options;
    this._handlePoints.forEach(({
      point: pt,
      vertex
    }) => {
      const handleVisual = new Circle({
        center: this.diagram.modelToLayer(pt),
        radius: vertex ? handles.vertex.radius : handles.midpoint.radius,
        fill: vertex ? handles.vertex.fill : handles.midpoint.fill,
        stroke: vertex ? handles.vertex.stroke : handles.midpoint.stroke
      });
      this.visual.append(handleVisual);
      this.handles.push({
        visual: handleVisual,
        point: pt
      });
    });
  }
  _getCursor(point) {
    const handle = point && this._hitTest(point);
    if (handle) {
      return Cursors.arrow;
    }
  }
  _hitTest(point) {
    var _a;
    const handleOptions = this.options;
    if (!handleOptions.midpoint || !handleOptions.vertex) {
      return null;
    }
    const hitDistance = handleOptions.midpoint.radius + (((_a = handleOptions.midpoint.stroke) === null || _a === void 0 ? void 0 : _a.width) || 1);
    const zoom = this.diagram.zoom();
    const scaledHitDistance = hitDistance / zoom;
    return this.handles.find((h) => h.point.distanceTo(point) <= scaledHitDistance) || null;
  }
  start(p) {
    this.activeHandle = this._hitTest(p);
    if (this.activeHandle) {
      this._initialPoints = this.connection.points().map((pt) => pt.clone());
      this._firstMove = true;
    }
  }
  move(_handle, p) {
    if (!this.activeHandle) {
      return false;
    }
    const all2 = this.connection.allPoints();
    const intermediate = all2.slice(1, -1);
    const point = this.activeHandle.point;
    const handlePointIndex = this._handlePoints.findIndex((hp) => hp.point.equals(point));
    const handlePoint = this._handlePoints[handlePointIndex];
    if (!handlePoint) {
      return;
    }
    const snappedPoint = this._applySnap(p, handlePointIndex);
    if (handlePoint.vertex) {
      const refPoint = intermediate.find((pt) => pt.equals(handlePoint.point));
      if (refPoint) {
        refPoint.x = snappedPoint.x;
        refPoint.y = snappedPoint.y;
        this.connection.points(intermediate.map((pt) => pt.clone()));
        this.updateConnection();
        this.activeHandle.point = refPoint.clone();
        handlePoint.point = refPoint.clone();
      }
    } else {
      const prev = this._handlePoints[handlePointIndex - 1];
      const next = this._handlePoints[handlePointIndex + 1];
      if (prev) {
        const refPointindex = intermediate.findIndex((pt) => pt.equals(prev.point));
        if (refPointindex >= 0) {
          intermediate.splice(refPointindex + 1, 0, snappedPoint.clone());
        }
      } else if (next) {
        const refPointindex = intermediate.findIndex((pt) => pt.equals(next.point));
        if (refPointindex >= 0) {
          intermediate.splice(refPointindex, 0, snappedPoint.clone());
        }
      } else if (intermediate.length === 0) {
        intermediate.push(snappedPoint.clone());
      }
      this.connection.points(intermediate.map((pt) => pt.clone()));
      this.updateConnection();
      this._handlePoints = this.createHandlePoints();
      const newHandleIndex = this._handlePoints.findIndex((hp) => hp.vertex && hp.point.equals(snappedPoint));
      if (newHandleIndex >= 0) {
        this.activeHandle.point = this._handlePoints[newHandleIndex].point;
      }
    }
    this.connection.refresh();
    return true;
  }
  updateConnection() {
    const source = this.connection.sourcePoint();
    const target = this.connection.targetPoint();
    const points = this.connection.points();
    this.connection.path.redraw({
      points: [source, ...points, target]
    });
    this.connection._alignContent();
    if (this._firstMove && this.handles) {
      this.handles.forEach((handle) => {
        if (handle.visual) {
          handle.visual.visible(false);
        }
      });
    }
    this._firstMove = false;
  }
  /**
   * Apply snap to point position based on adjacent points
   * @param p - The current point position
   * @param handlePointIndex - The index of the handle being dragged
   * @returns The snapped point position
   */
  _applySnap(p, handlePointIndex) {
    const handlePoint = this._handlePoints[handlePointIndex];
    if (!handlePoint) {
      return p;
    }
    const snapThreshold = this.options.snap !== void 0 ? this.options.snap : CONNECTION_POINTS_EDITING_SNAP;
    const all2 = this.connection.allPoints();
    let prevPoint = null;
    let nextPoint = null;
    if (handlePoint.vertex) {
      const pointIndex = all2.findIndex((pt) => pt.distanceTo(handlePoint.point) < 0.1);
      if (pointIndex >= 0) {
        prevPoint = pointIndex > 0 ? all2[pointIndex - 1] : null;
        nextPoint = pointIndex < all2.length - 1 ? all2[pointIndex + 1] : null;
      }
    } else {
      const prev = this._handlePoints[handlePointIndex - 1];
      const next = this._handlePoints[handlePointIndex + 1];
      prevPoint = (prev === null || prev === void 0 ? void 0 : prev.point) || null;
      nextPoint = (next === null || next === void 0 ? void 0 : next.point) || null;
    }
    let snappedX = null;
    let snappedY = null;
    if (prevPoint) {
      const distY = Math.abs(p.y - prevPoint.y);
      if (distY < snapThreshold) {
        snappedY = prevPoint.y;
      }
    }
    if (nextPoint && snappedY === null) {
      const distY = Math.abs(p.y - nextPoint.y);
      if (distY < snapThreshold) {
        snappedY = nextPoint.y;
      }
    }
    if (prevPoint) {
      const distX = Math.abs(p.x - prevPoint.x);
      if (distX < snapThreshold) {
        snappedX = prevPoint.x;
      }
    }
    if (nextPoint && snappedX === null) {
      const distX = Math.abs(p.x - nextPoint.x);
      if (distX < snapThreshold) {
        snappedX = nextPoint.x;
      }
    }
    return new Point(snappedX !== null ? snappedX : p.x, snappedY !== null ? snappedY : p.y);
  }
  stop(_p) {
    if (!this.activeHandle) {
      return void 0;
    }
    const unit = new ConnectionDragUnit({
      item: this.connection,
      undoLocks: [],
      redoLocks: [],
      undoPoints: this._initialPoints,
      redoPoints: this.connection.points(),
      routingMode: "manual",
      sourceSide: null,
      targetSide: null
    });
    this._resetFlags();
    this.refresh();
    return unit;
  }
  refresh() {
    var _a;
    const activePoint = (_a = this.activeHandle) === null || _a === void 0 ? void 0 : _a.point.clone();
    this._createHandles();
    if (activePoint) {
      this.activeHandle = this.handles.find((h) => h.point.equals(activePoint)) || null;
    }
  }
  cancel() {
    if (this.activeHandle && this._initialPoints) {
      if (this._initialPoints) {
        this.connection.points(this._initialPoints);
        this.connection.refresh();
      }
      this.refresh();
      this._resetFlags();
    }
  }
  _resetFlags() {
    this.activeHandle = null;
    this._firstMove = false;
    if (this._initialPoints) {
      this._initialPoints = void 0;
    }
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/services/adorners/ConnectorVisual.js
var ConnectorVisual = class {
  constructor(connector) {
    this.options = deepExtend({}, connector.options);
    this._c = connector;
    this.visual = new Circle(this.options);
    this.refresh();
  }
  _hover(value) {
    const options = this.options, hover = options.hover;
    let stroke = options.stroke, fill = options.fill;
    if (value && isDefined(hover.stroke)) {
      stroke = deepExtend({}, stroke, hover.stroke);
    }
    if (value && isDefined(hover.fill)) {
      fill = hover.fill;
    }
    this.visual.redraw({
      stroke,
      fill
    });
  }
  refresh() {
    var _a;
    const p = this._c.shape.diagram.modelToView(this._c.position()), relative = p.minus(this._c.shape.bounds("transformed").topLeft()), value = new Rect(p.x, p.y, 0, 0);
    const strokeWidth = ((_a = this.options.stroke) === null || _a === void 0 ? void 0 : _a.width) || 0;
    const hitAreaPadding = strokeWidth / 2;
    const extraDropZone = Math.max(this.options.width, this.options.height);
    value.inflate(this.options.width / 2 + hitAreaPadding + extraDropZone, this.options.height / 2 + hitAreaPadding + extraDropZone);
    this._visualBounds = value;
    this.visual.redraw({
      center: new Point(relative.x, relative.y)
    });
  }
  _hitTest(p) {
    const tp = this._c.shape.diagram.modelToView(p);
    return this._visualBounds.contains(tp);
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/services/adorners/ConnectorsAdorner.js
var ConnectorsAdorner = class extends AdornerBase {
  constructor(diagram, options) {
    super(diagram, options);
    this._refreshHandler = (e) => {
      if (e.item === this.shape) {
        this.refresh();
      }
    };
  }
  show(shape) {
    if (this._paused) {
      return;
    }
    this._visible = true;
    this.shape = shape;
    this.diagram.bind(ITEMBOUNDSCHANGE, this._refreshHandler);
    this.connectors = [];
    this._clearVisual();
    const len = shape.connectors.length;
    for (let i = 0; i < len; i++) {
      const ctr = new ConnectorVisual(shape.connectors[i]);
      this.connectors.push(ctr);
      this.visual.append(ctr.visual);
    }
    this.visual.visible(true);
    this.refresh();
  }
  pause() {
    this._paused = true;
    this.visual.visible(false);
  }
  resume() {
    this._paused = false;
  }
  _clearVisual() {
    if (this.diagram._cachedTouchTarget) {
      this._keepCachedTouchTarget();
    } else {
      this.visual.clear();
    }
  }
  _keepCachedTouchTarget() {
    const visualChildren = this.visual.children;
    const childrenCount = visualChildren.length;
    const index = inArray(this.diagram._cachedTouchTarget, visualChildren);
    for (let i = childrenCount - 1; i >= 0; i--) {
      if (i === index) {
        continue;
      }
      this.visual.remove(visualChildren[i]);
    }
  }
  destroy() {
    this.diagram.unbind(ITEMBOUNDSCHANGE, this._refreshHandler);
    this.shape = void 0;
    this._visible = void 0;
    this.visual.visible(false);
  }
  _hitTest(p) {
    let ctr, i;
    for (i = 0; i < this.connectors.length; i++) {
      ctr = this.connectors[i];
      if (ctr._hitTest(p)) {
        ctr._hover(true);
        this.diagram.toolService._hoveredConnector = ctr;
        break;
      }
    }
  }
  refresh() {
    if (this.shape) {
      let bounds = this.shape.bounds();
      bounds = this.diagram.modelToLayer(bounds);
      this.visual.position(bounds.topLeft());
      this.connectors.forEach(function(ctr) {
        ctr.refresh();
      });
    }
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/services/tools/canDrag.js
function canDrag(element) {
  const editable = element.options.editable;
  return editable && editable.drag !== false;
}

// node_modules/@progress/kendo-diagram-common/dist/es/services/TransformUnit.js
var TransformUnit = class {
  constructor(shapes2, undoStates, adorner) {
    this.shapes = shapes2;
    this.undoStates = undoStates;
    this.title = "Transformation";
    this.redoStates = [];
    this.adorner = adorner;
    for (let i = 0; i < this.shapes.length; i++) {
      const shape = this.shapes[i];
      this.redoStates.push(shape.bounds());
    }
  }
  undo() {
    for (let i = 0; i < this.shapes.length; i++) {
      const shape = this.shapes[i];
      shape.bounds(this.undoStates[i]);
      if ("layout" in shape) {
        shape.layout(shape, this.redoStates[i], this.undoStates[i]);
      }
      shape.updateModel();
    }
    if (this.adorner) {
      this.adorner.refreshBounds();
      this.adorner.refresh();
    }
  }
  redo() {
    for (let i = 0; i < this.shapes.length; i++) {
      const shape = this.shapes[i];
      shape.bounds(this.redoStates[i]);
      if ("layout" in shape) {
        shape.layout(shape, this.undoStates[i], this.redoStates[i]);
      }
      shape.updateModel();
    }
    if (this.adorner) {
      this.adorner.refreshBounds();
      this.adorner.refresh();
    }
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/services/adorners/ResizingAdorner.js
function hitToOppositeSide(hit, bounds) {
  let result;
  if (hit.x === -1 && hit.y === -1) {
    result = bounds.bottomRight();
  } else if (hit.x === 1 && hit.y === 1) {
    result = bounds.topLeft();
  } else if (hit.x === -1 && hit.y === 1) {
    result = bounds.topRight();
  } else if (hit.x === 1 && hit.y === -1) {
    result = bounds.bottomLeft();
  } else if (hit.x === 0 && hit.y === -1) {
    result = bounds.bottom();
  } else if (hit.x === 0 && hit.y === 1) {
    result = bounds.top();
  } else if (hit.x === 1 && hit.y === 0) {
    result = bounds.left();
  } else if (hit.x === -1 && hit.y === 0) {
    result = bounds.right();
  }
  return result;
}
var defaultOptions20 = {
  handles: {
    fill: {
      color: "#fff"
    },
    stroke: {
      color: "#282828"
    },
    height: 7,
    width: 7,
    hover: {
      fill: {
        color: "#282828"
      },
      stroke: {
        color: "#282828"
      }
    }
  },
  selectable: {
    stroke: {
      color: "#778899",
      width: 1,
      dashType: "solid"
    },
    fill: {
      color: TRANSPARENT
    },
    offset: 3
  },
  offset: 1
};
var ResizingAdorner = class extends AdornerBase {
  constructor(diagram, options) {
    options = deepExtend({}, defaultOptions20, options);
    const editable = diagram.options.editable;
    if (editable && typeof editable !== "boolean" && editable.resize && typeof editable.resize !== "boolean") {
      if (editable.resize.offset !== void 0) {
        options.offset = editable.resize.offset;
      }
    }
    const selectable = diagram.options.selectable;
    if (selectable && typeof selectable !== "boolean" && selectable.offset !== void 0) {
      options.selectionRectOffset = selectable.offset;
    } else {
      options.selectionRectOffset = defaultOptions20.selectable.offset;
    }
    super(diagram, options);
    this._manipulating = false;
    this.map = [];
    this.shapes = [];
    this.shapeStates = [];
    this._initSelection();
    this._createHandles();
    this.redraw();
    this.diagram.bind("select", () => {
      this._initialize();
    });
    this._refreshHandler = () => {
      if (!this._internalChange) {
        this.refreshBounds();
        this.refresh();
      }
    };
    this._rotatedHandler = () => {
      if (this.shapes.length === 1) {
        this._angle = this.shapes[0].rotate().angle;
      }
      this._refreshHandler();
    };
    this.diagram.bind(ITEMBOUNDSCHANGE, this._refreshHandler).bind(ITEMROTATE, this._rotatedHandler);
    this.refreshBounds();
    this.refresh();
  }
  _initSelection() {
    const diagram = this.diagram;
    const editable = diagram.options.editable;
    let selectable = diagram.options.selectable;
    if (editable && typeof editable !== "boolean" && editable.resize && typeof editable.resize !== "boolean" && editable.resize.selectable) {
      selectable = editable.resize.selectable;
    }
    const options = deepExtend({}, this.options.selectable, selectable);
    this.rect = new Rectangle(options);
    this.visual.append(this.rect);
  }
  _resizable() {
    return this.options.editable && this.options.editable.resize !== false;
  }
  _handleOptions() {
    const resizeHandles = (this.options.editable.resize || {}).handles;
    return resizeHandles ? deepExtend({}, this.options.handles, resizeHandles) : this.options.handles;
  }
  _createHandles() {
    let handles, item, y, x;
    if (this._resizable()) {
      handles = this._handleOptions();
      for (x = -1; x <= 1; x++) {
        for (y = -1; y <= 1; y++) {
          if (x !== 0 || y !== 0) {
            item = new Rectangle(handles);
            const isMiddleHandle = x === 0 || y === 0;
            item.drawingElement._hover = this._hover.bind(this, isMiddleHandle);
            this.map.push({
              x,
              y,
              visual: item
            });
            this.visual.append(item);
          }
        }
      }
    }
  }
  bounds(value) {
    if (value) {
      this._innerBounds = value.clone();
      this._bounds = this.diagram.modelToLayer(value).inflate(this.options.offset, this.options.offset);
    } else {
      return this._bounds;
    }
  }
  _hitTest(p) {
    const handlesCount = this.map.length;
    let tp = this.diagram.modelToLayer(p), i, hit, handleBounds, handle;
    if (this._angle) {
      tp = tp.clone().rotate(this._angle, this._bounds.center());
    }
    if (this._resizable()) {
      const innerLayerBounds = this.diagram.modelToLayer(this._innerBounds);
      const zoom = this.diagram.zoom();
      const selectionRectOffsetLayer = this.options.selectionRectOffset * zoom;
      const containerX = innerLayerBounds.x - selectionRectOffsetLayer;
      const containerY = innerLayerBounds.y - selectionRectOffsetLayer;
      for (i = 0; i < handlesCount; i++) {
        handle = this.map[i];
        if (handle.x !== 0 && handle.y !== 0) {
          hit = new Point(handle.x, handle.y);
          handleBounds = this._getHandleBounds(hit);
          handleBounds.offset(containerX, containerY);
          if (handleBounds.contains(tp)) {
            return hit;
          }
        }
      }
      for (i = 0; i < handlesCount; i++) {
        handle = this.map[i];
        if (handle.x === 0 || handle.y === 0) {
          hit = new Point(handle.x, handle.y);
          handleBounds = this._getHandleBounds(hit);
          handleBounds.offset(containerX, containerY);
          if (handleBounds.contains(tp)) {
            return hit;
          }
        }
      }
    }
    if (this._bounds.contains(tp)) {
      return new Point(0, 0);
    }
  }
  _getHandleBounds(p) {
    if (this._resizable()) {
      const handles = this._handleOptions(), w = handles.width, h = handles.height;
      const innerLayerBounds = this.diagram.modelToLayer(this._innerBounds);
      const zoom = this.diagram.zoom();
      const offsetLayer = this.options.offset * zoom;
      const selectionRectOffsetLayer = this.options.selectionRectOffset * zoom;
      const handleOffset = selectionRectOffsetLayer - offsetLayer;
      const innerWidth = innerLayerBounds.width - zoom;
      const innerHeight = innerLayerBounds.height - zoom;
      const middleHandleThicknessWidth = w * zoom, middleHandleThicknessHeight = h * zoom;
      let r;
      if (p.x !== 0 && p.y !== 0) {
        r = new Rect(0, 0, w, h);
        if (p.x < 0) {
          r.x = handleOffset - w / 2;
        } else if (p.x > 0) {
          r.x = innerWidth + 2 * offsetLayer + handleOffset - w / 2;
        }
        if (p.y < 0) {
          r.y = handleOffset - h / 2;
        } else if (p.y > 0) {
          r.y = innerHeight + 2 * offsetLayer + handleOffset - h / 2;
        }
      } else {
        if (p.x === 0 && p.y !== 0) {
          r = new Rect(handleOffset, p.y < 0 ? handleOffset - middleHandleThicknessHeight / 2 : innerHeight + 2 * offsetLayer + handleOffset - middleHandleThicknessHeight / 2, innerWidth + 2 * offsetLayer, middleHandleThicknessHeight);
        } else if (p.y === 0 && p.x !== 0) {
          r = new Rect(p.x < 0 ? handleOffset - middleHandleThicknessWidth / 2 : innerWidth + 2 * offsetLayer + handleOffset - middleHandleThicknessWidth / 2, handleOffset, middleHandleThicknessWidth, innerHeight + 2 * offsetLayer);
        }
      }
      return r;
    }
  }
  _getCursor(point) {
    let hit = this._hitTest(point);
    if (hit && hit.x >= -1 && hit.x <= 1 && hit.y >= -1 && hit.y <= 1 && this._resizable()) {
      const angle = this._angle;
      if (angle) {
        hit.rotate(angle, new Point(0, 0));
        hit = new Point(Math.round(hit.x), Math.round(hit.y));
      }
      if (hit.x === -1 && hit.y === -1) {
        return "nw-resize";
      }
      if (hit.x === 1 && hit.y === 1) {
        return "se-resize";
      }
      if (hit.x === -1 && hit.y === 1) {
        return "sw-resize";
      }
      if (hit.x === 1 && hit.y === -1) {
        return "ne-resize";
      }
      if (hit.x === 0 && hit.y === -1) {
        return "n-resize";
      }
      if (hit.x === 0 && hit.y === 1) {
        return "s-resize";
      }
      if (hit.x === 1 && hit.y === 0) {
        return "e-resize";
      }
      if (hit.x === -1 && hit.y === 0) {
        return "w-resize";
      }
    }
    return this._manipulating ? Cursors.move : Cursors.select;
  }
  _initialize() {
    let i, item;
    const items = this.diagram.select();
    this.shapes = [];
    for (i = 0; i < items.length; i++) {
      item = items[i];
      if (item instanceof Shape) {
        this.shapes.push(item);
        item._rotationOffset = new Point();
      }
    }
    this._angle = this.shapes.length === 1 ? this.shapes[0].rotate().angle : 0;
    this._startAngle = this._angle;
    this._rotates();
    this._positions();
    this.refreshBounds();
    this.refresh();
    this.redraw();
  }
  _rotates() {
    let i, shape;
    this.initialRotates = [];
    for (i = 0; i < this.shapes.length; i++) {
      shape = this.shapes[i];
      this.initialRotates.push(shape.rotate().angle);
    }
  }
  _positions() {
    let i, shape;
    this.initialStates = [];
    for (i = 0; i < this.shapes.length; i++) {
      shape = this.shapes[i];
      this.initialStates.push(shape.bounds());
    }
  }
  _hover(isMiddleHandle, value, element) {
    if (this._resizable()) {
      if (isMiddleHandle) {
        element.fill("transparent", 0);
        element.stroke("transparent", 0, 0);
        return;
      }
      const handleOptions = this._handleOptions(), hover = handleOptions.hover;
      let stroke = handleOptions.stroke, fill = handleOptions.fill;
      if (value && isDefined(hover.stroke)) {
        stroke = deepExtend({}, stroke, hover.stroke);
      }
      if (value && isDefined(hover.fill)) {
        fill = hover.fill;
      }
      element.stroke(stroke.color, stroke.width, stroke.opacity);
      element.fill(fill.color, fill.opacity);
    }
  }
  start(p) {
    this._sp = p;
    this._cp = p;
    this._lp = p;
    this._manipulating = true;
    this._internalChange = true;
    this.shapeStates = [];
    for (let i = 0; i < this.shapes.length; i++) {
      const shape = this.shapes[i];
      this.shapeStates.push(shape.bounds());
    }
  }
  redraw() {
    let i, handle;
    const visibleHandles = this._resizable();
    for (i = 0; i < this.map.length; i++) {
      handle = this.map[i];
      handle.visual.visible(visibleHandles);
    }
  }
  angle(value) {
    if (defined(value)) {
      this._angle = value;
    }
    return this._angle;
  }
  rotate() {
    const center = this._innerBounds.center();
    let currentAngle = this.angle();
    this._internalChange = true;
    for (let i = 0; i < this.shapes.length; i++) {
      const shape = this.shapes[i];
      currentAngle = (currentAngle + this.initialRotates[i] - this._startAngle) % 360;
      shape.rotate(currentAngle, center);
    }
    this.refresh();
  }
  move(handle, p) {
    let delta, dragging, dtl = new Point(), dbr = new Point(), bounds, center, shape, i, angle, newBounds, changed = 0, staticPoint, scaleX, scaleY;
    if (handle.y === -2 && handle.x === -1) {
      center = this._innerBounds.center();
      this._angle = this._truncateAngle(findAngle(center, p));
      for (i = 0; i < this.shapes.length; i++) {
        shape = this.shapes[i];
        angle = (this._angle + this.initialRotates[i] - this._startAngle) % 360;
        shape.rotate(angle, center);
        if (Object.prototype.hasOwnProperty.call(shape, "layout")) {
          shape.layout(shape);
        }
        this._rotating = true;
      }
      this.refresh();
    } else {
      if (this.shouldSnap()) {
        const thr = this._truncateDistance(p.minus(this._lp));
        if (thr.x === 0 && thr.y === 0) {
          this._cp = p;
          return;
        }
        delta = thr;
        this._lp = new Point(this._lp.x + thr.x, this._lp.y + thr.y);
      } else {
        delta = p.minus(this._cp);
      }
      if (this.isDragHandle(handle)) {
        dbr = dtl = delta;
        dragging = true;
      } else {
        if (this._angle) {
          delta.rotate(this._angle, new Point(0, 0));
        }
        if (handle.x === -1) {
          dtl.x = delta.x;
        } else if (handle.x === 1) {
          dbr.x = delta.x;
        }
        if (handle.y === -1) {
          dtl.y = delta.y;
        } else if (handle.y === 1) {
          dbr.y = delta.y;
        }
      }
      if (!dragging) {
        staticPoint = hitToOppositeSide(handle, this._innerBounds);
        scaleX = (this._innerBounds.width + delta.x * handle.x) / this._innerBounds.width;
        scaleY = (this._innerBounds.height + delta.y * handle.y) / this._innerBounds.height;
      }
      for (i = 0; i < this.shapes.length; i++) {
        shape = this.shapes[i];
        bounds = shape.bounds();
        if (dragging) {
          if (!canDrag(shape)) {
            continue;
          }
          newBounds = this._displaceBounds(bounds, dtl, dbr, dragging);
        } else {
          newBounds = bounds.clone();
          newBounds.scale(scaleX, scaleY, staticPoint, this._innerBounds.center(), shape.rotate().angle);
          const newCenter = newBounds.center();
          newCenter.rotate(-this._angle, bounds.center());
          newBounds = new Rect(newCenter.x - newBounds.width / 2, newCenter.y - newBounds.height / 2, newBounds.width, newBounds.height);
        }
        if (newBounds.width >= shape.options.minWidth && newBounds.height >= shape.options.minHeight) {
          const oldBounds = bounds;
          shape.bounds(newBounds);
          if (Object.prototype.hasOwnProperty.call(shape, "layout")) {
            shape.layout(shape, oldBounds, newBounds);
          }
          if (oldBounds.width !== newBounds.width || oldBounds.height !== newBounds.height) {
            shape.rotate(shape.rotate().angle);
          }
          changed += 1;
        }
      }
      if (changed) {
        if (changed === i) {
          newBounds = this._displaceBounds(this._innerBounds, dtl, dbr, dragging);
          this.bounds(newBounds);
        } else {
          this.refreshBounds();
        }
        this.refresh();
      }
      this._positions();
    }
    this._cp = p;
  }
  isDragHandle(handle) {
    return handle.x === 0 && handle.y === 0;
  }
  cancel() {
    const shapes2 = this.shapes;
    const states = this.shapeStates;
    for (let idx = 0; idx < shapes2.length; idx++) {
      shapes2[idx].bounds(states[idx]);
    }
    this.refreshBounds();
    this.refresh();
    this._manipulating = void 0;
    this._internalChange = void 0;
    this._rotating = void 0;
  }
  _truncatePositionToGuides(bounds) {
    if (this.diagram.ruler) {
      return this.diagram.ruler.truncatePositionToGuides(bounds);
    }
    return bounds;
  }
  _truncateSizeToGuides(bounds) {
    if (this.diagram.ruler) {
      return this.diagram.ruler.truncateSizeToGuides(bounds);
    }
    return bounds;
  }
  _truncateAngle(a) {
    const snap = this.snapOptions();
    const snapAngle = Math.max(snap.angle || DEFAULT_SNAP_ANGLE, MIN_SNAP_ANGLE);
    return snap ? Math.floor(a % 360 / snapAngle) * snapAngle : a % 360;
  }
  _truncateDistance(d) {
    if (d instanceof Point) {
      return new Point(this._truncateDistance(d.x), this._truncateDistance(d.y));
    } else {
      const snap = this.snapOptions() || {};
      const snapSize = Math.max(snap.size || DEFAULT_SNAP_SIZE, MIN_SNAP_SIZE);
      return snap ? Math.floor(d / snapSize) * snapSize : d;
    }
  }
  snapOptions() {
    const editable = this.diagram.options.editable;
    const snap = ((editable || {}).drag || {}).snap || {};
    return snap;
  }
  shouldSnap() {
    const editable = this.diagram.options.editable;
    const drag = (editable || {}).drag;
    const snap = (drag || {}).snap;
    return editable !== false && drag !== false && snap !== false;
  }
  _displaceBounds(bounds, dtl, dbr, dragging) {
    const tl = bounds.topLeft().plus(dtl), br = bounds.bottomRight().plus(dbr);
    let newBounds = Rect.fromPoints(tl, br), newCenter;
    if (!dragging) {
      newCenter = newBounds.center();
      newCenter.rotate(-this._angle, bounds.center());
      newBounds = new Rect(newCenter.x - newBounds.width / 2, newCenter.y - newBounds.height / 2, newBounds.width, newBounds.height);
    }
    return newBounds;
  }
  stop() {
    var _a, _b;
    let unit, i, shape, bounds;
    if (this._cp !== this._sp) {
      if (this._rotating) {
        unit = new RotateUnit(this, this.shapes, this.initialRotates);
        this._rotating = false;
      } else if (this._diffStates()) {
        if (this.diagram.ruler) {
          for (i = 0; i < this.shapes.length; i++) {
            shape = this.shapes[i];
            bounds = shape.bounds();
            bounds = this._truncateSizeToGuides(this._truncatePositionToGuides(bounds));
            shape.bounds(bounds);
            this.refreshBounds();
            this.refresh();
          }
        }
        for (i = 0; i < this.shapes.length; i++) {
          shape = this.shapes[i];
          bounds = shape.bounds();
          const strokeWidth = ((_b = (_a = shape.shapeVisual) === null || _a === void 0 ? void 0 : _a.options.stroke) === null || _b === void 0 ? void 0 : _b.width) || 0;
          if (shape._originalWidth + strokeWidth !== bounds.width) {
            shape._originalWidth = bounds.width - strokeWidth;
          }
          if (shape._originalHeight + strokeWidth !== bounds.height) {
            shape._originalHeight = bounds.height - strokeWidth;
          }
          shape.updateModel();
        }
        unit = new TransformUnit(this.shapes, this.shapeStates, this);
        this.diagram._syncShapeChanges();
      }
    }
    this._manipulating = void 0;
    this._internalChange = void 0;
    this._rotating = void 0;
    return unit;
  }
  _diffStates() {
    const shapes2 = this.shapes;
    const states = this.shapeStates;
    for (let idx = 0; idx < shapes2.length; idx++) {
      if (!shapes2[idx].bounds().equals(states[idx])) {
        return true;
      }
    }
    return false;
  }
  refreshBounds() {
    const bounds = this.shapes.length === 1 ? this.shapes[0].bounds().clone() : this.diagram.boundingBox(this.shapes, true);
    this.bounds(bounds);
  }
  refresh() {
    let b, bounds;
    if (this.shapes.length > 0) {
      bounds = this.bounds();
      this.visual.visible(true);
      const innerLayerBounds = this.diagram.modelToLayer(this._innerBounds);
      const zoom = this.diagram.zoom();
      const selectionRectOffsetLayer = this.options.selectionRectOffset * zoom;
      this.visual.position(new Point(innerLayerBounds.x - selectionRectOffsetLayer, innerLayerBounds.y - selectionRectOffsetLayer));
      this.map.forEach((m) => {
        b = this._getHandleBounds(new Point(m.x, m.y));
        m.visual.position(b.topLeft());
        m.visual.redraw({
          width: b.width,
          height: b.height
        });
        const isMiddleHandle = m.x === 0 || m.y === 0;
        if (isMiddleHandle) {
          const rect = m.visual.drawingElement;
          rect.fill("transparent", 0);
          rect.stroke("transparent", 0, 0);
        }
      });
      const center = new Point(innerLayerBounds.width / 2 + selectionRectOffsetLayer, innerLayerBounds.height / 2 + selectionRectOffsetLayer);
      this.visual.rotate(this._angle, center);
      this.rect.position(new Point(0, 0));
      this.rect.redraw({
        width: innerLayerBounds.width + 2 * selectionRectOffsetLayer - zoom,
        height: innerLayerBounds.height + 2 * selectionRectOffsetLayer - zoom
      });
      if (this.rotationThumb) {
        const thumb = this.options.editable.rotate.thumb;
        this._rotationThumbBounds = new Rect(bounds.center().x, bounds.y + thumb.y, 0, 0).inflate(thumb.width);
        this.rotationThumb.redraw({
          x: bounds.width / 2 - thumb.width / 2
        });
      }
    } else {
      this.visual.visible(false);
    }
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/services/adorners/Selector.js
var defaultOptions21 = {
  stroke: {
    color: "#778899",
    width: 1,
    dashType: "dash"
  },
  fill: {
    color: TRANSPARENT
  }
};
var Selector = class {
  constructor(diagram) {
    const selectable = diagram.options.selectable;
    this.options = deepExtend({}, defaultOptions21, selectable);
    this.visual = new Rectangle(this.options);
    this.diagram = diagram;
  }
  start(p) {
    this._sp = this._ep = p;
    this.refresh();
    this.diagram._adorn(this, true);
  }
  end() {
    this._sp = this._ep = void 0;
    this.diagram._adorn(this, false);
  }
  bounds(value) {
    if (value) {
      this._bounds = value;
    }
    return this._bounds;
  }
  move(p) {
    this._ep = p;
    this.refresh();
  }
  refresh() {
    if (this._sp) {
      const visualBounds = Rect.fromPoints(this.diagram.modelToLayer(this._sp), this.diagram.modelToLayer(this._ep));
      this.bounds(Rect.fromPoints(this._sp, this._ep));
      this.visual.position(visualBounds.topLeft());
      this.visual.redraw({
        height: visualBounds.height + 1,
        width: visualBounds.width + 1
      });
    }
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/services/routing/ConnectionRouterBase.js
var ConnectionRouterBase = class {
  constructor() {
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/services/routing/LinearConnectionRouter.js
var LinearConnectionRouter = class extends ConnectionRouterBase {
  constructor(connection) {
    super();
    this.connection = connection;
  }
  /**
   * Hit testing for polyline paths.
   */
  hitTest(p) {
    const rec = this.getBounds().inflate(HIT_TEST_DISTANCE);
    if (!rec.contains(p)) {
      return false;
    }
    return Geometry.distanceToPolyline(p, this.connection.allPoints()) < HIT_TEST_DISTANCE;
  }
  /**
   * Bounds of a polyline.
   *
   * @returns {kendo.dataviz.diagram.Rect}
   */
  getBounds() {
    const points = this.connection.allPoints(), s = points[0], e = points[points.length - 1];
    let right = Math.max(s.x, e.x), left = Math.min(s.x, e.x), top = Math.min(s.y, e.y), bottom = Math.max(s.y, e.y);
    for (let i = 1; i < points.length - 1; ++i) {
      right = Math.max(right, points[i].x);
      left = Math.min(left, points[i].x);
      top = Math.min(top, points[i].y);
      bottom = Math.max(bottom, points[i].y);
    }
    return new Rect(left, top, right - left, bottom - top);
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/services/routing/CascadingRouter.js
var topLeft = "topLeft";
var bottomRight = "bottomRight";
var CascadingRouter = class extends LinearConnectionRouter {
  constructor(connection) {
    super(connection);
    this.SAME_SIDE_DISTANCE_RATIO = 5;
    this._connectorSides = [{
      name: TOP,
      axis: Y,
      boundsPoint: topLeft,
      secondarySign: 1
    }, {
      name: LEFT,
      axis: X,
      boundsPoint: topLeft,
      secondarySign: 1
    }, {
      name: BOTTOM,
      axis: Y,
      boundsPoint: bottomRight,
      secondarySign: -1
    }, {
      name: RIGHT,
      axis: X,
      boundsPoint: bottomRight,
      secondarySign: -1
    }];
    this.connection = connection;
  }
  routePoints(start, end, sourceConnector, targetConnector) {
    const sourceSide = sourceConnector ? this._connectorSide(sourceConnector, end) : null;
    const targetSide = targetConnector ? this._connectorSide(targetConnector, start) : null;
    return this._createRoute(start, end, sourceSide, targetSide, sourceConnector);
  }
  route() {
    const sourceConnector = this.connection._resolvedSourceConnector;
    const targetConnector = this.connection._resolvedTargetConnector;
    const start = this.connection.sourcePoint();
    const end = this.connection.targetPoint();
    const points = this.routePoints(start, end, sourceConnector, targetConnector);
    const renderPoints = [start, ...points, end];
    const simplified = simplifyOrthogonalPoints(renderPoints);
    this.connection.points(simplified.slice(1, -1));
  }
  _createRoute(source, target, sourceSide, targetSide, sourceConnector) {
    const connector = sourceConnector || this.connection._resolvedSourceConnector;
    const buildOpts = {
      source,
      target,
      sourceSide,
      targetSide: targetSide || resolvePreviewTargetSide(source, target, this.connection.previewState, {
        hysteresis: 8
      }),
      locks: this.connection.locks,
      anchorOffset: this.connection.options.anchorOffset,
      sameSideDistance: connector ? this._sameSideDistance(connector) : void 0
    };
    const editingEnabled = this.connection.pointsEditable();
    const route = buildConnection(buildOpts, editingEnabled);
    this.connection.route = route;
    this.connection.buildOptions = buildOpts;
    return route.points;
  }
  _connectorSide(connector, targetPoint) {
    const position = connector.positionWithoutOffset();
    const shapeBounds = connector.shape.bounds(ROTATED);
    const bounds = {
      topLeft: shapeBounds.topLeft(),
      bottomRight: shapeBounds.bottomRight()
    };
    const sides = this._connectorSides;
    let min = Number.MAX_VALUE;
    let sideDistance;
    let minSide;
    let axis;
    let side;
    for (let idx = 0; idx < sides.length; idx++) {
      side = sides[idx];
      axis = side.axis;
      sideDistance = Math.round(Math.abs(position[axis] - bounds[side.boundsPoint][axis]));
      if (sideDistance < min) {
        min = sideDistance;
        minSide = side;
      } else if (sideDistance === min && (position[axis] - targetPoint[axis]) * side.secondarySign > (position[minSide.axis] - targetPoint[minSide.axis]) * minSide.secondarySign) {
        minSide = side;
      }
    }
    return minSide.name;
  }
  _sameSideDistance(connector) {
    const bounds = connector.shape.bounds(ROTATED);
    return Math.min(bounds.width, bounds.height) / this.SAME_SIDE_DISTANCE_RATIO;
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/services/routing/PolylineRouter.js
var PolylineRouter = class extends LinearConnectionRouter {
  constructor(connection) {
    super(connection);
    this.connection = connection;
  }
  route() {
  }
  _connectorSide(_connector, _targetPoint) {
    return null;
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/services/tools/ConnectionEditTool.js
var ConnectionEditTool = class {
  constructor(toolService) {
    this.toolService = toolService;
    this.type = "ConnectionTool";
  }
  tryActivate(_p, meta) {
    const toolService = this.toolService, diagram = toolService.diagram, selectable = diagram.options.selectable, item = toolService.hoveredItem, isActive = selectable !== false && item && item.path && !(item.isSelected && meta.ctrlKey);
    if (isActive) {
      this._c = item;
    }
    return isActive;
  }
  start(point, meta, nativeEvent) {
    const toolService = this.toolService;
    const connection = this._c;
    toolService.selectSingle(connection, meta);
    const adorner = connection.adorner;
    let handle, name;
    if (adorner) {
      handle = adorner._hitTest(point);
      name = HANDLE_NAMES[handle];
    }
    if (canDrag(connection) && adorner && !toolService.diagram.trigger(DRAG_START, {
      shapes: [],
      connections: [connection],
      connectionHandle: name,
      point,
      meta,
      nativeEvent
    })) {
      this.handle = handle;
      this.handleName = name;
      adorner.start(point);
    } else {
      toolService.startPoint = point;
      toolService.end(point, meta, nativeEvent);
    }
  }
  move(point, meta, nativeEvent) {
    const adorner = this._c.adorner;
    if (canDrag(this._c) && adorner) {
      adorner.move(this.handle, point);
      this.toolService.diagram.trigger(DRAG, {
        shapes: [],
        connections: [this._c],
        connectionHandle: this.handleName,
        point,
        meta,
        nativeEvent
      });
      return true;
    }
  }
  end(point, meta, nativeEvent) {
    const connection = this._c;
    const adorner = connection.adorner;
    const toolService = this.toolService;
    const diagram = toolService.diagram;
    if (adorner) {
      if (canDrag(connection)) {
        const unit = adorner.stop(point);
        if (!diagram.trigger(DRAG_END, {
          shapes: [],
          connections: [connection],
          connectionHandle: this.handleName,
          point,
          meta,
          nativeEvent
        })) {
          diagram.undoRedoService.add(unit, false);
          connection.updateModel();
          diagram._syncConnectionChanges();
        } else {
          unit.undo();
        }
      }
    }
  }
  getCursor() {
    return Cursors.move;
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/services/tools/ConnectionTool.js
var ConnectionTool = class {
  constructor(toolService) {
    this.toolService = toolService;
    this.type = "ConnectionTool";
  }
  tryActivate() {
    return this.toolService._hoveredConnector;
  }
  start(point, meta, nativeEvent) {
    const toolService = this.toolService, diagram = toolService.diagram, connector = toolService._hoveredConnector, connection = diagram._createConnection({}, connector._c, point);
    if (canDrag(connection) && !diagram.trigger(DRAG_START, {
      shapes: [],
      connections: [connection],
      connectionHandle: TARGET,
      point,
      meta,
      nativeEvent
    }) && diagram._addConnection(connection)) {
      toolService._connectionManipulation(connection, connector._c.shape, true);
      toolService._removeHover();
      toolService.selectSingle(toolService.activeConnection, meta);
      if (meta.type === "touchmove") {
        diagram._cachedTouchTarget = connector.visual;
      }
    } else {
      connection.source(null);
      toolService.end(point, meta, nativeEvent);
    }
  }
  move(point, meta, nativeEvent) {
    const toolService = this.toolService;
    const connection = toolService.activeConnection;
    let targetPoint = point;
    const connector = toolService._hoveredConnector;
    if (connector && connector._c !== connection.sourceConnector) {
      targetPoint = connector._c.positionWithoutOffset();
    }
    connection.target(targetPoint);
    toolService.diagram.trigger(DRAG, {
      shapes: [],
      connections: [connection],
      connectionHandle: TARGET,
      point,
      meta,
      nativeEvent
    });
    return true;
  }
  end(point, meta, nativeEvent) {
    const toolService = this.toolService, diagram = toolService.diagram, connection = toolService.activeConnection, hoveredItem = toolService.hoveredItem, connector = toolService._hoveredConnector, cachedTouchTarget = diagram._cachedTouchTarget;
    let target;
    if (!connection) {
      return;
    }
    if (connector && connector._c !== connection.sourceConnector) {
      target = connector._c;
    } else if (hoveredItem && hoveredItem instanceof Shape) {
      target = hoveredItem.getConnector(AUTO) || hoveredItem.getConnector(point);
    } else {
      target = point;
    }
    connection.target(target);
    if (!diagram.trigger(DRAG_END, {
      shapes: [],
      connections: [connection],
      connectionHandle: TARGET,
      point,
      meta,
      nativeEvent
    })) {
      connection.updateModel();
      diagram._syncConnectionChanges();
    } else {
      diagram.remove(connection, false);
      diagram.undoRedoService.pop();
    }
    toolService._connectionManipulation();
    if (cachedTouchTarget) {
      diagram._connectorsAdorner.visual.remove(cachedTouchTarget);
      diagram._cachedTouchTarget = null;
    }
  }
  getCursor() {
    return Cursors.arrow;
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/services/tools/EmptyTool.js
var EmptyTool = class {
  constructor(toolService) {
    this.toolService = toolService;
  }
  start() {
  }
  move() {
  }
  end() {
  }
  tryActivate() {
    return false;
  }
  getCursor() {
    return Cursors.arrow;
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/services/tools/noMeta.js
function noMeta(meta) {
  return meta.ctrlKey === false && meta.altKey === false && meta.shiftKey === false;
}

// node_modules/@progress/kendo-diagram-common/dist/es/services/tools/PointerTool.js
var PointerTool = class {
  constructor(toolService) {
    this.toolService = toolService;
  }
  tryActivate() {
    return true;
  }
  start(point, meta, nativeEvent) {
    const toolService = this.toolService, diagram = toolService.diagram, hoveredItem = toolService.hoveredItem;
    if (hoveredItem) {
      toolService.selectSingle(hoveredItem, meta);
      if (hoveredItem.adorner) {
        this.adorner = hoveredItem.adorner;
        this.handle = this.adorner._hitTest(point);
      }
    }
    if (!this.handle) {
      this.handle = diagram._resizingAdorner._hitTest(point);
      if (this.handle) {
        this.adorner = diagram._resizingAdorner;
      }
    }
    if (this.adorner) {
      if (!this.adorner.isDragHandle(this.handle) || !diagram.trigger(DRAG_START, {
        shapes: this.adorner.shapes,
        connections: [],
        point,
        nativeEvent,
        meta
      })) {
        this.adorner.start(point);
      } else {
        toolService.startPoint = point;
        toolService.end(point, meta, nativeEvent);
      }
    }
  }
  move(point, meta, nativeEvent) {
    if (this.adorner) {
      this.adorner.move(this.handle, point);
      if (this.adorner.isDragHandle(this.handle)) {
        this.toolService.diagram.trigger(DRAG, {
          shapes: this.adorner.shapes,
          connections: [],
          point,
          meta,
          nativeEvent
        });
      }
    }
  }
  end(point, meta, nativeEvent) {
    const diagram = this.toolService.diagram, adorner = this.adorner;
    let unit;
    if (adorner) {
      if (!adorner.isDragHandle(this.handle) || !diagram.trigger(DRAG_END, {
        shapes: adorner.shapes,
        connections: [],
        point,
        meta,
        nativeEvent
      })) {
        unit = adorner.stop();
        if (unit) {
          diagram.undoRedoService.add(unit, false);
        }
      } else {
        adorner.cancel();
      }
    }
    this.adorner = void 0;
    this.handle = void 0;
  }
  getCursor(p) {
    return this.toolService.hoveredItem ? this.toolService.hoveredItem._getCursor(p) : Cursors.arrow;
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/utils/scroller/event-map.js
var eventMap = {
  down: "pointerdown",
  move: "pointermove",
  up: "pointerup",
  cancel: "pointercancel pointerleave"
};
function queryEventMap(e) {
  return eventMap[e] || e;
}
var applyEventMap = (events2) => {
  const eventRegEx = /([^ ]+)/g;
  const appliedEvents = events2.replace(eventRegEx, queryEventMap);
  return appliedEvents;
};

// node_modules/@progress/kendo-diagram-common/dist/es/utils/scroller/draggable.js
var elementOffset = drawing_exports.util.elementOffset;
var translate = function(x, y, scale) {
  return "translate3d(" + x + "px," + y + "px,0) scale(" + scale + ")";
};
var TapCapture = class extends Observable {
  constructor(element, options) {
    super();
    const domElement = element[0] || element;
    this.element = domElement;
    this.capture = false;
    this._pressHandler = this._press.bind(this);
    this._releaseHandler = this._release.bind(this);
    eventMap.down.split(" ").forEach((event) => {
      domElement.addEventListener(event, this._pressHandler, true);
    });
    eventMap.up.split(" ").forEach((event) => {
      domElement.addEventListener(event, this._releaseHandler, true);
    });
    this.bind(["press", "release"], options || {});
  }
  captureNext() {
    this.capture = true;
  }
  cancelCapture() {
    this.capture = false;
  }
  _press(e) {
    this.trigger("press");
    if (this.capture) {
      e.preventDefault();
    }
  }
  _release(e) {
    this.trigger("release");
    if (this.capture) {
      e.preventDefault();
      this.cancelCapture();
    }
  }
  destroy() {
    const domElement = this.element;
    eventMap.down.split(" ").forEach((event) => {
      domElement.removeEventListener(event, this._pressHandler, true);
    });
    eventMap.up.split(" ").forEach((event) => {
      domElement.removeEventListener(event, this._releaseHandler, true);
    });
  }
};
var PaneDimension = class extends Observable {
  constructor(options) {
    super();
    this.forcedEnabled = false;
    extend(this, options);
    this.scale = 1;
    if (this.horizontal) {
      this.measure = "offsetWidth";
      this.scrollSize = "scrollWidth";
      this.axis = "x";
    } else {
      this.measure = "offsetHeight";
      this.scrollSize = "scrollHeight";
      this.axis = "y";
    }
  }
  makeVirtual() {
    extend(this, {
      virtual: true,
      forcedEnabled: true,
      _virtualMin: 0,
      _virtualMax: 0
    });
  }
  virtualSize(min, max) {
    if (this._virtualMin !== min || this._virtualMax !== max) {
      this._virtualMin = min;
      this._virtualMax = max;
      this.update();
    }
  }
  outOfBounds(offset) {
    return offset > this.max || offset < this.min;
  }
  forceEnabled() {
    this.forcedEnabled = true;
  }
  getSize() {
    return this.container[this.measure];
  }
  getTotal() {
    return this.element[this.scrollSize];
  }
  rescale(scale) {
    this.scale = scale;
  }
  update(silent) {
    const total = this.virtual ? this._virtualMax : this.getTotal(), scaledTotal = total * this.scale, size = this.getSize();
    if (total === 0 && !this.forcedEnabled) {
      return;
    }
    this.max = this.virtual ? -this._virtualMin : 0;
    this.size = size;
    this.total = scaledTotal;
    this.min = Math.min(this.max, size - scaledTotal);
    this.minScale = size / total;
    this.centerOffset = (scaledTotal - size) / 2;
    this.enabled = this.forcedEnabled || scaledTotal > size;
    if (!silent) {
      this.trigger(CHANGE, this);
    }
  }
};
var PaneDimensions = class extends Observable {
  constructor(options) {
    super();
    this.x = new PaneDimension(extend({
      horizontal: true
    }, options));
    this.y = new PaneDimension(extend({
      horizontal: false
    }, options));
    this.container = options.container;
    this.forcedMinScale = options.minScale;
    this.maxScale = options.maxScale || 100;
    this.bind(CHANGE, options);
  }
  rescale(newScale) {
    this.x.rescale(newScale);
    this.y.rescale(newScale);
    this.refresh();
  }
  centerCoordinates() {
    return {
      x: Math.min(0, -this.x.centerOffset),
      y: Math.min(0, -this.y.centerOffset)
    };
  }
  refresh() {
    this.x.update();
    this.y.update();
    this.enabled = this.x.enabled || this.y.enabled;
    this.minScale = this.forcedMinScale || Math.min(this.x.minScale, this.y.minScale);
    this.fitScale = Math.max(this.x.minScale, this.y.minScale);
    this.trigger(CHANGE);
  }
};
var PaneAxis = class extends Observable {
  constructor(options) {
    super();
    extend(this, options);
  }
  outOfBounds() {
    return this.dimension.outOfBounds(this.movable[this.axis]);
  }
  dragMove(delta) {
    const dimension = this.dimension, axis = this.axis, movable = this.movable, position = movable[axis] + delta;
    if (!dimension.enabled) {
      return;
    }
    let dragDelta = delta;
    if (position < dimension.min && delta < 0 || position > dimension.max && delta > 0) {
      dragDelta *= this.resistance;
    }
    movable.translateAxis(axis, dragDelta);
    this.trigger(CHANGE, this);
  }
};
var Pane = class {
  constructor(options) {
    let x, y;
    extend(this, {
      elastic: true
    }, options);
    const resistance = this.elastic ? 0.5 : 0;
    const movable = this.movable;
    this.x = x = new PaneAxis({
      axis: "x",
      dimension: this.dimensions.x,
      resistance,
      movable
    });
    this.y = y = new PaneAxis({
      axis: "y",
      dimension: this.dimensions.y,
      resistance,
      movable
    });
    this.userEvents.bind(["press", "move", "end", "gesturestart", "gesturechange"], {
      gesturestart(e) {
        this.gesture = e;
        this.offset = elementOffset(this.dimensions.container);
      },
      press(e) {
        const closestAnchor = e.event.target.closest("a");
        if (closestAnchor && closestAnchor.matches("[data-navigate-on-press=true]")) {
          e.sender.cancel();
        }
      },
      gesturechange(e) {
        const previousGesture = this.gesture, previousCenter = previousGesture.center, center = e.center, minScale = this.dimensions.minScale, maxScale = this.dimensions.maxScale;
        let scaleDelta = e.distance / previousGesture.distance;
        if (movable.scale <= minScale && scaleDelta < 1) {
          scaleDelta += (1 - scaleDelta) * 0.8;
        }
        if (movable.scale * scaleDelta >= maxScale) {
          scaleDelta = maxScale / movable.scale;
        }
        const offsetX = movable.x + this.offset.left, offsetY = movable.y + this.offset.top;
        const coordinates = {
          x: (offsetX - previousCenter.x) * scaleDelta + center.x - offsetX,
          y: (offsetY - previousCenter.y) * scaleDelta + center.y - offsetY
        };
        movable.scaleWith(scaleDelta);
        x.dragMove(coordinates.x);
        y.dragMove(coordinates.y);
        this.dimensions.rescale(movable.scale);
        this.gesture = e;
        e.preventDefault();
      },
      move(e) {
        if (e.event.target.tagName.match(/textarea|input/i)) {
          return;
        }
        if (x.dimension.enabled || y.dimension.enabled) {
          x.dragMove(e.x.delta);
          y.dragMove(e.y.delta);
          e.preventDefault();
        } else {
          e.touch.skip();
        }
      },
      end(e) {
        e.preventDefault();
      }
    });
  }
};
var Movable = class extends Observable {
  constructor(element) {
    super();
    this.element = element;
    this.element.style.transformOrigin = "left top";
    this.x = 0;
    this.y = 0;
    this.scale = 1;
    const coordinates = translate(this.x, this.y, this.scale);
    this.element.style.transform = coordinates;
    this._saveCoordinates(coordinates);
  }
  translateAxis(axis, by) {
    this[axis] += by;
    this.refresh();
  }
  scaleTo(scale) {
    this.scale = scale;
    this.refresh();
  }
  scaleWith(scaleDelta) {
    this.scale *= scaleDelta;
    this.refresh();
  }
  translate(coordinates) {
    this.x += coordinates.x;
    this.y += coordinates.y;
    this.refresh();
  }
  moveAxis(axis, value, silent = false) {
    this[axis] = value;
    this.refresh(silent);
  }
  moveTo(coordinates, silent = false) {
    extend(this, coordinates);
    this.refresh(silent);
  }
  refresh(silent = false) {
    let x = this.x, y = this.y;
    if (this.round) {
      x = Math.round(x);
      y = Math.round(y);
    }
    const newCoordinates = translate(x, y, this.scale);
    if (newCoordinates !== this.coordinates) {
      this.element.style.transform = newCoordinates;
      this._saveCoordinates(newCoordinates);
      if (!silent) {
        this.trigger(CHANGE);
      }
    }
  }
  _saveCoordinates(coordinates) {
    this.coordinates = coordinates;
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/utils/scroller/fx.js
function animationFrame(callback) {
  window.requestAnimationFrame(callback);
}
var Animation = class {
  constructor() {
    this._tickProxy = () => this._tick();
    this._started = false;
  }
  tick() {
  }
  done() {
    return false;
  }
  onEnd() {
  }
  onCancel() {
  }
  start() {
    if (!this.enabled()) {
      return;
    }
    if (!this.done()) {
      this._started = true;
      animationFrame(this._tickProxy);
    } else {
      this.onEnd();
    }
  }
  enabled() {
    return true;
  }
  cancel() {
    this._started = false;
    this.onCancel();
  }
  _tick() {
    if (!this._started) {
      return;
    }
    this.tick();
    if (!this.done()) {
      animationFrame(this._tickProxy);
    } else {
      this._started = false;
      this.onEnd();
    }
  }
};
var Transition = class extends Animation {
  constructor(options) {
    super();
    extend(this, options);
  }
  done() {
    return this.timePassed() >= this.duration;
  }
  timePassed() {
    return Math.min(this.duration, now() - this.startDate);
  }
  moveTo(options) {
    const movable = this.movable;
    this.initial = movable[this.axis];
    this.delta = options.location - this.initial;
    this.duration = typeof options.duration === "number" ? options.duration : 300;
    this.tick = this._easeProxy(options.ease);
    this.startDate = now();
    this.start();
  }
  _easeProxy(ease) {
    return function() {
      this.movable.moveAxis(this.axis, ease(this.timePassed(), this.initial, this.delta, this.duration));
    };
  }
  static easeOutExpo(t, b, c, d) {
    return t === d ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/utils/guid.js
function guid() {
  let id = "";
  let i;
  let random;
  for (i = 0; i < 32; i++) {
    random = Math.floor(Math.random() * 16);
    if (i === 8 || i === 12 || i === 16 || i === 20) {
      id += "-";
    }
    id += (i === 12 ? 4 : i === 16 ? random % 4 + 8 : random).toString(16);
  }
  return id;
}

// node_modules/@progress/kendo-diagram-common/dist/es/utils/event-utils.js
var elementEventHandlers = /* @__PURE__ */ new WeakMap();
var ID = Symbol("id");
function on(element, events2, filter, handler, useCapture) {
  addEventListeners(element, events2, filter, handler, useCapture);
}
function off(element, events2, handler, useCapture) {
  removeEventListeners(element, events2, handler, useCapture);
}
function isString2(value) {
  return typeof value === "string";
}
function addEventListeners(element, events2, filter, handler, useCapture) {
  const eventNames = Array.isArray(events2) ? events2 : (events2 || "").split(" ");
  eventNames.forEach(function(eventName) {
    addEventListener(element, eventName, filter, handler, useCapture);
  });
}
function addEventListener(element, event, filter, handler, useCapture) {
  let eventHandler = handler;
  let eventFilter;
  if (filter && isFunction(filter) && !handler) {
    eventHandler = filter;
  } else if (filter && isString2(filter) && isFunction(eventHandler)) {
    eventFilter = filter;
  }
  const attachedHandler = function(e) {
    const closestMatchingTarget = e.target ? e.target.closest(eventFilter) : null;
    if (!eventFilter || eventFilter && e.target && closestMatchingTarget) {
      const currentTarget = eventFilter ? closestMatchingTarget : e.currentTarget;
      Object.defineProperty(e, "currentTarget", {
        value: currentTarget
      });
      Object.defineProperty(e, "delegateTarget", {
        value: element
      });
      eventHandler(e);
    }
  };
  if (!eventHandler[ID]) {
    eventHandler[ID] = guid();
  }
  let eventHandlers = elementEventHandlers.get(element);
  if (!eventHandlers) {
    eventHandlers = /* @__PURE__ */ new Map();
    elementEventHandlers.set(element, eventHandlers);
  }
  eventHandlers.set(event + eventHandler[ID], attachedHandler);
  element.addEventListener(event, attachedHandler, Boolean(useCapture));
}
function removeEventListeners(element, events2, handler, useCapture) {
  const eventNames = Array.isArray(events2) ? events2 : (events2 || "").split(" ");
  eventNames.forEach(function(eventName) {
    removeEventListener(element, eventName, handler, useCapture);
  });
}
function removeEventListener(element, event, handler, useCapture) {
  const eventHandlers = elementEventHandlers.get(element);
  if (eventHandlers && handler && handler[ID]) {
    const handlerId = event + handler[ID];
    const attachedHandler = eventHandlers.get(handlerId);
    eventHandlers.delete(handlerId);
    if (attachedHandler) {
      element.removeEventListener(event, attachedHandler, Boolean(useCapture));
    }
  }
}

// node_modules/@progress/kendo-diagram-common/dist/es/utils/grep.js
function grep2(array, callback) {
  const length = array.length;
  const result = [];
  for (let idx = 0; idx < length; idx++) {
    if (callback(array[idx])) {
      result.push(array[idx]);
    }
  }
  return result;
}

// node_modules/@progress/kendo-diagram-common/dist/es/utils/user-events.js
var preventDefault2 = (e) => {
  e.preventDefault();
};
var noop2 = () => {
};
var CLICK_DELAY = 300;
var PRESS = "press";
var HOLD = "hold";
var SELECT2 = "select";
var START2 = "start";
var MOVE = "move";
var END2 = "end";
var CANCEL = "cancel";
var TAP = "tap";
var DOUBLETAP = "doubleTap";
var RELEASE = "release";
var GESTURESTART = "gesturestart";
var GESTURECHANGE = "gesturechange";
var GESTUREEND = "gestureend";
var GESTURETAP = "gesturetap";
var THRESHOLD = {
  "api": 0,
  "touch": 0,
  "mouse": 3,
  "pointer": 3
};
var DEFAULT_MIN_HOLD = 800;
var DEFAULT_THRESHOLD = 0;
function touchDelta(touch1, touch2) {
  const x1 = touch1.x.location, y1 = touch1.y.location, x2 = touch2.x.location, y2 = touch2.y.location, dx = x1 - x2, dy = y1 - y2;
  return {
    center: {
      x: (x1 + x2) / 2,
      y: (y1 + y2) / 2
    },
    distance: Math.sqrt(dx * dx + dy * dy)
  };
}
function getTouches(e) {
  const touches = [], originalEvent = e.originalEvent || e, currentTarget = e.currentTarget;
  if (e.api) {
    touches.push({
      id: 2,
      // hardcoded ID for API call
      event: e,
      target: e.target,
      currentTarget: e.target,
      location: e,
      type: "api"
    });
  } else {
    touches.push({
      location: originalEvent,
      event: e,
      target: e.target,
      currentTarget,
      id: originalEvent.pointerId,
      type: "pointer"
    });
  }
  return touches;
}
var TouchAxis = class {
  constructor(axis, location) {
    this.support = getSupportedFeatures();
    this.invalidZeroEvents = this.support.mobileOS && this.support.mobileOS.android;
    this.axis = axis;
    this._updateLocationData(location);
    this.startLocation = this.location;
    this.velocity = this.delta = 0;
    this.timeStamp = now();
  }
  move(location) {
    const offset = location["page" + this.axis], timeStamp = now(), timeDelta = timeStamp - this.timeStamp || 1;
    if (!offset && this.invalidZeroEvents) {
      return;
    }
    this.delta = offset - this.location;
    this._updateLocationData(location);
    this.initialDelta = offset - this.startLocation;
    this.velocity = this.delta / timeDelta;
    this.timeStamp = timeStamp;
  }
  _updateLocationData(location) {
    const axis = this.axis;
    this.location = location["page" + axis];
    this.client = location["client" + axis];
    this.screen = location["screen" + axis];
  }
};
var Touch = class {
  constructor(userEvents, target, touchInfo) {
    extend(this, {
      x: new TouchAxis("X", touchInfo.location),
      y: new TouchAxis("Y", touchInfo.location),
      type: touchInfo.type,
      threshold: userEvents.threshold || THRESHOLD[touchInfo.type],
      userEvents,
      target,
      currentTarget: touchInfo.currentTarget,
      initialTouch: touchInfo.target,
      id: touchInfo.id,
      pressEvent: touchInfo,
      _clicks: userEvents._clicks,
      supportDoubleTap: userEvents.supportDoubleTap,
      _moved: false,
      _finished: false
    });
  }
  press() {
    this._holdTimeout = setTimeout(() => this._hold(), this.userEvents.minHold);
    this._trigger(PRESS, this.pressEvent);
  }
  _tap(touchInfo) {
    this.userEvents._clicks++;
    if (this.userEvents._clicks === 1) {
      this._clickTimeout = setTimeout(() => {
        if (this.userEvents._clicks === 1) {
          this._trigger(TAP, touchInfo);
        } else {
          this._trigger(DOUBLETAP, touchInfo);
        }
        this.userEvents._clicks = 0;
      }, CLICK_DELAY);
    }
  }
  _hold() {
    this._trigger(HOLD, this.pressEvent);
  }
  move(touchInfo) {
    const preventMove = touchInfo.type !== "api" && this.userEvents._shouldNotMove;
    if (this._finished || preventMove) {
      return;
    }
    this.x.move(touchInfo.location);
    this.y.move(touchInfo.location);
    if (!this._moved) {
      if (this._withinIgnoreThreshold()) {
        return;
      }
      if (!UserEvents.current || UserEvents.current === this.userEvents) {
        this._start(touchInfo);
      } else {
        return this.dispose();
      }
    }
    if (!this._finished) {
      this._trigger(MOVE, touchInfo);
    }
  }
  end(touchInfo) {
    this.endTime = now();
    if (this._finished) {
      return;
    }
    this._finished = true;
    this._trigger(RELEASE, touchInfo);
    if (this._moved) {
      this._trigger(END2, touchInfo);
    } else {
      if (this.supportDoubleTap) {
        this._tap(touchInfo);
      } else {
        this._trigger(TAP, touchInfo);
      }
    }
    clearTimeout(this._holdTimeout);
    this.dispose();
  }
  dispose() {
    const userEvents = this.userEvents, activeTouches = userEvents.touches || [];
    this._finished = true;
    this.pressEvent = null;
    clearTimeout(this._holdTimeout);
    const activeTouchIndex = activeTouches.indexOf(this);
    activeTouches.splice(activeTouchIndex, 1);
  }
  skip() {
    this.dispose();
  }
  cancel() {
    this.dispose();
  }
  isMoved() {
    return this._moved;
  }
  _start(touchInfo) {
    clearTimeout(this._holdTimeout);
    this.startTime = now();
    this._moved = true;
    this._trigger(START2, touchInfo);
  }
  _trigger(name, touchInfo) {
    const e = touchInfo.event;
    const data = {
      touch: this,
      x: this.x,
      y: this.y,
      target: this.target,
      event: e
    };
    if (this.userEvents.notify(name, data)) {
      e.preventDefault();
    }
  }
  _withinIgnoreThreshold() {
    const xDelta = this.x.initialDelta, yDelta = this.y.initialDelta;
    return Math.sqrt(xDelta * xDelta + yDelta * yDelta) <= this.threshold;
  }
};
function withEachUpEvent(callback) {
  const downEvents = eventMap.up.split(" "), length = downEvents.length;
  for (let idx = 0; idx < length; idx++) {
    callback(downEvents[idx]);
  }
}
var UserEvents = class _UserEvents extends Observable {
  constructor(element, options) {
    super();
    const support = getSupportedFeatures();
    this.support = support;
    options = options || {};
    this.options = options;
    const filter = this.filter = options.filter;
    this.threshold = options.threshold || DEFAULT_THRESHOLD;
    this.minHold = options.minHold || DEFAULT_MIN_HOLD;
    this.touches = [];
    this._maxTouches = options.multiTouch ? 2 : 1;
    this.allowSelection = options.allowSelection;
    this.captureUpIfMoved = options.captureUpIfMoved;
    this._clicks = 0;
    this.supportDoubleTap = options.supportDoubleTap;
    extend(this, {
      element,
      surface: options.surface || element,
      stopPropagation: options.stopPropagation,
      pressed: false
    });
    this._surfaceMoveHandler = this._move.bind(this);
    on(this.surface, applyEventMap("move"), this._surfaceMoveHandler);
    this._surfaceEndHandler = this._end.bind(this);
    on(this.surface, applyEventMap("up cancel"), this._surfaceEndHandler);
    this._elementStartHandler = this._start.bind(this);
    on(element, applyEventMap("down"), filter, this._elementStartHandler);
    element.style["touch-action"] = options.touchAction || "none";
    if (options.preventDragEvent) {
      this._elementDragStartHandler = preventDefault2;
      on(element, applyEventMap("dragstart"), this._elementDragStartHandler);
    }
    this._elementSelectHandler = this._select.bind(this);
    on(element, applyEventMap("mousedown"), filter, this._elementSelectHandler);
    if (this.captureUpIfMoved) {
      const surfaceElement = this.surface;
      this.preventIfMovingProxy = this.preventIfMoving.bind(this);
      withEachUpEvent((eventName) => {
        surfaceElement.addEventListener(eventName, this.preventIfMovingProxy, true);
      });
    }
    this.bind([PRESS, HOLD, TAP, DOUBLETAP, START2, MOVE, END2, RELEASE, CANCEL, GESTURESTART, GESTURECHANGE, GESTUREEND, GESTURETAP, SELECT2], options);
  }
  preventIfMoving(e) {
    if (this._isMoved()) {
      e.preventDefault();
    }
  }
  destroy() {
    const options = this.options;
    const element = this.element;
    if (this._destroyed) {
      return;
    }
    this._destroyed = true;
    if (this.captureUpIfMoved) {
      const surfaceElement = this.surface;
      withEachUpEvent((eventName) => {
        surfaceElement.removeEventListener(eventName, this.preventIfMovingProxy, true);
      });
    }
    off(this.surface, applyEventMap("move"), this._surfaceMoveHandler);
    off(this.surface, applyEventMap("up cancel"), this._surfaceEndHandler);
    off(element, applyEventMap("down"), this._elementStartHandler);
    if (options.preventDragEvent) {
      off(element, applyEventMap("dragstart"), this._elementDragStartHandler);
    }
    off(element, applyEventMap("mousedown"), this._elementSelectHandler);
    this._disposeAll();
    this.unbind();
    delete this.surface;
    delete this.element;
    delete this.currentTarget;
  }
  capture() {
    _UserEvents.current = this;
  }
  cancel() {
    this._disposeAll();
    this.trigger(CANCEL);
  }
  notify(event, data) {
    const touches = this.touches;
    let eventName = event;
    if (this._isMultiTouch()) {
      switch (eventName) {
        case MOVE:
          eventName = GESTURECHANGE;
          break;
        case END2:
          eventName = GESTUREEND;
          break;
        case TAP:
          eventName = GESTURETAP;
          break;
        default:
          break;
      }
      extend(data, {
        touches
      }, touchDelta(touches[0], touches[1]));
    }
    return this.trigger(eventName, extend(data, {
      type: eventName
    }));
  }
  press(x, y, target) {
    this._apiCall("_start", x, y, target);
  }
  move(x, y) {
    this._apiCall("_move", x, y);
  }
  end(x, y) {
    this._apiCall("_end", x, y);
  }
  _isMultiTouch() {
    return this.touches.length > 1;
  }
  _maxTouchesReached() {
    return this.touches.length >= this._maxTouches;
  }
  _disposeAll() {
    const touches = this.touches;
    while (touches.length > 0) {
      touches.pop().dispose();
    }
  }
  _isMoved() {
    return grep2(this.touches, function(touch) {
      return touch.isMoved();
    }).length;
  }
  _select(e) {
    if (!this.allowSelection || this.trigger(SELECT2, {
      event: e
    })) {
      e.preventDefault();
    }
  }
  _start(e) {
    if (e.which && e.which > 1 || this._maxTouchesReached()) {
      return;
    }
    _UserEvents.current = null;
    this.currentTarget = e.currentTarget;
    if (this.stopPropagation) {
      e.stopPropagation();
    }
    let target;
    const eventTouches = getTouches(e);
    for (let idx = 0; idx < eventTouches.length; idx++) {
      if (this._maxTouchesReached()) {
        break;
      }
      const eventTouch = eventTouches[idx];
      if (this.filter) {
        target = eventTouch.currentTarget;
      } else {
        target = this.element;
      }
      if (target && target.length === 0) {
        continue;
      }
      const touch = new Touch(this, target, eventTouch);
      this.touches.push(touch);
      touch.press();
      if (this._isMultiTouch()) {
        this.notify("gesturestart", {});
      }
    }
  }
  _move(e) {
    this._eachTouch("move", e);
  }
  _end(e) {
    this._eachTouch("end", e);
  }
  _eachTouch(methodName, e) {
    const dict = {}, touches = getTouches(e), activeTouches = this.touches;
    let idx, touch, touchInfo, matchingTouch;
    for (idx = 0; idx < activeTouches.length; idx++) {
      touch = activeTouches[idx];
      dict[touch.id] = touch;
    }
    for (idx = 0; idx < touches.length; idx++) {
      touchInfo = touches[idx];
      matchingTouch = dict[touchInfo.id];
      if (matchingTouch) {
        const shouldCapture = methodName === "move" && touchInfo.type === "pointer" && !this.surface.hasPointerCapture(touchInfo.id);
        if (shouldCapture) {
          this.surface.setPointerCapture(touchInfo.id);
        }
        matchingTouch[methodName](touchInfo);
      }
    }
  }
  _apiCall(type, x, y, target) {
    this[type]({
      api: true,
      pageX: x,
      pageY: y,
      clientX: x,
      clientY: y,
      target: target || this.element,
      stopPropagation: noop2,
      preventDefault: noop2
    });
  }
  static defaultThreshold(value) {
    DEFAULT_THRESHOLD = value;
  }
  static minHold(value) {
    DEFAULT_MIN_HOLD = value;
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/utils/scroller/scroller.js
var extend2 = Object.assign;
var abs = Math.abs;
var SNAPBACK_DURATION = 500;
var SCROLLBAR_OPACITY = 0.7;
var FRICTION2 = 0.96;
var VELOCITY_MULTIPLIER2 = 10;
var MAX_VELOCITY = 55;
var OUT_OF_BOUNDS_FRICTION = 0.5;
var ANIMATED_SCROLLER_PRECISION = 5;
var PULL = "pull";
var CHANGE2 = "change";
var RESIZE = "resize";
var SCROLL = "scroll";
var MOUSE_WHEEL_ID = 2;
var ZoomSnapBack = class extends Animation {
  constructor(options) {
    super();
    extend2(this, options);
    this.userEvents.bind("gestureend", this.start.bind(this));
    this.tapCapture.bind("press", this.cancel.bind(this));
  }
  enabled() {
    return this.movable.scale < this.dimensions.minScale;
  }
  done() {
    return this.dimensions.minScale - this.movable.scale < 0.01;
  }
  tick() {
    const movable = this.movable;
    movable.scaleWith(1.1);
    this.dimensions.rescale(movable.scale);
  }
  onEnd() {
    const movable = this.movable;
    movable.scaleTo(this.dimensions.minScale);
    this.dimensions.rescale(movable.scale);
  }
};
var DragInertia = class extends Animation {
  constructor(options) {
    super();
    extend2(this, options, {
      transition: new Transition({
        axis: options.axis,
        movable: options.movable,
        onEnd: () => {
          this._end();
        }
      })
    });
    this.tapCapture.bind("press", () => {
      this.cancel();
    });
    this.userEvents.bind("end", () => this.start());
    this.userEvents.bind("gestureend", () => this.start());
    this.userEvents.bind("tap", () => this.onEnd());
  }
  onCancel() {
    this.transition.cancel();
  }
  freeze(location) {
    this.cancel();
    this._moveTo(location);
  }
  onEnd() {
    if (this.paneAxis.outOfBounds()) {
      this._snapBack();
    } else {
      this._end();
    }
  }
  done() {
    return abs(this.velocity) < 1;
  }
  start(e) {
    let velocity;
    if (!this.dimension.enabled) {
      return;
    }
    if (this.paneAxis.outOfBounds()) {
      if (this.transition._started) {
        this.transition.cancel();
        this.velocity = Math.min(e.touch[this.axis].velocity * this.velocityMultiplier, MAX_VELOCITY);
        super.start();
      } else {
        this._snapBack();
      }
    } else {
      velocity = e ? e.touch.id === MOUSE_WHEEL_ID ? 0 : e.touch[this.axis].velocity : 0;
      this.velocity = Math.max(Math.min(velocity * this.velocityMultiplier, MAX_VELOCITY), -MAX_VELOCITY);
      this.tapCapture.captureNext();
      super.start();
    }
  }
  tick() {
    const dimension = this.dimension, friction = this.paneAxis.outOfBounds() ? OUT_OF_BOUNDS_FRICTION : this.friction, delta = this.velocity *= friction;
    let location = this.movable[this.axis] + delta;
    if (!this.elastic && dimension.outOfBounds(location)) {
      location = Math.max(Math.min(location, dimension.max), dimension.min);
      this.velocity = 0;
    }
    this.movable.moveAxis(this.axis, location);
  }
  _end() {
    this.tapCapture.cancelCapture();
    this.end();
  }
  end() {
  }
  _snapBack() {
    const dimension = this.dimension, snapBack = this.movable[this.axis] > dimension.max ? dimension.max : dimension.min;
    this._moveTo(snapBack);
  }
  _moveTo(location) {
    this.transition.moveTo({
      location,
      duration: SNAPBACK_DURATION,
      ease: (...args) => {
        Transition.easeOutExpo.apply(null, args);
      }
    });
  }
};
var AnimatedScroller = class extends Animation {
  constructor(options) {
    super();
    extend2(this, options, {
      origin: {},
      destination: {},
      offset: {}
    });
  }
  moveTo(_to) {
  }
  tick() {
    this._updateCoordinates();
    this.moveTo(this.origin);
  }
  done() {
    return abs(this.offset.y) < ANIMATED_SCROLLER_PRECISION && abs(this.offset.x) < ANIMATED_SCROLLER_PRECISION;
  }
  onEnd() {
    this.moveTo(this.destination);
    if (this.callback) {
      this.callback.call();
    }
  }
  setCoordinates(from, to) {
    this.offset = {};
    this.origin = from;
    this.destination = to;
  }
  setCallback(callback) {
    if (callback && isFunction(callback)) {
      this.callback = callback;
    } else {
      callback = void 0;
    }
  }
  _updateCoordinates() {
    this.offset = {
      x: (this.destination.x - this.origin.x) / 4,
      y: (this.destination.y - this.origin.y) / 4
    };
    this.origin = {
      y: this.origin.y + this.offset.y,
      x: this.origin.x + this.offset.x
    };
  }
};
var stopPropagation = (e) => {
  e.stopPropagation();
};
var ScrollBar = class {
  constructor(options) {
    this.stopPropagationEvents = ["mousedown", "touchstart", "pointerdown", "mousemove", "touchmove", "pointermove", "mouseup", "touchend", "pointerup", "click"];
    this.containerEnterEvents = ["mouseenter", "mouseover"];
    this.containerLeaveEvents = ["mouseleave", "mouseout"];
    this.options = options;
    this.axis = options.axis;
    this.dimension = options.dimension;
    this.container = options.container;
    this.scrollMovable = options.movable;
    this.autoHideScrollbars = options.autoHideScrollbars;
    const horizontal = options.axis === "x";
    this.size = horizontal ? "width" : "height";
    this.scrollMovable.bind(CHANGE2, this.refresh.bind(this));
    if (options.showScrollbars) {
      this._create();
    }
  }
  _create() {
    const horizontal = this.axis === "x";
    const orientation = horizontal ? "horizontal" : "vertical";
    const element = convertToHtml('<div class="km-touch-scrollbar km-' + orientation + '-scrollbar" />');
    element.style.position = "absolute";
    element.style.zIndex = "100000";
    element.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
    element.style.borderRadius = "4px";
    if (horizontal) {
      element.style.bottom = "1px";
      element.style.left = "1px";
      element.style.height = "7px";
    } else {
      element.style.top = "1px";
      element.style.right = "1px";
      element.style.width = "7px";
    }
    this.element = element;
    this.elementSize = 0;
    this.movable = new Movable(element);
    this.container.appendChild(element);
    this.userEvents = new UserEvents(element, {
      fastTap: true,
      preventDragEvent: true,
      captureUpIfMoved: true,
      start: (e) => {
        this.start = this.movable[this.axis];
        this.startContent = this.scrollMovable[this.axis];
        e.event.stopPropagation();
      },
      move: (e) => {
        this.change(e);
        e.event.preventDefault();
      }
    });
    this.stopPropagationEvents.forEach((eventName) => {
      element.addEventListener(eventName, stopPropagation);
    });
    if (!this.autoHideScrollbars) {
      this.show();
    } else {
      this._toggleHoverListeners(true);
    }
    this.refresh();
  }
  setOptions(options) {
    this.options = extend2(this.options, options);
    this.autoHideScrollbars = this.options.autoHideScrollbars;
    if (this.options.showScrollbars) {
      if (!this.element) {
        this._create();
      } else {
        if (!this.autoHideScrollbars) {
          this.show();
          this._toggleHoverListeners(false);
        } else {
          this._toggleHoverListeners(true);
          this.hide();
        }
      }
    } else {
      if (this.element) {
        this.destroy();
        this.element = null;
      }
    }
  }
  _toggleHoverListeners(enable) {
    if (enable) {
      if (!this.showDelegate) {
        this.showDelegate = this.show.bind(this);
        this.containerEnterEvents.forEach((eventName) => {
          this.container.addEventListener(eventName, this.showDelegate);
        });
      }
      if (!this.hideDelegate) {
        this.hideDelegate = this.hide.bind(this);
        this.containerLeaveEvents.forEach((eventName) => {
          this.container.addEventListener(eventName, this.hideDelegate);
        });
      }
    } else {
      if (this.showDelegate) {
        this.containerEnterEvents.forEach((eventName) => {
          this.container.removeEventListener(eventName, this.showDelegate);
        });
        this.showDelegate = null;
      }
      if (this.hideDelegate) {
        this.containerLeaveEvents.forEach((eventName) => {
          this.container.removeEventListener(eventName, this.hideDelegate);
        });
        this.hideDelegate = null;
      }
    }
  }
  destroy() {
    var _a;
    this._toggleHoverListeners(false);
    if (this.element) {
      this.stopPropagationEvents.forEach((eventName) => {
        this.element.removeEventListener(eventName, stopPropagation);
      });
      this.userEvents.destroy();
      (_a = this.element.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(this.element);
    }
  }
  refresh() {
    if (!this.element) {
      return;
    }
    const axis = this.axis, dimension = this.dimension, paneSize = dimension.size, scrollMovable = this.scrollMovable, sizeRatio = paneSize / dimension.total;
    const max = dimension.max;
    const min = dimension.min;
    const range = max - min;
    const size = Math.round(paneSize * sizeRatio);
    let position = 0;
    if (range > 0) {
      const offset = max - scrollMovable[axis];
      position = Math.round(offset / range * (paneSize - size));
    }
    position = Math.max(0, Math.min(position, paneSize - size));
    if (sizeRatio >= 1 && !this.autoHideScrollbars) {
      this.element.style.display = "none";
    } else {
      this.element.style.display = "block";
    }
    if (this.elementSize !== size) {
      this.element.style[this.size] = size + "px";
      this.elementSize = size;
    }
    this.movable.moveAxis(axis, position);
  }
  change(e) {
    const visible = this.element.checkVisibility({
      opacityProperty: true,
      visibilityProperty: true
    });
    if (!visible) {
      return;
    }
    const axis = this.axis;
    const dimension = this.dimension;
    const paneSize = dimension.size;
    const max = dimension.max;
    const min = dimension.min;
    const range = max - min;
    const sizeRatio = paneSize / dimension.total;
    const size = Math.round(paneSize * sizeRatio);
    const trackRange = paneSize - size;
    const initialDelta = e[axis].initialDelta;
    if (range > 0 && trackRange > 0) {
      const ratio = range / trackRange;
      const contentDelta = -(initialDelta * ratio);
      const newContentPos = Math.min(Math.max(this.startContent + contentDelta, min), max);
      this.scrollMovable.moveAxis(axis, newContentPos);
    }
  }
  show() {
    if (!this.element) {
      return;
    }
    this.element.style.opacity = SCROLLBAR_OPACITY;
    this.element.style.visibility = "visible";
  }
  hide() {
    if (!this.element) {
      return;
    }
    if (this.autoHideScrollbars) {
      this.element.style.opacity = 0;
    }
  }
};
var defaultScrollerOptions = {
  name: "Scroller",
  zoom: false,
  pullOffset: 140,
  showScrollbars: true,
  autoHideScrollbars: false,
  elastic: true,
  useNative: false,
  mousewheelScrolling: true,
  avoidScrolling: () => false,
  pullToRefresh: false,
  messages: {
    pullTemplate: "Pull to refresh",
    releaseTemplate: "Release to refresh",
    refreshTemplate: "Refreshing"
  }
};
var Scroller = class extends Observable {
  constructor(element, options) {
    super();
    this.element = element = element[0] || element;
    this._initOptions(options);
    this.events.push(PULL, SCROLL, RESIZE);
    const hasScrolling = hasNativeScrolling();
    this._native = this.options.useNative && hasScrolling;
    const scrollHeader = convertToHtml('<div class="km-scroll-header"/>');
    if (this._native) {
      addClass(element, "km-native-scroller");
      prepend(scrollHeader, element);
      extend2(this, {
        scrollElement: element,
        fixedContainer: element.children[0]
      });
      return;
    }
    element.style.overflow = "hidden";
    addClass(element, "km-scroll-wrapper");
    const scrollContainer = convertToHtml('<div class="km-scroll-container"/>');
    wrapInner(element, scrollContainer);
    prepend(scrollHeader, element);
    const inner = element.children[1], tapCapture = new TapCapture(element), movable = new Movable(inner), dimensions = new PaneDimensions({
      element: inner,
      container: element,
      forcedEnabled: this.options.zoom
    }), avoidScrolling = this.options.avoidScrolling, userEvents = new UserEvents(element, {
      touchAction: "none",
      allowSelection: true,
      preventDragEvent: true,
      captureUpIfMoved: true,
      multiTouch: this.options.zoom,
      supportDoubleTap: this.options.supportDoubleTap,
      start: (e) => {
        dimensions.refresh();
        const velocityX = abs(e.x.velocity), velocityY = abs(e.y.velocity), horizontalSwipe = velocityX * 2 >= velocityY, originatedFromFixedContainer = this.fixedContainer.contains(e.event.target), verticalSwipe = velocityY * 2 >= velocityX;
        if (!originatedFromFixedContainer && !avoidScrolling(e) && this.enabled && (dimensions.x.enabled && horizontalSwipe || dimensions.y.enabled && verticalSwipe)) {
          userEvents.capture();
        } else {
          userEvents.cancel();
        }
      }
    }), pane = new Pane({
      movable,
      dimensions,
      userEvents,
      elastic: this.options.elastic
    }), zoomSnapBack = new ZoomSnapBack({
      movable,
      dimensions,
      userEvents,
      tapCapture
    }), animatedScroller = new AnimatedScroller({
      moveTo: (coordinates) => {
        this.scrollTo(coordinates.x, coordinates.y);
      }
    });
    movable.bind(CHANGE2, () => {
      this.scrollTop = -movable.y;
      this.scrollLeft = -movable.x;
      if (this._skipScrollEvent) {
        return;
      }
      this.trigger(SCROLL, {
        scrollTop: this.scrollTop,
        scrollLeft: this.scrollLeft
      });
    });
    if (this.options.mousewheelScrolling) {
      this._wheelScrollHandler = this._wheelScroll.bind(this);
      on(element, "wheel", this._wheelScrollHandler);
    }
    extend2(this, {
      movable,
      dimensions,
      zoomSnapBack,
      animatedScroller,
      userEvents,
      pane,
      tapCapture,
      pulled: false,
      enabled: true,
      scrollElement: inner,
      scrollTop: 0,
      scrollLeft: 0,
      fixedContainer: element.children[0]
    });
    this._initAxis("x");
    this._initAxis("y");
    this._wheelEnd = () => {
      this._wheel = false;
      this.userEvents.end(0, this._wheelY);
    };
    dimensions.refresh();
    if (this.options.pullToRefresh) {
      this._initPullToRefresh();
    }
    this.bind(this.events, this.options);
  }
  _initOptions(options) {
    this.options = deepExtend({}, this.options, defaultScrollerOptions, options);
  }
  _wheelScroll(e) {
    if (e.ctrlKey) {
      return;
    }
    if (!this._wheel) {
      this._wheel = true;
      this._wheelY = 0;
      this.userEvents.press(0, this._wheelY);
    }
    clearTimeout(this._wheelTimeout);
    this._wheelTimeout = setTimeout(() => this._wheelEnd(), 50);
    const delta = wheelDeltaY(e);
    if (delta) {
      this._wheelY += delta;
      this.userEvents.move(0, this._wheelY);
    }
    e.preventDefault();
  }
  makeVirtual() {
    this.dimensions.y.makeVirtual();
  }
  virtualSize(min, max) {
    this.dimensions.y.virtualSize(min, max);
  }
  height() {
    return this.dimensions.y.size;
  }
  scrollHeight() {
    return this.scrollElement.scrollHeight;
  }
  scrollWidth() {
    return this.scrollElement.scrollWidth;
  }
  _resize() {
    if (!this._native) {
      this.contentResized();
    }
  }
  setOptions(options) {
    this._initOptions(options);
    if (this.xScrollBar) {
      this.xScrollBar.setOptions(this.options);
    }
    if (this.yScrollBar) {
      this.yScrollBar.setOptions(this.options);
    }
    if (options.pullToRefresh) {
      this._initPullToRefresh();
    }
  }
  reset() {
    if (this._native) {
      this.scrollElement.scrollTop(0);
    } else {
      this.movable.moveTo({
        x: 0,
        y: 0
      });
      this._scale(1);
    }
  }
  contentResized() {
    this.dimensions.refresh();
    if (this.pane.x.outOfBounds()) {
      this.movable.moveAxis("x", this.dimensions.x.min);
    }
    if (this.pane.y.outOfBounds()) {
      this.movable.moveAxis("y", this.dimensions.y.min);
    }
  }
  zoomOut() {
    const dimensions = this.dimensions;
    dimensions.refresh();
    this._scale(dimensions.fitScale);
    this.movable.moveTo(dimensions.centerCoordinates());
  }
  enable() {
    this.enabled = true;
  }
  disable() {
    this.enabled = false;
  }
  scrollTo(x, y, silent = false) {
    if (this._native) {
      this.scrollElement.scrollLeft(abs(x));
      this.scrollElement.scrollTop(abs(y));
    } else {
      this.dimensions.refresh();
      if (silent) {
        this._skipScrollEvent = true;
      }
      this.movable.moveTo({
        x,
        y
      });
      if (silent) {
        this._skipScrollEvent = false;
      }
    }
  }
  animatedScrollTo(x, y, callback) {
    let from, to;
    if (this._native) {
      this.scrollTo(x, y);
    } else {
      from = {
        x: this.movable.x,
        y: this.movable.y
      };
      to = {
        x,
        y
      };
      this.animatedScroller.setCoordinates(from, to);
      this.animatedScroller.setCallback(callback);
      this.animatedScroller.start();
    }
  }
  // kept for API compatibility, not used
  pullHandled() {
  }
  destroy() {
    const element = this.element;
    off(element, "wheel", this._wheelScrollHandler);
    if (this.userEvents) {
      this.userEvents.destroy();
    }
    if (this.tapCapture) {
      this.tapCapture.destroy();
    }
    if (this.xScrollBar) {
      this.xScrollBar.destroy();
    }
    if (this.yScrollBar) {
      this.yScrollBar.destroy();
    }
  }
  _scale(scale) {
    this.dimensions.rescale(scale);
    this.movable.scaleTo(scale);
  }
  _initPullToRefresh() {
  }
  // kept for API compatibility, not used
  _dragEnd() {
  }
  // kept for API compatibility, not used
  _paneChange() {
  }
  _initAxis(axis) {
    const movable = this.movable, dimension = this.dimensions[axis], tapCapture = this.tapCapture, paneAxis = this.pane[axis], scrollBar = new ScrollBar({
      axis,
      movable,
      dimension,
      container: this.element,
      showScrollbars: this.options.showScrollbars,
      autoHideScrollbars: this.options.autoHideScrollbars
    });
    if (axis === "x") {
      this.xScrollBar = scrollBar;
    } else {
      this.yScrollBar = scrollBar;
    }
    dimension.bind(CHANGE2, () => {
      scrollBar.refresh();
    });
    paneAxis.bind(CHANGE2, () => {
      scrollBar.show();
    });
    this[axis + "inertia"] = new DragInertia({
      axis,
      paneAxis,
      movable,
      tapCapture,
      userEvents: this.userEvents,
      dimension,
      elastic: this.options.elastic,
      friction: this.options.friction || FRICTION2,
      velocityMultiplier: this.options.velocityMultiplier || VELOCITY_MULTIPLIER2,
      end: () => {
        scrollBar.hide();
        this.trigger("scrollEnd", {
          axis,
          scrollTop: this.scrollTop,
          scrollLeft: this.scrollLeft
        });
      }
    });
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/utils/macOS.js
function macOS() {
  var _a;
  return /Macintosh|iPhone|iPad/i.test(((_a = window === null || window === void 0 ? void 0 : window.navigator) === null || _a === void 0 ? void 0 : _a.userAgent) || "");
}

// node_modules/@progress/kendo-diagram-common/dist/es/services/tools/ScrollerTool.js
var DEFAULT_EMPTY_BOUNDS = new Rect(-500, -500, 1e3, 1e3);
var MIN_PADDING = 1e3;
var ScrollerTool = class extends EmptyTool {
  constructor(toolService) {
    super(toolService);
    this.useMiddleButton = true;
    this._init();
  }
  _init() {
    const diagram = this.toolService.diagram, canvas = diagram.canvas;
    const friction = diagram._mobileOS() ? FRICTION_MOBILE : FRICTION;
    const pannable = diagram.options.pannable;
    const scroller = diagram.scroller = this.scroller = new Scroller(diagram.scrollable, {
      friction,
      velocityMultiplier: VELOCITY_MULTIPLIER,
      mousewheelScrolling: false,
      zoom: false,
      elastic: false,
      scroll: this._move.bind(this),
      showScrollbars: pannable && pannable.showScrollbars,
      autoHideScrollbars: pannable && pannable.autoHideScrollbars
    });
    if (canvas.translate) {
      this.movableCanvas = new Movable(canvas.element);
    }
    this._updateVirtualSize();
    diagram.bind(ZOOM_END, (e) => {
      scroller.dimensions.rescale(e.zoom);
      this._scheduleVirtualSizeUpdate();
      const pan = diagram.pan().times(-1);
      scroller.scrollTo(pan.x, pan.y, true);
    });
    diagram.bind(CHANGE, () => {
      this._scheduleVirtualSizeUpdate();
    });
    diagram.bind(DRAG, () => {
      this._scheduleVirtualSizeUpdate();
    });
    diagram.bind(DRAG_END, () => {
      this._scheduleVirtualSizeUpdate();
    });
    scroller.disable();
  }
  updateOptions() {
    const diagram = this.toolService.diagram;
    const pannable = diagram.options.pannable;
    if (this.scroller && pannable) {
      this.scroller.setOptions({
        showScrollbars: pannable.showScrollbars,
        autoHideScrollbars: pannable.autoHideScrollbars
      });
      this._updateVirtualSize();
    }
  }
  _updateVirtualSize() {
    const diagram = this.toolService.diagram;
    const scroller = this.scroller;
    const zoom = diagram._zoom || 1;
    const contentBounds = this._getContentBounds();
    const viewport = diagram.viewport();
    const padding = Math.max(viewport.width, viewport.height, MIN_PADDING);
    const minX = contentBounds.x * zoom - padding;
    const maxX = (contentBounds.x + contentBounds.width) * zoom + padding;
    const minY = contentBounds.y * zoom - padding;
    const maxY = (contentBounds.y + contentBounds.height) * zoom + padding;
    const virtualScroll = function(dimension, computedMin, computedMax) {
      dimension.makeVirtual();
      dimension.virtualSize(computedMin, computedMax);
    };
    virtualScroll(scroller.dimensions.x, minX, maxX);
    virtualScroll(scroller.dimensions.y, minY, maxY);
  }
  _getContentBounds() {
    const diagram = this.toolService.diagram;
    if (diagram.shapes.length === 0 && diagram.connections.length === 0) {
      return DEFAULT_EMPTY_BOUNDS;
    }
    let rect = diagram.boundingBox(diagram.shapes);
    for (let i = 0; i < diagram.connections.length; i++) {
      const connBounds = diagram.connections[i].bounds();
      if (connBounds) {
        rect = rect.isEmpty() ? connBounds.clone() : rect.union(connBounds);
      }
    }
    if (rect.isEmpty()) {
      return DEFAULT_EMPTY_BOUNDS;
    }
    return rect;
  }
  _scheduleVirtualSizeUpdate() {
    if (this._virtualSizeUpdateScheduled) {
      return;
    }
    this._virtualSizeUpdateScheduled = true;
    requestAnimationFrame(() => {
      this._updateVirtualSize();
      this._virtualSizeUpdateScheduled = false;
    });
  }
  tryActivate(_p, meta) {
    const toolService = this.toolService;
    const options = toolService.diagram.options.pannable;
    const macCmd = meta.metaKey && macOS();
    let enabled = meta.ctrlKey || macCmd;
    if (meta.middleButton) {
      enabled = true;
    } else if (defined(options.key)) {
      if (!options.key || options.key === "none") {
        enabled = noMeta(meta) && !defined(toolService.hoveredItem);
      } else {
        enabled = meta[options.key + "Key"];
        enabled = enabled || options.key === "ctrl" && macCmd;
      }
    }
    return options !== false && enabled && !defined(toolService.hoveredAdorner) && !defined(toolService._hoveredConnector);
  }
  start(_p, meta) {
    this._isMiddleButtonPan = !!(meta && meta.middleButton);
    if (!this._isMiddleButtonPan) {
      this.scroller.enable();
    }
  }
  move(_p, _meta, nativeEvent) {
    if (this._isMiddleButtonPan && nativeEvent) {
      const diagram = this.toolService.diagram;
      const dx = nativeEvent.movementX || 0;
      const dy = nativeEvent.movementY || 0;
      if (dx !== 0 || dy !== 0) {
        const currentPan = diagram.pan();
        diagram.pan(new Point(currentPan.x - dx, currentPan.y - dy));
      }
    }
  }
  // For non-middle-button pan, the scroller handles scrolling internally. Check _move
  _move(args) {
    const diagram = this.toolService.diagram, canvas = diagram.canvas;
    let scrollPos = new Point(args.scrollLeft, args.scrollTop);
    if (canvas.translate) {
      diagram._storePan(scrollPos.times(-1));
      this.movableCanvas.moveTo(scrollPos);
      canvas.translate(scrollPos.x, scrollPos.y);
    } else {
      scrollPos = scrollPos.plus(diagram._pan.times(-1));
    }
    diagram.trigger(PAN, {
      pan: scrollPos
    });
  }
  end() {
    if (!this._isMiddleButtonPan) {
      this.scroller.disable();
    }
    this._isMiddleButtonPan = false;
  }
  getCursor() {
    return Cursors.grabbing;
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/services/tools/SelectionTool.js
var SelectionTool = class {
  constructor(toolService) {
    this.toolService = toolService;
  }
  tryActivate(_p, meta) {
    const toolService = this.toolService;
    const selectable = toolService.diagram.options.selectable;
    let enabled = selectable && selectable.multiple !== false;
    if (enabled) {
      if (selectable.key && selectable.key !== "none") {
        enabled = meta[selectable.key + "Key"];
      } else {
        enabled = noMeta(meta);
      }
    }
    return enabled && !defined(toolService.hoveredItem) && !defined(toolService.hoveredAdorner);
  }
  start(p) {
    const diagram = this.toolService.diagram;
    diagram.deselect();
    diagram.selector.start(p);
  }
  move(p) {
    const diagram = this.toolService.diagram;
    diagram.selector.move(p);
  }
  end(_p, meta) {
    const diagram = this.toolService.diagram, hoveredItem = this.toolService.hoveredItem;
    const rect = diagram.selector.bounds();
    if ((!hoveredItem || !hoveredItem.isSelected) && !meta.ctrlKey) {
      diagram.deselect();
    }
    if (!rect.isEmpty()) {
      diagram.selectArea(rect);
    }
    diagram.selector.end();
  }
  getCursor() {
    return Cursors.arrow;
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/services/tools/testKey.js
function testKey(key, str) {
  return str.charCodeAt(0) === key || str.toUpperCase().charCodeAt(0) === key;
}

// node_modules/@progress/kendo-diagram-common/dist/es/services/tools/ConnectionResizeTool.js
var ConnectionResizeTool = class {
  constructor(toolService) {
    this.toolService = toolService;
    this.type = "ConnectionResizeTool";
  }
  tryActivate(_p, meta) {
    const toolService = this.toolService;
    const item = toolService.hoveredItem;
    const editable = item && item.pointsEditable && item.pointsEditable();
    const isActive = editable !== false && item && item.path && item.isSelected && item.resizeAdorner && item.resizeAdorner._hitTest(_p) !== null && !meta.ctrlKey;
    if (isActive) {
      this._c = item;
      this.handle = item.resizeAdorner._hitTest(_p);
    }
    return !!isActive;
  }
  start(point, meta, nativeEvent) {
    const connection = this._c;
    const adorner = connection.resizeAdorner;
    const canDragResult = canDrag(connection);
    const triggerResult = this.toolService.diagram.trigger(DRAG_START, {
      shapes: [],
      connections: [connection],
      point,
      meta,
      nativeEvent
    });
    const finalCondition = canDragResult && adorner && this.handle && !triggerResult;
    if (finalCondition) {
      adorner.start(point);
    } else {
      this.toolService.startPoint = point;
      this.toolService.end(point, meta, nativeEvent);
    }
  }
  move(point, meta, nativeEvent) {
    const adorner = this._c.resizeAdorner;
    if (canDrag(this._c) && adorner && this.handle) {
      adorner.move(this.handle, point);
      this.toolService.diagram.trigger(DRAG, {
        shapes: [],
        connections: [this._c],
        point,
        meta,
        nativeEvent
      });
      return true;
    }
  }
  end(point, meta, nativeEvent) {
    const connection = this._c;
    const adorner = connection.resizeAdorner;
    const toolService = this.toolService;
    const diagram = toolService.diagram;
    if (adorner) {
      if (canDrag(connection)) {
        const unit = adorner.stop(point);
        if (unit && !diagram.trigger(DRAG_END, {
          shapes: [],
          connections: [connection],
          point,
          meta,
          nativeEvent
        })) {
          diagram.undoRedoService.add(unit, false);
          connection.updateModel();
          diagram._syncConnectionChanges();
        } else if (unit) {
          unit.undo();
        } else {
          adorner.cancel();
        }
      }
    }
  }
  getCursor(_point) {
    const connection = this._c;
    if (connection && connection.resizeAdorner && this.handle) {
      return connection.resizeAdorner._getCursor(this.handle.point);
    }
    return Cursors.move;
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/services/ConnectionEditUnit.js
var ConnectionEditUnit = class {
  constructor(item, redoSource, redoTarget) {
    this.item = item;
    this._redoSource = redoSource;
    this._redoTarget = redoTarget;
    if (defined(redoSource)) {
      this._undoSource = item.source();
    }
    if (defined(redoTarget)) {
      this._undoTarget = item.target();
    }
    this.title = ConnectionEditing;
  }
  undo() {
    if (this._undoSource !== void 0) {
      this.item._updateConnector(this._undoSource, SOURCE);
    }
    if (this._undoTarget !== void 0) {
      this.item._updateConnector(this._undoTarget, TARGET);
    }
    this.item.updateModel();
  }
  redo() {
    if (this._redoSource !== void 0) {
      this.item._updateConnector(this._redoSource, SOURCE);
    }
    if (this._redoTarget !== void 0) {
      this.item._updateConnector(this._redoTarget, TARGET);
    }
    this.item.updateModel();
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/dom/Connection.js
var defaultOptions22 = {
  hover: {
    stroke: {}
  },
  startCap: NONE,
  endCap: NONE,
  cornerRadius: 0,
  anchorOffset: 20,
  points: [],
  selectable: true,
  fromConnector: AUTO,
  toConnector: AUTO
};
var connectionTextOptions = (options) => {
  return __spreadProps(__spreadValues({}, options), {
    padding: void 0,
    margin: options.margin === void 0 ? 0 : options.margin,
    textPadding: options.padding,
    background: options.position === INLINE ? options.background || options.bgColor : options.background,
    bgColor: void 0
  });
};
var Connection = class _Connection extends DiagramElement {
  /**
   * Creates a new Connection instance.
   * @param from The source endpoint (Shape, Connector, or Point)
   * @param to The target endpoint (Shape, Connector, or Point)
   * @param options Configuration options for the connection
   */
  constructor(from, to, options = {}) {
    options = deepExtend({}, defaultOptions22, options);
    super(options);
    this.name = CONNECTION;
    this.previewState = {
      lastSide: null
    };
    this.routingMode = "auto";
    this.updateOptionsFromModel();
    this._initRouter();
    this.path = new Polyline(this.options);
    this.path.fill(TRANSPARENT);
    this.visual.append(this.path);
    this._sourcePoint = this._targetPoint = new Point();
    this._setSource(from);
    this._setTarget(to);
    this.content(this.options.content);
    this.definers = [];
    if (options.points) {
      this.points(options.points);
    }
    if (options.locks) {
      this.locks = options.locks.map((lock) => __spreadValues({}, lock));
    } else {
      this.locks = [];
    }
  }
  /** @hidden */
  _getCursor(point) {
    if (this.resizeAdorner) {
      const resizeCursor = this.resizeAdorner._getCursor(point);
      if (resizeCursor !== Cursors.select) {
        return resizeCursor;
      }
    }
    if (this.adorner) {
      return this.adorner._getCursor(point);
    }
    return this.options.cursor || Cursors.select;
  }
  /** @hidden */
  _setOptionsFromModel(model) {
    this.updateOptionsFromModel(model || this.dataItem);
  }
  /**
   * Updates the connection options from the model data.
   * @param model The model data to extract options from
   */
  updateOptionsFromModel(model) {
    if (this.diagram && this.diagram._isEditable) {
      const dataMap = this.diagram._dataMap;
      const options = filterConnectionDataItem(model || this.dataItem);
      if (model) {
        if (defined(options.from)) {
          let from = dataMap[options.from];
          if (from && defined(options.fromConnector)) {
            from = from.getConnector(options.fromConnector);
          }
          this.source(from);
        } else if (defined(options.fromX) && defined(options.fromY)) {
          this.source(new Point(options.fromX, options.fromY));
        }
        if (defined(options.to)) {
          let to = dataMap[options.to];
          if (to && defined(options.toConnector)) {
            to = to.getConnector(options.toConnector);
          }
          this.target(to);
        } else if (defined(options.toX) && defined(options.toY)) {
          this.target(new Point(options.toX, options.toY));
        }
        if (defined(options.type) && this.type() !== options.type) {
          this.points([]);
          this.type(options.type);
        }
        this.dataItem = model;
        this._template();
        this.redraw(this.options);
      } else {
        this.options = deepExtend({}, options, this.options);
      }
    }
  }
  /**
   * Updates the connection's model data and optionally synchronizes changes.
   * @param syncChanges Whether to synchronize changes immediately
   */
  updateModel(syncChanges) {
    if (this.diagram && this.diagram._isEditable) {
      this.diagram.updateConnectionModel(this, syncChanges);
    }
  }
  /**
   * Gets the Point where the source of the connection resides.
   * If the endpoint is Auto-connector the location of the resolved connector will be returned.
   * If the endpoint is floating the location of the endpoint is returned.
   * @returns The source point of the connection
   */
  sourcePoint() {
    return this._resolvedSourceConnector ? this._resolvedSourceConnector.positionWithoutOffset() : this._sourcePoint;
  }
  /** @hidden */
  _setSource(source) {
    const shapeSource = source instanceof Shape;
    const defaultConnector = this.options.fromConnector || AUTO;
    let dataItem;
    if (shapeSource && !source.getConnector(defaultConnector)) {
      return;
    }
    if (source !== void 0) {
      this.from = source;
    }
    this._removeFromSourceConnector();
    if (source === null) {
      if (this.sourceConnector) {
        this._sourcePoint = (this._resolvedSourceConnector || this.sourceConnector).positionWithoutOffset();
        this._clearSourceConnector();
        this._setFromOptions(null, this._sourcePoint);
      }
    } else if (source instanceof Connector) {
      dataItem = source.shape.dataItem;
      if (dataItem) {
        this._setFromOptions(dataItem.id);
      }
      this.sourceConnector = source;
      this.sourceConnector.connections.push(this);
    } else if (source instanceof Point) {
      this._setFromOptions(null, source);
      this._sourcePoint = source;
      if (this.sourceConnector) {
        this._clearSourceConnector();
      }
    } else if (shapeSource) {
      dataItem = source.dataItem;
      if (dataItem) {
        this._setFromOptions(dataItem.id);
      }
      this.sourceConnector = source.getConnector(defaultConnector);
      this.sourceConnector.connections.push(this);
    }
  }
  /**
   * Gets or sets the source endpoint of the connection.
   * @param source The source endpoint (Shape, Connector, or Point) to set. If not provided, returns the current source.
   * @param undoable Whether this operation should be undoable
   * @returns The current source when used as a getter
   */
  source(source, undoable) {
    if (isDefined(source)) {
      if (undoable && this.diagram) {
        this.diagram.undoRedoService.addCompositeItem(new ConnectionEditUnit(this, source));
      }
      this._setSource(source);
      this.refresh();
    }
    return this.sourceConnector ? this.sourceConnector : this._sourcePoint;
  }
  /** @hidden */
  _setFromOptions(from, fromPoint) {
    this.options.from = from;
    if (fromPoint) {
      this.options.fromX = fromPoint.x;
      this.options.fromY = fromPoint.y;
    } else {
      this.options.fromX = null;
      this.options.fromY = null;
    }
  }
  /**
   * Gets or sets the PathDefiner of the sourcePoint.
   * The left part of this definer is always null since it defines the source tangent.
   * @param value The PathDefiner to set. If not provided, returns the current source definer.
   * @returns The source definer when used as a getter
   */
  sourceDefiner(value) {
    if (value) {
      if (value instanceof PathDefiner) {
        value.left = null;
        this._sourceDefiner = value;
        this.source(value.point);
      } else {
        throw new Error("The sourceDefiner needs to be a PathDefiner.");
      }
    } else {
      if (!this._sourceDefiner) {
        this._sourceDefiner = new PathDefiner(this.sourcePoint(), null, null);
      }
      return this._sourceDefiner;
    }
  }
  /**
   * Gets the Point where the target of the connection resides.
   * @returns The target point of the connection
   */
  targetPoint() {
    return this._resolvedTargetConnector ? this._resolvedTargetConnector.positionWithoutOffset() : this._targetPoint;
  }
  /** @hidden */
  _setTarget(target) {
    const shapeTarget = target instanceof Shape;
    const defaultConnector = this.options.toConnector || AUTO;
    let dataItem;
    if (shapeTarget && !target.getConnector(defaultConnector)) {
      return;
    }
    if (target !== void 0) {
      this.to = target;
    }
    this._removeFromTargetConnector();
    if (target === null) {
      if (this.targetConnector) {
        this._targetPoint = (this._resolvedTargetConnector || this.targetConnector).positionWithoutOffset();
        this._clearTargetConnector();
        this._setToOptions(null, this._targetPoint);
      }
    } else if (target instanceof Connector) {
      dataItem = target.shape.dataItem;
      if (dataItem) {
        this._setToOptions(dataItem.id);
      }
      this.targetConnector = target;
      this.targetConnector.connections.push(this);
    } else if (target instanceof Point) {
      this._setToOptions(null, target);
      this._targetPoint = target;
      if (this.targetConnector) {
        this._clearTargetConnector();
      }
    } else if (shapeTarget) {
      dataItem = target.dataItem;
      if (dataItem) {
        this._setToOptions(dataItem.id);
      }
      this.targetConnector = target.getConnector(defaultConnector);
      this.targetConnector.connections.push(this);
    }
  }
  /**
   * Gets or sets the target endpoint of the connection.
   * @param target The target endpoint (Shape, Connector, or Point) to set. If not provided, returns the current target.
   * @param undoable Whether this operation should be undoable
   * @returns The current target when used as a getter
   */
  target(target, undoable) {
    if (isDefined(target)) {
      if (undoable && this.diagram) {
        this.diagram.undoRedoService.addCompositeItem(new ConnectionEditUnit(this, void 0, target));
      }
      this._setTarget(target);
      this.refresh();
    }
    return this.targetConnector ? this.targetConnector : this._targetPoint;
  }
  /** @hidden */
  _setToOptions(to, toPoint) {
    this.options.to = to;
    if (toPoint) {
      this.options.toX = toPoint.x;
      this.options.toY = toPoint.y;
    } else {
      this.options.toX = null;
      this.options.toY = null;
    }
  }
  /**
   * Gets or sets the PathDefiner of the targetPoint.
   * The right part of this definer is always null since it defines the target tangent.
   * @param value The PathDefiner to set. If not provided, returns the current target definer.
   * @returns The target definer when used as a getter
   */
  targetDefiner(value) {
    if (value) {
      if (value instanceof PathDefiner) {
        value.right = null;
        this._targetDefiner = value;
        this.target(value.point);
      } else {
        throw new Error("The sourceDefiner needs to be a PathDefiner.");
      }
    } else {
      if (!this._targetDefiner) {
        this._targetDefiner = new PathDefiner(this.targetPoint(), null, null);
      }
      return this._targetDefiner;
    }
  }
  /** @hidden */
  _updateConnectors() {
    this._updateConnector(this.source(), SOURCE);
    this._updateConnector(this.target(), TARGET);
  }
  /** @hidden */
  _updateConnector(instance, name) {
    const diagram = this.diagram;
    if (instance instanceof Connector && !diagram.getShapeById(instance.shape.id)) {
      const dataItem = instance.shape.dataItem;
      const connectorName = instance.options.name;
      const setNewTarget = () => {
        const shape = diagram._dataMap[dataItem.id];
        instance = shape.getConnector(connectorName);
        this[name](instance, false);
        this.updateModel();
      };
      if (diagram._dataMap[dataItem.id]) {
        setNewTarget();
      } else {
        const inactiveItem = diagram._inactiveShapeItems.getByUid(dataItem.uid);
        if (inactiveItem) {
          diagram._deferredConnectionUpdates.push(inactiveItem.onActivate(setNewTarget));
        }
      }
    } else {
      this[name](instance, false);
    }
  }
  /**
   * Gets or sets the content of the connection.
   * @param content The content to set. If not provided, returns the current content.
   * @returns The current content when used as a getter
   */
  content(content) {
    const result = this._content(content);
    if (defined(content)) {
      if (this._contentVisual) {
        this._contentVisual._measured = false;
      }
      this._alignContent();
    }
    return result;
  }
  /** @hidden */
  _createContentVisual(options) {
    let visual;
    const hasVisual = options.visual;
    const hasTemplate = options.template;
    const templateOptions = extend({}, options, {
      dataItem: this.dataItem || options.dataItem
    });
    const template = getTemplate(templateOptions);
    if (hasVisual) {
      const visualResult = isFunction(template) ? template.call(this, templateOptions) : null;
      visual = visualResult;
    } else if (hasTemplate) {
      const templateResult = isFunction(template) ? template.call(this, templateOptions.dataItem || {}) : null;
      if (isFunction(templateResult)) {
        visual = templateResult;
      } else if (isString(templateResult)) {
        const textBlockOptions = __spreadProps(__spreadValues({}, templateOptions), {
          text: templateResult
        });
        visual = new (getTextElementType(textBlockOptions))(connectionTextOptions(textBlockOptions));
      }
    } else if (options.text || options.blocks) {
      visual = new (getTextElementType(options))(connectionTextOptions(options));
    }
    if (visual) {
      this._contentVisual = visual;
      visual._includeInBBox = false;
      this.visual.append(visual);
    }
    return visual;
  }
  /** @hidden */
  _updateContentVisual(options) {
    if (isFunction(options.visual)) {
      this.visual.remove(this._contentVisual);
      this._createContentVisual(options);
    } else {
      this._contentVisual.redraw(connectionTextOptions(options));
    }
  }
  /** @hidden */
  _alignContent() {
    if (this._contentVisual) {
      const contentOptions = this.options.content || {};
      const offset = contentOptions.offset !== void 0 ? contentOptions.offset : CONNECTION_CONTENT_OFFSET;
      const points = this.allPoints();
      let endIdx = Math.floor(points.length / 2);
      let startIdx = endIdx - 1;
      while (startIdx > 0 && points[startIdx].equals(points[endIdx])) {
        startIdx--;
        endIdx++;
      }
      let endPoint = points[endIdx];
      let startPoint = points[startIdx];
      const boundingBox = this._contentVisual._measure();
      let width = boundingBox.width;
      let height = boundingBox.height;
      let alignToPath = points.length % 2 === 0;
      const distance = startPoint.distanceTo(endPoint);
      const position = contentOptions.position || {};
      const verticalPosition = position.vertical || TOP.toLowerCase();
      const horizontalPosition = position.horizontal || RIGHT.toLowerCase();
      const isInline = position === INLINE;
      let originOffsetX = 0;
      let originOffsetY = 0;
      if (this._contentVisual._textOnlyRect) {
        const textRect2 = this._contentVisual._textOnlyRect;
        width = textRect2.size.width;
        height = textRect2.size.height;
        if (isInline || contentOptions.border) {
          originOffsetX = textRect2.origin.x;
          originOffsetY = textRect2.origin.y;
        }
      }
      if (alignToPath && points.length > 2 && distance > 0 && (startPoint.y === endPoint.y && distance < width || startPoint.x === endPoint.x && distance < height)) {
        alignToPath = false;
      }
      const left = LEFT.toLowerCase();
      const bottom = BOTTOM.toLowerCase();
      let point;
      if (alignToPath) {
        const angle = drawing_exports.util.deg(Math.atan2(endPoint.y - startPoint.y, endPoint.x - startPoint.x));
        point = new Point((endPoint.x - startPoint.x) / 2 + startPoint.x, (endPoint.y - startPoint.y) / 2 + startPoint.y);
        if (isInline) {
          point.x -= width / 2 + originOffsetX;
          point.y -= height / 2 + originOffsetY;
        } else if (Math.abs(angle) === 90) {
          if (horizontalPosition === left) {
            point.x -= width + offset;
          } else {
            point.x += offset;
          }
          point.y -= height / 2;
        } else if (angle % 180 === 0) {
          point.x -= width / 2;
          if (verticalPosition === bottom) {
            point.y += offset;
          } else {
            point.y -= height + offset;
          }
        } else if (angle < -90 || 0 < angle && angle < 90) {
          point.y -= height;
        } else if (angle < 0 || angle > 90) {
          point.x -= width;
          point.y -= height;
        }
      } else {
        const midIdx = Math.floor(points.length / 2);
        point = points[midIdx].clone();
        startPoint = points[midIdx - 1];
        endPoint = points[midIdx + 1];
        const isVertical = startPoint.x === point.x && endPoint.x === point.x;
        const isHorizontal = startPoint.y === point.y && endPoint.y === point.y;
        let offsetX, offsetY;
        if (isInline) {
          offsetX = -(width / 2 + originOffsetX);
          offsetY = -(height / 2 + originOffsetY);
        } else if (isVertical) {
          if (horizontalPosition === left) {
            offsetX = -boundingBox.width - offset;
          } else {
            offsetX = offset;
          }
          offsetY = -boundingBox.height / 2;
        } else if (isHorizontal) {
          offsetX = -boundingBox.width / 2;
          if (verticalPosition === bottom) {
            offsetY = offset;
          } else {
            offsetY = -boundingBox.height - offset;
          }
        } else {
          offsetX = startPoint.x <= point.x && endPoint.x <= point.x ? offset : -boundingBox.width - offset;
          offsetY = startPoint.y <= point.y && endPoint.y <= point.y ? offset : -boundingBox.height - offset;
        }
        point.x += offsetX;
        point.y += offsetY;
      }
      this._contentVisual.position(point);
    }
  }
  /**
   * Selects or deselects this connection.
   * @param value True to select, false to deselect the connection
   * @returns True if the selection state changed, false otherwise
   */
  select(value) {
    const diagram = this.diagram;
    let selected, deselected;
    if (this._canSelect()) {
      if (this.isSelected !== value) {
        this.isSelected = value;
        selected = [];
        deselected = [];
        if (this.isSelected) {
          this.adorner = new ConnectionEditAdorner(this, this.options.selection);
          diagram._adorn(this.adorner, true);
          const type = (this.options.type || "").toLowerCase();
          const ResizeAdorner = type === CASCADING ? CascadingConnectionResizeAdorner : PolylineConnectionResizeAdorner;
          const resizeOptions = this._resolveResizeOptions();
          this.resizeAdorner = new ResizeAdorner(this, resizeOptions);
          diagram._adorn(this.resizeAdorner, true);
          diagram._selectedItems.push(this);
          selected.push(this);
        } else {
          if (this.adorner) {
            diagram._adorn(this.adorner, false);
            this.adorner = void 0;
          }
          if (this.resizeAdorner) {
            diagram._adorn(this.resizeAdorner, false);
            this.resizeAdorner = void 0;
          }
          remove(diagram._selectedItems, this);
          deselected.push(this);
        }
        if (this.adorner) {
          this.adorner.refresh();
        }
        if (this.resizeAdorner) {
          this.resizeAdorner.refresh();
        }
        if (!diagram._internalSelection) {
          diagram._selectionChanged(selected, deselected);
        }
        return true;
      }
    }
  }
  /**
   * Gets or sets the bounds of this connection.
   * @param value A Rect object to set as bounds. If not provided, returns the current bounds.
   * @returns The bounds of the connection
   * @remarks This is automatically set in the refresh() method.
   */
  bounds(value) {
    if (value && !isString(value)) {
      this._bounds = value;
    } else {
      return this._bounds;
    }
  }
  /**
   * Gets or sets the connection type (see ConnectionType enumeration).
   * @param value A ConnectionType value to set. If not provided, returns the current type.
   * @returns The connection type
   */
  type(value) {
    const options = this.options;
    if (value) {
      if (value !== options.type) {
        options.type = value;
        this._initRouter();
        this.refresh();
      }
    } else {
      return options.type;
    }
  }
  /** @hidden */
  _initRouter() {
    const type = (this.options.type || "").toLowerCase();
    if (type === CASCADING) {
      this._router = new CascadingRouter(this);
    } else {
      this._router = new PolylineRouter(this);
    }
  }
  /**
   * Gets or sets the collection of intermediate points.
   * The 'allPoints()' property will return all the points.
   * The 'definers' property returns the definers of the intermediate points.
   * The 'sourceDefiner' and 'targetDefiner' return the definers of the endpoints.
   * @param value Array of Points or point-like objects to set as intermediate points. If not provided, returns the current points.
   * @returns Array of intermediate points when used as a getter
   */
  points(value) {
    if (value) {
      this.definers = [];
      for (let i = 0; i < value.length; i++) {
        const definition = value[i];
        if (definition instanceof Point) {
          this.definers.push(new PathDefiner(definition));
        } else if (Object.prototype.hasOwnProperty.call(definition, "x") && Object.prototype.hasOwnProperty.call(definition, "y")) {
          this.definers.push(new PathDefiner(new Point(definition.x, definition.y)));
        } else {
          throw new Error("A Connection point needs to be a Point or an object with x and y properties.");
        }
      }
    } else {
      const pts = [];
      if (isDefined(this.definers)) {
        for (let k = 0; k < this.definers.length; k++) {
          pts.push(this.definers[k].point);
        }
      }
      return pts;
    }
  }
  /**
   * Gets all the points of this connection. This is the combination of the sourcePoint, the points and the targetPoint.
   * @returns Array of all points including source, intermediate, and target points
   */
  allPoints() {
    const pts = [this.sourcePoint()];
    if (this.definers) {
      for (let k = 0; k < this.definers.length; k++) {
        pts.push(this.definers[k].point);
      }
    }
    pts.push(this.targetPoint());
    return pts;
  }
  /**
   * Refreshes the connection's visual representation.
   * Resolves connectors, refreshes the path, aligns content, and updates adorners.
   */
  refresh() {
    this._resolveConnectors();
    this._refreshPath();
    this._alignContent();
    if (this.adorner) {
      this.adorner.refresh();
    }
    if (this.resizeAdorner) {
      this.resizeAdorner.refresh();
    }
  }
  /** @hidden */
  _resolveConnectors(destination) {
    const self = destination || this;
    self._resolvedSourceConnector = void 0;
    self._resolvedTargetConnector = void 0;
    const source = this.source();
    const target = this.target();
    const sourceReferencePoint = target instanceof Point ? target : null;
    const targetReferencePoint = source instanceof Point ? source : null;
    if (source instanceof Connector) {
      const sourceConnectors = isAutoConnector(source) ? source.shape.connectors : [source];
      if (sourceReferencePoint && isAutoConnector(source)) {
        self._resolvedSourceConnector = closestConnector(sourceReferencePoint, sourceConnectors);
      } else if (!isAutoConnector(source)) {
        self._resolvedSourceConnector = source;
      }
    }
    if (target instanceof Connector) {
      const targetConnectors = isAutoConnector(target) ? target.shape.connectors : [target];
      if (targetReferencePoint && isAutoConnector(target)) {
        self._resolvedTargetConnector = closestConnector(targetReferencePoint, targetConnectors);
      } else if (!isAutoConnector(target)) {
        self._resolvedTargetConnector = target;
      }
    }
    if (!sourceReferencePoint && !targetReferencePoint && source instanceof Connector && target instanceof Connector) {
      const sourceConnectors = isAutoConnector(source) ? source.shape.connectors : [source];
      const targetConnectors = isAutoConnector(target) ? target.shape.connectors : [target];
      this._resolveAutoConnectors(sourceConnectors, targetConnectors, destination);
    }
  }
  /** @hidden */
  _resolveAutoConnectors(sourceConnectors, targetConnectors, destination) {
    const self = destination || this;
    if (this.pointsEditable() && (this.routingMode === "manual" || this._hasPolylineEditedPoints())) {
      this._resolveAutoConnectorsWithLocks(sourceConnectors, targetConnectors, destination);
      return;
    }
    let minNonConflict = MAXINT;
    let minDist = MAXINT;
    let minNonConflictSource, minNonConflictTarget;
    let sourcePoint, targetPoint;
    let minSource, minTarget;
    let sourceConnector, targetConnector;
    let sourceIdx, targetIdx;
    let dist2;
    for (sourceIdx = 0; sourceIdx < sourceConnectors.length; sourceIdx++) {
      sourceConnector = sourceConnectors[sourceIdx];
      if (!isAutoConnector(sourceConnector)) {
        sourcePoint = sourceConnector.positionWithoutOffset();
        for (targetIdx = 0; targetIdx < targetConnectors.length; targetIdx++) {
          targetConnector = targetConnectors[targetIdx];
          if (!isAutoConnector(targetConnector)) {
            targetPoint = targetConnector.positionWithoutOffset();
            dist2 = Math.round(sourcePoint.distanceTo(targetPoint));
            if (dist2 < minNonConflict && this.diagram && this._testRoutePoints(sourcePoint, targetPoint, sourceConnector, targetConnector)) {
              minNonConflict = dist2;
              minNonConflictSource = sourceConnector;
              minNonConflictTarget = targetConnector;
            }
            if (dist2 < minDist) {
              minSource = sourceConnector;
              minTarget = targetConnector;
              minDist = dist2;
            }
          }
        }
      }
    }
    if (minNonConflictSource) {
      minSource = minNonConflictSource;
      minTarget = minNonConflictTarget;
    }
    self._resolvedSourceConnector = minSource;
    self._resolvedTargetConnector = minTarget;
  }
  /** @hidden */
  _hasPolylineEditedPoints() {
    return this._router instanceof PolylineRouter && this.definers && this.definers.length > 0;
  }
  /** @hidden */
  _resolveAutoConnectorsWithLocks(sourceConnectors, targetConnectors, destination) {
    const self = destination || this;
    let minPathLength = MAXINT;
    let minNonConflictPathLength = MAXINT;
    let minSource, minTarget;
    let minNonConflictSource, minNonConflictTarget;
    for (let sourceIdx = 0; sourceIdx < sourceConnectors.length; sourceIdx++) {
      const sourceConnector = sourceConnectors[sourceIdx];
      if (isAutoConnector(sourceConnector)) continue;
      const sourcePoint = sourceConnector.positionWithoutOffset();
      for (let targetIdx = 0; targetIdx < targetConnectors.length; targetIdx++) {
        const targetConnector = targetConnectors[targetIdx];
        if (isAutoConnector(targetConnector)) continue;
        const targetPoint = targetConnector.positionWithoutOffset();
        const pathLength = this._calculateRouteLength(sourcePoint, targetPoint, sourceConnector, targetConnector);
        const hasNoConflict = this.diagram && this._testRoutePoints(sourcePoint, targetPoint, sourceConnector, targetConnector);
        if (hasNoConflict && pathLength < minNonConflictPathLength) {
          minNonConflictPathLength = pathLength;
          minNonConflictSource = sourceConnector;
          minNonConflictTarget = targetConnector;
        }
        if (pathLength < minPathLength) {
          minPathLength = pathLength;
          minSource = sourceConnector;
          minTarget = targetConnector;
        }
      }
    }
    if (minNonConflictSource) {
      self._resolvedSourceConnector = minNonConflictSource;
      self._resolvedTargetConnector = minNonConflictTarget;
    } else {
      self._resolvedSourceConnector = minSource;
      self._resolvedTargetConnector = minTarget;
    }
  }
  /** @hidden */
  _calculateRouteLength(sourcePoint, targetPoint, sourceConnector, targetConnector) {
    const router = this._router;
    if (router instanceof CascadingRouter) {
      const points = router.routePoints(sourcePoint, targetPoint, sourceConnector, targetConnector);
      const allPoints = [sourcePoint, ...points, targetPoint];
      let totalLength = 0;
      for (let i = 1; i < allPoints.length; i++) {
        totalLength += allPoints[i - 1].distanceTo(allPoints[i]);
      }
      return Math.round(totalLength);
    } else if (this._hasPolylineEditedPoints()) {
      const intermediatePoints = this.definers.map((d) => d.point);
      const allPoints = [sourcePoint, ...intermediatePoints, targetPoint];
      let totalLength = 0;
      for (let i = 1; i < allPoints.length; i++) {
        totalLength += allPoints[i - 1].distanceTo(allPoints[i]);
      }
      return Math.round(totalLength);
    }
    return Math.round(sourcePoint.distanceTo(targetPoint));
  }
  /** @hidden */
  _testRoutePoints(sourcePoint, targetPoint, sourceConnector, targetConnector) {
    const router = this._router;
    let passRoute = true;
    if (router instanceof CascadingRouter) {
      const points = router.routePoints(sourcePoint, targetPoint, sourceConnector, targetConnector), exclude = this._getRouteExclude(sourcePoint, targetPoint, sourceConnector.shape, targetConnector.shape);
      let start, end, rect;
      points.unshift(sourcePoint);
      points.push(targetPoint);
      for (let idx = 1; idx < points.length; idx++) {
        start = points[idx - 1];
        end = points[idx];
        rect = new Rect(Math.min(start.x, end.x), Math.min(start.y, end.y), Math.abs(start.x - end.x), Math.abs(start.y - end.y));
        if (rect.width > 0) {
          rect.x++;
          rect.width -= 2;
        }
        if (rect.height > 0) {
          rect.y++;
          rect.height -= 2;
        }
        if (!rect.isEmpty() && this.diagram._shapesQuadTree.hitTestRect(rect, exclude)) {
          passRoute = false;
          break;
        }
      }
    }
    return passRoute;
  }
  /** @hidden */
  _getRouteExclude(sourcePoint, targetPoint, sourceShape, targetShape) {
    const exclude = [];
    if (this._isPointInsideShape(sourcePoint, sourceShape)) {
      exclude.push(sourceShape);
    }
    if (this._isPointInsideShape(targetPoint, targetShape)) {
      exclude.push(targetShape);
    }
    return exclude;
  }
  /** @hidden */
  _isPointInsideShape(point, shape) {
    const bounds = shape.bounds(), angle = shape.rotate().angle, boundsX = bounds.x, boundsY = bounds.y;
    const rotatedPoint = point.clone().rotate(angle, bounds.center());
    const pointX = rotatedPoint.x;
    const pointY = rotatedPoint.y;
    return pointX > boundsX && pointX < boundsX + bounds.width && pointY > boundsY && pointY < boundsY + bounds.height;
  }
  /**
   * Redraws the connection with new options.
   * @param options The options to apply when redrawing the connection
   */
  redraw(options) {
    if (options) {
      this.options = deepExtend({}, this.options, options);
      const points = this.options.points;
      if (defined(points) && points.length > 0) {
        this.points(points);
        this._refreshPath();
      }
      if (options && options.content || options.text) {
        this.content(options.content);
      }
      this.path.redraw({
        fill: options.fill,
        stroke: options.stroke,
        startCap: options.startCap,
        endCap: options.endCap
      });
    }
  }
  /**
   * Returns a clone of this connection.
   * @returns A new Connection instance that is a copy of this connection
   */
  clone() {
    const json = this.serialize();
    if (this.diagram && this.diagram._isEditable && defined(this.dataItem)) {
      json.options.dataItem = this.diagram.options.cloneDataItem(this.dataItem);
    }
    return new _Connection(this.from, this.to, json.options);
  }
  /**
   * Returns a serialized connection in JSON format. Consists of the options and the dataItem.
   * @returns Serialized connection object containing options, endpoints, and data
   */
  serialize() {
    const from = this.from.toJSON ? this.from.toJSON : this.from.toString(), to = this.to.toJSON ? this.to.toJSON : this.to.toString();
    const json = deepExtend({}, {
      options: this.options,
      from,
      to
    });
    if (defined(this.dataItem)) {
      json.dataItem = this.dataItem.toString();
    }
    json.options.points = this.points();
    if (this.locks && this.locks.length > 0) {
      json.options.locks = this.locks.map((lock) => __spreadValues({}, lock));
    }
    return json;
  }
  /**
   * @hidden
   *
   * Returns whether the given Point or Rect hits this connection.
   *
   * @param value
   * @returns {Connection}
   * @private
   */
  _hitTest(value) {
    if (this.visible()) {
      const p = new Point(value.x, value.y), from = this.sourcePoint(), to = this.targetPoint();
      if (value.isEmpty && !value.isEmpty() && value.contains(from) && value.contains(to)) {
        return this;
      }
      if (this._router.hitTest(p)) {
        return this;
      }
    }
  }
  /** @hidden */
  _hover(value) {
    let color = (this.options.stroke || {}).color;
    if (value && isDefined(this.options.hover.stroke.color)) {
      color = this.options.hover.stroke.color;
    }
    this.path.redraw({
      stroke: {
        color
      }
    });
  }
  /** @hidden */
  _refreshPath() {
    if (!defined(this.path)) {
      return;
    }
    this._drawPath();
    this.bounds(this._router.getBounds());
  }
  /** @hidden */
  _drawPath() {
    if (this._router) {
      this._router.route();
    }
    const source = this.sourcePoint();
    const target = this.targetPoint();
    const points = this.points();
    this.path.redraw({
      points: [source].concat(points, [target])
    });
  }
  /** @hidden */
  _clearSourceConnector() {
    this.sourceConnector = void 0;
    this._resolvedSourceConnector = void 0;
  }
  /** @hidden */
  _clearTargetConnector() {
    this.targetConnector = void 0;
    this._resolvedTargetConnector = void 0;
  }
  /** @hidden */
  _removeFromSourceConnector() {
    if (this.sourceConnector) {
      remove(this.sourceConnector.connections, this);
    }
  }
  /** @hidden */
  _removeFromTargetConnector() {
    if (this.targetConnector) {
      remove(this.targetConnector.connections, this);
    }
  }
  /**
   * Converts the connection to a JSON representation for serialization.
   * @returns Object containing the connection's endpoints information
   */
  toJSON() {
    let from, to, point;
    if (this.from && this.from.toJSON) {
      from = this.from.toJSON();
    } else {
      point = this._sourcePoint;
      from = {
        x: point.x,
        y: point.y
      };
    }
    if (this.to && this.to.toJSON) {
      to = this.to.toJSON();
    } else {
      point = this._targetPoint;
      to = {
        x: point.x,
        y: point.y
      };
    }
    return {
      from,
      to
    };
  }
  /** @hidden */
  focus() {
    this.path.drawingElement.options.set(CLASS_NAME, FOCUS_CLASS);
  }
  /** @hidden */
  blur() {
    this.path.drawingElement.options.set(CLASS_NAME, EMPTY);
  }
  /** @hidden */
  pointsEditable() {
    let editable = this.options.editable;
    if (editable && typeof editable !== "boolean") {
      editable = editable.points;
    }
    return editable !== false;
  }
  /** @hidden */
  _resolveResizeOptions() {
    var _a, _b, _c, _d;
    const currentPoints = (_a = this.options.editable) === null || _a === void 0 ? void 0 : _a.points;
    const defaultPoints = (_d = (_c = (_b = this.diagram) === null || _b === void 0 ? void 0 : _b.options.connectionDefaults) === null || _c === void 0 ? void 0 : _c.editable) === null || _d === void 0 ? void 0 : _d.points;
    if (currentPoints === true && !defaultPoints) {
      return this.diagram._theme.connectionDefaults.editable.points;
    }
    return currentPoints;
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/services/tools/ToolService.js
var round = drawing_exports.util.round;
function hitTestShapeConnectors(shape, point) {
  let connector, position, rect;
  for (let idx = 0; idx < shape.connectors.length; idx++) {
    connector = shape.connectors[idx];
    position = connector.position();
    rect = new Rect(position.x, position.y);
    rect.inflate(HIT_TEST_DISTANCE, HIT_TEST_DISTANCE);
    if (rect.contains(point)) {
      return connector;
    }
  }
}
var ToolService = class {
  /**
   * Creates a new ToolService instance.
   * @param diagram The diagram instance that this tool service will manage
   */
  constructor(diagram) {
    this.diagram = diagram;
    this.tools = [new ScrollerTool(this), new ConnectionResizeTool(this), new ConnectionEditTool(this), new ConnectionTool(this), new SelectionTool(this), new PointerTool(this)];
    this.activeTool = void 0;
  }
  /**
   * Starts a tool interaction at the specified point.
   * @param p The point where the interaction starts
   * @param meta Metadata about the interaction (e.g., keyboard modifiers)
   * @param nativeEvent The native DOM event that triggered this interaction
   * @returns Always returns true to indicate the event was handled
   */
  start(p, meta, nativeEvent) {
    meta = deepExtend({}, meta);
    if (this.activeTool) {
      this.activeTool.end(p, meta);
    }
    this._updateHoveredItem(p, meta, nativeEvent);
    this._activateTool(p, meta);
    if (!this.activeTool) {
      return false;
    }
    this.activeTool.start(p, meta, nativeEvent);
    this._updateCursor(p);
    this.diagram.focus();
    this.diagram.canvas.surface.suspendTracking();
    this.startPoint = p;
    return true;
  }
  /**
   * Handles mouse movement during tool interaction.
   * @param p The current mouse position
   * @param meta Metadata about the interaction (e.g., keyboard modifiers)
   * @param nativeEvent The native DOM event that triggered this movement
   * @returns Always returns true to indicate the event was handled
   */
  move(p, meta, nativeEvent) {
    meta = deepExtend({}, meta);
    let updateHovered = true;
    if (this.activeTool) {
      updateHovered = this.activeTool.move(p, meta, nativeEvent);
    }
    if (updateHovered) {
      this._updateHoveredItem(p, meta, nativeEvent);
    }
    this._updateCursor(p);
    return true;
  }
  /**
   * Ends the current tool interaction.
   * @param point The point where the interaction ends
   * @param meta Metadata about the interaction (e.g., keyboard modifiers)
   * @param nativeEvent The native DOM event that triggered the end of interaction
   * @returns Always returns true to indicate the event was handled
   */
  end(point, meta, nativeEvent) {
    meta = deepExtend({}, meta);
    if (this.activeTool) {
      this.activeTool.end(point, meta, nativeEvent);
    }
    this.diagram.canvas.surface.resumeTracking();
    this.activeTool = void 0;
    this._updateCursor(point);
    return true;
  }
  /**
   * Handles keyboard input for diagram operations.
   * Processes keyboard shortcuts for actions like select all, undo, redo, copy, paste, etc.
   * @param key The key code of the pressed key
   * @param meta Metadata about the key event (e.g., ctrl, shift, alt modifiers)
   * @returns True if the key event was handled, undefined otherwise
   */
  keyDown(key, meta) {
    const diagram = this.diagram;
    meta = deepExtend({
      ctrlKey: false,
      metaKey: false,
      altKey: false
    }, meta);
    if ((meta.ctrlKey || meta.metaKey) && !meta.altKey) {
      if (testKey(key, "a")) {
        diagram.selectAll();
        diagram._destroyToolBar();
        return true;
      } else if (testKey(key, "z")) {
        diagram.undo();
        diagram._destroyToolBar();
        return true;
      } else if (testKey(key, "y")) {
        diagram.redo();
        diagram._destroyToolBar();
        return true;
      } else if (testKey(key, "c")) {
        diagram.copy();
        diagram._destroyToolBar();
      } else if (testKey(key, "x")) {
        diagram.cut();
        diagram._destroyToolBar();
      } else if (testKey(key, "v")) {
        diagram.paste();
        diagram._destroyToolBar();
      } else if (testKey(key, "l")) {
        diagram.layout();
        diagram._destroyToolBar();
      } else if (testKey(key, "d")) {
        diagram._destroyToolBar();
        diagram.copy();
        diagram.paste();
      }
    } else if (key === 46 || key === 8) {
      const toRemove = this.diagram._triggerRemove(diagram.select());
      if (toRemove.length) {
        this.diagram.remove(toRemove, true);
        this.diagram._syncChanges();
        this.diagram._destroyToolBar();
      }
      return true;
    } else if (key === 27) {
      this._discardNewConnection();
      diagram.deselect();
      diagram._destroyToolBar();
      return true;
    }
  }
  /**
   * Handles mouse wheel events for diagram zooming.
   * @param p The point where the wheel event occurred
   * @param meta Metadata about the wheel event including delta value
   * @param nativeEvent The native wheel event
   * @returns Always returns true to indicate the event was handled
   */
  wheel(p, meta, nativeEvent) {
    const diagram = this.diagram;
    let z = diagram.zoom();
    const delta = meta.delta, options = diagram.options, zoomRate = options.zoomRate, zoomOptions = {
      point: p,
      meta,
      zoom: z,
      nativeEvent
    };
    if (diagram.trigger(ZOOM_START, zoomOptions)) {
      return;
    }
    if (delta < 0) {
      z += zoomRate;
    } else {
      z -= zoomRate;
    }
    z = round(Math.max(options.zoomMin, Math.min(options.zoomMax, z)), 2);
    zoomOptions.zoom = z;
    diagram.zoom(z, zoomOptions);
    diagram.trigger(ZOOM_END, zoomOptions);
    return true;
  }
  /**
   * Sets a tool at the specified index in the tools array.
   * @param tool The tool instance to set
   * @param index The index position where to place the tool
   */
  setTool(tool, index) {
    tool.toolService = this;
    this.tools[index] = tool;
  }
  /**
   * Selects a single item in the diagram.
   * Handles selection logic based on selectable options and keyboard modifiers.
   * @param item The diagram item to select
   * @param meta Metadata about the selection event (e.g., ctrl key for multi-selection)
   */
  selectSingle(item, meta) {
    const diagram = this.diagram;
    const selectable = diagram.options.selectable;
    if (selectable && !item.isSelected && item.options.selectable !== false) {
      const addToSelection = meta.ctrlKey && selectable.multiple !== false;
      diagram.select(item, {
        addToSelection
      });
    }
  }
  /** @hidden */
  _discardNewConnection() {
    if (this.newConnection) {
      this.diagram.remove(this.newConnection);
      this.newConnection = void 0;
    }
  }
  /** @hidden */
  _activateTool(p, meta) {
    for (let i = 0; i < this.tools.length; i++) {
      const tool = this.tools[i];
      if (meta.middleButton && !tool.useMiddleButton) {
        continue;
      }
      if (tool.tryActivate(p, meta)) {
        this.activeTool = tool;
        break;
      }
    }
  }
  /** @hidden */
  _updateCursor(p) {
    const element = this.diagram.element;
    let cursor;
    if (this.activeTool) {
      cursor = this.activeTool.getCursor(p);
    } else if (this.hoveredAdorner) {
      cursor = this.hoveredAdorner._getCursor(p);
      if (!cursor && this.hoveredItem) {
        cursor = this.hoveredItem._getCursor(p);
      }
    } else if (this.hoveredItem) {
      cursor = this.hoveredItem._getCursor(p);
    }
    element.style.cursor = cursor || Cursors.arrow;
  }
  /** @hidden */
  _connectionManipulation(connection, disabledShape, isNew) {
    this.activeConnection = connection;
    this.disabledShape = disabledShape;
    if (isNew) {
      this.newConnection = this.activeConnection;
    } else {
      this.newConnection = void 0;
    }
  }
  /** @hidden */
  _updateHoveredItem(point, meta, nativeEvent) {
    const hit = this._hitTest(point);
    const diagram = this.diagram;
    if (hit !== this.hoveredItem && (!this.disabledShape || hit !== this.disabledShape)) {
      if (this.hoveredItem) {
        diagram.trigger(MOUSE_LEAVE, {
          item: this.hoveredItem,
          nativeEvent,
          point,
          meta
        });
        this.hoveredItem._hover(false);
      }
      if (hit && hit.options.enable) {
        diagram.trigger(MOUSE_ENTER, {
          item: hit,
          nativeEvent,
          point,
          meta
        });
        this.hoveredItem = hit;
        this.hoveredItem._hover(true);
      } else {
        this.hoveredItem = void 0;
      }
    }
  }
  /** @hidden */
  _removeHover() {
    if (this.hoveredItem) {
      this.hoveredItem._hover(false);
      this.hoveredItem = void 0;
    }
  }
  /** @hidden */
  _hitTest(point) {
    const d = this.diagram;
    let hit, item, i;
    if (this._hoveredConnector) {
      this._hoveredConnector._hover(false);
      this._hoveredConnector = void 0;
    }
    if (d._connectorsAdorner._visible) {
      hit = d._connectorsAdorner._hitTest(point);
      if (hit) {
        return hit;
      }
    }
    hit = this.diagram._resizingAdorner._hitTest(point);
    if (hit) {
      this.hoveredAdorner = d._resizingAdorner;
      if (hit.x !== 0 || hit.y !== 0) {
        return;
      }
      hit = void 0;
    } else {
      this.hoveredAdorner = void 0;
    }
    if (!this.activeTool || this.activeTool.type !== "ConnectionTool") {
      const selectedConnections = [];
      for (i = 0; i < d._selectedItems.length; i++) {
        item = d._selectedItems[i];
        if (item instanceof Connection) {
          selectedConnections.push(item);
        }
      }
      hit = this._hitTestItems(selectedConnections, point);
    }
    return hit || this._hitTestElements(point);
  }
  /** @hidden */
  _hitTestElements(point) {
    const diagram = this.diagram;
    const shapeHit = this._hitTestItems(diagram.shapes, point);
    const connectionHit = this._hitTestItems(diagram.connections, point);
    let hit;
    if ((!this.activeTool || this.activeTool.type !== "ConnectionTool") && shapeHit && connectionHit && !hitTestShapeConnectors(shapeHit, point)) {
      const mainLayer = diagram.mainLayer;
      const shapeIdx = inArray(shapeHit.visual, mainLayer.children);
      const connectionIdx = inArray(connectionHit.visual, mainLayer.children);
      hit = shapeIdx > connectionIdx ? shapeHit : connectionHit;
    }
    return hit || shapeHit || connectionHit;
  }
  /** @hidden */
  _hitTestItems(array, point) {
    let i, item, hit;
    for (i = array.length - 1; i >= 0; i--) {
      item = array[i];
      hit = item._hitTest(point);
      if (hit) {
        return hit;
      }
    }
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/services/AddConnectionUnit.js
var AddConnectionUnit = class {
  constructor(connection, diagram) {
    this.connection = connection;
    this.diagram = diagram;
    this.title = "New connection";
  }
  undo() {
    this.diagram.remove(this.connection, false);
  }
  redo() {
    this.diagram._addConnection(this.connection, false);
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/services/AddShapeUnit.js
var AddShapeUnit = class {
  constructor(shape, diagram) {
    this.shape = shape;
    this.diagram = diagram;
    this.title = "New shape";
  }
  undo() {
    this.diagram.deselect();
    this.diagram.remove(this.shape, false);
  }
  redo() {
    this.diagram._addShape(this.shape, false);
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/services/CompositeUnit.js
var CompositeUnit = class {
  constructor(unit) {
    this.units = [];
    this.title = "Composite unit";
    if (unit !== void 0) {
      this.units.push(unit);
    }
  }
  add(undoUnit) {
    this.units.push(undoUnit);
  }
  undo() {
    for (let i = 0; i < this.units.length; i++) {
      this.units[i].undo();
    }
  }
  redo() {
    for (let i = 0; i < this.units.length; i++) {
      this.units[i].redo();
    }
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/services/DeleteConnectionUnit.js
var DeleteConnectionUnit = class {
  constructor(connection) {
    this.connection = connection;
    this.diagram = connection.diagram;
    this.targetConnector = connection.targetConnector;
    this.title = "Delete connection";
  }
  undo() {
    this.diagram._addConnection(this.connection, false);
  }
  redo() {
    this.diagram.remove(this.connection, false);
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/services/DeleteShapeUnit.js
var DeleteShapeUnit = class {
  constructor(shape) {
    this.shape = shape;
    this.diagram = shape.diagram;
    this.title = "Deletion";
  }
  undo() {
    this.diagram._addShape(this.shape, false);
    this.shape.select(false);
  }
  redo() {
    this.shape.select(false);
    this.diagram.remove(this.shape, false);
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/services/PositionAdapter.js
var PositionAdapter = class {
  constructor(layoutState) {
    this.layoutState = layoutState;
    this.diagram = layoutState.diagram;
  }
  initState() {
    this.froms = [];
    this.tos = [];
    this.subjects = [];
    const pusher = (id, bounds) => {
      const shape = this.diagram.getShapeById(id);
      if (shape) {
        this.subjects.push(shape);
        this.froms.push(shape.bounds().topLeft());
        this.tos.push(bounds.topLeft());
      }
    };
    this.layoutState.nodeMap.forEach(pusher, this);
  }
  update(tick) {
    if (this.subjects.length <= 0) {
      return;
    }
    for (let i = 0; i < this.subjects.length; i++) {
      this.subjects[i].position(new Point(this.froms[i].x + (this.tos[i].x - this.froms[i].x) * tick, this.froms[i].y + (this.tos[i].y - this.froms[i].y) * tick));
    }
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/services/LayoutUndoUnit.js
var LayoutUndoUnit = class {
  constructor(initialState, finalState, animate) {
    if (isUndefined(animate)) {
      this.animate = false;
    } else {
      this.animate = Boolean(animate);
    }
    this._initialState = initialState;
    this._finalState = finalState;
    this.title = "Diagram layout";
  }
  undo() {
    this.setState(this._initialState);
  }
  redo() {
    this.setState(this._finalState);
  }
  setState(state) {
    const diagram = state.diagram;
    if (this.animate) {
      state.linkMap.forEach(function(id, points) {
        const conn = diagram.getShapeById(id);
        conn.visible(false);
        if (conn) {
          conn.points(points);
        }
      });
      const ticker = new Ticker();
      ticker.addAdapter(new PositionAdapter(state));
      ticker.onComplete(function() {
        state.linkMap.forEach(function(id) {
          const conn = diagram.getShapeById(id);
          conn.visible(true);
        });
      });
      ticker.play();
    } else {
      state.nodeMap.forEach(function(id, bounds) {
        const shape = diagram.getShapeById(id);
        if (shape) {
          shape.position(bounds.topLeft());
        }
      });
      state.linkMap.forEach(function(id, points) {
        const conn = diagram.getShapeById(id);
        if (conn) {
          conn.points(points);
        }
      });
    }
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/services/ToBackUnit.js
var ToBackUnit = class {
  constructor(diagram, items, initialIndices) {
    this.diagram = diagram;
    this.indices = initialIndices;
    this.items = items;
    this.title = "Rotate Unit";
  }
  undo() {
    this.diagram._toIndex(this.items, this.indices);
  }
  redo() {
    this.diagram.toBack(this.items, false);
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/services/ToFrontUnit.js
var ToFrontUnit = class {
  constructor(diagram, items, initialIndices) {
    this.diagram = diagram;
    this.indices = initialIndices;
    this.items = items;
    this.title = "Rotate Unit";
  }
  undo() {
    this.diagram._toIndex(this.items, this.indices);
  }
  redo() {
    this.diagram.toFront(this.items, false);
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/services/UndoRedoService.js
var UndoRedoService = class extends Observable {
  constructor(options = {}) {
    super();
    this.events = ["undone", "redone"];
    this.bind(this.events, options);
    this.stack = [];
    this.index = 0;
    this.capacity = 1e4;
  }
  /**
   * Starts the collection of units. Add those with
   * the addCompositeItem method and call commit. Or cancel to forget about it.
   */
  begin() {
    this.composite = new CompositeUnit();
  }
  /**
   * Cancels the collection process of unit started with 'begin'.
   */
  cancel() {
    this.composite = void 0;
  }
  /**
   * Commits a batch of units.
   */
  commit(execute) {
    if (this.composite.units.length > 0) {
      this._restart(this.composite, execute);
    }
    this.composite = void 0;
  }
  /**
   * Adds a unit as part of the begin-commit batch.
   *
   * @param undoUnit
   */
  addCompositeItem(undoUnit) {
    if (this.composite) {
      this.composite.add(undoUnit);
    } else {
      this.add(undoUnit);
    }
  }
  /**
   * Standard addition of a unit. See also the batch version; begin-addCompositeUnit-commit methods.
   *
   * @param undoUnit The unit to be added.
   * @param execute If false, the unit will be added but not executed.
   */
  add(undoUnit, execute) {
    this._restart(undoUnit, execute);
  }
  /**
   * Returns the number of undoable unit in the stack.
   *
   * @returns {Number}
   */
  pop() {
    if (this.index > 0) {
      this.stack.pop();
      this.index--;
    }
  }
  count() {
    return this.stack.length;
  }
  /**
   * Rollback of the unit on top of the stack.
   */
  undo() {
    if (this.index > 0 && !this.trigger("undo", {
      unit: this.stack[this.index - 1]
    })) {
      this.index--;
      this.stack[this.index].undo();
      this.trigger("undone");
    }
  }
  /**
   * Redo of the last undone action.
   */
  redo() {
    if (this.stack.length > 0 && this.index < this.stack.length && !this.trigger("redo", {
      unit: this.stack[this.index]
    })) {
      this.stack[this.index].redo();
      this.index++;
      this.trigger("redone");
    }
  }
  _restart(composite, execute) {
    this.stack.splice(this.index, this.stack.length - this.index);
    this.stack.push(composite);
    if (execute !== false) {
      this.redo();
    } else {
      this.index++;
    }
    if (this.stack.length > this.capacity) {
      this.stack.splice(0, this.stack.length - this.capacity);
      this.index = this.capacity;
    }
  }
  /**
   * Clears the stack.
   */
  clear() {
    this.stack = [];
    this.index = 0;
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/dom/InactiveItemsCollection.js
var InactiveItem = class {
  constructor(dataItem) {
    this.dataItem = dataItem;
    this.callbacks = [];
  }
  onActivate(callback) {
    return new Promise((resolve) => {
      this.callbacks.push({
        callback,
        resolve
      });
    });
  }
  activate() {
    const callbacks = this.callbacks;
    let item;
    for (let idx = 0; idx < callbacks.length; idx++) {
      item = this.callbacks[idx];
      item.callback(this.dataItem);
      item.resolve();
    }
    this.callbacks = [];
  }
};
var InactiveItemsCollection = class {
  constructor() {
    this.items = {};
  }
  add(items) {
    for (let idx = 0; idx < items.length; idx++) {
      this.items[items[idx].uid] = new InactiveItem(items[idx]);
    }
  }
  forEach(callback) {
    for (const uid in this.items) {
      if (Object.prototype.hasOwnProperty.call(this.items, uid)) {
        callback(this.items[uid]);
      }
    }
  }
  getByUid(uid) {
    return this.items[uid];
  }
  remove(item) {
    delete this.items[item.uid];
  }
  destroy() {
    this.items = {};
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/dom/QuadRoot.js
var QuadRoot = class {
  constructor() {
    this.shapes = [];
  }
  _add(shape, bounds) {
    this.shapes.push({
      bounds,
      shape
    });
    shape._quadNode = this;
  }
  insert(shape, bounds) {
    this._add(shape, bounds);
  }
  remove(shape) {
    const shapes2 = this.shapes;
    const length = shapes2.length;
    for (let idx = 0; idx < length; idx++) {
      if (shapes2[idx].shape === shape) {
        shapes2.splice(idx, 1);
        break;
      }
    }
  }
  hitTestRect(rect, exclude) {
    const shapes2 = this.shapes;
    const length = shapes2.length;
    for (let i = 0; i < length; i++) {
      if (this._testRect(shapes2[i].shape, rect) && !contains(exclude, shapes2[i].shape)) {
        return true;
      }
    }
  }
  _testRect(shape, rect) {
    const angle = shape.rotate().angle;
    const bounds = shape.bounds();
    let hit;
    if (!angle) {
      hit = bounds.overlaps(rect);
    } else {
      hit = Intersect.rects(rect, bounds, -angle);
    }
    return hit;
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/dom/QuadNode.js
var QuadNode = class _QuadNode extends QuadRoot {
  constructor(rect) {
    super();
    this.children = [];
    this.rect = rect;
  }
  inBounds(rect) {
    const nodeRect = this.rect;
    const nodeBottomRight = nodeRect.bottomRight();
    const bottomRight2 = rect.bottomRight();
    const inBounds = nodeRect.x <= rect.x && nodeRect.y <= rect.y && bottomRight2.x <= nodeBottomRight.x && bottomRight2.y <= nodeBottomRight.y;
    return inBounds;
  }
  overlapsBounds(rect) {
    return this.rect.overlaps(rect);
  }
  insert(shape, bounds) {
    let inserted = false;
    const children = this.children;
    const length = children.length;
    if (this.inBounds(bounds)) {
      if (!length && this.shapes.length < 4) {
        this._add(shape, bounds);
      } else {
        if (!length) {
          this._initChildren();
        }
        for (let idx = 0; idx < children.length; idx++) {
          if (children[idx].insert(shape, bounds)) {
            inserted = true;
            break;
          }
        }
        if (!inserted) {
          this._add(shape, bounds);
        }
      }
      inserted = true;
    }
    return inserted;
  }
  _initChildren() {
    const rect = this.rect, children = this.children, shapes2 = this.shapes, center = rect.center(), halfWidth = rect.width / 2, halfHeight = rect.height / 2;
    let childIdx, shapeIdx;
    children.push(new _QuadNode(new Rect(rect.x, rect.y, halfWidth, halfHeight)), new _QuadNode(new Rect(center.x, rect.y, halfWidth, halfHeight)), new _QuadNode(new Rect(rect.x, center.y, halfWidth, halfHeight)), new _QuadNode(new Rect(center.x, center.y, halfWidth, halfHeight)));
    for (shapeIdx = shapes2.length - 1; shapeIdx >= 0; shapeIdx--) {
      for (childIdx = 0; childIdx < children.length; childIdx++) {
        if (children[childIdx].insert(shapes2[shapeIdx].shape, shapes2[shapeIdx].bounds)) {
          shapes2.splice(shapeIdx, 1);
          break;
        }
      }
    }
  }
  hitTestRect(rect, exclude) {
    let idx;
    const children = this.children;
    const length = children.length;
    let hit = false;
    if (this.overlapsBounds(rect)) {
      if (super.hitTestRect(rect, exclude)) {
        hit = true;
      } else {
        for (idx = 0; idx < length; idx++) {
          if (children[idx].hitTestRect(rect, exclude)) {
            hit = true;
            break;
          }
        }
      }
    }
    return hit;
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/dom/ShapesQuadTree.js
var ShapesQuadTree = class {
  constructor(diagram) {
    this.ROOT_SIZE = 1e3;
    const boundsChangeHandler = this._boundsChange.bind(this);
    diagram.bind(ITEMBOUNDSCHANGE, boundsChangeHandler);
    diagram.bind(ITEMROTATE, boundsChangeHandler);
    this.initRoots();
  }
  initRoots() {
    this.rootMap = {};
    this.root = new QuadRoot();
  }
  clear() {
    this.initRoots();
  }
  _boundsChange(e) {
    if (e.item._quadNode) {
      e.item._quadNode.remove(e.item);
    }
    this.insert(e.item);
  }
  insert(shape) {
    const bounds = shape.bounds(ROTATED);
    const rootSize = this.ROOT_SIZE;
    const sectors = this.getSectors(bounds);
    const x = sectors[0][0];
    const y = sectors[1][0];
    if (this.inRoot(sectors)) {
      this.root.insert(shape, bounds);
    } else {
      if (!this.rootMap[x]) {
        this.rootMap[x] = {};
      }
      if (!this.rootMap[x][y]) {
        this.rootMap[x][y] = new QuadNode(new Rect(x * rootSize, y * rootSize, rootSize, rootSize));
      }
      this.rootMap[x][y].insert(shape, bounds);
    }
  }
  remove(shape) {
    if (shape._quadNode) {
      shape._quadNode.remove(shape);
    }
  }
  inRoot(sectors) {
    return sectors[0].length > 1 || sectors[1].length > 1;
  }
  getSectors(rect) {
    const rootSize = this.ROOT_SIZE;
    const bottomRight2 = rect.bottomRight();
    const bottomX = Math.floor(bottomRight2.x / rootSize);
    const bottomY = Math.floor(bottomRight2.y / rootSize);
    const sectors = [[], []];
    for (let x = Math.floor(rect.x / rootSize); x <= bottomX; x++) {
      sectors[0].push(x);
    }
    for (let y = Math.floor(rect.y / rootSize); y <= bottomY; y++) {
      sectors[1].push(y);
    }
    return sectors;
  }
  hitTestRect(rect, exclude) {
    const sectors = this.getSectors(rect);
    let xIdx, yIdx, x, y;
    let root;
    if (this.root.hitTestRect(rect, exclude)) {
      return true;
    }
    for (xIdx = 0; xIdx < sectors[0].length; xIdx++) {
      x = sectors[0][xIdx];
      for (yIdx = 0; yIdx < sectors[1].length; yIdx++) {
        y = sectors[1][yIdx];
        root = (this.rootMap[x] || {})[y];
        if (root && root.hitTestRect(rect, exclude)) {
          return true;
        }
      }
    }
    return false;
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/diagram-utils.js
function copyDefaultOptions(mainOptions, elementOptions, fields) {
  let field;
  for (let idx = 0; idx < fields.length; idx++) {
    field = fields[idx];
    if (elementOptions && !defined(elementOptions[field])) {
      elementOptions[field] = mainOptions[field];
    }
  }
}
var defaultOptions23 = {
  name: "Diagram",
  theme: "sass",
  layout: "",
  zoomRate: 0.1,
  zoom: 1,
  zoomMin: 0,
  zoomMax: 2,
  dataSource: {},
  draggable: true,
  template: "",
  autoBind: true,
  editable: {
    rotate: {},
    resize: {},
    text: true,
    tools: [],
    drag: {
      snap: {
        size: 10,
        angle: 10
      }
    },
    remove: true
  },
  pannable: {
    showScrollbars: true,
    autoHideScrollbars: true
  },
  selectable: {
    key: "none"
  },
  tooltip: {
    delay: 200,
    // Inherited from JQuery Diagram, not in use here.
    enabled: true,
    format: "{0}"
  },
  copy: {
    enabled: true,
    offsetX: 20,
    offsetY: 20
  },
  tabIndex: 0,
  navigation: {
    disabled: false,
    smallStep: 1,
    largeStep: 5
  },
  accessibility: {
    role: "graphics-document",
    ariaRoleDescription: "Diagram"
  },
  shapeDefaults: shapeDefaults({
    undoable: true,
    connectors: void 0
  }),
  connectionDefaults: {
    accessibility: {
      role: "graphics-symbol",
      ariaRoleDescription: CONNECTION
    },
    editable: {
      tools: [],
      points: {
        snap: CONNECTION_POINTS_EDITING_SNAP
      }
    },
    tooltip: {
      visible: true
    },
    type: CASCADING
  },
  shapes: [],
  connections: []
};
var domEvents = ["contextmenu", "dblclick", "pointerdown", "pointermove", "pointerup", "pointercancel", "pointerleave", "touchstart", "touchmove", "touchend", "touchcancel"];
var events = [ZOOM_END, ZOOM_START, PAN, SELECT, ITEMROTATE, ITEMBOUNDSCHANGE, CHANGE, CLICK, MOUSE_ENTER, MOUSE_LEAVE, TOOLTIP_SHOW, TOOLTIP_HIDE, "toolBarClick", "save", "cancel", "edit", "remove", "undo", "redo", "add", "dataBound", ...domEvents, DRAG_START, DRAG, DRAG_END];
function splitDiagramElements(elements) {
  const connections = [];
  const shapes2 = [];
  let element, idx;
  for (idx = 0; idx < elements.length; idx++) {
    element = elements[idx];
    if (element instanceof Shape) {
      shapes2.push(element);
    } else {
      connections.push(element);
    }
  }
  return {
    shapes: shapes2,
    connections
  };
}
function elementOffset2(element) {
  const rect = element.getBoundingClientRect();
  const doc = element.ownerDocument;
  const scrollLeft = doc.defaultView.scrollX || doc.documentElement.scrollLeft || 0;
  const scrollTop = doc.defaultView.scrollY || doc.documentElement.scrollTop || 0;
  return {
    top: rect.top + scrollTop,
    left: rect.left + scrollLeft
  };
}
function outerHeight(element, includeMargins = false) {
  let heightValue = element.offsetHeight;
  if (includeMargins) {
    const style = getComputedStyle(element);
    const marginTop = parseFloat(style.marginTop);
    const marginBottom = parseFloat(style.marginBottom);
    heightValue += marginTop + marginBottom;
  }
  return heightValue;
}
function elementWidth(element) {
  const style = getComputedStyle(element);
  const widthValue = element.clientWidth;
  const paddingLeft = parseFloat(style.paddingLeft);
  const paddingRight = parseFloat(style.paddingRight);
  return widthValue - paddingLeft - paddingRight;
}
function elementHeight(element) {
  const style = getComputedStyle(element);
  const heightValue = element.clientHeight;
  const paddingTop = parseFloat(style.paddingTop);
  const paddingBottom = parseFloat(style.paddingBottom);
  return heightValue - paddingTop - paddingBottom;
}

// node_modules/@progress/kendo-diagram-common/dist/es/navigation.js
function navigationElements(shapes2, connections) {
  const result = [];
  const addedConnections = /* @__PURE__ */ new Set();
  const sortedShapes = [...shapes2].sort((a, b) => {
    const boundsA = a.bounds();
    const boundsB = b.bounds();
    if (boundsA.y !== boundsB.y) {
      return boundsA.y - boundsB.y;
    }
    return boundsA.x - boundsB.x;
  });
  const shapeIndexMap = /* @__PURE__ */ new Map();
  sortedShapes.forEach((shape, index) => {
    shapeIndexMap.set(shape, index);
  });
  for (const shape of sortedShapes) {
    result.push(shape);
    const outgoingConnections = connections.filter((conn) => conn.from === shape && !addedConnections.has(conn));
    const sortedOutgoing = outgoingConnections.sort((a, b) => {
      var _a, _b;
      const indexA = a.to ? (_a = shapeIndexMap.get(a.to)) !== null && _a !== void 0 ? _a : Infinity : Infinity;
      const indexB = b.to ? (_b = shapeIndexMap.get(b.to)) !== null && _b !== void 0 ? _b : Infinity : Infinity;
      return indexA - indexB;
    });
    for (const conn of sortedOutgoing) {
      result.push(conn);
      addedConnections.add(conn);
    }
  }
  for (const conn of connections) {
    if (!addedConnections.has(conn)) {
      result.push(conn);
    }
  }
  return result;
}
var Navigation = class {
  constructor(diagram) {
    this.elements = [];
    this._skipAutoFocus = false;
    this._selectHandler = (e) => {
      if (this.isDisabled()) {
        return;
      }
      if (e.selected && e.selected.length > 0) {
        this.elements = navigationElements(e.sender.shapes, e.sender.connections);
        const index = this.elements.indexOf(e.selected[0]);
        if (index !== -1) {
          this.currentIndex = index;
          if (e.selected.length === 1) {
            this.focusSelectedElement();
          }
        }
      } else {
        this.diagram.element.removeAttribute(ARIA_ACTIVEDESCENDANT);
        this.blurAll();
      }
    };
    this._keydownHandler = (e) => {
      var _a, _b;
      if (this.isDisabled() || !this._hasFocus()) {
        return;
      }
      const meta = this.diagram._meta(e);
      const macCmd = meta.metaKey && macOS();
      const ctrlKey = meta.ctrlKey || macCmd;
      if (!ctrlKey) {
        switch (e.key) {
          case ARROW_RIGHT:
            this.focusNext();
            e.preventDefault();
            break;
          case ARROW_LEFT:
            this.focusPrevious();
            e.preventDefault();
            break;
          case KEY_HOME:
            this.focusFirst();
            e.preventDefault();
            break;
          case KEY_END:
            this.focusLast();
            e.preventDefault();
            break;
          default:
            break;
        }
      } else {
        const currentElement = this.elements[this.currentIndex];
        if (!currentElement) return;
        let moveBy = (_a = this.diagram.options.navigation) === null || _a === void 0 ? void 0 : _a.smallStep;
        if (e.shiftKey) {
          moveBy = (_b = this.diagram.options.navigation) === null || _b === void 0 ? void 0 : _b.largeStep;
        }
        if (currentElement.name !== SHAPE || !isNumber(moveBy)) {
          return;
        }
        const shape = currentElement;
        const initialBounds = shape.bounds();
        const position = shape.position().clone();
        switch (e.key) {
          case ARROW_RIGHT:
            position.x += moveBy;
            e.preventDefault();
            break;
          case ARROW_LEFT:
            position.x -= moveBy;
            e.preventDefault();
            break;
          case ARROW_UP:
            position.y -= moveBy;
            e.preventDefault();
            break;
          case ARROW_DOWN:
            position.y += moveBy;
            e.preventDefault();
            break;
          default:
            break;
        }
        if (!position.equals(shape.position())) {
          shape.position(position);
          const unit = new TransformUnit([shape], [initialBounds]);
          this.diagram.undoRedoService.add(unit, false);
        }
      }
    };
    this._downHandler = () => {
      if (this.isDisabled()) {
        return;
      }
      if (!this._hasFocus()) {
        this._skipAutoFocus = true;
      }
    };
    this._focusHandler = () => {
      if (this.isDisabled()) {
        return;
      }
      if (this._skipAutoFocus) {
        this._skipAutoFocus = false;
        if (this.elements.length > 0 && this.currentIndex >= 0 && this.currentIndex < this.elements.length) {
          this.focusSelectedElement();
        }
        return;
      }
      this.elements = navigationElements(this.diagram.shapes, this.diagram.connections);
      this.updateFocus();
    };
    this._blurHandler = () => {
      if (this.isDisabled()) {
        return;
      }
      this.blurAll();
    };
    this.currentIndex = 0;
    this.diagram = diagram;
    this.attachEvents();
    this.setTabIndex();
  }
  setTabIndex() {
    const {
      options,
      element
    } = this.diagram;
    if (!element.hasAttribute(TABINDEX) && !isUndefined(options.tabIndex)) {
      element.setAttribute(TABINDEX, String(options.tabIndex));
    }
  }
  attachEvents() {
    this.diagram.element.addEventListener(KEYDOWN, this._keydownHandler);
    this.diagram.element.addEventListener(MOUSEDOWN, this._downHandler);
    this.diagram.element.addEventListener(TOUCHSTART, this._downHandler);
    this.diagram.element.addEventListener(POINTERDOWN, this._downHandler);
    this.diagram.element.addEventListener(FOCUS, this._focusHandler);
    this.diagram.element.addEventListener(BLUR, this._blurHandler);
    this.diagram.bind(SELECT, this._selectHandler);
  }
  isDisabled() {
    var _a, _b;
    return (_b = (_a = this.diagram) === null || _a === void 0 ? void 0 : _a.options.navigation) === null || _b === void 0 ? void 0 : _b.disabled;
  }
  detachEvents() {
    this.diagram.element.removeEventListener(KEYDOWN, this._keydownHandler);
    this.diagram.element.removeEventListener(MOUSEDOWN, this._downHandler);
    this.diagram.element.removeEventListener(TOUCHSTART, this._downHandler);
    this.diagram.element.removeEventListener(POINTERDOWN, this._downHandler);
    this.diagram.element.removeEventListener(FOCUS, this._focusHandler);
    this.diagram.element.removeEventListener(BLUR, this._blurHandler);
    this.diagram.unbind(SELECT, this._selectHandler);
  }
  _hasFocus() {
    var _a;
    return ((_a = this.diagram) === null || _a === void 0 ? void 0 : _a.element.ownerDocument.activeElement) === this.diagram.element;
  }
  destroy() {
    if (this.diagram) {
      this.detachEvents();
    }
    this.elements = [];
    this.currentIndex = -1;
    this.diagram = null;
  }
  focusNext() {
    if (this.elements.length === 0) {
      return;
    }
    this.currentIndex = (this.currentIndex + 1) % this.elements.length;
    this.updateFocus();
  }
  focusPrevious() {
    if (this.elements.length === 0) {
      return;
    }
    this.currentIndex = (this.currentIndex - 1 + this.elements.length) % this.elements.length;
    this.updateFocus();
  }
  focusFirst() {
    if (this.elements.length === 0) {
      return;
    }
    this.currentIndex = 0;
    this.updateFocus();
  }
  focusLast() {
    if (this.elements.length === 0) {
      return;
    }
    this.currentIndex = this.elements.length - 1;
    this.updateFocus();
  }
  selectCurrent() {
    this.elements[this.currentIndex].select(true);
    this.focusSelectedElement();
  }
  deselectAll() {
    this.elements.forEach((el) => {
      el.select(false);
      el.blur();
    });
    this.diagram.element.removeAttribute(ARIA_ACTIVEDESCENDANT);
  }
  focusSelectedElement() {
    const element = this.elements[this.currentIndex];
    this.diagram.element.setAttribute(ARIA_ACTIVEDESCENDANT, element.options.id);
    this.blurAll();
    element.focus();
  }
  blurAll() {
    this.elements.forEach((el) => el.blur());
  }
  updateFocus() {
    if (this.elements.length === 0 || this.currentIndex < 0 || this.currentIndex >= this.elements.length) {
      return;
    }
    this.deselectAll();
    this.selectCurrent();
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/Diagram.js
var Diagram = class extends Observable {
  /**
   * Creates a new Diagram instance.
   * @param element The HTML element that will contain the diagram
   * @param userOptions Configuration options for the diagram
   * @param themeOptions Theme-specific options
   */
  constructor(element, userOptions, themeOptions) {
    super();
    this._clipboard = [];
    this._connectionsDataMap = {};
    this._dataMap = {};
    this._inactiveShapeItems = new InactiveItemsCollection();
    this._selectedItems = [];
    this.shapes = [];
    this.connections = [];
    this._deferredConnectionUpdates = [];
    this._domEvent = (nativeEvent) => {
      const meta = this._meta(nativeEvent);
      const point = this._eventPositions(nativeEvent);
      const item = this.toolService._hitTest(point);
      this.trigger(nativeEvent.type, {
        nativeEvent,
        item,
        point,
        meta
      });
    };
    this.element = element;
    this.options = deepExtend({
      createToolBar: noop,
      destroyToolBar: noop
    }, defaultOptions23, userOptions);
    this.events = events;
    this._initTheme(themeOptions);
    this._initElements();
    this._extendLayoutOptions(this.options);
    this._initDefaults(userOptions);
    this._interactionDefaults();
    this._initCanvas();
    this.mainLayer = new Group({
      id: "main-layer"
    });
    this.canvas.append(this.mainLayer);
    this._shapesQuadTree = new ShapesQuadTree(this);
    this._pan = new Point();
    this._adorners = [];
    this.adornerLayer = new Group({
      id: "adorner-layer"
    });
    this.canvas.append(this.adornerLayer);
    this._createHandlers();
    this._initialize();
    this._resizingAdorner = new ResizingAdorner(this, {
      editable: this.options.editable
    });
    this._connectorsAdorner = new ConnectorsAdorner(this);
    this._adorn(this._resizingAdorner, true);
    this._adorn(this._connectorsAdorner, true);
    this.selector = new Selector(this);
    this._clipboard.length = 0;
    this.pauseMouseHandlers = false;
    this._navigation = new Navigation(this);
  }
  /** @hidden */
  _createShape(dataItem, options) {
    options = deepExtend({}, this.options.shapeDefaults, options);
    options.dataItem = dataItem;
    const shape = new Shape(options, this);
    return shape;
  }
  /** @hidden */
  _createConnection(dataItem, source, target) {
    const options = deepExtend({}, this.options.connectionDefaults);
    options.dataItem = dataItem;
    const connection = new Connection(source || new Point(), target || new Point(), options);
    return connection;
  }
  /** @hidden */
  _initElements() {
    this.element.innerHTML = "";
    this.element.style.position = "relative";
    this.element.classList.add("k-diagram");
    this.scrollable = document.createElement("div");
    this.scrollable.style.height = "100%";
    this.scrollable.style.width = "100%";
    this.scrollable.style.position = "relative";
    this.element.appendChild(this.scrollable);
    const accessibility = this.options.accessibility || {};
    this._setAttributes("role", accessibility.role);
    this._setAttributes("aria-label", accessibility.ariaLabel);
    this._setAttributes("aria-roledescription", accessibility.ariaRoleDescription);
    this.wrapper = this.element;
  }
  /** @hidden */
  _setAttributes(attrName, value) {
    if (defined(value)) {
      this.element.setAttribute(attrName, String(value));
    }
  }
  /** @hidden */
  _initDefaults(userOptions) {
    const options = this.options;
    const editable = options.editable;
    const shapeDefaults2 = options.shapeDefaults;
    const connectionDefaults = options.connectionDefaults;
    const userShapeDefaults = (userOptions || {}).shapeDefaults;
    if (editable === false) {
      shapeDefaults2.editable = false;
      connectionDefaults.editable = false;
    } else {
      copyDefaultOptions(editable, shapeDefaults2.editable, ["drag", "remove", "connect"]);
      copyDefaultOptions(editable, connectionDefaults.editable, ["drag", "remove"]);
    }
    if (userShapeDefaults && userShapeDefaults.connectors) {
      options.shapeDefaults.connectors = userShapeDefaults.connectors;
    }
  }
  /** @hidden */
  _interactionDefaults() {
    const options = this.options;
    const selectable = options.selectable;
    const pannable = options.pannable;
    const mobile = this._mobileOS();
    if (selectable && !defined(selectable.multiple)) {
      options.selectable = deepExtend({
        multiple: mobile ? false : true
      }, options.selectable);
    }
    if (pannable === true) {
      options.pannable = __spreadValues({}, defaultOptions23.pannable);
    }
    if (pannable && !defined(pannable.key)) {
      options.pannable = deepExtend({
        key: mobile ? "none" : "ctrl"
      }, options.pannable);
    }
  }
  /** @hidden */
  _initCanvas() {
    const canvasContainer = document.createElement("div");
    canvasContainer.classList.add("k-layer");
    this.scrollable.appendChild(canvasContainer);
    const viewPort = this.viewport();
    this.canvas = new (this.options.Canvas || Canvas)(canvasContainer, {
      width: viewPort.width || DEFAULT_CANVAS_WIDTH,
      height: viewPort.height || DEFAULT_CANVAS_HEIGHT
    });
  }
  /** @hidden */
  _createHandlers() {
    const element = this.element;
    this._wheelHandler = this._wheelHandler || this._wheel.bind(this);
    this._keydownHandler = this._keydownHandler || this._keydown.bind(this);
    if (this._mobileOS() && this._mobileOS().browser.mobilesafari) {
      element.addEventListener("mousewheel", this._wheelHandler);
    } else {
      element.addEventListener("wheel", this._wheelHandler);
    }
    element.addEventListener("keydown", this._keydownHandler);
    this._userEvents = new UserEvents(this.scrollable, {
      multiTouch: true,
      fastTap: true,
      tap: this._tap.bind(this),
      start: this._dragStart.bind(this),
      move: this._drag.bind(this),
      end: this._dragEnd.bind(this),
      gesturestart: this._gestureStart.bind(this),
      gesturechange: this._gestureChange.bind(this),
      gestureend: this._gestureEnd.bind(this),
      doubleTap: this._doubleTap.bind(this),
      supportDoubleTap: true
    });
    this.toolService = new ToolService(this);
    this._mouseoverHandler = this._mouseoverHandler || this._mouseover.bind(this);
    this._mouseoutHandler = this._mouseoutHandler || this._mouseout.bind(this);
    this._mouseMoveHandler = this._mouseMoveHandler || this._mouseMove.bind(this);
    this._mouseDownHandler = this._mouseDownHandler || this._mouseDown.bind(this);
    this._mouseUpHandler = this._mouseUpHandler || this._mouseUp.bind(this);
    this.scrollable.addEventListener("mouseover", this._mouseoverHandler);
    this.scrollable.addEventListener("mouseout", this._mouseoutHandler);
    this.scrollable.addEventListener("mousemove", this._mouseMoveHandler);
    this.scrollable.addEventListener("mousedown", this._mouseDownHandler);
    this.scrollable.addEventListener("mouseup", this._mouseUpHandler);
    domEvents.forEach((event) => {
      this.scrollable.addEventListener(event, this._domEvent);
    });
    this._initResizeObserver();
    this.bind(ZOOM_START, this._destroyToolBar.bind(this));
    this.bind(PAN, this._destroyToolBar.bind(this));
    this.bind(MOUSE_ENTER, this._onMouseEnter.bind(this));
    this.bind(MOUSE_LEAVE, this._onMouseLeave.bind(this));
  }
  _onMouseEnter(event) {
    const {
      delay
    } = this.options.tooltip;
    this._tooltipTimeOut = setTimeout(() => {
      this.trigger(TOOLTIP_SHOW, event);
      this._tooltipTimeOut = null;
    }, delay);
  }
  _onMouseLeave(event) {
    clearTimeout(this._tooltipTimeOut);
    this.trigger(TOOLTIP_HIDE, event);
  }
  /** @hidden */
  _initResizeObserver() {
    const observer = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        const {
          width,
          height
        } = entry.contentRect;
        if (entry.target !== this.element || this.size && this.size.width === width && this.size.height === height) {
          return;
        }
        this.size = {
          width,
          height
        };
        this._resize();
        this.trigger("resize", this.size);
      });
    });
    this._resizeObserver = observer;
    observer.observe(this.element);
  }
  /** @hidden */
  _destroyResizeObserver() {
    if (this._resizeObserver) {
      this._resizeObserver.disconnect();
      this._resizeObserver = null;
    }
  }
  /** @hidden */
  _dragStart(e) {
    this._pauseMouseHandlers = true;
    const point = this._eventPositions(e, true);
    if (this.toolService.start(point, this._meta(e), e.event)) {
      this._destroyToolBar();
      e.preventDefault();
    }
  }
  /** @hidden */
  _drag(e) {
    const p = this._eventPositions(e);
    if (this.toolService.move(p, this._meta(e), e.event)) {
      e.preventDefault();
    }
  }
  /** @hidden */
  _dragEnd(e) {
    this._pauseMouseHandlers = false;
    const p = this._eventPositions(e);
    if (this.toolService.end(p, this._meta(e), e.event)) {
      this.options.createToolBar();
      e.preventDefault();
    }
  }
  /** @hidden */
  _mouseMove(e) {
    if (!this._pauseMouseHandlers) {
      const p = this._eventPositions(e);
      this.toolService._updateHoveredItem(p, this._meta(e), e);
      this.toolService._updateCursor(p);
    }
  }
  /** @hidden */
  _mouseDown(e) {
    this._pauseMouseHandlers = true;
    if (e.button === 1 && this.options.pannable !== false && !this.toolService.hoveredItem) {
      e.preventDefault();
      const point = this._eventPositions(e);
      const meta = deepExtend(this._meta(e), {
        middleButton: true
      });
      if (this.toolService.start(point, meta, e)) {
        this._middleButtonMoveHandler = this._middleButtonMove.bind(this);
        this._middleButtonUpHandler = this._middleButtonUp.bind(this);
        this.element.ownerDocument.addEventListener("mousemove", this._middleButtonMoveHandler);
        this.element.ownerDocument.addEventListener("mouseup", this._middleButtonUpHandler);
      }
    }
  }
  /** @hidden */
  _middleButtonMove(e) {
    e.preventDefault();
    const point = this._eventPositions(e);
    const meta = deepExtend(this._meta(e), {
      middleButton: true
    });
    this.toolService.move(point, meta, e);
  }
  /** @hidden */
  _middleButtonUp(e) {
    if (e.button === 1) {
      this._pauseMouseHandlers = false;
      const point = this._eventPositions(e);
      const meta = deepExtend(this._meta(e), {
        middleButton: true
      });
      this.toolService.end(point, meta, e);
      this.element.ownerDocument.removeEventListener("mousemove", this._middleButtonMoveHandler);
      this.element.ownerDocument.removeEventListener("mouseup", this._middleButtonUpHandler);
      this._middleButtonMoveHandler = null;
      this._middleButtonUpHandler = null;
    }
  }
  /** @hidden */
  _mouseUp() {
    this._pauseMouseHandlers = false;
  }
  /** @hidden */
  _tap(e) {
    const toolService = this.toolService;
    const selectable = this.options.selectable;
    const point = this._eventPositions(e);
    const focused = this.focus();
    const meta = this._meta(e);
    toolService._updateHoveredItem(point, meta, e.event);
    if (toolService.hoveredItem) {
      const item = toolService.hoveredItem;
      this.trigger("click", {
        nativeEvent: e.event,
        item,
        point,
        meta
      });
      if (selectable && item.options.selectable !== false) {
        const multiple = selectable.multiple !== false;
        const ctrlPressed = mobileOS || meta.ctrlKey || meta.metaKey && macOS();
        if (item.isSelected) {
          if (ctrlPressed) {
            this._destroyToolBar();
            item.select(false);
          } else {
            this.options.createToolBar(focused);
          }
        } else {
          this._destroyToolBar();
          this.select(item, {
            addToSelection: multiple && ctrlPressed
          });
          this.options.createToolBar(focused);
        }
      }
    } else if (selectable) {
      this._destroyToolBar();
      this.deselect();
    }
  }
  /** @hidden */
  _keydown(e) {
    if (this.toolService.keyDown(e.keyCode, this._meta(e))) {
      e.preventDefault();
    }
  }
  /** @hidden */
  _wheel(e) {
    const delta = mwDelta(e), p = this._eventPositions(e), meta = deepExtend(this._meta(e), {
      delta
    });
    if (this.toolService.wheel(p, meta, e)) {
      e.preventDefault();
    }
  }
  /** @hidden */
  _meta(e) {
    e = e.event || e;
    return {
      ctrlKey: e.ctrlKey,
      metaKey: e.metaKey,
      altKey: e.altKey,
      shiftKey: e.shiftKey,
      type: e.type
    };
  }
  /** @hidden */
  _eventPositions(e, start) {
    let point;
    if (e.touch) {
      const field = start ? "startLocation" : "location";
      point = new Point(e.x[field], e.y[field]);
    } else {
      point = new Point(e.pageX, e.pageY);
    }
    return this.documentToModel(point);
  }
  /** @hidden */
  _gestureStart(e) {
    this._destroyToolBar();
    this.scroller.disable();
    const initialCenter = this.documentToModel(new Point(e.center.x, e.center.y));
    const eventArgs = {
      point: initialCenter,
      zoom: this.zoom()
    };
    if (this.trigger(ZOOM_START, eventArgs)) {
      return;
    }
    this._gesture = e;
    this._initialCenter = initialCenter;
  }
  /** @hidden */
  _gestureChange(e) {
    const previousGesture = this._gesture;
    const initialCenter = this._initialCenter;
    const center = this.documentToView(new Point(e.center.x, e.center.y));
    const scaleDelta = e.distance / previousGesture.distance;
    let zoom = this._zoom;
    let updateZoom = false;
    if (Math.abs(scaleDelta - 1) >= MOBILE_ZOOM_RATE) {
      this._zoom = zoom = this._getValidZoom(zoom * scaleDelta);
      this.options.zoom = zoom;
      this._gesture = e;
      updateZoom = true;
    }
    const zoomedPoint = initialCenter.times(zoom);
    const pan = center.minus(zoomedPoint);
    if (updateZoom || this._pan.distanceTo(pan) >= MOBILE_PAN_DISTANCE) {
      this._panTransform(pan);
      this._updateAdorners();
    }
    e.preventDefault();
  }
  /** @hidden */
  _doubleTap(e) {
    const mobile = this._mobileOS();
    if (!mobile) {
      return;
    }
    const pointPosition = this._eventPositions(e);
    const options = this.options;
    const zoomRate = options.zoomRate;
    let zoom = this.zoom() + zoomRate;
    const meta = this._meta(e);
    const zoomOptions = {
      point: pointPosition,
      meta,
      zoom
    };
    if (this.trigger(ZOOM_START, zoomOptions)) {
      return;
    }
    zoom = drawing_exports.util.round(Math.max(options.zoomMin, Math.min(options.zoomMax, zoom)), 2);
    zoomOptions.zoom = zoom;
    this.zoom(zoom, zoomOptions);
    this.trigger(ZOOM_END, zoomOptions);
  }
  /** @hidden */
  _gestureEnd() {
    if (this.options.pannable !== false) {
      this.scroller.enable();
    }
    this.trigger(ZOOM_END, {
      point: this._initialCenter,
      zoom: this.zoom()
    });
  }
  /** @hidden */
  _resize() {
    const viewport = this.viewport();
    if (this.canvas) {
      this.canvas.size(viewport);
    }
    if (this.scrollable && this.toolBar) {
      this.scrollable.style.height = viewport.height + "px";
    }
  }
  /** @hidden */
  _mouseover(e) {
    const node = e.target._kendoNode;
    if (node && node.srcElement._hover) {
      node.srcElement._hover(true, node.srcElement);
    }
  }
  /** @hidden */
  _mouseout(e) {
    const node = e.target._kendoNode;
    if (node && node.srcElement._hover) {
      node.srcElement._hover(false, node.srcElement);
    }
  }
  /** @hidden */
  _initTheme(themeOptions) {
    var _a, _b, _c;
    this._theme = themeOptions;
    this.options = deepExtend({}, themeOptions, this.options);
    if (this.options.editable === true) {
      this.options.editable = (themeOptions || {}).editable;
    } else if (this.options.editable && this.options.editable.resize === true) {
      this.options.editable.resize = (themeOptions.editable || {}).resize;
    }
    if (((_a = this.options.connectionDefaults) === null || _a === void 0 ? void 0 : _a.editable) === true) {
      this.options.connectionDefaults.editable = themeOptions.connectionDefaults.editable;
    } else if (((_c = (_b = this.options.connectionDefaults) === null || _b === void 0 ? void 0 : _b.editable) === null || _c === void 0 ? void 0 : _c.points) === true) {
      this.options.connectionDefaults.editable.points = themeOptions.connectionDefaults.editable.points;
    }
  }
  /** @hidden */
  _createOptionElements() {
    const options = this.options;
    const shapesLength = options.shapes.length;
    if (shapesLength) {
      this._createShapes();
    }
    if (options.connections.length) {
      this._createConnections();
    }
    if (shapesLength && options.layout) {
      this.layout(options.layout);
    }
    this.undoRedoService.clear();
  }
  /** @hidden */
  _createShapes() {
    const options = this.options, shapes2 = options.shapes;
    let shape, i;
    for (i = 0; i < shapes2.length; i++) {
      shape = shapes2[i];
      this.addShape(shape);
    }
  }
  /** @hidden */
  _createConnections() {
    const options = this.options, defaults = options.connectionDefaults, connections = options.connections;
    let conn, source, target, i;
    for (i = 0; i < connections.length; i++) {
      conn = connections[i];
      source = this._findConnectionTarget(conn.from);
      target = this._findConnectionTarget(conn.to);
      if (this.options.connect) {
        this.options.connect(source, target, deepExtend({}, defaults, conn));
      } else {
        this.connect(source, target, deepExtend({}, defaults, conn));
      }
    }
  }
  /** @hidden */
  _findConnectionTarget(options) {
    options = options || {};
    const shapeId = isString(options) ? options : options.shapeId || options.id;
    let target;
    if (shapeId) {
      target = this.getShapeById(shapeId);
      if (options.connector) {
        target = target.getConnector(options.connector);
      }
    } else {
      target = new Point(options.x || 0, options.y || 0);
    }
    return target;
  }
  /**
   * Destroys the diagram and cleans up all resources.
   * Removes event listeners, destroys components, and clears all elements.
   */
  destroy() {
    var _a;
    super.destroy();
    this._destroyResizeObserver();
    (_a = this._navigation) === null || _a === void 0 ? void 0 : _a.destroy();
    this._navigation = null;
    if (this._userEvents) {
      this._userEvents.destroy();
    }
    this.clear();
    this.element.removeEventListener("mousewheel", this._wheelHandler);
    this.element.removeEventListener("wheel", this._wheelHandler);
    this.element.removeEventListener("keydown", this._keydownHandler);
    this.scrollable.removeEventListener("mouseover", this._mouseoverHandler);
    this.scrollable.removeEventListener("mouseout", this._mouseoutHandler);
    this.scrollable.removeEventListener("mousemove", this._mouseMoveHandler);
    this.scrollable.removeEventListener("mousedown", this._mouseDownHandler);
    this.scrollable.removeEventListener("mouseup", this._mouseUpHandler);
    if (this._middleButtonMoveHandler) {
      this.element.ownerDocument.removeEventListener("mousemove", this._middleButtonMoveHandler);
    }
    if (this._middleButtonUpHandler) {
      this.element.ownerDocument.removeEventListener("mouseup", this._middleButtonUpHandler);
    }
    domEvents.forEach((event) => {
      this.scrollable.removeEventListener(event, this._domEvent);
    });
    this.canvas.destroy(true);
    this.canvas = void 0;
    this.destroyScroller();
    this._destroyGlobalToolBar();
    this._destroyToolBar();
    this._inactiveShapeItems.destroy();
  }
  /**
   * Destroys the scroller component and removes its element.
   */
  destroyScroller() {
    const scroller = this.scroller;
    if (!scroller) {
      return;
    }
    scroller.destroy();
    scroller.element.remove();
    this.scroller = null;
  }
  /**
   * Serializes the diagram to a JSON object containing shapes and connections.
   * @returns Object with shapes and connections arrays
   */
  save() {
    const json = {
      shapes: [],
      connections: []
    };
    let i, connection, shape;
    for (i = 0; i < this.shapes.length; i++) {
      shape = this.shapes[i];
      if (shape.options.serializable) {
        const shapeOptions = deepExtend({}, shape.options);
        if (shape._originalWidth !== void 0) {
          shapeOptions.width = shape._originalWidth;
        }
        if (shape._originalHeight !== void 0) {
          shapeOptions.height = shape._originalHeight;
        }
        json.shapes.push(shapeOptions);
      }
    }
    for (i = 0; i < this.connections.length; i++) {
      connection = this.connections[i];
      json.connections.push(deepExtend({}, connection.options, connection.toJSON()));
    }
    return json;
  }
  /**
   * Sets focus to the diagram element.
   * @returns True if focus was set, undefined otherwise
   */
  focus() {
    if (this.element !== this.element.ownerDocument.activeElement) {
      const element = this.element, containers = [], offsets = [], documentElement = element.ownerDocument.documentElement;
      let scrollContainer = element, i;
      do {
        scrollContainer = scrollContainer.parentNode;
        if (scrollContainer.scrollHeight > scrollContainer.clientHeight) {
          containers.push(scrollContainer);
          offsets.push(scrollContainer.scrollTop);
        }
      } while (scrollContainer !== documentElement);
      element.focus({
        preventScroll: true
      });
      for (i = 0; i < containers.length; i++) {
        containers[i].scrollTop = offsets[i];
      }
      return true;
    }
  }
  /**
   * Loads diagram data and recreates shapes and connections.
   * @param options The diagram options containing shapes and connections data
   */
  load(options) {
    this.clear();
    this.setOptions(options);
    this._createShapes();
    this._createConnections();
    this.undoRedoService.clear();
  }
  /**
   * Sets options for the diagram by deep extending the current options.
   * @param options The options to merge with current diagram options
   */
  setOptions(options) {
    deepExtend(this.options, options);
    if (options.pannable) {
      const scrollerTool = this.toolService.tools.find((tool) => tool.scroller);
      if (scrollerTool) {
        scrollerTool.updateOptions();
      }
    }
  }
  /** @hidden */
  enterEdit(item) {
    if ((item === null || item === void 0 ? void 0 : item.name) === SHAPE && this._connectorsAdorner) {
      this._connectorsAdorner.pause();
    }
    this.disablePan();
  }
  /** @hidden */
  exitEdit(item) {
    if ((item === null || item === void 0 ? void 0 : item.name) === SHAPE && this._connectorsAdorner) {
      this._connectorsAdorner.resume();
    }
    this.restorePan();
  }
  /** @hidden */
  disablePan() {
    const pannable = this.options.pannable;
    this._currentPannable = typeof pannable === OBJECT ? __spreadValues({}, pannable) : pannable;
    this.setOptions({
      pannable: {
        showScrollbars: false,
        key: "none"
      }
    });
  }
  /** @hidden */
  restorePan() {
    this.setOptions({
      pannable: this._currentPannable
    });
    this._currentPannable = void 0;
  }
  /**
   * Clears the diagram by removing all selections and elements, then reinitializes.
   */
  clear() {
    this.select(false);
    this.mainLayer.clear();
    this._shapesQuadTree.clear();
    this._initialize();
  }
  /**
   * Determines whether the the two items are connected.
   *
   * @param source Shape, Connector, Point.
   * @param target Shape, Connector, Point.
   * @returns true if the two items are connected.
   */
  connected(source, target) {
    for (let i = 0; i < this.connections.length; i++) {
      const c = this.connections[i];
      if (c.from === source && c.to === target) {
        return true;
      }
    }
    return false;
  }
  /**
   * Adds connection to the diagram.
   *
   * @param connection Connection.
   * @param undoable Boolean.
   * @returns The newly created connection.
   */
  addConnection(connection, undoable) {
    if (undoable !== false) {
      this.undoRedoService.add(new AddConnectionUnit(connection, this), false);
    }
    connection.diagram = this;
    connection._setOptionsFromModel();
    connection.refresh();
    this.mainLayer.append(connection.visual);
    this.connections.push(connection);
    this.trigger(CHANGE, {
      added: [connection],
      removed: []
    });
    return connection;
  }
  /**
   * Adds shape to the diagram.
   *
   * @param item Shape, Point. If point is passed it will be created new Shape and positioned at that point.
   * @param options. The options to be passed to the newly created Shape.
   * @returns The newly created shape.
   */
  addShape(item, undoable) {
    let shape, shapeDefaults2 = this.options.shapeDefaults;
    if (item instanceof Shape) {
      shape = item;
      this._parseBounds(shape.bounds());
    } else if (!item.prototype) {
      shapeDefaults2 = deepExtend({}, shapeDefaults2, item || {});
      shape = new Shape(shapeDefaults2, this);
      this._parseBounds(shape.bounds());
    } else {
      return;
    }
    if (undoable !== false) {
      this.undoRedoService.add(new AddShapeUnit(shape, this), false);
    }
    this.shapes.push(shape);
    if (shape.diagram !== this) {
      this._shapesQuadTree.insert(shape);
      shape.diagram = this;
    }
    this.mainLayer.append(shape.visual);
    this.trigger(CHANGE, {
      added: [shape],
      removed: []
    });
    return shape;
  }
  /**
   * Removes items (or single item) from the diagram.
   *
   * @param items DiagramElement, Array of Items.
   * @param undoable.
   */
  remove(items, undoable) {
    items = Array.isArray(items) ? items.slice(0) : [items];
    const elements = splitDiagramElements(items);
    const shapes2 = elements.shapes;
    const connections = elements.connections;
    let i;
    if (!defined(undoable)) {
      undoable = true;
    }
    if (undoable) {
      this.undoRedoService.begin();
    }
    this._suspendModelRefresh();
    for (i = shapes2.length - 1; i >= 0; i--) {
      this._removeItem(shapes2[i], undoable, connections);
    }
    for (i = connections.length - 1; i >= 0; i--) {
      this._removeItem(connections[i], undoable);
    }
    this._resumeModelRefresh();
    if (undoable) {
      this.undoRedoService.commit(false);
    }
    this.trigger(CHANGE, {
      added: [],
      removed: items
    });
  }
  /** @hidden */
  _addConnection(connection, undoable) {
    if (this.options._addConnection) {
      return this.options._addConnection(connection, undoable);
    } else if (!this.trigger("add", {
      connection
    })) {
      this.addConnection(connection, undoable);
      connection._updateConnectors();
      return connection;
    }
  }
  /** @hidden */
  _addShape(shape, undoable) {
    if (this.options._addShape) {
      return this.options._addShape(shape, undoable);
    } else if (!this.trigger("add", {
      shape
    })) {
      return this.addShape(shape, undoable);
    }
  }
  /** @hidden */
  _parseBounds(bounds) {
    bounds.x = typeof bounds.x == "string" ? parseFloat(bounds.x) : bounds.x;
    bounds.y = typeof bounds.y == "string" ? parseFloat(bounds.y) : bounds.y;
  }
  /** @hidden */
  _shouldRefresh() {
    return !this._suspended;
  }
  /** @hidden */
  _suspendModelRefresh() {
    this._suspended = (this._suspended || 0) + 1;
  }
  /** @hidden */
  _resumeModelRefresh() {
    this._suspended = Math.max((this._suspended || 0) - 1, 0);
  }
  /** @hidden */
  _triggerRemove(items) {
    const toRemove = [];
    let item, args, editable;
    for (let idx = 0; idx < items.length; idx++) {
      item = items[idx];
      editable = item.options.editable;
      if (item instanceof Shape) {
        args = {
          shape: item
        };
      } else {
        args = {
          connection: item
        };
      }
      if (editable && editable.remove !== false && !this.trigger("remove", args)) {
        toRemove.push(item);
      }
    }
    return toRemove;
  }
  /** @hidden */
  _addConnections(connections, undoable) {
    const length = connections.length;
    for (let i = 0; i < length; i++) {
      const dataItem = connections[i];
      this._addConnectionDataItem(dataItem, undoable);
    }
  }
  /** @hidden */
  _addConnectionDataItem(dataItem, undoable) {
    if (!this._connectionsDataMap[dataItem.uid]) {
      let from = this._validateConnector(dataItem.from);
      if (!defined(from) || from === null) {
        from = new Point(dataItem.fromX, dataItem.fromY);
      }
      let to = this._validateConnector(dataItem.to);
      if (!defined(to) || to === null) {
        to = new Point(dataItem.toX, dataItem.toY);
      }
      if (defined(from) && defined(to)) {
        const options = deepExtend({}, this.options.connectionDefaults);
        options.dataItem = dataItem;
        const connection = new Connection(from, to, options);
        this._connectionsDataMap[dataItem.uid] = connection;
        this.addConnection(connection, undoable);
      }
    }
  }
  /** @hidden */
  _validateConnector(value) {
    let connector;
    if (defined(value) && value !== null) {
      connector = this._dataMap[value];
    }
    return connector;
  }
  /** @hidden */
  _addDataItems(items, parent) {
    let item, idx, shape, parentShape;
    for (idx = 0; idx < items.length; idx++) {
      item = items[idx];
      shape = this._addDataItemByUid(item);
      parentShape = this._addDataItemByUid(parent);
      if (parentShape && !this.connected(parentShape, shape)) {
        this.connect(parentShape, shape);
      }
    }
  }
  /**
   * Creates a connection between two endpoints (shapes, connectors, or points).
   * @param source The source endpoint
   * @param target The target endpoint
   * @param options Optional connection configuration
   * @returns The newly created connection
   */
  connect(source, target, options) {
    const resolvedOptions = deepExtend({}, this.options.connectionDefaults, options);
    const connection = new Connection(source, target, resolvedOptions);
    return this.addConnection(connection);
  }
  /**
   * Executes the next undoable action on top of the undo stack if any.
   */
  undo() {
    this.undoRedoService.undo();
  }
  /**
   * Executes the previous undoable action on top of the redo stack if any.
   */
  redo() {
    this.undoRedoService.redo();
  }
  /**
   * Selects items on the basis of the given input or returns the current selection if none.
   *
   * @param itemsOrRect DiagramElement, Array of elements, "All", false or Rect. A value 'false' will deselect everything.
   * @param options
   * @returns {Array} The currently selected items.
   */
  select(item, options) {
    if (isDefined(item)) {
      options = deepExtend({
        addToSelection: false
      }, options);
      const addToSelection = options.addToSelection, selected = [];
      let items = [], i, element;
      if (!addToSelection) {
        this.deselect();
      }
      this._internalSelection = true;
      if (item instanceof Array) {
        items = item;
      } else if (item instanceof DiagramElement) {
        items = [item];
      }
      for (i = 0; i < items.length; i++) {
        element = items[i];
        if (element.select(true)) {
          selected.push(element);
        }
      }
      this._selectionChanged(selected, []);
      this._internalSelection = false;
    } else {
      return this._selectedItems;
    }
  }
  /**
   * Selects all shapes and connections in the diagram.
   */
  selectAll() {
    this.select(this.shapes.concat(this.connections));
  }
  /**
   * Selects shapes and connections within a rectangular area.
   * @param rect The rectangular area to select items within
   */
  selectArea(rect) {
    let i, items, item;
    this._internalSelection = true;
    const selected = [];
    if (rect instanceof Rect) {
      items = this.shapes.concat(this.connections);
      for (i = 0; i < items.length; i++) {
        item = items[i];
        if ((!rect || item._hitTest(rect)) && item.options.enable) {
          if (item.select(true)) {
            selected.push(item);
          }
        }
      }
    }
    this._selectionChanged(selected, []);
    this._internalSelection = false;
  }
  /**
   * Deselects items from the current selection.
   * @param item The item(s) to deselect. If not provided, deselects all items.
   */
  deselect(item) {
    this._internalSelection = true;
    const deselected = [];
    let items = [], element, i;
    if (item instanceof Array) {
      items = item;
    } else if (item instanceof DiagramElement) {
      items.push(item);
    } else if (!isDefined(item)) {
      items = this._selectedItems.slice(0);
    }
    for (i = 0; i < items.length; i++) {
      element = items[i];
      if (element.select(false)) {
        deselected.push(element);
      }
    }
    this._selectionChanged([], deselected);
    this._internalSelection = false;
  }
  /**
   * Brings to front the passed items.
   *
   * @param items DiagramElement, Array of Items.
   * @param undoable. By default the action is undoable.
   */
  toFront(items, undoable) {
    if (!items) {
      items = this._selectedItems.slice();
    }
    const result = this._getDiagramItems(items);
    let indices;
    if (!defined(undoable) || undoable) {
      indices = indicesOfItems(this.mainLayer, result.visuals);
      const unit = new ToFrontUnit(this, items, indices);
      this.undoRedoService.add(unit);
    } else {
      this.mainLayer.toFront(result.visuals);
      this._fixOrdering(result, true);
    }
  }
  /**
   * Sends to back the passed items.
   *
   * @param items DiagramElement, Array of Items.
   * @param undoable. By default the action is undoable.
   */
  toBack(items, undoable) {
    if (!items) {
      items = this._selectedItems.slice();
    }
    const result = this._getDiagramItems(items);
    let indices;
    if (!defined(undoable) || undoable) {
      indices = indicesOfItems(this.mainLayer, result.visuals);
      const unit = new ToBackUnit(this, items, indices);
      this.undoRedoService.add(unit);
    } else {
      this.mainLayer.toBack(result.visuals);
      this._fixOrdering(result, false);
    }
  }
  /**
   * Bring into view the passed item(s) or rectangle.
   *
   * @param items DiagramElement, Array of Items, Rect.
   * @param options. align - controls the position of the calculated rectangle relative to the viewport.
   * "Center middle" will position the items in the center. animate - controls if the pan should be animated.
   */
  bringIntoView(item, options) {
    const viewport = this.viewport();
    const aligner = new RectAlign(viewport);
    let rect;
    if (viewport.width === 0 || viewport.height === 0) {
      return;
    }
    options = deepExtend({
      animate: false,
      align: "center middle"
    }, options);
    if (options.align === "none") {
      options.align = "center middle";
    }
    if (item instanceof DiagramElement) {
      rect = item.bounds(TRANSFORMED);
    } else if (Array.isArray(item)) {
      rect = this.boundingBox(item);
    } else if (item instanceof Rect) {
      rect = item.clone();
    }
    const original = rect.clone();
    rect.zoom(this._zoom);
    if (rect.width > viewport.width || rect.height > viewport.height) {
      this._zoom = this._getValidZoom(Math.min(viewport.width / original.width, viewport.height / original.height));
      rect = original.clone().zoom(this._zoom);
    }
    this._zoomMainLayer();
    const current2 = rect.clone();
    aligner.align(rect, options.align);
    const newPan = rect.topLeft().minus(current2.topLeft());
    this.pan(newPan.times(-1), options.animate);
  }
  /**
   * Aligns shapes in the specified direction.
   * @param direction The alignment direction ('left', 'right', 'top', 'bottom')
   */
  alignShapes(direction) {
    if (isUndefined(direction)) {
      direction = "Left";
    }
    let val, item, i;
    const items = this.select();
    if (items.length === 0) {
      return;
    }
    switch (direction.toLowerCase()) {
      case "left":
      case "top":
        val = MAX_VALUE;
        break;
      case "right":
      case "bottom":
        val = MIN_VALUE;
        break;
      default:
        break;
    }
    for (i = 0; i < items.length; i++) {
      item = items[i];
      if (item instanceof Shape) {
        switch (direction.toLowerCase()) {
          case "left":
            val = Math.min(val, item.options.x);
            break;
          case "top":
            val = Math.min(val, item.options.y);
            break;
          case "right":
            val = Math.max(val, item.options.x);
            break;
          case "bottom":
            val = Math.max(val, item.options.y);
            break;
          default:
            break;
        }
      }
    }
    const undoStates = [];
    const shapes2 = [];
    for (i = 0; i < items.length; i++) {
      item = items[i];
      if (item instanceof Shape) {
        shapes2.push(item);
        undoStates.push(item.bounds());
        switch (direction.toLowerCase()) {
          case "left":
          case "right":
            item.position(new Point(val, item.options.y));
            break;
          case "top":
          case "bottom":
            item.position(new Point(item.options.x, val));
            break;
          default:
            break;
        }
      }
    }
    const unit = new TransformUnit(shapes2, undoStates);
    this.undoRedoService.add(unit, false);
  }
  /**
   * Gets or sets the zoom level of the diagram.
   * @param zoom The zoom level to set (1.0 = 100%). If not provided, returns the current zoom.
   * @param options Options including the zoom point and metadata
   * @returns The current zoom level when used as a getter
   */
  zoom(zoom, options) {
    if (zoom) {
      let staticPoint = options ? options.point : new Point(0, 0);
      zoom = this._zoom = this._getValidZoom(zoom);
      if (!isUndefined(staticPoint)) {
        staticPoint = new Point(Math.round(staticPoint.x), Math.round(staticPoint.y));
        const zoomedPoint = staticPoint.times(zoom);
        const viewportVector = this.modelToView(staticPoint);
        const raw = viewportVector.minus(zoomedPoint);
        this._storePan(new Point(Math.round(raw.x), Math.round(raw.y)));
      }
      if (options) {
        options.zoom = zoom;
      }
      this._panTransform();
      if (this.canvas.surface.hideTooltip) {
        this.canvas.surface.hideTooltip();
      }
      this._updateAdorners();
    }
    return this._zoom;
  }
  /** @hidden */
  _getPan(pan) {
    const canvas = this.canvas;
    if (!canvas.translate) {
      pan = pan.plus(this._pan);
    }
    return pan;
  }
  /**
   * Gets or sets the pan offset of the diagram.
   * @param pan The pan offset as a Point. If not provided, returns the current pan.
   * @param animate Whether to animate the pan operation
   * @returns The current pan offset when used as a getter
   */
  pan(pan, animate) {
    if (pan instanceof Point) {
      const scroller = this.scroller;
      pan = this._getPan(pan);
      pan = pan.times(-1);
      if (animate) {
        scroller.animatedScrollTo(pan.x, pan.y, () => {
          this._updateAdorners();
        });
      } else {
        scroller.scrollTo(pan.x, pan.y);
        this._updateAdorners();
      }
    } else {
      return this._pan.times(-1);
    }
  }
  /**
   * Gets the viewport rectangle of the diagram.
   * @returns A Rect representing the current viewport
   */
  viewport() {
    const element = this.element;
    const width = elementWidth(element);
    let height = elementHeight(element);
    if (this.toolBar) {
      height -= outerHeight(this.toolBar.element);
    }
    return new Rect(0, 0, width, height);
  }
  /**
   * Copies the currently selected items to the clipboard.
   */
  copy() {
    if (this.options.copy.enabled) {
      this._clipboard.length = 0;
      this._copyOffset = 1;
      for (let i = 0; i < this._selectedItems.length; i++) {
        const item = this._selectedItems[i];
        this._clipboard.push(item);
      }
    }
  }
  /**
   * Cuts the currently selected items to the clipboard and removes them from the diagram.
   */
  cut() {
    if (this.options.copy.enabled) {
      this._clipboard.length = 0;
      this._copyOffset = 0;
      for (let i = 0; i < this._selectedItems.length; i++) {
        const item = this._selectedItems[i];
        this._clipboard.push(item);
      }
      this.remove(this._clipboard, true);
    }
  }
  /**
   * Pastes items from the clipboard into the diagram.
   */
  paste() {
    if (this._clipboard.length > 0) {
      let item, copied, i;
      const mapping = {};
      const elements = splitDiagramElements(this._clipboard);
      const connections = elements.connections;
      const shapes2 = elements.shapes;
      const offset = {
        x: this._copyOffset * this.options.copy.offsetX,
        y: this._copyOffset * this.options.copy.offsetY
      };
      this.deselect();
      for (i = 0; i < shapes2.length; i++) {
        item = shapes2[i];
        copied = item.clone();
        mapping[item.id] = copied;
        copied.position(new Point(item.options.x + offset.x, item.options.y + offset.y));
        copied.diagram = this;
        copied = this._addShape(copied);
        if (copied) {
          copied.select();
        }
      }
      for (i = 0; i < connections.length; i++) {
        item = connections[i];
        copied = this._addConnection(item.clone());
        if (copied) {
          this._updateCopiedConnection(copied, item, "source", mapping, offset);
          this._updateCopiedConnection(copied, item, "target", mapping, offset);
          copied.select(true);
          copied.updateModel();
        }
      }
      this._syncChanges();
      this._copyOffset += 1;
    }
  }
  /** @hidden */
  _syncChanges() {
    if (this.options._syncChanges) {
      this.options._syncChanges();
    }
  }
  /** @hidden */
  _syncConnectionChanges() {
    if (this.options._syncConnectionChanges) {
      this.options._syncConnectionChanges();
    }
  }
  /** @hidden */
  _syncShapeChanges() {
    if (this.options._syncShapeChanges) {
      this.options._syncShapeChanges();
    }
  }
  /** @hidden */
  _updateCopiedConnection(connection, sourceConnection, connectorName, mapping, offset) {
    let onActivate, inactiveItem, targetShape;
    const target = sourceConnection[connectorName]();
    if (target instanceof Connector && mapping[target.shape.id]) {
      targetShape = mapping[target.shape.id];
      if (this.getShapeById(targetShape.id)) {
        connection[connectorName](targetShape.getConnector(target.options.name));
      } else {
        inactiveItem = this._inactiveShapeItems.getByUid(targetShape.dataItem.uid);
        if (inactiveItem) {
          onActivate = (item) => {
            targetShape = this._dataMap[item.id];
            connection[connectorName](targetShape.getConnector(target.options.name));
            connection.updateModel();
          };
          this._deferredConnectionUpdates.push(inactiveItem.onActivate(onActivate));
        }
      }
    } else {
      connection[connectorName](new Point(sourceConnection[connectorName + "Point"]().x + offset.x, sourceConnection[connectorName + "Point"]().y + offset.y));
    }
  }
  /**
   * Gets the bounding rectangle of the given items.
   *
   * @param items DiagramElement, Array of elements.
   * @param origin Boolean. Pass 'true' if you need to get the bounding box of the shapes without their rotation offset.
   * @returns {Rect} The bounding rectangle of the items.
   */
  boundingBox(items, origin) {
    let rect = Rect.empty(), temp;
    const di = isDefined(items) ? this._getDiagramItems(items) : {
      shapes: this.shapes
    };
    if (di.shapes.length > 0) {
      let item = di.shapes[0];
      rect = item.bounds(ROTATED);
      for (let i = 1; i < di.shapes.length; i++) {
        item = di.shapes[i];
        temp = item.bounds(ROTATED);
        if (origin === true) {
          temp.x -= item._rotationOffset.x;
          temp.y -= item._rotationOffset.y;
        }
        rect = rect.union(temp);
      }
    }
    return rect;
  }
  /** @hidden */
  _containerOffset() {
    const containerOffset = elementOffset2(this.element);
    if (this.toolBar) {
      containerOffset.top += outerHeight(this.toolBar.element);
    }
    return containerOffset;
  }
  /**
   * Converts a point from document coordinates to view coordinates.
   * @param point The point in document coordinates
   * @returns The point in view coordinates
   */
  documentToView(point) {
    const containerOffset = this._containerOffset();
    return new Point(point.x - containerOffset.left, point.y - containerOffset.top);
  }
  /**
   * Converts a point from view coordinates to document coordinates.
   * @param point The point in view coordinates
   * @returns The point in document coordinates
   */
  viewToDocument(point) {
    const containerOffset = this._containerOffset();
    return new Point(point.x + containerOffset.left, point.y + containerOffset.top);
  }
  /**
   * Converts a point from view coordinates to model coordinates.
   * @param point The point in view coordinates
   * @returns The point in model coordinates
   */
  viewToModel(point) {
    return this._transformWithMatrix(point, this._matrixInvert);
  }
  /**
   * Converts a point from model coordinates to view coordinates.
   * @param point The point in model coordinates
   * @returns The point in view coordinates
   */
  modelToView(point) {
    return this._transformWithMatrix(point, this._matrix);
  }
  /**
   * Converts a point from model coordinates to layer coordinates.
   * @param point The point in model coordinates
   * @returns The point in layer coordinates
   */
  modelToLayer(point) {
    return this._transformWithMatrix(point, this._layerMatrix);
  }
  /**
   * Converts a point from layer coordinates to model coordinates.
   * @param point The point in layer coordinates
   * @returns The point in model coordinates
   */
  layerToModel(point) {
    return this._transformWithMatrix(point, this._layerMatrixInvert);
  }
  /**
   * Converts a point from document coordinates to model coordinates.
   * @param point The point in document coordinates
   * @returns The point in model coordinates
   */
  documentToModel(point) {
    const viewPoint = this.documentToView(point);
    if (!this.canvas.translate) {
      viewPoint.x = viewPoint.x + this.scroller.scrollLeft;
      viewPoint.y = viewPoint.y + this.scroller.scrollTop;
    }
    return this.viewToModel(viewPoint);
  }
  /**
   * Converts a point from model coordinates to document coordinates.
   * @param point The point in model coordinates
   * @returns The point in document coordinates
   */
  modelToDocument(point) {
    return this.viewToDocument(this.modelToView(point));
  }
  /** @hidden */
  _transformWithMatrix(point, matrix) {
    let result = point;
    if (point instanceof Point) {
      if (matrix) {
        result = matrix.apply(point);
      }
    } else {
      const tl = this._transformWithMatrix(point.topLeft(), matrix), br = this._transformWithMatrix(point.bottomRight(), matrix);
      result = Rect.fromPoints(tl, br);
    }
    return result;
  }
  /**
   * Performs a diagram layout of the given type.
   *
   * @param layoutType The layout algorithm to be applied (TreeLayout, LayeredLayout, SpringLayout).
   * @param options Layout-specific options.
   */
  layout(options) {
    this._layouting = true;
    let type;
    if (isUndefined(options)) {
      options = this.options.layout;
    }
    if (isUndefined(options) || isUndefined(options.type)) {
      type = "Tree";
    } else {
      type = options.type;
    }
    let l;
    switch (type.toLowerCase()) {
      case "tree":
        l = new TreeLayout(this);
        break;
      case "layered":
        l = new LayeredLayout(this);
        break;
      case "forcedirected":
      case "force":
      case "spring":
      case "springembedder":
        l = new SpringLayout(this);
        break;
      default:
        throw new Error("Layout algorithm '" + type + "' is not supported.");
    }
    const initialState = new LayoutState(this);
    const finalState = l.layout(options);
    if (finalState) {
      const unit = new LayoutUndoUnit(initialState, finalState, options ? options.animate : null);
      this.undoRedoService.add(unit);
    }
    this._layouting = false;
    this._redrawConnections();
  }
  /**
   * Gets a shape by its unique identifier.
   * @param {string} id The unique identifier of the shape
   * @returns {Shape} The shape with the specified ID, or undefined if not found
   */
  getShapeById(id) {
    let found;
    found = first(this.shapes, function(s) {
      return s.visual.id === id;
    });
    if (found) {
      return found;
    }
    found = first(this.connections, function(c) {
      return c.visual.id === id;
    });
    return found;
  }
  /**
   * Gets a shape by its model ID.
   * @param id The model ID of the shape
   * @returns The shape with the specified model ID, or undefined if not found
   */
  getShapeByModelId(id) {
    let shapeResult;
    if (this._isEditable) {
      shapeResult = this._dataMap[id];
    } else {
      shapeResult = first(this.shapes, function(shape) {
        return (shape.dataItem || {}).id === id;
      });
    }
    return shapeResult;
  }
  /**
   * Gets a shape by its model UID.
   * @param uid The model UID of the shape
   * @returns The shape with the specified model UID, or undefined if not found
   */
  getShapeByModelUid(uid) {
    let shapeResult;
    if (this._isEditable) {
      shapeResult = first(this.shapes, function(shape) {
        return (shape.dataItem || {}).uid === uid;
      });
    } else {
      shapeResult = this._dataMap[uid];
    }
    return shapeResult;
  }
  /** @hidden */
  _extendLayoutOptions(options) {
    if (options.layout) {
      options.layout = deepExtend({}, LayoutDefaultOptions, options.layout);
    }
  }
  /** @hidden */
  _selectionChanged(selected, deselected) {
    if (selected.length || deselected.length) {
      this.trigger(SELECT, {
        selected,
        deselected
      });
    }
  }
  /** @hidden */
  _getValidZoom(zoom) {
    return Math.min(Math.max(zoom, this.options.zoomMin), this.options.zoomMax);
  }
  /** @hidden */
  _panTransform(pos) {
    const pan = pos || this._pan;
    if (this.canvas.translate) {
      this.scroller.scrollTo(pan.x, pan.y);
      this._zoomMainLayer();
    } else {
      this._storePan(pan);
      this._transformMainLayer();
    }
  }
  /** @hidden */
  _finishPan() {
    this.trigger(PAN, {
      total: this._pan,
      delta: Number.NaN
    });
  }
  /** @hidden */
  _storePan(pan) {
    this._pan = pan;
    this._storeViewMatrix();
  }
  /** @hidden */
  _zoomMainLayer() {
    const zoom = this._zoom;
    const transform = new CompositeTransform(0, 0, zoom, zoom);
    transform.render(this.mainLayer);
    this._storeLayerMatrix(transform);
    this._storeViewMatrix();
  }
  /** @hidden */
  _transformMainLayer() {
    const pan = this._pan, zoom = this._zoom;
    const transform = new CompositeTransform(pan.x, pan.y, zoom, zoom);
    transform.render(this.mainLayer);
    this._storeLayerMatrix(transform);
    this._storeViewMatrix();
  }
  /** @hidden */
  _storeLayerMatrix(canvasTransform) {
    this._layerMatrix = canvasTransform.toMatrix();
    this._layerMatrixInvert = canvasTransform.invert().toMatrix();
  }
  /** @hidden */
  _storeViewMatrix() {
    const pan = this._pan, zoom = this._zoom;
    const transform = new CompositeTransform(pan.x, pan.y, zoom, zoom);
    this._matrix = transform.toMatrix();
    this._matrixInvert = transform.invert().toMatrix();
  }
  /** @hidden */
  _toIndex(items, indices) {
    const result = this._getDiagramItems(items);
    this.mainLayer.toIndex(result.visuals, indices);
    this._fixOrdering(result, false);
  }
  /** @hidden */
  _fixOrdering(result, toFront) {
    const shapePos = toFront ? this.shapes.length - 1 : 0, conPos = toFront ? this.connections.length - 1 : 0;
    let i, item;
    for (i = 0; i < result.shapes.length; i++) {
      item = result.shapes[i];
      remove(this.shapes, item);
      insert(this.shapes, item, shapePos);
    }
    for (i = 0; i < result.cons.length; i++) {
      item = result.cons[i];
      remove(this.connections, item);
      insert(this.connections, item, conPos);
    }
  }
  /** @hidden */
  _getDiagramItems(items) {
    let i, args = items;
    const result = {};
    result.visuals = [];
    result.shapes = [];
    result.cons = [];
    if (!items) {
      args = this._selectedItems.slice();
    } else if (!Array.isArray(items)) {
      args = [items];
    }
    for (i = 0; i < args.length; i++) {
      const item = args[i];
      if (item instanceof Shape) {
        result.shapes.push(item);
        result.visuals.push(item.visual);
      } else if (item instanceof Connection) {
        result.cons.push(item);
        result.visuals.push(item.visual);
      }
    }
    return result;
  }
  /** @hidden */
  _addDataItemByUid(dataItem) {
    if (!defined(dataItem)) {
      return;
    }
    let shape = this._dataMap[dataItem.uid];
    if (shape) {
      return shape;
    }
    const options = deepExtend({}, this.options.shapeDefaults);
    options.dataItem = dataItem;
    shape = new Shape(options, this);
    this.addShape(shape);
    this._dataMap[dataItem.uid] = shape;
    return shape;
  }
  /** @hidden */
  _addItem(item) {
    if (item instanceof Shape) {
      this.addShape(item);
    } else if (item instanceof Connection) {
      this.addConnection(item);
    }
  }
  /** @hidden */
  _toolBarClick(e) {
    this.trigger("toolBarClick", e);
    this._destroyToolBar();
  }
  /** @hidden */
  _normalizePointZoom(point) {
    return point.times(1 / this.zoom());
  }
  /** @hidden */
  _initialize() {
    this.shapes.length = 0;
    this.connections.length = 0;
    this._selectedItems.length = 0;
    Object.keys(this._dataMap).forEach((key) => {
      delete this._dataMap[key];
    });
    Object.keys(this._connectionsDataMap).forEach((key) => {
      delete this._connectionsDataMap[key];
    });
    this._deferredConnectionUpdates.length = 0;
    this.undoRedoService = new UndoRedoService({
      undone: this._syncChanges.bind(this),
      redone: this._syncChanges.bind(this)
    });
    this.undoRedoService.bind("undo", (args) => {
      this.trigger("undo", args);
    });
    this.undoRedoService.bind("redo", (args) => {
      this.trigger("redo", args);
    });
    this.id = randomId();
  }
  /** @hidden */
  _redrawConnections() {
    const connections = this.connections;
    for (let idx = 0; idx < connections.length; idx++) {
      connections[idx].refresh();
    }
  }
  /** @hidden */
  _adorn(adorner, isActive) {
    if (isActive !== void 0 && adorner) {
      if (isActive) {
        this._adorners.push(adorner);
        this.adornerLayer.append(adorner.visual);
      } else {
        remove(this._adorners, adorner);
        this.adornerLayer.remove(adorner.visual);
      }
    }
  }
  /** @hidden */
  _showConnectors(shape, value) {
    if (value) {
      this._connectorsAdorner.show(shape);
    } else {
      this._connectorsAdorner.destroy();
    }
  }
  /** @hidden */
  _updateAdorners() {
    const adorners = this._adorners;
    for (let i = 0; i < adorners.length; i++) {
      const adorner = adorners[i];
      if (adorner.refreshBounds) {
        adorner.refreshBounds();
      }
      adorner.refresh();
    }
  }
  /** @hidden */
  _refresh() {
    for (let i = 0; i < this.connections.length; i++) {
      this.connections[i].refresh();
    }
  }
  /** @hidden */
  _removeItem(item, undoable, removedConnections) {
    item.select(false);
    if (item instanceof Shape) {
      this._removeShapeDataItem(item);
      this._removeShape(item, undoable, removedConnections);
    } else if (item instanceof Connection) {
      this._removeConnectionDataItem(item);
      this._removeConnection(item, undoable);
    }
    this.mainLayer.remove(item.visual);
  }
  /** @hidden */
  _removeConnectionDataItem(item) {
    if (this._isEditable) {
      this.options._removeConnectionDataItem(item.dataItem);
      delete this._connectionsDataMap[item.dataItem.uid];
    }
  }
  /** @hidden */
  _removeShapeDataItem(item) {
    if (this._isEditable) {
      this.options._removeShapeDataItem(item.dataItem);
      delete this._dataMap[item.dataItem.id];
    }
  }
  /** @hidden */
  _removeShape(shape, undoable, removedConnections) {
    let i, connection, connector;
    const sources = [], targets = [];
    this.toolService._removeHover();
    if (undoable) {
      this.undoRedoService.addCompositeItem(new DeleteShapeUnit(shape));
    }
    remove(this.shapes, shape);
    this._shapesQuadTree.remove(shape);
    for (i = 0; i < shape.connectors.length; i++) {
      connector = shape.connectors[i];
      for (let j = 0; j < connector.connections.length; j++) {
        connection = connector.connections[j];
        if (!removedConnections || !contains(removedConnections, connection)) {
          if (connection.sourceConnector === connector) {
            sources.push(connection);
          } else if (connection.targetConnector === connector) {
            targets.push(connection);
          }
        }
      }
    }
    for (i = 0; i < sources.length; i++) {
      sources[i].source(null, undoable);
      sources[i].updateModel();
    }
    for (i = 0; i < targets.length; i++) {
      targets[i].target(null, undoable);
      targets[i].updateModel();
    }
  }
  /** @hidden */
  _removeConnection(connection, undoable) {
    if (connection.sourceConnector) {
      remove(connection.sourceConnector.connections, connection);
    }
    if (connection.targetConnector) {
      remove(connection.targetConnector.connections, connection);
    }
    if (undoable) {
      this.undoRedoService.addCompositeItem(new DeleteConnectionUnit(connection));
    }
    remove(this.connections, connection);
  }
  /** @hidden */
  _removeShapeConnections(shape) {
    const connections = shape.connections();
    let idx;
    if (connections) {
      for (idx = 0; idx < connections.length; idx++) {
        this._removeItem(connections[idx], false);
      }
    }
  }
  /** @hidden */
  _destroyToolBar() {
    this.options.destroyToolBar();
  }
  /** @hidden */
  _destroyGlobalToolBar() {
    if (this.toolBar) {
      this.toolBar = null;
    }
  }
  /** @hidden */
  _mobileOS() {
    return mobileOS;
  }
  /**
   * Exports the diagram's DOM visual representation for rendering or export purposes.
   * Creates a clipped group containing the canvas content with proper transformations.
   * @returns A drawing Group element containing the exported DOM visual
   */
  exportDOMVisual() {
    const viewBox = this.canvas._viewBox;
    const scrollOffset = geometry_exports.transform().translate(-viewBox.x, -viewBox.y);
    const viewRect = new geometry_exports.Rect([0, 0], [viewBox.width, viewBox.height]);
    const clipPath = drawing_exports.Path.fromRect(viewRect);
    const wrap = new drawing_exports.Group({
      transform: scrollOffset
    });
    const clipWrap = new drawing_exports.Group({
      clip: clipPath
    });
    const root = this.canvas.drawingElement.children[0];
    clipWrap.append(wrap);
    wrap.children.push(root);
    return clipWrap;
  }
  /**
   * Exports the diagram's visual representation with proper scaling based on zoom level.
   * Creates a scaled group containing the main layer content.
   * @returns A drawing Group element containing the exported visual with inverse zoom scaling
   */
  exportVisual() {
    const scaleX = 1 / this._zoom;
    const scale = geometry_exports.transform().scale(scaleX, scaleX);
    const wrap = new drawing_exports.Group({
      transform: scale
    });
    const root = this.mainLayer.drawingElement;
    wrap.children.push(root);
    return wrap;
  }
  /**
   * Updates the connection's underlying data model.
   * Calls the configured updateConnectionModel function if available.
   * @param connection The connection whose model should be updated
   * @param syncChanges Whether to synchronize changes immediately
   * @returns The result of the update operation, if any
   */
  updateConnectionModel(connection, syncChanges) {
    if (this.options.updateConnectionModel) {
      return this.options.updateConnectionModel(connection, syncChanges);
    }
  }
  /**
   * Updates the shape's underlying data model.
   * Calls the configured updateShapeModel function if available.
   * @param shape The shape whose model should be updated
   * @param syncChanges Whether to synchronize changes immediately
   * @returns The result of the update operation, if any
   */
  updateShapeModel(shape, syncChanges) {
    if (this.options.updateShapeModel) {
      return this.options.updateShapeModel(shape, syncChanges);
    }
  }
};

// node_modules/@progress/kendo-diagram-common/dist/es/theme.js
var elementStyles = (element) => element.ownerDocument.defaultView.getComputedStyle(element);
var getProp = (element, prop) => elementStyles(element).getPropertyValue(prop);
var colorCache;
var getColorProp = (element, prop) => {
  const value = getProp(element, prop);
  if (!value) {
    return void 0;
  }
  if (!colorCache) {
    colorCache = /* @__PURE__ */ new Map();
  }
  let color;
  if (colorCache.has(value)) {
    color = colorCache.get(value);
  } else {
    color = resolveElementColor(element, prop);
    colorCache.set(value, color);
  }
  return color;
};
var loadTheme = (element) => {
  const primaryBg = getColorProp(element, "--kendo-chart-primary-bg");
  const primaryContrast = getColorProp(element, "--kendo-chart-primary-contrast");
  const normalTextColor = getColorProp(element, "--kendo-chart-text");
  const normalBackground = getColorProp(element, "--kendo-color-surface");
  const selectionColor = "#0B99FF";
  return {
    shapeDefaults: {
      fill: {
        color: primaryBg
      },
      content: {
        color: primaryContrast
      },
      connectorDefaults: {
        fill: {
          color: selectionColor
        },
        stroke: {
          color: primaryContrast
        },
        hover: {
          fill: {
            color: selectionColor
          },
          stroke: {
            color: selectionColor
          }
        }
      }
    },
    editable: {
      resize: {
        handles: {
          width: 10,
          height: 10,
          stroke: {
            color: selectionColor
          },
          fill: {
            color: normalBackground
          },
          hover: {
            stroke: {
              color: selectionColor
            },
            fill: {
              color: selectionColor
            }
          }
        }
      }
    },
    selectable: {
      stroke: {
        color: selectionColor
      }
    },
    connectionDefaults: {
      stroke: {
        color: normalTextColor
      },
      content: {
        color: normalTextColor,
        bgColor: primaryContrast
      },
      selection: {
        handles: {
          fill: {
            color: primaryContrast
          },
          stroke: {
            color: normalTextColor
          },
          width: 8,
          height: 8
        },
        stroke: {
          color: normalTextColor
        }
      },
      editable: {
        points: {
          midpoint: {
            fill: {
              color: selectionColor
            },
            stroke: {
              color: primaryContrast,
              width: 1
            },
            radius: 4
          },
          vertex: {
            fill: {
              color: primaryContrast
            },
            stroke: {
              color: selectionColor,
              width: 2
            },
            radius: 3
          }
        }
      }
    }
  };
};

// node_modules/@progress/kendo-diagram-common/dist/es/data-mapping.js
function getByPath(obj, path) {
  if (!path) return void 0;
  return path.split(".").reduce((acc, k) => isUndefined(acc) ? acc : acc[k], obj);
}
function pick(src, pathOrFn) {
  if (typeof pathOrFn === "function") {
    return pathOrFn(src);
  }
  return getByPath(src, pathOrFn);
}
var applyMapping = (src, mapping) => {
  return src.map((row) => {
    const item = {};
    Object.keys(mapping).forEach((key) => {
      const mappingKey = key;
      const value = pick(row, mapping[mappingKey]);
      if (value !== void 0) {
        item[mappingKey] = value;
      }
    });
    return item;
  });
};
var convertToDiagramModel = (input, mapping) => {
  const {
    source: shapesSourceCollection,
    map: shapesMapping
  } = mapping.shapes;
  const shapesData = pick(input, shapesSourceCollection) || [];
  const shapes2 = applyMapping(shapesData, shapesMapping);
  const {
    source: connectionsSourceCollection,
    map: connectionsMapping
  } = mapping.connections;
  const connectionsData = pick(input, connectionsSourceCollection) || [];
  const connections = applyMapping(connectionsData, connectionsMapping);
  return {
    shapes: shapes2,
    connections
  };
};

// node_modules/@progress/kendo-diagram-common/dist/es/tooltip.js
function documentToView(p, diagramRect, zoom, pan) {
  return {
    x: diagramRect.left + p.x * zoom - pan.x,
    y: diagramRect.top + p.y * zoom - pan.y
  };
}
function documentRectToView(r, diagramRect, zoom, pan) {
  const tl = documentToView({
    x: r.x,
    y: r.y
  }, diagramRect, zoom, pan);
  return new Rect(tl.x, tl.y, r.width * zoom, r.height * zoom);
}
function nearestPointOnPolyline(poly, p) {
  let best = {
    point: poly[0],
    segIdx: 0,
    t: 0,
    dist2: Number.POSITIVE_INFINITY
  };
  for (let i = 0; i < poly.length - 1; i++) {
    const a = poly[i], b = poly[i + 1];
    const ab = {
      x: b.x - a.x,
      y: b.y - a.y
    };
    const ap = {
      x: p.x - a.x,
      y: p.y - a.y
    };
    const ab2 = ab.x * ab.x + ab.y * ab.y || 1e-9;
    const t = Math.max(0, Math.min(1, (ap.x * ab.x + ap.y * ab.y) / ab2));
    const proj = {
      x: a.x + ab.x * t,
      y: a.y + ab.y * t
    };
    const dx = p.x - proj.x, dy = p.y - proj.y, d2 = dx * dx + dy * dy;
    if (d2 < best.dist2) best = {
      point: proj,
      segIdx: i,
      t,
      dist2: d2
    };
  }
  return best;
}
var GAP = 10;
var MARGIN = 8;
function candidateRect(pos, anchor, tipW, tipH) {
  switch (pos) {
    case "right":
      return new Rect(anchor.x + GAP, anchor.y - tipH / 2, tipW, tipH);
    case "left":
      return new Rect(anchor.x - GAP - tipW, anchor.y - tipH / 2, tipW, tipH);
    case "bottom":
      return new Rect(anchor.x - tipW / 2, anchor.y + GAP, tipW, tipH);
    case "top":
      return new Rect(anchor.x - tipW / 2, anchor.y - GAP - tipH, tipW, tipH);
  }
}
function overflowScore(r, bounds) {
  const leftOv = Math.max(0, bounds.left - r.x + MARGIN);
  const topOv = Math.max(0, bounds.top - r.y + MARGIN);
  const rightOv = Math.max(0, r.x + r.width - (bounds.right - MARGIN));
  const bottomOv = Math.max(0, r.y + r.height - (bounds.bottom - MARGIN));
  return leftOv + topOv + rightOv + bottomOv;
}
function segmentBufferRect(a, b, strokeHit) {
  const minX = Math.min(a.x, b.x), maxX = Math.max(a.x, b.x);
  const minY = Math.min(a.y, b.y), maxY = Math.max(a.y, b.y);
  return new Rect(minX - strokeHit / 2, minY - strokeHit / 2, maxX - minX + strokeHit, maxY - minY + strokeHit);
}
var positionsPriority = ["right", "left", "bottom", "top"];
function placeTooltip(options) {
  const {
    hovered,
    shapes: shapes2,
    connections,
    diagramRect,
    zoom,
    pan,
    tooltipSize,
    viewportBounds,
    mouse
  } = options;
  const boundsForFit = viewportBounds;
  let anchorView;
  let shapeAnchors;
  if (hovered.name === SHAPE) {
    const rDocument = hovered.bounds();
    const rView = documentRectToView(rDocument, diagramRect, zoom, pan);
    const anchors = {
      right: {
        x: rView.x + rView.width,
        y: rView.y + rView.height / 2
      },
      left: {
        x: rView.x,
        y: rView.y + rView.height / 2
      },
      bottom: {
        x: rView.x + rView.width / 2,
        y: rView.y + rView.height
      },
      top: {
        x: rView.x + rView.width / 2,
        y: rView.y
      }
    };
    shapeAnchors = anchors;
  } else {
    const poly = hovered.allPoints();
    const near = nearestPointOnPolyline(poly, mouse);
    anchorView = documentToView(near.point, diagramRect, zoom, pan);
  }
  const shapeRectsView = shapes2.map((r) => documentRectToView(r, diagramRect, zoom, pan));
  const strokeHit = 10;
  const segRectsView = [];
  for (const poly of connections) {
    for (let i = 0; i < poly.length - 1; i++) {
      const aView = documentToView(poly[i], diagramRect, zoom, pan);
      const bView = documentToView(poly[i + 1], diagramRect, zoom, pan);
      segRectsView.push(segmentBufferRect(aView, bView, strokeHit));
    }
  }
  const candidates = [];
  for (const pos of positionsPriority) {
    const anchor = hovered.name === SHAPE ? shapeAnchors[pos] : anchorView;
    const rect = candidateRect(pos, anchor, tooltipSize.width, tooltipSize.height);
    const ov = overflowScore(rect, boundsForFit);
    let hits = 0;
    for (const r of shapeRectsView) if (rect.overlaps(r)) {
      hits++;
      break;
    }
    for (const r of segRectsView) if (rect.overlaps(r)) {
      hits++;
      break;
    }
    candidates.push({
      pos,
      rect,
      ov,
      hits
    });
  }
  candidates.sort((a, b) => a.ov - b.ov || a.hits - b.hits || positionsPriority.indexOf(a.pos) - positionsPriority.indexOf(b.pos));
  const best = candidates[0];
  const finalRect = best.ov === 0 ? best.rect : clampRect(best.rect, boundsForFit);
  return {
    left: finalRect.x,
    top: finalRect.y,
    position: best.pos
  };
}
function clampRect(r, bounds) {
  let x = r.x, y = r.y;
  if (x < bounds.left + MARGIN) x = bounds.left + MARGIN;
  if (y < bounds.top + MARGIN) y = bounds.top + MARGIN;
  if (x + r.width > bounds.right - MARGIN) x = bounds.right - MARGIN - r.width;
  if (y + r.height > bounds.bottom - MARGIN) y = bounds.bottom - MARGIN - r.height;
  return new Rect(x, y, r.width, r.height);
}

// node_modules/@progress/kendo-angular-diagrams/fesm2022/progress-kendo-angular-diagrams.mjs
var _c0 = ["defaultTemplate"];
var _c1 = ["customTooltipTemplate"];
var _c2 = (a0) => ({
  $implicit: a0
});
function DiagramComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 2);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("licenseMessage", ctx_r0.licenseMessage);
  }
}
function DiagramComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 3);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.customTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c2, ctx_r0.dataItem));
  }
}
function DiagramComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵtextInterpolate1(" ", ctx_r0.dataItem == null ? null : ctx_r0.dataItem.tooltipText, " ");
  }
}
var packageMetadata = {
  name: "@progress/kendo-angular-diagrams",
  productName: "Kendo UI for Angular",
  productCode: "KENDOUIANGULAR",
  productCodes: ["KENDOUIANGULAR"],
  publishDate: 1768393344,
  version: "21.4.1",
  licensingDocsUrl: "https://www.telerik.com/kendo-angular-ui/my-license/?utm_medium=product&utm_source=kendoangular&utm_campaign=kendo-ui-angular-purchase-license-keys-warning"
};
var DEFAULT_NAVIGABLE_OPTIONS = {
  enabled: true,
  smallStep: 1,
  largeStep: 5
};
var ShapeTooltipTemplateDirective = class _ShapeTooltipTemplateDirective {
  /**
   * @hidden
   */
  templateRef;
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static ɵfac = function ShapeTooltipTemplateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ShapeTooltipTemplateDirective)(ɵɵdirectiveInject(TemplateRef));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _ShapeTooltipTemplateDirective,
    selectors: [["", "kendoDiagramShapeTooltipTemplate", ""]],
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShapeTooltipTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoDiagramShapeTooltipTemplate]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var ConnectionTooltipTemplateDirective = class _ConnectionTooltipTemplateDirective {
  /**
   * @hidden
   */
  templateRef;
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static ɵfac = function ConnectionTooltipTemplateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConnectionTooltipTemplateDirective)(ɵɵdirectiveInject(TemplateRef));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _ConnectionTooltipTemplateDirective,
    selectors: [["", "kendoDiagramConnectionTooltipTemplate", ""]],
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConnectionTooltipTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoDiagramConnectionTooltipTemplate]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var DiagramComponent = class _DiagramComponent {
  wrapperElement;
  renderer;
  zone;
  popupService;
  viewContainer;
  diagramClass = true;
  /**
   * Defines the default configuration options applicable to all connections.
   *
   */
  connectionDefaults;
  /**
   * Defines the connections that render between the shapes in the `Diagram` (see [Connections article](slug:diagram_connections)).
   * Accepts either an array of `ConnectionOptions` or an array of any objects
   * that will be mapped using the `connectionModelFields` configuration.
   *
   */
  connections = [];
  /**
   * Defines the field mapping configuration for connections data binding ([see example](slug:diagram_data_binding#field-mapping)).
   * Maps source object properties to `Diagram` connection properties.
   * Only used when `connections` is an array of custom objects instead of `ConnectionOptions`.
   */
  connectionModelFields;
  /**
   * A set of settings to configure the `Diagram` behavior when the user attempts to drag, resize, or remove shapes.
   * Changing the property value dynamically triggers a reinitialization of the `Diagram`.
   *
   * @default true
   */
  editable = true;
  /**
   * Defines the layout configuration for arranging shapes and connections in the `Diagram` (see [Layout article](slug:diagram_layouts)).
   *
   */
  layout;
  /**
   * Defines the pannable options. Use this setting to disable `Diagram` pan or change the key that activates the pan behavior.
   *
   * @default true
   */
  pannable = true;
  /**
   * Defines the `Diagram` selection options.
   *
   * By default, you can select shapes in the `Diagram` in one of two ways:
   * - Clicking a single shape to select it and deselect any previously selected shapes.
   * - Holding the `Ctrl/Cmd on MacOS` key while clicking multiple shapes to select them and any other shapes between them.
   *
   * Use the `selectable` configuration to allow single selection only, enable selection by drawing a rectangular area with the mouse around shapes in the canvas, or disable selection altogether.
   *
   * @default true
   */
  selectable = true;
  /**
   * Defines the default configuration options applicable to all shapes.
   */
  shapeDefaults;
  /**
   * Defines the shapes that render in the `Diagram` (see [Shapes article](slug:diagram_shapes)).
   * Accepts either an array of `ShapeOptions` or an array of any objects
   * that will be mapped using the `shapeModelFields` configuration.
   *
   */
  shapes = [];
  /**
   * Defines the field mapping configuration for shapes data binding ([see example](slug:diagram_data_binding#field-mapping)).
   * Maps source object properties to `Diagram` shape properties.
   * Only used when `shapes` is an array of custom objects instead of `ShapeOptions`.
   */
  shapeModelFields;
  /**
   * Defines the zoom level of the `Diagram`.
   *
   * @default 1
   */
  zoom = 1;
  /**
   * Defines the maximum zoom level of the `Diagram`.
   *
   * @default 2
   */
  zoomMax = 2;
  /**
   * Defines the minimum zoom level of the `Diagram`.
   *
   * @default 0.1
   */
  zoomMin = 0.1;
  /**
   * Defines the zoom rate of the `Diagram`.
   *
   * @default 0.1
   */
  zoomRate = 0.1;
  /**
   * Enables keyboard navigation in the `Diagram`.
   * When set to `true`, navigate between shapes using arrow keys.
   * Alternatively, pass a `DiagramNavigationOptions` object to customize navigation behavior.
   *
   * @default true
   */
  set navigable(_navigable) {
    if (typeof _navigable === "boolean") {
      this._navigable = _navigable ? DEFAULT_NAVIGABLE_OPTIONS : __spreadProps(__spreadValues({}, DEFAULT_NAVIGABLE_OPTIONS), {
        enabled: false
      });
    } else {
      this._navigable = _navigable;
      this._navigable.enabled = isPresent(this._navigable.enabled) ? this._navigable.enabled : true;
    }
    this.options = __spreadProps(__spreadValues({}, this.options), {
      navigation: this.getNormalizedNavigationOptions()
    });
    this.diagramWidget?.setOptions(this.options);
  }
  get navigable() {
    return this._navigable;
  }
  /**
   * Fires when a shape or connection is created or removed.
   */
  change = new EventEmitter();
  /**
   * Fires when the user clicks on a shape or a connection.
   */
  diagramClick = new EventEmitter();
  /**
   * Fires when the user drags an item.
   */
  drag = new EventEmitter();
  /**
   * Fires when the user stops dragging an item.
   */
  dragEnd = new EventEmitter();
  /**
   * Fires when the user starts dragging an item.
   */
  dragStart = new EventEmitter();
  /**
   * Fires when the location or size of an item are changed.
   */
  shapeBoundsChange = new EventEmitter();
  /**
   * Fires when the mouse pointer enters a shape or connection.
   */
  mouseEnter = new EventEmitter();
  /**
   * Fires when the mouse pointer leaves a shape or connection.
   */
  mouseLeave = new EventEmitter();
  /**
   * Fires when the user pans the `Diagram`.
   */
  onPan = new EventEmitter();
  /**
   * Fires when the user selects one or more items.
   */
  onSelect = new EventEmitter();
  /**
   * Fires when the `Diagram` has finished zooming out.
   */
  zoomEnd = new EventEmitter();
  /**
   * Fires when the `Diagram` starts zooming in or out.
   */
  zoomStart = new EventEmitter();
  /**
   * Fires when a tooltip should shown for a shape or connection.
   */
  tooltipShow = new EventEmitter();
  /**
   * Fires when a tooltip should be hidden.
   */
  tooltipHide = new EventEmitter();
  /**
   * @hidden
   * Represents the Diagram instance, holding the core functionality of the Diagram.
   */
  diagramWidget;
  /**
   * The currently selected items in the `Diagram`.
   */
  get selection() {
    return this.diagramWidget?.select();
  }
  /**
   * The actual shapes created by the `Diagram`.
   */
  get diagramShapes() {
    return this.diagramWidget?.shapes;
  }
  /**
   * The actual connections created by the `Diagram`.
   */
  get diagramConnections() {
    return this.diagramWidget?.connections;
  }
  /**
   * @hidden
   */
  showLicenseWatermark = false;
  /**
   * @hidden
   */
  licenseMessage;
  /**
   * @hidden
   */
  customTemplate;
  _navigable = DEFAULT_NAVIGABLE_OPTIONS;
  options = {
    shapes: this.shapes,
    connections: this.connections,
    selectable: this.selectable,
    editable: this.editable,
    zoom: this.zoom,
    zoomMax: this.zoomMax,
    zoomMin: this.zoomMin,
    zoomRate: this.zoomRate,
    shapeDefaults: this.shapeDefaults,
    connectionDefaults: this.connectionDefaults,
    navigation: this.getNormalizedNavigationOptions()
  };
  /**
   * Stores the converted shapes from user data.
   */
  convertedShapes = [];
  /**
   * Stores the converted connections from user data.
   */
  convertedConnections = [];
  /**
   * Current popup instance for tooltip.
   */
  tooltipPopup;
  defaultTooltipTemplate;
  customTooltipTemplate;
  shapeTooltipTemplate;
  connectionTooltipTemplate;
  /**
   * @hidden
   * The original data item provided by the user. Passed in the tooltip template context.
   */
  dataItem;
  constructor(wrapperElement, renderer, zone, popupService, viewContainer) {
    this.wrapperElement = wrapperElement;
    this.renderer = renderer;
    this.zone = zone;
    this.popupService = popupService;
    this.viewContainer = viewContainer;
    const isValid = A(packageMetadata);
    this.licenseMessage = getLicenseMessage(packageMetadata);
    this.showLicenseWatermark = shouldShowValidationUI(isValid);
  }
  ngOnChanges(changes) {
    if (changes["shapes"] || changes["connections"] || changes["shapeModelFields"] || changes["connectionModelFields"]) {
      this.convertUserData();
      this.options = __spreadProps(__spreadValues({}, this.options), {
        shapes: this.convertedShapes,
        connections: this.convertedConnections
      });
      this.loadOptions(this.options);
    }
    if (changes["connectionDefaults"]) {
      this.options.connectionDefaults = __spreadValues(__spreadValues({}, this.options.connectionDefaults), this.connectionDefaults);
      this.loadOptions(this.options);
    }
    if (changes["shapeDefaults"]) {
      this.options.shapeDefaults = __spreadValues(__spreadValues({}, this.options.shapeDefaults), this.shapeDefaults);
      this.loadOptions(this.options);
    }
    if (changes["editable"]) {
      this.options = __spreadProps(__spreadValues({}, this.options), {
        editable: this.editable
      });
      if (this.diagramWidget) {
        this.diagramWidget.destroy();
        this.init();
        this.bindDiagramEvents();
      }
    }
    if (changes["zoomMax"]) {
      this.updateOptions("zoomMax");
    }
    if (changes["zoomMin"]) {
      this.updateOptions("zoomMin");
    }
    if (changes["zoomRate"]) {
      this.updateOptions("zoomRate");
    }
    if (changes["selectable"]) {
      this.updateOptions("selectable");
    }
    if (changes["layout"]) {
      this.updateOptions("layout");
      this.diagramWidget?.layout(this.options.layout);
    }
    if (changes["pannable"]) {
      this.updateOptions("pannable");
    }
    if (changes["zoom"]) {
      this.updateOptions("zoom");
      this.diagramWidget?.zoom(this.diagramWidget.options.zoom);
    }
  }
  ngAfterViewInit() {
    this.convertUserData();
    this.options.shapes = this.convertedShapes;
    this.options.connections = this.convertedConnections;
    this.renderer.setStyle(this.wrapperElement.nativeElement, "display", "block");
    this.init();
    this.bindDiagramEvents();
  }
  ngOnDestroy() {
    this.hideTooltip();
    this.diagramWidget?.destroy();
  }
  /**
   * Provides the current `Diagram`'s shapes and connections that can be used to create a new `Diagram` when needed.
   * @returns {DiagramState} Object containing shapes and connections arrays.
   */
  getState() {
    return this.diagramWidget?.save();
  }
  /**
   * Focuses the `Diagram`.
   * @returns {boolean} true if focus was set successfully.
   */
  focus() {
    return this.diagramWidget?.focus();
  }
  /**
   * Clears the `Diagram`.
   */
  clear() {
    this.diagramWidget?.clear();
  }
  /**
   * Determines whether two shapes are connected.
   * @param {Shape} Shape.
   * @param {Shape} Shape.
   * @returns {boolean} true if the two shapes are connected.
   */
  connected(source, target) {
    return this.diagramWidget?.connected(source, target);
  }
  /**
   * Adds connection to the `Diagram`.
   * @param {Connection} Connection.
   * @param {boolean} Boolean.
   * @returns {Connection} The newly created connection.
   */
  addConnection(connection, undoable) {
    const newConnection = this.diagramWidget?.addConnection(connection, undoable);
    return newConnection;
  }
  /**
   * Adds shape to the `Diagram`.
   * @param {ShapeOptions | Shape | Point} If you pass a `Point`, a new Shape with default options will be created and positioned at that point.
   * @param {boolean} Boolean indicating if the action should be undoable.
   * @returns {Shape} The newly created shape.
   */
  addShape(item, undoable) {
    const newShape = this.diagramWidget?.addShape(item, undoable);
    return newShape;
  }
  /**
   * Removes shape(s) and/or connection(s) from the `Diagram`.
   * @param {Shape | Connection | (Shape | Connection)[]} Shape, Connection or an Array of Shapes and/or Connections.
   * @param {Boolean} Boolean indicating if the action should be undoable.
   */
  remove(items, undoable) {
    this.diagramWidget?.remove(items, undoable);
  }
  /**
   * Connects two items in the `Diagram`.
   * @param {Shape | Connector | Point} Shape, Shape's Connector or Point.
   * @param {Shape | Connector | Point} Shape, Shape's Connector or Point.
   * @param {ConnectionOptions} Connection options.
   * @returns {Connection} The created connection.
   */
  connect(source, target, options) {
    return this.diagramWidget?.connect(source, target, options);
  }
  /**
   * Executes the next undoable action on top of the undo stack if any.
   */
  undo() {
    this.diagramWidget?.undo();
  }
  /**
   * Executes the previous undoable action on top of the redo stack if any.
   */
  redo() {
    this.diagramWidget?.redo();
  }
  /**
   * Selects items on the basis of the given input.
   * @param {Shape | Connection | (Shape | Connection)[]} Shape, Connection or an Array of Shapes and/or Connections.
   * @param Selection options.
   * @returns {(Shape | Connection)[]} Array of selected items.
   */
  select(items, options) {
    return this.diagramWidget?.select(items, options);
  }
  /**
   * Selects all items in the `Diagram`.
   */
  selectAll() {
    this.diagramWidget?.selectAll();
  }
  /**
   * Selects items in the specified area.
   * @param {Rect} rect Rectangle area to select.
   */
  selectArea(rect) {
    this.diagramWidget?.selectArea(rect);
  }
  /**
   * Deselects the specified items or all items if no item is specified.
   * @param {Shape | Connection | (Shape | Connection)[]} Shape, Connection or an Array of Shapes and/or Connections.
   */
  deselect(items) {
    this.diagramWidget?.deselect(items);
  }
  /**
   * Brings to front the passed items.
   * @param {Shape | Connection | (Shape | Connection)[]} Shape, Connection or an Array of Shapes and/or Connections.
   * @param {boolean} By default the action is undoable.
   */
  bringToFront(items, undoable) {
    this.diagramWidget?.toFront(items, undoable);
  }
  /**
   * Sends to back the passed items.
   * @param {Shape | Connection | (Shape | Connection)[]} Shape, Connection or an Array of Shapes and/or Connections.
   * @param {boolean} By default the action is undoable.
   */
  bringToBack(items, undoable) {
    this.diagramWidget?.toBack(items, undoable);
  }
  /**
   * Bring into view the passed item(s) or rectangle.
   * @param {Shape | Connection | (Shape | Connection)[]} Shape, Connection or an Array of Shapes and/or Connections.
   * @param {DiagramAlignOptions} controls the position of the calculated rectangle relative to the viewport.
   * "Center middle" will position the items in the center. animate - controls if the pan should be animated.
   */
  bringIntoView(item, options) {
    this.diagramWidget?.bringIntoView(item, options);
  }
  /**
   * Aligns shapes in the specified direction.
   * @param {Direction} Direction to align shapes.
   */
  alignShapes(direction) {
    this.diagramWidget?.alignShapes(direction);
  }
  /**
   * @hidden
   * Pans the Diagram.
   * @param {Point} Pan coordinates.
   * @param {boolean} Whether to animate the pan.
   * @returns {Point} Current pan position.
   */
  pan(pan, animate) {
    return this.diagramWidget?.pan(pan, animate);
  }
  /**
   * Gets the current `Diagram` viewport rectangle.
   * @returns {Rect} Viewport rectangle.
   */
  viewport() {
    return this.diagramWidget?.viewport();
  }
  /**
   * Copies selected items to clipboard.
   */
  copy() {
    this.diagramWidget?.copy();
  }
  /**
   * @hidden
   * Cuts selected items to clipboard.
   */
  cut() {
    this.diagramWidget?.cut();
  }
  /**
   * Pastes items from clipboard.
   */
  paste() {
    this.diagramWidget?.paste();
  }
  /**
   * Gets the bounding rectangle of the given items.
   * @param {Shape | Connection | (Shape | Connection)[]} Shape, Connection or an Array of Shapes and/or Connections.
   * @param {boolean} Pass 'true' if you need to get the bounding box of the shapes without their rotation offset.
   * @returns {Rect} Bounding rectangle.
   */
  boundingBox(items, origin) {
    return this.diagramWidget?.boundingBox(items, origin);
  }
  /**
   * Converts document coordinates to view coordinates.
   * @param {Point} Point in document coordinates.
   * @returns {Point} Point in view coordinates.
   */
  documentToView(point) {
    return this.diagramWidget?.documentToView(point);
  }
  /**
   * Converts view coordinates to document coordinates.
   * @param {Point} Point in view coordinates.
   * @returns {Point} Point in document coordinates.
   */
  viewToDocument(point) {
    return this.diagramWidget?.viewToDocument(point);
  }
  /**
   * Converts view coordinates to model coordinates.
   * @param {Point} Point in view coordinates.
   * @returns {Point} Point in model coordinates.
   */
  viewToModel(point) {
    return this.diagramWidget?.viewToModel(point);
  }
  /**
   * Converts model coordinates to view coordinates.
   * @param {Point} Point in model coordinates.
   * @returns {Point} Point in view coordinates.
   */
  modelToView(point) {
    return this.diagramWidget?.modelToView(point);
  }
  /**
   * Converts model coordinates to layer coordinates.
   * @param {Point} Point in model coordinates.
   * @returns {Point} Point in layer coordinates.
   */
  modelToLayer(point) {
    return this.diagramWidget?.modelToLayer(point);
  }
  /**
   * Converts layer coordinates to model coordinates.
   * @param {Point} Point in layer coordinates.
   * @returns {Point} Point in model coordinates.
   */
  layerToModel(point) {
    return this.diagramWidget?.layerToModel(point);
  }
  /**
   * Converts document coordinates to model coordinates.
   * @param {Point} Point in document coordinates.
   * @returns {Point} Point in model coordinates.
   */
  documentToModel(point) {
    return this.diagramWidget?.documentToModel(point);
  }
  /**
   * Converts model coordinates to document coordinates.
   * @param {Point} Point in model coordinates.
   * @returns {Point} Point in document coordinates.
   */
  modelToDocument(point) {
    return this.diagramWidget?.modelToDocument(point);
  }
  /**
   * Gets a shape on the basis of its identifier.
   * @param {string} The identifier of a shape.
   * @returns {Shape} The shape with the specified ID.
   */
  getShapeById(id) {
    return this.diagramWidget?.getShapeById(id);
  }
  /**
   * Exports the diagram's DOM visual representation for rendering or export purposes.
   * Creates a clipped group containing the canvas content with proper transformations.
   * @returns {Group} A drawing Group element containing the exported DOM visual
   */
  exportDOMVisual() {
    return this.diagramWidget?.exportDOMVisual();
  }
  /**
   * Exports the diagram's visual representation with proper scaling based on zoom level.
   * Creates a scaled group containing the main layer content.
   * @returns {Group} A drawing Group element containing the exported visual with inverse zoom scaling
   */
  exportVisual() {
    return this.diagramWidget?.exportVisual();
  }
  /**
   * Handles the tooltipShow event from the diagram widget.
   */
  handleTooltipShow(event) {
    this.hideTooltip();
    const dataItem = event.item.dataItem;
    const isShape = event.item.name === "Shape";
    const isConnection = event.item.name === "Connection";
    this.setCustomTemplate(isShape, isConnection);
    const defaultsEnabled = isShape ? this.options.shapeDefaults?.tooltip?.visible : this.options.connectionDefaults?.tooltip?.visible;
    const itemTooltipEnabled = dataItem.tooltip?.visible;
    const optionsArray = isShape ? this.options.shapes : this.options.connections;
    const optionsItem = optionsArray?.find((item) => item.id === event.item.id);
    const hasTooltipText = !!dataItem.tooltipText || !!optionsItem?.tooltipText;
    if (!dataItem.tooltipText && optionsItem?.tooltipText) {
      dataItem.tooltipText = optionsItem.tooltipText;
    }
    const shouldShowTooltip = itemTooltipEnabled !== false && hasTooltipText && (defaultsEnabled || itemTooltipEnabled);
    if (shouldShowTooltip) {
      this.dataItem = dataItem;
      let popupContent = this.defaultTooltipTemplate;
      const showCustomTemplate = Boolean(isShape && this.shapeTooltipTemplate || isConnection && this.connectionTooltipTemplate);
      if (showCustomTemplate) {
        popupContent = this.customTooltipTemplate;
      }
      const popupClass = this.popupClass(isShape, dataItem);
      this.showTooltip(event, popupContent, popupClass);
    }
  }
  showTooltip(event, content, popupClass) {
    this.tooltipPopup = this.popupService.open({
      content,
      appendTo: this.viewContainer,
      popupClass,
      animate: false
    });
    const contentElement = this.tooltipPopup.popupElement.querySelector(".k-popup");
    if (content === this.defaultTooltipTemplate) {
      this.renderer.addClass(contentElement, "k-tooltip");
    }
    const popupElementRect = contentElement.getBoundingClientRect();
    const zoom = event.item.diagram.zoom();
    const pan = event.item.diagram.pan();
    const diagramRect = this.diagramWidget.element.getBoundingClientRect();
    const win = this.diagramWidget.element.ownerDocument.defaultView;
    const lines = this.diagramWidget.connections.map((con) => con.allPoints());
    const shapes2 = this.diagramWidget.shapes.map((shp) => shp.bounds());
    const pos = placeTooltip({
      hovered: event.item,
      mouse: event.point,
      shapes: shapes2,
      connections: lines,
      diagramRect,
      zoom,
      pan,
      tooltipSize: {
        width: popupElementRect.width,
        height: popupElementRect.height
      },
      viewportBounds: new DOMRect(0, 0, win.innerWidth, win.innerHeight)
    });
    this.tooltipPopup.popup.instance.offset = {
      left: pos.left + win.scrollX,
      top: pos.top + win.scrollY
    };
    this.tooltipShow.emit(__spreadValues({}, this.dataItem));
  }
  popupClass(isShape, dataItem) {
    const defaultCssClass = isShape ? this.options.shapeDefaults?.tooltip?.cssClass : this.options.connectionDefaults?.tooltip?.cssClass;
    const itemCssClass = dataItem.tooltip?.cssClass;
    const popupClass = defaultCssClass || itemCssClass;
    return popupClass;
  }
  setCustomTemplate(isShape, isConnection) {
    this.customTemplate = null;
    if (isShape && this.shapeTooltipTemplate) {
      this.customTemplate = this.shapeTooltipTemplate.templateRef;
    }
    if (isConnection && this.connectionTooltipTemplate) {
      this.customTemplate = this.connectionTooltipTemplate.templateRef;
    }
  }
  /**
   * Handles the tooltipHide event from the diagram widget.
   */
  handleTooltipHide() {
    this.hideTooltip();
    this.tooltipHide.emit(__spreadValues({}, this.dataItem));
  }
  /**
   * Hides the current tooltip and cleans up resources.
   */
  hideTooltip() {
    if (this.tooltipPopup) {
      this.tooltipPopup.close();
      this.tooltipPopup = void 0;
    }
  }
  activeEmitter(name) {
    const emitter = this[name];
    if (emitter?.emit && hasObservers(emitter)) {
      return emitter;
    }
  }
  /**
   * Binds event handlers to the diagram widget.
   */
  bindDiagramEvents() {
    events.forEach((eventName) => {
      this.diagramWidget.bind(eventName, (e) => {
        if (eventName === "click") {
          eventName = "diagramClick";
        }
        if (eventName === "select") {
          eventName = "onSelect";
        }
        if (eventName === "pan") {
          eventName = "onPan";
        }
        if (eventName === "itemBoundsChange") {
          eventName = "shapeBoundsChange";
        }
        if (eventName === "tooltipShow") {
          this.zone.run(() => {
            this.handleTooltipShow(e);
          });
          return;
        }
        if (eventName === "tooltipHide") {
          this.zone.run(() => {
            this.handleTooltipHide();
          });
          return;
        }
        const emitter = this.activeEmitter(eventName);
        if (emitter) {
          this.zone.run(() => {
            emitter.emit(e);
          });
        }
      });
    });
  }
  /**
   * Converts user data to Diagram model format using field mappings.
   */
  convertUserData() {
    if (this.shapeModelFields || this.connectionModelFields) {
      const mapping = {
        shapes: {
          source: () => this.shapes || [],
          map: this.createFieldMapping(this.shapeModelFields)
        },
        connections: {
          source: () => this.connections || [],
          map: this.createFieldMapping(this.connectionModelFields)
        }
      };
      const result = convertToDiagramModel({
        shapes: this.shapes,
        connections: this.options.connections
      }, mapping);
      this.convertedShapes = this.addDataItemProperty(result.shapes, this.shapes);
      this.convertedConnections = this.addDataItemProperty(result.connections, this.connections);
    } else {
      this.convertedShapes = this.addDataItemProperty(this.shapes, this.shapes);
      this.convertedConnections = this.addDataItemProperty(this.connections, this.connections);
    }
  }
  addDataItemProperty(array, sourceArray) {
    if (!array || !Array.isArray(array) || array.length === 0) {
      return [];
    }
    if (!sourceArray || !Array.isArray(sourceArray)) {
      return array;
    }
    return array.map((item, index) => __spreadProps(__spreadValues({}, item), {
      dataItem: sourceArray[index]
    }));
  }
  /**
   * Creates field mapping configuration from model fields.
   */
  createFieldMapping(modelFields) {
    if (!modelFields) {
      return {};
    }
    const mapping = {};
    Object.keys(modelFields).forEach((key) => {
      const fieldName = modelFields[key];
      if (fieldName) {
        mapping[key] = fieldName;
      }
    });
    return mapping;
  }
  init() {
    if (!isDocumentAvailable()) {
      return;
    }
    this.zone.runOutsideAngular(() => {
      const theme = loadTheme(this.wrapperElement.nativeElement);
      this.diagramWidget = new Diagram(this.wrapperElement.nativeElement, this.options, theme);
      this.diagramWidget._createOptionElements();
      this.diagramWidget.zoom(this.diagramWidget.options.zoom);
      this.diagramWidget.canvas.draw();
    });
  }
  updateOptions(prop) {
    this.options[prop] = this[prop];
    this.diagramWidget?.setOptions(this.options);
  }
  loadOptions(options) {
    this.diagramWidget?.load(options);
    this.diagramWidget?.layout(options);
  }
  getNormalizedNavigationOptions() {
    return {
      disabled: !this._navigable.enabled,
      smallStep: this._navigable.smallStep,
      largeStep: this._navigable.largeStep
    };
  }
  static ɵfac = function DiagramComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DiagramComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(PopupService), ɵɵdirectiveInject(ViewContainerRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _DiagramComponent,
    selectors: [["kendo-diagram"]],
    contentQueries: function DiagramComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, ShapeTooltipTemplateDirective, 5);
        ɵɵcontentQuery(dirIndex, ConnectionTooltipTemplateDirective, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.shapeTooltipTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.connectionTooltipTemplate = _t.first);
      }
    },
    viewQuery: function DiagramComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 5);
        ɵɵviewQuery(_c1, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.defaultTooltipTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.customTooltipTemplate = _t.first);
      }
    },
    hostVars: 2,
    hostBindings: function DiagramComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("k-diagram", ctx.diagramClass);
      }
    },
    inputs: {
      connectionDefaults: "connectionDefaults",
      connections: "connections",
      connectionModelFields: "connectionModelFields",
      editable: "editable",
      layout: "layout",
      pannable: "pannable",
      selectable: "selectable",
      shapeDefaults: "shapeDefaults",
      shapes: "shapes",
      shapeModelFields: "shapeModelFields",
      zoom: "zoom",
      zoomMax: "zoomMax",
      zoomMin: "zoomMin",
      zoomRate: "zoomRate",
      navigable: "navigable"
    },
    outputs: {
      change: "change",
      diagramClick: "diagramClick",
      drag: "drag",
      dragEnd: "dragEnd",
      dragStart: "dragStart",
      shapeBoundsChange: "shapeBoundsChange",
      mouseEnter: "mouseEnter",
      mouseLeave: "mouseLeave",
      onPan: "pan",
      onSelect: "select",
      zoomEnd: "zoomEnd",
      zoomStart: "zoomStart",
      tooltipShow: "tooltipShow",
      tooltipHide: "tooltipHide"
    },
    exportAs: ["kendoDiagram"],
    standalone: true,
    features: [ɵɵProvidersFeature([PopupService]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    decls: 5,
    vars: 1,
    consts: [["customTooltipTemplate", ""], ["defaultTemplate", ""], ["kendoWatermarkOverlay", "", 3, "licenseMessage"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function DiagramComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, DiagramComponent_Conditional_0_Template, 1, 1, "div", 2)(1, DiagramComponent_ng_template_1_Template, 1, 4, "ng-template", null, 0, ɵɵtemplateRefExtractor)(3, DiagramComponent_ng_template_3_Template, 1, 1, "ng-template", null, 1, ɵɵtemplateRefExtractor);
      }
      if (rf & 2) {
        ɵɵconditional(ctx.showLicenseWatermark ? 0 : -1);
      }
    },
    dependencies: [WatermarkOverlayComponent, NgTemplateOutlet],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DiagramComponent, [{
    type: Component,
    args: [{
      standalone: true,
      exportAs: "kendoDiagram",
      selector: "kendo-diagram",
      template: `
        @if (showLicenseWatermark) {
            <div kendoWatermarkOverlay [licenseMessage]="licenseMessage"></div>
        }

        <ng-template #customTooltipTemplate>
            <ng-container [ngTemplateOutlet]="customTemplate" [ngTemplateOutletContext]="{ $implicit: dataItem }"></ng-container>
        </ng-template>

        <ng-template #defaultTemplate>
            {{dataItem?.tooltipText}}
        </ng-template>
        `,
      imports: [WatermarkOverlayComponent, NgTemplateOutlet],
      providers: [PopupService]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: NgZone
  }, {
    type: PopupService
  }, {
    type: ViewContainerRef
  }], {
    diagramClass: [{
      type: HostBinding,
      args: ["class.k-diagram"]
    }],
    connectionDefaults: [{
      type: Input
    }],
    connections: [{
      type: Input
    }],
    connectionModelFields: [{
      type: Input
    }],
    editable: [{
      type: Input
    }],
    layout: [{
      type: Input
    }],
    pannable: [{
      type: Input
    }],
    selectable: [{
      type: Input
    }],
    shapeDefaults: [{
      type: Input
    }],
    shapes: [{
      type: Input
    }],
    shapeModelFields: [{
      type: Input
    }],
    zoom: [{
      type: Input
    }],
    zoomMax: [{
      type: Input
    }],
    zoomMin: [{
      type: Input
    }],
    zoomRate: [{
      type: Input
    }],
    navigable: [{
      type: Input
    }],
    change: [{
      type: Output
    }],
    diagramClick: [{
      type: Output
    }],
    drag: [{
      type: Output
    }],
    dragEnd: [{
      type: Output
    }],
    dragStart: [{
      type: Output
    }],
    shapeBoundsChange: [{
      type: Output
    }],
    mouseEnter: [{
      type: Output
    }],
    mouseLeave: [{
      type: Output
    }],
    onPan: [{
      type: Output,
      args: ["pan"]
    }],
    onSelect: [{
      type: Output,
      args: ["select"]
    }],
    zoomEnd: [{
      type: Output
    }],
    zoomStart: [{
      type: Output
    }],
    tooltipShow: [{
      type: Output
    }],
    tooltipHide: [{
      type: Output
    }],
    defaultTooltipTemplate: [{
      type: ViewChild,
      args: ["defaultTemplate"]
    }],
    customTooltipTemplate: [{
      type: ViewChild,
      args: ["customTooltipTemplate"]
    }],
    shapeTooltipTemplate: [{
      type: ContentChild,
      args: [ShapeTooltipTemplateDirective]
    }],
    connectionTooltipTemplate: [{
      type: ContentChild,
      args: [ConnectionTooltipTemplateDirective]
    }]
  });
})();
var KENDO_DIAGRAM = [DiagramComponent, ShapeTooltipTemplateDirective, ConnectionTooltipTemplateDirective];
var DiagramModule = class _DiagramModule {
  static ɵfac = function DiagramModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DiagramModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _DiagramModule,
    imports: [DiagramComponent, ShapeTooltipTemplateDirective, ConnectionTooltipTemplateDirective],
    exports: [DiagramComponent, ShapeTooltipTemplateDirective, ConnectionTooltipTemplateDirective]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [DiagramComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DiagramModule, [{
    type: NgModule,
    args: [{
      imports: [...KENDO_DIAGRAM],
      exports: [...KENDO_DIAGRAM]
    }]
  }], null, null);
})();
export {
  ArrowMarker,
  Circle,
  CircleMarker,
  Collate,
  Connection,
  ConnectionTooltipTemplateDirective,
  Connector,
  DataInputOutput,
  DataStorage,
  Database,
  Decision,
  Delay,
  DiagramComponent,
  DiagramModule,
  DirectAccessStorage,
  Display,
  Document,
  Extract,
  FlowchartShapeType,
  Group,
  Image,
  InternalStorage,
  KENDO_DIAGRAM,
  Layout,
  Line,
  LogicalOr,
  ManualInputOutput,
  ManualOperation,
  MarkerType,
  Merge,
  MultiLineTextBlock,
  MultipleDocuments,
  OffPageConnector,
  OnPageConnector,
  Path,
  Point,
  Polyline,
  PredefinedProcess,
  Preparation,
  Process,
  Rect,
  Rectangle,
  Shape,
  ShapeTooltipTemplateDirective,
  Sort,
  SummingJunction,
  Terminator,
  TextBlock,
  convertToDiagramModel
};
//# sourceMappingURL=@progress_kendo-angular-diagrams.js.map
