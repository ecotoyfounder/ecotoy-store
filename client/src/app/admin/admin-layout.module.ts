import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";

import {AdminLayoutComponent} from "./admin-layout/admin-layout.component";
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {DashboardPageComponent} from "./pages/dashboard-page/dashboard-page.component";
import {EditGoodPageComponent} from "./pages/edit-good-page/edit-good-page.component";
import {CreateGoodPageComponent} from "./pages/create-good-page/create-good-page.component";
import {SignupPageComponent} from "./pages/signup-page/signup-page.component";
import {StatisticPageComponent} from "./pages/statistic-page/statistic-page.component";
import {AdminAuthGuard} from "../@core/guards/admin-auth.guard";

@NgModule({
  declarations: [
    AdminLayoutComponent,
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
          {path: "dashboard", component: DashboardPageComponent, canActivate: [AdminAuthGuard]},
          {path: "statistic", component: StatisticPageComponent, canActivate: [AdminAuthGuard]},
          {path: "create", component: CreateGoodPageComponent, canActivate: [AdminAuthGuard]},
          {path: "good/:id/edit", component: EditGoodPageComponent, canActivate: [AdminAuthGuard]}
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
