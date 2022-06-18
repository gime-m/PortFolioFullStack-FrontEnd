import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { EducItem, EducItemPost, ExpItem, ExpItemPost, ProyectoItem, ProyectoItemPost } from '../model-interfaces';
import { RequestsBaseService } from './requests-base.service';

@Injectable({
  providedIn: 'root'
})
export class ImagenRequestsService<T extends EducItem|ExpItem|ProyectoItem, Tpost extends EducItemPost|ExpItemPost|ProyectoItemPost> extends RequestsBaseService<T,Tpost>{
  
  //Lista de imagenes
  private _imagenes: any[] = []
  public get imagenes(): any[] {
    return this._imagenes;
  }
  public set imagenes(value:any[]) {
    this._imagenes = value;
  }

  //Metodos para imagenes

  public getImagen(id: number, imgPath: string): void{ 
    let url: string = this.originURL + imgPath;
    let httpHeaders = new HttpHeaders().set('Accept', "image/webp,*/*");
    let reader = new FileReader;

    if (imgPath){
      this.http.get<Blob>(url, {headers: httpHeaders, responseType: 'blob' as 'json'}).subscribe({
        next: result => {
          reader.addEventListener("load", () => {
            if (this.imagenes != undefined){
              this.imagenes[id] = reader.result;
            }           
          }, false);
          reader.readAsDataURL(result);
        },
        error: (e) => {
          if (this.imagenes != undefined){
            this.imagenes[id] = "";
          }
          console.log(e)
        }
      })
    } else {
      if (this.imagenes != undefined){
        this.imagenes[id] = "";
      }
    } 
  }

  public putImagen (file: File, id: number) {
    let form = new FormData();
    form.append('id', id.toString());
    form.append('file', file );
    let path: string = this.originURL + "subir-imagen/" + this.component;

    console.log(id)

    this.http.put<any>(path, form)
    .subscribe({
      complete: () => {
        this.getJSON();
      },
      error: (error: any) => {console.error("Error en solicitud PUT",error, form)}
    });    
  }

  public deleteImagen<T> (id: T){
    let path: string = this.originURL + "borrar-imagen/"+ this.component +"/" + id;
    this.http.delete<any>(path).subscribe({
      complete: () => {
        this.getJSON();
      },
      error: (error: any) => {console.error("Error en solicitud DELETE",error)}
    });  
  }

  public override getJSON(): void{ 
    let url: string = this.originURL + this.component + this.getUrl + this.personaId;
    this.http.get<any>(url).subscribe({
      next: (data: T[] | undefined) => {
        this.items=data; 

        if (data != undefined){
          for (let i=0; i < data.length; i++ ){
            if (data[i]) {
              this.getImagen(data[i].id, data[i].imagen);
            }
          }
        }
      },
      error: (error: any) => {console.error("Error en solicitud GET", error);}
    });
  }

  constructor( http: HttpClient, @Inject('component') public comp: string) {
    super(http, comp);
  }
}

