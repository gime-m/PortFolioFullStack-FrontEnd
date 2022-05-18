import { TestBed } from '@angular/core/testing';

import { SkillRequestsService } from './skill-requests.service';

describe('SkillRequestsService', () => {
  let service: SkillRequestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkillRequestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
