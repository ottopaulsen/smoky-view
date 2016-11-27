import { Component } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Otto, app works!';
  smoky: FirebaseObjectObservable<any>;
  constructor(af: AngularFire) {
      this.smoky = af.database.object('/latest/smoky/1');
  }  
}
