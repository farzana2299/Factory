import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  searchString:any=[]
  emparray:any
  eid:any
  date:any;
  searchTerm:any=[]
  
constructor(private ds:DataService,private router:Router)
{}
ngOnInit():void
{
  this.ds.getEmployee(this.eid).subscribe((result:any)=>{
    this.emparray=result.message
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
deleteEmployee()
{
  this.ds.deleteEmployee(this.eid).subscribe((result:any)=>{
    alert('Employee Deleted')
    this.router.navigate(['/employee']);
  })
}
search(event:any)
{
  this.searchTerm=event.target.value
  //seand data to behaviour subject
  this.ds.search.next(this.searchTerm)
}
 
}

