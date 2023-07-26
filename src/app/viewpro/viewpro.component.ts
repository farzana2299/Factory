import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-viewpro',
  templateUrl: './viewpro.component.html',
  styleUrls: ['./viewpro.component.css']
})
export class ViewproComponent {
  pid:any
  pdata:any={}
  constructor(private ar:ActivatedRoute,private rt:Router,private ds:DataService)
  {}
  ngOnInit():void
  {
    this.ar.params.subscribe((data:any)=>{
      this.pid=data.id
    })
  
    //api call
    this.ds.getPro(this.pid).subscribe((result:any)=>{
      this.pdata=result.message
      // console.log(this.pdata);
      
    })
  }
  deletepro()
{
  this.ds.deletepro(this.pid).subscribe((result:any)=>{
    alert(result.message)
    this.rt.navigateByUrl("product")
  })
}
}
