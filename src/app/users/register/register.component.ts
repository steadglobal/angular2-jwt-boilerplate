import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    user: User = new User();
    loading = false;
    constructor(private router: Router,
  				private userService:UserService) { }

    ngOnInit() {
    }
    register() {
        this.loading = true;
        this.userService.register(this.user)
            .subscribe(
                data => {
                    // set success message and pass true paramater to persist the message after redirecting to the login page
                    this.router.navigate(['/login']);
                },
                error => {
                    this.loading = false;
                    console.log(error.json());
                });
    }
}
