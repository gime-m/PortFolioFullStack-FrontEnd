import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProyectoRequestsService } from 'src/app/services/http-requests/proyecto-requests.service';
import { LoginService } from 'src/app/services/login.service';
import { ProyectoItem } from 'src/app/services/model-interfaces';
import { ScreenSizeService } from 'src/app/services/screen-size.service';
import { BaseFormItemComponent } from '../../base/base-form-item/base-form-item.component';

@Component({
  selector: 'app-proyecto-form',
  templateUrl: './proyecto-form.component.html',
  styleUrls: ['../../../styles/editing.styles.css']
})
export class ProyectoFormComponent extends BaseFormItemComponent<ProyectoItem, ProyectoRequestsService> implements OnInit {
  
  override makeComponentForm(){
    if (this.isNewItem){
      this.componentForm = new FormGroup({
        titulo: new FormControl("", [Validators.required, Validators.maxLength(45)]),
        descripcion: new FormControl("",[Validators.maxLength(250)]),
        fecha: new FormControl(null),
        link: new FormControl(""),
        personaId: new FormControl(this.service.personaId),
        imagen: new FormControl(this.object?.imagen)
      })
    } else {
      this.componentForm = new FormGroup({
        id: new FormControl(this.object?.id),
        titulo: new FormControl(this.object?.titulo, [Validators.required, Validators.maxLength(45)]),
        descripcion: new FormControl(this.object?.descripcion,[Validators.maxLength(250)]),
        fecha: new FormControl(this.object?.fecha),
        link: new FormControl(this.object?.link, [Validators.maxLength(60)]),
        personaId: new FormControl(this.object?.personaId),
        imagen: new FormControl(this.object?.imagen)
      })
    }
  }

  get titulo() { return this.componentForm.get('titulo'); }
  get descripcion() { return this.componentForm.get('descripcion'); }
  get fecha() { return this.componentForm.get('fecha'); }
  get link() { return this.componentForm.get('link'); }

  constructor(screenService: ScreenSizeService, service: ProyectoRequestsService, login: LoginService) {
    super(service, screenService, login);
  }
}