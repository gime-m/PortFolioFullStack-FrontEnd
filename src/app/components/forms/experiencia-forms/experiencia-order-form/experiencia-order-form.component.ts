import { Component, OnInit } from '@angular/core';
import { ExperienciaRequestsService } from 'src/app/services/http-requests/experiencia-requests.service';
import { LoginService } from 'src/app/services/login.service';
import { ScreenSizeService } from 'src/app/services/screen-size.service';
import { OrderFormBaseComponent } from '../../order-form-base/order-form-base.component';

@Component({
  selector: 'app-experiencia-order-form',
  templateUrl: '../../order-form-base/order-form-base.component.html',
  styleUrls: ['../../../../styles/editing.styles.css', '../../order-form-base/order-form-base.component.css']
})
export class ExperienciaOrderFormComponent extends OrderFormBaseComponent<ExperienciaRequestsService> implements OnInit {

  constructor(screenService: ScreenSizeService, login: LoginService, service: ExperienciaRequestsService) {
    super(screenService, login, service);
  }
}
