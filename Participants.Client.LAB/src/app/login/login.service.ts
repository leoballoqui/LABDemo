import { Http, Response, Headers, RequestOptions  } from '@angular/http';

export class LoginService {

     constructor(private http: Http) { 
    
      }
  
    // register(userID, password, confirmPassword){
    //     let link = 'http://localhost:23049/api/Account/Register';
    //     let headers = new Headers({ 'Content-Type': 'application/json' });
    //     let options = new RequestOptions({ headers: headers });
    //     let data = JSON.stringify(
    //     {
    //       Email: userID,
    //       Password: password,
    //       ConfirmPassword: confirmPassword,
    //     });
    
    //     return this.http.post(link, data, options);
    //   }

      register2(userID, password, confirmPassword){
        alert("In: " + userID);
      }

}