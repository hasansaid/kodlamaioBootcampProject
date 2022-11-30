import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootcampListComponent } from './bootcamp-list.component';

describe('BootcampListComponent', () => {
  let component: BootcampListComponent;
  let fixture: ComponentFixture<BootcampListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootcampListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BootcampListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
