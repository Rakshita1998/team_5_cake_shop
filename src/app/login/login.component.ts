import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { User } from '../common/user';
import { RegisterService } from '../services/register.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user = new User()
msg=''
  constructor(private _service : RegisterService,private _router : Router) { }

  ngOnInit(): void {
  }
loginUser(){
this._service.loginUserFromRemote(this.user).subscribe(
  data => {
    console.log("response recieved");
    this._router.navigate(['/loginsuccess'])
  },
  error => {
    console.log("exception occured");
    this.msg="Bad credentials, Please enter valid emailid and password";
  }
  )
}
gotoregister(){
  this._router.navigate(['/register'])
}

gotoproductlist(){
  this._router.navigate(['/productlist'])
}
}
