import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {AdminLayoutComponent} from "./admin-layout/admin-layout.component";
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {DashboardPageComponent} from "./pages/dashboard-page/dashboard-page.component";
import {EditGoodPageComponent} from "./pages/edit-good-page/edit-good-page.component";
import {CreateGoodPageComponent} from "./pages/create-good-page/create-good-page.component";
import {AdminNavbarComponent} from "./components/admin-navbar/admin-navbar.component";
import {SharedModule} from "../shared/shared.module";
import {SignupPageComponent} from "./pages/signup-page/signup-page.component";
import {StatisticPageComponent} from "./pages/statistic-page/statistic-page.component";

@NgModule({
  declarations: [
    AdminLayoutComponent,
    AdminNavbarComponent,
    StatisticPageComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: "", component: AdminLayoutComponent, children: [
          {path: "", redirectTo: "/admin/login", pathMatch: "full"},
          {path: "login", component: LoginPageComponent},
          {path: "signup", component: SignupPageComponent},
          {path: "dashboard", component: DashboardPageComponent},
          {path: "statistic", component: StatisticPageComponent},
          {path: "create", component: CreateGoodPageComponent},
          {path: "good/:id/edit", component: EditGoodPageComponent}
        ]
      }
    ]),
  ],
  exports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminLayoutModule {
}
