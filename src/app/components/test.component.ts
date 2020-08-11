import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  template:`<p>Componente test1</p> 
<p>Entrada Age: {{age}}</p>
<button (click)="onClickSave()">save</button> `,
  styles:[``]
})
export class TestComponent implements OnInit {

 @Input() age: number;
 @Output() clickAge = new EventEmitter();
  constructor() { }

  
  ngOnInit() { 
  }

  onClickSave(){
    this.clickAge.emit('hiciste click')
  }

}