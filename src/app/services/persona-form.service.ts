import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {PersonaRequestsService} from './http-requests/persona-requests.service';

@Injectable({
  providedIn: 'root'
})
export class PersonaFormService {
  
  //Form
  componentForm = new FormGroup({
    id: new FormControl (this.pers.persona?.id),
    nombre: new FormControl(this.pers.persona?.nombre, [Validators.required, Validators.maxLength(25) ]),
    apellido: new FormControl(this.pers.persona?.apellido, [Validators.required, Validators.maxLength(25)]),
    ocupacion: new FormControl(this.pers.persona?.ocupacion, [Validators.required, Validators.maxLength(60)]),
    descripcion: new FormControl(this.pers.persona?.descripcion, [Validators.required, Validators.maxLength(600)]),
    ubicacion: new FormControl(this.pers.persona?.ubicacion, [Validators.required, Validators.maxLength(60)]),
    lugarTrabajo: new FormControl(this.pers.persona?.lugarTrabajo, [Validators.required, Validators.maxLength(60)],),
    email: new FormControl(this.pers.persona?.email, [Validators.required, Validators.email, Validators.maxLength(60)], ),
    telefono: new FormControl(this.pers.persona?.telefono, [Validators.required, Validators.maxLength(25), Validators.pattern("^[+]?[0-9()-\\s]+$"),]),
    imagenPerfil: new FormControl(this.pers.persona?.imagenPerfil),
    banner: new FormControl(this.pers.persona?.banner),
    github: new FormControl(this.pers.persona?.github, [Validators.required, Validators.maxLength(60)]),
  })

  //Form getter
  get nombre() { return this.componentForm.get('nombre'); }
  get apellido() { return this.componentForm.get('apellido');}
  get ocupacion() { return this.componentForm.get('ocupacion'); }
  get descripcion() { return this.componentForm.get('descripcion'); }
  get ubicacion() { return this.componentForm.get('ubicacion'); }
  get lugarTrabajo() { return this.componentForm.get('lugarTrabajo'); }
  get email() { return this.componentForm.get('email'); }
  get telefono() { return this.componentForm.get('telefono'); }
  get github() { return this.componentForm.get('github'); }
  
  //Form methods
  default() {
    if (this.pers.persona != undefined) {
      this.componentForm.setValue(this.pers.persona);
    } else {
      console.error("Persona no válida");
    }
  }
  submit() {
    if (this.pers.persona != undefined) {
      this.pers.persona=this.componentForm.value
    }
    this.pers.putJSON(); 
  }


  //Constructor
  constructor(public pers: PersonaRequestsService) {
  }
}
