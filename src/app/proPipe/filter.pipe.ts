import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(proarray:any[],searchTerm:string,searchKey:string):any[] {
    //variable to store the data
    const result:any=[]
    if(!proarray || !searchTerm || !searchKey)
    {
      return proarray
    }
    else
    {
      proarray.forEach(item=>{
        if(item[searchKey].includes(searchTerm))
        {
          result.push(item)
        }
      })
      return result
    }
  }

}
