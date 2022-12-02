import { LoginEmployeeService } from './../services/login-employee/login-employee.service';
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
export class LoginEmployeGuard implements CanActivate {
  constructor(
    private loginEmployeeService: LoginEmployeeService,
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
    let isAuthenticated = this.loginEmployeeService.isAuthenticated();
    if (isAuthenticated == true) {
      return true;
    } else {
      this.router.navigate(['login']);
      console.log('Sisteme Giriş Yapınız');
      return false;
    }
  }
}
