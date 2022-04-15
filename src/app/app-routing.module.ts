import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './Shared/auth.guard';

const routes: Routes = [
 // {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'main',component:MainComponent,canActivate:[AuthGuard]},
  {path:'**',component:MainComponent},
  {path:'register',component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
