import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EducItem, EducItemPost } from '../model-interfaces';
import { GlobalVariablesService } from './global-variables.service';
import { ImagenRequestsService } from './imagen-requests.service';

@Injectable({
  providedIn: 'root'
})
export class EducacionRequestsService extends ImagenRequestsService<EducItem, EducItemPost> {

  constructor( http: HttpClient, gv: GlobalVariablesService ) {
    super(http, "educ", gv);
    this.getJSON()
  }
}
