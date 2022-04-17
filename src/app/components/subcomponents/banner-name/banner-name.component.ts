import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../base/base.component';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-banner-name',
  templateUrl: './banner-name.component.html',
  styleUrls: ['./banner-name.component.css']
})
export class BannerNameComponent extends BaseComponent implements OnInit {

  constructor() {
    super();
  }

  componentForm = new FormGroup({
    nombreForm: new FormControl(this.global.nombre, [Validators.required]),
    trabajoForm: new FormControl(this.global.trabajo, [Validators.required]),
  })

  get nombreForm() { return this.componentForm.get('nombreForm'); }
  get trabajoForm() { return this.componentForm.get('trabajoForm'); }

  override submitForm() {
    this.overlayOpen = false
    this.global.nombre=this.nombreForm?.value,
    this.global.trabajo=this.trabajoForm?.value
  }

}
