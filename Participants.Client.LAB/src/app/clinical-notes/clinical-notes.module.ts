import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from '../common/common.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClinicalNotesRoutingModule } from './clinical-notes-routing.module';
import { ClinicalNotesComponent} from './clinical-notes-index/clinical-notes-index.component';
import { DialogsModule } from '../dialogs/dialogs.module';

@NgModule({
  imports: [
    CommonModule,
    AppCommonModule,
    ClinicalNotesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DialogsModule,
  ],
  declarations: [
    ClinicalNotesComponent,
  ],
  exports: [
    ClinicalNotesComponent,
]
})
export class ClinicalNotesModule { }
