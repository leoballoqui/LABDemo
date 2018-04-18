import { Component, OnInit, Inject } from '@angular/core';
import { Http, Response, Headers, RequestOptions  } from '@angular/http';
import { Routes, RouterModule, Router } from '@angular/router';
import {CommonService} from '../../common/common.service';

@Component({
  selector: 'app-doctors-details',
  templateUrl: './doctors-details.component.html',
  styleUrls: ['./doctors-details.component.css']
})
export class DoctorsDetailsComponent implements OnInit {

  private doctor : any;

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
    
    this.doctor = this.commonService.getSelectedDoctor();
    if(this.doctor === null || this.doctor === undefined)
      this.goTo('doctors');
  }

  goTo(destination: string){
    this.router.navigate(['/' + destination]);
  }

}
