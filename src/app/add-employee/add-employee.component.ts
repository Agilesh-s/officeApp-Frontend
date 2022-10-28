import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

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
    this.myApi.addEmployee(data).subscribe(
      (res)=>{
        alert("Data Added Successfully")
      }
    )
    this.emp_id = ""
    this.name = ""
    this.designation = ""
    this.company_name = ""
    this.dob = ""
    this.gender =""
    this.email = ""
    this.password = ""
  }

  ngOnInit(): void {
  }

}
