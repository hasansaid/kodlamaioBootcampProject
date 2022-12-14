import { ICreateApplicantRequest } from './../../models/request/applicant/createApplicantRequest';
import { IGetApplicantResponse } from './../../models/response/applicant/getApplicantResponse';
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
    return this.httpClient.get<IGetAllApplicantResponse[]>(
      this.apiUrl + '?state=1'
    );
  }

  getApplicant(id: number): Observable<IGetApplicantResponse> {
    return this.httpClient.get<IGetApplicantResponse>(this.apiUrl + '/' + id);
  }

  //add-update-delete
  addApplicant(applicant: ICreateApplicantRequest) {
    return this.httpClient.post(this.apiUrl, applicant);
  }
  updateApplicant(id: number, applicant: any) {
    return this.httpClient.put(this.apiUrl + '/' + id, applicant);
  }
  // deleteApplicant(applicant: IGetAllApplicantResponse) {
  //   return this.httpClient.delete(this.apiUrl + '/' + applicant.id);
  // }
  deleteApplicant(id: number) {
    return this.httpClient.delete(this.apiUrl + '/' + id);
  }
  updateApplicantState(
    id: number,
    selectedState: number
  ): Observable<ICreateApplicantRequest> {
    return this.httpClient.patch<ICreateApplicantRequest>(
      this.apiUrl + '/' + id,
      { state: selectedState }
    );
  }
}
