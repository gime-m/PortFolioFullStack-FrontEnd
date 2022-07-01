import { Component, OnInit } from '@angular/core';
import { SkillRequestsService } from 'src/app/services/http-requests/skill-requests.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit{
  
  public showModal: boolean = false;
  changeShowModal(value: boolean){
    this.showModal = value;
  }

  public showModalOrder: boolean = false;
  changeShowModalOrder(value: boolean){
    this.showModalOrder = value;
  }

  constructor(public service: SkillRequestsService, public login: LoginService) {
  }

  ngOnInit(): void {  }
}
