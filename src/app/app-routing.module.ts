import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartDetailsComponent } from './cart-details/cart-details.component';

import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductlistComponent } from './productlist/productlist.component';

import { RegisterComponent } from './register/register.component';

const routes: Routes = [

  {component:LoginComponent,path:'login'},
  {component:RegisterComponent,path:'register'},
  {component:HomeComponent,path:'home'},
  {component:CartComponent,path:'cart'},
  {component:ProductlistComponent,path:'productlist'},
  {component:CartDetailsComponent,path:'cartDetails'},
  {component:CheckoutComponent,path:'checkout'}



];
@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
