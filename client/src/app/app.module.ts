import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {SignupPageComponent} from "./admin/pages/signup-page/signup-page.component";
import {LoginPageComponent} from "./admin/pages/login-page/login-page.component";
import {ShopPageComponent} from "./pages/shop-page/shop-page.component";
import {CartPageComponent} from "./main/pages/cart-page/cart-page.component";
import {CreateGoodPageComponent} from "./admin/pages/create-good-page/create-good-page.component";
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {PlayroomPageComponent} from "./main/pages/playroom-page/playroom-page.component";
import {ErrorPageComponent} from "./pages/error-page/error-page.component";
import {DashboardPageComponent} from "./admin/pages/dashboard-page/dashboard-page.component";
import {EditGoodPageComponent} from "./admin/pages/edit-good-page/edit-good-page.component";
import {MainLayoutComponent} from "./main/main-layout/main-layout.component";
import {GoodPageComponent} from "./pages/good-page/good-page.component";
import {FooterComponent} from "./components/footer/footer.component";
import {ClientLoginComponent} from "./main/pages/client-login/client-login.component";
import {ClientSignupComponent} from "./main/pages/client-signup/client-signup.component";
import {ClientDashboardComponent} from "./main/pages/client-dashboard/client-dashboard.component";
import {Avatar} from "./components/avatar/avatar";
import { ReviewPageComponent } from './main/pages/review-page/review-page.component';
import { ReviewCardComponent } from './components/review-card/review-card.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupPageComponent,
    LoginPageComponent,
    ShopPageComponent,
    CartPageComponent,
    CreateGoodPageComponent,
    HomePageComponent,
    NavbarComponent,
    PlayroomPageComponent,
    ErrorPageComponent,
    DashboardPageComponent,
    EditGoodPageComponent,
    MainLayoutComponent,
    GoodPageComponent,
    FooterComponent,
    ClientLoginComponent,
    ClientSignupComponent,
    ClientDashboardComponent,
    Avatar,
    ReviewPageComponent,
    ReviewCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
