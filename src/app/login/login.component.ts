import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, RequiredValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../Shared/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
@ViewChild('user') user:ElementRef;
@ViewChild('pwd') pwd:ElementRef;
  constructor(private router:Router,private formBuilder:FormBuilder,private userSrvc:UserService) { }
public loginForm=this.formBuilder.group({
  email:['',Validators.compose([Validators.required,Validators.email])],
  password:['',Validators.required]
})
  ngOnInit(): void {
  }
  onSubmit( ){
  this.userSrvc.login(this.loginForm).subscribe(
    (data:any)=>{
      debugger;
      if(data.responseCode==1){
        localStorage.setItem('userInfo',JSON.stringify(data.dataset));
        this.router.navigate(['main/recipe']);
      }
      console.log('responsee',data);
    },(error:any)=>{
      console.log('errorr:',error);
    }
  )
    }
  
  }
