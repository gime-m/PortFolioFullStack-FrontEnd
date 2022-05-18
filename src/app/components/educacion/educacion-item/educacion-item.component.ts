import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GlobalVariablesService } from 'src/app/services/global-variables.service';
import { ScreenSizeService } from 'src/app/services/screen-size.service';
import { BaseComponent } from '../../base/base.component';
import { LoginService } from 'src/app/services/login.service';
import { EducacionRequestsService } from 'src/app/services/http-requests/educacion-requests.service';
import { EducItem } from 'src/app/services/http-requests/model-interfaces';

@Component({
  selector: 'app-educacion-item',
  templateUrl: './educacion-item.component.html',
  styleUrls: ['./educacion-item.component.css']
})
export class EducacionItemComponent extends BaseComponent implements OnInit {

  @Input() educObject?: EducItem;
  datepipe: any;

  componentForm = new FormGroup({
    id: new FormControl(this.educObject?.id),
    titulo: new FormControl(this.educObject?.titulo, [Validators.required, Validators.maxLength(100)]),
    institucion: new FormControl(this.educObject?.institucion,[Validators.maxLength(60)]),
    descripcion: new FormControl(this.educObject?.descripcion,[Validators.maxLength(250)]),
    fechaInicio: new FormControl(null),
    fechaFin: new FormControl(null),
    isCurrent: new FormControl(this.educObject?.isCurrent),
    personaId: new FormControl(this.educObject?.personaId)
  })

  get titulo() { return this.componentForm.get('titulo'); }
  get institucion() { return this.componentForm.get('institucion'); }
  get descripcion() { return this.componentForm.get('descripcion'); }
  get fechaInicio() { return this.componentForm.get('fechaInicio'); }
  get fechaFin() { return this.componentForm.get('fechaFin'); }
  get isCurrent() { return this.componentForm.get('isCurrent'); }

  submitForm() {
    this.overlayOpen = false;
    this.service.putJSON(this.componentForm.value);
  }

  cancelForm(){
    this.overlayOpen = false;
    this.setFormDefault();
  }

  setFormDefault(){
    if (this.educObject != undefined){
      this.componentForm.setValue(this.educObject);
    } else {
      console.error("Error: Item de educacion indefinido");
    }
  }

  deleteCard(){
    if (this.educObject != undefined){
      this.service.deleteJSON(this.educObject?.id); 
    } else {
      console.error("Error en solicitud DELETE: objeto indefinido");
    }
  }
  
  constructor(screenService: ScreenSizeService, global: GlobalVariablesService, public service: EducacionRequestsService, login: LoginService) {
    super(screenService, global,login);
  }

  override ngOnInit(): void {
    this.setFormDefault()
  }

}


