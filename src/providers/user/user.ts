import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Api } from '../api/api';

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

  my_url: string = 'http://localhost:8000/api/userModels/'
  base_url_for_team = 'http://localhost:3000/api/appUsers/'
  login_url: string = 'http://localhost:3000/api/appUsers/login?access_token='
  register_url: string = 'http://localhost:3000/api/appUsers?access_token='

  token = sessionStorage.getItem('token');
  userID = sessionStorage.getItem('userId');

  constructor(public api: Api, public http: HttpClient) { }

  loginCustom(user) {
    return this.http.post(this.login_url + this.token, user)
  }

  signupCustom(signupUser) {
    return this.http.post(this.register_url + this.token, signupUser)
  }

  /**
   * Log the user out, which forgets the session
   */
  logout() {
    this._user = null;
  }

  /**
   * Process a login/signup response to store user data
   */
  _loggedIn(resp) {
    this._user = resp.user;
  }
}
