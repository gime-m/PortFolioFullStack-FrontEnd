import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Persona } from '../model-interfaces';
import { TemaService } from './tema.service';

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

  public getImagenUrl: string = this.originURL+'persona/';

  public putImagenPerfilUrl: string = this.originURL+'persona/subir-imagen/perfil';
  public putImagenBannerUrl: string = this.originURL+'persona/subir-imagen/banner';
  public putImagenFondoUrl: string = this.originURL+'persona/subir-imagen/fondo';

  public deleteImagenPerfilUrl: string = this.originURL + 'persona/borrar-imagen/perfil/'+this.personaId;
  public deleteImagenBannerUrl: string = this.originURL + 'persona/borrar-imagen/banner/'+this.personaId;
  public deleteImagenFondoUrl: string = this.originURL + 'persona/borrar-imagen/fondo/'+this.personaId;
  
  imagenPerfil: string = "";
  imagenBanner: string = "";
  imagenFondo: string = "";

  //Objeto
  private _persona?: Persona;
  public get persona(): Persona | undefined {
    return this._persona;
  }
  public set persona(value: Persona | undefined) {
    this._persona = value;
  }

  //Datos de Persona 

  public getJSON(): void {
    this.http.get<Persona>(this.getUrl).subscribe({
      next: data => {
        this.persona=data; 
        this.getImagenPerfil();
        this.getImagenBanner();
        this.temaServ.getTema(data.temaId);
        this.getImagenFondo();
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

  // Imagenes

  getImagenPerfil(){
    let httpHeaders = new HttpHeaders().set('Accept', "image/webp,*/*");
    let reader = new FileReader;
    if (this.persona?.imagenPerfil){
      this.http.get<Blob>(this.getImagenUrl + this.persona?.imagenPerfil, {headers: httpHeaders, responseType: 'blob' as 'json'}).subscribe({
        next: result => {
          reader.addEventListener("load", () => {
            if(reader.result){
              this.imagenPerfil = reader.result.toString();
            }
          }, false);
          reader.readAsDataURL(result);
        },
        error: (err) => {
          this.imagenPerfil = "assets/images/defaultImagenPerfil.png";
          console.error("Error en solicitud GET para imagen (persona)", err);
        }
      })
    } else {
      this.imagenPerfil = "assets/images/defaultImagenPerfil.png";
    } 
  }

  getImagenBanner(){
    let httpHeaders = new HttpHeaders().set('Accept', "image/webp,*/*");
    let reader = new FileReader;
    if (this.persona?.banner){
      this.http.get<Blob>(this.getImagenUrl + this.persona?.banner, {headers: httpHeaders, responseType: 'blob' as 'json'}).subscribe({
        next: result => {
          reader.addEventListener("load", () => {
            if(reader.result){
              this.imagenBanner = reader.result.toString();
            }
          }, false);
          reader.readAsDataURL(result);
        },
        error: (err) => {
          this.imagenBanner =  "/assets/images/default-banner.png";
          console.error("Error en solicitud GET para imagen (persona)", err);
        }
      })
    } else {
      this.imagenBanner =  "/assets/images/default-banner.png";
    } 
  }

  getImagenFondo(){
    let httpHeaders = new HttpHeaders().set('Accept', "image/webp,*/*");
    let reader = new FileReader;
    if (this.persona?.imagenFondo){
      this.http.get<Blob>(this.getImagenUrl + this.persona?.imagenFondo, {headers: httpHeaders, responseType: 'blob' as 'json'}).subscribe({
        next: result => {
          reader.addEventListener("load", () => {
            if(reader.result){
              this.imagenFondo = reader.result.toString();
            }
          }, false);
          reader.readAsDataURL(result);
        },
        error: (err) => {
          this.imagenFondo =  "/assets/images/default-background.png";
          console.error("Error en solicitud GET para imagen (persona)", err);
        }
      })
    } else {
      this.imagenFondo =  "/assets/images/default-background.png";
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
      case "imagenFondo":
        path = this.putImagenFondoUrl;
        break;
      default:
        break;
    }

    this.http.put(path, form)
    .subscribe({
      complete: () => {
        this.getJSON();
      },
      error: (error) => {console.error("Error en solicitud PUT de imagen (persona)",error, form)}
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
      case "imagenFondo":
        path = this.deleteImagenFondoUrl;
        break; 
      default:
        break;
    }

    this.http.delete(path).subscribe({
      complete: () => {
        if (this.persona){
          this.getJSON();
        }
      },
      error: (error) => {console.error("Error en solicitud DELETE de imagen (persona)",error)}
    });  
  }

  constructor(public http: HttpClient, public temaServ: TemaService){
    this.getJSON();
  }
}
