import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantBootcampComponent } from './applicant-bootcamp.component';

describe('ApplicantBootcampComponent', () => {
  let component: ApplicantBootcampComponent;
  let fixture: ComponentFixture<ApplicantBootcampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicantBootcampComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicantBootcampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
