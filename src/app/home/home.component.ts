import { Component, OnInit } from '@angular/core';
import { HomeService } from '../service/home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

   message: any

  constructor(private homeService: HomeService, private router: Router) {}

  ngOnInit(): void {

    this.displayResponse();
    this.isAuthenticated();
    
  }

  displayResponse(): void {

    this.homeService.displayResponse().subscribe(
      (response) => {
        this.message = response;
      }
    )
  }

  isAuthenticated(): void {
    const token = localStorage.getItem('login_token');
    if (token == null) {
      this.router.navigate(['']);
    }
  }

}
