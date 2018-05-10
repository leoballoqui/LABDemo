import { Component, OnInit, Inject } from '@angular/core';
import { Http, Response, Headers, RequestOptions  } from '@angular/http';
import { Routes, RouterModule, Router } from '@angular/router';
import { DialogsService } from '../../dialogs/dialogs.service';
import {MatSnackBar} from '@angular/material';
import {CommonService} from '../../common/common.service';
import {AjaxService} from '../../common/ajax.service';

@Component({
  selector: 'app-calendar-index',
  templateUrl: './calendar-index.component.html',
  styleUrls: ['./calendar-index.component.css']
})
export class CalendarIndexComponent implements OnInit {
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
  private doctorsAvailability : Array<any>;
  private doctorAvailability : Array<any>;
  private selectedSlot: number = 0;
  private selectedAppDoctor: number = 0;
  private selectedAppParticipant: number = 0;
  private loading = false;

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

    this.selectedDate = new Date();
    this.getDoctors();
    this.getParticipants();
    this.changeDates();
  }

  goToDay(value: number ){
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
    this.ajaxService.getAllDoctors()
    .subscribe(
        data => {
          this.doctors = data.json();
        },
        err => {
          this.snackBar.open("Error!", "Sorry, an error ocurred accessing the doctors data.", {
            duration: 7000,});
        } 
    ); 
  }

  getParticipants(){
    this.ajaxService.getAllParticipants()
    .subscribe(
        data => {
          this.participants = data.json();
        },
        err => {
          this.snackBar.open("Error!", "Sorry, an error ocurred accessing the participants data.", {
            duration: 7000,});
        } 
    ); 
  }

  doctorSelected(){
    this.selectedAppDoctor = this.selectedDoctor;
    this.refreshData();
    this.getDoctorsAvailability();
  }

  refreshData(){
    if(this.state == "week")
      this.getWeekData();
    else if(this.state == "day")
      this.getDayData();
  }

  getWeekData(){
    let data = JSON.stringify(
    {
      DoctorID: this.selectedDoctor,
      Date: this.selectedDate,
    });

    this.loading = true;
    this.ajaxService.getWeekData(data)
    .subscribe(
        data => {
          this.weekData  = data.json();
          this.loading = false;
        },
        err => {
          this.snackBar.open("Error!", "Sorry, an error ocurred accessing the appointments data.", {
            duration: 7000,});
            this.loading = false;
        }
    ); 
  }

  getDayData(){
    let data = JSON.stringify(
      {
        DoctorID: this.selectedDoctor,
        Date: this.selectedDate,
      });

    this.loading = true;
    this.ajaxService.getDayData(data)
    .subscribe(
        data => {
          this.dayData = data.json();
          this.loading = false;
        },
        err => {
          this.snackBar.open("Error!", "Sorry, an error ocurred accessing the appointments data.", {
            duration: 7000,});
            this.loading = false;
        }
    ); 
  }

  getDoctorsAvailability(){
    this.loading = true;
    this.ajaxService.getDoctorsAvailability(this.selectedDate)
    .subscribe(
        data => {
          this.doctorsAvailability = data.json();
          this.resolveDoctorAvailability();
          this.loading = false;
        },
        err => {
          this.snackBar.open("Error!", "Sorry, an error ocurred accessing the appointments data.", {
            duration: 7000,});
            this.loading = false;
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
    this.getDoctorsAvailability();
  }

  goBackToDay(){
    this.state ='day';
    this.getDayData();
  }

  addAppointment(){
    let data = JSON.stringify(
      {
        ParticipantID: this.selectedAppParticipant,
        DoctorID: this.selectedAppDoctor,
        Date: this.selectedDate,
        TimeSlot: this.selectedSlot
      });

    this.loading = true;
    this.ajaxService.addAppointment(data)
    .subscribe(
        data => {
          this.snackBar.open("Success!", "The appointment was successfully created.", {
            duration: 7000,});
          this.loading = false;
          this.goBackToDay();
        },
        err => {
          this.snackBar.open("Error!", "Sorry, an error ocurred while creating the appointment.", {
            duration: 7000,});
          this.loading = false;
        }
    ); 
  }

  seeAppointments(day: number, slot:number){
    if(day != -1)
      this.selectedDate = new Date(this.selectedDate.setDate(this.fromDate.getDate() + day));
    this.dialogsService.appointments(this.selectedDate, this.doctors, this.participants, slot, this.selectedDoctor);
  }

  resolveDoctorAvailability(){
    this.doctorAvailability = null;
    if(this.doctorsAvailability != null && this.doctorsAvailability != undefined && this.selectedAppDoctor > 0)
    {
      let selected = this.doctorsAvailability.filter(avail => avail.DoctorID === this.selectedAppDoctor);
      if(selected.length > 0)
      {
        this.doctorAvailability = selected[0].SlotsAvailability;
        if(this.selectedSlot > -1)
        {
          let slot = this.doctorAvailability.filter(avail => avail.Index === this.selectedSlot);
          if(slot.length > 0 && slot[0].isAvailable == false )
            this.selectedSlot = -1;
        }
      }
      else
        this.snackBar.open("Error!", "Sorry, an error ocurred while resolving the selected doctor's availability.", {
          duration: 7000,});
    }
  }

  goTo(destination: string){
    this.router.navigate(['/' + destination]);
  }

}
