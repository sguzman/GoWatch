import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {shows} from '../../data/shows'
import {AnimeLinksInterface} from "../../interfaces/animelinks.interface";
import {AnimePage} from "../anime/anime";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public shows: AnimeLinksInterface[] = [];

  constructor(public navCtrl: NavController) {
    this.shows = Object.keys(shows).map(a => shows[a]);
    console.log(this.shows);
  }

  public openAnime(item: AnimeLinksInterface) {
    this.navCtrl.push(AnimePage, {
      data: item
    })
  }

}
