import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PromocijeListComponent } from './promocije-list/promocije-list.component'; 

const routes: Routes = [
  
  {
    path: 'promocije-list',
    component: PromocijeListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromocijaRoutingModule { }
