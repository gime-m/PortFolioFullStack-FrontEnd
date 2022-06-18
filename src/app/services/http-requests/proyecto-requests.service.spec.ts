import { TestBed } from '@angular/core/testing';

import { ProyectoRequestsService } from './proyecto-requests.service';

describe('ProyectoRequestsService', () => {
  let service: ProyectoRequestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProyectoRequestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
