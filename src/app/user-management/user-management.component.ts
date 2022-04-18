import { Component, OnInit } from '@angular/core';
import { UserInfo } from 'os';
import { ResponseModel } from '../Model/ResponseModel';
import { userModel } from '../Model/userModel';
import { UserService } from '../Shared/user.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  constructor(private userSrv:UserService) { }
public users:userModel;

  ngOnInit() {
this.userSrv.getAllUsers().subscribe(
  (data:any)=>{
    debugger;
    this.users=data;
  }
)
  }

}
