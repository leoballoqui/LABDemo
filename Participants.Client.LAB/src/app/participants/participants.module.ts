import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from '../common/common.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ParticipantsRoutingModule } from './participants-routing.module';
import { ParticipantsIndexComponent} from './participants-index/participants-index.component';
import { ParticipantsNewComponent } from './participants-new/participants-new.component';
import { ParticipantsDetailsComponent } from './participants-details/participants-details.component';
import { ParticipantsEditComponent } from './participants-edit/participants-edit.component';
import { DialogsModule } from '../dialogs/dialogs.module';

@NgModule({
  imports: [
    CommonModule,
    AppCommonModule,
    ParticipantsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DialogsModule,
  ],
  declarations: [
    ParticipantsIndexComponent,
    ParticipantsNewComponent,
    ParticipantsDetailsComponent,
    ParticipantsEditComponent,
  ],
  exports: [
    ParticipantsIndexComponent,
    ParticipantsNewComponent,
    ParticipantsDetailsComponent,
    ParticipantsEditComponent,
]
})
export class ParticipantsModule { }
