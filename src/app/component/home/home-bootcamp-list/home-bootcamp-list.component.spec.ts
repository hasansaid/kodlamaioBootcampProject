import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBootcampListComponent } from './home-bootcamp-list.component';

describe('HomeBootcampListComponent', () => {
  let component: HomeBootcampListComponent;
  let fixture: ComponentFixture<HomeBootcampListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeBootcampListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeBootcampListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
