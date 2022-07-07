import { Component, Input, OnInit } from '@angular/core';
import { PersonaRequestsService } from 'src/app/services/http-requests/persona-requests.service';
import { BaseFormImagenComponent } from '../../base-form-imagen/base-form-imagen.component';

@Component({
  selector: 'app-image-form',
  templateUrl: '../../base-form-imagen/base-form-imagen.component.html',
  styleUrls: ['../../../../styles/editing.styles.css']
})
export class ImageFormComponent extends BaseFormImagenComponent implements OnInit {
  
  @Input() propiedad: string = "";

  override submitForm() {
    this.pers.putImagen(this.fileSource?.value,this.propiedad)
    super.submitForm();
  }

  override imagenPorDefecto(){
    this.pers.deleteImagen(this.propiedad);
    super.imagenPorDefecto();

  }
  
  constructor(public pers: PersonaRequestsService) {
    super();
  }
}
