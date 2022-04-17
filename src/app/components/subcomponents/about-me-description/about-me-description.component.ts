import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../base/base.component';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-about-me-description',
  templateUrl: './about-me-description.component.html',
  styleUrls: ['./about-me-description.component.css']
})

export class AboutMeDescriptionComponent extends BaseComponent implements OnInit {

  constructor() {
    super();
  }

  componentForm = new FormControl(this.global.sobreMi, [
    Validators.required,
    Validators.minLength(100),
    Validators.maxLength(600)
  ]);

  override submitForm() {
    this.overlayOpen = false,
    this.global.sobreMi=this.componentForm.value
  }
}
