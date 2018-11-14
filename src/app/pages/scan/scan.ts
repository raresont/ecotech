import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { MenuController, Slides } from '@ionic/angular';

import { Storage } from '@ionic/storage';
//import { OpenNativeSettings } from '@ionic-native/open-native-settings';
//import { NFC, Ndef } from '@ionic-native/nfc';
//import { File } from '@ionic-native/file';

@Component({
  selector: 'scan',
  templateUrl: 'scan.html',
  styleUrls: ['./scan.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ScanPage {
  showSkip = true;
  element:any;
  picToView:string="assets/img/NFC_OFF.png";
  changeableBG:string="assets/img/BG_OFF.png";
  status:any = "OFF";
  dataFromFile:any;

  @ViewChild('slides') slides: Slides;

  constructor(
    public menu: MenuController,
    public router: Router,
    public storage: Storage
    
  //  ,private file: File
    //,
  //  private openNativeSettings: OpenNativeSettings,
   // private nfc: NFC
    //,
   // private ndef: Ndef
  ) {
/*
    this.nfc.addNdefListener(() => {
      console.log('successfully attached ndef listener');
    }, (err) => {
      console.log('error attaching ndef listener', err);
    }).subscribe((event) => {
      console.log('received ndef message. the tag contains: ', event.tag);
      console.log('decoded tag id', this.nfc.bytesToHexString(event.tag.id));
    
   //   let message = this.ndef.textRecord('Hello world');
    //  this.nfc.share([message]).then(onSuccess).catch(onError);
    }
    );

*/
  }

  startApp() {
    this.router
      .navigateByUrl('/app/tabs/(schedule:schedule)')
      .then(() => this.storage.set('ion_did_tutorial', 'true'));
  }

  onSlideChangeStart(event) {
    event.target.isEnd().then(isEnd => {
      this.showSkip = !isEnd;
    });
  }

  ionViewWillEnter() {
    //problems
  //  this.picToView="assets/img/NCF_OFF.png";

    this.storage.get('ion_did_tutorial').then(res => {
      if (res === true) {
        this.router.navigateByUrl('/app/tabs/(schedule:schedule)');
      }
    });

    this.menu.enable(false);
  }

  ionViewDidLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }
 
        
  changeImage() {
    this.element = document.getElementById("top");
     // if (true) 
   //   {
    setTimeout( () => {
          this.picToView = "assets/img/NCF_ON.png";
          this.changeableBG = "assets/img/BG_ON.png";
     //     this.element.src = "assets/img/Power_Button.png";
          this.element.classList.add("test");
          this.status = "ON";
          /*
          this.file.checkDir(
         //   this.file.dataDirectory
         
         this.file.externalRootDirectory 
            , 'Download').then(
              _ => {console.log('Directory exists');

            this.file.readAsText(this.file.externalRootDirectory + "Download", "data.json")
            .then(
              (result) => {
                this.dataFromFile = JSON.parse(result);
              }
            )
            
            }).catch(
                err => console.log('Directory doesn\'t exist'));
   //       this.openNativeSettings.open("nfc_settings");
   */
  },100);
          setTimeout( () => {
          //  if (newState == -1) {
          //      alert('VIDEO HAS STOPPED');
          //  }
           this.element.classList.remove("test");
          this.picToView = "assets/img/progress-and-tick-icon-animation.gif";


            setTimeout( () => {
         //     this.dismiss();
             this.router.navigateByUrl(`/message/last`);
            }, 3500);
        }, 2000);
     // }
    //  else 
    //  {
      //    this.element.src = "assets/img/Off_Button.png";
     //     this.element.classList.remove("test");
    //  }
  }

}
