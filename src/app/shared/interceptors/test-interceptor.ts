import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';

@Injectable()
export class TestInterceptor implements HttpInterceptor {

  constructor(private toastr: ToastrService){}

  intercept(
    request: HttpRequest<any>, next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log(request.url);
    return next.handle(request).pipe(
      catchError(error => {
        if (error.status === 422) {
          alert('brak strony');
          return throwError(error);
        } else {
          console.log(error);
          console.log(error.status);
        }
        return throwError(error);
      }
    ))
  }
}
