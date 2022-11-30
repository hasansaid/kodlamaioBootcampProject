import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorAddComponent } from './instructor-add.component';

describe('InstructorAddComponent', () => {
  let component: InstructorAddComponent;
  let fixture: ComponentFixture<InstructorAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstructorAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
