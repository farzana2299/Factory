import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { RawmaterialComponent } from './rawmaterial/rawmaterial.component';
import { AddproComponent } from './addpro/addpro.component';
import { AddempComponent } from './addemp/addemp.component';
import { AddrawComponent } from './addraw/addraw.component';
import { EditempComponent } from './editemp/editemp.component';
import { EditproComponent } from './editpro/editpro.component';
import { EditrawComponent } from './editraw/editraw.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'product',component:ProductComponent},
  {path:'rawmaterial',component:RawmaterialComponent},
  {path:'employee',component:EmployeeComponent},
  {path:'addEmployee',component:AddempComponent},
  {path:'editEmployee',component:EditempComponent},
  {path:'addProduct',component:AddproComponent},
  {path:'editProduct',component:EditproComponent},
  {path:'addRaw',component:AddrawComponent},
  {path:'editRaw',component:EditrawComponent},


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
