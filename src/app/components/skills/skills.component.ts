import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GlobalVariablesService } from 'src/app/services/global-variables.service';
import { ScreenSizeService } from 'src/app/services/screen-size.service';
import { SkillsService } from 'src/app/services/skills.service';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent extends BaseComponent implements OnInit{

  items = this.service.items;

  //Form añadir
  componentForm = new FormGroup({
    titleForm: new FormControl("", [Validators.required, Validators.maxLength(25)]),
    descriptionForm: new FormControl("",[Validators.maxLength(150)]),
    valueForm: new FormControl(0,[Validators.max(100), Validators.min(0), Validators.required]),
    labelForm: new FormControl("", [Validators.maxLength(25)]),
  })

  get titleForm() { return this.componentForm.get('titleForm'); }
  get descriptionForm() { return this.componentForm.get('descriptionForm'); }
  get valueForm() { return this.componentForm.get('valueForm'); }
  get labelForm() { return this.componentForm.get('labelForm'); }

  override submitForm() {
    this.overlayOpen = false,
    this.service.addItem(this.titleForm?.value, this.descriptionForm?.value, this.valueForm?.value, this.labelForm?.value)
    this.componentForm.reset()
  }
  override cancelForm(){
    this.overlayOpen = false
    this.componentForm.reset()
  }
  
  constructor(screenService: ScreenSizeService, global: GlobalVariablesService, public service: SkillsService) {
    super(screenService, global);
  }

}
