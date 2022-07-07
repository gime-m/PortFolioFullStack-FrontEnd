import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PutTema, Tema, TemaCorto } from '../model-interfaces';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  public cambiarTema(tema: Tema){
    document.documentElement.style.setProperty('--main-color', `rgba(${tema.mainColor})`)
    document.documentElement.style.setProperty('--main-color-darker', `rgba(${tema.mainColorDarker})`)
    document.documentElement.style.setProperty('--main-color-dark', `rgba(${tema.mainColorDark})`)
    document.documentElement.style.setProperty('--main-color-low-opacity', `rgba(${tema.mainColorLowOpacity})`)
    document.documentElement.style.setProperty('--shadow-color', `rgba(${tema.shadowColor})`)
  }

  public originURL: string = 'http://localhost:8080/';
  public getTemaUrl: string = this.originURL +'tema?id=';
  public getTemasListaUrl: string = this.originURL +'tema/lista';
  public putTemaUrl: string = this.originURL +'persona/editar/tema';

  public personaId: number = 1;

  public listaTemas: TemaCorto[] = [];

  public getTema(id: number): void {
    this.http.get<Tema>(this.getTemaUrl+id).subscribe({
      next: data => {
        this.cambiarTema(data);
      },
      error: err => {
        console.error("Error en solicitud GET para tema.", err);
      }
    });
  }

  public getTemasLista(): void {
    this.http.get<TemaCorto[]>(this.getTemasListaUrl).subscribe({
      next: data => {
        this.listaTemas = data;
      },
      error: err => {
        console.error("Error en solicitud GET para lista de temas.", err);
      }
    });
  }

  public putTema(temaId: number): void{
    let dto: PutTema = new PutTema;
    dto.personaId = this.personaId;
    dto.temaId = temaId;
    this.http.put<Tema>(this.putTemaUrl, dto)
    .subscribe({
      next: data => {
        this.cambiarTema(data);
      },
      error: error => {console.error("Error en solicitud PUT de tema.",error)}
    })
  }

  constructor(public http: HttpClient) {
  }
}
