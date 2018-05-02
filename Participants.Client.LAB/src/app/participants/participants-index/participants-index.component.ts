import { Component, OnInit, Inject } from '@angular/core';
import { Http, Response, Headers, RequestOptions  } from '@angular/http';
import { Routes, RouterModule, Router } from '@angular/router';
import {MatSnackBar} from '@angular/material';
import { DialogsService } from '../../dialogs/dialogs.service';
import {CommonService} from '../../common/common.service';
import {AjaxService} from '../../common/ajax.service';

@Component({
  selector: 'app-participants-index',
  templateUrl: './participants-index.component.html',
  styleUrls: ['./participants-index.component.css']
})
export class ParticipantsIndexComponent implements OnInit {
  private displayedColumns = ['firstName', 'lastName', 'dob', 'email', 'phone', 'actions'];
  private dataSource = null;
  private loading = false;

  constructor(
    private router: Router,
    private http: Http,
    private dialogsService: DialogsService,
    public snackBar: MatSnackBar,
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

    this.refreshData();
  }

  deleteEntry(id: number){
    this.dialogsService
    .confirm('Please Confirm', 'Are you sure you want to delete this participant?')
    .subscribe(res => 
      {
        if(res == true)
        {
          this.ajaxService.deleteParticipant(id)
          .subscribe(data => {
            this.refreshData();
            this.snackBar.open("Success!", "The participant was successfully deleted.", {
              duration: 7000,});
          }, error => {
            this.snackBar.open("Error!", "Sorry, an error ocurred while deleting the participant.", {
              duration: 7000,});
          });
        }
      });
  }

  refreshData(){
    this.loading = true;
    this.ajaxService.getAllParticipants()
    .subscribe(
        data => {
          this.dataSource = data.json();
          this.loading = false;
        },
        err => {
          this.snackBar.open("Error!", "Sorry, an error ocurred accessing the data.", {
            duration: 7000,});
          console.error(err)
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
