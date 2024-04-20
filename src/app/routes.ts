import { AuthGuard } from './guard/AuthGuard';
import { BlankLayoutComponent } from './components/layouts/blank-layout/BlankLayoutComponent';
import { DetailsproductComponent } from './components/detailsproduct/detailsproduct.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { BrandesComponent } from './components/brandes/brandes.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { RegesterComponent } from './components/regester/regester.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthLayoutComponent } from './components/layouts/auth-layout/AuthLayoutComponent';

// import { BlankLayoutComponent } from './components/layouts/blank-layout/blank-layout.component';
// import { AuthLayoutComponent } from './components/layouts/auth-layout/auth-layout.component';
export const routes: Routes = [
  {
    path: '', component: BlankLayoutComponent, children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', canActivate: [AuthGuard], component: HomeComponent },
      { path: 'products', canActivate: [authGuard], component: ProductsComponent },
      { path: 'details/:id', canActivate: [authGuard], component: DetailsproductComponent },
      { path: 'categories', canActivate: [authGuard], component: CategoriesComponent },
      { path: 'brands', canActivate: [authGuard], component: BrandesComponent },
      { path: 'cart', canActivate: [authGuard], component: CartComponent },
    ]
  },

  {
    path: '', component: AuthLayoutComponent, children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegesterComponent },
    ]
  },
  { path: '**', component: NotFoundComponent },
];
