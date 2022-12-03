import { TestBed } from '@angular/core/testing';

import { LoginInstructorService } from './login-instructor.service';

describe('LoginInstructorService', () => {
  let service: LoginInstructorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginInstructorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
