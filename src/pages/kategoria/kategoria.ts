
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http} from '@angular/http';
import { AlertController } from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';
import {LoadingController} from 'ionic-angular';
import 'rxjs/add/operator/map';
 
/**
 * Generated class for the KategoriaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-kategoria',
  templateUrl: 'kategoria.html',
})
export class KategoriaPage {
  colors = ['danger','dark','default','primary'];
  pp = Math.random()*4;
  rand = this.colors[Math.floor(this.pp)];
  movies = [];
  limit = 4;
  test:'';
  data = {
    title:'',
    url:''
  }
  constructor(public loadingCtrl:LoadingController
    ,public navCtrl: NavController, public navParams: NavParams,public http:Http,
    public alertCtrl:AlertController) {
  
  this.data.title = this.navParams.get('title');
  this.data.url = this.navParams.get('url');
  
  let loader = this.loadingCtrl.create({
    content: "იტვირთება...",
      });
      loader.present();



  this.http.get(this.data.url)
  .map(res => res.json())
  .subscribe(res => {
this.movies = res.reverse();
loader.dismiss();
  });
  

}
srulad(name,des,photo,videoSD,videoHD)  {
  
      this.navCtrl.push(TabsPage,{name:name,des:des,photo:photo,videoSD:videoSD,videoHD:videoHD});
    }
  
    doInfinite(infiniteScroll) {
      setTimeout(() => {
        
         this.limit+= 2;
        console.log('Async operation has ended');
        infiniteScroll.complete();
      }, 500);
    }
    
  
  
  agwera(data) {
      let alert = this.alertCtrl.create({
        title: 'აღწერა',
        subTitle: data,
        buttons: ['დახურვა']
      });
      alert.present();
    }

}

  

 






 