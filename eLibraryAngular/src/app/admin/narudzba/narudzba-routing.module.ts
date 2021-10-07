import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {NarudzbaListComponent } from './narudzba-list/narudzba-list.component'; 

const routes: Routes = [
  
  {
    path: 'narudzba-list',
    component: NarudzbaListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NarudzbaRoutingModule { }
