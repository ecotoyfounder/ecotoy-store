import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {CartPageComponent} from "./main/pages/cart-page/cart-page.component";
import {ShopPageComponent} from "./pages/shop-page/shop-page.component";
import {PlayroomPageComponent} from "./main/pages/playroom-page/playroom-page.component";
import {ErrorPageComponent} from "./pages/error-page/error-page.component";
import {MainLayoutComponent} from "./main/main-layout/main-layout.component";
import {GoodPageComponent} from "./main/pages/good-page/good-page.component";
import {ClientLoginComponent} from "./main/pages/client-login/client-login.component";

const routes: Routes = [
  {path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: '', component: HomePageComponent},
      {path: 'shop', component: ShopPageComponent},
      {path: 'good/:id', component: GoodPageComponent},
      {path: 'cart', component: CartPageComponent},
      {path: 'playroom', component: PlayroomPageComponent},
      {path: 'login', component: ClientLoginComponent}
    ]},
  {path: 'admin', loadChildren: () => import('./admin/admin-layout.module').then(mod => mod.AdminLayoutModule)},
  {path: '**', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
