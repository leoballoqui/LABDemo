import { Component, OnInit, Inject } from '@angular/core';
import { Http, Response, Headers, RequestOptions  } from '@angular/http';
import { Routes, RouterModule, Router } from '@angular/router';
import {MatSnackBar} from '@angular/material';

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
  private loading : boolean;
  private displayedColumns = ['doctor', 'participant', 'time', 'status', 'actions'];

  constructor(    
    private http: Http,
    public snackBar: MatSnackBar,) { 
  }

  ngOnInit() {
    this.selectedDate = new Date();
    this.getDoctors();
    this.getAppointments();
  }

  getDoctors(){
    this.http.get('http://localhost:23049/api/Doctors/GetDoctors')
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
    let link = 'http://localhost:23049/api/Appointments/GetAppointmentsDetailsByDay';
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this.loading = true;
    this.http.post(link, this.selectedDate, options)
    .subscribe(
        data => {
          this.allAppointments = data.json().appointments;
          this.filertAppointments();
          this.loading = false;
        },
        err => {
          console.error(err)
          this.loading = false;
        }
    ); 
  }

  notify(app: any, via: string){
    if(app.Status < 2)
    {
      app.Status = 2;
      app.StatusName = "Notified";
    }
    this.snackBar.open("Success!", "The user was notified via " + via + ".", {
      duration: 5000,});
  }

  confirm(app: any){
    app.Status = 3;
    app.StatusName = "Confirmed";
    this.snackBar.open("Success!", "The appointment is confirmed.", {
      duration: 5000,});
  }

  complete(app: any){
    app.Status = 4;
    app.StatusName = "Completed";
    this.snackBar.open("Success!", "The appointment is completed.", {
      duration: 5000,});
  }

  miss(app: any){
    app.Status = 5;
    app.StatusName = "Missed";
    this.snackBar.open("Success!", "The appointment was marked as 'missed'.", {
      duration: 5000,});
  }

  cancel(app: any){
    app.Status = 6;
    app.StatusName = "Canceled";
    this.snackBar.open("Success!", "The appointment was canceled.", {
      duration: 5000,});
  }

  reset(app: any){
    app.Status = 1;
    app.StatusName = "Created";
    this.snackBar.open("Success!", "The appointment satus was reset.", {
      duration: 5000,});
  }

  filertAppointments(){
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

}
