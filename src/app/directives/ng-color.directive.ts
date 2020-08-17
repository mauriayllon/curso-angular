import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appNgColor]'
})
export class NgColorDirective {
//elementRef es para pasar htmls

  constructor(el: ElementRef) { 
    console.log("ElementRef", el);
    el.nativeElement.style.backgroundColor = 'pink'; 
  }
}