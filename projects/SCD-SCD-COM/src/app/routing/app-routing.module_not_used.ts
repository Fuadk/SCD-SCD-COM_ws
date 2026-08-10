// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../utility/app.guard';

// Eager loaded components (needed immediately)
import { AdmLoginComponent } from '../components/adm/adm-login/adm-login.component';
import { AdmBlankComponent } from '../components/adm/adm-blank/adm-blank.component';

// Define routes with lazy loading
const routes: Routes = [
  // Public routes - no lazy loading needed
  { path: 'adm_login', component: AdmLoginComponent },
  { path: '', component: AdmBlankComponent, canActivate: [AuthGuard] },
  
  // LAZY LOAD ADMIN MODULE
  { 
    path: '',  // Empty path to preserve URLs
    loadChildren: () => import('../modules/adm.module').then(m => m.AdmModule)
  },
  
  // LAZY LOAD DSP MODULE  
  {
    path: '',  // Empty path to preserve URLs
    loadChildren: () => import('../modules/dsp.module').then(m => m.DspModule)
  },
  
  // LAZY LOAD ATN MODULE
  {
    path: '',  // Empty path to preserve URLs
    loadChildren: () => import('../modules/prj1.module').then(m => m.prj1Module)
  },
  
  // Catch-all
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }