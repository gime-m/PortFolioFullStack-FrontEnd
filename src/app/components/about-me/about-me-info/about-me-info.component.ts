import { Component, OnInit } from '@angular/core';

import { BaseComponent } from '../../base/base.component';
import { ScreenSizeService } from 'src/app/services/screen-size.service';
import { GlobalVariablesService } from 'src/app/services/global-variables.service';
import { LoginService } from 'src/app/services/login.service';
import { PersonaFormService } from 'src/app/services/persona-form.service';
import { PersonaVariablesService } from 'src/app/services/http-requests/persona-variables.service'; 

@Component({
  selector: 'app-about-me-info',
  templateUrl: './about-me-info.component.html',
  styleUrls: ['./about-me-info.component.css']
})

export class AboutMeInfoComponent extends BaseComponent implements OnInit {
  
  //iconos
  private _locationIcon: string = "assets/icons/geo-alt-fill.svg";
  private _workplaceIcon: string = "assets/icons/building.svg";
  private _emailIcon: string = "assets/icons/envelope.svg";
  private _phoneIcon: string = "assets/icons/telephone-fill.svg";

  //getters
  public get locationIcon(): string {
    return this._locationIcon;
  }
  public get workplaceIcon(): string {
    return this._workplaceIcon;
  }
  public get emailIcon(): string {
    return this._emailIcon;
  }
  public get phoneIcon(): string {
    return this._phoneIcon;
  }

  //Form methods
  submitForm() {
    this.form.submit();
    this.overlayOpen = false;
  }
  cancelForm(){
    this.overlayOpen = false;
    this.form.default();
  }
  clickEditButton(){
    this.form.default();
    this.overlayOpen=true;
  }

  //Constructor
  constructor(screenService: ScreenSizeService, global: GlobalVariablesService, login: LoginService,public pers: PersonaVariablesService, public form: PersonaFormService) {
    super(screenService, global, login);
  }

}
