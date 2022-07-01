import { Component, OnInit } from '@angular/core';
import { ProyectoRequestsService } from 'src/app/services/http-requests/proyecto-requests.service';
import { OrderFormBaseComponent } from '../../order-form-base/order-form-base.component';

@Component({
  selector: 'app-proyecto-order-form',
  templateUrl: '../../order-form-base/order-form-base.component.html',
  styleUrls: ['../../../../styles/editing.styles.css', '../../order-form-base/order-form-base.component.css']
})
export class ProyectoOrderFormComponent extends OrderFormBaseComponent<ProyectoRequestsService> implements OnInit {

  constructor(service: ProyectoRequestsService) {
    super(service);
  }
}
