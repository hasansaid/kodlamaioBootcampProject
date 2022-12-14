import { IUpdateInstructorRequest } from './../../models/request/instructor/updateInstructorRequest';
import { ICreateInstructorRequest } from './../../models/request/instructor/createInstructorRequest';
import { IGetInstructorResponse } from './../../models/response/instructor/getInstructorResponse';
import { IGetAllInstructorResponse } from 'src/app/models/response/instructor/getAllInstructorResponse';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InstructorService {
  apiUrl = 'http://localhost:3000/instructor';
  constructor(private httpClient: HttpClient) {}

  getAllInstructor(): Observable<IGetAllInstructorResponse[]> {
    return this.httpClient.get<IGetAllInstructorResponse[]>(this.apiUrl);
  }

  getInstructor(id: number): Observable<IGetInstructorResponse> {
    return this.httpClient.get<IGetInstructorResponse>(this.apiUrl + '/' + id);
  }
  addInstructor(instructor: ICreateInstructorRequest) {
    return this.httpClient.post(this.apiUrl, instructor);
  }
  getUpdateInstructor(id: number) {
    return this.httpClient.get<IUpdateInstructorRequest>(
      this.apiUrl + '/' + id
    );
  }
  updateInstructor(id: number, instructor: IUpdateInstructorRequest) {
    return this.httpClient.put(this.apiUrl + '/' + id, instructor);
  }
  // deleteInstructor(employee: IGetAllInstructorResponse) {
  //   return this.httpClient.delete(this.apiUrl + '/' + employee.id);
  // }
  deleteInstructor(id: number) {
    return this.httpClient.delete(this.apiUrl + '/' + id);
  }
}
