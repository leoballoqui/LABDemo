import { Component, OnInit, Inject } from '@angular/core';
import { Http, Response, Headers, RequestOptions  } from '@angular/http';
import { Routes, RouterModule, Router } from '@angular/router';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-login-index',
  templateUrl: './login-index.component.html',
  styleUrls: ['./login-index.component.css']
})
export class LoginIndexComponent implements OnInit {

  private isLogging:boolean = true;
  private userID:string = 'leoballoqui@leo.com';
  private password:string = 'Sponsor123!';
  private confirmPassword:string;

  constructor(    
    private http: Http,
    public snackBar: MatSnackBar,) { 
  }

  ngOnInit() {


  }

  register(){
    let link = 'http://localhost:23049/api/Account/Register';
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let data = JSON.stringify(
    {
      Email: this.userID,
      Password: this.password,
      ConfirmPassword: this.confirmPassword,
    });

    this.http.post(link, data, options)
    .subscribe(
        data => {
          this.snackBar.open("Success!", "The user was successfully created.", {
            duration: 7000,});
        },
        err => {
          this.snackBar.open("Error!", "Sorry, an error ocurred while creating the user.", {
            duration: 7000,});
        }
    ); 
  }

  login(){
    let link = 'http://localhost:23049/Token';
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let data = JSON.stringify(
    {
      grant_type: 'password',
      client_id: 'web',
      username: this.userID,
      password: this.password
    });

    this.http.post(link, data, options)
    .subscribe(
        data => {
          this.snackBar.open("Success!", "The user was successfully created." + data.json().access_token, {
            duration: 7000,});
        },
        err => {
          alert(err.json())
          this.snackBar.open("Error!", "Sorry, an error ocurred while creating the user.", {
            duration: 7000,});
        }
    ); 
  }



}
