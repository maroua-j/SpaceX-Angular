import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './components/launches/detail/detail.component';

import { LaunchComponent } from './components/launches/launch.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LaunchComponent
  },

  {
    path: 'launch/:num',
    component: DetailComponent
  },

  // {
  //   path: 'capsule',
  //   component: CapsuleComponent
  // },

  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
