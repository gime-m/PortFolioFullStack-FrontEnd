import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GlobalVariablesService } from 'src/app/services/global-variables.service';
import { ScreenSizeService } from 'src/app/services/screen-size.service';
import { EducacionService } from 'src/app/services/educacion.service';
import { BaseComponent } from '../../base/base.component';

@Component({
  selector: 'app-educacion-item',
  templateUrl: './educacion-item.component.html',
  styleUrls: ['./educacion-item.component.css']
})
export class EducacionItemComponent extends BaseComponent implements OnInit {

  @Input() edTitulo: string = "a"
  @Input() edInstitucion: string = ""
  @Input() edDescripcion: string = ""
  @Input() edStartDate?: Date
  @Input() edEndDate?: Date
  @Input() edCurrent: boolean = false
  @Input() edIndex: number = 0
  datepipe: any;

  componentForm = new FormGroup({
    tituloForm: new FormControl(this.edTitulo, [Validators.required, Validators.maxLength(100)]),
    institucionForm: new FormControl(this.edInstitucion,[Validators.maxLength(60)]),
    descripcionForm: new FormControl(this.edDescripcion,[Validators.maxLength(250)]),
    startDateForm: new FormControl(null),
    endDateForm: new FormControl(null),
    currentForm: new FormControl(this.edCurrent),
  })

  get tituloForm() { return this.componentForm.get('tituloForm'); }
  get institucionForm() { return this.componentForm.get('institucionForm'); }
  get descripcionForm() { return this.componentForm.get('descripcionForm'); }
  get startDateForm() { return this.componentForm.get('startDateForm'); }
  get endDateForm() { return this.componentForm.get('endDateForm'); }
  get currentForm() { return this.componentForm.get('currentForm'); }

  override submitForm() {
    this.overlayOpen = false,
    this.service.changeItem (this.edIndex, this.tituloForm?.value, this.institucionForm?.value, this.descripcionForm?.value, this.startDateForm?.value, this.endDateForm?.value, this.currentForm?.value)
  }

  override cancelForm(){
    this.overlayOpen = false
    this.setFormDefault()
  }

  setFormDefault(){
    this.tituloForm?.setValue(this.edTitulo);
    this.institucionForm?.setValue(this.edInstitucion);
    this.descripcionForm?.setValue(this.edDescripcion);
    this.startDateForm?.setValue(this.edStartDate);
    this.endDateForm?.setValue(this.edEndDate);
    this.currentForm?.setValue(this.edCurrent)
  }

  deleteCard(){
    this.service.deleteItem(this.edIndex)
  }
  
  constructor(screenService: ScreenSizeService, global: GlobalVariablesService, public service: EducacionService) {
    super(screenService, global);
  }

  override ngOnInit(): void {
    this.setFormDefault()
  }

}


