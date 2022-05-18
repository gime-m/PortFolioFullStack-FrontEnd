import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalVariablesService {

  //Variables 
  private _profilePicScr: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsvGjXaf8e_D6qQKOq4yhnlxuGJSGPhNwlqQpwuegJ1z0yqr-RkEpeUdpq7PxI9hioYq0&usqp=CAU"
  private _bannerImg: string = "https://i.pinimg.com/originals/45/97/93/459793db693bb8b93f6ab68adb90a64c.jpg"
    
  //Iconos
  private _editIcon: string = "assets/icons/pencil-fill.svg" 
  private _checkIcon: string = "assets/icons/check-lg.svg"
  private _xIcon: string = "assets/icons/x-lg.svg"
  private _apLogoSmall = "assets/images/APlogoSmall.png"
      
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

  //Getter de iconos
  public get editIcon() : string {
      return this._editIcon;
  }
  public get checkIcon() : string {
      return this._checkIcon;
  }
  public get xIcon() : string {
      return this._xIcon;
  }
  public get apLogoSmall() {
      return this._apLogoSmall;
  }
  
  constructor(){}
  
}
