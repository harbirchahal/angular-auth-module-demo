import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthenticationService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitted: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthenticationService
  ) {
    this.isSubmitted = false;
  }

  ngOnInit() {
    this.initForm();
  }
  
  initForm() {
    this.loginForm = this.formBuilder.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  submit() {
    this.isSubmitted = true;
    const success = this.authService.loginUser(this.loginForm.value);
    if (success) {
      setTimeout(() => this.router.navigateByUrl('/home'), 250);
    } else {
      this.isSubmitted = false;
      this.loginForm.setErrors({ authFail: true });
    }
  }

}
