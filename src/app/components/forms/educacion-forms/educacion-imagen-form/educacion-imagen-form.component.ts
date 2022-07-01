import { Component, OnInit } from '@angular/core';
import { EducacionRequestsService } from 'src/app/services/http-requests/educacion-requests.service';
import { ImagenItemFormComponent } from '../../imagen-item-form/imagen-item-form.component';

@Component({
  selector: 'app-educacion-imagen-form',
  templateUrl: '../../imagen-item-form/imagen-item-form.component.html',
  styleUrls: ['../../../../styles/editing.styles.css']
})
export class EducacionImagenFormComponent extends ImagenItemFormComponent<EducacionRequestsService> implements OnInit {

  constructor(service: EducacionRequestsService) {
    super(service);
  }
}

