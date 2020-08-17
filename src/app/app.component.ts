import { Component, OnInit } from '@angular/core';
import {from, fromEvent} from 'rxjs';
import { EmitterVisitorContext } from '@angular/compiler';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'curso-angular';

  sw:boolean=true;

  name='mauricio';

  persons=[1,2,3,4,5];
 
  aux = 4;

  auxColor = 'red';

 
  auxClass=true; 
 
  personss=[{name:'Mauri',
  lastName:'Ayllon',
  age: 21,
  enable: true},
  {name:'Maria Emilia',
  lastName:'Aguilar',
  age: 21,
  enable: true},
  {name:'James',
  lastName:'Baci',
  age: 21,
  enable: false},
  {name:'Mauri',
  lastName:'Gui',
  age: 21,
  enable: false}]
 
  auxNumber: number=3;

  auxExponent: number=2;

  numbers =[1,2,3,4,4,5,6,7,8,9,10];

  ngOnInit(){
    console.log('Pura :', this.pura(6,3))
    console.log('Pura :', this.impura(6,3))
  }  

  pura(a:number, b:number){
    return a+b;
  }

  impura(a:number, b:number){
    return a + b + Math.random();
  }
           
 saveClickChild(event){
   console.log('Event Child: ', event)
 }
 
 clickSaveChild(event){
   console.log('Event Child: ', event)
 }   
}
  