import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LoadingService } from 'src/app/services/loading/loading.service';
import { LoginService } from 'src/app/services/login.service';
import { ScreenSizeService } from 'src/app/services/screen-size.service';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent extends BaseComponent implements OnInit {
  private _logoArgSrc: string = "assets/images/APlogo.png";
  private _linkGitHub: string = "https://github.com/gime-m";
  
  public get logoArgSrc(): string {
    return this._logoArgSrc;
  }
  public get linkGitHub(): string {
    return this._linkGitHub;
  }

  constructor (login: LoginService, sc: ScreenSizeService, public auth: AuthService) {
    super(sc,login);
  }
}
