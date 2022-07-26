import { TestBed } from '@angular/core/testing';

import { TemaRequestsService } from './tema-requests.service';

describe('TemaServiceService', () => {
  let service: TemaRequestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemaRequestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
