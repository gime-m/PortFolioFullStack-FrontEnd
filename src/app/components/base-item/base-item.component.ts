import { Component, Inject, Input, OnInit } from '@angular/core';
import { EducacionRequestsService } from 'src/app/services/http-requests/educacion-requests.service';
import { ExperienciaRequestsService } from 'src/app/services/http-requests/experiencia-requests.service';
import { ProyectoRequestsService } from 'src/app/services/http-requests/proyecto-requests.service';
import { SkillRequestsService } from 'src/app/services/http-requests/skill-requests.service';
import { LoginService } from 'src/app/services/login.service';
import { EducItem, ExpItem, ProyectoItem, SkillItem } from 'src/app/services/model-interfaces';

@Component({
  selector: 'app-base-item',
  template: ''
})
export class BaseItemComponent<T extends EducItem|ExpItem|SkillItem|ProyectoItem, Serv extends EducacionRequestsService|ExperienciaRequestsService|SkillRequestsService|ProyectoRequestsService> implements OnInit {

  @Input() object!: T;
  datepipe: any;
  verDescripcion: boolean = false;

  public showModal: boolean = false;
  public showModalImagen: boolean = false;
  changeShowModal(value: boolean){
    this.showModal = value;
  }
  changeShowModalImagen(value: boolean){
    this.showModalImagen = value;
  }

  deleteItem(){
    if (this.object){
      this.service.deleteJSON(this.object?.id); 
    } else {
      console.error("Error en solicitud DELETE de item: objeto indefinido");
    }
  }
  
  constructor(@Inject('service') public service: Serv, public login: LoginService) {
  }

  ngOnInit(): void {  }
}
