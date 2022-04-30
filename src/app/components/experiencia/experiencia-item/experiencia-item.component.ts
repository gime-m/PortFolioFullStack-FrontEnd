import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GlobalVariablesService } from 'src/app/services/global-variables.service';
import { ScreenSizeService } from 'src/app/services/screen-size.service';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { BaseComponent } from '../../base/base.component';

@Component({
  selector: 'app-experiencia-item',
  templateUrl: './experiencia-item.component.html',
  styleUrls: ['./experiencia-item.component.css']
})
export class ExperienciaItemComponent extends BaseComponent implements OnInit {

  @Input() expTitle: string = ""
  @Input() expText: string = ""
  @Input() expDate?: Date
  @Input() expPlace: string = ""
  @Input() expIndex: number = 0
  datepipe: any;

  componentForm = new FormGroup({
    titleForm: new FormControl(this.expTitle, [Validators.required, Validators.maxLength(60)]),
    textForm: new FormControl(this.expText,[Validators.maxLength(250)]),
    placeForm: new FormControl(this.expPlace,[Validators.maxLength(50)]),
    dateForm: new FormControl(this.expDate),
  })

  get textForm() { return this.componentForm.get('textForm'); }
  get titleForm() { return this.componentForm.get('titleForm'); }
  get placeForm() { return this.componentForm.get('placeForm'); }
  get dateForm() { return this.componentForm.get('dateForm'); }

  override submitForm() {
    this.overlayOpen = false,
    this.expService.changeItem (this.expIndex, this.titleForm?.value, this.textForm?.value, this.placeForm?.value, this.dateForm?.value)
  }
  override cancelForm(){
    this.overlayOpen = false
    this.setFormDefault()
  }

  setFormDefault(){
    this.textForm?.setValue(this.expText);
    this.titleForm?.setValue(this.expTitle);
    this.placeForm?.setValue(this.expPlace);
    this.dateForm?.setValue(this.expDate);
  }

  deleteCard(){
    this.expService.deleteItem(this.expIndex)
  }
  
  constructor(screenService: ScreenSizeService, global: GlobalVariablesService, public expService: ExperienciaService) {
    super(screenService, global);
  }

  override ngOnInit(): void {
    this.setFormDefault()
  }

}
