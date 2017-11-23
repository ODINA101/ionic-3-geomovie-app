import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {
data = [];
  constructor(public http: Http) {
    
  }
  gethome() {
    this.http.get('https://myionicapp.000webhostapp.com/api.php?q=home')
    .map(res => res.json())
    .subscribe(res => {
 this.data = res;
  });
  
}


}
