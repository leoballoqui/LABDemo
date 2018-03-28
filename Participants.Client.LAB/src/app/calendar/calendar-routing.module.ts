import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarIndexComponent } from './calendar-index/calendar-index.component';

const routes: Routes = [{
  path: 'calendar',
  component: CalendarIndexComponent,
  data: {
      title: 'Calendar',
      nav: 'Calendar'
  }
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendarRoutingModule { }
