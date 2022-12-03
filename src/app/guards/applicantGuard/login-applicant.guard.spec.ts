import { TestBed } from '@angular/core/testing';

import { LoginApplicantGuard } from './login-applicant.guard';

describe('LoginApplicantGuard', () => {
  let guard: LoginApplicantGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoginApplicantGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
