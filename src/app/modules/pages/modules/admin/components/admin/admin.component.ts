import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../../../../../../shared/services/product.service';
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
  productDeleteSubs: Subscription;
  productUpdateSubs: Subscription;
  idEdit: any;

  constructor(private formBuilder: FormBuilder, private productService: ProductService) {}

  ngOnInit() {
    this.loadProduct();
    this.productForm = this.formBuilder.group({
      description:['', [Validators.required, Validators.minLength(4)]],
      imageUrl:'',
      ownerId:'',
      price:'',
      title:''
    })
  } 

  loadProduct(): void {
    this.products = [];
    this.productGetSubs = this.productService.getProducts().subscribe(res => {
      Object.entries(res).map((p: any) => this.products.push({id: p[0], ...p[1]}));
    });
  }
  
  onDelete(id: any): void {
   this.productDeleteSubs = this.productService.deleteProduct(id).subscribe(
      res => {
        console.log('RESPONSE: ', res);
        this.loadProduct();
      },
      err => {
        console.log('ERROR: ');
      }
    );
  }

  onEdit(product): void {
    this.idEdit = product.id;
    this.productForm.patchValue(product);
  }

  onUpdateProduct(): void {
   this.productUpdateSubs = this.productService.updateProduct(this.idEdit, this.productForm.value).subscribe(
      res => {
        console.log('RESP UPDATE: ', res);
        this.loadProduct();
      },
      err => {
        console.log('ERROR UPDATE DE SERVIDOR');
      }
    );
  }

  onEnviar2(){
    console.log('Form group: ',this.productForm.value);
      this.productSubs = this.productService.addProduct(this.productForm.value).subscribe(
      res => {console.log('Resp: ', res)}, err =>{
        console.log('Error de servidor')
      })
  }

  ngOnDestroy(){
    this.productSubs ? this.productSubs.unsubscribe():''; 
    this.productGetSubs ? this.productGetSubs.unsubscribe():'';}
}