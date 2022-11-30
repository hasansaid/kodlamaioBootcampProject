import { IGetAllApplicationResponse } from './../../models/response/application/getAllApplicationResponse';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  apiUrl = 'http://localhost:3000/application';

  constructor(private httpClient:HttpClient) { }

  getAllApplication():Observable<IGetAllApplicationResponse[]>{
    return this.httpClient.get<IGetAllApplicationResponse[]>(this.apiUrl);
  }
}
