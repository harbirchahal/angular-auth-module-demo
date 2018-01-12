import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import {
  SignupComponent,
  LoginComponent,
  ForgotPasswordComponent,
  ResetPasswordComponent
} from './index';
import { AuthRouting } from './auth-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    ReactiveFormsModule,
    SharedModule,
    AuthRouting,
  ],
  exports: [],
  declarations: [
    SignupComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
  ],
  providers: [],
})
export class AuthModule { }
