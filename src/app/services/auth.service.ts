import { Injectable } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

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


}
