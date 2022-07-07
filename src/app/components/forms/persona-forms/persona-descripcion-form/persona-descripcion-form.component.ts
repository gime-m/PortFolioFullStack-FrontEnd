import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BaseFormPersonaComponent } from 'src/app/components/forms/persona-forms/base-form-persona/base-form-persona.component';
import { PersonaRequestsService } from 'src/app/services/http-requests/persona-requests.service';

@Component({
  selector: 'app-persona-descripcion-form',
  templateUrl: './persona-descripcion-form.component.html',
  styleUrls: ['../../../../styles/editing.styles.css']
})
export class PersonaDescripcionFormComponent extends BaseFormPersonaComponent implements OnInit {

  override componentForm = new FormGroup({
    descripcion: new FormControl(this.pers.persona?.descripcion, [Validators.required, Validators.maxLength(600)])
  })

  get descripcion() { return this.componentForm.get('descripcion'); }

  constructor(pers: PersonaRequestsService) {
    super(pers, "desc");
  }

}
