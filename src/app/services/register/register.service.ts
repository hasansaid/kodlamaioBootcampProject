import { GetUsers } from './../../models/token/users-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  apiUrl = 'http://localhost:3000/users';
  constructor(private httpClient: HttpClient) {}

  addUsers(users: GetUsers) {
    return this.httpClient.post(this.apiUrl, users);
  }
}
