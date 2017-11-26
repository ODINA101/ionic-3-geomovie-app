import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KategoriaPage } from './kategoria';

@NgModule({
  declarations: [
    KategoriaPage,
  ],
  imports: [
    IonicPageModule.forChild(KategoriaPage),
  ],
})
export class KategoriaPageModule {}
