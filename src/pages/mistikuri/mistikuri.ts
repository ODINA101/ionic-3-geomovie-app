import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http} from '@angular/http';
import {SruladPage} from '../srulad/srulad';
import { AlertController } from 'ionic-angular';
import {LoadingController} from 'ionic-angular';
import 'rxjs/add/operator/map';
/**
 * Generated class for the MistikuriPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mistikuri',
  templateUrl: 'mistikuri.html',
})
export class MistikuriPage {
  movies = [];
  constructor(public loadingCtrl:LoadingController,public navCtrl: NavController, public navParams: NavParams,public http:Http,public alertCtrl:AlertController) {
    let loader = this.loadingCtrl.create({
      content: "იტვირთება...",
        });
        loader.present();


    this.http.get('https://myionicapp.000webhostapp.com/api.php?q=mistika')
    .map(res => res.json())
    .subscribe(res => {
  this.movies = res.reverse();
  loader.dismiss();
  
    });
  }

  ionViewDidLoad() {
     
  }
  srulad(name,des,photo,video)  {
    
        this.navCtrl.push(SruladPage,{name:name,video:video,des:des,photo:photo});
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
