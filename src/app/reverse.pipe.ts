import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any): any {
    let reverseValue:string = '';
    for(let x=value.length-1; x>=0; x--){      
      reverseValue+=value[x];
    }
    return reverseValue;
  }

}
