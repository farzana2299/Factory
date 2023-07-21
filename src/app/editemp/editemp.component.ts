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
  edata:any={}
  constructor(private ds:DataService,private ar:ActivatedRoute,private rt:Router)
  {
  }
  ngOnInit():void{
    this.ar.params.subscribe((data:any)=>{
      this.eid=data.id
      console.log(this.eid);
      
    })
    this.ds.getEmployee().subscribe((result:any)=>{
      this.edata=result
      console.log(this.edata);
      
    })
  }
edit()
{
  this.ds.updateEmp(this.eid,this.edata).subscribe((result:any)=>{
    alert('Employee Data Updated')
    this.rt.navigateByUrl('employee')
  })
}
}
