import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
@ViewChild('user') user:ElementRef;
@ViewChild('pwd') pwd:ElementRef;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  login( ){
    var u=this.user.nativeElement.value;
    var p=this.pwd.nativeElement.value;
    if(u!=null && p!=null){
      alert("Logged in successfully");
      localStorage.setItem('token','123456789');
      u=='atif9087@gmail.com'?localStorage.setItem('userType','admin'):localStorage.setItem('userType','employee');
this.router.navigate(['main']);
    }
  }

}
