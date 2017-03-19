import { DrugsReminderPage } from './../pages/drugs-reminder/drugs-reminder';
import { DrugsRemindersListPage } from './../pages/drugs-reminders-list/drugs-reminders-list';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DrugsRemindersListPage,
    DrugsReminderPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DrugsRemindersListPage,
    DrugsReminderPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
