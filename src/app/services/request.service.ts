import { HttpClient } from '@angular/common/http';
import { TemplateBindingParseResult } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const base = environment.baseURL

@Injectable({
  providedIn: 'root'
})  

export class RequestService {
   
  constructor(private http: HttpClient) {}
   
  addrequest(data:any){
    this.http.post(base +'/addrequest',data )
  }

}
