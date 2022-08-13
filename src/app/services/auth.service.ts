import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
const baseURL = environment.baseURL
@Injectable({
  providedIn: 'root'
})


export class AuthService {


   constructor(private http: HttpClient) { }

  registerUser(users : any) {
    return this.http.post(`${baseURL}/registeruser/`, users);
  }

  loginUser(users : any): Observable<any> { 
    return this.http.post(`${baseURL}/loginuser`, users);
  }
  registerSp(users : any) {
    return this.http.post(`${baseURL}/registersp/`, users);
  }

  loginSp(users : any): Observable<any> { 
    return this.http.post(`${baseURL}/loginsp`, users);
  }
  //vkd


   get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }
  
  // doLogout() {
  //   let removeToken = localStorage.removeItem('access_token');
  //   if (removeToken == null) {
  //     this.router.navigate(['login']);
  //   }
  // }
}
