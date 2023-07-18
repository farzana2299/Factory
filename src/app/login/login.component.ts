import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  uname: any;
  psw:any
constructor(private router:Router,private fb:FormBuilder,private ds:DataService)
{}
ngOnInit():void
{}
loginForm=this.fb.group({
  uname:['',[Validators.required,Validators.pattern('[a-zA-Z]+')]],
  psw:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]+')]]
})
login()
{
  var uname=this.uname
  var psw=this.psw
  if(this.loginForm.valid)
  {
    this.ds.login(uname,psw).subscribe((result:any)=>{

      localStorage.setItem('currentUser',result.currentUser)
      
      alert(result.message)
      this.router.navigateByUrl('home')
    },
    result=>{
      alert(result.error.message)
    }
    )
  }
  else{
    alert("Invalid Form")
  }
 
}
}
