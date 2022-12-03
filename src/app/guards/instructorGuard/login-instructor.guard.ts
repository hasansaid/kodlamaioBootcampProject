import { LoginInstructorService } from './../../services/login-instructor/login-instructor.service';
import { LoginApplicantService } from './../../services/login-applicant/login-applicant.service';
import { InstructorService } from './../../services/instructor/instructor.service';
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
export class LoginInstructorGuard implements CanActivate {
  constructor(
    private instructorService: LoginInstructorService,
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
    let isAuthenticated = this.instructorService.isAuthenticated();
    if (isAuthenticated == true) {
      return true;
    } else {
      this.router.navigate(['login']);
      console.log('Sisteme Giriş Yapınız');
      return false;
    }
  }
}
