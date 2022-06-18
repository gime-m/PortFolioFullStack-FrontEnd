import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PersonaRequestsService } from 'src/app/services/http-requests/persona-requests.service';
import { LoginService } from 'src/app/services/login.service';
import { PersonaFormService } from 'src/app/services/persona-form.service';
import { ScreenSizeService } from 'src/app/services/screen-size.service';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'app-base-form-persona',
  templateUrl: './base-form-persona.component.html',
  styleUrls: ['../../../styles/editing.styles.css']
})
export class BaseFormPersonaComponent extends BaseComponent implements OnInit {

  @Input() componente: string = "";
  @Input() titulo: string = "";
  @Output() overlayOpenEvent = new EventEmitter<boolean>();

  submitForm() {
    this.form.submit();
    this.overlayOpenEvent.emit(false);
  }
  cancelForm(){
    this.form.default();
    this.overlayOpenEvent.emit(false);
  }

  //Constructor
  constructor(screenService: ScreenSizeService,login: LoginService, public pers: PersonaRequestsService, public form: PersonaFormService) {
    super(screenService, login);
  }
}