import { Component, Input } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { Reading } from './app.component';


@Component({
  selector: 'readingRow',
  templateUrl: './reading.component.html',
  styleUrls: ['./reading.component.css']
})

export class ReadingComponent {
  @Input() readingData: Reading;
}


