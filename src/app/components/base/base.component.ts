import { Component, HostListener, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { ScreenSizeService } from 'src/app/services/screen-size.service';

@Component({
  selector: 'app-base',
  template: `<p> base works! </p>`
})
export class BaseComponent implements OnInit{

  //Tamaño de pantalla 
  private _smallScreen: boolean = this.screenService.smallScreen;
  public get smallScreen(): boolean {
    return this._smallScreen;
  }
  public set smallScreen(value: boolean) {
    this._smallScreen = value;
  } 

  //Constuctor, OnInit, HostListener
  constructor(public screenService: ScreenSizeService, public login: LoginService){}
  
  ngOnInit(): void {
    this.screenService.updateScreenSize(), 
    this.smallScreen = this.screenService.smallScreen
  }

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.screenService.updateScreenSize()
    this.smallScreen = this.screenService.smallScreen
  }
}
