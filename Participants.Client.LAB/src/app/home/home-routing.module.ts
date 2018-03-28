import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeIndexComponent } from './home-index/home-index.component';

const routes: Routes = [{
  path: 'home',
  component: HomeIndexComponent,
  data: {
      title: 'Home',
      nav: 'Home'
  }
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
