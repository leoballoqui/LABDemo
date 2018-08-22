import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from '../common/common.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClinicalNotesRoutingModule } from './clinical-notes-routing.module';
import { ClinicalNotesComponent} from './clinical-notes-index/clinical-notes-index.component';
import { DialogsModule } from '../dialogs/dialogs.module';
import { ImageUploadModule } from '../../../node_modules/angular2-image-upload';

//Add references to al notes components here (both 'Details' and 'Edit')
import { NoteTestEditComponent } from './clinical-notes-types/note-test/note-test-edit/note-test-edit.component';
import { NoteTestDetailsComponent } from './clinical-notes-types/note-test/note-test-details/note-test-details.component';
import { NoteInitialTreatmentPlanEditComponent } from './clinical-notes-types/note-InitialTreatmentPlan/note-InitialTreatmentPlan-edit/note-InitialTreatmentPlan-edit.component';
import { NoteInitialTreatmentPlanDetailsComponent } from './clinical-notes-types/note-InitialTreatmentPlan/note-InitialTreatmentPlan-details/note-InitialTreatmentPlan-details.component';

//Add references to al notes components to the "declarations", "entryComponents" and "exports" sections (both 'Details' and 'Edit')
@NgModule({
  imports: [
    CommonModule,
    AppCommonModule,
    ClinicalNotesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DialogsModule,
    ImageUploadModule,
  ],
  declarations: [
    ClinicalNotesComponent,
    NoteTestEditComponent,
    NoteTestDetailsComponent,
    NoteInitialTreatmentPlanEditComponent,
    NoteInitialTreatmentPlanDetailsComponent,
  ],
  entryComponents: [ 
    NoteTestEditComponent,
    NoteTestDetailsComponent,
    NoteInitialTreatmentPlanEditComponent,
    NoteInitialTreatmentPlanDetailsComponent,
  ],
  exports: [
    ClinicalNotesComponent,
    NoteTestEditComponent,
    NoteTestDetailsComponent,
    NoteInitialTreatmentPlanEditComponent,
    NoteInitialTreatmentPlanDetailsComponent,
]
})
export class ClinicalNotesModule { }
