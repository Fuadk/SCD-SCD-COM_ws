

// modules/tst.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule as AppSharedModule } from './Shared.module';

// modules/dsp.module.ts

// Kendo modules for DSP
import { GridModule, PDFModule, ExcelModule } from '@progress/kendo-angular-grid';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import { LabelModule } from '@progress/kendo-angular-label';

import { ChartsModule } from '@progress/kendo-angular-charts';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { DialogModule, WindowModule } from '@progress/kendo-angular-dialog';
import { MenuModule } from '@progress/kendo-angular-menu';
import { MenusModule } from '@progress/kendo-angular-menu';
import { SortableModule } from '@progress/kendo-angular-sortable';
import { UploadModule } from '@progress/kendo-angular-upload';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { ToolBarModule } from '@progress/kendo-angular-toolbar';
import { NotificationModule } from '@progress/kendo-angular-notification';
//import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { ICON_SETTINGS, IconsModule } from "@progress/kendo-angular-icons";
import { RTL } from '@progress/kendo-angular-l10n';

import { FormsModule } from '@angular/forms';


/////
//import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER,   CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { APP_BASE_HREF  } from '@angular/common';
import { SchedulerModule } from "@progress/kendo-angular-scheduler";
import {  CommonModule } from '@angular/common';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { ListViewModule } from "@progress/kendo-angular-listview";

import { ReactiveFormsModule } from '@angular/forms';
//import 'hammerjs';
// import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
// import {initializeKeycloak} from '../utility/app.init';

import { EditorModule } from '@progress/kendo-angular-editor';
import { MessageService } from '@progress/kendo-angular-l10n';
import { DropDownListModule } from '@progress/kendo-angular-dropdowns';

import { MapModule } from "@progress/kendo-angular-map";
import { ProgressBarModule } from "@progress/kendo-angular-progressbar";

import { DiagramModule } from '@progress/kendo-angular-diagrams';
//import { environment } from '../environments/environment';//   src/environments/environment';

import { NgxToggleModule } from '@nikiphoros/ngx-toggle';
import { NgxDnDModule } from '@swimlane/ngx-dnd';
import { WebcamModule } from 'ngx-webcam';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
import { SignaturePadModule } from 'angular2-signaturepad';
// import { SignaturePadModule } from 'ngx-signaturepad';

import { QRCodeComponent } from 'angularx-qrcode';
import {  DialogsModule} from '@progress/kendo-angular-dialog';


import { UploadInterceptor } from '../app.component';
import { ScrollViewModule } from "@progress/kendo-angular-scrollview";


// Import all tst components

//point1
import { TstCaseDiagramTstTstCaseDiagramDiagramDiagramComponent } from '../components/TST/tst-tst-case-diagram-diagram/tst-tst-case-diagram-diagram.component';

import { TstTestidComponent } from '../components/TST/tst-testid/tst-testid.component';
import { TstCaseDiagramTstTstCaseDiagramDiagram2DiagramComponent } from '../components/TST/tst-tst-case-diagram-diagram2/tst-tst-case-diagram-diagram2.component';
const tstRoutes: Routes = [
  
  

  //{ path: '**', component: null },
  
      
		
		
		{ path: 'tst_tst_case_diagram_diagram', component: TstCaseDiagramTstTstCaseDiagramDiagramDiagramComponent },

		{ path: 'tst_testid', component: TstTestidComponent },
		{ path: 'tst_tst_case_diagram_diagram2', component: TstCaseDiagramTstTstCaseDiagramDiagram2DiagramComponent },
];



@NgModule({
  declarations: [
    // All tst components
   
		TstCaseDiagramTstTstCaseDiagramDiagramDiagramComponent,

		TstTestidComponent,
		TstCaseDiagramTstTstCaseDiagramDiagram2DiagramComponent,
  ],
  
  imports: [
    AppSharedModule,   // Provides shared components
    RouterModule.forChild(tstRoutes),
    RouterModule,
        GridModule,
        PDFModule,
        PDFExportModule,
        ExcelModule,
        FormsModule,
        LabelModule,

        ChartsModule,
        ButtonsModule,
        InputsModule,
        DropDownsModule,
        LayoutModule,
        DialogModule,
        SortableModule,
        WindowModule,
        UploadModule,
        DateInputsModule,
        ToolBarModule,
        NotificationModule,
        //TreeViewModule,
        IconsModule,

        /////
             QRCodeComponent,
              // KeycloakAngularModule,
                SchedulerModule ,
                CommonModule,
                WebcamModule,
           
            //BrowserAnimationsModule,
            //BrowserModule,
            
            
            
            
            DialogsModule,
            DropDownListModule,
            
            
            EditorModule,
            
            
            
            HttpClientModule,
            IndicatorsModule,
            ScrollViewModule,
            
            
            
            ListViewModule,
            ReactiveFormsModule,
            MenuModule,
            MenusModule,
            NgxToggleModule,
            
           
            
            MapModule,
            ProgressBarModule,
            DiagramModule,
            
           
         
            WindowModule,
            
            
            /////    
            NgxDnDModule.forRoot(),
  ],
  providers: [
     
      {
        provide: HTTP_INTERCEPTORS,
        useClass: UploadInterceptor,
        multi: true
      },
     
    ],
  exports: []
})
export class tstModule { 
      constructor() {
    
    // Log what components are in this module
  }
}