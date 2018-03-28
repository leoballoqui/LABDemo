import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from '../app-common/app-common.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DoctorsRoutingModule } from './doctors-routing.module';
import { DoctorsIndexComponent} from './doctors-index/doctors-index.component';
import { DoctorsNewComponent } from './doctors-new/doctors-new.component';
import { DoctorsDetailsComponent } from './doctors-details/doctors-details.component';
import { DoctorsEditComponent } from './doctors-edit/doctors-edit.component';
import { DialogsModule } from '../dialogs/dialogs.module';

@NgModule({
  imports: [
    CommonModule,
    AppCommonModule,
    DoctorsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DialogsModule,
  ],
  declarations: [
    DoctorsIndexComponent,
    DoctorsNewComponent,
    DoctorsDetailsComponent,
    DoctorsEditComponent,
  ],
  exports: [
    DoctorsIndexComponent,
    DoctorsNewComponent,
    DoctorsDetailsComponent,
    DoctorsEditComponent,
]
})
export class DoctorsModule { }
