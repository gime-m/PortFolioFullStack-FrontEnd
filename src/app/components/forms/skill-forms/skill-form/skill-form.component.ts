import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SkillRequestsService } from 'src/app/services/http-requests/skill-requests.service';
import { LoginService } from 'src/app/services/login.service';
import { SkillItem } from 'src/app/services/model-interfaces';
import { ScreenSizeService } from 'src/app/services/screen-size.service';
import { BaseFormItemComponent } from '../../base-form-item/base-form-item.component';

@Component({
  selector: 'app-skill-form',
  templateUrl: './skill-form.component.html',
  styleUrls: ['../../../../styles/editing.styles.css']
})
export class SkillFormComponent extends BaseFormItemComponent<SkillItem, SkillRequestsService> implements OnInit {
  
  override makeComponentForm(){
    if (this.isNewItem){
      this.componentForm = new FormGroup({
        titulo: new FormControl("", [Validators.required, Validators.maxLength(25)]),
        valor: new FormControl(0,[Validators.max(10), Validators.min(0), Validators.required]),
        tipo: new FormControl(0,[Validators.required]),
        displayOrder: new FormControl(this.newDisplayOrder()),
        personaId: new FormControl (this.service.personaId)       
      })
    } else {
      this.componentForm = new FormGroup({
        id: new FormControl(this.object?.id),
        titulo: new FormControl(this.object?.titulo, [Validators.required, Validators.maxLength(25)]),
        valor: new FormControl(this.object?.valor,[Validators.max(10), Validators.min(0), Validators.required]),
        tipo: new FormControl(this.object?.tipo,[Validators.required]),
        displayOrder: new FormControl(this.object?.displayOrder),
        personaId: new FormControl(this.object?.personaId)
      })
    }
  }

  get titulo() { return this.componentForm.get('titulo'); }
  get valor() { return this.componentForm.get('valor'); }
  get tipo() { return this.componentForm.get('tipo'); }

  constructor(screenService: ScreenSizeService, service: SkillRequestsService, login: LoginService) {
    super(service, screenService, login);
  }
}
