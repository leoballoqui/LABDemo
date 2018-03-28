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
  selector: 'app-doctors-new',
  templateUrl: './doctors-new.component.html',
  styleUrls: ['./doctors-new.component.css']
})

export class DoctorsNewComponent implements OnInit {

  private firstName: string;
  private lastName: string;
  private suffix: Date;
  private phone: string;
  private secondaryPhone: string;
  private email: string;
  private address: string;
  private graduatedFrom: string;
 
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
    this.firstName = "Yo D";
    this.lastName = "Yo D";
    this.email = "yod@yo.yo";
    this.phone = "123";
  }

  save() {
    let link = 'http://localhost:23049/api/Doctors/AddDoctor';
    let data = JSON.stringify(
      {
        FirstName: this.firstName,
        LastName: this.lastName,
        Suffix: this.suffix,
        PhoneNumber: this.phone,
        SecPhoneNumber: this.secondaryPhone,
        EMailAddress: this.email,
        Address: this.address,
        GraduatedFrom: this.graduatedFrom,
      });

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    this.http.post(link, data, options)
    .subscribe(data => {
        this.snackBar.open("Success!", "The doctor was successfully inserted.", {
          duration: 10000,});
          this.clearComponents();
    }, error => {
      this.snackBar.open("Error!", "Sorry, an error ocurred while trying to add the doctor.", {
        duration: 10000,});
    });
  }

  goTo(destination: string){
    this.router.navigate(['/' + destination]);
  }

  clearComponents(){
    this.firstName = "";
    this.lastName = "";
    this.suffix = null;
    this.phone = "";
    this.secondaryPhone = "";
    this.email = "";
    this.address = "";
    this.graduatedFrom = "";
  }

}
