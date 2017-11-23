import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BoevikiPage } from './boeviki';

@NgModule({
  declarations: [
    BoevikiPage,
  ],
  imports: [
    IonicPageModule.forChild(BoevikiPage),
  ],
})
export class BoevikiPageModule {}
