import {Injectable} from "@angular/core";
import {Router} from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthService {

  private isAuth = false;

  constructor(private router: Router) {
  }

  logIn() {
    this.isAuth = true;
  }

  logOut(event: Event) {
    event.preventDefault();
    this.router.navigate(["/admin", "login"]);
    this.isAuth = false;
  }

}
