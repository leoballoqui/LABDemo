import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from '../common/common.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClinicalNotesRoutingModule } from './clinical-notes-routing.module';
import { ClinicalNotesComponent} from './clinical-notes-index/clinical-notes-index.component';
import { DialogsModule } from '../dialogs/dialogs.module';
import { NoteTestEditComponent } from './clinical-notes-types/note-test/note-test-edit/note-test-edit.component';
import { NoteTestDetailsComponent } from './clinical-notes-types/note-test/note-test-details/note-test-details.component';

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
    NoteTestEditComponent,
    NoteTestDetailsComponent,
  ],
  entryComponents: [ 
    NoteTestEditComponent,
    NoteTestDetailsComponent 
  ],
  exports: [
    ClinicalNotesComponent,
    NoteTestEditComponent,
    NoteTestDetailsComponent,
]
})
export class ClinicalNotesModule { }
