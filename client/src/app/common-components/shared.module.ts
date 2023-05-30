import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SearchComponent} from "./components/search/search.component";
import {FilterComponent} from "./components/filter/filter.component";
import {SelectComponent} from "./components/select/select.component";
import {Avatar} from "./components/avatar/avatar";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    SearchComponent,
    FilterComponent,
    SelectComponent,
    Avatar
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SearchComponent,
    FilterComponent,
    SelectComponent,
    Avatar
  ]
})
export class SharedModule {
}
