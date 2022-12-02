import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantPageComponent } from './applicant-page.component';

describe('ApplicantPageComponent', () => {
  let component: ApplicantPageComponent;
  let fixture: ComponentFixture<ApplicantPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicantPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicantPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
