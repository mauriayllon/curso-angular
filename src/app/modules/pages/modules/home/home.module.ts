import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { HomeRoutingModule } from './home.routing.module';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button'
import { ProductService } from '../../../../shared/services/product.service';




@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCardModule,
    MatButtonModule, 
  ],
  declarations: [
    HomeComponent
  ],
  providers:[
    ProductService
  ]
})
export class HomeModule { }