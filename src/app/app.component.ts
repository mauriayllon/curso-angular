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

  ngOnInit(){
    
  }  

 saveClickChild(event){
   console.log('Event Child: ', event)
 }
 
 clickSaveChild(event){
   console.log('Event Child: ', event)
 }
}
