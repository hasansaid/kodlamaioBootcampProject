import { ICreateBlackListRequest } from './../../models/request/blackList/createBlackListRequest';
import { IGetBlackListResponse } from './../../models/response/blackList/getBlackListResponse';
import { IGetAllBlackListResponse } from './../../models/response/blackList/getAllBlackListResponse';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BlacklistService {
  apiUrl = 'http://localhost:3000/blacklist';

  constructor(private httpClient: HttpClient) {}

  getAllBlackList(): Observable<IGetAllBlackListResponse[]> {
    return this.httpClient.get<IGetAllBlackListResponse[]>(this.apiUrl);
  }

  getBlackList(id: number): Observable<IGetBlackListResponse> {
    return this.httpClient.get<IGetBlackListResponse>(this.apiUrl + '/' + id);
  }
  addBlackList(blackList: ICreateBlackListRequest) {
    return this.httpClient.post(this.apiUrl, blackList);
  }
  updateBlackList(id: number, blacklist: any) {
    return this.httpClient.put(this.apiUrl + '/' + id, blacklist);
  }
  // deleteBlackList(blackList: IGetAllBlackListResponse) {
  //   return this.httpClient.delete(this.apiUrl + '/' + blackList.id);
  // }
  deleteBlackList(id: number) {
    return this.httpClient.delete(this.apiUrl + '/' + id);
  }
  removeApplicant(id: number) {
    return this.httpClient.delete<IGetBlackListResponse>(
      this.apiUrl + '/' + id
    );
  }
}
