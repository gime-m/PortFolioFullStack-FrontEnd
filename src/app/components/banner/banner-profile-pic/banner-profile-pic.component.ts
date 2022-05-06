import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../base/base.component';
import { ScreenSizeService } from 'src/app/services/screen-size.service';
import { GlobalVariablesService } from 'src/app/services/global-variables.service';

@Component({
  selector: 'app-banner-profile-pic',
  templateUrl: './banner-profile-pic.component.html',
  styleUrls: ['./banner-profile-pic.component.css']
})
export class BannerProfilePicComponent extends BaseComponent implements OnInit {

  constructor(screenService: ScreenSizeService, global: GlobalVariablesService) {
    super(screenService, global);
  }
  
}