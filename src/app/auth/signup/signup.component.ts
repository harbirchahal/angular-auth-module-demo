import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthenticationService } from '../auth.service';
import { ValidationService } from '../../shared/validation';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  isSubmitted: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthenticationService
  ) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      username: new FormControl('',
        [Validators.required, Validators.email],
        ValidationService.confirmUsernameAvailability
      ),
      password: new FormControl('', [
        Validators.required,
        ValidationService.checkPasswordStrength
      ]),
      confirmPassword: new FormControl('', Validators.required)
    }, {
      validator: ValidationService.matchPasswordAndConfirmPassword
    });
  }

  submit() {
    this.isSubmitted = true;
    this.authService.signupUser(this.signupForm.value);
    setTimeout(() => this.router.navigate(['home']), 1000);
  }

}
