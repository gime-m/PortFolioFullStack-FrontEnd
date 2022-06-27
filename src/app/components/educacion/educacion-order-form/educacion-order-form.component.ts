import { Component, OnInit } from '@angular/core';
import { EducacionRequestsService } from 'src/app/services/http-requests/educacion-requests.service';
import { LoginService } from 'src/app/services/login.service';
import { ScreenSizeService } from 'src/app/services/screen-size.service';
import { OrderFormBaseComponent } from '../../base/order-form-base/order-form-base.component';

@Component({
  selector: 'app-educacion-order-form',
  templateUrl: '../../base/order-form-base/order-form-base.component.html',
  styleUrls: ['../../../styles/editing.styles.css', '../../base/order-form-base/order-form-base.component.css']
})
export class EducacionOrderFormComponent extends OrderFormBaseComponent<EducacionRequestsService> implements OnInit {

  constructor(screenService: ScreenSizeService, login: LoginService, service: EducacionRequestsService) {
    super(screenService, login, service);
  }
}
