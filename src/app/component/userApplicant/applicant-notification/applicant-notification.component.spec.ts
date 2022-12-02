import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantNotificationComponent } from './applicant-notification.component';

describe('ApplicantNotificationComponent', () => {
  let component: ApplicantNotificationComponent;
  let fixture: ComponentFixture<ApplicantNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicantNotificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicantNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
