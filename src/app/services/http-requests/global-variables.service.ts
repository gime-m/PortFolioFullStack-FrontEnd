import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalVariablesService {

  constructor() { }

  //public originURL: string = 'http://localhost:8080/';
  public originURL: string = 'https://fast-dawn-50424.herokuapp.com/';
  public personaId: number = 1;
}
