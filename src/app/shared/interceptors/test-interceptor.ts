import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable()
export class TestInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>, next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log(request.url);
    return next.handle(request).pipe(
      catchError(error => {
        if (error.status === 422) {
          alert('brak strony');
          return throwError(error);
        }
        return throwError(error);
      })
    );;
  }
}
