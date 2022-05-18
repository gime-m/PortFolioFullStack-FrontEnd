import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  //Variables
  items: SkillItem[] = [
    {title: "Comer", description:"Me gusta el helado", value: 10, label: "No me gusta el tomate"},
    {title: "Integrales", description:" Conozco el pasado y el futuro. Cada vez que miro hacia el cielo nocturno los astros me dicen quienes morirán esa noche. Es un don, y una maldición.", value: 68, label: ""}
  ]
  
  //Metodos
  addItem (newTitle: string, newDescription: string, newValue: number, newLabel: string){
    this.items.push({title: newTitle, description: newDescription, value: newValue, label: newLabel})
  }

  changeItem (i: number, newTitle: string, newDescription: string, newValue: number, newLabel: string){
    this.items[i]={title: newTitle, description: newDescription, value: newValue, label: newLabel}
  }

  deleteItem(i: number){
    this.items.splice(i,1)
  }

  constructor() { }
}


class SkillItem {
    title: string = ""
    description: string = ""
    value: number = 0
    label: string = ""
}
