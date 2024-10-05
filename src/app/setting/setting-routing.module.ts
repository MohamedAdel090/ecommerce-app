import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { UpdatepasswordComponent } from './updatepassword/updatepassword.component';

const routes: Routes = [
  {path:' ' , redirectTo:'forget',pathMatch:'full'},
  {path:'forgetpassword', component:ForgetPasswordComponent},
  {path:'updatepassword', component:UpdatepasswordComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
