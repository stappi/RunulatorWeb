import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunResultComponent } from './run-result.component';

describe('RunResultComponent', () => {
  let component: RunResultComponent;
  let fixture: ComponentFixture<RunResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RunResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RunResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
