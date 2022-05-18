import { TestBed } from '@angular/core/testing';

import { EducacionRequestsService } from './educacion-requests.service';

describe('EducacionRequestsService', () => {
  let service: EducacionRequestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EducacionRequestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
