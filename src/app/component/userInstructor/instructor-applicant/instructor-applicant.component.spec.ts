import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorApplicantComponent } from './instructor-applicant.component';

describe('InstructorApplicantComponent', () => {
  let component: InstructorApplicantComponent;
  let fixture: ComponentFixture<InstructorApplicantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorApplicantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstructorApplicantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
