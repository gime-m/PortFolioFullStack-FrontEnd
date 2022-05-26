import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ScreenSizeService } from 'src/app/services/screen-size.service';
import { BaseComponent } from '../../base/base.component';
import { LoginService } from 'src/app/services/login.service';
import { ExperienciaRequestsService } from 'src/app/services/http-requests/experiencia-requests.service';
import { ExpItem } from 'src/app/services/model-interfaces';

@Component({
  selector: 'app-experiencia-item',
  templateUrl: './experiencia-item.component.html',
  styleUrls: ['./experiencia-item.component.css']
})
export class ExperienciaItemComponent extends BaseComponent implements OnInit {

  @Input() expObject?: ExpItem;
  datepipe: any;

  componentForm = new FormGroup({
    titulo: new FormControl(this.expObject?.titulo, [Validators.required, Validators.maxLength(60)]),
    descripcion: new FormControl(this.expObject?.descripcion,[Validators.maxLength(250)]),
    lugar: new FormControl(this.expObject?.lugar,[Validators.maxLength(50)]),
    fechaInicio: new FormControl(null),
    fechaFin: new FormControl(null),
    isCurrent: new FormControl(this.expObject?.isCurrent)
  })

  get titulo() { return this.componentForm.get('titulo'); }
  get descripcion() { return this.componentForm.get('descripcion'); }
  get lugar() { return this.componentForm.get('lugar'); }
  get fechaInicio() { return this.componentForm.get('fechaInicio'); }
  get fechaFin() { return this.componentForm.get('fechaFin'); }
  get isCurrent() { return this.componentForm.get('isCurrent'); }

  submitForm() {
    this.overlayOpen = false;
    let putObj: ExpItem = Object.assign(this.expObject, this.componentForm.value);
    this.service.putJSON(putObj);    
  }

  cancelForm(){
    this.overlayOpen = false;
    this.setFormDefault();
  }

  setFormDefault(){
    if (this.expObject != undefined){
      this.componentForm.patchValue(this.expObject);
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
 
  constructor(screenService: ScreenSizeService, public service: ExperienciaRequestsService, login: LoginService) {
    super(screenService, login);
  }

  override ngOnInit(): void {
    this.setFormDefault();
  }

}
