import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DramaPage } from './drama';

@NgModule({
  declarations: [
    DramaPage,
  ],
  imports: [
    IonicPageModule.forChild(DramaPage),
  ],
})
export class DramaPageModule {}
