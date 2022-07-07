import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Directive, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { EducacionRequestsService } from 'src/app/services/http-requests/educacion-requests.service';
import { ExperienciaRequestsService } from 'src/app/services/http-requests/experiencia-requests.service';
import { ProyectoRequestsService } from 'src/app/services/http-requests/proyecto-requests.service';
import { SkillRequestsService } from 'src/app/services/http-requests/skill-requests.service';

@Directive()
export abstract class OrderFormBaseComponent<T extends ExperienciaRequestsService|EducacionRequestsService|SkillRequestsService|ProyectoRequestsService> implements OnInit {

  @Output() showModalEvent = new EventEmitter<boolean>();

  list: any[] = [];

  changeOrder(event: CdkDragDrop<string[]>){
    moveItemInArray(this.list, event.previousIndex, event.currentIndex);
  }

  submitOrder(){  
    if(this.list.map(x => x.id).toString() !== this.service.items?.map(x => x.id).toString()){
      this.service.putJSONorder(this.list);
    }
    this.showModalEvent.emit(false);
  }

  constructor(@Inject('service') public service: T) {
    if (this.service.items) {
      this.list = JSON.parse(JSON.stringify(this.service.items));
    }
  }

  ngOnInit(): void {  }
}
