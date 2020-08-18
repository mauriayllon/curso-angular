import { Component, OnInit ,OnChanges, DoCheck, Input, AfterContentInit, AfterContentChecked, AfterViewInit,AfterViewChecked, OnDestroy, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-test3',
  template:`<p>Person</p>
<p>Name: {{name}}</p>
<p>Last Name: {{lastName}}</p>
`,
  styles: ['']
})
export class Test3Component implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  //@Input() name:string; (simple)
  //(complejo)

  intermediaria:string;
  @Input() 
    get name(){
      return this.intermediaria;
  } set name(name:string){
      this.intermediaria = 'Hola ' + name;
  }

  @Input() lastName:string;

  constructor() { }
 
  ngOnInit() {
    console.log('ON INIT', this.name)
  }
  ngOnChanges(changes : SimpleChange){
    if(changes && changes.lastName && changes.lastName.currentValue){
      console.log('On changes', changes.lastName.currentValue);
      const aux ='AA ' + changes.lastName.currentValue;
      this.lastName = aux;
    }
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

