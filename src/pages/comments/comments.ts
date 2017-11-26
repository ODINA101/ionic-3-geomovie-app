import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Facebook,FacebookLoginResponse,} from '@ionic-native/facebook';
import {AngularFireDatabase,} from 'angularfire2/database';

import * as localForage from "localforage";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {ReversePipe} from '../../pipes/reverse/reverse';

@IonicPage()
@Component({
  selector: 'page-comments',
  templateUrl: 'comments.html',
   
   
})
export class CommentsPage {
userData:any;
afdlist:any;
name:String;
comments:any;
commentText:any;
isLoggedIn=false;
getdbData:any;
db:any;
ls = localForage;
  constructor(public afd:AngularFireDatabase,public facebook:Facebook,public navCtrl: NavController, public navParams: NavParams) {
 this.ls.config({
  name: 'localDB',
  driver: [this.ls.INDEXEDDB, this.ls.WEBSQL, this.ls.LOCALSTORAGE],
  size: 200*1024*1024, // 200MB - used only by WebSql
});
 

 
  
    
   
   
    this.name = this.navParams.get('name');
    this.afdlist = afd.list(`/${this.name}`);
this.comments = this.afdlist.valueChanges().map((array) => array.reverse()) as Observable<any[]>;
 



this.ls.getItem('userData').then((data)=>{
 this.getdbData = data;
});
  }



newcomment() {
  if(this.userData.photo) {
  this.afdlist.push({name:this.userData.first_name,
                     photo:this.userData.photo,
                     comment:this.commentText
                     });
                    }else{
                      this.afdlist.push({name:this.getdbData.name,
                        photo:this.getdbData.photo,
                        comment:this.commentText
                        });
                    }
this.commentText = null;
                    


}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommentsPage');
  }


logout() {
  this.facebook.logout();
   
}
  //FB login

loginWithFB() {  
  this.facebook.login(['email','public_profile'])
  .then((response:FacebookLoginResponse)=> {
this.facebook.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)',[])
.then(profile => {
  this.userData = {email:profile['email'],first_name:profile['first_name'],photo:profile['picture_large']['data']['url'],username:profile['name']

}
this.isLoggedIn = true;

this.ls.setItem('userData',{name:this.userData.first_name,photo:this.userData.photo})
 
                         

});


  });

}



}
