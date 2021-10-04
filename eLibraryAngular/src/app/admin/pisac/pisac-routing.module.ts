import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {PisacListComponent } from './pisac-list/pisac-list.component'; 

const routes: Routes = [
  
  {
    path: 'pisac-list',
    component: PisacListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PisacRoutingModule { }
