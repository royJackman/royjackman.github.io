import { TestBed } from '@angular/core/testing';

import { WealthCalculationService } from './wealth-contribution-calculator.service';

describe('WealthCalculationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WealthCalculationService = TestBed.get(WealthCalculationService);
    expect(service).toBeTruthy();
  });
});
