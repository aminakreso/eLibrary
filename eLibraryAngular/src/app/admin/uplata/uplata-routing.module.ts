import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UplataListComponent } from './uplata-list/uplata-list.component'; 

const routes: Routes = [
  
  {
    path: 'uplata-list',
    component: UplataListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UplataRoutingModule { }
