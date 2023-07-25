import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //create object for behaviour subject
  search=new BehaviorSubject("")

  constructor(private http:HttpClient) { }
  //api to login
  login(uname:any,psw:any)
  {
    const body={
      uname,
      psw
    }
    return this.http.post('http://localhost:3000/login',body)
  }
  
  //add employee
  addEmployee(eid:any,ename:any,eposition:any,edept:any,ephone:any,esal:any,ejoining:any,estaff:any,eleave:any)
  {
    const body={
      eid,ename,eposition,edept,ephone,esal,ejoining,estaff,eleave
    }
    return this.http.post('http://localhost:3000/addEmployee',body)
  }
  
  //single employee data //api to get emp array
  getEmployee()
  {
    return this.http.get('http://localhost:3000/employee')
  }
  //update employee
  updateEmp(eid:any,empObject:any)
{
  return this.http.put('http://localhost:3000/employee/'+eid,empObject)
}
//delete employee
deleteEmployee(eid:any)
{
  return this.http.delete('http://localhost:3000/deleteEmployee/'+eid)
}


//add product
addProduct(pid:any,pname:any,quantity:any,pdate:any,pexport:any,pplace:any)
  {
    const body={
      pid,pname,quantity,pdate,pexport,pplace
    }
    return this.http.post('http://localhost:3000/addProduct',body)
  }
// product data in table
getProduct()
  {
    return this.http.get('http://localhost:3000/product')
  }
  //update product
  updateProduct(pid:any,proObject:any)
{
  return this.http.put('http://localhost:3000/product/'+pid,proObject)
}
//delete product
deleteProduct(pid:any)
{
  return this.http.delete('http://localhost:3000/deleteProduct/'+pid)
}


//add raw
addRaw(rid:any,rname:any,rqty:any,rfrom:any,rdate:any,usage:any)
  {
    const body={
      rid,rname,rqty,rfrom,rdate,usage
    }
    return this.http.post('http://localhost:3000/addRaw',body)
  }
  //single raw data
getRaw()
{
  return this.http.get('http://localhost:3000/rawmaterial')
}
//update raw
updateRaw(rid:any,proObject:any)
{
return this.http.put('http://localhost:3000/rawmaterial/'+rid,proObject)
}
//delete raw
deleteRaw(rid:any)
{
return this.http.delete('http://localhost:3000/deleteRaw/'+rid)
}
}
