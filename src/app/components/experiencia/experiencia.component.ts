import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ScreenSizeService } from 'src/app/services/screen-size.service';
import { BaseComponent } from '../base/base.component';
import { LoginService } from 'src/app/services/login.service';
import { ExperienciaRequestsService } from 'src/app/services/http-requests/experiencia-requests.service';
import { ExpItemPost } from 'src/app/services/model-interfaces';


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
  })

  get titulo() { return this.componentForm.get('titulo'); }
  get descripcion() { return this.componentForm.get('descripcion'); }
  get lugar() { return this.componentForm.get('lugar'); }
  get fechaInicio() { return this.componentForm.get('fechaInicio'); }
  get fechaFin() { return this.componentForm.get('fechaFin'); }
  get isCurrent() { return this.componentForm.get('isCurrent'); }

  submitForm() {
    this.overlayOpen = false;
    let postObj: ExpItemPost = this.componentForm.value
    postObj.personaId = this.service.personaId
    this.service.postJSON(postObj);
    this.componentForm.reset();
  }
  cancelForm(){
    this.overlayOpen = false;
    this.componentForm.reset();
  }
  
  //Constructor
  constructor(screenService: ScreenSizeService, public service: ExperienciaRequestsService, login: LoginService) {
    super(screenService, login);
  }
}