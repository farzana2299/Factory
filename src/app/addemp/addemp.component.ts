import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent {
constructor(private fb:FormBuilder,private ds:DataService,private rt:Router)
{}
ngOnInit():void
{

}
// model form for add 
addForm=this.fb.group({
  eid:['',[Validators.required,Validators.pattern('[a-zA-z0-9]+')]],
  ename:['',[Validators.required,Validators.pattern('[a-zA-z]+')]],
  eposition:['',[Validators.required,Validators.pattern('[a-zA-z]+')]],
  edept:['',[Validators.required,Validators.pattern('[a-zA-z]+')]],
  ephone:['',[Validators.required,Validators.pattern('[0-9]+')]],
  esal:['',[Validators.required,Validators.pattern('[0-9]+')]],
  ejoining:['',[Validators.required,Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],
  estaff:['',[Validators.pattern('[a-zA-z]+')]],
  eleave:['',[Validators.required,Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]]
})
  add()
  {
    var path=this.addForm.value
    var empData={
      eid:path.eid,
      ename:path.ename,
      eposition:path.eposition,
      edept:path.edept,
      ephone:path.ephone,
      esal:path.esal,
      ejoining:path.ejoining,
      estaff:path.estaff,
      eleave:path.eleave
    }
    this.ds.addEmployee(empData).subscribe((result:any)=>{
      alert('New Employee Added')
      this.rt.navigateByUrl("employee")
    })
  }
}
