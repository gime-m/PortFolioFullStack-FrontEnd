import { Component, OnInit } from '@angular/core';
import { ProyectoRequestsService } from 'src/app/services/http-requests/proyecto-requests.service';
import { ImagenItemFormComponent } from '../../imagen-item-form/imagen-item-form.component';

@Component({
  selector: 'app-proyecto-imagen-form',
  templateUrl: '../../imagen-item-form/imagen-item-form.component.html',
  styleUrls: ['../../../../styles/editing.styles.css']
})
export class ProyectoImagenFormComponent extends ImagenItemFormComponent<ProyectoRequestsService> implements OnInit {

  constructor(service: ProyectoRequestsService) {
    super(service);
  }
}

