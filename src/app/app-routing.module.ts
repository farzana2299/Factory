import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { RawmaterialComponent } from './rawmaterial/rawmaterial.component';
import { AddproComponent } from './addpro/addpro.component';
import { AddempComponent } from './addemp/addemp.component';
import { EditempComponent } from './editemp/editemp.component';
import { EditproComponent } from './editpro/editpro.component';
import { EditrawComponent } from './editraw/editraw.component';
import { AddRawComponent } from './add-raw/add-raw.component';
import { ViewempComponent } from './viewemp/viewemp.component';
import { ViewproComponent } from './viewpro/viewpro.component';
import { ViewrawComponent } from './viewraw/viewraw.component';
import { DeleteempComponent } from './deleteemp/deleteemp.component';
import { DeleteproComponent } from './deletepro/deletepro.component';
import { DeleterawComponent } from './deleteraw/deleteraw.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'product',component:ProductComponent},
  {path:'rawmaterial',component:RawmaterialComponent},
  {path:'employee',component:EmployeeComponent},
  {path:'addEmployee',component:AddempComponent},
  {path:'editEmployee/:id',component:EditempComponent},
  {path:'addProduct',component:AddproComponent},
  {path:'editProduct/:id',component:EditproComponent},
  {path:'addRaw',component:AddRawComponent},
  {path:'editRaw/:id',component:EditrawComponent},
  {path:'viewemp/:id',component:ViewempComponent},
  {path:'viewpro/:id',component:ViewproComponent},
  {path:'viewraw/:id',component:ViewrawComponent},
  {path:'deleteemp/:id',component:DeleteempComponent},
  {path:'deletepro/:id',component:DeleteproComponent},
  {path:'deleteraw/:id',component:DeleterawComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
