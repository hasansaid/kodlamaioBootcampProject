import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationUpdateComponent } from './application-update.component';

describe('ApplicationUpdateComponent', () => {
  let component: ApplicationUpdateComponent;
  let fixture: ComponentFixture<ApplicationUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicationUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
