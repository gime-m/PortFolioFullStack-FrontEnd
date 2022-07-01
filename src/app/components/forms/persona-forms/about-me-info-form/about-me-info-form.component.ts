import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BaseFormPersonaComponent } from 'src/app/components/forms/persona-forms/base-form-persona/base-form-persona.component';
import { PersonaRequestsService } from 'src/app/services/http-requests/persona-requests.service';

@Component({
  selector: 'app-about-me-info-form',
  templateUrl: './about-me-info-form.component.html',
  styleUrls: ['../../../../styles/editing.styles.css']
})
export class AboutMeInfoFormComponent extends BaseFormPersonaComponent implements OnInit {

  override componentForm = new FormGroup({
    ubicacion: new FormControl(this.pers.persona?.ubicacion, [Validators.required, Validators.maxLength(60)]),
    lugarTrabajo: new FormControl(this.pers.persona?.lugarTrabajo, [Validators.required, Validators.maxLength(60)],),
    email: new FormControl(this.pers.persona?.email, [Validators.required, Validators.email, Validators.maxLength(60)], ),
    telefono: new FormControl(this.pers.persona?.telefono, [Validators.required, Validators.maxLength(25), Validators.pattern("^[+]?[0-9()-\\s]+$"),]),
    github: new FormControl(this.pers.persona?.github, [Validators.required, Validators.maxLength(60)]),
  })

  get ubicacion() { return this.componentForm.get('ubicacion'); }
  get lugarTrabajo() { return this.componentForm.get('lugarTrabajo');}
  get email() { return this.componentForm.get('email'); }
  get telefono() { return this.componentForm.get('telefono'); }
  get github() { return this.componentForm.get('github');}

  constructor(pers: PersonaRequestsService) {
    super(pers, "datos");
  }
}
