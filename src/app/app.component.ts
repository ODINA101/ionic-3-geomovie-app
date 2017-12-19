import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
 

import { SocialSharing } from '@ionic-native/social-sharing';
import {KategoriaPage} from '../pages/kategoria/kategoria';
import { HomePage } from '../pages/home/home';
import { LocalNotifications } from '@ionic-native/local-notifications';
@Component({
  templateUrl: 'app.html',
  providers:[SplashScreen]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any,url:any}>;

  constructor(public socialSharing:SocialSharing,public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
    public localNotifications: LocalNotifications) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'მთავარი', component: KategoriaPage,url:'http://samniashvili.online/api.php?q=home'},
      { title: 'ანიმაციური', component: KategoriaPage,url:'http://samniashvili.online/api.php?q=animaciuri'},
      {title:'საშინელება',component:KategoriaPage,url:'http://samniashvili.online/api.php?q=sashineleba'},
      { title: 'სათავგადასავლო', component:KategoriaPage,url:'http://samniashvili.online/api.php?q=satavgadasavlo'},
      { title: 'ისტორიული', component: KategoriaPage,url:'http://samniashvili.online/api.php?q=istoriuli'},
      {title:'კომედიური',component:KategoriaPage,url:'http://samniashvili.online/api.php?q=komediuri'},
      { title: 'ფანტასტიკური', component: KategoriaPage ,url:'http://samniashvili.online/api.php?q=fantastika'},
      { title: 'დრამა', component: KategoriaPage,url:'http://samniashvili.online/api.php?q=drama'},
      { title: 'დოკუმენტრური', component: KategoriaPage,url:'http://samniashvili.online/api.php?q=dokumenturi' },
      { title: 'ბოევიკი', component:KategoriaPage,url:'http://samniashvili.online/api.php?q=boeviki' },
      { title: 'ბიოგრაფიული', component: KategoriaPage ,url:'http://samniashvili.online/api.php?q=biografiuli'},
      { title:'მძაფრსიუჟეტიანი',component:KategoriaPage ,url:'http://samniashvili.online/api.php?q=mdzafrsiujetiani'},
      {title:'თრილერი',component:KategoriaPage,url:'http://samniashvili.online/api.php?q=trileri'},
      {title:'მისტიკური',component:KategoriaPage,url:'http://samniashvili.online/api.php?q=mistika'},
      {title:'კრიმინალური',component:KategoriaPage,url:'http://samniashvili.online/api.php?q=kriminaluri'}
     
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
    this.nav.setRoot(page.component,{title:page.title,url:page.url});
  }
}
