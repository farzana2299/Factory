import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmployeeComponent } from './employee/employee.component';
import { AddempComponent } from './addemp/addemp.component';
import { EditempComponent } from './editemp/editemp.component';
import { ProductComponent } from './product/product.component';
import { AddproComponent } from './addpro/addpro.component';
import { EditproComponent } from './editpro/editpro.component';
import { RawmaterialComponent } from './rawmaterial/rawmaterial.component';
import { EditrawComponent } from './editraw/editraw.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from './empPipe/search.pipe';
import { FilterPipe } from './empPipe/filter.pipe';
import { AddRawComponent } from './add-raw/add-raw.component';
import { ViewempComponent } from './viewemp/viewemp.component';
import { ViewproComponent } from './viewpro/viewpro.component';
import { ViewrawComponent } from './viewraw/viewraw.component';
import { DeleteempComponent } from './deleteemp/deleteemp.component';
import { DeleteproComponent } from './deletepro/deletepro.component';
import { DeleterawComponent } from './deleteraw/deleteraw.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeeComponent,
    AddempComponent,
    EditempComponent,
    ProductComponent,
    AddproComponent,
    EditproComponent,
    RawmaterialComponent,
    EditrawComponent,
    HomeComponent,
    SearchPipe,
    FilterPipe,
    AddRawComponent,
    ViewempComponent,
    ViewproComponent,
    ViewrawComponent,
    DeleteempComponent,
    DeleteproComponent,
    DeleterawComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
