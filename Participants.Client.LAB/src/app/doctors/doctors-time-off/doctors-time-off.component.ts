import { Component, OnInit} from '@angular/core';
import { Http, Response, Headers, RequestOptions, Jsonp  } from '@angular/http';
import { Routes, RouterModule, Router } from '@angular/router';
import { DialogsService } from '../../dialogs/dialogs.service';
import {MatSnackBar} from '@angular/material';
import {CommonService} from '../../common/common.service';
import {AjaxService} from '../../common/ajax.service';


@Component({
  selector: 'app-doctors-time-off',
  templateUrl: './doctors-time-off.component.html',
  styleUrls: ['./doctors-time-off.component.css']
})
export class DoctorsTimeOffComponent implements OnInit {
  private displayedColumns = ['doctor', 'from', 'to', 'actions'];
  private doctor : any;
  private timeOff : Array<any>;
  
  constructor(
    private router: Router,
    private http: Http,
    public snackBar: MatSnackBar,
    private dialogsService: DialogsService,
    private commonService:CommonService,
    private ajaxService:AjaxService) { 

  }

  ngOnInit() {
    if (!this.commonService.isAuthorized())
    {
      this.commonService.logOut();
      this.router.navigate(['/login']);
      return;
    }
    
    this.doctor = this.commonService.getSelectedDoctor();
    if(this.doctor === null || this.doctor === undefined)
      this.goTo('doctors');

    this.getDoctorTimeOff();
  }

  getDoctorTimeOff(){
    this.ajaxService.getDoctorTimeOff(this.doctor.ID)
    .subscribe(
        data => {
          this.timeOff = data.json();
          console.log(JSON.stringify(this.timeOff));
        },
        err => {
          this.snackBar.open("Error!", "Sorry, an error ocurred accessing the doctors data.", {
            duration: 7000,});
        } 
    ); 
  }

  goTo(destination: string){
    this.router.navigate(['/' + destination]);
  }


}
