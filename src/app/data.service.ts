import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  addEmployee(empObject:any)
  {
    return this.http.get('http://localhost:3000/addEmployee',empObject)
  }
  //single data
  getEmployee(eid:any)
  {
    return this.http.get('http://localhost:3000/employee/'+eid)
  }
  updateEmp(eid:any,empObject:any)
{
  return this.http.put('http://localhost:3000/employee/'+eid,empObject)
}
deleteEmployee(eid:any)
{
  return this.http.delete('http://localhost:3000/products/'+eid)
}
}
