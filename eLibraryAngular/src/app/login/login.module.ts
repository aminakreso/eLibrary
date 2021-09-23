import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { UserLoginComponent } from './user-login/user-login.component';
import { OneTimeLoginComponent } from './one-time-login/one-time-login.component';
import { ResetPassComponent } from './one-time-login/reset-pass/reset-pass.component';
import { ResetPassUserComponent } from './user-login/reset-pass-user/reset-pass-user.component';

@NgModule({
  declarations: [UserLoginComponent, OneTimeLoginComponent, ResetPassComponent,ResetPassUserComponent],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
