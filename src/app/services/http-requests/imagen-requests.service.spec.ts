import { TestBed } from '@angular/core/testing';

import { ImagenRequestsService } from './imagen-requests.service';

describe('ImagenRequestsService', () => {
  let service: ImagenRequestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImagenRequestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
