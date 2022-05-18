import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GlobalVariablesService } from 'src/app/services/global-variables.service';
import { ScreenSizeService } from 'src/app/services/screen-size.service';
import { BaseComponent } from '../../base/base.component';
import { LoginService } from 'src/app/services/login.service';
import { ExperienciaRequestsService } from 'src/app/services/http-requests/experiencia-requests.service';
import { ExpItem } from 'src/app/services/http-requests/model-interfaces';

@Component({
  selector: 'app-experiencia-item',
  templateUrl: './experiencia-item.component.html',
  styleUrls: ['./experiencia-item.component.css']
})
export class ExperienciaItemComponent extends BaseComponent implements OnInit {

  @Input() expObject?: ExpItem;
  datepipe: any;

  componentForm = new FormGroup({
    id: new FormControl(this.expObject?.id),
    titulo: new FormControl(this.expObject?.titulo, [Validators.required, Validators.maxLength(60)]),
    descripcion: new FormControl(this.expObject?.descripcion,[Validators.maxLength(250)]),
    lugar: new FormControl(this.expObject?.lugar,[Validators.maxLength(50)]),
    fechaInicio: new FormControl(null),
    fechaFin: new FormControl(null),
    isCurrent: new FormControl(this.expObject?.isCurrent),
    personaId: new FormControl (this.expObject?.personaId)
  })

  get id() { return this.componentForm.get('id');}
  get titulo() { return this.componentForm.get('titulo'); }
  get descripcion() { return this.componentForm.get('descripcion'); }
  get lugar() { return this.componentForm.get('lugar'); }
  get fechaInicio() { return this.componentForm.get('fechaInicio'); }
  get fechaFin() { return this.componentForm.get('fechaFin'); }
  get isCurrent() { return this.componentForm.get('isCurrent'); }
  get personaId() { return this.componentForm.get('personaId');}

  submitForm() {
    this.overlayOpen = false;
    this.service.putJSON(this.componentForm.value);
  }

  cancelForm(){
    this.overlayOpen = false;
    this.setFormDefault();
  }

  setFormDefault(){
    if (this.expObject != undefined){
      this.componentForm.setValue(this.expObject);
    } else {
      console.error("Error: Item de experiencia indefinido");
    }
  }

  deleteCard(){
    if (this.expObject != undefined){
      this.service.deleteJSON(this.expObject?.id); 
    } else {
      console.error("Error en solicitud DELETE: objeto indefinido");
    }
  }
 
  constructor(screenService: ScreenSizeService, global: GlobalVariablesService, public service: ExperienciaRequestsService, login: LoginService) {
    super(screenService, global, login);
  }

  override ngOnInit(): void {
    this.setFormDefault();
  }

}
