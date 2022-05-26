import { Component, OnInit} from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { ScreenSizeService } from 'src/app/services/screen-size.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})

export class AboutMeComponent extends BaseComponent implements OnInit {

  constructor(screenService: ScreenSizeService, login: LoginService) {
    super(screenService, login);
  }

  
}