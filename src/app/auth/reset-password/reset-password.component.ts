import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { AuthenticationService } from '../auth.service';
import { ValidationService } from '../../shared/validation/validation.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  resetPwdForm: FormGroup;
  isSubmitted: boolean;
  tokenValid: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthenticationService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const token = params['token'];
      this.authService.validateRecoveryToken(token).subscribe((validity: boolean) => {
        this.tokenValid = validity;
      });
    });

    this.resetPwdForm = this.formBuilder.group({
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
    this.authService.resetPassword(this.resetPwdForm.value);
  }

}
