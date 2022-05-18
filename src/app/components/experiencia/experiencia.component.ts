import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GlobalVariablesService } from 'src/app/services/global-variables.service';
import { ScreenSizeService } from 'src/app/services/screen-size.service';

import { BaseComponent } from '../base/base.component';
import { LoginService } from 'src/app/services/login.service';
import { ExperienciaRequestsService } from 'src/app/services/http-requests/experiencia-requests.service';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent extends BaseComponent implements OnInit {
  
  //Form añadir
  componentForm = new FormGroup({
    titulo: new FormControl("", [Validators.required, Validators.maxLength(60)]),
    descripcion: new FormControl("",[Validators.maxLength(250)]),
    lugar: new FormControl("",[Validators.maxLength(50)]),
    fechaInicio: new FormControl(null),
    fechaFin: new FormControl(null),
    isCurrent: new FormControl(false),
    personaId: new FormControl(this.service.personaId)
  })

  get titulo() { return this.componentForm.get('titulo'); }
  get descripcion() { return this.componentForm.get('descripcion'); }
  get lugar() { return this.componentForm.get('lugar'); }
  get fechaInicio() { return this.componentForm.get('fechaInicio'); }
  get fechaFin() { return this.componentForm.get('fechaFin'); }
  get isCurrent() { return this.componentForm.get('isCurrent'); }

  submitForm() {
    this.overlayOpen = false;
    this.service.postJSON(this.componentForm.value);
    this.componentForm.reset();
  }
  cancelForm(){
    this.overlayOpen = false;
    this.componentForm.reset();
  }
  
  //Constructor
  constructor(screenService: ScreenSizeService, global: GlobalVariablesService, public service: ExperienciaRequestsService, login: LoginService) {
    super(screenService, global, login);
  }
}