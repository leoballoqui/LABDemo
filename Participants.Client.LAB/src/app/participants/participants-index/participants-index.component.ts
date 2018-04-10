import { Component, OnInit, Inject } from '@angular/core';
import { Http, Response, Headers, RequestOptions  } from '@angular/http';
import { Routes, RouterModule, Router } from '@angular/router';
import { DialogsService } from '../../dialogs/dialogs.service';
import {MatSnackBar} from '@angular/material';
import {ParticipantsService} from '../participants.service';

@Component({
  selector: 'app-participants-index',
  templateUrl: './participants-index.component.html',
  styleUrls: ['./participants-index.component.css']
})
export class ParticipantsIndexComponent implements OnInit {
  private displayedColumns = ['firstName', 'lastName', 'dob', 'email', 'phone', 'actions'];
  private dataSource = null;
  private participantsService:ParticipantsService;
  private loading = false;

  constructor(
    private router: Router,
    private http: Http,
    private dialogsService: DialogsService,
    public snackBar: MatSnackBar,
    @Inject(ParticipantsService)pService:ParticipantsService) { 
      this.participantsService = pService;
  }

  ngOnInit() {
    this.refreshData();
  }

  deleteEntry(id: string){
    this.dialogsService
    .confirm('Please Confirm', 'Are you sure you want to delete this participant?')
    .subscribe(res => 
      {
        if(res == true)
        {
          let link = 'http://localhost:23049/api/Participants/DeleteParticipant';
          let headers = new Headers({ 'Content-Type': 'application/json' });
          let options = new RequestOptions({ headers: headers });

          this.http.post(link, id, options)
          .subscribe(data => {
            console.log("All Ok!");
            this.refreshData();
            this.snackBar.open("Success!", "The participant was successfully deleted.", {
              duration: 100000,});
          }, error => {
              console.log("Oooops!");
          });
        }
      });
  }

  refreshData(){
    this.loading = true;
    //this.http.get('http://localhost:23049/api/Participants/GetParticipants')
    this.http.get('/LABDemoAPI/api/Participants/GetParticipants')
    
    .subscribe(
        data => {
          this.dataSource = data.json();
          this.loading = false;
        }, //For Success Response
        err => {
          console.error(err)
          this.loading = false;
        } //For Error Response
    ); 
  }

  goTo(destination: string){
    this.router.navigate(['/' + destination]);
  }

  goToAction(destination: string, /*id: string = ''*/iteme:any){
    /*this.dataSource.forEach(m => {
      if(m.ID == id)
        item = m;
    });*/
    this.participantsService.setSelected(iteme);
    this.goTo(destination);
  }
}
