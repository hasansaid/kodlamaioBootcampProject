import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorBootcampComponent } from './instructor-bootcamp.component';

describe('InstructorBootcampComponent', () => {
  let component: InstructorBootcampComponent;
  let fixture: ComponentFixture<InstructorBootcampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorBootcampComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstructorBootcampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
