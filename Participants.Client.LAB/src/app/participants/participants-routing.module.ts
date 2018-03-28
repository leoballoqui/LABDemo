import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParticipantsIndexComponent } from './participants-index/participants-index.component';
import { ParticipantsNewComponent } from './participants-new/participants-new.component';
import { ParticipantsDetailsComponent } from './participants-details/participants-details.component';
import { ParticipantsEditComponent } from './participants-edit/participants-edit.component';

const routes: Routes = [{
  path: 'participants',
  component: ParticipantsIndexComponent,
  data: {
      title: 'Participants',
      nav: 'Participants'
  }
},
{
  path: 'newparticipant',
  component: ParticipantsNewComponent,
  data: {
    title: 'New Participant'
  }
},
{
  path: 'participantdetails',
  component: ParticipantsDetailsComponent,
  data: {
    title: 'Participant details'
  }
},
{
  path: 'editparticipant',
  component: ParticipantsEditComponent,
  data: {
    title: 'Edit Participant'
  }
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParticipantsRoutingModule { }
