import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PersonaRequestsService } from 'src/app/services/http-requests/persona-requests.service';
import { LoginService } from 'src/app/services/login.service';
import { ScreenSizeService } from 'src/app/services/screen-size.service';
import { BaseComponent } from '../../base/base.component';

@Component({
  selector: 'app-banner-image-base',
  template: ''
})
export class BannerImageBaseComponent extends BaseComponent implements OnInit {
  
  propiedad: string;

  componentForm = new FormGroup({
    imagen: new FormControl(""),
    fileSource: new FormControl ("")
  })
  get imagen() { return this.componentForm.get('imagen'); }
  get fileSource() { return this.componentForm.get('fileSource'); }

  submitForm() {
    this.overlayOpen = false;
    this.pers.putImagen(this.fileSource?.value,this.propiedad)
    this.componentForm.reset()
  }
  cancelForm(){
    this.overlayOpen = false;
    this.componentForm.reset()
    //this.form.default();
  }
  clickEditButton(){
    this.overlayOpen=true;
  }
  imagenPorDefecto(){
    this.pers.deleteImagen(this.propiedad);
    this.overlayOpen = false;
  }
  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.componentForm.patchValue({
        fileSource: file
      });
    }
  }

  constructor(screenService: ScreenSizeService, login: LoginService, public pers: PersonaRequestsService, @Inject('comp') comp:string) {
    super(screenService, login);
    this.propiedad = comp
  }
}
