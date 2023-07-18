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
