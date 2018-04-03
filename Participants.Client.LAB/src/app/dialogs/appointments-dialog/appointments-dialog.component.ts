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
    public slots : Array<any>;;
    public allAppointments : Array<any>;
    public slot : number = 0;
    private displayedColumns = ['doctor', 'participant', 'time', 'actions'];

    constructor(
      private http: Http,
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
            this.slots = data.json().slots;
          },
          err => {
            alert("Error")
            console.error(err)
          }
      ); 
    }
}