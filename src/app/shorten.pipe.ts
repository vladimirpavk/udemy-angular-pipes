import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(value: any, count : { sliceCount:number, sliceCount2:number }): any {
    console.log(count.sliceCount+" - "+count.sliceCount2);
    return null;
  }

}
