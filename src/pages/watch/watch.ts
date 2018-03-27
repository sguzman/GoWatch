import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the WatchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-watch',
  templateUrl: 'watch.html',
})
export class WatchPage {
  public link: string;
  public anime: string;
  public idx: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.link = this.navParams.get('link');
    this.anime = this.navParams.get('anime');
    this.idx = this.navParams.get('idx');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WatchPage');
  }

}
