import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ExperienciaRequestsService } from 'src/app/services/http-requests/experiencia-requests.service';
import { LoginService } from 'src/app/services/login.service';
import { ExpItem } from 'src/app/services/model-interfaces';
import { ScreenSizeService } from 'src/app/services/screen-size.service';
import { BaseFormItemComponent } from '../../base/base-form-item/base-form-item.component';

@Component({
  selector: 'app-experiencia-form',
  templateUrl: './experiencia-form.component.html',
  styleUrls: ['../../../styles/editing.styles.css']
})
export class ExperienciaFormComponent extends BaseFormItemComponent<ExpItem, ExperienciaRequestsService> implements OnInit {
  
  override makeComponentForm(){
    if (this.isNewItem){
      this.componentForm = new FormGroup({
        titulo: new FormControl("", [Validators.required, Validators.maxLength(100)]),
        lugar: new FormControl("",[Validators.maxLength(60)]),
        descripcion: new FormControl("",[Validators.maxLength(250)]),
        fechaInicio: new FormControl(null),
        fechaFin: new FormControl(null),
        isCurrent: new FormControl(false),
        personaId: new FormControl(this.service.personaId),
        imagen:  new FormControl("")
      })
    } else {
      this.componentForm = new FormGroup({
        id: new FormControl(this.object?.id),
        titulo: new FormControl(this.object?.titulo, [Validators.required, Validators.maxLength(100)]),
        lugar: new FormControl(this.object?.lugar,[Validators.maxLength(60)]),
        descripcion: new FormControl(this.object?.descripcion,[Validators.maxLength(250)]),
        fechaInicio: new FormControl(null),
        fechaFin: new FormControl(null),
        isCurrent: new FormControl(this.object?.isCurrent),
        personaId: new FormControl(this.object?.personaId),
        imagen:  new FormControl(this.object?.imagen)
      })
    }
  }

  get titulo() { return this.componentForm.get('titulo'); }
  get lugar() { return this.componentForm.get('lugar'); }
  get descripcion() { return this.componentForm.get('descripcion'); }
  get fechaInicio() { return this.componentForm.get('fechaInicio'); }
  get fechaFin() { return this.componentForm.get('fechaFin'); }
  get isCurrent() { return this.componentForm.get('isCurrent'); }

  constructor(screenService: ScreenSizeService, service: ExperienciaRequestsService, login: LoginService) {
    super(service, screenService, login);
  }
}
