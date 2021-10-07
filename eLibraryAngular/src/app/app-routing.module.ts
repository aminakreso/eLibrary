import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';




const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'user-login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'admin-login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'one-time-login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  { path: 'home', component: HomeComponent },
  
  
  {
    path: 'zanr',
    loadChildren: () => import('./admin/zanr/zanr.module').then(m => m.ZanrModule)
  },
  {
    path: 'uplata',
    loadChildren: () => import('./admin/uplata/uplata.module').then(m => m.UplataModule)
  },
  {
    path: 'clanskakarta',
    loadChildren: () => import('./admin/clanskakarta/clanskakarta.module').then(m => m.ClanskakartaModule)
  },
  {
    path: 'knjiga',
    loadChildren: () => import('./admin/knjiga/knjiga.module').then(m => m.KnjigaModule)
  },
  {
    path: 'pisac',
    loadChildren: () => import('./admin/pisac/pisac.module').then(m => m.PisacModule)
  },
  {
    path: 'promocija',
    loadChildren: () => import('./admin/promocija/promocija.module').then(m => m.PromocijaModule)
  },
  {
    path: 'korisnik',
    loadChildren: () => import('./admin/korisnik/korisnik.module').then(m => m.KorisnikModule)
  },
  {
    path: 'korisnickiracun',
    loadChildren: () => import('./admin/korisnickiracun/korisnickiracun.module').then(m => m.KorisnickiRacunModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
