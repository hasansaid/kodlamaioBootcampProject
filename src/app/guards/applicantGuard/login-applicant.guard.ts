import { LoginApplicantService } from './../../services/login-applicant/login-applicant.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginApplicantGuard implements CanActivate {
  constructor(
    private loginApplicantService: LoginApplicantService,
    private router: Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let isAuthenticated = this.loginApplicantService.isAuthenticated();
    if (isAuthenticated == true) {
      return true;
    } else {
      this.router.navigate(['login']);
      console.log('sisteme giriş yapınız');
      return false;
    }
  }
}
