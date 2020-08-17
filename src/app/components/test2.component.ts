import { Component, OnInit, Input, Output,EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-test2',
  template:`<p>Componente test2</p> 
<p>Entrada Age: {{age}}</p>
<p>Entrada name: {{name}}</p>
<p>Entrada description: {{description}}</p>
<button (click)="onClickSave()">save</button>

<input type="text" [(ngModel)]="user">
 
<p> USER: {{user}}</p>`,
  styles: [``]
}) 
export class Test2Component implements OnChanges, OnInit {
 

  @Input() age: number;
  @Input() name: string;
  @Input() description: string;
  @Output() clickSave = new EventEmitter();
  user:string='maria';
  constructor() { }

  ngOnChanges(){
    console.log('OnChanges')
  }
  ngOnInit() {
    console.log('OnInit')
  }


  onClickSave(){
    this.clickSave.emit({
      name:this.name,
      age:this.age,
      description: this.description
    })
  }

}