import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsivenavbarComponent } from './responsivenavbar.component';

describe('ResponsivenavbarComponent', () => {
  let component: ResponsivenavbarComponent;
  let fixture: ComponentFixture<ResponsivenavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponsivenavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponsivenavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
