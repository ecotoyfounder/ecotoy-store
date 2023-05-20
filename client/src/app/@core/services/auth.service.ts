import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuth = false

  logIn() {
    this.isAuth = true
  }

  logOut() {
    this.isAuth = false
  }

}
