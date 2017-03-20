import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { UsersModule }     from './users/users.module';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import {PageNotFoundComponent} from './not-found.component'
import { HomeComponent } from './home.component';
import { UserService } from './users/shared/user.service'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    UsersModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
