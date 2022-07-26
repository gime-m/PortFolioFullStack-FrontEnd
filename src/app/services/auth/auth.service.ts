import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Router } from '@angular/router';
import { AuthResponse, Credenciales } from '../model-interfaces';
import { LoginService } from '../login.service';
import { GlobalVariablesService } from '../http-requests/global-variables.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  authURL=this.gv.originURL+ "login";
  refreshURL=this.gv.originURL + "refresh";
  wrongAuth: boolean = false;
  failedAuth: boolean = false;

  iniciarSesion(cred: Credenciales) {
     let form =  new HttpParams().set('username', cred.username).set('password', cred.password);
     let options = {headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' }), };

    this.http.post<AuthResponse>(this.authURL, form.toString(), options).subscribe({
      next: data => {        
        if (data.successful) {
          sessionStorage.setItem('accessToken', data.accessToken);
          sessionStorage.setItem('refreshToken', data.refreshToken);
          sessionStorage.setItem('username',cred.username);
          if (data.roles.includes("ADMIN")){
            sessionStorage.setItem('isAdmin', "ADMIN");
          }    
          this.router.navigate(['/portfolio']); 
        } else {
          console.info("Autenticación realizada. Usuario o contraseña incorrectos.");
          this.wrongAuth = true;
        }
      },
      error: error => {
        console.error("Error en autenticacion", error);
        this.failedAuth = true;
      }
    });
  }

  cerrarSesion(): void{
    sessionStorage.removeItem('accessToken');
    sessionStorage.removeItem('refreshToken');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('isAdmin');
    this.login.editando = false
    this.router.navigate(['/login']);
  }

  constructor(private http: HttpClient, private router:Router, private login: LoginService, public gv: GlobalVariablesService){
  }

  refreshToken() {
    let header = new HttpHeaders().set('Authorization', "Bearer "+ sessionStorage.getItem('refreshToken')?.toString());
    return this.http.get<AuthResponse>(this.refreshURL, {'headers': header})
  }
}


