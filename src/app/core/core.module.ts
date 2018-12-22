import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { SharedModule } from '../shared';
import {
  AuthModule,
  AuthGuard,
  AuthInterceptor,
  AuthenticationService
} from '../auth';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './not-found.component';
import { ValidationService } from '../shared/validation/validation.service';
import { ValidateMessageService } from '../shared/validation/validate-message.service';
import { LoggingInterceptor } from '../shared/interceptors/logging.interceptor';

@NgModule({
  imports: [
    SharedModule,
    AuthModule,
  ],
  exports: [
  ],
  declarations: [
    HomeComponent,
    PageNotFoundComponent,
  ],
  providers: [
    AuthenticationService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoggingInterceptor,
      multi: true
    },
    ValidateMessageService,
    ValidationService,
  ],
})
export class CoreModule { }
