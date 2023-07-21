import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(rawarray: any[], searchTerm: string, searchKey: string): any[] {
    //variable to store the data
    const result: any = []
    if (!rawarray || !searchTerm || !searchKey) {
      return rawarray
    }
    else {
      rawarray.forEach(item => {
        if (item[searchKey].includes(searchTerm)) {
          result.push(item)
        }
      })
      return result
    }
  }
}


