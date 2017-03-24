import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { UsersComponent } from './users.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { UsersRoutingModule } from './users.routing';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    UsersRoutingModule
    
  ],
  declarations: [
  	UsersComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent
  ]
})
export class UsersModule { }