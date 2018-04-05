import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from '../app-common/app-common.module';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { AppointmentsDialogComponent } from './appointments-dialog/appointments-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogsService } from './dialogs.service';

@NgModule({
  imports: [
    CommonModule,
    AppCommonModule,
    FormsModule,
  ],
  declarations: [ConfirmDialogComponent, AppointmentsDialogComponent],
  exports: [ConfirmDialogComponent, AppointmentsDialogComponent],
  entryComponents: [ConfirmDialogComponent, AppointmentsDialogComponent],
  providers: [DialogsService]
})
export class DialogsModule { }