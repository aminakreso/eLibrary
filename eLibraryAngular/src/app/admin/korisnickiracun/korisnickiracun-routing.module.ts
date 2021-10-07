import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {KorisnickiRacunListComponent } from './korisnickiracun-list/korisnickiracun-list.component'; 

const routes: Routes = [
  
  {
    path: 'korisnickiracun-list',
    component: KorisnickiRacunListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KorisnickiRacunRoutingModule { }
