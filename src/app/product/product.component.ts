import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  searchString=""
  proarray:any
  pid:any
  date:any;
  searchTerm=""
  constructor(private ds:DataService,private router:Router)
  {}
  ngOnInit():void
  {
    this.ds.getProduct().subscribe((result:any)=>{
      this.proarray=result.message
    })
    this.ds.search.subscribe((value:any)=>{
      this.searchString=value
    })
  }
  addPro()
  {
    this.router.navigate(['/addProduct']);
  }
  
  search(event:any)
  {
    this.searchString=event.target.value
    //seand data to behaviour subject
    this.ds.search.next(this.searchString)
  }
   filterPipe(data:any)
   {
    this.searchTerm=data
   }
}
