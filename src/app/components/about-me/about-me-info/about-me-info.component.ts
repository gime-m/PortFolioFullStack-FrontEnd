import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../base/base.component';
import { ScreenSizeService } from 'src/app/services/screen-size.service';
import { LoginService } from 'src/app/services/login.service';
import { PersonaRequestsService } from 'src/app/services/http-requests/persona-requests.service';

@Component({
  selector: 'app-about-me-info',
  templateUrl: './about-me-info.component.html',
  styleUrls: ['./about-me-info.component.css']
})

export class AboutMeInfoComponent extends BaseComponent implements OnInit {
 
  public showModal: boolean = false;
  changeShowModal(value: boolean){
    this.showModal = value;
  }

  constructor(screenService: ScreenSizeService, login: LoginService,public pers: PersonaRequestsService) {
    super(screenService, login);
  }

}
