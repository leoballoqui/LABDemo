import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ParticipantsService {

    constructor(private http: Http) { 
  
    }
  
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
}