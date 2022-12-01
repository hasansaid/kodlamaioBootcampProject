import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlacklistUpdateComponent } from './blacklist-update.component';

describe('BlacklistUpdateComponent', () => {
  let component: BlacklistUpdateComponent;
  let fixture: ComponentFixture<BlacklistUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlacklistUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlacklistUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
