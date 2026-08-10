import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
  NgTemplateOutlet
} from "./chunk-YS5E6LKP.js";
import {
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
  Output,
  Renderer2,
  TemplateRef,
  ViewChild,
  ViewEncapsulation$1,
  setClassMetadata,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵsetComponentScope,
  ɵɵsetNgModuleScope,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-R7LRY632.js";
import "./chunk-UG3XN6F5.js";
import "./chunk-K3IIKLCY.js";
import "./chunk-WISTXZPE.js";
import {
  __commonJS,
  __toESM
} from "./chunk-N6ESDQJH.js";

// node_modules/atoa/atoa.js
var require_atoa = __commonJS({
  "node_modules/atoa/atoa.js"(exports, module) {
    module.exports = function atoa(a, n) {
      return Array.prototype.slice.call(a, n);
    };
  }
});

// node_modules/ticky/ticky-browser.js
var require_ticky_browser = __commonJS({
  "node_modules/ticky/ticky-browser.js"(exports, module) {
    var si = typeof setImmediate === "function";
    var tick;
    if (si) {
      tick = function(fn) {
        setImmediate(fn);
      };
    } else {
      tick = function(fn) {
        setTimeout(fn, 0);
      };
    }
    module.exports = tick;
  }
});

// node_modules/contra/debounce.js
var require_debounce = __commonJS({
  "node_modules/contra/debounce.js"(exports, module) {
    "use strict";
    var ticky = require_ticky_browser();
    module.exports = function debounce(fn, args, ctx) {
      if (!fn) {
        return;
      }
      ticky(function run() {
        fn.apply(ctx || null, args || []);
      });
    };
  }
});

// node_modules/contra/emitter.js
var require_emitter = __commonJS({
  "node_modules/contra/emitter.js"(exports, module) {
    "use strict";
    var atoa = require_atoa();
    var debounce = require_debounce();
    module.exports = function emitter(thing, options) {
      var opts = options || {};
      var evt = {};
      if (thing === void 0) {
        thing = {};
      }
      thing.on = function(type, fn) {
        if (!evt[type]) {
          evt[type] = [fn];
        } else {
          evt[type].push(fn);
        }
        return thing;
      };
      thing.once = function(type, fn) {
        fn._once = true;
        thing.on(type, fn);
        return thing;
      };
      thing.off = function(type, fn) {
        var c = arguments.length;
        if (c === 1) {
          delete evt[type];
        } else if (c === 0) {
          evt = {};
        } else {
          var et = evt[type];
          if (!et) {
            return thing;
          }
          et.splice(et.indexOf(fn), 1);
        }
        return thing;
      };
      thing.emit = function() {
        var args = atoa(arguments);
        return thing.emitterSnapshot(args.shift()).apply(this, args);
      };
      thing.emitterSnapshot = function(type) {
        var et = (evt[type] || []).slice(0);
        return function() {
          var args = atoa(arguments);
          var ctx = this || thing;
          if (type === "error" && opts.throws !== false && !et.length) {
            throw args.length === 1 ? args[0] : args;
          }
          et.forEach(function emitter2(listen) {
            if (opts.async) {
              debounce(listen, args, ctx);
            } else {
              listen.apply(ctx, args);
            }
            if (listen._once) {
              thing.off(type, listen);
            }
          });
          return thing;
        };
      };
      return thing;
    };
  }
});

// node_modules/custom-event/index.js
var require_custom_event = __commonJS({
  "node_modules/custom-event/index.js"(exports, module) {
    var NativeCustomEvent = global.CustomEvent;
    function useNative() {
      try {
        var p = new NativeCustomEvent("cat", {
          detail: {
            foo: "bar"
          }
        });
        return "cat" === p.type && "bar" === p.detail.foo;
      } catch (e) {
      }
      return false;
    }
    module.exports = useNative() ? NativeCustomEvent : (
      // IE >= 9
      "function" === typeof document.createEvent ? function CustomEvent(type, params) {
        var e = document.createEvent("CustomEvent");
        if (params) {
          e.initCustomEvent(type, params.bubbles, params.cancelable, params.detail);
        } else {
          e.initCustomEvent(type, false, false, void 0);
        }
        return e;
      } : (
        // IE <= 8
        function CustomEvent(type, params) {
          var e = document.createEventObject();
          e.type = type;
          if (params) {
            e.bubbles = Boolean(params.bubbles);
            e.cancelable = Boolean(params.cancelable);
            e.detail = params.detail;
          } else {
            e.bubbles = false;
            e.cancelable = false;
            e.detail = void 0;
          }
          return e;
        }
      )
    );
  }
});

// node_modules/crossvent/src/eventmap.js
var require_eventmap = __commonJS({
  "node_modules/crossvent/src/eventmap.js"(exports, module) {
    "use strict";
    var eventmap = [];
    var eventname = "";
    var ron = /^on/;
    for (eventname in global) {
      if (ron.test(eventname)) {
        eventmap.push(eventname.slice(2));
      }
    }
    module.exports = eventmap;
  }
});

// node_modules/crossvent/src/crossvent.js
var require_crossvent = __commonJS({
  "node_modules/crossvent/src/crossvent.js"(exports, module) {
    "use strict";
    var customEvent = require_custom_event();
    var eventmap = require_eventmap();
    var doc = global.document;
    var addEvent = addEventEasy;
    var removeEvent = removeEventEasy;
    var hardCache = [];
    if (!global.addEventListener) {
      addEvent = addEventHard;
      removeEvent = removeEventHard;
    }
    module.exports = {
      add: addEvent,
      remove: removeEvent,
      fabricate: fabricateEvent
    };
    function addEventEasy(el, type, fn, capturing) {
      return el.addEventListener(type, fn, capturing);
    }
    function addEventHard(el, type, fn) {
      return el.attachEvent("on" + type, wrap(el, type, fn));
    }
    function removeEventEasy(el, type, fn, capturing) {
      return el.removeEventListener(type, fn, capturing);
    }
    function removeEventHard(el, type, fn) {
      var listener = unwrap(el, type, fn);
      if (listener) {
        return el.detachEvent("on" + type, listener);
      }
    }
    function fabricateEvent(el, type, model) {
      var e = eventmap.indexOf(type) === -1 ? makeCustomEvent() : makeClassicEvent();
      if (el.dispatchEvent) {
        el.dispatchEvent(e);
      } else {
        el.fireEvent("on" + type, e);
      }
      function makeClassicEvent() {
        var e2;
        if (doc.createEvent) {
          e2 = doc.createEvent("Event");
          e2.initEvent(type, true, true);
        } else if (doc.createEventObject) {
          e2 = doc.createEventObject();
        }
        return e2;
      }
      function makeCustomEvent() {
        return new customEvent(type, {
          detail: model
        });
      }
    }
    function wrapperFactory(el, type, fn) {
      return function wrapper(originalEvent) {
        var e = originalEvent || global.event;
        e.target = e.target || e.srcElement;
        e.preventDefault = e.preventDefault || function preventDefault() {
          e.returnValue = false;
        };
        e.stopPropagation = e.stopPropagation || function stopPropagation() {
          e.cancelBubble = true;
        };
        e.which = e.which || e.keyCode;
        fn.call(el, e);
      };
    }
    function wrap(el, type, fn) {
      var wrapper = unwrap(el, type, fn) || wrapperFactory(el, type, fn);
      hardCache.push({
        wrapper,
        element: el,
        type,
        fn
      });
      return wrapper;
    }
    function unwrap(el, type, fn) {
      var i2 = find(el, type, fn);
      if (i2) {
        var wrapper = hardCache[i2].wrapper;
        hardCache.splice(i2, 1);
        return wrapper;
      }
    }
    function find(el, type, fn) {
      var i2, item;
      for (i2 = 0; i2 < hardCache.length; i2++) {
        item = hardCache[i2];
        if (item.element === el && item.type === type && item.fn === fn) {
          return i2;
        }
      }
    }
  }
});

// node_modules/@swimlane/dragula/classes.js
var require_classes = __commonJS({
  "node_modules/@swimlane/dragula/classes.js"(exports, module) {
    "use strict";
    var cache = {};
    var start = "(?:^|\\s)";
    var end = "(?:\\s|$)";
    function lookupClass(className) {
      var cached = cache[className];
      if (cached) {
        cached.lastIndex = 0;
      } else {
        cache[className] = cached = new RegExp(start + className + end, "g");
      }
      return cached;
    }
    function addClass(el, className) {
      var current = el.className;
      if (!current.length) {
        el.className = className;
      } else if (!lookupClass(className).test(current)) {
        el.className += " " + className;
      }
    }
    function rmClass(el, className) {
      el.className = el.className.replace(lookupClass(className), " ").trim();
    }
    module.exports = {
      add: addClass,
      rm: rmClass
    };
  }
});

// node_modules/@swimlane/dragula/dragula.js
var require_dragula = __commonJS({
  "node_modules/@swimlane/dragula/dragula.js"(exports, module) {
    "use strict";
    var emitter = require_emitter();
    var crossvent = require_crossvent();
    var classes = require_classes();
    var doc = document;
    var documentElement = doc.documentElement;
    function dragula2(initialContainers, options) {
      var len = arguments.length;
      if (len === 1 && Array.isArray(initialContainers) === false) {
        options = initialContainers;
        initialContainers = [];
      }
      var _mirror;
      var _source;
      var _item;
      var _offsetX;
      var _offsetY;
      var _moveX;
      var _moveY;
      var _initialSibling;
      var _currentSibling;
      var _copy;
      var _renderTimer;
      var _lastDropTarget = null;
      var _grabbed;
      var o = options || {};
      if (o.moves === void 0) {
        o.moves = always;
      }
      if (o.accepts === void 0) {
        o.accepts = always;
      }
      if (o.invalid === void 0) {
        o.invalid = invalidTarget;
      }
      if (o.containers === void 0) {
        o.containers = initialContainers || [];
      }
      if (o.isContainer === void 0) {
        o.isContainer = never;
      }
      if (o.copy === void 0) {
        o.copy = false;
      }
      if (o.copySortSource === void 0) {
        o.copySortSource = false;
      }
      if (o.revertOnSpill === void 0) {
        o.revertOnSpill = false;
      }
      if (o.removeOnSpill === void 0) {
        o.removeOnSpill = false;
      }
      if (o.direction === void 0) {
        o.direction = "vertical";
      }
      if (o.ignoreInputTextSelection === void 0) {
        o.ignoreInputTextSelection = true;
      }
      if (o.mirrorContainer === void 0) {
        o.mirrorContainer = doc.body;
      }
      var drake = emitter({
        containers: o.containers,
        start: manualStart,
        end,
        cancel,
        remove,
        destroy,
        canMove,
        dragging: false
      });
      if (o.removeOnSpill === true) {
        drake.on("over", spillOver).on("out", spillOut);
      }
      events();
      return drake;
      function isContainer(el) {
        return drake.containers.indexOf(el) !== -1 || o.isContainer(el);
      }
      function events(remove2) {
        var op = remove2 ? "remove" : "add";
        touchy(documentElement, op, "mousedown", grab);
        touchy(documentElement, op, "mouseup", release);
      }
      function eventualMovements(remove2) {
        var op = remove2 ? "remove" : "add";
        touchy(documentElement, op, "mousemove", startBecauseMouseMoved);
      }
      function movements(remove2) {
        var op = remove2 ? "remove" : "add";
        crossvent[op](documentElement, "selectstart", preventGrabbed);
        crossvent[op](documentElement, "click", preventGrabbed);
      }
      function destroy() {
        events(true);
        release({});
      }
      function preventGrabbed(e) {
        if (_grabbed) {
          e.preventDefault();
        }
      }
      function grab(e) {
        _moveX = e.clientX;
        _moveY = e.clientY;
        var ignore = whichMouseButton(e) !== 1 || e.metaKey || e.ctrlKey;
        if (ignore) {
          return;
        }
        var item = e.target;
        var context = canStart(item);
        if (!context) {
          return;
        }
        _grabbed = context;
        eventualMovements();
        if (e.type === "mousedown") {
          if (isInput(item)) {
            item.focus();
          } else {
            e.preventDefault();
          }
        }
      }
      function startBecauseMouseMoved(e) {
        if (!_grabbed) {
          return;
        }
        if (whichMouseButton(e) === 0) {
          release({});
          return;
        }
        if (e.clientX !== void 0 && e.clientX === _moveX && e.clientY !== void 0 && e.clientY === _moveY) {
          return;
        }
        if (o.ignoreInputTextSelection) {
          var clientX = getCoord("clientX", e);
          var clientY = getCoord("clientY", e);
          var elementBehindCursor = doc.elementFromPoint(clientX, clientY);
          if (isInput(elementBehindCursor)) {
            return;
          }
        }
        var grabbed = _grabbed;
        eventualMovements(true);
        movements();
        end();
        start(grabbed);
        var offset = getOffset(_item);
        _offsetX = getCoord("pageX", e) - offset.left;
        _offsetY = getCoord("pageY", e) - offset.top;
        classes.add(_copy || _item, "gu-transit");
        renderMirrorImage();
        drag(e);
      }
      function canStart(item) {
        if (drake.dragging && _mirror) {
          return;
        }
        if (isContainer(item)) {
          return;
        }
        var handle = item;
        while (getParent(item) && isContainer(getParent(item)) === false) {
          if (o.invalid(item, handle)) {
            return;
          }
          item = getParent(item);
          if (!item) {
            return;
          }
        }
        var source = getParent(item);
        if (!source) {
          return;
        }
        if (o.invalid(item, handle)) {
          return;
        }
        var movable = o.moves(item, source, handle, nextEl(item));
        if (!movable) {
          return;
        }
        return {
          item,
          source
        };
      }
      function canMove(item) {
        return !!canStart(item);
      }
      function manualStart(item) {
        var context = canStart(item);
        if (context) {
          start(context);
        }
      }
      function start(context) {
        if (isCopy(context.item, context.source)) {
          _copy = context.item.cloneNode(true);
          drake.emit("cloned", _copy, context.item, "copy");
        }
        _source = context.source;
        _item = context.item;
        _initialSibling = _currentSibling = nextEl(context.item);
        drake.dragging = true;
        drake.emit("drag", _item, _source);
      }
      function invalidTarget() {
        return false;
      }
      function end() {
        if (!drake.dragging) {
          return;
        }
        var item = _copy || _item;
        drop(item, getParent(item));
      }
      function ungrab() {
        _grabbed = false;
        eventualMovements(true);
        movements(true);
      }
      function release(e) {
        ungrab();
        if (!drake.dragging) {
          return;
        }
        var item = _copy || _item;
        var clientX = getCoord("clientX", e);
        var clientY = getCoord("clientY", e);
        var elementBehindCursor = getElementBehindPoint(_mirror, clientX, clientY);
        var dropTarget = findDropTarget(elementBehindCursor, clientX, clientY);
        if (dropTarget && (_copy && o.copySortSource || !_copy || dropTarget !== _source)) {
          drop(item, dropTarget);
        } else if (o.removeOnSpill) {
          remove();
        } else {
          cancel();
        }
      }
      function drop(item, target) {
        var parent = getParent(item);
        if (_copy && o.copySortSource && target === _source) {
          parent.removeChild(_item);
        }
        if (isInitialPlacement(target) && item.parent === target) {
          drake.emit("cancel", item, _source, _source);
        } else {
          drake.emit("drop", item, target, _source, _currentSibling);
        }
        cleanup();
      }
      function remove() {
        if (!drake.dragging) {
          return;
        }
        var item = _copy || _item;
        var parent = getParent(item);
        if (parent) {
          parent.removeChild(item);
        }
        drake.emit(_copy ? "cancel" : "remove", item, parent, _source);
        cleanup();
      }
      function cancel(revert) {
        if (!drake.dragging) {
          return;
        }
        var reverts = arguments.length > 0 ? revert : o.revertOnSpill;
        var item = _copy || _item;
        var parent = getParent(item);
        var initial = isInitialPlacement(parent);
        if (initial === false && reverts) {
          if (_copy) {
            if (parent) {
              parent.removeChild(_copy);
            }
          } else {
            _source.insertBefore(item, _initialSibling);
          }
        }
        if (initial || reverts) {
          drake.emit("cancel", item, _source, _source);
        } else {
          drake.emit("drop", item, parent, _source, _currentSibling);
        }
        cleanup();
      }
      function cleanup() {
        var item = _copy || _item;
        ungrab();
        removeMirrorImage();
        if (item) {
          classes.rm(item, "gu-transit");
        }
        if (_renderTimer) {
          clearTimeout(_renderTimer);
        }
        drake.dragging = false;
        if (_lastDropTarget) {
          drake.emit("out", item, _lastDropTarget, _source);
        }
        drake.emit("dragend", item);
        _source = _item = _copy = _initialSibling = _currentSibling = _renderTimer = _lastDropTarget = null;
      }
      function isInitialPlacement(target, s) {
        var sibling;
        if (s !== void 0) {
          sibling = s;
        } else if (_mirror) {
          sibling = _currentSibling;
        } else {
          sibling = nextEl(_copy || _item);
        }
        return target === _source && sibling === _initialSibling;
      }
      function findDropTarget(elementBehindCursor, clientX, clientY) {
        var target = elementBehindCursor;
        while (target && !accepted()) {
          target = getParent(target);
        }
        return target;
        function accepted() {
          var droppable = isContainer(target);
          if (droppable === false) {
            return false;
          }
          var immediate = getImmediateChild(target, elementBehindCursor);
          var reference = getReference(target, immediate, clientX, clientY);
          var initial = isInitialPlacement(target, reference);
          if (initial) {
            return true;
          }
          return o.accepts(_item, target, _source, reference);
        }
      }
      function drag(e) {
        if (!_mirror) {
          return;
        }
        e.preventDefault();
        var clientX = getCoord("clientX", e);
        var clientY = getCoord("clientY", e);
        var x = clientX - _offsetX;
        var y = clientY - _offsetY;
        _mirror.style.left = x + "px";
        _mirror.style.top = y + "px";
        var item = _copy || _item;
        var elementBehindCursor = getElementBehindPoint(_mirror, clientX, clientY);
        var dropTarget = findDropTarget(elementBehindCursor, clientX, clientY);
        var changed = dropTarget !== null && dropTarget !== _lastDropTarget;
        if (changed || dropTarget === null) {
          out();
          _lastDropTarget = dropTarget;
          over();
        }
        var parent = getParent(item);
        if (dropTarget === _source && _copy && !o.copySortSource) {
          if (parent) {
            parent.removeChild(item);
          }
          return;
        }
        var reference;
        var immediate = getImmediateChild(dropTarget, elementBehindCursor);
        if (immediate !== null) {
          reference = getReference(dropTarget, immediate, clientX, clientY);
        } else if (o.revertOnSpill === true && !_copy) {
          reference = _initialSibling;
          dropTarget = _source;
        } else {
          if (_copy && parent) {
            parent.removeChild(item);
          }
          return;
        }
        if (reference === null && changed || reference !== item && reference !== nextEl(item)) {
          _currentSibling = reference;
          dropTarget.insertBefore(item, reference);
          drake.emit("shadow", item, dropTarget, _source);
        }
        function moved(type) {
          drake.emit(type, item, _lastDropTarget, _source);
        }
        function over() {
          if (changed) {
            moved("over");
          }
        }
        function out() {
          if (_lastDropTarget) {
            moved("out");
          }
        }
      }
      function spillOver(el) {
        classes.rm(el, "gu-hide");
      }
      function spillOut(el) {
        if (drake.dragging) {
          classes.add(el, "gu-hide");
        }
      }
      function renderMirrorImage() {
        if (_mirror) {
          return;
        }
        var rect = _item.getBoundingClientRect();
        _mirror = _item.cloneNode(true);
        _mirror.style.width = getRectWidth(rect) + "px";
        _mirror.style.height = getRectHeight(rect) + "px";
        classes.rm(_mirror, "gu-transit");
        classes.add(_mirror, "gu-mirror");
        o.mirrorContainer.appendChild(_mirror);
        touchy(documentElement, "add", "mousemove", drag);
        classes.add(o.mirrorContainer, "gu-unselectable");
        drake.emit("cloned", _mirror, _item, "mirror");
      }
      function removeMirrorImage() {
        if (_mirror) {
          classes.rm(o.mirrorContainer, "gu-unselectable");
          touchy(documentElement, "remove", "mousemove", drag);
          getParent(_mirror).removeChild(_mirror);
          _mirror = null;
        }
      }
      function getImmediateChild(dropTarget, target) {
        var immediate = target;
        while (immediate !== dropTarget && getParent(immediate) !== dropTarget) {
          immediate = getParent(immediate);
        }
        if (immediate === documentElement) {
          return null;
        }
        return immediate;
      }
      function getReference(dropTarget, target, x, y) {
        var direction = typeof o.direction === "function" ? o.direction(_item, dropTarget, _source) : o.direction;
        var horizontal = direction === "horizontal";
        var mixed = direction === "mixed";
        return target === dropTarget || mixed ? outside() : inside();
        function outside() {
          var len2 = dropTarget.children.length;
          var i2;
          var el;
          var rect;
          for (i2 = 0; i2 < len2; i2++) {
            el = dropTarget.children[i2];
            rect = el.getBoundingClientRect();
            if (horizontal && rect.left + rect.width / 2 > x) {
              return el;
            }
            if (!mixed && !horizontal && rect.top + rect.height / 2 > y) {
              return el;
            }
            if (mixed && rect.left + rect.width > x && rect.top + rect.height > y) {
              return el;
            }
          }
          return null;
        }
        function inside() {
          var rect = target.getBoundingClientRect();
          if (horizontal) {
            return resolve(x > rect.left + getRectWidth(rect) / 2);
          }
          return resolve(y > rect.top + getRectHeight(rect) / 2);
        }
        function resolve(after) {
          return after ? nextEl(target) : target;
        }
      }
      function isCopy(item, container) {
        return typeof o.copy === "boolean" ? o.copy : o.copy(item, container);
      }
    }
    function touchy(el, op, type, fn) {
      var touch = {
        mouseup: "touchend",
        mousedown: "touchstart",
        mousemove: "touchmove"
      };
      var pointers = {
        mouseup: "pointerup",
        mousedown: "pointerdown",
        mousemove: "pointermove"
      };
      var microsoft = {
        mouseup: "MSPointerUp",
        mousedown: "MSPointerDown",
        mousemove: "MSPointerMove"
      };
      if (global.navigator.pointerEnabled) {
        crossvent[op](el, pointers[type], fn);
      } else if (global.navigator.msPointerEnabled) {
        crossvent[op](el, microsoft[type], fn);
      } else {
        crossvent[op](el, touch[type], fn);
        crossvent[op](el, type, fn);
      }
    }
    function whichMouseButton(e) {
      if (e.touches !== void 0) {
        return e.touches.length;
      }
      if (e.which !== void 0 && e.which !== 0) {
        return e.which;
      }
      if (e.buttons !== void 0) {
        return e.buttons;
      }
      var button = e.button;
      if (button !== void 0) {
        return button & 1 ? 1 : button & 2 ? 3 : button & 4 ? 2 : 0;
      }
    }
    function getOffset(el) {
      var rect = el.getBoundingClientRect();
      return {
        left: rect.left + getScroll("scrollLeft", "pageXOffset"),
        top: rect.top + getScroll("scrollTop", "pageYOffset")
      };
    }
    function getScroll(scrollProp, offsetProp) {
      if (typeof global[offsetProp] !== "undefined") {
        return global[offsetProp];
      }
      if (documentElement.clientHeight) {
        return documentElement[scrollProp];
      }
      return doc.body[scrollProp];
    }
    function getElementBehindPoint(point, x, y) {
      var p = point || {};
      var state = p.className;
      var el;
      p.className += " gu-hide";
      el = doc.elementFromPoint(x, y);
      p.className = state;
      return el;
    }
    function never() {
      return false;
    }
    function always() {
      return true;
    }
    function getRectWidth(rect) {
      return rect.width || rect.right - rect.left;
    }
    function getRectHeight(rect) {
      return rect.height || rect.bottom - rect.top;
    }
    function getParent(el) {
      return el.parentNode === doc ? null : el.parentNode;
    }
    function isInput(el) {
      return el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.tagName === "SELECT" || isEditable(el);
    }
    function isEditable(el) {
      if (!el) {
        return false;
      }
      if (el.contentEditable === "false") {
        return false;
      }
      if (el.contentEditable === "true") {
        return true;
      }
      return isEditable(getParent(el));
    }
    function nextEl(el) {
      return el.nextElementSibling || manually();
      function manually() {
        var sibling = el;
        do {
          sibling = sibling.nextSibling;
        } while (sibling && sibling.nodeType !== 1);
        return sibling;
      }
    }
    function getEventHost(e) {
      if (e.targetTouches && e.targetTouches.length) {
        return e.targetTouches[0];
      }
      if (e.changedTouches && e.changedTouches.length) {
        return e.changedTouches[0];
      }
      return e;
    }
    function getCoord(coord, e) {
      var host = getEventHost(e);
      var missMap = {
        pageX: "clientX",
        // IE8
        pageY: "clientY"
        // IE8
      };
      if (coord in missMap && !(coord in host) && missMap[coord] in host) {
        coord = missMap[coord];
      }
      return host[coord];
    }
    module.exports = dragula2;
  }
});

// node_modules/@swimlane/ngx-dnd/fesm2020/swimlane-ngx-dnd.mjs
var import_dragula = __toESM(require_dragula(), 1);
var DrakeStoreService = class {
  constructor() {
    this.droppableMap = /* @__PURE__ */ new WeakMap();
    this.draggableMap = /* @__PURE__ */ new WeakMap();
    this.dragulaOptions = this.createDrakeOptions();
    this.drake = (0, import_dragula.default)([], this.dragulaOptions);
    this.registerEvents();
  }
  register(droppable) {
    this.droppableMap.set(droppable.container, droppable);
    this.drake.containers.push(droppable.container);
  }
  remove(droppable) {
    this.droppableMap.delete(droppable.container);
    const idx = this.drake.containers.indexOf(droppable.container);
    if (idx > -1) {
      this.drake.containers.splice(idx, 1);
    }
  }
  registerDraggable(draggable) {
    this.draggableMap.set(draggable.element, draggable);
  }
  removeDraggable(draggable) {
    this.draggableMap.delete(draggable.element);
  }
  createDrakeOptions() {
    const accepts = (el, target) => {
      if (el.contains(target)) {
        return false;
      }
      const elementComponent = this.draggableMap.get(el);
      const targetComponent = this.droppableMap.get(target);
      if (elementComponent && targetComponent) {
        return elementComponent.dropZones.includes(targetComponent.dropZone);
      }
      return true;
    };
    const copy = (_, source) => {
      const sourceComponent = this.droppableMap.get(source);
      if (sourceComponent) {
        return sourceComponent.copy;
      }
      return false;
    };
    const moves = (el, source, handle, sibling) => {
      const elementComponent = this.draggableMap.get(el);
      if (elementComponent) {
        return elementComponent.moves(source, handle, sibling);
      }
      return true;
    };
    const direction = (el, target, source) => {
      const targetComponent = this.droppableMap.get(target);
      return targetComponent.direction || "vertical";
    };
    return {
      accepts,
      copy,
      moves,
      revertOnSpill: true,
      direction
    };
  }
  registerEvents() {
    let dragElm;
    let draggedItem;
    this.drake.on("drag", (el, source) => {
      draggedItem = void 0;
      dragElm = el;
      if (!el || !source) {
        return;
      }
      if (this.draggableMap.has(el)) {
        const elementComponent = this.draggableMap.get(el);
        draggedItem = elementComponent.model;
        elementComponent.drag.emit({
          type: "drag",
          el,
          source,
          value: draggedItem
        });
      }
      if (this.droppableMap.has(source)) {
        const sourceComponent = this.droppableMap.get(source);
        this.dragulaOptions.removeOnSpill = sourceComponent.removeOnSpill;
        sourceComponent.drag.emit({
          type: "drag",
          el,
          source,
          sourceComponent,
          value: draggedItem
        });
      }
    });
    this.drake.on("drop", (el, target, source) => {
      const targetComponent = this.droppableMap.get(target);
      if (!targetComponent) {
        return;
      }
      let dropElmModel = draggedItem;
      const dropIndex = Array.prototype.indexOf.call(target.children, el);
      if (dropIndex < 0) {
        this.drake.cancel(true);
        return;
      }
      const sourceComponent = this.droppableMap.get(source);
      if (sourceComponent) {
        const sourceModel = sourceComponent.model;
        const targetModel = targetComponent.model;
        const hasDragModel = !!(sourceModel && draggedItem);
        const dragIndex = hasDragModel ? sourceModel.indexOf(draggedItem) : -1;
        if (hasDragModel && dragIndex < 0) {
          this.drake.cancel(true);
          return;
        }
        if (targetModel) {
          const reorder = dragIndex > -1 && sourceModel && target === source;
          const copy = !sourceModel || dragElm !== el;
          if (reorder) {
            sourceModel.splice(dropIndex, 0, sourceModel.splice(dragIndex, 1)[0]);
          } else {
            if (el.parentNode === target) {
              target.removeChild(el);
            }
            if (copy) {
              dropElmModel = JSON.parse(JSON.stringify(dropElmModel));
            } else {
              if (el.parentNode !== source) {
                this.drake.cancel(true);
              }
              sourceModel.splice(dragIndex, 1);
            }
            targetModel.splice(dropIndex, 0, dropElmModel);
          }
        }
      }
      targetComponent.drop.emit({
        type: "drop",
        el,
        source,
        value: dropElmModel,
        dropIndex
      });
    });
    this.drake.on("remove", (el, container, source) => {
      if (this.droppableMap.has(source)) {
        const sourceComponent = this.droppableMap.get(source);
        const sourceModel = sourceComponent.model;
        const dragIndex = draggedItem && sourceModel ? sourceModel.indexOf(draggedItem) : -1;
        if (dragIndex > -1) {
          if (el.parentNode !== source) {
            source.appendChild(el);
          }
          sourceModel.splice(dragIndex, 1);
        }
        sourceComponent.remove.emit({
          type: "remove",
          el,
          container,
          source,
          value: draggedItem
        });
      }
    });
    this.drake.on("cancel", (el, container, source) => {
      if (this.droppableMap.has(container)) {
        const containerComponent = this.droppableMap.get(container);
        containerComponent.cancel.emit({
          type: "cancel",
          el,
          container,
          source,
          value: draggedItem
        });
      }
    });
    this.drake.on("over", (el, container, source) => {
      if (this.droppableMap.has(container)) {
        const containerComponent = this.droppableMap.get(container);
        containerComponent.over.emit({
          type: "over",
          el,
          container,
          source,
          value: draggedItem
        });
      }
    });
    this.drake.on("out", (el, container, source) => {
      if (this.droppableMap.has(container)) {
        const containerComponent = this.droppableMap.get(container);
        containerComponent.out.emit({
          type: "out",
          el,
          container,
          source,
          value: draggedItem
        });
      }
    });
  }
};
DrakeStoreService.ɵfac = function DrakeStoreService_Factory(t) {
  return new (t || DrakeStoreService)();
};
DrakeStoreService.ɵprov = ɵɵdefineInjectable({
  token: DrakeStoreService,
  factory: DrakeStoreService.ɵfac,
  providedIn: "root"
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DrakeStoreService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [];
  }, null);
})();
var i$1 = 1e4;
function getNextId$1() {
  return i$1++;
}
var DroppableDirective = class {
  constructor(el, renderer, drakesService) {
    this.el = el;
    this.renderer = renderer;
    this.drakesService = drakesService;
    this.copy = false;
    this.removeOnSpill = false;
    this.direction = "vertical";
    this.drop = new EventEmitter();
    this.drag = new EventEmitter();
    this.over = new EventEmitter();
    this.out = new EventEmitter();
    this.remove = new EventEmitter();
    this.cancel = new EventEmitter();
  }
  get container() {
    return this.el.nativeElement;
  }
  get dropZone() {
    return this._dropZone || this.ngxDroppable || this.defaultZone;
  }
  set dropZone(val) {
    this._dropZone = val;
  }
  ngOnInit() {
    this.defaultZone = `@@DefaultDropZone-${getNextId$1()}@@`;
    this.drakesService.register(this);
  }
  ngAfterViewInit() {
    this.over.subscribe(() => {
      this.renderer.addClass(this.container, "gu-over");
    });
    this.out.subscribe(() => {
      this.renderer.removeClass(this.container, "gu-over");
    });
  }
  ngOnDestroy() {
    this.drakesService.remove(this);
  }
};
DroppableDirective.ɵfac = function DroppableDirective_Factory(t) {
  return new (t || DroppableDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(DrakeStoreService));
};
DroppableDirective.ɵdir = ɵɵdefineDirective({
  type: DroppableDirective,
  selectors: [["", "ngxDroppable", ""]],
  inputs: {
    model: "model",
    copy: "copy",
    removeOnSpill: "removeOnSpill",
    ngxDroppable: "ngxDroppable",
    direction: "direction",
    dropZone: "dropZone"
  },
  outputs: {
    drop: "drop",
    drag: "drag",
    over: "over",
    out: "out",
    remove: "remove",
    cancel: "cancel"
  }
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DroppableDirective, [{
    type: Directive,
    args: [{
      selector: "[ngxDroppable]"
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: Renderer2
    }, {
      type: DrakeStoreService
    }];
  }, {
    model: [{
      type: Input
    }],
    copy: [{
      type: Input
    }],
    removeOnSpill: [{
      type: Input
    }],
    ngxDroppable: [{
      type: Input
    }],
    direction: [{
      type: Input
    }],
    drop: [{
      type: Output
    }],
    drag: [{
      type: Output
    }],
    over: [{
      type: Output
    }],
    out: [{
      type: Output
    }],
    remove: [{
      type: Output
    }],
    cancel: [{
      type: Output
    }],
    dropZone: [{
      type: Input
    }]
  });
})();
var DraggableDirective = class {
  constructor(el, drakesService, droppableDirective) {
    this.el = el;
    this.drakesService = drakesService;
    this.droppableDirective = droppableDirective;
    this._moves = true;
    this.handles = [];
    this.drag = new EventEmitter();
    this.dragDelay = 200;
    this.dragDelayed = true;
  }
  get dropZones() {
    return this._dropZones || this.ngxDraggable || this._parentDropzones;
  }
  set dropZones(val) {
    this._dropZones = val;
  }
  get hasHandle() {
    return !!this.handles.length;
  }
  get element() {
    return this.el.nativeElement;
  }
  // From: https://github.com/bevacqua/dragula/issues/289#issuecomment-277143172
  onMove(e) {
    if (!this._moves || this.dragDelayed) {
      e.stopPropagation();
      clearTimeout(this.touchTimeout);
    }
  }
  onDown() {
    if (this._moves) {
      this.touchTimeout = setTimeout(() => {
        this.dragDelayed = false;
      }, this.dragDelay);
    }
  }
  onUp() {
    if (this._moves) {
      clearTimeout(this.touchTimeout);
      this.dragDelayed = true;
    }
  }
  ngOnInit() {
    this.update();
  }
  update() {
    this._parentDropzones = [this.droppableDirective.dropZone];
    this.drakesService.registerDraggable(this);
    this.updateElements();
  }
  ngOnDestroy() {
    this.drakesService.removeDraggable(this);
  }
  updateElements() {
    const nativeElement = this.el.nativeElement;
    const handles = nativeElement.querySelectorAll("[ngxdraghandle]");
    this.handles = Array.from(handles).filter((h) => findFirstDraggableParent(h) === nativeElement);
    function findFirstDraggableParent(c) {
      while (c.parentNode) {
        c = c.parentNode;
        if (c.hasAttribute && c.hasAttribute("ngxdraggable")) {
          return c;
        }
      }
    }
  }
  canMove(source, handle, sibling) {
    if (typeof this._moves === "boolean") return this._moves;
    if (typeof this._moves === "function") return this._moves(this.model, source, handle, sibling);
    return true;
  }
  moves(source, handle, sibling) {
    if (!this.canMove(source, handle, sibling)) return false;
    return this.hasHandle ? this.handles.some((h) => handelFor(handle, h)) : true;
    function handelFor(c, p) {
      if (c === p) return true;
      while ((c = c.parentNode) && c !== p) ;
      return !!c;
    }
  }
  ngDoCheck() {
    this.updateElements();
  }
};
DraggableDirective.ɵfac = function DraggableDirective_Factory(t) {
  return new (t || DraggableDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(DrakeStoreService), ɵɵdirectiveInject(DroppableDirective));
};
DraggableDirective.ɵdir = ɵɵdefineDirective({
  type: DraggableDirective,
  selectors: [["", "ngxDraggable", ""]],
  hostBindings: function DraggableDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("touchmove", function DraggableDirective_touchmove_HostBindingHandler($event) {
        return ctx.onMove($event);
      })("touchstart", function DraggableDirective_touchstart_HostBindingHandler() {
        return ctx.onDown();
      })("touchend", function DraggableDirective_touchend_HostBindingHandler() {
        return ctx.onUp();
      });
    }
  },
  inputs: {
    ngxDraggable: "ngxDraggable",
    model: "model",
    dropZones: "dropZones",
    _moves: ["moves", "_moves"]
  },
  outputs: {
    drag: "drag"
  }
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DraggableDirective, [{
    type: Directive,
    args: [{
      selector: "[ngxDraggable]"
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: DrakeStoreService
    }, {
      type: DroppableDirective
    }];
  }, {
    ngxDraggable: [{
      type: Input
    }],
    model: [{
      type: Input
    }],
    dropZones: [{
      type: Input
    }],
    _moves: [{
      type: Input,
      args: ["moves"]
    }],
    drag: [{
      type: Output
    }],
    onMove: [{
      type: HostListener,
      args: ["touchmove", ["$event"]]
    }],
    onDown: [{
      type: HostListener,
      args: ["touchstart"]
    }],
    onUp: [{
      type: HostListener,
      args: ["touchend"]
    }]
  });
})();
var DragHandleDirective = class {
};
DragHandleDirective.ɵfac = function DragHandleDirective_Factory(t) {
  return new (t || DragHandleDirective)();
};
DragHandleDirective.ɵdir = ɵɵdefineDirective({
  type: DragHandleDirective,
  selectors: [["", "ngxDragHandle", ""]]
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DragHandleDirective, [{
    type: Directive,
    args: [{
      selector: "[ngxDragHandle]"
    }]
  }], null, null);
})();
function ContainerComponent_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "ngx-dnd-item", 3);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("model", item_r3)("dropZone", ctx_r2.dropZone)("dropZones", ctx_r2.dropZones)("copy", ctx_r2.copy)("moves", ctx_r2.moves)("removeOnSpill", ctx_r2.removeOnSpill)("droppableItemClass", ctx_r2.droppableItemClass);
  }
}
function ContainerComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ContainerComponent_ng_container_1_ng_container_1_Template, 2, 7, "ng-container", 2);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r0.model);
  }
}
function ContainerComponent_ng_content_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0, 0, ["*ngIf", "!model"]);
  }
}
var _c0 = function(a0) {
  return {
    "gu-empty": a0
  };
};
var _c1 = ["*"];
var i = 0;
function getNextId() {
  return i++;
}
var ContainerComponent = class {
  constructor() {
    this.copy = false;
    this.removeOnSpill = false;
    this.dropZone = `@@DefaultDropZone-${getNextId()}@@`;
    this.drop = new EventEmitter();
    this.drag = new EventEmitter();
    this.over = new EventEmitter();
    this.out = new EventEmitter();
    this.remove = new EventEmitter();
    this.cancel = new EventEmitter();
  }
  get dropZones() {
    return this._dropZones || this._defaultZones;
  }
  set dropZones(val) {
    this._dropZones = val;
  }
  // @Input() classes: any = {};
  // @Input() dragulaOptions: any;
  set templateInput(template) {
    this.template = template;
  }
  set templateChild(template) {
    this.template = template;
  }
  ngOnInit() {
    this._defaultZones = [this.dropZone];
  }
  ngAfterViewInit() {
    this.droppable.drag.subscribe((v) => this.drag.emit(v));
    this.droppable.drop.subscribe((v) => this.drop.emit(v));
    this.droppable.over.subscribe((v) => this.over.emit(v));
    this.droppable.out.subscribe((v) => this.out.emit(v));
    this.droppable.remove.subscribe((v) => this.remove.emit(v));
    this.droppable.cancel.subscribe((v) => this.cancel.emit(v));
  }
};
ContainerComponent.ɵfac = function ContainerComponent_Factory(t) {
  return new (t || ContainerComponent)();
};
ContainerComponent.ɵcmp = ɵɵdefineComponent({
  type: ContainerComponent,
  selectors: [["ngx-dnd-container"]],
  contentQueries: function ContainerComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, TemplateRef, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templateChild = _t.first);
    }
  },
  viewQuery: function ContainerComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(DroppableDirective, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.droppable = _t.first);
    }
  },
  inputs: {
    model: "model",
    copy: "copy",
    removeOnSpill: "removeOnSpill",
    droppableItemClass: "droppableItemClass",
    dropZone: "dropZone",
    dropZones: "dropZones",
    moves: "moves",
    templateInput: ["template", "templateInput"]
  },
  outputs: {
    drop: "drop",
    drag: "drag",
    over: "over",
    out: "out",
    remove: "remove",
    cancel: "cancel"
  },
  ngContentSelectors: _c1,
  decls: 3,
  vars: 9,
  consts: [["ngxDroppable", "", 1, "ngx-dnd-container", 3, "dropZone", "model", "copy", "ngClass", "removeOnSpill"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["ngxDraggable", "", 3, "model", "dropZone", "dropZones", "copy", "moves", "removeOnSpill", "droppableItemClass"]],
  template: function ContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "div", 0);
      ɵɵtemplate(1, ContainerComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
      ɵɵtemplate(2, ContainerComponent_ng_content_2_Template, 1, 0, "ng-content", 1);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("dropZone", ctx.dropZone)("model", ctx.model)("copy", ctx.copy)("ngClass", ɵɵpureFunction1(7, _c0, !(ctx.model == null ? null : ctx.model.length)))("removeOnSpill", ctx.removeOnSpill);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.model);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", !ctx.model);
    }
  },
  styles: ['.ngx-dnd-container{background-color:#fff3;border:2px solid red;margin:10px;padding:10px}.ngx-dnd-container.gu-empty{border:2px dotted red}.ngx-dnd-container:nth-child(odd){background-color:#0003}.ngx-dnd-container .ex-moved{background-color:#e74c3c}.ngx-dnd-container .ex-over{background-color:#ffffff4d}.ngx-dnd-container .handle{padding:0 5px;margin-right:5px;background-color:#0006;cursor:move}.no-select{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.clearfix:after{content:" ";display:block;height:0;clear:both}\n'],
  encapsulation: 2
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContainerComponent, [{
    type: Component,
    args: [{
      selector: "ngx-dnd-container",
      encapsulation: ViewEncapsulation$1.None,
      template: `<div
  ngxDroppable
  [dropZone]="dropZone"
  [model]="model"
  [copy]="copy"
  [ngClass]="{ 'gu-empty': !model?.length }"
  [removeOnSpill]="removeOnSpill"
  class="ngx-dnd-container"
>
  <ng-container *ngIf="model">
    <ng-container *ngFor="let item of model">
      <ngx-dnd-item
        ngxDraggable
        [model]="item"
        [dropZone]="dropZone"
        [dropZones]="dropZones"
        [copy]="copy"
        [moves]="moves"
        [removeOnSpill]="removeOnSpill"
        [droppableItemClass]="droppableItemClass"
      >
      </ngx-dnd-item>
    </ng-container>
  </ng-container>
  <ng-content *ngIf="!model"></ng-content>
</div>
`,
      styles: ['.ngx-dnd-container{background-color:#fff3;border:2px solid red;margin:10px;padding:10px}.ngx-dnd-container.gu-empty{border:2px dotted red}.ngx-dnd-container:nth-child(odd){background-color:#0003}.ngx-dnd-container .ex-moved{background-color:#e74c3c}.ngx-dnd-container .ex-over{background-color:#ffffff4d}.ngx-dnd-container .handle{padding:0 5px;margin-right:5px;background-color:#0006;cursor:move}.no-select{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.clearfix:after{content:" ";display:block;height:0;clear:both}\n']
    }]
  }], null, {
    model: [{
      type: Input
    }],
    copy: [{
      type: Input
    }],
    removeOnSpill: [{
      type: Input
    }],
    droppableItemClass: [{
      type: Input
    }],
    dropZone: [{
      type: Input
    }],
    dropZones: [{
      type: Input
    }],
    moves: [{
      type: Input
    }],
    templateInput: [{
      type: Input,
      args: ["template"]
    }],
    templateChild: [{
      type: ContentChild,
      args: [TemplateRef, {
        static: true
      }]
    }],
    droppable: [{
      type: ViewChild,
      args: [DroppableDirective, {
        static: true
      }]
    }],
    drop: [{
      type: Output
    }],
    drag: [{
      type: Output
    }],
    over: [{
      type: Output
    }],
    out: [{
      type: Output
    }],
    remove: [{
      type: Output
    }],
    cancel: [{
      type: Output
    }]
  });
})();
function ItemComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "ngx-dnd-container", 3);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("model", ctx_r0.model)("template", ctx_r0.container.template)("dropZone", ctx_r0.dropZone)("dropZones", ctx_r0.dropZones)("removeOnSpill", ctx_r0.removeOnSpill)("droppableItemClass", ctx_r0.droppableItemClass)("copy", ctx_r0.copy);
  }
}
function ItemComponent_ng_container_2_1_ng_template_0_Template(rf, ctx) {
}
function ItemComponent_ng_container_2_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ItemComponent_ng_container_2_1_ng_template_0_Template, 0, 0, "ng-template", 5);
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r4.container.template)("ngTemplateOutletContext", ctx_r4.data);
  }
}
function ItemComponent_ng_container_2_ng_container_2_ngx_dnd_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ngx-dnd-container", 3);
  }
  if (rf & 2) {
    const ctx_r7 = ɵɵnextContext(3);
    ɵɵproperty("model", ctx_r7.model.children)("template", ctx_r7.container.template)("dropZone", ctx_r7.dropZone)("dropZones", ctx_r7.dropZones)("removeOnSpill", ctx_r7.removeOnSpill)("droppableItemClass", ctx_r7.droppableItemClass)("copy", ctx_r7.copy);
  }
}
function ItemComponent_ng_container_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 6);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵtemplate(3, ItemComponent_ng_container_2_ng_container_2_ngx_dnd_container_3_Template, 1, 7, "ngx-dnd-container", 7);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r5.model.label, " ");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r5.model.children);
  }
}
function ItemComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ItemComponent_ng_container_2_1_Template, 1, 2, null, 4);
    ɵɵtemplate(2, ItemComponent_ng_container_2_ng_container_2_Template, 4, 2, "ng-container", 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1.container.template);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r1.container.template);
  }
}
function ItemComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function ItemComponent_ng_container_4_1_ng_template_0_Template(rf, ctx) {
}
function ItemComponent_ng_container_4_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ItemComponent_ng_container_4_1_ng_template_0_Template, 0, 0, "ng-template", 5);
  }
  if (rf & 2) {
    const ctx_r8 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r8.container.template)("ngTemplateOutletContext", ctx_r8.data);
  }
}
function ItemComponent_ng_container_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 6);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r9 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r9.model, " ");
  }
}
function ItemComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ItemComponent_ng_container_4_1_Template, 1, 2, null, 4);
    ɵɵtemplate(2, ItemComponent_ng_container_4_div_2_Template, 2, 1, "div", 8);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r3.container.template);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r3.container.template);
  }
}
var ItemComponent = class {
  constructor(container, draggableDirective) {
    this.container = container;
    this.draggableDirective = draggableDirective;
    this._copy = false;
    this._removeOnSpill = false;
  }
  get dropZone() {
    return this._dropZone || this.container.dropZone;
  }
  set dropZone(val) {
    this._dropZone = val;
  }
  get dropZones() {
    return this._dropZones || this.container.dropZones;
  }
  set dropZones(val) {
    this._dropZones = val;
  }
  get droppableItemClass() {
    return this._droppableItemClass || this.container.droppableItemClass;
  }
  set droppableItemClass(val) {
    this._droppableItemClass = val;
  }
  get removeOnSpill() {
    return typeof this._removeOnSpill === "boolean" ? this._removeOnSpill : this.container.removeOnSpill;
  }
  set removeOnSpill(val) {
    this._removeOnSpill = val;
  }
  get copy() {
    return typeof this._copy === "boolean" ? this._copy : this.container.copy;
  }
  set copy(val) {
    this._copy = val;
  }
  get hasHandle() {
    return this.draggableDirective.hasHandle;
  }
  get moveDisabled() {
    return !this.draggableDirective.canMove();
  }
  get classString() {
    const itemClass = typeof this.droppableItemClass === "function" ? this.droppableItemClass(this.model) : this.droppableItemClass;
    const classes = ["ngx-dnd-item", itemClass || ""];
    if (this.moveDisabled) {
      classes.push("move-disabled");
    }
    if (this.hasHandle) {
      classes.push("has-handle");
    }
    return classes.join(" ");
  }
  get type() {
    if (Array.isArray(this.model)) {
      return "array";
    }
    return typeof this.model;
  }
  ngOnInit() {
    this.data = {
      model: this.model,
      type: this.type,
      dropZone: this.dropZone,
      template: this.container.template
    };
  }
};
ItemComponent.ɵfac = function ItemComponent_Factory(t) {
  return new (t || ItemComponent)(ɵɵdirectiveInject(ContainerComponent), ɵɵdirectiveInject(DraggableDirective));
};
ItemComponent.ɵcmp = ɵɵdefineComponent({
  type: ItemComponent,
  selectors: [["ngx-dnd-item"]],
  hostVars: 2,
  hostBindings: function ItemComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.classString);
    }
  },
  inputs: {
    model: "model",
    dropZone: "dropZone",
    dropZones: "dropZones",
    droppableItemClass: "droppableItemClass",
    removeOnSpill: "removeOnSpill",
    copy: "copy"
  },
  decls: 5,
  vars: 4,
  consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "model", "template", "dropZone", "dropZones", "removeOnSpill", "droppableItemClass", "copy"], [4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ngx-dnd-content"], [3, "model", "template", "dropZone", "dropZones", "removeOnSpill", "droppableItemClass", "copy", 4, "ngIf"], ["class", "ngx-dnd-content", 4, "ngIf"]],
  template: function ItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementContainerStart(0, 0);
      ɵɵtemplate(1, ItemComponent_ng_container_1_Template, 2, 7, "ng-container", 1);
      ɵɵtemplate(2, ItemComponent_ng_container_2_Template, 3, 2, "ng-container", 1);
      ɵɵtemplate(3, ItemComponent_ng_container_3_Template, 1, 0, "ng-container", 1);
      ɵɵtemplate(4, ItemComponent_ng_container_4_Template, 3, 2, "ng-container", 2);
      ɵɵelementContainerEnd();
    }
    if (rf & 2) {
      ɵɵproperty("ngSwitch", ctx.type);
      ɵɵadvance(1);
      ɵɵproperty("ngSwitchCase", "array");
      ɵɵadvance(1);
      ɵɵproperty("ngSwitchCase", "object");
      ɵɵadvance(1);
      ɵɵproperty("ngSwitchCase", "undefined");
    }
  },
  directives: [NgSwitch, NgSwitchCase, ContainerComponent, NgIf, NgTemplateOutlet, NgSwitchDefault],
  styles: ['.ngx-dnd-box,.ngx-dnd-item{margin:10px;padding:10px;background-color:#0003;transition:opacity .4s ease-in-out;border:1px solid lightblue;display:block}.ngx-dnd-box:not(.has-handle):not(.move-disabled),.ngx-dnd-box.has-handle [ngxdraghandle],.ngx-dnd-box.has-handle [ngxDragHandle],.ngx-dnd-item:not(.has-handle):not(.move-disabled),.ngx-dnd-item.has-handle [ngxdraghandle],.ngx-dnd-item.has-handle [ngxDragHandle]{cursor:move;cursor:grab;cursor:-webkit-grab}.ngx-dnd-box .ngx-dnd-content,.ngx-dnd-item .ngx-dnd-content{-webkit-user-select:none;-moz-user-select:none;user-select:none}.ngx-dnd-box:hover,.ngx-dnd-item:hover{border:1px solid blue}.ngx-dnd-box{height:40px;width:40px;line-height:20px;text-align:center;float:left}.gu-mirror{position:fixed!important;margin:0!important;z-index:9999!important;opacity:.8;-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=80)";filter:alpha(opacity=80)}.gu-hide{display:none!important}.gu-unselectable{-webkit-user-select:none!important;-moz-user-select:none!important;user-select:none!important}.gu-transit{opacity:.2;-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=20)";filter:alpha(opacity=20)}\n'],
  encapsulation: 2
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ItemComponent, [{
    type: Component,
    args: [{
      selector: "ngx-dnd-item",
      encapsulation: ViewEncapsulation$1.None,
      template: `<ng-container [ngSwitch]="type">
  <ng-container *ngSwitchCase="'array'">
    <ngx-dnd-container
      [model]="model"
      [template]="container.template"
      [dropZone]="dropZone"
      [dropZones]="dropZones"
      [removeOnSpill]="removeOnSpill"
      [droppableItemClass]="droppableItemClass"
      [copy]="copy"
    >
    </ngx-dnd-container>
  </ng-container>

  <ng-container *ngSwitchCase="'object'">
    <ng-template *ngIf="container.template" [ngTemplateOutlet]="container.template" [ngTemplateOutletContext]="data">
    </ng-template>
    <ng-container *ngIf="!container.template">
      <div class="ngx-dnd-content">
        {{ model.label }}
      </div>
      <ngx-dnd-container
        *ngIf="model.children"
        [model]="model.children"
        [template]="container.template"
        [dropZone]="dropZone"
        [dropZones]="dropZones"
        [removeOnSpill]="removeOnSpill"
        [droppableItemClass]="droppableItemClass"
        [copy]="copy"
      >
      </ngx-dnd-container>
    </ng-container>
  </ng-container>

  <ng-container *ngSwitchCase="'undefined'"> </ng-container>

  <ng-container *ngSwitchDefault>
    <ng-template *ngIf="container.template" [ngTemplateOutlet]="container.template" [ngTemplateOutletContext]="data">
    </ng-template>
    <div *ngIf="!container.template" class="ngx-dnd-content">
      {{ model }}
    </div>
  </ng-container>
</ng-container>
`,
      styles: ['.ngx-dnd-box,.ngx-dnd-item{margin:10px;padding:10px;background-color:#0003;transition:opacity .4s ease-in-out;border:1px solid lightblue;display:block}.ngx-dnd-box:not(.has-handle):not(.move-disabled),.ngx-dnd-box.has-handle [ngxdraghandle],.ngx-dnd-box.has-handle [ngxDragHandle],.ngx-dnd-item:not(.has-handle):not(.move-disabled),.ngx-dnd-item.has-handle [ngxdraghandle],.ngx-dnd-item.has-handle [ngxDragHandle]{cursor:move;cursor:grab;cursor:-webkit-grab}.ngx-dnd-box .ngx-dnd-content,.ngx-dnd-item .ngx-dnd-content{-webkit-user-select:none;-moz-user-select:none;user-select:none}.ngx-dnd-box:hover,.ngx-dnd-item:hover{border:1px solid blue}.ngx-dnd-box{height:40px;width:40px;line-height:20px;text-align:center;float:left}.gu-mirror{position:fixed!important;margin:0!important;z-index:9999!important;opacity:.8;-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=80)";filter:alpha(opacity=80)}.gu-hide{display:none!important}.gu-unselectable{-webkit-user-select:none!important;-moz-user-select:none!important;user-select:none!important}.gu-transit{opacity:.2;-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=20)";filter:alpha(opacity=20)}\n']
    }]
  }], function() {
    return [{
      type: ContainerComponent
    }, {
      type: DraggableDirective
    }];
  }, {
    model: [{
      type: Input
    }],
    dropZone: [{
      type: Input
    }],
    dropZones: [{
      type: Input
    }],
    droppableItemClass: [{
      type: Input
    }],
    removeOnSpill: [{
      type: Input
    }],
    copy: [{
      type: Input
    }],
    classString: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var components = [ContainerComponent, ItemComponent];
var directives = [DraggableDirective, DroppableDirective, DragHandleDirective];
var NgxDnDModule = class _NgxDnDModule {
  static forRoot() {
    return {
      ngModule: _NgxDnDModule,
      providers: [DrakeStoreService]
    };
  }
};
NgxDnDModule.ɵfac = function NgxDnDModule_Factory(t) {
  return new (t || NgxDnDModule)();
};
NgxDnDModule.ɵmod = ɵɵdefineNgModule({
  type: NgxDnDModule
});
NgxDnDModule.ɵinj = ɵɵdefineInjector({
  imports: [[CommonModule]]
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxDnDModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      declarations: [...components, ...directives],
      exports: [...components, ...directives]
    }]
  }], null, null);
})();
(function() {
  (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NgxDnDModule, {
    declarations: [ContainerComponent, ItemComponent, DraggableDirective, DroppableDirective, DragHandleDirective],
    imports: [CommonModule],
    exports: [ContainerComponent, ItemComponent, DraggableDirective, DroppableDirective, DragHandleDirective]
  });
})();
ɵɵsetComponentScope(ContainerComponent, [DroppableDirective, NgClass, NgIf, NgForOf, ItemComponent, DraggableDirective], []);
export {
  ContainerComponent,
  DragHandleDirective,
  DraggableDirective,
  DrakeStoreService,
  DroppableDirective,
  ItemComponent,
  NgxDnDModule
};
//# sourceMappingURL=@swimlane_ngx-dnd.js.map
