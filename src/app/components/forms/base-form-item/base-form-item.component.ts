import { Directive, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EducacionRequestsService } from 'src/app/services/http-requests/educacion-requests.service';
import { ExperienciaRequestsService } from 'src/app/services/http-requests/experiencia-requests.service';
import { ProyectoRequestsService } from 'src/app/services/http-requests/proyecto-requests.service';
import { SkillRequestsService } from 'src/app/services/http-requests/skill-requests.service';
import { EducItem, ExpItem, ProyectoItem, SkillItem } from 'src/app/services/model-interfaces';

@Directive()
export abstract class BaseFormItemComponent<T extends EducItem|ExpItem|SkillItem|ProyectoItem, Serv extends EducacionRequestsService|ExperienciaRequestsService|SkillRequestsService|ProyectoRequestsService> implements OnInit {
  
  @Input() isNewItem: boolean = true;
  @Input() object?: T;
  @Output() showModalEvent = new EventEmitter<boolean>();

  componentForm = new FormGroup({});

  makeComponentForm(){}

  newDisplayOrder(){
    if (this.service.items){
      return Math.max(...this.service.items.map(o => o.displayOrder)) + 1;
    } else {
      return 1;
    }
  }

  submitForm() {
    if (this.isNewItem){
      this.service.postJSON(this.componentForm.value);
      this.componentForm.reset();
    } else {
      this.service.putJSON(this.componentForm.value);
    }
    this.showModalEvent.emit(false)
  }

  cancelForm(){
    if (this.isNewItem){
      this.componentForm.reset();
    } else {
      this.setFormDefault();
    }
    this.showModalEvent.emit(false)
  }

  setFormDefault(){
    if (!this.isNewItem){
      if (this.object){
        this.componentForm.setValue(this.object);
      }
    }
  }

  constructor(@Inject('service') public service: Serv) {
  }

  ngOnInit(): void {
    this.makeComponentForm();
    this.setFormDefault();
  }
}
