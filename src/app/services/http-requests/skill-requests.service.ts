import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SkillItem, SkillItemPost } from '../model-interfaces';
import { GlobalVariablesService } from './global-variables.service';
import { RequestsBaseService } from './requests-base.service';

@Injectable({
  providedIn: 'root'
})
export class SkillRequestsService extends RequestsBaseService<SkillItem, SkillItemPost> {

  constructor( http: HttpClient, gv: GlobalVariablesService) {
    super(http, "skill", gv);
    this.getJSON()
  }
}
