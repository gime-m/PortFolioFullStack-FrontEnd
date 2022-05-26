import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SkillItem } from 'src/app/services/model-interfaces';
import { SkillRequestsService } from 'src/app/services/http-requests/skill-requests.service';
import { LoginService } from 'src/app/services/login.service';
import { ScreenSizeService } from 'src/app/services/screen-size.service';
import { BaseComponent } from '../../base/base.component';

@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.css']
})
export class SkillItemComponent extends BaseComponent implements OnInit {

  @Input() skillObject?: SkillItem
  skillWidth : string = ""
  usedLabel?: string = this.skillObject?.etiqueta

  //Form
  componentForm = new FormGroup({
    id: new FormControl(this.skillObject?.id),
    titulo: new FormControl("", [Validators.required, Validators.maxLength(25)]),
    descripcion: new FormControl("",[Validators.maxLength(150)]),
    valor: new FormControl(0,[Validators.max(100), Validators.min(0), Validators.required]),
    etiqueta: new FormControl("", [Validators.maxLength(25)]),
    personaId: new FormControl(this.skillObject?.personaId)
  })

  get titulo() { return this.componentForm.get('titulo'); }
  get descripcion() { return this.componentForm.get('descripcion'); }
  get valor() { return this.componentForm.get('valor'); }
  get etiqueta() { return this.componentForm.get('etiqueta'); }

  submitForm() {
    this.overlayOpen = false;
    this.service.putJSON(this.componentForm.value);
  }

  cancelForm(){
    this.overlayOpen = false;
    this.setFormDefault();
  }

  setFormDefault(){
    if (this.skillObject != undefined){
      this.componentForm.setValue(this.skillObject);
    } else {
      console.error("Error: Item de educacion indefinido");
    }
  }

  deleteItem(){
    if (this.skillObject != undefined){
      this.service.deleteJSON(this.skillObject?.id); 
    } else {
      console.error("Error en solicitud DELETE: objeto indefinido");
    }
  }
    
  numberToPercentage(n: number): string{
    let a: number = n/100;
    return a.toLocaleString('en-US',{style:'percent'});
  }

  defaultLabel (): void{
    if (this.skillObject?.etiqueta==""){
      this.usedLabel = this.skillWidth;
    } else {
      this.usedLabel = this.skillObject?.etiqueta;
    };
  }
   

  constructor(screenService: ScreenSizeService, public service: SkillRequestsService, login: LoginService) {
    super(screenService, login);
  }

  override ngOnInit(): void {

    if (this.skillObject != undefined){
      this.skillWidth = this.numberToPercentage(this.skillObject?.valor);
    }   
    this.defaultLabel();
    this.setFormDefault();
  }

}
