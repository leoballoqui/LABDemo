import { Component, OnInit, Inject } from '@angular/core';
import { Http, Response, Headers, RequestOptions  } from '@angular/http';
import { Routes, RouterModule, Router } from '@angular/router';
import {CommonService} from '../../../../common/common.service';

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
    private commonService:CommonService) { 

  }

  ngOnInit() {
    if (!this.commonService.isAuthorized())
    {
      this.commonService.logOut();
      this.router.navigate(['/login']);
    }
    this.resolveData();
  }

  resolveData(){
    this.doctors = this.commonService.getDoctors();
    this.participants = this.commonService.getParticipants();
    this.note = this.commonService.getSelectedNote();
    this.data = JSON.parse(this.note.Data);
    this.selectedNoteDoctor = this.note.Doctor.ID;
    this.selectedNoteParticipant = this.note.Participant.ID;
  }

  goTo(destination: string){
    this.router.navigate(['/' + destination]);
  }

}
