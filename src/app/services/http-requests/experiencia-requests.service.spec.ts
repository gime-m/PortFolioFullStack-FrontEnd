import { TestBed } from '@angular/core/testing';

import { ExperienciaRequestsService } from './experiencia-requests.service';

describe('ExperienciaRequestsService', () => {
  let service: ExperienciaRequestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExperienciaRequestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
