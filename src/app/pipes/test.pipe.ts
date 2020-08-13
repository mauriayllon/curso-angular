import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test'
})
export class TestPipe implements PipeTransform {

//? para opcional parametro

  transform(value: any, args?: any): any {
    return "hi " + value;
  }
  
} 