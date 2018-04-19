import { Component, OnInit, Inject } from '@angular/core';
import { Http, Response, Headers, RequestOptions  } from '@angular/http';
import { Routes, RouterModule, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import {CommonService} from '../../common/common.service';
import {AjaxService} from '../../common/ajax.service';

@Component({
  selector: 'app-login-index',
  templateUrl: './login-index.component.html',
  styleUrls: ['./login-index.component.css']
})
export class LoginIndexComponent implements OnInit {

  private isLogging:boolean = true;
  private userID:string = 'leo@leo.com';
  private password:string = 'Password1!';
  private confirmPassword:string = 'Password1!';
  private loading = false;

  constructor(    
    private http: Http,
    private router: Router,
    private snackBar: MatSnackBar,
    private commonService:CommonService,
    private ajaxService:AjaxService) { 

  }

  ngOnInit() {
    if(this.router.url.includes("logout"))
    {
      this.logout();
      this.router.navigate(['/login'])
    }
  }

  register(){
    this.loading = true;
    this.ajaxService.register(this.userID, this.password, this.confirmPassword)
    .subscribe(
        data => {
          this.snackBar.open("Success!", "The user was successfully created.", {
            duration: 7000,});
            this.isLogging = true;
            this.loading = false;
        },
        err => {
          this.snackBar.open("Error!", "Sorry, an error ocurred while creating the user.", {
            duration: 7000,});
            this.loading = false;
        }
    );
  }
  
  login(){
    this.loading = true;
    this.ajaxService.login(this.userID, this.password)
    .subscribe(
        data => {
          this.commonService.setAuthData(data.json().access_token, this.userID, new Date(data.json()['.expires']));
          this.loading = false;
          this.router.navigate(['/home']);
        },
        err => {
          this.snackBar.open("Error!", JSON.parse(err.text()).error_description, {
            duration: 7000,});
          this.loading = false;
        }
    );
  }

  logout(){
    this.commonService.logOut();
  }

}
