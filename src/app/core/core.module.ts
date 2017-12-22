import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { SharedModule } from '../shared/shared.module';
import { AuthModule } from '../auth/auth.module';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './not-found.component';
import { AuthenticationService } from '../auth/auth.service';
import { AuthGuardService } from '../auth/auth-guard.service';
import { ValidationService } from '../shared/validation/validation.service';
import { ValidateMessageService } from '../shared/validation/validate-message.service';
import { AuthInterceptor } from '../shared/interceptors/auth.interceptor';
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
    AuthGuardService,
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
