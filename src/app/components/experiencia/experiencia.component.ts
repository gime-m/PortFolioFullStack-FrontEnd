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
  items = this.expService.items;

  //Form añadir
  componentForm = new FormGroup({
    titleForm: new FormControl("", [Validators.required, Validators.maxLength(60)]),
    textForm: new FormControl("",[Validators.maxLength(250)]),
    placeForm: new FormControl("",[Validators.maxLength(50)]),
    dateForm: new FormControl(null),
  })

  get textForm() { return this.componentForm.get('textForm'); }
  get titleForm() { return this.componentForm.get('titleForm'); }
  get placeForm() { return this.componentForm.get('placeForm'); }
  get dateForm() { return this.componentForm.get('dateForm'); }

  override submitForm() {
    this.overlayOpen = false,
    this.expService.addItem(this.titleForm?.value, this.textForm?.value, this.placeForm?.value, this.dateForm?.value)
    this.componentForm.reset()
  }
  override cancelForm(){
    this.overlayOpen = false
    this.componentForm.reset()
  }
  
  //Constructor
  constructor(screenService: ScreenSizeService, global: GlobalVariablesService, public expService: ExperienciaService) {
    super(screenService, global);
  }

  /*clicEdit(c: boolean) {
    this.editing=c
  }
  (editThisCard)="clicEdit($event)"*/

}