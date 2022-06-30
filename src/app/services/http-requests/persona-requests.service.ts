import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Persona } from '../model-interfaces';
import { TemaService } from '../tema.service';

@Injectable({
  providedIn: 'root'
})
export class PersonaRequestsService {

  private _personaId: number = 1;
  public get personaId(): number {
    return this._personaId;
  }
  public set personaId(value: number) {
    this._personaId = value;
  }

  public originURL: string = 'http://localhost:8080/';
  public getUrl: string = this.originURL +'persona?id='+this.personaId;
  public putUrl: string = this.originURL+'persona/editar/';
  public putImagenPerfilUrl: string = this.originURL+'subir-imagen/perfil';
  public deleteImagenPerfilUrl: string = this.originURL + 'borrar-imagen/perfil/'+this.personaId;
  public putImagenBannerUrl: string = this.originURL+'subir-imagen/banner';
  public deleteImagenBannerUrl: string = this.originURL + 'borrar-imagen/banner/'+this.personaId;

  imagenPerfil: any;
  imagenBanner: any;

  //Objeto
  private _persona?: Persona;
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
      error: (error: any) => {console.error("Error en solicitud PUT de imagen (persona)",error, form)}
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
      if (this.persona){
        this.getJSON();
      }
    },
    error: (error: any) => {console.error("Error en solicitud DELETE de imagen (persona)",error)}
  });  
}

  public getJSON(): void {
    this.http.get<Persona>(this.getUrl).subscribe({
      next: data => {
        this.persona=data; 
        this.getImagenPerfil();
        this.getImagenBanner();
        this.temaServ.getTema(data.temaId);
      }
    });
  }

  public putJSON(comp: string, dto: any): void{
    dto.id = this.personaId
    this.http.put<any>(this.putUrl + comp, dto)
    .subscribe({
      next: () => {},
      error: error => {console.error("Error en solicitud PUT de Persona",error)}
    })
  } 

  constructor(public http: HttpClient, public temaServ: TemaService){
    this.getJSON();
  }
}
