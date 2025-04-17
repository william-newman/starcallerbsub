import { TestBed } from '@angular/core/testing';

import { DjEmailServiceService } from './dj-email-service.service';

describe('DjEmailServiceService', () => {
  let service: DjEmailServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DjEmailServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
