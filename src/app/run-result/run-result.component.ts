import { Component } from '@angular/core';
import { RunulatorService } from '../runulator.service';

@Component({
  selector: 'app-run-result',
  templateUrl: './run-result.component.html',
  styleUrls: ['./run-result.component.scss']
})
export class RunResultComponent {
  constructor(public runService: RunulatorService) { }

}
