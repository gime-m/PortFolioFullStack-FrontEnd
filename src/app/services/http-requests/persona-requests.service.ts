import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Persona } from '../model-interfaces';
import { RequestsBaseService } from './requests-base.service';

@Injectable({
  providedIn: 'root'
})
export class PersonaRequestsService extends RequestsBaseService<Persona,undefined> {

  public override getUrl: string = this.originURL +'persona?id='+this.personaId;
  public override putUrl: string = this.originURL+'persona/editar';
  public putImagenPerfilUrl: string = this.originURL+'subir-imagen/perfil';
  public deleteImagenPerfilUrl: string = this.originURL + 'borrar-imagen/perfil/'+this.personaId;
  public putImagenBannerUrl: string = this.originURL+'subir-imagen/banner';
  public deleteImagenBannerUrl: string = this.originURL + 'borrar-imagen/banner/'+this.personaId;

  imagenPerfil: any;
  imagenBanner: any;

  //Objeto
  private _persona?: Persona | undefined;
  public get persona(): Persona | undefined {
    return this._persona;
  }
  public set persona(value: Persona | undefined) {
    this._persona = value;
  }

  // Imagen

  getImagenPerfil(){
    let httpHeaders = new HttpHeaders().set('Accept', "image/webp,*/*");
    let reader = new FileReader;
    if (this.persona?.imagenPerfil != ""){
      this.http.get<Blob>(this.originURL + this.persona?.imagenPerfil, {headers: httpHeaders, responseType: 'blob' as 'json'}).subscribe({
        next: result => {
          reader.addEventListener("load", () => {this.imagenPerfil = reader.result;}, false);
          reader.readAsDataURL(result);
        },
        error: () => {
          this.imagenPerfil = "assets/images/defaultImagenPerfil.png";
        }
      })
    } else {
      this.imagenPerfil = "assets/images/defaultImagenPerfil.png";
    } 
  }

  getImagenBanner(){
    let httpHeaders = new HttpHeaders().set('Accept', "image/webp,*/*");
    let reader = new FileReader;
    if (this.persona?.banner != ""){
      this.http.get<Blob>(this.originURL + this.persona?.banner, {headers: httpHeaders, responseType: 'blob' as 'json'}).subscribe({
        next: result => {
          reader.addEventListener("load", () => {this.imagenBanner = reader.result;}, false);
          reader.readAsDataURL(result);
        },
        error: () => {
          this.imagenBanner =  "assets/images/login-background/4.jpg"
        }
      })
    } else {
      this.imagenBanner =  "assets/images/login-background/4.jpg"
    } 
  }

  public putImagen(file: File, imagenCambiar: string) {
    let form = new FormData();
    form.append('id', this.personaId.toString());
    form.append('file', file );
    let path: string = "";
    switch (imagenCambiar) {
      case "imagenPerfil":
        path = this.putImagenPerfilUrl;
        break;
      case "banner":
        path = this.putImagenBannerUrl;
        break;  
      default:
        break;
    }

    this.http.put<any>(path, form)
    .subscribe({
      complete: () => {
        this.getJSON();
      },
      error: (error: any) => {console.error("Error en solicitud PUT",error, form)}
    });    
  }

  public deleteImagen(imagenCambiar: string){
    let path: string = "";
    switch (imagenCambiar) {
      case "imagenPerfil":
        path = this.deleteImagenPerfilUrl;
        break;
      case "banner":
        path = this.deleteImagenBannerUrl;
        break;  
      default:
        break;
    }

    this.http.delete<any>(path).subscribe({
    complete: () => {
      if (this.persona != undefined){
        this.getJSON();
      }
    },
    error: (error: any) => {console.error("Error en solicitud DELETE",error)}
  });  
}

  // Persona

  public override getJSON(): void {
    this.http.get<Persona>(this.getUrl).subscribe({
      next: data => {
        this.persona=data; 
        this.getImagenPerfil();
        this.getImagenBanner();}
    });
  }

  public override putJSON(): void{
    this.http.put<any>(this.putUrl, this.persona)
    .subscribe({
      next: () => {},
      error: error => {console.error("Error en solicitud PUT",error)}
    })
  } 

  constructor(http: HttpClient) {
    super(http,"persona");
    this.getJSON();
  }
}
