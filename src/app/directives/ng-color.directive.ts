import { Directive, ElementRef, Input, Output, HostListener } from '@angular/core';

@Directive({
  selector: '[appNgColor]'
})
export class NgColorDirective {
//elementRef es para pasar htmls


  @Input()
  @Output()

  @HostListener('mouseenter') onMouseEnter(){
    console.log("Mouse enter")
    this.changeColor('green');
  }
  @HostListener('mouseleave') onMouseLeave(){
    console.log("Mouse Leave");
    this.changeColor('purple');
  }


  constructor(private el: ElementRef) { 
    console.log("ElementRef", el);
    this.changeColor('gray') 
  }
 
  changeColor(color : string){
    this.el.nativeElement.style.backgroundColor = color;
  }
}