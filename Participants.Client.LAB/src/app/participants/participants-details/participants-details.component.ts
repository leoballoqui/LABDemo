import { Component, OnInit, Inject } from '@angular/core';
import { Http, Response, Headers, RequestOptions  } from '@angular/http';
import { Routes, RouterModule, Router } from '@angular/router';
import {ParticipantsService} from '../participants.service';

@Component({
  selector: 'app-participants-details',
  templateUrl: './participants-details.component.html',
  styleUrls: ['./participants-details.component.css']
})
export class ParticipantsDetailsComponent implements OnInit {

  private participant : any;
  private participantsService:ParticipantsService;

  constructor(
    private router: Router,
    private http: Http,
    @Inject(ParticipantsService)pService:ParticipantsService) { 
      this.participantsService = pService;
  }

  ngOnInit() {
    this.participant = this.participantsService.getSelected();
    if(this.participant === null || this.participant === undefined)
      this.goTo('participants');
  }

  goTo(destination: string){
    this.router.navigate(['/' + destination]);
  }

}
