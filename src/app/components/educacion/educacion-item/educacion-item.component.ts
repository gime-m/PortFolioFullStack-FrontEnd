import { Component, OnInit } from '@angular/core';
import { EducacionRequestsService } from 'src/app/services/http-requests/educacion-requests.service';
import { LoginService } from 'src/app/services/login.service';
import { EducItem } from 'src/app/services/model-interfaces';
import { BaseItemComponent } from '../../base-item/base-item.component';

@Component({
  selector: 'app-educacion-item',
  templateUrl: './educacion-item.component.html',
  styleUrls: ['../../../styles/item.styles.css']
})
export class EducacionItemComponent extends BaseItemComponent<EducItem,EducacionRequestsService> implements OnInit {
  
  constructor(service: EducacionRequestsService, login: LoginService) {
    super(service, login);
  }
}


