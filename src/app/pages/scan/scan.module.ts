import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ScanPage } from './scan';
//import { OpenNativeSettings } from '@ionic-native/open-native-settings';
//import { OpenNativeSettings } from '@ionic-native/open-native-settings';
//import { NFC, Ndef } from '@ionic-native/nfc';

const routes: Routes = [
  {
    path: '',
    component: ScanPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ScanPage]
 // ,providers:[OpenNativeSettings,NFC, Ndef]
})
export class ScanPageModule {}
