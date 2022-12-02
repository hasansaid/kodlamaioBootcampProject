import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorComponent } from './instructor.component';

describe('InstructorComponent', () => {
  let component: InstructorComponent;
  let fixture: ComponentFixture<InstructorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
