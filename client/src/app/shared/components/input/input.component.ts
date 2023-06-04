import {Component, Input} from "@angular/core";
import {UntypedFormControl} from "@angular/forms";
import {AuthService} from "../../../@core/services/auth.service";

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.scss"]
})
export class InputComponent {

  @Input() control: UntypedFormControl = new UntypedFormControl();

  @Input() label = "";
  @Input() placeholder = "";
  @Input() type = "";
  @Input() eyeIcon = true;

  constructor(public authService: AuthService) {
  }

  togglePasswordIsVisible() {
    this.type === "password" ? (this.type = "text") : (this.type = "password");
    this.eyeIcon = !this.eyeIcon;
  }
}
