import { Component, OnInit, AfterViewInit, Inject, ViewChild, ViewContainerRef, ComponentFactoryResolver  } from '@angular/core';
import { Http, Response, Headers, RequestOptions  } from '@angular/http';
import { Routes, RouterModule, Router } from '@angular/router';
import { DialogsService } from '../../dialogs/dialogs.service';
import {MatSnackBar} from '@angular/material';
import {CommonService} from '../../common/common.service';
import {AjaxService} from '../../common/ajax.service';
import { Subscription } from 'rxjs/Subscription'

//Add references to al notes components here (both 'Details' and 'Edit')
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
  private categories : any;
  private notes : Array<any>;
  private allNotes : Array<any>;
  private selectedDate: Date; 
  private selectedDoctor : number = 0;
  private selectedCategory : number = 0;
  private selectedNewCategory : number = 0;
  private participant: string = "";
  private subscription: Subscription;
  private displayedColumns = ['doctor', 'participant', 'visit', 'summary', 'category', 'actions'];
  private loading = false;
  private showNote = false;
  private newNoteCategoryError = false;
  private detailsMode = false;
  
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
      return;
    }

    let component = this;
    this.subscription = this.commonService.childComponentNotifier().subscribe(value => 
    {
      component.childComponentDone(value);
    });

    this.notes = new Array<any>();
    this.selectedDate = new Date();
    this.selectedNewCategory = -1;
    this.getDoctors();
    this.getParticipants();
    this.getCategories();
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

  getCategories(){
    this.ajaxService.getAllCategories()
    .subscribe(
        data => {
          this.categories = data.json();
        },
        err => {
          this.snackBar.open("Error!", "Sorry, an error ocurred accessing the categories data.", {
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
          this.snackBar.open("Error!", "Sorry, an error ocurred while accessing the data.", {
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
    if(this.selectedCategory > 0)
      this.notes = this.notes.filter(app => app.Category.ID === this.selectedCategory)
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

  detailsNote(note: any){
    this.commonService.setSelectedNote(note);
    let component = this;
    this.showNote = true;
    setTimeout(function() {
      component.loadComponent(note.Category.ComponentName, true)
    }, 50);
  }

  editNote(note: any){
    if(note != null)
      this.commonService.setSelectedNote(note);
    else // Shortcut drom "Details"
      note = this.commonService.getSelectedNote();
    this.commonService.setDoctors(this.doctors);
    this.commonService.setParticipants(this.participants);
    this.showNote = true;
    let component = this;
    setTimeout(function() {
      component.loadComponent(note.Category.ComponentName, false)
    }, 50);
  }

  cloneNote(note: any){
    let cloneNote : any = null;
    if(note != null)
      cloneNote = note;
    else // Shortcut drom "Details"
    {
      this.showNote = false;
      cloneNote = this.commonService.getSelectedNote();
    }

    cloneNote.ID = 0;
    this.commonService.setSelectedNote(cloneNote);
    this.commonService.setDoctors(this.doctors);
    this.commonService.setParticipants(this.participants);
    this.showNote = true;
    let component = this;
    setTimeout(function() {
      component.loadComponent(cloneNote.Category.ComponentName, false)
    }, 50);
  }

  deleteNote(id: number){
    this.ajaxService.deleteClinicalNote(id)    
    .subscribe(
      data => {
        this.snackBar.open("Success!", "The note was successfully removed.", {
          duration: 7000,});
        this.getClinicalNotes();
      },
      err => {
        this.snackBar.open("Error!", "Sorry, an error ocurred while removing the note.", {
          duration: 7000,});
      }
    ); 
  }

  addNote(){
    if(this.selectedNewCategory < 0)
    {
      this.newNoteCategoryError = true;
      this.snackBar.open("Error!", "Please select a note category.", {
        duration: 3500,});
    }
    else
    {
      let newNote : any = {};
      newNote.Category = this.categories[this.selectedNewCategory];
      newNote.IsNew = true;
      this.commonService.setSelectedNote(newNote);
      this.commonService.setDoctors(this.doctors);
      this.commonService.setParticipants(this.participants);
      let component = this;
      this.showNote = true;
      setTimeout(function() {
        component.loadComponent(newNote.Category.ComponentName, false)
      }, 50);
    }
  }

  shortcutToNote(clone: string){
    let note : any = this.commonService.getSelectedNote();
    this.showNote = false;
    this.viewContainerRef.clear();
    if(clone)
      this.cloneNote(note);
    else
      this.editNote(note);
  }

  categorySelected(){
    if(this.selectedNewCategory >= 0)
      this.newNoteCategoryError = false;
  }

  loadComponent(componentName: string, isDetails: boolean){
    let type = null;
    type = this.resolveComponentType(componentName, isDetails);
    this.detailsMode = isDetails;
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

  childComponentDone(message: string) {
    if(message == "complete")
    {
      this.getClinicalNotes();
    }
    this.showNote = false;
  }

}
