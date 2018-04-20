import { Component, OnInit, Inject } from '@angular/core';
import { Http, Response, Headers, RequestOptions  } from '@angular/http';
import { Routes, RouterModule, Router } from '@angular/router';
import { DialogsService } from '../../dialogs/dialogs.service';
import {MatSnackBar} from '@angular/material';
import {CommonService} from '../../common/common.service';
import {AjaxService} from '../../common/ajax.service';

@Component({
  selector: 'app-clinical-notes-index',
  templateUrl: './clinical-notes-index.component.html',
  styleUrls: ['./clinical-notes-index.component.css']
})
export class ClinicalNotesComponent implements OnInit {
  private doctors : any;
  private participants : any;
  private notes : Array<any>;
  private allNotes : Array<any>;
  private selectedDate: Date; 
  private selectedDoctor : number = 0;
  private participant: string = "";
  private displayedColumns = ['doctor', 'participant', 'created', 'category', 'actions'];
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
    }

    this.notes = new Array<any>();
    this.selectedDate = new Date();
    this.getDoctors();
    this.getParticipants();
    this.getClinicalNotes();
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

  getClinicalNotes(){
    this.loading = true;
    this.ajaxService.getClinicalNotesByDay(this.selectedDate)
    .subscribe(
        data => {
          this.allNotes = data.json();
          this.filterNotes();
          this.loading = false;
        },
        err => {
          this.snackBar.open("Error!", "Sorry, an error ocurred accessing the data.", {
            duration: 7000,});
          this.loading = false;
        }
    ); 
  }

  filterNotes(){
    this.notes = this.allNotes;
    let participantText = this.participant.trim().toLowerCase();
    if(this.selectedDoctor > 0)
      this.notes = this.notes.filter(app => app.DoctorID === this.selectedDoctor)
    if(participantText != "")
      this.notes = this.notes.filter(app => app.ParticipantName.toLowerCase().includes(participantText))
  }

  goToPreviousDay(){
    this.selectedDate = new Date(this.selectedDate.setDate(this.selectedDate.getDate() - 1))
    this.getClinicalNotes();
  }

  goToNextDay(){
    this.selectedDate = new Date(this.selectedDate.setDate(this.selectedDate.getDate() + 1))
    this.getClinicalNotes();
  }

  goTo(destination: string){
    this.router.navigate(['/' + destination]);
  }

}
