import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared';
import { LoginComponent } from './login';
import { SignupComponent } from './signup';
import { ForgotPasswordComponent } from './forgot-password';
import { ResetPasswordComponent } from './reset-password';

@NgModule({
  imports: [
    RouterModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [],
  declarations: [
    SignupComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent
  ],
  providers: [],
})
export class AuthModule { }
