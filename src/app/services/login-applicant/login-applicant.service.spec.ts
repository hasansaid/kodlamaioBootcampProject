import { TestBed } from '@angular/core/testing';

import { LoginApplicantService } from './login-applicant.service';

describe('LoginApplicantService', () => {
  let service: LoginApplicantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginApplicantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
