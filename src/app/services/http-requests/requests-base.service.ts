import { HttpClient } from '@angular/common/http';
import { Inject } from '@angular/core';
import { EducItem, EducItemPost, ExpItem, ExpItemPost, Persona, SkillItem, SkillItemPost } from '../model-interfaces';

export class RequestsBaseService<T extends EducItem|ExpItem|SkillItem|Persona, Tpost extends EducItemPost|ExpItemPost|SkillItemPost|undefined> {

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

  //Lista de Objetos
  private _items?: T[] | undefined;
  public get items(): T[] | undefined {
    return this._items;
  }
  public set items(value: T[] | undefined) {
    this._items = value;
  }
  
  
  //Metodos get, put, post, delete.

  public getJSON(): void{ 
    let url: string = this.originURL + this.component + this.getUrl;
    this.http.get<any>(url).subscribe({
      next: (data: T[] | undefined) => {
        this.items=data; 
      },
      error: (error: any) => {console.error("Error en solicitud GET", error);}
    });
  }

  public putJSON(objectPut: T): void{
    let url: string = this.originURL + this.component + this.putUrl;
    if (this.items!=undefined){
      
      let index = this.items.map(x => {return x.id;}).indexOf(objectPut.id) //encuentro elemento con id
      this.items.splice(index,1,objectPut); //reemplazo elemento 
          
      this.http.put<any>(url, objectPut)
      .subscribe({
        error: (error: any) => {console.error("Error en solicitud PUT",error,objectPut)}
      })
    } else {
      console.error("La lista de experiencias es indefinida. No se realizó solicitud PUT.")
    }   
  }

  public postJSON(objectPost: Tpost): void{
    let url: string = this.originURL + this.component + this.postUrl;
    this.http.post<T>(url, objectPost)
    .subscribe({
      next: (data: T) => {
        this.items?.push(data);        
      },
      error: (error: any) => {console.error("Error en solicitud POST",error,objectPost)}
    });
  }

  public deleteJSON(deleteId: number): void{
    let url: string = this.originURL + this.component + this.deleteByIdUrl + deleteId;
    if (this.items!=undefined){
      var index = this.items.map(x => {return x.id;}).indexOf(deleteId);
      this.items.splice(index,1);
      this.http.delete<any>(url)
      .subscribe({
        next: () => {},
        error: (error: any) => {console.error("Error en solicitud DELETE",error)}
      });
    } else {
      console.error("La lista de experiencias es indefinida. No se realizó solicitud DELETE.")
    }    
  }

  constructor(
    public http: HttpClient,
    @Inject('component') public component: string,
    ){
      this.component = component
  }
}
