import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ShopPageComponent } from './pages/shop-page/shop-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PlayroomPageComponent } from './pages/playroom-page/playroom-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupPageComponent,
    LoginPageComponent,
    ShopPageComponent,
    CartPageComponent,
    SettingsPageComponent,
    MainPageComponent,
    NavbarComponent,
    PlayroomPageComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
