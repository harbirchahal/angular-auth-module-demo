import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  SignupComponent,
  LoginComponent,
  ForgotPasswordComponent,
  ResetPasswordComponent
} from './index';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'reset-password/:token', component: ResetPasswordComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRouting { }
