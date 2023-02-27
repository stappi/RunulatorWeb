import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunResultParameterComponent } from './run-result-parameter.component';

describe('RunResultParameterComponent', () => {
  let component: RunResultParameterComponent;
  let fixture: ComponentFixture<RunResultParameterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RunResultParameterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RunResultParameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
