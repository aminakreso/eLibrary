import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { KnjigeListComponent } from './knjige-list/knjige-list.component'; 

const routes: Routes = [
  
  {
    path: 'knjige-list',
    component: KnjigeListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KnjigaRoutingModule { }
