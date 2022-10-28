import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';

const appRoutes:Routes=[
  {
    path:"",component:AdminLoginComponent
  },
  {
    path:"dashboard",component:AdminDashboardComponent
  },
  {
    path:"employeelogin",component:EmployeeLoginComponent
  },
  {
    path:"addEmployee",component:AddEmployeeComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    AdminLoginComponent,
    NavbarComponent,
    EmployeeLoginComponent,
    AddEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
