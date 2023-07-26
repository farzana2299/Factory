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
  eid: any; ename: any; eposition: any; edept: any; ephone: any; esal: any; ejoining: any; estaff: any; eleave: any;
  constructor(private fb: FormBuilder, private ds: DataService, private rt: Router) { }
  ngOnInit(): void {

  }
  // model form for add 
  addForm = this.fb.group({
    eid: ['', [Validators.required, Validators.pattern('[a-zA-z0-9]+')]],
    ename: ['', [Validators.required, Validators.pattern('[a-zA-z]+')]],
    eposition: ['', [Validators.required, Validators.pattern('[a-zA-z]+')]],
    edept: ['', [Validators.required, Validators.pattern('[a-zA-z]+')]],
    ephone: ['', [Validators.required,  Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    email:['',[Validators.required]],
    ephoto:['', [Validators.required]],
    esal: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    ejoining: ['', [Validators.required]],
    estaff: ['', [Validators.required, Validators.pattern('[a-zA-z]+')]],
    eleaving: ['']
  })
  add() {
    var eid = this.addForm.value.eid
    var ename = this.addForm.value.ename
    var eposition = this.addForm.value.eposition
    var edept = this.addForm.value.edept
    var ephone = this.addForm.value.ephone
    var email=this.addForm.value.email
    var ephoto=this.addForm.value.ephoto                      
    var esal = this.addForm.value.esal
    var ejoining = this.addForm.value.ejoining
    var estaff = this.addForm.value.estaff
    var eleaving = this.addForm.value.eleaving
    if(this.addForm.valid)
    {
      this.ds.addEmployee(eid,ename,eposition,edept,ephone,email,ephoto,esal,ejoining,estaff,eleaving).subscribe((result: any) => {
        alert(result.message)
        this.rt.navigateByUrl("employee")
      },
      result=>{
        alert(result.error.message)
        
      }
      )
    }
    else{
    
        alert("Form is not valid")
    }
    
  }
}
