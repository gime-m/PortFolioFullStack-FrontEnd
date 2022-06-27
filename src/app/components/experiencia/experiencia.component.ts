import { Component, OnInit } from '@angular/core';
import { ScreenSizeService } from 'src/app/services/screen-size.service';
import { BaseComponent } from '../base/base.component';
import { LoginService } from 'src/app/services/login.service';
import { ExperienciaRequestsService } from 'src/app/services/http-requests/experiencia-requests.service';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent extends BaseComponent implements OnInit {
  
  public overlayOpen: boolean = false;
  changeOverlayOpen(value: boolean){
    this.overlayOpen = value;
  }

  public overlayOpenOrder: boolean = false;
  changeOverlayOpenOrder(value: boolean){
    this.overlayOpenOrder = value;
  }

  //Constructor
  constructor(screenService: ScreenSizeService, public service: ExperienciaRequestsService, login: LoginService) {
    super(screenService, login);
  }
  
}