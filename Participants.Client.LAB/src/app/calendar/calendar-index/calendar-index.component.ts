import { Component, OnInit, Inject } from '@angular/core';
import { Http, Response, Headers, RequestOptions  } from '@angular/http';
import { Routes, RouterModule, Router } from '@angular/router';
import { DialogsService } from '../../dialogs/dialogs.service';
import {MatSnackBar} from '@angular/material';
import {CalendarService} from '../calendar.service';

@Component({
  selector: 'app-calendar-index',
  templateUrl: './calendar-index.component.html',
  styleUrls: ['./calendar-index.component.css']
})
export class CalendarIndexComponent implements OnInit {
  private calendarService:CalendarService;
  private selectedDate: Date;
  private fromDate: Date;
  private toDate: Date;
  private selectedDoctor: number = 0;
  private doctors : any;
  private participants : any;
  private days : Array<Date>;
  private state : string ='week';
  private dayTime : string ='AM';
  private weekData : Array<any>;
  private dayData : Array<any>;
  private selectedSlot: number = 0;
  private selectedAppDoctor: number = 0;
  private selectedAppParticipant: number = 0;


  constructor(
    private router: Router,
    private http: Http,
    private dialogsService: DialogsService,
    public snackBar: MatSnackBar,
    @Inject(CalendarService)calendarService:CalendarService) { 
      this.calendarService = calendarService;
  }

  ngOnInit() {
    this.selectedDate = new Date();
    this.getDoctors();
    this.getParticipants();
    this.changeDates();
  }

  goToDay(value: number ){
    //this.selectedDate = new Date(this.selectedDate);
    if(value == 1)
    {
      this.selectedDate = new Date(this.selectedDate.setDate(this.selectedDate.getDate() - 7));
    }
    if(value == 2)
    { 
      this.selectedDate = new Date(this.selectedDate.setDate(this.selectedDate.getDate() + 7));
    }
    this.changeDates();
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

  getParticipants(){
    this.http.get('http://localhost:23049/api/Participants/GetParticipants')
    .subscribe(
        data => {
          this.participants = data.json();
        },
        err => {
          console.error(err)
        } 
    ); 
  }

  doctorSelected(){
    this.selectedAppDoctor = this.selectedDoctor;
    this.refreshData();
  }

  refreshData(){
    if(this.state == "week")
      this.getWeekData();
    else if(this.state == "day")
      this.getDayData();
  }

  getWeekData(){
    let link = 'http://localhost:23049/api/Appointments/GetAppointmentsByWeek';
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let data = JSON.stringify(
      {
        DoctorID: this.selectedDoctor,
        Date: this.selectedDate,
      });

    this.http.post(link, data, options)
    .subscribe(
        data => {
          this.weekData  = data.json();
        },
        err => {
          console.error(err)
        }
    ); 
  }

  getDayData(){
    let link = 'http://localhost:23049/api/Appointments/GetAppointmentsByDay';
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let data = JSON.stringify(
      {
        DoctorID: this.selectedDoctor,
        Date: this.selectedDate,
      });

    this.http.post(link, data, options)
    .subscribe(
        data => {
          this.dayData = data.json();
        },
        err => {
          console.error(err)
        }
    ); 
  }

  changeDates(){
    var temp = new Date(this.selectedDate);
    var day = temp.getDay();
    var diff = temp.getDate() - day + (day == 0 ? -6:1); // adjust when day is sunday
    this.fromDate = new Date(temp.setDate(diff));
    this.toDate = new Date(temp.setDate(this.fromDate.getDate() + 6));
    this.days = new Array<Date>();
    for (let i = 0; i < 7; i++)
    {
      this.days[i] = new Date(temp.setDate(this.fromDate.getDate() + i)); 
    }
    this.state ='week';
    this.getWeekData();
 }

 selectDay(selecting:number){
    this.state ='day';
    this.dayTime ='AM';
    this.selectedDate = new Date(this.selectedDate.setDate(this.fromDate.getDate() + selecting));
    this.getDayData();
}

  goToAppointment(slot:number){
    this.state ='newAppointment';
    this.selectedSlot = slot;
    this.selectedAppDoctor = this.selectedDoctor;
    this.getDayData();
  }

  goBackToDay(){
    this.state ='day';
    this.getDayData();
  }

  addAppointment(){
    let link = 'http://localhost:23049/api/Appointments/AddAppointment';
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let data = JSON.stringify(
      {
        ParticipantID: this.selectedAppParticipant,
        DoctorID: this.selectedAppDoctor,
        Date: this.selectedDate,
        Time: this.selectedSlot
      });

    this.http.post(link, data, options)
    .subscribe(
        data => {
          this.snackBar.open("Success!", "The appointment was successfully created.", {
            duration: 7000,});
          this.goBackToDay();
        },
        err => {
          this.snackBar.open("Error!", "Sorry, an error ocurred while creating the appointment.", {
            duration: 7000,});
        }
    ); 
  }

  seeAppointments(day: number, slot:number){
    if(day != -1)
      this.selectedDate = new Date(this.selectedDate.setDate(this.fromDate.getDate() + day));
    this.dialogsService.appointments(this.selectedDate, this.doctors, this.participants, slot, this.selectedDoctor);
  }

  goTo(destination: string){
    this.router.navigate(['/' + destination]);
  }

}
