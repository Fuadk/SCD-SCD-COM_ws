import {
  checkOutlineIcon,
  exclamationCircleIcon,
  infoCircleIcon,
  xIcon,
  xOutlineIcon
} from "./chunk-KXMGKHT2.js";
import {
  IconWrapperComponent,
  IconsService
} from "./chunk-3ZH7CTYC.js";
import {
  guid
} from "./chunk-5AZCHGRK.js";
import "./chunk-7JCLSR37.js";
import {
  ComponentMessages,
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
import "./chunk-74QYUCA6.js";
import "./chunk-F2IMJFZ7.js";
import {
  NgClass,
  NgTemplateOutlet
} from "./chunk-YS5E6LKP.js";
import {
  ApplicationRef,
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver$1,
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  NgZone,
  Optional,
  Renderer2,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  forwardRef,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMapInterpolate1,
  ɵɵconditional,
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
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-R7LRY632.js";
import "./chunk-UG3XN6F5.js";
import "./chunk-K3IIKLCY.js";
import {
  take
} from "./chunk-WISTXZPE.js";
import "./chunk-N6ESDQJH.js";

// node_modules/@progress/kendo-angular-notification/fesm2022/progress-kendo-angular-notification.mjs
var _c0 = ["container"];
function NotificationComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 3);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("name", ctx_r0.typeIconClass())("svgIcon", ctx_r0.typeSVGIcon());
  }
}
function NotificationComponent_Conditional_4_ng_template_0_Template(rf, ctx) {
}
function NotificationComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NotificationComponent_Conditional_4_ng_template_0_Template, 0, 0, "ng-template", 5);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.templateRef);
  }
}
function NotificationComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵtextInterpolate1(" ", ctx_r0.templateString, " ");
  }
}
function NotificationComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 6)(1, "span", 7);
    ɵɵlistener("click", function NotificationComponent_Conditional_8_Template_span_click_1_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.onCloseClick());
    });
    ɵɵelement(2, "kendo-icon-wrapper", 8);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵattribute("title", ctx_r0.closeButtonTitle);
    ɵɵadvance();
    ɵɵproperty("svgIcon", ctx_r0.xIcon);
  }
}
var _c1 = ["group"];
var NotificationSettings = class {
  /**
   * Defines the content of the Notification.
   */
  content;
  /**
   * Specifies the time in milliseconds after which the
   * Notification will hide
   * ([see example](slug:hiding_notifications#toc-defining-a-delay-before-hiding)).
   *
   * @default 5000
   */
  hideAfter = 5e3;
  /**
   * Defines the position of the Notification
   * ([see example]({% slug positioning_notification %})).
   *
   * The possible values are:
   * * `horizontal: 'left'|'center'|'right'`
   * * `vertical: 'top'|'bottom'`
   *
   * @default { horizontal: 'right', vertical: 'top' }
   */
  position = {
    horizontal: "right",
    vertical: "top"
  };
  /**
   * Specifies the animation settings of the Notification
   * ([see example]({% slug animations_notification %})).
   *
   * The possible values are:
   * * `duration`&mdash;Accepts a number in milliseconds. Defaults to `500ms`.
   * * `type?: 'slide'| (Default) 'fade'`
   *
   * @default { type: 'fade', duration: 500 }
   */
  animation = {
    type: "fade",
    duration: 500
  };
  /**
   * Specifies if the Notification will require a user action to hide.
   * If you set the property to `true`, the Notification renders a **Close** button
   * ([see example]({% slug hiding_notifications %}#toc-defining-a-closable-notification)).
   *
   * The possible values are:
   * * (Default) `false`
   * * `true`
   *
   * @default false
   */
  closable = false;
  /**
   * Specifies the title of the close button.
   */
  closeTitle;
  /**
   * Specifies the type of the Notification
   * ([see example]({% slug types_notification %})).
   *
   * The possible values are:
   * * `style: (Default) 'none'|'success'|'error'|'warning'|'info'`
   * * `icon: 'true'|'false'`
   *
   * @default { style: 'none', icon: true }
   */
  type = {
    style: "none",
    icon: true
  };
  /**
   * Specifies the width of the Notification.
   */
  width;
  /**
   * Specifies the height of the Notification.
   */
  height;
  /**
   * The value of the Notification element `aria-label` attribute.
   *
   * @default 'Notification'
   */
  notificationLabel = "Notification";
  /**
   * Specifies a list of CSS classes that you add to the Notification.
   * To apply CSS rules to the component, set `encapsulation` to `ViewEncapsulation.None`
   * ([see example](slug:overview_notification)).
   *
   * > To style the content of the Notification, use the `cssClass` property binding.
   */
  cssClass;
  /**
   * Defines the container to which the Notification will be appended
   * ([see example]({% slug dynamic_containers %})).
   *
   * If not provided, the Notification will be placed in the root component
   * of the application or in the `body` element of the document.
   */
  appendTo;
};
var packageMetadata = {
  name: "@progress/kendo-angular-notification",
  productName: "Kendo UI for Angular",
  productCode: "KENDOUIANGULAR",
  productCodes: ["KENDOUIANGULAR"],
  publishDate: 1768393350,
  version: "21.4.1",
  licensingDocsUrl: "https://www.telerik.com/kendo-angular-ui/my-license/"
};
function slideAnimation(height, duration) {
  return [style({
    overflow: "hidden",
    height: 0
  }), animate(`${duration}ms ease-in`, style({
    height: `${height}px`
  }))];
}
function slideCloseAnimation(height, duration) {
  return [style({
    height: `${height}px`
  }), animate(`${duration}ms ease-in`, style({
    overflow: "hidden",
    height: 0
  }))];
}
function fadeAnimation(duration) {
  return [style({
    opacity: 0
  }), animate(`${duration}ms ease-in`, style({
    opacity: 1
  }))];
}
function fadeCloseAnimation(duration) {
  return [style({
    opacity: 1
  }), animate(`${duration}ms ease-in`, style({
    opacity: 0
  }))];
}
var LocalizedMessagesDirective = class _LocalizedMessagesDirective extends ComponentMessages {
  service;
  /**
   * The title of the close button.
   */
  closeTitle;
  constructor(service) {
    super();
    this.service = service;
  }
  static ɵfac = function LocalizedMessagesDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LocalizedMessagesDirective)(ɵɵdirectiveInject(LocalizationService));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _LocalizedMessagesDirective,
    selectors: [["", "kendoNotificationLocalizedMessages", ""]],
    inputs: {
      closeTitle: "closeTitle"
    },
    standalone: true,
    features: [ɵɵProvidersFeature([{
      provide: ComponentMessages,
      useExisting: forwardRef(() => _LocalizedMessagesDirective)
    }]), ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LocalizedMessagesDirective, [{
    type: Directive,
    args: [{
      providers: [{
        provide: ComponentMessages,
        useExisting: forwardRef(() => LocalizedMessagesDirective)
      }],
      selector: `[kendoNotificationLocalizedMessages]`,
      standalone: true
    }]
  }], () => [{
    type: LocalizationService
  }], {
    closeTitle: [{
      type: Input
    }]
  });
})();
var NotificationComponent = class _NotificationComponent {
  cdr;
  element;
  renderer;
  builder;
  localizationService;
  /**
   * @hidden
   */
  xIcon = xIcon;
  contentId = `k-${guid()}`;
  container;
  closeClickSubscription;
  close = new EventEmitter();
  templateRef;
  templateString;
  width = null;
  height = null;
  notificationLabel = "Notification";
  cssClass;
  hideAfter;
  closable;
  type;
  animation;
  closeTitle;
  /**
   * @hidden
   */
  direction;
  get closeButtonTitle() {
    return this.closeTitle || this.localizationService.get("closeTitle");
  }
  defaultHideAfter = 5e3;
  hideTimeout;
  animationEnd = new EventEmitter();
  dynamicRTLSubscription;
  rtl = false;
  constructor(cdr, element, renderer, builder, localizationService) {
    this.cdr = cdr;
    this.element = element;
    this.renderer = renderer;
    this.builder = builder;
    this.localizationService = localizationService;
    A(packageMetadata);
    this.dynamicRTLSubscription = localizationService.changes.subscribe(({
      rtl
    }) => {
      this.rtl = rtl;
      this.direction = this.rtl ? "rtl" : "ltr";
    });
  }
  notificationClasses() {
    return `${this.type ? this.typeClass() : ""}
            ${this.closable ? "k-notification-closable" : ""}`;
  }
  ngOnInit() {
    clearTimeout(this.hideTimeout);
  }
  ngOnDestroy() {
    clearTimeout(this.hideTimeout);
    if (this.dynamicRTLSubscription) {
      this.dynamicRTLSubscription.unsubscribe();
    }
  }
  ngAfterViewInit() {
    if (!this.closable && !this.animation) {
      this.setHideTimeout();
    }
    if (!this.closable && this.animation) {
      this.animationEnd.pipe(take(1)).subscribe(() => this.setHideTimeout());
    }
    if (this.animation) {
      this.animate(this.animation);
    }
  }
  typeClass() {
    return {
      "none": "",
      "success": "k-notification-success",
      "warning": "k-notification-warning",
      "error": "k-notification-error",
      "info": "k-notification-info"
    }[this.type.style];
  }
  typeIconClass() {
    return {
      "none": "",
      "success": "check-outline",
      "warning": "exclamation-circle",
      "error": "x-outline",
      "info": "info-circle"
    }[this.type.style];
  }
  typeSVGIcon() {
    return {
      "none": null,
      "success": checkOutlineIcon,
      "warning": exclamationCircleIcon,
      "error": xOutlineIcon,
      "info": infoCircleIcon
    }[this.type.style];
  }
  onCloseClick() {
    clearTimeout(this.hideTimeout);
    this.hide();
  }
  hide(customComponent) {
    const elementHeight = getComputedStyle(this.element.nativeElement).height;
    if (this.animation && elementHeight) {
      this.animate(this.animation, true);
      this.animationEnd.subscribe(() => {
        this.emitClose(customComponent);
      });
      return;
    }
    this.emitClose(customComponent);
  }
  setHideTimeout() {
    const hideAfter = this.hideAfter || this.defaultHideAfter;
    this.hideTimeout = window.setTimeout(() => this.onCloseClick(), hideAfter);
  }
  emitClose(customComponent) {
    if (customComponent) {
      customComponent.destroy();
    }
    this.close.emit();
  }
  play(animation, animatedElement) {
    const factory = this.builder.build(animation);
    const element = this.element.nativeElement;
    this.renderer.addClass(element, "k-notification-container-animating");
    let player = factory.create(animatedElement);
    player.onDone(() => {
      this.renderer.removeClass(element, "k-notification-container-animating");
      this.animationEnd.emit();
      if (player) {
        player.destroy();
        player = null;
      }
    });
    player.play();
  }
  animate(animation, onclose) {
    const element = this.element.nativeElement;
    const duration = animation.duration;
    const height = element.offsetHeight;
    const generatedAnimation = animation.type === "slide" ? this.slideAnimation(height, duration, onclose) : this.fadeAnimation(duration, onclose);
    this.play(generatedAnimation, element);
  }
  slideAnimation(height, duration, onclose) {
    return onclose ? slideCloseAnimation(height, duration) : slideAnimation(height, duration);
  }
  fadeAnimation(duration, onclose) {
    return onclose ? fadeCloseAnimation(duration) : fadeAnimation(duration);
  }
  static ɵfac = function NotificationComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotificationComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(AnimationBuilder), ɵɵdirectiveInject(LocalizationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NotificationComponent,
    selectors: [["kendo-notification"]],
    viewQuery: function NotificationComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 7, ViewContainerRef);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.container = _t.first);
      }
    },
    hostVars: 1,
    hostBindings: function NotificationComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("dir", ctx.direction);
      }
    },
    inputs: {
      templateRef: "templateRef",
      templateString: "templateString",
      width: "width",
      height: "height",
      notificationLabel: "notificationLabel",
      cssClass: "cssClass",
      hideAfter: "hideAfter",
      closable: "closable",
      type: "type",
      animation: "animation"
    },
    standalone: true,
    features: [ɵɵProvidersFeature([LocalizationService, {
      provide: L10N_PREFIX,
      useValue: "kendo.notification"
    }]), ɵɵStandaloneFeature],
    decls: 9,
    vars: 15,
    consts: () => {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_NOTIFICATION_FESM2022_PROGRESS_KENDO_ANGULAR_NOTIFICATION_MJS_0 = goog.getMsg("Close");
        i18n_0 = MSG__USERS_MACBOOKPRO_DOCUMENTS_WIN_GENOVITY_DEV_USERS_SCD_SCD_COM_WS_NODE_MODULES__PROGRESS_KENDO_ANGULAR_NOTIFICATION_FESM2022_PROGRESS_KENDO_ANGULAR_NOTIFICATION_MJS_0;
      } else {
        i18n_0 = $localize`:kendo.notification.closeTitle|The title of the close button:Close`;
      }
      return [["container", ""], ["kendoNotificationLocalizedMessages", "", "closeTitle", i18n_0], ["role", "alert", "aria-live", "polite", 3, "ngClass"], ["innerCssClass", "k-notification-status", 3, "name", "svgIcon"], [1, "k-notification-content", 3, "id"], [3, "ngTemplateOutlet"], ["aria-hidden", "true", 1, "k-notification-actions"], [1, "k-notification-action", "k-notification-close-action", 3, "click"], ["name", "x", 3, "svgIcon"]];
    },
    template: function NotificationComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementContainer(0, 1);
        ɵɵelementStart(1, "div", 2);
        ɵɵtemplate(2, NotificationComponent_Conditional_2_Template, 1, 2, "kendo-icon-wrapper", 3);
        ɵɵelementStart(3, "div", 4);
        ɵɵtemplate(4, NotificationComponent_Conditional_4_Template, 1, 1, null, 5)(5, NotificationComponent_Conditional_5_Template, 1, 1);
        ɵɵelementContainer(6, null, 0);
        ɵɵelementEnd();
        ɵɵtemplate(8, NotificationComponent_Conditional_8_Template, 3, 2, "span", 6);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵadvance();
        ɵɵclassMapInterpolate1("k-notification k-notification-base ", ctx.notificationClasses(), "");
        ɵɵstyleProp("height", ctx.height, "px")("width", ctx.width, "px");
        ɵɵproperty("ngClass", ctx.cssClass);
        ɵɵattribute("aria-describedby", ctx.contentId)("aria-label", ctx.notificationLabel);
        ɵɵadvance();
        ɵɵconditional(ctx.type && ctx.type.icon && ctx.type.style !== "none" ? 2 : -1);
        ɵɵadvance();
        ɵɵproperty("id", ctx.contentId);
        ɵɵadvance();
        ɵɵconditional(ctx.templateRef ? 4 : -1);
        ɵɵadvance();
        ɵɵconditional(ctx.templateString ? 5 : -1);
        ɵɵadvance(3);
        ɵɵconditional(ctx.closable ? 8 : -1);
      }
    },
    dependencies: [LocalizedMessagesDirective, NgClass, IconWrapperComponent, NgTemplateOutlet],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotificationComponent, [{
    type: Component,
    args: [{
      selector: "kendo-notification",
      template: `
    <ng-container kendoNotificationLocalizedMessages
      i18n-closeTitle="kendo.notification.closeTitle|The title of the close button"
      closeTitle="Close"
      >
    </ng-container>
    <div class="k-notification k-notification-base {{ notificationClasses() }}"
      [ngClass]="cssClass"
      [style.height.px]="height"
      [style.width.px]="width"
      role="alert"
      aria-live="polite"
      [attr.aria-describedby]="contentId"
      [attr.aria-label]="notificationLabel">
      @if (type && type.icon && type.style !== 'none') {
        <kendo-icon-wrapper
          innerCssClass="k-notification-status"
          [name]="typeIconClass()"
          [svgIcon]="typeSVGIcon()"
          >
        </kendo-icon-wrapper>
      }
      <div [id]="contentId" class="k-notification-content">
        @if (templateRef) {
          <ng-template
            [ngTemplateOutlet]="templateRef">
          </ng-template>
        }
        @if (templateString) {
          {{ templateString }}
        }
        <ng-container #container></ng-container>
      </div>
    
      @if (closable) {
        <span class="k-notification-actions" aria-hidden="true">
          <span class="k-notification-action k-notification-close-action" [attr.title]="closeButtonTitle" (click)="onCloseClick()">
            <kendo-icon-wrapper name="x" [svgIcon]="xIcon"></kendo-icon-wrapper>
          </span>
        </span>
      }
    </div>
    `,
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.notification"
      }],
      standalone: true,
      imports: [LocalizedMessagesDirective, NgClass, IconWrapperComponent, NgTemplateOutlet]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: AnimationBuilder
  }, {
    type: LocalizationService
  }], {
    container: [{
      type: ViewChild,
      args: ["container", {
        read: ViewContainerRef,
        static: true
      }]
    }],
    templateRef: [{
      type: Input
    }],
    templateString: [{
      type: Input
    }],
    width: [{
      type: Input
    }],
    height: [{
      type: Input
    }],
    notificationLabel: [{
      type: Input
    }],
    cssClass: [{
      type: Input
    }],
    hideAfter: [{
      type: Input
    }],
    closable: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    animation: [{
      type: Input
    }],
    direction: [{
      type: HostBinding,
      args: ["attr.dir"]
    }]
  });
})();
var NotificationContainerComponent = class _NotificationContainerComponent {
  element;
  renderer;
  resolver;
  ngZone;
  container;
  group;
  id = "";
  notifications = [];
  position;
  constructor(element, renderer, resolver, ngZone) {
    this.element = element;
    this.renderer = renderer;
    this.resolver = resolver;
    this.ngZone = ngZone;
  }
  ngOnDestroy() {
    this.notifications.forEach((notification) => {
      if (notification.closeClickSubscription) {
        notification.closeClickSubscription.unsubscribe();
      }
    });
    this.notifications = [];
  }
  addNotification(settings) {
    this.position = settings.position;
    this.id = `${this.position.horizontal} ${this.position.vertical}`;
    const factory = this.resolver.resolveComponentFactory(NotificationComponent);
    const notificationRef = this.container.createComponent(factory);
    this.applySettings(notificationRef, settings);
    let customComponent = null;
    if (typeof settings.content === "function") {
      const customFactory = this.resolver.resolveComponentFactory(settings.content);
      customComponent = notificationRef.instance.container.createComponent(customFactory);
    }
    notificationRef.changeDetectorRef.detectChanges();
    this.notifications.push(notificationRef.instance);
    if (settings.appendTo) {
      this.applyAbsolutePosition(settings.appendTo);
    }
    this.applyPosition();
    this.applyContainerWrap();
    return {
      afterHide: notificationRef.instance.close,
      hide: () => notificationRef.instance.hide(customComponent),
      notification: notificationRef,
      content: customComponent || null
    };
  }
  hide(notificationRef) {
    const instance = notificationRef.instance;
    const index = this.notifications.indexOf(instance);
    this.notifications.splice(index, 1);
    if (instance.closeClickSubscription) {
      instance.closeClickSubscription.unsubscribe();
    }
    instance.templateRef = null;
    instance.templateString = null;
    notificationRef.destroy();
    if (this.notifications.length > 0) {
      this.ngZone.onStable.asObservable().pipe(take(1)).subscribe(() => {
        this.applyPosition();
      });
    }
  }
  applyContainerWrap() {
    const value = this.position.horizontal === "right" ? "wrap-reverse" : "wrap";
    this.renderer.setStyle(this.group.nativeElement, "flex-wrap", value);
  }
  applySettings(notificationRef, settings) {
    const notification = notificationRef.instance;
    const content = settings.content;
    const animation = settings.animation || null;
    notification.closeClickSubscription = notification.close.subscribe(() => this.hide(notificationRef));
    if (typeof content === "string") {
      notification.templateString = content;
    }
    if (content instanceof TemplateRef) {
      notification.templateRef = content;
    }
    notification.animation = animation;
    const type = settings.type;
    if (type && type.style === void 0) {
      type.style = "none";
    }
    if (type && type.icon === void 0) {
      type.icon = true;
    }
    notification.type = type;
    notification.closeTitle = settings.closeTitle;
    if (settings.cssClass) {
      notification.cssClass = settings.cssClass;
    }
    if (settings.notificationLabel) {
      notification.notificationLabel = settings.notificationLabel;
    }
    notification.closable = settings.closable;
    notification.hideAfter = settings.hideAfter;
    notification.width = settings.width;
    notification.height = settings.height;
  }
  applyAbsolutePosition(appendToContainer) {
    const appendTo = appendToContainer.element.nativeElement;
    const el = this.element.nativeElement.children[0];
    if (window.getComputedStyle(appendTo).position === "static") {
      this.renderer.setStyle(appendTo, "position", "relative");
    }
    this.renderer.setStyle(el, "position", "absolute");
  }
  applyPosition() {
    const element = this.element.nativeElement.children[0];
    const elementHalfWidth = element.getBoundingClientRect().width / 2;
    const positionStyles = this.setContainerPosition(this.position, elementHalfWidth);
    Object.keys(positionStyles).forEach((cssStyle) => {
      element.style[cssStyle] = positionStyles[cssStyle];
    });
  }
  setContainerPosition(position, offsetMargin) {
    const positionLayout = {
      horizontal: {
        left: {
          left: 0,
          alignItems: "flex-start"
        },
        right: {
          right: 0,
          alignItems: "flex-start"
        },
        center: {
          left: "50%",
          marginLeft: `${-offsetMargin}px`,
          alignItems: "center"
        }
      },
      vertical: {
        top: {
          top: 0
        },
        bottom: {
          bottom: 0
        }
      }
    };
    const horizontal = positionLayout.horizontal[position.horizontal];
    const vertical = positionLayout.vertical[position.vertical];
    return Object.assign({}, horizontal, vertical);
  }
  static ɵfac = function NotificationContainerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotificationContainerComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ComponentFactoryResolver$1), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NotificationContainerComponent,
    selectors: [["kendo-notification-container"]],
    viewQuery: function NotificationContainerComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 7, ViewContainerRef);
        ɵɵviewQuery(_c1, 7);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.container = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.group = _t.first);
      }
    },
    inputs: {
      id: "id"
    },
    standalone: true,
    features: [ɵɵStandaloneFeature],
    decls: 4,
    vars: 0,
    consts: [["group", ""], ["container", ""], [1, "k-notification-group"]],
    template: function NotificationContainerComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div", 2, 0);
        ɵɵelementContainer(2, null, 1);
        ɵɵelementEnd();
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotificationContainerComponent, [{
    type: Component,
    args: [{
      selector: "kendo-notification-container",
      template: `
        <div #group class="k-notification-group">
            <ng-container #container></ng-container>
        </div>
    `,
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: ComponentFactoryResolver$1
  }, {
    type: NgZone
  }], {
    container: [{
      type: ViewChild,
      args: ["container", {
        read: ViewContainerRef,
        static: true
      }]
    }],
    group: [{
      type: ViewChild,
      args: ["group", {
        static: true
      }]
    }],
    id: [{
      type: Input
    }]
  });
})();
var NOTIFICATION_CONTAINER = new InjectionToken("Notification Container");
var NotificationService = class _NotificationService {
  resolver;
  injector;
  container;
  notificationContainers = [];
  position = {
    horizontal: "right",
    vertical: "top"
  };
  applicationRef;
  /**
   * @hidden
   */
  constructor(resolver, injector, container) {
    this.resolver = resolver;
    this.injector = injector;
    this.container = container;
  }
  /**
   * Opens a Notification component. Created Notifications are mounted
   * in the DOM directly in the root application component.
   *
   * @param {NotificationSettings} settings - The settings which define the Notification.
   *
   * @returns {NotificationRef} - A reference to the Notification object and the convenience properties.
   */
  show(settings) {
    if (!settings) {
      throw new Error("NotificationSettings settings are required");
    }
    const target = this.findGroupContainer(settings);
    const position = settings.position || this.position;
    const currentId = `${position.horizontal} ${position.vertical}`;
    let container;
    let notificationRef;
    let notificationContainer = this.notificationContainers.find((c) => target.nativeElement.contains(c.element.nativeElement) && c.id === currentId);
    if (!notificationContainer) {
      container = this.resolver.resolveComponentFactory(NotificationContainerComponent).create(this.injector);
      notificationContainer = container.instance;
      this.appRef.attachView(container.hostView);
      const hostViewElement = container.location.nativeElement;
      const groupContainer = this.findGroupContainer(settings);
      if (!groupContainer) {
        throw new Error(`
                    View Container not found! Inject the NOTIFICATION_CONTAINER or define a specific ViewContainerRef via
                    the appendTo option. See https://www.telerik.com/kendo-angular-ui/components/notification/api/NOTIFICATION_CONTAINER/
                    for more details.
                `);
      }
      groupContainer.nativeElement.appendChild(hostViewElement);
      this.notificationContainers.push(notificationContainer);
    }
    settings.position = position;
    notificationRef = notificationContainer.addNotification(settings);
    return notificationRef;
  }
  get appRef() {
    if (!this.applicationRef) {
      this.applicationRef = this.injector.get(ApplicationRef);
    }
    return this.applicationRef;
  }
  findGroupContainer(settings) {
    let container;
    if (settings.appendTo) {
      container = settings.appendTo.element;
    } else if (this.container) {
      container = this.container;
    } else {
      const appRoot = this.appRef.components && this.appRef.components[0];
      container = appRoot ? appRoot.location : null;
    }
    return container;
  }
  static ɵfac = function NotificationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotificationService)(ɵɵinject(ComponentFactoryResolver$1), ɵɵinject(Injector), ɵɵinject(NOTIFICATION_CONTAINER, 8));
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _NotificationService,
    factory: _NotificationService.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotificationService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ComponentFactoryResolver$1
  }, {
    type: Injector
  }, {
    type: ElementRef,
    decorators: [{
      type: Inject,
      args: [NOTIFICATION_CONTAINER]
    }, {
      type: Optional
    }]
  }], null);
})();
var KENDO_NOTIFICATION = [NotificationComponent, NotificationContainerComponent];
var NotificationModule = class _NotificationModule {
  static ɵfac = function NotificationModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotificationModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _NotificationModule,
    imports: [NotificationComponent, NotificationContainerComponent],
    exports: [NotificationComponent, NotificationContainerComponent]
  });
  static ɵinj = ɵɵdefineInjector({
    providers: [NotificationService, IconsService],
    imports: [NotificationComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotificationModule, [{
    type: NgModule,
    args: [{
      imports: [...KENDO_NOTIFICATION],
      exports: [...KENDO_NOTIFICATION],
      providers: [NotificationService, IconsService]
    }]
  }], null, null);
})();
export {
  KENDO_NOTIFICATION,
  NOTIFICATION_CONTAINER,
  NotificationComponent,
  NotificationContainerComponent,
  NotificationModule,
  NotificationService,
  NotificationSettings
};
//# sourceMappingURL=@progress_kendo-angular-notification.js.map
