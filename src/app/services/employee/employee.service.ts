import { ICreateEmployeeRequest } from './../../models/request/employee/createEmployeeRequest';
import { IGetAllEmployeeResponse } from './../../models/response/employee/getAllEmployeeResponse';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IGetEmployeeResponse } from 'src/app/models/response/employee/getEmployeeResponse';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  apiUrl = 'http://localhost:3000/employee';
  constructor(private httpClient: HttpClient) {}

  getAllEmployee(): Observable<IGetAllEmployeeResponse[]> {
    return this.httpClient.get<IGetAllEmployeeResponse[]>(this.apiUrl);
  }
  getEmployee(id: number): Observable<IGetEmployeeResponse> {
    return this.httpClient.get<IGetEmployeeResponse>(this.apiUrl + '/' + id);
  }
  addEmployee(employee: ICreateEmployeeRequest) {
    return this.httpClient.post(this.apiUrl, employee);
  }
  deleteEmployee(employee: IGetAllEmployeeResponse) {
    return this.httpClient.delete(this.apiUrl + '/' + employee.id);
  }
  updateEmployee(id: number, employee: any) {
    return this.httpClient.put(this.apiUrl + '/' + id, employee);
  }
}
