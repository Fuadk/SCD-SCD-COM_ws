import {
  CommonModule
} from "./chunk-YS5E6LKP.js";
import {
  APP_INITIALIZER,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostListener,
  Inject,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  Optional,
  Output,
  ViewChild,
  ViewEncapsulation$1,
  inject,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵqueryRefresh,
  ɵɵresolveWindow,
  ɵɵviewQuery
} from "./chunk-R7LRY632.js";
import "./chunk-UG3XN6F5.js";
import "./chunk-K3IIKLCY.js";
import {
  BehaviorSubject,
  Subject
} from "./chunk-WISTXZPE.js";
import {
  __async,
  __spreadValues
} from "./chunk-N6ESDQJH.js";

// node_modules/@ngstack/code-editor/fesm2022/ngstack-code-editor.mjs
var _c0 = ["editor"];
var EDITOR_SETTINGS = new InjectionToken("EDITOR_SETTINGS");
var CodeEditorService = class _CodeEditorService {
  /**
   * Returns the global `monaco` instance
   */
  get monaco() {
    return this._monaco;
  }
  constructor(settings) {
    this.typingsLoaded = new Subject();
    this.loaded = new BehaviorSubject({
      monaco: null
    });
    this.loadingTypings = new BehaviorSubject(false);
    const editorVersion = settings?.editorVersion || "latest";
    this.baseUrl = settings?.baseUrl || `https://cdn.jsdelivr.net/npm/monaco-editor@${editorVersion}/min`;
    this.typingsWorkerUrl = settings?.typingsWorkerUrl || ``;
  }
  loadTypingsWorker() {
    if (!this.typingsWorker && window.Worker) {
      if (this.typingsWorkerUrl.startsWith("http")) {
        const proxyScript = `importScripts('${this.typingsWorkerUrl}');`;
        const proxy = URL.createObjectURL(new Blob([proxyScript], {
          type: "text/javascript"
        }));
        this.typingsWorker = new Worker(proxy);
      } else {
        this.typingsWorker = new Worker(this.typingsWorkerUrl);
      }
      this.typingsWorker.addEventListener("message", (e) => {
        this.loadingTypings.next(false);
        this.typingsLoaded.next(e.data);
      });
    }
    return this.typingsWorker;
  }
  loadTypings(dependencies) {
    if (dependencies && dependencies.length > 0) {
      const worker = this.loadTypingsWorker();
      if (worker) {
        this.loadingTypings.next(true);
        worker.postMessage({
          dependencies
        });
      }
    }
  }
  loadEditor() {
    return new Promise((resolve) => {
      const onGotAmdLoader = () => {
        window.require.config({
          paths: {
            vs: `${this.baseUrl}/vs`
          }
        });
        if (this.baseUrl.startsWith("http")) {
          const proxyScript = `
            self.MonacoEnvironment = {
              baseUrl: "${this.baseUrl}"
            };
            importScripts('${this.baseUrl}/vs/base/worker/workerMain.js');
          `;
          const proxy = URL.createObjectURL(new Blob([proxyScript], {
            type: "text/javascript"
          }));
          window["MonacoEnvironment"] = {
            getWorkerUrl: function() {
              return proxy;
            }
          };
        }
        window.require(["vs/editor/editor.main"], () => {
          this._monaco = window["monaco"];
          this.loaded.next({
            monaco: this._monaco
          });
          resolve();
        });
      };
      if (!window.require) {
        const loaderScript = document.createElement("script");
        loaderScript.type = "text/javascript";
        loaderScript.src = `${this.baseUrl}/vs/loader.js`;
        loaderScript.addEventListener("load", onGotAmdLoader);
        document.body.appendChild(loaderScript);
      } else {
        onGotAmdLoader();
      }
    });
  }
  /**
   * Switches to a theme.
   * @param themeName name of the theme
   */
  setTheme(themeName) {
    this.monaco.editor.setTheme(themeName);
  }
  createEditor(containerElement, options) {
    return this.monaco.editor.create(containerElement, options);
  }
  createModel(value, language, uri) {
    return this.monaco.editor.createModel(value, language, this.monaco.Uri.file(uri));
  }
  setModelLanguage(model, mimeTypeOrLanguageId) {
    if (this.monaco && model) {
      this.monaco.editor.setModelLanguage(model, mimeTypeOrLanguageId);
    }
  }
  static {
    this.ɵfac = function CodeEditorService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CodeEditorService)(ɵɵinject(EDITOR_SETTINGS, 8));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CodeEditorService,
      factory: _CodeEditorService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CodeEditorService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [EDITOR_SETTINGS]
    }]
  }], null);
})();
var TypescriptDefaultsService = class _TypescriptDefaultsService {
  constructor(codeEditorService) {
    codeEditorService.loaded.subscribe((event) => {
      this.setup(event.monaco);
    });
    codeEditorService.typingsLoaded.subscribe((typings) => {
      this.updateTypings(typings);
    });
  }
  setup(monaco) {
    if (!monaco) {
      return;
    }
    this.monaco = monaco;
    const defaults = monaco.languages.typescript.typescriptDefaults;
    defaults.setCompilerOptions({
      target: monaco.languages.typescript.ScriptTarget.ES6,
      module: "commonjs",
      noEmit: true,
      noLib: true,
      emitDecoratorMetadata: true,
      experimentalDecorators: true,
      allowNonTsExtensions: true,
      declaration: true,
      lib: ["es2017", "dom"],
      baseUrl: ".",
      paths: {}
    });
    defaults.setMaximumWorkerIdleTime(-1);
    defaults.setEagerModelSync(true);
  }
  updateTypings(typings) {
    if (typings) {
      this.addExtraLibs(typings.files);
      this.addLibraryPaths(typings.entryPoints);
    }
  }
  addExtraLibs(libs = []) {
    if (!this.monaco || !libs || libs.length === 0) {
      return;
    }
    const defaults = this.monaco.languages.typescript.typescriptDefaults;
    const registeredLibs = defaults.getExtraLibs();
    libs.forEach((lib) => {
      if (!registeredLibs[lib.path]) {
        defaults._extraLibs[lib.path] = lib.content;
      }
    });
    defaults._onDidChange.fire(defaults);
  }
  addLibraryPaths(paths = {}) {
    if (!this.monaco) {
      return;
    }
    const defaults = this.monaco.languages.typescript.typescriptDefaults;
    const compilerOptions = defaults.getCompilerOptions();
    compilerOptions.paths = compilerOptions.paths || {};
    Object.keys(paths).forEach((key) => {
      compilerOptions.paths[key] = [paths[key]];
    });
  }
  static {
    this.ɵfac = function TypescriptDefaultsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TypescriptDefaultsService)(ɵɵinject(CodeEditorService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TypescriptDefaultsService,
      factory: _TypescriptDefaultsService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TypescriptDefaultsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: CodeEditorService
  }], null);
})();
var JavascriptDefaultsService = class _JavascriptDefaultsService {
  constructor(codeEditorService) {
    codeEditorService.loaded.subscribe((event) => {
      this.setup(event.monaco);
    });
    codeEditorService.typingsLoaded.subscribe((typings) => {
      this.updateTypings(typings);
    });
  }
  setup(monaco) {
    if (!monaco) {
      return;
    }
    this.monaco = monaco;
    const defaults = monaco.languages.typescript.javascriptDefaults;
    defaults.setCompilerOptions({
      target: monaco.languages.typescript.ScriptTarget.ES6,
      module: "commonjs",
      allowNonTsExtensions: true,
      baseUrl: ".",
      paths: {}
    });
    defaults.setMaximumWorkerIdleTime(-1);
    defaults.setEagerModelSync(true);
  }
  updateTypings(typings) {
    if (typings) {
      this.addExtraLibs(typings.files);
      this.addLibraryPaths(typings.entryPoints);
    }
  }
  addExtraLibs(libs = []) {
    if (!this.monaco || !libs || libs.length === 0) {
      return;
    }
    const defaults = this.monaco.languages.typescript.javascriptDefaults;
    const registeredLibs = defaults.getExtraLibs();
    libs.forEach((lib) => {
      if (!registeredLibs[lib.path]) {
        defaults._extraLibs[lib.path] = lib.content;
      }
    });
    defaults._onDidChange.fire(defaults);
  }
  addLibraryPaths(paths = {}) {
    if (!this.monaco) {
      return;
    }
    const defaults = this.monaco.languages.typescript.javascriptDefaults;
    const compilerOptions = defaults.getCompilerOptions();
    compilerOptions.paths = compilerOptions.paths || {};
    Object.keys(paths).forEach((key) => {
      compilerOptions.paths[key] = [paths[key]];
    });
  }
  static {
    this.ɵfac = function JavascriptDefaultsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _JavascriptDefaultsService)(ɵɵinject(CodeEditorService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _JavascriptDefaultsService,
      factory: _JavascriptDefaultsService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JavascriptDefaultsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: CodeEditorService
  }], null);
})();
var JsonDefaultsService = class _JsonDefaultsService {
  constructor(codeEditorService) {
    codeEditorService.loaded.subscribe((event) => {
      this.setup(event.monaco);
    });
  }
  setup(monaco) {
    if (!monaco) {
      return;
    }
    this.monaco = monaco;
    const defaults = monaco.languages.json.jsonDefaults;
    defaults.setDiagnosticsOptions({
      validate: true,
      allowComments: true,
      schemas: [...defaults._diagnosticsOptions.schemas, {
        uri: "http://myserver/foo-schema.json",
        // fileMatch: [id],
        // fileMatch: ['*.json'],
        schema: {
          type: "object",
          properties: {
            p1: {
              enum: ["v1", "v2"]
            },
            p2: {
              $ref: "http://myserver/bar-schema.json"
            }
          }
        }
      }, {
        uri: "http://myserver/bar-schema.json",
        // fileMatch: [id],
        // fileMatch: ['*.json'],
        schema: {
          type: "object",
          properties: {
            q1: {
              enum: ["x1", "x2"]
            }
          }
        }
      }]
    });
  }
  addSchemas(id, definitions = []) {
    const defaults = this.monaco.languages.json.jsonDefaults;
    const options = defaults.diagnosticsOptions;
    const schemas = {};
    if (options && options.schemas && options.schemas.length > 0) {
      options.schemas.forEach((schema) => {
        schemas[schema.uri] = schema;
      });
    }
    for (const {
      uri,
      schema
    } of definitions) {
      schemas[uri] = {
        uri,
        schema,
        fileMatch: [id || "*.json"]
      };
    }
    options.schemas = Object.values(schemas);
    defaults.setDiagnosticsOptions(options);
  }
  static {
    this.ɵfac = function JsonDefaultsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _JsonDefaultsService)(ɵɵinject(CodeEditorService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _JsonDefaultsService,
      factory: _JsonDefaultsService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JsonDefaultsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: CodeEditorService
  }], null);
})();
var CodeEditorComponent = class _CodeEditorComponent {
  constructor() {
    this.defaultOptions = {
      lineNumbers: "on",
      contextmenu: false,
      minimap: {
        enabled: false
      }
    };
    this.theme = "vs";
    this.options = {};
    this.readOnly = false;
    this.valueChanged = new EventEmitter();
    this.codeModelChanged = new EventEmitter();
    this.modelContentChanged = new EventEmitter();
    this.loaded = new EventEmitter();
    this.editorService = inject(CodeEditorService);
    this.typescriptDefaults = inject(TypescriptDefaultsService);
    this.javascriptDefaults = inject(JavascriptDefaultsService);
    this.jsonDefaults = inject(JsonDefaultsService);
  }
  /**
   * The instance of the editor.
   */
  get editor() {
    return this._editor;
  }
  set editor(value) {
    this._editor = value;
  }
  ngOnDestroy() {
    if (this.editor) {
      this.editor.dispose();
      this.editor = null;
    }
    if (this._model) {
      this._model.dispose();
      this._model = null;
    }
  }
  ngOnChanges(changes) {
    const codeModel = changes["codeModel"];
    const readOnly = changes["readOnly"];
    const theme = changes["theme"];
    if (codeModel && !codeModel.firstChange) {
      this.updateModel(codeModel.currentValue);
    }
    if (readOnly && !readOnly.firstChange) {
      if (this.editor) {
        this.editor.updateOptions({
          readOnly: readOnly.currentValue
        });
      }
    }
    if (theme && !theme.firstChange) {
      this.editorService.setTheme(theme.currentValue);
    }
  }
  onResize() {
    if (this.editor) {
      this.editor.layout();
    }
  }
  ngAfterViewInit() {
    return __async(this, null, function* () {
      this.setupEditor();
      this.loaded.emit(this);
    });
  }
  setupEditor() {
    const domElement = this.editorContent.nativeElement;
    const settings = __spreadValues({
      value: "",
      language: "text",
      uri: `code-${Date.now()}`
    }, this.codeModel);
    this._model = this.editorService.createModel(settings.value, settings.language, settings.uri);
    const options = Object.assign({}, this.defaultOptions, this.options, {
      readOnly: this.readOnly,
      theme: this.theme,
      model: this._model
    });
    this.editor = this.editorService.createEditor(domElement, options);
    this._model.onDidChangeContent((e) => {
      this.modelContentChanged.emit(e);
      const newValue = this._model.getValue();
      if (this.codeModel) {
        this.codeModel.value = newValue;
      }
      this.valueChanged.emit(newValue);
    });
    this.setupDependencies(this.codeModel);
    this.codeModelChanged.emit({
      sender: this,
      value: this.codeModel
    });
  }
  runEditorAction(id, args) {
    this.editor.getAction(id)?.run(args);
  }
  formatDocument() {
    this.runEditorAction("editor.action.formatDocument");
  }
  setupDependencies(model) {
    if (!model) {
      return;
    }
    const {
      language
    } = model;
    if (language) {
      const lang = language.toLowerCase();
      switch (lang) {
        case "typescript":
          if (model.dependencies) {
            this.editorService.loadTypings(model.dependencies);
          }
          break;
        case "javascript":
          if (model.dependencies) {
            this.editorService.loadTypings(model.dependencies);
          }
          break;
        case "json":
          if (model.schemas) {
            this.jsonDefaults.addSchemas(model.uri, model.schemas);
          }
          break;
        default:
          break;
      }
    }
  }
  setEditorValue(value) {
    setTimeout(() => {
      if (this._model) {
        this._model.setValue(value);
      }
    });
  }
  updateModel(model) {
    if (model) {
      this.setEditorValue(model.value);
      this.editorService.setModelLanguage(this._model, model.language);
      this.setupDependencies(model);
      this.codeModelChanged.emit({
        sender: this,
        value: model
      });
    }
  }
  static {
    this.ɵfac = function CodeEditorComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CodeEditorComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _CodeEditorComponent,
      selectors: [["ngs-code-editor"]],
      viewQuery: function CodeEditorComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c0, 7);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.editorContent = _t.first);
        }
      },
      hostAttrs: [1, "ngs-code-editor"],
      hostBindings: function CodeEditorComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("resize", function CodeEditorComponent_resize_HostBindingHandler() {
            return ctx.onResize();
          }, false, ɵɵresolveWindow);
        }
      },
      inputs: {
        codeModel: "codeModel",
        theme: "theme",
        options: "options",
        readOnly: "readOnly"
      },
      outputs: {
        valueChanged: "valueChanged",
        codeModelChanged: "codeModelChanged",
        modelContentChanged: "modelContentChanged",
        loaded: "loaded"
      },
      standalone: true,
      features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      decls: 2,
      vars: 0,
      consts: [["editor", ""], ["id", "editor", 1, "monaco-editor", "editor"]],
      template: function CodeEditorComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelement(0, "div", 1, 0);
        }
      },
      styles: [".editor{width:100%;height:inherit;min-height:200px}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CodeEditorComponent, [{
    type: Component,
    args: [{
      selector: "ngs-code-editor",
      standalone: true,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "ngs-code-editor"
      },
      template: '<div id="editor" #editor class="monaco-editor editor"></div>\n',
      styles: [".editor{width:100%;height:inherit;min-height:200px}\n"]
    }]
  }], null, {
    editorContent: [{
      type: ViewChild,
      args: ["editor", {
        static: true
      }]
    }],
    codeModel: [{
      type: Input
    }],
    theme: [{
      type: Input
    }],
    options: [{
      type: Input
    }],
    readOnly: [{
      type: Input
    }],
    valueChanged: [{
      type: Output
    }],
    codeModelChanged: [{
      type: Output
    }],
    modelContentChanged: [{
      type: Output
    }],
    loaded: [{
      type: Output
    }],
    onResize: [{
      type: HostListener,
      args: ["window:resize"]
    }]
  });
})();
function setupEditorService(service) {
  return () => service.loadEditor();
}
function provideCodeEditor(settings) {
  return [{
    provide: EDITOR_SETTINGS,
    useValue: settings
  }, CodeEditorService, TypescriptDefaultsService, JavascriptDefaultsService, JsonDefaultsService, {
    provide: APP_INITIALIZER,
    useFactory: setupEditorService,
    deps: [CodeEditorService],
    multi: true
  }];
}
var CodeEditorModule = class _CodeEditorModule {
  static forRoot(settings) {
    return {
      ngModule: _CodeEditorModule,
      providers: [{
        provide: EDITOR_SETTINGS,
        useValue: settings
      }, CodeEditorService, {
        provide: APP_INITIALIZER,
        useFactory: setupEditorService,
        deps: [CodeEditorService],
        multi: true
      }]
    };
  }
  static {
    this.ɵfac = function CodeEditorModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CodeEditorModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CodeEditorModule,
      imports: [CommonModule, CodeEditorComponent],
      exports: [CodeEditorComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CodeEditorModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, CodeEditorComponent],
      exports: [CodeEditorComponent]
    }]
  }], null, null);
})();
export {
  CodeEditorComponent,
  CodeEditorModule,
  CodeEditorService,
  EDITOR_SETTINGS,
  JavascriptDefaultsService,
  TypescriptDefaultsService,
  provideCodeEditor,
  setupEditorService
};
//# sourceMappingURL=@ngstack_code-editor.js.map
