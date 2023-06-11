import {Injectable} from "@angular/core";
import {Router, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {AuthService} from "../services/auth.service";

@Injectable({
  providedIn: "root"
})
export class AdminAuthGuard {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(["/admin/login"]);
    }
    return true;
  }
}
