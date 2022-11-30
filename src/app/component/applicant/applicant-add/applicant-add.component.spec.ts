import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantAddComponent } from './applicant-add.component';

describe('ApplicantAddComponent', () => {
  let component: ApplicantAddComponent;
  let fixture: ComponentFixture<ApplicantAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicantAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicantAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
