import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { AllcakesComponent } from './menuitems/allcakes/allcakes.component';
import { PineappleComponent } from './menuitems/pineapple/pineapple.component';
import { OrderComponent } from './order/order.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {component:MenuComponent,path:'menu'},
  {component:LoginComponent,path:'login'},
  {component:RegisterComponent,path:'register'},
  {component:HomeComponent,path:'home'},
  {component:CartComponent,path:'cart'},
  {component:PineappleComponent,path:'pineapple'},
  {component:OrderComponent,path:'order'},
  {component:AllcakesComponent,path:'allcake'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
