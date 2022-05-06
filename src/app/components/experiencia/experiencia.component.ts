import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GlobalVariablesService } from 'src/app/services/global-variables.service';
import { ScreenSizeService } from 'src/app/services/screen-size.service';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { BaseComponent } from '../base/base.component';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent extends BaseComponent implements OnInit {
  
  //Variables
  items = this.service.items;

  //Form añadir
  componentForm = new FormGroup({
    titleForm: new FormControl("", [Validators.required, Validators.maxLength(60)]),
    textForm: new FormControl("",[Validators.maxLength(250)]),
    placeForm: new FormControl("",[Validators.maxLength(50)]),
    startDateForm: new FormControl(null),
    endDateForm: new FormControl(null),
    currentForm: new FormControl(false),
  })

  get textForm() { return this.componentForm.get('textForm'); }
  get titleForm() { return this.componentForm.get('titleForm'); }
  get placeForm() { return this.componentForm.get('placeForm'); }
  get startDateForm() { return this.componentForm.get('startDateForm'); }
  get endDateForm() { return this.componentForm.get('endDateForm'); }
  get currentForm() { return this.componentForm.get('currentForm'); }

  override submitForm() {
    this.overlayOpen = false,
    this.service.addItem(this.titleForm?.value, this.textForm?.value, this.placeForm?.value, this.startDateForm?.value, this.endDateForm?.value, this.currentForm?.value)
    this.componentForm.reset()
  }
  override cancelForm(){
    this.overlayOpen = false
    this.componentForm.reset()
  }
  
  //Constructor
  constructor(screenService: ScreenSizeService, global: GlobalVariablesService, public service: ExperienciaService) {
    super(screenService, global);
  }
}