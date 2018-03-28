import { Component, OnInit, Inject } from '@angular/core';
import { Http, Response, Headers, RequestOptions  } from '@angular/http';
import { Routes, RouterModule, Router } from '@angular/router';
import {DoctorsService} from '../doctors.service';
import { FormsModule, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatSnackBar} from '@angular/material';

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
  private doctorsService:DoctorsService;

  constructor(
    private router: Router,
    private http: Http,
    private snackBar: MatSnackBar,
    @Inject(DoctorsService)pService:DoctorsService) { 
      this.doctorsService = pService;
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

  ngOnInit() {
    this.doctor = this.doctorsService.getSelected();
    if(this.doctor === null || this.doctor === undefined)
      this.goTo('doctors');
  }

  save() {
    let link = 'http://localhost:23049/api/Doctors/UpdateDoctor';
    let data = JSON.stringify(this.doctor);

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    this.http.post(link, data, options)
    .subscribe(data => {
        this.snackBar.open("Success!", "The doctor was successfully inserted.", {
          duration: 10000,});
    }, error => {
      this.snackBar.open("Error!", "Sorry, an error ocurred while trying to update the doctor.", {
        duration: 10000,});
    });
  }

  goTo(destination: string){
    this.router.navigate(['/' + destination]);
  }

}
