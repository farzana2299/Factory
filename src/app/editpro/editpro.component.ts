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
      // console.log(this.pid);
      
    })
    this.ds.getPro(this.pid).subscribe((result:any)=>{
      this.pdata=result.message
      console.log(this.pdata);
      
    })
  }
edit()
{
  this.ds.editPro(this.pid,this.pdata).subscribe((result:any)=>{
    alert(result.message)
    this.rt.navigateByUrl('product')
  })
}
}


