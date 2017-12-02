import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ReadingComponent } from './reading.component';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
    apiKey: "AIzaSyDsmLLbMsyoRLbTVmi31MM_yjxlvKVfmtc",
    authDomain: "smoky-c9f1b.firebaseapp.com",
    databaseURL: "https://smoky-c9f1b.firebaseio.com/",
    storageBucket: "smoky-c9f1b.appspot.com",
    messagingSenderId: ""
};

@NgModule({
  declarations: [
    AppComponent,
    ReadingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
