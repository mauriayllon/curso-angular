import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  productForm : FormGroup;
  //nameControl = new FormControl();

  constructor(private formBuilder: FormBuilder) {

   }

  ngOnInit() {
    this.productForm = this.formBuilder.group({
      description:'',
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
    console.log('Form group: ',this.productForm.value)
  }

}