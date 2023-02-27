import { Component, Input } from '@angular/core';
import { RunulatorService } from '../runulator.service';
import { Parameter } from '../utilities/RunParameter';

@Component({
  selector: 'app-pill-bar',
  templateUrl: './pill-bar.component.html',
  styleUrls: ['./pill-bar.component.scss']
})
export class PillBarComponent {

  @Input() parameters = [Parameter.distance, Parameter.runTime, Parameter.pace, Parameter.speed];

  constructor(public runService: RunulatorService) { }
}
