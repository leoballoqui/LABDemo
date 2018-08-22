import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppCommonModule } from './common/common.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import {Request, XHRBackend, XHRConnection} from '@angular/http';
import { ImageUploadModule } from 'angular2-image-upload';

import { AppComponent } from './app.component';
import { AppToolbarService } from './app-toolbar/app-toolbar.service';
import { RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';
import { HomeRoutingModule } from './home/home-routing.module';
import { ParticipantsModule } from './participants/participants.module';
import { ParticipantsRoutingModule } from './participants/participants-routing.module';
import { DoctorsModule } from './doctors/doctors.module';
import { DoctorsRoutingModule } from './doctors/doctors-routing.module';
import { CalendarModule } from './calendar/calendar.module';
import { CalendarRoutingModule } from './calendar/calendar-routing.module';
import { LoginModule } from './login/login.module';
import { LoginRoutingModule } from './login/login-routing.module';
import { ClinicalNotesModule } from './clinical-notes/clinical-notes.module';
import { ClinicalNotesRoutingModule } from './clinical-notes/clinical-notes-routing.module';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonService } from './common/common.service';
import { AjaxService  } from './common/ajax.service';
import { ApiXHRBackend } from './common/prefix-api.util';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppCommonModule,
    AppRoutingModule,
    HomeModule,
    HomeRoutingModule,
    ParticipantsModule,
    ParticipantsRoutingModule,
    DoctorsModule,
    DoctorsRoutingModule,
    CalendarModule,
    CalendarRoutingModule,
    LoginModule,
    LoginRoutingModule,
    ClinicalNotesModule,
    ClinicalNotesRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    ImageUploadModule.forRoot(),
    RouterModule.forRoot([{
      path: '', redirectTo: '/home', pathMatch: 'full'
    }])
  ],
  providers: [AppToolbarService, CommonService, AjaxService, { provide: XHRBackend, useClass: ApiXHRBackend }],
  bootstrap: [AppComponent]
})
export class AppModule { }
