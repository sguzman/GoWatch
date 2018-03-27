import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {AnimeSummaryComponent} from "../components/anime-summary/anime-summary";
import {AnimePage} from "../pages/anime/anime";
import {WatchPage} from "../pages/watch/watch";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AnimePage,
    WatchPage,
    AnimeSummaryComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AnimePage,
    WatchPage,
    AnimeSummaryComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
