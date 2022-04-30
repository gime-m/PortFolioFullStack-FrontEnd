import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  constructor() { }

  //Variables
   items: ExpItem[] = [
    {title: "Experiencia 1", text:"Hice un portfolio y sufri.", place: "Mi casa", date: new Date(2022, 1, 1)},
    {title: "Experiencia 2", text:"Hice un cosos para ver espectros y sufri muchi. Borderline traumatic. Fue al pedo.", place: "Mi cama", date: new Date(2020, 11, 1)}
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
  addItem (newTitle: string, newText: string, newPlace: string, newDate: Date){
    this.items.push({title: newTitle, text: newText, place: newPlace, date: newDate})
  }

  changeItem (i: number, newTitle: string, newText: string, newPlace: string, newDate: Date){
    this.items[i]={title: newTitle, text: newText, place: newPlace, date: newDate}
  }

  deleteItem(i: number){
    this.items.splice(i,1)
  }
}


class ExpItem {
    title: string = ""
    text: string = ""
    place: string = ""
    date?: Date
}


