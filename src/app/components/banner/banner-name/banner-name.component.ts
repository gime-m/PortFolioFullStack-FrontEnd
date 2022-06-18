import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../base/base.component';
import { ScreenSizeService } from 'src/app/services/screen-size.service';
import { LoginService } from 'src/app/services/login.service';
import { PersonaRequestsService} from 'src/app/services/http-requests/persona-requests.service';
import { PersonaFormService } from 'src/app/services/persona-form.service';

@Component({
  selector: 'app-banner-name',
  templateUrl: './banner-name.component.html',
  styleUrls: ['./banner-name.component.css']
})
export class BannerNameComponent extends BaseComponent implements OnInit {

  public overlayOpen: boolean = false;

  clickEditButton(){
    this.form.default();
    this.overlayOpen=true;
  }
  changeOverlayOpen(value: boolean){
    this.overlayOpen = value;
  }

  //Constructor
  constructor(screenService: ScreenSizeService,login: LoginService, public pers: PersonaRequestsService, public form: PersonaFormService) {
    super(screenService, login);
  }
}
