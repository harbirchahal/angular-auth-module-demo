import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from '../../auth/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthenticationService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    const clonedReq = req.clone({
      params: req.params.set('auth', this.authService.getToken())
    });
    return next.handle(clonedReq);
  }

}
