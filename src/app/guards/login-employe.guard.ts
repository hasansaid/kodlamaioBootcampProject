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
  userRoleIn = '';
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
    let url: string = state.url;
    return this.chechUserLogin(route, url);
  }

  chechUserLogin(route: ActivatedRouteSnapshot, url: any): boolean {
    if (this.loginEmployeeService.isAuthenticated()) {
      const userRole = this.loginEmployeeService.getRole();
      this.userRoleIn = userRole;
      if (route.data['role'] && route.data['role'].indexOf(userRole) === -1) {
        return false;
      }
      return true;
    }
    return false;
  }
}

// let isAuthenticated = this.loginEmployeeService.isAuthenticated();
// if (isAuthenticated == true) {
//   return true;
// } else {
//   this.router.navigate(['login']);
//   console.log('Sisteme Giriş Yapınız');
//   return false;
// }
