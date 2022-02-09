import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


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



  // public getUsers()
  // {
  //    this.service.getAllUsers().subscribe((response:any) => {
  //      this.login = response;
  //      console.log(this.login);
  //     });
  //    }
  //   onAddUsers(form: NgForm)
  //   { //  if(this.postForm.valid){   
  //     const newUser: User={ email:form.value.email,  password: form.value.password};
  //    this.service.addNewUsers(newUser).subscribe((response) =>{
  //       console.log(response);
  //     });
  //   }




  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


 }




