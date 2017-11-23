import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Network } from '@ionic-native/network';
import {ToastProvider} from '../toast/toast';
/*
  Generated class for the NetworkProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NetworkProvider {

  constructor(public http: HttpClient,public network:Network,public toast:ToastProvider) {
  
  }

  watchdis() {
    let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
      this.toast.presentToast();
    });
  }
  watchcon() {
    let connectSubscription = this.network.onConnect().subscribe(() => {
      console.log('network connected!');
      this.toast.dismissToast();
      // We just got a connection but we need to wait briefly
       // before we determine the connection type. Might need to wait.
      // prior to doing any api requests as well.
      
    });
  }
}
