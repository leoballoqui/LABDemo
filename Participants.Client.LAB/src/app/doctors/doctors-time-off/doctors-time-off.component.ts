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
  private displayedColumns = ['doctor', 'from', 'to', 'workingdays', 'status', 'actions'];
  private doctor : any;
  private timeOff : Array<any>;
  private fromDate : Date;
  private toDate : Date;
  
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

    this.fromDate = new Date();
    this.toDate = new Date();
    this.fromDate.setHours(0,0,0,0);
    this.toDate.setHours(0,0,0,0);
    
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

  addDoctorTimeOff(){
    if(this.fromDate == null || this.toDate == null || this.fromDate > this.toDate)
    {
      this.snackBar.open("Error!", "Please select a valid date range.", {duration: 7000,});
      return;
    }

    let data = JSON.stringify(
      {
        DoctorID: this.doctor.ID,
        From: this.fromDate,
        To: this.toDate,
      });

    this.ajaxService.addDoctorTimeOff(data)
    .subscribe(
        data => {
          this.snackBar.open("Success!", "The time-off was successfully created.", {
            duration: 7000,});
          this.getDoctorTimeOff();
        },
        err => {
          this.snackBar.open("Error!", "Sorry, an error ocurred while creating the time-off.", {
            duration: 7000,});
        }
    ); 
  }

  cancelAppointmentsTimeOff(id){
    this.ajaxService.cancelAppointmentsTimeOff(id)
    .subscribe(
        data => {
          this.snackBar.open("Success!", "The affected appointments were successfully canceled.", {
            duration: 7000,});
          this.getDoctorTimeOff();
        },
        err => {
          this.snackBar.open("Error!", "Sorry, an error ocurred while canceling the appointments.", {
            duration: 7000,});
        }
    ); 
  }

  notifyTimeOffParticipants(id){
    this.ajaxService.notifyTimeOffParticipants(id)
    .subscribe(
        data => {
          this.snackBar.open("Success!", "The affected participants were successfully notified.", {
            duration: 7000,});
          this.getDoctorTimeOff();
        },
        err => {
          this.snackBar.open("Error!", "Sorry, an error ocurred while notifying the participants.", {
            duration: 7000,});
        }
    ); 
  }

  resolveWorkindDays(timeOff): number{
    var from:Date = new Date(timeOff.From);
    var to:Date = new Date(timeOff.To);
    from.setHours(0,0,0,0);
    to.setHours(0,0,0,0);

    var stdate : Date = new Date(from);
    var workingdays = 0;
    while (stdate <= to) 
    {
        var day = stdate.getDay();
        if(day != 0 && day != 6) 
            workingdays++; 
        stdate.setDate(stdate.getDate() + 1);
    }
    return workingdays;
  }

  resolveStatus(status): string{
    if(status >=3)
      return "Confirmed";
    if(status >=2)
      return "Notified";
    return "Created";
  }

  goTo(destination: string){
    this.router.navigate(['/' + destination]);
  }


}
