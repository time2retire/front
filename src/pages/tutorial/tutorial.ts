import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController, Platform } from 'ionic-angular';

import { TranslateService } from '@ngx-translate/core';
import { ENV } from '@app/env'

export interface Slide {
  title: string;
  description: string;
  image: string;
}

@IonicPage()
@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html'
})
export class TutorialPage {
  slides: Slide[];
  showSkip = true;
  dir: string = 'ltr';

  constructor(public navCtrl: NavController, public menu: MenuController, translate: TranslateService, public platform: Platform) {
    this.dir = platform.dir();
    translate.get([
      "TUTORIAL_SLIDE1_TITLE",
      "TUTORIAL_SLIDE1_DESCRIPTION",
      "TUTORIAL_SLIDE2_TITLE",
      "TUTORIAL_SLIDE2_DESCRIPTION",
      "TUTORIAL_SLIDE3_TITLE",
      "TUTORIAL_SLIDE3_DESCRIPTION",
      "TUTORIAL_SLIDE3_1_TITLE",
      "TUTORIAL_SLIDE3_1_DESCRIPTION",
      "TUTORIAL_SLIDE5_TITLE",
      "TUTORIAL_SLIDE5_DESCRIPTION",
      "TUTORIAL_SLIDE6_TITLE",
      "TUTORIAL_SLIDE6_DESCRIPTION",
      "TUTORIAL_SLIDE7_TITLE",
      "TUTORIAL_SLIDE7_DESCRIPTION",
      "TUTORIAL_SLIDE8_TITLE",
      "TUTORIAL_SLIDE8_DESCRIPTION",
      "TUTORIAL_SLIDE9_TITLE",
      "TUTORIAL_SLIDE9_DESCRIPTION",
      "TUTORIAL_SLIDE10_TITLE",
      "TUTORIAL_SLIDE10_DESCRIPTION",
      "TUTORIAL_SLIDE11_TITLE",
      "TUTORIAL_SLIDE11_DESCRIPTION",
      "TUTORIAL_SLIDE12_TITLE",
      "TUTORIAL_SLIDE12_DESCRIPTION",
    ]).subscribe(
      (values) => {
        console.log(ENV)
        // console.log('Loaded values', values);
        this.slides = [
          {
            title: values.TUTORIAL_SLIDE1_TITLE,
            description: values.TUTORIAL_SLIDE1_DESCRIPTION,
            image: 'assets/img/newImages/cash-coins-currency-33692.jpg',
          },
          {
            title: values.TUTORIAL_SLIDE2_TITLE,
            description: values.TUTORIAL_SLIDE2_DESCRIPTION,
            image: 'assets/img/newImages/Time2Retire 00 Tutorial.png',
          },
          {
            title: values.TUTORIAL_SLIDE3_TITLE,
            description: values.TUTORIAL_SLIDE3_DESCRIPTION,
            image: 'assets/img/newImages/Time2Retire 01 Welcome 01.png',
          },
          {
            title: values.TUTORIAL_SLIDE3_1_TITLE,
            description: values.TUTORIAL_SLIDE3_1_DESCRIPTION,
            image: 'assets/img/newImages/Time2Retire 02 Signup.png',
          },
          {
            title: values.TUTORIAL_SLIDE5_TITLE,
            description: values.TUTORIAL_SLIDE5_DESCRIPTION,
            image: 'assets/img/newImages/Time2Retire 03 Sign in.png',
          },
          {
            title: values.TUTORIAL_SLIDE6_TITLE,
            description: values.TUTORIAL_SLIDE6_DESCRIPTION,
            image: 'assets/img/newImages/Time2Retire 04 Profile 01.png',
          },
          {
            title: values.TUTORIAL_SLIDE7_TITLE,
            description: values.TUTORIAL_SLIDE7_DESCRIPTION,
            image: 'assets/img/newImages/Time2Retire 04 Profile 02.png',
          },
          {
            title: values.TUTORIAL_SLIDE8_TITLE,
            description: values.TUTORIAL_SLIDE8_DESCRIPTION,
            image: 'assets/img/newImages/Time2Retire 04 Profile 03.png',
          },
          {
            title: values.TUTORIAL_SLIDE9_TITLE,
            description: values.TUTORIAL_SLIDE9_DESCRIPTION,
            image: 'assets/img/newImages/Time2Retire 04 Profile 04.png',
          },
          {
            title: values.TUTORIAL_SLIDE10_TITLE,
            description: values.TUTORIAL_SLIDE10_DESCRIPTION,
            image: 'assets/img/newImages/Time2Retire 05 Hamburger-Sidemenu.png',
          },
          {
            title: values.TUTORIAL_SLIDE11_TITLE,
            description: values.TUTORIAL_SLIDE11_DESCRIPTION,
            image: 'assets/img/newImages/Time2Retire 06 Create Chart 01.png',
          },
          {
            title: values.TUTORIAL_SLIDE12_TITLE,
            description: values.TUTORIAL_SLIDE12_DESCRIPTION,
            image: 'assets/img/newImages/Time2Retire 06 Create Chart 02.png',
          },
          {
            title: values.TUTORIAL_SLIDE13_TITLE,
            description: values.TUTORIAL_SLIDE13_DESCRIPTION,
            image: 'assets/img/newImages/Time2Retire 07 Saved Charts 01.png',
          }
        ];
      });
  }

  startApp() {
    this.navCtrl.setRoot('WelcomePage', {}, {
      animate: true,
      direction: 'forward'
    });
  }

  onSlideChangeStart(slider) {
    this.showSkip = !slider.isEnd();
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(false);
  }

  ionViewWillLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }

}
