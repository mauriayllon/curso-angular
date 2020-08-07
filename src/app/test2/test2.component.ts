import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {


  @Input() age: number;
  @Input() name: string;
  @Input() description: string;
  @Output() clickSave = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClickSave(){
    this.clickSave.emit({
      name:this.name,
      age:this.age,
      description: this.description
    })
  }

}