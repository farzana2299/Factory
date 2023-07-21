import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router:Router)
  {}
ngOnInit():void
{
//when logout user try to get using backbutton 
if(!localStorage.getItem('currentUser'))
{
  alert('please login')
  this.router.navigateByUrl("")
}
}
logout()
  {
    localStorage.removeItem('currentUser')
    this.router.navigateByUrl("")
  }
  employee()
  {
    this.router.navigate(['/employee']);
  }
  products()
  {
    this.router.navigate(['./product'])
  }
  raw()
  {
    this.router.navigate(['./rawmaterial'])
  }
}
