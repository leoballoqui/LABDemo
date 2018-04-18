import { Component, OnInit, Inject } from '@angular/core';
import { Http, Response, Headers, RequestOptions  } from '@angular/http';
import { Routes, RouterModule, Router } from '@angular/router';
import { FormsModule, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatSnackBar} from '@angular/material';
import {CommonService} from '../../common/common.service';
import {AjaxService} from '../../common/ajax.service';

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
    private snackBar: MatSnackBar,    
    private commonService:CommonService,
    private ajaxService:AjaxService) { 

    }


  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

  ngOnInit() {
    if (!this.commonService.isAuthorized())
    {
      this.commonService.logOut();
      this.router.navigate(['/login']);
    }

    this.firstName = "Yo D";
    this.lastName = "Yo D";
    this.email = "yod@yo.yo";
    this.phone = "123";
  }

  save() {
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

    this.ajaxService.addDoctor(data)
    .subscribe(data => {
        this.snackBar.open("Success!", "The doctor was successfully inserted.", {
          duration: 7000,});
          this.clearComponents();
    }, error => {
      this.snackBar.open("Error!", "Sorry, an error ocurred while trying to add the doctor.", {
        duration: 7000,});
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
