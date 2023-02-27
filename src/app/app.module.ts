import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PillButtonComponent } from './pill-button/pill-button.component';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { PillBarComponent } from './pill-bar/pill-bar.component';
import { InputAreaComponent } from './input-area/input-area.component';
import { InputParameterComponent } from './input-parameter/input-parameter.component';
import { RunResultComponent } from './run-result/run-result.component';
import { RunResultParameterComponent } from './run-result-parameter/run-result-parameter.component';
import { OnlyNumberDirective } from './only-number.directive';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { PacePickerComponent } from './pace-picker/pace-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PillButtonComponent,
    PillBarComponent,
    InputAreaComponent,
    InputParameterComponent,
    RunResultComponent,
    RunResultParameterComponent,
    OnlyNumberDirective,
    PacePickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
