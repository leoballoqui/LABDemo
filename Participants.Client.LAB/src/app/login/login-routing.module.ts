import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginIndexComponent } from './login-index/login-index.component';

const routes: Routes = [{
    path: 'login',
    component: LoginIndexComponent,
    data: {
        title: 'Login'
    },
  },
  {
    path: 'logout',
    component: LoginIndexComponent,
    data: {
        title: 'Logout',
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
