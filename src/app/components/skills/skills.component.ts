import { Component, OnInit } from '@angular/core';
import { SkillRequestsService } from 'src/app/services/http-requests/skill-requests.service';
import { LoginService } from 'src/app/services/login.service';
import { ScreenSizeService } from 'src/app/services/screen-size.service';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent extends BaseComponent implements OnInit{
  
  public overlayOpen: boolean = false;
  changeOverlayOpen(value: boolean){
    this.overlayOpen = value;
  }

  public overlayOpenOrder: boolean = false;
  changeOverlayOpenOrder(value: boolean){
    this.overlayOpenOrder = value;
  }

  constructor(screenService: ScreenSizeService, public service: SkillRequestsService, login: LoginService) {
    super(screenService, login);
  }

}
