import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { OneTimeLoginComponent } from './one-time-login/one-time-login.component';
import { ResetPassComponent } from './one-time-login/reset-pass/reset-pass.component';
import { ResetPassUserComponent } from './user-login/reset-pass-user/reset-pass-user.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ResetPassAdminComponent } from './admin-login/reset-pass-admin/reset-pass-admin.component';

const routes: Routes = [
  { path: '',  redirectTo: 'admin-login', pathMatch: 'full' },
  {
    path: 'one-time-login',
    component: OneTimeLoginComponent
  },
  {
    path: 'user-login',
    component: UserLoginComponent
  },
  {
  path: 'admin-login',
  component: AdminLoginComponent
  },

  {
    path: 'reset-pass',
    component: ResetPassComponent
  },
  {
    path: 'reset-pass-user',
    component: ResetPassUserComponent
  },
  {
    path: 'reset-pass-admin',
    component: ResetPassAdminComponent
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }