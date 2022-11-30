import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootcampAddComponent } from './bootcamp-add.component';

describe('BootcampAddComponent', () => {
  let component: BootcampAddComponent;
  let fixture: ComponentFixture<BootcampAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootcampAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BootcampAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
