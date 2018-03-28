import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from '../app-common/app-common.module';

import { HomeRoutingModule } from './home-routing.module';
import { HomeIndexComponent} from './home-index/home-index.component';


@NgModule({
  imports: [
    CommonModule,
    AppCommonModule,
    HomeRoutingModule,
  ],
  declarations: [
    HomeIndexComponent,
  ],
  exports: [
    HomeIndexComponent,
]
})
export class HomeModule { }
