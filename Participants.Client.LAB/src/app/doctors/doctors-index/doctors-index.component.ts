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
  private commonService:CommonService;
  private doctorsService: DoctorsService;
  private loading = false;

  constructor(
    private router: Router,
    private http: Http,
    private dialogsService: DialogsService,
    public snackBar: MatSnackBar,
    @Inject(CommonService)commonService:CommonService,
    @Inject(DoctorsService)doctorService:DoctorsService) { 
      this.commonService = commonService;
      this.doctorsService = doctorService;
  }

  ngOnInit() {
    this.refreshData();
  }

  deleteEntry(id: number){
    this.dialogsService
    .confirm('Please Confirm', 'Are you sure you want to delete this doctor?')
    .subscribe(res => 
      {
        if(res == true)
        {
          this.doctorsService.deleteDoctor(id)
          .subscribe(data => {
            this.refreshData();
            this.snackBar.open("Success!", "The doctor was successfully deleted.", {
              duration: 7000,});
          }, error => {
            this.snackBar.open("Error!", "Sorry, an error ocurred while deleting the doctor.", {
              duration: 7000,});
          });
        }
      });
  }

  refreshData(){
    this.loading = true;
    this.doctorsService.getAllDoctors()
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

  goToAction(destination: string, doctor:any){
    this.commonService.setSelectedDoctor(doctor);
    this.goTo(destination);
  }
}
