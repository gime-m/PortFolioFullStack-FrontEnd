import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Router } from '@angular/router';
import { AuthResponse, Credenciales } from '../model-interfaces';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  authURL="http://localhost:8080/login"
  wrongAuth: boolean = false;
  failedAuth: boolean = false;

  iniciarSesion(cred: Credenciales) {
     let form =  new HttpParams().set('username', cred.username).set('password', cred.password);
     let options = {headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' }), };

    this.http.post<AuthResponse>(this.authURL, form.toString(), options).subscribe({
      next: data => {        
        if (data.successful) {
          sessionStorage.setItem('accessToken', data.accessToken);
          console.log("Autenticación exitosa.");

          sessionStorage.setItem('username',cred.username);
          if (data.roles.includes("ADMIN")){
            sessionStorage.setItem('isAdmin', "ADMIN");
          }    
         
          this.router.navigate(['/portfolio']);
          
        } else {
          console.log("Autenticaión realizada. Usuario o contraseña incorrectos.");
          this.wrongAuth = true;
        }
      },
      error: error => {
        console.log("Error en autenticacion", error);
        this.failedAuth = true;
      }
    });
  }

  cerrarSesion(): void{
    sessionStorage.removeItem('accessToken');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('isAdmin');
    this.router.navigate(['/login']);
  }

  constructor(private http: HttpClient, private router:Router){
  }

  /*
  authURL="https://localhost:8080/auth/login";
  currentUserSubject: BehaviorSubject<any>

  IniciarSesion(cred: Credenciales): Observable<any> {
    return this.http.post(this.authURL, cred).pipe(
      map(data => {
        console.log(data)
        sessionStorage.setItem('currentUser', JSON.stringify(data));
        return data;
      })
    )
  }

  constructor(private http: HttpClient){
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser') || '{}'))
  }
  */

}


