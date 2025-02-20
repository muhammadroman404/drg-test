import { HttpErrorResponse, HttpHandler, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorHandlingInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error: any) => {
      if (error instanceof HttpErrorResponse) {
        if (error.status) {
          alert(error.error.message)
        } 
      }
      return throwError(() => {
        alert('Uncaught Error!!')
      });
    })
  );






};
