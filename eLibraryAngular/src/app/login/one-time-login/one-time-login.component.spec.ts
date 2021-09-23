import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneTimeLoginComponent } from './one-time-login.component';

describe('UserLoginComponent', () => {
  let component: OneTimeLoginComponent;
  let fixture: ComponentFixture<OneTimeLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneTimeLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneTimeLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
