import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  searchString=""
  emparray:any
  eid:any
  date:any;
  searchTerm=''
  
constructor(private ds:DataService,private router:Router)
{}
ngOnInit():void
{
  this.ds.getEmployee().subscribe((result:any)=>{
    this.emparray=result.message
  })
  this.ds.search.subscribe((value:any)=>{
    this.searchString=value
  })
}
addEmp()
{
  this.router.navigate(['/addEmployee']);
}
editEmployee()
{
  this.router.navigate(['/editEmployee']);
}
deleteEmployee(eid:any)
{
  this.ds.deleteEmployee(eid).subscribe((result:any)=>{
    alert(result.message)
    console.log(eid);
    
    this.router.navigate(['/employee']);
  })
}
search(event:any)
{
  this.searchTerm=event.target.value
  //send data to behaviour subject
  this.ds.search.next(this.searchTerm)
}
 filterPipe(data:any)
 {
  this.searchTerm=data
 }
}

