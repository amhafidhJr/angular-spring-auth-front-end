import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Login } from '../model/login';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl = 'http://localhost:8080/api/v1/auth/authenticate';

  constructor(private http: HttpClient) {}

  doLogin(loginData: Login): Observable<Login> {
    const headers: HttpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer' + this.getAuthToken());

    const options = {
      headers: headers,
    };

    return this.http.post<Login>(this.apiUrl, loginData, options);
  }

  getAuthToken(): string | null {
    return localStorage.getItem('auth_token');
  }

  setAuthTOken(token: string | null): void {
    if (token !== null) {
      localStorage.setItem('login_token', token);
    } else {
      localStorage.removeItem('login_token');
    }
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('login_token');
    return token !== null; // Return true if token is present, false otherwise
  }
}
