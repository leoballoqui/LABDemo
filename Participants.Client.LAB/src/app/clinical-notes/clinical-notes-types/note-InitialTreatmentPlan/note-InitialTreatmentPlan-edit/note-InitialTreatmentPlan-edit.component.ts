import { Component, OnInit, Inject, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Http, Response, Headers, RequestOptions  } from '@angular/http';
import { Routes, RouterModule, Router } from '@angular/router';
import {MatSnackBar} from '@angular/material';
import {CommonService} from '../../../../common/common.service';
import {AjaxService} from '../../../../common/ajax.service';
import { registerDynamicClinicNoteType } from '../../dynamic-types-registrar';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/pairwise';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-note-InitialTreatmentPlan-edit',
  templateUrl: './note-InitialTreatmentPlan-edit.component.html',
  styleUrls: ['./note-InitialTreatmentPlan-edit.component.css']
})

export class NoteInitialTreatmentPlanEditComponent implements OnInit {

  private doctors : Array<any>;
  private participants : Array<any>;
  private selectedDate : Date;
  private selectedNoteDoctor : number;
  private selectedNoteParticipant : number;
  private note : any;
  private data : any;
  private signature : string;
  @ViewChild('canvas') public canvas: ElementRef;
  private cx: CanvasRenderingContext2D;
  private signatureType: string = "Draw";
  private signatureApproved: boolean = false;
  

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

    const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
    this.cx = canvasEl.getContext('2d');
    canvasEl.width = 400;
    canvasEl.height = 200;

    this.cx.lineWidth = 3;
    this.cx.lineCap = 'round';
    this.cx.strokeStyle = '#000';

    this.captureEvents(canvasEl);

    //canvasEl.toDataURL();
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
      this.signature = this.data.Signature;
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
    
    if(this.data.Signature && this.data.Signature != this.signature)
      this.saveSignature();

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
    });
  }

  saveSignature() {
    let images : any = {};
    images.newImage = this.data.Signature;
    images.oldImage = this.signature;
    this.ajaxService.approveSignature(JSON.stringify(images));
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
    this.note.Summary = this.data.General;
  }

  cancel() {
    this.commonService.childComponentDone("back");
  }

  goTo(destination: string){
    this.router.navigate(['/' + destination]);
  }

  onUploadFinished(event){
    if(event.serverResponse && event.serverResponse.status)
      if(event.serverResponse.status == "200")
        this.data.Signature = event.serverResponse.response._body.replace(/"/g,"");
  }

  onRemoved(event){
    this.data.Signature = this.signature;
  }

  private captureEvents(canvasEl: HTMLCanvasElement) {
    Observable
      .fromEvent(canvasEl, 'mousedown')
      .switchMap((e) => {
        return Observable
          .fromEvent(canvasEl, 'mousemove')
          .takeUntil(Observable.fromEvent(canvasEl, 'mouseup'))
          .pairwise()
      })
      .subscribe((res: [MouseEvent, MouseEvent]) => {
        const rect = canvasEl.getBoundingClientRect();
  
        const prevPos = {
          x: res[0].clientX - rect.left,
          y: res[0].clientY - rect.top
        };
  
        const currentPos = {
          x: res[1].clientX - rect.left,
          y: res[1].clientY - rect.top
        };
  
        this.drawOnCanvas(prevPos, currentPos);
      });
  }

  private drawOnCanvas(prevPos: { x: number, y: number }, currentPos: { x: number, y: number }) {
    if (!this.cx) { return; }

    this.cx.beginPath();

    if (prevPos) {
      this.cx.moveTo(prevPos.x, prevPos.y); // from
      this.cx.lineTo(currentPos.x, currentPos.y);
      this.cx.stroke();
    }
  }

  approveDraw(){
    const canvasSig: HTMLCanvasElement = this.canvas.nativeElement;
    canvasSig.toDataURL();
    let blob : Blob = new Blob();
    let component = this;
    canvasSig.toBlob( function(blob) {
      let file : File = new File([blob], "sig.png"); 
      component.ajaxService.uploadSignature(file).subscribe(data => {
        component.signatureApproved = true;
        component.data.Signature = data["_body"].replace(/"/g,"");
        component.snackBar.open("Success!", "The signature was approved.", {
          duration: 7000,});
      }, error => {
        component.snackBar.open("Error!", "Sorry, an error ocurred while trying to upload the signature.", {
            duration: 7000,});
        });;
    }, 'image/png');
  }

  resetDraw(){
    const canvasSig: HTMLCanvasElement = this.canvas.nativeElement;
    const context = canvasSig.getContext('2d');
    context.clearRect(0, 0, canvasSig.width, canvasSig.height);
    this.signatureApproved = false;
  }

}

registerDynamicClinicNoteType(NoteInitialTreatmentPlanEditComponent, "NoteInitialTreatmentPlanEditComponent");
