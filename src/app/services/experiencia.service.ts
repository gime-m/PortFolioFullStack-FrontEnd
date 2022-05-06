import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  //Variables
   items: ExpItem[] = [
    {title: "Experiencia 1", text:"Hice un portfolio y sufri.", place: "Mi casa", startDate: new Date(2022, 1, 1), endDate: new Date(2022,3,4), current: false},
    {title: "Experiencia 2", text:"Hice un cosos para ver espectros y sufri muchi. Borderline traumatic. Fue al pedo.", place: "Mi cama", startDate: new Date(2020, 11, 1), endDate: undefined, current: true}
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
  addItem (newTitle: string, newText: string, newPlace: string, newStartDate: Date, newEndDate: Date, newCurrent: boolean){
    this.items.push({title: newTitle, text: newText, place: newPlace, startDate: newStartDate, endDate: newEndDate, current: newCurrent})
  }

  changeItem (i: number, newTitle: string, newText: string, newPlace: string, newStartDate: Date, newEndDate: Date, newCurrent: boolean){
    this.items[i]={title: newTitle, text: newText, place: newPlace, startDate: newStartDate, endDate: newEndDate, current: newCurrent}
  }

  deleteItem(i: number){
    this.items.splice(i,1)
  }

  constructor() { }
}


class ExpItem {
    title: string = ""
    text: string = ""
    place: string = ""
    startDate?: Date
    endDate?: Date
    current: boolean = false
}


