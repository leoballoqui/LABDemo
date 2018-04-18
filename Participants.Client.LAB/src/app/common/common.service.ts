import { Subject } from 'rxjs/Subject'

export class CommonService {
  
    public isAuth: boolean = false;
    private selectedParticipant: object;
    private selectedDoctor: object;
    private subject = new Subject<any>();
   
    
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