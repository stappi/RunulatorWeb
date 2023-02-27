import { Injectable } from '@angular/core';
import { Parameter } from './utilities/RunParameter';

@Injectable({
  providedIn: 'root'
})
export class RunulatorService {
  firstParameter = Parameter.none;
  secondParameter = Parameter.none;

  constructor() { }

  selectParameter(parameter: Parameter) {

    if (parameter === Parameter.distance) {
      if (this.firstParameter === Parameter.distance) {
        if (this.secondParameter === Parameter.runTime) { 
          this.firstParameter = Parameter.runTime;
          this.secondParameter = Parameter.none;
        } else { 
          this.firstParameter = Parameter.none;
        }
      } else if (this.firstParameter === Parameter.runTime) {
        this.firstParameter = Parameter.distance;
        this.secondParameter = Parameter.runTime;
      } else {
        this.firstParameter = Parameter.distance;
      }
    } else if (parameter === Parameter.runTime) {
      if (this.firstParameter === Parameter.runTime) {
        this.firstParameter = Parameter.none;
      } else if (this.secondParameter === Parameter.runTime) {
        this.secondParameter = Parameter.none;
      } else if (this.firstParameter === Parameter.distance) {
        this.secondParameter = Parameter.runTime;
      } else {
        this.firstParameter = Parameter.runTime;
      }
    } else {
      if (this.secondParameter === parameter) {
        this.secondParameter = Parameter.none;
      } else {
        this.secondParameter = parameter;
      }
    }
  }

  getFirstParameter() {
    return this.firstParameter === Parameter.none ? { label: 'Run Parameter 1', unit: '', unitLabel: '' } : this.firstParameter;
  }

  getSecondParameter() {
    return this.secondParameter === Parameter.none ? { label: 'Run Parameter 2', unit: '', unitLabel: '' } : this.secondParameter;
  }

  isParameterSelected(parameter: Parameter): boolean {
    return parameter === this.firstParameter || parameter === this.secondParameter;
  }

  isParameterDisabled(parameter: Parameter): boolean {
    if (this.isParameterSelected(parameter)) {
      return false;
    } else if (this.firstParameter !== Parameter.none && this.secondParameter !== Parameter.none) {
      return true;
    } else if (parameter === Parameter.speed) {
      return this.secondParameter === Parameter.pace;
    } else if (parameter === Parameter.pace) {
      return this.secondParameter === Parameter.speed;
    }
    return false;
  }

  isInputDisabled(): boolean {
    return this.firstParameter === Parameter.none || this.secondParameter === Parameter.none;
  }

  getInputSelectionText() {
    if (this.firstParameter === Parameter.none && this.secondParameter === Parameter.none) {
      return "Select two run parameters.";
    } else if (this.firstParameter === Parameter.none || this.secondParameter === Parameter.none) {
      return "Select a second run parameter.";
    } else {
      return "Please enter values to calculate the run.";
    }
  }

  getResultParameter1() {
    if (this.firstParameter  === Parameter.none && this.secondParameter === Parameter.speed) {
      return Parameter.pace;
    } else if (this.firstParameter === Parameter.none && this.secondParameter === Parameter.pace) {
      return Parameter.speed;
    } else if (this.firstParameter === Parameter.distance && this.secondParameter === Parameter.runTime) {
      return Parameter.pace
    } else if (this.firstParameter === Parameter.distance && (this.secondParameter === Parameter.speed || this.secondParameter === Parameter.pace)) {
      return Parameter.runTime
    } else if (this.firstParameter === Parameter.runTime && (this.secondParameter === Parameter.speed || this.secondParameter === Parameter.pace)) {
      return Parameter.distance
    } else {
      return { label: 'Result Parameter 1', unit: '', unitLabel: '' };
    }
  }

  getResultParameter2() {
    if (this.firstParameter === Parameter.distance && (this.secondParameter === Parameter.runTime || this.secondParameter === Parameter.pace)) {
      return Parameter.speed
    } else if (this.firstParameter === Parameter.distance && this.secondParameter === Parameter.speed) {
      return Parameter.pace
    } else if (this.firstParameter === Parameter.runTime && this.secondParameter === Parameter.pace) {
      return Parameter.speed
    } else if (this.firstParameter === Parameter.runTime && this.secondParameter === Parameter.speed) {
      return Parameter.pace
    } else {
      return { label: 'Result Parameter 2', unit: '', unitLabel: '' };
    }
  }
}
