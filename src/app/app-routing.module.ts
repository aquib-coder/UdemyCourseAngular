import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './Shared/auth.guard';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { UserManagementComponent } from './user-management/user-management.component';

const routes: Routes = [
 {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent}, 
  {path:'register',component:RegisterComponent},  
  {
    path: 'main',
    component: MainComponent,   
    children:[
    { path : 'recipe',  component: RecipesComponent},
    { path : 'user',   component: UserManagementComponent},
   {  path : 'shopping', component: ShoppingListComponent }
    ]  
 },

  {path:'**',component:MainComponent}
];
  
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
