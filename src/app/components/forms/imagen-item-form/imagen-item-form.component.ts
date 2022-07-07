import { Component, Inject, Input, OnInit} from '@angular/core';
import { EducacionRequestsService } from 'src/app/services/http-requests/educacion-requests.service';
import { ExperienciaRequestsService } from 'src/app/services/http-requests/experiencia-requests.service';
import { ProyectoRequestsService } from 'src/app/services/http-requests/proyecto-requests.service';
import { ImagenBaseFormComponent } from '../imagen-base-form/imagen-base-form.component';

@Component({
  selector: 'app-item-imagen-form',
  templateUrl: '../imagen-base-form/imagen-base-form.component.html',
  styleUrls: ['../../../styles/editing.styles.css']
})
export class ImagenItemFormComponent<T extends ExperienciaRequestsService|EducacionRequestsService|ProyectoRequestsService> extends ImagenBaseFormComponent implements OnInit {

  @Input()   id: number = 0;

  override submitForm() {
    this.service.putImagen(this.fileSource?.value, this.id);
    super.submitForm();
  }
  override imagenPorDefecto(){
    this.service.deleteImagen(this.id);
    super.imagenPorDefecto();
  }
  
  constructor(@Inject('service') public service: T) {
    super();
  }
}