import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { AppRouting } from './app.routing';
import { HomeComponent } from './home/home.component';
import { Home1Component } from './home1/home1.component';
import { Home2Component } from './home2/home2.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AdminComponent,
    HomeComponent,
    Home1Component,
    Home2Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouting,
    NgbModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
