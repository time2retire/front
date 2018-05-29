import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../providers/user/user';
import { HttpClient } from '@angular/common/http';
//import { NgForm } from '@angular/forms';

import { WelcomePage } from '../welcome/welcome';
import { SavedPage } from '../saved/saved';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public _user: User,
    public _http: HttpClient) {
  }
  name_url: string = "https://nameless-wave-33070.herokuapp.com/api/appUsers?access_token="
  //user: this._user
  token = sessionStorage.getItem('token');

  // getName() {
  //   console.log(this.name_url + this.token);
  //   return this._http.get(this.name_url + this.token);
  // }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
    console.log(this._user.user)
  }
  logoutUser(user) {
    this._user.logout(user);
    console.log(this._user.user.email, " logged out");
    this.navCtrl.setRoot(WelcomePage);
  }
  mySavedCharts() {
    this.navCtrl.setRoot(SavedPage);
  }
}
