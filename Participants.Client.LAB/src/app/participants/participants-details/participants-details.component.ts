import { Component, OnInit, Inject } from '@angular/core';
import { Http, Response, Headers, RequestOptions  } from '@angular/http';
import { Routes, RouterModule, Router } from '@angular/router';
import {CommonService} from '../../common/common.service';

@Component({
  selector: 'app-participants-details',
  templateUrl: './participants-details.component.html',
  styleUrls: ['./participants-details.component.css']
})
export class ParticipantsDetailsComponent implements OnInit {

  private participant : any;

  constructor(
    private router: Router,
    private http: Http,    
    private commonService:CommonService) { 

  }

  ngOnInit() {
    if (!this.commonService.isAuthorized())
    {
      this.commonService.logOut();
      this.router.navigate(['/login']);
    }
    
    this.participant = this.commonService.getSelectedParticipant();
    if(this.participant === null || this.participant === undefined)
      this.goTo('participants');
  }

  goTo(destination: string){
    this.router.navigate(['/' + destination]);
  }

}
