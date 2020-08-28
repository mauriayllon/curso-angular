import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { ListRoutingModule } from './list-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ListRoutingModule
  ],
  declarations: [
    ListComponent
  ]
})
export class ListModule { }