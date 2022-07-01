import { Component, OnInit } from '@angular/core';
import { ExperienciaRequestsService } from 'src/app/services/http-requests/experiencia-requests.service';
import { OrderFormBaseComponent } from '../../order-form-base/order-form-base.component';

@Component({
  selector: 'app-experiencia-order-form',
  templateUrl: '../../order-form-base/order-form-base.component.html',
  styleUrls: ['../../../../styles/editing.styles.css', '../../order-form-base/order-form-base.component.css']
})
export class ExperienciaOrderFormComponent extends OrderFormBaseComponent<ExperienciaRequestsService> implements OnInit {

  constructor(service: ExperienciaRequestsService) {
    super(service);
  }
}
