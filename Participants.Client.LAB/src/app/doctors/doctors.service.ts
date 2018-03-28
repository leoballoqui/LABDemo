export class DoctorsService {
  
 private selectedDoctor: object;

  getSelected() {
    return this.selectedDoctor;
  }

  setSelected(doctor:object) {
    this.selectedDoctor = doctor;
  }

}