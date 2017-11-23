import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {StreamingMedia,StreamingVideoOptions} from '@ionic-native/streaming-media';
import { ActionSheetController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
/**
 * Generated class for the SruladPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-srulad',
  templateUrl: 'srulad.html',
})
export class SruladPage {
  item = {
    name:'',
    description:'',
    photo:'',
    videoSD:'',
    videoHD:''
  }
  colors = ['danger','dark','default','primary'];
  pp = Math.random()*4;
  rand = this.colors[Math.floor(this.pp)];
  constructor(public navCtrl: NavController, public navParams: NavParams,
             public SMedia:StreamingMedia,
             public actionSheetCtrl:ActionSheetController,
             public loadingCtrl: LoadingController) {
  console.log(this.rand);
  
  this.item.name = this.navParams.get('name');
  this.item.description = this.navParams.get('des');
  this.item.photo = this.navParams.get('photo');

  this.item.videoSD = this.navParams.get('videoSD');
  this.item.videoHD = this.navParams.get('videoHD');
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SruladPage');
  }

  videoshow() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'ფილმის ხარისხი',
      buttons: [
        {
          text: 'მაღალი ხარისხი',
          role: 'destructive',
          handler: () => {
            let options:StreamingVideoOptions = {
              successCallback:()=>{console.log('ariis')},
              errorCallback:()=>{console.log()}
            }
            this.SMedia.playVideo(this.item.videoHD,options);
          }
        },{
          text: 'დაბალი ხარისხი',
          handler: () => {
            let options:StreamingVideoOptions = {
              successCallback:()=>{console.log('ariis')},
              errorCallback:()=>{console.log()}
            }
            this.SMedia.playVideo(this.item.videoSD,options);
          }
        },{
          text: 'დახურვა',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
    /////////
}
        
  
