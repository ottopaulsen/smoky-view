import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';


export class Reading {
  title: string;
  value: Observable<any>;
  unit: string;
  format: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Smoky';
  readings: Reading[];
  user: Observable<firebase.User>;
  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
      this.readings = [
          { title: 'Temperatur inne', value: af.object('/latest/smoky/1/inside/temperature').valueChanges(), unit: '°C', format: '1.1-1'  },
          { title: 'Temperatur ute', value: af.object('/latest/weather/outTemp_C').valueChanges(), unit: '°C', format: '1.1-1' },
          { title: 'Luftfuktighet inne', value: af.object('/latest/smoky/1/inside/humidity').valueChanges(), unit: '%', format: '1.0-0'  },
          { title: 'Røyknivå', value: af.object('/latest/smoky/1/inside/smoke').valueChanges(), unit: '', format: '1.0-0'  }
        ];
  }
}
