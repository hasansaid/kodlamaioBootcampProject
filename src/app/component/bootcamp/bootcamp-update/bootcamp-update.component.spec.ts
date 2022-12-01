import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootcampUpdateComponent } from './bootcamp-update.component';

describe('BootcampUpdateComponent', () => {
  let component: BootcampUpdateComponent;
  let fixture: ComponentFixture<BootcampUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootcampUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BootcampUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
