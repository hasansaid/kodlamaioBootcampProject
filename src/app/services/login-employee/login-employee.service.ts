import { ITokenModel } from './../../models/token/tokenModel';
import { LoginEmployeeModel } from './../../models/token/login-employee';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginEmployeeService {
  apiUrl: string = 'http://localhost:3000/users';
  isLogin = false;
  roleAs: string;
  idAs: string;
  instructorIdAs: string;
  firstNameAs: string;
  lastNameAs: string;
  imageAs: string;
  constructor(private httpClient: HttpClient) {}

  loginEmployee(user: LoginEmployeeModel) {
    return this.httpClient.get<ITokenModel[]>(
      this.apiUrl + '?email=' + user.email + '&password=' + user.password
    );
  }

  isAuthenticated() {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }
  roleLogin(value: string) {
    this.isLogin = true;
    this.roleAs = value;
    localStorage.setItem('role', this.roleAs);
    return { success: this.isLogin, role: this.roleAs };
  }

  getRole() {
    this.roleAs = localStorage.getItem('role');
    return this.roleAs;
  }
  getUserId() {
    this.idAs = localStorage.getItem('userId');
    return this.idAs;
  }

  getfirstname() {
    this.firstNameAs = localStorage.getItem('name');
    return this.firstNameAs;
  }
  getlastName() {
    this.lastNameAs = localStorage.getItem('lastName');
    return this.lastNameAs;
  }
  getimage() {
    this.imageAs = localStorage.getItem('image');
    return this.imageAs;
  }

  logout() {
    localStorage.clear();
  }

  getInstructorId() {
    this.instructorIdAs = localStorage.getItem('instructorId');
    return this.instructorIdAs;
  }
}
