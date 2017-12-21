import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

/*
RESPONSE INTERCEPTOR
*/
export class LoggingInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // with 'do' we don't consume the Observable, it's an in-between step
    return next.handle(req).do((event: HttpEvent<Object>) => {
      if (event.type === HttpEventType.Response) {
        console.log('LoggingInterceptor', event);
      }
    });
  }

}
