import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AuthRouting } from './auth-routing.module';

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
  ],
  providers: [],
})
export class AuthModule { }
