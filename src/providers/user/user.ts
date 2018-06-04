import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Api } from '../api/api';
import { ENV } from '@app/env';

/**
 * Most apps have the concept of a User. This is a simple provider
 * with stubs for login/signup/etc.
 *
 * This User provider makes calls to our API at the `login` and `signup` endpoints.
 *
 * By default, it expects `login` and `signup` to return a JSON object of the shape:
 *
 * ```json
 * {
 *   status: 'success',
 *   user: {
 *     // User fields your app needs, like "id", "name", "email", etc.
 *   }
 * }Ø
 * ```
 *
 * If the `status` field is not `success`, then an error is detected and returned.
 */
@Injectable()
export class User {
  _user: any;
  base_url: string = ENV.URL;
  token_url: string = "?access_token="
  login_url: string = "api/appUsers/login?include=user"
  logout_url: string = "logout?access_token="
  register_url: string = "https://nameless-wave-33070.herokuapp.com/api/appUsers?access_token="
  user: any;
  helloWorld: string = "hello world"

  token = sessionStorage.getItem('token');
  userID = sessionStorage.getItem('userId');

  constructor(public api: Api, public http: HttpClient) { }

  loginCustom(user) {
    return this.http.post(this.base_url + this.login_url, user)
  }

  signupCustom(signupUser) {
    return this.http.post(this.register_url + this.token, signupUser)
  }

  /**
   * Log the user out, which forgets the session
   */
  logout(user) {
    console.log("logout function fires")
    this.user = null;
    return this.http.post(this.base_url + this.logout_url + this.token, user)
  }

  /**
   * Process a login/signup response to store user data
   */
  _loggedIn(resp) {
    this._user = resp.user;
  }
}
