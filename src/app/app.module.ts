import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './components/test.component';
import { Test2Component } from './components/test2.component';
import { FormsModule } from '@angular/forms';
import { Test3Component } from './components/test3.component';
import { PersonModule } from './modules/person/person.module';


  
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test2Component,
    Test3Component,
  ],
  imports: [ 
    BrowserModule,
    FormsModule,
    PersonModule
  ], 
  //servicios
  providers: [],



  bootstrap: [AppComponent]
}) 
export class AppModule { }
