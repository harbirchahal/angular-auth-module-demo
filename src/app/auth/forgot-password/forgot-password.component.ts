import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthenticationService } from '../auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  forgotPwdForm: FormGroup;
  isSubmitted: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticationService
  ) {
    this.isSubmitted = false;
  }

  ngOnInit() {
    this.forgotPwdForm = this.formBuilder.group({
      username: new FormControl('', Validators.required)
    });
  }

  submit() {
    this.isSubmitted = true;
    this.authService.forgotPassword(this.forgotPwdForm.value);
  }

}
