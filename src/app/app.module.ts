import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { AppComponent } from './app.component';


 const firebaseConfig = {
    apiKey: "AIzaSyD66Bev_bJmrL1UPMxv71F1mExGvc26AOY",
    authDomain: "psbuiappangularfire2.firebaseapp.com",
    databaseURL: "https://psbuiappangularfire2.firebaseio.com",
    projectId: "psbuiappangularfire2",
    storageBucket: "psbuiappangularfire2.appspot.com",
    messagingSenderId: "73705825948"
  };

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
