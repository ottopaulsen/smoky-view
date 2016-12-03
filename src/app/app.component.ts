import { Component, Input } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

export class Reading {
  title: string;
  value: FirebaseObjectObservable<any>;
  unit: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Smoky!';
  smoky: FirebaseObjectObservable<any>;
  weather: FirebaseObjectObservable<any>;
  readings: Reading[];
  // readings: String[];
  constructor(af: AngularFire) {
      this.smoky = af.database.object('/latest/smoky/1');
      this.weather = af.database.object('/latest/weather');
      // this.readings = [
      //     "Otto",
      //     "Kari",
      //     "Nora",
      //     "Hilde",
      //     "Magnus"
      // ];
      this.readings = [
          { title: 'Temperatur inne', value: af.database.object('/latest/smoky/1/inside/temperature'), unit: '°C' },
          { title: 'Temperatur ute', value: af.database.object('/latest/weather/outTemp_C'), unit: '°C' },
          { title: 'Luftfuktighet inne', value: af.database.object('/latest/smoky/1/inside/humidity'), unit: '%' },
          { title: 'Røyknivå', value: af.database.object('/latest/smoky/1/inside/smoke'), unit: '' }
      ];
  }  
}




