import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  
  login_token = localStorage.getItem('login_token');

  constructor(private router:Router){}

  ngOnInit(): void {
    // this.isLoggedIn()
    this.isAuthenticated();
  }

  isLoggedIn(): boolean {
    // Check if the 'login-token' is present in localStorage
    const token = localStorage.getItem('login_token');
    return !!token; // Convert to a boolean (true if token is not null, false otherwise)
  }

  logOut(): void {
    localStorage.removeItem('login_token');
    this.router.navigate(['']);
  }

  isAuthenticated(): void {
    const token = localStorage.getItem('login_token');
    if (token == null) {
      this.router.navigate(['']);
    }
  }



}
