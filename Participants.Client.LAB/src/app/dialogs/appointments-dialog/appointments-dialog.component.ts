import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Routes, RouterModule, Router } from '@angular/router';
import { DialogsService } from '../../dialogs/dialogs.service';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-appointments-dialog',
  templateUrl: './appointments-dialog.component.html',
  styleUrls: ['./appointments-dialog.component.css']
})
export class AppointmentsDialogComponent {

    public selectedDate : Date;
    public doctors : any;
    public participants : any;
    public slots : Array<any>;
    public allAppointments : Array<any>;
    public appointments : Array<any>;
    public selectedSlot : number = 0;
    public selectedDoctor : number = 0;
    public selectedParticipant : number = 0;
    private displayedColumns = ['doctor', 'participant', 'time', 'status', 'actions'];

    constructor(
      private http: Http,
      public snackBar: MatSnackBar,
      public dialogRef: MatDialogRef<AppointmentsDialogComponent>,) {
    }

    ngOnInit() {
      this.getAppointments();
    }

    getAppointments(){
      let link = 'http://localhost:23049/api/Appointments/GetAppointmentsDetailsByDay';
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
  
      this.http.post(link, this.selectedDate, options)
      .subscribe(
          data => {
            this.allAppointments = data.json().appointments;
            this.filertAppointments();
            this.slots = data.json().slots;
          },
          err => {
            console.error(err)
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
      if(this.selectedDoctor > 0)
        this.appointments = this.appointments.filter(app => app.DoctorID === this.selectedDoctor)
      if(this.selectedParticipant > 0)
        this.appointments = this.appointments.filter(app => app.ParticipantID === this.selectedParticipant)
      if(this.selectedSlot > -1)
        this.appointments = this.appointments.filter(app => app.Slot === this.selectedSlot)
    }
}