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

  GetAllBlackList(): Observable<IGetAllBlackListResponse[]> {
    return this.httpClient.get<IGetAllBlackListResponse[]>(this.apiUrl);
  }

  getBlackList(id: number): Observable<IGetBlackListResponse> {
    return this.httpClient.get<IGetBlackListResponse>(this.apiUrl + '/' + id);
  }
  addBlackList(blackList: ICreateBlackListRequest) {
    return this.httpClient.post(this.apiUrl, blackList);
  }
}
