import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "./shared/shared.module";

import {AppComponent} from "./app.component";
import {SignupPageComponent} from "./admin/pages/signup-page/signup-page.component";
import {LoginPageComponent} from "./admin/pages/login-page/login-page.component";
import {ShopPageComponent} from "./shared/pages/shop-page/shop-page.component";
import {CartPageComponent} from "./main/pages/cart-page/cart-page.component";
import {CreateGoodPageComponent} from "./admin/pages/create-good-page/create-good-page.component";
import {HomePageComponent} from "./shared/pages/home-page/home-page.component";
import {PlayroomPageComponent} from "./main/pages/playroom-page/playroom-page.component";
import {ErrorPageComponent} from "./shared/pages/error-page/error-page.component";
import {DashboardPageComponent} from "./admin/pages/dashboard-page/dashboard-page.component";
import {EditGoodPageComponent} from "./admin/pages/edit-good-page/edit-good-page.component";
import {MainLayoutComponent} from "./main/main-layout/main-layout.component";
import {GoodPageComponent} from "./shared/pages/good-page/good-page.component";
import {ClientSignupComponent} from "./main/pages/client-signup/client-signup.component";
import {ClientDashboardComponent} from "./main/pages/client-dashboard/client-dashboard.component";
import {ReviewPageComponent} from "./main/pages/review-page/review-page.component";
import {ReviewCardComponent} from "./main/components/review-card/review-card.component";
import {GoodCardComponent} from "./main/components/good-card/good-card.component";
import {CatalogPageComponent} from "./shared/pages/catalog-page/catalog-page.component";
import {ClientLoginComponent} from "./main/pages/client-login/client-login.component";

@NgModule({
  declarations: [
    AppComponent,
    SignupPageComponent,
    LoginPageComponent,
    ShopPageComponent,
    CartPageComponent,
    CreateGoodPageComponent,
    HomePageComponent,
    PlayroomPageComponent,
    ErrorPageComponent,
    DashboardPageComponent,
    EditGoodPageComponent,
    MainLayoutComponent,
    GoodPageComponent,
    ClientSignupComponent,
    ClientDashboardComponent,
    ReviewPageComponent,
    ReviewCardComponent,
    GoodCardComponent,
    CatalogPageComponent,
    ClientLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
