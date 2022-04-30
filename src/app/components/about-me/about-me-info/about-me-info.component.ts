import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

import { BaseComponent } from '../../base/base.component';
import { ScreenSizeService } from 'src/app/services/screen-size.service';
import { GlobalVariablesService } from 'src/app/services/global-variables.service';

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

  //Form
  componentForm = new FormGroup({
    locationForm: new FormControl(this.global.location, [Validators.required]),
    workplaceForm: new FormControl(this.global.workplace, [Validators.required]),
    emailForm: new FormControl(this.global.email, [Validators.required, Validators.email]),
    phoneForm: new FormControl(this.global.phone, [Validators.required, Validators.pattern("^[+]?[0-9()-\\s]+$"),]),
  })

  //iconos getters
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

  //Form getters
  get locationForm() { return this.componentForm.get('locationForm'); }
  get workplaceForm() { return this.componentForm.get('workplaceForm'); }
  get emailForm() { return this.componentForm.get('emailForm'); }
  get phoneForm() { return this.componentForm.get('phoneForm'); }

  //Form methods
  override submitForm() {
    this.overlayOpen = false
    this.global.location=this.locationForm?.value,
    this.global.workplace=this.workplaceForm?.value
    this.global.email=this.emailForm?.value
    this.global.phone=this.phoneForm?.value
  }
  override cancelForm(){
    this.overlayOpen = false
    this.locationForm?.setValue(this.global.location),
    this.workplaceForm?.setValue(this.global.workplace)
    this.emailForm?.setValue(this.global.email)
    this.phoneForm?.setValue(this.global.phone)
  }

  //Constructor
  constructor(screenService: ScreenSizeService, global: GlobalVariablesService) {
    super(screenService, global);
  }
}
