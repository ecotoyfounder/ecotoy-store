import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {SearchComponent} from "./components/search/search.component";
import {FilterComponent} from "./components/filter/filter.component";
import {SelectComponent} from "./components/select/select.component";
import {Avatar} from "./components/avatar/avatar";
import {RouterModule} from "@angular/router";
import {CommonLoginComponent} from "./pages/common-login/common-login.component";
import {BackButtonComponent} from "./components/back-button/back-button.component";
import {LoginFormComponent} from "./components/login-form/login-form.component";
import {ReactiveFormsModule} from "@angular/forms";
import {SignupFormComponent} from "./components/signup-form/signup-form.component";
import {ValidatorsComponent} from "./components/validators/validators.component";
import {InputComponent} from "./components/input/input.component";
import {HttpClientModule} from "@angular/common/http";
import {AuthService} from "../@core/services/auth.service";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {FooterComponent} from "./components/footer/footer.component";


@NgModule({
  declarations: [
    CommonLoginComponent,
    SearchComponent,
    FilterComponent,
    SelectComponent,
    Avatar,
    BackButtonComponent,
    LoginFormComponent,
    SignupFormComponent,
    ValidatorsComponent,
    NavbarComponent,
    FooterComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    CommonLoginComponent,
    SearchComponent,
    FilterComponent,
    SelectComponent,
    Avatar,
    NavbarComponent,
    FooterComponent,
    BackButtonComponent,
    LoginFormComponent,
    SignupFormComponent,
    HttpClientModule
  ],
  providers: [
    ValidatorsComponent
  ]
})
export class SharedModule {
}
