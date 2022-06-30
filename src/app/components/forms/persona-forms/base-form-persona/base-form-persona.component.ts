import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PersonaRequestsService } from 'src/app/services/http-requests/persona-requests.service';
import { LoginService } from 'src/app/services/login.service';
import { ScreenSizeService } from 'src/app/services/screen-size.service';
import { BaseComponent } from '../../../base/base.component';

@Component({
  selector: 'app-base-form-persona',
  template: ''
})
export class BaseFormPersonaComponent extends BaseComponent implements OnInit {

  @Output() showModalEvent = new EventEmitter<boolean>();
  
  component: string
  componentForm = new FormGroup({})
  
  submitForm() {
    if (this.pers.persona) {
      this.pers.persona = Object.assign(this.pers.persona, this.componentForm.value)
    }
    this.pers.putJSON(this.component,this.componentForm.value); 
    this.showModalEvent.emit(false);
  }
  cancelForm(){
    //this.defaultForm();
    this.showModalEvent.emit(false);
  }

  /* defaultForm() {
    if (this.pers.persona) {
      this.componentForm.setValue(this.pers.persona);
    }
  }*/

  constructor(screenService: ScreenSizeService,login: LoginService, public pers: PersonaRequestsService, @Inject('component') component:string) {
    super(screenService, login);
    this.component = component;
  }
}