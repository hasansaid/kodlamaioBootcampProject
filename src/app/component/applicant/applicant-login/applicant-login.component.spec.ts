import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantLoginComponent } from './applicant-login.component';

describe('ApplicantLoginComponent', () => {
  let component: ApplicantLoginComponent;
  let fixture: ComponentFixture<ApplicantLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicantLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicantLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
