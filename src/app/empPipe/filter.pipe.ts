import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(emparray:any[],searchTerm:string,searchKey:string):any[] {
    //variable to store the data
    const result:any=[]
    if(!emparray || !searchTerm || !searchKey)
    {
      return emparray
    }
    else
    {
      emparray.forEach(item=>{
        if(item[searchKey].includes(searchTerm))
        {
          result.push(item)
        }
      })
      return result
    }
  }

 
}
