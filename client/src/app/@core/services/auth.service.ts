import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {User} from "../interfaces/user";
import {BehaviorSubject, Observable, throwError} from "rxjs";
import {catchError, tap} from "rxjs/operators";
import {environment} from "../../../environments/environment.development";
import {FbAuthResponse} from "../interfaces/fb-auth-response";

@Injectable({
  providedIn: "root"
})
export class AuthService {

  public isAuth = false;
  public error$: BehaviorSubject<string> = new BehaviorSubject<string>("");

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
  }

  get token(): string | null {
    const fbTokenExpiration = localStorage.getItem("fb-token-expires");
    if (fbTokenExpiration) {
      const fbTokenExpiresDate = new Date(fbTokenExpiration);
      if (fbTokenExpiresDate < new Date()) {
        return null;
      }
    }
    return localStorage.getItem("fb-token");
  }

  signUp(user: User): Observable<any> {
    this.isAuth = true;
    user.returnSecureToken = true;
    return this.http.post<FbAuthResponse>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.apiKey}`, user);
  }

  logIn(user: User): Observable<any> {
    this.isAuth = true;
    user.returnSecureToken = true;
    return this.http.post<FbAuthResponse>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, user)
      .pipe(
        tap(this.setToken),
        catchError(this.handleError.bind(this))
      );
  }

  isAuthenticated() {
    return !!this.token;
  }

  logOut(event: Event) {
    event.preventDefault();
    this.isAuth = false;
    this.router.navigate(["/"]);
    this.setToken(null);
  }

  private handleError(error: HttpErrorResponse) {
    const {message} = error.error.error;

    switch (message) {
      case "INVALID_EMAIL":
        this.error$.next("Invalid Email");
        break;
      case "INVALID_PASSWORD":
        this.error$.next("Invalid Password");
        break;
      case "EMAIL_NOT_FOUND":
        this.error$.next("Email not found");
        break;
      case "EMAIL_EXISTS":
        this.error$.next("Email exists");
        break;
    }

    return throwError(() => error);
  }

  private setToken(response: FbAuthResponse | null) {
    if (response) {
      const expiresDate = new Date(new Date().getTime() + +response.expiresIn * 1000);
      localStorage.setItem("fb-token", response.idToken);
      localStorage.setItem("fb-token-expires", expiresDate.toString());
    } else {
      localStorage.clear();
    }
  }

}
