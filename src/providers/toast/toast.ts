import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';
/*
  Generated class for the ToastProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ToastProvider {
  toast = this.toastCtrl.create({
    message: 'გთხოვთ დაუკავშირდეთ ინტერნეტს'
  });
  constructor(public http: HttpClient,public toastCtrl: ToastController) {
    console.log('Hello ToastProvider Provider');

  }
  presentToast() {
   
    this.toast.present();
  }

  dismissToast() {
    this.toast.dismiss();
  }

}
