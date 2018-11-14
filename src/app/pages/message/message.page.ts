import { Component } from '@angular/core';

import { ConferenceData } from '../../providers/conference-data';
import { ActivatedRoute } from '@angular/router';
//import { DocumentViewer,DocumentViewerOptions  } from '@ionic-native/document-viewer';
import { Router } from '@angular/router';
///import { FileTransfer } from '@ionic-native/file-transfer';
//import { File } from '@ionic-native/file';
//import { FileOpener } from '@ionic-native/file-opener';

@Component({
  selector: 'message',
  templateUrl: './message.page.html'
})
export class MessagePage {
  session: any;

  constructor(
    private dataProvider: ConferenceData,
    private route: ActivatedRoute,
    private router: Router
    
   // ,private document: DocumentViewer,
   // private file: File,
   // private transfer: FileTransfer
    ) {}

  ionViewWillEnter() {
    console.log("t");
    this.dataProvider.load().subscribe((data: any) => {
      if (
        data //&&
     //   data.name// &&
     //   data.schedule[0] &&
      //  data.schedule[0].groups
      ) {
        const sessionId = this.route.snapshot.paramMap.get('id').replace("%20", " ");
  //     console.log(sessionId);
        for (const group of data.schedule[0].groups) {
          if (group && group.sessions) {
            for (const session of group.sessions) {
              console.log("failed here");
              if (session && session.name === sessionId) {
                console.log(sessionId);
                this.session = session;
                break;
              }
            }
          }
        }
      }
    });
  }
  generatePDF() {
   // const options: DocumentViewerOptions = {
   //   title: 'My PDF'
  //  }
   // this.document.viewDocument('assets/img/bon_bun.pdf', 'application/pdf', options);
  }
  navigate(url: string) {
    return this.router.navigateByUrl(url);
  }

}
