import { Component, OnInit } from '@angular/core';
import { ProyectoRequestsService } from 'src/app/services/http-requests/proyecto-requests.service';
import { LoginService } from 'src/app/services/login.service';
import { ScreenSizeService } from 'src/app/services/screen-size.service';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html'
})
export class ProyectoComponent extends BaseComponent implements OnInit {
  
  public showModal: boolean = false;
  changeShowModal(value: boolean){
    this.showModal = value;
  }

  public showModalOrder: boolean = false;
  changeShowModalOrder(value: boolean){
    this.showModalOrder = value;
  }

  constructor(screenService: ScreenSizeService, public service: ProyectoRequestsService, login: LoginService) {
    super(screenService, login);
  }

}
