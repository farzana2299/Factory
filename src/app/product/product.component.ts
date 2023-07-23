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
  searchTerm:any=[]
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
  editPro()
  {
    this.router.navigate(['/editEmployee']);
  }
  deletePro()
  {
    this.ds.deleteProduct(this.pid).subscribe((result:any)=>{
      alert('Product Deleted')
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
