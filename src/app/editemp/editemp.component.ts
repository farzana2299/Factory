import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editemp',
  templateUrl: './editemp.component.html',
  styleUrls: ['./editemp.component.css']
})
export class EditempComponent {
  eid:any
  pdata:any={}
  constructor(private ds:DataService,private ar:ActivatedRoute,private rt:Router)
  {
  }
  ngOnInit():void{
    this.ar.params.subscribe((data:any)=>{
      this.eid=data.id
      console.log(this.eid);
      
    })
    this.ds.getEmployee(this.eid).subscribe((result:any)=>{
      this.pdata=result
      console.log(this.pdata);
      
    })
  }
edit()
{
  this.ds.updateEmp(this.eid,this.pdata).subscribe((result:any)=>{
    alert('Employee Data Updated')
    this.rt.navigateByUrl('employee')
  })
}
}
