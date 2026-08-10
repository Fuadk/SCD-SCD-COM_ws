
import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { APP_BASE_HREF ,CommonModule } from '@angular/common';
import { SchedulerModule } from "@progress/kendo-angular-scheduler";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
//import { Routes , RouterModule } from '@angular/router';
import { ListViewModule } from "@progress/kendo-angular-listview";
//import 'hammerjs';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { initializeKeycloak } from './utility/app.init';

import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { LabelModule } from '@progress/kendo-angular-label';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { WindowModule } from '@progress/kendo-angular-dialog';
import { MenuModule } from '@progress/kendo-angular-menu';
import { MenusModule } from '@progress/kendo-angular-menu';

import { UploadModule } from '@progress/kendo-angular-upload';
import { EditorModule } from '@progress/kendo-angular-editor';
import { MessageService } from '@progress/kendo-angular-l10n';
//import { GridModule, PDFModule, ExcelModule } from '@progress/kendo-angular-grid';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import { ToolBarModule } from '@progress/kendo-angular-toolbar';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { DropDownListModule, DropDownsModule } from '@progress/kendo-angular-dropdowns';
//import { ChartsModule } from '@progress/kendo-angular-charts';
import { NotificationModule } from '@progress/kendo-angular-notification';

//import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { DialogModule, DialogsModule } from '@progress/kendo-angular-dialog';
import { SortableModule } from '@progress/kendo-angular-sortable';
import { MapModule } from "@progress/kendo-angular-map";
import { ProgressBarModule } from "@progress/kendo-angular-progressbar";

import { ICON_SETTINGS, IconsModule } from "@progress/kendo-angular-icons";

import { RTL } from '@progress/kendo-angular-l10n';
//import { environment } from '../environments/environment';//   src/environments/environment';
import { FocusModule } from 'angular2-focus';
//import { panelbarRouting, appRoutingProviders } from './routing/panelbar.routes';
import { NgxToggleModule } from '@nikiphoros/ngx-toggle';
import { NgxDnDModule } from '@swimlane/ngx-dnd';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
// import { SignaturePadModule } from 'ngx-signaturepad';
import { SignaturePadModule } from 'angular2-signaturepad';
import { WebcamModule } from 'ngx-webcam';
//import { DiagramComponent } from './components/diagram/diagram.component';
import { NgEventBus } from 'ng-event-bus';

import { QRCodeComponent } from 'angularx-qrcode';
import { starServices } from 'starlib';
//import { Starlib1 } from './components/Starlib1';
import { panelbarRouting, appRoutingProviders } from './routing/panelbar.routes';
import { MyMessageService } from './services/my-message.service';


import { UploadInterceptor } from './app.component';

import { ScrollViewModule } from "@progress/kendo-angular-scrollview";
import { provideCodeEditor } from '@ngstack/code-editor';

import { AdmLoginComponent } from './components/adm/adm-login/adm-login.component';

import { AdmBlankComponent } from './components/adm/adm-blank/adm-blank.component';

import { SharedModule as AppSharedModule } from './modules/Shared.module';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { SCADAService } from './services/scada.service';






// Socket.IO configuration - MUST be properly configured
const socketConfig: SocketIoConfig = {
  url: 'http://localhost:3000',  // Your SCADA backend URL
  options: {
    transports: ['websocket', 'polling'],
    withCredentials: true
  }
};

@NgModule({
  declarations: [
    AppComponent,
   AdmLoginComponent,
   AdmBlankComponent,
   
   
   
   
   
   
   
   
   
   

  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    
    //AppRoutingModule,
    QRCodeComponent,
    KeycloakAngularModule,
    AppRoutingModule,
    CommonModule,
    SchedulerModule,
    WebcamModule,
    BrowserAnimationsModule,
    BrowserModule,
    ButtonsModule,
    //ChartsModule,
    DateInputsModule,
    DialogModule,
    DialogsModule,
    DropDownListModule,
    DropDownsModule,
    EditorModule,
    //ExcelModule,
    FormsModule,
    //GridModule,
    HttpClientModule,
    IndicatorsModule,
    ScrollViewModule,
    InputsModule,
    LabelModule,
    LayoutModule,
    ListViewModule,



    MenuModule,
    MenusModule,
    NgxToggleModule,

    NotificationModule,
    panelbarRouting,
    //PDFExportModule,
    //PDFModule,
    ReactiveFormsModule,

    SortableModule,
    MapModule,
    ProgressBarModule,
    ToolBarModule,
    //TreeViewModule,
    IconsModule,
    UploadModule,
    WindowModule,


    // ADD new modules
    
    AppSharedModule,    // Provides shared components
    
    NgxDnDModule.forRoot(),
    SocketIoModule.forRoot(socketConfig) ,
  ],
  providers: [
    [provideCodeEditor()],
    SCADAService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService]
    },
    starServices,
    MyMessageService,
    { provide: MessageService, useClass: MyMessageService },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UploadInterceptor,
      multi: true
    },
    { provide: RTL, useValue: "document.documentElement.dir == 'rtl'" },
    appRoutingProviders,
    { provide: APP_BASE_HREF, useValue: window.location.pathname },
    { provide: ICON_SETTINGS, useValue: { type: 'font' } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
