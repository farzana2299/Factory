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
  addEmployee(eid:any,ename:any,eposition:any,edept:any,ephone:any,email:any,ephoto:any,esal:any,ejoining:any,estaff:any,eleaving:any)
  {
    const body={
      eid,ename,eposition,edept,ephone,email,ephoto,esal,ejoining,estaff,eleaving
    }
    return this.http.post('http://localhost:3000/addEmployee',body)
  }
  
  //api to get emp array
  getEmployee()
  {
    return this.http.get('http://localhost:3000/employee')
  }
  //get single data
  getEmp(eid:any)
  {
    return this.http.get('http://localhost:3000/viewemp/'+eid)
  }
  //update employee
  editEmp(eid:any,empObject:any)
{
  return this.http.post('http://localhost:3000/editEmployee/'+eid,empObject)
}
//delete employee
deleteemp(eid:any)
{
  return this.http.delete('http://localhost:3000/viewemp/'+eid)
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
  getPro(pid:any)
  {
    return this.http.get('http://localhost:3000/viewpro/'+pid)
  }
  //update product
  editPro(pid:any,proObject:any)
{
  return this.http.post('http://localhost:3000/editProduct/'+pid,proObject)
}
//delete product
deletepro(pid:any)
{
  return this.http.delete('http://localhost:3000/viewpro/'+pid)
}


//add raw
addRaw(rid:any,rname:any,rqty:any,rfrom:any,rdate:any,usage:any)
  {
    const body={
      rid,rname,rqty,rfrom,rdate,usage
    }
    return this.http.post('http://localhost:3000/addRaw',body)
  }
  //data in table
getRaw()
{
  return this.http.get('http://localhost:3000/rawmaterial')
}
getsRaw(rid:any)
{
  return this.http.get('http://localhost:3000/viewraw/'+rid)
}
//update raw
editRaw(rid:any,proObject:any)
{
return this.http.post('http://localhost:3000/editRaw/'+rid,proObject)
}
//delete raw
deleteraw(rid:any)
{
return this.http.delete('http://localhost:3000/viewraw/'+rid)
}
}
