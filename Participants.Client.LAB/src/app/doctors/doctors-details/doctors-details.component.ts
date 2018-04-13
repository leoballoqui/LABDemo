import { Component, OnInit, Inject } from '@angular/core';
import { Http, Response, Headers, RequestOptions  } from '@angular/http';
import { Routes, RouterModule, Router } from '@angular/router';
import {CommonService} from '../../common/common.service';
import {DoctorsService} from '../doctors.service';

@Component({
  selector: 'app-doctors-details',
  templateUrl: './doctors-details.component.html',
  styleUrls: ['./doctors-details.component.css']
})
export class DoctorsDetailsComponent implements OnInit {

  private doctor : any;
  private commonService:CommonService;

  constructor(
    private router: Router,
    private http: Http,
    @Inject(CommonService)commonService:CommonService) { 
      this.commonService = commonService;
  }

  ngOnInit() {
    this.doctor = this.commonService.getSelectedDoctor();
    if(this.doctor === null || this.doctor === undefined)
      this.goTo('doctors');
  }

  goTo(destination: string){
    this.router.navigate(['/' + destination]);
  }

}
