import { Component, OnInit, Inject } from '@angular/core';
import { Http, Response, Headers, RequestOptions  } from '@angular/http';
import { Routes, RouterModule, Router } from '@angular/router';
import { DialogsService } from '../../dialogs/dialogs.service';
import {MatSnackBar} from '@angular/material';
import {CommonService} from '../../common/common.service';
import {DoctorsService} from '../doctors.service';

@Component({
  selector: 'app-doctors-index',
  templateUrl: './doctors-index.component.html',
  styleUrls: ['./doctors-index.component.css']
})
export class DoctorsIndexComponent implements OnInit {
  private displayedColumns = ['fullName', 'phone', 'secphone', 'email', 'actions'];
  private dataSource = null;
  private commonrService:CommonService;
  private loading = false;

  constructor(
    private router: Router,
    private http: Http,
    private dialogsService: DialogsService,
    public snackBar: MatSnackBar,
    @Inject(CommonService)commonService:CommonService) { 
      this.commonrService = commonService;
  }

  ngOnInit() {
    this.refreshData();
  }

  deleteEntry(id: string){
    this.dialogsService
    .confirm('Please Confirm', 'Are you sure you want to delete this doctor?')
    .subscribe(res => 
      {
        if(res == true)
        {
          let link = 'http://localhost:23049/api/Doctors/DeleteDoctor';
          let headers = new Headers({ 'Content-Type': 'application/json' });
          let options = new RequestOptions({ headers: headers });

          this.http.post(link, id, options)
          .subscribe(data => {
            console.log("All Ok!");
            this.refreshData();
            this.snackBar.open("Success!", "The doctor was successfully deleted.", {
              duration: 100000,});
          }, error => {
              console.log("Oooops!");
          });
        }
      });
  }

  refreshData(){
    this.loading = true;
    this.http.get('http://localhost:23049/api/Doctors/GetDoctors')
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

  goToAction(destination: string, doctor:any){
    this.commonrService.setSelectedDoctor(doctor);
    this.goTo(destination);
  }
}
