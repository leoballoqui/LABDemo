export class ParticipantsService {
  
 private selectedparticipant: object;

  getSelected() {
    return this.selectedparticipant;
  }

  setSelected(participant:object) {
    this.selectedparticipant = participant;
  }

}