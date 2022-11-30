import { TestBed } from '@angular/core/testing';

import { BootcampService } from './bootcamp.service';

describe('BootcampService', () => {
  let service: BootcampService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BootcampService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
