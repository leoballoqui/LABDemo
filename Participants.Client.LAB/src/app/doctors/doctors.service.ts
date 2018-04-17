import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DoctorsService {
  
    constructor(private http: Http) { 
  
    }

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

}