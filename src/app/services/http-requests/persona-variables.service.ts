import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from './model-interfaces';

@Injectable({
  providedIn: 'root'
})
export class PersonaVariablesService {

  //Id 
  private _id: number = 1;
  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }

  //URL
  private getByIdUrl: string = 'http://localhost:8080/persona?id='+this.id
  private putByIdUrl: string ='http://localhost:8080/persona/editar'

  //Objeto
  private _persona?: Persona | undefined;
  public get persona(): Persona | undefined {
    return this._persona;
  }
  public set persona(value: Persona | undefined) {
    this._persona = value;
  }
  
  //Metodos get y put
  public getJSON() {
    this.http.get<Persona>(this.getByIdUrl).subscribe({
      next: data => {this.persona=data; console.log("Soliciud get realizada")},
      error: error => {console.log("Error en solicitud GET", error)}
    });
  }
  public putJSON(){
    this.http.put<any>(this.putByIdUrl, this.persona)
    .subscribe({
      next: () => {console.log("Solicitud PUT realizada",this.persona)},
      error: error => {console.log("Error en solicitud PUT",error)}
    })
  }
 
  constructor(private http: HttpClient) {
    this.getJSON();
  }
}
