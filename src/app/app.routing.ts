import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*
const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch:'full'},
  
];*/
const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch:'full'},
  {path:'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)},

  {path:'pages', loadChildren: () => import('./modules/pages/pages.module').then(m => m.PagesModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRouting{}
