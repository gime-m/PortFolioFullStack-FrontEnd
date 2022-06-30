import { Component, OnInit } from '@angular/core';
import { ScreenSizeService } from 'src/app/services/screen-size.service';
import { BaseComponent } from '../base/base.component';
import { LoginService } from 'src/app/services/login.service';
import { EducacionRequestsService } from 'src/app/services/http-requests/educacion-requests.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html'
})
export class EducacionComponent extends BaseComponent implements OnInit {
  
  public showModal: boolean = false;
  changeShowModal(value: boolean){
    this.showModal = value;
  }

  public showModalOrder: boolean = false;
  changeShowModalOrder(value: boolean){
    this.showModalOrder = value;
  }

  constructor(screenService: ScreenSizeService, public service: EducacionRequestsService, login: LoginService) {
    super(screenService, login);
  }

}