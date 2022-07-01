import { Component, OnInit } from '@angular/core';
import { PersonaRequestsService } from 'src/app/services/http-requests/persona-requests.service';
import { LoginService } from 'src/app/services/login.service';
import { ScreenSizeService } from 'src/app/services/screen-size.service';
import { TemaService } from 'src/app/services/http-requests/tema.service';
import { ImageFormComponent } from '../persona-forms/image-form/image-form.component';

@Component({
  selector: 'app-tema-form',
  templateUrl: './tema-form.component.html',
  styleUrls: ['../../../styles/editing.styles.css', './tema-form.component.css']
})
export class TemaFormComponent extends ImageFormComponent implements OnInit {

  temaSeleccionado?: number = this.pers.persona?.temaId;
  
  override submitForm() {
    if (this.pers.persona?.temaId && this.temaSeleccionado) {
      this.pers.persona.temaId = this.temaSeleccionado;
      this.temaServ.putTema(this.temaSeleccionado);
    }
    super.submitForm();
  }

  constructor(screenService: ScreenSizeService,login: LoginService, pers: PersonaRequestsService,  public temaServ: TemaService) {
    super(screenService, login, pers);
  }
}