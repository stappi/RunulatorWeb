import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RunulatorService } from '../runulator.service';
import { Parameter } from '../utilities/RunParameter';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import {MatDialog} from '@angular/material/dialog';
import { PacePickerComponent } from '../pace-picker/pace-picker.component';

export interface Distance {
  label: string;
  distance: string;
}

@Component({
  selector: 'app-input-parameter',
  templateUrl: './input-parameter.component.html',
  styleUrls: ['./input-parameter.component.scss']
})
export class InputParameterComponent implements OnInit {
  @Input() parameter: Parameter = { label: 'Result Parameter', unit: '', unitLabel: '' };

  isDinstance() { return this.parameter === Parameter.distance; }
  isRunTime() { return this.parameter === Parameter.runTime; }
  isPace() { return this.parameter === Parameter.pace; }
  isSpeed() { return this.parameter === Parameter.speed; }
  isNone() { return !this.isDinstance() && !this.isRunTime() && !this.isPace() && !this.isSpeed(); }

  myControl = new FormControl<string | Distance>('');
  options: Distance[] = [{ label: 'Marathon', distance: "42.195" }, { label: 'Half Marathon', distance: "21.0975" }];
  filteredOptions: Observable<Distance[]> = new Observable<Distance[]>();

  constructor(public runService: RunulatorService, private matDialog: MatDialog) { }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => {
        return this.options;
      })
    );
  }


  displayFn(distance: Distance): string {
    return distance ? distance.distance : "";
  }

  private _filter(name: string): Distance[] {
    const filterValue = name.toLowerCase();

    return this.options.filter((option) =>
      option.label.toLowerCase().includes(filterValue)
    );
  }

  onOpenDialogClick() {
    this.matDialog.open(PacePickerComponent);
  }
}
