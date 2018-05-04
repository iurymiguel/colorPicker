import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  color: string = "#FF0000";

  constructor(public navCtrl: NavController) {

  }

  setColor(ev: any){
     this.color = ev; 
  }
}
