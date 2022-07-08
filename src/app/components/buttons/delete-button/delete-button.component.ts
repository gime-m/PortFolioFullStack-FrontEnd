import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-button',
  templateUrl: './delete-button.component.html',
  styleUrls: ['../../../styles/item.styles.css']
})
export class DeleteButtonComponent implements OnInit {

  @Input() clases: string = "";
  
  constructor() { }

  ngOnInit(): void {
  }

}
