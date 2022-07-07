import { Component, OnInit } from '@angular/core';
import { SkillItem } from 'src/app/services/model-interfaces';
import { SkillRequestsService } from 'src/app/services/http-requests/skill-requests.service';
import { BaseItemComponent } from '../../base-item/base-item.component';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['../../../../styles/item.styles.css', './skill-item.component.css']
})
export class SkillItemComponent extends BaseItemComponent<SkillItem,SkillRequestsService> implements OnInit {

  skillWidth : string = ""
    
  numberToPercentage(n: number): string{
    let a: number = n/100;
    return a.toLocaleString('en-US',{style:'percent'});
  }

  constructor(service: SkillRequestsService, login: LoginService) {
    super(service, login);
  }

  override ngOnInit(): void {
    if (this.object){
      this.skillWidth = this.numberToPercentage(this.object?.valor);
    } 
  }
}
