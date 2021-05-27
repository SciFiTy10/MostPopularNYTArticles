import { TestBed } from '@angular/core/testing';

import { EmailedService } from './emailed.service';

describe('EmailedService', () => {
  let service: EmailedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
