import { TestBed } from '@angular/core/testing';

import { RunulatorService } from './runulator.service';

describe('RunulatorService', () => {
  let service: RunulatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RunulatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
