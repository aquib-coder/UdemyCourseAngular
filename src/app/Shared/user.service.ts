import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, JsonpClientBackend } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FormControl, FormGroup } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { userModel } from '../Model/userModel';
import { ResponseModel } from '../Model/ResponseModel';
import { ResponseCode } from '../enums/ResponseCode';
@Injectable({
  providedIn: 'root'
})
export class UserService {
private readonly baseURL=environment.URL;
  constructor(private http:HttpClient) { }
registerUser(regForm:FormGroup){
  debugger; 
  let AddUpdateRegisterUserBindingModel={
    email:regForm.controls['email'].value,
    fullname:regForm.controls['name'].value,
    password:regForm.controls['password'].value
  }
return this.http.post(this.baseURL+'User/RegisterUser',AddUpdateRegisterUserBindingModel)
}
login(regForm:FormGroup):any{
  let loginUser={
    email:regForm.controls['email'].value,
    password:regForm.controls['password'].value
  }
  return this.http.post(this.baseURL+'User/Login',loginUser)
}
getAllUsers(){
  let userinfo=JSON.parse(localStorage.getItem("userInfo"));
  const headers=new HttpHeaders({
    'Authorization':`Bearer ${userinfo?.token}`
  });
  return this.http.get<ResponseModel>(this.baseURL+'User/GetAllUser',{headers:headers}).
  pipe(map(res=>{
    let userList=new Array<userModel>();
    if(res.responseCode==ResponseCode.Ok){
     res.dataset.map((x:userModel)=>{
       userList.push(new userModel(x.fullName,x.email,x.userName))
     });
    }
  }));
}
}
