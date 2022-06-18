import { Component, OnInit } from '@angular/core';
import { ScreenSizeService } from 'src/app/services/screen-size.service';
import { BaseComponent } from '../base/base.component';
import { LoginService } from 'src/app/services/login.service';
import { EducacionRequestsService } from 'src/app/services/http-requests/educacion-requests.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent extends BaseComponent implements OnInit {
  
  public overlayOpen: boolean = false;
  changeOverlayOpen(value: boolean){
    this.overlayOpen = value;
  }

  //Constructor
  constructor(screenService: ScreenSizeService, public service: EducacionRequestsService, login: LoginService) {
    super(screenService, login);
  }

}