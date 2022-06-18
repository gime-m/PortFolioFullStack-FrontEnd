import { Component, OnInit } from '@angular/core';
import { ExperienciaRequestsService } from 'src/app/services/http-requests/experiencia-requests.service';
import { LoginService } from 'src/app/services/login.service';
import { ScreenSizeService } from 'src/app/services/screen-size.service';
import { ImagenItemFormComponent } from '../../base/imagen-item-form/imagen-item-form.component';

@Component({
  selector: 'app-experiencia-imagen-form',
  templateUrl: '../../base/imagen-item-form/imagen-item-form.component.html',
  styleUrls: ['../../../styles/editing.styles.css']
})
export class ExperienciaImagenFormComponent extends ImagenItemFormComponent<ExperienciaRequestsService> implements OnInit {

  constructor(service: ExperienciaRequestsService, screenService: ScreenSizeService, login: LoginService) {
    super(service, screenService, login);
  }
}
