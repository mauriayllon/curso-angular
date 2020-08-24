import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './components/test.component';
import { Test2Component } from './components/test2.component';
import { FormsModule } from '@angular/forms';
import { Test3Component } from './components/test3.component';
import { PersonModule } from './modules/person/person.module';
import { ProductoModule } from './modules/producto/producto.module';
import { AdminModule } from './modules/admin/admin.module';
import { TestPipe } from './pipes/test.pipe';
import { ExpoPipe } from './pipes/expo.pipe';
import { PurePipe } from './pipes/pure.pipe';
import { ImpurePipe } from './pipes/impure.pipe';
import { NgColorDirective } from './directives/ng-color.directive';
import { NgFocusDirective } from './directives/ng-focus.directive';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { AppRouting } from './app.routing';
import { HomeComponent } from './home/home.component';
import { Home1Component } from './home1/home1.component';
import { Home2Component } from './home2/home2.component';

  

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test2Component,
    Test3Component,
    TestPipe,
    ExpoPipe,
    PurePipe,
    ImpurePipe,
    NgColorDirective,
    NgFocusDirective,
    AboutComponent,
    AdminComponent,
    HomeComponent,
    Home1Component,
    Home2Component,
  ],
  imports: [ 
    BrowserModule,
    FormsModule,
    PersonModule,
    ProductoModule,
    AdminModule,
    AppRouting
  ], 
  exports:[
 
  ], 
  //servicios
  providers: [],


 
  bootstrap: [AppComponent]
}) 
export class AppModule { }
