import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBootcampDetailComponent } from './home-bootcamp-detail.component';

describe('HomeBootcampDetailComponent', () => {
  let component: HomeBootcampDetailComponent;
  let fixture: ComponentFixture<HomeBootcampDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeBootcampDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeBootcampDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
