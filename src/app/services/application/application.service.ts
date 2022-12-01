import { IUpdateApplicationRequest } from './../../models/request/application/updateApplicationRequest';
import { ICreateApplicationRequest } from './../../models/request/application/createApplicationRequest';
import { ICreateApplicantRequest } from './../../models/request/applicant/createApplicantRequest';
import { IGetApplicationResponse } from './../../models/response/application/getApplicationResponse';
import { IGetAllApplicationResponse } from './../../models/response/application/getAllApplicationResponse';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { identifierName } from '@angular/compiler';

@Injectable({
  providedIn: 'root',
})
export class ApplicationService {
  apiUrl = 'http://localhost:3000/application';

  constructor(private httpClient: HttpClient) {}

  getAllApplication(): Observable<IGetAllApplicationResponse[]> {
    return this.httpClient.get<IGetAllApplicationResponse[]>(this.apiUrl);
  }

  getApplication(id: number): Observable<IGetApplicationResponse> {
    return this.httpClient.get<IGetApplicationResponse>(this.apiUrl + '/' + id);
  }
  addApplication(application: ICreateApplicationRequest) {
    return this.httpClient.post(this.apiUrl, application);
  }
  updateApplication(id: number, application: any) {
    return this.httpClient.put(this.apiUrl + '/' + id, application);
  }
}
