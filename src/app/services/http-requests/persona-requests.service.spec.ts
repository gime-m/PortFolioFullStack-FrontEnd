import { TestBed } from '@angular/core/testing';

import {PersonaRequestsService} from './persona-requests.service';

describe('PersonaVariablesService', () => {
  let service: PersonaRequestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonaRequestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
