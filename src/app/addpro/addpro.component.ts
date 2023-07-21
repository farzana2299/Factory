import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addpro',
  templateUrl: './addpro.component.html',
  styleUrls: ['./addpro.component.css']
})
export class AddproComponent {
  pid:any;pname:any;quantity:any;pdate:any;pexport:any;pplace:any;
  constructor(private fb:FormBuilder,private ds:DataService,private rt:Router)
  {}
  ngOnInit():void
  {
  }
  // model form for add 
  addForm=this.fb.group({
    pid:['',[Validators.required,Validators.pattern('[a-zA-z0-9]+')]],
    pname:['',[Validators.required,Validators.pattern('[a-zA-z]+')]],
    quantity:['',[Validators.required,Validators.pattern('[0-9]+')]],
    pdate:['',[Validators.required]],
    pexport:['',[Validators.pattern('[a-z]+')]],
    pplace:['',[Validators.required,Validators.pattern('[a-zA-z]+')]],
  })
    add()
    {
      var pid=this.addForm.value.pid
      var pname=this.addForm.value.pname
      var quantity=this.addForm.value.quantity
      var pdate=this.addForm.value.pdate
      var pexport=this.addForm.value.pexport
      var pplace=this.addForm.value.pplace
if(this.addForm.valid)
{
  this.ds.addProduct(pid,pname,quantity,pdate,pexport,pplace).subscribe((result:any)=>{
    alert(result.message)
    this.rt.navigateByUrl("product")
  },
  result=>{
    alert(result.error.message)
    
  }
  )
}
else{
  alert("Please check again")
}
}
    
}
