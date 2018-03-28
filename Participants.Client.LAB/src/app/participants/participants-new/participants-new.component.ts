import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions  } from '@angular/http';
import { Routes, RouterModule, Router } from '@angular/router';
import { FormsModule, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { DialogsService } from '../../dialogs/dialogs.service';
import {MatSnackBar} from '@angular/material';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-participants-new',
  templateUrl: './participants-new.component.html',
  styleUrls: ['./participants-new.component.css']
})

export class ParticipantsNewComponent implements OnInit {

  private firstName: string;
  private lastName: string;
  private dob: Date;
  private phone: string;
  private secondaryPhone: string;
  private eMail: string;
  private address: string;
 
  constructor(
    private router: Router,
    private http: Http,
    private snackBar: MatSnackBar) 
    { }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

  ngOnInit() {
    this.firstName = "Yo";
    this.lastName = "Yo";
    this.eMail = "yo@yo.yo";
    this.phone = "123";
  }

  save() {
    let link = 'http://localhost:23049/api/Participants/AddParticipant';
    let data = JSON.stringify(
      {
        FirstName: this.firstName,
        LastName: this.lastName,
        DOB: this.dob,
        PhoneNumber: this.phone,
        SecPhoneNumber: this.secondaryPhone,
        EMailAddress: this.eMail,
        Address: this.address,
      });

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    this.http.post(link, data, options)
    .subscribe(data => {
        this.snackBar.open("Success!", "The participant was successfully inserted.", {
          duration: 10000,});
          this.clearComponents();
    }, error => {
      this.snackBar.open("Error!", "Sorry, an error ocurred while trying to add the participant.", {
        duration: 10000,});
    });
  }

  goTo(destination: string){
    this.router.navigate(['/' + destination]);
  }

  clearComponents(){
    this.firstName = "";
    this.lastName = "";
    this.dob = null;
    this.phone = "";
    this.secondaryPhone = "";
    this.eMail = "";
    this.address = "";
  }

}
