import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from '../common/common.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeIndexComponent} from './home-index/home-index.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    AppCommonModule,
    HomeRoutingModule,
    FormsModule,
  ],
  declarations: [
    HomeIndexComponent,
  ],
  exports: [
    HomeIndexComponent,
]
})
export class HomeModule { }
