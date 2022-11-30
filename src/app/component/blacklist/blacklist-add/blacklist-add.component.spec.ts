import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlacklistAddComponent } from './blacklist-add.component';

describe('BlacklistAddComponent', () => {
  let component: BlacklistAddComponent;
  let fixture: ComponentFixture<BlacklistAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlacklistAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlacklistAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
