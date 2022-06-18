import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EducItem, EducItemPost } from '../model-interfaces';
import { ImagenRequestsService } from './imagen-requests.service';

@Injectable({
  providedIn: 'root'
})
export class EducacionRequestsService extends ImagenRequestsService<EducItem, EducItemPost> {

  constructor( http: HttpClient) {
    super(http, "educ");
    this.getJSON()
  }
}
