import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent }    from './users.component';
import { LoginComponent }  from './login/login.component';
import { RegisterComponent }  from './register/register.component';
const usersRoutes: Routes = [
  { path: 'users',  component: UsersComponent },
  { path: 'login', component: LoginComponent },
  { path:'register', component: RegisterComponent }
];
@NgModule({
  imports: [
    RouterModule.forChild(usersRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class UsersRoutingModule { }