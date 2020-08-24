import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './components/user/user.component';
import { User1Component } from './components/user1/user1.component';
import { User2Component } from './components/user2/user2.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  declarations: [
    UserComponent,
    User1Component,
    User2Component
  ],
  exports:[
   
  ] 
}) 
export class UserModule { }