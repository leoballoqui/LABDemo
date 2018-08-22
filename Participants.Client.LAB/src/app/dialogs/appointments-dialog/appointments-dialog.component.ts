import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Routes, RouterModule, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { DialogsService } from '../dialogs.service';
import { AjaxService } from '../../common/ajax.service';


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
      public dialogRef: MatDialogRef<AppointmentsDialogComponent>,
      private ajaxService:AjaxService) {

    }

    ngOnInit() {
      this.getAppointments();
    }

    getAppointments(){
      this.ajaxService.getAppointmentsDetails(this.selectedDate)
      .subscribe(
          data => {
            this.allAppointments = data.json().appointments;
            this.filterAppointments();
            this.slots = data.json().slots;
          },
          err => {
            this.snackBar.open("Error!", "Sorry, an error ocurred accessing the data.", {
              duration: 7000,});
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
      if(this.selectedDoctor > 0)
        this.appointments = this.appointments.filter(app => app.DoctorID === this.selectedDoctor)
      if(this.selectedParticipant > 0)
        this.appointments = this.appointments.filter(app => app.ParticipantID === this.selectedParticipant)
      if(this.selectedSlot > -1)
        this.appointments = this.appointments.filter(app => app.Slot === this.selectedSlot)
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