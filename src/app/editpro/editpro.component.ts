import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-editpro',
  templateUrl: './editpro.component.html',
  styleUrls: ['./editpro.component.css']
})
export class EditproComponent {
  pid:any
  pdata:any={}
  constructor(private ds:DataService,private ar:ActivatedRoute,private rt:Router)
  {
  }
  ngOnInit():void{
    this.ar.params.subscribe((data:any)=>{
      this.pid=data.id
      console.log(this.pid);
      
    })
    this.ds.getProduct().subscribe((result:any)=>{
      this.pdata=result
      console.log(this.pdata);
      
    })
  }
edit()
{
  this.ds.updateEmp(this.pid,this.pdata).subscribe((result:any)=>{
    alert('Employee Data Updated')
    this.rt.navigateByUrl('employee')
  })
}
}


