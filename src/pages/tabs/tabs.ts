import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SruladPage} from '../../pages/srulad/srulad';
import {CommentsPage} from '../../pages/comments/comments';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

 

  tab1: any;
  tab2: any;
  tabParams:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
     
    this.tab1 = SruladPage;
    this.tab2 = CommentsPage;
    this.tabParams = this.navParams.data;
    console.log(this.tabParams);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
