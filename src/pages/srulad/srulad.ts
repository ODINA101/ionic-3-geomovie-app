import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {StreamingMedia,StreamingVideoOptions} from '@ionic-native/streaming-media';
import { ActionSheetController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
 import {HomePage} from '../home/home';
 import { App } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-srulad',
  templateUrl: 'srulad.html',
})
export class SruladPage {
   options = {
    successCallback: function() {
      console.log("Video was closed without error.");
    },
    errorCallback: function(errMsg) {
      console.log("Error! " + errMsg);
    },
    orientation: 'landscape',
    shouldAutoClose: false,  // true(default)/false
    controls: true // true(default)/false. Used to hide controls on fullscreen
  };
  item = {
    name:'',
    description:'',
    photo:'',
    videoSD:'',
    videoHD:''
  }
  
  constructor(public app:App,public navCtrl: NavController, public navParams: NavParams,
             public SMedia:StreamingMedia,
             public actionSheetCtrl:ActionSheetController,
             public loadingCtrl: LoadingController) {
  
  this.item.name = this.navParams.get('name');
  this.item.description = this.navParams.get('des');
  this.item.photo = this.navParams.get('photo');

  this.item.videoSD = this.navParams.get('videoSD');
  this.item.videoHD = this.navParams.get('videoHD');
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SruladPage');
  }
setroot() {
  this.app.getRootNav().setRoot(HomePage);
}

 
  videoshow() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'ფილმის ხარისხი',
      buttons: [
        {
          text: 'მაღალი ხარისხი',
          role: 'destructive',
          handler: () => {
            
            this.SMedia.playVideo(this.item.videoHD,this.options);
          }
        },{
          text: 'დაბალი ხარისხი',
          handler: () => {
            
            this.SMedia.playVideo(this.item.videoSD,this.options);
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
        
  
