import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {

  constructor(private myApi:ApiService) { 
    this.fetchData()
  }

  readValues = (emp_id:any)=>{
    let data = {
      "emp_id":emp_id 
    }
    this.myApi.deleteEmployee(data).subscribe(
      (res)=>{
    })
  }

  fetchData = ()=>{
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
