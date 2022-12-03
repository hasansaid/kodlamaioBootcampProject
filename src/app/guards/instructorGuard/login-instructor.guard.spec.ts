import { TestBed } from '@angular/core/testing';

import { LoginInstructorGuard } from './login-instructor.guard';

describe('LoginInstructorGuard', () => {
  let guard: LoginInstructorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoginInstructorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
