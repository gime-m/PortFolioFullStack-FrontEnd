import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { EducItem, EducItemPost, ExpItem, ExpItemPost, ProyectoItem, ProyectoItemPost } from '../model-interfaces';
import { RequestsBaseService } from './requests-base.service';

@Injectable({
  providedIn: 'root'
})
export class ImagenRequestsService<T extends EducItem|ExpItem|ProyectoItem, Tpost extends EducItemPost|ExpItemPost|ProyectoItemPost> extends RequestsBaseService<T,Tpost>{
  
  private _imagenes: string[] = [];
  public get imagenes(): string[] {
    return this._imagenes;
  }
  public set imagenes(value: string[]) {
    this._imagenes = value;
  }
  
  public getImagen(id: number, imgPath: string): void{ 
    let url: string = this.originURL + this.component + "/" + imgPath;
    let httpHeaders = new HttpHeaders().set('Accept', "image/webp,*/*");
    let reader = new FileReader;
  
    if (imgPath){
      this.http.get<Blob>(url, {headers: httpHeaders, responseType: 'blob' as 'json'}).subscribe({
        next: result => {
          reader.addEventListener("load", () => {
            if (this.imagenes && reader.result){
              this.imagenes[id] = reader.result.toString();
            }           
          }, false);
          reader.readAsDataURL(result);
        },
        error: (e) => {
          if (this.imagenes){
            this.imagenes[id] = "";
          }
          console.error("Error en solicitud GET de imagen.", e)
        }
      })
    } else {
      if (this.imagenes){
        this.imagenes[id] = "";
      }
    } 
  }

  public putImagen (file: File, id: number) {
    let form = new FormData();
    form.append('id', id.toString());
    form.append('file', file );
    let path: string = this.originURL + this.component + "/" + "subir-imagen/";

    this.http.put(path, form)
    .subscribe({
      complete: () => {
        this.getJSON();
      },
      error: (error): void => {console.error("Error en solicitud PUT de imagen",error)}
    });    
  }

  public deleteImagen<T> (id: T){
    let path: string = this.originURL + this.component + "/"+ "borrar-imagen/" + id;
    this.http.delete(path).subscribe({
      complete: () => {
        this.getJSON();
      },
      error: (error) => {console.error("Error en solicitud DELETE de imagen",error)}
    });  
  }

  public override getJSON(): void{ 
    let url: string = this.originURL + this.component + this.getUrl + this.personaId;
    this.http.get<T[]>(url).subscribe({
      next: (data: T[]) => {
        this.items=data?.sort((a, b) => {return a.displayOrder - b.displayOrder}); 
        if (this.items){
          for (let i=0; i < this.items.length; i++ ){
            if (this.items[i]) {
              this.getImagen(this.items[i].id, this.items[i].imagen);
            }
          }
        }
      },
      error: (error) => {console.error("Error en solicitud GET de item", error);}
    });
  }

  constructor( http: HttpClient, @Inject('component') component: string) {
    super(http, component);
  }
}

