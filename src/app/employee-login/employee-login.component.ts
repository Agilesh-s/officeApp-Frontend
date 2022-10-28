import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent implements OnInit {

  constructor() { }

  email = ""
  password = ""

  readValues = ()=>{
    let data = {
      "email":this.email,
      "password":this.password
    }
    console.log(data);
    
  }
  
  ngOnInit(): void {
  }

}
