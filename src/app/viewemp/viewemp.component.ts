import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-viewemp',
  templateUrl: './viewemp.component.html',
  styleUrls: ['./viewemp.component.css']
})
export class ViewempComponent {

eid:any
edata:any={}
constructor(private ar:ActivatedRoute,private ds:DataService,private rt:Router)
{}
ngOnInit():void
{
  this.ar.params.subscribe((data:any)=>{
    this.eid=data.id
    // console.log(this.eid);
    
  })

  //api call
  this.ds.getEmp(this.eid).subscribe((result:any)=>{
    this.edata=result.message
    console.log(this.edata);
    
  })
}
deleteemp()
{
  this.ds.deleteemp(this.eid).subscribe((result:any)=>{
    alert(result.message)
    this.rt.navigateByUrl("employee")
  })
}
}
