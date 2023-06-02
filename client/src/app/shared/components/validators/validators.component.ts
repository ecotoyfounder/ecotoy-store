import {Component} from "@angular/core";
import {UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";

@Component({
  selector: "app-validators",
  templateUrl: "./validators.component.html",
  styleUrls: ["./validators.component.scss"]
})
export class ValidatorsComponent {

  form: UntypedFormGroup = this.formBuilder.group({
    name: ["", [Validators.required]],
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required, Validators.minLength(8)]]
  });

  constructor(private formBuilder: UntypedFormBuilder) {
  }

  getControl(controlName: string): UntypedFormControl {
    return this.form.controls[controlName] as UntypedFormControl;
  }

  submit() {
    if (this.form.invalid) return;
  }
}
