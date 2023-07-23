import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(emparray:any[],searchString:string,ename:string):any {
    const result:any=[]
    if(!emparray || searchString=="" || ename=="")
    {
      return emparray
    }
    else{
      emparray.forEach((item:any)=>{
        if(item[ename].trim().toLowerCase().includes(searchString.trim().toLowerCase())){
          result.push(item)
        }
      })
      return result
    }
  }

}
