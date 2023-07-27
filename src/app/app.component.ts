import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'authtutorial';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.isAuthenticated();
  }

  isAuthenticated(): void {
    const token = localStorage.getItem('login_token');
    if (token == null) {
      this.router.navigate(['']);
    }
  }
}
