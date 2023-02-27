import { Component, Input } from '@angular/core';
import { RunulatorService } from '../runulator.service';

@Component({
  selector: 'app-run-result-parameter',
  templateUrl: './run-result-parameter.component.html',
  styleUrls: ['./run-result-parameter.component.scss']
})
export class RunResultParameterComponent {
  @Input() label = "Result Parameter";
  @Input() unit = "";

  constructor(public runService: RunulatorService) { }
}
