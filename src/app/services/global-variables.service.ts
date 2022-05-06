import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalVariablesService {

  //Variables 
  private _nombre: string = "Gimena"
  private _apellido: string = "Martín Girardi";
  private _trabajo: string = "Licenciada en astronomía ponele"
  private _profilePicScr: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsvGjXaf8e_D6qQKOq4yhnlxuGJSGPhNwlqQpwuegJ1z0yqr-RkEpeUdpq7PxI9hioYq0&usqp=CAU"
  private _bannerImg: string = "https://i.pinimg.com/originals/45/97/93/459793db693bb8b93f6ab68adb90a64c.jpg"
  private _sobreMi: string = "Me llaman kime. Nací en el lejano oeste argentino (San Juan). Mi juventud fue muy difícil. Pasé los primeros años de mi vida con problemas motrices que me impidieron caminar y comer por mi misma por 2 años. No tenía control de mis esfínteres, necesitando recurrir a pañales y a cuidadores no pagos que me ayudaran a ir al baño. Fue humillante. He estudiado la astrología por años. Conozco el pasado y el futuro. Cada vez que miro hacia el cielo nocturno los astros me dicen quienes morirán esa noche. Es un don, y una maldición."
  private _location: string = "San Juan, Argentina"
  private _workplace: string = "FCEFN - UNSJ"
  private _email: string = "gimenamartin@hotmail.com"
  private _phone: string = "+54 264 123 4567"
  
  //Iconos
  private _editIcon: string = "assets/icons/pencil-fill.svg" 
  private _checkIcon: string = "assets/icons/check-lg.svg"
  private _xIcon: string = "assets/icons/x-lg.svg"
  private _apLogoSmall = "assets/images/APlogoSmall.png"
      
  //Getter y Setter de Variables
  public get nombre() : string {
      return this._nombre;
  }
  public set nombre(v : string) {
      this._nombre = v;
  }

  public get apellido(): string {
    return this._apellido;
    }
    public set apellido(value: string) {
    this._apellido = value;
    }

  public get trabajo() : string {
      return this._trabajo;
  }
  public set trabajo(v : string) {
      this._trabajo = v;
  }

  public get profilePicScr() : string {
      return this._profilePicScr;
  }
  public set profilePicScr(v : string) {
      this._profilePicScr = v;
  }

  public get bannerImg() : string {
      return this._bannerImg;
  }
  public set bannerImg(v : string) {
      this._bannerImg = v;
  }  
  
  public get sobreMi() : string {
      return this._sobreMi;
  }
  public set sobreMi(v : string) {
      this._sobreMi = v;
  }

  public get location() : string {
      return this._location;
  }
  public set location(v : string) {
      this._location = v;
  }

  public get workplace() : string {
      return this._workplace;
  }
  public set workplace(v : string) {
      this._workplace = v;
  }

  public get email() : string {
      return this._email;
  }
  public set email(v : string) {
      this._email = v;
  }

  public get phone() : string {
      return this._phone;
  }
  public set phone(v : string) {
      this._phone = v;
  }

  //Getter de iconos
  public get editIcon() : string {
      return this._editIcon
  }
  public get checkIcon() : string {
      return this._checkIcon
  }
  public get xIcon() : string {
      return this._xIcon
  }
  public get apLogoSmall() {
      return this._apLogoSmall
  }
  
  constructor(){}
  
}
