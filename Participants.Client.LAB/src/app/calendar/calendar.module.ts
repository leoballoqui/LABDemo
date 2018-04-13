import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from '../common/common.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarIndexComponent} from './calendar-index/calendar-index.component';
import { DialogsModule } from '../dialogs/dialogs.module';

@NgModule({
  imports: [
    CommonModule,
    AppCommonModule,
    CalendarRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DialogsModule,
  ],
  declarations: [
    CalendarIndexComponent,
  ],
  exports: [
    CalendarIndexComponent,
]
})
export class CalendarModule { }
