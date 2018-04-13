import { Component, OnInit, Inject } from '@angular/core';
import { Http, Response, Headers, RequestOptions  } from '@angular/http';
import { Routes, RouterModule, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { LoginService } from '../login.service';
import {CommonService} from '../../common/common.service';

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
  private loginService:LoginService;
  private commonService:CommonService;

  constructor(    
    private http: Http,
    private router: Router,
    private snackBar: MatSnackBar,
    @Inject(LoginService)loginService:LoginService,
    @Inject(CommonService)commonService:CommonService) { 
      this.loginService = loginService;
      this.commonService = commonService;
  }

  ngOnInit() {
  }

  register(){
    this.loginService.register(this.userID, this.password, this.confirmPassword)
    .subscribe(
        data => {
          this.snackBar.open("Success!", "The user was successfully created.", {
            duration: 7000,});
            this.isLogging = true;
        },
        err => {
          this.snackBar.open("Error!", "Sorry, an error ocurred while creating the user.", {
            duration: 7000,});
        }
    );
  }
  
  login(){
    this.loginService.login(this.userID, this.password)
    .subscribe(
        data => {
          this.commonService.setAuthData(data.json().access_token, this.userID, new Date(data.json()['.expires']));
          this.router.navigate(['/home']);
        },
        err => {
          console.log(err);
          this.snackBar.open("Error!", JSON.parse(err.text()).error_description, {
            duration: 7000,});
        }
    );
  }
}
