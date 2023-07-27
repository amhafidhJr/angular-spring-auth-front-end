import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Registration } from '../model/registration';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private apiUrl = 'http://localhost:8080/api/v1/auth/register'

  constructor(
    private http: HttpClient
  ) { }

  registration(registration: Registration): Observable<Registration>{
    return this.http.post<Registration>(this.apiUrl, registration)
  }
  
}
