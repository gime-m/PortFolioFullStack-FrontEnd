import { Component,  OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BaseFormPersonaComponent } from 'src/app/components/forms/persona-forms/base-form-persona/base-form-persona.component';
import { PersonaRequestsService } from 'src/app/services/http-requests/persona-requests.service';

@Component({
  selector: 'app-persona-nombre-form',
  templateUrl: './persona-nombre-form.component.html',
  styleUrls: ['../../../../styles/editing.styles.css']
})
export class PersonaNombreFormComponent extends BaseFormPersonaComponent implements OnInit {
  
  override componentForm = new FormGroup({
    nombre: new FormControl(this.pers.persona?.nombre, [Validators.required, Validators.maxLength(25) ]),
    apellido: new FormControl(this.pers.persona?.apellido, [Validators.required, Validators.maxLength(25)]),
    ocupacion: new FormControl(this.pers.persona?.ocupacion, [Validators.required, Validators.maxLength(60)]),
  })

  get nombre() { return this.componentForm.get('nombre'); }
  get apellido() { return this.componentForm.get('apellido');}
  get ocupacion() { return this.componentForm.get('ocupacion'); }
  
  constructor(pers: PersonaRequestsService) {
    super(pers, "nombre");
  }

}
