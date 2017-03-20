import { Injectable } from '@angular/core';
import { Router, RouterStateSnapshot,ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { UserService } from './users/shared/user.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private userService: UserService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(this.userService.loggedIn()) {
      return true;
    } else {
      this.userService.redirectUrl=state.url
      this.router.navigate(['/login'])
      return false;
    }
  }
}
