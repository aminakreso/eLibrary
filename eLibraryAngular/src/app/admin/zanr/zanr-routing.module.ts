import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ZanrListComponent } from './zanr-list/zanr-list.component'; 

const routes: Routes = [
  
  {
    path: 'zanr-list',
    component: ZanrListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ZanrRoutingModule { }
