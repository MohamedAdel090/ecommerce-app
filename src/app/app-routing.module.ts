import { AllordersComponent } from './components/allorders/allorders.component';
import { PaymentComponent } from './components/payment/payment.component';
import { AuthGuard } from './guard/AuthGuard';
import { BlankLayoutComponent } from './components/layouts/blank-layout/BlankLayoutComponent';
import { DetailsproductComponent } from './components/detailsproduct/detailsproduct.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { BrandesComponent } from './components/brandes/brandes.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { RegesterComponent } from './components/regester/regester.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthLayoutComponent } from './components/layouts/auth-layout/AuthLayoutComponent';

const routes: Routes = [
{path:'', canActivate:[AuthGuard],component:BlankLayoutComponent, children:[
  {path:'', redirectTo:'home',  pathMatch:'full'},

  {path:'setting', loadChildren: ()=>import('./setting/setting.module').then((m)=>m.SettingModule) },



  {path:'home', canActivate:[AuthGuard], component:HomeComponent},
  {path:'products', canActivate:[AuthGuard],component:ProductsComponent},
  {path:'details/:id', canActivate:[AuthGuard],component:DetailsproductComponent},
  {path:'categories', canActivate:[AuthGuard],component:CategoriesComponent},
  {path:'brands', canActivate:[AuthGuard],component:BrandesComponent},
  {path:'cart', canActivate:[AuthGuard],component:CartComponent},
  {path:'Payment/:id', canActivate:[AuthGuard],component:PaymentComponent},
  {path:'allorders', canActivate:[AuthGuard],component:AllordersComponent},
]},

{path:'', component:AuthLayoutComponent,children:[
    {path:'login', component:LoginComponent},
  {path:'register', component:RegesterComponent},
]},
  {path:'**', component:NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration:'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
