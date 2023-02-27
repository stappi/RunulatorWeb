import { Component } from '@angular/core';

@Component({
  selector: 'app-pace-picker',
  templateUrl: './pace-picker.component.html',
  styleUrls: ['./pace-picker.component.scss']
})
export class PacePickerComponent {

  setPace() {
    alert("Pace");
  }
}
