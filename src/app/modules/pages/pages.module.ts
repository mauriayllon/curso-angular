import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './components/pages/pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeModule } from './modules/home/home.module';
import { AdminModule } from './modules/admin/admin.module';
import { ListModule } from './modules/list/list.module';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    HomeModule,
    AdminModule,
    ListModule
  ],
  declarations: [
    PagesComponent
  ]
})
export class PagesModule { }