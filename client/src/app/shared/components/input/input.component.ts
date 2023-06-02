import {Component, Input} from "@angular/core";
import {UntypedFormControl} from "@angular/forms";

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

}
