import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScreenSizeService {

  //Variable
  private _smallScreen: boolean = false;
  
  //Getter Setter
  public get smallScreen(): boolean {
    return this._smallScreen;
  }
  public set smallScreen(value: boolean) {
    this._smallScreen = value;
  }
  
  //Metodo
  public updateScreenSize(){
    if (window.innerWidth < 575) {this.smallScreen = true} else {this.smallScreen = false}
  } 

  //Constructor
  constructor() {this.updateScreenSize()}

}
