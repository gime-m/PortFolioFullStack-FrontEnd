import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  //Variables
  items: EdItem[] = [
    {titulo: "Secundaria", institucion:"Fray Mamerto Colegio", descripcion: "Colegio religioso horriible", startDate: new Date(2022, 1, 1), endDate: new Date(2022,3,4), current: false},
    {titulo: "Ingles", institucion:"San tomas", descripcion: "No aprendi nada", startDate: new Date(2020, 11, 1), endDate: undefined, current: true}
  ]
  
  private _editing: boolean = false;
  
  //Getter Setter 
  public get editing(): boolean {
    return this._editing;
  }
  public set editing(value: boolean) {
    this._editing = value;
  }

  //Metodos
  addItem (newTitulo: string, newInstitucion: string, newDescripcion: string, newStartDate: Date, newEndDate: Date, newCurrent: boolean){
    this.items.push({titulo: newTitulo, institucion: newInstitucion, descripcion: newDescripcion, startDate: newStartDate, endDate: newEndDate, current: newCurrent})
  }

  changeItem (i: number, newTitulo: string, newInstitucion: string, newDescripcion: string, newStartDate: Date, newEndDate: Date, newCurrent: boolean){
    this.items[i]={titulo: newTitulo, institucion: newInstitucion, descripcion: newDescripcion, startDate: newStartDate, endDate: newEndDate, current: newCurrent}
  }

  deleteItem(i: number){
    this.items.splice(i,1)
  }
}


class EdItem {
    titulo: string = ""
    institucion: string = ""
    descripcion: string = ""
    startDate?: Date
    endDate?: Date
    current: boolean = false
}


