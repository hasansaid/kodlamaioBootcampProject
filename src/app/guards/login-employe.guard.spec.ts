import { TestBed } from '@angular/core/testing';

import { LoginEmployeGuard } from './login-employe.guard';

describe('LoginEmployeGuard', () => {
  let guard: LoginEmployeGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoginEmployeGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
