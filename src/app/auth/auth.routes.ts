import { Routes } from '@angular/router';

import { LoginComponent } from './login';
import { SignupComponent } from './signup';
import { ForgotPasswordComponent } from './forgot-password';
import { ResetPasswordComponent } from './reset-password';
import { LogoutComponent } from './logout';

export const AUTH_ROUTES: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'reset-password/:token', component: ResetPasswordComponent },
  { path: 'logout', component: LogoutComponent }
];
