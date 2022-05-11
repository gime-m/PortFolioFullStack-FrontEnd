import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GlobalVariablesService } from 'src/app/services/global-variables.service';
import { ScreenSizeService } from 'src/app/services/screen-size.service';
import { SkillsService } from 'src/app/services/skills.service';
import { BaseComponent } from '../../base/base.component';

@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.css']
})
export class SkillItemComponent extends BaseComponent implements OnInit {

  @Input() skillTitle: string = ""
  @Input() skillDescription: string = ""
  @Input() skillValue: number = 0
  @Input() skillLabel: string = ""
  @Input() skillIndex: number = 0
  skillWidth : string = ""
  usedLabel: string = this.skillLabel

  //Form
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

  override submitForm(): void {
    this.overlayOpen = false;
    this.service.changeItem(this.skillIndex, this.titleForm?.value, this.descriptionForm?.value, this.valueForm?.value, this.labelForm?.value);
    this.componentForm.reset();
  }
  override cancelForm(): void{
    this.overlayOpen = false;
    this.componentForm.reset();
  }
  
  setFormDefault(): void{
    this.titleForm?.setValue(this.skillTitle);
    this.descriptionForm?.setValue(this.skillDescription);
    this.valueForm?.setValue(this.skillValue);
    this.labelForm?.setValue(this.skillLabel);
  }

  deleteItem(): void{
    this.service.deleteItem(this.skillIndex);
  }
    
  numberToPercentage(n: number): string{
    let a: number = n/100;
    return a.toLocaleString('en-US',{style:'percent'});
  }

  defaultLabel (): void{
    if (this.skillLabel==""){
      this.usedLabel = this.skillWidth;
    } else {
      this.usedLabel = this.skillLabel;
    };
  }
   

  constructor(screenService: ScreenSizeService, global: GlobalVariablesService, public service: SkillsService) {
    super(screenService, global);
  }

  override ngOnInit(): void {
    this.skillWidth = this.numberToPercentage(this.skillValue);
    this.defaultLabel();
    this.setFormDefault();
  }

}
