import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClanskakartaListComponent } from './clanskakarta-list/clanskakarta-list.component'; 

const routes: Routes = [
  
  {
    path: 'clanskakarta-list',
    component: ClanskakartaListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClanskakartaRoutingModule { }
