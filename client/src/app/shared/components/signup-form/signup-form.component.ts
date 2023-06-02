import {Component} from '@angular/core';
import {ValidatorsComponent} from "../validators/validators.component";

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent {

  constructor(protected vc: ValidatorsComponent) {
  }

}
