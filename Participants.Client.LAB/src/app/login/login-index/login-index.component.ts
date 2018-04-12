import { Component, OnInit, Inject } from '@angular/core';
import { Http, Response, Headers, RequestOptions  } from '@angular/http';
import { Routes, RouterModule, Router } from '@angular/router';
import {MatSnackBar} from '@angular/material';
import {LoginService} from '../login.service';

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

  constructor(    
    private http: Http,
    public snackBar: MatSnackBar,
    @Inject(LoginService)pService:LoginService) { 
      this.loginService = pService;
  }

  ngOnInit() {


  }

  register(){
    /*this.loginService.register(this.userID, this.password, this.confirmPassword)
    .subscribe(
        data => {
          this.snackBar.open("Success!", "The user was successfully created.", {
            duration: 7000,});
        },
        err => {
          this.snackBar.open("Error!", "Sorry, an error ocurred while creating the user.", {
            duration: 7000,});
        }
    ); */
    this.loginService.register2(this.userID, this.password, this.confirmPassword);
  }

  login(){
    //let link = '/LABDemoAPI/Token';
    let link =  'http://localhost:23049/Token'
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    let data = "userName=" + encodeURIComponent(this.userID) +
               "&password=" + encodeURIComponent(this.password) +
               "&grant_type=password"
               "&client_id=web";

    this.http.post(link, data, options)
    .subscribe(
        data => {
          this.snackBar.open("Success!", "The user was successfully created." + data.json().access_token, {
            duration: 7000,});
        },
        err => {
          alert(err.access_token)
          this.snackBar.open("Error!", "Sorry, an error ocurred while creating the user.", {
            duration: 7000,});
        }
    ); 
  }



}
