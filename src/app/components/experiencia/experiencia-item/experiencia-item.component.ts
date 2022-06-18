import { Component, OnInit } from '@angular/core';
import { ScreenSizeService } from 'src/app/services/screen-size.service';
import { LoginService } from 'src/app/services/login.service';
import { ExperienciaRequestsService } from 'src/app/services/http-requests/experiencia-requests.service';
import { ExpItem } from 'src/app/services/model-interfaces';
import { BaseItemComponent } from '../../base/base-item/base-item.component';

@Component({
  selector: 'app-experiencia-item',
  templateUrl: './experiencia-item.component.html',
  styleUrls: ['../../../styles/item.styles.css']
})
export class ExperienciaItemComponent extends BaseItemComponent<ExpItem,ExperienciaRequestsService> implements OnInit {

  constructor(service: ExperienciaRequestsService, screenService: ScreenSizeService, login: LoginService) {
    super(service, screenService, login);
  }
}
