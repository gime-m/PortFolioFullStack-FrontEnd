import { Component, OnInit } from '@angular/core';
import { ScreenSizeService } from 'src/app/services/screen-size.service';
import { LoginService } from 'src/app/services/login.service';
import { BannerImageBaseComponent } from '../banner-image-base/banner-image-base.component';
import { PersonaRequestsService } from 'src/app/services/http-requests/persona-requests.service';

@Component({
  selector: 'app-banner-image',
  templateUrl: './banner-image.component.html',
  styleUrls: ['./banner-image.component.css']
})
export class BannerImageComponent extends BannerImageBaseComponent implements OnInit {

  constructor(screenService: ScreenSizeService, login: LoginService, pers: PersonaRequestsService) {
    super(screenService, login, pers,"banner");
  }
}

