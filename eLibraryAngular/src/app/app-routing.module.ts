import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



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
    path: 'knjiga',
    loadChildren: () => import('./user/knjiga/knjiga.module').then(m => m.KnjigaModule)
  },
  {
    path: 'one-time-login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
