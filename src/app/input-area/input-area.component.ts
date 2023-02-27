import { Component } from '@angular/core';
import { RunulatorService } from '../runulator.service';

@Component({
  selector: 'app-input-area',
  templateUrl: './input-area.component.html',
  styleUrls: ['./input-area.component.scss']
})
export class InputAreaComponent {
  constructor(public runService: RunulatorService) { }
}
