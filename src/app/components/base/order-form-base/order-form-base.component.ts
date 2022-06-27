import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { EducacionRequestsService } from 'src/app/services/http-requests/educacion-requests.service';
import { ExperienciaRequestsService } from 'src/app/services/http-requests/experiencia-requests.service';
import { ProyectoRequestsService } from 'src/app/services/http-requests/proyecto-requests.service';
import { SkillRequestsService } from 'src/app/services/http-requests/skill-requests.service';
import { LoginService } from 'src/app/services/login.service';
import { ScreenSizeService } from 'src/app/services/screen-size.service';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'app-order-form-base',
  template: '',
  styleUrls: ['../../../styles/editing.styles.css', './order-form-base.component.css']
})
export class OrderFormBaseComponent<T extends ExperienciaRequestsService|EducacionRequestsService|SkillRequestsService|ProyectoRequestsService> extends BaseComponent implements OnInit {

  @Output() overlayOpenEvent = new EventEmitter<boolean>();

  list: any[] = [];

  constructor(screenService: ScreenSizeService, login: LoginService, @Inject('service') public service: T) {
    super(screenService, login);
    if (this.service.items) {
      this.list = JSON.parse(JSON.stringify(this.service.items));
    }
  }

  changeOrder(event: CdkDragDrop<string[]>){
    moveItemInArray(this.list, event.previousIndex, event.currentIndex);
  }

  submitOrder(){  
    if(this.list.map(x => x.id).toString() !== this.service.items?.map(x => x.id).toString()){
      this.service.putJSONorder(this.list);
    }
    this.overlayOpenEvent.emit(false);
  }

}
