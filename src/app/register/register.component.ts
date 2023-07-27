import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../service/registration.service';
import { Registration } from '../model/registration';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  regForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private registrationService: RegistrationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.regForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  register(): void {
    if (this.regForm.valid) {
      const userData: Registration = {
        id: 0,
        firstName: this.regForm.value.firstName,
        lastName: this.regForm.value.lastName,
        email: this.regForm.value.email,
        password: this.regForm.value.password,
        token: '',
      };

      this.registrationService.registration(userData).subscribe((response) => {
        alert('Registration Successfully');
        this.regForm.reset();
        this.router.navigate(['/']);
      });
    } else {
      alert('Registration Failure');
    }
  }
}
