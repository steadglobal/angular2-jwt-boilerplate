import { Injectable } from '@angular/core';
import { Router, RouterStateSnapshot,ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { AuthService } from './users/shared/auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(this.authService.loggedIn()) {
      return true;
    } else {
      this.authService.redirectUrl=state.url
      this.router.navigate(['/login'])
      return false;
    }
  }
}
