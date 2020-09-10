import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../../../../../../shared/services/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  products=[];

  productSubs: Subscription;
  
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productSubs = this.productService.getProducts().subscribe(res => {
      Object.entries(res).map(p => this.products.push(p[1]));
    });
  }
  ngOnDestroy(){
    this.productSubs ? this.productSubs.unsubscribe():'';
  }


}