import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootcampDetailComponent } from './bootcamp-detail.component';

describe('BootcampDetailComponent', () => {
  let component: BootcampDetailComponent;
  let fixture: ComponentFixture<BootcampDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootcampDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BootcampDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
