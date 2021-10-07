import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {PromocijaListComponent } from './promocija-list/promocija-list.component'; 

const routes: Routes = [
  
  {
    path: 'promocija-list',
    component: PromocijaListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromocijaRoutingModule { }
