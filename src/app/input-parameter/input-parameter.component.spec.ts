import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputParameterComponent } from './input-parameter.component';

describe('InputParameterComponent', () => {
  let component: InputParameterComponent;
  let fixture: ComponentFixture<InputParameterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputParameterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputParameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
