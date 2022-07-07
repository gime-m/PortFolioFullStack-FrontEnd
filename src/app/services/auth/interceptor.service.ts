import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, filter, Observable, switchMap, take, throwError } from 'rxjs';
import { LoadingService } from '../loading/loading.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  refreshTokenInProgress = false;
  refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private authServ: AuthService, private loading: LoadingService) { }
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {

    //No modifica nada en autenticacion
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
  
      //Handle error
      return next.handle(req).pipe(catchError(
        error => {
 
          //Si el error no es 401 o 403 solo devuelve el error
          if (error.status !== 401 && error.status !== 403){
            return throwError(() => new Error(error));
          }
  
          //Si no, usa el refresh token

          //Si ya se envio la solicitud para obtener el nuevo access token
          if (this.refreshTokenInProgress){
            return this.refreshTokenSubject.pipe(
              filter(result => result !== null),
              take(1),
              switchMap(() => {
                this.loading.requests--;
                return next.handle(req.clone({setHeaders: {Authorization: "Bearer "+sessionStorage.getItem('accessToken')?.toString()}}))
              })
            )
          } else {
            
            //Si no, se envia la solicitud
            this.refreshTokenInProgress = true;
            this.refreshTokenSubject.next(null);
            return this.authServ.refreshToken().pipe(
              switchMap((data) => {

                this.loading.requests--;
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
                  console.info("No se pudo utilizar Refresh Token.");
                  this.loading.imagesLoading=0;
                  this.loading.requests=0;
                  this.authServ.cerrarSesion();
                  return throwError(() => new Error(error));
                }
              }),
              catchError( (err) => {
                this.refreshTokenInProgress = false;
                console.error("No se pudo utilizar Refresh Token.", err);
                this.loading.imagesLoading=0;
                this.loading.requests=0;
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

