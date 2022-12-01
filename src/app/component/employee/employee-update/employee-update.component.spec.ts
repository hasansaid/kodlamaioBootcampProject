import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeUpdateComponent } from './employee-update.component';

describe('EmployeeUpdateComponent', () => {
  let component: EmployeeUpdateComponent;
  let fixture: ComponentFixture<EmployeeUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
