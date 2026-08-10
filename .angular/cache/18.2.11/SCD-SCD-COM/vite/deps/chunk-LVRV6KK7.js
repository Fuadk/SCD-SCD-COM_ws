import {
  ActionSheetComponent,
  ActionSheetTemplateDirective
} from "./chunk-GIR42TIA.js";
import {
  AdaptiveService
} from "./chunk-2WJ6WOSR.js";
import {
  IntlService
} from "./chunk-5OMBUL2F.js";
import {
  MultiPath,
  Path,
  color_default,
  drawing_exports,
  exportImage,
  geometry_exports,
  group_default,
  image_default,
  named_colors_default,
  parseColor,
  surface_default
} from "./chunk-ZIJEPVJY.js";
import {
  DialogComponent,
  DialogContainerService,
  DialogService,
  WindowContainerService,
  WindowService
} from "./chunk-GETIBMYG.js";
import {
  ButtonComponent
} from "./chunk-GUER2DF3.js";
import {
  caretAltDownIcon,
  caretAltExpandIcon,
  caretAltLeftIcon,
  caretAltRightIcon,
  caretAltUpIcon,
  checkIcon,
  dropletSlashIcon,
  dropletSliderIcon,
  exclamationCircleIcon,
  hyperlinkOpenIcon,
  paletteIcon,
  starIcon,
  starOutlineIcon,
  xCircleIcon,
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
  DraggableDirective,
  EventsOutsideAngularDirective,
  KENDO_ADORNMENTS,
  KendoInput,
  Keys,
  PrefixTemplateDirective,
  PreventableEvent,
  ResizeBatchService,
  ResizeSensorComponent,
  SeparatorComponent,
  SuffixTemplateDirective,
  WatermarkOverlayComponent,
  anyChanged,
  closest,
  findFocusableChild,
  getLicenseMessage,
  guid,
  hasObservers,
  isChanged,
  isControlRequired,
  isDocumentAvailable,
  isObjectPresent,
  isPresent,
  isSafari,
  normalizeKeys,
  parseAttributes,
  parseCSSClassNames,
  processCssValue,
  removeHTMLAttributes,
  replaceMessagePlaceholder,
  setHTMLAttributes,
  shouldShowValidationUI
} from "./chunk-5AZCHGRK.js";
import {
  mobileOS
} from "./chunk-7JCLSR37.js";
import {
  ComponentMessages,
  L10N_PREFIX,
  LocalizationService,
  MessageService,
  RTL
} from "./chunk-YGURSKD5.js";
import {
  A
} from "./chunk-RWPIEFVW.js";
import {
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  NgControl,
  RadioControlValueAccessor
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
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵi18nApply,
  ɵɵi18nAttributes,
  ɵɵi18nExp,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵpureFunction4,
  ɵɵpureFunction5,
  ɵɵpureFunction7,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
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
  fromEvent,
  merge
} from "./chunk-UG3XN6F5.js";
import {
  BehaviorSubject,
  Subject,
  Subscription,
  concatMap,
  debounceTime,
  filter,
  interval,
  skip,
  startWith,
  take,
  takeUntil,
  tap,
  throttleTime
} from "./chunk-WISTXZPE.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-N6ESDQJH.js";

// node_modules/@progress/kendo-inputs-common/dist/es/maskedtextbox/parsing/result.js
var ResultType;
(function(ResultType3) {
  ResultType3[ResultType3["Literal"] = 0] = "Literal";
  ResultType3[ResultType3["Mask"] = 1] = "Mask";
  ResultType3[ResultType3["Undefined"] = 2] = "Undefined";
})(ResultType || (ResultType = {}));
var Result = (
  /** @class */
  function() {
    function Result3(value, rest, type) {
      if (type === void 0) {
        type = ResultType.Undefined;
      }
      this.value = value;
      this.rest = rest;
      this.type = type;
    }
    Result3.prototype.map = function(fn) {
      return new Result3(fn(this.value), this.rest);
    };
    Result3.prototype.chain = function(fn) {
      return fn(this.value, this.rest);
    };
    Result3.prototype.fold = function(s, _) {
      return s(this.value, this.rest);
    };
    Result3.prototype.concat = function(r) {
      return this.map(function(vs, _) {
        return r.chain(function(v, __) {
          return vs.concat([v]);
        });
      });
    };
    Result3.prototype.toString = function() {
      return "Result({ value: '" + this.value + "', rest: " + this.rest + " })";
    };
    return Result3;
  }()
);

// node_modules/@progress/kendo-inputs-common/dist/es/maskedtextbox/parsing/stream.js
var Stream = (
  /** @class */
  function() {
    function Stream3(input, control) {
      if (input === void 0) {
        input = [];
      }
      if (control === void 0) {
        control = [];
      }
      this.input = input;
      this.control = control;
      this.inputCursor = 0;
      this.controlCursor = 0;
    }
    Stream3.prototype.eof = function() {
      return this.inputCursor >= this.input.length;
    };
    Stream3.prototype.next = function() {
      return {
        char: this.input[this.inputCursor++],
        control: this.control[this.controlCursor++]
      };
    };
    Stream3.prototype.peek = function() {
      return {
        char: this.input[this.inputCursor],
        control: this.control[this.controlCursor]
      };
    };
    Stream3.prototype.eat_input = function() {
      this.inputCursor++;
    };
    Stream3.prototype.eat_control = function() {
      this.controlCursor++;
    };
    Stream3.prototype.eat = function() {
      this.inputCursor++;
      this.controlCursor++;
    };
    return Stream3;
  }()
);

// node_modules/@progress/kendo-inputs-common/dist/es/maskedtextbox/parsing/parsers.js
var toArray = function(value) {
  return (value || "").split("");
};
var ESCAPE_CHARACTER = "\\";
var Parser = (
  /** @class */
  function() {
    function Parser3(parse) {
      this.parse = parse;
    }
    Parser3.prototype.run = function(input, control) {
      if (control === void 0) {
        control = "";
      }
      if (input instanceof Stream) {
        return this.parse(input);
      } else {
        return this.parse(new Stream(toArray(input), toArray(control)));
      }
    };
    Parser3.prototype.map = function(f) {
      var _this = this;
      return new Parser3(function(stream) {
        return _this.parse(stream).map(f);
      });
    };
    Parser3.prototype.chain = function(f) {
      var _this = this;
      return new Parser3(function(stream) {
        return _this.parse(stream).chain(function(v, s) {
          return f(v).run(s);
        });
      });
    };
    Parser3.prototype.isLiteral = function(c) {
      return this.run(c).type === ResultType.Literal;
    };
    return Parser3;
  }()
);
var mask = function(_a2) {
  var prompt = _a2.prompt, promptPlaceholder = _a2.promptPlaceholder;
  return function(rule) {
    return new Parser(function(stream) {
      while (!stream.eof()) {
        var _a3 = stream.peek(), char = _a3.char, control = _a3.control;
        if (char === control && control === prompt) {
          stream.eat();
          return new Result(prompt, stream, ResultType.Mask);
        }
        if (rule.test(char)) {
          stream.eat();
          return new Result(char, stream, ResultType.Mask);
        }
        if (char === promptPlaceholder) {
          stream.eat();
          return new Result(prompt, stream, ResultType.Mask);
        }
        stream.eat_input();
      }
      stream.eat();
      return new Result(prompt, stream, ResultType.Mask);
    });
  };
};
var literal = function(_token) {
  return new Parser(function(stream) {
    var char = stream.peek().char;
    if (char === _token) {
      stream.eat();
      return new Result(_token, stream, ResultType.Literal);
    }
    return new Result(_token, stream, ResultType.Literal);
  });
};
var unmask = function(prompt) {
  return function(rule) {
    return new Parser(function(stream) {
      while (!stream.eof()) {
        var _a2 = stream.peek(), char = _a2.char, control = _a2.control;
        if (char === prompt && control === prompt) {
          stream.eat();
          return new Result(char, stream);
        }
        if (rule.test(char)) {
          stream.eat();
          return new Result(char, stream);
        }
        stream.eat_input();
      }
      stream.eat();
      return new Result("", stream);
    });
  };
};
var unliteral = function(_token) {
  return new Parser(function(stream) {
    if (stream.eof()) {
      return new Result("", stream);
    }
    var char = stream.peek().char;
    if (char === _token) {
      stream.eat();
    }
    return new Result(_token, stream);
  });
};
var token = function(rules, creator) {
  return new Parser(function(stream) {
    var char = stream.next().char;
    var rule = rules[char];
    if (char === ESCAPE_CHARACTER) {
      char = stream.next().char;
      return new Result(creator.literal(char), stream);
    }
    if (!rule) {
      return new Result(creator.literal(char), stream);
    }
    return new Result(creator.mask(rule), stream);
  });
};
var rawMask = function(_a2) {
  var prompt = _a2.prompt, promptPlaceholder = _a2.promptPlaceholder;
  return new Parser(function(stream) {
    var char = stream.next().char;
    if (char === prompt) {
      return new Result(promptPlaceholder, stream);
    }
    return new Result(char, stream);
  });
};
var rawLiteral = function(includeLiterals) {
  return new Parser(function(stream) {
    var char = stream.next().char;
    if (includeLiterals) {
      return new Result(char, stream);
    }
    return new Result("", stream);
  });
};

// node_modules/@progress/kendo-inputs-common/dist/es/maskedtextbox/parsing/combinators.js
var always = function(value) {
  return new Parser(function(stream) {
    return new Result(value, stream);
  });
};
var append = function(p1, p2) {
  return p1.chain(function(vs) {
    return p2.map(function(v) {
      return vs.concat([v]);
    });
  });
};
var sequence = function(list) {
  return list.reduce(function(acc, parser) {
    return append(acc, parser);
  }, always([]));
};
var greedy = function(parser) {
  return new Parser(function(stream) {
    var result = new Result([], stream);
    while (!stream.eof()) {
      result = result.concat(parser.run(stream));
    }
    return result;
  });
};

// node_modules/@progress/kendo-inputs-common/dist/es/maskedtextbox/masking.service.js
var MaskingService = (
  /** @class */
  function() {
    function MaskingService3() {
      this.rules = {};
      this.prompt = "_";
      this.mask = "";
      this.promptPlaceholder = " ";
      this.includeLiterals = false;
      this.maskTokens = [];
      this.unmaskTokens = [];
      this.rawTokens = [];
      this.validationTokens = [];
    }
    MaskingService3.prototype.update = function(_a2) {
      var _b = _a2.mask, mask3 = _b === void 0 ? "" : _b, _c = _a2.prompt, prompt = _c === void 0 ? "" : _c, _d = _a2.promptPlaceholder, promptPlaceholder = _d === void 0 ? " " : _d, _e = _a2.rules, rules = _e === void 0 ? {} : _e, _f = _a2.includeLiterals, includeLiterals = _f === void 0 ? false : _f;
      this.mask = mask3;
      this.prompt = prompt;
      this.promptPlaceholder = promptPlaceholder;
      this.rules = rules;
      this.includeLiterals = includeLiterals;
      this.tokenize();
    };
    MaskingService3.prototype.validationValue = function(maskedValue) {
      if (maskedValue === void 0) {
        maskedValue = "";
      }
      var value = maskedValue;
      sequence(this.validationTokens).run(maskedValue).fold(function(unmasked) {
        value = unmasked.join("");
      });
      return value;
    };
    MaskingService3.prototype.rawValue = function(maskedValue) {
      if (maskedValue === void 0) {
        maskedValue = "";
      }
      var value = maskedValue;
      if (!this.rawTokens.length) {
        return value;
      }
      sequence(this.rawTokens).run(maskedValue).fold(function(unmasked) {
        value = unmasked.join("");
      });
      return value;
    };
    MaskingService3.prototype.maskRaw = function(rawValue) {
      if (rawValue === void 0) {
        rawValue = "";
      }
      var value = rawValue;
      if (!this.maskTokens.length) {
        return value;
      }
      sequence(this.maskTokens).run(rawValue).fold(function(masked) {
        value = masked.join("");
      });
      return value;
    };
    MaskingService3.prototype.maskInput = function(input, control, splitPoint) {
      if (input.length < control.length) {
        return this.maskRemoved(input, control, splitPoint);
      }
      return this.maskInserted(input, control, splitPoint);
    };
    MaskingService3.prototype.maskInRange = function(pasted, oldValue, start, end) {
      var value = "";
      var selection = end;
      var beforeChange = oldValue.split("").slice(0, start);
      var afterChange = oldValue.split("").slice(end);
      sequence(this.maskTokens.slice(start, end)).run(pasted).fold(function(masked) {
        value = beforeChange.concat(masked).concat(afterChange).join("");
      });
      return {
        selection,
        value
      };
    };
    MaskingService3.prototype.maskRemoved = function(input, control, splitPoint) {
      var _this = this;
      var value = "";
      var selection = splitPoint;
      var unchanged = input.split("").slice(splitPoint);
      var changed = input.split("").slice(0, splitPoint).join("");
      var take2 = this.maskTokens.length - (input.length - splitPoint);
      sequence(this.maskTokens.slice(0, take2)).run(changed, control).fold(function(masked) {
        selection = _this.adjustPosition(masked, selection);
        value = masked.concat(unchanged).join("");
      });
      return {
        selection,
        value
      };
    };
    MaskingService3.prototype.adjustPosition = function(input, selection) {
      var caretChar = input[selection];
      var isLiteral = this.maskTokens[selection].isLiteral(caretChar);
      if (!isLiteral && caretChar !== this.prompt) {
        return selection + 1;
      }
      return selection;
    };
    MaskingService3.prototype.maskInserted = function(input, control, splitPoint) {
      var _this = this;
      var value = "";
      var selection = splitPoint;
      var changed = input.slice(0, splitPoint);
      sequence(this.unmaskTokens).run(changed, control).chain(function(unmasked) {
        selection = unmasked.join("").length;
        var unchanged = control.slice(selection);
        return sequence(_this.maskTokens).run(unmasked.join("") + unchanged, control);
      }).fold(function(masked) {
        value = masked.join("");
      });
      return {
        selection,
        value
      };
    };
    Object.defineProperty(MaskingService3.prototype, "maskTokenCreator", {
      get: function() {
        var _a2 = this, prompt = _a2.prompt, promptPlaceholder = _a2.promptPlaceholder;
        return {
          literal: function(rule) {
            return literal(rule);
          },
          mask: function(rule) {
            return mask({
              prompt,
              promptPlaceholder
            })(rule);
          }
        };
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MaskingService3.prototype, "unmaskTokenCreator", {
      get: function() {
        var _this = this;
        return {
          literal: function(rule) {
            return unliteral(rule);
          },
          mask: function(rule) {
            return unmask(_this.prompt)(rule);
          }
        };
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MaskingService3.prototype, "rawTokenCreator", {
      get: function() {
        var _a2 = this, prompt = _a2.prompt, promptPlaceholder = _a2.promptPlaceholder, includeLiterals = _a2.includeLiterals;
        return {
          literal: function(_) {
            return rawLiteral(includeLiterals);
          },
          mask: function(_) {
            return rawMask({
              prompt,
              promptPlaceholder
            });
          }
        };
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MaskingService3.prototype, "validationTokenCreator", {
      get: function() {
        var prompt = this.prompt;
        return {
          literal: function(_) {
            return rawLiteral(false);
          },
          mask: function(_) {
            return rawMask({
              prompt,
              promptPlaceholder: ""
            });
          }
        };
      },
      enumerable: false,
      configurable: true
    });
    MaskingService3.prototype.tokenize = function() {
      var _this = this;
      greedy(token(this.rules, this.maskTokenCreator)).run(this.mask).fold(function(tokens, _) {
        _this.maskTokens = tokens;
      });
      greedy(token(this.rules, this.unmaskTokenCreator)).run(this.mask).fold(function(tokens, _) {
        _this.unmaskTokens = tokens;
      });
      greedy(token(this.rules, this.rawTokenCreator)).run(this.mask).fold(function(tokens, _) {
        _this.rawTokens = tokens;
      });
      greedy(token(this.rules, this.validationTokenCreator)).run(this.mask).fold(function(tokens, _) {
        _this.validationTokens = tokens;
      });
    };
    return MaskingService3;
  }()
);

// node_modules/@progress/kendo-inputs-common/dist/es/common/drawing-utils.js
var _a = drawing_exports.util;
var elementOffset = _a.elementOffset;
var limitValue = _a.limitValue;

// node_modules/@progress/kendo-inputs-common/dist/es/signature/signature-pad.js
var Point = geometry_exports.Point;
var Rect = geometry_exports.Rect;
var transform = geometry_exports.transform;
var noop = function() {
};
var DECIMAL_DIGITS = 3;
var DEFAULT_COLOR = "#000";
var DEFAULT_BACKGROUND_COLOR = "#fff";
var DEFAULT_PRECISION = 1;
var DEFAULT_SAMPLING_RATE = 200;
var DEFAULT_STROKE_WIDTH = 1;
var DEFAULT_WIDTH = 750;
var DEFAULT_HEIGHT = 250;
var DEFAULT_SCALE = 1;
var DEFAULT_EXPORT_SCALE = 6;
var SignaturePad = (
  /** @class */
  function() {
    function SignaturePad2(element, options) {
      if (options === void 0) {
        options = {};
      }
      this.element = element;
      this.lastMoveTime = 0;
      this.resolveColors(options);
      this.options = Object.assign({
        scale: DEFAULT_SCALE,
        precision: DEFAULT_PRECISION,
        samplingRate: DEFAULT_SAMPLING_RATE,
        smooth: options.smooth !== false,
        color: DEFAULT_COLOR,
        backgroundColor: DEFAULT_BACKGROUND_COLOR,
        strokeWidth: DEFAULT_STROKE_WIDTH,
        onChange: noop,
        onDraw: noop,
        onDrawEnd: noop
      }, options, {
        color: this.color,
        backgroundColor: this.backgroundColor
      });
      this.pathOptions = {
        stroke: {
          color: this.options.color,
          width: this.options.strokeWidth,
          lineCap: "round",
          lineJoin: "round"
        }
      };
      this.initSurface();
      this.attachEvents();
    }
    SignaturePad2.prototype.destroy = function() {
      this.detachEvents();
    };
    SignaturePad2.prototype.clear = function() {
      this.rootGroup.clear();
      this.path = null;
    };
    SignaturePad2.prototype.readThemeColors = function() {
      var themeColor;
      var themeBackgroundColor;
      if (typeof document !== "undefined") {
        var themeElement = this.element.closest(".k-signature") || this.element;
        var computedStyle = themeElement.ownerDocument.defaultView.getComputedStyle(themeElement);
        themeColor = computedStyle.color;
        themeBackgroundColor = computedStyle.backgroundColor;
      }
      this.themeColor = themeColor || this.themeColor || DEFAULT_COLOR;
      this.themeBackgroundColor = themeBackgroundColor || this.themeBackgroundColor || DEFAULT_BACKGROUND_COLOR;
    };
    SignaturePad2.prototype.resolveColors = function(options) {
      this.readThemeColors();
      this.color = options.color || (this.options || {}).color || this.themeColor;
      this.backgroundColor = options.backgroundColor || (this.options || {}).backgroundColor || this.themeBackgroundColor;
    };
    Object.defineProperty(SignaturePad2.prototype, "isDrawing", {
      get: function() {
        return Boolean(this.points);
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(SignaturePad2.prototype, "pathData", {
      get: function() {
        var _a2;
        return (_a2 = this.path) === null || _a2 === void 0 ? void 0 : _a2.toString(DECIMAL_DIGITS);
      },
      set: function(value) {
        this.clear();
        this.path = MultiPath.parse(value, this.pathOptions);
        this.rootGroup.append(this.path);
      },
      enumerable: false,
      configurable: true
    });
    SignaturePad2.prototype.loadImage = function(data, size) {
      if (size === void 0) {
        size = [];
      }
      if (!data) {
        this.clear();
        return;
      }
      var _a2 = this.size, width = _a2[0], height = _a2[1];
      var contentWidth = width / this.options.scale;
      var contentHeight = height / this.options.scale;
      var importWidth = size[0] || contentWidth * DEFAULT_EXPORT_SCALE;
      var importHeight = size[1] || contentHeight * DEFAULT_EXPORT_SCALE;
      var scaleX = contentWidth / importWidth;
      var scaleY = contentHeight / importHeight;
      var scale = Math.min(scaleX, scaleY);
      var img = new image_default(data, new geometry_exports.Rect([0, 0], [importWidth, importHeight]));
      img.transform(transform().scale(scale, scale));
      this.clear();
      this.rootGroup.append(img);
    };
    SignaturePad2.prototype.exportImage = function(options) {
      var _a2;
      var _b = this.size, width = _b[0], height = _b[1];
      var contentWidth = width / this.options.scale;
      var contentHeight = height / this.options.scale;
      var exportWidth = (options === null || options === void 0 ? void 0 : options.width) || contentWidth * DEFAULT_EXPORT_SCALE;
      var exportHeight = (options === null || options === void 0 ? void 0 : options.height) || contentHeight * DEFAULT_EXPORT_SCALE;
      var scaleX = exportWidth / contentWidth;
      var scaleY = exportHeight / contentHeight;
      var scale = Math.min(scaleX, scaleY);
      var exportRect = new Rect([0, 0], [exportWidth, exportHeight]);
      var exportGroup = new group_default({
        clip: Path.fromRect(exportRect)
      });
      var contentGroup = new group_default({
        transform: transform().scale(scale, scale)
      });
      var frame = Path.fromRect(exportRect, {
        fill: {
          color: this.options.backgroundColor
        }
      });
      exportGroup.append(frame);
      exportGroup.append(contentGroup);
      (_a2 = contentGroup.children).push.apply(_a2, this.rootGroup.children);
      return exportImage(exportGroup, Object.assign({
        width: exportWidth,
        height: exportHeight
      }, options));
    };
    SignaturePad2.prototype.resize = function() {
      this.surface.resize(true);
    };
    SignaturePad2.prototype.setOptions = function(options) {
      this.resolveColors(options);
      Object.assign(this.options, options, {
        color: this.color,
        backgroundColor: this.backgroundColor
      });
      this.pathOptions.stroke.color = this.options.color;
      this.pathOptions.stroke.width = this.options.strokeWidth;
      if (this.path) {
        this.path.options.set("stroke.color", this.options.color);
        this.path.options.set("stroke.width", this.options.strokeWidth);
      }
      this.background.options.set("fill.color", this.options.backgroundColor);
    };
    SignaturePad2.prototype.initSurface = function() {
      this.surface = surface_default.create(this.element, {
        type: "canvas"
      });
      this.element.style.touchAction = "none";
      var scale = this.options.scale;
      this.rootGroup = new group_default({
        transform: transform().scale(scale, scale)
      });
      var width = this.element.offsetWidth || DEFAULT_WIDTH;
      var height = this.element.offsetHeight || DEFAULT_HEIGHT;
      this.size = [width, height];
      this.background = Path.fromRect(new Rect([0, 0], this.size), {
        fill: {
          color: this.options.backgroundColor
        }
      });
      this.surface.draw(this.background);
      this.surface.draw(this.rootGroup);
    };
    SignaturePad2.prototype.attachEvents = function() {
      this.onPointerDown = this.onPointerDown.bind(this);
      this.onPointerMove = this.onPointerMove.bind(this);
      this.onPointerUp = this.onPointerUp.bind(this);
      this.onDragStart = this.onDragStart.bind(this);
      this.element.addEventListener("pointerdown", this.onPointerDown);
      this.element.addEventListener("pointerup", this.onPointerUp);
      this.element.addEventListener("dragstart", this.onDragStart);
    };
    SignaturePad2.prototype.detachEvents = function() {
      this.element.removeEventListener("pointerdown", this.onPointerDown);
      this.detachPointerMove();
      this.element.removeEventListener("pointerup", this.onPointerUp);
      this.element.removeEventListener("dragstart", this.onDragStart);
    };
    SignaturePad2.prototype.attachPointerMove = function() {
      this.element.addEventListener("pointermove", this.onPointerMove);
    };
    SignaturePad2.prototype.detachPointerMove = function() {
      this.element.removeEventListener("pointermove", this.onPointerMove);
    };
    SignaturePad2.prototype.touchPoint = function(e) {
      var offset = elementOffset(this.element);
      var pageX = e.pageX;
      var pageY = e.pageY;
      var scale = 1 / this.options.scale;
      return new Point(pageX - offset.left, pageY - offset.top).scale(scale, scale);
    };
    SignaturePad2.prototype.onDragStart = function(e) {
      e.preventDefault();
    };
    SignaturePad2.prototype.onPointerDown = function(e) {
      if (this.options.readonly || !e.isPrimary || !isMainButton(e)) {
        return;
      }
      this.detachPointerMove();
      this.attachPointerMove();
      if (!this.path) {
        this.path = new MultiPath(this.pathOptions);
        this.rootGroup.append(this.path);
      }
      this.options.onDraw();
      this.element.setPointerCapture(e.pointerId);
      var point = this.touchPoint(e);
      this.points = [point];
      this.path.moveTo(point);
    };
    SignaturePad2.prototype.onPointerMove = function(e) {
      if (!this.points || !this.path || !e.isPrimary) {
        return;
      }
      var now = (/* @__PURE__ */ new Date()).getTime();
      var elapsed = now - this.lastMoveTime;
      var minTimeDelta = 1e3 / limitValue(this.options.samplingRate, 1, 1e4);
      if (elapsed < minTimeDelta) {
        return;
      } else {
        this.lastMoveTime = now;
      }
      var point = this.touchPoint(e);
      var lastPoint = this.points[this.points.length - 1];
      var minDelta = 1 / limitValue(this.options.precision, 0.01, 100);
      if (point.distanceTo(lastPoint) < minDelta) {
        return;
      }
      this.points.push(point);
      this.path.lineTo(point);
    };
    SignaturePad2.prototype.onPointerUp = function(e) {
      if (!e.isPrimary || !this.path || !this.points || this.options.readonly) {
        return;
      }
      this.detachPointerMove();
      if (this.options.smooth) {
        var segments = Path.curveFromPoints(this.points);
        this.path.paths.splice(this.path.paths.length - 1, 1, segments);
      }
      this.points = null;
      this.options.onDrawEnd();
      this.options.onChange(this.pathData);
    };
    return SignaturePad2;
  }()
);
function isMainButton(e) {
  return typeof e.button !== "number" || e.button === 0;
}

// node_modules/@progress/kendo-angular-inputs/fesm2022/progress-kendo-angular-inputs.mjs
var _c0 = ["wrap"];
var _c1 = ["track"];
var _c2 = ["sliderSelection"];
var _c3 = ["ticks"];
var _c4 = ["tickElement"];
var _c5 = ["kendoSliderTicks", ""];
function SliderTicksComponent_For_1_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 3);
    ɵɵelementContainer(1, 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const tick_r1 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext();
    const defaultLabel_r3 = ɵɵreference(3);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.labelTemplate || defaultLabel_r3)("ngTemplateOutletContext", tick_r1);
  }
}
function SliderTicksComponent_For_1_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0, "   ");
  }
}
function SliderTicksComponent_For_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 2, 1);
    ɵɵtemplate(2, SliderTicksComponent_For_1_Case_2_Template, 2, 2, "span", 3)(3, SliderTicksComponent_For_1_Case_3_Template, 1, 0);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_14_0;
    const tick_r1 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵpropertyInterpolate("title", ctx_r1.tickTitle(tick_r1.value));
    ɵɵproperty("ngClass", tick_r1.classes);
    ɵɵadvance(2);
    ɵɵconditional((tmp_14_0 = tick_r1.large) === true ? 2 : tmp_14_0 === false ? 3 : -1);
  }
}
function SliderTicksComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const value_r4 = ctx.value;
    const ctx_r1 = ɵɵnextContext();
    ɵɵtextInterpolate1(" ", ctx_r1.tickTitle(value_r4), " ");
  }
}
var _c6 = ["draghandle"];
var _c7 = ["decreaseButton"];
var _c8 = ["increaseButton"];
var _c9 = (a0, a1) => ({
  click: a0,
  keydown: a1
});
function SliderComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "button", 8, 4);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("icon", ctx_r1.decreaseButtonArrowIcon)("svgIcon", ctx_r1.decreaseButtonArrowSVGIcon)("title", ctx_r1.decrementMessage);
    ɵɵattribute("tabindex", -1);
  }
}
function SliderComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ul", 10, 5);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("tickTitle", ctx_r1.title)("vertical", ctx_r1.vertical)("step", ctx_r1.smallStep)("largeStep", ctx_r1.largeStep)("min", ctx_r1.min)("max", ctx_r1.max)("labelTemplate", ctx_r1.labelTemplate == null ? null : ctx_r1.labelTemplate.templateRef);
  }
}
function SliderComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "button", 14, 6);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("icon", ctx_r1.increaseButtonArrowIcon)("svgIcon", ctx_r1.increaseButtonArrowSVGIcon)("title", ctx_r1.incrementMessage);
    ɵɵattribute("tabindex", -1);
  }
}
var _c10 = ["draghandleStart"];
var _c11 = ["draghandleEnd"];
function RangeSliderComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ul", 8, 5);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("tickTitle", ctx_r1.title)("vertical", ctx_r1.vertical)("step", ctx_r1.smallStep)("largeStep", ctx_r1.largeStep)("min", ctx_r1.min)("max", ctx_r1.max)("labelTemplate", ctx_r1.labelTemplate == null ? null : ctx_r1.labelTemplate.templateRef);
    ɵɵattribute("aria-hidden", true);
  }
}
var _c12 = ["thumb"];
var _c13 = ["numericInput"];
var _c14 = (a0, a1, a2, a3, a4, a5, a6) => ({
  mousedown: a0,
  dragenter: a1,
  keydown: a2,
  input: a3,
  focus: a4,
  blur: a5,
  paste: a6
});
var _c15 = (a0, a1) => ({
  mouseup: a0,
  mouseleave: a1
});
var _c16 = (a0) => ({
  mousedown: a0
});
function NumericTextBoxComponent_Conditional_2_ng_template_1_Template(rf, ctx) {
}
function NumericTextBoxComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 3);
    ɵɵtemplate(1, NumericTextBoxComponent_Conditional_2_ng_template_1_Template, 0, 0, "ng-template", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.prefixTemplate == null ? null : ctx_r1.prefixTemplate.templateRef);
  }
}
function NumericTextBoxComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-input-separator");
  }
}
function NumericTextBoxComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-input-separator");
  }
}
function NumericTextBoxComponent_Conditional_7_ng_template_1_Template(rf, ctx) {
}
function NumericTextBoxComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 5);
    ɵɵtemplate(1, NumericTextBoxComponent_Conditional_7_ng_template_1_Template, 0, 0, "ng-template", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.suffixTemplate == null ? null : ctx_r1.suffixTemplate.templateRef);
  }
}
function NumericTextBoxComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 6)(1, "button", 8);
    ɵɵelement(2, "kendo-icon-wrapper", 9);
    ɵɵelementEnd();
    ɵɵelementStart(3, "button", 10);
    ɵɵelement(4, "kendo-icon-wrapper", 11);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("kendoEventsOutsideAngular", ɵɵpureFunction2(15, _c15, ctx_r1.releaseArrow, ctx_r1.releaseArrow));
    ɵɵadvance();
    ɵɵclassProp("k-active", ctx_r1.arrowDirection === ctx_r1.ArrowDirection.Up);
    ɵɵproperty("kendoEventsOutsideAngular", ɵɵpureFunction1(18, _c16, ctx_r1.increasePress))("title", ctx_r1.incrementTitle);
    ɵɵattribute("aria-hidden", true)("aria-label", ctx_r1.incrementTitle);
    ɵɵadvance();
    ɵɵproperty("svgIcon", ctx_r1.arrowUpIcon);
    ɵɵadvance();
    ɵɵclassProp("k-active", ctx_r1.arrowDirection === ctx_r1.ArrowDirection.Down);
    ɵɵproperty("kendoEventsOutsideAngular", ɵɵpureFunction1(20, _c16, ctx_r1.decreasePress))("title", ctx_r1.decrementTitle);
    ɵɵattribute("aria-hidden", true)("aria-label", ctx_r1.decrementTitle);
    ɵɵadvance();
    ɵɵproperty("svgIcon", ctx_r1.arrowDownIcon);
  }
}
var _c17 = ["input"];
var _c18 = (a0, a1, a2, a3, a4) => ({
  focus: a0,
  blur: a1,
  click: a2,
  dragstart: a3,
  drop: a4
});
function MaskedTextBoxComponent_Conditional_1_ng_template_1_Template(rf, ctx) {
}
function MaskedTextBoxComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 2);
    ɵɵtemplate(1, MaskedTextBoxComponent_Conditional_1_ng_template_1_Template, 0, 0, "ng-template", 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.prefixTemplate == null ? null : ctx_r1.prefixTemplate.templateRef);
  }
}
function MaskedTextBoxComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-input-separator");
  }
}
function MaskedTextBoxComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-input-separator");
  }
}
function MaskedTextBoxComponent_Conditional_6_ng_template_1_Template(rf, ctx) {
}
function MaskedTextBoxComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 4);
    ɵɵtemplate(1, MaskedTextBoxComponent_Conditional_6_ng_template_1_Template, 0, 0, "ng-template", 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.suffixTemplate == null ? null : ctx_r1.suffixTemplate.templateRef);
  }
}
var _c19 = (a0, a1) => ({
  blur: a0,
  change: a1
});
var _c20 = (a0, a1, a2) => ({
  focus: a0,
  blur: a1,
  input: a2
});
function TextBoxComponent_Conditional_2_ng_template_1_Template(rf, ctx) {
}
function TextBoxComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 3);
    ɵɵtemplate(1, TextBoxComponent_Conditional_2_ng_template_1_Template, 0, 0, "ng-template", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.prefix == null ? null : ctx_r1.prefix.templateRef);
  }
}
function TextBoxComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-input-separator");
  }
}
function TextBoxComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 9);
    ɵɵlistener("click", function TextBoxComponent_Conditional_6_Template_span_click_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.clearValue());
    })("mousedown", function TextBoxComponent_Conditional_6_Template_span_mousedown_0_listener($event) {
      ɵɵrestoreView(_r3);
      return ɵɵresetView($event.preventDefault());
    })("keydown.enter", function TextBoxComponent_Conditional_6_Template_span_keydown_enter_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.clearValue($event));
    })("keydown.space", function TextBoxComponent_Conditional_6_Template_span_keydown_space_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.clearValue($event));
    });
    ɵɵelement(1, "kendo-icon-wrapper", 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("tabindex", ctx_r1.tabIndex)("title", ctx_r1.clearTitle());
    ɵɵattribute("aria-label", ctx_r1.clearTitle());
    ɵɵadvance();
    ɵɵproperty("name", ctx_r1.clearButtonClass)("customFontClass", ctx_r1.customClearButtonClasses)("svgIcon", ctx_r1.clearButtonSvgIcon || ctx_r1.svgIcon("xIcon"));
  }
}
function TextBoxComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 6);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("name", ctx_r1.errorIconClasses)("customFontClass", ctx_r1.customIconClasses)("svgIcon", ctx_r1.errorSvgIcon || ctx_r1.svgIcon("exclamationCircleIcon"));
  }
}
function TextBoxComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 6);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("name", ctx_r1.successIconClasses)("customFontClass", ctx_r1.customSuccessIconClasses)("svgIcon", ctx_r1.successSvgIcon || ctx_r1.svgIcon("checkIcon"));
  }
}
function TextBoxComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-input-separator");
  }
}
function TextBoxComponent_Conditional_10_ng_template_1_Template(rf, ctx) {
}
function TextBoxComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 7);
    ɵɵtemplate(1, TextBoxComponent_Conditional_10_ng_template_1_Template, 0, 0, "ng-template", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.suffix == null ? null : ctx_r1.suffix.templateRef);
  }
}
var _c21 = ["opacityInput"];
var _c22 = ["hexInput"];
var _c23 = ["blue"];
var _c24 = ["toggleFormatButton"];
function ColorInputComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 8)(1, "kendo-textbox", 9, 1);
    ɵɵlistener("blur", function ColorInputComponent_Conditional_3_Template_kendo_textbox_blur_1_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.handleHexInputBlur());
    })("input", function ColorInputComponent_Conditional_3_Template_kendo_textbox_input_1_listener() {
      ɵɵrestoreView(_r1);
      const hexInput_r3 = ɵɵreference(2);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.handleHexValueChange(hexInput_r3.value));
    })("keydown.tab", function ColorInputComponent_Conditional_3_Template_kendo_textbox_keydown_tab_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.focusDragHandle($event));
    });
    ɵɵelementEnd();
    ɵɵelementStart(3, "label", 10);
    ɵɵtext(4, "HEX");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵclassProp("k-readonly", ctx_r1.readonly);
    ɵɵproperty("focusableId", ctx_r1.focusableId)("size", ctx_r1.size)("disabled", ctx_r1.disabled)("readonly", ctx_r1.readonly)("value", ctx_r1.hex || "")("tabindex", ctx_r1.tabindex);
    ɵɵadvance(2);
    ɵɵproperty("for", ctx_r1.focusableId);
  }
}
function ColorInputComponent_Conditional_4_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 6)(1, "kendo-numerictextbox", 14, 5);
    ɵɵtwoWayListener("valueChange", function ColorInputComponent_Conditional_4_Conditional_15_Template_kendo_numerictextbox_valueChange_1_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext(2);
      ɵɵtwoWayBindingSet(ctx_r1.rgba.a, $event) || (ctx_r1.rgba.a = $event);
      return ɵɵresetView($event);
    });
    ɵɵlistener("blur", function ColorInputComponent_Conditional_4_Conditional_15_Template_kendo_numerictextbox_blur_1_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.handleRgbaInputBlur());
    })("valueChange", function ColorInputComponent_Conditional_4_Conditional_15_Template_kendo_numerictextbox_valueChange_1_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.handleRgbaValueChange());
    })("keydown.tab", function ColorInputComponent_Conditional_4_Conditional_15_Template_kendo_numerictextbox_keydown_tab_1_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.focusDragHandle($event));
    });
    ɵɵelementEnd();
    ɵɵelementStart(4, "label", 10);
    ɵɵtext(5, "A");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const alpha_r6 = ɵɵreference(3);
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("localizationService", ctx_r1.localizationService)("disabled", ctx_r1.disabled)("readonly", ctx_r1.readonly)("tabindex", ctx_r1.tabindex)("size", ctx_r1.size)("min", 0)("max", 1);
    ɵɵtwoWayProperty("value", ctx_r1.rgba.a);
    ɵɵproperty("autoCorrect", true)("spinners", false)("step", 0.01)("format", "n2")("decimals", 2);
    ɵɵadvance(3);
    ɵɵproperty("for", alpha_r6.focusableId);
  }
}
function ColorInputComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 6)(1, "kendo-numerictextbox", 11, 2);
    ɵɵtwoWayListener("valueChange", function ColorInputComponent_Conditional_4_Template_kendo_numerictextbox_valueChange_1_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext();
      ɵɵtwoWayBindingSet(ctx_r1.rgba.r, $event) || (ctx_r1.rgba.r = $event);
      return ɵɵresetView($event);
    });
    ɵɵlistener("blur", function ColorInputComponent_Conditional_4_Template_kendo_numerictextbox_blur_1_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.handleRgbaInputBlur());
    })("valueChange", function ColorInputComponent_Conditional_4_Template_kendo_numerictextbox_valueChange_1_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.handleRgbaValueChange());
    });
    ɵɵelementEnd();
    ɵɵelementStart(3, "label", 10);
    ɵɵtext(4, "R");
    ɵɵelementEnd()();
    ɵɵelementStart(5, "div", 6)(6, "kendo-numerictextbox", 12, 3);
    ɵɵtwoWayListener("valueChange", function ColorInputComponent_Conditional_4_Template_kendo_numerictextbox_valueChange_6_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext();
      ɵɵtwoWayBindingSet(ctx_r1.rgba.g, $event) || (ctx_r1.rgba.g = $event);
      return ɵɵresetView($event);
    });
    ɵɵlistener("blur", function ColorInputComponent_Conditional_4_Template_kendo_numerictextbox_blur_6_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.handleRgbaInputBlur());
    })("valueChange", function ColorInputComponent_Conditional_4_Template_kendo_numerictextbox_valueChange_6_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.handleRgbaValueChange());
    });
    ɵɵelementEnd();
    ɵɵelementStart(8, "label", 10);
    ɵɵtext(9, "G");
    ɵɵelementEnd()();
    ɵɵelementStart(10, "div", 6)(11, "kendo-numerictextbox", 13, 4);
    ɵɵtwoWayListener("valueChange", function ColorInputComponent_Conditional_4_Template_kendo_numerictextbox_valueChange_11_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext();
      ɵɵtwoWayBindingSet(ctx_r1.rgba.b, $event) || (ctx_r1.rgba.b = $event);
      return ɵɵresetView($event);
    });
    ɵɵlistener("blur", function ColorInputComponent_Conditional_4_Template_kendo_numerictextbox_blur_11_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.handleRgbaInputBlur());
    })("valueChange", function ColorInputComponent_Conditional_4_Template_kendo_numerictextbox_valueChange_11_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.handleRgbaValueChange());
    })("keydown.tab", function ColorInputComponent_Conditional_4_Template_kendo_numerictextbox_keydown_tab_11_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onTab());
    });
    ɵɵelementEnd();
    ɵɵelementStart(13, "label", 10);
    ɵɵtext(14, "B");
    ɵɵelementEnd()();
    ɵɵtemplate(15, ColorInputComponent_Conditional_4_Conditional_15_Template, 6, 14, "div", 6);
  }
  if (rf & 2) {
    const red_r7 = ɵɵreference(2);
    const green_r8 = ɵɵreference(7);
    const blue_r9 = ɵɵreference(12);
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("localizationService", ctx_r1.localizationService)("disabled", ctx_r1.disabled)("size", ctx_r1.size)("readonly", ctx_r1.readonly)("tabindex", ctx_r1.tabindex)("min", 0)("max", 255);
    ɵɵtwoWayProperty("value", ctx_r1.rgba.r);
    ɵɵproperty("autoCorrect", true)("spinners", false)("format", "n")("decimals", 0);
    ɵɵadvance(2);
    ɵɵproperty("for", red_r7.focusableId);
    ɵɵadvance(3);
    ɵɵproperty("localizationService", ctx_r1.localizationService)("disabled", ctx_r1.disabled)("readonly", ctx_r1.readonly)("tabindex", ctx_r1.tabindex)("size", ctx_r1.size)("min", 0)("max", 255);
    ɵɵtwoWayProperty("value", ctx_r1.rgba.g);
    ɵɵproperty("autoCorrect", true)("spinners", false)("format", "n")("decimals", 0);
    ɵɵadvance(2);
    ɵɵproperty("for", green_r8.focusableId);
    ɵɵadvance(3);
    ɵɵproperty("localizationService", ctx_r1.localizationService)("disabled", ctx_r1.disabled)("readonly", ctx_r1.readonly)("tabindex", ctx_r1.tabindex)("size", ctx_r1.size)("min", 0)("max", 255);
    ɵɵtwoWayProperty("value", ctx_r1.rgba.b);
    ɵɵproperty("autoCorrect", true)("spinners", false)("format", "n")("decimals", 0);
    ɵɵadvance(2);
    ɵɵproperty("for", blue_r9.focusableId);
    ɵɵadvance(2);
    ɵɵconditional(ctx_r1.opacity ? 15 : -1);
  }
}
var _c25 = ["kendoContrastValidation", ""];
function ContrastValidationComponent_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 0);
    ɵɵtext(1);
    ɵɵelement(2, "kendo-icon-wrapper", 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.passMessage, " ");
    ɵɵadvance();
    ɵɵproperty("svgIcon", ctx_r0.checkIcon);
  }
}
function ContrastValidationComponent_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 1);
    ɵɵtext(1);
    ɵɵelement(2, "kendo-icon-wrapper", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.failMessage, " ");
    ɵɵadvance();
    ɵɵproperty("svgIcon", ctx_r0.xCircleIcon);
  }
}
function ContrastValidationComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ContrastValidationComponent_Conditional_2_Conditional_0_Template, 3, 2, "span", 0)(1, ContrastValidationComponent_Conditional_2_Conditional_1_Template, 3, 2, "span", 1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵconditional(ctx_r0.pass ? 0 : 1);
  }
}
var _c26 = ["kendoContrastTool", ""];
function ContrastComponent_Conditional_3_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 6);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("svgIcon", ctx_r0.checkIcon);
  }
}
function ContrastComponent_Conditional_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 4);
    ɵɵelement(1, "kendo-icon-wrapper", 6);
    ɵɵtemplate(2, ContrastComponent_Conditional_3_Conditional_0_Conditional_2_Template, 1, 1, "kendo-icon-wrapper", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("svgIcon", ctx_r0.checkIcon);
    ɵɵadvance();
    ɵɵconditional(ctx_r0.satisfiesAAACondition ? 2 : -1);
  }
}
function ContrastComponent_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 5);
    ɵɵelement(1, "kendo-icon-wrapper", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("svgIcon", ctx_r0.xCircleIcon);
  }
}
function ContrastComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ContrastComponent_Conditional_3_Conditional_0_Template, 3, 2, "span", 4)(1, ContrastComponent_Conditional_3_Conditional_1_Template, 2, 1, "span", 5);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵconditional(ctx_r0.satisfiesAACondition ? 0 : 1);
  }
}
var _c27 = ["kendoColorContrastSvg", ""];
function ColorContrastSvgComponent_For_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "path", 0);
  }
  if (rf & 2) {
    const path_r1 = ctx.$implicit;
    ɵɵattribute("d", path_r1);
  }
}
var _c28 = ["gradientDragHandle"];
var _c29 = ["inputs"];
var _c30 = ["alphaSlider"];
var _c31 = ["gradientWrapper"];
var _c32 = ["hsvRectangle"];
var _c33 = (a0, a1) => ({
  "k-colorgradient-canvas": true,
  "k-vstack": a0,
  "k-hstack": a1
});
var _c34 = (a0, a1, a2) => ({
  "k-hsv-controls": true,
  "k-sliders-wrap-clearable": a0,
  "k-vstack": a1,
  "k-hstack": a2
});
var _c35 = (a0) => ({
  "k-align-self-end": a0
});
function ColorGradientComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 16);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    const gradientWrapper_r4 = ɵɵreference(5);
    ɵɵstyleMap("position: absolute; overflow: visible; pointer-events: none; left: 0px; top: 0px;");
    ɵɵproperty("wrapper", gradientWrapper_r4 ? gradientWrapper_r4 : void 0)("hsva", ctx_r2.hsva)("backgroundColor", ctx_r2.contrastTool);
  }
}
function ColorGradientComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 17);
    ɵɵlistener("click", function ColorGradientComponent_Conditional_10_Template_button_click_0_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.reset());
    })("keydown.enter", function ColorGradientComponent_Conditional_10_Template_button_keydown_enter_0_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.reset());
    })("keydown.space", function ColorGradientComponent_Conditional_10_Template_button_keydown_space_0_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.reset());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵstyleMap("position: absolute; top: 0; left: 50%; transform: translateX(-50%);");
    ɵɵproperty("svgIcon", ctx_r2.dropletSlashIcon)("size", ctx_r2.size)("tabindex", ctx_r2.innerTabIndex.toString());
    ɵɵattribute("aria-label", ctx_r2.clearButtonTitle)("title", ctx_r2.clearButtonTitle);
  }
}
function ColorGradientComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "kendo-slider", 18, 4);
    ɵɵlistener("valueChange", function ColorGradientComponent_Conditional_12_Template_kendo_slider_valueChange_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.handleAlphaSliderChange($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵstyleProp("height", ctx_r2.clearButton ? "140" : null, "px");
    ɵɵproperty("tabindex", ctx_r2.innerTabIndex)("ngClass", ɵɵpureFunction1(14, _c35, ctx_r2.clearButton))("dragHandleTitle", ctx_r2.opacitySliderTitle)("disabled", ctx_r2.disabled)("readonly", ctx_r2.readonly)("showButtons", false)("vertical", !ctx_r2.adaptiveMode)("min", 0)("max", 100)("smallStep", 1)("largeStep", 10)("value", ctx_r2.alphaSliderValue);
  }
}
function ColorGradientComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 15);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("value", ctx_r2.value)("ratio", ctx_r2.contrastTool);
  }
}
var _c36 = (a0, a1, a2, a3) => ({
  backgroundColor: a0,
  width: a1,
  height: a2,
  minWidth: a3
});
function ColorPaletteComponent_For_4_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "td", 4);
    ɵɵlistener("click", function ColorPaletteComponent_For_4_For_2_Template_td_click_0_listener() {
      const ctx_r1 = ɵɵrestoreView(_r1);
      const color_r3 = ctx_r1.$implicit;
      const ɵ$index_10_r4 = ctx_r1.$index;
      const ɵ$index_7_r5 = ɵɵnextContext().$index;
      const ctx_r5 = ɵɵnextContext();
      return ɵɵresetView(ctx_r5.handleCellSelection(color_r3, {
        row: ɵ$index_7_r5,
        col: ɵ$index_10_r4
      }));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const color_r3 = ctx.$implicit;
    const ɵ$index_10_r4 = ctx.$index;
    const ɵ$index_7_r5 = ɵɵnextContext().$index;
    const ctx_r5 = ɵɵnextContext();
    ɵɵclassProp("k-selected", (ctx_r5.selectedCell == null ? null : ctx_r5.selectedCell.row) === ɵ$index_7_r5 && (ctx_r5.selectedCell == null ? null : ctx_r5.selectedCell.col) === ɵ$index_10_r4)("k-focus", ctx_r5.focusInComponent && (ctx_r5.focusedCell == null ? null : ctx_r5.focusedCell.row) === ɵ$index_7_r5 && (ctx_r5.focusedCell == null ? null : ctx_r5.focusedCell.col) === ɵ$index_10_r4);
    ɵɵproperty("id", "k-" + ɵ$index_7_r5 + "-" + ɵ$index_10_r4 + "-" + ctx_r5.uniqueId)("ngStyle", ɵɵpureFunction4(9, _c36, color_r3, (ctx_r5.tileLayout == null ? null : ctx_r5.tileLayout.width) + "px", (ctx_r5.tileLayout == null ? null : ctx_r5.tileLayout.height) + "px", (ctx_r5.tileLayout == null ? null : ctx_r5.tileLayout.width) + "px"));
    ɵɵattribute("aria-selected", (ctx_r5.selectedCell == null ? null : ctx_r5.selectedCell.row) === ɵ$index_7_r5 && (ctx_r5.selectedCell == null ? null : ctx_r5.selectedCell.col) === ɵ$index_10_r4 ? "true" : void 0)("aria-label", color_r3)("value", color_r3);
  }
}
function ColorPaletteComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tr", 2);
    ɵɵrepeaterCreate(1, ColorPaletteComponent_For_4_For_2_Template, 1, 14, "td", 3, ɵɵrepeaterTrackByIdentity);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const row_r7 = ctx.$implicit;
    ɵɵadvance();
    ɵɵrepeater(row_r7);
  }
}
var _c37 = ["clearButton"];
var _c38 = ["viewButtons"];
var _c39 = ["kendoFlatColorPickerHeader", ""];
function FlatColorPickerHeaderComponent_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 8, 0);
    ɵɵlistener("click", function FlatColorPickerHeaderComponent_Conditional_1_For_2_Template_button_click_0_listener() {
      const view_r2 = ɵɵrestoreView(_r1).$implicit;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.onViewButtonClick(view_r2));
    })("keydown.shift.tab", function FlatColorPickerHeaderComponent_Conditional_1_For_2_Template_button_keydown_shift_tab_0_listener($event) {
      const ɵ$index_6_r4 = ɵɵrestoreView(_r1).$index;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.onHeaderTabOut($event, ɵ$index_6_r4));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const view_r2 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("tabindex", ctx_r2.innerTabIndex.toString())("icon", ctx_r2.getViewButtonIcon(view_r2))("svgIcon", ctx_r2.getViewButtonsSVGIcon(view_r2))("size", ctx_r2.size)("ngClass", ctx_r2.activeView === view_r2 ? "k-selected" : "");
    ɵɵattribute("title", ctx_r2.getText(view_r2 === "gradient" ? "gradientView" : "paletteView"))("aria-label", ctx_r2.getText(view_r2 === "gradient" ? "gradientView" : "paletteView"))("aria-pressed", ctx_r2.activeView === view_r2);
  }
}
function FlatColorPickerHeaderComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 3);
    ɵɵrepeaterCreate(1, FlatColorPickerHeaderComponent_Conditional_1_For_2_Template, 2, 8, "button", 7, ɵɵrepeaterTrackByIdentity);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵrepeater(ctx_r2.views);
  }
}
function FlatColorPickerHeaderComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 9, 1);
    ɵɵlistener("click", function FlatColorPickerHeaderComponent_Conditional_4_Template_button_click_0_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.clearButtonClick.emit());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("tabindex", ctx_r2.innerTabIndex.toString())("size", ctx_r2.size)("svgIcon", ctx_r2.dropletSlashIcon);
    ɵɵattribute("aria-label", ctx_r2.getText("clearButton"))("title", ctx_r2.getText("clearButton"));
  }
}
function FlatColorPickerHeaderComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 6);
    ɵɵelement(1, "span", 10);
    ɵɵelementStart(2, "span", 11);
    ɵɵlistener("click", function FlatColorPickerHeaderComponent_Conditional_5_Template_span_click_2_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.valuePaneClick.emit($event));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵstyleProp("background-color", ctx_r2.selection);
    ɵɵattribute("title", ctx_r2.getText("previewColor"));
    ɵɵadvance();
    ɵɵstyleProp("background-color", ctx_r2.value);
    ɵɵattribute("title", ctx_r2.getText("revertSelection"));
  }
}
var _c40 = ["first"];
var _c41 = ["last"];
var _c42 = ["kendoFlatColorPickerActionButtons", ""];
var _c43 = ["header"];
var _c44 = ["gradient"];
var _c45 = ["palette"];
var _c46 = ["footer"];
function FlatColorPickerComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 10, 0);
    ɵɵlistener("clearButtonClick", function FlatColorPickerComponent_Conditional_1_Template_div_clearButtonClick_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onClearButtonClick());
    })("viewChange", function FlatColorPickerComponent_Conditional_1_Template_div_viewChange_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onViewChange($event));
    })("valuePaneClick", function FlatColorPickerComponent_Conditional_1_Template_div_valuePaneClick_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.resetSelection($event));
    })("tabOut", function FlatColorPickerComponent_Conditional_1_Template_div_tabOut_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.lastFocusable($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("innerTabIndex", ctx_r1.innerTabIndex)("clearButton", ctx_r1.clearButton)("activeView", ctx_r1.activeView)("views", ctx_r1.views)("size", ctx_r1.size)("value", ctx_r1.value)("selection", ctx_r1.selection)("preview", ctx_r1.preview);
  }
}
function FlatColorPickerComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "kendo-colorgradient", 11, 1);
    ɵɵlistener("keydown.tab", function FlatColorPickerComponent_Conditional_3_Template_kendo_colorgradient_keydown_tab_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.focusFirstHeaderButton());
    })("valueChange", function FlatColorPickerComponent_Conditional_3_Template_kendo_colorgradient_valueChange_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.handleValueChange($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("tabindex", ctx_r1.innerTabIndex)("value", ctx_r1.selection)("size", ctx_r1.size)("adaptiveMode", ctx_r1.adaptiveMode)("format", ctx_r1.format)("opacity", ctx_r1.gradientSettings.opacity)("delay", ctx_r1.gradientSettings.delay)("contrastTool", ctx_r1.gradientSettings.contrastTool)("gradientSliderSmallStep", ctx_r1.gradientSettings.gradientSliderSmallStep)("gradientSliderStep", ctx_r1.gradientSettings.gradientSliderStep)("readonly", ctx_r1.readonly)("ariaAttributesEnabled", false);
  }
}
function FlatColorPickerComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "kendo-colorpalette", 12, 2);
    ɵɵlistener("valueChange", function FlatColorPickerComponent_Conditional_4_Template_kendo_colorpalette_valueChange_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.handleValueChange($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("tabindex", ctx_r1.innerTabIndex)("palette", ctx_r1.paletteSettings.palette)("size", ctx_r1.size)("columns", ctx_r1.paletteSettings.columns)("tileSize", ctx_r1.paletteSettings.tileSize)("format", ctx_r1.format)("value", ctx_r1.selection)("readonly", ctx_r1.readonly);
  }
}
function FlatColorPickerComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 13, 3);
    ɵɵlistener("actionButtonClick", function FlatColorPickerComponent_Conditional_5_Template_div_actionButtonClick_0_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onAction($event));
    })("tabOut", function FlatColorPickerComponent_Conditional_5_Template_div_tabOut_0_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.firstFocusable.focus());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("innerTabIndex", ctx_r1.innerTabIndex)("size", ctx_r1.size)("ngClass", "k-justify-content-" + ctx_r1.actionsLayout);
  }
}
var _c47 = ["actionSheetSearchBar"];
var _c48 = ["cancel"];
var _c49 = ["apply"];
var _c50 = (a0) => ({
  duration: a0
});
var _c51 = (a0, a1) => ({
  "k-adaptive-actionsheet": true,
  "k-actionsheet-fullscreen": a0,
  "k-actionsheet-bottom": a1
});
var _c52 = (a0) => ({
  height: a0
});
function AdaptiveRendererComponent_ng_template_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 9);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r2.subtitle);
  }
}
function AdaptiveRendererComponent_ng_template_2_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function AdaptiveRendererComponent_ng_template_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 14)(1, "button", 15, 1);
    ɵɵlistener("click", function AdaptiveRendererComponent_ng_template_2_Conditional_10_Template_button_click_1_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.onCancel.emit($event));
    });
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementStart(4, "button", 16, 2);
    ɵɵlistener("click", function AdaptiveRendererComponent_ng_template_2_Conditional_10_Template_button_click_4_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.onApply.emit());
    });
    ɵɵtext(6);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("title", ctx_r2.messageFor("cancelButton"));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r2.messageFor("cancelButton"), " ");
    ɵɵadvance();
    ɵɵproperty("title", ctx_r2.messageFor("applyButton"));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r2.messageFor("applyButton"), " ");
  }
}
function AdaptiveRendererComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 5)(1, "div", 6)(2, "div", 7)(3, "div", 8);
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵtemplate(5, AdaptiveRendererComponent_ng_template_2_Conditional_5_Template, 2, 1, "div", 9);
    ɵɵelementEnd();
    ɵɵelementStart(6, "div", 10)(7, "kendo-adaptive-close-button", 11);
    ɵɵlistener("close", function AdaptiveRendererComponent_ng_template_2_Template_kendo_adaptive_close_button_close_7_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.actionSheetClose.emit($event));
    });
    ɵɵelementEnd()()()();
    ɵɵelementStart(8, "div", 12);
    ɵɵtemplate(9, AdaptiveRendererComponent_ng_template_2_ng_container_9_Template, 1, 0, "ng-container", 13);
    ɵɵelementEnd();
    ɵɵtemplate(10, AdaptiveRendererComponent_ng_template_2_Conditional_10_Template, 7, 4, "div", 14);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(4);
    ɵɵtextInterpolate(ctx_r2.title || ctx_r2.messageFor("adaptiveTitle"));
    ɵɵadvance();
    ɵɵconditional(ctx_r2.subtitle ? 5 : -1);
    ɵɵadvance(2);
    ɵɵproperty("title", ctx_r2.messageFor("adaptiveCloseButtonTitle"))("svgIcon", ctx_r2.checkIcon);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r2.actionSheetTemplate);
    ɵɵadvance();
    ɵɵconditional(ctx_r2.preview ? 10 : -1);
  }
}
var _c53 = ["container"];
var _c54 = ["activeColor"];
var _c55 = ["popupTemplate"];
var _c56 = ["flatColorPicker"];
var _c57 = (a0, a1) => ({
  "k-icon-color-preview": a0,
  "k-no-color": a1
});
function ColorPickerComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 7);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("name", ctx_r1.iconStyles)("customFontClass", ctx_r1.customIconStyles)("svgIcon", ctx_r1.svgIcon);
  }
}
function ColorPickerComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "kendo-flatcolorpicker", 11, 3);
    ɵɵlistener("cancel", function ColorPickerComponent_ng_template_7_Template_kendo_flatcolorpicker_cancel_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.handleCancelEvent($event));
    })("focusout", function ColorPickerComponent_ng_template_7_Template_kendo_flatcolorpicker_focusout_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.handlePopupBlur($event));
    })("valueChange", function ColorPickerComponent_ng_template_7_Template_kendo_flatcolorpicker_valueChange_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.handleValueChange($event));
    })("keydown", function ColorPickerComponent_ng_template_7_Template_kendo_flatcolorpicker_keydown_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.handlePopupKeyDown($event));
    })("activeViewChange", function ColorPickerComponent_ng_template_7_Template_kendo_flatcolorpicker_activeViewChange_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.activeViewChange.emit($event));
    })("clearButtonClick", function ColorPickerComponent_ng_template_7_Template_kendo_flatcolorpicker_clearButtonClick_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.clearButtonClick.emit());
    })("actionButtonClick", function ColorPickerComponent_ng_template_7_Template_kendo_flatcolorpicker_actionButtonClick_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.togglePopup());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("value", ctx_r1.value)("format", ctx_r1.format)("size", ctx_r1.isAdaptive ? "large" : ctx_r1.size)("views", ctx_r1.views)("activeView", ctx_r1.activeView)("actionsLayout", ctx_r1.actionsLayout)("adaptiveMode", ctx_r1.isActionSheetExpanded)("preview", ctx_r1.preview)("gradientSettings", ctx_r1.gradientSettings)("paletteSettings", ctx_r1.paletteSettings)("clearButton", ctx_r1.clearButton);
  }
}
function ColorPickerComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "kendo-resize-sensor", 12);
    ɵɵlistener("resize", function ColorPickerComponent_Conditional_12_Template_kendo_resize_sensor_resize_0_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onResize());
    });
    ɵɵelementEnd();
  }
}
var _c58 = ["*"];
var _c59 = [[["label"], ["kendo-label"]], "*", [["kendo-formhint"]], [["kendo-formerror"]]];
var _c60 = ["label, kendo-label", "*", "kendo-formhint", "kendo-formerror"];
function FormFieldComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0, 2);
  }
}
function FormFieldComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0, 3);
  }
}
var _c61 = (a0, a1) => ({
  "k-selected": a0,
  "k-hover": a1
});
var _c62 = (a0) => ({
  index: a0
});
var _c63 = (a0) => ({
  "clipPath": a0
});
function RatingComponent_For_2_Conditional_1_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 5);
  }
  if (rf & 2) {
    const item_r4 = ɵɵnextContext(3).$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("name", item_r4.selected || item_r4.hovered ? "star" : "star-outline")("svgIcon", item_r4.selected || item_r4.hovered ? ctx_r1.svgIcon : ctx_r1.svgIconOutline);
  }
}
function RatingComponent_For_2_Conditional_1_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 6);
  }
  if (rf & 2) {
    const item_r4 = ɵɵnextContext(3).$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("name", item_r4.selected || item_r4.hovered ? ctx_r1.icon : ctx_r1.icon + "-outline");
  }
}
function RatingComponent_For_2_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, RatingComponent_For_2_Conditional_1_Conditional_0_Conditional_0_Template, 1, 2, "kendo-icon-wrapper", 5)(1, RatingComponent_For_2_Conditional_1_Conditional_0_Conditional_1_Template, 1, 1, "kendo-icon-wrapper", 6);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵconditional(!ctx_r1.icon ? 0 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.icon ? 1 : -1);
  }
}
function RatingComponent_For_2_Conditional_1_Conditional_1_ng_template_0_Template(rf, ctx) {
}
function RatingComponent_For_2_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, RatingComponent_For_2_Conditional_1_Conditional_1_ng_template_0_Template, 0, 0, "ng-template", 4);
  }
  if (rf & 2) {
    const ɵ$index_3_r3 = ɵɵnextContext(2).$index;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.itemTemplate == null ? null : ctx_r1.itemTemplate.templateRef)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c62, ɵ$index_3_r3));
  }
}
function RatingComponent_For_2_Conditional_1_Conditional_2_ng_template_0_Template(rf, ctx) {
}
function RatingComponent_For_2_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, RatingComponent_For_2_Conditional_1_Conditional_2_ng_template_0_Template, 0, 0, "ng-template", 4);
  }
  if (rf & 2) {
    const ɵ$index_3_r3 = ɵɵnextContext(2).$index;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.hoveredItemTemplate == null ? null : ctx_r1.hoveredItemTemplate.templateRef)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c62, ɵ$index_3_r3));
  }
}
function RatingComponent_For_2_Conditional_1_Conditional_3_ng_template_0_Template(rf, ctx) {
}
function RatingComponent_For_2_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, RatingComponent_For_2_Conditional_1_Conditional_3_ng_template_0_Template, 0, 0, "ng-template", 4);
  }
  if (rf & 2) {
    const ɵ$index_3_r3 = ɵɵnextContext(2).$index;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.selectedItemTemplate == null ? null : ctx_r1.selectedItemTemplate.templateRef)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c62, ɵ$index_3_r3));
  }
}
function RatingComponent_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, RatingComponent_For_2_Conditional_1_Conditional_0_Template, 2, 2)(1, RatingComponent_For_2_Conditional_1_Conditional_1_Template, 1, 4, null, 4)(2, RatingComponent_For_2_Conditional_1_Conditional_2_Template, 1, 4, null, 4)(3, RatingComponent_For_2_Conditional_1_Conditional_3_Template, 1, 4, null, 4);
  }
  if (rf & 2) {
    const item_r4 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵconditional(!ctx_r1.itemTemplate ? 0 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.itemTemplate && !item_r4.selected && !item_r4.hovered ? 1 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.hoveredItemTemplate && item_r4.hovered ? 2 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.selectedItemTemplate && item_r4.selected && !item_r4.hovered ? 3 : -1);
  }
}
function RatingComponent_For_2_Conditional_2_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 5);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵproperty("name", "star-outline")("svgIcon", ctx_r1.svgIconOutline);
  }
}
function RatingComponent_For_2_Conditional_2_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 6);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵproperty("name", ctx_r1.icon + "-outline");
  }
}
function RatingComponent_For_2_Conditional_2_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 5);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵproperty("name", "star")("svgIcon", ctx_r1.svgIcon);
  }
}
function RatingComponent_For_2_Conditional_2_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 6);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵproperty("name", ctx_r1.icon);
  }
}
function RatingComponent_For_2_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 7);
    ɵɵtemplate(1, RatingComponent_For_2_Conditional_2_Conditional_0_Conditional_1_Template, 1, 2, "kendo-icon-wrapper", 5)(2, RatingComponent_For_2_Conditional_2_Conditional_0_Conditional_2_Template, 1, 1, "kendo-icon-wrapper", 6);
    ɵɵelementEnd();
    ɵɵelementStart(3, "span", 8);
    ɵɵtemplate(4, RatingComponent_For_2_Conditional_2_Conditional_0_Conditional_4_Template, 1, 2, "kendo-icon-wrapper", 5)(5, RatingComponent_For_2_Conditional_2_Conditional_0_Conditional_5_Template, 1, 1, "kendo-icon-wrapper", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵconditional(!ctx_r1.icon ? 1 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.icon ? 2 : -1);
    ɵɵadvance();
    ɵɵproperty("ngStyle", ɵɵpureFunction1(5, _c63, ctx_r1.direction === "rtl" ? "inset(0 0 0 50%)" : "inset(0 50% 0 0)"));
    ɵɵadvance();
    ɵɵconditional(!ctx_r1.icon ? 4 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.icon ? 5 : -1);
  }
}
function RatingComponent_For_2_Conditional_2_ng_template_2_Template(rf, ctx) {
}
function RatingComponent_For_2_Conditional_2_Conditional_3_ng_template_1_Template(rf, ctx) {
}
function RatingComponent_For_2_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 8);
    ɵɵtemplate(1, RatingComponent_For_2_Conditional_2_Conditional_3_ng_template_1_Template, 0, 0, "ng-template", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ɵ$index_3_r3 = ɵɵnextContext(2).$index;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngStyle", ɵɵpureFunction1(3, _c63, ctx_r1.direction === "rtl" ? "inset(0 0 0 50%)" : "inset(0 50% 0 0)"));
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.hoveredItemTemplate == null ? null : ctx_r1.hoveredItemTemplate.templateRef)("ngTemplateOutletContext", ɵɵpureFunction1(5, _c62, ɵ$index_3_r3));
  }
}
function RatingComponent_For_2_Conditional_2_Conditional_4_ng_template_1_Template(rf, ctx) {
}
function RatingComponent_For_2_Conditional_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 8);
    ɵɵtemplate(1, RatingComponent_For_2_Conditional_2_Conditional_4_ng_template_1_Template, 0, 0, "ng-template", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ɵ$index_3_r3 = ɵɵnextContext(2).$index;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngStyle", ɵɵpureFunction1(3, _c63, ctx_r1.direction === "rtl" ? "inset(0 0 0 50%)" : "inset(0 50% 0 0)"));
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.selectedItemTemplate == null ? null : ctx_r1.selectedItemTemplate.templateRef)("ngTemplateOutletContext", ɵɵpureFunction1(5, _c62, ɵ$index_3_r3));
  }
}
function RatingComponent_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, RatingComponent_For_2_Conditional_2_Conditional_0_Template, 6, 7);
    ɵɵelementStart(1, "span", 7);
    ɵɵtemplate(2, RatingComponent_For_2_Conditional_2_ng_template_2_Template, 0, 0, "ng-template", 4);
    ɵɵelementEnd();
    ɵɵtemplate(3, RatingComponent_For_2_Conditional_2_Conditional_3_Template, 2, 7, "span", 8)(4, RatingComponent_For_2_Conditional_2_Conditional_4_Template, 2, 7, "span", 8);
    ɵɵelement(5, "span");
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    const item_r4 = ctx_r4.$implicit;
    const ɵ$index_3_r3 = ctx_r4.$index;
    const ctx_r1 = ɵɵnextContext();
    ɵɵconditional(!ctx_r1.itemTemplate ? 0 : -1);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.itemTemplate == null ? null : ctx_r1.itemTemplate.templateRef)("ngTemplateOutletContext", ɵɵpureFunction1(11, _c62, ɵ$index_3_r3));
    ɵɵadvance();
    ɵɵconditional(ctx_r1.hoveredItemTemplate && item_r4.hovered ? 3 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.selectedItemTemplate && item_r4.selected && !item_r4.hovered ? 4 : -1);
    ɵɵadvance();
    ɵɵstyleProp("width", 24, "px")("height", 24, "px")("display", "block");
  }
}
function RatingComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 3);
    ɵɵlistener("mouseenter", function RatingComponent_For_2_Template_span_mouseenter_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onMouseEnter($event));
    })("mouseout", function RatingComponent_For_2_Template_span_mouseout_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onMouseOut());
    })("click", function RatingComponent_For_2_Template_span_click_0_listener($event) {
      const ɵ$index_3_r3 = ɵɵrestoreView(_r1).$index;
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.changeValue(ɵ$index_3_r3, $event));
    });
    ɵɵtemplate(1, RatingComponent_For_2_Conditional_1_Template, 4, 4)(2, RatingComponent_For_2_Conditional_2_Template, 6, 13);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    ɵɵproperty("title", item_r4.title)("ngClass", ɵɵpureFunction2(4, _c61, item_r4.selected || item_r4.selectedIndicator, item_r4.hovered));
    ɵɵadvance();
    ɵɵconditional(!item_r4.half ? 1 : -1);
    ɵɵadvance();
    ɵɵconditional(item_r4.half ? 2 : -1);
  }
}
function RatingComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 2);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.label);
  }
}
var _c64 = ["canvas"];
var _c65 = ["minimize"];
var _c66 = ["maximize"];
function SignatureComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 12, 1);
    ɵɵlistener("click", function SignatureComponent_Conditional_4_Template_button_click_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onMaximize());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("svgIcon", ctx_r1.svgIcon("hyperlinkOpenIcon"))("size", ctx_r1.size)("title", ctx_r1.maximizeTitle);
    ɵɵattribute("aria-label", ctx_r1.maximizeTitle);
  }
}
function SignatureComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 13, 2);
    ɵɵlistener("click", function SignatureComponent_Conditional_5_Template_button_click_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onMinimize());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("svgIcon", ctx_r1.svgIcon("hyperlinkOpenIcon"))("size", ctx_r1.size)("title", ctx_r1.minimizeTitle);
    ɵɵattribute("aria-label", ctx_r1.minimizeTitle);
  }
}
function SignatureComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 8);
  }
}
function SignatureComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 14);
    ɵɵlistener("click", function SignatureComponent_Conditional_8_Template_button_click_0_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onClear());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("svgIcon", ctx_r1.svgIcon("xIcon"))("size", ctx_r1.size)("title", ctx_r1.clearTitle);
    ɵɵattribute("aria-label", ctx_r1.clearTitle);
  }
}
function SignatureComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "kendo-dialog", 15);
    ɵɵlistener("click", function SignatureComponent_Conditional_9_Template_kendo_dialog_click_0_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onDialogClick($event));
    })("keydown", function SignatureComponent_Conditional_9_Template_kendo_dialog_keydown_0_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onDialogKeydown($event));
    });
    ɵɵelementStart(1, "kendo-signature", 16);
    ɵɵlistener("valueChange", function SignatureComponent_Conditional_9_Template_kendo_signature_valueChange_1_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onDialogValueChange($event));
    })("minimize", function SignatureComponent_Conditional_9_Template_kendo_signature_minimize_1_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onDialogClose());
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵclassProp("k-signature-maximized", true);
    ɵɵproperty("readonly", ctx_r1.readonly)("disabled", ctx_r1.disabled)("size", ctx_r1.size)("rounded", ctx_r1.rounded)("fillMode", ctx_r1.fillMode)("color", ctx_r1.color)("backgroundColor", ctx_r1.backgroundColor)("strokeWidth", ctx_r1.strokeWidth)("smooth", ctx_r1.smooth)("value", ctx_r1.popupValue)("hideLine", ctx_r1.hideLine)("maximized", true)("width", ctx_r1.popupWidth)("height", ctx_r1.popupHeight)("popupScale", ctx_r1.popupScale)("exportScale", 1 / ctx_r1.popupScale * ctx_r1.exportScale)("parentLocalization", ctx_r1.localization);
  }
}
var _c67 = [[["kendo-textarea-prefix"]], [["kendo-textarea-suffix"]]];
var _c68 = ["kendo-textarea-prefix", "kendo-textarea-suffix"];
function TextAreaComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-input-separator", 2);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("orientation", ctx_r1.separatorOrientation);
  }
}
function TextAreaComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-input-separator", 2);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("orientation", ctx_r1.separatorOrientation);
  }
}
function OTPInputSeparatorComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵtextInterpolate1(" ", ctx_r0.separator, " ");
  }
}
function OTPInputSeparatorComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 0);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r0.separatorIconString);
  }
}
function OTPInputSeparatorComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("name", ctx_r0.separatorIconString)("svgIcon", ctx_r0.separatorSVGIcon);
  }
}
var _c69 = ["inputGroup"];
var _c70 = () => [];
function OTPInputComponent_Conditional_3_For_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-otpinput-separator", 5);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵproperty("separator", ctx_r2.separator);
  }
}
function OTPInputComponent_Conditional_3_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "kendo-textbox", 4);
    ɵɵlistener("focus", function OTPInputComponent_Conditional_3_For_1_Template_kendo_textbox_focus_0_listener() {
      const ɵ$index_6_r2 = ɵɵrestoreView(_r1).$index;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.handleInputFocus(ɵ$index_6_r2));
    })("input", function OTPInputComponent_Conditional_3_For_1_Template_kendo_textbox_input_0_listener($event) {
      const ɵ$index_6_r2 = ɵɵrestoreView(_r1).$index;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.handleInput($event, ɵ$index_6_r2));
    });
    ɵɵelementEnd();
    ɵɵtemplate(1, OTPInputComponent_Conditional_3_For_1_Conditional_1_Template, 1, 1, "kendo-otpinput-separator", 5);
  }
  if (rf & 2) {
    const ɵ$index_6_r2 = ctx.$index;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵclassProp("k-invalid", ctx_r2.isControlInvalid);
    ɵɵproperty("selectOnFocus", true)("maxlength", 1)("type", ctx_r2.type !== "number" ? ctx_r2.type : null)("placeholder", ctx_r2.placeholder)("size", ctx_r2.size)("rounded", ctx_r2.rounded)("fillMode", ctx_r2.fillMode)("disabled", ctx_r2.disabled)("readonly", ctx_r2.readonly);
    ɵɵadvance();
    ɵɵconditional(ctx_r2.showSeparator(ɵ$index_6_r2) ? 1 : -1);
  }
}
function OTPInputComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵrepeaterCreate(0, OTPInputComponent_Conditional_3_For_1_Template, 2, 12, null, null, ɵɵrepeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵrepeater(ctx_r2.inputsArray);
  }
}
function OTPInputComponent_Conditional_4_For_1_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "kendo-textbox", 4);
    ɵɵlistener("focus", function OTPInputComponent_Conditional_4_For_1_For_3_Template_kendo_textbox_focus_0_listener() {
      const ɵ$index_16_r5 = ɵɵrestoreView(_r4).$index;
      const ɵ$index_13_r6 = ɵɵnextContext().$index;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.handleInputFocus(ɵ$index_16_r5, ɵ$index_13_r6));
    })("input", function OTPInputComponent_Conditional_4_For_1_For_3_Template_kendo_textbox_input_0_listener($event) {
      const ɵ$index_16_r5 = ɵɵrestoreView(_r4).$index;
      const ɵ$index_13_r6 = ɵɵnextContext().$index;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.handleInput($event, ɵ$index_16_r5, ɵ$index_13_r6));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵclassProp("k-invalid", ctx_r2.isControlInvalid);
    ɵɵproperty("selectOnFocus", true)("maxlength", 1)("type", ctx_r2.type !== "number" ? ctx_r2.type : null)("placeholder", ctx_r2.placeholder)("size", ctx_r2.size)("rounded", ctx_r2.rounded)("fillMode", ctx_r2.fillMode)("disabled", ctx_r2.disabled)("readonly", ctx_r2.readonly);
  }
}
function OTPInputComponent_Conditional_4_For_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-otpinput-separator", 5);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵproperty("separator", ctx_r2.separator);
  }
}
function OTPInputComponent_Conditional_4_For_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 6, 0);
    ɵɵrepeaterCreate(2, OTPInputComponent_Conditional_4_For_1_For_3_Template, 1, 11, "kendo-textbox", 7, ɵɵrepeaterTrackByIdentity);
    ɵɵelementEnd();
    ɵɵtemplate(4, OTPInputComponent_Conditional_4_For_1_Conditional_4_Template, 1, 1, "kendo-otpinput-separator", 5);
  }
  if (rf & 2) {
    const group_r7 = ctx.$implicit;
    const ɵ$index_13_r6 = ctx.$index;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵrepeater(ɵɵpureFunction0(1, _c70).constructor(group_r7));
    ɵɵadvance(2);
    ɵɵconditional(ctx_r2.showGroupSeparator(ɵ$index_13_r6) ? 4 : -1);
  }
}
function OTPInputComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵrepeaterCreate(0, OTPInputComponent_Conditional_4_For_1_Template, 5, 2, null, null, ɵɵrepeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵrepeater(ctx_r2.adjacentGroups);
  }
}
var _c71 = ["kendoForm", ""];
var _c72 = (a0) => [a0];
var _c73 = (a0) => ({
  gap: a0
});
function FormComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 2);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("licenseMessage", ctx_r0.licenseMessage);
  }
}
var _c74 = ["kendoFormFieldSet", ""];
var _c75 = (a0) => ({
  "gap": a0
});
function FormFieldSetComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "legend", 0);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.legend, " ");
  }
}
var isPresent2 = (value) => value !== null && value !== void 0;
var areSame = (value1, value2) => value1 === value2 || value1 === null && value2 === void 0 || value1 === void 0 && value2 === null;
var requiresZoneOnBlur = (ngControl) => ngControl && (!ngControl.touched || ngControl.control && ngControl.control.updateOn === "blur");
var fitIntoBounds = (contender, min, max) => {
  if (!isPresent2(contender) || isNaN(contender)) {
    return min;
  }
  return contender <= min ? min : contender >= max ? max : contender;
};
var SIZE_MAP = {
  small: "sm",
  medium: "md",
  large: "lg"
};
var ROUNDED_MAP = {
  small: "sm",
  medium: "md",
  large: "lg",
  full: "full"
};
var isNone = (style) => style === "none";
var getStylingClasses = (componentType, stylingOption, previousValue, newValue) => {
  switch (stylingOption) {
    case "size":
      return {
        toRemove: `k-${componentType}-${SIZE_MAP[previousValue]}`,
        toAdd: newValue !== "none" ? `k-${componentType}-${SIZE_MAP[newValue]}` : ""
      };
    case "rounded":
      return {
        toRemove: `k-rounded-${ROUNDED_MAP[previousValue]}`,
        toAdd: newValue !== "none" ? `k-rounded-${ROUNDED_MAP[newValue]}` : ""
      };
    case "fillMode":
      return {
        toRemove: `k-${componentType}-${previousValue}`,
        toAdd: newValue !== "none" ? `k-${componentType}-${newValue}` : ""
      };
    default:
      break;
  }
};
var COMPONENT_TYPE = new InjectionToken("TYPE_TOKEN");
var MAX_PRECISION = 20;
var limitPrecision = (precision) => Math.min(precision, MAX_PRECISION);
var fractionLength = (value) => {
  return (String(value).split(".")[1] || "").length;
};
var maxFractionLength = (value1, value2) => {
  return Math.max(fractionLength(value1), fractionLength(value2));
};
var toFixedPrecision = (value, precision) => {
  const maxPrecision = limitPrecision(precision);
  return parseFloat(value.toFixed(maxPrecision));
};
var add = (value1, value2) => {
  const maxPrecision = maxFractionLength(value1, value2);
  return toFixedPrecision(value1 + value2, maxPrecision);
};
var subtract = (value1, value2) => {
  return add(value1, -value2);
};
var multiply = (value1, value2) => {
  const maxPrecision = fractionLength(value1) + fractionLength(value2);
  return toFixedPrecision(value1 * value2, maxPrecision);
};
var divide = (dividend, divisor) => {
  if (divisor === 0) {
    return NaN;
  }
  const power = maxFractionLength(dividend, divisor);
  const correctionValue = Math.pow(10, power);
  return correctionValue * dividend / (correctionValue * divisor);
};
var remainder = (dividend, divisor) => {
  return Math.abs(subtract(dividend, multiply(divisor, Math.floor(divide(dividend, divisor)))));
};
var calculateFixedTrackSize = ({
  max,
  min,
  smallStep,
  fixedTickWidth
}) => (max - min) / smallStep * fixedTickWidth;
var calculateTicksCount = (min = 0, max = 0, smallStep = 1) => {
  if (smallStep <= 0) {
    throw new Error("Invalid argument: smallStep must be a positive number");
  }
  const adjustedRange = Math.abs(subtract(max, min));
  const adjustedRatio = Math.floor(divide(adjustedRange, smallStep));
  const result = add(adjustedRatio, 1);
  return result;
};
var calculateValueFromTick = (index, {
  max,
  min,
  smallStep,
  reverse,
  vertical
}) => {
  const value = add(min, multiply(index, smallStep));
  return vertical || reverse ? Math.abs(subtract(value, max)) : value;
};
var calculateHandlePosition = ({
  trackWidth,
  min,
  max,
  value
}) => {
  const step = trackWidth / Math.abs(max - min);
  const pos = isPresent2(value) ? step * (value - min) : min;
  return Math.floor(pos);
};
var decreaseValueToStep = (value, {
  max,
  min,
  smallStep,
  largeStep
}, large = false) => {
  const step = large && largeStep ? multiply(smallStep, largeStep) : smallStep;
  const stepValue = subtract(value, min);
  let result;
  const stepRemainder = remainder(stepValue, step);
  if (stepRemainder === 0) {
    result = subtract(stepValue, step);
  } else {
    result = subtract(stepValue, stepRemainder);
  }
  return limitValue2(add(result, min), min, max);
};
var increaseValueToStep = (value, {
  max,
  min,
  smallStep,
  largeStep
}, large = false) => {
  const step = large && largeStep ? multiply(smallStep, largeStep) : smallStep;
  const stepValue = subtract(value, min);
  const stepRemainder = remainder(stepValue, step);
  const result = add(subtract(stepValue, stepRemainder), step);
  return limitValue2(add(result, min), min, max);
};
var isStartHandle = (dragHandle) => dragHandle.id.indexOf("k-start-handle") > -1;
var snapValue = (value, options) => {
  const {
    smallStep,
    min,
    max
  } = options;
  const limited = limitValue2(value, min, max);
  if (value !== limited) {
    return limited;
  }
  const left = decreaseValueToStep(value, options);
  const right = increaseValueToStep(value, options);
  if ((value - min) % smallStep === 0) {
    return value;
  }
  if (right - value <= (right - left) / 2) {
    return right;
  }
  return left;
};
var trimValue = (max, min, value) => {
  if (value > max) {
    return max;
  }
  if (value < min) {
    return min;
  }
  return value;
};
var trimValueRange = (max, min, value) => {
  return value ? [trimValue(max, min, value[0]), trimValue(max, min, value[1])] : [min, min];
};
var identity = (value) => value;
var isSameRange = (value1, value2) => areSame(value1[0], value2[0]) && areSame(value1[1], value2[1]);
var elementOffset2 = (element) => {
  const box = element.getBoundingClientRect();
  const documentElement = document.documentElement;
  return {
    left: box.left + (window.pageXOffset || documentElement.scrollLeft) - (documentElement.clientLeft || 0),
    top: box.top + (window.pageYOffset || documentElement.scrollTop) - (documentElement.clientTop || 0)
  };
};
var limitValue2 = (value, min, max) => {
  return Math.max(Math.min(value, max), min);
};
var eventValue = (eventArgs, scaleElement, options) => {
  const {
    min,
    max,
    vertical,
    rtl
  } = options;
  const trackOffset = elementOffset2(scaleElement);
  const offset = vertical ? eventArgs.pageY - trackOffset.top : eventArgs.pageX - trackOffset.left;
  const scale = (max - min) / (vertical ? scaleElement.clientHeight : scaleElement.clientWidth);
  const offsetValue = offset * scale;
  let value = rtl || vertical ? max - offsetValue : min + offsetValue;
  const stepFractionLength = fractionLength(options.smallStep);
  value = toFixedPrecision(value, stepFractionLength + 1);
  return snapValue(value, options);
};
var increment = (options) => {
  return increaseValueToStep(options.value, options);
};
var decrement = (options) => {
  return decreaseValueToStep(options.value, options);
};
var incrementLarge = (options) => {
  return increaseValueToStep(options.value, options, true);
};
var decrementLarge = (options) => {
  return decreaseValueToStep(options.value, options, true);
};
var validateValue = (value) => {
  if (isDevMode && value && value[0] > value[1]) {
    throw new Error("[RangeSlider] The start value should not be greater than the end value.");
  }
};
var SliderModelBase = class {
  props;
  wrapper;
  track;
  renderer;
  button;
  tickSizes;
  constructor(props, wrapper, track, renderer, button) {
    this.props = props;
    this.wrapper = wrapper;
    this.track = track;
    this.renderer = renderer;
    this.button = button;
    this.props = props;
    this.wrapper = wrapper;
    this.track = track;
    this.tickSizes = this.getTickSizes();
  }
  resizeTrack() {
    const orientation = this.props.vertical ? "height" : "width";
    const altOrientation = this.props.vertical ? "width" : "height";
    const trackWidth = this.trackWidth();
    this.track.parentElement.style[orientation] = `${trackWidth}px`;
    this.track.parentElement.style[altOrientation] = "";
  }
  resizeTicks(ticksContainer, ticks) {
    const dimension = this.props.vertical ? "height" : "width";
    [...ticks].forEach((tick, index) => tick.style[dimension] = `${this.tickSizes[index]}px`);
    if (this.props.vertical) {
      this.adjustPadding(ticksContainer);
    }
  }
  resizeWrapper() {
    const dimension = this.props.vertical ? "height" : "width";
    const fixedTrackWidth = calculateFixedTrackSize(this.props);
    const wrapperParentEl = this.wrapper.parentElement;
    if (fixedTrackWidth) {
      wrapperParentEl.style[dimension] = "auto";
    }
  }
  trackWidth() {
    if (this.props.fixedTickWidth) {
      return calculateFixedTrackSize(this.props);
    }
    const wrapperWidth = this.elementSize(this.wrapper.parentElement);
    const trackOffset = this.getTrackOffset();
    return wrapperWidth - trackOffset;
  }
  getTickSizes() {
    const {
      min,
      max,
      smallStep
    } = this.props;
    const count = calculateTicksCount(min, max, smallStep);
    const trackSize = this.trackWidth();
    const distStep = trackSize / subtract(max, min);
    const result = [];
    let usedSpace = 0;
    let endPoint = 0;
    for (let i = 0; i < count; i++) {
      if (i === 0 || i === count - 1) {
        endPoint += smallStep / 2 * distStep;
      } else {
        endPoint += smallStep * distStep;
      }
      endPoint = +endPoint.toFixed(2) - 0.01;
      const size = Math.round(endPoint - usedSpace);
      result.push(size);
      usedSpace += size;
    }
    if (usedSpace >= trackSize) {
      result[result.length - 1] -= 1;
    }
    return result;
  }
  adjustPadding(ticksContainer) {
    const totalTickSize = this.tickSizes.reduce((prev, curr) => prev + curr, 0);
    const trackWidth = this.trackWidth();
    const reminder = trackWidth - totalTickSize;
    if (reminder !== 0) {
      const padding = reminder + this.elementOffset(this.track);
      ticksContainer.style.paddingTop = `${padding}px`;
    }
  }
  elementOffset(element) {
    if (!isDocumentAvailable()) {
      return 0;
    }
    const {
      vertical
    } = this.props;
    const style = getComputedStyle(element);
    return parseInt(vertical ? style.bottom : style.left, 10);
  }
  elementSize(element) {
    const {
      vertical
    } = this.props;
    return vertical ? element.clientHeight : element.clientWidth;
  }
  getTrackOffset() {
    const showButtons = this.props.buttons && isPresent2(this.button);
    if (!showButtons) {
      return 0;
    }
    const BUTTONS_COUNT = 2;
    const buttonStyles = this.button.nativeElement.getBoundingClientRect();
    const wrapperGap = isDocumentAvailable() ? parseInt(window.getComputedStyle(this.wrapper.parentElement).gap) : 0;
    const buttonSize = this.props.vertical ? buttonStyles?.height : buttonStyles?.width;
    return (buttonSize + wrapperGap) * BUTTONS_COUNT;
  }
};
var SliderModel = class extends SliderModelBase {
  handlePosition;
  positionHandle(dragHandle) {
    const {
      max,
      min,
      reverse,
      vertical
    } = this.props;
    const position = vertical ? "bottom" : reverse ? "right" : "left";
    const trackWidth = this.trackWidth();
    const value = trimValue(max, min, this.props.value);
    this.handlePosition = calculateHandlePosition({
      min,
      max,
      reverse,
      value,
      trackWidth
    });
    this.renderer.setStyle(dragHandle, position, `${this.handlePosition}px`);
  }
  positionSelection(selection) {
    const {
      vertical
    } = this.props;
    const dimension = vertical ? "height" : "width";
    const size = this.handlePosition;
    this.renderer.setStyle(selection, dimension, `${size}px`);
  }
};
var UNTOUCHED = "ng-untouched";
var toClassList = (classNames) => String(classNames).trim().split(" ");
var hasClass = (element, className) => Boolean(toClassList(element.className).find((name) => name === className));
function invokeElementMethod(element, name, ...args) {
  if (element && element.nativeElement) {
    return element.nativeElement[name].apply(element.nativeElement, args);
  }
}
var isUntouched = (element) => element && element.nativeElement && hasClass(element.nativeElement, UNTOUCHED);
var containsFocus = (hostElement, contender) => hostElement && contender && (hostElement === contender || hostElement.contains(contender));
var closest2 = (node, predicate) => {
  while (node && !predicate(node)) {
    node = node.parentNode;
  }
  return node;
};
var packageMetadata = {
  name: "@progress/kendo-angular-inputs",
  productName: "Kendo UI for Angular",
  productCode: "KENDOUIANGULAR",
  productCodes: ["KENDOUIANGULAR"],
  publishDate: 1768393111,
  version: "21.4.1",
  licensingDocsUrl: "https://www.telerik.com/kendo-angular-ui/my-license/"
};
var LabelTemplateDirective = class _LabelTemplateDirective {
  templateRef;
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static ɵfac = function LabelTemplateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LabelTemplateDirective)(ɵɵdirectiveInject(TemplateRef, 8));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _LabelTemplateDirective,
    selectors: [["", "kendoSliderLabelTemplate", ""]],
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LabelTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoSliderLabelTemplate]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
var SliderBase = class _SliderBase {
  localizationService;
  injector;
  renderer;
  ngZone;
  changeDetector;
  hostElement;
  /**
   * Sets the title for the ticks.
   * The default title for each tick is its Slider value.
   * If you use a callback function, the function receives the component value and returns a string for the new title [see example]({% slug ticks_slider %}#toc-titles).
   */
  title = identity;
  /**
   * Sets the location of the tick marks in the Slider [see example]({% slug ticks_slider %}#toc-placement).
   *
   * The options are:
   * - `before` – Shows tick marks above a horizontal track or left of a vertical track.
   * - `after` – Shows tick marks below a horizontal track or right of a vertical track.
   * - `both` – Shows tick marks on both sides of the track.
   * - `none` – Hides tick marks and removes them from the DOM.
   *
   * @default 'both'
   */
  tickPlacement = "both";
  /**
   * When `true`. renders a vertical Slider [see example]({% slug orientation_slider %}).
   *
   * @default false
   */
  vertical = false;
  /**
   * Sets the minimum value of the Slider.
   * Accepts integers and floating-point numbers [see example]({% slug predefinedsteps_slider %}#toc-small-steps).
   *
   * @default 0
   */
  min = 0;
  /**
   * Sets the maximum value of the Slider.
   * Accepts integers and floating-point numbers [see example]({% slug predefinedsteps_slider %}#toc-small-steps).
   *
   * @default 10
   */
  max = 10;
  /**
   * Sets the step value of the Slider.
   * Accepts only positive values.
   * Can be an integer or a floating-point number [see example]({% slug predefinedsteps_slider %}#toc-small-steps).
   *
   * @default 1
   */
  smallStep = 1;
  /**
   * Sets every n<sup>th</sup> tick as large and shows a label for it [see example]({% slug predefinedsteps_slider %}#toc-large-steps).
   *
   * @default null
   */
  largeStep = null;
  /**
   * Sets the width between two ticks along the track, in pixels.
   * If you do not set `fixedTickWidth`, the Slider adjusts the tick width automatically [see example]({% slug ticks_slider %}#toc-width).
   *
   */
  fixedTickWidth;
  /**
   * When `true`, disables the Slider.
   * To disable the component in reactive forms, see [Forms Support](slug:formssupport_slider#toc-managing-the-slider-disabled-state-in-reactive-forms) [see example]({% slug disabledstate_slider %}).
   *
   * @default false
   */
  disabled = false;
  /**
   * When `true`, sets the Slider to read-only [see example]({% slug readonly_slider %}).
   *
   * @default false
   */
  readonly = false;
  /**
   * Sets the [`tabindex`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) of the Slider.
   *
   * @default 0
   */
  tabindex = 0;
  /**
   * Fires when the user focuses the component.
   *
   */
  onFocus = new EventEmitter();
  /**
   * Fires when the component is blurred.
   *
   */
  onBlur = new EventEmitter();
  /**
   * Fires when the user selects a new value.
   *
   */
  valueChange = new EventEmitter();
  direction;
  get horizontalClass() {
    return !this.vertical;
  }
  get verticalClass() {
    return this.vertical;
  }
  sliderClass = true;
  get disabledClass() {
    return this.disabled;
  }
  wrapper;
  track;
  sliderSelection;
  ticksContainer;
  ticks;
  labelTemplate;
  subscriptions = new Subscription();
  isFocused;
  isDragged;
  control;
  constructor(localizationService, injector, renderer, ngZone, changeDetector, hostElement) {
    this.localizationService = localizationService;
    this.injector = injector;
    this.renderer = renderer;
    this.ngZone = ngZone;
    this.changeDetector = changeDetector;
    this.hostElement = hostElement;
    A(packageMetadata);
    this.direction = localizationService.rtl ? "rtl" : "ltr";
  }
  /**
   * @hidden
   * Called when the status of the component changes to or from `disabled`.
   * Depending on the value, it enables or disables the appropriate DOM element.
   *
   * @param isDisabled
   */
  setDisabledState(isDisabled) {
    this.changeDetector.markForCheck();
    this.disabled = isDisabled;
  }
  ngOnInit() {
    this.subscriptions.add(this.localizationService.changes.subscribe(({
      rtl
    }) => {
      this.direction = rtl ? "rtl" : "ltr";
      this.sizeComponent();
    }));
    if (this.hostElement) {
      this.renderer.removeAttribute(this.hostElement.nativeElement, "tabindex");
    }
    this.control = this.injector.get(NgControl, null);
  }
  /**
   * @hidden
   */
  get isDisabled() {
    return this.disabled || this.readonly;
  }
  /**
   * @hidden
   */
  ifEnabled = (callback, event) => {
    if (!this.isDisabled) {
      callback.call(this, event);
    }
  };
  /**
   * @hidden
   * Used by the FloatingLabel to determine if the component is empty.
   */
  isEmpty() {
    return false;
  }
  get reverse() {
    return this.localizationService.rtl && !this.vertical;
  }
  get keyBinding() {
    const reverse = this.reverse;
    return {
      [Keys.ArrowLeft]: reverse ? increment : decrement,
      [Keys.ArrowRight]: reverse ? decrement : increment,
      [Keys.ArrowDown]: decrement,
      [Keys.ArrowUp]: increment,
      [Keys.PageUp]: incrementLarge,
      [Keys.PageDown]: decrementLarge,
      [Keys.Home]: ({
        min
      }) => min,
      [Keys.End]: ({
        max
      }) => max
    };
  }
  resetStyles(elements) {
    elements.forEach((el) => {
      if (el) {
        if (this.vertical) {
          this.renderer.removeStyle(el, "width");
          this.renderer.removeStyle(el, "left");
          this.renderer.removeStyle(el, "right");
        } else {
          this.renderer.removeStyle(el, "height");
          this.renderer.removeStyle(el, "bottom");
        }
        this.renderer.removeStyle(el, "padding-top");
      }
    });
  }
  static ɵfac = function SliderBase_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SliderBase)(ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _SliderBase,
    selectors: [["kendo-slider-base"]],
    contentQueries: function SliderBase_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, LabelTemplateDirective, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.labelTemplate = _t.first);
      }
    },
    viewQuery: function SliderBase_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 7);
        ɵɵviewQuery(_c1, 7);
        ɵɵviewQuery(_c2, 7);
        ɵɵviewQuery(_c3, 5, ElementRef);
        ɵɵviewQuery(_c3, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.wrapper = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.track = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.sliderSelection = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.ticksContainer = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.ticks = _t.first);
      }
    },
    hostVars: 11,
    hostBindings: function SliderBase_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("dir", ctx.direction);
        ɵɵclassProp("k-readonly", ctx.readonly)("k-slider-horizontal", ctx.horizontalClass)("k-slider-vertical", ctx.verticalClass)("k-slider", ctx.sliderClass)("k-disabled", ctx.disabledClass);
      }
    },
    inputs: {
      title: "title",
      tickPlacement: "tickPlacement",
      vertical: "vertical",
      min: "min",
      max: "max",
      smallStep: "smallStep",
      largeStep: "largeStep",
      fixedTickWidth: "fixedTickWidth",
      disabled: "disabled",
      readonly: "readonly",
      tabindex: "tabindex"
    },
    outputs: {
      onFocus: "focus",
      onBlur: "blur",
      valueChange: "valueChange"
    },
    decls: 0,
    vars: 0,
    template: function SliderBase_Template(rf, ctx) {
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SliderBase, [{
    type: Component,
    args: [{
      selector: "kendo-slider-base",
      template: ``
    }]
  }], () => [{
    type: LocalizationService
  }, {
    type: Injector
  }, {
    type: Renderer2
  }, {
    type: NgZone
  }, {
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }], {
    title: [{
      type: Input
    }],
    tickPlacement: [{
      type: Input
    }],
    vertical: [{
      type: Input
    }],
    min: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    smallStep: [{
      type: Input
    }],
    largeStep: [{
      type: Input
    }],
    fixedTickWidth: [{
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
    tabindex: [{
      type: Input
    }],
    onFocus: [{
      type: Output,
      args: ["focus"]
    }],
    onBlur: [{
      type: Output,
      args: ["blur"]
    }],
    valueChange: [{
      type: Output
    }],
    direction: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    horizontalClass: [{
      type: HostBinding,
      args: ["class.k-slider-horizontal"]
    }],
    verticalClass: [{
      type: HostBinding,
      args: ["class.k-slider-vertical"]
    }],
    sliderClass: [{
      type: HostBinding,
      args: ["class.k-slider"]
    }],
    disabledClass: [{
      type: HostBinding,
      args: ["class.k-disabled"]
    }],
    wrapper: [{
      type: ViewChild,
      args: ["wrap", {
        static: true
      }]
    }],
    track: [{
      type: ViewChild,
      args: ["track", {
        static: true
      }]
    }],
    sliderSelection: [{
      type: ViewChild,
      args: ["sliderSelection", {
        static: true
      }]
    }],
    ticksContainer: [{
      type: ViewChild,
      args: ["ticks", {
        read: ElementRef,
        static: false
      }]
    }],
    ticks: [{
      type: ViewChild,
      args: ["ticks", {
        static: false
      }]
    }],
    labelTemplate: [{
      type: ContentChild,
      args: [LabelTemplateDirective, {
        static: false
      }]
    }]
  });
})();
var SliderTick = class {
  value;
  classes = {
    "k-tick": true
  };
  large;
  constructor(value) {
    this.value = value;
  }
};
var SliderTicksComponent = class _SliderTicksComponent {
  wrapperClasses = "k-reset k-slider-items";
  tickTitle;
  vertical;
  step;
  largeStep;
  min;
  max;
  labelTemplate;
  tickElements;
  ticks = [];
  ngOnChanges(_) {
    this.createTicks();
  }
  createTicks() {
    const count = calculateTicksCount(this.min, this.max, this.step);
    const largeStep = this.largeStep;
    const tickValueProps = {
      max: this.max,
      min: this.min,
      smallStep: this.step
    };
    const result = [];
    for (let i = 0; i < count; i++) {
      result.push(new SliderTick(calculateValueFromTick(i, tickValueProps)));
      if (largeStep && i % largeStep === 0) {
        result[i].large = true;
        result[i].classes["k-tick-large"] = true;
      }
    }
    if (result.length > 0) {
      Object.assign(result[0].classes, this.endTickClasses(true));
      Object.assign(result[result.length - 1].classes, this.endTickClasses(false));
    }
    this.ticks = result;
  }
  endTickClasses(first) {
    return {
      "k-first": first && !this.vertical || !first && this.vertical,
      "k-last": !first && !this.vertical || first && this.vertical
    };
  }
  static ɵfac = function SliderTicksComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SliderTicksComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _SliderTicksComponent,
    selectors: [["", "kendoSliderTicks", ""]],
    viewQuery: function SliderTicksComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c4, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tickElements = _t);
      }
    },
    hostVars: 2,
    hostBindings: function SliderTicksComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassMap(ctx.wrapperClasses);
      }
    },
    inputs: {
      tickTitle: "tickTitle",
      vertical: "vertical",
      step: "step",
      largeStep: "largeStep",
      min: "min",
      max: "max",
      labelTemplate: "labelTemplate"
    },
    standalone: true,
    features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    attrs: _c5,
    decls: 4,
    vars: 0,
    consts: [["defaultLabel", ""], ["tickElement", ""], ["role", "presentation", 3, "ngClass", "title"], [1, "k-label"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function SliderTicksComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵrepeaterCreate(0, SliderTicksComponent_For_1_Template, 4, 3, "li", 2, ɵɵrepeaterTrackByIdentity);
        ɵɵtemplate(2, SliderTicksComponent_ng_template_2_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
      }
      if (rf & 2) {
        ɵɵrepeater(ctx.ticks);
      }
    },
    dependencies: [NgClass, NgTemplateOutlet],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SliderTicksComponent, [{
    type: Component,
    args: [{
      selector: "[kendoSliderTicks]",
      template: `
    @for (tick of ticks; track tick) {
      <li #tickElement
        [ngClass]="tick.classes"
        title="{{ tickTitle(tick.value) }}"
        role="presentation"
        >
        @switch (tick.large) {
          @case (true) {
            <span class="k-label">
              <ng-container [ngTemplateOutlet]="labelTemplate || defaultLabel" [ngTemplateOutletContext]="tick">
              </ng-container>
            </span>
          }
          @case (false) {
            &nbsp;
          }
        }
      </li>
    }
    
    <ng-template #defaultLabel let-value="value">
      {{ tickTitle(value) }}
    </ng-template>
    `,
      standalone: true,
      imports: [NgClass, NgTemplateOutlet]
    }]
  }], null, {
    wrapperClasses: [{
      type: HostBinding,
      args: ["class"]
    }],
    tickTitle: [{
      type: Input
    }],
    vertical: [{
      type: Input
    }],
    step: [{
      type: Input
    }],
    largeStep: [{
      type: Input
    }],
    min: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    labelTemplate: [{
      type: Input
    }],
    tickElements: [{
      type: ViewChildren,
      args: ["tickElement"]
    }]
  });
})();
var SliderMessages = class _SliderMessages extends ComponentMessages {
  /**
   * The title of the **Decrease** button of the Slider.
   */
  decrement;
  /**
   * The title of the **Increase** button of the Slider.
   */
  increment;
  /**
   * The title of the drag handle of the Slider.
   */
  dragHandle;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵSliderMessages_BaseFactory;
    return function SliderMessages_Factory(__ngFactoryType__) {
      return (ɵSliderMessages_BaseFactory || (ɵSliderMessages_BaseFactory = ɵɵgetInheritedFactory(_SliderMessages)))(__ngFactoryType__ || _SliderMessages);
    };
  })();
  static ɵdir = ɵɵdefineDirective({
    type: _SliderMessages,
    selectors: [["kendo-slider-messages-base"]],
    inputs: {
      decrement: "decrement",
      increment: "increment",
      dragHandle: "dragHandle"
    },
    features: [ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SliderMessages, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "kendo-slider-messages-base"
    }]
  }], null, {
    decrement: [{
      type: Input
    }],
    increment: [{
      type: Input
    }],
    dragHandle: [{
      type: Input
    }]
  });
})();
var LocalizedSliderMessagesDirective = class _LocalizedSliderMessagesDirective extends SliderMessages {
  service;
  constructor(service) {
    super();
    this.service = service;
  }
  static ɵfac = function LocalizedSliderMessagesDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LocalizedSliderMessagesDirective)(ɵɵdirectiveInject(LocalizationService));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _LocalizedSliderMessagesDirective,
    selectors: [["", "kendoSliderLocalizedMessages", ""]],
    standalone: true,
    features: [ɵɵProvidersFeature([{
      provide: SliderMessages,
      useExisting: forwardRef(() => _LocalizedSliderMessagesDirective)
    }]), ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LocalizedSliderMessagesDirective, [{
    type: Directive,
    args: [{
      providers: [{
        provide: SliderMessages,
        useExisting: forwardRef(() => LocalizedSliderMessagesDirective)
      }],
      selector: "[kendoSliderLocalizedMessages]",
      standalone: true
    }]
  }], () => [{
    type: LocalizationService
  }], null);
})();
var PRESSED$1 = "k-pressed";
var SliderComponent = class _SliderComponent extends SliderBase {
  localization;
  injector;
  renderer;
  ngZone;
  changeDetector;
  hostElement;
  /**
   * @hidden
   */
  focusableId = `k-${guid()}`;
  /**
   * Changes the `title` attribute of the drag handle. Use this property to localize the drag handle title.
   */
  dragHandleTitle;
  /**
   * Sets the title of the **Increase** button of the Slider ([see example]({% slug sidebuttons_slider %}#toc-titles)).
   */
  incrementTitle;
  /**
   * Determines if the component animates when the value changes.
   * The component does not animate during initial rendering.
   * @default true
   */
  animate = true;
  /**
   * Sets the title of the **Decrease** button of the Slider ([see example]({% slug sidebuttons_slider %}#toc-titles)).
   */
  decrementTitle;
  /**
   * Shows or hides the arrow side buttons of the Slider ([see example]({% slug sidebuttons_slider %}#toc-hidden-state)).
   * When you set `showButtons` to `false`, the component does not display the buttons.
   * @default true
   */
  showButtons = true;
  /**
   * Sets the current value of the Slider when it first appears.
   * Use either `ngModel` or the `value` binding, but not both at the same time.
   * @default 0
   */
  value = this.min;
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
  get currentValue() {
    return isPresent2(this.value) ? this.value.toString() : "";
  }
  /**
   * @hidden
   */
  arrowUpIcon = caretAltUpIcon;
  /**
   * @hidden
   */
  arrowDownIcon = caretAltDownIcon;
  /**
   * @hidden
   */
  arrowLeftIcon = caretAltLeftIcon;
  /**
   * @hidden
   */
  arrowRightIcon = caretAltRightIcon;
  draghandle;
  decreaseButton;
  increaseButton;
  focusChangedProgrammatically = false;
  isInvalid;
  constructor(localization, injector, renderer, ngZone, changeDetector, hostElement) {
    super(localization, injector, renderer, ngZone, changeDetector, hostElement);
    this.localization = localization;
    this.injector = injector;
    this.renderer = renderer;
    this.ngZone = ngZone;
    this.changeDetector = changeDetector;
    this.hostElement = hostElement;
  }
  /**
   * Focuses the Slider.
   */
  focus() {
    if (!this.disabled) {
      this.focusChangedProgrammatically = true;
      invokeElementMethod(this.draghandle, "focus");
      this.focusChangedProgrammatically = false;
    }
  }
  /**
   * Blurs the Slider.
   */
  blur() {
    this.focusChangedProgrammatically = true;
    invokeElementMethod(this.draghandle, "blur");
    this.handleBlur();
    this.focusChangedProgrammatically = false;
  }
  ngOnChanges(changes) {
    if (anyChanged(["value", "fixedTickWidth", "tickPlacement"], changes, true)) {
      this.ngZone.onStable.asObservable().pipe(take(1)).subscribe(() => {
        this.sizeComponent(false);
      });
    }
  }
  ngAfterViewInit() {
    if (!isDocumentAvailable()) {
      return;
    }
    if (this.showButtons) {
      this.setValueChangeInterval(this.increaseButton.nativeElement, () => this.increaseValue());
      this.setValueChangeInterval(this.decreaseButton.nativeElement, () => this.decreaseValue());
    }
    this.sizeComponent(false);
    if (this.ticks) {
      this.ticks.tickElements.changes.subscribe(() => this.sizeComponent(false));
    }
    this.attachElementEventHandlers();
    this.isSliderInvalid();
  }
  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }
  /**
   * @hidden
   */
  get incrementMessage() {
    return this.incrementTitle || this.localizationService.get("increment");
  }
  /**
   * @hidden
   */
  get decrementMessage() {
    return this.decrementTitle || this.localizationService.get("decrement");
  }
  /**
   * @hidden
   */
  get dragHandleMessage() {
    return this.dragHandleTitle || this.localizationService.get("dragHandle");
  }
  /**
   * @hidden
   */
  onWrapClick = (args) => {
    const target = args.target;
    if (!this.isDisabled && !target.closest(".k-button")) {
      const value = eventValue(args, this.track.nativeElement, this.getProps());
      this.changeValue(value);
    }
    invokeElementMethod(this.draghandle, "focus");
  };
  /**
   * @hidden
   */
  handleDragPress(args) {
    if (args.originalEvent) {
      args.originalEvent.preventDefault();
    }
    this.renderer.removeClass(this.hostElement.nativeElement, "k-slider-transitions");
  }
  /**
   * @hidden
   */
  onHandleDrag(args) {
    this.dragging = true;
    this.changeValue(eventValue(args, this.track.nativeElement, this.getProps()));
  }
  /**
   * @hidden
   */
  onKeyDown = (e) => {
    const options = this.getProps();
    const {
      max,
      min
    } = options;
    const code = normalizeKeys(e);
    const handler = this.keyBinding[code];
    if (this.isDisabled || !handler) {
      return;
    }
    const value = handler(options);
    this.changeValue(trimValue(max, min, value));
    e.preventDefault();
  };
  /**
   * @hidden
   */
  onHandleRelease() {
    this.dragging = false;
    this.renderer.addClass(this.hostElement.nativeElement, "k-slider-transitions");
  }
  //ngModel binding
  /**
   * @hidden
   */
  writeValue(value) {
    this.changeDetector.markForCheck();
    this.value = value;
    this.sizeComponent(this.animate);
  }
  /**
   * @hidden
   */
  registerOnChange(fn) {
    this.ngChange = fn;
  }
  /**
   * @hidden
   */
  registerOnTouched(fn) {
    this.ngTouched = fn;
  }
  /**
   * @hidden
   */
  changeValue(value) {
    if (!areSame(this.value, value)) {
      this.ngZone.run(() => {
        this.value = value;
        this.ngChange(value);
        this.valueChange.emit(value);
        this.sizeComponent(this.animate);
        this.changeDetector.markForCheck();
      });
    }
    this.isSliderInvalid();
  }
  /**
   * @hidden
   */
  sizeComponent(animate) {
    if (!isDocumentAvailable()) {
      return;
    }
    const wrapper = this.wrapper.nativeElement;
    const track = this.track.nativeElement;
    const selectionEl = this.sliderSelection.nativeElement;
    const dragHandleEl = this.draghandle.nativeElement;
    const ticks = this.ticks ? this.ticksContainer.nativeElement : null;
    if (!animate) {
      this.renderer.removeClass(this.hostElement.nativeElement, "k-slider-transitions");
    }
    this.resetStyles([track, selectionEl, dragHandleEl, ticks, this.hostElement.nativeElement]);
    const props = this.getProps();
    const model = new SliderModel(props, wrapper, track, this.renderer, this.increaseButton);
    model.resizeTrack();
    if (this.ticks) {
      model.resizeTicks(this.ticksContainer.nativeElement, this.ticks.tickElements.map((element) => element.nativeElement));
    }
    model.positionHandle(dragHandleEl);
    model.positionSelection(selectionEl);
    if (!animate) {
      this.hostElement.nativeElement.getBoundingClientRect();
      this.renderer.addClass(this.hostElement.nativeElement, "k-slider-transitions");
    }
    if (this.fixedTickWidth) {
      model.resizeWrapper();
    }
  }
  set focused(value) {
    if (this.isFocused !== value && this.hostElement) {
      this.isFocused = value;
    }
  }
  set dragging(value) {
    if (this.isDragged !== value && this.sliderSelection && this.draghandle) {
      const sliderSelection = this.sliderSelection.nativeElement;
      const draghandle = this.draghandle.nativeElement;
      if (value) {
        this.renderer.addClass(sliderSelection, PRESSED$1);
        this.renderer.addClass(draghandle, PRESSED$1);
      } else {
        this.renderer.removeClass(sliderSelection, PRESSED$1);
        this.renderer.removeClass(draghandle, PRESSED$1);
      }
      this.isDragged = value;
    }
  }
  setValueChangeInterval(element, callback) {
    this.ngZone.runOutsideAngular(() => {
      const pointerdown = fromEvent(element, "pointerdown");
      const pointerup = fromEvent(element, "pointerup");
      const pointerout = fromEvent(element, "pointerout");
      const subscription = pointerdown.pipe(tap((e) => e.preventDefault()), filter((e) => e.button === 0 && !this.isDisabled), concatMap(() => interval(150).pipe(startWith(-1), takeUntil(merge(pointerup, pointerout))))).subscribe(() => {
        if (!this.isFocused) {
          invokeElementMethod(this.draghandle, "focus");
        }
        callback();
      });
      this.subscriptions.add(subscription);
    });
  }
  ngChange = (_) => {
  };
  ngTouched = () => {
  };
  decreaseValue = () => {
    this.changeValue(decreaseValueToStep(this.value, this.getProps()));
  };
  increaseValue = () => {
    this.changeValue(increaseValueToStep(this.value, this.getProps()));
  };
  getProps() {
    return {
      buttons: this.showButtons,
      disabled: this.disabled,
      fixedTickWidth: this.fixedTickWidth,
      largeStep: this.largeStep,
      max: this.max,
      min: this.min,
      readonly: this.readonly,
      reverse: this.reverse,
      rtl: this.localizationService.rtl,
      smallStep: this.smallStep,
      value: trimValue(this.max, this.min, this.value),
      vertical: this.vertical
    };
  }
  isSliderInvalid() {
    const sliderClasses = this.hostElement.nativeElement.classList;
    this.isInvalid = sliderClasses.contains("ng-invalid") ? true : false;
    this.renderer.setAttribute(this.draghandle.nativeElement, "aria-invalid", `${this.isInvalid}`);
  }
  attachElementEventHandlers() {
    const hostElement = this.hostElement.nativeElement;
    let tabbing = false;
    let cursorInsideWrapper = false;
    this.ngZone.runOutsideAngular(() => {
      this.subscriptions.add(this.renderer.listen(hostElement, "focusin", () => {
        if (!this.isFocused) {
          this.ngZone.run(() => {
            if (!this.focusChangedProgrammatically) {
              this.onFocus.emit();
            }
            this.focused = true;
          });
        }
      }));
      this.subscriptions.add(this.renderer.listen(hostElement, "focusout", (args) => {
        if (!this.isFocused) {
          return;
        }
        if (tabbing) {
          if (args.relatedTarget !== this.draghandle.nativeElement) {
            this.handleBlur();
          }
          tabbing = false;
        } else {
          if (!cursorInsideWrapper) {
            this.handleBlur();
          }
        }
      }));
      this.subscriptions.add(this.renderer.listen(hostElement, "mouseenter", () => {
        cursorInsideWrapper = true;
      }));
      this.subscriptions.add(this.renderer.listen(hostElement, "mouseleave", () => {
        cursorInsideWrapper = false;
      }));
      this.subscriptions.add(this.renderer.listen(hostElement, "keydown", (args) => {
        if (args.code === Keys.Tab) {
          tabbing = true;
        } else {
          tabbing = false;
        }
      }));
    });
  }
  handleBlur = () => {
    this.changeDetector.markForCheck();
    this.focused = false;
    if (hasObservers(this.onBlur) || requiresZoneOnBlur(this.control)) {
      this.ngZone.run(() => {
        this.ngTouched();
        if (!this.focusChangedProgrammatically) {
          this.onBlur.emit();
        }
      });
    }
  };
  get decreaseButtonArrowIcon() {
    const icon = !this.vertical ? this.direction === "ltr" ? "caret-alt-left" : "caret-alt-right" : "caret-alt-down";
    return icon;
  }
  get increaseButtonArrowIcon() {
    const icon = !this.vertical ? this.direction === "ltr" ? "caret-alt-right" : "caret-alt-left" : "caret-alt-up";
    return icon;
  }
  get decreaseButtonArrowSVGIcon() {
    const icon = !this.vertical ? this.direction === "ltr" ? this.arrowLeftIcon : this.arrowRightIcon : this.arrowDownIcon;
    return icon;
  }
  get increaseButtonArrowSVGIcon() {
    const icon = !this.vertical ? this.direction === "ltr" ? this.arrowRightIcon : this.arrowLeftIcon : this.arrowUpIcon;
    return icon;
  }
  static ɵfac = function SliderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SliderComponent)(ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _SliderComponent,
    selectors: [["kendo-slider"]],
    viewQuery: function SliderComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c6, 7);
        ɵɵviewQuery(_c7, 5, ElementRef);
        ɵɵviewQuery(_c8, 5, ElementRef);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.draghandle = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.decreaseButton = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.increaseButton = _t.first);
      }
    },
    inputs: {
      focusableId: "focusableId",
      dragHandleTitle: "dragHandleTitle",
      incrementTitle: "incrementTitle",
      animate: "animate",
      decrementTitle: "decrementTitle",
      showButtons: "showButtons",
      value: "value",
      tabIndex: "tabIndex"
    },
    exportAs: ["kendoSlider"],
    standalone: true,
    features: [ɵɵProvidersFeature([LocalizationService, {
      provide: L10N_PREFIX,
      useValue: "kendo.slider"
    }, {
      multi: true,
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _SliderComponent)
    }, {
      provide: KendoInput,
      useExisting: forwardRef(() => _SliderComponent)
    }]), ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    decls: 13,
    vars: 23,
    consts: () => {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_0 = goog.getMsg("increment");
        i18n_0 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_0;
      } else {
        i18n_0 = $localize`:kendo.slider.increment|The title of the **Increase** button of the Slider.:increment`;
      }
      let i18n_1;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_1 = goog.getMsg("decrement");
        i18n_1 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_1;
      } else {
        i18n_1 = $localize`:kendo.slider.decrement|The title of the **Decrease** button of the Slider.:decrement`;
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_2 = goog.getMsg("Drag");
        i18n_2 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_2;
      } else {
        i18n_2 = $localize`:kendo.slider.dragHandle|The title of the drag handle of the Slider.:Drag`;
      }
      return [["wrap", ""], ["track", ""], ["sliderSelection", ""], ["draghandle", ""], ["decreaseButton", ""], ["ticks", ""], ["increaseButton", ""], ["kendoSliderLocalizedMessages", "", "increment", i18n_0, "decrement", i18n_1, "dragHandle", i18n_2], ["kendoButton", "", "type", "button", "rounded", "full", 1, "k-button-decrease", 3, "icon", "svgIcon", "title"], [1, "k-slider-track-wrap", 3, "kendoEventsOutsideAngular"], ["kendoSliderTicks", "", "aria-hidden", "true", 3, "tickTitle", "vertical", "step", "largeStep", "min", "max", "labelTemplate"], [1, "k-slider-track"], [1, "k-slider-selection"], ["role", "slider", "kendoDraggable", "", 1, "k-draghandle", "k-draghandle-end", 3, "kendoPress", "kendoDrag", "kendoRelease", "title", "id"], ["kendoButton", "", "type", "button", "rounded", "full", 1, "k-button-increase", 3, "icon", "svgIcon", "title"], [3, "resize"]];
    },
    template: function SliderComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵelementContainerStart(0, 7);
        ɵɵtemplate(1, SliderComponent_Conditional_1_Template, 2, 4, "button", 8);
        ɵɵelementStart(2, "div", 9, 0);
        ɵɵtemplate(4, SliderComponent_Conditional_4_Template, 2, 7, "ul", 10);
        ɵɵelementStart(5, "div", 11, 1);
        ɵɵelement(7, "div", 12, 2);
        ɵɵelementStart(9, "span", 13, 3);
        ɵɵlistener("kendoPress", function SliderComponent_Template_span_kendoPress_9_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.ifEnabled(ctx.handleDragPress, $event));
        })("kendoDrag", function SliderComponent_Template_span_kendoDrag_9_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.ifEnabled(ctx.onHandleDrag, $event));
        })("kendoRelease", function SliderComponent_Template_span_kendoRelease_9_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.ifEnabled(ctx.onHandleRelease, $event));
        });
        ɵɵelementEnd()()();
        ɵɵtemplate(11, SliderComponent_Conditional_11_Template, 2, 4, "button", 14);
        ɵɵelementStart(12, "kendo-resize-sensor", 15);
        ɵɵlistener("resize", function SliderComponent_Template_kendo_resize_sensor_resize_12_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.sizeComponent(false));
        });
        ɵɵelementEnd();
        ɵɵelementContainerEnd();
      }
      if (rf & 2) {
        ɵɵadvance();
        ɵɵconditional(ctx.showButtons ? 1 : -1);
        ɵɵadvance();
        ɵɵclassProp("k-slider-topleft", ctx.tickPlacement === "before")("k-slider-bottomright", ctx.tickPlacement === "after");
        ɵɵproperty("kendoEventsOutsideAngular", ɵɵpureFunction2(20, _c9, ctx.onWrapClick, ctx.onKeyDown));
        ɵɵadvance(2);
        ɵɵconditional(ctx.tickPlacement !== "none" ? 4 : -1);
        ɵɵadvance(5);
        ɵɵstyleProp("touch-action", ctx.isDisabled ? "" : "none");
        ɵɵproperty("title", ctx.dragHandleMessage)("id", ctx.focusableId);
        ɵɵattribute("aria-valuemin", ctx.min)("aria-valuemax", ctx.max)("aria-valuenow", ctx.currentValue)("aria-valuetext", ctx.currentValue)("aria-disabled", ctx.disabled ? true : void 0)("aria-readonly", ctx.readonly ? true : void 0)("aria-orientation", ctx.vertical ? "vertical" : "horizontal")("tabindex", ctx.disabled ? "-1" : ctx.tabIndex);
        ɵɵadvance(2);
        ɵɵconditional(ctx.showButtons ? 11 : -1);
      }
    },
    dependencies: [LocalizedSliderMessagesDirective, ButtonComponent, EventsOutsideAngularDirective, SliderTicksComponent, DraggableDirective, ResizeSensorComponent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SliderComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoSlider",
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.slider"
      }, {
        multi: true,
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => SliderComponent)
      }, {
        provide: KendoInput,
        useExisting: forwardRef(() => SliderComponent)
      }],
      selector: "kendo-slider",
      template: `
        <ng-container kendoSliderLocalizedMessages
          i18n-increment="kendo.slider.increment|The title of the **Increase** button of the Slider."
          increment="increment"
          i18n-decrement="kendo.slider.decrement|The title of the **Decrease** button of the Slider."
          decrement="decrement"
          i18n-dragHandle="kendo.slider.dragHandle|The title of the drag handle of the Slider."
          dragHandle="Drag"
          >
          @if (showButtons) {
            <button
              kendoButton
              #decreaseButton
              type="button"
              rounded="full"
              [icon]="decreaseButtonArrowIcon"
              [svgIcon]="decreaseButtonArrowSVGIcon"
              class="k-button-decrease"
              [title]="decrementMessage"
              [attr.tabindex]="-1"
            ></button>
          }
          <div
            #wrap
            class="k-slider-track-wrap"
            [class.k-slider-topleft]="tickPlacement === 'before'"
            [class.k-slider-bottomright]="tickPlacement === 'after'"
            [kendoEventsOutsideAngular]="{ click: onWrapClick, keydown: onKeyDown }"
            >
            @if (tickPlacement !== 'none') {
              <ul kendoSliderTicks
                #ticks
                [tickTitle]="title"
                [vertical]="vertical"
                [step]="smallStep"
                [largeStep]="largeStep"
                [min]="min"
                [max]="max"
                [labelTemplate]="labelTemplate?.templateRef"
                aria-hidden="true"
                >
              </ul>
            }
            <div #track class="k-slider-track">
              <div #sliderSelection class="k-slider-selection">
              </div>
              <span #draghandle
                role="slider"
                [attr.aria-valuemin]="min"
                [attr.aria-valuemax]="max"
                [attr.aria-valuenow]="currentValue"
                [attr.aria-valuetext]="currentValue"
                [attr.aria-disabled]="disabled ? true : undefined"
                [attr.aria-readonly]="readonly ? true : undefined"
                [attr.aria-orientation]="vertical ? 'vertical' : 'horizontal'"
                [style.touch-action]="isDisabled ? '' : 'none'"
                class="k-draghandle k-draghandle-end"
                [title]="dragHandleMessage"
                [attr.tabindex]="disabled ? '-1' : tabIndex"
                [id]="focusableId"
                kendoDraggable
                (kendoPress)="ifEnabled(handleDragPress, $event)"
                (kendoDrag)="ifEnabled(onHandleDrag, $event)"
                (kendoRelease)="ifEnabled(onHandleRelease, $event)"
              ></span>
            </div>
          </div>
          @if (showButtons) {
            <button
              kendoButton
              #increaseButton
              type="button"
              rounded="full"
              [icon]="increaseButtonArrowIcon"
              [svgIcon]="increaseButtonArrowSVGIcon"
              class="k-button-increase"
              [title]="incrementMessage"
              [attr.tabindex]="-1"
            ></button>
          }
          <kendo-resize-sensor (resize)="sizeComponent(false)"></kendo-resize-sensor>
        `,
      standalone: true,
      imports: [LocalizedSliderMessagesDirective, ButtonComponent, EventsOutsideAngularDirective, SliderTicksComponent, DraggableDirective, ResizeSensorComponent]
    }]
  }], () => [{
    type: LocalizationService
  }, {
    type: Injector
  }, {
    type: Renderer2
  }, {
    type: NgZone
  }, {
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }], {
    focusableId: [{
      type: Input
    }],
    dragHandleTitle: [{
      type: Input
    }],
    incrementTitle: [{
      type: Input
    }],
    animate: [{
      type: Input
    }],
    decrementTitle: [{
      type: Input
    }],
    showButtons: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    tabIndex: [{
      type: Input
    }],
    draghandle: [{
      type: ViewChild,
      args: ["draghandle", {
        static: true
      }]
    }],
    decreaseButton: [{
      type: ViewChild,
      args: ["decreaseButton", {
        read: ElementRef
      }]
    }],
    increaseButton: [{
      type: ViewChild,
      args: ["increaseButton", {
        read: ElementRef
      }]
    }]
  });
})();
var RangeSliderModel = class extends SliderModelBase {
  startHandlePosition;
  endHandlePosition;
  positionHandle(dragHandle) {
    if (!dragHandle.id) {
      return;
    }
    const {
      max,
      min,
      reverse,
      vertical
    } = this.props;
    const position = vertical ? "bottom" : reverse ? "right" : "left";
    const trackWidth = this.trackWidth();
    const value = isStartHandle(dragHandle) ? trimValueRange(max, min, this.props.value)[0] : trimValueRange(max, min, this.props.value)[1];
    if (isStartHandle(dragHandle)) {
      this.startHandlePosition = calculateHandlePosition({
        min,
        max,
        reverse,
        value,
        trackWidth
      });
      this.renderer.setStyle(dragHandle, position, `${this.startHandlePosition}px`);
    } else {
      this.endHandlePosition = calculateHandlePosition({
        min,
        max,
        reverse,
        value,
        trackWidth
      });
      this.renderer.setStyle(dragHandle, position, `${this.endHandlePosition}px`);
    }
  }
  positionSelection(dragHandle, selection) {
    const {
      reverse,
      vertical
    } = this.props;
    const dimension = vertical ? "height" : "width";
    const position = vertical ? "bottom" : reverse ? "right" : "left";
    const size = Math.abs(this.endHandlePosition - this.startHandlePosition);
    const currentSelectionPosition = vertical ? dragHandle.style.bottom : reverse ? dragHandle.style.right : dragHandle.style.left;
    this.renderer.setStyle(selection, dimension, `${size}px`);
    this.renderer.setStyle(selection, position, parseFloat(currentSelectionPosition) + "px");
  }
};
var RangeSliderMessages = class _RangeSliderMessages extends ComponentMessages {
  /**
   * The title of the range `start` drag handle.
   */
  dragHandleStart;
  /**
   * The title of the range `end` drag handle.
   */
  dragHandleEnd;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵRangeSliderMessages_BaseFactory;
    return function RangeSliderMessages_Factory(__ngFactoryType__) {
      return (ɵRangeSliderMessages_BaseFactory || (ɵRangeSliderMessages_BaseFactory = ɵɵgetInheritedFactory(_RangeSliderMessages)))(__ngFactoryType__ || _RangeSliderMessages);
    };
  })();
  static ɵdir = ɵɵdefineDirective({
    type: _RangeSliderMessages,
    selectors: [["kendo-rangeslider-messages-base"]],
    inputs: {
      dragHandleStart: "dragHandleStart",
      dragHandleEnd: "dragHandleEnd"
    },
    features: [ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RangeSliderMessages, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "kendo-rangeslider-messages-base"
    }]
  }], null, {
    dragHandleStart: [{
      type: Input
    }],
    dragHandleEnd: [{
      type: Input
    }]
  });
})();
var LocalizedRangeSliderMessagesDirective = class _LocalizedRangeSliderMessagesDirective extends RangeSliderMessages {
  service;
  constructor(service) {
    super();
    this.service = service;
  }
  static ɵfac = function LocalizedRangeSliderMessagesDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LocalizedRangeSliderMessagesDirective)(ɵɵdirectiveInject(LocalizationService));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _LocalizedRangeSliderMessagesDirective,
    selectors: [["", "kendoSliderLocalizedMessages", ""]],
    standalone: true,
    features: [ɵɵProvidersFeature([{
      provide: RangeSliderMessages,
      useExisting: forwardRef(() => _LocalizedRangeSliderMessagesDirective)
    }]), ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LocalizedRangeSliderMessagesDirective, [{
    type: Directive,
    args: [{
      providers: [{
        provide: RangeSliderMessages,
        useExisting: forwardRef(() => LocalizedRangeSliderMessagesDirective)
      }],
      selector: "[kendoSliderLocalizedMessages]",
      standalone: true
    }]
  }], () => [{
    type: LocalizationService
  }], null);
})();
var PRESSED = "k-pressed";
var RangeSliderComponent = class _RangeSliderComponent extends SliderBase {
  localization;
  injector;
  renderer;
  ngZone;
  changeDetector;
  hostElement;
  /**
   * Sets the range value of the RangeSlider.
   * Use either `ngModel` or the `value` binding, but not both at the same time.
   */
  value;
  draghandleStart;
  draghandleEnd;
  /**
   * @hidden
   */
  startHandleId = `k-start-handle-${guid()}`;
  /**
   * @hidden
   */
  endHandleId = `k-end-handle-${guid()}`;
  /**
   * @hidden
   */
  focusableId = this.startHandleId;
  draggedHandle;
  lastHandlePosition;
  activeHandle = "startHandle";
  focusChangedProgrammatically = false;
  isInvalid;
  constructor(localization, injector, renderer, ngZone, changeDetector, hostElement) {
    super(localization, injector, renderer, ngZone, changeDetector, hostElement);
    this.localization = localization;
    this.injector = injector;
    this.renderer = renderer;
    this.ngZone = ngZone;
    this.changeDetector = changeDetector;
    this.hostElement = hostElement;
    A(packageMetadata);
  }
  /**
   * Focuses the RangeSlider.
   *
   */
  focus() {
    this.focusChangedProgrammatically = true;
    invokeElementMethod(this.draghandleStart, "focus");
    this.focusChangedProgrammatically = false;
  }
  /**
   * Removes focus from the RangeSlider.
   */
  blur() {
    this.focusChangedProgrammatically = true;
    const activeHandle = this.activeHandle === "startHandle" ? this.draghandleStart : this.draghandleEnd;
    invokeElementMethod(activeHandle, "blur");
    this.handleBlur();
    this.focusChangedProgrammatically = false;
  }
  ngOnInit() {
    if (!this.value) {
      this.value = [this.min, this.max];
    }
    super.ngOnInit();
  }
  ngOnChanges(changes) {
    if (anyChanged(["value", "fixedTickWidth", "tickPlacement"], changes, true)) {
      if (changes["value"] && changes["value"].currentValue) {
        validateValue(changes["value"].currentValue);
      }
      this.ngZone.onStable.asObservable().pipe(take(1)).subscribe(() => {
        this.sizeComponent();
      });
    }
  }
  ngAfterViewInit() {
    if (!isDocumentAvailable()) {
      return;
    }
    this.sizeComponent();
    if (this.ticks) {
      this.ticks.tickElements.changes.subscribe(() => this.sizeComponent());
    }
    this.isRangeSliderInvalid();
    this.attachElementEventHandlers();
  }
  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }
  /**
   * @hidden
   */
  textFor(key) {
    return this.localization.get(key);
  }
  /**
   * @hidden
   */
  get valueText() {
    return this.value ? `${this.value[0]} - ${this.value[1]}` : "";
  }
  /**
   * @hidden
   */
  onWrapClick = (args) => {
    if (!this.isDisabled) {
      this.value = this.value || [this.min, this.min];
      const trackValue = eventValue(args, this.track.nativeElement, this.getProps());
      let newRangeValue;
      const [startValue, endValue] = newRangeValue = this.value;
      if (trackValue <= startValue) {
        newRangeValue = [trackValue, endValue];
        this.activeHandle = "startHandle";
      } else if (startValue < trackValue && trackValue < endValue) {
        if (trackValue < (startValue + endValue) / 2) {
          newRangeValue = [trackValue, endValue];
          this.activeHandle = "startHandle";
        } else {
          newRangeValue = [startValue, trackValue];
          this.activeHandle = "endHandle";
        }
      } else if (trackValue >= endValue) {
        newRangeValue = [startValue, trackValue];
        this.activeHandle = "endHandle";
      }
      const activeHandle = this.activeHandle === "startHandle" ? this.draghandleStart : this.draghandleEnd;
      invokeElementMethod(activeHandle, "focus");
      this.changeValue(newRangeValue);
    }
  };
  /**
   * @hidden
   */
  handleDragPress(args) {
    if (args.originalEvent) {
      args.originalEvent.preventDefault();
    }
    const target = args.originalEvent.target;
    this.draggedHandle = target;
    const nonDraggedHandle = this.draghandleStart.nativeElement === this.draggedHandle ? this.draghandleEnd.nativeElement : this.draghandleStart.nativeElement;
    this.renderer.removeStyle(nonDraggedHandle, "zIndex");
    this.renderer.setStyle(target, "zIndex", 1);
  }
  /**
   * @hidden
   */
  onHandleDrag(args) {
    this.value = this.value || [this.min, this.min];
    const target = args.originalEvent.target;
    const lastCoords = this.draggedHandle.getBoundingClientRect();
    this.lastHandlePosition = {
      x: lastCoords.left,
      y: lastCoords.top
    };
    this.dragging = {
      value: true,
      target
    };
    const mousePos = {
      x: args.pageX - 0.5 - lastCoords.width / 2,
      y: args.pageY - lastCoords.width / 2
    };
    const left = mousePos.x < this.lastHandlePosition.x;
    const right = mousePos.x > this.lastHandlePosition.x;
    const up = mousePos.y > this.lastHandlePosition.y;
    const moveStartHandle = () => this.changeValue([eventValue(args, this.track.nativeElement, this.getProps()), this.value[1]]);
    const moveEndHandle = () => this.changeValue([this.value[0], eventValue(args, this.track.nativeElement, this.getProps())]);
    const moveBothHandles = () => this.changeValue([eventValue(args, this.track.nativeElement, this.getProps()), eventValue(args, this.track.nativeElement, this.getProps())]);
    const activeStartHandle = isStartHandle(this.draggedHandle);
    const vertical = this.vertical;
    const horizontal = !vertical;
    const forward = vertical && up || (this.reverse ? horizontal && right : horizontal && left);
    const incorrectValueState = this.value[0] > this.value[1];
    if (this.value[0] === this.value[1] || incorrectValueState) {
      if (forward) {
        activeStartHandle ? moveStartHandle() : moveBothHandles();
      } else {
        activeStartHandle ? moveBothHandles() : moveEndHandle();
      }
    } else {
      activeStartHandle ? moveStartHandle() : moveEndHandle();
    }
  }
  /**
   * @hidden
   */
  onKeyDown = (e) => {
    this.value = this.value || [this.min, this.min];
    const options = this.getProps();
    const {
      max,
      min
    } = options;
    const code = normalizeKeys(e);
    const handler = this.keyBinding[code];
    if (this.isDisabled || !handler) {
      return;
    }
    const startHandleIsActive = isStartHandle(e.target);
    const nonDraggedHandle = startHandleIsActive ? this.draghandleEnd.nativeElement : this.draghandleStart.nativeElement;
    this.renderer.removeStyle(nonDraggedHandle, "zIndex");
    this.renderer.setStyle(e.target, "zIndex", 1);
    const value = handler(__spreadProps(__spreadValues({}, options), {
      value: startHandleIsActive ? this.value[0] : this.value[1]
    }));
    if (startHandleIsActive) {
      if (value > this.value[1]) {
        this.value[1] = value;
      }
    } else {
      if (value < this.value[0]) {
        this.value[0] = value;
      }
    }
    const trimmedValue = trimValue(max, min, value);
    const newValue = startHandleIsActive ? [trimmedValue, this.value[1]] : [this.value[0], trimmedValue];
    this.changeValue(newValue);
    e.preventDefault();
  };
  /**
   * @hidden
   */
  onHandleRelease(args) {
    this.dragging = {
      value: false,
      target: args.originalEvent.target
    };
    this.draggedHandle = void 0;
  }
  //ngModel binding
  /**
   * @hidden
   */
  writeValue(value) {
    validateValue(value);
    this.value = value;
    this.sizeComponent();
    this.changeDetector.markForCheck();
  }
  /**
   * @hidden
   */
  registerOnChange(fn) {
    this.ngChange = fn;
  }
  /**
   * @hidden
   */
  registerOnTouched(fn) {
    this.ngTouched = fn;
  }
  /**
   * @hidden
   */
  changeValue(value) {
    if (!this.value || !isSameRange(this.value, value)) {
      this.ngZone.run(() => {
        this.value = value;
        this.ngChange(value);
        if (this.value) {
          this.valueChange.emit(value);
        }
        this.sizeComponent();
      });
    }
    this.isRangeSliderInvalid();
  }
  /**
   * @hidden
   */
  sizeComponent() {
    if (!isDocumentAvailable()) {
      return;
    }
    const wrapper = this.wrapper.nativeElement;
    const track = this.track.nativeElement;
    const selectionEl = this.sliderSelection.nativeElement;
    const dragHandleStartEl = this.draghandleStart.nativeElement;
    const dragHandleEndEl = this.draghandleEnd.nativeElement;
    const ticks = this.ticks ? this.ticksContainer.nativeElement : null;
    this.resetStyles([track, selectionEl, dragHandleStartEl, dragHandleEndEl, ticks, this.hostElement.nativeElement]);
    const props = this.getProps();
    const model = new RangeSliderModel(props, wrapper, track, this.renderer);
    model.resizeTrack();
    if (this.ticks) {
      model.resizeTicks(this.ticksContainer.nativeElement, this.ticks.tickElements.map((element) => element.nativeElement));
    }
    model.positionHandle(dragHandleStartEl);
    model.positionHandle(dragHandleEndEl);
    model.positionSelection(dragHandleStartEl, selectionEl);
    if (this.fixedTickWidth) {
      model.resizeWrapper();
    }
  }
  /**
   * @hidden
   */
  get isDisabled() {
    return this.disabled || this.readonly;
  }
  /**
   * @hidden
   * Used by the FloatingLabel to determine if the component is empty.
   */
  isEmpty() {
    return false;
  }
  set focused(value) {
    if (this.isFocused !== value && this.hostElement) {
      this.isFocused = value;
    }
  }
  set dragging(data) {
    if (this.isDragged !== data.value && this.sliderSelection && this.draghandleStart && this.draghandleEnd) {
      const sliderSelection = this.sliderSelection.nativeElement;
      const draghandle = data.target;
      if (data.value) {
        this.renderer.addClass(sliderSelection, PRESSED);
        this.renderer.addClass(draghandle, PRESSED);
      } else {
        this.renderer.removeClass(sliderSelection, PRESSED);
        this.renderer.removeClass(draghandle, PRESSED);
      }
      this.isDragged = data.value;
    }
  }
  ngChange = (_) => {
  };
  ngTouched = () => {
  };
  getProps() {
    return {
      disabled: this.disabled,
      fixedTickWidth: this.fixedTickWidth,
      largeStep: this.largeStep,
      max: this.max,
      min: this.min,
      readonly: this.readonly,
      reverse: this.reverse,
      rtl: this.localizationService.rtl,
      smallStep: this.smallStep,
      value: trimValueRange(this.max, this.min, this.value),
      vertical: this.vertical,
      buttons: false
    };
  }
  isRangeSliderInvalid() {
    const rangeSliderClasses = this.hostElement.nativeElement.classList;
    this.isInvalid = rangeSliderClasses.contains("ng-invalid") ? true : false;
    this.renderer.setAttribute(this.draghandleStart.nativeElement, "aria-invalid", `${this.isInvalid}`);
    this.renderer.setAttribute(this.draghandleEnd.nativeElement, "aria-invalid", `${this.isInvalid}`);
  }
  attachElementEventHandlers() {
    const hostElement = this.hostElement.nativeElement;
    let tabbing = false;
    let cursorInsideWrapper = false;
    this.ngZone.runOutsideAngular(() => {
      this.subscriptions.add(this.renderer.listen(hostElement, "focusin", () => {
        if (!this.isFocused) {
          this.ngZone.run(() => {
            if (!this.focusChangedProgrammatically) {
              this.onFocus.emit();
            }
            this.focused = true;
          });
        }
      }));
      this.subscriptions.add(this.renderer.listen(hostElement, "focusout", (args) => {
        if (!this.isFocused) {
          return;
        }
        if (tabbing) {
          if (args.relatedTarget !== this.draghandleStart.nativeElement && args.relatedTarget !== this.draghandleEnd.nativeElement) {
            this.handleBlur();
          }
          tabbing = false;
        } else {
          if (!cursorInsideWrapper) {
            this.handleBlur();
          }
        }
      }));
      this.subscriptions.add(this.renderer.listen(hostElement, "mouseenter", () => {
        cursorInsideWrapper = true;
      }));
      this.subscriptions.add(this.renderer.listen(hostElement, "mouseleave", () => {
        cursorInsideWrapper = false;
      }));
      this.subscriptions.add(this.renderer.listen(hostElement, "keydown", (args) => {
        if (args.code === Keys.Tab) {
          tabbing = true;
        } else {
          tabbing = false;
        }
      }));
    });
  }
  handleBlur = () => {
    this.changeDetector.markForCheck();
    this.focused = false;
    if (hasObservers(this.onBlur) || requiresZoneOnBlur(this.control)) {
      this.ngZone.run(() => {
        this.ngTouched();
        if (!this.focusChangedProgrammatically) {
          this.onBlur.emit();
        }
      });
    }
  };
  static ɵfac = function RangeSliderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RangeSliderComponent)(ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _RangeSliderComponent,
    selectors: [["kendo-rangeslider"]],
    viewQuery: function RangeSliderComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c10, 7);
        ɵɵviewQuery(_c11, 7);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.draghandleStart = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.draghandleEnd = _t.first);
      }
    },
    inputs: {
      value: "value"
    },
    exportAs: ["kendoRangeSlider"],
    standalone: true,
    features: [ɵɵProvidersFeature([LocalizationService, {
      provide: L10N_PREFIX,
      useValue: "kendo.rangeslider"
    }, {
      multi: true,
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _RangeSliderComponent)
    }, {
      provide: KendoInput,
      useExisting: forwardRef(() => _RangeSliderComponent)
    }]), ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    decls: 13,
    vars: 33,
    consts: () => {
      let i18n_3;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_3 = goog.getMsg("Drag");
        i18n_3 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_3;
      } else {
        i18n_3 = $localize`:kendo.rangeslider.dragHandleStart|The title of the **Start** drag handle of the Slider.:Drag`;
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_4 = goog.getMsg("Drag");
        i18n_4 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_4;
      } else {
        i18n_4 = $localize`:kendo.rangeslider.dragHandleEnd|The title of the **End** drag handle of the Slider.:Drag`;
      }
      return [["wrap", ""], ["track", ""], ["sliderSelection", ""], ["draghandleStart", ""], ["draghandleEnd", ""], ["ticks", ""], ["kendoSliderLocalizedMessages", "", "dragHandleStart", i18n_3, "dragHandleEnd", i18n_4], [1, "k-slider-track-wrap", 3, "kendoEventsOutsideAngular"], ["kendoSliderTicks", "", 3, "tickTitle", "vertical", "step", "largeStep", "min", "max", "labelTemplate"], [1, "k-slider-track"], [1, "k-slider-selection"], ["role", "slider", "kendoDraggable", "", 1, "k-draghandle", 3, "kendoPress", "kendoDrag", "kendoRelease", "id", "title"], [3, "resize"]];
    },
    template: function RangeSliderComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵelementContainerStart(0, 6);
        ɵɵelementStart(1, "div", 7, 0);
        ɵɵtemplate(3, RangeSliderComponent_Conditional_3_Template, 2, 8, "ul", 8);
        ɵɵelementStart(4, "div", 9, 1);
        ɵɵelement(6, "div", 10, 2);
        ɵɵelementStart(8, "span", 11, 3);
        ɵɵlistener("kendoPress", function RangeSliderComponent_Template_span_kendoPress_8_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.ifEnabled(ctx.handleDragPress, $event));
        })("kendoDrag", function RangeSliderComponent_Template_span_kendoDrag_8_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.ifEnabled(ctx.onHandleDrag, $event));
        })("kendoRelease", function RangeSliderComponent_Template_span_kendoRelease_8_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.ifEnabled(ctx.onHandleRelease, $event));
        });
        ɵɵelementEnd();
        ɵɵelementStart(10, "span", 11, 4);
        ɵɵlistener("kendoPress", function RangeSliderComponent_Template_span_kendoPress_10_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.ifEnabled(ctx.handleDragPress, $event));
        })("kendoDrag", function RangeSliderComponent_Template_span_kendoDrag_10_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.ifEnabled(ctx.onHandleDrag, $event));
        })("kendoRelease", function RangeSliderComponent_Template_span_kendoRelease_10_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.ifEnabled(ctx.onHandleRelease, $event));
        });
        ɵɵelementEnd()()();
        ɵɵelementStart(12, "kendo-resize-sensor", 12);
        ɵɵlistener("resize", function RangeSliderComponent_Template_kendo_resize_sensor_resize_12_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.sizeComponent());
        });
        ɵɵelementEnd();
        ɵɵelementContainerEnd();
      }
      if (rf & 2) {
        ɵɵadvance();
        ɵɵclassProp("k-slider-topleft", ctx.tickPlacement === "before")("k-slider-bottomright", ctx.tickPlacement === "after");
        ɵɵproperty("kendoEventsOutsideAngular", ɵɵpureFunction2(30, _c9, ctx.onWrapClick, ctx.onKeyDown));
        ɵɵadvance(2);
        ɵɵconditional(ctx.tickPlacement !== "none" ? 3 : -1);
        ɵɵadvance(5);
        ɵɵstyleProp("touch-action", ctx.isDisabled ? "" : "none");
        ɵɵproperty("id", ctx.startHandleId)("title", ctx.textFor("dragHandleStart"));
        ɵɵattribute("tabindex", ctx.disabled ? void 0 : ctx.tabindex)("aria-valuemin", ctx.min)("aria-valuemax", ctx.max)("aria-valuenow", ctx.value ? ctx.value[0] : null)("aria-valuetext", ctx.valueText)("aria-disabled", ctx.disabled ? true : void 0)("aria-readonly", ctx.readonly ? true : void 0)("aria-orientation", ctx.vertical ? "vertical" : "horizontal");
        ɵɵadvance(2);
        ɵɵstyleProp("touch-action", ctx.isDisabled ? "" : "none");
        ɵɵproperty("id", ctx.endHandleId)("title", ctx.textFor("dragHandleEnd"));
        ɵɵattribute("tabindex", ctx.disabled ? void 0 : ctx.tabindex)("aria-valuemin", ctx.min)("aria-valuemax", ctx.max)("aria-valuenow", ctx.value ? ctx.value[1] : null)("aria-valuetext", ctx.valueText)("aria-disabled", ctx.disabled ? true : void 0)("aria-readonly", ctx.readonly ? true : void 0)("aria-orientation", ctx.vertical ? "vertical" : "horizontal");
      }
    },
    dependencies: [LocalizedRangeSliderMessagesDirective, EventsOutsideAngularDirective, SliderTicksComponent, DraggableDirective, ResizeSensorComponent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RangeSliderComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoRangeSlider",
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.rangeslider"
      }, {
        multi: true,
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => RangeSliderComponent)
      }, {
        provide: KendoInput,
        useExisting: forwardRef(() => RangeSliderComponent)
      }],
      selector: "kendo-rangeslider",
      template: `
        <ng-container kendoSliderLocalizedMessages
          i18n-dragHandleStart="kendo.rangeslider.dragHandleStart|The title of the **Start** drag handle of the Slider."
          dragHandleStart="Drag"
          i18n-dragHandleEnd="kendo.rangeslider.dragHandleEnd|The title of the **End** drag handle of the Slider."
          dragHandleEnd="Drag"
          >

          <div
            #wrap
            class="k-slider-track-wrap"
            [class.k-slider-topleft]="tickPlacement === 'before'"
            [class.k-slider-bottomright]="tickPlacement === 'after'"
            [kendoEventsOutsideAngular]="{ click: onWrapClick, keydown: onKeyDown }"
            >
            @if (tickPlacement !== 'none') {
              <ul kendoSliderTicks
                #ticks
                [tickTitle]="title"
                [vertical]="vertical"
                [step]="smallStep"
                [largeStep]="largeStep"
                [min]="min"
                [max]="max"
                [labelTemplate]="labelTemplate?.templateRef"
                [attr.aria-hidden]="true"
                >
              </ul>
            }
            <div #track class="k-slider-track">
              <div #sliderSelection class="k-slider-selection">
              </div>
              <span #draghandleStart
                role="slider"
                [id]="startHandleId"
                [attr.tabindex]="disabled ? undefined : tabindex"
                [attr.aria-valuemin]="min"
                [attr.aria-valuemax]="max"
                [attr.aria-valuenow]="value ? value[0] : null"
                [attr.aria-valuetext]="valueText"
                [attr.aria-disabled]="disabled ? true : undefined"
                [attr.aria-readonly]="readonly ? true : undefined"
                [attr.aria-orientation]="vertical ? 'vertical' : 'horizontal'"
                [style.touch-action]="isDisabled ? '' : 'none'"
                class="k-draghandle"
                [title]="textFor('dragHandleStart')"
                kendoDraggable
                (kendoPress)="ifEnabled(handleDragPress ,$event)"
                (kendoDrag)="ifEnabled(onHandleDrag ,$event)"
                (kendoRelease)="ifEnabled(onHandleRelease, $event)"
              ></span>
              <span #draghandleEnd
                role="slider"
                [id]="endHandleId"
                [attr.tabindex]="disabled ? undefined : tabindex"
                [attr.aria-valuemin]="min"
                [attr.aria-valuemax]="max"
                [attr.aria-valuenow]="value ? value[1] : null"
                [attr.aria-valuetext]="valueText"
                [attr.aria-disabled]="disabled ? true : undefined"
                [attr.aria-readonly]="readonly ? true : undefined"
                [attr.aria-orientation]="vertical ? 'vertical' : 'horizontal'"
                [style.touch-action]="isDisabled ? '' : 'none'"
                class="k-draghandle"
                [title]="textFor('dragHandleEnd')"
                kendoDraggable
                (kendoPress)="ifEnabled(handleDragPress ,$event)"
                (kendoDrag)="ifEnabled(onHandleDrag ,$event)"
                (kendoRelease)="ifEnabled(onHandleRelease, $event)"
              ></span>
            </div>
          </div>
          <kendo-resize-sensor (resize)="sizeComponent()"></kendo-resize-sensor>
        `,
      standalone: true,
      imports: [LocalizedRangeSliderMessagesDirective, EventsOutsideAngularDirective, SliderTicksComponent, DraggableDirective, ResizeSensorComponent]
    }]
  }], () => [{
    type: LocalizationService
  }, {
    type: Injector
  }, {
    type: Renderer2
  }, {
    type: NgZone
  }, {
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }], {
    value: [{
      type: Input
    }],
    draghandleStart: [{
      type: ViewChild,
      args: ["draghandleStart", {
        static: true
      }]
    }],
    draghandleEnd: [{
      type: ViewChild,
      args: ["draghandleEnd", {
        static: true
      }]
    }]
  });
})();
var Messages = class _Messages extends ComponentMessages {
  /**
   * The title of the **On** button of the Switch.
   */
  on;
  /**
   * The title of the **Off** button of the Switch.
   */
  off;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵMessages_BaseFactory;
    return function Messages_Factory(__ngFactoryType__) {
      return (ɵMessages_BaseFactory || (ɵMessages_BaseFactory = ɵɵgetInheritedFactory(_Messages)))(__ngFactoryType__ || _Messages);
    };
  })();
  static ɵdir = ɵɵdefineDirective({
    type: _Messages,
    selectors: [["kendo-switch-messages-base"]],
    inputs: {
      on: "on",
      off: "off"
    },
    features: [ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Messages, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "kendo-switch-messages-base"
    }]
  }], null, {
    on: [{
      type: Input
    }],
    off: [{
      type: Input
    }]
  });
})();
var LocalizedSwitchMessagesDirective = class _LocalizedSwitchMessagesDirective extends Messages {
  service;
  constructor(service) {
    super();
    this.service = service;
  }
  static ɵfac = function LocalizedSwitchMessagesDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LocalizedSwitchMessagesDirective)(ɵɵdirectiveInject(LocalizationService));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _LocalizedSwitchMessagesDirective,
    selectors: [["", "kendoSwitchLocalizedMessages", ""]],
    standalone: true,
    features: [ɵɵProvidersFeature([{
      provide: Messages,
      useExisting: forwardRef(() => _LocalizedSwitchMessagesDirective)
    }]), ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LocalizedSwitchMessagesDirective, [{
    type: Directive,
    args: [{
      providers: [{
        provide: Messages,
        useExisting: forwardRef(() => LocalizedSwitchMessagesDirective)
      }],
      selector: "[kendoSwitchLocalizedMessages]",
      standalone: true
    }]
  }], () => [{
    type: LocalizationService
  }], null);
})();
var FOCUSED$5 = "k-focus";
var DEFAULT_SIZE$e = "medium";
var DEFAULT_THUMB_ROUNDED = "full";
var DEFAULT_TRACK_ROUNDED = "full";
var SwitchComponent = class _SwitchComponent {
  renderer;
  hostElement;
  localizationService;
  injector;
  changeDetector;
  ngZone;
  /**
   * @hidden
   */
  get focusableId() {
    if (this.hostElement.nativeElement.hasAttribute("id")) {
      return this.hostElement.nativeElement.getAttribute("id");
    }
    return `k-${guid()}`;
  }
  /**
   * Set the **On** label.
   * This label takes precedence over the [custom messages component]({% slug api_inputs_switchcustommessagescomponent %}).
   * [See example]({% slug labels_switch %}).
   */
  onLabel;
  /**
   * Set the **Off** label.
   * This label takes precedence over the [custom messages component]({% slug api_inputs_switchcustommessagescomponent %}).
   * [See example]({% slug labels_switch %}).
   */
  offLabel;
  /**
   * Sets the value of the Switch when it first appears.
   */
  set checked(value) {
    this.setHostClasses(value);
    this._checked = value;
  }
  get checked() {
    return this._checked;
  }
  /**
   * When `true`, disables the Switch.
   * [See example]({% slug disabled_switch %}).
   * To disable the component in reactive forms, see [Forms Support](slug:formssupport_switch#toc-managing-the-switch-disabled-state-in-reactive-forms).
   * @default false
   */
  disabled = false;
  /**
   * When `true`, sets the Switch to read-only.
   * [See example]({% slug readonly_switch %}).
   * @default false
   */
  readonly = false;
  /**
   * Set the [`tabindex`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) of the Switch.
   * @default 0
   */
  tabindex = 0;
  /**
   * Sets the size of the Switch.
   *
   * @default "medium"
   */
  set size(size) {
    const newSize = size || DEFAULT_SIZE$e;
    this.handleClasses(newSize, "size");
    this._size = newSize;
  }
  get size() {
    return this._size;
  }
  /**
   * Sets the border radius of the Switch.
   *
   * @default "full"
   */
  set thumbRounded(thumbRounded) {
    const newThumbRounded = thumbRounded || DEFAULT_THUMB_ROUNDED;
    this.handleThumbClasses(newThumbRounded);
    this._thumbRounded = newThumbRounded;
  }
  get thumbRounded() {
    return this._thumbRounded;
  }
  /**
   * Sets the border radius of the Switch track.
   *
   * @default "full"
   */
  set trackRounded(trackRounded) {
    const newTrackRounded = trackRounded || DEFAULT_TRACK_ROUNDED;
    this.handleTrackClasses(newTrackRounded);
    this._trackRounded = newTrackRounded;
  }
  get trackRounded() {
    return this._trackRounded;
  }
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
   * Fires when the user focuses the Switch.
   */
  onFocus = new EventEmitter();
  /**
   * Fires when the user blurs the Switch.
   */
  onBlur = new EventEmitter();
  /**
   * Fires when the value of the Switch changes.
   */
  valueChange = new EventEmitter();
  direction;
  hostRole = "switch";
  get hostId() {
    return this.focusableId;
  }
  get ariaChecked() {
    return this.checked;
  }
  get ariaInvalid() {
    return this.isControlInvalid ? true : void 0;
  }
  get hostTabIndex() {
    return this.disabled ? void 0 : this.tabIndex;
  }
  get ariaDisabled() {
    return this.disabled ? true : void 0;
  }
  get ariaReadonly() {
    return this.readonly;
  }
  hostClasses = true;
  get disabledClass() {
    return this.disabled;
  }
  track;
  thumb;
  /**
   * @hidden
   */
  initialized = false;
  localizationChangeSubscription;
  isFocused;
  control;
  domSubscriptions = [];
  _checked = false;
  _size = "medium";
  _trackRounded = "full";
  _thumbRounded = "full";
  constructor(renderer, hostElement, localizationService, injector, changeDetector, ngZone) {
    this.renderer = renderer;
    this.hostElement = hostElement;
    this.localizationService = localizationService;
    this.injector = injector;
    this.changeDetector = changeDetector;
    this.ngZone = ngZone;
    A(packageMetadata);
    this.direction = localizationService.rtl ? "rtl" : "ltr";
    this.keyDownHandler = this.keyDownHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }
  /**
   * @hidden
   */
  get onLabelMessage() {
    return this.onLabel !== void 0 ? this.onLabel : this.localizationService.get("on");
  }
  /**
   * @hidden
   */
  get offLabelMessage() {
    return this.offLabel !== void 0 ? this.offLabel : this.localizationService.get("off");
  }
  ngChange = (_) => {
  };
  ngTouched = () => {
  };
  get isEnabled() {
    return !this.disabled && !this.readonly;
  }
  ngOnInit() {
    if (this.hostElement) {
      const wrapper = this.hostElement.nativeElement;
      this.renderer.removeAttribute(wrapper, "tabindex");
    }
    this.localizationChangeSubscription = this.localizationService.changes.pipe(skip(1)).subscribe(({
      rtl
    }) => {
      this.direction = rtl ? "rtl" : "ltr";
    });
    this.control = this.injector.get(NgControl, null);
    this.ngZone.onStable.pipe(take(1)).subscribe(() => this.initialized = true);
  }
  ngAfterViewInit() {
    const wrapper = this.hostElement.nativeElement;
    if (!this.checked && !wrapper.classList.contains("k-switch-off")) {
      this.renderer.addClass(wrapper, "k-switch-off");
    }
    this.handleClasses(this.size, "size");
    this.handleTrackClasses(this.trackRounded);
    this.handleThumbClasses(this.thumbRounded);
    this.attachHostHandlers();
  }
  ngOnDestroy() {
    if (this.localizationChangeSubscription) {
      this.localizationChangeSubscription.unsubscribe();
    }
    this.domSubscriptions.forEach((subscription) => subscription());
    const wrapper = this.hostElement.nativeElement;
    wrapper.removeEventListener("focus", this.handleFocus, true);
    wrapper.removeEventListener("blur", this.handleBlur, true);
  }
  /**
   * Focuses the Switch.
   *
   */
  focus() {
    if (!this.hostElement) {
      return;
    }
    this.hostElement.nativeElement.focus();
  }
  /**
   * Blurs the Switch.
   */
  blur() {
    if (!this.hostElement) {
      return;
    }
    this.hostElement.nativeElement.blur();
  }
  /**
   * @hidden
   * Called when the status of the component changes to or from `disabled`.
   * Depending on the value, it enables or disables the appropriate DOM element.
   */
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
    this.changeDetector.markForCheck();
  }
  /**
   * @hidden
   */
  handleFocus = (event) => {
    if (this.isFocused) {
      return;
    }
    event.stopImmediatePropagation();
    this.focused = true;
    if (hasObservers(this.onFocus)) {
      this.ngZone.run(() => {
        const eventArgs = {
          originalEvent: event
        };
        this.onFocus.emit(eventArgs);
      });
    }
  };
  /**
   * @hidden
   */
  handleBlur = (event) => {
    const relatedTarget = event && event.relatedTarget;
    if (this.hostElement.nativeElement.contains(relatedTarget)) {
      return;
    }
    event.stopImmediatePropagation();
    this.changeDetector.markForCheck();
    this.focused = false;
    if (hasObservers(this.onBlur) || requiresZoneOnBlur(this.control)) {
      this.ngZone.run(() => {
        this.ngTouched();
        const eventArgs = {
          originalEvent: event
        };
        this.onBlur.emit(eventArgs);
      });
    }
  };
  /**
   * @hidden
   */
  get isControlInvalid() {
    return this.control && this.control.touched && !this.control.valid;
  }
  /**
   * @hidden
   */
  writeValue(value) {
    this.checked = value === null ? false : value;
    this.changeDetector.markForCheck();
  }
  /**
   * @hidden
   */
  registerOnChange(fn) {
    this.ngChange = fn;
  }
  /**
   * @hidden
   */
  registerOnTouched(fn) {
    this.ngTouched = fn;
  }
  /**
   * @hidden
   */
  keyDownHandler(e) {
    const keyCode = e.code;
    if (this.isEnabled && (keyCode === Keys.Space || keyCode === Keys.Enter || keyCode === Keys.NumpadEnter)) {
      this.changeValue(!this.checked);
      e.preventDefault();
    }
  }
  /**
   * @hidden
   */
  clickHandler() {
    if (this.isEnabled) {
      this.changeValue(!this.checked);
    }
  }
  /**
   * @hidden
   * Used by the FloatingLabel to determine if the component is empty.
   */
  isEmpty() {
    return false;
  }
  changeValue(value) {
    if (this.checked !== value) {
      this.ngZone.run(() => {
        this.checked = value;
        this.ngChange(value);
        this.valueChange.emit(value);
        this.changeDetector.markForCheck();
      });
    }
  }
  set focused(value) {
    if (this.isFocused !== value && this.hostElement) {
      const wrapper = this.hostElement.nativeElement;
      if (value) {
        this.renderer.addClass(wrapper, FOCUSED$5);
      } else {
        this.renderer.removeClass(wrapper, FOCUSED$5);
      }
      this.isFocused = value;
    }
  }
  attachHostHandlers() {
    this.ngZone.runOutsideAngular(() => {
      const wrapper = this.hostElement.nativeElement;
      this.domSubscriptions.push(this.renderer.listen(wrapper, "click", this.clickHandler), this.renderer.listen(wrapper, "keydown", this.keyDownHandler));
      wrapper.addEventListener("focus", this.handleFocus, true);
      wrapper.addEventListener("blur", this.handleBlur, true);
    });
  }
  setHostClasses(value) {
    const wrapper = this.hostElement.nativeElement;
    if (value) {
      this.renderer.removeClass(wrapper, "k-switch-off");
      this.renderer.addClass(wrapper, "k-switch-on");
    } else {
      this.renderer.removeClass(wrapper, "k-switch-on");
      this.renderer.addClass(wrapper, "k-switch-off");
    }
  }
  handleClasses(value, input) {
    const elem = this.hostElement.nativeElement;
    const classes = getStylingClasses("switch", input, this[input], value);
    if (classes.toRemove) {
      this.renderer.removeClass(elem, classes.toRemove);
    }
    if (classes.toAdd) {
      this.renderer.addClass(elem, classes.toAdd);
    }
  }
  handleTrackClasses(value) {
    const track = this.track?.nativeElement;
    if (!track) {
      return;
    }
    const classes = getStylingClasses("switch", "rounded", this.trackRounded, value);
    if (classes.toRemove) {
      this.renderer.removeClass(track, classes.toRemove);
    }
    if (classes.toAdd) {
      this.renderer.addClass(track, classes.toAdd);
    }
  }
  handleThumbClasses(value) {
    const thumb = this.thumb?.nativeElement;
    if (!thumb) {
      return;
    }
    const classes = getStylingClasses("switch", "rounded", this.thumbRounded, value);
    if (classes.toRemove) {
      this.renderer.removeClass(thumb, classes.toRemove);
    }
    if (classes.toAdd) {
      this.renderer.addClass(thumb, classes.toAdd);
    }
  }
  static ɵfac = function SwitchComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SwitchComponent)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _SwitchComponent,
    selectors: [["kendo-switch"]],
    viewQuery: function SwitchComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c1, 7);
        ɵɵviewQuery(_c12, 7);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.track = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.thumb = _t.first);
      }
    },
    hostVars: 14,
    hostBindings: function SwitchComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("dir", ctx.direction)("role", ctx.hostRole)("id", ctx.hostId)("aria-checked", ctx.ariaChecked)("aria-invalid", ctx.ariaInvalid)("tabindex", ctx.hostTabIndex)("aria-disabled", ctx.ariaDisabled)("aria-readonly", ctx.ariaReadonly);
        ɵɵclassProp("k-readonly", ctx.readonly)("k-switch", ctx.hostClasses)("k-disabled", ctx.disabledClass);
      }
    },
    inputs: {
      focusableId: "focusableId",
      onLabel: "onLabel",
      offLabel: "offLabel",
      checked: "checked",
      disabled: "disabled",
      readonly: "readonly",
      tabindex: "tabindex",
      size: "size",
      thumbRounded: "thumbRounded",
      trackRounded: "trackRounded",
      tabIndex: "tabIndex"
    },
    outputs: {
      onFocus: "focus",
      onBlur: "blur",
      valueChange: "valueChange"
    },
    exportAs: ["kendoSwitch"],
    standalone: true,
    features: [ɵɵProvidersFeature([LocalizationService, {
      provide: L10N_PREFIX,
      useValue: "kendo.switch"
    }, {
      multi: true,
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _SwitchComponent)
      /* eslint-disable-line*/
    }, {
      provide: KendoInput,
      useExisting: forwardRef(() => _SwitchComponent)
    }]), ɵɵStandaloneFeature],
    decls: 10,
    vars: 8,
    consts: () => {
      let i18n_5;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_5 = goog.getMsg("ON");
        i18n_5 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_5;
      } else {
        i18n_5 = $localize`:kendo.switch.on|The **On** label of the Switch.:ON`;
      }
      let i18n_6;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_6 = goog.getMsg("OFF");
        i18n_6 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_6;
      } else {
        i18n_6 = $localize`:kendo.switch.off|The **Off** label of the Switch.:OFF`;
      }
      return [["track", ""], ["thumb", ""], ["kendoSwitchLocalizedMessages", "", "on", i18n_5, "off", i18n_6], [1, "k-switch-track"], [1, "k-switch-label-on"], [1, "k-switch-label-off"], [1, "k-switch-thumb-wrap"], [1, "k-switch-thumb"]];
    },
    template: function SwitchComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementContainerStart(0, 2);
        ɵɵelementStart(1, "span", 3, 0)(3, "span", 4);
        ɵɵtext(4);
        ɵɵelementEnd();
        ɵɵelementStart(5, "span", 5);
        ɵɵtext(6);
        ɵɵelementEnd()();
        ɵɵelementStart(7, "span", 6);
        ɵɵelement(8, "span", 7, 1);
        ɵɵelementEnd();
        ɵɵelementContainerEnd();
      }
      if (rf & 2) {
        ɵɵadvance();
        ɵɵstyleProp("transition-duration", ctx.initialized ? "200ms" : "0ms");
        ɵɵadvance(2);
        ɵɵattribute("aria-hidden", true);
        ɵɵadvance();
        ɵɵtextInterpolate(ctx.onLabelMessage);
        ɵɵadvance();
        ɵɵattribute("aria-hidden", true);
        ɵɵadvance();
        ɵɵtextInterpolate(ctx.offLabelMessage);
        ɵɵadvance();
        ɵɵstyleProp("transition-duration", ctx.initialized ? "200ms" : "0ms");
      }
    },
    dependencies: [LocalizedSwitchMessagesDirective],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SwitchComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoSwitch",
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.switch"
      }, {
        multi: true,
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => SwitchComponent)
        /* eslint-disable-line*/
      }, {
        provide: KendoInput,
        useExisting: forwardRef(() => SwitchComponent)
      }],
      selector: "kendo-switch",
      template: `
        <ng-container kendoSwitchLocalizedMessages
            i18n-on="kendo.switch.on|The **On** label of the Switch."
            on="ON"
            i18n-off="kendo.switch.off|The **Off** label of the Switch."
            off="OFF"
        >

        <span
            #track
            class="k-switch-track"
            [style.transitionDuration]="initialized ? '200ms' : '0ms'"
        >
            <span class="k-switch-label-on" [attr.aria-hidden]="true" >{{onLabelMessage}}</span>
            <span class="k-switch-label-off" [attr.aria-hidden]="true">{{offLabelMessage}}</span>
        </span>
        <span
            class="k-switch-thumb-wrap"
            [style.transitionDuration]="initialized ? '200ms' : '0ms'">
            <span #thumb class="k-switch-thumb"></span>
        </span>
  `,
      standalone: true,
      imports: [LocalizedSwitchMessagesDirective]
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: LocalizationService
  }, {
    type: Injector
  }, {
    type: ChangeDetectorRef
  }, {
    type: NgZone
  }], {
    focusableId: [{
      type: Input
    }],
    onLabel: [{
      type: Input
    }],
    offLabel: [{
      type: Input
    }],
    checked: [{
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
    tabindex: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    thumbRounded: [{
      type: Input
    }],
    trackRounded: [{
      type: Input
    }],
    tabIndex: [{
      type: Input
    }],
    onFocus: [{
      type: Output,
      args: ["focus"]
    }],
    onBlur: [{
      type: Output,
      args: ["blur"]
    }],
    valueChange: [{
      type: Output
    }],
    direction: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    hostRole: [{
      type: HostBinding,
      args: ["attr.role"]
    }],
    hostId: [{
      type: HostBinding,
      args: ["attr.id"]
    }],
    ariaChecked: [{
      type: HostBinding,
      args: ["attr.aria-checked"]
    }],
    ariaInvalid: [{
      type: HostBinding,
      args: ["attr.aria-invalid"]
    }],
    hostTabIndex: [{
      type: HostBinding,
      args: ["attr.tabindex"]
    }],
    ariaDisabled: [{
      type: HostBinding,
      args: ["attr.aria-disabled"]
    }],
    ariaReadonly: [{
      type: HostBinding,
      args: ["attr.aria-readonly"]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class.k-switch"]
    }],
    disabledClass: [{
      type: HostBinding,
      args: ["class.k-disabled"]
    }],
    track: [{
      type: ViewChild,
      args: ["track", {
        static: true
      }]
    }],
    thumb: [{
      type: ViewChild,
      args: ["thumb", {
        static: true
      }]
    }]
  });
})();
var TextBoxDirective = class _TextBoxDirective {
  renderer;
  inputElement;
  ngZone;
  hostClasses = true;
  /**
   * @hidden
   */
  onFocus = new EventEmitter();
  /**
   * @hidden
   */
  onBlur = new EventEmitter();
  /**
   * @hidden
   */
  onValueChange = new EventEmitter();
  /**
   * @hidden
   */
  autoFillStart = new EventEmitter();
  /**
   * @hidden
   */
  autoFillEnd = new EventEmitter();
  /**
   * @hidden
   */
  set value(text) {
    if (!this.inputElement) {
      return;
    }
    this.inputElement.nativeElement.value = text === void 0 || text === null ? "" : text;
    this.onValueChange.emit();
  }
  /**
   * @hidden
   */
  get value() {
    return this.inputElement.nativeElement.value;
  }
  get id() {
    return this.inputElement.nativeElement.id;
  }
  set id(id) {
    this.renderer.setAttribute(this.inputElement.nativeElement, "id", id);
  }
  listeners = [];
  constructor(renderer, inputElement, ngZone) {
    this.renderer = renderer;
    this.inputElement = inputElement;
    this.ngZone = ngZone;
  }
  ngAfterViewInit() {
    const input = this.inputElement.nativeElement;
    this.listeners = [this.renderer.listen(input, "focus", () => this.onFocus.emit()), this.renderer.listen(input, "blur", () => this.onBlur.emit())];
    this.ngZone.runOutsideAngular(() => {
      this.listeners.push(this.renderer.listen(input, "animationstart", (e) => {
        if (e.animationName === "autoFillStart") {
          this.autoFillStart.emit();
        } else if (e.animationName === "autoFillEnd") {
          this.autoFillEnd.emit();
        }
      }));
    });
  }
  ngOnDestroy() {
    this.listeners.forEach((listener) => listener());
  }
  static ɵfac = function TextBoxDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TextBoxDirective)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _TextBoxDirective,
    selectors: [["input", "kendoTextBox", ""]],
    hostVars: 10,
    hostBindings: function TextBoxDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("k-textbox", ctx.hostClasses)("k-input", ctx.hostClasses)("k-input-md", ctx.hostClasses)("k-rounded-md", ctx.hostClasses)("k-input-solid", ctx.hostClasses);
      }
    },
    inputs: {
      value: "value"
    },
    standalone: true,
    features: [ɵɵProvidersFeature([{
      provide: KendoInput,
      useExisting: forwardRef(() => _TextBoxDirective)
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextBoxDirective, [{
    type: Directive,
    args: [{
      selector: "input[kendoTextBox]",
      providers: [{
        provide: KendoInput,
        useExisting: forwardRef(() => TextBoxDirective)
      }],
      standalone: true
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    hostClasses: [{
      type: HostBinding,
      args: ["class.k-textbox"]
    }, {
      type: HostBinding,
      args: ["class.k-input"]
    }, {
      type: HostBinding,
      args: ["class.k-input-md"]
    }, {
      type: HostBinding,
      args: ["class.k-rounded-md"]
    }, {
      type: HostBinding,
      args: ["class.k-input-solid"]
    }],
    value: [{
      type: Input
    }]
  });
})();
var TextAreaDirective = class _TextAreaDirective {
  renderer;
  element;
  zone;
  changeDetector;
  injector;
  elementClasses = true;
  autofillClass = true;
  direction;
  /**
   * Fires when the TextArea value changes.
   */
  valueChange = new EventEmitter();
  /**
   * Sets whether the `textarea` element resizes its height automatically
   * ([see example](slug:textarea_sizing#toc-auto-resizing)).
   *
   * @default false
   */
  autoSize = false;
  /**
   * Sets the textarea value.
   */
  value;
  /**
   * @hidden
   */
  onFocus = new EventEmitter();
  /**
   * @hidden
   */
  onBlur = new EventEmitter();
  /**
   * @hidden
   */
  onValueChange = new EventEmitter();
  /**
   * @hidden
   */
  autoFillStart = new EventEmitter();
  /**
   * @hidden
   */
  autoFillEnd = new EventEmitter();
  get id() {
    return this.element.nativeElement.id;
  }
  set id(id) {
    this.renderer.setAttribute(this.element.nativeElement, "id", id);
  }
  listeners = [];
  inputSubscription;
  initialHeight;
  control;
  resizeSubscription;
  resizeObserver;
  constructor(renderer, element, zone, changeDetector, injector, rtl) {
    this.renderer = renderer;
    this.element = element;
    this.zone = zone;
    this.changeDetector = changeDetector;
    this.injector = injector;
    this.direction = rtl ? "rtl" : "ltr";
  }
  /**
   * @hidden
   */
  writeValue(value) {
    this.elementValue = value;
    this.resize();
  }
  /**
   * @hidden
   */
  registerOnChange(fn) {
    this.ngChange = fn;
  }
  /**
   * @hidden
   */
  registerOnTouched(fn) {
    this.ngTouched = fn;
  }
  /**
   * @hidden
   */
  setDisabledState(isDisabled) {
    this.setElementProperty("disabled", isDisabled);
  }
  ngOnInit() {
    const element = this.element.nativeElement;
    this.zone.runOutsideAngular(() => {
      this.listeners = [this.renderer.listen(element, "focus", this.handleFocus.bind(this)), this.renderer.listen(element, "blur", this.handleBlur.bind(this)), this.renderer.listen(element, "animationstart", (e) => {
        if (e.animationName === "autoFillStart") {
          this.autoFillStart.emit();
        } else if (e.animationName === "autoFillEnd") {
          this.autoFillEnd.emit();
        }
      })];
      if (isDocumentAvailable() && this.autoSize) {
        this.resizeSubscription = fromEvent(window, "resize").pipe(debounceTime(50)).subscribe(() => this.resize());
        this.attachResizeObserver();
      }
      this.inputSubscription = fromEvent(element, "input").subscribe(this.handleInput.bind(this));
    });
    this.control = this.injector.get(NgControl, null);
  }
  ngOnChanges(changes) {
    const element = this.element.nativeElement;
    if (changes.value) {
      this.elementValue = this.value;
    }
    if (changes.autoSize) {
      if (this.autoSize) {
        this.initialHeight = element.offsetHeight;
        this.renderer.setStyle(element, "resize", "none");
      } else {
        this.renderer.setStyle(element, "overflow-y", "auto");
        this.renderer.setStyle(element, "resize", "both");
        element.style.height = `${this.initialHeight}px`;
      }
    }
    this.zone.onStable.pipe(take(1)).subscribe(() => this.resize());
  }
  ngOnDestroy() {
    this.listeners.forEach((listener) => listener());
    if (this.inputSubscription) {
      this.inputSubscription.unsubscribe();
    }
    if (this.resizeSubscription) {
      this.resizeSubscription.unsubscribe();
    }
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }
  ngChange = (_) => {
  };
  ngTouched = () => {
  };
  get elementValue() {
    if (this.element) {
      return this.element.nativeElement.value;
    }
    return "";
  }
  set elementValue(value) {
    this.setElementProperty("value", value === void 0 || value === null ? "" : value);
  }
  setElementProperty(name, value) {
    if (this.element) {
      this.renderer.setProperty(this.element.nativeElement, name, value);
    }
  }
  attachResizeObserver() {
    if (typeof ResizeObserver === "undefined" || !this.element?.nativeElement) {
      return;
    }
    this.zone.runOutsideAngular(() => {
      this.resizeObserver = new ResizeObserver(() => this.resize());
      this.resizeObserver.observe(this.element.nativeElement);
    });
  }
  resize() {
    if (!this.autoSize) {
      return;
    }
    const element = this.element.nativeElement;
    this.renderer.setStyle(element, "overflow-y", "hidden");
    element.style.height = `${this.initialHeight}px`;
    const scrollHeight = element.scrollHeight;
    if (scrollHeight > this.initialHeight) {
      element.style.height = `${scrollHeight}px`;
    }
  }
  handleInput() {
    const value = this.elementValue;
    this.value = value;
    if (this.control || hasObservers(this.onValueChange) || hasObservers(this.valueChange)) {
      this.zone.run(() => {
        this.ngChange(value);
        this.onValueChange.emit(value);
        this.valueChange.emit(value);
        this.changeDetector.markForCheck();
      });
    }
    this.resize();
  }
  handleFocus() {
    if (hasObservers(this.onFocus)) {
      this.zone.run(() => {
        this.onFocus.emit();
      });
    }
  }
  handleBlur() {
    if (hasObservers(this.onBlur) || requiresZoneOnBlur(this.control)) {
      this.zone.run(() => {
        this.ngTouched();
        this.onBlur.emit();
        this.changeDetector.markForCheck();
      });
    }
  }
  static ɵfac = function TextAreaDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TextAreaDirective)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(RTL, 8));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _TextAreaDirective,
    selectors: [["textarea", "kendoTextArea", ""]],
    hostVars: 13,
    hostBindings: function TextAreaDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("dir", ctx.direction);
        ɵɵclassProp("k-textarea", ctx.elementClasses)("k-input", ctx.elementClasses)("k-input-md", ctx.elementClasses)("k-rounded-md", ctx.elementClasses)("k-input-solid", ctx.elementClasses)("k-autofill", ctx.autofillClass);
      }
    },
    inputs: {
      autoSize: "autoSize",
      value: "value"
    },
    outputs: {
      valueChange: "valueChange"
    },
    standalone: true,
    features: [ɵɵProvidersFeature([{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _TextAreaDirective),
      multi: true
    }, {
      provide: KendoInput,
      useExisting: forwardRef(() => _TextAreaDirective)
    }]), ɵɵNgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextAreaDirective, [{
    type: Directive,
    args: [{
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => TextAreaDirective),
        multi: true
      }, {
        provide: KendoInput,
        useExisting: forwardRef(() => TextAreaDirective)
      }],
      selector: "textarea[kendoTextArea]",
      standalone: true
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }, {
    type: ChangeDetectorRef
  }, {
    type: Injector
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [RTL]
    }]
  }], {
    elementClasses: [{
      type: HostBinding,
      args: ["class.k-textarea"]
    }, {
      type: HostBinding,
      args: ["class.k-input"]
    }, {
      type: HostBinding,
      args: ["class.k-input-md"]
    }, {
      type: HostBinding,
      args: ["class.k-rounded-md"]
    }, {
      type: HostBinding,
      args: ["class.k-input-solid"]
    }],
    autofillClass: [{
      type: HostBinding,
      args: ["class.k-autofill"]
    }],
    direction: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    valueChange: [{
      type: Output
    }],
    autoSize: [{
      type: Input
    }],
    value: [{
      type: Input
    }]
  });
})();
var createMaxValidator = (maxValue) => {
  return (c) => {
    if (!isPresent2(maxValue) || !isPresent2(c.value) || c.value <= maxValue) {
      return null;
    }
    return {
      maxError: {
        maxValue,
        value: c.value
      }
    };
  };
};
var createMinValidator = (minValue) => {
  return (c) => {
    if (!isPresent2(minValue) || !isPresent2(c.value) || c.value >= minValue) {
      return null;
    }
    return {
      minError: {
        minValue,
        value: c.value
      }
    };
  };
};
var MIN_DOC_LINK = "https://www.telerik.com/kendo-angular-ui/components/inputs/api/NumericTextBoxComponent/#toc-min";
var MAX_DOC_LINK = "https://www.telerik.com/kendo-angular-ui/components/inputs/api/NumericTextBoxComponent/#toc-max";
var POINT = ".";
var INITIAL_SPIN_DELAY = 500;
var SPIN_DELAY = 50;
var EXPONENT_REGEX = /[eE][\-+]?([0-9]+)/;
var numericRegex = (options) => {
  const {
    autoCorrect,
    decimals,
    min
  } = options;
  let separator = options.separator;
  if (separator === POINT) {
    separator = "\\" + separator;
  }
  const signPattern = autoCorrect && min !== null && min >= 0 ? "" : "-?";
  let numberPattern;
  if (decimals === 0) {
    numberPattern = "\\d*";
  } else {
    numberPattern = `(?:(?:\\d+(${separator}\\d*)?)|(?:${separator}\\d*))?`;
  }
  return new RegExp(`^${signPattern}${numberPattern}$`);
};
var decimalPart = (value) => {
  return value >= 0 ? Math.floor(value) : Math.ceil(value);
};
var noop$1 = (_) => {
};
var defined = (value) => {
  return typeof value !== "undefined";
};
var isNumber = (value) => {
  return !isNaN(value) && value !== null;
};
function pad(value, digits) {
  const count = digits - String(value).length;
  let result = value;
  if (count > 0) {
    const padString = new Array(count + 1).join("0");
    result = parseFloat(value + padString);
  }
  return result;
}
var getDeltaFromMouseWheel = (e) => {
  let delta = 0;
  if (e.wheelDelta) {
    delta = e.wheelDelta / 120;
    delta = delta > 0 ? Math.ceil(delta) : Math.floor(delta);
  } else if (e.detail) {
    delta = Math.round(-e.detail / 3);
  }
  return delta;
};
var getCaretPosition = (element) => element.selectionStart;
var extractSignificantNumericChars = (formattedString, separator) => {
  const significantCharacters = `${separator}0123456789-`;
  return formattedString.split("").reduce((acc, curr) => significantCharacters.includes(curr) ? ++acc : acc, 0);
};
var isRightClick = (event) => {
  const isRightClickIE = event.button && event.button === 2;
  const isRightClickOther = event.which && event.which === 3;
  return isRightClickIE || isRightClickOther;
};
var ArrowDirection;
(function(ArrowDirection2) {
  ArrowDirection2[ArrowDirection2["Down"] = -1] = "Down";
  ArrowDirection2[ArrowDirection2["None"] = 0] = "None";
  ArrowDirection2[ArrowDirection2["Up"] = 1] = "Up";
})(ArrowDirection || (ArrowDirection = {}));
var InputSeparatorComponent = class _InputSeparatorComponent {
  /**
   * Sets the orientation of the separator. Use this for the adornments of the [`TextAreaComponent`](slug:api_inputs_textareacomponent).
   *
   * @default 'vertical'
   */
  orientation = "vertical";
  get vertical() {
    return this.orientation === "vertical";
  }
  get horizontal() {
    return this.orientation === "horizontal";
  }
  hostClass = true;
  static ɵfac = function InputSeparatorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InputSeparatorComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _InputSeparatorComponent,
    selectors: [["kendo-input-separator"], ["kendo-textbox-separator"]],
    hostVars: 6,
    hostBindings: function InputSeparatorComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("k-input-separator-vertical", ctx.vertical)("k-input-separator-horizontal", ctx.horizontal)("k-input-separator", ctx.hostClass);
      }
    },
    inputs: {
      orientation: "orientation"
    },
    standalone: true,
    features: [ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function InputSeparatorComponent_Template(rf, ctx) {
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputSeparatorComponent, [{
    type: Component,
    args: [{
      selector: "kendo-input-separator, kendo-textbox-separator",
      template: ``,
      standalone: true
    }]
  }], null, {
    orientation: [{
      type: Input
    }],
    vertical: [{
      type: HostBinding,
      args: ["class.k-input-separator-vertical"]
    }],
    horizontal: [{
      type: HostBinding,
      args: ["class.k-input-separator-horizontal"]
    }],
    hostClass: [{
      type: HostBinding,
      args: ["class.k-input-separator"]
    }]
  });
})();
var SharedInputEventsDirective = class _SharedInputEventsDirective {
  ngZone;
  renderer;
  cdr;
  hostElement;
  clearButtonClicked;
  isFocused;
  isFocusedChange = new EventEmitter();
  onFocus = new EventEmitter();
  handleBlur = new EventEmitter();
  subscriptions = new Subscription();
  constructor(ngZone, renderer, cdr) {
    this.ngZone = ngZone;
    this.renderer = renderer;
    this.cdr = cdr;
  }
  ngAfterViewInit() {
    const hostElement = this.hostElement.nativeElement;
    let cursorInsideWrapper = false;
    let tabbing = false;
    this.ngZone.runOutsideAngular(() => {
      this.subscriptions.add(this.renderer.listen(hostElement, "focusin", () => {
        this.cdr.detectChanges();
        if (!this.isFocused) {
          this.ngZone.run(() => {
            this.onFocus.emit();
            this.isFocused = true;
            this.isFocusedChange.emit(this.isFocused);
          });
        }
      }));
      this.subscriptions.add(this.renderer.listen(hostElement, "focusout", (args) => {
        if (!this.isFocused) {
          return;
        }
        if (tabbing) {
          const closestTextbox = closest2(args.relatedTarget, (element) => element === hostElement);
          if (!closestTextbox) {
            this.handleBlur.emit();
          }
          tabbing = false;
        } else {
          if (!cursorInsideWrapper && !this?.clearButtonClicked) {
            this.handleBlur.emit();
          }
        }
      }));
      this.subscriptions.add(this.renderer.listen(hostElement, "mouseenter", () => {
        cursorInsideWrapper = true;
      }));
      this.subscriptions.add(this.renderer.listen(hostElement, "mouseleave", () => {
        cursorInsideWrapper = false;
      }));
      this.subscriptions.add(this.renderer.listen(hostElement, "keydown", (args) => {
        if (args.code === Keys.Tab) {
          tabbing = true;
        } else {
          tabbing = false;
        }
      }));
    });
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  static ɵfac = function SharedInputEventsDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SharedInputEventsDirective)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ChangeDetectorRef));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _SharedInputEventsDirective,
    selectors: [["", "kendoInputSharedEvents", ""]],
    inputs: {
      hostElement: "hostElement",
      clearButtonClicked: "clearButtonClicked",
      isFocused: "isFocused"
    },
    outputs: {
      isFocusedChange: "isFocusedChange",
      onFocus: "onFocus",
      handleBlur: "handleBlur"
    },
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SharedInputEventsDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoInputSharedEvents]",
      standalone: true
    }]
  }], () => [{
    type: NgZone
  }, {
    type: Renderer2
  }, {
    type: ChangeDetectorRef
  }], {
    hostElement: [{
      type: Input
    }],
    clearButtonClicked: [{
      type: Input
    }],
    isFocused: [{
      type: Input
    }],
    isFocusedChange: [{
      type: Output
    }],
    onFocus: [{
      type: Output
    }],
    handleBlur: [{
      type: Output
    }]
  });
})();
var NumericTextBoxMessages = class _NumericTextBoxMessages extends ComponentMessages {
  /**
   * Sets the title of the **Decrement** button in the NumericTextBox.
   */
  decrement;
  /**
   * Sets the title of the **Increment** button in the NumericTextBox.
   */
  increment;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵNumericTextBoxMessages_BaseFactory;
    return function NumericTextBoxMessages_Factory(__ngFactoryType__) {
      return (ɵNumericTextBoxMessages_BaseFactory || (ɵNumericTextBoxMessages_BaseFactory = ɵɵgetInheritedFactory(_NumericTextBoxMessages)))(__ngFactoryType__ || _NumericTextBoxMessages);
    };
  })();
  static ɵdir = ɵɵdefineDirective({
    type: _NumericTextBoxMessages,
    selectors: [["kendo-numerictextbox-messages-base"]],
    inputs: {
      decrement: "decrement",
      increment: "increment"
    },
    features: [ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NumericTextBoxMessages, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "kendo-numerictextbox-messages-base"
    }]
  }], null, {
    decrement: [{
      type: Input
    }],
    increment: [{
      type: Input
    }]
  });
})();
var LocalizedNumericTextBoxMessagesDirective = class _LocalizedNumericTextBoxMessagesDirective extends NumericTextBoxMessages {
  service;
  constructor(service) {
    super();
    this.service = service;
  }
  static ɵfac = function LocalizedNumericTextBoxMessagesDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LocalizedNumericTextBoxMessagesDirective)(ɵɵdirectiveInject(LocalizationService));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _LocalizedNumericTextBoxMessagesDirective,
    selectors: [["", "kendoNumericTextBoxLocalizedMessages", ""]],
    standalone: true,
    features: [ɵɵProvidersFeature([{
      provide: NumericTextBoxMessages,
      useExisting: forwardRef(() => _LocalizedNumericTextBoxMessagesDirective)
    }]), ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LocalizedNumericTextBoxMessagesDirective, [{
    type: Directive,
    args: [{
      providers: [{
        provide: NumericTextBoxMessages,
        useExisting: forwardRef(() => LocalizedNumericTextBoxMessagesDirective)
      }],
      selector: "[kendoNumericTextBoxLocalizedMessages]",
      standalone: true
    }]
  }], () => [{
    type: LocalizationService
  }], null);
})();
var PARSABLE_OPTIONS = ["min", "max", "step", "decimals"];
var PARSABLE_DEFAULTS = {
  decimals: null,
  max: null,
  min: null,
  step: 1
};
var FOCUSED$4 = "k-focus";
var DEFAULT_SIZE$d = "medium";
var DEFAULT_ROUNDED$8 = "medium";
var DEFAULT_FILL_MODE$6 = "solid";
var NumericTextBoxComponent = class _NumericTextBoxComponent {
  intl;
  renderer;
  localizationService;
  injector;
  ngZone;
  changeDetector;
  hostElement;
  /**
   * @hidden
   */
  focusableId = `k-${guid()}`;
  /**
   * When `true`, disables the `NumericTextBox`.
   * To disable the component in reactive forms, see [Forms Support](slug:formssupport_numerictextbox#toc-managing-the-numerictextbox-disabled-state-in-reactive-forms).
   *
   * @default false
   */
  disabled = false;
  /**
   * When `true`, makes the NumericTextBox read-only.
   *
   * @default false
   */
  readonly = false;
  /**
   * Sets the `title` attribute of the input element.
   */
  title = "";
  /**
   * When `true`, the value is automatically corrected based on the minimum and maximum values ([see example]({% slug precision_numerictextbox %})).
   */
  autoCorrect = false;
  /**
   * Specifies the number format used when the NumericTextBox is not focused ([see example]({% slug formats_numerictextbox %})).
   * If `format` is `null` or `undefined`, the default format is used.
   */
  get format() {
    const format = this._format;
    return format !== null && format !== void 0 ? format : "n2";
  }
  set format(value) {
    this._format = value;
  }
  /**
   * Sets the maximum valid value ([see example]({% slug precision_numerictextbox %}#toc-value-ranges)).
   */
  max;
  /**
   * Sets the minimum valid value ([see example]({% slug precision_numerictextbox %}#toc-value-ranges)).
   */
  min;
  /**
   * Specifies the number of decimals the user can enter when the input is focused ([see example]({% slug precision_numerictextbox %})).
   */
  decimals = null;
  /**
   * Sets the input placeholder.
   */
  placeholder;
  /**
   * Specifies the value used to increment or decrement the component value ([see example]({% slug predefinedsteps_numerictextbox %})).
   *
   * @default 1
   */
  step = 1;
  /**
   * When `true`, renders the **Up** and **Down** spin buttons ([see example]({% slug spinbuttons_numerictextbox %})).
   *
   * @default true
   */
  spinners = true;
  /**
   * Enforces the built-in minimum and maximum validators during form validation.
   *
   * @default true
   */
  rangeValidation = true;
  /**
   * Sets the [`tabindex`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) of the component.
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
   * When `true`, enables changing the value with the mouse wheel.
   *
   * @default true
   */
  changeValueOnScroll = true;
  /**
   * When `true`, enables selecting the entire value on click.
   *
   * @default true
   */
  selectOnFocus = true;
  /**
   * Sets the value of the NumericTextBox ([see example]({% slug formats_numerictextbox %})).
   */
  value = null;
  /**
   * Sets the maximum number of characters the user can type or paste in the input.
   * The locale-specific decimal separator and negative sign (`-`) count toward the length.
   * The `maxlength` does not apply to the formatted value when the component is not focused.
   */
  maxlength;
  /**
   * Sets the padding of the internal input element ([see example]({% slug appearance_numerictextbox %}#toc-size)).
   *
   * @default 'medium'
   */
  set size(size) {
    const newSize = size || DEFAULT_SIZE$d;
    this.handleClasses(newSize, "size");
    this._size = newSize;
  }
  get size() {
    return this._size;
  }
  /**
   * Sets the border radius of the NumericTextBox ([see example](slug:appearance_numerictextbox#toc-roundness)).
   *
   * @default 'medium'
   */
  set rounded(rounded) {
    const newRounded = rounded || DEFAULT_ROUNDED$8;
    this.handleClasses(newRounded, "rounded");
    this._rounded = newRounded;
  }
  get rounded() {
    return this._rounded;
  }
  /**
   * Sets the background and border styles of the NumericTextBox ([see example](slug:appearance_numerictextbox#toc-fill-mode)).
   *
   * @default 'solid'
   */
  set fillMode(fillMode) {
    const newFillMode = fillMode || DEFAULT_FILL_MODE$6;
    this.handleClasses(newFillMode, "fillMode");
    this._fillMode = newFillMode;
  }
  get fillMode() {
    return this._fillMode;
  }
  /**
   * Sets HTML attributes on the inner input element.
   * The component ignores attributes that are essential for its functionality.
   */
  set inputAttributes(attributes) {
    if (isObjectPresent(this.parsedAttributes)) {
      removeHTMLAttributes(this.parsedAttributes, this.renderer, this.numericInput.nativeElement);
    }
    this._inputAttributes = attributes;
    this.parsedAttributes = this.inputAttributes ? parseAttributes(this.inputAttributes, this.defaultAttributes) : this.inputAttributes;
    this.setInputAttributes();
  }
  get inputAttributes() {
    return this._inputAttributes;
  }
  /**
   * Fires when the user selects a new value ([see example](slug:events_numerictextbox)).
   */
  valueChange = new EventEmitter();
  /**
   * Fires when the NumericTextBox element is focused ([see example](slug:events_numerictextbox)).
   */
  onFocus = new EventEmitter();
  /**
   * Fires when the `NumericTextBox` component gets blurred ([see example](slug:events_numerictextbox)).
   */
  onBlur = new EventEmitter();
  /**
   * Fires when the input element is focused.
   */
  inputFocus = new EventEmitter();
  /**
   * Fires when the input element gets blurred.
   */
  inputBlur = new EventEmitter();
  /**
   * @hidden
   */
  numericInput;
  /**
   * @hidden
   */
  suffixTemplate;
  /**
   * @hidden
   */
  prefixTemplate;
  direction;
  /**
   * @hidden
   */
  ArrowDirection = ArrowDirection;
  /**
   * @hidden
   */
  arrowDirection = ArrowDirection.None;
  get disableClass() {
    return this.disabled;
  }
  hostClasses = true;
  /**
   * @hidden
   */
  arrowUpIcon = caretAltUpIcon;
  /**
   * @hidden
   */
  arrowDownIcon = caretAltDownIcon;
  subscriptions;
  inputValue = "";
  spinTimeout;
  isFocused;
  minValidateFn = noop$1;
  maxValidateFn = noop$1;
  numericRegex;
  _format = "n2";
  previousSelection;
  pressedKey;
  control;
  isPasted = false;
  mouseDown = false;
  _size = "medium";
  _rounded = "medium";
  _fillMode = "solid";
  ngChange = noop$1;
  ngTouched = noop$1;
  ngValidatorChange = noop$1;
  domEvents = [];
  _inputAttributes;
  parsedAttributes = {};
  get defaultAttributes() {
    return {
      id: this.focusableId,
      disabled: this.disabled ? "" : null,
      readonly: this.readonly ? "" : null,
      tabindex: this.tabIndex,
      placeholder: this.placeholder,
      title: this.title,
      maxlength: this.maxlength,
      "aria-valuemin": this.min,
      "aria-valuemax": this.max,
      "aria-valuenow": this.value,
      required: this.isControlRequired ? "" : null,
      "aria-invalid": this.isControlInvalid
    };
  }
  get mutableAttributes() {
    return {
      autocomplete: "off",
      autocorrect: "off",
      role: "spinbutton"
    };
  }
  constructor(intl, renderer, localizationService, injector, ngZone, changeDetector, hostElement) {
    this.intl = intl;
    this.renderer = renderer;
    this.localizationService = localizationService;
    this.injector = injector;
    this.ngZone = ngZone;
    this.changeDetector = changeDetector;
    this.hostElement = hostElement;
    A(packageMetadata);
    this.direction = localizationService.rtl ? "rtl" : "ltr";
  }
  ngOnInit() {
    this.subscriptions = this.localizationService.changes.subscribe(({
      rtl
    }) => {
      this.direction = rtl ? "rtl" : "ltr";
    });
    this.subscriptions.add(this.intl.changes.subscribe(this.intlChange.bind(this)));
    if (this.hostElement) {
      this.renderer.removeAttribute(this.hostElement.nativeElement, "tabindex");
    }
    this.control = this.injector.get(NgControl, null);
    this.ngZone.runOutsideAngular(() => {
      this.domEvents.push(this.renderer.listen(this.hostElement.nativeElement, "mousewheel", this.handleWheel.bind(this)));
      this.domEvents.push(this.renderer.listen(this.hostElement.nativeElement, "DOMMouseScroll", this.handleWheel.bind(this)));
    });
  }
  ngAfterViewInit() {
    const stylingInputs = ["size", "rounded", "fillMode"];
    stylingInputs.forEach((input) => {
      this.handleClasses(this[input], input);
    });
  }
  /**
   * @hidden
   */
  increasePress = (e) => {
    this.arrowPress(ArrowDirection.Up, e);
  };
  /**
   * @hidden
   */
  decreasePress = (e) => {
    this.arrowPress(ArrowDirection.Down, e);
  };
  /**
   * @hidden
   */
  releaseArrow = () => {
    clearTimeout(this.spinTimeout);
    if (this.arrowDirection !== ArrowDirection.None) {
      this.arrowDirection = ArrowDirection.None;
      this.changeDetector.detectChanges();
    }
  };
  /**
   * @hidden
   */
  ngOnChanges(changes) {
    if (anyChanged(PARSABLE_OPTIONS, changes, false)) {
      this.parseOptions(PARSABLE_OPTIONS.filter((option) => changes[option]));
    }
    this.verifySettings();
    if (anyChanged(["min", "max", "rangeValidation"], changes, false)) {
      this.minValidateFn = this.rangeValidation ? createMinValidator(this.min) : noop$1;
      this.maxValidateFn = this.rangeValidation ? createMaxValidator(this.max) : noop$1;
      this.ngValidatorChange();
    }
    if (anyChanged(["autoCorrect", "decimals", "min"], changes)) {
      delete this.numericRegex;
    }
    if (anyChanged(["value", "format"], changes, false)) {
      this.verifyValue(this.value);
      this.value = this.restrictModelValue(this.value);
      if (!this.focused || this.intl.parseNumber(this.elementValue) !== this.value) {
        this.setInputValue();
      }
    }
  }
  /**
   * @hidden
   */
  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
    clearTimeout(this.spinTimeout);
    this.domEvents.forEach((unbindHandler) => unbindHandler());
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
    this.ngValidatorChange = fn;
  }
  /**
   * @hidden
   */
  writeValue(value) {
    this.verifyValue(value);
    const restrictedValue = this.restrictModelValue(value);
    this.value = restrictedValue;
    this.setInputValue();
  }
  /**
   * @hidden
   */
  registerOnChange(fn) {
    this.ngChange = fn;
  }
  /**
   * @hidden
   */
  registerOnTouched(fn) {
    this.ngTouched = fn;
  }
  /**
   * @hidden
   * Called when the status of the component changes to or from `disabled`.
   * Depending on the value, it enables or disables the appropriate DOM element.
   *
   * @param isDisabled
   */
  setDisabledState(isDisabled) {
    this.changeDetector.markForCheck();
    this.disabled = isDisabled;
  }
  /**
   * Focuses the NumericTextBox.
   */
  focus() {
    invokeElementMethod(this.numericInput, "focus");
  }
  /**
   * Blurs the NumericTextBox.
   */
  blur() {
    invokeElementMethod(this.numericInput, "blur");
  }
  /**
   * Notifies the NumericTextBoxComponent that the input value should be changed.
   * Can be used to update the input after setting the component properties directly.
   */
  notifyValueChange() {
    this.setInputValue();
  }
  /**
   * @hidden
   */
  handlePaste = () => {
    this.isPasted = true;
  };
  /**
   * @hidden
   */
  handleInput = () => {
    const input = this.numericInput.nativeElement;
    let {
      selectionStart,
      selectionEnd,
      value: inputValue
    } = input;
    if (this.pressedKey === Keys.NumpadDecimal) {
      inputValue = this.replaceNumpadDotValue();
    }
    if (this.isPasted) {
      inputValue = this.formatInputValue(this.intl.parseNumber(inputValue));
    }
    if (!this.isValid(inputValue)) {
      input.value = this.inputValue;
      this.setSelection(selectionStart - 1, selectionEnd - 1);
      return;
    }
    const parsedValue = this.intl.parseNumber(inputValue);
    let value = this.restrictDecimals(parsedValue);
    if (this.autoCorrect) {
      const limited = this.limitInputValue(value);
      value = limited.value;
      selectionStart = limited.selectionStart;
      selectionEnd = limited.selectionEnd;
    }
    if (parsedValue !== value || this.hasTrailingZeros(inputValue) || !this.focused) {
      this.setInputValue(value);
      this.setSelection(selectionStart, selectionEnd);
    } else {
      this.inputValue = inputValue;
    }
    if (this.isPasted) {
      input.value = this.inputValue;
    }
    this.updateValue(value);
    this.previousSelection = null;
    this.isPasted = false;
  };
  /**
   * @hidden
   */
  handleDragEnter = () => {
    if (!this.focused && !this.isDisabled) {
      this.setInputValue(this.value, true);
    }
  };
  /**
   * @hidden
   */
  handleMouseDown = () => {
    this.mouseDown = true;
  };
  /**
   * @hidden
   */
  handleInputFocus = () => {
    if (!this.focused) {
      this.focused = true;
      if (!this.isDisabled) {
        const shouldSelectAll = this.selectOnFocus || !this.mouseDown;
        this.ngZone.runOutsideAngular(() => {
          setTimeout(() => {
            if (shouldSelectAll) {
              this.selectAll();
            } else {
              this.selectCaret();
            }
          }, 0);
        });
      }
      if (hasObservers(this.onFocus)) {
        this.ngZone.run(() => {
          this.onFocus.emit();
        });
      }
    }
    this.mouseDown = false;
    if (hasObservers(this.inputFocus)) {
      this.ngZone.run(() => {
        this.inputFocus.emit();
      });
    }
  };
  /**
   * @hidden
   */
  handleFocus() {
    this.ngZone.run(() => {
      if (!this.focused && hasObservers(this.onFocus)) {
        this.onFocus.emit();
      }
      this.focused = true;
    });
  }
  /**
   * @hidden
   */
  handleBlur = () => {
    this.changeDetector.markForCheck();
    this.focused = false;
    if (this.inputValue !== this.elementValue) {
      this.handleInput();
    }
    this.setInputValue();
    if (hasObservers(this.onBlur)) {
      this.ngZone.run(() => {
        this.ngTouched();
        this.onBlur.emit();
      });
    }
  };
  /**
   * @hidden
   */
  handleInputBlur = () => {
    this.changeDetector.markForCheck();
    if (this.inputValue !== this.elementValue) {
      this.handleInput();
    }
    this.setInputValue();
    if (hasObservers(this.inputBlur) || requiresZoneOnBlur(this.control)) {
      this.ngZone.run(() => {
        this.ngTouched();
        this.inputBlur.emit();
      });
    }
  };
  /**
   * @hidden
   */
  handleKeyDown = (e) => {
    if (this.isDisabled) {
      return;
    }
    let step;
    const code = normalizeKeys(e);
    if (code === Keys.ArrowDown) {
      step = -1;
    } else if (code === Keys.ArrowUp) {
      step = 1;
    }
    if (step && this.step) {
      e.preventDefault();
      this.addStep(step);
    }
    const input = this.numericInput.nativeElement;
    this.previousSelection = {
      end: input.selectionEnd,
      start: input.selectionStart
    };
    this.pressedKey = code;
  };
  /**
   * @hidden
   */
  handleWheel = (e) => {
    if (this.focused && !this.isDisabled && this.changeValueOnScroll) {
      e.preventDefault();
      const delta = getDeltaFromMouseWheel(e);
      this.addStep(delta);
    }
  };
  /**
   * @hidden
   */
  get incrementTitle() {
    return this.localizationService.get("increment");
  }
  /**
   * @hidden
   */
  get decrementTitle() {
    return this.localizationService.get("decrement");
  }
  /**
   * @hidden
   */
  get isControlInvalid() {
    return this.control && this.control.touched && !this.control.valid;
  }
  /**
   * @hidden
   */
  get isControlRequired() {
    return isControlRequired(this.control?.control);
  }
  /**
   * @hidden
   */
  get focused() {
    return this.isFocused;
  }
  /**
   * @hidden
   */
  set focused(value) {
    if (this.isFocused !== value && this.hostElement) {
      const wrap = this.hostElement.nativeElement;
      if (value) {
        this.renderer.addClass(wrap, FOCUSED$4);
      } else {
        this.renderer.removeClass(wrap, FOCUSED$4);
      }
      this.isFocused = value;
    }
  }
  get decimalSeparator() {
    const numberSymbols = this.intl.numberSymbols();
    return numberSymbols.decimal;
  }
  get elementValue() {
    return this.numericInput.nativeElement.value;
  }
  set elementValue(value) {
    this.renderer.setProperty(this.numericInput.nativeElement, "value", value);
  }
  get hasDecimals() {
    return this.decimals !== null && this.decimals >= 0;
  }
  get isDisabled() {
    return this.disabled || this.readonly;
  }
  arrowPress(direction, e) {
    e.preventDefault();
    if (this.isDisabled || isRightClick(e)) {
      return;
    }
    if (!mobileOS) {
      this.focus();
      this.focused = true;
    }
    if (this.arrowDirection !== direction) {
      this.arrowDirection = direction;
      this.changeDetector.detectChanges();
    }
    if (this.step) {
      this.spin(direction, INITIAL_SPIN_DELAY);
    } else {
      this.setInputValue();
    }
  }
  updateValue(value) {
    if (!areSame(this.value, value)) {
      this.ngZone.run(() => {
        this.value = value;
        this.ngChange(value);
        this.valueChange.emit(value);
        this.changeDetector.markForCheck();
      });
    }
  }
  replaceNumpadDotValue() {
    let value = this.inputValue || "";
    if (this.previousSelection) {
      const input = this.numericInput.nativeElement;
      const {
        selectionStart,
        selectionEnd
      } = input;
      const {
        start,
        end
      } = this.previousSelection;
      input.value = value = value.substring(0, start) + this.decimalSeparator + value.substring(end);
      this.setSelection(selectionStart, selectionEnd);
    }
    return value;
  }
  isValid(value) {
    if (!this.numericRegex) {
      this.numericRegex = numericRegex({
        autoCorrect: this.autoCorrect,
        decimals: this.decimals,
        min: this.min,
        separator: this.decimalSeparator
      });
    }
    return this.numericRegex.test(value);
  }
  spin(step, timeout) {
    clearTimeout(this.spinTimeout);
    this.spinTimeout = window.setTimeout(() => {
      this.spin(step, SPIN_DELAY);
    }, timeout);
    this.addStep(step);
  }
  addStep(step) {
    let value = add(this.value || 0, this.step * step);
    value = this.limitValue(value);
    value = this.restrictDecimals(value);
    this.setInputValue(value);
    this.updateValue(value);
  }
  setSelection(start, end) {
    if (this.focused) {
      invokeElementMethod(this.numericInput, "setSelectionRange", start, end);
    }
  }
  limitValue(value) {
    let result = value;
    if (!this.isInRange(value)) {
      if (isNumber(this.max) && value > this.max) {
        result = this.max;
      }
      if (isNumber(this.min) && value < this.min) {
        result = this.min;
      }
    }
    return result;
  }
  limitInputValue(value) {
    const {
      selectionStart,
      selectionEnd,
      value: enteredValue
    } = this.numericInput.nativeElement;
    let limitedValue = value;
    let selectToEnd = false;
    if (!this.isInRange(value)) {
      const lengthChange = enteredValue.length - String(this.inputValue).length;
      const {
        min,
        max
      } = this;
      const hasMax = isNumber(max);
      const hasMin = isNumber(min);
      let padLimit, replaceNext;
      let correctedValue = value;
      if (selectionStart === 0 && this.inputValue.substr(1) === enteredValue) {
        return {
          selectionEnd,
          selectionStart,
          value: null
        };
      }
      if (hasMax && value > max) {
        if (value > 0) {
          replaceNext = true;
        } else {
          padLimit = max;
        }
      } else if (hasMin && value < min) {
        if (value > 0) {
          padLimit = min;
        } else {
          replaceNext = true;
        }
      }
      if (padLimit) {
        const paddedValue = this.tryPadValue(value, padLimit);
        if (paddedValue && decimalPart(value) !== decimalPart(padLimit)) {
          correctedValue = paddedValue;
          selectToEnd = true;
        }
      } else if (replaceNext) {
        if (this.inputValue && selectionStart !== enteredValue.length) {
          correctedValue = parseFloat(enteredValue.substr(0, selectionStart) + enteredValue.substr(selectionStart + lengthChange));
        }
      }
      limitedValue = this.limitValue(correctedValue);
      selectToEnd = (selectToEnd || limitedValue !== correctedValue) && this.previousSelection && this.previousSelection.end - this.previousSelection.start + lengthChange > 0;
    }
    return {
      selectionEnd: selectToEnd ? String(limitedValue).length : selectionEnd,
      selectionStart,
      value: limitedValue
    };
  }
  tryPadValue(value, limit) {
    const limitLength = String(Math.floor(limit)).length;
    const zeroPadded = pad(value, limitLength);
    const zeroPaddedNext = pad(value, limitLength + 1);
    let result;
    if (this.isInRange(zeroPadded)) {
      result = zeroPadded;
    } else if (this.isInRange(zeroPaddedNext)) {
      result = zeroPaddedNext;
    }
    return result;
  }
  isInRange(value) {
    return !isNumber(value) || (!isNumber(this.min) || this.min <= value) && (!isNumber(this.max) || value <= this.max);
  }
  restrictModelValue(value) {
    let result = this.restrictDecimals(value, true);
    if (this.autoCorrect && this.limitValue(result) !== result) {
      result = null;
    }
    return result;
  }
  restrictDecimals(value, round) {
    let result = value;
    if (value && this.hasDecimals) {
      const decimals = this.decimals;
      const stringValue = String(value);
      if (round || EXPONENT_REGEX.test(stringValue)) {
        result = toFixedPrecision(value, decimals);
      } else {
        const parts = stringValue.split(POINT);
        let fraction = parts[1];
        if (fraction && fraction.length > decimals) {
          fraction = fraction.substr(0, decimals);
          result = parseFloat(`${parts[0]}${POINT}${fraction}`);
        }
      }
    }
    return result;
  }
  formatInputValue(value) {
    let stringValue = Object.is(value, -0) ? "-0" : String(value);
    const exponentMatch = EXPONENT_REGEX.exec(stringValue);
    if (exponentMatch) {
      stringValue = value.toFixed(limitPrecision(parseInt(exponentMatch[1], 10)));
    }
    return stringValue.replace(POINT, this.decimalSeparator);
  }
  formatValue(value, focused) {
    let formattedValue;
    if (value === null || !defined(value) || value === "") {
      formattedValue = "";
    } else if (focused && !this.readonly) {
      formattedValue = this.formatInputValue(value);
    } else {
      formattedValue = this.intl.formatNumber(value, this.format);
    }
    return formattedValue;
  }
  setInputValue(value = this.value, focused = this.focused) {
    const formattedValue = this.formatValue(value, focused);
    this.elementValue = formattedValue;
    this.inputValue = formattedValue;
  }
  verifySettings() {
    if (!isDevMode()) {
      return;
    }
    if (this.min !== null && this.max !== null && this.min > this.max) {
      throw new Error(`The max value should be bigger than the min. See ${MIN_DOC_LINK} and ${MAX_DOC_LINK}.`);
    }
  }
  verifyValue(value) {
    if (isDevMode() && value && typeof value !== "number") {
      throw new Error(`The NumericTextBox component requires value of type Number and ${JSON.stringify(value)} was set.`);
    }
  }
  parseOptions(options) {
    for (let idx = 0; idx < options.length; idx++) {
      const name = options[idx];
      const value = this[name];
      if (typeof value === "string") {
        const parsed = parseFloat(value);
        const valid = !isNaN(parsed);
        if (isDevMode() && !valid && value !== "") {
          throw new Error(`The NumericTextBox component requires value of type Number or a String representing a number for the ${name} property and ${JSON.stringify(value)} was set.`);
        }
        this[name] = valid ? parsed : PARSABLE_DEFAULTS[name];
      }
    }
  }
  intlChange() {
    delete this.numericRegex;
    if (this.numericInput && (!this.focused || !this.isValid(this.elementValue))) {
      this.setInputValue();
    }
  }
  hasTrailingZeros(inputValue) {
    if (this.hasDecimals && this.focused) {
      const fraction = inputValue.split(this.decimalSeparator)[1];
      return fraction && fraction.length > this.decimals && fraction.lastIndexOf("0") === fraction.length - 1;
    }
  }
  selectAll() {
    this.setInputValue();
    this.setSelection(0, this.inputValue.length);
  }
  selectCaret() {
    const caretPosition = getCaretPosition(this.numericInput.nativeElement);
    const formattedValue = this.elementValue;
    const partialValue = formattedValue.substring(0, caretPosition);
    this.setInputValue();
    if (partialValue.length) {
      const significantCharsInFormattedValue = extractSignificantNumericChars(partialValue, this.decimalSeparator);
      const adjustedSignificantChars = this.adjustSignificantChars(formattedValue, significantCharsInFormattedValue);
      this.setSelection(adjustedSignificantChars, adjustedSignificantChars);
    } else {
      this.setSelection(0, 0);
    }
  }
  numberOfLeadingZeroes(formattedValue) {
    const separatorIndex = formattedValue.indexOf(this.decimalSeparator);
    const matchedLeadingZeroes = formattedValue.match(/^[^1-9]*?(0+)/);
    if (matchedLeadingZeroes) {
      const lengthOfMatch = matchedLeadingZeroes[0].length;
      const lengthOfLeadingZeroesMatch = matchedLeadingZeroes[1].length;
      return lengthOfMatch === separatorIndex ? lengthOfLeadingZeroesMatch - 1 : lengthOfLeadingZeroesMatch;
    }
    return 0;
  }
  adjustSignificantChars(formattedValue, significantChars) {
    const leadingZeroes = this.numberOfLeadingZeroes(formattedValue);
    if (leadingZeroes > 0) {
      return Math.max(0, significantChars - leadingZeroes);
    }
    return significantChars;
  }
  handleClasses(value, input) {
    const elem = this.hostElement.nativeElement;
    const classes = getStylingClasses("input", input, this[input], value);
    if (classes.toRemove) {
      this.renderer.removeClass(elem, classes.toRemove);
    }
    if (classes.toAdd) {
      this.renderer.addClass(elem, classes.toAdd);
    }
  }
  setInputAttributes() {
    const attributesToRender = Object.assign({}, this.mutableAttributes, this.parsedAttributes);
    setHTMLAttributes(attributesToRender, this.renderer, this.numericInput.nativeElement, this.ngZone);
  }
  static ɵfac = function NumericTextBoxComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NumericTextBoxComponent)(ɵɵdirectiveInject(IntlService), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NumericTextBoxComponent,
    selectors: [["kendo-numerictextbox"]],
    contentQueries: function NumericTextBoxComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, SuffixTemplateDirective, 5);
        ɵɵcontentQuery(dirIndex, PrefixTemplateDirective, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.suffixTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.prefixTemplate = _t.first);
      }
    },
    viewQuery: function NumericTextBoxComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c13, 7);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.numericInput = _t.first);
      }
    },
    hostVars: 9,
    hostBindings: function NumericTextBoxComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("dir", ctx.direction);
        ɵɵclassProp("k-readonly", ctx.readonly)("k-disabled", ctx.disableClass)("k-input", ctx.hostClasses)("k-numerictextbox", ctx.hostClasses);
      }
    },
    inputs: {
      focusableId: "focusableId",
      disabled: "disabled",
      readonly: "readonly",
      title: "title",
      autoCorrect: "autoCorrect",
      format: "format",
      max: "max",
      min: "min",
      decimals: "decimals",
      placeholder: "placeholder",
      step: "step",
      spinners: "spinners",
      rangeValidation: "rangeValidation",
      tabindex: "tabindex",
      tabIndex: "tabIndex",
      changeValueOnScroll: "changeValueOnScroll",
      selectOnFocus: "selectOnFocus",
      value: "value",
      maxlength: "maxlength",
      size: "size",
      rounded: "rounded",
      fillMode: "fillMode",
      inputAttributes: "inputAttributes"
    },
    outputs: {
      valueChange: "valueChange",
      onFocus: "focus",
      onBlur: "blur",
      inputFocus: "inputFocus",
      inputBlur: "inputBlur"
    },
    exportAs: ["kendoNumericTextBox"],
    standalone: true,
    features: [ɵɵProvidersFeature([LocalizationService, {
      provide: L10N_PREFIX,
      useValue: "kendo.numerictextbox"
    }, {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _NumericTextBoxComponent),
      multi: true
    }, {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => _NumericTextBoxComponent),
      multi: true
    }, {
      provide: KendoInput,
      useExisting: forwardRef(() => _NumericTextBoxComponent)
    }]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    decls: 9,
    vars: 28,
    consts: () => {
      let i18n_7;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_7 = goog.getMsg("Increase value");
        i18n_7 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_7;
      } else {
        i18n_7 = $localize`:kendo.numerictextbox.increment|The title for the **Increment** button in the NumericTextBox:Increase value`;
      }
      let i18n_8;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_8 = goog.getMsg("Decrease value");
        i18n_8 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_8;
      } else {
        i18n_8 = $localize`:kendo.numerictextbox.decrement|The title for the **Decrement** button in the NumericTextBox:Decrease value`;
      }
      return [["numericInput", ""], ["kendoNumericTextBoxLocalizedMessages", "", "increment", i18n_7, "decrement", i18n_8], ["kendoInputSharedEvents", "", 3, "isFocusedChange", "handleBlur", "onFocus", "hostElement", "isFocused"], [1, "k-input-prefix", "k-input-prefix-horizontal"], ["role", "spinbutton", "autocomplete", "off", "autocorrect", "off", 1, "k-input-inner", 3, "id", "tabindex", "disabled", "readonly", "kendoEventsOutsideAngular"], [1, "k-input-suffix", "k-input-suffix-horizontal"], [1, "k-input-spinner", "k-spin-button", 3, "kendoEventsOutsideAngular"], [3, "ngTemplateOutlet"], ["type", "button", "tabindex", "-1", 1, "k-spinner-increase", "k-button", "k-button-md", "k-icon-button", "k-button-solid", "k-button-solid-base", 3, "kendoEventsOutsideAngular", "title"], ["name", "caret-alt-up", "innerCssClass", "k-button-icon", 3, "svgIcon"], ["type", "button", "tabindex", "-1", 1, "k-spinner-decrease", "k-button", "k-button-md", "k-icon-button", "k-button-solid", "k-button-solid-base", 3, "kendoEventsOutsideAngular", "title"], ["name", "caret-alt-down", "innerCssClass", "k-button-icon", 3, "svgIcon"]];
    },
    template: function NumericTextBoxComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵelementContainer(0, 1);
        ɵɵelementContainerStart(1, 2);
        ɵɵtwoWayListener("isFocusedChange", function NumericTextBoxComponent_Template_ng_container_isFocusedChange_1_listener($event) {
          ɵɵrestoreView(_r1);
          ɵɵtwoWayBindingSet(ctx.focused, $event) || (ctx.focused = $event);
          return ɵɵresetView($event);
        });
        ɵɵlistener("handleBlur", function NumericTextBoxComponent_Template_ng_container_handleBlur_1_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.handleBlur());
        })("onFocus", function NumericTextBoxComponent_Template_ng_container_onFocus_1_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.handleFocus());
        });
        ɵɵtemplate(2, NumericTextBoxComponent_Conditional_2_Template, 2, 1, "span", 3)(3, NumericTextBoxComponent_Conditional_3_Template, 1, 0, "kendo-input-separator");
        ɵɵelement(4, "input", 4, 0);
        ɵɵtemplate(6, NumericTextBoxComponent_Conditional_6_Template, 1, 0, "kendo-input-separator")(7, NumericTextBoxComponent_Conditional_7_Template, 2, 1, "span", 5)(8, NumericTextBoxComponent_Conditional_8_Template, 5, 22, "span", 6);
        ɵɵelementContainerEnd();
      }
      if (rf & 2) {
        ɵɵadvance();
        ɵɵproperty("hostElement", ctx.hostElement);
        ɵɵtwoWayProperty("isFocused", ctx.focused);
        ɵɵadvance();
        ɵɵconditional(ctx.prefixTemplate ? 2 : -1);
        ɵɵadvance();
        ɵɵconditional(ctx.prefixTemplate && ctx.prefixTemplate.showSeparator ? 3 : -1);
        ɵɵadvance();
        ɵɵproperty("id", ctx.focusableId)("tabindex", ctx.tabIndex)("disabled", ctx.disabled)("readonly", ctx.readonly)("kendoEventsOutsideAngular", ɵɵpureFunction7(20, _c14, ctx.handleMouseDown, ctx.handleDragEnter, ctx.handleKeyDown, ctx.handleInput, ctx.handleInputFocus, ctx.handleInputBlur, ctx.handlePaste));
        ɵɵattribute("aria-valuemin", ctx.min)("aria-valuemax", ctx.max)("aria-valuenow", ctx.value)("title", ctx.title)("placeholder", ctx.placeholder)("maxLength", ctx.maxlength)("aria-invalid", ctx.isControlInvalid)("required", ctx.isControlRequired ? "" : null);
        ɵɵadvance(2);
        ɵɵconditional(ctx.suffixTemplate && (ctx.suffixTemplate == null ? null : ctx.suffixTemplate.showSeparator) ? 6 : -1);
        ɵɵadvance();
        ɵɵconditional(ctx.suffixTemplate ? 7 : -1);
        ɵɵadvance();
        ɵɵconditional(ctx.spinners ? 8 : -1);
      }
    },
    dependencies: [LocalizedNumericTextBoxMessagesDirective, SharedInputEventsDirective, NgTemplateOutlet, InputSeparatorComponent, EventsOutsideAngularDirective, IconWrapperComponent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NumericTextBoxComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoNumericTextBox",
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.numerictextbox"
      }, {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => NumericTextBoxComponent),
        multi: true
      }, {
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => NumericTextBoxComponent),
        multi: true
      }, {
        provide: KendoInput,
        useExisting: forwardRef(() => NumericTextBoxComponent)
      }],
      selector: "kendo-numerictextbox",
      template: `
        <ng-container kendoNumericTextBoxLocalizedMessages
          i18n-increment="kendo.numerictextbox.increment|The title for the **Increment** button in the NumericTextBox"
          increment="Increase value"
          i18n-decrement="kendo.numerictextbox.decrement|The title for the **Decrement** button in the NumericTextBox"
          decrement="Decrease value"
          >
        </ng-container>
        <ng-container
          kendoInputSharedEvents
          [hostElement]="hostElement"
          [(isFocused)]="focused"
          (handleBlur)="handleBlur()"
          (onFocus)="handleFocus()"
          >
          @if (prefixTemplate) {
            <span class="k-input-prefix k-input-prefix-horizontal">
              <ng-template [ngTemplateOutlet]="prefixTemplate?.templateRef">
              </ng-template>
            </span>
          }
          @if (prefixTemplate && prefixTemplate.showSeparator) {
            <kendo-input-separator></kendo-input-separator>
          }
          <input #numericInput
            class="k-input-inner"
            role="spinbutton"
            autocomplete="off"
            autocorrect="off"
            [id]="focusableId"
            [attr.aria-valuemin]="min"
            [attr.aria-valuemax]="max"
            [attr.aria-valuenow]="value"
            [attr.title]="title"
            [attr.placeholder]="placeholder"
            [attr.maxLength]="maxlength"
            [tabindex]="tabIndex"
            [disabled]="disabled"
            [readonly]="readonly"
            [attr.aria-invalid]="isControlInvalid"
            [attr.required]="isControlRequired ? '' : null"
                [kendoEventsOutsideAngular]="{
                    mousedown: handleMouseDown,
                    dragenter: handleDragEnter,
                    keydown: handleKeyDown,
                    input: handleInput,
                    focus: handleInputFocus,
                    blur: handleInputBlur,
                    paste: handlePaste
                }"/>
          @if (suffixTemplate && suffixTemplate?.showSeparator) {
            <kendo-input-separator></kendo-input-separator>
          }
          @if (suffixTemplate) {
            <span class="k-input-suffix k-input-suffix-horizontal">
              <ng-template [ngTemplateOutlet]="suffixTemplate?.templateRef">
              </ng-template>
            </span>
          }
          @if (spinners) {
            <span
              class="k-input-spinner k-spin-button"
              [kendoEventsOutsideAngular]="{ mouseup: releaseArrow, mouseleave: releaseArrow }"
              >
              <button
                type="button"
                [kendoEventsOutsideAngular]="{ mousedown: increasePress }"
                [attr.aria-hidden]="true"
                [attr.aria-label]="incrementTitle"
                [title]="incrementTitle"
                class="k-spinner-increase k-button k-button-md k-icon-button k-button-solid k-button-solid-base"
                [class.k-active]="arrowDirection === ArrowDirection.Up"
                tabindex="-1"
                >
                <kendo-icon-wrapper
                  name="caret-alt-up"
                  innerCssClass="k-button-icon"
                  [svgIcon]="arrowUpIcon"
                  >
                </kendo-icon-wrapper>
              </button>
              <button
                type="button"
                [kendoEventsOutsideAngular]="{ mousedown: decreasePress }"
                [attr.aria-hidden]="true"
                [attr.aria-label]="decrementTitle"
                [title]="decrementTitle"
                [class.k-active]="arrowDirection === ArrowDirection.Down"
                class="k-spinner-decrease k-button k-button-md k-icon-button k-button-solid k-button-solid-base"
                tabindex="-1"
                >
                <kendo-icon-wrapper
                  name="caret-alt-down"
                  innerCssClass="k-button-icon"
                  [svgIcon]="arrowDownIcon"
                  >
                </kendo-icon-wrapper>
              </button>
            </span>
          }
        </ng-container>
        `,
      standalone: true,
      imports: [LocalizedNumericTextBoxMessagesDirective, SharedInputEventsDirective, NgTemplateOutlet, InputSeparatorComponent, EventsOutsideAngularDirective, IconWrapperComponent]
    }]
  }], () => [{
    type: IntlService
  }, {
    type: Renderer2
  }, {
    type: LocalizationService
  }, {
    type: Injector
  }, {
    type: NgZone
  }, {
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }], {
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
    title: [{
      type: Input
    }],
    autoCorrect: [{
      type: Input
    }],
    format: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    min: [{
      type: Input
    }],
    decimals: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    step: [{
      type: Input
    }],
    spinners: [{
      type: Input
    }],
    rangeValidation: [{
      type: Input
    }],
    tabindex: [{
      type: Input
    }],
    tabIndex: [{
      type: Input
    }],
    changeValueOnScroll: [{
      type: Input
    }],
    selectOnFocus: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    maxlength: [{
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
    inputFocus: [{
      type: Output
    }],
    inputBlur: [{
      type: Output
    }],
    numericInput: [{
      type: ViewChild,
      args: ["numericInput", {
        static: true
      }]
    }],
    suffixTemplate: [{
      type: ContentChild,
      args: [SuffixTemplateDirective]
    }],
    prefixTemplate: [{
      type: ContentChild,
      args: [PrefixTemplateDirective]
    }],
    direction: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    disableClass: [{
      type: HostBinding,
      args: ["class.k-disabled"]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class.k-input"]
    }, {
      type: HostBinding,
      args: ["class.k-numerictextbox"]
    }]
  });
})();
var NumericTextBoxCustomMessagesComponent = class _NumericTextBoxCustomMessagesComponent extends NumericTextBoxMessages {
  service;
  constructor(service) {
    super();
    this.service = service;
  }
  get override() {
    return true;
  }
  static ɵfac = function NumericTextBoxCustomMessagesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NumericTextBoxCustomMessagesComponent)(ɵɵdirectiveInject(LocalizationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NumericTextBoxCustomMessagesComponent,
    selectors: [["kendo-numerictextbox-messages"]],
    standalone: true,
    features: [ɵɵProvidersFeature([{
      provide: NumericTextBoxMessages,
      useExisting: forwardRef(() => _NumericTextBoxCustomMessagesComponent)
    }]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function NumericTextBoxCustomMessagesComponent_Template(rf, ctx) {
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NumericTextBoxCustomMessagesComponent, [{
    type: Component,
    args: [{
      providers: [{
        provide: NumericTextBoxMessages,
        useExisting: forwardRef(() => NumericTextBoxCustomMessagesComponent)
      }],
      selector: "kendo-numerictextbox-messages",
      template: ``,
      standalone: true
    }]
  }], () => [{
    type: LocalizationService
  }], null);
})();
var ResultType2;
(function(ResultType3) {
  ResultType3[ResultType3["Literal"] = 0] = "Literal";
  ResultType3[ResultType3["Mask"] = 1] = "Mask";
  ResultType3[ResultType3["Undefined"] = 2] = "Undefined";
})(ResultType2 || (ResultType2 = {}));
var Result2 = class _Result {
  value;
  rest;
  type;
  constructor(value, rest, type = ResultType2.Undefined) {
    this.value = value;
    this.rest = rest;
    this.type = type;
  }
  //map :: Functor f => f a ~> (a -> b) -> f b
  map(fn) {
    return new _Result(fn(this.value), this.rest);
  }
  //chain :: Chain m => m a ~> (a -> m b) -> m b
  chain(fn) {
    return fn(this.value, this.rest);
  }
  fold(s, _) {
    return s(this.value, this.rest);
  }
  concat(r) {
    return this.map((vs, _) => r.chain((v, __) => vs.concat([v])));
  }
  toString() {
    return `Result({ value: '${this.value}', rest: ${this.rest} })`;
  }
};
var Stream2 = class {
  input;
  control;
  inputCursor = 0;
  controlCursor = 0;
  constructor(input = [], control = []) {
    this.input = input;
    this.control = control;
  }
  eof() {
    return this.inputCursor >= this.input.length;
  }
  // Get the first value from the input.
  next() {
    return {
      char: this.input[this.inputCursor++],
      control: this.control[this.controlCursor++]
    };
  }
  peek() {
    return {
      char: this.input[this.inputCursor],
      control: this.control[this.controlCursor]
    };
  }
  eat_input() {
    this.inputCursor++;
  }
  eat_control() {
    this.controlCursor++;
  }
  eat() {
    this.inputCursor++;
    this.controlCursor++;
  }
};
var toArray2 = (value) => (value || "").split("");
var ESCAPE_CHARACTER2 = "\\";
var Parser2 = class _Parser {
  parse;
  constructor(parse) {
    this.parse = parse;
  }
  run(input, control = "") {
    if (input instanceof Stream2) {
      return this.parse(input);
    } else {
      return this.parse(new Stream2(toArray2(input), toArray2(control)));
    }
  }
  //map :: Functor f => f a ~> (a -> b) -> f b
  map(f) {
    return new _Parser((stream) => this.parse(stream).map(f));
  }
  //chain :: Chain m => m a ~> (a -> m b) -> m b
  chain(f) {
    return new _Parser((stream) => this.parse(stream).chain((v, s) => f(v).run(s)));
  }
  isLiteral(c) {
    return this.run(c).type === ResultType2.Literal;
  }
};
var mask2 = ({
  prompt,
  promptPlaceholder
}) => (rule) => new Parser2((stream) => {
  while (!stream.eof()) {
    const {
      char,
      control
    } = stream.peek();
    if (char === control && control === prompt) {
      stream.eat();
      return new Result2(prompt, stream, ResultType2.Mask);
    }
    if (rule.test(char)) {
      stream.eat();
      return new Result2(char, stream, ResultType2.Mask);
    }
    if (char === promptPlaceholder) {
      stream.eat();
      return new Result2(prompt, stream, ResultType2.Mask);
    }
    stream.eat_input();
  }
  stream.eat();
  return new Result2(prompt, stream, ResultType2.Mask);
});
var literal2 = (_token) => new Parser2((stream) => {
  const char = stream.peek().char;
  if (char === _token) {
    stream.eat();
    return new Result2(_token, stream, ResultType2.Literal);
  }
  return new Result2(_token, stream, ResultType2.Literal);
});
var unmask2 = (prompt) => (rule) => new Parser2((stream) => {
  while (!stream.eof()) {
    const {
      char,
      control
    } = stream.peek();
    if (char === prompt && control === prompt) {
      stream.eat();
      return new Result2(char, stream);
    }
    if (rule.test(char)) {
      stream.eat();
      return new Result2(char, stream);
    }
    stream.eat_input();
  }
  stream.eat();
  return new Result2("", stream);
});
var unliteral2 = (_token) => new Parser2((stream) => {
  if (stream.eof()) {
    return new Result2("", stream);
  }
  const {
    char
  } = stream.peek();
  if (char === _token) {
    stream.eat();
  }
  return new Result2(_token, stream);
});
var token2 = (rules, creator) => new Parser2((stream) => {
  let {
    char
  } = stream.next();
  const rule = rules[char];
  if (char === ESCAPE_CHARACTER2) {
    char = stream.next().char;
    return new Result2(creator.literal(char), stream);
  }
  if (!rule) {
    return new Result2(creator.literal(char), stream);
  }
  return new Result2(creator.mask(rule), stream);
});
var rawMask2 = ({
  prompt,
  promptPlaceholder
}) => new Parser2((stream) => {
  const {
    char
  } = stream.next();
  if (char === prompt) {
    return new Result2(promptPlaceholder, stream);
  }
  return new Result2(char, stream);
});
var rawLiteral2 = (includeLiterals) => new Parser2((stream) => {
  const {
    char
  } = stream.next();
  if (includeLiterals) {
    return new Result2(char, stream);
  }
  return new Result2("", stream);
});
var always2 = (value) => new Parser2((stream) => new Result2(value, stream));
var append2 = (p1, p2) => p1.chain((vs) => p2.map((v) => vs.concat([v])));
var sequence2 = (list) => list.reduce((acc, parser) => append2(acc, parser), always2([]));
var greedy2 = (parser) => new Parser2((stream) => {
  let result = new Result2([], stream);
  while (!stream.eof()) {
    result = result.concat(parser.run(stream));
  }
  return result;
});
var MaskingService2 = class _MaskingService {
  rules = {};
  prompt = "_";
  mask = "";
  promptPlaceholder = " ";
  includeLiterals = false;
  maskTokens = [];
  unmaskTokens = [];
  rawTokens = [];
  validationTokens = [];
  update({
    mask: mask3 = "",
    prompt = "",
    promptPlaceholder = " ",
    rules = {},
    includeLiterals = false
  }) {
    this.mask = mask3;
    this.prompt = prompt;
    this.promptPlaceholder = promptPlaceholder;
    this.rules = rules;
    this.includeLiterals = includeLiterals;
    this.tokenize();
  }
  validationValue(maskedValue = "") {
    let value = maskedValue;
    sequence2(this.validationTokens).run(maskedValue).fold((unmasked) => {
      value = unmasked.join("");
    });
    return value;
  }
  rawValue(maskedValue = "") {
    let value = maskedValue;
    if (!this.rawTokens.length) {
      return value;
    }
    sequence2(this.rawTokens).run(maskedValue).fold((unmasked) => {
      value = unmasked.join("");
    });
    return value;
  }
  /**
   * @hidden
   */
  maskRaw(rawValue = "") {
    let value = rawValue;
    if (!this.maskTokens.length) {
      return value;
    }
    sequence2(this.maskTokens).run(rawValue).fold((masked) => {
      value = masked.join("");
    });
    return value;
  }
  maskInput(input, control, splitPoint) {
    if (input.length < control.length) {
      return this.maskRemoved(input, control, splitPoint);
    }
    return this.maskInserted(input, control, splitPoint);
  }
  maskInRange(pasted, oldValue, start, end) {
    let value = "";
    const selection = end;
    const beforeChange = oldValue.split("").slice(0, start);
    const afterChange = oldValue.split("").slice(end);
    sequence2(this.maskTokens.slice(start, end)).run(pasted).fold((masked) => {
      value = beforeChange.concat(masked).concat(afterChange).join("");
    });
    return {
      selection,
      value
    };
  }
  maskRemoved(input, control, splitPoint) {
    let value = "";
    let selection = splitPoint;
    const unchanged = input.split("").slice(splitPoint);
    const changed = input.split("").slice(0, splitPoint).join("");
    const take2 = this.maskTokens.length - (input.length - splitPoint);
    sequence2(this.maskTokens.slice(0, take2)).run(changed, control).fold((masked) => {
      selection = this.adjustPosition(masked, selection);
      value = masked.concat(unchanged).join("");
    });
    return {
      selection,
      value
    };
  }
  adjustPosition(input, selection) {
    const caretChar = input[selection];
    const isLiteral = this.maskTokens[selection].isLiteral(caretChar);
    if (!isLiteral && caretChar !== this.prompt) {
      return selection + 1;
    }
    return selection;
  }
  maskInserted(input, control, splitPoint) {
    let value = "";
    let selection = splitPoint;
    const changed = input.slice(0, splitPoint);
    sequence2(this.unmaskTokens).run(changed, control).chain((unmasked) => {
      selection = unmasked.join("").length;
      const unchanged = control.slice(selection);
      return sequence2(this.maskTokens).run(unmasked.join("") + unchanged, control);
    }).fold((masked) => {
      value = masked.join("");
    });
    return {
      selection,
      value
    };
  }
  get maskTokenCreator() {
    const {
      prompt,
      promptPlaceholder
    } = this;
    return {
      literal: (rule) => literal2(rule),
      mask: (rule) => mask2({
        prompt,
        promptPlaceholder
      })(rule)
    };
  }
  get unmaskTokenCreator() {
    return {
      literal: (rule) => unliteral2(rule),
      mask: (rule) => unmask2(this.prompt)(rule)
    };
  }
  get rawTokenCreator() {
    const {
      prompt,
      promptPlaceholder,
      includeLiterals
    } = this;
    return {
      literal: (_) => rawLiteral2(includeLiterals),
      mask: (_) => rawMask2({
        prompt,
        promptPlaceholder
      })
    };
  }
  get validationTokenCreator() {
    const {
      prompt
    } = this;
    return {
      literal: (_) => rawLiteral2(false),
      mask: (_) => rawMask2({
        prompt,
        promptPlaceholder: ""
      })
    };
  }
  tokenize() {
    greedy2(token2(this.rules, this.maskTokenCreator)).run(this.mask).fold((tokens, _) => {
      this.maskTokens = tokens;
    });
    greedy2(token2(this.rules, this.unmaskTokenCreator)).run(this.mask).fold((tokens, _) => {
      this.unmaskTokens = tokens;
    });
    greedy2(token2(this.rules, this.rawTokenCreator)).run(this.mask).fold((tokens, _) => {
      this.rawTokens = tokens;
    });
    greedy2(token2(this.rules, this.validationTokenCreator)).run(this.mask).fold((tokens, _) => {
      this.validationTokens = tokens;
    });
  }
  static ɵfac = function MaskingService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MaskingService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _MaskingService,
    factory: _MaskingService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MaskingService2, [{
    type: Injectable
  }], null, null);
})();
var resolvedPromise = Promise.resolve(null);
var FOCUSED$3 = "k-focus";
var DEFAULT_SIZE$c = "medium";
var DEFAULT_ROUNDED$7 = "medium";
var DEFAULT_FILL_MODE$5 = "solid";
var MaskedTextBoxComponent = class _MaskedTextBoxComponent {
  service;
  renderer;
  hostElement;
  ngZone;
  injector;
  changeDetector;
  /**
   * @hidden
   */
  focusableId = `k-${guid()}`;
  /**
   * Disables the MaskedTextBox when you set it to `true` ([see example]({% slug disabled_maskedtextbox %})).
   * To disable the component in reactive forms, see [Forms Support](slug:formssupport_maskedtextbox#toc-managing-the-maskedtextbox-disabled-state-in-reactive-forms).
   * @default false
   */
  disabled = false;
  /**
   * When `true`, sets the MaskedTextBox to read-only mode ([see example]({% slug readonly_maskedtextbox %})).
   * @default false
   */
  readonly = false;
  /**
   * Sets the `title` attribute of the input element.
   */
  title;
  /**
   * Sets the padding size of the MaskedTextBox input element ([see example]({% slug appearance_maskedtextbox %}#toc-size)).
   * @default 'medium'
   */
  set size(size) {
    const newSize = size || DEFAULT_SIZE$c;
    this.handleClasses(newSize, "size");
    this._size = newSize;
  }
  get size() {
    return this._size;
  }
  /**
   * Sets the border radius of the MaskedTextBox ([see example](slug:appearance_maskedtextbox#toc-roundness)).
   * @default 'medium'
   */
  set rounded(rounded) {
    const newRounded = rounded || DEFAULT_ROUNDED$7;
    this.handleClasses(newRounded, "rounded");
    this._rounded = newRounded;
  }
  get rounded() {
    return this._rounded;
  }
  /**
   * Sets the background and border style of the MaskedTextBox ([see example]({% slug appearance_maskedtextbox %}#toc-fill-mode)).
   * @default 'solid'
   */
  set fillMode(fillMode) {
    const newFillMode = fillMode || DEFAULT_FILL_MODE$5;
    this.handleClasses(newFillMode, "fillMode");
    this._fillMode = newFillMode;
  }
  get fillMode() {
    return this._fillMode;
  }
  /**
   * Sets the mask pattern for the MaskedTextBox ([see example]({% slug value_maskedtextbox %})).
   * If you do not set a mask, the component acts as a standard `type="text"` input.
   *
   * If the mask allows spaces, set the [`promptPlaceholder`]({% slug api_inputs_maskedtextboxcomponent %}#toc-promptplaceholder)
   * to a character that the mask does not accept.
   */
  mask;
  /**
   * Sets the value of the MaskedTextBox.
   */
  value;
  /**
   * Sets the RegExp-based mask validation rules ([see example]({% slug masks_maskedtextbox %})).
   */
  set rules(value) {
    this._rules = __spreadValues(__spreadValues({}, this.defaultRules), value);
  }
  get rules() {
    return this._rules || this.defaultRules;
  }
  /**
   * Sets the prompt character for the masked value.
   * @default `_`
   */
  prompt = "_";
  /**
   * Sets the character that represents an empty position in the raw value.
   * @default ' '
   */
  promptPlaceholder = " ";
  /**
   * When `true` includes literals in the raw value ([see example]({% slug value_maskedtextbox %})).
   * @default false
   */
  includeLiterals = false;
  /**
   * Shows the mask on focus when the value is empty.
   */
  maskOnFocus = false;
  /**
   * Enables the built-in mask validator when you set it to `true` ([see example]({% slug validation_maskedtextbox %})).
   * @default true
   */
  maskValidation = true;
  /**
   * Sets the [`tabindex`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) attribute of the component.
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
   * Sets HTML attributes for the inner input element.
   * You cannot change attributes that are essential for component functionality.
   */
  set inputAttributes(attributes) {
    if (isObjectPresent(this.parsedAttributes)) {
      removeHTMLAttributes(this.parsedAttributes, this.renderer, this.input.nativeElement);
    }
    this._inputAttributes = attributes;
    this.parsedAttributes = this.inputAttributes ? parseAttributes(this.inputAttributes, this.defaultAttributes) : this.inputAttributes;
    this.setInputAttributes();
  }
  get inputAttributes() {
    return this._inputAttributes;
  }
  get defaultAttributes() {
    return {
      id: this.focusableId,
      disabled: this.disabled ? "" : null,
      readonly: this.readonly ? "" : null,
      tabindex: this.tabIndex,
      "aria-invalid": this.isControlInvalid,
      title: this.title,
      required: this.isControlRequired ? "" : null
    };
  }
  get mutableAttributes() {
    return {
      "aria-placeholder": this.mask,
      autocomplete: "off",
      autocorrect: "off",
      autocapitalize: "off",
      spellcheck: "false"
    };
  }
  /**
   * Fires when the MaskedTextBox gets focused.
   *
   * To subscribe programmatically, use the `onFocus` property.
   *
   */
  onFocus = new EventEmitter();
  /**
   * Fires when the MaskedTextBox gets blurred.
   *
   * To subscribe programmatically, use the `onBlur` property.
   *
   */
  onBlur = new EventEmitter();
  /**
   * Fires when the input element gets focused.
   */
  inputFocus = new EventEmitter();
  /**
   * Fires when the input element gets blurred.
   */
  inputBlur = new EventEmitter();
  /**
   * Fires when the value changes.
   */
  valueChange = new EventEmitter();
  direction;
  hostClasses = true;
  get hostDisabledClass() {
    return this.disabled;
  }
  /**
   * Returns the `ElementRef` of the visible `input` element.
   */
  input;
  /**
   * @hidden
   */
  suffixTemplate;
  /**
   * @hidden
   */
  prefixTemplate;
  isFocused;
  maskedValue;
  focusClick = false;
  defaultRules = {
    "#": /[\d\s\+\-]/,
    "&": /[\S]/,
    "0": /[\d]/,
    "9": /[\d\s]/,
    "?": /[a-zA-Z\s]/,
    "A": /[a-zA-Z0-9]/,
    "C": /./,
    "L": /[a-zA-Z]/,
    "a": /[a-zA-Z0-9\s]/
  };
  _rules;
  isPasted = false;
  selection = [0, 0];
  control;
  _size = "medium";
  _rounded = "medium";
  _fillMode = "solid";
  _inputAttributes;
  parsedAttributes = {};
  constructor(service, renderer, hostElement, ngZone, injector, changeDetector, rtl) {
    this.service = service;
    this.renderer = renderer;
    this.hostElement = hostElement;
    this.ngZone = ngZone;
    this.injector = injector;
    this.changeDetector = changeDetector;
    A(packageMetadata);
    this.direction = rtl ? "rtl" : "ltr";
    this.updateService();
  }
  ngOnInit() {
    if (this.hostElement) {
      this.renderer.removeAttribute(this.hostElement.nativeElement, "tabindex");
    }
    this.control = this.injector.get(NgControl, null);
  }
  ngAfterViewInit() {
    const stylingInputs = ["size", "rounded", "fillMode"];
    stylingInputs.forEach((input) => {
      this.handleClasses(this[input], input);
    });
  }
  /**
   * @hidden
   * Used by the FloatingLabel to determine if the MaskedTextBox is empty.
   */
  isEmpty() {
    if (this.input) {
      return !this.input.nativeElement.value;
    }
  }
  /**
   * @hidden
   */
  handleFocus = () => {
    this.ngZone.run(() => {
      if (!this.focused && hasObservers(this.onFocus)) {
        this.onFocus.emit();
      }
      this.focused = true;
    });
    if (this.maskOnFocus && this.emptyMask) {
      this.updateInput(this.service.maskRaw(this.value));
      this.ngZone.runOutsideAngular(() => {
        setTimeout(() => {
          this.setSelection(0, 0);
        }, 0);
      });
    }
  };
  /**
   * @hidden
   */
  handleInputFocus = () => {
    this.handleFocus();
    if (hasObservers(this.inputFocus)) {
      this.ngZone.run(() => {
        this.inputFocus.emit();
      });
    }
  };
  /**
   * @hidden
   */
  handleClick = () => {
    if (this.focused && !this.focusClick) {
      this.focusClick = true;
    }
    if (this.promptPlaceholder === null || this.promptPlaceholder === "") {
      const {
        selectionStart,
        selectionEnd
      } = this.input.nativeElement;
      if (selectionStart === selectionEnd) {
        this.setFocusSelection();
      }
    }
  };
  /**
   * @hidden
   */
  handleBlur = () => {
    this.changeDetector.markForCheck();
    this.focused = false;
    this.focusClick = false;
    if (this.maskOnFocus && this.emptyMask) {
      this.updateInput(this.maskedValue);
    }
    if (hasObservers(this.onBlur)) {
      this.ngZone.run(() => {
        this.onBlur.emit();
      });
    }
    this.ngZone.run(() => {
      if (this.control && !this.control.touched) {
        this.onTouched();
      }
    });
  };
  /**
   * @hidden
   */
  handleInputBlur = () => {
    this.changeDetector.markForCheck();
    if (hasObservers(this.inputBlur) || requiresZoneOnBlur(this.control)) {
      this.ngZone.run(() => {
        this.inputBlur.emit();
      });
    }
  };
  /**
   * @hidden
   */
  handleDragDrop() {
    return false;
  }
  /**
   * Focuses the MaskedTextBox.
   *
   * @example
   * ```ts-no-run
   * _@Component({
   * selector: 'my-app',
   * template: `
   *  <button (click)="maskedinput.focus()">Focus the input</button>
   *  <kendo-maskedtextbox #maskedinput></kendo-maskedtextbox>
   * `
   * })
   * class AppComponent { }
   * ```
   */
  focus() {
    if (!this.input) {
      return;
    }
    this.input.nativeElement.focus();
    this.focused = true;
    this.setFocusSelection();
  }
  /**
   * Blurs the MaskedTextBox.
   */
  blur() {
    if (!this.input) {
      return;
    }
    this.input.nativeElement.blur();
    this.focused = false;
  }
  /**
   * @hidden
   */
  pasteHandler(e) {
    const {
      selectionStart,
      selectionEnd
    } = e.target;
    if (selectionEnd === selectionStart) {
      return;
    }
    this.isPasted = true;
    this.selection = [selectionStart, selectionEnd];
  }
  /**
   * @hidden
   */
  inputHandler(e) {
    const value = e.target.value;
    const [start, end] = this.selection;
    if (!this.mask) {
      this.updateValueWithEvents(value);
      this.isPasted = false;
      return;
    }
    let result;
    if (this.isPasted) {
      this.isPasted = false;
      const rightPart = this.maskedValue.length - end;
      const to = value.length - rightPart;
      result = this.service.maskInRange(value.slice(start, to), this.maskedValue, start, end);
    } else {
      result = this.service.maskInput(value, this.maskedValue || "", e.target.selectionStart);
    }
    this.updateInput(result.value, result.selection);
    this.updateValueWithEvents(result.value);
  }
  /**
   * @hidden
   */
  ngOnChanges(changes) {
    if (changes["value"]) {
      this.value = this.normalizeValue(this.value);
    }
    const next = this.extractChanges(changes);
    this.updateService(next);
    if (!this.mask) {
      this.updateInput(this.value);
      return;
    }
    const maskedValue = this.service.maskRaw(this.value);
    this.updateInput(maskedValue, null, true);
    if (changes["includeLiterals"] || isChanged("promptPlaceholder", changes)) {
      resolvedPromise.then(() => {
        this.updateValueWithEvents(this.maskedValue, false);
      });
    }
  }
  /**
   * @hidden
   * Writes a new value to the element.
   */
  writeValue(value) {
    this.value = this.normalizeValue(value);
    this.updateInput(this.service.maskRaw(this.value));
    if (this.includeLiterals) {
      this.updateValue(this.maskedValue, false);
    }
    this.changeDetector.markForCheck();
  }
  /**
   * @hidden
   * Sets the function that will be called when a `change` event is triggered.
   */
  registerOnChange(fn) {
    this.onChange = fn;
  }
  /**
   * @hidden
   * Sets the function that will be called when a `touch` event is triggered.
   */
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  /**
   * @hidden
   * Called when the status of the component changes to or from `disabled`.
   * Depending on the value, it enables or disables the appropriate DOM element.
   *
   * @param isDisabled
   */
  setDisabledState(isDisabled) {
    this.changeDetector.markForCheck();
    this.disabled = isDisabled;
  }
  /**
   * @hidden
   */
  validate(_) {
    if (this.maskValidation === false || !this.mask) {
      return null;
    }
    if (!this.service.validationValue(this.maskedValue)) {
      return null;
    }
    if (this.maskedValue.indexOf(this.prompt) !== -1) {
      return {
        patternError: {
          mask: this.mask,
          maskedValue: this.maskedValue,
          value: this.value
        }
      };
    }
    return null;
  }
  /**
   * @hidden
   */
  get isControlInvalid() {
    return this.control && this.control.touched && this.control.invalid;
  }
  /**
   * @hidden
   */
  get isControlRequired() {
    return isControlRequired(this.control?.control);
  }
  /**
   * @hidden
   */
  updateValueWithEvents(maskedValue, callOnChange = true) {
    const previousValue = this.value;
    this.updateValue(maskedValue, callOnChange);
    const valueChanged = this.value !== previousValue;
    if (valueChanged && hasObservers(this.valueChange)) {
      this.valueChange.emit(this.value);
    }
  }
  onChange = (_) => {
  };
  onTouched = () => {
  };
  updateValue(value, callOnChange = true) {
    if (this.mask && !this.service.validationValue(value) && !this.includeLiterals) {
      this.value = "";
    } else {
      this.value = this.service.rawValue(value);
    }
    callOnChange && this.onChange(this.value);
  }
  updateInput(maskedValue = "", selection, isFromOnChanges) {
    if (isFromOnChanges && maskedValue === this.maskedValue) {
      return;
    }
    this.maskedValue = maskedValue;
    const value = this.maskOnFocus && !this.focused && this.emptyMask ? "" : maskedValue;
    this.renderer.setProperty(this.input.nativeElement, "value", value);
    if (selection !== void 0) {
      this.setSelection(selection, selection);
    }
  }
  extractChanges(changes) {
    return Object.keys(changes).filter((key) => key !== "rules").reduce((obj, key) => {
      obj[key] = changes[key].currentValue;
      return obj;
    }, {});
  }
  updateService(extra) {
    const config = Object.assign({
      includeLiterals: this.includeLiterals,
      mask: this.mask,
      prompt: this.prompt,
      promptPlaceholder: this.promptPlaceholder,
      rules: this.rules
    }, extra);
    this.service.update(config);
  }
  setSelection(start = this.selection[0], end = this.selection[1]) {
    if (this.focused) {
      invokeElementMethod(this.input, "setSelectionRange", start, end);
    }
  }
  get emptyMask() {
    return this.service.maskRaw() === this.maskedValue;
  }
  setFocusSelection() {
    const selectionStart = this.input.nativeElement.selectionStart;
    const index = this.maskedValue ? this.maskedValue.indexOf(this.prompt) : 0;
    if (index >= 0 && index < selectionStart) {
      this.selection = [index, index];
      this.setSelection();
    }
  }
  /**
   * @hidden
   */
  get focused() {
    return this.isFocused;
  }
  /**
   * @hidden
   */
  set focused(value) {
    if (this.isFocused !== value && this.hostElement) {
      const element = this.hostElement.nativeElement;
      if (value) {
        this.renderer.addClass(element, FOCUSED$3);
      } else {
        this.renderer.removeClass(element, FOCUSED$3);
      }
      this.isFocused = value;
    }
  }
  normalizeValue(value) {
    const present = isPresent2(value);
    if (present && typeof value !== "string") {
      if (isDevMode()) {
        throw new Error("The MaskedTextBox component supports only string values.");
      }
      return String(value);
    }
    return present ? value : "";
  }
  handleClasses(value, input) {
    const elem = this.hostElement.nativeElement;
    const classes = getStylingClasses("input", input, this[input], value);
    if (classes.toRemove) {
      this.renderer.removeClass(elem, classes.toRemove);
    }
    if (classes.toAdd) {
      this.renderer.addClass(elem, classes.toAdd);
    }
  }
  setInputAttributes() {
    const attributesToRender = Object.assign({}, this.mutableAttributes, this.parsedAttributes);
    setHTMLAttributes(attributesToRender, this.renderer, this.input.nativeElement, this.ngZone);
  }
  static ɵfac = function MaskedTextBoxComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MaskedTextBoxComponent)(ɵɵdirectiveInject(MaskingService2), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(RTL, 8));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _MaskedTextBoxComponent,
    selectors: [["kendo-maskedtextbox"]],
    contentQueries: function MaskedTextBoxComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, SuffixTemplateDirective, 5);
        ɵɵcontentQuery(dirIndex, PrefixTemplateDirective, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.suffixTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.prefixTemplate = _t.first);
      }
    },
    viewQuery: function MaskedTextBoxComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c17, 7);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.input = _t.first);
      }
    },
    hostVars: 9,
    hostBindings: function MaskedTextBoxComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("paste", function MaskedTextBoxComponent_paste_HostBindingHandler($event) {
          return ctx.pasteHandler($event);
        })("input", function MaskedTextBoxComponent_input_HostBindingHandler($event) {
          return ctx.inputHandler($event);
        });
      }
      if (rf & 2) {
        ɵɵattribute("dir", ctx.direction);
        ɵɵclassProp("k-readonly", ctx.readonly)("k-input", ctx.hostClasses)("k-maskedtextbox", ctx.hostClasses)("k-disabled", ctx.hostDisabledClass);
      }
    },
    inputs: {
      focusableId: "focusableId",
      disabled: "disabled",
      readonly: "readonly",
      title: "title",
      size: "size",
      rounded: "rounded",
      fillMode: "fillMode",
      mask: "mask",
      value: "value",
      rules: "rules",
      prompt: "prompt",
      promptPlaceholder: "promptPlaceholder",
      includeLiterals: "includeLiterals",
      maskOnFocus: "maskOnFocus",
      maskValidation: "maskValidation",
      tabindex: "tabindex",
      tabIndex: "tabIndex",
      inputAttributes: "inputAttributes"
    },
    outputs: {
      onFocus: "focus",
      onBlur: "blur",
      inputFocus: "inputFocus",
      inputBlur: "inputBlur",
      valueChange: "valueChange"
    },
    exportAs: ["kendoMaskedTextBox"],
    standalone: true,
    features: [ɵɵProvidersFeature([MaskingService2, {
      multi: true,
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _MaskedTextBoxComponent)
      /* eslint-disable-line*/
    }, {
      multi: true,
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => _MaskedTextBoxComponent)
      /* eslint-disable-line*/
    }, {
      provide: KendoInput,
      useExisting: forwardRef(() => _MaskedTextBoxComponent)
    }]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    decls: 7,
    vars: 21,
    consts: [["input", ""], ["kendoInputSharedEvents", "", 3, "isFocusedChange", "handleBlur", "onFocus", "hostElement", "isFocused"], [1, "k-input-prefix", "k-input-prefix-horizontal"], ["autocomplete", "off", "autocorrect", "off", "autocapitalize", "off", "spellcheck", "false", 1, "k-input-inner", 3, "id", "tabindex", "disabled", "readonly", "kendoEventsOutsideAngular"], [1, "k-input-suffix", "k-input-suffix-horizontal"], [3, "ngTemplateOutlet"]],
    template: function MaskedTextBoxComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵelementContainerStart(0, 1);
        ɵɵtwoWayListener("isFocusedChange", function MaskedTextBoxComponent_Template_ng_container_isFocusedChange_0_listener($event) {
          ɵɵrestoreView(_r1);
          ɵɵtwoWayBindingSet(ctx.focused, $event) || (ctx.focused = $event);
          return ɵɵresetView($event);
        });
        ɵɵlistener("handleBlur", function MaskedTextBoxComponent_Template_ng_container_handleBlur_0_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.handleBlur());
        })("onFocus", function MaskedTextBoxComponent_Template_ng_container_onFocus_0_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.handleFocus());
        });
        ɵɵtemplate(1, MaskedTextBoxComponent_Conditional_1_Template, 2, 1, "span", 2)(2, MaskedTextBoxComponent_Conditional_2_Template, 1, 0, "kendo-input-separator");
        ɵɵelement(3, "input", 3, 0);
        ɵɵtemplate(5, MaskedTextBoxComponent_Conditional_5_Template, 1, 0, "kendo-input-separator")(6, MaskedTextBoxComponent_Conditional_6_Template, 2, 1, "span", 4);
        ɵɵelementContainerEnd();
      }
      if (rf & 2) {
        ɵɵproperty("hostElement", ctx.hostElement);
        ɵɵtwoWayProperty("isFocused", ctx.focused);
        ɵɵadvance();
        ɵɵconditional(ctx.prefixTemplate ? 1 : -1);
        ɵɵadvance();
        ɵɵconditional(ctx.prefixTemplate && ctx.prefixTemplate.showSeparator ? 2 : -1);
        ɵɵadvance();
        ɵɵproperty("id", ctx.focusableId)("tabindex", ctx.tabIndex)("disabled", ctx.disabled)("readonly", ctx.readonly)("kendoEventsOutsideAngular", ɵɵpureFunction5(15, _c18, ctx.handleInputFocus, ctx.handleInputBlur, ctx.handleClick, ctx.handleDragDrop, ctx.handleDragDrop));
        ɵɵattribute("title", ctx.title)("aria-placeholder", ctx.mask)("aria-invalid", ctx.isControlInvalid)("required", ctx.isControlRequired ? "" : null);
        ɵɵadvance(2);
        ɵɵconditional(ctx.suffixTemplate && ctx.suffixTemplate.showSeparator ? 5 : -1);
        ɵɵadvance();
        ɵɵconditional(ctx.suffixTemplate ? 6 : -1);
      }
    },
    dependencies: [SharedInputEventsDirective, NgTemplateOutlet, InputSeparatorComponent, EventsOutsideAngularDirective],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MaskedTextBoxComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoMaskedTextBox",
      providers: [MaskingService2, {
        multi: true,
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => MaskedTextBoxComponent)
        /* eslint-disable-line*/
      }, {
        multi: true,
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => MaskedTextBoxComponent)
        /* eslint-disable-line*/
      }, {
        provide: KendoInput,
        useExisting: forwardRef(() => MaskedTextBoxComponent)
      }],
      selector: "kendo-maskedtextbox",
      template: `
        <ng-container
          kendoInputSharedEvents
          [hostElement]="hostElement"
          [(isFocused)]="focused"
          (handleBlur)="handleBlur()"
          (onFocus)="handleFocus()"
          >
          @if (prefixTemplate) {
            <span class="k-input-prefix k-input-prefix-horizontal">
              <ng-template [ngTemplateOutlet]="prefixTemplate?.templateRef">
              </ng-template>
            </span>
          }
          @if (prefixTemplate && prefixTemplate.showSeparator) {
            <kendo-input-separator></kendo-input-separator>
          }
          <input #input
            class="k-input-inner"
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            [id]="focusableId"
            [tabindex]="tabIndex"
            [attr.title]="title"
            [attr.aria-placeholder]="mask"
            [attr.aria-invalid]="isControlInvalid"
            [attr.required]="isControlRequired ? '' : null"
            [disabled]="disabled"
            [readonly]="readonly"
                [kendoEventsOutsideAngular]="{
                    focus: handleInputFocus,
                    blur: handleInputBlur,
                    click: handleClick,
                    dragstart: handleDragDrop,
                    drop: handleDragDrop
                }"
            />
          @if (suffixTemplate && suffixTemplate.showSeparator) {
            <kendo-input-separator></kendo-input-separator>
          }
          @if (suffixTemplate) {
            <span class="k-input-suffix k-input-suffix-horizontal">
              <ng-template [ngTemplateOutlet]="suffixTemplate?.templateRef">
              </ng-template>
            </span>
          }
        </ng-container>
        `,
      standalone: true,
      imports: [SharedInputEventsDirective, NgTemplateOutlet, InputSeparatorComponent, EventsOutsideAngularDirective]
    }]
  }], () => [{
    type: MaskingService2
  }, {
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }, {
    type: Injector
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
  }], {
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
    title: [{
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
    mask: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    rules: [{
      type: Input
    }],
    prompt: [{
      type: Input
    }],
    promptPlaceholder: [{
      type: Input
    }],
    includeLiterals: [{
      type: Input
    }],
    maskOnFocus: [{
      type: Input
    }],
    maskValidation: [{
      type: Input
    }],
    tabindex: [{
      type: Input
    }],
    tabIndex: [{
      type: Input
    }],
    inputAttributes: [{
      type: Input
    }],
    onFocus: [{
      type: Output,
      args: ["focus"]
    }],
    onBlur: [{
      type: Output,
      args: ["blur"]
    }],
    inputFocus: [{
      type: Output
    }],
    inputBlur: [{
      type: Output
    }],
    valueChange: [{
      type: Output
    }],
    direction: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class.k-input"]
    }, {
      type: HostBinding,
      args: ["class.k-maskedtextbox"]
    }],
    hostDisabledClass: [{
      type: HostBinding,
      args: ["class.k-disabled"]
    }],
    input: [{
      type: ViewChild,
      args: ["input", {
        static: true
      }]
    }],
    suffixTemplate: [{
      type: ContentChild,
      args: [SuffixTemplateDirective]
    }],
    prefixTemplate: [{
      type: ContentChild,
      args: [PrefixTemplateDirective]
    }],
    pasteHandler: [{
      type: HostListener,
      args: ["paste", ["$event"]]
    }],
    inputHandler: [{
      type: HostListener,
      args: ["input", ["$event"]]
    }]
  });
})();
var FOCUSED$2 = "k-focus";
var DEFAULT_SIZE$b = "medium";
var RadioCheckBoxBase = class _RadioCheckBoxBase {
  componentType;
  hostElement;
  renderer;
  cdr;
  ngZone;
  injector;
  /**
   * @hidden
   */
  focusableId = `k-${guid()}`;
  /**
   * Sets the `title` attribute of the `input` element of the component.
   */
  title;
  /**
   * Sets the `name` attribute for the component.
   */
  name;
  /**
   * Sets the disabled state of the component.
   *
   * @default false
   */
  disabled = false;
  /**
   * Specifies the `tabindex` of the component.
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
   * Provides a value for the component.
   */
  value;
  /**
   * The size property specifies the width and height of the component.
   *
   * @default 'medium'
   *
   */
  set size(size) {
    const newSize = size ? size : DEFAULT_SIZE$b;
    this.handleClasses(newSize, "size");
    this._size = newSize;
  }
  get size() {
    return this._size;
  }
  /**
   * Sets the HTML attributes of the inner focusable input element. Attributes which are essential for certain component functionalities cannot be changed.
   */
  set inputAttributes(attributes) {
    if (isObjectPresent(this.parsedAttributes)) {
      removeHTMLAttributes(this.parsedAttributes, this.renderer, this.input.nativeElement);
    }
    this._inputAttributes = attributes;
    this.parsedAttributes = this.inputAttributes ? parseAttributes(this.inputAttributes, this.defaultAttributes) : this.inputAttributes;
    this.setInputAttributes();
  }
  get inputAttributes() {
    return this._inputAttributes;
  }
  ngOnInit() {
    this.control = this.injector.get(NgControl, null);
  }
  /**
   * Fires each time the user focuses the component.
   *
   */
  onFocus = new EventEmitter();
  /**
   * Fires each time the component gets blurred.
   *
   */
  onBlur = new EventEmitter();
  /**
   * Focuses the component.
   */
  focus() {
    if (!this.input) {
      return;
    }
    this.focusChangedProgrammatically = true;
    this.isFocused = true;
    this.input.nativeElement.focus();
    this.focusChangedProgrammatically = false;
  }
  /**
   * Blurs the component.
   */
  blur() {
    this.focusChangedProgrammatically = true;
    const isFocusedElement = this.hostElement.nativeElement.querySelector(":focus");
    if (isFocusedElement) {
      isFocusedElement.blur();
    }
    this.isFocused = false;
    this.focusChangedProgrammatically = false;
  }
  /**
   * @hidden
   */
  handleInputBlur = () => {
    this.cdr.markForCheck();
    if (requiresZoneOnBlur(this.control)) {
      this.ngZone.run(() => {
        this.ngTouched();
      });
    }
  };
  /**
   * @hidden
   */
  handleFocus() {
    this.ngZone.run(() => {
      if (!this.focusChangedProgrammatically && hasObservers(this.onFocus)) {
        this.onFocus.emit();
      }
      this.isFocused = true;
    });
  }
  /**
   * @hidden
   */
  handleBlur() {
    this.ngZone.run(() => {
      if (!this.focusChangedProgrammatically) {
        this.ngTouched();
        this.onBlur.emit();
      }
      this.isFocused = false;
    });
  }
  /**
   * @hidden
   */
  registerOnChange(fn) {
    this.ngChange = fn;
  }
  /**
   * @hidden
   */
  registerOnTouched(fn) {
    this.ngTouched = fn;
  }
  /**
   * @hidden
   */
  get isControlRequired() {
    return isControlRequired(this.control?.control);
  }
  /**
   * @hidden
   */
  get isControlInvalid() {
    return this.control?.touched && this.control?.invalid;
  }
  /**
   * Represents the visible `input` element.
   */
  input;
  /**
   * @hidden
   */
  get isFocused() {
    return this._isFocused;
  }
  /**
   * @hidden
   */
  set isFocused(value) {
    if (this._isFocused !== value && this.input) {
      const element = this.input.nativeElement;
      if (value && !this.disabled) {
        this.renderer.addClass(element, FOCUSED$2);
      } else {
        this.renderer.removeClass(element, FOCUSED$2);
      }
      this._isFocused = value;
    }
  }
  /**
   * @hidden
   * Called when the status of the component changes to or from `disabled`.
   * Depending on the value, it enables or disables the appropriate DOM element.
   *
   * @param isDisabled
   */
  setDisabledState(isDisabled) {
    this.cdr.markForCheck();
    this.disabled = isDisabled;
  }
  control;
  focusChangedProgrammatically = false;
  get defaultAttributes() {
    return null;
  }
  parsedAttributes = {};
  _inputAttributes;
  ngChange = (_) => {
  };
  ngTouched = () => {
  };
  _isFocused = false;
  _size = DEFAULT_SIZE$b;
  constructor(componentType, hostElement, renderer, cdr, ngZone, injector) {
    this.componentType = componentType;
    this.hostElement = hostElement;
    this.renderer = renderer;
    this.cdr = cdr;
    this.ngZone = ngZone;
    this.injector = injector;
  }
  /**
   * @hidden
   */
  writeValue(_value) {
  }
  handleClasses(value, input) {
    if (!isPresent(this.input)) {
      return;
    }
    const inputElem = this.input.nativeElement;
    const classes = getStylingClasses(this.componentType, input, this[input], value);
    if (classes.toRemove) {
      this.renderer.removeClass(inputElem, classes.toRemove);
    }
    if (classes.toAdd) {
      this.renderer.addClass(inputElem, classes.toAdd);
    }
  }
  setInputAttributes() {
    setHTMLAttributes(this.parsedAttributes, this.renderer, this.input.nativeElement, this.ngZone);
  }
  static ɵfac = function RadioCheckBoxBase_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RadioCheckBoxBase)(ɵɵdirectiveInject(COMPONENT_TYPE), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Injector));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _RadioCheckBoxBase,
    selectors: [["ng-component"]],
    viewQuery: function RadioCheckBoxBase_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c17, 7);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.input = _t.first);
      }
    },
    inputs: {
      focusableId: "focusableId",
      title: "title",
      name: "name",
      disabled: "disabled",
      tabindex: "tabindex",
      tabIndex: "tabIndex",
      value: "value",
      size: "size",
      inputAttributes: "inputAttributes"
    },
    outputs: {
      onFocus: "focus",
      onBlur: "blur"
    },
    decls: 0,
    vars: 0,
    template: function RadioCheckBoxBase_Template(rf, ctx) {
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioCheckBoxBase, [{
    type: Component,
    args: [{
      template: ""
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [COMPONENT_TYPE]
    }]
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: ChangeDetectorRef
  }, {
    type: NgZone
  }, {
    type: Injector
  }], {
    focusableId: [{
      type: Input
    }],
    title: [{
      type: Input
    }],
    name: [{
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
    value: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    inputAttributes: [{
      type: Input
    }],
    onFocus: [{
      type: Output,
      args: ["focus"]
    }],
    onBlur: [{
      type: Output,
      args: ["blur"]
    }],
    input: [{
      type: ViewChild,
      args: ["input", {
        static: true
      }]
    }]
  });
})();
var DEFAULT_ROUNDED$6 = "medium";
var CheckBoxComponent = class _CheckBoxComponent extends RadioCheckBoxBase {
  renderer;
  hostElement;
  cdr;
  ngZone;
  injector;
  hostClass = true;
  /**
   * Sets the checked state of the component.
   *
   * Use `true`, `false`, or `'indeterminate'` to control the state.
   *
   * @default false
   */
  set checkedState(value) {
    this._checkedState = value;
    if (!isPresent(this.input)) {
      return;
    }
    this.input.nativeElement.indeterminate = value === "indeterminate";
  }
  get checkedState() {
    return this._checkedState;
  }
  /**
   * Sets the `rounded` property to specify the border radius of the CheckBox
   * ([see example](slug:appearance_checkboxdirective#toc-roundness)).
   *
   * @default 'medium'
   */
  set rounded(rounded) {
    const newRounded = rounded || DEFAULT_ROUNDED$6;
    this.handleClasses(newRounded, "rounded");
    this._rounded = newRounded;
  }
  get rounded() {
    return this._rounded;
  }
  /**
   * Fires when the inner input's checked state changes.
   * This event does not fire when you change the state programmatically using `ngModel` or `formControl`.
   * Use this event for two-way binding with the `checkedState` property.
   */
  checkedStateChange = new EventEmitter();
  /**
   * @hidden
   */
  get isChecked() {
    return typeof this.checkedState === "boolean" && this.checkedState;
  }
  /**
   * @hidden
   */
  get isIndeterminate() {
    return typeof this.checkedState === "string" && this.checkedState === "indeterminate";
  }
  get defaultAttributes() {
    return {
      type: "checkbox",
      id: this.focusableId,
      title: this.title,
      tabindex: this.tabindex,
      tabIndex: this.tabindex,
      disabled: this.disabled ? "" : null,
      value: this.value,
      checked: this.isChecked,
      "aria-invalid": this.isControlInvalid
    };
  }
  _rounded = DEFAULT_ROUNDED$6;
  _checkedState = false;
  constructor(renderer, hostElement, cdr, ngZone, injector) {
    super("checkbox", hostElement, renderer, cdr, ngZone, injector);
    this.renderer = renderer;
    this.hostElement = hostElement;
    this.cdr = cdr;
    this.ngZone = ngZone;
    this.injector = injector;
    A(packageMetadata);
  }
  ngAfterViewInit() {
    const stylingInputs = ["size", "rounded"];
    stylingInputs.forEach((input) => {
      this.handleClasses(this[input], input);
    });
    this.input.nativeElement.indeterminate = this.checkedState === "indeterminate";
  }
  /**
   * @hidden
   */
  handleChange = ($event) => {
    this.ngZone.run(() => {
      this.checkedState = $event && $event.target && $event.target.checked;
      this.checkedStateChange.emit(this.checkedState);
      this.ngChange(this.checkedState);
      this.cdr.markForCheck();
    });
  };
  /**
   * @hidden
   */
  writeValue(value) {
    this.checkedState = value;
    this.cdr.markForCheck();
  }
  static ɵfac = function CheckBoxComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CheckBoxComponent)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Injector));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _CheckBoxComponent,
    selectors: [["kendo-checkbox"]],
    hostVars: 2,
    hostBindings: function CheckBoxComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("k-checkbox-wrap", ctx.hostClass);
      }
    },
    inputs: {
      checkedState: "checkedState",
      rounded: "rounded"
    },
    outputs: {
      checkedStateChange: "checkedStateChange"
    },
    exportAs: ["kendoCheckBox"],
    standalone: true,
    features: [ɵɵProvidersFeature([LocalizationService, {
      provide: L10N_PREFIX,
      useValue: "kendo.checkbox"
    }, {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _CheckBoxComponent),
      multi: true
    }, {
      provide: KendoInput,
      useExisting: forwardRef(() => _CheckBoxComponent)
    }]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 3,
    vars: 22,
    consts: [["input", ""], ["kendoInputSharedEvents", "", 3, "isFocusedChange", "handleBlur", "onFocus", "hostElement", "isFocused"], ["type", "checkbox", 1, "k-checkbox", 3, "id", "disabled", "value", "checked", "kendoEventsOutsideAngular"]],
    template: function CheckBoxComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵelementContainerStart(0, 1);
        ɵɵtwoWayListener("isFocusedChange", function CheckBoxComponent_Template_ng_container_isFocusedChange_0_listener($event) {
          ɵɵrestoreView(_r1);
          ɵɵtwoWayBindingSet(ctx.isFocused, $event) || (ctx.isFocused = $event);
          return ɵɵresetView($event);
        });
        ɵɵlistener("handleBlur", function CheckBoxComponent_Template_ng_container_handleBlur_0_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.handleBlur());
        })("onFocus", function CheckBoxComponent_Template_ng_container_onFocus_0_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.handleFocus());
        });
        ɵɵelement(1, "input", 2, 0);
        ɵɵelementContainerEnd();
      }
      if (rf & 2) {
        ɵɵproperty("hostElement", ctx.hostElement);
        ɵɵtwoWayProperty("isFocused", ctx.isFocused);
        ɵɵadvance();
        ɵɵclassProp("k-disabled", ctx.disabled)("k-checked", ctx.isChecked)("k-indeterminate", ctx.isIndeterminate)("k-invalid", ctx.isControlInvalid);
        ɵɵproperty("id", ctx.focusableId)("disabled", ctx.disabled)("value", ctx.value)("checked", ctx.isChecked)("kendoEventsOutsideAngular", ɵɵpureFunction2(19, _c19, ctx.handleInputBlur, ctx.handleChange));
        ɵɵattribute("title", ctx.title)("tabindex", ctx.disabled ? void 0 : ctx.tabindex)("aria-invalid", ctx.isControlInvalid)("required", ctx.isControlRequired ? "" : null);
      }
    },
    dependencies: [SharedInputEventsDirective, EventsOutsideAngularDirective],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckBoxComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoCheckBox",
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.checkbox"
      }, {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => CheckBoxComponent),
        multi: true
      }, {
        provide: KendoInput,
        useExisting: forwardRef(() => CheckBoxComponent)
      }],
      selector: "kendo-checkbox",
      template: `
        <ng-container
            kendoInputSharedEvents
            [hostElement]="hostElement"
            [(isFocused)]="isFocused"
            (handleBlur)="handleBlur()"
            (onFocus)="handleFocus()"
        >
            <input #input
                type="checkbox"
                class="k-checkbox"
                [id]="focusableId"
                [attr.title]="title"
                [disabled]="disabled"
                [class.k-disabled]="disabled"
                [attr.tabindex]="disabled ? undefined : tabindex"
                [value]="value"
                [checked]="isChecked"
                [class.k-checked]="isChecked"
                [class.k-indeterminate]="isIndeterminate"
                [class.k-invalid]="isControlInvalid"
                [attr.aria-invalid]="isControlInvalid"
                [attr.required]="isControlRequired ? '' : null"
                [kendoEventsOutsideAngular]="{
                    blur: handleInputBlur,
                    change: handleChange
                }"
            />
        </ng-container>
    `,
      standalone: true,
      imports: [SharedInputEventsDirective, EventsOutsideAngularDirective]
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }, {
    type: NgZone
  }, {
    type: Injector
  }], {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-checkbox-wrap"]
    }],
    checkedState: [{
      type: Input
    }],
    rounded: [{
      type: Input
    }],
    checkedStateChange: [{
      type: Output
    }]
  });
})();
var DEFAULT_SIZE$a = "medium";
var DEFAULT_ROUNDED$5 = "medium";
var CheckBoxDirective = class _CheckBoxDirective {
  renderer;
  hostElement;
  kendoClass = true;
  get isDisabled() {
    return this.hostElement.nativeElement.disabled;
  }
  /**
   * Sets the `size` property to specify the width and height of the CheckBox
   * ([see example]({% slug appearance_checkboxdirective %}#toc-size)).
   *
   * @default 'medium'
   */
  set size(size) {
    const newSize = size ? size : DEFAULT_SIZE$a;
    this.handleClasses(newSize, "size");
    this._size = newSize;
  }
  get size() {
    return this._size;
  }
  /**
   * Sets the `rounded` property to specify the border radius of the CheckBox
   * ([see example](slug:appearance_checkboxdirective#toc-roundness)).
   *
   * @default 'medium'
   *
   */
  set rounded(rounded) {
    const newRounded = rounded ? rounded : DEFAULT_ROUNDED$5;
    this.handleClasses(newRounded, "rounded");
    this._rounded = newRounded;
  }
  get rounded() {
    return this._rounded;
  }
  _size = "medium";
  _rounded = "medium";
  constructor(renderer, hostElement) {
    this.renderer = renderer;
    this.hostElement = hostElement;
  }
  ngAfterViewInit() {
    const stylingInputs = ["size", "rounded"];
    stylingInputs.forEach((input) => {
      this.handleClasses(this[input], input);
    });
  }
  handleClasses(value, input) {
    const elem = this.hostElement.nativeElement;
    const classes = getStylingClasses("checkbox", input, this[input], value);
    if (classes.toRemove) {
      this.renderer.removeClass(elem, classes.toRemove);
    }
    if (classes.toAdd) {
      this.renderer.addClass(elem, classes.toAdd);
    }
  }
  static ɵfac = function CheckBoxDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CheckBoxDirective)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _CheckBoxDirective,
    selectors: [["input", "kendoCheckBox", ""]],
    hostVars: 4,
    hostBindings: function CheckBoxDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("k-checkbox", ctx.kendoClass)("k-disabled", ctx.isDisabled);
      }
    },
    inputs: {
      size: "size",
      rounded: "rounded"
    },
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckBoxDirective, [{
    type: Directive,
    args: [{
      selector: "input[kendoCheckBox]",
      standalone: true
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }], {
    kendoClass: [{
      type: HostBinding,
      args: ["class.k-checkbox"]
    }],
    isDisabled: [{
      type: HostBinding,
      args: ["class.k-disabled"]
    }],
    size: [{
      type: Input
    }],
    rounded: [{
      type: Input
    }]
  });
})();
var parseColor2 = (value, format, opacityEnabled = false, safe = true) => {
  const allowedFormats = ["hex", "rgba", "name"];
  if (allowedFormats.indexOf(format) === -1) {
    throw new Error(`Unsupported color output format '${format}'. The available options are 'hex', 'rgba' or 'name'.`);
  }
  if (!isPresent2(value)) {
    return;
  }
  if (format === "name") {
    return nameFormat(value, safe);
  }
  const parsedColor = parseColor(value.trim(), safe);
  if (!isPresent2(parsedColor)) {
    return;
  }
  const parsedColorResult = format === "hex" ? getHexValue(parsedColor, opacityEnabled) : parsedColor.toCssRgba();
  return parsedColorResult;
};
var getHSV = (value, safe = true) => {
  const parsed = parseColor(value, safe);
  if (!isPresent2(parsed)) {
    return {};
  }
  return parsed.toHSV();
};
var getRGBA = (value, safe = true) => {
  const parsed = parseColor(value, safe);
  if (!isPresent2(parsed)) {
    return {};
  }
  return parsed.toBytes();
};
var getColorFromHSV = (hsva, format = "rgba", opacityEnabled = false) => {
  const hue = fitIntoBounds(hsva.h, 0, 359.9);
  const saturation = fitIntoBounds(hsva.s, 0, 1);
  const value = fitIntoBounds(hsva.v, 0, 1);
  const alpha = fitIntoBounds(hsva.a, 0, 1);
  const color = color_default.fromHSV(hue, saturation, value, alpha);
  return format === "hex" ? getHexValue(color, opacityEnabled) : color.toCssRgba();
};
var getHexValue = (color, opacity) => {
  return opacity && color.a < 1 ? color.toCss({
    alpha: true
  }) : color.toCss();
};
var getColorFromHue = (hue) => {
  return getColorFromHSV({
    h: hue,
    s: 1,
    v: 1,
    a: 1
  });
};
var getColorFromRGBA = (rgba) => {
  const red = fitIntoBounds(rgba.r, 0, 255);
  const green = fitIntoBounds(rgba.g, 0, 255);
  const blue = fitIntoBounds(rgba.b, 0, 255);
  const alpha = fitIntoBounds(rgba.a, 0, 1);
  return color_default.fromBytes(red, green, blue, alpha).toCssRgba();
};
function nameFormat(value, safe) {
  value = value.toLowerCase().trim();
  if (isPresent2(named_colors_default[value])) {
    return value;
  }
  if (parseColor(value, safe)) {
    value = parseColor(value, safe).toHex();
  }
  const key = Object.keys(named_colors_default).find((key2) => named_colors_default[key2] === value);
  if (!key && !safe) {
    throw new Error(`The provided color ${value} is not supported for 'format="name"' property.To display ${value} color, the component 'format' property should be set to 'hex' or 'rgba' `);
  }
  return key;
}
var getRGBFromRGBA = (foregroundColor, backgroundColor) => {
  const r1 = fitIntoBounds(foregroundColor.r, 0, 255);
  const g1 = fitIntoBounds(foregroundColor.g, 0, 255);
  const b1 = fitIntoBounds(foregroundColor.b, 0, 255);
  const a1 = fitIntoBounds(foregroundColor.a, 0, 1);
  const r2 = fitIntoBounds(backgroundColor.r, 0, 255);
  const g2 = fitIntoBounds(backgroundColor.g, 0, 255);
  const b2 = fitIntoBounds(backgroundColor.b, 0, 255);
  return {
    r: Math.round((1 - a1) * r2 + a1 * r1),
    g: Math.round((1 - a1) * g2 + a1 * g1),
    b: Math.round((1 - a1) * b2 + a1 * b1)
  };
};
var getLuminance = (rgb) => {
  const a = [rgb.r, rgb.g, rgb.b].map(function(v) {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
};
var getContrast = (luminance1, luminance2) => {
  const brightest = Math.max(luminance1, luminance2);
  const darkest = Math.min(luminance1, luminance2);
  return (brightest + 0.05) / (darkest + 0.05);
};
var getContrastFromTwoRGBAs = (a, b) => {
  return getContrast(getLuminance(getRGBFromRGBA(a, b)), getLuminance(getRGBFromRGBA(b, {
    r: 0,
    g: 0,
    b: 0,
    a: 1
  })));
};
var bezierCommand = (controlPointCalc) => (point, i, a) => {
  const [cpsX, cpsY] = controlPointCalc(a[i - 1], a[i - 2], point);
  const [cpeX, cpeY] = controlPointCalc(point, a[i - 1], a[i + 1], true);
  return `C ${cpsX},${cpsY} ${cpeX},${cpeY} ${point[0]},${point[1]}`;
};
var controlPoint = (lineCalc) => (current, previous, next, reverse) => {
  const p = previous || current;
  const n = next || current;
  const smooth = 0.1;
  const l = lineCalc(p, n);
  const angle = l.angle + (reverse ? Math.PI : 0);
  const length = l.length * smooth;
  const x = current[0] + Math.cos(angle) * length;
  const y = current[1] + Math.sin(angle) * length;
  return [x, y];
};
var line = (pointA, pointB) => {
  const lengthX = pointB[0] - pointA[0];
  const lengthY = pointB[1] - pointA[1];
  return {
    length: Math.sqrt(Math.pow(lengthX, 2) + Math.pow(lengthY, 2)),
    angle: Math.atan2(lengthY, lengthX)
  };
};
var svgPath = (points, command) => {
  if (points.length === 0) {
    return "";
  }
  const d = points.reduce((acc, point, i, a) => i === 0 ? (
    // if first point
    `M ${point[0]},${point[1]}`
  ) : (
    // else
    `${acc} ${command(point, i, a)}`
  ), "");
  return d;
};
var ColorPickerLocalizationService = class _ColorPickerLocalizationService extends LocalizationService {
  constructor(prefix, messageService, _rtl) {
    super(prefix, messageService, _rtl);
  }
  static ɵfac = function ColorPickerLocalizationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ColorPickerLocalizationService)(ɵɵinject(L10N_PREFIX), ɵɵinject(MessageService, 8), ɵɵinject(RTL, 8));
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _ColorPickerLocalizationService,
    factory: _ColorPickerLocalizationService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColorPickerLocalizationService, [{
    type: Injectable
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [L10N_PREFIX]
    }]
  }, {
    type: MessageService,
    decorators: [{
      type: Optional
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [RTL]
    }]
  }], null);
})();
var FlatColorPickerLocalizationService = class _FlatColorPickerLocalizationService extends LocalizationService {
  colorPickerLocalization;
  constructor(prefix, messageService, _rtl, colorPickerLocalization) {
    super(prefix, messageService, _rtl);
    this.colorPickerLocalization = colorPickerLocalization;
  }
  get(shortKey) {
    if (this.colorPickerLocalization) {
      return this.colorPickerLocalization.get(shortKey);
    }
    return super.get(shortKey);
  }
  static ɵfac = function FlatColorPickerLocalizationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FlatColorPickerLocalizationService)(ɵɵinject(L10N_PREFIX), ɵɵinject(MessageService, 8), ɵɵinject(RTL, 8), ɵɵinject(ColorPickerLocalizationService, 8));
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _FlatColorPickerLocalizationService,
    factory: _FlatColorPickerLocalizationService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FlatColorPickerLocalizationService, [{
    type: Injectable
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [L10N_PREFIX]
    }]
  }, {
    type: MessageService,
    decorators: [{
      type: Optional
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [RTL]
    }]
  }, {
    type: ColorPickerLocalizationService,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ColorPickerLocalizationService]
    }]
  }], null);
})();
var ColorGradientLocalizationService = class _ColorGradientLocalizationService extends LocalizationService {
  flatColorPickerLocalization;
  constructor(prefix, messageService, _rtl, flatColorPickerLocalization) {
    super(prefix, messageService, _rtl);
    this.flatColorPickerLocalization = flatColorPickerLocalization;
  }
  get(shortKey) {
    if (this.flatColorPickerLocalization) {
      return this.flatColorPickerLocalization.get(shortKey);
    }
    return super.get(shortKey);
  }
  static ɵfac = function ColorGradientLocalizationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ColorGradientLocalizationService)(ɵɵinject(L10N_PREFIX), ɵɵinject(MessageService, 8), ɵɵinject(RTL, 8), ɵɵinject(FlatColorPickerLocalizationService, 8));
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _ColorGradientLocalizationService,
    factory: _ColorGradientLocalizationService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColorGradientLocalizationService, [{
    type: Injectable
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [L10N_PREFIX]
    }]
  }, {
    type: MessageService,
    decorators: [{
      type: Optional
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [RTL]
    }]
  }, {
    type: FlatColorPickerLocalizationService,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [FlatColorPickerLocalizationService]
    }]
  }], null);
})();
var NumericLabelDirective = class _NumericLabelDirective {
  host;
  kendoAdditionalNumericLabel;
  localizationService;
  constructor(host) {
    this.host = host;
  }
  ngOnInit() {
    const localizationToken = `${this.kendoAdditionalNumericLabel}ChannelLabel`;
    this.host.numericInput.nativeElement.setAttribute("aria-label", this.localizationService.get(localizationToken));
  }
  static ɵfac = function NumericLabelDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NumericLabelDirective)(ɵɵdirectiveInject(NumericTextBoxComponent));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _NumericLabelDirective,
    selectors: [["", "kendoAdditionalNumericLabel", ""]],
    inputs: {
      kendoAdditionalNumericLabel: "kendoAdditionalNumericLabel",
      localizationService: "localizationService"
    },
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NumericLabelDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoAdditionalNumericLabel]",
      standalone: true
    }]
  }], () => [{
    type: NumericTextBoxComponent
  }], {
    kendoAdditionalNumericLabel: [{
      type: Input
    }],
    localizationService: [{
      type: Input
    }]
  });
})();
var isJapanese = (input) => {
  const japaneseRegex = /[\u3000-\u303F]|[\u3040-\u309F]|[\u30A0-\u30FF]|[\uFF00-\uFFEF]|[\u4E00-\u9FAF]|[\u2605-\u2606]|[\u2190-\u2195]|\u203B/g;
  return japaneseRegex.test(input);
};
var TextBoxSuffixTemplateDirective = class _TextBoxSuffixTemplateDirective {
  templateRef;
  /**
   * Determines whether a separator is shown before the suffix template.
   *
   * @default false
   */
  set showSeparator(value) {
    this._showSeparator = value;
  }
  get showSeparator() {
    return this._showSeparator;
  }
  _showSeparator = false;
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static ɵfac = function TextBoxSuffixTemplateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TextBoxSuffixTemplateDirective)(ɵɵdirectiveInject(TemplateRef, 8));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _TextBoxSuffixTemplateDirective,
    selectors: [["", "kendoTextBoxSuffixTemplate", ""]],
    inputs: {
      showSeparator: "showSeparator"
    },
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextBoxSuffixTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoTextBoxSuffixTemplate]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef,
    decorators: [{
      type: Optional
    }]
  }], {
    showSeparator: [{
      type: Input
    }]
  });
})();
var TextBoxPrefixTemplateDirective = class _TextBoxPrefixTemplateDirective {
  templateRef;
  /**
   * Determines whether a separator is shown after the prefix template.
   *
   * @default false
   */
  set showSeparator(value) {
    this._showSeparator = value;
  }
  get showSeparator() {
    return this._showSeparator;
  }
  _showSeparator = false;
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static ɵfac = function TextBoxPrefixTemplateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TextBoxPrefixTemplateDirective)(ɵɵdirectiveInject(TemplateRef, 8));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _TextBoxPrefixTemplateDirective,
    selectors: [["", "kendoTextBoxPrefixTemplate", ""]],
    inputs: {
      showSeparator: "showSeparator"
    },
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextBoxPrefixTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoTextBoxPrefixTemplate]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef,
    decorators: [{
      type: Optional
    }]
  }], {
    showSeparator: [{
      type: Input
    }]
  });
})();
var TextBoxMessages = class _TextBoxMessages extends ComponentMessages {
  /**
   * The title of the **Clear** button of the TextBox.
   */
  clear;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵTextBoxMessages_BaseFactory;
    return function TextBoxMessages_Factory(__ngFactoryType__) {
      return (ɵTextBoxMessages_BaseFactory || (ɵTextBoxMessages_BaseFactory = ɵɵgetInheritedFactory(_TextBoxMessages)))(__ngFactoryType__ || _TextBoxMessages);
    };
  })();
  static ɵdir = ɵɵdefineDirective({
    type: _TextBoxMessages,
    selectors: [["kendo-textbox-messages-base"]],
    inputs: {
      clear: "clear"
    },
    features: [ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextBoxMessages, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "kendo-textbox-messages-base"
    }]
  }], null, {
    clear: [{
      type: Input
    }]
  });
})();
var LocalizedTextBoxMessagesDirective = class _LocalizedTextBoxMessagesDirective extends TextBoxMessages {
  service;
  constructor(service) {
    super();
    this.service = service;
  }
  static ɵfac = function LocalizedTextBoxMessagesDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LocalizedTextBoxMessagesDirective)(ɵɵdirectiveInject(LocalizationService));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _LocalizedTextBoxMessagesDirective,
    selectors: [["", "kendoTextBoxLocalizedMessages", ""]],
    standalone: true,
    features: [ɵɵProvidersFeature([{
      provide: TextBoxMessages,
      useExisting: forwardRef(() => _LocalizedTextBoxMessagesDirective)
    }]), ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LocalizedTextBoxMessagesDirective, [{
    type: Directive,
    args: [{
      providers: [{
        provide: TextBoxMessages,
        useExisting: forwardRef(() => LocalizedTextBoxMessagesDirective)
      }],
      selector: "[kendoTextBoxLocalizedMessages]",
      standalone: true
    }]
  }], () => [{
    type: LocalizationService
  }], null);
})();
var FOCUSED$1 = "k-focus";
var DEFAULT_SIZE$9 = "medium";
var DEFAULT_ROUNDED$4 = "medium";
var DEFAULT_FILL_MODE$4 = "solid";
var iconsMap$1 = {
  checkIcon,
  exclamationCircleIcon,
  xIcon
};
var TextBoxComponent = class _TextBoxComponent {
  localizationService;
  ngZone;
  changeDetector;
  renderer;
  injector;
  hostElement;
  /**
   * @hidden
   */
  focusableId = `k-${guid()}`;
  /**
   * Sets the `title` attribute of the `input` element of the TextBox.
   */
  title;
  /**
   * Sets the `type` attribute of the `input` element of the TextBox.
   * @default 'text'
   */
  type = "text";
  /**
   * Sets the disabled state of the TextBox. To disable the component in reactive forms, see [Forms Support](slug:formssupport_textbox#toc-managing-the-textbox-disabled-state-in-reactive-forms).
   * @default false
   */
  disabled = false;
  /**
   * Sets the read-only state of the component.
   * @default false
   */
  readonly = false;
  /**
   * Specifies the `tabindex` of the TextBox.
   * @default 0
   */
  tabindex = 0;
  /**
   * Provides a value for the TextBox.
   */
  value = null;
  /**
   * Highlights the whole value when you click the TextBox.
   * @default false
   */
  selectOnFocus = false;
  /**
   * Specifies when to show the Success icon ([see example]({% slug validation_textbox %})).
   *
   * @default false
   */
  showSuccessIcon = false;
  /**
   * Specifies when to show the Error icon ([see example]({% slug validation_textbox %})).
   *
   * @default false
   */
  showErrorIcon = false;
  /**
   * Shows a **Clear** button in the TextBox.
   * @default false
   */
  clearButton = false;
  /**
   * Sets a custom icon for valid user input.
   */
  successIcon;
  /**
   * Sets a custom SVG icon for valid user input.
   */
  successSvgIcon;
  /**
   * Sets a custom icon for invalid user input.
   */
  errorIcon;
  /**
   * Sets a custom SVG icon for invalid user input.
   */
  errorSvgIcon;
  /**
   * Sets a custom icon for the **Clear** button.
   */
  clearButtonIcon;
  /**
   * Sets a custom SVG icon for the **Clear** button.
   */
  clearButtonSvgIcon;
  /**
   * Sets the padding of the TextBox internal input element ([see example]({% slug appearance_textbox %}#toc-size)).
   * @default 'medium'
   */
  set size(size) {
    const newSize = size ? size : DEFAULT_SIZE$9;
    this.handleClasses(newSize, "size");
    this._size = newSize;
  }
  get size() {
    return this._size;
  }
  /**
   * Sets the border radius of the TextBox ([see example](slug:appearance_textbox#toc-roundness)).
   * @default 'medium'
   */
  set rounded(rounded) {
    const newRounded = rounded ? rounded : DEFAULT_ROUNDED$4;
    this.handleClasses(newRounded, "rounded");
    this._rounded = newRounded;
  }
  get rounded() {
    return this._rounded;
  }
  /**
   * Sets the background and border styles of the TextBox ([see example]({% slug appearance_textbox %}#toc-fill-mode)).
   * @default 'solid'
   */
  set fillMode(fillMode) {
    const newFillMode = fillMode ? fillMode : DEFAULT_FILL_MODE$4;
    this.handleClasses(newFillMode, "fillMode");
    this._fillMode = newFillMode;
  }
  get fillMode() {
    return this._fillMode;
  }
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
   * Sets the placeholder text displayed when the component is empty.
   */
  placeholder;
  /**
   * Sets the maximum length of the TextBox value.
   */
  maxlength;
  /**
   * Sets the HTML attributes of the inner focusable input element. You cannot change attributes that are essential for component functionality.
   */
  set inputAttributes(attributes) {
    if (isObjectPresent(this.parsedAttributes)) {
      removeHTMLAttributes(this.parsedAttributes, this.renderer, this.input.nativeElement);
    }
    this._inputAttributes = attributes;
    this.parsedAttributes = this.inputAttributes ? parseAttributes(this.inputAttributes, this.defaultAttributes) : this.inputAttributes;
    this.setInputAttributes();
  }
  get inputAttributes() {
    return this._inputAttributes;
  }
  /**
   * Fires when the value changes—when the component is blurred or the value is cleared through the **Clear** button ([see example](slug:events_textbox)).
   * Does not fire when you change the value programmatically through `ngModel` or `formControl`.
   */
  valueChange = new EventEmitter();
  /**
   * Fires when the user focuses the `input` element.
   */
  inputFocus = new EventEmitter();
  /**
   * Fires when the `input` element is blurred.
   */
  inputBlur = new EventEmitter();
  /**
   * Fires when the user focuses the TextBox component.
   *
   */
  onFocus = new EventEmitter();
  /**
   * Fires when the TextBox component is blurred.
   *
   */
  onBlur = new EventEmitter();
  /**
   * Gets a reference to the visible `input` element of the TextBox.
   */
  input;
  /**
   * @hidden
   */
  textBoxSuffixTemplate;
  /**
   * @hidden
   */
  textBoxPrefixTemplate;
  /**
   * @hidden
   */
  suffixTemplate;
  /**
   * @hidden
   */
  prefixTemplate;
  get disabledClass() {
    return this.disabled;
  }
  hostClasses = true;
  direction;
  /**
   * @hidden
   */
  showClearButton;
  /**
   * @hidden
   */
  clearButtonClicked;
  /**
   * @hidden
   */
  suffix;
  /**
   * @hidden
   */
  prefix;
  control;
  subscriptions;
  _isFocused = false;
  focusChangedProgrammatically = false;
  _inputAttributes;
  _size = "medium";
  _rounded = "medium";
  _fillMode = "solid";
  parsedAttributes = {};
  get defaultAttributes() {
    return {
      id: this.focusableId,
      disabled: this.disabled ? "" : null,
      readonly: this.readonly ? "" : null,
      tabindex: this.disabled ? void 0 : this.tabindex,
      type: this.type,
      placeholder: this.placeholder,
      title: this.title,
      maxlength: this.maxlength,
      "aria-invalid": this.isControlInvalid,
      required: this.isControlRequired ? "" : null
    };
  }
  constructor(localizationService, ngZone, changeDetector, renderer, injector, hostElement) {
    this.localizationService = localizationService;
    this.ngZone = ngZone;
    this.changeDetector = changeDetector;
    this.renderer = renderer;
    this.injector = injector;
    this.hostElement = hostElement;
    A(packageMetadata);
    this.direction = localizationService.rtl ? "rtl" : "ltr";
  }
  ngOnInit() {
    this.control = this.injector.get(NgControl, null);
    this.checkClearButton();
    this.subscriptions = this.localizationService.changes.subscribe(({
      rtl
    }) => {
      this.direction = rtl ? "rtl" : "ltr";
    });
  }
  ngAfterViewInit() {
    const stylingInputs = ["size", "rounded", "fillMode"];
    stylingInputs.forEach((input) => {
      this.handleClasses(this[input], input);
    });
  }
  ngAfterContentInit() {
    this.configureAdornments();
    this.subscriptions.add(this.textBoxPrefixTemplate.changes.subscribe(this.configureAdornments.bind(this)));
    this.subscriptions.add(this.textBoxSuffixTemplate.changes.subscribe(this.configureAdornments.bind(this)));
  }
  ngOnChanges(changes) {
    if (changes["disabled"] || changes["readonly"] || changes["value"]) {
      this.checkClearButton();
    }
  }
  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }
  /**
   * @hidden
   */
  svgIcon(name) {
    return iconsMap$1[name];
  }
  /**
   * Focuses the TextBox.
   */
  focus() {
    if (!this.input) {
      return;
    }
    this.focusChangedProgrammatically = true;
    this.isFocused = true;
    this.input.nativeElement.focus();
    this.focusChangedProgrammatically = false;
  }
  /**
   * Removes focus from the TextBox.
   */
  blur() {
    this.focusChangedProgrammatically = true;
    const isFocusedElement = this.hostElement.nativeElement.querySelector(":focus");
    if (isFocusedElement) {
      isFocusedElement.blur();
    }
    this.isFocused = false;
    this.focusChangedProgrammatically = false;
  }
  /**
   * @hidden
   */
  handleInputFocus = () => {
    if (!this.disabled) {
      if (this.selectOnFocus && this.value) {
        this.ngZone.run(() => {
          setTimeout(() => {
            this.selectAll();
          });
        });
      }
      if (!this.isFocused) {
        this.handleFocus();
      }
      if (hasObservers(this.inputFocus)) {
        if (!this.focusChangedProgrammatically || this.focusChangedProgrammatically && this.clearButtonClicked) {
          this.ngZone.run(() => {
            this.inputFocus.emit();
          });
        }
      }
    }
  };
  /**
   * @hidden
   */
  handleInputBlur = () => {
    this.changeDetector.markForCheck();
    if (hasObservers(this.inputBlur) || requiresZoneOnBlur(this.control)) {
      this.ngZone.run(() => {
        this.ngTouched();
        this.inputBlur.emit();
      });
    }
  };
  /**
   * @hidden
   */
  handleInput = (ev) => {
    const target = ev.target;
    const isBrowserSafari = isSafari(navigator.userAgent);
    const incomingValue = isBrowserSafari && isJapanese(target.value) ? ev.data : target.value;
    const [caretStart, caretEnd] = [target.selectionStart, target.selectionEnd];
    this.updateValue(incomingValue);
    if (isBrowserSafari) {
      target.setSelectionRange(caretStart, caretEnd);
    }
  };
  /**
   * @hidden
   */
  clearTitle() {
    return this.localizationService.get("clear");
  }
  /**
   * @hidden
   */
  checkClearButton() {
    this.showClearButton = !this.disabled && !this.readonly && this.clearButton && !!this.value;
  }
  /**
   * @hidden
   */
  clearValue(ev) {
    if (ev) {
      ev.preventDefault();
    }
    this.clearButtonClicked = true;
    this.input.nativeElement.value = "";
    this.input.nativeElement.focus();
    this.updateValue("");
    this.checkClearButton();
    this.clearButtonClicked = false;
  }
  /**
   * @hidden
   */
  writeValue(value) {
    this.value = value;
    this.checkClearButton();
    this.changeDetector.markForCheck();
  }
  /**
   * @hidden
   */
  registerOnChange(fn) {
    this.ngChange = fn;
  }
  /**
   * @hidden
   */
  registerOnTouched(fn) {
    this.ngTouched = fn;
  }
  /**
   * @hidden
   * Called when the status of the component changes to or from `disabled`.
   * Depending on the value, it enables or disables the appropriate DOM element.
   *
   * @param isDisabled
   */
  setDisabledState(isDisabled) {
    this.changeDetector.markForCheck();
    this.disabled = isDisabled;
  }
  /**
   * @hidden
   */
  showErrorsInitial() {
    if (!this.control) {
      return false;
    }
    const {
      invalid,
      dirty,
      touched
    } = this.control;
    return invalid && (dirty || touched);
  }
  /**
   * @hidden
   */
  showSuccessInitial() {
    if (!this.control) {
      return false;
    }
    const {
      valid,
      dirty,
      touched
    } = this.control;
    return valid && (dirty || touched);
  }
  /**
   * @hidden
   */
  get isControlInvalid() {
    return this.control && this.control.touched && !this.control.valid;
  }
  /**
   * @hidden
   */
  get successIconClasses() {
    if (!this.successIcon) {
      return `check`;
    }
  }
  /**
   * @hidden
   */
  get customSuccessIconClasses() {
    if (this.successIcon) {
      return this.successIcon;
    }
  }
  /**
   * @hidden
   */
  get errorIconClasses() {
    if (!this.errorIcon) {
      return `exclamation-circle`;
    }
  }
  /**
   * @hidden
   */
  get customIconClasses() {
    if (this.errorIcon) {
      return this.errorIcon;
    }
  }
  /**
   * @hidden
   */
  get customClearButtonClasses() {
    if (this.clearButtonIcon) {
      return this.clearButtonIcon;
    }
  }
  /**
   * @hidden
   */
  get clearButtonClass() {
    if (!this.clearButtonIcon) {
      return "x";
    }
  }
  /**
   * @hidden
   */
  get hasErrors() {
    return this.showErrorIcon === "initial" ? this.showErrorsInitial() : this.showErrorIcon;
  }
  /**
   * @hidden
   */
  get isSuccessful() {
    return this.showSuccessIcon === "initial" ? this.showSuccessInitial() : this.showSuccessIcon;
  }
  /**
   * @hidden
   */
  get isFocused() {
    return this._isFocused;
  }
  /**
   * @hidden
   */
  set isFocused(value) {
    if (this._isFocused !== value && this.hostElement) {
      const element = this.hostElement.nativeElement;
      if (value && !this.disabled) {
        this.renderer.addClass(element, FOCUSED$1);
      } else {
        this.renderer.removeClass(element, FOCUSED$1);
      }
      this._isFocused = value;
    }
  }
  /**
   * @hidden
   */
  get isControlRequired() {
    return isControlRequired(this.control?.control);
  }
  ngChange = (_) => {
  };
  ngTouched = () => {
  };
  setSelection(start, end) {
    if (this.isFocused) {
      invokeElementMethod(this.input, "setSelectionRange", start, end);
    }
  }
  selectAll() {
    if (this.value) {
      this.setSelection(0, this.value.length);
    }
  }
  updateValue(value) {
    if (!areSame(this.value, value)) {
      this.ngZone.run(() => {
        this.value = value;
        this.ngChange(value);
        this.valueChange.emit(value);
        this.checkClearButton();
        this.changeDetector.markForCheck();
      });
    }
  }
  /**
   * @hidden
   */
  handleFocus() {
    this.ngZone.run(() => {
      if (!this.focusChangedProgrammatically && hasObservers(this.onFocus)) {
        this.onFocus.emit();
      }
      this.isFocused = true;
    });
  }
  /**
   * @hidden
   */
  handleBlur() {
    this.ngZone.run(() => {
      if (!this.focusChangedProgrammatically) {
        this.onBlur.emit();
      }
      this.isFocused = false;
    });
  }
  handleClasses(value, input) {
    const elem = this.hostElement.nativeElement;
    const classes = getStylingClasses("input", input, this[input], value);
    if (classes.toRemove) {
      this.renderer.removeClass(elem, classes.toRemove);
    }
    if (classes.toAdd) {
      this.renderer.addClass(elem, classes.toAdd);
    }
  }
  configureAdornments() {
    this.prefix = this.textBoxPrefixTemplate.first || this.prefixTemplate;
    this.suffix = this.textBoxSuffixTemplate.first || this.suffixTemplate;
  }
  setInputAttributes() {
    setHTMLAttributes(this.parsedAttributes, this.renderer, this.input.nativeElement, this.ngZone);
  }
  static ɵfac = function TextBoxComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TextBoxComponent)(ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(ElementRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _TextBoxComponent,
    selectors: [["kendo-textbox"]],
    contentQueries: function TextBoxComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, SuffixTemplateDirective, 5);
        ɵɵcontentQuery(dirIndex, PrefixTemplateDirective, 5);
        ɵɵcontentQuery(dirIndex, TextBoxSuffixTemplateDirective, 4);
        ɵɵcontentQuery(dirIndex, TextBoxPrefixTemplateDirective, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.suffixTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.prefixTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.textBoxSuffixTemplate = _t);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.textBoxPrefixTemplate = _t);
      }
    },
    viewQuery: function TextBoxComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c17, 7);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.input = _t.first);
      }
    },
    hostVars: 9,
    hostBindings: function TextBoxComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("dir", ctx.direction);
        ɵɵclassProp("k-readonly", ctx.readonly)("k-disabled", ctx.disabledClass)("k-textbox", ctx.hostClasses)("k-input", ctx.hostClasses);
      }
    },
    inputs: {
      focusableId: "focusableId",
      title: "title",
      type: "type",
      disabled: "disabled",
      readonly: "readonly",
      tabindex: "tabindex",
      value: "value",
      selectOnFocus: "selectOnFocus",
      showSuccessIcon: "showSuccessIcon",
      showErrorIcon: "showErrorIcon",
      clearButton: "clearButton",
      successIcon: "successIcon",
      successSvgIcon: "successSvgIcon",
      errorIcon: "errorIcon",
      errorSvgIcon: "errorSvgIcon",
      clearButtonIcon: "clearButtonIcon",
      clearButtonSvgIcon: "clearButtonSvgIcon",
      size: "size",
      rounded: "rounded",
      fillMode: "fillMode",
      tabIndex: "tabIndex",
      placeholder: "placeholder",
      maxlength: "maxlength",
      inputAttributes: "inputAttributes"
    },
    outputs: {
      valueChange: "valueChange",
      inputFocus: "inputFocus",
      inputBlur: "inputBlur",
      onFocus: "focus",
      onBlur: "blur"
    },
    exportAs: ["kendoTextBox"],
    standalone: true,
    features: [ɵɵProvidersFeature([LocalizationService, {
      provide: L10N_PREFIX,
      useValue: "kendo.textbox"
    }, {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _TextBoxComponent),
      multi: true
    }, {
      provide: KendoInput,
      useExisting: forwardRef(() => _TextBoxComponent)
    }]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    decls: 12,
    vars: 26,
    consts: () => {
      let i18n_9;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_9 = goog.getMsg("Clear");
        i18n_9 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_9;
      } else {
        i18n_9 = $localize`:kendo.textbox.clear|The title for the **Clear** button in the TextBox.:Clear`;
      }
      return [["input", ""], ["kendoTextBoxLocalizedMessages", "", "clear", i18n_9], ["kendoInputSharedEvents", "", 3, "isFocusedChange", "handleBlur", "onFocus", "hostElement", "isFocused", "clearButtonClicked"], [1, "k-input-prefix", "k-input-prefix-horizontal"], [1, "k-input-inner", 3, "id", "disabled", "readonly", "value", "kendoEventsOutsideAngular"], ["role", "button", 1, "k-clear-value", 3, "tabindex", "title"], ["innerCssClass", "k-input-validation-icon", 3, "name", "customFontClass", "svgIcon"], [1, "k-input-suffix", "k-input-suffix-horizontal"], [3, "ngTemplateOutlet"], ["role", "button", 1, "k-clear-value", 3, "click", "mousedown", "keydown.enter", "keydown.space", "tabindex", "title"], [3, "name", "customFontClass", "svgIcon"]];
    },
    template: function TextBoxComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵelementContainer(0, 1);
        ɵɵelementContainerStart(1, 2);
        ɵɵtwoWayListener("isFocusedChange", function TextBoxComponent_Template_ng_container_isFocusedChange_1_listener($event) {
          ɵɵrestoreView(_r1);
          ɵɵtwoWayBindingSet(ctx.isFocused, $event) || (ctx.isFocused = $event);
          return ɵɵresetView($event);
        });
        ɵɵlistener("handleBlur", function TextBoxComponent_Template_ng_container_handleBlur_1_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.handleBlur());
        })("onFocus", function TextBoxComponent_Template_ng_container_onFocus_1_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.handleFocus());
        });
        ɵɵtemplate(2, TextBoxComponent_Conditional_2_Template, 2, 1, "span", 3)(3, TextBoxComponent_Conditional_3_Template, 1, 0, "kendo-input-separator");
        ɵɵelement(4, "input", 4, 0);
        ɵɵtemplate(6, TextBoxComponent_Conditional_6_Template, 2, 6, "span", 5)(7, TextBoxComponent_Conditional_7_Template, 1, 3, "kendo-icon-wrapper", 6)(8, TextBoxComponent_Conditional_8_Template, 1, 3, "kendo-icon-wrapper", 6)(9, TextBoxComponent_Conditional_9_Template, 1, 0, "kendo-input-separator")(10, TextBoxComponent_Conditional_10_Template, 2, 1, "span", 7);
        ɵɵelementContainer(11);
        ɵɵelementContainerEnd();
      }
      if (rf & 2) {
        ɵɵadvance();
        ɵɵproperty("hostElement", ctx.hostElement);
        ɵɵtwoWayProperty("isFocused", ctx.isFocused);
        ɵɵproperty("clearButtonClicked", ctx.clearButtonClicked);
        ɵɵadvance();
        ɵɵconditional(ctx.prefix ? 2 : -1);
        ɵɵadvance();
        ɵɵconditional(ctx.prefix && ctx.prefix.showSeparator ? 3 : -1);
        ɵɵadvance();
        ɵɵproperty("id", ctx.focusableId)("disabled", ctx.disabled)("readonly", ctx.readonly)("value", ctx.value)("kendoEventsOutsideAngular", ɵɵpureFunction3(22, _c20, ctx.handleInputFocus, ctx.handleInputBlur, ctx.handleInput));
        ɵɵattribute("tabindex", ctx.disabled ? void 0 : ctx.tabindex)("type", ctx.type)("placeholder", ctx.placeholder)("title", ctx.title)("maxlength", ctx.maxlength)("aria-invalid", ctx.isControlInvalid)("required", ctx.isControlRequired ? "" : null);
        ɵɵadvance(2);
        ɵɵconditional(ctx.showClearButton ? 6 : -1);
        ɵɵadvance();
        ɵɵconditional(ctx.hasErrors ? 7 : -1);
        ɵɵadvance();
        ɵɵconditional(ctx.isSuccessful ? 8 : -1);
        ɵɵadvance();
        ɵɵconditional(ctx.suffix && ctx.suffix.showSeparator ? 9 : -1);
        ɵɵadvance();
        ɵɵconditional(ctx.suffix ? 10 : -1);
      }
    },
    dependencies: [LocalizedTextBoxMessagesDirective, SharedInputEventsDirective, NgTemplateOutlet, InputSeparatorComponent, EventsOutsideAngularDirective, IconWrapperComponent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextBoxComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoTextBox",
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.textbox"
      }, {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => TextBoxComponent),
        multi: true
      }, {
        provide: KendoInput,
        useExisting: forwardRef(() => TextBoxComponent)
      }],
      selector: "kendo-textbox",
      template: `
        <ng-container kendoTextBoxLocalizedMessages
          i18n-clear="kendo.textbox.clear|The title for the **Clear** button in the TextBox."
          clear="Clear">
        </ng-container>
        <ng-container
          kendoInputSharedEvents
          [hostElement]="hostElement"
          [(isFocused)]="isFocused"
          (handleBlur)="handleBlur()"
          (onFocus)="handleFocus()"
          [clearButtonClicked]="clearButtonClicked"
          >
          @if (prefix) {
            <span class="k-input-prefix k-input-prefix-horizontal">
              <ng-template [ngTemplateOutlet]="prefix?.templateRef">
              </ng-template>
            </span>
          }
          @if (prefix && prefix.showSeparator) {
            <kendo-input-separator></kendo-input-separator>
          }
          <input #input
            class="k-input-inner"
            [id]="focusableId"
            [disabled]="disabled"
            [readonly]="readonly"
            [attr.tabindex]="disabled ? undefined : tabindex"
            [value]="value"
            [attr.type]="type"
            [attr.placeholder]="placeholder"
            [attr.title]="title"
            [attr.maxlength]="maxlength"
            [attr.aria-invalid]="isControlInvalid"
            [attr.required]="isControlRequired ? '' : null"
                [kendoEventsOutsideAngular]="{
                    focus: handleInputFocus,
                    blur: handleInputBlur,
                    input: handleInput}"
            />
          @if (showClearButton) {
            <span
              role="button"
              class="k-clear-value"
              (click)="clearValue()"
              (mousedown)="$event.preventDefault()"
              [tabindex]="tabIndex"
              [attr.aria-label]="clearTitle()"
              [title]="clearTitle()"
              (keydown.enter)="clearValue($event)"
              (keydown.space)="clearValue($event)">
              <kendo-icon-wrapper
                [name]="clearButtonClass"
                [customFontClass]="customClearButtonClasses"
                [svgIcon]="clearButtonSvgIcon || svgIcon('xIcon')"
                >
              </kendo-icon-wrapper>
            </span>
          }
          @if (hasErrors) {
            <kendo-icon-wrapper
              innerCssClass="k-input-validation-icon"
              [name]="errorIconClasses"
              [customFontClass]="customIconClasses"
              [svgIcon]="errorSvgIcon || svgIcon('exclamationCircleIcon')"
              >
            </kendo-icon-wrapper>
          }
          @if (isSuccessful) {
            <kendo-icon-wrapper
              innerCssClass="k-input-validation-icon"
              [name]="successIconClasses"
              [customFontClass]="customSuccessIconClasses"
              [svgIcon]="successSvgIcon || svgIcon('checkIcon')"
              >
            </kendo-icon-wrapper>
          }
          @if (suffix && suffix.showSeparator) {
            <kendo-input-separator></kendo-input-separator>
          }
          @if (suffix) {
            <span class="k-input-suffix k-input-suffix-horizontal">
              <ng-template [ngTemplateOutlet]="suffix?.templateRef">
              </ng-template>
            </span>
          }
          <ng-container>
        `,
      standalone: true,
      imports: [LocalizedTextBoxMessagesDirective, SharedInputEventsDirective, NgTemplateOutlet, InputSeparatorComponent, EventsOutsideAngularDirective, IconWrapperComponent]
    }]
  }], () => [{
    type: LocalizationService
  }, {
    type: NgZone
  }, {
    type: ChangeDetectorRef
  }, {
    type: Renderer2
  }, {
    type: Injector
  }, {
    type: ElementRef
  }], {
    focusableId: [{
      type: Input
    }],
    title: [{
      type: Input
    }],
    type: [{
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
    tabindex: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    selectOnFocus: [{
      type: Input
    }],
    showSuccessIcon: [{
      type: Input
    }],
    showErrorIcon: [{
      type: Input
    }],
    clearButton: [{
      type: Input
    }],
    successIcon: [{
      type: Input
    }],
    successSvgIcon: [{
      type: Input
    }],
    errorIcon: [{
      type: Input
    }],
    errorSvgIcon: [{
      type: Input
    }],
    clearButtonIcon: [{
      type: Input
    }],
    clearButtonSvgIcon: [{
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
    tabIndex: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    maxlength: [{
      type: Input
    }],
    inputAttributes: [{
      type: Input
    }],
    valueChange: [{
      type: Output
    }],
    inputFocus: [{
      type: Output
    }],
    inputBlur: [{
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
    input: [{
      type: ViewChild,
      args: ["input", {
        static: true
      }]
    }],
    textBoxSuffixTemplate: [{
      type: ContentChildren,
      args: [TextBoxSuffixTemplateDirective, {
        descendants: false
      }]
    }],
    textBoxPrefixTemplate: [{
      type: ContentChildren,
      args: [TextBoxPrefixTemplateDirective, {
        descendants: false
      }]
    }],
    suffixTemplate: [{
      type: ContentChild,
      args: [SuffixTemplateDirective]
    }],
    prefixTemplate: [{
      type: ContentChild,
      args: [PrefixTemplateDirective]
    }],
    disabledClass: [{
      type: HostBinding,
      args: ["class.k-disabled"]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class.k-textbox"]
    }, {
      type: HostBinding,
      args: ["class.k-input"]
    }],
    direction: [{
      type: HostBinding,
      args: ["attr.dir"]
    }]
  });
})();
var TextLabelDirective = class _TextLabelDirective {
  textBox;
  renderer;
  focusableId;
  constructor(textBox, renderer) {
    this.textBox = textBox;
    this.renderer = renderer;
  }
  ngOnInit() {
    this.renderer.setAttribute(this.textBox.input.nativeElement, "id", this.focusableId);
  }
  static ɵfac = function TextLabelDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TextLabelDirective)(ɵɵdirectiveInject(TextBoxComponent), ɵɵdirectiveInject(Renderer2));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _TextLabelDirective,
    selectors: [["", "kendoTextLabel", ""]],
    inputs: {
      focusableId: "focusableId"
    },
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextLabelDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoTextLabel]",
      standalone: true
    }]
  }], () => [{
    type: TextBoxComponent
  }, {
    type: Renderer2
  }], {
    focusableId: [{
      type: Input
    }]
  });
})();
var DEFAULT_SIZE$8 = "medium";
var ColorInputComponent = class _ColorInputComponent {
  host;
  renderer;
  cdr;
  localizationService;
  /**
   * Sets the `id` of the hex input.
   */
  focusableId = `k-${guid()}`;
  /**
   * Sets the color format view.
   */
  formatView;
  /**
   * Sets the size of the ColorInput.
   *
   * @default 'medium'
   */
  size = DEFAULT_SIZE$8;
  /**
   * Sets the `tabindex` of the inputs.
   * @default -1
   */
  tabindex = -1;
  /**
   * Sets the color value to parse and populate the hex and RGBA inputs.
   */
  value;
  /**
   * Shows or hides the alpha slider.
   *
   * @default true
   */
  opacity = true;
  /**
   * Disables the ColorInput.
   *
   * @default false
   */
  disabled = false;
  /**
   * Sets the read-only state of the ColorInput.
   *
   * @default false
   */
  readonly = false;
  /**
   * Emits a parsed RGBA string color.
   */
  valueChange = new EventEmitter();
  /**
   * Fires when the user tabs out of the last focusable input.
   */
  tabOut = new EventEmitter();
  colorInputClass = true;
  opacityInput;
  hexInput;
  blueInput;
  toggleFormatButton;
  /**
   * Holds the RGBA input values.
   */
  rgba = {};
  /*
   * Holds the hex input value.
   */
  hex;
  /**
   * Returns `true` if any of the inputs are focused.
   */
  get isFocused() {
    if (!(isDocumentAvailable() && isPresent2(this.host))) {
      return false;
    }
    const activeElement = document.activeElement;
    return this.host.nativeElement.contains(activeElement);
  }
  /**
   * Returns `true` if all RGBA inputs have values.
   */
  get rgbaInputValid() {
    return Object.keys(this.rgba).every((key) => isPresent2(this.rgba[key]));
  }
  /**
   * @hidden
   */
  caretAltExpandIcon = caretAltExpandIcon;
  subscriptions = new Subscription();
  constructor(host, renderer, cdr, localizationService) {
    this.host = host;
    this.renderer = renderer;
    this.cdr = cdr;
    this.localizationService = localizationService;
  }
  ngAfterViewInit() {
    this.initDomEvents();
  }
  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }
  ngOnChanges(changes) {
    if (isPresent2(changes["value"]) && !this.isFocused) {
      this.hex = parseColor2(this.value, "hex", this.opacity);
      this.rgba = getRGBA(this.value);
      this.rgba.a = parseColor2(this.value, "rgba", this.opacity) ? this.rgba.a : 1;
    }
  }
  get formatButtonTitle() {
    return this.localizationService.get("formatButton");
  }
  handleRgbaValueChange() {
    const color = getColorFromRGBA(this.rgba);
    if (!this.rgbaInputValid || color === this.value) {
      return;
    }
    this.value = color;
    this.rgba = getRGBA(this.value);
    this.hex = parseColor2(color, "hex", this.opacity);
    this.valueChange.emit(color);
  }
  focusDragHandle(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    this.tabOut.emit();
  }
  handleHexValueChange(hex) {
    this.hex = hex;
    const color = parseColor2(hex, "rgba", this.opacity);
    if (!isPresent2(color) || color === this.value) {
      return;
    }
    this.value = color;
    this.rgba = getRGBA(color);
    this.valueChange.emit(color);
  }
  handleRgbaInputBlur() {
    if (!this.rgbaInputValid) {
      this.rgba = getRGBA(this.value);
    }
  }
  handleHexInputBlur() {
    this.hex = parseColor2(this.value, "hex", this.opacity);
  }
  focusLast() {
    this.lastInput().focus();
  }
  onTab() {
    if (this.opacity) {
      return;
    }
  }
  toggleFormatView() {
    this.formatView = this.formatView === "hex" ? "rgba" : "hex";
    this.cdr.markForCheck();
  }
  initDomEvents() {
    if (!this.host) {
      return;
    }
    this.subscriptions.add(this.renderer.listen(this.toggleFormatButton.nativeElement, "click", () => this.toggleFormatView()));
  }
  lastInput() {
    return this.hexInput?.nativeElement || this.opacityInput || this.blueInput;
  }
  static ɵfac = function ColorInputComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ColorInputComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(LocalizationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _ColorInputComponent,
    selectors: [["kendo-colorinput"]],
    viewQuery: function ColorInputComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c21, 5);
        ɵɵviewQuery(_c22, 5);
        ɵɵviewQuery(_c23, 5);
        ɵɵviewQuery(_c24, 5, ElementRef);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.opacityInput = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.hexInput = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.blueInput = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.toggleFormatButton = _t.first);
      }
    },
    hostVars: 4,
    hostBindings: function ColorInputComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("k-colorgradient-inputs", ctx.colorInputClass)("k-hstack", ctx.colorInputClass);
      }
    },
    inputs: {
      focusableId: "focusableId",
      formatView: "formatView",
      size: "size",
      tabindex: "tabindex",
      value: "value",
      opacity: "opacity",
      disabled: "disabled",
      readonly: "readonly"
    },
    outputs: {
      valueChange: "valueChange",
      tabOut: "tabOut"
    },
    standalone: true,
    features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    decls: 5,
    vars: 8,
    consts: [["toggleFormatButton", ""], ["hexInput", ""], ["red", ""], ["green", ""], ["blue", ""], ["opacityInput", "", "alpha", ""], [1, "k-vstack"], ["kendoButton", "", "type", "button", "fillMode", "flat", "icon", "caret-alt-expand", 1, "k-colorgradient-toggle-mode", 3, "svgIcon", "size", "disabled", "tabindex"], [1, "k-vstack", "k-flex-1"], ["kendoTextLabel", "", 1, "k-hex-value", 3, "blur", "input", "keydown.tab", "focusableId", "size", "disabled", "readonly", "value", "tabindex"], [1, "k-colorgradient-input-label", 3, "for"], ["kendoAdditionalNumericLabel", "red", 3, "valueChange", "blur", "localizationService", "disabled", "size", "readonly", "tabindex", "min", "max", "value", "autoCorrect", "spinners", "format", "decimals"], ["kendoAdditionalNumericLabel", "green", 3, "valueChange", "blur", "localizationService", "disabled", "readonly", "tabindex", "size", "min", "max", "value", "autoCorrect", "spinners", "format", "decimals"], ["kendoAdditionalNumericLabel", "blue", 3, "valueChange", "blur", "keydown.tab", "localizationService", "disabled", "readonly", "tabindex", "size", "min", "max", "value", "autoCorrect", "spinners", "format", "decimals"], ["kendoAdditionalNumericLabel", "alpha", 3, "valueChange", "blur", "keydown.tab", "localizationService", "disabled", "readonly", "tabindex", "size", "min", "max", "value", "autoCorrect", "spinners", "step", "format", "decimals"]],
    template: function ColorInputComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div", 6);
        ɵɵelement(1, "button", 7, 0);
        ɵɵelementEnd();
        ɵɵtemplate(3, ColorInputComponent_Conditional_3_Template, 5, 9, "div", 8)(4, ColorInputComponent_Conditional_4_Template, 16, 40);
      }
      if (rf & 2) {
        ɵɵadvance();
        ɵɵproperty("svgIcon", ctx.caretAltExpandIcon)("size", ctx.size)("disabled", ctx.disabled)("tabindex", ctx.tabindex.toString());
        ɵɵattribute("aria-label", ctx.formatButtonTitle)("title", ctx.formatButtonTitle);
        ɵɵadvance(2);
        ɵɵconditional(ctx.formatView === "hex" ? 3 : -1);
        ɵɵadvance();
        ɵɵconditional(ctx.formatView === "rgba" ? 4 : -1);
      }
    },
    dependencies: [ButtonComponent, NumericTextBoxComponent, NumericLabelDirective, TextBoxComponent, TextLabelDirective],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColorInputComponent, [{
    type: Component,
    args: [{
      selector: "kendo-colorinput",
      template: `
        <div class="k-vstack">
          <button
            kendoButton
            type="button"
            fillMode="flat"
            #toggleFormatButton
            icon="caret-alt-expand"
            [svgIcon]="caretAltExpandIcon"
            [size]="size"
            class="k-colorgradient-toggle-mode"
            [attr.aria-label]="formatButtonTitle"
            [attr.title]="formatButtonTitle"
            [disabled]="disabled"
            [tabindex]="tabindex.toString()"
            >
          </button>
        </div>
        @if (formatView === 'hex') {
          <div class="k-vstack k-flex-1">
            <kendo-textbox
              #hexInput
              kendoTextLabel
              [focusableId]="focusableId"
              class="k-hex-value"
              [size]="size"
              [class.k-readonly]="readonly"
              [disabled]="disabled"
              [readonly]="readonly"
              [value]="hex || ''"
              (blur)="handleHexInputBlur()"
              (input)="handleHexValueChange(hexInput.value)"
              [tabindex]="tabindex"
              (keydown.tab)="focusDragHandle($event)">
            </kendo-textbox>
            <label [for]="focusableId" class="k-colorgradient-input-label">HEX</label>
          </div>
        }
        @if (formatView === 'rgba') {
          <div class="k-vstack">
            <kendo-numerictextbox
              #red
              kendoAdditionalNumericLabel="red"
              [localizationService]="localizationService"
              [disabled]="disabled"
              [size]="size"
              [readonly]="readonly"
              [tabindex]="tabindex"
              [min]="0"
              [max]="255"
              [(value)]="rgba.r"
              [autoCorrect]="true"
              [spinners]="false"
              [format]="'n'"
              [decimals]="0"
              (blur)="handleRgbaInputBlur()"
              (valueChange)="handleRgbaValueChange()">
            </kendo-numerictextbox>
            <label [for]="red.focusableId" class="k-colorgradient-input-label">R</label>
          </div>
          <div class="k-vstack">
            <kendo-numerictextbox
              #green
              kendoAdditionalNumericLabel="green"
              [localizationService]="localizationService"
              [disabled]="disabled"
              [readonly]="readonly"
              [tabindex]="tabindex"
              [size]="size"
              [min]="0"
              [max]="255"
              [(value)]="rgba.g"
              [autoCorrect]="true"
              [spinners]="false"
              [format]="'n'"
              [decimals]="0"
              (blur)="handleRgbaInputBlur()"
              (valueChange)="handleRgbaValueChange()">
            </kendo-numerictextbox>
            <label [for]="green.focusableId" class="k-colorgradient-input-label">G</label>
          </div>
          <div class="k-vstack">
            <kendo-numerictextbox
              #blue
              kendoAdditionalNumericLabel="blue"
              [localizationService]="localizationService"
              [disabled]="disabled"
              [readonly]="readonly"
              [tabindex]="tabindex"
              [size]="size"
              [min]="0"
              [max]="255"
              [(value)]="rgba.b"
              [autoCorrect]="true"
              [spinners]="false"
              [format]="'n'"
              [decimals]="0"
              (blur)="handleRgbaInputBlur()"
              (valueChange)="handleRgbaValueChange()"
              (keydown.tab)="onTab()">
            </kendo-numerictextbox>
            <label [for]="blue.focusableId" class="k-colorgradient-input-label">B</label>
          </div>
          @if (opacity) {
            <div class="k-vstack">
              <kendo-numerictextbox #opacityInput
                #alpha
                kendoAdditionalNumericLabel="alpha"
                [localizationService]="localizationService"
                [disabled]="disabled"
                [readonly]="readonly"
                [tabindex]="tabindex"
                [size]="size"
                [min]="0"
                [max]="1"
                [(value)]="rgba.a"
                [autoCorrect]="true"
                [spinners]="false"
                [step]="0.01"
                [format]="'n2'"
                [decimals]="2"
                (blur)="handleRgbaInputBlur()"
                (valueChange)="handleRgbaValueChange()"
                (keydown.tab)="focusDragHandle($event)">
              </kendo-numerictextbox>
              <label [for]="alpha.focusableId" class="k-colorgradient-input-label">A</label>
            </div>
          }
        }
        `,
      standalone: true,
      imports: [ButtonComponent, NumericTextBoxComponent, NumericLabelDirective, TextBoxComponent, TextLabelDirective]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: ChangeDetectorRef
  }, {
    type: LocalizationService
  }], {
    focusableId: [{
      type: Input
    }],
    formatView: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    tabindex: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    opacity: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    readonly: [{
      type: Input
    }],
    valueChange: [{
      type: Output
    }],
    tabOut: [{
      type: Output
    }],
    colorInputClass: [{
      type: HostBinding,
      args: ["class.k-colorgradient-inputs"]
    }, {
      type: HostBinding,
      args: ["class.k-hstack"]
    }],
    opacityInput: [{
      type: ViewChild,
      args: ["opacityInput"]
    }],
    hexInput: [{
      type: ViewChild,
      args: ["hexInput"]
    }],
    blueInput: [{
      type: ViewChild,
      args: ["blue"]
    }],
    toggleFormatButton: [{
      type: ViewChild,
      args: ["toggleFormatButton", {
        static: false,
        read: ElementRef
      }]
    }]
  });
})();
var DEFAULT_OUTPUT_FORMAT = "rgba";
var DEFAULT_GRADIENT_BACKGROUND_COLOR = "rgba(255, 0, 0, 1)";
var DRAGHANDLE_MOVE_SPEED = 5;
var DRAGHANDLE_MOVE_SPEED_SMALL_STEP = 2;
var AAA_RATIO = 7;
var AA_RATIO = 4.5;
var DEFAULT_PRESET$1 = "office";
var DEFAULT_ACCESSIBLE_PRESET$1 = "accessible";
var STEP_COUNT = 16;
var ContrastValidationComponent = class _ContrastValidationComponent {
  localization;
  type;
  pass;
  value;
  checkIcon = checkIcon;
  xCircleIcon = xCircleIcon;
  constructor(localization) {
    this.localization = localization;
  }
  get passMessage() {
    return this.localization.get("passContrast");
  }
  get failMessage() {
    return this.localization.get("failContrast");
  }
  get contrastText() {
    const ratio = this.type === "AA" ? AA_RATIO : AAA_RATIO;
    return `${this.type}: ${ratio.toFixed(1)}`;
  }
  static ɵfac = function ContrastValidationComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ContrastValidationComponent)(ɵɵdirectiveInject(LocalizationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _ContrastValidationComponent,
    selectors: [["", "kendoContrastValidation", ""]],
    inputs: {
      type: "type",
      pass: "pass",
      value: "value"
    },
    standalone: true,
    features: [ɵɵStandaloneFeature],
    attrs: _c25,
    decls: 3,
    vars: 2,
    consts: [[1, "k-contrast-validation", "k-text-success"], [1, "k-contrast-validation", "k-text-error"], ["name", "check", 3, "svgIcon"], ["name", "x", 3, "svgIcon"]],
    template: function ContrastValidationComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "span");
        ɵɵtext(1);
        ɵɵelementEnd();
        ɵɵtemplate(2, ContrastValidationComponent_Conditional_2_Template, 2, 1);
      }
      if (rf & 2) {
        ɵɵadvance();
        ɵɵtextInterpolate(ctx.contrastText);
        ɵɵadvance();
        ɵɵconditional(ctx.value ? 2 : -1);
      }
    },
    dependencies: [IconWrapperComponent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContrastValidationComponent, [{
    type: Component,
    args: [{
      // eslint-disable-next-line @angular-eslint/component-selector
      selector: "[kendoContrastValidation]",
      template: `
        <span>{{contrastText}}</span>
        @if (value) {
          @if (pass) {
            <span class="k-contrast-validation k-text-success">
              {{passMessage}}
              <kendo-icon-wrapper name="check" [svgIcon]="checkIcon"></kendo-icon-wrapper>
            </span>
          } @else {
            <span class="k-contrast-validation k-text-error">
              {{failMessage}}
              <kendo-icon-wrapper name="x" [svgIcon]="xCircleIcon"></kendo-icon-wrapper>
            </span>
          }
        }
        `,
      standalone: true,
      imports: [IconWrapperComponent]
    }]
  }], () => [{
    type: LocalizationService
  }], {
    type: [{
      type: Input
    }],
    pass: [{
      type: Input
    }],
    value: [{
      type: Input
    }]
  });
})();
var ContrastComponent = class _ContrastComponent {
  localization;
  value;
  ratio;
  checkIcon = checkIcon;
  xCircleIcon = xCircleIcon;
  constructor(localization) {
    this.localization = localization;
  }
  get formatedRatio() {
    return this.contrastRatio.toFixed(2);
  }
  get contrastRatioText() {
    return `${this.localization.get("contrastRatio")}: ${this.value ? this.formatedRatio : "n/a"}`;
  }
  get satisfiesAACondition() {
    return this.contrastRatio >= AA_RATIO;
  }
  get satisfiesAAACondition() {
    return this.contrastRatio >= AAA_RATIO;
  }
  get contrastRatio() {
    const contrast = getContrastFromTwoRGBAs(getRGBA(this.value), getRGBA(this.ratio));
    return contrast;
  }
  static ɵfac = function ContrastComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ContrastComponent)(ɵɵdirectiveInject(LocalizationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _ContrastComponent,
    selectors: [["", "kendoContrastTool", ""]],
    inputs: {
      value: "value",
      ratio: "ratio"
    },
    standalone: true,
    features: [ɵɵStandaloneFeature],
    attrs: _c26,
    decls: 6,
    vars: 6,
    consts: [[1, "k-contrast-ratio"], [1, "k-contrast-ratio-text"], ["kendoContrastValidation", "", "type", "AA", 3, "value", "pass"], ["kendoContrastValidation", "", "type", "AAA", 3, "value", "pass"], [1, "k-contrast-validation", "k-text-success"], [1, "k-contrast-validation", "k-text-error"], ["name", "check", 3, "svgIcon"], ["name", "x", 3, "svgIcon"]],
    template: function ContrastComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div", 0)(1, "span", 1);
        ɵɵtext(2);
        ɵɵelementEnd();
        ɵɵtemplate(3, ContrastComponent_Conditional_3_Template, 2, 1);
        ɵɵelementEnd();
        ɵɵelement(4, "div", 2)(5, "div", 3);
      }
      if (rf & 2) {
        ɵɵadvance(2);
        ɵɵtextInterpolate(ctx.contrastRatioText);
        ɵɵadvance();
        ɵɵconditional(ctx.value ? 3 : -1);
        ɵɵadvance();
        ɵɵproperty("value", ctx.value)("pass", ctx.satisfiesAACondition);
        ɵɵadvance();
        ɵɵproperty("value", ctx.value)("pass", ctx.satisfiesAAACondition);
      }
    },
    dependencies: [IconWrapperComponent, ContrastValidationComponent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContrastComponent, [{
    type: Component,
    args: [{
      // eslint-disable-next-line @angular-eslint/component-selector
      selector: "[kendoContrastTool]",
      template: `
        <div class="k-contrast-ratio">
          <span class="k-contrast-ratio-text">{{contrastRatioText}}</span>
          @if (value) {
            @if (satisfiesAACondition) {
              <span class="k-contrast-validation k-text-success">
                <kendo-icon-wrapper name="check" [svgIcon]="checkIcon"></kendo-icon-wrapper>
                @if (satisfiesAAACondition) {
                  <kendo-icon-wrapper name="check" [svgIcon]="checkIcon"></kendo-icon-wrapper>
                }
              </span>
            } @else {
              <span class="k-contrast-validation k-text-error">
                <kendo-icon-wrapper name="x" [svgIcon]="xCircleIcon"></kendo-icon-wrapper>
              </span>
            }
          }
        </div>
        <div kendoContrastValidation
          type="AA"
          [value]="value"
          [pass]="satisfiesAACondition">
        </div>
        <div kendoContrastValidation
          type="AAA"
          [value]="value"
          [pass]="satisfiesAAACondition">
        </div>
        `,
      standalone: true,
      imports: [IconWrapperComponent, ContrastValidationComponent]
    }]
  }], () => [{
    type: LocalizationService
  }], {
    value: [{
      type: Input
    }],
    ratio: [{
      type: Input
    }]
  });
})();
var ColorContrastSvgComponent = class _ColorContrastSvgComponent {
  hostClass = true;
  wrapper;
  hsva;
  backgroundColor;
  paths;
  oldHsva;
  oldH;
  oldA;
  metrics;
  ngAfterViewInit() {
    if (!isDocumentAvailable()) {
      return;
    }
    this.metrics = this.wrapper.getBoundingClientRect();
    this.oldA = this.hsva.value.a;
    this.oldH = this.hsva.value.h;
    this.hsva.subscribe((value) => {
      if (value.h !== this.oldH || value.a !== this.oldA) {
        this.oldH = value.h;
        this.oldA = value.a;
        this.setPaths();
      }
    });
  }
  ngOnChanges(changes) {
    if (isPresent2(changes["backgroundColor"]) && this.metrics) {
      this.setPaths();
    }
  }
  setPaths() {
    const bezierCommandCalc = bezierCommand(controlPoint(line));
    this.paths = [svgPath(this.getPaths(AA_RATIO, STEP_COUNT), bezierCommandCalc), svgPath(this.getPaths(AA_RATIO, STEP_COUNT, true), bezierCommandCalc), svgPath(this.getPaths(AAA_RATIO, STEP_COUNT), bezierCommandCalc), svgPath(this.getPaths(AAA_RATIO, STEP_COUNT, true), bezierCommandCalc)];
  }
  findValue(contrast, saturation, low, high, comparer) {
    const mid = (low + high) / 2;
    const hsva = __spreadProps(__spreadValues({}, this.hsva.value), {
      s: saturation / this.metrics.width,
      v: 1 - mid / this.metrics.height
    });
    const currentContrast = getContrastFromTwoRGBAs(getRGBA(getColorFromHSV(hsva)), getRGBA(this.backgroundColor || ""));
    if (low + 0.5 > high) {
      if (currentContrast < contrast + 1 && currentContrast > contrast - 1) {
        return mid;
      } else {
        return null;
      }
    }
    if (comparer(currentContrast, contrast)) {
      return this.findValue(contrast, saturation, low, high - (high - low) / 2, comparer);
    }
    return this.findValue(contrast, saturation, low + (high - low) / 2, high, comparer);
  }
  getPaths(contrast, stepCount, reversed = false) {
    const points = [];
    for (let i = 0; i <= this.metrics.width; i += this.metrics.width / stepCount) {
      const value = this.findValue(contrast, i, 0, this.metrics.height, reversed ? (a, b) => a < b : (a, b) => a > b);
      if (value !== null) {
        points.push([i, value]);
      }
    }
    return points;
  }
  static ɵfac = function ColorContrastSvgComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ColorContrastSvgComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _ColorContrastSvgComponent,
    selectors: [["", "kendoColorContrastSvg", ""]],
    hostVars: 2,
    hostBindings: function ColorContrastSvgComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("k-color-contrast-svg", ctx.hostClass);
      }
    },
    inputs: {
      wrapper: "wrapper",
      hsva: "hsva",
      backgroundColor: "backgroundColor"
    },
    standalone: true,
    features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    attrs: _c27,
    decls: 2,
    vars: 0,
    consts: [["fill", "none", "stroke", "white", "stroke-width", "1"]],
    template: function ColorContrastSvgComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵrepeaterCreate(0, ColorContrastSvgComponent_For_1_Template, 1, 1, ":svg:path", 0, ɵɵrepeaterTrackByIdentity);
      }
      if (rf & 2) {
        ɵɵrepeater(ctx.paths);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColorContrastSvgComponent, [{
    type: Component,
    args: [{
      // eslint-disable-next-line @angular-eslint/component-selector
      selector: "[kendoColorContrastSvg]",
      template: `
        @for (path of paths; track path) {
          <svg:path [attr.d]="path" fill="none" stroke="white" stroke-width="1"></svg:path>
          }
        `,
      standalone: true,
      imports: []
    }]
  }], null, {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-color-contrast-svg"]
    }],
    wrapper: [{
      type: Input
    }],
    hsva: [{
      type: Input
    }],
    backgroundColor: [{
      type: Input
    }]
  });
})();
var ColorPickerMessages = class _ColorPickerMessages extends ComponentMessages {
  /**
   * Sets the `aria-label` for the ColorPalette component when the value is empty.
   */
  colorPaletteNoColor;
  /**
   * Sets the `aria-label` for the ColorGradient component when the value is empty.
   */
  colorGradientNoColor;
  /**
   * Sets the `aria-label` for the FlatColorPicker component when the value is empty.
   */
  flatColorPickerNoColor;
  /**
   * Sets the `aria-label` for the ColorPicker component when the value is empty.
   */
  colorPickerNoColor;
  /**
   * Sets the title for the gradient color drag handle chooser.
   */
  colorGradientHandle;
  /**
   * Sets the title for the clear button.
   */
  clearButton;
  /**
   * Sets the title for the hue slider handle.
   */
  hueSliderHandle;
  /**
   * Sets the title for the opacity slider handle.
   */
  opacitySliderHandle;
  /**
   * Sets the placeholder for the HEX color input.
   */
  hexInputPlaceholder;
  /**
   * Sets the placeholder for the red color input.
   */
  redInputPlaceholder;
  /**
   * Sets the placeholder for the green color input.
   */
  greenInputPlaceholder;
  /**
   * Sets the placeholder for the blue color input.
   */
  blueInputPlaceholder;
  /**
   * Sets the placeholder for the alpha input.
   */
  alphaInputPlaceholder;
  /**
   * Sets the `aria-label` for the red color input.
   */
  redChannelLabel;
  /**
   * Sets the `aria-label` for the green color input.
   */
  greenChannelLabel;
  /**
   * Sets the `aria-label` for the blue color input.
   */
  blueChannelLabel;
  /**
   * Sets the `aria-label` for the alpha color input.
   */
  alphaChannelLabel;
  /**
   * Sets the "Pass" message for the contrast tool.
   */
  passContrast;
  /**
   * Sets the "Fail" message for the contrast tool.
   */
  failContrast;
  /**
   * Sets the "Contrast ratio" message for the contrast tool.
   */
  contrastRatio;
  /**
   * Sets the message for the color preview pane.
   */
  previewColor;
  /**
   * Sets the message for the selected color pane.
   */
  revertSelection;
  /**
   * Sets the message for the gradient view button.
   */
  gradientView;
  /**
   * Sets the message for the palette view button.
   */
  paletteView;
  /**
   * Sets the message for the input format toggle button.
   */
  formatButton;
  /**
   * Sets the message for the **Apply** action button.
   */
  applyButton;
  /**
   * Sets the message for the **Cancel** action button.
   */
  cancelButton;
  /**
   * Sets the title of the **Close** button for the ActionSheet in adaptive mode.
   */
  adaptiveCloseButtonTitle;
  /**
   * Sets the title for the ActionSheet in adaptive mode.
   */
  adaptiveTitle;
  /**
   * Sets the aria-label attribute of the ColorPicker toggle button.
   */
  toggleButtonLabel;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵColorPickerMessages_BaseFactory;
    return function ColorPickerMessages_Factory(__ngFactoryType__) {
      return (ɵColorPickerMessages_BaseFactory || (ɵColorPickerMessages_BaseFactory = ɵɵgetInheritedFactory(_ColorPickerMessages)))(__ngFactoryType__ || _ColorPickerMessages);
    };
  })();
  static ɵdir = ɵɵdefineDirective({
    type: _ColorPickerMessages,
    selectors: [["kendo-colorpicker-messages-base"]],
    inputs: {
      colorPaletteNoColor: "colorPaletteNoColor",
      colorGradientNoColor: "colorGradientNoColor",
      flatColorPickerNoColor: "flatColorPickerNoColor",
      colorPickerNoColor: "colorPickerNoColor",
      colorGradientHandle: "colorGradientHandle",
      clearButton: "clearButton",
      hueSliderHandle: "hueSliderHandle",
      opacitySliderHandle: "opacitySliderHandle",
      hexInputPlaceholder: "hexInputPlaceholder",
      redInputPlaceholder: "redInputPlaceholder",
      greenInputPlaceholder: "greenInputPlaceholder",
      blueInputPlaceholder: "blueInputPlaceholder",
      alphaInputPlaceholder: "alphaInputPlaceholder",
      redChannelLabel: "redChannelLabel",
      greenChannelLabel: "greenChannelLabel",
      blueChannelLabel: "blueChannelLabel",
      alphaChannelLabel: "alphaChannelLabel",
      passContrast: "passContrast",
      failContrast: "failContrast",
      contrastRatio: "contrastRatio",
      previewColor: "previewColor",
      revertSelection: "revertSelection",
      gradientView: "gradientView",
      paletteView: "paletteView",
      formatButton: "formatButton",
      applyButton: "applyButton",
      cancelButton: "cancelButton",
      adaptiveCloseButtonTitle: "adaptiveCloseButtonTitle",
      adaptiveTitle: "adaptiveTitle",
      toggleButtonLabel: "toggleButtonLabel"
    },
    features: [ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColorPickerMessages, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "kendo-colorpicker-messages-base"
    }]
  }], null, {
    colorPaletteNoColor: [{
      type: Input
    }],
    colorGradientNoColor: [{
      type: Input
    }],
    flatColorPickerNoColor: [{
      type: Input
    }],
    colorPickerNoColor: [{
      type: Input
    }],
    colorGradientHandle: [{
      type: Input
    }],
    clearButton: [{
      type: Input
    }],
    hueSliderHandle: [{
      type: Input
    }],
    opacitySliderHandle: [{
      type: Input
    }],
    hexInputPlaceholder: [{
      type: Input
    }],
    redInputPlaceholder: [{
      type: Input
    }],
    greenInputPlaceholder: [{
      type: Input
    }],
    blueInputPlaceholder: [{
      type: Input
    }],
    alphaInputPlaceholder: [{
      type: Input
    }],
    redChannelLabel: [{
      type: Input
    }],
    greenChannelLabel: [{
      type: Input
    }],
    blueChannelLabel: [{
      type: Input
    }],
    alphaChannelLabel: [{
      type: Input
    }],
    passContrast: [{
      type: Input
    }],
    failContrast: [{
      type: Input
    }],
    contrastRatio: [{
      type: Input
    }],
    previewColor: [{
      type: Input
    }],
    revertSelection: [{
      type: Input
    }],
    gradientView: [{
      type: Input
    }],
    paletteView: [{
      type: Input
    }],
    formatButton: [{
      type: Input
    }],
    applyButton: [{
      type: Input
    }],
    cancelButton: [{
      type: Input
    }],
    adaptiveCloseButtonTitle: [{
      type: Input
    }],
    adaptiveTitle: [{
      type: Input
    }],
    toggleButtonLabel: [{
      type: Input
    }]
  });
})();
var LocalizedColorPickerMessagesDirective = class _LocalizedColorPickerMessagesDirective extends ColorPickerMessages {
  service;
  constructor(service) {
    super();
    this.service = service;
  }
  static ɵfac = function LocalizedColorPickerMessagesDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LocalizedColorPickerMessagesDirective)(ɵɵdirectiveInject(LocalizationService));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _LocalizedColorPickerMessagesDirective,
    selectors: [["", "kendoColorPickerLocalizedMessages", ""], ["", "kendoFlatColorPickerLocalizedMessages", ""], ["", "kendoColorGradientLocalizedMessages", ""], ["", "kendoColorPaletteLocalizedMessages", ""]],
    standalone: true,
    features: [ɵɵProvidersFeature([{
      provide: ColorPickerMessages,
      useExisting: forwardRef(() => _LocalizedColorPickerMessagesDirective)
    }]), ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LocalizedColorPickerMessagesDirective, [{
    type: Directive,
    args: [{
      providers: [{
        provide: ColorPickerMessages,
        useExisting: forwardRef(() => LocalizedColorPickerMessagesDirective)
      }],
      selector: "[kendoColorPickerLocalizedMessages], [kendoFlatColorPickerLocalizedMessages], [kendoColorGradientLocalizedMessages], [kendoColorPaletteLocalizedMessages]",
      standalone: true
    }]
  }], () => [{
    type: LocalizationService
  }], null);
})();
var serial$3 = 0;
var DEFAULT_SIZE$7 = "medium";
var ColorGradientComponent = class _ColorGradientComponent {
  host;
  ngZone;
  renderer;
  cdr;
  localizationService;
  injector;
  hostClasses = true;
  get readonlyAttribute() {
    return this.ariaAttributesEnabled ? this.readonly : void 0;
  }
  get disabledClass() {
    return this.disabled;
  }
  get gradientId() {
    return this.id;
  }
  direction;
  get hostTabindex() {
    return this.tabindex?.toString() || "0";
  }
  get ariaRole() {
    return this.ariaAttributesEnabled ? "textbox" : void 0;
  }
  get isControlInvalid() {
    return this.ariaAttributesEnabled ? this.control?.invalid?.toString() : void 0;
  }
  get isDisabled() {
    return this.disabled?.toString() || void 0;
  }
  /**
   * @hidden
   */
  enterHandler(event) {
    if (event.target !== this.host.nativeElement) {
      return;
    }
    this.internalNavigation = true;
    this.gradientDragHandle.nativeElement.focus();
  }
  /**
   * @hidden
   */
  escapeHandler(event) {
    if (!this.host.nativeElement.matches(":focus")) {
      event.stopImmediatePropagation();
    }
    this.internalNavigation = false;
    this.host.nativeElement.focus();
  }
  /**
   * @hidden
   */
  focusHandler(ev) {
    this.internalNavigation = ev.target !== this.host.nativeElement;
  }
  /**
   * @hidden
   */
  adaptiveMode = false;
  /**
   * @hidden
   */
  id = `k-colorgradient-${serial$3++}`;
  /**
   * Shows or hides the alpha slider.
   *
   * @default true
   */
  opacity = true;
  /**
   * Sets the size of the ColorGradient internal elements.
   *
   * @default 'medium'
   */
  set size(size) {
    const newSize = size || DEFAULT_SIZE$7;
    this.handleClasses(newSize, "size");
    this._size = newSize;
  }
  get size() {
    return this._size;
  }
  /**
   * Disables the ColorGradient. To disable it in reactive forms, see [Forms Support](slug:formssupport_colorgradient#toc-managing-the-colorgradient-disabled-state-in-reactive-forms).
   *
   * @default false
   */
  disabled = false;
  /**
   * Sets the read-only state of the ColorGradient.
   *
   * @default false
   */
  readonly = false;
  /**
   * Shows or hides the **Clear color** button.
   *
   * @default false
   */
  clearButton = false;
  /**
   * Sets the delay (in milliseconds) before the value changes on handle drag.
   *
   * @default 0
   */
  delay = 0;
  /**
   * Sets the value of the selected color.
   */
  set value(value) {
    this._value = parseColor2(value, this.format, this.opacity);
  }
  get value() {
    return this._value;
  }
  /**
   * Enables the color contrast tool that checks the contrast ratio of the selected color against a predefined background color. [See example](slug:contrasttool_colorgradient).
   */
  set contrastTool(value) {
    this._contrastTool = parseColor2(value, this.format, this.opacity);
  }
  get contrastTool() {
    return this._contrastTool;
  }
  /**
   * Sets the [`tabindex`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) of the component.
   *
   * @default 0
   */
  set tabindex(value) {
    if (isPresent2(value)) {
      const tabindex = Number(value);
      this._tabindex = !isNaN(tabindex) ? tabindex : 0;
    } else {
      this._tabindex = value;
    }
  }
  get tabindex() {
    return !this.disabled ? this._tabindex : void 0;
  }
  /**
   * Sets the output format of the ColorGradient. The input value may be in a different format, but it will be parsed into the output format after the component processes it.
   *
   * @default 'rgba'
   */
  format = DEFAULT_OUTPUT_FORMAT;
  /**
   * Fires when the user selects a new color..
   */
  valueChange = new EventEmitter();
  /**
   * @hidden
   */
  backgroundColor = DEFAULT_GRADIENT_BACKGROUND_COLOR;
  /**
   * @hidden
   *
   * Represents the currently selected `hue`, `saturation`, `value`, and `alpha` values.
   * The values are initially set in `ngOnInit` or in `ngOnChanges` and are
   * updated on moving the drag handle or the sliders.
   */
  hsva = new BehaviorSubject({});
  /**
   * Returns `true` if the component or its content is focused.
   */
  get isFocused() {
    if (!(isDocumentAvailable() && isPresent2(this.host))) {
      return false;
    }
    return this.host.nativeElement === document.activeElement || this.host.nativeElement.contains(document.activeElement);
  }
  /**
   * @hidden
   */
  get alphaSliderValue() {
    if (!(isPresent2(this.hsva.value) && isPresent2(this.hsva.value.a))) {
      return;
    }
    return this.hsva.value.a * 100;
  }
  /**
   * Sets the step (in pixels) for moving the gradient drag handle with the arrow keys.
   *
   * @default 5
   */
  gradientSliderStep = DRAGHANDLE_MOVE_SPEED;
  /**
   * Sets the step (in pixels) for moving the gradient drag handle with `Shift+arrow keys`.
   *
   * @default 2
   */
  gradientSliderSmallStep = DRAGHANDLE_MOVE_SPEED_SMALL_STEP;
  /**
   * Controls whether ARIA attributes should be applied to the component.
   * When used within FlatColorPicker, this should be set to false to comply with accessibility guidelines.
   *
   * @default true
   * @hidden
   */
  ariaAttributesEnabled = true;
  gradientDragHandle;
  inputs;
  alphaSlider;
  gradientWrapper;
  hsvRectangle;
  /**
   * @hidden
   */
  internalNavigation = false;
  /**
   * @hidden
   */
  dropletSlashIcon = dropletSlashIcon;
  _value;
  _tabindex = 0;
  _contrastTool;
  listeners = [];
  hueSliderTouched = false;
  alphaSliderTouched = false;
  _size = "medium";
  updateValues = new Subject();
  changeRequestsSubscription;
  dynamicRTLSubscription;
  hsvHandleCoordinates = {
    x: 0,
    y: 0
  };
  get gradientRect() {
    return this.gradientWrapper.nativeElement.getBoundingClientRect();
  }
  /**
   * @hidden
   */
  get hsvSliderValueText() {
    return `X: ${this.hsvHandleCoordinates.x} Y: ${this.hsvHandleCoordinates.y}`;
  }
  /**
   * @hidden
   */
  get contrastToolVisible() {
    return this.contrastTool && this.contrastTool.length > 0;
  }
  /**
   * @hidden
   */
  get innerTabIndex() {
    return this.internalNavigation ? 0 : -1;
  }
  control;
  constructor(host, ngZone, renderer, cdr, localizationService, injector) {
    this.host = host;
    this.ngZone = ngZone;
    this.renderer = renderer;
    this.cdr = cdr;
    this.localizationService = localizationService;
    this.injector = injector;
    A(packageMetadata);
    this.dynamicRTLSubscription = localizationService.changes.subscribe(({
      rtl
    }) => {
      this.direction = rtl ? "rtl" : "ltr";
    });
  }
  ngOnInit() {
    this.control = this.injector.get(NgControl, null);
  }
  ngAfterViewInit() {
    const stylingInputs = ["size"];
    stylingInputs.forEach((input) => {
      this.handleClasses(this[input], input);
    });
    this.ngZone.onStable.pipe(take(1)).subscribe(() => {
      this.updateUI();
      this.cdr.detectChanges();
    });
    this.addEventListeners();
    this.subscribeChanges();
  }
  ngOnChanges(changes) {
    if (isChanged("value", changes) && !this.isFocused) {
      this.updateUI();
    }
    if (isChanged("delay", changes)) {
      this.unsubscribeChanges();
      this.subscribeChanges();
    }
  }
  ngOnDestroy() {
    this.listeners.forEach((removeListener) => removeListener());
    if (this.dynamicRTLSubscription) {
      this.dynamicRTLSubscription.unsubscribe();
    }
    this.unsubscribeChanges();
  }
  /**
   * Focuses the component.
   */
  focus() {
    if (this.disabled) {
      return;
    }
    this.gradientDragHandle.nativeElement.focus();
  }
  /**
   * @hidden
   */
  reset() {
    this.handleValueChange(void 0);
    this.updateUI();
  }
  /**
   * @hidden
   */
  handleDragPress(args) {
    if (this.disabled || this.readonly || !isPresent2(args.originalEvent)) {
      return;
    }
    this.focus();
    args.originalEvent.preventDefault();
  }
  /**
   * @hidden
   */
  onHandleDrag(args) {
    if (this.disabled || this.readonly) {
      return;
    }
    this.renderer.addClass(this.gradientWrapper.nativeElement, "k-dragging");
    this.changePosition(args);
  }
  /**
   * @hidden
   */
  onHandleRelease() {
    if (this.disabled || this.readonly) {
      return;
    }
    this.renderer.removeClass(this.gradientWrapper.nativeElement, "k-dragging");
    this.handleValueChange(getColorFromHSV(this.hsva.value, this.format, this.opacity));
  }
  /**
   * @hidden
   */
  onKeyboardAction(args) {
    if (this.disabled || this.readonly) {
      return;
    }
    if (args.key && args.key.indexOf("Arrow") !== -1) {
      args.preventDefault();
      const dragHandleElement = this.gradientDragHandle.nativeElement;
      this.renderer.addClass(this.gradientWrapper.nativeElement, "k-dragging");
      let keyboardMoveX = 0;
      let keyboardMoveY = 0;
      const shiftKey = args.shiftKey;
      switch (args.key) {
        case "ArrowRight":
          keyboardMoveX = shiftKey ? this.gradientSliderSmallStep : this.gradientSliderStep;
          break;
        case "ArrowLeft":
          keyboardMoveX = shiftKey ? -this.gradientSliderSmallStep : -this.gradientSliderStep;
          break;
        case "ArrowUp":
          keyboardMoveY = shiftKey ? -this.gradientSliderSmallStep : -this.gradientSliderStep;
          break;
        case "ArrowDown":
          keyboardMoveY = shiftKey ? this.gradientSliderSmallStep : this.gradientSliderStep;
          break;
        default:
          break;
      }
      const newY = parseInt(dragHandleElement.style.top, 10) + keyboardMoveY;
      const newX = parseInt(dragHandleElement.style.left, 10) + keyboardMoveX;
      this.renderer.setStyle(dragHandleElement, "top", `${newY}px`);
      this.renderer.setStyle(dragHandleElement, "left", `${newX}px`);
      this.ngZone.run(() => this.moveDragHandle(newX, newY));
    }
  }
  /**
   * @hidden
   */
  changePosition(position) {
    if (this.disabled || this.readonly) {
      return;
    }
    this.gradientDragHandle.nativeElement.focus();
    const gradientRect = this.gradientRect;
    const newX = position.clientX - gradientRect.left;
    const newY = position.clientY - gradientRect.top;
    this.ngZone.run(() => this.moveDragHandle(newX, newY));
  }
  /**
   * @hidden
   */
  handleHueSliderChange(hue) {
    const hsva = this.hsva.value;
    hsva.h = hue;
    this.hsva.next(hsva);
    this.handleValueChange(getColorFromHSV(this.hsva.value, this.format, this.opacity));
    this.backgroundColor = getColorFromHue(hue);
    this.setBackgroundColor(this.backgroundColor);
    this.setAlphaSliderBackground(this.backgroundColor);
    this.hueSliderTouched = true;
  }
  /**
   * @hidden
   */
  handleAlphaSliderChange(alpha) {
    const hsva = this.hsva.value;
    hsva.a = alpha / 100;
    this.hsva.next(hsva);
    this.handleValueChange(getColorFromHSV(this.hsva.value, this.format, this.opacity));
    this.alphaSliderTouched = true;
  }
  /**
   * @hidden
   */
  handleInputsValueChange(color) {
    const parsed = parseColor2(color, this.format, this.opacity);
    if (this.value !== parsed) {
      this.handleValueChange(parsed);
      this.updateUI();
    }
  }
  /**
   * @hidden
   */
  writeValue(value) {
    this.value = value;
    if (isPresent2(this.gradientWrapper)) {
      this.updateUI();
    }
    this.cdr.markForCheck();
  }
  /**
   * @hidden
   */
  registerOnChange(fn) {
    this.notifyNgChanged = fn;
  }
  /**
   * @hidden
   */
  registerOnTouched(fn) {
    this.notifyNgTouched = fn;
  }
  /**
   * @hidden
   */
  setDisabledState(isDisabled) {
    this.cdr.markForCheck();
    this.disabled = isDisabled;
  }
  /**
   * @hidden
   */
  get colorGradientHandleTitle() {
    return this.localizationService.get("colorGradientHandle");
  }
  /**
   * @hidden
   */
  get colorGradientHandleAriaLabel() {
    const parsed = parseColor2(this.value, this.format, this.opacity);
    return `${this.value ? parsed : this.localizationService.get("colorGradientNoColor")}`;
  }
  /**
   * @hidden
   */
  get hueSliderTitle() {
    return this.localizationService.get("hueSliderHandle");
  }
  /**
   * @hidden
   */
  get opacitySliderTitle() {
    return this.localizationService.get("opacitySliderHandle");
  }
  /**
   * @hidden
   */
  get clearButtonTitle() {
    return this.localizationService.get("clearButton");
  }
  /**
   * @hidden
   * Used by the FloatingLabel to determine if the component is empty.
   */
  isEmpty() {
    return false;
  }
  notifyNgChanged = () => {
  };
  notifyNgTouched = () => {
  };
  moveDragHandle(positionX, positionY) {
    const gradientRect = this.gradientRect;
    const gradientRectWidth = gradientRect.width;
    const gradientRectHeight = gradientRect.height;
    const top = fitIntoBounds(positionY, 0, gradientRectHeight);
    const left = fitIntoBounds(positionX, 0, gradientRectWidth);
    this.setDragHandleElementPosition(top, left);
    const hsva = this.hsva.value;
    hsva.s = left / gradientRectWidth;
    hsva.v = 1 - top / gradientRectHeight;
    this.hsva.next(hsva);
    this.updateValues.next(getColorFromHSV(this.hsva.value, this.format, this.opacity));
    this.setAlphaSliderBackground(getColorFromHSV(__spreadProps(__spreadValues({}, this.hsva.value), {
      a: 1
    }), this.format, this.opacity));
  }
  handleValueChange(color) {
    if (this.value === color) {
      return;
    }
    this.value = color;
    this.valueChange.emit(color);
    this.notifyNgChanged(color);
    this.setHostElementAriaLabel();
  }
  setDragHandleElementPosition(top, left) {
    const dragHandle = this.gradientDragHandle.nativeElement;
    this.hsvHandleCoordinates = {
      x: left,
      y: top
    };
    this.renderer.setStyle(dragHandle, "top", `${top}px`);
    this.renderer.setStyle(dragHandle, "left", `${left}px`);
  }
  setAlphaSliderBackground(backgroundColor) {
    if (!isPresent2(this.alphaSlider)) {
      return;
    }
    const sliderTrack = this.alphaSlider.track.nativeElement;
    this.renderer.setStyle(sliderTrack, "background", `linear-gradient(to ${this.adaptiveMode ? "right" : "top"}, transparent, ${backgroundColor})`);
  }
  setHostElementAriaLabel() {
    if (!this.ariaAttributesEnabled) {
      this.renderer.removeAttribute(this.host.nativeElement, "aria-label");
      return;
    }
    const parsed = parseColor2(this.value, this.format, this.opacity);
    this.renderer.setAttribute(this.host.nativeElement, "aria-label", `${this.value ? parsed : this.localizationService.get("colorGradientNoColor")}`);
  }
  setBackgroundColor(color) {
    this.renderer.setStyle(this.hsvRectangle.nativeElement, "background", color);
  }
  updateUI() {
    if (!isDocumentAvailable()) {
      return;
    }
    if (this.hueSliderTouched || this.alphaSliderTouched) {
      this.hueSliderTouched = false;
      this.alphaSliderTouched = false;
      return;
    }
    this.hsva.next(this.value ? getHSV(this.value) : {
      h: 0,
      s: 0,
      v: 1,
      a: 1
    });
    const gradientRect = this.gradientRect;
    const top = (1 - this.hsva.value.v) * gradientRect.height;
    const left = this.hsva.value.s * gradientRect.width;
    this.setDragHandleElementPosition(top, left);
    this.backgroundColor = getColorFromHue(this.hsva.value.h);
    this.setBackgroundColor(this.backgroundColor);
    this.setAlphaSliderBackground(this.backgroundColor);
    this.setHostElementAriaLabel();
  }
  addEventListeners() {
    this.ngZone.runOutsideAngular(() => {
      const focusOutListener = this.renderer.listen(this.host.nativeElement, "focusout", (event) => {
        if (!containsFocus(this.host.nativeElement, event.relatedTarget) && isUntouched(this.host)) {
          this.ngZone.run(() => this.notifyNgTouched());
        }
      });
      const keydownListener = this.renderer.listen(this.gradientDragHandle.nativeElement, "keydown", (event) => {
        this.onKeyboardAction(event);
      });
      const keyupListener = this.renderer.listen(this.gradientDragHandle.nativeElement, "keyup", () => {
        this.renderer.removeClass(this.gradientWrapper.nativeElement, "k-dragging");
        if (!this.readonly && !this.disabled) {
          this.ngZone.run(() => this.handleValueChange(getColorFromHSV(this.hsva.value, this.format, this.opacity)));
        }
      });
      const dragHandleFocusInListener = this.renderer.listen(this.gradientDragHandle.nativeElement, "focusin", () => {
        this.renderer.addClass(this.gradientDragHandle.nativeElement, "k-focus");
      });
      const dragHandleFocusOutListener = this.renderer.listen(this.gradientDragHandle.nativeElement, "focusout", () => {
        this.renderer.removeClass(this.gradientDragHandle.nativeElement, "k-focus");
      });
      this.listeners.push(focusOutListener, keydownListener, keyupListener, dragHandleFocusInListener, dragHandleFocusOutListener);
    });
  }
  subscribeChanges() {
    this.changeRequestsSubscription = this.updateValues.pipe(throttleTime(this.delay)).subscribe((value) => {
      this.handleValueChange(value);
    });
  }
  unsubscribeChanges() {
    if (this.changeRequestsSubscription) {
      this.changeRequestsSubscription.unsubscribe();
    }
  }
  handleClasses(value, input) {
    const elem = this.host.nativeElement;
    const classes = getStylingClasses("colorgradient", input, this[input], value);
    if (classes.toRemove) {
      this.renderer.removeClass(elem, classes.toRemove);
    }
    if (classes.toAdd) {
      this.renderer.addClass(elem, classes.toAdd);
    }
  }
  static ɵfac = function ColorGradientComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ColorGradientComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(Injector));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _ColorGradientComponent,
    selectors: [["kendo-colorgradient"]],
    viewQuery: function ColorGradientComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c28, 5);
        ɵɵviewQuery(_c29, 5);
        ɵɵviewQuery(_c30, 5);
        ɵɵviewQuery(_c31, 5);
        ɵɵviewQuery(_c32, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.gradientDragHandle = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.inputs = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.alphaSlider = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.gradientWrapper = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.hsvRectangle = _t.first);
      }
    },
    hostVars: 13,
    hostBindings: function ColorGradientComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("keydown.enter", function ColorGradientComponent_keydown_enter_HostBindingHandler($event) {
          return ctx.enterHandler($event);
        })("keydown.escape", function ColorGradientComponent_keydown_escape_HostBindingHandler($event) {
          return ctx.escapeHandler($event);
        })("focusin", function ColorGradientComponent_focusin_HostBindingHandler($event) {
          return ctx.focusHandler($event);
        });
      }
      if (rf & 2) {
        ɵɵattribute("aria-readonly", ctx.readonlyAttribute)("id", ctx.gradientId)("dir", ctx.direction)("tabindex", ctx.hostTabindex)("role", ctx.ariaRole)("aria-invalid", ctx.isControlInvalid)("aria-disabled", ctx.isDisabled);
        ɵɵclassProp("k-colorgradient", ctx.hostClasses)("k-disabled", ctx.disabledClass)("k-readonly", ctx.readonly);
      }
    },
    inputs: {
      adaptiveMode: "adaptiveMode",
      id: "id",
      opacity: "opacity",
      size: "size",
      disabled: "disabled",
      readonly: "readonly",
      clearButton: "clearButton",
      delay: "delay",
      value: "value",
      contrastTool: "contrastTool",
      tabindex: "tabindex",
      format: "format",
      gradientSliderStep: "gradientSliderStep",
      gradientSliderSmallStep: "gradientSliderSmallStep",
      ariaAttributesEnabled: "ariaAttributesEnabled"
    },
    outputs: {
      valueChange: "valueChange"
    },
    exportAs: ["kendoColorGradient"],
    standalone: true,
    features: [ɵɵProvidersFeature([{
      multi: true,
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _ColorGradientComponent)
    }, {
      provide: KendoInput,
      useExisting: forwardRef(() => _ColorGradientComponent)
    }, ColorGradientLocalizationService, {
      provide: LocalizationService,
      useExisting: ColorGradientLocalizationService
    }, {
      provide: L10N_PREFIX,
      useValue: "kendo.colorgradient"
    }]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    decls: 16,
    vars: 46,
    consts: () => {
      let i18n_10;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_10 = goog.getMsg("Colorgradient no color chosen");
        i18n_10 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_10;
      } else {
        i18n_10 = $localize`:kendo.colorgradient.colorGradientNoColor|The aria-label applied to the ColorGradient component when the value is empty.:Colorgradient no color chosen`;
      }
      let i18n_11;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_11 = goog.getMsg("Choose color");
        i18n_11 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_11;
      } else {
        i18n_11 = $localize`:kendo.colorgradient.colorGradientHandle|The title for the gradient color drag handle chooser.:Choose color`;
      }
      let i18n_12;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_12 = goog.getMsg("Clear value");
        i18n_12 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_12;
      } else {
        i18n_12 = $localize`:kendo.colorgradient.clearButton|The title for the clear button.:Clear value`;
      }
      let i18n_13;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_13 = goog.getMsg("Set hue");
        i18n_13 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_13;
      } else {
        i18n_13 = $localize`:kendo.colorgradient.hueSliderHandle|The title for the hue slider handle.:Set hue`;
      }
      let i18n_14;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_14 = goog.getMsg("Set opacity");
        i18n_14 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_14;
      } else {
        i18n_14 = $localize`:kendo.colorgradient.opacitySliderHandle|The title for the opacity slider handle.:Set opacity`;
      }
      let i18n_15;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_15 = goog.getMsg("Pass");
        i18n_15 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_15;
      } else {
        i18n_15 = $localize`:kendo.colorgradient.passContrast|The pass message for the contrast tool.:Pass`;
      }
      let i18n_16;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_16 = goog.getMsg("Fail");
        i18n_16 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_16;
      } else {
        i18n_16 = $localize`:kendo.colorgradient.failContrast|The fail message for the contrast tool.:Fail`;
      }
      let i18n_17;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_17 = goog.getMsg("Contrast ratio");
        i18n_17 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_17;
      } else {
        i18n_17 = $localize`:kendo.colorgradient.contrastRatio|The contrast ratio message for the contrast tool.:Contrast ratio`;
      }
      let i18n_18;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_18 = goog.getMsg("Change color format");
        i18n_18 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_18;
      } else {
        i18n_18 = $localize`:kendo.colorgradient.formatButton|The message for the input format toggle button.:Change color format`;
      }
      let i18n_19;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_19 = goog.getMsg("Red channel");
        i18n_19 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_19;
      } else {
        i18n_19 = $localize`:kendo.colorgradient.redChannelLabel|The label of the NumericTextBox representing the red color channel.:Red channel`;
      }
      let i18n_20;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_20 = goog.getMsg("Green channel");
        i18n_20 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_20;
      } else {
        i18n_20 = $localize`:kendo.colorgradient.greenChannelLabel|The label of the NumericTextBox representing the green color channel.:Green channel`;
      }
      let i18n_21;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_21 = goog.getMsg("Blue channel");
        i18n_21 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_21;
      } else {
        i18n_21 = $localize`:kendo.colorgradient.blueChannelLabel|The label of the NumericTextBox representing the blue color channel.:Blue channel`;
      }
      let i18n_22;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_22 = goog.getMsg("Alpha channel");
        i18n_22 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_22;
      } else {
        i18n_22 = $localize`:kendo.colorgradient.alphaChannelLabel|The label of the NumericTextBox representing the alpha color channel.:Alpha channel`;
      }
      let i18n_23;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_23 = goog.getMsg("R");
        i18n_23 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_23;
      } else {
        i18n_23 = $localize`:kendo.colorgradient.redChannelLabel|The label of the NumericTextBox representing the red color channel.:R`;
      }
      let i18n_24;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_24 = goog.getMsg("G");
        i18n_24 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_24;
      } else {
        i18n_24 = $localize`:kendo.colorgradient.greenInputPlaceholder|The placeholder for the green color input.:G`;
      }
      let i18n_25;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_25 = goog.getMsg("B");
        i18n_25 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_25;
      } else {
        i18n_25 = $localize`:kendo.colorgradient.blueInputPlaceholder|The placeholder for the blue color input.:B`;
      }
      let i18n_26;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_26 = goog.getMsg("HEX");
        i18n_26 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_26;
      } else {
        i18n_26 = $localize`:kendo.colorgradient.hexInputPlaceholder|The placeholder for the HEX color input.:HEX`;
      }
      return [["hsvRectangle", ""], ["gradientWrapper", ""], ["gradientDragHandle", ""], ["inputs", ""], ["alphaSlider", ""], ["kendoColorGradientLocalizedMessages", "", "colorGradientNoColor", i18n_10, "colorGradientHandle", i18n_11, "clearButton", i18n_12, "hueSliderHandle", i18n_13, "opacitySliderHandle", i18n_14, "passContrast", i18n_15, "failContrast", i18n_16, "contrastRatio", i18n_17, "formatButton", i18n_18, "redChannelLabel", i18n_19, "greenChannelLabel", i18n_20, "blueChannelLabel", i18n_21, "alphaChannelLabel", i18n_22, "redChannelLabel", i18n_23, "greenInputPlaceholder", i18n_24, "blueInputPlaceholder", i18n_25, "hexInputPlaceholder", i18n_26], [3, "ngClass"], [1, "k-hsv-rectangle"], ["kendoDraggable", "", 1, "k-hsv-gradient", 3, "click", "kendoPress", "kendoDrag", "kendoRelease"], ["role", "slider", 1, "k-hsv-draghandle", "k-draghandle", 3, "keydown.shift.tab", "tabindex"], ["kendoColorContrastSvg", "", "xmlns", "http://www.w3.org/2000/svg", 1, "k-color-contrast-svg", 3, "wrapper", "hsva", "backgroundColor", "style"], ["kendoButton", "", "fillMode", "flat", "icon", "droplet-slash", 1, "k-clear-color", 3, "svgIcon", "size", "tabindex", "style"], ["tickPlacement", "none", 1, "k-hue-slider", "k-colorgradient-slider", 3, "valueChange", "ngClass", "dragHandleTitle", "tabindex", "disabled", "readonly", "showButtons", "vertical", "min", "max", "value", "smallStep", "largeStep"], ["tickPlacement", "none", 1, "k-alpha-slider", "k-colorgradient-slider", 3, "tabindex", "ngClass", "height", "dragHandleTitle", "disabled", "readonly", "showButtons", "vertical", "min", "max", "smallStep", "largeStep", "value"], [3, "valueChange", "tabOut", "tabindex", "opacity", "size", "formatView", "value", "disabled", "readonly"], ["kendoContrastTool", "", 1, "k-colorgradient-color-contrast", "k-vbox", 3, "value", "ratio"], ["kendoColorContrastSvg", "", "xmlns", "http://www.w3.org/2000/svg", 1, "k-color-contrast-svg", 3, "wrapper", "hsva", "backgroundColor"], ["kendoButton", "", "fillMode", "flat", "icon", "droplet-slash", 1, "k-clear-color", 3, "click", "keydown.enter", "keydown.space", "svgIcon", "size", "tabindex"], ["tickPlacement", "none", 1, "k-alpha-slider", "k-colorgradient-slider", 3, "valueChange", "tabindex", "ngClass", "dragHandleTitle", "disabled", "readonly", "showButtons", "vertical", "min", "max", "smallStep", "largeStep", "value"]];
    },
    template: function ColorGradientComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵelementContainer(0, 5);
        ɵɵelementStart(1, "div", 6)(2, "div", 7, 0)(4, "div", 8, 1);
        ɵɵlistener("click", function ColorGradientComponent_Template_div_click_4_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.changePosition($event));
        })("kendoPress", function ColorGradientComponent_Template_div_kendoPress_4_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.handleDragPress($event));
        })("kendoDrag", function ColorGradientComponent_Template_div_kendoDrag_4_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onHandleDrag($event));
        })("kendoRelease", function ColorGradientComponent_Template_div_kendoRelease_4_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onHandleRelease());
        });
        ɵɵelementStart(6, "div", 9, 2);
        ɵɵlistener("keydown.shift.tab", function ColorGradientComponent_Template_div_keydown_shift_tab_6_listener($event) {
          ɵɵrestoreView(_r1);
          const inputs_r2 = ɵɵreference(14);
          $event.preventDefault();
          return ɵɵresetView(inputs_r2.focusLast());
        });
        ɵɵelementEnd()();
        ɵɵtemplate(8, ColorGradientComponent_Conditional_8_Template, 1, 5, ":svg:svg", 10);
        ɵɵelementEnd();
        ɵɵelementStart(9, "div", 6);
        ɵɵtemplate(10, ColorGradientComponent_Conditional_10_Template, 1, 7, "button", 11);
        ɵɵelementStart(11, "kendo-slider", 12);
        ɵɵlistener("valueChange", function ColorGradientComponent_Template_kendo_slider_valueChange_11_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.handleHueSliderChange($event));
        });
        ɵɵelementEnd();
        ɵɵtemplate(12, ColorGradientComponent_Conditional_12_Template, 2, 16, "kendo-slider", 13);
        ɵɵelementEnd()();
        ɵɵelementStart(13, "kendo-colorinput", 14, 3);
        ɵɵlistener("valueChange", function ColorGradientComponent_Template_kendo_colorinput_valueChange_13_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.handleInputsValueChange($event));
        })("tabOut", function ColorGradientComponent_Template_kendo_colorinput_tabOut_13_listener() {
          ɵɵrestoreView(_r1);
          const gradientDragHandle_r7 = ɵɵreference(7);
          return ɵɵresetView(gradientDragHandle_r7.focus());
        });
        ɵɵelementEnd();
        ɵɵtemplate(15, ColorGradientComponent_Conditional_15_Template, 1, 2, "div", 15);
      }
      if (rf & 2) {
        const gradientWrapper_r4 = ɵɵreference(5);
        ɵɵadvance();
        ɵɵproperty("ngClass", ɵɵpureFunction2(37, _c33, ctx.adaptiveMode, !ctx.adaptiveMode));
        ɵɵadvance(3);
        ɵɵstyleProp("touch-action", "none");
        ɵɵadvance(2);
        ɵɵproperty("tabindex", ctx.innerTabIndex.toString());
        ɵɵattribute("title", ctx.colorGradientHandleTitle)("aria-label", ctx.colorGradientHandleTitle + " " + ctx.colorGradientHandleAriaLabel)("aria-valuetext", ctx.hsvSliderValueText)("aria-readonly", ctx.readonly ? ctx.readonly : void 0)("aria-disabled", ctx.disabled ? ctx.disabled : void 0)("aria-orientation", "undefined")("aria-valuenow", "0");
        ɵɵadvance(2);
        ɵɵconditional(ctx.contrastToolVisible && gradientWrapper_r4 ? 8 : -1);
        ɵɵadvance();
        ɵɵproperty("ngClass", ɵɵpureFunction3(40, _c34, ctx.clearButton, ctx.adaptiveMode, !ctx.adaptiveMode));
        ɵɵadvance();
        ɵɵconditional(ctx.clearButton ? 10 : -1);
        ɵɵadvance();
        ɵɵstyleProp("height", ctx.clearButton ? "140" : null, "px");
        ɵɵproperty("ngClass", ɵɵpureFunction1(44, _c35, ctx.clearButton))("dragHandleTitle", ctx.hueSliderTitle)("tabindex", ctx.innerTabIndex)("disabled", ctx.disabled)("readonly", ctx.readonly)("showButtons", false)("vertical", !ctx.adaptiveMode)("min", 0)("max", 360)("value", ctx.hsva.value.h)("smallStep", 5)("largeStep", 10);
        ɵɵadvance();
        ɵɵconditional(ctx.opacity ? 12 : -1);
        ɵɵadvance();
        ɵɵproperty("tabindex", ctx.innerTabIndex)("opacity", ctx.opacity)("size", ctx.size)("formatView", ctx.format)("value", ctx.value)("disabled", ctx.disabled)("readonly", ctx.readonly);
        ɵɵadvance(2);
        ɵɵconditional(ctx.contrastToolVisible ? 15 : -1);
      }
    },
    dependencies: [LocalizedColorPickerMessagesDirective, DraggableDirective, ColorContrastSvgComponent, ButtonComponent, SliderComponent, NgClass, ColorInputComponent, ContrastComponent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColorGradientComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoColorGradient",
      selector: "kendo-colorgradient",
      providers: [{
        multi: true,
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => ColorGradientComponent)
      }, {
        provide: KendoInput,
        useExisting: forwardRef(() => ColorGradientComponent)
      }, ColorGradientLocalizationService, {
        provide: LocalizationService,
        useExisting: ColorGradientLocalizationService
      }, {
        provide: L10N_PREFIX,
        useValue: "kendo.colorgradient"
      }],
      template: `
        <ng-container kendoColorGradientLocalizedMessages
          i18n-colorGradientNoColor="kendo.colorgradient.colorGradientNoColor|The aria-label applied to the ColorGradient component when the value is empty."
          colorGradientNoColor="Colorgradient no color chosen"
          i18n-colorGradientHandle="kendo.colorgradient.colorGradientHandle|The title for the gradient color drag handle chooser."
          colorGradientHandle="Choose color"
          i18n-clearButton="kendo.colorgradient.clearButton|The title for the clear button."
          clearButton="Clear value"
          i18n-hueSliderHandle="kendo.colorgradient.hueSliderHandle|The title for the hue slider handle."
          hueSliderHandle="Set hue"
          i18n-opacitySliderHandle="kendo.colorgradient.opacitySliderHandle|The title for the opacity slider handle."
          opacitySliderHandle="Set opacity"
          i18n-passContrast="kendo.colorgradient.passContrast|The pass message for the contrast tool."
          passContrast="Pass"
          i18n-failContrast="kendo.colorgradient.failContrast|The fail message for the contrast tool."
          failContrast="Fail"
          i18n-contrastRatio="kendo.colorgradient.contrastRatio|The contrast ratio message for the contrast tool."
          contrastRatio="Contrast ratio"
          i18n-formatButton="kendo.colorgradient.formatButton|The message for the input format toggle button."
          formatButton="Change color format"
          i18n-redChannelLabel="kendo.colorgradient.redChannelLabel|The label of the NumericTextBox representing the red color channel."
          redChannelLabel="Red channel"
          i18n-greenChannelLabel="kendo.colorgradient.greenChannelLabel|The label of the NumericTextBox representing the green color channel."
          greenChannelLabel="Green channel"
          i18n-blueChannelLabel="kendo.colorgradient.blueChannelLabel|The label of the NumericTextBox representing the blue color channel."
          blueChannelLabel="Blue channel"
          i18n-alphaChannelLabel="kendo.colorgradient.alphaChannelLabel|The label of the NumericTextBox representing the alpha color channel."
          alphaChannelLabel="Alpha channel"
          i18n-redInputPlaceholder="kendo.colorgradient.redInputPlaceholder|The placeholder for the red color input."
          redChannelLabel="R"
          i18n-greenInputPlaceholder="kendo.colorgradient.greenInputPlaceholder|The placeholder for the green color input."
          greenInputPlaceholder="G"
          i18n-blueInputPlaceholder="kendo.colorgradient.blueInputPlaceholder|The placeholder for the blue color input."
          blueInputPlaceholder="B"
          i18n-hexInputPlaceholder="kendo.colorgradient.hexInputPlaceholder|The placeholder for the HEX color input."
          hexInputPlaceholder="HEX">
        </ng-container>
        <div [ngClass]="{
                'k-colorgradient-canvas': true,
                'k-vstack': adaptiveMode,
                'k-hstack': !adaptiveMode
            }">
          <div class="k-hsv-rectangle" #hsvRectangle>
            <div
              #gradientWrapper
              kendoDraggable
              class="k-hsv-gradient"
              (click)="changePosition($event)"
              (kendoPress)="handleDragPress($event)"
              (kendoDrag)="onHandleDrag($event)"
              (kendoRelease)="onHandleRelease()"
              [style.touch-action]="'none'">
              <div
                #gradientDragHandle
                class="k-hsv-draghandle k-draghandle"
                [tabindex]="innerTabIndex.toString()"
                [attr.title]="colorGradientHandleTitle"
                [attr.aria-label]="colorGradientHandleTitle + ' ' + colorGradientHandleAriaLabel"
                role="slider"
                [attr.aria-valuetext]="hsvSliderValueText"
                [attr.aria-readonly]="readonly ? readonly : undefined"
                [attr.aria-disabled]="disabled ? disabled : undefined"
                [attr.aria-orientation]="'undefined'"
                [attr.aria-valuenow]="'0'"
                (keydown.shift.tab)="$event.preventDefault(); inputs.focusLast();">
              </div>
            </div>
            @if (contrastToolVisible && gradientWrapper) {
              <svg kendoColorContrastSvg
                class="k-color-contrast-svg"
                xmlns="http://www.w3.org/2000/svg"
                [wrapper]="gradientWrapper ? gradientWrapper : undefined"
                [hsva]="hsva"
                [backgroundColor]="contrastTool"
                [style]="'position: absolute; overflow: visible; pointer-events: none; left: 0px; top: 0px;'">
              </svg>
            }
          </div>
            <div [ngClass]="{
                    'k-hsv-controls': true,
                    'k-sliders-wrap-clearable': clearButton,
                    'k-vstack': adaptiveMode,
                    'k-hstack': !adaptiveMode
                }">
            @if (clearButton) {
              <button
                kendoButton
                class="k-clear-color"
                fillMode="flat"
                icon="droplet-slash"
                [svgIcon]="dropletSlashIcon"
                [size]="size"
                (click)="reset()"
                (keydown.enter)="reset()"
                (keydown.space)="reset()"
                [attr.aria-label]="clearButtonTitle"
                [attr.title]="clearButtonTitle"
                [tabindex]="innerTabIndex.toString()"
                [style]="'position: absolute; top: 0; left: 50%; transform: translateX(-50%);'"
                >
              </button>
            }
            <kendo-slider
              [ngClass]="{'k-align-self-end': clearButton}"
              [style.height.px]="clearButton ? '140' : null"
              class="k-hue-slider k-colorgradient-slider"
              [dragHandleTitle]="hueSliderTitle"
              [tabindex]="innerTabIndex"
              [disabled]="disabled"
              [readonly]="readonly"
              [showButtons]="false"
              tickPlacement="none"
              [vertical]="!adaptiveMode"
              [min]="0"
              [max]="360"
              [value]="hsva.value.h"
              [smallStep]="5"
              [largeStep]="10"
              (valueChange)="handleHueSliderChange($event)"
              >
            </kendo-slider>
            @if (opacity) {
              <kendo-slider
                #alphaSlider
                [tabindex]="innerTabIndex"
                [ngClass]="{'k-align-self-end': clearButton}"
                [style.height.px]="clearButton ? '140' : null"
                class="k-alpha-slider k-colorgradient-slider"
                [dragHandleTitle]="opacitySliderTitle"
                [disabled]="disabled"
                [readonly]="readonly"
                [showButtons]="false"
                tickPlacement="none"
                [vertical]="!adaptiveMode"
                [min]="0"
                [max]="100"
                [smallStep]="1"
                [largeStep]="10"
                [value]="alphaSliderValue"
                (valueChange)="handleAlphaSliderChange($event)"
                >
              </kendo-slider>
            }
          </div>
        </div>
        <kendo-colorinput  #inputs
          [tabindex]="innerTabIndex"
          [opacity]="opacity"
          [size]="size"
          [formatView]="format"
          [value]="value"
          [disabled]="disabled"
          [readonly]="readonly"
          (valueChange)="handleInputsValueChange($event)"
          (tabOut)="gradientDragHandle.focus()"
          >
        </kendo-colorinput>
        @if (contrastToolVisible) {
          <div class="k-colorgradient-color-contrast k-vbox"
            kendoContrastTool
            [value]="value"
            [ratio]="contrastTool">
          </div>
        }
        `,
      standalone: true,
      imports: [LocalizedColorPickerMessagesDirective, DraggableDirective, ColorContrastSvgComponent, ButtonComponent, SliderComponent, NgClass, ColorInputComponent, ContrastComponent]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: NgZone
  }, {
    type: Renderer2
  }, {
    type: ChangeDetectorRef
  }, {
    type: LocalizationService
  }, {
    type: Injector
  }], {
    hostClasses: [{
      type: HostBinding,
      args: ["class.k-colorgradient"]
    }],
    readonlyAttribute: [{
      type: HostBinding,
      args: ["attr.aria-readonly"]
    }],
    disabledClass: [{
      type: HostBinding,
      args: ["class.k-disabled"]
    }],
    gradientId: [{
      type: HostBinding,
      args: ["attr.id"]
    }],
    direction: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    hostTabindex: [{
      type: HostBinding,
      args: ["attr.tabindex"]
    }],
    ariaRole: [{
      type: HostBinding,
      args: ["attr.role"]
    }],
    isControlInvalid: [{
      type: HostBinding,
      args: ["attr.aria-invalid"]
    }],
    isDisabled: [{
      type: HostBinding,
      args: ["attr.aria-disabled"]
    }],
    enterHandler: [{
      type: HostListener,
      args: ["keydown.enter", ["$event"]]
    }],
    escapeHandler: [{
      type: HostListener,
      args: ["keydown.escape", ["$event"]]
    }],
    focusHandler: [{
      type: HostListener,
      args: ["focusin", ["$event"]]
    }],
    adaptiveMode: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    opacity: [{
      type: Input
    }],
    size: [{
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
    clearButton: [{
      type: Input
    }],
    delay: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    contrastTool: [{
      type: Input
    }],
    tabindex: [{
      type: Input
    }],
    format: [{
      type: Input
    }],
    valueChange: [{
      type: Output
    }],
    gradientSliderStep: [{
      type: Input
    }],
    gradientSliderSmallStep: [{
      type: Input
    }],
    ariaAttributesEnabled: [{
      type: Input
    }],
    gradientDragHandle: [{
      type: ViewChild,
      args: ["gradientDragHandle"]
    }],
    inputs: [{
      type: ViewChild,
      args: ["inputs"]
    }],
    alphaSlider: [{
      type: ViewChild,
      args: ["alphaSlider"]
    }],
    gradientWrapper: [{
      type: ViewChild,
      args: ["gradientWrapper"]
    }],
    hsvRectangle: [{
      type: ViewChild,
      args: ["hsvRectangle"]
    }]
  });
})();
var ColorPaletteLocalizationService = class _ColorPaletteLocalizationService extends LocalizationService {
  flatColorPickerLocalization;
  constructor(prefix, messageService, _rtl, flatColorPickerLocalization) {
    super(prefix, messageService, _rtl);
    this.flatColorPickerLocalization = flatColorPickerLocalization;
  }
  get(shortKey) {
    if (this.flatColorPickerLocalization) {
      return this.flatColorPickerLocalization.get(shortKey);
    }
    return super.get(shortKey);
  }
  static ɵfac = function ColorPaletteLocalizationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ColorPaletteLocalizationService)(ɵɵinject(L10N_PREFIX), ɵɵinject(MessageService, 8), ɵɵinject(RTL, 8), ɵɵinject(FlatColorPickerLocalizationService, 8));
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _ColorPaletteLocalizationService,
    factory: _ColorPaletteLocalizationService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColorPaletteLocalizationService, [{
    type: Injectable
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [L10N_PREFIX]
    }]
  }, {
    type: MessageService,
    decorators: [{
      type: Optional
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [RTL]
    }]
  }, {
    type: FlatColorPickerLocalizationService,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [FlatColorPickerLocalizationService]
    }]
  }], null);
})();
var PALETTEPRESETS = {
  basic: {
    colors: "000000,7f7f7f,880015,ed1c24,ff7f27,fff200,22b14c,00a2e8,3f48cc,a349a4,ffffff,c3c3c3,b97a57,ffaec9,ffc90e,efe4b0,b5e61d,99d9ea,7092be,c8bfe7",
    columns: 10
  },
  office: {
    colors: "ffffff, 000000, e6e6e6, 435569, 4371c4, ed7e32, a5a4a5, febf04, 5a9bd5, 71ae48, f2f2f3, 7f7f7f, d1cece, d5dde3, dae1f4, fce5d4, deeded, fff2cc, deeaf6, e1efd9, d7d8d8, 585959, aeabab, adbaca, b4c5e7, f6caac, dbdbdb, ffe498, bcd6ee, c5e0b2, bfbfc0, 3f3f3f, 767070, 8595b1, 8fabdb, f5b183, c9c8c9, fed965, 9bc4e5, a8d08d, a5a5a6, 262625, 393939, 334050, 2e5496, c45a11, 7b7b7a, bf9000, 2f75b5, 548235, 7f7f7f, 0b0c0c, 161616, 222a34, 203764, 843d0b, 525252, 7f6000, 1d4d79, 375623",
    columns: 10
  },
  apex: {
    colors: "ffffff, 000000, c9c2d1, 69676d, ceb966, 9cb084, 6bb1c9, 6585cf, 7e6bc9, a379bb, f2f2f2, 7f7f7f, f4f2f5, e0e0e2, f5f1e0, ebefe6, e1eff4, e0e6f5, e5e1f4, ece4f1, d8d8d8, 595959, e9e6ec, c2c1c5, ebe3c1, d7dfcd, c3dfe9, c1ceeb, cbc3e9, dac9e3, bfbfbf, 3f3f3f, dedae3, a4a3a8, e1d5a3, c3cfb5, a6d0de, a2b5e2, b1a6de, c7aed6, a5a5a5, 262626, 9688a5, 4e4d51, ae9638, 758c5a, 3d8da9, 365bb0, 533da9, 7d4d99, 7f7f7f, 0c0c0c, 635672, 343336, 746425, 4e5d3c, 295e70, 243c75, 372970, 533366",
    columns: 10
  },
  austin: {
    colors: "ffffff, 000000, caf278, 3e3d2d, 94c600, 71685a, ff6700, 909465, 956b43, fea022, f2f2f2, 7f7f7f, f4fce4, dddcd0, efffc0, e3e1dc, ffe0cb, e8e9df, ece1d6, feecd2, d8d8d8, 595959, e9f9c9, bbb9a1, dfff82, c8c3ba, ffc299, d2d4c0, dac3ad, fed9a6, bfbfbf, 3f3f3f, dff7ae, ada598, cfff43, ada598, ffa365, bcbfa1, c8a585, fec67a, a5a5a5, 262626, a9ea25, 2e2d21, 6f9400, 544e43, bf4d00, 6c6f4b, 6f5032, d77b00, 7f7f7f, 0c0c0c, 74a50f, 1f1e16, 4a6300, 38342d, 7f3300, 484a32, 4a3521, 8f5200",
    columns: 10
  },
  clarity: {
    colors: "ffffff, 292934, f3f2dc, d2533c, 93a299, ad8f67, 726056, 4c5a6a, 808da0, 79463d, f2f2f2, e7e7ec, e7e5b9, f6dcd8, e9ecea, eee8e0, e4dedb, d8dde3, e5e8ec, e9d6d3, d8d8d8, c4c4d1, d5d185, edbab1, d3d9d6, ded2c2, c9beb8, b2bcc8, ccd1d9, d3aea7, bfbfbf, 8a8aa3, aca73b, e4978a, bec7c1, cdbba3, af9e94, 8c9bac, b2bac6, bd857c, a5a5a5, 56566e, 56531d, a43925, 6b7c72, 866b48, 554840, 39434f, 5c697b, 5a342d, 7f7f7f, 3b3b4b, 22210b, 6d2619, 47534c, 594730, 39302b, 262d35, 3d4652, 3c231e",
    columns: 10
  },
  slipstream: {
    colors: "ffffff, 000000, b4dcfa, 212745, 4e67c8, 5eccf3, a7ea52, 5dceaf, ff8021, f14124, f2f2f2, 7f7f7f, 8bc9f7, c7cce4, dbe0f4, def4fc, edfadc, def5ef, ffe5d2, fcd9d3, d8d8d8, 595959, 4facf3, 909aca, b8c2e9, beeafa, dbf6b9, beebdf, ffcca6, f9b3a7, bfbfbf, 3f3f3f, 0d78c9, 5967af, 94a3de, 9ee0f7, caf297, 9de1cf, ffb279, f68d7b, a5a5a5, 262626, 063c64, 181d33, 31479f, 11b2eb, 81d319, 34ac8b, d85c00, c3260c, 7f7f7f, 0c0c0c, 021828, 101322, 202f6a, 0b769c, 568c11, 22725c, 903d00, 821908",
    columns: 10
  },
  metro: {
    colors: "ffffff, 000000, d6ecff, 4e5b6f, 7fd13b, ea157a, feb80a, 00addc, 738ac8, 1ab39f, f2f2f2, 7f7f7f, a7d6ff, d9dde4, e5f5d7, fad0e4, fef0cd, c5f2ff, e2e7f4, c9f7f1, d8d8d8, 595959, 60b5ff, b3bcca, cbecb0, f6a1c9, fee29c, 8be6ff, c7d0e9, 94efe3, bfbfbf, 3f3f3f, 007dea, 8d9baf, b2e389, f272af, fed46b, 51d9ff, aab8de, 5fe7d5, a5a5a5, 262626, 003e75, 3a4453, 5ea226, af0f5b, c58c00, 0081a5, 425ea9, 138677, 7f7f7f, 0c0c0c, 00192e, 272d37, 3f6c19, 750a3d, 835d00, 00566e, 2c3f71, 0c594f",
    columns: 10
  },
  flow: {
    colors: "ffffff, 000000, dbf5f9, 04617b, 0f6fc6, 009dd9, 0bd0d9, 10cf9b, 7cca62, a5c249, f2f2f2, 7f7f7f, b2e9f2, b4ecfc, c7e2fa, c4eeff, c9fafc, c9faed, e4f4df, edf2da, d8d8d8, 595959, 76d9e8, 6adafa, 90c6f6, 89deff, 93f5f9, 94f6db, cae9c0, dbe6b6, bfbfbf, 3f3f3f, 21b2c8, 20c8f7, 59a9f2, 4fceff, 5df0f6, 5ff2ca, b0dfa0, c9da91, a5a5a5, 262626, 105964, 02485c, 0b5394, 0075a2, 089ca2, 0b9b74, 54a838, 7e9532, 7f7f7f, 0c0c0c, 062328, 01303d, 073763, 004e6c, 05686c, 07674d, 387025, 546321",
    columns: 10
  },
  hardcover: {
    colors: "ffffff, 000000, ece9c6, 895d1d, 873624, d6862d, d0be40, 877f6c, 972109, aeb795, f2f2f2, 7f7f7f, e1dca5, f2e0c6, f0d0c9, f6e6d5, f5f2d8, e7e5e1, fbc7bc, eef0e9, d8d8d8, 595959, d0c974, e6c28d, e2a293, eeceaa, ece5b2, cfccc3, f78f7a, dee2d4, bfbfbf, 3f3f3f, a29a36, daa454, d4735e, e6b681, e2d88c, b7b2a5, f35838, ced3bf, a5a5a5, 262626, 514d1b, 664515, 65281a, a2641f, a39428, 655f50, 711806, 879464, 7f7f7f, 0c0c0c, 201e0a, 442e0e, 431b11, 6c4315, 6d621a, 433f35, 4b1004, 5a6243",
    columns: 10
  },
  trek: {
    colors: "ffffff, 000000, fbeec9, 4e3b30, f0a22e, a5644e, b58b80, c3986d, a19574, c17529, f2f2f2, 7f7f7f, f7e09e, e1d6cf, fcecd5, eddfda, f0e7e5, f3eae1, ece9e3, f5e3d1, d8d8d8, 595959, f3cc5f, c4ad9f, f9d9ab, dcc0b6, e1d0cc, e7d5c4, d9d4c7, ebc7a3, bfbfbf, 3f3f3f, d29f0f, a78470, f6c781, cba092, d2b9b2, dbc1a7, c6bfab, e1ac76, a5a5a5, 262626, 694f07, 3a2c24, c87d0e, 7b4b3a, 926255, a17242, 7b7153, 90571e, 7f7f7f, 0c0c0c, 2a1f03, 271d18, 855309, 523226, 614138, 6b4c2c, 524b37, 603a14",
    columns: 10
  },
  verve: {
    colors: "ffffff, 000000, d2d2d2, 666666, ff388c, e40059, 9c007f, 68007f, 005bd3, 00349e, f2f2f2, 7f7f7f, bdbdbd, e0e0e0, ffd7e8, ffc6dc, ffb8f1, f1b2ff, c3dcff, b8cfff, d8d8d8, 595959, 9d9d9d, c1c1c1, ffafd1, ff8eba, ff71e4, e365ff, 87baff, 72a0ff, bfbfbf, 3f3f3f, 696969, a3a3a3, ff87ba, ff5597, ff2ad7, d519ff, 4b98ff, 2b71ff, a5a5a5, 262626, 343434, 4c4c4c, e90062, ab0042, 75005f, 4e005f, 00449e, 002676, 7f7f7f, 0c0c0c, 151515, 333333, 9b0041, 72002c, 4e003f, 34003f, 002d69, 00194f",
    columns: 10
  },
  monochrome: {
    colors: "000000, 1a1a1a, 333333, 4d4d4d, 666666, 808080, 999999, b3b3b3, cccccc, e6e6e6, f2f2f2, ffffff",
    columns: 12
  },
  accessible: {
    colors: "black, grey, darkred, red, darkorange, gold, green, blue, darkblue, purple, white, darkgrey, saddlebrown, pink, orange, yellow, lightgreen, lightskyblue, lightblue, mediumpurple",
    columns: 10
  }
};
var ColorPaletteService = class _ColorPaletteService {
  colorRows = [];
  setColorMatrix(palette, columns) {
    this.colorRows = [];
    if (!(isPresent2(palette) && palette.length)) {
      return;
    }
    columns = columns || palette.length;
    for (let start = 0; start < palette.length; start += columns) {
      const row = palette.slice(start, columns + start);
      this.colorRows.push(row);
    }
  }
  getCellCoordsFor(color) {
    if (!isPresent2(color)) {
      return;
    }
    for (let row = 0; row < this.colorRows.length; row++) {
      for (let col = 0; col < this.colorRows[row].length; col++) {
        if (this.colorRows[row][col] === color) {
          return {
            row,
            col
          };
        }
      }
    }
  }
  getColorAt(cellCoords) {
    if (!(isPresent2(cellCoords) && isPresent2(this.colorRows[cellCoords.row]))) {
      return;
    }
    return this.colorRows[cellCoords.row][cellCoords.col];
  }
  getNextCell(current, horizontalStep, verticalStep) {
    if (!(isPresent2(current) && isPresent2(current.row) && isPresent2(current.col))) {
      return {
        row: 0,
        col: 0
      };
    }
    const row = this.clampIndex(current.row + verticalStep, this.colorRows.length - 1);
    const col = this.clampIndex(current.col + horizontalStep, this.colorRows[row].length - 1);
    return {
      row,
      col
    };
  }
  clampIndex(index, max) {
    const minArrayIndex = 0;
    if (index < minArrayIndex) {
      return minArrayIndex;
    }
    if (index > max) {
      return max;
    }
    return index;
  }
  static ɵfac = function ColorPaletteService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ColorPaletteService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _ColorPaletteService,
    factory: _ColorPaletteService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColorPaletteService, [{
    type: Injectable
  }], null, null);
})();
var DEFAULT_COLUMNS_COUNT = 10;
var DEFAULT_PRESET = "office";
var DEFAULT_ACCESSIBLE_PRESET = "accessible";
var DEFAULT_SIZE$6 = "medium";
var serial$2 = 0;
var ColorPaletteComponent = class _ColorPaletteComponent {
  host;
  service;
  cdr;
  renderer;
  localizationService;
  ngZone;
  /**
   * @hidden
   */
  direction;
  /**
   * @hidden
   */
  role = "grid";
  /**
   * @hidden
   */
  get activeDescendant() {
    return this.activeCellId;
  }
  /**
   * @hidden
   */
  get paletteId() {
    return this.id;
  }
  /**
   * @hidden
   */
  id = `k-colorpalette-${serial$2++}`;
  /**
   * Specifies the output format of the `ColorPaletteComponent`.
   * The input value may be in a different format. The component parses it into the output `format`.
   *
   * @default 'hex'
   */
  format = "hex";
  /**
   * Sets the value of the selected color.
   */
  set value(value) {
    this._value = parseColor2(value, this.format);
  }
  get value() {
    return this._value;
  }
  /**
   * Sets the number of columns to display.
   *
   * @default 10
   */
  set columns(value) {
    const minColumnsCount = 1;
    this._columns = value > minColumnsCount ? value : minColumnsCount;
  }
  get columns() {
    return this._columns;
  }
  /**
   * Sets the color palette to display. You can use a predefined palette preset (such as `office`, `basic`, or `apex`), string with comma-separated colors, or an array of string colors.
   */
  set palette(value) {
    if (!isPresent2(value)) {
      value = DEFAULT_PRESET;
    }
    if (typeof value === "string" && isPresent2(PALETTEPRESETS[value])) {
      this.columns = this.columns || PALETTEPRESETS[value].columns;
      value = PALETTEPRESETS[value].colors;
    }
    const colors = typeof value === "string" ? value.split(",") : value;
    this._palette = colors.map((color) => parseColor2(color, this.format, false, false));
  }
  get palette() {
    return this._palette;
  }
  /**
   * Sets the size of the ColorPalette internal elements.
   *
   * @default 'medium'
   */
  set size(size) {
    const newSize = size || DEFAULT_SIZE$6;
    this.handleClasses(newSize, "size");
    this._size = newSize;
  }
  get size() {
    return this._size;
  }
  /**
   * Sets the [`tabindex`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) of the component.
   *
   * @default 0
   */
  set tabindex(value) {
    const tabindex = Number(value);
    const defaultValue = 0;
    this._tabindex = !isNaN(tabindex) ? tabindex : defaultValue;
  }
  get tabindex() {
    return !this.disabled ? this._tabindex : void 0;
  }
  /**
   * Disables the ColorPalette. To disable it in reactive forms, see [Forms Support](slug:formssupport_colorpalette#toc-managing-the-colorpalette-disabled-state-in-reactive-forms).
   */
  disabled = false;
  /**
   * Sets the read-only state of the ColorPalette.
   *
   * @default false
   */
  readonly = false;
  /**
   * Sets the size of a color cell. The default tile size depends on the `size` of the component.
   */
  tileSize;
  /**
   * @hidden
   */
  get tileLayout() {
    if (typeof this.tileSize !== "number") {
      return this.tileSize;
    }
    return {
      width: this.tileSize,
      height: this.tileSize
    };
  }
  /**
   * Fires when the color selection changes.
   */
  selectionChange = new EventEmitter();
  /**
   * Fires when the value changes.
   */
  valueChange = new EventEmitter();
  /**
   * Fires each time the user selects a cell with the mouse or presses `Enter`.
   *
   * @hidden
   */
  cellSelection = new EventEmitter();
  /**
   * @hidden
   */
  get colorRows() {
    return this.service.colorRows;
  }
  /**
   * @hidden
   */
  get hostTabindex() {
    return this.tabindex;
  }
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
  get readonlyAttribute() {
    return this.readonly;
  }
  /**
   * @hidden
   */
  activeCellId;
  /**
   * @hidden
   */
  focusedCell;
  /**
   * @hidden
   */
  selectedCell;
  /**
   * @hidden
   */
  focusInComponent;
  /**
   * @hidden
   */
  uniqueId = guid();
  selection;
  _size = "medium";
  _value;
  _columns;
  _palette;
  _tabindex = 0;
  subs = new Subscription();
  dynamicRTLSubscription;
  constructor(host, service, cdr, renderer, localizationService, ngZone) {
    this.host = host;
    this.service = service;
    this.cdr = cdr;
    this.renderer = renderer;
    this.localizationService = localizationService;
    this.ngZone = ngZone;
    A(packageMetadata);
    this.dynamicRTLSubscription = localizationService.changes.subscribe(({
      rtl
    }) => {
      this.direction = rtl ? "rtl" : "ltr";
    });
  }
  ngOnInit() {
    if (this.colorRows.length === 0) {
      const defaultPreset = this.format !== "name" ? DEFAULT_PRESET : DEFAULT_ACCESSIBLE_PRESET;
      this.palette = this.palette || defaultPreset;
      this.setRows();
    }
    const elem = this.host.nativeElement;
    this.subs.add(this.renderer.listen(elem, "keydown", (event) => this.handleKeydown(event)));
    this.subs.add(this.renderer.listen(elem, "focus", () => this.handleFocus()));
    this.subs.add(this.renderer.listen(elem, "blur", () => this.handleHostBlur()));
  }
  ngAfterViewInit() {
    const stylingInputs = ["size"];
    stylingInputs.forEach((input) => {
      this.handleClasses(this[input], input);
    });
    this.setHostElementAriaLabel();
    if (this.value) {
      this.ngZone.onStable.pipe(take(1)).subscribe(() => {
        this.selectCell(this.value);
      });
    }
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
    if (this.dynamicRTLSubscription) {
      this.dynamicRTLSubscription.unsubscribe();
    }
  }
  ngOnChanges(changes) {
    if (changes["palette"] || changes["columns"]) {
      this.setRows();
    }
    if (changes["palette"] || changes["value"] || changes["columns"]) {
      this.selectCell(this.value);
      this.setHostElementAriaLabel();
    }
  }
  /**
   * @hidden
   */
  handleKeydown(event) {
    const code = normalizeKeys(event);
    const isRTL = this.direction === "rtl";
    switch (code) {
      case Keys.ArrowDown:
        this.handleCellNavigation(0, 1);
        break;
      case Keys.ArrowUp:
        this.handleCellNavigation(0, -1);
        break;
      case Keys.ArrowRight:
        this.handleCellNavigation(isRTL ? -1 : 1, 0);
        break;
      case Keys.ArrowLeft:
        this.handleCellNavigation(isRTL ? 1 : -1, 0);
        break;
      case Keys.Enter:
        this.handleEnter();
        break;
      default:
        return;
    }
    event.preventDefault();
  }
  /**
   * @hidden
   */
  handleFocus() {
    if (!this.focusInComponent) {
      this.focus();
    }
  }
  /**
   * @hidden
   */
  handleHostBlur() {
    this.notifyNgTouched();
    this.handleCellFocusOnBlur();
  }
  /**
   * @hidden
   */
  handleCellSelection(value, focusedCell) {
    if (this.readonly) {
      return;
    }
    this.selectedCell = focusedCell;
    this.focusedCell = this.selectedCell;
    this.focusInComponent = true;
    const parsedColor = parseColor2(value, this.format, false, false);
    this.cellSelection.emit(parsedColor);
    this.handleValueChange(parsedColor);
    if (this.selection !== parsedColor) {
      this.selection = parsedColor;
      this.selectionChange.emit(parsedColor);
    }
    if (focusedCell) {
      this.activeCellId = `k-${this.selectedCell.row}-${this.selectedCell.col}-${this.uniqueId}`;
    }
  }
  /**
   * @hidden
   */
  writeValue(value) {
    this.value = value;
    this.selectCell(value);
    this.cdr.markForCheck();
  }
  /**
   * @hidden
   */
  registerOnChange(fn) {
    this.notifyNgChanged = fn;
  }
  /**
   * @hidden
   */
  registerOnTouched(fn) {
    this.notifyNgTouched = fn;
  }
  /**
   * @hidden
   */
  setDisabledState(isDisabled) {
    this.cdr.markForCheck();
    this.disabled = isDisabled;
  }
  /**
   * @hidden
   */
  focus() {
    this.host.nativeElement.focus();
    if (!this.focusedCell && !this.readonly && !this.disabled) {
      this.focusedCell = {
        row: 0,
        col: 0
      };
      this.activeCellId = `k-${this.focusedCell.row}-${this.focusedCell.col}-${this.uniqueId}`;
    }
  }
  /**
   * @hidden
   * Used by the FloatingLabel to determine if the component is empty.
   */
  isEmpty() {
    return false;
  }
  /**
   * Clears the color value of the ColorPalette.
   */
  reset() {
    this.focusedCell = null;
    if (isPresent2(this.value)) {
      this.handleValueChange(void 0);
    }
    this.selectedCell = void 0;
  }
  handleValueChange(color) {
    if (this.value === color) {
      return;
    }
    this.value = color;
    this.valueChange.emit(color);
    this.notifyNgChanged(color);
    this.setHostElementAriaLabel();
  }
  handleCellFocusOnBlur() {
    this.focusInComponent = false;
    this.focusedCell = this.selectedCell;
  }
  selectCell(value) {
    const parsedColor = parseColor2(value, "hex");
    this.selectedCell = this.service.getCellCoordsFor(parsedColor);
    this.focusedCell = this.selectedCell;
  }
  setRows() {
    if (!isPresent2(this.palette)) {
      return;
    }
    this.columns = this.columns || DEFAULT_COLUMNS_COUNT;
    this.service.setColorMatrix(this.palette, this.columns);
  }
  handleCellNavigation(horizontalStep, verticalStep) {
    if (this.readonly) {
      return;
    }
    this.focusedCell = this.service.getNextCell(this.focusedCell, horizontalStep, verticalStep);
    this.focusInComponent = true;
    if (this.focusedCell) {
      this.activeCellId = `k-${this.focusedCell.row}-${this.focusedCell.col}-${this.uniqueId}`;
    }
  }
  setHostElementAriaLabel() {
    const parsed = parseColor2(this.value, this.format);
    this.renderer.setAttribute(this.host.nativeElement, "aria-label", `${this.value ? parsed : this.localizationService.get("colorPaletteNoColor")}`);
  }
  handleEnter() {
    if (!isPresent2(this.focusedCell)) {
      return;
    }
    const selectedColor = this.service.getColorAt(this.focusedCell);
    this.handleCellSelection(selectedColor, this.focusedCell);
  }
  handleClasses(value, input) {
    const elem = this.host.nativeElement;
    const classes = getStylingClasses("colorpalette", input, this[input], value);
    if (classes.toRemove) {
      this.renderer.removeClass(elem, classes.toRemove);
    }
    if (classes.toAdd) {
      this.renderer.addClass(elem, classes.toAdd);
    }
  }
  notifyNgTouched = () => {
  };
  notifyNgChanged = () => {
  };
  static ɵfac = function ColorPaletteComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ColorPaletteComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ColorPaletteService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _ColorPaletteComponent,
    selectors: [["kendo-colorpalette"]],
    hostVars: 13,
    hostBindings: function ColorPaletteComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("dir", ctx.direction)("role", ctx.role)("aria-activedescendant", ctx.activeDescendant)("id", ctx.paletteId)("tabindex", ctx.hostTabindex)("aria-disabled", ctx.disabledClass)("aria-readonly", ctx.readonlyAttribute);
        ɵɵclassProp("k-readonly", ctx.readonly)("k-colorpalette", ctx.hostClasses)("k-disabled", ctx.disabledClass);
      }
    },
    inputs: {
      id: "id",
      format: "format",
      value: "value",
      columns: "columns",
      palette: "palette",
      size: "size",
      tabindex: "tabindex",
      disabled: "disabled",
      readonly: "readonly",
      tileSize: "tileSize"
    },
    outputs: {
      selectionChange: "selectionChange",
      valueChange: "valueChange",
      cellSelection: "cellSelection"
    },
    exportAs: ["kendoColorPalette"],
    standalone: true,
    features: [ɵɵProvidersFeature([{
      multi: true,
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _ColorPaletteComponent)
    }, {
      provide: KendoInput,
      useExisting: forwardRef(() => _ColorPaletteComponent)
    }, ColorPaletteService, ColorPaletteLocalizationService, {
      provide: LocalizationService,
      useExisting: ColorPaletteLocalizationService
    }, {
      provide: L10N_PREFIX,
      useValue: "kendo.colorpalette"
    }]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    decls: 5,
    vars: 0,
    consts: () => {
      let i18n_27;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_27 = goog.getMsg("Colorpalette no color chosen");
        i18n_27 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_27;
      } else {
        i18n_27 = $localize`:kendo.colorpalette.colorPaletteNoColor|The aria-label applied to the ColorPalette component when the value is empty.:Colorpalette no color chosen`;
      }
      return [["kendoColorPaletteLocalizedMessages", "", "colorPaletteNoColor", i18n_27], ["role", "presentation", 1, "k-colorpalette-table"], ["role", "row"], ["role", "gridcell", 1, "k-colorpalette-tile", 3, "k-selected", "k-focus", "id", "ngStyle"], ["role", "gridcell", 1, "k-colorpalette-tile", 3, "click", "id", "ngStyle"]];
    },
    template: function ColorPaletteComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementContainer(0, 0);
        ɵɵelementStart(1, "table", 1)(2, "tbody");
        ɵɵrepeaterCreate(3, ColorPaletteComponent_For_4_Template, 3, 0, "tr", 2, ɵɵrepeaterTrackByIdentity);
        ɵɵelementEnd()();
      }
      if (rf & 2) {
        ɵɵadvance(3);
        ɵɵrepeater(ctx.colorRows);
      }
    },
    dependencies: [LocalizedColorPickerMessagesDirective, NgStyle],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColorPaletteComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoColorPalette",
      selector: "kendo-colorpalette",
      providers: [{
        multi: true,
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => ColorPaletteComponent)
      }, {
        provide: KendoInput,
        useExisting: forwardRef(() => ColorPaletteComponent)
      }, ColorPaletteService, ColorPaletteLocalizationService, {
        provide: LocalizationService,
        useExisting: ColorPaletteLocalizationService
      }, {
        provide: L10N_PREFIX,
        useValue: "kendo.colorpalette"
      }],
      template: `
        <ng-container kendoColorPaletteLocalizedMessages
          i18n-colorPaletteNoColor="kendo.colorpalette.colorPaletteNoColor|The aria-label applied to the ColorPalette component when the value is empty."
          colorPaletteNoColor="Colorpalette no color chosen">
        </ng-container>
        <table role="presentation" class="k-colorpalette-table">
          <tbody>
            @for (row of colorRows; track row; let rowIndex = $index) {
              <tr role="row">
                @for (color of row; track color; let colIndex = $index) {
                  <td
                    role="gridcell"
                    [class.k-selected]="selectedCell?.row === rowIndex && selectedCell?.col === colIndex"
                    [class.k-focus]="focusInComponent && focusedCell?.row === rowIndex && focusedCell?.col === colIndex"
                    [attr.aria-selected]="selectedCell?.row === rowIndex && selectedCell?.col === colIndex ? 'true' : undefined"
                    [attr.aria-label]="color"
                    class="k-colorpalette-tile"
                    [id]="'k-' + rowIndex + '-' + colIndex + '-' + uniqueId"
                    [attr.value]="color"
                    (click)="handleCellSelection(color, { row: rowIndex, col: colIndex })"
                        [ngStyle]="{
                            backgroundColor: color,
                            width: tileLayout?.width + 'px',
                            height: tileLayout?.height + 'px',
                            minWidth: tileLayout?.width + 'px'
                        }">
                  </td>
                }
              </tr>
            }
          </tbody>
        </table>
        `,
      standalone: true,
      imports: [LocalizedColorPickerMessagesDirective, NgStyle]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: ColorPaletteService
  }, {
    type: ChangeDetectorRef
  }, {
    type: Renderer2
  }, {
    type: LocalizationService
  }, {
    type: NgZone
  }], {
    direction: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    role: [{
      type: HostBinding,
      args: ["attr.role"]
    }],
    activeDescendant: [{
      type: HostBinding,
      args: ["attr.aria-activedescendant"]
    }],
    paletteId: [{
      type: HostBinding,
      args: ["attr.id"]
    }],
    id: [{
      type: Input
    }],
    format: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    columns: [{
      type: Input
    }],
    palette: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    tabindex: [{
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
    tileSize: [{
      type: Input
    }],
    selectionChange: [{
      type: Output
    }],
    valueChange: [{
      type: Output
    }],
    cellSelection: [{
      type: Output
    }],
    hostTabindex: [{
      type: HostBinding,
      args: ["attr.tabindex"]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class.k-colorpalette"]
    }],
    disabledClass: [{
      type: HostBinding,
      args: ["attr.aria-disabled"]
    }, {
      type: HostBinding,
      args: ["class.k-disabled"]
    }],
    readonlyAttribute: [{
      type: HostBinding,
      args: ["attr.aria-readonly"]
    }]
  });
})();
var FlatColorPickerService = class _FlatColorPickerService {
  getPaletteSettings(settings, format) {
    const defaultPreset = format !== "name" ? DEFAULT_PRESET$1 : DEFAULT_ACCESSIBLE_PRESET$1;
    const settingsPalette = settings.palette;
    const presetColumns = typeof settingsPalette === "string" && PALETTEPRESETS[settingsPalette] ? PALETTEPRESETS[settingsPalette].columns : void 0;
    return {
      palette: settingsPalette || defaultPreset,
      tileSize: settings.tileSize,
      columns: settings.columns || presetColumns || 10
    };
  }
  paletteTileLayout(tileSize) {
    if (typeof tileSize === "number") {
      return {
        width: tileSize,
        height: tileSize
      };
    }
    return {
      width: tileSize?.width ? tileSize?.width : tileSize?.height,
      height: tileSize?.height ? tileSize?.height : tileSize?.width
    };
  }
  static ɵfac = function FlatColorPickerService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FlatColorPickerService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _FlatColorPickerService,
    factory: _FlatColorPickerService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FlatColorPickerService, [{
    type: Injectable
  }], null, null);
})();
var ColorPickerCancelEvent = class extends PreventableEvent {
  /**
   * The DOM event that triggered the `cancel` event.
   */
  originalEvent;
  constructor(originalEvent) {
    super();
    this.originalEvent = originalEvent;
  }
};
var ColorPickerCloseEvent = class extends PreventableEvent {
};
var ColorPickerOpenEvent = class extends PreventableEvent {
};
var ActiveColorClickEvent = class {
  color;
  openPrevented = false;
  /**
   * @hidden
   * @param color Represents the current value of the ColorPicker.
   */
  constructor(color) {
    this.color = color;
  }
  /**
   * Prevents the popup from opening.
   */
  preventOpen() {
    this.openPrevented = true;
  }
  /**
   * Returns `true` if the popup opening is prevented by any of its subscribers.
   *
   * @returns Returns `true` if the open action was prevented. Otherwise, returns `false`.
   */
  isOpenPrevented() {
    return this.openPrevented;
  }
};
var FlatColorPickerHeaderComponent = class _FlatColorPickerHeaderComponent {
  localizationService;
  renderer;
  hostClasses = true;
  clearButton;
  activeView;
  views;
  preview;
  innerTabIndex = -1;
  value;
  selection;
  size;
  viewChange = new EventEmitter();
  valuePaneClick = new EventEmitter();
  clearButtonClick = new EventEmitter();
  tabOut = new EventEmitter();
  viewButtonsCollection;
  clearButtonElement;
  dropletSliderIcon = dropletSliderIcon;
  paletteIcon = paletteIcon;
  dropletSlashIcon = dropletSlashIcon;
  constructor(localizationService, renderer) {
    this.localizationService = localizationService;
    this.renderer = renderer;
  }
  ngAfterViewInit() {
    if (this.viewButtonsCollection.length > 0) {
      this.viewButtonsCollection.forEach((button) => {
        const buttonElem = button.nativeElement;
        const isViewActive = buttonElem.getAttribute("aria-pressed") === "true";
        if (isViewActive) {
          this.renderer.addClass(buttonElem, "k-selected");
        }
      });
    }
  }
  onViewButtonClick(view) {
    this.activeView = view;
    this.viewChange.emit(view);
  }
  get viewButtons() {
    return this.views && this.views.indexOf("gradient") >= 0 && this.views.indexOf("palette") >= 0;
  }
  getViewButtonIcon(view) {
    return view === "gradient" ? "color-canvas" : "palette";
  }
  getViewButtonsSVGIcon(view) {
    return view === "gradient" ? this.dropletSliderIcon : this.paletteIcon;
  }
  getText(text) {
    return this.localizationService.get(text);
  }
  onHeaderTabOut(ev, index) {
    if (index === 0) {
      ev.preventDefault();
      this.tabOut.emit(ev);
    }
  }
  static ɵfac = function FlatColorPickerHeaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FlatColorPickerHeaderComponent)(ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(Renderer2));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _FlatColorPickerHeaderComponent,
    selectors: [["", "kendoFlatColorPickerHeader", ""]],
    viewQuery: function FlatColorPickerHeaderComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c37, 5, ElementRef);
        ɵɵviewQuery(_c38, 5, ElementRef);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.clearButtonElement = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.viewButtonsCollection = _t);
      }
    },
    hostVars: 4,
    hostBindings: function FlatColorPickerHeaderComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("k-coloreditor-header", ctx.hostClasses)("k-hstack", ctx.hostClasses);
      }
    },
    inputs: {
      clearButton: "clearButton",
      activeView: "activeView",
      views: "views",
      preview: "preview",
      innerTabIndex: "innerTabIndex",
      value: "value",
      selection: "selection",
      size: "size"
    },
    outputs: {
      viewChange: "viewChange",
      valuePaneClick: "valuePaneClick",
      clearButtonClick: "clearButtonClick",
      tabOut: "tabOut"
    },
    standalone: true,
    features: [ɵɵStandaloneFeature],
    attrs: _c39,
    decls: 6,
    vars: 3,
    consts: [["viewButtons", ""], ["clearButton", ""], [1, "k-coloreditor-header-actions", "k-hstack"], ["role", "group", 1, "k-button-group", "k-button-group-flat"], [1, "k-spacer"], ["kendoButton", "", "type", "button", "fillMode", "flat", "icon", "reset-color", 1, "k-coloreditor-reset", 3, "tabindex", "size", "svgIcon"], ["aria-hidden", "true", 1, "k-coloreditor-preview", "k-vstack"], ["kendoButton", "", "type", "button", "fillMode", "flat", 3, "tabindex", "icon", "svgIcon", "size", "ngClass"], ["kendoButton", "", "type", "button", "fillMode", "flat", 3, "click", "keydown.shift.tab", "tabindex", "icon", "svgIcon", "size", "ngClass"], ["kendoButton", "", "type", "button", "fillMode", "flat", "icon", "reset-color", 1, "k-coloreditor-reset", 3, "click", "tabindex", "size", "svgIcon"], [1, "k-coloreditor-preview-color", "k-color-preview"], [1, "k-coloreditor-current-color", "k-color-preview", 3, "click"]],
    template: function FlatColorPickerHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div", 2);
        ɵɵtemplate(1, FlatColorPickerHeaderComponent_Conditional_1_Template, 3, 0, "div", 3);
        ɵɵelementEnd();
        ɵɵelement(2, "div", 4);
        ɵɵelementStart(3, "div", 2);
        ɵɵtemplate(4, FlatColorPickerHeaderComponent_Conditional_4_Template, 2, 5, "button", 5)(5, FlatColorPickerHeaderComponent_Conditional_5_Template, 3, 6, "div", 6);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵadvance();
        ɵɵconditional(ctx.viewButtons ? 1 : -1);
        ɵɵadvance(3);
        ɵɵconditional(ctx.clearButton ? 4 : -1);
        ɵɵadvance();
        ɵɵconditional(ctx.preview ? 5 : -1);
      }
    },
    dependencies: [ButtonComponent, NgClass],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FlatColorPickerHeaderComponent, [{
    type: Component,
    args: [{
      // eslint-disable-next-line @angular-eslint/component-selector
      selector: "[kendoFlatColorPickerHeader]",
      template: `
        <div class="k-coloreditor-header-actions k-hstack">
          @if (viewButtons) {
            <div
              class="k-button-group k-button-group-flat"
              role="group"
              >
              @for (view of views; track view; let i = $index) {
                <button
                  kendoButton
                  type="button"
                  #viewButtons
                  fillMode="flat"
                  [tabindex]="innerTabIndex.toString()"
                  (click)="onViewButtonClick(view)"
                  [icon]="getViewButtonIcon(view)"
                  [svgIcon]="getViewButtonsSVGIcon(view)"
                  (keydown.shift.tab)="onHeaderTabOut($event, i)"
                  [size]="size"
                  [attr.title]="getText(view === 'gradient' ? 'gradientView' : 'paletteView')"
                  [attr.aria-label]="getText(view === 'gradient' ? 'gradientView' : 'paletteView')"
                  [attr.aria-pressed]="activeView === view"
                  [ngClass]="activeView === view ? 'k-selected' : ''">
                </button>
              }
            </div>
          }
        </div>
        <div class="k-spacer"></div>
        <div class="k-coloreditor-header-actions k-hstack">
          @if (clearButton) {
            <button
              kendoButton
              type="button"
              [tabindex]="innerTabIndex.toString()"
              #clearButton
              [size]="size"
              fillMode="flat"
              icon="reset-color"
              [svgIcon]="dropletSlashIcon"
              class="k-coloreditor-reset"
              [attr.aria-label]="getText('clearButton')"
              [attr.title]="getText('clearButton')"
              (click)="clearButtonClick.emit()">
            </button>
          }
          @if (preview) {
            <div class="k-coloreditor-preview k-vstack" aria-hidden="true">
              <span
                class="k-coloreditor-preview-color k-color-preview"
                [attr.title]="getText('previewColor')"
                [style.background-color]="selection">
              </span>
              <span class="k-coloreditor-current-color k-color-preview"
                [style.background-color]="value"
                [attr.title]="getText('revertSelection')"
                (click)="valuePaneClick.emit($event)">
              </span>
            </div>
          }
        </div>
        `,
      standalone: true,
      imports: [ButtonComponent, NgClass]
    }]
  }], () => [{
    type: LocalizationService
  }, {
    type: Renderer2
  }], {
    hostClasses: [{
      type: HostBinding,
      args: ["class.k-coloreditor-header"]
    }, {
      type: HostBinding,
      args: ["class.k-hstack"]
    }],
    clearButton: [{
      type: Input
    }],
    activeView: [{
      type: Input
    }],
    views: [{
      type: Input
    }],
    preview: [{
      type: Input
    }],
    innerTabIndex: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    selection: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    viewChange: [{
      type: Output
    }],
    valuePaneClick: [{
      type: Output
    }],
    clearButtonClick: [{
      type: Output
    }],
    tabOut: [{
      type: Output
    }],
    viewButtonsCollection: [{
      type: ViewChildren,
      args: ["viewButtons", {
        read: ElementRef
      }]
    }],
    clearButtonElement: [{
      type: ViewChild,
      args: ["clearButton", {
        read: ElementRef
      }]
    }]
  });
})();
var FlatColorPickerActionButtonsComponent = class _FlatColorPickerActionButtonsComponent {
  localizationService;
  hostClasses = true;
  innerTabIndex = -1;
  size;
  actionButtonClick = new EventEmitter();
  tabOut = new EventEmitter();
  firstButton;
  lastButton;
  constructor(localizationService) {
    this.localizationService = localizationService;
  }
  getText(text) {
    return this.localizationService.get(text);
  }
  onActionButtonClick(type, ev) {
    const args = {
      target: type,
      originalEvent: ev
    };
    this.actionButtonClick.emit(args);
  }
  static ɵfac = function FlatColorPickerActionButtonsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FlatColorPickerActionButtonsComponent)(ɵɵdirectiveInject(LocalizationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _FlatColorPickerActionButtonsComponent,
    selectors: [["", "kendoFlatColorPickerActionButtons", ""]],
    viewQuery: function FlatColorPickerActionButtonsComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c40, 5, ElementRef);
        ɵɵviewQuery(_c41, 5, ElementRef);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.firstButton = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.lastButton = _t.first);
      }
    },
    hostVars: 6,
    hostBindings: function FlatColorPickerActionButtonsComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("k-coloreditor-footer", ctx.hostClasses)("k-actions", ctx.hostClasses)("k-actions-horizontal", ctx.hostClasses);
      }
    },
    inputs: {
      innerTabIndex: "innerTabIndex",
      size: "size"
    },
    outputs: {
      actionButtonClick: "actionButtonClick",
      tabOut: "tabOut"
    },
    standalone: true,
    features: [ɵɵStandaloneFeature],
    attrs: _c42,
    decls: 6,
    vars: 8,
    consts: [["first", ""], ["last", ""], ["kendoButton", "", "type", "button", 1, "k-coloreditor-cancel", 3, "click", "size", "tabindex"], ["kendoButton", "", "themeColor", "primary", "type", "button", 1, "k-coloreditor-apply", 3, "click", "keydown.tab", "size", "tabindex"]],
    template: function FlatColorPickerActionButtonsComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "button", 2, 0);
        ɵɵlistener("click", function FlatColorPickerActionButtonsComponent_Template_button_click_0_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onActionButtonClick("cancel", $event));
        });
        ɵɵtext(2);
        ɵɵelementEnd();
        ɵɵelementStart(3, "button", 3, 1);
        ɵɵlistener("click", function FlatColorPickerActionButtonsComponent_Template_button_click_3_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onActionButtonClick("apply", $event));
        })("keydown.tab", function FlatColorPickerActionButtonsComponent_Template_button_keydown_tab_3_listener($event) {
          ɵɵrestoreView(_r1);
          $event.preventDefault();
          return ɵɵresetView(ctx.tabOut.emit());
        });
        ɵɵtext(5);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵproperty("size", ctx.size)("tabindex", ctx.innerTabIndex.toString());
        ɵɵattribute("title", ctx.getText("cancelButton"));
        ɵɵadvance(2);
        ɵɵtextInterpolate(ctx.getText("cancelButton"));
        ɵɵadvance();
        ɵɵproperty("size", ctx.size)("tabindex", ctx.innerTabIndex.toString());
        ɵɵattribute("title", ctx.getText("applyButton"));
        ɵɵadvance(2);
        ɵɵtextInterpolate(ctx.getText("applyButton"));
      }
    },
    dependencies: [ButtonComponent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FlatColorPickerActionButtonsComponent, [{
    type: Component,
    args: [{
      // eslint-disable-next-line @angular-eslint/component-selector
      selector: "[kendoFlatColorPickerActionButtons]",
      template: `
        <button #first
            kendoButton
            class="k-coloreditor-cancel"
            [size]="size"
            [attr.title]="getText('cancelButton')"
            (click)="onActionButtonClick('cancel', $event)"
            type="button"
            [tabindex]="innerTabIndex.toString()"
        >{{getText('cancelButton')}}</button>
        <button #last
            kendoButton
            themeColor="primary"
            [size]="size"
            class="k-coloreditor-apply"
            [attr.title]="getText('applyButton')"
            (click)="onActionButtonClick('apply', $event)"
            type="button"
            [tabindex]="innerTabIndex.toString()"
            (keydown.tab)="$event.preventDefault(); tabOut.emit();"
        >{{getText('applyButton')}}</button>
    `,
      standalone: true,
      imports: [ButtonComponent]
    }]
  }], () => [{
    type: LocalizationService
  }], {
    hostClasses: [{
      type: HostBinding,
      args: ["class.k-coloreditor-footer"]
    }, {
      type: HostBinding,
      args: ["class.k-actions"]
    }, {
      type: HostBinding,
      args: ["class.k-actions-horizontal"]
    }],
    innerTabIndex: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    actionButtonClick: [{
      type: Output
    }],
    tabOut: [{
      type: Output
    }],
    firstButton: [{
      type: ViewChild,
      args: ["first", {
        read: ElementRef
      }]
    }],
    lastButton: [{
      type: ViewChild,
      args: ["last", {
        read: ElementRef
      }]
    }]
  });
})();
var DEFAULT_SIZE$5 = "medium";
var FlatColorPickerComponent = class _FlatColorPickerComponent {
  host;
  service;
  localizationService;
  cdr;
  renderer;
  ngZone;
  injector;
  hostClasses = true;
  get disabledClass() {
    return this.disabled;
  }
  get ariaReadonly() {
    return this.readonly;
  }
  direction;
  get hostTabindex() {
    return this.tabindex?.toString() || "0";
  }
  ariaRole = "textbox";
  get isControlInvalid() {
    return this.control?.invalid?.toString();
  }
  get isDisabled() {
    return this.disabled?.toString() || void 0;
  }
  /**
   * @hidden
   */
  enterHandler(event) {
    if (event.target !== this.host.nativeElement) {
      return;
    }
    event.preventDefault();
    this.internalNavigation = true;
    this.ngZone.onStable.pipe(take(1)).subscribe(() => this.firstFocusable?.focus());
  }
  /**
   * @hidden
   */
  escapeHandler() {
    this.internalNavigation = false;
    this.host.nativeElement.focus();
  }
  /**
   * @hidden
   */
  focusHandler(ev) {
    this.internalNavigation = ev.target !== this.host.nativeElement;
  }
  /**
   * Sets the read-only state of the FlatColorPicker.
   *
   * @default false
   */
  readonly = false;
  /**
   * Sets the disabled state of the FlatColorPicker. To disable it in reactive forms, see [Forms Support](slug:formssupport_flatcolorpicker#toc-managing-the-flatcolorpicker-disabled-state-in-reactive-forms).
   *
   * @default false
   */
  disabled = false;
  /**
   * Specifies the output format of the FlatColorPicker.
   *
   * If the input value is in a different format, the component parses it into the specified output `format`.
   *
   * @default 'rgba'
   */
  format = "rgba";
  /**
   * Specifies the initially selected color.
   */
  set value(value) {
    this._value = parseColor2(value, this.format, this.gradientSettings.opacity);
  }
  get value() {
    return this._value;
  }
  /**
   * Specifies the [tabindex](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) of the component.
   *
   * @default 0
   */
  set tabindex(value) {
    if (isPresent2(value)) {
      const tabindex = Number(value);
      this._tabindex = !isNaN(tabindex) ? tabindex : 0;
    } else {
      this._tabindex = value;
    }
  }
  get tabindex() {
    return !this.disabled ? this._tabindex : void 0;
  }
  /**
   * Specifies whether the FlatColorPicker displays a **Clear color** button.
   *
   * @default true
   */
  clearButton = true;
  /**
   * Displays `Apply` and `Cancel` action buttons and a color preview pane.
   *
   * When enabled, the component value does not change immediately upon
   * color selection, but only after the **Apply** button is clicked.
   *
   * The **Cancel** button reverts the current selection to its
   * initial state, i.e., to the current value.
   *
   * @default true
   */
  preview = true;
  /**
   * Configures the layout of the `Apply` and `Cancel` action buttons.
   *
   * @default 'end'
   */
  actionsLayout = "end";
  /**
   * Sets the initially active view in the FlatColorPicker. Supports two-way binding.
   */
  activeView;
  /**
   * Specifies the views to render. The default value is gradient and palette.
   */
  views = ["gradient", "palette"];
  /**
   * Configures the gradient view.
   */
  set gradientSettings(value) {
    Object.assign(this._gradientSettings, value);
  }
  get gradientSettings() {
    return this._gradientSettings;
  }
  /**
   * @hidden
   */
  adaptiveMode = false;
  /**
   * Configures the palette view.
   */
  set paletteSettings(value) {
    Object.assign(this._paletteSettings, value);
  }
  get paletteSettings() {
    return this._paletteSettings;
  }
  /**
   * Sets the size of the FlatColorPicker internal elements.
   *
   * @default 'medium'
   */
  set size(size) {
    const newSize = size || DEFAULT_SIZE$5;
    this.handleClasses(newSize, "size");
    this._size = newSize;
  }
  get size() {
    return this._size;
  }
  /**
   * Fires when the component value changes.
   */
  valueChange = new EventEmitter();
  /**
   * Fires when the user cancels the current color selection.
   *
   * The event is emitted on preview pane or on 'Cancel' button click.
   */
  cancel = new EventEmitter();
  /**
   * Fires when the view is about to change.
   * Used to provide a two-way binding for the `activeView` property.
   */
  activeViewChange = new EventEmitter();
  /**
   * @hidden
   * Fires each time the clear button is clicked.
   */
  clearButtonClick = new EventEmitter();
  /**
   * @hidden
   */
  actionButtonClick = new EventEmitter();
  header;
  headerElement;
  gradient;
  gradientElement;
  palette;
  footer;
  /**
   * @hidden
   */
  selection;
  focused;
  _value;
  _tabindex = 0;
  _gradientSettings = {
    opacity: true,
    delay: 0,
    gradientSliderStep: DRAGHANDLE_MOVE_SPEED,
    gradientSliderSmallStep: DRAGHANDLE_MOVE_SPEED_SMALL_STEP
  };
  _paletteSettings = {};
  dynamicRTLSubscription;
  subscriptions = new Subscription();
  internalNavigation = false;
  _size = "medium";
  control;
  /**
   * @hidden
   */
  get innerTabIndex() {
    return this.internalNavigation ? 0 : -1;
  }
  /**
   * @hidden
   */
  get firstFocusable() {
    if (this.headerHasContent) {
      return this.headerElement.nativeElement.querySelector(".k-button");
    }
    return this.activeView === "gradient" ? this.gradient : this.palette;
  }
  constructor(host, service, localizationService, cdr, renderer, ngZone, injector) {
    this.host = host;
    this.service = service;
    this.localizationService = localizationService;
    this.cdr = cdr;
    this.renderer = renderer;
    this.ngZone = ngZone;
    this.injector = injector;
    A(packageMetadata);
    this.dynamicRTLSubscription = this.localizationService.changes.subscribe(({
      rtl
    }) => {
      this.direction = rtl ? "rtl" : "ltr";
    });
  }
  ngOnInit() {
    this.selection = this.value;
    this.control = this.injector.get(NgControl, null);
    this._paletteSettings = this.service.getPaletteSettings(this._paletteSettings, this.format);
    this.setActiveView();
  }
  ngAfterViewInit() {
    const stylingInputs = ["size"];
    stylingInputs.forEach((input) => {
      this.handleClasses(this[input], input);
    });
    this.setHostElementAriaLabel();
    this.initDomEvents();
    this.setSizingVariables();
    this.ngZone.onStable.pipe(take(1)).subscribe(() => this.removeGradientAttributes());
  }
  ngOnChanges(changes) {
    if (isChanged("value", changes)) {
      this.selection = this.value;
      this.setHostElementAriaLabel();
    }
    if (isChanged("paletteSettings", changes)) {
      this.setSizingVariables();
    }
  }
  ngOnDestroy() {
    if (this.dynamicRTLSubscription) {
      this.dynamicRTLSubscription.unsubscribe();
    }
    this.subscriptions.unsubscribe();
  }
  /**
   * @hidden
   */
  focusFirstHeaderButton() {
    if (this.gradientElement.nativeElement === document.activeElement) {
      if (this.headerHasContent && !this.preview) {
        const firstHeaderButton = this.headerElement.nativeElement.querySelector(".k-button");
        firstHeaderButton.focus();
      }
    }
  }
  /**
   * @hidden
   */
  lastFocusable(event) {
    if (this.preview) {
      this.footer.lastButton.nativeElement.focus();
      return;
    }
    event.stopImmediatePropagation();
    const gradient = this.gradientElement?.nativeElement;
    const palette = this.palette?.host.nativeElement;
    if (this.activeView === "gradient") {
      gradient.focus();
    } else {
      palette.focus();
    }
  }
  /**
   * @hidden
   */
  onTab(ev) {
    const {
      shiftKey
    } = ev;
    const nextTabStop = this.preview ? this.footer.firstButton.nativeElement : this.headerHasContent ? findFocusableChild(this.headerElement.nativeElement) : null;
    const previousTabStop = this.headerHasContent ? findFocusableChild(this.headerElement.nativeElement) : this.preview ? this.footer.lastButton.nativeElement : null;
    if (!nextTabStop && !previousTabStop) {
      return;
    }
    ev.preventDefault();
    if (shiftKey) {
      previousTabStop?.focus();
    } else {
      nextTabStop?.focus();
    }
  }
  /**
   * @hidden
   */
  get headerHasContent() {
    return this.preview || this.views.length > 1 || this.clearButton;
  }
  /**
   * @hidden
   * Used by the FloatingLabel to determine if the component is empty.
   */
  isEmpty() {
    return false;
  }
  /**
   * Focuses the wrapper of the FlatColorPicker.
   */
  focus() {
    if (this.disabled || this.focused) {
      return;
    }
    this.host.nativeElement.focus();
    this.focused = true;
  }
  /**
   * Blurs the wrapper of the FlatColorPicker.
   */
  blur() {
    if (!this.focused) {
      return;
    }
    this.notifyNgTouched();
    this.host.nativeElement.blur();
    this.focused = false;
  }
  /**
   * Clears the value of the FlatColorPicker.
   */
  reset() {
    if (!isPresent2(this.value)) {
      return;
    }
    this.value = void 0;
    this.notifyNgChanged(void 0);
    this.setHostElementAriaLabel();
  }
  /**
   * @hidden
   */
  onViewChange(view) {
    if (this.activeView === view) {
      return;
    }
    this.activeView = view;
    this.activeViewChange.emit(view);
    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => {
        this[this.activeView]?.focus();
      });
    });
    if (this.activeView === "gradient") {
      this.removeGradientAttributes();
    }
  }
  /**
   * @hidden
   */
  onClearButtonClick() {
    this.resetInnerComponentValue();
    this.clearButtonClick.emit();
  }
  /**
   * @hidden
   */
  handleValueChange(color) {
    if (this.preview) {
      this.changeCurrentValue(color);
    } else {
      this.setFlatColorPickerValue(color);
    }
  }
  /**
   * @hidden
   */
  onAction(ev) {
    if (ev.target === "apply") {
      this.setFlatColorPickerValue(this.selection);
    } else {
      this.resetSelection(ev.originalEvent);
    }
    this.actionButtonClick.emit();
  }
  /**
   * @hidden
   */
  writeValue(value) {
    this.value = value;
    this.cdr.markForCheck();
  }
  /**
   * @hidden
   */
  registerOnChange(fn) {
    this.notifyNgChanged = fn;
  }
  /**
   * @hidden
   */
  registerOnTouched(fn) {
    this.notifyNgTouched = fn;
  }
  /**
   * @hidden
   */
  setDisabledState(isDisabled) {
    this.cdr.markForCheck();
    this.disabled = isDisabled;
  }
  /**
   * @hidden
   */
  resetSelection(ev) {
    const eventArgs = new ColorPickerCancelEvent(ev);
    this.cancel.emit(eventArgs);
    if (!eventArgs.isDefaultPrevented()) {
      this.selection = this.value;
    }
    this.notifyNgTouched();
  }
  setHostElementAriaLabel() {
    const parsed = parseColor2(this.value, this.format, this.gradientSettings.opacity);
    const ariaLabelValue = `${this.value ? parsed : this.localizationService.get("flatColorPickerNoColor")}`;
    this.renderer.setAttribute(this.host.nativeElement, "aria-label", ariaLabelValue);
  }
  setSizingVariables() {
    const paletteTileSize = this.service.paletteTileLayout(this.paletteSettings.tileSize);
    const element = this.host.nativeElement.querySelector(".k-coloreditor-views.k-vstack");
    const cssProperties = [`--kendo-color-preview-columns: ${this.paletteSettings.columns};`];
    if (paletteTileSize.width) {
      cssProperties.push(`--kendo-color-preview-width: ${paletteTileSize.width}px;`);
    }
    if (paletteTileSize.height) {
      cssProperties.push(`--kendo-color-preview-height: ${paletteTileSize.height}px;`);
    }
    this.renderer.setProperty(element, "style", cssProperties.join(" "));
  }
  changeCurrentValue(color) {
    this.selection = color;
    this.notifyNgTouched();
  }
  resetInnerComponentValue() {
    this.selection = null;
    if (this.gradient) {
      this.gradient.reset();
      return;
    }
    this.palette.reset();
  }
  setFlatColorPickerValue(color) {
    if (this.value === color) {
      return;
    }
    this.value = color;
    this.valueChange.emit(color);
    this.notifyNgChanged(color);
    this.setHostElementAriaLabel();
  }
  setActiveView() {
    if (!isPresent2(this.activeView)) {
      this.activeView = this.views[0];
      return;
    }
    if (isDevMode() && this.views.indexOf(this.activeView) === -1) {
      throw new Error("Invalid configuration: The current activeView is not present in the views collection");
    }
  }
  notifyNgChanged = () => {
  };
  notifyNgTouched = () => {
  };
  initDomEvents() {
    if (!this.host) {
      return;
    }
    const hostElement = this.host.nativeElement;
    this.ngZone.runOutsideAngular(() => {
      this.subscriptions.add(this.renderer.listen(hostElement, "focus", () => {
        this.focused = true;
      }));
      this.subscriptions.add(this.renderer.listen(hostElement, "blur", () => {
        this.focused = false;
        this.notifyNgTouched();
      }));
    });
  }
  removeGradientAttributes() {
    if (this.gradientElement) {
      this.renderer.removeAttribute(this.gradientElement.nativeElement, "role");
      this.renderer.removeAttribute(this.gradientElement.nativeElement, "aria-label");
    }
  }
  handleClasses(value, input) {
    const elem = this.host.nativeElement;
    const classes = getStylingClasses("coloreditor", input, this[input], value);
    if (classes.toRemove) {
      this.renderer.removeClass(elem, classes.toRemove);
    }
    if (classes.toAdd) {
      this.renderer.addClass(elem, classes.toAdd);
    }
  }
  static ɵfac = function FlatColorPickerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FlatColorPickerComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(FlatColorPickerService), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Injector));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _FlatColorPickerComponent,
    selectors: [["kendo-flatcolorpicker"]],
    viewQuery: function FlatColorPickerComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c43, 5);
        ɵɵviewQuery(_c43, 5, ElementRef);
        ɵɵviewQuery(_c44, 5);
        ɵɵviewQuery(_c44, 5, ElementRef);
        ɵɵviewQuery(_c45, 5);
        ɵɵviewQuery(_c46, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.header = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.headerElement = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.gradient = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.gradientElement = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.palette = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.footer = _t.first);
      }
    },
    hostVars: 14,
    hostBindings: function FlatColorPickerComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("keydown.enter", function FlatColorPickerComponent_keydown_enter_HostBindingHandler($event) {
          return ctx.enterHandler($event);
        })("keydown.escape", function FlatColorPickerComponent_keydown_escape_HostBindingHandler() {
          return ctx.escapeHandler();
        })("focusin", function FlatColorPickerComponent_focusin_HostBindingHandler($event) {
          return ctx.focusHandler($event);
        });
      }
      if (rf & 2) {
        ɵɵattribute("aria-disabled", ctx.isDisabled)("aria-readonly", ctx.ariaReadonly)("dir", ctx.direction)("tabindex", ctx.hostTabindex)("role", ctx.ariaRole)("aria-invalid", ctx.isControlInvalid);
        ɵɵclassProp("k-flatcolorpicker", ctx.hostClasses)("k-coloreditor", ctx.hostClasses)("k-disabled", ctx.disabledClass)("k-readonly", ctx.readonly);
      }
    },
    inputs: {
      readonly: "readonly",
      disabled: "disabled",
      format: "format",
      value: "value",
      tabindex: "tabindex",
      clearButton: "clearButton",
      preview: "preview",
      actionsLayout: "actionsLayout",
      activeView: "activeView",
      views: "views",
      gradientSettings: "gradientSettings",
      adaptiveMode: "adaptiveMode",
      paletteSettings: "paletteSettings",
      size: "size"
    },
    outputs: {
      valueChange: "valueChange",
      cancel: "cancel",
      activeViewChange: "activeViewChange",
      clearButtonClick: "clearButtonClick",
      actionButtonClick: "actionButtonClick"
    },
    exportAs: ["kendoFlatColorPicker"],
    standalone: true,
    features: [ɵɵProvidersFeature([{
      multi: true,
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _FlatColorPickerComponent)
    }, {
      provide: KendoInput,
      useExisting: forwardRef(() => _FlatColorPickerComponent)
    }, FlatColorPickerService, FlatColorPickerLocalizationService, {
      provide: LocalizationService,
      useExisting: FlatColorPickerLocalizationService
    }, {
      provide: L10N_PREFIX,
      useValue: "kendo.flatcolorpicker"
    }]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    decls: 6,
    vars: 4,
    consts: () => {
      let i18n_28;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_28 = goog.getMsg("Flatcolorpicker no color chosen");
        i18n_28 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_28;
      } else {
        i18n_28 = $localize`:kendo.flatcolorpicker.flatColorPickerNoColor|The aria-label applied to the FlatColorPicker component when the value is empty.:Flatcolorpicker no color chosen`;
      }
      let i18n_29;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_29 = goog.getMsg("Colorgradient no color chosen");
        i18n_29 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_29;
      } else {
        i18n_29 = $localize`:kendo.flatcolorpicker.colorGradientNoColor|The aria-label applied to the ColorGradient component when the value is empty.:Colorgradient no color chosen`;
      }
      let i18n_30;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_30 = goog.getMsg("Colorpalette no color chosen");
        i18n_30 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_30;
      } else {
        i18n_30 = $localize`:kendo.flatcolorpicker.colorPaletteNoColor|The aria-label applied to the ColorPalette component when the value is empty.:Colorpalette no color chosen`;
      }
      let i18n_31;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_31 = goog.getMsg("Choose color");
        i18n_31 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_31;
      } else {
        i18n_31 = $localize`:kendo.flatcolorpicker.colorGradientHandle|The title for the gradient color drag handle chooser.:Choose color`;
      }
      let i18n_32;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_32 = goog.getMsg("Clear value");
        i18n_32 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_32;
      } else {
        i18n_32 = $localize`:kendo.flatcolorpicker.clearButton|The title for the clear button.:Clear value`;
      }
      let i18n_33;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_33 = goog.getMsg("Set hue");
        i18n_33 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_33;
      } else {
        i18n_33 = $localize`:kendo.flatcolorpicker.hueSliderHandle|The title for the hue slider handle.:Set hue`;
      }
      let i18n_34;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_34 = goog.getMsg("Set opacity");
        i18n_34 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_34;
      } else {
        i18n_34 = $localize`:kendo.flatcolorpicker.opacitySliderHandle|The title for the opacity slider handle.:Set opacity`;
      }
      let i18n_35;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_35 = goog.getMsg("Contrast ratio");
        i18n_35 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_35;
      } else {
        i18n_35 = $localize`:kendo.flatcolorpicker.contrastRatio|The contrast ratio message for the contrast tool.:Contrast ratio`;
      }
      let i18n_36;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_36 = goog.getMsg("Color preview");
        i18n_36 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_36;
      } else {
        i18n_36 = $localize`:kendo.flatcolorpicker.previewColor|The message for the color preview pane.:Color preview`;
      }
      let i18n_37;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_37 = goog.getMsg("Revert selection");
        i18n_37 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_37;
      } else {
        i18n_37 = $localize`:kendo.flatcolorpicker.revertSelection|The message for the selected color pane.:Revert selection`;
      }
      let i18n_38;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_38 = goog.getMsg("Gradient view");
        i18n_38 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_38;
      } else {
        i18n_38 = $localize`:kendo.flatcolorpicker.gradientView|The message for the gradient view button.:Gradient view`;
      }
      let i18n_39;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_39 = goog.getMsg("Palette view");
        i18n_39 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_39;
      } else {
        i18n_39 = $localize`:kendo.flatcolorpicker.paletteView|The message for the palette view button.:Palette view`;
      }
      let i18n_40;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_40 = goog.getMsg("Change color format");
        i18n_40 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_40;
      } else {
        i18n_40 = $localize`:kendo.flatcolorpicker.formatButton|The message for the input format toggle button.:Change color format`;
      }
      let i18n_41;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_41 = goog.getMsg("Apply");
        i18n_41 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_41;
      } else {
        i18n_41 = $localize`:kendo.flatcolorpicker.applyButton|The message for the Apply action button.:Apply`;
      }
      let i18n_42;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_42 = goog.getMsg("Cancel");
        i18n_42 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_42;
      } else {
        i18n_42 = $localize`:kendo.flatcolorpicker.cancelButton|The message for the Cancel action button.:Cancel`;
      }
      let i18n_43;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_43 = goog.getMsg("Red channel");
        i18n_43 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_43;
      } else {
        i18n_43 = $localize`:kendo.flatcolorpicker.redChannelLabel|The label of the NumericTextBox representing the red color channel.:Red channel`;
      }
      let i18n_44;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_44 = goog.getMsg("Green channel");
        i18n_44 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_44;
      } else {
        i18n_44 = $localize`:kendo.flatcolorpicker.greenChannelLabel|The label of the NumericTextBox representing the green color channel.:Green channel`;
      }
      let i18n_45;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_45 = goog.getMsg("Blue channel");
        i18n_45 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_45;
      } else {
        i18n_45 = $localize`:kendo.flatcolorpicker.blueChannelLabel|The label of the NumericTextBox representing the blue color channel.:Blue channel`;
      }
      let i18n_46;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_46 = goog.getMsg("Alpha channel");
        i18n_46 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_46;
      } else {
        i18n_46 = $localize`:kendo.flatcolorpicker.alphaChannelLabel|The label of the NumericTextBox representing the alpha color channel.:Alpha channel`;
      }
      let i18n_47;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_47 = goog.getMsg("R");
        i18n_47 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_47;
      } else {
        i18n_47 = $localize`:kendo.flatcolorpicker.redChannelLabel|The label of the NumericTextBox representing the red color channel.:R`;
      }
      let i18n_48;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_48 = goog.getMsg("G");
        i18n_48 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_48;
      } else {
        i18n_48 = $localize`:kendo.flatcolorpicker.greenInputPlaceholder|The placeholder for the green color input.:G`;
      }
      let i18n_49;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_49 = goog.getMsg("B");
        i18n_49 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_49;
      } else {
        i18n_49 = $localize`:kendo.flatcolorpicker.blueInputPlaceholder|The placeholder for the blue color input.:B`;
      }
      let i18n_50;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_50 = goog.getMsg("HEX");
        i18n_50 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_50;
      } else {
        i18n_50 = $localize`:kendo.flatcolorpicker.hexInputPlaceholder|The placeholder for the HEX color input.:HEX`;
      }
      return [["header", ""], ["gradient", ""], ["palette", ""], ["footer", ""], ["kendoFlatColorPickerLocalizedMessages", "", "flatColorPickerNoColor", i18n_28, "colorGradientNoColor", i18n_29, "colorPaletteNoColor", i18n_30, "colorGradientHandle", i18n_31, "clearButton", i18n_32, "hueSliderHandle", i18n_33, "opacitySliderHandle", i18n_34, "contrastRatio", i18n_35, "previewColor", i18n_36, "revertSelection", i18n_37, "gradientView", i18n_38, "paletteView", i18n_39, "formatButton", i18n_40, "applyButton", i18n_41, "cancelButton", i18n_42, "redChannelLabel", i18n_43, "greenChannelLabel", i18n_44, "blueChannelLabel", i18n_45, "alphaChannelLabel", i18n_46, "redChannelLabel", i18n_47, "greenInputPlaceholder", i18n_48, "blueInputPlaceholder", i18n_49, "hexInputPlaceholder", i18n_50], ["kendoFlatColorPickerHeader", "", 3, "innerTabIndex", "clearButton", "activeView", "views", "size", "value", "selection", "preview"], [1, "k-coloreditor-views", "k-vstack"], [3, "tabindex", "value", "size", "adaptiveMode", "format", "opacity", "delay", "contrastTool", "gradientSliderSmallStep", "gradientSliderStep", "readonly", "ariaAttributesEnabled"], [3, "tabindex", "palette", "size", "columns", "tileSize", "format", "value", "readonly"], ["kendoFlatColorPickerActionButtons", "", 3, "innerTabIndex", "size", "ngClass"], ["kendoFlatColorPickerHeader", "", 3, "clearButtonClick", "viewChange", "valuePaneClick", "tabOut", "innerTabIndex", "clearButton", "activeView", "views", "size", "value", "selection", "preview"], [3, "keydown.tab", "valueChange", "tabindex", "value", "size", "adaptiveMode", "format", "opacity", "delay", "contrastTool", "gradientSliderSmallStep", "gradientSliderStep", "readonly", "ariaAttributesEnabled"], [3, "valueChange", "tabindex", "palette", "size", "columns", "tileSize", "format", "value", "readonly"], ["kendoFlatColorPickerActionButtons", "", 3, "actionButtonClick", "tabOut", "innerTabIndex", "size", "ngClass"]];
    },
    template: function FlatColorPickerComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementContainer(0, 4);
        ɵɵtemplate(1, FlatColorPickerComponent_Conditional_1_Template, 2, 8, "div", 5);
        ɵɵelementStart(2, "div", 6);
        ɵɵtemplate(3, FlatColorPickerComponent_Conditional_3_Template, 2, 12, "kendo-colorgradient", 7)(4, FlatColorPickerComponent_Conditional_4_Template, 2, 8, "kendo-colorpalette", 8);
        ɵɵelementEnd();
        ɵɵtemplate(5, FlatColorPickerComponent_Conditional_5_Template, 2, 3, "div", 9);
      }
      if (rf & 2) {
        ɵɵadvance();
        ɵɵconditional(ctx.headerHasContent ? 1 : -1);
        ɵɵadvance(2);
        ɵɵconditional(ctx.activeView === "gradient" ? 3 : -1);
        ɵɵadvance();
        ɵɵconditional(ctx.activeView === "palette" ? 4 : -1);
        ɵɵadvance();
        ɵɵconditional(ctx.preview && !ctx.adaptiveMode ? 5 : -1);
      }
    },
    dependencies: [LocalizedColorPickerMessagesDirective, FlatColorPickerHeaderComponent, ColorGradientComponent, ColorPaletteComponent, FlatColorPickerActionButtonsComponent, NgClass],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FlatColorPickerComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoFlatColorPicker",
      selector: "kendo-flatcolorpicker",
      providers: [{
        multi: true,
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => FlatColorPickerComponent)
      }, {
        provide: KendoInput,
        useExisting: forwardRef(() => FlatColorPickerComponent)
      }, FlatColorPickerService, FlatColorPickerLocalizationService, {
        provide: LocalizationService,
        useExisting: FlatColorPickerLocalizationService
      }, {
        provide: L10N_PREFIX,
        useValue: "kendo.flatcolorpicker"
      }],
      template: `
        <ng-container kendoFlatColorPickerLocalizedMessages
          i18n-flatColorPickerNoColor="kendo.flatcolorpicker.flatColorPickerNoColor|The aria-label applied to the FlatColorPicker component when the value is empty."
          flatColorPickerNoColor="Flatcolorpicker no color chosen"
          i18n-colorGradientNoColor="kendo.flatcolorpicker.colorGradientNoColor|The aria-label applied to the ColorGradient component when the value is empty."
          colorGradientNoColor="Colorgradient no color chosen"
          i18n-colorPaletteNoColor="kendo.flatcolorpicker.colorPaletteNoColor|The aria-label applied to the ColorPalette component when the value is empty."
          colorPaletteNoColor="Colorpalette no color chosen"
          i18n-colorGradientHandle="kendo.flatcolorpicker.colorGradientHandle|The title for the gradient color drag handle chooser."
          colorGradientHandle="Choose color"
          i18n-clearButton="kendo.flatcolorpicker.clearButton|The title for the clear button."
          clearButton="Clear value"
          i18n-hueSliderHandle="kendo.flatcolorpicker.hueSliderHandle|The title for the hue slider handle."
          hueSliderHandle="Set hue"
          i18n-opacitySliderHandle="kendo.flatcolorpicker.opacitySliderHandle|The title for the opacity slider handle."
          opacitySliderHandle="Set opacity"
          i18n-contrastRatio="kendo.flatcolorpicker.contrastRatio|The contrast ratio message for the contrast tool."
          contrastRatio="Contrast ratio"
          i18n-previewColor="kendo.flatcolorpicker.previewColor|The message for the color preview pane."
          previewColor="Color preview"
          i18n-revertSelection="kendo.flatcolorpicker.revertSelection|The message for the selected color pane."
          revertSelection="Revert selection"
          i18n-gradientView="kendo.flatcolorpicker.gradientView|The message for the gradient view button."
          gradientView="Gradient view"
          i18n-paletteView="kendo.flatcolorpicker.paletteView|The message for the palette view button."
          paletteView="Palette view"
          i18n-formatButton="kendo.flatcolorpicker.formatButton|The message for the input format toggle button."
          formatButton="Change color format"
          i18n-applyButton="kendo.flatcolorpicker.applyButton|The message for the Apply action button."
          applyButton="Apply"
          i18n-cancelButton="kendo.flatcolorpicker.cancelButton|The message for the Cancel action button."
          cancelButton="Cancel"
          i18n-redChannelLabel="kendo.flatcolorpicker.redChannelLabel|The label of the NumericTextBox representing the red color channel."
          redChannelLabel="Red channel"
          i18n-greenChannelLabel="kendo.flatcolorpicker.greenChannelLabel|The label of the NumericTextBox representing the green color channel."
          greenChannelLabel="Green channel"
          i18n-blueChannelLabel="kendo.flatcolorpicker.blueChannelLabel|The label of the NumericTextBox representing the blue color channel."
          blueChannelLabel="Blue channel"
          i18n-alphaChannelLabel="kendo.flatcolorpicker.alphaChannelLabel|The label of the NumericTextBox representing the alpha color channel."
          alphaChannelLabel="Alpha channel"
          i18n-redInputPlaceholder="kendo.flatcolorpicker.redInputPlaceholder|The placeholder for the red color input."
          redChannelLabel="R"
          i18n-greenInputPlaceholder="kendo.flatcolorpicker.greenInputPlaceholder|The placeholder for the green color input."
          greenInputPlaceholder="G"
          i18n-blueInputPlaceholder="kendo.flatcolorpicker.blueInputPlaceholder|The placeholder for the blue color input."
          blueInputPlaceholder="B"
          i18n-hexInputPlaceholder="kendo.flatcolorpicker.hexInputPlaceholder|The placeholder for the HEX color input."
          hexInputPlaceholder="HEX">
        </ng-container>
        @if (headerHasContent) {
          <div kendoFlatColorPickerHeader
            [innerTabIndex]="innerTabIndex"
            #header
            [clearButton]="clearButton"
            [activeView]="activeView"
            [views]="views"
            [size]="size"
            [value]="value"
            [selection]="selection"
            [preview]="preview"
            (clearButtonClick)="onClearButtonClick()"
            (viewChange)="onViewChange($event)"
            (valuePaneClick)="resetSelection($event)"
          (tabOut)="lastFocusable($event)"></div>
        }
        <div class="k-coloreditor-views k-vstack">
          @if (activeView === 'gradient') {
            <kendo-colorgradient #gradient
              [tabindex]="innerTabIndex"
              [value]="selection"
              [size]="size"
              [adaptiveMode]="adaptiveMode"
              [format]="format"
              [opacity]="gradientSettings.opacity"
              [delay]="gradientSettings.delay"
              [contrastTool]="gradientSettings.contrastTool"
              [gradientSliderSmallStep]="gradientSettings.gradientSliderSmallStep"
              [gradientSliderStep]="gradientSettings.gradientSliderStep"
              [readonly]="readonly"
              [ariaAttributesEnabled]="false"
              (keydown.tab)="focusFirstHeaderButton()"
              (valueChange)="handleValueChange($event)"
            ></kendo-colorgradient>
          }
          @if (activeView === 'palette') {
            <kendo-colorpalette #palette
              [tabindex]="innerTabIndex"
              [palette]="paletteSettings.palette"
              [size]="size"
              [columns]="paletteSettings.columns"
              [tileSize]="paletteSettings.tileSize"
              [format]="format"
              [value]="selection"
              [readonly]="readonly"
              (valueChange)="handleValueChange($event)"
            ></kendo-colorpalette>
          }
        </div>
        @if (preview && !adaptiveMode) {
          <div
            #footer
            kendoFlatColorPickerActionButtons
            [innerTabIndex]="innerTabIndex"
            [size]="size"
            [ngClass]="'k-justify-content-' + actionsLayout"
            (actionButtonClick)="onAction($event)"
            (tabOut)="firstFocusable.focus()">
          </div>
        }
        `,
      standalone: true,
      imports: [LocalizedColorPickerMessagesDirective, FlatColorPickerHeaderComponent, ColorGradientComponent, ColorPaletteComponent, FlatColorPickerActionButtonsComponent, NgClass]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: FlatColorPickerService
  }, {
    type: LocalizationService
  }, {
    type: ChangeDetectorRef
  }, {
    type: Renderer2
  }, {
    type: NgZone
  }, {
    type: Injector
  }], {
    hostClasses: [{
      type: HostBinding,
      args: ["class.k-flatcolorpicker"]
    }, {
      type: HostBinding,
      args: ["class.k-coloreditor"]
    }],
    disabledClass: [{
      type: HostBinding,
      args: ["class.k-disabled"]
    }, {
      type: HostBinding,
      args: ["attr.aria-disabled"]
    }],
    ariaReadonly: [{
      type: HostBinding,
      args: ["attr.aria-readonly"]
    }],
    direction: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    hostTabindex: [{
      type: HostBinding,
      args: ["attr.tabindex"]
    }],
    ariaRole: [{
      type: HostBinding,
      args: ["attr.role"]
    }],
    isControlInvalid: [{
      type: HostBinding,
      args: ["attr.aria-invalid"]
    }],
    isDisabled: [{
      type: HostBinding,
      args: ["attr.aria-disabled"]
    }],
    enterHandler: [{
      type: HostListener,
      args: ["keydown.enter", ["$event"]]
    }],
    escapeHandler: [{
      type: HostListener,
      args: ["keydown.escape"]
    }],
    focusHandler: [{
      type: HostListener,
      args: ["focusin", ["$event"]]
    }],
    readonly: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["class.k-readonly"]
    }],
    disabled: [{
      type: Input
    }],
    format: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    tabindex: [{
      type: Input
    }],
    clearButton: [{
      type: Input
    }],
    preview: [{
      type: Input
    }],
    actionsLayout: [{
      type: Input
    }],
    activeView: [{
      type: Input
    }],
    views: [{
      type: Input
    }],
    gradientSettings: [{
      type: Input
    }],
    adaptiveMode: [{
      type: Input
    }],
    paletteSettings: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    valueChange: [{
      type: Output
    }],
    cancel: [{
      type: Output
    }],
    activeViewChange: [{
      type: Output
    }],
    clearButtonClick: [{
      type: Output
    }],
    actionButtonClick: [{
      type: Output
    }],
    header: [{
      type: ViewChild,
      args: ["header"]
    }],
    headerElement: [{
      type: ViewChild,
      args: ["header", {
        read: ElementRef
      }]
    }],
    gradient: [{
      type: ViewChild,
      args: ["gradient"]
    }],
    gradientElement: [{
      type: ViewChild,
      args: ["gradient", {
        read: ElementRef
      }]
    }],
    palette: [{
      type: ViewChild,
      args: ["palette"]
    }],
    footer: [{
      type: ViewChild,
      args: ["footer"]
    }]
  });
})();
var animationDuration = 300;
var AdaptiveCloseButtonComponent = class _AdaptiveCloseButtonComponent {
  title;
  icon;
  svgIcon;
  color;
  close = new EventEmitter();
  static ɵfac = function AdaptiveCloseButtonComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdaptiveCloseButtonComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _AdaptiveCloseButtonComponent,
    selectors: [["kendo-adaptive-close-button"]],
    inputs: {
      title: "title",
      icon: "icon",
      svgIcon: "svgIcon",
      color: "color"
    },
    outputs: {
      close: "close"
    },
    standalone: true,
    features: [ɵɵStandaloneFeature],
    decls: 1,
    vars: 5,
    consts: [["kendoButton", "", "type", "button", "fillMode", "flat", "size", "large", 3, "click", "title", "icon", "svgIcon", "themeColor", "tabIndex"]],
    template: function AdaptiveCloseButtonComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "button", 0);
        ɵɵlistener("click", function AdaptiveCloseButtonComponent_Template_button_click_0_listener($event) {
          return ctx.close.emit($event);
        });
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵproperty("title", ctx.title)("icon", ctx.icon)("svgIcon", ctx.svgIcon)("themeColor", ctx.color)("tabIndex", -1);
      }
    },
    dependencies: [ButtonComponent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdaptiveCloseButtonComponent, [{
    type: Component,
    args: [{
      selector: "kendo-adaptive-close-button",
      template: `
        <button kendoButton
            type="button"
            [title]="title"
            [icon]="icon"
            [svgIcon]="svgIcon"
            [themeColor]="color"
            fillMode="flat"
            size="large"
            [tabIndex]="-1"
            (click)="close.emit($event)"
        ></button>
    `,
      standalone: true,
      imports: [ButtonComponent]
    }]
  }], null, {
    title: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    svgIcon: [{
      type: Input
    }],
    color: [{
      type: Input
    }],
    close: [{
      type: Output
    }]
  });
})();
var AdaptiveRendererComponent = class _AdaptiveRendererComponent {
  localization;
  adaptiveService;
  title;
  subtitle;
  actionSheetTemplate;
  isActionSheetExpanded;
  preview;
  actionSheetClose = new EventEmitter();
  onExpand = new EventEmitter();
  onCollapse = new EventEmitter();
  onApply = new EventEmitter();
  onCancel = new EventEmitter();
  actionSheet;
  actionSheetSearchBar;
  cancelButton;
  applyButton;
  constructor(localization, adaptiveService) {
    this.localization = localization;
    this.adaptiveService = adaptiveService;
  }
  animationDuration = animationDuration;
  checkIcon = checkIcon;
  messageFor(key) {
    return this.localization.get(key);
  }
  get windowSize() {
    return this.adaptiveService.size;
  }
  static ɵfac = function AdaptiveRendererComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdaptiveRendererComponent)(ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(AdaptiveService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _AdaptiveRendererComponent,
    selectors: [["kendo-adaptive-renderer"]],
    viewQuery: function AdaptiveRendererComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(ActionSheetComponent, 5);
        ɵɵviewQuery(_c47, 5);
        ɵɵviewQuery(_c48, 5);
        ɵɵviewQuery(_c49, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.actionSheet = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.actionSheetSearchBar = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.cancelButton = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.applyButton = _t.first);
      }
    },
    inputs: {
      title: "title",
      subtitle: "subtitle",
      actionSheetTemplate: "actionSheetTemplate",
      isActionSheetExpanded: "isActionSheetExpanded",
      preview: "preview"
    },
    outputs: {
      actionSheetClose: "actionSheetClose",
      onExpand: "onExpand",
      onCollapse: "onCollapse",
      onApply: "onApply",
      onCancel: "onCancel"
    },
    standalone: true,
    features: [ɵɵStandaloneFeature],
    decls: 3,
    vars: 11,
    consts: [["actionSheet", ""], ["cancel", ""], ["apply", ""], [3, "overlayClick", "expand", "collapse", "animation", "expanded", "cssClass", "cssStyle"], ["kendoActionSheetTemplate", ""], [1, "k-actionsheet-titlebar"], [1, "k-actionsheet-titlebar-group"], [1, "k-actionsheet-title"], [1, "k-text-center"], [1, "k-actionsheet-subtitle", "k-text-center"], [1, "k-actionsheet-actions"], ["icon", "check", "color", "primary", 3, "close", "title", "svgIcon"], [1, "k-actionsheet-content"], [4, "ngTemplateOutlet"], [1, "k-actions", "k-actions-stretched", "k-actions-horizontal", "k-actionsheet-footer"], ["kendoButton", "", "size", "large", 3, "click", "title"], ["kendoButton", "", "size", "large", "themeColor", "primary", 3, "click", "title"]],
    template: function AdaptiveRendererComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "kendo-actionsheet", 3, 0);
        ɵɵlistener("overlayClick", function AdaptiveRendererComponent_Template_kendo_actionsheet_overlayClick_0_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.actionSheetClose.emit());
        })("expand", function AdaptiveRendererComponent_Template_kendo_actionsheet_expand_0_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onExpand.emit());
        })("collapse", function AdaptiveRendererComponent_Template_kendo_actionsheet_collapse_0_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onCollapse.emit());
        });
        ɵɵtemplate(2, AdaptiveRendererComponent_ng_template_2_Template, 11, 6, "ng-template", 4);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵproperty("animation", ɵɵpureFunction1(4, _c50, ctx.animationDuration))("expanded", ctx.isActionSheetExpanded)("cssClass", ɵɵpureFunction2(6, _c51, ctx.windowSize === "small", ctx.windowSize === "medium"))("cssStyle", ɵɵpureFunction1(9, _c52, ctx.windowSize === "small" ? "100vh" : "60vh"));
      }
    },
    dependencies: [ActionSheetComponent, ActionSheetTemplateDirective, ButtonComponent, NgTemplateOutlet, AdaptiveCloseButtonComponent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdaptiveRendererComponent, [{
    type: Component,
    args: [{
      selector: "kendo-adaptive-renderer",
      template: `
        <kendo-actionsheet
          #actionSheet
          [animation]="{ duration: animationDuration }"
          [expanded]="isActionSheetExpanded"
            [cssClass]="{
                'k-adaptive-actionsheet': true,
                'k-actionsheet-fullscreen': windowSize === 'small',
                'k-actionsheet-bottom': windowSize === 'medium'
            }"
            [cssStyle]="{
                height: windowSize === 'small' ? '100vh' : '60vh'
            }"
          (overlayClick)="actionSheetClose.emit()"
          (expand)="onExpand.emit()"
          (collapse)="onCollapse.emit()"
          >
          <ng-template kendoActionSheetTemplate>
            <div class="k-actionsheet-titlebar">
              <div class="k-actionsheet-titlebar-group">
                <div class="k-actionsheet-title">
                  <div class="k-text-center">{{ title || messageFor('adaptiveTitle') }}</div>
                  @if (subtitle) {
                    <div class="k-actionsheet-subtitle k-text-center">{{ subtitle }}</div>
                  }
                </div>
                <div class="k-actionsheet-actions">
                  <kendo-adaptive-close-button
                    icon="check"
                    color="primary"
                    [title]="messageFor('adaptiveCloseButtonTitle')"
                    [svgIcon]="checkIcon"
                    (close)="actionSheetClose.emit($event)">
                  </kendo-adaptive-close-button>
                </div>
              </div>
            </div>
            <div class="k-actionsheet-content">
              <ng-container *ngTemplateOutlet="actionSheetTemplate"></ng-container>
            </div>
            @if (preview) {
              <div class="k-actions k-actions-stretched k-actions-horizontal k-actionsheet-footer">
                <button
                  #cancel
                  kendoButton
                  size="large"
                  (click)="onCancel.emit($event)"
                  [title]="messageFor('cancelButton')">
                  {{messageFor('cancelButton')}}
                </button>
                <button
                  #apply
                  kendoButton
                  size="large"
                  themeColor="primary"
                  (click)="onApply.emit()"
                  [title]="messageFor('applyButton')">
                  {{messageFor('applyButton')}}
                </button>
              </div>
            }
          </ng-template>
        </kendo-actionsheet>
        `,
      standalone: true,
      imports: [ActionSheetComponent, ActionSheetTemplateDirective, ButtonComponent, NgTemplateOutlet, AdaptiveCloseButtonComponent]
    }]
  }], () => [{
    type: LocalizationService
  }, {
    type: AdaptiveService
  }], {
    title: [{
      type: Input
    }],
    subtitle: [{
      type: Input
    }],
    actionSheetTemplate: [{
      type: Input
    }],
    isActionSheetExpanded: [{
      type: Input
    }],
    preview: [{
      type: Input
    }],
    actionSheetClose: [{
      type: Output
    }],
    onExpand: [{
      type: Output
    }],
    onCollapse: [{
      type: Output
    }],
    onApply: [{
      type: Output
    }],
    onCancel: [{
      type: Output
    }],
    actionSheet: [{
      type: ViewChild,
      args: [ActionSheetComponent]
    }],
    actionSheetSearchBar: [{
      type: ViewChild,
      args: ["actionSheetSearchBar"]
    }],
    cancelButton: [{
      type: ViewChild,
      args: ["cancel"]
    }],
    applyButton: [{
      type: ViewChild,
      args: ["apply"]
    }]
  });
})();
var DOM_FOCUS_EVENTS = ["focus", "blur"];
var DEFAULT_SIZE$4 = "medium";
var DEFAULT_ROUNDED$3 = "medium";
var DEFAULT_FILL_MODE$3 = "solid";
var nextColorPickerId = 0;
var ColorPickerComponent = class _ColorPickerComponent {
  host;
  popupService;
  cdr;
  localizationService;
  ngZone;
  renderer;
  injector;
  adaptiveService;
  hostClasses = true;
  get focusedClass() {
    return this.isFocused;
  }
  get disabledClass() {
    return this.disabled;
  }
  get ariaReadonly() {
    return this.readonly;
  }
  get ariaExpanded() {
    return this.isOpen;
  }
  get hostTabindex() {
    return this.tabindex;
  }
  direction;
  role = "combobox";
  hasPopup = "dialog";
  get isControlInvalid() {
    return this.control?.invalid?.toString();
  }
  /**
   * @hidden
   */
  focusableId;
  /**
   * Specifies the views rendered in the popup.
   * By default, both the gradient and palette views are rendered.
   */
  views = ["gradient", "palette"];
  /**
   * @hidden
   */
  set view(view) {
    this.views = [view];
  }
  get view() {
    return this.views && this.views.length > 0 ? this.views[0] : null;
  }
  /**
   * Enables or disables the adaptive mode.
   * By default, adaptive rendering is disabled.
   */
  adaptiveMode = "none";
  /**
   * Sets the initially active view in the popup. Supports two-way binding.
   */
  activeView;
  /**
   * Sets the read-only state of the ColorPicker.
   *
   * @default false
   */
  readonly = false;
  /**
   * Sets the disabled state of the ColorPicker. To disable it in reactive forms, see [Forms Support](slug:formssupport_colorpicker#toc-managing-the-colorpicker-disabled-state-in-reactive-forms).
   *
   * @default false
   */
  disabled = false;
  /**
   * Specifies the output format of the ColorPicker.
   *
   * If the input value is in a different format, the component parses it into the specified output `format`.
   *
   * @default 'rgba'
   */
  format = "rgba";
  /**
   * Sets the value of the selected color.
   */
  set value(value) {
    this._value = parseColor2(value, this.format, this.gradientSettings.opacity);
  }
  get value() {
    return this._value;
  }
  /**
   * Configures the popup of the ColorPicker.
   */
  set popupSettings(value) {
    this._popupSettings = Object.assign(this._popupSettings, value);
  }
  get popupSettings() {
    return this._popupSettings;
  }
  /**
   * Configures the palette displayed in the ColorPicker popup.
   */
  set paletteSettings(value) {
    this._paletteSettings = Object.assign(this._paletteSettings, value);
  }
  get paletteSettings() {
    return this._paletteSettings;
  }
  /**
   * Configures the gradient displayed in the ColorPicker popup.
   */
  set gradientSettings(value) {
    this._gradientSettings = Object.assign(this._gradientSettings, value);
  }
  get gradientSettings() {
    return this._gradientSettings;
  }
  /**
   * Defines the name of an existing icon in the Kendo UI theme.
   * Provide only the name of the icon without the `k-icon` or `k-i-` prefixes.
   */
  icon;
  /**
   * A CSS class name which displays an icon in the ColorPicker button.
   * `iconClass` is compatible with the `ngClass` syntax.
   *
   * Takes precedence over `icon` if both are defined.
   */
  iconClass;
  /**
   * Defines an SVGIcon to render within the button.
   * The input can take either an existing Kendo SVG icon or a custom one.
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
   * Sets the title of the ActionSheet rendered instead of the Popup on small screens.
   */
  adaptiveTitle = "";
  /**
   * Sets the subtitle of the ActionSheet rendered instead of the Popup on small screens.
   * By default, the ActionSheet does not render a subtitle.
   */
  adaptiveSubtitle;
  /**
   * Specifies whether the ColorPicker displays a **Clear color** button.
   *
   * @default true
   */
  clearButton = true;
  /**
   * Sets the [`tabindex`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) of the component.
   *
   * @default 0
   */
  set tabindex(value) {
    const tabindex = Number(value);
    const defaultValue = 0;
    this._tabindex = !isNaN(tabindex) ? tabindex : defaultValue;
  }
  get tabindex() {
    return !this.disabled ? this._tabindex : void 0;
  }
  /**
   * Displays **Apply** and **Cancel** action buttons and color preview panes.
   *
   * When enabled, the component value does not change immediately upon
   * color selection, but only after the **Apply** button is clicked.
   *
   * The **Cancel** button reverts the current selection to its
   * previous state, i.e., to the current value.
   *
   * @default false
   */
  preview = false;
  /**
   * Configures the layout of the **Apply** and **Cancel** action buttons.
   *
   * @default 'end'
   */
  actionsLayout = "end";
  /**
   * The size property specifies the padding of the ColorPicker internal elements
   * ([see example]({% slug appearance_colorpicker %}#toc-size)).
   *
   * @default 'medium'
   */
  set size(size) {
    const newSize = size || DEFAULT_SIZE$4;
    this.handleClasses(newSize, "size");
    this._size = newSize;
  }
  get size() {
    return this._size;
  }
  /**
   * The rounded property specifies the border radius of the ColorPicker
   * ([see example](slug:appearance_colorpicker#toc-roundness)).
   *
   * @default 'medium'
   */
  set rounded(rounded) {
    const newRounded = rounded || DEFAULT_ROUNDED$3;
    this.handleClasses(newRounded, "rounded");
    this._rounded = newRounded;
  }
  get rounded() {
    return this._rounded;
  }
  /**
   * The fillMode property specifies the background and border styles of the ColorPicker
   * ([see example]({% slug appearance_colorpicker %}#toc-fill-mode)).
   *
   * @default 'solid'
   */
  set fillMode(fillMode) {
    const newFillMode = fillMode || DEFAULT_FILL_MODE$3;
    this.handleClasses(newFillMode, "fillMode");
    this._fillMode = newFillMode;
  }
  get fillMode() {
    return this._fillMode;
  }
  /**
   * Fires when the value changes.
   */
  valueChange = new EventEmitter();
  /**
   * Fires when the Popup (or ActionSheet in adaptive mode) is about to open.
   * This event is preventable. If you cancel it, the Popup (or the ActionSheet) remains closed.
   */
  open = new EventEmitter();
  /**
   * Fires when the Popup (or ActionSheet in adaptive mode) is about to close.
   * This event is preventable. If you cancel it, the Popup (or the ActionSheet) remains open.
   */
  close = new EventEmitter();
  /**
   * Fires when the ColorPicker is focused.
   */
  onFocus = new EventEmitter();
  /**
   * Fires when the ColorPicker is blurred.
   */
  onBlur = new EventEmitter();
  /**
   * Fires when the user cancels the current color selection.
   *
   * Fires on preview pane or 'Cancel' button click.
   */
  cancel = new EventEmitter();
  /**
   * Fires when the left side of the ColorPicker wrapper is clicked.
   * The event is triggered regardless of whether a ColorPicker icon is set or not.
   *
   * The [`ActiveColorClickEvent`]({% slug api_inputs_activecolorclickevent %}) event provides the option to prevent the popup opening.
   */
  activeColorClick = new EventEmitter();
  /**
   * @hidden
   * Fires when the clear button is clicked.
   */
  clearButtonClick = new EventEmitter();
  /**
   * Fires when the view is about to change.
   * Used to provide a two-way binding for the `activeView` property.
   */
  activeViewChange = new EventEmitter();
  /**
   * Indicates whether the ColorPicker wrapper is focused.
   */
  isFocused = false;
  /**
  * @hidden
  */
  windowSize = "large";
  /**
   * Returns the current open state. Returns `true` if the Popup (or ActionSheet in adaptive mode) is currently open.
   */
  get isOpen() {
    return isPresent2(this.popupRef) || this.isActionSheetExpanded;
  }
  /**
   * @hidden
   */
  get customIconStyles() {
    if (this.iconClass) {
      let parsedIconClass = "";
      parseCSSClassNames(this.iconClass).forEach((iconClass) => {
        parsedIconClass += iconClass + " ";
      });
      return parsedIconClass.slice(0, -1);
    }
    return "";
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
  get actionSheet() {
    return this.adaptiveRenderer?.actionSheet;
  }
  /**
   * @hidden
   */
  get isActionSheetExpanded() {
    return Boolean(this.actionSheet?.expanded);
  }
  /**
   * @hidden
   */
  get iconStyles() {
    if (this.icon && !this.iconClass) {
      return `${this.icon}`;
    }
    return "";
  }
  /**
   * Provides a reference to a container element inside the component markup.
   * The container element references the location of the appended popup&mdash;
   * for example, inside the component markup.
   */
  container;
  activeColor;
  popupTemplate;
  flatColorPicker;
  /**
   * @hidden
   */
  adaptiveRenderer;
  /**
   * @hidden
   */
  arrowDownIcon = caretAltDownIcon;
  popupRef;
  _svgIcon;
  _value;
  _tabindex = 0;
  _popupSettings = {
    animate: true
  };
  _paletteSettings = {};
  _gradientSettings = {
    opacity: true,
    delay: 0
  };
  _size = "medium";
  _rounded = "medium";
  _fillMode = "solid";
  dynamicRTLSubscription;
  subscriptions = new Subscription();
  popupSubs = new Subscription();
  colorPickerId;
  control;
  constructor(host, popupService, cdr, localizationService, ngZone, renderer, injector, adaptiveService) {
    this.host = host;
    this.popupService = popupService;
    this.cdr = cdr;
    this.localizationService = localizationService;
    this.ngZone = ngZone;
    this.renderer = renderer;
    this.injector = injector;
    this.adaptiveService = adaptiveService;
    A(packageMetadata);
    this.dynamicRTLSubscription = this.localizationService.changes.subscribe(({
      rtl
    }) => {
      this.direction = rtl ? "rtl" : "ltr";
    });
    this.colorPickerId = nextColorPickerId++;
  }
  ngOnInit() {
    const defaultPreset = this.format !== "name" ? DEFAULT_PRESET$1 : DEFAULT_ACCESSIBLE_PRESET$1;
    const settingsPalette = this._paletteSettings.palette;
    const presetColumns = typeof settingsPalette === "string" && PALETTEPRESETS[settingsPalette] ? PALETTEPRESETS[settingsPalette].columns : void 0;
    this._paletteSettings = {
      palette: settingsPalette || defaultPreset,
      tileSize: this._paletteSettings.tileSize,
      columns: this._paletteSettings.columns || presetColumns || 10
    };
    this.handleHostId();
    this.renderer.setAttribute(this.host.nativeElement, "aria-controls", `k-colorpicker-popup-${this.colorPickerId}`);
    this.control = this.injector.get(NgControl, null);
  }
  ngAfterViewInit() {
    const stylingInputs = ["size", "rounded", "fillMode"];
    stylingInputs.forEach((input) => {
      this.handleClasses(this[input], input);
    });
    this.setHostElementAriaLabel();
    this.initDomEvents();
    this.windowSize = this.adaptiveService.size;
    if (this.actionSheet && isDocumentAvailable()) {
      this.actionSheet.element.nativeElement.style.setProperty("--kendo-actionsheet-height", "60vh");
      this.actionSheet.element.nativeElement.style.setProperty("--kendo-actionsheet-max-height", "none");
    }
  }
  ngOnChanges(changes) {
    if (changes.format && changes.format.currentValue === "name") {
      this.activeView = "palette";
    }
    if (this.activeView === "gradient" && this.gradientSettings.opacity) {
      this.format = "rgba";
      this.value = parseColor2(this.value, this.format, this.gradientSettings.opacity);
    }
    if (isChanged("value", changes)) {
      this.setHostElementAriaLabel();
    }
  }
  ngOnDestroy() {
    this.closePopup();
    if (this.dynamicRTLSubscription) {
      this.dynamicRTLSubscription.unsubscribe();
    }
    this.subscriptions.unsubscribe();
    this.handleDomEvents("remove", DOM_FOCUS_EVENTS);
  }
  /**
   * @hidden
   */
  onResize() {
    const currentWindowSize = this.adaptiveService.size;
    if (this.isAdaptiveModeEnabled && this.windowSize !== currentWindowSize) {
      if (this.isOpen) {
        this.toggleWithEvents(false);
      }
      this.windowSize = currentWindowSize;
    }
  }
  /**
   * @hidden
   */
  handleCancelEvent(ev) {
    this.cancel.emit(ev);
  }
  /**
   * @hidden
   */
  togglePopup() {
    if (!this.isActionSheetExpanded) {
      this.focus();
      this.toggleWithEvents(!this.isOpen);
    }
  }
  /**
   * @hidden
   */
  handleWrapperClick(event) {
    if (this.disabled) {
      return;
    }
    this.focus();
    if (closest(event.target, (element) => element === this.activeColor.nativeElement)) {
      const event2 = new ActiveColorClickEvent(this.value);
      this.activeColorClick.emit(event2);
      if (!event2.isOpenPrevented() || this.isOpen) {
        this.toggleWithEvents(!this.isOpen);
      }
      return;
    }
    if (!this.isActionSheetExpanded) {
      this.toggleWithEvents(!this.isOpen);
    }
  }
  /**
   * Focuses the wrapper of the ColorPicker.
   */
  focus() {
    this.isFocused = true;
    this.host.nativeElement.focus();
  }
  /**
   * @hidden
   */
  handleWrapperFocus() {
    if (this.isFocused) {
      return;
    }
    this.ngZone.run(() => {
      this.focus();
      this.onFocus.emit();
    });
  }
  /**
   * Blurs the ColorPicker.
   */
  blur() {
    this.isFocused = false;
    this.host.nativeElement.blur();
    this.notifyNgTouched();
  }
  /**
   * @hidden
   */
  handleWrapperBlur() {
    if (!this.isActionSheetExpanded) {
      if (this.isOpen) {
        return;
      }
      this.ngZone.run(() => {
        this.onBlur.emit();
        this.isFocused = false;
      });
    }
  }
  /**
   * Clears the value of the ColorPicker.
   */
  reset() {
    if (!isPresent2(this.value)) {
      return;
    }
    this._value = void 0;
    this.setHostElementAriaLabel();
    this.notifyNgChanged(void 0);
  }
  /**
   * Toggles the Popup (or ActionSheet in adaptive mode) of the ColorPicker.
   * Does not trigger the `open` and `close` events of the component.
   *
   * @param open An optional parameter. Specifies whether the popup will be opened or closed.
   */
  toggle(open) {
    this.windowSize = this.adaptiveService.size;
    if (this.disabled || this.readonly) {
      return;
    }
    this.cdr.markForCheck();
    if (this.isActionSheetExpanded) {
      this.closeActionSheet();
    } else {
      this.closePopup();
    }
    open = isPresent2(open) ? open : !this.isOpen;
    if (open) {
      if (this.isAdaptive && !this.isActionSheetExpanded) {
        this.openActionSheet();
      } else {
        this.openPopup();
      }
      this.focusFirstElement();
    }
  }
  /**
   * @hidden
   */
  handleValueChange(color) {
    const parsedColor = parseColor2(color, this.format, this.gradientSettings.opacity);
    const valueChange = parsedColor !== this.value;
    if (valueChange) {
      this.value = parsedColor;
      this.valueChange.emit(parsedColor);
      this.setHostElementAriaLabel();
      this.notifyNgChanged(parsedColor);
    }
  }
  /**
   * @hidden
   */
  handlePopupBlur(event) {
    if (!this.isActionSheetExpanded) {
      if (this.popupBlurInvalid(event)) {
        return;
      }
      this.isFocused = false;
      this.onBlur.emit();
      this.notifyNgTouched();
      this.toggleWithEvents(false);
    }
  }
  /**
   * @hidden
   */
  writeValue(value) {
    this.value = value;
    this.cdr.markForCheck();
  }
  /**
   * @hidden
   */
  registerOnChange(fn) {
    this.notifyNgChanged = fn;
  }
  /**
   * @hidden
   */
  registerOnTouched(fn) {
    this.notifyNgTouched = fn;
  }
  /**
   * @hidden
   */
  setDisabledState(isDisabled) {
    this.cdr.markForCheck();
    this.disabled = isDisabled;
  }
  /**
   * @hidden
   */
  handleWrapperKeyDown(event) {
    const code = normalizeKeys(event);
    if (code === Keys.ArrowDown || code === Keys.Enter) {
      event.preventDefault();
      this.ngZone.run(() => {
        this.toggleWithEvents(true);
      });
    }
  }
  /**
   * @hidden
   */
  applyValue() {
    this.handleValueChange(this.flatColorPicker.selection);
    this.toggleWithEvents(false);
  }
  /**
   * @hidden
   */
  cancelValue(e) {
    this.flatColorPicker.resetSelection(e);
    this.toggleWithEvents(false);
  }
  /**
   * @hidden
   */
  onActionSheetClose(e) {
    if (this.preview) {
      this.cancelValue(e);
    } else {
      this.applyValue();
    }
  }
  /**
   * @hidden
   */
  handlePopupKeyDown(event) {
    if (event.code === Keys.Escape) {
      this.toggleWithEvents(false);
      this.host.nativeElement.focus();
    }
    if (event.code === Keys.Tab) {
      const currentElement = event.shiftKey ? this.firstFocusableElement.nativeElement : this.lastFocusableElement.nativeElement;
      const nextElement = event.shiftKey ? this.lastFocusableElement.nativeElement : this.firstFocusableElement.nativeElement;
      if (event.target === currentElement) {
        event.preventDefault();
        nextElement.focus();
      }
    }
  }
  /**
   * @hidden
   */
  messageFor(key) {
    return this.localizationService.get(key);
  }
  /**
   * @hidden
   * Used by the FloatingLabel to determine if the component is empty.
   */
  isEmpty() {
    return false;
  }
  setHostElementAriaLabel() {
    const ariaLabelValue = `${this.value ? this.value : this.localizationService.get("colorPickerNoColor")}`;
    this.renderer.setAttribute(this.host.nativeElement, "aria-label", ariaLabelValue);
  }
  handleClasses(value, input) {
    const elem = this.host.nativeElement;
    const classes = getStylingClasses("picker", input, this[input], value);
    if (classes.toRemove) {
      this.renderer.removeClass(elem, classes.toRemove);
    }
    if (classes.toAdd) {
      this.renderer.addClass(elem, classes.toAdd);
    }
  }
  popupBlurInvalid(ev) {
    const focusInFlatColorPickerElement = this.popupRef?.popupElement?.contains(ev.relatedTarget);
    const hostClicked = closest(ev.relatedTarget, (element) => element === this.host.nativeElement);
    return Boolean(hostClicked || focusInFlatColorPickerElement);
  }
  toggleWithEvents(open) {
    const sameState = this.isOpen === open;
    if (this.disabled || this.readonly || sameState) {
      return;
    }
    let eventArgs;
    if (open) {
      eventArgs = new ColorPickerOpenEvent();
      this.open.emit(eventArgs);
    } else {
      eventArgs = new ColorPickerCloseEvent();
      this.close.emit(eventArgs);
    }
    if (!eventArgs.isDefaultPrevented()) {
      this.toggle(open);
    }
    if (open) {
      this.focusFirstElement();
    }
  }
  focusFirstElement() {
    this.ngZone.onStable.pipe(take(1)).subscribe(() => {
      if (this.flatColorPicker) {
        const gradientDragHandle = this.flatColorPicker.gradient?.gradientDragHandle;
        const palette = this.flatColorPicker.palette?.host;
        const elementToFocus = gradientDragHandle ? gradientDragHandle : palette;
        elementToFocus.nativeElement.focus();
      }
    });
  }
  openActionSheet() {
    this.actionSheet.toggle(true);
  }
  closeActionSheet() {
    this.actionSheet.toggle(false);
    this.focus();
  }
  openPopup() {
    const horizontalAlign = this.direction === "rtl" ? "right" : "left";
    const anchorPosition = {
      horizontal: horizontalAlign,
      vertical: "bottom"
    };
    const popupPosition = {
      horizontal: horizontalAlign,
      vertical: "top"
    };
    this.popupRef = this.popupService.open({
      anchor: this.activeColor,
      animate: this.popupSettings.animate,
      appendTo: this.popupSettings.appendTo,
      popupAlign: popupPosition,
      anchorAlign: anchorPosition,
      popupClass: "k-colorpicker-popup",
      content: this.popupTemplate,
      positionMode: "absolute"
    });
    this.renderer.setAttribute(this.popupRef.popupElement.querySelector(".k-colorpicker-popup"), "id", `k-colorpicker-popup-${this.colorPickerId}`);
    this.popupSubs.add(this.popupRef.popupAnchorViewportLeave.subscribe(() => {
      this.toggleWithEvents(false);
      if (!this.isOpen) {
        this.host.nativeElement.focus({
          preventScroll: true
        });
      }
    }));
  }
  closePopup() {
    if (!this.isOpen) {
      return;
    }
    this.popupSubs.unsubscribe();
    this.popupRef.close();
    this.popupRef = null;
  }
  get firstFocusableElement() {
    if (!this.flatColorPicker.header || this.views.length <= 1 && !this.flatColorPicker.clearButton) {
      const gradient = this.flatColorPicker.gradient;
      return gradient ? gradient.gradientDragHandle : this.flatColorPicker.palette.host;
    }
    return this.views.length > 1 ? this.flatColorPicker.header.viewButtonsCollection.toArray()[0] : this.flatColorPicker.header.clearButtonElement;
  }
  get lastFocusableElement() {
    if (this.preview) {
      return this.flatColorPicker.footer?.lastButton || this.adaptiveRenderer.applyButton.nativeElement;
    }
    if (this.flatColorPicker.palette) {
      return this.flatColorPicker.palette.host;
    }
    const gradient = this.flatColorPicker.gradient;
    const inputs = gradient && gradient.inputs;
    if (gradient && inputs && inputs.formatView === "hex") {
      return inputs.hexInput;
    }
    return this.gradientSettings.opacity ? inputs.opacityInput.numericInput : inputs.blueInput.numericInput;
  }
  notifyNgTouched = () => {
  };
  notifyNgChanged = () => {
  };
  handleDomEvents(action, events) {
    const hostElement = this.host.nativeElement;
    events.forEach((ev) => hostElement[`${action}EventListener`](ev, this.domFocusListener, true));
  }
  initDomEvents() {
    if (!this.host) {
      return;
    }
    const hostElement = this.host.nativeElement;
    this.ngZone.runOutsideAngular(() => {
      this.subscriptions.add(this.renderer.listen(hostElement, "focusin", () => {
        this.handleWrapperFocus();
      }));
      this.subscriptions.add(this.renderer.listen(hostElement, "focusout", (event) => {
        const closestPopup = this.popupRef ? closest(event.relatedTarget, (element) => element === this.flatColorPicker.host.nativeElement) : false;
        const closestWrapper = closest(event.relatedTarget, (element) => element === this.host.nativeElement);
        const closestActionSheet = this.isActionSheetExpanded ? closest(event.relatedTarget, (element) => element === this.actionSheet.element.nativeElement) : false;
        if (!closestPopup && !closestWrapper && !closestActionSheet) {
          this.handleWrapperBlur();
        }
      }));
      this.handleDomEvents("add", DOM_FOCUS_EVENTS);
      this.subscriptions.add(this.renderer.listen(hostElement, "keydown", (event) => {
        this.handleWrapperKeyDown(event);
      }));
      this.subscriptions.add(this.renderer.listen(hostElement, "click", (event) => {
        this.ngZone.run(() => {
          if (!this.isActionSheetExpanded) {
            this.handleWrapperClick(event);
          }
        });
      }));
    });
  }
  domFocusListener = (event) => event.stopImmediatePropagation();
  handleHostId() {
    const hostElement = this.host.nativeElement;
    const existingId = hostElement.getAttribute("id");
    if (existingId) {
      this.focusableId = existingId;
    } else {
      const id = `k-${guid()}`;
      hostElement.setAttribute("id", id);
      this.focusableId = id;
    }
  }
  static ɵfac = function ColorPickerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ColorPickerComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(PopupService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(AdaptiveService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _ColorPickerComponent,
    selectors: [["kendo-colorpicker"]],
    viewQuery: function ColorPickerComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c53, 7, ViewContainerRef);
        ɵɵviewQuery(_c54, 7);
        ɵɵviewQuery(_c55, 7);
        ɵɵviewQuery(_c56, 5);
        ɵɵviewQuery(AdaptiveRendererComponent, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.container = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.activeColor = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.popupTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.flatColorPicker = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.adaptiveRenderer = _t.first);
      }
    },
    hostVars: 20,
    hostBindings: function ColorPickerComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("aria-disabled", ctx.disabledClass)("aria-readonly", ctx.ariaReadonly)("aria-expanded", ctx.ariaExpanded)("tabindex", ctx.hostTabindex)("dir", ctx.direction)("role", ctx.role)("aria-haspopup", ctx.hasPopup)("aria-invalid", ctx.isControlInvalid);
        ɵɵclassProp("k-colorpicker", ctx.hostClasses)("k-icon-picker", ctx.hostClasses)("k-picker", ctx.hostClasses)("k-focus", ctx.focusedClass)("k-disabled", ctx.disabledClass)("k-readonly", ctx.readonly);
      }
    },
    inputs: {
      views: "views",
      view: "view",
      adaptiveMode: "adaptiveMode",
      activeView: "activeView",
      readonly: "readonly",
      disabled: "disabled",
      format: "format",
      value: "value",
      popupSettings: "popupSettings",
      paletteSettings: "paletteSettings",
      gradientSettings: "gradientSettings",
      icon: "icon",
      iconClass: "iconClass",
      svgIcon: "svgIcon",
      adaptiveTitle: "adaptiveTitle",
      adaptiveSubtitle: "adaptiveSubtitle",
      clearButton: "clearButton",
      tabindex: "tabindex",
      preview: "preview",
      actionsLayout: "actionsLayout",
      size: "size",
      rounded: "rounded",
      fillMode: "fillMode"
    },
    outputs: {
      valueChange: "valueChange",
      open: "open",
      close: "close",
      onFocus: "focus",
      onBlur: "blur",
      cancel: "cancel",
      activeColorClick: "activeColorClick",
      clearButtonClick: "clearButtonClick",
      activeViewChange: "activeViewChange"
    },
    exportAs: ["kendoColorPicker"],
    standalone: true,
    features: [ɵɵProvidersFeature([{
      multi: true,
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _ColorPickerComponent)
    }, {
      provide: KendoInput,
      useExisting: forwardRef(() => _ColorPickerComponent)
    }, ColorPickerLocalizationService, {
      provide: LocalizationService,
      useExisting: ColorPickerLocalizationService
    }, {
      provide: L10N_PREFIX,
      useValue: "kendo.colorpicker"
    }]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    decls: 13,
    vars: 18,
    consts: () => {
      let i18n_51;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_51 = goog.getMsg("Colorpicker no color chosen");
        i18n_51 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_51;
      } else {
        i18n_51 = $localize`:kendo.colorpicker.colorPickerNoColor|The aria-label applied to the ColorPicker component when the value is empty.:Colorpicker no color chosen`;
      }
      let i18n_52;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_52 = goog.getMsg("Flatcolorpicker no color chosen");
        i18n_52 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_52;
      } else {
        i18n_52 = $localize`:kendo.colorpicker.flatColorPickerNoColor|The aria-label applied to the FlatColorPicker component when the value is empty.:Flatcolorpicker no color chosen`;
      }
      let i18n_53;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_53 = goog.getMsg("Colorgradient no color chosen");
        i18n_53 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_53;
      } else {
        i18n_53 = $localize`:kendo.colorpicker.colorGradientNoColor|The aria-label applied to the ColorGradient component when the value is empty.:Colorgradient no color chosen`;
      }
      let i18n_54;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_54 = goog.getMsg("Colorpalette no color chosen");
        i18n_54 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_54;
      } else {
        i18n_54 = $localize`:kendo.colorpicker.colorPaletteNoColor|The aria-label applied to the ColorPalette component when the value is empty.:Colorpalette no color chosen`;
      }
      let i18n_55;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_55 = goog.getMsg("Choose color");
        i18n_55 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_55;
      } else {
        i18n_55 = $localize`:kendo.colorpicker.colorGradientHandle|The title for the gradient color drag handle chooser.:Choose color`;
      }
      let i18n_56;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_56 = goog.getMsg("Clear value");
        i18n_56 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_56;
      } else {
        i18n_56 = $localize`:kendo.colorpicker.clearButton|The title for the clear button.:Clear value`;
      }
      let i18n_57;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_57 = goog.getMsg("Set hue");
        i18n_57 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_57;
      } else {
        i18n_57 = $localize`:kendo.colorpicker.hueSliderHandle|The title for the hue slider handle.:Set hue`;
      }
      let i18n_58;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_58 = goog.getMsg("Set opacity");
        i18n_58 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_58;
      } else {
        i18n_58 = $localize`:kendo.colorpicker.opacitySliderHandle|The title for the opacity slider handle.:Set opacity`;
      }
      let i18n_59;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_59 = goog.getMsg("Contrast ratio");
        i18n_59 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_59;
      } else {
        i18n_59 = $localize`:kendo.colorpicker.contrastRatio|The contrast ratio message for the contrast tool.:Contrast ratio`;
      }
      let i18n_60;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_60 = goog.getMsg("Color preview");
        i18n_60 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_60;
      } else {
        i18n_60 = $localize`:kendo.colorpicker.previewColor|The message for the color preview pane.:Color preview`;
      }
      let i18n_61;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_61 = goog.getMsg("Revert selection");
        i18n_61 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_61;
      } else {
        i18n_61 = $localize`:kendo.colorpicker.revertSelection|The message for the selected color pane.:Revert selection`;
      }
      let i18n_62;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_62 = goog.getMsg("Gradient view");
        i18n_62 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_62;
      } else {
        i18n_62 = $localize`:kendo.colorpicker.gradientView|The message for the gradient view button.:Gradient view`;
      }
      let i18n_63;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_63 = goog.getMsg("Palette view");
        i18n_63 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_63;
      } else {
        i18n_63 = $localize`:kendo.colorpicker.paletteView|The message for the palette view button.:Palette view`;
      }
      let i18n_64;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_64 = goog.getMsg("Change color format");
        i18n_64 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_64;
      } else {
        i18n_64 = $localize`:kendo.colorpicker.formatButton|The message for the input format toggle button.:Change color format`;
      }
      let i18n_65;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_65 = goog.getMsg("Apply");
        i18n_65 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_65;
      } else {
        i18n_65 = $localize`:kendo.colorpicker.applyButton|The message for the Apply action button.:Apply`;
      }
      let i18n_66;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_66 = goog.getMsg("Cancel");
        i18n_66 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_66;
      } else {
        i18n_66 = $localize`:kendo.colorpicker.cancelButton|The message for the Cancel action button.:Cancel`;
      }
      let i18n_67;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_67 = goog.getMsg("Close");
        i18n_67 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_67;
      } else {
        i18n_67 = $localize`:kendo.colorpicker.adaptiveCloseButtonTitle|The title of the Close button of the ActionSheet that is rendered instead of the Popup when using small screen devices in adaptive mode.:Close`;
      }
      let i18n_68;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_68 = goog.getMsg("Choose Color");
        i18n_68 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_68;
      } else {
        i18n_68 = $localize`:kendo.colorpicker.adaptiveTitle|The title for the ActionSheet when in adaptive mode.:Choose Color`;
      }
      let i18n_69;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_69 = goog.getMsg("Red channel");
        i18n_69 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_69;
      } else {
        i18n_69 = $localize`:kendo.colorpicker.redChannelLabel|The label of the NumericTextBox representing the red color channel.:Red channel`;
      }
      let i18n_70;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_70 = goog.getMsg("Green channel");
        i18n_70 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_70;
      } else {
        i18n_70 = $localize`:kendo.colorpicker.greenChannelLabel|The label of the NumericTextBox representing the green color channel.:Green channel`;
      }
      let i18n_71;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_71 = goog.getMsg("Blue channel");
        i18n_71 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_71;
      } else {
        i18n_71 = $localize`:kendo.colorpicker.blueChannelLabel|The label of the NumericTextBox representing the blue color channel.:Blue channel`;
      }
      let i18n_72;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_72 = goog.getMsg("Alpha channel");
        i18n_72 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_72;
      } else {
        i18n_72 = $localize`:kendo.colorpicker.alphaChannelLabel|The label of the NumericTextBox representing the alpha color channel.:Alpha channel`;
      }
      let i18n_73;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_73 = goog.getMsg("R");
        i18n_73 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_73;
      } else {
        i18n_73 = $localize`:kendo.colorpicker.redChannelLabel|The label of the NumericTextBox representing the red color channel.:R`;
      }
      let i18n_74;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_74 = goog.getMsg("G");
        i18n_74 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_74;
      } else {
        i18n_74 = $localize`:kendo.colorpicker.greenInputPlaceholder|The placeholder for the green color input.:G`;
      }
      let i18n_75;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_75 = goog.getMsg("B");
        i18n_75 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_75;
      } else {
        i18n_75 = $localize`:kendo.colorpicker.blueInputPlaceholder|The placeholder for the blue color input.:B`;
      }
      let i18n_76;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_76 = goog.getMsg("HEX");
        i18n_76 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_76;
      } else {
        i18n_76 = $localize`:kendo.colorpicker.hexInputPlaceholder|The placeholder for the HEX color input.:HEX`;
      }
      let i18n_77;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_77 = goog.getMsg("Select color");
        i18n_77 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_77;
      } else {
        i18n_77 = $localize`:kendo.colorpicker.toggleButtonLabel|The text set as aria-label on the toggle button.:Select color`;
      }
      return [["activeColor", ""], ["popupTemplate", ""], ["container", ""], ["flatColorPicker", ""], ["kendoColorPickerLocalizedMessages", "", "colorPickerNoColor", i18n_51, "flatColorPickerNoColor", i18n_52, "colorGradientNoColor", i18n_53, "colorPaletteNoColor", i18n_54, "colorGradientHandle", i18n_55, "clearButton", i18n_56, "hueSliderHandle", i18n_57, "opacitySliderHandle", i18n_58, "contrastRatio", i18n_59, "previewColor", i18n_60, "revertSelection", i18n_61, "gradientView", i18n_62, "paletteView", i18n_63, "formatButton", i18n_64, "applyButton", i18n_65, "cancelButton", i18n_66, "adaptiveCloseButtonTitle", i18n_67, "adaptiveTitle", i18n_68, "redChannelLabel", i18n_69, "greenChannelLabel", i18n_70, "blueChannelLabel", i18n_71, "alphaChannelLabel", i18n_72, "redChannelLabel", i18n_73, "greenInputPlaceholder", i18n_74, "blueInputPlaceholder", i18n_75, "hexInputPlaceholder", i18n_76, "toggleButtonLabel", i18n_77], [1, "k-input-inner"], [1, "k-value-icon", "k-color-preview", 3, "ngClass"], ["innerCssClass", "k-color-preview-icon", 3, "name", "customFontClass", "svgIcon"], [1, "k-color-preview-mask"], ["kendoButton", "", "tabindex", "-1", "type", "button", "icon", "caret-alt-down", "rounded", "none", 1, "k-input-button", 3, "size", "svgIcon", "fillMode", "disabled"], [3, "actionSheetClose", "onApply", "onCancel", "actionSheetTemplate", "isActionSheetExpanded", "title", "subtitle", "preview"], [3, "cancel", "focusout", "valueChange", "keydown", "activeViewChange", "clearButtonClick", "actionButtonClick", "value", "format", "size", "views", "activeView", "actionsLayout", "adaptiveMode", "preview", "gradientSettings", "paletteSettings", "clearButton"], [3, "resize"]];
    },
    template: function ColorPickerComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵelementContainer(0, 4);
        ɵɵelementStart(1, "span", 5, 0)(3, "span", 6);
        ɵɵtemplate(4, ColorPickerComponent_Conditional_4_Template, 1, 3, "kendo-icon-wrapper", 7);
        ɵɵelement(5, "span", 8);
        ɵɵelementEnd()();
        ɵɵelement(6, "button", 9);
        ɵɵtemplate(7, ColorPickerComponent_ng_template_7_Template, 2, 11, "ng-template", null, 1, ɵɵtemplateRefExtractor);
        ɵɵelementContainer(9, null, 2);
        ɵɵelementStart(11, "kendo-adaptive-renderer", 10);
        ɵɵlistener("actionSheetClose", function ColorPickerComponent_Template_kendo_adaptive_renderer_actionSheetClose_11_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onActionSheetClose($event));
        })("onApply", function ColorPickerComponent_Template_kendo_adaptive_renderer_onApply_11_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.applyValue());
        })("onCancel", function ColorPickerComponent_Template_kendo_adaptive_renderer_onCancel_11_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.cancelValue($event));
        });
        ɵɵelementEnd();
        ɵɵtemplate(12, ColorPickerComponent_Conditional_12_Template, 1, 0, "kendo-resize-sensor");
      }
      if (rf & 2) {
        const popupTemplate_r5 = ɵɵreference(8);
        ɵɵadvance(3);
        ɵɵproperty("ngClass", ɵɵpureFunction2(15, _c57, ctx.customIconStyles || ctx.iconStyles || ctx.svgIcon, !ctx.value));
        ɵɵadvance();
        ɵɵconditional(ctx.iconClass || ctx.icon || ctx.svgIcon ? 4 : -1);
        ɵɵadvance();
        ɵɵstyleProp("background-color", ctx.value);
        ɵɵadvance();
        ɵɵproperty("size", ctx.size)("svgIcon", ctx.arrowDownIcon)("fillMode", ctx.fillMode)("disabled", ctx.disabled);
        ɵɵattribute("aria-label", ctx.messageFor("toggleButtonLabel"));
        ɵɵadvance(5);
        ɵɵproperty("actionSheetTemplate", popupTemplate_r5)("isActionSheetExpanded", ctx.isActionSheetExpanded)("title", ctx.adaptiveTitle)("subtitle", ctx.adaptiveSubtitle)("preview", ctx.preview);
        ɵɵadvance();
        ɵɵconditional(ctx.isOpen || ctx.isAdaptiveModeEnabled ? 12 : -1);
      }
    },
    dependencies: [LocalizedColorPickerMessagesDirective, NgClass, IconWrapperComponent, ButtonComponent, FlatColorPickerComponent, ResizeSensorComponent, AdaptiveRendererComponent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColorPickerComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoColorPicker",
      selector: "kendo-colorpicker",
      providers: [{
        multi: true,
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => ColorPickerComponent)
      }, {
        provide: KendoInput,
        useExisting: forwardRef(() => ColorPickerComponent)
      }, ColorPickerLocalizationService, {
        provide: LocalizationService,
        useExisting: ColorPickerLocalizationService
      }, {
        provide: L10N_PREFIX,
        useValue: "kendo.colorpicker"
      }],
      template: `
        <ng-container kendoColorPickerLocalizedMessages
          i18n-colorPickerNoColor="kendo.colorpicker.colorPickerNoColor|The aria-label applied to the ColorPicker component when the value is empty."
          colorPickerNoColor="Colorpicker no color chosen"
          i18n-flatColorPickerNoColor="kendo.colorpicker.flatColorPickerNoColor|The aria-label applied to the FlatColorPicker component when the value is empty."
          flatColorPickerNoColor="Flatcolorpicker no color chosen"
          i18n-colorGradientNoColor="kendo.colorpicker.colorGradientNoColor|The aria-label applied to the ColorGradient component when the value is empty."
          colorGradientNoColor="Colorgradient no color chosen"
          i18n-colorPaletteNoColor="kendo.colorpicker.colorPaletteNoColor|The aria-label applied to the ColorPalette component when the value is empty."
          colorPaletteNoColor="Colorpalette no color chosen"
          i18n-colorGradientHandle="kendo.colorpicker.colorGradientHandle|The title for the gradient color drag handle chooser."
          colorGradientHandle="Choose color"
          i18n-clearButton="kendo.colorpicker.clearButton|The title for the clear button."
          clearButton="Clear value"
          i18n-hueSliderHandle="kendo.colorpicker.hueSliderHandle|The title for the hue slider handle."
          hueSliderHandle="Set hue"
          i18n-opacitySliderHandle="kendo.colorpicker.opacitySliderHandle|The title for the opacity slider handle."
          opacitySliderHandle="Set opacity"
          i18n-contrastRatio="kendo.colorpicker.contrastRatio|The contrast ratio message for the contrast tool."
          contrastRatio="Contrast ratio"
          i18n-previewColor="kendo.colorpicker.previewColor|The message for the color preview pane."
          previewColor="Color preview"
          i18n-revertSelection="kendo.colorpicker.revertSelection|The message for the selected color pane."
          revertSelection="Revert selection"
          i18n-gradientView="kendo.colorpicker.gradientView|The message for the gradient view button."
          gradientView="Gradient view"
          i18n-paletteView="kendo.colorpicker.paletteView|The message for the palette view button."
          paletteView="Palette view"
          i18n-formatButton="kendo.colorpicker.formatButton|The message for the input format toggle button."
          formatButton="Change color format"
          i18n-applyButton="kendo.colorpicker.applyButton|The message for the Apply action button."
          applyButton="Apply"
          i18n-cancelButton="kendo.colorpicker.cancelButton|The message for the Cancel action button."
          cancelButton="Cancel"
          i18n-adaptiveCloseButtonTitle="kendo.colorpicker.adaptiveCloseButtonTitle|The title of the Close button of the ActionSheet that is rendered instead of the Popup when using small screen devices in adaptive mode."
          adaptiveCloseButtonTitle="Close"
          i18n-adaptiveTitle="kendo.colorpicker.adaptiveTitle|The title for the ActionSheet when in adaptive mode."
          adaptiveTitle="Choose Color"
          i18n-redChannelLabel="kendo.colorpicker.redChannelLabel|The label of the NumericTextBox representing the red color channel."
          redChannelLabel="Red channel"
          i18n-greenChannelLabel="kendo.colorpicker.greenChannelLabel|The label of the NumericTextBox representing the green color channel."
          greenChannelLabel="Green channel"
          i18n-blueChannelLabel="kendo.colorpicker.blueChannelLabel|The label of the NumericTextBox representing the blue color channel."
          blueChannelLabel="Blue channel"
          i18n-alphaChannelLabel="kendo.colorpicker.alphaChannelLabel|The label of the NumericTextBox representing the alpha color channel."
          alphaChannelLabel="Alpha channel"
          i18n-redInputPlaceholder="kendo.colorpicker.redInputPlaceholder|The placeholder for the red color input."
          redChannelLabel="R"
          i18n-greenInputPlaceholder="kendo.colorpicker.greenInputPlaceholder|The placeholder for the green color input."
          greenInputPlaceholder="G"
          i18n-blueInputPlaceholder="kendo.colorpicker.blueInputPlaceholder|The placeholder for the blue color input."
          blueInputPlaceholder="B"
          i18n-hexInputPlaceholder="kendo.colorpicker.hexInputPlaceholder|The placeholder for the HEX color input."
          hexInputPlaceholder="HEX"
          i18n-toggleButtonLabel="kendo.colorpicker.toggleButtonLabel|The text set as aria-label on the toggle button."
          toggleButtonLabel="Select color">
        </ng-container>
        <span #activeColor class="k-input-inner">
          <span
            class="k-value-icon k-color-preview"
            [ngClass]="{'k-icon-color-preview': customIconStyles || iconStyles || svgIcon, 'k-no-color': !value}"
            >
            @if (iconClass || icon || svgIcon) {
              <kendo-icon-wrapper
                [name]="iconStyles"
                innerCssClass="k-color-preview-icon"
                [customFontClass]="customIconStyles"
                [svgIcon]="svgIcon"
                >
              </kendo-icon-wrapper>
            }
            <span class="k-color-preview-mask" [style.background-color]="value"></span>
          </span>
        </span>
        <button
          kendoButton
          tabindex="-1"
          type="button"
          icon="caret-alt-down"
          [size]="size"
          [svgIcon]="arrowDownIcon"
          [fillMode]="fillMode"
          [disabled]="disabled"
          rounded="none"
          class="k-input-button"
          [attr.aria-label]="messageFor('toggleButtonLabel')"
          >
        </button>
        <ng-template #popupTemplate>
          <kendo-flatcolorpicker
            #flatColorPicker
            [value]="value"
            [format]="format"
            [size]="isAdaptive ? 'large' : size"
            [views]="views"
            [activeView]="activeView"
            [actionsLayout]="actionsLayout"
            [adaptiveMode]="isActionSheetExpanded"
            [preview]="preview"
            [gradientSettings]="gradientSettings"
            [paletteSettings]="paletteSettings"
            [clearButton]="clearButton"
            (cancel)="handleCancelEvent($event)"
            (focusout)="handlePopupBlur($event)"
            (valueChange)="handleValueChange($event)"
            (keydown)="handlePopupKeyDown($event)"
            (activeViewChange)="activeViewChange.emit($event)"
            (clearButtonClick)="clearButtonClick.emit()"
            (actionButtonClick)="togglePopup()">
          </kendo-flatcolorpicker>
        </ng-template>
        <ng-container #container></ng-container>
        <kendo-adaptive-renderer
          [actionSheetTemplate]="popupTemplate"
          [isActionSheetExpanded]="isActionSheetExpanded"
          [title]="adaptiveTitle"
          [subtitle]="adaptiveSubtitle"
          [preview]="preview"
          (actionSheetClose)="onActionSheetClose($event)"
          (onApply)="applyValue()"
          (onCancel)="cancelValue($event)"
          >
        </kendo-adaptive-renderer>
        @if (isOpen || isAdaptiveModeEnabled) {
          <kendo-resize-sensor (resize)="onResize()"></kendo-resize-sensor>
        }
        `,
      standalone: true,
      imports: [LocalizedColorPickerMessagesDirective, NgClass, IconWrapperComponent, ButtonComponent, FlatColorPickerComponent, ResizeSensorComponent, AdaptiveRendererComponent]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: PopupService
  }, {
    type: ChangeDetectorRef
  }, {
    type: LocalizationService
  }, {
    type: NgZone
  }, {
    type: Renderer2
  }, {
    type: Injector
  }, {
    type: AdaptiveService
  }], {
    hostClasses: [{
      type: HostBinding,
      args: ["class.k-colorpicker"]
    }, {
      type: HostBinding,
      args: ["class.k-icon-picker"]
    }, {
      type: HostBinding,
      args: ["class.k-picker"]
    }],
    focusedClass: [{
      type: HostBinding,
      args: ["class.k-focus"]
    }],
    disabledClass: [{
      type: HostBinding,
      args: ["attr.aria-disabled"]
    }, {
      type: HostBinding,
      args: ["class.k-disabled"]
    }],
    ariaReadonly: [{
      type: HostBinding,
      args: ["attr.aria-readonly"]
    }],
    ariaExpanded: [{
      type: HostBinding,
      args: ["attr.aria-expanded"]
    }],
    hostTabindex: [{
      type: HostBinding,
      args: ["attr.tabindex"]
    }],
    direction: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    role: [{
      type: HostBinding,
      args: ["attr.role"]
    }],
    hasPopup: [{
      type: HostBinding,
      args: ["attr.aria-haspopup"]
    }],
    isControlInvalid: [{
      type: HostBinding,
      args: ["attr.aria-invalid"]
    }],
    views: [{
      type: Input
    }],
    view: [{
      type: Input
    }],
    adaptiveMode: [{
      type: Input
    }],
    activeView: [{
      type: Input
    }],
    readonly: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["class.k-readonly"]
    }],
    disabled: [{
      type: Input
    }],
    format: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    popupSettings: [{
      type: Input
    }],
    paletteSettings: [{
      type: Input
    }],
    gradientSettings: [{
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
    adaptiveTitle: [{
      type: Input
    }],
    adaptiveSubtitle: [{
      type: Input
    }],
    clearButton: [{
      type: Input
    }],
    tabindex: [{
      type: Input
    }],
    preview: [{
      type: Input
    }],
    actionsLayout: [{
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
    cancel: [{
      type: Output
    }],
    activeColorClick: [{
      type: Output
    }],
    clearButtonClick: [{
      type: Output
    }],
    activeViewChange: [{
      type: Output
    }],
    container: [{
      type: ViewChild,
      args: ["container", {
        read: ViewContainerRef,
        static: true
      }]
    }],
    activeColor: [{
      type: ViewChild,
      args: ["activeColor", {
        static: true
      }]
    }],
    popupTemplate: [{
      type: ViewChild,
      args: ["popupTemplate", {
        static: true
      }]
    }],
    flatColorPicker: [{
      type: ViewChild,
      args: ["flatColorPicker", {
        static: false
      }]
    }],
    adaptiveRenderer: [{
      type: ViewChild,
      args: [AdaptiveRendererComponent]
    }]
  });
})();
var ColorPickerCustomMessagesComponent = class _ColorPickerCustomMessagesComponent extends ColorPickerMessages {
  service;
  constructor(service) {
    super();
    this.service = service;
  }
  get override() {
    return true;
  }
  static ɵfac = function ColorPickerCustomMessagesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ColorPickerCustomMessagesComponent)(ɵɵdirectiveInject(LocalizationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _ColorPickerCustomMessagesComponent,
    selectors: [["kendo-colorpicker-messages"], ["kendo-flatcolorpicker-messages"], ["kendo-colorgradient-messages"], ["kendo-colorpalette-messages"]],
    standalone: true,
    features: [ɵɵProvidersFeature([{
      provide: ColorPickerMessages,
      useExisting: forwardRef(() => _ColorPickerCustomMessagesComponent)
    }]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function ColorPickerCustomMessagesComponent_Template(rf, ctx) {
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColorPickerCustomMessagesComponent, [{
    type: Component,
    args: [{
      providers: [{
        provide: ColorPickerMessages,
        useExisting: forwardRef(() => ColorPickerCustomMessagesComponent)
      }],
      selector: "kendo-colorpicker-messages, kendo-flatcolorpicker-messages, kendo-colorgradient-messages, kendo-colorpalette-messages",
      template: ``,
      standalone: true
    }]
  }], () => [{
    type: LocalizationService
  }], null);
})();
var serial$1 = 0;
var ErrorComponent = class _ErrorComponent {
  hostClass = true;
  /**
   * Sets the alignment of the error message.
   *
   * @default 'start'
   */
  align = "start";
  /**
   * @hidden
   */
  id = `kendo-error-${serial$1++}`;
  roleAttribute = "alert";
  get startClass() {
    return this.align === "start";
  }
  get endClass() {
    return this.align === "end";
  }
  get idAttribute() {
    return this.id;
  }
  static ɵfac = function ErrorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ErrorComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _ErrorComponent,
    selectors: [["kendo-formerror"]],
    hostVars: 8,
    hostBindings: function ErrorComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("role", ctx.roleAttribute)("id", ctx.idAttribute);
        ɵɵclassProp("k-form-error", ctx.hostClass)("k-text-start", ctx.startClass)("k-text-end", ctx.endClass);
      }
    },
    inputs: {
      align: "align"
    },
    standalone: true,
    features: [ɵɵStandaloneFeature],
    ngContentSelectors: _c58,
    decls: 1,
    vars: 0,
    template: function ErrorComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ErrorComponent, [{
    type: Component,
    args: [{
      selector: "kendo-formerror",
      template: `
        <ng-content></ng-content>
    `,
      standalone: true
    }]
  }], null, {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-form-error"]
    }],
    align: [{
      type: Input
    }],
    roleAttribute: [{
      type: HostBinding,
      args: ["attr.role"]
    }],
    startClass: [{
      type: HostBinding,
      args: ["class.k-text-start"]
    }],
    endClass: [{
      type: HostBinding,
      args: ["class.k-text-end"]
    }],
    idAttribute: [{
      type: HostBinding,
      args: ["attr.id"]
    }]
  });
})();
var serial = 0;
var HintComponent = class _HintComponent {
  /**
   * Sets the alignment of the hint message.
   *
   * @default 'start'
   */
  align = "start";
  /**
   * @hidden
   */
  id = `kendo-hint-${serial++}`;
  hostClass = true;
  get startClass() {
    return this.align === "start";
  }
  get endClass() {
    return this.align === "end";
  }
  get idAttribute() {
    return this.id;
  }
  static ɵfac = function HintComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HintComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _HintComponent,
    selectors: [["kendo-formhint"]],
    hostVars: 7,
    hostBindings: function HintComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("id", ctx.idAttribute);
        ɵɵclassProp("k-form-hint", ctx.hostClass)("k-text-start", ctx.startClass)("k-text-end", ctx.endClass);
      }
    },
    inputs: {
      align: "align"
    },
    standalone: true,
    features: [ɵɵStandaloneFeature],
    ngContentSelectors: _c58,
    decls: 1,
    vars: 0,
    template: function HintComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HintComponent, [{
    type: Component,
    args: [{
      selector: "kendo-formhint",
      template: `
        <ng-content></ng-content>
    `,
      standalone: true
    }]
  }], null, {
    align: [{
      type: Input
    }],
    hostClass: [{
      type: HostBinding,
      args: ["class.k-form-hint"]
    }],
    startClass: [{
      type: HostBinding,
      args: ["class.k-text-start"]
    }],
    endClass: [{
      type: HostBinding,
      args: ["class.k-text-end"]
    }],
    idAttribute: [{
      type: HostBinding,
      args: ["attr.id"]
    }]
  });
})();
var FormService = class _FormService {
  formWidth = new BehaviorSubject(null);
  static ɵfac = function FormService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _FormService,
    factory: _FormService.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var DEFAULT_FORM_GUTTERS = {
  rows: "0px",
  cols: "32px"
};
var DEFAULT_FORMFIELDSET_GUTTERS = {
  rows: "0px",
  cols: "16px"
};
function innerWidth(element) {
  if (!isDocumentAvailable()) {
    return;
  }
  let width = element.clientWidth;
  const style = getComputedStyle(element);
  width -= (parseFloat(style.paddingLeft) || 0) + (parseFloat(style.borderLeftWidth) || 0);
  width -= (parseFloat(style.paddingRight) || 0) + (parseFloat(style.borderRightWidth) || 0);
  return width;
}
function processBreakpoints(breakpoints, containerWidth) {
  if (!breakpoints?.length || containerWidth === null) {
    return "";
  }
  for (const [index, breakpoint] of breakpoints.entries()) {
    const minBreakpointWidth = breakpoint.minWidth || breakpoints[index - 1]?.maxWidth + 1 || 0;
    const maxBreakpointWidth = breakpoint.maxWidth || breakpoints[index + 1]?.minWidth - 1 || Infinity;
    if (containerWidth >= minBreakpointWidth && containerWidth <= maxBreakpointWidth) {
      return breakpoint.value;
    }
  }
  return "";
}
var calculateColumns = (cols, containerWidth) => {
  if (!cols) {
    return null;
  }
  if (Array.isArray(cols) && cols.length > 0) {
    const processedCols = processBreakpoints(cols, containerWidth) || null;
    return typeof processedCols === "string" ? parseInt(processedCols, 10) : processedCols;
  } else if (typeof cols === "number") {
    return cols;
  }
  return null;
};
var calculateGutters = (gutters, containerWidth) => {
  if (!gutters) {
    return null;
  }
  if (typeof gutters === "number" || typeof gutters === "string") {
    return {
      cols: gutters,
      rows: gutters
    };
  } else if (Array.isArray(gutters)) {
    const processedGutters = processBreakpoints(gutters, containerWidth) || null;
    return processedGutters !== null ? {
      cols: processedGutters,
      rows: processedGutters
    } : null;
  } else if (typeof gutters === "object") {
    const gutterObject = gutters;
    const result = {
      rows: null,
      cols: null
    };
    if (gutterObject.cols !== void 0 && gutterObject.cols !== null) {
      if (typeof gutterObject.cols === "number" || typeof gutterObject.cols === "string") {
        result.cols = gutterObject.cols;
      } else if (Array.isArray(gutterObject.cols)) {
        result.cols = processBreakpoints(gutterObject.cols, containerWidth) || null;
      }
    } else {
      result.cols = null;
    }
    if (gutterObject.rows !== void 0) {
      if (typeof gutterObject.rows === "number" || typeof gutterObject.rows === "string") {
        result.rows = gutterObject.rows;
      } else if (Array.isArray(gutterObject.rows)) {
        result.rows = processBreakpoints(gutterObject.rows, containerWidth) || null;
      }
    } else {
      result.rows = null;
    }
    return result;
  }
  return null;
};
var calculateColSpan = (colSpan, containerWidth) => {
  if (!colSpan) {
    return null;
  }
  if (typeof colSpan === "number") {
    return colSpan;
  } else if (Array.isArray(colSpan) && colSpan.length > 0) {
    const processedColSpan = processBreakpoints(colSpan, containerWidth) || null;
    return typeof processedColSpan === "string" ? parseInt(processedColSpan, 10) : processedColSpan;
  }
  return null;
};
var generateColumnClass = (columnsNumber) => {
  return columnsNumber && columnsNumber > 0 ? `k-grid-cols-${columnsNumber}` : "";
};
var generateGuttersStyling = (gutters, defaultGutters = DEFAULT_FORM_GUTTERS) => {
  const rows = processCssValue(gutters?.rows);
  const cols = processCssValue(gutters?.cols);
  return `${rows ?? defaultGutters.rows} ${cols ?? defaultGutters.cols}`;
};
var generateColSpanClass = (colSpan) => {
  return colSpan ? `k-col-span-${colSpan}` : "";
};
var FormFieldComponent = class _FormFieldComponent {
  renderer;
  localizationService;
  hostElement;
  formService;
  hostClass = true;
  /**
   * @hidden
   */
  direction;
  get errorClass() {
    if (!this.control) {
      return false;
    }
    return this.control.invalid && (this.control.touched || this.control.dirty);
  }
  get disabledClass() {
    if (!this.control) {
      return false;
    }
    if (this.isRadioControl(this.control)) {
      return false;
    }
    return this.disabledControl() || this.disabledElement() || this.disabledKendoInput();
  }
  set formControls(formControls) {
    this.validateFormControl(formControls);
    this.control = formControls.first;
  }
  controlElementRefs;
  kendoInput;
  errorChildren;
  hintChildren;
  /**
   * Specifies when to show the hint messages:
   * * `initial`&mdash;Shows hints when the form control is `valid` or `untouched` and `pristine`.
   * * `always`&mdash;Always shows hints.
   *
   * @default 'initial'
   */
  showHints = "initial";
  /**
   * Specifies the layout orientation of the form field.
   *
   * @hidden
   *
   * @default 'vertical'
   */
  orientation = "vertical";
  /**
   * Specifies when to show the error messages:
   * * `initial`&mdash;Shows errors when the form control is `invalid` and `touched` or `dirty`.
   * * `always`&mdash;Always shows errors.
   *
   * @default 'initial'
   */
  showErrors = "initial";
  /**
   * Defines the colspan for the form field.
   * Can be a number or an array of responsive breakpoints.
   */
  colSpan;
  /**
   * @hidden
   */
  get horizontal() {
    return this.orientation === "horizontal";
  }
  /**
   * @hidden
   */
  get hasHints() {
    return this.showHints === "always" ? true : this.showHintsInitial();
  }
  /**
   * @hidden
   */
  get hasErrors() {
    return this.showErrors === "always" ? true : this.showErrorsInitial();
  }
  control;
  subscriptions = new Subscription();
  rtl = false;
  _formWidth = null;
  _colSpanClass = null;
  _previousColSpan = null;
  constructor(renderer, localizationService, hostElement, formService) {
    this.renderer = renderer;
    this.localizationService = localizationService;
    this.hostElement = hostElement;
    this.formService = formService;
    A(packageMetadata);
    this.subscriptions.add(this.localizationService.changes.subscribe(({
      rtl
    }) => {
      this.rtl = rtl;
      this.direction = this.rtl ? "rtl" : "ltr";
    }));
    this.subscriptions.add(this.formService.formWidth.pipe(filter((width) => width !== null)).subscribe((width) => {
      this._formWidth = width;
      this.updateColSpanClass();
    }));
  }
  ngAfterViewInit() {
    this.setDescription();
  }
  ngAfterViewChecked() {
    this.updateDescription();
  }
  ngOnChanges(changes) {
    if (changes["colSpan"]) {
      this.updateColSpanClass();
    }
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  disabledKendoInput() {
    return this.kendoInput && this.kendoInput.disabled;
  }
  disabledControl() {
    return this.control.disabled;
  }
  disabledElement() {
    const elements = this.controlElementRefs.toArray();
    return elements.every((e) => e.nativeElement.hasAttribute("disabled"));
  }
  validateFormControl(formControls) {
    if (isDevMode() && formControls.length !== 1 && !this.isControlGroup(formControls)) {
      throw new Error("The `kendo-formfield` component should contain only one control of type NgControl with a formControlName(https://angular.io/api/forms/FormControlName)or an ngModel(https://angular.io/api/forms/NgModel) binding.");
    }
  }
  isControlGroup(formControls) {
    if (!formControls.length) {
      return false;
    }
    const name = formControls.first.name;
    return formControls.toArray().every((c) => c.name === name && this.isRadioControl(c));
  }
  isRadioControl(control) {
    return control.valueAccessor instanceof RadioControlValueAccessor;
  }
  updateDescription() {
    const controls = this.findControlElements().filter((c) => !!c);
    if (!controls) {
      return;
    }
    controls.forEach((control) => {
      if (this.errorChildren.length > 0 || this.hintChildren.length > 0) {
        const ariaIds = this.generateDescriptionIds(control);
        if (ariaIds !== "") {
          this.renderer.setAttribute(control, "aria-describedby", ariaIds);
        } else {
          this.renderer.removeAttribute(control, "aria-describedby");
        }
      }
    });
  }
  findControlElements() {
    if (!this.controlElementRefs) {
      return;
    }
    if (this.kendoInput && this.kendoInput.focusableId && isDocumentAvailable()) {
      const isEditor = this.kendoInput.focusableId.startsWith("k-editor");
      return isEditor ? [this.kendoInput.viewMountElement] : [this.hostElement.nativeElement.querySelector(`#${this.kendoInput.focusableId}`)];
    }
    return this.controlElementRefs.map((el) => el.nativeElement);
  }
  generateDescriptionIds(control) {
    const ids = /* @__PURE__ */ new Set();
    let errorAttribute = "";
    if (control.hasAttribute("aria-describedby")) {
      const attributes = control.getAttribute("aria-describedby").split(" ");
      errorAttribute = attributes.filter((attr) => attr.includes("kendo-error-"))[0];
      attributes.forEach((attr) => {
        if (attr.includes("kendo-hint-") || attr.includes("kendo-error-")) {
          return;
        }
        ids.add(attr);
      });
    }
    this.hintChildren.forEach((hint) => {
      ids.add(hint.id);
    });
    if (this.hasErrors) {
      this.errorChildren.forEach((error) => {
        ids.add(error.id);
      });
    } else {
      ids.delete(errorAttribute);
    }
    return Array.from(ids).join(" ");
  }
  showHintsInitial() {
    if (!this.control) {
      return true;
    }
    const {
      valid,
      untouched,
      pristine
    } = this.control;
    return valid || untouched && pristine;
  }
  showErrorsInitial() {
    if (!this.control) {
      return false;
    }
    const {
      invalid,
      dirty,
      touched
    } = this.control;
    return invalid && (dirty || touched);
  }
  setDescription() {
    this.updateDescription();
    this.subscriptions.add(this.errorChildren.changes.subscribe(() => this.updateDescription()));
    this.subscriptions.add(this.hintChildren.changes.subscribe(() => this.updateDescription()));
  }
  updateColSpanClass() {
    const hostElement = this.hostElement.nativeElement;
    const newColSpan = calculateColSpan(this.colSpan, this._formWidth);
    if (newColSpan !== this._previousColSpan) {
      const newClass = generateColSpanClass(newColSpan);
      if (this._colSpanClass) {
        this.renderer.removeClass(hostElement, this._colSpanClass);
      }
      if (newClass) {
        this.renderer.addClass(hostElement, newClass);
      }
      this._colSpanClass = newClass;
      this._previousColSpan = newColSpan;
    }
  }
  static ɵfac = function FormFieldComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormFieldComponent)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(FormService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _FormFieldComponent,
    selectors: [["kendo-formfield"]],
    contentQueries: function FormFieldComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, KendoInput, 7);
        ɵɵcontentQuery(dirIndex, NgControl, 5);
        ɵɵcontentQuery(dirIndex, NgControl, 5, ElementRef);
        ɵɵcontentQuery(dirIndex, ErrorComponent, 5);
        ɵɵcontentQuery(dirIndex, HintComponent, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.kendoInput = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.formControls = _t);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.controlElementRefs = _t);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.errorChildren = _t);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.hintChildren = _t);
      }
    },
    hostVars: 7,
    hostBindings: function FormFieldComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("dir", ctx.direction);
        ɵɵclassProp("k-form-field", ctx.hostClass)("k-form-field-error", ctx.errorClass)("k-form-field-disabled", ctx.disabledClass);
      }
    },
    inputs: {
      showHints: "showHints",
      orientation: "orientation",
      showErrors: "showErrors",
      colSpan: "colSpan"
    },
    standalone: true,
    features: [ɵɵProvidersFeature([LocalizationService, {
      provide: L10N_PREFIX,
      useValue: "kendo.formfield"
    }]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    ngContentSelectors: _c60,
    decls: 5,
    vars: 2,
    consts: [[1, "k-form-field-wrap"]],
    template: function FormFieldComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef(_c59);
        ɵɵprojection(0);
        ɵɵelementStart(1, "div", 0);
        ɵɵprojection(2, 1);
        ɵɵtemplate(3, FormFieldComponent_Conditional_3_Template, 1, 0)(4, FormFieldComponent_Conditional_4_Template, 1, 0);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵadvance(3);
        ɵɵconditional(ctx.hasHints ? 3 : -1);
        ɵɵadvance();
        ɵɵconditional(ctx.hasErrors ? 4 : -1);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormFieldComponent, [{
    type: Component,
    args: [{
      selector: "kendo-formfield",
      template: `
        <ng-content select="label, kendo-label"></ng-content>
        <div class="k-form-field-wrap">
          <ng-content></ng-content>
          @if (hasHints) {
            <ng-content select="kendo-formhint"></ng-content>
          }
          @if (hasErrors) {
            <ng-content select="kendo-formerror"></ng-content>
          }
        </div>
        `,
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.formfield"
      }],
      standalone: true,
      imports: []
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: LocalizationService
  }, {
    type: ElementRef
  }, {
    type: FormService
  }], {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-form-field"]
    }],
    direction: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    errorClass: [{
      type: HostBinding,
      args: ["class.k-form-field-error"]
    }],
    disabledClass: [{
      type: HostBinding,
      args: ["class.k-form-field-disabled"]
    }],
    formControls: [{
      type: ContentChildren,
      args: [NgControl, {
        descendants: true
      }]
    }],
    controlElementRefs: [{
      type: ContentChildren,
      args: [NgControl, {
        read: ElementRef,
        descendants: true
      }]
    }],
    kendoInput: [{
      type: ContentChild,
      args: [KendoInput, {
        static: true
      }]
    }],
    errorChildren: [{
      type: ContentChildren,
      args: [ErrorComponent, {
        descendants: true
      }]
    }],
    hintChildren: [{
      type: ContentChildren,
      args: [HintComponent, {
        descendants: true
      }]
    }],
    showHints: [{
      type: Input
    }],
    orientation: [{
      type: Input
    }],
    showErrors: [{
      type: Input
    }],
    colSpan: [{
      type: Input
    }]
  });
})();
var RadioButtonComponent = class _RadioButtonComponent extends RadioCheckBoxBase {
  renderer;
  hostElement;
  cdr;
  ngZone;
  injector;
  localizationService;
  hostClass = true;
  direction;
  /**
   * Specifies the checked state of the RadioButton.
   *
   * @default false
   */
  checked = false;
  /**
   * Fires when the checked state changes.
   * The event does not fire when you change the state through `ngModel` or `formControl` bindings.
   * Use this event for two-way binding of the `checked` property.
   */
  checkedChange = new EventEmitter();
  subs = new Subscription();
  get defaultAttributes() {
    return {
      type: "radio",
      id: this.focusableId,
      title: this.title,
      tabindex: this.tabindex,
      tabIndex: this.tabindex,
      disabled: this.disabled ? "" : null,
      value: this.value,
      checked: this.checked,
      name: this.name,
      "aria-invalid": this.isControlInvalid
    };
  }
  constructor(renderer, hostElement, cdr, ngZone, injector, localizationService) {
    super("radio", hostElement, renderer, cdr, ngZone, injector);
    this.renderer = renderer;
    this.hostElement = hostElement;
    this.cdr = cdr;
    this.ngZone = ngZone;
    this.injector = injector;
    this.localizationService = localizationService;
    A(packageMetadata);
    this.direction = localizationService.rtl ? "rtl" : "ltr";
  }
  ngOnInit() {
    super.ngOnInit();
    this.subs.add(this.localizationService.changes.subscribe(({
      rtl
    }) => {
      this.direction = rtl ? "rtl" : "ltr";
    }));
  }
  ngAfterViewInit() {
    const stylingInputs = ["size"];
    stylingInputs.forEach((input) => {
      this.handleClasses(this[input], input);
    });
    if (this.control) {
      this.subs.add(this.control.valueChanges.subscribe((e) => {
        this.control.control.setValue(e, {
          emitEvent: false
        });
      }));
    }
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
  /**
   * @hidden
   */
  handleChange = ($event) => {
    this.ngZone.run(() => {
      this.checked = $event.target.checked;
      this.checkedChange.emit(this.checked);
      this.ngChange($event.target.value);
    });
  };
  /**
   * @hidden
   */
  writeValue(value) {
    this.checked = value === this.value;
    this.cdr.markForCheck();
  }
  static ɵfac = function RadioButtonComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RadioButtonComponent)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(LocalizationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _RadioButtonComponent,
    selectors: [["kendo-radiobutton"]],
    hostVars: 3,
    hostBindings: function RadioButtonComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("dir", ctx.direction);
        ɵɵclassProp("k-radio-wrap", ctx.hostClass);
      }
    },
    inputs: {
      checked: "checked"
    },
    outputs: {
      checkedChange: "checkedChange"
    },
    exportAs: ["kendoRadioButton"],
    standalone: true,
    features: [ɵɵProvidersFeature([LocalizationService, {
      provide: L10N_PREFIX,
      useValue: "kendo.radiobutton"
    }, {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _RadioButtonComponent),
      multi: true
    }, {
      provide: KendoInput,
      useExisting: forwardRef(() => _RadioButtonComponent)
    }]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 3,
    vars: 21,
    consts: [["input", ""], ["kendoInputSharedEvents", "", 3, "isFocusedChange", "handleBlur", "onFocus", "hostElement", "isFocused"], ["type", "radio", 1, "k-radio", 3, "id", "disabled", "value", "name", "checked", "kendoEventsOutsideAngular"]],
    template: function RadioButtonComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵelementContainerStart(0, 1);
        ɵɵtwoWayListener("isFocusedChange", function RadioButtonComponent_Template_ng_container_isFocusedChange_0_listener($event) {
          ɵɵrestoreView(_r1);
          ɵɵtwoWayBindingSet(ctx.isFocused, $event) || (ctx.isFocused = $event);
          return ɵɵresetView($event);
        });
        ɵɵlistener("handleBlur", function RadioButtonComponent_Template_ng_container_handleBlur_0_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.handleBlur());
        })("onFocus", function RadioButtonComponent_Template_ng_container_onFocus_0_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.handleFocus());
        });
        ɵɵelement(1, "input", 2, 0);
        ɵɵelementContainerEnd();
      }
      if (rf & 2) {
        ɵɵproperty("hostElement", ctx.hostElement);
        ɵɵtwoWayProperty("isFocused", ctx.isFocused);
        ɵɵadvance();
        ɵɵclassProp("k-disabled", ctx.disabled)("k-checked", ctx.checked)("k-invalid", ctx.isControlInvalid);
        ɵɵproperty("id", ctx.focusableId)("disabled", ctx.disabled)("value", ctx.value)("name", ctx.name)("checked", ctx.checked)("kendoEventsOutsideAngular", ɵɵpureFunction2(18, _c19, ctx.handleInputBlur, ctx.handleChange));
        ɵɵattribute("title", ctx.title)("tabindex", ctx.disabled ? void 0 : ctx.tabindex)("aria-invalid", ctx.isControlInvalid)("required", ctx.isControlRequired ? "" : null);
      }
    },
    dependencies: [SharedInputEventsDirective, EventsOutsideAngularDirective],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioButtonComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoRadioButton",
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.radiobutton"
      }, {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => RadioButtonComponent),
        multi: true
      }, {
        provide: KendoInput,
        useExisting: forwardRef(() => RadioButtonComponent)
      }],
      selector: "kendo-radiobutton",
      template: `
        <ng-container
            kendoInputSharedEvents
            [hostElement]="hostElement"
            [(isFocused)]="isFocused"
            (handleBlur)="handleBlur()"
            (onFocus)="handleFocus()"
        >
            <input #input
                type="radio"
                class="k-radio"
                [id]="focusableId"
                [attr.title]="title"
                [disabled]="disabled"
                [class.k-disabled]="disabled"
                [attr.tabindex]="disabled ? undefined : tabindex"
                [value]="value"
                [name]="name"
                [checked]="checked"
                [class.k-checked]="checked"
                [attr.aria-invalid]="isControlInvalid"
                [class.k-invalid]="isControlInvalid"
                [attr.required]="isControlRequired ? '' : null"
                [kendoEventsOutsideAngular]="{
                    blur: handleInputBlur,
                    change: handleChange
                }"
            />
        </ng-container>
    `,
      standalone: true,
      imports: [SharedInputEventsDirective, EventsOutsideAngularDirective]
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }, {
    type: NgZone
  }, {
    type: Injector
  }, {
    type: LocalizationService
  }], {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-radio-wrap"]
    }],
    direction: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    checked: [{
      type: Input
    }],
    checkedChange: [{
      type: Output
    }]
  });
})();
var DEFAULT_SIZE$3 = "medium";
var RadioButtonDirective = class _RadioButtonDirective {
  renderer;
  hostElement;
  kendoClass = true;
  get isDisabled() {
    return this.hostElement.nativeElement.disabled;
  }
  /**
   * Specifies the `size` of the RadioButton. The `size` property changes the width and height of the RadioButton ([see example]({% slug appearance_radiobuttondirective %}#toc-size)).
   *
   * @default "medium"
   */
  set size(size) {
    const newSize = size ? size : DEFAULT_SIZE$3;
    this.handleClasses(newSize, "size");
    this._size = newSize;
  }
  get size() {
    return this._size;
  }
  _size = "medium";
  constructor(renderer, hostElement) {
    this.renderer = renderer;
    this.hostElement = hostElement;
    A(packageMetadata);
  }
  ngAfterViewInit() {
    const stylingInputs = ["size"];
    stylingInputs.forEach((input) => {
      this.handleClasses(this[input], input);
    });
  }
  handleClasses(value, input) {
    const elem = this.hostElement.nativeElement;
    const classes = getStylingClasses("radio", input, this[input], value);
    if (classes.toRemove) {
      this.renderer.removeClass(elem, classes.toRemove);
    }
    if (classes.toAdd) {
      this.renderer.addClass(elem, classes.toAdd);
    }
  }
  static ɵfac = function RadioButtonDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RadioButtonDirective)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _RadioButtonDirective,
    selectors: [["input", "kendoRadioButton", ""]],
    hostVars: 4,
    hostBindings: function RadioButtonDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("k-radio", ctx.kendoClass)("k-disabled", ctx.isDisabled);
      }
    },
    inputs: {
      size: "size"
    },
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioButtonDirective, [{
    type: Directive,
    args: [{
      selector: "input[kendoRadioButton]",
      standalone: true
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }], {
    kendoClass: [{
      type: HostBinding,
      args: ["class.k-radio"]
    }],
    isDisabled: [{
      type: HostBinding,
      args: ["class.k-disabled"]
    }],
    size: [{
      type: Input
    }]
  });
})();
var RangeSliderCustomMessagesComponent = class _RangeSliderCustomMessagesComponent extends RangeSliderMessages {
  service;
  constructor(service) {
    super();
    this.service = service;
  }
  get override() {
    return true;
  }
  static ɵfac = function RangeSliderCustomMessagesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RangeSliderCustomMessagesComponent)(ɵɵdirectiveInject(LocalizationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _RangeSliderCustomMessagesComponent,
    selectors: [["kendo-rangeslider-messages"]],
    standalone: true,
    features: [ɵɵProvidersFeature([{
      provide: RangeSliderMessages,
      useExisting: forwardRef(() => _RangeSliderCustomMessagesComponent)
    }]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function RangeSliderCustomMessagesComponent_Template(rf, ctx) {
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RangeSliderCustomMessagesComponent, [{
    type: Component,
    args: [{
      providers: [{
        provide: RangeSliderMessages,
        useExisting: forwardRef(() => RangeSliderCustomMessagesComponent)
      }],
      selector: "kendo-rangeslider-messages",
      template: ``,
      standalone: true
    }]
  }], () => [{
    type: LocalizationService
  }], null);
})();
var RatingHoveredItemTemplateDirective = class _RatingHoveredItemTemplateDirective {
  templateRef;
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static ɵfac = function RatingHoveredItemTemplateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RatingHoveredItemTemplateDirective)(ɵɵdirectiveInject(TemplateRef));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _RatingHoveredItemTemplateDirective,
    selectors: [["", "kendoRatingHoveredItemTemplate", ""]],
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RatingHoveredItemTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoRatingHoveredItemTemplate]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var RatingItemTemplateDirective = class _RatingItemTemplateDirective {
  templateRef;
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static ɵfac = function RatingItemTemplateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RatingItemTemplateDirective)(ɵɵdirectiveInject(TemplateRef));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _RatingItemTemplateDirective,
    selectors: [["", "kendoRatingItemTemplate", ""]],
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RatingItemTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoRatingItemTemplate]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var RatingSelectedItemTemplateDirective = class _RatingSelectedItemTemplateDirective {
  templateRef;
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static ɵfac = function RatingSelectedItemTemplateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RatingSelectedItemTemplateDirective)(ɵɵdirectiveInject(TemplateRef));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _RatingSelectedItemTemplateDirective,
    selectors: [["", "kendoRatingSelectedItemTemplate", ""]],
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RatingSelectedItemTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoRatingSelectedItemTemplate]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var RatingComponent = class _RatingComponent {
  element;
  renderer;
  localizationService;
  cdr;
  zone;
  itemTemplate;
  hoveredItemTemplate;
  selectedItemTemplate;
  /**
   * When `true`, disables the Rating ([see example]({% slug disabledstate_rating %})).
    * To disable the component in reactive forms, see [Forms Support](slug:formssupport_rating#toc-managing-the-rating-disabled-state-in-reactive-forms).
   *
   * @default false
   */
  disabled = false;
  /**
   * When `true`, sets the Rating to read-only ([see example]({% slug readonly_rating %})).
    *
   * @default false
   */
  readonly = false;
  /**
   * Sets the [`tabindex`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) of the Rating.
    *
   * @default 0
   */
  tabindex = 0;
  /**
   * Sets the number of Rating items ([see example]({% slug itemscount_rating %})).
   *
   * @default 5
   */
  itemsCount = 5;
  /**
   * Sets the initial value of the Rating component.
   * Use either `ngModel` or the `value` binding, but not both at the same time.
   */
  set value(value) {
    this._value = value;
    this.updateRatingItems();
  }
  get value() {
    return this._value;
  }
  /**
   * Sets the selection mode of the Rating ([see example]({% slug selection_rating %})).
   *
   * @default 'continuous'
   */
  set selection(selection) {
    this._selection = selection;
    this.updateRatingItems();
  }
  get selection() {
    return this._selection;
  }
  /**
   * Sets the precision of the Rating ([see example]({% slug precision_rating %})).
   *
   * @default 'item'
   */
  set precision(precision) {
    this._precision = precision;
    this.updateRatingItems();
  }
  get precision() {
    return this._precision;
  }
  /**
   * Sets the label text for the Rating. The text renders in a `<span>` element ([see example]({% slug label_rating %})).
   */
  label;
  /**
   * Sets a custom font icon for the Rating items ([see example]({% slug icon_rating %})).
   */
  icon;
  /**
   * Sets a custom SVG icon for the selected or hovered state of the Rating items ([see example]({% slug icon_rating %})).
   */
  svgIcon = starIcon;
  /**
   * Sets a custom SVG icon for the default state of the Rating items when not hovered or selected ([see example]({% slug icon_rating %})).
   */
  svgIconOutline = starOutlineIcon;
  /**
   * Fires when the user selects a new value.
   */
  valueChange = new EventEmitter();
  hostClass = true;
  direction;
  get isControlInvalid() {
    return this.control?.invalid?.toString();
  }
  valueMin = 0;
  get valueMax() {
    return this.itemsCount;
  }
  get valueNow() {
    return this.value;
  }
  ariaRole = "slider";
  /**
   * @hidden
   */
  ratingItems = [];
  control;
  ngChange = (_) => {
  };
  ngTouched = () => {
  };
  rect;
  _value;
  _selection = "continuous";
  _precision = "item";
  subscriptions = new Subscription();
  constructor(element, renderer, localizationService, cdr, zone) {
    this.element = element;
    this.renderer = renderer;
    this.localizationService = localizationService;
    this.cdr = cdr;
    this.zone = zone;
    A(packageMetadata);
  }
  ngOnInit() {
    this.subscriptions.add(this.localizationService.changes.subscribe(({
      rtl
    }) => {
      this.direction = rtl ? "rtl" : "ltr";
    }));
    this.subscriptions.add(this.renderer.listen(this.element.nativeElement, "blur", () => this.ngTouched()));
    this.subscriptions.add(this.renderer.listen(this.element.nativeElement, "keydown", (event) => this.onKeyDown(event)));
    this.createRatingItems();
  }
  ngAfterViewInit() {
    const items = this.element.nativeElement.querySelectorAll(".k-rating-item");
    this.zone.runOutsideAngular(() => {
      items.forEach((item, index) => this.subscriptions.add(this.renderer.listen(item, "mousemove", (event) => this.onMouseMove(index, event))));
    });
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  /**
   * Focuses the Rating component.
   */
  focus() {
    if (isDocumentAvailable() && !this.disabled) {
      this.element.nativeElement.focus();
    }
  }
  /**
   * Blurs the Rating component.
   */
  blur() {
    if (isDocumentAvailable()) {
      this.element.nativeElement.blur();
    }
  }
  /**
   * @hidden
   */
  createRatingItems() {
    for (let i = 0; i < this.itemsCount; i++) {
      const item = {
        title: this.isHalf(i, this.value) ? String(i + 0.5) : String(i + 1),
        selected: this.isSelected(i, this.value),
        selectedIndicator: false,
        hovered: false,
        half: this.isHalf(i, this.value)
      };
      this.ratingItems.push(item);
    }
  }
  /**
   * @hidden
   */
  onMouseEnter(event) {
    this.rect = event.target.getBoundingClientRect();
  }
  /**
   * @hidden
   */
  onMouseMove(value, event) {
    const halfPrecision = this.precision === "half";
    const isFirstHalf = halfPrecision && this.isFirstHalf(this.rect, event.clientX);
    this.zone.run(() => this.ratingItems.forEach((item, index) => {
      item.title = halfPrecision && value === index && isFirstHalf ? String(index + 0.5) : String(index + 1);
      item.selected = item.hovered = this.isSelected(index, value + 1);
      item.selectedIndicator = this.isSelected(index, this.value);
      item.half = halfPrecision && value === index ? isFirstHalf : false;
    }));
  }
  /**
   * @hidden
   */
  onMouseOut() {
    this.rect = null;
    this.updateRatingItems();
  }
  /**
   * @hidden
   * Called when the status of the component changes to or from `disabled`.
   * Depending on the value, it enables or disables the appropriate DOM element.
   *
   * @param isDisabled
   */
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
    this.cdr.markForCheck();
  }
  /**
   * @hidden
   */
  changeValue(index, event) {
    const rect = event.target.getBoundingClientRect();
    const isFirstHalf = this.isFirstHalf(rect, event.clientX);
    const value = this.precision === "half" && isFirstHalf ? index + 0.5 : index + 1;
    if (!areSame(this.value, value)) {
      this.value = value;
      this.ngChange(this.value);
      this.valueChange.emit(this.value);
      this.updateRatingItems();
      this.cdr.markForCheck();
    }
  }
  /**
   * @hidden
   */
  updateRatingItems() {
    this.ratingItems.forEach((item, index) => {
      item.title = this.isHalf(index, this.value) ? String(index + 0.5) : String(index + 1);
      item.selected = this.isSelected(index, this.value);
      item.selectedIndicator = this.isSelected(index, this.value);
      item.hovered = false;
      item.half = this.isHalf(index, this.value);
    });
  }
  /**
   * @hidden
   */
  writeValue(value) {
    this.value = value;
    this.updateRatingItems();
    this.cdr.markForCheck();
  }
  /**
   * @hidden
   */
  registerOnChange(fn) {
    this.ngChange = fn;
  }
  /**
   * @hidden
   */
  registerOnTouched(fn) {
    this.ngTouched = fn;
  }
  isSelected(index, value) {
    return this.selection === "single" ? index === Math.ceil(value - 1) : index <= Math.ceil(value - 1);
  }
  isHalf(index, value) {
    return this.precision === "half" && value > index && value < index + 1;
  }
  isFirstHalf(rect, clientX) {
    const elementPosition = rect.x + rect.width / 2;
    return this.direction === "ltr" ? clientX < elementPosition : clientX > elementPosition;
  }
  onKeyDown(event) {
    const decreaseValue = () => {
      if (this.value <= 0) {
        return;
      }
      this.value = this.precision === "half" ? this.value - 0.5 : this.value - 1;
      this.ngChange(this.value);
      this.valueChange.emit(this.value);
      this.updateRatingItems();
      this.cdr.markForCheck();
    };
    const increaseValue = () => {
      if (this.value >= this.itemsCount) {
        return;
      }
      this.value = this.precision === "half" ? this.value + 0.5 : this.value + 1;
      this.ngChange(this.value);
      this.valueChange.emit(this.value);
      this.updateRatingItems();
      this.cdr.markForCheck();
    };
    const setMinValue = () => {
      if (!areSame(this.value, this.valueMin)) {
        this.value = this.valueMin;
        this.ngChange(this.value);
        this.valueChange.emit(this.value);
        this.updateRatingItems();
        this.cdr.markForCheck();
      }
    };
    const setMaxValue = () => {
      if (!areSame(this.value, this.valueMax)) {
        this.value = this.valueMax;
        this.ngChange(this.value);
        this.valueChange.emit(this.value);
        this.updateRatingItems();
        this.cdr.markForCheck();
      }
    };
    const code = normalizeKeys(event);
    switch (code) {
      case Keys.ArrowDown:
        decreaseValue();
        break;
      case Keys.ArrowLeft:
        if (this.direction === "ltr") {
          decreaseValue();
        } else {
          increaseValue();
        }
        break;
      case Keys.ArrowUp:
        increaseValue();
        break;
      case Keys.ArrowRight:
        if (this.direction === "ltr") {
          increaseValue();
        } else {
          decreaseValue();
        }
        break;
      case Keys.Home:
        setMinValue();
        break;
      case Keys.End:
        setMaxValue();
        break;
      default:
        break;
    }
  }
  static ɵfac = function RatingComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RatingComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _RatingComponent,
    selectors: [["kendo-rating"]],
    contentQueries: function RatingComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, RatingItemTemplateDirective, 5);
        ɵɵcontentQuery(dirIndex, RatingHoveredItemTemplateDirective, 5);
        ɵɵcontentQuery(dirIndex, RatingSelectedItemTemplateDirective, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.itemTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.hoveredItemTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.selectedItemTemplate = _t.first);
      }
    },
    hostVars: 15,
    hostBindings: function RatingComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("aria-disabled", ctx.disabled)("aria-readonly", ctx.readonly)("tabindex", ctx.tabindex)("dir", ctx.direction)("aria-invalid", ctx.isControlInvalid)("aria-valuemin", ctx.valueMin)("aria-valuemax", ctx.valueMax)("aria-valuenow", ctx.valueNow)("role", ctx.ariaRole);
        ɵɵclassProp("k-disabled", ctx.disabled)("k-readonly", ctx.readonly)("k-rating", ctx.hostClass);
      }
    },
    inputs: {
      disabled: "disabled",
      readonly: "readonly",
      tabindex: "tabindex",
      itemsCount: "itemsCount",
      value: "value",
      selection: "selection",
      precision: "precision",
      label: "label",
      icon: "icon",
      svgIcon: "svgIcon",
      svgIconOutline: "svgIconOutline"
    },
    outputs: {
      valueChange: "valueChange"
    },
    exportAs: ["kendoRating"],
    standalone: true,
    features: [ɵɵProvidersFeature([LocalizationService, {
      provide: L10N_PREFIX,
      useValue: "kendo.rating"
    }, {
      multi: true,
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _RatingComponent)
      /* eslint-disable-line*/
    }, {
      provide: KendoInput,
      useExisting: forwardRef(() => _RatingComponent)
    }]), ɵɵStandaloneFeature],
    decls: 4,
    vars: 1,
    consts: [[1, "k-rating-container"], [1, "k-rating-item", 3, "title", "ngClass"], [1, "k-rating-label"], [1, "k-rating-item", 3, "mouseenter", "mouseout", "click", "title", "ngClass"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["size", "xlarge", 3, "name", "svgIcon"], ["size", "xlarge", 3, "name"], [1, "k-rating-precision-complement"], [1, "k-rating-precision-part", 3, "ngStyle"]],
    template: function RatingComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "span", 0);
        ɵɵrepeaterCreate(1, RatingComponent_For_2_Template, 3, 7, "span", 1, ɵɵrepeaterTrackByIdentity);
        ɵɵelementEnd();
        ɵɵtemplate(3, RatingComponent_Conditional_3_Template, 2, 1, "span", 2);
      }
      if (rf & 2) {
        ɵɵadvance();
        ɵɵrepeater(ctx.ratingItems);
        ɵɵadvance(2);
        ɵɵconditional(ctx.label ? 3 : -1);
      }
    },
    dependencies: [NgClass, IconWrapperComponent, NgTemplateOutlet, NgStyle],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RatingComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoRating",
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.rating"
      }, {
        multi: true,
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => RatingComponent)
        /* eslint-disable-line*/
      }, {
        provide: KendoInput,
        useExisting: forwardRef(() => RatingComponent)
      }],
      selector: "kendo-rating",
      template: `
        <span class="k-rating-container">
          @for (item of ratingItems; track item; let i = $index) {
            <span
              class="k-rating-item"
              [title]="item.title"
                [ngClass]="{
                    'k-selected': item.selected || item.selectedIndicator,
                    'k-hover': item.hovered
                }"
              (mouseenter)="onMouseEnter($event)"
              (mouseout)="onMouseOut()"
              (click)="changeValue(i, $event)"
              >
              @if (!item.half) {
                @if (!itemTemplate) {
                  @if (!icon) {
                    <kendo-icon-wrapper
                      size="xlarge"
                      [name]="item.selected || item.hovered ? 'star' : 'star-outline'"
                      [svgIcon]="item.selected || item.hovered ? svgIcon : svgIconOutline"
                      >
                    </kendo-icon-wrapper>
                  }
                  @if (icon) {
                    <kendo-icon-wrapper
                      size="xlarge"
                      [name]="item.selected || item.hovered ? icon : icon + '-outline'"
                      >
                    </kendo-icon-wrapper>
                  }
                }
                @if (itemTemplate && (!item.selected && !item.hovered)) {
                  <ng-template
                    [ngTemplateOutlet]="itemTemplate?.templateRef"
                    [ngTemplateOutletContext]="{index: i}"
                    >
                  </ng-template>
                }
                @if (hoveredItemTemplate && item.hovered) {
                  <ng-template
                    [ngTemplateOutlet]="hoveredItemTemplate?.templateRef"
                    [ngTemplateOutletContext]="{index: i}"
                    >
                  </ng-template>
                }
                @if (selectedItemTemplate && (item.selected && !item.hovered)) {
                  <ng-template
                    [ngTemplateOutlet]="selectedItemTemplate?.templateRef"
                    [ngTemplateOutletContext]="{index: i}"
                    >
                  </ng-template>
                }
              }
              @if (item.half) {
                @if (!itemTemplate) {
                  <span class="k-rating-precision-complement">
                    @if (!icon) {
                      <kendo-icon-wrapper
                        size="xlarge"
                        [name]="'star-outline'"
                        [svgIcon]="svgIconOutline"
                        >
                      </kendo-icon-wrapper>
                    }
                    @if (icon) {
                      <kendo-icon-wrapper
                        size="xlarge"
                        [name]="icon + '-outline'"
                        >
                      </kendo-icon-wrapper>
                    }
                  </span>
                  <span
                    class="k-rating-precision-part"
                    [ngStyle]="{'clipPath': direction === 'rtl' ? 'inset(0 0 0 50%)' : 'inset(0 50% 0 0)'}"
                    >
                    @if (!icon) {
                      <kendo-icon-wrapper
                        size="xlarge"
                        [name]="'star'"
                        [svgIcon]="svgIcon"
                        >
                      </kendo-icon-wrapper>
                    }
                    @if (icon) {
                      <kendo-icon-wrapper
                        size="xlarge"
                        [name]="icon"
                        >
                      </kendo-icon-wrapper>
                    }
                  </span>
                }
                <span
                  class="k-rating-precision-complement"
                  >
                  <ng-template
                    [ngTemplateOutlet]="itemTemplate?.templateRef"
                    [ngTemplateOutletContext]="{index: i}"
                    >
                  </ng-template>
                </span>
                @if (hoveredItemTemplate && item.hovered) {
                  <span
                    class="k-rating-precision-part"
                    [ngStyle]="{'clipPath': direction === 'rtl' ? 'inset(0 0 0 50%)' : 'inset(0 50% 0 0)'}"
                    >
                    <ng-template
                      [ngTemplateOutlet]="hoveredItemTemplate?.templateRef"
                      [ngTemplateOutletContext]="{index: i}"
                      >
                    </ng-template>
                  </span>
                }
                @if (selectedItemTemplate && (item.selected && !item.hovered)) {
                  <span
                    class="k-rating-precision-part"
                    [ngStyle]="{'clipPath': direction === 'rtl' ? 'inset(0 0 0 50%)' : 'inset(0 50% 0 0)'}"
                    >
                    <ng-template
                      [ngTemplateOutlet]="selectedItemTemplate?.templateRef"
                      [ngTemplateOutletContext]="{index: i}"
                      >
                    </ng-template>
                  </span>
                }
                <span [style.width.px]="24" [style.height.px]="24" [style.display]="'block'"></span>
              }
            </span>
          }
        </span>
        
        @if (label) {
          <span
            class="k-rating-label"
          >{{ label }}</span>
        }
        `,
      standalone: true,
      imports: [NgClass, IconWrapperComponent, NgTemplateOutlet, NgStyle]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: LocalizationService
  }, {
    type: ChangeDetectorRef
  }, {
    type: NgZone
  }], {
    itemTemplate: [{
      type: ContentChild,
      args: [RatingItemTemplateDirective]
    }],
    hoveredItemTemplate: [{
      type: ContentChild,
      args: [RatingHoveredItemTemplateDirective]
    }],
    selectedItemTemplate: [{
      type: ContentChild,
      args: [RatingSelectedItemTemplateDirective]
    }],
    disabled: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["attr.aria-disabled"]
    }, {
      type: HostBinding,
      args: ["class.k-disabled"]
    }],
    readonly: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["attr.aria-readonly"]
    }, {
      type: HostBinding,
      args: ["class.k-readonly"]
    }],
    tabindex: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["attr.tabindex"]
    }],
    itemsCount: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    selection: [{
      type: Input
    }],
    precision: [{
      type: Input
    }],
    label: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    svgIcon: [{
      type: Input
    }],
    svgIconOutline: [{
      type: Input
    }],
    valueChange: [{
      type: Output
    }],
    hostClass: [{
      type: HostBinding,
      args: ["class.k-rating"]
    }],
    direction: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    isControlInvalid: [{
      type: HostBinding,
      args: ["attr.aria-invalid"]
    }],
    valueMin: [{
      type: HostBinding,
      args: ["attr.aria-valuemin"]
    }],
    valueMax: [{
      type: HostBinding,
      args: ["attr.aria-valuemax"]
    }],
    valueNow: [{
      type: HostBinding,
      args: ["attr.aria-valuenow"]
    }],
    ariaRole: [{
      type: HostBinding,
      args: ["attr.role"]
    }]
  });
})();
var InputSpacerComponent = class _InputSpacerComponent {
  hostClass = true;
  get sizedClass() {
    return isPresent(this.width);
  }
  get flexBasisStyle() {
    return this.width;
  }
  /**
   * Specifies the width of the Input Spacer.
   * Accepts string values for the [CSS `flex-basis`](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis) property.
   * If not set, the Input Spacer takes all available space.
   */
  width;
  static ɵfac = function InputSpacerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InputSpacerComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _InputSpacerComponent,
    selectors: [["kendo-input-spacer"], ["kendo-textbox-spacer"]],
    hostVars: 6,
    hostBindings: function InputSpacerComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵstyleProp("flex-basis", ctx.flexBasisStyle);
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
    template: function InputSpacerComponent_Template(rf, ctx) {
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputSpacerComponent, [{
    type: Component,
    args: [{
      selector: "kendo-input-spacer, kendo-textbox-spacer",
      template: ``,
      standalone: true
    }]
  }], null, {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-spacer"]
    }],
    sizedClass: [{
      type: HostBinding,
      args: ["class.k-spacer-sized"]
    }],
    flexBasisStyle: [{
      type: HostBinding,
      args: ["style.flexBasis"]
    }],
    width: [{
      type: Input
    }]
  });
})();
var SignatureMessages = class _SignatureMessages extends ComponentMessages {
  /**
   * The title of the Clear button of the Signature.
   */
  clear;
  /**
   * The title of the Minimize button of the Signature.
   */
  minimize;
  /**
   * The title of the Maximize button of the Signature.
   */
  maximize;
  /**
   * The value of the Signature canvas element aria-label attribute.
   */
  canvasLabel;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵSignatureMessages_BaseFactory;
    return function SignatureMessages_Factory(__ngFactoryType__) {
      return (ɵSignatureMessages_BaseFactory || (ɵSignatureMessages_BaseFactory = ɵɵgetInheritedFactory(_SignatureMessages)))(__ngFactoryType__ || _SignatureMessages);
    };
  })();
  static ɵdir = ɵɵdefineDirective({
    type: _SignatureMessages,
    selectors: [["kendo-signature-messages-base"]],
    inputs: {
      clear: "clear",
      minimize: "minimize",
      maximize: "maximize",
      canvasLabel: "canvasLabel"
    },
    features: [ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignatureMessages, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "kendo-signature-messages-base"
    }]
  }], null, {
    clear: [{
      type: Input
    }],
    minimize: [{
      type: Input
    }],
    maximize: [{
      type: Input
    }],
    canvasLabel: [{
      type: Input
    }]
  });
})();
var SignatureCustomMessagesComponent = class _SignatureCustomMessagesComponent extends SignatureMessages {
  service;
  constructor(service) {
    super();
    this.service = service;
  }
  get override() {
    return true;
  }
  static ɵfac = function SignatureCustomMessagesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SignatureCustomMessagesComponent)(ɵɵdirectiveInject(LocalizationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _SignatureCustomMessagesComponent,
    selectors: [["kendo-signature-messages"]],
    standalone: true,
    features: [ɵɵProvidersFeature([{
      provide: SignatureMessages,
      useExisting: forwardRef(() => _SignatureCustomMessagesComponent)
    }]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function SignatureCustomMessagesComponent_Template(rf, ctx) {
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignatureCustomMessagesComponent, [{
    type: Component,
    args: [{
      providers: [{
        provide: SignatureMessages,
        useExisting: forwardRef(() => SignatureCustomMessagesComponent)
      }],
      selector: "kendo-signature-messages",
      template: ``,
      standalone: true
    }]
  }], () => [{
    type: LocalizationService
  }], null);
})();
var SignatureCloseEvent = class extends PreventableEvent {
};
var SignatureOpenEvent = class extends PreventableEvent {
};
var LocalizedSignatureMessagesDirective = class _LocalizedSignatureMessagesDirective extends SignatureMessages {
  service;
  constructor(service) {
    super();
    this.service = service;
  }
  static ɵfac = function LocalizedSignatureMessagesDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LocalizedSignatureMessagesDirective)(ɵɵdirectiveInject(LocalizationService));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _LocalizedSignatureMessagesDirective,
    selectors: [["", "kendoSignatureLocalizedMessages", ""]],
    standalone: true,
    features: [ɵɵProvidersFeature([{
      provide: SignatureMessages,
      useExisting: forwardRef(() => _LocalizedSignatureMessagesDirective)
    }]), ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LocalizedSignatureMessagesDirective, [{
    type: Directive,
    args: [{
      providers: [{
        provide: SignatureMessages,
        useExisting: forwardRef(() => LocalizedSignatureMessagesDirective)
      }],
      selector: "[kendoSignatureLocalizedMessages]",
      standalone: true
    }]
  }], () => [{
    type: LocalizationService
  }], null);
})();
var noop2 = () => {
};
var _id = 0;
var nextId = () => "k-signature-focusable-" + _id++;
var FOCUSED_CLASS = "k-focus";
var DEFAULT_SIZE$2 = "medium";
var DEFAULT_ROUNDED$2 = "medium";
var DEFAULT_FILL_MODE$2 = "solid";
var DEFAULT_POPUP_SCALE = 3;
var DEFAULT_EXPORT_SCALE2 = 2;
var DEFAULT_COLOR2 = "#000000";
var DEFAULT_BACKGROUND_COLOR2 = "#ffffff";
var iconsMap = {
  xIcon,
  hyperlinkOpenIcon
};
var SignatureComponent = class _SignatureComponent {
  element;
  renderer;
  ngZone;
  cd;
  localization;
  cdr;
  staticHostClasses = true;
  /**
   * @hidden
   */
  focusableId = nextId();
  direction;
  /**
   * Sets the read-only state of the Signature.
   *
   * Set to `true` to prevent editing.
   *
   * @default false
   */
  readonly = false;
  /**
   * Sets the disabled state of the Signature.
   *
   * Set to `true` to disable the component and prevent any user interaction.
   * To disable the component in reactive forms, see [Managing the Signature Disabled State in Reactive Forms](slug:formssupport_signature#toc-managing-the-signature-disabled-state-in-reactive-forms).
   *
   * @default false
   */
  disabled = false;
  /**
   * Sets the width of the Signature in pixels.
   *
   * You can also set the width using inline styles or CSS.
   */
  width;
  /**
   * Sets the height of the Signature in pixels.
   *
   * You can also set the height using inline styles or CSS.
   */
  height;
  /**
   * Gets or sets the value of the Signature.
   *
   * The value is a Base64-encoded PNG image.
   */
  set value(value) {
    if (value !== this._value) {
      this._value = value;
      if (this.instance) {
        this.instance.loadImage(value);
      }
    }
  }
  get value() {
    return this._value;
  }
  /**
   * @hidden
   */
  svgIcon(name) {
    return iconsMap[name];
  }
  /**
   * Specifies the [tabindex](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) of the component.
   *
   * @default 0
   */
  set tabindex(value) {
    const tabindex = Number(value);
    const defaultValue = 0;
    this._tabindex = !isNaN(tabindex) ? tabindex : defaultValue;
  }
  get tabindex() {
    return !this.disabled ? this._tabindex : void 0;
  }
  /**
   * Sets the padding of the Signature internal controls
   * ([ee example]({% slug appearance_signature %}#toc-size)).
   *
   * @default 'medium'
   */
  size = DEFAULT_SIZE$2;
  /**
   * Sets the border radius of the Signature
   * ([see example](slug:appearance_signature#rounded-corners)).
   *
   * @default 'medium'
   */
  rounded = DEFAULT_ROUNDED$2;
  /**
   * Sets the background and border styles of the Signature
   * ([see example](slug:appearance_signature#toc-fill-mode)).
   *
   * @default 'solid'
   */
  fillMode = DEFAULT_FILL_MODE$2;
  /**
   * Sets the stroke color of the Signature.
   *
   * Accepts CSS color names and hex values.
   * The default value is determined by the theme `$kendo-input-text` variable.
   */
  color;
  /**
   * Sets the background color of the Signature.
   *
   * Accepts CSS color names and hex values.
   * The default value is determined by the theme `$kendo-input-bg` variable.
   */
  backgroundColor;
  /**
   * Sets the stroke width of the Signature.
   *
   * @default 1
   */
  strokeWidth = 1;
  /**
   * When set to `true`, smooths out signature lines.
   *
   * @default false
   */
  smooth = false;
  /**
   * When set to `true`, allows the Signature to be maximized.
   *
   * @default true
   */
  maximizable = true;
  /**
   * @hidden
   */
  maximized = false;
  /**
   * Sets the scale factor for the popup.
   *
   * The Signature width and height are multiplied by this value when showing the popup.
   *
   * @default 3
   */
  popupScale = DEFAULT_POPUP_SCALE;
  /**
   * Sets the scale factor for the exported image.
   *
   * The Signature width and height are multiplied by this value when converting the signature to an image.
   *
   * @default 2
   */
  exportScale = DEFAULT_EXPORT_SCALE2;
  /**
   * @hidden
   */
  parentLocalization;
  /**
   * When set to `true`, hides the dotted line in the background.
   *
   * @default false
   */
  hideLine = false;
  /**
   * Fires when the signature value changes.
   */
  valueChange = new EventEmitter();
  /**
   * Fires before the popup opens.
   *
   * This event is preventable. If you cancel it, the popup stays closed.
   */
  open = new EventEmitter();
  /**
   * Fires before the popup closes.
   *
   * This event is preventable. If you cancel it, the popup stays open.
   */
  close = new EventEmitter();
  /**
   * Fires when the Signature receives focus.
   */
  onFocus = new EventEmitter();
  /**
   * Fires when the Signature loses focus.
   */
  onBlur = new EventEmitter();
  /**
   * @hidden
   */
  minimize = new EventEmitter();
  canvas;
  minimizeButton;
  maximizeButton;
  /**
   * Indicates if the Signature wrapper is focused.
   */
  isFocused = false;
  /**
   * Indicates if the Signature popup is open.
   */
  isOpen;
  /**
   * @hidden
   */
  get isEmpty() {
    return !this.value;
  }
  /**
   * @hidden
   */
  get canvasLabel() {
    return this.getMessage("canvasLabel");
  }
  /**
   * @hidden
   */
  get clearTitle() {
    return this.getMessage("clear");
  }
  /**
   * @hidden
   */
  get minimizeTitle() {
    return this.getMessage("minimize");
  }
  /**
   * @hidden
   */
  get maximizeTitle() {
    return this.getMessage("maximize");
  }
  /**
   * @hidden
   */
  get baseWidth() {
    return this.width || this.element.nativeElement.offsetWidth;
  }
  /**
   * @hidden
   */
  get baseHeight() {
    return this.height || this.element.nativeElement.offsetHeight;
  }
  /**
   * @hidden
   */
  get popupWidth() {
    return this.baseWidth * this.popupScale;
  }
  /**
   * @hidden
   */
  get popupHeight() {
    return this.baseHeight * this.popupScale;
  }
  /**
   * @hidden
   */
  isDrawing = false;
  /**
   * @hidden
   */
  get showMaximize() {
    return !(this.maximized || this.isDrawing || !this.maximizable || this.disabled);
  }
  /**
   * @hidden
   */
  get showMinimize() {
    return this.maximized && !this.isDrawing;
  }
  /**
   * @hidden
   */
  get showClear() {
    return !(this.isEmpty || this.isDrawing || this.readonly || this.disabled);
  }
  /**
   * @hidden
   */
  get focused() {
    return this.isFocused;
  }
  set focused(value) {
    if (this.isFocused !== value && this.element) {
      const wrap = this.element.nativeElement;
      if (value && !this.maximized) {
        this.renderer.addClass(wrap, FOCUSED_CLASS);
      } else {
        this.renderer.removeClass(wrap, FOCUSED_CLASS);
      }
      this.isFocused = value;
    }
  }
  get options() {
    return {
      scale: this.maximized ? this.popupScale : 1,
      color: this.color,
      backgroundColor: this.backgroundColor,
      strokeWidth: this.strokeWidth,
      smooth: this.smooth,
      readonly: this.readonly
    };
  }
  notifyNgTouched = noop2;
  notifyNgChanged = noop2;
  instance;
  _value;
  _tabindex = 0;
  subscriptions;
  unsubscribe;
  hostClasses = [];
  constructor(element, renderer, ngZone, cd, localization, cdr) {
    this.element = element;
    this.renderer = renderer;
    this.ngZone = ngZone;
    this.cd = cd;
    this.localization = localization;
    this.cdr = cdr;
    A(packageMetadata);
    this.direction = localization.rtl ? "rtl" : "ltr";
  }
  ngOnInit() {
    this.subscriptions = this.localization.changes.subscribe(({
      rtl
    }) => {
      this.direction = rtl ? "rtl" : "ltr";
    });
  }
  ngAfterViewInit() {
    if (!isDocumentAvailable()) {
      return;
    }
    this.applyHostClasses();
    this.ngZone.onStable.pipe(take(1)).subscribe(() => {
      this.readThemeColors();
      this.instance.setOptions(this.options);
    });
    this.ngZone.runOutsideAngular(() => {
      const element = this.canvas.nativeElement;
      this.instance = new SignaturePad(element, __spreadProps(__spreadValues({}, this.options), {
        onChange: () => this.onValueChange(),
        onDraw: () => this.onDraw(),
        onDrawEnd: () => this.onDrawEnd()
      }));
      if (this.value) {
        this.instance.loadImage(this.value);
      }
      if (this.maximized) {
        this.ngZone.onStable.pipe(take(1)).subscribe(() => {
          this.minimizeButton?.nativeElement.focus();
        });
      }
      this.addEventListeners();
    });
  }
  ngOnChanges(changes) {
    if (anyChanged(["readonly", "color", "backgroundColor", "strokeWidth", "smooth"], changes, true)) {
      this.instance.setOptions(this.options);
    }
    this.applyHostClasses();
  }
  ngOnDestroy() {
    if (this.instance) {
      this.instance.destroy();
      this.instance = null;
    }
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
      this.subscriptions = null;
    }
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
    }
  }
  /**
   * @hidden
   */
  onClear() {
    this.reset();
    this.valueChange.emit(void 0);
    this.canvas.nativeElement.focus();
  }
  /**
   * @hidden
   */
  onValueChange() {
    return __async(this, null, function* () {
      const value = yield this.instance.exportImage({
        width: this.baseWidth * this.exportScale,
        height: this.baseHeight * this.exportScale
      });
      this._value = value;
      this.cd.markForCheck();
      this.ngZone.run(() => {
        this.valueChange.emit(value);
        this.notifyNgChanged(value);
      });
    });
  }
  /**
   * @hidden
   */
  onDialogValueChange(value) {
    this.value = value;
    this.valueChange.emit(value);
    this.notifyNgTouched();
    this.notifyNgChanged(value);
  }
  /**
   * @hidden
   */
  onDialogClick(e) {
    if (e.target.classList.contains("k-overlay")) {
      this.isOpen = false;
      this.maximizeButton?.nativeElement.focus();
    }
  }
  /**
   * @hidden
   */
  onDialogKeydown(e) {
    if (e.code === Keys.Escape) {
      this.isOpen = false;
      this.cd.detectChanges();
      this.maximizeButton?.nativeElement.focus();
    }
  }
  /**
   * @hidden
   */
  onDialogClose() {
    const args = new SignatureCloseEvent();
    this.close.next(args);
    if (!args.isDefaultPrevented()) {
      this.isOpen = false;
      this.ngZone.onStable.pipe(take(1)).subscribe(() => {
        (this.maximizeButton || this.element)?.nativeElement?.focus();
      });
    }
  }
  /**
   * Clears the value of the Signature.
   */
  reset() {
    if (!isPresent2(this.value)) {
      return;
    }
    this.instance?.clear();
    this.value = this._value = void 0;
    this.notifyNgChanged(void 0);
  }
  /**
   * Toggles the popup of the Signature.
   *
   * Does not trigger the `open` and `close` events.
   *
   * @param open Optional. Set to `true` to open or `false` to close the popup.
   */
  toggle(open) {
    if (this.disabled || this.readonly) {
      return;
    }
    open = isPresent2(open) ? open : !this.isOpen;
    this.isOpen = open;
  }
  /**
   * @hidden
   */
  onMaximize() {
    return __async(this, null, function* () {
      const args = new SignatureOpenEvent();
      this.open.next(args);
      if (!args.isDefaultPrevented()) {
        this.popupValue = yield this.instance.exportImage({
          width: this.popupWidth * this.exportScale,
          height: this.popupHeight * this.exportScale
        });
        this.isOpen = true;
        this.cd.detectChanges();
      }
    });
  }
  /**
   * @hidden
   */
  onMinimize() {
    this.minimize.next();
  }
  applyHostClasses() {
    const classList = this.element.nativeElement.classList;
    this.hostClasses.forEach(([name]) => classList.remove(name));
    this.hostClasses = [[`k-signature-${SIZE_MAP[this.size || DEFAULT_SIZE$2]}`, !isNone(this.size)], [`k-input-${this.fillMode || DEFAULT_FILL_MODE$2}`, !isNone(this.fillMode)], [`k-rounded-${ROUNDED_MAP[this.rounded || DEFAULT_ROUNDED$2]}`, !isNone(this.rounded)]];
    this.hostClasses.forEach(([name, enabled]) => classList.toggle(name, enabled));
  }
  readThemeColors() {
    let defaultColor = DEFAULT_COLOR2;
    let defaultBackgroundColor = DEFAULT_BACKGROUND_COLOR2;
    if (isDocumentAvailable()) {
      const el = this.element.nativeElement;
      defaultColor = getComputedStyle(el).color;
      defaultBackgroundColor = getComputedStyle(el).backgroundColor;
    }
    this.color = this.color || defaultColor;
    this.backgroundColor = this.backgroundColor || defaultBackgroundColor;
  }
  /**
   * Focuses the Signature wrapper container.
   */
  focus() {
    this.focused = true;
    this.element.nativeElement.focus();
  }
  /**
   * @hidden
   */
  onWrapperFocus() {
    if (this.focused) {
      return;
    }
    this.ngZone.run(() => {
      this.focus();
      this.onFocus.emit();
    });
  }
  /**
   * Blurs the Signature.
   */
  blur() {
    this.focused = false;
    this.element.nativeElement.blur();
    this.notifyNgTouched();
  }
  /**
   * @hidden
   */
  onWrapperBlur() {
    if (this.isOpen) {
      return;
    }
    this.ngZone.run(() => {
      this.onBlur.emit();
      this.focused = false;
      this.notifyNgTouched();
    });
  }
  /**
   * @hidden
   */
  onWrapperClick(_event) {
    if (this.disabled) {
      return;
    }
    this.focus();
  }
  /**
   * @hidden
   */
  writeValue(value) {
    this.value = value;
    this.cd.markForCheck();
  }
  /**
   * @hidden
   */
  registerOnChange(fn) {
    this.notifyNgChanged = fn;
  }
  /**
   * @hidden
   */
  registerOnTouched(fn) {
    this.notifyNgTouched = fn;
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
  popupValue;
  onDraw() {
    this.isDrawing = true;
    this.cd.markForCheck();
  }
  onDrawEnd() {
    this.isDrawing = false;
    this.cd.markForCheck();
  }
  addEventListeners() {
    const element = this.element.nativeElement;
    const focusIn = this.renderer.listen(element, "focusin", () => this.onWrapperFocus());
    const focusOut = this.renderer.listen(element, "focusout", (e) => {
      const insideWrapper = closest(e.relatedTarget, (element2) => element2 === this.element.nativeElement);
      if (!insideWrapper) {
        this.onWrapperBlur();
      }
    });
    const click = this.renderer.listen(element, "click", () => {
      this.ngZone.run((e) => {
        this.onWrapperClick(e);
      });
    });
    this.unsubscribe = () => {
      focusIn();
      focusOut();
      click();
    };
  }
  getMessage(key) {
    if (this.maximized && this.parentLocalization) {
      return this.parentLocalization.get(key);
    }
    return this.localization.get(key);
  }
  static ɵfac = function SignatureComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SignatureComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(ChangeDetectorRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _SignatureComponent,
    selectors: [["kendo-signature"]],
    viewQuery: function SignatureComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c64, 5);
        ɵɵviewQuery(_c65, 5, ElementRef);
        ɵɵviewQuery(_c66, 5, ElementRef);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.canvas = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.minimizeButton = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.maximizeButton = _t.first);
      }
    },
    hostVars: 13,
    hostBindings: function SignatureComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("dir", ctx.direction);
        ɵɵstyleProp("width", ctx.width, "px")("height", ctx.height, "px");
        ɵɵclassProp("k-signature", ctx.staticHostClasses)("k-input", ctx.staticHostClasses)("k-readonly", ctx.readonly)("k-disabled", ctx.disabled);
      }
    },
    inputs: {
      focusableId: "focusableId",
      readonly: "readonly",
      disabled: "disabled",
      width: "width",
      height: "height",
      value: "value",
      tabindex: "tabindex",
      size: "size",
      rounded: "rounded",
      fillMode: "fillMode",
      color: "color",
      backgroundColor: "backgroundColor",
      strokeWidth: "strokeWidth",
      smooth: "smooth",
      maximizable: "maximizable",
      maximized: "maximized",
      popupScale: "popupScale",
      exportScale: "exportScale",
      parentLocalization: "parentLocalization",
      hideLine: "hideLine"
    },
    outputs: {
      valueChange: "valueChange",
      open: "open",
      close: "close",
      onFocus: "focus",
      onBlur: "blur",
      minimize: "minimize"
    },
    exportAs: ["kendoSignature"],
    standalone: true,
    features: [ɵɵProvidersFeature([LocalizationService, {
      provide: L10N_PREFIX,
      useValue: "kendo.signature"
    }, {
      multi: true,
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _SignatureComponent)
    }]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    decls: 10,
    vars: 8,
    consts: () => {
      let i18n_78;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_78 = goog.getMsg("Clear");
        i18n_78 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_78;
      } else {
        i18n_78 = $localize`:kendo.signature.clear|The message for the Clear button.:Clear`;
      }
      let i18n_79;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_79 = goog.getMsg("Maximize");
        i18n_79 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_79;
      } else {
        i18n_79 = $localize`:kendo.signature.maximize|The message for the Maximize button.:Maximize`;
      }
      let i18n_80;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_80 = goog.getMsg("Minimize");
        i18n_80 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_80;
      } else {
        i18n_80 = $localize`:kendo.signature.minimize|The message for the Minimize button.:Minimize`;
      }
      let i18n_81;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_81 = goog.getMsg("Signature canvas");
        i18n_81 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_81;
      } else {
        i18n_81 = $localize`:kendo.signature.canvasLabel|The message for the Canvas element aria-label.:Signature canvas`;
      }
      return [["canvas", ""], ["maximize", ""], ["minimize", ""], ["kendoSignatureLocalizedMessages", "", "clear", i18n_78, "maximize", i18n_79, "minimize", i18n_80, "canvasLabel", i18n_81], ["role", "img", 1, "k-signature-canvas", 3, "id"], [1, "k-signature-actions", "k-signature-actions-top"], ["kendoButton", "", "type", "button", "icon", "hyperlink-open", "fillMode", "flat", 1, "k-signature-action", "k-signature-maximize", 3, "svgIcon", "size", "title"], ["kendoButton", "", "type", "button", "icon", "hyperlink-open", "fillMode", "flat", 1, "k-signature-action", "k-signature-minimize", "k-rotate-180", 3, "svgIcon", "size", "title"], [1, "k-signature-line"], [1, "k-signature-actions", "k-signature-actions-bottom"], ["kendoButton", "", "icon", "close", "type", "button", "fillMode", "flat", 1, "k-signature-action", "k-signature-clear", 3, "svgIcon", "size", "title"], ["autoFocusedElement", ".k-signature-action.k-signature-minimize"], ["kendoButton", "", "type", "button", "icon", "hyperlink-open", "fillMode", "flat", 1, "k-signature-action", "k-signature-maximize", 3, "click", "svgIcon", "size", "title"], ["kendoButton", "", "type", "button", "icon", "hyperlink-open", "fillMode", "flat", 1, "k-signature-action", "k-signature-minimize", "k-rotate-180", 3, "click", "svgIcon", "size", "title"], ["kendoButton", "", "icon", "close", "type", "button", "fillMode", "flat", 1, "k-signature-action", "k-signature-clear", 3, "click", "svgIcon", "size", "title"], ["autoFocusedElement", ".k-signature-action.k-signature-minimize", 3, "click", "keydown"], [3, "valueChange", "minimize", "readonly", "disabled", "size", "rounded", "fillMode", "color", "backgroundColor", "strokeWidth", "smooth", "value", "hideLine", "maximized", "width", "height", "popupScale", "exportScale", "parentLocalization"]];
    },
    template: function SignatureComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementContainer(0, 3);
        ɵɵelement(1, "div", 4, 0);
        ɵɵelementStart(3, "div", 5);
        ɵɵtemplate(4, SignatureComponent_Conditional_4_Template, 2, 4, "button", 6)(5, SignatureComponent_Conditional_5_Template, 2, 4, "button", 7);
        ɵɵelementEnd();
        ɵɵtemplate(6, SignatureComponent_Conditional_6_Template, 1, 0, "div", 8);
        ɵɵelementStart(7, "div", 9);
        ɵɵtemplate(8, SignatureComponent_Conditional_8_Template, 1, 4, "button", 10);
        ɵɵelementEnd();
        ɵɵtemplate(9, SignatureComponent_Conditional_9_Template, 2, 19, "kendo-dialog", 11);
      }
      if (rf & 2) {
        ɵɵadvance();
        ɵɵproperty("id", ctx.focusableId);
        ɵɵattribute("tabindex", ctx.tabindex)("aria-label", ctx.canvasLabel);
        ɵɵadvance(3);
        ɵɵconditional(ctx.showMaximize ? 4 : -1);
        ɵɵadvance();
        ɵɵconditional(ctx.showMinimize ? 5 : -1);
        ɵɵadvance();
        ɵɵconditional(!ctx.hideLine ? 6 : -1);
        ɵɵadvance(2);
        ɵɵconditional(ctx.showClear ? 8 : -1);
        ɵɵadvance();
        ɵɵconditional(ctx.isOpen ? 9 : -1);
      }
    },
    dependencies: [_SignatureComponent, LocalizedSignatureMessagesDirective, ButtonComponent, DialogComponent],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignatureComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoSignature",
      selector: "kendo-signature",
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.signature"
      }, {
        multi: true,
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => SignatureComponent)
      }],
      template: `
        <ng-container kendoSignatureLocalizedMessages
          i18n-clear="kendo.signature.clear|The message for the Clear button."
          clear="Clear"
          i18n-maximize="kendo.signature.maximize|The message for the Maximize button."
          maximize="Maximize"
          i18n-minimize="kendo.signature.minimize|The message for the Minimize button."
          minimize="Minimize"
          i18n-canvasLabel="kendo.signature.canvasLabel|The message for the Canvas element aria-label."
          canvasLabel="Signature canvas">
        </ng-container>

        <div
          #canvas
          class="k-signature-canvas"
          [attr.tabindex]="tabindex"
          [id]="focusableId"
          role="img"
          [attr.aria-label]="canvasLabel"
        ></div>

        <div class="k-signature-actions k-signature-actions-top">
          @if (showMaximize) {
            <button
              #maximize
              kendoButton
              type="button"
              class="k-signature-action k-signature-maximize"
              icon="hyperlink-open"
              [svgIcon]="svgIcon('hyperlinkOpenIcon')"
              fillMode="flat"
              [size]="size"
              (click)="onMaximize()"
              [attr.aria-label]="maximizeTitle"
              [title]="maximizeTitle">
            </button>
          }
          @if (showMinimize) {
            <button
              #minimize
              kendoButton
              type="button"
              class="k-signature-action k-signature-minimize k-rotate-180"
              icon="hyperlink-open"
              [svgIcon]="svgIcon('hyperlinkOpenIcon')"
              fillMode="flat"
              [size]="size"
              (click)="onMinimize()"
              [attr.aria-label]="minimizeTitle"
              [title]="minimizeTitle">
            </button>
          }
        </div>
        @if (!hideLine) {
          <div
            class="k-signature-line"
          ></div>
        }
        <div class="k-signature-actions k-signature-actions-bottom">
          @if (showClear) {
            <button
              kendoButton
              class="k-signature-action k-signature-clear"
              icon="close"
              type="button"
              [svgIcon]="svgIcon('xIcon')"
              fillMode="flat"
              [size]="size"
              [attr.aria-label]="clearTitle"
              [title]="clearTitle"
              (click)="onClear()" >
            </button>
          }
        </div>

        @if (isOpen) {
          <kendo-dialog
            autoFocusedElement=".k-signature-action.k-signature-minimize"
            (click)="onDialogClick($event)"
            (keydown)="onDialogKeydown($event)">
            <kendo-signature
              [readonly]="readonly"
              [disabled]="disabled"
              [size]="size"
              [rounded]="rounded"
              [fillMode]="fillMode"
              [color]="color"
              [backgroundColor]="backgroundColor"
              [strokeWidth]="strokeWidth"
              [smooth]="smooth"
              [value]="popupValue"
              (valueChange)="onDialogValueChange($event)"
              [hideLine]="hideLine"
              [class.k-signature-maximized]="true"
              [maximized]="true"
              (minimize)="onDialogClose()"
              [width]="popupWidth"
              [height]="popupHeight"
              [popupScale]="popupScale"
              [exportScale]="(1 / popupScale) * exportScale"
              [parentLocalization]="localization">
            </kendo-signature>
          </kendo-dialog>
        }
        `,
      standalone: true,
      imports: [LocalizedSignatureMessagesDirective, ButtonComponent, DialogComponent]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: NgZone
  }, {
    type: ChangeDetectorRef
  }, {
    type: LocalizationService
  }, {
    type: ChangeDetectorRef
  }], {
    staticHostClasses: [{
      type: HostBinding,
      args: ["class.k-signature"]
    }, {
      type: HostBinding,
      args: ["class.k-input"]
    }],
    focusableId: [{
      type: Input
    }],
    direction: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    readonly: [{
      type: HostBinding,
      args: ["class.k-readonly"]
    }, {
      type: Input
    }],
    disabled: [{
      type: HostBinding,
      args: ["class.k-disabled"]
    }, {
      type: Input
    }],
    width: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["style.width.px"]
    }],
    height: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["style.height.px"]
    }],
    value: [{
      type: Input
    }],
    tabindex: [{
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
    color: [{
      type: Input
    }],
    backgroundColor: [{
      type: Input
    }],
    strokeWidth: [{
      type: Input
    }],
    smooth: [{
      type: Input
    }],
    maximizable: [{
      type: Input
    }],
    maximized: [{
      type: Input
    }],
    popupScale: [{
      type: Input
    }],
    exportScale: [{
      type: Input
    }],
    parentLocalization: [{
      type: Input
    }],
    hideLine: [{
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
    minimize: [{
      type: Output
    }],
    canvas: [{
      type: ViewChild,
      args: ["canvas"]
    }],
    minimizeButton: [{
      type: ViewChild,
      args: ["minimize", {
        read: ElementRef
      }]
    }],
    maximizeButton: [{
      type: ViewChild,
      args: ["maximize", {
        read: ElementRef
      }]
    }]
  });
})();
var SliderCustomMessagesComponent = class _SliderCustomMessagesComponent extends SliderMessages {
  service;
  constructor(service) {
    super();
    this.service = service;
  }
  get override() {
    return true;
  }
  static ɵfac = function SliderCustomMessagesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SliderCustomMessagesComponent)(ɵɵdirectiveInject(LocalizationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _SliderCustomMessagesComponent,
    selectors: [["kendo-slider-messages"]],
    standalone: true,
    features: [ɵɵProvidersFeature([{
      provide: SliderMessages,
      useExisting: forwardRef(() => _SliderCustomMessagesComponent)
    }]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function SliderCustomMessagesComponent_Template(rf, ctx) {
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SliderCustomMessagesComponent, [{
    type: Component,
    args: [{
      providers: [{
        provide: SliderMessages,
        useExisting: forwardRef(() => SliderCustomMessagesComponent)
      }],
      selector: "kendo-slider-messages",
      template: ``,
      standalone: true
    }]
  }], () => [{
    type: LocalizationService
  }], null);
})();
var SwitchCustomMessagesComponent = class _SwitchCustomMessagesComponent extends Messages {
  service;
  constructor(service) {
    super();
    this.service = service;
  }
  get override() {
    return true;
  }
  static ɵfac = function SwitchCustomMessagesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SwitchCustomMessagesComponent)(ɵɵdirectiveInject(LocalizationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _SwitchCustomMessagesComponent,
    selectors: [["kendo-switch-messages"]],
    standalone: true,
    features: [ɵɵProvidersFeature([{
      provide: Messages,
      useExisting: forwardRef(() => _SwitchCustomMessagesComponent)
    }]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function SwitchCustomMessagesComponent_Template(rf, ctx) {
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SwitchCustomMessagesComponent, [{
    type: Component,
    args: [{
      providers: [{
        provide: Messages,
        useExisting: forwardRef(() => SwitchCustomMessagesComponent)
      }],
      selector: "kendo-switch-messages",
      template: ``,
      standalone: true
    }]
  }], () => [{
    type: LocalizationService
  }], null);
})();
var TextAreaPrefixComponent = class _TextAreaPrefixComponent {
  /**
   * @hidden
   */
  flow = "vertical";
  /**
   * @hidden
   */
  orientation = "horizontal";
  hostClass = true;
  get verticalOrientation() {
    return this.orientation === "vertical";
  }
  get horizontalOrientation() {
    return this.orientation === "horizontal";
  }
  get alignItems() {
    return this.flow === this.orientation;
  }
  static ɵfac = function TextAreaPrefixComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TextAreaPrefixComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _TextAreaPrefixComponent,
    selectors: [["kendo-textarea-prefix"]],
    hostVars: 8,
    hostBindings: function TextAreaPrefixComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("k-input-prefix", ctx.hostClass)("k-input-prefix-vertical", ctx.verticalOrientation)("k-input-prefix-horizontal", ctx.horizontalOrientation)("!k-align-items-start", ctx.alignItems);
      }
    },
    inputs: {
      flow: "flow",
      orientation: "orientation"
    },
    exportAs: ["kendoTextAreaPrefix"],
    standalone: true,
    features: [ɵɵStandaloneFeature],
    ngContentSelectors: _c58,
    decls: 1,
    vars: 0,
    template: function TextAreaPrefixComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextAreaPrefixComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoTextAreaPrefix",
      selector: "kendo-textarea-prefix",
      template: `<ng-content></ng-content>`,
      standalone: true
    }]
  }], null, {
    flow: [{
      type: Input
    }],
    orientation: [{
      type: Input
    }],
    hostClass: [{
      type: HostBinding,
      args: ["class.k-input-prefix"]
    }],
    verticalOrientation: [{
      type: HostBinding,
      args: ["class.k-input-prefix-vertical"]
    }],
    horizontalOrientation: [{
      type: HostBinding,
      args: ["class.k-input-prefix-horizontal"]
    }],
    alignItems: [{
      type: HostBinding,
      args: ["class.!k-align-items-start"]
    }]
  });
})();
var TextAreaSuffixComponent = class _TextAreaSuffixComponent {
  /**
   * @hidden
   */
  flow = "vertical";
  /**
   * @hidden
   */
  orientation = "horizontal";
  hostClass = true;
  get verticalOrientation() {
    return this.orientation === "vertical";
  }
  get horizontalOrientation() {
    return this.orientation === "horizontal";
  }
  get alignItems() {
    return this.flow === this.orientation;
  }
  static ɵfac = function TextAreaSuffixComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TextAreaSuffixComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _TextAreaSuffixComponent,
    selectors: [["kendo-textarea-suffix"]],
    hostVars: 8,
    hostBindings: function TextAreaSuffixComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("k-input-suffix", ctx.hostClass)("k-input-suffix-vertical", ctx.verticalOrientation)("k-input-suffix-horizontal", ctx.horizontalOrientation)("!k-align-items-start", ctx.alignItems);
      }
    },
    inputs: {
      flow: "flow",
      orientation: "orientation"
    },
    exportAs: ["kendoTextAreaSuffix"],
    standalone: true,
    features: [ɵɵStandaloneFeature],
    ngContentSelectors: _c58,
    decls: 1,
    vars: 0,
    template: function TextAreaSuffixComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextAreaSuffixComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoTextAreaSuffix",
      selector: "kendo-textarea-suffix",
      template: `<ng-content></ng-content>`,
      standalone: true
    }]
  }], null, {
    flow: [{
      type: Input
    }],
    orientation: [{
      type: Input
    }],
    hostClass: [{
      type: HostBinding,
      args: ["class.k-input-suffix"]
    }],
    verticalOrientation: [{
      type: HostBinding,
      args: ["class.k-input-suffix-vertical"]
    }],
    horizontalOrientation: [{
      type: HostBinding,
      args: ["class.k-input-suffix-horizontal"]
    }],
    alignItems: [{
      type: HostBinding,
      args: ["class.!k-align-items-start"]
    }]
  });
})();
var TextFieldsBase = class _TextFieldsBase {
  localizationService;
  ngZone;
  changeDetector;
  renderer;
  injector;
  hostElement;
  /**
   * Sets the `title` attribute of the internal textarea input element of the component.
   */
  title;
  /**
   * Sets the disabled state of the TextArea component. To learn how to disable the component in reactive forms, refer to the article on [Forms Support](slug:formssupport_textarea#toc-managing-the-textarea-disabled-state-in-reactive-forms).
   *
   * @default false
   */
  disabled = false;
  /**
   * Sets the read-only state of the TextArea component.
   *
   * @default false
   */
  readonly = false;
  /**
   * Provides a value for the TextArea component.
   */
  value = null;
  /**
   * Determines whether the whole value will be selected when the TextArea is clicked. Defaults to `false`.
   *
   * @default false
   */
  selectOnFocus = false;
  /**
   * The hint, which is displayed when the Textarea is empty.
   */
  placeholder;
  /**
   * Fires each time the user focuses the internal textarea element of the component.
   * This event is useful when you need to distinguish between focusing the textarea element and focusing one of its adornments.
   */
  inputFocus = new EventEmitter();
  /**
   * Fires each time the internal textarea element gets blurred.
   * This event is useful when adornments are used, in order to distinguish between blurring the textarea element and blurring the whole TextArea component.
   */
  inputBlur = new EventEmitter();
  /**
   * Represents the visible textarea element of the component.
   */
  input;
  get disabledClass() {
    return this.disabled;
  }
  direction;
  /**
   * @hidden
   */
  control;
  subscriptions = new Subscription();
  _isFocused = false;
  focusChangedProgrammatically = false;
  constructor(localizationService, ngZone, changeDetector, renderer, injector, hostElement) {
    this.localizationService = localizationService;
    this.ngZone = ngZone;
    this.changeDetector = changeDetector;
    this.renderer = renderer;
    this.injector = injector;
    this.hostElement = hostElement;
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  /**
   * @hidden
   */
  handleInputBlur = () => {
    this.changeDetector.markForCheck();
    if (hasObservers(this.inputBlur) || requiresZoneOnBlur(this.control)) {
      this.ngZone.run(() => {
        this.ngTouched();
        this.inputBlur.emit();
      });
    }
  };
  /**
   * @hidden
   * Called when the status of the component changes to or from `disabled`.
   * Depending on the value, it enables or disables the appropriate DOM element.
   *
   * @param isDisabled
   */
  setDisabledState(isDisabled) {
    this.changeDetector.markForCheck();
    this.disabled = isDisabled;
  }
  ngChange = (_) => {
  };
  ngTouched = () => {
  };
  static ɵfac = function TextFieldsBase_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TextFieldsBase)(ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(ElementRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _TextFieldsBase,
    selectors: [["kendo-textfield-base"]],
    viewQuery: function TextFieldsBase_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c17, 7);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.input = _t.first);
      }
    },
    hostVars: 5,
    hostBindings: function TextFieldsBase_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("dir", ctx.direction);
        ɵɵclassProp("k-readonly", ctx.readonly)("k-disabled", ctx.disabledClass);
      }
    },
    inputs: {
      title: "title",
      disabled: "disabled",
      readonly: "readonly",
      value: "value",
      selectOnFocus: "selectOnFocus",
      placeholder: "placeholder"
    },
    outputs: {
      inputFocus: "inputFocus",
      inputBlur: "inputBlur"
    },
    decls: 0,
    vars: 0,
    template: function TextFieldsBase_Template(rf, ctx) {
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextFieldsBase, [{
    type: Component,
    args: [{
      selector: "kendo-textfield-base",
      template: ``
    }]
  }], () => [{
    type: LocalizationService
  }, {
    type: NgZone
  }, {
    type: ChangeDetectorRef
  }, {
    type: Renderer2
  }, {
    type: Injector
  }, {
    type: ElementRef
  }], {
    title: [{
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
    value: [{
      type: Input
    }],
    selectOnFocus: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    inputFocus: [{
      type: Output
    }],
    inputBlur: [{
      type: Output
    }],
    input: [{
      type: ViewChild,
      args: ["input", {
        static: true
      }]
    }],
    disabledClass: [{
      type: HostBinding,
      args: ["class.k-disabled"]
    }],
    direction: [{
      type: HostBinding,
      args: ["attr.dir"]
    }]
  });
})();
var resizeClasses = {
  "vertical": "k-resize-y",
  "horizontal": "k-resize-x",
  "both": "k-resize",
  "none": "k-resize-none",
  "auto": "k-resize-none"
};
var FOCUSED = "k-focus";
var DEFAULT_SIZE$1 = "medium";
var DEFAULT_ROUNDED$1 = "medium";
var DEFAULT_FILL_MODE$1 = "solid";
var TextAreaComponent = class _TextAreaComponent extends TextFieldsBase {
  localizationService;
  ngZone;
  changeDetector;
  renderer;
  injector;
  hostElement;
  /**
   * @hidden
   */
  focusableId = `k-${guid()}`;
  hostClasses = true;
  get flowCol() {
    return this.flow === "vertical";
  }
  get flowRow() {
    return this.flow === "horizontal";
  }
  _flow = "vertical";
  /**
   * Specifies the flow direction of the TextArea sections. Use this property to set the position of adornments relative to the text area.
   */
  set flow(flow) {
    this._flow = flow;
    if (this.prefix) {
      this.prefix.flow = flow;
    }
    if (this.suffix) {
      this.suffix.flow = flow;
    }
  }
  get flow() {
    return this._flow;
  }
  /**
   * Sets the HTML attributes of the inner focusable input element. Some attributes are required for component functionality and cannot be changed.
   */
  set inputAttributes(attributes) {
    if (isObjectPresent(this.parsedAttributes)) {
      removeHTMLAttributes(this.parsedAttributes, this.renderer, this.input.nativeElement);
    }
    this._inputAttributes = attributes;
    this.parsedAttributes = this.inputAttributes ? parseAttributes(this.inputAttributes, this.defaultAttributes) : this.inputAttributes;
    this.setInputAttributes();
  }
  get inputAttributes() {
    return this._inputAttributes;
  }
  /**
   * Specifies the orientation of the TextArea adornments. Use this property to set the position of adornments relative to each other.
   *
   */
  set adornmentsOrientation(orientation) {
    this._adornmentsOrientation = orientation;
    if (this.prefix) {
      this.prefix.orientation = orientation;
    }
    if (this.suffix) {
      this.suffix.orientation = orientation;
    }
  }
  get adornmentsOrientation() {
    return this._adornmentsOrientation;
  }
  /**
   * Sets the visible height of the text area in lines.
   */
  rows;
  /**
   * Sets the visible width of the text area in average character width.
   */
  cols;
  /**
   * Sets the maximum number of characters allowed in the text area.
   */
  maxlength;
  /**
   * @hidden
   */
  maxResizableRows;
  /**
   * Sets the [`tabindex`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) of the component.
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
   * Sets the resize behavior of the TextArea.
   *
   *
   * @default 'vertical'
   */
  resizable = "vertical";
  /**
   * Sets the size of the TextArea. Controls the padding of the text area element ([see example]({% slug appearance_textarea %}#toc-size)).
   * @default 'medium'
   */
  set size(size) {
    const newSize = size ? size : DEFAULT_SIZE$1;
    this.handleClasses(newSize, "size");
    this._size = newSize;
  }
  get size() {
    return this._size;
  }
  /**
   * Sets the border radius of the TextArea ([see example](slug:appearance_textarea#toc-roundness)).
   * @default 'medium'
   */
  set rounded(rounded) {
    const newRounded = rounded ? rounded : DEFAULT_ROUNDED$1;
    this.handleClasses(newRounded, "rounded");
    this._rounded = newRounded;
  }
  get rounded() {
    return this._rounded;
  }
  /**
   * Sets the background and border styles of the TextArea ([see example](slug:appearance_textarea#toc-fill-mode)).
   * @default 'solid'
   */
  set fillMode(fillMode) {
    const newFillMode = fillMode ? fillMode : DEFAULT_FILL_MODE$1;
    this.handleClasses(newFillMode, "fillMode");
    this._fillMode = newFillMode;
  }
  get fillMode() {
    return this._fillMode;
  }
  /**
   * Shows the prefix separator in the TextArea.
   * The separator is rendered only if a prefix template is declared.
   *
   * @default false
   */
  showPrefixSeparator = false;
  /**
   * Shows the suffix separator in the TextArea.
   * The separator is rendered only if a suffix template is declared.
   *
   * @default false
   */
  showSuffixSeparator = false;
  /**
   * Fires when the TextArea is focused.
   *
   * Use the `onFocus` property to subscribe to this event.
   */
  onFocus = new EventEmitter();
  /**
   * Fires when the TextArea gets blurred.
   *
   * Use the `onBlur` property to subscribe to this event.
   */
  onBlur = new EventEmitter();
  /**
   * Fires when the value changes or the TextArea is blurred ([see example](slug:events_textarea)).
   *
   * The event does not fire when the value changes programmatically or through form control binding.
   */
  valueChange = new EventEmitter();
  initialHeight;
  maxResizableHeight;
  resizeSubscription;
  resizeObserver;
  _size = "medium";
  _rounded = "medium";
  _fillMode = "solid";
  _adornmentsOrientation = "horizontal";
  _inputAttributes;
  parsedAttributes = {};
  get defaultAttributes() {
    return {
      id: this.focusableId,
      disabled: this.disabled ? "" : null,
      readonly: this.readonly ? "" : null,
      tabindex: this.disabled ? void 0 : this.tabIndex,
      placeholder: this.placeholder,
      title: this.title,
      maxlength: this.maxlength,
      rows: this.rows,
      cols: this.cols,
      "aria-disabled": this.disabled ? true : void 0,
      "aria-readonly": this.readonly ? true : void 0,
      "aria-invalid": this.isControlInvalid,
      required: this.isControlRequired ? "" : null
    };
  }
  get mutableAttributes() {
    return {
      "aria-multiline": "true"
    };
  }
  constructor(localizationService, ngZone, changeDetector, renderer, injector, hostElement) {
    super(localizationService, ngZone, changeDetector, renderer, injector, hostElement);
    this.localizationService = localizationService;
    this.ngZone = ngZone;
    this.changeDetector = changeDetector;
    this.renderer = renderer;
    this.injector = injector;
    this.hostElement = hostElement;
    A(packageMetadata);
    this.direction = localizationService.rtl ? "rtl" : "ltr";
  }
  ngAfterContentInit() {
    this.ngZone.onStable.pipe(take(1)).subscribe(() => {
      this.prefix && (this.prefix.orientation = this.adornmentsOrientation);
      this.suffix && (this.suffix.orientation = this.adornmentsOrientation);
    });
  }
  ngAfterViewInit() {
    this.ngZone.runOutsideAngular(() => {
      this.handleFlow();
    });
    this.ngZone.onStable.pipe(take(1)).subscribe(() => {
      if (this.prefix) {
        this.prefix.flow = this.flow;
      }
      if (this.suffix) {
        this.suffix.flow = this.flow;
      }
    });
    const stylingInputs = ["size", "rounded", "fillMode"];
    stylingInputs.forEach((input) => {
      this.handleClasses(this[input], input);
    });
  }
  ngOnInit() {
    this.control = this.injector.get(NgControl, null);
    if (isDocumentAvailable() && this.resizable === "auto") {
      this.resizeSubscription = fromEvent(window, "resize").pipe(debounceTime(50)).subscribe(() => this.resize());
      this.attachResizeObserver();
    }
    if (this.hostElement) {
      this.renderer.removeAttribute(this.hostElement.nativeElement, "tabindex");
    }
    this.subscriptions = this.localizationService.changes.subscribe(({
      rtl
    }) => {
      this.direction = rtl ? "rtl" : "ltr";
    });
  }
  ngOnChanges(changes) {
    const hostElement = this.hostElement.nativeElement;
    const element = this.input.nativeElement;
    if (changes.flow) {
      this.handleFlow();
    }
    if (changes.resizable) {
      if (this.resizable === "auto") {
        this.ngZone.onStable.pipe(take(1)).subscribe(() => {
          this.initialHeight = element.offsetHeight;
          if (this.maxResizableRows && this.rows && isDocumentAvailable()) {
            const heightValue = parseFloat(getComputedStyle(element).getPropertyValue("height")) - 2 * parseFloat(getComputedStyle(element).getPropertyValue("padding"));
            this.maxResizableHeight = this.initialHeight + heightValue * (this.maxResizableRows - this.rows);
          }
        });
      } else if (this.resizable !== "both") {
        element.style.height = `${this.initialHeight}px`;
      }
    }
    if (changes.cols) {
      if (isPresent2(changes.cols.currentValue)) {
        this.renderer.setStyle(hostElement, "width", "auto");
      } else {
        this.renderer.removeStyle(hostElement, "width");
      }
    }
    if (changes.value) {
      this.resize();
    }
  }
  /**
   * @hidden
   */
  prefix;
  /**
   * @hidden
   */
  suffix;
  /**
   * @hidden
   */
  writeValue(value) {
    this.value = value;
    this.resize();
    this.changeDetector.markForCheck();
  }
  /**
   * @hidden
   */
  registerOnChange(fn) {
    this.ngChange = fn;
  }
  /**
   * @hidden
   */
  registerOnTouched(fn) {
    this.ngTouched = fn;
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    if (this.resizeSubscription) {
      this.resizeSubscription.unsubscribe();
    }
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }
  /**
   * @hidden
   */
  get resizableClass() {
    return resizeClasses[this.resizable];
  }
  /**
   * @hidden
   */
  get isControlInvalid() {
    return this.control && this.control.touched && !this.control.valid;
  }
  /**
   * @hidden
   */
  get isControlRequired() {
    return isControlRequired(this.control?.control);
  }
  /**
   * @hidden
   */
  get separatorOrientation() {
    return this.flow === "horizontal" ? "vertical" : "horizontal";
  }
  /**
   * @hidden
   */
  get isFocused() {
    return this._isFocused;
  }
  /**
   * @hidden
   */
  set isFocused(value) {
    if (this._isFocused !== value && this.hostElement) {
      const element = this.hostElement.nativeElement;
      if (value && !this.disabled) {
        this.renderer.addClass(element, FOCUSED);
      } else {
        this.renderer.removeClass(element, FOCUSED);
      }
      this._isFocused = value;
    }
  }
  /**
   * @hidden
   */
  handleInput = (ev) => {
    const incomingValue = ev.target.value;
    this.updateValue(incomingValue);
    this.resize();
  };
  /**
   * @hidden
   */
  handleInputFocus = () => {
    if (!this.disabled) {
      if (this.selectOnFocus && this.value) {
        this.ngZone.run(() => {
          setTimeout(() => {
            this.selectAll();
          });
        });
      }
      if (!this.isFocused) {
        this.handleFocus();
      }
      if (hasObservers(this.inputFocus)) {
        if (!this.focusChangedProgrammatically) {
          this.ngZone.run(() => {
            this.inputFocus.emit();
          });
        }
      }
    }
  };
  /**
   * Focuses the TextArea.
   */
  focus() {
    if (!this.input) {
      return;
    }
    this.focusChangedProgrammatically = true;
    this.isFocused = true;
    this.input.nativeElement.focus();
    this.focusChangedProgrammatically = false;
  }
  /**
   * Blurs the TextArea.
   */
  blur() {
    this.focusChangedProgrammatically = true;
    const isFocusedElement = this.hostElement.nativeElement.querySelector(":focus");
    if (isFocusedElement) {
      isFocusedElement.blur();
    }
    this.isFocused = false;
    this.focusChangedProgrammatically = false;
  }
  attachResizeObserver() {
    if (typeof ResizeObserver === "undefined" || !this.hostElement?.nativeElement) {
      return;
    }
    this.ngZone.runOutsideAngular(() => {
      this.resizeObserver = new ResizeObserver(() => this.resize());
      this.resizeObserver.observe(this.hostElement.nativeElement);
    });
  }
  resize() {
    if (this.resizable !== "auto") {
      return;
    }
    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => {
        const hostElement = this.hostElement.nativeElement;
        const element = this.input.nativeElement;
        this.renderer.setStyle(element, "height", `${this.initialHeight}px`);
        const scrollHeight = element.scrollHeight;
        if (scrollHeight > this.maxResizableHeight) {
          this.renderer.setStyle(element, "height", `${this.maxResizableHeight}px`);
          return;
        }
        this.renderer.setStyle(hostElement, "min-height", `${scrollHeight}px`);
        if (scrollHeight > this.initialHeight) {
          this.renderer.setStyle(element, "height", `${scrollHeight}px`);
        }
      }, 0);
    });
  }
  /**
   * @hidden
   */
  handleFocus() {
    this.ngZone.run(() => {
      if (!this.focusChangedProgrammatically && hasObservers(this.onFocus)) {
        this.onFocus.emit();
      }
      this.isFocused = true;
    });
  }
  /**
   * @hidden
   */
  handleBlur() {
    this.changeDetector.markForCheck();
    this.ngZone.run(() => {
      if (!this.focusChangedProgrammatically) {
        this.onBlur.emit();
      }
      this.isFocused = false;
    });
  }
  updateValue(value) {
    if (!areSame(this.value, value)) {
      this.ngZone.run(() => {
        this.value = value;
        this.ngChange(value);
        this.valueChange.emit(value);
        this.changeDetector.markForCheck();
      });
    }
  }
  setSelection(start, end) {
    if (this.isFocused) {
      invokeElementMethod(this.input, "setSelectionRange", start, end);
    }
  }
  selectAll() {
    if (this.value) {
      this.setSelection(0, this.value.length);
    }
  }
  handleClasses(value, input) {
    const elem = this.hostElement.nativeElement;
    const classes = getStylingClasses("input", input, this[input], value);
    if (classes.toRemove) {
      this.renderer.removeClass(elem, classes.toRemove);
    }
    if (classes.toAdd) {
      this.renderer.addClass(elem, classes.toAdd);
    }
  }
  handleFlow() {
    const isVertical = this.flow === "vertical";
    const element = this.input.nativeElement;
    this.renderer[isVertical ? "addClass" : "removeClass"](element, "!k-flex-none");
  }
  setInputAttributes() {
    const attributesToRender = Object.assign({}, this.mutableAttributes, this.parsedAttributes);
    setHTMLAttributes(attributesToRender, this.renderer, this.input.nativeElement, this.ngZone);
  }
  static ɵfac = function TextAreaComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TextAreaComponent)(ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(ElementRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _TextAreaComponent,
    selectors: [["kendo-textarea"]],
    contentQueries: function TextAreaComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, TextAreaPrefixComponent, 5);
        ɵɵcontentQuery(dirIndex, TextAreaSuffixComponent, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.prefix = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.suffix = _t.first);
      }
    },
    hostVars: 8,
    hostBindings: function TextAreaComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("k-textarea", ctx.hostClasses)("k-input", ctx.hostClasses)("!k-flex-col", ctx.flowCol)("!k-flex-row", ctx.flowRow);
      }
    },
    inputs: {
      focusableId: "focusableId",
      flow: "flow",
      inputAttributes: "inputAttributes",
      adornmentsOrientation: "adornmentsOrientation",
      rows: "rows",
      cols: "cols",
      maxlength: "maxlength",
      maxResizableRows: "maxResizableRows",
      tabindex: "tabindex",
      tabIndex: "tabIndex",
      resizable: "resizable",
      size: "size",
      rounded: "rounded",
      fillMode: "fillMode",
      showPrefixSeparator: "showPrefixSeparator",
      showSuffixSeparator: "showSuffixSeparator"
    },
    outputs: {
      onFocus: "focus",
      onBlur: "blur",
      valueChange: "valueChange"
    },
    exportAs: ["kendoTextArea"],
    standalone: true,
    features: [ɵɵProvidersFeature([LocalizationService, {
      provide: L10N_PREFIX,
      useValue: "kendo.textarea"
    }, {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _TextAreaComponent),
      multi: true
    }, {
      provide: KendoInput,
      useExisting: forwardRef(() => _TextAreaComponent)
    }]), ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    ngContentSelectors: _c68,
    decls: 7,
    vars: 26,
    consts: [["input", ""], ["kendoInputSharedEvents", "", 3, "isFocusedChange", "handleBlur", "onFocus", "hostElement", "isFocused"], [3, "orientation"], [1, "k-input-inner", "!k-overflow-auto", 3, "id", "ngClass", "value", "disabled", "readonly", "kendoEventsOutsideAngular"]],
    template: function TextAreaComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵprojectionDef(_c67);
        ɵɵelementContainerStart(0, 1);
        ɵɵtwoWayListener("isFocusedChange", function TextAreaComponent_Template_ng_container_isFocusedChange_0_listener($event) {
          ɵɵrestoreView(_r1);
          ɵɵtwoWayBindingSet(ctx.isFocused, $event) || (ctx.isFocused = $event);
          return ɵɵresetView($event);
        });
        ɵɵlistener("handleBlur", function TextAreaComponent_Template_ng_container_handleBlur_0_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.handleBlur());
        })("onFocus", function TextAreaComponent_Template_ng_container_onFocus_0_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.handleFocus());
        });
        ɵɵprojection(1);
        ɵɵtemplate(2, TextAreaComponent_Conditional_2_Template, 1, 1, "kendo-input-separator", 2);
        ɵɵelement(3, "textarea", 3, 0);
        ɵɵtemplate(5, TextAreaComponent_Conditional_5_Template, 1, 1, "kendo-input-separator", 2);
        ɵɵprojection(6, 1);
        ɵɵelementContainerEnd();
      }
      if (rf & 2) {
        ɵɵproperty("hostElement", ctx.hostElement);
        ɵɵtwoWayProperty("isFocused", ctx.isFocused);
        ɵɵadvance(2);
        ɵɵconditional(ctx.prefix && ctx.showPrefixSeparator ? 2 : -1);
        ɵɵadvance();
        ɵɵproperty("id", ctx.focusableId)("ngClass", ctx.resizableClass)("value", ctx.value)("disabled", ctx.disabled)("readonly", ctx.readonly)("kendoEventsOutsideAngular", ɵɵpureFunction3(22, _c20, ctx.handleInputFocus, ctx.handleInputBlur, ctx.handleInput));
        ɵɵattribute("aria-multiline", true)("aria-disabled", ctx.disabled ? true : void 0)("aria-readonly", ctx.readonly ? true : void 0)("aria-invalid", ctx.isControlInvalid)("required", ctx.isControlRequired ? "" : null)("placeholder", ctx.placeholder)("rows", ctx.rows)("cols", ctx.cols)("tabindex", ctx.tabIndex)("title", ctx.title)("maxlength", ctx.maxlength)("aria-invalid", ctx.isControlInvalid);
        ɵɵadvance(2);
        ɵɵconditional(ctx.suffix && ctx.showSuffixSeparator ? 5 : -1);
      }
    },
    dependencies: [SharedInputEventsDirective, InputSeparatorComponent, NgClass, EventsOutsideAngularDirective],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextAreaComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoTextArea",
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.textarea"
      }, {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => TextAreaComponent),
        multi: true
      }, {
        provide: KendoInput,
        useExisting: forwardRef(() => TextAreaComponent)
      }],
      selector: "kendo-textarea",
      template: `
        <ng-container
          kendoInputSharedEvents
          [hostElement]="hostElement"
          [(isFocused)]="isFocused"
          (handleBlur)="handleBlur()"
          (onFocus)="handleFocus()"
          >
          <ng-content select="kendo-textarea-prefix"></ng-content>
          @if (prefix && showPrefixSeparator) {
            <kendo-input-separator
              [orientation]="separatorOrientation"
            ></kendo-input-separator>
          }
          <textarea #input
            class="k-input-inner !k-overflow-auto"
            [attr.aria-multiline]="true"
            [attr.aria-disabled]="disabled ? true : undefined"
            [attr.aria-readonly]="readonly ? true : undefined"
            [attr.aria-invalid]="isControlInvalid"
            [id]="focusableId"
            [attr.required]="isControlRequired ? '' : null"
            [ngClass]="resizableClass"
            [value]="value"
            [attr.placeholder]="placeholder"
            [disabled]="disabled"
            [readonly]="readonly"
            [attr.rows]="rows"
            [attr.cols]="cols"
            [attr.tabindex]="tabIndex"
            [attr.title]="title"
            [attr.maxlength]="maxlength"
            [attr.aria-invalid]="isControlInvalid"
                [kendoEventsOutsideAngular]="{
                    focus: handleInputFocus,
                    blur: handleInputBlur,
                    input: handleInput}"
          ></textarea>
          @if (suffix && showSuffixSeparator) {
            <kendo-input-separator
              [orientation]="separatorOrientation"
            ></kendo-input-separator>
          }
          <ng-content select="kendo-textarea-suffix"></ng-content>
        </ng-container>
        `,
      standalone: true,
      imports: [SharedInputEventsDirective, InputSeparatorComponent, NgClass, EventsOutsideAngularDirective]
    }]
  }], () => [{
    type: LocalizationService
  }, {
    type: NgZone
  }, {
    type: ChangeDetectorRef
  }, {
    type: Renderer2
  }, {
    type: Injector
  }, {
    type: ElementRef
  }], {
    focusableId: [{
      type: Input
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class.k-textarea"]
    }, {
      type: HostBinding,
      args: ["class.k-input"]
    }],
    flowCol: [{
      type: HostBinding,
      args: ["class.!k-flex-col"]
    }],
    flowRow: [{
      type: HostBinding,
      args: ["class.!k-flex-row"]
    }],
    flow: [{
      type: Input
    }],
    inputAttributes: [{
      type: Input
    }],
    adornmentsOrientation: [{
      type: Input
    }],
    rows: [{
      type: Input
    }],
    cols: [{
      type: Input
    }],
    maxlength: [{
      type: Input
    }],
    maxResizableRows: [{
      type: Input
    }],
    tabindex: [{
      type: Input
    }],
    tabIndex: [{
      type: Input
    }],
    resizable: [{
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
    showPrefixSeparator: [{
      type: Input
    }],
    showSuffixSeparator: [{
      type: Input
    }],
    onFocus: [{
      type: Output,
      args: ["focus"]
    }],
    onBlur: [{
      type: Output,
      args: ["blur"]
    }],
    valueChange: [{
      type: Output
    }],
    prefix: [{
      type: ContentChild,
      args: [TextAreaPrefixComponent]
    }],
    suffix: [{
      type: ContentChild,
      args: [TextAreaSuffixComponent]
    }]
  });
})();
var TextBoxCustomMessagesComponent = class _TextBoxCustomMessagesComponent extends TextBoxMessages {
  service;
  constructor(service) {
    super();
    this.service = service;
  }
  get override() {
    return true;
  }
  static ɵfac = function TextBoxCustomMessagesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TextBoxCustomMessagesComponent)(ɵɵdirectiveInject(LocalizationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _TextBoxCustomMessagesComponent,
    selectors: [["kendo-textbox-messages"]],
    standalone: true,
    features: [ɵɵProvidersFeature([{
      provide: TextBoxMessages,
      useExisting: forwardRef(() => _TextBoxCustomMessagesComponent)
    }]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function TextBoxCustomMessagesComponent_Template(rf, ctx) {
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextBoxCustomMessagesComponent, [{
    type: Component,
    args: [{
      providers: [{
        provide: TextBoxMessages,
        useExisting: forwardRef(() => TextBoxCustomMessagesComponent)
      }],
      selector: "kendo-textbox-messages",
      template: ``,
      standalone: true
    }]
  }], () => [{
    type: LocalizationService
  }], null);
})();
var OTPInputSeparatorComponent = class _OTPInputSeparatorComponent {
  set separator(otpSeparator) {
    this._separator = otpSeparator;
    this.clearSeparator();
    if (!isPresent(otpSeparator)) {
      return;
    }
    if (typeof otpSeparator === "string") {
      this.hasText = true;
      return;
    }
    if (typeof otpSeparator.value !== "string") {
      this.hasSVGIcon = otpSeparator?.type === "svgIcon";
      this.separatorSVGIcon = otpSeparator.value;
      return;
    }
    this.hasIconClass = otpSeparator?.type === "iconClass";
    this.hasFontIcon = otpSeparator?.type === "fontIcon";
    this.separatorIconString = otpSeparator.value;
  }
  get separator() {
    return this._separator;
  }
  wrapperClass = true;
  hasText;
  hasIconClass;
  hasSVGIcon;
  hasFontIcon;
  separatorIconString;
  separatorSVGIcon;
  _separator;
  clearSeparator() {
    this.hasText = false;
    this.hasFontIcon = false;
    this.hasIconClass = false;
    this.hasSVGIcon = false;
  }
  static ɵfac = function OTPInputSeparatorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OTPInputSeparatorComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _OTPInputSeparatorComponent,
    selectors: [["kendo-otpinput-separator"]],
    hostVars: 2,
    hostBindings: function OTPInputSeparatorComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("k-otp-separator", ctx.wrapperClass);
      }
    },
    inputs: {
      separator: "separator"
    },
    exportAs: ["kendoOTPInputSeparator"],
    standalone: true,
    features: [ɵɵStandaloneFeature],
    decls: 3,
    vars: 3,
    consts: [[3, "ngClass"], [3, "name", "svgIcon"]],
    template: function OTPInputSeparatorComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, OTPInputSeparatorComponent_Conditional_0_Template, 1, 1)(1, OTPInputSeparatorComponent_Conditional_1_Template, 1, 1, "span", 0)(2, OTPInputSeparatorComponent_Conditional_2_Template, 1, 2, "kendo-icon-wrapper", 1);
      }
      if (rf & 2) {
        ɵɵconditional(ctx.hasText ? 0 : -1);
        ɵɵadvance();
        ɵɵconditional(ctx.hasIconClass ? 1 : -1);
        ɵɵadvance();
        ɵɵconditional(ctx.hasFontIcon || ctx.hasSVGIcon ? 2 : -1);
      }
    },
    dependencies: [NgClass, IconWrapperComponent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OTPInputSeparatorComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoOTPInputSeparator",
      selector: "kendo-otpinput-separator",
      template: `
        @if (hasText) {
          {{this.separator}}
        }
        @if (hasIconClass) {
          <span [ngClass]="separatorIconString"></span>
        }
        @if (hasFontIcon || hasSVGIcon) {
          <kendo-icon-wrapper
            [name]="separatorIconString"
            [svgIcon]="separatorSVGIcon"
          ></kendo-icon-wrapper>
        }
        `,
      standalone: true,
      imports: [NgClass, IconWrapperComponent]
    }]
  }], null, {
    separator: [{
      type: Input
    }],
    wrapperClass: [{
      type: HostBinding,
      args: ["class.k-otp-separator"]
    }]
  });
})();
var OTPInputMessages = class _OTPInputMessages extends ComponentMessages {
  /**
   * The aria-label of the OTP Input. Follows the pattern **Input {currentInput} of {totalInputs}, current value {value}** by default.
   * Тhe default label text when the current input is 1, and the total number of inputs is 4 will be
   * **Input 1 of 4, current value null**.
   *
   * The message consists of several parts - the current input number, the total number of inputs, the current value and a localizable string.
   * To allow for reordering its parts, the `ariaLabel` input accepts a string with placeholders for the current input,
   * total number of inputs and current value. The `{currentInput}`, `{totalInputs}` and `{currentValue}` placeholders will be
   * replaced internally with the respective actual values.
   */
  ariaLabel;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵOTPInputMessages_BaseFactory;
    return function OTPInputMessages_Factory(__ngFactoryType__) {
      return (ɵOTPInputMessages_BaseFactory || (ɵOTPInputMessages_BaseFactory = ɵɵgetInheritedFactory(_OTPInputMessages)))(__ngFactoryType__ || _OTPInputMessages);
    };
  })();
  static ɵdir = ɵɵdefineDirective({
    type: _OTPInputMessages,
    selectors: [["kendo-otpinput-messages-base"]],
    inputs: {
      ariaLabel: "ariaLabel"
    },
    features: [ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OTPInputMessages, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "kendo-otpinput-messages-base"
    }]
  }], null, {
    ariaLabel: [{
      type: Input
    }]
  });
})();
var LocalizedOTPInputMessagesDirective = class _LocalizedOTPInputMessagesDirective extends OTPInputMessages {
  service;
  constructor(service) {
    super();
    this.service = service;
  }
  static ɵfac = function LocalizedOTPInputMessagesDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LocalizedOTPInputMessagesDirective)(ɵɵdirectiveInject(LocalizationService));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _LocalizedOTPInputMessagesDirective,
    selectors: [["", "kendoOTPInputLocalizedMessages", ""]],
    standalone: true,
    features: [ɵɵProvidersFeature([{
      provide: OTPInputMessages,
      useExisting: forwardRef(() => _LocalizedOTPInputMessagesDirective)
    }]), ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LocalizedOTPInputMessagesDirective, [{
    type: Directive,
    args: [{
      providers: [{
        provide: OTPInputMessages,
        useExisting: forwardRef(() => LocalizedOTPInputMessagesDirective)
      }],
      selector: "[kendoOTPInputLocalizedMessages]",
      standalone: true
    }]
  }], () => [{
    type: LocalizationService
  }], null);
})();
var DEFAULT_SIZE = "medium";
var DEFAULT_ROUNDED = "medium";
var DEFAULT_FILL_MODE = "solid";
var DEFAULT_OTPINPUT_LENGTH = 4;
var OTPInputComponent = class _OTPInputComponent {
  hostElement;
  cdr;
  injector;
  renderer;
  localizationService;
  zone;
  /**
   * Sets the total number of input fields.
   *
   * @default 4
   */
  set length(value) {
    if (value < 1 || this._length === value) {
      return;
    }
    this._length = value;
    this.inputsArray = new Array(this._length);
  }
  get length() {
    return this._length;
  }
  /**
   * Sets the input type.
   *
   *
   * @default 'text'
   */
  type = "text";
  /**
   * Sets whether the input fields are separate or adjacent.
   *
   * @default true
   */
  spacing = true;
  /**
   * Sets the separator between groups of input fields. You can use this only when `groupLength` is set.
   */
  separator;
  /**
   * When `true`, disables the OTPInput.
   *
   * @default false
   */
  disabled = false;
  /**
   * When `true`, sets the OTPInput to read-only mode.
   *
   * @default false
   */
  readonly = false;
  /**
   * Sets the placeholder for the input fields.
   */
  placeholder;
  /**
   * Sets the length of the groups. If you set a number, all groups have the same length. If you set an array, each group can have a different length.
   */
  get groupLength() {
    return this._groupLength;
  }
  set groupLength(length) {
    const isNumber2 = typeof length === "number";
    if (this._groupLength === length || isPresent(length) && (isNumber2 && (length < 1 || length > this.length) || !isNumber2 && !this.isValidGroupArray(length))) {
      return;
    }
    if (!isPresent(length)) {
      this.clearGroups();
    } else if (isNumber2) {
      this.populateGroupArray(length);
    } else {
      this.groupLengthArray = length;
      if (!this.spacing) {
        this.adjacentGroups = this.groupLengthArray;
      }
    }
    this._groupLength = length;
    this.populateSeparatorPositions();
  }
  /**
   * Sets the value of the component. Unfilled input fields are represented with а space.
   */
  get value() {
    return this._value;
  }
  set value(input) {
    const isInvalidInput = this.type === "number" && isPresent(input) && !this.containsDigitsOrSpaces(input);
    if (this._value === input || isInvalidInput) {
      return;
    }
    if (!isPresent(input)) {
      this.clearInputValues();
      this._value = null;
    } else {
      this._value = input.slice(0, this.length);
      if (!this.inputFieldValueChanged) {
        this.fillInputs(input, 0, true);
      }
    }
    if (this.inputAttributes) {
      this.setInputAttributes();
    } else {
      this.setDefaultAttributes();
    }
  }
  /**
   * Sets the padding of the input fields.
   *
   * @default 'medium'
   */
  set size(size) {
    const newSize = size || DEFAULT_SIZE;
    const elem = this.hostElement.nativeElement;
    this.renderer.removeClass(elem, `k-otp-${SIZE_MAP[this._size]}`);
    this.renderer.addClass(elem, `k-otp-${SIZE_MAP[newSize]}`);
    this._size = newSize;
  }
  get size() {
    return this._size;
  }
  /**
   * Sets the border radius of the OTP Input.
   *
   * @default 'medium'
   */
  set rounded(rounded) {
    this._rounded = rounded || DEFAULT_ROUNDED;
  }
  get rounded() {
    return this._rounded;
  }
  /**
   * Sets the background and border styles of the OTP Input.
   *
   * @default 'solid'
   */
  set fillMode(fillMode) {
    const newFillMode = fillMode || DEFAULT_FILL_MODE;
    this.setGroupFillMode(newFillMode, this._fillMode);
    this._fillMode = newFillMode;
  }
  get fillMode() {
    return this._fillMode;
  }
  /**
   * Sets the HTML attributes of the inner input element. You cannot change attributes that are required for the component to work.
   */
  set inputAttributes(attributes) {
    this._inputAttributes = attributes;
    this.parsedAttributes = this.inputAttributes ? __spreadValues(__spreadValues({}, this.defaultAttributes), this.inputAttributes) : this.inputAttributes;
    this.setInputAttributes();
  }
  get inputAttributes() {
    return this._inputAttributes;
  }
  /**
   * Fires when the user changes the value.
   *
   * This event does not fire when you change the value programmatically or through form bindings.
   */
  valueChange = new EventEmitter();
  /**
   * Fires when the user focuses the OTP Input.
   */
  onFocus = new EventEmitter();
  /**
   * Fires when the user blurs the OTP Input.
   */
  onBlur = new EventEmitter();
  wrapperClass = true;
  get invalidClass() {
    return this.isControlInvalid;
  }
  direction;
  role = "group";
  /**
   * @hidden
   */
  inputFields;
  /**
   * @hidden
   */
  set inputGroups(elements) {
    this._inputGroups = elements;
    this.setGroupFillMode(this.fillMode);
  }
  get inputGroups() {
    return this._inputGroups;
  }
  /**
   * @hidden
   */
  groupLengthArray;
  /**
   * @hidden
   */
  inputsArray;
  /**
   * @hidden
   */
  inputsValues = [].constructor(DEFAULT_OTPINPUT_LENGTH);
  /**
   * @hidden
   */
  adjacentGroups;
  _length = DEFAULT_OTPINPUT_LENGTH;
  _groupLength;
  _inputGroups;
  separatorPositions = /* @__PURE__ */ new Set();
  _value = null;
  _size = DEFAULT_SIZE;
  _rounded = DEFAULT_ROUNDED;
  _fillMode = DEFAULT_FILL_MODE;
  _isFocused = false;
  focusChangedProgrammatically = false;
  inputFieldValueChanged = false;
  focusedInput;
  _inputAttributes;
  parsedAttributes = {};
  get defaultAttributes() {
    return {
      autocomplete: "off"
    };
  }
  subscriptions;
  ngChange = (_) => {
  };
  ngTouched = () => {
  };
  constructor(hostElement, cdr, injector, renderer, localizationService, zone) {
    this.hostElement = hostElement;
    this.cdr = cdr;
    this.injector = injector;
    this.renderer = renderer;
    this.localizationService = localizationService;
    this.zone = zone;
    this.direction = localizationService.rtl ? "rtl" : "ltr";
  }
  ngOnInit() {
    this.inputsArray = Array.from({
      length: this._length
    });
    this.subscriptions = this.localizationService.changes.subscribe(({
      rtl
    }) => {
      this.direction = rtl ? "rtl" : "ltr";
    });
    this.zone.runOutsideAngular(() => {
      this.subscriptions.add(this.renderer.listen(this.hostElement.nativeElement, "paste", this.handlePaste.bind(this)));
      this.subscriptions.add(this.renderer.listen(this.hostElement.nativeElement, "keydown", this.handleKeydown.bind(this)));
    });
  }
  ngAfterViewInit() {
    this.subscriptions.add(this.inputFields.changes.subscribe(this.handleInputChanges.bind(this)));
    this.handleInputChanges();
    this.renderer.addClass(this.hostElement.nativeElement, `k-otp-${SIZE_MAP[this._size]}`);
    this.setGroupFillMode(this.fillMode);
    this.zone.onStable.pipe(take(1)).subscribe(() => {
      this.fillInputs(this.value);
    });
  }
  ngOnChanges(changes) {
    if (changes.length) {
      if (typeof this.groupLength === "number") {
        this.populateGroupArray(this.groupLength);
      }
      this.populateSeparatorPositions();
    }
    if (changes.spacing) {
      if (this.spacing === true) {
        this.adjacentGroups = null;
      } else {
        this.adjacentGroups = this.groupLengthArray ?? [this.length];
      }
    }
    if (changes.type && this.type === "number") {
      if (isPresent(this.value) && !this.containsDigitsOrSpaces(this.value)) {
        this.value = null;
        this.zone.runOutsideAngular(() => setTimeout(() => this.zone.run(() => {
          this.ngChange(null);
          this.cdr.markForCheck();
        })));
      }
    }
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
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
  writeValue(value) {
    this.value = value;
    this.cdr.markForCheck();
  }
  /**
   * @hidden
   */
  registerOnChange(fn) {
    this.ngChange = fn;
  }
  /**
   * @hidden
   */
  registerOnTouched(fn) {
    this.ngTouched = fn;
  }
  /**
   * @hidden
   */
  setDisabledState(isDisabled) {
    this.cdr.markForCheck();
    this.disabled = isDisabled;
  }
  /**
   * @hidden
   */
  get isControlInvalid() {
    return this.formControl?.touched && this.formControl.invalid;
  }
  /**
   * @hidden
   */
  get isFocused() {
    return this._isFocused;
  }
  /**
   * @hidden
   */
  set isFocused(value) {
    if (this._isFocused !== value && this.hostElement) {
      this._isFocused = value;
    }
  }
  /**
   * Returns `true` if the component has groups.
   *
   * @hidden
   */
  get hasGroups() {
    if (!this.spacing && isPresent(this.groupLength)) {
      return true;
    }
  }
  /**
   * @hidden
   */
  showGroupSeparator(index) {
    return this.groupLengthArray && index < this.groupLengthArray.length - 1;
  }
  /**
   * @hidden
   */
  showSeparator(index) {
    return this.groupLength ? this.separatorPositions.has(index) : false;
  }
  /**
   * @hidden
   */
  handleValueChange(index, groupIndex) {
    this.inputFieldValueChanged = true;
    if (groupIndex) {
      index = this.getIndexByGroup(groupIndex, index);
    }
    let newValue = "";
    this.inputFields.forEach((input) => newValue = newValue.concat(input.value?.toString() || " "));
    if (!areSame(this.value, newValue)) {
      this.zone.run(() => {
        this.value = newValue;
        this.ngChange(newValue);
        this.valueChange.emit(newValue);
        this.cdr.markForCheck();
      });
    }
    this.inputFieldValueChanged = false;
    if (isPresent(index) && isPresent(this.inputFields?.get(index).value)) {
      this.focusNext();
    }
  }
  /**
   * @hidden
   */
  handleInputFocus(index, groupIndex) {
    if (this.focusChangedProgrammatically) {
      return;
    }
    if (groupIndex) {
      index = this.getIndexByGroup(groupIndex, index);
    }
    this.focusedInput = index;
  }
  /**
   * @hidden
   */
  handleInput(event, index, groupIndex) {
    if (this.type === "number" && !this.isValidNumber(event?.data)) {
      const inputIndex = groupIndex ? this.getIndexByGroup(groupIndex, index) : index;
      const textbox = this.inputFields.get(inputIndex);
      if (this.value && this.isValidNumber(this.value[inputIndex])) {
        textbox.value = this.value[inputIndex];
      } else {
        textbox.value = null;
      }
      this.showInvalidInput(inputIndex);
      return;
    }
    this.handleValueChange(index, groupIndex);
  }
  /**
   * @hidden
   */
  fillInputs(text, start = 0, replaceLast = false) {
    if (!isPresent(text)) {
      return;
    }
    let charCounter = 0;
    this.inputFields?.forEach((otpInput, i) => {
      if (i < start) {
        return;
      }
      if (charCounter < text.length) {
        if (text[charCounter] === " ") {
          otpInput.value = null;
        } else {
          otpInput.value = text[charCounter];
        }
        charCounter++;
      } else if (replaceLast) {
        otpInput.value = null;
      }
    });
  }
  /**
   * Focuses the OTP Input at the specified index provided as an argument.
   *
   * @param index The index of the input to focus.
   */
  focus(index) {
    if (!this.inputFields || index < 0 || index >= this.length) {
      return;
    }
    this.focusChangedProgrammatically = true;
    this.isFocused = true;
    this.inputFields.get(index || 0).focus();
    this.focusedInput = index || 0;
    this.focusChangedProgrammatically = false;
  }
  /**
   * Blurs the OTP Input.
   */
  blur() {
    this.focusChangedProgrammatically = true;
    const isFocusedElement = this.hostElement.nativeElement.querySelector(":focus");
    if (isFocusedElement) {
      isFocusedElement.blur();
    }
    this.isFocused = false;
    this.focusChangedProgrammatically = false;
  }
  /**
   * @hidden
   */
  handleFocus() {
    this.zone.run(() => {
      if (!this.focusChangedProgrammatically && hasObservers(this.onFocus)) {
        this.onFocus.emit();
      }
      this.isFocused = true;
    });
  }
  /**
   * @hidden
   */
  handleBlur() {
    this.zone.run(() => {
      if (!this.focusChangedProgrammatically) {
        this.ngTouched();
        this.onBlur.emit();
      }
      this.isFocused = false;
    });
  }
  getIndexByGroup(groupIndex, itemIndex) {
    return this.groupLengthArray.slice(0, groupIndex).reduce((sum, current) => sum + current, 0) + itemIndex;
  }
  focusNext() {
    if (!this.inputFields || this.focusedInput === this.length - 1) {
      return;
    }
    this.focusChangedProgrammatically = true;
    this.isFocused = true;
    this.inputFields.get(this.focusedInput).blur();
    this.inputFields.get(this.focusedInput + 1).focus();
    this.focusedInput++;
    this.focusChangedProgrammatically = false;
  }
  focusPrevious() {
    if (!this.inputFields || this.focusedInput === 0) {
      return;
    }
    this.focusChangedProgrammatically = true;
    this.isFocused = true;
    this.inputFields.get(this.focusedInput).blur();
    this.inputFields.get(this.focusedInput - 1).focus();
    this.focusedInput--;
    this.focusChangedProgrammatically = false;
  }
  handlePaste(event) {
    event.preventDefault();
    const text = event.clipboardData.getData("text").trim();
    if (text === "") {
      return;
    }
    if (this.type === "number" && !this.isValidNumber(text)) {
      this.showInvalidInput(this.focusedInput);
      return;
    }
    this.inputFieldValueChanged = true;
    this.fillInputs(text, this.focusedInput);
    this.handleValueChange();
    this.inputFieldValueChanged = false;
    const focusedInput = this.focusedInput + text.length < this.inputFields?.length ? this.focusedInput + text.length : this.inputFields.length - 1;
    this.inputFields.get(this.focusedInput).blur();
    this.focusedInput = focusedInput;
    this.inputFields.get(this.focusedInput).focus();
  }
  handleKeydown(event) {
    const code = normalizeKeys(event);
    if (this.readonly) {
      const isCopyCommand = (event.ctrlKey || event.metaKey) && code === Keys.KeyC;
      if (!(code === Keys.Tab || isCopyCommand)) {
        event.preventDefault();
        return;
      }
    }
    switch (code) {
      case Keys.ArrowRight:
        event.preventDefault();
        this.direction === "ltr" ? this.focusNext() : this.focusPrevious();
        break;
      case Keys.ArrowLeft:
        event.preventDefault();
        this.direction === "ltr" ? this.focusPrevious() : this.focusNext();
        break;
      case Keys.Backspace:
        event.preventDefault();
        this.inputFields.get(this.focusedInput).value = null;
        this.handleValueChange();
        this.focusPrevious();
        break;
      case Keys.Delete:
        event.preventDefault();
        this.inputFields.get(this.focusedInput).value = null;
        this.handleValueChange();
        break;
      default:
        break;
    }
  }
  isValidGroupArray(groups) {
    if (!isPresent(groups)) {
      return;
    }
    const sum = groups.reduce((sum2, current) => sum2 + current, 0);
    return sum === this.length;
  }
  populateGroupArray(length) {
    const groupsCount = Math.floor(this.length / length);
    const remainder2 = this.length % length;
    const result = Array(groupsCount).fill(length);
    if (remainder2 > 0) {
      result.push(remainder2);
    }
    this.groupLengthArray = [...result];
    if (!this.spacing) {
      this.adjacentGroups = [...this.groupLengthArray];
    }
  }
  populateSeparatorPositions() {
    let itemIndex = 0;
    this.separatorPositions.clear();
    if (!isPresent(this.groupLengthArray)) {
      return;
    }
    for (let i = 0; i < this.groupLengthArray.length - 1; i++) {
      itemIndex += this.groupLengthArray[i];
      this.separatorPositions.add(itemIndex - 1);
    }
  }
  clearGroups() {
    this.groupLengthArray = null;
    if (!this.spacing) {
      this.adjacentGroups = [this.length];
    } else {
      this.adjacentGroups = null;
    }
    this.separatorPositions.clear();
  }
  clearInputValues() {
    this.inputFields?.forEach((input) => input.value = null);
  }
  handleInputChanges() {
    this.zone.onStable.pipe(take(1)).subscribe(() => {
      this.fillInputs(this.value?.trim());
      if (this.inputAttributes) {
        this.setInputAttributes();
      } else {
        this.setDefaultAttributes();
      }
      this.cdr.detectChanges();
    });
  }
  setGroupFillMode(fillMode, previousFillMode) {
    this.inputGroups?.forEach((element) => {
      if (previousFillMode !== "none") {
        this.renderer.removeClass(element.nativeElement, `k-input-group-${previousFillMode}`);
      }
      if (fillMode !== "none") {
        this.renderer.addClass(element.nativeElement, `k-input-group-${fillMode}`);
      }
    });
  }
  setInputAttributes() {
    this.inputFields?.forEach((input, index) => {
      if (!this.parsedAttributes || !this.parsedAttributes?.["aria-label"]) {
        input.inputAttributes = __spreadProps(__spreadValues({}, this.parsedAttributes), {
          "aria-label": this.ariaLabel(index)
        });
      } else {
        input.inputAttributes = this.parsedAttributes;
      }
    });
  }
  setDefaultAttributes() {
    this.inputFields?.forEach((input, index) => {
      input.inputAttributes = {
        autocomplete: "off",
        "aria-label": this.ariaLabel(index)
      };
    });
  }
  ariaLabel(index) {
    const localizationMsg = this.localizationService.get("ariaLabel") || "";
    return replaceMessagePlaceholder(replaceMessagePlaceholder(replaceMessagePlaceholder(localizationMsg, "currentInput", (index + 1).toString()), "totalInputs", this.length.toString()), "value", this.value);
  }
  isValidNumber(value) {
    if (!isPresent(value)) {
      return;
    }
    const trimmedValue = value.trim();
    return trimmedValue !== "" && trimmedValue !== "Infinity" && trimmedValue !== "-Infinity" && !isNaN(Number(trimmedValue));
  }
  showInvalidInput(index) {
    const textbox = this.inputFields.get(index);
    const textboxElement = this.inputFields.get(index).hostElement.nativeElement;
    const inputElement = textbox.input.nativeElement;
    this.renderer.addClass(textboxElement, "k-invalid");
    if (textbox.value && this.isValidNumber(textbox.value)) {
      this.zone.onStable.pipe(take(1)).subscribe(() => inputElement.select());
    }
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        if (!this.isControlInvalid && textboxElement) {
          this.renderer.removeClass(textboxElement, "k-invalid");
        }
      }, 300);
    });
  }
  containsDigitsOrSpaces(value) {
    const isDigitOrSpace = (char) => char == +char || char === " ";
    for (let i = 0; i < value.length; i++) {
      if (!isDigitOrSpace(value[i])) {
        return false;
      }
    }
    return true;
  }
  static ɵfac = function OTPInputComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OTPInputComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _OTPInputComponent,
    selectors: [["kendo-otpinput"]],
    viewQuery: function OTPInputComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(TextBoxComponent, 5);
        ɵɵviewQuery(_c69, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.inputFields = _t);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.inputGroups = _t);
      }
    },
    hostVars: 6,
    hostBindings: function OTPInputComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("dir", ctx.direction)("role", ctx.role);
        ɵɵclassProp("k-otp", ctx.wrapperClass)("k-invalid", ctx.invalidClass);
      }
    },
    inputs: {
      length: "length",
      type: "type",
      spacing: "spacing",
      separator: "separator",
      disabled: "disabled",
      readonly: "readonly",
      placeholder: "placeholder",
      groupLength: "groupLength",
      value: "value",
      size: "size",
      rounded: "rounded",
      fillMode: "fillMode",
      inputAttributes: "inputAttributes"
    },
    outputs: {
      valueChange: "valueChange",
      onFocus: "focus",
      onBlur: "blur"
    },
    exportAs: ["kendoOTPInput"],
    standalone: true,
    features: [ɵɵProvidersFeature([LocalizationService, {
      provide: L10N_PREFIX,
      useValue: "kendo.otpinput"
    }, {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _OTPInputComponent),
      multi: true
    }, {
      provide: KendoInput,
      useExisting: forwardRef(() => _OTPInputComponent)
    }]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    decls: 6,
    vars: 4,
    consts: () => {
      let i18n_82;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_82 = goog.getMsg("{$interpolation}", {
          "interpolation": "�0�"
        }, {
          original_code: {
            "interpolation": "{{ 'Input {currentInput} of {totalInputs}, current value {value}' }}"
          }
        });
        i18n_82 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2022_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_82;
      } else {
        i18n_82 = $localize`:kendo.otpinput.ariaLabel|The value of the aria-label attribute of the input fields.:${"�0�"}:INTERPOLATION:`;
      }
      return [["inputGroup", ""], ["ariaLabel", i18n_82], ["kendoOTPInputLocalizedMessages", "", 6, "ariaLabel"], ["kendoInputSharedEvents", "", 3, "isFocusedChange", "handleBlur", "onFocus", "hostElement", "isFocused"], [1, "k-otp-input", 3, "focus", "input", "selectOnFocus", "maxlength", "type", "placeholder", "size", "rounded", "fillMode", "disabled", "readonly"], [3, "separator"], [1, "k-input-group"], [1, "k-otp-input", 3, "k-invalid", "selectOnFocus", "maxlength", "type", "placeholder", "size", "rounded", "fillMode", "disabled", "readonly"]];
    },
    template: function OTPInputComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementContainerStart(0, 2);
        ɵɵi18nAttributes(1, 1);
        ɵɵelementContainerEnd();
        ɵɵelementContainerStart(2, 3);
        ɵɵtwoWayListener("isFocusedChange", function OTPInputComponent_Template_ng_container_isFocusedChange_2_listener($event) {
          ɵɵtwoWayBindingSet(ctx.isFocused, $event) || (ctx.isFocused = $event);
          return $event;
        });
        ɵɵlistener("handleBlur", function OTPInputComponent_Template_ng_container_handleBlur_2_listener() {
          return ctx.handleBlur();
        })("onFocus", function OTPInputComponent_Template_ng_container_onFocus_2_listener() {
          return ctx.handleFocus();
        });
        ɵɵtemplate(3, OTPInputComponent_Conditional_3_Template, 2, 0)(4, OTPInputComponent_Conditional_4_Template, 2, 0);
        ɵɵelementContainer(5);
        ɵɵelementContainerEnd();
      }
      if (rf & 2) {
        ɵɵi18nExp("Input {currentInput} of {totalInputs}, current value {value}");
        ɵɵi18nApply(1);
        ɵɵadvance(2);
        ɵɵproperty("hostElement", ctx.hostElement);
        ɵɵtwoWayProperty("isFocused", ctx.isFocused);
        ɵɵadvance();
        ɵɵconditional(ctx.spacing ? 3 : 4);
      }
    },
    dependencies: [SharedInputEventsDirective, TextBoxComponent, OTPInputSeparatorComponent, LocalizedOTPInputMessagesDirective],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OTPInputComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoOTPInput",
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.otpinput"
      }, {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => OTPInputComponent),
        multi: true
      }, {
        provide: KendoInput,
        useExisting: forwardRef(() => OTPInputComponent)
      }],
      selector: "kendo-otpinput",
      template: `
        <ng-container kendoOTPInputLocalizedMessages
          i18n-ariaLabel="kendo.otpinput.ariaLabel|The value of the aria-label attribute of the input fields."
          ariaLabel="{{ 'Input {currentInput} of {totalInputs}, current value {value}' }}"
        ></ng-container>
        <ng-container
          kendoInputSharedEvents
          [hostElement]="hostElement"
          [(isFocused)]="isFocused"
          (handleBlur)="handleBlur()"
          (onFocus)="handleFocus()"
          >
          @if (spacing) {
            @for (input of inputsArray; track input; let i = $index) {
              <kendo-textbox
                class="k-otp-input"
                [class.k-invalid]="isControlInvalid"
                [selectOnFocus]="true"
                [maxlength]="1"
                [type]="type !== 'number' ? type : null"
                [placeholder]="placeholder"
                [size]="size"
                [rounded]="rounded"
                [fillMode]="fillMode"
                [disabled]="disabled"
                [readonly]="readonly"
                (focus)="handleInputFocus(i)"
                (input)="handleInput($event, i)"
              ></kendo-textbox>
              @if (showSeparator(i)) {
                <kendo-otpinput-separator [separator]="separator"></kendo-otpinput-separator>
              }
            }
          } @else {
            @for (group of adjacentGroups; track group; let i = $index) {
              <div #inputGroup class="k-input-group">
                @for (input of [].constructor(group); track input; let j = $index) {
                  <kendo-textbox
                    class="k-otp-input"
                    [class.k-invalid]="isControlInvalid"
                    [selectOnFocus]="true"
                    [maxlength]="1"
                    [type]="type !== 'number' ? type : null"
                    [placeholder]="placeholder"
                    [size]="size"
                    [rounded]="rounded"
                    [fillMode]="fillMode"
                    [disabled]="disabled"
                    [readonly]="readonly"
                    (focus)="handleInputFocus(j, i)"
                    (input)="handleInput($event, j, i)"
                  ></kendo-textbox>
                }
              </div>
              @if (showGroupSeparator(i)) {
                <kendo-otpinput-separator [separator]="separator"></kendo-otpinput-separator>
              }
            }
          }
          <ng-container>
        `,
      standalone: true,
      imports: [SharedInputEventsDirective, TextBoxComponent, OTPInputSeparatorComponent, LocalizedOTPInputMessagesDirective]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }, {
    type: Injector
  }, {
    type: Renderer2
  }, {
    type: LocalizationService
  }, {
    type: NgZone
  }], {
    length: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    spacing: [{
      type: Input
    }],
    separator: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    readonly: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    groupLength: [{
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
    wrapperClass: [{
      type: HostBinding,
      args: ["class.k-otp"]
    }],
    invalidClass: [{
      type: HostBinding,
      args: ["class.k-invalid"]
    }],
    direction: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    role: [{
      type: HostBinding,
      args: ["attr.role"]
    }],
    inputFields: [{
      type: ViewChildren,
      args: [TextBoxComponent]
    }],
    inputGroups: [{
      type: ViewChildren,
      args: ["inputGroup"]
    }]
  });
})();
var OTPInputCustomMessagesComponent = class _OTPInputCustomMessagesComponent extends OTPInputMessages {
  service;
  constructor(service) {
    super();
    this.service = service;
  }
  get override() {
    return true;
  }
  static ɵfac = function OTPInputCustomMessagesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OTPInputCustomMessagesComponent)(ɵɵdirectiveInject(LocalizationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _OTPInputCustomMessagesComponent,
    selectors: [["kendo-otpinput-messages"]],
    standalone: true,
    features: [ɵɵProvidersFeature([{
      provide: OTPInputMessages,
      useExisting: forwardRef(() => _OTPInputCustomMessagesComponent)
    }]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function OTPInputCustomMessagesComponent_Template(rf, ctx) {
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OTPInputCustomMessagesComponent, [{
    type: Component,
    args: [{
      providers: [{
        provide: OTPInputMessages,
        useExisting: forwardRef(() => OTPInputCustomMessagesComponent)
      }],
      selector: "kendo-otpinput-messages",
      template: ``,
      standalone: true
    }]
  }], () => [{
    type: LocalizationService
  }], null);
})();
var FormComponent = class _FormComponent {
  element;
  cdr;
  formService;
  /**
   * Defines the orientation of the form.
   *
   * @default 'vertical'
   */
  orientation = "vertical";
  /**
   * Defines the number of columns in the form.
   * Can be a number or an array of responsive breakpoints.
   */
  cols;
  /**
   * Defines the gutters for the form.
   * You can specify gutters for rows and columns.
   */
  gutters = __spreadValues({}, DEFAULT_FORM_GUTTERS);
  /**
   * @hidden
   */
  columnsClass = "";
  /**
   * @hidden
   */
  guttersStyle = "";
  /**
   * @hidden
   */
  showLicenseWatermark = false;
  /**
   * @hidden
   */
  licenseMessage;
  get formClass() {
    return "k-form k-form-md";
  }
  get horizontalClass() {
    return this.orientation === "horizontal";
  }
  _formColumnsNumber;
  _formGutters = __spreadValues({}, DEFAULT_FORM_GUTTERS);
  constructor(element, cdr, formService) {
    this.element = element;
    this.cdr = cdr;
    this.formService = formService;
    const isValid = A(packageMetadata);
    this.licenseMessage = getLicenseMessage(packageMetadata);
    this.showLicenseWatermark = shouldShowValidationUI(isValid);
  }
  ngAfterContentInit() {
    if (!isDocumentAvailable()) {
      return;
    }
    this.applyColumns();
    this.applyGutters();
    this.formService.formWidth.next(innerWidth(this.element.nativeElement));
  }
  ngOnChanges(changes) {
    if (!isDocumentAvailable()) {
      return;
    }
    if (changes["cols"]) {
      this.applyColumns();
    }
    if (changes["gutters"]) {
      this.applyGutters();
    }
  }
  /**
   * @hidden
   */
  onResize() {
    this.formService.formWidth.next(innerWidth(this.element.nativeElement));
    const previousColumnsNumber = this._formColumnsNumber;
    const previousGutters = this._formGutters;
    this.applyColumns();
    this.applyGutters();
    if (previousColumnsNumber !== this._formColumnsNumber) {
      this.cdr.detectChanges();
    }
    if (previousGutters?.cols !== this._formGutters?.cols || previousGutters?.rows !== this._formGutters?.rows) {
      this.cdr.detectChanges();
    }
  }
  applyColumns() {
    const containerWidth = innerWidth(this.element.nativeElement);
    this._formColumnsNumber = calculateColumns(this.cols, containerWidth);
    this.updateColumnClasses();
  }
  applyGutters() {
    const containerWidth = innerWidth(this.element.nativeElement);
    this._formGutters = calculateGutters(this.gutters, containerWidth);
    this.updateGutterClasses();
  }
  updateColumnClasses() {
    this.columnsClass = generateColumnClass(this._formColumnsNumber);
  }
  updateGutterClasses() {
    this.guttersStyle = generateGuttersStyling(this._formGutters, __spreadValues({}, DEFAULT_FORM_GUTTERS));
  }
  static ɵfac = function FormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(FormService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _FormComponent,
    selectors: [["form", "kendoForm", ""]],
    hostVars: 4,
    hostBindings: function FormComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassMap(ctx.formClass);
        ɵɵclassProp("k-form-horizontal", ctx.horizontalClass);
      }
    },
    inputs: {
      orientation: "orientation",
      cols: "cols",
      gutters: "gutters"
    },
    exportAs: ["kendoForm"],
    standalone: true,
    features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    attrs: _c71,
    ngContentSelectors: _c58,
    decls: 4,
    vars: 7,
    consts: [[1, "k-form-layout", "k-d-grid", 3, "ngClass", "ngStyle"], [3, "resize"], ["kendoWatermarkOverlay", "", 3, "licenseMessage"]],
    template: function FormComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementStart(0, "div", 0);
        ɵɵprojection(1);
        ɵɵelementEnd();
        ɵɵelementStart(2, "kendo-resize-sensor", 1);
        ɵɵlistener("resize", function FormComponent_Template_kendo_resize_sensor_resize_2_listener() {
          return ctx.onResize();
        });
        ɵɵelementEnd();
        ɵɵtemplate(3, FormComponent_Conditional_3_Template, 1, 1, "div", 2);
      }
      if (rf & 2) {
        ɵɵproperty("ngClass", ɵɵpureFunction1(3, _c72, ctx.columnsClass))("ngStyle", ɵɵpureFunction1(5, _c73, ctx.guttersStyle));
        ɵɵadvance(3);
        ɵɵconditional(ctx.showLicenseWatermark ? 3 : -1);
      }
    },
    dependencies: [NgClass, NgStyle, ResizeSensorComponent, WatermarkOverlayComponent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoForm",
      selector: "form[kendoForm]",
      template: `
        <div class="k-form-layout k-d-grid" [ngClass]="[columnsClass]" [ngStyle]="{ gap: guttersStyle }">
          <ng-content></ng-content>
        </div>
        <kendo-resize-sensor (resize)="onResize()"></kendo-resize-sensor>
        @if (showLicenseWatermark) {
          <div kendoWatermarkOverlay [licenseMessage]="licenseMessage"></div>
        }
        `,
      standalone: true,
      imports: [NgClass, NgStyle, ResizeSensorComponent, WatermarkOverlayComponent]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }, {
    type: FormService
  }], {
    orientation: [{
      type: Input
    }],
    cols: [{
      type: Input
    }],
    gutters: [{
      type: Input
    }],
    formClass: [{
      type: HostBinding,
      args: ["class"]
    }],
    horizontalClass: [{
      type: HostBinding,
      args: ["class.k-form-horizontal"]
    }]
  });
})();
var FormSeparatorComponent = class _FormSeparatorComponent {
  renderer;
  hostElement;
  formService;
  hostClass = true;
  /**
   * Defines the colspan for the separator element related to the parent Form component columns.
   * Can be a number or an array of responsive breakpoints.
   */
  colSpan;
  _formWidth = null;
  _colSpanClass = null;
  _previousColSpan = null;
  subscriptions = new Subscription();
  constructor(renderer, hostElement, formService) {
    this.renderer = renderer;
    this.hostElement = hostElement;
    this.formService = formService;
    A(packageMetadata);
    this.subscriptions.add(this.formService.formWidth.pipe(filter((width) => width !== null)).subscribe((width) => {
      this._formWidth = width;
      this.updateColSpanClass();
    }));
  }
  ngOnChanges(changes) {
    if (changes["colSpan"]) {
      this.updateColSpanClass();
    }
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  updateColSpanClass() {
    const hostElement = this.hostElement.nativeElement;
    const newColSpan = calculateColSpan(this.colSpan, this._formWidth);
    if (newColSpan !== this._previousColSpan) {
      const newClass = generateColSpanClass(newColSpan);
      if (this._colSpanClass) {
        this.renderer.removeClass(hostElement, this._colSpanClass);
      }
      if (newClass) {
        this.renderer.addClass(hostElement, newClass);
      }
      this._colSpanClass = newClass;
      this._previousColSpan = newColSpan;
    }
  }
  static ɵfac = function FormSeparatorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormSeparatorComponent)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(FormService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _FormSeparatorComponent,
    selectors: [["kendo-form-separator"]],
    hostVars: 2,
    hostBindings: function FormSeparatorComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("k-form-separator", ctx.hostClass);
      }
    },
    inputs: {
      colSpan: "colSpan"
    },
    exportAs: ["kendoFormSeparator"],
    standalone: true,
    features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function FormSeparatorComponent_Template(rf, ctx) {
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormSeparatorComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoFormSeparator",
      selector: "kendo-form-separator",
      template: ``,
      standalone: true
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: FormService
  }], {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-form-separator"]
    }],
    colSpan: [{
      type: Input
    }]
  });
})();
var FormFieldSetComponent = class _FormFieldSetComponent {
  elementRef;
  renderer;
  formService;
  cdr;
  formFieldSetClass = true;
  /**
   * Defines the legend for the fieldset.
   */
  legend;
  /**
   * Defines the number of columns of the fieldset.
   * Can be a number or an array of responsive breakpoints.
   */
  cols;
  /**
   * Defines the gutters for the fieldset.
   * You can specify gutters for rows and columns.
   */
  gutters = __spreadValues({}, DEFAULT_FORMFIELDSET_GUTTERS);
  /**
   * Defines the colspan for the fieldset related to the parent Form component columns.
   * Can be a number or an array of responsive breakpoints.
   */
  colSpan;
  /**
   * @hidden
   */
  columnsClass = "";
  /**
   * @hidden
   */
  guttersStyle = "";
  _formColumnsNumber;
  _colSpanClass = null;
  _formWidth = null;
  _formGutters = __spreadValues({}, DEFAULT_FORMFIELDSET_GUTTERS);
  _previousColSpan = null;
  _previousCols = null;
  _previousGutters;
  subs = new Subscription();
  constructor(elementRef, renderer, formService, cdr) {
    this.elementRef = elementRef;
    this.renderer = renderer;
    this.formService = formService;
    this.cdr = cdr;
    A(packageMetadata);
  }
  ngOnInit() {
    this.subs.add(this.formService.formWidth.pipe(filter((width) => width !== null)).subscribe((width) => {
      this._formWidth = width;
      this.applyColumns();
      this.applyGutters();
      this.updateColSpanClass();
    }));
  }
  ngOnChanges(changes) {
    if (changes["colSpan"]) {
      this.updateColSpanClass();
    }
    if (changes["cols"]) {
      this.applyColumns();
    }
    if (changes["gutters"]) {
      this.applyGutters();
    }
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
  applyColumns() {
    const containerWidth = this._formWidth;
    const newColumnsNumber = calculateColumns(this.cols, containerWidth);
    if (newColumnsNumber !== this._previousCols) {
      this._formColumnsNumber = newColumnsNumber;
      this.updateColumnClasses();
      this._previousCols = newColumnsNumber;
    }
  }
  applyGutters() {
    const containerWidth = this._formWidth;
    const newGutters = calculateGutters(this.gutters, containerWidth);
    if (newGutters && (newGutters.cols !== this._previousGutters?.cols || newGutters.rows !== this._previousGutters?.rows)) {
      this._formGutters = newGutters;
      this.updateGutterClasses();
      this._previousGutters = newGutters;
    }
  }
  updateColumnClasses() {
    this.columnsClass = generateColumnClass(this._formColumnsNumber);
    this.cdr.detectChanges();
  }
  updateGutterClasses() {
    this.guttersStyle = generateGuttersStyling(this._formGutters, __spreadValues({}, DEFAULT_FORMFIELDSET_GUTTERS));
    this.cdr.detectChanges();
  }
  updateColSpanClass() {
    const hostElement = this.elementRef.nativeElement;
    const newColSpan = calculateColSpan(this.colSpan, this._formWidth);
    if (newColSpan !== this._previousColSpan) {
      const newClass = generateColSpanClass(newColSpan);
      if (this._colSpanClass) {
        this.renderer.removeClass(hostElement, this._colSpanClass);
      }
      if (newClass) {
        this.renderer.addClass(hostElement, newClass);
      }
      this._colSpanClass = newClass;
      this._previousColSpan = newColSpan;
      this.cdr.detectChanges();
    }
  }
  static ɵfac = function FormFieldSetComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormFieldSetComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(FormService), ɵɵdirectiveInject(ChangeDetectorRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _FormFieldSetComponent,
    selectors: [["fieldset", "kendoFormFieldSet", ""]],
    hostVars: 2,
    hostBindings: function FormFieldSetComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("k-form-fieldset", ctx.formFieldSetClass);
      }
    },
    inputs: {
      legend: "legend",
      cols: "cols",
      gutters: "gutters",
      colSpan: "colSpan"
    },
    exportAs: ["kendoFormFieldSet"],
    standalone: true,
    features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    attrs: _c74,
    ngContentSelectors: _c58,
    decls: 3,
    vars: 7,
    consts: [[1, "k-form-legend"], [1, "k-form-layout", "k-d-grid", 3, "ngClass", "ngStyle"]],
    template: function FormFieldSetComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵtemplate(0, FormFieldSetComponent_Conditional_0_Template, 2, 1, "legend", 0);
        ɵɵelementStart(1, "div", 1);
        ɵɵprojection(2);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵconditional(ctx.legend ? 0 : -1);
        ɵɵadvance();
        ɵɵproperty("ngClass", ɵɵpureFunction1(3, _c72, ctx.columnsClass))("ngStyle", ɵɵpureFunction1(5, _c75, ctx.guttersStyle));
      }
    },
    dependencies: [NgClass, NgStyle],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormFieldSetComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoFormFieldSet",
      selector: "fieldset[kendoFormFieldSet]",
      template: `
        @if (legend) {
          <legend class="k-form-legend">
            {{ legend }}
          </legend>
        }
        <div class="k-form-layout k-d-grid" [ngClass]="[columnsClass]" [ngStyle]="{'gap': guttersStyle}">
          <ng-content></ng-content>
        </div>
        `,
      standalone: true,
      imports: [NgClass, NgStyle]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: FormService
  }, {
    type: ChangeDetectorRef
  }], {
    formFieldSetClass: [{
      type: HostBinding,
      args: ["class.k-form-fieldset"]
    }],
    legend: [{
      type: Input
    }],
    cols: [{
      type: Input
    }],
    gutters: [{
      type: Input
    }],
    colSpan: [{
      type: Input
    }]
  });
})();
var KENDO_TEXTBOX = [TextBoxDirective, TextBoxComponent, InputSeparatorComponent, InputSpacerComponent, TextBoxSuffixTemplateDirective, TextBoxPrefixTemplateDirective, TextBoxCustomMessagesComponent, PrefixTemplateDirective, SuffixTemplateDirective, SeparatorComponent];
var KENDO_NUMERICTEXTBOX = [NumericTextBoxComponent, NumericTextBoxCustomMessagesComponent, PrefixTemplateDirective, SuffixTemplateDirective, SeparatorComponent];
var KENDO_MASKEDTEXTBOX = [MaskedTextBoxComponent, PrefixTemplateDirective, SuffixTemplateDirective, SeparatorComponent];
var KENDO_OTPINPUT = [OTPInputComponent, OTPInputCustomMessagesComponent];
var KENDO_TEXTAREA = [TextAreaComponent, TextAreaDirective, TextAreaPrefixComponent, TextAreaSuffixComponent, SeparatorComponent];
var KENDO_CHECKBOX = [CheckBoxComponent, CheckBoxDirective];
var KENDO_RADIOBUTTON = [RadioButtonComponent, RadioButtonDirective];
var KENDO_SWITCH = [SwitchComponent, SwitchCustomMessagesComponent];
var KENDO_FORMFIELD = [FormFieldComponent, HintComponent, ErrorComponent];
var KENDO_FORM = [FormComponent, FormSeparatorComponent, FormFieldSetComponent, ...KENDO_FORMFIELD];
var KENDO_SLIDER = [SliderComponent, SliderCustomMessagesComponent, LabelTemplateDirective];
var KENDO_RANGESLIDER = [RangeSliderComponent, RangeSliderCustomMessagesComponent, LabelTemplateDirective];
var KENDO_RATING = [RatingComponent, RatingItemTemplateDirective, RatingHoveredItemTemplateDirective, RatingSelectedItemTemplateDirective];
var KENDO_SIGNATURE = [SignatureComponent, SignatureCustomMessagesComponent];
var KENDO_COLORPICKER = [ColorPickerComponent, ColorPickerCustomMessagesComponent];
var KENDO_FLATCOLORPICKER = [FlatColorPickerComponent, ColorPickerCustomMessagesComponent];
var KENDO_COLORPALETTE = [ColorPaletteComponent, ColorPickerCustomMessagesComponent];
var KENDO_COLORGRADIENT = [ColorGradientComponent, ColorPickerCustomMessagesComponent];
var KENDO_INPUTS = [...KENDO_TEXTBOX, ...KENDO_NUMERICTEXTBOX, ...KENDO_MASKEDTEXTBOX, ...KENDO_TEXTAREA, ...KENDO_CHECKBOX, ...KENDO_RADIOBUTTON, ...KENDO_SWITCH, ...KENDO_FORM, ...KENDO_FORMFIELD, ...KENDO_SLIDER, ...KENDO_RANGESLIDER, ...KENDO_RATING, ...KENDO_SIGNATURE, ...KENDO_COLORPICKER, ...KENDO_FLATCOLORPICKER, ...KENDO_COLORGRADIENT, ...KENDO_COLORPALETTE, ...KENDO_OTPINPUT];
var InputsModule = class _InputsModule {
  static ɵfac = function InputsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InputsModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _InputsModule,
    imports: [TextBoxDirective, TextBoxComponent, InputSeparatorComponent, InputSpacerComponent, TextBoxSuffixTemplateDirective, TextBoxPrefixTemplateDirective, TextBoxCustomMessagesComponent, PrefixTemplateDirective, SuffixTemplateDirective, SeparatorComponent, NumericTextBoxComponent, NumericTextBoxCustomMessagesComponent, PrefixTemplateDirective, SuffixTemplateDirective, SeparatorComponent, MaskedTextBoxComponent, PrefixTemplateDirective, SuffixTemplateDirective, SeparatorComponent, TextAreaComponent, TextAreaDirective, TextAreaPrefixComponent, TextAreaSuffixComponent, SeparatorComponent, CheckBoxComponent, CheckBoxDirective, RadioButtonComponent, RadioButtonDirective, SwitchComponent, SwitchCustomMessagesComponent, FormComponent, FormSeparatorComponent, FormFieldSetComponent, FormFieldComponent, HintComponent, ErrorComponent, FormFieldComponent, HintComponent, ErrorComponent, SliderComponent, SliderCustomMessagesComponent, LabelTemplateDirective, RangeSliderComponent, RangeSliderCustomMessagesComponent, LabelTemplateDirective, RatingComponent, RatingItemTemplateDirective, RatingHoveredItemTemplateDirective, RatingSelectedItemTemplateDirective, SignatureComponent, SignatureCustomMessagesComponent, ColorPickerComponent, ColorPickerCustomMessagesComponent, FlatColorPickerComponent, ColorPickerCustomMessagesComponent, ColorGradientComponent, ColorPickerCustomMessagesComponent, ColorPaletteComponent, ColorPickerCustomMessagesComponent, OTPInputComponent, OTPInputCustomMessagesComponent, PrefixTemplateDirective, SuffixTemplateDirective, SeparatorComponent],
    exports: [TextBoxDirective, TextBoxComponent, InputSeparatorComponent, InputSpacerComponent, TextBoxSuffixTemplateDirective, TextBoxPrefixTemplateDirective, TextBoxCustomMessagesComponent, PrefixTemplateDirective, SuffixTemplateDirective, SeparatorComponent, NumericTextBoxComponent, NumericTextBoxCustomMessagesComponent, PrefixTemplateDirective, SuffixTemplateDirective, SeparatorComponent, MaskedTextBoxComponent, PrefixTemplateDirective, SuffixTemplateDirective, SeparatorComponent, TextAreaComponent, TextAreaDirective, TextAreaPrefixComponent, TextAreaSuffixComponent, SeparatorComponent, CheckBoxComponent, CheckBoxDirective, RadioButtonComponent, RadioButtonDirective, SwitchComponent, SwitchCustomMessagesComponent, FormComponent, FormSeparatorComponent, FormFieldSetComponent, FormFieldComponent, HintComponent, ErrorComponent, FormFieldComponent, HintComponent, ErrorComponent, SliderComponent, SliderCustomMessagesComponent, LabelTemplateDirective, RangeSliderComponent, RangeSliderCustomMessagesComponent, LabelTemplateDirective, RatingComponent, RatingItemTemplateDirective, RatingHoveredItemTemplateDirective, RatingSelectedItemTemplateDirective, SignatureComponent, SignatureCustomMessagesComponent, ColorPickerComponent, ColorPickerCustomMessagesComponent, FlatColorPickerComponent, ColorPickerCustomMessagesComponent, ColorGradientComponent, ColorPickerCustomMessagesComponent, ColorPaletteComponent, ColorPickerCustomMessagesComponent, OTPInputComponent, OTPInputCustomMessagesComponent, PrefixTemplateDirective, SuffixTemplateDirective, SeparatorComponent]
  });
  static ɵinj = ɵɵdefineInjector({
    providers: [IconsService, PopupService, ResizeBatchService, DialogContainerService, DialogService, WindowService, WindowContainerService, AdaptiveService],
    imports: [TextBoxComponent, SeparatorComponent, NumericTextBoxComponent, SeparatorComponent, SeparatorComponent, SeparatorComponent, FormComponent, SliderComponent, RangeSliderComponent, RatingComponent, SignatureComponent, ColorPickerComponent, FlatColorPickerComponent, ColorGradientComponent, OTPInputComponent, SeparatorComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputsModule, [{
    type: NgModule,
    args: [{
      imports: [...KENDO_INPUTS, ...KENDO_ADORNMENTS],
      exports: [...KENDO_INPUTS, ...KENDO_ADORNMENTS],
      providers: [IconsService, PopupService, ResizeBatchService, DialogContainerService, DialogService, WindowService, WindowContainerService, AdaptiveService]
    }]
  }], null, null);
})();
var SliderModule = class _SliderModule {
  static ɵfac = function SliderModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SliderModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _SliderModule,
    imports: [SliderComponent, SliderCustomMessagesComponent, LabelTemplateDirective],
    exports: [SliderComponent, SliderCustomMessagesComponent, LabelTemplateDirective]
  });
  static ɵinj = ɵɵdefineInjector({
    providers: [IconsService, PopupService, ResizeBatchService],
    imports: [SliderComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SliderModule, [{
    type: NgModule,
    args: [{
      imports: [...KENDO_SLIDER],
      exports: [...KENDO_SLIDER],
      providers: [IconsService, PopupService, ResizeBatchService]
    }]
  }], null, null);
})();
var RangeSliderModule = class _RangeSliderModule {
  static ɵfac = function RangeSliderModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RangeSliderModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _RangeSliderModule,
    imports: [RangeSliderComponent, RangeSliderCustomMessagesComponent, LabelTemplateDirective],
    exports: [RangeSliderComponent, RangeSliderCustomMessagesComponent, LabelTemplateDirective]
  });
  static ɵinj = ɵɵdefineInjector({
    providers: [ResizeBatchService],
    imports: [RangeSliderComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RangeSliderModule, [{
    type: NgModule,
    args: [{
      imports: [...KENDO_RANGESLIDER],
      exports: [...KENDO_RANGESLIDER],
      providers: [ResizeBatchService]
    }]
  }], null, null);
})();
var SwitchModule = class _SwitchModule {
  static ɵfac = function SwitchModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SwitchModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _SwitchModule,
    imports: [SwitchComponent, SwitchCustomMessagesComponent],
    exports: [SwitchComponent, SwitchCustomMessagesComponent]
  });
  static ɵinj = ɵɵdefineInjector({
    providers: [ResizeBatchService]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SwitchModule, [{
    type: NgModule,
    args: [{
      imports: [...KENDO_SWITCH],
      exports: [...KENDO_SWITCH],
      providers: [ResizeBatchService]
    }]
  }], null, null);
})();
var OTPInputModule = class _OTPInputModule {
  static ɵfac = function OTPInputModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OTPInputModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _OTPInputModule,
    imports: [OTPInputComponent, OTPInputCustomMessagesComponent],
    exports: [OTPInputComponent, OTPInputCustomMessagesComponent]
  });
  static ɵinj = ɵɵdefineInjector({
    providers: [IconsService],
    imports: [OTPInputComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OTPInputModule, [{
    type: NgModule,
    args: [{
      imports: [...KENDO_OTPINPUT],
      exports: [...KENDO_OTPINPUT],
      providers: [IconsService]
    }]
  }], null, null);
})();
var NumericTextBoxModule = class _NumericTextBoxModule {
  static ɵfac = function NumericTextBoxModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NumericTextBoxModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _NumericTextBoxModule,
    imports: [NumericTextBoxComponent, NumericTextBoxCustomMessagesComponent, PrefixTemplateDirective, SuffixTemplateDirective, SeparatorComponent, PrefixTemplateDirective, SuffixTemplateDirective, SeparatorComponent],
    exports: [NumericTextBoxComponent, NumericTextBoxCustomMessagesComponent, PrefixTemplateDirective, SuffixTemplateDirective, SeparatorComponent, PrefixTemplateDirective, SuffixTemplateDirective, SeparatorComponent]
  });
  static ɵinj = ɵɵdefineInjector({
    providers: [IconsService],
    imports: [NumericTextBoxComponent, SeparatorComponent, SeparatorComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NumericTextBoxModule, [{
    type: NgModule,
    args: [{
      imports: [...KENDO_NUMERICTEXTBOX, ...KENDO_ADORNMENTS],
      exports: [...KENDO_NUMERICTEXTBOX, ...KENDO_ADORNMENTS],
      providers: [IconsService]
    }]
  }], null, null);
})();
var MaskedTextBoxModule = class _MaskedTextBoxModule {
  static ɵfac = function MaskedTextBoxModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MaskedTextBoxModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _MaskedTextBoxModule,
    imports: [MaskedTextBoxComponent, PrefixTemplateDirective, SuffixTemplateDirective, SeparatorComponent, PrefixTemplateDirective, SuffixTemplateDirective, SeparatorComponent],
    exports: [MaskedTextBoxComponent, PrefixTemplateDirective, SuffixTemplateDirective, SeparatorComponent, PrefixTemplateDirective, SuffixTemplateDirective, SeparatorComponent]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [SeparatorComponent, SeparatorComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MaskedTextBoxModule, [{
    type: NgModule,
    args: [{
      imports: [...KENDO_MASKEDTEXTBOX, ...KENDO_ADORNMENTS],
      exports: [...KENDO_MASKEDTEXTBOX, ...KENDO_ADORNMENTS]
    }]
  }], null, null);
})();
var TextBoxModule = class _TextBoxModule {
  static ɵfac = function TextBoxModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TextBoxModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _TextBoxModule,
    imports: [TextBoxDirective, TextBoxComponent, InputSeparatorComponent, InputSpacerComponent, TextBoxSuffixTemplateDirective, TextBoxPrefixTemplateDirective, TextBoxCustomMessagesComponent, PrefixTemplateDirective, SuffixTemplateDirective, SeparatorComponent, PrefixTemplateDirective, SuffixTemplateDirective, SeparatorComponent],
    exports: [TextBoxDirective, TextBoxComponent, InputSeparatorComponent, InputSpacerComponent, TextBoxSuffixTemplateDirective, TextBoxPrefixTemplateDirective, TextBoxCustomMessagesComponent, PrefixTemplateDirective, SuffixTemplateDirective, SeparatorComponent, PrefixTemplateDirective, SuffixTemplateDirective, SeparatorComponent]
  });
  static ɵinj = ɵɵdefineInjector({
    providers: [IconsService],
    imports: [TextBoxComponent, SeparatorComponent, SeparatorComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextBoxModule, [{
    type: NgModule,
    args: [{
      imports: [...KENDO_TEXTBOX, ...KENDO_ADORNMENTS],
      exports: [...KENDO_TEXTBOX, ...KENDO_ADORNMENTS],
      providers: [IconsService]
    }]
  }], null, null);
})();
var TextAreaModule = class _TextAreaModule {
  static ɵfac = function TextAreaModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TextAreaModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _TextAreaModule,
    imports: [TextAreaComponent, TextAreaDirective, TextAreaPrefixComponent, TextAreaSuffixComponent, SeparatorComponent, PrefixTemplateDirective, SuffixTemplateDirective, SeparatorComponent],
    exports: [TextAreaComponent, TextAreaDirective, TextAreaPrefixComponent, TextAreaSuffixComponent, SeparatorComponent, PrefixTemplateDirective, SuffixTemplateDirective, SeparatorComponent]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [SeparatorComponent, SeparatorComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextAreaModule, [{
    type: NgModule,
    args: [{
      imports: [...KENDO_TEXTAREA, ...KENDO_ADORNMENTS],
      exports: [...KENDO_TEXTAREA, ...KENDO_ADORNMENTS]
    }]
  }], null, null);
})();
var CheckBoxModule = class _CheckBoxModule {
  static ɵfac = function CheckBoxModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CheckBoxModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _CheckBoxModule,
    imports: [CheckBoxComponent, CheckBoxDirective],
    exports: [CheckBoxComponent, CheckBoxDirective]
  });
  static ɵinj = ɵɵdefineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckBoxModule, [{
    type: NgModule,
    args: [{
      imports: [...KENDO_CHECKBOX],
      exports: [...KENDO_CHECKBOX]
    }]
  }], null, null);
})();
var RadioButtonModule = class _RadioButtonModule {
  static ɵfac = function RadioButtonModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RadioButtonModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _RadioButtonModule,
    imports: [RadioButtonComponent, RadioButtonDirective],
    exports: [RadioButtonComponent, RadioButtonDirective]
  });
  static ɵinj = ɵɵdefineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioButtonModule, [{
    type: NgModule,
    args: [{
      imports: [...KENDO_RADIOBUTTON],
      exports: [...KENDO_RADIOBUTTON]
    }]
  }], null, null);
})();
var SwitchBlurEvent = class {
  /**
   * The original DOM [`blur`](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event) event.
   */
  originalEvent;
};
var SwitchFocusEvent = class {
  /**
   * The original DOM [`focus`](https://developer.mozilla.org/en-US/docs/Web/API/Element/focus_event) event.
   */
  originalEvent;
};
var ColorPickerModule = class _ColorPickerModule {
  static ɵfac = function ColorPickerModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ColorPickerModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _ColorPickerModule,
    imports: [ColorPickerComponent, ColorPickerCustomMessagesComponent, FlatColorPickerComponent, ColorPickerCustomMessagesComponent, ColorGradientComponent, ColorPickerCustomMessagesComponent, ColorPaletteComponent, ColorPickerCustomMessagesComponent],
    exports: [ColorPickerComponent, ColorPickerCustomMessagesComponent, FlatColorPickerComponent, ColorPickerCustomMessagesComponent, ColorGradientComponent, ColorPickerCustomMessagesComponent, ColorPaletteComponent, ColorPickerCustomMessagesComponent]
  });
  static ɵinj = ɵɵdefineInjector({
    providers: [PopupService, IconsService, ResizeBatchService, AdaptiveService],
    imports: [ColorPickerComponent, FlatColorPickerComponent, ColorGradientComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColorPickerModule, [{
    type: NgModule,
    args: [{
      imports: [...KENDO_COLORPICKER, ...KENDO_FLATCOLORPICKER, ...KENDO_COLORGRADIENT, ...KENDO_COLORPALETTE],
      exports: [...KENDO_COLORPICKER, ...KENDO_FLATCOLORPICKER, ...KENDO_COLORGRADIENT, ...KENDO_COLORPALETTE],
      providers: [PopupService, IconsService, ResizeBatchService, AdaptiveService]
    }]
  }], null, null);
})();
var FormFieldModule = class _FormFieldModule {
  static ɵfac = function FormFieldModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormFieldModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _FormFieldModule,
    imports: [FormFieldComponent, HintComponent, ErrorComponent],
    exports: [FormFieldComponent, HintComponent, ErrorComponent]
  });
  static ɵinj = ɵɵdefineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormFieldModule, [{
    type: NgModule,
    args: [{
      imports: [...KENDO_FORMFIELD],
      exports: [...KENDO_FORMFIELD]
    }]
  }], null, null);
})();
var FormModule = class _FormModule {
  static ɵfac = function FormModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _FormModule,
    imports: [FormComponent, FormSeparatorComponent, FormFieldSetComponent, FormFieldComponent, HintComponent, ErrorComponent],
    exports: [FormComponent, FormSeparatorComponent, FormFieldSetComponent, FormFieldComponent, HintComponent, ErrorComponent]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [FormComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormModule, [{
    type: NgModule,
    args: [{
      imports: [...KENDO_FORM],
      exports: [...KENDO_FORM]
    }]
  }], null, null);
})();
var SignatureModule = class _SignatureModule {
  static ɵfac = function SignatureModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SignatureModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _SignatureModule,
    imports: [SignatureComponent, SignatureCustomMessagesComponent],
    exports: [SignatureComponent, SignatureCustomMessagesComponent]
  });
  static ɵinj = ɵɵdefineInjector({
    providers: [IconsService, PopupService, ResizeBatchService, DialogContainerService, DialogService, WindowService, WindowContainerService],
    imports: [SignatureComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignatureModule, [{
    type: NgModule,
    args: [{
      imports: [...KENDO_SIGNATURE],
      exports: [...KENDO_SIGNATURE],
      providers: [IconsService, PopupService, ResizeBatchService, DialogContainerService, DialogService, WindowService, WindowContainerService]
    }]
  }], null, null);
})();
var RatingModule = class _RatingModule {
  static ɵfac = function RatingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RatingModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _RatingModule,
    imports: [RatingComponent, RatingItemTemplateDirective, RatingHoveredItemTemplateDirective, RatingSelectedItemTemplateDirective],
    exports: [RatingComponent, RatingItemTemplateDirective, RatingHoveredItemTemplateDirective, RatingSelectedItemTemplateDirective]
  });
  static ɵinj = ɵɵdefineInjector({
    providers: [IconsService],
    imports: [RatingComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RatingModule, [{
    type: NgModule,
    args: [{
      imports: [...KENDO_RATING],
      exports: [...KENDO_RATING],
      providers: [IconsService]
    }]
  }], null, null);
})();

export {
  LabelTemplateDirective,
  SliderTicksComponent,
  LocalizedSliderMessagesDirective,
  SliderComponent,
  LocalizedRangeSliderMessagesDirective,
  RangeSliderComponent,
  LocalizedSwitchMessagesDirective,
  SwitchComponent,
  TextBoxDirective,
  TextAreaDirective,
  InputSeparatorComponent,
  LocalizedNumericTextBoxMessagesDirective,
  NumericTextBoxComponent,
  NumericTextBoxCustomMessagesComponent,
  MaskingService2 as MaskingService,
  MaskedTextBoxComponent,
  CheckBoxComponent,
  CheckBoxDirective,
  NumericLabelDirective,
  TextBoxSuffixTemplateDirective,
  TextBoxPrefixTemplateDirective,
  LocalizedTextBoxMessagesDirective,
  TextBoxComponent,
  LocalizedColorPickerMessagesDirective,
  ColorGradientComponent,
  ColorPaletteComponent,
  ColorPickerCancelEvent,
  ColorPickerCloseEvent,
  ColorPickerOpenEvent,
  ActiveColorClickEvent,
  FlatColorPickerComponent,
  ColorPickerComponent,
  ColorPickerCustomMessagesComponent,
  ErrorComponent,
  HintComponent,
  FormFieldComponent,
  RadioButtonComponent,
  RadioButtonDirective,
  RangeSliderCustomMessagesComponent,
  RatingHoveredItemTemplateDirective,
  RatingItemTemplateDirective,
  RatingSelectedItemTemplateDirective,
  RatingComponent,
  InputSpacerComponent,
  SignatureMessages,
  SignatureCustomMessagesComponent,
  SignatureCloseEvent,
  SignatureOpenEvent,
  LocalizedSignatureMessagesDirective,
  SignatureComponent,
  SliderCustomMessagesComponent,
  SwitchCustomMessagesComponent,
  TextAreaPrefixComponent,
  TextAreaSuffixComponent,
  TextAreaComponent,
  TextBoxCustomMessagesComponent,
  OTPInputComponent,
  OTPInputCustomMessagesComponent,
  FormComponent,
  FormSeparatorComponent,
  FormFieldSetComponent,
  KENDO_TEXTBOX,
  KENDO_NUMERICTEXTBOX,
  KENDO_MASKEDTEXTBOX,
  KENDO_OTPINPUT,
  KENDO_TEXTAREA,
  KENDO_CHECKBOX,
  KENDO_RADIOBUTTON,
  KENDO_SWITCH,
  KENDO_FORMFIELD,
  KENDO_FORM,
  KENDO_SLIDER,
  KENDO_RANGESLIDER,
  KENDO_RATING,
  KENDO_SIGNATURE,
  KENDO_COLORPICKER,
  KENDO_FLATCOLORPICKER,
  KENDO_COLORPALETTE,
  KENDO_COLORGRADIENT,
  KENDO_INPUTS,
  InputsModule,
  SliderModule,
  RangeSliderModule,
  SwitchModule,
  OTPInputModule,
  NumericTextBoxModule,
  MaskedTextBoxModule,
  TextBoxModule,
  TextAreaModule,
  CheckBoxModule,
  RadioButtonModule,
  SwitchBlurEvent,
  SwitchFocusEvent,
  ColorPickerModule,
  FormFieldModule,
  FormModule,
  SignatureModule,
  RatingModule
};
//# sourceMappingURL=chunk-LVRV6KK7.js.map
