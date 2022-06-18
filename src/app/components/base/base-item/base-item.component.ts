import { Component, Inject, Input, OnInit } from '@angular/core';
import { EducacionRequestsService } from 'src/app/services/http-requests/educacion-requests.service';
import { ExperienciaRequestsService } from 'src/app/services/http-requests/experiencia-requests.service';
import { ProyectoRequestsService } from 'src/app/services/http-requests/proyecto-requests.service';
import { SkillRequestsService } from 'src/app/services/http-requests/skill-requests.service';
import { LoginService } from 'src/app/services/login.service';
import { EducItem, ExpItem, ProyectoItem, SkillItem } from 'src/app/services/model-interfaces';
import { ScreenSizeService } from 'src/app/services/screen-size.service';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'app-base-item',
  template: ''
})
export class BaseItemComponent<T extends EducItem|ExpItem|SkillItem|ProyectoItem, Serv extends EducacionRequestsService|ExperienciaRequestsService|SkillRequestsService|ProyectoRequestsService> extends BaseComponent implements OnInit {

  @Input() object!: T;
  datepipe: any;
  verDescripcion: boolean = false;

  public overlayOpen: boolean = false;
  public overlayOpenImagen: boolean = false;
  changeOverlayOpen(value: boolean){
    this.overlayOpen = value;
  }
  changeOverlayOpenImagen(value: boolean){
    this.overlayOpenImagen = value;
  }

  deleteItem(){
    if (this.object != undefined){
      this.service.deleteJSON(this.object?.id); 
    } else {
      console.error("Error en solicitud DELETE: objeto indefinido");
    }
  }
  
  constructor(@Inject('service') public service: Serv, screenService: ScreenSizeService, login: LoginService) {
    super(screenService, login);
  }

}
