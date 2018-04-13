export class CommonService {
  
    private userName: string;
    private authorizationData: object;
    private selectedParticipant: object;
    private selectedDoctor: object;
   
    
    setAuthData(token:string, userName:string, expire:Date) {
      localStorage.setItem('id_token', token);
      localStorage.setItem('expiration', expire.toString());
      this.userName = userName
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
    }

  
   }