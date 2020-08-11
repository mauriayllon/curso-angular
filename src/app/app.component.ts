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


  ngOnInit(){
    
  }  
 
 saveClickChild(event){
   console.log('Event Child: ', event)
 }
 
 clickSaveChild(event){
   console.log('Event Child: ', event)
 }  
}
