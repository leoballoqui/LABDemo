import { Component, OnInit, Inject } from '@angular/core';
import { Http, Response, Headers, RequestOptions  } from '@angular/http';
import { Routes, RouterModule, Router } from '@angular/router';
import {CommonService} from '../../../../common/common.service';

@Component({
  selector: 'app-note-test-details',
  templateUrl: './note-test-details.component.html',
  styleUrls: ['./note-test-details.component.css']
})
export class NoteTestDetailsComponent implements OnInit {

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
      return;
    }
    this.resolveData();
  }

  resolveData(){
    this.note = this.commonService.getSelectedNote();
    this.data = JSON.parse(this.note.Data);
  }

  goTo(destination: string){
    this.router.navigate(['/' + destination]);
  }

}
