import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EducacionRequestsService } from 'src/app/services/http-requests/educacion-requests.service';
import { ExperienciaRequestsService } from 'src/app/services/http-requests/experiencia-requests.service';
import { ProyectoRequestsService } from 'src/app/services/http-requests/proyecto-requests.service';
import { LoginService } from 'src/app/services/login.service';
import { ScreenSizeService } from 'src/app/services/screen-size.service';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'app-item-imagen-form',
  templateUrl: './imagen-item-form.component.html',
  styleUrls: ['../../../styles/editing.styles.css']
})
export class ImagenItemFormComponent<T extends ExperienciaRequestsService|EducacionRequestsService|ProyectoRequestsService> extends BaseComponent implements OnInit {

  @Input()   id: number = 0;
  @Output() overlayOpenEvent = new EventEmitter<boolean>();

  componentForm = new FormGroup({
    imagen: new FormControl(""),
    fileSource: new FormControl ("")
  })
  get imagen() { return this.componentForm.get('imagen'); }
  get fileSource() { return this.componentForm.get('fileSource'); }

  submitForm() {
    this.service.putImagen(this.fileSource?.value, this.id);
    this.componentForm.reset();
    this.overlayOpenEvent.emit(false);
  }
  cancelForm(){
    this.componentForm.reset();
    this.overlayOpenEvent.emit(false);
  }

  imagenPorDefecto(){
    this.service.deleteImagen(this.id);
    this.overlayOpenEvent.emit(false);

  }
  
  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.componentForm.patchValue({
        fileSource: file
      });
    }
  }

  constructor(@Inject('service') public service: T, screenService: ScreenSizeService, login: LoginService) {
    super(screenService, login);
  }
}
