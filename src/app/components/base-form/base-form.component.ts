import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EducacionRequestsService } from 'src/app/services/http-requests/educacion-requests.service';
import { ExperienciaRequestsService } from 'src/app/services/http-requests/experiencia-requests.service';
import { SkillRequestsService } from 'src/app/services/http-requests/skill-requests.service';

@Component({
  selector: 'app-base-form',
  template: '',
})
export class BaseFormComponent implements OnInit {

  private _overlayOpen: boolean = false;
  public get overlayOpen(): boolean {
    return this._overlayOpen;
  }
  public set overlayOpen(value: boolean) {
    this._overlayOpen = value;
  } 

  componentForm = new FormGroup({});
  

  submitForm() {
    this.overlayOpen = false;
    let postObj: any = this.componentForm.value
    //postObj.personaId = this.service.personaId
    //this.service.postJSON(postObj);
    this.componentForm.reset();
  }
  cancelForm(){
    this.overlayOpen = false;
    this.componentForm.reset();
  }




  constructor(){}
    //@Inject() private service: ExperienciaRequestsService|SkillRequestsService|EducacionRequestsService) { }

  ngOnInit(): void {
  }

}
