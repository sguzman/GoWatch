import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {shows} from '../../data/shows'
import {AnimeLinksInterface} from "../../interfaces/animelinks.interface";

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

}
