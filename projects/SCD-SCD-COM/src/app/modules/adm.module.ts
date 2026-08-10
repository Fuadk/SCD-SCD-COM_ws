

// modules/adm.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';  // Add this
import { SharedModule as AppSharedModule } from './Shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
// Kendo modules for admin
import { GridModule, PDFModule, ExcelModule } from '@progress/kendo-angular-grid';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import { LabelModule } from '@progress/kendo-angular-label';

import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { SortableModule } from '@progress/kendo-angular-sortable';
import { ToolBarModule } from '@progress/kendo-angular-toolbar';
import { MenuModule } from '@progress/kendo-angular-menu';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { ChartsModule } from '@progress/kendo-angular-charts';


import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { UploadModule } from '@progress/kendo-angular-upload';
import { IconsModule } from '@progress/kendo-angular-icons';
import {WebcamModule} from 'ngx-webcam';

/////
//import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER,   CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { APP_BASE_HREF  } from '@angular/common';
import { SchedulerModule } from "@progress/kendo-angular-scheduler";
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
//import { Routes , RouterModule } from '@angular/router';
import { ListViewModule } from "@progress/kendo-angular-listview";
//import 'hammerjs';
//import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
//import {initializeKeycloak} from '../utility/app.init';

import { WindowModule } from '@progress/kendo-angular-dialog';
import { EditorModule } from '@progress/kendo-angular-editor';
import { MessageService } from '@progress/kendo-angular-l10n';
import { DropDownListModule } from '@progress/kendo-angular-dropdowns';
import {  NotificationModule } from '@progress/kendo-angular-notification';

import { MapModule } from "@progress/kendo-angular-map";
import { ProgressBarModule } from "@progress/kendo-angular-progressbar";


//import { environment } from '../environments/environment';//   src/environments/environment';
//import { panelbarRouting, appRoutingProviders } from './routing/panelbar.routes';
import { NgxToggleModule } from '@nikiphoros/ngx-toggle';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
// import { SignaturePadModule } from 'ngx-signaturepad';

//import { QRCodeComponent } from 'angularx-qrcode';
import {  DialogsModule} from '@progress/kendo-angular-dialog';



import { ScrollViewModule } from "@progress/kendo-angular-scrollview";
/////


// Import all ADM components (start with 5, add more gradually)
import { AdmThemeDetailGridGridComponent } from '../components/adm/adm-theme-detail-grid/adm-theme-detail-grid.component';
import { AdmThemeDefFormFormComponent } from '../components/adm/adm-theme-def-form/adm-theme-def-form.component';
import { AdmThemeDefComponent } from '../components/adm/adm-theme-def/adm-theme-def.component';
import { AdmTeamFormComponent } from '../components/adm/adm-team-form/adm-team-form.component';
import { AdmMenusRoutinesComponent } from '../components/adm/adm-menus-routines/adm-menus-routines.component';
// ... add all other adm components
import { RoutinesFormComponent } from '../components/adm/routines-form/routines-form.component';
import { MenusFormComponent } from '../components/adm/menus-form/menus-form.component';
import { AdmUserGroupAuthorityComponent } from '../components/adm/adm-user-group-authority/adm-user-group-authority.component';
import { AdmUserAuthorityComponent } from '../components/adm/adm-user-authority/adm-user-authority.component';
import { AdmGroupAuthorityComponent } from '../components/adm/adm-group-authority/adm-group-authority.component';
import { AdmGroupinfoFormComponent } from '../components/adm/adm-groupinfo-form/adm-groupinfo-form.component';
import { AdmAuthorityGridComponent } from '../components/adm/adm-authority-grid/adm-authority-grid.component';
import { AdmUserInformationFormComponent } from '../components/adm/adm-user-information-form/adm-user-information-form.component';
import { AdmQueryDefFormComponent } from '../components/adm/adm-query-def-form/adm-query-def-form.component';
//import { AdmRuleItemGridComponent } from '../components/adm/adm-rule-item-grid/adm-rule-item-grid.component';
//import { AdmRuleActionGridComponent } from '../components/adm/adm-rule-action-grid/adm-rule-action-grid.component';
//import { AdmRulesComponent } from '../components/adm/adm-rules/adm-rules.component';
//import { AdmRuleHostFormComponent } from '../components/adm/adm-rule-host-form/adm-rule-host-form.component';
//import { AdmRuleHostMapFormComponent } from '../components/adm/adm-rule-host-map-form/adm-rule-host-map-form.component';
//import { AdmRulesHostsComponent } from '../components/adm/adm-rules-hosts/adm-rules-hosts.component';
import { AdmRuleKeysGridComponent } from '../components/adm/adm-rule-keys-grid/adm-rule-keys-grid.component';
//import { AdmRuleLogGridComponent } from '../components/adm/adm-rule-log-grid/adm-rule-log-grid.component';
//import { AdmRuleLogFormComponent } from '../components/adm/adm-rule-log-form/adm-rule-log-form.component';
//import { AdmRuleDefFormComponent } from '../components/adm/adm-rule-def-form/adm-rule-def-form.component';
import { AdmRulesTreeComponent } from '../components/adm/adm-rules-tree/adm-rules-tree.component';
import { AdmDashboardDefComponent } from '../components/adm/adm-dashboard-def/adm-dashboard-def.component';
import { AdmStatisticsComponent } from '../components/adm/adm-statistics/adm-statistics.component';
import { AdmDashboardDefFormComponent } from '../components/adm/adm-dashboard-def-form/adm-dashboard-def-form.component';
import { AdmDashboardDetailGridComponent } from '../components/adm/adm-dashboard-detail-grid/adm-dashboard-detail-grid.component';
import { AdmMenusRoutinesDragComponent } from '../components/adm/adm-menus-routines-drag/adm-menus-routines-drag.component';
import { LogTransGridComponent } from '../components/adm/log-trans-grid/log-trans-grid.component';
import { AdmLogTransComponent } from '../components/adm/adm-log-trans/adm-log-trans.component';
import { LogTransFormComponent } from '../components/adm/log-trans-form/log-trans-form.component';
import { SomCodesComponent } from '../components/adm/som-codes/som-codes.component';

const admRoutes: Routes = [
  { path: 'ADMTHEME', component: AdmThemeDefComponent },
  { path: 'PRVTEAM', component: AdmTeamFormComponent },
  { path: 'SOMMNU', component: AdmMenusRoutinesComponent },
  { path: 'routines_form', component: RoutinesFormComponent },
  { path: 'menus_form', component: MenusFormComponent },
  { path: 'SOMAUTH', component: AdmUserGroupAuthorityComponent },
  { path: 'adm_user_authority', component: AdmUserAuthorityComponent },
  { path: 'adm_group_authority', component: AdmGroupAuthorityComponent },
  { path: 'adm_groupinfo_form', component: AdmGroupinfoFormComponent },
  { path: 'adm_user_information_form', component: AdmUserInformationFormComponent },
  //{ path: 'SOMRULEDEF_old', component: AdmRulesComponent },
  { path: 'SOMRULEDEF', component: AdmRulesTreeComponent },
  { path: 'SOMSTATDEF', component: AdmStatisticsComponent },
  { path: 'log_trans_grid', component: LogTransGridComponent },
  { path: 'adm_log_trans', component: AdmLogTransComponent },
  { path: 'SOMCODES', component: SomCodesComponent },
  { path: 'SOMMNUDRAG', component: AdmMenusRoutinesDragComponent },
  
  // Default route
  { path: '', redirectTo: 'SOMMNU', pathMatch: 'full' }
];


@NgModule({
  declarations: [
    // All ADM components
    //AdmRuleDefFormComponent,
    AdmThemeDetailGridGridComponent,
    AdmThemeDefFormFormComponent,
    AdmThemeDefComponent,
    AdmTeamFormComponent,
    AdmMenusRoutinesComponent,
    RoutinesFormComponent,
    MenusFormComponent,
    AdmUserGroupAuthorityComponent,
    AdmUserAuthorityComponent,
    AdmGroupAuthorityComponent,
    AdmGroupinfoFormComponent,
    AdmAuthorityGridComponent,
    AdmUserInformationFormComponent,
    AdmQueryDefFormComponent,
    
    AdmRulesTreeComponent,
    //AdmRuleItemGridComponent,
    //AdmRuleActionGridComponent,
    //AdmRulesComponent,
    AdmStatisticsComponent,
    AdmDashboardDefComponent,
    AdmDashboardDefFormComponent,
    AdmDashboardDetailGridComponent,
    //AdmRuleHostFormComponent,
    //AdmRuleHostMapFormComponent,
    //AdmRulesHostsComponent,
    AdmRuleKeysGridComponent,
    //AdmRuleLogGridComponent,
    //AdmRuleLogFormComponent,
    AdmMenusRoutinesDragComponent,
    LogTransGridComponent,
    AdmLogTransComponent,
    LogTransFormComponent,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    AppSharedModule,   // Provides shared components
    RouterModule.forChild(admRoutes),
        RouterModule,
    CommonModule,
    AppSharedModule,  // Provides shared components
    GridModule,
    ReactiveFormsModule,
    FormsModule,
    
    PDFModule,
    PDFExportModule,
    LabelModule,

    ExcelModule,
    TreeViewModule,
    InputsModule,
    DropDownsModule,
    LayoutModule,
    DialogModule,
    SortableModule,
    ToolBarModule,
    MenuModule,
    DateInputsModule,
    ChartsModule,
    ButtonsModule,
    UploadModule,
    IconsModule,
    WebcamModule,


    /////
    //  QRCodeComponent,
    //    KeycloakAngularModule,
        SchedulerModule ,
   
    //BrowserAnimationsModule,
    //BrowserModule,
    ChartsModule,
    
    DateInputsModule,
    DialogModule,
    DialogsModule,
    DropDownListModule,
    DropDownsModule,
    
    EditorModule,
    ExcelModule,
    
    GridModule,
    HttpClientModule,
    IndicatorsModule,
    ScrollViewModule,
    
    InputsModule,
    LayoutModule,
    ListViewModule,
    
    MenuModule,
    NgxToggleModule,
    NotificationModule,
   
    
    SortableModule,
    MapModule,
    ProgressBarModule,
    ToolBarModule,
   
 
    WindowModule,
    
    
    /////    

  ],
  exports: []  // Export if needed by other modules
})
export class AdmModule { }