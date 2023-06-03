import {Component} from "@angular/core";
import {UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {User} from "../../../@core/interfaces/user";
import {AuthService} from "../../../@core/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: "app-validators",
  templateUrl: "./validators.component.html",
  styleUrls: ["./validators.component.scss"]
})
export class ValidatorsComponent {

  form: UntypedFormGroup = this.formBuilder.group({
    name: ["", []],
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required, Validators.minLength(8)]]
  });

  client = false;
  admin = false;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
  }

  getControl(controlName: string): UntypedFormControl {
    return this.form.controls[controlName] as UntypedFormControl;
  }

  submit() {
    if (this.form.invalid) {
      this.form.reset();
      return;
    }

    const user: User = {
      name: this.form.value.name,
      email: this.form.value.email,
      password: this.form.value.password
    };

    this.authService.signUp(user).subscribe(() => {
      this.form.reset();

      if (this.router.url === "/admin/signup") {
        this.admin = true;
        this.router.navigate(["/admin", "dashboard"]);
      }

      if (this.router.url === "/signup") {
        this.client = true;
        this.router.navigate(["/dashboard"]);
      }
    });

    this.authService.logIn(user).subscribe(() => {
      this.form.reset();

      if (this.router.url === "/admin/login") {
        this.admin = true;
        this.router.navigate(["/admin", "dashboard"]);
      }

      if (this.router.url === "/login") {
        this.client = true;
        this.router.navigate(["/dashboard"]);
      }
    });
  }
}
