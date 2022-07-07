import { Directive, Inject, Input, OnInit} from '@angular/core';
import { EducacionRequestsService } from 'src/app/services/http-requests/educacion-requests.service';
import { ExperienciaRequestsService } from 'src/app/services/http-requests/experiencia-requests.service';
import { ProyectoRequestsService } from 'src/app/services/http-requests/proyecto-requests.service';
import { BaseFormImagenComponent } from '../base-form-imagen/base-form-imagen.component';

@Directive()
export abstract class ImagenItemFormComponent<T extends ExperienciaRequestsService|EducacionRequestsService|ProyectoRequestsService> extends BaseFormImagenComponent implements OnInit {

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