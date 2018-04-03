import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { AppointmentsDialogComponent } from './appointments-dialog/appointments-dialog.component';
import { MatDialogRef, MatDialog } from '@angular/material';

@Injectable()
export class DialogsService {

    constructor(private dialog: MatDialog) { }

    public confirm(title: string, message: string): Observable<boolean> {

        let dialogRef: MatDialogRef<ConfirmDialogComponent>;
        dialogRef = this.dialog.open(ConfirmDialogComponent);

        dialogRef.componentInstance.title = title;
        dialogRef.componentInstance.message = message;

        return dialogRef.afterClosed();
    }

    public appointments(selectedDate:Date, doctors: any, participants: any, slot: any): Observable<boolean> {
        let dialogRef: MatDialogRef<AppointmentsDialogComponent>;
        dialogRef = this.dialog.open(AppointmentsDialogComponent);
        dialogRef.componentInstance.selectedDate = selectedDate;
        dialogRef.componentInstance.doctors = doctors;
        dialogRef.componentInstance.participants = participants;
        dialogRef.componentInstance.slot = slot;

        return dialogRef.afterClosed();
    }
}