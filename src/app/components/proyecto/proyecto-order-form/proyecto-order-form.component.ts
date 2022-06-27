import { Component, OnInit } from '@angular/core';
import { ProyectoRequestsService } from 'src/app/services/http-requests/proyecto-requests.service';
import { LoginService } from 'src/app/services/login.service';
import { ScreenSizeService } from 'src/app/services/screen-size.service';
import { OrderFormBaseComponent } from '../../base/order-form-base/order-form-base.component';

@Component({
  selector: 'app-proyecto-order-form',
  templateUrl: '../../base/order-form-base/order-form-base.component.html',
  styleUrls: ['../../../styles/editing.styles.css', '../../base/order-form-base/order-form-base.component.css']
})
export class ProyectoOrderFormComponent extends OrderFormBaseComponent<ProyectoRequestsService> implements OnInit {

  constructor(screenService: ScreenSizeService, login: LoginService, service: ProyectoRequestsService) {
    super(screenService, login, service);
  }
}
