import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../base/base.component';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-about-me-info',
  templateUrl: './about-me-info.component.html',
  styleUrls: ['./about-me-info.component.css']
})
export class AboutMeInfoComponent extends BaseComponent implements OnInit {

  locationIcon: string = "assets/icons/geo-alt-fill.svg"
  workplaceIcon: string = "assets/icons/building.svg"
  emailIcon: string = "assets/icons/envelope.svg"
  phoneIcon: string = "assets/icons/telephone-fill.svg"

  componentForm = new FormGroup({
    locationForm: new FormControl(this.global.location, [Validators.required]),
    workplaceForm: new FormControl(this.global.workplace, [Validators.required]),
    emailForm: new FormControl(this.global.email, [Validators.required, Validators.email]),
    phoneForm: new FormControl(this.global.phone, [Validators.required, Validators.pattern("^[+]?[0-9()-\\s]+$"),]),
  })

  get locationForm() { return this.componentForm.get('locationForm'); }
  get workplaceForm() { return this.componentForm.get('workplaceForm'); }
  get emailForm() { return this.componentForm.get('emailForm'); }
  get phoneForm() { return this.componentForm.get('phoneForm'); }

  override submitForm() {
    this.overlayOpen = false
    this.global.location=this.locationForm?.value,
    this.global.workplace=this.workplaceForm?.value
    this.global.email=this.emailForm?.value
    this.global.phone=this.phoneForm?.value
  }

  constructor() {
    super();
  }

}
