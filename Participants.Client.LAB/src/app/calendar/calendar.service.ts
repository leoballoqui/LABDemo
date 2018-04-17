import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CalendarService {
  
    constructor(private http: Http) { 
  
    }

    getWeekData(data: string){
        let link = '/api/Appointments/GetAppointmentsByWeek';
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(link, data, options)
    }

    getDayData(data: string){
        let link = '/api/Appointments/GetAppointmentsByDay';
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(link, data, options)
    }


    getAppointmentsDetails(date: Date){
        let link = '/api/Appointments/GetAppointmentsDetailsByDay';
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(link, date, options)
    }

    addAppointment(data: string){
        let link = '/api/Appointments/AddAppointment';
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(link, data, options)
    }



}