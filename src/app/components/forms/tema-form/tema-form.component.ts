import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PersonaRequestsService } from 'src/app/services/http-requests/persona-requests.service';
import { LoginService } from 'src/app/services/login.service';
import { ScreenSizeService } from 'src/app/services/screen-size.service';
import { TemaService } from 'src/app/services/tema.service';
import { BaseComponent } from '../../base/base.component';

@Component({
  selector: 'app-tema-form',
  templateUrl: './tema-form.component.html',
  styleUrls: ['../../../styles/editing.styles.css', './tema-form.component.css']
})
export class TemaFormComponent extends BaseComponent implements OnInit {

  @Output() showModalEvent = new EventEmitter<boolean>();

  temaSeleccionado?: number = this.persServ.persona?.temaId;
  
  componentForm = new FormGroup({
    
  })
  
  submitForm() {
    if (this.persServ.persona?.temaId && this.temaSeleccionado) {
      this.persServ.persona.temaId = this.temaSeleccionado;
      this.temaServ.putJSON(this.temaSeleccionado);
    }
    this.showModalEvent.emit(false);
  }
  
  cancelForm(){
    this.showModalEvent.emit(false);
  }

  constructor(screenService: ScreenSizeService,login: LoginService, public temaServ: TemaService, public persServ: PersonaRequestsService) {
    super(screenService, login);
  }
}