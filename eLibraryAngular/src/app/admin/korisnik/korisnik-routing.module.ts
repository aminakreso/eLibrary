import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {KorisnikListComponent } from './korisnik-list/korisnik-list.component'; 

const routes: Routes = [
  
  {
    path: 'korisnik-list',
    component: KorisnikListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KorisnikRoutingModule { }
