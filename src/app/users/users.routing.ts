import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from '../auth-guard.service';

import { UsersComponent }    from './users.component';
import { LoginComponent }  from './login/login.component';
import { RegisterComponent }  from './register/register.component';
import { ProfileComponent } from './profile/profile.component';


const usersRoutes: Routes = [
  { path: 'users',  component: UsersComponent },
  { path: 'login', component: LoginComponent },
  { path:'register', component: RegisterComponent },
  { path:'profile', component: ProfileComponent , canActivate: [AuthGuardService]},

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