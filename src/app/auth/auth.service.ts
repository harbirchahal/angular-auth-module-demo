import { Injectable } from '@angular/core';

import { LoginModel } from './login/login.model';
import { SignupModel } from './signup/signup.model';

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

}
