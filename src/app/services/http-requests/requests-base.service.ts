import { HttpClient } from '@angular/common/http';
import { Inject } from '@angular/core';
import { EducItem, EducItemPost, ExpItem, ExpItemPost, OrderDTO, ProyectoItem, ProyectoItemPost, SkillItem, SkillItemPost } from '../model-interfaces';

export class RequestsBaseService<T extends EducItem|ExpItem|SkillItem|ProyectoItem, Tpost extends EducItemPost|ExpItemPost|SkillItemPost|ProyectoItemPost> {

  //Id de persona
  private _personaId: number = 1;
  public get personaId(): number {
    return this._personaId;
  }
  public set personaId(value: number) {
    this._personaId = value;
  }

  //URL
  public originURL: string = 'http://localhost:8080/';
  public getUrl: string = '/ver/';
  public putUrl: string ='/editar';
  public postUrl: string = '/crear';
  public deleteByIdUrl: string = '/eliminar?id=';
  public putOrderUrl:string = '/ordenar';

  //Lista de Objetos
  private _items?: T[];
  public get items(): T[] | undefined {
    return this._items;
  }
  public set items(value: T[] | undefined) {
    this._items = value;
  }
  
  //Metodos get, put, post, delete.

  public getJSON(): void{ 
    let url: string = this.originURL + this.component + this.getUrl + this.personaId;
    this.http.get<any>(url).subscribe({
      next: (data: T[] | undefined) => {
        this.items=data?.sort((a, b) => {return a.displayOrder - b.displayOrder}); 
      },
      error: (error: any) => {console.error("Error en solicitud GET de item", error);}
    });
  }

  public putJSON(objectPut: T): void{
    let url: string = this.originURL + this.component + this.putUrl;
    if (this.items){
      let index = this.items.map(x => {return x.id;}).indexOf(objectPut.id) //encuentro elemento con id
      this.items.splice(index,1,objectPut); //reemplazo elemento 
          
      this.http.put<any>(url, objectPut)
      .subscribe({
        error: (error: any) => {console.error("Error en solicitud PUT de item",error,objectPut)}
      })
    } 
  }

  public postJSON(objectPost: Tpost): void{
    let url: string = this.originURL + this.component + this.postUrl;
    this.http.post<T>(url, objectPost)
    .subscribe({
      next: (data: T) => {
        this.items?.push(data);
      },
      error: (error: any) => {console.error("Error en solicitud POST de item",error,objectPost)}
    });
  }

  public deleteJSON(deleteId: number): void{
    let url: string = this.originURL + this.component + this.deleteByIdUrl + deleteId;
    if (this.items){
      var index = this.items.map(x => {return x.id;}).indexOf(deleteId);
      this.items.splice(index,1);
      this.http.delete<any>(url)
      .subscribe({
        next: () => {},
        error: (error: any) => {console.error("Error en solicitud DELETE de item",error)}
      });
    }
  }

  public putJSONorder(lista: T[]): void{
    let url: string = this.originURL + this.component + this.putOrderUrl;
    if (lista){
      let order = lista.map((x, ind) => new OrderDTO(x.id,ind+1));
      this.items = lista;

      this.http.put<any>(url, order)
      .subscribe({
        error: (error: any) => {console.error("Error en solicitud PUT de orden",error)}
      })
    }   
  }

  constructor(public http: HttpClient, @Inject('component') public component: string){
    this.component = component
  }
}
