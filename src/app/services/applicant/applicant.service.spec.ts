import { TestBed } from '@angular/core/testing';

import { ApplicantService } from './applicant.service';

describe('ApplicantService', () => {
  let service: ApplicantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplicantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
