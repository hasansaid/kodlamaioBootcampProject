import { IGetAllApplicantResponse } from './../../models/response/applicant/getAllApplicantResponse';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApplicantService {
  apiUrl = 'http://localhost:3000/applicant';

  constructor(private httpClient: HttpClient) {}

  getAllApplicant(): Observable<IGetAllApplicantResponse[]> {
    return this.httpClient.get<IGetAllApplicantResponse[]>(this.apiUrl);
  }
}