import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {User} from "../interfaces/user";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";
import {environment} from "../../../environments/environment.development";
import {FbAuthResponse} from "../interfaces/fb-auth-response";

@Injectable({
  providedIn: "root"
})
export class AuthService {

  public isAuth = false;

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
  }

  get token(): string {
    return "";
  }

  signUp(user: User): Observable<any> {
    this.isAuth = true;
    return this.http.post<FbAuthResponse>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.apiKey}`, user);
  }

  logIn(user: User): Observable<any> {
    this.isAuth = true;
    return this.http.post<FbAuthResponse>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, user)
      .pipe(
        tap(this.setToken)
      );
  }

  logOut(event: Event) {
    event.preventDefault();
    this.router.navigate(["/"]);
    this.isAuth = false;
  }

  isAuthenticated() {
    return !!this.token;
  }

  private setToken(response: FbAuthResponse) {
    console.log(response);
  }

}
