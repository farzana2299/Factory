import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(rawarray:any[],searchString:string,propName:string):any {
    const result:any=[]
    if(!rawarray || searchString=="" || propName=="")
    {
      return rawarray
    }
    else{
     rawarray.forEach((item:any)=>{
        if(item[propName].trim().toLowerCase().includes(searchString.trim().toLowerCase())){
          result.push(item)
        }
      })
      return result
    }
  }

}
