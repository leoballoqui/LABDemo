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
  selector: 'app-participants-edit',
  templateUrl: './participants-edit.component.html',
  styleUrls: ['./participants-edit.component.css']
})
export class ParticipantsEditComponent implements OnInit {

  private participant : any;

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
      return;
    }
    
    this.participant = this.commonService.getSelectedParticipant();
    if(this.participant === null || this.participant === undefined)
      this.goTo('participants');
  }

  save() {
    let data = JSON.stringify(this.participant);

    this.ajaxService.updateParticipant(data)
    .subscribe(data => {
        this.snackBar.open("Success!", "The participant was successfully updated.", {
          duration: 7000,});
    }, error => {
      this.snackBar.open("Error!", "Sorry, an error ocurred while trying to update the participant.", {
        duration: 7000,});
    });
  }

  goTo(destination: string){
    this.router.navigate(['/' + destination]);
  }

}
