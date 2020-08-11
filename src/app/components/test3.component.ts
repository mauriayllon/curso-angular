import { Component, OnInit ,OnChanges, DoCheck, Input, AfterContentInit, AfterContentChecked, AfterViewInit,AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-test3',
  template:`<p>Test</p>
<input type='text'[(ngModel)]="name">
<p>Valor Var Name: {{name}}</p>
`,
  styles: ['']
})
export class Test3Component implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  
  @Input() name: string ;

  constructor() { }
 
  ngOnInit() {
    console.log('ON INIT')
  }
  ngOnChanges(){
    console.log('ON CHANGES')
  }
  ngDoCheck(){
    console.log('DO CHECK')
  }
  ngAfterContentInit(){
    console.log('AfterContentInit')
  }
  ngAfterContentChecked(){
    console.log('AfterContentChecked')
  }
  ngAfterViewInit(){
    console.log('AfterViewInit')
  }
  ngAfterViewChecked(){
    console.log('AfterViewChecked')
  } 
  ngOnDestroy(){
    console.log('OnDestroy') 
  }
    
}