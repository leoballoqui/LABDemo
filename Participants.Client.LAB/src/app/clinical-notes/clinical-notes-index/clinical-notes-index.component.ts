import { Component, OnInit, AfterViewInit, Inject, ViewChild, ViewContainerRef, ComponentFactoryResolver  } from '@angular/core';
import { Http, Response, Headers, RequestOptions  } from '@angular/http';
import { Routes, RouterModule, Router } from '@angular/router';
import { DialogsService } from '../../dialogs/dialogs.service';
import {MatSnackBar} from '@angular/material';
import {CommonService} from '../../common/common.service';
import {AjaxService} from '../../common/ajax.service';

import { NoteTestEditComponent } from '../clinical-notes-types/note-test/note-test-edit/note-test-edit.component';
import { NoteTestDetailsComponent } from '../clinical-notes-types/note-test/note-test-details/note-test-details.component';

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
  private displayedColumns = ['doctor', 'participant', 'visit', 'created', 'category', 'actions'];
  private loading = false;
  private showNote = false;

  @ViewChild('dynamic', { read: ViewContainerRef }) viewContainerRef: ViewContainerRef;

  constructor(
    private router: Router,
    private http: Http,
    public snackBar: MatSnackBar,
    private dialogsService: DialogsService,
    private commonService:CommonService,
    private ajaxService:AjaxService,
    private factoryResolver: ComponentFactoryResolver) { 

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
      this.notes = this.notes.filter(app => app.Doctor.ID === this.selectedDoctor)
    if(participantText != "")
      this.notes = this.notes.filter(app => app.Participant.FullName.toLowerCase().includes(participantText))
    this.showNote = false;
  }

  goToPreviousDay(){
    this.selectedDate = new Date(this.selectedDate.setDate(this.selectedDate.getDate() - 1))
    this.getClinicalNotes();
  }

  goToNextDay(){
    this.selectedDate = new Date(this.selectedDate.setDate(this.selectedDate.getDate() + 1))
    this.getClinicalNotes();
  }

  noteDetails(note: any){
    this.commonService.setSelectedNote(note);
    let component = this;
    this.showNote = true;
    setTimeout(function() {
      component.loadComponent(note.Category.ComponentName, true)
    }, 50);
  }

  noteEdit(note: any){
    this.commonService.setSelectedNote(note);
    this.commonService.setDoctors(this.doctors);
    this.commonService.setParticipants(this.participants);
    this.showNote = true;
    let component = this;
    setTimeout(function() {
      component.loadComponent(note.Category.ComponentName, false)
    }, 50);
  }

  loadComponent(componentName: string, isDetails: boolean){
    let type = null;
    type = this.resolveComponentType(componentName, isDetails);
    if(type == null)
    {
      this.showNote = false;
      return;
    }
    const factory = this.factoryResolver.resolveComponentFactory(type);
    const component = factory.create(this.viewContainerRef.parentInjector)
    this.viewContainerRef.insert(component.hostView)
  }

  resolveComponentType(componentName: string, isDetails: boolean) {
    switch(componentName.toLowerCase()){
      case "test":
        return isDetails ? NoteTestDetailsComponent : NoteTestEditComponent;
      default:
        return null;
    }
  }

  goBackToIndex(){
    this.showNote = false;
  }

  goTo(destination: string){
    this.router.navigate(['/' + destination]);
  }

}
