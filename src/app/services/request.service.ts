import { HttpClient } from '@angular/common/http';
import { TemplateBindingParseResult } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const baseURL = environment.baseURL

@Injectable({
  providedIn: 'root'
})  

export class RequestService {
   
  constructor(private http: HttpClient) {}
   
  addrequest(data:any) {
    return this.http.post(baseURL +'/addrequest',data )
  }

  getPending(): Observable<any> { 
    return this.http.get(`${baseURL}/getpending`);
  }
  getActive(): Observable<any> { 
    return this.http.get(`${baseURL}/getactive`);
  }
  getComplete(): Observable<any> { 
    return this.http.get(`${baseURL}/getcomplete`);
  }

  getPendingId(data:any): Observable<any> { 
    return this.http.get(`${baseURL}/getpending/`+data);
  }
  updateRequest(data: any, requestid:any){
    return this.http.put(`${baseURL}/updaterequest/`+requestid,data);
  }
  deleteRequests( requestid:any){
    return this.http.delete(`${baseURL}/deleterequest/`+requestid);
  }



  getAllExp(){
   
  }
 
}
