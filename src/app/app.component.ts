import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
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
import { TrileriPage } from '../pages/trileri/trileri';
import { SocialSharing } from '@ionic-native/social-sharing';
import {MdzafrsiujetianiPage } from '../pages/mdzafrsiujetiani/mdzafrsiujetiani';

import { HomePage } from '../pages/home/home';
import { LocalNotifications } from '@ionic-native/local-notifications';
@Component({
  templateUrl: 'app.html',
  providers:[SplashScreen]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public socialSharing:SocialSharing,public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
    public localNotifications: LocalNotifications) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'მთავარი', component: HomePage },
      { title: 'ანიმაციური', component: AnimaciuriPage },
      {title:'საშინელება',component:SashinelebaPage},
      { title: 'სათავგადასავლო', component: SatavgadasavloPage },
      { title: 'ისტორიული', component: IstoriuliPage },
      {title:'კომედიური',component:KomediurPage},
      { title: 'ფანტასტიკური', component: FantastikaPage },
      { title: 'დრამა', component: DramaPage },
      { title: 'დოკუმენტრური', component: DokumenturiPage  },
      { title: 'ბოევიკი', component: BoevikiPage },
      { title: 'ბიოგრაფიული', component: BiografiuliPage },
      { title:'მძაფრსიუჟეტიანი',component:MdzafrsiujetianiPage },
      {title:'თრილერი',component:TrileriPage},
      {title:'მისტიკური',component:MistikuriPage}
      

    ];
     
  }

/*     _______. __    __       ___      .______       _______ 
    /       ||  |  |  |     /   \     |   _  \     |   ____|
   |   (----`|  |__|  |    /  ^  \    |  |_)  |    |  |__   
    \   \    |   __   |   /  /_\  \   |      /     |   __|  
.----)   |   |  |  |  |  /  _____  \  |  |\  \----.|  |____ 
|_______/    |__|  |__| /__/     \__\ | _| `._____||_______|*/

shareItem() {
  // this code is to use the social sharing plugin
  // message, subject, file, url
  this.socialSharing.share("" ,"", "","https://play.google.com/store/apps/details?id=irakli.samniashvili.app")
  .then(() => {
    console.log('success');
  })
  .catch((e) => {
    console.log(e);
  });
}




  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
