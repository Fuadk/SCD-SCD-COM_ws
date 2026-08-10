

// modules/dsp.module.ts
import { NgModule } from '@angular/core';
import { SharedModule as AppSharedModule } from './Shared.module';






// Kendo modules for DSP
import { GridModule, PDFModule, ExcelModule } from '@progress/kendo-angular-grid';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import { LabelModule } from '@progress/kendo-angular-label';

import { ChartsModule } from '@progress/kendo-angular-charts';
//import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { InputsModule } from '@progress/kendo-angular-inputs';
//import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { DialogModule, WindowModule } from '@progress/kendo-angular-dialog';
//import { MenuModule } from '@progress/kendo-angular-menu';
import { SortableModule } from '@progress/kendo-angular-sortable';
import { UploadModule } from '@progress/kendo-angular-upload';
//import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { ToolBarModule } from '@progress/kendo-angular-toolbar';
import { NotificationModule } from '@progress/kendo-angular-notification';
//import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { ICON_SETTINGS, IconsModule } from "@progress/kendo-angular-icons";
import { RTL } from '@progress/kendo-angular-l10n';

import { FormsModule } from '@angular/forms';


import { APP_INITIALIZER,   CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { APP_BASE_HREF  } from '@angular/common';
import {  CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ListViewModule } from "@progress/kendo-angular-listview";

import { ReactiveFormsModule } from '@angular/forms';
//import { DropDownListModule } from '@progress/kendo-angular-dropdowns';

import { NgxToggleModule } from '@nikiphoros/ngx-toggle';
import { NgxDnDModule } from '@swimlane/ngx-dnd';
import { WebcamModule } from 'ngx-webcam';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
import { SignaturePadModule } from 'angular2-signaturepad';
import { DiagramComponent } from '../components/diagram/diagram.component';

//import {  DialogsModule} from '@progress/kendo-angular-dialog';

import { UploadInterceptor } from '../app.component';

import { ScrollViewModule } from "@progress/kendo-angular-scrollview";

/////

// Import all DSP components
import { DspDiagramWrapComponent } from '../components/dsp/dsp-diagram-wrap/dsp-diagram-wrap.component';
import { DspFormFieldsRadioGridComponent } from '../components/dsp/dsp-form-fields-radio-grid/dsp-form-fields-radio-grid.component';
//import { DspDashboardComponent } from '../components/dsp/dsp-dashboard/dsp-dashboard.component';
//import { DspDynamicChartComponent } from '../components/dsp/dsp-dynamic-chart/dsp-dynamic-chart.component';
import { DspReportsComponent } from '../components/dsp/dsp-reports/dsp-reports.component';
import { DspDynamicRwGridComponent } from '../components/dsp/dsp-dynamic-rw-grid/dsp-dynamic-rw-grid.component';
import { DspDynamicRwFormComponent } from '../components/dsp/dsp-dynamic-rw-form/dsp-dynamic-rw-form.component';
import { DspMultistepComponent } from '../components/dsp/dsp-multistep/dsp-multistep.component';
import { DspDynamicGridComponent } from '../components/dsp/dsp-dynamic-grid/dsp-dynamic-grid.component';
import { DspEditorFormComponent } from '../components/dsp/dsp-editor-form/dsp-editor-form.component';
import { DspFormDefFormComponent } from '../components/dsp/dsp-form-def-form/dsp-form-def-form.component';
import { DspFormAreaFormComponent } from '../components/dsp/dsp-form-area-form/dsp-form-area-form.component';
import { DspFormFieldsFormComponent } from '../components/dsp/dsp-form-fields-form/dsp-form-fields-form.component';
import { DspFormDragComponent } from '../components/dsp/dsp-form-drag/dsp-form-drag.component';
import { DspFormPageFormComponent } from '../components/dsp/dsp-form-page-form/dsp-form-page-form.component';
//import { DspOrdersFormComponent } from '../components/dsp/dsp-orders-form/dsp-orders-form.component';
import { DspOrdersGridComponent } from '../components/dsp/dsp-orders-grid/dsp-orders-grid.component';
import { DspOrderTemplatesComponent } from '../components/dsp/dsp-order-templates/dsp-order-templates.component';
import { DspOrderOrdersComponent } from '../components/dsp/dsp-order-orders/dsp-order-orders.component';
import { DspOrderWorkOrdersComponent } from '../components/dsp/dsp-order-work-orders/dsp-order-work-orders.component';
import { DspOrderWorkOrdersGgComponent } from '../components/dsp/dsp-order-work-orders-gg/dsp-order-work-orders-gg.component';
import { DspTemplateDetailGridComponent } from '../components/dsp/dsp-template-detail-grid/dsp-template-detail-grid.component';
import { DspTemplateFormComponent } from '../components/dsp/dsp-template-form/dsp-template-form.component';
import { DspTemplateDetailComponent } from '../components/dsp/dsp-template-detail/dsp-template-detail.component';
import { DspTemplatesComponent } from '../components/dsp/dsp-templates/dsp-templates.component';
import { DspTemplateDetailFormComponent } from '../components/dsp/dsp-template-detail-form/dsp-template-detail-form.component';
import { DspWorkFlowComponent } from '../components/dsp/dsp-workflow/dsp-workflow.component';
import { DspIframFormComponent } from '../components/dsp/dsp-ifram-form/dsp-ifram-form.component';
//import { DspMrzComponent } from '../components/dsp/dsp-mrz-form/dsp-mrz-form.component';
import { DspWorkOrdersGridComponent } from '../components/dsp/dsp-work-orders-grid/dsp-work-orders-grid.component';
import { DspWorkOrdersMyComponent } from '../components/dsp/dsp-work-orders-my/dsp-work-orders-my.component';
import { DspWorkOrdersFormComponent } from '../components/dsp/dsp-work-orders-form/dsp-work-orders-form.component';
import { DspWorkOrderArComponent } from '../components/dsp/dsp-work-order-ar/dsp-work-order-ar.component';
import { DspWorkOrderArGridComponent } from '../components/dsp/dsp-work-order-ar-grid/dsp-work-order-ar-grid.component';
import { AppDspOrdersChartsSrvComponent } from '../components/dsp/app-dsp-orders-charts-srv/app-dsp-orders-charts-srv.component';
import { AppDspOrdersAddComponent } from '../components/dsp/app-dsp-orders-add/app-dsp-orders-add.component';
import { DspBatchFieldsDspBatchDspBatchFieldsGridGridComponent } from '../components/dsp/dsp-batch-dsp-batch-fields-grid/dsp-batch-dsp-batch-fields-grid.component';
import { DspBatchFileDefDspBatchDspBatchFileDefFormFormComponent } from '../components/dsp/dsp-batch-dsp-batch-file-def-form/dsp-batch-dsp-batch-file-def-form.component';
import { DspBatchFileFieldsComponent } from '../components/dsp/dsp-batch-file-fields/dsp-batch-file-fields.component';
import { DspBatchDefDspBatchDspBatchDefFormFormComponent } from '../components/dsp/dsp-batch-dsp-batch-def-form/dsp-batch-dsp-batch-def-form.component';
import { DspBatchFilesDspBatchDspBatchFilesGridGridComponent } from '../components/dsp/dsp-batch-dsp-batch-files-grid/dsp-batch-dsp-batch-files-grid.component';
import { DspBatchLogDspBatchDspBatchLogGridGridComponent } from '../components/dsp/dsp-batch-dsp-batch-log-grid/dsp-batch-dsp-batch-log-grid.component';
import { DspBatchChartBatchProcessingComponent } from '../components/dsp/dsp-batch-chart-batch-processing/dsp-batch-chart-batch-processing.component';
import { DspBatchBatchProcessComponent } from '../components/dsp/dsp-batch-batch-process/dsp-batch-batch-process.component';
import { DspBatchBatchComponent } from '../components/dsp/dsp-batch-batch/dsp-batch-batch.component';
import { DspEkycComponent } from '../components/dsp/dsp-ekyc/dsp-ekyc.component';

//import { AdmRulesComponent } from '../components/adm/adm-rules/adm-rules.component';
const dspRoutes: Routes = [
  //{ path: 'PRVDASH', component: DspDashboardComponent },
  { path: 'PRVRPRT', component: DspReportsComponent },
  { path: 'DSPEKYC', component: DspEkycComponent },
  { path: 'dsp_form_def_form', component: DspFormDefFormComponent },
  { path: 'PRVFORMD', component: DspFormDragComponent },
  { path: 'PRVTEMP', component: DspTemplatesComponent },
  { path: 'DSPWORKFLOW', component: DspWorkFlowComponent },
  { path: 'dsp_template_form', component: DspTemplateFormComponent },
  //{ path: 'dsp_mrz_form', component: DspMrzComponent },
  { path: 'dsp_template_detail', component: DspTemplateDetailComponent },
  //{ path: 'dsp_orders_form', component: DspOrdersFormComponent },
  { path: 'dsp_orders_grid', component: DspOrdersGridComponent },
  { path: 'PRVORDERC', component: DspOrderTemplatesComponent },
  { path: 'dsp_template_detail_grid', component: DspTemplateDetailGridComponent },
  { path: 'dsp_order_orders', component: DspOrderOrdersComponent },
  { path: 'dsp_work_orders_grid', component: DspWorkOrdersGridComponent },
  { path: 'PRVORDERE', component: DspOrderWorkOrdersComponent },
  { path: 'PROVBATCH', component: DspBatchBatchComponent },
  { path: 'PRVORDEROV', component: DspOrderWorkOrdersGgComponent },
  { path: 'PRVMYWO', component: DspWorkOrdersMyComponent },
  { path: 'dsp_work_orders_form', component: DspWorkOrdersFormComponent },
  { path: 'PRVWORDERAR', component: DspWorkOrderArComponent },
  { path: 'PRVORDERSV', component: AppDspOrdersChartsSrvComponent },
  { path: 'PRVORDERAD', component: AppDspOrdersAddComponent },
  
  
  // Default route
  { path: '', redirectTo: 'PRVDASH', pathMatch: 'full' }
];

@NgModule({
    declarations: [
       
        // All DSP components
        DspFormFieldsRadioGridComponent,
        //DspDashboardComponent,
        //DspDynamicChartComponent,
        DspReportsComponent,
        DspDynamicRwGridComponent,
        DspDynamicRwFormComponent,
        DspMultistepComponent,
        DspDynamicGridComponent,
        DspEditorFormComponent,
        DspFormDefFormComponent,
        DspFormAreaFormComponent,
        DspFormFieldsFormComponent,
        DspFormDragComponent,
        DspFormPageFormComponent,
        //DspOrdersFormComponent,
        DspOrdersGridComponent,
        DspOrderTemplatesComponent,
        DspOrderOrdersComponent,
        DspOrderWorkOrdersComponent,
        DspOrderWorkOrdersGgComponent,
        DspTemplateDetailGridComponent,
        DspTemplateFormComponent,
        DspTemplateDetailComponent,
        DspTemplatesComponent,
        DspTemplateDetailFormComponent,
        DspWorkFlowComponent,
        DspIframFormComponent,
        //DspMrzComponent,
        DspWorkOrdersGridComponent,
        DspWorkOrdersMyComponent,
        DspWorkOrdersFormComponent,
        DspWorkOrderArComponent,
        DspWorkOrderArGridComponent,
        AppDspOrdersChartsSrvComponent,
        AppDspOrdersAddComponent,
        DspBatchFieldsDspBatchDspBatchFieldsGridGridComponent,
        DspBatchFileDefDspBatchDspBatchFileDefFormFormComponent,
        DspBatchFileFieldsComponent,
        DspBatchDefDspBatchDspBatchDefFormFormComponent,
        DspBatchFilesDspBatchDspBatchFilesGridGridComponent,
        DspBatchLogDspBatchDspBatchLogGridGridComponent,
        DspBatchChartBatchProcessingComponent,
        DspBatchBatchProcessComponent,
        DspBatchBatchComponent,
        DspEkycComponent,
        DiagramComponent,
        DspDiagramWrapComponent,

        
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [
        AppSharedModule,
         RouterModule.forChild(dspRoutes),
        RouterModule,
        GridModule,
        PDFModule,
        PDFExportModule,
        ExcelModule,
        FormsModule,
        LabelModule,

        //ChartsModule,
        
        InputsModule,
        //DropDownsModule,
        LayoutModule,
        DialogModule,
        SortableModule,
        WindowModule,
        UploadModule,
        //DateInputsModule,
        ToolBarModule,
        NotificationModule,
        //TreeViewModule,
        IconsModule,
                CommonModule,
                WebcamModule,
            //DialogsModule,
            //DropDownListModule,
            HttpClientModule,
            IndicatorsModule,
            ScrollViewModule,
            ListViewModule,
            ReactiveFormsModule,
            NgxToggleModule,
            WindowModule,
            SignaturePadModule,
            
            /////    
            NgxDnDModule.forRoot(),
    ],
    providers: [
       {
      provide: HTTP_INTERCEPTORS,
      useClass: UploadInterceptor,
      multi: true
    },
        { provide: RTL, useValue: "document.documentElement.dir == 'rtl'" },
        
        { provide: APP_BASE_HREF, useValue: window.location.pathname },
        { provide: ICON_SETTINGS, useValue: { type: 'font' } }
      ],
    exports: []
})
export class DspModule { }
