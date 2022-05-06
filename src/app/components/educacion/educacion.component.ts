import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GlobalVariablesService } from 'src/app/services/global-variables.service';
import { ScreenSizeService } from 'src/app/services/screen-size.service';
import { EducacionService } from 'src/app/services/educacion.service';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent extends BaseComponent implements OnInit {
  
  //Variables
  items = this.service.items;

  //Form añadir
  componentForm = new FormGroup({
    tituloForm: new FormControl("", [Validators.required, Validators.maxLength(100)]),
    institucionForm: new FormControl("",[Validators.maxLength(60)]),
    descripcionForm: new FormControl("",[Validators.maxLength(250)]),
    startDateForm: new FormControl(null),
    endDateForm: new FormControl(null),
    currentForm: new FormControl(false),
  })

  get tituloForm() { return this.componentForm.get('tituloForm'); }
  get institucionForm() { return this.componentForm.get('institucionForm'); }
  get descripcionForm() { return this.componentForm.get('descripcionForm'); }
  get startDateForm() { return this.componentForm.get('startDateForm'); }
  get endDateForm() { return this.componentForm.get('endDateForm'); }
  get currentForm() { return this.componentForm.get('currentForm'); }

  override submitForm() {
    this.overlayOpen = false,
    this.service.addItem(this.tituloForm?.value, this.institucionForm?.value, this.descripcionForm?.value, this.startDateForm?.value, this.endDateForm?.value, this.currentForm?.value)
    this.componentForm.reset()
  }
  override cancelForm(){
    this.overlayOpen = false
    this.componentForm.reset()
  }
  
  //Constructor
  constructor(screenService: ScreenSizeService, global: GlobalVariablesService, public service: EducacionService) {
    super(screenService, global);
  }

}