import { Component, OnInit } from '@angular/core';
import { PersonaRequestsService } from 'src/app/services/http-requests/persona-requests.service';
import { TemaRequestsService } from 'src/app/services/http-requests/tema-requests.service';
import { ImageFormComponent } from '../persona-forms/image-form/image-form.component';

@Component({
  selector: 'app-tema-form',
  templateUrl: './tema-form.component.html',
  styleUrls: ['../../../styles/editing.styles.css', './tema-form.component.css']
})
export class TemaFormComponent extends ImageFormComponent implements OnInit {

  temaSeleccionado?: number = this.pers.persona?.temaId;
  
  override submitForm() {
    if (this.pers.persona?.temaId && this.temaSeleccionado && this.temaSeleccionado !=this.pers.persona?.temaId ) {
      this.pers.persona.temaId = this.temaSeleccionado;
      this.temaServ.putTema(this.temaSeleccionado);
    }
    if (this.componentForm.dirty){
      this.pers.putImagen(this.fileSource?.value,this.propiedad)
      this.componentForm.reset()
    }
    this.showModalEvent.emit(false)
  }

  constructor(pers: PersonaRequestsService,  public temaServ: TemaRequestsService) {
    super(pers);
    this.imagen?.setValidators([]);
    this.temaServ.getTemasLista();
  }
}