import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NativeService } from '../../providers/nativeservice';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  appversion:string;
  constructor(public navCtrl: NavController,private nativeService: NativeService) {    
     this.nativeService.getVersionNumber().then(val=>{
        this.appversion = val;
     })
  }

}
