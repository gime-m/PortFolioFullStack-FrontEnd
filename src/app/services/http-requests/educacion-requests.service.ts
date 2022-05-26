import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EducItem, EducItemPost } from '../model-interfaces';
import { RequestsBaseService } from './requests-base.service';

@Injectable({
  providedIn: 'root'
})
export class EducacionRequestsService extends RequestsBaseService<EducItem, EducItemPost> {

  constructor( http: HttpClient) {
    super(http, "educ");
    this.getJSON()
  }
}
