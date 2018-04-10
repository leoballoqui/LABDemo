import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from '../app-common/app-common.module';
import { LoginRoutingModule } from './login-routing.module';
import { LoginIndexComponent} from './login-index/login-index.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    AppCommonModule,
    LoginRoutingModule,
    FormsModule,
  ],
  declarations: [
    LoginIndexComponent,
  ],
  exports: [
    LoginIndexComponent,
]
})
export class LoginModule { }
