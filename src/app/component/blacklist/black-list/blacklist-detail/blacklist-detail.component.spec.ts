import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlacklistDetailComponent } from './blacklist-detail.component';

describe('BlacklistDetailComponent', () => {
  let component: BlacklistDetailComponent;
  let fixture: ComponentFixture<BlacklistDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlacklistDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlacklistDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
