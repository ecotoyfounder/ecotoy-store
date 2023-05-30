import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {AdminLayoutComponent} from "./admin-layout/admin-layout.component";
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {DashboardPageComponent} from "./pages/dashboard-page/dashboard-page.component";
import {EditGoodPageComponent} from "./pages/edit-good-page/edit-good-page.component";
import {CreateGoodPageComponent} from "./pages/create-good-page/create-good-page.component";
import {AdminNavbarComponent} from "./components/admin-navbar/admin-navbar.component";
import {SharedModule} from "../common-components/shared.module";


@NgModule({
  declarations: [
    AdminLayoutComponent,
    AdminNavbarComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: "", component: AdminLayoutComponent, children: [
          {path: "", redirectTo: "/admin/login", pathMatch: "full"},
          {path: "login", component: LoginPageComponent},
          {path: "dashboard", component: DashboardPageComponent},
          {path: "create", component: CreateGoodPageComponent},
          {path: "good/:id/edit", component: EditGoodPageComponent}
        ]
      }
    ]),
  ],
  exports: [RouterModule]
})
export class AdminLayoutModule {
}
