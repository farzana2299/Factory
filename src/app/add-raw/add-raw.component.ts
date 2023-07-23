import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-raw',
  templateUrl: './add-raw.component.html',
  styleUrls: ['./add-raw.component.css']
})
export class AddRawComponent {
  constructor(private fb:FormBuilder,private ds:DataService,private rt:Router)
  {}
  ngOnInit():void
  {
  }
  // model form for add 
  addForm=this.fb.group({
    rid:['',[Validators.required,Validators.pattern('[a-zA-z0-9]+')]],
    rname:['',[Validators.required,Validators.pattern('[a-zA-z]+')]],
    rqty:['',[Validators.required,Validators.pattern('[0-9]+')]],
    rfrom:['',[Validators.required,Validators.pattern('[a-zA-z]+')]],
    rdate:['',[Validators.required]],
    usage:['',[Validators.required,Validators.pattern('[a-z]+')]],
  })
  add()
    {
      var rid=this.addForm.value.rid
      var rname=this.addForm.value.rname
      var rqty=this.addForm.value.rqty
      var rfrom=this.addForm.value.rfrom
      var rdate=this.addForm.value.rdate
      var usage=this.addForm.value.usage
if(this.addForm.valid)
{
  this.ds.addRaw(rid,rname,rqty,rfrom,rdate,usage).subscribe((result:any)=>{
    alert(result.message)
    this.rt.navigateByUrl("rawmaterial")
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
