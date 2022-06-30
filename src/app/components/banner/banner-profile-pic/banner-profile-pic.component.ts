import { Component, OnInit } from '@angular/core';
import { ScreenSizeService } from 'src/app/services/screen-size.service';
import { LoginService } from 'src/app/services/login.service';
import { PersonaRequestsService } from 'src/app/services/http-requests/persona-requests.service';
import { BaseComponent } from '../../base/base.component';

@Component({
  selector: 'app-banner-profile-pic',
  templateUrl: './banner-profile-pic.component.html',
  styleUrls: ['./banner-profile-pic.component.css']
})
export class BannerProfilePicComponent extends BaseComponent implements OnInit {

  public showModal: boolean = false;
  changeShowModal(value: boolean){
    this.showModal = value;
  }

  constructor(screenService: ScreenSizeService, login: LoginService, public pers: PersonaRequestsService) {
    super(screenService, login);
  }
}

