import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})

export class AboutMeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  nombre: string = "Gimena Martín"
  trabajo: string = "Trabajadora sexual con experiencia"
  sobreMi: string = "Me llaman kime. Naci en el lejano oeste argentino (San Juan). Mi juventud fue muy dificil. Pasé los primeros años de mi vida con problemas motrices que me impidieron caminar y comer por mi misma por 2 años. No tenía control de mis esfínteres, necesitando recurrir a pañales y a cuidadores no pagos que me ayudaran a ir al baño. Fue humillante. He estudiado la astrología por años. Conozco el pasado y el futuro. Cada vez que miro hacia el cielo nocturno los astros me dicen quienes moriran esa noche. Es un don, y una maldición."
  
  editando: boolean = false
  showEditButton: boolean = false

  clicEditar(): void {
    this.editando=!(this.editando)
  }

}

