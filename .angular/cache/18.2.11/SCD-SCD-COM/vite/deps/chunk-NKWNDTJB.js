import {
  KENDO_RESIZESENSOR,
  ResizeBatchService,
  ResizeSensorComponent,
  hasObservers,
  isDocumentAvailable
} from "./chunk-5AZCHGRK.js";
import {
  A
} from "./chunk-RWPIEFVW.js";
import {
  AnimationBuilder,
  animate,
  style
} from "./chunk-OBI53R7Q.js";
import {
  NgClass,
  NgTemplateOutlet
} from "./chunk-YS5E6LKP.js";
import {
  ApplicationRef,
  Component,
  ComponentFactoryResolver$1,
  ElementRef,
  EventEmitter,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  NgZone,
  Optional,
  Output,
  Renderer2,
  TemplateRef,
  ViewChild,
  isDevMode,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
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
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵviewQuery
} from "./chunk-R7LRY632.js";
import {
  fromEvent,
  merge
} from "./chunk-UG3XN6F5.js";
import {
  auditTime,
  from
} from "./chunk-WISTXZPE.js";

// node_modules/@progress/kendo-popup-common/dist/es/owner-document.js
var owner_document_default = function(element) {
  return element && element.ownerDocument || document;
};

// node_modules/@progress/kendo-popup-common/dist/es/document.js
var getDocumentElement = function(element) {
  return owner_document_default(element).documentElement;
};

// node_modules/@progress/kendo-popup-common/dist/es/scrollbar-width.js
var cachedWidth = 0;
var scrollbarWidth = function() {
  if (!cachedWidth && typeof document !== "undefined") {
    var div = document.createElement("div");
    div.style.cssText = "overflow:scroll;overflow-x:hidden;zoom:1;clear:both;display:block";
    div.innerHTML = "&nbsp;";
    document.body.appendChild(div);
    cachedWidth = div.offsetWidth - div.scrollWidth;
    document.body.removeChild(div);
  }
  return cachedWidth;
};

// node_modules/@progress/kendo-popup-common/dist/es/window.js
var getWindow = function(element) {
  return owner_document_default(element).defaultView;
};

// node_modules/@progress/kendo-popup-common/dist/es/window-viewport.js
var windowViewport = function(element) {
  var win = getWindow(element);
  var documentElement = getDocumentElement(element);
  var result = {
    height: win.innerHeight,
    width: win.innerWidth
  };
  if (documentElement.scrollHeight - documentElement.clientHeight > 0) {
    result.width -= scrollbarWidth();
  }
  return result;
};

// node_modules/@progress/kendo-popup-common/dist/es/offset.js
var rectOfHiddenElement = function(element) {
  var _a = element.style, display = _a.display, left = _a.left, position2 = _a.position;
  element.style.display = "";
  element.style.left = "-10000px";
  element.style.position = "absolute";
  var rect = element.getBoundingClientRect();
  element.style.display = display;
  element.style.left = left;
  element.style.position = position2;
  return {
    top: rect.top,
    left: rect.left,
    height: rect.height,
    width: rect.width
  };
};
var offset = function(element) {
  var rect = element.getBoundingClientRect();
  var left = rect.left, top = rect.top;
  if (!rect.height && !rect.width) {
    rect = rectOfHiddenElement(element);
  }
  return {
    top,
    left,
    height: rect.height,
    width: rect.width
  };
};

// node_modules/@progress/kendo-popup-common/dist/es/scroll-position.js
var scrollPosition = function(element) {
  var documentElement = getDocumentElement(element);
  var win = getWindow(element);
  return {
    x: win.pageXOffset || documentElement.scrollLeft || 0,
    y: win.pageYOffset || documentElement.scrollTop || 0
  };
};

// node_modules/@progress/kendo-popup-common/dist/es/offset-parent.js
var offsetParent = function(element) {
  var offsetParent2 = element.offsetParent;
  while (offsetParent2 && offsetParent2.style.position === "static") {
    offsetParent2 = offsetParent2.offsetParent;
  }
  return offsetParent2 || element.ownerDocument.documentElement;
};

// node_modules/@progress/kendo-popup-common/dist/es/element-scroll-position.js
var elementScrollPosition = function(element) {
  if (element === (element.ownerDocument || {}).body) {
    return scrollPosition(element);
  }
  return {
    x: element.scrollLeft,
    y: element.scrollTop
  };
};

// node_modules/@progress/kendo-popup-common/dist/es/parent-scroll-position.js
var parentScrollPosition = function(element) {
  var parent = offsetParent(element);
  return parent ? elementScrollPosition(parent) : {
    x: 0,
    y: 0
  };
};

// node_modules/@progress/kendo-popup-common/dist/es/offset-parent-scroll-position.js
var offsetParentScrollPosition = function(offsetParentElement, element) {
  return offsetParentElement ? elementScrollPosition(offsetParentElement) : parentScrollPosition(element);
};

// node_modules/@progress/kendo-popup-common/dist/es/position.js
var position = function(element, parent) {
  var win = getWindow(element);
  var elementStyles = win.getComputedStyle(element);
  var offset2 = offset(element);
  var parentElement = parent || offsetParent(element);
  var ownerDocument = element.ownerDocument;
  var useRelative = parentElement !== ownerDocument.body && parentElement !== ownerDocument.documentElement;
  var parentOffset = {
    top: 0,
    left: 0,
    height: 0,
    width: 0
  };
  if (elementStyles.position !== "fixed" && useRelative) {
    var parentStyles = win.getComputedStyle(parentElement);
    parentOffset = offset(parentElement);
    parentOffset.top += parseFloat(parentStyles.borderTopWidth);
    parentOffset.left += parseFloat(parentStyles.borderLeftWidth);
  }
  return {
    top: offset2.top - parentOffset.top,
    left: offset2.left - parentOffset.left,
    height: offset2.height,
    width: offset2.width
  };
};

// node_modules/@progress/kendo-popup-common/dist/es/position-with-scroll.js
var positionWithScroll = function(element, parent, scale) {
  if (scale === void 0) {
    scale = 1;
  }
  var offsetParentElement = parent ? offsetParent(parent) : null;
  var _a = position(element, offsetParentElement), top = _a.top, left = _a.left, height = _a.height, width = _a.width;
  var _b = offsetParentScrollPosition(offsetParentElement, element), x = _b.x, y = _b.y;
  var ownerDocument = element.ownerDocument;
  var positionScale = offsetParentElement === ownerDocument.body || offsetParentElement === ownerDocument.documentElement ? 1 : scale;
  return {
    top: top + y * positionScale,
    left: left + x * positionScale,
    height,
    width
  };
};

// node_modules/@progress/kendo-popup-common/dist/es/align-point.js
var AlignPoint;
(function(AlignPoint2) {
  AlignPoint2["bottom"] = "bottom";
  AlignPoint2["center"] = "center";
  AlignPoint2["middle"] = "middle";
  AlignPoint2["left"] = "left";
  AlignPoint2["right"] = "right";
  AlignPoint2["top"] = "top";
})(AlignPoint || (AlignPoint = {}));

// node_modules/@progress/kendo-popup-common/dist/es/align.js
var align = function(options) {
  var anchorRect = options.anchorRect, anchorAlign = options.anchorAlign, elementRect = options.elementRect, elementAlign = options.elementAlign, _a = options.margin, margin = _a === void 0 ? {} : _a;
  var anchorHorizontal = anchorAlign.horizontal;
  var anchorVertical = anchorAlign.vertical;
  var elementHorizontal = elementAlign.horizontal;
  var elementVertical = elementAlign.vertical;
  var horizontalMargin = margin.horizontal || 0;
  var verticalMargin = margin.vertical || 0;
  var top = anchorRect.top;
  var left = anchorRect.left;
  if (anchorVertical === AlignPoint.bottom) {
    top += anchorRect.height;
  }
  if (anchorVertical === AlignPoint.center || anchorVertical === AlignPoint.middle) {
    top += Math.round(anchorRect.height / 2);
  }
  if (elementVertical === AlignPoint.bottom) {
    top -= elementRect.height;
    verticalMargin *= -1;
  }
  if (elementVertical === AlignPoint.center || elementVertical === AlignPoint.middle) {
    top -= Math.round(elementRect.height / 2);
    verticalMargin *= -1;
  }
  if (anchorHorizontal === AlignPoint.right) {
    left += anchorRect.width;
  }
  if (anchorHorizontal === AlignPoint.center || anchorHorizontal === AlignPoint.middle) {
    left += Math.round(anchorRect.width / 2);
  }
  if (elementHorizontal === AlignPoint.right) {
    left -= elementRect.width;
    horizontalMargin *= -1;
  }
  if (elementHorizontal === AlignPoint.center || elementHorizontal === AlignPoint.middle) {
    left -= Math.round(elementRect.width / 2);
    horizontalMargin *= -1;
  }
  return {
    top: top + verticalMargin,
    left: left + horizontalMargin
  };
};

// node_modules/@progress/kendo-popup-common/dist/es/add-scroll.js
var addScroll = function(rect, scroll) {
  return {
    top: rect.top + scroll.y,
    left: rect.left + scroll.x,
    height: rect.height,
    width: rect.width
  };
};

// node_modules/@progress/kendo-popup-common/dist/es/bounding-offset.js
var boundingOffset = function(element) {
  if (!element.getBoundingClientRect) {
    var viewport = windowViewport(element);
    return {
      bottom: viewport.height,
      left: 0,
      right: viewport.width,
      top: 0
    };
  }
  var _a = element.getBoundingClientRect(), bottom = _a.bottom, left = _a.left, right = _a.right, top = _a.top;
  return {
    bottom,
    left,
    right,
    top
  };
};

// node_modules/@progress/kendo-popup-common/dist/es/parents.js
var parents = function(element, until) {
  var result = [];
  var next = element.parentNode;
  while (next) {
    result.push(next);
    if (next === until) {
      break;
    }
    next = next.parentNode;
  }
  return result;
};

// node_modules/@progress/kendo-popup-common/dist/es/remove-scroll.js
var removeScroll = function(rect, scroll) {
  return {
    top: rect.top - scroll.y,
    left: rect.left - scroll.x,
    height: rect.height,
    width: rect.width
  };
};

// node_modules/@progress/kendo-popup-common/dist/es/collision.js
var Collision;
(function(Collision2) {
  Collision2["fit"] = "fit";
  Collision2["flip"] = "flip";
  Collision2["none"] = "none";
})(Collision || (Collision = {}));

// node_modules/@progress/kendo-popup-common/dist/es/restrict-to-view.js
var fit = function(position2, size, viewPortSize) {
  var output = 0;
  if (position2 + size > viewPortSize) {
    output = viewPortSize - (position2 + size);
  }
  if (position2 < 0) {
    output = -position2;
  }
  return output;
};
var flip = function(_a) {
  var offset2 = _a.offset, size = _a.size, anchorSize = _a.anchorSize, viewPortSize = _a.viewPortSize, anchorAlignPoint = _a.anchorAlignPoint, elementAlignPoint = _a.elementAlignPoint, margin = _a.margin;
  var output = 0;
  var isPositionCentered = elementAlignPoint === AlignPoint.center || elementAlignPoint === AlignPoint.middle;
  var isOriginCentered = anchorAlignPoint === AlignPoint.center || anchorAlignPoint === AlignPoint.middle;
  var marginToAdd = 2 * margin;
  if (elementAlignPoint !== anchorAlignPoint && !isPositionCentered && !isOriginCentered) {
    var isBeforeAnchor = anchorAlignPoint === AlignPoint.top || anchorAlignPoint === AlignPoint.left;
    if (offset2 < 0 && isBeforeAnchor) {
      output = size + anchorSize + marginToAdd;
      if (offset2 + output + size > viewPortSize) {
        output = 0;
      }
    } else if (offset2 >= 0 && !isBeforeAnchor) {
      if (offset2 + size > viewPortSize) {
        output += -(anchorSize + size + marginToAdd);
      }
      if (offset2 + output < 0) {
        output = 0;
      }
    }
  }
  return output;
};
var restrictToView = function(_a) {
  var anchorRect = _a.anchorRect, anchorAlign = _a.anchorAlign, elementRect = _a.elementRect, elementAlign = _a.elementAlign, collisions = _a.collisions, viewPort = _a.viewPort, _b = _a.margin, margin = _b === void 0 ? {} : _b;
  var elementTop = elementRect.top, elementLeft = elementRect.left, elementHeight = elementRect.height, elementWidth = elementRect.width;
  var viewPortHeight = viewPort.height, viewPortWidth = viewPort.width;
  var horizontalMargin = margin.horizontal || 0;
  var verticalMargin = margin.vertical || 0;
  var left = 0;
  var top = 0;
  var isVerticalFit = collisions.vertical === Collision.fit;
  var isHorizontalFit = collisions.horizontal === Collision.fit;
  var isVerticalFlip = collisions.vertical === Collision.flip;
  var isHorizontalFlip = collisions.horizontal === Collision.flip;
  if (isVerticalFit) {
    top += fit(elementTop, elementHeight, viewPortHeight);
  }
  if (isHorizontalFit) {
    left += fit(elementLeft, elementWidth, viewPortWidth);
  }
  if (isVerticalFlip) {
    top += flip({
      margin: verticalMargin,
      offset: elementTop,
      size: elementHeight,
      anchorSize: anchorRect.height,
      viewPortSize: viewPortHeight,
      anchorAlignPoint: anchorAlign.vertical,
      elementAlignPoint: elementAlign.vertical
    });
  }
  if (isHorizontalFlip) {
    left += flip({
      margin: horizontalMargin,
      offset: elementLeft,
      size: elementWidth,
      anchorSize: anchorRect.width,
      viewPortSize: viewPortWidth,
      anchorAlignPoint: anchorAlign.horizontal,
      elementAlignPoint: elementAlign.horizontal
    });
  }
  var flippedVertical = isVerticalFlip && top !== 0;
  var flippedHorizontal = isHorizontalFlip && left !== 0;
  var fittedVertical = isVerticalFit && top !== 0;
  var fittedHorizontal = isHorizontalFit && left !== 0;
  return {
    flipped: flippedHorizontal || flippedVertical,
    fitted: fittedVertical || fittedHorizontal,
    flip: {
      horizontal: flippedHorizontal,
      vertical: flippedVertical
    },
    fit: {
      horizontal: fittedHorizontal,
      vertical: fittedVertical
    },
    offset: {
      left,
      top
    }
  };
};

// node_modules/@progress/kendo-popup-common/dist/es/siblings.js
var siblings = function(element) {
  var _a;
  var result = [];
  var sibling = (_a = element.parentNode) === null || _a === void 0 ? void 0 : _a.firstElementChild;
  while (sibling) {
    if (sibling !== element) {
      result.push(sibling);
    }
    sibling = sibling.nextElementSibling;
  }
  return result;
};

// node_modules/@progress/kendo-popup-common/dist/es/sibling-container.js
var siblingContainer = function(anchor, container) {
  var parentElements = parents(anchor);
  var containerElement = container;
  var siblingElements;
  var result;
  while (containerElement) {
    siblingElements = siblings(containerElement);
    result = parentElements.reduce(function(list, p) {
      return list.concat(siblingElements.filter(function(s) {
        return s === p;
      }));
    }, [])[0];
    if (result) {
      break;
    }
    containerElement = containerElement.parentElement;
  }
  return result;
};

// node_modules/@progress/kendo-popup-common/dist/es/utils.js
function memoize(fun) {
  var _this = this;
  var result;
  var called = false;
  return function() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    if (called) {
      return result;
    }
    result = fun.apply(_this, args);
    called = true;
    return result;
  };
}
var hasRelativeStackingContext = memoize(function(elementSource) {
  if (!canUseDOM()) {
    return false;
  }
  var currentDocument = elementSource ? elementSource.ownerDocument : document;
  if (!currentDocument || !currentDocument.body) {
    return false;
  }
  var top = 10;
  var parent = currentDocument.createElement("div");
  parent.style.transform = "matrix(10, 0, 0, 10, 0, 0)";
  parent.innerHTML = '<div style="position: fixed; top: '.concat(top, 'px;">child</div>');
  currentDocument.body.appendChild(parent);
  var isDifferent = parent.children[0].getBoundingClientRect().top !== top;
  currentDocument.body.removeChild(parent);
  return isDifferent;
});
var canUseDOM = function() {
  return Boolean(typeof window !== "undefined" && window.document && // eslint-disable-next-line
  window.document.createElement);
};

// node_modules/@progress/kendo-angular-popup/fesm2022/progress-kendo-angular-popup.mjs
var _c0 = ["container"];
var _c1 = ["*"];
function PopupComponent_Conditional_4_ng_template_0_Template(rf, ctx) {
}
function PopupComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, PopupComponent_Conditional_4_ng_template_0_Template, 0, 0, "ng-template", 3);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.content);
  }
}
var eitherRect = (rect, offset2) => {
  if (!rect) {
    return {
      height: 0,
      left: offset2.left,
      top: offset2.top,
      width: 0
    };
  }
  return rect;
};
var removeStackingOffset = (rect, stackingOffset) => {
  if (!stackingOffset) {
    return rect;
  }
  const result = {
    height: rect.height,
    left: rect.left - stackingOffset.left,
    top: rect.top - stackingOffset.top,
    width: rect.width
  };
  return result;
};
var isDifferentOffset = (oldOffset, newOffset) => {
  const {
    left: oldLeft,
    top: oldTop
  } = oldOffset;
  const {
    left: newLeft,
    top: newTop
  } = newOffset;
  return Math.abs(oldLeft - newLeft) >= 1 || Math.abs(oldTop - newTop) >= 1;
};
var isWindowAvailable = () => {
  return typeof window !== "undefined";
};
var OVERFLOW_REGEXP = /auto|scroll/;
var overflowElementStyle = (element) => {
  return `${element.style.overflow}${element.style.overflowX}${element.style.overflowY}`;
};
var overflowComputedStyle = (element) => {
  const styles = window.getComputedStyle(element);
  return `${styles.overflow}${styles.overflowX}${styles.overflowY}`;
};
var overflowStyle = (element) => {
  return overflowElementStyle(element) || overflowComputedStyle(element);
};
var scrollableParents = (element) => {
  const parentElements = [];
  if (!isDocumentAvailable() || !isWindowAvailable()) {
    return parentElements;
  }
  let parent = element.parentElement;
  while (parent) {
    if (OVERFLOW_REGEXP.test(overflowStyle(parent)) || parent.hasAttribute("data-scrollable")) {
      parentElements.push(parent);
    }
    parent = parent.parentElement;
  }
  parentElements.push(window);
  return parentElements;
};
var FRAME_DURATION = 1e3 / 60;
function memoize2(fun) {
  let result;
  let called = false;
  return (...args) => {
    if (called) {
      return result;
    }
    result = fun(...args);
    called = true;
    return result;
  };
}
var hasRelativeStackingContext2 = memoize2(() => {
  if (!isDocumentAvailable() && document.body !== null) {
    return false;
  }
  const top = 10;
  const parent = document.createElement("div");
  parent.style.transform = "matrix(10, 0, 0, 10, 0, 0)";
  const childElement = document.createElement("div");
  childElement.style.position = "fixed";
  childElement.style.top = `${top}px`;
  childElement.textContent = "child";
  parent.appendChild(childElement);
  document.body.appendChild(parent);
  const isDifferent = parent.children[0].getBoundingClientRect().top !== top;
  document.body.removeChild(parent);
  return isDifferent;
});
var zIndex2 = (anchor, container) => {
  if (!anchor || !isDocumentAvailable() || !isWindowAvailable()) {
    return null;
  }
  const sibling = siblingContainer(anchor, container);
  if (!sibling) {
    return null;
  }
  const result = [anchor].concat(parents(anchor, sibling)).reduce((index, p) => {
    const zIndexStyle = p.style.zIndex || window.getComputedStyle(p).zIndex;
    const current = parseInt(zIndexStyle, 10);
    return current > index ? current : index;
  }, 0);
  return result ? result + 1 : null;
};
var scaleRect = (rect, scale) => {
  if (!rect || scale === 1) {
    return rect;
  }
  return {
    height: rect.height / scale,
    left: rect.left / scale,
    top: rect.top / scale,
    width: rect.width / scale
  };
};
var STYLES = ["font-size", "font-family", "font-stretch", "font-style", "font-weight", "line-height"];
var DOMService = class _DOMService {
  _dummy;
  addOffset(current, addition) {
    return {
      left: current.left + addition.left,
      top: current.top + addition.top
    };
  }
  addScroll(rect, scroll) {
    return addScroll(rect, scroll);
  }
  align(settings) {
    return align(settings);
  }
  boundingOffset(el) {
    return boundingOffset(el);
  }
  getFontStyles(el) {
    const window2 = this.getWindow();
    if (!window2 || !el) {
      return [];
    }
    const computedStyles = window2.getComputedStyle(el);
    return STYLES.map((key) => ({
      key,
      value: computedStyles[key]
    }));
  }
  getWindow() {
    return isWindowAvailable() ? window : null;
  }
  hasOffsetParent(el) {
    if (!el || !isDocumentAvailable()) {
      return false;
    }
    return !!this.nativeElement(el).offsetParent;
  }
  offset(el) {
    if (!el || !isDocumentAvailable()) {
      return null;
    }
    return offset(el);
  }
  offsetAtPoint(el, currentLocation) {
    if (!el || !isDocumentAvailable()) {
      return null;
    }
    const element = this.nativeElement(el);
    const {
      left,
      top,
      transition
    } = element.style;
    element.style.transition = "none";
    element.style.left = `${currentLocation.left}px`;
    element.style.top = `${currentLocation.top}px`;
    const currentOffset = offset(element);
    element.style.left = left;
    element.style.top = top;
    this._dummy = element.offsetHeight;
    element.style.transition = transition;
    return currentOffset;
  }
  nativeElement(el) {
    if (!el || !isDocumentAvailable()) {
      return null;
    }
    return el.nativeElement || el;
  }
  position(element, popup, scale = 1) {
    if (!element || !popup) {
      return null;
    }
    return positionWithScroll(element, this.nativeElement(popup), scale);
  }
  removeScroll(rect, scroll) {
    return removeScroll(rect, scroll);
  }
  restrictToView(settings) {
    return restrictToView(settings);
  }
  scrollPosition(el) {
    return scrollPosition(this.nativeElement(el));
  }
  scrollableParents(el) {
    return scrollableParents(el);
  }
  stackingElementOffset(el) {
    const relativeContextElement = this.getRelativeContextElement(el);
    if (!relativeContextElement) {
      return null;
    }
    return offset(relativeContextElement);
  }
  stackingElementScroll(el) {
    const relativeContextElement = this.getRelativeContextElement(el);
    if (!relativeContextElement) {
      return {
        x: 0,
        y: 0
      };
    }
    return {
      x: relativeContextElement.scrollLeft,
      y: relativeContextElement.scrollTop
    };
  }
  getRelativeContextElement(el) {
    if (!el || !hasRelativeStackingContext2()) {
      return null;
    }
    let parent = this.nativeElement(el).parentElement;
    while (parent) {
      if (window.getComputedStyle(parent).transform !== "none") {
        return parent;
      }
      parent = parent.parentElement;
    }
    return null;
  }
  useRelativePosition(el) {
    return !!this.getRelativeContextElement(el);
  }
  windowViewPort(el) {
    return windowViewport(this.nativeElement(el));
  }
  zIndex(anchor, container) {
    return zIndex2(anchor, this.nativeElement(container));
  }
  zoomLevel() {
    if (!isDocumentAvailable() || !isWindowAvailable()) {
      return 1;
    }
    return parseFloat((document.documentElement.clientWidth / window.innerWidth).toFixed(2)) || 1;
  }
  isZoomed() {
    return this.zoomLevel() > 1;
  }
  static ɵfac = function DOMService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DOMService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _DOMService,
    factory: _DOMService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DOMService, [{
    type: Injectable
  }], null, null);
})();
var SCALE = new InjectionToken("Popup Document Scale");
var AlignService = class _AlignService {
  _dom;
  scale;
  constructor(_dom, scale = 1) {
    this._dom = _dom;
    this.scale = scale;
  }
  alignElement(settings) {
    const {
      anchor,
      element,
      anchorAlign,
      elementAlign,
      margin,
      offset: offset2,
      positionMode
    } = settings;
    const scale = this.scale || 1;
    const fixedMode = positionMode === "fixed" || !this._dom.hasOffsetParent(element);
    const anchorRect = fixedMode ? this.absoluteRect(anchor, element, offset2, scale) : this.relativeRect(anchor, element, offset2, scale);
    const elementRect = scaleRect(this._dom.offset(element.nativeElement), scale);
    const result = this._dom.align({
      anchorAlign,
      anchorRect,
      elementAlign,
      elementRect,
      margin
    });
    return result;
  }
  absoluteRect(anchor, element, offset2, scale) {
    const scrollPos = this.elementScrollPosition(anchor, element);
    const rect = eitherRect(this._dom.offset(anchor), offset2);
    const stackScale = 2 * scale;
    const stackScroll = this._dom.stackingElementScroll(element);
    if (scale !== 1 && stackScroll) {
      stackScroll.x /= stackScale;
      stackScroll.y /= stackScale;
    }
    const stackOffset = this._dom.stackingElementOffset(element);
    if (scale !== 1 && stackOffset) {
      stackOffset.left /= stackScale;
      stackOffset.top /= stackScale;
    }
    return this._dom.removeScroll(this._dom.addScroll(removeStackingOffset(scaleRect(rect, scale), stackOffset), stackScroll), scrollPos);
  }
  elementScrollPosition(anchor, element) {
    return anchor ? {
      x: 0,
      y: 0
    } : this._dom.scrollPosition(element);
  }
  relativeRect(anchor, element, offset2, scale) {
    const rect = eitherRect(this._dom.position(anchor, element, scale), offset2);
    return scaleRect(rect, scale);
  }
  static ɵfac = function AlignService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AlignService)(ɵɵinject(DOMService), ɵɵinject(SCALE, 8));
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _AlignService,
    factory: _AlignService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AlignService, [{
    type: Injectable
  }], () => [{
    type: DOMService
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [SCALE]
    }, {
      type: Optional
    }]
  }], null);
})();
var PositionService = class _PositionService {
  _dom;
  scale;
  constructor(_dom, scale = 1) {
    this._dom = _dom;
    this.scale = scale;
  }
  positionElement(settings) {
    const {
      anchor,
      currentLocation,
      element,
      anchorAlign,
      elementAlign,
      collisions,
      margin
    } = settings;
    const dom = this._dom;
    const scale = this.scale || 1;
    const elementOffset = dom.offsetAtPoint(element, currentLocation);
    const elementRect = scaleRect(elementOffset, scale);
    const anchorOffset = scaleRect(dom.offset(anchor), scale);
    const anchorRect = eitherRect(anchorOffset, currentLocation);
    const viewPort = settings.viewPort || dom.windowViewPort(element);
    viewPort.width = viewPort.width / scale;
    viewPort.height = viewPort.height / scale;
    const result = dom.restrictToView({
      anchorAlign,
      anchorRect,
      collisions,
      elementAlign,
      elementRect,
      margin,
      viewPort
    });
    const offset2 = dom.addOffset(currentLocation, result.offset);
    return {
      flip: result.flip,
      flipped: result.flipped,
      offset: offset2
    };
  }
  static ɵfac = function PositionService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PositionService)(ɵɵinject(DOMService), ɵɵinject(SCALE, 8));
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _PositionService,
    factory: _PositionService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PositionService, [{
    type: Injectable
  }], () => [{
    type: DOMService
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [SCALE]
    }, {
      type: Optional
    }]
  }], null);
})();
var ResizeService = class _ResizeService {
  _dom;
  _zone;
  subscription;
  constructor(_dom, _zone) {
    this._dom = _dom;
    this._zone = _zone;
  }
  subscribe(callback) {
    if (!isDocumentAvailable()) {
      return;
    }
    this._zone.runOutsideAngular(() => {
      this.subscription = fromEvent(this._dom.getWindow(), "resize").pipe(auditTime(FRAME_DURATION)).subscribe(() => callback());
    });
  }
  unsubscribe() {
    if (!this.subscription) {
      return;
    }
    this.subscription.unsubscribe();
  }
  isUnsubscribed() {
    return this.subscription && this.subscription.closed;
  }
  static ɵfac = function ResizeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ResizeService)(ɵɵinject(DOMService), ɵɵinject(NgZone));
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _ResizeService,
    factory: _ResizeService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResizeService, [{
    type: Injectable
  }], () => [{
    type: DOMService
  }, {
    type: NgZone
  }], null);
})();
var THRESHOLD_DIFF = 1;
var ScrollableService = class _ScrollableService {
  _dom;
  _zone;
  element;
  subscription;
  constructor(_dom, _zone) {
    this._dom = _dom;
    this._zone = _zone;
  }
  forElement(element) {
    this.unsubscribe();
    this.element = element;
    return this;
  }
  subscribe(callback) {
    if (!callback || !isDocumentAvailable() || !this.element) {
      return;
    }
    const parents2 = this._dom.scrollableParents(this.element);
    this._zone.runOutsideAngular(() => {
      const observables = parents2.map((p) => fromEvent(p, "scroll").pipe(auditTime(FRAME_DURATION)));
      const subscriber = (e) => {
        const target = e.target;
        const isParent = parents2.filter((p) => p === target).length > 0;
        const isDocument = target === document;
        const isWindow = target === window;
        if (isParent || isDocument || isWindow) {
          callback(this.isVisible(this.element, target));
        }
      };
      this.subscription = merge(...observables).subscribe(subscriber);
    });
  }
  unsubscribe() {
    if (!this.subscription) {
      return;
    }
    this.subscription.unsubscribe();
  }
  isVisible(elem, container) {
    const elemRect = this._dom.boundingOffset(elem);
    const containerRect = this._dom.boundingOffset(this._dom.nativeElement(container));
    if (THRESHOLD_DIFF < containerRect.top - elemRect.bottom) {
      return false;
    }
    if (THRESHOLD_DIFF < elemRect.top - containerRect.bottom) {
      return false;
    }
    if (THRESHOLD_DIFF < elemRect.left - containerRect.right) {
      return false;
    }
    if (THRESHOLD_DIFF < containerRect.left - elemRect.right) {
      return false;
    }
    return true;
  }
  static ɵfac = function ScrollableService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ScrollableService)(ɵɵinject(DOMService), ɵɵinject(NgZone));
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _ScrollableService,
    factory: _ScrollableService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollableService, [{
    type: Injectable
  }], () => [{
    type: DOMService
  }, {
    type: NgZone
  }], null);
})();
var LEFT = "left";
var RIGHT = "right";
var DOWN = "down";
var UP = "up";
var DEFAULT_TYPE = "slide";
var DEFAULT_DURATION = 100;
var animationTypes = {};
animationTypes.expand = (direction) => {
  const scale = direction === UP || direction === DOWN ? "scaleY" : "scaleX";
  const startScale = 0;
  const endScale = 1;
  let origin;
  if (direction === DOWN) {
    origin = "top";
  } else if (direction === LEFT) {
    origin = RIGHT;
  } else if (direction === RIGHT) {
    origin = LEFT;
  } else {
    origin = "bottom";
  }
  return {
    start: {
      transform: `${scale}(${startScale})`,
      transformOrigin: origin
    },
    end: {
      transform: `${scale}(${endScale})`
    }
  };
};
animationTypes.slide = (direction) => {
  const translate = direction === LEFT || direction === RIGHT ? "translateX" : "translateY";
  const start = direction === RIGHT || direction === DOWN ? -100 : 100;
  const end = 0;
  return {
    start: {
      transform: `${translate}(${start}%)`
    },
    end: {
      transform: `${translate}(${end}%)`
    }
  };
};
animationTypes.fade = () => {
  return {
    start: {
      opacity: 0
    },
    end: {
      opacity: 1
    }
  };
};
animationTypes.zoom = () => {
  const start = 0;
  const end = 1;
  return {
    start: {
      transform: `scale(${start})`
    },
    end: {
      transform: `scale(${end})`
    }
  };
};
var AnimationService = class _AnimationService {
  animationBuilder;
  start = new EventEmitter();
  end = new EventEmitter();
  flip;
  player;
  constructor(animationBuilder) {
    this.animationBuilder = animationBuilder;
  }
  play(element, options, flip2) {
    if (!this.flip || this.flip.horizontal !== flip2.horizontal || this.flip.vertical !== flip2.vertical) {
      this.flip = flip2;
      const type = options.type || DEFAULT_TYPE;
      const statesFn = animationTypes[type];
      if (statesFn) {
        const direction = this.getDirection(flip2, options);
        const states = statesFn(direction);
        this.playStates(element, states, options);
      } else if (isDevMode()) {
        throw new Error(`Unsupported animation type: "${type}". The supported types are slide, expand, fade and zoom.`);
      }
    }
  }
  ngOnDestroy() {
    this.stopPlayer();
  }
  playStates(element, states, options) {
    this.stopPlayer();
    const duration = options.duration || DEFAULT_DURATION;
    const factory = this.animationBuilder.build([style(states.start), animate(`${duration}ms ease-in`, style(states.end))]);
    const player = this.player = factory.create(element);
    player.onDone(() => {
      this.end.emit();
      this.stopPlayer();
    });
    this.start.emit();
    player.play();
  }
  getDirection(flip2, options) {
    let direction = options.direction || DOWN;
    if (flip2.horizontal) {
      if (direction === LEFT) {
        direction = RIGHT;
      } else if (direction === RIGHT) {
        direction = LEFT;
      }
    }
    if (flip2.vertical) {
      if (direction === DOWN) {
        direction = UP;
      } else if (direction === UP) {
        direction = DOWN;
      }
    }
    return direction;
  }
  stopPlayer() {
    if (this.player) {
      this.player.destroy();
      this.player = null;
    }
  }
  static ɵfac = function AnimationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AnimationService)(ɵɵinject(AnimationBuilder));
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _AnimationService,
    factory: _AnimationService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnimationService, [{
    type: Injectable
  }], () => [{
    type: AnimationBuilder
  }], null);
})();
var packageMetadata = {
  name: "@progress/kendo-angular-popup",
  productName: "Kendo UI for Angular",
  productCode: "KENDOUIANGULAR",
  productCodes: ["KENDOUIANGULAR"],
  publishDate: 1768393002,
  version: "21.4.1",
  licensingDocsUrl: "https://www.telerik.com/kendo-angular-ui/my-license/?utm_medium=product&utm_source=kendoangular&utm_campaign=kendo-ui-angular-purchase-license-keys-warning"
};
var DEFAULT_OFFSET = {
  left: -1e4,
  top: 0
};
var ANIMATION_CONTAINER = "k-animation-container";
var ANIMATION_CONTAINER_FIXED = "k-animation-container-fixed";
var PopupComponent = class _PopupComponent {
  container;
  _alignService;
  domService;
  _positionService;
  _resizeService;
  _scrollableService;
  animationService;
  _renderer;
  _zone;
  /**
   * Controls the Popup animation. By default, the opening and closing animations are enabled ([see example]({% slug animations_popup %})).
   * @default true
   */
  animate = true;
  /**
   * Sets the element to use as an anchor. The Popup opens next to this element. ([See example]({% slug alignmentpositioning_popup %}#toc-aligning-to-components)).
   */
  anchor;
  /**
   * Sets the anchor pivot point ([see example]({% slug alignmentpositioning_popup %}#toc-positioning)).
   * @default '{ horizontal: "left", vertical: "bottom" }'
   */
  anchorAlign = {
    horizontal: "left",
    vertical: "bottom"
  };
  /**
   * Sets the collision behavior of the Popup ([see example]({% slug viewportboundarydetection_popup %})).
   * @default '{ horizontal: "fit", vertical: "flip" }'
   */
  collision = {
    horizontal: "fit",
    vertical: "flip"
  };
  /**
   * Sets the pivot point of the Popup ([see example]({% slug alignmentpositioning_popup %}#toc-positioning)).
   * @default '{ horizontal: "left", vertical: "top" }'
   */
  popupAlign = {
    horizontal: "left",
    vertical: "top"
  };
  /**
   * Controls whether the component copies the `anchor` font styles.
   * @default false
   */
  copyAnchorStyles = false;
  /**
   * Sets a list of CSS classes to add to the internal animated element ([see example]({% slug appearance_popup %})).
   *
   * > To style the content of the Popup, use this property binding.
   */
  popupClass;
  /**
   * Sets the position mode of the component. By default, the Popup uses fixed positioning. To use absolute positioning, set this option to `absolute`.
   *
   * To support mobile browsers with the zoom option, use the `absolute` positioning of the Popup.
   * @default 'fixed'
   */
  positionMode = "fixed";
  /**
   * Sets the absolute position of the element ([see example]({% slug alignmentpositioning_popup %}#toc-aligning-to-absolute-points)).
   * The Popup opens next to this point. The Popup pivot point is defined by the `popupAlign` option. The boundary detection uses the window viewport.
   * @default '{ left: -10000, top: 0 }'
   */
  offset = DEFAULT_OFFSET;
  /**
   * Sets the margin value in pixels. Adds blank space between the Popup and the anchor ([see example]({% slug alignmentpositioning_popup %}#toc-adding-a-margin)).
   */
  margin;
  /**
   * Fires when the anchor scrolls outside the screen boundaries. ([See example]({% slug closing_popup %}#toc-after-leaving-the-viewport)).
   */
  anchorViewportLeave = new EventEmitter();
  /**
   * Fires after the component closes.
   */
  close = new EventEmitter();
  /**
   * Fires after the component opens and the opening animation ends.
   */
  open = new EventEmitter();
  /**
   * Fires after the component is opened and the Popup is positioned.
   */
  positionChange = new EventEmitter();
  /**
   * @hidden
   */
  contentContainer;
  /**
   * @hidden
   */
  resizeSensor;
  /**
   * @hidden
   */
  content;
  /**
   * @hidden
   */
  renderDefaultClass = true;
  resolvedPromise = Promise.resolve(null);
  _currentOffset;
  animationSubscriptions;
  repositionSubscription;
  initialCheck = true;
  constructor(container, _alignService, domService, _positionService, _resizeService, _scrollableService, animationService, _renderer, _zone) {
    this.container = container;
    this._alignService = _alignService;
    this.domService = domService;
    this._positionService = _positionService;
    this._resizeService = _resizeService;
    this._scrollableService = _scrollableService;
    this.animationService = animationService;
    this._renderer = _renderer;
    this._zone = _zone;
    A(packageMetadata);
    this._renderer.addClass(container.nativeElement, ANIMATION_CONTAINER);
    this.updateFixedClass();
  }
  ngOnInit() {
    this.reposition = this.reposition.bind(this);
    this._resizeService.subscribe(this.reposition);
    this.animationSubscriptions = this.animationService.start.subscribe(this.onAnimationStart.bind(this));
    this.animationSubscriptions.add(this.animationService.end.subscribe(this.onAnimationEnd.bind(this)));
    this._scrollableService.forElement(this.domService.nativeElement(this.anchor) || this.container.nativeElement).subscribe(this.onScroll.bind(this));
    this.currentOffset = DEFAULT_OFFSET;
    this.setZIndex();
    this.copyFontStyles();
    this.updateFixedClass();
    this.reposition();
  }
  ngOnChanges(changes) {
    if (changes.copyAnchorStyles) {
      this.copyFontStyles();
    }
    if (changes.positionMode) {
      this.updateFixedClass();
    }
  }
  ngAfterViewInit() {
    if (!this.animate) {
      this.resolvedPromise.then(() => {
        this.onAnimationEnd();
      });
    }
    this.reposition();
  }
  ngAfterViewChecked() {
    if (this.initialCheck) {
      this.initialCheck = false;
      return;
    }
    this._zone.runOutsideAngular(() => {
      this.unsubscribeReposition();
      this.repositionSubscription = from(this.resolvedPromise).subscribe(this.reposition);
    });
  }
  ngOnDestroy() {
    this.anchorViewportLeave.complete();
    this.positionChange.complete();
    this.close.emit();
    this.close.complete();
    this._resizeService.unsubscribe();
    this._scrollableService.unsubscribe();
    this.animationSubscriptions.unsubscribe();
    this.unsubscribeReposition();
  }
  /**
   * @hidden
   */
  onResize() {
    this.reposition();
  }
  onAnimationStart() {
    this._renderer.removeClass(this.container.nativeElement, "k-animation-container-shown");
  }
  onAnimationEnd() {
    this._renderer.addClass(this.container.nativeElement, "k-animation-container-shown");
    this.open.emit();
    this.open.complete();
  }
  get currentOffset() {
    return this._currentOffset;
  }
  set currentOffset(offset2) {
    this.setContainerStyle("left", `${offset2.left}px`);
    this.setContainerStyle("top", `${offset2.top}px`);
    this._currentOffset = offset2;
  }
  setZIndex() {
    if (this.anchor) {
      this.setContainerStyle("z-index", String(this.domService.zIndex(this.domService.nativeElement(this.anchor), this.container)));
    }
  }
  reposition() {
    if (!isDocumentAvailable()) {
      return;
    }
    const {
      flip: flip2,
      offset: offset2
    } = this.position();
    if (!this.currentOffset || isDifferentOffset(this.currentOffset, offset2)) {
      this.currentOffset = offset2;
      if (hasObservers(this.positionChange)) {
        this._zone.run(() => this.positionChange.emit({
          offset: offset2,
          flip: flip2
        }));
      }
    }
    if (this.animate) {
      this.animationService.play(this.contentContainer.nativeElement, this.animate, flip2);
    }
    this.resizeSensor.acceptSize();
  }
  position() {
    const alignedOffset = this._alignService.alignElement({
      anchor: this.domService.nativeElement(this.anchor),
      anchorAlign: this.anchorAlign,
      element: this.container,
      elementAlign: this.popupAlign,
      margin: this.margin,
      offset: this.offset,
      positionMode: this.positionMode
    });
    return this._positionService.positionElement({
      anchor: this.domService.nativeElement(this.anchor),
      anchorAlign: this.anchorAlign,
      collisions: this.collision,
      currentLocation: alignedOffset,
      element: this.container,
      elementAlign: this.popupAlign,
      margin: this.margin
    });
  }
  onScroll(isInViewPort) {
    const hasLeaveObservers = hasObservers(this.anchorViewportLeave);
    if (isInViewPort || !hasLeaveObservers) {
      this.reposition();
    } else if (hasLeaveObservers) {
      this._zone.run(() => {
        this.anchorViewportLeave.emit();
      });
    }
  }
  copyFontStyles() {
    if (!this.anchor || !this.copyAnchorStyles) {
      return;
    }
    this.domService.getFontStyles(this.domService.nativeElement(this.anchor)).forEach((s) => this.setContainerStyle(s.key, s.value));
  }
  updateFixedClass() {
    const action = this.positionMode === "fixed" ? "addClass" : "removeClass";
    this._renderer[action](this.container.nativeElement, ANIMATION_CONTAINER_FIXED);
  }
  setContainerStyle(name, value) {
    this._renderer.setStyle(this.container.nativeElement, name, value);
  }
  unsubscribeReposition() {
    if (this.repositionSubscription) {
      this.repositionSubscription.unsubscribe();
    }
  }
  static ɵfac = function PopupComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PopupComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(AlignService), ɵɵdirectiveInject(DOMService), ɵɵdirectiveInject(PositionService), ɵɵdirectiveInject(ResizeService), ɵɵdirectiveInject(ScrollableService), ɵɵdirectiveInject(AnimationService), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _PopupComponent,
    selectors: [["kendo-popup"]],
    viewQuery: function PopupComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 7);
        ɵɵviewQuery(ResizeSensorComponent, 7);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentContainer = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.resizeSensor = _t.first);
      }
    },
    inputs: {
      animate: "animate",
      anchor: "anchor",
      anchorAlign: "anchorAlign",
      collision: "collision",
      popupAlign: "popupAlign",
      copyAnchorStyles: "copyAnchorStyles",
      popupClass: "popupClass",
      positionMode: "positionMode",
      offset: "offset",
      margin: "margin"
    },
    outputs: {
      anchorViewportLeave: "anchorViewportLeave",
      close: "close",
      open: "open",
      positionChange: "positionChange"
    },
    exportAs: ["kendo-popup"],
    standalone: true,
    features: [ɵɵProvidersFeature([AlignService, AnimationService, DOMService, PositionService, ResizeService, ScrollableService]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    ngContentSelectors: _c1,
    decls: 6,
    vars: 5,
    consts: [["container", ""], [1, "k-child-animation-container"], [3, "ngClass"], [3, "ngTemplateOutlet"], [3, "resize", "rateLimit"]],
    template: function PopupComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵprojectionDef();
        ɵɵelementStart(0, "div", 1)(1, "div", 2, 0);
        ɵɵprojection(3);
        ɵɵtemplate(4, PopupComponent_Conditional_4_Template, 1, 1, null, 3);
        ɵɵelementStart(5, "kendo-resize-sensor", 4);
        ɵɵlistener("resize", function PopupComponent_Template_kendo_resize_sensor_resize_5_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onResize());
        });
        ɵɵelementEnd()()();
      }
      if (rf & 2) {
        ɵɵadvance();
        ɵɵclassProp("k-popup", ctx.renderDefaultClass);
        ɵɵproperty("ngClass", ctx.popupClass);
        ɵɵadvance(3);
        ɵɵconditional(ctx.content ? 4 : -1);
        ɵɵadvance();
        ɵɵproperty("rateLimit", 100);
      }
    },
    dependencies: [NgClass, NgTemplateOutlet, ResizeSensorComponent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PopupComponent, [{
    type: Component,
    args: [{
      exportAs: "kendo-popup",
      providers: [AlignService, AnimationService, DOMService, PositionService, ResizeService, ScrollableService],
      selector: "kendo-popup",
      template: `
        <div class="k-child-animation-container">
          <div [class.k-popup]="renderDefaultClass" [ngClass]="popupClass" #container>
            <ng-content></ng-content>
            @if (content) {
              <ng-template [ngTemplateOutlet]="content"></ng-template>
            }
            <kendo-resize-sensor [rateLimit]="100" (resize)="onResize()">
            </kendo-resize-sensor>
          </div>
        </div>
        `,
      standalone: true,
      imports: [NgClass, NgTemplateOutlet, ResizeSensorComponent]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: AlignService
  }, {
    type: DOMService
  }, {
    type: PositionService
  }, {
    type: ResizeService
  }, {
    type: ScrollableService
  }, {
    type: AnimationService
  }, {
    type: Renderer2
  }, {
    type: NgZone
  }], {
    animate: [{
      type: Input
    }],
    anchor: [{
      type: Input
    }],
    anchorAlign: [{
      type: Input
    }],
    collision: [{
      type: Input
    }],
    popupAlign: [{
      type: Input
    }],
    copyAnchorStyles: [{
      type: Input
    }],
    popupClass: [{
      type: Input
    }],
    positionMode: [{
      type: Input
    }],
    offset: [{
      type: Input
    }],
    margin: [{
      type: Input
    }],
    anchorViewportLeave: [{
      type: Output
    }],
    close: [{
      type: Output
    }],
    open: [{
      type: Output
    }],
    positionChange: [{
      type: Output
    }],
    contentContainer: [{
      type: ViewChild,
      args: ["container", {
        static: true
      }]
    }],
    resizeSensor: [{
      type: ViewChild,
      args: [ResizeSensorComponent, {
        static: true
      }]
    }]
  });
})();
var removeElement = (element) => {
  if (element && element.parentNode) {
    element.parentNode.removeChild(element);
  }
};
var POPUP_CONTAINER = new InjectionToken("Popup Container");
var PopupService = class _PopupService {
  applicationRef;
  componentFactoryResolver;
  injector;
  container;
  /**
   * Gets the root view container for injecting the component.
   *
   * @returns {ComponentRef<any>} The root view container reference.
   */
  get rootViewContainer() {
    const rootComponents = this.applicationRef.components || [];
    if (rootComponents[0]) {
      return rootComponents[0];
    }
    throw new Error(`
            View Container not found! Inject the POPUP_CONTAINER or define a specific ViewContainerRef via the appendTo option.
            See https://www.telerik.com/kendo-angular-ui/components/popup/api/POPUP_CONTAINER/ for more details.
        `);
  }
  /**
   * Gets the HTML element of the root component container.
   *
   * @returns {HTMLElement} The root container HTML element.
   */
  get rootViewContainerNode() {
    return this.container ? this.container.nativeElement : this.getComponentRootNode(this.rootViewContainer);
  }
  constructor(applicationRef, componentFactoryResolver, injector, container) {
    this.applicationRef = applicationRef;
    this.componentFactoryResolver = componentFactoryResolver;
    this.injector = injector;
    this.container = container;
  }
  /**
   * Opens a Popup component. The Popup mounts in the DOM under the root application component.
   *
   * @param {PopupSettings} options - The options for the Popup.
   * @returns {ComponentRef<PopupComponent>} A reference to the Popup object.
   */
  open(options = {}) {
    const {
      component,
      nodes
    } = this.contentFrom(options.content);
    const popupComponentRef = this.appendPopup(nodes, options.appendTo);
    const popupInstance = popupComponentRef.instance;
    this.projectComponentInputs(popupComponentRef, options);
    popupComponentRef.changeDetectorRef.detectChanges();
    if (component) {
      component.changeDetectorRef.detectChanges();
    }
    const popupElement = this.getComponentRootNode(popupComponentRef);
    return {
      close: () => {
        if (component) {
          component.destroy();
        }
        popupComponentRef.destroy();
        try {
          removeElement(popupElement);
        } catch {
        }
      },
      content: component,
      popup: popupComponentRef,
      popupAnchorViewportLeave: popupInstance.anchorViewportLeave,
      popupClose: popupInstance.close,
      popupElement,
      popupOpen: popupInstance.open,
      popupPositionChange: popupInstance.positionChange
    };
  }
  appendPopup(nodes, container) {
    const popupComponentRef = this.createComponent(PopupComponent, nodes, container);
    if (!container) {
      this.rootViewContainerNode.appendChild(this.getComponentRootNode(popupComponentRef));
    }
    return popupComponentRef;
  }
  /**
   * Gets the HTML element for a component reference.
   *
   * @param {ComponentRef<any>} componentRef The component reference.
   * @returns {HTMLElement} The root HTML element of the component.
   */
  getComponentRootNode(componentRef) {
    return componentRef.location.nativeElement;
  }
  /**
   * Gets the `ComponentFactory` instance by type.
   *
   * @param {*} componentClass The component class.
   * @returns {ComponentFactory<any>} The component factory instance.
   */
  getComponentFactory(componentClass) {
    return this.componentFactoryResolver.resolveComponentFactory(componentClass);
  }
  /**
   * Creates a component reference from a `Component` class.
   *
   * @param {*} componentClass The component class.
   * @param {*} nodes The nodes to project.
   * @param {ViewContainerRef} container The container to use.
   * @returns {ComponentRef<any>} The created component reference.
   */
  createComponent(componentClass, nodes, container) {
    const factory = this.getComponentFactory(componentClass);
    if (container) {
      return container.createComponent(factory, void 0, this.injector, nodes);
    } else {
      const component = factory.create(this.injector, nodes);
      this.applicationRef.attachView(component.hostView);
      return component;
    }
  }
  /**
   * Projects the input options onto the component instance.
   *
   * @param {ComponentRef<any>} component The component reference.
   * @param {*} options The options to project.
   * @returns {ComponentRef<any>} The updated component reference.
   */
  projectComponentInputs(component, options) {
    Object.getOwnPropertyNames(options).filter((prop) => prop !== "content" || options.content instanceof TemplateRef).forEach((prop) => {
      component.instance[prop] = options[prop];
    });
    return component;
  }
  /**
   * Gets the component and nodes to append from the `content` option.
   *
   * @param {*} content The content to use.
   * @returns {any} The component and nodes for projection.
   */
  contentFrom(content) {
    if (!content || content instanceof TemplateRef) {
      return {
        component: null,
        nodes: [[]]
      };
    }
    const component = this.createComponent(content);
    const nodes = component ? [component.location.nativeElement] : [];
    return {
      component,
      nodes: [
        nodes
        // <ng-content>
      ]
    };
  }
  static ɵfac = function PopupService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PopupService)(ɵɵinject(ApplicationRef), ɵɵinject(ComponentFactoryResolver$1), ɵɵinject(Injector), ɵɵinject(POPUP_CONTAINER, 8));
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _PopupService,
    factory: _PopupService.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PopupService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ApplicationRef
  }, {
    type: ComponentFactoryResolver$1
  }, {
    type: Injector
  }, {
    type: ElementRef,
    decorators: [{
      type: Inject,
      args: [POPUP_CONTAINER]
    }, {
      type: Optional
    }]
  }], null);
})();
var KENDO_POPUP = [PopupComponent];
var PopupModule = class _PopupModule {
  static ɵfac = function PopupModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PopupModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _PopupModule,
    imports: [ResizeSensorComponent, PopupComponent],
    exports: [PopupComponent]
  });
  static ɵinj = ɵɵdefineInjector({
    providers: [PopupService, ResizeBatchService],
    imports: [KENDO_RESIZESENSOR, KENDO_POPUP]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PopupModule, [{
    type: NgModule,
    args: [{
      exports: [...KENDO_POPUP],
      imports: [...KENDO_RESIZESENSOR, ...KENDO_POPUP],
      providers: [PopupService, ResizeBatchService]
    }]
  }], null, null);
})();

export {
  getDocumentElement,
  windowViewport,
  offset,
  scrollPosition,
  positionWithScroll,
  PopupComponent,
  POPUP_CONTAINER,
  PopupService,
  KENDO_POPUP
};
//# sourceMappingURL=chunk-NKWNDTJB.js.map
