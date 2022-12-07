import { LoginApplicantModel } from './../../models/token/login-applicant';
import { ITokenModel } from './../../models/token/tokenModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginApplicantService {
  apiUrl: string = 'http://localhost:3000/applicant';
  constructor(private httpClient: HttpClient) {}

  loginApplicant(user: LoginApplicantModel) {
    return this.httpClient.get<ITokenModel[]>(
      this.apiUrl + '/?email=' + user.email + '&password=' + user.password
    );
  }

  isAuthenticated() {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }
  logout() {
    localStorage.clear();
  }
}
