import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  loginForm= new FormGroup({
    firstname:new FormControl('',[Validators.required]),
    lastname:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required,Validators.email]),
    contact:new FormControl('',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    password:new FormControl('',[Validators.required,Validators.minLength(5)]),
    confirmpassword:new FormControl('',[Validators.required,Validators.minLength(5)]),
    dob:new FormControl('',[Validators.required])
  })
  loginUser(){
    console.warn(this.loginForm.value)
  }
  get firstname(){
    return this.loginForm.get('firstname');
  }
  get lastname(){
    return this.loginForm.get('lastname');
  }
  get email(){
    return this.loginForm.get('email');
  }
  get contact(){
    return this.loginForm.get('contact');
  }
  get password(){
    return this.loginForm.get('password');
  }
  get dob(){
    return this.loginForm.get('dob');
  }
  constructor() { }

  ngOnInit(): void {
  }

}
