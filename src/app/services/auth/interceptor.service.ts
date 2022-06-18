import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, filter, Observable, switchMap, take, throwError } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  refreshTokenInProgress = false;
  refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private authServ: AuthService) { }
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {

    if (req.url.includes('login') || req.url.includes('refresh')) {
      return next.handle(req)
    } else {

      if (sessionStorage.getItem('accessToken') != null) {
        req = req.clone({
          setHeaders: {
            Authorization: "Bearer "+sessionStorage.getItem('accessToken')?.toString()
          }
        })
      } else {
        console.error("Usuario no autenticado.")
      }
  
      return next.handle(req).pipe(catchError(
        error => {
          
          /*if(req.url.includes('login') || req.url.includes('refresh')){
            return throwError(() => new Error(error));
          }*/
  
          if (error.status !== 401 && error.status !== 403){
            return throwError(() => new Error(error));
          }
  
          if (this.refreshTokenInProgress){
            return this.refreshTokenSubject.pipe(
              filter(result => result !== null),
              take(1),
              switchMap(() => {
                return next.handle(req.clone({setHeaders: {Authorization: "Bearer "+sessionStorage.getItem('accessToken')?.toString()}}))
              })
            )
          } else {
  
            this.refreshTokenInProgress = true;
            this.refreshTokenSubject.next(null);
            return this.authServ.refreshToken().pipe(
              switchMap((data) => {

                this.refreshTokenInProgress = false;   

                if (data.successful) {
                  sessionStorage.setItem('accessToken', data.accessToken); 
                  this.refreshTokenSubject.next(sessionStorage.getItem('accessToken'));  

                  req = req.clone({
                    setHeaders: {
                      Authorization: "Bearer "+sessionStorage.getItem('accessToken')?.toString()
                    }
                  })
                   return next.handle(req);
  
                } else {
                  console.log("No se pudo utilizar Refresh Token1.");
                  this.authServ.cerrarSesion();
                  return throwError(() => new Error(error));
                }
              }),
              catchError( (err) => {
                this.refreshTokenInProgress = false;
                console.log("No se pudo utilizar Refresh Token.", err);
                this.authServ.cerrarSesion();
                return throwError(() => new Error(error));
              })
            )
          }
        }
      ))
    }
  }
}

//https://itnext.io/angular-tutorial-implement-refresh-token-with-httpinterceptor-bfa27b966f57

