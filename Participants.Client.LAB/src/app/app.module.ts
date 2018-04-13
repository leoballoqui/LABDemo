import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppCommonModule } from './common/common.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import {Request, XHRBackend, XHRConnection} from '@angular/http';

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
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonService } from './common/common.service';
import { LoginService  } from './login/login.service';
import { ParticipantsService  } from './participants/participants.service';
import { DoctorsService  } from './doctors/doctors.service';
import { CalendarService  } from './calendar/calendar.service';
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
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([{
      path: '', redirectTo: '/login', pathMatch: 'full'
    }])
  ],
  providers: [AppToolbarService, CommonService, CalendarService, ParticipantsService, DoctorsService, LoginService, { provide: XHRBackend, useClass: ApiXHRBackend }],
  bootstrap: [AppComponent]
})
export class AppModule { }
