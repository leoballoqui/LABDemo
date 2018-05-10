import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoctorsIndexComponent } from './doctors-index/doctors-index.component';
import { DoctorsNewComponent } from './doctors-new/doctors-new.component';
import { DoctorsDetailsComponent } from './doctors-details/doctors-details.component';
import { DoctorsEditComponent } from './doctors-edit/doctors-edit.component';
import { DoctorsTimeOffComponent } from './doctors-time-off/doctors-time-off.component';


const routes: Routes = [{
  path: 'doctors',
  component: DoctorsIndexComponent,
  data: {
      title: 'Participants2',
      nav: 'Participants2'
  }
},
{
  path: 'newdoctor',
  component: DoctorsNewComponent,
  data: {
    title: 'New Doctor'
  }
},
{
  path: 'doctordetails',
  component: DoctorsDetailsComponent,
  data: {
    title: 'Doctor details'
  }
},
{
  path: 'editdoctor',
  component: DoctorsEditComponent,
  data: {
    title: 'Edit Doctor'
  }
},
{
  path: 'doctortimeoff',
  component: DoctorsTimeOffComponent,
  data: {
    title: 'Doctor\'s TIme Off'
  }
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorsRoutingModule { }
