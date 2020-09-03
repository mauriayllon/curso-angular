import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../../../../../../services/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, OnDestroy {

  products=[];

  productForm : FormGroup;
  //nameControl = new FormControl();

  productSubs: Subscription;
  productGetSubs: Subscription;

  constructor(private formBuilder: FormBuilder, private productService: ProductService) {
    this.productGetSubs = this.productService.getProducts().subscribe(res => {
      Object.entries(res).map(p => this.products.push(p[1]));
    });
   }

  ngOnInit() {
    this.productForm = this.formBuilder.group({
      description:['', [Validators.required, Validators.minLength(4)]],
      imageUrl:'',
      ownerId:'',
      price:'',
      title:''
    })
  } 
  /*
    onEnviar(){
    console.log('Valor ', this.nameControl);
    console.log('Valor ,',this.nameControl.value);
  }*/

  onEnviar2(){
    console.log('Form group: ',this.productForm.value);
    this.productSubs = this.productService.addProduct(this.productForm.value).subscribe(
      res => {console.log('Resp: ', res)}, err =>{
        console.log('Error de servidor')
      })
  }

  ngOnDestroy(){
    this.productSubs ? this.productSubs.unsubscribe():'';  }

}