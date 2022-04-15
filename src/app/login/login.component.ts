import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, RequiredValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
@ViewChild('user') user:ElementRef;
@ViewChild('pwd') pwd:ElementRef;
  constructor(private router:Router,private formBuilder:FormBuilder) { }
public loginForm=this.formBuilder.group({
  email:['',Validators.required,Validators.email],
  password:['',Validators.required]
})
  ngOnInit(): void {
  }
  OnSubmit( ){
   console.log("on submit");
    }
  }
