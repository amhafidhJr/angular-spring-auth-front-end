import { Login } from './../model/login';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {
   this.formInit();
  }

  formInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  doLogin(): void {
    const credentials: Login = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
      token: '',
      // token: "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhYmR1bGhhbGltQHRyYS5nby50eiIsImlhdCI6MTY5MDM1MTM1NCwiZXhwIjoxNjkwMzUyNzk0fQ.uoR85JtrUQKMruU3ZOdd8Rflg4D99PLn4UhRJzLjPQ8"
    }
    this.loginService.doLogin(credentials).subscribe(
      (response) => {
        localStorage.setItem('login_token', response.token)
        console.log(response);
        
        this.router.navigate(['/home']).then(() => {
          localStorage.setItem('login_token', response.token)
        })
      },
      error => {
        console.log('error: ' + error.message);
      }
    )
  }

}
