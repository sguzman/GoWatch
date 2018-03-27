import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AnimeLinksInterface} from "../../interfaces/animelinks.interface";

/**
 * Generated class for the AnimePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-anime',
  templateUrl: 'anime.html',
})
export class AnimePage {
  public item: AnimeLinksInterface;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = this.navParams.get('data');
    console.log(this.item);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnimePage');
  }

  public openWatch(item) {

  }

}
