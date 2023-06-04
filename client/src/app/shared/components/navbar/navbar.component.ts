import {Component} from "@angular/core";
import {AuthService} from "../../../@core/services/auth.service";
import {ValidatorsComponent} from "../validators/validators.component";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent {

  isDropdownOpen = false;

  constructor(
    protected authService: AuthService,
    protected vc: ValidatorsComponent
  ) {
  }

  showDropdownMenu(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  navigateTo() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

}
