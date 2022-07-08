import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-button',
  templateUrl: './edit-button.component.html',
  styleUrls: ['../../../styles/item.styles.css']
})
export class EditButtonComponent implements OnInit {

  @Input() clases: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
