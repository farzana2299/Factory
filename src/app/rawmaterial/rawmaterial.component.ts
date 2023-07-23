import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-rawmaterial',
  templateUrl: './rawmaterial.component.html',
  styleUrls: ['./rawmaterial.component.css']
})
export class RawmaterialComponent {
  searchString=""
  rawarray:any
  rid:any
  searchTerm:any=[]
  constructor(private ds:DataService,private router:Router)
  {}
  ngOnInit():void
  {
    this.ds.getRaw().subscribe((result:any)=>{
      this.rawarray=result.message
    })
    this.ds.search.subscribe((value:any)=>{
      this.searchString=value
    })
  }
  addRaw()
  {
    this.router.navigate(['/addRaw']);
  }
  editRaw()
  {
    this.router.navigate(['/editRaw']);
  }
  deleteRaw()
  {
    this.ds.deleteRaw(this.rid).subscribe((result:any)=>{
      alert('Raw-Material Deleted')
      this.router.navigate(['/product']);
    })
  }
  search(event:any)
  {
    this.searchTerm=event.target.value
    //seand data to behaviour subject
    this.ds.search.next(this.searchTerm)
  }
   filterPipe(data:any)
   {
    this.searchString=data
   }
}
