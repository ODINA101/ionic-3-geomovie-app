import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SruladPage } from '../pages/srulad/srulad';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {HttpClientModule} from '@angular/common/http';

import {HttpModule} from '@angular/http';
import {StreamingMedia} from '@ionic-native/streaming-media';
 

import { LocalNotifications } from '@ionic-native/local-notifications';
import { FCM } from '@ionic-native/fcm';
import { Network } from '@ionic-native/network';
import { NetworkProvider } from '../providers/network/network';
import { ToastProvider } from '../providers/toast/toast';
import { DatabaseProvider } from '../providers/database/database';
import { KategoriaPage } from '../pages/kategoria/kategoria';

import { SocialSharing } from '@ionic-native/social-sharing';

import {AdMobFree} from '@ionic-native/admob-free';
import {TabsPage} from '../pages/tabs/tabs';
import {CommentsPage} from '../pages/comments/comments';

import {Facebook} from '@ionic-native/facebook';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule, AngularFireDatabase} from 'angularfire2/database';


const fireBaseconfig = {
  apiKey: "AIzaSyCp9QI_mUB7OHDw_glk56IUIwhoV_UR6lM",
  authDomain: "movies-7b17f.firebaseapp.com",
  databaseURL: "https://movies-7b17f.firebaseio.com",
  projectId: "movies-7b17f",
  storageBucket: "movies-7b17f.appspot.com",
  messagingSenderId: "439505540900"
};
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SruladPage,
    KategoriaPage,
    TabsPage,
    CommentsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule,
    AngularFireDatabaseModule,    
    AngularFireModule.initializeApp(fireBaseconfig),
    
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SruladPage,
   KategoriaPage,
   TabsPage,
   CommentsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StreamingMedia,
    LocalNotifications,
    FCM,
    Network,
    NetworkProvider,
    ToastProvider,
    DatabaseProvider,
    SocialSharing,
    AdMobFree,
    Facebook,
    AngularFireDatabase,
   
  ]
})
export class AppModule {}
