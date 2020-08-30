import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { NgElseDirective } from '../../directives/ng-else.directive';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
  declarations: [
    NgElseDirective,
    LoginComponent
  ]
})
export class LoginModule { }