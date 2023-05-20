import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from "./pages/main-page/main-page.component";
import {CartPageComponent} from "./pages/cart-page/cart-page.component";
import {ShopPageComponent} from "./pages/shop-page/shop-page.component";
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {PlayroomPageComponent} from "./pages/playroom-page/playroom-page.component";
import {ErrorPageComponent} from "./pages/error-page/error-page.component";

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'shop', component: ShopPageComponent},
  {path: 'cart', component: CartPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'playroom', component: PlayroomPageComponent},
  {path: '**', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
