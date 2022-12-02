import { TestBed } from '@angular/core/testing';

import { LoginEmployeeService } from './login-employee.service';

describe('LoginEmployeeService', () => {
  let service: LoginEmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginEmployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
