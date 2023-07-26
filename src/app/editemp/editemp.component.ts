import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-editemp',
  templateUrl: './editemp.component.html',
  styleUrls: ['./editemp.component.css']
})
export class EditempComponent {
  eid:any
  edata:any={}
  constructor(private ds:DataService,private ar:ActivatedRoute,private rt:Router,private fb:FormBuilder)
  {
  }
  
  ngOnInit():void{
    this.ar.params.subscribe((data:any)=>{
      this.eid=data.id
      // console.log(this.eid);
      
    })
    this.ds.getEmp(this.eid).subscribe((result:any)=>{
      this.edata=result.message
      console.log(this.edata);
      
    })
  }
edit()
{
  this.ds.editEmp(this.eid,this.edata).subscribe((result:any)=>{
    alert(result.message)
    this.rt.navigateByUrl('employee')
  })
}
}
