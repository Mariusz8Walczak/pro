import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable()
export class TestInterceptor implements HttpInterceptor {

  constructor(){}

  intercept(
    request: HttpRequest<any>, next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log(request.url);
    return next.handle(request).pipe(
      catchError(error => {
        if (error.status === 400) {
          console.log('zly request');
        }

        if(error.status === 301 && error.error && error.error.status === 0){
          console.log('przekieruj tutaj: ' + error.error.url);
        }
          console.warn(error);
          console.log(error.status);

          if(error.error instanceof ProgressEvent ) {
            alert('przekroczono czas oczekiwania na server, sprobuj później');
          } else if(error.error) {
            alert('mamy blad: ' + error.error);
          }

          return throwError(error);
      }
    ));
  }
}
