import { Component, OnInit } from '@angular/core';
import { ScreenSizeService } from 'src/app/services/screen-size.service';
import { LoginService } from 'src/app/services/login.service';
import { EducacionRequestsService } from 'src/app/services/http-requests/educacion-requests.service';
import { EducItem } from 'src/app/services/model-interfaces';
import { BaseItemComponent } from '../../base/base-item/base-item.component';

@Component({
  selector: 'app-educacion-item',
  templateUrl: './educacion-item.component.html',
  styleUrls: ['../../../styles/item.styles.css']
})
export class EducacionItemComponent extends BaseItemComponent<EducItem,EducacionRequestsService> implements OnInit {
  
  constructor(service: EducacionRequestsService, screenService: ScreenSizeService, login: LoginService) {
    super(service, screenService, login);
  }
}


