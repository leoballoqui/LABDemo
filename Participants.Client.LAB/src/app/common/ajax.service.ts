import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { ObservableMedia } from '@angular/flex-layout';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share'

@Injectable()

export class AjaxService {
  
    constructor(private http: Http,
                private router: Router) { 
    
    }

    /* Participants */

    getAllParticipants(){
        let link = '/api/Participants/GetParticipants';
        let options = this.addAuthHeader();

        let call = this.http.get(link, options).map(res => res).share();
        this.addAuthFailHandler(call);
        return call;
    }

    addParticipant(participant: string){
        let link = '/api/Participants/AddParticipant';
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = this.addAuthHeader(headers);

        let call = this.http.post(link, participant, options).map(res => res).share();
        this.addAuthFailHandler(call);
        return call;
    }

    updateParticipant(participant: string){
        let link = '/api/Participants/UpdateParticipant';
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = this.addAuthHeader(headers);

        let call = this.http.post(link, participant, options).map(res => res).share();
        this.addAuthFailHandler(call);
        return call;
    }

    deleteParticipant(participantID : number){
        let link = '/api/Participants/DeleteParticipant';
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = this.addAuthHeader(headers);

        let call = this.http.post(link, participantID, options).map(res => res).share();
        this.addAuthFailHandler(call);
        return call;
    }

    /* Doctors */

    getAllDoctors(){
        let link = '/api/Doctors/GetDoctors';
        let options = this.addAuthHeader();

        let call = this.http.get(link, options).map(res => res).share();
        this.addAuthFailHandler(call);
        return call;
    }

    addDoctor(doctor: string){
        let link = '/api/Doctors/AddDoctor';
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = this.addAuthHeader(headers);

        let call = this.http.post(link, doctor, options).map(res => res).share();
        this.addAuthFailHandler(call);
        return call;
    }

    updateDoctor(doctor: string){
        let link = '/api/Doctors/UpdateDoctor';
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = this.addAuthHeader(headers);

        let call = this.http.post(link, doctor, options).map(res => res).share();
        this.addAuthFailHandler(call);
        return call;
    }

    deleteDoctor(doctorID : number){
        let link = '/api/Doctors/DeleteDoctor';
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = this.addAuthHeader(headers);

        let call = this.http.post(link, doctorID, options).map(res => res).share();
        this.addAuthFailHandler(call);
        return call;
    }

    /* Calendar */

    getWeekData(data: string){
        let link = '/api/Appointments/GetAppointmentsByWeek';
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = this.addAuthHeader(headers);

        let call = this.http.post(link, data, options).map(res => res).share();
        this.addAuthFailHandler(call);
        return call;
    }

    getDayData(data: string){
        let link = '/api/Appointments/GetAppointmentsByDay';
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = this.addAuthHeader(headers);

        let call = this.http.post(link, data, options).map(res => res).share();
        this.addAuthFailHandler(call);
        return call;
    }

    getDoctorsAvailability(date: Date){
        let link = '/api/Appointments/GetDoctorsAvailability';
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = this.addAuthHeader(headers);

        let call = this.http.post(link, date, options).map(res => res).share();
        this.addAuthFailHandler(call);
        return call;
    }

    getAppointmentsDetails(date: Date){
        let link = '/api/Appointments/GetAppointmentsDetailsByDay';
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = this.addAuthHeader(headers);

        let call = this.http.post(link, date, options).map(res => res).share();
        this.addAuthFailHandler(call);
        return call;
    }

    getAppointmentsDetailsByParticipant(participantName: string, participantPhone: string, future:boolean, past:boolean){
        let link = '/api/Appointments/GetAppointmentsDetailsByParticipant';
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = this.addAuthHeader(headers);
        let data = JSON.stringify(
        {
            Name: participantName,
            Phone: participantPhone,
            Future: future,
            Past: past,
        });

        let call = this.http.post(link, data, options).map(res => res).share();
        this.addAuthFailHandler(call);
        return call;
    }

    addAppointment(data: string){
        let link = '/api/Appointments/AddAppointment';
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = this.addAuthHeader(headers);

        let call = this.http.post(link, data, options).map(res => res).share();
        this.addAuthFailHandler(call);
        return call;
    }

    setAppStatus(data: string): any {
        let link = '/api/Appointments/SetAppointmentStatus';
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = this.addAuthHeader(headers);

        let call = this.http.post(link, data, options).map(res => res).share();
        this.addAuthFailHandler(call);
        return call;
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

    /* Clinical Notes */

    getClinicalNotesByDay(date: Date){
        let link = '/api/ClinicalNotes/GetClinicalNotesByDay';
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = this.addAuthHeader(headers);

        let call = this.http.post(link, date, options).map(res => res).share();
        this.addAuthFailHandler(call);
        return call;
    }

    addClinicalNote(note: string){
        let link = '/api/ClinicalNotes/AddClinicalNote';
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = this.addAuthHeader(headers);

        let call = this.http.post(link, note, options).map(res => res).share();
        this.addAuthFailHandler(call);
        return call;
    }

    updateClinicalNote(note: string){
        let link = '/api/ClinicalNotes/UpdateClinicalNote';
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = this.addAuthHeader(headers);

        let call = this.http.post(link, note, options).map(res => res).share();
        this.addAuthFailHandler(call);
        return call;
    }

    deleteClinicalNote(noteID : number){
        let link = '/api/ClinicalNotes/DeleteClinicalNote';
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = this.addAuthHeader(headers);

        let call = this.http.post(link, noteID, options).map(res => res).share();
        this.addAuthFailHandler(call);
        return call;
    }

    approveSignature(name : string){
        let link = '/api/ClinicalNotes/ApproveSignature';
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = this.addAuthHeader(headers);

        let call = this.http.post(link, name, options).map(res => res).share();
        this.addAuthFailHandler(call);
        return call;
    }

    /* Clinical Notes Categories */

    getAllCategories(){
        let link = '/api/ClinicalNoteCategories/GetClinicalNoteCategories';
        let options = this.addAuthHeader();

        let call = this.http.get(link, options).map(res => res).share();
        this.addAuthFailHandler(call);
        return call;
    }

    /* Doctor's Time Off */
    
    getDoctorTimeOff(doctorID: number){
        let link = '/api/TimeOffs/GetTimeOffByDoctor';
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = this.addAuthHeader(headers);
        let data = JSON.stringify(
        {
            DoctorID: doctorID,
            From: null,
            To: null,
        });

        let call = this.http.post(link, data, options).map(res => res).share();
        this.addAuthFailHandler(call);
        return call;
    }

    addDoctorTimeOff(data: string){
        let link = '/api/TimeOffs/AddTimeOff';
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = this.addAuthHeader(headers);

        let call = this.http.post(link, data, options).map(res => res).share();
        this.addAuthFailHandler(call);
        return call;
    }

    notifyTimeOffParticipants(id: number){
        let link = '/api/TimeOffs/NotifyParticipants';
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = this.addAuthHeader(headers);

        let call = this.http.post(link, id, options).map(res => res).share();
        this.addAuthFailHandler(call);
        return call;
    }

    cancelAppointmentsTimeOff(id: number){
        let link = '/api/TimeOffs/CancelAppointments';
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = this.addAuthHeader(headers);

        let call = this.http.post(link, id, options).map(res => res).share();
        this.addAuthFailHandler(call);
        return call;
    }

    /* Private Functions */

    private addAuthHeader(headers : Headers = null) : RequestOptions{
        let token = localStorage.getItem('id_token');
        let resultHeaders : Headers = headers;
        if(resultHeaders == null)
            resultHeaders = new Headers({ 'Authorization': 'Bearer ' + token });
        else
            resultHeaders.append('Authorization', 'Bearer ' + token)
        return new RequestOptions({ headers: resultHeaders });;
    }

    private addAuthFailHandler(call) {
        call.subscribe(
            data => {
            },
            err => {
                if(err.status == "401")
                {
                    alert(err.status);
                    console.error(err);
                    this.router.navigate(['/logout'])
                }
            }
        ); 
    }

  
}