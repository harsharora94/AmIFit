import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private loggedIn: boolean;
  constructor() { }

  login(username: string, password: string) {
    if (username == 'test' && password == 'test') {
      this.loggedIn = true;
    }
    else {
      this.loggedIn = false;
    }

    return this.loggedIn;
  }

  public IsLoggedIn(): boolean {
    return this.loggedIn;
  }
}
