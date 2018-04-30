import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, propName:string, propValue:string): any {
    if(propValue.length===0) return value;
    if(value.length === 0){
      return null;
    }
    else{
      let returnArray: any[] = [];
      /*for(let x=0; x<value.length; x++)
      {
        if(value[x][propName] === propValue){
          returnArray.push(value[x]);
        }
      }    */ 
      for(let item of value){
        if(item[propName]===propValue){
          returnArray.push(item);
        }
      }
      console.log(returnArray);
      return returnArray;
    }
  }
}
