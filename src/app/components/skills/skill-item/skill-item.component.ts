import { Component, OnInit } from '@angular/core';
import { SkillItem } from 'src/app/services/model-interfaces';
import { SkillRequestsService } from 'src/app/services/http-requests/skill-requests.service';
import { LoginService } from 'src/app/services/login.service';
import { ScreenSizeService } from 'src/app/services/screen-size.service';
import { BaseItemComponent } from '../../base/base-item/base-item.component';

@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['../../../styles/item.styles.css', './skill-item.component.css']
})
export class SkillItemComponent extends BaseItemComponent<SkillItem,SkillRequestsService> implements OnInit {

  skillWidth : string = ""
  //usedLabel?: string = this.object?.etiqueta
    
  numberToPercentage(n: number): string{
    let a: number = n/100;
    return a.toLocaleString('en-US',{style:'percent'});
  }

  /*defaultLabel (): void{
    if (this.object?.etiqueta==""){
      this.usedLabel = this.skillWidth;
    } else {
      this.usedLabel = this.object?.etiqueta;
    };
  }*/

  constructor(screenService: ScreenSizeService, service: SkillRequestsService, login: LoginService) {
    super(service, screenService, login);
  }

  override ngOnInit(): void {
    if (this.object != undefined){
      this.skillWidth = this.numberToPercentage(this.object?.valor);
    } 
  }
}
