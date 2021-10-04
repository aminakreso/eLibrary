import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { KnjigaListComponent } from './knjiga-list/knjiga-list.component'; 

const routes: Routes = [
  
  {
    path: 'knjiga-list',
    component: KnjigaListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KnjigaRoutingModule { }
