import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-editraw',
  templateUrl: './editraw.component.html',
  styleUrls: ['./editraw.component.css']
})
export class EditrawComponent {
  rid:any
  rdata:any={}
  constructor(private ds:DataService,private ar:ActivatedRoute,private rt:Router)
  {
  }
  ngOnInit():void{
    this.ar.params.subscribe((data:any)=>{
      this.rid=data.id
      
      
    })
    this.ds.getRaw(this.rid).subscribe((result:any)=>{
      this.rdata=result
      
      
    })
  }
edit()
{
  this.ds.updateRaw(this.rid,this.rdata).subscribe((result:any)=>{
    alert('Raw-Material Data Updated')
    this.rt.navigateByUrl('rawmaterial')
  })
}
}
