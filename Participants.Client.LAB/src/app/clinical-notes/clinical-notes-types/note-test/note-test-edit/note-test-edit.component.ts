import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { Http, Response, Headers, RequestOptions  } from '@angular/http';
import { Routes, RouterModule, Router } from '@angular/router';
import {MatSnackBar} from '@angular/material';
import {CommonService} from '../../../../common/common.service';
import {AjaxService} from '../../../../common/ajax.service';
import { registerDynamicClinicNoteType } from '../../dynamic-types-registrar';

@Component({
  selector: 'app-note-test-edit',
  templateUrl: './note-test-edit.component.html',
  styleUrls: ['./note-test-edit.component.css']
})

export class NoteTestEditComponent implements OnInit {

  private doctors : Array<any>;
  private participants : Array<any>;
  private selectedDate : Date;
  private selectedNoteDoctor : number;
  private selectedNoteParticipant : number;
  private note : any;
  private data : any;

  constructor(
    private router: Router,
    private http: Http,
    private snackBar: MatSnackBar,
    private commonService:CommonService,
    private ajaxService:AjaxService,) { 
  }

  ngOnInit() {
    if (!this.commonService.isAuthorized())
    {
      this.commonService.logOut();
      this.router.navigate(['/login']);
      return;
    }
    this.resolveData();
  }

  resolveData(){
    this.doctors = this.commonService.getDoctors();
    this.participants = this.commonService.getParticipants();
    this.note = this.commonService.getSelectedNote();
    if(this.note != null && this.note.IsNew != true)
    {
      this.data = JSON.parse(this.note.Data);
      this.selectedNoteDoctor = this.note.Doctor.ID;
      this.selectedNoteParticipant = this.note.Participant.ID;
      this.selectedDate = this.note.VisitDate;
    }
    else
    {
      this.selectedNoteDoctor = 0;
      this.selectedNoteParticipant = 0;
      this.data = {};
      this.selectedDate = new Date();
    }
  }

  complete() {
    this.note.DoctorID = this.selectedNoteDoctor;
    this.note.ParticipantID = this.selectedNoteParticipant;
    this.note.VisitDate = this.selectedDate;
    this.resolveSummary();
    this.note.data = JSON.stringify(this.data);
    let data = JSON.stringify(this.note);
    
    if(this.note.ID == null || this.note.ID == 0)
      this.save(data);
    else
      this.update(data);
    
  }

  save(data : string) {
    this.ajaxService.addClinicalNote(data)
    .subscribe(data => {
        this.snackBar.open("Success!", "The note was successfully created.", {
          duration: 7000,});
          this.commonService.childComponentDone("complete");
    }, error => {
      this.snackBar.open("Error!", "Sorry, an error ocurred while trying to create the note.", {
        duration: 7000,});
       // this.commonService.childComponentDone("complete");
    });
  }

  update(data : string) {
    this.ajaxService.updateClinicalNote(data)
    .subscribe(data => {
        this.snackBar.open("Success!", "The note was successfully updated.", {
          duration: 7000,});
          this.commonService.childComponentDone("complete");
    }, error => {
      this.snackBar.open("Error!", "Sorry, an error ocurred while trying to update the note.", {
        duration: 7000,});
        //this.commonService.childComponentDone("complete");
    });
  }

  resolveSummary() {
    this.note.Summary = this.data.Brief;
  }

  cancel() {
    this.commonService.childComponentDone("back");
  }

  goTo(destination: string){
    this.router.navigate(['/' + destination]);
  }

}

registerDynamicClinicNoteType(NoteTestEditComponent, "NoteTestEditComponent");