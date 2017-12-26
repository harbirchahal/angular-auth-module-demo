import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { LoginModel } from './login/login.model';
import { SignupModel } from './signup/signup.model';
import { ForgotPasswordModel } from './forgot-password/forgot-password.model';
import { ResetPasswordModel } from './reset-password/reset-password.model';

@Injectable()
export class AuthenticationService {
  private token: string;

  constructor() {
    this.token = 'auth_token';
  }

  public signupUser(model: SignupModel) {
    console.log('AuthService.signupUser', model);
  }

  public loginUser(model: LoginModel) {
    console.log('AuthService.loginUser', model);
  }

  public logoutUser() {
    this.token = null;
  }

  public getToken() {
    return this.token;
  }

  public isAuthenticated() {
    return (this.token ?  true : false);
  }

  public forgotPassword(model: ForgotPasswordModel) {
    console.log('AuthService.forgotPassword', model);
  }

  public resetPassword(model: ResetPasswordModel) {
    console.log('AuthService.resetPassword', model);
  }

  public validateRecoveryToken(token: string): Observable<boolean> {
    console.log('AuthService.validateRecoveryToken', token);
    return Observable.of(Math.random() >= 0.5);
  }

}
