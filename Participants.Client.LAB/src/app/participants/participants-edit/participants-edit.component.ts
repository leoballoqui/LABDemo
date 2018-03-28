import { Component, OnInit, Inject } from '@angular/core';
import { Http, Response, Headers, RequestOptions  } from '@angular/http';
import { Routes, RouterModule, Router } from '@angular/router';
import {ParticipantsService} from '../participants.service';
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
  selector: 'app-participants-edit',
  templateUrl: './participants-edit.component.html',
  styleUrls: ['./participants-edit.component.css']
})
export class ParticipantsEditComponent implements OnInit {

  private participant : any;
  private participantsService:ParticipantsService;

  constructor(
    private router: Router,
    private http: Http,
    private snackBar: MatSnackBar,
    @Inject(ParticipantsService)pService:ParticipantsService) { 
      this.participantsService = pService;
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

  ngOnInit() {
    this.participant = this.participantsService.getSelected();
    if(this.participant === null || this.participant === undefined)
      this.goTo('participants');
  }

  save() {
    let link = 'http://localhost:23049/api/Participants/UpdateParticipant';
    let data = JSON.stringify(this.participant);

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    this.http.post(link, data, options)
    .subscribe(data => {
        this.snackBar.open("Success!", "The participant was successfully inserted.", {
          duration: 10000,});
    }, error => {
      this.snackBar.open("Error!", "Sorry, an error ocurred while trying to update the participant.", {
        duration: 10000,});
    });
  }

  goTo(destination: string){
    this.router.navigate(['/' + destination]);
  }

}
