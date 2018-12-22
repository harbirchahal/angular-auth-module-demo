import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { LoginModel } from './login';
import { SignupModel } from './signup';
import { ForgotPasswordModel } from './forgot-password';
import { ResetPasswordModel } from './reset-password';

@Injectable()
export class AuthenticationService {
  private token = 'fake-auth-token';

  get DB(): SignupModel[] {
    return JSON.parse(localStorage.getItem('users')) || [];
  }

  constructor() {
  }

  public signupUser(model: SignupModel) {
    // Store
    const users = this.DB;
    users.push(model);
    localStorage.setItem('users', JSON.stringify(users));
    // Session
    sessionStorage.setItem('user', JSON.stringify(model));
    // Success
    return true;
  }

  public loginUser(model: LoginModel) {
    const user = this.DB.find(u => {
      return u.username === model.username && u.password === model.password
    });
    if (user) {
      sessionStorage.setItem('user', JSON.stringify(user));
      return true;
    }
    return false;
  }

  public logoutUser() {
    sessionStorage.clear();
    return true;
  }

  public getToken() {
    return this.token;
  }

  public getLoggedIn() {
    return JSON.parse(sessionStorage.getItem('user'));
  }

  public isAuthenticated() {
    return !!this.getLoggedIn();
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
