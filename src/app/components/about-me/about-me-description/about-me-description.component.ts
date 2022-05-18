import { Component, OnInit } from '@angular/core';

import { BaseComponent } from '../../base/base.component';
import { ScreenSizeService } from 'src/app/services/screen-size.service';
import { GlobalVariablesService } from 'src/app/services/global-variables.service';
import { LoginService } from 'src/app/services/login.service';
import { PersonaVariablesService } from 'src/app/services/http-requests/persona-variables.service';
import { PersonaFormService } from 'src/app/services/persona-form.service';

@Component({
  selector: 'app-about-me-description',
  templateUrl: './about-me-description.component.html',
  styleUrls: ['./about-me-description.component.css']
})

export class AboutMeDescriptionComponent extends BaseComponent implements OnInit {

  submitForm() {
    this.overlayOpen = false;
    this.form.submit();
  }
  cancelForm(){
    this.overlayOpen = false;
    this.form.default();
  }
  clickEditButton(){
    this.form.default();
    this.overlayOpen=true;
  }

  constructor(screenService: ScreenSizeService, global: GlobalVariablesService, login: LoginService, public pers: PersonaVariablesService, public form: PersonaFormService) {
    super(screenService, global, login);
  }

}
