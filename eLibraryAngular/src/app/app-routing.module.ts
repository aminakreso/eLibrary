import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
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
    path: 'knjiga',
    loadChildren: () => import('./user/knjiga/knjiga.module').then(m => m.KnjigaModule)
  },
  {
    path: 'one-time-login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'promocija',
    loadChildren: () => import('./user/promocija/promocija.module').then(m => m.PromocijaModule)
  },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
