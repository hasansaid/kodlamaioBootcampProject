import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeInstructorListComponent } from './home-instructor-list.component';

describe('HomeInstructorListComponent', () => {
  let component: HomeInstructorListComponent;
  let fixture: ComponentFixture<HomeInstructorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeInstructorListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeInstructorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
