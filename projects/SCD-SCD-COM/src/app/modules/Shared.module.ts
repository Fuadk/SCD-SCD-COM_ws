

// modules/common.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Kendo modules needed for common components
import { GridModule } from '@progress/kendo-angular-grid';
import { ButtonsModule } from '@progress/kendo-angular-buttons';

import { InputsModule } from '@progress/kendo-angular-inputs';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { UploadModule } from '@progress/kendo-angular-upload';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { IconsModule } from '@progress/kendo-angular-icons';
import {WebcamModule} from 'ngx-webcam';
import {  PDFModule, ExcelModule} from '@progress/kendo-angular-grid';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import { LabelModule } from '@progress/kendo-angular-label';

/////
//import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER,   CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { APP_BASE_HREF  } from '@angular/common';
//import { SchedulerModule } from "@progress/kendo-angular-scheduler";
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
//import { Routes , RouterModule } from '@angular/router';
import { ListViewModule } from "@progress/kendo-angular-listview";
//import 'hammerjs';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import {initializeKeycloak} from '../utility/app.init';

import { WindowModule } from '@progress/kendo-angular-dialog';
import { MenuModule } from '@progress/kendo-angular-menu';
//import { EditorModule } from '@progress/kendo-angular-editor';
import { MessageService } from '@progress/kendo-angular-l10n';
import { ToolBarModule } from '@progress/kendo-angular-toolbar';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { DropDownListModule } from '@progress/kendo-angular-dropdowns';
import { ChartsModule } from '@progress/kendo-angular-charts';
import {  NotificationModule } from '@progress/kendo-angular-notification';

//import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { SortableModule } from '@progress/kendo-angular-sortable';
import { MapModule } from "@progress/kendo-angular-map";
import { ProgressBarModule } from "@progress/kendo-angular-progressbar";

import { ICON_SETTINGS } from "@progress/kendo-angular-icons";

import { RTL } from '@progress/kendo-angular-l10n';
//import { environment } from '../environments/environment';//   src/environments/environment';
import {FocusModule} from 'angular2-focus';
//import { panelbarRouting, appRoutingProviders } from './routing/panelbar.routes';
import { NgxToggleModule } from '@nikiphoros/ngx-toggle';
import { NgxDnDModule } from '@swimlane/ngx-dnd';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
// import { SignaturePadModule } from 'ngx-signaturepad';
//import { SignaturePadModule } from 'angular2-signaturepad';
import { NgEventBus } from 'ng-event-bus';

import { QRCodeComponent } from 'angularx-qrcode';
import {  DialogsModule} from '@progress/kendo-angular-dialog';



import { ScrollViewModule } from "@progress/kendo-angular-scrollview";
import { provideCodeEditor } from '@ngstack/code-editor';
import { CodeEditorModule } from '@ngstack/code-editor';

/////
//import { SafeHtmlPipe } from '../pipes/safe-html.pipe';

// Common components (used across multiple modules)
import { DspUploadComponent } from '../components/dsp/dsp-upload/dsp-upload.component';
import { DspWebcamComponent } from '../components/dsp/dsp-webcam/dsp-webcam.component';
import { DspDiagramWrapComponent } from '../components/dsp/dsp-diagram-wrap/dsp-diagram-wrap.component';
import { CodeEditorComponent } from '../components/dsp/code-editor/code-editor.component';

import { SomTabsCodesGridComponent } from '../components/adm/som-tabs-codes-grid/som-tabs-codes-grid.component';
import { SomCodesComponent } from '../components/adm/som-codes/som-codes.component';
import { SomTabsCodesSpecFormComponent } from '../components/adm/som-tabs-codes-spec-form/som-tabs-codes-spec-form.component';
import { AdmRulesComponent } from '../components/adm/adm-rules/adm-rules.component';
import { AdmRuleLogGridComponent } from '../components/adm/adm-rule-log-grid/adm-rule-log-grid.component';
import { AdmRuleActionGridComponent } from '../components/adm/adm-rule-action-grid/adm-rule-action-grid.component';
import { AdmRuleItemGridComponent } from '../components/adm/adm-rule-item-grid/adm-rule-item-grid.component';
import { AdmRuleDefFormComponent } from '../components/adm/adm-rule-def-form/adm-rule-def-form.component';
import { AdmRulesHostsComponent } from '../components/adm/adm-rules-hosts/adm-rules-hosts.component';
import { AdmRuleHostMapFormComponent } from '../components/adm/adm-rule-host-map-form/adm-rule-host-map-form.component';
import { AdmRuleHostFormComponent } from '../components/adm/adm-rule-host-form/adm-rule-host-form.component';
import { AdmRuleLogFormComponent } from '../components/adm/adm-rule-log-form/adm-rule-log-form.component';
import { DspDashboardComponent } from '../components/dsp/dsp-dashboard/dsp-dashboard.component';
import { DspDynamicChartComponent } from '../components/dsp/dsp-dynamic-chart/dsp-dynamic-chart.component';
import { DspOrdersFormComponent } from '../components/dsp/dsp-orders-form/dsp-orders-form.component';
import { MDIWindowComponent } from '../components/dsp/mdi-window/mdi-window.component';
import {AiAiAiFormFormComponent} from '../components/ai/ai-ai-form/ai-ai-form.component';
import {AdmAilogsComponent} from '../components/ai/adm-ailogs/adm-ailogs.component';
import {AdmAiLogHeadAdmAdmAiLogHeadGridGridComponent} from '../components/ai/adm-adm-ai-log-head-grid/adm-adm-ai-log-head-grid.component'
import {AdmAiLogDetailAdmAdmAiLogDetailGridGridComponent} from '../components/ai/adm-adm-ai-log-detail-grid/adm-adm-ai-log-detail-grid.component'
import {AdmAiLogDetailAdmAdmAiLogDetailFormFormComponent} from '../components/ai/adm-adm-ai-log-detail-form/adm-adm-ai-log-detail-form.component'
@NgModule({
  declarations: [
    //SafeHtmlPipe,
    DspUploadComponent,
    DspWebcamComponent,
    //DspDiagramWrapComponent,
    CodeEditorComponent,
    SomTabsCodesGridComponent,
    SomCodesComponent,
    SomTabsCodesSpecFormComponent,
   AdmRulesComponent,
   AdmRuleLogGridComponent,
   AdmRuleActionGridComponent,
   AdmRuleItemGridComponent,
   AdmRuleDefFormComponent,
   AdmRulesHostsComponent,
   AdmRuleHostMapFormComponent,
   AdmRuleHostFormComponent,
   AdmRuleLogFormComponent,
   DspDashboardComponent,
   DspDynamicChartComponent,
   DspOrdersFormComponent,
   MDIWindowComponent,
   AiAiAiFormFormComponent,
   AdmAilogsComponent,
   AdmAiLogHeadAdmAdmAiLogHeadGridGridComponent,
   AdmAiLogDetailAdmAdmAiLogDetailGridGridComponent,
   AdmAiLogDetailAdmAdmAiLogDetailFormFormComponent,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
     CodeEditorModule.forRoot(
      {
      // Configure editor options here if needed, e.g., baseUrl, editorVersion
      // baseUrl: 'assets/monaco',
      // editorVersion: '0.46.0',
      }
    ),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    GridModule,
    ButtonsModule,
    InputsModule,
    DialogModule,
    UploadModule,
    DropDownsModule,
    LayoutModule,
   IconsModule,
    WebcamModule,
    PDFExportModule,
    PDFModule,
    ExcelModule,
    LabelModule,
/////
 QRCodeComponent,
   KeycloakAngularModule,
    //SchedulerModule ,
    
//BrowserAnimationsModule,
//BrowserModule,

ChartsModule,

DateInputsModule,

DialogsModule,
DropDownListModule,



//EditorModule,



HttpClientModule,
IndicatorsModule,
ScrollViewModule,




ListViewModule,

MenuModule,
NgxToggleModule,
NotificationModule,


SortableModule,
MapModule,
ProgressBarModule,
ToolBarModule,
//TreeViewModule,


WindowModule,


/////    
    
  ],
   providers: [
    [provideCodeEditor()],
   ],
  exports: [
    //SafeHtmlPipe,
    // Export so other modules can use these components
    DspUploadComponent,
    DspWebcamComponent,
//    DspDiagramWrapComponent,
    CodeEditorComponent,
    SomTabsCodesGridComponent,
    SomCodesComponent,
    SomTabsCodesSpecFormComponent,

    AdmRulesComponent,
    AdmRuleLogGridComponent,
    AdmRuleActionGridComponent,
    AdmRuleItemGridComponent,
    AdmRuleDefFormComponent,
    AdmRulesHostsComponent,
    AdmRuleHostMapFormComponent,
    AdmRuleHostFormComponent,
    AdmRuleLogFormComponent,

    DspDashboardComponent,
    DspDynamicChartComponent,
    DspOrdersFormComponent,
    MDIWindowComponent,
    AiAiAiFormFormComponent,
    AdmAilogsComponent,
    AdmAiLogHeadAdmAdmAiLogHeadGridGridComponent,
    AdmAiLogDetailAdmAdmAiLogDetailGridGridComponent,
    AdmAiLogDetailAdmAdmAiLogDetailFormFormComponent,


    GridModule,
    ButtonsModule,
    DialogModule,
    DropDownsModule,
    ExcelModule,
    ChartsModule,
    DateInputsModule,
    DialogsModule,
    DropDownListModule,
    MenuModule
    
  ]
})
export class SharedModule { }