import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private apiUrl = "http://localhost:8080/api/v1/demo";

  constructor(private http:HttpClient) { }

  displayResponse(): Observable<any> {
    const token = localStorage.getItem('login_token');
    console.log(token);
    
    const headers: HttpHeaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', 'Bearer ' + token)
   

  const options = {
    headers: headers,
    responseType: 'text' as 'json'
  };
  
    return this.http.get<string>(this.apiUrl, options)
  }
}
