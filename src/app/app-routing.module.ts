import { HomeComponent } from './components/common/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CapsuleComponent } from './components/capsules/capsule/capsule.component';
import { DetailComponent } from './components/launches/detail/detail.component';

import { LaunchComponent } from './components/launches/launch.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
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
    path: 'capsule/:serial', 
    component: CapsuleComponent
  },
  { 
  path: 'home', 
  component: HomeComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
