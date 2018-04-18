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
  selector: 'app-doctors-edit',
  templateUrl: './doctors-edit.component.html',
  styleUrls: ['./doctors-edit.component.css']
})
export class DoctorsEditComponent implements OnInit {

  private doctor : any;

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
    
    this.doctor = this.commonService.getSelectedDoctor();
    if(this.doctor === null || this.doctor === undefined)
      this.goTo('doctors');
  }

  save() {
    let data = JSON.stringify(this.doctor);

    this.ajaxService.updateDoctor(data)
    .subscribe(data => {
        this.snackBar.open("Success!", "The doctor was successfully inserted.", {
          duration: 7000,});
    }, error => {
      this.snackBar.open("Error!", "Sorry, an error ocurred while trying to update the doctor.", {
        duration: 7000,});
    });
  }

  goTo(destination: string){
    this.router.navigate(['/' + destination]);
  }

}
