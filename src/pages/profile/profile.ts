import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { User } from '../../providers/user/user';
import { HttpClient } from '@angular/common/http';
import { ENV } from '@app/env';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public _user: User,
    public loader: LoadingController,
    public toastCtrl: ToastController,
    public _http: HttpClient) {
  }
  editting: Boolean = false;
  chartData: any[] = [];

  // https://nameless-wave-33070.herokuapp.com/api/appUsers/5b1d739ab33893000fb46c3c/charts/1?access_token=jo8H66VjJb9VCn72CR7uk5mUStox9NyqrpRGmfV2F9xEHYvvUHiaxKOSZ9dm6Jr1

  charts: string = "/charts"
  token_url: string = "?access_token="
  appUser_url: string = 'api/appUsers/'
  base_url: string = ENV.URL
  //user: this._user
  userID = sessionStorage.getItem('userId');
  token = sessionStorage.getItem('token');

  // getName() {
  //   console.log(this.name_url + this.token);
  //   return this._http.get(this.name_url + this.token);
  // }
  ionViewDidLoad() {
    let loader = this.loader.create({
    })
    loader.present()
    this._http.get(this.base_url + this.appUser_url + this.userID + this.charts + this.token_url + this.token).subscribe(
      (chartLog: any) => {
        console.log(chartLog)
        this.chartData = chartLog;
        loader.dismiss();
      }, err => {
        console.error(err)
        loader.dismiss()
      })
  }
  // logoutUser() {
  //   this.navCtrl.setRoot("WelcomePage")
  //     .then(() => {
  //       this._user.logout();
  //       console.log("User is logged out", this._user.user)
  //     });
  // }

  allowEdit() {
    this.editting = true;
  }

  updateProfile(){
    let loader = this.loader.create({
    })
    loader.present()
    this._user.updateUser()
    .subscribe(_ => {
      loader.dismiss();
      this.editting = false;
    }, err => {
      console.error(err)
      loader.dismiss()
      let toast = this.toastCtrl.create({
        message: 'Unable to update at this time',
        duration: 2000,
        position: 'top'
      });
      toast.present()
    })
  }

  getSavedChart(chart) {
    this.navCtrl.setRoot('ChartPage', {
      data: chart
    })
  }

  goToInput() {
    this.navCtrl.setRoot("ChartPage")
  }
}
