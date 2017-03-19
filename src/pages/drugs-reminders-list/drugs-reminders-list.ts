import { DrugsReminderPage } from './../drugs-reminder/drugs-reminder';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the DrugsRemindersList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-drugs-reminders-list',
  templateUrl: 'drugs-reminders-list.html'
})
export class DrugsRemindersListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  newReminder(){
    this.navCtrl.push(DrugsReminderPage);
  }

}
