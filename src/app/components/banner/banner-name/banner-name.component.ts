import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormArray } from '@angular/forms';

import { BaseComponent } from '../../base/base.component';
import { ScreenSizeService } from 'src/app/services/screen-size.service';
import { GlobalVariablesService } from 'src/app/services/global-variables.service';

@Component({
  selector: 'app-banner-name',
  templateUrl: './banner-name.component.html',
  styleUrls: ['./banner-name.component.css']
})
export class BannerNameComponent extends BaseComponent implements OnInit {

  //Form
  componentForm = new FormGroup({
    nombreForm: new FormControl(this.global.nombre, [Validators.required]),
    trabajoForm: new FormControl(this.global.trabajo, [Validators.required]),
  })

  //Form getter
  get nombreForm() { return this.componentForm.get('nombreForm'); }
  get trabajoForm() { return this.componentForm.get('trabajoForm'); }
  
  //Form methods
  override submitForm() {
    this.overlayOpen = false,
    this.global.nombre=this.nombreForm?.value,
    this.global.trabajo=this.trabajoForm?.value
  }
  override cancelForm(){
    this.overlayOpen = false
    this.nombreForm?.setValue(this.global.nombre),
    this.trabajoForm?.setValue(this.global.trabajo)
  }

  //Constructor
  constructor(screenService: ScreenSizeService, global: GlobalVariablesService) {
    super(screenService, global);
  }
}
