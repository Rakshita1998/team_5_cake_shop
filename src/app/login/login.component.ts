import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../services/user';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit
{
  loginForm= new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(5)])
  })
  login: any=[];
  loginUser(){
    console.warn(this.loginForm.value)
  }
  get email(){
    return this.loginForm.get('email');
  }
  get password(){
    return this.loginForm.get('password');
  }
  service: UsersService;


  constructor(private router:Router,private route:ActivatedRoute,services:UsersService) {

  this.service=this.service;

  }


  public getUsers()
  {
     this.service.getAllUsers().subscribe((response:any) => {
       this.login = response;
       console.log(this.login);
      });
     }
    onAddUsers(form: NgForm)
    { //  if(this.postForm.valid){   
      const newUser: User={ email:form.value.email,  password: form.value.password};
     this.service.addNewUsers(newUser).subscribe((response) =>{
        console.log(response);
      });
    }




  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


 }




