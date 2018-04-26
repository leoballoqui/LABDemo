import { Subject } from 'rxjs/Subject'

export class CommonService {
  
    public isAuth: boolean = false;
    private selectedParticipant: object;
    private selectedDoctor: object;
    private selectedNote: object;
    private subject = new Subject<any>();
    private doctorList : Array<any>;
    private participantsList : Array<any>;
   
    
    setAuthData(token:string, userName:string, expire:Date) {
      localStorage.setItem('id_token', token);
      localStorage.setItem('expiration', expire.toString());
      this.isAuth = true;
      this.subject.next(this.isAuth);
    }

    getSelectedParticipant() {
       return this.selectedParticipant;
     }
   
     setSelectedParticipant(participant:object) {
       this.selectedParticipant = participant;
     }

     getSelectedDoctor() {
       return this.selectedDoctor;
     }
   
     setSelectedDoctor(doctor:object) {
       this.selectedDoctor = doctor;
     }

     getParticipants() {
      return this.participantsList;
    }
  
    setParticipants(participants: Array<any>) {
      this.participantsList = participants;
    }

    getDoctors() {
      return this.doctorList;
    }
  
    setDoctors(doctors:Array<any>) {
      this.doctorList = doctors;
    }

     getSelectedNote() {
       return this.selectedNote;
     }

     setSelectedNote(note: any): any {
       this.selectedNote = note;
     }

     isAuthorized() {
      let authData = localStorage.getItem('id_token');
      if (authData)
      {
        let expiration = new Date(localStorage.getItem('expiration'));
        if(expiration && expiration > new Date())
          return true;
      }
      return false;
    }

    logOut() {
      localStorage.clear();
      this.isAuth = false;
      this.subject.next(this.isAuth);
    }

    notifier() {
      return this.subject.asObservable();
    }

  
   }