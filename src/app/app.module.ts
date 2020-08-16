import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './components/test.component';
import { Test2Component } from './components/test2.component';
import { FormsModule } from '@angular/forms';
import { Test3Component } from './components/test3.component';
import { PersonModule } from './modules/person/person.module';
import { ProductoModule } from './modules/producto/producto.module';
import { UserModule } from './modules/user/user.module';
import { AdminModule } from './modules/admin/admin.module';
import { TestPipe } from './pipes/test.pipe';
import { ExpoPipe } from './pipes/expo.pipe';
import { PurePipe } from './pipes/pure.pipe';
import { ImpurePipe } from './pipes/impure.pipe';




 

   
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test2Component,
    Test3Component,
    TestPipe,
    ExpoPipe,
    PurePipe,
    ImpurePipe
  ],
  imports: [ 
    BrowserModule,
    FormsModule,
    PersonModule,
    ProductoModule,
    UserModule,
    AdminModule
  ], 
  exports:[
 
  ], 
  //servicios
  providers: [],


 
  bootstrap: [AppComponent]
}) 
export class AppModule { }
