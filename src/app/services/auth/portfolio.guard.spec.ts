import { TestBed } from '@angular/core/testing';

import { PortfolioGuard } from './portfolio.guard';

describe('GuardGuard', () => {
  let guard: PortfolioGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PortfolioGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
