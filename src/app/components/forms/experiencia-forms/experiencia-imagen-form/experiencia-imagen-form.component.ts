import { Component, OnInit } from '@angular/core';
import { ExperienciaRequestsService } from 'src/app/services/http-requests/experiencia-requests.service';
import { ImagenItemFormComponent } from '../../imagen-item-form/imagen-item-form.component';

@Component({
  selector: 'app-experiencia-imagen-form',
  templateUrl: '../../base-form-imagen/base-form-imagen.component.html',
  styleUrls: ['../../../../styles/editing.styles.css']
})
export class ExperienciaImagenFormComponent extends ImagenItemFormComponent<ExperienciaRequestsService> implements OnInit {

  constructor(service: ExperienciaRequestsService, ) {
    super(service);
  }
}
