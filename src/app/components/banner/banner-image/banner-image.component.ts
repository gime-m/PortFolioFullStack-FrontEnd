import { Component, OnInit } from '@angular/core';

import { BaseComponent } from '../../base/base.component';
import { ScreenSizeService } from 'src/app/services/screen-size.service';
import { GlobalVariablesService } from 'src/app/services/global-variables.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-banner-image',
  templateUrl: './banner-image.component.html',
  styleUrls: ['./banner-image.component.css']
})
export class BannerImageComponent extends BaseComponent implements OnInit {

  constructor(screenService: ScreenSizeService, global: GlobalVariablesService, login: LoginService) {
    super(screenService, global, login);
  }

  
}
