import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { UsersModule }     from './users/users.module';

import { AppRoutingModule } from './app-routing.module';

import { UserService } from './users/shared/user.service'
import { AuthService } from './users/shared/auth.service'
import { AuthGuardService } from './auth-guard.service';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './not-found.component'
import { HomeComponent } from './home.component';

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
  providers: [AuthService,UserService,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
