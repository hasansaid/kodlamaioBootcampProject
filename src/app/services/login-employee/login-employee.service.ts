import { ITokenModel } from './../../models/token/tokenModel';
import { LoginEmployeeModel } from './../../models/token/login-employee';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginEmployeeService {
  apiUrl: string = 'http://localhost:3000/employee';
  constructor(private httpClient: HttpClient) {}

  loginEmployee(user: LoginEmployeeModel) {
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
    localStorage.removeItem('token');
  }
}
