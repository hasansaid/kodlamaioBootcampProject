import { ICreateBootcampRequest } from './../../models/request/bootcamp/createBootcampRequest';
import { IGetBootcampResponse } from './../../models/response/bootcamp/getBootcampResponse';
import { Observable } from 'rxjs';
import { IGetAllBootcampResponse } from './../../models/response/bootcamp/getAllBootcampResponse';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BootcampService {
  apiUrl = 'http://localhost:3000/bootcamp';

  constructor(private httpClient: HttpClient) {}

  getAllBootcamp(): Observable<IGetAllBootcampResponse[]> {
    return this.httpClient.get<IGetAllBootcampResponse[]>(this.apiUrl);
  }
  getStateBootcamp() {
    return this.httpClient.get<IGetAllBootcampResponse[]>(
      this.apiUrl + '?state=1'
    );
  }
  getBootcamp(id: number): Observable<IGetBootcampResponse> {
    return this.httpClient.get<IGetBootcampResponse>(this.apiUrl + '/' + id);
  }
  getInstructorBootcamp(id: string) {
    return this.httpClient.get<IGetAllBootcampResponse[]>(
      this.apiUrl + '?instructorId=' + id
    );
  }
  addBootcamp(bootcamp: ICreateBootcampRequest) {
    return this.httpClient.post(this.apiUrl, bootcamp);
  }
  updateBootcamp(id: number, bootcamp: any) {
    return this.httpClient.put(this.apiUrl + '/' + id, bootcamp);
  }

  deletebootcamp(id: number) {
    return this.httpClient.delete(this.apiUrl + '/' + id);
  }
}
