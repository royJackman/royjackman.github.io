import { TestBed } from '@angular/core/testing';

import { NationalProgramService } from './national-program-balance.service';

describe('NationalProgramService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NationalProgramService = TestBed.get(NationalProgramService);
    expect(service).toBeTruthy();
  });
});
