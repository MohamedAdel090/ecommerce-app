import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingRoutingModule } from './setting-routing.module';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { UpdatepasswordComponent } from './updatepassword/updatepassword.component';


@NgModule({
  declarations: [
    ForgetPasswordComponent,
    UpdatepasswordComponent
  ],
  imports: [
    CommonModule,
    SettingRoutingModule
  ]
})
export class SettingModule { }
