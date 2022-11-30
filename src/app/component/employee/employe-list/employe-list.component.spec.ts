import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeListComponent } from './employe-list.component';

describe('EmployeListComponent', () => {
  let component: EmployeListComponent;
  let fixture: ComponentFixture<EmployeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
