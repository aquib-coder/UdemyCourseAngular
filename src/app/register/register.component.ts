import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../Shared/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private formbuilder:FormBuilder,private UseServ:UserService) { }
  public regForm:FormGroup=this.formbuilder.group({
  name:['',Validators.required],
  email:['',Validators.compose([Validators.email,Validators.required])],
  password:['',Validators.required]
});
onSubmit(){
  debugger;
 this.UseServ.registerUser(this.regForm).subscribe(
   (data)=>{
     debugger;
     console.log('responsee',data);
   },(error)=>{
    console.log('errorr:',error);
  }
 )
}
  ngOnInit(): void {
    
  }

}
