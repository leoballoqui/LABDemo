import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()

export class AjaxService {
  
    constructor(private http: Http) { 
    
    }

    /* Participants */

    getAllParticipants(){
        return this.http.get('/api/Participants/GetParticipants')
    }

    addParticipant(participant: string){
        let link = '/api/Participants/AddParticipant';
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(link, participant, options)
    }

    updateParticipant(participant: string){
        let link = '/api/Participants/UpdateParticipant';
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(link, participant, options)
    }

    deleteParticipant(participantID : number){
        let link = '/api/Participants/DeleteParticipant';
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(link, participantID, options)
    }

    /* Doctors */

    getAllDoctors(){
        return this.http.get('/api/Doctors/GetDoctors')
    }

    addDoctor(doctor: string){
        let link = '/api/Doctors/AddDoctor';
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(link, doctor, options)
    }

    updateDoctor(doctor: string){
        let link = '/api/Doctors/UpdateDoctor';
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(link, doctor, options)
    }

    deleteDoctor(doctorID : number){
        let link = '/api/Doctors/DeleteDoctor';
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(link, doctorID, options)
    }

    /* Calendar */

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


     /* Login */

    register(userID, password, confirmPassword){
        let link = '/api/Account/Register';
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let data = JSON.stringify(
        {
            Email: userID,
            Password: password,
            ConfirmPassword: confirmPassword,
        });

        return this.http.post(link, data, options);
    }

    login(userID, password){
        //let link = '/LABDemoAPI/Token';
        let link =  '/Token'
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers: headers });
        let data = "userName=" + encodeURIComponent(userID) +
                "&password=" + encodeURIComponent(password) +
                "&grant_type=password"
                "&client_id=web";

        return this.http.post(link, data, options)
    }

  
}