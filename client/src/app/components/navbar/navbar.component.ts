import { Component } from '@angular/core';
import {AuthService} from "../../@core/services/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(protected auth: AuthService) {
  }
}
