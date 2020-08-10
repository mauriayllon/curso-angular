import { Component, OnInit, Input, Output,EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
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