import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClinicalNotesComponent } from './clinical-notes-index/clinical-notes-index.component';

const routes: Routes = [{
  path: 'clinicalnotes',
  component: ClinicalNotesComponent,
  data: {
      title: 'Clinical Notes',
      nav: 'Clinical Notes'
  }
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClinicalNotesRoutingModule { }
