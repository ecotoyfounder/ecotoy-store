import {NgModule} from "@angular/core";
import {PreloadAllModules, RouterModule, Routes} from "@angular/router";

import {HomePageComponent} from "./shared/pages/home-page/home-page.component";
import {CartPageComponent} from "./main/pages/cart-page/cart-page.component";
import {ShopPageComponent} from "./shared/pages/shop-page/shop-page.component";
import {PlayroomPageComponent} from "./main/pages/playroom-page/playroom-page.component";
import {ErrorPageComponent} from "./shared/pages/error-page/error-page.component";
import {MainLayoutComponent} from "./main/main-layout/main-layout.component";
import {GoodPageComponent} from "./shared/pages/good-page/good-page.component";
import {CommonLoginComponent} from "./shared/pages/common-login/common-login.component";
import {CatalogPageComponent} from "./shared/pages/catalog-page/catalog-page.component";
import {ClientLoginComponent} from "./main/pages/client-login/client-login.component";
import {ClientSignupComponent} from "./main/pages/client-signup/client-signup.component";
import {ClientDashboardComponent} from "./main/pages/client-dashboard/client-dashboard.component";
import {AuthGuard} from "./@core/guards/auth.guard";

const routes: Routes = [
  {
    path: "", component: MainLayoutComponent, children: [
      {path: "", redirectTo: "/", pathMatch: "full"},
      {path: "", component: HomePageComponent},
      {
        path: "shop", component: ShopPageComponent, children: [
          {path: "", redirectTo: "catalog", pathMatch: "full"},
          {path: "", component: CatalogPageComponent},
          {path: "good/:id", component: GoodPageComponent}
        ]
      },
      {path: "dashboard", component: ClientDashboardComponent, canActivate: [AuthGuard]},
      {path: "cart", component: CartPageComponent, canActivate: [AuthGuard]},
      {path: "playroom", component: PlayroomPageComponent},
      {path: "common-login", component: CommonLoginComponent},
      {path: "login", component: ClientLoginComponent},
      {path: "signup", component: ClientSignupComponent}
    ]
  },
  {path: "admin", loadChildren: () => import("./admin/admin-layout.module").then(mod => mod.AdminLayoutModule)},
  {path: "**", component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
