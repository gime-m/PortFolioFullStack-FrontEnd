import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProyectoRequestsService } from 'src/app/services/http-requests/proyecto-requests.service';
import { ProyectoItem } from 'src/app/services/model-interfaces';
import { BaseFormItemComponent } from '../../base-form-item/base-form-item.component';

@Component({
  selector: 'app-proyecto-form',
  templateUrl: './proyecto-form.component.html',
  styleUrls: ['../../../../styles/editing.styles.css']
})
export class ProyectoFormComponent extends BaseFormItemComponent<ProyectoItem, ProyectoRequestsService> implements OnInit {
  
  override makeComponentForm(){
    if (this.isNewItem){
      this.componentForm = new FormGroup({
        titulo: new FormControl("", [Validators.required, Validators.maxLength(45)]),
        descripcion: new FormControl("",[Validators.maxLength(500)]),
        fecha: new FormControl(null),
        link: new FormControl("", [Validators.maxLength(150), Validators.pattern("^(https|http):\/{2}.*$")]),
        personaId: new FormControl(this.service.gv.personaId),
        imagen: new FormControl(this.object?.imagen),
        displayOrder: new FormControl(this.newDisplayOrder())
      })
    } else {
      this.componentForm = new FormGroup({
        id: new FormControl(this.object?.id),
        titulo: new FormControl(this.object?.titulo, [Validators.required, Validators.maxLength(45)]),
        descripcion: new FormControl(this.object?.descripcion,[Validators.maxLength(300)]),
        fecha: new FormControl(this.object?.fecha),
        link: new FormControl(this.object?.link, [Validators.maxLength(150), Validators.pattern("^(https|http):\/{2}.*$")]),
        personaId: new FormControl(this.object?.personaId),
        imagen: new FormControl(this.object?.imagen),
        displayOrder: new FormControl(this.object?.displayOrder)
      })
    }
  }

  get titulo() { return this.componentForm.get('titulo'); }
  get descripcion() { return this.componentForm.get('descripcion'); }
  get fecha() { return this.componentForm.get('fecha'); }
  get link() { return this.componentForm.get('link'); }

  constructor(service: ProyectoRequestsService) {
    super(service);
  }
}