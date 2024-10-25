import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import{BrowserAnimationsModule} from'@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './AppComponent';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { BrandesComponent } from './components/brandes/brandes.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { LoginComponent } from './components/login/login.component';
import { RegesterComponent } from './components/regester/regester.component';
import { NavbarAuthComponent } from './components/navbar-auth/navbar-auth.component';
import { NavbarBlankComponent } from './components/navbar-blank/navbar-blank.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthLayoutComponent } from './components/layouts/auth-layout/AuthLayoutComponent';
import { BlankLayoutComponent } from './components/layouts/blank-layout/BlankLayoutComponent';
import { StarComponent } from './components/star/star.component';
import { CartComponent } from './components/cart/cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CuttextPipe } from './cuttext.pipe';
import { RegisterComponent } from './components/register/register.component';
import { DetailsproductComponent } from './components/detailsproduct/detailsproduct.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { PaymentComponent } from './components/payment/payment.component';
import { AllordersComponent } from './components/allorders/allorders.component';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    BrandesComponent,
    CategoriesComponent,
    LoginComponent,
    RegesterComponent,
    NavbarAuthComponent,
    NavbarBlankComponent,
    FooterComponent,
    NotFoundComponent,
    AuthLayoutComponent,
    BlankLayoutComponent,
    StarComponent,
    CartComponent,
    CuttextPipe,
    RegisterComponent,
    DetailsproductComponent,
    PaymentComponent,
    AllordersComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
