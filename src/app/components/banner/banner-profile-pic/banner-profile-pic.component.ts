import { Component, OnInit } from '@angular/core';
import { ScreenSizeService } from 'src/app/services/screen-size.service';
import { LoginService } from 'src/app/services/login.service';
import { PersonaRequestsService } from 'src/app/services/http-requests/persona-requests.service';
import { BannerImageBaseComponent } from '../banner-image-base/banner-image-base.component';

@Component({
  selector: 'app-banner-profile-pic',
  templateUrl: './banner-profile-pic.component.html',
  styleUrls: ['./banner-profile-pic.component.css']
})
export class BannerProfilePicComponent extends BannerImageBaseComponent implements OnInit {

  constructor(screenService: ScreenSizeService, login: LoginService, pers: PersonaRequestsService) {
    super(screenService, login, pers, "imagenPerfil");
  }
}

