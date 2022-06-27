import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { SkillRequestsService } from 'src/app/services/http-requests/skill-requests.service';
import { LoginService } from 'src/app/services/login.service';
import { ScreenSizeService } from 'src/app/services/screen-size.service';
import { OrderFormBaseComponent } from '../../base/order-form-base/order-form-base.component';

@Component({
  selector: 'app-skill-order-form',
  templateUrl: './skill-order-form.component.html',
  styleUrls: ['../../../styles/editing.styles.css', '../../base/order-form-base/order-form-base.component.css']
})
export class SkillOrderFormComponent extends OrderFormBaseComponent<SkillRequestsService> implements OnInit {

  listHard: any[] = []
  listSoft: any[] = []
  listIdioma: any[] = []

  makeLists(){
    for (let i of this.list){
      switch (i.tipo) {
        case 'hard':
          this.listHard.push(i);
          break;
        case 'soft':
          this.listSoft.push(i);
          break;
        case 'idioma':
          this.listIdioma.push(i);
          break;      
        default:
          break;
      }
    }
  }

  changeOrderSkill(event: CdkDragDrop<string[]>, list: any[]){
    moveItemInArray(list, event.previousIndex, event.currentIndex);
  }

  override submitOrder(){  
    this.list = this.listHard.concat(this.listSoft, this.listIdioma);
    super.submitOrder();
  }

  constructor(screenService: ScreenSizeService, login: LoginService, service: SkillRequestsService) {
    super(screenService, login, service);
    this.makeLists();
  }

  


  

}
