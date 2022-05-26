import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SkillRequestsService } from 'src/app/services/http-requests/skill-requests.service';
import { LoginService } from 'src/app/services/login.service';
import { ScreenSizeService } from 'src/app/services/screen-size.service';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent extends BaseComponent implements OnInit{

  //Form añadir
  componentForm = new FormGroup({
    titulo: new FormControl("", [Validators.required, Validators.maxLength(25)]),
    descripcion: new FormControl("",[Validators.maxLength(150)]),
    valor: new FormControl(0,[Validators.max(100), Validators.min(0), Validators.required]),
    etiqueta: new FormControl("", [Validators.maxLength(25)]),
    personaId: new FormControl (this.service.personaId)
  })

  get titulo() { return this.componentForm.get('titulo'); }
  get descripcion() { return this.componentForm.get('descripcion'); }
  get valor() { return this.componentForm.get('valor'); }
  get etiqueta() { return this.componentForm.get('etiqueta'); }

  submitForm() {
    this.overlayOpen = false;
    this.service.postJSON(this.componentForm.value);
    this.componentForm.reset();
  }
  cancelForm(){
    this.overlayOpen = false;
    this.componentForm.reset();
  }
  
  constructor(screenService: ScreenSizeService, public service: SkillRequestsService, login: LoginService) {
    super(screenService, login);
  }

}
