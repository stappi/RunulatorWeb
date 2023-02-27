import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacePickerComponent } from './pace-picker.component';

describe('PacePickerComponent', () => {
  let component: PacePickerComponent;
  let fixture: ComponentFixture<PacePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacePickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
