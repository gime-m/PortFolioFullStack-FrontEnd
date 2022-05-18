import { TestBed } from '@angular/core/testing';

import { PersonaVariablesService } from './persona-variables.service';

describe('PersonaVariablesService', () => {
  let service: PersonaVariablesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonaVariablesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
