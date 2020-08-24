import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { Home2Component } from './home2/home2.component';
import { Home1Component } from './home1/home1.component';

const routes: Routes =[
  {path:'home', component: HomeComponent, children:[
    {path: 'home1', component: Home1Component},
    {path: 'home2', component: Home2Component}
  ]},
  {path: 'admin', component: AdminComponent},
  {path: 'about', component:AboutComponent},
  {path:'user', loadChildren: ()=> import('./modules/user/user.module').then(m=>m.UserModule)}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule],
})

export class AppRouting {}