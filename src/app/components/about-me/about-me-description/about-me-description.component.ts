import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { BaseComponent } from '../../base/base.component';
import { ScreenSizeService } from 'src/app/services/screen-size.service';
import { GlobalVariablesService } from 'src/app/services/global-variables.service';

@Component({
  selector: 'app-about-me-description',
  templateUrl: './about-me-description.component.html',
  styleUrls: ['./about-me-description.component.css']
})

export class AboutMeDescriptionComponent extends BaseComponent implements OnInit {

  componentForm = new FormControl(this.global.sobreMi, [
    Validators.required,
    Validators.minLength(100),
    Validators.maxLength(600)
  ]);

  override submitForm() {
    this.overlayOpen = false,
    this.global.sobreMi=this.componentForm.value
  }

  override cancelForm(){
    this.overlayOpen = false
    this.componentForm?.setValue(this.global.sobreMi)
  }

  constructor(screenService: ScreenSizeService, global: GlobalVariablesService) {
    super(screenService, global);
  }

}
