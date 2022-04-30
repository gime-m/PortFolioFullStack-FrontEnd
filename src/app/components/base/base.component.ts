import { Component, HostListener, OnInit } from '@angular/core';
import { GlobalVariablesService } from 'src/app/services/global-variables.service';
import { ScreenSizeService } from 'src/app/services/screen-size.service';

@Component({
  selector: 'app-base',
  template: `<p> base works! </p>`,
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit{

  //Edicion
  private _showEditButton: boolean = false;
  private _overlayOpen: boolean = false;
  
  public get showEditButton(): boolean {
    return this._showEditButton;
  }
  public set showEditButton(value: boolean) {
    this._showEditButton = value;
  }

  public get overlayOpen(): boolean {
    return this._overlayOpen;
  }
  public set overlayOpen(value: boolean) {
    this._overlayOpen = value;
  } 

  submitForm() {}
  cancelForm() {}

  //Tamaño de pantalla 
  private _smallScreen: boolean = this.screenService.smallScreen;
  public get smallScreen(): boolean {
    return this._smallScreen;
  }
  public set smallScreen(value: boolean) {
    this._smallScreen = value;
  } 

//Constuctor, OnInit, HostListener
constructor(public screenService: ScreenSizeService, public global: GlobalVariablesService){}
  
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
