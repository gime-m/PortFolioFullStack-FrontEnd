import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  url="https://localhost:4200/api/auth/login";
  currentUserSubject: BehaviorSubject<any>;

  constructor(private http: HttpClient){
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUseer') || '{}'))
  }

  IniciarSesion(credenciales:any):Observable<any> {
    return this.http.post(this.url, credenciales).pipe(
      map(data=>{
        sessionStorage.setItem('currentUser',JSON.stringify(data));
        return data;
      })
    )
  }






  
  /*
  api = 'https://localhost:4200/api'; 
  token: any;

  constructor(private http:HttpClient, private router: Router) {}

  login (email: string, password: string): void {
    this.http.post(this.api + '/authenticate', {email: email, password: password}).subscribe((resp:any) => {
      this.router.navigate(['profile']);
      localStorage.setItem('auth_token', resp.token);
    })
  }

  logout(): void{
    localStorage.removeItem('token');
  }

  public get logedIn() : boolean {
    return (localStorage.getItem('token') !== null);
  }
  */


}
