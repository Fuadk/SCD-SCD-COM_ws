import {
  MS_PER_HOUR,
  MS_PER_MINUTE,
  addCenturies,
  addDays,
  addDecades,
  addMonths,
  addWeeks,
  addYears,
  cloneDate,
  createDate,
  dayOfWeek,
  durationInCenturies,
  durationInDecades,
  durationInMonths,
  durationInYears,
  firstDayOfMonth,
  firstDecadeOfCentury,
  firstMonthOfYear,
  firstYearOfDecade,
  getDate,
  isEqual,
  lastDayOfMonth,
  lastDecadeOfCentury,
  lastMonthOfYear,
  lastYearOfDecade,
  weekInYear
} from "./chunk-OUKQI34C.js";
import {
  ActionSheetComponent,
  ActionSheetTemplateDirective
} from "./chunk-GIR42TIA.js";
import {
  AdaptiveService
} from "./chunk-2WJ6WOSR.js";
import {
  IntlService,
  localeData
} from "./chunk-5OMBUL2F.js";
import {
  ButtonComponent
} from "./chunk-GUER2DF3.js";
import {
  calendarIcon,
  caretAltDownIcon,
  caretAltUpIcon,
  checkIcon,
  chevronLeftIcon,
  chevronRightIcon,
  clockIcon,
  xIcon
} from "./chunk-KXMGKHT2.js";
import {
  PopupService
} from "./chunk-NKWNDTJB.js";
import {
  IconWrapperComponent,
  IconsService
} from "./chunk-3ZH7CTYC.js";
import {
  EventsOutsideAngularDirective,
  KENDO_TOGGLEBUTTONTABSTOP,
  KendoInput,
  Keys,
  MultiTabStop,
  ResizeBatchService,
  ResizeSensorComponent,
  ScrollbarWidthService,
  ToggleButtonTabStopDirective,
  anyChanged,
  guid,
  hasObservers,
  isControlRequired,
  isDocumentAvailable,
  isObject,
  isObjectPresent,
  normalizeKeys,
  parseAttributes,
  parseCSSClassNames,
  removeHTMLAttributes,
  setHTMLAttributes
} from "./chunk-5AZCHGRK.js";
import {
  touchEnabled
} from "./chunk-7JCLSR37.js";
import {
  ComponentMessages,
  L10N_PREFIX,
  LocalizationService,
  RTL
} from "./chunk-YGURSKD5.js";
import {
  A
} from "./chunk-RWPIEFVW.js";
import {
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  NgControl
} from "./chunk-CW7PMWWW.js";
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
  HostBinding,
  HostListener,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  IterableDiffers,
  NgModule,
  NgZone,
  Optional,
  Output,
  Renderer2,
  TemplateRef,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
  forwardRef,
  isDevMode,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMapInterpolate1,
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
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵinvalidFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵpureFunction4,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-R7LRY632.js";
import {
  animationFrameScheduler,
  fromEvent,
  merge
} from "./chunk-UG3XN6F5.js";
import {
  BehaviorSubject,
  EMPTY,
  Observable,
  ReplaySubject,
  Subject,
  Subscription,
  __assign,
  __extends,
  combineLatest,
  debounceTime,
  filter,
  from,
  interval,
  map,
  of,
  scan,
  takeWhile,
  tap
} from "./chunk-WISTXZPE.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-N6ESDQJH.js";

// node_modules/@progress/kendo-dateinputs-common/dist/es/common/mask.js
var Mask = (
  /** @class */
  /* @__PURE__ */ function() {
    function Mask2() {
      this.symbols = "";
      this.partMap = [];
    }
    return Mask2;
  }()
);

// node_modules/@progress/kendo-dateinputs-common/dist/es/common/constants.js
var Constants = {
  formatSeparator: "_",
  twoDigitYearMax: 68,
  defaultDateFormat: "d",
  defaultLocaleId: "en"
};

// node_modules/@progress/kendo-dateinputs-common/dist/es/common/key.js
var Key = {
  DELETE: "Delete",
  BACKSPACE: "Backspace",
  TAB: "Tab",
  ENTER: "Enter",
  ESCAPE: "Escape",
  ARROW_LEFT: "ArrowLeft",
  ARROW_UP: "ArrowUp",
  ARROW_RIGHT: "ArrowRight",
  ARROW_DOWN: "ArrowDown",
  SPACE: " ",
  END: "End",
  HOME: "Home",
  PAGE_UP: "PageUp",
  PAGE_DOWN: "PageDown"
};

// node_modules/@progress/kendo-dateinputs-common/dist/es/dateinput/utils.js
var padZero = function(length2) {
  return new Array(Math.max(length2, 0)).fill("0").join("");
};
var unpadZero = function(value) {
  return value.replace(/^0*/, "");
};
var approximateStringMatching = function(_a2) {
  var oldText = _a2.oldText, newText = _a2.newText, formatPattern = _a2.formatPattern, selectionStart = _a2.selectionStart, isInCaretMode = _a2.isInCaretMode, keyEvent = _a2.keyEvent;
  var oldIndex = selectionStart + oldText.length - newText.length;
  var oldTextSeparator = oldText[oldIndex];
  var oldSegmentText = oldText.substring(0, oldIndex);
  var newSegmentText = newText.substring(0, selectionStart);
  var diff = [];
  if (oldSegmentText === newSegmentText && selectionStart > 0) {
    diff.push([formatPattern[selectionStart - 1], newSegmentText[selectionStart - 1]]);
    return diff;
  }
  if (oldSegmentText.indexOf(newSegmentText) === 0 && isInCaretMode && (keyEvent.key === Key.DELETE || keyEvent.key === Key.BACKSPACE) || oldSegmentText.indexOf(newSegmentText) === 0 && !isInCaretMode && (newSegmentText.length === 0 || formatPattern[newSegmentText.length - 1] !== formatPattern[newSegmentText.length])) {
    var deletedSymbol = "";
    if (!isInCaretMode && newSegmentText.length === 1) {
      diff.push([formatPattern[0], newSegmentText[0]]);
    }
    for (var i = newSegmentText.length; i < oldSegmentText.length; i++) {
      if (formatPattern[i] !== deletedSymbol && formatPattern[i] !== Constants.formatSeparator) {
        deletedSymbol = formatPattern[i];
        diff.push([deletedSymbol, ""]);
      }
    }
    return diff;
  }
  if (isInCaretMode && (newSegmentText.indexOf(oldSegmentText) === 0 || formatPattern[selectionStart - 1] === Constants.formatSeparator) || !isInCaretMode && (newSegmentText.indexOf(oldSegmentText) === 0 || formatPattern[selectionStart - 1] === Constants.formatSeparator)) {
    var symbol = formatPattern[0];
    for (var i = Math.max(0, oldSegmentText.length - 1); i < formatPattern.length; i++) {
      if (formatPattern[i] !== Constants.formatSeparator) {
        symbol = formatPattern[i];
        break;
      }
    }
    return [[symbol, newSegmentText[selectionStart - 1]]];
  }
  if (newSegmentText[newSegmentText.length - 1] === " " || newSegmentText[newSegmentText.length - 1] === oldTextSeparator && formatPattern[oldIndex] === "_") {
    return [[formatPattern[selectionStart - 1], Constants.formatSeparator]];
  }
  var result = [[formatPattern[selectionStart - 1], newSegmentText[selectionStart - 1]]];
  return result;
};
var dateSymbolMap = function(map2, part) {
  map2[part.pattern[0]] = part.type;
  return map2;
};

// node_modules/@progress/kendo-dateinputs-common/dist/es/common/utils.js
var dateSetter = function(method) {
  return function(date, value) {
    var clone = cloneDate(date);
    clone[method](value);
    return clone;
  };
};
var isPresent = function(value) {
  return value !== void 0 && value !== null;
};
var isDocumentAvailable2 = function() {
  return !!document;
};
var isNumber = function(value) {
  return isPresent(value) && typeof value === "number" && !Number.isNaN(value);
};
var parseToInt = function(value) {
  return parseInt(value, 10);
};
var isParseableToInt = function(value) {
  return isNumber(parseToInt(value)) && /^[0-9]+$/.test(value);
};
var clamp = function(value, min, max) {
  return Math.min(max, Math.max(min, value));
};
var extend = function() {
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  return Object.assign.apply(Object, args);
};
var isFunction = function(fn) {
  return typeof fn === "function";
};
var cropTwoDigitYear = function(date) {
  if (!isPresent(date) || isNaN(date.getTime())) {
    return 0;
  }
  return Number(date.getFullYear().toString().slice(-2));
};
var setYears = dateSetter("setFullYear");
var millisecondDigitsInFormat = function(format) {
  var result = format && format.match(/S+(\1)/);
  return result ? result[0].length : 0;
};
var millisecondStepFor = function(digits) {
  return Math.pow(10, 3 - digits);
};
var areDatePartsEqualTo = function(date, year, month, day, hour, minutes, seconds, milliseconds) {
  if (date && date.getFullYear() === year && date.getMonth() === month && date.getDate() === day && date.getHours() === hour && date.getMinutes() === minutes && date.getSeconds() === seconds && date.getMilliseconds() === milliseconds) {
    return true;
  }
  return false;
};
var isValidDate = function(value) {
  return isPresent(value) && value.getTime && isNumber(value.getTime());
};
var isIOS = function() {
  return /iPad|iPhone|iPod/.test(navigator.userAgent) || navigator.maxTouchPoints && navigator.maxTouchPoints > 2 && /Macintosh/i.test(navigator.userAgent);
};

// node_modules/@progress/kendo-dateinputs-common/dist/es/common/dateobject.js
var MONTH_INDEX_FEBRUARY = 1;
var DEFAULT_LEAP_YEAR = 2e3;
var PREVIOUS_CENTURY_BASE = 1900;
var CURRENT_CENTURY_BASE = 2e3;
var SHORT_PATTERN_LENGTH_REGEXP = /d|M|H|h|m|s/;
var MONTH_PART_WITH_WORDS_THRESHOLD = 2;
var MONTH_SYMBOL = "M";
var JS_MONTH_OFFSET = 1;
var DateObject = (
  /** @class */
  function() {
    function DateObject2(_a2) {
      var intlService = _a2.intlService, formatPlaceholder = _a2.formatPlaceholder, format = _a2.format, _b = _a2.cycleTime, cycleTime = _b === void 0 ? false : _b, _c = _a2.twoDigitYearMax, twoDigitYearMax = _c === void 0 ? Constants.twoDigitYearMax : _c, _d = _a2.value, value = _d === void 0 ? null : _d, _e = _a2.autoCorrectParts, autoCorrectParts = _e === void 0 ? true : _e, _f = _a2.toggleDayPeriod, toggleDayPeriod = _f === void 0 ? false : _f, _g = _a2.autoSwitchParts, autoSwitchParts = _g === void 0 ? true : _g;
      this.year = true;
      this.month = true;
      this.date = true;
      this.hours = true;
      this.minutes = true;
      this.seconds = true;
      this.milliseconds = true;
      this.dayperiod = true;
      this.leadingZero = null;
      this.typedMonthPart = "";
      this.knownParts = "adHhmMsEyS";
      this.symbols = {
        "E": "E",
        "H": "H",
        "M": "M",
        "a": "a",
        "d": "d",
        "h": "h",
        "m": "m",
        "s": "s",
        "y": "y",
        "S": "S"
      };
      this._value = this.getDefaultDate();
      this.cycleTime = false;
      this._partiallyInvalidDate = {
        startDate: null,
        invalidDateParts: {
          "E": {
            value: null,
            date: null,
            startDateOffset: 0
          },
          "H": {
            value: null,
            date: null,
            startDateOffset: 0
          },
          "M": {
            value: null,
            date: null,
            startDateOffset: 0
          },
          "a": {
            value: null,
            date: null,
            startDateOffset: 0
          },
          "d": {
            value: null,
            date: null,
            startDateOffset: 0
          },
          "h": {
            value: null,
            date: null,
            startDateOffset: 0
          },
          "m": {
            value: null,
            date: null,
            startDateOffset: 0
          },
          "s": {
            value: null,
            date: null,
            startDateOffset: 0
          },
          "y": {
            value: null,
            date: null,
            startDateOffset: 0
          },
          "S": {
            value: null,
            date: null,
            startDateOffset: 0
          }
        }
      };
      this.setOptions({
        intlService,
        formatPlaceholder,
        format,
        cycleTime,
        twoDigitYearMax,
        value,
        autoCorrectParts,
        toggleDayPeriod,
        autoSwitchParts
      });
      if (!value) {
        this._value = this.getDefaultDate();
        var sampleFormat = this.dateFormatString(this.value, this.format).symbols;
        for (var i = 0; i < sampleFormat.length; i++) {
          this.setExisting(sampleFormat[i], false);
        }
      } else {
        this._value = cloneDate(value);
      }
    }
    Object.defineProperty(DateObject2.prototype, "value", {
      get: function() {
        return this._value;
      },
      set: function(value) {
        if (value && !(value instanceof Date)) {
          return;
        }
        this._value = value;
        this.resetInvalidDate();
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(DateObject2.prototype, "localeId", {
      get: function() {
        var localeId = Constants.defaultLocaleId;
        var cldrKeys = Object.keys(this.intl.cldr);
        for (var i = 0; i < cldrKeys.length; i++) {
          var key = cldrKeys[i];
          var value = this.intl.cldr[key];
          if (value.name && value.calendar && value.numbers && value.name !== Constants.defaultLocaleId) {
            localeId = value.name;
            break;
          }
        }
        return localeId;
      },
      enumerable: false,
      configurable: true
    });
    DateObject2.prototype.setOptions = function(options) {
      this.intl = options.intlService;
      this.formatPlaceholder = options.formatPlaceholder || "wide";
      this.format = options.format;
      this.cycleTime = options.cycleTime;
      this.monthNames = this.allFormattedMonths(this.localeId);
      this.dayPeriods = this.allDayPeriods(this.localeId);
      this.twoDigitYearMax = options.twoDigitYearMax;
      this.autoCorrectParts = options.autoCorrectParts;
      this.toggleDayPeriod = options.toggleDayPeriod;
      this.autoSwitchParts = options.autoSwitchParts;
    };
    DateObject2.prototype.setValue = function(value) {
      if (!value) {
        this._value = this.getDefaultDate();
        this.modifyExisting(false);
      } else if (!isEqual(value, this._value)) {
        this._value = cloneDate(value);
        this.modifyExisting(true);
      } else if (isEqual(value, this._value) && this.dayPeriods) {
        this.setExisting("a", true);
      }
      this.resetInvalidDate();
    };
    DateObject2.prototype.hasValue = function() {
      var _this = this;
      var pred = function(a, p) {
        return a || p.type !== "literal" && p.type !== "dayperiod" && _this.getExisting(p.pattern[0]);
      };
      return this.intl.splitDateFormat(this.format, this.localeId).reduce(pred, false);
    };
    DateObject2.prototype.getValue = function() {
      for (var i = 0; i < this.knownParts.length; i++) {
        if (!this.getExisting(this.knownParts[i])) {
          return null;
        }
      }
      return cloneDate(this.value);
    };
    DateObject2.prototype.createDefaultDate = function() {
      return createDate(DEFAULT_LEAP_YEAR, 0, 31);
    };
    DateObject2.prototype.getDefaultDate = function() {
      return getDate(this.createDefaultDate());
    };
    DateObject2.prototype.getFormattedDate = function(format) {
      return this.intl.formatDate(this.getValue(), format, this.localeId);
    };
    DateObject2.prototype.getTextAndFormat = function(customFormat) {
      if (customFormat === void 0) {
        customFormat = "";
      }
      var format = customFormat || this.format;
      var text = this.intl.formatDate(this.value, format, this.localeId);
      var mask = this.dateFormatString(this.value, format);
      if (!this.autoCorrectParts && this._partiallyInvalidDate.startDate) {
        var partiallyInvalidText = "";
        var formattedDate = this.intl.formatDate(this.value, format, this.localeId);
        var formattedDates = this.getFormattedInvalidDates(format);
        for (var i = 0; i < formattedDate.length; i++) {
          var symbol = mask.symbols[i];
          if (mask.partMap[i].type === "literal") {
            partiallyInvalidText += text[i];
          } else if (this.getInvalidDatePartValue(symbol)) {
            var partsForSegment = this.getPartsForSegment(mask, i);
            if (symbol === "M") {
              var datePartText = (parseToInt(this.getInvalidDatePartValue(symbol)) + JS_MONTH_OFFSET).toString();
              if (partsForSegment.length > MONTH_PART_WITH_WORDS_THRESHOLD) {
                partiallyInvalidText += formattedDates[symbol][i];
              } else {
                if (this.getInvalidDatePartValue(symbol)) {
                  var formattedDatePart = padZero(partsForSegment.length - datePartText.length) + datePartText;
                  partiallyInvalidText += formattedDatePart;
                  i += partsForSegment.length - 1;
                } else {
                  partiallyInvalidText += formattedDates[symbol][i];
                }
              }
            } else {
              if (this.getInvalidDatePartValue(symbol)) {
                var datePartText = this.getInvalidDatePartValue(symbol).toString();
                var formattedDatePart = padZero(partsForSegment.length - datePartText.length) + datePartText;
                partiallyInvalidText += formattedDatePart;
                i += partsForSegment.length - 1;
              } else {
                partiallyInvalidText += formattedDates[symbol][i];
              }
            }
          } else {
            partiallyInvalidText += text[i];
          }
        }
        text = partiallyInvalidText;
      }
      var result = this.merge(text, mask);
      return result;
    };
    DateObject2.prototype.getFormattedInvalidDates = function(customFormat) {
      var _this = this;
      if (customFormat === void 0) {
        customFormat = "";
      }
      var format = customFormat || this.format;
      var formattedDatesForSymbol = {
        "E": "",
        "H": "",
        "M": "",
        "a": "",
        "d": "",
        "h": "",
        "m": "",
        "s": "",
        "y": "",
        "S": ""
      };
      Object.keys(this._partiallyInvalidDate.invalidDateParts).forEach(function(key) {
        var date = _this.getInvalidDatePart(key).date;
        if (date) {
          var formattedInvalidDate = _this.intl.formatDate(date, format, _this.localeId);
          formattedDatesForSymbol[key] = formattedInvalidDate;
        }
      });
      return formattedDatesForSymbol;
    };
    DateObject2.prototype.modifyExisting = function(value) {
      var sampleFormat = this.dateFormatString(this.value, this.format).symbols;
      for (var i = 0; i < sampleFormat.length; i++) {
        this.setExisting(sampleFormat[i], value);
      }
    };
    DateObject2.prototype.getExisting = function(symbol) {
      switch (symbol) {
        case "y":
          return this.year;
        case "M":
        case "L":
          return this.month;
        case "d":
          return this.date;
        case "E":
          return this.date && this.month && this.year;
        case "h":
        case "H":
          return this.hours;
        case "t":
        case "a":
          return this.dayperiod;
        case "m":
          return this.minutes;
        case "s":
          return this.seconds;
        case "S":
          return this.milliseconds;
        default:
          return true;
      }
    };
    DateObject2.prototype.setExisting = function(symbol, value) {
      switch (symbol) {
        case "y":
          this.year = value;
          if (value === false) {
            this._value.setFullYear(DEFAULT_LEAP_YEAR);
          }
          break;
        case "M":
          this.month = value;
          if (value === false) {
            if (this.autoCorrectParts) {
              this._value.setMonth(0);
            }
          }
          break;
        case "d":
          this.date = value;
          break;
        case "h":
        case "H":
          this.hours = value;
          break;
        case "t":
        case "a":
          this.dayperiod = value;
          break;
        case "m":
          this.minutes = value;
          break;
        case "s":
          this.seconds = value;
          break;
        case "S":
          this.milliseconds = value;
          break;
        default:
          break;
      }
      if (this.getValue()) {
        this.resetInvalidDate();
      }
    };
    DateObject2.prototype.modifyPart = function(symbol, offset) {
      if (!isPresent(symbol) || !isPresent(offset) || offset === 0) {
        return;
      }
      var newValue = cloneDate(this.value);
      var timeModified = false;
      var invalidDateFound;
      var isMonth = symbol === "M";
      var isDay = symbol === "d" || symbol === "E";
      var symbolExists = this.getExisting(symbol);
      if (!this.autoCorrectParts && (isDay || isMonth)) {
        var invalidDateParts = this._partiallyInvalidDate.invalidDateParts || {};
        var invalidDatePartValue = this.getInvalidDatePartValue(symbol);
        var year = invalidDateParts.y.value || newValue.getFullYear();
        var month = invalidDateParts.M.value || newValue.getMonth();
        var day = invalidDateParts.d.value || invalidDateParts.E.value || newValue.getDate();
        var hour = invalidDateParts.h.value || invalidDateParts.H.value || newValue.getHours();
        var minutes = invalidDateParts.m.value || newValue.getMinutes();
        var seconds = invalidDateParts.s.value || newValue.getSeconds();
        var milliseconds = invalidDateParts.S.value || newValue.getMilliseconds();
        switch (symbol) {
          case "y":
            year += offset;
            break;
          case "M":
            month += offset;
            break;
          case "d":
          case "E":
            day += offset;
            break;
          default:
            break;
        }
        if (symbol === "M") {
          if (month < 0 || month > 11) {
            if (symbolExists) {
              this.setExisting(symbol, false);
              this.resetInvalidDateSymbol(symbol);
              return;
            }
          }
          if (!symbolExists) {
            if (month < 0) {
              month = clamp(11 + (month % 11 + 1), 0, 11);
            } else {
              var monthValue = isPresent(invalidDatePartValue) ? month : (offset - JS_MONTH_OFFSET) % 12;
              month = clamp(monthValue, 0, 11);
            }
            month = clamp(month, 0, 11);
          }
          month = clamp(month, 0, 11);
        } else if (symbol === "d") {
          if (symbolExists) {
            if (day <= 0 || day > 31) {
              this.setExisting(symbol, false);
              this.resetInvalidDateSymbol(symbol);
              return;
            }
          } else if (!symbolExists) {
            if (isPresent(invalidDatePartValue)) {
              if (day <= 0 || day > 31) {
                this.setExisting(symbol, false);
                this.resetInvalidDateSymbol(symbol);
                return;
              }
            }
            if (offset < 0) {
              var dayValue = isPresent(invalidDatePartValue) ? day : 1 + (31 - Math.abs(offset % 31));
              day = clamp(dayValue, 1, 31);
            } else {
              var dayValue = isPresent(invalidDatePartValue) ? day : offset % 31;
              day = clamp(dayValue, 1, 31);
            }
            day = clamp(day, 1, 31);
          }
        }
        var dateCandidate = createDate(year, month, day, hour, minutes, seconds, milliseconds);
        var newValueCandidate = isMonth || isDay ? this.modifyDateSymbolWithValue(newValue, symbol, isMonth ? month : day) : null;
        var dateCandidateExists = areDatePartsEqualTo(dateCandidate, year, month, day, hour, minutes, seconds, milliseconds);
        if (this.getValue() && areDatePartsEqualTo(dateCandidate, year, month, day, hour, minutes, seconds, milliseconds)) {
          newValue = cloneDate(dateCandidate);
          this.markDatePartsAsExisting();
        } else if (isMonth && newValueCandidate) {
          if (newValueCandidate.getMonth() === month) {
            if (this.getExisting("d")) {
              if (dateCandidateExists) {
                newValue = cloneDate(dateCandidate);
                this.resetInvalidDateSymbol(symbol);
              } else {
                invalidDateFound = true;
                this.setInvalidDatePart(symbol, {
                  value: month,
                  date: cloneDate(newValueCandidate),
                  startDateOffset: offset,
                  startDate: cloneDate(this.value)
                });
                this.setExisting(symbol, false);
              }
            } else if (dateCandidateExists) {
              this.resetInvalidDateSymbol(symbol);
              newValue = cloneDate(dateCandidate);
              if (this.getExisting("M") && this.getExisting("y")) {
                this.setExisting("d", true);
                this.resetInvalidDateSymbol("d");
              }
            } else {
              this.resetInvalidDateSymbol(symbol);
              newValue = cloneDate(newValueCandidate);
            }
          } else {
            invalidDateFound = true;
            this.setInvalidDatePart(symbol, {
              value: month,
              date: cloneDate(newValueCandidate),
              startDateOffset: offset,
              startDate: cloneDate(this.value)
            });
            this.setExisting(symbol, false);
          }
        } else if (isDay && newValueCandidate) {
          if (newValueCandidate.getDate() === day) {
            if (this.getExisting("M")) {
              if (dateCandidateExists) {
                newValue = cloneDate(dateCandidate);
                this.resetInvalidDateSymbol(symbol);
              } else {
                invalidDateFound = true;
                this.setInvalidDatePart(symbol, {
                  value: day,
                  date: cloneDate(newValueCandidate),
                  startDateOffset: offset,
                  startDate: cloneDate(this.value)
                });
                this.setExisting(symbol, false);
              }
            } else if (dateCandidateExists) {
              newValue = cloneDate(dateCandidate);
              this.resetInvalidDateSymbol(symbol);
              if (this.getExisting("d") && this.getExisting("y")) {
                this.setExisting("M", true);
                this.resetInvalidDateSymbol("M");
              }
            } else {
              this.resetInvalidDateSymbol(symbol);
              newValue = cloneDate(newValueCandidate);
            }
          } else {
            invalidDateFound = true;
            this.setInvalidDatePart(symbol, {
              value: day,
              date: cloneDate(this.value),
              startDateOffset: offset,
              startDate: cloneDate(this.value)
            });
            this.setExisting(symbol, false);
          }
        }
      } else {
        var hours = newValue.getHours();
        switch (symbol) {
          case "y":
            newValue.setFullYear(newValue.getFullYear() + offset);
            break;
          case "M":
            newValue = addMonths(this.value, offset);
            break;
          case "d":
          case "E":
            newValue.setDate(newValue.getDate() + offset);
            break;
          case "h":
          case "H":
            newValue.setHours(newValue.getHours() + offset);
            timeModified = true;
            break;
          case "m":
            newValue.setMinutes(newValue.getMinutes() + offset);
            timeModified = true;
            break;
          case "s":
            newValue.setSeconds(newValue.getSeconds() + offset);
            timeModified = true;
            break;
          case "S":
            newValue.setMilliseconds(newValue.getMilliseconds() + offset);
            break;
          case "a":
            if (this.toggleDayPeriod) {
              newValue.setHours(hours >= 12 ? hours - 12 : hours + 12);
            } else {
              newValue.setHours(newValue.getHours() + 12 * offset);
            }
            timeModified = true;
            break;
          default:
            break;
        }
      }
      if (this.shouldNormalizeCentury()) {
        newValue = this.normalizeCentury(newValue);
      }
      if (timeModified && !this.cycleTime && newValue.getDate() !== this._value.getDate()) {
      }
      if (!invalidDateFound) {
        this.setExisting(symbol, true);
        this._value = newValue;
        if (this.getValue()) {
          this.resetInvalidDate();
        }
      }
    };
    DateObject2.prototype.parsePart = function(_a2) {
      var symbol = _a2.symbol, currentChar = _a2.currentChar, resetSegmentValue = _a2.resetSegmentValue, cycleSegmentValue = _a2.cycleSegmentValue, rawInputValue = _a2.rawTextValue, isDeleting = _a2.isDeleting, originalFormat = _a2.originalFormat;
      var isInCaretMode = !cycleSegmentValue;
      var dateParts = this.dateFormatString(this.value, this.format);
      var datePartsLiterals = dateParts.partMap.filter(function(x) {
        return x.type === "literal";
      }).map(function(x, index) {
        return {
          datePartIndex: index,
          type: x.type,
          pattern: x.pattern,
          literal: ""
        };
      });
      var flatDateParts = dateParts.partMap.map(function(x) {
        return {
          type: x.type,
          pattern: x.pattern,
          text: ""
        };
      });
      for (var i = 0; i < datePartsLiterals.length; i++) {
        var datePart = datePartsLiterals[i];
        for (var j = 0; j < datePart.pattern.length; j++) {
          if (datePartsLiterals[i + j]) {
            datePartsLiterals[i + j].literal = datePart.pattern[j];
          }
        }
        i += datePart.pattern.length - 1;
      }
      for (var i = 0; i < flatDateParts.length; i++) {
        var datePart = flatDateParts[i];
        for (var j = 0; j < datePart.pattern.length; j++) {
          if (flatDateParts[i + j]) {
            flatDateParts[i + j].text = datePart.pattern[j];
          }
        }
        i += datePart.pattern.length - 1;
      }
      var shouldResetPart = isInCaretMode && symbol === "M" && dateParts.partMap.filter(function(x) {
        return x.type === "month";
      }).some(function(x) {
        return x.pattern.length > MONTH_PART_WITH_WORDS_THRESHOLD;
      });
      var parseResult = {
        value: null,
        switchToNext: false,
        resetPart: shouldResetPart,
        hasInvalidDatePart: false
      };
      if (!currentChar) {
        if (isInCaretMode) {
          for (var i = 0; i < datePartsLiterals.length; i++) {
            var literal = datePartsLiterals[i].literal;
            var rawValueStartsWithLiteral = rawInputValue.startsWith(literal);
            var rawValueEndsWithLiteral = rawInputValue.endsWith(literal);
            var rawValueHasConsecutiveLiterals = rawInputValue.indexOf(literal + literal) >= 0;
            if (rawValueStartsWithLiteral || rawValueEndsWithLiteral || rawValueHasConsecutiveLiterals) {
              this.resetLeadingZero();
              this.setExisting(symbol, false);
              this.resetInvalidDateSymbol(symbol);
              return extend(parseResult, {
                value: null,
                switchToNext: false
              });
            }
          }
        } else {
          this.resetLeadingZero();
          this.setExisting(symbol, false);
          this.resetInvalidDateSymbol(symbol);
          return extend(parseResult, {
            value: null,
            switchToNext: false
          });
        }
      }
      var baseDate = this.intl.formatDate(this.value, this.format, this.localeId);
      var baseFormat = dateParts.symbols;
      var replaced = false;
      var prefix = "";
      var current = "";
      var datePartText = "";
      var basePrefix = "";
      var baseSuffix = "";
      var suffix = "";
      var convertedBaseFormat = "";
      for (var i = 0; i < flatDateParts.length; i++) {
        convertedBaseFormat += flatDateParts[i].text;
      }
      var hasFixedFormat = this.format === baseFormat || this.format === convertedBaseFormat || this.format === originalFormat || this.format.length === originalFormat.length;
      var datePartStartIndex = (hasFixedFormat ? convertedBaseFormat : originalFormat).indexOf(symbol);
      var datePartEndIndex = (hasFixedFormat ? convertedBaseFormat : originalFormat).lastIndexOf(symbol);
      var segmentLength = datePartEndIndex - datePartStartIndex + 1;
      var formatToTextLengthDiff = originalFormat.length - rawInputValue.length;
      if (isInCaretMode || !isInCaretMode && !this.autoCorrectParts) {
        var segmentCharIndex = 0;
        for (var i = 0; i < baseDate.length; i++) {
          if (baseFormat[i] === symbol) {
            var existing = this.getExisting(symbol);
            if (symbol === "y") {
              if (!this.hasInvalidDatePart() && this.getExisting("y")) {
                current += baseDate[i];
              } else {
                var invalidDatePartValue = this.getInvalidDatePartValue(symbol);
                if (isPresent(invalidDatePartValue)) {
                  current += (invalidDatePartValue || "").toString()[segmentCharIndex] || "";
                  segmentCharIndex++;
                } else {
                  current += existing ? baseDate[i] : "0";
                }
              }
            } else {
              current += existing ? baseDate[i] : "0";
            }
            if (formatToTextLengthDiff > 0) {
              if (datePartText.length + formatToTextLengthDiff < segmentLength) {
                datePartText += rawInputValue[i] || "";
              }
            } else {
              datePartText += rawInputValue[i] || "";
            }
            replaced = true;
          } else if (!replaced) {
            prefix += baseDate[i];
            basePrefix += baseDate[i];
          } else {
            suffix += baseDate[i];
            baseSuffix += baseDate[i];
          }
        }
        if (hasFixedFormat) {
          if (convertedBaseFormat.length < rawInputValue.length) {
            datePartText += currentChar;
          } else if (!isDeleting && originalFormat.length > rawInputValue.length) {
          }
          if (this.autoCorrectParts && datePartText.length > segmentLength) {
            return extend(parseResult, {
              value: null,
              switchToNext: false
            });
          }
        }
        if (!hasFixedFormat || hasFixedFormat && !this.autoCorrectParts) {
          current = "";
          datePartText = "";
          prefix = "";
          suffix = "";
          replaced = false;
          var baseSymbolStart = convertedBaseFormat.indexOf(symbol);
          var symbolCharIdx = 0;
          var segmentCharIndex_1 = 0;
          for (var i = 0; i < originalFormat.length; i++) {
            if (originalFormat[i] === symbol) {
              var existing = this.getExisting(symbol);
              var baseIdx = baseSymbolStart + symbolCharIdx;
              if (symbol === "y") {
                if (!this.hasInvalidDatePart() && this.getExisting("y")) {
                  current += baseDate[baseIdx];
                } else {
                  var invalidDatePartValue = this.getInvalidDatePartValue(symbol);
                  if (isPresent(invalidDatePartValue)) {
                    current += (invalidDatePartValue || "").toString()[segmentCharIndex_1] || "";
                    segmentCharIndex_1++;
                  } else {
                    current += existing ? baseDate[baseIdx] : "0";
                  }
                }
              } else {
                current += existing ? baseDate[baseIdx] || "" : "0";
              }
              symbolCharIdx++;
              if (formatToTextLengthDiff > 0) {
                if (datePartText.length + formatToTextLengthDiff < segmentLength) {
                  datePartText += rawInputValue[i] || "";
                }
              } else {
                datePartText += rawInputValue[i] || "";
              }
              replaced = true;
            } else if (!replaced) {
              prefix += rawInputValue[i] || "";
            } else {
              suffix += rawInputValue[i - formatToTextLengthDiff] || "";
            }
          }
          if (originalFormat.length < rawInputValue.length) {
            datePartText += currentChar;
          }
        }
      }
      if (!isInCaretMode) {
        if (this.autoCorrectParts) {
          current = "";
          datePartText = "";
          prefix = "";
          suffix = "";
          replaced = false;
          for (var i = 0; i < baseDate.length; i++) {
            if (baseFormat[i] === symbol) {
              var existing = this.getExisting(symbol);
              current += existing ? baseDate[i] : "0";
              replaced = true;
            } else if (!replaced) {
              prefix += baseDate[i];
            } else {
              suffix += baseDate[i];
            }
          }
        } else {
          current = resetSegmentValue ? datePartText : current;
        }
      }
      var parsedDate = null;
      var _b = this.matchMonth(currentChar), monthByChar = _b.monthName, matchesCount = _b.matchesCount;
      var dayPeriod = this.matchDayPeriod(currentChar, symbol);
      var isZeroCurrentChar = currentChar === "0";
      var leadingZero = this.leadingZero || {};
      if (isZeroCurrentChar) {
        if (datePartText === "0") {
          datePartText = current;
        }
        var valueNumber = parseToInt(resetSegmentValue ? currentChar : (isInCaretMode ? datePartText : current) + currentChar);
        if (valueNumber === 0 && !this.isAbbrMonth(dateParts.partMap, symbol) && symbol !== "a") {
          this.incrementLeadingZero(symbol);
        }
      } else {
        this.resetLeadingZero();
      }
      var partPattern = this.partPattern(dateParts.partMap, symbol);
      var patternValue = partPattern ? partPattern.pattern : null;
      var patternLength = this.patternLength(patternValue) || (patternValue ? patternValue.length : 0);
      if (isInCaretMode) {
        if (isDeleting && !datePartText) {
          this.setExisting(symbol, false);
          return extend(parseResult, {
            value: null,
            switchToNext: false
          });
        }
      }
      var currentMaxLength = current.length - 3;
      var tryParse = true;
      var middle = isInCaretMode ? datePartText : current;
      for (var i = Math.max(0, currentMaxLength); i <= current.length; i++) {
        if (!tryParse) {
          break;
        }
        middle = resetSegmentValue ? currentChar : isInCaretMode ? datePartText : current.substring(i) + currentChar;
        if (this.autoSwitchParts && symbol === "h" && current.substring(i) === "12") {
          middle = middle.replace("12", "0");
        }
        if (isInCaretMode || !this.autoCorrectParts) {
          tryParse = false;
          middle = unpadZero(middle);
          middle = padZero(patternLength - middle.length) + middle;
        }
        var middleNumber = parseInt(middle, 10);
        var candidateDateString = prefix + middle + suffix;
        parsedDate = this.intl.parseDate(candidateDateString, this.format, this.localeId);
        if (parsedDate && this.value && dateParts.partMap.every(function(x) {
          return x.type !== "year" && x.type !== "month" && x.type != "day";
        })) {
          parsedDate.setFullYear(this.value.getFullYear());
          parsedDate.setMonth(this.value.getMonth());
          parsedDate.setDate(this.value.getDate());
        }
        var autoCorrectedPrefixAndSuffix = false;
        if (isInCaretMode && !isValidDate(parsedDate)) {
          if (this.autoCorrectParts) {
            parsedDate = this.intl.parseDate(basePrefix + middle + baseSuffix, this.format, this.localeId);
            autoCorrectedPrefixAndSuffix = true;
          }
        }
        var isCurrentCharParsable = !isNaN(parseInt(currentChar, 10)) || isInCaretMode && isDeleting && currentChar === "";
        if (!parsedDate && !isNaN(middleNumber) && isCurrentCharParsable && this.autoCorrectParts) {
          if (symbol === MONTH_SYMBOL && !monthByChar) {
            var monthNumber = middleNumber - JS_MONTH_OFFSET;
            if (monthNumber > -1 && monthNumber < 12) {
              parsedDate = cloneDate(this.value);
              parsedDate.setMonth(monthNumber);
              if (parsedDate.getMonth() !== monthNumber) {
                parsedDate = lastDayOfMonth(addMonths(parsedDate, -1));
              }
            }
          }
          if (symbol === "y") {
            parsedDate = createDate(parseInt(middle, 10), this.month ? this.value.getMonth() : 0, this.date ? this.value.getDate() : 1, this.hours ? this.value.getHours() : 0, this.minutes ? this.value.getMinutes() : 0, this.seconds ? this.value.getSeconds() : 0, this.milliseconds ? this.value.getMilliseconds() : 0);
            if ((isInCaretMode && isValidDate(parsedDate) || !isInCaretMode && parsedDate) && this.date && parsedDate.getDate() !== this.value.getDate()) {
              parsedDate = lastDayOfMonth(addMonths(parsedDate, -1));
            }
          }
        }
        if (isInCaretMode && isValidDate(parsedDate) || !isInCaretMode && parsedDate) {
          var peekResult = this.isPeekDateOverflowingDatePart({
            useBasePrefixAndSuffix: autoCorrectedPrefixAndSuffix,
            middle,
            patternValue,
            basePrefix,
            baseSuffix,
            prefix,
            suffix,
            symbol,
            patternLength,
            leadingZero
          });
          var switchToNext = peekResult.switchToNext;
          if (this.shouldNormalizeCentury()) {
            parsedDate = this.normalizeCentury(parsedDate);
          }
          if (symbol === "H" && parsedDate.getHours() >= 12) {
            this.setExisting("a", true);
          }
          this._value = parsedDate;
          this.setExisting(symbol, true);
          this.resetInvalidDateSymbol(symbol);
          if (!this.autoCorrectParts) {
            if (symbol === "M") {
              if (this.getExisting("M") && this.getExisting("y")) {
                this.setExisting("d", true);
                this.resetInvalidDateSymbol("d");
              }
            } else if (symbol === "d") {
              if (this.getExisting("d") && this.getExisting("y")) {
                this.setExisting("M", true);
                this.resetInvalidDateSymbol("M");
              }
            } else if (symbol === "y") {
              this.markDatePartsAsExisting();
            }
            if (!this.hasInvalidDatePart()) {
              this.markDatePartsAsExisting();
              if (!peekResult.peekedDate && peekResult.switchToNext && !this.autoCorrectParts) {
                if (symbol === "M") {
                } else if (symbol === "d") {
                  if (peekResult.parsedPeekedValue === 30 && this.value.getMonth() === MONTH_INDEX_FEBRUARY) {
                    switchToNext = false;
                  }
                }
              }
            }
          }
          return extend(parseResult, {
            value: this.value,
            switchToNext
          });
        }
      }
      if (monthByChar) {
        parsedDate = this.intl.parseDate(prefix + monthByChar + suffix, this.format, this.localeId);
        if (parsedDate) {
          this._value = parsedDate;
          this.setExisting(symbol, true);
          return extend(parseResult, {
            value: this.value,
            switchToNext: matchesCount === 1
          });
        }
      }
      if (dayPeriod) {
        parsedDate = this.intl.parseDate(prefix + dayPeriod + suffix, this.format) || this.intl.parseDate(basePrefix + dayPeriod + baseSuffix, this.format);
        if (parsedDate) {
          this._value = parsedDate;
          this.setExisting(symbol, true);
          return extend(parseResult, {
            value: this.value,
            switchToNext: true
          });
        }
      }
      if (isZeroCurrentChar && symbol !== "a") {
        this.setExisting(symbol, false);
      }
      if (!this.autoCorrectParts) {
        var datePartValue = void 0;
        var textToParse = isInCaretMode ? datePartText : middle;
        var parsedValue = parseToInt(textToParse);
        if (isNumber(parsedValue) && isParseableToInt(textToParse)) {
          if (symbol === "d" && (parsedValue <= 0 || parsedValue > 31) || symbol === "M" && (parsedValue <= 0 || parsedValue > 12)) {
            if (isInCaretMode) {
              return extend(parseResult, {
                value: null,
                switchToNext: false
              });
            } else {
              textToParse = currentChar;
              parsedValue = parseToInt(textToParse);
            }
          }
          if (!isNumber(parsedValue) || !isParseableToInt(textToParse)) {
            return extend(parseResult, {
              value: null,
              switchToNext: false
            });
          }
          datePartValue = symbol === "M" ? parsedValue - JS_MONTH_OFFSET : parsedValue;
          var isYear = symbol === "y";
          var isMonth = symbol === "M";
          var isDay = symbol === "d";
          var newValue = cloneDate(this._value);
          var invalidDateParts = this._partiallyInvalidDate.invalidDateParts || {};
          var year = isYear ? datePartValue : invalidDateParts.y.value || newValue.getFullYear();
          var month = isMonth ? datePartValue : invalidDateParts.M.value || newValue.getMonth();
          var day = isDay ? datePartValue : invalidDateParts.d.value || invalidDateParts.E.value || newValue.getDate();
          var hour = invalidDateParts.h.value || invalidDateParts.H.value || newValue.getHours();
          var minutes = invalidDateParts.m.value || newValue.getMinutes();
          var seconds = invalidDateParts.s.value || newValue.getSeconds();
          var milliseconds = invalidDateParts.S.value || newValue.getMilliseconds();
          var dateCandidate = createDate(year, month, day, hour, minutes, seconds, milliseconds);
          var dateCandidateExists = areDatePartsEqualTo(dateCandidate, year, month, day, hour, minutes, seconds, milliseconds);
          var newValueCandidate = isYear || isMonth || isDay ? this.modifyDateSymbolWithValue(newValue, symbol, isYear ? year : isMonth ? month : day) : null;
          var invalidDateFound = false;
          if (isMonth && newValueCandidate) {
            if (newValueCandidate.getMonth() === month) {
              if (this.getExisting("d")) {
                if (dateCandidateExists) {
                  newValue = cloneDate(dateCandidate);
                  this.resetInvalidDateSymbol(symbol);
                } else {
                  invalidDateFound = true;
                  this.setInvalidDatePart(symbol, {
                    value: month,
                    date: cloneDate(newValueCandidate),
                    startDate: cloneDate(this.value)
                  });
                  this.setExisting(symbol, false);
                }
              } else if (dateCandidateExists) {
                this.resetInvalidDateSymbol(symbol);
                newValue = cloneDate(dateCandidate);
                if (this.getExisting("M") && this.getExisting("y")) {
                  this.setExisting("d", true);
                  this.resetInvalidDateSymbol("d");
                }
              } else {
                this.resetInvalidDateSymbol(symbol);
                newValue = cloneDate(newValueCandidate);
              }
            } else {
              invalidDateFound = true;
              this.setInvalidDatePart(symbol, {
                value: month,
                date: cloneDate(newValueCandidate),
                startDate: cloneDate(this.value)
              });
              this.setExisting(symbol, false);
            }
          } else if (isDay && newValueCandidate) {
            if (newValueCandidate.getDate() === day) {
              if (this.getExisting("M")) {
                if (dateCandidateExists) {
                  newValue = cloneDate(dateCandidate);
                  this.resetInvalidDateSymbol(symbol);
                } else {
                  invalidDateFound = true;
                  this.setInvalidDatePart(symbol, {
                    value: day,
                    date: cloneDate(newValueCandidate),
                    startDate: cloneDate(this.value)
                  });
                  this.setExisting(symbol, false);
                }
              } else if (dateCandidateExists) {
                newValue = cloneDate(dateCandidate);
                this.resetInvalidDateSymbol(symbol);
                if (this.getExisting("d") && this.getExisting("y")) {
                  this.setExisting("M", true);
                  this.resetInvalidDateSymbol("M");
                }
              } else {
                this.resetInvalidDateSymbol(symbol);
                newValue = cloneDate(newValueCandidate);
              }
            } else {
              invalidDateFound = true;
              this.setInvalidDatePart(symbol, {
                value: day,
                date: cloneDate(this.value),
                startDate: cloneDate(this.value)
              });
              this.setExisting(symbol, false);
            }
          } else if (isYear && newValueCandidate) {
            if (newValueCandidate.getFullYear() === year) {
              if (this.getExisting("d") && this.getExisting("M")) {
                if (dateCandidateExists) {
                  newValue = cloneDate(dateCandidate);
                  this.resetInvalidDateSymbol(symbol);
                } else {
                  invalidDateFound = true;
                  this.setInvalidDatePart(symbol, {
                    value: year,
                    date: cloneDate(newValueCandidate),
                    startDate: cloneDate(this.value)
                  });
                  this.setExisting(symbol, false);
                }
              } else if (dateCandidateExists) {
                this.resetInvalidDateSymbol(symbol);
                newValue = cloneDate(dateCandidate);
                if (this.getExisting("M") && this.getExisting("d")) {
                  this.setExisting("y", true);
                  this.resetInvalidDateSymbol("y");
                }
              } else {
                this.resetInvalidDateSymbol(symbol);
                newValue = cloneDate(newValueCandidate);
              }
            } else {
              invalidDateFound = true;
              this.setInvalidDatePart(symbol, {
                value: year,
                date: cloneDate(newValueCandidate),
                startDate: cloneDate(this.value)
              });
              this.setExisting(symbol, false);
            }
          }
          if (!invalidDateFound) {
            this.setExisting(symbol, true);
            if (isInCaretMode && !isValidDate(parsedDate)) {
              var valueCandidate = this.intl.parseDate(basePrefix + middle + baseSuffix, this.format, this.localeId);
              if (isValidDate(valueCandidate)) {
                this._value = valueCandidate;
              }
            } else {
              this._value = newValue;
            }
            if (this.getValue()) {
              this.resetInvalidDate();
            }
          }
          var switchToNext = false;
          var lengthToCheck = resetSegmentValue ? unpadZero(textToParse).length : textToParse.length;
          if (symbol === "M") {
            if (parsedValue >= 2 || lengthToCheck >= 2) {
              switchToNext = true;
            } else {
              switchToNext = false;
            }
          } else if (symbol === "d") {
            var shouldSwitchToNext = parsedValue >= 4 || lengthToCheck >= 2;
            switchToNext = shouldSwitchToNext;
          } else {
            if (hasFixedFormat) {
              var peekDateSwitchToNext = this.isPeekDateOverflowingDatePart({
                useBasePrefixAndSuffix: !this.autoCorrectParts,
                middle,
                patternValue,
                basePrefix,
                baseSuffix,
                prefix,
                suffix,
                symbol,
                patternLength,
                leadingZero
              }).switchToNext;
              switchToNext = peekDateSwitchToNext;
            } else {
              switchToNext = lengthToCheck > segmentLength;
            }
          }
          return extend(parseResult, {
            value: null,
            switchToNext,
            hasInvalidDatePart: invalidDateFound
          });
        }
      }
      return extend(parseResult, {
        value: null,
        switchToNext: false
      });
    };
    DateObject2.prototype.symbolMap = function(symbol) {
      return this.intl.splitDateFormat(this.format, this.localeId).reduce(dateSymbolMap, {})[symbol];
    };
    DateObject2.prototype.resetLeadingZero = function() {
      var hasLeadingZero = this.leadingZero !== null;
      this.setLeadingZero(null);
      return hasLeadingZero;
    };
    DateObject2.prototype.setLeadingZero = function(leadingZero) {
      this.leadingZero = leadingZero;
    };
    DateObject2.prototype.getLeadingZero = function() {
      return this.leadingZero || {};
    };
    DateObject2.prototype.normalizeCentury = function(date) {
      if (!isPresent(date)) {
        return date;
      }
      var twoDigitYear = cropTwoDigitYear(date);
      var centuryBase = this.getNormalizedCenturyBase(twoDigitYear);
      var normalizedDate = setYears(date, centuryBase + twoDigitYear);
      return normalizedDate;
    };
    DateObject2.prototype.incrementLeadingZero = function(symbol) {
      var leadingZero = this.leadingZero || {};
      leadingZero[symbol] = (leadingZero[symbol] || 0) + 1;
      this.leadingZero = leadingZero;
    };
    DateObject2.prototype.isAbbrMonth = function(parts, symbol) {
      var pattern = this.partPattern(parts, symbol);
      return pattern.type === "month" && pattern.names;
    };
    DateObject2.prototype.partPattern = function(parts, symbol) {
      return parts.filter(function(part) {
        return part.pattern.indexOf(symbol) !== -1;
      })[0];
    };
    DateObject2.prototype.peek = function(value, pattern) {
      if (!pattern) {
        return value;
      }
      var peekValue = value.replace(/^0*/, "") + "0";
      return padZero(pattern.length - peekValue.length) + peekValue;
    };
    DateObject2.prototype.matchMonth = function(typedChar) {
      var _this = this;
      this.typedMonthPart += typedChar.toLowerCase();
      if (this.monthNames.length === 0) {
        return {
          monthName: "",
          matchesCount: 0
        };
      }
      while (this.typedMonthPart.length > 0) {
        var matchingMonths = [];
        for (var i = 0; i < this.monthNames.length; i++) {
          var monthName = this.monthNames[i].toLowerCase();
          if (monthName.startsWith(this.typedMonthPart)) {
            matchingMonths.push(this.monthNames[i]);
          }
        }
        if (matchingMonths.length > 0) {
          return {
            monthName: matchingMonths[0],
            matchesCount: matchingMonths.length
          };
        }
        var monthAsNum = parseInt(this.typedMonthPart, 10);
        if (monthAsNum >= 1 && monthAsNum <= 12 && monthAsNum.toString().startsWith(this.typedMonthPart)) {
          var months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
          var matchesCount = months.reduce(function(count, month) {
            return month.toString().startsWith(_this.typedMonthPart) ? count + 1 : count;
          }, 0);
          return {
            monthName: this.monthNames[monthAsNum - 1],
            matchesCount
          };
        }
        this.typedMonthPart = this.typedMonthPart.substring(1, this.typedMonthPart.length);
      }
      return {
        monthName: "",
        matchesCount: 0
      };
    };
    DateObject2.prototype.matchDayPeriod = function(typedChar, symbol) {
      var lowerChart = typedChar.toLowerCase();
      if (symbol === "a" && this.dayPeriods) {
        if (this.dayPeriods.am.toLowerCase().startsWith(lowerChart)) {
          return this.dayPeriods.am;
        } else if (this.dayPeriods.pm.toLowerCase().startsWith(lowerChart)) {
          return this.dayPeriods.pm;
        }
      }
      return "";
    };
    DateObject2.prototype.allFormattedMonths = function(locale) {
      if (locale === void 0) {
        locale = "en";
      }
      var dateFormatParts = this.intl.splitDateFormat(this.format, this.localeId);
      for (var i = 0; i < dateFormatParts.length; i++) {
        if (dateFormatParts[i].type === "month" && dateFormatParts[i].names) {
          return this.intl.dateFormatNames(locale, dateFormatParts[i].names);
        }
      }
      return [];
    };
    DateObject2.prototype.allDayPeriods = function(locale) {
      if (locale === void 0) {
        locale = "en";
      }
      var dateFormatParts = this.intl.splitDateFormat(this.format);
      for (var i = 0; i < dateFormatParts.length; i++) {
        if (dateFormatParts[i].type === "dayperiod" && dateFormatParts[i].names) {
          return this.intl.dateFormatNames(locale, dateFormatParts[i].names);
        }
      }
      return null;
    };
    DateObject2.prototype.patternLength = function(pattern) {
      if (!pattern) {
        return 0;
      }
      if (pattern[0] === "y") {
        return 4;
      }
      if (SHORT_PATTERN_LENGTH_REGEXP.test(pattern)) {
        return 2;
      }
      return 0;
    };
    DateObject2.prototype.dateFormatString = function(date, format) {
      var dateFormatParts = this.intl.splitDateFormat(format, this.localeId);
      var parts = [];
      var partMap = [];
      for (var i = 0; i < dateFormatParts.length; i++) {
        var partLength = this.intl.formatDate(date, {
          pattern: dateFormatParts[i].pattern
        }, this.localeId).length;
        while (partLength > 0) {
          parts.push(this.symbols[dateFormatParts[i].pattern[0]] || Constants.formatSeparator);
          partMap.push(dateFormatParts[i]);
          partLength--;
        }
      }
      var returnValue = new Mask();
      returnValue.symbols = parts.join("");
      returnValue.partMap = partMap;
      return returnValue;
    };
    DateObject2.prototype.merge = function(text, mask) {
      var resultText = "";
      var resultFormat = "";
      var format = mask.symbols;
      var processTextSymbolsEnded = false;
      var ignoreFormatSymbolsCount = 0;
      var formattedDates = this.getFormattedInvalidDates(format);
      for (var formatSymbolIndex = format.length - 1; formatSymbolIndex >= 0; formatSymbolIndex--) {
        var partsForSegment = this.getPartsForSegment(mask, formatSymbolIndex);
        if (this.knownParts.indexOf(format[formatSymbolIndex]) === -1 || this.getExisting(format[formatSymbolIndex])) {
          if (this.autoCorrectParts) {
            resultText = text[formatSymbolIndex] + resultText;
          } else {
            if (text.length !== format.length) {
              if (processTextSymbolsEnded) {
                resultText = text[formatSymbolIndex] + resultText;
              } else if (ignoreFormatSymbolsCount > 0) {
                resultText = text[formatSymbolIndex] + resultText;
                ignoreFormatSymbolsCount--;
                if (ignoreFormatSymbolsCount <= 0) {
                  processTextSymbolsEnded = true;
                }
              } else {
                resultText = (text[formatSymbolIndex + text.length - format.length] || "") + resultText;
              }
            } else {
              resultText = text[formatSymbolIndex] + resultText;
            }
          }
          resultFormat = format[formatSymbolIndex] + resultFormat;
        } else {
          var symbol = format[formatSymbolIndex];
          var formatSymbolIndexModifier = 0;
          if (this.autoCorrectParts || !this.autoCorrectParts && !isPresent(this.getInvalidDatePartValue(symbol))) {
            while (formatSymbolIndex >= 0 && symbol === format[formatSymbolIndex]) {
              formatSymbolIndex--;
            }
            formatSymbolIndex++;
          }
          if (this.leadingZero && this.leadingZero[symbol]) {
            resultText = "0" + resultText;
          } else {
            if (!this.autoCorrectParts && this.getInvalidDatePartValue(symbol)) {
              var datePartText = this.getInvalidDatePartValue(symbol).toString();
              if (symbol === "M") {
                datePartText = (parseToInt(this.getInvalidDatePartValue(symbol)) + JS_MONTH_OFFSET).toString();
                if (partsForSegment.length > MONTH_PART_WITH_WORDS_THRESHOLD) {
                  resultText = formattedDates[symbol][formatSymbolIndex] + resultText;
                } else {
                  datePartText = (parseToInt(this.getInvalidDatePartValue(symbol)) + JS_MONTH_OFFSET).toString();
                  var formattedDatePart = padZero(partsForSegment.length - datePartText.length) + datePartText;
                  resultText = formattedDatePart + resultText;
                  formatSymbolIndexModifier = partsForSegment.length - 1;
                  ignoreFormatSymbolsCount = datePartText.length - partsForSegment.length;
                }
              } else {
                var formattedDatePart = padZero(partsForSegment.length - datePartText.length) + datePartText;
                resultText = formattedDatePart + resultText;
                formatSymbolIndexModifier = partsForSegment.length - 1;
                ignoreFormatSymbolsCount = datePartText.length - partsForSegment.length;
              }
            } else {
              resultText = this.dateFieldName(mask.partMap[formatSymbolIndex]) + resultText;
            }
          }
          while (resultFormat.length < resultText.length) {
            resultFormat = format[formatSymbolIndex] + resultFormat;
          }
          if (formatSymbolIndexModifier !== 0) {
            formatSymbolIndex = formatSymbolIndex - formatSymbolIndexModifier + (text.length - format.length);
          }
        }
      }
      return {
        text: resultText,
        format: resultFormat
      };
    };
    DateObject2.prototype.dateFieldName = function(part) {
      var formatPlaceholder = this.formatPlaceholder || "wide";
      if (formatPlaceholder[part.type]) {
        return formatPlaceholder[part.type];
      }
      if (formatPlaceholder === "formatPattern") {
        return part.pattern;
      }
      return this.intl.dateFieldName(Object.assign(part, {
        nameType: formatPlaceholder
      }));
    };
    DateObject2.prototype.getNormalizedCenturyBase = function(twoDigitYear) {
      return twoDigitYear > this.twoDigitYearMax ? PREVIOUS_CENTURY_BASE : CURRENT_CENTURY_BASE;
    };
    DateObject2.prototype.shouldNormalizeCentury = function() {
      return this.intl.splitDateFormat(this.format).some(function(part) {
        return part.pattern === "yy";
      });
    };
    DateObject2.prototype.resetInvalidDate = function() {
      var _this = this;
      this._partiallyInvalidDate.startDate = null;
      Object.keys(this._partiallyInvalidDate.invalidDateParts).forEach(function(key) {
        _this.resetInvalidDatePart(key);
      });
    };
    DateObject2.prototype.resetInvalidDateSymbol = function(symbol) {
      var _this = this;
      this.resetInvalidDatePart(symbol);
      var shouldResetInvalidDate = true;
      Object.keys(this._partiallyInvalidDate.invalidDateParts).forEach(function(key) {
        if (_this._partiallyInvalidDate.invalidDateParts[key] && isPresent(_this._partiallyInvalidDate.invalidDateParts[key].value)) {
          shouldResetInvalidDate = false;
        }
      });
      if (shouldResetInvalidDate) {
        this.resetInvalidDate();
      }
    };
    DateObject2.prototype.resetInvalidDatePart = function(symbol) {
      if (this._partiallyInvalidDate.invalidDateParts[symbol]) {
        this._partiallyInvalidDate.invalidDateParts[symbol] = {
          value: null,
          date: null,
          startDateOffset: 0
        };
      }
    };
    DateObject2.prototype.getInvalidDatePart = function(symbol) {
      var invalidDatePart = this._partiallyInvalidDate.invalidDateParts[symbol];
      return invalidDatePart || {};
    };
    DateObject2.prototype.getInvalidDatePartValue = function(symbol) {
      var invalidDatePart = this._partiallyInvalidDate.invalidDateParts[symbol];
      return (invalidDatePart || {}).value;
    };
    DateObject2.prototype.setInvalidDatePart = function(symbol, _a2) {
      var _b = _a2.value, value = _b === void 0 ? null : _b, _c = _a2.date, date = _c === void 0 ? null : _c, _d = _a2.startDateOffset, startDateOffset = _d === void 0 ? 0 : _d, _e = _a2.startDate, startDate = _e === void 0 ? null : _e;
      if (this._partiallyInvalidDate.invalidDateParts[symbol]) {
        this._partiallyInvalidDate.invalidDateParts[symbol].value = value;
        this._partiallyInvalidDate.invalidDateParts[symbol].date = date;
        this._partiallyInvalidDate.invalidDateParts[symbol].startDateOffset = startDateOffset;
        this._partiallyInvalidDate.startDate = startDate;
      }
    };
    DateObject2.prototype.hasInvalidDatePart = function() {
      var _this = this;
      var hasInvalidDatePart = false;
      Object.keys(this._partiallyInvalidDate.invalidDateParts).forEach(function(key) {
        if (_this._partiallyInvalidDate.invalidDateParts[key] && isPresent(_this._partiallyInvalidDate.invalidDateParts[key].value)) {
          hasInvalidDatePart = true;
        }
      });
      return hasInvalidDatePart;
    };
    DateObject2.prototype.modifyDateSymbolWithOffset = function(date, symbol, offset) {
      var newValue = cloneDate(date);
      var timeModified = false;
      switch (symbol) {
        case "y":
          newValue.setFullYear(newValue.getFullYear() + offset);
          break;
        case "M":
          newValue = addMonths(this.value, offset);
          break;
        case "d":
        case "E":
          newValue.setDate(newValue.getDate() + offset);
          break;
        case "h":
        case "H":
          newValue.setHours(newValue.getHours() + offset);
          timeModified = true;
          break;
        case "m":
          newValue.setMinutes(newValue.getMinutes() + offset);
          timeModified = true;
          break;
        case "s":
          newValue.setSeconds(newValue.getSeconds() + offset);
          timeModified = true;
          break;
        case "S":
          newValue.setMilliseconds(newValue.getMilliseconds() + offset);
          break;
        case "a":
          newValue.setHours(newValue.getHours() + 12 * offset);
          timeModified = true;
          break;
        default:
          break;
      }
      return {
        date: newValue,
        timeModified
      };
    };
    DateObject2.prototype.modifyDateSymbolWithValue = function(date, symbol, value) {
      var newValue = cloneDate(date);
      switch (symbol) {
        case "y":
          newValue.setFullYear(value);
          break;
        case "M":
          newValue = addMonths(date, value - date.getMonth());
          break;
        case "d":
        case "E":
          newValue.setDate(value);
          break;
        case "h":
        case "H":
          newValue.setHours(value);
          break;
        case "m":
          newValue.setMinutes(value);
          break;
        case "s":
          newValue.setSeconds(value);
          break;
        case "S":
          newValue.setMilliseconds(value);
          break;
        case "a":
          newValue.setHours(value);
          break;
        default:
          break;
      }
      return newValue;
    };
    DateObject2.prototype.markDatePartsAsExisting = function() {
      this.modifyExisting(true);
    };
    DateObject2.prototype.getPartsForSegment = function(mask, partIndex) {
      var segmentPart = mask.partMap[partIndex];
      var partsForSegment = [];
      for (var maskPartIndex = partIndex; maskPartIndex < mask.partMap.length; maskPartIndex++) {
        var part = mask.partMap[maskPartIndex];
        if (segmentPart.type === part.type && segmentPart.pattern === part.pattern) {
          partsForSegment.push(part);
        } else {
          break;
        }
      }
      for (var maskPartIndex = partIndex - 1; maskPartIndex >= 0; maskPartIndex--) {
        var part = mask.partMap[maskPartIndex];
        if (segmentPart.type === part.type && segmentPart.pattern === part.pattern) {
          partsForSegment.unshift(part);
        } else {
          break;
        }
      }
      return partsForSegment;
    };
    DateObject2.prototype.isPeekDateOverflowingDatePart = function(_a2) {
      var useBasePrefixAndSuffix = _a2.useBasePrefixAndSuffix, middle = _a2.middle, patternValue = _a2.patternValue, basePrefix = _a2.basePrefix, baseSuffix = _a2.baseSuffix, prefix = _a2.prefix, suffix = _a2.suffix, symbol = _a2.symbol, patternLength = _a2.patternLength, leadingZero = _a2.leadingZero;
      var peekedValue = this.peek(middle, patternValue);
      var peekedDateString = useBasePrefixAndSuffix ? "".concat(basePrefix).concat(peekedValue).concat(baseSuffix) : "".concat(prefix).concat(peekedValue).concat(suffix);
      var peekedDate = this.intl.parseDate(peekedDateString, this.format, this.localeId);
      var leadingZeroOffset = (this.leadingZero || {})[symbol] || 0;
      var patternSatisfied = leadingZeroOffset + unpadZero(middle).length >= patternLength;
      var parsedPeekedValue = parseToInt(peekedValue);
      var switchToNext = peekedDate === null || (leadingZero[symbol] ? patternValue.length <= middle.length : patternSatisfied);
      return {
        peekedDate,
        peekedDateString,
        peekedValue,
        parsedPeekedValue,
        switchToNext
      };
    };
    return DateObject2;
  }()
);

// node_modules/@progress/kendo-dateinputs-common/dist/es/common/keycode.js
var KeyCode = {
  BACKSPACE: 8,
  DELETE: 46,
  TAB: 9,
  ENTER: 13,
  ESCAPE: 27,
  ARROW_LEFT: 37,
  ARROW_UP: 38,
  ARROW_RIGHT: 39,
  ARROW_DOWN: 40,
  SPACE: 32,
  END: 35,
  HOME: 36,
  PAGE_UP: 33,
  PAGE_DOWN: 34
};

// node_modules/@progress/kendo-dateinputs-common/dist/es/common/observable.js
var defaultOptions = {
  events: {}
};
var Observable2 = (
  /** @class */
  function() {
    function Observable3(options) {
      this.options = extend({}, defaultOptions, options);
    }
    Observable3.prototype.destroy = function() {
      this.options = {};
    };
    Observable3.prototype.trigger = function(eventName, args) {
      if (args === void 0) {
        args = {};
      }
      var eventData = {
        defaultPrevented: false,
        preventDefault: function() {
          eventData.defaultPrevented = true;
        }
      };
      if (isFunction(this.options.events[eventName])) {
        this.options.events[eventName](extend(eventData, args, {
          sender: this
        }));
        return eventData.defaultPrevented;
      }
      return false;
    };
    return Observable3;
  }()
);

// node_modules/@progress/kendo-dateinputs-common/dist/es/dateinput/interaction-mode.js
var DateInputInteractionMode;
(function(DateInputInteractionMode2) {
  DateInputInteractionMode2["None"] = "none";
  DateInputInteractionMode2["Caret"] = "caret";
  DateInputInteractionMode2["Selection"] = "selection";
})(DateInputInteractionMode || (DateInputInteractionMode = {}));

// node_modules/@progress/kendo-dateinputs-common/dist/es/dateinput/dateinput.js
var _a;
var DEFAULT_SEGMENT_STEP = 1;
var DRAG_START = "dragStart";
var DROP = "drop";
var TOUCH_START = "touchstart";
var MOUSE_DOWN = "mousedown";
var MOUSE_UP = "mouseup";
var CLICK = "click";
var INPUT = "input";
var KEY_DOWN = "keydown";
var FOCUS = "focus";
var BLUR = "blur";
var PASTE = "paste";
var MOUSE_SCROLL = "DOMMouseScroll";
var MOUSE_WHEEL = "mousewheel";
var VALUE_CHANGE = "valueChange";
var INPUT_END = "inputEnd";
var BLUR_END = "blurEnd";
var FOCUS_END = "focusEnd";
var CHANGE = "change";
var defaultDateInputOptions = {
  format: "d",
  hasPlaceholder: false,
  placeholder: null,
  cycleTime: true,
  locale: null,
  steps: {
    millisecond: DEFAULT_SEGMENT_STEP,
    second: DEFAULT_SEGMENT_STEP,
    minute: DEFAULT_SEGMENT_STEP,
    hour: DEFAULT_SEGMENT_STEP,
    day: DEFAULT_SEGMENT_STEP,
    month: DEFAULT_SEGMENT_STEP,
    year: DEFAULT_SEGMENT_STEP
  },
  formatPlaceholder: null,
  events: (_a = {}, _a[VALUE_CHANGE] = null, _a[INPUT] = null, _a[INPUT_END] = null, _a[FOCUS] = null, _a[FOCUS_END] = null, _a[BLUR] = null, _a[BLUR_END] = null, _a[KEY_DOWN] = null, _a[MOUSE_WHEEL] = null, _a[CHANGE] = null, _a),
  selectNearestSegmentOnFocus: false,
  selectPreviousSegmentOnBackspace: false,
  enableMouseWheel: false,
  allowCaretMode: false,
  autoSwitchParts: true,
  autoSwitchKeys: [],
  twoDigitYearMax: Constants.twoDigitYearMax,
  autoCorrectParts: true,
  autoFill: false,
  toggleDayPeriod: false
};
var DateInput = (
  /** @class */
  function(_super) {
    __extends(DateInput2, _super);
    function DateInput2(element, options) {
      var _this = _super.call(this, options) || this;
      _this.dateObject = null;
      _this.currentText = "";
      _this.currentFormat = "";
      _this.interactionMode = DateInputInteractionMode.None;
      _this.previousElementSelection = {
        start: 0,
        end: 0
      };
      _this.init(element, options);
      return _this;
    }
    Object.defineProperty(DateInput2.prototype, "value", {
      get: function() {
        return this.dateObject && this.dateObject.getValue();
      },
      enumerable: false,
      configurable: true
    });
    DateInput2.prototype.init = function(element, options) {
      var dateValue = isValidDate(this.options.value) ? cloneDate(this.options.value) : new Date(options.formattedValue);
      if (!isValidDate(dateValue)) {
        dateValue = null;
      }
      this.element = element;
      this.options = extend({}, defaultDateInputOptions, options, {
        steps: __assign(__assign({}, defaultDateInputOptions.steps), options.steps)
      });
      this.intl = this.options.intlService;
      this.dateObject = this.createDateObject();
      this.dateObject.setValue(dateValue);
      this.setTextAndFormat();
      this.bindEvents();
      this.resetSegmentValue = true;
      this.interactionMode = DateInputInteractionMode.None;
      this.forceUpdate();
    };
    DateInput2.prototype.destroy = function() {
      this.unbindEvents();
      this.dateObject = null;
      _super.prototype.destroy.call(this);
    };
    DateInput2.prototype.bindEvents = function() {
      this.onElementDragStart = this.onElementDragStart.bind(this);
      this.element.addEventListener(DRAG_START, this.onElementDragStart);
      this.onElementDrop = this.onElementDrop.bind(this);
      this.element.addEventListener(DROP, this.onElementDrop);
      this.onElementClick = this.onElementClick.bind(this);
      this.element.addEventListener(CLICK, this.onElementClick);
      this.onElementMouseDown = this.onElementMouseDown.bind(this);
      this.element.addEventListener(MOUSE_DOWN, this.onElementMouseDown);
      this.element.addEventListener(TOUCH_START, this.onElementMouseDown);
      this.onElementMouseUp = this.onElementMouseUp.bind(this);
      this.element.addEventListener(MOUSE_UP, this.onElementMouseUp);
      this.onElementInput = this.onElementInput.bind(this);
      this.element.addEventListener(INPUT, this.onElementInput);
      this.onElementKeyDown = this.onElementKeyDown.bind(this);
      this.element.addEventListener(KEY_DOWN, this.onElementKeyDown);
      this.onElementFocus = this.onElementFocus.bind(this);
      this.element.addEventListener(FOCUS, this.onElementFocus);
      this.onElementBlur = this.onElementBlur.bind(this);
      this.element.addEventListener(BLUR, this.onElementBlur);
      this.onElementChange = this.onElementChange.bind(this);
      this.element.addEventListener(CHANGE, this.onElementChange);
      this.onElementPaste = this.onElementPaste.bind(this);
      this.element.addEventListener(PASTE, this.onElementPaste);
      this.onElementMouseWheel = this.onElementMouseWheel.bind(this);
      this.element.addEventListener(MOUSE_SCROLL, this.onElementMouseWheel);
      this.element.addEventListener(MOUSE_WHEEL, this.onElementMouseWheel);
    };
    DateInput2.prototype.unbindEvents = function() {
      this.element.removeEventListener(DRAG_START, this.onElementDragStart);
      this.element.removeEventListener(DROP, this.onElementDrop);
      this.element.removeEventListener(TOUCH_START, this.onElementMouseDown);
      this.element.removeEventListener(MOUSE_DOWN, this.onElementMouseDown);
      this.element.removeEventListener(MOUSE_UP, this.onElementMouseUp);
      this.element.removeEventListener(CLICK, this.onElementClick);
      this.element.removeEventListener(INPUT, this.onElementInput);
      this.element.removeEventListener(KEY_DOWN, this.onElementKeyDown);
      this.element.removeEventListener(FOCUS, this.onElementFocus);
      this.element.removeEventListener(BLUR, this.onElementBlur);
      this.element.removeEventListener(CHANGE, this.onElementChange);
      this.element.removeEventListener(PASTE, this.onElementPaste);
      this.element.removeEventListener(MOUSE_SCROLL, this.onElementMouseWheel);
      this.element.removeEventListener(MOUSE_WHEEL, this.onElementMouseWheel);
    };
    DateInput2.prototype.setOptions = function(options, refresh) {
      if (refresh === void 0) {
        refresh = false;
      }
      this.options = extend({}, this.options, options, {
        steps: __assign(__assign({}, defaultDateInputOptions.steps), options.steps)
      });
      this.setDateObjectOptions();
      if (refresh) {
        this.unbindEvents();
        this.init(this.element, this.options);
      }
    };
    DateInput2.prototype.setDateObjectOptions = function() {
      if (this.dateObject) {
        var newOptions = this.getDateObjectOptions();
        this.dateObject.setOptions(newOptions);
      }
    };
    DateInput2.prototype.resetLocale = function() {
      this.unbindEvents();
      this.init(this.element, this.options);
    };
    DateInput2.prototype.isInCaretMode = function() {
      return this.interactionMode === DateInputInteractionMode.Caret;
    };
    DateInput2.prototype.focus = function() {
      this.element.focus();
      if (this.options.selectNearestSegmentOnFocus) {
        this.selectNearestSegment(0);
      }
    };
    DateInput2.prototype.onElementDragStart = function(e) {
      e.preventDefault();
    };
    DateInput2.prototype.onElementDrop = function(e) {
      e.preventDefault();
    };
    DateInput2.prototype.onElementMouseDown = function() {
      this.mouseDownStarted = true;
      this.focusedPriorToMouseDown = this.isActive;
    };
    DateInput2.prototype.onElementMouseUp = function(e) {
      this.mouseDownStarted = false;
      e.preventDefault();
    };
    DateInput2.prototype.onElementClick = function(e) {
      this.mouseDownStarted = false;
      this.switchedPartOnPreviousKeyAction = false;
      var selection = this.selection;
      if (this.isInCaretMode()) {
        this.forceUpdate();
      }
      if (e.detail === 3) {
      } else {
        if (this.isActive && this.options.selectNearestSegmentOnFocus) {
          var selectionPresent = this.element.selectionStart !== this.element.selectionEnd;
          var placeholderToggled = isPresent(this.options.placeholder) && !this.dateObject.hasValue() && !this.focusedPriorToMouseDown;
          var selectFirstSegment = !selectionPresent && placeholderToggled;
          var index = selectFirstSegment ? 0 : this.caret()[0];
          this.selectNearestSegment(index);
        } else {
          this.setSelection(this.selectionByIndex(selection.start));
        }
      }
    };
    DateInput2.prototype.onElementInput = function(e) {
      this.triggerInput({
        event: e
      });
      var oldElementValue = this.elementValue;
      if (!this.element || !this.dateObject) {
        return;
      }
      var switchedPartOnPreviousKeyAction = this.switchedPartOnPreviousKeyAction;
      if (this.isPasteInProgress) {
        if (this.options.allowCaretMode) {
          this.resetSegmentValue = false;
        }
        this.updateOnPaste(e);
        this.isPasteInProgress = false;
        return;
      }
      var keyDownEvent = this.keyDownEvent || {};
      var isBackspaceKey = keyDownEvent.keyCode === KeyCode.BACKSPACE || keyDownEvent.key === Key.BACKSPACE;
      var isDeleteKey = keyDownEvent.keyCode === KeyCode.DELETE || keyDownEvent.key === Key.DELETE;
      var originalInteractionMode = this.interactionMode;
      if (this.options.allowCaretMode && originalInteractionMode !== DateInputInteractionMode.Caret && !isDeleteKey && !isBackspaceKey) {
        this.resetSegmentValue = true;
      }
      if (this.options.allowCaretMode) {
        this.interactionMode = DateInputInteractionMode.Caret;
      } else {
        this.interactionMode = DateInputInteractionMode.Selection;
      }
      var hasCaret = this.isInCaretMode();
      if (hasCaret && this.keyDownEvent.key === Key.SPACE) {
        this.restorePreviousInputEventState();
        return;
      }
      var oldExistingDateValue = this.dateObject && this.dateObject.getValue();
      var oldDateValue = this.dateObject ? this.dateObject.value : null;
      var _a2 = this.dateObject.getTextAndFormat(), currentText = _a2.text, currentFormat = _a2.format;
      this.currentFormat = currentFormat;
      var oldText = "";
      if (hasCaret) {
        if (isBackspaceKey || isDeleteKey) {
          oldText = this.previousElementValue;
        } else if (originalInteractionMode === DateInputInteractionMode.Caret) {
          oldText = this.previousElementValue;
        } else {
          oldText = currentText;
        }
      } else {
        oldText = currentText;
      }
      var newText = this.elementValue;
      var diff = approximateStringMatching({
        oldText,
        newText,
        formatPattern: this.currentFormat,
        selectionStart: this.selection.start,
        isInCaretMode: hasCaret,
        keyEvent: this.keyDownEvent
      });
      if (diff && diff.length && diff[0] && diff[0][1] !== Constants.formatSeparator) {
        this.switchedPartOnPreviousKeyAction = false;
      }
      if (hasCaret && (!diff || diff.length === 0)) {
        this.restorePreviousInputEventState();
        return;
      } else if (hasCaret && diff.length === 1) {
        if (!diff[0] || !diff[0][0]) {
          this.restorePreviousInputEventState();
          return;
        } else if (hasCaret && diff[0] && (diff[0][0] === Constants.formatSeparator || diff[0][1] === Constants.formatSeparator)) {
          this.restorePreviousInputEventState();
          return;
        }
      }
      var navigationOnly = diff.length === 1 && diff[0][1] === Constants.formatSeparator;
      var parsePartsResults = [];
      var switchPart = false;
      var error = null;
      if (!navigationOnly) {
        for (var i = 0; i < diff.length; i++) {
          var parsePartResult = this.dateObject.parsePart({
            symbol: diff[i][0],
            currentChar: diff[i][1],
            resetSegmentValue: this.resetSegmentValue,
            cycleSegmentValue: !this.isInCaretMode(),
            rawTextValue: this.element.value,
            isDeleting: isBackspaceKey || isDeleteKey,
            originalFormat: this.currentFormat
          });
          parsePartsResults.push(parsePartResult);
          if (!parsePartResult.value) {
            error = {
              type: "parse"
            };
          }
          switchPart = parsePartResult.switchToNext;
        }
      }
      if (!this.options.autoSwitchParts) {
        switchPart = false;
      }
      this.resetSegmentValue = false;
      var hasFixedFormat = this.options.format === this.currentFormat || // all not fixed formats are 1 symbol, e.g. "d"
      isPresent(this.options.format) && this.options.format.length > 1;
      var lastParseResult = parsePartsResults[parsePartsResults.length - 1];
      var lastParseResultHasNoValue = lastParseResult && !isPresent(lastParseResult.value);
      var parsingFailedOnDelete = hasCaret && (isBackspaceKey || isDeleteKey) && lastParseResultHasNoValue;
      var resetPart = lastParseResult ? lastParseResult.resetPart : false;
      var newExistingDateValue = this.dateObject.getValue();
      var hasExistingDateValueChanged = !isEqual(oldExistingDateValue, newExistingDateValue);
      var newDateValue = this.dateObject.value;
      var symbolForSelection;
      var currentSelection = this.selection;
      if (hasCaret) {
        var diffChar = diff && diff.length > 0 ? diff[0][0] : null;
        var hasLeadingZero = this.dateObject.getLeadingZero()[diffChar];
        if (diff.length && diff[0][0] !== Constants.formatSeparator) {
          if (switchPart) {
            this.forceUpdateWithSelection();
            this.switchDateSegment(1);
          } else if (resetPart) {
            symbolForSelection = this.currentFormat[currentSelection.start];
            if (symbolForSelection) {
              this.forceUpdate();
              this.setSelection(this.selectionBySymbol(symbolForSelection));
            } else {
              this.restorePreviousInputEventState();
            }
          } else if (parsingFailedOnDelete) {
            this.forceUpdate();
            if (diff.length && diff[0][0] !== Constants.formatSeparator) {
              this.setSelection(this.selectionBySymbol(diff[0][0]));
            }
          } else if (lastParseResultHasNoValue) {
            if (e.data === "0" && hasLeadingZero) {
            } else if (isPresent(oldExistingDateValue) && !isPresent(newExistingDateValue)) {
              this.restorePreviousInputEventState();
            } else if (!isPresent(oldExistingDateValue) && isPresent(newExistingDateValue)) {
              this.forceUpdateWithSelection();
            } else if (isPresent(oldExistingDateValue) && isPresent(newExistingDateValue)) {
              if (hasExistingDateValueChanged) {
                this.forceUpdateWithSelection();
              } else {
                this.restorePreviousInputEventState();
              }
            } else if (!isPresent(oldExistingDateValue) && !isPresent(newExistingDateValue)) {
              this.forceUpdateWithSelection();
            } else if (oldDateValue !== newDateValue) {
            } else {
              this.restorePreviousInputEventState();
            }
          } else if (!lastParseResultHasNoValue) {
            if (!hasFixedFormat) {
              this.forceUpdateWithSelection();
            }
          }
        } else {
          if (!this.options.autoSwitchParts && diff[0][1] === Constants.formatSeparator) {
          } else {
            this.setSelection(this.selectionBySymbol(diff[0][0]));
          }
        }
      } else if (!hasCaret) {
        this.forceUpdate();
        if (diff.length && diff[0][0] !== Constants.formatSeparator) {
          this.setSelection(this.selectionBySymbol(diff[0][0]));
        }
        if (this.options.autoSwitchParts) {
          if (navigationOnly) {
            this.resetSegmentValue = true;
            if (!switchedPartOnPreviousKeyAction) {
              this.switchDateSegment(1);
            }
            this.switchedPartOnPreviousKeyAction = true;
          } else if (switchPart) {
            this.switchDateSegment(1);
            this.switchedPartOnPreviousKeyAction = true;
          }
        } else {
          if (lastParseResult && lastParseResult.switchToNext) {
            this.resetSegmentValue = true;
          } else if (navigationOnly) {
            this.resetSegmentValue = true;
            if (!switchedPartOnPreviousKeyAction) {
              this.switchDateSegment(1);
            }
            this.switchedPartOnPreviousKeyAction = true;
          }
        }
        if (isBackspaceKey && this.options.selectPreviousSegmentOnBackspace) {
          this.switchDateSegment(-1);
        }
      }
      this.tryTriggerValueChange({
        oldValue: oldExistingDateValue,
        event: e
      });
      this.triggerInputEnd({
        event: e,
        error,
        oldElementValue,
        newElementValue: this.elementValue
      });
      if (hasCaret) {
        this.setTextAndFormat();
      }
    };
    DateInput2.prototype.onElementFocus = function(e) {
      if (this.triggerFocus({
        event: e
      })) {
        return;
      }
      this.isActive = true;
      this.interactionMode = DateInputInteractionMode.None;
      this.switchedPartOnPreviousKeyAction = false;
      this.refreshElementValue();
      if (!this.mouseDownStarted) {
        this.caret(0, this.elementValue.length);
      }
      this.mouseDownStarted = false;
      this.triggerFocusEnd({
        event: e
      });
    };
    DateInput2.prototype.onElementBlur = function(e) {
      this.resetSegmentValue = true;
      this.isActive = false;
      if (this.triggerBlur({
        event: e
      })) {
        return;
      }
      if (this.options.autoFill) {
        this.autoFill();
      }
      this.interactionMode = DateInputInteractionMode.None;
      this.switchedPartOnPreviousKeyAction = false;
      this.refreshElementValue();
      this.triggerBlurEnd({
        event: e
      });
    };
    DateInput2.prototype.onElementChange = function(e) {
      this.triggerChange({
        event: e
      });
    };
    DateInput2.prototype.onElementKeyDown = function(e) {
      if (this.triggerKeyDown({
        event: e
      })) {
        return;
      }
      var _a2 = this.selection, start = _a2.start, end = _a2.end;
      var event = e;
      this.keyDownEvent = e;
      this.previousElementValue = this.element.value;
      this.previousElementSelection = {
        start,
        end
      };
      if (this.keyEventMatchesAutoSwitchKeys(e)) {
        var isTabKey = e.keyCode === KeyCode.TAB;
        if (isTabKey) {
          var _b = this.selection, selectionStart = _b.start, selectionEnd = _b.end;
          if (e.shiftKey && isTabKey) {
            this.switchDateSegment(-1);
          } else {
            this.switchDateSegment(1);
          }
          if (selectionStart !== this.selection.start || selectionEnd !== this.selection.end) {
            e.preventDefault();
            return;
          }
        } else {
          e.preventDefault();
          this.switchDateSegment(1);
          return;
        }
      }
      var symbol = this.currentFormat[this.selection.start];
      var step = this.getStepFromSymbol(symbol);
      var shouldPreventDefault = false;
      var oldElementValue = this.elementValue;
      if (e.altKey || e.ctrlKey || e.metaKey || e.keyCode === KeyCode.TAB) {
        return;
      }
      switch (e.keyCode) {
        case KeyCode.ARROW_LEFT:
          this.switchDateSegment(-1);
          shouldPreventDefault = true;
          this.switchedPartOnPreviousKeyAction = false;
          break;
        case KeyCode.ARROW_UP:
          this.modifyDateSegmentValue(step, symbol, event);
          if (oldElementValue !== this.elementValue) {
            this.triggerInputEnd({
              event: e,
              error: null,
              newElementValue: this.elementValue,
              oldElementValue
            });
          }
          shouldPreventDefault = true;
          this.switchedPartOnPreviousKeyAction = false;
          break;
        case KeyCode.ARROW_RIGHT:
          this.switchDateSegment(1);
          shouldPreventDefault = true;
          this.switchedPartOnPreviousKeyAction = false;
          break;
        case KeyCode.ARROW_DOWN:
          this.modifyDateSegmentValue(-step, symbol, event);
          if (oldElementValue !== this.elementValue) {
            this.triggerInputEnd({
              event: e,
              error: null,
              newElementValue: this.elementValue,
              oldElementValue
            });
          }
          shouldPreventDefault = true;
          this.switchedPartOnPreviousKeyAction = false;
          break;
        case KeyCode.ENTER:
          break;
        case KeyCode.HOME:
          this.selectNearestSegment(0);
          shouldPreventDefault = true;
          this.switchedPartOnPreviousKeyAction = false;
          this.resetSegmentValue = true;
          break;
        case KeyCode.END:
          this.selectNearestSegment(this.elementValue.length);
          shouldPreventDefault = true;
          this.switchedPartOnPreviousKeyAction = false;
          this.resetSegmentValue = true;
          break;
        default:
          return;
      }
      if (shouldPreventDefault) {
        e.preventDefault();
      }
    };
    DateInput2.prototype.onElementPaste = function() {
      this.isPasteInProgress = true;
    };
    DateInput2.prototype.onElementMouseWheel = function(e) {
      var oldElementValue = this.elementValue;
      if (!this.options.enableMouseWheel || this.triggerMouseWheel({
        event: e
      })) {
        return;
      }
      if (!this.isActive) {
        return;
      }
      var event = e;
      var symbol = this.currentFormat[this.selection.start];
      var step = this.getStepFromSymbol(symbol);
      if (event.shiftKey) {
        this.switchDateSegment((event.wheelDelta || -event.detail) > 0 ? -1 : 1);
      } else {
        this.modifyDateSegmentValue((event.wheelDelta || -event.detail) > 0 ? step : -step);
      }
      event.returnValue = false;
      if (event.preventDefault) {
        event.preventDefault();
      }
      if (oldElementValue !== this.elementValue) {
        this.triggerInputEnd({
          event: e,
          error: null,
          newElementValue: this.elementValue,
          oldElementValue
        });
      }
    };
    DateInput2.prototype.updateOnPaste = function(e) {
      var value = this.intl.parseDate(this.elementValue, this.inputFormat) || this.value;
      if (isPresent(value) && this.dateObject.shouldNormalizeCentury()) {
        value = this.dateObject.normalizeCentury(value);
      }
      var oldDateObjectValue = this.dateObject && this.dateObject.getValue();
      this.writeValue(value);
      this.tryTriggerValueChange({
        oldValue: oldDateObjectValue,
        event: e
      });
    };
    Object.defineProperty(DateInput2.prototype, "elementValue", {
      get: function() {
        return (this.element || {}).value || "";
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(DateInput2.prototype, "inputFormat", {
      get: function() {
        if (!this.options.format) {
          return Constants.defaultDateFormat;
        }
        if (typeof this.options.format === "string") {
          return this.options.format;
        } else {
          return this.options.format.inputFormat;
        }
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(DateInput2.prototype, "displayFormat", {
      get: function() {
        if (!this.options.format) {
          return Constants.defaultDateFormat;
        }
        if (typeof this.options.format === "string") {
          return this.options.format;
        } else {
          return this.options.format.displayFormat;
        }
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(DateInput2.prototype, "selection", {
      get: function() {
        var returnValue = {
          start: 0,
          end: 0
        };
        if (this.element !== null && this.element.selectionStart !== void 0) {
          returnValue = {
            start: this.element.selectionStart,
            end: this.element.selectionEnd
          };
        }
        return returnValue;
      },
      enumerable: false,
      configurable: true
    });
    DateInput2.prototype.setSelection = function(selection) {
      if (this.element && document.activeElement === this.element) {
        this.element.setSelectionRange(selection.start, selection.end);
        if (isDocumentAvailable2() && isIOS()) {
          this.element.scrollIntoView({
            block: "nearest",
            inline: "nearest"
          });
        }
        if (selection.start !== selection.end) {
          this.interactionMode = DateInputInteractionMode.Selection;
        }
      }
    };
    DateInput2.prototype.selectionBySymbol = function(symbol) {
      var start = -1;
      var end = 0;
      for (var i = 0; i < this.currentFormat.length; i++) {
        if (this.currentFormat[i] === symbol) {
          end = i + 1;
          if (start === -1) {
            start = i;
          }
        }
      }
      if (start < 0) {
        start = 0;
      }
      if (!this.options.autoCorrectParts && this.currentFormat.length !== this.currentText.length) {
        if (this.currentFormat.length < this.currentText.length) {
          end += this.currentText.length - this.currentFormat.length;
        } else {
          end = Math.max(0, end - (this.currentFormat.length - this.currentText.length));
        }
      }
      return {
        start,
        end
      };
    };
    DateInput2.prototype.selectionByIndex = function(index) {
      var selection = {
        start: index,
        end: index
      };
      for (var i = index, j = index - 1; i < this.currentFormat.length || j >= 0; i++, j--) {
        if (i < this.currentFormat.length && this.currentFormat[i] !== Constants.formatSeparator) {
          selection = this.selectionBySymbol(this.currentFormat[i]);
          break;
        }
        if (j >= 0 && this.currentFormat[j] !== Constants.formatSeparator) {
          selection = this.selectionBySymbol(this.currentFormat[j]);
          break;
        }
      }
      return selection;
    };
    DateInput2.prototype.switchDateSegment = function(offset) {
      var selection = this.selection;
      if (this.isInCaretMode()) {
        var start = selection.start;
        var currentSymbol = this.currentFormat[start - 1];
        var symbol = "";
        var symbolCandidate = "";
        if (offset < 0) {
          for (var i = start + offset; i >= 0; i--) {
            symbolCandidate = this.currentFormat[i];
            if (symbolCandidate !== Constants.formatSeparator && symbolCandidate !== currentSymbol) {
              start = i;
              symbol = symbolCandidate;
              break;
            }
          }
        } else {
          for (var i = start + offset; i < this.currentFormat.length; i++) {
            symbolCandidate = this.currentFormat[i];
            if (symbolCandidate !== Constants.formatSeparator && symbolCandidate !== currentSymbol) {
              start = i;
              symbol = symbolCandidate;
              break;
            }
          }
        }
        if (symbol) {
          this.forceUpdate();
          this.setSelection(this.selectionBySymbol(symbol));
          this.interactionMode = DateInputInteractionMode.Selection;
          return;
        }
      }
      this.interactionMode = DateInputInteractionMode.None;
      var _a2 = this.selection, selectionStart = _a2.start, selectionEnd = _a2.end;
      if (selectionStart < selectionEnd && this.currentFormat[selectionStart] !== this.currentFormat[selectionEnd - 1]) {
        this.setSelection(this.selectionByIndex(offset > 0 ? selectionStart : selectionEnd - 1));
        this.resetSegmentValue = true;
        this.interactionMode = DateInputInteractionMode.None;
        return;
      }
      var previousFormatSymbol = this.currentFormat[selectionStart];
      var a = selectionStart + offset;
      while (a > 0 && a < this.currentFormat.length) {
        if (this.currentFormat[a] !== previousFormatSymbol && this.currentFormat[a] !== Constants.formatSeparator) {
          break;
        }
        a += offset;
      }
      if (this.currentFormat[a] === Constants.formatSeparator) {
        return;
      }
      var b = a;
      while (b >= 0 && b < this.currentFormat.length) {
        if (this.currentFormat[b] !== this.currentFormat[a]) {
          break;
        }
        b += offset;
      }
      if (a > b && (b + 1 !== selectionStart || a + 1 !== selectionEnd)) {
        this.setSelection({
          start: b + 1,
          end: a + 1
        });
        this.resetSegmentValue = true;
      } else if (a < b && (a !== selectionStart || b !== selectionEnd)) {
        this.setSelection({
          start: a,
          end: b
        });
        this.resetSegmentValue = true;
      }
      this.interactionMode = DateInputInteractionMode.None;
    };
    DateInput2.prototype.modifyDateSegmentValue = function(offset, symbol, event) {
      if (symbol === void 0) {
        symbol = "";
      }
      if (event === void 0) {
        event = {};
      }
      if (!this.dateObject || this.options.readonly) {
        return;
      }
      var oldValue = this.value;
      var step = DEFAULT_SEGMENT_STEP;
      var caret = this.caret();
      symbol = symbol || this.currentFormat[caret[0]];
      if (symbol === "S" && (!this.options.steps.millisecond || this.options.steps.millisecond === DEFAULT_SEGMENT_STEP)) {
        var msDigits = millisecondDigitsInFormat(this.inputFormat);
        step = millisecondStepFor(msDigits);
      }
      this.dateObject.modifyPart(symbol, step * offset);
      this.tryTriggerValueChange({
        oldValue,
        event
      });
      this.forceUpdate();
      this.setSelection(this.selectionBySymbol(symbol));
    };
    DateInput2.prototype.tryTriggerValueChange = function(args) {
      if (args === void 0) {
        args = {
          oldValue: null,
          event: {}
        };
      }
      if (!isEqual(this.value, args.oldValue)) {
        return this.triggerValueChange(args);
      }
    };
    DateInput2.prototype.triggerValueChange = function(args) {
      if (args === void 0) {
        args = {
          oldValue: null,
          event: {}
        };
      }
      return this.trigger(VALUE_CHANGE, extend(args, {
        value: this.value
      }));
    };
    DateInput2.prototype.triggerInput = function(args) {
      if (args === void 0) {
        args = {
          event: {}
        };
      }
      return this.trigger(INPUT, extend(args, {
        value: this.value
      }));
    };
    DateInput2.prototype.triggerInputEnd = function(args) {
      if (args === void 0) {
        args = {
          event: {},
          error: null,
          oldElementValue: "",
          newElementValue: ""
        };
      }
      return this.trigger(INPUT_END, extend(args, {
        value: this.value
      }));
    };
    DateInput2.prototype.triggerFocus = function(args) {
      if (args === void 0) {
        args = {
          event: {}
        };
      }
      return this.trigger(FOCUS, extend({}, args));
    };
    DateInput2.prototype.triggerFocusEnd = function(args) {
      if (args === void 0) {
        args = {
          event: {}
        };
      }
      return this.trigger(FOCUS_END, extend({}, args));
    };
    DateInput2.prototype.triggerBlur = function(args) {
      if (args === void 0) {
        args = {
          event: {}
        };
      }
      return this.trigger(BLUR, extend({}, args));
    };
    DateInput2.prototype.triggerBlurEnd = function(args) {
      if (args === void 0) {
        args = {
          event: {}
        };
      }
      return this.trigger(BLUR_END, extend({}, args));
    };
    DateInput2.prototype.triggerChange = function(args) {
      if (args === void 0) {
        args = {
          event: {}
        };
      }
      return this.trigger(CHANGE, extend(args, {
        value: this.value
      }));
    };
    DateInput2.prototype.triggerKeyDown = function(args) {
      if (args === void 0) {
        args = {
          event: {}
        };
      }
      return this.trigger(KEY_DOWN, extend({}, args));
    };
    DateInput2.prototype.triggerMouseWheel = function(args) {
      if (args === void 0) {
        args = {
          event: {}
        };
      }
      return this.trigger(MOUSE_WHEEL, extend({}, args));
    };
    DateInput2.prototype.forceUpdate = function() {
      this.setTextAndFormat();
      this.refreshElementValue();
    };
    DateInput2.prototype.forceUpdateWithSelection = function() {
      var _a2 = this.selection, start = _a2.start, end = _a2.end;
      var elementValueLength = this.elementValue.length;
      this.forceUpdate();
      var selectionOffset = this.elementValue.length - elementValueLength;
      this.setSelection({
        start: start + selectionOffset,
        end: end + selectionOffset
      });
    };
    DateInput2.prototype.setTextAndFormat = function() {
      var _a2 = this.dateObject.getTextAndFormat(), currentText = _a2.text, currentFormat = _a2.format;
      this.currentFormat = currentFormat;
      this.currentText = currentText;
    };
    DateInput2.prototype.setElementValue = function(value) {
      this.element.value = value;
    };
    DateInput2.prototype.getStepFromSymbol = function(symbol) {
      switch (symbol) {
        case "S":
          return Number(this.options.steps.millisecond);
        case "s":
          return Number(this.options.steps.second);
        case "m":
          return Number(this.options.steps.minute);
        case "h":
        case "H":
          return Number(this.options.steps.hour);
        case "M":
          return Number(this.options.steps.month);
        case "d":
        case "E":
          return Number(this.options.steps.day);
        case "y":
          return Number(this.options.steps.year);
        default:
          return DEFAULT_SEGMENT_STEP;
      }
    };
    DateInput2.prototype.restorePreviousInputEventState = function() {
      this.restorePreviousElementValue();
      this.restorePreviousElementSelection();
    };
    DateInput2.prototype.restorePreviousElementValue = function() {
      this.setElementValue(this.previousElementValue || "");
    };
    DateInput2.prototype.restorePreviousElementSelection = function() {
      var _a2 = this.previousElementSelection, start = _a2.start, end = _a2.end;
      this.setSelection({
        start: start || 0,
        end: end || 0
      });
    };
    DateInput2.prototype.writeValue = function(value) {
      this.verifyValue(value);
      this.dateObject = this.getDateObject(value);
      this.refreshElementValue();
    };
    DateInput2.prototype.verifyValue = function(value) {
      if (value && !isValidDate(value)) {
        throw new Error("The 'value' should be a valid JavaScript Date instance.");
      }
    };
    DateInput2.prototype.refreshElementValue = function() {
      var element = this.element;
      var format = this.isActive ? this.inputFormat : this.displayFormat;
      var _a2 = this.dateObject.getTextAndFormat(format), currentText = _a2.text, currentFormat = _a2.format;
      this.currentFormat = currentFormat;
      this.currentText = currentText;
      var hasPlaceholder = this.options.hasPlaceholder || isPresent(this.options.placeholder);
      var showPlaceholder = !this.isActive && hasPlaceholder && !this.dateObject.hasValue();
      if (hasPlaceholder && isPresent(this.options.placeholder)) {
        element.placeholder = this.options.placeholder;
      }
      var newElementValue = showPlaceholder ? "" : currentText;
      this.previousElementValue = this.elementValue;
      this.setElementValue(newElementValue);
    };
    DateInput2.prototype.caret = function(start, end) {
      if (end === void 0) {
        end = start;
      }
      var isPosition = start !== void 0;
      var returnValue = [start, start];
      var element = this.element;
      if (isPosition && (this.options.disabled || this.options.readonly)) {
        return void 0;
      }
      try {
        if (element.selectionStart !== void 0) {
          if (isPosition) {
            if (isDocumentAvailable2() && document.activeElement !== element) {
              element.focus();
            }
            element.setSelectionRange(start, end);
          }
          returnValue = [element.selectionStart, element.selectionEnd];
        }
      } catch (e) {
        returnValue = [];
      }
      return returnValue;
    };
    DateInput2.prototype.selectNearestSegment = function(index) {
      for (var i = index, j = index - 1; i < this.currentFormat.length || j >= 0; i++, j--) {
        if (i < this.currentFormat.length && this.currentFormat[i] !== "_") {
          this.selectDateSegment(this.currentFormat[i]);
          return;
        }
        if (j >= 0 && this.currentFormat[j] !== "_") {
          this.selectDateSegment(this.currentFormat[j]);
          return;
        }
      }
    };
    DateInput2.prototype.selectDateSegment = function(symbol) {
      var begin = -1;
      var end = 0;
      for (var i = 0; i < this.currentFormat.length; i++) {
        if (this.currentFormat[i] === symbol) {
          end = i + 1;
          if (begin === -1) {
            begin = i;
          }
        }
      }
      if (begin < 0) {
        begin = 0;
      }
      this.caret(0, 0);
      this.caret(begin, end);
    };
    DateInput2.prototype.getDateObject = function(value) {
      var leadingZero = (this.dateObject || {}).leadingZero;
      this.options.value = value;
      var dateObject = this.createDateObject();
      dateObject.setLeadingZero(this.isActive ? leadingZero : null);
      return dateObject;
    };
    DateInput2.prototype.createDateObject = function() {
      var defaultOptions2 = this.getDateObjectOptions();
      var dateObject = new DateObject(extend({}, defaultOptions2));
      return dateObject;
    };
    DateInput2.prototype.getDateObjectOptions = function() {
      var newOptions = {
        intlService: this.options.intlService,
        formatPlaceholder: this.options.formatPlaceholder ? this.options.formatPlaceholder : "formatPattern",
        format: this.inputFormat,
        cycleTime: this.options.cycleTime,
        twoDigitYearMax: this.options.twoDigitYearMax,
        autoCorrectParts: this.options.autoCorrectParts,
        value: this.options.value,
        toggleDayPeriod: this.options.toggleDayPeriod,
        autoSwitchParts: this.options.autoSwitchParts
      };
      return newOptions;
    };
    DateInput2.prototype.keyEventMatchesAutoSwitchKeys = function(keyObject) {
      var autoSwitchKeys = (this.options.autoSwitchKeys || []).map(function(x) {
        return x.toString().toLowerCase().trim();
      });
      if (autoSwitchKeys.indexOf(keyObject.keyCode.toString()) >= 0 || autoSwitchKeys.indexOf(keyObject.keyCode) >= 0 || autoSwitchKeys.indexOf(keyObject.key.toLowerCase().trim()) >= 0) {
        return true;
      }
      return false;
    };
    DateInput2.prototype.autoFill = function() {
      var dateObject = this.dateObject;
      var currentDate = /* @__PURE__ */ new Date();
      var day, month, year, hours, minutes, seconds;
      if (dateObject.date || dateObject.month || dateObject.year || dateObject.hours || dateObject.minutes || dateObject.seconds) {
        year = dateObject.year ? dateObject.value.getFullYear() : currentDate.getFullYear(), month = dateObject.month ? dateObject.value.getMonth() : currentDate.getMonth(), day = dateObject.date ? dateObject.value.getDate() : currentDate.getDate(), hours = dateObject.hours ? dateObject.value.getHours() : currentDate.getHours(), minutes = dateObject.minutes ? dateObject.value.getMinutes() : currentDate.getMinutes(), seconds = dateObject.seconds ? dateObject.value.getSeconds() : currentDate.getSeconds();
        dateObject.setValue(new Date(year, month, day, hours, minutes, seconds));
        this.refreshElementValue();
        this.triggerValueChange();
      }
    };
    return DateInput2;
  }(Observable2)
);

// node_modules/@progress/kendo-angular-dateinputs/fesm2022/progress-kendo-angular-dateinputs.mjs
var _c0 = ["kendoCalendarView", ""];
var _c1 = (a0, a1) => ({
  $implicit: a0,
  cellContext: a1
});
function ViewComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tr", 0)(1, "th", 2);
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵattribute("aria-hidden", ctx_r0.ariaHidden);
    ɵɵadvance();
    ɵɵproperty("colSpan", ctx_r0.colSpan);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.title);
  }
}
function ViewComponent_tr_1_Conditional_1_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const row_r3 = ɵɵnextContext(3).$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵtextInterpolate1(" ", ctx_r0.getWeekNumber(ctx_r0.firstDate(row_r3)), " ");
  }
}
function ViewComponent_tr_1_Conditional_1_Conditional_0_Conditional_2_ng_template_0_Template(rf, ctx) {
}
function ViewComponent_tr_1_Conditional_1_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ViewComponent_tr_1_Conditional_1_Conditional_0_Conditional_2_ng_template_0_Template, 0, 0, "ng-template", 7);
  }
  if (rf & 2) {
    const row_r3 = ɵɵnextContext(3).$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.weekNumberTemplateRef)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c1, ctx_r0.firstDate(row_r3), ctx_r0.getWeekNumberContext(row_r3)));
  }
}
function ViewComponent_tr_1_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "td", 6);
    ɵɵlistener("click", function ViewComponent_tr_1_Conditional_1_Conditional_0_Template_td_click_0_listener() {
      ɵɵrestoreView(_r2);
      const row_r3 = ɵɵnextContext(2).$implicit;
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.handleWeekNumberClick(row_r3));
    });
    ɵɵtemplate(1, ViewComponent_tr_1_Conditional_1_Conditional_0_Conditional_1_Template, 1, 1)(2, ViewComponent_tr_1_Conditional_1_Conditional_0_Conditional_2_Template, 1, 5, null, 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵconditional(!ctx_r0.weekNumberTemplateRef ? 1 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r0.weekNumberTemplateRef ? 2 : -1);
  }
}
function ViewComponent_tr_1_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "td", 5);
    ɵɵtext(1, " ");
    ɵɵelementEnd();
  }
}
function ViewComponent_tr_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ViewComponent_tr_1_Conditional_1_Conditional_0_Template, 3, 2, "td", 4)(1, ViewComponent_tr_1_Conditional_1_Conditional_1_Template, 2, 0, "td", 5);
  }
  if (rf & 2) {
    const row_r3 = ɵɵnextContext().$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵconditional(ctx_r0.firstDate(row_r3) ? 0 : 1);
  }
}
function ViewComponent_tr_1_ng_container_2_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const cell_r4 = ɵɵnextContext(2).$implicit;
    ɵɵtextInterpolate(cell_r4.formattedValue);
  }
}
function ViewComponent_tr_1_ng_container_2_Conditional_1_Conditional_3_ng_template_0_Template(rf, ctx) {
}
function ViewComponent_tr_1_ng_container_2_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ViewComponent_tr_1_ng_container_2_Conditional_1_Conditional_3_ng_template_0_Template, 0, 0, "ng-template", 7);
  }
  if (rf & 2) {
    const cell_r4 = ɵɵnextContext(2).$implicit;
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.templateRef)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c1, cell_r4.value, cell_r4));
  }
}
function ViewComponent_tr_1_ng_container_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "td", 8)(1, "span", 9);
    ɵɵtemplate(2, ViewComponent_tr_1_ng_container_2_Conditional_1_Conditional_2_Template, 1, 1)(3, ViewComponent_tr_1_ng_container_2_Conditional_1_Conditional_3_Template, 1, 5, null, 7);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    const cell_r4 = ctx_r4.$implicit;
    const cellIndex_r6 = ctx_r4.index;
    const rowIndex_r7 = ɵɵnextContext().index;
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r0.getStyles(cell_r4))("title", cell_r4.title);
    ɵɵattribute("id", cell_r4.id)("data-cell-index", ctx_r0.tableCellIndex(rowIndex_r7, cellIndex_r6))("aria-selected", cell_r4.isSelected || cell_r4.isRangeStart || cell_r4.isRangeMid || cell_r4.isRangeEnd)("aria-disabled", cell_r4.isDisabled)("aria-label", ctx_r0.getMonthLabel(cell_r4.value));
    ɵɵadvance(2);
    ɵɵconditional(!ctx_r0.templateRef ? 2 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r0.templateRef ? 3 : -1);
  }
}
function ViewComponent_tr_1_ng_container_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "td", 5);
    ɵɵtext(1, " ");
    ɵɵelementEnd();
  }
}
function ViewComponent_tr_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ViewComponent_tr_1_ng_container_2_Conditional_1_Template, 4, 9, "td", 8)(2, ViewComponent_tr_1_ng_container_2_Conditional_2_Template, 2, 0, "td", 5);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const cell_r4 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵconditional(ctx_r0.shouldRenderCellContent(cell_r4) ? 1 : 2);
  }
}
function ViewComponent_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tr", 0);
    ɵɵtemplate(1, ViewComponent_tr_1_Conditional_1_Template, 2, 1)(2, ViewComponent_tr_1_ng_container_2_Template, 3, 1, "ng-container", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const row_r3 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵconditional(ctx_r0.weekNumber ? 1 : -1);
    ɵɵadvance();
    ɵɵproperty("kForOf", row_r3);
  }
}
var _c2 = (a0) => ({
  date: a0,
  className: "k-pointer-events-none"
});
var _c3 = (a0) => ({
  date: a0
});
function HorizontalViewListComponent_ng_template_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "caption", 4);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const date_r3 = ɵɵnextContext().date;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.getCaptionTitle(date_r3));
  }
}
function HorizontalViewListComponent_ng_template_0_Conditional_2_For_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "th", 8);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const name_r4 = ctx.$implicit;
    const ɵ$index_14_r5 = ctx.$index;
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵattribute("aria-label", ctx_r1.wideWeekNames[ɵ$index_14_r5]);
    ɵɵadvance();
    ɵɵtextInterpolate(name_r4);
  }
}
function HorizontalViewListComponent_ng_template_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "thead", 5)(1, "tr", 7);
    ɵɵrepeaterCreate(2, HorizontalViewListComponent_ng_template_0_Conditional_2_For_3_Template, 2, 2, "th", 8, ɵɵrepeaterTrackByIndex);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵrepeater(ctx_r1.weekNames);
  }
}
function HorizontalViewListComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "table", 3);
    ɵɵlistener("focus", function HorizontalViewListComponent_ng_template_0_Template_table_focus_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.handleClassicCalendarFocus());
    })("blur", function HorizontalViewListComponent_ng_template_0_Template_table_blur_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.handleClassicCalendarBlur($event));
    });
    ɵɵtemplate(1, HorizontalViewListComponent_ng_template_0_Conditional_1_Template, 2, 1, "caption", 4)(2, HorizontalViewListComponent_ng_template_0_Conditional_2_Template, 4, 0, "thead", 5);
    ɵɵelementStart(3, "tbody", 6);
    ɵɵlistener("cellClick", function HorizontalViewListComponent_ng_template_0_Template_tbody_cellClick_3_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.cellClick.emit($event));
    })("weekNumberCellClick", function HorizontalViewListComponent_ng_template_0_Template_tbody_weekNumberCellClick_3_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.weekNumberCellClick.emit($event));
    })("cellEnter", function HorizontalViewListComponent_ng_template_0_Template_tbody_cellEnter_3_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.cellEnter.emit($event));
    })("cellLeave", function HorizontalViewListComponent_ng_template_0_Template_tbody_cellLeave_3_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.cellLeave.emit($event));
    })("focusedCellId", function HorizontalViewListComponent_ng_template_0_Template_tbody_focusedCellId_3_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.focusedCellChange.emit($event));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const date_r3 = ctx.date;
    const class_r6 = ctx.className;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngClass", class_r6);
    ɵɵattribute("role", ctx_r1.views >= 2 ? "none" : "grid")("aria-labelledby", ctx_r1.id)("aria-activedescendant", ctx_r1.getActiveDescendant)("tabindex", ctx_r1.getTabIndex);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.showViewHeader ? 1 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.isMonthView() ? 2 : -1);
    ɵɵadvance();
    ɵɵproperty("allowReverse", ctx_r1.allowReverse)("showOtherMonthDays", ctx_r1.showOtherMonthDays)("activeView", ctx_r1.activeView)("isActive", ctx_r1.isActive)("min", ctx_r1.min)("max", ctx_r1.max)("cellUID", ctx_r1.cellUID)("focusedDate", ctx_r1.focusedDate)("selectedDates", ctx_r1.selectedDates)("selectionRange", ctx_r1.selectionRange)("activeRangeEnd", ctx_r1.activeRangeEnd)("weekNumber", ctx_r1.weekNumber)("templateRef", ctx_r1.cellTemplateRef)("weekNumberTemplateRef", ctx_r1.weekNumberTemplateRef)("viewDate", date_r3);
  }
}
function HorizontalViewListComponent_Conditional_2_ng_template_0_Template(rf, ctx) {
}
function HorizontalViewListComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, HorizontalViewListComponent_Conditional_2_ng_template_0_Template, 0, 0, "ng-template", 1);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    const tableTemplate_r7 = ɵɵreference(1);
    ɵɵproperty("ngTemplateOutlet", tableTemplate_r7)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c2, ctx_r1.nextAnimationDate));
  }
}
function HorizontalViewListComponent_3_ng_template_0_Template(rf, ctx) {
}
function HorizontalViewListComponent_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, HorizontalViewListComponent_3_ng_template_0_Template, 0, 0, "ng-template", 1);
  }
  if (rf & 2) {
    const date_r8 = ctx.$implicit;
    ɵɵnextContext();
    const tableTemplate_r7 = ɵɵreference(1);
    ɵɵproperty("ngTemplateOutlet", tableTemplate_r7)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c3, date_r8));
  }
}
function HorizontalViewListComponent_Conditional_4_ng_template_0_Template(rf, ctx) {
}
function HorizontalViewListComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, HorizontalViewListComponent_Conditional_4_ng_template_0_Template, 0, 0, "ng-template", 1);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    const tableTemplate_r7 = ɵɵreference(1);
    ɵɵproperty("ngTemplateOutlet", tableTemplate_r7)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c2, ctx_r1.prevAnimationDate));
  }
}
var _c4 = (a0, a1, a2) => ({
  title: a0,
  activeView: a1,
  date: a2
});
var _c5 = (a0) => ({
  click: a0
});
var _c6 = (a0, a1, a2) => ({
  $implicit: a0,
  activeView: a1,
  date: a2
});
function HeaderComponent_Conditional_0_ng_template_0_Template(rf, ctx) {
}
function HeaderComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, HeaderComponent_Conditional_0_ng_template_0_Template, 0, 0, "ng-template", 0);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.headerTemplateRef)("ngTemplateOutletContext", ɵɵpureFunction3(2, _c4, ctx_r0.title, ctx_r0.activeViewValue, ctx_r0.currentDate));
  }
}
function HeaderComponent_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵtextInterpolate1(" ", ctx_r0.title, " ");
  }
}
function HeaderComponent_Conditional_1_Conditional_2_ng_template_0_Template(rf, ctx) {
}
function HeaderComponent_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, HeaderComponent_Conditional_1_Conditional_2_ng_template_0_Template, 0, 0, "ng-template", 0);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.titleTemplateRef)("ngTemplateOutletContext", ɵɵpureFunction3(2, _c6, ctx_r0.title, ctx_r0.activeViewValue, ctx_r0.currentDate));
  }
}
function HeaderComponent_Conditional_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 7);
    ɵɵlistener("click", function HeaderComponent_Conditional_1_Conditional_5_Template_button_click_0_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.prevButtonClick.emit());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("size", ctx_r0.size)("svgIcon", ctx_r0.chevronLeftIcon)("disabled", ctx_r0.isPrevDisabled)("title", ctx_r0.prevButtonTitle);
    ɵɵattribute("aria-disabled", ctx_r0.isPrevDisabled);
  }
}
function HeaderComponent_Conditional_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 8);
    ɵɵlistener("click", function HeaderComponent_Conditional_1_Conditional_8_Template_button_click_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.nextButtonClick.emit());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("size", ctx_r0.size)("svgIcon", ctx_r0.chevronRightIcon)("disabled", ctx_r0.isNextDisabled)("title", ctx_r0.nextButtonTitle);
    ɵɵattribute("aria-disabled", ctx_r0.isNextDisabled);
  }
}
function HeaderComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "button", 1);
    ɵɵtemplate(1, HeaderComponent_Conditional_1_Conditional_1_Template, 1, 1)(2, HeaderComponent_Conditional_1_Conditional_2_Template, 1, 6, null, 0);
    ɵɵelementEnd();
    ɵɵelement(3, "span", 2);
    ɵɵelementStart(4, "span", 3);
    ɵɵtemplate(5, HeaderComponent_Conditional_1_Conditional_5_Template, 1, 5, "button", 4);
    ɵɵelementStart(6, "button", 5);
    ɵɵtext(7);
    ɵɵelementEnd();
    ɵɵtemplate(8, HeaderComponent_Conditional_1_Conditional_8_Template, 1, 5, "button", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("id", ctx_r0.id)("size", ctx_r0.size)("disabled", !ctx_r0.navigate)("kendoEventsOutsideAngular", ɵɵpureFunction1(15, _c5, ctx_r0.handleNavigation))("title", ctx_r0.parentViewButtonTitle)("scope", ctx_r0);
    ɵɵadvance();
    ɵɵconditional(!ctx_r0.titleTemplateRef ? 1 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r0.titleTemplateRef ? 2 : -1);
    ɵɵadvance(3);
    ɵɵconditional(ctx_r0.showNavigationButtons ? 5 : -1);
    ɵɵadvance();
    ɵɵproperty("size", ctx_r0.size)("disabled", !ctx_r0.todayAvailable)("kendoEventsOutsideAngular", ɵɵpureFunction1(17, _c5, ctx_r0.handleTodayClick))("scope", ctx_r0);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.todayMessage, " ");
    ɵɵadvance();
    ɵɵconditional(ctx_r0.showNavigationButtons ? 8 : -1);
  }
}
var _c7 = (a0, a1) => ({
  activeView: a0,
  date: a1
});
function FooterComponent_Conditional_0_ng_template_0_Template(rf, ctx) {
}
function FooterComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, FooterComponent_Conditional_0_ng_template_0_Template, 0, 0, "ng-template", 0);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.footerTemplateRef)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c7, ctx_r0.activeViewValue, ctx_r0.currentDate));
  }
}
function FooterComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "button", 1);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.intl.formatDate(ctx_r0.getToday(), "D"), " ");
  }
}
function MultiViewCalendarComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "kendo-calendar-header", 4);
    ɵɵlistener("todayButtonClick", function MultiViewCalendarComponent_Conditional_1_Template_kendo_calendar_header_todayButtonClick_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.handleTodayButtonClick({
        selectedDates: [$event],
        focusedDate: $event
      }));
    })("prevButtonClick", function MultiViewCalendarComponent_Conditional_1_Template_kendo_calendar_header_prevButtonClick_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.navigateView(ctx_r1.prevView));
    })("nextButtonClick", function MultiViewCalendarComponent_Conditional_1_Template_kendo_calendar_header_nextButtonClick_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.navigateView(ctx_r1.nextView));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("activeView", ctx_r1.activeViewEnum)("currentDate", ctx_r1.activeDate)("size", ctx_r1.size)("min", ctx_r1.min)("max", ctx_r1.max)("id", ctx_r1.headerId)("rangeLength", ctx_r1.views)("titleTemplateRef", ctx_r1.headerTitleTemplateRef == null ? null : ctx_r1.headerTitleTemplateRef.templateRef)("headerTemplateRef", ctx_r1.headerTemplateRef == null ? null : ctx_r1.headerTemplateRef.templateRef)("isPrevDisabled", ctx_r1.isPrevDisabled)("isNextDisabled", ctx_r1.isNextDisabled)("showNavigationButtons", true)("orientation", ctx_r1.orientation);
  }
}
function MultiViewCalendarComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-calendar-footer", 3);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("footerTemplateRef", ctx_r1.footerTemplateRef == null ? null : ctx_r1.footerTemplateRef.templateRef)("activeViewValue", ctx_r1.activeView)("currentDate", ctx_r1.activeDate);
  }
}
var _c8 = ["*"];
var _c9 = ["list"];
function NavigationComponent_li_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const date_r2 = ɵɵnextContext().$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵtextInterpolate1(" ", ctx_r2.service.navigationTitle(date_r2), " ");
  }
}
function NavigationComponent_li_4_Conditional_3_ng_template_0_Template(rf, ctx) {
}
function NavigationComponent_li_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NavigationComponent_li_4_Conditional_3_ng_template_0_Template, 0, 0, "ng-template", 5);
  }
  if (rf & 2) {
    const date_r2 = ɵɵnextContext().$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.templateRef)("ngTemplateOutletContext", ɵɵpureFunction3(2, _c6, ctx_r2.service.navigationTitle(date_r2), ctx_r2.activeViewValue, date_r2));
  }
}
function NavigationComponent_li_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li")(1, "span");
    ɵɵtemplate(2, NavigationComponent_li_4_Conditional_2_Template, 1, 1)(3, NavigationComponent_li_4_Conditional_3_Template, 1, 6, null, 5);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const date_r2 = ctx.$implicit;
    const index_r4 = ctx.index;
    const ctx_r2 = ɵɵnextContext();
    ɵɵattribute("data-date-index", index_r4);
    ɵɵadvance();
    ɵɵclassProp("k-calendar-navigation-marker", ctx_r2.service.isRangeStart(date_r2));
    ɵɵadvance();
    ɵɵconditional(!ctx_r2.templateRef ? 2 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r2.templateRef ? 3 : -1);
  }
}
function ViewListComponent_Conditional_1_For_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "th", 10);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const name_r2 = ctx.$implicit;
    const ɵ$index_10_r3 = ctx.$index;
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵattribute("aria-label", ctx_r3.wideWeekNames[ɵ$index_10_r3]);
    ɵɵadvance();
    ɵɵtextInterpolate(name_r2);
  }
}
function ViewListComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "table", 7)(1, "thead", 8)(2, "tr", 9);
    ɵɵrepeaterCreate(3, ViewListComponent_Conditional_1_For_4_Template, 2, 2, "th", 10, ɵɵrepeaterTrackByIndex);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵstyleProp("table-layout", "auto");
    ɵɵadvance(3);
    ɵɵrepeater(ctx_r3.weekNames);
  }
}
function ViewListComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "col");
  }
}
function ViewListComponent_tbody_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tbody", 11);
    ɵɵlistener("cellClick", function ViewListComponent_tbody_8_Template_tbody_cellClick_0_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.cellClick.emit($event));
    })("weekNumberCellClick", function ViewListComponent_tbody_8_Template_tbody_weekNumberCellClick_0_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.weekNumberCellClick.emit($event));
    })("focusedCellId", function ViewListComponent_tbody_8_Template_tbody_focusedCellId_0_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.focusedCellChange.emit($event));
    })("cellEnter", function ViewListComponent_tbody_8_Template_tbody_cellEnter_0_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.cellEnter.emit($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const date_r6 = ctx.$implicit;
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("allowReverse", ctx_r3.allowReverse)("activeRangeEnd", ctx_r3.activeRangeEnd)("selectionRange", ctx_r3.selectionRange)("showOtherMonthDays", ctx_r3.showOtherMonthDays)("headerTitle", ctx_r3.headerTitle)("activeView", ctx_r3.activeView)("isActive", ctx_r3.isActive)("min", ctx_r3.min)("max", ctx_r3.max)("cellUID", ctx_r3.cellUID)("focusedDate", ctx_r3.focusedDate)("selectedDates", ctx_r3.selectedDates)("weekNumber", ctx_r3.weekNumber)("templateRef", ctx_r3.cellTemplateRef)("weekNumberTemplateRef", ctx_r3.weekNumberTemplateRef)("viewDate", date_r6);
  }
}
function ViewListComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-calendar-footer", 6);
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("footerTemplateRef", ctx_r3.footerTemplateRef)("activeViewValue", ctx_r3.activeViewValue)("currentDate", ctx_r3.activeDate);
  }
}
function CalendarComponent_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "kendo-calendar-navigation", 6);
    ɵɵlistener("valueChange", function CalendarComponent_Conditional_1_Conditional_0_Template_kendo_calendar_navigation_valueChange_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.handleNavigation($event));
    })("pageChange", function CalendarComponent_Conditional_1_Conditional_0_Template_kendo_calendar_navigation_pageChange_0_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.onPageChange());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("activeView", ctx_r2.activeViewEnum)("focusedDate", ctx_r2.focusedDate)("min", ctx_r2.min)("max", ctx_r2.max)("templateRef", ctx_r2.navigationItemTemplateRef == null ? null : ctx_r2.navigationItemTemplateRef.templateRef);
  }
}
function CalendarComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵtemplate(0, CalendarComponent_Conditional_1_Conditional_0_Template, 1, 5, "kendo-calendar-navigation", 3);
    ɵɵelementStart(1, "kendo-calendar-viewlist", 4);
    ɵɵlistener("todayButtonClick", function CalendarComponent_Conditional_1_Template_kendo_calendar_viewlist_todayButtonClick_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.handleDateChange({
        selectedDates: [$event],
        focusedDate: $event
      }));
    })("cellClick", function CalendarComponent_Conditional_1_Template_kendo_calendar_viewlist_cellClick_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.handleCellClick($event));
    })("weekNumberCellClick", function CalendarComponent_Conditional_1_Template_kendo_calendar_viewlist_weekNumberCellClick_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.handleWeekNumberClick($event));
    })("activeDateChange", function CalendarComponent_Conditional_1_Template_kendo_calendar_viewlist_activeDateChange_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.handleActiveDateChange($event));
    })("pageChange", function CalendarComponent_Conditional_1_Template_kendo_calendar_viewlist_pageChange_1_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onPageChange());
    })("focusCalendar", function CalendarComponent_Conditional_1_Template_kendo_calendar_viewlist_focusCalendar_1_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.handleFocus());
    })("blurCalendar", function CalendarComponent_Conditional_1_Template_kendo_calendar_viewlist_blurCalendar_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.handleBlur($event));
    })("cellEnter", function CalendarComponent_Conditional_1_Template_kendo_calendar_viewlist_cellEnter_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onCellEnter($event));
    });
    ɵɵelementEnd();
    ɵɵelementStart(2, "kendo-resize-sensor", 5);
    ɵɵlistener("resize", function CalendarComponent_Conditional_1_Template_kendo_resize_sensor_resize_2_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onResize());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_11_0;
    const ctx_r2 = ɵɵnextContext();
    ɵɵconditional(ctx_r2.navigation ? 0 : -1);
    ɵɵadvance();
    ɵɵproperty("activeView", ctx_r2.activeViewEnum)("allowReverse", ctx_r2.allowReverse)("showOtherMonthDays", ctx_r2.showOtherMonthDays)("activeRangeEnd", ctx_r2.activeRangeEnd)("selectionRange", ctx_r2.selectionRange)("size", ctx_r2.size)("isActive", ctx_r2.isActive)("id", ctx_r2.headerId)("weekDaysFormat", ctx_r2.weekDaysFormat)("cellTemplateRef", (tmp_11_0 = ctx_r2.activeCellTemplate()) == null ? null : tmp_11_0.templateRef)("headerTitleTemplateRef", ctx_r2.headerTitleTemplateRef == null ? null : ctx_r2.headerTitleTemplateRef.templateRef)("headerTemplateRef", ctx_r2.headerTemplateRef == null ? null : ctx_r2.headerTemplateRef.templateRef)("showFooter", ctx_r2.footer)("footerTemplateRef", ctx_r2.footerTemplateRef == null ? null : ctx_r2.footerTemplateRef.templateRef)("weekNumberTemplateRef", ctx_r2.weekNumberTemplateRef == null ? null : ctx_r2.weekNumberTemplateRef.templateRef)("cellUID", ctx_r2.cellUID)("min", ctx_r2.min)("max", ctx_r2.max)("focusedDate", ctx_r2.focusedDate)("weekNumber", ctx_r2.weekNumber)("selectedDates", ctx_r2.selectedDates)("tabIndex", ctx_r2.tabIndex)("disabled", ctx_r2.disabled);
  }
}
function CalendarComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "kendo-multiviewcalendar", 7, 0);
    ɵɵlistener("onClosePopup", function CalendarComponent_Conditional_2_Template_kendo_multiviewcalendar_onClosePopup_0_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.closePopup.emit());
    })("activeViewChange", function CalendarComponent_Conditional_2_Template_kendo_multiviewcalendar_activeViewChange_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.handleActiveViewChange($event));
    })("navigate", function CalendarComponent_Conditional_2_Template_kendo_multiviewcalendar_navigate_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.handleNavigate($event));
    })("valueChange", function CalendarComponent_Conditional_2_Template_kendo_multiviewcalendar_valueChange_0_listener($event) {
      ɵɵrestoreView(_r4);
      const multiviewcalendar_r5 = ɵɵreference(1);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.handleMultiViewCalendarValueChange($event, multiviewcalendar_r5.focusedDate));
    })("focusCalendar", function CalendarComponent_Conditional_2_Template_kendo_multiviewcalendar_focusCalendar_0_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.handleFocus());
    })("blur", function CalendarComponent_Conditional_2_Template_kendo_multiviewcalendar_blur_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.handleBlur($event));
    })("blurEvent", function CalendarComponent_Conditional_2_Template_kendo_multiviewcalendar_blurEvent_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.handleBlur($event));
    })("keydown", function CalendarComponent_Conditional_2_Template_kendo_multiviewcalendar_keydown_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.handleMultiViewCalendarKeydown($event));
    });
    ɵɵelement(2, "kendo-multiviewcalendar-messages", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("views", 1)("min", ctx_r2.min)("max", ctx_r2.max)("size", ctx_r2.size)("id", ctx_r2.id)("activeRangeEnd", ctx_r2.activeRangeEnd)("selectionRange", ctx_r2.selectionRange)("allowReverse", ctx_r2.allowReverse)("disabled", ctx_r2.disabled)("isActive", ctx_r2.isActive)("showOtherMonthDays", ctx_r2.showOtherMonthDays)("tabIndex", ctx_r2.tabIndex)("activeView", ctx_r2.activeView)("bottomView", ctx_r2.bottomView)("topView", ctx_r2.topView)("weekDaysFormat", ctx_r2.weekDaysFormat)("weekNumber", ctx_r2.weekNumber)("animateNavigation", ctx_r2.animateNavigation)("cellTemplate", ctx_r2.activeCellTemplate())("monthCellTemplate", ctx_r2.monthCellTemplateRef)("yearCellTemplate", ctx_r2.yearCellTemplateRef)("decadeCellTemplate", ctx_r2.decadeCellTemplateRef)("centuryCellTemplate", ctx_r2.centuryCellTemplateRef)("headerTitleTemplate", ctx_r2.headerTitleTemplateRef)("headerTemplate", ctx_r2.headerTemplateRef)("footerTemplate", ctx_r2.footerTemplateRef)("footer", ctx_r2.footer)("weekNumberTemplate", ctx_r2.weekNumberTemplateRef)("focusedDate", ctx_r2.focusedDate)("selection", ctx_r2.selection)("value", ctx_r2.value)("disabledDates", ctx_r2.disabledDates);
    ɵɵadvance(2);
    ɵɵproperty("today", ctx_r2.localization.get("today"))("prevButtonTitle", ctx_r2.localization.get("prevButtonTitle"))("nextButtonTitle", ctx_r2.localization.get("nextButtonTitle"))("parentViewButtonTitle", ctx_r2.localization.get("parentViewButtonTitle"));
  }
}
var _c10 = ["dateInput"];
var _c11 = ["spinup"];
var _c12 = ["spindown"];
var _c13 = (a0, a1) => ({
  dragstart: a0,
  drop: a1
});
function DateInputComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 7);
    ɵɵlistener("click", function DateInputComponent_Conditional_3_Template_span_click_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.resetInput());
    })("mousedown", function DateInputComponent_Conditional_3_Template_span_mousedown_0_listener($event) {
      ɵɵrestoreView(_r1);
      return ɵɵresetView($event.preventDefault());
    });
    ɵɵelement(1, "kendo-icon-wrapper", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵattribute("title", ctx_r1.localization.get("clearTitle"));
    ɵɵadvance();
    ɵɵproperty("svgIcon", ctx_r1.xIcon);
  }
}
function DateInputComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 9);
    ɵɵlistener("mousedown", function DateInputComponent_Conditional_4_Template_span_mousedown_0_listener($event) {
      ɵɵrestoreView(_r3);
      return ɵɵresetView($event.preventDefault());
    });
    ɵɵelementStart(1, "button", 10, 1);
    ɵɵlistener("mousedown", function DateInputComponent_Conditional_4_Template_button_mousedown_1_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.arrowDirection = ctx_r1.arrow.Up);
    })("mouseleave", function DateInputComponent_Conditional_4_Template_button_mouseleave_1_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.arrowDirection = ctx_r1.arrow.None);
    })("click", function DateInputComponent_Conditional_4_Template_button_click_1_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.handleButtonClick(1));
    });
    ɵɵelement(3, "kendo-icon-wrapper", 11);
    ɵɵelementEnd();
    ɵɵelementStart(4, "button", 12, 2);
    ɵɵlistener("click", function DateInputComponent_Conditional_4_Template_button_click_4_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.handleButtonClick(-1));
    })("mousedown", function DateInputComponent_Conditional_4_Template_button_mousedown_4_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.arrowDirection = ctx_r1.arrow.Down);
    })("mouseleave", function DateInputComponent_Conditional_4_Template_button_mouseleave_4_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.arrowDirection = ctx_r1.arrow.None);
    });
    ɵɵelement(6, "kendo-icon-wrapper", 13);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵclassProp("k-active", ctx_r1.arrowDirection === ctx_r1.arrow.Up);
    ɵɵproperty("title", ctx_r1.localization.get("increment"));
    ɵɵattribute("aria-label", ctx_r1.localization.get("increment"));
    ɵɵadvance(2);
    ɵɵproperty("svgIcon", ctx_r1.caretAltUpIcon);
    ɵɵadvance();
    ɵɵclassProp("k-active", ctx_r1.arrowDirection === ctx_r1.arrow.Down);
    ɵɵproperty("title", ctx_r1.localization.get("decrement"));
    ɵɵattribute("aria-label", ctx_r1.localization.get("decrement"));
    ɵɵadvance(2);
    ɵɵproperty("svgIcon", ctx_r1.caretAltDownIcon);
  }
}
var _c14 = ["container"];
var _c15 = ["popupTemplate"];
var _c16 = ["toggleButton"];
var _c17 = ["actionSheet"];
var _c18 = (a0, a1) => ({
  click: a0,
  mousedown: a1
});
var _c19 = (a0, a1) => ({
  "k-adaptive-actionsheet": true,
  "k-actionsheet-fullscreen": a0,
  "k-actionsheet-bottom": a1
});
var _c20 = (a0) => ({
  height: a0
});
var _c21 = (a0) => ({
  keydown: a0
});
function DatePickerComponent_ng_template_9_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function DatePickerComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, DatePickerComponent_ng_template_9_ng_container_0_Template, 1, 0, "ng-container", 14);
  }
  if (rf & 2) {
    ɵɵnextContext();
    const calendarTemplate_r2 = ɵɵreference(16);
    ɵɵproperty("ngTemplateOutlet", calendarTemplate_r2);
  }
}
function DatePickerComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "kendo-resize-sensor", 15);
    ɵɵlistener("resize", function DatePickerComponent_Conditional_11_Template_kendo_resize_sensor_resize_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.onResize());
    });
    ɵɵelementEnd();
  }
}
function DatePickerComponent_ng_template_14_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 19);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r3.adaptiveTitle);
  }
}
function DatePickerComponent_ng_template_14_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 20);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r3.adaptiveSubtitle);
  }
}
function DatePickerComponent_ng_template_14_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function DatePickerComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 16)(1, "div", 17)(2, "div", 18);
    ɵɵtemplate(3, DatePickerComponent_ng_template_14_Conditional_3_Template, 2, 1, "div", 19)(4, DatePickerComponent_ng_template_14_Conditional_4_Template, 2, 1, "div", 20);
    ɵɵelementEnd();
    ɵɵelementStart(5, "div", 21)(6, "button", 22);
    ɵɵlistener("click", function DatePickerComponent_ng_template_14_Template_button_click_6_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.show = false);
    });
    ɵɵelementEnd()()()();
    ɵɵelementStart(7, "div", 23);
    ɵɵtemplate(8, DatePickerComponent_ng_template_14_ng_container_8_Template, 1, 0, "ng-container", 14);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    const calendarTemplate_r2 = ɵɵreference(16);
    ɵɵadvance(3);
    ɵɵconditional(ctx_r3.adaptiveTitle ? 3 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r3.adaptiveSubtitle ? 4 : -1);
    ɵɵadvance(2);
    ɵɵproperty("svgIcon", ctx_r3.checkIcon)("tabIndex", -1);
    ɵɵattribute("title", ctx_r3.localization.get("adaptiveCloseButtonTitle"));
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", calendarTemplate_r2);
  }
}
function DatePickerComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "kendo-calendar", 24, 6);
    ɵɵlistener("closePopup", function DatePickerComponent_ng_template_15_Template_kendo_calendar_closePopup_0_listener() {
      ɵɵrestoreView(_r6);
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.show = false);
    })("valueChange", function DatePickerComponent_ng_template_15_Template_kendo_calendar_valueChange_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.handleChange(ctx_r3.mergeTime($event)));
    });
    ɵɵelement(2, "kendo-calendar-messages", 25);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("type", ctx_r3.calendarType)("size", ctx_r3.isAdaptive ? "large" : ctx_r3.size)("min", ctx_r3.min)("max", ctx_r3.max)("weekDaysFormat", ctx_r3.weekDaysFormat)("navigation", ctx_r3.navigation)("animateNavigation", ctx_r3.animateCalendarNavigation)("activeView", ctx_r3.activeView)("bottomView", ctx_r3.bottomView)("showOtherMonthDays", ctx_r3.showOtherMonthDays)("topView", ctx_r3.topView)("weekNumber", ctx_r3.weekNumber)("cellTemplate", ctx_r3.cellTemplate)("monthCellTemplate", ctx_r3.monthCellTemplate)("yearCellTemplate", ctx_r3.yearCellTemplate)("decadeCellTemplate", ctx_r3.decadeCellTemplate)("centuryCellTemplate", ctx_r3.centuryCellTemplate)("weekNumberTemplate", ctx_r3.weekNumberTemplate)("headerTitleTemplate", ctx_r3.headerTitleTemplate)("headerTemplate", ctx_r3.headerTemplate)("footerTemplate", ctx_r3.footerTemplate)("footer", ctx_r3.footer)("navigationItemTemplate", ctx_r3.navigationItemTemplate)("focusedDate", ctx_r3.focusedDate)("value", ctx_r3.value)("kendoEventsOutsideAngular", ɵɵpureFunction1(32, _c21, ctx_r3.handleKeydown))("scope", ctx_r3)("disabledDates", ctx_r3.disabledDates);
    ɵɵadvance(2);
    ɵɵproperty("today", ctx_r3.localization.get("today"))("prevButtonTitle", ctx_r3.localization.get("prevButtonTitle"))("nextButtonTitle", ctx_r3.localization.get("nextButtonTitle"))("parentViewButtonTitle", ctx_r3.localization.get("parentViewButtonTitle"));
  }
}
function TimeListComponent_For_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 2)(1, "span");
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ɵ$index_5_r2 = ctx.$index;
    const ctx_r2 = ɵɵnextContext();
    ɵɵattribute("data-timelist-item-index", ɵ$index_5_r2)("role", "option")("aria-selected", ɵ$index_5_r2 === ctx_r2.currentSelectedIndex);
    ɵɵadvance(2);
    ɵɵtextInterpolate(item_r1.text);
  }
}
var _c22 = ["accept"];
var _c23 = ["cancel"];
var _c24 = ["now"];
var _c25 = ["listWrapper"];
var _c26 = (a0, a1, a2, a3) => ({
  click: a0,
  focus: a1,
  blur: a2,
  keydown: a3
});
var _c27 = (a0, a1) => ({
  focus: a0,
  blur: a1
});
function TimeSelectorComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "button", 7, 0);
    ɵɵtext(2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("kendoEventsOutsideAngular", ɵɵpureFunction4(6, _c26, ctx_r0.handleNow, ctx_r0.handleFocus, ctx_r0.handleBlur, ctx_r0.handleTabOut))("scope", ctx_r0)("disabled", ctx_r0.disabled);
    ɵɵattribute("title", ctx_r0.localization.get("nowLabel"))("aria-label", ctx_r0.localization.get("nowLabel"));
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r0.localization.get("now"));
  }
}
function TimeSelectorComponent_For_8_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 11, 1)(2, "span", 6);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementStart(4, "kendo-timelist", 13);
    ɵɵtwoWayListener("valueChange", function TimeSelectorComponent_For_8_Conditional_0_Template_kendo_timelist_valueChange_4_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext(2);
      ɵɵtwoWayBindingSet(ctx_r0.current, $event) || (ctx_r0.current = $event);
      return ɵɵresetView($event);
    });
    ɵɵlistener("tabOutLastPart", function TimeSelectorComponent_For_8_Conditional_0_Template_kendo_timelist_tabOutLastPart_4_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.tabOutLastPart.emit());
    })("tabOutFirstPart", function TimeSelectorComponent_For_8_Conditional_0_Template_kendo_timelist_tabOutFirstPart_4_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.tabOutFirstPart.emit());
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    const part_r4 = ctx_r2.$implicit;
    const ɵ$index_16_r5 = ctx_r2.$index;
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵtextInterpolate(ctx_r0.intl.dateFieldName(part_r4));
    ɵɵadvance();
    ɵɵproperty("isLast", ɵ$index_16_r5 === ctx_r0.dateFormatParts.length - 1)("isFirst", ɵ$index_16_r5 === 0)("min", ctx_r0.min)("max", ctx_r0.max)("part", part_r4)("step", ctx_r0.partStep(part_r4))("disabled", ctx_r0.disabled);
    ɵɵtwoWayProperty("value", ctx_r0.current);
    ɵɵproperty("kendoEventsOutsideAngular", ɵɵpureFunction2(12, _c27, ctx_r0.handleListFocus, ctx_r0.handleBlur))("scope", ctx_r0);
    ɵɵattribute("data-timelist-index", ɵ$index_16_r5);
  }
}
function TimeSelectorComponent_For_8_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 12);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const part_r4 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", part_r4.pattern, " ");
  }
}
function TimeSelectorComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TimeSelectorComponent_For_8_Conditional_0_Template, 5, 15, "div", 11)(1, TimeSelectorComponent_For_8_Conditional_1_Template, 2, 1, "div", 12);
  }
  if (rf & 2) {
    const part_r4 = ctx.$implicit;
    ɵɵconditional(part_r4.type !== "literal" ? 0 : -1);
    ɵɵadvance();
    ɵɵconditional(part_r4.type === "literal" ? 1 : -1);
  }
}
function TimeSelectorComponent_Conditional_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "button", 14, 2);
    ɵɵtext(2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("kendoEventsOutsideAngular", ɵɵpureFunction4(6, _c26, ctx_r0.handleAccept, ctx_r0.handleFocus, ctx_r0.handleBlur, ctx_r0.handleTabOut))("scope", ctx_r0)("disabled", ctx_r0.disabled);
    ɵɵattribute("title", ctx_r0.localization.get("acceptLabel"))("aria-label", ctx_r0.localization.get("acceptLabel"));
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r0.localization.get("accept"));
  }
}
function TimeSelectorComponent_Conditional_9_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "button", 15, 3);
    ɵɵtext(2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("kendoEventsOutsideAngular", ɵɵpureFunction4(6, _c26, ctx_r0.handleReject, ctx_r0.handleFocus, ctx_r0.handleBlur, ctx_r0.handleTabOut))("scope", ctx_r0)("disabled", ctx_r0.disabled);
    ɵɵattribute("title", ctx_r0.localization.get("cancelLabel"))("aria-label", ctx_r0.localization.get("cancelLabel"));
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r0.localization.get("cancel"));
  }
}
function TimeSelectorComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 10);
    ɵɵtemplate(1, TimeSelectorComponent_Conditional_9_Conditional_1_Template, 3, 11, "button", 14)(2, TimeSelectorComponent_Conditional_9_Conditional_2_Template, 3, 11, "button", 15);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵconditional(ctx_r0.setButton ? 1 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r0.cancelButton ? 2 : -1);
  }
}
var _c28 = (a0, a1) => ({
  keydown: a0,
  mousedown: a1
});
function TimePickerComponent_ng_template_7_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TimePickerComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TimePickerComponent_ng_template_7_ng_container_0_Template, 1, 0, "ng-container", 14);
  }
  if (rf & 2) {
    ɵɵnextContext();
    const timeSelectorTemplate_r2 = ɵɵreference(16);
    ɵɵproperty("ngTemplateOutlet", timeSelectorTemplate_r2);
  }
}
function TimePickerComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "kendo-resize-sensor", 15);
    ɵɵlistener("resize", function TimePickerComponent_Conditional_11_Template_kendo_resize_sensor_resize_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.onResize());
    });
    ɵɵelementEnd();
  }
}
function TimePickerComponent_ng_template_14_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 19);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r3.adaptiveTitle);
  }
}
function TimePickerComponent_ng_template_14_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 20);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r3.adaptiveSubtitle);
  }
}
function TimePickerComponent_ng_template_14_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TimePickerComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 16)(1, "div", 17)(2, "div", 18);
    ɵɵtemplate(3, TimePickerComponent_ng_template_14_Conditional_3_Template, 2, 1, "div", 19)(4, TimePickerComponent_ng_template_14_Conditional_4_Template, 2, 1, "div", 20);
    ɵɵelementEnd();
    ɵɵelementStart(5, "div", 21)(6, "button", 22);
    ɵɵlistener("click", function TimePickerComponent_ng_template_14_Template_button_click_6_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.show = false);
    });
    ɵɵelementEnd()()()();
    ɵɵelementStart(7, "div", 23);
    ɵɵtemplate(8, TimePickerComponent_ng_template_14_ng_container_8_Template, 1, 0, "ng-container", 14);
    ɵɵelementEnd();
    ɵɵelementStart(9, "div", 24)(10, "button", 25);
    ɵɵlistener("click", function TimePickerComponent_ng_template_14_Template_button_click_10_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.handleReject());
    });
    ɵɵtext(11);
    ɵɵelementEnd();
    ɵɵelementStart(12, "button", 26);
    ɵɵlistener("click", function TimePickerComponent_ng_template_14_Template_button_click_12_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.handleActionSheetAccept());
    });
    ɵɵtext(13);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    const timeSelectorTemplate_r2 = ɵɵreference(16);
    ɵɵadvance(3);
    ɵɵconditional(ctx_r3.adaptiveTitle ? 3 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r3.adaptiveSubtitle ? 4 : -1);
    ɵɵadvance(2);
    ɵɵproperty("svgIcon", ctx_r3.checkIcon)("tabIndex", -1);
    ɵɵattribute("title", ctx_r3.localization.get("adaptiveCloseButtonTitle"));
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", timeSelectorTemplate_r2);
    ɵɵadvance(2);
    ɵɵattribute("title", ctx_r3.localization.get("cancelLabel"))("aria-label", ctx_r3.localization.get("cancelLabel"));
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r3.localization.get("cancel"), " ");
    ɵɵadvance();
    ɵɵattribute("title", ctx_r3.localization.get("acceptLabel"))("aria-label", ctx_r3.localization.get("acceptLabel"));
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r3.localization.get("accept"), " ");
  }
}
function TimePickerComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "kendo-timeselector", 27, 6);
    ɵɵlistener("valueChange", function TimePickerComponent_ng_template_15_Template_kendo_timeselector_valueChange_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.handleChange($event));
    })("valueReject", function TimePickerComponent_ng_template_15_Template_kendo_timeselector_valueReject_0_listener() {
      ɵɵrestoreView(_r6);
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.handleReject());
    })("tabOutLastPart", function TimePickerComponent_ng_template_15_Template_kendo_timeselector_tabOutLastPart_0_listener() {
      ɵɵrestoreView(_r6);
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.onTabOutLastPart());
    })("tabOutFirstPart", function TimePickerComponent_ng_template_15_Template_kendo_timeselector_tabOutFirstPart_0_listener() {
      ɵɵrestoreView(_r6);
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.onTabOutFirstPart());
    })("tabOutNow", function TimePickerComponent_ng_template_15_Template_kendo_timeselector_tabOutNow_0_listener() {
      ɵɵrestoreView(_r6);
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.onTabOutNow());
    });
    ɵɵelement(2, "kendo-timeselector-messages", 28);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵclassProp("k-timeselector-lg", ctx_r3.isAdaptive);
    ɵɵproperty("cancelButton", ctx_r3.cancelButton && !ctx_r3.isAdaptive)("setButton", !ctx_r3.isAdaptive)("nowButton", ctx_r3.nowButton)("format", ctx_r3.format)("min", ctx_r3.min)("max", ctx_r3.max)("steps", ctx_r3.steps)("value", ctx_r3.value)("isAdaptiveEnabled", ctx_r3.isAdaptiveModeEnabled)("kendoEventsOutsideAngular", ɵɵpureFunction2(24, _c28, ctx_r3.handleKeydown, ctx_r3.handleMousedown))("scope", ctx_r3);
    ɵɵadvance(2);
    ɵɵproperty("acceptLabel", ctx_r3.localization.get("acceptLabel"))("accept", ctx_r3.localization.get("accept"))("cancelLabel", ctx_r3.localization.get("cancelLabel"))("cancel", ctx_r3.localization.get("cancel"))("nowLabel", ctx_r3.localization.get("nowLabel"))("now", ctx_r3.localization.get("now"))("hour", ctx_r3.localization.get("hour"))("minute", ctx_r3.localization.get("minute"))("second", ctx_r3.localization.get("second"))("millisecond", ctx_r3.localization.get("millisecond"))("dayperiod", ctx_r3.localization.get("dayperiod"));
  }
}
var _c29 = (a0, a1) => ({
  mousedown: a0,
  click: a1
});
var _c30 = (a0, a1) => ({
  "k-datetime-wrap-md": a0,
  "k-datetime-wrap-lg": a1
});
var _c31 = (a0, a1) => ({
  mousedown: a0,
  keydown: a1
});
var _c32 = (a0, a1) => ({
  focusin: a0,
  focusout: a1
});
var _c33 = (a0, a1) => ({
  click: a0,
  "keydown.shift.tab": a1
});
var _c34 = (a0, a1) => ({
  click: a0,
  "keydown.tab": a1
});
var _c35 = (a0) => ({
  transitionend: a0
});
var _c36 = (a0) => ({
  "k-timeselector-lg": a0
});
var _c37 = (a0, a1, a2) => ({
  click: a0,
  "keydown.tab": a1,
  "keydown.shift.tab": a2
});
function DateTimePickerComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 11);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("svgIcon", ctx_r1.calendarIcon);
  }
}
function DateTimePickerComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 12);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("svgIcon", ctx_r1.clockIcon);
  }
}
function DateTimePickerComponent_ng_template_9_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function DateTimePickerComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, DateTimePickerComponent_ng_template_9_ng_container_0_Template, 1, 0, "ng-container", 15);
  }
  if (rf & 2) {
    ɵɵnextContext();
    const dateTimeTemplate_r3 = ɵɵreference(16);
    ɵɵproperty("ngTemplateOutlet", dateTimeTemplate_r3);
  }
}
function DateTimePickerComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "kendo-resize-sensor", 16);
    ɵɵlistener("resize", function DateTimePickerComponent_Conditional_11_Template_kendo_resize_sensor_resize_0_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onResize());
    });
    ɵɵelementEnd();
  }
}
function DateTimePickerComponent_ng_template_14_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 20);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.adaptiveTitle);
  }
}
function DateTimePickerComponent_ng_template_14_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 21);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.adaptiveSubtitle);
  }
}
function DateTimePickerComponent_ng_template_14_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function DateTimePickerComponent_ng_template_14_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 28);
    ɵɵlistener("click", function DateTimePickerComponent_ng_template_14_Conditional_10_Template_button_click_0_listener() {
      ɵɵrestoreView(_r6);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.handleCancel());
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵattribute("title", ctx_r1.localization.get("cancelLabel"))("aria-label", ctx_r1.localization.get("cancelLabel"));
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r1.localization.get("cancel"), " ");
  }
}
function DateTimePickerComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 17)(1, "div", 18)(2, "div", 19);
    ɵɵtemplate(3, DateTimePickerComponent_ng_template_14_Conditional_3_Template, 2, 1, "div", 20)(4, DateTimePickerComponent_ng_template_14_Conditional_4_Template, 2, 1, "div", 21);
    ɵɵelementEnd();
    ɵɵelementStart(5, "div", 22)(6, "button", 23);
    ɵɵlistener("click", function DateTimePickerComponent_ng_template_14_Template_button_click_6_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.toggleActionSheet(false));
    });
    ɵɵelementEnd()()()();
    ɵɵelementStart(7, "div", 24);
    ɵɵtemplate(8, DateTimePickerComponent_ng_template_14_ng_container_8_Template, 1, 0, "ng-container", 15);
    ɵɵelementEnd();
    ɵɵelementStart(9, "div", 25);
    ɵɵtemplate(10, DateTimePickerComponent_ng_template_14_Conditional_10_Template, 2, 3, "button", 26);
    ɵɵelementStart(11, "button", 27);
    ɵɵlistener("click", function DateTimePickerComponent_ng_template_14_Template_button_click_11_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.handleAccept());
    });
    ɵɵtext(12);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    const dateTimeTemplate_r3 = ɵɵreference(16);
    ɵɵadvance(3);
    ɵɵconditional(ctx_r1.adaptiveTitle ? 3 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.adaptiveSubtitle ? 4 : -1);
    ɵɵadvance(2);
    ɵɵproperty("svgIcon", ctx_r1.checkIcon)("tabIndex", -1);
    ɵɵattribute("title", ctx_r1.localization.get("adaptiveCloseButtonTitle"));
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", dateTimeTemplate_r3);
    ɵɵadvance(2);
    ɵɵconditional(ctx_r1.cancelButton ? 10 : -1);
    ɵɵadvance();
    ɵɵproperty("disabled", !ctx_r1.calendarValue);
    ɵɵattribute("title", ctx_r1.localization.get("acceptLabel"))("aria-label", ctx_r1.localization.get("acceptLabel"));
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r1.localization.get("accept"), " ");
  }
}
function DateTimePickerComponent_ng_template_15_Conditional_16_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "button", 43);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("kendoEventsOutsideAngular", ɵɵpureFunction3(5, _c37, ctx_r1.handleCancel, ctx_r1.handleTab, ctx_r1.handleTab))("scope", ctx_r1);
    ɵɵattribute("title", ctx_r1.localization.get("cancelLabel"))("aria-label", ctx_r1.localization.get("cancelLabel"));
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r1.localization.get("cancel"), " ");
  }
}
function DateTimePickerComponent_ng_template_15_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 41)(1, "button", 42);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵtemplate(3, DateTimePickerComponent_ng_template_15_Conditional_16_Conditional_3_Template, 2, 9, "button", 43);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("kendoEventsOutsideAngular", ɵɵpureFunction2(9, _c32, ctx_r1.handleFocus, ctx_r1.handleBlur))("scope", ctx_r1);
    ɵɵadvance();
    ɵɵproperty("disabled", !ctx_r1.calendarValue)("kendoEventsOutsideAngular", ɵɵpureFunction3(12, _c37, ctx_r1.handleAccept, ctx_r1.handleTab, ctx_r1.handleTab))("scope", ctx_r1);
    ɵɵattribute("title", ctx_r1.localization.get("acceptLabel"))("aria-label", ctx_r1.localization.get("acceptLabel"));
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r1.localization.get("accept"), " ");
    ɵɵadvance();
    ɵɵconditional(ctx_r1.cancelButton ? 3 : -1);
  }
}
function DateTimePickerComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 29)(1, "div", 30)(2, "div", 31)(3, "button", 32);
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵelementStart(5, "button", 33);
    ɵɵtext(6);
    ɵɵelementEnd()()();
    ɵɵelementStart(7, "div", 34, 5)(9, "div", 35)(10, "kendo-calendar", 36, 6);
    ɵɵtwoWayListener("valueChange", function DateTimePickerComponent_ng_template_15_Template_kendo_calendar_valueChange_10_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r1 = ɵɵnextContext();
      ɵɵtwoWayBindingSet(ctx_r1.calendarValue, $event) || (ctx_r1.calendarValue = $event);
      return ɵɵresetView($event);
    });
    ɵɵlistener("valueChange", function DateTimePickerComponent_ng_template_15_Template_kendo_calendar_valueChange_10_listener() {
      ɵɵrestoreView(_r7);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.handleCalendarValueChange());
    });
    ɵɵelement(12, "kendo-calendar-messages", 37);
    ɵɵelementEnd()();
    ɵɵelementStart(13, "div", 38)(14, "kendo-timeselector", 39);
    ɵɵlistener("tabOutLastPart", function DateTimePickerComponent_ng_template_15_Template_kendo_timeselector_tabOutLastPart_14_listener() {
      ɵɵrestoreView(_r7);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onTabOutLastPart());
    })("tabOutFirstPart", function DateTimePickerComponent_ng_template_15_Template_kendo_timeselector_tabOutFirstPart_14_listener() {
      ɵɵrestoreView(_r7);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onTabOutFirstPart());
    })("tabOutNow", function DateTimePickerComponent_ng_template_15_Template_kendo_timeselector_tabOutNow_14_listener() {
      ɵɵrestoreView(_r7);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onTabOutNow());
    });
    ɵɵelement(15, "kendo-timeselector-messages", 40);
    ɵɵelementEnd()()();
    ɵɵtemplate(16, DateTimePickerComponent_ng_template_15_Conditional_16_Template, 4, 16, "div", 41);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const dateTimeSelector_r8 = ɵɵreference(8);
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMapInterpolate1("k-datetime-wrap k-", ctx_r1.activeTab, "-tab");
    ɵɵproperty("ngClass", ɵɵpureFunction2(79, _c30, !ctx_r1.isAdaptive, ctx_r1.isAdaptive))("kendoEventsOutsideAngular", ɵɵpureFunction2(82, _c31, ctx_r1.preventMouseDown, ctx_r1.handleKeyDown))("scope", ctx_r1);
    ɵɵadvance();
    ɵɵproperty("kendoEventsOutsideAngular", ɵɵpureFunction2(85, _c32, ctx_r1.handleFocus, ctx_r1.handleBlur))("scope", ctx_r1);
    ɵɵadvance(2);
    ɵɵclassProp("k-selected", ctx_r1.activeTab === "date");
    ɵɵproperty("size", ctx_r1.isAdaptive ? "large" : ctx_r1.size)("kendoEventsOutsideAngular", ɵɵpureFunction2(88, _c33, ctx_r1.changeActiveTab.bind(ctx_r1, "date"), ctx_r1.handleTab))("scope", ctx_r1);
    ɵɵattribute("aria-pressed", ctx_r1.activeTab === "date" ? "true" : "false")("title", ctx_r1.localization.get("dateTabLabel"))("aria-label", ctx_r1.localization.get("dateTabLabel"));
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r1.localization.get("dateTab"), " ");
    ɵɵadvance();
    ɵɵclassProp("k-selected", ctx_r1.activeTab === "time");
    ɵɵproperty("size", ctx_r1.isAdaptive ? "large" : ctx_r1.size)("kendoEventsOutsideAngular", ɵɵpureFunction2(91, _c34, ctx_r1.changeActiveTab.bind(ctx_r1, "time"), ctx_r1.handleTab))("scope", ctx_r1);
    ɵɵattribute("aria-pressed", ctx_r1.activeTab === "time" ? "true" : "false")("title", ctx_r1.localization.get("timeTabLabel"))("aria-label", ctx_r1.localization.get("timeTabLabel"));
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r1.localization.get("timeTab"), " ");
    ɵɵadvance();
    ɵɵstyleProp("transition", ctx_r1.tabSwitchTransition);
    ɵɵproperty("kendoEventsOutsideAngular", ɵɵpureFunction1(94, _c35, ctx_r1.handleTabChangeTransitionEnd.bind(ctx_r1, dateTimeSelector_r8)));
    ɵɵadvance(3);
    ɵɵproperty("focusedDate", ctx_r1.focusedDate)("size", ctx_r1.isAdaptive ? "large" : ctx_r1.size);
    ɵɵtwoWayProperty("value", ctx_r1.calendarValue);
    ɵɵproperty("type", ctx_r1.calendarType)("min", ctx_r1.calendarMin)("max", ctx_r1.calendarMax)("weekDaysFormat", ctx_r1.weekDaysFormat)("weekNumber", ctx_r1.weekNumber)("navigation", false)("animateNavigation", ctx_r1.animateCalendarNavigation)("showOtherMonthDays", ctx_r1.showOtherMonthDays)("cellTemplate", ctx_r1.cellTemplate)("monthCellTemplate", ctx_r1.monthCellTemplate)("yearCellTemplate", ctx_r1.yearCellTemplate)("decadeCellTemplate", ctx_r1.decadeCellTemplate)("centuryCellTemplate", ctx_r1.centuryCellTemplate)("weekNumberTemplate", ctx_r1.weekNumberTemplate)("headerTitleTemplate", ctx_r1.headerTitleTemplate)("headerTemplate", ctx_r1.headerTemplate)("footerTemplate", ctx_r1.footerTemplate)("footer", ctx_r1.footer)("disabled", ctx_r1.disableCalendar)("disabledDates", ctx_r1.disabledDates);
    ɵɵadvance(2);
    ɵɵproperty("today", ctx_r1.localization.get("today"))("prevButtonTitle", ctx_r1.localization.get("prevButtonTitle"))("nextButtonTitle", ctx_r1.localization.get("nextButtonTitle"))("parentViewButtonTitle", ctx_r1.localization.get("parentViewButtonTitle"));
    ɵɵadvance(2);
    ɵɵproperty("ngClass", ɵɵpureFunction1(96, _c36, ctx_r1.isAdaptive))("value", ctx_r1.value)("format", ctx_r1.timeSelectorFormat)("min", ctx_r1.timeSelectorMin)("max", ctx_r1.timeSelectorMax)("setButton", false)("cancelButton", false)("steps", ctx_r1.steps)("disabled", ctx_r1.disableTimeSelector)("isAdaptiveEnabled", ctx_r1.isAdaptiveModeEnabled)("isDateTimePicker", true);
    ɵɵadvance();
    ɵɵproperty("acceptLabel", ctx_r1.localization.get("acceptLabel"))("accept", ctx_r1.localization.get("accept"))("cancelLabel", ctx_r1.localization.get("cancelLabel"))("cancel", ctx_r1.localization.get("cancel"))("nowLabel", ctx_r1.localization.get("nowLabel"))("now", ctx_r1.localization.get("now"))("hour", ctx_r1.localization.get("hour"))("minute", ctx_r1.localization.get("minute"))("second", ctx_r1.localization.get("second"))("millisecond", ctx_r1.localization.get("millisecond"))("dayperiod", ctx_r1.localization.get("dayperiod"));
    ɵɵadvance();
    ɵɵconditional(!ctx_r1.isAdaptive ? 16 : -1);
  }
}
var _c38 = ["defaultTemplate"];
function DateRangePopupComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "kendo-multiviewcalendar", 6);
    ɵɵlistener("onClosePopup", function DateRangePopupComponent_ng_template_3_Template_kendo_multiviewcalendar_onClosePopup_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.closePopup($event));
    })("onTabPress", function DateRangePopupComponent_ng_template_3_Template_kendo_multiviewcalendar_onTabPress_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.handleTab($event));
    })("onShiftTabPress", function DateRangePopupComponent_ng_template_3_Template_kendo_multiviewcalendar_onShiftTabPress_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.handleShiftTab($event));
    })("rangeSelectionChange", function DateRangePopupComponent_ng_template_3_Template_kendo_multiviewcalendar_rangeSelectionChange_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onRangeSelectionChange($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("activeView", ctx_r2.activeView)("bottomView", ctx_r2.bottomView)("animateNavigation", ctx_r2.animateNavigation)("disabled", ctx_r2.disabled)("views", ctx_r2.views)("weekNumber", ctx_r2.weekNumber)("topView", ctx_r2.topView)("disabledDates", ctx_r2.disabledDates)("min", ctx_r2.min)("max", ctx_r2.max)("showCalendarHeader", ctx_r2.showCalendarHeader)("focusedDate", ctx_r2.focusedDate)("allowReverse", ctx_r2.allowReverse)("showViewHeader", ctx_r2.showViewHeader)("showOtherMonthDays", ctx_r2.showOtherMonthDays)("size", ctx_r2.size)("value", ctx_r2.dateRangeService.selectionRange);
  }
}
function DateRangePopupComponent_ng_template_7_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "kendo-resize-sensor", 20);
    ɵɵlistener("resize", function DateRangePopupComponent_ng_template_7_Conditional_0_Template_kendo_resize_sensor_resize_0_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.onResize());
    });
    ɵɵelementEnd();
  }
}
function DateRangePopupComponent_ng_template_7_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 10);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r2.adaptiveTitle);
  }
}
function DateRangePopupComponent_ng_template_7_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 11);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r2.adaptiveSubtitle);
  }
}
function DateRangePopupComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵtemplate(0, DateRangePopupComponent_ng_template_7_Conditional_0_Template, 1, 0, "kendo-resize-sensor");
    ɵɵelementStart(1, "div", 7)(2, "div", 8)(3, "div", 9);
    ɵɵtemplate(4, DateRangePopupComponent_ng_template_7_Conditional_4_Template, 2, 1, "div", 10)(5, DateRangePopupComponent_ng_template_7_Conditional_5_Template, 2, 1, "div", 11);
    ɵɵelementEnd();
    ɵɵelementStart(6, "div", 12)(7, "button", 13);
    ɵɵlistener("click", function DateRangePopupComponent_ng_template_7_Template_button_click_7_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.handleAccept());
    });
    ɵɵelementEnd()()()();
    ɵɵelementStart(8, "div", 14)(9, "div", 15)(10, "kendo-multiviewcalendar", 16);
    ɵɵlistener("rangeSelectionChange", function DateRangePopupComponent_ng_template_7_Template_kendo_multiviewcalendar_rangeSelectionChange_10_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onRangeSelectionChange($event));
    });
    ɵɵelementEnd()()();
    ɵɵelementStart(11, "div", 17)(12, "button", 18);
    ɵɵlistener("click", function DateRangePopupComponent_ng_template_7_Template_button_click_12_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.show = false);
    });
    ɵɵtext(13);
    ɵɵelementEnd();
    ɵɵelementStart(14, "button", 19);
    ɵɵlistener("click", function DateRangePopupComponent_ng_template_7_Template_button_click_14_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.handleAccept());
    });
    ɵɵtext(15);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵconditional(ctx_r2.isAdaptiveModeEnabled ? 0 : -1);
    ɵɵadvance(4);
    ɵɵconditional(ctx_r2.adaptiveTitle ? 4 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r2.adaptiveSubtitle ? 5 : -1);
    ɵɵadvance(2);
    ɵɵproperty("svgIcon", ctx_r2.checkIcon)("tabIndex", -1);
    ɵɵattribute("title", ctx_r2.localization.get("adaptiveCloseButtonTitle"));
    ɵɵadvance(3);
    ɵɵproperty("animateNavigation", ctx_r2.animateNavigation)("disabled", ctx_r2.disabled)("views", ctx_r2.views)("weekNumber", ctx_r2.weekNumber)("disabledDates", ctx_r2.disabledDates)("activeView", ctx_r2.activeView)("bottomView", ctx_r2.bottomView)("topView", ctx_r2.topView)("min", ctx_r2.min)("max", ctx_r2.max)("showCalendarHeader", ctx_r2.showCalendarHeader)("focusedDate", ctx_r2.focusedDate)("allowReverse", ctx_r2.allowReverse)("showViewHeader", ctx_r2.showViewHeader)("showOtherMonthDays", ctx_r2.showOtherMonthDays)("focusedDate", ctx_r2.dateRangeService.focusedDate)("value", ctx_r2.dateRangeService.selectionRange);
    ɵɵadvance(2);
    ɵɵattribute("title", ctx_r2.localization.get("cancelLabel"))("aria-label", ctx_r2.localization.get("cancelLabel"));
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r2.localization.get("cancel"), " ");
    ɵɵadvance();
    ɵɵattribute("title", ctx_r2.localization.get("acceptLabel"))("aria-label", ctx_r2.localization.get("acceptLabel"));
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r2.localization.get("accept"), " ");
  }
}
function DateRangeComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-daterange-popup", 0);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("size", ctx_r0.size);
  }
}
var packageMetadata = {
  name: "@progress/kendo-angular-dateinputs",
  productName: "Kendo UI for Angular",
  productCode: "KENDOUIANGULAR",
  productCodes: ["KENDOUIANGULAR"],
  publishDate: 1768393176,
  version: "21.4.1",
  licensingDocsUrl: "https://www.telerik.com/kendo-angular-ui/my-license/"
};
var Action;
(function(Action2) {
  Action2[Action2["Left"] = 0] = "Left";
  Action2[Action2["Right"] = 1] = "Right";
  Action2[Action2["Up"] = 2] = "Up";
  Action2[Action2["Down"] = 3] = "Down";
  Action2[Action2["PrevView"] = 4] = "PrevView";
  Action2[Action2["NextView"] = 5] = "NextView";
  Action2[Action2["FirstInView"] = 6] = "FirstInView";
  Action2[Action2["LastInView"] = 7] = "LastInView";
  Action2[Action2["LowerView"] = 8] = "LowerView";
  Action2[Action2["UpperView"] = 9] = "UpperView";
})(Action || (Action = {}));
var EMPTY_SELECTIONRANGE = {
  start: null,
  end: null
};
var MIDNIGHT_DATE = new Date(1980, 0, 1);
var MIN_DATE = new Date(1900, 0, 1);
var MAX_DATE = new Date(2099, 11, 31);
var MIN_TIME = new Date(1980, 0, 1);
var MAX_TIME = new Date(1980, 0, 1, 23, 59, 59);
var requiresZoneOnBlur = (ngControl) => ngControl && (!ngControl.touched || ngControl.control && ngControl.control.updateOn === "blur");
var preventDefault = (args) => args.preventDefault();
var currentFocusTarget = (blurArgs) => blurArgs.relatedTarget || document.activeElement;
var isPresent2 = (value) => value !== void 0 && value !== null;
var isNullOrDate = (value) => value === null || value instanceof Date;
var isNumberArray = (value) => Array.isArray(value) && value.length > 0 && value.every((item) => typeof item === "number");
var isDateArray = (value) => Array.isArray(value) && value.length > 0 && value.every((item) => item instanceof Date);
var isArrowWithShiftPressed = (args) => {
  const code = normalizeKeys(args);
  return args.shiftKey && (code === Keys.ArrowRight || code === Keys.ArrowLeft || code === Keys.ArrowDown || code === Keys.ArrowUp);
};
var selectors = {
  infiniteCalendarTable: ".k-content .k-calendar-table",
  multiViewCalendarTable: ".k-calendar-table"
};
var attributeNames = {
  ariaActiveDescendant: "aria-activedescendant",
  ariaControls: "aria-controls",
  ariaExpanded: "aria-expanded",
  ariaHasPopup: "aria-haspopup",
  valueNow: "aria-valuenow",
  valuetext: "aria-valuetext",
  ariaInvalid: "aria-invalid"
};
var isSet = (value) => value !== null && value !== void 0;
var setter = (method) => (date, value) => {
  const clone = cloneDate(date);
  clone[method](value);
  return clone;
};
var setTime = (origin, candidate) => {
  const date = cloneDate(origin);
  date.setHours(candidate.getHours(), candidate.getMinutes(), candidate.getSeconds(), candidate.getMilliseconds());
  return date;
};
var getTimeInMilliseconds = (candidate) => {
  const hoursInMilliseconds = candidate.getHours() * MS_PER_HOUR;
  const minutesInMilliseconds = candidate.getMinutes() * MS_PER_MINUTE;
  const secondsInMilliseconds = candidate.getSeconds() * 1e3;
  return hoursInMilliseconds + minutesInMilliseconds + secondsInMilliseconds + candidate.getMilliseconds();
};
var normalizeTimes = (candidate, min, max) => {
  return {
    candidateValue: setTime(MIDNIGHT_DATE, candidate),
    maxValue: addDays(setTime(MIDNIGHT_DATE, max), getTimeInMilliseconds(min) < getTimeInMilliseconds(max) ? 0 : 1),
    minValue: setTime(MIDNIGHT_DATE, min)
  };
};
var setYears2 = setter("setFullYear");
var setHours$1 = setter("setHours");
var setMinutes = setter("setMinutes");
var setSeconds = setter("setSeconds");
var setMilliseconds = setter("setMilliseconds");
var range = (start, end, step = 1) => {
  const result = [];
  for (let i = start; i < end; i = i + step) {
    result.push(i);
  }
  return result;
};
var isInRange = (candidate, min, max) => !candidate || !(min && min > candidate || max && max < candidate);
var isInTimeRange = (candidate, min, max) => {
  if (!candidate || !min || !max) {
    return true;
  }
  const {
    candidateValue,
    minValue,
    maxValue
  } = normalizeTimes(candidate, min, max);
  return minValue <= candidateValue && candidateValue <= maxValue;
};
var isValidRange = (min, max) => !isSet(min) || !isSet(max) || min <= max;
var dateInRange = (candidate, min, max) => {
  if (!candidate) {
    return candidate;
  }
  if (min && candidate < min) {
    return cloneDate(min);
  }
  if (max && candidate > max) {
    return cloneDate(max);
  }
  return candidate;
};
var timeInRange = (candidate, min, max) => {
  if (!candidate || !min || !max) {
    return candidate;
  }
  const {
    candidateValue,
    minValue,
    maxValue
  } = normalizeTimes(candidate, min, max);
  if (candidateValue < minValue) {
    return setTime(candidate, min);
  }
  if (candidateValue > maxValue) {
    return setTime(candidate, max);
  }
  return candidate;
};
var getNow = () => /* @__PURE__ */ new Date();
var getToday = () => getDate(/* @__PURE__ */ new Date());
var noop$2 = (_) => {
};
var isWindowAvailable = () => {
  return typeof window !== "undefined";
};
var stringifyClassObject = (classes) => {
  const pushToAcc = (acc, cls) => classes[cls] ? acc.concat(cls) : acc;
  return Object.keys(classes).reduce(pushToAcc, []).join(" ");
};
var shiftWeekNames = (names, offset) => names.slice(offset).concat(names.slice(0, offset));
var domContainerFactory = (type) => (children, classes = "", styles = {}) => {
  const container = document.createElement(type);
  container.className = classes;
  Object.keys(styles).forEach((key) => container.style[key] = styles[key]);
  if (typeof children === "string") {
    container.innerHTML = children || "";
  } else {
    (children || []).forEach((child) => child && container.appendChild(child));
  }
  return container;
};
var hasChange = (changes, field) => changes[field] !== void 0;
var hasExistingValue = (changes, field) => changes[field] && changes[field].currentValue !== void 0 && changes[field].currentValue !== null;
var last = (list2 = []) => list2 && list2[list2.length - 1];
var isInSelectionRange = (value, selectionRange) => {
  const {
    start,
    end
  } = selectionRange || EMPTY_SELECTIONRANGE;
  if (!start || !end) {
    return false;
  }
  return start < value && value < end;
};
var either = (value1, value2) => value1 || value2;
var clampRange = (value) => ({
  start: value,
  end: value
});
var isEqualRange = (initial, updated) => {
  const {
    start: initialStart,
    end: initialEnd
  } = initial || EMPTY_SELECTIONRANGE;
  const {
    start: updatedStart,
    end: updatedEnd
  } = updated || EMPTY_SELECTIONRANGE;
  return isEqual(initialStart, updatedStart) && isEqual(initialEnd, updatedEnd);
};
var areDatesEqual = (first, second) => {
  first = first || [];
  second = second || [];
  return first.length === second.length && first.every((date, index) => isEqual(date, second[index]));
};
var sortDates = (dates) => {
  return dates.filter((date) => isPresent2(date)).sort((a, b) => a.getTime() - b.getTime());
};
var mergeDateAndTime = (date, time) => {
  if (!(date && time)) {
    return null;
  }
  return new Date(date.getFullYear(), date.getMonth(), date.getDate(), time.getHours(), time.getMinutes(), time.getSeconds(), time.getMilliseconds());
};
var lastMillisecondOfDate = (date) => {
  if (!date) {
    return null;
  }
  return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59, 999);
};
var disabledDatesInRange = (start, end, isDateDisabled) => {
  if (!(start && end && isDateDisabled) || start > end) {
    return [];
  }
  const dates = [];
  let current = start;
  while (current <= end) {
    if (isDateDisabled(current)) {
      dates.push(current);
    }
    current = addDays(current, 1);
  }
  return dates;
};
var isTabExitingCalendar = (calendarType, focusedElement, shiftKey) => {
  if (!isPresent2(focusedElement)) {
    return false;
  }
  return calendarType === "infinite" || // infinte calendar is always exited on first tab keydown
  calendarType === "classic" && shiftKey && focusedElement.classList.contains("k-calendar-table") || // exited on main calendar element focused and back-tab
  !shiftKey && focusedElement.classList.contains("k-calendar-table");
};
var getSizeClass = (component, size) => {
  const SIZE_CLASSES = {
    "small": `k-${component}-sm`,
    "medium": `k-${component}-md`,
    "large": `k-${component}-lg`
  };
  return SIZE_CLASSES[size];
};
var getRoundedClass = (rounded) => {
  const ROUNDED_CLASSES = {
    "small": "k-rounded-sm",
    "medium": "k-rounded-md",
    "large": "k-rounded-lg",
    "full": "k-rounded-full"
  };
  return ROUNDED_CLASSES[rounded];
};
var getFillModeClass = (component, fillMode) => {
  const FILLMODE_CLASSES = {
    "solid": `k-${component}-solid`,
    "flat": `k-${component}-flat`,
    "outline": `k-${component}-outline`
  };
  return FILLMODE_CLASSES[fillMode];
};
var DEFAULT_ROUNDED = "medium";
var DEFAULT_SIZE = "medium";
var DEFAULT_FILL_MODE = "solid";
var EMPTY_DATA$3 = [[]];
var CELLS_LENGTH$3 = 4;
var ROWS_LENGTH$3 = 3;
var upStep$1 = (year) => {
  const decadeOfCentury = Number(year.toString().slice(-2, -1));
  if (decadeOfCentury < 2) {
    return -2;
  }
  if (decadeOfCentury < 4) {
    return -6;
  }
  return -4;
};
var downStep$1 = (year) => {
  const decadeOfCentury = Number(year.toString().slice(-2, -1));
  if (decadeOfCentury > 7) {
    return 2;
  }
  if (decadeOfCentury > 5) {
    return 6;
  }
  return 4;
};
var ACTIONS$3 = {
  [Action.Left]: (date) => addDecades(date, -1),
  [Action.Up]: (date) => addDecades(date, upStep$1(date.getFullYear())),
  [Action.Right]: (date) => addDecades(date, 1),
  [Action.Down]: (date) => addDecades(date, downStep$1(date.getFullYear())),
  [Action.PrevView]: (date) => addCenturies(date, -1),
  [Action.NextView]: (date) => addCenturies(date, 1),
  [Action.FirstInView]: (date) => firstDecadeOfCentury(date),
  [Action.LastInView]: (date) => lastDecadeOfCentury(date)
};
var CenturyViewService = class _CenturyViewService {
  addToDate(min, skip) {
    return addCenturies(min, skip);
  }
  datesList(start, count) {
    return range(0, count).map((i) => addCenturies(start, i));
  }
  data(options) {
    const {
      cellUID,
      focusedDate,
      isActiveView,
      max,
      min,
      selectedDates,
      selectionRange = EMPTY_SELECTIONRANGE,
      viewDate,
      allowReverse
    } = options;
    if (!viewDate) {
      return EMPTY_DATA$3;
    }
    const cells = range(0, CELLS_LENGTH$3);
    const firstDate = firstDecadeOfCentury(viewDate);
    const lastDate = lastDecadeOfCentury(viewDate);
    const lastYearOfCentury = lastYearOfDecade(lastDate).getFullYear() + 1;
    const today = getToday();
    return range(0, ROWS_LENGTH$3).map((rowOffset) => {
      const baseDate = addDecades(firstDate, rowOffset * CELLS_LENGTH$3);
      return cells.map((cellOffset) => {
        const cellDate = this.normalize(addDecades(baseDate, cellOffset), min, max);
        const nextCentury = cellDate.getFullYear() >= lastYearOfCentury;
        if (!this.isInRange(cellDate, min, max) || nextCentury) {
          return null;
        }
        let isRangeStart = false;
        let isRangeEnd = false;
        if (allowReverse) {
          if (this.isEqual(cellDate, selectionRange.start) && selectionRange.start <= selectionRange.end || this.isEqual(cellDate, selectionRange.end) && selectionRange.end <= selectionRange.start) {
            isRangeStart = true;
          }
          if (this.isEqual(cellDate, selectionRange.start) && selectionRange.start >= selectionRange.end || this.isEqual(cellDate, selectionRange.end) && selectionRange.end >= selectionRange.start) {
            isRangeEnd = true;
          }
        } else {
          isRangeStart = this.isEqual(cellDate, selectionRange.start);
          isRangeEnd = this.isEqual(cellDate, selectionRange.end);
        }
        const isInMiddle = !isRangeStart && !isRangeEnd;
        let isRangeMid;
        if (allowReverse) {
          isRangeMid = isInMiddle && (isInSelectionRange(cellDate, selectionRange) || isInSelectionRange(cellDate, {
            start: selectionRange.end,
            end: selectionRange.start
          }));
        } else {
          isRangeMid = isInMiddle && isInSelectionRange(cellDate, selectionRange);
        }
        return {
          formattedValue: this.value(cellDate),
          id: `${cellUID}${cellDate.getTime()}`,
          isFocused: this.isEqual(cellDate, focusedDate),
          isSelected: isActiveView && selectedDates.some((date) => this.isEqual(cellDate, date)),
          isWeekend: false,
          isRangeStart,
          isRangeMid,
          isRangeEnd,
          isRangeSplitEnd: isRangeMid && this.isEqual(cellDate, lastDate),
          isRangeSplitStart: isRangeMid && this.isEqual(cellDate, firstDate),
          isToday: this.isEqual(cellDate, today),
          title: this.cellTitle(cellDate),
          value: cellDate,
          allowReverse
        };
      });
    });
  }
  isEqual(candidate, expected) {
    if (!candidate || !expected) {
      return false;
    }
    return firstYearOfDecade(candidate).getFullYear() === firstYearOfDecade(expected).getFullYear();
  }
  isInArray(date, dates) {
    if (!dates.length) {
      return false;
    }
    const year = date.getFullYear();
    return dates[0].getFullYear() <= year && year <= dates[dates.length - 1].getFullYear() + 99;
  }
  isInRange(candidate, min, max) {
    const year = firstYearOfDecade(candidate).getFullYear();
    const aboveMin = !min || firstYearOfDecade(min).getFullYear() <= year;
    const belowMax = !max || year <= firstYearOfDecade(max).getFullYear();
    return aboveMin && belowMax;
  }
  beginningOfPeriod(date) {
    if (!date) {
      return date;
    }
    const firstYear = firstYearOfDecade(firstDecadeOfCentury(date));
    return createDate(firstYear.getFullYear(), 0, 1);
  }
  lastDayOfPeriod(date) {
    const decade = lastDecadeOfCentury(date);
    const year = lastYearOfDecade(decade);
    const month = lastMonthOfYear(year);
    return lastDayOfMonth(month);
  }
  isRangeStart(value) {
    return value.getFullYear() % 1e3 === 0;
  }
  move(value, action) {
    const modifier = ACTIONS$3[action];
    if (!modifier) {
      return value;
    }
    return modifier(value);
  }
  cellTitle(value) {
    return firstYearOfDecade(value).getFullYear().toString();
  }
  navigationTitle(value) {
    return value ? firstDecadeOfCentury(value).getFullYear().toString() : "";
  }
  title(value) {
    if (!value) {
      return "";
    }
    return `${firstDecadeOfCentury(value).getFullYear()} - ${lastDecadeOfCentury(value).getFullYear()}`;
  }
  rowLength() {
    return CELLS_LENGTH$3;
  }
  skip(value, min) {
    return durationInCenturies(min, value);
  }
  total(min, max) {
    return durationInCenturies(min, max) + 1;
  }
  value(current) {
    return current ? firstYearOfDecade(current).getFullYear().toString() : "";
  }
  viewDate(date, max, viewsCount = 1) {
    const viewsInRange = this.total(date, max);
    if (viewsInRange < viewsCount) {
      const centuriesToSubtract = viewsCount - viewsInRange;
      return addCenturies(date, -1 * centuriesToSubtract);
    }
    return date;
  }
  dateRange = (start, end) => {
    if (!isPresent2(start) || !isPresent2(end)) {
      return [];
    }
    const result = [];
    let current = start;
    while (current <= end) {
      result.push(current);
      current = addDecades(current, 1);
    }
    return result;
  };
  normalize(cellDate, min, max) {
    if (cellDate < min && this.isEqual(cellDate, min)) {
      return cloneDate(min);
    }
    if (cellDate > max && this.isEqual(cellDate, max)) {
      return cloneDate(max);
    }
    return cellDate;
  }
  static ɵfac = function CenturyViewService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CenturyViewService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _CenturyViewService,
    factory: _CenturyViewService.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CenturyViewService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var EMPTY_DATA$2 = [[]];
var CELLS_LENGTH$2 = 4;
var ROWS_LENGTH$2 = 3;
var upStep = (year) => {
  const yearOfDecade = Number(year.toString().slice(-1));
  if (yearOfDecade < 2) {
    return -2;
  }
  if (yearOfDecade < 4) {
    return -6;
  }
  return -4;
};
var downStep = (year) => {
  const yearOfDecade = Number(year.toString().slice(-1));
  if (yearOfDecade > 7) {
    return 2;
  }
  if (yearOfDecade > 5) {
    return 6;
  }
  return 4;
};
var ACTIONS$2 = {
  [Action.Left]: (date) => addYears(date, -1),
  [Action.Up]: (date) => addYears(date, upStep(date.getFullYear())),
  [Action.Right]: (date) => addYears(date, 1),
  [Action.Down]: (date) => addYears(date, downStep(date.getFullYear())),
  [Action.PrevView]: (date) => addDecades(date, -1),
  [Action.NextView]: (date) => addDecades(date, 1),
  [Action.FirstInView]: (date) => firstYearOfDecade(date),
  [Action.LastInView]: (date) => lastYearOfDecade(date)
};
var DecadeViewService = class _DecadeViewService {
  addToDate(min, skip) {
    return addDecades(min, skip);
  }
  datesList(start, count) {
    return range(0, count).map((i) => addDecades(start, i));
  }
  data(options) {
    const {
      cellUID,
      focusedDate,
      isActiveView,
      max,
      min,
      selectedDates,
      selectionRange = EMPTY_SELECTIONRANGE,
      viewDate,
      allowReverse
    } = options;
    if (!viewDate) {
      return EMPTY_DATA$2;
    }
    const cells = range(0, CELLS_LENGTH$2);
    const firstDate = firstYearOfDecade(viewDate);
    const lastDate = lastYearOfDecade(viewDate);
    const today = getToday();
    return range(0, ROWS_LENGTH$2).map((rowOffset) => {
      const baseDate = addYears(firstDate, rowOffset * CELLS_LENGTH$2);
      return cells.map((cellOffset) => {
        const cellDate = this.normalize(addYears(baseDate, cellOffset), min, max);
        const nextDecade = cellDate.getFullYear() > lastDate.getFullYear();
        if (!this.isInRange(cellDate, min, max) || nextDecade) {
          return null;
        }
        let isRangeStart = false;
        let isRangeEnd = false;
        if (allowReverse) {
          if (this.isEqual(cellDate, selectionRange.start) && selectionRange.start <= selectionRange.end || this.isEqual(cellDate, selectionRange.end) && selectionRange.end <= selectionRange.start) {
            isRangeStart = true;
          }
          if (this.isEqual(cellDate, selectionRange.start) && selectionRange.start >= selectionRange.end || this.isEqual(cellDate, selectionRange.end) && selectionRange.end >= selectionRange.start) {
            isRangeEnd = true;
          }
        } else {
          isRangeStart = this.isEqual(cellDate, selectionRange.start);
          isRangeEnd = this.isEqual(cellDate, selectionRange.end);
        }
        const isInMiddle = !isRangeStart && !isRangeEnd;
        let isRangeMid;
        if (allowReverse) {
          isRangeMid = isInMiddle && (isInSelectionRange(cellDate, selectionRange) || isInSelectionRange(cellDate, {
            start: selectionRange.end,
            end: selectionRange.start
          }));
        } else {
          isRangeMid = isInMiddle && isInSelectionRange(cellDate, selectionRange);
        }
        return {
          formattedValue: this.value(cellDate),
          id: `${cellUID}${cellDate.getTime()}`,
          isFocused: this.isEqual(cellDate, focusedDate),
          isSelected: isActiveView && selectedDates.some((date) => this.isEqual(cellDate, date)),
          isWeekend: false,
          isRangeStart,
          isRangeMid,
          isRangeEnd,
          isRangeSplitEnd: isRangeMid && this.isEqual(cellDate, lastDate),
          isRangeSplitStart: isRangeMid && this.isEqual(cellDate, firstDate),
          isToday: this.isEqual(cellDate, today),
          title: this.cellTitle(cellDate),
          value: cellDate,
          allowReverse
        };
      });
    });
  }
  isEqual(candidate, expected) {
    if (!candidate || !expected) {
      return false;
    }
    return candidate.getFullYear() === expected.getFullYear();
  }
  isInArray(date, dates) {
    if (!dates.length) {
      return false;
    }
    const year = date.getFullYear();
    return dates[0].getFullYear() <= year && year <= dates[dates.length - 1].getFullYear() + 9;
  }
  isInRange(candidate, min, max) {
    const year = candidate.getFullYear();
    const aboveMin = !min || min.getFullYear() <= year;
    const belowMax = !max || year <= max.getFullYear();
    return aboveMin && belowMax;
  }
  beginningOfPeriod(date) {
    if (!date) {
      return date;
    }
    const firstYear = firstYearOfDecade(date);
    return createDate(firstYear.getFullYear(), 0, 1);
  }
  lastDayOfPeriod(date) {
    const year = lastYearOfDecade(date);
    const month = lastMonthOfYear(year);
    return lastDayOfMonth(month);
  }
  isRangeStart(value) {
    return value.getFullYear() % 100 === 0;
  }
  move(value, action) {
    const modifier = ACTIONS$2[action];
    if (!modifier) {
      return value;
    }
    return modifier(value);
  }
  cellTitle(value) {
    return value.getFullYear().toString();
  }
  navigationTitle(value) {
    return value ? firstYearOfDecade(value).getFullYear().toString() : "";
  }
  title(value) {
    if (!value) {
      return "";
    }
    return `${firstYearOfDecade(value).getFullYear()} - ${lastYearOfDecade(value).getFullYear()}`;
  }
  rowLength() {
    return CELLS_LENGTH$2;
  }
  skip(value, min) {
    return durationInDecades(min, value);
  }
  total(min, max) {
    return durationInDecades(min, max) + 1;
  }
  value(current) {
    return current ? current.getFullYear().toString() : "";
  }
  viewDate(date, max, viewsCount = 1) {
    const viewsInRange = this.total(date, max);
    if (viewsInRange < viewsCount) {
      const decadesToSubtract = viewsCount - viewsInRange;
      return addDecades(date, -1 * decadesToSubtract);
    }
    return date;
  }
  dateRange = (start, end) => {
    if (!isPresent2(start) || !isPresent2(end)) {
      return [];
    }
    const result = [];
    let current = start;
    while (current <= end) {
      result.push(current);
      current = addYears(current, 1);
    }
    return result;
  };
  normalize(cellDate, min, max) {
    if (cellDate < min && this.isEqual(cellDate, min)) {
      return cloneDate(min);
    }
    if (cellDate > max && this.isEqual(cellDate, max)) {
      return cloneDate(max);
    }
    return cellDate;
  }
  static ɵfac = function DecadeViewService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DecadeViewService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _DecadeViewService,
    factory: _DecadeViewService.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DecadeViewService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var EMPTY_DATA$1 = [[]];
var CELLS_LENGTH$1 = 7;
var ROWS_LENGTH$1 = 6;
var ACTIONS$1 = {
  [Action.Left]: (date) => addDays(date, -1),
  [Action.Up]: (date) => addWeeks(date, -1),
  [Action.Right]: (date) => addDays(date, 1),
  [Action.Down]: (date) => addWeeks(date, 1),
  [Action.PrevView]: (date) => addMonths(date, -1),
  [Action.NextView]: (date) => addMonths(date, 1),
  [Action.FirstInView]: (date) => firstDayOfMonth(date),
  [Action.LastInView]: (date) => lastDayOfMonth(date)
};
var MonthViewService = class _MonthViewService {
  _intlService;
  constructor(_intlService) {
    this._intlService = _intlService;
  }
  addToDate(min, skip) {
    return addMonths(min, skip);
  }
  datesList(start, count) {
    return range(0, count).map((i) => addMonths(start, i));
  }
  data(options) {
    const {
      cellUID,
      focusedDate,
      isActiveView,
      max,
      min,
      selectedDates,
      selectionRange = EMPTY_SELECTIONRANGE,
      viewDate,
      isDateDisabled = () => false,
      allowReverse
    } = options;
    if (!viewDate) {
      return EMPTY_DATA$1;
    }
    const firstMonthDate = firstDayOfMonth(viewDate);
    const firstMonthDay = getDate(firstMonthDate);
    const lastMonthDate = lastDayOfMonth(viewDate);
    const lastMonthDay = getDate(lastMonthDate);
    const backward = -1;
    const date = dayOfWeek(firstMonthDate, this._intlService.firstDay(), backward);
    const cells = range(0, CELLS_LENGTH$1);
    const today = getToday();
    return range(0, ROWS_LENGTH$1).map((rowOffset) => {
      const baseDate = addDays(date, rowOffset * CELLS_LENGTH$1);
      return cells.map((cellOffset) => {
        const cellDate = this.normalize(addDays(baseDate, cellOffset), min, max);
        const cellDay = getDate(cellDate);
        const otherMonth = cellDay < firstMonthDay || cellDay > lastMonthDay;
        const outOfRange = cellDate < min || cellDate > max;
        if (outOfRange) {
          return null;
        }
        let isRangeStart = false;
        let isRangeEnd = false;
        if (allowReverse) {
          if (this.isEqual(cellDate, selectionRange.start) && selectionRange.start <= selectionRange.end || this.isEqual(cellDate, selectionRange.end) && selectionRange.end <= selectionRange.start) {
            isRangeStart = true;
          }
          if (this.isEqual(cellDate, selectionRange.start) && selectionRange.start >= selectionRange.end || this.isEqual(cellDate, selectionRange.end) && selectionRange.end >= selectionRange.start) {
            isRangeEnd = true;
          }
        } else {
          isRangeStart = this.isEqual(cellDate, selectionRange.start);
          isRangeEnd = this.isEqual(cellDate, selectionRange.end);
        }
        const isInMiddle = !isRangeStart && !isRangeEnd;
        let isRangeMid;
        if (allowReverse) {
          isRangeMid = isInMiddle && (isInSelectionRange(cellDate, selectionRange) || isInSelectionRange(cellDate, {
            start: selectionRange.end,
            end: selectionRange.start
          }));
        } else {
          isRangeMid = isInMiddle && isInSelectionRange(cellDate, selectionRange);
        }
        return {
          formattedValue: this.value(cellDate),
          id: `${cellUID}${otherMonth ? cellDate.getTime() + "1" : cellDate.getTime()}`,
          isFocused: this.isEqual(cellDate, focusedDate),
          isSelected: isActiveView && selectedDates.some((date2) => this.isEqual(cellDate, date2)),
          isWeekend: this.isWeekend(cellDate),
          isRangeStart,
          isRangeMid,
          isRangeEnd,
          isRangeSplitStart: isRangeMid && this.isEqual(cellDate, firstMonthDate),
          isRangeSplitEnd: isRangeMid && this.isEqual(cellDate, lastMonthDate),
          isToday: this.isEqual(cellDate, today),
          title: this.cellTitle(cellDate),
          value: cellDate,
          isDisabled: isDateDisabled(cellDate),
          isOtherMonth: otherMonth,
          allowReverse
        };
      });
    });
  }
  isEqual(candidate, expected) {
    if (!candidate || !expected) {
      return false;
    }
    return getDate(candidate).getTime() === getDate(expected).getTime();
  }
  isInArray(date, dates) {
    if (dates.length === 0) {
      return false;
    }
    const lowerBound = this.beginningOfPeriod(dates[0]);
    const upperBound = this.beginningOfPeriod(addMonths(dates[dates.length - 1], 1));
    return lowerBound <= date && date < upperBound;
  }
  isInRange(candidate, min, max) {
    const value = getDate(candidate);
    const aboveMin = !min || getDate(min) <= value;
    const belowMax = !max || value <= getDate(max);
    return aboveMin && belowMax;
  }
  beginningOfPeriod(date) {
    if (!date) {
      return date;
    }
    return createDate(date.getFullYear(), date.getMonth(), 1);
  }
  lastDayOfPeriod(date) {
    return lastDayOfMonth(date);
  }
  isRangeStart(value) {
    return !value.getMonth();
  }
  move(value, action) {
    const modifier = ACTIONS$1[action];
    if (!modifier) {
      return value;
    }
    return modifier(value);
  }
  cellTitle(value) {
    return this._intlService.formatDate(value, "D");
  }
  navigationTitle(value) {
    if (!value) {
      return "";
    }
    return this.isRangeStart(value) ? value.getFullYear().toString() : this.abbrMonthNames()[value.getMonth()];
  }
  title(current) {
    return `${this.wideMonthNames()[current.getMonth()]} ${current.getFullYear()}`;
  }
  rowLength(options = {}) {
    return CELLS_LENGTH$1 + (options.prependCell ? 1 : 0);
  }
  skip(value, min) {
    return durationInMonths(min, value);
  }
  total(min, max) {
    return durationInMonths(min, max) + 1;
  }
  value(current) {
    return current ? current.getDate().toString() : "";
  }
  viewDate(date, max, viewsCount = 1) {
    const viewsInRange = this.total(date, max);
    if (viewsInRange < viewsCount) {
      const monthsToSubtract = viewsCount - viewsInRange;
      return addMonths(date, -1 * monthsToSubtract);
    }
    return date;
  }
  isWeekend(date) {
    const {
      start,
      end
    } = this._intlService.weekendRange();
    const day = date.getDay();
    if (end < start) {
      return day <= end || start <= day;
    }
    return start <= day && day <= end;
  }
  dateRange = (start, end) => {
    if (!isPresent2(start) || !isPresent2(end)) {
      return [];
    }
    const result = [];
    let current = start;
    while (current <= end) {
      result.push(current);
      current = addDays(current, 1);
    }
    return result;
  };
  abbrMonthNames() {
    return this._intlService.dateFormatNames({
      nameType: "abbreviated",
      type: "months"
    });
  }
  normalize(cellDate, min, max) {
    if (cellDate < min && this.isEqual(cellDate, min)) {
      return cloneDate(min);
    }
    if (cellDate > max && this.isEqual(cellDate, max)) {
      return cloneDate(max);
    }
    return cellDate;
  }
  wideMonthNames() {
    return this._intlService.dateFormatNames({
      nameType: "wide",
      type: "months"
    });
  }
  static ɵfac = function MonthViewService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MonthViewService)(ɵɵinject(IntlService));
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _MonthViewService,
    factory: _MonthViewService.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MonthViewService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: IntlService
  }], null);
})();
var EMPTY_DATA = [[]];
var CELLS_LENGTH = 4;
var ROWS_LENGTH = 3;
var ACTIONS = {
  [Action.Left]: (date) => addMonths(date, -1),
  [Action.Up]: (date) => addMonths(date, -4),
  [Action.Right]: (date) => addMonths(date, 1),
  [Action.Down]: (date) => addMonths(date, 4),
  [Action.PrevView]: (date) => addYears(date, -1),
  [Action.NextView]: (date) => addYears(date, 1),
  [Action.FirstInView]: (date) => firstMonthOfYear(date),
  [Action.LastInView]: (date) => lastMonthOfYear(date)
};
var YearViewService = class _YearViewService {
  _intlService;
  constructor(_intlService) {
    this._intlService = _intlService;
  }
  addToDate(min, skip) {
    return addYears(min, skip);
  }
  datesList(start, count) {
    return range(0, count).map((i) => addYears(start, i));
  }
  data(options) {
    const {
      cellUID,
      focusedDate,
      isActiveView,
      max,
      min,
      selectedDates,
      selectionRange = EMPTY_SELECTIONRANGE,
      viewDate,
      allowReverse
    } = options;
    if (!viewDate) {
      return EMPTY_DATA;
    }
    const months = this.abbrMonthNames();
    const firstDate = firstMonthOfYear(viewDate);
    const lastDate = lastMonthOfYear(viewDate);
    const currentYear = firstDate.getFullYear();
    const cells = range(0, CELLS_LENGTH);
    const today = getToday();
    return range(0, ROWS_LENGTH).map((rowOffset) => {
      const baseDate = addMonths(firstDate, rowOffset * CELLS_LENGTH);
      return cells.map((cellOffset) => {
        const cellDate = this.normalize(addMonths(baseDate, cellOffset), min, max);
        const changedYear = currentYear < cellDate.getFullYear();
        if (!this.isInRange(cellDate, min, max) || changedYear) {
          return null;
        }
        let isRangeStart = false;
        let isRangeEnd = false;
        if (allowReverse) {
          if (this.isEqual(cellDate, selectionRange.start) && selectionRange.start <= selectionRange.end || this.isEqual(cellDate, selectionRange.end) && selectionRange.end <= selectionRange.start) {
            isRangeStart = true;
          }
          if (this.isEqual(cellDate, selectionRange.start) && selectionRange.start >= selectionRange.end || this.isEqual(cellDate, selectionRange.end) && selectionRange.end >= selectionRange.start) {
            isRangeEnd = true;
          }
        } else {
          isRangeStart = this.isEqual(cellDate, selectionRange.start);
          isRangeEnd = this.isEqual(cellDate, selectionRange.end);
        }
        const isInMiddle = !isRangeStart && !isRangeEnd;
        let isRangeMid;
        if (allowReverse) {
          isRangeMid = isInMiddle && (isInSelectionRange(cellDate, selectionRange) || isInSelectionRange(cellDate, {
            start: selectionRange.end,
            end: selectionRange.start
          }));
        } else {
          isRangeMid = isInMiddle && isInSelectionRange(cellDate, selectionRange);
        }
        return {
          formattedValue: months[cellDate.getMonth()],
          id: `${cellUID}${cellDate.getTime()}`,
          isFocused: this.isEqual(cellDate, focusedDate),
          isSelected: isActiveView && selectedDates.some((date) => this.isEqual(cellDate, date)),
          isWeekend: false,
          isRangeStart,
          isRangeMid,
          isRangeEnd,
          isRangeSplitEnd: isRangeMid && this.isEqual(cellDate, lastDate),
          isRangeSplitStart: isRangeMid && this.isEqual(cellDate, firstDate),
          isToday: this.isEqual(cellDate, today),
          title: this.cellTitle(cellDate),
          value: cellDate,
          allowReverse
        };
      });
    });
  }
  isEqual(candidate, expected) {
    if (!candidate || !expected) {
      return false;
    }
    return candidate.getFullYear() === expected.getFullYear() && candidate.getMonth() === expected.getMonth();
  }
  isInArray(date, dates) {
    if (!dates.length) {
      return false;
    }
    const year = date.getFullYear();
    return dates[0].getFullYear() <= year && year <= dates[dates.length - 1].getFullYear();
  }
  isInRange(candidate, min, max) {
    const candidateValue = createDate(candidate.getFullYear(), candidate.getMonth(), 1);
    const aboveMin = !min || createDate(min.getFullYear(), min.getMonth(), 1) <= candidateValue;
    const belowMax = !max || candidateValue <= createDate(max.getFullYear(), max.getMonth(), 1);
    return aboveMin && belowMax;
  }
  beginningOfPeriod(date) {
    if (!date) {
      return date;
    }
    return createDate(date.getFullYear(), 0, 1);
  }
  lastDayOfPeriod(date) {
    const month = lastMonthOfYear(date);
    return lastDayOfMonth(month);
  }
  isRangeStart(value) {
    return value.getFullYear() % 10 === 0;
  }
  move(value, action) {
    const modifier = ACTIONS[action];
    if (!modifier) {
      return value;
    }
    return modifier(value);
  }
  cellTitle(value) {
    return `${value.getFullYear()} ${this.value(value)}`;
  }
  navigationTitle(value) {
    return this.title(value);
  }
  title(current) {
    return current ? current.getFullYear().toString() : "";
  }
  rowLength() {
    return CELLS_LENGTH;
  }
  skip(value, min) {
    return durationInYears(min, value);
  }
  total(min, max) {
    return durationInYears(min, max) + 1;
  }
  value(current) {
    return current ? this.abbrMonthNames()[current.getMonth()] : "";
  }
  viewDate(date, max, viewsCount = 1) {
    const viewsInRange = this.total(date, max);
    if (viewsInRange < viewsCount) {
      const yearsToSubtract = viewsCount - viewsInRange;
      return addYears(date, -1 * yearsToSubtract);
    }
    return date;
  }
  dateRange = (start, end) => {
    if (!isPresent2(start) || !isPresent2(end)) {
      return [];
    }
    const result = [];
    let current = start;
    while (current <= end) {
      result.push(current);
      current = addMonths(current, 1);
    }
    return result;
  };
  abbrMonthNames() {
    return this._intlService.dateFormatNames({
      nameType: "abbreviated",
      type: "months"
    });
  }
  normalize(cellDate, min, max) {
    if (cellDate < min && this.isEqual(cellDate, min)) {
      return cloneDate(min);
    }
    if (cellDate > max && this.isEqual(cellDate, max)) {
      return cloneDate(max);
    }
    return cellDate;
  }
  static ɵfac = function YearViewService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _YearViewService)(ɵɵinject(IntlService));
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _YearViewService,
    factory: _YearViewService.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(YearViewService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: IntlService
  }], null);
})();
var CalendarViewEnum;
(function(CalendarViewEnum2) {
  CalendarViewEnum2[CalendarViewEnum2["month"] = 0] = "month";
  CalendarViewEnum2[CalendarViewEnum2["year"] = 1] = "year";
  CalendarViewEnum2[CalendarViewEnum2["decade"] = 2] = "decade";
  CalendarViewEnum2[CalendarViewEnum2["century"] = 3] = "century";
})(CalendarViewEnum || (CalendarViewEnum = {}));
var services$1 = {
  [CalendarViewEnum.month]: MonthViewService,
  [CalendarViewEnum.year]: YearViewService,
  [CalendarViewEnum.decade]: DecadeViewService,
  [CalendarViewEnum.century]: CenturyViewService
};
var viewOffset = (view2, offset) => {
  const candidate = CalendarViewEnum[CalendarViewEnum[view2 + offset]];
  return candidate !== void 0 ? candidate : view2;
};
var nextCalendarId = 0;
var BusViewService = class _BusViewService {
  injector;
  viewChanged = new EventEmitter();
  bottom = CalendarViewEnum.month;
  top = CalendarViewEnum.century;
  calendarId;
  constructor(injector) {
    this.injector = injector;
    this.calendarId = nextCalendarId++;
  }
  configure(bottom, top) {
    this.bottom = bottom;
    this.top = top;
  }
  service(view2) {
    const serviceType = services$1[view2];
    return serviceType ? this.injector.get(serviceType) : null;
  }
  moveDown(view2) {
    this.move(view2, -1);
  }
  moveUp(view2) {
    this.move(view2, 1);
  }
  moveToBottom(activeView) {
    if (activeView === this.bottom) {
      return;
    }
    this.viewChanged.emit({
      view: this.bottom
    });
  }
  canMoveDown(view2) {
    return this.bottom < view2;
  }
  canMoveUp(view2) {
    return view2 < this.top;
  }
  clamp(view2) {
    if (view2 < this.bottom) {
      return this.bottom;
    }
    if (view2 > this.top) {
      return this.top;
    }
    return view2;
  }
  move(view2, offset) {
    const candidate = this.clamp(viewOffset(view2, offset));
    if (candidate === view2) {
      return;
    }
    this.viewChanged.emit({
      view: candidate
    });
  }
  static ɵfac = function BusViewService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BusViewService)(ɵɵinject(Injector));
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _BusViewService,
    factory: _BusViewService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BusViewService, [{
    type: Injectable
  }], () => [{
    type: Injector
  }], null);
})();
var KForOfContext = class {
  $implicit;
  kForOf;
  index;
  count;
  constructor($implicit, kForOf, index, count) {
    this.$implicit = $implicit;
    this.kForOf = kForOf;
    this.index = index;
    this.count = count;
  }
  get first() {
    return this.index === 0;
  }
  get last() {
    return this.index === this.count - 1;
  }
  get even() {
    return this.index % 2 === 0;
  }
  get odd() {
    return !this.even;
  }
};
var KForOf = class _KForOf {
  _viewContainer;
  _template;
  _differs;
  kForOf;
  kForTrackBy;
  _differ = null;
  constructor(_viewContainer, _template, _differs) {
    this._viewContainer = _viewContainer;
    this._template = _template;
    this._differs = _differs;
  }
  set kForTemplate(value) {
    if (value) {
      this._template = value;
    }
  }
  ngOnChanges(changes) {
    if ("kForOf" in changes) {
      const value = changes["kForOf"].currentValue;
      if (this._differ || !value) {
        return;
      }
      try {
        this._differ = this._differs.find(value).create(this.kForTrackBy);
      } catch (_e) {
        throw new Error(`Cannot find a differ supporting object '${value}' of type '${getTypeNameForDebugging(value)}'.`);
      }
    }
  }
  ngDoCheck() {
    if (this._differ) {
      const changes = this._differ.diff(this.kForOf);
      if (changes) {
        this._applyChanges(changes);
      }
    }
  }
  _applyChanges(changes) {
    if (!isDocumentAvailable()) {
      return;
    }
    const viewContainerLength = this._viewContainer.length;
    const dataLength = this.kForOf.length;
    const tuples = {};
    changes.forEachOperation((record, _, currentIndex) => {
      if (currentIndex !== null) {
        tuples[currentIndex] = record.item;
      }
    });
    for (let i = viewContainerLength; i < dataLength; i++) {
      this._viewContainer.createEmbeddedView(this._template, new KForOfContext(null, this.kForOf, -1, -1), i);
    }
    for (let i = this._viewContainer.length; i > dataLength; i--) {
      this._viewContainer.remove(i - 1);
    }
    for (let i = 0; i < this._viewContainer.length; i++) {
      const view2 = this._viewContainer.get(i);
      view2.context.index = i;
      view2.context.count = length;
      view2.context.$implicit = tuples[i] || null;
    }
  }
  static ɵfac = function KForOf_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _KForOf)(ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(TemplateRef), ɵɵdirectiveInject(IterableDiffers));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _KForOf,
    selectors: [["", "kFor", "", "kForOf", ""]],
    inputs: {
      kForOf: "kForOf",
      kForTrackBy: "kForTrackBy",
      kForTemplate: "kForTemplate"
    },
    standalone: true,
    features: [ɵɵNgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(KForOf, [{
    type: Directive,
    args: [{
      selector: "[kFor][kForOf]",
      standalone: true
    }]
  }], () => [{
    type: ViewContainerRef
  }, {
    type: TemplateRef
  }, {
    type: IterableDiffers
  }], {
    kForOf: [{
      type: Input
    }],
    kForTrackBy: [{
      type: Input
    }],
    kForTemplate: [{
      type: Input
    }]
  });
})();
function getTypeNameForDebugging(type) {
  return type.name || typeof type;
}
var noop$1 = () => false;
var DISABLED_DATES_DOC_LINK = "https://www.telerik.com/kendo-angular-ui/components/dateinputs/calendar/disabled-dates/";
var DisabledDatesService = class _DisabledDatesService {
  /**
   * Emits every time the `isDateDisabled` method changes.
   */
  changes = new Subject();
  /**
   * Based on the user-defined `disabledDates` input evaluates if the date is disabled.
   * If not set, returns `false`.
   */
  isDateDisabled = noop$1;
  /**
   * Configures the `isDateDisabled` function.
   *
   * * If a function is provided, uses it as-is and passes each date to it for evaluation.
   * The time part is set to `midnight`.
   * * If a `Date[]` is provided, creates a function that checks the targeted date against
   * the listed dates and, if the targeted date is listed, marks it as disabled.
   * * If a `Day[]` is provided, creates a function that evaluates the provided days of the
   * week as disabled.
   */
  initialize(disabledDates) {
    if (typeof disabledDates === "function") {
      this.isDateDisabled = (date) => disabledDates(getDate(date));
    } else if (isNumberArray(disabledDates)) {
      const disabledWeekDays = new Set(disabledDates);
      this.isDateDisabled = (date) => disabledWeekDays.has(date.getDay());
    } else if (isDateArray(disabledDates)) {
      const normalizedDisabledDates = new Set(disabledDates.map((date) => getDate(date).getTime()));
      this.isDateDisabled = (date) => normalizedDisabledDates.has(getDate(date).getTime());
    } else {
      this.isDateDisabled = noop$1;
      this.notifyInvalidInput(disabledDates);
    }
    this.notifyServiceChange();
  }
  notifyInvalidInput(disabledDates) {
    if (isPresent2(disabledDates) && isDevMode()) {
      throw new Error(`The 'disabledDates' value should be a function, a Day array or a Date array. Check ${DISABLED_DATES_DOC_LINK} for more information.`);
    }
  }
  notifyServiceChange() {
    this.changes.next();
  }
  static ɵfac = function DisabledDatesService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DisabledDatesService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _DisabledDatesService,
    factory: _DisabledDatesService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DisabledDatesService, [{
    type: Injectable
  }], null, null);
})();
var closestInScope = (node, predicate, scope) => {
  while (node && node !== scope && !predicate(node)) {
    node = node.parentNode;
  }
  if (node !== scope) {
    return node;
  }
};
var closest = (node, predicate) => {
  while (node && !predicate(node)) {
    node = node.parentNode;
  }
  return node;
};
var ViewComponent = class _ViewComponent {
  bus;
  intl;
  cdr;
  element;
  zone;
  renderer;
  disabledDatesService;
  allowReverse;
  showOtherMonthDays;
  direction = "vertical";
  isActive = true;
  activeView;
  cellUID;
  focusedDate;
  viewDate;
  activeRangeEnd;
  selectionRange;
  min;
  max;
  selectedDates = [];
  get weekNumber() {
    return this.showWeekNumbers && this.activeView === CalendarViewEnum.month;
  }
  set weekNumber(showWeekNumbers) {
    this.showWeekNumbers = showWeekNumbers;
  }
  viewIndex;
  templateRef;
  weekNumberTemplateRef;
  headerTitle;
  cellClick = new EventEmitter();
  weekNumberCellClick = new EventEmitter();
  cellEnter = new EventEmitter();
  cellLeave = new EventEmitter();
  focusedCellId = new EventEmitter();
  get ariaHidden() {
    return this.headerTitle === this.title ? null : true;
  }
  colSpan = 0;
  data;
  service;
  title;
  subscriptions = new Subscription();
  showWeekNumbers;
  domEvents = [];
  currentCellIndex;
  constructor(bus, intl, cdr, element, zone, renderer, disabledDatesService) {
    this.bus = bus;
    this.intl = intl;
    this.cdr = cdr;
    this.element = element;
    this.zone = zone;
    this.renderer = renderer;
    this.disabledDatesService = disabledDatesService;
    this.subscriptions.add(this.intl.changes.subscribe(this.intlChange.bind(this)));
    this.subscriptions.add(this.disabledDatesService.changes.subscribe(this.disabledDatesChange.bind(this)));
  }
  ngOnInit() {
    if (this.element) {
      this.zone.runOutsideAngular(() => {
        this.bindEvents();
      });
    }
  }
  ngOnChanges(changes) {
    this.service = this.bus.service(this.activeView);
    if (!this.service) {
      return;
    }
    this.colSpan = this.service.rowLength({
      prependCell: this.weekNumber
    });
    this.title = this.service.title(this.viewDate);
    this.updateData();
    if (changes.activeView) {
      this.currentCellIndex = null;
    }
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
    this.domEvents.forEach((unsubscribeCallback) => unsubscribeCallback());
  }
  isHorizontal() {
    return this.direction === "horizontal";
  }
  isMonthView() {
    return this.activeView === CalendarViewEnum.month;
  }
  shouldRenderCellContent(cellCtx) {
    return isPresent2(cellCtx) && (!cellCtx.isOtherMonth || cellCtx.isOtherMonth && this.showOtherMonthDays);
  }
  firstDate(rowCtx) {
    const ctx = this.firstWeekDateContext(rowCtx);
    return ctx ? ctx.value : null;
  }
  getWeekNumber(date) {
    if (!this.weekNumber) {
      return null;
    }
    return weekInYear(date, this.intl.firstDay());
  }
  getWeekNumberContext(rowCtx) {
    const ctx = this.firstWeekDateContext(rowCtx);
    if (!this.weekNumber || !ctx) {
      return null;
    }
    const weekNumber = weekInYear(ctx.value, this.intl.firstDay()).toString();
    return {
      formattedValue: weekNumber,
      id: null,
      isFocused: false,
      isSelected: false,
      isWeekend: false,
      title: weekNumber,
      value: cloneDate(ctx.value)
    };
  }
  getStyles(context) {
    if (!context.isOtherMonth && this.isActive && context.isFocused) {
      this.focusedCellId.emit(context.id);
    }
    const {
      isRangeEnd,
      isRangeStart
    } = context;
    const isEndActive = this.activeRangeEnd === "end" && isRangeEnd;
    const isStartActive = this.activeRangeEnd === "start" && isRangeStart;
    return stringifyClassObject({
      "k-range-end": !context.isOtherMonth && isRangeEnd,
      "k-range-mid": !context.isOtherMonth && context.isRangeMid,
      "k-range-split-end": !context.isOtherMonth && context.isRangeSplitEnd,
      "k-range-split-start": !context.isOtherMonth && context.isRangeSplitStart,
      "k-range-start": !context.isOtherMonth && isRangeStart,
      "k-active": isStartActive || isEndActive,
      "k-focus": !context.isOtherMonth && this.isActive && context.isFocused,
      "k-selected": !context.isOtherMonth && (context.isSelected || isRangeStart || isRangeEnd),
      "k-today": !context.isOtherMonth && context.isToday,
      "k-weekend": context.isWeekend,
      "k-disabled": context.isDisabled,
      "k-other-month": context.isOtherMonth
    });
  }
  tableCellIndex(rowIndex, cellIndex) {
    return `${rowIndex}:${cellIndex}`;
  }
  handleWeekNumberClick(week) {
    const availableDates = week.filter((day) => day).map((item) => item.value).filter((date) => !this.disabledDatesService.isDateDisabled(date));
    this.weekNumberCellClick.emit(availableDates);
  }
  getMonthLabel(date) {
    return this.activeView === 1 ? this.intl.formatDate(date, "MMMM") : null;
  }
  firstWeekDateContext(rowCtx) {
    if (!this.weekNumber) {
      return null;
    }
    let idx = 0;
    let ctx = this.shouldRenderCellContent(rowCtx[idx]) ? rowCtx[idx] : null;
    while (!ctx && idx < rowCtx.length) {
      const cellCtx = rowCtx[++idx];
      ctx = this.shouldRenderCellContent(cellCtx) ? cellCtx : null;
    }
    return ctx;
  }
  updateData() {
    const time = last(this.selectedDates) || getToday();
    const viewDate = setTime(this.viewDate, time);
    this.data = this.service.data({
      cellUID: this.cellUID,
      focusedDate: this.focusedDate,
      isActiveView: !this.bus.canMoveDown(this.activeView),
      max: this.max,
      min: this.min,
      selectedDates: this.selectedDates,
      selectionRange: this.selectionRange,
      viewDate,
      isDateDisabled: this.disabledDatesService.isDateDisabled,
      direction: this.direction,
      allowReverse: this.allowReverse
    });
  }
  intlChange() {
    this.updateData();
    this.cdr.markForCheck();
  }
  disabledDatesChange() {
    this.updateData();
    this.cdr.markForCheck();
  }
  bindEvents() {
    const element = this.element.nativeElement;
    this.domEvents.push(this.renderer.listen(element, "mouseover", this.cellMouseoverHandler.bind(this)), this.renderer.listen(element, "mouseleave", this.mouseLeaveHandler.bind(this)), this.renderer.listen(element, "click", this.clickHandler.bind(this)));
  }
  clickHandler(args) {
    const cell = this.closestCell(args);
    if (!cell) {
      return;
    }
    const index = cell.getAttribute("data-cell-index");
    const cellContext = this.cellByIndex(index);
    if (!cellContext.isDisabled) {
      const {
        ctrlKey,
        metaKey,
        shiftKey
      } = args;
      this.cellClick.emit({
        date: cellContext.value,
        modifiers: {
          ctrlKey,
          metaKey,
          shiftKey
        }
      });
    }
  }
  mouseLeaveHandler() {
    if (this.currentCellIndex) {
      this.emitCellLeave();
    }
  }
  cellMouseoverHandler(args) {
    const cell = this.closestCell(args);
    if (cell) {
      const index = cell.getAttribute("data-cell-index");
      if (this.currentCellIndex && this.currentCellIndex !== index) {
        this.emitCellLeave();
      }
      const value = this.cellByIndex(index).value;
      this.cellEnter.emit(value);
      this.currentCellIndex = index;
    } else if (this.currentCellIndex) {
      this.emitCellLeave();
    }
  }
  closestCell(eventArgs) {
    return closestInScope(eventArgs.target, (node) => node.hasAttribute("data-cell-index"), this.element.nativeElement);
  }
  emitCellLeave() {
    const item = this.cellByIndex(this.currentCellIndex);
    if (item) {
      this.cellLeave.emit(item.value);
    }
    this.currentCellIndex = null;
  }
  cellByIndex(index) {
    const [rowIndex, cellIndex] = index.split(":");
    return this.data[rowIndex][cellIndex];
  }
  static ɵfac = function ViewComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewComponent)(ɵɵdirectiveInject(BusViewService), ɵɵdirectiveInject(IntlService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(DisabledDatesService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _ViewComponent,
    selectors: [["", "kendoCalendarView", ""]],
    inputs: {
      allowReverse: "allowReverse",
      showOtherMonthDays: "showOtherMonthDays",
      direction: "direction",
      isActive: "isActive",
      activeView: "activeView",
      cellUID: "cellUID",
      focusedDate: "focusedDate",
      viewDate: "viewDate",
      activeRangeEnd: "activeRangeEnd",
      selectionRange: "selectionRange",
      min: "min",
      max: "max",
      selectedDates: "selectedDates",
      weekNumber: "weekNumber",
      viewIndex: "viewIndex",
      templateRef: "templateRef",
      weekNumberTemplateRef: "weekNumberTemplateRef",
      headerTitle: "headerTitle"
    },
    outputs: {
      cellClick: "cellClick",
      weekNumberCellClick: "weekNumberCellClick",
      cellEnter: "cellEnter",
      cellLeave: "cellLeave",
      focusedCellId: "focusedCellId"
    },
    standalone: true,
    features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    attrs: _c0,
    decls: 2,
    vars: 2,
    consts: [["role", "row", 1, "k-calendar-tr"], ["class", "k-calendar-tr", "role", "row", 4, "kFor", "kForOf"], ["scope", "col", 1, "k-calendar-caption", 3, "colSpan"], [4, "kFor", "kForOf"], ["role", "gridcell", 1, "k-alt", "k-calendar-td"], ["role", "gridcell", 1, "k-empty", "k-calendar-td"], ["role", "gridcell", 1, "k-alt", "k-calendar-td", 3, "click"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["role", "gridcell", 1, "k-calendar-td", 3, "ngClass", "title"], [1, "k-link"]],
    template: function ViewComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, ViewComponent_Conditional_0_Template, 3, 3, "tr", 0)(1, ViewComponent_tr_1_Template, 3, 2, "tr", 1);
      }
      if (rf & 2) {
        ɵɵconditional(!ctx.isHorizontal() ? 0 : -1);
        ɵɵadvance();
        ɵɵproperty("kForOf", ctx.data);
      }
    },
    dependencies: [KForOf, NgTemplateOutlet, NgClass],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewComponent, [{
    type: Component,
    args: [{
      // eslint-disable-next-line
      selector: "[kendoCalendarView]",
      template: `
@if (!isHorizontal()) {
  <tr class="k-calendar-tr" role="row" [attr.aria-hidden]="ariaHidden"><th class="k-calendar-caption" scope="col" [colSpan]="colSpan">{{title}}</th></tr>
}
<tr *kFor="let row of data; let rowIndex = index" class="k-calendar-tr" role="row">
  @if (weekNumber) {
    @if (firstDate(row)) {
      <td
        class="k-alt k-calendar-td"
        role="gridcell"
        (click)="handleWeekNumberClick(row)"
        >
        @if (!weekNumberTemplateRef) {
          {{getWeekNumber(firstDate(row))}}
        }
        @if (weekNumberTemplateRef) {
          <ng-template
            [ngTemplateOutlet]="weekNumberTemplateRef"
                    [ngTemplateOutletContext]="{
                        $implicit: firstDate(row),
                        cellContext: getWeekNumberContext(row)
                    }"
          ></ng-template>
        }
      </td>
    } @else {
      <td class="k-empty k-calendar-td" role="gridcell">&nbsp;</td>
    }
  }
  <ng-container *kFor="let cell of row; let cellIndex = index">
    @if (shouldRenderCellContent(cell)) {
      <td class="k-calendar-td"
        role="gridcell"
        [attr.id]="cell.id"
        [attr.data-cell-index]="tableCellIndex(rowIndex, cellIndex)"
        [attr.aria-selected]="cell.isSelected || cell.isRangeStart || cell.isRangeMid || cell.isRangeEnd"
        [attr.aria-disabled]="cell.isDisabled"
        [attr.aria-label]="getMonthLabel(cell.value)"
        [ngClass]="getStyles(cell)"
        [title]="cell.title"
        >
        <span class="k-link">
          @if (!templateRef) {{{cell.formattedValue}}}
          @if (templateRef) {
            <ng-template
              [ngTemplateOutlet]="templateRef"
              [ngTemplateOutletContext]="{ $implicit: cell.value, cellContext: cell }"
            ></ng-template>
          }
        </span>
      </td>
    } @else {
      <td class="k-empty k-calendar-td" role="gridcell">&nbsp;</td>
    }
  </ng-container>
</tr>
`,
      standalone: true,
      imports: [KForOf, NgTemplateOutlet, NgClass]
    }]
  }], () => [{
    type: BusViewService
  }, {
    type: IntlService
  }, {
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }, {
    type: Renderer2
  }, {
    type: DisabledDatesService
  }], {
    allowReverse: [{
      type: Input
    }],
    showOtherMonthDays: [{
      type: Input
    }],
    direction: [{
      type: Input
    }],
    isActive: [{
      type: Input
    }],
    activeView: [{
      type: Input
    }],
    cellUID: [{
      type: Input
    }],
    focusedDate: [{
      type: Input
    }],
    viewDate: [{
      type: Input
    }],
    activeRangeEnd: [{
      type: Input
    }],
    selectionRange: [{
      type: Input
    }],
    min: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    selectedDates: [{
      type: Input
    }],
    weekNumber: [{
      type: Input
    }],
    viewIndex: [{
      type: Input
    }],
    templateRef: [{
      type: Input
    }],
    weekNumberTemplateRef: [{
      type: Input
    }],
    headerTitle: [{
      type: Input
    }],
    cellClick: [{
      type: Output
    }],
    weekNumberCellClick: [{
      type: Output
    }],
    cellEnter: [{
      type: Output
    }],
    cellLeave: [{
      type: Output
    }],
    focusedCellId: [{
      type: Output
    }]
  });
})();
var DEFAULT_VIEWS_LENGTH = 2;
var HorizontalViewListComponent = class _HorizontalViewListComponent {
  bus;
  intl;
  cdr;
  element;
  renderer;
  handleMultiViewCalendarFocus() {
    this.focusCalendar.emit();
  }
  handleMultiViewCalendarBlur(event) {
    this.blurCalendar.emit(event);
  }
  /**
   * Needed for the MultiViewCalendar used in the Scheduler Year view
   */
  showOtherMonthDays = true;
  cellTemplateRef;
  weekNumberTemplateRef;
  allowReverse;
  activeRangeEnd;
  activeView = CalendarViewEnum.month;
  cellUID;
  focusedDate;
  isActive = true;
  min = new Date(MIN_DATE);
  max = new Date(MAX_DATE);
  selectionRange;
  selectedDates = [];
  views = DEFAULT_VIEWS_LENGTH;
  showViewHeader = false;
  animateNavigation = false;
  orientation = "horizontal";
  activeDescendant;
  tabIndex = 0;
  disabled = false;
  id;
  weekDaysFormat = "short";
  get weekNumber() {
    return this.showWeekNumbers && this.isMonthView();
  }
  set weekNumber(showWeekNumbers) {
    this.showWeekNumbers = showWeekNumbers;
  }
  cellClick = new EventEmitter();
  weekNumberCellClick = new EventEmitter();
  cellEnter = new EventEmitter();
  cellLeave = new EventEmitter();
  activeDateChange = new EventEmitter();
  focusCalendar = new EventEmitter();
  blurCalendar = new EventEmitter();
  focusedCellChange = new EventEmitter();
  getComponentClass = true;
  get horizontalHostClass() {
    return this.orientation === "horizontal";
  }
  get verticalHostClass() {
    return this.orientation === "vertical";
  }
  get getComponentMonthClass() {
    return this.activeView === CalendarViewEnum.month;
  }
  get getComponentYearClass() {
    return this.activeView === CalendarViewEnum.year;
  }
  get getComponentDecadeClass() {
    return this.activeView === CalendarViewEnum.decade;
  }
  get getComponentCenturyClass() {
    return this.activeView === CalendarViewEnum.century;
  }
  get role() {
    return this.views >= 2 ? "grid" : null;
  }
  get tabindex() {
    return this.views >= 2 ? "0" : null;
  }
  get getActiveDescendant() {
    return this.views === 1 ? this.activeDescendant : null;
  }
  get getTabIndex() {
    return this.disabled || this.views >= 2 ? null : this.tabIndex;
  }
  service;
  weekNames = [];
  wideWeekNames = [];
  activeDate;
  dates = [];
  skip;
  total;
  nextAnimationDate;
  prevAnimationDate;
  showWeekNumbers;
  intlSubscription;
  animation;
  constructor(bus, intl, cdr, element, renderer) {
    this.bus = bus;
    this.intl = intl;
    this.cdr = cdr;
    this.element = element;
    this.renderer = renderer;
    this.intlSubscription = this.intl.changes.subscribe(this.intlChange.bind(this));
  }
  ngOnChanges(changes) {
    this.initService();
    if (this.weekNames.length === 0 || changes.weekNumber) {
      this.weekNames = this.getWeekNames(this.weekDaysFormat);
      this.wideWeekNames = this.getWeekNames("wide");
    }
    if (changes.weekDaysFormat && this.weekNames.length !== 0 && !changes.weekNumber) {
      this.weekNames = this.getWeekNames(this.weekDaysFormat);
    }
    if (!this.service) {
      return;
    }
    this.views = this.views || DEFAULT_VIEWS_LENGTH;
    const focusedDate = this.focusedDate;
    const viewDate = this.clampDate(this.service.viewDate(focusedDate, this.max, this.views));
    this.skip = this.service.skip(viewDate, this.min);
    this.total = this.service.total(this.min, this.max);
    const activeViewChanged = hasChange(changes, "activeView");
    const viewsHasChanged = this.views > 0 && hasChange(changes, "views");
    if (activeViewChanged || !this.isInDates(focusedDate) || viewsHasChanged || !this.activeDate) {
      this.dates = this.service.datesList(viewDate, this.getTake(this.skip));
      this.activeDate = cloneDate(this.dates[0]);
      this.activeDateChange.emit(this.activeDate);
    }
    this.setAriaActivedescendant();
    if (this.views >= 2) {
      this.renderer.setAttribute(this.element.nativeElement, "tabindex", this.tabIndex.toString());
    }
  }
  ngOnDestroy() {
    this.intlSubscription.unsubscribe();
  }
  initService() {
    this.service = this.bus.service(this.activeView);
  }
  isMonthView() {
    return this.activeView === CalendarViewEnum.month;
  }
  getCaptionTitle(date) {
    return this.service.title(date);
  }
  handleClassicCalendarFocus() {
    this.focusCalendar.emit();
  }
  handleClassicCalendarBlur(event) {
    this.blurCalendar.emit(event);
  }
  animateView(action) {
    const container = this.element.nativeElement;
    const table2 = container.querySelector("table");
    const initialContainerWidth = parseFloat(getComputedStyle(container).width);
    const tableWidth = parseFloat(getComputedStyle(table2).width);
    this.renderer.setStyle(container, "width", `${initialContainerWidth}px`);
    this.renderer.setStyle(container, "overflow", "visible");
    if (action === Action.NextView) {
      this.nextAnimationDate = cloneDate(this.dates[0]);
    } else {
      this.prevAnimationDate = cloneDate(this.dates[this.dates.length - 1]);
    }
    this.cdr.detectChanges();
    container.querySelectorAll("table").forEach((table3) => {
      this.renderer.setStyle(table3, "width", `${tableWidth}px`);
    });
    const tabRect = table2.getBoundingClientRect();
    const containerGap = parseFloat(getComputedStyle(container).columnGap);
    const start = action === Action.NextView ? "translateX(0)" : `translateX(-${tabRect.width + containerGap}px)`;
    const end = action === Action.NextView ? `translateX(-${tabRect.width + containerGap}px)` : "translateX(0)";
    if (!this.animation) {
      this.animation = container.animate([{
        transform: start
      }, {
        transform: end
      }], {
        duration: 500,
        easing: "ease-out"
      });
      this.animation.oncancel = this.animation.onfinish = () => {
        this.renderer.removeStyle(container, "width");
        this.renderer.removeStyle(container, "overflow");
        container.querySelectorAll("table").forEach((table3) => {
          this.renderer.removeStyle(table3, "width");
        });
        this.animation = null;
        this.nextAnimationDate = null;
        this.prevAnimationDate = null;
        this.cdr.detectChanges();
      };
    } else {
      this.animation.cancel();
    }
  }
  navigate(action) {
    if (this.animateNavigation && isDocumentAvailable() && isPresent2(this.element.nativeElement.animate)) {
      this.animateView(action);
    }
    const candidate = this.move(action);
    const list2 = this.service.datesList(candidate, this.getTake(this.skip));
    if (this.isListInRange(list2)) {
      this.dates = list2;
    }
    this.activeDate = cloneDate(this.dates[0]);
    this.focusedDate = cloneDate(candidate);
    this.cdr.markForCheck();
    this.activeDateChange.emit(this.activeDate);
    return cloneDate(candidate);
  }
  canNavigate(action) {
    if (!this.service) {
      return false;
    }
    return this.isListInRange(this.service.datesList(this.move(action), this.getTake(this.skip)));
  }
  getWeekNames(type) {
    const weekNames = shiftWeekNames(this.intl.dateFormatNames({
      nameType: type,
      type: "days"
    }), this.intl.firstDay());
    return this.weekNumber ? [""].concat(weekNames) : weekNames;
  }
  intlChange() {
    this.weekNames = this.getWeekNames(this.weekDaysFormat);
    this.wideWeekNames = this.getWeekNames("wide");
    this.cdr.markForCheck();
  }
  clampDate(value) {
    return dateInRange(value, this.min, this.max);
  }
  move(action) {
    return this.service.move(this.dates[0] || this.focusedDate, action);
  }
  isListInRange(list2) {
    const lowerBound = this.service.beginningOfPeriod(this.min);
    const upperBound = this.service.beginningOfPeriod(this.service.addToDate(this.max, 1));
    return lowerBound <= list2[0] && list2[list2.length - 1] < upperBound;
  }
  isInDates(value) {
    return this.service.isInArray(value, this.dates);
  }
  getTake(skip) {
    return Math.min(this.total - skip, this.views);
  }
  setAriaActivedescendant() {
    if (this.views >= 2) {
      this.renderer.setAttribute(this.element.nativeElement, attributeNames.ariaActiveDescendant, this.activeDescendant);
    }
  }
  static ɵfac = function HorizontalViewListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HorizontalViewListComponent)(ɵɵdirectiveInject(BusViewService), ɵɵdirectiveInject(IntlService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _HorizontalViewListComponent,
    selectors: [["kendo-calendar-horizontal"]],
    hostVars: 20,
    hostBindings: function HorizontalViewListComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("focus", function HorizontalViewListComponent_focus_HostBindingHandler() {
          return ctx.handleMultiViewCalendarFocus();
        })("blur", function HorizontalViewListComponent_blur_HostBindingHandler($event) {
          return ctx.handleMultiViewCalendarBlur($event);
        });
      }
      if (rf & 2) {
        ɵɵattribute("role", ctx.role)("tabindex", ctx.tabindex);
        ɵɵclassProp("k-calendar-view", ctx.getComponentClass)("k-align-items-start", ctx.getComponentClass)("k-justify-content-center", ctx.getComponentClass)("k-hstack", ctx.horizontalHostClass)("k-vstack", ctx.verticalHostClass)("k-calendar-monthview", ctx.getComponentMonthClass)("k-calendar-yearview", ctx.getComponentYearClass)("k-calendar-decadeview", ctx.getComponentDecadeClass)("k-calendar-centuryview", ctx.getComponentCenturyClass);
      }
    },
    inputs: {
      showOtherMonthDays: "showOtherMonthDays",
      cellTemplateRef: "cellTemplateRef",
      weekNumberTemplateRef: "weekNumberTemplateRef",
      allowReverse: "allowReverse",
      activeRangeEnd: "activeRangeEnd",
      activeView: "activeView",
      cellUID: "cellUID",
      focusedDate: "focusedDate",
      isActive: "isActive",
      min: "min",
      max: "max",
      selectionRange: "selectionRange",
      selectedDates: "selectedDates",
      views: "views",
      showViewHeader: "showViewHeader",
      animateNavigation: "animateNavigation",
      orientation: "orientation",
      activeDescendant: "activeDescendant",
      tabIndex: "tabIndex",
      disabled: "disabled",
      id: "id",
      weekDaysFormat: "weekDaysFormat",
      weekNumber: "weekNumber"
    },
    outputs: {
      cellClick: "cellClick",
      weekNumberCellClick: "weekNumberCellClick",
      cellEnter: "cellEnter",
      cellLeave: "cellLeave",
      activeDateChange: "activeDateChange",
      focusCalendar: "focusCalendar",
      blurCalendar: "blurCalendar",
      focusedCellChange: "focusedCellChange"
    },
    standalone: true,
    features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    decls: 5,
    vars: 3,
    consts: [["tableTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "kFor", "kForOf"], [1, "k-calendar-table", 3, "focus", "blur", "ngClass"], [1, "k-calendar-caption"], ["role", "rowgroup", 1, "k-calendar-thead"], ["kendoCalendarView", "", "role", "rowgroup", "direction", "horizontal", 1, "k-calendar-tbody", 3, "cellClick", "weekNumberCellClick", "cellEnter", "cellLeave", "focusedCellId", "allowReverse", "showOtherMonthDays", "activeView", "isActive", "min", "max", "cellUID", "focusedDate", "selectedDates", "selectionRange", "activeRangeEnd", "weekNumber", "templateRef", "weekNumberTemplateRef", "viewDate"], ["role", "row", 1, "k-calendar-tr"], ["scope", "col", "role", "columnheader", 1, "k-calendar-th"]],
    template: function HorizontalViewListComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, HorizontalViewListComponent_ng_template_0_Template, 4, 22, "ng-template", null, 0, ɵɵtemplateRefExtractor)(2, HorizontalViewListComponent_Conditional_2_Template, 1, 4, null, 1)(3, HorizontalViewListComponent_3_Template, 1, 4, null, 2)(4, HorizontalViewListComponent_Conditional_4_Template, 1, 4, null, 1);
      }
      if (rf & 2) {
        ɵɵadvance(2);
        ɵɵconditional(ctx.nextAnimationDate ? 2 : -1);
        ɵɵadvance();
        ɵɵproperty("kForOf", ctx.dates);
        ɵɵadvance();
        ɵɵconditional(ctx.prevAnimationDate ? 4 : -1);
      }
    },
    dependencies: [NgClass, ViewComponent, NgTemplateOutlet, KForOf],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HorizontalViewListComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-calendar-horizontal",
      template: `
        <ng-template #tableTemplate let-date="date" let-class="className">
          <table
            [attr.role]="views >= 2 ? 'none' : 'grid'"
            class="k-calendar-table"
            [ngClass]="class"
            [attr.aria-labelledby]="id"
            [attr.aria-activedescendant]="getActiveDescendant"
            [attr.tabindex]="getTabIndex"
            (focus)="handleClassicCalendarFocus()"
            (blur)="handleClassicCalendarBlur($event)"
            >
            @if (showViewHeader) {
              <caption class="k-calendar-caption">{{ getCaptionTitle(date) }}</caption>
            }
            @if (isMonthView()) {
              <thead class="k-calendar-thead" role="rowgroup">
                <tr class="k-calendar-tr" role="row">
                  @for (name of weekNames; track $index; let i = $index) {
                    <th
                      class="k-calendar-th"
                      scope="col"
                      [attr.aria-label]="wideWeekNames[i]"
                      role="columnheader"
                    >{{name}}</th>
                  }
                </tr>
              </thead>
            }
            <tbody
              class="k-calendar-tbody"
              kendoCalendarView
              [allowReverse]="allowReverse"
              [showOtherMonthDays]="showOtherMonthDays"
              role="rowgroup"
              direction="horizontal"
              [activeView]="activeView"
              [isActive]="isActive"
              [min]="min"
              [max]="max"
              [cellUID]="cellUID"
              [focusedDate]="focusedDate"
              [selectedDates]="selectedDates"
              [selectionRange]="selectionRange"
              [activeRangeEnd]="activeRangeEnd"
              [weekNumber]="weekNumber"
              [templateRef]="cellTemplateRef"
              [weekNumberTemplateRef]="weekNumberTemplateRef"
              [viewDate]="date"
              (cellClick)="cellClick.emit($event)"
              (weekNumberCellClick)="weekNumberCellClick.emit($event)"
              (cellEnter)="cellEnter.emit($event)"
              (cellLeave)="cellLeave.emit($event)"
              (focusedCellId)="focusedCellChange.emit($event)"
              >
            </tbody>
          </table>
        </ng-template>

        <!-- When Next is clicked a placeholder table is rendered before the Main Table -->
        @if (nextAnimationDate) {
          <ng-template
            [ngTemplateOutlet]="tableTemplate"
            [ngTemplateOutletContext]="{
                date: nextAnimationDate,
                className: 'k-pointer-events-none'
            }"
            >
          </ng-template>
        }

        <ng-template
          *kFor="let date of dates"
          [ngTemplateOutlet]="tableTemplate"
            [ngTemplateOutletContext]="{
                date: date
            }"
          >
        </ng-template>

        <!-- When Prev is clicked a placeholder table is rendered after the Main Table -->
        @if (prevAnimationDate) {
          <ng-template
            [ngTemplateOutlet]="tableTemplate"
            [ngTemplateOutletContext]="{
                date: prevAnimationDate,
                className: 'k-pointer-events-none'
            }"
            >
          </ng-template>
        }
        `,
      standalone: true,
      imports: [NgClass, ViewComponent, NgTemplateOutlet, KForOf]
    }]
  }], () => [{
    type: BusViewService
  }, {
    type: IntlService
  }, {
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }], {
    handleMultiViewCalendarFocus: [{
      type: HostListener,
      args: ["focus"]
    }],
    handleMultiViewCalendarBlur: [{
      type: HostListener,
      args: ["blur", ["$event"]]
    }],
    showOtherMonthDays: [{
      type: Input
    }],
    cellTemplateRef: [{
      type: Input
    }],
    weekNumberTemplateRef: [{
      type: Input
    }],
    allowReverse: [{
      type: Input
    }],
    activeRangeEnd: [{
      type: Input
    }],
    activeView: [{
      type: Input
    }],
    cellUID: [{
      type: Input
    }],
    focusedDate: [{
      type: Input
    }],
    isActive: [{
      type: Input
    }],
    min: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    selectionRange: [{
      type: Input
    }],
    selectedDates: [{
      type: Input
    }],
    views: [{
      type: Input
    }],
    showViewHeader: [{
      type: Input
    }],
    animateNavigation: [{
      type: Input
    }],
    orientation: [{
      type: Input
    }],
    activeDescendant: [{
      type: Input
    }],
    tabIndex: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    weekDaysFormat: [{
      type: Input
    }],
    weekNumber: [{
      type: Input
    }],
    cellClick: [{
      type: Output
    }],
    weekNumberCellClick: [{
      type: Output
    }],
    cellEnter: [{
      type: Output
    }],
    cellLeave: [{
      type: Output
    }],
    activeDateChange: [{
      type: Output
    }],
    focusCalendar: [{
      type: Output
    }],
    blurCalendar: [{
      type: Output
    }],
    focusedCellChange: [{
      type: Output
    }],
    getComponentClass: [{
      type: HostBinding,
      args: ["class.k-calendar-view"]
    }, {
      type: HostBinding,
      args: ["class.k-align-items-start"]
    }, {
      type: HostBinding,
      args: ["class.k-justify-content-center"]
    }],
    horizontalHostClass: [{
      type: HostBinding,
      args: ["class.k-hstack"]
    }],
    verticalHostClass: [{
      type: HostBinding,
      args: ["class.k-vstack"]
    }],
    getComponentMonthClass: [{
      type: HostBinding,
      args: ["class.k-calendar-monthview"]
    }],
    getComponentYearClass: [{
      type: HostBinding,
      args: ["class.k-calendar-yearview"]
    }],
    getComponentDecadeClass: [{
      type: HostBinding,
      args: ["class.k-calendar-decadeview"]
    }],
    getComponentCenturyClass: [{
      type: HostBinding,
      args: ["class.k-calendar-centuryview"]
    }],
    role: [{
      type: HostBinding,
      args: ["attr.role"]
    }],
    tabindex: [{
      type: HostBinding,
      args: ["attr.tabindex"]
    }]
  });
})();
var HeaderComponent = class _HeaderComponent {
  bus;
  cdr;
  localization;
  intl;
  disabledDatesService;
  /**
   * @hidden
   */
  chevronRightIcon = chevronRightIcon;
  /**
   * @hidden
   */
  chevronLeftIcon = chevronLeftIcon;
  navigate = true;
  todayAvailable = true;
  activeViewValue;
  todayMessage;
  title;
  prevButtonTitle;
  nextButtonTitle;
  parentViewButtonTitle;
  activeView;
  currentDate;
  min = new Date(MIN_DATE);
  max = new Date(MAX_DATE);
  rangeLength = 1;
  titleTemplateRef;
  headerTemplateRef;
  isPrevDisabled = true;
  isNextDisabled = true;
  showNavigationButtons = false;
  orientation = "horizontal";
  id;
  size;
  todayButtonClick = new EventEmitter();
  prevButtonClick = new EventEmitter();
  nextButtonClick = new EventEmitter();
  getComponentClass = true;
  get verticalHostClass() {
    return this.orientation === "vertical";
  }
  subscriptions = new Subscription();
  constructor(bus, cdr, localization, intl, disabledDatesService) {
    this.bus = bus;
    this.cdr = cdr;
    this.localization = localization;
    this.intl = intl;
    this.disabledDatesService = disabledDatesService;
  }
  ngOnInit() {
    this.subscriptions.add(this.intl.changes.subscribe(this.intlChange.bind(this)));
    this.subscriptions.add(this.localization.changes.subscribe(this.l10nChange.bind(this)));
    this.subscriptions.add(this.disabledDatesService.changes.subscribe(this.setTodayAvailability.bind(this)));
  }
  ngOnChanges() {
    const service = this.bus.service(this.activeView);
    if (!service) {
      return;
    }
    this.activeViewValue = CalendarViewEnum[this.activeView];
    this.todayMessage = this.localization.get("today");
    this.parentViewButtonTitle = this.localization.get("parentViewButtonTitle");
    this.setTodayAvailability();
    this.navigate = this.bus.canMoveUp(this.activeView);
    this.title = this.getTitle();
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  handleTodayClick() {
    if (!this.todayAvailable) {
      return;
    }
    this.bus.moveToBottom(this.activeView);
    this.todayButtonClick.emit(dateInRange(getToday(), this.min, this.max));
  }
  handleNavigation() {
    if (!this.navigate) {
      return;
    }
    this.bus.moveUp(this.activeView);
  }
  isDisabled() {
    return this.navigate ? null : "";
  }
  intlChange() {
    if (this.currentDate && this.bus.service(this.activeView)) {
      this.title = this.getTitle();
      this.cdr.markForCheck();
    }
  }
  l10nChange() {
    this.prevButtonTitle = this.localization.get("prevButtonTitle");
    this.nextButtonTitle = this.localization.get("nextButtonTitle");
    this.parentViewButtonTitle = this.localization.get("parentViewButtonTitle");
    this.todayMessage = this.localization.get("today");
    this.cdr.markForCheck();
  }
  getTitle() {
    if (!this.currentDate) {
      return "";
    }
    const service = this.bus.service(this.activeView);
    const take = this.rangeLength - 1;
    const title = service.title(this.currentDate);
    const nextDate = service.addToDate(this.currentDate, take);
    if (take < 1 || !service.isInRange(nextDate, this.min, this.max)) {
      return title;
    }
    return `${title} - ${service.title(nextDate)}`;
  }
  setTodayAvailability() {
    const today = getToday();
    const isTodayInRange = isInRange(today, getDate(this.min), getDate(this.max));
    const isDisabled = this.disabledDatesService.isDateDisabled(today);
    this.todayAvailable = isTodayInRange && !isDisabled;
    this.cdr.markForCheck();
  }
  static ɵfac = function HeaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HeaderComponent)(ɵɵdirectiveInject(BusViewService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(IntlService), ɵɵdirectiveInject(DisabledDatesService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _HeaderComponent,
    selectors: [["kendo-calendar-header"]],
    hostVars: 4,
    hostBindings: function HeaderComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("k-calendar-header", ctx.getComponentClass)("k-vstack", ctx.verticalHostClass);
      }
    },
    inputs: {
      activeView: "activeView",
      currentDate: "currentDate",
      min: "min",
      max: "max",
      rangeLength: "rangeLength",
      titleTemplateRef: "titleTemplateRef",
      headerTemplateRef: "headerTemplateRef",
      isPrevDisabled: "isPrevDisabled",
      isNextDisabled: "isNextDisabled",
      showNavigationButtons: "showNavigationButtons",
      orientation: "orientation",
      id: "id",
      size: "size"
    },
    outputs: {
      todayButtonClick: "todayButtonClick",
      prevButtonClick: "prevButtonClick",
      nextButtonClick: "nextButtonClick"
    },
    standalone: true,
    features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    decls: 2,
    vars: 1,
    consts: [[3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["kendoButton", "", "role", "button", "type", "button", "fillMode", "flat", "themeColor", "primary", "tabindex", "-1", 1, "k-calendar-title", 3, "id", "size", "disabled", "kendoEventsOutsideAngular", "title", "scope"], [1, "k-spacer"], [1, "k-calendar-nav"], ["kendoButton", "", "fillMode", "flat", "icon", "chevron-left", "tabindex", "-1", "type", "button", 1, "k-calendar-nav-prev", 3, "size", "svgIcon", "disabled", "title"], ["kendoButton", "", "fillMode", "flat", "role", "link", "type", "button", 1, "k-calendar-nav-today", 3, "size", "disabled", "kendoEventsOutsideAngular", "scope"], ["kendoButton", "", "fillMode", "flat", "icon", "chevron-right", "tabindex", "-1", "type", "button", 1, "k-calendar-nav-next", 3, "size", "svgIcon", "disabled", "title"], ["kendoButton", "", "fillMode", "flat", "icon", "chevron-left", "tabindex", "-1", "type", "button", 1, "k-calendar-nav-prev", 3, "click", "size", "svgIcon", "disabled", "title"], ["kendoButton", "", "fillMode", "flat", "icon", "chevron-right", "tabindex", "-1", "type", "button", 1, "k-calendar-nav-next", 3, "click", "size", "svgIcon", "disabled", "title"]],
    template: function HeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, HeaderComponent_Conditional_0_Template, 1, 6, null, 0)(1, HeaderComponent_Conditional_1_Template, 9, 19);
      }
      if (rf & 2) {
        ɵɵconditional(ctx.headerTemplateRef ? 0 : 1);
      }
    },
    dependencies: [NgTemplateOutlet, ButtonComponent, EventsOutsideAngularDirective],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeaderComponent, [{
    type: Component,
    args: [{
      selector: "kendo-calendar-header",
      template: `
    @if (headerTemplateRef) {
      <ng-template
        [ngTemplateOutlet]="headerTemplateRef"
        [ngTemplateOutletContext]="{ title: title, activeView: activeViewValue, date: currentDate }">
      </ng-template>
    } @else {
      <button
        kendoButton
        class="k-calendar-title"
        role="button"
        [id]="id"
        type="button"
        fillMode="flat"
        [size]="size"
        themeColor="primary"
        tabindex="-1"
        [disabled]="!navigate"
            [kendoEventsOutsideAngular]="{
                click: handleNavigation
            }"
        [title]="parentViewButtonTitle"
        [scope]="this">
        @if (!titleTemplateRef) {
          {{title}}
        }
        @if (titleTemplateRef) {
          <ng-template
            [ngTemplateOutlet]="titleTemplateRef"
            [ngTemplateOutletContext]="{ $implicit: title, activeView: activeViewValue, date: currentDate }"
          ></ng-template>
        }
      </button>
      <span class="k-spacer"></span>
      <span class="k-calendar-nav">
        @if (showNavigationButtons) {
          <button
            kendoButton
            fillMode="flat"
            [size]="size"
            [svgIcon]="chevronLeftIcon"
            icon="chevron-left"
            tabindex="-1"
            type="button"
            class="k-calendar-nav-prev"
            [attr.aria-disabled]="isPrevDisabled"
            [disabled]="isPrevDisabled"
            [title]="prevButtonTitle"
            (click)="prevButtonClick.emit()"
            >
          </button>
        }
        <button
          kendoButton
          class="k-calendar-nav-today"
          fillMode="flat"
          role="link"
          [size]="size"
          [disabled]="!todayAvailable"
                [kendoEventsOutsideAngular]="{
                    click: handleTodayClick
                }"
          [scope]="this"
          type="button"
          >
          {{ todayMessage }}
        </button>
        @if (showNavigationButtons) {
          <button
            kendoButton
            fillMode="flat"
            [size]="size"
            [svgIcon]="chevronRightIcon"
            icon="chevron-right"
            class="k-calendar-nav-next"
            tabindex="-1"
            type="button"
            [attr.aria-disabled]="isNextDisabled"
            [disabled]="isNextDisabled"
            [title]="nextButtonTitle"
            (click)="nextButtonClick.emit()"
            >
          </button>
        }
      </span>
    }
    `,
      standalone: true,
      imports: [NgTemplateOutlet, ButtonComponent, EventsOutsideAngularDirective]
    }]
  }], () => [{
    type: BusViewService
  }, {
    type: ChangeDetectorRef
  }, {
    type: LocalizationService
  }, {
    type: IntlService
  }, {
    type: DisabledDatesService
  }], {
    activeView: [{
      type: Input
    }],
    currentDate: [{
      type: Input
    }],
    min: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    rangeLength: [{
      type: Input
    }],
    titleTemplateRef: [{
      type: Input
    }],
    headerTemplateRef: [{
      type: Input
    }],
    isPrevDisabled: [{
      type: Input
    }],
    isNextDisabled: [{
      type: Input
    }],
    showNavigationButtons: [{
      type: Input
    }],
    orientation: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    todayButtonClick: [{
      type: Output
    }],
    prevButtonClick: [{
      type: Output
    }],
    nextButtonClick: [{
      type: Output
    }],
    getComponentClass: [{
      type: HostBinding,
      args: ["class.k-calendar-header"]
    }],
    verticalHostClass: [{
      type: HostBinding,
      args: ["class.k-vstack"]
    }]
  });
})();
var SelectionService = class _SelectionService {
  bus;
  constructor(bus) {
    this.bus = bus;
  }
  lastClicked;
  performSelection(args) {
    let {
      date,
      modifiers,
      selectionMode,
      activeViewEnum,
      rangePivot
    } = args;
    let selectedDates = args.selectedDates.slice();
    if (selectionMode === "multiple") {
      if (modifiers.ctrlKey || modifiers.metaKey) {
        if (this.isDateSelected(selectedDates, date)) {
          selectedDates = selectedDates.filter((item) => !isEqual(item, date));
        } else {
          selectedDates.push(date);
        }
        rangePivot = date;
      } else if (modifiers.shiftKey) {
        const [start, end] = sortDates([rangePivot || date, date]);
        selectedDates = this.bus.service(activeViewEnum).dateRange(start, end);
        rangePivot = date > selectedDates[0] ? selectedDates[0] : last(selectedDates);
        if (modifiers.anyArrow) {
          const [start2, end2] = sortDates([this.lastClicked || date, date]);
          selectedDates = this.bus.service(0).dateRange(start2, end2);
        }
      } else {
        selectedDates = [date];
        rangePivot = date;
      }
    } else {
      selectedDates = [date];
      rangePivot = date;
    }
    return {
      selectedDates,
      rangePivot
    };
  }
  isDateSelected(selectedDates, date) {
    return selectedDates.some((item) => isEqual(item, date));
  }
  static ɵfac = function SelectionService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SelectionService)(ɵɵinject(BusViewService));
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _SelectionService,
    factory: _SelectionService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectionService, [{
    type: Injectable
  }], () => [{
    type: BusViewService
  }], null);
})();
var CellTemplateDirective = class _CellTemplateDirective {
  templateRef;
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static ɵfac = function CellTemplateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CellTemplateDirective)(ɵɵdirectiveInject(TemplateRef));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _CellTemplateDirective,
    selectors: [["", "kendoCalendarCellTemplate", ""]],
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CellTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoCalendarCellTemplate]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var MonthCellTemplateDirective = class _MonthCellTemplateDirective {
  templateRef;
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static ɵfac = function MonthCellTemplateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MonthCellTemplateDirective)(ɵɵdirectiveInject(TemplateRef));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _MonthCellTemplateDirective,
    selectors: [["", "kendoCalendarMonthCellTemplate", ""]],
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MonthCellTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoCalendarMonthCellTemplate]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var YearCellTemplateDirective = class _YearCellTemplateDirective {
  templateRef;
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static ɵfac = function YearCellTemplateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _YearCellTemplateDirective)(ɵɵdirectiveInject(TemplateRef));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _YearCellTemplateDirective,
    selectors: [["", "kendoCalendarYearCellTemplate", ""]],
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(YearCellTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoCalendarYearCellTemplate]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var DecadeCellTemplateDirective = class _DecadeCellTemplateDirective {
  templateRef;
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static ɵfac = function DecadeCellTemplateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DecadeCellTemplateDirective)(ɵɵdirectiveInject(TemplateRef));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _DecadeCellTemplateDirective,
    selectors: [["", "kendoCalendarDecadeCellTemplate", ""]],
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DecadeCellTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoCalendarDecadeCellTemplate]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var CenturyCellTemplateDirective = class _CenturyCellTemplateDirective {
  templateRef;
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static ɵfac = function CenturyCellTemplateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CenturyCellTemplateDirective)(ɵɵdirectiveInject(TemplateRef));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _CenturyCellTemplateDirective,
    selectors: [["", "kendoCalendarCenturyCellTemplate", ""]],
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CenturyCellTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoCalendarCenturyCellTemplate]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var WeekNumberCellTemplateDirective = class _WeekNumberCellTemplateDirective {
  templateRef;
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static ɵfac = function WeekNumberCellTemplateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WeekNumberCellTemplateDirective)(ɵɵdirectiveInject(TemplateRef));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _WeekNumberCellTemplateDirective,
    selectors: [["", "kendoCalendarWeekNumberCellTemplate", ""]],
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WeekNumberCellTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoCalendarWeekNumberCellTemplate]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var HeaderTitleTemplateDirective = class _HeaderTitleTemplateDirective {
  templateRef;
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static ɵfac = function HeaderTitleTemplateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HeaderTitleTemplateDirective)(ɵɵdirectiveInject(TemplateRef));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _HeaderTitleTemplateDirective,
    selectors: [["", "kendoCalendarHeaderTitleTemplate", ""]],
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeaderTitleTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoCalendarHeaderTitleTemplate]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
function handleRangeSelection(date, selectionRange, activeRangeEnd, allowReverse = false) {
  if (activeRangeEnd === "start" && selectionRange.start?.getTime() === date?.getTime() && (allowReverse && !selectionRange.end || !allowReverse) || activeRangeEnd === "end" && selectionRange.end?.getTime() === date?.getTime()) {
    return {
      activeRangeEnd,
      selectionRange
    };
  }
  if (allowReverse) {
    if (activeRangeEnd === "start" && selectionRange.start?.getTime() !== date?.getTime()) {
      selectionRange.start = date;
      activeRangeEnd = "end";
    } else if (activeRangeEnd === "end" && selectionRange.end?.getTime() !== date?.getTime()) {
      selectionRange.end = date;
      activeRangeEnd = "start";
    }
  }
  if (!allowReverse) {
    if (activeRangeEnd === "start" && date > selectionRange.end || activeRangeEnd === "end" && date < selectionRange.start) {
      selectionRange = {
        start: date,
        end: null
      };
      activeRangeEnd = "end";
    } else if (activeRangeEnd === "start" && date <= selectionRange.end) {
      selectionRange.start = date;
      activeRangeEnd = "end";
    } else if (activeRangeEnd === "end" && date >= selectionRange.start && date.getTime() !== selectionRange.end?.getTime()) {
      selectionRange.end = date;
      activeRangeEnd = "start";
    }
  }
  return {
    activeRangeEnd,
    selectionRange
  };
}
var minValidator = (minValue) => {
  return (control) => {
    const err = {
      minError: {
        minValue,
        value: control.value
      }
    };
    if (!minValue || !control.value) {
      return null;
    }
    return control.value < minValue ? err : null;
  };
};
var maxValidator = (maxValue) => {
  return (control) => {
    const err = {
      maxError: {
        maxValue,
        value: control.value
      }
    };
    if (!maxValue || !control.value) {
      return null;
    }
    return control.value > maxValue ? err : null;
  };
};
var noop = () => null;
var disabledDatesRangeValidator = (isDateDisabled) => {
  if (!isPresent2(isDateDisabled)) {
    return noop;
  }
  return (selectedRange) => {
    const isRangeComplete = isPresent2(selectedRange) && isPresent2(selectedRange.start) && isPresent2(selectedRange.end);
    if (!isRangeComplete || selectedRange.start > selectedRange.end) {
      return null;
    }
    const disabledDates = disabledDatesInRange(selectedRange.start, selectedRange.end, isDateDisabled);
    const error = {
      disabledDatesInRange: disabledDates
    };
    return disabledDates.length ? error : null;
  };
};
var KEY_TO_ACTION = {
  "PageUp": Action.PrevView,
  "PageDown": Action.NextView,
  "End": Action.LastInView,
  "Home": Action.FirstInView,
  "ArrowLeft": Action.Left,
  "ArrowUp": Action.Up,
  "ArrowRight": Action.Right,
  "ArrowDown": Action.Down,
  "meta+ArrowUp": Action.UpperView,
  "meta+ArrowDown": Action.LowerView
};
var NavigationService = class _NavigationService {
  bus;
  constructor(bus) {
    this.bus = bus;
  }
  action(event) {
    const code = normalizeKeys(event);
    const action = `${event.ctrlKey || event.metaKey ? "meta+" : ""}${code}`;
    return KEY_TO_ACTION[action];
  }
  move(value, action, activeView) {
    const service = this.bus.service(activeView);
    if (!service) {
      return value;
    }
    if (action === Action.UpperView && this.bus.canMoveUp(activeView)) {
      this.bus.moveUp(activeView);
      return value;
    }
    if (action === Action.LowerView && this.bus.canMoveDown(activeView)) {
      this.bus.moveDown(activeView);
      return value;
    }
    return service.move(value, action);
  }
  static ɵfac = function NavigationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NavigationService)(ɵɵinject(BusViewService));
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _NavigationService,
    factory: _NavigationService.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavigationService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: BusViewService
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
    selectors: [["", "kendoCalendarHeaderTemplate", ""]],
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeaderTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoCalendarHeaderTemplate]",
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
    selectors: [["", "kendoCalendarFooterTemplate", ""]],
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FooterTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoCalendarFooterTemplate]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var FooterComponent = class _FooterComponent {
  intl;
  showFooter = true;
  footerTemplateRef;
  activeViewValue;
  currentDate;
  getToday = getToday;
  constructor(intl) {
    this.intl = intl;
  }
  static ɵfac = function FooterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FooterComponent)(ɵɵdirectiveInject(IntlService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _FooterComponent,
    selectors: [["kendo-calendar-footer"]],
    hostVars: 2,
    hostBindings: function FooterComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("k-calendar-footer", ctx.showFooter);
      }
    },
    inputs: {
      footerTemplateRef: "footerTemplateRef",
      activeViewValue: "activeViewValue",
      currentDate: "currentDate"
    },
    standalone: true,
    features: [ɵɵStandaloneFeature],
    decls: 2,
    vars: 1,
    consts: [[3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["kendoButton", "", "fillMode", "flat", "themeColor", "primary", "type", "button", "tabindex", "-1", 1, "k-calendar-nav-today"]],
    template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, FooterComponent_Conditional_0_Template, 1, 5, null, 0)(1, FooterComponent_Conditional_1_Template, 2, 1, "button", 1);
      }
      if (rf & 2) {
        ɵɵconditional(ctx.footerTemplateRef ? 0 : 1);
      }
    },
    dependencies: [NgTemplateOutlet, ButtonComponent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FooterComponent, [{
    type: Component,
    args: [{
      selector: "kendo-calendar-footer",
      template: `
    @if (footerTemplateRef) {
      <ng-template
        [ngTemplateOutlet]="footerTemplateRef"
        [ngTemplateOutletContext]="{ activeView: activeViewValue, date: currentDate }">
      </ng-template>
    } @else {
      <button kendoButton
        fillMode="flat"
        themeColor="primary"
        class="k-calendar-nav-today"
        type="button"
        tabindex="-1">
        {{intl.formatDate(getToday(), 'D')}}
      </button>
    }
    `,
      standalone: true,
      imports: [NgTemplateOutlet, ButtonComponent]
    }]
  }], () => [{
    type: IntlService
  }], {
    showFooter: [{
      type: HostBinding,
      args: ["class.k-calendar-footer"]
    }],
    footerTemplateRef: [{
      type: Input
    }],
    activeViewValue: [{
      type: Input
    }],
    currentDate: [{
      type: Input
    }]
  });
})();
var Messages = class _Messages extends ComponentMessages {
  /**
   * The **Today** button text in the header of the MultiViewCalendar.
   */
  today;
  /**
   * The title of the **Prev** button in the header of the MultiViewCalendar.
   */
  prevButtonTitle;
  /**
   * The title of the **Next** button in the header of the MultiViewCalendar.
   */
  nextButtonTitle;
  /**
   * The title of the **Parent View** button in the header of the MultiViewCalendar.
   */
  parentViewButtonTitle;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵMessages_BaseFactory;
    return function Messages_Factory(__ngFactoryType__) {
      return (ɵMessages_BaseFactory || (ɵMessages_BaseFactory = ɵɵgetInheritedFactory(_Messages)))(__ngFactoryType__ || _Messages);
    };
  })();
  static ɵdir = ɵɵdefineDirective({
    type: _Messages,
    selectors: [["kendo-multiview-calendar-messages-base"]],
    inputs: {
      today: "today",
      prevButtonTitle: "prevButtonTitle",
      nextButtonTitle: "nextButtonTitle",
      parentViewButtonTitle: "parentViewButtonTitle"
    },
    features: [ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Messages, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line
      selector: "kendo-multiview-calendar-messages-base"
    }]
  }], null, {
    today: [{
      type: Input
    }],
    prevButtonTitle: [{
      type: Input
    }],
    nextButtonTitle: [{
      type: Input
    }],
    parentViewButtonTitle: [{
      type: Input
    }]
  });
})();
var MultiViewCalendarLocalizedMessagesDirective = class _MultiViewCalendarLocalizedMessagesDirective extends Messages {
  service;
  constructor(service) {
    super();
    this.service = service;
  }
  static ɵfac = function MultiViewCalendarLocalizedMessagesDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MultiViewCalendarLocalizedMessagesDirective)(ɵɵdirectiveInject(LocalizationService));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _MultiViewCalendarLocalizedMessagesDirective,
    selectors: [["", "kendoMultiViewCalendarLocalizedMessages", ""]],
    standalone: true,
    features: [ɵɵProvidersFeature([{
      provide: Messages,
      useExisting: forwardRef(() => _MultiViewCalendarLocalizedMessagesDirective)
    }]), ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MultiViewCalendarLocalizedMessagesDirective, [{
    type: Directive,
    args: [{
      providers: [{
        provide: Messages,
        useExisting: forwardRef(() => MultiViewCalendarLocalizedMessagesDirective)
      }],
      selector: "[kendoMultiViewCalendarLocalizedMessages]",
      standalone: true
    }]
  }], () => [{
    type: LocalizationService
  }], null);
})();
var BOTTOM_VIEW_DOC_LINK$1 = "https://www.telerik.com/kendo-angular-ui/components/dateinputs/api/CalendarComponent/#toc-bottomview";
var TOP_VIEW_DOC_LINK$1 = "https://www.telerik.com/kendo-angular-ui/components/dateinputs/api/CalendarComponent/#toc-topview";
var MIN_DOC_LINK$3 = "https://www.telerik.com/kendo-angular-ui/components/dateinputs/api/CalendarComponent/#toc-min";
var MAX_DOC_LINK$3 = "https://www.telerik.com/kendo-angular-ui/components/dateinputs/api/CalendarComponent/#toc-max";
var VALUE_DOC_LINK$5 = "https://www.telerik.com/kendo-angular-ui/components/dateinputs/calendar/#toc-using-with-json";
var RANGE_CALENDAR_VALUE_ACCESSOR = {
  multi: true,
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MultiViewCalendarComponent)
};
var RANGE_CALENDAR_RANGE_VALIDATORS = {
  multi: true,
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MultiViewCalendarComponent)
};
var MultiViewCalendarComponent = class _MultiViewCalendarComponent {
  bus;
  element;
  navigator;
  renderer;
  cdr;
  zone;
  disabledDatesService;
  selectionService;
  /**
   * Shows days that fall outside the current month ([see example]({% slug viewoptions_multiviewcalendar %}#toc-displaying-other-month-days)).
   *
   * @default true
   */
  showOtherMonthDays = true;
  /**
   * @hidden
   *
   * Determines whether to display the calendar header.
   */
  showCalendarHeader = true;
  /**
   * @hidden
   *
   * TODO: Make visible when the Infinite Calendar is fixed to set properly the size option.
   * Sets the size of the component.
   *
   * The possible values are:
   * * `small`
   * * `medium` (Default)
   * * `large`
   * * `none`
   *
   */
  set size(size) {
    const newSize = size ? size : DEFAULT_SIZE;
    this.renderer.removeClass(this.element.nativeElement, getSizeClass("calendar", this.size));
    if (newSize !== "none") {
      this.renderer.addClass(this.element.nativeElement, getSizeClass("calendar", newSize));
    }
    this._size = newSize;
  }
  get size() {
    return this._size;
  }
  _size = DEFAULT_SIZE;
  /**
   * @hidden
   */
  id;
  /**
   * Specifies the focused date of the Calendar
   * ([see example]({% slug dates_multiviewcalendar %}#toc-focused-dates)).
   *
   * If the Calendar is outside the `min` or `max` range, the component normalizes the defined `focusedDate`.
   */
  set focusedDate(focusedDate) {
    this._focusedDate = focusedDate || getToday();
  }
  get focusedDate() {
    return this._focusedDate;
  }
  /**
   * Toggles the visibility of the footer.
   *
   * @default false
   */
  footer = false;
  /**
   * @hidden
   */
  get headerId() {
    return this.id + "header-";
  }
  /**
   * @hidden
   */
  get multiViewCalendarHeaderIdLabel() {
    return this.views >= 2 ? this.id + "header-" : null;
  }
  /**
  * @hidden
  */
  get calendarHeaderIdLabel() {
    return this.views === 1 ? this.id + "header-" : null;
  }
  /**
   * Specifies the minimum allowed date value
   *
   * @default 1970-01-01
   */
  set min(min) {
    this._min = min || new Date(MIN_DATE);
  }
  get min() {
    return this._min;
  }
  /**
   * Specifies the maximum allowed date value
   *
   * @default 2099-12-31
   */
  set max(max) {
    this._max = max || new Date(MAX_DATE);
  }
  get max() {
    return this._max;
  }
  /**
   * Determines whether the built-in `min` or `max` validators are enforced when validating a form.
   *
   * @default false
   */
  rangeValidation = false;
  /**
   * Determines whether the built-in validator for disabled
   * date ranges is enforced when validating a form
   * ([see example](slug:disabled_dates_multiviewcalendar)).
   *
   * @default false
   */
  disabledDatesRangeValidation = false;
  /**
   * Sets the Calendar selection mode
   * ([see example]({% slug selection_multiviewcalendar %})).
   * @default 'single'
   */
  set selection(_selection) {
    this.selectionSetter = true;
    this._selection = _selection;
  }
  get selection() {
    return this._selection;
  }
  _selection = "single";
  /**
   * Allows reverse selection when using `range` selection.
   * If `allowReverse` is set to `true`, the component skips the validation of whether the start date is after the end date.
   *
   * @default false
   */
  allowReverse = false;
  /**
   * Sets or gets the `value` property of the Calendar and defines the selected value of the component.
   *
   * > The `value` has to be a valid [JavaScript `Date`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date)
      instance when in `single` selection mode, an array of valid JavaScript Date instances when in `multiple` selection mode, or
      an object of type `SelectionRange` when in `range` selection mode.
   */
  set value(candidate) {
    this.valueSetter = true;
    this._value = candidate;
  }
  get value() {
    return this._value;
  }
  /**
   * Specifies whether the component is disabled
   * ([see example]({% slug disabled_multiviewcalendar %})).
   * To learn how to disable the component in reactive forms, refer to the article on [Forms Support](slug:formssupport_multiviewcalendar#toc-managing-the-multiviewcalendar-disabled-state-in-reactive-forms).
   *
   * @default false
   */
  disabled = false;
  /**
   * Specifies the `tabindex` property of the Calendar. Based on the
   * [HTML `tabindex`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) behavior,
   * it determines whether the component is focusable.
   *
   * @default 0
   */
  tabindex = 0;
  /**
   * @hidden
   */
  set tabIndex(tabIndex) {
    this.tabindex = tabIndex;
  }
  get tabIndex() {
    return this.tabindex;
  }
  /**
   * Specifies the format of the displayed week day names.
   *
   * @default 'short'
   */
  weekDaysFormat = "short";
  /**
   * @hidden
   */
  isActive = false;
  /**
   * Specifies the dates of the MultiViewCalendar that will be disabled
   * ([see example]({% slug disabled_dates_multiviewcalendar %})).
   */
  set disabledDates(value) {
    this.disabledDatesService.initialize(value);
  }
  /**
   * Specifies the active view that the Calendar initially renders.
   * By default, the active view is `month`.
   *
   * > You have to set `activeView` within the `topView`-`bottomView` range.
   *
   * @default month
   */
  activeView = CalendarViewEnum[CalendarViewEnum.month];
  /**
   * Specifies the bottommost view to which you can navigate.
   *
   * @default month
   */
  bottomView = CalendarViewEnum[CalendarViewEnum.month];
  /**
   * Specifies the topmost view to which you can navigate.
   *
   * @default century
   */
  topView = CalendarViewEnum[CalendarViewEnum.century];
  /**
   * Determines whether to display a header for every view (for example, the month name).
   *
   * @default false
   */
  showViewHeader = false;
  /**
   * Determines whether to enable animation when navigating to previous/next view.
   *
   * > This feature uses the [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API). In order to run the animation in browsers that do not support it, you need the `web-animations-js` polyfill.
   *
   * @default false
   */
  animateNavigation = false;
  /**
   * Specifies whether to display a week number column in the `month` view
   * ([see example]({% slug weeknumcolumn_multiviewcalendar %})).
   *
   * @default false
   */
  weekNumber = false;
  /**
   * Specifies which end of the defined selection range should be marked as active.
   *
   * > Value will be ignored if the selection range is undefined.
   * > If range selection is used then the default value is 'start'.
   */
  set activeRangeEnd(_activeRangeEnd) {
    this._activeRangeEnd = _activeRangeEnd;
  }
  get activeRangeEnd() {
    return this.selection === "range" && !this._activeRangeEnd ? "start" : this._activeRangeEnd;
  }
  /**
   * Specifies the `selectionRange` property and
   * defines the selection range of the component
   * ([see example](slug:selection_multiviewcalendar#toc-range-selection)).
   * > We recommend using the `value` property as it now supports `range` selection.
   */
  set selectionRange(range2) {
    this._selectionRange = range2;
    if (this.disabledDatesRangeValidation) {
      this.onValidatorChange();
    }
  }
  get selectionRange() {
    return this._selectionRange;
  }
  /**
   * Specifies the `views` property and
   * defines the number of rendered months.
   *
   * @default 2
   */
  views = 2;
  /**
   * Specifies the orientation of the MultiViewCalendar.
   *
   * The available values are:
   * * `horizontal` (default)
   * * `vertical`
   */
  orientation = "horizontal";
  /**
   * Fires when the active view is changed
   * ([see example](slug:events_multiviewcalendar)).
   */
  activeViewChange = new EventEmitter();
  /**
   * Fires when navigating in the currently active view
   * ([see example](slug:events_multiviewcalendar)).
   */
  navigate = new EventEmitter();
  /**
   * Fires when a view cell is entered
   * ([see example](slug:events_multiviewcalendar)).
   */
  cellEnter = new EventEmitter();
  /**
   * Fires when a view cell is leaved
   * ([see example](slug:events_multiviewcalendar)).
   */
  cellLeave = new EventEmitter();
  /**
   * Fires when the value is changed
   * ([see example](slug:events_multiviewcalendar)).
   */
  valueChange = new EventEmitter();
  /**
   * @hidden
   * Fires when the range selection changes.
   */
  rangeSelectionChange = new EventEmitter();
  /**
   * Fires each time the MultiViewCalendar gets blurred
   * ([see example](slug:events_multiviewcalendar)).
   */
  blurEvent = new EventEmitter();
  /**
   * Fires each time the MultiViewCalendar gets focused
   * ([see example](slug:events_multiviewcalendar)).
   */
  focusEvent = new EventEmitter();
  /**
   * @hidden
   */
  focusCalendar = new EventEmitter();
  /**
   * @hidden
   */
  onClosePopup = new EventEmitter();
  /**
   * @hidden
   */
  onTabPress = new EventEmitter();
  /**
   * @hidden
   */
  onShiftTabPress = new EventEmitter();
  /**
   * @hidden
   *
   * Queries the template for a cell template declaration.
   * Ignored if a `[cellTemplate]` value is explicitly provided.
   */
  cellTemplate;
  /**
   * @hidden
   *
   * Defines the template for each cell.
   * Takes precedence over nested templates in the KendoMultiViewCalendar tag.
   */
  set cellTemplateRef(template) {
    this._cellTemplateRef = template;
  }
  get cellTemplateRef() {
    return this._cellTemplateRef || this.cellTemplate;
  }
  /**
   * @hidden
   *
   * Queries the template for a month cell template declaration.
   * Ignored if a `[monthCellTemplate]` value is explicitly provided.
   */
  monthCellTemplate;
  /**
   * @hidden
   *
   * Defines the template for each month cell.
   * Takes precedence over nested templates in the KendoMultiViewCalendar tag.
   */
  set monthCellTemplateRef(template) {
    this._monthCellTemplateRef = template;
  }
  get monthCellTemplateRef() {
    return this._monthCellTemplateRef || this.monthCellTemplate;
  }
  /**
   * @hidden
   *
   * Queries the template for a year cell template declaration.
   * Ignored if a `[yearCellTemplate]` value is explicitly provided.
   */
  yearCellTemplate;
  /**
   * @hidden
   *
   * Defines the template for each year cell.
   * Takes precedence over nested templates in the KendoMultiViewCalendar tag.
   */
  set yearCellTemplateRef(template) {
    this._yearCellTemplateRef = template;
  }
  get yearCellTemplateRef() {
    return this._yearCellTemplateRef || this.yearCellTemplate;
  }
  /**
   * @hidden
   *
   * Queries the template for a decade cell template declaration.
   * Ignored if a `[decadeCellTemplate]` value is explicitly provided.
   */
  decadeCellTemplate;
  /**
   * @hidden
   *
   * Defines the template for each decade cell.
   * Takes precedence over nested templates in the KendoMultiViewCalendar tag.
   */
  set decadeCellTemplateRef(template) {
    this._decadeCellTemplateRef = template;
  }
  get decadeCellTemplateRef() {
    return this._decadeCellTemplateRef || this.decadeCellTemplate;
  }
  /**
   * @hidden
   *
   * Queries the template for a century cell template declaration.
   * Ignored if a `[centuryCellTemplate]` value is explicitly provided.
   */
  centuryCellTemplate;
  /**
   * @hidden
   *
   * Defines the template for each century cell.
   * Takes precedence over nested templates in the KendoMultiViewCalendar tag.
   */
  set centuryCellTemplateRef(template) {
    this._centuryCellTemplateRef = template;
  }
  get centuryCellTemplateRef() {
    return this._centuryCellTemplateRef || this.centuryCellTemplate;
  }
  /**
   * @hidden
   *
   * Queries the template for a week number cell template declaration.
   * Ignored if a `[weekNumberTemplate]` value is explicitly provided.
   */
  weekNumberTemplate;
  /**
   * @hidden
   *
   * Defines the template for the week cell.
   * Takes precedence over nested templates in the KendoMultiViewCalendar tag.
   */
  set weekNumberTemplateRef(template) {
    this._weekNumberTemplateRef = template;
  }
  get weekNumberTemplateRef() {
    return this._weekNumberTemplateRef || this.weekNumberTemplate;
  }
  /**
   * @hidden
   *
   * Queries the template for a header title template declaration.
   * Ignored if a `[headerTitleTemplate]` value is explicitly provided.
   */
  headerTitleTemplate;
  /**
   * @hidden
   *
   * Queries the template for a header template declaration.
   */
  headerTemplate;
  /**
   * @hidden
   *
   * Queries the template for a header template declaration.
   */
  footerTemplate;
  /**
   * @hidden
   *
   * Defines the template for the Calendar footer.
   * Takes precedence over nested templates in the KendoMultiViewCalendar tag.
   */
  set footerTemplateRef(template) {
    this._footerTemplateRef = template;
  }
  get footerTemplateRef() {
    return this._footerTemplateRef || this.footerTemplate;
  }
  /**
   * @hidden
   *
   * Defines the template for the header title.
   * Takes precedence over nested templates in the KendoMultiViewCalendar tag.
   */
  set headerTitleTemplateRef(template) {
    this._headerTitleTemplateRef = template;
  }
  get headerTitleTemplateRef() {
    return this._headerTitleTemplateRef || this.headerTitleTemplate;
  }
  /**
   * @hidden
   *
   * Defines the template for the Calendar header.
   * Takes precedence over nested templates in the KendoMultiViewCalendar tag.
   */
  set headerTemplateRef(template) {
    this._headerTemplateRef = template;
  }
  get headerTemplateRef() {
    return this._headerTemplateRef || this.headerTemplate;
  }
  headerElement;
  viewList;
  cellUID = guid();
  isHovered = false;
  activeDate;
  isPrevDisabled = true;
  isNextDisabled = true;
  prevView = Action.PrevView;
  nextView = Action.NextView;
  selectedDates = [];
  rangePivot;
  shouldHoverWhenNoStart = false;
  canHover = false;
  changes = {};
  valueSetter = false;
  selectionSetter = false;
  _min = new Date(MIN_DATE);
  _max = new Date(MAX_DATE);
  _focusedDate = getToday();
  _value;
  _selectionRange = {
    start: null,
    end: null
  };
  _activeRangeEnd;
  resolvedPromise = Promise.resolve();
  onControlChange = noop$2;
  onControlTouched = noop$2;
  onValidatorChange = noop$2;
  minValidateFn = noop$2;
  maxValidateFn = noop$2;
  disabledDatesRangeValidateFn = noop$2;
  subscriptions = new Subscription();
  _cellTemplateRef;
  _monthCellTemplateRef;
  _yearCellTemplateRef;
  _decadeCellTemplateRef;
  _centuryCellTemplateRef;
  _weekNumberTemplateRef;
  _headerTitleTemplateRef;
  _headerTemplateRef;
  _footerTemplateRef;
  get activeViewEnum() {
    const activeView = CalendarViewEnum[this.activeView];
    return activeView < this.bottomViewEnum ? this.bottomViewEnum : activeView;
  }
  get bottomViewEnum() {
    return CalendarViewEnum[this.bottomView];
  }
  get topViewEnum() {
    return CalendarViewEnum[this.topView];
  }
  get widgetId() {
    return this.views >= 2 ? this.id : null;
  }
  get ariaDisabled() {
    return this.disabled;
  }
  /**
   * @hidden
   */
  get ariaActivedescendant() {
    return this.cellUID + this.focusedDate.getTime();
  }
  /**
   * @hidden
   */
  handleFocusout(event) {
    const relatedTarget = event.relatedTarget;
    if (!this.element.nativeElement.contains(relatedTarget)) {
      const isClassicCalendar = this.views === 1;
      isClassicCalendar ? this.blurEvent.emit(event) : this.blurEvent.emit();
      this.onControlTouched();
    }
    this.isActive = false;
    this.isHovered = false;
  }
  /**
   * @hidden
   */
  handleFocus() {
    this.isActive = true;
    const isClassicCalendar = this.views === 1;
    isClassicCalendar ? this.focusCalendar.emit() : this.focusEvent.emit();
    this.focusEvent.emit();
  }
  /**
   * @hidden
   */
  handleMouseEnter() {
    this.isHovered = true;
  }
  /**
   * @hidden
   */
  handleMouseLeave() {
    this.isHovered = false;
    this.setRangeSelectionToValue();
  }
  /**
   * @hidden
   */
  handleMousedown(event) {
    event.preventDefault();
  }
  /**
   * @hidden
   */
  handleClick() {
    if (this.isActive) {
      return;
    }
    this.focus();
  }
  /**
   * @hidden
   */
  keydown(event) {
    const code = normalizeKeys(event);
    const arrowUpOrDownKeyPressed = [Keys.ArrowUp, Keys.ArrowDown].indexOf(code) !== -1;
    const ctrlKey = event.ctrlKey || event.metaKey;
    const onArrowRightAndControl = code === Keys.ArrowRight && ctrlKey;
    const onArrowLeftAndControl = code === Keys.ArrowLeft && ctrlKey;
    const onTKeyPress = code === Keys.KeyT;
    const onEnterKeyPress = code === Keys.Enter;
    const onArrowUpPress = code === Keys.ArrowUp;
    const altKey = event.altKey;
    const escKey = code === Keys.Escape;
    const tabKeyPress = code === Keys.Tab;
    const shiftKeyPress = event.shiftKey;
    if (onArrowRightAndControl) {
      event.preventDefault();
      this.navigateView(this.nextView);
      return;
    } else if (onArrowLeftAndControl) {
      event.preventDefault();
      this.navigateView(this.prevView);
      return;
    } else if (ctrlKey && arrowUpOrDownKeyPressed) {
      event.preventDefault();
    } else if (onTKeyPress) {
      this.focusedDate = getToday();
      this.bus.moveToBottom(this.activeViewEnum);
      this.updateButtonState();
      return;
    } else if (onEnterKeyPress) {
      if (this.selection !== "range") {
        this.selectionService.lastClicked = this.focusedDate;
        this.performSelection(this.focusedDate, event);
      } else {
        this.performRangeSelection(this.focusedDate);
      }
    }
    if (this.views >= 2) {
      if (escKey || altKey && onArrowUpPress) {
        this.onClosePopup.emit(event);
      } else if (tabKeyPress && shiftKeyPress) {
        this.onShiftTabPress.emit(event);
      } else if (tabKeyPress && !shiftKeyPress) {
        this.onTabPress.emit(event);
      }
    }
    const candidate = dateInRange(this.navigator.move(this.focusedDate, this.navigator.action(event), this.activeViewEnum), this.min, this.max);
    if (isEqual(this.focusedDate, candidate)) {
      return;
    }
    this.focusedDate = candidate;
    event.preventDefault();
    const isSameView = this.bus.service(this.activeViewEnum).isInArray(this.focusedDate, this.viewList.dates);
    if (!isSameView) {
      this.emitNavigate(this.focusedDate);
      this.updateButtonState();
    }
    if (isArrowWithShiftPressed(event) && this.selection !== "range") {
      event["anyArrow"] = true;
      this.performSelection(this.focusedDate, event);
    }
  }
  constructor(bus, element, navigator2, renderer, cdr, zone, disabledDatesService, selectionService) {
    this.bus = bus;
    this.element = element;
    this.navigator = navigator2;
    this.renderer = renderer;
    this.cdr = cdr;
    this.zone = zone;
    this.disabledDatesService = disabledDatesService;
    this.selectionService = selectionService;
    this.id = `kendo-multiviewcalendarid-${this.bus.calendarId}-`;
  }
  ngOnInit() {
    this.setClasses(this.element.nativeElement);
    this.subscriptions.add(this.bus.viewChanged.subscribe(({
      view: view2
    }) => {
      this.activeView = CalendarViewEnum[view2];
      this.activeViewChange.emit(this.activeView);
      this.cdr.detectChanges();
      this.updateButtonState();
    }));
  }
  ngOnChanges(changes) {
    this.changes = changes;
    this.verifyChanges();
    this.bus.configure(this.bottomViewEnum, this.topViewEnum);
  }
  ngDoCheck() {
    if (this.valueSetter || this.selectionSetter) {
      if (this.selection === "range" && (this.value?.start || this.value?.end) && this.focusedDate.getTime() !== this.value.start?.getTime() && this.focusedDate.getTime() !== this.value.end?.getTime()) {
        this.focusedDate = this.value.start || this.value.end || getToday();
      }
      this.setValue(this.value);
      this.valueSetter = false;
      this.selectionSetter = false;
    }
    if (hasExistingValue(this.changes, "focusedDate")) {
      const focusedDate = this.changes.focusedDate.currentValue;
      this.focusedDate = dateInRange(focusedDate, this.min, this.max);
    }
    if (this.changes.min || this.changes.max || this.changes.rangeValidation || this.changes.disabledDates || this.changes.disabledDatesRangeValidation) {
      this.minValidateFn = this.rangeValidation ? minValidator(this.min) : noop$2;
      this.maxValidateFn = this.rangeValidation ? maxValidator(this.max) : noop$2;
      this.disabledDatesRangeValidateFn = this.disabledDatesRangeValidation ? disabledDatesRangeValidator(this.disabledDatesService.isDateDisabled) : noop$2;
      this.onValidatorChange();
    }
    if (this.changes.min || this.changes.max || this.changes.focusedDate || this.changes.activeView || this.changes.value) {
      this.updateButtonState();
    }
    this.changes = {};
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  ngAfterViewInit() {
    this.updateButtonState();
  }
  /**
   * Focuses the host element of the Calendar.
   *
   * @example
   * ```ts
   * _@Component({
   * selector: 'my-app',
   * template: `
   *  <button (click)="multiviewcalendar.focus()">Focus calendar</button>
   *  <kendo-multiviewcalendar #multiviewcalendar></kendo-multiviewcalendar>
   * `
   * })
   * export class AppComponent { }
   * ```
   */
  focus() {
    if (!this.element) {
      return;
    }
    this.element.nativeElement.querySelector(".k-calendar-view").focus({
      preventScroll: true
    });
  }
  /**
   * Blurs the Calendar component.
   */
  blur() {
    if (!this.element) {
      return;
    }
    const activeElement = this.views >= 2 ? this.element.nativeElement.querySelector(".k-calendar-view") : this.element.nativeElement.querySelector(".k-calendar-table");
    activeElement.blur();
  }
  /**
   * @hidden
   */
  handleDateChange(args) {
    const canNavigateDown = this.bus.canMoveDown(this.activeViewEnum);
    const availableDates = args.selectedDates.filter((date) => !this.disabledDatesService.isDateDisabled(date));
    this.focusedDate = args.focusedDate || this.focusedDate;
    const sameDates = !canNavigateDown && areDatesEqual(availableDates, this.selectedDates);
    if (sameDates && !canNavigateDown && this.selection === "single") {
      this.onClosePopup.emit();
    }
    if (this.disabled || sameDates) {
      return;
    }
    if (canNavigateDown) {
      this.bus.moveDown(this.activeViewEnum);
      return;
    }
    if (this.disabledDatesService.isDateDisabled(this.focusedDate)) {
      return;
    }
    if (this.selection === "range") {
      return;
    }
    this.selectedDates = availableDates.map((date) => cloneDate(date));
    this.value = this.parseSelectionToValue(availableDates);
    this.onControlChange(this.parseSelectionToValue(availableDates));
    this.valueChange.emit(this.parseSelectionToValue(availableDates));
  }
  /**
   * @hidden
   */
  onCellEnter(cellEnter, date) {
    this.emitCellEvent(cellEnter, date);
    if (this.selection === "range" && (this.canHover || this.shouldHoverWhenNoStart)) {
      this.zone.run(() => {
        if (this.canHover && !this.shouldHoverWhenNoStart) {
          if (this.allowReverse) {
            if (this.activeRangeEnd === "end" && this.selectionRange.start) {
              this.selectionRange = {
                start: this.selectionRange.start,
                end: date
              };
            }
            if (this.activeRangeEnd === "start" && this.selectionRange.end) {
              this.selectionRange = {
                start: date,
                end: this.selectionRange.end
              };
            }
          } else {
            if (this.activeRangeEnd === "end" && this.selectionRange.start && date >= this.selectionRange.start) {
              this.selectionRange = {
                start: this.selectionRange.start,
                end: date
              };
            }
            if (this.selectionRange.start && date < this.selectionRange.start) {
              this.selectionRange = {
                start: this.selectionRange.start,
                end: null
              };
            }
          }
        } else if (this.shouldHoverWhenNoStart && date <= this.selectionRange.end) {
          this.selectionRange = {
            start: date,
            end: this.selectionRange.end
          };
        } else {
          this.selectionRange = {
            start: null,
            end: this.selectionRange.end
          };
        }
      });
    }
  }
  /**
   * @hidden
   */
  handleTodayButtonClick(args) {
    const todayDate = args.focusedDate;
    const isSameView = this.bus.service(this.activeViewEnum).isInArray(todayDate, this.viewList.dates);
    const isBottomView = !this.bus.canMoveDown(this.activeViewEnum);
    if (!isSameView && isBottomView) {
      this.emitNavigate(todayDate);
      this.updateButtonState();
    }
    if (this.selection === "range" && isBottomView) {
      this.performRangeSelection(todayDate);
    } else {
      this.handleDateChange(args);
    }
  }
  /**
   * @hidden
   */
  setActiveDate(date) {
    this.activeDate = cloneDate(date);
    this.cdr.detectChanges();
  }
  /**
   * @hidden
   */
  writeValue(candidate) {
    this.verifyValue(candidate);
    this.value = candidate;
    this.cdr.markForCheck();
  }
  /**
   * @hidden
   */
  registerOnChange(fn) {
    this.onControlChange = fn;
  }
  /**
   * @hidden
   */
  registerOnTouched(fn) {
    this.onControlTouched = fn;
  }
  /**
   * @hidden
   */
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
    this.cdr.markForCheck();
  }
  /**
   * @hidden
   */
  validate(control) {
    return this.minValidateFn(control) || this.maxValidateFn(control) || this.disabledDatesRangeValidateFn(this.selectionRange);
  }
  /**
   * @hidden
   */
  registerOnValidatorChange(fn) {
    this.onValidatorChange = fn;
  }
  /**
   * @hidden
   */
  activeCellTemplate() {
    switch (this.activeViewEnum) {
      case CalendarViewEnum.month:
        return this.monthCellTemplateRef || this.cellTemplateRef;
      case CalendarViewEnum.year:
        return this.yearCellTemplateRef;
      case CalendarViewEnum.decade:
        return this.decadeCellTemplateRef;
      case CalendarViewEnum.century:
        return this.centuryCellTemplateRef;
      default:
        return null;
    }
  }
  /**
   * @hidden
   */
  navigateView(action) {
    this.focusedDate = this.viewList.navigate(action);
    this.updateButtonState();
    this.emitNavigate(this.focusedDate);
  }
  /**
   * @hidden
   */
  emitNavigate(focusedDate) {
    const activeView = CalendarViewEnum[this.activeViewEnum];
    this.navigate.emit({
      activeView,
      focusedDate
    });
  }
  /**
   * @hidden
   */
  emitCellEvent(emitter, args) {
    if (hasObservers(emitter)) {
      this.zone.run(() => {
        emitter.emit(args);
      });
    }
  }
  /**
   * @hidden
   */
  handleCellClick({
    date,
    modifiers
  }) {
    if (this.selection === "range" && this.activeViewEnum === CalendarViewEnum[this.bottomView]) {
      this.performRangeSelection(date);
    } else {
      this.selectionService.lastClicked = date;
      this.performSelection(date, modifiers);
    }
    const isSameView = this.bus.service(this.activeViewEnum).isInArray(this.focusedDate, this.viewList.dates);
    if (!isSameView) {
      this.emitNavigate(this.focusedDate);
      this.updateButtonState();
    }
  }
  /**
   * @hidden
   */
  handleWeekNumberClick(dates) {
    if (this.selection === "single") {
      return;
    }
    this.zone.run(() => {
      if (this.selection === "multiple") {
        this.handleDateChange({
          selectedDates: dates,
          focusedDate: last(dates)
        });
      }
      if (this.selection === "range") {
        this.activeRangeEnd = "start";
        const shouldEmitValueChange = this.selectionRange.start?.getTime() !== dates[0].getTime() || this.selectionRange.end?.getTime() !== last(dates).getTime();
        this.selectionRange.start = dates[0];
        this.selectionRange.end = last(dates);
        this.value = this.selectionRange;
        if (shouldEmitValueChange) {
          this.valueChange.emit(this.value);
        }
      }
    });
  }
  setClasses(element) {
    this.renderer.addClass(element, "k-calendar");
    this.renderer.addClass(element, getSizeClass("calendar", this.size));
    if (this.views >= 2) {
      this.renderer.addClass(element, "k-calendar-range");
    }
  }
  verifyChanges() {
    if (!isDevMode()) {
      return;
    }
    if (this.min > this.max) {
      throw new Error(`The max value should be bigger than the min. See ${MIN_DOC_LINK$3} and ${MAX_DOC_LINK$3}.`);
    }
    if (this.bottomViewEnum > this.topViewEnum) {
      throw new Error(`The topView should be greater than bottomView. See ${BOTTOM_VIEW_DOC_LINK$1} and ${TOP_VIEW_DOC_LINK$1}.`);
    }
  }
  verifyValue(candidate) {
    if (!isDevMode()) {
      return;
    }
    if (this.selection === "single" && candidate && !isNullOrDate(candidate)) {
      throw new Error(`When using 'single' selection the 'value' should be a valid JavaScript Date instance. Check ${VALUE_DOC_LINK$5} for possible resolution.`);
    } else if (this.selection === "multiple" && candidate) {
      if (Array.isArray(candidate)) {
        const onlyDates = candidate.every((value) => value instanceof Date);
        if (!onlyDates) {
          throw new Error(`When using 'multiple' selection the 'value' should be an array of valid JavaScript Date instances. Check ${VALUE_DOC_LINK$5} for possible resolution.`);
        }
      }
      if (Object.keys(candidate).find((k) => k === "start") && Object.keys(candidate).find((k) => k === "end")) {
        throw new Error(`When using 'multiple' selection the 'value' should be an array of valid JavaScript Date instances. Check ${VALUE_DOC_LINK$5} for possible resolution.`);
      }
    } else if (this.selection === "range" && candidate && !(isNullOrDate(candidate["start"]) && isNullOrDate(candidate["end"]))) {
      throw new Error(`The 'value' should be an object with start and end dates. Check ${VALUE_DOC_LINK$5} for possible resolution.`);
    }
  }
  updateButtonState() {
    this.resolvedPromise.then(() => {
      this.cdr.detectChanges();
      this.isPrevDisabled = !this.viewList.canNavigate(this.prevView);
      this.isNextDisabled = !this.viewList.canNavigate(this.nextView);
      this.cdr.markForCheck();
    });
  }
  parseSelectionToValue(selection) {
    selection = selection || [];
    return this.selection === "single" ? cloneDate(last(selection)) : selection.map((date) => cloneDate(date));
  }
  setValue(candidate) {
    this.verifyValue(candidate);
    if (candidate === null) {
      this._value = null;
      this.selectedDates = [];
    } else if (Array.isArray(candidate)) {
      this.selectionRange = {
        start: null,
        end: null
      };
      this._value = candidate.filter((date) => isPresent2(date)).map((element) => cloneDate(element));
    } else if (isObject(candidate) && Object.keys(candidate).find((k) => k === "start") && Object.keys(candidate).find((k) => k === "end")) {
      this.selectedDates = [];
      this.selectionRange = {
        start: null,
        end: null
      };
      this._value = {
        start: null,
        end: null
      };
      this._value.start = candidate.start instanceof Date ? cloneDate(candidate.start) : null;
      this._value.end = candidate.end instanceof Date ? cloneDate(candidate.end) : null;
      this.selectionRange = Object.assign({}, this._value);
      if (this._value?.start && !this._value?.end) {
        this.activeRangeEnd = "end";
        this.canHover = true;
      }
      if (this._value?.end && !this._value?.start) {
        this.activeRangeEnd = "start";
        this.canHover = true;
      }
      if (this._value?.end && this._value?.start) {
        this.canHover = false;
      }
    } else {
      this.selectionRange = {
        start: null,
        end: null
      };
      this._value = cloneDate(candidate);
    }
    if (this.selection !== "range") {
      const selection = [].concat(candidate).filter((date) => isPresent2(date)).map((date) => cloneDate(date));
      if (!areDatesEqual(selection, this.selectedDates)) {
        const lastSelected = last(selection);
        this.rangePivot = cloneDate(lastSelected);
        this.focusedDate = cloneDate(lastSelected) || this.focusedDate;
        this.selectedDates = selection;
      }
    }
  }
  setRangeSelectionToValue() {
    if (this.selection === "range" && this.value) {
      this.selectionRange = this.value;
      this.cdr.markForCheck();
    }
  }
  performRangeSelection(date) {
    this.focusedDate = date;
    const clonedRangeSelection = Object.assign({}, this.selectionRange);
    const emitValueChange = this.activeRangeEnd === "start" && this.value?.start?.getTime() !== date?.getTime() || this.activeRangeEnd === "end" && this.value?.end?.getTime() !== date?.getTime();
    this.zone.run(() => {
      const rangeSelection = handleRangeSelection(date, clonedRangeSelection, this.activeRangeEnd, this.allowReverse);
      this.activeRangeEnd = rangeSelection.activeRangeEnd;
      if (this.canHover && rangeSelection.activeRangeEnd === "end" && rangeSelection.selectionRange.end?.getTime() === date.getTime()) {
        this.activeRangeEnd = "start";
        rangeSelection.activeRangeEnd = "start";
      }
      this.canHover = this.activeRangeEnd === "end" && rangeSelection.selectionRange.start && !rangeSelection.selectionRange.end;
      if (emitValueChange && (this.value?.start?.getTime() !== rangeSelection.selectionRange?.start?.getTime() || this.value?.end?.getTime() !== rangeSelection.selectionRange?.end?.getTime())) {
        this.value = rangeSelection.selectionRange;
        this.valueChange.emit(this.value);
        this.rangeSelectionChange.emit(rangeSelection);
      }
      this.cdr.markForCheck();
    });
  }
  performSelection(date, selectionModifiers) {
    const selection = this.selectionService.performSelection({
      date,
      modifiers: selectionModifiers,
      selectionMode: this.selection,
      activeViewEnum: this.activeViewEnum,
      rangePivot: this.rangePivot,
      selectedDates: this.selectedDates
    });
    this.rangePivot = selection.rangePivot;
    this.handleDateChange({
      selectedDates: selection.selectedDates,
      focusedDate: date
    });
  }
  static ɵfac = function MultiViewCalendarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MultiViewCalendarComponent)(ɵɵdirectiveInject(BusViewService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NavigationService), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(DisabledDatesService), ɵɵdirectiveInject(SelectionService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _MultiViewCalendarComponent,
    selectors: [["kendo-multiviewcalendar"]],
    contentQueries: function MultiViewCalendarComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, CellTemplateDirective, 5);
        ɵɵcontentQuery(dirIndex, MonthCellTemplateDirective, 5);
        ɵɵcontentQuery(dirIndex, YearCellTemplateDirective, 5);
        ɵɵcontentQuery(dirIndex, DecadeCellTemplateDirective, 5);
        ɵɵcontentQuery(dirIndex, CenturyCellTemplateDirective, 5);
        ɵɵcontentQuery(dirIndex, WeekNumberCellTemplateDirective, 5);
        ɵɵcontentQuery(dirIndex, HeaderTitleTemplateDirective, 5);
        ɵɵcontentQuery(dirIndex, HeaderTemplateDirective, 5);
        ɵɵcontentQuery(dirIndex, FooterTemplateDirective, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.cellTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.monthCellTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.yearCellTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.decadeCellTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.centuryCellTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.weekNumberTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.headerTitleTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.headerTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.footerTemplate = _t.first);
      }
    },
    viewQuery: function MultiViewCalendarComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(HeaderComponent, 5, ElementRef);
        ɵɵviewQuery(HorizontalViewListComponent, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.headerElement = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.viewList = _t.first);
      }
    },
    hostVars: 4,
    hostBindings: function MultiViewCalendarComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("mouseenter", function MultiViewCalendarComponent_mouseenter_HostBindingHandler() {
          return ctx.handleMouseEnter();
        })("mouseleave", function MultiViewCalendarComponent_mouseleave_HostBindingHandler() {
          return ctx.handleMouseLeave();
        })("mousedown", function MultiViewCalendarComponent_mousedown_HostBindingHandler($event) {
          return ctx.handleMousedown($event);
        })("click", function MultiViewCalendarComponent_click_HostBindingHandler() {
          return ctx.handleClick();
        })("keydown", function MultiViewCalendarComponent_keydown_HostBindingHandler($event) {
          return ctx.keydown($event);
        });
      }
      if (rf & 2) {
        ɵɵattribute("id", ctx.widgetId)("aria-disabled", ctx.ariaDisabled);
        ɵɵclassProp("k-disabled", ctx.ariaDisabled);
      }
    },
    inputs: {
      showOtherMonthDays: "showOtherMonthDays",
      showCalendarHeader: "showCalendarHeader",
      size: "size",
      id: "id",
      focusedDate: "focusedDate",
      footer: "footer",
      min: "min",
      max: "max",
      rangeValidation: "rangeValidation",
      disabledDatesRangeValidation: "disabledDatesRangeValidation",
      selection: "selection",
      allowReverse: "allowReverse",
      value: "value",
      disabled: "disabled",
      tabindex: "tabindex",
      tabIndex: "tabIndex",
      weekDaysFormat: "weekDaysFormat",
      isActive: "isActive",
      disabledDates: "disabledDates",
      activeView: "activeView",
      bottomView: "bottomView",
      topView: "topView",
      showViewHeader: "showViewHeader",
      animateNavigation: "animateNavigation",
      weekNumber: "weekNumber",
      activeRangeEnd: "activeRangeEnd",
      selectionRange: "selectionRange",
      views: "views",
      orientation: "orientation",
      cellTemplateRef: [0, "cellTemplate", "cellTemplateRef"],
      monthCellTemplateRef: [0, "monthCellTemplate", "monthCellTemplateRef"],
      yearCellTemplateRef: [0, "yearCellTemplate", "yearCellTemplateRef"],
      decadeCellTemplateRef: [0, "decadeCellTemplate", "decadeCellTemplateRef"],
      centuryCellTemplateRef: [0, "centuryCellTemplate", "centuryCellTemplateRef"],
      weekNumberTemplateRef: [0, "weekNumberTemplate", "weekNumberTemplateRef"],
      footerTemplateRef: [0, "footerTemplate", "footerTemplateRef"],
      headerTitleTemplateRef: [0, "headerTitleTemplate", "headerTitleTemplateRef"],
      headerTemplateRef: [0, "headerTemplate", "headerTemplateRef"]
    },
    outputs: {
      activeViewChange: "activeViewChange",
      navigate: "navigate",
      cellEnter: "cellEnter",
      cellLeave: "cellLeave",
      valueChange: "valueChange",
      rangeSelectionChange: "rangeSelectionChange",
      blurEvent: "blur",
      focusEvent: "focus",
      focusCalendar: "focusCalendar",
      onClosePopup: "onClosePopup",
      onTabPress: "onTabPress",
      onShiftTabPress: "onShiftTabPress"
    },
    exportAs: ["kendo-multiviewcalendar"],
    standalone: true,
    features: [ɵɵProvidersFeature([BusViewService, RANGE_CALENDAR_VALUE_ACCESSOR, RANGE_CALENDAR_RANGE_VALIDATORS, LocalizationService, DisabledDatesService, {
      provide: L10N_PREFIX,
      useValue: "kendo.multiviewcalendar"
    }, NavigationService, SelectionService]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    decls: 4,
    vars: 26,
    consts: () => {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_0 = goog.getMsg("Today");
        i18n_0 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_0;
      } else {
        i18n_0 = $localize`:kendo.multiviewcalendar.today|The label for the today button in the calendar header:Today`;
      }
      let i18n_1;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_1 = goog.getMsg("Navigate to previous view");
        i18n_1 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_1;
      } else {
        i18n_1 = $localize`:kendo.multiviewcalendar.prevButtonTitle|The label for the previous button in the Multiview calendar:Navigate to previous view`;
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_2 = goog.getMsg("Navigate to next view");
        i18n_2 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_2;
      } else {
        i18n_2 = $localize`:kendo.multiviewcalendar.nextButtonTitle|The label for the next button in the Multiview calendar:Navigate to next view`;
      }
      let i18n_3;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_3 = goog.getMsg("Navigate to parent view");
        i18n_3 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_3;
      } else {
        i18n_3 = $localize`:kendo.multiviewcalendar.parentViewButtonTitle|The title of the parent view button in the Multiview calendar header:Navigate to parent view`;
      }
      return [["kendoMultiViewCalendarLocalizedMessages", "", "today", i18n_0, "prevButtonTitle", i18n_1, "nextButtonTitle", i18n_2, "parentViewButtonTitle", i18n_3], [3, "activeView", "currentDate", "size", "min", "max", "id", "rangeLength", "titleTemplateRef", "headerTemplateRef", "isPrevDisabled", "isNextDisabled", "showNavigationButtons", "orientation"], [3, "cellClick", "weekNumberCellClick", "cellEnter", "cellLeave", "activeDateChange", "focusCalendar", "blurCalendar", "showOtherMonthDays", "allowReverse", "id", "activeView", "activeDescendant", "isActive", "cellTemplateRef", "weekNumberTemplateRef", "cellUID", "weekDaysFormat", "views", "min", "max", "focusedDate", "animateNavigation", "showViewHeader", "weekNumber", "activeRangeEnd", "selectionRange", "selectedDates", "orientation", "tabIndex", "disabled"], [3, "footerTemplateRef", "activeViewValue", "currentDate"], [3, "todayButtonClick", "prevButtonClick", "nextButtonClick", "activeView", "currentDate", "size", "min", "max", "id", "rangeLength", "titleTemplateRef", "headerTemplateRef", "isPrevDisabled", "isNextDisabled", "showNavigationButtons", "orientation"]];
    },
    template: function MultiViewCalendarComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementContainer(0, 0);
        ɵɵtemplate(1, MultiViewCalendarComponent_Conditional_1_Template, 1, 13, "kendo-calendar-header", 1);
        ɵɵelementStart(2, "kendo-calendar-horizontal", 2);
        ɵɵlistener("cellClick", function MultiViewCalendarComponent_Template_kendo_calendar_horizontal_cellClick_2_listener($event) {
          return ctx.handleCellClick($event);
        })("weekNumberCellClick", function MultiViewCalendarComponent_Template_kendo_calendar_horizontal_weekNumberCellClick_2_listener($event) {
          return ctx.handleWeekNumberClick($event);
        })("cellEnter", function MultiViewCalendarComponent_Template_kendo_calendar_horizontal_cellEnter_2_listener($event) {
          return ctx.onCellEnter(ctx.cellEnter, $event);
        })("cellLeave", function MultiViewCalendarComponent_Template_kendo_calendar_horizontal_cellLeave_2_listener($event) {
          return ctx.emitCellEvent(ctx.cellLeave, $event);
        })("activeDateChange", function MultiViewCalendarComponent_Template_kendo_calendar_horizontal_activeDateChange_2_listener($event) {
          return ctx.setActiveDate($event);
        })("focusCalendar", function MultiViewCalendarComponent_Template_kendo_calendar_horizontal_focusCalendar_2_listener() {
          return ctx.handleFocus();
        })("blurCalendar", function MultiViewCalendarComponent_Template_kendo_calendar_horizontal_blurCalendar_2_listener($event) {
          return ctx.handleFocusout($event);
        });
        ɵɵelementEnd();
        ɵɵtemplate(3, MultiViewCalendarComponent_Conditional_3_Template, 1, 3, "kendo-calendar-footer", 3);
      }
      if (rf & 2) {
        let tmp_7_0;
        ɵɵadvance();
        ɵɵconditional(ctx.showCalendarHeader ? 1 : -1);
        ɵɵadvance();
        ɵɵproperty("showOtherMonthDays", ctx.showOtherMonthDays)("allowReverse", ctx.allowReverse)("id", ctx.calendarHeaderIdLabel)("activeView", ctx.activeViewEnum)("activeDescendant", ctx.ariaActivedescendant)("isActive", ctx.isActive || ctx.isHovered)("cellTemplateRef", (tmp_7_0 = ctx.activeCellTemplate()) == null ? null : tmp_7_0.templateRef)("weekNumberTemplateRef", ctx.weekNumberTemplateRef == null ? null : ctx.weekNumberTemplateRef.templateRef)("cellUID", ctx.cellUID)("weekDaysFormat", ctx.weekDaysFormat)("views", ctx.views)("min", ctx.min)("max", ctx.max)("focusedDate", ctx.focusedDate)("animateNavigation", ctx.animateNavigation)("showViewHeader", ctx.showViewHeader)("weekNumber", ctx.weekNumber)("activeRangeEnd", ctx.activeRangeEnd)("selectionRange", ctx.selectionRange)("selectedDates", ctx.selectedDates)("orientation", ctx.orientation)("tabIndex", ctx.tabIndex)("disabled", ctx.disabled);
        ɵɵattribute("aria-labelledby", ctx.multiViewCalendarHeaderIdLabel);
        ɵɵadvance();
        ɵɵconditional(ctx.footer ? 3 : -1);
      }
    },
    dependencies: [MultiViewCalendarLocalizedMessagesDirective, HeaderComponent, HorizontalViewListComponent, FooterComponent],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MultiViewCalendarComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      exportAs: "kendo-multiviewcalendar",
      providers: [BusViewService, RANGE_CALENDAR_VALUE_ACCESSOR, RANGE_CALENDAR_RANGE_VALIDATORS, LocalizationService, DisabledDatesService, {
        provide: L10N_PREFIX,
        useValue: "kendo.multiviewcalendar"
      }, NavigationService, SelectionService],
      selector: "kendo-multiviewcalendar",
      template: `
    <ng-container kendoMultiViewCalendarLocalizedMessages
      i18n-today="kendo.multiviewcalendar.today|The label for the today button in the calendar header"
      today="Today"
    
      i18n-prevButtonTitle="kendo.multiviewcalendar.prevButtonTitle|The label for the previous button in the Multiview calendar"
      prevButtonTitle="Navigate to previous view"
    
      i18n-nextButtonTitle="kendo.multiviewcalendar.nextButtonTitle|The label for the next button in the Multiview calendar"
      nextButtonTitle="Navigate to next view"
    
      i18n-parentViewButtonTitle="kendo.multiviewcalendar.parentViewButtonTitle|The title of the parent view button in the Multiview calendar header"
      parentViewButtonTitle="Navigate to parent view"
      >
    </ng-container>
    @if (showCalendarHeader) {
      <kendo-calendar-header
        [activeView]="activeViewEnum"
        [currentDate]="activeDate"
        [size]="size"
        [min]="min"
        [max]="max"
        [id]="headerId"
        [rangeLength]="views"
        [titleTemplateRef]="headerTitleTemplateRef?.templateRef"
        [headerTemplateRef]="headerTemplateRef?.templateRef"
        [isPrevDisabled]="isPrevDisabled"
        [isNextDisabled]="isNextDisabled"
        [showNavigationButtons]="true"
        [orientation]="orientation"
        (todayButtonClick)="handleTodayButtonClick({ selectedDates: [$event], focusedDate: $event })"
        (prevButtonClick)="navigateView(prevView)"
        (nextButtonClick)="navigateView(nextView)"
        >
      </kendo-calendar-header>
    }
    <kendo-calendar-horizontal
      [showOtherMonthDays]="showOtherMonthDays"
      [allowReverse]="allowReverse"
      [id]="calendarHeaderIdLabel"
      [attr.aria-labelledby]="multiViewCalendarHeaderIdLabel"
      [activeView]="activeViewEnum"
      [activeDescendant]="ariaActivedescendant"
      [isActive]="isActive || isHovered"
      [cellTemplateRef]="activeCellTemplate()?.templateRef"
      [weekNumberTemplateRef]="weekNumberTemplateRef?.templateRef"
      [cellUID]="cellUID"
      [weekDaysFormat]="weekDaysFormat"
      [views]="views"
      [min]="min"
      [max]="max"
      [focusedDate]="focusedDate"
      [animateNavigation]="animateNavigation"
      [showViewHeader]="showViewHeader"
      [weekNumber]="weekNumber"
      [activeRangeEnd]="activeRangeEnd"
      [selectionRange]="selectionRange"
      [selectedDates]="selectedDates"
      [orientation]="orientation"
      [tabIndex]="tabIndex"
      [disabled]="disabled"
      (cellClick)="handleCellClick($event)"
      (weekNumberCellClick)="handleWeekNumberClick($event)"
      (cellEnter)="onCellEnter(cellEnter, $event)"
      (cellLeave)="emitCellEvent(cellLeave, $event)"
      (activeDateChange)="setActiveDate($event)"
      (focusCalendar)="handleFocus()"
      (blurCalendar)="handleFocusout($event)"
      >
    </kendo-calendar-horizontal>
    @if (footer) {
      <kendo-calendar-footer
        [footerTemplateRef]="footerTemplateRef?.templateRef"
        [activeViewValue]="activeView"
        [currentDate]="activeDate">
      </kendo-calendar-footer>
    }
    `,
      standalone: true,
      imports: [MultiViewCalendarLocalizedMessagesDirective, HeaderComponent, HorizontalViewListComponent, FooterComponent]
    }]
  }], () => [{
    type: BusViewService
  }, {
    type: ElementRef
  }, {
    type: NavigationService
  }, {
    type: Renderer2
  }, {
    type: ChangeDetectorRef
  }, {
    type: NgZone
  }, {
    type: DisabledDatesService
  }, {
    type: SelectionService
  }], {
    showOtherMonthDays: [{
      type: Input
    }],
    showCalendarHeader: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    focusedDate: [{
      type: Input
    }],
    footer: [{
      type: Input
    }],
    min: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    rangeValidation: [{
      type: Input
    }],
    disabledDatesRangeValidation: [{
      type: Input
    }],
    selection: [{
      type: Input
    }],
    allowReverse: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    tabindex: [{
      type: Input
    }],
    tabIndex: [{
      type: Input
    }],
    weekDaysFormat: [{
      type: Input
    }],
    isActive: [{
      type: Input
    }],
    disabledDates: [{
      type: Input
    }],
    activeView: [{
      type: Input
    }],
    bottomView: [{
      type: Input
    }],
    topView: [{
      type: Input
    }],
    showViewHeader: [{
      type: Input
    }],
    animateNavigation: [{
      type: Input
    }],
    weekNumber: [{
      type: Input
    }],
    activeRangeEnd: [{
      type: Input
    }],
    selectionRange: [{
      type: Input
    }],
    views: [{
      type: Input
    }],
    orientation: [{
      type: Input
    }],
    activeViewChange: [{
      type: Output
    }],
    navigate: [{
      type: Output
    }],
    cellEnter: [{
      type: Output
    }],
    cellLeave: [{
      type: Output
    }],
    valueChange: [{
      type: Output
    }],
    rangeSelectionChange: [{
      type: Output
    }],
    blurEvent: [{
      type: Output,
      args: ["blur"]
    }],
    focusEvent: [{
      type: Output,
      args: ["focus"]
    }],
    focusCalendar: [{
      type: Output
    }],
    onClosePopup: [{
      type: Output
    }],
    onTabPress: [{
      type: Output
    }],
    onShiftTabPress: [{
      type: Output
    }],
    cellTemplate: [{
      type: ContentChild,
      args: [CellTemplateDirective, {
        static: false
      }]
    }],
    cellTemplateRef: [{
      type: Input,
      args: ["cellTemplate"]
    }],
    monthCellTemplate: [{
      type: ContentChild,
      args: [MonthCellTemplateDirective, {
        static: false
      }]
    }],
    monthCellTemplateRef: [{
      type: Input,
      args: ["monthCellTemplate"]
    }],
    yearCellTemplate: [{
      type: ContentChild,
      args: [YearCellTemplateDirective, {
        static: false
      }]
    }],
    yearCellTemplateRef: [{
      type: Input,
      args: ["yearCellTemplate"]
    }],
    decadeCellTemplate: [{
      type: ContentChild,
      args: [DecadeCellTemplateDirective, {
        static: false
      }]
    }],
    decadeCellTemplateRef: [{
      type: Input,
      args: ["decadeCellTemplate"]
    }],
    centuryCellTemplate: [{
      type: ContentChild,
      args: [CenturyCellTemplateDirective, {
        static: false
      }]
    }],
    centuryCellTemplateRef: [{
      type: Input,
      args: ["centuryCellTemplate"]
    }],
    weekNumberTemplate: [{
      type: ContentChild,
      args: [WeekNumberCellTemplateDirective, {
        static: false
      }]
    }],
    weekNumberTemplateRef: [{
      type: Input,
      args: ["weekNumberTemplate"]
    }],
    headerTitleTemplate: [{
      type: ContentChild,
      args: [HeaderTitleTemplateDirective, {
        static: false
      }]
    }],
    headerTemplate: [{
      type: ContentChild,
      args: [HeaderTemplateDirective]
    }],
    footerTemplate: [{
      type: ContentChild,
      args: [FooterTemplateDirective]
    }],
    footerTemplateRef: [{
      type: Input,
      args: ["footerTemplate"]
    }],
    headerTitleTemplateRef: [{
      type: Input,
      args: ["headerTitleTemplate"]
    }],
    headerTemplateRef: [{
      type: Input,
      args: ["headerTemplate"]
    }],
    headerElement: [{
      type: ViewChild,
      args: [HeaderComponent, {
        static: false,
        read: ElementRef
      }]
    }],
    viewList: [{
      type: ViewChild,
      args: [HorizontalViewListComponent, {
        static: false
      }]
    }],
    widgetId: [{
      type: HostBinding,
      args: ["attr.id"]
    }],
    ariaDisabled: [{
      type: HostBinding,
      args: ["attr.aria-disabled"]
    }, {
      type: HostBinding,
      args: ["class.k-disabled"]
    }],
    handleMouseEnter: [{
      type: HostListener,
      args: ["mouseenter"]
    }],
    handleMouseLeave: [{
      type: HostListener,
      args: ["mouseleave"]
    }],
    handleMousedown: [{
      type: HostListener,
      args: ["mousedown", ["$event"]]
    }],
    handleClick: [{
      type: HostListener,
      args: ["click"]
    }],
    keydown: [{
      type: HostListener,
      args: ["keydown", ["$event"]]
    }]
  });
})();
var div$1 = domContainerFactory("div");
var ul$1 = domContainerFactory("ul");
var li$1 = domContainerFactory("li");
var td = domContainerFactory("td");
var th = domContainerFactory("th");
var tr = domContainerFactory("tr");
var tbody = domContainerFactory("tbody");
var thead = domContainerFactory("thead");
var table = domContainerFactory("table");
var monthHeader = () => div$1(`
            <span class="k-button k-button-md k-rounded-md k-button-flat k-button-flat-base k-calendar-title">March 2017</span>
            <span class="k-spacer"></span>
            <span class="k-calendar-nav">
                <button class="k-calendar-nav-today k-button k-button-md k-button-flat k-button-flat-base k-rounded-md">TODAY</button>
            </span>
        `, "k-calendar-header");
var monthWeekHeader = () => table([thead([tr([th("MO", "k-calendar-th")], "k-calendar-tr")], "k-calendar-thead")], "k-calendar-weekdays k-calendar-table");
var repeat = (count, mapper) => new Array(count).fill("1").map(mapper);
var content = (rows, cells = 1) => table([tbody([tr([th("1", "k-calendar-th")], "k-calendar-tr")].concat(repeat(rows, () => tr(repeat(cells, (c) => td(`<span class="k-link">${c}</span>`, "k-calendar-td")), "k-calendar-tr"))), "k-calendar-tbody")], "k-calendar-table");
var scrollable$1 = (children) => div$1(children, "k-flex k-content k-scrollable");
var view = (contentElement, className, renderWeekHeader) => div$1([monthHeader(), renderWeekHeader ? monthWeekHeader() : null, scrollable$1([contentElement, contentElement])], className, {
  left: "-10000px",
  position: "absolute"
});
var navigationList = /* @__PURE__ */ (() => {
  let navElement;
  return () => {
    if (!isDocumentAvailable()) {
      return null;
    }
    if (!navElement) {
      navElement = div$1([scrollable$1([ul$1([li$1("<span>FEB</span>")])])], "k-calendar-navigation", {
        left: "0px",
        position: "absolute"
      });
    }
    return navElement;
  };
})();
var viewFactory = ({
  cells,
  rows
}, className, renderWeekHeader) => {
  let viewElement;
  return () => {
    if (!isDocumentAvailable()) {
      return null;
    }
    if (!viewElement) {
      viewElement = view(content(rows, cells), className, renderWeekHeader);
    }
    return viewElement;
  };
};
var getScrollable = (element) => element.querySelector(".k-scrollable");
var horizontal = (element) => {
  const scrollableElement = getScrollable(element);
  scrollableElement.classList.add("k-scrollable-horizontal");
  return element;
};
var monthView = viewFactory({
  cells: 7,
  rows: 6
}, "k-vstack k-calendar-view k-calendar-monthview", true);
var yearView = viewFactory({
  cells: 4,
  rows: 3
}, "k-vstack k-calendar-view k-calendar-yearview", false);
var decadeView = viewFactory({
  cells: 4,
  rows: 3
}, "k-vstack k-calendar-view k-calendar-decadeview", false);
var horzMonthView = () => horizontal(monthView());
var horzYearView = () => horizontal(yearView());
var horzDecadeView = () => horizontal(decadeView());
var height = (element) => {
  if (!isDocumentAvailable()) {
    return element.offsetHeight || 0;
  }
  return parseFloat(window.getComputedStyle(element).height) || element.offsetHeight;
};
var width = (element) => {
  if (!isDocumentAvailable()) {
    return element.offsetWidth || 0;
  }
  const styles = window.getComputedStyle(element);
  const computed = parseFloat(styles.width) + parseFloat(styles.paddingLeft) + parseFloat(styles.paddingRight);
  return computed || element.offsetWidth;
};
var getBody = (element) => element.querySelector("tbody");
var CalendarDOMService = class _CalendarDOMService {
  //heights
  calendarHeight;
  headerHeight;
  monthViewHeight;
  yearViewHeight;
  decadeViewHeight;
  centuryViewHeight;
  navigationItemHeight;
  scrollableContentHeight;
  scrollableYearContentHeight;
  //widths
  calendarWidth;
  monthViewWidth;
  yearViewWidth;
  decadeViewWidth;
  centuryViewWidth;
  scrollableContentWidth;
  hostContainer;
  ensureHeights() {
    if (this.calendarHeight !== void 0) {
      return;
    }
    this.calculateHeights();
  }
  calculateHeights(container) {
    if (!isDocumentAvailable()) {
      return;
    }
    this.hostContainer = container;
    this.batch(monthView(), (contentElement) => {
      const viewElement = getBody(contentElement);
      this.calendarHeight = height(contentElement);
      this.monthViewHeight = height(viewElement);
      this.headerHeight = height(viewElement.children[0]);
      this.scrollableContentHeight = height(getScrollable(contentElement));
    });
    this.batch(horzMonthView(), (contentElement) => {
      const viewElement = getBody(contentElement);
      this.calendarWidth = width(contentElement);
      this.monthViewWidth = width(viewElement);
      this.scrollableContentWidth = width(getScrollable(contentElement));
    });
    this.batch(yearView(), (contentElement) => {
      this.yearViewHeight = height(getBody(contentElement));
      this.scrollableYearContentHeight = height(getScrollable(contentElement));
    });
    this.batch(horzYearView(), (contentElement) => {
      this.yearViewWidth = width(getBody(contentElement));
    });
    this.batch(decadeView(), (contentElement) => {
      this.decadeViewHeight = height(getBody(contentElement));
      this.centuryViewHeight = this.decadeViewHeight;
    });
    this.batch(horzDecadeView(), (contentElement) => {
      this.decadeViewWidth = width(getBody(contentElement));
      this.centuryViewWidth = this.decadeViewWidth;
    });
    this.batch(navigationList(), (contentElement) => {
      this.navigationItemHeight = height(contentElement.querySelector("li"));
    });
  }
  viewHeight(viewType) {
    return this.viewDimension(viewType, "height");
  }
  viewWidth(viewType) {
    return this.viewDimension(viewType, "width");
  }
  viewDimension(viewType, dimension) {
    const viewProp = dimension === "height" ? "ViewHeight" : "ViewWidth";
    switch (viewType) {
      case CalendarViewEnum.month:
        return this[`month${viewProp}`];
      case CalendarViewEnum.year:
        return this[`year${viewProp}`];
      case CalendarViewEnum.decade:
        return this[`decade${viewProp}`];
      case CalendarViewEnum.century:
        return this[`century${viewProp}`];
      default:
        return 1;
    }
  }
  batch(contentElement, action) {
    if (!isPresent2(this.hostContainer)) {
      return;
    }
    const hostClone = this.hostContainer.cloneNode();
    document.body.appendChild(hostClone);
    try {
      const appendedContent = hostClone.appendChild(contentElement);
      action(appendedContent);
    } finally {
      document.body.removeChild(hostClone);
    }
  }
  static ɵfac = function CalendarDOMService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CalendarDOMService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _CalendarDOMService,
    factory: _CalendarDOMService.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarDOMService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var update = (arr, idx, value) => [...arr.slice(0, idx + 1), ...arr.slice(idx + 1).map((x) => x + value)];
var RowHeightService = class {
  total;
  rowHeight;
  detailRowHeight;
  offsets = [];
  heights = [];
  constructor(total = 0, rowHeight, detailRowHeight) {
    this.total = total;
    this.rowHeight = rowHeight;
    this.detailRowHeight = detailRowHeight;
    let agg = 0;
    for (let idx = 0; idx < total; idx++) {
      this.offsets.push(agg);
      agg += rowHeight;
      this.heights.push(rowHeight);
    }
  }
  height(rowIndex) {
    return this.heights[rowIndex];
  }
  expandDetail(rowIndex) {
    if (this.height(rowIndex) === this.rowHeight) {
      this.updateRowHeight(rowIndex, this.detailRowHeight);
    }
  }
  collapseDetail(rowIndex) {
    if (this.height(rowIndex) > this.rowHeight) {
      this.updateRowHeight(rowIndex, this.detailRowHeight * -1);
    }
  }
  index(position) {
    if (position < 0) {
      return void 0;
    }
    const result = this.offsets.reduce((prev, current, idx) => {
      if (prev !== void 0) {
        return prev;
      } else if (current === position) {
        return idx;
      } else if (current > position) {
        return idx - 1;
      }
      return void 0;
    }, void 0);
    return result === void 0 ? this.total - 1 : result;
  }
  offset(rowIndex) {
    return this.offsets[rowIndex];
  }
  totalHeight() {
    return this.heights.reduce((prev, curr) => prev + curr, 0);
  }
  updateRowHeight(rowIndex, value) {
    this.heights[rowIndex] += value;
    this.offsets = update(this.offsets, rowIndex, value);
  }
};
var normalize = (x) => Math.max(x, 0);
var ScrollAction = class {
  offset;
  constructor(offset) {
    this.offset = offset;
  }
};
var PageAction = class {
  skip;
  constructor(skip) {
    this.skip = skip;
  }
};
var ScrollerService = class {
  scrollObservable;
  direction;
  firstLoaded = 0;
  lastLoaded;
  lastScroll;
  take;
  total;
  rowHeightService;
  scrollSubscription;
  subscription;
  bottomOffset = 0;
  topOffset = 0;
  constructor(scrollObservable) {
    this.scrollObservable = scrollObservable;
  }
  create(rowHeightService, skip, take, total, topOffset = 0, bottomOffset = 0, direction = "vertical") {
    this.rowHeightService = rowHeightService;
    this.firstLoaded = skip;
    this.lastLoaded = skip + take;
    this.take = take;
    this.total = total;
    this.lastScroll = 0;
    this.topOffset = topOffset;
    this.bottomOffset = bottomOffset;
    this.direction = direction;
    const subject = new ReplaySubject(2);
    const offsetBufferRows = this.rowsForHeight(topOffset);
    const skipWithOffset = normalize(skip - offsetBufferRows);
    subject.next(new ScrollAction(this.rowOffset(skipWithOffset)));
    if (offsetBufferRows) {
      subject.next(new PageAction(skipWithOffset));
    }
    this.subscription = new Observable((observer) => {
      this.unsubscribe();
      this.scrollSubscription = this.scrollObservable.subscribe((x) => this.onScroll(x, observer));
    }).subscribe((x) => subject.next(x));
    return subject;
  }
  destroy() {
    this.unsubscribe();
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  onScroll({
    scrollLeft,
    scrollTop,
    offsetHeight,
    offsetWidth
  }, observer) {
    const scrollPosition = this.direction === "vertical" ? scrollTop : scrollLeft;
    const offsetSize = this.direction === "vertical" ? offsetHeight : offsetWidth;
    if (this.lastScroll === scrollPosition) {
      return;
    }
    const up = this.lastScroll >= scrollPosition;
    this.lastScroll = scrollPosition;
    const firstItemIndex = this.rowHeightService.index(normalize(scrollPosition - this.topOffset));
    const lastItemIndex = this.rowHeightService.index(normalize(scrollPosition + offsetSize - this.bottomOffset));
    if (!up && lastItemIndex >= this.lastLoaded && this.lastLoaded < this.total) {
      this.firstLoaded = firstItemIndex;
      observer.next(new ScrollAction(this.rowOffset(firstItemIndex)));
      this.lastLoaded = Math.min(this.firstLoaded + this.take, this.total);
      observer.next(new PageAction(this.firstLoaded));
    }
    if (up && firstItemIndex <= this.firstLoaded) {
      const nonVisibleBuffer = Math.floor(this.take * 0.3);
      this.firstLoaded = normalize(firstItemIndex - nonVisibleBuffer);
      observer.next(new ScrollAction(this.rowOffset(this.firstLoaded)));
      this.lastLoaded = Math.min(this.firstLoaded + this.take, this.total);
      observer.next(new PageAction(this.firstLoaded));
    }
  }
  rowOffset(index) {
    return this.rowHeightService.offset(index) + this.topOffset;
  }
  rowsForHeight(height2) {
    return Math.ceil(height2 / this.rowHeightService.height(0));
  }
  unsubscribe() {
    if (this.scrollSubscription) {
      this.scrollSubscription.unsubscribe();
      this.scrollSubscription = null;
    }
  }
};
var SCROLLER_FACTORY_TOKEN = new InjectionToken("dateinputs-scroll-service-factory");
function DEFAULT_SCROLLER_FACTORY(observable) {
  return new ScrollerService(observable);
}
var ScrollDirection;
(function(ScrollDirection2) {
  ScrollDirection2[ScrollDirection2["Backward"] = 0] = "Backward";
  ScrollDirection2[ScrollDirection2["Forward"] = 1] = "Forward";
})(ScrollDirection || (ScrollDirection = {}));
var FRAME_DURATION = 17;
var scrollModifiers = {
  [ScrollDirection.Forward]: (step) => (value) => value + step,
  [ScrollDirection.Backward]: (step) => (value) => value - step
};
var scrollNormalizers = {
  [ScrollDirection.Forward]: (end) => (value) => Math.min(value, end),
  [ScrollDirection.Backward]: (end) => (value) => Math.max(value, end)
};
var scrollValidators = {
  [ScrollDirection.Forward]: (end) => (start) => start < end,
  [ScrollDirection.Backward]: (end) => (start) => start > end
};
var differenceToScroll = (scrollTop, staticOffset, maxScrollDifference) => {
  return Math.min(Math.abs(staticOffset - scrollTop), maxScrollDifference);
};
var VirtualizationComponent = class _VirtualizationComponent {
  container;
  renderer;
  zone;
  scrollBarWidthService;
  direction = "vertical";
  itemHeight = 1;
  itemWidth = 1;
  topOffset = 0;
  bottomOffset = 0;
  maxScrollDifference = 100;
  scrollOffsetSize = 0;
  scrollDuration = 150;
  skip;
  take;
  total;
  activeIndexChange = new EventEmitter();
  pageChange = new EventEmitter();
  scrollChange = new EventEmitter();
  wrapperClasses = true;
  get horizontalClass() {
    return this.direction === "horizontal";
  }
  totalSize;
  get totalVertexLength() {
    const value = `${this.totalSize}px`;
    return this.direction === "vertical" ? {
      height: value
    } : {
      width: value
    };
  }
  get containerOffsetSize() {
    return this.getContainerProperty(this.direction === "vertical" ? "offsetHeight" : "offsetWidth");
  }
  get containerScrollSize() {
    return this.getContainerProperty(this.direction === "vertical" ? "scrollHeight" : "scrollWidth");
  }
  get containerScrollPosition() {
    return this.getContainerProperty(this.direction === "vertical" ? "scrollTop" : "scrollLeft");
  }
  lastActiveIndex;
  resolvedPromise = Promise.resolve(null);
  scroller;
  rowHeightService;
  dispatcher = new Subject();
  scrollSubscription;
  containerScrollSubscription;
  animationSubscription;
  constructor(scrollerFactory, container, renderer, zone, scrollBarWidthService) {
    this.container = container;
    this.renderer = renderer;
    this.zone = zone;
    this.scrollBarWidthService = scrollBarWidthService;
    this.scroller = scrollerFactory(this.dispatcher);
  }
  ngOnChanges(changes) {
    if (changes.direction || changes.take || changes.total) {
      this.initServices();
      this.totalSize = this.rowHeightService.totalHeight() + this.bottomOffset;
    }
  }
  ngOnInit() {
    if (!this.rowHeightService) {
      this.rowHeightService = this.createRowHeightService();
    }
  }
  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      this.containerScrollSubscription = this.scroll$().pipe(map((event) => event.target)).subscribe((t) => {
        this.dispatcher.next(t);
        this.emitActiveIndex();
      });
    });
  }
  ngOnDestroy() {
    if (this.containerScrollSubscription) {
      this.containerScrollSubscription.unsubscribe();
    }
    if (this.scrollSubscription) {
      this.scrollSubscription.unsubscribe();
    }
    if (this.animationSubscription) {
      this.animationSubscription.unsubscribe();
    }
  }
  getContainerProperty(propertyName) {
    return this.container.nativeElement[propertyName];
  }
  activeIndex() {
    return this.itemIndex(Math.ceil(this.containerScrollPosition));
  }
  itemIndex(offset) {
    return this.rowHeightService.index(offset);
  }
  itemOffset(index) {
    return this.rowHeightService.offset(index);
  }
  isIndexVisible(index) {
    if (!this.rowHeightService) {
      return false;
    }
    const containerTop = this.containerScrollPosition;
    const containerBottom = containerTop + this.containerOffsetSize;
    const top = this.rowHeightService.offset(index);
    const bottom = top + this.rowHeightService.height(index);
    return top >= containerTop && bottom <= containerBottom;
  }
  isListScrolled(index) {
    return this.containerScrollPosition !== this.rowHeightService.offset(index);
  }
  scrollTo(value) {
    const scrollProperty = this.direction === "vertical" ? "scrollTop" : "scrollLeft";
    this.renderer.setProperty(this.container.nativeElement, scrollProperty, value);
  }
  scrollToIndex(index) {
    this.zone.runOutsideAngular(() => {
      this.resolvedPromise.then(() => {
        this.scrollTo(this.rowHeightService.offset(index));
      });
    });
  }
  scrollToBottom() {
    this.scrollTo(this.totalSize);
  }
  animateToIndex(index) {
    if (this.animationSubscription) {
      this.animationSubscription.unsubscribe();
    }
    const indexOffset = this.rowHeightService.offset(index);
    const direction = this.getContainerScrollDirection(indexOffset);
    const {
      start,
      end
    } = this.scrollRange(indexOffset, direction);
    if (start === end) {
      return;
    }
    const step = this.scrollStep(start, end);
    const modifyScroll = scrollModifiers[direction](step);
    const normalizeScroll = scrollNormalizers[direction](end);
    const isScrollValid = scrollValidators[direction](modifyScroll(end));
    this.zone.runOutsideAngular(() => {
      this.animationSubscription = combineLatest(of(start), interval(0, animationFrameScheduler)).pipe(map((stream) => stream[0]), scan(modifyScroll), takeWhile(isScrollValid), map(normalizeScroll)).subscribe((x) => this.scrollTo(x));
    });
  }
  scrollRange(indexOffset, direction) {
    const containerScroll = this.containerScrollPosition;
    if (parseInt(indexOffset, 10) === parseInt(containerScroll, 10)) {
      return {
        start: indexOffset,
        end: indexOffset
      };
    }
    const maxScroll = this.containerMaxScroll();
    const sign = direction === ScrollDirection.Backward ? 1 : -1;
    const difference = differenceToScroll(containerScroll, indexOffset, this.maxScrollDifference);
    const end = Math.min(indexOffset, maxScroll);
    const start = Math.min(Math.max(end + sign * difference, 0), maxScroll);
    return {
      start,
      end
    };
  }
  scrollStep(start, end) {
    return Math.abs(end - start) / (this.scrollDuration / FRAME_DURATION);
  }
  scroll$() {
    return isDocumentAvailable() ? fromEvent(this.container.nativeElement, "scroll") : EMPTY;
  }
  initServices() {
    this.rowHeightService = this.createRowHeightService();
    if (this.scrollSubscription) {
      this.scrollSubscription.unsubscribe();
    }
    this.scrollSubscription = this.scroller.create(this.rowHeightService, this.skip, this.take, this.total, this.topOffset, this.scrollOffsetSize, this.direction).subscribe((x) => {
      if (x instanceof PageAction) {
        this.pageChange.emit(x);
      } else {
        this.scrollChange.emit(x);
      }
    });
  }
  createRowHeightService() {
    const dimension = this.direction === "vertical" ? this.itemHeight : this.itemWidth;
    return new RowHeightService(this.total, dimension, 0);
  }
  emitActiveIndex() {
    const index = this.rowHeightService.index(this.containerScrollPosition - this.topOffset);
    if (this.lastActiveIndex !== index) {
      this.lastActiveIndex = index;
      this.activeIndexChange.emit(index);
    }
  }
  containerMaxScroll() {
    return this.containerScrollSize - this.containerOffsetSize;
  }
  getContainerScrollDirection(indexOffset) {
    return indexOffset < this.containerScrollPosition ? ScrollDirection.Backward : ScrollDirection.Forward;
  }
  static ɵfac = function VirtualizationComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _VirtualizationComponent)(ɵɵdirectiveInject(SCROLLER_FACTORY_TOKEN), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ScrollbarWidthService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _VirtualizationComponent,
    selectors: [["kendo-virtualization"]],
    hostVars: 8,
    hostBindings: function VirtualizationComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("k-flex", ctx.wrapperClasses)("k-content", ctx.wrapperClasses)("k-scrollable", ctx.wrapperClasses)("k-scrollable-horizontal", ctx.horizontalClass);
      }
    },
    inputs: {
      direction: "direction",
      itemHeight: "itemHeight",
      itemWidth: "itemWidth",
      topOffset: "topOffset",
      bottomOffset: "bottomOffset",
      maxScrollDifference: "maxScrollDifference",
      scrollOffsetSize: "scrollOffsetSize",
      scrollDuration: "scrollDuration",
      skip: "skip",
      take: "take",
      total: "total"
    },
    outputs: {
      activeIndexChange: "activeIndexChange",
      pageChange: "pageChange",
      scrollChange: "scrollChange"
    },
    standalone: true,
    features: [ɵɵProvidersFeature([{
      provide: SCROLLER_FACTORY_TOKEN,
      useValue: DEFAULT_SCROLLER_FACTORY
    }]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    ngContentSelectors: _c8,
    decls: 2,
    vars: 3,
    consts: [[1, "k-scrollable-placeholder", 3, "ngStyle"]],
    template: function VirtualizationComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
        ɵɵelement(1, "div", 0);
      }
      if (rf & 2) {
        ɵɵadvance();
        ɵɵclassProp("k-scrollable-horizontal-placeholder", ctx.direction === "horizontal");
        ɵɵproperty("ngStyle", ctx.totalVertexLength);
      }
    },
    dependencies: [NgStyle],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VirtualizationComponent, [{
    type: Component,
    args: [{
      providers: [{
        provide: SCROLLER_FACTORY_TOKEN,
        useValue: DEFAULT_SCROLLER_FACTORY
      }],
      selector: "kendo-virtualization",
      template: `
    <ng-content></ng-content>
    <div
        class="k-scrollable-placeholder"
        [class.k-scrollable-horizontal-placeholder]="direction === 'horizontal'"
        [ngStyle]="totalVertexLength"
    ></div>
  `,
      standalone: true,
      imports: [NgStyle]
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [SCROLLER_FACTORY_TOKEN]
    }]
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: NgZone
  }, {
    type: ScrollbarWidthService
  }], {
    direction: [{
      type: Input
    }],
    itemHeight: [{
      type: Input
    }],
    itemWidth: [{
      type: Input
    }],
    topOffset: [{
      type: Input
    }],
    bottomOffset: [{
      type: Input
    }],
    maxScrollDifference: [{
      type: Input
    }],
    scrollOffsetSize: [{
      type: Input
    }],
    scrollDuration: [{
      type: Input
    }],
    skip: [{
      type: Input
    }],
    take: [{
      type: Input
    }],
    total: [{
      type: Input
    }],
    activeIndexChange: [{
      type: Output
    }],
    pageChange: [{
      type: Output
    }],
    scrollChange: [{
      type: Output
    }],
    wrapperClasses: [{
      type: HostBinding,
      args: ["class.k-flex"]
    }, {
      type: HostBinding,
      args: ["class.k-content"]
    }, {
      type: HostBinding,
      args: ["class.k-scrollable"]
    }],
    horizontalClass: [{
      type: HostBinding,
      args: ["class.k-scrollable-horizontal"]
    }]
  });
})();
var ITEMS_COUNT = 30;
var NavigationComponent = class _NavigationComponent {
  bus;
  dom;
  intl;
  cdr;
  renderer;
  activeView;
  min = new Date(MIN_DATE);
  max = new Date(MAX_DATE);
  focusedDate = /* @__PURE__ */ new Date();
  templateRef;
  valueChange = new EventEmitter();
  pageChange = new EventEmitter();
  virtualization;
  list;
  get getComponentClass() {
    return true;
  }
  activeViewValue;
  service;
  dates = [];
  style;
  take = ITEMS_COUNT;
  skip;
  total;
  itemHeight;
  topOffset;
  bottomOffset;
  maxViewHeight;
  indexToScroll = -1;
  intlSubscription;
  constructor(bus, dom, intl, cdr, renderer) {
    this.bus = bus;
    this.dom = dom;
    this.intl = intl;
    this.cdr = cdr;
    this.renderer = renderer;
  }
  ngOnInit() {
    this.dom.ensureHeights();
    const calendarHeight = this.dom.calendarHeight;
    this.itemHeight = this.dom.navigationItemHeight;
    this.maxViewHeight = this.dom.monthViewHeight;
    this.topOffset = (calendarHeight - this.itemHeight) / 2;
    this.bottomOffset = calendarHeight - this.itemHeight;
    this.intlSubscription = this.intl.changes.subscribe(this.intlChange.bind(this));
  }
  ngOnChanges(changes) {
    this.service = this.bus.service(this.activeView);
    if (!this.service) {
      return;
    }
    this.activeViewValue = CalendarViewEnum[this.activeView];
    const viewDate = dateInRange(this.focusedDate, this.min, this.max);
    const total = this.service.total(this.min, this.max);
    const totalChanged = this.total && this.total !== total;
    this.skip = this.service.skip(viewDate, this.min);
    this.total = total;
    if (totalChanged || !this.service.isInArray(viewDate, this.dates)) {
      this.dates = this.service.datesList(viewDate, this.getTake(this.skip));
    }
    if (!!changes.focusedDate || totalChanged) {
      this.indexToScroll = this.service.skip(this.focusedDate, this.min);
    }
  }
  ngOnDestroy() {
    if (this.intlSubscription) {
      this.intlSubscription.unsubscribe();
    }
  }
  ngAfterViewInit() {
    if (this.indexToScroll === -1) {
      return;
    }
    this.virtualization.scrollToIndex(this.indexToScroll);
    this.indexToScroll = -1;
  }
  ngAfterViewChecked() {
    if (this.indexToScroll === -1) {
      return;
    }
    this.virtualization.scrollToIndex(this.indexToScroll);
    this.indexToScroll = -1;
  }
  onPageChange({
    skip
  }) {
    this.dates = this.service.datesList(this.service.addToDate(this.min, skip), this.getTake(skip));
    this.pageChange.emit();
  }
  scrollChange({
    offset
  }) {
    const el = this.list.nativeElement;
    const translate = `translateY(${offset}px)`;
    this.renderer.setStyle(el, "transform", translate);
    this.renderer.setStyle(el, "-ms-transform", translate);
  }
  handleDateChange(args) {
    const item = closestInScope(args.target, (node) => node.hasAttribute("data-date-index"), this.list.nativeElement);
    if (item) {
      const index = parseInt(item.getAttribute("data-date-index"), 10);
      const candidate = this.dates[index];
      this.valueChange.emit(cloneDate(candidate));
    }
  }
  getTake(skip) {
    return Math.min(this.total - skip, this.take);
  }
  intlChange() {
    if (this.activeView === CalendarViewEnum.month) {
      this.cdr.markForCheck();
    }
  }
  static ɵfac = function NavigationComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NavigationComponent)(ɵɵdirectiveInject(BusViewService), ɵɵdirectiveInject(CalendarDOMService), ɵɵdirectiveInject(IntlService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Renderer2));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NavigationComponent,
    selectors: [["kendo-calendar-navigation"]],
    viewQuery: function NavigationComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(VirtualizationComponent, 5);
        ɵɵviewQuery(_c9, 7);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.virtualization = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.list = _t.first);
      }
    },
    hostVars: 2,
    hostBindings: function NavigationComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("k-calendar-navigation", ctx.getComponentClass);
      }
    },
    inputs: {
      activeView: "activeView",
      min: "min",
      max: "max",
      focusedDate: "focusedDate",
      templateRef: "templateRef"
    },
    outputs: {
      valueChange: "valueChange",
      pageChange: "pageChange"
    },
    standalone: true,
    features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    decls: 5,
    vars: 12,
    consts: [["list", ""], [1, "k-calendar-navigation-highlight"], [3, "pageChange", "scrollChange", "skip", "take", "total", "itemHeight", "topOffset", "bottomOffset", "maxScrollDifference"], [1, "k-reset", 3, "kendoEventsOutsideAngular", "scope"], [4, "kFor", "kForOf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function NavigationComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵelement(0, "span", 1);
        ɵɵelementStart(1, "kendo-virtualization", 2);
        ɵɵlistener("pageChange", function NavigationComponent_Template_kendo_virtualization_pageChange_1_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onPageChange($event));
        })("scrollChange", function NavigationComponent_Template_kendo_virtualization_scrollChange_1_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.scrollChange($event));
        });
        ɵɵelementStart(2, "ul", 3, 0);
        ɵɵtemplate(4, NavigationComponent_li_4_Template, 4, 5, "li", 4);
        ɵɵelementEnd()();
      }
      if (rf & 2) {
        ɵɵadvance();
        ɵɵproperty("skip", ctx.skip)("take", ctx.take)("total", ctx.total)("itemHeight", ctx.itemHeight)("topOffset", ctx.topOffset)("bottomOffset", ctx.bottomOffset)("maxScrollDifference", ctx.maxViewHeight);
        ɵɵadvance();
        ɵɵproperty("kendoEventsOutsideAngular", ɵɵpureFunction1(10, _c5, ctx.handleDateChange))("scope", ctx);
        ɵɵadvance(2);
        ɵɵproperty("kForOf", ctx.dates);
      }
    },
    dependencies: [VirtualizationComponent, EventsOutsideAngularDirective, KForOf, NgTemplateOutlet],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavigationComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-calendar-navigation",
      template: `
    <span class="k-calendar-navigation-highlight"></span>
    <kendo-virtualization
      [skip]="skip"
      [take]="take"
      [total]="total"
      [itemHeight]="itemHeight"
      [topOffset]="topOffset"
      [bottomOffset]="bottomOffset"
      [maxScrollDifference]="maxViewHeight"
      (pageChange)="onPageChange($event)"
      (scrollChange)="scrollChange($event)"
      >
      <ul #list class="k-reset" [kendoEventsOutsideAngular]="{ click: handleDateChange }" [scope]="this">
        <li *kFor="let date of dates; let index=index" [attr.data-date-index]="index">
          <span [class.k-calendar-navigation-marker]="service.isRangeStart(date)">
            @if (!templateRef) {
              {{service.navigationTitle(date)}}
            }
            @if (templateRef) {
              <ng-template
                [ngTemplateOutlet]="templateRef"
                [ngTemplateOutletContext]="{ $implicit: service.navigationTitle(date), activeView: activeViewValue, date: date }"
              ></ng-template>
            }
          </span>
        </li>
      </ul>
    </kendo-virtualization>
    `,
      standalone: true,
      imports: [VirtualizationComponent, EventsOutsideAngularDirective, KForOf, NgTemplateOutlet]
    }]
  }], () => [{
    type: BusViewService
  }, {
    type: CalendarDOMService
  }, {
    type: IntlService
  }, {
    type: ChangeDetectorRef
  }, {
    type: Renderer2
  }], {
    activeView: [{
      type: Input
    }],
    min: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    focusedDate: [{
      type: Input
    }],
    templateRef: [{
      type: Input
    }],
    valueChange: [{
      type: Output
    }],
    pageChange: [{
      type: Output
    }],
    virtualization: [{
      type: ViewChild,
      args: [VirtualizationComponent, {
        static: false
      }]
    }],
    list: [{
      type: ViewChild,
      args: ["list", {
        static: true
      }]
    }],
    getComponentClass: [{
      type: HostBinding,
      args: ["class.k-calendar-navigation"]
    }]
  });
})();
var VIEWS_COUNT = 5;
var isEqualMonthYear = (date1, date2) => date1 && date2 && date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth();
var ViewListComponent = class _ViewListComponent {
  bus;
  cdr;
  intl;
  dom;
  renderer;
  allowReverse;
  cellTemplateRef;
  weekNumberTemplateRef;
  headerTitleTemplateRef;
  headerTemplateRef;
  footerTemplateRef;
  showOtherMonthDays;
  activeView;
  cellUID;
  focusedDate;
  isActive = true;
  min = new Date(MIN_DATE);
  max = new Date(MAX_DATE);
  selectedDates = [];
  tabIndex = 0;
  disabled = false;
  id;
  showFooter = false;
  weekDaysFormat = "short";
  activeRangeEnd;
  selectionRange;
  size;
  get weekNumber() {
    return this.showWeekNumbers && this.isMonthView();
  }
  set weekNumber(showWeekNumbers) {
    this.showWeekNumbers = showWeekNumbers;
  }
  cellEnter = new EventEmitter();
  cellClick = new EventEmitter();
  weekNumberCellClick = new EventEmitter();
  activeDateChange = new EventEmitter();
  todayButtonClick = new EventEmitter();
  pageChange = new EventEmitter();
  focusCalendar = new EventEmitter();
  blurCalendar = new EventEmitter();
  focusedCellChange = new EventEmitter();
  virtualization;
  headerComponent;
  get headerTitle() {
    return this.headerComponent?.title;
  }
  list;
  getComponentClass = true;
  get getComponentMonthClass() {
    return this.activeView === CalendarViewEnum.month;
  }
  get getComponentYearClass() {
    return this.activeView === CalendarViewEnum.year;
  }
  get getComponentDecadeClass() {
    return this.activeView === CalendarViewEnum.decade;
  }
  get getComponentCenturyClass() {
    return this.activeView === CalendarViewEnum.century;
  }
  get activeViewValue() {
    return CalendarViewEnum[this.activeView];
  }
  service;
  activeDate;
  dates = [];
  cols = [];
  weekNames = [];
  wideWeekNames = [];
  take = VIEWS_COUNT;
  skip;
  total;
  bottomOffset;
  viewHeight;
  viewOffset;
  animateToIndex = true;
  indexToScroll = -1;
  showWeekNumbers;
  minViewsToRender = 1;
  intlSubscription;
  constructor(bus, cdr, intl, dom, renderer) {
    this.bus = bus;
    this.cdr = cdr;
    this.intl = intl;
    this.dom = dom;
    this.renderer = renderer;
  }
  ngOnInit() {
    this.weekNames = this.getWeekNames(this.weekDaysFormat);
    this.wideWeekNames = this.getWeekNames("wide");
    this.bottomOffset = this.getBottomOffset();
    this.viewOffset = -1 * this.dom.headerHeight;
    this.viewHeight = this.dom.viewHeight(this.activeView);
    this.intlSubscription = this.intl.changes.subscribe(this.intlChange.bind(this));
  }
  ngOnChanges(changes) {
    this.service = this.bus.service(this.activeView);
    if (!this.service) {
      return;
    }
    this.cols = new Array(this.service.rowLength({
      prependCell: this.weekNumber
    })).fill("");
    this.weekNames = hasChange(changes, "weekNumber") && this.weekNumber ? this.getWeekNames(this.weekDaysFormat) : this.weekNames;
    if (hasChange(changes, "weekDaysFormat") && !hasChange(changes, "weekNumber")) {
      this.weekNames = this.getWeekNames(this.weekDaysFormat);
    }
    this.wideWeekNames = hasChange(changes, "weekNumber") && this.weekNumber ? this.getWeekNames("wide") : this.weekNames;
    const activeViewChanged = hasChange(changes, "activeView");
    const focusedDate = this.focusedDate;
    const viewDate = dateInRange(this.service.viewDate(focusedDate, this.max, this.minViewsToRender), this.min, this.max);
    const total = this.service.total(this.min, this.max);
    const totalChanged = this.total && this.total !== total;
    const generateDates = totalChanged || !this.service.isInArray(focusedDate, this.dates);
    this.skip = this.service.skip(viewDate, this.min);
    this.total = total;
    this.animateToIndex = !activeViewChanged;
    this.bottomOffset = this.getBottomOffset();
    this.viewHeight = this.dom.viewHeight(this.activeView);
    if (generateDates) {
      this.dates = this.service.datesList(viewDate, this.getTake(this.skip));
    }
    if (!isEqualMonthYear(this.activeDate, focusedDate)) {
      this.activeDate = cloneDate(focusedDate);
    }
    const updateIndex = hasChange(changes, "focusedDate") || activeViewChanged;
    if (generateDates || updateIndex || this.virtualization.isIndexVisible(this.skip)) {
      this.indexToScroll = this.service.skip(focusedDate, this.min);
    }
  }
  ngOnDestroy() {
    if (this.intlSubscription) {
      this.intlSubscription.unsubscribe();
    }
  }
  ngAfterViewInit() {
    if (this.indexToScroll === -1) {
      return;
    }
    this.virtualization.scrollToIndex(this.indexToScroll);
    this.indexToScroll = -1;
  }
  ngAfterViewChecked() {
    if (this.indexToScroll === -1) {
      return;
    }
    this.virtualization[this.animateToIndex ? "animateToIndex" : "scrollToIndex"](this.indexToScroll);
    this.animateToIndex = true;
    this.indexToScroll = -1;
  }
  onPageChange({
    skip
  }) {
    this.dates = this.service.datesList(this.service.addToDate(this.min, skip), this.getTake(skip));
    this.pageChange.emit();
  }
  scrollChange({
    offset
  }) {
    const el = this.list.nativeElement;
    const translate = `translateY(${offset}px)`;
    this.renderer.setStyle(el, "transform", translate);
    this.renderer.setStyle(el, "-ms-transform", translate);
  }
  setActiveDate(index) {
    const candidate = this.service.addToDate(this.min, index);
    this.activeDate = candidate;
    this.activeDateChange.emit(candidate);
    this.cdr.detectChanges();
  }
  isMonthView() {
    return this.activeView === CalendarViewEnum.month;
  }
  isScrolled() {
    return this.virtualization.isListScrolled(this.service.skip(this.focusedDate, this.min));
  }
  getTabIndex() {
    return this.disabled ? null : this.tabIndex;
  }
  getBottomOffset() {
    return this.getScrollableHeight() - this.dom.viewHeight(this.activeView);
  }
  getScrollableHeight() {
    return this.activeView === CalendarViewEnum.month ? this.dom.scrollableContentHeight : this.dom.scrollableYearContentHeight;
  }
  getTake(skip) {
    return Math.min(this.total - skip, this.take);
  }
  getWeekNames(nameType) {
    const weekNames = shiftWeekNames(this.intl.dateFormatNames({
      nameType,
      type: "days"
    }), this.intl.firstDay());
    return this.weekNumber ? [""].concat(weekNames) : weekNames;
  }
  intlChange() {
    this.weekNames = this.getWeekNames(this.weekDaysFormat);
    this.wideWeekNames = this.getWeekNames("wide");
    if (this.isMonthView()) {
      this.cdr.markForCheck();
    }
  }
  static ɵfac = function ViewListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewListComponent)(ɵɵdirectiveInject(BusViewService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(IntlService), ɵɵdirectiveInject(CalendarDOMService), ɵɵdirectiveInject(Renderer2));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _ViewListComponent,
    selectors: [["kendo-calendar-viewlist"]],
    viewQuery: function ViewListComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(VirtualizationComponent, 5);
        ɵɵviewQuery(HeaderComponent, 5);
        ɵɵviewQuery(_c9, 7);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.virtualization = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.headerComponent = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.list = _t.first);
      }
    },
    hostVars: 12,
    hostBindings: function ViewListComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("k-vstack", ctx.getComponentClass)("k-calendar-view", ctx.getComponentClass)("k-calendar-monthview", ctx.getComponentMonthClass)("k-calendar-yearview", ctx.getComponentYearClass)("k-calendar-decadeview", ctx.getComponentDecadeClass)("k-calendar-centuryview", ctx.getComponentCenturyClass);
      }
    },
    inputs: {
      allowReverse: "allowReverse",
      cellTemplateRef: "cellTemplateRef",
      weekNumberTemplateRef: "weekNumberTemplateRef",
      headerTitleTemplateRef: "headerTitleTemplateRef",
      headerTemplateRef: "headerTemplateRef",
      footerTemplateRef: "footerTemplateRef",
      showOtherMonthDays: "showOtherMonthDays",
      activeView: "activeView",
      cellUID: "cellUID",
      focusedDate: "focusedDate",
      isActive: "isActive",
      min: "min",
      max: "max",
      selectedDates: "selectedDates",
      tabIndex: "tabIndex",
      disabled: "disabled",
      id: "id",
      showFooter: "showFooter",
      weekDaysFormat: "weekDaysFormat",
      activeRangeEnd: "activeRangeEnd",
      selectionRange: "selectionRange",
      size: "size",
      weekNumber: "weekNumber"
    },
    outputs: {
      cellEnter: "cellEnter",
      cellClick: "cellClick",
      weekNumberCellClick: "weekNumberCellClick",
      activeDateChange: "activeDateChange",
      todayButtonClick: "todayButtonClick",
      pageChange: "pageChange",
      focusCalendar: "focusCalendar",
      blurCalendar: "blurCalendar",
      focusedCellChange: "focusedCellChange"
    },
    standalone: true,
    features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    decls: 10,
    vars: 22,
    consts: [["list", ""], [3, "todayButtonClick", "currentDate", "size", "min", "max", "id", "activeView", "titleTemplateRef", "headerTemplateRef"], [1, "k-calendar-weekdays", "k-calendar-table", 3, "table-layout"], [3, "pageChange", "scrollChange", "activeIndexChange", "tabindex", "skip", "take", "total", "itemHeight", "topOffset", "bottomOffset", "scrollOffsetSize", "maxScrollDifference"], ["role", "grid", 1, "k-calendar-table", 3, "focus", "blur"], ["class", "k-calendar-tbody", "kendoCalendarView", "", "role", "rowgroup", 3, "allowReverse", "activeRangeEnd", "selectionRange", "showOtherMonthDays", "headerTitle", "activeView", "isActive", "min", "max", "cellUID", "focusedDate", "selectedDates", "weekNumber", "templateRef", "weekNumberTemplateRef", "viewDate", "cellClick", "weekNumberCellClick", "focusedCellId", "cellEnter", 4, "kFor", "kForOf"], [3, "footerTemplateRef", "activeViewValue", "currentDate"], [1, "k-calendar-weekdays", "k-calendar-table"], [1, "k-calendar-thead"], [1, "k-calendar-tr"], ["scope", "col", "role", "columnheader", 1, "k-calendar-th"], ["kendoCalendarView", "", "role", "rowgroup", 1, "k-calendar-tbody", 3, "cellClick", "weekNumberCellClick", "focusedCellId", "cellEnter", "allowReverse", "activeRangeEnd", "selectionRange", "showOtherMonthDays", "headerTitle", "activeView", "isActive", "min", "max", "cellUID", "focusedDate", "selectedDates", "weekNumber", "templateRef", "weekNumberTemplateRef", "viewDate"]],
    template: function ViewListComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "kendo-calendar-header", 1);
        ɵɵlistener("todayButtonClick", function ViewListComponent_Template_kendo_calendar_header_todayButtonClick_0_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.todayButtonClick.emit($event));
        });
        ɵɵelementEnd();
        ɵɵtemplate(1, ViewListComponent_Conditional_1_Template, 5, 2, "table", 2);
        ɵɵelementStart(2, "kendo-virtualization", 3);
        ɵɵlistener("pageChange", function ViewListComponent_Template_kendo_virtualization_pageChange_2_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onPageChange($event));
        })("scrollChange", function ViewListComponent_Template_kendo_virtualization_scrollChange_2_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.scrollChange($event));
        })("activeIndexChange", function ViewListComponent_Template_kendo_virtualization_activeIndexChange_2_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.setActiveDate($event));
        });
        ɵɵelementStart(3, "table", 4, 0);
        ɵɵlistener("focus", function ViewListComponent_Template_table_focus_3_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.focusCalendar.emit());
        })("blur", function ViewListComponent_Template_table_blur_3_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.blurCalendar.emit($event));
        });
        ɵɵelementStart(5, "colgroup");
        ɵɵrepeaterCreate(6, ViewListComponent_For_7_Template, 1, 0, "col", null, ɵɵrepeaterTrackByIndex);
        ɵɵelementEnd();
        ɵɵtemplate(8, ViewListComponent_tbody_8_Template, 1, 16, "tbody", 5);
        ɵɵelementEnd()();
        ɵɵtemplate(9, ViewListComponent_Conditional_9_Template, 1, 3, "kendo-calendar-footer", 6);
      }
      if (rf & 2) {
        ɵɵproperty("currentDate", ctx.activeDate)("size", ctx.size)("min", ctx.min)("max", ctx.max)("id", ctx.id)("activeView", ctx.activeView)("titleTemplateRef", ctx.headerTitleTemplateRef)("headerTemplateRef", ctx.headerTemplateRef);
        ɵɵadvance();
        ɵɵconditional(ctx.isMonthView() ? 1 : -1);
        ɵɵadvance();
        ɵɵproperty("tabindex", -1)("skip", ctx.skip)("take", ctx.take)("total", ctx.total)("itemHeight", ctx.viewHeight)("topOffset", ctx.viewOffset)("bottomOffset", ctx.bottomOffset)("scrollOffsetSize", ctx.viewOffset)("maxScrollDifference", ctx.viewHeight);
        ɵɵadvance();
        ɵɵattribute("tabindex", ctx.getTabIndex())("aria-labelledby", ctx.id);
        ɵɵadvance(3);
        ɵɵrepeater(ctx.cols);
        ɵɵadvance(2);
        ɵɵproperty("kForOf", ctx.dates);
        ɵɵadvance();
        ɵɵconditional(ctx.showFooter ? 9 : -1);
      }
    },
    dependencies: [HeaderComponent, VirtualizationComponent, KForOf, ViewComponent, FooterComponent],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewListComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-calendar-viewlist",
      template: `
    <kendo-calendar-header
      [currentDate]="activeDate"
      [size]="size"
      [min]="min"
      [max]="max"
      [id]="id"
      [activeView]="activeView"
      [titleTemplateRef]="headerTitleTemplateRef"
      [headerTemplateRef]="headerTemplateRef"
      (todayButtonClick)="todayButtonClick.emit($event)"
      >
    </kendo-calendar-header>
    @if (isMonthView()) {
      <table class="k-calendar-weekdays k-calendar-table" [style.table-layout]="'auto'">
        <thead class="k-calendar-thead">
          <tr class="k-calendar-tr">
            @for (name of weekNames; track $index; let i = $index) {
              <th class="k-calendar-th" scope="col" [attr.aria-label]="wideWeekNames[i]" role="columnheader">{{name}}</th>
            }
          </tr>
        </thead>
      </table>
    }
    <kendo-virtualization
      [tabindex]="-1"
      [skip]="skip"
      [take]="take"
      [total]="total"
      [itemHeight]="viewHeight"
      [topOffset]="viewOffset"
      [bottomOffset]="bottomOffset"
      [scrollOffsetSize]="viewOffset"
      [maxScrollDifference]="viewHeight"
      (pageChange)="onPageChange($event)"
      (scrollChange)="scrollChange($event)"
      (activeIndexChange)="setActiveDate($event)"
      >
      <table
        #list
        role="grid"
        class="k-calendar-table"
        [attr.tabindex]="getTabIndex()"
        [attr.aria-labelledby]="id"
        (focus)="focusCalendar.emit()"
        (blur)="blurCalendar.emit($event)"
        >
        <colgroup>@for (_ of cols; track $index) {
        <col />
      }</colgroup>

      <tbody class="k-calendar-tbody"
        *kFor="let date of dates"
        kendoCalendarView
        [allowReverse]="allowReverse"
        [activeRangeEnd]="activeRangeEnd"
        [selectionRange]="selectionRange"
        [showOtherMonthDays]="showOtherMonthDays"
        [headerTitle]="headerTitle"
        role="rowgroup"
        [activeView]="activeView"
        [isActive]="isActive"
        [min]="min" [max]="max"
        [cellUID]="cellUID"
        [focusedDate]="focusedDate"
        [selectedDates]="selectedDates"
        [weekNumber]="weekNumber"
        [templateRef]="cellTemplateRef"
        [weekNumberTemplateRef]="weekNumberTemplateRef"
        [viewDate]="date"
        (cellClick)="cellClick.emit($event)"
        (weekNumberCellClick)="weekNumberCellClick.emit($event)"
        (focusedCellId)="focusedCellChange.emit($event)"
        (cellEnter)="cellEnter.emit($event)"
      ></tbody>
    </table>
    </kendo-virtualization>
    @if (showFooter) {
      <kendo-calendar-footer
        [footerTemplateRef]="footerTemplateRef"
        [activeViewValue]="activeViewValue"
        [currentDate]="activeDate">
      </kendo-calendar-footer>
    }
    `,
      standalone: true,
      imports: [HeaderComponent, VirtualizationComponent, KForOf, ViewComponent, FooterComponent]
    }]
  }], () => [{
    type: BusViewService
  }, {
    type: ChangeDetectorRef
  }, {
    type: IntlService
  }, {
    type: CalendarDOMService
  }, {
    type: Renderer2
  }], {
    allowReverse: [{
      type: Input
    }],
    cellTemplateRef: [{
      type: Input
    }],
    weekNumberTemplateRef: [{
      type: Input
    }],
    headerTitleTemplateRef: [{
      type: Input
    }],
    headerTemplateRef: [{
      type: Input
    }],
    footerTemplateRef: [{
      type: Input
    }],
    showOtherMonthDays: [{
      type: Input
    }],
    activeView: [{
      type: Input
    }],
    cellUID: [{
      type: Input
    }],
    focusedDate: [{
      type: Input
    }],
    isActive: [{
      type: Input
    }],
    min: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    selectedDates: [{
      type: Input
    }],
    tabIndex: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    showFooter: [{
      type: Input
    }],
    weekDaysFormat: [{
      type: Input
    }],
    activeRangeEnd: [{
      type: Input
    }],
    selectionRange: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    weekNumber: [{
      type: Input
    }],
    cellEnter: [{
      type: Output
    }],
    cellClick: [{
      type: Output
    }],
    weekNumberCellClick: [{
      type: Output
    }],
    activeDateChange: [{
      type: Output
    }],
    todayButtonClick: [{
      type: Output
    }],
    pageChange: [{
      type: Output
    }],
    focusCalendar: [{
      type: Output
    }],
    blurCalendar: [{
      type: Output
    }],
    focusedCellChange: [{
      type: Output
    }],
    virtualization: [{
      type: ViewChild,
      args: [VirtualizationComponent, {
        static: false
      }]
    }],
    headerComponent: [{
      type: ViewChild,
      args: [HeaderComponent, {
        static: false
      }]
    }],
    list: [{
      type: ViewChild,
      args: ["list", {
        static: true
      }]
    }],
    getComponentClass: [{
      type: HostBinding,
      args: ["class.k-vstack"]
    }, {
      type: HostBinding,
      args: ["class.k-calendar-view"]
    }],
    getComponentMonthClass: [{
      type: HostBinding,
      args: ["class.k-calendar-monthview"]
    }],
    getComponentYearClass: [{
      type: HostBinding,
      args: ["class.k-calendar-yearview"]
    }],
    getComponentDecadeClass: [{
      type: HostBinding,
      args: ["class.k-calendar-decadeview"]
    }],
    getComponentCenturyClass: [{
      type: HostBinding,
      args: ["class.k-calendar-centuryview"]
    }]
  });
})();
var divideByMagnitude = (magnitude) => (x) => Math.floor(x / magnitude);
var powerByMagnitude = (magnitude) => (x) => x * magnitude;
var ScrollSyncService = class _ScrollSyncService {
  dom;
  zone;
  divideByMagnitude;
  powerByMagnitude;
  navSubscription;
  viewSubscription;
  navigator;
  view;
  constructor(dom, zone) {
    this.dom = dom;
    this.zone = zone;
  }
  configure(activeView) {
    const magnitude = Math.max(this.dom.viewHeight(activeView) / this.dom.navigationItemHeight, 1);
    this.divideByMagnitude = divideByMagnitude(magnitude);
    this.powerByMagnitude = powerByMagnitude(magnitude);
  }
  sync(navigator2, view2) {
    this.unsubscribe();
    if (!navigator2 || !view2) {
      return;
    }
    this.navigator = navigator2;
    this.view = view2;
    this.zone.runOutsideAngular(() => {
      let navScrolled, monthScrolled;
      this.navSubscription = navigator2.scroll$().subscribe((e) => {
        if (monthScrolled) {
          monthScrolled = false;
          return;
        }
        navScrolled = true;
        this.scrollSiblingOf(e.target);
      });
      this.viewSubscription = view2.scroll$().subscribe((e) => {
        if (navScrolled) {
          navScrolled = false;
          return;
        }
        monthScrolled = true;
        this.scrollSiblingOf(e.target);
      });
    });
  }
  scrollSiblingOf(scrolledElement) {
    const component = this.siblingComponent(scrolledElement);
    const scrollTop = this.calculateScroll(component, scrolledElement.scrollTop);
    component.scrollTo(scrollTop);
  }
  siblingComponent(scrollableElement) {
    return this.navigator.container.nativeElement === scrollableElement ? this.view : this.navigator;
  }
  calculateScroll(component, scrollTop) {
    const modifier = component === this.navigator ? this.divideByMagnitude : this.powerByMagnitude;
    return modifier(scrollTop);
  }
  destroy() {
    this.unsubscribe();
  }
  unsubscribe() {
    if (this.navSubscription) {
      this.navSubscription.unsubscribe();
    }
    if (this.viewSubscription) {
      this.viewSubscription.unsubscribe();
    }
  }
  static ɵfac = function ScrollSyncService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ScrollSyncService)(ɵɵinject(CalendarDOMService), ɵɵinject(NgZone));
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _ScrollSyncService,
    factory: _ScrollSyncService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollSyncService, [{
    type: Injectable
  }], () => [{
    type: CalendarDOMService
  }, {
    type: NgZone
  }], null);
})();
var NavigationItemTemplateDirective = class _NavigationItemTemplateDirective {
  templateRef;
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static ɵfac = function NavigationItemTemplateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NavigationItemTemplateDirective)(ɵɵdirectiveInject(TemplateRef));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _NavigationItemTemplateDirective,
    selectors: [["", "kendoCalendarNavigationItemTemplate", ""]],
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavigationItemTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoCalendarNavigationItemTemplate]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var PickerService = class {
  onFocus = new EventEmitter();
  onBlur = new EventEmitter();
  sameDateSelected = new EventEmitter();
  dateCompletenessChange = new EventEmitter();
  calendar;
  input;
  timeSelector;
};
var MultiViewCalendarCustomMessagesComponent = class _MultiViewCalendarCustomMessagesComponent extends Messages {
  service;
  constructor(service) {
    super();
    this.service = service;
  }
  get override() {
    return true;
  }
  static ɵfac = function MultiViewCalendarCustomMessagesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MultiViewCalendarCustomMessagesComponent)(ɵɵdirectiveInject(LocalizationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _MultiViewCalendarCustomMessagesComponent,
    selectors: [["kendo-multiviewcalendar-messages"]],
    standalone: true,
    features: [ɵɵProvidersFeature([{
      provide: Messages,
      useExisting: forwardRef(() => _MultiViewCalendarCustomMessagesComponent)
    }]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function MultiViewCalendarCustomMessagesComponent_Template(rf, ctx) {
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MultiViewCalendarCustomMessagesComponent, [{
    type: Component,
    args: [{
      providers: [{
        provide: Messages,
        useExisting: forwardRef(() => MultiViewCalendarCustomMessagesComponent)
      }],
      selector: "kendo-multiviewcalendar-messages",
      template: ``,
      standalone: true
    }]
  }], () => [{
    type: LocalizationService
  }], null);
})();
var CalendarMessages = class _CalendarMessages extends ComponentMessages {
  /**
   * The **Today** button text in the header of the Calendar.
   */
  today;
  /**
   * The title of the **Prev** button in the header of the Classic Calendar.
   */
  prevButtonTitle;
  /**
   * The title of the **Next** button in the header of the Classic Calendar.
   */
  nextButtonTitle;
  /**
   * The title of the **Parent View** button in the header of the Calendar.
   */
  parentViewButtonTitle;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵCalendarMessages_BaseFactory;
    return function CalendarMessages_Factory(__ngFactoryType__) {
      return (ɵCalendarMessages_BaseFactory || (ɵCalendarMessages_BaseFactory = ɵɵgetInheritedFactory(_CalendarMessages)))(__ngFactoryType__ || _CalendarMessages);
    };
  })();
  static ɵdir = ɵɵdefineDirective({
    type: _CalendarMessages,
    selectors: [["kendo-calendar-messages-base"]],
    inputs: {
      today: "today",
      prevButtonTitle: "prevButtonTitle",
      nextButtonTitle: "nextButtonTitle",
      parentViewButtonTitle: "parentViewButtonTitle"
    },
    features: [ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarMessages, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line
      selector: "kendo-calendar-messages-base"
    }]
  }], null, {
    today: [{
      type: Input
    }],
    prevButtonTitle: [{
      type: Input
    }],
    nextButtonTitle: [{
      type: Input
    }],
    parentViewButtonTitle: [{
      type: Input
    }]
  });
})();
var CalendarLocalizedMessagesDirective = class _CalendarLocalizedMessagesDirective extends CalendarMessages {
  service;
  constructor(service) {
    super();
    this.service = service;
  }
  static ɵfac = function CalendarLocalizedMessagesDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CalendarLocalizedMessagesDirective)(ɵɵdirectiveInject(LocalizationService));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _CalendarLocalizedMessagesDirective,
    selectors: [["", "kendoCalendarLocalizedMessages", ""]],
    standalone: true,
    features: [ɵɵProvidersFeature([{
      provide: CalendarMessages,
      useExisting: forwardRef(() => _CalendarLocalizedMessagesDirective)
    }]), ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarLocalizedMessagesDirective, [{
    type: Directive,
    args: [{
      providers: [{
        provide: CalendarMessages,
        useExisting: forwardRef(() => CalendarLocalizedMessagesDirective)
      }],
      selector: "[kendoCalendarLocalizedMessages]",
      standalone: true
    }]
  }], () => [{
    type: LocalizationService
  }], null);
})();
var BOTTOM_VIEW_DOC_LINK = "https://www.telerik.com/kendo-angular-ui/components/dateinputs/api/CalendarComponent/#toc-bottomview";
var TOP_VIEW_DOC_LINK = "https://www.telerik.com/kendo-angular-ui/components/dateinputs/api/CalendarComponent/#toc-topview";
var MIN_DOC_LINK$2 = "https://www.telerik.com/kendo-angular-ui/components/dateinputs/api/CalendarComponent/#toc-min";
var MAX_DOC_LINK$2 = "https://www.telerik.com/kendo-angular-ui/components/dateinputs/api/CalendarComponent/#toc-max";
var VALUE_DOC_LINK$4 = "https://www.telerik.com/kendo-angular-ui/components/dateinputs/calendar/#toc-using-with-json";
var virtualizationProp = (x) => x ? x.virtualization : null;
var CALENDAR_VALUE_ACCESSOR = {
  multi: true,
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CalendarComponent)
};
var CALENDAR_RANGE_VALIDATORS = {
  multi: true,
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => CalendarComponent)
};
var KENDO_INPUT_PROVIDER = {
  provide: KendoInput,
  useExisting: forwardRef(() => CalendarComponent)
};
var CalendarComponent = class _CalendarComponent {
  bus;
  dom;
  element;
  navigator;
  renderer;
  cdr;
  ngZone;
  injector;
  scrollSyncService;
  disabledDatesService;
  localization;
  selectionService;
  pickerService;
  /**
   * Shows days that fall outside the current month and the default values per Calendar type are false for infinite and true for classic ([see example]({% slug viewoptions_calendar %}#toc-displaying-other-month-days)).
   */
  set showOtherMonthDays(_showOtherMonthDays) {
    this._showOtherMonthDays = _showOtherMonthDays;
  }
  get showOtherMonthDays() {
    if (this._showOtherMonthDays === void 0) {
      return this.type === "classic";
    }
    return this._showOtherMonthDays;
  }
  _showOtherMonthDays;
  /**
   * @hidden
   */
  id;
  /**
   * @hidden
   */
  get popupId() {
    return `kendo-popup-${this.bus.calendarId}`;
  }
  /**
   * Specifies the focused date of the Calendar
   * ([see example]({% slug dates_calendar %}#toc-focused-dates)).
   *
   * If the Calendar is outside the `min` or `max` range, the component normalizes the defined `focusedDate`.
   */
  set focusedDate(focusedDate) {
    if (this.activeViewDate && !isEqual(this._focusedDate, focusedDate)) {
      const service = this.bus.service(this.activeViewEnum);
      const lastDayInPeriod = service.lastDayOfPeriod(this.activeViewDate);
      const isFocusedDateInRange = service.isInRange(focusedDate, this.activeViewDate, lastDayInPeriod);
      if (!isFocusedDateInRange) {
        this.emitNavigate(focusedDate);
      }
    }
    this._focusedDate = focusedDate || getToday();
    this.setAriaActivedescendant();
  }
  get focusedDate() {
    if (this._focusedDate > this.max) {
      return this.max;
    }
    if (this._focusedDate < this.min) {
      return this.min;
    }
    return this._focusedDate;
  }
  /**
   * @hidden
   */
  get headerId() {
    return this.id + "-header";
  }
  /**
   * Specifies the minimum allowed date value
   * ([see example]({% slug dateranges_calendar %})).
   *
   * @default 1900-1-1
   */
  set min(min) {
    this._min = min || new Date(MIN_DATE);
  }
  get min() {
    return this._min;
  }
  /**
   * Specifies the maximum allowed date value
   * ([see example]({% slug dateranges_calendar %})).
   *
   * @default 2099-12-31
   */
  set max(max) {
    this._max = max || new Date(MAX_DATE);
  }
  get max() {
    return this._max;
  }
  /**
   * Determines whether the built-in `min` or `max` validators are enforced when validating a form.
   *
   * @default false
   */
  rangeValidation = false;
  /**
   * Specifies the format of the displayed week day names.
   *
   * @default 'short'
   */
  weekDaysFormat = "short";
  /**
   * Toggles the visibility of the footer.
   *
   * @default false
   */
  footer = false;
  /**
   * Sets the Calendar selection mode
   * ([see example]({% slug selection_calendar %})).
   * @default 'single'
   */
  set selection(_selection) {
    this._selection = _selection;
    this.selectionSetter = true;
  }
  get selection() {
    return this._selection;
  }
  _selection = "single";
  /**
   * Allows reverse selection when using `range` selection.
   * If `allowReverse` is set to `true`, the component skips the validation of whether the start date is after the end date.
   *
   * @default false
   */
  allowReverse = false;
  /**
   * Sets or gets the `value` property of the Calendar and defines the selected value of the component.
   *
   * The `value` has to be a valid [JavaScript `Date`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date) instance when in `single` selection mode, an array of valid JavaScript Date instances when in `multiple` selection mode, or an object of type `SelectionRange` when in `range` selection mode.
   */
  set value(candidate) {
    this.valueSetter = true;
    this._value = candidate;
  }
  get value() {
    return this._value;
  }
  /**
   * Sets or gets the `disabled` property of the Calendar and
   * determines whether the component is active
   * ([see example]({% slug disabled_calendar %})).
   * To learn how to disable the component in reactive forms, refer to the article on [Forms Support](slug:formssupport_calendar#toc-managing-the-calendar-disabled-state-in-reactive-forms).
   */
  disabled = false;
  /**
   * Specifies the `tabindex` property of the Calendar. Based on the
   * [HTML `tabindex`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) behavior,
   * it determines whether the component is focusable.
   *
   * @default 0
   */
  tabindex = 0;
  /**
   * @hidden
   */
  set tabIndex(tabIndex) {
    this.tabindex = tabIndex;
  }
  get tabIndex() {
    return this.tabindex;
  }
  /**
   * Specifies the dates of the Calendar that will be disabled
   * ([see example]({% slug disabled_dates_calendar %})).
   */
  set disabledDates(value) {
    this.disabledDatesService.initialize(value);
    this._disabledDates = value;
  }
  get disabledDates() {
    return this._disabledDates;
  }
  /**
   * Determines whether the navigation side-bar will be displayed
   * ([see example]({% slug sidebar_calendar %})).
   * Applies to the [`infinite`]({% slug api_dateinputs_calendarcomponent %}#toc-type) Calendar only.
   *
   * @default true
   */
  navigation = true;
  /**
   * Defines the active view that the Calendar initially renders
   * ([see example]({% slug viewoptions_calendar %})).
   * You have to set `activeView` within the `topView`-`bottomView` range.
   *
   * @default 'month'
   */
  activeView = CalendarViewEnum[CalendarViewEnum.month];
  /**
   * Defines the bottommost view to which the user can navigate
   * ([see example](slug:viewdepth_calendar)).
   *
   * @default 'month'
   */
  bottomView = CalendarViewEnum[CalendarViewEnum.month];
  /**
   * Defines the topmost view to which the user can navigate
   * ([see example](slug:viewdepth_calendar)).
   *
   * @default 'century'
   */
  topView = CalendarViewEnum[CalendarViewEnum.century];
  /**
   * Specifies the Calendar type.
   *
   * @default 'infinite'
   */
  set type(type) {
    this.renderer.removeClass(this.element.nativeElement, `k-calendar-${this.type}`);
    if (type === "infinite") {
      this.renderer.addClass(this.element.nativeElement, `k-calendar-${type}`);
    }
    this._type = type;
  }
  get type() {
    return this._type;
  }
  /**
   * Determines whether to enable animation when navigating to previous/next view.
   * Applies to the [`classic`]({% slug api_dateinputs_calendarcomponent %}#toc-type) Calendar only.
   *
   * This feature uses the [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API). In order to run the animation in browsers that do not support it, you need the `web-animations-js` polyfill.
   *
   * @default false
   */
  animateNavigation = false;
  /**
   * Determines whether to display a week number column in the `month` view
   * ([see example]({% slug weeknumcolumn_calendar %})).
   *
   * @default false
   */
  weekNumber = false;
  /**
   * @hidden
   */
  closePopup = new EventEmitter();
  /**
   * Fires when the active view is changed
   * ([see example](slug:events_calendar)).
   */
  activeViewChange = new EventEmitter();
  /**
   * Fires when navigating in the currently active view
   * ([see example](slug:events_calendar)).
   */
  navigate = new EventEmitter();
  /**
   * Fires when the active view date is changed
   * ([see example](slug:events_calendar)).
   * Applies to the [`infinite`]({% slug api_dateinputs_calendarcomponent %}#toc-type) Calendar only.
   */
  activeViewDateChange = new EventEmitter();
  /**
   * Fires each time the Calendar gets blurred
   * ([see example](slug:events_calendar)).
   */
  onBlur = new EventEmitter();
  /**
   * Fires each time the Calendar gets focused
   * ([see example](slug:events_calendar)).
   */
  onFocus = new EventEmitter();
  /**
   * Fires when the value is changed
   * ([see example](slug:events_calendar)).
   */
  valueChange = new EventEmitter();
  /**
   * @hidden
   *
   * Queries the template for a cell template declaration.
   * Ignored if a `[cellTemplate]` value is explicitly provided.
   */
  cellTemplate;
  /**
   * @hidden
   *
   * Defines the template for each cell.
   * Takes precedence over nested templates in the KendoCalendar tag.
   */
  set cellTemplateRef(template) {
    this._cellTemplateRef = template;
  }
  get cellTemplateRef() {
    return this._cellTemplateRef || this.cellTemplate;
  }
  /**
   * @hidden
   *
   * Queries the template for a month cell template declaration.
   * Ignored if a `[monthCellTemplate]` value is explicitly provided.
   */
  monthCellTemplate;
  /**
   * @hidden
   *
   * Defines the template for each month cell.
   * Takes precedence over nested templates in the KendoCalendar tag.
   */
  set monthCellTemplateRef(template) {
    this._monthCellTemplateRef = template;
  }
  get monthCellTemplateRef() {
    return this._monthCellTemplateRef || this.monthCellTemplate;
  }
  /**
   * @hidden
   *
   * Queries the template for a year cell template declaration.
   * Ignored if a `[yearCellTemplate]` value is explicitly provided.
   */
  yearCellTemplate;
  /**
   * @hidden
   *
   * Defines the template for each year cell.
   * Takes precedence over nested templates in the KendoCalendar tag.
   */
  set yearCellTemplateRef(template) {
    this._yearCellTemplateRef = template;
  }
  get yearCellTemplateRef() {
    return this._yearCellTemplateRef || this.yearCellTemplate;
  }
  /**
   * @hidden
   *
   * Queries the template for a decade cell template declaration.
   * Ignored if a `[decadeCellTemplate]` value is explicitly provided.
   */
  decadeCellTemplate;
  /**
   * @hidden
   *
   * Defines the template for each decade cell.
   * Takes precedence over nested templates in the KendoCalendar tag.
   */
  set decadeCellTemplateRef(template) {
    this._decadeCellTemplateRef = template;
  }
  get decadeCellTemplateRef() {
    return this._decadeCellTemplateRef || this.decadeCellTemplate;
  }
  /**
   * @hidden
   *
   * Queries the template for a century cell template declaration.
   * Ignored if a `[centuryCellTemplate]` value is explicitly provided.
   */
  centuryCellTemplate;
  /**
   * @hidden
   *
   * Defines the template for each century cell.
   * Takes precedence over nested templates in the KendoCalendar tag.
   */
  set centuryCellTemplateRef(template) {
    this._centuryCellTemplateRef = template;
  }
  get centuryCellTemplateRef() {
    return this._centuryCellTemplateRef || this.centuryCellTemplate;
  }
  /**
   * @hidden
   *
   * Queries the template for a week number cell template declaration.
   * Ignored if a `[weekNumberTemplate]` value is explicitly provided.
   */
  weekNumberTemplate;
  /**
   * @hidden
   *
   * Defines the template for the week cell.
   * Takes precedence over nested templates in the KendoCalendar tag.
   */
  set weekNumberTemplateRef(template) {
    this._weekNumberTemplateRef = template;
  }
  get weekNumberTemplateRef() {
    return this._weekNumberTemplateRef || this.weekNumberTemplate;
  }
  /**
   * @hidden
   *
   * Queries the template for a header title template declaration.
   * Ignored if a `[headerTitleTemplate]` value is explicitly provided.
   */
  headerTitleTemplate;
  /**
   * @hidden
   *
   * Queries the template for a header template declaration.
   * Ignored if a `[headerTemplate]` value is explicitly provided.
   */
  headerTemplate;
  /**
   * @hidden
   *
   * Queries the template for a footer template declaration.
   * Ignored if a `[footerTemplate]` value is explicitly provided.
   */
  footerTemplate;
  /**
   * @hidden
   *
   * Defines the template for the header title.
   * Takes precedence over nested templates in the KendoCalendar tag.
   */
  set headerTitleTemplateRef(template) {
    this._headerTitleTemplateRef = template;
  }
  get headerTitleTemplateRef() {
    return this._headerTitleTemplateRef || this.headerTitleTemplate;
  }
  /**
   * @hidden
   *
   * Defines the template for the header.
   * Takes precedence over nested templates in the KendoCalendar tag.
   */
  set headerTemplateRef(template) {
    this._headerTemplateRef = template;
  }
  get headerTemplateRef() {
    return this._headerTemplateRef || this.headerTemplate;
  }
  /**
   * @hidden
   *
   * Defines the template for the footer.
   */
  set footerTemplateRef(template) {
    this._footerTemplateRef = template;
  }
  get footerTemplateRef() {
    return this._footerTemplateRef || this.footerTemplate;
  }
  /**
   * @hidden
   *
   * Queries the template for a navigation item template declaration.
   * Ignored if a `[navigationItemTemplate]` value is explicitly provided.
   */
  navigationItemTemplate;
  /**
   * @hidden
   *
   * Defines the template for the navigation item.
   * Takes precedence over nested templates in the KendoCalendar tag.
   */
  set navigationItemTemplateRef(template) {
    this._navigationItemTemplateRef = template;
  }
  get navigationItemTemplateRef() {
    return this._navigationItemTemplateRef || this.navigationItemTemplate;
  }
  /**
   * @hidden
   *
   * TODO: Make visible when true sizing of all calendar elements is implemented
   * Sets the size of the component.
   *
   * The possible values are:
   * * `small`
   * * `medium` (Default)
   * * `large`
   * * `none`
   *
   */
  set size(size) {
    this._size = size;
  }
  get size() {
    return this._size;
  }
  _size = DEFAULT_SIZE;
  /**
   * Specifies which end of the defined selection range should be marked as active.
   * Value will be ignored if the selection range is undefined. If range selection is used then the default value is 'start'.
   *
   * @default 'start'
   */
  set activeRangeEnd(_activeRangeEnd) {
    this._activeRangeEnd = _activeRangeEnd;
  }
  get activeRangeEnd() {
    return this._activeRangeEnd;
  }
  _activeRangeEnd = "start";
  navigationView;
  monthView;
  multiViewCalendar;
  isActive = false;
  cellUID = guid();
  selectionRange = {
    start: null,
    end: null
  };
  selectedDates = [];
  rangePivot;
  _disabledDates;
  _min = new Date(MIN_DATE);
  _max = new Date(MAX_DATE);
  _focusedDate = getToday();
  _value;
  onControlChange = noop$2;
  onControlTouched = noop$2;
  onValidatorChange = noop$2;
  minValidateFn = noop$2;
  maxValidateFn = noop$2;
  changes = {};
  valueSetter = false;
  selectionSetter = false;
  syncNavigation = true;
  viewChangeSubscription;
  _type = "infinite";
  _cellTemplateRef;
  _monthCellTemplateRef;
  _yearCellTemplateRef;
  _decadeCellTemplateRef;
  _centuryCellTemplateRef;
  _weekNumberTemplateRef;
  _headerTitleTemplateRef;
  _headerTemplateRef;
  _footerTemplateRef;
  _navigationItemTemplateRef;
  get activeViewEnum() {
    const activeView = CalendarViewEnum[this.activeView];
    return activeView < this.bottomViewEnum ? this.bottomViewEnum : activeView;
  }
  get bottomViewEnum() {
    return CalendarViewEnum[this.bottomView];
  }
  get topViewEnum() {
    return CalendarViewEnum[this.topView];
  }
  get widgetId() {
    return this.id;
  }
  get ariaDisabled() {
    return this.type === "classic" ? void 0 : this.disabled;
  }
  domEvents = [];
  control;
  pageChangeSubscription;
  resolvedPromise = Promise.resolve(null);
  destroyed = false;
  localizationChangeSubscription;
  activeViewDate;
  currentlyFocusedElement;
  canHover = false;
  constructor(bus, dom, element, navigator2, renderer, cdr, ngZone, injector, scrollSyncService, disabledDatesService, localization, selectionService, pickerService) {
    this.bus = bus;
    this.dom = dom;
    this.element = element;
    this.navigator = navigator2;
    this.renderer = renderer;
    this.cdr = cdr;
    this.ngZone = ngZone;
    this.injector = injector;
    this.scrollSyncService = scrollSyncService;
    this.disabledDatesService = disabledDatesService;
    this.localization = localization;
    this.selectionService = selectionService;
    this.pickerService = pickerService;
    A(packageMetadata);
    this.id = `kendo-calendarid-${this.bus.calendarId}`;
    if (this.pickerService) {
      this.pickerService.calendar = this;
    }
  }
  ngOnInit() {
    this.setClasses(this.element.nativeElement);
    if (this.type === "infinite") {
      this.dom.calculateHeights(this.element.nativeElement);
      this.scrollSyncService.configure(this.activeViewEnum);
    }
    this.localizationChangeSubscription = this.localization.changes.subscribe(() => this.cdr.markForCheck());
    this.viewChangeSubscription = this.bus.viewChanged.subscribe(({
      view: view2
    }) => this.handleActiveViewChange(CalendarViewEnum[view2]));
    this.control = this.injector.get(NgControl, null);
    if (this.element) {
      this.ngZone.runOutsideAngular(() => {
        this.bindEvents();
      });
    }
  }
  ngOnChanges(changes) {
    this.changes = changes;
    this.verifyChanges();
    this.bus.configure(this.bottomViewEnum, this.topViewEnum);
    this.scrollSyncService.configure(this.activeViewEnum);
  }
  ngDoCheck() {
    if (this.valueSetter || this.selectionSetter) {
      if (this.selection === "range" && (this.value?.start || this.value?.end) && this.focusedDate.getTime() !== this.value.start?.getTime() && this.focusedDate.getTime() !== this.value.end?.getTime()) {
        this.focusedDate = this.value.start || this.value.end || getToday();
      }
      this.setValue(this.value);
      this.valueSetter = false;
      this.selectionSetter = false;
    }
    if (hasExistingValue(this.changes, "focusedDate")) {
      const focusedDate = this.changes.focusedDate.currentValue;
      this.focusedDate = dateInRange(focusedDate, this.min, this.max);
    }
    if (this.changes.navigation) {
      this.syncNavigation = true;
    }
    if (this.changes.min || this.changes.max || this.changes.rangeValidation) {
      this.minValidateFn = this.rangeValidation ? minValidator(this.min) : noop$2;
      this.maxValidateFn = this.rangeValidation ? maxValidator(this.max) : noop$2;
      this.onValidatorChange();
    }
    this.changes = {};
  }
  ngAfterViewInit() {
    this.setAriaActivedescendant();
    if (this.size !== "none") {
      const element = this.type === "infinite" ? this.element : this.multiViewCalendar.element;
      this.renderer.removeClass(element.nativeElement, getSizeClass("calendar", this.size));
      this.renderer.addClass(element.nativeElement, getSizeClass("calendar", this.size));
    }
  }
  ngAfterViewChecked() {
    if (!this.syncNavigation) {
      return;
    }
    this.syncNavigation = false;
    this.scrollSyncService.sync(virtualizationProp(this.navigationView), virtualizationProp(this.monthView));
  }
  ngOnDestroy() {
    this.scrollSyncService.destroy();
    this.domEvents.forEach((unbindCallback) => unbindCallback());
    if (this.pickerService) {
      this.pickerService.calendar = null;
    }
    if (this.viewChangeSubscription) {
      this.viewChangeSubscription.unsubscribe();
    }
    if (this.pageChangeSubscription) {
      this.pageChangeSubscription.unsubscribe();
    }
    if (this.localizationChangeSubscription) {
      this.localizationChangeSubscription.unsubscribe();
    }
    this.destroyed = true;
  }
  /**
   * @hidden
   */
  onCellEnter(date) {
    if (this.selection === "range" && this.canHover) {
      this.ngZone.run(() => {
        if (this.allowReverse) {
          if (this.activeRangeEnd === "end" && this.selectionRange.start) {
            this.selectionRange = {
              start: this.selectionRange.start,
              end: date
            };
          }
          if (this.activeRangeEnd === "start" && this.selectionRange.end) {
            this.selectionRange = {
              start: date,
              end: this.selectionRange.end
            };
          }
        } else {
          if (this.activeRangeEnd === "end" && this.selectionRange.start && date >= this.selectionRange.start) {
            this.selectionRange = {
              start: this.selectionRange.start,
              end: date
            };
          }
          if (this.selectionRange.start && date < this.selectionRange.start) {
            this.selectionRange = {
              start: this.selectionRange.start,
              end: null
            };
          }
        }
      });
    }
  }
  /**
   * @hidden
   */
  onResize() {
    this.focusedDate = new Date(this.focusedDate);
    this.cdr.detectChanges();
  }
  /**
   * Focuses the Calendar by making the table.k-calendar-table element active.
   */
  focus() {
    this.currentlyFocusedElement = this.type === "infinite" ? this.element?.nativeElement.querySelector(selectors.infiniteCalendarTable) : this.element?.nativeElement.querySelector(selectors.multiViewCalendarTable);
    this.currentlyFocusedElement?.focus();
  }
  /**
   * Blurs the Calendar component.
   */
  blur() {
    const blurTarget = this.type === "infinite" ? this.currentlyFocusedElement : this.multiViewCalendar;
    if (isPresent2(blurTarget)) {
      blurTarget.blur();
    }
  }
  /**
   * @hidden
   */
  containsElement(element) {
    return Boolean(closest(element, (node) => node === this.element.nativeElement));
  }
  /**
   * @hidden
   */
  handleNavigation(candidate) {
    if (this.disabled) {
      return;
    }
    const focusTarget = candidate ? new Date(cloneDate(candidate).setDate(1)) : this.focusedDate;
    this.focusedDate = dateInRange(focusTarget, this.min, this.max);
    this.detectChanges();
  }
  /**
   * @hidden
   */
  onPageChange() {
    if (!NgZone.isInAngularZone()) {
      if (this.pageChangeSubscription) {
        this.pageChangeSubscription.unsubscribe();
      }
      this.pageChangeSubscription = from(this.resolvedPromise).subscribe(() => {
        this.detectChanges();
      });
    }
  }
  /**
   * @hidden
   */
  handleMultiViewCalendarValueChange(value, focusedDate) {
    if (this.selection === "range") {
      this.valueChange.emit(value);
    } else {
      const selectedDates = Array.isArray(value) ? value : [value];
      this.handleDateChange({
        selectedDates,
        focusedDate
      });
    }
  }
  /**
   * @hidden
   */
  handleDateChange(args) {
    const selectedDates = Array.isArray(args.selectedDates) ? args.selectedDates : [args.selectedDates];
    const canNavigateDown = this.bus.canMoveDown(this.activeViewEnum);
    const availableDates = selectedDates.filter((date) => !this.disabledDatesService.isDateDisabled(date));
    this.focusedDate = args.focusedDate || this.focusedDate;
    if (this.disabled) {
      return;
    }
    if (!canNavigateDown && areDatesEqual(availableDates, this.selectedDates)) {
      this.emitSameDate();
      return;
    }
    if (canNavigateDown) {
      this.bus.moveDown(this.activeViewEnum);
      return;
    }
    if (this.disabledDatesService.isDateDisabled(this.focusedDate)) {
      return;
    }
    if (this.selection === "range") {
      return;
    }
    this.ngZone.run(() => {
      this.selectedDates = availableDates.map((date) => cloneDate(date));
      this.value = this.parseSelectionToValue(availableDates);
      this.onControlChange(this.parseSelectionToValue(availableDates));
      this.valueChange.emit(this.parseSelectionToValue(availableDates));
      this.cdr.markForCheck();
    });
  }
  /**
   * @hidden
   */
  writeValue(candidate) {
    this.verifyValue(candidate);
    this.value = candidate;
    this.cdr.markForCheck();
  }
  /**
   * @hidden
   */
  registerOnChange(fn) {
    this.onControlChange = fn;
  }
  /**
   * @hidden
   */
  registerOnTouched(fn) {
    this.onControlTouched = fn;
  }
  /**
   * @hidden
   */
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
    this.cdr.markForCheck();
  }
  /**
   * @hidden
   */
  validate(control) {
    return this.minValidateFn(control) || this.maxValidateFn(control);
  }
  /**
   * @hidden
   */
  registerOnValidatorChange(fn) {
    this.onValidatorChange = fn;
  }
  /**
   * @hidden
   */
  activeCellTemplate() {
    switch (this.activeViewEnum) {
      case CalendarViewEnum.month:
        return this.monthCellTemplateRef || this.cellTemplateRef;
      case CalendarViewEnum.year:
        return this.yearCellTemplateRef;
      case CalendarViewEnum.decade:
        return this.decadeCellTemplateRef;
      case CalendarViewEnum.century:
        return this.centuryCellTemplateRef;
      default:
        return null;
    }
  }
  /**
   * @hidden
   */
  handleNavigate(event) {
    this.focusedDate = event.focusedDate;
    this.activeView = event.activeView;
    this.emitNavigate(this.focusedDate);
  }
  /**
   * @hidden
   */
  emitNavigate(focusedDate) {
    const activeView = CalendarViewEnum[this.activeViewEnum];
    this.navigate.emit({
      activeView,
      focusedDate
    });
  }
  /**
   * @hidden
   */
  emitEvent(emitter, args) {
    if (hasObservers(emitter)) {
      this.ngZone.run(() => {
        emitter.emit(args);
      });
    }
  }
  /**
   * @hidden
   */
  handleActiveDateChange(date) {
    this.activeViewDate = date;
    this.emitEvent(this.activeViewDateChange, date);
  }
  /**
   * @hidden
   */
  handleActiveViewChange(view2) {
    this.activeView = view2;
    this.emitEvent(this.activeViewChange, view2);
    if (this.type === "infinite") {
      this.scrollSyncService.configure(this.activeViewEnum);
    }
    this.detectChanges();
  }
  /**
   * @hidden
   */
  handleCellClick({
    date,
    modifiers
  }) {
    this.focus();
    if (this.selection === "range" && this.activeViewEnum === CalendarViewEnum[this.bottomView]) {
      this.performRangeSelection(date);
    } else {
      this.selectionService.lastClicked = date;
      this.performSelection(date, modifiers);
    }
  }
  /**
   * @hidden
   */
  handleWeekNumberClick(dates) {
    if (this.selection === "single") {
      return;
    }
    this.ngZone.run(() => {
      if (this.selection === "multiple") {
        this.handleDateChange({
          selectedDates: dates,
          focusedDate: last(dates)
        });
      }
      if (this.selection === "range") {
        this.canHover = false;
        this.activeRangeEnd = "start";
        const shouldEmitValueChange = this.selectionRange.start?.getTime() !== dates[0].getTime() || this.selectionRange.end?.getTime() !== last(dates).getTime();
        this.value = {
          start: dates[0],
          end: last(dates)
        };
        if (shouldEmitValueChange) {
          this.valueChange.emit(this.value);
        }
      }
    });
  }
  /**
   * @hidden
   */
  handleBlur(args) {
    if (this.element.nativeElement.contains(args.relatedTarget)) {
      return;
    }
    this.isActive = false;
    if (!this.pickerService && requiresZoneOnBlur(this.control)) {
      this.ngZone.run(() => {
        this.onControlTouched();
        this.emitBlur(args);
        this.cdr.markForCheck();
      });
    } else {
      this.emitBlur(args);
      this.detectChanges();
    }
  }
  /**
   * @hidden
   */
  handleFocus() {
    this.isActive = true;
    if (!NgZone.isInAngularZone()) {
      this.detectChanges();
    }
    this.emitFocus();
  }
  /**
   * @hidden
   */
  handleMultiViewCalendarKeydown(args) {
    if (isPresent2(this.pickerService) && (args.code === Keys.Enter || args.code === Keys.NumpadEnter)) {
      args.preventDefault();
    }
  }
  setClasses(element) {
    this.renderer.removeClass(element, `k-calendar-${this.type}`);
    if (this.type === "infinite") {
      this.renderer.addClass(element, "k-calendar");
      this.renderer.addClass(element, `k-calendar-${this.type}`);
    }
  }
  verifyChanges() {
    if (!isDevMode()) {
      return;
    }
    if (this.min > this.max) {
      throw new Error(`The max value should be bigger than the min. See ${MIN_DOC_LINK$2} and ${MAX_DOC_LINK$2}.`);
    }
    if (this.bottomViewEnum > this.topViewEnum) {
      throw new Error(`The topView should be greater than bottomView. See ${BOTTOM_VIEW_DOC_LINK} and ${TOP_VIEW_DOC_LINK}.`);
    }
  }
  verifyValue(candidate) {
    if (!isDevMode()) {
      return;
    }
    if (this.selection === "single" && candidate && !isNullOrDate(candidate)) {
      throw new Error(`When using 'single' selection the 'value' should be a valid JavaScript Date instance. Check ${VALUE_DOC_LINK$4} for possible resolution.`);
    } else if (this.selection === "multiple" && candidate) {
      if (Array.isArray(candidate)) {
        const onlyDates = candidate.every((value) => value instanceof Date);
        if (!onlyDates) {
          throw new Error(`When using 'multiple' selection the 'value' should be an array of valid JavaScript Date instances. Check ${VALUE_DOC_LINK$4} for possible resolution.`);
        }
      }
      if (Object.keys(candidate).find((k) => k === "start") && Object.keys(candidate).find((k) => k === "end")) {
        throw new Error(`When using 'multiple' selection the 'value' should be an array of valid JavaScript Date instances. Check ${VALUE_DOC_LINK$4} for possible resolution.`);
      }
    } else if (this.selection === "range" && candidate && !(isNullOrDate(candidate["start"]) && isNullOrDate(candidate["end"]))) {
      throw new Error(`The 'value' should be an object with start and end dates. Check ${VALUE_DOC_LINK$4} for possible resolution.`);
    }
  }
  bindEvents() {
    const element = this.element.nativeElement;
    this.domEvents.push(this.renderer.listen(element, "focus", this.handleFocus.bind(this)), this.renderer.listen(element, "mousedown", preventDefault), this.renderer.listen(element, "click", this.handleComponentClick.bind(this)), this.renderer.listen(element, "keydown", this.handleKeydown.bind(this)), this.renderer.listen(element, "mouseleave", this.setRangeSelectionToValue.bind(this)));
  }
  setRangeSelectionToValue() {
    if (this.selection === "range" && this.type === "infinite" && this.value) {
      this.ngZone.run(() => {
        this.selectionRange = this.value;
        this.cdr.markForCheck();
      });
    }
  }
  emitBlur(args) {
    if (this.pickerService) {
      this.pickerService.onBlur.emit(args);
    }
    this.onBlur.emit();
  }
  emitFocus() {
    if (this.pickerService) {
      this.pickerService.onFocus.emit();
    }
    this.onFocus.emit();
  }
  handleComponentClick() {
    if (!this.isActive) {
      if (this.type === "infinite" && this.monthView.isScrolled()) {
        this.focusedDate = cloneDate(this.focusedDate);
        this.detectChanges();
      }
      this.focus();
    }
  }
  handleKeydown(args) {
    if (this.type === "infinite") {
      const ctrlKey = args.ctrlKey || args.metaKey;
      const code = normalizeKeys(args);
      const arrowKeyPressed = [Keys.ArrowUp, Keys.ArrowRight, Keys.ArrowDown, Keys.ArrowLeft].indexOf(code) !== -1;
      const reserveKeyCommandsForPicker = isPresent2(this.pickerService) && arrowKeyPressed && args.altKey;
      if (reserveKeyCommandsForPicker) {
        return;
      }
      if (ctrlKey && arrowKeyPressed) {
        args.preventDefault();
      }
      const preventSubmitInDatePicker = isPresent2(this.pickerService) && code === Keys.Enter;
      if (preventSubmitInDatePicker) {
        args.preventDefault();
      }
      const candidate = dateInRange(this.navigator.move(this.focusedDate, this.navigator.action(args), this.activeViewEnum), this.min, this.max);
      if (!isEqual(this.focusedDate, candidate)) {
        this.focusedDate = candidate;
        this.detectChanges();
        args.preventDefault();
      }
      if (code === Keys.Enter) {
        this.selectionService.lastClicked = this.focusedDate;
        if (this.selection !== "range") {
          this.performSelection(this.focusedDate, args);
        } else {
          this.performRangeSelection(this.focusedDate);
        }
      }
      if (code === Keys.KeyT) {
        this.focusToday();
      }
      if (isArrowWithShiftPressed(args) && this.selection !== "range") {
        args.anyArrow = true;
        this.performSelection(this.focusedDate, args);
      }
    }
  }
  focusToday() {
    this.focusedDate = getToday();
    this.bus.moveToBottom(this.activeViewEnum);
    this.cdr.detectChanges();
  }
  detectChanges() {
    if (!this.destroyed) {
      this.cdr.detectChanges();
    }
  }
  emitSameDate() {
    if (this.pickerService) {
      this.pickerService.sameDateSelected.emit();
    }
  }
  setAriaActivedescendant() {
    const infiniteCalendarTable = this.element.nativeElement?.querySelector(selectors.infiniteCalendarTable);
    const activedescendantHandledByInnerMultiViewCalendar = !isPresent2(infiniteCalendarTable) || this.type === "classic" && !infiniteCalendarTable.hasAttribute(attributeNames.ariaActiveDescendant);
    if (activedescendantHandledByInnerMultiViewCalendar) {
      return;
    }
    if (this.type === "classic") {
      this.renderer.removeAttribute(infiniteCalendarTable, attributeNames.ariaActiveDescendant);
      return;
    }
    const focusedCellId = this.cellUID + this.focusedDate.getTime();
    this.renderer.setAttribute(infiniteCalendarTable, attributeNames.ariaActiveDescendant, focusedCellId);
  }
  parseSelectionToValue(selection) {
    selection = selection || [];
    return this.selection === "single" ? cloneDate(last(selection)) : selection.map((date) => cloneDate(date));
  }
  setValue(candidate) {
    this.verifyValue(candidate);
    if (candidate === null) {
      this._value = null;
      this.selectedDates = [];
      this.selectionRange = {
        start: null,
        end: null
      };
    } else if (Array.isArray(candidate)) {
      this.selectionRange = {
        start: null,
        end: null
      };
      this._value = candidate.filter((date) => isPresent2(date)).map((element) => cloneDate(element));
    } else if (isObject(candidate) && Object.keys(candidate).find((k) => k === "start") && Object.keys(candidate).find((k) => k === "end")) {
      this.selectedDates = [];
      this.selectionRange = {
        start: null,
        end: null
      };
      this._value = {
        start: null,
        end: null
      };
      this._value.start = candidate.start instanceof Date ? cloneDate(candidate.start) : null;
      this._value.end = candidate.end instanceof Date ? cloneDate(candidate.end) : null;
      this.selectionRange = Object.assign({}, this._value);
      if (this._value?.start && !this._value?.end) {
        this.activeRangeEnd = "end";
        this.canHover = true;
      }
      if (this._value?.end && !this._value?.start) {
        this.activeRangeEnd = "start";
        this.canHover = true;
      }
      if (this._value?.end && this._value?.start) {
        this.canHover = false;
      }
    } else {
      this.selectionRange = {
        start: null,
        end: null
      };
      this._value = cloneDate(candidate);
    }
    if (this.selection !== "range") {
      const selection = [].concat(candidate).filter((date) => isPresent2(date)).map((date) => cloneDate(date));
      if (!areDatesEqual(selection, this.selectedDates)) {
        const lastSelected = last(selection);
        this.rangePivot = cloneDate(lastSelected);
        this.focusedDate = cloneDate(lastSelected) || this.focusedDate;
        this.selectedDates = selection;
      }
    }
  }
  performRangeSelection(date) {
    this.focusedDate = date;
    const clonedRangeSelection = Object.assign({}, this.selectionRange);
    const emitValueChange = this.activeRangeEnd === "start" && this.value?.start?.getTime() !== date?.getTime() || this.activeRangeEnd === "end" && this.value?.end?.getTime() !== date?.getTime();
    this.ngZone.run(() => {
      const rangeSelection = handleRangeSelection(date, clonedRangeSelection, this.activeRangeEnd, this.allowReverse);
      this.activeRangeEnd = rangeSelection.activeRangeEnd;
      if (this.canHover && rangeSelection.activeRangeEnd === "end" && rangeSelection.selectionRange.end?.getTime() === date.getTime()) {
        this.activeRangeEnd = "start";
        rangeSelection.activeRangeEnd = "start";
      }
      this.canHover = this.activeRangeEnd === "end" && rangeSelection.selectionRange.start && !rangeSelection.selectionRange.end;
      if (emitValueChange && (this.value?.start?.getTime() !== rangeSelection.selectionRange?.start?.getTime() || this.value?.end?.getTime() !== rangeSelection.selectionRange?.end?.getTime())) {
        this.value = rangeSelection.selectionRange;
        this.valueChange.emit(this.value);
      }
      this.cdr.markForCheck();
    });
  }
  performSelection(date, selectionModifiers) {
    const selection = this.selectionService.performSelection({
      date,
      modifiers: selectionModifiers,
      selectionMode: this.selection,
      activeViewEnum: this.activeViewEnum,
      rangePivot: this.rangePivot,
      selectedDates: this.selectedDates
    });
    this.rangePivot = selection.rangePivot;
    this.handleDateChange({
      selectedDates: selection.selectedDates,
      focusedDate: date
    });
  }
  static ɵfac = function CalendarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CalendarComponent)(ɵɵdirectiveInject(BusViewService), ɵɵdirectiveInject(CalendarDOMService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NavigationService), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(ScrollSyncService), ɵɵdirectiveInject(DisabledDatesService), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(SelectionService), ɵɵdirectiveInject(PickerService, 8));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _CalendarComponent,
    selectors: [["kendo-calendar"]],
    contentQueries: function CalendarComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, CellTemplateDirective, 5);
        ɵɵcontentQuery(dirIndex, MonthCellTemplateDirective, 5);
        ɵɵcontentQuery(dirIndex, YearCellTemplateDirective, 5);
        ɵɵcontentQuery(dirIndex, DecadeCellTemplateDirective, 5);
        ɵɵcontentQuery(dirIndex, CenturyCellTemplateDirective, 5);
        ɵɵcontentQuery(dirIndex, WeekNumberCellTemplateDirective, 5);
        ɵɵcontentQuery(dirIndex, HeaderTitleTemplateDirective, 5);
        ɵɵcontentQuery(dirIndex, HeaderTemplateDirective, 5);
        ɵɵcontentQuery(dirIndex, FooterTemplateDirective, 5);
        ɵɵcontentQuery(dirIndex, NavigationItemTemplateDirective, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.cellTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.monthCellTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.yearCellTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.decadeCellTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.centuryCellTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.weekNumberTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.headerTitleTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.headerTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.footerTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.navigationItemTemplate = _t.first);
      }
    },
    viewQuery: function CalendarComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(NavigationComponent, 5);
        ɵɵviewQuery(ViewListComponent, 5);
        ɵɵviewQuery(MultiViewCalendarComponent, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.navigationView = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.monthView = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.multiViewCalendar = _t.first);
      }
    },
    hostVars: 6,
    hostBindings: function CalendarComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("id", ctx.widgetId)("aria-disabled", ctx.ariaDisabled);
        ɵɵclassProp("k-week-number", ctx.weekNumber)("k-disabled", ctx.ariaDisabled);
      }
    },
    inputs: {
      showOtherMonthDays: "showOtherMonthDays",
      id: "id",
      focusedDate: "focusedDate",
      min: "min",
      max: "max",
      rangeValidation: "rangeValidation",
      weekDaysFormat: "weekDaysFormat",
      footer: "footer",
      selection: "selection",
      allowReverse: "allowReverse",
      value: "value",
      disabled: "disabled",
      tabindex: "tabindex",
      tabIndex: "tabIndex",
      disabledDates: "disabledDates",
      navigation: "navigation",
      activeView: "activeView",
      bottomView: "bottomView",
      topView: "topView",
      type: "type",
      animateNavigation: "animateNavigation",
      weekNumber: "weekNumber",
      cellTemplateRef: [0, "cellTemplate", "cellTemplateRef"],
      monthCellTemplateRef: [0, "monthCellTemplate", "monthCellTemplateRef"],
      yearCellTemplateRef: [0, "yearCellTemplate", "yearCellTemplateRef"],
      decadeCellTemplateRef: [0, "decadeCellTemplate", "decadeCellTemplateRef"],
      centuryCellTemplateRef: [0, "centuryCellTemplate", "centuryCellTemplateRef"],
      weekNumberTemplateRef: [0, "weekNumberTemplate", "weekNumberTemplateRef"],
      headerTitleTemplateRef: [0, "headerTitleTemplate", "headerTitleTemplateRef"],
      headerTemplateRef: [0, "headerTemplate", "headerTemplateRef"],
      footerTemplateRef: [0, "footerTemplate", "footerTemplateRef"],
      navigationItemTemplateRef: [0, "navigationItemTemplate", "navigationItemTemplateRef"],
      size: "size",
      activeRangeEnd: "activeRangeEnd"
    },
    outputs: {
      closePopup: "closePopup",
      activeViewChange: "activeViewChange",
      navigate: "navigate",
      activeViewDateChange: "activeViewDateChange",
      onBlur: "blur",
      onFocus: "focus",
      valueChange: "valueChange"
    },
    exportAs: ["kendo-calendar"],
    standalone: true,
    features: [ɵɵProvidersFeature([BusViewService, CALENDAR_VALUE_ACCESSOR, CALENDAR_RANGE_VALIDATORS, KENDO_INPUT_PROVIDER, LocalizationService, DisabledDatesService, {
      provide: L10N_PREFIX,
      useValue: "kendo.calendar"
    }, NavigationService, ScrollSyncService, SelectionService]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    decls: 3,
    vars: 2,
    consts: () => {
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_4 = goog.getMsg("Today");
        i18n_4 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_4;
      } else {
        i18n_4 = $localize`:kendo.calendar.today|The label for the today button in the calendar header:Today`;
      }
      let i18n_5;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_5 = goog.getMsg("Navigate to previous view");
        i18n_5 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_5;
      } else {
        i18n_5 = $localize`:kendo.calendar.prevButtonTitle|The title of the previous button in the Classic calendar:Navigate to previous view`;
      }
      let i18n_6;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_6 = goog.getMsg("Navigate to next view");
        i18n_6 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_6;
      } else {
        i18n_6 = $localize`:kendo.calendar.nextButtonTitle|The title of the next button in the Classic calendar:Navigate to next view`;
      }
      let i18n_7;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_7 = goog.getMsg("Navigate to parent view");
        i18n_7 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_7;
      } else {
        i18n_7 = $localize`:kendo.calendar.parentViewButtonTitle|The title of the parent view button in the calendar header:Navigate to parent view`;
      }
      return [["multiviewcalendar", ""], ["kendoCalendarLocalizedMessages", "", "today", i18n_4, "prevButtonTitle", i18n_5, "nextButtonTitle", i18n_6, "parentViewButtonTitle", i18n_7], [3, "views", "min", "max", "size", "id", "activeRangeEnd", "selectionRange", "allowReverse", "disabled", "isActive", "showOtherMonthDays", "tabIndex", "activeView", "bottomView", "topView", "weekDaysFormat", "weekNumber", "animateNavigation", "cellTemplate", "monthCellTemplate", "yearCellTemplate", "decadeCellTemplate", "centuryCellTemplate", "headerTitleTemplate", "headerTemplate", "footerTemplate", "footer", "weekNumberTemplate", "focusedDate", "selection", "value", "disabledDates"], [3, "activeView", "focusedDate", "min", "max", "templateRef"], [3, "todayButtonClick", "cellClick", "weekNumberCellClick", "activeDateChange", "pageChange", "focusCalendar", "blurCalendar", "cellEnter", "activeView", "allowReverse", "showOtherMonthDays", "activeRangeEnd", "selectionRange", "size", "isActive", "id", "weekDaysFormat", "cellTemplateRef", "headerTitleTemplateRef", "headerTemplateRef", "showFooter", "footerTemplateRef", "weekNumberTemplateRef", "cellUID", "min", "max", "focusedDate", "weekNumber", "selectedDates", "tabIndex", "disabled"], [3, "resize"], [3, "valueChange", "pageChange", "activeView", "focusedDate", "min", "max", "templateRef"], [3, "onClosePopup", "activeViewChange", "navigate", "valueChange", "focusCalendar", "blur", "blurEvent", "keydown", "views", "min", "max", "size", "id", "activeRangeEnd", "selectionRange", "allowReverse", "disabled", "isActive", "showOtherMonthDays", "tabIndex", "activeView", "bottomView", "topView", "weekDaysFormat", "weekNumber", "animateNavigation", "cellTemplate", "monthCellTemplate", "yearCellTemplate", "decadeCellTemplate", "centuryCellTemplate", "headerTitleTemplate", "headerTemplate", "footerTemplate", "footer", "weekNumberTemplate", "focusedDate", "selection", "value", "disabledDates"], [3, "today", "prevButtonTitle", "nextButtonTitle", "parentViewButtonTitle"]];
    },
    template: function CalendarComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementContainer(0, 1);
        ɵɵtemplate(1, CalendarComponent_Conditional_1_Template, 3, 24)(2, CalendarComponent_Conditional_2_Template, 3, 36, "kendo-multiviewcalendar", 2);
      }
      if (rf & 2) {
        ɵɵadvance();
        ɵɵconditional(ctx.type === "infinite" ? 1 : -1);
        ɵɵadvance();
        ɵɵconditional(ctx.type === "classic" ? 2 : -1);
      }
    },
    dependencies: [CalendarLocalizedMessagesDirective, NavigationComponent, ViewListComponent, ResizeSensorComponent, MultiViewCalendarComponent, MultiViewCalendarCustomMessagesComponent],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      exportAs: "kendo-calendar",
      providers: [BusViewService, CALENDAR_VALUE_ACCESSOR, CALENDAR_RANGE_VALIDATORS, KENDO_INPUT_PROVIDER, LocalizationService, DisabledDatesService, {
        provide: L10N_PREFIX,
        useValue: "kendo.calendar"
      }, NavigationService, ScrollSyncService, SelectionService],
      selector: "kendo-calendar",
      template: `
    <ng-container kendoCalendarLocalizedMessages
      i18n-today="kendo.calendar.today|The label for the today button in the calendar header"
      today="Today"
    
      i18n-prevButtonTitle="kendo.calendar.prevButtonTitle|The title of the previous button in the Classic calendar"
      prevButtonTitle="Navigate to previous view"
    
      i18n-nextButtonTitle="kendo.calendar.nextButtonTitle|The title of the next button in the Classic calendar"
      nextButtonTitle="Navigate to next view"
    
      i18n-parentViewButtonTitle="kendo.calendar.parentViewButtonTitle|The title of the parent view button in the calendar header"
      parentViewButtonTitle="Navigate to parent view"
      >
    </ng-container>
    @if (type === 'infinite') {
      @if (navigation) {
        <kendo-calendar-navigation
          [activeView]="activeViewEnum"
          [focusedDate]="focusedDate"
          [min]="min"
          [max]="max"
          [templateRef]="navigationItemTemplateRef?.templateRef"
          (valueChange)="handleNavigation($event)"
          (pageChange)="onPageChange()"
          >
        </kendo-calendar-navigation>
      }
      <kendo-calendar-viewlist
        [activeView]="activeViewEnum"
        [allowReverse]="allowReverse"
        [showOtherMonthDays]="showOtherMonthDays"
        [activeRangeEnd]="activeRangeEnd"
        [selectionRange]="selectionRange"
        [size]="size"
        [isActive]="isActive"
        [id]="headerId"
        [weekDaysFormat]="weekDaysFormat"
        [cellTemplateRef]="activeCellTemplate()?.templateRef"
        [headerTitleTemplateRef]="headerTitleTemplateRef?.templateRef"
        [headerTemplateRef]="headerTemplateRef?.templateRef"
        [showFooter]="footer"
        [footerTemplateRef]="footerTemplateRef?.templateRef"
        [weekNumberTemplateRef]="weekNumberTemplateRef?.templateRef"
        [cellUID]="cellUID"
        [min]="min"
        [max]="max"
        [focusedDate]="focusedDate"
        [weekNumber]="weekNumber"
        [selectedDates]="selectedDates"
        [tabIndex]="tabIndex"
        [disabled]="disabled"
            (todayButtonClick)="handleDateChange({
                selectedDates: [$event],
                focusedDate: $event
            })"
        (cellClick)="handleCellClick($event)"
        (weekNumberCellClick)="handleWeekNumberClick($event)"
        (activeDateChange)="handleActiveDateChange($event)"
        (pageChange)="onPageChange()"
        (focusCalendar)="handleFocus()"
        (blurCalendar)="handleBlur($event)"
        (cellEnter)="onCellEnter($event)"
        >
      </kendo-calendar-viewlist>
      <kendo-resize-sensor (resize)="onResize()"></kendo-resize-sensor>
    }
    @if (type === 'classic') {
      <kendo-multiviewcalendar
        #multiviewcalendar
        [views]="1"
        [min]="min"
        [max]="max"
        [size]="size"
        [id]="id"
        [activeRangeEnd]="activeRangeEnd"
        [selectionRange]="selectionRange"
        [allowReverse]="allowReverse"
        [disabled]="disabled"
        [isActive]="isActive"
        [showOtherMonthDays]="showOtherMonthDays"
        [tabIndex]="tabIndex"
        [activeView]="activeView"
        [bottomView]="bottomView"
        [topView]="topView"
        [weekDaysFormat]="weekDaysFormat"
        [weekNumber]="weekNumber"
        [animateNavigation]="animateNavigation"
        [cellTemplate]="activeCellTemplate()"
        [monthCellTemplate]="monthCellTemplateRef"
        [yearCellTemplate]="yearCellTemplateRef"
        [decadeCellTemplate]="decadeCellTemplateRef"
        [centuryCellTemplate]="centuryCellTemplateRef"
        [headerTitleTemplate]="headerTitleTemplateRef"
        [headerTemplate]="headerTemplateRef"
        [footerTemplate]="footerTemplateRef"
        [footer]="footer"
        [weekNumberTemplate]="weekNumberTemplateRef"
        [focusedDate]="focusedDate"
        [selection]="selection"
        [value]="value"
        [disabledDates]="disabledDates"
        (onClosePopup)="closePopup.emit()"
        (activeViewChange)="handleActiveViewChange($event)"
        (navigate)="handleNavigate($event)"
        (valueChange)="handleMultiViewCalendarValueChange($event, multiviewcalendar.focusedDate)"
        (focusCalendar)="handleFocus()"
        (blur)="handleBlur($event)"
        (blurEvent)="handleBlur($event)"
        (keydown)="handleMultiViewCalendarKeydown($event)"
        >
        <kendo-multiviewcalendar-messages
          [today]="localization.get('today')"
          [prevButtonTitle]="localization.get('prevButtonTitle')"
          [nextButtonTitle]="localization.get('nextButtonTitle')"
          [parentViewButtonTitle]="localization.get('parentViewButtonTitle')"
          >
        </kendo-multiviewcalendar-messages>
      </kendo-multiviewcalendar>
    }
    `,
      standalone: true,
      imports: [CalendarLocalizedMessagesDirective, NavigationComponent, ViewListComponent, ResizeSensorComponent, MultiViewCalendarComponent, MultiViewCalendarCustomMessagesComponent]
    }]
  }], () => [{
    type: BusViewService
  }, {
    type: CalendarDOMService
  }, {
    type: ElementRef
  }, {
    type: NavigationService
  }, {
    type: Renderer2
  }, {
    type: ChangeDetectorRef
  }, {
    type: NgZone
  }, {
    type: Injector
  }, {
    type: ScrollSyncService
  }, {
    type: DisabledDatesService
  }, {
    type: LocalizationService
  }, {
    type: SelectionService
  }, {
    type: PickerService,
    decorators: [{
      type: Optional
    }]
  }], {
    showOtherMonthDays: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    focusedDate: [{
      type: Input
    }],
    min: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    rangeValidation: [{
      type: Input
    }],
    weekDaysFormat: [{
      type: Input
    }],
    footer: [{
      type: Input
    }],
    selection: [{
      type: Input
    }],
    allowReverse: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    tabindex: [{
      type: Input
    }],
    tabIndex: [{
      type: Input
    }],
    disabledDates: [{
      type: Input
    }],
    navigation: [{
      type: Input
    }],
    activeView: [{
      type: Input
    }],
    bottomView: [{
      type: Input
    }],
    topView: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    animateNavigation: [{
      type: Input
    }],
    weekNumber: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["class.k-week-number"]
    }],
    closePopup: [{
      type: Output
    }],
    activeViewChange: [{
      type: Output
    }],
    navigate: [{
      type: Output
    }],
    activeViewDateChange: [{
      type: Output
    }],
    onBlur: [{
      type: Output,
      args: ["blur"]
    }],
    onFocus: [{
      type: Output,
      args: ["focus"]
    }],
    valueChange: [{
      type: Output
    }],
    cellTemplate: [{
      type: ContentChild,
      args: [CellTemplateDirective, {
        static: false
      }]
    }],
    cellTemplateRef: [{
      type: Input,
      args: ["cellTemplate"]
    }],
    monthCellTemplate: [{
      type: ContentChild,
      args: [MonthCellTemplateDirective, {
        static: false
      }]
    }],
    monthCellTemplateRef: [{
      type: Input,
      args: ["monthCellTemplate"]
    }],
    yearCellTemplate: [{
      type: ContentChild,
      args: [YearCellTemplateDirective, {
        static: false
      }]
    }],
    yearCellTemplateRef: [{
      type: Input,
      args: ["yearCellTemplate"]
    }],
    decadeCellTemplate: [{
      type: ContentChild,
      args: [DecadeCellTemplateDirective, {
        static: false
      }]
    }],
    decadeCellTemplateRef: [{
      type: Input,
      args: ["decadeCellTemplate"]
    }],
    centuryCellTemplate: [{
      type: ContentChild,
      args: [CenturyCellTemplateDirective, {
        static: false
      }]
    }],
    centuryCellTemplateRef: [{
      type: Input,
      args: ["centuryCellTemplate"]
    }],
    weekNumberTemplate: [{
      type: ContentChild,
      args: [WeekNumberCellTemplateDirective, {
        static: false
      }]
    }],
    weekNumberTemplateRef: [{
      type: Input,
      args: ["weekNumberTemplate"]
    }],
    headerTitleTemplate: [{
      type: ContentChild,
      args: [HeaderTitleTemplateDirective, {
        static: false
      }]
    }],
    headerTemplate: [{
      type: ContentChild,
      args: [HeaderTemplateDirective]
    }],
    footerTemplate: [{
      type: ContentChild,
      args: [FooterTemplateDirective]
    }],
    headerTitleTemplateRef: [{
      type: Input,
      args: ["headerTitleTemplate"]
    }],
    headerTemplateRef: [{
      type: Input,
      args: ["headerTemplate"]
    }],
    footerTemplateRef: [{
      type: Input,
      args: ["footerTemplate"]
    }],
    navigationItemTemplate: [{
      type: ContentChild,
      args: [NavigationItemTemplateDirective, {
        static: false
      }]
    }],
    navigationItemTemplateRef: [{
      type: Input,
      args: ["navigationItemTemplate"]
    }],
    size: [{
      type: Input
    }],
    activeRangeEnd: [{
      type: Input
    }],
    navigationView: [{
      type: ViewChild,
      args: [NavigationComponent, {
        static: false
      }]
    }],
    monthView: [{
      type: ViewChild,
      args: [ViewListComponent, {
        static: false
      }]
    }],
    multiViewCalendar: [{
      type: ViewChild,
      args: [MultiViewCalendarComponent, {
        static: false
      }]
    }],
    widgetId: [{
      type: HostBinding,
      args: ["attr.id"]
    }],
    ariaDisabled: [{
      type: HostBinding,
      args: ["attr.aria-disabled"]
    }, {
      type: HostBinding,
      args: ["class.k-disabled"]
    }]
  });
})();
var incompleteDateValidator = () => {
  return (control, incomplete) => {
    if (!isPresent2(control.value) && incomplete) {
      return {
        incompleteDate: true
      };
    } else {
      return null;
    }
  };
};
var Arrow;
(function(Arrow2) {
  Arrow2[Arrow2["Up"] = 0] = "Up";
  Arrow2[Arrow2["Down"] = 1] = "Down";
  Arrow2[Arrow2["None"] = 2] = "None";
})(Arrow || (Arrow = {}));
var DateInputMessages = class _DateInputMessages extends ComponentMessages {
  /**
   * The title of the **Decrement** button of the DateInput.
   */
  decrement;
  /**
   * The title of the **Increment** button of the DateInput.
   */
  increment;
  /**
   * The title of the **Clear** button of the DateInput.
   */
  clearTitle;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵDateInputMessages_BaseFactory;
    return function DateInputMessages_Factory(__ngFactoryType__) {
      return (ɵDateInputMessages_BaseFactory || (ɵDateInputMessages_BaseFactory = ɵɵgetInheritedFactory(_DateInputMessages)))(__ngFactoryType__ || _DateInputMessages);
    };
  })();
  static ɵdir = ɵɵdefineDirective({
    type: _DateInputMessages,
    selectors: [["kendo-dateinput-messages-base"]],
    inputs: {
      decrement: "decrement",
      increment: "increment",
      clearTitle: "clearTitle"
    },
    features: [ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DateInputMessages, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line
      selector: "kendo-dateinput-messages-base"
    }]
  }], null, {
    decrement: [{
      type: Input
    }],
    increment: [{
      type: Input
    }],
    clearTitle: [{
      type: Input
    }]
  });
})();
var DateInputLocalizedMessagesDirective = class _DateInputLocalizedMessagesDirective extends DateInputMessages {
  service;
  constructor(service) {
    super();
    this.service = service;
  }
  static ɵfac = function DateInputLocalizedMessagesDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DateInputLocalizedMessagesDirective)(ɵɵdirectiveInject(LocalizationService));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _DateInputLocalizedMessagesDirective,
    selectors: [["", "kendoDateInputLocalizedMessages", ""]],
    standalone: true,
    features: [ɵɵProvidersFeature([{
      provide: DateInputMessages,
      useExisting: forwardRef(() => _DateInputLocalizedMessagesDirective)
    }]), ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DateInputLocalizedMessagesDirective, [{
    type: Directive,
    args: [{
      providers: [{
        provide: DateInputMessages,
        useExisting: forwardRef(() => DateInputLocalizedMessagesDirective)
      }],
      selector: "[kendoDateInputLocalizedMessages]",
      standalone: true
    }]
  }], () => [{
    type: LocalizationService
  }], null);
})();
var nextId = 0;
var MIN_DOC_LINK$1 = "https://www.telerik.com/kendo-angular-ui/components/dateinputs/api/DateInputComponent/#toc-min";
var MAX_DOC_LINK$1 = "https://www.telerik.com/kendo-angular-ui/components/dateinputs/api/DateInputComponent/#toc-max";
var VALUE_DOC_LINK$3 = "https://www.telerik.com/kendo-angular-ui/components/dateinputs/dateinput/#toc-using-with-json";
var TWO_DIGIT_YEAR_MAX$2 = 68;
var DEFAULT_FORMAT$1 = "d";
var DEFAULT_FORMAT_PLACEHOLDER = "wide";
var DATE_PART_REGEXP = /year|month|<day>/;
var TIME_PART_REGEXP = /hour|minute|second|millisecond/;
var DateInputIntl = class {
  service;
  format;
  toString;
  formatDate;
  parseDate;
  parseNumber;
  formatNumber;
  splitDateFormat;
  numberSymbols;
  firstDay;
  weekendRange;
  dateFieldName;
  dateFormatNames;
  cldr = {};
  localeId;
  constructor(service) {
    this.service = service;
    this.localeId = service["localeId"];
    this.format = service.format;
    this.toString = service.toString;
    this.formatDate = service.formatDate;
    this.parseDate = service.parseDate;
    this.parseNumber = service.parseNumber;
    this.formatNumber = service.formatNumber;
    this.splitDateFormat = service.splitDateFormat;
    this.numberSymbols = service.numberSymbols;
    this.firstDay = service.firstDay;
    this.weekendRange = service.weekendRange;
    this.dateFieldName = service.dateFieldName;
    this.dateFormatNames = (localeId, options) => this.service.dateFormatNames(options, localeId || this.localeId);
    const _localeData = localeData(this.localeId);
    this.cldr[_localeData.name] = _localeData;
  }
};
var DateInputComponent = class _DateInputComponent {
  cdr;
  intl;
  renderer;
  wrapper;
  ngZone;
  injector;
  localization;
  pickerService;
  /**
   * @hidden
   */
  caretAltUpIcon = caretAltUpIcon;
  /**
   * @hidden
   */
  xIcon = xIcon;
  /**
   * @hidden
   */
  caretAltDownIcon = caretAltDownIcon;
  /**
   * @hidden
   */
  set focusableId(_focusableId) {
    if (_focusableId) {
      this._focusableId = _focusableId;
    }
  }
  get focusableId() {
    return this._focusableId;
  }
  /**
   * @hidden
   */
  set pickerType(_pickerType) {
    if (_pickerType) {
      this.focusableId = `${_pickerType}-${nextId}`;
    }
  }
  /**
   * Specifies whether to render a clear button after the input text or DateInput value has been changed.
   * Clicking this button resets the value of the component to `null` and triggers the `valueChange` event.
   * @default false
   */
  clearButton = false;
  /**
   * Specifies whether the component is disabled
   * ([see example]({% slug disabled_dateinput %})).
   * To learn how to disable the component in reactive forms, refer to the article on [Forms Support](slug:formssupport_dateinput#toc-managing-the-dateinput-disabled-state-in-reactive-forms).
   *
   * @default false
   */
  disabled = false;
  /**
   * Specifies the read-only state of the DateInput
   * ([see example]({% slug readonly_dateinput %})).
   *
   * @default false
   */
  readonly = false;
  /**
   * Specifies the title of the input element of the DateInput.
   *
   * @default ""
   */
  title = "";
  /**
   * Specifies the `tabIndex` property of the DateInput.
   *
   * @default 0
   */
  tabindex = 0;
  /**
   * @hidden
   */
  role = "textbox";
  /**
   * @hidden
   */
  ariaReadOnly = false;
  /**
   * @hidden
   */
  set tabIndex(tabIndex) {
    this.tabindex = tabIndex;
  }
  get tabIndex() {
    return this.tabindex;
  }
  /**
   * @hidden
   */
  isRequired = false;
  /**
   * Specifies the date format that is used to display the input value
   * ([see example]({% slug formats_dateinput %})).
   *
   * You can provide a string if a single format is going to be used regardless whether the input is focused or blurred.
   * Alternatively, you can provide a FormatSettings object to display different formats when the component is focused or blurred by specifying inputFormat and displayFormat values.
   */
  format = DEFAULT_FORMAT$1;
  /**
   * Defines the descriptions of the format sections in the input field.
   * For more information, refer to the article on
   * [placeholders]({% slug placeholders_dateinput %}).
   */
  set formatPlaceholder(format) {
    this._formatPlaceholder = format || DEFAULT_FORMAT_PLACEHOLDER;
  }
  get formatPlaceholder() {
    return this._formatPlaceholder;
  }
  /**
   * Specifies the hint the DateInput displays when its value is `null`.
   * For more information, refer to the article on
   * [placeholders]({% slug placeholders_dateinput %}).
   */
  placeholder;
  /**
   * Configures the incremental steps of the DateInput.
   * For more information, refer to the article on
   * [incremental steps]({% slug incrementalsteps_dateinput %}).
   */
  steps = {};
  /**
   * Specifies the biggest date that is valid
   * ([see example]({% slug dateranges_dateinput %})).
   *
   * @default 2099-12-31
   */
  max = cloneDate(MAX_DATE);
  /**
   * Specifies the smallest date that is valid
   * ([see example]({% slug dateranges_dateinput %})).
   *
   * @default 1900-1-1
   */
  min = cloneDate(MIN_DATE);
  /**
   * Specifies whether to enforce the built-in min and max validators when validating a form.
   * Set to `true` to enable validation for the `min` and `max` values.
   *
   * @default true
   */
  rangeValidation = true;
  /**
   * Specifies if the component automatically corrects invalid date segments.
   * When set to `true`, the component fixes invalid segments as you type.
   *
   * @default true
   */
  autoCorrectParts = true;
  /**
   * Specifies if the component automatically moves to the next segment after you complete the current one.
   * When set to `true`, focus moves to the next segment as soon as you finish typing the current segment.
   *
   * @default true
   */
  autoSwitchParts = true;
  /**
   * Specifies custom keys that move focus to the next date format segment.
   * Provide an array of strings to define which keys trigger the focus change.
   */
  autoSwitchKeys = [];
  /**
   * Specifies if the component displays a blinking caret inside the DateInput when possible.
   * Set to `true` to show a blinking caret for better visual feedback.
   *
   * @default false
   */
  allowCaretMode = false;
  /**
   * Specifies whether to autofill the rest of the date to the current date when the component loses focus.
   *
   * @default false
   */
  autoFill = false;
  /**
   * Specifies whether the built-in validation for incomplete dates is to be enforced when a form is being validated.
   *
   * @default false
   */
  incompleteDateValidation = false;
  /**
   * The maximum year to assume to be from the current century when typing two-digit year value
   * ([see example]({% slug formats_dateinput %}#toc-two-digit-year-format)).
   *
   * The default value is 68, indicating that typing any value less than 69
   * will be assumed to be 20xx, while 69 and larger will be assumed to be 19xx.
   * @default 68
   */
  twoDigitYearMax = TWO_DIGIT_YEAR_MAX$2;
  /**
   * Indicates whether the mouse scroll can be used to increase/decrease the time segments values.
   *
   * @default true
   */
  enableMouseWheel = true;
  /**
   * Specifies the value of the DateInput component.
   *
   * The `value` has to be a valid [JavaScript `Date`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date) instance or `null`.
   */
  set value(value) {
    this.verifyValue(value);
    this.showClearButton = value || !value && this.isDateIncomplete ? true : false;
    this._value = cloneDate(value);
    this.valueUpdate.emit(cloneDate(value));
  }
  get value() {
    return this._value;
  }
  /**
   * Specifies whether the **Up** and **Down** spin buttons will be rendered.
   * For more information, refer to the article on
   * [spinner buttons]({% slug spinbuttons_dateinput %}).
   *
   * @default false
   */
  spinners = false;
  /**
   * @hidden
   */
  isPopupOpen;
  /**
   * @hidden
   */
  hasPopup;
  /**
   * Specifies the size of the component.
   *
   * @default medium
   *
   */
  set size(size) {
    this.renderer.removeClass(this.wrapper.nativeElement, getSizeClass("input", this.size));
    const newSize = size || DEFAULT_SIZE;
    if (newSize !== "none") {
      this.renderer.addClass(this.wrapper.nativeElement, getSizeClass("input", newSize));
    }
    this._size = newSize;
  }
  get size() {
    return this._size;
  }
  /**
   * Specifies the border radius of the component.
   * @default 'medium'
   */
  set rounded(rounded) {
    this.renderer.removeClass(this.wrapper.nativeElement, getRoundedClass(this.rounded));
    const newRounded = rounded || DEFAULT_ROUNDED;
    if (newRounded !== "none") {
      this.renderer.addClass(this.wrapper.nativeElement, getRoundedClass(newRounded));
    }
    this._rounded = newRounded;
  }
  get rounded() {
    return this._rounded;
  }
  /**
   * Specifies the fillMode of the component.
   * @default 'solid'
   */
  set fillMode(fillMode) {
    this.renderer.removeClass(this.wrapper.nativeElement, getFillModeClass("input", this.fillMode));
    const newFillMode = fillMode || DEFAULT_FILL_MODE;
    if (newFillMode !== "none") {
      this.renderer.addClass(this.wrapper.nativeElement, getFillModeClass("input", newFillMode));
      if (this.spinners && this.spinup && this.spindown) {
        this.setSpinnerFill(this.spinup.nativeElement, newFillMode, this.fillMode);
        this.setSpinnerFill(this.spindown.nativeElement, newFillMode, this.fillMode);
      }
    }
    this._fillMode = newFillMode;
  }
  get fillMode() {
    return this._fillMode;
  }
  /**
   * Specifies the HTML attributes of the inner focusable input element. Attributes which are essential for certain component functionalities cannot be changed.
   */
  set inputAttributes(attributes) {
    if (isObjectPresent(this.parsedAttributes)) {
      removeHTMLAttributes(this.parsedAttributes, this.renderer, this.dateInput.nativeElement);
    }
    this._inputAttributes = attributes;
    this.parsedAttributes = this.inputAttributes ? parseAttributes(this.inputAttributes, this.defaultAttributes) : this.inputAttributes;
    this.setInputAttributes();
  }
  get inputAttributes() {
    return this._inputAttributes;
  }
  /**
   * Fires each time the user selects a new value
   * ([see example](slug:events_dateinput)).
   */
  valueChange = new EventEmitter();
  /**
   * @hidden
   * Fires each time the user selects a new value
   * ([see example](slug:events_dateinput)).
   */
  valueUpdate = new EventEmitter();
  /**
   * Fires each time the user focuses the input element
   * ([see example](slug:events_dateinput)).
   */
  onFocus = new EventEmitter();
  /**
   * Fires each time the input element gets blurred
   * ([see example](slug:events_dateinput)).
   */
  onBlur = new EventEmitter();
  /**
   * @hidden
   */
  dateInput;
  get wrapperClass() {
    return true;
  }
  get disabledClass() {
    return this.disabled;
  }
  get inputElement() {
    return this.dateInput ? this.dateInput.nativeElement : null;
  }
  get inputValue() {
    return (this.inputElement || {}).value || "";
  }
  get isActive() {
    return this._active;
  }
  set isActive(value) {
    this._active = value;
    if (!this.wrapper) {
      return;
    }
    if (!isPresent2(this.pickerService)) {
      const element = this.wrapper.nativeElement;
      if (value) {
        this.renderer.addClass(element, "k-focus");
      } else {
        this.renderer.removeClass(element, "k-focus");
      }
    }
  }
  /**
   * @hidden
   */
  get formControl() {
    const ngControl = this.injector.get(NgControl, null);
    return ngControl?.control || null;
  }
  get options() {
    return {
      format: this.format,
      steps: this.steps,
      readonly: this.readonly,
      formatPlaceholder: this.formatPlaceholder,
      placeholder: this.placeholder,
      autoCorrectParts: this.autoCorrectParts,
      autoSwitchParts: this.autoSwitchParts,
      selectPreviousSegmentOnBackspace: true,
      // matches current behavior -> Backspace moves to previous segment
      autoSwitchKeys: this.autoSwitchKeys,
      twoDigitYearMax: this.twoDigitYearMax,
      enableMouseWheel: this.enableMouseWheel,
      selectNearestSegmentOnFocus: true,
      allowCaretMode: this.allowCaretMode,
      autoFill: this.autoFill,
      value: this.value,
      intlService: new DateInputIntl(this.intl)
    };
  }
  arrow = Arrow;
  arrowDirection = Arrow.None;
  formatSections = {
    date: false,
    time: false
  };
  hasMousedown = false;
  focusedPriorToMousedown = false;
  showClearButton = false;
  /**
   * @hidden
   */
  isDateIncomplete = false;
  currentFormat = "";
  spinup;
  spindown;
  minValidator = noop$2;
  maxValidator = noop$2;
  incompleteValidator = noop$2;
  _value = null;
  _active = false;
  _focusableId = `dateinput-${nextId++}`;
  _formatPlaceholder = DEFAULT_FORMAT_PLACEHOLDER;
  kendoDate = null;
  kendoDateObject = null;
  domEvents = [];
  ngControl;
  onControlChange = noop$2;
  onControlTouched = noop$2;
  onValidatorChange = noop$2;
  _size = DEFAULT_SIZE;
  _rounded = DEFAULT_ROUNDED;
  _fillMode = DEFAULT_FILL_MODE;
  control;
  subs = new Subscription();
  _inputAttributes;
  parsedAttributes = {};
  get defaultAttributes() {
    return {
      "aria-readonly": this.ariaReadOnly,
      id: this.focusableId,
      title: this.title,
      tabindex: this.tabindex,
      disabled: this.disabled ? "" : null,
      readonly: this.readonly ? "" : null,
      placeholder: this.placeholder,
      "aria-expanded": this.isPopupOpen,
      "aria-haspopup": this.hasPopup,
      required: this.isControlRequired ? "" : null
    };
  }
  get mutableAttributes() {
    return {
      autocomplete: "off",
      autocorrect: "off",
      autocapitalize: "off",
      spellcheck: "false",
      role: this.role
    };
  }
  constructor(cdr, intl, renderer, wrapper, ngZone, injector, localization, pickerService) {
    this.cdr = cdr;
    this.intl = intl;
    this.renderer = renderer;
    this.wrapper = wrapper;
    this.ngZone = ngZone;
    this.injector = injector;
    this.localization = localization;
    this.pickerService = pickerService;
    A(packageMetadata);
    if (this.pickerService) {
      this.pickerService.input = this;
    } else {
      this.ariaReadOnly = null;
    }
  }
  /**
   * @hidden
   * Used by the TextBoxContainer to determine if the component is empty
   */
  isEmpty() {
    const currentValue = this.dateInput.nativeElement.value;
    return !currentValue || !String(currentValue).trim();
  }
  /**
   * @hidden
   */
  handleDragAndDrop(args) {
    args.preventDefault();
  }
  /**
   * @hidden
   */
  containsElement(element) {
    return Boolean(closest(element, (node) => node === this.wrapper.nativeElement));
  }
  /**
   * @hidden
   */
  ngOnInit() {
    if (this.kendoDate) {
      this.kendoDate.destroy();
    }
    this.kendoDate = this.initKendoDate();
    this.kendoDateObject = this.kendoDate.dateObject;
    this.updateFormatSections();
    this.subs.add(this.intl.changes.subscribe(this.intlChange.bind(this)));
    this.ngControl = this.injector.get(NgControl, null);
    if (this.wrapper) {
      this.renderer.removeAttribute(this.wrapper.nativeElement, "tabindex");
    }
    this.minValidator = this.rangeValidation ? minValidator(this.min) : noop$2;
    this.maxValidator = this.rangeValidation ? maxValidator(this.max) : noop$2;
  }
  /**
   * @hidden
   */
  ngOnChanges(changes) {
    this.verifyRange();
    if (anyChanged(["min", "max", "rangeValidation", "incompleteDateValidation"], changes, false)) {
      this.minValidator = this.rangeValidation ? minValidator(this.min) : noop$2;
      this.maxValidator = this.rangeValidation ? maxValidator(this.max) : noop$2;
      this.incompleteValidator = this.incompleteDateValidation ? incompleteDateValidator() : noop$2;
      this.onValidatorChange();
    }
    if (changes["clearButton"]) {
      this.showClearButton = this.clearButton && (isPresent2(this.value) || this.isDateIncomplete);
    }
    const isEqualToKendoDate = this.kendoDate && isEqual(this.value, this.kendoDate.value);
    if (!isEqualToKendoDate) {
      if (!this.kendoDate) {
        return;
      }
      this.kendoDate.writeValue(this.value);
    }
    if (changes["format"] || changes["placeholder"]) {
      if (!this.kendoDate) {
        return;
      }
      this.kendoDate?.setOptions(this.options, true);
      this.updateFormatSections();
    }
    if (anyChanged(["enableMouseWheel", "autoFill", "autoSwitchParts", "autoSwitchKeys", "twoDigitYearMax", "allowCaretMode", "autoCorrectParts", "readonly", "steps", "formatPlaceholder"], changes)) {
      if (!this.kendoDate) {
        return;
      }
      this.kendoDate?.setOptions(this.options, true);
    }
  }
  updateFormatSections() {
    this.formatSections = this.intl.splitDateFormat(this.kendoDate.inputFormat).reduce(({
      date,
      time
    }, p) => {
      return {
        date: date || DATE_PART_REGEXP.test(p.type),
        time: time || TIME_PART_REGEXP.test(p.type)
      };
    }, {
      date: false,
      time: false
    });
  }
  updateIncompleteValidationStatus() {
    const previousValue = this.isDateIncomplete;
    this.isDateIncomplete = this.kendoDateObject.hasValue() && this.value === null;
    if (previousValue === this.isDateIncomplete || !this.incompleteDateValidation) {
      return;
    }
    if (isPresent2(this.ngControl) && !isPresent2(this.pickerService)) {
      this.cdr.markForCheck();
      this.ngZone.run(() => this.onValidatorChange());
    } else if (isPresent2(this.pickerService)) {
      this.pickerService.dateCompletenessChange.emit();
    }
  }
  ngAfterViewInit() {
    this.setComponentClasses();
    const formControl = this.injector.get(NgControl, null)?.control;
    this.control = formControl;
    this.subs.add(this.formControl?.statusChanges.subscribe(() => this.setAriaInvalid()));
    this.setAriaInvalid();
    this.subs.add(this.renderer.listen(this.dateInput?.nativeElement, "keydown", this.handleKeyDown));
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
    if (this.pickerService) {
      this.pickerService.input = null;
    }
    this.domEvents.forEach((unbindCallback) => unbindCallback());
  }
  /**
   * @hidden
   */
  setAriaInvalid() {
    if (!this.control) {
      return;
    }
    if (this.control.invalid) {
      this.renderer.setAttribute(this.inputElement, attributeNames.ariaInvalid, "true");
    } else {
      this.renderer.setAttribute(this.inputElement, attributeNames.ariaInvalid, "false");
    }
  }
  /**
   * @hidden
   */
  get isControlRequired() {
    return isControlRequired(this.formControl) || this.isRequired;
  }
  /**
   * @hidden
   */
  validate(control) {
    return this.minValidator(control) || this.maxValidator(control) || this.incompleteValidator(control, this.isDateIncomplete);
  }
  /**
   * @hidden
   */
  registerOnValidatorChange(fn) {
    this.onValidatorChange = fn;
  }
  /**
   * @hidden
   */
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
    this.cdr.markForCheck();
  }
  //ngModel binding
  /**
   * @hidden
   */
  writeValue(value) {
    this.verifyValue(value);
    this.value = cloneDate(value);
    this.kendoDate?.setOptions(this.options, true);
    this.kendoDateObject?.setValue(this.value);
    this.kendoDate?.refreshElementValue();
  }
  resetInput() {
    this.isDateIncomplete = false;
    this.writeValue(null);
    this.notify();
    this.showClearButton = false;
  }
  /**
   * @hidden
   */
  triggerChange() {
    const value = this.kendoDate.value;
    const oneValuePresent = isPresent2(value) !== isPresent2(this.value);
    if (+value !== +this.value || oneValuePresent) {
      this.value = cloneDate(value);
      this.notify();
    }
  }
  /**
   * @hidden
   */
  notify() {
    this.ngZone.run(() => {
      this.showClearButton = this.value ? true : false;
      this.onControlChange(cloneDate(this.value));
      this.valueChange.emit(cloneDate(this.value));
    });
  }
  /**
   * @hidden
   */
  registerOnChange(fn) {
    this.onControlChange = fn;
  }
  /**
   * @hidden
   */
  registerOnTouched(fn) {
    this.onControlTouched = fn;
  }
  /**
   * Focuses the DateInput component.
   *
   */
  focus() {
    this.kendoDate?.focus();
  }
  /**
   * Blurs the DateInput component.
   */
  blur() {
    const input = this.inputElement;
    if (input) {
      input.blur();
    }
  }
  /**
   * @hidden
   */
  handleButtonClick(offset) {
    this.showClearButton = true;
    this.arrowDirection = Arrow.None;
    if (!this.isActive) {
      this.kendoDate.focus();
    }
    this.kendoDate.modifyDateSegmentValue(offset);
  }
  initKendoDate() {
    const kendoDate = new DateInput(this.dateInput.nativeElement, __spreadProps(__spreadValues({}, this.options), {
      events: {
        valueChange: this.onWidgetValueChange.bind(this),
        inputEnd: this.onWidgetInputEnd.bind(this),
        focusEnd: this.onWidgetFocus.bind(this),
        blurEnd: this.onWidgetBlur.bind(this),
        keydown: this.onWidgetKeyDown.bind(this)
      }
    }));
    return kendoDate;
  }
  onWidgetValueChange() {
    this.triggerChange();
  }
  onWidgetKeyDown() {
    this.kendoDateObject = this.kendoDate.dateObject;
  }
  onWidgetInputEnd() {
    this.updateIncompleteValidationStatus();
    if (this.clearButton) {
      this.showClearButton = this.value || this.isDateIncomplete ? true : false;
      this.cdr.markForCheck();
    }
  }
  onWidgetFocus(args) {
    this.isActive = true;
    if (hasObservers(this.onFocus)) {
      this.ngZone.run(() => {
        this.emitFocus(args.event);
      });
    } else {
      this.emitFocus(args.event);
    }
  }
  onWidgetBlur(args) {
    this.isActive = false;
    if (hasObservers(this.onBlur) || requiresZoneOnBlur(this.ngControl)) {
      this.ngZone.run(() => {
        this.onControlTouched();
        this.emitBlur(args.event);
        this.cdr.markForCheck();
      });
    } else {
      this.emitBlur(args.event);
    }
  }
  handleKeyDown(event) {
    if (!isPresent2(event.keyCode)) {
      event.stopImmediatePropagation();
    }
  }
  verifyRange() {
    if (!isDevMode()) {
      return;
    }
    if (!isValidRange(this.min, this.max)) {
      throw new Error(`The max value should be bigger than the min. See ${MIN_DOC_LINK$1} and ${MAX_DOC_LINK$1}.`);
    }
  }
  verifyValue(value) {
    if (!isDevMode()) {
      return;
    }
    if (value && !(value instanceof Date)) {
      throw new Error(`The 'value' should be a valid JavaScript Date instance or null. Check ${VALUE_DOC_LINK$3} for possible resolution.`);
    }
  }
  intlChange() {
    this.kendoDate.setOptions(this.options, true);
    this.updateFormatSections();
  }
  emitFocus(args) {
    this.onFocus.emit();
    if (this.pickerService) {
      this.pickerService.onFocus.emit(args);
    }
  }
  emitBlur(args) {
    this.onBlur.emit();
    if (this.pickerService) {
      this.pickerService.onBlur.emit(args);
    }
  }
  setSpinnerFill(spinner, fill, oldFill) {
    if (oldFill !== "none") {
      this.renderer.removeClass(spinner, `k-button-${oldFill}`);
      this.renderer.removeClass(spinner, `k-button-${oldFill}-base`);
    }
    this.renderer.addClass(spinner, `k-button-${fill}`);
    this.renderer.addClass(spinner, `k-button-${fill}-base`);
  }
  setComponentClasses() {
    if (this.size !== "none") {
      this.renderer.addClass(this.wrapper.nativeElement, getSizeClass("input", this.size));
    }
    if (this.rounded !== "none") {
      this.renderer.addClass(this.wrapper.nativeElement, getRoundedClass(this.rounded));
    }
    if (this.fillMode !== "none") {
      this.renderer.addClass(this.wrapper.nativeElement, getFillModeClass("input", this.fillMode));
    }
    if (this.spinners && this.fillMode !== "none") {
      this.setSpinnerFill(this.spinup.nativeElement, this.fillMode);
      this.setSpinnerFill(this.spindown.nativeElement, this.fillMode);
    }
  }
  setInputAttributes() {
    const attributesToRender = __spreadValues(__spreadValues({}, this.mutableAttributes), this.parsedAttributes);
    setHTMLAttributes(attributesToRender, this.renderer, this.dateInput.nativeElement, this.ngZone);
  }
  static ɵfac = function DateInputComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DateInputComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(IntlService), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(PickerService, 8));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _DateInputComponent,
    selectors: [["kendo-dateinput"]],
    viewQuery: function DateInputComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c10, 7);
        ɵɵviewQuery(_c11, 5);
        ɵɵviewQuery(_c12, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.dateInput = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.spinup = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.spindown = _t.first);
      }
    },
    hostVars: 8,
    hostBindings: function DateInputComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("k-readonly", ctx.readonly)("k-input", ctx.wrapperClass)("k-dateinput", ctx.wrapperClass)("k-disabled", ctx.disabledClass);
      }
    },
    inputs: {
      focusableId: "focusableId",
      pickerType: "pickerType",
      clearButton: "clearButton",
      disabled: "disabled",
      readonly: "readonly",
      title: "title",
      tabindex: "tabindex",
      role: "role",
      ariaReadOnly: "ariaReadOnly",
      tabIndex: "tabIndex",
      isRequired: "isRequired",
      format: "format",
      formatPlaceholder: "formatPlaceholder",
      placeholder: "placeholder",
      steps: "steps",
      max: "max",
      min: "min",
      rangeValidation: "rangeValidation",
      autoCorrectParts: "autoCorrectParts",
      autoSwitchParts: "autoSwitchParts",
      autoSwitchKeys: "autoSwitchKeys",
      allowCaretMode: "allowCaretMode",
      autoFill: "autoFill",
      incompleteDateValidation: "incompleteDateValidation",
      twoDigitYearMax: "twoDigitYearMax",
      enableMouseWheel: "enableMouseWheel",
      value: "value",
      spinners: "spinners",
      isPopupOpen: "isPopupOpen",
      hasPopup: "hasPopup",
      size: "size",
      rounded: "rounded",
      fillMode: "fillMode",
      inputAttributes: "inputAttributes"
    },
    outputs: {
      valueChange: "valueChange",
      valueUpdate: "valueUpdate",
      onFocus: "focus",
      onBlur: "blur"
    },
    exportAs: ["kendo-dateinput"],
    standalone: true,
    features: [ɵɵProvidersFeature([{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _DateInputComponent),
      multi: true
    }, {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => _DateInputComponent),
      multi: true
    }, {
      provide: L10N_PREFIX,
      useValue: "kendo.dateinput"
    }, {
      provide: KendoInput,
      useExisting: forwardRef(() => _DateInputComponent)
    }, LocalizationService]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    decls: 5,
    vars: 18,
    consts: () => {
      let i18n_8;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_8 = goog.getMsg("Increase value");
        i18n_8 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_8;
      } else {
        i18n_8 = $localize`:kendo.dateinput.increment|The label for the **Increment** button in the DateInput:Increase value`;
      }
      let i18n_9;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_9 = goog.getMsg("Decrease value");
        i18n_9 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_9;
      } else {
        i18n_9 = $localize`:kendo.dateinput.decrement|The label for the **Decrement** button in the DateInput:Decrease value`;
      }
      let i18n_10;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_10 = goog.getMsg("clear");
        i18n_10 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_10;
      } else {
        i18n_10 = $localize`:kendo.dateinput.clearTitle|The title of the clear button:clear`;
      }
      return [["dateInput", ""], ["spinup", ""], ["spindown", ""], ["kendoDateInputLocalizedMessages", "", "increment", i18n_8, "decrement", i18n_9, "clearTitle", i18n_10], ["autocomplete", "off", "autocorrect", "off", "autocapitalize", "off", "spellcheck", "false", 1, "k-input-inner", 3, "id", "title", "tabindex", "disabled", "readonly", "kendoEventsOutsideAngular", "scope"], ["role", "button", "tabindex", "-1", 1, "k-clear-value"], [1, "k-input-spinner", "k-spin-button"], ["role", "button", "tabindex", "-1", 1, "k-clear-value", 3, "click", "mousedown"], ["name", "x", 3, "svgIcon"], [1, "k-input-spinner", "k-spin-button", 3, "mousedown"], ["tabindex", "-1", 1, "k-spinner-increase", "k-button", "k-icon-button", 3, "mousedown", "mouseleave", "click", "title"], ["name", "caret-alt-up", "innerCssClass", "k-button-icon", 3, "svgIcon"], ["tabindex", "-1", 1, "k-spinner-decrease", "k-button", "k-icon-button", 3, "click", "mousedown", "mouseleave", "title"], ["name", "caret-alt-down", "innerCssClass", "k-button-icon", 3, "svgIcon"]];
    },
    template: function DateInputComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementContainer(0, 3);
        ɵɵelement(1, "input", 4, 0);
        ɵɵtemplate(3, DateInputComponent_Conditional_3_Template, 2, 2, "span", 5)(4, DateInputComponent_Conditional_4_Template, 7, 10, "span", 6);
      }
      if (rf & 2) {
        ɵɵadvance();
        ɵɵproperty("id", ctx.focusableId)("title", ctx.title)("tabindex", ctx.tabindex)("disabled", ctx.disabled)("readonly", ctx.readonly)("kendoEventsOutsideAngular", ɵɵpureFunction2(15, _c13, ctx.handleDragAndDrop, ctx.handleDragAndDrop))("scope", ctx);
        ɵɵattribute("required", ctx.isControlRequired ? "" : null)("role", ctx.role)("aria-readonly", ctx.ariaReadOnly)("placeholder", ctx.placeholder)("aria-expanded", ctx.isPopupOpen)("aria-haspopup", ctx.hasPopup);
        ɵɵadvance(2);
        ɵɵconditional(ctx.clearButton && ctx.showClearButton ? 3 : -1);
        ɵɵadvance();
        ɵɵconditional(ctx.spinners ? 4 : -1);
      }
    },
    dependencies: [DateInputLocalizedMessagesDirective, EventsOutsideAngularDirective, IconWrapperComponent],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DateInputComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      exportAs: "kendo-dateinput",
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => DateInputComponent),
        multi: true
      }, {
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => DateInputComponent),
        multi: true
      }, {
        provide: L10N_PREFIX,
        useValue: "kendo.dateinput"
      }, {
        provide: KendoInput,
        useExisting: forwardRef(() => DateInputComponent)
      }, LocalizationService],
      selector: "kendo-dateinput",
      template: `
    <ng-container kendoDateInputLocalizedMessages
      i18n-increment="kendo.dateinput.increment|The label for the **Increment** button in the DateInput"
      increment="Increase value"
    
      i18n-decrement="kendo.dateinput.decrement|The label for the **Decrement** button in the DateInput"
      decrement="Decrease value"
    
      i18n-clearTitle="kendo.dateinput.clearTitle|The title of the clear button"
      clearTitle="clear"
      >
    </ng-container>
    <input #dateInput
      class="k-input-inner"
      [attr.required]="isControlRequired ? '' : null"
      autocomplete="off"
      autocorrect="off"
      autocapitalize="off"
      spellcheck="false"
      [attr.role]="role"
      [attr.aria-readonly]="ariaReadOnly"
      [id]="focusableId"
      [title]="title"
      [tabindex]="tabindex"
      [disabled]="disabled"
      [readonly]="readonly"
      [attr.placeholder]="placeholder"
      [attr.aria-expanded]="isPopupOpen"
      [attr.aria-haspopup]="hasPopup"
        [kendoEventsOutsideAngular]="{
            dragstart: handleDragAndDrop,
            drop: handleDragAndDrop
        }"
      [scope]="this"
      />
    @if (clearButton && showClearButton) {
      <span
        class="k-clear-value"
        [attr.title]="localization.get('clearTitle')"
        role="button"
        tabindex="-1"
        (click)="resetInput()"
        (mousedown)="$event.preventDefault()"
        >
        <kendo-icon-wrapper
          name="x"
          [svgIcon]="xIcon"
          >
        </kendo-icon-wrapper>
      </span>
    }
    @if (spinners) {
      <span class="k-input-spinner k-spin-button" (mousedown)="$event.preventDefault()">
        <button
          #spinup
          tabindex="-1"
          class="k-spinner-increase k-button k-icon-button"
          [class.k-active]="arrowDirection === arrow.Up"
          (mousedown)="arrowDirection = arrow.Up"
          (mouseleave)="arrowDirection = arrow.None"
          (click)="handleButtonClick(1)"
          [title]="localization.get('increment')"
          [attr.aria-label]="localization.get('increment')"
          >
          <kendo-icon-wrapper
            name="caret-alt-up"
            [svgIcon]="caretAltUpIcon"
            innerCssClass="k-button-icon"
            >
          </kendo-icon-wrapper>
        </button>
        <button
          #spindown
          tabindex="-1"
          class="k-spinner-decrease k-button k-icon-button"
          (click)="handleButtonClick(-1)"
          [class.k-active]="arrowDirection === arrow.Down"
          (mousedown)="arrowDirection = arrow.Down"
          (mouseleave)="arrowDirection = arrow.None"
          [title]="localization.get('decrement')"
          [attr.aria-label]="localization.get('decrement')"
          >
          <kendo-icon-wrapper
            name="caret-alt-down"
            [svgIcon]="caretAltDownIcon"
            innerCssClass="k-button-icon"
            >
          </kendo-icon-wrapper>
        </button>
      </span>
    }
    `,
      standalone: true,
      imports: [DateInputLocalizedMessagesDirective, EventsOutsideAngularDirective, IconWrapperComponent]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: IntlService
  }, {
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }, {
    type: Injector
  }, {
    type: LocalizationService
  }, {
    type: PickerService,
    decorators: [{
      type: Optional
    }]
  }], {
    focusableId: [{
      type: Input
    }],
    pickerType: [{
      type: Input
    }],
    clearButton: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    readonly: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["class.k-readonly"]
    }],
    title: [{
      type: Input
    }],
    tabindex: [{
      type: Input
    }],
    role: [{
      type: Input
    }],
    ariaReadOnly: [{
      type: Input
    }],
    tabIndex: [{
      type: Input
    }],
    isRequired: [{
      type: Input
    }],
    format: [{
      type: Input
    }],
    formatPlaceholder: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    steps: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    min: [{
      type: Input
    }],
    rangeValidation: [{
      type: Input
    }],
    autoCorrectParts: [{
      type: Input
    }],
    autoSwitchParts: [{
      type: Input
    }],
    autoSwitchKeys: [{
      type: Input
    }],
    allowCaretMode: [{
      type: Input
    }],
    autoFill: [{
      type: Input
    }],
    incompleteDateValidation: [{
      type: Input
    }],
    twoDigitYearMax: [{
      type: Input
    }],
    enableMouseWheel: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    spinners: [{
      type: Input
    }],
    isPopupOpen: [{
      type: Input
    }],
    hasPopup: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    rounded: [{
      type: Input
    }],
    fillMode: [{
      type: Input
    }],
    inputAttributes: [{
      type: Input
    }],
    valueChange: [{
      type: Output
    }],
    valueUpdate: [{
      type: Output
    }],
    onFocus: [{
      type: Output,
      args: ["focus"]
    }],
    onBlur: [{
      type: Output,
      args: ["blur"]
    }],
    dateInput: [{
      type: ViewChild,
      args: ["dateInput", {
        static: true
      }]
    }],
    wrapperClass: [{
      type: HostBinding,
      args: ["class.k-input"]
    }, {
      type: HostBinding,
      args: ["class.k-dateinput"]
    }],
    disabledClass: [{
      type: HostBinding,
      args: ["class.k-disabled"]
    }],
    spinup: [{
      type: ViewChild,
      args: ["spinup", {
        static: false
      }]
    }],
    spindown: [{
      type: ViewChild,
      args: ["spindown", {
        static: false
      }]
    }]
  });
})();
var PreventableEvent = class {
  prevented = false;
  /** @hidden */
  constructor() {
  }
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
var disabledDatesValidator = (isDateDisabled) => {
  return (control) => {
    if (!isDateDisabled || !control.value) {
      return null;
    }
    const error = {
      disabledDate: true
    };
    return isDateDisabled(control.value) ? error : null;
  };
};
var CalendarCustomMessagesComponent = class _CalendarCustomMessagesComponent extends CalendarMessages {
  service;
  constructor(service) {
    super();
    this.service = service;
  }
  get override() {
    return true;
  }
  static ɵfac = function CalendarCustomMessagesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CalendarCustomMessagesComponent)(ɵɵdirectiveInject(LocalizationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _CalendarCustomMessagesComponent,
    selectors: [["kendo-calendar-messages"]],
    standalone: true,
    features: [ɵɵProvidersFeature([{
      provide: CalendarMessages,
      useExisting: forwardRef(() => _CalendarCustomMessagesComponent)
    }]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function CalendarCustomMessagesComponent_Template(rf, ctx) {
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarCustomMessagesComponent, [{
    type: Component,
    args: [{
      providers: [{
        provide: CalendarMessages,
        useExisting: forwardRef(() => CalendarCustomMessagesComponent)
      }],
      selector: "kendo-calendar-messages",
      template: ``,
      standalone: true
    }]
  }], () => [{
    type: LocalizationService
  }], null);
})();
var DateInputCustomMessagesComponent = class _DateInputCustomMessagesComponent extends DateInputMessages {
  service;
  constructor(service) {
    super();
    this.service = service;
  }
  get override() {
    return true;
  }
  static ɵfac = function DateInputCustomMessagesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DateInputCustomMessagesComponent)(ɵɵdirectiveInject(LocalizationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _DateInputCustomMessagesComponent,
    selectors: [["kendo-dateinput-messages"]],
    standalone: true,
    features: [ɵɵProvidersFeature([{
      provide: DateInputMessages,
      useExisting: forwardRef(() => _DateInputCustomMessagesComponent)
    }]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function DateInputCustomMessagesComponent_Template(rf, ctx) {
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DateInputCustomMessagesComponent, [{
    type: Component,
    args: [{
      providers: [{
        provide: DateInputMessages,
        useExisting: forwardRef(() => DateInputCustomMessagesComponent)
      }],
      selector: "kendo-dateinput-messages",
      template: ``,
      standalone: true
    }]
  }], () => [{
    type: LocalizationService
  }], null);
})();
var DatePickerMessages = class _DatePickerMessages extends ComponentMessages {
  /**
   * The **Today** button text in the header of the Calendar.
   */
  today;
  /**
   * The title of the **Toggle** button of the DatePicker.
   */
  toggle;
  /**
   * The title of the **Prev** button in the header of the Classic Calendar.
   */
  prevButtonTitle;
  /**
   * The title of the **Next** button in the header of the Classic Calendar.
   */
  nextButtonTitle;
  /**
   * The title of the **Parent View** button in the header of the Calendar.
   */
  parentViewButtonTitle;
  /**
   * The title of the **Clear** button of the DatePicker.
   */
  clearTitle;
  /**
   * The title of the Close button of the ActionSheet that is rendered instead of the Popup when using small screen devices in adaptive mode.
   */
  adaptiveCloseButtonTitle;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵDatePickerMessages_BaseFactory;
    return function DatePickerMessages_Factory(__ngFactoryType__) {
      return (ɵDatePickerMessages_BaseFactory || (ɵDatePickerMessages_BaseFactory = ɵɵgetInheritedFactory(_DatePickerMessages)))(__ngFactoryType__ || _DatePickerMessages);
    };
  })();
  static ɵdir = ɵɵdefineDirective({
    type: _DatePickerMessages,
    selectors: [["kendo-datepicker-messages-base"]],
    inputs: {
      today: "today",
      toggle: "toggle",
      prevButtonTitle: "prevButtonTitle",
      nextButtonTitle: "nextButtonTitle",
      parentViewButtonTitle: "parentViewButtonTitle",
      clearTitle: "clearTitle",
      adaptiveCloseButtonTitle: "adaptiveCloseButtonTitle"
    },
    features: [ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DatePickerMessages, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line
      selector: "kendo-datepicker-messages-base"
    }]
  }], null, {
    today: [{
      type: Input
    }],
    toggle: [{
      type: Input
    }],
    prevButtonTitle: [{
      type: Input
    }],
    nextButtonTitle: [{
      type: Input
    }],
    parentViewButtonTitle: [{
      type: Input
    }],
    clearTitle: [{
      type: Input
    }],
    adaptiveCloseButtonTitle: [{
      type: Input
    }]
  });
})();
var DatePickerLocalizedMessagesDirective = class _DatePickerLocalizedMessagesDirective extends DatePickerMessages {
  service;
  constructor(service) {
    super();
    this.service = service;
  }
  static ɵfac = function DatePickerLocalizedMessagesDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DatePickerLocalizedMessagesDirective)(ɵɵdirectiveInject(LocalizationService));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _DatePickerLocalizedMessagesDirective,
    selectors: [["", "kendoDatePickerLocalizedMessages", ""]],
    standalone: true,
    features: [ɵɵProvidersFeature([{
      provide: DatePickerMessages,
      useExisting: forwardRef(() => _DatePickerLocalizedMessagesDirective)
    }]), ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DatePickerLocalizedMessagesDirective, [{
    type: Directive,
    args: [{
      providers: [{
        provide: DatePickerMessages,
        useExisting: forwardRef(() => DatePickerLocalizedMessagesDirective)
      }],
      selector: "[kendoDatePickerLocalizedMessages]",
      standalone: true
    }]
  }], () => [{
    type: LocalizationService
  }], null);
})();
var MIN_DOC_LINK = "https://www.telerik.com/kendo-angular-ui/components/dateinputs/api/DatePickerComponent/#toc-min";
var MAX_DOC_LINK = "https://www.telerik.com/kendo-angular-ui/components/dateinputs/api/DatePickerComponent/#toc-max";
var VALUE_DOC_LINK$2 = "https://www.telerik.com/kendo-angular-ui/components/dateinputs/datepicker/#toc-using-with-json";
var DEFAULT_FORMAT = "d";
var TWO_DIGIT_YEAR_MAX$1 = 68;
var DatePickerComponent = class _DatePickerComponent extends MultiTabStop {
  zone;
  localization;
  cdr;
  popupService;
  wrapper;
  renderer;
  injector;
  pickerService;
  disabledDatesService;
  adaptiveService;
  /**
   * @hidden
   */
  calendarIcon = calendarIcon;
  container;
  popupTemplate;
  toggleButton;
  actionSheet;
  /**
   * @hidden
   */
  focusableId;
  /**
   * @hidden
   */
  cellTemplate;
  /**
   * @hidden
   */
  set cellTemplateRef(template) {
    this.cellTemplate = template;
  }
  /**
   * Renders a clear button when set to `true` after the input text or DatePicker value changes.
   * Click this button to reset the component value to `null` and trigger the `valueChange` event.
   * @default false
   */
  clearButton = false;
  /**
   * Specifies the HTML attributes of the inner focusable input element.
   * You cannot change attributes that are essential for certain component functionalities.
   */
  inputAttributes;
  /**
   * @hidden
   */
  monthCellTemplate;
  /**
   * @hidden
   */
  set monthCellTemplateRef(template) {
    this.monthCellTemplate = template;
  }
  /**
   * @hidden
   */
  yearCellTemplate;
  /**
   * @hidden
   */
  set yearCellTemplateRef(template) {
    this.yearCellTemplate = template;
  }
  /**
   * @hidden
   */
  decadeCellTemplate;
  /**
   * @hidden
   */
  set decadeCellTemplateRef(template) {
    this.decadeCellTemplate = template;
  }
  /**
   * @hidden
   */
  centuryCellTemplate;
  /**
   * @hidden
   */
  set centuryCellTemplateRef(template) {
    this.centuryCellTemplate = template;
  }
  /**
   * @hidden
   */
  weekNumberTemplate;
  /**
   * @hidden
   */
  set weekNumberTemplateRef(template) {
    this.weekNumberTemplate = template;
  }
  /**
   * @hidden
   */
  headerTitleTemplate;
  /**
   * @hidden
   */
  set headerTitleTemplateRef(template) {
    this.headerTitleTemplate = template;
  }
  /**
   * @hidden
   */
  headerTemplate;
  /**
   * @hidden
   */
  set headerTemplateRef(template) {
    this.headerTemplate = template;
  }
  /**
   * @hidden
   */
  footerTemplate;
  /**
   * @hidden
   */
  set footerTemplateRef(template) {
    this.footerTemplate = template;
  }
  /**
   * Controls the visibility of the Calendar footer.
   * @default false
   */
  footer = false;
  /**
   * @hidden
   */
  navigationItemTemplate;
  /**
   * @hidden
   */
  set navigationItemTemplateRef(template) {
    this.navigationItemTemplate = template;
  }
  /**
   * Specifies the format of the displayed Calendar week days' names.
   * @default 'short'
   */
  weekDaysFormat = "short";
  /**
   * Shows the days that fall outside the current month in the Calendar ([see example]({% slug viewoptions_calendar %}#toc-displaying-other-month-days)).
   * The default value is `false` for infinite Calendar type and `true` for classic Calendar type.
   */
  showOtherMonthDays;
  /**
   * Specifies the active view that the Calendar initially renders ([see example]({% slug viewoptions_calendar %}#toc-active-view)).
   *
   * You have to set `activeView` within the `topView`-`bottomView` range.
   * @default 'month'
   */
  activeView = CalendarViewEnum[CalendarViewEnum.month];
  /**
   * Specifies the bottommost Calendar view to which you can navigate ([see example](slug:datepicker_calendar_options#toc-view-selection-depth)).
   * @default 'month'
   */
  bottomView = CalendarViewEnum[CalendarViewEnum.month];
  /**
   * Specifies the topmost Calendar view to which you can navigate ([see example](slug:datepicker_calendar_options#toc-view-selection-depth)).
   * @default 'century'
   */
  topView = CalendarViewEnum[CalendarViewEnum.century];
  /**
   * Specifies the Calendar type.
   * @default 'infinite'
   */
  calendarType = "infinite";
  /**
   * Determines whether to enable animation when navigating to previous/next Calendar view.
   * Applies to the [`classic`]({% slug api_dateinputs_datepickercomponent %}#toc-calendartype) Calendar only.
   *
   * This feature uses the [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API). In order to run the animation in browsers that do not support it, you need the `web-animations-js` polyfill.
   *
   * @default false
   */
  animateCalendarNavigation = false;
  /**
   * Specifies or gets the `disabled` property of the DatePicker and determines whether the component is active ([see example]({% slug disabled_datepicker %})).
   * To learn how to disable the component in reactive forms, refer to the article on [Forms Support](slug:formssupport_datepicker#toc-managing-the-datepicker-disabled-state-in-reactive-forms).
   */
  disabled = false;
  /**
   * Specifies the read-only state of the DatePicker ([see example]({% slug readonly_datepicker %}#toc-read-only-datepicker)).
   *
   * @default false
   */
  readonly = false;
  /**
   * Sets the read-only state of the DatePicker input field
   * ([see example]({% slug readonly_datepicker %}#toc-read-only-input)).
   *
   * If you set the [`readonly`]({% slug api_dateinputs_datepickercomponent %}#toc-readonly) property value to `true`,
   * the input will be rendered in a read-only state regardless of the `readOnlyInput` value.
   */
  readOnlyInput = false;
  /**
   * Configures the popup options of the DatePicker.
   *
   * The available options are animate which controls the popup animation and by default, the open and close animations are enabled.
   * The appendTo option controls the popup container and by default, the popup will be appended to the root component.
   * The popupClass option specifies a list of CSS classes that are used to style the popup.
   */
  set popupSettings(settings) {
    this._popupSettings = __spreadValues({
      animate: true
    }, settings);
  }
  get popupSettings() {
    return this._popupSettings;
  }
  /**
   * Sets or gets the `navigation` property of the Calendar
   * and determines whether the navigation side-bar is displayed.
   * ([see example]({% slug sidebar_datepicker %})).
   */
  set navigation(state) {
    this._navigation = state;
  }
  get navigation() {
    if (this.isAdaptive) {
      return;
    }
    return this._navigation;
  }
  _navigation = true;
  /**
   * Specifies the smallest valid date
   * ([see example]({% slug dateranges_datepicker %})).
   * @default 1900-1-1
   */
  min = cloneDate(MIN_DATE);
  /**
   * Specifies the biggest valid date
   * ([see example]({% slug dateranges_datepicker %})).
   * @default 2099-12-31
   */
  max = cloneDate(MAX_DATE);
  /**
   * Determines whether the built-in validation for incomplete dates is to be enforced when a form is being validated.
   * @default false
   */
  incompleteDateValidation = false;
  /**
   * Determines whether to autocorrect invalid segments automatically.
   *
   * @default true
   */
  autoCorrectParts = true;
  /**
   * Determines whether to automatically move to the next segment after the user completes the current one.
   *
   * @default true
   */
  autoSwitchParts = true;
  /**
   * A string array representing custom keys, which will move the focus to the next date format segment.
   */
  autoSwitchKeys = [];
  /**
   * Indicates whether the mouse scroll can be used to increase/decrease the time segments values.
   *
   * @default true
   */
  enableMouseWheel = true;
  /**
   * Determines if the users should see a blinking caret inside the Date Input when possible.
   *
   * @default false
   */
  allowCaretMode = false;
  /**
   * When enabled, the DatePicker will autofill the rest of the date to the current date when the component loses focus.
   *
   * @default false
   */
  autoFill = false;
  /**
   * Specifies the focused date of the Calendar component
   * ([see example](slug:datepicker_calendar_options#toc-focused-dates)).
   * @default null
   */
  focusedDate = null;
  /**
   * Specifies the value of the DatePicker component.
   *
   * The `value` has to be a valid [JavaScript `Date`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date) instance or `null`.
   */
  set value(value) {
    this.verifyValue(value);
    this._value = cloneDate(value);
  }
  get value() {
    return this._value;
  }
  /**
   * Specifies the date format that is used to display the input value
   * ([see example]({% slug formats_datepicker %})).
   *
   * Format value options include string to provide a single format that is used regardless whether the input is focused or blurred.
   * FormatSettings can be used to display different formats when the component is focused or blurred by providing a settings object with specified inputFormat and displayFormat values.
   */
  format = DEFAULT_FORMAT;
  /**
   * The maximum year to assume to be from the current century when typing two-digit year value
   * ([see example]({% slug formats_datepicker %}#toc-two-digit-year-format)).
   *
   * The default value is 68, indicating that typing any value less than 69
   * will be assumed to be 20xx, while 69 and larger will be assumed to be 19xx.
   * @default 68
   */
  twoDigitYearMax = TWO_DIGIT_YEAR_MAX$1;
  /**
   * Defines the descriptions of the format sections in the input field.
   * ([more information and examples]({% slug placeholders_datepicker %})).
   *
   */
  formatPlaceholder;
  /**
   * Specifies the hint the DatePicker displays when its value is `null`.
   * ([more information and exaples]({% slug placeholders_datepicker %})).
   */
  placeholder;
  /**
   * Sets the `tabindex` of the DatePicker.
   * This property is used to set the order in which the DatePicker will receive focus when navigating through the page using the Tab key.
   * @default 0
   */
  tabindex = 0;
  /**
   * @hidden
   */
  set tabIndex(tabIndex) {
    this.tabindex = tabIndex;
  }
  get tabIndex() {
    return this.tabindex;
  }
  /**
   * Sets the dates of the DatePicker that will be disabled
   * ([see example]({% slug disabled_dates_datepicker %})).
   */
  set disabledDates(value) {
    this._disabledDates = value;
    this.disabledDatesService.initialize(value);
  }
  get disabledDates() {
    return this._disabledDates;
  }
  /**
   * Sets the title of the input element of the DatePicker and the title text rendered
   * in the header of the popup(action sheet). Applicable only when [`AdaptiveMode` is set to `auto`](slug:api_dateinputs_adaptivemode).
   * @default ""
   */
  adaptiveTitle = "";
  /**
   * Sets the subtitle text rendered in the header of the popup(action sheet).
   * Applicable only when [`AdaptiveMode` is set to `auto`](slug:api_dateinputs_adaptivemode).
   * @default ""
   */
  adaptiveSubtitle = "";
  /**
   * Determines whether the built-in min or max validators are enforced when validating a form.
   *
   * @default true
   */
  rangeValidation = true;
  /**
   * Determines whether the built-in validator for disabled
   * date ranges is enforced when validating a form
   * ([see example]( slug:disabled_dates_datepicker#toc-using-a-function)).
   * @default true
   */
  disabledDatesValidation = true;
  /**
   * Determines whether to display a week number column in the `month` view of the Calendar
   * ([see example](slug:datepicker_calendar_options#toc-week-number-column)).
   * @default false
   */
  weekNumber = false;
  /**
   * Sets the size of the component.
   * @default 'medium'
   */
  set size(size) {
    this.renderer.removeClass(this.wrapper.nativeElement, getSizeClass("input", this.size));
    this.renderer.removeClass(this.toggleButton.nativeElement, getSizeClass("button", this.size));
    const newSize = size || DEFAULT_SIZE;
    if (newSize !== "none") {
      this.renderer.addClass(this.wrapper.nativeElement, getSizeClass("input", newSize));
      this.renderer.addClass(this.toggleButton.nativeElement, getSizeClass("button", newSize));
    }
    this._size = newSize;
  }
  get size() {
    return this._size;
  }
  /**
   * Specifies the border radius of the component.
   * @default 'medium'
   */
  set rounded(rounded) {
    this.renderer.removeClass(this.wrapper.nativeElement, getRoundedClass(this.rounded));
    const newRounded = rounded || DEFAULT_ROUNDED;
    if (newRounded !== "none") {
      this.renderer.addClass(this.wrapper.nativeElement, getRoundedClass(newRounded));
    }
    this._rounded = newRounded;
  }
  get rounded() {
    return this._rounded;
  }
  /**
   * Specifies the fillMode of the component.
   * @default 'solid'
   */
  set fillMode(fillMode) {
    this.renderer.removeClass(this.wrapper.nativeElement, getFillModeClass("input", this.fillMode));
    this.renderer.removeClass(this.toggleButton.nativeElement, getFillModeClass("button", this.fillMode));
    this.renderer.removeClass(this.toggleButton.nativeElement, `k-button-${this.fillMode}-base`);
    const newFillMode = fillMode ? fillMode : DEFAULT_FILL_MODE;
    if (newFillMode !== "none") {
      this.renderer.addClass(this.toggleButton.nativeElement, getFillModeClass("button", newFillMode));
      this.renderer.addClass(this.toggleButton.nativeElement, `k-button-${newFillMode}-base`);
      this.renderer.addClass(this.wrapper.nativeElement, getFillModeClass("input", newFillMode));
    }
    this._fillMode = newFillMode;
  }
  get fillMode() {
    return this._fillMode;
  }
  /**
   * Specifies whether to enable adaptive rendering. When enabled, the DatePicker automatically switches between a calendar popup on larger screens and an ActionSheet on mobile devices.
   *
   * @default 'none'
   */
  adaptiveMode = "none";
  /**
   * Fires each time the user selects a new value
   * ([see example](slug:events_datepicker)).
   */
  valueChange = new EventEmitter();
  /**
   * Fires each time the user focuses the input element
   * ([see example](slug:events_datepicker)).
   */
  onFocus = new EventEmitter();
  /**
   * Fires each time the input element gets blurred
   * ([see example](slug:events_datepicker)).
   */
  onBlur = new EventEmitter();
  /**
   * Fires each time the popup is about to open
   * ([see example](slug:events_datepicker)).
   * This event is preventable. If you cancel the event, the popup will remain closed.
   */
  open = new EventEmitter();
  /**
   * Fires each time the popup is about to close
   * ([see example](slug:events_datepicker)).
   * This event is preventable. If you cancel the event, the popup will remain open.
   */
  close = new EventEmitter();
  /**
   * @hidden
   */
  escape = new EventEmitter();
  /**
   * @hidden
   */
  wrapperClasses = true;
  /**
   * @hidden
   */
  get disabledClass() {
    return this.disabled;
  }
  get popupUID() {
    return this.calendar?.popupId;
  }
  popupRef;
  get isActive() {
    return this._active;
  }
  set isActive(value) {
    this._active = value;
    if (!this.wrapper) {
      return;
    }
    const element = this.wrapper.nativeElement;
    if (value) {
      this.renderer.addClass(element, "k-focus");
    } else {
      this.renderer.removeClass(element, "k-focus");
    }
  }
  get show() {
    return this._show;
  }
  set show(show) {
    if (show && (this.disabled || this.readonly)) {
      return;
    }
    const skipZone = !show && (!this._show || !hasObservers(this.close) && !hasObservers(this.open));
    if (!skipZone) {
      this.zone.run(() => {
        const event = new PreventableEvent();
        if (!this._show && show) {
          this.open.emit(event);
        } else if (this._show && !show) {
          this.close.emit(event);
        }
        if (event.isDefaultPrevented()) {
          return;
        }
        this.toggleCalendar(show);
      });
    } else {
      this.toggleCalendar(show);
    }
  }
  /**
   * @hidden
   */
  checkIcon = checkIcon;
  /**
   * @hidden
   */
  windowSize;
  /**
   * @hidden
   */
  get isControlRequired() {
    return isControlRequired(this.control);
  }
  _popupSettings = {
    animate: true
  };
  _show = false;
  _value = null;
  _active = false;
  _disabledDates;
  onControlChange = noop$2;
  onControlTouched = noop$2;
  onValidatorChange = noop$2;
  minValidateFn = noop$2;
  maxValidateFn = noop$2;
  disabledDatesValidateFn = noop$2;
  incompleteValidator = noop$2;
  resolvedPromise = Promise.resolve(null);
  subscription;
  pickerSubscriptions;
  localizationChangeSubscription;
  windowBlurSubscription;
  ariaActiveDescendantSubscription;
  control;
  domEvents = [];
  _size = DEFAULT_SIZE;
  _rounded = DEFAULT_ROUNDED;
  _fillMode = DEFAULT_FILL_MODE;
  constructor(zone, localization, cdr, popupService, wrapper, renderer, injector, pickerService, disabledDatesService, adaptiveService) {
    super();
    this.zone = zone;
    this.localization = localization;
    this.cdr = cdr;
    this.popupService = popupService;
    this.wrapper = wrapper;
    this.renderer = renderer;
    this.injector = injector;
    this.pickerService = pickerService;
    this.disabledDatesService = disabledDatesService;
    this.adaptiveService = adaptiveService;
    A(packageMetadata);
    this.pickerSubscriptions = this.pickerService.onFocus.subscribe(this.handleFocus.bind(this));
    this.pickerSubscriptions.add(this.pickerService.onBlur.subscribe(this.handleBlur.bind(this)));
    this.pickerSubscriptions.add(this.pickerService.sameDateSelected.subscribe(this.handleSameSelection.bind(this)));
    this.pickerSubscriptions.add(this.pickerService.dateCompletenessChange.subscribe(this.handleDateCompletenessChange.bind(this)));
  }
  /**
   * @hidden
   * Used by the TextBoxContainer to determine if the component is empty.
   */
  isEmpty() {
    return !this.value && this.dateInput.isEmpty();
  }
  /**
   * @hidden
   */
  ngOnInit() {
    this.localizationChangeSubscription = this.localization.changes.subscribe(() => this.cdr.markForCheck());
    this.control = this.injector.get(NgControl, null);
    if (this.wrapper) {
      this.renderer.removeAttribute(this.wrapper.nativeElement, "tabindex");
      this.zone.runOutsideAngular(() => {
        this.bindEvents();
      });
    }
    this.focusableId = this.dateInput?.focusableId;
    this.minValidateFn = this.rangeValidation ? minValidator(this.min) : noop$2;
    this.maxValidateFn = this.rangeValidation ? maxValidator(this.max) : noop$2;
  }
  ngAfterViewInit() {
    this.setComponentClasses();
    this.windowSize = this.adaptiveService.size;
  }
  /**
   * @hidden
   */
  ngOnChanges(changes) {
    this.verifySettings();
    if (changes.min || changes.max || changes.rangeValidation || changes.disabledDatesValidation || changes.disabledDates || changes.incompleteDateValidation) {
      this.minValidateFn = this.rangeValidation ? minValidator(this.min) : noop$2;
      this.maxValidateFn = this.rangeValidation ? maxValidator(this.max) : noop$2;
      this.disabledDatesValidateFn = this.disabledDatesValidation ? disabledDatesValidator(this.disabledDatesService.isDateDisabled) : noop$2;
      this.incompleteValidator = this.incompleteDateValidation ? incompleteDateValidator() : noop$2;
      this.onValidatorChange();
    }
    if (!this.focusableId || changes.focusableId) {
      this.focusableId = this.dateInput?.focusableId;
    }
  }
  /**
   * @hidden
   */
  ngOnDestroy() {
    if (this.isAdaptive && this.isOpen) {
      this.toggleActionSheet(false);
    }
    this.isActive = false;
    this.show = false;
    if (this.localizationChangeSubscription) {
      this.localizationChangeSubscription.unsubscribe();
    }
    if (this.windowBlurSubscription) {
      this.windowBlurSubscription.unsubscribe();
    }
    this.domEvents.forEach((unbindCallback) => unbindCallback());
    this.pickerSubscriptions.unsubscribe();
  }
  /**
   * Indicates whether the component is currently open. That is when the popup or actionSheet is open.
   */
  get isOpen() {
    return this.show;
  }
  /**
   * @hidden
   */
  writeValue(value) {
    this.verifyValue(value);
    this.value = cloneDate(value);
    this.cdr.markForCheck();
    if (!value && this.dateInput) {
      this.dateInput.placeholder = this.placeholder;
      this.dateInput.writeValue(value);
    }
  }
  /**
   * @hidden
   */
  registerOnChange(fn) {
    this.onControlChange = fn;
  }
  /**
   * @hidden
   */
  registerOnTouched(fn) {
    this.onControlTouched = fn;
  }
  /**
   * @hidden
   */
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
    this.cdr.markForCheck();
  }
  /**
   * @hidden
   */
  validate(control) {
    return this.minValidateFn(control) || this.maxValidateFn(control) || this.disabledDatesValidateFn(control) || this.incompleteValidator(control, this.dateInput && this.dateInput.isDateIncomplete);
  }
  /**
   * @hidden
   */
  registerOnValidatorChange(fn) {
    this.onValidatorChange = fn;
  }
  /**
   * @hidden
   */
  handleActionSheetCollapse() {
    this.cdr.markForCheck();
  }
  /**
   * @hidden
   */
  handleActionSheetClick(e) {
    e.preventDefault();
  }
  /**
   * Focuses the DatePicker component.
   */
  focus() {
    this.dateInput.focus();
  }
  /**
   * Blurs the DatePicker component.
   */
  blur() {
    (this.calendar || this.dateInput)["blur"]();
  }
  /**
   * Toggles the visibility of the popup or actionSheet.
   * If you use the `toggle` method to show or hide the popup or actionSheet,
   * the `open` and `close` events do not fire.
   *
   * @param show The state of the popup.
   */
  toggle(show) {
    if (this.disabled || this.readonly) {
      return;
    }
    this.resolvedPromise.then(() => {
      this.toggleCalendar(show === void 0 ? !this.show : show);
    });
  }
  /**
   * @hidden
   */
  handleIconClick(event) {
    if (this.disabled || this.readonly) {
      return;
    }
    event.preventDefault();
    this.focusInput();
    this.handleFocus();
    this.show = !this.show;
    this.cdr.markForCheck();
  }
  /**
   * @hidden
   */
  handleDateInputClick() {
    this.windowSize = this.adaptiveService.size;
    if (this.isAdaptive) {
      this.show = true;
    } else if (this.isOpen) {
      this.show = false;
    }
  }
  /**
   * @hidden
   */
  handleMousedown(args) {
    args.preventDefault();
  }
  /**
   * @hidden
   */
  handleChange(value, isInputValueChange) {
    this.value = value;
    if (this.show) {
      if (!isInputValueChange) {
        this.focusInput();
      }
      this.show = false;
    }
    this.onControlChange(cloneDate(value));
    this.valueChange.emit(cloneDate(value));
  }
  /**
   * @hidden
   */
  handleInputChange(value) {
    this.handleChange(this.dateInput.formatSections["time"] ? value : this.mergeTime(value), true);
  }
  /**
   * @hidden
   */
  get popupClasses() {
    const popupClasses = ["k-datepicker-popup", "k-calendar-container"];
    if (!this.popupSettings.popupClass) {
      return popupClasses;
    }
    const customClasses = parseCSSClassNames(this.popupSettings.popupClass);
    if (customClasses?.length) {
      popupClasses.push(...customClasses);
    }
    return popupClasses;
  }
  /**
   * @hidden
   */
  get appendTo() {
    const {
      appendTo
    } = this.popupSettings;
    if (!appendTo || appendTo === "root") {
      return void 0;
    }
    return appendTo === "component" ? this.container : appendTo;
  }
  get dateInput() {
    return this.pickerService.input;
  }
  get calendar() {
    return this.pickerService.calendar;
  }
  /**
   * @hidden
   */
  get isAdaptiveModeEnabled() {
    return this.adaptiveMode === "auto";
  }
  /**
   * @hidden
   */
  get isAdaptive() {
    return this.isAdaptiveModeEnabled && this.windowSize !== "large";
  }
  /**
   * @hidden
   */
  onResize() {
    const currentWindowSize = this.adaptiveService.size;
    if (!this.isOpen || this.windowSize === currentWindowSize) {
      return;
    }
    if (this.actionSheet.expanded) {
      this.toggleActionSheet(false);
    } else {
      this.togglePopup(false);
    }
    this.windowSize = currentWindowSize;
  }
  /**
   * @hidden
   */
  mergeTime(value) {
    return this.value && value ? setTime(value, this.value) : value;
  }
  /**
   * @hidden
   */
  handleKeydown(e) {
    const {
      altKey,
      shiftKey,
      target
    } = e;
    const code = normalizeKeys(e);
    if (code === Keys.Escape) {
      this.dateInput.focus();
      this.show = false;
      hasObservers(this.escape) && this.escape.emit();
    }
    if (altKey) {
      if (code === Keys.ArrowDown && !this.show) {
        this.show = true;
      }
      if (code === Keys.ArrowUp) {
        this.dateInput.focus();
        this.show = false;
      }
    }
    if (code === Keys.Tab && this.show && this.calendar.isActive && isTabExitingCalendar(this.calendarType, target, shiftKey)) {
      this.dateInput.focus();
      this.show = false;
    }
  }
  toggleCalendar(show) {
    const previousWindowSize = this.windowSize;
    this.windowSize = this.adaptiveService.size;
    if (previousWindowSize !== this.windowSize && !show) {
      if (previousWindowSize !== "large") {
        this.toggleActionSheet(show);
      } else {
        this.togglePopup(show);
      }
    } else {
      if (this.isAdaptive) {
        this.toggleActionSheet(show);
      } else {
        this.togglePopup(show);
      }
    }
    this.toggleFocus();
  }
  togglePopup(show) {
    if (show === this._show) {
      return;
    }
    this._show = show;
    if (show) {
      const direction = this.localization.rtl ? "right" : "left";
      const appendToComponent = typeof this.popupSettings.appendTo === "string" && this.popupSettings.appendTo === "component";
      this.popupRef = this.popupService.open({
        anchor: this.wrapper,
        anchorAlign: {
          vertical: "bottom",
          horizontal: direction
        },
        animate: this.popupSettings.animate,
        appendTo: this.appendTo,
        content: this.popupTemplate,
        popupAlign: {
          vertical: "top",
          horizontal: direction
        },
        popupClass: this.popupClasses,
        positionMode: appendToComponent ? "fixed" : "absolute"
      });
      this.setAriaActiveDescendant();
      this.popupRef.popupElement.setAttribute("id", this.popupUID);
      this.renderer.setAttribute(this.dateInput?.inputElement, attributeNames.ariaControls, this.popupUID);
      this.subscription = this.popupRef.popupAnchorViewportLeave.subscribe(() => this.show = false);
    } else {
      this.popupRef.close();
      this.popupRef = null;
      this.subscription.unsubscribe();
      this.ariaActiveDescendantSubscription.unsubscribe();
      if (this.dateInput) {
        this.renderer.removeAttribute(this.dateInput.inputElement, attributeNames.ariaControls);
        this.renderer.removeAttribute(this.dateInput.inputElement, attributeNames.ariaActiveDescendant);
      }
      this.cdr.detectChanges();
    }
  }
  toggleActionSheet(show) {
    if (show === this._show) {
      return;
    }
    if (show && !this.isOpen) {
      this.actionSheet.toggle();
      this.setAriaActiveDescendant();
      this.actionSheet.element.nativeElement.setAttribute("id", this.popupUID);
      this.renderer.setAttribute(this.dateInput?.inputElement, attributeNames.ariaControls, this.popupUID);
    } else if (!show && this.isOpen) {
      this.actionSheet.toggle();
      this.ariaActiveDescendantSubscription.unsubscribe();
      if (this.dateInput) {
        this.renderer.removeAttribute(this.dateInput.inputElement, attributeNames.ariaActiveDescendant);
        this.renderer.removeAttribute(this.dateInput.inputElement, attributeNames.ariaControls);
        this.dateInput.focus();
      }
    }
    this._show = show;
  }
  setAriaActiveDescendant() {
    const focusedCellChangeEvent = this.calendar.type === "infinite" ? this.calendar.monthView.focusedCellChange : this.calendar.multiViewCalendar.viewList.focusedCellChange;
    this.ariaActiveDescendantSubscription = focusedCellChangeEvent.subscribe((id) => this.renderer.setAttribute(this.dateInput?.inputElement, attributeNames.ariaActiveDescendant, id));
  }
  focusInput() {
    if (touchEnabled) {
      return;
    }
    this.dateInput.focus();
  }
  toggleFocus() {
    if (!this.isActive) {
      return;
    }
    if (this.show) {
      if (!this.calendar) {
        this.cdr.detectChanges();
      }
      if (this.calendar) {
        this.calendar.focus();
      }
    } else if (!touchEnabled) {
      this.dateInput.focus();
    } else if (!this.dateInput.isActive) {
      this.handleBlur();
    }
  }
  verifySettings() {
    if (!isDevMode()) {
      return;
    }
    if (!isValidRange(this.min, this.max)) {
      throw new Error(`The max value should be bigger than the min. See ${MIN_DOC_LINK} and ${MAX_DOC_LINK}.`);
    }
  }
  verifyValue(value) {
    if (!isDevMode()) {
      return;
    }
    if (value && !(value instanceof Date)) {
      throw new Error(`The 'value' should be a valid JavaScript Date instance or null. Check ${VALUE_DOC_LINK$2} for possible resolution.`);
    }
  }
  bindEvents() {
    const element = this.wrapper.nativeElement;
    this.domEvents.push(this.renderer.listen(element, "keydown", this.handleKeydown.bind(this)));
    if (isWindowAvailable()) {
      this.windowBlurSubscription = fromEvent(window, "blur").subscribe(this.handleWindowBlur.bind(this));
    }
  }
  handleFocus() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    if (hasObservers(this.onFocus)) {
      this.zone.run(() => {
        this.onFocus.emit();
      });
    }
  }
  handleWindowBlur() {
    if (!this.isOpen || this.actionSheet.expanded) {
      return;
    }
    this.show = false;
  }
  handleBlur(args) {
    const currentTarget = args && currentFocusTarget(args);
    const target = args && args.target;
    const isInsideActionSheet = this.actionSheet && (this.actionSheet.element.nativeElement.contains(target) || this.actionSheet.element.nativeElement.contains(currentTarget));
    if (currentTarget && (this.dateInput.containsElement(currentTarget) || this.calendar && this.calendar.containsElement(currentTarget) || isInsideActionSheet)) {
      return;
    }
    if (hasObservers(this.onBlur) || this.show && hasObservers(this.close) || requiresZoneOnBlur(this.control)) {
      this.zone.run(() => {
        this.blurComponent();
        this.cdr.markForCheck();
      });
    } else {
      this.blurComponent();
    }
  }
  blurComponent() {
    this.isActive = false;
    this.show = false;
    this.cdr.detectChanges();
    this.onControlTouched();
    this.onBlur.emit();
  }
  handleSameSelection() {
    if (this.show) {
      this.focusInput();
      this.show = false;
    }
  }
  handleDateCompletenessChange() {
    this.cdr.markForCheck();
    this.zone.run(() => this.onValidatorChange());
  }
  setComponentClasses() {
    if (this.size) {
      this.renderer.addClass(this.wrapper.nativeElement, getSizeClass("input", this.size));
      this.renderer.addClass(this.toggleButton.nativeElement, getSizeClass("button", this.size));
    }
    if (this.rounded) {
      this.renderer.addClass(this.wrapper.nativeElement, getRoundedClass(this.rounded));
    }
    if (this.fillMode) {
      this.renderer.addClass(this.wrapper.nativeElement, getFillModeClass("input", this.fillMode));
      this.renderer.addClass(this.toggleButton.nativeElement, getFillModeClass("button", this.fillMode));
      this.renderer.addClass(this.toggleButton.nativeElement, `k-button-${this.fillMode}-base`);
    }
  }
  static ɵfac = function DatePickerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DatePickerComponent)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(PopupService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(PickerService), ɵɵdirectiveInject(DisabledDatesService), ɵɵdirectiveInject(AdaptiveService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _DatePickerComponent,
    selectors: [["kendo-datepicker"]],
    contentQueries: function DatePickerComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, CellTemplateDirective, 5);
        ɵɵcontentQuery(dirIndex, MonthCellTemplateDirective, 5);
        ɵɵcontentQuery(dirIndex, YearCellTemplateDirective, 5);
        ɵɵcontentQuery(dirIndex, DecadeCellTemplateDirective, 5);
        ɵɵcontentQuery(dirIndex, CenturyCellTemplateDirective, 5);
        ɵɵcontentQuery(dirIndex, WeekNumberCellTemplateDirective, 5);
        ɵɵcontentQuery(dirIndex, HeaderTitleTemplateDirective, 5);
        ɵɵcontentQuery(dirIndex, HeaderTemplateDirective, 5);
        ɵɵcontentQuery(dirIndex, FooterTemplateDirective, 5);
        ɵɵcontentQuery(dirIndex, NavigationItemTemplateDirective, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.cellTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.monthCellTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.yearCellTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.decadeCellTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.centuryCellTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.weekNumberTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.headerTitleTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.headerTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.footerTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.navigationItemTemplate = _t.first);
      }
    },
    viewQuery: function DatePickerComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c14, 7, ViewContainerRef);
        ɵɵviewQuery(_c15, 7);
        ɵɵviewQuery(_c16, 7);
        ɵɵviewQuery(_c17, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.container = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.popupTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.toggleButton = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.actionSheet = _t.first);
      }
    },
    hostVars: 8,
    hostBindings: function DatePickerComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("k-readonly", ctx.readonly)("k-datepicker", ctx.wrapperClasses)("k-input", ctx.wrapperClasses)("k-disabled", ctx.disabledClass);
      }
    },
    inputs: {
      focusableId: "focusableId",
      cellTemplateRef: [0, "cellTemplate", "cellTemplateRef"],
      clearButton: "clearButton",
      inputAttributes: "inputAttributes",
      monthCellTemplateRef: [0, "monthCellTemplate", "monthCellTemplateRef"],
      yearCellTemplateRef: [0, "yearCellTemplate", "yearCellTemplateRef"],
      decadeCellTemplateRef: [0, "decadeCellTemplate", "decadeCellTemplateRef"],
      centuryCellTemplateRef: [0, "centuryCellTemplate", "centuryCellTemplateRef"],
      weekNumberTemplateRef: [0, "weekNumberTemplate", "weekNumberTemplateRef"],
      headerTitleTemplateRef: [0, "headerTitleTemplate", "headerTitleTemplateRef"],
      headerTemplateRef: [0, "headerTemplate", "headerTemplateRef"],
      footerTemplateRef: [0, "footerTemplate", "footerTemplateRef"],
      footer: "footer",
      navigationItemTemplateRef: [0, "navigationItemTemplate", "navigationItemTemplateRef"],
      weekDaysFormat: "weekDaysFormat",
      showOtherMonthDays: "showOtherMonthDays",
      activeView: "activeView",
      bottomView: "bottomView",
      topView: "topView",
      calendarType: "calendarType",
      animateCalendarNavigation: "animateCalendarNavigation",
      disabled: "disabled",
      readonly: "readonly",
      readOnlyInput: "readOnlyInput",
      popupSettings: "popupSettings",
      navigation: "navigation",
      min: "min",
      max: "max",
      incompleteDateValidation: "incompleteDateValidation",
      autoCorrectParts: "autoCorrectParts",
      autoSwitchParts: "autoSwitchParts",
      autoSwitchKeys: "autoSwitchKeys",
      enableMouseWheel: "enableMouseWheel",
      allowCaretMode: "allowCaretMode",
      autoFill: "autoFill",
      focusedDate: "focusedDate",
      value: "value",
      format: "format",
      twoDigitYearMax: "twoDigitYearMax",
      formatPlaceholder: "formatPlaceholder",
      placeholder: "placeholder",
      tabindex: "tabindex",
      tabIndex: "tabIndex",
      disabledDates: "disabledDates",
      adaptiveTitle: "adaptiveTitle",
      adaptiveSubtitle: "adaptiveSubtitle",
      rangeValidation: "rangeValidation",
      disabledDatesValidation: "disabledDatesValidation",
      weekNumber: "weekNumber",
      size: "size",
      rounded: "rounded",
      fillMode: "fillMode",
      adaptiveMode: "adaptiveMode"
    },
    outputs: {
      valueChange: "valueChange",
      onFocus: "focus",
      onBlur: "blur",
      open: "open",
      close: "close",
      escape: "escape"
    },
    exportAs: ["kendo-datepicker"],
    standalone: true,
    features: [ɵɵProvidersFeature([{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _DatePickerComponent),
      multi: true
    }, {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => _DatePickerComponent),
      multi: true
    }, {
      provide: KendoInput,
      useExisting: forwardRef(() => _DatePickerComponent)
    }, {
      provide: MultiTabStop,
      useExisting: forwardRef(() => _DatePickerComponent)
    }, LocalizationService, PickerService, DisabledDatesService, {
      provide: L10N_PREFIX,
      useValue: "kendo.datepicker"
    }]), ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    decls: 17,
    vars: 49,
    consts: () => {
      let i18n_11;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_11 = goog.getMsg("Today");
        i18n_11 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_11;
      } else {
        i18n_11 = $localize`:kendo.datepicker.today|The label for the today button in the calendar header:Today`;
      }
      let i18n_12;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_12 = goog.getMsg("Toggle calendar");
        i18n_12 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_12;
      } else {
        i18n_12 = $localize`:kendo.datepicker.toggle|The title of the toggle button in the datepicker component:Toggle calendar`;
      }
      let i18n_13;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_13 = goog.getMsg("Navigate to previous view");
        i18n_13 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_13;
      } else {
        i18n_13 = $localize`:kendo.datepicker.prevButtonTitle|The title of the previous button in the Classic calendar:Navigate to previous view`;
      }
      let i18n_14;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_14 = goog.getMsg("Navigate to next view");
        i18n_14 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_14;
      } else {
        i18n_14 = $localize`:kendo.datepicker.nextButtonTitle|The title of the next button in the Classic calendar:Navigate to next view`;
      }
      let i18n_15;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_15 = goog.getMsg("Navigate to parent view");
        i18n_15 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_15;
      } else {
        i18n_15 = $localize`:kendo.datepicker.parentViewButtonTitle|The title of the parent view button in the calendar header:Navigate to parent view`;
      }
      let i18n_16;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_16 = goog.getMsg("clear");
        i18n_16 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_16;
      } else {
        i18n_16 = $localize`:kendo.datepicker.clearTitle|The title of the clear button:clear`;
      }
      let i18n_17;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_17 = goog.getMsg("Close");
        i18n_17 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_17;
      } else {
        i18n_17 = $localize`:kendo.datepicker.adaptiveCloseButtonTitle|The title of the Close button of the ActionSheet that is rendered instead of the Popup when using small screen devices in adaptive mode:Close`;
      }
      return [["input", ""], ["toggleButton", ""], ["container", ""], ["popupTemplate", ""], ["actionSheet", ""], ["calendarTemplate", ""], ["calendar", ""], ["kendoDatePickerLocalizedMessages", "", "today", i18n_11, "toggle", i18n_12, "prevButtonTitle", i18n_13, "nextButtonTitle", i18n_14, "parentViewButtonTitle", i18n_15, "clearTitle", i18n_16, "adaptiveCloseButtonTitle", i18n_17], ["pickerType", "datepicker", "hasPopup", "grid", "fillMode", "none", "rounded", "none", "size", "none", 3, "valueChange", "click", "role", "isPopupOpen", "clearButton", "disabled", "readonly", "ariaReadOnly", "tabindex", "isRequired", "title", "focusableId", "format", "twoDigitYearMax", "formatPlaceholder", "placeholder", "min", "max", "incompleteDateValidation", "autoCorrectParts", "autoSwitchParts", "autoSwitchKeys", "enableMouseWheel", "allowCaretMode", "autoFill", "inputAttributes", "value"], [3, "clearTitle"], ["type", "button", 1, "k-input-button", "k-button", "k-icon-button", 3, "tabindex", "kendoEventsOutsideAngular", "scope"], ["name", "calendar", "innerCssClass", "k-button-icon", 3, "svgIcon"], [3, "overlayClick", "collapse", "kendoEventsOutsideAngular", "scope", "titleId", "cssClass", "cssStyle"], ["kendoActionSheetTemplate", ""], [4, "ngTemplateOutlet"], [3, "resize"], [1, "k-actionsheet-titlebar"], [1, "k-actionsheet-titlebar-group"], [1, "k-actionsheet-title"], [1, "k-text-center"], [1, "k-actionsheet-subtitle", "k-text-center"], [1, "k-actionsheet-actions"], ["kendoButton", "", "type", "button", "icon", "check", "themeColor", "primary", "fillMode", "flat", "size", "large", "innerCssClass", "k-button-icon", 3, "click", "svgIcon", "tabIndex"], [1, "k-actionsheet-content"], [3, "closePopup", "valueChange", "type", "size", "min", "max", "weekDaysFormat", "navigation", "animateNavigation", "activeView", "bottomView", "showOtherMonthDays", "topView", "weekNumber", "cellTemplate", "monthCellTemplate", "yearCellTemplate", "decadeCellTemplate", "centuryCellTemplate", "weekNumberTemplate", "headerTitleTemplate", "headerTemplate", "footerTemplate", "footer", "navigationItemTemplate", "focusedDate", "value", "kendoEventsOutsideAngular", "scope", "disabledDates"], [3, "today", "prevButtonTitle", "nextButtonTitle", "parentViewButtonTitle"]];
    },
    template: function DatePickerComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵelementContainer(0, 7);
        ɵɵelementStart(1, "kendo-dateinput", 8, 0);
        ɵɵlistener("valueChange", function DatePickerComponent_Template_kendo_dateinput_valueChange_1_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.handleInputChange($event));
        })("click", function DatePickerComponent_Template_kendo_dateinput_click_1_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.handleDateInputClick());
        });
        ɵɵelement(3, "kendo-dateinput-messages", 9);
        ɵɵelementEnd();
        ɵɵelementStart(4, "button", 10, 1);
        ɵɵelement(6, "kendo-icon-wrapper", 11);
        ɵɵelementEnd();
        ɵɵelementContainer(7, null, 2);
        ɵɵtemplate(9, DatePickerComponent_ng_template_9_Template, 1, 1, "ng-template", null, 3, ɵɵtemplateRefExtractor)(11, DatePickerComponent_Conditional_11_Template, 1, 0, "kendo-resize-sensor");
        ɵɵelementStart(12, "kendo-actionsheet", 12, 4);
        ɵɵlistener("overlayClick", function DatePickerComponent_Template_kendo_actionsheet_overlayClick_12_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.show = false);
        })("collapse", function DatePickerComponent_Template_kendo_actionsheet_collapse_12_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.handleActionSheetCollapse());
        });
        ɵɵtemplate(14, DatePickerComponent_ng_template_14_Template, 9, 6, "ng-template", 13);
        ɵɵelementEnd();
        ɵɵtemplate(15, DatePickerComponent_ng_template_15_Template, 3, 34, "ng-template", null, 5, ɵɵtemplateRefExtractor);
      }
      if (rf & 2) {
        ɵɵadvance();
        ɵɵproperty("role", "combobox")("isPopupOpen", ctx.show)("clearButton", ctx.clearButton)("disabled", ctx.disabled)("readonly", ctx.readonly || ctx.readOnlyInput)("ariaReadOnly", ctx.readonly)("tabindex", ctx.tabindex)("isRequired", ctx.isControlRequired)("title", ctx.adaptiveTitle)("focusableId", ctx.focusableId)("format", ctx.format)("twoDigitYearMax", ctx.twoDigitYearMax)("formatPlaceholder", ctx.formatPlaceholder)("placeholder", ctx.placeholder)("min", ctx.min)("max", ctx.max)("incompleteDateValidation", ctx.incompleteDateValidation)("autoCorrectParts", ctx.autoCorrectParts)("autoSwitchParts", ctx.autoSwitchParts)("autoSwitchKeys", ctx.autoSwitchKeys)("enableMouseWheel", ctx.enableMouseWheel)("allowCaretMode", ctx.allowCaretMode)("autoFill", ctx.autoFill)("inputAttributes", ctx.inputAttributes)("value", ctx.value);
        ɵɵadvance(2);
        ɵɵproperty("clearTitle", ctx.localization.get("clearTitle"));
        ɵɵadvance();
        ɵɵproperty("tabindex", -1)("kendoEventsOutsideAngular", ɵɵpureFunction2(39, _c18, ctx.handleIconClick, ctx.handleMousedown))("scope", ctx);
        ɵɵattribute("title", ctx.localization.get("toggle"))("aria-label", ctx.localization.get("toggle"))("disabled", ctx.disabled ? "" : null);
        ɵɵadvance(2);
        ɵɵproperty("svgIcon", ctx.calendarIcon);
        ɵɵadvance(5);
        ɵɵconditional(ctx.isAdaptiveModeEnabled ? 11 : -1);
        ɵɵadvance();
        ɵɵproperty("kendoEventsOutsideAngular", ɵɵpureFunction1(42, _c5, ctx.handleActionSheetClick))("scope", ctx)("titleId", ctx.calendar == null ? null : ctx.calendar.headerId)("cssClass", ɵɵpureFunction2(44, _c19, ctx.windowSize === "small", ctx.windowSize === "medium"))("cssStyle", ɵɵpureFunction1(47, _c20, ctx.windowSize === "small" ? "100vh" : "60vh"));
      }
    },
    dependencies: [DatePickerLocalizedMessagesDirective, DateInputComponent, DateInputCustomMessagesComponent, EventsOutsideAngularDirective, IconWrapperComponent, NgTemplateOutlet, ResizeSensorComponent, ActionSheetComponent, ActionSheetTemplateDirective, ButtonComponent, CalendarComponent, CalendarCustomMessagesComponent],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DatePickerComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      exportAs: "kendo-datepicker",
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => DatePickerComponent),
        multi: true
      }, {
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => DatePickerComponent),
        multi: true
      }, {
        provide: KendoInput,
        useExisting: forwardRef(() => DatePickerComponent)
      }, {
        provide: MultiTabStop,
        useExisting: forwardRef(() => DatePickerComponent)
      }, LocalizationService, PickerService, DisabledDatesService, {
        provide: L10N_PREFIX,
        useValue: "kendo.datepicker"
      }],
      selector: "kendo-datepicker",
      template: `
        <ng-container kendoDatePickerLocalizedMessages
          i18n-today="kendo.datepicker.today|The label for the today button in the calendar header"
          today="Today"
        
          i18n-toggle="kendo.datepicker.toggle|The title of the toggle button in the datepicker component"
          toggle="Toggle calendar"
        
          i18n-prevButtonTitle="kendo.datepicker.prevButtonTitle|The title of the previous button in the Classic calendar"
          prevButtonTitle="Navigate to previous view"
        
          i18n-nextButtonTitle="kendo.datepicker.nextButtonTitle|The title of the next button in the Classic calendar"
          nextButtonTitle="Navigate to next view"
        
          i18n-parentViewButtonTitle="kendo.datepicker.parentViewButtonTitle|The title of the parent view button in the calendar header"
          parentViewButtonTitle="Navigate to parent view"
        
          i18n-clearTitle="kendo.datepicker.clearTitle|The title of the clear button"
          clearTitle="clear"
        
          i18n-adaptiveCloseButtonTitle="kendo.datepicker.adaptiveCloseButtonTitle|The title of the Close button of the ActionSheet that is rendered instead of the Popup when using small screen devices in adaptive mode"
          adaptiveCloseButtonTitle="Close"
          >
        </ng-container>
        <kendo-dateinput
          #input
          [role]="'combobox'"
          pickerType="datepicker"
          hasPopup="grid"
          [isPopupOpen]="show"
          [clearButton]="clearButton"
          [disabled]="disabled"
          [readonly]="readonly || readOnlyInput"
          [ariaReadOnly]="readonly"
          [tabindex]="tabindex"
          [isRequired]="isControlRequired"
          [title]="adaptiveTitle"
          [focusableId]="focusableId"
          [format]="format"
          [twoDigitYearMax]="twoDigitYearMax"
          [formatPlaceholder]="formatPlaceholder"
          [placeholder]="placeholder"
          [min]="min"
          [max]="max"
          [incompleteDateValidation]="incompleteDateValidation"
          [autoCorrectParts]="autoCorrectParts"
          [autoSwitchParts]="autoSwitchParts"
          [autoSwitchKeys]="autoSwitchKeys"
          [enableMouseWheel]="enableMouseWheel"
          [allowCaretMode]="allowCaretMode"
          [autoFill]="autoFill"
          fillMode="none"
          rounded="none"
          size="none"
          [inputAttributes]="inputAttributes"
          [value]="value"
          (valueChange)="handleInputChange($event)"
          (click)="handleDateInputClick()"
          >
          <kendo-dateinput-messages
            [clearTitle]="localization.get('clearTitle')"
            >
          </kendo-dateinput-messages>
        </kendo-dateinput>
        <button
          #toggleButton
          type="button"
          class="k-input-button k-button k-icon-button"
          [tabindex]="-1"
          [attr.title]="localization.get('toggle')"
          [attr.aria-label]="localization.get('toggle')"
          [attr.disabled]="disabled ? '' : null"
            [kendoEventsOutsideAngular]="{
                click: handleIconClick,
                mousedown: handleMousedown
            }"
          [scope]="this"
          >
          <kendo-icon-wrapper
            name="calendar"
            [svgIcon]="calendarIcon"
            innerCssClass="k-button-icon"
            >
          </kendo-icon-wrapper>
        </button>
        
        <ng-container #container></ng-container>
        
        <ng-template #popupTemplate>
          <ng-container *ngTemplateOutlet="calendarTemplate"></ng-container>
        </ng-template>
        
        @if (isAdaptiveModeEnabled) {
          <kendo-resize-sensor (resize)="onResize()"></kendo-resize-sensor>
        }
        <kendo-actionsheet
          #actionSheet
          (overlayClick)="show=false"
            [kendoEventsOutsideAngular]="{
                click: handleActionSheetClick
            }"
          [scope]="this"
          (collapse)="handleActionSheetCollapse()"
          [titleId]="calendar?.headerId"
            [cssClass]="{
                'k-adaptive-actionsheet': true,
                'k-actionsheet-fullscreen': windowSize === 'small',
                'k-actionsheet-bottom': windowSize === 'medium'
            }"
            [cssStyle]="{
                height: windowSize === 'small' ? '100vh' : '60vh'
            }"
          >
          <ng-template kendoActionSheetTemplate>
            <div class="k-actionsheet-titlebar">
              <div class="k-actionsheet-titlebar-group">
                <div class="k-actionsheet-title">
                  @if (adaptiveTitle) {
                    <div class="k-text-center">{{ adaptiveTitle }}</div>
                  }
                  @if (adaptiveSubtitle) {
                    <div class="k-actionsheet-subtitle k-text-center">{{ adaptiveSubtitle }}</div>
                  }
                </div>
                <div class="k-actionsheet-actions">
                  <button
                    kendoButton
                    type="button"
                    icon="check"
                    themeColor="primary"
                    [attr.title]="localization.get('adaptiveCloseButtonTitle')"
                    [svgIcon]="checkIcon"
                    fillMode="flat"
                    [tabIndex]="-1"
                    size="large"
                    innerCssClass="k-button-icon"
                    (click)="show = false">
                  </button>
                </div>
              </div>
            </div>
            <div class="k-actionsheet-content">
              <ng-container *ngTemplateOutlet="calendarTemplate"></ng-container>
            </div>
          </ng-template>
        </kendo-actionsheet>
        
        <ng-template #calendarTemplate>
          <kendo-calendar
            #calendar
            [type]="calendarType"
            [size]="isAdaptive ? 'large' : size"
            [min]="min"
            [max]="max"
            [weekDaysFormat]="weekDaysFormat"
            [navigation]="navigation"
            [animateNavigation]="animateCalendarNavigation"
            [activeView]="activeView"
            [bottomView]="bottomView"
            [showOtherMonthDays]="showOtherMonthDays"
            [topView]="topView"
            [weekNumber]="weekNumber"
            [cellTemplate]="cellTemplate"
            [monthCellTemplate]="monthCellTemplate"
            [yearCellTemplate]="yearCellTemplate"
            [decadeCellTemplate]="decadeCellTemplate"
            [centuryCellTemplate]="centuryCellTemplate"
            [weekNumberTemplate]="weekNumberTemplate"
            [headerTitleTemplate]="headerTitleTemplate"
            [headerTemplate]="headerTemplate"
            [footerTemplate]="footerTemplate"
            [footer]="footer"
            [navigationItemTemplate]="navigationItemTemplate"
            [focusedDate]="focusedDate"
            [value]="value"
            (closePopup)="show = false;"
            (valueChange)="handleChange(mergeTime($event))"
                [kendoEventsOutsideAngular]="{
                    keydown: handleKeydown
                }"
            [scope]="this"
            [disabledDates]="disabledDates"
            >
            <kendo-calendar-messages
              [today]="localization.get('today')"
              [prevButtonTitle]="localization.get('prevButtonTitle')"
              [nextButtonTitle]="localization.get('nextButtonTitle')"
              [parentViewButtonTitle]="localization.get('parentViewButtonTitle')"
              >
            </kendo-calendar-messages>
          </kendo-calendar>
        </ng-template>
        `,
      standalone: true,
      imports: [DatePickerLocalizedMessagesDirective, DateInputComponent, DateInputCustomMessagesComponent, EventsOutsideAngularDirective, IconWrapperComponent, NgTemplateOutlet, ResizeSensorComponent, ActionSheetComponent, ActionSheetTemplateDirective, ButtonComponent, CalendarComponent, CalendarCustomMessagesComponent]
    }]
  }], () => [{
    type: NgZone
  }, {
    type: LocalizationService
  }, {
    type: ChangeDetectorRef
  }, {
    type: PopupService
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: Injector
  }, {
    type: PickerService
  }, {
    type: DisabledDatesService
  }, {
    type: AdaptiveService
  }], {
    container: [{
      type: ViewChild,
      args: ["container", {
        read: ViewContainerRef,
        static: true
      }]
    }],
    popupTemplate: [{
      type: ViewChild,
      args: ["popupTemplate", {
        static: true
      }]
    }],
    toggleButton: [{
      type: ViewChild,
      args: ["toggleButton", {
        static: true
      }]
    }],
    actionSheet: [{
      type: ViewChild,
      args: ["actionSheet"]
    }],
    focusableId: [{
      type: Input
    }],
    cellTemplate: [{
      type: ContentChild,
      args: [CellTemplateDirective, {
        static: false
      }]
    }],
    cellTemplateRef: [{
      type: Input,
      args: ["cellTemplate"]
    }],
    clearButton: [{
      type: Input
    }],
    inputAttributes: [{
      type: Input
    }],
    monthCellTemplate: [{
      type: ContentChild,
      args: [MonthCellTemplateDirective, {
        static: false
      }]
    }],
    monthCellTemplateRef: [{
      type: Input,
      args: ["monthCellTemplate"]
    }],
    yearCellTemplate: [{
      type: ContentChild,
      args: [YearCellTemplateDirective, {
        static: false
      }]
    }],
    yearCellTemplateRef: [{
      type: Input,
      args: ["yearCellTemplate"]
    }],
    decadeCellTemplate: [{
      type: ContentChild,
      args: [DecadeCellTemplateDirective, {
        static: false
      }]
    }],
    decadeCellTemplateRef: [{
      type: Input,
      args: ["decadeCellTemplate"]
    }],
    centuryCellTemplate: [{
      type: ContentChild,
      args: [CenturyCellTemplateDirective, {
        static: false
      }]
    }],
    centuryCellTemplateRef: [{
      type: Input,
      args: ["centuryCellTemplate"]
    }],
    weekNumberTemplate: [{
      type: ContentChild,
      args: [WeekNumberCellTemplateDirective, {
        static: false
      }]
    }],
    weekNumberTemplateRef: [{
      type: Input,
      args: ["weekNumberTemplate"]
    }],
    headerTitleTemplate: [{
      type: ContentChild,
      args: [HeaderTitleTemplateDirective, {
        static: false
      }]
    }],
    headerTitleTemplateRef: [{
      type: Input,
      args: ["headerTitleTemplate"]
    }],
    headerTemplate: [{
      type: ContentChild,
      args: [HeaderTemplateDirective]
    }],
    headerTemplateRef: [{
      type: Input,
      args: ["headerTemplate"]
    }],
    footerTemplate: [{
      type: ContentChild,
      args: [FooterTemplateDirective]
    }],
    footerTemplateRef: [{
      type: Input,
      args: ["footerTemplate"]
    }],
    footer: [{
      type: Input
    }],
    navigationItemTemplate: [{
      type: ContentChild,
      args: [NavigationItemTemplateDirective, {
        static: false
      }]
    }],
    navigationItemTemplateRef: [{
      type: Input,
      args: ["navigationItemTemplate"]
    }],
    weekDaysFormat: [{
      type: Input
    }],
    showOtherMonthDays: [{
      type: Input
    }],
    activeView: [{
      type: Input
    }],
    bottomView: [{
      type: Input
    }],
    topView: [{
      type: Input
    }],
    calendarType: [{
      type: Input
    }],
    animateCalendarNavigation: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    readonly: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["class.k-readonly"]
    }],
    readOnlyInput: [{
      type: Input
    }],
    popupSettings: [{
      type: Input
    }],
    navigation: [{
      type: Input
    }],
    min: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    incompleteDateValidation: [{
      type: Input
    }],
    autoCorrectParts: [{
      type: Input
    }],
    autoSwitchParts: [{
      type: Input
    }],
    autoSwitchKeys: [{
      type: Input
    }],
    enableMouseWheel: [{
      type: Input
    }],
    allowCaretMode: [{
      type: Input
    }],
    autoFill: [{
      type: Input
    }],
    focusedDate: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    format: [{
      type: Input
    }],
    twoDigitYearMax: [{
      type: Input
    }],
    formatPlaceholder: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    tabindex: [{
      type: Input
    }],
    tabIndex: [{
      type: Input
    }],
    disabledDates: [{
      type: Input
    }],
    adaptiveTitle: [{
      type: Input
    }],
    adaptiveSubtitle: [{
      type: Input
    }],
    rangeValidation: [{
      type: Input
    }],
    disabledDatesValidation: [{
      type: Input
    }],
    weekNumber: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    rounded: [{
      type: Input
    }],
    fillMode: [{
      type: Input
    }],
    adaptiveMode: [{
      type: Input
    }],
    valueChange: [{
      type: Output
    }],
    onFocus: [{
      type: Output,
      args: ["focus"]
    }],
    onBlur: [{
      type: Output,
      args: ["blur"]
    }],
    open: [{
      type: Output
    }],
    close: [{
      type: Output
    }],
    escape: [{
      type: Output
    }],
    wrapperClasses: [{
      type: HostBinding,
      args: ["class.k-datepicker"]
    }, {
      type: HostBinding,
      args: ["class.k-input"]
    }],
    disabledClass: [{
      type: HostBinding,
      args: ["class.k-disabled"]
    }]
  });
})();
var TIME_PART = {
  dayperiod: "dayperiod",
  hour: "hour",
  millisecond: "millisecond",
  minute: "minute",
  second: "second"
};
var div = domContainerFactory("div");
var ul = domContainerFactory("ul");
var li = domContainerFactory("li");
var span = domContainerFactory("span");
var listTitle = () => span("hour", "k-title k-timeselector-title");
var listItem = () => li("<span>02</span>", "k-item");
var list = () => ul([listItem()], "k-reset");
var scrollable = () => div([list()], "k-time-container k-flex k-content k-scrollable");
var actionSheetContent = (isDateTimePicker) => [isDateTimePicker ? div([div("button", "k-button k-button-lg")], "k-datetime-buttongroup") : null, div([div([span("04:08:48:49 AM", "k-title k-timeselector-title"), div("now", "k-button k-button-md")], "k-time-header"), div([span("", "k-time-highlight"), div([listTitle(), div([scrollable()], "k-time-list")], "k-time-list-wrapper")], "k-time-list-container")], "k-timeselector k-timeselector-lg")];
var timeListWrapper = (isAdaptiveEnabled = false, windowSize, isDateTimePicker) => {
  if (!isDocumentAvailable()) {
    return null;
  }
  if (!isAdaptiveEnabled) {
    return div([listTitle(), div([scrollable()], "k-time-list")], "k-time-list-wrapper", {
      left: "-10000px",
      position: "absolute"
    });
  }
  return div([div([div([div([div([], "k-actionsheet-title"), div([div([div([div("", "k-i-check k-button-icon k-icon k-font-icon")], "k-icon-wrapper-host")], "k-button k-icon-button k-button-lg")], "k-actionsheet-actions")], "k-actionsheet-titlebar-group")], "k-actionsheet-titlebar"), div([isDateTimePicker ? div([...actionSheetContent(isDateTimePicker)], "k-datetime-wrap k-time-tab") : actionSheetContent(isDateTimePicker)[1]], "k-actionsheet-content"), div([div("button", "k-button k-button-lg")], "k-actions k-actions-stretched k-actions-horizontal k-actionsheet-footer")], "k-actionsheet-view")], `k-actionsheet k-adaptive-actionsheet ${windowSize === "small" ? "k-actionsheet-fullscreen" : ""}`, {
    height: windowSize === "small" ? "100%" : "60vh",
    left: "-10000px",
    position: "absolute",
    top: 0
  });
};
var TimePickerDOMService = class _TimePickerDOMService {
  adaptiveService;
  constructor(adaptiveService) {
    this.adaptiveService = adaptiveService;
  }
  itemHeight;
  timeListHeight;
  isAdaptiveEnabled;
  isDateTimePicker;
  get windowSize() {
    return this.adaptiveService.size;
  }
  ensureHeights() {
    if (this.timeListHeight !== void 0) {
      return;
    }
    this.calculateHeights();
  }
  sumCSSProperties(style, ...properties) {
    return properties.reduce((sum, property) => sum + parseFloat(style.getPropertyValue(property)), 0) || 0;
  }
  calculateHeights(container) {
    if (!isDocumentAvailable()) {
      return;
    }
    let wrapper;
    let hostContainer;
    if (!this.isAdaptiveEnabled || this.windowSize === "large") {
      const listContainer = container && container.querySelector(".k-time-list-container");
      hostContainer = listContainer || document.body;
      wrapper = hostContainer.appendChild(timeListWrapper());
    } else {
      hostContainer = document.body;
      wrapper = hostContainer.appendChild(timeListWrapper(true, this.windowSize, this.isDateTimePicker));
    }
    const itemStyle = getComputedStyle(wrapper.querySelector("li"));
    const listStyle = getComputedStyle(wrapper.querySelector(".k-scrollable"));
    if (this.isAdaptiveEnabled && this.windowSize !== "large") {
      this.itemHeight = parseFloat(itemStyle.getPropertyValue("height"));
    } else {
      if (itemStyle["box-sizing"] === "border-box") {
        this.itemHeight = parseFloat(itemStyle.getPropertyValue("height"));
      } else {
        this.itemHeight = this.sumCSSProperties(itemStyle, "height", "padding-top", "padding-bottom");
      }
    }
    this.timeListHeight = parseFloat(listStyle.getPropertyValue("height"));
    hostContainer.removeChild(wrapper);
  }
  isActive(element) {
    if (!isDocumentAvailable() || !element) {
      return false;
    }
    return (element.nativeElement || element) === document.activeElement;
  }
  static ɵfac = function TimePickerDOMService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TimePickerDOMService)(ɵɵinject(AdaptiveService));
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _TimePickerDOMService,
    factory: _TimePickerDOMService.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimePickerDOMService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: AdaptiveService
  }], null);
})();
var HOURS_IN_DAY = 24;
var clampToRange$3 = (rangeValue) => (value) => value % rangeValue;
var clamp$3 = clampToRange$3(HOURS_IN_DAY);
var stepper$3 = (start, step) => (idx) => clamp$3(start + idx * step);
var distanceFromMin$3 = (value, min) => clamp$3(HOURS_IN_DAY + value - min);
var limit$3 = (borderValue) => (barrier, value) => {
  const useBarrier = !value || getDate(barrier).getTime() === getDate(value).getTime();
  return useBarrier ? barrier : setHours$1(barrier, borderValue);
};
var limitDown$3 = limit$3(0);
var limitUp$3 = limit$3(HOURS_IN_DAY - 1);
var HoursService = class _HoursService {
  intl;
  boundRange = false;
  insertUndividedMax = false;
  min;
  max;
  step;
  toListItem;
  constructor(intl) {
    this.intl = intl;
  }
  apply(value, candidate) {
    return setHours$1(value, candidate.getHours());
  }
  configure(settings) {
    const {
      boundRange = this.boundRange,
      insertUndividedMax = this.insertUndividedMax,
      min = this.min,
      max = this.max,
      part,
      step = this.step
    } = settings;
    this.boundRange = boundRange;
    this.insertUndividedMax = insertUndividedMax;
    this.toListItem = (hour) => {
      const date = setHours$1(MIDNIGHT_DATE, hour);
      return {
        text: this.intl.formatDate(date, part.pattern),
        value: date
      };
    };
    this.min = min;
    this.max = max;
    this.step = step;
  }
  data(selectedValue) {
    const [min] = this.range(selectedValue);
    const getHour = stepper$3(min, this.step);
    const convertToItem = (idx) => this.toListItem(getHour(idx));
    const data = range(0, this.countFromMin(selectedValue)).map(convertToItem);
    this.addLast(data);
    this.addMissing(data, selectedValue);
    return data;
  }
  isRangeChanged(min, max) {
    return !isEqual(this.min, min) || !isEqual(this.max, max);
  }
  limitRange(min, max, value) {
    return this.boundRange ? [limitDown$3(min, value), limitUp$3(max, value)] : [min, max];
  }
  total(value) {
    const last2 = this.insertUndividedMax && this.isLastMissing(value) ? 1 : 0;
    const missing = this.isMissing(value) ? 1 : 0;
    return this.countFromMin(value) + missing + last2;
  }
  selectedIndex(value) {
    return Math.ceil(this.divideByStep(value));
  }
  valueInList(value) {
    if (!value) {
      return true;
    }
    const matchMax = this.insertUndividedMax && this.lastHour(value) === value.getHours();
    return matchMax || !this.isMissing(value);
  }
  addLast(data, value) {
    if (this.insertUndividedMax && this.isLastMissing(value)) {
      data.push(this.toListItem(this.lastHour(value)));
    }
    return data;
  }
  addMissing(data, value) {
    if (this.valueInList(value)) {
      return data;
    }
    const missingItem = this.toListItem(value.getHours());
    data.splice(this.selectedIndex(value), 0, missingItem);
    return data;
  }
  countFromMin(value) {
    const [min, max] = this.range(value);
    return Math.floor(distanceFromMin$3(max, min) / this.step) + 1;
  }
  isMissing(value) {
    if (!value) {
      return false;
    }
    return this.selectedIndex(value) !== this.divideByStep(value);
  }
  isLastMissing(value) {
    return this.isMissing(setHours$1(this.max, this.lastHour(value)));
  }
  divideByStep(value) {
    return distanceFromMin$3(value.getHours(), this.min.getHours()) / this.step;
  }
  lastHour(value) {
    return this.range(value)[1];
  }
  range(value) {
    const [min, max] = this.limitRange(this.min, this.max, value);
    return [min.getHours(), max.getHours()];
  }
  static ɵfac = function HoursService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HoursService)(ɵɵinject(IntlService));
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _HoursService,
    factory: _HoursService.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HoursService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: IntlService
  }], null);
})();
var MINUTES_IN_HOUR = 60;
var clampToRange$2 = (rangeValue) => (value) => value % rangeValue;
var clamp$2 = clampToRange$2(MINUTES_IN_HOUR);
var stepper$2 = (start, step) => (idx) => clamp$2(start + idx * step);
var distanceFromMin$2 = (value, min) => clamp$2(MINUTES_IN_HOUR + value - min);
var limit$2 = (borderValue) => (barrier, value) => {
  const useBarrier = !value || barrier.getHours() === value.getHours();
  return useBarrier ? barrier : setMinutes(barrier, borderValue);
};
var limitDown$2 = limit$2(0);
var limitUp$2 = limit$2(MINUTES_IN_HOUR - 1);
var MinutesService = class _MinutesService {
  intl;
  toListItem;
  min;
  max;
  step;
  insertUndividedMax = false;
  constructor(intl) {
    this.intl = intl;
  }
  apply(value, candidate) {
    return setMinutes(value, candidate.getMinutes());
  }
  configure(settings) {
    const {
      insertUndividedMax = this.insertUndividedMax,
      min = this.min,
      max = this.max,
      part,
      step = this.step
    } = settings;
    this.insertUndividedMax = insertUndividedMax;
    this.toListItem = (minute) => {
      const date = setMinutes(MIDNIGHT_DATE, minute);
      return {
        text: this.intl.formatDate(date, part.pattern),
        value: date
      };
    };
    this.min = min;
    this.max = max;
    this.step = step;
  }
  data(selectedValue) {
    const [min] = this.range(selectedValue);
    const getMinute = stepper$2(min, this.step);
    const convertToItem = (idx) => this.toListItem(getMinute(idx));
    const data = range(0, this.countFromMin(selectedValue)).map(convertToItem);
    this.addLast(data);
    this.addMissing(data, selectedValue);
    return data;
  }
  isRangeChanged(min, max) {
    return !isEqual(this.min, min) || !isEqual(this.max, max);
  }
  limitRange(min, max, value) {
    return [limitDown$2(min, value), limitUp$2(max, value)];
  }
  total(value) {
    const last2 = this.insertUndividedMax && this.isLastMissing(value) ? 1 : 0;
    const missing = this.isMissing(value) ? 1 : 0;
    return this.countFromMin(value) + missing + last2;
  }
  selectedIndex(value) {
    return Math.ceil(this.divideByStep(value));
  }
  valueInList(value) {
    if (!value) {
      return true;
    }
    const matchMax = this.insertUndividedMax && this.lastMinute(value) === value.getMinutes();
    return matchMax || !this.isMissing(value);
  }
  addLast(data, value) {
    if (this.insertUndividedMax && this.isLastMissing(value)) {
      data.push(this.toListItem(this.lastMinute(value)));
    }
    return data;
  }
  addMissing(data, value) {
    if (this.valueInList(value)) {
      return data;
    }
    const missingItem = this.toListItem(value.getMinutes());
    data.splice(this.selectedIndex(value), 0, missingItem);
    return data;
  }
  countFromMin(value) {
    const [min, max] = this.range(value);
    return Math.floor(distanceFromMin$2(max, min) / this.step) + 1;
  }
  isMissing(value) {
    if (!value) {
      return false;
    }
    return this.selectedIndex(value) !== this.divideByStep(value);
  }
  isLastMissing(value) {
    return this.isMissing(setMinutes(this.max, this.lastMinute(value)));
  }
  divideByStep(value) {
    return distanceFromMin$2(value.getMinutes(), this.min.getMinutes()) / this.step;
  }
  lastMinute(value) {
    return this.range(value)[1];
  }
  range(value) {
    const [min, max] = this.limitRange(this.min, this.max, value);
    return [min.getMinutes(), max.getMinutes()];
  }
  static ɵfac = function MinutesService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MinutesService)(ɵɵinject(IntlService));
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _MinutesService,
    factory: _MinutesService.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MinutesService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: IntlService
  }], null);
})();
var SECONDS_IN_HOUR = 60;
var clampToRange$1 = (rangeValue) => (value) => value % rangeValue;
var clamp$1 = clampToRange$1(SECONDS_IN_HOUR);
var stepper$1 = (start, step) => (idx) => clamp$1(start + idx * step);
var distanceFromMin$1 = (value, min) => clamp$1(SECONDS_IN_HOUR + value - min);
var limit$1 = (borderValue) => (barrier, value) => {
  const useBarrier = !value || barrier.getHours() === value.getHours() && barrier.getMinutes() === value.getMinutes();
  return useBarrier ? barrier : setSeconds(barrier, borderValue);
};
var limitDown$1 = limit$1(0);
var limitUp$1 = limit$1(SECONDS_IN_HOUR - 1);
var SecondsService = class _SecondsService {
  intl;
  toListItem;
  min;
  max;
  step;
  insertUndividedMax = false;
  constructor(intl) {
    this.intl = intl;
  }
  apply(value, candidate) {
    return setSeconds(value, candidate.getSeconds());
  }
  configure(settings) {
    const {
      insertUndividedMax = this.insertUndividedMax,
      min = this.min,
      max = this.max,
      part,
      step = this.step
    } = settings;
    this.insertUndividedMax = insertUndividedMax;
    this.toListItem = (second) => {
      const date = setSeconds(MIDNIGHT_DATE, second);
      return {
        text: this.intl.formatDate(date, part.pattern),
        value: date
      };
    };
    this.min = min;
    this.max = max;
    this.step = step;
  }
  data(selectedValue) {
    const [min] = this.range(selectedValue);
    const getSecond = stepper$1(min, this.step);
    const convertToItem = (idx) => this.toListItem(getSecond(idx));
    const data = range(0, this.countFromMin(selectedValue)).map(convertToItem);
    this.addLast(data);
    this.addMissing(data, selectedValue);
    return data;
  }
  isRangeChanged(min, max) {
    return !isEqual(this.min, min) || !isEqual(this.max, max);
  }
  limitRange(min, max, value) {
    return [limitDown$1(min, value), limitUp$1(max, value)];
  }
  total(value) {
    const last2 = this.insertUndividedMax && this.isLastMissing(value) ? 1 : 0;
    const missing = this.isMissing(value) ? 1 : 0;
    return this.countFromMin(value) + missing + last2;
  }
  selectedIndex(value) {
    return Math.ceil(this.divideByStep(value));
  }
  valueInList(value) {
    if (!value) {
      return true;
    }
    const matchMax = this.insertUndividedMax && this.lastSecond(value) === value.getSeconds();
    return matchMax || !this.isMissing(value);
  }
  divideByStep(value) {
    return distanceFromMin$1(value.getSeconds(), this.min.getSeconds()) / this.step;
  }
  addLast(data, value) {
    if (this.insertUndividedMax && this.isLastMissing(value)) {
      data.push(this.toListItem(this.lastSecond(value)));
    }
    return data;
  }
  addMissing(data, value) {
    if (this.valueInList(value)) {
      return data;
    }
    const missingItem = this.toListItem(value.getSeconds());
    data.splice(this.selectedIndex(value), 0, missingItem);
    return data;
  }
  countFromMin(value) {
    const [min, max] = this.range(value);
    return Math.floor(distanceFromMin$1(max, min) / this.step) + 1;
  }
  isMissing(value) {
    if (!value) {
      return false;
    }
    return this.selectedIndex(value) !== this.divideByStep(value);
  }
  isLastMissing(value) {
    return this.isMissing(setSeconds(this.max, this.lastSecond(value)));
  }
  lastSecond(value) {
    return this.range(value)[1];
  }
  range(value) {
    const [min, max] = this.limitRange(this.min, this.max, value);
    return [min.getSeconds(), max.getSeconds()];
  }
  static ɵfac = function SecondsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SecondsService)(ɵɵinject(IntlService));
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _SecondsService,
    factory: _SecondsService.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SecondsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: IntlService
  }], null);
})();
var MILLISECONDS_IN_SECOND = 1e3;
var clampToRange = (rangeValue) => (value) => value % rangeValue;
var clamp2 = clampToRange(MILLISECONDS_IN_SECOND);
var stepper = (start, step) => (idx) => clamp2(start + idx * step);
var distanceFromMin = (value, min) => clamp2(MILLISECONDS_IN_SECOND + value - min);
var limit = (borderValue) => (barrier, value) => {
  const useBarrier = !value || barrier.getHours() === value.getHours() && barrier.getMinutes() === value.getMinutes() && barrier.getSeconds() === value.getSeconds();
  return useBarrier ? barrier : setMilliseconds(barrier, borderValue);
};
var limitDown = limit(0);
var limitUp = limit(MILLISECONDS_IN_SECOND - 1);
var MillisecondsService = class _MillisecondsService {
  intl;
  toListItem;
  min;
  max;
  step;
  insertUndividedMax = false;
  constructor(intl) {
    this.intl = intl;
  }
  apply(value, candidate) {
    return setMilliseconds(value, candidate.getMilliseconds());
  }
  configure(settings) {
    const {
      insertUndividedMax = this.insertUndividedMax,
      min = this.min,
      max = this.max,
      step = this.step
    } = settings;
    this.insertUndividedMax = insertUndividedMax;
    this.toListItem = (millisecond) => {
      const date = setMilliseconds(MIDNIGHT_DATE, millisecond);
      return {
        text: this.intl.formatDate(date, "SSS"),
        // Always "SSS" for the popup UI
        value: date
      };
    };
    this.min = min;
    this.max = max;
    this.step = step;
  }
  data(selectedValue) {
    const [min] = this.range(selectedValue);
    const getMillisecond = stepper(min, this.step);
    const convertToItem = (idx) => this.toListItem(getMillisecond(idx));
    const data = range(0, this.countFromMin(selectedValue)).map(convertToItem);
    this.addLast(data);
    this.addMissing(data, selectedValue);
    return data;
  }
  isRangeChanged(min, max) {
    return !isEqual(this.min, min) || !isEqual(this.max, max);
  }
  limitRange(min, max, value) {
    return [limitDown(min, value), limitUp(max, value)];
  }
  total(value) {
    const last2 = this.insertUndividedMax && this.isLastMissing(value) ? 1 : 0;
    const missing = this.isMissing(value) ? 1 : 0;
    return this.countFromMin(value) + missing + last2;
  }
  selectedIndex(value) {
    return Math.ceil(this.divideByStep(value));
  }
  valueInList(value) {
    if (!value) {
      return true;
    }
    const matchMax = this.insertUndividedMax && this.lastMillisecond(value) === value.getMilliseconds();
    return matchMax || !this.isMissing(value);
  }
  divideByStep(value) {
    return distanceFromMin(value.getMilliseconds(), this.min.getMilliseconds()) / this.step;
  }
  addLast(data, value) {
    if (this.insertUndividedMax && this.isLastMissing(value)) {
      data.push(this.toListItem(this.lastMillisecond(value)));
    }
    return data;
  }
  addMissing(data, value) {
    if (this.valueInList(value)) {
      return data;
    }
    const missingItem = this.toListItem(value.getMilliseconds());
    data.splice(this.selectedIndex(value), 0, missingItem);
    return data;
  }
  countFromMin(value) {
    const [min, max] = this.range(value);
    return Math.floor(distanceFromMin(max, min) / this.step) + 1;
  }
  isMissing(value) {
    if (!value) {
      return false;
    }
    return this.selectedIndex(value) !== this.divideByStep(value);
  }
  isLastMissing(value) {
    return this.isMissing(setMilliseconds(this.max, this.lastMillisecond(value)));
  }
  lastMillisecond(value) {
    return this.range(value)[1];
  }
  range(value) {
    const [min, max] = this.limitRange(this.min, this.max, value);
    return [min.getMilliseconds(), max.getMilliseconds()];
  }
  static ɵfac = function MillisecondsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MillisecondsService)(ɵɵinject(IntlService));
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _MillisecondsService,
    factory: _MillisecondsService.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MillisecondsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: IntlService
  }], null);
})();
var setHours = (date, hours) => {
  const clone = cloneDate(date);
  clone.setHours(hours);
  return clone;
};
var isAM = (value) => value !== null && value < 12;
var isPM = (value) => value !== null && (!value || value > 11);
var inRange = (value, min, max) => !min && !max || value >= min && value <= max;
var inReverseRange = (value, min, max) => !min && !max || value >= min || value <= max;
var DayPeriodService = class _DayPeriodService {
  intl;
  min;
  max;
  part;
  constructor(intl) {
    this.intl = intl;
  }
  /**
   * @hidden
   */
  apply(value, candidate) {
    const hour = value.getHours();
    const hourAM = isAM(hour);
    const candidateAM = isAM(candidate.getHours());
    if (hourAM && candidateAM || !hourAM && !candidateAM) {
      return value;
    }
    const [min, max = 24] = this.normalizedRange();
    const result = hour + (candidateAM ? -12 : 12);
    return setHours(value, Math.min(Math.max(min, result), max || 24));
  }
  /**
   * @hidden
   */
  configure(settings) {
    const {
      min = this.min,
      max = this.max,
      part = this.part
    } = settings;
    this.min = min;
    this.max = max;
    this.part = part;
  }
  /**
   * @hidden
   */
  data(_) {
    const names = this.part.names;
    if (!names) {
      return [];
    }
    const data = [];
    const [min, max] = this.normalizedRange();
    const dayPeriod = this.intl.dateFormatNames(names);
    if (isAM(min)) {
      data.push({
        text: dayPeriod.am,
        value: setHours(this.min, min)
      });
    }
    if (isPM(max)) {
      data.push({
        text: dayPeriod.pm,
        value: setHours(this.min, Math.max(12, max))
      });
    }
    return this.min.getHours() !== min ? data.reverse() : data;
  }
  /**
   * @hidden
   */
  isRangeChanged(_, __) {
    return false;
  }
  /**
   * @hidden
   */
  limitRange(min, max, _) {
    return [min, max];
  }
  /**
   * @hidden
   */
  total() {
    const [min, max] = this.normalizedRange();
    if (!min && !max) {
      return 2;
    }
    if (min > 11 || max < 12) {
      return 1;
    }
    return 2;
  }
  /**
   * @hidden
   */
  selectedIndex(value) {
    if (!this.valueInList(value)) {
      return -1;
    }
    const index = Math.floor(value.getHours() / 12);
    return this.min.getHours() === this.normalizedRange()[0] ? index : index === 0 ? 1 : 0;
  }
  /**
   * @hidden
   */
  valueInList(value) {
    const reverse = this.min.getHours() !== this.normalizedRange()[0];
    const isInRange2 = reverse ? inReverseRange : inRange;
    return isInRange2(value.getHours(), this.min.getHours(), this.max.getHours());
  }
  normalizedRange() {
    const minHour = this.min.getHours();
    const maxHour = this.max.getHours();
    return [Math.min(minHour, maxHour), Math.max(minHour, maxHour)];
  }
  static ɵfac = function DayPeriodService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DayPeriodService)(ɵɵinject(IntlService));
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _DayPeriodService,
    factory: _DayPeriodService.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DayPeriodService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: IntlService
  }], null);
})();
var SNAP_THRESHOLD = 0.05;
var SCROLL_THRESHOLD = 2;
var nil = () => null;
var getters = {
  [Keys.End]: (data, _) => data[data.length - 1],
  [Keys.Home]: (data, _) => data[0],
  [Keys.ArrowUp]: (data, index) => data[index - 1],
  [Keys.ArrowDown]: (data, index) => data[index + 1]
};
var services = {
  [TIME_PART.dayperiod]: DayPeriodService,
  [TIME_PART.hour]: HoursService,
  [TIME_PART.minute]: MinutesService,
  [TIME_PART.second]: SecondsService,
  [TIME_PART.millisecond]: MillisecondsService
};
var TimeListComponent = class _TimeListComponent {
  element;
  injector;
  dom;
  renderer;
  zone;
  localization;
  min = cloneDate(MIDNIGHT_DATE);
  max = cloneDate(MAX_TIME);
  part;
  step = 1;
  disabled = false;
  value;
  isLast = false;
  isFirst = false;
  valueChange = new EventEmitter();
  tabOutLastPart = new EventEmitter();
  tabOutFirstPart = new EventEmitter();
  virtualization;
  get tabIndex() {
    return this.disabled ? void 0 : 0;
  }
  componentClass = true;
  get isDayPeriod() {
    return this.part?.type === "dayperiod";
  }
  get currentSelectedIndex() {
    return this.selectedIndex(this.value);
  }
  get roleAttribute() {
    return "listbox";
  }
  get ariaLabel() {
    return this.localization.get(this.part?.type);
  }
  animateToIndex = true;
  isActive = false;
  skip = 0;
  total = 60;
  service;
  itemHeight;
  listHeight;
  topOffset;
  bottomOffset;
  bottomThreshold;
  topThreshold;
  style;
  data = [];
  indexToScroll = -1;
  scrollSubscription;
  domEvents = [];
  constructor(element, injector, dom, renderer, zone, localization) {
    this.element = element;
    this.injector = injector;
    this.dom = dom;
    this.renderer = renderer;
    this.zone = zone;
    this.localization = localization;
  }
  ngOnChanges(changes) {
    if (changes.part) {
      this.service = this.injector.get(services[this.part.type]);
      this.service.configure(this.serviceSettings());
    }
    const value = this.value;
    const valueChanges = changes.value || {};
    const [min, max] = this.service.limitRange(this.min, this.max, value);
    if (this.service.isRangeChanged(min, max) || changes.min || changes.max || changes.step) {
      this.data = [];
      this.service.configure(this.serviceSettings({
        min,
        max
      }));
    }
    if (!this.data.length || this.hasMissingValue(valueChanges)) {
      this.animateToIndex = false;
      this.data = this.service.data(value);
    }
    this.animateToIndex = this.animateToIndex && this.textHasChanged(valueChanges);
    this.total = this.service.total(value);
    this.indexToScroll = this.selectedIndex(value);
  }
  ngOnInit() {
    this.animateToIndex = true;
    this.dom.ensureHeights();
    this.itemHeight = this.dom.itemHeight;
    this.listHeight = this.dom.timeListHeight;
    this.topOffset = (this.listHeight - this.itemHeight) / 2;
    this.bottomOffset = this.listHeight - this.itemHeight;
    this.topThreshold = this.itemHeight * SNAP_THRESHOLD;
    this.bottomThreshold = this.itemHeight * (1 - SNAP_THRESHOLD);
    const translate = `translateY(${this.topOffset}px)`;
    this.style = {
      transform: translate,
      "-ms-transform": translate
    };
    if (this.element) {
      this.zone.runOutsideAngular(() => {
        this.bindEvents();
      });
    }
  }
  ngOnDestroy() {
    this.scrollSubscription.unsubscribe();
    this.domEvents.forEach((unbindCallback) => unbindCallback());
  }
  ngAfterViewInit() {
    this.scrollOnce((index) => this.virtualization.scrollToIndex(index));
  }
  ngAfterViewChecked() {
    this.scrollOnce((index) => {
      const action = this.animateToIndex ? "animateToIndex" : "scrollToIndex";
      this.virtualization[action](index);
      this.animateToIndex = true;
    });
  }
  getCurrentItem() {
    return this.indexToScroll >= 0 ? this.data[this.indexToScroll] : null;
  }
  handleChange(dataItem) {
    const candidate = this.service.apply(this.value, dataItem.value);
    if (this.value.getTime() === candidate.getTime()) {
      return;
    }
    this.indexToScroll = this.data.indexOf(dataItem);
    this.value = candidate;
    this.valueChange.emit(candidate);
  }
  handleItemClick(args) {
    const item = closestInScope(args.target, (node) => node.hasAttribute("data-timelist-item-index"), this.element.nativeElement);
    if (item) {
      const index = item.getAttribute("data-timelist-item-index");
      this.handleChange(this.data[index]);
    }
  }
  /**
   * Focuses the host element of the TimeList.
   *
   * @example
   * ```ts
   * _@Component({
   * selector: 'my-app',
   * template: `
   *  <button (click)="timelist.focus()">Focus TimeList</button>
   *  <kendo-timelist #timelist></kendo-timelist>
   * `
   * })
   * export class AppComponent { }
   * ```
   */
  focus() {
    if (!this.element) {
      return;
    }
    this.element.nativeElement.focus();
  }
  /**
   * Blurs the TimeList component.
   */
  blur() {
    if (!this.element) {
      return;
    }
    this.element.nativeElement.blur();
  }
  itemOffset(scrollTop) {
    const valueIndex = this.selectedIndex(this.value);
    const activeIndex = this.virtualization.activeIndex();
    const offset = this.virtualization.itemOffset(activeIndex);
    const distance = Math.abs(Math.ceil(scrollTop) - offset);
    if (valueIndex === activeIndex && distance < SCROLL_THRESHOLD) {
      return offset;
    }
    const scrollUp = valueIndex > activeIndex;
    const moveToNext = scrollUp && distance >= this.bottomThreshold || !scrollUp && distance > this.topThreshold;
    return moveToNext ? this.virtualization.itemOffset(activeIndex + 1) : offset;
  }
  hasMissingValue({
    previousValue,
    currentValue
  }) {
    const isPreviousMissing = previousValue && !this.service.valueInList(previousValue);
    const isCurrentMissing = currentValue && !this.service.valueInList(currentValue);
    return isPreviousMissing || isCurrentMissing;
  }
  scrollOnce(action) {
    if (this.indexToScroll !== -1) {
      action(this.indexToScroll);
      this.indexToScroll = -1;
    }
  }
  serviceSettings(settings) {
    const defaults = {
      boundRange: false,
      insertUndividedMax: false,
      max: this.max,
      min: this.min,
      part: this.part,
      step: this.step
    };
    const result = Object.assign({}, defaults, settings);
    result.boundRange = result.part.type !== "hour";
    return result;
  }
  selectedIndex(value) {
    if (!value) {
      return -1;
    }
    return this.service.selectedIndex(value);
  }
  textHasChanged({
    previousValue,
    currentValue
  }) {
    if (!previousValue || !currentValue) {
      return false;
    }
    const oldData = this.data[this.selectedIndex(previousValue)];
    const newData = this.data[this.selectedIndex(currentValue)];
    return oldData && newData && oldData.text !== newData.text;
  }
  handleKeyDown(e) {
    const code = normalizeKeys(e);
    if (code === Keys.Tab && !e.shiftKey && this.isLast) {
      e.preventDefault();
      this.tabOutLastPart.emit();
    }
    if (code === Keys.Tab && e.shiftKey && this.isFirst) {
      e.preventDefault();
      this.tabOutFirstPart.emit();
    }
    const getter = getters[code] || nil;
    const dataItem = getter(this.data, this.service.selectedIndex(this.value));
    if (dataItem) {
      this.handleChange(dataItem);
      e.preventDefault();
    }
  }
  bindEvents() {
    this.scrollSubscription = this.virtualization.scroll$().pipe(debounceTime(100), map((e) => e.target.scrollTop), map((top) => this.itemOffset(top)), map((itemOffset) => this.virtualization.itemIndex(itemOffset))).subscribe((index) => {
      this.virtualization.scrollToIndex(index);
      this.handleChange(this.data[index]);
    });
    const element = this.element.nativeElement;
    this.domEvents.push(this.renderer.listen(element, "mouseover", () => !this.isActive && this.focus()), this.renderer.listen(element, "click", () => this.focus()), this.renderer.listen(element, "blur", () => this.isActive = false), this.renderer.listen(element, "focus", () => this.isActive = true), this.renderer.listen(element, "keydown", this.handleKeyDown.bind(this)));
  }
  static ɵfac = function TimeListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TimeListComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(TimePickerDOMService), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(LocalizationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _TimeListComponent,
    selectors: [["kendo-timelist"]],
    viewQuery: function TimeListComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(VirtualizationComponent, 7);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.virtualization = _t.first);
      }
    },
    hostVars: 3,
    hostBindings: function TimeListComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("tabindex", ctx.tabIndex);
        ɵɵclassProp("k-time-list", ctx.componentClass);
      }
    },
    inputs: {
      min: "min",
      max: "max",
      part: "part",
      step: "step",
      disabled: "disabled",
      value: "value",
      isLast: "isLast",
      isFirst: "isFirst"
    },
    outputs: {
      valueChange: "valueChange",
      tabOutLastPart: "tabOutLastPart",
      tabOutFirstPart: "tabOutFirstPart"
    },
    standalone: true,
    features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    decls: 4,
    vars: 15,
    consts: [["tabindex", "-1", 1, "k-time-container", 3, "skip", "take", "total", "itemHeight", "maxScrollDifference", "topOffset", "bottomOffset"], [1, "k-reset", 3, "ngStyle", "kendoEventsOutsideAngular", "scope"], [1, "k-item"]],
    template: function TimeListComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "kendo-virtualization", 0)(1, "ul", 1);
        ɵɵrepeaterCreate(2, TimeListComponent_For_3_Template, 3, 4, "li", 2, ɵɵrepeaterTrackByIndex);
        ɵɵelementEnd()();
      }
      if (rf & 2) {
        ɵɵproperty("skip", ctx.skip)("take", ctx.total)("total", ctx.total)("itemHeight", ctx.itemHeight)("maxScrollDifference", ctx.listHeight)("topOffset", ctx.topOffset)("bottomOffset", ctx.bottomOffset);
        ɵɵattribute("role", ctx.roleAttribute)("aria-label", ctx.ariaLabel);
        ɵɵadvance();
        ɵɵproperty("ngStyle", ctx.style)("kendoEventsOutsideAngular", ɵɵpureFunction1(13, _c5, ctx.handleItemClick))("scope", ctx);
        ɵɵattribute("role", "presentation");
        ɵɵadvance();
        ɵɵrepeater(ctx.data);
      }
    },
    dependencies: [VirtualizationComponent, NgStyle, EventsOutsideAngularDirective],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimeListComponent, [{
    type: Component,
    args: [{
      selector: "kendo-timelist",
      template: `
    <kendo-virtualization
      [attr.role]="roleAttribute"
      [attr.aria-label]="ariaLabel"
      [skip]="skip"
      [take]="total"
      [total]="total"
      [itemHeight]="itemHeight"
      [maxScrollDifference]="listHeight"
      [topOffset]="topOffset"
      [bottomOffset]="bottomOffset"
      class="k-time-container"
      tabindex="-1"
      >
      <ul [ngStyle]="style" class="k-reset"
            [kendoEventsOutsideAngular]="{
                click: handleItemClick
            }"
        [scope]="this"
        [attr.role]="'presentation'"
        >
        @for (item of data; track $index; let index = $index) {
          <li class="k-item"
            [attr.data-timelist-item-index]="index"
            [attr.role]="'option'"
            [attr.aria-selected]="index === currentSelectedIndex"
            >
            <span>{{item.text}}</span>
          </li>
        }
      </ul>
    </kendo-virtualization>
    `,
      standalone: true,
      imports: [VirtualizationComponent, NgStyle, EventsOutsideAngularDirective]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Injector
  }, {
    type: TimePickerDOMService
  }, {
    type: Renderer2
  }, {
    type: NgZone
  }, {
    type: LocalizationService
  }], {
    min: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    part: [{
      type: Input
    }],
    step: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    isLast: [{
      type: Input
    }],
    isFirst: [{
      type: Input
    }],
    valueChange: [{
      type: Output
    }],
    tabOutLastPart: [{
      type: Output
    }],
    tabOutFirstPart: [{
      type: Output
    }],
    virtualization: [{
      type: ViewChild,
      args: [VirtualizationComponent, {
        static: true
      }]
    }],
    tabIndex: [{
      type: HostBinding,
      args: ["attr.tabindex"]
    }],
    componentClass: [{
      type: HostBinding,
      args: ["class.k-time-list"]
    }]
  });
})();
var isEqualTillMinute = (value, min) => value.getHours() === min.getHours() && value.getMinutes() === min.getMinutes();
var isEqualTillSecond = (value, min) => isEqualTillMinute(value, min) && value.getSeconds() === min.getSeconds();
var isEqualTillMillisecond = (value, min) => isEqualTillSecond(value, min) && value.getMilliseconds() === min.getMilliseconds();
var defaultGetters = [{
  type: TIME_PART.hour,
  getter: (value) => value.getHours(),
  minGetter: (_, min) => min.getHours()
}, {
  type: TIME_PART.minute,
  getter: (value) => value.getMinutes(),
  minGetter: (value, min) => isEqualTillMinute(value, min) ? min.getMinutes() : 0
}, {
  type: TIME_PART.second,
  getter: (value) => value.getSeconds(),
  minGetter: (value, min) => isEqualTillSecond(value, min) ? min.getSeconds() : 0
}, {
  type: TIME_PART.millisecond,
  getter: (value) => value.getMilliseconds(),
  minGetter: (value, min) => isEqualTillMillisecond(value, min) ? min.getMilliseconds() : 0
}];
var left = (getter) => (origin, _) => getter(origin);
var right = (getter) => (_, candidate) => getter(candidate);
var convertToObject = (parts) => parts.reduce((obj, p) => {
  obj[p.type] = p.type;
  return obj;
}, {});
var getterByPart = (parts) => (g) => parts[g.type] ? right(g.getter) : left(g.getter);
var gettersFactory = (getters2) => (parts) => getters2.map(getterByPart(convertToObject(parts)));
var snapValue = (getter, minGetter, step) => (date, min) => {
  const value = getter(date);
  const minValue = minGetter(date, min);
  const rest = value - minValue;
  if (rest < 0) {
    return minValue;
  }
  const mod = rest % step;
  return value - mod + (mod > step / 2 ? step : 0);
};
var snappersFactory = (getters2) => (steps) => getters2.map((g) => {
  const step = steps[g.type];
  return step ? snapValue(g.getter, g.minGetter, step) : g.getter;
});
var generateGetters = gettersFactory(defaultGetters);
var generateSnappers = snappersFactory(defaultGetters);
var valueMerger = (getters2) => (origin, candidate) => {
  origin.setHours(...getters2.map((g) => g(origin, candidate)));
  return origin;
};
var snapTime = (snappers) => (candidate, min) => {
  const date = cloneDate(candidate);
  date.setHours(...snappers.map((s) => s(date, min)));
  return date;
};
var TimePickerMessages = class _TimePickerMessages extends ComponentMessages {
  /**
   * Specifies the text of the **Accept** button in the popup footer of the TimeList.
   */
  accept;
  /**
   * Specifies the label of the **Accept** button in the popup footer of the TimeList.
   */
  acceptLabel;
  /**
   * Specifies the text of the **Cancel** button in the popup footer of the TimeList.
   */
  cancel;
  /**
   * Specifies the label of the **Cancel** button in the popup footer of the TimeList.
   */
  cancelLabel;
  /**
   * Specifies the text of the **Now** button in the popup header of the TimeList.
   */
  now;
  /**
   * Specifies the label of the **Now** button in the popup header of the TimeList.
   */
  nowLabel;
  /**
   * Specifies the title of the **Toggle** button of the TimePicker.
   */
  toggle;
  /**
   * Specifies the label of the **Hour** part in the TimePicker.
   */
  hour;
  /**
   * Specifies the label of the **Minute** part in the TimePicker.
   */
  minute;
  /**
   * Specifies the label of the **Second** part in the TimePicker.
   */
  second;
  /**
   * Specifies the label of the **Millisecond** part in the TimePicker.
   */
  millisecond;
  /**
   * Specifies the label of the **Dayperiod** part in the TimePicker.
   */
  dayperiod;
  /**
   * Specifies the title of the **Clear** button of the TimePicker.
   */
  clearTitle;
  /**
   * Specifies the title of the **Close** button of the ActionSheet that renders instead of the popup when using small screen devices in adaptive mode.
   */
  adaptiveCloseButtonTitle;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵTimePickerMessages_BaseFactory;
    return function TimePickerMessages_Factory(__ngFactoryType__) {
      return (ɵTimePickerMessages_BaseFactory || (ɵTimePickerMessages_BaseFactory = ɵɵgetInheritedFactory(_TimePickerMessages)))(__ngFactoryType__ || _TimePickerMessages);
    };
  })();
  static ɵdir = ɵɵdefineDirective({
    type: _TimePickerMessages,
    selectors: [["kendo-timepicker-messages-base"]],
    inputs: {
      accept: "accept",
      acceptLabel: "acceptLabel",
      cancel: "cancel",
      cancelLabel: "cancelLabel",
      now: "now",
      nowLabel: "nowLabel",
      toggle: "toggle",
      hour: "hour",
      minute: "minute",
      second: "second",
      millisecond: "millisecond",
      dayperiod: "dayperiod",
      clearTitle: "clearTitle",
      adaptiveCloseButtonTitle: "adaptiveCloseButtonTitle"
    },
    features: [ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimePickerMessages, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line
      selector: "kendo-timepicker-messages-base"
    }]
  }], null, {
    accept: [{
      type: Input
    }],
    acceptLabel: [{
      type: Input
    }],
    cancel: [{
      type: Input
    }],
    cancelLabel: [{
      type: Input
    }],
    now: [{
      type: Input
    }],
    nowLabel: [{
      type: Input
    }],
    toggle: [{
      type: Input
    }],
    hour: [{
      type: Input
    }],
    minute: [{
      type: Input
    }],
    second: [{
      type: Input
    }],
    millisecond: [{
      type: Input
    }],
    dayperiod: [{
      type: Input
    }],
    clearTitle: [{
      type: Input
    }],
    adaptiveCloseButtonTitle: [{
      type: Input
    }]
  });
})();
var TimeSelectorLocalizedMessagesDirective = class _TimeSelectorLocalizedMessagesDirective extends TimePickerMessages {
  service;
  constructor(service) {
    super();
    this.service = service;
  }
  static ɵfac = function TimeSelectorLocalizedMessagesDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TimeSelectorLocalizedMessagesDirective)(ɵɵdirectiveInject(LocalizationService));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _TimeSelectorLocalizedMessagesDirective,
    selectors: [["", "kendoTimeSelectorLocalizedMessages", ""]],
    standalone: true,
    features: [ɵɵProvidersFeature([{
      provide: TimePickerMessages,
      useExisting: forwardRef(() => _TimeSelectorLocalizedMessagesDirective)
    }]), ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimeSelectorLocalizedMessagesDirective, [{
    type: Directive,
    args: [{
      providers: [{
        provide: TimePickerMessages,
        useExisting: forwardRef(() => TimeSelectorLocalizedMessagesDirective)
      }],
      selector: "[kendoTimeSelectorLocalizedMessages]",
      standalone: true
    }]
  }], () => [{
    type: LocalizationService
  }], null);
})();
var listReducer = (state, list2, idx, all) => {
  if (state.length || !list2.isActive) {
    return state;
  }
  return [{
    next: all[idx + 1] || list2,
    prev: all[idx - 1] || list2
  }];
};
var Direction;
(function(Direction2) {
  Direction2[Direction2["Left"] = 0] = "Left";
  Direction2[Direction2["Right"] = 1] = "Right";
})(Direction || (Direction = {}));
var TimeSelectorComponent = class _TimeSelectorComponent {
  localization;
  cdr;
  element;
  intl;
  dom;
  zone;
  renderer;
  pickerService;
  accept;
  cancel;
  now;
  timeLists;
  timeListWrappers;
  /**
   * @hidden
   */
  get disabledClass() {
    return this.disabled;
  }
  /**
   * Specifies the time format that displays the time list columns.
   *
   * @default 't'
   */
  format = "t";
  /**
   * Sets the smallest valid time value.
   */
  min = cloneDate(MIN_TIME);
  /**
   * Sets the largest valid time value.
   */
  max = cloneDate(MAX_TIME);
  /**
   * Controls the display of the **Cancel** button in the popup.
   *
   * @default true
   */
  cancelButton = true;
  /**
   * Controls the display of the **Set** button in the popup.
   *
   * @default true
   */
  setButton = true;
  /**
   * Controls the display of the **Now** button in the popup.
   *
   * When the current time is out of range or the incremental step is greater than `1`, the **Now** button is hidden.
   *
   * @default true
   */
  nowButton = true;
  /**
   * Sets the `disabled` property of the `TimeSelector` and controls whether the component is active.
   *
   * @default false
   */
  disabled = false;
  /**
   * Sets the adaptive mode for the component.
   * Use this property to enable proper height calculation in the DOM service.
   */
  isAdaptiveEnabled;
  /**
   * Specifies whether the component is used as part of a DateTimePicker.
   */
  isDateTimePicker;
  /**
   * Configures the incremental steps of the TimeSelector.
   *
   * When the incremental step is greater than `1`, the **Now** button is hidden.
   */
  set steps(steps) {
    this._steps = steps || {};
  }
  get steps() {
    return this._steps;
  }
  /**
   * Specifies the value of the TimeSelector component.
   */
  value = null;
  /**
   * Fires each time the user selects a new value.
   */
  valueChange = new EventEmitter();
  /**
   * Fires each time the user cancels the selected value.
   */
  valueReject = new EventEmitter();
  tabOutLastPart = new EventEmitter();
  tabOutFirstPart = new EventEmitter();
  tabOutNow = new EventEmitter();
  dateFormatParts;
  isActive = false;
  showNowButton = true;
  set current(value) {
    this._current = timeInRange(this.snapTime(cloneDate(value || MIDNIGHT_DATE), this.min), this.min, this.max);
    if (!NgZone.isInAngularZone()) {
      this.cdr.detectChanges();
    }
  }
  get current() {
    return this._current;
  }
  get activeListIndex() {
    return this._activeListIndex;
  }
  set activeListIndex(value) {
    this._activeListIndex = value;
    if (!this.timeListWrappers || !this.timeListWrappers.length) {
      return;
    }
    this.timeListWrappers.forEach((listWrapper) => {
      this.renderer.removeClass(listWrapper.nativeElement, "k-focus");
    });
    if (value >= 0) {
      const listIndex = this.listIndex(value);
      const focusedWrapper = this.timeListWrappers.toArray()[listIndex];
      if (focusedWrapper) {
        this.renderer.addClass(focusedWrapper.nativeElement, "k-focus");
      }
    }
  }
  mergeValue;
  snapTime;
  _activeListIndex = -1;
  _current;
  _steps = {};
  subscriptions;
  domEvents = [];
  constructor(localization, cdr, element, intl, dom, zone, renderer, pickerService) {
    this.localization = localization;
    this.cdr = cdr;
    this.element = element;
    this.intl = intl;
    this.dom = dom;
    this.zone = zone;
    this.renderer = renderer;
    this.pickerService = pickerService;
    if (this.pickerService) {
      this.pickerService.timeSelector = this;
    }
  }
  /**
   * @hidden
   */
  ngOnInit() {
    this.subscriptions = this.intl.changes.subscribe(this.intlChange.bind(this));
    if (this.localization) {
      this.subscriptions.add(this.localization.changes.subscribe(() => this.cdr.markForCheck()));
    }
    this.renderer.addClass(this.element.nativeElement, "k-timeselector");
    this.dom.isAdaptiveEnabled = this.isAdaptiveEnabled;
    this.dom.isDateTimePicker = this.isDateTimePicker;
    this.dom.calculateHeights(this.element.nativeElement);
    this.init();
    this.bindEvents();
  }
  /**
   * @hidden
   */
  ngOnChanges() {
    this.init();
  }
  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
    if (this.pickerService) {
      this.pickerService.timeSelector = null;
    }
    this.domEvents.forEach((unbindCallback) => unbindCallback());
  }
  /**
   * Focuses the TimeSelector component.
   */
  focus() {
    const list2 = this.timeLists.first;
    if (!list2) {
      return;
    }
    list2.focus();
  }
  /**
   * Blurs the TimeSelector component.
   */
  blur() {
    const list2 = this.timeLists.first;
    if (!list2) {
      return;
    }
    list2.blur();
  }
  /**
   * @hidden
   */
  handleAccept() {
    this.handleChange(this.mergeValue(cloneDate(this.value || getDate(getNow())), this.current));
  }
  /**
   * @hidden
   */
  handleNow() {
    this.current = getNow();
    this.handleChange(this.current);
    this.cdr.markForCheck();
  }
  /**
   * @hidden
   */
  handleReject() {
    this.current = this.value;
    this.valueReject.emit();
  }
  /**
   * @hidden
   */
  handleFocus(args) {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    this.emitFocus(args);
  }
  /**
   * @hidden
   */
  handleListFocus(args) {
    const index = parseInt(args.target.getAttribute("data-timelist-index"), 10);
    this.activeListIndex = index;
    this.handleFocus(args);
  }
  /**
   * @hidden
   */
  handleBlur(args) {
    const currentTarget = currentFocusTarget(args);
    if (currentTarget && this.containsElement(currentTarget)) {
      return;
    }
    this.activeListIndex = -1;
    this.isActive = false;
    this.emitBlur(args);
  }
  /**
   * @hidden
   */
  containsElement(element) {
    return Boolean(closest(element, (node) => node === this.element.nativeElement));
  }
  /**
   * @hidden
   */
  handleTabOut(event) {
    const {
      code,
      shiftKey
    } = event;
    if (event.target === this.now?.nativeElement && code === Keys.Tab && shiftKey) {
      event.preventDefault();
      if (this.isDateTimePicker) {
        this.tabOutNow.emit();
      } else {
        this.cancel ? this.cancel.nativeElement.focus() : this.accept?.nativeElement.focus();
      }
      return;
    }
    if (code === Keys.Tab && !shiftKey && event.target !== this.now?.nativeElement) {
      event.preventDefault();
      if (document.activeElement === this.accept.nativeElement) {
        if (this.cancel) {
          this.cancel.nativeElement.focus();
        } else {
          this.now ? this.now.nativeElement.focus() : this.timeLists.first.focus();
        }
      } else {
        this.now ? this.now.nativeElement.focus() : this.timeLists.first.focus();
      }
    }
  }
  partStep(part) {
    return this.steps[part.type] || 1;
  }
  init(changes) {
    if (!changes || hasChange(changes, "format")) {
      this.dateFormatParts = this.intl.splitDateFormat(this.format);
      this.mergeValue = valueMerger(generateGetters(this.dateFormatParts));
    }
    if (!changes || hasChange(changes, "steps")) {
      this.snapTime = snapTime(generateSnappers(this.steps));
    }
    if (!changes || hasChange(changes, "value")) {
      this.current = this.value;
    }
    this.showNowButton = !this.hasSteps() && this.nowButton && isInTimeRange(getNow(), this.min, this.max);
  }
  focusList(dir) {
    if (!this.timeLists.length) {
      return;
    }
    this.timeLists.reduce(listReducer, []).map((state) => dir === Direction.Right ? state.next : state.prev).map((list2) => list2 && list2.focus());
  }
  handleChange(value) {
    this.value = value;
    this.valueChange.emit(cloneDate(value));
  }
  hasActiveButton() {
    if (!this.accept) {
      return false;
    }
    return [this.accept, this.cancel, this.now].reduce((isActive2, el) => isActive2 || this.dom.isActive(el), false);
  }
  hasSteps() {
    const keys = Object.keys(this.steps);
    return keys.length !== keys.reduce((acc, k) => acc + this.steps[k], 0);
  }
  intlChange() {
    this.dateFormatParts = this.intl.splitDateFormat(this.format);
    this.mergeValue = valueMerger(generateGetters(this.dateFormatParts));
    this.cdr.markForCheck();
  }
  bindEvents() {
    if (this.element) {
      this.zone.runOutsideAngular(() => {
        this.domEvents.push(this.renderer.listen(this.element.nativeElement, "keydown", this.handleKeydown.bind(this)));
      });
    }
  }
  handleKeydown(args) {
    const {
      altKey
    } = args;
    const code = normalizeKeys(args);
    const arrowKeyPressed = [Keys.ArrowLeft, Keys.ArrowRight].indexOf(code) !== -1;
    if (isPresent2(this.pickerService) && arrowKeyPressed && altKey) {
      return;
    }
    if (code === Keys.Enter && !this.hasActiveButton()) {
      this.handleAccept();
    } else if (code === Keys.ArrowLeft || code === Keys.ArrowRight) {
      this.focusList(code === Keys.ArrowLeft ? Direction.Left : Direction.Right);
    }
  }
  emitBlur(args) {
    if (this.pickerService) {
      this.pickerService.onBlur.emit(args);
    }
  }
  emitFocus(args) {
    if (this.pickerService) {
      this.pickerService.onFocus.emit(args);
    }
  }
  listIndex(partIndex) {
    let listIdx = 0;
    let partIdx = 0;
    while (partIdx < partIndex) {
      if (this.dateFormatParts[partIdx].type !== "literal") {
        listIdx++;
      }
      partIdx++;
    }
    return listIdx;
  }
  static ɵfac = function TimeSelectorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TimeSelectorComponent)(ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(IntlService), ɵɵdirectiveInject(TimePickerDOMService), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(PickerService, 8));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _TimeSelectorComponent,
    selectors: [["kendo-timeselector"]],
    viewQuery: function TimeSelectorComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c22, 5);
        ɵɵviewQuery(_c23, 5);
        ɵɵviewQuery(_c24, 5);
        ɵɵviewQuery(TimeListComponent, 5);
        ɵɵviewQuery(_c25, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.accept = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.cancel = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.now = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.timeLists = _t);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.timeListWrappers = _t);
      }
    },
    hostVars: 2,
    hostBindings: function TimeSelectorComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("k-disabled", ctx.disabledClass);
      }
    },
    inputs: {
      format: "format",
      min: "min",
      max: "max",
      cancelButton: "cancelButton",
      setButton: "setButton",
      nowButton: "nowButton",
      disabled: "disabled",
      isAdaptiveEnabled: "isAdaptiveEnabled",
      isDateTimePicker: "isDateTimePicker",
      steps: "steps",
      value: "value"
    },
    outputs: {
      valueChange: "valueChange",
      valueReject: "valueReject",
      tabOutLastPart: "tabOutLastPart",
      tabOutFirstPart: "tabOutFirstPart",
      tabOutNow: "tabOutNow"
    },
    exportAs: ["kendo-timeselector"],
    standalone: true,
    features: [ɵɵProvidersFeature([LocalizationService, {
      provide: L10N_PREFIX,
      useValue: "kendo.timeselector"
    }]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    decls: 10,
    vars: 3,
    consts: () => {
      let i18n_18;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_18 = goog.getMsg("Set");
        i18n_18 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_18;
      } else {
        i18n_18 = $localize`:kendo.timeselector.accept|The Accept button text in the timeselector component:Set`;
      }
      let i18n_19;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_19 = goog.getMsg("Set time");
        i18n_19 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_19;
      } else {
        i18n_19 = $localize`:kendo.timeselector.acceptLabel|The label for the Accept button in the timeselector component:Set time`;
      }
      let i18n_20;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_20 = goog.getMsg("Cancel");
        i18n_20 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_20;
      } else {
        i18n_20 = $localize`:kendo.timeselector.cancel|The Cancel button text in the timeselector component:Cancel`;
      }
      let i18n_21;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_21 = goog.getMsg("Cancel changes");
        i18n_21 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_21;
      } else {
        i18n_21 = $localize`:kendo.timeselector.cancelLabel|The label for the Cancel button in the timeselector component:Cancel changes`;
      }
      let i18n_22;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_22 = goog.getMsg("Now");
        i18n_22 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_22;
      } else {
        i18n_22 = $localize`:kendo.timeselector.now|The Now button text in the timeselector component:Now`;
      }
      let i18n_23;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_23 = goog.getMsg("Select now");
        i18n_23 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_23;
      } else {
        i18n_23 = $localize`:kendo.timeselector.nowLabel|The label for the Now button in the timeselector component:Select now`;
      }
      return [["now", ""], ["listWrapper", ""], ["accept", ""], ["cancel", ""], ["kendoTimeSelectorLocalizedMessages", "", "accept", i18n_18, "acceptLabel", i18n_19, "cancel", i18n_20, "cancelLabel", i18n_21, "now", i18n_22, "nowLabel", i18n_23], [1, "k-time-header"], [1, "k-title", "k-timeselector-title"], ["type", "button", 1, "k-button", "k-button-md", "k-rounded-md", "k-button-flat", "k-button-flat-primary", "k-time-now", 3, "kendoEventsOutsideAngular", "scope", "disabled"], [1, "k-time-list-container"], [1, "k-time-highlight"], [1, "k-time-footer", "k-actions", "k-actions-stretched", "k-actions-horizontal"], ["role", "presentation", "tabindex", "-1", 1, "k-time-list-wrapper"], [1, "k-time-separator"], [3, "valueChange", "tabOutLastPart", "tabOutFirstPart", "isLast", "isFirst", "min", "max", "part", "step", "disabled", "value", "kendoEventsOutsideAngular", "scope"], ["type", "button", 1, "k-button", "k-time-accept", "k-button-md", "k-rounded-md", "k-button-solid", "k-button-solid-primary", 3, "kendoEventsOutsideAngular", "scope", "disabled"], ["type", "button", 1, "k-button", "k-time-cancel", "k-button-md", "k-rounded-md", "k-button-solid", "k-button-solid-base", 3, "kendoEventsOutsideAngular", "scope", "disabled"]];
    },
    template: function TimeSelectorComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementContainer(0, 4);
        ɵɵelementStart(1, "div", 5)(2, "span", 6);
        ɵɵtext(3);
        ɵɵelementEnd();
        ɵɵtemplate(4, TimeSelectorComponent_Conditional_4_Template, 3, 11, "button", 7);
        ɵɵelementEnd();
        ɵɵelementStart(5, "div", 8);
        ɵɵelement(6, "span", 9);
        ɵɵrepeaterCreate(7, TimeSelectorComponent_For_8_Template, 2, 2, null, null, ɵɵrepeaterTrackByIndex);
        ɵɵelementEnd();
        ɵɵtemplate(9, TimeSelectorComponent_Conditional_9_Template, 3, 2, "div", 10);
      }
      if (rf & 2) {
        ɵɵadvance(3);
        ɵɵtextInterpolate1(" ", ctx.intl.formatDate(ctx.current, ctx.format), " ");
        ɵɵadvance();
        ɵɵconditional(ctx.showNowButton ? 4 : -1);
        ɵɵadvance(3);
        ɵɵrepeater(ctx.dateFormatParts);
        ɵɵadvance(2);
        ɵɵconditional(ctx.setButton || ctx.cancelButton ? 9 : -1);
      }
    },
    dependencies: [TimeSelectorLocalizedMessagesDirective, EventsOutsideAngularDirective, TimeListComponent],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimeSelectorComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      exportAs: "kendo-timeselector",
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.timeselector"
      }],
      selector: "kendo-timeselector",
      template: `
        <ng-container kendoTimeSelectorLocalizedMessages
          i18n-accept="kendo.timeselector.accept|The Accept button text in the timeselector component"
          accept="Set"

          i18n-acceptLabel="kendo.timeselector.acceptLabel|The label for the Accept button in the timeselector component"
          acceptLabel="Set time"

          i18n-cancel="kendo.timeselector.cancel|The Cancel button text in the timeselector component"
          cancel="Cancel"

          i18n-cancelLabel="kendo.timeselector.cancelLabel|The label for the Cancel button in the timeselector component"
          cancelLabel="Cancel changes"

          i18n-now="kendo.timeselector.now|The Now button text in the timeselector component"
          now="Now"

          i18n-nowLabel="kendo.timeselector.nowLabel|The label for the Now button in the timeselector component"
          nowLabel="Select now"
          >
        </ng-container>
        <div class="k-time-header">
          <span class="k-title k-timeselector-title">
            {{ intl.formatDate(current, format) }}
          </span>
          @if (showNowButton) {
            <button
              #now
              type="button"
              class="k-button k-button-md k-rounded-md k-button-flat k-button-flat-primary k-time-now"
              [attr.title]="localization.get('nowLabel')"
              [attr.aria-label]="localization.get('nowLabel')"
                [kendoEventsOutsideAngular]="{
                    click: handleNow,
                    focus: handleFocus,
                    blur: handleBlur,
                    keydown: handleTabOut
                }"
              [scope]="this"
              [disabled]="disabled"
            >{{localization.get('now')}}</button>
          }
        </div>
        <div class="k-time-list-container">
          <span class="k-time-highlight"></span>
          @for (part of dateFormatParts; track $index; let idx = $index) {
            @if (part.type !== 'literal') {
              <div
                #listWrapper
                class="k-time-list-wrapper"
                role="presentation" tabindex="-1"
                >
                <span class="k-title k-timeselector-title">{{intl.dateFieldName(part)}}</span>
                <kendo-timelist
                  [isLast]="idx === dateFormatParts.length - 1"
                  [isFirst]="idx === 0"
                  [min]="min"
                  [max]="max"
                  [part]="part"
                  [step]="partStep(part)"
                  [disabled]="disabled"
                  [(value)]="current"
                  (tabOutLastPart)="tabOutLastPart.emit()"
                  (tabOutFirstPart)="tabOutFirstPart.emit()"
                        [kendoEventsOutsideAngular]="{
                            focus: handleListFocus,
                            blur: handleBlur
                        }"
                  [scope]="this"
                  [attr.data-timelist-index]="idx"
                ></kendo-timelist>
              </div>
            }
            @if (part.type === 'literal') {
              <div class="k-time-separator">
                {{part.pattern}}
              </div>
            }
          }
        </div>
        @if (setButton || cancelButton) {
          <div class="k-time-footer k-actions k-actions-stretched k-actions-horizontal">
            @if (setButton) {
              <button
                #accept
                type="button"
                class="k-button k-time-accept k-button-md k-rounded-md k-button-solid k-button-solid-primary"
                [attr.title]="localization.get('acceptLabel')"
                [attr.aria-label]="localization.get('acceptLabel')"
                [kendoEventsOutsideAngular]="{
                    click: handleAccept,
                    focus: handleFocus,
                    blur: handleBlur,
                    keydown: handleTabOut
                }"
                [scope]="this"
                [disabled]="disabled"
              >{{localization.get('accept')}}</button>
            }
            @if (cancelButton) {
              <button
                #cancel
                class="k-button k-time-cancel k-button-md k-rounded-md k-button-solid k-button-solid-base"
                type="button"
                [attr.title]="localization.get('cancelLabel')"
                [attr.aria-label]="localization.get('cancelLabel')"
                [kendoEventsOutsideAngular]="{
                    click: handleReject,
                    focus: handleFocus,
                    blur: handleBlur,
                    keydown: handleTabOut
                }"
                [scope]="this"
                [disabled]="disabled"
              >{{localization.get('cancel')}}</button>
            }
          </div>
        }
        `,
      standalone: true,
      imports: [TimeSelectorLocalizedMessagesDirective, EventsOutsideAngularDirective, TimeListComponent]
    }]
  }], () => [{
    type: LocalizationService
  }, {
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: IntlService
  }, {
    type: TimePickerDOMService
  }, {
    type: NgZone
  }, {
    type: Renderer2
  }, {
    type: PickerService,
    decorators: [{
      type: Optional
    }]
  }], {
    accept: [{
      type: ViewChild,
      args: ["accept", {
        static: false
      }]
    }],
    cancel: [{
      type: ViewChild,
      args: ["cancel", {
        static: false
      }]
    }],
    now: [{
      type: ViewChild,
      args: ["now", {
        static: false
      }]
    }],
    timeLists: [{
      type: ViewChildren,
      args: [TimeListComponent]
    }],
    timeListWrappers: [{
      type: ViewChildren,
      args: ["listWrapper"]
    }],
    disabledClass: [{
      type: HostBinding,
      args: ["class.k-disabled"]
    }],
    format: [{
      type: Input
    }],
    min: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    cancelButton: [{
      type: Input
    }],
    setButton: [{
      type: Input
    }],
    nowButton: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    isAdaptiveEnabled: [{
      type: Input
    }],
    isDateTimePicker: [{
      type: Input
    }],
    steps: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    valueChange: [{
      type: Output
    }],
    valueReject: [{
      type: Output
    }],
    tabOutLastPart: [{
      type: Output
    }],
    tabOutFirstPart: [{
      type: Output
    }],
    tabOutNow: [{
      type: Output
    }]
  });
})();
var timeRangeValidator = (min, max) => {
  return (control) => {
    if (!min || !max || !control.value) {
      return null;
    }
    const err = {
      timeRangeError: {
        maxValue: max,
        minValue: min,
        value: control.value
      }
    };
    return isInTimeRange(control.value, min, max) ? null : err;
  };
};
var TimeSelectorCustomMessagesComponent = class _TimeSelectorCustomMessagesComponent extends TimePickerMessages {
  service;
  constructor(service) {
    super();
    this.service = service;
  }
  get override() {
    return true;
  }
  static ɵfac = function TimeSelectorCustomMessagesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TimeSelectorCustomMessagesComponent)(ɵɵdirectiveInject(LocalizationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _TimeSelectorCustomMessagesComponent,
    selectors: [["kendo-timeselector-messages"]],
    standalone: true,
    features: [ɵɵProvidersFeature([{
      provide: TimePickerMessages,
      useExisting: forwardRef(() => _TimeSelectorCustomMessagesComponent)
    }]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function TimeSelectorCustomMessagesComponent_Template(rf, ctx) {
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimeSelectorCustomMessagesComponent, [{
    type: Component,
    args: [{
      providers: [{
        provide: TimePickerMessages,
        useExisting: forwardRef(() => TimeSelectorCustomMessagesComponent)
      }],
      selector: "kendo-timeselector-messages",
      template: ``,
      standalone: true
    }]
  }], () => [{
    type: LocalizationService
  }], null);
})();
var TimePickerLocalizedMessagesDirective = class _TimePickerLocalizedMessagesDirective extends TimePickerMessages {
  service;
  constructor(service) {
    super();
    this.service = service;
  }
  static ɵfac = function TimePickerLocalizedMessagesDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TimePickerLocalizedMessagesDirective)(ɵɵdirectiveInject(LocalizationService));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _TimePickerLocalizedMessagesDirective,
    selectors: [["", "kendoTimePickerLocalizedMessages", ""]],
    standalone: true,
    features: [ɵɵProvidersFeature([{
      provide: TimePickerMessages,
      useExisting: forwardRef(() => _TimePickerLocalizedMessagesDirective)
    }]), ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimePickerLocalizedMessagesDirective, [{
    type: Directive,
    args: [{
      providers: [{
        provide: TimePickerMessages,
        useExisting: forwardRef(() => TimePickerLocalizedMessagesDirective)
      }],
      selector: "[kendoTimePickerLocalizedMessages]",
      standalone: true
    }]
  }], () => [{
    type: LocalizationService
  }], null);
})();
var VALUE_DOC_LINK$1 = "https://www.telerik.com/kendo-angular-ui/components/dateinputs/timepicker/#toc-integration-with-json";
var INTL_DATE_FORMAT = "https://github.com/telerik/kendo-intl/blob/master/docs/date-formatting/index.md";
var formatRegExp = new RegExp(`${TIME_PART.hour}|${TIME_PART.minute}|${TIME_PART.second}|${TIME_PART.millisecond}|${TIME_PART.dayperiod}|literal`);
var ACCEPT_BUTTON_SELECTOR$1 = ".k-button.k-time-accept";
var CANCEL_BUTTON_SELECTOR = ".k-button.k-time-cancel";
var TimePickerComponent = class _TimePickerComponent extends MultiTabStop {
  bus;
  zone;
  localization;
  cdr;
  popupService;
  wrapper;
  renderer;
  injector;
  pickerService;
  intl;
  adaptiveService;
  /**
   * @hidden
   */
  clockIcon = clockIcon;
  container;
  popupTemplate;
  toggleButton;
  actionSheet;
  /**
   * @hidden
   */
  focusableId;
  /**
   * Determines whether the TimePicker is disabled
   * ([see example]({% slug disabled_timepicker %})).
   * To learn how to disable the component in reactive forms, refer to the article on [Forms Support](slug:formssupport_timepicker#toc-managing-the-timepicker-disabled-state-in-reactive-forms).
   *
   * @default false
   */
  disabled = false;
  /**
   * Determines the read-only state of the TimePicker
   * ([see example]({% slug readonly_timepicker %}#toc-read-only-timepicker)).
   *
   * @default false
   */
  readonly = false;
  /**
   * Sets the read-only state of the TimePicker input field
   * ([see example]({% slug readonly_timepicker %}#toc-read-only-input)).
   *
   * If you set the [`readonly`]({% slug api_dateinputs_timepickercomponent %}#toc-readonly) property value to `true`,
   * the input will be rendered in a read-only state regardless of the `readOnlyInput` value.
   * @default false
   */
  readOnlyInput = false;
  /**
   * If set to `true`, renders a clear button after the input text or TimePicker value has been changed.
   * Clicking this button resets the value of the component to `null` and triggers the `valueChange` event.
   * @default false
   */
  clearButton = false;
  /**
   * Specifies the time format that is used to display the input value
   * ([see example]({% slug formats_timepicker %})).
   * @default 't'
   */
  format = "t";
  /**
   * Defines the descriptions of the format sections in the input field.
   * For more information, refer to the article on
   * [placeholders]({% slug placeholders_timepicker %}).
   */
  formatPlaceholder;
  /**
   * Specifies the hint the TimePicker displays when its value is `null`.
   * For more information, refer to the article on
   * [placeholders]({% slug placeholders_timepicker %}).
   * @default null
   */
  placeholder;
  /**
   * Specifies the smallest valid time value
   * ([see example]({% slug timeranges_timepicker %})).
   * @default `00:00:00`
   */
  set min(min) {
    this._min = cloneDate(min || MIN_TIME);
  }
  get min() {
    return this._min;
  }
  /**
   * Specifies the biggest valid time value
   * ([see example]({% slug timeranges_timepicker %})).
   * @default `23:59:59`
   */
  set max(max) {
    this._max = cloneDate(max || MAX_TIME);
  }
  get max() {
    return this._max;
  }
  /**
   * Determines whether the built-in validation for incomplete dates is to be enforced when a form is being validated.
   *
   * @default false
   */
  incompleteDateValidation = false;
  /**
   * Determines whether to automatically move to the next segment after the user completes the current one.
   *
   * @default true
   */
  autoSwitchParts = true;
  /**
   * A string array representing custom keys, which will move the focus to the next date format segment.
   */
  autoSwitchKeys = [];
  /**
   * Indicates whether the mouse scroll can be used to increase/decrease the time segments values.
   *
   * @default true
   */
  enableMouseWheel = true;
  /**
   * Determines if the users should see a blinking caret inside the Date Input when possible.
   *
   * @default false
   */
  allowCaretMode = false;
  /**
   * Determines whether to display the **Cancel** button in the popup.
   *
   * @default true
   */
  cancelButton = true;
  /**
   * Determines whether to display the **Now** button in the popup.
   *
   * If the current time is out of range or the incremental step is greater than `1`, the **Now** button will be hidden.
   *
   * @default true
   */
  nowButton = true;
  /**
   * Configures the incremental steps of the TimePicker.
   * For more information, refer to the article on
   * [incremental steps]({% slug incrementalsteps_timepicker %}).
   *
   * If the incremental step is greater than `1`, the **Now** button will be hidden.
   */
  set steps(steps) {
    this._steps = steps || {};
  }
  get steps() {
    return this._steps;
  }
  /**
   * Configures the popup of the TimePicker.
   *
   * The available options are animate which controls the popup animation and by default, the open and close animations are enabled.
   * The `appendTo` option controls the popup container and by default, the popup will be appended to the root component.
   * The `popupClass` option specifies a list of CSS classes that are used to style the popup.
   */
  set popupSettings(settings) {
    this._popupSettings = Object.assign({}, {
      animate: true
    }, settings);
  }
  get popupSettings() {
    return this._popupSettings;
  }
  /**
   * Sets the tabindex of the TimePicker component.
   * @default 0
   */
  tabindex = 0;
  /**
   * @hidden
   */
  set tabIndex(tabIndex) {
    this.tabindex = tabIndex;
  }
  get tabIndex() {
    return this.tabindex;
  }
  /**
   * Sets the title of the input element of the TimePicker and the title text rendered
   * in the header of the popup(action sheet). Applicable only when [`AdaptiveMode` is set to `auto`](slug:api_dateinputs_adaptivemode).
   */
  adaptiveTitle = "";
  /**
   * Sets the subtitle text rendered in the header of the popup(action sheet).
   * Applicable only when [`AdaptiveMode` is set to `auto`](slug:api_dateinputs_adaptivemode).
   * By default, subtitle is not rendered.
   */
  adaptiveSubtitle;
  /**
   * Determines whether the built-in min or max validators are enforced when a form is being validated.
   *
   * @default true
   */
  rangeValidation = true;
  /**
   * Determines whether the TimePicker is in adaptive mode.
   * @default 'none'
   */
  adaptiveMode = "none";
  /**
   * Determines whether the TimePicker is in adaptive mode.
   *
   * The `value` has to be a valid [JavaScript `Date`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date) instance or `null`.
   */
  set value(value) {
    this.verifyValue(value);
    this._value = cloneDate(value);
  }
  get value() {
    return this._value;
  }
  /**
   * Sets the size of the component.
   * @default 'medium'
   */
  set size(size) {
    this.renderer.removeClass(this.wrapper.nativeElement, getSizeClass("input", this.size));
    this.renderer.removeClass(this.toggleButton.nativeElement, getSizeClass("button", this.size));
    const newSize = size ? size : DEFAULT_SIZE;
    if (newSize !== "none") {
      this.renderer.addClass(this.wrapper.nativeElement, getSizeClass("input", newSize));
      this.renderer.addClass(this.toggleButton.nativeElement, getSizeClass("button", newSize));
    }
    this._size = newSize;
  }
  get size() {
    return this._size;
  }
  /**
   * Sets the rounded styling of the component.
   * @default 'medium'
   *
   */
  set rounded(rounded) {
    this.renderer.removeClass(this.wrapper.nativeElement, getRoundedClass(this.rounded));
    const newRounded = rounded ? rounded : DEFAULT_ROUNDED;
    if (newRounded !== "none") {
      this.renderer.addClass(this.wrapper.nativeElement, getRoundedClass(newRounded));
    }
    this._rounded = newRounded;
  }
  get rounded() {
    return this._rounded;
  }
  /**
   * Sets the fillMode of the component.
   * @default 'solid'
   */
  set fillMode(fillMode) {
    this.renderer.removeClass(this.wrapper.nativeElement, getFillModeClass("input", this.fillMode));
    this.renderer.removeClass(this.toggleButton.nativeElement, getFillModeClass("button", this.fillMode));
    this.renderer.removeClass(this.toggleButton.nativeElement, `k-button-${this.fillMode}-base`);
    const newFillMode = fillMode ? fillMode : DEFAULT_FILL_MODE;
    if (newFillMode !== "none") {
      this.renderer.addClass(this.wrapper.nativeElement, getFillModeClass("input", newFillMode));
      this.renderer.addClass(this.toggleButton.nativeElement, getFillModeClass("button", newFillMode));
      this.renderer.addClass(this.toggleButton.nativeElement, `k-button-${newFillMode}-base`);
    }
    this._fillMode = newFillMode;
  }
  get fillMode() {
    return this._fillMode;
  }
  /**
   * Sets the HTML attributes of the inner focusable input element. Attributes which are essential for certain component functionalities cannot be changed.
   */
  inputAttributes;
  /**
   * Fires each time the user selects a new value
   * ([see example](slug:events_timepicker)).
   */
  valueChange = new EventEmitter();
  /**
   * Fires each time the user focuses the input element
   * ([see example](slug:events_timepicker)).
   */
  onFocus = new EventEmitter();
  /**
   * Fires each time the input element gets blurred
   * ([see example](slug:events_timepicker)).
   */
  onBlur = new EventEmitter();
  /**
   * Fires each time the popup is about to open
   * ([see example](slug:events_timepicker)).
   * This event is preventable. If you cancel the event, the popup will remain closed.
   */
  open = new EventEmitter();
  /**
   * Fires each time the popup is about to close
   * ([see example](slug:events_timepicker)).
   * This event is preventable. If you cancel the event, the popup will remain open.
   */
  close = new EventEmitter();
  /**
   * @hidden
   */
  escape = new EventEmitter();
  /**
   * @hidden
   */
  wrapperClasses = true;
  /**
   * @hidden
   */
  get disabledClass() {
    return this.disabled;
  }
  get popupUID() {
    return `k-timepicker-popup-${this.bus.calendarId}-`;
  }
  popupRef;
  /**
   * @hidden
   */
  checkIcon = checkIcon;
  get isActive() {
    return this._active;
  }
  set isActive(value) {
    this._active = value;
    if (!this.wrapper) {
      return;
    }
    const element = this.wrapper.nativeElement;
    if (value) {
      this.renderer.addClass(element, "k-focus");
    } else {
      this.renderer.removeClass(element, "k-focus");
    }
  }
  get show() {
    return this._show;
  }
  set show(show) {
    if (show && (this.disabled || this.readonly)) {
      return;
    }
    const skipZone = !show && (!this._show || !hasObservers(this.close) && !hasObservers(this.open));
    if (!skipZone) {
      this.zone.run(() => {
        const event = new PreventableEvent();
        if (!this._show && show) {
          this.open.emit(event);
        } else if (this._show && !show) {
          this.close.emit(event);
        }
        if (event.isDefaultPrevented()) {
          return;
        }
        this.toggleTimeSelector(show);
      });
    } else {
      this.toggleTimeSelector(show);
    }
  }
  get dateInput() {
    return this.pickerService.input;
  }
  get timeSelector() {
    return this.pickerService.timeSelector;
  }
  /**
   * @hidden
   */
  get isControlRequired() {
    return isControlRequired(this.control);
  }
  /**
   * @hidden
   */
  windowSize;
  get adaptiveAcceptButton() {
    return this.actionSheet.element.nativeElement.querySelector(ACCEPT_BUTTON_SELECTOR$1);
  }
  get adaptiveCancelButton() {
    return this.actionSheet.element.nativeElement.querySelector(CANCEL_BUTTON_SELECTOR);
  }
  get inputElement() {
    return this.wrapper.nativeElement.querySelector("input");
  }
  onControlChange = noop$2;
  onControlTouched = noop$2;
  onValidatorChange = noop$2;
  resolvedPromise = Promise.resolve(null);
  timeRangeValidateFn = noop$2;
  incompleteValidator = noop$2;
  _min = cloneDate(MIN_TIME);
  _max = cloneDate(MAX_TIME);
  _popupSettings = {
    animate: true
  };
  _show = false;
  _steps = {};
  _value = null;
  _active = false;
  localizationChangeSubscription;
  pickerSubscriptions;
  windowBlurSubscription;
  control;
  domEvents = [];
  _size = DEFAULT_SIZE;
  _rounded = DEFAULT_ROUNDED;
  _fillMode = DEFAULT_FILL_MODE;
  constructor(bus, zone, localization, cdr, popupService, wrapper, renderer, injector, pickerService, intl, adaptiveService) {
    super();
    this.bus = bus;
    this.zone = zone;
    this.localization = localization;
    this.cdr = cdr;
    this.popupService = popupService;
    this.wrapper = wrapper;
    this.renderer = renderer;
    this.injector = injector;
    this.pickerService = pickerService;
    this.intl = intl;
    this.adaptiveService = adaptiveService;
    A(packageMetadata);
    this.pickerSubscriptions = this.pickerService.onFocus.subscribe(this.handleFocus.bind(this));
    this.pickerSubscriptions.add(this.pickerService.onBlur.subscribe(this.handleBlur.bind(this)));
    this.pickerSubscriptions.add(this.pickerService.dateCompletenessChange.subscribe(this.handleDateCompletenessChange.bind(this)));
  }
  /**
   * @hidden
   * Used by the TextBoxContainer to determine if the component is empty
   */
  isEmpty() {
    return !this.value && this.dateInput.isEmpty();
  }
  /**
   * @hidden
   */
  ngOnInit() {
    this.localizationChangeSubscription = this.localization.changes.subscribe(() => this.cdr.markForCheck());
    this.control = this.injector.get(NgControl, null);
    if (this.wrapper) {
      this.renderer.removeAttribute(this.wrapper.nativeElement, "tabindex");
      this.zone.runOutsideAngular(() => {
        this.bindEvents();
      });
    }
    this.focusableId = this.dateInput?.focusableId;
  }
  /**
   * @hidden
   */
  ngAfterViewInit() {
    this.setComponentClasses();
    this.windowSize = this.adaptiveService.size;
  }
  /**
   * @hidden
   */
  ngOnChanges(changes) {
    if (changes.min || changes.max || changes.rangeValidation || changes.incompleteDateValidation) {
      this.timeRangeValidateFn = this.rangeValidation ? timeRangeValidator(this.min, this.max) : noop$2;
      this.incompleteValidator = this.incompleteDateValidation ? incompleteDateValidator() : noop$2;
      this.onValidatorChange();
    }
    if (changes.format) {
      this.verifyFormat();
    }
    if (!this.focusableId || changes.focusableId) {
      this.focusableId = this.dateInput?.focusableId;
    }
  }
  /**
   * @hidden
   */
  ngOnDestroy() {
    this.isActive = false;
    this.show = false;
    if (this.localizationChangeSubscription) {
      this.localizationChangeSubscription.unsubscribe();
    }
    if (this.windowBlurSubscription) {
      this.windowBlurSubscription.unsubscribe();
    }
    this.domEvents.forEach((unbindCallback) => unbindCallback());
    this.pickerSubscriptions.unsubscribe();
  }
  /**
   * @hidden
   */
  handleKeydown(event) {
    const {
      altKey
    } = event;
    const code = normalizeKeys(event);
    if (code === Keys.Escape) {
      this.focusInput();
      this.show = false;
      hasObservers(this.escape) && this.escape.emit();
      this.cdr.detectChanges();
      return;
    }
    if (altKey) {
      if (code === Keys.ArrowUp) {
        event.preventDefault();
        this.focusInput();
        this.show = false;
        this.cdr.detectChanges();
      }
      if (code === Keys.ArrowDown && !this.show) {
        event.preventDefault();
        this.show = true;
      }
    }
  }
  /**
   * @hidden
   */
  writeValue(value) {
    this.verifyValue(value);
    this.value = cloneDate(value);
    this.cdr.markForCheck();
    if (!value && this.dateInput) {
      this.dateInput.placeholder = this.placeholder;
      this.dateInput.writeValue(value);
    }
  }
  /**
   * @hidden
   */
  registerOnChange(fn) {
    this.onControlChange = fn;
  }
  /**
   * @hidden
   */
  registerOnTouched(fn) {
    this.onControlTouched = fn;
  }
  /**
   * @hidden
   */
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
    this.cdr.markForCheck();
  }
  /**
   * @hidden
   */
  validate(control) {
    return this.timeRangeValidateFn(control) || this.incompleteValidator(control, this.dateInput && this.dateInput.isDateIncomplete);
  }
  /**
   * @hidden
   */
  registerOnValidatorChange(fn) {
    this.onValidatorChange = fn;
  }
  /**
   * Focuses the TimePicker component.
   *
   */
  focus() {
    this.dateInput.focus();
  }
  /**
   * Blurs the TimePicker component.
   *
   */
  blur() {
    (this.timeSelector || this.dateInput)["blur"]();
  }
  /**
   * Toggles the visibility of the popup or ActionSheet.
   * If you use the `toggle` method to show or hide the popup or ActionSheet, the `open` and `close` events do not fire.
   *
   * @param {boolean} show The state of the popup.
   */
  toggle(show) {
    if (this.disabled || this.readonly) {
      return;
    }
    this.resolvedPromise.then(() => {
      this.toggleTimeSelector(show === void 0 ? !this.show : show);
    });
  }
  /**
   * Returns whether the component is currently open.
   * That is when the popup or ActionSheet is open.
   */
  get isOpen() {
    return this.show;
  }
  /**
   * @hidden
   */
  get appendTo() {
    const {
      appendTo
    } = this.popupSettings;
    if (!appendTo || appendTo === "root") {
      return void 0;
    }
    return appendTo === "component" ? this.container : appendTo;
  }
  /**
   * @hidden
   */
  handleChange(value) {
    if (isEqual(this.value, value)) {
      if (this.show) {
        this.focusInput();
        this.show = false;
      }
      if (this.incompleteDateValidation) {
        this.onControlChange(cloneDate(value));
      }
      return;
    }
    this.value = cloneDate(value);
    this.zone.run(() => {
      if (this.show) {
        this.focusInput();
        this.show = false;
      }
      this.dateInput.showClearButton = true;
      this.onControlChange(cloneDate(value));
      this.valueChange.emit(cloneDate(value));
    });
  }
  /**
   * @hidden
   */
  handleActionSheetAccept() {
    this.timeSelector.handleAccept();
  }
  /**
   * @hidden
   */
  handleActionSheetCollapse() {
    this.cdr.markForCheck();
  }
  /**
   * @hidden
   */
  handleReject() {
    this.focusInput();
    this.show = false;
  }
  /**
   * @hidden
   */
  handleInputChange(value) {
    const val = this.dateInput.formatSections["date"] ? value : this.mergeTime(value);
    this.handleChange(val);
  }
  /**
   * @hidden
   */
  handleDateInputClick() {
    this.windowSize = this.adaptiveService.size;
    if (this.isAdaptive) {
      this.show = true;
    } else if (this.isOpen) {
      this.show = false;
    }
  }
  /**
   * @hidden
   */
  onTabOutNow() {
    if (!this.timeSelector.showNowButton) {
      this.cancelButton ? this.timeSelector.cancel.nativeElement.focus() : this.timeSelector.accept.nativeElement.focus();
    }
  }
  /**
   * @hidden
   */
  handleMousedown(args) {
    args.preventDefault();
  }
  /**
   * @hidden
   */
  handleIconClick(event) {
    if (this.disabled || this.readonly) {
      return;
    }
    event.preventDefault();
    this.focusInput();
    this.handleFocus();
    this.show = !this.show;
    this.cdr.detectChanges();
  }
  /**
   * @hidden
   */
  get popupClasses() {
    const popupClasses = ["k-timepicker-popup"];
    if (!this.popupSettings.popupClass) {
      return popupClasses;
    }
    const customClasses = parseCSSClassNames(this.popupSettings.popupClass);
    if (customClasses?.length) {
      popupClasses.push(...customClasses);
    }
    return popupClasses;
  }
  /**
   * @hidden
   */
  get isAdaptiveModeEnabled() {
    return this.adaptiveMode === "auto";
  }
  /**
   * @hidden
   */
  get isAdaptive() {
    return this.isAdaptiveModeEnabled && this.windowSize !== "large";
  }
  /**
   * @hidden
   */
  normalizeTime(date) {
    return setTime(MIDNIGHT_DATE, date);
  }
  /**
   * @hidden
   */
  mergeTime(value) {
    return this.value && value ? setTime(this.value, value) : value;
  }
  /**
   * @hidden
   */
  onResize() {
    const currentWindowSize = this.adaptiveService.size;
    if (!this.isOpen || this.windowSize === currentWindowSize) {
      return;
    }
    if (this.actionSheet.expanded) {
      this.toggleActionSheet(false);
    } else {
      this.togglePopup(false);
    }
    this.windowSize = currentWindowSize;
  }
  /**
   * @hidden
   */
  onTabOutLastPart() {
    this.renderer.removeClass(this.timeSelector.timeListWrappers.last.nativeElement, "k-focus");
    if (this.isAdaptive) {
      this.cancelButton ? this.adaptiveCancelButton.focus() : this.adaptiveAcceptButton.focus();
    } else {
      this.timeSelector.accept.nativeElement.focus();
    }
  }
  /**
   * @hidden
   */
  onTabOutFirstPart() {
    this.renderer.removeClass(this.timeSelector.timeListWrappers.first.nativeElement, "k-focus");
    if (this.timeSelector.showNowButton) {
      this.timeSelector.now.nativeElement.focus();
    } else {
      this.cancelButton ? this.timeSelector.cancel.nativeElement.focus() : this.timeSelector.accept.nativeElement.focus();
    }
  }
  toggleTimeSelector(show) {
    const previousWindowSize = this.windowSize;
    this.windowSize = this.adaptiveService.size;
    if (previousWindowSize !== this.windowSize && !show) {
      if (previousWindowSize !== "large") {
        this.toggleActionSheet(show);
      } else {
        this.togglePopup(show);
      }
    } else {
      if (this.isAdaptive) {
        this.toggleActionSheet(show);
      } else {
        this.togglePopup(show);
      }
    }
    this.toggleFocus();
  }
  toggleActionSheet(show) {
    if (show === this._show) {
      return;
    }
    if (show && !this.isOpen) {
      this.actionSheet.toggle();
      this.renderer.setAttribute(this.actionSheet.element.nativeElement, "id", this.popupUID);
      this.renderer.setAttribute(this.dateInput?.inputElement, attributeNames.ariaControls, this.popupUID);
    } else if (!show && this.isOpen) {
      this.renderer.setStyle(this.timeSelector.element.nativeElement, "pointer-events", "none");
      if (this.dateInput) {
        this.renderer.removeAttribute(this.dateInput.inputElement, attributeNames.ariaControls);
      }
      this.actionSheet.toggle();
      this.dateInput.focus();
    }
    this._show = show;
  }
  togglePopup(show) {
    if (show === this.isOpen) {
      return;
    }
    this._show = show;
    this.cdr.markForCheck();
    if (show) {
      const direction = this.localization.rtl ? "right" : "left";
      const appendToComponent = typeof this.popupSettings.appendTo === "string" && this.popupSettings.appendTo === "component";
      this.popupRef = this.popupService.open({
        anchor: this.wrapper,
        anchorAlign: {
          vertical: "bottom",
          horizontal: direction
        },
        animate: this.popupSettings.animate,
        appendTo: this.appendTo,
        content: this.popupTemplate,
        popupAlign: {
          vertical: "top",
          horizontal: direction
        },
        popupClass: this.popupClasses,
        positionMode: appendToComponent ? "fixed" : "absolute"
      });
      this.popupRef.popupElement.setAttribute("id", this.popupUID);
      this.renderer.setAttribute(this.dateInput?.inputElement, attributeNames.ariaControls, this.popupUID);
      this.popupRef.popupAnchorViewportLeave.subscribe(() => this.show = false);
    } else {
      this.popupRef.close();
      this.popupRef = null;
      if (this.dateInput) {
        this.renderer.removeAttribute(this.dateInput?.inputElement, attributeNames.ariaControls);
      }
    }
  }
  focusInput() {
    if (touchEnabled) {
      return;
    }
    this.dateInput.focus();
  }
  toggleFocus() {
    if (!this.isActive) {
      return;
    }
    if (this.show) {
      if (!this.timeSelector) {
        this.cdr.detectChanges();
      }
      if (this.isActive) {
        this.timeSelector.focus();
      }
    } else if (!touchEnabled) {
      this.dateInput.focus();
    } else if (!this.dateInput.isActive) {
      this.handleBlur();
    }
  }
  verifyValue(value) {
    if (!isDevMode()) {
      return;
    }
    if (value && !(value instanceof Date)) {
      throw new Error(`The 'value' should be a valid JavaScript Date instance or null. Check ${VALUE_DOC_LINK$1} for possible resolution.`);
    }
  }
  verifyFormat() {
    if (!isDevMode()) {
      return;
    }
    const formatContainsDateParts = this.intl.splitDateFormat(this.format).some((part) => !formatRegExp.test(part.type));
    if (formatContainsDateParts) {
      throw new Error(`Provided format is not supported. Supported specifiers are T|t|H|h|m|s|S|a. See ${INTL_DATE_FORMAT}`);
    }
  }
  bindEvents() {
    const element = this.wrapper.nativeElement;
    this.domEvents.push(this.renderer.listen(element, "keydown", this.handleKeydown.bind(this)));
    if (isWindowAvailable()) {
      this.windowBlurSubscription = fromEvent(window, "blur").subscribe(this.handleWindowBlur.bind(this));
    }
  }
  handleWindowBlur() {
    if (!this.isOpen || this.actionSheet.expanded) {
      return;
    }
    this.show = false;
  }
  handleFocus() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    if (hasObservers(this.onFocus)) {
      this.zone.run(() => {
        this.onFocus.emit();
      });
    }
  }
  handleBlur(args) {
    const currentTarget = args && currentFocusTarget(args);
    const target = args && args.target;
    const isInsideActionSheet = this.actionSheet && (this.actionSheet.element.nativeElement.contains(target) || this.actionSheet.element.nativeElement.contains(currentTarget));
    if (currentTarget && (this.dateInput.containsElement(currentTarget) || this.timeSelector && this.timeSelector.containsElement(currentTarget) || isInsideActionSheet)) {
      return;
    }
    if (hasObservers(this.onBlur) || this.show && hasObservers(this.close) || requiresZoneOnBlur(this.control)) {
      this.zone.run(() => {
        this.blurComponent();
        this.cdr.markForCheck();
      });
    } else {
      this.blurComponent();
    }
    this.cdr.detectChanges();
  }
  blurComponent() {
    this.isActive = false;
    this.show = false;
    this.onControlTouched();
    this.onBlur.emit();
  }
  handleDateCompletenessChange() {
    this.cdr.markForCheck();
    this.zone.run(() => this.onValidatorChange());
  }
  setComponentClasses() {
    if (this.size) {
      this.renderer.addClass(this.wrapper.nativeElement, getSizeClass("input", this.size));
      this.renderer.addClass(this.toggleButton.nativeElement, getSizeClass("button", this.size));
    }
    if (this.rounded) {
      this.renderer.addClass(this.wrapper.nativeElement, getRoundedClass(this.rounded));
    }
    if (this.fillMode) {
      this.renderer.addClass(this.wrapper.nativeElement, getFillModeClass("input", this.fillMode));
      this.renderer.addClass(this.toggleButton.nativeElement, getFillModeClass("button", this.fillMode));
      this.renderer.addClass(this.toggleButton.nativeElement, `k-button-${this.fillMode}-base`);
    }
  }
  static ɵfac = function TimePickerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TimePickerComponent)(ɵɵdirectiveInject(BusViewService), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(PopupService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(PickerService), ɵɵdirectiveInject(IntlService), ɵɵdirectiveInject(AdaptiveService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _TimePickerComponent,
    selectors: [["kendo-timepicker"]],
    viewQuery: function TimePickerComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c14, 5, ViewContainerRef);
        ɵɵviewQuery(_c15, 5);
        ɵɵviewQuery(_c16, 7);
        ɵɵviewQuery(_c17, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.container = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.popupTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.toggleButton = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.actionSheet = _t.first);
      }
    },
    hostVars: 8,
    hostBindings: function TimePickerComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("k-readonly", ctx.readonly)("k-timepicker", ctx.wrapperClasses)("k-input", ctx.wrapperClasses)("k-disabled", ctx.disabledClass);
      }
    },
    inputs: {
      focusableId: "focusableId",
      disabled: "disabled",
      readonly: "readonly",
      readOnlyInput: "readOnlyInput",
      clearButton: "clearButton",
      format: "format",
      formatPlaceholder: "formatPlaceholder",
      placeholder: "placeholder",
      min: "min",
      max: "max",
      incompleteDateValidation: "incompleteDateValidation",
      autoSwitchParts: "autoSwitchParts",
      autoSwitchKeys: "autoSwitchKeys",
      enableMouseWheel: "enableMouseWheel",
      allowCaretMode: "allowCaretMode",
      cancelButton: "cancelButton",
      nowButton: "nowButton",
      steps: "steps",
      popupSettings: "popupSettings",
      tabindex: "tabindex",
      tabIndex: "tabIndex",
      adaptiveTitle: "adaptiveTitle",
      adaptiveSubtitle: "adaptiveSubtitle",
      rangeValidation: "rangeValidation",
      adaptiveMode: "adaptiveMode",
      value: "value",
      size: "size",
      rounded: "rounded",
      fillMode: "fillMode",
      inputAttributes: "inputAttributes"
    },
    outputs: {
      valueChange: "valueChange",
      onFocus: "focus",
      onBlur: "blur",
      open: "open",
      close: "close",
      escape: "escape"
    },
    exportAs: ["kendo-timepicker"],
    standalone: true,
    features: [ɵɵProvidersFeature([{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _TimePickerComponent),
      multi: true
    }, {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => _TimePickerComponent),
      multi: true
    }, {
      provide: KendoInput,
      useExisting: forwardRef(() => _TimePickerComponent)
    }, {
      provide: MultiTabStop,
      useExisting: forwardRef(() => _TimePickerComponent)
    }, LocalizationService, BusViewService, {
      provide: L10N_PREFIX,
      useValue: "kendo.timepicker"
    }, PickerService]), ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    decls: 17,
    vars: 42,
    consts: () => {
      let i18n_24;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_24 = goog.getMsg("Set");
        i18n_24 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_24;
      } else {
        i18n_24 = $localize`:kendo.timepicker.accept|The Accept button text in the timepicker component:Set`;
      }
      let i18n_25;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_25 = goog.getMsg("Set time");
        i18n_25 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_25;
      } else {
        i18n_25 = $localize`:kendo.timepicker.acceptLabel|The label for the Accept button in the timepicker component:Set time`;
      }
      let i18n_26;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_26 = goog.getMsg("Cancel");
        i18n_26 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_26;
      } else {
        i18n_26 = $localize`:kendo.timepicker.cancel|The Cancel button text in the timepicker component:Cancel`;
      }
      let i18n_27;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_27 = goog.getMsg("Cancel changes");
        i18n_27 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_27;
      } else {
        i18n_27 = $localize`:kendo.timepicker.cancelLabel|The label for the Cancel button in the timepicker component:Cancel changes`;
      }
      let i18n_28;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_28 = goog.getMsg("Now");
        i18n_28 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_28;
      } else {
        i18n_28 = $localize`:kendo.timepicker.now|The Now button text in the timepicker component:Now`;
      }
      let i18n_29;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_29 = goog.getMsg("Select now");
        i18n_29 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_29;
      } else {
        i18n_29 = $localize`:kendo.timepicker.nowLabel|The label for the Now button in the timepicker component:Select now`;
      }
      let i18n_30;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_30 = goog.getMsg("Toggle time list");
        i18n_30 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_30;
      } else {
        i18n_30 = $localize`:kendo.timepicker.toggle|The label for the toggle button in the timepicker component:Toggle time list`;
      }
      let i18n_31;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_31 = goog.getMsg("Hour");
        i18n_31 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_31;
      } else {
        i18n_31 = $localize`:kendo.timepicker.hour|The label for the hour part in the timepicker component:Hour`;
      }
      let i18n_32;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_32 = goog.getMsg("Minute");
        i18n_32 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_32;
      } else {
        i18n_32 = $localize`:kendo.timepicker.minute|The label for the minute part in the timepicker component:Minute`;
      }
      let i18n_33;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_33 = goog.getMsg("Second");
        i18n_33 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_33;
      } else {
        i18n_33 = $localize`:kendo.timepicker.second|The label for the second part in the timepicker component:Second`;
      }
      let i18n_34;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_34 = goog.getMsg("Millisecond");
        i18n_34 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_34;
      } else {
        i18n_34 = $localize`:kendo.timepicker.millisecond|The label for the millisecond part in the timepicker component:Millisecond`;
      }
      let i18n_35;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_35 = goog.getMsg("Dayperiod");
        i18n_35 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_35;
      } else {
        i18n_35 = $localize`:kendo.timepicker.dayperiod|The label for the dayperiod part in the timepicker component:Dayperiod`;
      }
      let i18n_36;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_36 = goog.getMsg("clear");
        i18n_36 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_36;
      } else {
        i18n_36 = $localize`:kendo.timepicker.clearTitle|The title of the clear button:clear`;
      }
      let i18n_37;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_37 = goog.getMsg("Close");
        i18n_37 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_37;
      } else {
        i18n_37 = $localize`:kendo.timepicker.adaptiveCloseButtonTitle|The title of the Close button of the ActionSheet that is rendered instead of the Popup when using small screen devices in adaptive mode:Close`;
      }
      return [["input", ""], ["toggleButton", ""], ["popupTemplate", ""], ["container", ""], ["actionSheet", ""], ["timeSelectorTemplate", ""], ["timeSelector", ""], ["kendoTimePickerLocalizedMessages", "", "accept", i18n_24, "acceptLabel", i18n_25, "cancel", i18n_26, "cancelLabel", i18n_27, "now", i18n_28, "nowLabel", i18n_29, "toggle", i18n_30, "hour", i18n_31, "minute", i18n_32, "second", i18n_33, "millisecond", i18n_34, "dayperiod", i18n_35, "clearTitle", i18n_36, "adaptiveCloseButtonTitle", i18n_37], ["pickerType", "timepicker", "hasPopup", "dialog", "fillMode", "none", "rounded", "none", "size", "none", 3, "valueChange", "click", "isPopupOpen", "disabled", "clearButton", "readonly", "role", "ariaReadOnly", "format", "formatPlaceholder", "placeholder", "focusableId", "min", "max", "incompleteDateValidation", "autoSwitchParts", "autoSwitchKeys", "enableMouseWheel", "allowCaretMode", "steps", "tabindex", "isRequired", "title", "inputAttributes", "value"], [3, "clearTitle"], ["type", "button", "tabindex", "-1", 1, "k-input-button", "k-button", "k-icon-button", 3, "kendoEventsOutsideAngular", "scope"], ["name", "clock", "innerCssClass", "k-button-icon", 3, "svgIcon"], [3, "overlayClick", "collapse", "titleId", "cssClass", "cssStyle"], ["kendoActionSheetTemplate", ""], [4, "ngTemplateOutlet"], [3, "resize"], [1, "k-actionsheet-titlebar"], [1, "k-actionsheet-titlebar-group"], [1, "k-actionsheet-title"], [1, "k-text-center"], [1, "k-actionsheet-subtitle", "k-text-center"], [1, "k-actionsheet-actions"], ["kendoButton", "", "type", "button", "icon", "check", "fillMode", "flat", "size", "large", 3, "click", "svgIcon", "tabIndex"], [1, "k-actionsheet-content"], [1, "k-actions", "k-actions-stretched", "k-actions-horizontal", "k-actionsheet-footer"], ["kendoButton", "", "type", "button", "size", "large", 1, "k-time-cancel", 3, "click"], ["kendoButton", "", "type", "button", "size", "large", "themeColor", "primary", 1, "k-time-accept", 3, "click"], [3, "valueChange", "valueReject", "tabOutLastPart", "tabOutFirstPart", "tabOutNow", "cancelButton", "setButton", "nowButton", "format", "min", "max", "steps", "value", "isAdaptiveEnabled", "kendoEventsOutsideAngular", "scope"], [3, "acceptLabel", "accept", "cancelLabel", "cancel", "nowLabel", "now", "hour", "minute", "second", "millisecond", "dayperiod"]];
    },
    template: function TimePickerComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵelementContainer(0, 7);
        ɵɵelementStart(1, "kendo-dateinput", 8, 0);
        ɵɵlistener("valueChange", function TimePickerComponent_Template_kendo_dateinput_valueChange_1_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.handleInputChange($event));
        })("click", function TimePickerComponent_Template_kendo_dateinput_click_1_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.handleDateInputClick());
        });
        ɵɵelement(3, "kendo-dateinput-messages", 9);
        ɵɵelementEnd();
        ɵɵelementStart(4, "button", 10, 1);
        ɵɵelement(6, "kendo-icon-wrapper", 11);
        ɵɵelementEnd();
        ɵɵtemplate(7, TimePickerComponent_ng_template_7_Template, 1, 1, "ng-template", null, 2, ɵɵtemplateRefExtractor);
        ɵɵelementContainer(9, null, 3);
        ɵɵtemplate(11, TimePickerComponent_Conditional_11_Template, 1, 0, "kendo-resize-sensor");
        ɵɵelementStart(12, "kendo-actionsheet", 12, 4);
        ɵɵlistener("overlayClick", function TimePickerComponent_Template_kendo_actionsheet_overlayClick_12_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.show = false);
        })("collapse", function TimePickerComponent_Template_kendo_actionsheet_collapse_12_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.handleActionSheetCollapse());
        });
        ɵɵtemplate(14, TimePickerComponent_ng_template_14_Template, 14, 12, "ng-template", 13);
        ɵɵelementEnd();
        ɵɵtemplate(15, TimePickerComponent_ng_template_15_Template, 3, 27, "ng-template", null, 5, ɵɵtemplateRefExtractor);
      }
      if (rf & 2) {
        ɵɵadvance();
        ɵɵproperty("isPopupOpen", ctx.show)("disabled", ctx.disabled)("clearButton", ctx.clearButton)("readonly", ctx.readonly || ctx.readOnlyInput)("role", "combobox")("ariaReadOnly", ctx.readonly)("format", ctx.format)("formatPlaceholder", ctx.formatPlaceholder)("placeholder", ctx.placeholder)("focusableId", ctx.focusableId)("min", ctx.normalizeTime(ctx.min))("max", ctx.normalizeTime(ctx.max))("incompleteDateValidation", ctx.incompleteDateValidation)("autoSwitchParts", ctx.autoSwitchParts)("autoSwitchKeys", ctx.autoSwitchKeys)("enableMouseWheel", ctx.enableMouseWheel)("allowCaretMode", ctx.allowCaretMode)("steps", ctx.steps)("tabindex", !ctx.show ? ctx.tabindex : -1)("isRequired", ctx.isControlRequired)("title", ctx.adaptiveTitle)("inputAttributes", ctx.inputAttributes)("value", ctx.value);
        ɵɵadvance(2);
        ɵɵproperty("clearTitle", ctx.localization.get("clearTitle"));
        ɵɵadvance();
        ɵɵproperty("kendoEventsOutsideAngular", ɵɵpureFunction2(34, _c18, ctx.handleIconClick, ctx.handleMousedown))("scope", ctx);
        ɵɵattribute("title", ctx.localization.get("toggle"))("aria-label", ctx.localization.get("toggle"))("disabled", ctx.disabled ? "" : null);
        ɵɵadvance(2);
        ɵɵproperty("svgIcon", ctx.clockIcon);
        ɵɵadvance(5);
        ɵɵconditional(ctx.isAdaptiveModeEnabled ? 11 : -1);
        ɵɵadvance();
        ɵɵproperty("titleId", ctx.focusableId)("cssClass", ɵɵpureFunction2(37, _c19, ctx.windowSize === "small", ctx.windowSize === "medium"))("cssStyle", ɵɵpureFunction1(40, _c20, ctx.windowSize === "small" ? "100vh" : "60vh"));
      }
    },
    dependencies: [TimePickerLocalizedMessagesDirective, DateInputComponent, DateInputCustomMessagesComponent, EventsOutsideAngularDirective, IconWrapperComponent, NgTemplateOutlet, ResizeSensorComponent, ActionSheetComponent, ActionSheetTemplateDirective, ButtonComponent, TimeSelectorComponent, TimeSelectorCustomMessagesComponent],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimePickerComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      exportAs: "kendo-timepicker",
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => TimePickerComponent),
        multi: true
      }, {
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => TimePickerComponent),
        multi: true
      }, {
        provide: KendoInput,
        useExisting: forwardRef(() => TimePickerComponent)
      }, {
        provide: MultiTabStop,
        useExisting: forwardRef(() => TimePickerComponent)
      }, LocalizationService, BusViewService, {
        provide: L10N_PREFIX,
        useValue: "kendo.timepicker"
      }, PickerService],
      selector: "kendo-timepicker",
      template: `
        <ng-container kendoTimePickerLocalizedMessages
          i18n-accept="kendo.timepicker.accept|The Accept button text in the timepicker component"
          accept="Set"
        
          i18n-acceptLabel="kendo.timepicker.acceptLabel|The label for the Accept button in the timepicker component"
          acceptLabel="Set time"
        
          i18n-cancel="kendo.timepicker.cancel|The Cancel button text in the timepicker component"
          cancel="Cancel"
        
          i18n-cancelLabel="kendo.timepicker.cancelLabel|The label for the Cancel button in the timepicker component"
          cancelLabel="Cancel changes"
        
          i18n-now="kendo.timepicker.now|The Now button text in the timepicker component"
          now="Now"
        
          i18n-nowLabel="kendo.timepicker.nowLabel|The label for the Now button in the timepicker component"
          nowLabel="Select now"
        
          i18n-toggle="kendo.timepicker.toggle|The label for the toggle button in the timepicker component"
          toggle="Toggle time list"
        
          i18n-hour="kendo.timepicker.hour|The label for the hour part in the timepicker component"
          hour="Hour"
        
          i18n-minute="kendo.timepicker.minute|The label for the minute part in the timepicker component"
          minute="Minute"
        
          i18n-second="kendo.timepicker.second|The label for the second part in the timepicker component"
          second="Second"
        
          i18n-millisecond="kendo.timepicker.millisecond|The label for the millisecond part in the timepicker component"
          millisecond="Millisecond"
        
          i18n-dayperiod="kendo.timepicker.dayperiod|The label for the dayperiod part in the timepicker component"
          dayperiod="Dayperiod"
        
          i18n-clearTitle="kendo.timepicker.clearTitle|The title of the clear button"
          clearTitle="clear"
        
          i18n-adaptiveCloseButtonTitle="kendo.timepicker.adaptiveCloseButtonTitle|The title of the Close button of the ActionSheet that is rendered instead of the Popup when using small screen devices in adaptive mode"
          adaptiveCloseButtonTitle="Close"
          >
        </ng-container>
        <kendo-dateinput
          #input
          pickerType="timepicker"
          hasPopup="dialog"
          [isPopupOpen]="show"
          [disabled]="disabled"
          [clearButton]="clearButton"
          [readonly]="readonly || readOnlyInput"
          [role]="'combobox'"
          [ariaReadOnly]="readonly"
          [format]="format"
          [formatPlaceholder]="formatPlaceholder"
          [placeholder]="placeholder"
          [focusableId]="focusableId"
          [min]="normalizeTime(min)"
          [max]="normalizeTime(max)"
          [incompleteDateValidation]="incompleteDateValidation"
          [autoSwitchParts]="autoSwitchParts"
          [autoSwitchKeys]="autoSwitchKeys"
          [enableMouseWheel]="enableMouseWheel"
          [allowCaretMode]="allowCaretMode"
          fillMode="none"
          rounded="none"
          size="none"
          [steps]="steps"
          [tabindex]="!show ? tabindex : -1"
          [isRequired]="isControlRequired"
          [title]="adaptiveTitle"
          [inputAttributes]="inputAttributes"
          [value]="value"
          (valueChange)="handleInputChange($event)"
          (click)="handleDateInputClick()"
          >
          <kendo-dateinput-messages
            [clearTitle]="localization.get('clearTitle')"
            >
          </kendo-dateinput-messages>
        </kendo-dateinput>
        <button
          #toggleButton
          type="button"
          tabindex="-1"
          class="k-input-button k-button k-icon-button"
          [attr.title]="localization.get('toggle')"
          [attr.aria-label]="localization.get('toggle')"
          [attr.disabled]="disabled ? '' : null"
            [kendoEventsOutsideAngular]="{
                click: handleIconClick,
                mousedown: handleMousedown
            }"
          [scope]="this"
          >
          <kendo-icon-wrapper
            name="clock"
            [svgIcon]="clockIcon"
            innerCssClass="k-button-icon"
            >
          </kendo-icon-wrapper>
        </button>
        <ng-template #popupTemplate>
          <ng-container *ngTemplateOutlet="timeSelectorTemplate"></ng-container>
        </ng-template>
        <ng-container #container></ng-container>
        
        @if (isAdaptiveModeEnabled) {
          <kendo-resize-sensor (resize)="onResize()"></kendo-resize-sensor>
        }
        <kendo-actionsheet
          #actionSheet
          (overlayClick)="show=false"
          (collapse)="handleActionSheetCollapse()"
          [titleId]="focusableId"
            [cssClass]="{
                'k-adaptive-actionsheet': true,
                'k-actionsheet-fullscreen': windowSize === 'small',
                'k-actionsheet-bottom': windowSize === 'medium'
            }"
            [cssStyle]="{
                height: windowSize === 'small' ? '100vh' : '60vh'
            }"
          >
          <ng-template kendoActionSheetTemplate>
            <div class="k-actionsheet-titlebar">
              <div class="k-actionsheet-titlebar-group">
                <div class="k-actionsheet-title">
                  @if (adaptiveTitle) {
                    <div class="k-text-center">{{ adaptiveTitle }}</div>
                  }
                  @if (adaptiveSubtitle) {
                    <div class="k-actionsheet-subtitle k-text-center">{{ adaptiveSubtitle }}</div>
                  }
                </div>
                <div class="k-actionsheet-actions">
                  <button
                    kendoButton
                    type="button"
                    icon="check"
                    [attr.title]="localization.get('adaptiveCloseButtonTitle')"
                    [svgIcon]="checkIcon"
                    fillMode="flat"
                    size="large"
                    [tabIndex]="-1"
                    (click)="show = false">
                  </button>
                </div>
              </div>
            </div>
            <div class="k-actionsheet-content">
              <ng-container *ngTemplateOutlet="timeSelectorTemplate"></ng-container>
            </div>
            <div class="k-actions k-actions-stretched k-actions-horizontal k-actionsheet-footer">
              <button kendoButton
                type="button"
                (click)="handleReject()"
                size="large"
                class="k-time-cancel"
                [attr.title]="localization.get('cancelLabel')"
                [attr.aria-label]="localization.get('cancelLabel')"
                >
                {{localization.get('cancel')}}
              </button>
        
              <button kendoButton
                type="button"
                (click)="handleActionSheetAccept()"
                size="large"
                class="k-time-accept"
                themeColor="primary"
                [attr.title]="localization.get('acceptLabel')"
                [attr.aria-label]="localization.get('acceptLabel')"
                >
                {{localization.get('accept')}}
              </button>
            </div>
          </ng-template>
        </kendo-actionsheet>
        
        <ng-template #timeSelectorTemplate>
          <kendo-timeselector
            #timeSelector
            [class.k-timeselector-lg]="isAdaptive"
            [cancelButton]="cancelButton && !this.isAdaptive"
            [setButton]="!isAdaptive"
            [nowButton]="nowButton"
            [format]="format"
            [min]="min"
            [max]="max"
            [steps]="steps"
            [value]="value"
            [isAdaptiveEnabled]="isAdaptiveModeEnabled"
                [kendoEventsOutsideAngular]="{
                    keydown: handleKeydown,
                    mousedown: handleMousedown
                }"
            [scope]="this"
            (valueChange)="handleChange($event)"
            (valueReject)="handleReject()"
            (tabOutLastPart)="onTabOutLastPart()"
            (tabOutFirstPart)="onTabOutFirstPart()"
            (tabOutNow)="onTabOutNow()"
            >
            <kendo-timeselector-messages
              [acceptLabel]="localization.get('acceptLabel')"
              [accept]="localization.get('accept')"
              [cancelLabel]="localization.get('cancelLabel')"
              [cancel]="localization.get('cancel')"
              [nowLabel]="localization.get('nowLabel')"
              [now]="localization.get('now')"
              [hour]="localization.get('hour')"
              [minute]="localization.get('minute')"
              [second]="localization.get('second')"
              [millisecond]="localization.get('millisecond')"
              [dayperiod]="localization.get('dayperiod')"
              >
            </kendo-timeselector-messages>
          </kendo-timeselector>
        </ng-template>
        `,
      standalone: true,
      imports: [TimePickerLocalizedMessagesDirective, DateInputComponent, DateInputCustomMessagesComponent, EventsOutsideAngularDirective, IconWrapperComponent, NgTemplateOutlet, ResizeSensorComponent, ActionSheetComponent, ActionSheetTemplateDirective, ButtonComponent, TimeSelectorComponent, TimeSelectorCustomMessagesComponent]
    }]
  }], () => [{
    type: BusViewService
  }, {
    type: NgZone
  }, {
    type: LocalizationService
  }, {
    type: ChangeDetectorRef
  }, {
    type: PopupService
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: Injector
  }, {
    type: PickerService
  }, {
    type: IntlService
  }, {
    type: AdaptiveService
  }], {
    container: [{
      type: ViewChild,
      args: ["container", {
        read: ViewContainerRef,
        static: false
      }]
    }],
    popupTemplate: [{
      type: ViewChild,
      args: ["popupTemplate", {
        static: false
      }]
    }],
    toggleButton: [{
      type: ViewChild,
      args: ["toggleButton", {
        static: true
      }]
    }],
    actionSheet: [{
      type: ViewChild,
      args: ["actionSheet"]
    }],
    focusableId: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    readonly: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["class.k-readonly"]
    }],
    readOnlyInput: [{
      type: Input
    }],
    clearButton: [{
      type: Input
    }],
    format: [{
      type: Input
    }],
    formatPlaceholder: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    min: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    incompleteDateValidation: [{
      type: Input
    }],
    autoSwitchParts: [{
      type: Input
    }],
    autoSwitchKeys: [{
      type: Input
    }],
    enableMouseWheel: [{
      type: Input
    }],
    allowCaretMode: [{
      type: Input
    }],
    cancelButton: [{
      type: Input
    }],
    nowButton: [{
      type: Input
    }],
    steps: [{
      type: Input
    }],
    popupSettings: [{
      type: Input
    }],
    tabindex: [{
      type: Input
    }],
    tabIndex: [{
      type: Input
    }],
    adaptiveTitle: [{
      type: Input
    }],
    adaptiveSubtitle: [{
      type: Input
    }],
    rangeValidation: [{
      type: Input
    }],
    adaptiveMode: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    rounded: [{
      type: Input
    }],
    fillMode: [{
      type: Input
    }],
    inputAttributes: [{
      type: Input
    }],
    valueChange: [{
      type: Output
    }],
    onFocus: [{
      type: Output,
      args: ["focus"]
    }],
    onBlur: [{
      type: Output,
      args: ["blur"]
    }],
    open: [{
      type: Output
    }],
    close: [{
      type: Output
    }],
    escape: [{
      type: Output
    }],
    wrapperClasses: [{
      type: HostBinding,
      args: ["class.k-timepicker"]
    }, {
      type: HostBinding,
      args: ["class.k-input"]
    }],
    disabledClass: [{
      type: HostBinding,
      args: ["class.k-disabled"]
    }]
  });
})();
var DateTimePickerMessages = class _DateTimePickerMessages extends ComponentMessages {
  /**
   * The title of the **Toggle** button of the DateTimePicker.
   */
  toggle;
  /**
   * The text of the **Date** tab in the popup header of the DateTimePicker.
   */
  dateTab;
  /**
   * The label of the **Date** tab in the popup header of the DateTimePicker.
   */
  dateTabLabel;
  /**
   * The text of the **Time** tab in the popup header of the DateTimePicker.
   */
  timeTab;
  /**
   * The label of the **Time** tab in the popup header of the DateTimePicker.
   */
  timeTabLabel;
  /**
   * The text of the **Accept** button in the popup footer of the DateTimePicker.
   */
  accept;
  /**
   * The label of the **Accept** button in the popup footer of the DateTimePicker.
   */
  acceptLabel;
  /**
   * The text of the **Cancel** button in the popup footer of the DateTimePicker.
   */
  cancel;
  /**
   * The label of the **Cancel** button in the popup footer of the DateTimePicker.
   */
  cancelLabel;
  /**
   * The **Today** button text in the header of the Calendar.
   */
  today;
  /**
   * The text of the **Now** button in the popup header of the TimePicker.
   */
  now;
  /**
   * The label of the **Now** button in the popup header of the TimePicker.
   */
  nowLabel;
  /**
   * The title of the **Prev** button in the header of the Classic Calendar.
   */
  prevButtonTitle;
  /**
   * The title of the **Next** button in the header of the Classic Calendar.
   */
  nextButtonTitle;
  /**
   * The title of the **Parent View** button in the header of the Calendar.
   */
  parentViewButtonTitle;
  /**
   * The label of the **Hour** part in the TimePicker.
   */
  hour;
  /**
   * The label of the **Minute** part in the TimePicker.
   */
  minute;
  /**
   * The label of the **Second** part in the TimePicker.
   */
  second;
  /**
   * The label of the **Millisecond** part in the TimePicker.
   */
  millisecond;
  /**
   * The label of the **Dayperiod** part in the TimePicker.
   */
  dayperiod;
  /**
   * The title of the **Clear** button of the DateTimePicker.
   */
  clearTitle;
  /**
   * The title of the Close button of the ActionSheet that is rendered instead of the Popup when using small screen devices in adaptive mode.
   */
  adaptiveCloseButtonTitle;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵDateTimePickerMessages_BaseFactory;
    return function DateTimePickerMessages_Factory(__ngFactoryType__) {
      return (ɵDateTimePickerMessages_BaseFactory || (ɵDateTimePickerMessages_BaseFactory = ɵɵgetInheritedFactory(_DateTimePickerMessages)))(__ngFactoryType__ || _DateTimePickerMessages);
    };
  })();
  static ɵdir = ɵɵdefineDirective({
    type: _DateTimePickerMessages,
    selectors: [["kendo-datetimepicker-messages-base"]],
    inputs: {
      toggle: "toggle",
      dateTab: "dateTab",
      dateTabLabel: "dateTabLabel",
      timeTab: "timeTab",
      timeTabLabel: "timeTabLabel",
      accept: "accept",
      acceptLabel: "acceptLabel",
      cancel: "cancel",
      cancelLabel: "cancelLabel",
      today: "today",
      now: "now",
      nowLabel: "nowLabel",
      prevButtonTitle: "prevButtonTitle",
      nextButtonTitle: "nextButtonTitle",
      parentViewButtonTitle: "parentViewButtonTitle",
      hour: "hour",
      minute: "minute",
      second: "second",
      millisecond: "millisecond",
      dayperiod: "dayperiod",
      clearTitle: "clearTitle",
      adaptiveCloseButtonTitle: "adaptiveCloseButtonTitle"
    },
    features: [ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DateTimePickerMessages, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line
      selector: "kendo-datetimepicker-messages-base"
    }]
  }], null, {
    toggle: [{
      type: Input
    }],
    dateTab: [{
      type: Input
    }],
    dateTabLabel: [{
      type: Input
    }],
    timeTab: [{
      type: Input
    }],
    timeTabLabel: [{
      type: Input
    }],
    accept: [{
      type: Input
    }],
    acceptLabel: [{
      type: Input
    }],
    cancel: [{
      type: Input
    }],
    cancelLabel: [{
      type: Input
    }],
    today: [{
      type: Input
    }],
    now: [{
      type: Input
    }],
    nowLabel: [{
      type: Input
    }],
    prevButtonTitle: [{
      type: Input
    }],
    nextButtonTitle: [{
      type: Input
    }],
    parentViewButtonTitle: [{
      type: Input
    }],
    hour: [{
      type: Input
    }],
    minute: [{
      type: Input
    }],
    second: [{
      type: Input
    }],
    millisecond: [{
      type: Input
    }],
    dayperiod: [{
      type: Input
    }],
    clearTitle: [{
      type: Input
    }],
    adaptiveCloseButtonTitle: [{
      type: Input
    }]
  });
})();
var LocalizedMessagesDirective = class _LocalizedMessagesDirective extends DateTimePickerMessages {
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
    selectors: [["", "kendoDateTimePickerLocalizedMessages", ""]],
    standalone: true,
    features: [ɵɵProvidersFeature([{
      provide: DateTimePickerMessages,
      useExisting: forwardRef(() => _LocalizedMessagesDirective)
    }]), ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LocalizedMessagesDirective, [{
    type: Directive,
    args: [{
      providers: [{
        provide: DateTimePickerMessages,
        useExisting: forwardRef(() => LocalizedMessagesDirective)
      }],
      selector: "[kendoDateTimePickerLocalizedMessages]",
      standalone: true
    }]
  }], () => [{
    type: LocalizationService
  }], null);
})();
var timeFormatRegExp = new RegExp(`${TIME_PART.hour}|${TIME_PART.minute}|${TIME_PART.second}|${TIME_PART.dayperiod}|literal`);
var VALUE_DOC_LINK = "https://www.telerik.com/kendo-angular-ui/components/dateinputs/datetimepicker/integration-with-json/";
var MIN_MAX_DOC_LINK = "https://www.telerik.com/kendo-angular-ui/components/dateinputs/datetimepicker/date-time-limits/";
var DEFAULT_ACTIVE_TAB = "date";
var DEFAULT_DATEINPUT_FORMAT = "g";
var DEFAULT_TIMESELECTOR_FORMAT = "t";
var TWO_DIGIT_YEAR_MAX = 68;
var ACCEPT_BUTTON_SELECTOR = ".k-button.k-time-accept";
var CANCEL_BUTTON_SELECOTR = ".k-button.k-time-cancel";
var DATE_TAB_BUTTON_SELECTOR = ".k-button.k-group-start";
var TIME_TAB_BUTTON_SELECTOR = ".k-button.k-group-end";
var TODAY_BUTTON_SELECTOR = ".k-button.k-calendar-nav-today";
var DateTimePickerComponent = class _DateTimePickerComponent extends MultiTabStop {
  popupService;
  intl;
  cdr;
  pickerService;
  ngZone;
  wrapper;
  localization;
  disabledDatesService;
  renderer;
  injector;
  adaptiveService;
  /**
   * @hidden
   */
  calendarIcon = calendarIcon;
  /**
   * @hidden
   */
  clockIcon = clockIcon;
  /**
   * @hidden
   */
  hostClasses = true;
  /**
   * @hidden
   */
  get disabledClass() {
    return this.disabled;
  }
  /**
   * @hidden
   */
  toggleButton;
  /**
   * @hidden
   */
  get dateInput() {
    return this.pickerService.input;
  }
  /**
   * @hidden
   */
  get calendar() {
    return this.pickerService.calendar;
  }
  /**
   * @hidden
   */
  get timeSelector() {
    return this.pickerService.timeSelector;
  }
  /**
   * @hidden
   */
  focusableId;
  /**
   * Sets the format of the displayed Calendar week days' names.
   * @default 'short'
   */
  weekDaysFormat = "short";
  /**
   * Displays the days that fall out of the current month in the Calendar ([see example]({% slug datetimepicker_calendar_options %}#toc-displaying-other-month-days)).
   * You can set this to show or hide days from other months.
   *
   * For infinite Calendar the default value is `false`, while for classic Calendar it is `true`.
   */
  showOtherMonthDays;
  /**
   * Sets the value of the DateTimePicker component.
   * You can set a specific date and time for the picker to display and use.
   *
   * The `value` has to be a valid [JavaScript `Date`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date) instance or `null`.
   */
  set value(value) {
    this.verifyValue(value);
    this._value = cloneDate(value);
    this.setCalendarValue(value);
    this.cdr.markForCheck();
  }
  get value() {
    return this._value;
  }
  /**
   * Specifies the date format for displaying the input value
   * ([see example]({% slug formats_datetimepicker %})).
   *
   * When using a string format, the same format is applied regardless of whether the input is focused or blurred.
   * When using a FormatSettings object, you can specify different inputFormat and displayFormat values for focused and blurred states.
   *
   * If a FormatSettings object is provided, the displayFormat value will be used for the popup TimePicker.
   */
  set format(format) {
    this._format = format;
    const displayFormat = this.getDisplayFormat(format);
    this.timeSelectorFormat = this.getTimeSelectorFormat(displayFormat);
  }
  get format() {
    return this._format;
  }
  /**
   * The maximum year to assume to be from the current century when typing two-digit year value
   * ([see example]({% slug formats_datetimepicker %}#toc-two-digit-year-format)).
   *
   * The default value is 68, indicating that typing any value less than 69
   * will be assumed to be 20xx, while 69 and larger will be assumed to be 19xx.
   * @default 68
   */
  twoDigitYearMax = TWO_DIGIT_YEAR_MAX;
  /**
   * Specifies the [`tabindex`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) of the DateTimePicker.
   */
  set tabindex(value) {
    const tabindex = Number(value);
    const defaultValue = 0;
    this._tabindex = !isNaN(tabindex) ? tabindex : defaultValue;
  }
  get tabindex() {
    return this.disabled ? -1 : this._tabindex;
  }
  /**
   * Sets the dates of the DateTimePicker that will be disabled
   * ([see example]({% slug disabled_dates_datetimepicker %})).
   */
  set disabledDates(value) {
    this._disabledDates = value;
    this.disabledDatesService.initialize(value);
  }
  get disabledDates() {
    return this._disabledDates;
  }
  /**
   * Configures the popup settings of the DateTimePicker
   * ([see example]({% slug datetimepicker_popup_options %}#toc-customizing-the-popup)).
   *
   * The available options are animate which controls the popup animation and by default, the open and close animations are enabled.
   * The `appendTo` option controls the popup container and by default, the popup will be appended to the root component.
   * The `popupClass` option specifies a list of CSS classes that are used to style the popup.
   */
  set popupSettings(settings) {
    this._popupSettings = Object.assign({}, {
      animate: true
    }, settings);
  }
  get popupSettings() {
    return this._popupSettings;
  }
  /**
   * Specifies the title of the input element of the DateTimePicker and the title text rendered
   * in the header of the popup (action sheet). Applicable only when [`AdaptiveMode` is set to `auto`](slug:api_dateinputs_adaptivemode).
   * @default ''
   */
  adaptiveTitle = "";
  /**
   * Specifies the subtitle text rendered in the header of the popup (action sheet).
   * Applicable only when [`AdaptiveMode` is set to `auto`](slug:api_dateinputs_adaptivemode).
   * @default ''
   */
  adaptiveSubtitle = "";
  /**
   * Specifies the `disabled` property of the DateTimePicker and determines whether the component is active
   * ([see example]({% slug disabled_datetimepicker %})).
   * To learn how to disable the component in reactive forms, refer to the article on [Forms Support](slug:formssupport_datetimepicker#toc-managing-the-datetimepicker-disabled-state-in-reactive-forms).
   * @default false
   */
  disabled = false;
  /**
   * Specifies the read-only state of the DateTimePicker
   * ([see example]({% slug readonly_datetimepicker %}#toc-read-only-datetimepicker)).
   * @default false
   *
   * @default false
   */
  readonly = false;
  /**
   * Determines whether the input field of the DateTimePicker is read-only
   * ([see example]({% slug readonly_datetimepicker %}#toc-read-only-input)).
   *
   * If you set the [`readonly`]({% slug api_dateinputs_datetimepickercomponent %}#toc-readonly) property value to `true`,
   * the input will be rendered in a read-only state regardless of the `readOnlyInput` value.
   *
   * @default false
   */
  readOnlyInput = false;
  /**
   * Determines whether to display the **Cancel** button in the popup
   * ([see example]({% slug datetimepicker_popup_options %}#toc-toggling-the-cancel-button)).
   * @default true
   */
  cancelButton = true;
  /**
   * Defines the descriptions of the format sections in the input field
   * ([see example]({% slug placeholders_datetimepicker %}#toc-format-sections-description)).
   */
  formatPlaceholder;
  /**
   * Specifies the hint which is displayed by the DateTimePicker when its value is `null`
   * ([see example]({% slug placeholders_datetimepicker %}#toc-text-hints)).
   */
  placeholder;
  /**
   * Configures the incremental steps of the DateInput and the popup component of the TimePicker
   * ([see example]({% slug incrementalsteps_datetimepicker %})).
   */
  steps = {};
  /**
   * Specifies the focused date of the popup Calendar
   * ([see example]({% slug datetimepicker_calendar_options %}#toc-focused-dates)).
   */
  focusedDate;
  /**
   * Specifies the Calendar type.
   *
   * @default 'infinite'
   */
  calendarType = "infinite";
  /**
   * Determines whether to enable animation when navigating to previous/next Calendar view.
   * Applies to the [`classic`]({% slug api_dateinputs_datetimepickercomponent %}#toc-calendartype) Calendar only.
   *
   * The feature uses the [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API). In order to run the animation in browsers that do not support it, you need the `web-animations-js` polyfill.
   *
   * @default false
   */
  animateCalendarNavigation = false;
  /**
   * Determines whether to display a week number column in the `month` view of the popup Calendar
   * ([see example]({% slug datetimepicker_calendar_options %}#toc-week-number-column)).
   * @default false
   */
  weekNumber = false;
  /**
   * Specifies the smallest valid date.
   * The Calendar will not display dates before this value.
   * If the `min` value of the Calendar is selected, the TimePicker will not display
   * time entries before the specified time portion of this value
   * ([see example]({% slug dateranges_datetimepicker %})).
   */
  set min(value) {
    this._min = cloneDate(value);
    this.calendarMin = getDate(value || MIN_DATE);
  }
  get min() {
    return this._min;
  }
  /**
   * Specifies the biggest valid date.
   * The Calendar will not display dates after this value.
   * If the `max` value of the Calendar is selected, the TimePicker will not display
   * time entries after the specified time portion of this value
   * ([see example]({% slug dateranges_datetimepicker %})).
   */
  set max(value) {
    this._max = cloneDate(value);
    this.calendarMax = lastMillisecondOfDate(value || MAX_DATE);
  }
  get max() {
    return this._max;
  }
  /**
   * Determines whether the built-in `min` or `max` validators are enforced when validating a form
   * ([see example](slug:dateranges_datetimepicker)).
   *
   * @default true
   */
  rangeValidation = true;
  /**
   * Determines whether the built-in validator for disabled date ranges is enforced when validating a form
   * ([see example](slug:disabled_dates_datetimepicker)).
   * @default true
   */
  disabledDatesValidation = true;
  /**
   * Determines whether the built-in validation for incomplete dates is enforced when validating a form.
   * @default false
   */
  incompleteDateValidation = false;
  /**
   * Determines whether to auto correct invalid segments automatically.
   *
   * @default true
   */
  autoCorrectParts = true;
  /**
   * Determines whether to automatically move to the next segment after the user completes the current one.
   *
   * @default true
   */
  autoSwitchParts = true;
  /**
   * Specifies custom keys that move the focus to the next date format segment.
   */
  autoSwitchKeys = [];
  /**
   * Determines whether you can use the mouse scroll to increase or decrease the time segment values.
   *
   * @default true
   */
  enableMouseWheel = true;
  /**
   * Determines whether you can see a blinking caret inside the DateInput when possible.
   *
   * @default false
   */
  allowCaretMode = false;
  /**
   * Renders a clear button when set to `true` after the input text or DateTimePicker value has been changed.
   * Clicking this button resets the value of the component to `null` and triggers the `valueChange` event.
   * @default false
   */
  clearButton = false;
  /**
   * Auto fills the rest of the date to the current date when the component loses focus.
   *
   * @default false
   */
  autoFill = false;
  /**
   * Enables or disables the adaptive mode. The adaptive rendering is disabled by default.
   * @default 'none'
   */
  adaptiveMode = "none";
  /**
   * Specifies the HTML attributes of the inner focusable input element. You cannot change attributes that are essential for certain component functionalities.
   */
  inputAttributes;
  /**
   * Fires each time the user selects a new value
   * ([see example](slug:events_datetimepicker)).
   */
  valueChange = new EventEmitter();
  /**
   * Fires each time the popup is about to open
   * ([see example](slug:events_datetimepicker)).
   * This event is preventable. If you cancel the event by setting `event.preventDefault()`, the popup will remain closed.
   */
  open = new EventEmitter();
  /**
   * Fires each time the popup is about to close
   * ([see example](slug:events_datetimepicker)).
   * This event is preventable. If you cancel the event by setting `event.preventDefault()`, the popup will remain open.
   */
  close = new EventEmitter();
  /**
   * Fires each time the user focuses the component
   * ([see example](slug:events_datetimepicker)).
   */
  onFocus = new EventEmitter();
  /**
   * Fires each time the user blurs the component
   * ([see example](slug:events_datetimepicker)).
   */
  onBlur = new EventEmitter();
  /**
   * @hidden
   */
  escape = new EventEmitter();
  /**
   * Indicates whether the component is currently open. This is when the popup or action sheet is open.
   */
  get isOpen() {
    return this.actionSheet?.expanded || isPresent2(this.popupRef);
  }
  /**
   * Indicates whether the component or its popup content is focused.
   */
  get isActive() {
    return this._isActive;
  }
  set isActive(value) {
    if (value) {
      this.renderer.addClass(this.wrapper.nativeElement, "k-focus");
    } else {
      this.renderer.removeClass(this.wrapper.nativeElement, "k-focus");
    }
    this._isActive = value;
  }
  /**
   * Specifies the active tab when opening the popup
   * ([see example]({% slug datetimepicker_popup_options %}#toc-setting-the-default-tab)).
   */
  set defaultTab(tab) {
    this._defaultTab = tab || DEFAULT_ACTIVE_TAB;
    this.activeTab = this.defaultTab;
  }
  get defaultTab() {
    return this._defaultTab;
  }
  /**
   * Specifies the size of the component.
   *
   */
  set size(size) {
    this.renderer.removeClass(this.wrapper.nativeElement, getSizeClass("input", this.size));
    this.renderer.removeClass(this.toggleButton.nativeElement, getSizeClass("button", this.size));
    const newSize = size || DEFAULT_SIZE;
    if (newSize !== "none") {
      this.renderer.addClass(this.wrapper.nativeElement, getSizeClass("input", newSize));
      this.renderer.addClass(this.toggleButton.nativeElement, getSizeClass("button", newSize));
    }
    this._size = newSize;
  }
  get size() {
    return this._size;
  }
  /**
   * Specifies the border radius of the component.
   *
   */
  set rounded(rounded) {
    this.renderer.removeClass(this.wrapper.nativeElement, getRoundedClass(this.rounded));
    const newRounded = rounded || DEFAULT_ROUNDED;
    if (newRounded !== "none") {
      this.renderer.addClass(this.wrapper.nativeElement, getRoundedClass(newRounded));
    }
    this._rounded = newRounded;
  }
  get rounded() {
    return this._rounded;
  }
  /**
   * Specifies the fill mode of the component.
   *
   */
  set fillMode(fillMode) {
    this.renderer.removeClass(this.wrapper.nativeElement, getFillModeClass("input", this.fillMode));
    this.renderer.removeClass(this.toggleButton.nativeElement, getFillModeClass("button", this.fillMode));
    this.renderer.removeClass(this.toggleButton.nativeElement, `k-button-${this.fillMode}-base`);
    const newFillMode = fillMode || DEFAULT_FILL_MODE;
    if (newFillMode !== "none") {
      this.renderer.addClass(this.wrapper.nativeElement, getFillModeClass("input", newFillMode));
      this.renderer.addClass(this.toggleButton.nativeElement, getFillModeClass("button", newFillMode));
      this.renderer.addClass(this.toggleButton.nativeElement, `k-button-${newFillMode}-base`);
    }
    this._fillMode = newFillMode;
  }
  get fillMode() {
    return this._fillMode;
  }
  /**
   * @hidden
   */
  get tabSwitchTransition() {
    return this.isOpen ? null : "none";
  }
  /**
   * @hidden
   *
   * Indicates whether the Calendar will be disabled.
   * The inactive tab component gets disabled and becomes inaccessible on tab click.
   */
  get disableCalendar() {
    return this.activeTab !== "date" && !this.calendar.isActive;
  }
  /**
   * @hidden
   *
   * Indicates whether the TimeSelector will be disabled.
   * The inactive tab component gets disabled and becomes inaccessible on tab click.
   */
  get disableTimeSelector() {
    return this.activeTab !== "time" && !this.timeSelector.isActive;
  }
  /**
   * @hidden
   */
  get isAdaptiveModeEnabled() {
    return this.adaptiveMode === "auto";
  }
  /**
   * @hidden
   */
  get isAdaptive() {
    return this.isAdaptiveModeEnabled && this.windowSize !== "large";
  }
  /**
   * @hidden
   */
  onResize() {
    const currentWindowSize = this.adaptiveService.size;
    if (!this.isOpen || this.windowSize === currentWindowSize) {
      return;
    }
    if (this.actionSheet.expanded) {
      this.toggleActionSheet(false);
    } else {
      this._togglePopup(false);
    }
    this.windowSize = currentWindowSize;
  }
  /**
   * @hidden
   *
   * Controls whether the Calendar or the TimeSelector will be displayed.
   */
  activeTab = DEFAULT_ACTIVE_TAB;
  /**
   * @hidden
   *
   * Specifies the stripped time-related format that is used in the TimeSelector.
   * Updates each time the `format` property value changes.
   */
  timeSelectorFormat = DEFAULT_TIMESELECTOR_FORMAT;
  /**
   * @hidden
   */
  timeSelectorMin = cloneDate(MIN_TIME);
  /**
   * @hidden
   */
  timeSelectorMax = cloneDate(MAX_TIME);
  /**
   * @hidden
   */
  calendarValue = null;
  /**
   * @hidden
   */
  calendarMin = cloneDate(MIN_DATE);
  /**
   * @hidden
   */
  calendarMax = lastMillisecondOfDate(MAX_DATE);
  /**
   * @hidden
   */
  checkIcon = checkIcon;
  /**
   * @hidden
   */
  windowSize;
  /**
   * @hidden
   */
  cellTemplate;
  /**
   * @hidden
   */
  monthCellTemplate;
  /**
   * @hidden
   */
  yearCellTemplate;
  /**
   * @hidden
   */
  decadeCellTemplate;
  /**
   * @hidden
   */
  centuryCellTemplate;
  /**
   * @hidden
   */
  weekNumberTemplate;
  /**
   * @hidden
   */
  headerTitleTemplate;
  /**
   * @hidden
   */
  headerTemplate;
  /**
   * @hidden
   */
  set headerTemplateRef(template) {
    this.headerTemplate = template;
  }
  /**
   * @hidden
   */
  footerTemplate;
  /**
   * @hidden
   */
  set footerTemplateRef(template) {
    this.footerTemplate = template;
  }
  /**
   * Toggles the visibility of the Calendar footer.
   * @default false
   */
  footer = false;
  get activeTabComponent() {
    if (!this.isOpen) {
      return;
    }
    if (!(isPresent2(this.calendar) || isPresent2(this.timeSelector))) {
      this.cdr.detectChanges();
    }
    return this.activeTab === "date" ? this.calendar : this.timeSelector;
  }
  get appendTo() {
    const {
      appendTo
    } = this.popupSettings;
    if (!isPresent2(appendTo) || appendTo === "root") {
      return void 0;
    }
    return appendTo === "component" ? this.container : appendTo;
  }
  container;
  popupTemplate;
  actionSheet;
  get popupUID() {
    return this.calendar?.popupId;
  }
  get acceptButton() {
    if (this.isAdaptive) {
      return this.actionSheet.element.nativeElement.querySelector(ACCEPT_BUTTON_SELECTOR);
    } else {
      return this.popupRef?.popup.instance.container.nativeElement.querySelector(ACCEPT_BUTTON_SELECTOR);
    }
  }
  get cancelButtonElement() {
    if (this.isAdaptive) {
      return this.actionSheet.element.nativeElement.querySelector(CANCEL_BUTTON_SELECOTR);
    } else {
      return this.popupRef?.popup.instance.container.nativeElement.querySelector(CANCEL_BUTTON_SELECOTR);
    }
  }
  get dateTabButton() {
    if (this.isAdaptive) {
      return this.actionSheet.element.nativeElement.querySelector(DATE_TAB_BUTTON_SELECTOR);
    } else {
      return this.popupRef?.popup.instance.container.nativeElement.querySelector(DATE_TAB_BUTTON_SELECTOR);
    }
  }
  get timeTabButton() {
    if (this.isAdaptive) {
      return this.actionSheet.element.nativeElement.querySelector(TIME_TAB_BUTTON_SELECTOR);
    } else {
      return this.popupRef?.popup.instance.container.nativeElement.querySelector(TIME_TAB_BUTTON_SELECTOR);
    }
  }
  get todayButton() {
    if (this.isAdaptive) {
      return this.actionSheet.element.nativeElement.querySelector(TODAY_BUTTON_SELECTOR);
    } else {
      return this.popupRef?.popup.instance.container.nativeElement.querySelector(TODAY_BUTTON_SELECTOR);
    }
  }
  get popupClasses() {
    const classes = ["k-datetime-container", "k-datetimepicker-popup"];
    if (!this.popupSettings.popupClass) {
      return classes;
    }
    const parsedPopupClasses = parseCSSClassNames(this.popupSettings.popupClass);
    if (parsedPopupClasses?.length) {
      classes.push(...parsedPopupClasses);
    }
    return classes;
  }
  /**
   * @hidden
   */
  get formControl() {
    const ngControl = this.injector.get(NgControl, null);
    return ngControl?.control || null;
  }
  /**
   * @hidden
   */
  get isControlRequired() {
    return isControlRequired(this.formControl);
  }
  popupRef;
  _popupSettings = {
    animate: true
  };
  _value = null;
  _format = DEFAULT_DATEINPUT_FORMAT;
  _tabindex = 0;
  _defaultTab = DEFAULT_ACTIVE_TAB;
  _min = mergeDateAndTime(MIN_DATE, MIN_TIME);
  _max = mergeDateAndTime(MAX_DATE, MAX_TIME);
  _disabledDates;
  _isActive = false;
  onControlTouched = noop$2;
  onControlChange = noop$2;
  onValidatorChange = noop$2;
  minValidateFn = noop$2;
  maxValidateFn = noop$2;
  disabledDatesValidateFn = noop$2;
  incompleteValidator = noop$2;
  subscriptions = new Subscription();
  ariaActiveDescendantSubscription;
  _size = DEFAULT_SIZE;
  _rounded = DEFAULT_ROUNDED;
  _fillMode = DEFAULT_FILL_MODE;
  constructor(popupService, intl, cdr, pickerService, ngZone, wrapper, localization, disabledDatesService, renderer, injector, adaptiveService) {
    super();
    this.popupService = popupService;
    this.intl = intl;
    this.cdr = cdr;
    this.pickerService = pickerService;
    this.ngZone = ngZone;
    this.wrapper = wrapper;
    this.localization = localization;
    this.disabledDatesService = disabledDatesService;
    this.renderer = renderer;
    this.injector = injector;
    this.adaptiveService = adaptiveService;
    A(packageMetadata);
  }
  ngOnInit() {
    this.subscriptions.add(this.pickerService.onFocus.pipe(tap(this.detectPopupChanges.bind(this))).subscribe(this.handleFocus.bind(this)));
    this.subscriptions.add(this.pickerService.onBlur.subscribe(this.handleBlur.bind(this)));
    this.subscriptions.add(this.pickerService.sameDateSelected.subscribe(this.handleCalendarValueChange.bind(this)));
    this.subscriptions.add(this.localization.changes.subscribe(() => this.cdr.markForCheck()));
    this.subscriptions.add(this.pickerService.dateCompletenessChange.subscribe(this.handleDateCompletenessChange.bind(this)));
    if (isWindowAvailable()) {
      this.subscriptions.add(this.ngZone.runOutsideAngular(() => fromEvent(window, "blur").subscribe(() => {
        if (!this.isAdaptive) {
          this.handleCancel();
        }
      })));
    }
    this.focusableId = this.dateInput?.focusableId;
    this.minValidateFn = this.rangeValidation ? minValidator(this.min) : noop$2;
    this.maxValidateFn = this.rangeValidation ? maxValidator(this.max) : noop$2;
  }
  ngAfterViewInit() {
    this.setComponentClasses();
    this.windowSize = this.adaptiveService.size;
  }
  ngOnChanges(changes) {
    if (isPresent2(changes["min"]) || isPresent2(changes["max"])) {
      this.verifyMinMaxRange();
    }
    if (changes["min"] || changes["max"] || changes["rangeValidation"] || changes["disabledDatesValidation"] || changes["disabledDates"] || changes["incompleteDateValidation"]) {
      this.minValidateFn = this.rangeValidation ? minValidator(this.min) : noop$2;
      this.maxValidateFn = this.rangeValidation ? maxValidator(this.max) : noop$2;
      this.disabledDatesValidateFn = this.disabledDatesValidation ? disabledDatesValidator(this.disabledDatesService.isDateDisabled) : noop$2;
      this.incompleteValidator = this.incompleteDateValidation ? incompleteDateValidator() : noop$2;
      this.onValidatorChange();
    }
    if (!this.focusableId || changes["focusableId"]) {
      this.focusableId = this.dateInput?.focusableId;
    }
  }
  ngOnDestroy() {
    if (this.isOpen && !this.isAdaptive) {
      this.closePopup();
    }
    this.subscriptions.unsubscribe();
  }
  /**
   * Focuses the DateTimePicker input if the popup is closed.
   * Moves the focus to the popup content if the popup is open.
   */
  focus() {
    if (this.disabled) {
      return;
    }
    if (this.isOpen) {
      this.activeTabComponent.focus();
    } else {
      this.dateInput.focus();
    }
  }
  /**
   * Blurs the DateTimePicker component.
   */
  blur() {
    if (this.isOpen && this.activeTabComponent.isActive) {
      this.activeTabComponent.blur();
    } else {
      this.dateInput.blur();
    }
  }
  /**
   * Toggles the visibility of the popup or action sheet.
   * If you use the `toggle` method to show or hide the popup or action sheet,
   * the `open` and `close` events do not fire.
   *
   * @param show - The state of the popup.
   */
  toggle(show) {
    if (this.disabled || this.readonly || show === this.isOpen) {
      return;
    }
    const previousWindowSize = this.windowSize;
    this.windowSize = this.adaptiveService.size;
    if (previousWindowSize !== this.windowSize && !show) {
      if (previousWindowSize !== "large") {
        this.toggleActionSheet(show);
      } else {
        this._togglePopup(show);
      }
    } else {
      if (this.isAdaptive) {
        this.toggleActionSheet(show);
      } else {
        this._togglePopup(show);
      }
    }
  }
  /**
   * @hidden
   */
  writeValue(value) {
    this.verifyValue(value);
    this.value = cloneDate(value);
    this.cdr.markForCheck();
    if (!value && this.dateInput) {
      this.dateInput.placeholder = this.placeholder;
      this.dateInput.writeValue(value);
    }
  }
  /**
   * @hidden
   */
  registerOnChange(fn) {
    this.onControlChange = fn;
  }
  /**
   * @hidden
   */
  registerOnTouched(fn) {
    this.onControlTouched = fn;
  }
  /**
   * @hidden
   */
  setDisabledState(disabled) {
    this.disabled = disabled;
    this.cdr.markForCheck();
  }
  /**
   * @hidden
   */
  validate(control) {
    return this.minValidateFn(control) || this.maxValidateFn(control) || this.disabledDatesValidateFn(control) || this.incompleteValidator(control, this.dateInput && this.dateInput.isDateIncomplete);
  }
  /**
   * @hidden
   */
  registerOnValidatorChange(fn) {
    this.onValidatorChange = fn;
  }
  /**
   * @hidden
   *
   * Used by the TextBoxContainer to determine if the floating label will render in the input.
   */
  isEmpty() {
    return !isPresent2(this.value) && this.dateInput.isEmpty();
  }
  /**
   * @hidden
   */
  handleIconClick(event) {
    if (this.disabled || this.readonly) {
      return;
    }
    event.preventDefault();
    const runInZone = !this.isOpen || hasObservers(this.close);
    this.run(runInZone, () => {
      const shouldOpen = !this.isOpen;
      this.handleFocus();
      if (!shouldOpen) {
        this.dateInput.focus();
      }
      this.toggleDateTime(shouldOpen);
      this.switchFocus();
    });
  }
  /**
   * @hidden
   */
  handleFocus() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    if (hasObservers(this.onFocus)) {
      this.ngZone.run(() => this.onFocus.emit());
    }
  }
  /**
   * @hidden
   */
  handleBlur(event) {
    if (!this.isActive || this.focusTargetInComponent(event)) {
      return;
    }
    this.isActive = false;
    const isNgControlUntouched = this.wrapper.nativeElement.classList.contains("ng-untouched");
    const runInZone = isNgControlUntouched || hasObservers(this.onBlur) || this.isOpen && hasObservers(this.close);
    this.run(runInZone, () => {
      this.onBlur.emit();
      this.onControlTouched();
      this.toggleDateTime(false);
      this.cdr.markForCheck();
    });
  }
  /**
   * @hidden
   */
  changeActiveTab(tab) {
    if (!this.isOpen || this.activeTab === tab) {
      return;
    }
    if (!isEqual(this.timeSelector.value, this.timeSelector.current)) {
      this.timeSelector.handleAccept();
    }
    this.activeTab = tab;
    this.cdr.detectChanges();
    this.detectPopupChanges();
  }
  /**
   * @hidden
   */
  handleTabChangeTransitionEnd(dateTimeSelector, event) {
    if (event.target !== dateTimeSelector) {
      return;
    }
    if (this.activeTab === "time") {
      this.renderer.removeAttribute(this.dateInput?.inputElement, attributeNames.ariaActiveDescendant);
    }
    this.activeTabComponent.focus();
  }
  /**
   * @hidden
   */
  onTabOutLastPart() {
    if (this.calendarValue) {
      this.acceptButton.focus();
    } else if (!this.calendarValue && this.cancelButton) {
      this.cancelButtonElement.focus();
    } else {
      this.dateTabButton.focus();
    }
  }
  /**
   * @hidden
   */
  onTabOutFirstPart() {
    if (this.activeTab === "time") {
      this.renderer.removeClass(this.timeSelector.timeListWrappers.first.nativeElement, "k-focus");
      this.timeSelector.showNowButton ? this.timeSelector.now.nativeElement.focus() : this.timeTabButton.focus();
    }
  }
  /**
   * @hidden
   */
  onTabOutNow() {
    this.timeTabButton.focus();
  }
  /**
   * @hidden
   */
  handleAccept() {
    if (!this.isOpen) {
      return;
    }
    const candidate = mergeDateAndTime(this.calendar.value, this.timeSelector.current);
    const valueChangePresent = !isEqual(this.value, candidate);
    const runInZone = valueChangePresent || hasObservers(this.close);
    this.run(runInZone, () => {
      this.handleValueChange(candidate);
      this.dateInput.focus();
      this.toggleDateTime(false);
    });
  }
  /**
   * @hidden
   */
  handleCancel() {
    if (!this.isOpen) {
      return;
    }
    const runInZone = hasObservers(this.close);
    this.dateInput.focus();
    this.run(runInZone, () => this.toggleDateTime(false));
    hasObservers(this.escape) && this.escape.emit();
  }
  /**
   * @hidden
   */
  handleInputValueChange(value) {
    this.handleValueChange(value);
    if (this.isOpen) {
      this.toggleDateTime(false);
    }
  }
  /**
   * @hidden
   */
  handleDateInputClick() {
    this.windowSize = this.adaptiveService.size;
    if (this.isAdaptive) {
      this.toggleDateTime(true);
    } else if (this.isOpen) {
      this.toggleDateTime(false);
    }
  }
  /**
   * @hidden
   */
  handleCalendarValueChange() {
    this.setTimeSelectorMinMax(this.calendar.value);
    this.changeActiveTab("time");
  }
  /**
   * @hidden
   */
  handleKeyDown(event) {
    if (this.disabled || this.readonly) {
      return;
    }
    const {
      altKey
    } = event;
    const code = normalizeKeys(event);
    switch (code) {
      case (altKey && Keys.ArrowUp):
      case Keys.Escape:
        this.handleCancel();
        break;
      case (!this.isOpen && altKey && Keys.ArrowDown):
        this.ngZone.run(() => this.toggleDateTime(true));
        break;
      case (altKey && Keys.ArrowRight):
        this.changeActiveTab("time");
        break;
      case (altKey && Keys.ArrowLeft):
        this.changeActiveTab("date");
        break;
      case (this.isOpen && this.timeSelector.isActive && isPresent2(this.calendarValue) && Keys.Enter):
        this.handleAccept();
        break;
      default:
        return;
    }
  }
  /**
   * @hidden
   */
  handleTab(event) {
    event.preventDefault();
    const {
      shiftKey
    } = event;
    switch (event.target) {
      case this.acceptButton:
        if (!shiftKey) {
          this.cancelButton ? this.cancelButtonElement.focus() : this.dateTabButton.focus();
        } else {
          if (this.activeTab === "date") {
            this.calendar.monthView.list.nativeElement.focus();
          } else {
            this.timeSelector.timeLists.last.focus();
          }
        }
        break;
      case this.cancelButtonElement:
        if (this.calendarValue) {
          shiftKey ? this.acceptButton.focus() : this.dateTabButton.focus();
        } else {
          if (shiftKey) {
            if (this.activeTab === "date") {
              this.calendar.monthView.list.nativeElement.focus();
            } else {
              this.timeSelector.timeLists.last.focus();
            }
          } else {
            this.dateTabButton.focus();
          }
        }
        break;
      case this.dateTabButton:
        if (this.cancelButton) {
          this.cancelButtonElement.focus();
        }
        if (!this.cancelButton && this.calendarValue) {
          this.acceptButton.focus();
        }
        if (!this.cancelButton && !this.calendarValue) {
          if (this.activeTab === "date") {
            this.calendar.monthView.list.nativeElement.focus();
          } else {
            this.timeSelector.timeLists.last.focus();
          }
        }
        break;
      case this.timeTabButton:
        if (this.activeTab === "time") {
          this.timeSelector.showNowButton ? this.timeSelector.now.nativeElement.focus() : this.timeSelector.timeLists.first.focus();
        } else {
          this.todayButton.focus();
        }
        break;
      default:
        break;
    }
  }
  /**
   * @hidden
   */
  handleActionSheetCollapse() {
    this.cdr.markForCheck();
    this.resetActiveTab();
  }
  /**
   * @hidden
   *
   * Prevents the diversion of the focus from the currently active element in the component.
   */
  preventMouseDown(event) {
    event.preventDefault();
  }
  /**
   * @hidden
   */
  toggleActionSheet(show) {
    if (isPresent2(show) && show && !this.isOpen) {
      this.actionSheet.toggle();
      this.renderer.setAttribute(this.actionSheet.element.nativeElement, "id", this.popupUID);
      this.renderer.setAttribute(this.dateInput?.inputElement, attributeNames.ariaControls, this.popupUID);
      this.setAriaActiveDescendant();
    } else if (isPresent2(show) && !show && this.isOpen) {
      this.handleBlur();
      this.actionSheet.toggle();
      this.ariaActiveDescendantSubscription.unsubscribe();
      if (this.dateInput) {
        this.renderer.removeAttribute(this.dateInput.inputElement, attributeNames.ariaActiveDescendant);
        this.renderer.removeAttribute(this.dateInput.inputElement, attributeNames.ariaControls);
        this.dateInput.focus();
      }
    }
  }
  _togglePopup(show) {
    const shouldOpen = isPresent2(show) ? show : !this.isOpen;
    if (shouldOpen) {
      this.openPopup();
      return;
    }
    this.closePopup();
    this.resetActiveTab();
  }
  /**
   * Changes the tab and the calendar or clock icon to the designated default.
   */
  resetActiveTab() {
    if (this.activeTab !== this.defaultTab) {
      this.activeTab = this.defaultTab;
      this.cdr.detectChanges();
    }
  }
  verifyValue(value) {
    if (!isDevMode()) {
      return;
    }
    if (isPresent2(value) && !(value instanceof Date)) {
      throw new Error(`The 'value' should be a valid JavaScript Date instance or null. Check ${VALUE_DOC_LINK} for possible resolution.`);
    }
  }
  verifyMinMaxRange() {
    if (!isDevMode()) {
      return;
    }
    if (!isValidRange(this.min, this.max)) {
      throw new Error(`The max value should be bigger than the min. See ${MIN_MAX_DOC_LINK}.`);
    }
  }
  /**
   * Extracts the time slots and literals that are not preceded by date parts
   * and combines the resulting parts into a string.
   * If the provided `format` value does not contain any time parts,
   * returns the designated format of the default popup component of the `TimePicker`.
   */
  getTimeSelectorFormat(format) {
    const timeSelectorFormat = this.intl.splitDateFormat(format).filter(this.timeFormatPartFilter).reduce((format2, part) => format2 += part.pattern, "");
    return timeSelectorFormat || DEFAULT_TIMESELECTOR_FORMAT;
  }
  /**
   * Extracts the `displayFormat` from the provided `string | FormatSettings` value.
   * Falls back to the default input value if a falsy value parameter is passed.
   */
  getDisplayFormat(format) {
    if (!format) {
      return DEFAULT_DATEINPUT_FORMAT;
    }
    if (typeof format === "string") {
      return format;
    } else {
      return format.displayFormat;
    }
  }
  /**
   * The filter expression that filters out all format parts
   * except for `hour`, `minute`, `second`, `dayperiod`, and specific literals.
   * Literals remain only if they are not preceded by date parts.
   */
  timeFormatPartFilter(part, index, parts) {
    const previousPart = index >= 1 && parts[index - 1];
    if (previousPart && part.type === "literal") {
      return timeFormatRegExp.test(previousPart.type);
    }
    return timeFormatRegExp.test(part.type);
  }
  /**
   * @hidden
   */
  toggleDateTime(open) {
    if (open === this.isOpen) {
      return;
    }
    const event = new PreventableEvent();
    if (open) {
      this.open.emit(event);
    } else {
      this.close.emit(event);
    }
    if (event.isDefaultPrevented()) {
      return;
    }
    this.toggle(open);
    this.switchFocus();
  }
  switchFocus() {
    if (!this.isActive) {
      return;
    }
    if (this.isOpen) {
      this.activeTabComponent.focus();
    } else if (!touchEnabled) {
      this.dateInput.focus();
    } else if (!this.dateInput.isActive) {
      this.handleBlur();
    }
  }
  openPopup() {
    this.setCalendarValue(this.value);
    this.setTimeSelectorMinMax(this.value);
    const direction = this.localization.rtl ? "right" : "left";
    const appendToComponent = typeof this.popupSettings.appendTo === "string" && this.popupSettings.appendTo === "component";
    this.popupRef = this.popupService.open({
      anchor: this.wrapper,
      content: this.popupTemplate,
      positionMode: appendToComponent ? "fixed" : "absolute",
      animate: this.popupSettings.animate,
      appendTo: this.appendTo,
      popupClass: this.popupClasses,
      anchorAlign: {
        vertical: "bottom",
        horizontal: direction
      },
      popupAlign: {
        vertical: "top",
        horizontal: direction
      }
    });
    this.popupRef.popupElement.setAttribute("id", this.popupUID);
    this.renderer.setAttribute(this.dateInput?.inputElement, attributeNames.ariaControls, this.popupUID);
    this.setAriaActiveDescendant();
    this.popupRef.popupAnchorViewportLeave.subscribe(() => this.handleCancel());
    if (this.calendar.type === "infinite") {
      this.subscriptions.add(fromEvent(this.calendar.monthView.list.nativeElement, "keydown").subscribe((event) => {
        const {
          code,
          shiftKey
        } = event;
        if (code === Keys.Tab && !shiftKey) {
          event.preventDefault();
          if (!this.calendarValue && !this.cancelButton) {
            this.dateTabButton.focus();
          } else if (this.calendarValue) {
            this.acceptButton.focus();
          } else if (this.cancelButton) {
            this.cancelButtonElement.focus();
          }
        }
      }));
    }
  }
  setAriaActiveDescendant() {
    const focusedCellChangeEvent = this.calendar.type === "infinite" ? this.calendar.monthView.focusedCellChange : this.calendar.multiViewCalendar.viewList.focusedCellChange;
    this.ariaActiveDescendantSubscription = focusedCellChangeEvent.subscribe((id) => this.renderer.setAttribute(this.dateInput?.inputElement, attributeNames.ariaActiveDescendant, id));
  }
  closePopup() {
    if (!this.isOpen) {
      return;
    }
    this.ariaActiveDescendantSubscription.unsubscribe();
    if (this.dateInput) {
      this.renderer.removeAttribute(this.dateInput?.inputElement, attributeNames.ariaControls);
      this.renderer.removeAttribute(this.dateInput?.inputElement, attributeNames.ariaActiveDescendant);
    }
    this.popupRef.close();
    this.popupRef = null;
  }
  handleValueChange(value) {
    if (isEqual(this.value, value)) {
      if (this.incompleteDateValidation) {
        this.onControlChange(cloneDate(value));
      }
      return;
    }
    this.value = cloneDate(value);
    this.onControlChange(cloneDate(value));
    this.valueChange.emit(cloneDate(value));
  }
  /**
   * Indicates whether the focus target is part of this component.
   * Checks whether the focus target is inside the component or in the popup.
   */
  focusTargetInComponent(event) {
    if (!isPresent2(event)) {
      return false;
    }
    const relatedTarget = event.relatedTarget || document.activeElement;
    const focusInPopup = isPresent2(this.popupRef) && this.popupRef.popupElement.contains(relatedTarget);
    const focusInWrapper = this.wrapper.nativeElement.contains(relatedTarget);
    const isInsideActionSheet = this.actionSheet && (this.actionSheet.element.nativeElement.contains(event.target) || this.actionSheet.element.nativeElement.contains(relatedTarget));
    return focusInPopup || focusInWrapper || isInsideActionSheet;
  }
  setTimeSelectorMinMax(selectedDate) {
    const minDateSelected = isPresent2(selectedDate) && isPresent2(this.min) && isEqual(getDate(selectedDate), getDate(this.min));
    this.timeSelectorMin = cloneDate(minDateSelected ? this.min : MIN_TIME);
    const maxDateSelected = isPresent2(selectedDate) && isPresent2(this.max) && isEqual(getDate(selectedDate), getDate(this.max));
    this.timeSelectorMax = cloneDate(maxDateSelected ? this.max : MAX_TIME);
  }
  setCalendarValue(value) {
    const isInCalendarRange = isPresent2(value) && isInRange(value, this.calendarMin, this.calendarMax);
    this.calendarValue = isInCalendarRange ? getDate(value) : null;
  }
  /**
   * Runs a popup change detection if the popup is available.
   */
  detectPopupChanges() {
    if (!this.isOpen || this.isAdaptive) {
      return;
    }
    this.popupRef.popup.changeDetectorRef.detectChanges();
  }
  /**
   * Runs the provided function either in the Angular zone or in the current zone.
   * The execution zone depends on the predicate `runInZone` value that is passed.
   */
  run(runInZone, fn) {
    if (runInZone) {
      this.ngZone.run(() => fn());
    } else {
      fn();
    }
  }
  handleDateCompletenessChange() {
    this.cdr.markForCheck();
    this.ngZone.run(() => this.onValidatorChange());
  }
  setComponentClasses() {
    if (this.size) {
      this.renderer.addClass(this.wrapper.nativeElement, getSizeClass("input", this.size));
      this.renderer.addClass(this.toggleButton.nativeElement, getSizeClass("button", this.size));
    }
    if (this.rounded) {
      this.renderer.addClass(this.wrapper.nativeElement, getRoundedClass(this.rounded));
    }
    if (this.fillMode) {
      this.renderer.addClass(this.wrapper.nativeElement, getFillModeClass("input", this.fillMode));
      this.renderer.addClass(this.toggleButton.nativeElement, getFillModeClass("button", this.fillMode));
      this.renderer.addClass(this.toggleButton.nativeElement, `k-button-${this.fillMode}-base`);
    }
  }
  static ɵfac = function DateTimePickerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DateTimePickerComponent)(ɵɵdirectiveInject(PopupService), ɵɵdirectiveInject(IntlService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(PickerService), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(DisabledDatesService), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(AdaptiveService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _DateTimePickerComponent,
    selectors: [["kendo-datetimepicker"]],
    contentQueries: function DateTimePickerComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, CellTemplateDirective, 5);
        ɵɵcontentQuery(dirIndex, MonthCellTemplateDirective, 5);
        ɵɵcontentQuery(dirIndex, YearCellTemplateDirective, 5);
        ɵɵcontentQuery(dirIndex, DecadeCellTemplateDirective, 5);
        ɵɵcontentQuery(dirIndex, CenturyCellTemplateDirective, 5);
        ɵɵcontentQuery(dirIndex, WeekNumberCellTemplateDirective, 5);
        ɵɵcontentQuery(dirIndex, HeaderTitleTemplateDirective, 5);
        ɵɵcontentQuery(dirIndex, HeaderTemplateDirective, 5);
        ɵɵcontentQuery(dirIndex, FooterTemplateDirective, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.cellTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.monthCellTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.yearCellTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.decadeCellTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.centuryCellTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.weekNumberTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.headerTitleTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.headerTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.footerTemplate = _t.first);
      }
    },
    viewQuery: function DateTimePickerComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c16, 7);
        ɵɵviewQuery(_c14, 7, ViewContainerRef);
        ɵɵviewQuery(_c15, 7, TemplateRef);
        ɵɵviewQuery(_c17, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.toggleButton = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.container = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.popupTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.actionSheet = _t.first);
      }
    },
    hostVars: 8,
    hostBindings: function DateTimePickerComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("k-datetimepicker", ctx.hostClasses)("k-input", ctx.hostClasses)("k-disabled", ctx.disabledClass)("k-readonly", ctx.readonly);
      }
    },
    inputs: {
      focusableId: "focusableId",
      weekDaysFormat: "weekDaysFormat",
      showOtherMonthDays: "showOtherMonthDays",
      value: "value",
      format: "format",
      twoDigitYearMax: "twoDigitYearMax",
      tabindex: "tabindex",
      disabledDates: "disabledDates",
      popupSettings: "popupSettings",
      adaptiveTitle: "adaptiveTitle",
      adaptiveSubtitle: "adaptiveSubtitle",
      disabled: "disabled",
      readonly: "readonly",
      readOnlyInput: "readOnlyInput",
      cancelButton: "cancelButton",
      formatPlaceholder: "formatPlaceholder",
      placeholder: "placeholder",
      steps: "steps",
      focusedDate: "focusedDate",
      calendarType: "calendarType",
      animateCalendarNavigation: "animateCalendarNavigation",
      weekNumber: "weekNumber",
      min: "min",
      max: "max",
      rangeValidation: "rangeValidation",
      disabledDatesValidation: "disabledDatesValidation",
      incompleteDateValidation: "incompleteDateValidation",
      autoCorrectParts: "autoCorrectParts",
      autoSwitchParts: "autoSwitchParts",
      autoSwitchKeys: "autoSwitchKeys",
      enableMouseWheel: "enableMouseWheel",
      allowCaretMode: "allowCaretMode",
      clearButton: "clearButton",
      autoFill: "autoFill",
      adaptiveMode: "adaptiveMode",
      inputAttributes: "inputAttributes",
      defaultTab: "defaultTab",
      size: "size",
      rounded: "rounded",
      fillMode: "fillMode",
      headerTemplateRef: [0, "headerTemplate", "headerTemplateRef"],
      footerTemplateRef: [0, "footerTemplate", "footerTemplateRef"],
      footer: "footer"
    },
    outputs: {
      valueChange: "valueChange",
      open: "open",
      close: "close",
      onFocus: "focus",
      onBlur: "blur",
      escape: "escape"
    },
    exportAs: ["kendo-datetimepicker"],
    standalone: true,
    features: [ɵɵProvidersFeature([PickerService, LocalizationService, DisabledDatesService, {
      provide: L10N_PREFIX,
      useValue: "kendo.datetimepicker"
    }, {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _DateTimePickerComponent),
      multi: true
    }, {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => _DateTimePickerComponent),
      multi: true
    }, {
      provide: KendoInput,
      useExisting: forwardRef(() => _DateTimePickerComponent)
    }, {
      provide: MultiTabStop,
      useExisting: forwardRef(() => _DateTimePickerComponent)
    }]), ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    decls: 17,
    vars: 51,
    consts: () => {
      let i18n_38;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_38 = goog.getMsg("Date");
        i18n_38 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_38;
      } else {
        i18n_38 = $localize`:kendo.datetimepicker.dateTab|The Date tab text in the datetimepicker popup header:Date`;
      }
      let i18n_39;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_39 = goog.getMsg("Date tab");
        i18n_39 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_39;
      } else {
        i18n_39 = $localize`:kendo.datetimepicker.dateTabLabel|The label for the Date tab in the datetimepicker popup header:Date tab`;
      }
      let i18n_40;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_40 = goog.getMsg("Time");
        i18n_40 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_40;
      } else {
        i18n_40 = $localize`:kendo.datetimepicker.timeTab|The Time tab text in the datetimepicker popup header:Time`;
      }
      let i18n_41;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_41 = goog.getMsg("Time tab");
        i18n_41 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_41;
      } else {
        i18n_41 = $localize`:kendo.datetimepicker.timeTabLabel|The label for the Time tab in the datetimepicker popup header:Time tab`;
      }
      let i18n_42;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_42 = goog.getMsg("Toggle popup");
        i18n_42 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_42;
      } else {
        i18n_42 = $localize`:kendo.datetimepicker.toggle|The title of the toggle button in the datetimepicker component:Toggle popup`;
      }
      let i18n_43;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_43 = goog.getMsg("Set");
        i18n_43 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_43;
      } else {
        i18n_43 = $localize`:kendo.datetimepicker.accept|The Accept button text in the datetimepicker component:Set`;
      }
      let i18n_44;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_44 = goog.getMsg("Set");
        i18n_44 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_44;
      } else {
        i18n_44 = $localize`:kendo.datetimepicker.acceptLabel|The label for the Accept button in the datetimepicker component:Set`;
      }
      let i18n_45;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_45 = goog.getMsg("Cancel");
        i18n_45 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_45;
      } else {
        i18n_45 = $localize`:kendo.datetimepicker.cancel|The Cancel button text in the datetimepicker component:Cancel`;
      }
      let i18n_46;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_46 = goog.getMsg("Cancel");
        i18n_46 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_46;
      } else {
        i18n_46 = $localize`:kendo.datetimepicker.cancelLabel|The label for the Cancel button in the datetimepicker component:Cancel`;
      }
      let i18n_47;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_47 = goog.getMsg("NOW");
        i18n_47 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_47;
      } else {
        i18n_47 = $localize`:kendo.datetimepicker.now|The Now button text in the timepicker component:NOW`;
      }
      let i18n_48;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_48 = goog.getMsg("Select now");
        i18n_48 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_48;
      } else {
        i18n_48 = $localize`:kendo.datetimepicker.nowLabel|The label for the Now button in the timepicker component:Select now`;
      }
      let i18n_49;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_49 = goog.getMsg("Today");
        i18n_49 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_49;
      } else {
        i18n_49 = $localize`:kendo.datetimepicker.today|The label for the today button in the calendar header:Today`;
      }
      let i18n_50;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_50 = goog.getMsg("Navigate to previous view");
        i18n_50 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_50;
      } else {
        i18n_50 = $localize`:kendo.datetimepicker.prevButtonTitle|The title of the previous button in the Classic calendar:Navigate to previous view`;
      }
      let i18n_51;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_51 = goog.getMsg("Navigate to next view");
        i18n_51 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_51;
      } else {
        i18n_51 = $localize`:kendo.datetimepicker.nextButtonTitle|The title of the next button in the Classic calendar:Navigate to next view`;
      }
      let i18n_52;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_52 = goog.getMsg("Navigate to parent view");
        i18n_52 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_52;
      } else {
        i18n_52 = $localize`:kendo.datetimepicker.parentViewButtonTitle|The title of the parent view button in the calendar header:Navigate to parent view`;
      }
      let i18n_53;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_53 = goog.getMsg("Hour");
        i18n_53 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_53;
      } else {
        i18n_53 = $localize`:kendo.datetimepicker.hour|The label for the hour part in the timepicker component:Hour`;
      }
      let i18n_54;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_54 = goog.getMsg("Minute");
        i18n_54 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_54;
      } else {
        i18n_54 = $localize`:kendo.datetimepicker.minute|The label for the minute part in the timepicker component:Minute`;
      }
      let i18n_55;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_55 = goog.getMsg("Second");
        i18n_55 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_55;
      } else {
        i18n_55 = $localize`:kendo.datetimepicker.second|The label for the second part in the timepicker component:Second`;
      }
      let i18n_56;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_56 = goog.getMsg("Millisecond");
        i18n_56 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_56;
      } else {
        i18n_56 = $localize`:kendo.datetimepicker.millisecond|The label for the millisecond part in the timepicker component:Millisecond`;
      }
      let i18n_57;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_57 = goog.getMsg("Dayperiod");
        i18n_57 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_57;
      } else {
        i18n_57 = $localize`:kendo.datetimepicker.dayperiod|The label for the dayperiod part in the timepicker component:Dayperiod`;
      }
      let i18n_58;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_58 = goog.getMsg("clear");
        i18n_58 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_58;
      } else {
        i18n_58 = $localize`:kendo.datetimepicker.clearTitle|The title of the clear button:clear`;
      }
      let i18n_59;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_59 = goog.getMsg("Close");
        i18n_59 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_59;
      } else {
        i18n_59 = $localize`:kendo.datetimepicker.adaptiveCloseButtonTitle|The title of the Close button of the ActionSheet that is rendered instead of the Popup when using small screen devices in adaptive mode:Close`;
      }
      return [["toggleButton", ""], ["container", ""], ["popupTemplate", ""], ["actionSheet", ""], ["dateTimeTemplate", ""], ["dateTimeSelector", ""], ["calendar", ""], ["kendoDateTimePickerLocalizedMessages", "", "dateTab", i18n_38, "dateTabLabel", i18n_39, "timeTab", i18n_40, "timeTabLabel", i18n_41, "toggle", i18n_42, "accept", i18n_43, "acceptLabel", i18n_44, "cancel", i18n_45, "cancelLabel", i18n_46, "now", i18n_47, "nowLabel", i18n_48, "today", i18n_49, "prevButtonTitle", i18n_50, "nextButtonTitle", i18n_51, "parentViewButtonTitle", i18n_52, "hour", i18n_53, "minute", i18n_54, "second", i18n_55, "millisecond", i18n_56, "dayperiod", i18n_57, "clearTitle", i18n_58, "adaptiveCloseButtonTitle", i18n_59], ["pickerType", "datetimepicker", "hasPopup", "dialog", "fillMode", "none", "rounded", "none", "size", "none", 3, "valueChange", "click", "value", "format", "clearButton", "twoDigitYearMax", "min", "max", "incompleteDateValidation", "autoCorrectParts", "autoSwitchParts", "autoSwitchKeys", "enableMouseWheel", "allowCaretMode", "autoFill", "formatPlaceholder", "placeholder", "disabled", "focusableId", "readonly", "role", "ariaReadOnly", "steps", "tabindex", "isRequired", "title", "inputAttributes", "isPopupOpen", "kendoEventsOutsideAngular", "scope"], [3, "clearTitle"], ["type", "button", 1, "k-input-button", "k-button", "k-icon-button", 3, "tabindex", "kendoEventsOutsideAngular", "scope"], ["name", "calendar", "innerCssClass", "k-button-icon", 3, "svgIcon"], ["name", "clock", "innerCssClass", "k-button-icon", 3, "svgIcon"], [3, "overlayClick", "collapse", "titleId", "cssClass", "cssStyle"], ["kendoActionSheetTemplate", ""], [4, "ngTemplateOutlet"], [3, "resize"], [1, "k-actionsheet-titlebar"], [1, "k-actionsheet-titlebar-group"], [1, "k-actionsheet-title"], [1, "k-text-center"], [1, "k-actionsheet-subtitle", "k-text-center"], [1, "k-actionsheet-actions"], ["kendoButton", "", "type", "button", "icon", "check", "fillMode", "flat", "themeColor", "primary", "size", "large", "innerCssClass", "k-button-icon", 3, "click", "svgIcon", "tabIndex"], [1, "k-actionsheet-content"], [1, "k-actions", "k-actions-stretched", "k-actions-horizontal", "k-actionsheet-footer"], ["kendoButton", "", "type", "button", "size", "large", 1, "k-time-cancel"], ["kendoButton", "", "type", "button", "size", "large", "themeColor", "primary", 1, "k-time-accept", 3, "click", "disabled"], ["kendoButton", "", "type", "button", "size", "large", 1, "k-time-cancel", 3, "click"], [3, "ngClass", "kendoEventsOutsideAngular", "scope"], [1, "k-datetime-buttongroup", 3, "kendoEventsOutsideAngular", "scope"], ["role", "group", 1, "k-button-group", "k-button-group-solid", "k-button-group-stretched"], ["kendoButton", "", "type", "button", 1, "k-group-start", 3, "size", "kendoEventsOutsideAngular", "scope"], ["kendoButton", "", "type", "button", 1, "k-group-end", 3, "size", "kendoEventsOutsideAngular", "scope"], [1, "k-datetime-selector", 3, "kendoEventsOutsideAngular"], [1, "k-datetime-calendar-wrap"], [3, "valueChange", "focusedDate", "size", "value", "type", "min", "max", "weekDaysFormat", "weekNumber", "navigation", "animateNavigation", "showOtherMonthDays", "cellTemplate", "monthCellTemplate", "yearCellTemplate", "decadeCellTemplate", "centuryCellTemplate", "weekNumberTemplate", "headerTitleTemplate", "headerTemplate", "footerTemplate", "footer", "disabled", "disabledDates"], [3, "today", "prevButtonTitle", "nextButtonTitle", "parentViewButtonTitle"], [1, "k-datetime-time-wrap"], [3, "tabOutLastPart", "tabOutFirstPart", "tabOutNow", "ngClass", "value", "format", "min", "max", "setButton", "cancelButton", "steps", "disabled", "isAdaptiveEnabled", "isDateTimePicker"], [3, "acceptLabel", "accept", "cancelLabel", "cancel", "nowLabel", "now", "hour", "minute", "second", "millisecond", "dayperiod"], [1, "k-datetime-footer", "k-actions", "k-actions-stretched", "k-actions-horizontal", 3, "kendoEventsOutsideAngular", "scope"], ["kendoButton", "", "type", "button", "themeColor", "primary", 1, "k-time-accept", 3, "disabled", "kendoEventsOutsideAngular", "scope"], ["kendoButton", "", "type", "button", 1, "k-time-cancel", 3, "kendoEventsOutsideAngular", "scope"]];
    },
    template: function DateTimePickerComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵelementContainer(0, 7);
        ɵɵelementStart(1, "kendo-dateinput", 8);
        ɵɵlistener("valueChange", function DateTimePickerComponent_Template_kendo_dateinput_valueChange_1_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.handleInputValueChange($event));
        })("click", function DateTimePickerComponent_Template_kendo_dateinput_click_1_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.handleDateInputClick());
        });
        ɵɵelement(2, "kendo-dateinput-messages", 9);
        ɵɵelementEnd();
        ɵɵelementStart(3, "button", 10, 0);
        ɵɵtemplate(5, DateTimePickerComponent_Conditional_5_Template, 1, 1, "kendo-icon-wrapper", 11)(6, DateTimePickerComponent_Conditional_6_Template, 1, 1, "kendo-icon-wrapper", 12);
        ɵɵelementEnd();
        ɵɵelementContainer(7, null, 1);
        ɵɵtemplate(9, DateTimePickerComponent_ng_template_9_Template, 1, 1, "ng-template", null, 2, ɵɵtemplateRefExtractor)(11, DateTimePickerComponent_Conditional_11_Template, 1, 0, "kendo-resize-sensor");
        ɵɵelementStart(12, "kendo-actionsheet", 13, 3);
        ɵɵlistener("overlayClick", function DateTimePickerComponent_Template_kendo_actionsheet_overlayClick_12_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.toggleActionSheet(false));
        })("collapse", function DateTimePickerComponent_Template_kendo_actionsheet_collapse_12_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.handleActionSheetCollapse());
        });
        ɵɵtemplate(14, DateTimePickerComponent_ng_template_14_Template, 13, 11, "ng-template", 14);
        ɵɵelementEnd();
        ɵɵtemplate(15, DateTimePickerComponent_ng_template_15_Template, 17, 98, "ng-template", null, 4, ɵɵtemplateRefExtractor);
      }
      if (rf & 2) {
        ɵɵadvance();
        ɵɵproperty("value", ctx.value)("format", ctx.format)("clearButton", ctx.clearButton)("twoDigitYearMax", ctx.twoDigitYearMax)("min", ctx.min)("max", ctx.max)("incompleteDateValidation", ctx.incompleteDateValidation)("autoCorrectParts", ctx.autoCorrectParts)("autoSwitchParts", ctx.autoSwitchParts)("autoSwitchKeys", ctx.autoSwitchKeys)("enableMouseWheel", ctx.enableMouseWheel)("allowCaretMode", ctx.allowCaretMode)("autoFill", ctx.autoFill)("formatPlaceholder", ctx.formatPlaceholder)("placeholder", ctx.placeholder)("disabled", ctx.disabled)("focusableId", ctx.focusableId)("readonly", ctx.readonly || ctx.readOnlyInput)("role", "combobox")("ariaReadOnly", ctx.readonly)("steps", ctx.steps)("tabindex", ctx.tabindex)("isRequired", ctx.isControlRequired)("title", ctx.adaptiveTitle)("inputAttributes", ctx.inputAttributes)("isPopupOpen", ctx.isOpen)("kendoEventsOutsideAngular", ɵɵpureFunction1(41, _c21, ctx.handleKeyDown))("scope", ctx);
        ɵɵadvance();
        ɵɵproperty("clearTitle", ctx.localization.get("clearTitle"));
        ɵɵadvance();
        ɵɵproperty("tabindex", -1)("kendoEventsOutsideAngular", ɵɵpureFunction2(43, _c29, ctx.preventMouseDown, ctx.handleIconClick))("scope", ctx);
        ɵɵattribute("title", ctx.localization.get("toggle"))("aria-label", ctx.localization.get("toggle"))("disabled", ctx.disabled ? "" : null);
        ɵɵadvance(2);
        ɵɵconditional(ctx.activeTab === "date" ? 5 : -1);
        ɵɵadvance();
        ɵɵconditional(ctx.activeTab === "time" ? 6 : -1);
        ɵɵadvance(5);
        ɵɵconditional(ctx.isAdaptiveModeEnabled ? 11 : -1);
        ɵɵadvance();
        ɵɵproperty("titleId", ctx.calendar == null ? null : ctx.calendar.headerId)("cssClass", ɵɵpureFunction2(46, _c19, ctx.windowSize === "small", ctx.windowSize === "medium"))("cssStyle", ɵɵpureFunction1(49, _c20, ctx.windowSize === "small" ? "100vh" : "60vh"));
      }
    },
    dependencies: [LocalizedMessagesDirective, DateInputComponent, EventsOutsideAngularDirective, DateInputCustomMessagesComponent, IconWrapperComponent, NgTemplateOutlet, ResizeSensorComponent, ActionSheetComponent, ActionSheetTemplateDirective, ButtonComponent, NgClass, CalendarComponent, CalendarCustomMessagesComponent, TimeSelectorComponent, TimeSelectorCustomMessagesComponent],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DateTimePickerComponent, [{
    type: Component,
    args: [{
      selector: "kendo-datetimepicker",
      exportAs: "kendo-datetimepicker",
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [PickerService, LocalizationService, DisabledDatesService, {
        provide: L10N_PREFIX,
        useValue: "kendo.datetimepicker"
      }, {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => DateTimePickerComponent),
        multi: true
      }, {
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => DateTimePickerComponent),
        multi: true
      }, {
        provide: KendoInput,
        useExisting: forwardRef(() => DateTimePickerComponent)
      }, {
        provide: MultiTabStop,
        useExisting: forwardRef(() => DateTimePickerComponent)
      }],
      template: `
        <ng-container
          kendoDateTimePickerLocalizedMessages
        
          i18n-dateTab="kendo.datetimepicker.dateTab|The Date tab text in the datetimepicker popup header"
          dateTab="Date"
        
          i18n-dateTabLabel="kendo.datetimepicker.dateTabLabel|The label for the Date tab in the datetimepicker popup header"
          dateTabLabel="Date tab"
        
          i18n-timeTab="kendo.datetimepicker.timeTab|The Time tab text in the datetimepicker popup header"
          timeTab="Time"
        
          i18n-timeTabLabel="kendo.datetimepicker.timeTabLabel|The label for the Time tab in the datetimepicker popup header"
          timeTabLabel="Time tab"
        
          i18n-toggle="kendo.datetimepicker.toggle|The title of the toggle button in the datetimepicker component"
          toggle="Toggle popup"
        
          i18n-accept="kendo.datetimepicker.accept|The Accept button text in the datetimepicker component"
          accept="Set"
        
          i18n-acceptLabel="kendo.datetimepicker.acceptLabel|The label for the Accept button in the datetimepicker component"
          acceptLabel="Set"
        
          i18n-cancel="kendo.datetimepicker.cancel|The Cancel button text in the datetimepicker component"
          cancel="Cancel"
        
          i18n-cancelLabel="kendo.datetimepicker.cancelLabel|The label for the Cancel button in the datetimepicker component"
          cancelLabel="Cancel"
        
          i18n-now="kendo.datetimepicker.now|The Now button text in the timepicker component"
          now="NOW"
        
          i18n-nowLabel="kendo.datetimepicker.nowLabel|The label for the Now button in the timepicker component"
          nowLabel="Select now"
        
          i18n-today="kendo.datetimepicker.today|The label for the today button in the calendar header"
          today="Today"
        
          i18n-prevButtonTitle="kendo.datetimepicker.prevButtonTitle|The title of the previous button in the Classic calendar"
          prevButtonTitle="Navigate to previous view"
        
          i18n-nextButtonTitle="kendo.datetimepicker.nextButtonTitle|The title of the next button in the Classic calendar"
          nextButtonTitle="Navigate to next view"
        
          i18n-parentViewButtonTitle="kendo.datetimepicker.parentViewButtonTitle|The title of the parent view button in the calendar header"
          parentViewButtonTitle="Navigate to parent view"
        
          i18n-hour="kendo.datetimepicker.hour|The label for the hour part in the timepicker component"
          hour="Hour"
        
          i18n-minute="kendo.datetimepicker.minute|The label for the minute part in the timepicker component"
          minute="Minute"
        
          i18n-second="kendo.datetimepicker.second|The label for the second part in the timepicker component"
          second="Second"
        
          i18n-millisecond="kendo.datetimepicker.millisecond|The label for the millisecond part in the timepicker component"
          millisecond="Millisecond"
        
          i18n-dayperiod="kendo.datetimepicker.dayperiod|The label for the dayperiod part in the timepicker component"
          dayperiod="Dayperiod"
        
          i18n-clearTitle="kendo.datetimepicker.clearTitle|The title of the clear button"
          clearTitle="clear"
        
          i18n-adaptiveCloseButtonTitle="kendo.datetimepicker.adaptiveCloseButtonTitle|The title of the Close button of the ActionSheet that is rendered instead of the Popup when using small screen devices in adaptive mode"
          adaptiveCloseButtonTitle="Close"
          >
        </ng-container>
        
        <kendo-dateinput
          [value]="value"
          [format]="format"
          [clearButton]="clearButton"
          [twoDigitYearMax]="twoDigitYearMax"
          [min]="min"
          [max]="max"
          [incompleteDateValidation]="incompleteDateValidation"
          [autoCorrectParts]="autoCorrectParts"
          [autoSwitchParts]="autoSwitchParts"
          [autoSwitchKeys]="autoSwitchKeys"
          [enableMouseWheel]="enableMouseWheel"
          [allowCaretMode]="allowCaretMode"
          [autoFill]="autoFill"
          [formatPlaceholder]="formatPlaceholder"
          [placeholder]="placeholder"
          [disabled]="disabled"
          [focusableId]="focusableId"
          [readonly]="readonly || readOnlyInput"
          [role]="'combobox'"
          [ariaReadOnly]="readonly"
          [steps]="steps"
          [tabindex]="tabindex"
          [isRequired]="isControlRequired"
          [title]="adaptiveTitle"
          pickerType="datetimepicker"
          hasPopup="dialog"
          [inputAttributes]="inputAttributes"
          [isPopupOpen]="isOpen"
          (valueChange)="handleInputValueChange($event)"
            [kendoEventsOutsideAngular]="{
                keydown: handleKeyDown
            }"
          [scope]="this"
          fillMode="none"
          rounded="none"
          size="none"
          (click)="handleDateInputClick()"
          >
          <kendo-dateinput-messages
            [clearTitle]="localization.get('clearTitle')"
            >
          </kendo-dateinput-messages>
        </kendo-dateinput>
        <button
          #toggleButton
          type="button"
          class="k-input-button k-button k-icon-button"
          [tabindex]="-1"
          [attr.title]="localization.get('toggle')"
          [attr.aria-label]="localization.get('toggle')"
          [attr.disabled]="disabled ? '' : null"
            [kendoEventsOutsideAngular]="{
                mousedown: preventMouseDown,
                click: handleIconClick
            }"
          [scope]="this"
          >
          @if (activeTab === 'date') {
            <kendo-icon-wrapper
              name="calendar"
              [svgIcon]="calendarIcon"
              innerCssClass="k-button-icon"
              >
            </kendo-icon-wrapper>
          }
          @if (activeTab === 'time') {
            <kendo-icon-wrapper
              name="clock"
              [svgIcon]="clockIcon"
              innerCssClass="k-button-icon"
              >
            </kendo-icon-wrapper>
          }
        </button>
        
        <ng-container #container></ng-container>
        
        <ng-template #popupTemplate>
          <ng-container *ngTemplateOutlet="dateTimeTemplate"></ng-container>
        </ng-template>
        
        @if (isAdaptiveModeEnabled) {
          <kendo-resize-sensor (resize)="onResize()"></kendo-resize-sensor>
        }
        
        <kendo-actionsheet
          #actionSheet
          (overlayClick)="toggleActionSheet(false)"
          (collapse)="handleActionSheetCollapse()"
          [titleId]="calendar?.headerId"
            [cssClass]="{
                'k-adaptive-actionsheet': true,
                'k-actionsheet-fullscreen': windowSize === 'small',
                'k-actionsheet-bottom': windowSize === 'medium'
            }"
            [cssStyle]="{
                height: windowSize === 'small' ? '100vh' : '60vh'
            }"
          >
          <ng-template kendoActionSheetTemplate>
            <div class="k-actionsheet-titlebar">
              <div class="k-actionsheet-titlebar-group">
                <div class="k-actionsheet-title">
                  @if (adaptiveTitle) {
                    <div class="k-text-center">{{ adaptiveTitle }}</div>
                  }
                  @if (adaptiveSubtitle) {
                    <div class="k-actionsheet-subtitle k-text-center">{{ adaptiveSubtitle }}</div>
                  }
                </div>
                <div class="k-actionsheet-actions">
                  <button
                    kendoButton
                    type="button"
                    icon="check"
                    [attr.title]="localization.get('adaptiveCloseButtonTitle')"
                    [svgIcon]="checkIcon"
                    fillMode="flat"
                    themeColor="primary"
                    [tabIndex]="-1"
                    size="large"
                    innerCssClass="k-button-icon"
                    (click)="toggleActionSheet(false)">
                  </button>
                </div>
              </div>
            </div>
            <div class="k-actionsheet-content">
              <ng-container *ngTemplateOutlet="dateTimeTemplate"></ng-container>
            </div>
            <div class="k-actions k-actions-stretched k-actions-horizontal k-actionsheet-footer">
              @if (cancelButton) {
                <button kendoButton
                  class="k-time-cancel"
                  type="button"
                  (click)="handleCancel()"
                  size="large"
                  [attr.title]="localization.get('cancelLabel')"
                  [attr.aria-label]="localization.get('cancelLabel')"
                  >
                  {{localization.get('cancel')}}
                </button>
              }
        
              <button kendoButton
                type="button"
                class="k-time-accept"
                (click)="handleAccept()"
                [disabled]="!calendarValue"
                size="large"
                themeColor="primary"
                [attr.title]="localization.get('acceptLabel')"
                [attr.aria-label]="localization.get('acceptLabel')"
                >
                {{localization.get('accept')}}
              </button>
            </div>
          </ng-template>
        </kendo-actionsheet>
        
        <ng-template #dateTimeTemplate>
          <div
            class="k-datetime-wrap k-{{activeTab}}-tab"
                [ngClass]="{
                    'k-datetime-wrap-md': !isAdaptive,
                    'k-datetime-wrap-lg': isAdaptive
                }"
                [kendoEventsOutsideAngular]="{
                    mousedown: preventMouseDown,
                    keydown: handleKeyDown
                }"
            [scope]="this"
            >
            <div class="k-datetime-buttongroup"
                    [kendoEventsOutsideAngular]="{
                        focusin: handleFocus,
                        focusout: handleBlur
                    }"
              [scope]="this"
              >
              <div class="k-button-group k-button-group-solid k-button-group-stretched" role="group">
                <button kendoButton
                  type="button"
                  class="k-group-start"
                  [size]="isAdaptive ? 'large' : size"
                  [class.k-selected]="activeTab === 'date'"
                  [attr.aria-pressed]="activeTab === 'date' ? 'true' : 'false'"
                  [attr.title]="localization.get('dateTabLabel')"
                  [attr.aria-label]="localization.get('dateTabLabel')"
                            [kendoEventsOutsideAngular]="{
                                click: changeActiveTab.bind(this, 'date'),
                                'keydown.shift.tab': handleTab
                            }"
                  [scope]="this"
                  >
                  {{localization.get('dateTab')}}
                </button>
                <button kendoButton
                  type="button"
                  class="k-group-end"
                  [size]="isAdaptive ? 'large' : size"
                  [class.k-selected]="activeTab === 'time'"
                  [attr.aria-pressed]="activeTab === 'time' ? 'true' : 'false'"
                  [attr.title]="localization.get('timeTabLabel')"
                  [attr.aria-label]="localization.get('timeTabLabel')"
                            [kendoEventsOutsideAngular]="{
                                click: changeActiveTab.bind(this, 'time'),
                                'keydown.tab': handleTab
                            }"
                  [scope]="this"
                  >
                  {{localization.get('timeTab')}}
                </button>
              </div>
            </div>
            <div
              #dateTimeSelector
              class="k-datetime-selector"
              [style.transition]="tabSwitchTransition"
                    [kendoEventsOutsideAngular]="{
                        transitionend: handleTabChangeTransitionEnd.bind(this, dateTimeSelector)
                    }"
              >
              <div class="k-datetime-calendar-wrap">
                <kendo-calendar
                  #calendar
                  [focusedDate]="focusedDate"
                  [size]="isAdaptive ? 'large' : size"
                  [(value)]="calendarValue"
                  [type]="calendarType"
                  [min]="calendarMin"
                  [max]="calendarMax"
                  [weekDaysFormat]="weekDaysFormat"
                  [weekNumber]="weekNumber"
                  [navigation]="false"
                  [animateNavigation]="animateCalendarNavigation"
                  [showOtherMonthDays]="showOtherMonthDays"
                  [cellTemplate]="cellTemplate"
                  [monthCellTemplate]="monthCellTemplate"
                  [yearCellTemplate]="yearCellTemplate"
                  [decadeCellTemplate]="decadeCellTemplate"
                  [centuryCellTemplate]="centuryCellTemplate"
                  [weekNumberTemplate]="weekNumberTemplate"
                  [headerTitleTemplate]="headerTitleTemplate"
                  [headerTemplate]="headerTemplate"
                  [footerTemplate]="footerTemplate"
                  [footer]="footer"
                  [disabled]="disableCalendar"
                  [disabledDates]="disabledDates"
                  (valueChange)="handleCalendarValueChange()"
                  >
                  <kendo-calendar-messages
                    [today]="localization.get('today')"
                    [prevButtonTitle]="localization.get('prevButtonTitle')"
                    [nextButtonTitle]="localization.get('nextButtonTitle')"
                    [parentViewButtonTitle]="localization.get('parentViewButtonTitle')"
                    >
                  </kendo-calendar-messages>
                </kendo-calendar>
              </div>
              <div class="k-datetime-time-wrap">
                <kendo-timeselector
                  [ngClass]="{'k-timeselector-lg': isAdaptive}"
                  [value]="value"
                  [format]="timeSelectorFormat"
                  [min]="timeSelectorMin"
                  [max]="timeSelectorMax"
                  [setButton]="false"
                  [cancelButton]="false"
                  [steps]="steps"
                  [disabled]="disableTimeSelector"
                  [isAdaptiveEnabled]="isAdaptiveModeEnabled"
                  [isDateTimePicker]="true"
                  (tabOutLastPart)="onTabOutLastPart()"
                  (tabOutFirstPart)="onTabOutFirstPart()"
                  (tabOutNow)="onTabOutNow()"
                  >
                  <kendo-timeselector-messages
                    [acceptLabel]="localization.get('acceptLabel')"
                    [accept]="localization.get('accept')"
                    [cancelLabel]="localization.get('cancelLabel')"
                    [cancel]="localization.get('cancel')"
                    [nowLabel]="localization.get('nowLabel')"
                    [now]="localization.get('now')"
                    [hour]="localization.get('hour')"
                    [minute]="localization.get('minute')"
                    [second]="localization.get('second')"
                    [millisecond]="localization.get('millisecond')"
                    [dayperiod]="localization.get('dayperiod')"
                    >
                  </kendo-timeselector-messages>
                </kendo-timeselector>
              </div>
            </div>
            @if (!isAdaptive) {
              <div
                class="k-datetime-footer k-actions k-actions-stretched k-actions-horizontal"
                    [kendoEventsOutsideAngular]="{
                        focusin: handleFocus,
                        focusout: handleBlur
                    }"
                [scope]="this"
                >
                <button kendoButton
                  type="button"
                  class="k-time-accept"
                  themeColor="primary"
                  [attr.title]="localization.get('acceptLabel')"
                  [attr.aria-label]="localization.get('acceptLabel')"
                  [disabled]="!calendarValue"
                        [kendoEventsOutsideAngular]="{
                            click: handleAccept,
                            'keydown.tab': handleTab,
                            'keydown.shift.tab': handleTab
                        }"
                  [scope]="this"
                  >
                  {{localization.get('accept')}}
                </button>
                @if (cancelButton) {
                  <button kendoButton
                    type="button"
                    class="k-time-cancel"
                    [attr.title]="localization.get('cancelLabel')"
                    [attr.aria-label]="localization.get('cancelLabel')"
                        [kendoEventsOutsideAngular]="{
                            click: handleCancel,
                            'keydown.tab': handleTab,
                            'keydown.shift.tab': handleTab
                        }"
                    [scope]="this"
                    >
                    {{localization.get('cancel')}}
                  </button>
                }
              </div>
            }
          </div>
        </ng-template>
        `,
      standalone: true,
      imports: [LocalizedMessagesDirective, DateInputComponent, EventsOutsideAngularDirective, DateInputCustomMessagesComponent, IconWrapperComponent, NgTemplateOutlet, ResizeSensorComponent, ActionSheetComponent, ActionSheetTemplateDirective, ButtonComponent, NgClass, CalendarComponent, CalendarCustomMessagesComponent, TimeSelectorComponent, TimeSelectorCustomMessagesComponent]
    }]
  }], () => [{
    type: PopupService
  }, {
    type: IntlService
  }, {
    type: ChangeDetectorRef
  }, {
    type: PickerService
  }, {
    type: NgZone
  }, {
    type: ElementRef
  }, {
    type: LocalizationService
  }, {
    type: DisabledDatesService
  }, {
    type: Renderer2
  }, {
    type: Injector
  }, {
    type: AdaptiveService
  }], {
    hostClasses: [{
      type: HostBinding,
      args: ["class.k-datetimepicker"]
    }, {
      type: HostBinding,
      args: ["class.k-input"]
    }],
    disabledClass: [{
      type: HostBinding,
      args: ["class.k-disabled"]
    }],
    toggleButton: [{
      type: ViewChild,
      args: ["toggleButton", {
        static: true
      }]
    }],
    focusableId: [{
      type: Input
    }],
    weekDaysFormat: [{
      type: Input
    }],
    showOtherMonthDays: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    format: [{
      type: Input
    }],
    twoDigitYearMax: [{
      type: Input
    }],
    tabindex: [{
      type: Input
    }],
    disabledDates: [{
      type: Input
    }],
    popupSettings: [{
      type: Input
    }],
    adaptiveTitle: [{
      type: Input
    }],
    adaptiveSubtitle: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    readonly: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["class.k-readonly"]
    }],
    readOnlyInput: [{
      type: Input
    }],
    cancelButton: [{
      type: Input
    }],
    formatPlaceholder: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    steps: [{
      type: Input
    }],
    focusedDate: [{
      type: Input
    }],
    calendarType: [{
      type: Input
    }],
    animateCalendarNavigation: [{
      type: Input
    }],
    weekNumber: [{
      type: Input
    }],
    min: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    rangeValidation: [{
      type: Input
    }],
    disabledDatesValidation: [{
      type: Input
    }],
    incompleteDateValidation: [{
      type: Input
    }],
    autoCorrectParts: [{
      type: Input
    }],
    autoSwitchParts: [{
      type: Input
    }],
    autoSwitchKeys: [{
      type: Input
    }],
    enableMouseWheel: [{
      type: Input
    }],
    allowCaretMode: [{
      type: Input
    }],
    clearButton: [{
      type: Input
    }],
    autoFill: [{
      type: Input
    }],
    adaptiveMode: [{
      type: Input
    }],
    inputAttributes: [{
      type: Input
    }],
    valueChange: [{
      type: Output
    }],
    open: [{
      type: Output
    }],
    close: [{
      type: Output
    }],
    onFocus: [{
      type: Output,
      args: ["focus"]
    }],
    onBlur: [{
      type: Output,
      args: ["blur"]
    }],
    escape: [{
      type: Output
    }],
    defaultTab: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    rounded: [{
      type: Input
    }],
    fillMode: [{
      type: Input
    }],
    cellTemplate: [{
      type: ContentChild,
      args: [CellTemplateDirective, {
        static: false
      }]
    }],
    monthCellTemplate: [{
      type: ContentChild,
      args: [MonthCellTemplateDirective, {
        static: false
      }]
    }],
    yearCellTemplate: [{
      type: ContentChild,
      args: [YearCellTemplateDirective, {
        static: false
      }]
    }],
    decadeCellTemplate: [{
      type: ContentChild,
      args: [DecadeCellTemplateDirective, {
        static: false
      }]
    }],
    centuryCellTemplate: [{
      type: ContentChild,
      args: [CenturyCellTemplateDirective, {
        static: false
      }]
    }],
    weekNumberTemplate: [{
      type: ContentChild,
      args: [WeekNumberCellTemplateDirective, {
        static: false
      }]
    }],
    headerTitleTemplate: [{
      type: ContentChild,
      args: [HeaderTitleTemplateDirective, {
        static: false
      }]
    }],
    headerTemplate: [{
      type: ContentChild,
      args: [HeaderTemplateDirective]
    }],
    headerTemplateRef: [{
      type: Input,
      args: ["headerTemplate"]
    }],
    footerTemplate: [{
      type: ContentChild,
      args: [FooterTemplateDirective]
    }],
    footerTemplateRef: [{
      type: Input,
      args: ["footerTemplate"]
    }],
    footer: [{
      type: Input
    }],
    container: [{
      type: ViewChild,
      args: ["container", {
        read: ViewContainerRef,
        static: true
      }]
    }],
    popupTemplate: [{
      type: ViewChild,
      args: ["popupTemplate", {
        read: TemplateRef,
        static: true
      }]
    }],
    actionSheet: [{
      type: ViewChild,
      args: ["actionSheet"]
    }]
  });
})();
var WeekNamesService = class _WeekNamesService {
  intl;
  constructor(intl) {
    this.intl = intl;
  }
  getWeekNames(includeWeekNumber = false, nameType) {
    const weekNames = shiftWeekNames(this.intl.dateFormatNames({
      nameType,
      type: "days"
    }), this.intl.firstDay());
    return includeWeekNumber ? [""].concat(weekNames) : weekNames;
  }
  static ɵfac = function WeekNamesService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WeekNamesService)(ɵɵinject(IntlService));
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _WeekNamesService,
    factory: _WeekNamesService.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WeekNamesService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: IntlService
  }], null);
})();
var DateRangePopupTemplateDirective = class _DateRangePopupTemplateDirective {
  templateRef;
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static ɵfac = function DateRangePopupTemplateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DateRangePopupTemplateDirective)(ɵɵdirectiveInject(TemplateRef));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _DateRangePopupTemplateDirective,
    selectors: [["", "kendoDateRangePopupTemplate", ""]],
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DateRangePopupTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoDateRangePopupTemplate]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var isActive = (cmp) => cmp && cmp.isActive || false;
var hasActiveContent = (popup) => popup && popup.hasActiveContent();
var DateRangeService = class _DateRangeService {
  renderer;
  /**
   * Notifies when the `activeRangeEnd` state changes.
   */
  activeRangeEnd$ = new BehaviorSubject(null);
  /**
   * Notifies when the `focusedDate` changes.
   */
  focusedDate$ = new BehaviorSubject(null);
  /**
   * Notifies when the end DateInput component changes.
   * For example, when you attach a new end `DateInput` or detach the old one.
   */
  endInput$ = new BehaviorSubject(null);
  /**
   * Notifies when the start DateInput component changes.
   * For example, when you attach a new start `DateInput` or detach the old one.
   */
  startInput$ = new BehaviorSubject(null);
  /**
   * Notifies when the `DateRangePopup` component changes.
   */
  dateRangePopup$ = new BehaviorSubject(null);
  /**
   * Notifies when the selection range state changes.
   */
  range$ = new BehaviorSubject(EMPTY_SELECTIONRANGE);
  /**
   * Gets the current `activeRangeEnd` value.
   */
  get activeRangeEnd() {
    return this.activeRangeEnd$.value;
  }
  /**
   * Gets the current `focusedDate` value.
   */
  get focusedDate() {
    return this.focusedDate$.value;
  }
  /**
   * Gets the minimum range value.
   * Takes the `min` value from the start DateInput component or the `min` value of the calendar.
   */
  get min() {
    return (this.startInput$.value || {}).min || null;
  }
  /**
   * Gets the maximum range value.
   * Takes the `max` value from the end DateInput component or the `max` value of the calendar.
   */
  get max() {
    return (this.endInput$.value || {}).max || null;
  }
  /**
   * Gets the current `selectionRange` value.
   */
  get selectionRange() {
    return this.range$.value;
  }
  /**
   * @hidden
   * Gets the start input element.
   */
  get inputStartElement() {
    return this.startInput$.value.inputElement;
  }
  /**
   * @hidden
   * Gets the end input element.
   */
  get inputEndElement() {
    return this.endInput$.value.inputElement;
  }
  /** @hidden */
  constructor(renderer) {
    this.renderer = renderer;
  }
  /**
   * Opens the registered DateRangePopup component.
   * Opens the popup and focuses the calendar.
   */
  activatePopup() {
    const dateRangePopup = this.dateRangePopup$.value;
    if (!dateRangePopup) {
      return;
    }
    if (this.startInput$.value) {
      this.renderer.setAttribute(this.inputStartElement, attributeNames.ariaControls, dateRangePopup.popupUID);
      this.renderer.setAttribute(this.inputStartElement, attributeNames.ariaExpanded, "true");
      this.renderer.setAttribute(this.inputEndElement, attributeNames.ariaControls, dateRangePopup.popupUID);
      this.renderer.setAttribute(this.inputEndElement, attributeNames.ariaExpanded, "true");
    }
    dateRangePopup.activate();
  }
  /**
   * Deactivates the registered `DateRangePopup` component.
   * The method closes the popup.
   */
  deactivatePopup() {
    const dateRangePopup = this.dateRangePopup$.value;
    if (this.startInput$.value) {
      this.renderer.removeAttribute(this.inputStartElement, attributeNames.ariaControls);
      this.renderer.setAttribute(this.inputStartElement, attributeNames.ariaExpanded, "false");
      this.renderer.removeAttribute(this.inputStartElement, attributeNames.ariaActiveDescendant);
      this.renderer.removeAttribute(this.inputEndElement, attributeNames.ariaControls);
      this.renderer.setAttribute(this.inputEndElement, attributeNames.ariaExpanded, "false");
      this.renderer.removeAttribute(this.inputEndElement, attributeNames.ariaActiveDescendant);
    }
    if (!(dateRangePopup && dateRangePopup.show)) {
      return;
    }
    dateRangePopup.show = false;
  }
  /**
   * @hidden
   */
  setActiveDescendent(id) {
    this.renderer.setAttribute(this.inputStartElement, attributeNames.ariaActiveDescendant, id);
    this.renderer.setAttribute(this.inputEndElement, attributeNames.ariaActiveDescendant, id);
  }
  /**
   * @hidden
   *
   * Deactivates the registered `DateRangePopup` component and fires the `cancel` event.
   * The method closes the popup.
   */
  cancelPopup() {
    const dateRangePopup = this.dateRangePopup$.value;
    if (!(dateRangePopup && dateRangePopup.show)) {
      return;
    }
    dateRangePopup.cancelPopup();
  }
  /**
   * Completes all observables to prevent memory leaks.
   * Call this method when you destroy a component that uses the service.
   */
  destroy() {
    this.activeRangeEnd$.complete();
    this.dateRangePopup$.complete();
    this.focusedDate$.complete();
    this.endInput$.complete();
    this.startInput$.complete();
    this.range$.complete();
  }
  /**
   * Checks if any component inside the DateRangeComponent is active.
   * For example, detects an open popup or a focused DateInput component.
   *
   * @returns {boolean} Returns `true` if an active component is present.
   */
  hasActiveComponent() {
    const popup = this.dateRangePopup$.value;
    const isPopup = isActive(popup);
    const isStart = isActive(this.startInput$.value);
    const isEnd = isActive(this.endInput$.value);
    return isPopup || isStart || isEnd || hasActiveContent(popup) || false;
  }
  /**
   * Registers a new start DateInput component and notifies all `startInput$` listeners.
   */
  registerStartInput(startInput) {
    this.startInput$.next(startInput);
  }
  /**
   * Registers a new end `DateInput` component and notifies all `endInput$` listeners.
   */
  registerEndInput(endInput) {
    this.endInput$.next(endInput);
  }
  /**
   * Registers a new `DateRangePopup` component and notifies all `dateRangePopup$` listeners.
   */
  registerPopup(dateRangePopup) {
    this.dateRangePopup$.next(dateRangePopup);
  }
  /**
   * Updates the `activeRangeEnd` value and notifies all `activeRangeEnd$` listeners.
   */
  setActiveRangeEnd(activeRange) {
    if (!activeRange || this.activeRangeEnd === activeRange) {
      return;
    }
    this.activeRangeEnd$.next(activeRange);
  }
  /**
   * Updates the focused date and notifies all `focusedDate$` listeners.
   */
  setFocusedDate(value) {
    if (isEqual(this.focusedDate$.value, value)) {
      return;
    }
    this.focusedDate$.next(value);
  }
  /**
   * Updates the selection range and notifies all `range$` listeners.
   */
  setRange(range2 = EMPTY_SELECTIONRANGE) {
    this.range$.next(range2);
  }
  static ɵfac = function DateRangeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DateRangeService)(ɵɵinject(Renderer2, 8));
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _DateRangeService,
    factory: _DateRangeService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DateRangeService, [{
    type: Injectable
  }], () => [{
    type: Renderer2,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
var DateRangeSelectionDirective = class _DateRangeSelectionDirective {
  calendar;
  cdr;
  element;
  dateRangeService;
  /**
   * Specifies the auto-correction behavior. If the start date is greater than the end date,
   * the directive corrects the date range to a single date either on input change or on blur
   * ([see example](slug:autocorrect_daterange#toc-calendar-selection-directive)).
   *
   * By default, the auto-correction triggers on change.
   * To disable this behavior, set the `autoCorrectOn` property to `none`.
   *
   * @default 'change'
   */
  autoCorrectOn = "change";
  /**
   * Gets or sets the selection range of the calendar. When you set a new range,
   * the connected DateRangeService notifies all related parties.
   */
  get selectionRange() {
    return this.calendar ? this.calendar.selectionRange : null;
  }
  set selectionRange(range2) {
    if (!this.isEqualCalendarRange(range2)) {
      this.setSelectionRange(range2);
    }
    if (!isEqualRange(this.dateRangeService.selectionRange, range2)) {
      this.dateRangeService.setRange(range2);
    }
    this.updateFocusedDate(range2);
  }
  /**
   * Gets or sets the active end of the selection range. This option determines which range end will be updated on
   * user interaction. When a new active end is set, the connected DateRangeService notifies all related parties.
   */
  /**
   * Specifies which end of the selection range is marked as active. The active end gets modified when you interact with the component. When you set a new active end, the wired DateRangeService notifies all related components. For
   * example, the start and end DateInput components.
   *
   * > If the selection range is undefined, the value is ignored.
   */
  get activeRangeEnd() {
    return this.calendar.activeRangeEnd;
  }
  set activeRangeEnd(activeRange) {
    if (this.dateRangeService.activeRangeEnd === activeRange) {
      return;
    }
    this.calendar.activeRangeEnd = activeRange;
    this.dateRangeService.setActiveRangeEnd(activeRange);
  }
  /**
   * @hidden
   * When in adaptive mode range should not be set automatically on calendar value change but only on accept
   */
  shouldSetRange = true;
  /**
   * Fires when the active range end changes. For more information, refer to
   * the section on [events](slug:events_multiviewcalendar).
   */
  activeRangeEndChange = new EventEmitter();
  /**
   * Fires when the selection range changes. For more information, refer to
   * the section on [events](slug:events_multiviewcalendar).
   */
  selectionRangeChange = new EventEmitter();
  get calendarRange() {
    return this.selectionRange || EMPTY_SELECTIONRANGE;
  }
  calendarSubscriptions = new Subscription();
  range;
  constructor(calendar, cdr, element, renderer, dateRangeService) {
    this.calendar = calendar;
    this.cdr = cdr;
    this.element = element;
    this.dateRangeService = dateRangeService;
    this.dateRangeService = this.dateRangeService || new DateRangeService(renderer);
    renderer.setAttribute(element.nativeElement, "aria-multiselectable", "true");
  }
  ngOnInit() {
    const calendar = this.calendar;
    const dateRangeService = this.dateRangeService;
    calendar.min = either(dateRangeService.min, calendar.min);
    calendar.max = either(dateRangeService.max, calendar.max);
    this.addSubscriptions(calendar.cellEnter.subscribe((value) => this.handleHover(value)), calendar.valueChange.subscribe((value) => this.handleChange(value)), dateRangeService.focusedDate$.subscribe((focusedDate) => {
      if (!isEqual(calendar.focusedDate, focusedDate)) {
        calendar.focusedDate = focusedDate;
      }
    }), dateRangeService.activeRangeEnd$.subscribe((rangeEnd) => {
      if (calendar.activeRangeEnd === rangeEnd) {
        return;
      }
      calendar.activeRangeEnd = rangeEnd;
      this.activeRangeEndChange.emit(rangeEnd);
      this.cdr.markForCheck();
    }), dateRangeService.range$.subscribe((range2) => {
      if (!this.isEqualCalendarRange(range2)) {
        this.acceptAndEmit(range2);
      }
      this.updateFocusedDate(range2);
    }), fromEvent(this.element.nativeElement, "blur").subscribe(() => this.handleBlur()));
  }
  ngOnDestroy() {
    this.calendarSubscriptions.unsubscribe();
  }
  /**
   * @hidden
   */
  handleChange(value) {
    const service = this.dateRangeService;
    const autoCorrect = this.autoCorrectOn === "change" && this.shouldAutoCorrect(value);
    const activeEnd = this.calendar.activeRangeEnd !== "end" ? "end" : autoCorrect ? "end" : "start";
    this.range = autoCorrect ? clampRange(value) : this.updateRange(value);
    if (!isEqualRange(service.selectionRange, this.range)) {
      this.acceptAndEmit(this.range);
      service.setActiveRangeEnd(activeEnd);
      if (this.shouldSetRange) {
        this.setRange();
      }
    }
  }
  setRange(range2) {
    this.dateRangeService.setRange(this.range ? this.range : range2);
  }
  addSubscriptions(...subscriptions) {
    subscriptions.forEach((s) => this.calendarSubscriptions.add(s));
  }
  isEqualCalendarRange(range2) {
    return isEqualRange(this.calendar.selectionRange, range2);
  }
  handleBlur() {
    const {
      start,
      end
    } = this.calendarRange;
    const autoCorrect = this.autoCorrectOn === "blur" && start !== null && end !== null && end < start;
    if (autoCorrect) {
      this.dateRangeService.setRange(clampRange(start));
    }
  }
  handleHover(value) {
    if (this.hasCompleteRange()) {
      return;
    }
    const {
      start,
      end
    } = this.calendarRange;
    const activeRangeEnd = this.calendar.activeRangeEnd;
    const updateRange = start && activeRangeEnd === "end" || end && activeRangeEnd === "start";
    if (updateRange) {
      this.setSelectionRange(this.updateRange(value));
    }
  }
  hasCompleteRange() {
    const {
      start,
      end
    } = this.dateRangeService.selectionRange || EMPTY_SELECTIONRANGE;
    return Boolean(start) && Boolean(end);
  }
  shouldAutoCorrect(value) {
    const {
      end,
      start
    } = this.calendarRange;
    if (this.calendar.activeRangeEnd !== "end") {
      return end !== null && value > end;
    } else {
      return start !== null && value < start;
    }
  }
  updateFocusedDate(range2) {
    if (!range2 || this.dateRangeService.focusedDate) {
      return;
    }
    this.dateRangeService.setFocusedDate(range2.start || range2.end);
  }
  updateRange(value) {
    const {
      end,
      start
    } = this.calendarRange;
    return this.calendar.activeRangeEnd !== "end" ? {
      start: value,
      end
    } : {
      start,
      end: value
    };
  }
  setSelectionRange(range2) {
    this.calendar.selectionRange = range2;
    this.calendar.writeValue(null);
  }
  acceptAndEmit(range2) {
    this.setSelectionRange(range2);
    this.selectionRangeChange.emit(range2);
  }
  static ɵfac = function DateRangeSelectionDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DateRangeSelectionDirective)(ɵɵdirectiveInject(MultiViewCalendarComponent), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(DateRangeService, 8));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _DateRangeSelectionDirective,
    selectors: [["", "kendoDateRangeSelection", ""]],
    inputs: {
      autoCorrectOn: "autoCorrectOn",
      selectionRange: "selectionRange",
      activeRangeEnd: "activeRangeEnd",
      shouldSetRange: "shouldSetRange"
    },
    outputs: {
      activeRangeEndChange: "activeRangeEndChange",
      selectionRangeChange: "selectionRangeChange"
    },
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DateRangeSelectionDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoDateRangeSelection]",
      standalone: true
    }]
  }], () => [{
    type: MultiViewCalendarComponent
  }, {
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: DateRangeService,
    decorators: [{
      type: Optional
    }]
  }], {
    autoCorrectOn: [{
      type: Input
    }],
    selectionRange: [{
      type: Input
    }],
    activeRangeEnd: [{
      type: Input
    }],
    shouldSetRange: [{
      type: Input
    }],
    activeRangeEndChange: [{
      type: Output
    }],
    selectionRangeChange: [{
      type: Output
    }]
  });
})();
var DateRangePopupMessages = class _DateRangePopupMessages extends ComponentMessages {
  /**
   * The text of the **Accept** button in the popup footer of the DateRange Popup.
   */
  accept;
  /**
   * The label of the **Accept** button in the popup footer of the DateRange Popup.
   */
  acceptLabel;
  /**
   * The text of the **Cancel** button in the popup footer of the DateRange Popup.
   */
  cancel;
  /**
   * The label of the **Cancel** button in the popup footer of the DateRange Popup.
   */
  cancelLabel;
  /**
   * The title of the Close button of the ActionSheet that is rendered instead of the Popup when using small screen devices in adaptive mode.
   */
  adaptiveCloseButtonTitle;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵDateRangePopupMessages_BaseFactory;
    return function DateRangePopupMessages_Factory(__ngFactoryType__) {
      return (ɵDateRangePopupMessages_BaseFactory || (ɵDateRangePopupMessages_BaseFactory = ɵɵgetInheritedFactory(_DateRangePopupMessages)))(__ngFactoryType__ || _DateRangePopupMessages);
    };
  })();
  static ɵdir = ɵɵdefineDirective({
    type: _DateRangePopupMessages,
    selectors: [["kendo-daterangepopup-messages-base"]],
    inputs: {
      accept: "accept",
      acceptLabel: "acceptLabel",
      cancel: "cancel",
      cancelLabel: "cancelLabel",
      adaptiveCloseButtonTitle: "adaptiveCloseButtonTitle"
    },
    features: [ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DateRangePopupMessages, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line
      selector: "kendo-daterangepopup-messages-base"
    }]
  }], null, {
    accept: [{
      type: Input
    }],
    acceptLabel: [{
      type: Input
    }],
    cancel: [{
      type: Input
    }],
    cancelLabel: [{
      type: Input
    }],
    adaptiveCloseButtonTitle: [{
      type: Input
    }]
  });
})();
var DateRangePopupLocalizedMessagesDirective = class _DateRangePopupLocalizedMessagesDirective extends DateRangePopupMessages {
  service;
  constructor(service) {
    super();
    this.service = service;
  }
  static ɵfac = function DateRangePopupLocalizedMessagesDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DateRangePopupLocalizedMessagesDirective)(ɵɵdirectiveInject(LocalizationService));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _DateRangePopupLocalizedMessagesDirective,
    selectors: [["", "kendoDateRangePopupLocalizedMessages", ""]],
    standalone: true,
    features: [ɵɵProvidersFeature([{
      provide: DateRangePopupMessages,
      useExisting: forwardRef(() => _DateRangePopupLocalizedMessagesDirective)
    }]), ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DateRangePopupLocalizedMessagesDirective, [{
    type: Directive,
    args: [{
      providers: [{
        provide: DateRangePopupMessages,
        useExisting: forwardRef(() => DateRangePopupLocalizedMessagesDirective)
      }],
      selector: "[kendoDateRangePopupLocalizedMessages]",
      standalone: true
    }]
  }], () => [{
    type: LocalizationService
  }], null);
})();
var DateRangePopupComponent = class _DateRangePopupComponent {
  popupService;
  dateRangeService;
  zone;
  renderer;
  localization;
  cdr;
  rtl;
  adaptiveService;
  container;
  actionSheet;
  defaultTemplate;
  contentTemplate;
  dateRangeSelectionDirective;
  viewCalendar;
  contentCalendar;
  /**
   * @hidden
   *
   * Determines whether to display the MultiViewCalendar header.
   */
  showCalendarHeader = true;
  /**
   * Specifies the focused date of the MultiViewCalendar component.
   * Defines which date receives focus when the component loads ([see example]({% slug dates_multiviewcalendar %}#toc-focused-dates)).
   *
   * If the MultiViewCalendar is out of the min or max range, it normalizes the defined `focusedDate`.
   */
  focusedDate;
  /**
   * Specifies the dates in the MultiViewCalendar that you want to disable ([see example]({% slug disabled_dates_multiviewcalendar %})).
   */
  disabledDates;
  /**
   * Specifies the initial view that the MultiViewCalendar displays when it loads ([see example]({% slug viewoptions_multiviewcalendar %})).
   * By default, the active view is `month`.
   *
   * You have to set `activeView` within the `topView`-`bottomView` range.
   *
   * @default 'month
   */
  activeView = CalendarViewEnum[CalendarViewEnum.month];
  /**
   * Specifies the lowest view level that users can navigate to ([see example](slug:viewdepth_multiviewcalendar)).
   *
   * @default 'month'
   */
  bottomView = CalendarViewEnum[CalendarViewEnum.month];
  /**
   * Specifies the highest view level that users can navigate to ([see example](slug:viewdepth_multiviewcalendar)).
   *
   * @default 'century'
   */
  topView = CalendarViewEnum[CalendarViewEnum.century];
  /**
   * Specifies the minimum date that users can select ([see example]({% slug dates_multiviewcalendar %}#toc-focused-dates)).
   *
   * @default '1900-01-01'
   */
  min;
  /**
   * Specifies the maximum date that users can select ([see example]({% slug dates_multiviewcalendar %}#toc-focused-dates)).
   *
   * @default '2099-12-31'
   */
  max;
  /**
   * Determines whether users can select dates in reverse order.
   * When you set `allowReverse` to `true`, the component does not validate if the start date comes after the end date.
   *
   * @default false
   */
  allowReverse = false;
  /**
   * Determines whether to animate transitions when users navigate between views.
   *
   * @default false
   */
  animateNavigation = false;
  /**
   * Determines whether the MultiViewCalendar is interactive ([see example]({% slug disabled_multiviewcalendar %})).
   * When you set `disabled` to `true`, users cannot interact with the component.
   *
   * @default false
   */
  disabled = false;
  /**
   * Specifies the number of calendar views to display side by side.
   *
   * @default 2
   */
  views = 2;
  /**
   * Determines whether to display week numbers in the `month` view ([see example]({% slug weeknumcolumn_multiviewcalendar %})).
   *
   * @default false
   */
  weekNumber = false;
  /**
   * Controls the popup animations.
   * When you set `animate` to `true`, the popup displays opening and closing animations.
   * For more information about controlling the popup animations,
   * refer to the article on [animations]({% slug animations_popup %}).
   *
   * @default true
   */
  animate = true;
  /**
   * Specifies the element that serves as an anchor for the popup.
   * The popup opens next to this element.
   * For more information, refer to the section on
   * [aligning to specific components]({% slug alignmentpositioning_popup %}#toc-aligning-to-components).
   */
  anchor;
  /**
   * Specifies the alignment point for the anchor element.
   * For more information, refer to the section on
   * [positioning]({% slug alignmentpositioning_popup %}#toc-positioning).
   */
  anchorAlign;
  /**
   * Determines whether to display a header for each view ([see example]({% slug viewheader_multiviewcalendar %})).
   * For example, displays the month name in the month view.
   *
   * @default false
   */
  showViewHeader = false;
  /**
   * Determines whether to display days from adjacent months in the current month view ([see example]({% slug viewoptions_multiviewcalendar %}#toc-displaying-other-month-days)).
   *
   * @default false
   */
  showOtherMonthDays = false;
  /**
   * Specifies where to render the popup container.
   * By default, the popup renders in the root component.
   *
   * @default 'root'
   */
  appendTo;
  /**
   * Configures how the popup behaves when it encounters viewport boundaries.
   * For more information, refer to the article on
   * [viewport boundary detection]({% slug viewportboundarydetection_popup %}).
   *
   * @default { horizontal: 'fit', vertical: 'flip' }
   */
  collision = {
    horizontal: "fit",
    vertical: "flip"
  };
  /**
   * Specifies the alignment point for the popup element.
   * For more information, refer to the section on
   * [positioning]({% slug alignmentpositioning_popup %}#toc-positioning).
   */
  popupAlign;
  /**
   * Specifies the margin around the popup in pixels.
   * Creates empty space between the popup and its anchor element.
   */
  margin;
  /**
   * Determines whether the component uses adaptive rendering for different screen sizes.
   * By default, adaptive rendering is disabled.
   *
   * @default 'none'
   */
  adaptiveMode = "none";
  /**
   * Specifies the title text for the input element and the header of the action sheet.
   * Applies only when [`AdaptiveMode` is set to `auto`](slug:api_dateinputs_adaptivemode).
   *
   * @default ""
   */
  adaptiveTitle = "";
  /**
   * Specifies the subtitle text displayed in the header of the action sheet.
   * Applies only when [`AdaptiveMode` is set to `auto`](slug:api_dateinputs_adaptivemode).
   *
   * @default ""
   */
  adaptiveSubtitle = "";
  /**
   * @hidden
   *
   * TODO: Make visible when the Infinite Calendar is fixed to set properly the size option.
   * Sets the size of the component.
   * @default 'medium'
   */
  size;
  /**
   * Fires when the popup is about to open ([see example](slug:popup_daterange#toc-events)).
   * You can prevent this event to keep the popup closed.
   */
  open = new EventEmitter();
  /**
   * Fires when the popup is about to close ([see example](slug:popup_daterange#toc-events)).
   * You can prevent this event to keep the popup open.
   */
  close = new EventEmitter();
  /**
   * Fires when the calendar element loses focus ([see example](slug:popup_daterange#toc-events)).
   */
  onBlur = new EventEmitter();
  /**
   * Fires when the calendar element receives focus ([see example](slug:popup_daterange#toc-events)).
   */
  onFocus = new EventEmitter();
  /**
   * Fires when the popup closes due to an `ESC` keypress or when it leaves the viewport ([see example](slug:popup_daterange#toc-events)).
   */
  cancel = new EventEmitter();
  /**
   * Gets the active calendar that displays in the popup.
   *
   * When the popup is closed, the property returns `null`.
   */
  get calendar() {
    return this._calendar;
  }
  set calendar(calendar) {
    this._calendar = calendar;
    this.subscribeFocusBlur(calendar);
  }
  /**
   * Gets the active state of the component.
   * Returns `true` when the opened calendar is active.
   */
  get isActive() {
    return this.calendar && this.calendar.isActive || this.actionSheet && this.actionSheet.expanded;
  }
  /**
   * @hidden
   */
  get isAdaptiveModeEnabled() {
    return this.adaptiveMode === "auto";
  }
  /**
   * @hidden
   */
  get isAdaptive() {
    return this.isAdaptiveModeEnabled && this.windowSize !== "large";
  }
  /**
   * @hidden
   */
  popupRef;
  /**
   * @hidden
   */
  popupUID = guid();
  /**
   * @hidden
   */
  checkIcon = checkIcon;
  /**
   * @hidden
   */
  windowSize;
  /**
   * Gets or sets the visibility state of the component.
   */
  set show(show) {
    if (this._show === show) {
      return;
    }
    const event = new PreventableEvent();
    if (show) {
      this.open.emit(event);
    } else {
      this.close.emit(event);
    }
    if (event.isDefaultPrevented()) {
      return;
    }
    this.toggleDateRange(show);
  }
  get show() {
    return this._show;
  }
  /**
   * @hidden
   */
  handleAccept() {
    this.dateRangeService.setRange(this._rangeSelection);
    this.show = false;
  }
  activateSubscription;
  blurSubscription;
  focusSubscription;
  calendarSubscriptions = new Subscription();
  popupSubscriptions = new Subscription();
  windowBlurSubscription;
  localizationSubscriptions = new Subscription();
  resolvedPromise = Promise.resolve();
  _calendar;
  _show;
  _rangeSelection;
  constructor(popupService, dateRangeService, zone, renderer, localization, cdr, rtl, adaptiveService) {
    this.popupService = popupService;
    this.dateRangeService = dateRangeService;
    this.zone = zone;
    this.renderer = renderer;
    this.localization = localization;
    this.cdr = cdr;
    this.rtl = rtl;
    this.adaptiveService = adaptiveService;
  }
  ngOnInit() {
    this.dateRangeService.registerPopup(this);
    if (this.localization) {
      this.localizationSubscriptions.add(this.localization.changes.subscribe(() => this.cdr.markForCheck()));
    }
  }
  ngAfterViewInit() {
    this.calendarSubscriptions.add(this.contentCalendar.changes.subscribe((changes) => {
      this.calendar = changes.first;
      this.actionSheet.titleId = changes.first?.headerId;
      this.cdr.detectChanges();
    }));
    this.calendarSubscriptions.add(this.viewCalendar.changes.subscribe((changes) => {
      this.calendar = changes.first;
      this.actionSheet.titleId = changes.first?.headerId;
      this.cdr.detectChanges();
    }));
    this.calendarSubscriptions.add(this.dateRangeService.startInput$?.value?.valueChange.subscribe((res) => {
      if (this.calendar) {
        if (!res && this.dateRangeService.selectionRange.end) {
          this.calendar.shouldHoverWhenNoStart = true;
        } else {
          this.calendar.shouldHoverWhenNoStart = false;
        }
      }
    }));
    if (isWindowAvailable()) {
      this.zone.runOutsideAngular(() => this.windowBlurSubscription = fromEvent(window, "blur").subscribe(this.handleWindowBlur.bind(this)));
    }
  }
  ngOnDestroy() {
    this.destroyPopup();
    this.calendarSubscriptions.unsubscribe();
    if (this.activateSubscription) {
      this.activateSubscription.unsubscribe();
    }
    if (this.blurSubscription) {
      this.blurSubscription.unsubscribe();
      this.focusSubscription.unsubscribe();
    }
    if (this.windowBlurSubscription) {
      this.windowBlurSubscription.unsubscribe();
    }
  }
  /**
   * @hidden
   *
   */
  onRangeSelectionChange(rangeSelection) {
    this.dateRangeService.setActiveRangeEnd(rangeSelection.activeRangeEnd);
    if (!this.isAdaptive) {
      this.dateRangeService.setRange(rangeSelection.selectionRange);
    } else {
      this._rangeSelection = rangeSelection.selectionRange;
    }
  }
  /**
   * Opens the popup component and focuses the calendar.
   */
  activate() {
    if (this.show === true) {
      return;
    }
    if (this.activateSubscription) {
      this.activateSubscription.unsubscribe();
    }
    this.show = true;
    this.cdr.markForCheck();
    this.zone.runOutsideAngular(() => {
      this.activateSubscription = merge(this.contentCalendar.changes, this.viewCalendar.changes).pipe(filter((changes) => changes && changes.first), map((changes) => changes.first)).subscribe((calendar) => setTimeout(() => {
        calendar.focus();
        this.addCalendarSubscription(calendar);
      }));
    });
  }
  /**
   * Focuses the calendar if it is available.
   */
  focus() {
    if (this.calendar) {
      this.calendar.focus();
    }
  }
  /**
   * Checks if a focused element is inside the popup.
   *
   * @returns {boolean} Returns `true` if the focused element is inside the popup.
   */
  hasActiveContent() {
    if (!isDocumentAvailable() || !this.popupRef) {
      return false;
    }
    return this.popupRef.popupElement.contains(document.activeElement);
  }
  /**
   * Toggles the visibility of the popup or action sheet.
   * When you use the `toggle` method to show or hide the popup or action sheet,
   * the `open` and `close` events do not fire.
   *
   * @param {boolean} show The state of the popup.
   */
  toggle(show) {
    this.resolvedPromise.then(() => {
      this.toggleDateRange(show === void 0 ? !this.show : show);
    });
  }
  /**
   * @hidden
   *
   * Closes the popup and triggers the `cancel` event.
   */
  cancelPopup() {
    this.show = false;
    this.cancel.emit();
  }
  /**
   * @hidden
   */
  onResize() {
    const currentWindowSize = this.adaptiveService.size;
    if (!this.show || this.windowSize === currentWindowSize) {
      return;
    }
    if (this.actionSheet.expanded) {
      this.toggleActionSheet(false);
    } else {
      this.togglePopup(false);
    }
    this.windowSize = currentWindowSize;
  }
  /**
   * @hidden
   */
  closePopup(event) {
    event.preventDefault();
    event.stopPropagation();
    this.toggle(false);
    if (this.dateRangeService.activeRangeEnd === "start" || !this.dateRangeService.activeRangeEnd) {
      this.dateRangeService.startInput$.value.focus();
    } else {
      this.dateRangeService.endInput$.value.focus();
    }
  }
  /**
   * @hidden
   */
  handleTab(event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.dateRangeService.activeRangeEnd === "start" || !this.dateRangeService.activeRangeEnd) {
      this.dateRangeService.setActiveRangeEnd("end");
    } else {
      this.dateRangeService.endInput$.value.focus();
    }
  }
  /**
   * @hidden
   */
  handleShiftTab(event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.dateRangeService.activeRangeEnd === "end") {
      this.dateRangeService.setActiveRangeEnd("start");
    } else {
      this.dateRangeService.startInput$.value.focus();
    }
  }
  handleWindowBlur() {
    if (!this.show || this.actionSheet.expanded) {
      return;
    }
    if (hasObservers(this.close)) {
      this.zone.run(() => this.show = false);
    } else {
      this.show = false;
    }
  }
  handleMouseLeave() {
    this.dateRangeService.setRange(this.dateRangeService.selectionRange);
  }
  handleKeydown(event) {
    const {
      altKey
    } = event;
    const code = normalizeKeys(event);
    if (code === Keys.Escape || altKey && code === Keys.ArrowUp) {
      this.zone.run(() => this.cancelPopup());
    }
  }
  subscribeFocusBlur(calendar) {
    if (this.blurSubscription) {
      this.blurSubscription.unsubscribe();
      this.focusSubscription.unsubscribe();
    }
    if (!calendar) {
      return;
    }
    const calendarElement = calendar.element.nativeElement.querySelector(".k-calendar-view");
    this.blurSubscription = fromEvent(calendarElement, "blur").subscribe(() => this.onBlur.emit());
    this.focusSubscription = fromEvent(calendarElement, "focus").subscribe(() => this.onFocus.emit());
  }
  addPopupSubscriptions(...subscriptions) {
    if (!isPresent2(this.popupSubscriptions)) {
      this.popupSubscriptions = new Subscription();
    }
    subscriptions.forEach((s) => this.popupSubscriptions.add(s));
  }
  get _appendTo() {
    const appendTo = this.appendTo;
    if (!appendTo || appendTo === "root") {
      return void 0;
    }
    return appendTo === "component" ? this.container : appendTo;
  }
  togglePopup(show) {
    this._show = show;
    if (this.popupRef) {
      this.destroyPopup();
    }
    if (this._show) {
      const direction = this.rtl ? "right" : "left";
      this.popupRef = this.popupService.open({
        anchor: this.anchor,
        anchorAlign: this.anchorAlign || {
          vertical: "bottom",
          horizontal: direction
        },
        animate: this.animate,
        appendTo: this._appendTo,
        collision: this.collision,
        content: (this.contentTemplate || {}).templateRef || this.defaultTemplate,
        margin: this.margin,
        popupClass: "k-calendar-container k-daterangepicker-popup",
        popupAlign: this.popupAlign || {
          vertical: "top",
          horizontal: direction
        },
        positionMode: "absolute"
      });
      const {
        popupElement,
        popupAnchorViewportLeave
      } = this.popupRef;
      this.renderer.setAttribute(popupElement.querySelector(".k-popup"), "id", this.popupUID);
      this.addPopupSubscriptions(this.zone.runOutsideAngular(() => fromEvent(popupElement, "keydown").subscribe(this.handleKeydown.bind(this))), fromEvent(popupElement, "mouseleave").subscribe(this.handleMouseLeave.bind(this)), popupAnchorViewportLeave.subscribe(() => this.cancelPopup()));
    }
  }
  destroyPopup() {
    if (isPresent2(this.popupRef)) {
      this.popupRef.close();
      this.popupRef = null;
    }
    if (isPresent2(this.popupSubscriptions)) {
      this.popupSubscriptions.unsubscribe();
    }
  }
  toggleDateRange(show) {
    this.windowSize = this.adaptiveService.size;
    if (this.isAdaptive) {
      this.toggleActionSheet(show);
    } else {
      this.togglePopup(show);
    }
  }
  toggleActionSheet(show) {
    if (show === this._show) {
      return;
    }
    if (show && !this.actionSheet.expanded) {
      this.actionSheet.toggle();
      this.renderer.setAttribute(this.actionSheet.element.nativeElement, "id", this.popupUID);
    } else if (!show && this.actionSheet.expanded) {
      this.actionSheet.toggle();
    }
    this._show = show;
  }
  addCalendarSubscription = (calendar) => {
    this.calendarSubscriptions.add(calendar.viewList.focusedCellChange.subscribe((id) => {
      this.dateRangeService.setActiveDescendent(id);
    }));
  };
  static ɵfac = function DateRangePopupComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DateRangePopupComponent)(ɵɵdirectiveInject(PopupService), ɵɵdirectiveInject(DateRangeService), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(RTL, 8), ɵɵdirectiveInject(AdaptiveService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _DateRangePopupComponent,
    selectors: [["kendo-daterange-popup"]],
    contentQueries: function DateRangePopupComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, DateRangePopupTemplateDirective, 5);
        ɵɵcontentQuery(dirIndex, MultiViewCalendarComponent, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentCalendar = _t);
      }
    },
    viewQuery: function DateRangePopupComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c14, 5, ViewContainerRef);
        ɵɵviewQuery(_c17, 5);
        ɵɵviewQuery(_c38, 5);
        ɵɵviewQuery(DateRangeSelectionDirective, 5);
        ɵɵviewQuery(MultiViewCalendarComponent, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.container = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.actionSheet = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.defaultTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.dateRangeSelectionDirective = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.viewCalendar = _t);
      }
    },
    inputs: {
      showCalendarHeader: "showCalendarHeader",
      focusedDate: "focusedDate",
      disabledDates: "disabledDates",
      activeView: "activeView",
      bottomView: "bottomView",
      topView: "topView",
      min: "min",
      max: "max",
      allowReverse: "allowReverse",
      animateNavigation: "animateNavigation",
      disabled: "disabled",
      views: "views",
      weekNumber: "weekNumber",
      animate: "animate",
      anchor: "anchor",
      anchorAlign: "anchorAlign",
      showViewHeader: "showViewHeader",
      showOtherMonthDays: "showOtherMonthDays",
      appendTo: "appendTo",
      collision: "collision",
      popupAlign: "popupAlign",
      margin: "margin",
      adaptiveMode: "adaptiveMode",
      adaptiveTitle: "adaptiveTitle",
      adaptiveSubtitle: "adaptiveSubtitle",
      size: "size"
    },
    outputs: {
      open: "open",
      close: "close",
      onBlur: "blur",
      onFocus: "focus",
      cancel: "cancel"
    },
    exportAs: ["kendo-daterange-popup"],
    standalone: true,
    features: [ɵɵProvidersFeature([LocalizationService, {
      provide: L10N_PREFIX,
      useValue: "kendo.daterangepopup"
    }]), ɵɵStandaloneFeature],
    decls: 8,
    vars: 7,
    consts: () => {
      let i18n_60;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_60 = goog.getMsg("Set");
        i18n_60 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_60;
      } else {
        i18n_60 = $localize`:kendo.daterangepopup.accept|The Accept button text in the timepicker component:Set`;
      }
      let i18n_61;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_61 = goog.getMsg("Set time");
        i18n_61 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_61;
      } else {
        i18n_61 = $localize`:kendo.daterangepopup.acceptLabel|The label for the Accept button in the timepicker component:Set time`;
      }
      let i18n_62;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_62 = goog.getMsg("Cancel");
        i18n_62 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_62;
      } else {
        i18n_62 = $localize`:kendo.daterangepopup.cancel|The Cancel button text in the timepicker component:Cancel`;
      }
      let i18n_63;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_63 = goog.getMsg("Cancel changes");
        i18n_63 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_63;
      } else {
        i18n_63 = $localize`:kendo.daterangepopup.cancelLabel|The label for the Cancel button in the timepicker component:Cancel changes`;
      }
      let i18n_64;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_64 = goog.getMsg("Close");
        i18n_64 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DATEINPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_DATEINPUTS_MJS_64;
      } else {
        i18n_64 = $localize`:kendo.daterangepopup.adaptiveCloseButtonTitle|The title of the Close button of the ActionSheet that is rendered instead of the Popup when using small screen devices in adaptive mode:Close`;
      }
      return [["container", ""], ["defaultTemplate", ""], ["actionSheet", ""], ["kendoDateRangePopupLocalizedMessages", "", "accept", i18n_60, "acceptLabel", i18n_61, "cancel", i18n_62, "cancelLabel", i18n_63, "adaptiveCloseButtonTitle", i18n_64], [3, "overlayClick", "collapse", "cssClass", "cssStyle"], ["kendoActionSheetTemplate", ""], ["orientation", "horizontal", "selection", "range", 3, "onClosePopup", "onTabPress", "onShiftTabPress", "rangeSelectionChange", "activeView", "bottomView", "animateNavigation", "disabled", "views", "weekNumber", "topView", "disabledDates", "min", "max", "showCalendarHeader", "focusedDate", "allowReverse", "showViewHeader", "showOtherMonthDays", "size", "value"], [1, "k-actionsheet-titlebar"], [1, "k-actionsheet-titlebar-group"], [1, "k-actionsheet-title"], [1, "k-text-center"], [1, "k-actionsheet-subtitle", "k-text-center"], [1, "k-actionsheet-actions"], ["kendoButton", "", "type", "button", "icon", "check", "fillMode", "flat", "themeColor", "primary", "size", "large", "innerCssClass", "k-button-icon", 3, "click", "svgIcon", "tabIndex"], [1, "k-actionsheet-content"], [1, "k-scrollable-wrap"], ["size", "large", "orientation", "vertical", "selection", "range", 3, "rangeSelectionChange", "animateNavigation", "disabled", "views", "weekNumber", "disabledDates", "activeView", "bottomView", "topView", "min", "max", "showCalendarHeader", "focusedDate", "allowReverse", "showViewHeader", "showOtherMonthDays", "value"], [1, "k-actions", "k-actions-stretched", "k-actions-horizontal", "k-actionsheet-footer"], ["kendoButton", "", "type", "button", "size", "large", 1, "k-time-cancel", 3, "click"], ["kendoButton", "", "type", "button", "size", "large", "themeColor", "primary", 1, "k-time-accept", 3, "click"], [3, "resize"]];
    },
    template: function DateRangePopupComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵelementContainer(0, 3)(1, null, 0);
        ɵɵtemplate(3, DateRangePopupComponent_ng_template_3_Template, 1, 17, "ng-template", null, 1, ɵɵtemplateRefExtractor);
        ɵɵelementStart(5, "kendo-actionsheet", 4, 2);
        ɵɵlistener("overlayClick", function DateRangePopupComponent_Template_kendo_actionsheet_overlayClick_5_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.show = false);
        })("collapse", function DateRangePopupComponent_Template_kendo_actionsheet_collapse_5_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onBlur.emit());
        });
        ɵɵtemplate(7, DateRangePopupComponent_ng_template_7_Template, 16, 29, "ng-template", 5);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵadvance(5);
        ɵɵproperty("cssClass", ɵɵpureFunction2(2, _c19, ctx.windowSize === "small", ctx.windowSize === "medium"))("cssStyle", ɵɵpureFunction1(5, _c20, ctx.windowSize === "small" ? "100vh" : "60vh"));
      }
    },
    dependencies: [DateRangePopupLocalizedMessagesDirective, MultiViewCalendarComponent, ActionSheetComponent, ActionSheetTemplateDirective, ResizeSensorComponent, ButtonComponent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DateRangePopupComponent, [{
    type: Component,
    args: [{
      exportAs: "kendo-daterange-popup",
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.daterangepopup"
      }],
      selector: "kendo-daterange-popup",
      template: `
        <ng-container kendoDateRangePopupLocalizedMessages
          i18n-accept="kendo.daterangepopup.accept|The Accept button text in the timepicker component"
          accept="Set"
        
          i18n-acceptLabel="kendo.daterangepopup.acceptLabel|The label for the Accept button in the timepicker component"
          acceptLabel="Set time"
        
          i18n-cancel="kendo.daterangepopup.cancel|The Cancel button text in the timepicker component"
          cancel="Cancel"
        
          i18n-cancelLabel="kendo.daterangepopup.cancelLabel|The label for the Cancel button in the timepicker component"
          cancelLabel="Cancel changes"
        
          i18n-adaptiveCloseButtonTitle="kendo.daterangepopup.adaptiveCloseButtonTitle|The title of the Close button of the ActionSheet that is rendered instead of the Popup when using small screen devices in adaptive mode"
          adaptiveCloseButtonTitle="Close"
          >
        </ng-container>
        <ng-container #container></ng-container>
        <ng-template #defaultTemplate>
          <kendo-multiviewcalendar
            [activeView]="activeView"
            [bottomView]="bottomView"
            [animateNavigation]="animateNavigation"
            [disabled]="disabled"
            orientation="horizontal"
            [views]="views"
            [weekNumber]="weekNumber"
            [topView]="topView"
            [disabledDates]="disabledDates"
            [min]="min"
            [max]="max"
            [showCalendarHeader]="showCalendarHeader"
            [focusedDate]="focusedDate"
            [allowReverse]="allowReverse"
            [showViewHeader]="showViewHeader"
            [showOtherMonthDays]="showOtherMonthDays"
            selection="range"
            [size]="size"
            [value]="dateRangeService.selectionRange"
            (onClosePopup)="closePopup($event)"
            (onTabPress)="handleTab($event)"
            (onShiftTabPress)="handleShiftTab($event)"
            (rangeSelectionChange)="onRangeSelectionChange($event)"
          ></kendo-multiviewcalendar>
        </ng-template>
        
        <kendo-actionsheet
          #actionSheet
          (overlayClick)="show=false"
          (collapse)="onBlur.emit()"
            [cssClass]="{
                'k-adaptive-actionsheet': true,
                'k-actionsheet-fullscreen': windowSize === 'small',
                'k-actionsheet-bottom': windowSize === 'medium'
            }"
            [cssStyle]="{
                height: windowSize === 'small' ? '100vh' : '60vh'
            }"
          >
          <ng-template kendoActionSheetTemplate>
            <!-- Resize sensor needs to be inside the template because the date-range-popup
            element itself always has 0x0 size and does not trigger the sensor.
            Note: The popup in non-adaptive mode closes on window blur -->
            @if (isAdaptiveModeEnabled) {
              <kendo-resize-sensor (resize)="onResize()"></kendo-resize-sensor>
            }
            <div class="k-actionsheet-titlebar">
              <div class="k-actionsheet-titlebar-group">
                <div class="k-actionsheet-title">
                  @if (adaptiveTitle) {
                    <div class="k-text-center">{{ adaptiveTitle }}</div>
                  }
                  @if (adaptiveSubtitle) {
                    <div class="k-actionsheet-subtitle k-text-center">{{ adaptiveSubtitle }}</div>
                  }
                </div>
                <div class="k-actionsheet-actions">
                  <button
                    kendoButton
                    type="button"
                    icon="check"
                    [attr.title]="localization.get('adaptiveCloseButtonTitle')"
                    [svgIcon]="checkIcon"
                    fillMode="flat"
                    themeColor="primary"
                    [tabIndex]="-1"
                    size="large"
                    innerCssClass="k-button-icon"
                    (click)="handleAccept()">
                  </button>
                </div>
              </div>
            </div>
            <div class="k-actionsheet-content">
              <div class="k-scrollable-wrap">
                <kendo-multiviewcalendar
                  size="large"
                  [animateNavigation]="animateNavigation"
                  [disabled]="disabled"
                  orientation="vertical"
                  [views]="views"
                  [weekNumber]="weekNumber"
                  [disabledDates]="disabledDates"
                  [activeView]="activeView"
                  [bottomView]="bottomView"
                  [topView]="topView"
                  [min]="min"
                  [max]="max"
                  [showCalendarHeader]="showCalendarHeader"
                  [focusedDate]="focusedDate"
                  [allowReverse]="allowReverse"
                  [showViewHeader]="showViewHeader"
                  [showOtherMonthDays]="showOtherMonthDays"
                  [focusedDate]="dateRangeService.focusedDate"
                  [value]="dateRangeService.selectionRange"
                  selection="range"
                  (rangeSelectionChange)="onRangeSelectionChange($event)"
                  >
                </kendo-multiviewcalendar>
              </div>
            </div>
            <div class="k-actions k-actions-stretched k-actions-horizontal k-actionsheet-footer">
              <button kendoButton
                class="k-time-cancel"
                type="button"
                size="large"
                [attr.title]="localization.get('cancelLabel')"
                [attr.aria-label]="localization.get('cancelLabel')"
                (click)="show=false"
                >
                {{localization.get('cancel')}}
              </button>
        
              <button kendoButton
                class="k-time-accept"
                type="button"
                size="large"
                themeColor="primary"
                [attr.title]="localization.get('acceptLabel')"
                [attr.aria-label]="localization.get('acceptLabel')"
                (click)="handleAccept()"
                >
                {{localization.get('accept')}}
              </button>
            </div>
          </ng-template>
        </kendo-actionsheet>
        `,
      standalone: true,
      imports: [DateRangePopupLocalizedMessagesDirective, MultiViewCalendarComponent, ActionSheetComponent, ActionSheetTemplateDirective, ResizeSensorComponent, ButtonComponent]
    }]
  }], () => [{
    type: PopupService
  }, {
    type: DateRangeService
  }, {
    type: NgZone
  }, {
    type: Renderer2
  }, {
    type: LocalizationService
  }, {
    type: ChangeDetectorRef
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [RTL]
    }]
  }, {
    type: AdaptiveService
  }], {
    container: [{
      type: ViewChild,
      args: ["container", {
        read: ViewContainerRef,
        static: false
      }]
    }],
    actionSheet: [{
      type: ViewChild,
      args: ["actionSheet"]
    }],
    defaultTemplate: [{
      type: ViewChild,
      args: ["defaultTemplate", {
        static: false
      }]
    }],
    contentTemplate: [{
      type: ContentChild,
      args: [DateRangePopupTemplateDirective, {
        static: false
      }]
    }],
    dateRangeSelectionDirective: [{
      type: ViewChild,
      args: [DateRangeSelectionDirective, {
        static: false
      }]
    }],
    viewCalendar: [{
      type: ViewChildren,
      args: [MultiViewCalendarComponent]
    }],
    contentCalendar: [{
      type: ContentChildren,
      args: [MultiViewCalendarComponent]
    }],
    showCalendarHeader: [{
      type: Input
    }],
    focusedDate: [{
      type: Input
    }],
    disabledDates: [{
      type: Input
    }],
    activeView: [{
      type: Input
    }],
    bottomView: [{
      type: Input
    }],
    topView: [{
      type: Input
    }],
    min: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    allowReverse: [{
      type: Input
    }],
    animateNavigation: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    views: [{
      type: Input
    }],
    weekNumber: [{
      type: Input
    }],
    animate: [{
      type: Input
    }],
    anchor: [{
      type: Input
    }],
    anchorAlign: [{
      type: Input
    }],
    showViewHeader: [{
      type: Input
    }],
    showOtherMonthDays: [{
      type: Input
    }],
    appendTo: [{
      type: Input
    }],
    collision: [{
      type: Input
    }],
    popupAlign: [{
      type: Input
    }],
    margin: [{
      type: Input
    }],
    adaptiveMode: [{
      type: Input
    }],
    adaptiveTitle: [{
      type: Input
    }],
    adaptiveSubtitle: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    open: [{
      type: Output
    }],
    close: [{
      type: Output
    }],
    onBlur: [{
      type: Output,
      args: ["blur"]
    }],
    onFocus: [{
      type: Output,
      args: ["focus"]
    }],
    cancel: [{
      type: Output
    }]
  });
})();
var DateRangeComponent = class _DateRangeComponent {
  dateRangeService;
  /**
   * @hidden
   *
   * TODO: Make visible when the Infinite Calendar is fixed to set properly the size option.
   * Sets the size of the component.
   *
   * @default 'medium'
   */
  size;
  /**
  * @hidden
  */
  keydown(event) {
    const code = normalizeKeys(event);
    const shouldOpenPopup = code === Keys.ArrowDown && event.altKey;
    if (shouldOpenPopup) {
      this.dateRangeService.activatePopup();
    }
    const shouldClosePopup = code === Keys.ArrowUp && event.altKey || code === Keys.Escape;
    if (shouldClosePopup) {
      this.dateRangeService.deactivatePopup();
    }
  }
  wrapperClass = true;
  /**
   * @hidden
   */
  showDefault = false;
  contentPopup;
  get hasContentPopup() {
    return this.contentPopup.length > 0;
  }
  subscription;
  constructor(dateRangeService) {
    this.dateRangeService = dateRangeService;
    A(packageMetadata);
  }
  ngAfterContentInit() {
    this.showDefault = !this.hasContentPopup;
    this.subscription = this.contentPopup.changes.subscribe(() => {
      this.showDefault = !this.hasContentPopup;
    });
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
  static ɵfac = function DateRangeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DateRangeComponent)(ɵɵdirectiveInject(DateRangeService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _DateRangeComponent,
    selectors: [["kendo-daterange"]],
    contentQueries: function DateRangeComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, DateRangePopupComponent, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentPopup = _t);
      }
    },
    hostVars: 2,
    hostBindings: function DateRangeComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("keydown", function DateRangeComponent_keydown_HostBindingHandler($event) {
          return ctx.keydown($event);
        });
      }
      if (rf & 2) {
        ɵɵclassProp("k-daterangepicker", ctx.wrapperClass);
      }
    },
    inputs: {
      size: "size"
    },
    standalone: true,
    features: [ɵɵProvidersFeature([DateRangeService]), ɵɵStandaloneFeature],
    ngContentSelectors: _c8,
    decls: 2,
    vars: 1,
    consts: [[3, "size"]],
    template: function DateRangeComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
        ɵɵtemplate(1, DateRangeComponent_Conditional_1_Template, 1, 1, "kendo-daterange-popup", 0);
      }
      if (rf & 2) {
        ɵɵadvance();
        ɵɵconditional(ctx.showDefault ? 1 : -1);
      }
    },
    dependencies: [DateRangePopupComponent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DateRangeComponent, [{
    type: Component,
    args: [{
      providers: [DateRangeService],
      selector: "kendo-daterange",
      template: `
        <ng-content></ng-content>
        @if (showDefault) {
          <kendo-daterange-popup [size]="size"></kendo-daterange-popup>
        }
        `,
      standalone: true,
      imports: [DateRangePopupComponent]
    }]
  }], () => [{
    type: DateRangeService
  }], {
    size: [{
      type: Input
    }],
    keydown: [{
      type: HostListener,
      args: ["keydown", ["$event"]]
    }],
    wrapperClass: [{
      type: HostBinding,
      args: ["class.k-daterangepicker"]
    }],
    contentPopup: [{
      type: ContentChildren,
      args: [DateRangePopupComponent]
    }]
  });
})();
var DateRangeInput = class _DateRangeInput {
  activeRangeEnd;
  dateRangeService;
  input;
  element;
  renderer;
  zone;
  navigateCalendarOnFocus = false;
  get isActiveEnd() {
    return this.dateRangeService.activeRangeEnd === this.activeRangeEnd;
  }
  popupSubscriptions = new Subscription();
  subscriptions = new Subscription();
  get popupCalendarActivated() {
    const popup = this.dateRangeService.dateRangePopup$.value;
    return isPresent2(popup) && isPresent2(popup.calendar);
  }
  constructor(activeRangeEnd, dateRangeService, input, element, renderer, zone) {
    this.activeRangeEnd = activeRangeEnd;
    this.dateRangeService = dateRangeService;
    this.input = input;
    this.element = element;
    this.renderer = renderer;
    this.zone = zone;
  }
  init() {
    this.input.role = "combobox";
    this.input.hasPopup = "grid";
    if (this.input.value) {
      this.dateRangeService.setRange(this.getRange(this.input.value));
    }
    [this.input.onBlur.subscribe(() => this.deactivate()), this.input.valueUpdate.subscribe((value) => this.updateRange(value, "change")), this.dateRangeService.activeRangeEnd$.subscribe(() => {
      if (this.navigateCalendarOnFocus) {
        this.focusActiveDate();
      }
      this.toggleActiveClass(this.isActiveEnd);
    }), this.dateRangeService.dateRangePopup$.subscribe((popup) => this.initPopup(popup)), this.dateRangeService.range$.subscribe((range2) => this.updateInputValue(range2)), fromEvent(this.element.nativeElement, "click").subscribe(() => this.activate()), fromEvent(this.element.nativeElement, "keydown").subscribe((event) => this.togglePopup(event || {}))].forEach((s) => this.subscriptions.add(s));
  }
  destroy() {
    this.subscriptions.unsubscribe();
    this.unsubscribePopup();
  }
  initPopup(popup) {
    if (!popup) {
      this.unsubscribePopup();
      return;
    }
    if (!popup.anchor) {
      popup.anchor = this.element.nativeElement;
    }
    [popup.cancel.subscribe(() => this.isActiveEnd && this.input.focus()), popup.onFocus.subscribe(() => this.toggleActiveClass(this.isActiveEnd)), popup.onBlur.subscribe(() => this.deactivate()), popup.close?.subscribe(() => this.isActiveEnd && this.input.focus())].forEach((s) => this.popupSubscriptions.add(s));
  }
  unsubscribePopup() {
    this.popupSubscriptions.unsubscribe();
    this.popupSubscriptions = new Subscription();
  }
  activate() {
    this.dateRangeService.setActiveRangeEnd(this.activeRangeEnd);
    this.dateRangeService.activatePopup();
  }
  deactivate() {
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        this.updateRange(this.input.value, "blur");
        if (this.dateRangeService.hasActiveComponent()) {
          return;
        }
        this.toggleActiveClass(false);
        this.zone.run(() => this.dateRangeService.deactivatePopup());
      });
    });
  }
  updateRange(value, correctOn) {
    const range2 = this.getRange(value, correctOn);
    if (range2) {
      this.focusActiveDate();
      this.dateRangeService.setRange(range2);
    }
  }
  togglePopup(e) {
    const code = normalizeKeys(e);
    const altKey = e.altKey;
    if (code === Keys.Escape) {
      this.dateRangeService.cancelPopup();
    } else if (altKey && code === Keys.ArrowDown) {
      this.dateRangeService.activatePopup();
    }
  }
  focusActiveDate() {
    if (this.input.value && this.isActiveEnd) {
      this.dateRangeService.setFocusedDate(cloneDate(this.input.value));
    }
  }
  toggleActiveClass(show) {
    const action = show ? "addClass" : "removeClass";
    const nativeElement = this.element.nativeElement;
    if (nativeElement && nativeElement.querySelector) {
      this.renderer[action](nativeElement, "k-focus");
    }
  }
  static ɵfac = function DateRangeInput_Factory(__ngFactoryType__) {
    ɵɵinvalidFactory();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _DateRangeInput
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DateRangeInput, [{
    type: Directive,
    args: [{}]
  }], () => [{
    type: void 0
  }, {
    type: DateRangeService
  }, {
    type: DateInputComponent
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: NgZone
  }], null);
})();
var DateRangeEndInputDirective = class _DateRangeEndInputDirective extends DateRangeInput {
  rangeService;
  dateInput;
  /**
   * Specifies the auto-correction behavior. If the start date is greater than the end date, the directive fixes the date range to a single date either on input change or on blur ([see example](slug:autocorrect_daterange#toc-input-directives)).
   *
   * By default, the component does not perform any auto-correction.
   *
   */
  autoCorrectOn;
  /**
   * Specifies the navigation behavior of the calendar when the active end is changed on input focus. When enabled,
   * the calendar navigates to the value of the focused input. Otherwise, the calendar displays the last picked date.
   *
   * @default false
   */
  navigateCalendarOnFocus = false;
  constructor(rangeService, dateInput, element, renderer, zone) {
    super("end", rangeService, dateInput, element, renderer, zone);
    this.rangeService = rangeService;
    this.dateInput = dateInput;
  }
  ngOnInit() {
    this.rangeService.registerEndInput(this.dateInput);
    super.init();
    this.dateInput.pickerType = "daterangeend";
  }
  ngAfterViewInit() {
    this.renderer.setAttribute(this.dateInput.inputElement, attributeNames.ariaExpanded, "false");
  }
  ngOnDestroy() {
    super.destroy();
  }
  getRange(value, correctOn) {
    const {
      min,
      max
    } = this.dateInput;
    if (!isInRange(value, min, max)) {
      return null;
    }
    const {
      start
    } = this.rangeService.selectionRange || EMPTY_SELECTIONRANGE;
    const shouldClamp = this.autoCorrectOn === correctOn && isPresent2(value) && value < start;
    return shouldClamp ? clampRange(value) : {
      start,
      end: cloneDate(value)
    };
  }
  updateInputValue(range2) {
    const {
      end
    } = range2 || EMPTY_SELECTIONRANGE;
    const {
      min,
      max
    } = this.dateInput;
    if (isEqual(this.dateInput.value, end) || !isInRange(end, min, max)) {
      return;
    }
    this.dateInput.writeValue(cloneDate(end));
    this.dateInput.notify();
  }
  static ɵfac = function DateRangeEndInputDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DateRangeEndInputDirective)(ɵɵdirectiveInject(DateRangeService), ɵɵdirectiveInject(DateInputComponent), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NgZone));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _DateRangeEndInputDirective,
    selectors: [["", "kendoDateRangeEndInput", ""]],
    inputs: {
      autoCorrectOn: "autoCorrectOn",
      navigateCalendarOnFocus: "navigateCalendarOnFocus"
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DateRangeEndInputDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoDateRangeEndInput]",
      standalone: true
    }]
  }], () => [{
    type: DateRangeService
  }, {
    type: DateInputComponent
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: NgZone
  }], {
    autoCorrectOn: [{
      type: Input
    }],
    navigateCalendarOnFocus: [{
      type: Input
    }]
  });
})();
var DateRangeStartInputDirective = class _DateRangeStartInputDirective extends DateRangeInput {
  rangeService;
  dateInput;
  renderer;
  /**
   * Specifies when the component automatically corrects invalid date ranges.
   * When the start date is greater than the end date, the component fixes the range to a single date either on input change or on blur ([see example](slug:autocorrect_daterange#toc-input-directives)).
   *
   * By default, the component does not perform any auto-correction.
   *
   */
  autoCorrectOn;
  /**
   * Determines how the calendar navigates when you focus on the input.
   * When you set `navigateCalendarOnFocus` to `true`, the calendar moves to the value of the focused input.
   * When you set it to `false`, the calendar shows the last selected date.
   *
   * @default false
   */
  navigateCalendarOnFocus = false;
  constructor(rangeService, dateInput, element, renderer, zone) {
    super("start", rangeService, dateInput, element, renderer, zone);
    this.rangeService = rangeService;
    this.dateInput = dateInput;
    this.renderer = renderer;
  }
  ngOnInit() {
    this.rangeService.registerStartInput(this.dateInput);
    super.init();
    this.dateInput.pickerType = "daterangestart";
  }
  ngAfterViewInit() {
    this.renderer.setAttribute(this.dateInput.inputElement, attributeNames.ariaExpanded, "false");
  }
  ngOnDestroy() {
    super.destroy();
  }
  getRange(value, correctOn) {
    const {
      min,
      max
    } = this.dateInput;
    if (!isInRange(value, min, max)) {
      return null;
    }
    const {
      end
    } = this.rangeService.selectionRange || EMPTY_SELECTIONRANGE;
    const shouldClamp = this.autoCorrectOn === correctOn && end && value > end;
    return shouldClamp ? clampRange(value) : {
      start: cloneDate(value),
      end
    };
  }
  updateInputValue(range2) {
    const {
      start
    } = range2 || EMPTY_SELECTIONRANGE;
    const {
      min,
      max
    } = this.dateInput;
    if (isEqual(this.dateInput.value, start) || !isInRange(start, min, max)) {
      return;
    }
    this.dateInput.writeValue(cloneDate(start));
    this.dateInput.notify();
  }
  static ɵfac = function DateRangeStartInputDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DateRangeStartInputDirective)(ɵɵdirectiveInject(DateRangeService), ɵɵdirectiveInject(DateInputComponent), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NgZone));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _DateRangeStartInputDirective,
    selectors: [["", "kendoDateRangeStartInput", ""]],
    inputs: {
      autoCorrectOn: "autoCorrectOn",
      navigateCalendarOnFocus: "navigateCalendarOnFocus"
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DateRangeStartInputDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoDateRangeStartInput]",
      standalone: true
    }]
  }], () => [{
    type: DateRangeService
  }, {
    type: DateInputComponent
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: NgZone
  }], {
    autoCorrectOn: [{
      type: Input
    }],
    navigateCalendarOnFocus: [{
      type: Input
    }]
  });
})();
var DatePickerCustomMessagesComponent = class _DatePickerCustomMessagesComponent extends DatePickerMessages {
  service;
  constructor(service) {
    super();
    this.service = service;
  }
  get override() {
    return true;
  }
  static ɵfac = function DatePickerCustomMessagesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DatePickerCustomMessagesComponent)(ɵɵdirectiveInject(LocalizationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _DatePickerCustomMessagesComponent,
    selectors: [["kendo-datepicker-messages"]],
    standalone: true,
    features: [ɵɵProvidersFeature([{
      provide: DatePickerMessages,
      useExisting: forwardRef(() => _DatePickerCustomMessagesComponent)
    }]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function DatePickerCustomMessagesComponent_Template(rf, ctx) {
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DatePickerCustomMessagesComponent, [{
    type: Component,
    args: [{
      providers: [{
        provide: DatePickerMessages,
        useExisting: forwardRef(() => DatePickerCustomMessagesComponent)
      }],
      selector: "kendo-datepicker-messages",
      template: ``,
      standalone: true
    }]
  }], () => [{
    type: LocalizationService
  }], null);
})();
var DateRangePopupCustomMessagesComponent = class _DateRangePopupCustomMessagesComponent extends DateRangePopupMessages {
  service;
  constructor(service) {
    super();
    this.service = service;
  }
  get override() {
    return true;
  }
  static ɵfac = function DateRangePopupCustomMessagesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DateRangePopupCustomMessagesComponent)(ɵɵdirectiveInject(LocalizationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _DateRangePopupCustomMessagesComponent,
    selectors: [["kendo-daterange-popup-messages"]],
    standalone: true,
    features: [ɵɵProvidersFeature([{
      provide: DateRangePopupMessages,
      useExisting: forwardRef(() => _DateRangePopupCustomMessagesComponent)
    }]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function DateRangePopupCustomMessagesComponent_Template(rf, ctx) {
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DateRangePopupCustomMessagesComponent, [{
    type: Component,
    args: [{
      providers: [{
        provide: DateRangePopupMessages,
        useExisting: forwardRef(() => DateRangePopupCustomMessagesComponent)
      }],
      selector: "kendo-daterange-popup-messages",
      template: ``,
      standalone: true
    }]
  }], () => [{
    type: LocalizationService
  }], null);
})();
var DateTimePickerCustomMessagesComponent = class _DateTimePickerCustomMessagesComponent extends DateTimePickerMessages {
  service;
  constructor(service) {
    super();
    this.service = service;
  }
  get override() {
    return true;
  }
  static ɵfac = function DateTimePickerCustomMessagesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DateTimePickerCustomMessagesComponent)(ɵɵdirectiveInject(LocalizationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _DateTimePickerCustomMessagesComponent,
    selectors: [["kendo-datetimepicker-messages"]],
    standalone: true,
    features: [ɵɵProvidersFeature([{
      provide: DateTimePickerMessages,
      useExisting: forwardRef(() => _DateTimePickerCustomMessagesComponent)
    }]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function DateTimePickerCustomMessagesComponent_Template(rf, ctx) {
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DateTimePickerCustomMessagesComponent, [{
    type: Component,
    args: [{
      providers: [{
        provide: DateTimePickerMessages,
        useExisting: forwardRef(() => DateTimePickerCustomMessagesComponent)
      }],
      selector: "kendo-datetimepicker-messages",
      template: ``,
      standalone: true
    }]
  }], () => [{
    type: LocalizationService
  }], null);
})();
var TimePickerCustomMessagesComponent = class _TimePickerCustomMessagesComponent extends TimePickerMessages {
  service;
  constructor(service) {
    super();
    this.service = service;
  }
  get override() {
    return true;
  }
  static ɵfac = function TimePickerCustomMessagesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TimePickerCustomMessagesComponent)(ɵɵdirectiveInject(LocalizationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _TimePickerCustomMessagesComponent,
    selectors: [["kendo-timepicker-messages"]],
    standalone: true,
    features: [ɵɵProvidersFeature([{
      provide: TimePickerMessages,
      useExisting: forwardRef(() => _TimePickerCustomMessagesComponent)
    }]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function TimePickerCustomMessagesComponent_Template(rf, ctx) {
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimePickerCustomMessagesComponent, [{
    type: Component,
    args: [{
      providers: [{
        provide: TimePickerMessages,
        useExisting: forwardRef(() => TimePickerCustomMessagesComponent)
      }],
      selector: "kendo-timepicker-messages",
      template: ``,
      standalone: true
    }]
  }], () => [{
    type: LocalizationService
  }], null);
})();
var KENDO_CALENDAR = [CalendarCustomMessagesComponent, CalendarComponent, CellTemplateDirective, CenturyCellTemplateDirective, DecadeCellTemplateDirective, FooterTemplateDirective, HeaderTemplateDirective, HeaderTitleTemplateDirective, MonthCellTemplateDirective, NavigationItemTemplateDirective, WeekNumberCellTemplateDirective, YearCellTemplateDirective, NavigationItemTemplateDirective];
var KENDO_MULTIVIEWCALENDAR = [MultiViewCalendarCustomMessagesComponent, MultiViewCalendarComponent, CellTemplateDirective, CenturyCellTemplateDirective, DecadeCellTemplateDirective, FooterTemplateDirective, HeaderTemplateDirective, HeaderTitleTemplateDirective, MonthCellTemplateDirective, NavigationItemTemplateDirective, WeekNumberCellTemplateDirective, YearCellTemplateDirective];
var KENDO_DATEINPUT = [DateInputCustomMessagesComponent, DateInputComponent];
var KENDO_DATEPICKER = [DatePickerCustomMessagesComponent, DatePickerComponent, CellTemplateDirective, CenturyCellTemplateDirective, DecadeCellTemplateDirective, FooterTemplateDirective, HeaderTemplateDirective, HeaderTitleTemplateDirective, MonthCellTemplateDirective, NavigationItemTemplateDirective, WeekNumberCellTemplateDirective, YearCellTemplateDirective, NavigationItemTemplateDirective, ToggleButtonTabStopDirective];
var KENDO_DATERANGE = [DateRangePopupCustomMessagesComponent, ...KENDO_DATEINPUT, DateRangeEndInputDirective, DateRangePopupTemplateDirective, DateRangeComponent, DateRangePopupComponent, DateRangeSelectionDirective, DateRangeStartInputDirective];
var KENDO_DATETIMEPICKER = [DateTimePickerCustomMessagesComponent, DateTimePickerComponent, CellTemplateDirective, CenturyCellTemplateDirective, DecadeCellTemplateDirective, FooterTemplateDirective, HeaderTemplateDirective, HeaderTitleTemplateDirective, MonthCellTemplateDirective, NavigationItemTemplateDirective, WeekNumberCellTemplateDirective, YearCellTemplateDirective, ToggleButtonTabStopDirective];
var KENDO_TIMEPICKER = [TimePickerCustomMessagesComponent, TimePickerComponent, ToggleButtonTabStopDirective];
var KENDO_DATEINPUTS = [...KENDO_CALENDAR, ...KENDO_MULTIVIEWCALENDAR, ...KENDO_DATEINPUT, ...KENDO_DATEPICKER, ...KENDO_DATERANGE, ...KENDO_DATETIMEPICKER, ...KENDO_TIMEPICKER];
var CalendarModule = class _CalendarModule {
  static ɵfac = function CalendarModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CalendarModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _CalendarModule,
    imports: [CalendarCustomMessagesComponent, CalendarComponent, CellTemplateDirective, CenturyCellTemplateDirective, DecadeCellTemplateDirective, FooterTemplateDirective, HeaderTemplateDirective, HeaderTitleTemplateDirective, MonthCellTemplateDirective, NavigationItemTemplateDirective, WeekNumberCellTemplateDirective, YearCellTemplateDirective, NavigationItemTemplateDirective],
    exports: [CalendarCustomMessagesComponent, CalendarComponent, CellTemplateDirective, CenturyCellTemplateDirective, DecadeCellTemplateDirective, FooterTemplateDirective, HeaderTemplateDirective, HeaderTitleTemplateDirective, MonthCellTemplateDirective, NavigationItemTemplateDirective, WeekNumberCellTemplateDirective, YearCellTemplateDirective, NavigationItemTemplateDirective]
  });
  static ɵinj = ɵɵdefineInjector({
    providers: [IconsService, ResizeBatchService, CalendarDOMService, CenturyViewService, DecadeViewService, MonthViewService, YearViewService, PopupService, NavigationService],
    imports: [CalendarComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarModule, [{
    type: NgModule,
    args: [{
      exports: [...KENDO_CALENDAR],
      imports: [...KENDO_CALENDAR],
      providers: [IconsService, ResizeBatchService, CalendarDOMService, CenturyViewService, DecadeViewService, MonthViewService, YearViewService, PopupService, NavigationService]
    }]
  }], null, null);
})();
var CalendarsModule = class _CalendarsModule {
  static ɵfac = function CalendarsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CalendarsModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _CalendarsModule,
    imports: [CalendarCustomMessagesComponent, CalendarComponent, CellTemplateDirective, CenturyCellTemplateDirective, DecadeCellTemplateDirective, FooterTemplateDirective, HeaderTemplateDirective, HeaderTitleTemplateDirective, MonthCellTemplateDirective, NavigationItemTemplateDirective, WeekNumberCellTemplateDirective, YearCellTemplateDirective, NavigationItemTemplateDirective, MultiViewCalendarCustomMessagesComponent, MultiViewCalendarComponent, CellTemplateDirective, CenturyCellTemplateDirective, DecadeCellTemplateDirective, FooterTemplateDirective, HeaderTemplateDirective, HeaderTitleTemplateDirective, MonthCellTemplateDirective, NavigationItemTemplateDirective, WeekNumberCellTemplateDirective, YearCellTemplateDirective],
    exports: [CalendarCustomMessagesComponent, CalendarComponent, CellTemplateDirective, CenturyCellTemplateDirective, DecadeCellTemplateDirective, FooterTemplateDirective, HeaderTemplateDirective, HeaderTitleTemplateDirective, MonthCellTemplateDirective, NavigationItemTemplateDirective, WeekNumberCellTemplateDirective, YearCellTemplateDirective, NavigationItemTemplateDirective, MultiViewCalendarCustomMessagesComponent, MultiViewCalendarComponent, CellTemplateDirective, CenturyCellTemplateDirective, DecadeCellTemplateDirective, FooterTemplateDirective, HeaderTemplateDirective, HeaderTitleTemplateDirective, MonthCellTemplateDirective, NavigationItemTemplateDirective, WeekNumberCellTemplateDirective, YearCellTemplateDirective]
  });
  static ɵinj = ɵɵdefineInjector({
    providers: [IconsService, ResizeBatchService, CalendarDOMService, CenturyViewService, DecadeViewService, MonthViewService, YearViewService, PopupService, NavigationService],
    imports: [CalendarComponent, MultiViewCalendarComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarsModule, [{
    type: NgModule,
    args: [{
      exports: [...KENDO_CALENDAR, ...KENDO_MULTIVIEWCALENDAR],
      imports: [...KENDO_CALENDAR, ...KENDO_MULTIVIEWCALENDAR],
      providers: [IconsService, ResizeBatchService, CalendarDOMService, CenturyViewService, DecadeViewService, MonthViewService, YearViewService, PopupService, NavigationService]
    }]
  }], null, null);
})();
var DateInputModule = class _DateInputModule {
  static ɵfac = function DateInputModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DateInputModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _DateInputModule,
    imports: [DateInputCustomMessagesComponent, DateInputComponent],
    exports: [DateInputCustomMessagesComponent, DateInputComponent]
  });
  static ɵinj = ɵɵdefineInjector({
    providers: [IconsService],
    imports: [DateInputComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DateInputModule, [{
    type: NgModule,
    args: [{
      exports: [...KENDO_DATEINPUT],
      imports: [...KENDO_DATEINPUT],
      providers: [IconsService]
    }]
  }], null, null);
})();
var DatePickerModule = class _DatePickerModule {
  static ɵfac = function DatePickerModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DatePickerModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _DatePickerModule,
    imports: [DatePickerCustomMessagesComponent, DatePickerComponent, CellTemplateDirective, CenturyCellTemplateDirective, DecadeCellTemplateDirective, FooterTemplateDirective, HeaderTemplateDirective, HeaderTitleTemplateDirective, MonthCellTemplateDirective, NavigationItemTemplateDirective, WeekNumberCellTemplateDirective, YearCellTemplateDirective, NavigationItemTemplateDirective, ToggleButtonTabStopDirective, ToggleButtonTabStopDirective],
    exports: [DatePickerCustomMessagesComponent, DatePickerComponent, CellTemplateDirective, CenturyCellTemplateDirective, DecadeCellTemplateDirective, FooterTemplateDirective, HeaderTemplateDirective, HeaderTitleTemplateDirective, MonthCellTemplateDirective, NavigationItemTemplateDirective, WeekNumberCellTemplateDirective, YearCellTemplateDirective, NavigationItemTemplateDirective, ToggleButtonTabStopDirective, ToggleButtonTabStopDirective]
  });
  static ɵinj = ɵɵdefineInjector({
    providers: [
      // DateInputModule providers
      IconsService,
      // CalendarModule providers
      ResizeBatchService,
      CalendarDOMService,
      CenturyViewService,
      DecadeViewService,
      MonthViewService,
      YearViewService,
      PopupService,
      NavigationService,
      AdaptiveService
    ],
    imports: [DatePickerComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DatePickerModule, [{
    type: NgModule,
    args: [{
      exports: [...KENDO_DATEPICKER, ...KENDO_TOGGLEBUTTONTABSTOP],
      imports: [...KENDO_DATEPICKER, ...KENDO_TOGGLEBUTTONTABSTOP],
      providers: [
        // DateInputModule providers
        IconsService,
        // CalendarModule providers
        ResizeBatchService,
        CalendarDOMService,
        CenturyViewService,
        DecadeViewService,
        MonthViewService,
        YearViewService,
        PopupService,
        NavigationService,
        AdaptiveService
      ]
    }]
  }], null, null);
})();
var DateInputsModule = class _DateInputsModule {
  static ɵfac = function DateInputsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DateInputsModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _DateInputsModule,
    imports: [CalendarCustomMessagesComponent, CalendarComponent, CellTemplateDirective, CenturyCellTemplateDirective, DecadeCellTemplateDirective, FooterTemplateDirective, HeaderTemplateDirective, HeaderTitleTemplateDirective, MonthCellTemplateDirective, NavigationItemTemplateDirective, WeekNumberCellTemplateDirective, YearCellTemplateDirective, NavigationItemTemplateDirective, MultiViewCalendarCustomMessagesComponent, MultiViewCalendarComponent, CellTemplateDirective, CenturyCellTemplateDirective, DecadeCellTemplateDirective, FooterTemplateDirective, HeaderTemplateDirective, HeaderTitleTemplateDirective, MonthCellTemplateDirective, NavigationItemTemplateDirective, WeekNumberCellTemplateDirective, YearCellTemplateDirective, DateInputCustomMessagesComponent, DateInputComponent, DatePickerCustomMessagesComponent, DatePickerComponent, CellTemplateDirective, CenturyCellTemplateDirective, DecadeCellTemplateDirective, FooterTemplateDirective, HeaderTemplateDirective, HeaderTitleTemplateDirective, MonthCellTemplateDirective, NavigationItemTemplateDirective, WeekNumberCellTemplateDirective, YearCellTemplateDirective, NavigationItemTemplateDirective, ToggleButtonTabStopDirective, DateRangePopupCustomMessagesComponent, DateInputCustomMessagesComponent, DateInputComponent, DateRangeEndInputDirective, DateRangePopupTemplateDirective, DateRangeComponent, DateRangePopupComponent, DateRangeSelectionDirective, DateRangeStartInputDirective, DateTimePickerCustomMessagesComponent, DateTimePickerComponent, CellTemplateDirective, CenturyCellTemplateDirective, DecadeCellTemplateDirective, FooterTemplateDirective, HeaderTemplateDirective, HeaderTitleTemplateDirective, MonthCellTemplateDirective, NavigationItemTemplateDirective, WeekNumberCellTemplateDirective, YearCellTemplateDirective, ToggleButtonTabStopDirective, TimePickerCustomMessagesComponent, TimePickerComponent, ToggleButtonTabStopDirective, ToggleButtonTabStopDirective],
    exports: [CalendarCustomMessagesComponent, CalendarComponent, CellTemplateDirective, CenturyCellTemplateDirective, DecadeCellTemplateDirective, FooterTemplateDirective, HeaderTemplateDirective, HeaderTitleTemplateDirective, MonthCellTemplateDirective, NavigationItemTemplateDirective, WeekNumberCellTemplateDirective, YearCellTemplateDirective, NavigationItemTemplateDirective, MultiViewCalendarCustomMessagesComponent, MultiViewCalendarComponent, CellTemplateDirective, CenturyCellTemplateDirective, DecadeCellTemplateDirective, FooterTemplateDirective, HeaderTemplateDirective, HeaderTitleTemplateDirective, MonthCellTemplateDirective, NavigationItemTemplateDirective, WeekNumberCellTemplateDirective, YearCellTemplateDirective, DateInputCustomMessagesComponent, DateInputComponent, DatePickerCustomMessagesComponent, DatePickerComponent, CellTemplateDirective, CenturyCellTemplateDirective, DecadeCellTemplateDirective, FooterTemplateDirective, HeaderTemplateDirective, HeaderTitleTemplateDirective, MonthCellTemplateDirective, NavigationItemTemplateDirective, WeekNumberCellTemplateDirective, YearCellTemplateDirective, NavigationItemTemplateDirective, ToggleButtonTabStopDirective, DateRangePopupCustomMessagesComponent, DateInputCustomMessagesComponent, DateInputComponent, DateRangeEndInputDirective, DateRangePopupTemplateDirective, DateRangeComponent, DateRangePopupComponent, DateRangeSelectionDirective, DateRangeStartInputDirective, DateTimePickerCustomMessagesComponent, DateTimePickerComponent, CellTemplateDirective, CenturyCellTemplateDirective, DecadeCellTemplateDirective, FooterTemplateDirective, HeaderTemplateDirective, HeaderTitleTemplateDirective, MonthCellTemplateDirective, NavigationItemTemplateDirective, WeekNumberCellTemplateDirective, YearCellTemplateDirective, ToggleButtonTabStopDirective, TimePickerCustomMessagesComponent, TimePickerComponent, ToggleButtonTabStopDirective, ToggleButtonTabStopDirective]
  });
  static ɵinj = ɵɵdefineInjector({
    providers: [
      // CalendarModule providers
      IconsService,
      ResizeBatchService,
      CalendarDOMService,
      CenturyViewService,
      DecadeViewService,
      MonthViewService,
      YearViewService,
      PopupService,
      NavigationService,
      // TimePickerModule providers
      TimePickerDOMService,
      HoursService,
      MinutesService,
      SecondsService,
      MillisecondsService,
      DayPeriodService,
      AdaptiveService
    ],
    imports: [CalendarComponent, MultiViewCalendarComponent, DateInputComponent, DatePickerComponent, DateInputComponent, DateRangeComponent, DateRangePopupComponent, DateTimePickerComponent, TimePickerComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DateInputsModule, [{
    type: NgModule,
    args: [{
      exports: [...KENDO_DATEINPUTS, ...KENDO_TOGGLEBUTTONTABSTOP],
      imports: [...KENDO_DATEINPUTS, ...KENDO_TOGGLEBUTTONTABSTOP],
      providers: [
        // CalendarModule providers
        IconsService,
        ResizeBatchService,
        CalendarDOMService,
        CenturyViewService,
        DecadeViewService,
        MonthViewService,
        YearViewService,
        PopupService,
        NavigationService,
        // TimePickerModule providers
        TimePickerDOMService,
        HoursService,
        MinutesService,
        SecondsService,
        MillisecondsService,
        DayPeriodService,
        AdaptiveService
      ]
    }]
  }], null, null);
})();
var TimePickerModule = class _TimePickerModule {
  static ɵfac = function TimePickerModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TimePickerModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _TimePickerModule,
    imports: [TimePickerCustomMessagesComponent, TimePickerComponent, ToggleButtonTabStopDirective, ToggleButtonTabStopDirective],
    exports: [TimePickerCustomMessagesComponent, TimePickerComponent, ToggleButtonTabStopDirective, ToggleButtonTabStopDirective]
  });
  static ɵinj = ɵɵdefineInjector({
    providers: [IconsService, PopupService, ResizeBatchService, TimePickerDOMService, HoursService, MinutesService, SecondsService, MillisecondsService, DayPeriodService, AdaptiveService],
    imports: [TimePickerComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimePickerModule, [{
    type: NgModule,
    args: [{
      exports: [...KENDO_TIMEPICKER, ...KENDO_TOGGLEBUTTONTABSTOP],
      imports: [...KENDO_TIMEPICKER, ...KENDO_TOGGLEBUTTONTABSTOP],
      providers: [IconsService, PopupService, ResizeBatchService, TimePickerDOMService, HoursService, MinutesService, SecondsService, MillisecondsService, DayPeriodService, AdaptiveService]
    }]
  }], null, null);
})();
var DateTimePickerModule = class _DateTimePickerModule {
  static ɵfac = function DateTimePickerModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DateTimePickerModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _DateTimePickerModule,
    imports: [DateTimePickerCustomMessagesComponent, DateTimePickerComponent, CellTemplateDirective, CenturyCellTemplateDirective, DecadeCellTemplateDirective, FooterTemplateDirective, HeaderTemplateDirective, HeaderTitleTemplateDirective, MonthCellTemplateDirective, NavigationItemTemplateDirective, WeekNumberCellTemplateDirective, YearCellTemplateDirective, ToggleButtonTabStopDirective, ToggleButtonTabStopDirective],
    exports: [DateTimePickerCustomMessagesComponent, DateTimePickerComponent, CellTemplateDirective, CenturyCellTemplateDirective, DecadeCellTemplateDirective, FooterTemplateDirective, HeaderTemplateDirective, HeaderTitleTemplateDirective, MonthCellTemplateDirective, NavigationItemTemplateDirective, WeekNumberCellTemplateDirective, YearCellTemplateDirective, ToggleButtonTabStopDirective, ToggleButtonTabStopDirective]
  });
  static ɵinj = ɵɵdefineInjector({
    providers: [
      // CalendarModule providers
      IconsService,
      ResizeBatchService,
      CalendarDOMService,
      CenturyViewService,
      DecadeViewService,
      MonthViewService,
      YearViewService,
      PopupService,
      NavigationService,
      // TimePickerModule providers
      TimePickerDOMService,
      HoursService,
      MinutesService,
      SecondsService,
      MillisecondsService,
      DayPeriodService,
      AdaptiveService
    ],
    imports: [DateTimePickerComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DateTimePickerModule, [{
    type: NgModule,
    args: [{
      exports: [...KENDO_DATETIMEPICKER, ...KENDO_TOGGLEBUTTONTABSTOP],
      imports: [...KENDO_DATETIMEPICKER, ...KENDO_TOGGLEBUTTONTABSTOP],
      providers: [
        // CalendarModule providers
        IconsService,
        ResizeBatchService,
        CalendarDOMService,
        CenturyViewService,
        DecadeViewService,
        MonthViewService,
        YearViewService,
        PopupService,
        NavigationService,
        // TimePickerModule providers
        TimePickerDOMService,
        HoursService,
        MinutesService,
        SecondsService,
        MillisecondsService,
        DayPeriodService,
        AdaptiveService
      ]
    }]
  }], null, null);
})();
var MultiViewCalendarModule = class _MultiViewCalendarModule {
  static ɵfac = function MultiViewCalendarModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MultiViewCalendarModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _MultiViewCalendarModule,
    imports: [MultiViewCalendarCustomMessagesComponent, MultiViewCalendarComponent, CellTemplateDirective, CenturyCellTemplateDirective, DecadeCellTemplateDirective, FooterTemplateDirective, HeaderTemplateDirective, HeaderTitleTemplateDirective, MonthCellTemplateDirective, NavigationItemTemplateDirective, WeekNumberCellTemplateDirective, YearCellTemplateDirective],
    exports: [MultiViewCalendarCustomMessagesComponent, MultiViewCalendarComponent, CellTemplateDirective, CenturyCellTemplateDirective, DecadeCellTemplateDirective, FooterTemplateDirective, HeaderTemplateDirective, HeaderTitleTemplateDirective, MonthCellTemplateDirective, NavigationItemTemplateDirective, WeekNumberCellTemplateDirective, YearCellTemplateDirective]
  });
  static ɵinj = ɵɵdefineInjector({
    providers: [PopupService, NavigationService, CenturyViewService, DecadeViewService, MonthViewService, YearViewService],
    imports: [MultiViewCalendarComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MultiViewCalendarModule, [{
    type: NgModule,
    args: [{
      exports: [...KENDO_MULTIVIEWCALENDAR],
      imports: [...KENDO_MULTIVIEWCALENDAR],
      providers: [PopupService, NavigationService, CenturyViewService, DecadeViewService, MonthViewService, YearViewService]
    }]
  }], null, null);
})();
var DateRangeModule = class _DateRangeModule {
  static ɵfac = function DateRangeModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DateRangeModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _DateRangeModule,
    imports: [DateRangePopupCustomMessagesComponent, DateInputCustomMessagesComponent, DateInputComponent, DateRangeEndInputDirective, DateRangePopupTemplateDirective, DateRangeComponent, DateRangePopupComponent, DateRangeSelectionDirective, DateRangeStartInputDirective],
    exports: [DateRangePopupCustomMessagesComponent, DateInputCustomMessagesComponent, DateInputComponent, DateRangeEndInputDirective, DateRangePopupTemplateDirective, DateRangeComponent, DateRangePopupComponent, DateRangeSelectionDirective, DateRangeStartInputDirective]
  });
  static ɵinj = ɵɵdefineInjector({
    providers: [
      // MultiViewCalendarModule providers
      PopupService,
      NavigationService,
      CenturyViewService,
      DecadeViewService,
      MonthViewService,
      YearViewService,
      // DateInputModule providers
      IconsService,
      // AdaptiveModule providers
      ResizeBatchService,
      AdaptiveService
    ],
    imports: [DateInputComponent, DateRangeComponent, DateRangePopupComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DateRangeModule, [{
    type: NgModule,
    args: [{
      exports: [...KENDO_DATERANGE],
      imports: [...KENDO_DATERANGE],
      providers: [
        // MultiViewCalendarModule providers
        PopupService,
        NavigationService,
        CenturyViewService,
        DecadeViewService,
        MonthViewService,
        YearViewService,
        // DateInputModule providers
        IconsService,
        // AdaptiveModule providers
        ResizeBatchService,
        AdaptiveService
      ]
    }]
  }], null, null);
})();

export {
  CenturyViewService,
  DecadeViewService,
  MonthViewService,
  YearViewService,
  CalendarViewEnum,
  KForOf,
  ViewComponent,
  HorizontalViewListComponent,
  HeaderComponent,
  CellTemplateDirective,
  MonthCellTemplateDirective,
  YearCellTemplateDirective,
  DecadeCellTemplateDirective,
  CenturyCellTemplateDirective,
  WeekNumberCellTemplateDirective,
  HeaderTitleTemplateDirective,
  NavigationService,
  HeaderTemplateDirective,
  FooterTemplateDirective,
  FooterComponent,
  MultiViewCalendarLocalizedMessagesDirective,
  MultiViewCalendarComponent,
  CalendarDOMService,
  NavigationComponent,
  ViewListComponent,
  NavigationItemTemplateDirective,
  MultiViewCalendarCustomMessagesComponent,
  CalendarLocalizedMessagesDirective,
  CalendarComponent,
  DateInputLocalizedMessagesDirective,
  DateInputComponent,
  PreventableEvent,
  CalendarCustomMessagesComponent,
  DateInputCustomMessagesComponent,
  DatePickerLocalizedMessagesDirective,
  DatePickerComponent,
  TimePickerDOMService,
  HoursService,
  MinutesService,
  SecondsService,
  MillisecondsService,
  DayPeriodService,
  TimeListComponent,
  TimeSelectorLocalizedMessagesDirective,
  TimeSelectorComponent,
  TimeSelectorCustomMessagesComponent,
  TimePickerLocalizedMessagesDirective,
  TimePickerComponent,
  LocalizedMessagesDirective,
  DateTimePickerComponent,
  WeekNamesService,
  DateRangePopupTemplateDirective,
  DateRangeService,
  DateRangeSelectionDirective,
  DateRangePopupLocalizedMessagesDirective,
  DateRangePopupComponent,
  DateRangeComponent,
  DateRangeEndInputDirective,
  DateRangeStartInputDirective,
  DatePickerCustomMessagesComponent,
  DateRangePopupCustomMessagesComponent,
  DateTimePickerCustomMessagesComponent,
  TimePickerCustomMessagesComponent,
  KENDO_CALENDAR,
  KENDO_MULTIVIEWCALENDAR,
  KENDO_DATEINPUT,
  KENDO_DATEPICKER,
  KENDO_DATERANGE,
  KENDO_DATETIMEPICKER,
  KENDO_TIMEPICKER,
  KENDO_DATEINPUTS,
  CalendarModule,
  CalendarsModule,
  DateInputModule,
  DatePickerModule,
  DateInputsModule,
  TimePickerModule,
  DateTimePickerModule,
  MultiViewCalendarModule,
  DateRangeModule
};
//# sourceMappingURL=chunk-M65P7TV7.js.map
