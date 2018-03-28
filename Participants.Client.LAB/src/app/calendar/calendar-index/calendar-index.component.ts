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
  private days : Array<Date>;
  private state : string ='week';
  private weekData : Array<any>;


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

  getWeekData(){
    let link = 'http://localhost:23049/api/Appointments/GetAppointmentsByWeek';
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    this.http.post(link, this.selectedDate, options)
    .subscribe(
        data => {
          //this.dataSource = data.json();
          this.weekData  = data.json();
        }, //For Success Response
        err => {
          console.error(err)
        } //For Error Response
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
    this.getWeekData();
 }



  goTo(destination: string){
    this.router.navigate(['/' + destination]);
  }

}
