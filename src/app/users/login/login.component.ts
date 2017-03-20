import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {User} from '../shared/user.model';
import { UserService } from '../shared/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    user: User = new User();
    loading = false;
    returnUrl: string;

    constructor(private router: Router,
  				private userService:UserService) { 

    }

	ngOnInit() {
	  	this.loading = false;
		//this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
		//this.returnUrl = this.loginService.redirectUrl || '/'
	}		
	login() {
  		//console.log("login comp");
  		//console.log(this.route.snapshot.queryParams['returnUrl'])
		this.loading = true;
		this.userService.login(this.user.email, this.user.password)
		.subscribe(
			result => {
			    if (result === true) {
			        // login successful
			       // this.router.navigate(['/projects']);
			       this.router.navigate([this.userService.redirectUrl]);
			    } else {
			        // login failed
			        //this.error = 'Username or password is incorrect';
			        this.loading = false;
			    }
			},
			error => {
				console.log(error);
				this.loading = false;
			}
		);
	}
 	 /*logout() {
  	this.loginService.logout();
  	}*/

}
