import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PillButtonComponent } from './pill-button.component';

describe('PillButtonComponent', () => {
  let component: PillButtonComponent;
  let fixture: ComponentFixture<PillButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PillButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PillButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
