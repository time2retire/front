import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Api } from '../api/api';
import { ENV } from '@app/env';

@Injectable()
export class User {
  base_url: string = ENV.URL;
  appUsers_url: string = "api/appUsers/"
  token_url: string = "?access_token="
  login_url: string = "api/appUsers/login?include=user"
  logout_url: string = "logout?access_token="
  register_url: string = "api/appUsers"
  user: any;
  userBirthday: string = ''
  helloWorld: string = "hello world"
  charts: any[];
  chart_url: string = "/charts?access_token="

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
  logout() {
    console.log("logout function fires")
    let token = sessionStorage.getItem('token');
    this.http.post(this.base_url + this.appUsers_url + this.logout_url + token, this.user)
    .subscribe(() => {
      this.user = null;
      sessionStorage.clear();
    })
  }

  savedChart(chart) {
    let userID = sessionStorage.getItem('userId');
    let token = sessionStorage.getItem('token');
    console.log(this.base_url + this.appUsers_url + userID, this.chart_url, chart)
    return this.http.post(this.base_url + this.appUsers_url + userID + this.chart_url + token, chart)
    // https://nameless-wave-33070.herokuapp.com/api/appUsers/5afd09bbd0ac6b3a779a11cb/charts?access_token=jo8H66VjJb9VCn72CR7uk5mUStox9NyqrpRGmfV2F9xEHYvvUHiaxKOSZ9dm6Jr1

  }

  updateUser() {
    let userID = sessionStorage.getItem('userId')
    let token = sessionStorage.getItem('token')
    return this.http.patch(this.base_url + this.appUsers_url + userID + this.token_url + token, this.user)
  }
}
