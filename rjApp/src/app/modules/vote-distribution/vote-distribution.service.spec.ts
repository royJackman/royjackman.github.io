import { TestBed } from '@angular/core/testing';

import { VoteDistributionService } from './vote-distribution.service';

describe('VoteDistributionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VoteDistributionService = TestBed.get(VoteDistributionService);
    expect(service).toBeTruthy();
  });
});
