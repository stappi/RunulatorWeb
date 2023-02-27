import { Component, Input } from '@angular/core';
import { RunulatorService } from '../runulator.service';
import { Parameter } from '../utilities/RunParameter';

@Component({
  selector: 'app-pill-button',
  templateUrl: './pill-button.component.html',
  styleUrls: ['./pill-button.component.scss']
})
export class PillButtonComponent {
  @Input() parameter = Parameter.none;
  @Input() isSelected = false;

  constructor(public runService: RunulatorService) { }
}
