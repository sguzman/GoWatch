import {Component, Input} from '@angular/core';
import {AnimeLinksInterface} from "../../interfaces/animelinks.interface";

@Component({
  selector: 'anime-summary',
  templateUrl: 'anime-summary.html'
})
export class AnimeSummaryComponent {

  @Input() item: AnimeLinksInterface;
  @Input() idx: number;

  constructor() {
    console.log('Hello AnimeSummaryComponent Component');
  }

}
