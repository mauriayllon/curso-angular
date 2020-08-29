import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './components/pages/pages.component';


const routes: Routes = [
   {path:'', 
   component: PagesComponent,
   children:[
  {path:'',redirectTo:'home',pathMatch:'full'},

  {path:'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)},

  {path:'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)},

  {path:'list', loadChildren: () => import('./modules/list/list.module').then(m => m.ListModule)}
   ] 
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class PagesRoutingModule{}
