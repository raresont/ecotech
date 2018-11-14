import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MessagePage } from './message.page';

import { SessionMessagePageRoutingModule } from './message-detail-routing.module';
///import { File } from '@ionic-native/file';
//import { FileTransfer } from '@ionic-native/file-transfer';
//import { DocumentViewer } from '@ionic-native/document-viewer';

const routes: Routes = [
  {
    path: '',
    component: MessagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SessionMessagePageRoutingModule
  ],
  declarations: [MessagePage]
//  ,
 // providers :[    File,
 //   DocumentViewer,
  //  FileTransfer]
})
export class MessagePageModule {}
