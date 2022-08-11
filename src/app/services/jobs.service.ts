import {  HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
const baseURL = environment.baseURL
@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor(private http: HttpClient) { }


  //gettors
  getPlumber(): Observable<any> { 
    return this.http.get(`${baseURL}/getplumbers`);
  }
  getElects(): Observable<any> { 
    return this.http.get(`${baseURL}/getElects`);
  }
  getmasons(): Observable<any> { 
    return this.http.get(`${baseURL}/getmasons`);
  }
  getpainters(): Observable<any> { 
    return this.http.get(`${baseURL}/getpainters`);
  }
}
