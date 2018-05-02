import { Component, OnInit, Inject } from '@angular/core';
import { Http, Response, Headers, RequestOptions  } from '@angular/http';
import { Routes, RouterModule, Router } from '@angular/router';
import {MatSnackBar} from '@angular/material';
import {CommonService} from '../../common/common.service';
import {AjaxService} from '../../common/ajax.service';

@Component({
  selector: 'app-home-index',
  templateUrl: './home-index.component.html',
  styleUrls: ['./home-index.component.css']
})
export class HomeIndexComponent implements OnInit {

  private selectedDate: Date; 
  private doctors : any;
  private selectedDoctor : number = 0;
  private participant: string = ""
  private allAppointments : Array<any>;
  private appointments : Array<any>;
  private loading : boolean = false;
  private displayedColumns = ['doctor', 'participant', 'time', 'status', 'actions'];

  constructor(    
    private http: Http,
    private router: Router,
    private snackBar: MatSnackBar,
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

    this.allAppointments = new Array<any>();
    this.appointments = new Array<any>();

    this.selectedDate = new Date();
    this.getDoctors();
    this.getAppointments();
  }

  getDoctors(){
    this.ajaxService.getAllDoctors()
    .subscribe(
        data => {
          this.doctors = data.json();
        },
        err => {
          console.error(err)
        } 
    ); 
  }

  getAppointments(){
    this.loading = true;
    this.ajaxService.getAppointmentsDetails(this.selectedDate)
    .subscribe(
        data => {
          this.allAppointments = data.json().appointments;
          this.filterAppointments();
          this.loading = false;
        },
        err => {
          this.snackBar.open("Error!", "Sorry, an error ocurred accessing the data.", {
            duration: 7000,});
          this.loading = false;
        }
    ); 
  }

  notify(app: any, via: string){
    this.setAppStatus(app, 2, "Notified", "The user was notified via " + via + ".");
  }

  confirm(app: any){
    this.setAppStatus(app, 3, "Confirmed", "The appointment is confirmed.");
  }

  complete(app: any){
    this.setAppStatus(app, 4, "Completed", "The appointment is completed.");
  }

  miss(app: any){
    this.setAppStatus(app, 5, "Missed", "The appointment was marked as 'Missed'.");
  }

  cancel(app: any){
    this.setAppStatus(app, 6, "Canceled", "The appointment was canceled.");
  }

  reset(app: any){
    this.setAppStatus(app, 1, "Created", "The appointment satus was reset.");
  }

  filterAppointments(){
    this.appointments = this.allAppointments;
    let participantText = this.participant.trim().toLowerCase();
    if(this.selectedDoctor > 0)
      this.appointments = this.appointments.filter(app => app.DoctorID === this.selectedDoctor)
    if(participantText != "")
      this.appointments = this.appointments.filter(app => app.ParticipantName.toLowerCase().includes(participantText))
  }

  goToPreviousDay(){
    this.selectedDate = new Date(this.selectedDate.setDate(this.selectedDate.getDate() - 1))
    this.getAppointments();
  }

  goToNextDay(){
    this.selectedDate = new Date(this.selectedDate.setDate(this.selectedDate.getDate() + 1))
    this.getAppointments();
  }

  setAppStatus(app : any, status : number, statusName : string, successMessage: string){
    let data = JSON.stringify(
    {
      ID: app.AppointmentID,
      Status: status
    });

    this.ajaxService.setAppStatus(data).subscribe(
      data => {
        if(status != 2 || app.Status < 2)
        {
          app.Status = status;
          app.StatusName = statusName;
        }
        this.snackBar.open("Success!", successMessage, {
          duration: 5000,});
      },
      err => {
        this.snackBar.open("Error!", "Sorry, an error ocurred while processing the request.", {
          duration: 7000,});
      }
    ); 
  }

}
