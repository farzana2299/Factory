import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(proarray:any[],searchString:string,propName:string):any {
    const result:any=[]
    if(!proarray || searchString=="" || propName=="")
    {
      return proarray
    }
    else{
     proarray.forEach((item:any)=>{
        if(item[propName].trim().toLowerCase().includes(searchString.trim().toLowerCase())){
          result.push(item)
        }
      })
      return result
    }
  }

}
