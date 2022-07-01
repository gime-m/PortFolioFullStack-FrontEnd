import { Component, OnInit } from '@angular/core';
import { PersonaRequestsService } from 'src/app/services/http-requests/persona-requests.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor(public persServ: PersonaRequestsService) { }

  ngOnInit(): void {
  }

}
