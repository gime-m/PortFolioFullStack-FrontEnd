import { Component, Input, OnInit } from '@angular/core';
import { PersonaRequestsService } from 'src/app/services/http-requests/persona-requests.service';
import { ImagenBaseFormComponent } from '../../imagen-base-form/imagen-base-form.component';

@Component({
  selector: 'app-image-form',
  templateUrl: '../../imagen-base-form/imagen-base-form.component.html',
  styleUrls: ['../../../../styles/editing.styles.css']
})
export class ImageFormComponent extends ImagenBaseFormComponent implements OnInit {
  
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
