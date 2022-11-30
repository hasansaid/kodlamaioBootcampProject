import { IGetAllBlackListResponse } from './../../models/response/blackList/getAllBlackListResponse';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlacklistService {

  apiUrl = 'http://localhost:3000/blacklist';

  constructor(private httpClient: HttpClient) { }

  GetAllBlackList(): Observable<IGetAllBlackListResponse[]>{
    return this.httpClient.get<IGetAllBlackListResponse[]>(this.apiUrl);
  }
}
