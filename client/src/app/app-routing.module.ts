import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {CartPageComponent} from "./pages/cart-page/cart-page.component";
import {ShopPageComponent} from "./pages/shop-page/shop-page.component";
import {PlayroomPageComponent} from "./pages/playroom-page/playroom-page.component";
import {ErrorPageComponent} from "./pages/error-page/error-page.component";
import {MainLayoutComponent} from "./shared/components/main-layout/main-layout.component";
import {GoodPageComponent} from "./pages/good-page/good-page.component";

const routes: Routes = [
  {path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: '', component: HomePageComponent},
      {path: 'shop', component: ShopPageComponent},
      {path: 'good/:id', component: GoodPageComponent},
      {path: 'cart', component: CartPageComponent},
      {path: 'playroom', component: PlayroomPageComponent}
    ]},
  {path: 'admin', loadChildren: () => import('./admin/admin.module').then(mod => mod.AdminModule)},
  {path: '**', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
