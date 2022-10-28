import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.css']
})
export class SearchEmployeeComponent implements OnInit {

  constructor(private myApi:ApiService) { }

  emp_id = ""
  name = ""
  designation = ""
  company_name = ""
  dob = ""
  gender = ""
  email = ""
  password = ""

  readValues = ()=>{
    let data = {
      "emp_id" : this.emp_id,
      "name" : this.name,
      "designation" : this.designation,
      "company_name" : this.company_name,
      "dob" : this.dob,
      "gender" : this.gender,
      "email" : this.email,
      "password" : this.password
    }
    console.log(data)

    this.emp_id = ""
    this.name = ""
    this.designation = ""
    this.company_name = ""
    this.dob = ""
    this.gender =""
    this.email = ""
    this.password = ""
  }

  readValue = ()=>{
    let data = {
      "emp_id":this.emp_id
    }
    this.myApi.viewEmployee().subscribe(
      (data)=>{
        this.employeeData = data
      }
    )
  }

  employeeData:any = []

  ngOnInit(): void {
  }

}
