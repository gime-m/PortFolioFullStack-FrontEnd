import { TestBed } from '@angular/core/testing';

import { PersonaFormService } from './persona-form.service';

describe('PersonaFormService', () => {
  let service: PersonaFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonaFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
