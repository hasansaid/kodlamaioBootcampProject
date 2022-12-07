import { ITokenModel } from './../../models/token/tokenModel';
import { LoginInstructorModel } from './../../models/token/login-instructor';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginInstructorService {
  apiUrl = 'http://localhost:3000/instructor';
  constructor(private httpClient: HttpClient) {}

  loginInstructor(user: LoginInstructorModel) {
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
