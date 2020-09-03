import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../../../../../../services/product.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  productForm : FormGroup;
  //nameControl = new FormControl();

  constructor(private formBuilder: FormBuilder, private productService: ProductService) {
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
    this.productService.addProduct(this.productForm.value).subscribe(
      res => {console.log('Resp: ', res)}, err =>{
        console.log('Error de servidor')
      })
  }

}