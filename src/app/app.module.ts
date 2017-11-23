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
import {MdzafrsiujetianiPage } from '../pages/mdzafrsiujetiani/mdzafrsiujetiani';

import { AnimaciuriPage } from '../pages/animaciuri/animaciuri';
import { BiografiuliPage } from '../pages/biografiuli/biografiuli';
import { BoevikiPage } from '../pages/boeviki/boeviki';
import { DokumenturiPage } from '../pages/dokumenturi/dokumenturi';
import { DramaPage } from '../pages/drama/drama';
import { FantastikaPage } from '../pages/fantastika/fantastika';
import { IstoriuliPage } from '../pages/istoriuli/istoriuli';
import { KomediurPage } from '../pages/komediur/komediur';
import { MistikuriPage } from '../pages/mistikuri/mistikuri';
import { SashinelebaPage } from '../pages/sashineleba/sashineleba';
import { SatavgadasavloPage } from '../pages/satavgadasavlo/satavgadasavlo';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { FCM } from '@ionic-native/fcm';
import { Network } from '@ionic-native/network';
import { NetworkProvider } from '../providers/network/network';
import { ToastProvider } from '../providers/toast/toast';
import { DatabaseProvider } from '../providers/database/database';
import { TrileriPage } from '../pages/trileri/trileri';

import { SocialSharing } from '@ionic-native/social-sharing';

import {AdMobFree} from '@ionic-native/admob-free';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SruladPage,
    AnimaciuriPage,
    BiografiuliPage,
    BoevikiPage,
    DokumenturiPage,
    DramaPage,
    FantastikaPage,
    IstoriuliPage,
    KomediurPage,
    MistikuriPage,
    SashinelebaPage,
    SatavgadasavloPage,
    MdzafrsiujetianiPage,
    TrileriPage 
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SruladPage,
    AnimaciuriPage,
    BiografiuliPage,
    BoevikiPage,
    DokumenturiPage,
    DramaPage,
    FantastikaPage,
    IstoriuliPage,
    KomediurPage,
    MistikuriPage,
    SashinelebaPage,
    SatavgadasavloPage,
    MdzafrsiujetianiPage,
    TrileriPage  
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
  ]
})
export class AppModule {}
