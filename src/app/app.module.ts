import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCheckboxModule} from '@angular/material/checkbox';
// angual material
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductService } from './services/product.service';
import { CartStatusComponent } from './cart-status/cart-status.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';

import { CheckoutComponent } from './checkout/checkout.component';
// angular material ends

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    CartStatusComponent,
    ProductlistComponent,
    CartDetailsComponent,

    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
