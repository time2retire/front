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
  //_chart: any;
  //_user: any;
  base_url: string = ENV.URL;
  appUsers_url: string = "api/appUsers/"
  token_url: string = "?access_token="
  login_url: string = "api/appUsers/login?include=user"
  logout_url: string = "logout?access_token="
  register_url: string = "api/appUsers"
  user: any;
  helloWorld: string = "hello world"
  charts: any[];
  chart_url: string = "/charts?access_token="


  // token = sessionStorage.getItem('token');
  //userID = sessionStorage.getItem('userId');

  constructor(public api: Api, public http: HttpClient) { }

  loginCustom(user) {
    return this.http.post(this.base_url + this.login_url, user)
  }

  signupCustom(signupUser) {
    return this.http.post(this.base_url + this.register_url, signupUser)
  }

  /**
   * Log the user out, which forgets the session
   */
  logout(user) {
    console.log("logout function fires")
    let token = sessionStorage.getItem('token');
    this.user = null;
    return this.http.post(this.base_url + this.appUsers_url + this.logout_url + token, user)
  }

  /**
   * Process a login/signup response to store user data
   */
  _loggedIn(resp) {
    // this.user = resp.user;
  }
  savedChart(chart) {
    // console.log("what is the chart info?", chart)
    let userID = sessionStorage.getItem('userId');
    let token = sessionStorage.getItem('token');
    console.log(this.base_url + this.appUsers_url + userID, this.chart_url, chart)
    return this.http.post(this.base_url + this.appUsers_url + userID + this.chart_url + token, chart)
    // https://nameless-wave-33070.herokuapp.com/api/appUsers/5afd09bbd0ac6b3a779a11cb/charts?access_token=jo8H66VjJb9VCn72CR7uk5mUStox9NyqrpRGmfV2F9xEHYvvUHiaxKOSZ9dm6Jr1

  }
}
