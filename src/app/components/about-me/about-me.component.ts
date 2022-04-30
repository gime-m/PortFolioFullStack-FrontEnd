import { Component, OnInit} from '@angular/core';

import { BaseComponent } from '../base/base.component';
import { ScreenSizeService } from 'src/app/services/screen-size.service';
import { GlobalVariablesService } from 'src/app/services/global-variables.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})

export class AboutMeComponent extends BaseComponent implements OnInit {

  constructor(screenService: ScreenSizeService, global: GlobalVariablesService) {
    super(screenService, global);
  }
  
}