import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GlobalVariablesService } from 'src/app/services/global-variables.service';
import { ScreenSizeService } from 'src/app/services/screen-size.service';
import { BaseComponent } from '../base/base.component';
import { LoginService } from 'src/app/services/login.service';
import { EducacionRequestsService } from 'src/app/services/http-requests/educacion-requests.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent extends BaseComponent implements OnInit {
  
  //Form añadir
  componentForm = new FormGroup({
    titulo: new FormControl("", [Validators.required, Validators.maxLength(100)]),
    institucion: new FormControl("",[Validators.maxLength(60)]),
    descripcion: new FormControl("",[Validators.maxLength(250)]),
    fechaInicio: new FormControl(null),
    fechaFin: new FormControl(null),
    isCurrent: new FormControl(false),
    personaId: new FormControl(this.service.personaId)
  })

  get titulo() { return this.componentForm.get('titulo'); }
  get institucion() { return this.componentForm.get('institucion'); }
  get descripcion() { return this.componentForm.get('descripcion'); }
  get fechaInicio() { return this.componentForm.get('fechaInicio'); }
  get fechaFin() { return this.componentForm.get('fechaFin'); }
  get isCurrent() { return this.componentForm.get('isCurent'); }

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
  constructor(screenService: ScreenSizeService, global: GlobalVariablesService, public service: EducacionRequestsService, login: LoginService) {
    super(screenService, global, login);
  }

}