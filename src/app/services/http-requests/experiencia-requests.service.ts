import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ExpItem, ExpItemPost } from '../model-interfaces';
import { RequestsBaseService } from './requests-base.service';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaRequestsService extends RequestsBaseService<ExpItem, ExpItemPost> {

  constructor( http: HttpClient) {
    super(http, "exp");
    this.getJSON()
  }
}

