import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _logedIn: boolean = true;
  public get logedIn(): boolean {
    return this._logedIn;
  }
  public set logedIn(value: boolean) {
    this._logedIn = value;
  }

  constructor() { }
}
