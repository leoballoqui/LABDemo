import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

    constructor(private http: Http) { 
  
    }
  
    register(userID, password, confirmPassword){
      let link = '/api/Account/Register';
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      let data = JSON.stringify(
      {
        Email: userID,
        Password: password,
        ConfirmPassword: confirmPassword,
      });
  
      return this.http.post(link, data, options);
    }

    login(userID, password){
          //let link = '/LABDemoAPI/Token';
      let link =  '/Token'
      let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
      let options = new RequestOptions({ headers: headers });
      let data = "userName=" + encodeURIComponent(userID) +
                "&password=" + encodeURIComponent(password) +
                "&grant_type=password"
                "&client_id=web";
      return this.http.post(link, data, options)
    }

}