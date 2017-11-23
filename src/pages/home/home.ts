import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SruladPage} from '../srulad/srulad';
import { AlertController,Platform } from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { LoadingController } from 'ionic-angular';
import { FCM } from '@ionic-native/fcm';
import {NetworkProvider} from '../../providers/network/network';
import { AdMobFree,AdMobFreeBannerConfig,AdMobFreeInterstitialConfig } from '@ionic-native/admob-free';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

movies = [];
items: any;
searchQuery: string = '';
mytoken:any;

  constructor(private adMobFree:AdMobFree,
              public navCtrl: NavController, 
              public http:Http,
              public alertCtrl: AlertController,
              public loadingCtrl: LoadingController,
            public plt:Platform,
           public fcm:FCM,
          public Network:NetworkProvider) {

         
               

            this.Network.watchcon();
            this.Network.watchdis();
              this.plt.ready().then(()=>{
               

                this.fcm.getToken().then((data)=>{
                  console.log(data);
                this.mytoken = JSON.stringify({token:data})
               this.http.post('https://myionicapp.000webhostapp.com/push/index.php',this.mytoken).subscribe(data => {
              console.log('success'); 
              }, error => {
                console.log("Oooops!");
                });;
              });
              
                this.fcm.onNotification().subscribe(data=>{
                  let alert = this.alertCtrl.create({
                    title: 'აღწერა',
                    subTitle: data.message,
                    buttons: ['დახურვა']
                    
                  });
                  alert.present();
                 });
              });

              this.initializeItems();
 
// getting data
                
 let loader = this.loadingCtrl.create({
   content: "იტვირთება...",
     });
                loader.present();
  this.http.get('https://myionicapp.000webhostapp.com/api.php?q=home')
  .map(res => res.json())
  .subscribe(res => {
this.movies = res;
this.items = this.movies.reverse();

loader.dismiss();
this.showBannerAd();
setTimeout(this.showInterstitialAd(),4000);

  });
  }




  initializeItems() {
    this.items = this.movies;
  }
 
    async showBannerAd() {
    try {
      const bannerConfig: AdMobFreeBannerConfig = {
       id: 'ca-app-pub-6370427711797263/5417078562',
        isTesting: false,
        autoShow: true
      }

      this.adMobFree.banner.config(bannerConfig);

      const result = await this.adMobFree.banner.prepare();
      console.log(result);
    }
    catch (e) {
      console.error(e);
    }

  }
 
  
//srulad naxva

  srulad(name,des,photo,videoSD,videoHD)  {

    this.navCtrl.push(SruladPage,{name:name,des:des,photo:photo,videoSD:videoSD,videoHD:videoHD});
  }




///////////////////////////////////////////////////////////////////////////



async showInterstitialAd() {
  try {
    const interstitialConfig: AdMobFreeInterstitialConfig = {
      id: 'ca-app-pub-6370427711797263/8829887578',
      isTesting: false,
      autoShow: true
    }

    this.adMobFree.interstitial.config(interstitialConfig);

    const result = await this.adMobFree.interstitial.prepare();
    console.log(result);
  }
  catch (e) {
    console.error(e)
  }
}
 



     

  // marto HomeShi
  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.name.indexOf(val) > -1);
      })
    }else{
      return (this.movies)
    }
  }

//agwera
 
agwera(data) {
    let alert = this.alertCtrl.create({
      title: 'აღწერა',
      subTitle: data,
      buttons: ['დახურვა']
      
    });
    alert.present();
  }
}

 