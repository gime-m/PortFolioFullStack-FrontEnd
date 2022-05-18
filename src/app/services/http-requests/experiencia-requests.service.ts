import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ExpItem, ExpItemPost } from './model-interfaces';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaRequestsService {
  
  //Id de persona
  private _personaId: number = 1;
  public get personaId(): number {
    return this._personaId;
  }
  public set personaId(value: number) {
    this._personaId = value;
  }

  //URL
  private getUrl: string = 'http://localhost:8080/exp/ver/'
  private putUrl: string ='http://localhost:8080/exp/editar'
  private postUrl: string = 'http://localhost:8080/exp/crear'
  private deleteById: string = 'http://localhost:8080/exp/eliminar?id='

  //Lista de Objetos
  private _items?: ExpItem[]
  public get items(): ExpItem[] | undefined {
    return this._items;
  }
  public set items(value: ExpItem[] | undefined) {
    this._items = value;
  }
  
  //Metodos get, put, post, delete

  public getJSON(){
    this.http.get<ExpItem[]>(this.getUrl).subscribe({
      next: data => {
        this.items=data; 
        console.log("Solicitud get realizada",this.items)
      },
      error: error => {console.log("Error en solicitud GET", error)}
    });
  }

  public putJSON(objectPut: ExpItem){
    if (this.items!=undefined){
      let index = this.items.map(x => {return x.id;}).indexOf(objectPut.id)
      this.items.splice(index,1,objectPut);
      this.http.put<any>(this.putUrl, objectPut)
      .subscribe({
        next: () => {console.log("Solicitud PUT realizada",objectPut)},
        error: error => {console.log("Error en solicitud PUT",error,objectPut)}
      })
    } else {
      console.error("La lista de experiencias es indefinida. No se realizó solicitud PUT.")
    }   
  }

  public postJSON(objectPost: ExpItemPost){

    this.http.post<any>(this.postUrl, objectPost)
    .subscribe({
      complete: () => {
        console.log("Solicitud POST realizada",objectPost);
        this.getJSON();
      },
      error: error => {console.log("Error en solicitud POST",error,objectPost)}
    });
  }

  public deleteJSON(deleteId: number){
    if (this.items!=undefined){
      var index = this.items.map(x => {return x.id;}).indexOf(deleteId);
      this.items.splice(index,1);
      this.http.delete<any>(this.deleteById+deleteId)
      .subscribe({
        next: () => {console.log("Solicitud DELETE realizada",deleteId)},
        error: error => {console.log("Error en solicitud DELETE",error)}
      });
    } else {
      console.error("La lista de experiencias es indefinida. No se realizó solicitud DELETE.")
    }    
  }

  constructor(private http: HttpClient) {
    this.getJSON()
  }
}

