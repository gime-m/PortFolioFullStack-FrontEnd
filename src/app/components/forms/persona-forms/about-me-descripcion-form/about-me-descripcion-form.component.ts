import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BaseFormPersonaComponent } from 'src/app/components/forms/persona-forms/base-form-persona/base-form-persona.component';
import { PersonaRequestsService } from 'src/app/services/http-requests/persona-requests.service';
import { LoginService } from 'src/app/services/login.service';
import { ScreenSizeService } from 'src/app/services/screen-size.service';

@Component({
  selector: 'app-about-me-descripcion-form',
  templateUrl: './about-me-descripcion-form.component.html',
  styleUrls: ['../../../../styles/editing.styles.css']
})
export class AboutMeDescripcionFormComponent extends BaseFormPersonaComponent implements OnInit {

  override componentForm = new FormGroup({
    descripcion: new FormControl(this.pers.persona?.descripcion, [Validators.required, Validators.maxLength(600)])
  })

  get descripcion() { return this.componentForm.get('descripcion'); }

  constructor(screenService: ScreenSizeService,login: LoginService, pers: PersonaRequestsService) {
    super(screenService, login, pers, "desc");
  }

}
