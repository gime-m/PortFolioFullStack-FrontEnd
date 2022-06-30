import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { EducItem, EducItemPost, ExpItem, ExpItemPost, ProyectoItem, ProyectoItemPost } from '../model-interfaces';
import { RequestsBaseService } from './requests-base.service';

@Injectable({
  providedIn: 'root'
})
export class ImagenRequestsService<T extends EducItem|ExpItem|ProyectoItem, Tpost extends EducItemPost|ExpItemPost|ProyectoItemPost> extends RequestsBaseService<T,Tpost>{
  
  private _imagenes: any[] = []
  public get imagenes(): any[] {
    return this._imagenes;
  }
  public set imagenes(value:any[]) {
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
            if (this.imagenes){
              this.imagenes[id] = reader.result;
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

    this.http.put<any>(path, form)
    .subscribe({
      complete: () => {
        this.getJSON();
      },
      error: (error: any) => {console.error("Error en solicitud PUT de imagen",error)}
    });    
  }

  public deleteImagen<T> (id: T){
    let path: string = this.originURL + this.component + "/"+ "borrar-imagen/" + id;
    this.http.delete<any>(path).subscribe({
      complete: () => {
        this.getJSON();
      },
      error: (error: any) => {console.error("Error en solicitud DELETE de imagen",error)}
    });  
  }

  public override getJSON(): void{ 
    let url: string = this.originURL + this.component + this.getUrl + this.personaId;
    this.http.get<any>(url).subscribe({
      next: (data: T[] | undefined) => {
        this.items=data?.sort((a, b) => {return a.displayOrder - b.displayOrder}); 
        if (this.items){
          for (let i=0; i < this.items.length; i++ ){
            if (this.items[i]) {
              this.getImagen(this.items[i].id, this.items[i].imagen);
            }
          }
        }
      },
      error: (error: any) => {console.error("Error en solicitud GET de item", error);}
    });
  }

  constructor( http: HttpClient, @Inject('component') component: string) {
    super(http, component);
  }
}

