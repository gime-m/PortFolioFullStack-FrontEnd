import { Component, OnInit } from '@angular/core';
import { EducacionRequestsService } from 'src/app/services/http-requests/educacion-requests.service';
import { OrderFormBaseComponent } from '../../order-form-base/order-form-base.component';

@Component({
  selector: 'app-educacion-order-form',
  templateUrl: '../../order-form-base/order-form-base.component.html',
  styleUrls: ['../../../../styles/editing.styles.css', '../../order-form-base/order-form-base.component.css']
})
export class EducacionOrderFormComponent extends OrderFormBaseComponent<EducacionRequestsService> implements OnInit {

  constructor(service: EducacionRequestsService) {
    super(service);
  }
}
