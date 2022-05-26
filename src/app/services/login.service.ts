import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  public isAdmin(): string | null {
    return sessionStorage.getItem('isAdmin')
  }
  
  public user(): string | null {
    return sessionStorage.getItem('username');
  }

  public editando: boolean = false;

  constructor() { }
}
