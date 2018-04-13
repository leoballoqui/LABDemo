import { Component, OnInit, Inject } from '@angular/core';
import { Http, Response, Headers, RequestOptions  } from '@angular/http';
import { Routes, RouterModule, Router } from '@angular/router';
import { DialogsService } from '../../dialogs/dialogs.service';
import {MatSnackBar} from '@angular/material';
import {CommonService} from '../../common/common.service';
import {ParticipantsService} from '../participants.service';

@Component({
  selector: 'app-participants-index',
  templateUrl: './participants-index.component.html',
  styleUrls: ['./participants-index.component.css']
})
export class ParticipantsIndexComponent implements OnInit {
  private displayedColumns = ['firstName', 'lastName', 'dob', 'email', 'phone', 'actions'];
  private dataSource = null;
  private loading = false;
  private commonService:CommonService;
  private participantsService: ParticipantsService;

  constructor(
    private router: Router,
    private http: Http,
    private dialogsService: DialogsService,
    public snackBar: MatSnackBar,
    @Inject(CommonService)commonService:CommonService,
    @Inject(ParticipantsService)participantsService:ParticipantsService) { 
      this.commonService = commonService;
      this.participantsService = participantsService;
  }

  ngOnInit() {
    if (!this.commonService.isAuthorized())
    {
      this.commonService.logOut();
      this.router.navigate(['/login']);
    }

    this.refreshData();
  }

  deleteEntry(id: number){
    this.dialogsService
    .confirm('Please Confirm', 'Are you sure you want to delete this participant?')
    .subscribe(res => 
      {
        if(res == true)
        {
          this.participantsService.deleteParticipant(id)
          .subscribe(data => {
            this.refreshData();
            this.snackBar.open("Success!", "The participant was successfully deleted.", {
              duration: 7000,});
          }, error => {
              console.log("Oooops!");
          });
        }
      });
  }

  refreshData(){
    this.loading = true;
    this.participantsService.getAllParticipants()
    .subscribe(
        data => {
          this.dataSource = data.json();
          this.loading = false;
        },
        err => {
          this.snackBar.open("Error!", "Sorry, an error ocurred accessing the data.", {
            duration: 7000,});
          this.loading = false;
        }
    ); 
  }

  goTo(destination: string){
    this.router.navigate(['/' + destination]);
  }

  goToAction(destination: string, participant:any){
    this.commonService.setSelectedParticipant(participant);
    this.goTo(destination);
  }
}
