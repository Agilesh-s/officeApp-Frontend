import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private myRouter:Router) { }

  username = ""
  password = ""

  readValues = ()=>{
    let data = {
      "username":this.username,
      "password":this.password
    }
    if (this.username == "admin" && this.password == "123456") {
      this.myRouter.navigate(["dashboard"])      
    } else {
      alert("Invalid Login")
    }
    this.username = ""
    this.password = ""
  }

  ngOnInit(): void {
  }

}
